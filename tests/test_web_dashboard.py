"""Tests for the browser dashboard: WebReporter snapshot + HTTP server."""
import json
import time
import urllib.error
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


def _post(base, payload):
    req = urllib.request.Request(base + "/control",
                                 data=json.dumps(payload).encode(),
                                 headers={"Content-Type": "application/json"},
                                 method="POST")
    return json.loads(urllib.request.urlopen(req, timeout=3).read())


def test_control_endpoints_drive_controller():
    from tracker.control import Controller
    c = Controller(summarize_backend="ollama", translate_backend="ollama")
    r = WebReporter(c)
    r.begin(since="2026-03-01", until="2026-03-02", trackers=["os"],
            phases=[("summarize", "Summarize")])
    httpd = serve(r, port=8802)
    try:
        base = "http://127.0.0.1:8802"
        assert _post(base, {"cmd": "pause"})["ok"] and c.paused
        assert _post(base, {"cmd": "backend", "role": "summarize", "backend": "gemini"})["ok"]
        assert c.backend_for("summarize") == "gemini"
        # /state surfaces the live control state
        st = json.loads(urllib.request.urlopen(base + "/state", timeout=3).read())
        assert st["control"]["paused"] is True
        assert st["control"]["backends"]["summarize"] == "gemini"
        assert _post(base, {"cmd": "resume"})["ok"] and not c.paused
        assert _post(base, {"cmd": "restart", "phase": "summarize", "force": True})["ok"]
        assert c.restart_pending()
        phase, force = c.consume_restart()
        assert phase == "summarize" and force is True
    finally:
        httpd.shutdown()


def test_cralib_command_starts_job_and_state_shows_it():
    import threading
    from tracker.control import CraLibJob

    gate = threading.Event()
    def fake_sync(db, progress=None):
        progress(1, 4, "topic")
        gate.wait(3)
        return {"new": [], "updated": [], "removed": [], "unchanged": 4, "errors": []}
    job = CraLibJob(db="x.sqlite", out="out", sync=fake_sync,
                    emit_js=lambda db, out: "out/data/cra_library.js")
    r = WebReporter(None, job)          # no Controller: the CRA button still works
    httpd = serve(r, port=8803)
    try:
        base = "http://127.0.0.1:8803"
        st = json.loads(urllib.request.urlopen(base + "/state", timeout=3).read())
        assert st["cralib"]["status"] == "idle"
        assert _post(base, {"cmd": "cralib"})["ok"] is True
        end = time.time() + 3
        while time.time() < end:
            st = json.loads(urllib.request.urlopen(base + "/state", timeout=3).read())
            if st["cralib"]["total"] == 4:
                break
            time.sleep(0.02)
        assert st["cralib"]["status"] == "running" and st["cralib"]["total"] == 4
        assert job.start() is False                            # already running
        gate.set()
        html = urllib.request.urlopen(base + "/", timeout=3).read().decode()
        assert "更新 CRA 庫" in html and "cralib" in html
    finally:
        gate.set()
        httpd.shutdown()


def test_control_post_without_controller_or_job_is_rejected():
    r = WebReporter()
    httpd = serve(r, port=8804)
    try:
        req = urllib.request.Request("http://127.0.0.1:8804/control",
                                     data=b'{"cmd":"pause"}',
                                     headers={"Content-Type": "application/json"},
                                     method="POST")
        try:
            urllib.request.urlopen(req, timeout=3)
            assert False, "expected HTTP 400"
        except urllib.error.HTTPError as e:
            assert e.code == 400
    finally:
        httpd.shutdown()

