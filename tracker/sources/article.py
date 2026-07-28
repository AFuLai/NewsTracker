"""Fetch full article body for a given URL with sensible fallbacks.

Order of attempts:
  1. httpx with desktop UA (fast, works for most blogs)
  2. curl_cffi with chrome120 fingerprint (Cloudflare-protected sites)
"""
from __future__ import annotations

from urllib.parse import urlsplit, urlunsplit

import httpx

from ..extract import extract_body, extract_metadata, looks_like_boilerplate
from .stealth import fetch as stealth_fetch

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0 Safari/537.36 tracker/0.x")
MIN_BODY = 600  # below this we treat extraction as failed and try stealth


def _failed(body: str) -> bool:
    """Extraction is 'failed' when it is too short *or* is a nav/teaser block.

    A sidebar can easily be longer than MIN_BODY (theregister.com served a
    3,350-char one), so length alone never noticed the failure.
    """
    return len(body) < MIN_BODY or looks_like_boilerplate(body)


def _pick(body: str, body2: str) -> str:
    """Choose between the plain fetch and the stealth refetch.

    Length alone is not enough: a longer body that is boilerplate must never
    beat a shorter body that is real prose.
    """
    bad1, bad2 = looks_like_boilerplate(body), looks_like_boilerplate(body2)
    if bad1 != bad2:
        return body2 if bad1 and len(body2) >= MIN_BODY else body
    return body2 if len(body2) > len(body) else body


def _one_get(url: str, timeout: float) -> tuple[str, bool]:
    """Fetch *url*. Returns (html, host_unreachable).

    `host_unreachable` is set on ConnectError, which is what httpx raises when
    the hostname has no DNS record ("[Errno -5] No address associated with
    hostname"), as well as for refused/unroutable hosts. We deliberately do not
    match on the message text — it varies by resolver — and a ConnectError is
    reason enough to spend one retry on the `www.` host.
    """
    try:
        r = httpx.get(url, follow_redirects=True, timeout=timeout,
                      headers={"User-Agent": UA, "Accept-Language": "en,zh-TW;q=0.7"})
        if r.status_code == 200:
            return r.text, False
    except httpx.ConnectError:
        return "", True
    except Exception:
        pass
    return "", False


def _www(url: str) -> str:
    """Same URL with a `www.` host prefix, or '' when that makes no sense."""
    p = urlsplit(url)
    if not p.netloc or p.netloc.startswith("www.") or p.netloc.count(".") > 2:
        return ""
    return urlunsplit((p.scheme, "www." + p.netloc, p.path, p.query, p.fragment))


def _get_html(url: str, timeout: float) -> str:
    """Fetch article HTML, retrying with `www.` when the bare host has no DNS.

    `dedup.normalize_url` strips `www.` to build a stable dedup key, and that
    stripped URL is what gets stored and later fetched. Most sites serve both
    forms, but some publish only the `www.` host — jpcert.or.jp and nisc.go.jp
    have no bare-domain record at all, so every stored URL for them was
    unfetchable from the start (60 `empty body after fetch` errors, previously
    misread as anti-bot blocking).
    """
    html, dns_failed = _one_get(url, timeout)
    if html or not dns_failed:
        return html
    alt = _www(url)
    return _one_get(alt, timeout)[0] if alt else ""


def fetch_body(url: str, *, timeout: float = 20.0) -> str:
    """Return cleaned article body or '' on failure."""
    if not url or not url.startswith("http"):
        return ""
    html = _get_html(url, timeout)
    body = extract_body(html, url=url) if html else ""
    if _failed(body):
        html2 = stealth_fetch(url, timeout=timeout)
        if html2:
            body = _pick(body, extract_body(html2, url=url))
    return body


def fetch_body_with_date(url: str, *, timeout: float = 20.0) -> tuple[str, str | None]:
    """Like fetch_body but also returns extracted publication date (YYYY-MM-DD) if found."""
    if not url or not url.startswith("http"):
        return "", None
    html = _get_html(url, timeout)
    body = extract_body(html, url=url) if html else ""
    meta_date = extract_metadata(html, url=url).get("date") if html else None
    if _failed(body):
        html2 = stealth_fetch(url, timeout=timeout)
        if html2:
            body = _pick(body, extract_body(html2, url=url))
            md2 = extract_metadata(html2, url=url).get("date")
            if md2 and not meta_date:
                meta_date = md2
    return body, meta_date
