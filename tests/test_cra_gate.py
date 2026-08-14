"""WP5 — the EU CRA rerank gate.

The dangerous direction is dropping a real regulatory article, so most of these
pin the ways the gate must refuse to act: shadow by default, fail-open when the
service is down, and no partial-query maxima.
"""
import tempfile
from pathlib import Path

import pytest

from tracker import cra_gate
from tracker.dedup import Store


@pytest.fixture(autouse=True)
def _clean_env(monkeypatch):
    monkeypatch.delenv("TRACKER_CRA_GATE", raising=False)
    monkeypatch.delenv("TRACKER_CRA_TAU", raising=False)


ITEMS = [
    {"id": 1, "title": "CRA delegated act", "snippet": "the Commission adopted"},
    {"id": 2, "title": "Samsung phone launch", "snippet": "new camera"},
    {"id": 3, "title": "ENISA CRA guidance", "snippet": "essential requirements"},
]


# ── shadow is the default, and it drops nothing ──────────────────────────────

def test_shadow_is_the_default():
    assert cra_gate.enforcing() is False


@pytest.mark.parametrize("value", ["", "1", "true", "yes", "shadow",
                                   "enforced", "ENFORCE ", "enfroce"])
def test_only_the_exact_word_enforces(monkeypatch, value):
    # Anything ambiguous stays shadow: the cost of misreading this flag is
    # silently dropping regulatory news.
    monkeypatch.setenv("TRACKER_CRA_GATE", value)
    assert cra_gate.enforcing() is (value.strip().lower() == "enforce")


def test_shadow_mode_reports_but_drops_nothing(monkeypatch):
    monkeypatch.setattr(cra_gate, "score_candidates",
                        lambda items, **k: {1: (2.0, "q"), 2: (-9.0, "q"),
                                            3: (1.0, "q")})
    out = cra_gate.run(ITEMS)
    assert out["enforced"] is False
    assert out["dropped_ids"] == []          # the whole point
    assert len(out["scores"]) == 3
    # ...but it still says what enforcement WOULD have done
    below = sum(1 for s, _ in out["scores"].values() if s < out["tau"])
    assert below == 1


def test_enforce_mode_drops_below_tau(monkeypatch):
    monkeypatch.setenv("TRACKER_CRA_GATE", "enforce")
    monkeypatch.setattr(cra_gate, "score_candidates",
                        lambda items, **k: {1: (2.0, "q"), 2: (-9.0, "q"),
                                            3: (1.0, "q")})
    out = cra_gate.run(ITEMS)
    assert out["enforced"] is True
    assert out["dropped_ids"] == [2]


def test_tau_is_overridable(monkeypatch):
    monkeypatch.setenv("TRACKER_CRA_GATE", "enforce")
    monkeypatch.setenv("TRACKER_CRA_TAU", "1.5")
    monkeypatch.setattr(cra_gate, "score_candidates",
                        lambda items, **k: {1: (2.0, "q"), 2: (-9.0, "q"),
                                            3: (1.0, "q")})
    out = cra_gate.run(ITEMS)
    assert sorted(out["dropped_ids"]) == [2, 3]


def test_bad_tau_falls_back_to_the_calibrated_default(monkeypatch):
    monkeypatch.setenv("TRACKER_CRA_TAU", "not-a-number")
    assert cra_gate.tau() == cra_gate.TAU_DEFAULT


# ── fail-open ────────────────────────────────────────────────────────────────

def test_service_down_keeps_everything_even_when_enforcing(monkeypatch):
    monkeypatch.setenv("TRACKER_CRA_GATE", "enforce")
    monkeypatch.setattr(cra_gate, "score_candidates", lambda items, **k: None)
    out = cra_gate.run(ITEMS)
    assert out["unavailable"] is True
    assert out["dropped_ids"] == []


def test_one_failed_query_fails_the_whole_batch(monkeypatch):
    # A max over a subset of the queries understates every score, and
    # understating is what drops a real article.
    from tracker import rerank as rr
    calls = {"n": 0}

    def flaky(q, docs, **k):
        calls["n"] += 1
        return None if calls["n"] == 3 else [1.0] * len(docs)

    monkeypatch.setattr(rr, "rerank", flaky)
    assert cra_gate.score_candidates(ITEMS) is None


def test_empty_query_set_is_no_opinion(monkeypatch):
    monkeypatch.setattr(cra_gate, "load_queries", lambda: [])
    assert cra_gate.score_candidates(ITEMS) is None


def test_no_candidates_is_not_a_failure():
    out = cra_gate.run([])
    assert out["dropped_ids"] == [] and out["unavailable"] is False


def test_a_persistence_failure_does_not_gate_news(monkeypatch):
    monkeypatch.setenv("TRACKER_CRA_GATE", "enforce")
    monkeypatch.setattr(cra_gate, "score_candidates",
                        lambda items, **k: {1: (2.0, "q"), 2: (-9.0, "q"),
                                            3: (1.0, "q")})

    class BadStore:
        def record_cra_scores(self, *a, **k):
            raise RuntimeError("disk full")

    out = cra_gate.run(ITEMS, BadStore())
    assert out["dropped_ids"] == [2]        # the decision still stands


# ── scoring mechanics ────────────────────────────────────────────────────────

def test_max_over_queries_and_best_query_recorded(monkeypatch):
    from tracker import rerank as rr
    per_query = {"qA": [1.0, -3.0], "qB": [-2.0, 4.0]}
    monkeypatch.setattr(cra_gate, "load_queries", lambda: ["qA", "qB"])
    monkeypatch.setattr(rr, "rerank", lambda q, docs, **k: per_query[q])
    got = cra_gate.score_candidates(ITEMS[:2])
    assert got[1] == (1.0, "qA")
    assert got[2] == (4.0, "qB")


def test_candidate_text_is_truncated():
    txt = cra_gate.candidate_text("T", "x" * 5000)
    assert len(txt) <= cra_gate.SNIPPET_CHARS + 10


def test_query_file_parses_and_has_every_category():
    qs = cra_gate.load_queries()
    # 7 CATEGORY classes x 1-3 queries; comments and blanks stripped.
    assert 7 <= len(qs) <= 21
    assert all(not q.startswith("#") and q.strip() for q in qs)
    assert any("harmonised" in q for q in qs)
    assert any("open source steward" in q for q in qs)


# ── persistence ──────────────────────────────────────────────────────────────

def test_scores_persist_and_upsert_by_model_tag():
    tmp = Path(tempfile.mkdtemp()) / "t.sqlite"
    store = Store(tmp)
    store.record_cra_scores([(1, -4.0, "qA"), (2, 3.0, "qB")],
                            model_tag="m1", enforced=False)
    assert store.cra_score_stats()["n"] == 2
    # same article, same tag -> replaced, not duplicated
    store.record_cra_scores([(1, -1.0, "qC")], model_tag="m1", enforced=True)
    st = store.cra_score_stats("m1")
    assert st["n"] == 2 and st["min"] == -1.0
    # a different model_tag keeps its own history rather than overwriting
    store.record_cra_scores([(1, -8.0, "qD")], model_tag="m2", enforced=False)
    assert store.cra_score_stats()["n"] == 3
    assert store.cra_score_stats("m2")["n"] == 1
