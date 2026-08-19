"""WP6 — what one run is allowed to embed.

The first version selected every ready row that lacked a vector, with no date
bound. Against a table where nothing had been embedded that is the whole table:
run #65 logged "embeddings service down - skipping 6177 rows", which is what
the run would have embedded had the service been up, on CPU, against a plan
that asks for new rows only. These pin the three bounds that replaced it.
"""
import logging
import tempfile
from datetime import date
from pathlib import Path

import pytest

import tracker.orchestrator as orch
from tracker.dedup import Store
from tracker.orchestrator import RunReport, _embed_new_rows

LOG = logging.getLogger("t")


class _Window:
    def __init__(self, since, until):
        self.since, self.until = since, until


WINDOW = _Window(date(2026, 8, 13), date(2026, 8, 19))


def _store():
    return Store(Path(tempfile.mkdtemp()) / "t.sqlite")


def _rows(store, spec):
    """spec: [(date, tracker)] -> ids, all ready with a summary."""
    ids = []
    for i, (d, tracker) in enumerate(spec):
        store.upsert_candidate(url=f"http://e/{i}", source="s", title=f"t{i}")
        aid = store.conn.execute("SELECT id FROM articles WHERE url LIKE ?",
                                 (f"%/{i}",)).fetchone()[0]
        store.conn.execute(
            "UPDATE articles SET status='ready', summary='s', date=?, trackers=? "
            "WHERE id=?", (d, tracker, aid))
        ids.append(aid)
    store.conn.commit()
    return ids


@pytest.fixture
def embedded(monkeypatch):
    """Capture the ids handed to the embedding service; claim it is up."""
    seen = []
    import tracker.rerank as rr
    monkeypatch.setattr(rr, "embed_available", lambda: True)
    monkeypatch.setattr(rr, "embed", lambda texts, timeout=600.0:
                        [[0.1] * 4 for _ in texts])
    real_store = Store.store_embeddings

    def spy(self, vectors):
        seen.extend(vectors)
        return real_store(self, vectors)

    monkeypatch.setattr(Store, "store_embeddings", spy)
    for k in ("TRACKER_EMBED_BACKFILL", "TRACKER_EMBED_MAX_ROWS"):
        monkeypatch.delenv(k, raising=False)
    return seen


def test_rows_outside_the_window_are_not_embedded(embedded):
    store = _store()
    old, inside = _rows(store, [("2026-06-30", "security"),
                                ("2026-08-15", "security")])

    _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    # The write phase clusters the days in the window and nothing else, so a
    # vector for a June row is cost with no consumer.
    assert embedded == [inside]
    assert old not in embedded


def test_a_row_that_already_has_a_vector_is_left_alone(embedded):
    store = _store()
    done, fresh = _rows(store, [("2026-08-14", "security"),
                                ("2026-08-15", "security")])
    store.store_embeddings({done: [1.0, 2.0]})
    embedded.clear()

    _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    assert embedded == [fresh]


def test_other_trackers_are_not_embedded(embedded):
    store = _store()
    mine, theirs = _rows(store, [("2026-08-15", "security"),
                                 ("2026-08-15", "os")])

    _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    assert embedded == [mine]
    assert theirs not in embedded


def test_the_cap_bounds_a_run_and_says_what_it_left(embedded, monkeypatch, caplog):
    store = _store()
    _rows(store, [("2026-08-1%d" % (3 + i % 6), "security") for i in range(10)])
    monkeypatch.setenv("TRACKER_EMBED_MAX_ROWS", "4")

    with caplog.at_level(logging.INFO):
        _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    assert len(embedded) == 4
    # No silent truncation: a run that embedded 4 of 10 and said nothing reads
    # as a run that embedded everything.
    assert "6 left for a later run" in caplog.text


def test_a_nonsense_cap_degrades_to_the_default(embedded, monkeypatch):
    store = _store()
    _rows(store, [("2026-08-15", "security")])
    monkeypatch.setenv("TRACKER_EMBED_MAX_ROWS", "as many as it takes")

    _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    assert len(embedded) == 1


def test_backfill_is_opt_in_and_still_capped(embedded, monkeypatch, caplog):
    store = _store()
    ids = _rows(store, [("2026-01-0%d" % (1 + i), "security") for i in range(5)])
    monkeypatch.setenv("TRACKER_EMBED_BACKFILL", "all")
    monkeypatch.setenv("TRACKER_EMBED_MAX_ROWS", "3")

    with caplog.at_level(logging.INFO):
        _embed_new_rows(store, WINDOW, ["security"], RunReport(), LOG)

    # Every row is outside the window, so without the opt-in none of them
    # would be touched at all.
    assert len(embedded) == 3
    assert set(embedded) <= set(ids)
    assert "2 left for a later run" in caplog.text


def test_a_down_service_embeds_nothing_and_says_so(monkeypatch):
    store = _store()
    _rows(store, [("2026-08-15", "security")])
    import tracker.rerank as rr
    monkeypatch.setattr(rr, "embed_available", lambda: False)
    rep = RunReport()

    _embed_new_rows(store, WINDOW, ["security"], rep, LOG)

    # Fail-open: clustering falls back to CVE + Jaccard, no article is lost.
    assert rep.embed_unavailable is True
    assert rep.embedded == 0


def test_the_default_cap_is_documented_where_it_is_read():
    # A cap nobody can find is a silent truncation with extra steps.
    assert orch.DEFAULT_EMBED_MAX_ROWS == 500
