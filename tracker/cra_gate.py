"""EU CRA gate v2 — quantitative relevance via /v1/rerank (PLAN-v3.md WP5).

The L1 prompt gate asks a generative model "is this on topic?" and is
deliberately lenient. That is right for `security` and `os`, whose sources are
already on-topic, but wrong for `eu_cra`: that tracker's fetch filter matches
broad tokens (사이버, 보안, 규제, ENISA, CSA, …), so it pulls in a large volume
of general security-industry news, and a lenient prompt gate keeps it. A prompt
gate also has no score, so it cannot be tuned — you cannot ask it to be 10%
stricter.

This module scores each candidate against a fixed query set (one to three
queries per CATEGORY class, `tracker/prompts/cra_queries.txt`) and keeps the
maximum: a CRA article belongs to one of the seven classes, not all of them.

**Shadow by default.** `TRACKER_CRA_GATE=enforce` is what makes a score change
a keep/drop decision; unset, the scores are recorded and nothing is dropped.
Fail-open is unchanged either way: a score of None (service down) keeps the
article, and every such event is counted.
"""
from __future__ import annotations

import logging
import os
from importlib import resources

from . import rerank as rr

_log = logging.getLogger("tracker.cra_gate")

#: Identifies the (model build, query set) pair a score belongs to. Bump this
#: whenever either changes: scores from different pairs are not comparable, and
#: mixing them silently invalidates the calibrated threshold.
MODEL_TAG = "bge-reranker-v2-m3-FP16/b10423/queries-v1"

#: Provisional threshold. Derived 2026-08-14 by replaying 245 eu_cra-tagged
#: rows plus 200 non-eu_cra controls through the query set; all 116 tagged rows
#: below -3.0 were read individually and none was a genuine CRA article (the
#: closest, at -6.36, was a Commission note on "Type C" critical product
#: categories). Estimated recall 0.99, precision 0.42 -> 0.79.
#:
#: Provisional for a reason that must not be lost: the replay scored
#: `title + summary[:400]`, because `raw_text` is purged for most older rows,
#: while the gate runs BEFORE summarisation and scores `title + snippet`.
#: Shorter, differently-worded input yields a different score distribution, so
#: this number MUST be re-derived from shadow rows collected by the gate itself
#: before anyone turns enforcement on. That re-derivation is the whole reason
#: shadow mode is the default.
TAU_DEFAULT = -3.0

#: How much of the candidate text to score. Measured 2026-08-14: ~107 ms per
#: doc-query at ~130 characters against ~700 ms at ~450, on CPU. With 17
#: queries that is the difference between a gate costing ~1 minute per 30
#: candidates and one costing ~6.
SNIPPET_CHARS = 240


def tau() -> float:
    try:
        return float(os.environ.get("TRACKER_CRA_TAU", TAU_DEFAULT))
    except (TypeError, ValueError):
        return TAU_DEFAULT


def enforcing() -> bool:
    """True only on an explicit opt-in. Anything else — unset, empty, typo —
    is shadow, because the failure mode of guessing wrong here is silently
    dropping real regulatory news."""
    return os.environ.get("TRACKER_CRA_GATE", "").strip().lower() == "enforce"


def load_queries() -> list[str]:
    text = (resources.files("tracker.prompts")
            .joinpath("cra_queries.txt").read_text(encoding="utf-8"))
    return [ln.strip() for ln in text.splitlines()
            if ln.strip() and not ln.lstrip().startswith("#")]


def candidate_text(title: str | None, snippet: str | None) -> str:
    return f"{(title or '').strip()}. {(snippet or '').strip()[:SNIPPET_CHARS]}"


def score_candidates(items: list[dict], *, queries: list[str] | None = None,
                     timeout: float = 900.0
                     ) -> dict[int, tuple[float, str]] | None:
    """Score candidates against the query set.

    items: [{"id": int, "title": str, "snippet": str}]
    Returns {id: (max_score, best_query)}, or None if the service could not
    answer — None means "no opinion", never "score 0".

    One batched call per query rather than one per (query, document): the
    server scores a batch in a single pass, and 17 sequential single-document
    calls would pay the HTTP round trip 17 times per article.
    """
    if not items:
        return {}
    queries = queries or load_queries()
    if not queries:
        _log.warning("CRA query set is empty — no opinion")
        return None
    docs = [candidate_text(it.get("title"), it.get("snippet")) for it in items]
    best: list[tuple[float, str]] = []
    for qi, q in enumerate(queries):
        got = rr.rerank(q, docs, timeout=timeout)
        if got is None:
            # A max over a partial query set understates every score, and
            # understating is precisely what drops a real article. Refuse.
            _log.warning("CRA gate: query %d/%d failed — failing open for the "
                         "whole batch", qi + 1, len(queries))
            return None
        if not best:
            best = [(s, q) for s in got]
        else:
            best = [(s, q) if s > b[0] else b for s, b in zip(got, best)]
    return {it["id"]: best[i] for i, it in enumerate(items)}


def run(items: list[dict], store=None, *, log=None) -> dict:
    """Score, persist, and (only when enforcing) decide.

    Returns {"scores", "dropped_ids", "enforced", "unavailable", "tau"}.
    `dropped_ids` is always empty in shadow mode, so a caller that ignores the
    mode flag still cannot accidentally drop anything.
    """
    log = log or _log
    out = {"scores": {}, "dropped_ids": [], "enforced": enforcing(),
           "unavailable": False, "tau": tau()}
    if not items:
        return out

    scored = score_candidates(items)
    if scored is None:
        out["unavailable"] = True
        log.warning("CRA rerank gate unavailable — keeping all %d candidates "
                    "(fail-open)", len(items))
        return out

    out["scores"] = scored
    if store is not None:
        try:
            store.record_cra_scores(
                [(aid, sc, bq) for aid, (sc, bq) in scored.items()],
                model_tag=MODEL_TAG, enforced=out["enforced"])
        except Exception as exc:            # persistence must never gate news
            log.warning("could not persist CRA scores: %s", exc)

    t = out["tau"]
    below = [aid for aid, (sc, _) in scored.items() if sc < t]
    if out["enforced"]:
        out["dropped_ids"] = below
        log.info("CRA gate ENFORCING tau=%.2f: dropping %d/%d candidates",
                 t, len(below), len(items))
    else:
        log.info("CRA gate SHADOW tau=%.2f: would drop %d/%d candidates "
                 "(nothing dropped; set TRACKER_CRA_GATE=enforce to act)",
                 t, len(below), len(items))
    return out
