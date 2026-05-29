"""curl_cffi-based fetcher for Cloudflare-protected sites."""
from __future__ import annotations


def fetch(url: str, *, timeout: float = 20.0) -> str:
    try:
        from curl_cffi import requests
    except ImportError:
        return ""
    try:
        r = requests.get(url, impersonate="chrome120", timeout=timeout)
        r.raise_for_status()
        return r.text
    except Exception:
        return ""
