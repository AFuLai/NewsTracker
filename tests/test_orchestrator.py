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


def test_cross_cleanup_rerenders_demoted_days(monkeypatch, tmp_path):
    # F-DATA-4: demoting a membership must re-render that day so the static
    # site stops showing the article under the removed tracker.
    import logging
    import tracker.cross as cross
    from tracker.dedup import Store
    from tracker.progress import NullReporter

    store = Store(tmp_path / "t.sqlite")
    # Two trackers so one can be demoted (remove_tracker refuses to strip the
    # article's last tracker).
    store.upsert_candidate(url="https://x.com/a", source="X", title="T",
                           date="2026-06-01", tracker="security,eu_cra")
    aid = store.conn.execute("SELECT id FROM articles").fetchone()[0]
    store.mark_status(aid, "written", date="2026-06-01")
    # Keep security, demote eu_cra.
    monkeypatch.setattr(cross, "belongs_to",
                        lambda **k: k.get("other_name") != "eu_cra")
    monkeypatch.setattr(orch, "load_tracker", lambda name: object())  # info present

    calls = {}

    def fake_rebuild(s, o, dates=None):
        calls["dates"] = dates
        return len(dates or [])

    monkeypatch.setattr(orch, "rebuild_days", fake_rebuild)
    rep = RunReport(run_id=1, since="2026-06-01", until="2026-06-02",
                    trackers=["security"])
    orch._phase_cross_cleanup(store, rep, logging.getLogger("t"),
                              NullReporter(), tmp_path)
    assert rep.cross_removed == 1
    assert calls.get("dates") == ["2026-06-01"]


def test_undated_items_capped_per_source(monkeypatch, tmp_path):
    # C-DATEFLOOD: a source dumping many undated items in one run is capped, so
    # a dateless archive backlog is not all published under today's date.
    import logging
    from datetime import date
    from tracker.dedup import Store
    from tracker.progress import NullReporter
    from tracker.fetchers import Candidate, DateWindow, FetchResult
    from tracker.orchestrator import _phase_fetch

    monkeypatch.setenv("TRACKER_UNDATED_CAP", "8")

    class _FloodFetcher:
        def fetch(self, profile, window):
            return FetchResult(items=[
                Candidate(url=f"https://flood.example/{i}", title=f"item {i}",
                          published=None, content_hash=f"h{i}")
                for i in range(20)])

    monkeypatch.setattr(orch, "get_fetcher", lambda method: _FloodFetcher())
    store = Store(tmp_path / "t.sqlite")
    store.upsert_profile(domain="flood.example", name="Flood",
                         method="FEED", trackers="security", accept_all=True)
    rep = RunReport(run_id=1, since="2026-06-01", until="2026-06-30",
                    trackers=["security"])
    window = DateWindow(date(2026, 6, 1), date(2026, 6, 30))
    _phase_fetch(store, window, ["security"], rep,
                 logging.getLogger("t"), 2, NullReporter())
    n = store.conn.execute(
        "SELECT COUNT(*) FROM articles WHERE source='Flood'").fetchone()[0]
    assert n == 8, f"expected undated cap 8, got {n}"


def test_dedupe_pending_across_trackers_keeps_id_once():
    # C-DBLSUM: a row tagged for two trackers appears in both pending lists;
    # it must be summarized once (under the first tracker), not clobbered.
    from tracker.orchestrator import _dedupe_pending_across_trackers
    a, b, c = {"id": 1}, {"id": 2}, {"id": 3}
    pbt = {"security": [a, b], "eu_cra": [b, c]}  # b (id=2) is in both
    out = _dedupe_pending_across_trackers(pbt, ["security", "eu_cra"])
    assert [r["id"] for r in out["security"]] == [1, 2]
    assert [r["id"] for r in out["eu_cra"]] == [3]


def test_preflight_skipped_for_write_only_restart(monkeypatch, tmp_path):
    # C-PREFLIGHT: a write-only restart uses no LLM, so a stopped ollama must
    # not abort it. ensure_ollama must not even be called.
    import tracker.preflight as preflight

    def _boom(**k):
        raise AssertionError("ensure_ollama called for a write-only run")

    monkeypatch.setattr(preflight, "ensure_ollama", _boom)
    rep = run_pipeline(since="2026-06-01", until="2026-06-02",
                       trackers=["security"], db=tmp_path / "t.sqlite",
                       out=tmp_path, start_at="write", cleanup=False)
    assert not any("ollama" in e for e in rep.errors)


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
