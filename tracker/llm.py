"""Ollama HTTP client (gemma4:e4b) — no external API."""
from __future__ import annotations

import json
import re
from importlib import resources
from typing import Any

import httpx

from . import OLLAMA_MODEL, OLLAMA_URL


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
    # Match ```lang ... ``` (closed) or trailing ```lang at the start with no closer.
    m = re.search(r"```\w*\s*\n(.+?)```", s, re.S)
    if m:
        return m.group(1).strip()
    # Strip a leftover opening fence even without closer.
    return re.sub(r"^\s*```\w*\s*\n?", "", s).strip()


def summarize_article(*, url: str, raw_text: str, categories: list[str]) -> dict[str, Any]:
    """Returns {title, summary, category, tags}. Falls back to safe defaults on parse error."""
    tmpl = _prompt("summary.txt")
    prompt = tmpl.format(
        url=url,
        categories=" / ".join(categories),
        body=raw_text[:6000],
    )
    response = call(prompt, format_json=True)
    try:
        data = json.loads(_strip_code_fence(response))
    except (json.JSONDecodeError, ValueError):
        return {"title": "", "summary": response[:400], "category": "uncategorized", "tags": []}
    return {
        "title": (data.get("title") or "").strip(),
        "summary": (data.get("summary") or "").strip(),
        "category": (data.get("category") or "uncategorized").strip(),
        "tags": [t.strip() for t in (data.get("tags") or []) if t and t.strip()],
    }


def render_release_notes(*, version: str, git_log: str) -> str:
    """Produce an HTML <section> for ChangeLog.html."""
    tmpl = _prompt("changelog.txt")
    prompt = tmpl.format(version=version, git_log=git_log[:8000])
    response = call(prompt)
    # Expect raw HTML; trim any code fences just in case.
    return _strip_code_fence(response).strip()


def self_test() -> str:
    """Hit ollama with a trivial prompt; raises on connection failure."""
    return call("回覆「OK」", timeout=30.0)
