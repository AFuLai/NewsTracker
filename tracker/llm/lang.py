"""L6 — script/language detection for the two-language promise (zh-Hant + en).

Every published article is supposed to exist twice: Traditional Chinese in
`title`/`summary` and English in `title_en`/`summary_en`. Sources written in a
*third* language broke that promise silently. gemma answers in whatever language
the article body is in, no matter what the prompt asks for, so Boannews (韓國)
and NISC (日本) items were stored as raw Korean/Japanese in the zh column — and
then the L5 translator, whose prompt claimed its input was Chinese, happily
echoed the Korean back into the English column too.

The fix is not a better prompt alone (gemma ignores it often enough to matter):
it is to *check* the produced text and repair it when the check fails. These
helpers are the check. They are pure regex over Unicode blocks — no model call,
no network, no language-detection dependency — because we only need to separate
writing systems, not to name the exact language.

The one case script detection genuinely cannot see is a Latin-script European
language (German vs English). `detect()` reports both as "latin"; callers that
care (the zh column) treat any Latin-dominant text as "not Chinese, translate
it", which is the right action for German and English alike.
"""
from __future__ import annotations

import re

# Unicode ranges, one class per writing system we can meet in the wild.
_RANGES = {
    "han": r"㐀-䶿一-鿿豈-﫿",
    "kana": r"぀-ゟ゠-ヿㇰ-ㇿ",
    "hangul": r"ᄀ-ᇿ㄰-㆏가-힯",
    "cyrillic": r"Ѐ-ԯ",
    "greek": r"Ͱ-Ͽ",
    "arabic": r"؀-ۿݐ-ݿﭐ-﷿",
    "hebrew": r"֐-׿",
    "thai": r"฀-๿",
    "devanagari": r"ऀ-ॿ",
    "latin": r"A-Za-zÀ-ɏ",
}
_PATTERNS = {name: re.compile(f"[{rng}]") for name, rng in _RANGES.items()}

# Script → language tag reported by detect(). "latin" stays a script name on
# purpose: we cannot tell English from German this way and must not pretend to.
_SCRIPT_LANG = {
    "hangul": "ko", "kana": "ja", "cyrillic": "ru", "greek": "el",
    "arabic": "ar", "hebrew": "he", "thai": "th", "devanagari": "hi",
    "han": "zh", "latin": "latin",
}

# Minimum share of all letters for a script to decide the verdict.
_THRESHOLDS = {
    "cyrillic": 0.20, "greek": 0.20, "arabic": 0.20, "hebrew": 0.20,
    "thai": 0.20, "devanagari": 0.20, "han": 0.15, "latin": 0.30,
}
# Evaluation order for the generic rule. Han comes before latin so a Chinese
# summary quoting English product names still reads as zh; kana/hangul are not
# here — they are decided first, against han (see _cjk below).
_ORDER = ("cyrillic", "greek", "arabic", "hebrew", "thai", "devanagari",
          "han", "latin")

# Kana and hangul share the page with han, so their share of *all* letters is
# the wrong measure: a Chinese summary quoting one カタカナ product name would
# trip a small global threshold. Japanese prose interleaves kana throughout
# (kana is a third or more of its CJK letters) and Korean prose is almost
# entirely hangul, whereas a quoted foreign term is a handful of characters in
# a body of han — so measure each against the CJK letters only.
_KANA_OF_CJK = 0.25
_HANGUL_OF_CJK = 0.30
# ...but only once CJK carries the text at all. In a Latin-script summary that
# glosses two Korean terms — "personal seals (인감도장)" — there is no han to
# measure against, so hangul would be 100% of the CJK letters and an English
# summary would read as Korean. Below this share the text is not a CJK text and
# the generic rule (Latin wins) decides.
_CJK_OF_ALL = 0.20

# Below this many letters there is nothing to judge (an all-CVE title, "N/A").
_MIN_LETTERS = 8


def counts(text: str) -> dict[str, int]:
    """Per-script letter counts. Digits, spaces and punctuation are ignored."""
    text = text or ""
    return {name: len(pat.findall(text)) for name, pat in _PATTERNS.items()}


def _cjk(c: dict[str, int], total: int) -> str | None:
    """ko/ja when kana or hangul carry enough of the CJK letters, else None."""
    cjk = c["han"] + c["kana"] + c["hangul"]
    if not cjk or cjk / total < _CJK_OF_ALL:
        return None
    if c["hangul"] / cjk >= _HANGUL_OF_CJK:
        return "ko"
    if c["kana"] / cjk >= _KANA_OF_CJK:
        return "ja"
    return None


