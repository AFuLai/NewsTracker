"""BROWSER fetcher — render a JS-only listing page via a debug Chrome (CDP).

Opt-in: only profiles whose method is BROWSER use this. The CDP base URL of a
running debug Chrome (chrome --remote-debugging-port=9222) is supplied by the
orchestrator in profile.extra['cdp_base'] (resolved by preflight.ensure_browser).
If Chrome/CDP is unavailable or websocket-client is missing, the fetch returns a
clean error and the pipeline carries on with the other sources.

For sites that block httpx/curl_cffi AND defeat Wayback (some ENISA/BSI/CEN
pages), a real rendered DOM is the only way to see the article links.
"""
from __future__ import annotations

import json
import time

import httpx

from . import Candidate, DateWindow, FetchResult, Profile, register
from ..probe import _article_links


@register
class BrowserFetcher:
    method = "BROWSER"

    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        cdp = profile.extra.get("cdp_base")
        if not cdp:
            return FetchResult(error="no debug Chrome (cdp_base) available")
        target = profile.url or f"https://{profile.domain}"
        try:
            html = _render(cdp, target)
        except Exception as exc:
            return FetchResult(error=f"browser render failed: {exc}")
        if not html:
            return FetchResult(error="browser returned empty DOM")
        filt = () if profile.accept_all else tuple(profile.extra.get("filter_keywords", ()))
        links = _article_links(target, html)
        items = []
        for url in links:
            if filt and not any(k.lower() in url.lower() for k in filt):
                continue
            slug = url.rstrip("/").rsplit("/", 1)[-1].replace("-", " ")
            items.append(Candidate(url=url, title=slug or url))
        return FetchResult(items=items)


def _render(cdp_base: str, url: str, *, timeout: float = 25.0) -> str:
    """Open a tab in the debug Chrome, navigate, wait for load, return outerHTML."""
    import websocket  # websocket-client; imported lazily so it's optional

    # open a fresh tab (Chrome accepts PUT or GET for /json/new)
    try:
        r = httpx.put(f"{cdp_base}/json/new?{url}", timeout=8)
        if r.status_code >= 400:
            r = httpx.get(f"{cdp_base}/json/new?{url}", timeout=8)
    except Exception:
        r = httpx.get(f"{cdp_base}/json/new?{url}", timeout=8)
    tab = r.json()
    ws_url = tab["webSocketDebuggerUrl"]
    tab_id = tab["id"]

    ws = websocket.create_connection(ws_url, timeout=timeout)
    _id = [0]

    def send(method, params=None):
        _id[0] += 1
        ws.send(json.dumps({"id": _id[0], "method": method, "params": params or {}}))
        return _id[0]

    try:
        send("Page.enable")
        send("Page.navigate", {"url": url})
        deadline = time.time() + timeout
        # wait for the load event
        while time.time() < deadline:
            ws.settimeout(max(0.5, deadline - time.time()))
            try:
                msg = json.loads(ws.recv())
            except Exception:
                break
            if msg.get("method") == "Page.loadEventFired":
                break
        time.sleep(1.0)  # let late JS settle
        ev = send("Runtime.evaluate",
                  {"expression": "document.documentElement.outerHTML",
                   "returnByValue": True})
        html = ""
        while time.time() < deadline:
            ws.settimeout(max(0.5, deadline - time.time()))
            try:
                msg = json.loads(ws.recv())
            except Exception:
                break
            if msg.get("id") == ev:
                html = (msg.get("result", {}).get("result", {}) or {}).get("value", "") or ""
                break
        return html
    finally:
        try:
            ws.close()
        except Exception:
            pass
        try:
            httpx.get(f"{cdp_base}/json/close/{tab_id}", timeout=5)
        except Exception:
            pass
