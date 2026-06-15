"""Tests for the browser dashboard: WebReporter snapshot + HTTP server."""
import json
import urllib.request

from tracker.web_dashboard import WebReporter, serve


def test_reporter_snapshot_lifecycle():
    r = WebReporter()
    r.begin(since="2026-03-01", until="2026-05-31",
            trackers=["security", "eu_cra"],
            phases=[("fetch", "Fetch"), ("summarize", "Summarize")])
    snap = r.snapshot()
    assert "2026-03-01..2026-05-31" in snap["title"]
    assert [p["key"] for p in snap["phases"]] == ["fetch", "summarize"]
    assert all(p["status"] == "pending" for p in snap["phases"])

    r.enter("fetch", "preparing")
    assert r.snapshot()["running"] == "fetch"
    r.result("fetch", "82 new / 37 sources")
    snap = r.snapshot()
    assert snap["running"] is None
    fetch = next(p for p in snap["phases"] if p["key"] == "fetch")
    assert fetch["status"] == "done" and "82 new" in fetch["result"]

    r.enter("summarize")
    r.tick(50, 100, "[security] some article")
    snap = r.snapshot()
    assert snap["note"].endswith("some article")
    sm = next(p for p in snap["phases"] if p["key"] == "summarize")
    assert sm["done"] == 50 and sm["total"] == 100
    assert snap["eta"] is not None and snap["eta"] >= 0


def test_summary_marks_finished():
    from tracker.orchestrator import RunReport
    r = WebReporter()
    r.begin(since="x", until="y", trackers=["security"], phases=[("fetch", "Fetch")])
    rep = RunReport(run_id=7, summarized=5, fetch_new=10, ok=True)
    r.summary(rep)
    snap = r.snapshot()
    assert snap["finished"] is True
    assert snap["summary"]["run_id"] == 7 and snap["summary"]["summarized"] == 5


def test_http_server_serves_state_and_html():
    r = WebReporter()
    r.begin(since="2026-03-01", until="2026-03-02", trackers=["security"],
            phases=[("fetch", "Fetch")])
    httpd = serve(r, port=8799)
    try:
        base = "http://127.0.0.1:8799"
        state = json.loads(urllib.request.urlopen(base + "/state", timeout=3).read())
        assert state["title"].startswith("2026-03-01")
        html = urllib.request.urlopen(base + "/", timeout=3).read().decode()
        assert "Tracker 執行儀表板" in html and "/state" in html
    finally:
        httpd.shutdown()
