"""Ollama interaction layers (gemma4:e4b, localhost only — no external API).

Six roles:
  L1 gate.py      — relevance gate (batch pre-filter, drops obvious noise)
  L2 summarize.py — article summary + classification (the original summarizer)
  L3 review.py    — deterministic quality self-review (anti-hallucination)
  L4 probe.py     — page-structure classification for source auto-probe (WP4)
  L5 translate.py — any language → English mirror, and → zh-Hant repair
  L6 lang.py      — script detection; the check that makes L2/L5 verifiable

This package replaces the old single-file tracker/llm.py. Core HTTP helpers
(call/self_test/_strip_code_fence/_coerce_category) live here so submodules and
external callers (`from .llm import ...`) keep working unchanged.
"""
from __future__ import annotations

import logging
import os
import re
from importlib import resources
from typing import Any

import httpx

from .. import OLLAMA_MODEL, OLLAMA_URL

_log = logging.getLogger("tracker.llm")

# Default Gemini UI model (Flash is more capable than Flash-Lite for our prompts).
GEMINI_MODEL = os.environ.get("TRACKER_GEMINI_MODEL", "Flash")
# Per-call Gemini response timeout (seconds). Kept short so a missing-marker reply
# falls back to Ollama quickly instead of stalling the run; Flash answers in ~10-30s.
GEMINI_TIMEOUT = float(os.environ.get("TRACKER_GEMINI_TIMEOUT", "45"))

# Per-process backend telemetry; the orchestrator reads this for the run report.
STATS = {"gemini_ok": 0, "gemini_fallback": 0}

# Markers wrapped around the Gemini prompt so we can detect a complete reply.
_GEM_START, _GEM_END = "⟦TRK⟧", "⟦/TRK⟧"


def _prompt(name: str) -> str:
    return resources.files("tracker.prompts").joinpath(name).read_text(encoding="utf-8")


def _call_ollama(prompt: str, *, model: str = OLLAMA_MODEL, timeout: float = 120.0,
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


def _call_gemini(prompt: str, *, timeout: float = 120.0, format_json: bool = False) -> str:
    """Ask Gemini via Chrome. Wraps the prompt with completion markers (+ a JSON
    hint when needed) and returns the text between them. Raises on any failure."""
    from . import gemini
    rule = (f"\n\n【輸出規則】請在回覆最前面單獨輸出 {_GEM_START}，最後面單獨輸出 {_GEM_END}，"
            f"中間放實際回覆內容，不要其他多餘文字。")
    if format_json:
        rule += f" {_GEM_START} 與 {_GEM_END} 之間必須是合法 JSON。"
    # Use the (shorter) Gemini-specific timeout so marker failures fall back fast.
    return gemini.ask(prompt + rule, timeout_ms=int(GEMINI_TIMEOUT * 1000),
                      model=GEMINI_MODEL, start_marker=_GEM_START, end_marker=_GEM_END)


def call(prompt: str, *, model: str = OLLAMA_MODEL, timeout: float = 120.0,
         system: str | None = None, format_json: bool = False,
         backend: str = "ollama") -> str:
    """LLM call with selectable backend. `backend="gemini"` drives Chrome/Gemini
    and, on ANY failure, transparently falls back to local Ollama (per-call)."""
    if backend == "gemini":
        try:
            out = _call_gemini(prompt, timeout=timeout, format_json=format_json)
            STATS["gemini_ok"] += 1
            return out
        except Exception as exc:
            STATS["gemini_fallback"] += 1
            _log.warning("Gemini failed (%s) — falling back to Ollama", exc)
            # fall through to Ollama with the original (unmarked) prompt
    return _call_ollama(prompt, model=model, timeout=timeout,
                        system=system, format_json=format_json)


def resolve_default_backend() -> str:
    """`gemini` if a debug Chrome is reachable, else `ollama`."""
    try:
        from . import gemini
        return "gemini" if gemini.available() else "ollama"
    except Exception:
        return "ollama"


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
