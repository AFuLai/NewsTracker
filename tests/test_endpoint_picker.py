"""The dashboard endpoint picker: hosts.use(), hosts.overview(), and the
control action behind them.

The interesting half is `local`. Offering an endpoint in a dropdown and then
reporting it dead when the user picks it makes the user do the obvious next
step by hand, so choosing local while nothing is running starts the daemon. A
remote is only ever checked: we cannot start ollama on a machine we do not own.
"""
import pytest

import tracker.ollama_hosts as hosts
import tracker.preflight as pf
from tracker.web_dashboard import _apply_control

R1 = "http://10.139.180.21:11434"
R2 = "http://10.139.180.22:11434"
LOCAL = "http://localhost:11434"


@pytest.fixture(autouse=True)
def _clean(monkeypatch):
    for k in ("TRACKER_OLLAMA_URLS", "TRACKER_OLLAMA_REMOTE_WINDOW",
              "TRACKER_OLLAMA_REMOTE_CONCURRENCY"):
        monkeypatch.delenv(k, raising=False)
    hosts.reset()
    hosts._health.clear()
    yield
    hosts.reset()
    hosts._health.clear()


def _healthy(monkeypatch, fn):
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: fn(u))


# -- use() -------------------------------------------------------------------

def test_an_endpoint_that_is_not_configured_is_refused(monkeypatch):
    _healthy(monkeypatch, lambda u: True)
    ok, msg = hosts.use("http://192.0.2.1:11434")
    assert ok is False
    assert "not in TRACKER_OLLAMA_URLS" in msg
    assert hosts.selected() is None


def test_a_healthy_remote_is_pinned(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2},{LOCAL}")
    _healthy(monkeypatch, lambda u: True)

    ok, msg = hosts.use(R2)

    # Pinned, not re-derived: the user picked the second entry and the priority
    # order must not quietly put them back on the first.
    assert ok is True
    assert hosts.selected() == R2
    assert "10.139.180.22:11434" in msg


def test_a_dead_remote_is_refused_and_not_started(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    _healthy(monkeypatch, lambda u: False)
    monkeypatch.setattr(pf, "start_local_daemon",
                        lambda **k: pytest.fail("must not start anything for a remote"))

    ok, msg = hosts.use(R1)

    assert ok is False
    assert "not answering" in msg


def test_a_closed_window_refuses_a_remote_with_a_reason(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "18:00-08:00")
    monkeypatch.setattr(hosts, "remote_allowed", lambda now=None: False)
    _healthy(monkeypatch, lambda u: True)

    ok, msg = hosts.use(R1)

    # "is closed right now" and "is not answering" are different refusals, and
    # a bare failure makes the user guess which one they hit.
    assert ok is False
    assert "closed" in msg


def test_choosing_local_while_it_is_down_starts_it(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    started = []
    seq = iter([False, True])          # down when picked, up once started
    monkeypatch.setattr(hosts, "healthy",
                        lambda u, timeout=3.0: next(seq, True))

    def fake_start(**k):
        started.append(True)
        return True

    monkeypatch.setattr(pf, "start_local_daemon", fake_start)

    ok, msg = hosts.use(LOCAL)

    assert ok is True
    assert started == [True]
    assert hosts.selected() == LOCAL


def test_a_local_daemon_that_will_not_start_says_where_to_look(monkeypatch):
    _healthy(monkeypatch, lambda u: False)
    monkeypatch.setattr(pf, "start_local_daemon", lambda **k: False)

    ok, msg = hosts.use(LOCAL)

    assert ok is False
    assert "ollama-serve.log" in msg
    assert hosts.selected() is None


def test_pinning_clears_an_earlier_demotion(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{R2}")
    _healthy(monkeypatch, lambda u: True)
    hosts.select()
    hosts.demote(R1, "ConnectError")
    assert hosts.selected() == R2

    # The user knows something the process does not — the host is back.
    ok, _ = hosts.use(R1)
    assert ok is True
    assert hosts.selected() == R1


# -- overview() --------------------------------------------------------------

def test_overview_marks_the_one_in_use(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    _healthy(monkeypatch, lambda u: True)
    hosts.use(R1)

    ov = hosts.overview()

    assert ov["selected_url"] == R1
    assert [e["current"] for e in ov["endpoints"]] == [True, False]
    assert [e["local"] for e in ov["endpoints"]] == [False, True]


def test_overview_separates_unknown_from_down(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", R1)
    monkeypatch.setattr(hosts, "_refresh_async", lambda: None)

    # Never probed: the picker draws a hollow dot, not a red one. "We have not
    # asked yet" and "it answered no" are different facts.
    assert hosts.overview()["endpoints"][0]["up"] is None

    hosts._health[R1] = (1.0, False)
    assert hosts.overview()["endpoints"][0]["up"] is False


def test_overview_reports_a_closed_window_per_endpoint(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    monkeypatch.setattr(hosts, "remote_allowed", lambda now=None: False)
    monkeypatch.setattr(hosts, "_refresh_async", lambda: None)

    ov = hosts.overview()

    assert ov["remote_allowed"] is False
    assert [e["allowed"] for e in ov["endpoints"]] == [False, True]


# -- the control action ------------------------------------------------------

def test_the_control_action_works_with_no_run_in_flight(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{R1},{LOCAL}")
    _healthy(monkeypatch, lambda u: True)

    # Which ollama serves this box is process-wide, and the picker is most
    # useful before a run exists at all.
    ok, msg = _apply_control(None, {"cmd": "endpoint", "url": R1})

    assert ok is True
    assert hosts.selected() == R1


def test_the_control_action_passes_the_refusal_through(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", R1)
    _healthy(monkeypatch, lambda u: False)

    ok, msg = _apply_control(None, {"cmd": "endpoint", "url": R1})

    assert ok is False
    assert "not answering" in msg


def test_other_actions_still_need_a_controller():
    ok, msg = _apply_control(None, {"cmd": "pause"})
    assert ok is False
    assert msg == "no run to control"
