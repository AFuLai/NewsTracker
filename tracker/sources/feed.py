"""Parallel RSS/Atom fetcher."""
from __future__ import annotations

import asyncio
from dataclasses import dataclass
from datetime import date as _date
from datetime import datetime, timezone

import aiohttp
import feedparser


@dataclass
class FeedItem:
    source: str
    url: str
    title: str
    published: str | None
    summary: str | None


async def _fetch_one(session: aiohttp.ClientSession, source: str, feed_url: str,
                     timeout: float = 15.0) -> tuple[str, str | None, list[FeedItem]]:
    try:
        async with session.get(feed_url, timeout=aiohttp.ClientTimeout(total=timeout)) as resp:
            resp.raise_for_status()
            body = await resp.read()
    except Exception as exc:
        return source, str(exc), []
    parsed = feedparser.parse(body)
    items: list[FeedItem] = []
    for e in parsed.entries:
        published = None
        if getattr(e, "published_parsed", None):
            published = datetime(*e.published_parsed[:6], tzinfo=timezone.utc).date().isoformat()
        elif getattr(e, "updated_parsed", None):
            published = datetime(*e.updated_parsed[:6], tzinfo=timezone.utc).date().isoformat()
        items.append(FeedItem(
            source=source,
            url=getattr(e, "link", ""),
            title=getattr(e, "title", "").strip(),
            published=published,
            summary=getattr(e, "summary", None),
        ))
    return source, None, items


def _within(d: str | None, since: _date, until: _date) -> bool:
    if not d:
        return True
    try:
        dd = _date.fromisoformat(d)
    except ValueError:
        return True
    return since <= dd <= until


async def fetch_all(feeds: list[tuple[str, str]], *, since: _date, until: _date,
                    concurrency: int = 8) -> dict[str, list[FeedItem]]:
    """feeds = [(source_name, feed_url), ...]"""
    sem = asyncio.Semaphore(concurrency)
    async with aiohttp.ClientSession(headers={"User-Agent": "tracker/0.x (+wsl)"}) as session:
        async def bound(src: str, url: str):
            async with sem:
                return await _fetch_one(session, src, url)
        results = await asyncio.gather(*(bound(s, u) for s, u in feeds))
    out: dict[str, list[FeedItem]] = {}
    for source, err, items in results:
        if err:
            out[source] = []
            continue
        out[source] = [i for i in items if i.url and _within(i.published, since, until)]
    return out
