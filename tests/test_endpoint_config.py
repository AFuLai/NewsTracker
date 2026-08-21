"""The file-backed endpoint list behind the dashboard picker.

Why the file exists: the pipeline is launched through `wsl -e` (no login
shell), so an exported TRACKER_OLLAMA_URLS never reaches the dashboard and the
picker showed `local` and nothing else. `endpoints.json` is readable however
the process was started, and the panel edits it. The env var, when actually
set, still wins — these tests pin that precedence and the editing rules.
"""
import json

import pytest

import tracker.ollama_hosts as hosts
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


def _write(urls, preferred=None):
    data = {"urls": urls}
    if preferred:
        data["preferred"] = preferred
    hosts.CONFIG_PATH.write_text(json.dumps(data), "utf-8")


def _read():
    return json.loads(hosts.CONFIG_PATH.read_text("utf-8"))


def _healthy(monkeypatch, fn):
    monkeypatch.setattr(hosts, "healthy", lambda u, timeout=3.0: fn(u))


# -- where the list comes from ----------------------------------------------

def test_no_env_no_file_is_local_only():
    assert hosts.endpoints() == [LOCAL]


def test_file_supplies_the_list_when_env_is_unset():
    _write([LOCAL, R1, R2])
    assert hosts.endpoints() == [LOCAL, R1, R2]


def test_env_wins_over_the_file(monkeypatch):
    _write([LOCAL, R1])
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", R2)
    assert hosts.endpoints() == [R2]


def test_a_garbled_file_falls_back_to_local():
    hosts.CONFIG_PATH.write_text("{not json", "utf-8")
    assert hosts.endpoints() == [LOCAL]


def test_an_empty_url_list_falls_back_to_local():
    _write([])
    assert hosts.endpoints() == [LOCAL]


# -- add ---------------------------------------------------------------------

def test_add_appends_and_persists():
    _write([LOCAL])
    ok, msg = hosts.add_endpoint(R1 + "/")
    assert ok is True
    assert hosts.endpoints() == [LOCAL, R1]
    assert _read()["urls"] == [LOCAL, R1]


def test_add_onto_the_implicit_default_keeps_local():
    # No file yet: the effective list is [local], and adding a remote must not
    # silently drop it.
    ok, _ = hosts.add_endpoint(R1)
    assert ok is True
    assert hosts.endpoints() == [LOCAL, R1]


def test_add_refuses_a_duplicate():
    _write([LOCAL, R1])
    ok, msg = hosts.add_endpoint(R1)
    assert ok is False
    assert "already" in msg


def test_add_refuses_a_non_url():
    for bad in ("", "10.139.180.21:11434", "ftp://x", "http://"):
        ok, msg = hosts.add_endpoint(bad)
        assert ok is False, bad
    assert not hosts.CONFIG_PATH.exists()


def test_add_refuses_when_env_is_set(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", LOCAL)
    ok, msg = hosts.add_endpoint(R1)
    assert ok is False
    assert "TRACKER_OLLAMA_URLS" in msg


# -- remove ------------------------------------------------------------------

def test_remove_drops_and_persists():
    _write([LOCAL, R1, R2])
    ok, _ = hosts.remove_endpoint(R1)
    assert ok is True
    assert hosts.endpoints() == [LOCAL, R2]
    assert _read()["urls"] == [LOCAL, R2]


def test_remove_refuses_the_last_endpoint():
    _write([LOCAL])
    ok, msg = hosts.remove_endpoint(LOCAL)
    assert ok is False
    assert "last" in msg


def test_remove_refuses_an_unlisted_url():
    _write([LOCAL, R1])
    ok, _ = hosts.remove_endpoint(R2)
    assert ok is False


def test_removing_the_current_endpoint_clears_the_selection(monkeypatch):
    _write([LOCAL, R1])
    _healthy(monkeypatch, lambda u: True)
    assert hosts.use(R1)[0] is True
    assert hosts.selected() == R1
    ok, _ = hosts.remove_endpoint(R1)
    assert ok is True
    assert hosts.selected() is None


def test_remove_clears_a_preference_for_the_removed_url(monkeypatch):
    _write([LOCAL, R1, R2], preferred=R1)
    ok, _ = hosts.remove_endpoint(R1)
    assert ok is True
    assert "preferred" not in _read()


def test_remove_refuses_when_env_is_set(monkeypatch):
    _write([LOCAL, R1])
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{LOCAL},{R1}")
    ok, msg = hosts.remove_endpoint(R1)
    assert ok is False
    assert _read()["urls"] == [LOCAL, R1]


# -- the remembered choice ---------------------------------------------------

def test_use_persists_the_choice(monkeypatch):
    _write([LOCAL, R1, R2])
    _healthy(monkeypatch, lambda u: True)
    assert hosts.use(R2)[0] is True
    assert _read()["preferred"] == R2


def test_a_fresh_selection_prefers_the_remembered_choice(monkeypatch):
    _write([LOCAL, R1, R2], preferred=R2)
    _healthy(monkeypatch, lambda u: True)
    hosts.reset()   # a new run re-selects from scratch
    assert hosts.select() == R2


def test_a_dead_preference_falls_through_to_priority_order(monkeypatch):
    _write([LOCAL, R1, R2], preferred=R2)
    _healthy(monkeypatch, lambda u: u != R2)
    hosts.reset()
    assert hosts.select() == LOCAL


def test_a_preference_outside_the_window_is_not_admitted(monkeypatch):
    _write([LOCAL, R1], preferred=R1)
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "00:00-00:01")
    _healthy(monkeypatch, lambda u: True)
    hosts.reset()
    assert hosts.select() == LOCAL


