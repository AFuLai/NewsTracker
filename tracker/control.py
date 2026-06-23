"""Live pipeline control: pause / resume / restart-from-stage / live backend.

A single Controller is shared between the web dashboard (which sets commands via
POST /control) and the orchestrator (which obeys them at checkpoints). The
orchestrator calls `checkpoint()` between phases and between articles; that call
blocks while paused and raises ControlAbort when a restart is requested — the CLI
catches it and re-runs the pipeline from the chosen stage.
"""
from __future__ import annotations

import threading

PHASES = ["fetch", "gate", "summarize", "translate", "write", "cleanup"]
ROLES = ("summarize", "translate")
BACKENDS = ("ollama", "gemini")


class ControlAbort(Exception):
    """Raised at a checkpoint when a restart-from-stage was requested."""


class Controller:
    def __init__(self, *, summarize_backend: str = "ollama",
                 translate_backend: str = "ollama"):
        self._lock = threading.Lock()
        self._resumed = threading.Event()
        self._resumed.set()                 # set = running, clear = paused
        self.paused = False
        self._abort = False
        self._restart_from: str | None = None
        self._force = False
        self.closed = False
        self.backends = {"summarize": summarize_backend, "translate": translate_backend}

    # ── commands (called from the web server thread) ────────────────────────
    def pause(self):
        with self._lock:
            self.paused = True
            self._resumed.clear()

    def resume(self):
        with self._lock:
            self.paused = False
            self._resumed.set()

    def request_restart(self, phase: str, force: bool = False):
        if phase not in PHASES:
            return
        with self._lock:
            self._restart_from = phase
            self._force = bool(force)
            self._abort = True
        self._resumed.set()   # wake a paused checkpoint so the abort propagates

    def set_backend(self, role: str, backend: str):
        if role in ROLES and backend in BACKENDS:
            with self._lock:
                self.backends[role] = backend

    def close(self):
        """Stop the session: abort at the next checkpoint and exit (no restart)."""
        with self._lock:
            self.closed = True
            self._abort = True
        self._resumed.set()

    def restart_pending(self) -> bool:
        with self._lock:
            return self._restart_from is not None

    # ── consumed by the orchestrator / CLI ──────────────────────────────────
    def checkpoint(self):
        """Block while paused; raise ControlAbort if a restart was requested."""
        self._resumed.wait()
        if self._abort:
            raise ControlAbort()

    def consume_restart(self) -> tuple[str | None, bool]:
        with self._lock:
            r, f = self._restart_from, self._force
            self._restart_from = None
            self._force = False
            self._abort = False
            self._resumed.set()
            self.paused = False
            return r, f

    def backend_for(self, role: str) -> str:
        with self._lock:
            return self.backends.get(role, "ollama")

    def snapshot(self) -> dict:
        with self._lock:
            return {"paused": self.paused, "backends": dict(self.backends)}
