"""Periodic update for the standalone install, run by the program itself.

No Task Scheduler, no cron: while the console (`NewsTracker.cmd`) or the
headless `NewsTracker.cmd scheduler` is running, a background thread checks
settings.schedule every few seconds and, when an update is due, starts
`python -m tracker.cli daily --days N [--deploy|--no-deploy]` as a child
process. The child takes the portable run lock, so a scheduled run and a run
started from the console can never write the database at the same time; a
due slot that finds the lock held is recorded as skipped and the next slot
is awaited.

Settings are re-read on every tick, so saving the console form takes effect
without a restart. Runs missed while the program was closed are not caught
up: the schedule says "at these times while running", and a burst of
catch-up runs after a weekend off is not what anyone wants.

State (last run, result, next run) is kept in <home>/schedule-state.json so
the console can show it and it survives a restart.
"""
from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import threading
import time
from datetime import datetime, timedelta
from pathlib import Path

from . import settings

_TIME = re.compile(r"^([01]\d|2[0-3]):[0-5]\d$")
TICK_SECONDS = 15


class ScheduleError(RuntimeError):
    pass


def validate(sch: dict) -> dict:
    """Normalised schedule settings, or ScheduleError with a user-facing reason."""
    mode = sch.get("mode", "daily")
    if mode not in ("daily", "hourly"):
        raise ScheduleError("mode 必須是 daily 或 hourly")
    t = str(sch.get("time", "07:30")).strip()
    if not _TIME.match(t):
        raise ScheduleError("時間格式需為 HH:MM（24 小時制）")
    try:
        every = int(sch.get("every_hours", 6))
        days = int(sch.get("days", 3))
    except (TypeError, ValueError):
        raise ScheduleError("間隔與天數需為整數") from None
    if not 1 <= every <= 23:
        raise ScheduleError("每 N 小時：N 需在 1～23")
    if not 1 <= days <= 30:
        raise ScheduleError("更新天數需在 1～30")
    return {"enabled": bool(sch.get("enabled")), "mode": mode, "time": t,
            "every_hours": every, "days": days, "deploy": bool(sch.get("deploy"))}


def next_due(sch: dict, now: datetime) -> datetime:
    """The first scheduled moment strictly after `now` (pure; tested).

    daily: today's (or tomorrow's) HH:MM. hourly: HH:MM, HH:MM+N, ... until the
    next day's HH:MM, where the cycle restarts (08:00 every 5 h → 08, 13, 18,
    23, 04, then 08 again).
    """
    s = validate(sch)
    hh, mm = (int(x) for x in s["time"].split(":"))
    base = now.replace(hour=hh, minute=mm, second=0, microsecond=0)
    if s["mode"] == "daily":
        return base if base > now else base + timedelta(days=1)
    step = timedelta(hours=s["every_hours"])
    for day in (base - timedelta(days=1), base, base + timedelta(days=1)):
        t = day
        while t < day + timedelta(days=1):
            if t > now:
                return t
            t += step
    return base + timedelta(days=1)  # unreachable


def command(sch: dict) -> list[str]:
    """argv of the child process for one scheduled run (pure; tested)."""
    s = validate(sch)
    return [sys.executable, "-m", "tracker.cli", "daily", "--days", str(s["days"]),
            "--deploy" if s["deploy"] else "--no-deploy"]


def _state_path() -> Path | None:
    h = settings.home()
    return (h / "schedule-state.json") if h else None


def _load_state() -> dict:
    p = _state_path()
    try:
        return json.loads(p.read_text(encoding="utf-8")) if p and p.exists() else {}
    except (OSError, ValueError):
        return {}


def _save_state(state: dict) -> None:
    p = _state_path()
    if p is None:
        return
    try:
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(state, ensure_ascii=False, indent=1), encoding="utf-8")
    except OSError:
        pass


def _fmt(t: datetime | None) -> str:
    return t.strftime("%Y-%m-%d %H:%M") if t else ""


