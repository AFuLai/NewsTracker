"""Cross-source clustering: group rows reporting the same event, merge sources.

Strategy (cheap & local, no LLM):
  1. Tokenize titles into CJK char-bigrams + ASCII word tokens (lower-case).
  2. Compute Jaccard similarity between every pair.
  3. Greedy single-link clustering above THRESHOLD.
  4. For each cluster, pick the row with longest summary as "primary";
     merge the other rows' (source, url) into primary.sources.
"""
from __future__ import annotations

import re
from typing import Any

THRESHOLD = 0.45
#: WP6 cosine threshold for the semantic signal. 0.85 is the plan's starting
#: value and is deliberately strict — bge-m3 puts two unrelated security
#: articles around 0.5-0.6, so a loose threshold here merges distinct events
#: and makes one of them vanish from the site. Calibrate in shadow before
#: turning `semantic=True` on.
SIM_THRESHOLD = 0.85
CJK_RE = re.compile(r"[㐀-鿿]")
WORD_RE = re.compile(r"[A-Za-z0-9][A-Za-z0-9\-]*")
CVE_RE = re.compile(r"CVE-\d{4}-\d{4,7}", re.I)
STOPWORDS = {"the", "a", "an", "of", "to", "for", "in", "on", "and", "or",
             "with", "by", "from", "is", "are", "新", "了", "的", "與"}


def _cves(title: str) -> set[str]:
    return {m.group(0).upper() for m in CVE_RE.finditer(title or "")}


def _tokens(title: str) -> set[str]:
    title = (title or "").lower()
    toks: set[str] = set()
    for m in WORD_RE.finditer(title):
        t = m.group(0)
        if t not in STOPWORDS and len(t) > 1:
            toks.add(t)
    # CJK char bigrams (catch 漏洞/勒索 etc)
    cjk_chars = "".join(c for c in title if CJK_RE.match(c))
    for i in range(len(cjk_chars) - 1):
        bg = cjk_chars[i:i + 2]
        if bg not in STOPWORDS:
            toks.add(bg)
    return toks


def _cosine(a: list[float], b: list[float]) -> float:
    """Local copy rather than importing tracker.rerank: cluster.py is pure and
    has no service dependency, and merging must keep working with the llama
    servers down."""
    num = sum(x * y for x, y in zip(a, b))
    na = sum(x * x for x in a) ** 0.5
    nb = sum(x * x for x in b) ** 0.5
    if na == 0.0 or nb == 0.0:
        return 0.0
    return num / (na * nb)


def _jaccard(a: set[str], b: set[str]) -> float:
    if not a or not b:
        return 0.0
    inter = len(a & b)
    return inter / (len(a) + len(b) - inter)


ZH_DOMAINS = ("ithome.com.tw", "informationsecurity.com.tw", "twcert.org.tw",
              "ithome.com", "moda.gov.tw", "cnews.com.tw")


def _make_source(row: dict[str, Any]) -> dict[str, str]:
    name = row.get("source") or "source"
    url = row.get("url") or ""
    lang = "ZH-TW" if any(d in url for d in ZH_DOMAINS) else "EN"
    return {"name": name, "url": url, "lang": lang}


def merge_by_title(rows: list[dict[str, Any]],
                   threshold: float = THRESHOLD,
                   *, embeddings: dict[int, list[float]] | None = None,
                   sim_threshold: float = SIM_THRESHOLD,
                   semantic: bool = False,
                   on_semantic_pair=None) -> list[dict[str, Any]]:
    """Greedy single-link cluster; primary = longest summary.

    WP6 adds embedding similarity as a THIRD signal beside the existing CVE
    bridge and title Jaccard, and does not replace either: Jaccard cannot see
    that a Chinese and an English write-up of the same ENISA announcement share
    almost no tokens, while a multilingual embedding can.

    embeddings: {article_id: vector}. A row without one simply does not take
    part in the semantic signal. WP6 deliberately does not backfill old rows,
    so "missing" is the normal case and must never be read as "dissimilar".
    semantic: False keeps the signal in shadow — candidate pairs are reported
    through `on_semantic_pair(id_a, id_b, similarity)` and nothing is merged on
    them, which is how tau2 gets calibrated before it can hide an article.
    """
    if len(rows) <= 1:
        out = []
        for r in rows:
            r = dict(r)
            r.setdefault("sources", [_make_source(r)])
            out.append(r)
        return out

    token_sets = [_tokens(r.get("title") or "") for r in rows]
    cve_sets = [_cves(r.get("title") or "") for r in rows]
    parent = list(range(len(rows)))
    # Positional view of the embeddings, so the pair loop does not re-look-up
    # by id. None when the caller passed none — meaning "no semantic signal",
    # which is not the same as "every row is dissimilar".
    vecs: dict[int, list[float]] | None = None
    if embeddings:
        vecs = {i: embeddings[r["id"]] for i, r in enumerate(rows)
                if r.get("id") in embeddings}

    def find(i: int) -> int:
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    def union(i: int, j: int) -> None:
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[ri] = rj

    for i in range(len(rows)):
        for j in range(i + 1, len(rows)):
            # Strong signal: shared CVE = same event regardless of language.
            if cve_sets[i] & cve_sets[j]:
                union(i, j); continue
            # Skip same-source pairs unless a CVE bridges them — articles from
            # the same outlet on the same day are almost always different events.
            if rows[i].get("source") and rows[i].get("source") == rows[j].get("source"):
                continue
            if _jaccard(token_sets[i], token_sets[j]) >= threshold:
                union(i, j)
                continue
            # Third signal (WP6): cross-lingual semantic similarity. Reached
            # only when the two cheap signals already declined, so it adds
            # merges rather than changing existing ones.
            if vecs is not None:
                va, vb = vecs.get(i), vecs.get(j)
                if va is None or vb is None:
                    continue
                sim = _cosine(va, vb)
                if sim >= sim_threshold:
                    if on_semantic_pair is not None:
                        on_semantic_pair(rows[i].get("id"), rows[j].get("id"), sim)
                    if semantic:
                        union(i, j)

    clusters: dict[int, list[int]] = {}
    for i in range(len(rows)):
        clusters.setdefault(find(i), []).append(i)

    out: list[dict[str, Any]] = []
    for member_ids in clusters.values():
        members = [rows[i] for i in member_ids]
        primary = max(members, key=lambda r: len((r.get("summary") or "")))
        primary = dict(primary)
        seen: set[str] = set()
        sources: list[dict[str, str]] = []
        for m in members:
            src = _make_source(m)
            key = src["url"] or src["name"]
            if key in seen:
                continue
            seen.add(key)
            sources.append(src)
        primary["sources"] = sources
        primary["_merged_ids"] = [m["id"] for m in members]
        out.append(primary)
    return out
