"""run_pipeline start_at / force behaviour (phases mocked)."""
import tracker.orchestrator as o
import tracker.preflight as pf


def _wire(monkeypatch):
    calls = []
    def rec(name):
        def f(*a, **k):
            calls.append(name)
        return f
    monkeypatch.setattr(o, "_phase_fetch", rec("fetch"))
    monkeypatch.setattr(o, "_phase_gate", rec("gate"))
    monkeypatch.setattr(o, "_phase_summarize", rec("summarize"))
    monkeypatch.setattr(o, "_phase_translate", rec("translate"))
    monkeypatch.setattr(o, "_phase_write", rec("write"))
    monkeypatch.setattr(o, "_phase_cross_cleanup", rec("cleanup"))
    monkeypatch.setattr(o, "_reset_resummarize", rec("reset_sum"))
    monkeypatch.setattr(o, "_reset_retranslate", rec("reset_tra"))
    monkeypatch.setattr(o, "_finalize", lambda *a, **k: None)
    monkeypatch.setattr(pf, "ensure_ollama", lambda *a, **k: True)
    return calls


def _run(tmp_path, **kw):
    return o.run_pipeline(since="2026-01-01", until="2026-01-02",
                          trackers=["security"], db=tmp_path / "t.sqlite", **kw)


def test_full_run_runs_all_phases(monkeypatch, tmp_path):
    calls = _wire(monkeypatch)
    _run(tmp_path)
    assert calls == ["fetch", "gate", "summarize", "translate", "write", "cleanup"]


def test_start_at_translate_skips_earlier(monkeypatch, tmp_path):
    calls = _wire(monkeypatch)
    _run(tmp_path, start_at="translate")
    assert calls == ["translate", "write", "cleanup"]


def test_start_at_write_only(monkeypatch, tmp_path):
    calls = _wire(monkeypatch)
    _run(tmp_path, start_at="write")
    assert calls == ["write", "cleanup"]


def test_force_summarize_resets_first(monkeypatch, tmp_path):
    calls = _wire(monkeypatch)
    _run(tmp_path, start_at="summarize", force=True)
    assert "reset_sum" in calls
    assert calls.index("reset_sum") < calls.index("summarize")


def test_force_translate_resets_first(monkeypatch, tmp_path):
    calls = _wire(monkeypatch)
    _run(tmp_path, start_at="translate", force=True)
    assert "reset_tra" in calls
    assert calls.index("reset_tra") < calls.index("translate")
