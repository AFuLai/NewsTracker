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
import threading
from importlib import resources
from typing import Any

import httpx

from .. import OLLAMA_MODEL

_log = logging.getLogger("tracker.llm")

# Default Gemini UI model (Flash is more capable than Flash-Lite for our prompts).
GEMINI_MODEL = os.environ.get("TRACKER_GEMINI_MODEL", "Flash")
# Per-call Gemini response timeout (seconds). Kept short so a missing-marker reply
# falls back to Ollama quickly instead of stalling the run; Flash answers in ~10-30s.
GEMINI_TIMEOUT = float(os.environ.get("TRACKER_GEMINI_TIMEOUT", "45"))

# Per-process backend telemetry; the orchestrator reads this for the run report.
#   schema_miss    — WP1: the model returned a value outside the enum the schema
#                    pinned and _coerce_category had to rescue it. Under a
#                    grammar-constrained decode this cannot happen, so a
#                    non-zero count means the schema did not reach the model
#                    (gemini path, or an ollama too old to honour `format`).
#   parse_fallback — the reply would not parse as JSON at all and a caller took
#                    its degraded path (truncated raw text, all-keep gate, empty
#                    translation). Expected 0 once schemas are on.
#   endpoint_failover — a request could not be delivered to the selected
#                    ollama endpoint and was retried on the next one
#                    (tracker/ollama_hosts.py). Non-zero means a host went
#                    away mid-run, which is survivable but worth seeing.
STATS = {"gemini_ok": 0, "gemini_fallback": 0, "schema_miss": 0,
         "parse_fallback": 0, "endpoint_failover": 0}

# WP2 put these layers behind a thread pool. `STATS[k] += 1` is a read-modify-
# write and drops increments under contention, which matters precisely because
# schema_miss/parse_fallback are asserted to be *zero*: a lost increment reads
# as a pass.
_stats_lock = threading.Lock()


def bump(name: str, n: int = 1) -> None:
    """Increment a STATS counter atomically."""
    with _stats_lock:
        STATS[name] = STATS.get(name, 0) + n


# Markers wrapped around the Gemini prompt so we can detect a complete reply.
_GEM_START, _GEM_END = "⟦TRK⟧", "⟦/TRK⟧"


def _prompt(name: str) -> str:
    return resources.files("tracker.prompts").joinpath(name).read_text(encoding="utf-8")


def _call_ollama(prompt: str, *, model: str = OLLAMA_MODEL, timeout: float = 120.0,
                 system: str | None = None, format_json: bool = False,
                 schema: dict[str, Any] | None = None) -> str:
    payload: dict[str, Any] = {
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"temperature": 0.2, "num_ctx": 8192},
    }
    if system:
        payload["system"] = system
    # WP1: ollama turns a JSON-schema `format` into a decoding grammar, so an
    # off-enum category or a missing key becomes unrepresentable rather than
    # something we repair afterwards. A schema supersedes plain `"json"` —
    # sending both is not a thing; the schema already implies JSON.
    if schema is not None:
        payload["format"] = schema
    elif format_json:
        payload["format"] = "json"
    return _post_ollama(payload, timeout)


