"""Method dispatch: entry → fetcher."""
from __future__ import annotations

from datetime import date

from ..config import Entry


def feeds_for(entries: list[Entry]) -> list[tuple[str, str]]:
    return [(e.name, e.feed_url) for e in entries
            if (e.method or "").upper() == "FEED" and e.feed_url]


def path_entries(entries: list[Entry]) -> list[Entry]:
    return [e for e in entries if (e.method or "").upper() == "PATH" and e.search_path]


def api_entries(entries: list[Entry]) -> list[Entry]:
    return [e for e in entries if (e.method or "").upper() == "API"]


def site_entries(entries: list[Entry]) -> list[Entry]:
    """SITE-method entries — fallback uses gemini-style search.
    With local-only mode, these are skipped unless a manual url-list is provided."""
    return [e for e in entries if (e.method or "SITE").upper() == "SITE"]
