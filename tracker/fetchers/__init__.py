"""Pluggable fetcher registry (WP1).

A Fetcher takes a Profile (a source's runtime config + HTTP cache state) and a
DateWindow, and returns a FetchResult (candidate articles + updated HTTP cache
hints). Adding a new fetch model = drop a file in this package that subclasses
Fetcher and is decorated with @register — no edits to cli/orchestrator needed.

Method names are canonical (tracker.methods): FEED / LISTING / SEARCH / API /
ARCHIVE.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import date
from typing import ClassVar, Protocol, runtime_checkable


@dataclass
class Candidate:
    url: str
    title: str = ""
    snippet: str = ""           # short text used by the L1 gate + as raw_text seed
    published: str | None = None  # YYYY-MM-DD if known
    content_hash: str | None = None


@dataclass
class DateWindow:
    since: date
    until: date

    def contains(self, d: str | None) -> bool:
        """True if d (YYYY-MM-DD) is in [since, until]. Unknown dates pass."""
        if not d:
            return True
        try:
            dd = date.fromisoformat(d[:10])
        except ValueError:
            return True
        return self.since <= dd <= self.until


@dataclass
class Profile:
    """Lightweight, fetcher-facing view of a source_profiles row (decoupled
    from sqlite). Built via Profile.from_row()."""
    domain: str
    name: str
    method: str
    trackers: list[str]
    feed_url: str | None = None
    search_path: str | None = None
    api_endpoint: str | None = None
    accept_all: bool = False
    etag: str | None = None
    last_modified: str | None = None
    last_seen_utc: str | None = None
    url: str | None = None        # entry/base URL (listing target); not always in DB
    # Extra per-fetch hints the orchestrator may set (e.g. query_prefix for SEARCH,
    # keywords for SEARCH/LISTING filter). Not persisted.
    extra: dict = field(default_factory=dict)

    @classmethod
    def from_row(cls, row, *, url: str | None = None, extra: dict | None = None) -> "Profile":
        return cls(
            domain=row["domain"], name=row["name"], method=row["method"],
            trackers=[t for t in (row["trackers"] or "").split(",") if t],
            feed_url=row["feed_url"], search_path=row["search_path"],
            api_endpoint=row["api_endpoint"], accept_all=bool(row["accept_all"]),
            etag=row["etag"], last_modified=row["last_modified"],
            last_seen_utc=row["last_seen_utc"], url=url, extra=extra or {},
        )


@dataclass
class FetchResult:
    items: list[Candidate] = field(default_factory=list)
    not_modified: bool = False          # HTTP 304 → source skipped entirely
    etag: str | None = None             # new etag to persist
    last_modified: str | None = None    # new Last-Modified to persist
    error: str | None = None            # non-None → fetch failed
    # Raw entries the source served before window/topic filtering. Used ONLY
    # as the liveness signal for dormancy: `items` can legitimately be empty
    # for a perfectly healthy source (nothing published in this window, or
    # nothing matching the tracker's topic filter), whereas items_seen == 0
    # means the fetcher parsed nothing at all. None → caller falls back to
    # len(items).
    items_seen: int | None = None


@runtime_checkable
class Fetcher(Protocol):
    method: ClassVar[str]
    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult: ...


REGISTRY: dict[str, type] = {}


def register(cls):
    """Class decorator: register a Fetcher under its `method` key."""
    REGISTRY[cls.method] = cls
    return cls


def get_fetcher(method: str):
    """Return an instance of the registered fetcher for a canonical method.
    Falls back to SEARCH if unknown (mirrors methods.canonical default)."""
    from ..methods import canonical
    m = canonical(method)
    cls = REGISTRY.get(m) or REGISTRY.get("SEARCH")
    return cls() if cls else None


def _autoload() -> None:
    """Import sibling modules so their @register decorators run."""
    import importlib
    import pkgutil
    for mod in pkgutil.iter_modules(__path__):
        if mod.name != "__init__":
            importlib.import_module(f"{__name__}.{mod.name}")


_autoload()
