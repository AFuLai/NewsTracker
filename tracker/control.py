"""Live pipeline control: pause / resume / restart-from-stage / live backend.

A single Controller is shared between the web dashboard (which sets commands via
POST /control) and the orchestrator (which obeys them at checkpoints). The
orchestrator calls `checkpoint()` between phases and between articles; that call
blocks while paused and raises ControlAbort when a restart is requested — the CLI
catches it and re-runs the pipeline from the chosen stage.

CraLibJob is the same idea for the CRA reference library: the dashboard starts a
`tracker cra-lib` sync in a background thread and polls its state. It is
deliberately independent of the pipeline run — the library is a separate
catalogue and can be refreshed before, after, or instead of a news run.
"""
from __future__ import annotations

import threading
import time

PHASES = ["fetch", "gate", "summarize", "translate", "write", "cleanup"]
ROLES = ("summarize", "translate")
BACKENDS = ("ollama", "gemini")


class ControlAbort(Exception):
    """Raised at a checkpoint when a restart-from-stage was requested."""


_EDITABLE = ("since", "until", "trackers", "gate", "translate", "cleanup",
             "limit", "summarize_backend", "translate_backend", "gemini_model")


class Controller:
    def __init__(self, *, summarize_backend: str = "ollama",
                 translate_backend: str = "ollama", config: dict | None = None):
        self._lock = threading.Lock()
        self._resumed = threading.Event()
        self._resumed.set()                 # set = running, clear = paused
        self.paused = False
        self._abort = False
        self._restart_from: str | None = None
        self._force = False
        self.closed = False
        self.backends = {"summarize": summarize_backend, "translate": translate_backend}
        # Pre-run config gate: the UI reviews/edits these, then clicks Start.
        self.config = dict(config or {})
        self._started = threading.Event()

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
        self._started.set()    # unblock a wait_for_start() if closed before starting

    # ── pre-run config gate ─────────────────────────────────────────────────
    def request_start(self, incoming: dict | None) -> bool:
        """Validate + apply the (possibly UI-edited) config and release the run."""
        incoming = incoming or {}
        cfg = self.config
        since = incoming.get("since", cfg.get("since"))
        until = incoming.get("until", cfg.get("until"))
        try:
            from datetime import date
            if date.fromisoformat(since) > date.fromisoformat(until):
                return False
        except Exception:
            return False
        allt = cfg.get("all_trackers", [])
        trackers = [t for t in (incoming.get("trackers") or cfg.get("trackers") or [])
                    if t in allt]
        if not trackers:
            return False
        with self._lock:
            cfg["since"], cfg["until"], cfg["trackers"] = since, until, trackers
            for k in ("gate", "translate", "cleanup", "summarize_backend",
                      "translate_backend", "gemini_model"):
                if k in incoming:
                    cfg[k] = incoming[k]
            if "limit" in incoming:
                try:
                    cfg["limit"] = int(incoming["limit"])
                except (TypeError, ValueError):
                    pass
            self.backends["summarize"] = cfg.get("summarize_backend", "ollama")
            self.backends["translate"] = cfg.get("translate_backend", "ollama")
        self._started.set()
        return True

    def wait_for_start(self):
        self._started.wait()

    def started(self) -> bool:
        return self._started.is_set()

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
            return {"paused": self.paused, "backends": dict(self.backends),
                    "started": self._started.is_set(), "config": dict(self.config)}


class CraLibJob:
    """A one-at-a-time CRA library sync driven from the dashboard.

    `start()` spawns a daemon thread running cra_library.sync() (+ emit_js) and
    returns False if a sync is already in flight. `snapshot()` is what the page
    polls: status, live progress, and the last run's report.
    """

    def __init__(self, *, db, out, emit: bool = True, sync=None, emit_js=None):
        self.db = db
        self.out = out
        self.emit = emit
        self._sync = sync            # injectable for tests
        self._emit_js = emit_js
        self._lock = threading.Lock()
        self._thread: threading.Thread | None = None
        self.status = "idle"         # idle | running | done | failed
        self.done = 0
        self.total = 0
        self.note = ""
        self.started_at = 0.0
        self.elapsed = 0.0
        self.report: dict | None = None
        self.error: str | None = None
        self.emitted: str | None = None

    # ── command (called from the web server thread) ─────────────────────────
    def start(self) -> bool:
        with self._lock:
            if self.status == "running":
                return False
            self.status = "running"
            self.done = self.total = 0
            self.note = ""
            self.report = None
            self.error = None
            self.emitted = None
            self.started_at = time.time()
            self.elapsed = 0.0
            self._thread = threading.Thread(target=self._run, daemon=True)
            self._thread.start()
            return True

    def running(self) -> bool:
        with self._lock:
            return self.status == "running"

    # ── worker ──────────────────────────────────────────────────────────────
    def _progress(self, done, total, note=""):
        with self._lock:
            self.done, self.total, self.note = done, total, note or ""
            self.elapsed = time.time() - self.started_at

    def _run(self):
        sync, emit_js = self._sync, self._emit_js
        if sync is None or emit_js is None:
            from .cra_library import sync as _s, emit_js as _e
            sync = sync or _s
            emit_js = emit_js or _e
        try:
            rep = sync(self.db, progress=self._progress)
            emitted = str(emit_js(self.db, self.out)) if self.emit else None
        except Exception as exc:
            with self._lock:
                self.status = "failed"
                self.error = f"{type(exc).__name__}: {exc}"
                self.note = ""
                self.elapsed = time.time() - self.started_at
            return
        with self._lock:
            self.status = "done"
            self.report = rep
            self.emitted = emitted
            self.note = ""
            self.elapsed = time.time() - self.started_at

    # ── snapshot for the web page ───────────────────────────────────────────
    def snapshot(self) -> dict:
        with self._lock:
            elapsed = (time.time() - self.started_at) if self.status == "running" \
                else self.elapsed
            rep = self.report
            summary = None
            if rep is not None:
                summary = {
                    "new": [_topic(t) for t in rep["new"]],
                    "updated": [_topic(t) for t in rep["updated"]],
                    "removed": [_topic(t) for t in rep["removed"]],
                    "unchanged": rep["unchanged"],
                    "errors": list(rep["errors"]),
                }
            return {"status": self.status, "done": self.done, "total": self.total,
                    "note": self.note, "elapsed": elapsed, "error": self.error,
                    "emitted": self.emitted, "report": summary}


def _topic(t: dict) -> dict:
    return {"title": t.get("title") or t.get("url") or "",
            "url": t.get("url", ""), "cluster": t.get("cluster") or "",
            "source": t.get("source") or ""}
