"""preflight — the daemon's own output must land somewhere readable.

It used to go to DEVNULL. That cost two diagnoses: an auto-start that failed
reported "ollama down (auto-start failed)" and nothing else, and run #65's
translate phase ran at 42.3 s/article against a 5.5 s bench with 100 minutes
of blank artefacts to explain it. A log nobody writes is not a log.
"""
import subprocess

import tracker.preflight as pf


class _FakePopen:
    calls = []

    def __init__(self, argv, **kw):
        _FakePopen.calls.append((argv, kw))


def _arm(monkeypatch, tmp_path, *, comes_up):
    _FakePopen.calls = []
    log = tmp_path / "logs" / "ollama-serve.log"
    monkeypatch.setattr(pf, "OLLAMA_LOG", log)
    monkeypatch.setattr(pf, "ollama_up", lambda timeout=3.0: comes_up)
    monkeypatch.setattr(pf.subprocess, "Popen", _FakePopen)
    monkeypatch.setattr(pf.time, "sleep", lambda s: None)
    return log


def test_daemon_output_goes_to_the_log_not_devnull(monkeypatch, tmp_path):
    seen = iter([False, True])          # down, then up on the first poll
    log = _arm(monkeypatch, tmp_path, comes_up=False)
    monkeypatch.setattr(pf, "ollama_up", lambda timeout=3.0: next(seen))

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
    seen = iter([False, True])
    log = _arm(monkeypatch, tmp_path, comes_up=False)
    monkeypatch.setattr(pf, "ollama_up", lambda timeout=3.0: next(seen))
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")

    pf.ensure_ollama(start_timeout=2)
    text = log.read_text(encoding="utf-8")
    assert "ollama serve started by tracker" in text
    # Which slot count this daemon got is the whole reason the header exists:
    # a 4-wide pool against a 1-slot daemon just queues.
    assert "OLLAMA_NUM_PARALLEL=4" in text


def test_a_failed_start_says_where_to_read_why(monkeypatch, tmp_path, capsys):
    log = _arm(monkeypatch, tmp_path, comes_up=False)

    assert pf.ensure_ollama(start_timeout=2) is False
    out = capsys.readouterr().out
    assert str(log) in out


def test_a_daemon_already_up_is_not_restarted(monkeypatch, tmp_path):
    _arm(monkeypatch, tmp_path, comes_up=True)

    assert pf.ensure_ollama() is True
    assert _FakePopen.calls == []
    # Not started here, so its slot count is unknown — the report must not
    # claim one (WP2 follow-up).
    assert pf.started_here is False
