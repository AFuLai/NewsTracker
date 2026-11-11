"""Periodic update on native Windows: one Task Scheduler task, NewsTracker\\daily.

The task runs `<install>\\NewsTracker.cmd daily --days N [--deploy|--no-deploy]`
as the current user, only while that user is logged on (no stored password,
nothing elevated). The console writes settings.schedule and calls apply();
`query()` reads the task back so the page shows what Windows actually has,
not what we think we told it.

On WSL the existing systemd/cron arrangement stays; apply() refuses there.
"""
from __future__ import annotations

import os
import re
import subprocess
from pathlib import Path

from . import settings

TASK_NAME = r"NewsTracker\daily"
_TIME = re.compile(r"^([01]\d|2[0-3]):[0-5]\d$")


class ScheduleError(RuntimeError):
    pass


def launcher() -> Path:
    return settings.INSTALL_DIR / "NewsTracker.cmd"


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


def create_args(sch: dict, cmd: Path | None = None) -> list[str]:
    """schtasks arguments that (re)create the task for `sch` (pure; tested)."""
    s = validate(sch)
    cmd = cmd or launcher()
    tr = f'"{cmd}" daily --days {s["days"]} {"--deploy" if s["deploy"] else "--no-deploy"}'
    args = ["schtasks", "/Create", "/F", "/TN", TASK_NAME, "/TR", tr, "/ST", s["time"]]
    if s["mode"] == "daily":
        args += ["/SC", "DAILY"]
    else:
        args += ["/SC", "HOURLY", "/MO", str(s["every_hours"])]
    return args


def _run(args: list[str]) -> subprocess.CompletedProcess:
    if os.name != "nt":
        raise ScheduleError("排程只在 Windows 原生版提供（WSL 版沿用既有排程）")
    return subprocess.run(args, capture_output=True, text=True, timeout=60,
                          encoding="mbcs", errors="replace")


def apply(sch: dict) -> str:
    """Create/replace the task when enabled, delete it when disabled. Returns a message."""
    s = validate(sch)
    if not s["enabled"]:
        p = _run(["schtasks", "/Delete", "/F", "/TN", TASK_NAME])
        return "已停用定期更新" if p.returncode == 0 else "已停用（原本就沒有排程）"
    p = _run(create_args(s))
    if p.returncode != 0:
        raise ScheduleError((p.stderr or p.stdout or "schtasks failed").strip())
    return ("已設定：每天 %s" % s["time"]) if s["mode"] == "daily" else \
        ("已設定：自 %s 起每 %d 小時" % (s["time"], s["every_hours"]))


def query() -> dict:
    """What Windows has: {exists, next_run, last_run, last_result} (best-effort)."""
    try:
        p = _run(["schtasks", "/Query", "/TN", TASK_NAME, "/FO", "LIST", "/V"])
    except (ScheduleError, OSError, subprocess.SubprocessError):
        return {"exists": False}
    if p.returncode != 0:
        return {"exists": False}
    info = {"exists": True}
    for line in p.stdout.splitlines():
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        k, v = k.strip().lower(), v.strip()
        if k in ("next run time", "下次執行時間"):
            info["next_run"] = v
        elif k in ("last run time", "上次執行時間"):
            info["last_run"] = v
        elif k in ("last result", "上次結果"):
            info["last_result"] = v
    return info


def run_now() -> str:
    p = _run(["schtasks", "/Run", "/TN", TASK_NAME])
    if p.returncode != 0:
        raise ScheduleError((p.stderr or p.stdout or "schtasks /Run failed").strip())
    return "已開始執行一次"
