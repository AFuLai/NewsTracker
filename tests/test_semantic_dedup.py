"""WP6 — embedding storage and the semantic clustering signal.

The dangerous direction here is the opposite of the gate's: a wrong merge makes
an article disappear from the site (only the cluster primary is rendered). So
these pin that the signal is additive, opt-in, and that a missing embedding is
never read as "dissimilar".
"""
import tempfile
from pathlib import Path

import pytest

from tracker.cluster import SIM_THRESHOLD, merge_by_title
from tracker.dedup import Store


def _row(i, title, summary="s", source=None):
    return {"id": i, "title": title, "summary": summary,
            "source": source or f"src{i}", "url": f"http://x/{i}"}


# ── the semantic signal is additive and opt-in ───────────────────────────────

def test_no_embeddings_behaves_exactly_as_before():
    rows = [_row(1, "Totally different thing"), _row(2, "Unrelated news item")]
    out = merge_by_title(rows)
    assert len(out) == 2


def test_shadow_reports_but_does_not_merge():
    # Identical vectors => cosine 1.0, far above the threshold.
    rows = [_row(1, "ENISA publishes CRA guidance"),
            _row(2, "歐盟發布網路韌性法案指引")]
    emb = {1: [1.0, 0.0, 0.0], 2: [1.0, 0.0, 0.0]}
    seen = []
    out = merge_by_title(rows, embeddings=emb, semantic=False,
                         on_semantic_pair=lambda a, b, s: seen.append((a, b, s)))
    assert len(out) == 2                      # nothing merged
    assert len(seen) == 1 and seen[0][2] == pytest.approx(1.0)


def test_enforce_merges_across_languages():
    # The case Jaccard cannot see: same event, no shared tokens.
    rows = [_row(1, "ENISA publishes CRA guidance"),
            _row(2, "歐盟發布網路韌性法案指引")]
    emb = {1: [1.0, 0.0, 0.0], 2: [0.99, 0.1, 0.0]}
    out = merge_by_title(rows, embeddings=emb, semantic=True)
    assert len(out) == 1
    assert len(out[0]["sources"]) == 2


def test_below_threshold_does_not_merge():
    rows = [_row(1, "A"), _row(2, "B")]
    emb = {1: [1.0, 0.0], 2: [0.0, 1.0]}      # cosine 0.0
    out = merge_by_title(rows, embeddings=emb, semantic=True)
    assert len(out) == 2


def test_a_missing_embedding_is_not_dissimilar_it_is_no_opinion():
    # WP6 does not backfill, so most rows have no vector. A row without one
    # must simply not participate — not be treated as far from everything,
    # and not crash the merge.
    rows = [_row(1, "ENISA CRA guidance"), _row(2, "unrelated"),
            _row(3, "third item")]
    emb = {1: [1.0, 0.0]}                     # only one row embedded
    out = merge_by_title(rows, embeddings=emb, semantic=True)
    assert len(out) == 3


def test_existing_cve_bridge_still_wins():
    rows = [_row(1, "Bug in thing CVE-2026-1111", source="a"),
            _row(2, "別的東西 CVE-2026-1111", source="b")]
    out = merge_by_title(rows, embeddings={}, semantic=True)
    assert len(out) == 1


def test_threshold_default_is_strict():
    # bge-m3 puts two unrelated security articles around 0.5-0.6, so a loose
    # threshold silently merges distinct events.
    assert SIM_THRESHOLD >= 0.8


# ── storage round-trip ───────────────────────────────────────────────────────

def _store():
    return Store(Path(tempfile.mkdtemp()) / "t.sqlite")


def _insert(store, n):
    ids = []
    for i in range(n):
        store.upsert_candidate(url=f"http://e/{i}", source="s", title=f"t{i}")
        ids.append(store.conn.execute(
            "SELECT id FROM articles WHERE url LIKE ?",
            (f"%/{i}",)).fetchone()[0])
    return ids


def test_embedding_round_trip_preserves_values():
    store = _store()
    ids = _insert(store, 2)
    vec = [0.5, -0.25, 0.125, 1.0]
    store.store_embeddings({ids[0]: vec})
    got = store.load_embeddings(ids)
    assert ids[1] not in got                  # never embedded
    assert got[ids[0]] == pytest.approx(vec)


def test_ids_needing_embedding_excludes_the_done_ones():
    store = _store()
    ids = _insert(store, 3)
    store.store_embeddings({ids[1]: [1.0, 2.0]})
    assert store.ids_needing_embedding(ids) == [ids[0], ids[2]]


def test_load_embeddings_handles_an_empty_request():
    assert _store().load_embeddings([]) == {}
    assert _store().ids_needing_embedding([]) == []


def test_storing_nothing_is_not_an_error():
    assert _store().store_embeddings({}) == 0
