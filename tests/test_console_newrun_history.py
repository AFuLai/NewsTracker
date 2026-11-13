"""Console: a new run after a finished one, the runs-journal history, the version label."""
import json
import sqlite3

from tracker.control import Controller
from tracker.version import version
from tracker.web_dashboard import WebReporter, _apply_control, run_history

CFG = {"since": "2026-11-01", "until": "2026-11-03", "trackers": ["security"],
       "all_trackers": ["security", "eu_cra"]}


def test_new_run_requires_a_started_and_finished_run():
    c = Controller(config=dict(CFG))
    r = WebReporter(c)
    ok, msg = _apply_control(c, {"cmd": "new-run", "config": {}}, reporter=r)
    assert not ok and "尚未" in msg
    assert c.request_start({})
    ok, msg = _apply_control(c, {"cmd": "new-run", "config": {}}, reporter=r)
    assert not ok and "進行中" in msg            # run still live (not finished)
    r.finished = True
    ok, _ = _apply_control(c, {"cmd": "new-run", "config": {
        "since": "2026-11-05", "until": "2026-11-09", "trackers": ["eu_cra"], "limit": 7}}, reporter=r)
    assert ok
    assert c.restart_pending()
    assert c.consume_restart() == ("fetch", False)
    assert c.consume_new_run() is True and c.consume_new_run() is False
    assert c.config["trackers"] == ["eu_cra"] and c.config["since"] == "2026-11-05" and c.config["limit"] == 7


def test_new_run_rejects_bad_config_and_leaves_old_one():
    c = Controller(config=dict(CFG))
    r = WebReporter(c)
    c.request_start({})
    r.finished = True
    ok, msg = _apply_control(c, {"cmd": "new-run", "config": {"since": "2026-11-09", "until": "2026-11-01"}},
                             reporter=r)
    assert not ok and msg
    assert not c.restart_pending() and c.config["since"] == "2026-11-01"


def _db(tmp_path):
    p = tmp_path / "a.sqlite"
    conn = sqlite3.connect(p)
    conn.execute("CREATE TABLE runs (run_id INTEGER PRIMARY KEY, started_at TEXT, finished_at TEXT,"
                 " args TEXT, stats TEXT, errors TEXT, ok INTEGER)")
    conn.execute("INSERT INTO runs VALUES (1,'2026-11-01T01:00:00','2026-11-01T01:30:00',?,?,?,1)",
                 (json.dumps({"since": "2026-10-30", "until": "2026-11-01", "trackers": ["security"]}),
                  json.dumps({"fetch_new": 12, "summarized": 10, "elapsed_s": 1800.0}), "[]"))
    conn.execute("INSERT INTO runs VALUES (2,'2026-11-02T01:00:00',NULL,?,NULL,NULL,NULL)",
                 (json.dumps({"since": "2026-11-01", "until": "2026-11-02", "trackers": [],
                              "trigger": "schedule"}),))
    conn.execute("INSERT INTO runs VALUES (3,'2026-11-03T01:00:00','2026-11-03T01:01:00','not json',?,?,0)",
                 ("{}", json.dumps(["boom"])))
    conn.commit(); conn.close()
    return p


def test_run_history_newest_first_and_tolerant(tmp_path):
    db = _db(tmp_path)
    rows = run_history(db)
    assert [r["run_id"] for r in rows] == [3, 2, 1]
    assert rows[0]["ok"] is False and rows[0]["errors"] == ["boom"] and rows[0]["trigger"] == ""
    assert rows[1]["ok"] is None and rows[1]["trigger"] == "schedule"
    assert rows[2]["fetch_new"] == 12 and rows[2]["elapsed_s"] == 1800.0
    assert run_history(db, limit=1)[0]["run_id"] == 3


def test_run_history_missing_db_is_empty(tmp_path):
    assert run_history(tmp_path / "none.sqlite") == []


def test_version_prefers_build_file(tmp_path):
    version.cache_clear()
    (tmp_path / "VERSION").write_text("2.31\n")
    assert version(tmp_path) == "2.31"
    (tmp_path / "BUILD").write_text("2.31-abc1234")
    version.cache_clear()
    assert version(tmp_path) == "2.31-abc1234"
    version.cache_clear()


def test_snapshot_carries_version():
    assert WebReporter().snapshot()["version"]
