"""L2 — article summary + classification (the original summarizer).

The prompt asks for Traditional Chinese, but a model reading a Korean or
Japanese article answers in the article's language often enough that asking is
not sufficient: the summary is checked here and, when it came back in the wrong
language, handed to L5's zh repair pass. Callers get the same dict either way,
plus `src_lang`/`repaired` for reporting.
"""
from __future__ import annotations

import json
import logging
from typing import Any

from . import _coerce_category, _prompt, _strip_code_fence, bump, call, category_schema
from .lang import needs_zh_repair

_log = logging.getLogger("tracker.llm.summarize")


def summarize_article(*, url: str, raw_text: str, categories: list[str],
                      category_defs: list[Any] | None = None,
                      backend: str = "ollama",
                      repair_language: bool = True) -> dict[str, Any]:
    """Returns {title, summary, category, tags, src_lang, repaired}. Safe
    defaults on parse error.

    category_defs: optional objects with .name/.description; sent to the prompt
    for disambiguation. backend: "ollama" | "gemini" (gemini falls back to ollama).
    repair_language: translate the summary into Chinese when the model answered
    in the source language (one extra model call, only for affected articles)."""
    tmpl = _prompt("summary.txt")
    if category_defs:
        cat_block = "\n".join(f"- {c.name}：{c.description}" for c in category_defs)
    else:
        cat_block = " / ".join(categories)
    prompt = tmpl.format(url=url, category_defs=cat_block, body=raw_text[:6000])
    # WP1: the enum is built from THIS tracker's categories, so the model cannot
    # answer with a category that does not exist here.
    response = call(prompt, backend=backend, schema=category_schema(categories))
    try:
        data = json.loads(_strip_code_fence(response))
    except (json.JSONDecodeError, ValueError):
        # Kept as a fuse (a schema-constrained decode cannot land here) and
        # counted, so a silent regression shows up in the run report rather
        # than as 400 characters of raw article text published as a summary.
        bump("parse_fallback")
        _log.warning("summary did not parse as JSON (%s) — degraded fallback", url)
        return {"title": "", "summary": response[:400], "category": "uncategorized",
                "tags": [], "src_lang": "unknown", "repaired": False}
    result = {
        "title": (data.get("title") or "").strip(),
        "summary": (data.get("summary") or "").strip(),
        "category": _coerce_category(data.get("category") or "", categories),
        "tags": [t.strip() for t in (data.get("tags") or []) if t and t.strip()],
        "src_lang": "zh",
        "repaired": False,
    }
    # Tags are checked too: they surface as chips on the site, and a Chinese
    # summary can otherwise hide a set of Korean tags from the joint check.
    foreign = needs_zh_repair(result["title"], result["summary"], result["tags"])
    result["src_lang"] = foreign or "zh"
    if foreign and repair_language:
        _log.info("summary came back in %s (%s) — repairing to zh", foreign, url)
        from .translate import translate_to_chinese
        fixed = translate_to_chinese(title=result["title"], summary=result["summary"],
                                     tags=result["tags"], backend=backend,
                                     src_lang=foreign)
        # Keep the untranslated text if the repair failed: a Korean summary is
        # poor, an empty one is worse (the row would fail review and vanish).
        if fixed["summary"]:
            result["title"] = fixed["title"] or result["title"]
            result["summary"] = fixed["summary"]
            result["tags"] = fixed["tags"] or result["tags"]
            result["repaired"] = True
    return result
