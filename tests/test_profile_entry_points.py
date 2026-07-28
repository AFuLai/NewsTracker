"""One site can need several entry points (v2.24).

digital-strategy.ec.europa.eu publishes CRA guidance under /en/library, while
its only RSS feed is a site-wide firehose capped at ten items that the guidance
never reached. `source_profiles.domain` being the primary key meant exactly one
of those could be configured, so the second was unreachable by design.

The key is now `profile_key(domain, search_path)`, which is the BARE DOMAIN for
an ordinary single-entry source — that is what keeps every existing profile and
every domain-keyed call site working across the migration.
"""
import sqlite3
import tempfile
from pathlib import Path

from tracker.dedup import Store, profile_key
from tracker.methods import FEED, LISTING


def _tmp() -> Path:
    return Path(tempfile.mkdtemp()) / "t.sqlite"


def test_key_is_the_bare_domain_without_an_entry():
    assert profile_key("etsi.org") == "etsi.org"
    assert profile_key("etsi.org", "") == "etsi.org"
    assert profile_key("etsi.org", None) == "etsi.org"
    assert profile_key("etsi.org", "/en/library") == "etsi.org#/en/library"


def test_a_primary_profile_may_own_a_search_path():
    """Regression: the suffix must come from `entry`, never from `search_path`.

    enisa.europa.eu (/news), source.android.com (/docs/security/bulletin),
    csa.gov.sg (/news-events) and bleepingcomputer.com (/search/?q=) are all
    primary profiles that carry a search_path. Deriving the key from
    search_path re-keyed every one of them, forking each into a duplicate with
    zeroed counters that would then be fetched twice per run.
    """
    s = Store(_tmp())
    s.upsert_profile(domain="enisa.example", name="ENISA", method=LISTING,
                     trackers="eu_cra", search_path="/news")
    s.record_profile_yield("enisa.example", 5, items_seen=5)

    # Re-seeding (what `init-profiles` does on every run) must UPDATE, not fork.
    s.upsert_profile(domain="enisa.example", name="ENISA", method=LISTING,
                     trackers="security", search_path="/news")

    rows = s.list_profiles_for_domain("enisa.example")
    assert [r["source_key"] for r in rows] == ["enisa.example"]
    assert rows[0]["total_yield"] == 5, "counters must survive a re-seed"
    assert rows[0]["search_path"] == "/news"


def test_two_entry_points_coexist_and_age_independently():
    s = Store(_tmp())
    s.upsert_profile(domain="ec.example", name="EC feed", method=FEED,
                     trackers="eu_cra", feed_url="https://ec.example/rss.xml")
    s.upsert_profile(domain="ec.example", name="EC library", method=LISTING,
                     trackers="eu_cra", search_path="/en/library",
                     entry="/en/library")

    both = s.list_profiles_for_domain("ec.example")
    assert len(both) == 2, "the second entry point must not overwrite the first"
    assert {p["method"] for p in both} == {FEED, LISTING}

    # The primary keeps the bare-domain key, so domain-keyed calls still land.
    s.record_profile_yield("ec.example", 0, items_seen=0)
    s.record_profile_yield("ec.example#/en/library", 7, items_seen=7)

    assert s.get_profile("ec.example")["consecutive_empty"] == 1
    assert s.get_profile("ec.example")["total_yield"] == 0
    assert s.get_profile("ec.example#/en/library")["consecutive_empty"] == 0
    assert s.get_profile("ec.example#/en/library")["total_yield"] == 7


def test_upsert_without_path_does_not_touch_the_path_scoped_profile():
    s = Store(_tmp())
    s.upsert_profile(domain="ec.example", name="EC library", method=LISTING,
                     trackers="eu_cra", search_path="/en/library",
                     entry="/en/library")
    s.upsert_profile(domain="ec.example", name="EC feed", method=FEED,
                     trackers="eu_cra", feed_url="https://ec.example/rss.xml")
    lib = s.get_profile("ec.example#/en/library")
    assert lib["method"] == LISTING and lib["search_path"] == "/en/library"


def test_migration_preserves_identity_and_counters():
    """A legacy DB keyed on `domain` must come through with the same keys."""
    path = _tmp()
    conn = sqlite3.connect(path)
    conn.executescript("""
        CREATE TABLE source_profiles (
          domain TEXT PRIMARY KEY, name TEXT, method TEXT NOT NULL,
          feed_url TEXT, search_path TEXT, api_endpoint TEXT,
          accept_all INTEGER NOT NULL DEFAULT 0, trackers TEXT NOT NULL,
          etag TEXT, last_modified TEXT, last_seen_utc TEXT,
          consecutive_failures INTEGER NOT NULL DEFAULT 0,
          total_runs INTEGER NOT NULL DEFAULT 0,
          total_yield INTEGER NOT NULL DEFAULT 0,
          probed_at TEXT, probe_note TEXT
        );
        INSERT INTO source_profiles
          (domain, name, method, trackers, total_runs, total_yield, etag)
        VALUES ('legacy.example', 'Legacy', 'FEED', 'security', 35, 10, '"abc"');
    """)
    conn.commit()
    conn.close()

    s = Store(path)                       # opening runs the migrator
    p = s.get_profile("legacy.example")   # same key as before the migration
    assert p is not None
    assert p["source_key"] == "legacy.example"
    assert p["domain"] == "legacy.example"
    assert (p["total_runs"], p["total_yield"], p["etag"]) == (35, 10, '"abc"')

    Store(path)                           # idempotent: re-opening is a no-op
    assert s.get_profile("legacy.example")["total_runs"] == 35


def test_list_profiles_returns_every_entry_point():
    s = Store(_tmp())
    s.upsert_profile(domain="ec.example", name="feed", method=FEED, trackers="eu_cra")
    s.upsert_profile(domain="ec.example", name="lib", method=LISTING,
                     trackers="eu_cra", search_path="/en/library",
                     entry="/en/library")
    s.upsert_profile(domain="other.example", name="o", method=FEED, trackers="eu_cra")
    keys = {p["source_key"] for p in s.list_profiles(tracker="eu_cra")}
    assert keys == {"ec.example", "ec.example#/en/library", "other.example"}
