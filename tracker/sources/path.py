"""PATH-method fetcher: pull a listing page (HTML), extract candidate
article URLs from it, optionally filter by keyword presence on the page or
URL.

Tries httpx first; falls back to curl_cffi stealth for sites that filter
generic UAs. The trafilatura/extract module handles the actual body later
during summarize.
"""
from __future__ import annotations

import re
from dataclasses import dataclass
from urllib.parse import urljoin, urlparse

import httpx

from .stealth import fetch as stealth_fetch

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36 tracker/0.x")


@dataclass
class Hit:
    title: str
    url: str
    snippet: str = ""


def _get_html(url: str, timeout: float) -> str:
    try:
        r = httpx.get(url, follow_redirects=True, timeout=timeout,
                      headers={"User-Agent": UA, "Accept-Language": "en,zh-TW;q=0.7,ja;q=0.6"})
        if r.status_code == 200:
            return r.text
    except Exception:
        pass
    return stealth_fetch(url, timeout=timeout)


def _looks_like_article(href: str) -> bool:
    p = urlparse(href)
    path = p.path or "/"
    if path in ("", "/"):
        return False
    # Reject obvious section/listing pages
    if re.match(r"^/?(news|news-events|press-releases|alerts|tags?|categories?|page|search|home|sitemap)/?$", path, re.I):
        return False
    # Reject site-wide footer / about pages (privacy policy, accessibility,
    # terms of use, contact, sitemap, related-links indexes). These get picked
    # up by listing scrapes (esp. NISC, BSI, government sites) but are not
    # news articles and yield empty bodies downstream.
    if re.search(r"/(privacy(_policy)?|webaccessibility|accessibility|terms|rights|"
                 r"about|contact|copyright|disclaimer|legal|imprint|impressum|"
                 r"datenschutz|mentions[-_]?legales|cookies?|sitemap|link/index)"
                 r"(\.html?)?/?$", path, re.I):
        return False
    segments = [s for s in path.strip("/").split("/") if s]
    if not segments:
        return False
    last = segments[-1]
    # Heuristic: needs a slug-like segment (hyphenated or digit-bearing).
    return "-" in last or any(ch.isdigit() for ch in last) or last.endswith((".html", ".htm"))


def fetch_listing(base_url: str, *, search_path: str = "",
                  keyword: str = "", domain: str = "",
                  max_results: int = 30, timeout: float = 20.0,
                  filter_keywords: tuple[str, ...] = ()) -> list[Hit]:
    """Fetch a listing page and extract candidate article URLs.

    base_url: the listing page URL OR the domain root if search_path used.
    search_path: appended to base_url if non-empty; keyword interpolated.
    filter_keywords: only keep links whose anchor text or URL contains any
                     of these (case-insensitive). Empty tuple = no filter.
    """
    try:
        from selectolax.parser import HTMLParser
    except ImportError:
        return []

    url = base_url
    if search_path:
        full = base_url.rstrip("/") + search_path
        if "{kw}" in full:
            full = full.replace("{kw}", keyword)
        else:
            full = full + keyword
        url = full

    html = _get_html(url, timeout)
    if not html:
        return []

    tree = HTMLParser(html)
    domain_norm = (domain or urlparse(base_url).netloc).lower().removeprefix("www.")

    hits: list[Hit] = []
    seen: set[str] = set()
    for a in tree.css("a"):
        href = (a.attributes.get("href") or "").strip()
        if not href:
            continue
        # Resolve relative URLs against the listing page.
        abs_url = urljoin(url, href)
        p = urlparse(abs_url)
        # Same-domain only
        netloc = p.netloc.lower().removeprefix("www.")
        if domain_norm not in netloc:
            continue
        if not _looks_like_article(abs_url):
            continue
        if abs_url in seen:
            continue
        anchor_text = (a.text() or "").strip()
        if filter_keywords:
            blob = (anchor_text + " " + abs_url).lower()
            if not any(k.lower() in blob for k in filter_keywords):
                continue
        if not anchor_text or len(anchor_text) < 8:
            # Skip purely structural links with no readable label.
            continue
        seen.add(abs_url)
        hits.append(Hit(title=anchor_text, url=abs_url))
        if len(hits) >= max_results:
            break
    return hits
