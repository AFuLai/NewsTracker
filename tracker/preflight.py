"""Dependency preflight checks.

ensure_ollama(): make sure the local ollama server is up; if not, start it in
the background (detached, survives this process) and wait for it. Left running
for next time.

ensure_browser(): some sources need a real JS-rendering browser (method=BROWSER).
We cannot reliably auto-launch a GUI Chrome, so if a debug Chrome
(--remote-debugging-port=9222) is not reachable we notify the user and let them
start it then retry, or cancel.
"""
from __future__ import annotations

import subprocess
import sys
import time

import httpx

from . import OLLAMA_URL


def ollama_up(timeout: float = 3.0) -> bool:
    try:
        return httpx.get(f"{OLLAMA_URL}/api/tags", timeout=timeout).status_code == 200
    except Exception:
        return False


def ensure_ollama(*, start_timeout: int = 40, console=None) -> bool:
    """Return True if ollama is (now) reachable. Auto-starts it in the
    background if down, and leaves it running."""
    def _say(msg):
        (console.print if console else print)(msg)

    if ollama_up():
        return True
    _say("[dim]ollama not running — starting it in the background…[/dim]"
         if console else "ollama not running — starting it in the background…")
    try:
        # detached: keeps running after tracker exits (start_new_session)
        subprocess.Popen(["ollama", "serve"],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                         start_new_session=True)
    except FileNotFoundError:
        _say("[red]ollama executable not found on PATH.[/red]"
             if console else "ollama executable not found on PATH.")
        return False
    for _ in range(start_timeout):
        time.sleep(1)
        if ollama_up():
            _say("[green]ollama is up.[/green]" if console else "ollama is up.")
            return True
    return False


# ── Debug Chrome (only needed for BROWSER-method sources) ────────────────────

def _candidate_cdp_bases() -> list[str]:
    bases = ["http://localhost:9222", "http://127.0.0.1:9222"]
    # WSL → Windows host (where the user's debug Chrome usually runs)
    try:
        out = subprocess.run(["ip", "route"], capture_output=True, text=True).stdout
        for line in out.splitlines():
            if line.startswith("default"):
                gw = line.split()[2]
                bases.append(f"http://{gw}:9222")
                break
    except Exception:
        pass
    return bases


def find_browser(timeout: float = 2.0) -> str | None:
    """Return the reachable CDP base URL of a debug Chrome, or None."""
    for base in _candidate_cdp_bases():
        try:
            if httpx.get(f"{base}/json/version", timeout=timeout).status_code == 200:
                return base
        except Exception:
            continue
    return None


def ensure_browser(*, interactive: bool = True, console=None) -> str | None:
    """Return a reachable debug-Chrome CDP base URL, or None if the user
    chooses to cancel. Prompts the user to start Chrome and retry."""
    def _say(msg):
        (console.print if console else print)(msg)

    base = find_browser()
    if base:
        return base
    _say("\n[yellow]需要除錯模式的 Chrome（debug Chrome）來處理需 JavaScript 渲染的來源，"
         "但目前偵測不到。[/yellow]" if console else
         "需要除錯模式的 Chrome（debug Chrome）來處理需 JS 渲染的來源，但目前偵測不到。")
    _say("請以除錯埠啟動 Chrome，例如：\n"
         "  chrome.exe --remote-debugging-port=9222\n"
         "（Windows 端啟動即可，WSL 會自動連到主機）")
    if not (interactive and sys.stdin.isatty()):
        _say("（非互動模式：略過 BROWSER 來源）" if console else
             "(non-interactive: skipping BROWSER sources)")
        return None
    while True:
        ans = input("啟動後按 Enter 重試，或輸入 c 取消：").strip().lower()
        if ans == "c":
            return None
        base = find_browser()
        if base:
            _say("[green]已連上 debug Chrome。[/green]" if console else "已連上 debug Chrome。")
            return base
        _say("仍偵測不到，請確認除錯埠 9222 已開啟。")