def detect(text: str) -> str:
    """Language/script tag for `text`: zh, ja, ko, ru, el, ar, he, th, hi,
    "latin" (Latin script — English or a European language), or "unknown"
    when there is too little to judge."""
    c = counts(text)
    total = sum(c.values())
    if total < _MIN_LETTERS:
        return "unknown"
    cjk = _cjk(c, total)
    if cjk:
        return cjk
    for name in _ORDER:
        if c[name] / total >= _THRESHOLDS[name]:
            return _SCRIPT_LANG[name]
    return "unknown"


def is_chinese(text: str) -> bool:
    """True when the text is Traditional/Simplified Chinese (our zh column's
    contract). "unknown" counts as acceptable — too short to condemn."""
    return detect(text) in ("zh", "unknown")


def is_english(text: str) -> bool:
    """True when the text is written in the Latin script (our en column's
    contract; we cannot verify it is English rather than German, but we can
    and do reject Han/kana/hangul/Cyrillic leaking through)."""
    return detect(text) in ("latin", "unknown")


# Scripts that cannot carry a Chinese or English text at all. Seeing one means
# *that field* is foreign whatever its neighbours look like — unlike Latin,
# which is ambiguous per field (a perfectly Chinese headline can be almost all
# product names: 「Google 發布 Android 17 QPR1 Beta 5，Pixel 10 Pro Fold 預覽」).
UNAMBIGUOUS = ("ja", "ko", "ru", "el", "ar", "he", "th", "hi")


# A tag list is condemned only when this many of its tags carry a foreign
# script AND they are this share of the list. One Korean company name among six
# tags is a proper noun — the same thing as keeping "Splunk" in a Chinese tag
# list — while a list that is half hangul was simply never translated.
_TAGS_MIN_FOREIGN = 2
_TAGS_MIN_SHARE = 1 / 3


def tags_lang(tags: list[str] | None) -> str | None:
    """Foreign language of a tag *list*, or None. Judged per tag and by
    majority, because tags are too short for detect() to read one at a time and
    proper nouns legitimately survive translation."""
    tags = [t for t in (tags or []) if t and t.strip()]
    if not tags:
        return None
    seen: dict[str, int] = {}
    for tag in tags:
        c = counts(tag)
        for name in ("hangul", "kana", "cyrillic", "greek", "arabic", "hebrew",
                     "thai", "devanagari"):
            if c[name]:
                lang = _SCRIPT_LANG[name]
                seen[lang] = seen.get(lang, 0) + 1
                break
    if not seen:
        return None
    lang, n = max(seen.items(), key=lambda kv: kv[1])
    if n >= _TAGS_MIN_FOREIGN and n / len(tags) >= _TAGS_MIN_SHARE:
        return lang
    return None


def _verdict(title: str, summary: str, tags: list[str] | None,
             accept: tuple[str, ...]) -> str | None:
    """Language tag of the offending text, or None when the record is fine.

    Three tests, because the failure modes need different evidence:
      1. a title or summary in an unambiguous foreign script is condemned on
         its own — that is how a Korean title behind a Chinese summary is found;
      2. tags are judged as a set (see tags_lang);
      3. "still in the original Latin-script language" is judged over title and
         summary together, where the summary outweighs a headline that is all
         product names.
    """
    for part in (title, summary):
        lang = detect(part or "")
        if lang in UNAMBIGUOUS and lang not in accept:
            return lang
    lang = tags_lang(tags)
    if lang and lang not in accept:
        return lang
    lang = detect(" ".join(p for p in (title, summary) if p))
    return None if lang in accept or lang == "unknown" else lang


def source_lang(title: str = "", summary: str = "",
                tags: list[str] | None = None) -> str:
    """The language a record should be *announced* as to a translation prompt.

    An unambiguously foreign field wins over the joint verdict: a Korean
    headline and Korean tags on an otherwise-Chinese body must be announced as
    Korean, or the repair prompt becomes "translate this Chinese into Chinese"
    and the model has no reason to touch the Korean."""
    for part in (title, summary):
        lang = detect(part or "")
        if lang in UNAMBIGUOUS:
            return lang
    return tags_lang(tags) or detect(" ".join(p for p in (title, summary) if p))


def needs_zh_repair(title: str = "", summary: str = "",
                    tags: list[str] | None = None) -> str | None:
    """Language tag of the offending text when a supposedly-Chinese record is
    not Chinese, else None."""
    return _verdict(title, summary, tags, ("zh",))


def needs_en_repair(title: str = "", summary: str = "",
                    tags: list[str] | None = None) -> str | None:
    """Same, for the supposedly-English columns."""
    return _verdict(title, summary, tags, ("latin",))
