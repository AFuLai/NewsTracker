"""Tests: BROWSER method canonicalization, fetcher registration + graceful
degradation, ensure_browser check (mocked)."""
from datetime import date

import tracker.preflight as preflight
from tracker.fetchers import REGISTRY, get_fetcher, Profile, DateWindow
from tracker.methods import canonical, BROWSER


def test_browser_is_canonical():
    assert canonical("BROWSER") == BROWSER
    assert canonical("chrome") == BROWSER
    assert "BROWSER" in REGISTRY


def test_browser_dispatch():
    assert type(get_fetcher("BROWSER")).method == "BROWSER"


def test_browser_fetch_no_cdp_returns_error():
    f = get_fetcher("BROWSER")
    p = Profile(domain="x.com", name="X", method="BROWSER", trackers=["security"])
    res = f.fetch(p, DateWindow(date(2026, 6, 1), date(2026, 6, 7)))
    assert res.error and "cdp_base" in res.error
    assert res.items == []


def test_ensure_browser_found(monkeypatch):
    monkeypatch.setattr(preflight, "find_browser", lambda **k: "http://localhost:9999")
    assert preflight.ensure_browser(interactive=False) == "http://localhost:9999"


def test_ensure_browser_not_found_noninteractive(monkeypatch):
    monkeypatch.setattr(preflight, "find_browser", lambda **k: None)
    # non-interactive → no prompt, returns None (skip browser sources)
    assert preflight.ensure_browser(interactive=False) is None


def test_candidate_cdp_bases_includes_localhost_and_host():
    bases = preflight._candidate_cdp_bases()
    assert any("localhost:9999" in b for b in bases)
    # at least the loopback candidates are always present
    assert any("127.0.0.1:9999" in b for b in bases)
