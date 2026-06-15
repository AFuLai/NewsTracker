"""Canonical fetch-method names shared between source_profiles (WP2) and the
fetcher registry (WP1).

Legacy searchinfo / builtins use FEED / PATH / SITE / API. v2 canonicalizes to
FEED / LISTING / SEARCH / API / ARCHIVE (ARCHIVE = Wayback fallback, only set by
auto-probe, never seeded directly).
"""
from __future__ import annotations

FEED = "FEED"
LISTING = "LISTING"
SEARCH = "SEARCH"
API = "API"
ARCHIVE = "ARCHIVE"
BROWSER = "BROWSER"

CANONICAL = {FEED, LISTING, SEARCH, API, ARCHIVE, BROWSER}

# Legacy method name (searchinfo `method:` field / builtins) → canonical.
_LEGACY = {
    "FEED": FEED,
    "PATH": LISTING,
    "LISTING": LISTING,
    "SITE": SEARCH,
    "SEARCH": SEARCH,
    "API": API,
    "ARCHIVE": ARCHIVE,
    "WAYBACK": ARCHIVE,
    "BROWSER": BROWSER,
    "CHROME": BROWSER,
}


def canonical(method: str | None) -> str:
    """Map any legacy/canonical method name to a canonical one. Default SEARCH."""
    if not method:
        return SEARCH
    return _LEGACY.get(method.strip().upper(), SEARCH)
