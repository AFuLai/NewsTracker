"""Topical filtering for FEED sources, and the self-referential keyword rule.

etsi.org publishes one general newsroom feed — Plugtests reports, award
winners, a GSM obituary — and no topic feed exists (every candidate path
404s or returns zero items). Pointing eu_cra at it put 14 off-topic articles
on the site out of 23. The filter that should have stopped them, EU_CRA_FILTER,
contains the literal keyword "ETSI", so on etsi.org it matched everything.
"""
from tracker.fetchers import effective_filter

EU_CRA_FILTER = (
    "cra", "cyber resilience", "regulation", "directive", "harmonised",
    "compliance", "conformity", "cybersecurity", "歐盟", "資安",
    "ENISA", "ETSI", "CEN", "JPCERT", "NISC", "CSA", "KISA",
)


def test_self_referential_keywords_are_dropped():
    """A keyword is evidence only if it could have been absent."""
    eff = effective_filter(EU_CRA_FILTER, domain="etsi.org", name="ETSI 資安技術")
    assert "ETSI" not in eff
    assert "cyber resilience" in eff, "genuine topical terms must survive"


def test_self_reference_is_per_source():
    """The same keyword stays meaningful on a source it does not name."""
    eff = effective_filter(EU_CRA_FILTER, domain="thehackernews.com",
                           name="The Hacker News")
    assert "ETSI" in eff, "a THN story about ETSI is still a real signal"


def test_matches_by_domain_or_display_name():
    assert "CSA" not in effective_filter(EU_CRA_FILTER, domain="csa.gov.sg",
                                         name="新加坡 CSA")
    assert "JPCERT" not in effective_filter(EU_CRA_FILTER, domain="jpcert.or.jp",
                                            name="JPCERT/CC")


def test_empty_filter_stays_empty():
    """Trackers with no topical filter (security, os) are unaffected."""
    assert effective_filter((), domain="example.com", name="Example") == ()
    assert effective_filter(None, domain="example.com", name="Example") == ()
