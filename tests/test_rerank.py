"""WP4 — the llama-server client.

These tests are about the failure contract, not about model quality (model
quality is `ops/llama-server/sanity.py`, which needs the live services). The
contract: an unreachable service must produce "no opinion", never a score, and
scores must never be attached to the wrong article.
"""
import httpx
import pytest

from tracker import rerank as rr


@pytest.fixture(autouse=True)
def _zero_stats():
    before = dict(rr.STATS)
    yield
    rr.STATS.clear()
    rr.STATS.update(before)


class _Resp:
    def __init__(self, payload, status=200):
        self._p, self.status_code = payload, status

    def raise_for_status(self):
        if self.status_code >= 400:
            raise httpx.HTTPStatusError("boom", request=None, response=None)

    def json(self):
        return self._p


# ── the reordering trap ──────────────────────────────────────────────────────

def test_scores_come_back_in_input_order_not_ranked_order(monkeypatch):
    # /v1/rerank replies sorted by score. Zipping that onto the input list
    # attaches each score to the wrong document — the whole reason `index`
    # exists in the reply.
    def fake_post(url, json=None, timeout=None):
        return _Resp({"results": [
            {"index": 2, "relevance_score": 9.0},
            {"index": 0, "relevance_score": 1.0},
            {"index": 1, "relevance_score": -5.0},
        ]})

    monkeypatch.setattr(httpx, "post", fake_post)
    got = rr.rerank("q", ["doc0", "doc1", "doc2"])
    assert got == [1.0, -5.0, 9.0]


def test_partial_scoring_is_a_failure_not_a_gap(monkeypatch):
    # A reply that scored only some documents would leave the rest at whatever
    # default we picked; there is no safe default, so the call fails open.
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp(
        {"results": [{"index": 0, "relevance_score": 3.0}]}))
    assert rr.rerank("q", ["a", "b"]) is None
    assert rr.STATS["rerank_unavailable"] == 1


def test_score_key_alias_is_accepted(monkeypatch):
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp(
        {"results": [{"index": 0, "score": 2.5}]}))
    assert rr.rerank("q", ["a"]) == [2.5]


# ── fail-open ────────────────────────────────────────────────────────────────

def test_unreachable_service_returns_none_not_zero(monkeypatch):
    # None means "no opinion". 0.0 would be a score, and below any sensible
    # threshold — a dead service would read as "drop everything".
    def boom(*a, **k):
        raise httpx.ConnectError("connection refused")

    monkeypatch.setattr(httpx, "post", boom)
    assert rr.rerank("q", ["a", "b"]) is None
    assert rr.embed(["a"]) is None
    assert rr.STATS["rerank_unavailable"] == 1
    assert rr.STATS["embed_unavailable"] == 1


def test_http_error_fails_open(monkeypatch):
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp({}, status=503))
    assert rr.rerank("q", ["a"]) is None


def test_garbage_payload_fails_open(monkeypatch):
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp({"nonsense": 1}))
    assert rr.rerank("q", ["a"]) is None


def test_empty_input_is_not_a_failure(monkeypatch):
    # Nothing to score is an empty answer, not an outage: it must not bump the
    # unavailable counter, or a quiet day would look like a broken service.
    def explode(*a, **k):
        raise AssertionError("should not call the service")

    monkeypatch.setattr(httpx, "post", explode)
    assert rr.rerank("q", []) == []
    assert rr.embed([]) == []
    assert rr.STATS["rerank_unavailable"] == 0


# ── rerank_max, WP5's shape ──────────────────────────────────────────────────

def test_rerank_max_takes_the_best_query(monkeypatch):
    scores = iter([[-2.0], [4.0], [1.0]])
    monkeypatch.setattr(rr, "rerank", lambda q, d, **k: next(scores))
    assert rr.rerank_max(["q1", "q2", "q3"], "doc") == 4.0


def test_rerank_max_is_none_if_any_query_failed(monkeypatch):
    # A max over a partial query set understates the score, and understating
    # is exactly what drops a real article.
    scores = iter([[-2.0], None, [9.0]])
    monkeypatch.setattr(rr, "rerank", lambda q, d, **k: next(scores))
    assert rr.rerank_max(["q1", "q2", "q3"], "doc") is None


# ── embeddings ───────────────────────────────────────────────────────────────

def test_embed_orders_by_index(monkeypatch):
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp({"data": [
        {"index": 1, "embedding": [0.0, 1.0]},
        {"index": 0, "embedding": [1.0, 0.0]},
    ]}))
    assert rr.embed(["a", "b"]) == [[1.0, 0.0], [0.0, 1.0]]


def test_embed_count_mismatch_fails_open(monkeypatch):
    monkeypatch.setattr(httpx, "post", lambda *a, **k: _Resp(
        {"data": [{"index": 0, "embedding": [1.0]}]}))
    assert rr.embed(["a", "b"]) is None


def test_cosine():
    assert rr.cosine([1.0, 0.0], [1.0, 0.0]) == pytest.approx(1.0)
    assert rr.cosine([1.0, 0.0], [0.0, 1.0]) == pytest.approx(0.0)
    # A degenerate vector reads as "similar to nothing" rather than raising —
    # the fail-open direction for dedup is: do not merge.
    assert rr.cosine([0.0, 0.0], [1.0, 0.0]) == 0.0


def test_connect_timeout_is_short_and_separate_from_read(monkeypatch):
    # Measured on WSL2: a connect to a port with no listener hangs instead of
    # being refused. If connect shared the 120 s read timeout, one stopped
    # service would cost 120 s PER ARTICLE and "fail-open" would mean "stall
    # the pipeline for hours". Failing open is only safe if it fails fast.
    seen = {}

    def fake_post(url, json=None, timeout=None):
        seen["timeout"] = timeout
        return _Resp({"results": [{"index": 0, "relevance_score": 1.0}]})

    monkeypatch.setattr(httpx, "post", fake_post)
    rr.rerank("q", ["a"], timeout=120.0)
    t = seen["timeout"]
    assert isinstance(t, httpx.Timeout)
    assert t.connect == rr.CONNECT_TIMEOUT <= 5.0
    assert t.read == 120.0


def test_rerank_max_pays_one_timeout_not_one_per_query(monkeypatch):
    calls = []

    def boom(url, json=None, timeout=None):
        calls.append(url)
        raise httpx.ConnectTimeout("hang")

    monkeypatch.setattr(httpx, "post", boom)
    assert rr.rerank_max(["q1", "q2", "q3", "q4", "q5", "q6", "q7"], "d") is None
    assert len(calls) == 1


def test_health_check_survives_a_dead_service(monkeypatch):
    def boom(*a, **k):
        raise httpx.ConnectError("refused")

    monkeypatch.setattr(httpx, "get", boom)
    assert rr.rerank_available() is False
    assert rr.embed_available() is False
