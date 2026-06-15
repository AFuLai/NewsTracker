"""WP6 acceptance #7: a new fetch model plugs in via @register alone —
no edits to cli.py or orchestrator.py. This test registers a dummy fetcher at
runtime and confirms the registry + dispatch pick it up, then cleans up.
"""
from datetime import date

import tracker.fetchers as fetchers
from tracker.fetchers import (Candidate, DateWindow, FetchResult, Profile,
                              get_fetcher, register, REGISTRY)


def test_new_fetcher_plugs_in_via_register():
    assert "JSONLD" not in REGISTRY  # not present before

    @register
    class JsonLdFetcher:
        method = "JSONLD"
        def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
            return FetchResult(items=[Candidate(url="https://x.com/a", title="hi")])

    try:
        # registry knows it
        assert REGISTRY["JSONLD"] is JsonLdFetcher
        # an orchestrator dispatching by method gets an instance back
        f = REGISTRY["JSONLD"]()
        res = f.fetch(Profile(domain="x.com", name="X", method="JSONLD",
                              trackers=["security"]),
                      DateWindow(date(2026, 6, 1), date(2026, 6, 7)))
        assert res.items[0].url == "https://x.com/a"
    finally:
        REGISTRY.pop("JSONLD", None)


def test_unknown_method_falls_back_to_search():
    # get_fetcher canonicalizes unknown → SEARCH (never crashes the orchestrator)
    assert type(get_fetcher("TOTALLY_UNKNOWN")).method == "SEARCH"
