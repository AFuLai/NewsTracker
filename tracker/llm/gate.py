"""L1 — relevance gate. Batched pre-filter that drops obvious noise (footer
pages, ads, unrelated event notices) before the expensive body-fetch +
summarize. Deliberately LENIENT: when in doubt, keep. Any failure (parse error,
ollama hiccup) falls back to keeping everything — better to over-fetch than to
silently drop real news.
"""
from __future__ import annotations

import json

from . import GATE_SCHEMA, _prompt, _strip_code_fence, bump, call

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
        # WP1: the schema pins {results:[{i:int, keep:bool}]}, so the bare-list
        # and missing-`keep` shapes below are now only reachable on the Gemini
        # backend. They stay because fail-open is this layer's whole philosophy.
        resp = call(prompt, timeout=60.0, schema=GATE_SCHEMA)
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
        # Fail-open: keep everything. Counted so a gate that has quietly stopped
        # gating — and is therefore passing every candidate through to the
        # expensive summarize phase — is visible in the run report.
        bump("parse_fallback")
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
