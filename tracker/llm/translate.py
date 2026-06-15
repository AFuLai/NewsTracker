"""L5 — translate the zh summary/title/tags into English (localhost ollama).

The site is summarized in Traditional Chinese; for non-Chinese readers we mirror
each article into English. We translate FROM the existing zh summary (not the raw
source) because raw_text is purged for most older rows, and the zh summary is
already a clean, deduplicated, on-topic digest. One ollama call per article
returns title/summary/tags together.
"""
from __future__ import annotations

import json
from typing import Any

from . import _prompt, _strip_code_fence, call


def translate_article(*, title: str, summary: str,
                      tags: list[str] | None = None) -> dict[str, Any]:
    """Returns {title_en, summary_en, tags_en}. Empty strings on parse failure
    (caller then skips the update and the UI falls back to the zh fields)."""
    tags = [t for t in (tags or []) if t and t.strip()]
    tmpl = _prompt("translate.txt")
    prompt = tmpl.format(title=title or "", summary=summary or "",
                         tags=", ".join(tags) if tags else "(none)")
    response = call(prompt, format_json=True)
    try:
        data = json.loads(_strip_code_fence(response))
    except (json.JSONDecodeError, ValueError):
        return {"title_en": "", "summary_en": "", "tags_en": []}
    raw_tags = data.get("tags") or []
    if isinstance(raw_tags, str):
        raw_tags = [t.strip() for t in raw_tags.split(",")]
    return {
        "title_en": (data.get("title") or "").strip(),
        "summary_en": (data.get("summary") or "").strip(),
        "tags_en": [t.strip() for t in raw_tags if t and str(t).strip()],
    }
