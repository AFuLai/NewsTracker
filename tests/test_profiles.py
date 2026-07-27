"""Dormancy tests: consecutive_empty tracking, is_dormant, idempotent
migration of the new source_profiles columns, and stale-run reconciliation.

See dedup.py: _ensure_profile_dormancy_columns, record_profile_yield,
Store.is_dormant, Store.list_reprobe_candidates, _reconcile_stale_runs.
"""
import tempfile
from datetime import datetime, timedelta
from pathlib import Path

from tracker.dedup import Store
from tracker.methods import FEED


def _store(path: Path | None = None) -> Store:
    if path is None:
        path = Path(tempfile.mkdtemp()) / "t.sqlite"
    return Store(path)


# ── consecutive_empty / consecutive_failures ────────────────────────────────

def test_empty_success_increments_consecutive_empty():
    s = _store()
    s.upsert_profile(domain="dead.com", name="Dead", method=FEED, trackers="security")
    s.record_profile_yield("dead.com", 0)
    p = s.get_profile("dead.com")
    assert p["consecutive_empty"] == 1
    assert p["consecutive_failures"] == 0
    assert p["last_attempt_utc"]

    s.record_profile_yield("dead.com", 0)
    p = s.get_profile("dead.com")
    assert p["consecutive_empty"] == 2


def test_nonzero_yield_resets_consecutive_empty():
    s = _store()
    s.upsert_profile(domain="revive.com", name="Revive", method=FEED, trackers="security")
    s.record_profile_yield("revive.com", 0)
    s.record_profile_yield("revive.com", 0)
    assert s.get_profile("revive.com")["consecutive_empty"] == 2

    s.record_profile_yield("revive.com", 3)
    p = s.get_profile("revive.com")
    assert p["consecutive_empty"] == 0
    assert p["total_yield"] == 3


def test_exception_path_still_drives_consecutive_failures():
    s = _store()
    s.upsert_profile(domain="flaky.com", name="Flaky", method=FEED, trackers="security")
    s.record_profile_yield("flaky.com", 0, failed=True)
    s.record_profile_yield("flaky.com", 0, failed=True)
    p = s.get_profile("flaky.com")
    assert p["consecutive_failures"] == 2
    # failure path does not touch consecutive_empty semantics for empty successes
    assert p["consecutive_empty"] == 0
    assert p["last_attempt_utc"]


# ── is_dormant ───────────────────────────────────────────────────────────────

def test_is_dormant_true_with_recent_attempt():
    s = _store()
    s.upsert_profile(domain="dead2.com", name="Dead2", method=FEED, trackers="security")
    for _ in range(8):
        s.record_profile_yield("dead2.com", 0)
    p = s.get_profile("dead2.com")
    assert p["consecutive_empty"] == 8
    assert s.is_dormant(p) is True


def test_is_dormant_false_when_last_attempt_stale():
    s = _store()
    s.upsert_profile(domain="dead3.com", name="Dead3", method=FEED, trackers="security")
    for _ in range(8):
        s.record_profile_yield("dead3.com", 0)
    p = s.get_profile("dead3.com")
    assert p["consecutive_empty"] >= 8
    # last_attempt_utc is "now" (real UTC) — evaluate is_dormant as if it were
    # more than 7 days in the future, i.e. the attempt is >7 days stale.
    future = datetime.utcnow() + timedelta(days=8)
    assert s.is_dormant(p, now=future) is False


def test_is_dormant_false_below_threshold():
    s = _store()
    s.upsert_profile(domain="ok.com", name="Ok", method=FEED, trackers="security")
    for _ in range(3):
        s.record_profile_yield("ok.com", 0)
    p = s.get_profile("ok.com")
    assert s.is_dormant(p) is False


def test_list_reprobe_candidates_includes_empty_and_failure():
    s = _store()
    s.upsert_profile(domain="empties.com", name="E", method=FEED, trackers="security")
    s.upsert_profile(domain="failures.com", name="F", method=FEED, trackers="security")
    s.upsert_profile(domain="healthy.com", name="H", method=FEED, trackers="security")
    for _ in range(8):
        s.record_profile_yield("empties.com", 0)
    for _ in range(3):
        s.record_profile_yield("failures.com", 0, failed=True)
    s.record_profile_yield("healthy.com", 5)
    domains = {p["domain"] for p in s.list_reprobe_candidates()}
    assert domains == {"empties.com", "failures.com"}


# ── migration idempotency ────────────────────────────────────────────────────

def test_dormancy_migration_idempotent():
    tmp = Path(tempfile.mkdtemp()) / "t.sqlite"
    s1 = _store(tmp)
    cols1 = [r[1] for r in s1.conn.execute("PRAGMA table_info(source_profiles)")]
    assert cols1.count("consecutive_empty") == 1
    assert cols1.count("last_attempt_utc") == 1
    s1.conn.close()

    # re-opening the same file must not error or duplicate columns
    s2 = _store(tmp)
    cols2 = [r[1] for r in s2.conn.execute("PRAGMA table_info(source_profiles)")]
    assert cols2.count("consecutive_empty") == 1
    assert cols2.count("last_attempt_utc") == 1


# ── stale runs reconciliation ────────────────────────────────────────────────

def test_stale_ok_null_runs_older_than_24h_marked_failed():
    tmp = Path(tempfile.mkdtemp()) / "t.sqlite"
    s = _store(tmp)
    old_ts = (datetime.utcnow() - timedelta(hours=25)).isoformat()
    recent_ts = (datetime.utcnow() - timedelta(minutes=1)).isoformat()
    s.conn.execute("INSERT INTO runs (started_at, args) VALUES (?, ?)", (old_ts, "{}"))
    s.conn.execute("INSERT INTO runs (started_at, args) VALUES (?, ?)", (recent_ts, "{}"))
    s.conn.commit()

    # re-opening the Store (as would happen on the next process run) triggers
    # reconciliation of stale in-progress rows
    s2 = _store(tmp)
    rows = {r["started_at"]: r["ok"] for r in s2.conn.execute("SELECT started_at, ok FROM runs")}
    assert rows[old_ts] == 0
    assert rows[recent_ts] is None
