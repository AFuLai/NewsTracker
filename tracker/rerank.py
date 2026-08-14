"""Client for the two llama-server instances (PLAN-v3.md WP4).

  :8081  bge-m3              -> /v1/embeddings   (WP6 semantic dedup)
  :8082  bge-reranker-v2-m3  -> /v1/rerank       (WP5 quantitative CRA gate)

Deployment, pinned versions and the deploy gate: `ops/llama-server/MANIFEST.md`.

**Fail-open is the contract.** Every function here returns `None` — never an
empty list, never zeros — when the service is unreachable or answers oddly.
`None` means "no opinion", and callers MUST treat it as "keep the article",
matching the L1 gate's philosophy: over-fetching is recoverable, silently
dropping real news is not. Returning `0.0` instead would be a score, and a
score below any sensible threshold, so a dead service would look like a
unanimous "drop everything" verdict.

Scores from `/v1/rerank` are **raw logits, not 0..1** and are not comparable
across models. Measured range at deploy: on-topic -4..+5.5, off-topic
saturating near -11. Thresholds must be calibrated against a validation set on
this exact model build (WP5), never guessed.
"""
from __future__ import annotations

import logging
import os
import threading

import httpx

_log = logging.getLogger("tracker.rerank")

EMBED_URL = os.environ.get("TRACKER_EMBED_URL", "http://127.0.0.1:8081")
RERANK_URL = os.environ.get("TRACKER_RERANK_URL", "http://127.0.0.1:8082")

#: Telemetry, same shape and reasoning as llm.STATS (WP3). `unavailable`
#: counts fail-open events: a run that gated nothing because the service was
#: down must be distinguishable from one that gated nothing because everything
#: was on topic.
STATS = {"rerank_calls": 0, "rerank_unavailable": 0,
         "embed_calls": 0, "embed_unavailable": 0}

_stats_lock = threading.Lock()

#: Connect timeout, deliberately short and separate from the read timeout.
#:
#: Measured 2026-08-14: on WSL2 loopback a TCP connect to a port with no
#: listener HANGS rather than being refused — no RST comes back. With a single
#: 120 s timeout covering connect, a stopped service therefore costs 120 s per
#: article instead of failing immediately, and "fail-open" turns into "stall
#: the pipeline for hours". Failing open is only safe if it fails fast.
CONNECT_TIMEOUT = float(os.environ.get("TRACKER_RERANK_CONNECT_TIMEOUT", "2.0"))


def _timeout(read: float) -> httpx.Timeout:
    return httpx.Timeout(read, connect=CONNECT_TIMEOUT)


def bump(name: str, n: int = 1) -> None:
    with _stats_lock:
        STATS[name] = STATS.get(name, 0) + n


def _healthy(base: str, timeout: float = 3.0) -> bool:
    try:
        return httpx.get(f"{base}/health",
                         timeout=_timeout(timeout)).status_code == 200
    except Exception:
        return False


def rerank_available(timeout: float = 3.0) -> bool:
    return _healthy(RERANK_URL, timeout)


def embed_available(timeout: float = 3.0) -> bool:
    return _healthy(EMBED_URL, timeout)


def rerank(query: str, documents: list[str], *,
           timeout: float = 120.0) -> list[float] | None:
    """Score every document against one query. Returns scores in the SAME order
    as `documents`, or None if the service could not answer.

    The reordering matters: /v1/rerank replies sorted by score, each entry
    carrying its original `index`. Zipping the reply straight onto the input
    list — the obvious mistake — silently attaches each score to the wrong
    article.
    """
    if not documents:
        return []
    try:
        r = httpx.post(f"{RERANK_URL}/v1/rerank",
                       json={"model": "rerank", "query": query,
                             "documents": documents, "top_n": len(documents)},
                       timeout=_timeout(timeout))
        r.raise_for_status()
        payload = r.json()
        results = payload.get("results")
        if results is None:
            results = payload.get("data")
        if not isinstance(results, list):
            raise ValueError(f"no results array in reply: {str(payload)[:200]}")
        scores: list[float | None] = [None] * len(documents)
        for item in results:
            i = int(item["index"])
            if 0 <= i < len(documents):
                s = item.get("relevance_score", item.get("score"))
                scores[i] = float(s)
        if any(s is None for s in scores):
            raise ValueError("service did not score every document")
        bump("rerank_calls")
        return scores                      # type: ignore[return-value]
    except Exception as exc:
        bump("rerank_unavailable")
        _log.warning("rerank unavailable (%s) — failing open", exc)
        return None


def rerank_max(queries: list[str], document: str, *,
               timeout: float = 120.0) -> float | None:
    """Best score of one document across a query set — WP5's shape: a CRA
    article need only match one of the seven category queries, not all of them.

    None if ANY query failed: a max over a partial set understates the score,
    and understating is what drops a real article. The first failure returns
    immediately rather than paying the connect timeout once per remaining
    query — with a dead service that is the difference between one timeout and
    seven.
    """
    best: float | None = None
    for q in queries:
        got = rerank(q, [document], timeout=timeout)
        if got is None:
            return None
        best = got[0] if best is None else max(best, got[0])
    return best


def embed(texts: list[str], *, timeout: float = 120.0) -> list[list[float]] | None:
    """Embed a batch. Returns vectors in input order, or None on any failure."""
    if not texts:
        return []
    try:
        r = httpx.post(f"{EMBED_URL}/v1/embeddings",
                       json={"model": "bge-m3", "input": texts},
                       timeout=_timeout(timeout))
        r.raise_for_status()
        data = r.json()["data"]
        # OpenAI-shaped replies carry `index`; sort by it rather than trusting
        # arrival order, for the same reason rerank() does.
        ordered = sorted(data, key=lambda d: d.get("index", 0))
        vecs = [list(map(float, d["embedding"])) for d in ordered]
        if len(vecs) != len(texts):
            raise ValueError(f"got {len(vecs)} vectors for {len(texts)} inputs")
        bump("embed_calls")
        return vecs
    except Exception as exc:
        bump("embed_unavailable")
        _log.warning("embeddings unavailable (%s) — failing open", exc)
        return None


def cosine(a: list[float], b: list[float]) -> float:
    """Cosine similarity. 0.0 for a zero vector rather than ZeroDivisionError —
    a degenerate embedding should read as 'not similar to anything', which is
    the fail-open direction here (no spurious dedup)."""
    num = sum(x * y for x, y in zip(a, b))
    na = sum(x * x for x in a) ** 0.5
    nb = sum(x * x for x in b) ** 0.5
    if na == 0.0 or nb == 0.0:
        return 0.0
    return num / (na * nb)
