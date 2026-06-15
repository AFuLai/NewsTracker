"""L4 — page-structure classification for source auto-probe (WP4).

Given the first chunk of a page's text + a sample of its links, ask gemma what
kind of page it is and the best fetch method. Returns a dict; on any failure
returns a low-confidence 'unknown' so the probe falls through to its next step.
"""
from __future__ import annotations

import json

from . import _prompt, _strip_code_fence, call

VALID_TYPES = {"listing", "article", "js_shell", "error", "unknown"}
VALID_METHODS = {"FEED", "LISTING", "SEARCH", "API", "ARCHIVE", "unknown"}


def classify_page(text: str, links: list[str]) -> dict:
    sample_links = "\n".join(links[:25])
    tmpl = _prompt("probe.txt")
    prompt = tmpl.format(body=(text or "")[:3000], links=sample_links)
    try:
        resp = call(prompt, format_json=True, timeout=60.0)
        data = json.loads(_strip_code_fence(resp))
        ptype = str(data.get("page_type", "unknown")).lower()
        method = str(data.get("suggested_method", "unknown")).upper()
        conf = float(data.get("confidence", 0.0))
        return {
            "page_type": ptype if ptype in VALID_TYPES else "unknown",
            "suggested_method": method if method in VALID_METHODS else "unknown",
            "confidence": max(0.0, min(1.0, conf)),
        }
    except Exception:
        return {"page_type": "unknown", "suggested_method": "unknown", "confidence": 0.0}
