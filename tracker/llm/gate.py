"""L1 — relevance gate. Batched pre-filter that drops obvious noise (footer
pages, ads, unrelated event notices) before the expensive body-fetch +
summarize. Deliberately LENIENT: when in doubt, keep. Any failure (parse error,
ollama hiccup) falls back to keeping everything — better to over-fetch than to
silently drop real news.
"""
from __future__ import annotations

import json

from . import _prompt, _strip_code_fence, call

BATCH = 10


def _gate_batch(topic: str, items: list[dict]) -> list[bool]:
    """items: [{title, snippet}]. Returns parallel keep-flags. All-keep on error."""
    if not items:
        return []
    tmpl = _prompt("gate.txt")
    lines = []
    for i, it in enumerate(items):
        title = (it.get("title") or "").strip()
        snip = (it.get("snippet") or "")[:160].strip()
        lines.append(f"{i}. {title}\n   {snip}")
    prompt = tmpl.format(topic=topic, items="\n".join(lines))
    try:
        resp = call(prompt, format_json=True, timeout=60.0)
        data = json.loads(_strip_code_fence(resp))
        # accept {"results":[...]} or a bare list
        arr = data["results"] if isinstance(data, dict) and "results" in data else data
        keep = [True] * len(items)
        for entry in arr:
            i = int(entry.get("i"))
            if 0 <= i < len(items):
                keep[i] = bool(entry.get("keep", True))
        return keep
    except Exception:
        return [True] * len(items)


def run_gate(rows, tracker: str, info, log=None):
    """Orchestrator hook. rows: sqlite Rows / dicts with id/title/raw_text.
    Returns (kept_ids, gated) where gated = [(id, reason), ...]."""
    topic = f"{info.title}（分類：{', '.join(info.categories)}）"
    kept_ids: list[int] = []
    gated: list[tuple[int, str]] = []
    for start in range(0, len(rows), BATCH):
        batch = rows[start:start + BATCH]
        items = [{"title": r["title"], "snippet": r["raw_text"]} for r in batch]
        keep = _gate_batch(topic, items)
        for r, k in zip(batch, keep):
            if k:
                kept_ids.append(r["id"])
            else:
                gated.append((r["id"], "off-topic / noise per L1 gate"))
    if log:
        log.info("[%s] gate kept %d, dropped %d", tracker, len(kept_ids), len(gated))
    return kept_ids, gated