def test_use_does_not_write_the_file_when_env_is_set(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", f"{LOCAL},{R1}")
    _healthy(monkeypatch, lambda u: True)
    assert hosts.use(R1)[0] is True
    assert not hosts.CONFIG_PATH.exists()


# -- the dashboard glue ------------------------------------------------------

def test_overview_reports_editability(monkeypatch):
    assert hosts.overview()["editable"] is True
    monkeypatch.setenv("TRACKER_OLLAMA_URLS", LOCAL)
    assert hosts.overview()["editable"] is False


def test_control_routes_add_and_remove():
    _write([LOCAL])
    ok, _ = _apply_control(None, {"cmd": "endpoint-add", "url": R1})
    assert ok is True
    assert hosts.endpoints() == [LOCAL, R1]
    ok, _ = _apply_control(None, {"cmd": "endpoint-remove", "url": R1})
    assert ok is True
    assert hosts.endpoints() == [LOCAL]


# -- labels ------------------------------------------------------------------

def test_a_labelled_endpoint_shows_its_machine_name():
    hosts.CONFIG_PATH.write_text(json.dumps(
        {"urls": [LOCAL, R1], "labels": {R1: "TWTY3PC1875"}}), "utf-8")
    assert hosts.label(R1) == "TWTY3PC1875 (10.139.180.21:11434)"
    assert hosts.label(LOCAL) == "local"
    assert hosts.label(R2) == "10.139.180.22:11434"


def test_editing_the_list_keeps_the_labels(monkeypatch):
    hosts.CONFIG_PATH.write_text(json.dumps(
        {"urls": [LOCAL, R1], "labels": {R1: "TWTY3PC1875"}}), "utf-8")
    assert hosts.add_endpoint(R2)[0] is True
    _healthy(monkeypatch, lambda u: True)
    assert hosts.use(R1)[0] is True
    assert _read()["labels"] == {R1: "TWTY3PC1875"}


# -- remote policy in the file -----------------------------------------------

def test_window_falls_back_to_the_file(monkeypatch):
    hosts.CONFIG_PATH.write_text(json.dumps(
        {"urls": [LOCAL, R1], "remote_window": "00:00-00:01"}), "utf-8")
    assert hosts.remote_allowed() is False
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "00:00-23:59")
    assert hosts.remote_allowed() is True   # env wins over the file


def test_concurrency_falls_back_to_the_file(monkeypatch):
    hosts.CONFIG_PATH.write_text(json.dumps(
        {"urls": [LOCAL, R1], "remote_concurrency": 2}), "utf-8")
    assert hosts.concurrency_for(R1) == 2
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_CONCURRENCY", "7")
    assert hosts.concurrency_for(R1) == 7


def test_set_policy_saves_and_clears():
    _write([LOCAL, R1])
    ok, _ = hosts.set_policy(window="18:00-08:00", concurrency="3")
    assert ok is True
    assert _read()["remote_window"] == "18:00-08:00"
    assert _read()["remote_concurrency"] == 3
    ok, _ = hosts.set_policy(window="", concurrency="")
    assert ok is True
    assert "remote_window" not in _read()
    assert "remote_concurrency" not in _read()


def test_set_policy_validates():
    ok, msg = hosts.set_policy(window="whenever")
    assert ok is False and "HH:MM" in msg
    ok, msg = hosts.set_policy(concurrency="0")
    assert ok is False and "positive" in msg
    ok, msg = hosts.set_policy(concurrency="abc")
    assert ok is False


def test_set_policy_refuses_an_env_pinned_field(monkeypatch):
    monkeypatch.setenv("TRACKER_OLLAMA_REMOTE_WINDOW", "18:00-08:00")
    ok, msg = hosts.set_policy(window="09:00-17:00")
    assert ok is False and "TRACKER_OLLAMA_REMOTE_WINDOW" in msg


def test_control_routes_policy():
    _write([LOCAL])
    ok, _ = _apply_control(None, {"cmd": "endpoint-policy",
                                  "window": "18:00-08:00", "concurrency": "4"})
    assert ok is True
    assert _read()["remote_window"] == "18:00-08:00"
