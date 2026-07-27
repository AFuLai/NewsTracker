"""LISTING fetcher — scrape an index/listing page for article links.

Wraps the existing sources.path.fetch_listing (httpx → curl_cffi stealth
fallback, selectolax link extraction, footer/about rejection). Topical filter
words come from profile.extra['filter_keywords']; accept_all bypasses them.
"""
from __future__ import annotations

from . import (Candidate, DateWindow, FetchResult, Profile, effective_filter,
               register)
from ..sources.path import fetch_listing as _fetch_listing


@register
class ListingFetcher:
    method = "LISTING"

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        base = profile.url or (f"https://{profile.domain}")
        filt = () if profile.accept_all else effective_filter(
            profile.extra.get("filter_keywords", ()),
            domain=profile.domain, name=profile.name)
        try:
            # Fetch UNFILTERED (one HTTP request) and apply the topic filter
            # here, so we learn both numbers without hitting the page twice.
            all_hits = _fetch_listing(
                base_url=base, search_path=profile.search_path or "",
                keyword="", domain=profile.domain, filter_keywords=())
        except Exception as exc:
            return FetchResult(error=str(exc))
        if filt:
            low = tuple(k.lower() for k in filt)
            hits = [h for h in all_hits
                    if any(k in f"{h.title} {h.url}".lower() for k in low)]
        else:
            hits = all_hits
        items = [Candidate(url=h.url, title=h.title, snippet=getattr(h, "snippet", "") or "")
                 for h in hits]
        # Liveness is measured BEFORE the tracker's topic filter: ENISA's news
        # index is perfectly healthy even in a week when none of its stories
        # mention the CRA. Only "the page yielded no article links at all"
        # means the source is actually broken.
        return FetchResult(items=items, items_seen=len(all_hits))
