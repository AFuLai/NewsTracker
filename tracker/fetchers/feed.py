"""FEED fetcher — RSS/Atom with HTTP conditional GET + watermark.

Conditional GET: send If-None-Match / If-Modified-Since from the profile's
cached etag/last_modified. A 304 returns not_modified=True so the orchestrator
skips the source entirely (zero parse cost). Otherwise parse with feedparser
and return new etag/Last-Modified to persist.
"""
from __future__ import annotations

from datetime import datetime, timezone

import feedparser
import httpx

from . import (Candidate, DateWindow, FetchResult, Profile, effective_filter,
               register)
from ..dedup import content_hash

UA = "tracker/2.x (+wsl; conditional-get)"


@register
class FeedFetcher:
    method = "FEED"

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        url = profile.feed_url
        if not url:
            return FetchResult(error="no feed_url")
        headers = {"User-Agent": UA}
        if profile.etag:
            headers["If-None-Match"] = profile.etag
        if profile.last_modified:
            headers["If-Modified-Since"] = profile.last_modified
        try:
            r = httpx.get(url, headers=headers, follow_redirects=True, timeout=20)
        except Exception as exc:
            return FetchResult(error=str(exc))
        if r.status_code == 304:
            return FetchResult(not_modified=True)
        if r.status_code != 200:
            return FetchResult(error=f"HTTP {r.status_code}")

        parsed = feedparser.parse(r.content)
        items: list[Candidate] = []
        newest = profile.last_seen_utc or ""
        filt = () if profile.accept_all else tuple(
            k.lower() for k in effective_filter(
                profile.extra.get("filter_keywords", ()),
                domain=profile.domain, name=profile.name))
        for e in parsed.entries:
            published = _iso_date(e)
            link = getattr(e, "link", "") or ""
            if not link:
                continue
            if not window.contains(published):
                continue
            title = (getattr(e, "title", "") or "").strip()
            summary = getattr(e, "summary", None)
            # Topical filter, same as LISTING already applies. Only trackers
            # that declare one in TRACKER_FETCH are affected — today that is
            # eu_cra alone, so security/os feeds are untouched. Without this a
            # broad institutional feed (etsi.org publishes Plugtests reports,
            # award winners and a GSM obituary) pours straight into a narrow
            # topical tracker.
            if filt and not any(k in f"{title} {summary or ''} {link}".lower()
                                for k in filt):
                continue
            items.append(Candidate(
                url=link, title=title, snippet=summary or "",
                published=published,
                content_hash=content_hash((title or "") + (summary or "")),
            ))
            if published and published > newest:
                newest = published
        return FetchResult(
            items=items,
            # Raw entries the feed actually served, BEFORE the date-window
            # filter above. This is the liveness signal: official bodies like
            # ANSSI/ENISA publish monthly, so a healthy feed routinely has
            # zero items inside a 3-day window. Judging liveness by `items`
            # would mark exactly those slow official sources dead again.
            items_seen=len(parsed.entries),
            etag=r.headers.get("ETag"),
            last_modified=r.headers.get("Last-Modified"),
        )


def _iso_date(entry) -> str | None:
    for attr in ("published_parsed", "updated_parsed"):
        t = getattr(entry, attr, None)
        if t:
            return datetime(*t[:6], tzinfo=timezone.utc).date().isoformat()
    return None
