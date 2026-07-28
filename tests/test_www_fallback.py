"""A host with no bare-domain DNS record must be retried with `www.`.

`dedup.normalize_url` strips `www.` to build a stable dedup key, and that
stripped URL is what gets stored in `articles.url` and later fetched. Most
sites serve both forms — jpcert.or.jp and nisc.go.jp do not, so every stored
URL for them was unfetchable from the moment it was inserted. That produced 60
`empty body after fetch` errors which read like anti-bot blocking but were
self-inflicted.
"""
import httpx
import pytest

from tracker.sources import article as A


class _Resp:
    def __init__(self, text, status_code=200):
        self.text = text
        self.status_code = status_code


def test_www_retried_when_bare_host_has_no_dns(monkeypatch):
    seen = []

    def fake_get(url, **kw):
        seen.append(url)
        if url.startswith("https://jpcert.or.jp/"):
            raise httpx.ConnectError("[Errno -5] No address associated with hostname")
        return _Resp("<html>body</html>")

    monkeypatch.setattr(httpx, "get", fake_get)
    html = A._get_html("https://jpcert.or.jp/at/2026/at260011.html", 5.0)

    assert html == "<html>body</html>"
    assert seen == ["https://jpcert.or.jp/at/2026/at260011.html",
                    "https://www.jpcert.or.jp/at/2026/at260011.html"]


def test_no_second_request_when_the_first_one_works(monkeypatch):
    seen = []

    def fake_get(url, **kw):
        seen.append(url)
        return _Resp("<html>ok</html>")

    monkeypatch.setattr(httpx, "get", fake_get)
    assert A._get_html("https://theregister.com/a", 5.0) == "<html>ok</html>"
    assert len(seen) == 1, "a working host must never pay for a second request"


def test_non_connect_errors_do_not_trigger_the_retry(monkeypatch):
    """A timeout or a 404 is not a naming problem — retrying `www.` is noise."""
    seen = []

    def fake_get(url, **kw):
        seen.append(url)
        raise httpx.ReadTimeout("too slow")

    monkeypatch.setattr(httpx, "get", fake_get)
    assert A._get_html("https://example.com/a", 5.0) == ""
    assert len(seen) == 1


def test_a_404_does_not_trigger_the_retry(monkeypatch):
    seen = []
    monkeypatch.setattr(httpx, "get",
                        lambda url, **kw: (seen.append(url), _Resp("", 404))[1])
    assert A._get_html("https://example.com/a", 5.0) == ""
    assert len(seen) == 1


@pytest.mark.parametrize("url,expected", [
    ("https://jpcert.or.jp/at/x.html", "https://www.jpcert.or.jp/at/x.html"),
    ("https://nisc.go.jp/news/1.html", "https://www.nisc.go.jp/news/1.html"),
    # already prefixed — nothing left to try
    ("https://www.example.com/a", ""),
    # keeps query and fragment intact
    ("https://foo.jp/a?b=1#c", "https://www.foo.jp/a?b=1#c"),
])
def test_www_url_rewrite(url, expected):
    assert A._www(url) == expected


def test_www_is_not_prepended_to_deep_subdomains():
    """`www.docbox.etsi.org` is not a thing; don't waste a request on it."""
    assert A._www("https://a.b.c.example.com/x") == ""
