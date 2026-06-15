"""L2 — article summary + classification (the original summarizer)."""
from __future__ import annotations

import json
from typing import Any

from . import _coerce_category, _prompt, _strip_code_fence, call


def summarize_article(*, url: str, raw_text: str, categories: list[str],
                      category_defs: list[Any] | None = None) -> dict[str, Any]:
    """Returns {title, summary, category, tags}. Safe defaults on parse error.

    category_defs: optional objects with .name/.description; sent to the prompt
    for disambiguation."""
    tmpl = _prompt("summary.txt")
    if category_defs:
        cat_block = "\n".join(f"- {c.name}：{c.description}" for c in category_defs)
    else:
        cat_block = " / ".join(categories)
    prompt = tmpl.format(url=url, category_defs=cat_block, body=raw_text[:6000])
    response = call(prompt, format_json=True)
    try:
        data = json.loads(_strip_code_fence(response))
    except (json.JSONDecodeError, ValueError):
        return {"title": "", "summary": response[:400], "category": "uncategorized", "tags": []}
    return {
        "title": (data.get("title") or "").strip(),
        "summary": (data.get("summary") or "").strip(),
        "category": _coerce_category(data.get("category") or "", categories),
        "tags": [t.strip() for t in (data.get("tags") or []) if t and t.strip()],
    }
