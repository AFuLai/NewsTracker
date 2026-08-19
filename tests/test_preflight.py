"""preflight — endpoint selection, and the daemon's own output.

Output used to go to DEVNULL. That cost two diagnoses: an auto-start that
failed reported "ollama down (auto-start failed)" and nothing else, and run
#65's translate phase ran at 42.3 s/article against a 5.5 s bench with 100
minutes of blank artefacts to explain it. A log nobody writes is not a log.

Selection is the second half: with remote endpoints configured, "is ollama up"
stops being a yes/no about this machine.
"""
import subprocess

import tracker.ollama_hosts as hosts
import tracker.preflight as pf

REMOTE = "http://10.139.180.21:11434"
LOCAL = "http://localhost:11434"


class _FakePopen:
    calls = []

    def __init__(self, argv, **kw):
        _FakePopen.calls.append((argv, kw))


def _arm(monkeypatch, tmp_path, *, healthy, up=(), urls=None):
    """Wire preflight to fakes. `healthy` decides the endpoint probe, `up` is
    the sequence the post-start poll sees."""
    _FakePopen.calls = []
    log = tmp_path / "logs" / "ollama-serve.log"
    monkeypatch.setattr(pf, "OLLAMA_LOG", log)
    monkeypatch.setattr(pf.subprocess, "Popen", _FakePopen)
    monkeypatch.setattr(pf.time, "sleep", lambda s: None)
    monkeypatch.delenv("TRACKER_OLLAMA_REMOTE_WINDOW", raising=False)
    if urls is None:
        monkeypatch.delenv("TRACKER_OLLAMA_URLS", raising=False)
    else:
        monkeypatch.setenv("TRACKER_OLLAMA_URLS", urls)
    monkeypatch.setattr(hosts, "healthy", lambda url, timeout=3.0: healthy(url))
    seq = iter(up)
    monkeypatch.setattr(pf, "ollama_up", lambda timeout=3.0: next(seq, False))
    hosts.reset()
    return log


def test_daemon_output_goes_to_the_log_not_devnull(monkeypatch, tmp_path):
    log = _arm(monkeypatch, tmp_path, healthy=lambda u: False, up=[True])

    assert pf.ensure_ollama(start_timeout=2) is True
    (argv, kw), = _FakePopen.calls
    assert argv == ["ollama", "serve"]
    assert kw["stdout"] is not subprocess.DEVNULL
    assert kw["stderr"] is subprocess.STDOUT
    assert kw["stdout"].name == str(log)
    # The parent must not keep the fd: every tracker process that ever started
    # a daemon would otherwise hold one open.
    assert kw["stdout"].closed


def test_a_start_writes_a_header_naming_the_slot_count(monkeypatch, tmp_path):
    log = _arm(monkeypatch, tmp_path, healthy=lambda u: False, up=[True])
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")

    pf.ensure_ollama(start_timeout=2)
    text = log.read_text(encoding="utf-8")
    assert "ollama serve started by tracker" in text
    # Which slot count this daemon got is the whole reason the header exists:
    # a 4-wide pool against a 1-slot daemon just queues.
    assert "OLLAMA_NUM_PARALLEL=4" in text


def test_a_failed_start_says_where_to_read_why(monkeypatch, tmp_path, capsys):
    log = _arm(monkeypatch, tmp_path, healthy=lambda u: False)

    assert pf.ensure_ollama(start_timeout=2) is False
    assert str(log) in capsys.readouterr().out


def test_a_daemon_already_up_is_not_restarted(monkeypatch, tmp_path):
    _arm(monkeypatch, tmp_path, healthy=lambda u: True)

    assert pf.ensure_ollama() is True
    assert _FakePopen.calls == []
    # Not started here, so its slot count is unknown — the report must not
    # claim one.
    assert pf.started_here is False


def test_a_healthy_remote_is_used_and_nothing_is_started_here(monkeypatch, tmp_path):
    _arm(monkeypatch, tmp_path, healthy=lambda u: u == REMOTE,
         urls=f"{REMOTE},{LOCAL}")

    assert pf.ensure_ollama() is True
    assert _FakePopen.calls == []          # do not wake a local daemon we will not use
    assert hosts.current() == REMOTE
    assert pf.started_here is False


def test_a_remote_only_list_does_not_try_to_start_a_daemon(monkeypatch, tmp_path,
                                                           capsys):
    _arm(monkeypatch, tmp_path, healthy=lambda u: False, urls=REMOTE)

    # We cannot start ollama on someone else's machine, and reporting success
    # after starting a local daemon nobody asked for would be worse.
    assert pf.ensure_ollama() is False
    assert _FakePopen.calls == []
    assert "none of them is local" in capsys.readouterr().out


def test_local_is_started_when_it_is_the_last_entry_and_the_remotes_are_down(
        monkeypatch, tmp_path):
    _arm(monkeypatch, tmp_path, healthy=lambda u: False, up=[True],
         urls=f"{REMOTE},{LOCAL}")

    assert pf.ensure_ollama(start_timeout=2) is True
    assert len(_FakePopen.calls) == 1
    assert pf.started_here is True
