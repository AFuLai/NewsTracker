"""The dormancy signal must measure LIVENESS, not novelty.

Regression guard for a bug found in run#52 on the live DB: `consecutive_empty`
was driven by the post-dedup new-article count, so 9 high-yield healthy
sources (thehackernews.com at lifetime yield 371 was already at 3) started
accruing "empty" runs simply because a 2-day window turned up nothing NEW.
HTTP 304 — the healthiest possible answer — incremented it too, which
penalised the best-behaved sources fastest. At 8 they would have gone dormant
and stopped being fetched for a week.
"""
import tempfile
from pathlib import Path

from tracker.dedup import Store
from tracker.methods import FEED


def _store() -> Store:
    return Store(Path(tempfile.mkdtemp()) / "t.sqlite")


def _profile(s: Store, domain: str) -> None:
    s.upsert_profile(domain=domain, name=domain, method=FEED, trackers="security")


def test_items_seen_but_all_duplicates_is_not_empty():
    """A healthy source in a narrow window: the fetcher parsed 30 articles,
    all already known. That is liveness, not rot."""
    s = _store()
    _profile(s, "healthy.com")
    s.record_profile_yield("healthy.com", 0, items_seen=30)
    p = s.get_profile("healthy.com")
    assert p["consecutive_empty"] == 0, "all-duplicates must NOT count as empty"
    assert p["total_runs"] == 1


def test_items_seen_zero_is_empty():
    """A genuinely broken source: fetch succeeded but parsed nothing at all."""
    s = _store()
    _profile(s, "moved.com")
    s.record_profile_yield("moved.com", 0, items_seen=0)
    assert s.get_profile("moved.com")["consecutive_empty"] == 1


def test_items_seen_resets_an_existing_empty_streak():
    s = _store()
    _profile(s, "recovered.com")
    for _ in range(3):
        s.record_profile_yield("recovered.com", 0, items_seen=0)
    assert s.get_profile("recovered.com")["consecutive_empty"] == 3
    # Source comes back: parses items again, even if none are new.
    s.record_profile_yield("recovered.com", 0, items_seen=12)
    assert s.get_profile("recovered.com")["consecutive_empty"] == 0


def test_http_304_marks_alive_and_resets():
    """304 Not Modified means conditional GET worked — the source is alive."""
    s = _store()
    _profile(s, "wellbehaved.com")
    for _ in range(5):
        s.record_profile_yield("wellbehaved.com", 0, items_seen=0)
    assert s.get_profile("wellbehaved.com")["consecutive_empty"] == 5

    s.mark_profile_alive("wellbehaved.com")
    p = s.get_profile("wellbehaved.com")
    assert p["consecutive_empty"] == 0, "304 must reset, never increment"
    assert p["consecutive_failures"] == 0
    assert p["last_attempt_utc"]


def test_a_quiet_but_healthy_source_never_goes_dormant():
    """End-to-end guard: 20 consecutive runs where the source is live but has
    no new articles must leave it fetchable."""
    s = _store()
    _profile(s, "quiet.com")
    for _ in range(20):
        s.record_profile_yield("quiet.com", 0, items_seen=25)
    p = s.get_profile("quiet.com")
    assert p["consecutive_empty"] == 0
    assert not s.is_dormant(p)


def test_a_truly_dead_source_still_goes_dormant():
    """The feature must still work: 8 runs parsing nothing → dormant."""
    s = _store()
    _profile(s, "dead.com")
    for _ in range(8):
        s.record_profile_yield("dead.com", 0, items_seen=0)
    p = s.get_profile("dead.com")
    assert p["consecutive_empty"] == 8
    assert s.is_dormant(p)


def test_new_count_fallback_preserved_for_old_callers():
    """Callers with no raw count keep the previous behaviour."""
    s = _store()
    _profile(s, "legacy.com")
    s.record_profile_yield("legacy.com", 0)
    assert s.get_profile("legacy.com")["consecutive_empty"] == 1
    s.record_profile_yield("legacy.com", 5)
    assert s.get_profile("legacy.com")["consecutive_empty"] == 0
