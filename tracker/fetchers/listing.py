"""LISTING fetcher — scrape an index/listing page for article links.

Wraps the existing sources.path.fetch_listing (httpx → curl_cffi stealth
fallback, selectolax link extraction, footer/about rejection). Topical filter
words come from profile.extra['filter_keywords']; accept_all bypasses them.
"""
from __future__ import annotations

from . import Candidate, DateWindow, FetchResult, Profile, register
from ..sources.path import fetch_listing as _fetch_listing


@register
class ListingFetcher:
    method = "LISTING"

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        base = profile.url or (f"https://{profile.domain}")
        filt = () if profile.accept_all else tuple(profile.extra.get("filter_keywords", ()))
        try:
            hits = _fetch_listing(
                base_url=base, search_path=profile.search_path or "",
                keyword="", domain=profile.domain, filter_keywords=filt)
        except Exception as exc:
            return FetchResult(error=str(exc))
        items = [Candidate(url=h.url, title=h.title, snippet=getattr(h, "snippet", "") or "")
                 for h in hits]
        return FetchResult(items=items)
