"""WP2 tests: schema v2, batch dedup, source_profiles, runs journal."""
import json
import tempfile
from pathlib import Path

from tracker.dedup import Store, content_hash, url_hash
from tracker.methods import canonical, FEED, LISTING, SEARCH, API, ARCHIVE


def _store():
    tmp = tempfile.mkdtemp()
    return Store(Path(tmp) / "t.sqlite")


def test_v2_schema_created():
    s = _store()
    tables = {r[0] for r in s.conn.execute(
        "SELECT name FROM sqlite_master WHERE type='table'")}
    assert {"articles", "source_profiles", "runs", "fetch_errors"} <= tables
    cols = {r[1] for r in s.conn.execute("PRAGMA table_info(articles)")}
    assert "content_hash" in cols


def test_method_canonicalization():
    assert canonical("PATH") == LISTING
    assert canonical("SITE") == SEARCH
    assert canonical("FEED") == FEED
    assert canonical("API") == API
    assert canonical("WAYBACK") == ARCHIVE
    assert canonical(None) == SEARCH
    assert canonical("garbage") == SEARCH


def test_batch_dedup_inserts_new_skips_existing():
    s = _store()
    cands = [
        {"url": "https://a.com/1", "source": "A", "title": "t1"},
        {"url": "https://a.com/2", "source": "A", "title": "t2"},
    ]
    assert s.insert_candidates_batch(cands) == 2
    # second pass: same URLs → 0 inserted (INSERT OR IGNORE on UNIQUE url_hash)
    assert s.insert_candidates_batch(cands) == 0
    # in-memory dedup set reflects both
    hashes = s.all_url_hashes()
    assert url_hash("https://a.com/1") in hashes
    assert len(hashes) == 2


def test_batch_dedup_normalizes_tracking_params():
    s = _store()
    s.insert_candidates_batch([{"url": "https://a.com/x?utm_source=rss", "source": "A"}])
    # same canonical URL with different tracking param → no new row
    n = s.insert_candidates_batch([{"url": "https://a.com/x?utm_source=mail", "source": "A"}])
    assert n == 0


def test_content_hash_stored():
    s = _store()
    ch = content_hash("body text")
    s.insert_candidates_batch([{"url": "https://a.com/c", "source": "A",
                                "content_hash": ch}])
    row = s.conn.execute("SELECT content_hash FROM articles WHERE source='A'").fetchone()
    assert row["content_hash"] == ch


def test_profile_upsert_unions_trackers():
    s = _store()
    s.upsert_profile(domain="x.com", name="X", method=FEED, trackers="security",
                     feed_url="https://x.com/feed")
    s.upsert_profile(domain="x.com", name="X", method=FEED, trackers="eu_cra")
    p = s.get_profile("x.com")
    assert set(p["trackers"].split(",")) == {"security", "eu_cra"}
    assert p["feed_url"] == "https://x.com/feed"  # preserved on second upsert


def test_profile_http_and_yield_tracking():
    s = _store()
    s.upsert_profile(domain="y.com", name="Y", method=FEED, trackers="security")
    s.update_profile_http("y.com", etag='"abc"', last_seen_utc="2026-06-01T00:00:00")
    s.record_profile_yield("y.com", 5)
    p = s.get_profile("y.com")
    assert p["etag"] == '"abc"'
    assert p["last_seen_utc"] == "2026-06-01T00:00:00"
    assert p["total_yield"] == 5 and p["total_runs"] == 1
    assert p["consecutive_failures"] == 0
    # a failure bumps the counter, leaves yield
    s.record_profile_yield("y.com", 0, failed=True)
    p = s.get_profile("y.com")
    assert p["consecutive_failures"] == 1 and p["total_yield"] == 5


def test_profile_filter_by_tracker_and_method():
    s = _store()
    s.upsert_profile(domain="a.com", name="A", method=FEED, trackers="security")
    s.upsert_profile(domain="b.com", name="B", method=LISTING, trackers="eu_cra")
    assert {p["domain"] for p in s.list_profiles(tracker="eu_cra")} == {"b.com"}
    assert {p["domain"] for p in s.list_profiles(method=FEED)} == {"a.com"}


def test_set_profile_method_resets_failures():
    s = _store()
    s.upsert_profile(domain="z.com", name="Z", method=SEARCH, trackers="security")
    s.record_profile_yield("z.com", 0, failed=True)
    s.set_profile_method("z.com", LISTING, probe_note="autodiscovered listing",
                         probed_at="2026-06-10")
    p = s.get_profile("z.com")
    assert p["method"] == LISTING
    assert p["consecutive_failures"] == 0
    assert p["probe_note"] == "autodiscovered listing"


def test_runs_journal():
    s = _store()
    rid = s.start_run(json.dumps({"since": "2026-06-01", "until": "2026-06-07"}))
    assert rid >= 1
    last = s.last_run()
    assert last["run_id"] == rid and last["ok"] is None
    s.finish_run(rid, stats_json=json.dumps({"fetch": 10}),
                 errors_json=json.dumps([]), ok=True)
    last = s.last_run()
    assert last["ok"] == 1
    assert json.loads(last["stats"])["fetch"] == 10
