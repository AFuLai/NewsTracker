"""curl_cffi-based fetcher for Cloudflare-protected sites.

curl_cffi wraps libcurl via cffi; multiple concurrent calls from a
ThreadPoolExecutor have been observed to trigger `free(): invalid size`
on glibc allocators. We serialize all calls behind a module-level lock —
the slowdown is acceptable since stealth is the fallback path.
"""
from __future__ import annotations

import threading

_LOCK = threading.Lock()


def fetch(url: str, *, timeout: float = 20.0) -> str:
    try:
        from curl_cffi import requests
    except ImportError:
        return ""
    with _LOCK:
        try:
            r = requests.get(url, impersonate="chrome120", timeout=timeout)
            r.raise_for_status()
            return r.text
        except Exception:
            return ""
