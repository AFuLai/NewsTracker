"""DuckDuckGo HTML 'lite' site:domain search for entries with no RSS feed.

Endpoint: https://html.duckduckgo.com/html/?q=...
Results in <a class="result__a"> elements. Links may be wrapped in
//duckduckgo.com/l/?uddg=<url-encoded>&...
"""
from __future__ import annotations

import re
import time
from dataclasses import dataclass
from urllib.parse import unquote, urlparse, parse_qs

import httpx

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")
ENDPOINT = "https://html.duckduckgo.com/html/"
THROTTLE_SEC = 1.5  # be polite — DDG will rate-limit otherwise


@dataclass
class Hit:
    title: str
    url: str
    snippet: str


def _unwrap(href: str) -> str:
    if href.startswith("//duckduckgo.com/l/") or href.startswith("https://duckduckgo.com/l/"):
        if href.startswith("//"):
            href = "https:" + href
        q = parse_qs(urlparse(href).query)
        if "uddg" in q:
            return unquote(q["uddg"][0])
    return href


def search(query: str, *, max_results: int = 10, timeout: float = 20.0) -> list[Hit]:
    try:
        from selectolax.parser import HTMLParser
    except ImportError:
        return []
    try:
        r = httpx.post(ENDPOINT, data={"q": query}, follow_redirects=True,
                       timeout=timeout, headers={"User-Agent": UA})
        r.raise_for_status()
    except Exception:
        return []
    tree = HTMLParser(r.text)
    hits: list[Hit] = []
    for result in tree.css("div.result")[:max_results * 2]:
        a = result.css_first("a.result__a")
        if not a:
            continue
        href = _unwrap((a.attributes.get("href") or "").strip())
        if not href.startswith("http"):
            continue
        title = (a.text() or "").strip()
        snippet_node = result.css_first("a.result__snippet")
        snippet = (snippet_node.text() if snippet_node else "").strip()
        hits.append(Hit(title=title, url=href, snippet=snippet))
        if len(hits) >= max_results:
            break
    return hits


def site_keyword_search(domain: str, keyword: str, *,
                        since: str | None = None, until: str | None = None,
                        max_results: int = 8) -> list[Hit]:
    """Build a `kw site:domain after:since before:until` query."""
    q = f"{keyword} site:{domain}"
    if since:
        q += f" after:{since}"
    if until:
        q += f" before:{until}"
    return [h for h in search(q, max_results=max_results)
            if domain in urlparse(h.url).netloc]


def throttle() -> None:
    time.sleep(THROTTLE_SEC)
