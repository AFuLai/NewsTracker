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