def _post_ollama(payload: dict[str, Any], timeout: float) -> str:
    """POST to the selected endpoint; on a delivery failure, demote it and
    retry once on the next one.

    Only connection-level failures demote. A 500, or a read timeout, can be
    this prompt rather than this host, and moving a whole run off an
    endpoint because one article upset the model is the wrong trade. One
    retry, not a loop: fail-open means the caller's degraded path is an
    acceptable outcome, and a retry storm across dead hosts is not.
    """
    from .. import ollama_hosts as hosts
    url = hosts.current()
    if url is None:
        raise RuntimeError("no ollama endpoint available")
    try:
        r = httpx.post(f"{url}/api/generate", json=payload, timeout=timeout)
        r.raise_for_status()
        return r.json().get("response", "")
    except (httpx.ConnectError, httpx.ConnectTimeout, httpx.ReadError,
            httpx.RemoteProtocolError) as exc:
        nxt = hosts.demote(url, type(exc).__name__)
        if nxt is None:
            raise
        bump("endpoint_failover")
        r = httpx.post(f"{nxt}/api/generate", json=payload, timeout=timeout)
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
         backend: str = "ollama", schema: dict[str, Any] | None = None) -> str:
    """LLM call with selectable backend. `backend="gemini"` drives Chrome/Gemini
    and, on ANY failure, transparently falls back to local Ollama (per-call).

    schema: a JSON schema constraining the reply (WP1). Honoured on the ollama
    path only — Gemini is driven through a browser UI with no grammar hook, so
    it keeps the marker + "must be valid JSON" prompt hint and the callers'
    coercion path stays live for it. A schema implies format_json."""
    if backend == "gemini":
        try:
            out = _call_gemini(prompt, timeout=timeout,
                               format_json=format_json or schema is not None)
            bump("gemini_ok")
            return out
        except Exception as exc:
            bump("gemini_fallback")
            _log.warning("Gemini failed (%s) — falling back to Ollama", exc)
            # fall through to Ollama with the original (unmarked) prompt
    return _call_ollama(prompt, model=model, timeout=timeout,
                        system=system, format_json=format_json, schema=schema)


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
    1. exact match → keep; 2. substring either way → allowed; 3. fallback uncategorized.

    WP1 demoted this from the primary mechanism to a fuse: the L2 schema pins
    `category` to an enum, so anything reaching branch 2 or 3 means the
    constraint did not apply (Gemini backend, or an ollama that ignored
    `format`). Every such rescue bumps STATS["schema_miss"] so the run report
    shows it instead of the miscategorisation surfacing silently on the site.
    """
    raw = (raw or "").strip()
    if not raw or not allowed:
        bump("schema_miss")
        return "uncategorized"
    if raw in allowed:
        return raw
    # "uncategorized" is itself in the schema's enum: a model that abstains is
    # obeying the constraint, not missing it, and must not be counted as one.
    if raw == "uncategorized":
        return raw
    bump("schema_miss")
    for c in allowed:
        if c in raw or raw in c:
            return c
    return "uncategorized"


def category_schema(categories: list[str]) -> dict[str, Any]:
    """L2's reply schema, with `category` pinned to this tracker's own enum.

    Built per call rather than kept as a constant because every tracker has its
    own CATEGORY table (searchinfo V3), and the whole point is that the enum is
    the tracker's, not a generic one. `uncategorized` stays in the enum: a model
    forced to pick a wrong bucket is worse than one allowed to abstain, and
    downstream already renders that value.
    """
    return {
        "type": "object",
        "properties": {
            "title": {"type": "string"},
            "summary": {"type": "string"},
            "category": {"type": "string",
                         "enum": list(categories) + ["uncategorized"]},
            # Item type is pinned but length is not: capping it here made the
            # model pad with junk tags to reach the minimum.
            "tags": {"type": "array", "items": {"type": "string"}},
        },
        "required": ["title", "summary", "category", "tags"],
    }


#: L5's reply schema (both directions). No enum to pin — the guarantee we want
#: from it is structural (the three keys, right types), while "answered in the
#: right language" stays L6's runtime check. Character-range locking is Phase 2
#: (WP7/GBNF); a JSON schema cannot express it.
TRANSLATE_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "summary": {"type": "string"},
        "tags": {"type": "array", "items": {"type": "string"}},
    },
    "required": ["title", "summary", "tags"],
}

#: L1's reply schema. `i` is the item's index in the batch and `keep` the
#: verdict; making both required is what stops the half-formed
#: `{"results":[{"i":3}]}` replies the gate used to silently read as keep=True.
GATE_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "results": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {"i": {"type": "integer"},
                               "keep": {"type": "boolean"}},
                "required": ["i", "keep"],
            },
        },
    },
    "required": ["results"],
}


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
    "category_schema", "TRANSLATE_SCHEMA", "GATE_SCHEMA", "STATS", "bump",
]
