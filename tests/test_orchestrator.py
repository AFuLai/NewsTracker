"""WP5 tests: RunReport formatting + graceful abort when ollama is down."""
import json
import tempfile
from pathlib import Path

import tracker.orchestrator as orch
from tracker.orchestrator import RunReport, run_pipeline, EU_CRA_FILTER


def test_one_line_format():
    r = RunReport(run_id=42, since="2026-06-01", until="2026-06-07",
                  trackers=["security", "eu_cra"], fetch_new=41, fetch_sources=20,
                  fetch_304=3, fetch_failed=1, gated_out=5, summarized=38,
                  summarize_attempted=41, out_of_window=3, review_failed=0,
                  cross_added=4, cross_removed=2, days_written=13, elapsed_s=776.4)
    line = r.one_line()
    assert line.startswith("run#42 OK 2026-06-01..2026-06-07 [security,eu_cra]")
    assert "fetch 41new/20src (304:3 fail:1)" in line
    assert "gate -5" in line
    assert "sum 38/41" in line
    assert "cross +4/-2" in line
    assert "write 13d" in line
    assert line.endswith("776s")


def test_summarize_wipeout_flips_ok():
    # Every summary failed against a non-empty queue → must NOT report OK.
    r = RunReport(run_id=7, since="2026-06-01", until="2026-06-02",
                  trackers=["security"], summarize_attempted=12, summarized=0,
                  summarize_failed=12)
    r.note_summarize_wipeout()
    assert r.ok is False
    assert any("summarize produced nothing" in e for e in r.errors)
    assert "sum_fail:12" in r.one_line()


def test_partial_summarize_failure_stays_ok():
    # Fail-open: some succeeded, some errored → still OK, but count is surfaced.
    r = RunReport(run_id=8, since="2026-06-01", until="2026-06-02",
                  trackers=["security"], summarize_attempted=12, summarized=10,
                  summarize_failed=2)
    r.note_summarize_wipeout()
    assert r.ok is True
    assert r.errors == []
    assert "sum_fail:2" in r.one_line()


def test_empty_queue_stays_ok():
    # Nothing to summarize (attempted=0) is not a failure.
    r = RunReport(run_id=9, since="2026-06-01", until="2026-06-02",
                  trackers=["security"], summarize_attempted=0, summarized=0)
    r.note_summarize_wipeout()
    assert r.ok is True


def test_eu_cra_filter_has_markers():
    assert "cra" in EU_CRA_FILTER
    assert "ENISA" in EU_CRA_FILTER
    # multilingual markers present
    assert any("サ" in w for w in EU_CRA_FILTER)  # サ (JP)
    assert any("사" in w for w in EU_CRA_FILTER)  # 사 (KR)


def test_pipeline_aborts_when_db_lock_held(tmp_path):
    # F-CONC-1: a second run started while another holds the DB lock aborts
    # cleanly (ok=False, run_id=-1) and journals nothing.
    import fcntl
    db = tmp_path / "t.sqlite"
    holder = open(str(db) + ".lock", "w")
    fcntl.flock(holder, fcntl.LOCK_EX | fcntl.LOCK_NB)
    try:
        rep = run_pipeline(since="2026-06-01", until="2026-06-02",
                           trackers=["security"], db=db, out=tmp_path,
                           summarize_limit=1, cleanup=False)
        assert rep.ok is False
        assert rep.run_id == -1
        assert any("already active" in e for e in rep.errors)
    finally:
        fcntl.flock(holder, fcntl.LOCK_UN)
        holder.close()


def test_pipeline_aborts_when_ollama_down(monkeypatch):
    # ensure_ollama fails → run_pipeline must return ok=False without crashing,
    # write a runs row, and leave no half-state.
    import tracker.preflight as preflight
    monkeypatch.setattr(preflight, "ensure_ollama", lambda **k: False)
    tmp = Path(tempfile.mkdtemp())
    db = tmp / "t.sqlite"
    # status.json now lands in the per-test tmp dir: conftest's autouse
    # _isolate_project_root redirects orchestrator.PROJECT_ROOT, so this no
    # longer touches the operator's real /mnt/d/.../status.json.
    rep = run_pipeline(since="2026-06-01", until="2026-06-02",
                       trackers=["security"], db=db, out=tmp,
                       summarize_limit=1, cleanup=False)
    assert rep.ok is False
    assert any("ollama down" in e for e in rep.errors)
    # a runs row was journaled and marked finished
    from tracker.dedup import Store
    last = Store(db).last_run()
    assert last is not None and last["ok"] == 0
    assert json.loads(last["errors"])
