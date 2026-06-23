"""Tests for the live pipeline Controller (pause/resume/restart/backend)."""
import threading
import time

import pytest

from tracker.control import Controller, ControlAbort


def test_pause_blocks_then_resume_releases():
    c = Controller()
    c.pause()
    released = []
    def worker():
        c.checkpoint()        # should block until resume
        released.append(time.time())
    t = threading.Thread(target=worker); t.start()
    time.sleep(0.2)
    assert not released       # still blocked
    c.resume()
    t.join(timeout=2)
    assert released           # released after resume


def test_restart_raises_controlabort_and_consume():
    c = Controller()
    c.request_restart("translate", force=True)
    with pytest.raises(ControlAbort):
        c.checkpoint()
    assert c.restart_pending()
    phase, force = c.consume_restart()
    assert phase == "translate" and force is True
    assert not c.restart_pending()
    # after consume, checkpoint no longer aborts
    c.checkpoint()


def test_restart_wakes_a_paused_checkpoint():
    c = Controller()
    c.pause()
    out = []
    def worker():
        try:
            c.checkpoint()
        except ControlAbort:
            out.append("abort")
    t = threading.Thread(target=worker); t.start()
    time.sleep(0.2)
    c.request_restart("summarize")   # must wake the paused checkpoint
    t.join(timeout=2)
    assert out == ["abort"]


def test_set_backend_and_snapshot():
    c = Controller(summarize_backend="gemini", translate_backend="ollama")
    assert c.snapshot()["backends"] == {"summarize": "gemini", "translate": "ollama"}
    c.set_backend("summarize", "ollama")
    assert c.backend_for("summarize") == "ollama"
    c.set_backend("summarize", "bogus")          # ignored
    assert c.backend_for("summarize") == "ollama"


def test_close():
    c = Controller()
    assert not c.closed
    c.close()
    assert c.closed


def test_config_start_gate():
    cfg = {"since": "2026-01-01", "until": "2026-01-05", "trackers": ["os"],
           "all_trackers": ["security", "os"], "gate": True, "limit": 300,
           "summarize_backend": "ollama", "translate_backend": "ollama"}
    c = Controller(config=cfg)
    assert not c.started()
    # invalid: since > until
    assert c.request_start({"since": "2026-02-01", "until": "2026-01-01",
                            "trackers": ["os"]}) is False
    assert not c.started()
    # invalid: no known tracker
    assert c.request_start({"trackers": ["bogus"]}) is False
    # valid: edits applied, run released
    assert c.request_start({"since": "2026-03-01", "until": "2026-03-10",
                            "trackers": ["security", "os"],
                            "summarize_backend": "gemini", "limit": "50"}) is True
    assert c.started()
    assert c.config["since"] == "2026-03-01" and c.config["trackers"] == ["security", "os"]
    assert c.config["limit"] == 50 and c.backend_for("summarize") == "gemini"


def test_close_unblocks_wait_for_start():
    c = Controller()
    c.close()
    c.wait_for_start()   # must return immediately, not hang
    assert c.closed
