"""WP2 — concurrent LLM phases, and WP3 — the telemetry that measures them.

The risk WP2 introduces is not speed, it is correctness: sqlite has one writer,
the controller's pause point moved from per-article to per-batch, and the Gemini
backend cannot be driven in parallel at all. These tests pin those three, plus
the property that matters most — no row is lost or double-written.
"""
import threading

import pytest

import tracker.orchestrator as orch
from tracker import llm_concurrency
from tracker.orchestrator import RunReport, _llm_workers


# ── worker-count resolution ──────────────────────────────────────────────────

def test_default_concurrency(monkeypatch):
    monkeypatch.delenv("TRACKER_LLM_CONCURRENCY", raising=False)
    assert llm_concurrency() == 4


def test_env_overrides_concurrency(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "8")
    assert llm_concurrency() == 8


def test_bad_concurrency_degrades_to_serial_not_crash(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "nonsense")
    assert llm_concurrency() == 4
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "0")
    assert llm_concurrency() == 1
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "-3")
    assert llm_concurrency() == 1


def test_gemini_backend_forces_serial(monkeypatch):
    # One Chrome tab, one CDP session: four concurrent asks interleave into
    # each other's replies.
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    assert _llm_workers("gemini") == 1
    assert _llm_workers("ollama") == 4


def test_controller_on_gemini_forces_serial(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")

    class Ctl:
        backends = {"summarize": "ollama", "translate": "gemini"}

    # The controller can flip a backend mid-run, so a phase that was told
    # "ollama" must still stand down when the other role is on Chrome.
    assert _llm_workers("ollama", Ctl()) == 1


# ── translate phase: no row lost, all writes on the calling thread ───────────

class _Row(dict):
    """sqlite3.Row-ish: subscriptable by column name."""


class _FakeStore:
    def __init__(self, rows):
        self.rows = rows
        self.writes = []
        self.write_threads = set()

    def list_untranslated(self, limit=0, statuses=()):
        return self.rows

    def update_translation(self, aid, *, title_en, summary_en, tags_en):
        self.write_threads.add(threading.current_thread().name)
        self.writes.append(aid)


class _NullRpt:
    def enter(self, *a, **k):
        pass

    def tick(self, *a, **k):
        pass

    def result(self, *a, **k):
        pass

    def note(self, *a, **k):
        pass


def _rows(n):
    return [_Row(id=i, title=f"t{i}", summary=f"s{i}", tags="a,b")
            for i in range(n)]


def test_translate_writes_every_row_once(monkeypatch, caplog):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    import tracker.llm.translate as tr
    monkeypatch.setattr(tr, "translate_article",
                        lambda **k: {"title_en": "T", "summary_en": "S",
                                     "tags_en": ["x"]})
    store = _FakeStore(_rows(23))       # deliberately not a multiple of 4
    rep = RunReport()
    import logging
    orch._phase_translate(store, rep, logging.getLogger("t"), _NullRpt())
    assert rep.translated == 23
    assert sorted(store.writes) == list(range(23))


def test_translate_db_writes_stay_on_the_calling_thread(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    import tracker.llm.translate as tr
    monkeypatch.setattr(tr, "translate_article",
                        lambda **k: {"title_en": "T", "summary_en": "S",
                                     "tags_en": []})
    store = _FakeStore(_rows(12))
    import logging
    orch._phase_translate(store, RunReport(), logging.getLogger("t"), _NullRpt())
    # sqlite connections are not shareable across threads; every write must
    # have happened where the connection lives.
    assert store.write_threads == {threading.current_thread().name}


def test_translate_survives_a_failing_article(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    import tracker.llm.translate as tr

    def flaky(*, title, summary, tags, backend):
        if title == "t3":
            raise RuntimeError("model exploded")
        return {"title_en": "T", "summary_en": "S", "tags_en": []}

    monkeypatch.setattr(tr, "translate_article", flaky)
    store = _FakeStore(_rows(8))
    rep = RunReport()
    import logging
    orch._phase_translate(store, rep, logging.getLogger("t"), _NullRpt())
    # one row lost, the other seven still written — a pool must not turn one
    # bad article into a dead phase.
    assert rep.translated == 7
    assert 3 not in store.writes


def test_translate_checkpoints_once_per_batch(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    import tracker.llm.translate as tr
    monkeypatch.setattr(tr, "translate_article",
                        lambda **k: {"title_en": "T", "summary_en": "S",
                                     "tags_en": []})

    class Ctl:
        backends = {"summarize": "ollama", "translate": "ollama"}

        def __init__(self):
            self.n = 0

        def backend_for(self, role):
            return "ollama"

        def checkpoint(self):
            self.n += 1

    ctl = Ctl()
    import logging
    orch._phase_translate(_FakeStore(_rows(12)), RunReport(),
                          logging.getLogger("t"), _NullRpt(), controller=ctl)
    # 12 rows / 4 workers = 3 batch boundaries. Pause granularity is a batch
    # now, not an article — that is the stated cost of WP2.
    assert ctl.n == 3


def test_translate_records_the_concurrency_it_used(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "4")
    import tracker.llm.translate as tr
    monkeypatch.setattr(tr, "translate_article",
                        lambda **k: {"title_en": "T", "summary_en": "S",
                                     "tags_en": []})
    rep = RunReport()
    import logging
    orch._phase_translate(_FakeStore(_rows(4)), rep, logging.getLogger("t"),
                          _NullRpt())
    assert rep.llm_concurrency == 4


# ── WP3 telemetry ────────────────────────────────────────────────────────────

def test_one_line_carries_phase_times_and_quality_counters():
    r = RunReport(run_id=7, since="2026-08-01", until="2026-08-07",
                  trackers=["eu_cra"], schema_miss=0, parse_fallback=0,
                  llm_concurrency=4, elapsed_s=1234.0,
                  phase_s={"gate": 156.0, "summarize": 3180.4, "translate": 6420.9})
    line = r.one_line()
    assert "schema_miss 0 pfb 0" in line
    assert "x4" in line
    assert "phases gate 156s sum 3180s i18n 6421s" in line


def test_phase_times_lists_only_phases_that_ran():
    r = RunReport(phase_s={"summarize": 10.0})
    assert r._phase_times() == "sum 10s"
    assert RunReport()._phase_times() == "none"


def test_phase_times_are_in_pipeline_order_not_insertion_order():
    r = RunReport(phase_s={"translate": 2.0, "fetch": 1.0, "gate": 3.0})
    assert r._phase_times() == "fetch 1s gate 3s i18n 2s"


def test_finalize_reports_this_runs_counters_not_the_processes(tmp_path):
    # The dashboard runs several pipelines in one process; an absolute read of
    # llm.STATS would charge this run with the previous one's misses.
    import logging

    from tracker import llm
    from tracker.dedup import Store

    store = Store(tmp_path / "t.sqlite")
    rid = store.start_run("{}")
    rep = RunReport(run_id=rid)
    llm.STATS["schema_miss"] = 5           # left over from an earlier run
    stats0 = dict(llm.STATS)
    llm.STATS["schema_miss"] = 7           # this run added two
    orch._finalize(store, rep, 0.0, logging.getLogger("t"), stats0)
    assert rep.schema_miss == 2
