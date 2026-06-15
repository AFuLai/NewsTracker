"""Live execution dashboard for the pipeline.

Shows the planned phases, which one is running, a progress bar + ETA for the
long phases (gate / summarize), elapsed time, and the current item. On finish
it prints a compact summary. Clean and readable, not flashy.

The orchestrator drives a Reporter; NullReporter is a no-op (headless / --quiet),
LiveReporter renders a rich.Live panel.
"""
from __future__ import annotations

import time
from dataclasses import dataclass, field

from rich.console import Console, Group
from rich.live import Live
from rich.panel import Panel
from rich.table import Table
from rich.text import Text


def _fmt(secs: float) -> str:
    secs = int(max(0, secs))
    h, rem = divmod(secs, 3600)
    m, s = divmod(rem, 60)
    return f"{h:d}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"


@dataclass
class _Phase:
    key: str
    label: str
    status: str = "pending"     # pending | running | done | failed
    result: str = ""
    done: int = 0
    total: int = 0
    started_at: float = 0.0


# ── Reporter interface (NullReporter = no-op) ────────────────────────────────

class NullReporter:
    def begin(self, *, since, until, trackers, phases): ...
    def enter(self, key, status=""): ...
    def note(self, text): ...
    def tick(self, done, total, note=""): ...
    def result(self, key, text, *, failed=False): ...
    def summary(self, rep): ...
    def __enter__(self): return self
    def __exit__(self, *a): ...


class LiveReporter(NullReporter):
    def __init__(self, console: Console | None = None):
        self.console = console or Console()
        self.phases: list[_Phase] = []
        self.by_key: dict[str, _Phase] = {}
        self.title = ""
        self.t0 = time.time()
        self.current: str | None = None
        self.note_text = ""
        self._live: Live | None = None

    # context manager so Live starts/stops cleanly
    def __enter__(self):
        self._live = Live(self._render(), console=self.console,
                          refresh_per_second=4, transient=False)
        self._live.__enter__()
        return self

    def __exit__(self, *a):
        if self._live:
            self._live.update(self._render())
            self._live.__exit__(*a)

    def begin(self, *, since, until, trackers, phases):
        self.title = f"{since}..{until} · [{', '.join(trackers)}]"
        self.phases = [_Phase(k, lbl) for k, lbl in phases]
        self.by_key = {p.key: p for p in self.phases}
        self.t0 = time.time()
        self._refresh()

    def enter(self, key, status=""):
        p = self.by_key.get(key)
        if not p:
            return
        p.status = "running"
        p.result = status
        p.started_at = time.time()
        p.done = p.total = 0
        self.current = key
        self.note_text = ""
        self._refresh()

    def note(self, text):
        self.note_text = text or ""
        self._refresh()

    def tick(self, done, total, note=""):
        if self.current:
            p = self.by_key[self.current]
            p.done, p.total = done, total
        if note:
            self.note_text = note
        self._refresh()

    def result(self, key, text, *, failed=False):
        p = self.by_key.get(key)
        if not p:
            return
        p.status = "failed" if failed else "done"
        p.result = text
        if self.current == key:
            self.current = None
            self.note_text = ""
        self._refresh()

    def summary(self, rep):
        # called after the Live context has stopped; the final phase frame is
        # already on screen, so just append the completion panel below it.
        self.console.print(_summary_panel(rep))

    # ── rendering ────────────────────────────────────────────────────────────

    def _refresh(self):
        if self._live:
            self._live.update(self._render())

    def _eta(self) -> str:
        # ETA from the running phase if it has a total (gate/summarize)
        if not self.current:
            return ""
        p = self.by_key[self.current]
        if p.total and p.done:
            avg = (time.time() - p.started_at) / p.done
            return f"   ·   {p.label} ETA ~{_fmt((p.total - p.done) * avg)}"
        return ""

    def _render(self):
        header = Text()
        header.append(f"elapsed {_fmt(time.time() - self.t0)}", style="bold")
        header.append(self._eta(), style="cyan")

        rows = Table.grid(padding=(0, 1))
        rows.add_column(width=2)        # icon
        rows.add_column(width=11)       # label
        rows.add_column()               # detail
        for p in self.phases:
            icon, style = {
                "pending": ("·", "dim"),
                "running": ("▶", "yellow"),
                "done": ("✓", "green"),
                "failed": ("✗", "red"),
            }[p.status]
            if p.status == "running" and p.total:
                detail = _bar(p.done, p.total) + f"  {p.done}/{p.total}"
                if p.result:
                    detail = p.result + "  " + detail
            else:
                detail = p.result
            rows.add_row(Text(icon, style=style), Text(p.label, style=style),
                         Text(detail, style="" if p.status != "pending" else "dim"))

        body = [header, "", rows]
        if self.note_text:
            body += ["", Text("  ↳ " + self.note_text[:90], style="dim italic")]
        return Panel(Group(*body), title=f"Tracker Pipeline · {self.title}",
                     border_style="cyan", padding=(1, 2))


def _bar(done: int, total: int, width: int = 18) -> str:
    if total <= 0:
        return ""
    filled = int(width * done / total)
    return "[" + "█" * filled + "░" * (width - filled) + "]"


def _summary_panel(rep) -> Panel:
    t = Table.grid(padding=(0, 2))
    t.add_column(justify="right", style="bold")
    t.add_column()
    t.add_row("fetched", f"{rep.fetch_new} new / {rep.fetch_sources} sources "
                         f"(304:{rep.fetch_304}, fail:{rep.fetch_failed})")
    t.add_row("gated out", str(rep.gated_out))
    t.add_row("summarized", f"{rep.summarized} / {rep.summarize_attempted} "
                            f"(out-of-window {rep.out_of_window}, review-failed {rep.review_failed})")
    t.add_row("cross-tracker", f"+{rep.cross_added} / -{rep.cross_removed}")
    t.add_row("days written", str(rep.days_written))
    t.add_row("errors", str(len(rep.errors)))
    t.add_row("elapsed", _fmt(rep.elapsed_s))
    status = "[green]OK[/green]" if rep.ok else "[red]FAILED[/red]"
    return Panel(t, title=f"更新完成 · run#{rep.run_id} · {status}",
                 border_style="green" if rep.ok else "red", padding=(1, 2))