class Scheduler:
    """One background thread per process; start() is idempotent."""

    def __init__(self, *, popen=subprocess.Popen, clock=datetime.now):
        self._popen, self._clock = popen, clock
        self._lock = threading.Lock()
        self._thread: threading.Thread | None = None
        self._stop = threading.Event()
        self._proc = None
        self._sch: dict | None = None
        self._next: datetime | None = None
        self.state = _load_state()
        if self.state.get("running"):       # program was closed mid-run
            self.state.update(running=False, last_result="結果未知（執行中程式被關閉）")

    # -- lifecycle -----------------------------------------------------------
    def start(self) -> None:
        if self._thread and self._thread.is_alive():
            return
        self._stop.clear()
        self._thread = threading.Thread(target=self._loop, name="nt-scheduler", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()

    def _loop(self) -> None:
        while not self._stop.is_set():
            try:
                self.tick()
            except Exception as exc:  # never let the thread die silently
                self._record(last_result=f"排程錯誤：{exc}")
            self._stop.wait(TICK_SECONDS)

    # -- one step (tests drive this directly) ---------------------------------
    def tick(self) -> None:
        now = self._clock()
        try:
            sch = validate(settings.load()["schedule"])
        except ScheduleError:
            sch = None
        with self._lock:
            self._reap()
            if not sch or not sch["enabled"]:
                self._sch, self._next = sch, None
                return
            if sch != self._sch or self._next is None:
                # (Re)arm from now: a changed schedule never fires immediately.
                self._sch, self._next = sch, next_due(sch, now)
                self._record(next_run=_fmt(self._next))
                return
            if now >= self._next:
                self._launch(sch, now)
                self._next = next_due(sch, now)
                self._record(next_run=_fmt(self._next))

    def run_now(self) -> str:
        try:
            sch = validate(settings.load()["schedule"])
        except ScheduleError as exc:
            raise ScheduleError(str(exc)) from None
        with self._lock:
            self._reap()
            if self._proc is not None:
                raise ScheduleError("排程更新正在執行中")
            if not self._launch(sch, self._clock()):
                raise ScheduleError(self.state.get("last_result") or "無法啟動")
        return "已開始執行一次（背景執行，完成後會顯示結果）"

    # -- child process --------------------------------------------------------
    def _launch(self, sch: dict, now: datetime) -> bool:
        if self._proc is not None:          # previous run still going: skip slot
            self._record(last_result="略過：上一次排程更新尚未結束")
            return False
        from . import DEFAULT_DB, LOGS_DIR
        from .runlock import acquire
        held = acquire(DEFAULT_DB)          # a console run in progress?
        if held is None:
            self._record(last_run=_fmt(now), last_result="略過：另一個更新正在執行")
            return False
        held.close()
        log = None
        try:
            LOGS_DIR.mkdir(parents=True, exist_ok=True)
            log = open(LOGS_DIR / f"schedule-{now:%Y%m%d-%H%M}.log", "ab")
        except OSError:
            log = None
        kw = {"cwd": str(settings.INSTALL_DIR), "stdin": subprocess.DEVNULL,
              "stdout": log or subprocess.DEVNULL, "stderr": subprocess.STDOUT,
              "env": dict(os.environ, PYTHONUTF8="1", PYTHONIOENCODING="utf-8")}
        if os.name == "nt":
            kw["creationflags"] = getattr(subprocess, "CREATE_NO_WINDOW", 0)
        try:
            self._proc = self._popen(command(sch), **kw)
        except OSError as exc:
            self._record(last_run=_fmt(now), last_result=f"無法啟動：{exc}")
            return False
        finally:
            if log:
                log.close()                 # the child holds its own handle
        self._record(last_run=_fmt(now), last_result="執行中", running=True)
        return True

    def _reap(self) -> None:
        p = self._proc
        if p is None or p.poll() is None:
            return
        self._proc = None
        rc = p.returncode
        res = "成功" if rc == 0 else f"失敗（代碼 {rc}，詳見 logs\\schedule-*.log）"
        self._record(last_result=res, running=False)

    def _record(self, **kv) -> None:
        self.state.update(kv)
        _save_state(self.state)

    # -- what the console shows ----------------------------------------------
    def status(self) -> dict:
        with self._lock:
            self._reap()
            active = bool(self._thread and self._thread.is_alive())
            return {"active": active, "enabled": bool(self._sch and self._sch["enabled"]),
                    "next_run": _fmt(self._next) if self._next else "",
                    "last_run": self.state.get("last_run", ""),
                    "last_result": self.state.get("last_result", ""),
                    "running": self._proc is not None}


_SCHED: Scheduler | None = None


def scheduler() -> Scheduler:
    global _SCHED
    if _SCHED is None:
        _SCHED = Scheduler()
    return _SCHED
