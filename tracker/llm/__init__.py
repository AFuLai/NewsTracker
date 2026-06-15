"""Ollama interaction layers (gemma4:e4b, localhost only — no external API).

Four roles:
  L1 gate.py      — relevance gate (batch pre-filter, drops obvious noise)
  L2 summarize.py — article summary + classification (the original summarizer)
  L3 review.py    — deterministic quality self-review (anti-hallucination)
  L4 probe.py     — page-structure classification for source auto-probe (WP4)

This package replaces the old single-file tracker/llm.py. Core HTTP helpers
(call/self_test/_strip_code_fence/_coerce_category) live here so submodules and
external callers (`from .llm import ...`) keep working unchanged.
"""
from __future__ import annotations

import re
from importlib import resources
from typing import Any

import httpx

from .. import OLLAMA_MODEL, OLLAMA_URL


def _prompt(name: str) -> str:
    return resources.files("tracker.prompts").joinpath(name).read_text(encoding="utf-8")


def call(prompt: str, *, model: str = OLLAMA_MODEL, timeout: float = 120.0,
         system: str | None = None, format_json: bool = False) -> str:
    payload: dict[str, Any] = {
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"temperature": 0.2, "num_ctx": 8192},
    }
    if system:
        payload["system"] = system
    if format_json:
        payload["format"] = "json"
    r = httpx.post(f"{OLLAMA_URL}/api/generate", json=payload, timeout=timeout)
    r.raise_for_status()
    return r.json().get("response", "")


def _strip_code_fence(s: str) -> str:
    m = re.search(r"```\w*\s*\n(.+?)```", s, re.S)
    if m:
        return m.group(1).strip()
    return re.sub(r"^\s*```\w*\s*\n?", "", s).strip()


def _coerce_category(raw: str, allowed: list[str]) -> str:
    """Coerce model output to a category in the allowed list.
    1. exact match → keep; 2. substring either way → allowed; 3. fallback uncategorized."""
    raw = (raw or "").strip()
    if not raw or not allowed:
        return "uncategorized"
    if raw in allowed:
        return raw
    for c in allowed:
        if c in raw or raw in c:
            return c
    return "uncategorized"


def self_test() -> str:
    """Hit ollama with a trivial prompt; raises on connection failure."""
    return call("回覆「OK」", timeout=30.0)


def render_release_notes(*, version: str, git_log: str) -> str:
    """Produce an HTML <section> for ChangeLog.html (used by changelog.py)."""
    tmpl = _prompt("changelog.txt")
    prompt = tmpl.format(version=version, git_log=git_log[:8000])
    return _strip_code_fence(call(prompt)).strip()


# Re-export L2 so `from .llm import summarize_article` keeps working.
from .summarize import summarize_article  # noqa: E402

__all__ = [
    "call", "self_test", "render_release_notes", "summarize_article",
    "_coerce_category", "_strip_code_fence", "_prompt",
]
