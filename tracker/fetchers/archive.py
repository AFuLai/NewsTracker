"""ARCHIVE fetcher — Wayback Machine snapshot of a JS-only listing page.

Used for sources whose live page returns no usable links (ENISA topic pages,
CEN/CENELEC, STAN4CRA). Reuses sources.wayback.fetch_listing which finds the
closest archive.org snapshot and extracts same-domain article URLs.
"""
from __future__ import annotations

from . import Candidate, DateWindow, FetchResult, Profile, register
from ..sources.wayback import fetch_listing as _wayback_listing


@register
class ArchiveFetcher:
    method = "ARCHIVE"

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        target = profile.url or f"https://{profile.domain}"
        filt = () if profile.accept_all else tuple(profile.extra.get("filter_keywords", ()))
        try:
            hits = _wayback_listing(target_url=target, domain=profile.domain,
                                    filter_keywords=filt)
        except Exception as exc:
            return FetchResult(error=str(exc))
        items = [Candidate(url=h.url, title=h.title) for h in hits]
        return FetchResult(items=items)
