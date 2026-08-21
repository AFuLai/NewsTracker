"""SEARCH fetcher — DuckDuckGo site: search with a persistent query cache.

DDG rate-limits repeated identical queries (measured at v1.0: 30 dup queries →
0 hits). A 24h on-disk cache keyed by (domain, keyword, window, prefix) makes
re-runs over an overlapping window cheap and avoids tripping the limiter.

Keywords come from profile.extra['keywords']; query_prefix from
profile.extra['query_prefix']. Both are set by the orchestrator from the
tracker's searchinfo KEYs.
"""
from __future__ import annotations

import json
from datetime import datetime, timedelta
from pathlib import Path

from . import Candidate, DateWindow, FetchResult, Profile, register
from ..sources.site import site_keyword_search, throttle
from .. import utcnow

_CACHE_PATH = Path("/opt/tracker/db/query_cache.json")
_TTL = timedelta(hours=24)


def _load_cache() -> dict:
    try:
        return json.loads(_CACHE_PATH.read_text(encoding="utf-8"))
    except Exception:
        return {}


def _save_cache(cache: dict) -> None:
    try:
        _CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
        _CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
    except Exception:
        pass


def _key(domain: str, kw: str, since: str, until: str, prefix: str) -> str:
    return f"{prefix}|{kw}|{domain}|{since}|{until}"


@register
class SearchFetcher:
    method = "SEARCH"
    max_keys = 3            # keywords per source per run
    max_results = 8

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        keywords = list(profile.extra.get("keywords", []))[: self.max_keys]
        prefix = profile.extra.get("query_prefix", "")
        if not keywords:
            return FetchResult(error="no keywords for SEARCH")
        since, until = window.since.isoformat(), window.until.isoformat()
        cache = _load_cache()
        now = utcnow()
        seen: set[str] = set()
        items: list[Candidate] = []
        cache_dirty = False
        for kw in keywords:
            k = _key(profile.domain, kw, since, until, prefix)
            entry = cache.get(k)
            fresh = entry and (now - datetime.fromisoformat(entry["ts"])) < _TTL
            if fresh:
                hits = entry["hits"]
            else:
                raw = site_keyword_search(
                    profile.domain, kw, since=since, until=until,
                    max_results=self.max_results, query_prefix=prefix)
                hits = [{"url": h.url, "title": h.title, "snippet": h.snippet} for h in raw]
                cache[k] = {"ts": now.isoformat(), "hits": hits}
                cache_dirty = True
                throttle()
            for h in hits:
                if h["url"] in seen:
                    continue
                seen.add(h["url"])
                items.append(Candidate(url=h["url"], title=h["title"],
                                       snippet=h.get("snippet", "")))
        if cache_dirty:
            _save_cache(cache)
        return FetchResult(items=items)
