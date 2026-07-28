"""Article body extraction via trafilatura, with a boilerplate guard.

trafilatura (global config + lxml) is NOT thread-safe; calling it concurrently
from the summarize body-fetch ThreadPoolExecutor corrupts the C heap
(`double free or corruption`). All trafilatura calls are serialized behind one
lock — network I/O stays parallel, only the fast parsing step is serialized.
The lxml fallback below runs under the same lock for the same reason.

Why the guard exists (v2.21 / F1): on some templates trafilatura returns a
*navigation block* instead of the article.  Measured on theregister.com: 10 of
11 sampled articles produced the byte-identical 3,350-char "MOST POPULAR …"
sidebar.  It sails past `MIN_BODY` (600) so nothing downstream noticed, and the
summariser then invented technical detail from a headline list.

The guard is deliberately shape-based rather than site-specific: link/teaser
blocks are made of short headline lines with almost no sentence punctuation,
while prose is not.  See `looks_like_boilerplate` for the exact criteria and
`tests/test_extract_boilerplate.py` for the measured margins.
"""
from __future__ import annotations

import threading

_LOCK = threading.Lock()

# --- boilerplate detection ---------------------------------------------------

_SENT_END = ".!?。！？"

#: Below this many characters we never judge shape — short bodies are noisy and
#: are already handled by `sources.article.MIN_BODY` + the stealth refetch.
BOILERPLATE_MIN_LEN = 600
#: Fraction of characters living in lines that end in sentence punctuation.
#: Prose is dominated by such lines; headline lists are not.
BOILERPLATE_SENT_CHAR_FRAC = 0.35
#: Sentence terminators per 1000 characters.  Headline lists barely have any.
BOILERPLATE_TERM_DENSITY = 5.0

# Accept a fallback candidate only if it is this long, and this large relative
# to the (rejected) primary — keeps a mis-fire from replacing a good body with
# a scrap.
_FALLBACK_MIN_LEN = 400
_FALLBACK_MIN_RATIO = 0.35


def prose_stats(text: str) -> dict[str, float]:
    """Shape metrics used by :func:`looks_like_boilerplate` (exposed for tests)."""
    lines = [ln.strip() for ln in text.split("\n") if ln.strip()]
    if not lines:
        return {"n_chars": 0.0, "term_density": 0.0, "sent_char_frac": 0.0}
    total = sum(len(ln) for ln in lines)
    sent_chars = sum(len(ln) for ln in lines if ln[-1] in _SENT_END)
    terms = sum(text.count(ch) for ch in _SENT_END)
    return {
        "n_chars": float(total),
        "term_density": 1000.0 * terms / total,
        "sent_char_frac": sent_chars / total,
    }


def looks_like_boilerplate(text: str) -> bool:
    """True when *text* has the shape of a nav/teaser block rather than an article.

    Both conditions must hold (the conjunction is what keeps false positives at
    zero on real content):

    * < 35 % of characters sit in lines that end with sentence punctuation, and
    * < 5 sentence terminators per 1000 characters.

    Measured on a 171-page live corpus (36 domains): the 10 broken pages score
    sent_char_frac 0.13 / term_density 3.7; the nearest clean page has
    term_density 8.5, and every clean page with a low sent_char_frac (NVD CVE
    tables, changelog posts) has term_density > 8.  No clean page is flagged.
    """
    if not text:
        return False
    s = prose_stats(text)
    if s["n_chars"] < BOILERPLATE_MIN_LEN:
        return False
    return (s["sent_char_frac"] < BOILERPLATE_SENT_CHAR_FRAC
            and s["term_density"] < BOILERPLATE_TERM_DENSITY)


# --- DOM fallback ------------------------------------------------------------

_DROP_TAGS = ("script", "style", "noscript", "nav", "aside", "header", "footer",
              "form", "iframe", "svg", "button", "select", "template")
_BLOCK_TAGS = frozenset(("p", "h1", "h2", "h3", "h4", "h5", "h6", "li",
                         "blockquote", "pre", "dd", "figcaption"))


def dom_article_text(html: str) -> str:
    """Readability-style extraction: return the text of the best <p>-bearing block.

    Scores every element that (grand)parents real paragraphs, discounts it by
    link density, and renders the winner block by block.  Site-agnostic: it
    finds theregister.com's ``div.bodytext`` for the same reason it finds a
    WordPress ``div.entry-content`` — because that is where the paragraphs are.
    """
    import collections

    try:
        from lxml import html as LH
    except ImportError:  # pragma: no cover - lxml ships with trafilatura
        return ""
    if not html:
        return ""
    try:
        doc = LH.fromstring(html)
    except Exception:
        return ""
    for el in doc.xpath("|".join(f"//{t}" for t in _DROP_TAGS)):
        parent = el.getparent()
        if parent is not None:
            parent.remove(el)

    scores: dict = collections.defaultdict(float)
    for para in doc.iter("p", "pre", "blockquote"):
        txt = " ".join(para.text_content().split())
        if len(txt) < 25:
            continue
        weight = 1.0 + txt.count(",") + txt.count("，") + min(len(txt) / 100.0, 3.0)
        parent = para.getparent()
        if parent is None:
            continue
        scores[parent] += weight
        grand = parent.getparent()
        if grand is not None:
            scores[grand] += weight / 2.0

    best, best_score = None, 0.0
    for el, score in scores.items():
        n_chars = len(" ".join(el.text_content().split()))
        if not n_chars:
            continue
        link_chars = sum(len(" ".join(a.text_content().split())) for a in el.iter("a"))
        score *= max(0.0, 1.0 - link_chars / n_chars)
        if score > best_score:
            best, best_score = el, score
    if best is None:
        return ""

    out: list[str] = []
    for el in best.iter():
        if el.tag in _BLOCK_TAGS:
            txt = " ".join(el.text_content().split())
            if txt and not (out and txt in out[-1]):
                out.append(txt)
    if not out:
        out = [" ".join(best.text_content().split())]
    return "\n".join(out).strip()


def _better_candidate(primary: str, html: str) -> str:
    """Return a replacement for a body judged to be boilerplate, or ``primary``."""
    with _LOCK:
        alt = dom_article_text(html)
    if (len(alt) >= _FALLBACK_MIN_LEN
            and len(alt) >= _FALLBACK_MIN_RATIO * len(primary)
            and not looks_like_boilerplate(alt)):
        return alt
    return primary


def extract_body(html: str, url: str | None = None) -> str:
    try:
        import trafilatura
    except ImportError:
        return ""
    with _LOCK:
        result = trafilatura.extract(html, url=url, include_comments=False,
                                     include_tables=False, favor_recall=False) or ""
    result = result.strip()
    if looks_like_boilerplate(result):
        result = _better_candidate(result, html).strip()
    return result


def extract_metadata(html: str, url: str | None = None) -> dict[str, str | None]:
    try:
        import trafilatura
        from trafilatura.metadata import extract_metadata as _meta
    except ImportError:
        return {"title": None, "date": None}
    with _LOCK:
        md = _meta(html, default_url=url)
    if not md:
        return {"title": None, "date": None}
    return {"title": md.title, "date": md.date}
