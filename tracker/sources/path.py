"""PATH-method search-page fetcher (httpx + selectolax)."""
from __future__ import annotations

import httpx


def fetch_search(base_url: str, search_path: str, keyword: str, *,
                 timeout: float = 20.0) -> str:
    url = base_url.rstrip("/") + search_path + httpx.QueryParams({"q": keyword})["q"]
    # Some sites use ?q=, others ?query= — let caller supply full search_path with trailing key
    full = base_url.rstrip("/") + search_path + keyword
    try:
        r = httpx.get(full, follow_redirects=True, timeout=timeout,
                      headers={"User-Agent": "tracker/0.x"})
        r.raise_for_status()
        return r.text
    except Exception:
        return ""


def extract_article_links(html: str) -> list[str]:
    try:
        from selectolax.parser import HTMLParser
    except ImportError:
        return []
    tree = HTMLParser(html)
    links: list[str] = []
    seen: set[str] = set()
    for a in tree.css("a"):
        href = a.attributes.get("href")
        if not href or not href.startswith("http"):
            continue
        if href in seen:
            continue
        seen.add(href)
        links.append(href)
    return links
