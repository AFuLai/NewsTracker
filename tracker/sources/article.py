"""Fetch full article body for a given URL with sensible fallbacks.

Order of attempts:
  1. httpx with desktop UA (fast, works for most blogs)
  2. curl_cffi with chrome120 fingerprint (Cloudflare-protected sites)
"""
from __future__ import annotations

import httpx

from ..extract import extract_body, extract_metadata
from .stealth import fetch as stealth_fetch

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0 Safari/537.36 tracker/0.x")
MIN_BODY = 600  # below this we treat extraction as failed and try stealth


def _get_html(url: str, timeout: float) -> str:
    try:
        r = httpx.get(url, follow_redirects=True, timeout=timeout,
                      headers={"User-Agent": UA, "Accept-Language": "en,zh-TW;q=0.7"})
        if r.status_code == 200:
            return r.text
    except Exception:
        pass
    return ""


def fetch_body(url: str, *, timeout: float = 20.0) -> str:
    """Return cleaned article body or '' on failure."""
    if not url or not url.startswith("http"):
        return ""
    html = _get_html(url, timeout)
    body = extract_body(html, url=url) if html else ""
    if len(body) < MIN_BODY:
        html2 = stealth_fetch(url, timeout=timeout)
        if html2:
            body2 = extract_body(html2, url=url)
            if len(body2) > len(body):
                body = body2
    return body


def fetch_body_with_date(url: str, *, timeout: float = 20.0) -> tuple[str, str | None]:
    """Like fetch_body but also returns extracted publication date (YYYY-MM-DD) if found."""
    if not url or not url.startswith("http"):
        return "", None
    html = _get_html(url, timeout)
    body = extract_body(html, url=url) if html else ""
    meta_date = extract_metadata(html, url=url).get("date") if html else None
    if len(body) < MIN_BODY:
        html2 = stealth_fetch(url, timeout=timeout)
        if html2:
            body2 = extract_body(html2, url=url)
            if len(body2) > len(body):
                body = body2
            md2 = extract_metadata(html2, url=url).get("date")
            if md2 and not meta_date:
                meta_date = md2
    return body, meta_date
