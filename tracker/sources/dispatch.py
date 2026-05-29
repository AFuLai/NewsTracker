"""Method dispatch: entry → fetcher."""
from __future__ import annotations

from datetime import date

from ..config import Entry


def feeds_for(entries: list[Entry]) -> list[tuple[str, str]]:
    """Returns (source_name, feed_url) pairs, deduplicated by feed_url so the same
    feed is not fetched twice when multiple entries share a domain."""
    seen: set[str] = set()
    out: list[tuple[str, str]] = []
    for e in entries:
        if (e.method or "").upper() != "FEED" or not e.feed_url:
            continue
        if e.feed_url in seen:
            continue
        seen.add(e.feed_url)
        out.append((e.name, e.feed_url))
    return out


def path_entries(entries: list[Entry]) -> list[Entry]:
    """Entries that should be PATH-fetched. search_path is optional:
    when empty, the entry.url itself is treated as the listing page."""
    return [e for e in entries if (e.method or "").upper() == "PATH"]


def api_entries(entries: list[Entry]) -> list[Entry]:
    return [e for e in entries if (e.method or "").upper() == "API"]


def site_entries(entries: list[Entry]) -> list[Entry]:
    """SITE-method entries — handled via DuckDuckGo `site:domain kw` search."""
    return [e for e in entries if (e.method or "SITE").upper() == "SITE"]
