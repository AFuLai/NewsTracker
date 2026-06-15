"""WP1 tests: fetcher registry, dispatch, DateWindow, FEED conditional GET."""
from datetime import date

import tracker.fetchers as fetchers
from tracker.fetchers import (Candidate, DateWindow, FetchResult, Profile,
                              get_fetcher, REGISTRY)
from tracker.fetchers import feed as feed_mod


def test_all_methods_registered():
    assert {"FEED", "LISTING", "SEARCH", "API", "ARCHIVE", "BROWSER"} <= set(REGISTRY)


def test_get_fetcher_canonicalizes():
    assert type(get_fetcher("PATH")).method == "LISTING"
    assert type(get_fetcher("SITE")).method == "SEARCH"
    assert type(get_fetcher("FEED")).method == "FEED"
    assert type(get_fetcher("garbage")).method == "SEARCH"  # default


def test_datewindow_contains():
    w = DateWindow(date(2026, 6, 1), date(2026, 6, 7))
    assert w.contains("2026-06-04")
    assert not w.contains("2026-05-30")
    assert not w.contains("2026-06-10")
    assert w.contains(None)            # unknown dates pass
    assert w.contains("garbage")       # unparseable pass


def test_profile_from_row():
    row = {
        "domain": "x.com", "name": "X", "method": "FEED",
        "trackers": "security,eu_cra", "feed_url": "https://x.com/f",
        "search_path": None, "api_endpoint": None, "accept_all": 0,
        "etag": '"e"', "last_modified": None, "last_seen_utc": "2026-06-01",
    }
    p = Profile.from_row(row, url="https://x.com")
    assert p.trackers == ["security", "eu_cra"]
    assert p.feed_url == "https://x.com/f"
    assert p.accept_all is False
    assert p.url == "https://x.com"


class _FakeResp:
    def __init__(self, status, content=b"", headers=None):
        self.status_code = status
        self.content = content
        self.headers = headers or {}


_RSS = b"""<?xml version="1.0"?><rss version="2.0"><channel>
<item><title>CVE thing</title><link>https://x.com/a</link>
<pubDate>Wed, 03 Jun 2026 10:00:00 GMT</pubDate>
<description>about a CVE</description></item>
<item><title>old thing</title><link>https://x.com/b</link>
<pubDate>Wed, 01 Jan 2020 10:00:00 GMT</pubDate>
<description>old</description></item>
</channel></rss>"""


def test_feed_fetcher_200_and_window(monkeypatch):
    monkeypatch.setattr(feed_mod.httpx, "get",
                        lambda *a, **k: _FakeResp(200, _RSS, {"ETag": '"new"'}))
    p = Profile(domain="x.com", name="X", method="FEED", trackers=["security"],
                feed_url="https://x.com/feed")
    res = get_fetcher("FEED").fetch(p, DateWindow(date(2026, 6, 1), date(2026, 6, 7)))
    assert res.error is None and not res.not_modified
    # only the in-window item survives
    assert [c.url for c in res.items] == ["https://x.com/a"]
    assert res.etag == '"new"'
    assert res.items[0].published == "2026-06-03"


def test_feed_fetcher_304(monkeypatch):
    monkeypatch.setattr(feed_mod.httpx, "get", lambda *a, **k: _FakeResp(304))
    p = Profile(domain="x.com", name="X", method="FEED", trackers=["security"],
                feed_url="https://x.com/feed", etag='"e"')
    res = get_fetcher("FEED").fetch(p, DateWindow(date(2026, 6, 1), date(2026, 6, 7)))
    assert res.not_modified is True and res.items == []


def test_feed_fetcher_no_url():
    p = Profile(domain="x.com", name="X", method="FEED", trackers=["security"])
    res = get_fetcher("FEED").fetch(p, DateWindow(date(2026, 6, 1), date(2026, 6, 7)))
    assert res.error == "no feed_url"
