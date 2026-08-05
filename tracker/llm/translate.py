"""L5 — translation between the site's two published languages and any source.

The site publishes every article twice: Traditional Chinese (`title`/`summary`)
and English (`title_en`/`summary_en`). Two directions live here:

  translate_article()    — <any language> → English  (the en mirror)
  translate_to_chinese() — <any language> → zh-Hant  (repairs an L2 summary that
                           came back in the source language, e.g. Korean)

We translate FROM the existing summary (not the raw source) because raw_text is
purged for most older rows, and the summary is already a clean, deduplicated,
on-topic digest. One model call per article returns title/summary/tags together.

Both directions *verify* their own output with tracker.llm.lang and retry once
with a sharper instruction when the model answered in the wrong language — the
failure mode that shipped raw Korean into both columns for months. If the retry
also fails we return empty fields: the caller then leaves the row alone, which
is recoverable on a later run, rather than storing text no reader can use.
"""
from __future__ import annotations

import json
import logging
from typing import Any

from . import _prompt, _strip_code_fence, call
from .lang import needs_en_repair, needs_zh_repair, source_lang

_log = logging.getLogger("tracker.llm.translate")

# detect() tags → the name we put in the prompt, per prompt language.
_LANG_EN = {
    "zh": "Traditional Chinese", "ja": "Japanese", "ko": "Korean",
    "ru": "Russian", "el": "Greek", "ar": "Arabic", "he": "Hebrew",
    "th": "Thai", "hi": "Hindi",
    "latin": "a Latin-script language (English, German, French, ...)",
    "unknown": "an unidentified language",
}
_LANG_ZH = {
    "zh": "中文", "ja": "日文", "ko": "韓文", "ru": "俄文", "el": "希臘文",
    "ar": "阿拉伯文", "he": "希伯來文", "th": "泰文", "hi": "印地文",
    "latin": "拉丁字母語言（英文／德文／法文等）", "unknown": "未知語言",
}

_RETRY_EN = ("\n\nIMPORTANT: your previous answer was still in the source "
             "language. Answer again, entirely in English.")
_RETRY_ZH = "\n\n注意：上一次的回覆仍然是原文語言。請重新回答，全部使用繁體中文。"


def _ask_json(prompt: str, backend: str) -> dict[str, Any] | None:
    """One model call returning the parsed JSON object, or None if unparseable."""
    response = call(prompt, format_json=True, backend=backend)
    try:
        data = json.loads(_strip_code_fence(response))
    except (json.JSONDecodeError, ValueError):
        return None
    return data if isinstance(data, dict) else None


def _fields(data: dict[str, Any]) -> tuple[str, str, list[str]]:
    """(title, summary, tags) out of a model JSON reply; tags may arrive as a
    comma-joined string instead of a list."""
    raw_tags = data.get("tags") or []
    if isinstance(raw_tags, str):
        raw_tags = [t.strip() for t in raw_tags.split(",")]
    return ((data.get("title") or "").strip(),
            (data.get("summary") or "").strip(),
            [str(t).strip() for t in raw_tags if t and str(t).strip()])


def _translate(*, prompt_file: str, lang_names: dict[str, str], retry_note: str,
               verify, title: str, summary: str, tags: list[str] | None,
               backend: str, src_lang: str | None) -> tuple[str, str, list[str]]:
    """Shared driver for both directions: format the prompt, call, verify the
    output language, retry once, give up with empty fields."""
    tags = [t for t in (tags or []) if t and t.strip()]
    src = src_lang or source_lang(title or "", summary or "", tags)
    prompt = _prompt(prompt_file).format(
        src_lang=lang_names.get(src, lang_names["unknown"]),
        title=title or "", summary=summary or "",
        tags=", ".join(tags) if tags else "(none)")
    for attempt in (1, 2):
        data = _ask_json(prompt if attempt == 1 else prompt + retry_note, backend)
        if data is None:
            return "", "", []
        out_title, out_summary, out_tags = _fields(data)
        # Title and summary only: one stubborn tag is not worth discarding an
        # otherwise-good translation. Tags are checked by the callers (L2 and
        # `tracker fix-lang`), which respond by re-translating rather than by
        # throwing the result away.
        wrong = verify(out_title, out_summary)
        if not wrong:
            return out_title, out_summary, out_tags
        _log.warning("translate %s: output still in %s (attempt %d/2)",
                     prompt_file, wrong, attempt)
    return "", "", []


def translate_article(*, title: str, summary: str,
                      tags: list[str] | None = None,
                      backend: str = "ollama",
                      src_lang: str | None = None) -> dict[str, Any]:
    """<any language> → English. Returns {title_en, summary_en, tags_en};
    empty strings on parse failure or when the model would not leave the source
    language (caller then skips the update and the UI falls back to the zh
    fields). backend: "ollama" | "gemini" (gemini falls back to ollama)."""
    t, s, tg = _translate(prompt_file="translate.txt", lang_names=_LANG_EN,
                          retry_note=_RETRY_EN, verify=needs_en_repair,
                          title=title, summary=summary, tags=tags,
                          backend=backend, src_lang=src_lang)
    return {"title_en": t, "summary_en": s, "tags_en": tg}


def translate_to_chinese(*, title: str, summary: str,
                         tags: list[str] | None = None,
                         backend: str = "ollama",
                         src_lang: str | None = None) -> dict[str, Any]:
    """<any language> → Traditional Chinese. Returns {title, summary, tags};
    empty strings when the model would not produce Chinese, so the caller can
    keep the original text rather than store a half-translated mess."""
    t, s, tg = _translate(prompt_file="to_zh.txt", lang_names=_LANG_ZH,
                          retry_note=_RETRY_ZH, verify=needs_zh_repair,
                          title=title, summary=summary, tags=tags,
                          backend=backend, src_lang=src_lang)
    return {"title": t, "summary": s, "tags": tg}
