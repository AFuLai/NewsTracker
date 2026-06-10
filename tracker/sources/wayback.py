"""Wayback Machine fetcher — fallback for JS-only SPAs whose live page
returns 0 useful HTML (ENISA CRA topic, BSI Cyber Resilience Act, CEN/CENELEC,
STAN4CRA, etc.).

Strategy: ask `https://web.archive.org/web/<timespec>/<URL>` for the closest
snapshot. The Archive returns a rewritten HTML where in-page anchors keep
the original target inside the URL — we strip the `/web/<timestamp>/` prefix
to recover real URLs.

Usage from CLI fetch (PATH phase): if an Entry has `method=PATH` and
`accept_all=False` and `fetch_listing()` came back empty, retry via Wayback.
"""
from __future__ import annotations

import re
from urllib.parse import urlparse

import httpx

from .path import _looks_like_article, Hit

UA = "Mozilla/5.0 (X11; Linux x86_64) Chrome/120.0 tracker/0.x"
WAYBACK_AVAILABLE = "https://archive.org/wayback/available"
WAYBACK_FETCH = "https://web.archive.org/web/{ts}/{url}"

# Pattern for rewritten Wayback anchors: //web.archive.org/web/<digits>/<real>
_WAYBACK_HREF_RE = re.compile(
    r'href=["\'](?:https?:)?//web\.archive\.org/web/\d+/([^"\']+)["\']', re.I
)
# Looser fallback for already-resolved absolute URLs in body
_ABS_HREF_RE = re.compile(r'href=["\']((?:https?:)?//[^"\']+)["\']', re.I)


def closest_snapshot(url: str, *, timestamp: str = "2026", timeout: float = 15.0) -> str | None:
    """Ask the Wayback API for the closest snapshot to a date and return its
    archive URL (https://web.archive.org/web/<ts>/<url>) or None."""
    try:
        r = httpx.get(WAYBACK_AVAILABLE,
                      params={"url": url, "timestamp": timestamp},
                      headers={"User-Agent": UA}, timeout=timeout)
        if r.status_code != 200:
            return None
        snap = r.json().get("archived_snapshots", {}).get("closest", {})
        if snap.get("available") and snap.get("url"):
            return snap["url"]
    except Exception:
        return None
    return None


def fetch_listing(target_url: str, *, domain: str, timestamp: str = "2026",
                  max_results: int = 30,
                  filter_keywords: tuple[str, ...] = ()) -> list[Hit]:
    """Fetch the closest Wayback snapshot of target_url; extract links to
    same-domain article pages from its HTML. Returns clean (real-domain) URLs.
    """
    snapshot_url = closest_snapshot(target_url, timestamp=timestamp)
    if not snapshot_url:
        return []
    try:
        r = httpx.get(snapshot_url, headers={"User-Agent": UA}, timeout=20,
                      follow_redirects=True)
        if r.status_code != 200:
            return []
        html = r.text
    except Exception:
        return []

    domain_norm = (domain or "").lower().removeprefix("www.")
    hits: list[Hit] = []
    seen: set[str] = set()

    # Primary: Wayback-rewritten anchors carry the original URL in the path
    candidates: list[str] = []
    for m in _WAYBACK_HREF_RE.finditer(html):
        raw = m.group(1)
        if not raw.startswith(("http://", "https://")):
            raw = "https://" + raw.lstrip("/")
        candidates.append(raw)
    # Fallback: also collect plain absolute links (some Wayback pages mix)
    for m in _ABS_HREF_RE.finditer(html):
        u = m.group(1)
        if u.startswith("//"):
            u = "https:" + u
        if "web.archive.org" in u:
            continue
        candidates.append(u)

    for url in candidates:
        try:
            netloc = urlparse(url).netloc.lower().removeprefix("www.")
        except Exception:
            continue
        if domain_norm not in netloc:
            continue
        if not _looks_like_article(url):
            continue
        if url in seen:
            continue
        if filter_keywords:
            low = url.lower()
            if not any(k.lower() in low for k in filter_keywords):
                continue
        seen.add(url)
        # Anchor text isn't easily recoverable from regex; use URL slug.
        slug = urlparse(url).path.rstrip("/").rsplit("/", 1)[-1].replace("-", " ")
        hits.append(Hit(title=slug or url, url=url))
        if len(hits) >= max_results:
            break
    return hits
