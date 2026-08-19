"""Ordered ollama endpoints: policy, selection, and failover.

Two LAN machines run the same gemma4:e4b as this box roughly 4x faster
(ops/phase0/ACCEPTANCE.md). They also belong to other people, so what this
module mostly encodes is restraint: off by default, bounded in-flight, and
skippable by time of day.
"""
from datetime import datetime

import httpx
import pytest

import tracker.ollama_hosts as hosts

R1 = "http://10.139.180.21:11434"
R2 = "http://10.139.180.22:11434"
LOCAL = "http://localhost:11434"


@pytest.fixture(autouse=True)
def _clean(monkeypatch):
    for k in ("TRACKER_OLLAMA_URLS", "TRACKER_OLLAMA_REMOTE_WINDOW",
              "TRACKER_OLLAMA_REMOTE_CONCURRENCY", "TRACKER_LLM_CONCURRENCY"):
        monkeypatch.delenv(k, raising=False)
    hosts.reset()
    yield
    hosts.reset()


# -- configuration -----------------------------------------------------------

def test_unset_means_local_only():
    # The feature is off unless someone names a remote. Nothing reaches the
    # network by default.
    assert hosts.endpoints() == [LOCAL]
    assert hosts.describe() == "local only"


def test_the_list_keeps_its_order_and_tolerates_whitespace(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f" {R1} , {R2}/ ,{LOCAL}")
    assert hosts.endpoints() == [R1, R2, LOCAL]


def test_an_empty_list_falls_back_to_local(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", " , ")
    assert hosts.endpoints() == [LOCAL]


def test_is_local_and_label():
    assert hosts.is_local(LOCAL) and hosts.is_local("http://127.0.0.1:11434")
    assert not hosts.is_local(R1)
    assert hosts.label(LOCAL) == "local"
    assert hosts.label(R1) == "10.139.180.21:11434"


# -- the time window ---------------------------------------------------------

def test_no_window_means_always_allowed():
    assert hosts.remote_allowed() is True


def test_a_window_that_wraps_midnight(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "18:00-08:00")

    def at(h, m=0):
        return datetime(2026, 8, 19, h, m)

    assert hosts.remote_allowed(at(23)) is True       # evening
    assert hosts.remote_allowed(at(3)) is True        # small hours
    assert hosts.remote_allowed(at(9)) is False       # office hours
    assert hosts.remote_allowed(at(8)) is False       # end is exclusive
    assert hosts.remote_allowed(at(18)) is True       # start is inclusive


def test_a_window_within_one_day(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "01:00-05:00")

    def at(h):
        return datetime(2026, 8, 19, h)

    assert hosts.remote_allowed(at(3)) is True
    assert hosts.remote_allowed(at(6)) is False
    assert hosts.remote_allowed(at(0)) is False


def test_a_malformed_window_does_not_block_the_run(monkeypatch):
    # Fail-open, like every other policy in this pipeline: a typo in an
    # environment variable must not silently halve the throughput.
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "evenings")
    assert hosts.remote_allowed() is True


def test_a_closed_window_drops_the_remotes_from_the_candidates(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2},{LOCAL}")
    monkeypatch.setattr(hosts, "remote_allowed", lambda now=None: False)
    assert hosts.candidates() == [LOCAL]


# -- selection ---------------------------------------------------------------

def test_selection_takes_the_first_healthy_endpoint_in_order(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2},{LOCAL}")
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: u != R1)
    assert hosts.select() == R2


def test_selection_is_cached_until_forced(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    probes = []

    def probe(u, timeout=3.0):
        probes.append(u)
        return True

    monkeypatch.setattr(hosts, "healthy", probe)
    assert hosts.select() == R1
    assert hosts.select() == R1
    assert probes == [R1]                    # one round trip, not two
    hosts.select(force=True)
    assert probes == [R1, R1]


def test_selected_never_probes(monkeypatch):
    def boom(u, timeout=3.0):
        pytest.fail("selected() must not probe")

    monkeypatch.setattr(hosts, "healthy", boom)
    assert hosts.selected() is None          # the per-phase worker count reads this


def test_nothing_healthy_selects_nothing(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: False)
    assert hosts.select() is None


# -- failover ----------------------------------------------------------------

def test_demote_moves_to_the_next_endpoint_and_remembers_the_dead_one(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2},{LOCAL}")
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: True)
    assert hosts.select() == R1
    assert hosts.demote(R1, "ConnectError") == R2
    # R1 stays out even though it would probe healthy: it just refused a
    # request, and re-picking it every call would be a retry loop.
    assert hosts.select() == R2


def test_demoting_the_last_endpoint_returns_nothing(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", R1)
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: True)
    hosts.select()
    assert hosts.demote(R1, "ConnectError") is None


class _Resp:
    def raise_for_status(self):
        pass

    def json(self):
        return {"response": "ok"}


def test_a_delivery_failure_retries_on_the_next_endpoint(monkeypatch):
    import tracker.llm as L
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2}")
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: True)
    hosts.select()
    L.STATS["endpoint_failover"] = 0
    seen = []

    def fake_post(url, **kw):
        seen.append(url)
        if url.startswith(R1):
            raise httpx.ConnectError("refused")
        return _Resp()

    monkeypatch.setattr(L.httpx, "post", fake_post)
    assert L._post_ollama({"model": "m", "prompt": "p"}, 10.0) == "ok"
    assert seen == [f"{R1}/api/generate", f"{R2}/api/generate"]
    assert L.STATS["endpoint_failover"] == 1


def test_a_bad_answer_does_not_demote_the_endpoint(monkeypatch):
    import tracker.llm as L
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2}")
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: True)
    hosts.select()

    def fake_post(url, **kw):
        raise httpx.ReadTimeout("model is thinking")

    monkeypatch.setattr(L.httpx, "post", fake_post)
    with pytest.raises(httpx.ReadTimeout):
        L._post_ollama({"model": "m", "prompt": "p"}, 10.0)
    # A slow or unhappy answer is a problem with the prompt, not the host.
    # Moving a whole run off an endpoint because one article upset the model
    # would be the wrong trade.
    assert hosts.selected() == R1


# -- concurrency -------------------------------------------------------------

def test_local_uses_the_local_worker_count(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "6")
    assert hosts.concurrency_for(LOCAL) == 6
    assert hosts.concurrency_for(None) == 6


def test_a_remote_is_capped_separately(monkeypatch):
    monkeypatch.setenv("TRACKER_LLM_CONCURRENCY", "16")
    # Not ours to assume: 16 workers against a desktop that belongs to someone
    # else is not a throughput decision, it is a resource claim.
    assert hosts.concurrency_for(R1) == hosts.DEFAULT_REMOTE_CONCURRENCY
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_CONCURRENCY", "2")
    assert hosts.concurrency_for(R1) == 2


def test_a_nonsense_remote_cap_degrades_to_the_default(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_CONCURRENCY", "plenty")
    assert hosts.concurrency_for(R1) == hosts.DEFAULT_REMOTE_CONCURRENCY
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_CONCURRENCY", "0")
    assert hosts.concurrency_for(R1) == 1
