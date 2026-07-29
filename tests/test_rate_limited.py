"""HTTP 429 is throttling, not an empty page.

`_get_html` only ever accepted status 200, so a 429 became "" and the caller
logged `empty body after fetch` — the same record it writes for a genuinely
contentless page. That conflation cost real data: 197 of 250
digital-strategy.ec.europa.eu pages looked undated and unfetchable while the
site was serving a 40 KB "Sorry" page under a 429, and BleepingComputer's 310
such errors read like anti-bot blocking rather than rate limiting.
"""
import httpx
import pytest

from tracker.sources import article as A


class _Resp:
    def __init__(self, text="", status_code=200):
        self.text = text
        self.status_code = status_code


def test_429_raises_rate_limited(monkeypatch):
    monkeypatch.setattr(httpx, "get", lambda url, **kw: _Resp("<html>sorry</html>", 429))
    with pytest.raises(A.RateLimited):
        A._one_get("https://example.com/a", 5.0)


def test_get_html_retries_once_after_a_backoff(monkeypatch):
    calls = []
    slept = []

    def fake_get(url, **kw):
        calls.append(url)
        return _Resp("<html>ok</html>") if len(calls) > 1 else _Resp("sorry", 429)

    monkeypatch.setattr(httpx, "get", fake_get)
    monkeypatch.setattr(A.time, "sleep", lambda s: slept.append(s))

    assert A._get_html("https://example.com/a", 5.0) == "<html>ok</html>"
    assert len(calls) == 2, "the 429 must be retried, not written off"
    assert slept == [A.RATE_LIMIT_BACKOFF], "the retry must wait first"


def test_persistent_429_propagates_rather_than_looking_empty(monkeypatch):
    """The caller has to be able to tell 'slow down' from 'nothing here'."""
    monkeypatch.setattr(httpx, "get", lambda url, **kw: _Resp("sorry", 429))
    monkeypatch.setattr(A.time, "sleep", lambda s: None)
    with pytest.raises(A.RateLimited):
        A._get_html("https://example.com/a", 5.0)


def test_a_404_is_still_just_empty(monkeypatch):
    monkeypatch.setattr(httpx, "get", lambda url, **kw: _Resp("", 404))
    assert A._get_html("https://example.com/a", 5.0) == ""


def test_fetch_body_with_date_propagates_rate_limiting(monkeypatch):
    monkeypatch.setattr(httpx, "get", lambda url, **kw: _Resp("sorry", 429))
    monkeypatch.setattr(A.time, "sleep", lambda s: None)
    with pytest.raises(A.RateLimited):
        A.fetch_body_with_date("https://example.com/a")
