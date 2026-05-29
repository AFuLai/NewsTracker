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
                   threshold: float = THRESHOLD) -> list[dict[str, Any]]:
    """Greedy single-link cluster; primary = longest summary."""
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
