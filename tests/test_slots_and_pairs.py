"""Two counts the report was getting wrong.

`sem~30` was pair-instances, not pairs: one article cross-tagged into two
trackers makes its day render twice and the same duplicate surfaces in each
pass, so run #72 reported 30 where there were 17. A count that overstates the
evidence is worse than no count, because tau2 is calibrated against it.

The slot count was an honest unknown for any daemon this process did not
start — ollama does not report it over the API. Since ops/systemd/ollama.service
states the value, that unknown is now avoidable whenever systemd is what
started it.
"""
import logging
import subprocess

import pytest

import tracker.preflight as pf
from tracker.orchestrator import RunReport

LOG = logging.getLogger("t")


# -- slot count off the unit -------------------------------------------------

class _Run:
    def __init__(self, stdout=""):
        self.stdout = stdout
        self.returncode = 0


def _systemctl(monkeypatch, active="active", env="OLLAMA_NUM_PARALLEL=4"):
    calls = []

    def fake(argv, **kw):
        calls.append(argv)
        if "is-active" in argv:
            return _Run(active + "\n")
        return _Run(env + "\n")

    monkeypatch.setattr(pf.subprocess, "run", fake)
    return calls


def test_the_unit_supplies_the_slot_count(monkeypatch):
    _systemctl(monkeypatch)
    assert pf.local_slot_count() == 4


def test_the_value_is_picked_out_of_a_multi_variable_environment(monkeypatch):
    _systemctl(monkeypatch,
               env="OLLAMA_HOST=127.0.0.1:11434 OLLAMA_NUM_PARALLEL=8 X=1")
    assert pf.local_slot_count() == 8


def test_an_inactive_unit_tells_us_nothing(monkeypatch):
    _systemctl(monkeypatch, active="inactive")
    # An inactive unit describes a daemon that is not the one answering, so its
    # environment is not evidence about the daemon that is.
    assert pf.local_slot_count() is None


def test_a_unit_without_the_variable_is_unknown_not_one(monkeypatch):
    _systemctl(monkeypatch, env="OLLAMA_HOST=127.0.0.1:11434")
    assert pf.local_slot_count() is None


def test_a_machine_without_systemd_is_unknown_not_an_error(monkeypatch):
    def boom(argv, **kw):
        raise FileNotFoundError("systemctl")

    monkeypatch.setattr(pf.subprocess, "run", boom)
    assert pf.local_slot_count() is None


def test_a_hung_systemctl_is_unknown_not_a_stalled_run(monkeypatch):
    def slow(argv, **kw):
        raise subprocess.TimeoutExpired(argv, 5)

    monkeypatch.setattr(pf.subprocess, "run", slow)
    assert pf.local_slot_count() is None


def test_a_nonsense_value_is_unknown(monkeypatch):
    _systemctl(monkeypatch, env="OLLAMA_NUM_PARALLEL=lots")
    assert pf.local_slot_count() is None


# -- the report field --------------------------------------------------------

def test_unknown_slots_is_zero_not_one():
    # 0 and 1 mean different things: "we could not find out" and "the daemon
    # serves one request at a time". Reading the first as the second would
    # invent a bottleneck that may not exist.
    assert RunReport().ollama_slots == 0


def test_the_one_line_reports_distinct_pairs_without_a_tilde():
    r = RunReport(semantic_pairs=17)
    line = r.one_line()
    assert " sem17 " in line
    assert "sem~" not in line


def test_no_pairs_stays_silent():
    assert "sem" not in RunReport().one_line()


# -- distinct pairs, not sightings -------------------------------------------

def test_the_same_pair_seen_twice_counts_once(caplog):
    from tracker.orchestrator import _record_semantic_pair
    rep, seen = RunReport(), set()

    with caplog.at_level(logging.INFO):
        first = _record_semantic_pair(rep, seen, LOG, day="2026-08-19",
                                      a=8165, b=8216, sim=0.862, merged=False)
        again = _record_semantic_pair(rep, seen, LOG, day="2026-08-19",
                                      a=8165, b=8216, sim=0.862, merged=False)

    assert (first, again) == (True, False)
    assert rep.semantic_pairs == 1
    # And it is logged once: a reader counting semdedup lines gets the same
    # answer as the report.
    assert caplog.text.count("[semdedup]") == 1


def test_the_pair_is_unordered(caplog):
    from tracker.orchestrator import _record_semantic_pair
    rep, seen = RunReport(), set()

    _record_semantic_pair(rep, seen, LOG, day="d", a=2, b=1, sim=0.9, merged=False)
    _record_semantic_pair(rep, seen, LOG, day="d", a=1, b=2, sim=0.9, merged=False)

    assert rep.semantic_pairs == 1


def test_different_pairs_both_count():
    from tracker.orchestrator import _record_semantic_pair
    rep, seen = RunReport(), set()

    _record_semantic_pair(rep, seen, LOG, day="d", a=1, b=2, sim=0.9, merged=False)
    _record_semantic_pair(rep, seen, LOG, day="d", a=1, b=3, sim=0.9, merged=False)

    assert rep.semantic_pairs == 2


def test_shadow_and_enforce_say_which_one_happened(caplog):
    from tracker.orchestrator import _record_semantic_pair
    with caplog.at_level(logging.INFO):
        _record_semantic_pair(RunReport(), set(), LOG, day="d", a=1, b=2,
                              sim=0.9, merged=False)
        _record_semantic_pair(RunReport(), set(), LOG, day="d", a=3, b=4,
                              sim=0.9, merged=True)
    # Merging removes an article from the reader's view, so the log must never
    # leave "would have merged" and "did merge" looking the same.
    assert "(shadow, not merged)" in caplog.text
    assert caplog.text.count("(shadow, not merged)") == 1
