"""Typer CLI — Claude Code's primary interface."""
from __future__ import annotations

import asyncio
import json
from datetime import date as _date
from datetime import timedelta
from pathlib import Path

import typer
from rich.console import Console
from rich.table import Table

from . import (DEFAULT_DB, DEFAULT_OUT, DEFAULT_SEARCHINFO, DEFAULT_TARBALL,
               OLLAMA_MODEL)
from .config import load_searchinfo
from .dedup import Store
from .pack import pack as run_pack
from .pack import read_version
from .sources import dispatch
from .sources.feed import fetch_all as fetch_feeds

app = typer.Typer(add_completion=False, no_args_is_help=True,
                  help="Tracker — local security news pipeline (WSL+Ollama)")
console = Console()


def _parse_date(s: str) -> _date:
    return _date.fromisoformat(s)


@app.command()
def status(
    searchinfo: Path = typer.Option(DEFAULT_SEARCHINFO, help="searchinfo_security.md"),
    db: Path = typer.Option(DEFAULT_DB),
) -> None:
    """Show source list, DB stats, current version."""
    info = load_searchinfo(searchinfo)
    m, n = read_version()
    console.print(f"[bold]Title:[/bold] {info.title}")
    console.print(f"[bold]Version:[/bold] {m}.{n}")
    console.print(f"[bold]Ollama model:[/bold] {OLLAMA_MODEL}")
    console.print(f"[bold]Entries:[/bold] {len(info.entries)}  "
                  f"[bold]Categories:[/bold] {len(info.categories)}  "
                  f"[bold]Keys:[/bold] {len(info.keys)}")

    methods: dict[str, int] = {}
    for e in info.entries:
        methods[(e.method or "SITE").upper()] = methods.get((e.method or "SITE").upper(), 0) + 1
    t = Table(title="Method distribution")
    t.add_column("Method"); t.add_column("Count", justify="right")
    for k, v in sorted(methods.items()):
        t.add_row(k, str(v))
    console.print(t)

    if db.exists():
        store = Store(db)
        s = store.stats()
        console.print(f"[bold]DB:[/bold] {db}  rows={sum(s.values())}  "
                      + "  ".join(f"{k}={v}" for k, v in s.items()))
    else:
        console.print(f"[dim]DB not initialized yet: {db}[/dim]")


@app.command()
def fetch(
    since: str = typer.Option(..., help="YYYY-MM-DD"),
    until: str = typer.Option(..., help="YYYY-MM-DD"),
    searchinfo: Path = typer.Option(DEFAULT_SEARCHINFO),
    db: Path = typer.Option(DEFAULT_DB),
    source: str | None = typer.Option(None, help="Limit to a single domain"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    concurrency: int = typer.Option(8),
    site_search: bool = typer.Option(False, "--site-search",
                                     help="Also run DuckDuckGo site: search for SITE-method entries"),
    site_keys: int = typer.Option(2, help="Keywords per SITE entry (when --site-search)"),
) -> None:
    """Fetch FEED sources in parallel; optionally DDG-search SITE entries."""
    info = load_searchinfo(searchinfo)
    s_date, u_date = _parse_date(since), _parse_date(until)
    feeds = dispatch.feeds_for(info.entries)
    if source:
        feeds = [(n, u) for n, u in feeds if source in u]
    if not feeds and not site_search:
        console.print("[yellow]No FEED sources matched.[/yellow]"); raise typer.Exit(1)

    store = None if dry_run else Store(db)
    new_count = total_count = 0

    # ── Phase 1: FEED parallel fetch ─────────────────────────────────────────
    if feeds:
        console.print(f"Fetching {len(feeds)} feeds, {since}..{until}, concurrency={concurrency}")
        results = asyncio.run(fetch_feeds(feeds, since=s_date, until=u_date, concurrency=concurrency))
        for src, items in results.items():
            total_count += len(items)
            for it in items:
                if dry_run:
                    console.print(f"  [{src}] {it.published} {it.title[:80]}  {it.url}")
                elif store.upsert_candidate(url=it.url, source=src, title=it.title,
                                            date=it.published, raw_text=it.summary or ""):
                    new_count += 1

    # ── Phase 2: SITE DuckDuckGo search ──────────────────────────────────────
    if site_search:
        from .sources import site as ddg
        sites = dispatch.site_entries(info.entries)
        if source:
            sites = [e for e in sites if source in e.domain]
        keys = [k.text for k in info.keys][:site_keys] if info.keys else []
        if not keys:
            console.print("[yellow]No KEYs in searchinfo; skipping site search.[/yellow]")
        else:
            console.print(f"DDG-searching {len(sites)} SITE entries × {len(keys)} keys "
                          f"(throttle {ddg.THROTTLE_SEC}s)")
            site_total = site_new = 0
            for e in sites:
                for kw in keys:
                    hits = ddg.site_keyword_search(e.domain, kw, since=since, until=until)
                    ddg.throttle()
                    for h in hits:
                        site_total += 1
                        if dry_run:
                            console.print(f"  [{e.name}] {h.title[:70]}  {h.url}")
                        elif store.upsert_candidate(url=h.url, source=e.name,
                                                    title=h.title, raw_text=h.snippet):
                            site_new += 1
            new_count += site_new
            total_count += site_total
            console.print(f"  SITE: {site_new} new / {site_total} seen")

    if dry_run:
        console.print(f"[green]dry-run:[/green] total {total_count} candidates")
    else:
        console.print(f"[green]Inserted {new_count} new candidates[/green] (total seen={total_count})")


@app.command()
def summarize(
    pending: bool = typer.Option(True, "--pending/--all"),
    concurrency: int = typer.Option(4),
    limit: int = typer.Option(100),
    db: Path = typer.Option(DEFAULT_DB),
    searchinfo: Path = typer.Option(DEFAULT_SEARCHINFO),
    self_test: bool = typer.Option(False, "--self-test", help="Ping ollama and exit"),
    fetch_full: bool = typer.Option(True, "--fetch-full/--no-fetch-full",
                                    help="Fetch full article body when RSS summary is short"),
    min_body: int = typer.Option(800, help="Only fetch full text when raw_text shorter than this"),
    since: str = typer.Option("", help="Skip articles whose extracted date is before this (YYYY-MM-DD)"),
    until: str = typer.Option("", help="Skip articles whose extracted date is after this (YYYY-MM-DD)"),
) -> None:
    """Call local ollama (gemma4:e4b) to summarize pending articles."""
    from .llm import self_test as _selftest
    from .llm import summarize_article
    from .sources.article import fetch_body_with_date

    if self_test:
        try:
            out = _selftest()
        except Exception as exc:
            console.print(f"[red]ollama failed:[/red] {exc}"); raise typer.Exit(2)
        console.print(f"[green]ollama OK:[/green] {out[:80]}")
        raise typer.Exit(0)

    info = load_searchinfo(searchinfo)
    store = Store(db)
    rows = store.list_pending(limit=limit) if pending else []
    if not rows:
        console.print("[yellow]No pending articles.[/yellow]"); raise typer.Exit(0)
    console.print(f"Summarizing {len(rows)} articles via ollama "
                  f"(fetch_full={fetch_full}, concurrency={concurrency})...")

    # Phase A: parallel fetch_body (+ extracted date) for rows that need it.
    bodies: dict[int, str] = {r["id"]: (r["raw_text"] or "").strip() for r in rows}
    extracted_dates: dict[int, str | None] = {r["id"]: None for r in rows}
    fetched = 0
    if fetch_full:
        from concurrent.futures import ThreadPoolExecutor

        targets = [(r["id"], r["url"]) for r in rows
                   if r["url"] and (len(bodies[r["id"]]) < min_body or not r["date"])]
        if targets:
            console.print(f"  fetching {len(targets)} full bodies in parallel "
                          f"(workers={concurrency})...")
            with ThreadPoolExecutor(max_workers=max(concurrency, 2)) as pool:
                results = pool.map(lambda t: (t[0], *fetch_body_with_date(t[1])), targets)
                for aid, full, mdate in results:
                    if len(full) > len(bodies[aid]):
                        bodies[aid] = full
                        fetched += 1
                    if mdate:
                        extracted_dates[aid] = mdate

    # Phase B: serial ollama (single-instance bottleneck).
    done = skipped_window = 0
    for r in rows:
        body = bodies[r["id"]]
        # Window filter: prefer extracted date, fall back to feed date.
        effective_date = extracted_dates[r["id"]] or r["date"]
        if (since and effective_date and effective_date < since) or \
           (until and effective_date and effective_date > until):
            store.mark_status(r["id"], "skipped_window", date=extracted_dates[r["id"]])
            skipped_window += 1
            continue
        if not body:
            store.log_error(r["source"], "empty body after fetch", r["url"]); continue
        try:
            result = summarize_article(url=r["url"], raw_text=body,
                                       categories=info.categories,
                                       category_defs=info.category_defs)
            store.update_summary(r["id"], title=result["title"] or r["title"],
                                 summary=result["summary"], category=result["category"],
                                 tags=result["tags"], date=extracted_dates[r["id"]])
            done += 1
        except Exception as exc:
            store.log_error(r["source"], f"summarize: {exc}", r["url"])
    msg = f"[green]Summarized {done}/{len(rows)}[/green] (full-text fetched: {fetched}"
    if skipped_window:
        msg += f", out-of-window skipped: {skipped_window}"
    console.print(msg + ")")


@app.command()
def preview(
    date: str = typer.Argument(..., help="YYYY-MM-DD"),
    db: Path = typer.Option(DEFAULT_DB),
) -> None:
    """Print JSON of articles ready for a given date (for Claude review)."""
    rows = Store(db).list_by_date(date)
    out = [{"id": r["id"], "title": r["title"], "category": r["category"],
            "summary": r["summary"], "url": r["url"], "tags": (r["tags"] or "").split(","),
            "source": r["source"]} for r in rows]
    typer.echo(json.dumps(out, ensure_ascii=False, indent=2))


@app.command()
def write(
    date: str = typer.Option(..., help="YYYY-MM-DD"),
    out: Path = typer.Option(DEFAULT_OUT, "--out", help="HTML root dir"),
    searchinfo: Path = typer.Option(DEFAULT_SEARCHINFO),
    db: Path = typer.Option(DEFAULT_DB),
    force: bool = typer.Option(False, "--force",
                               help="Overwrite existing data-YYYYMMDD.js (default: skip if present)"),
    merge: bool = typer.Option(True, "--merge/--no-merge",
                               help="Cluster cross-source duplicates and merge sources list"),
) -> None:
    """Render SQLite → data-YYYYMMDD.js and update manifest chain.

    By default, refuses to overwrite an existing data-YYYYMMDD.js to protect
    manually curated content. Pass --force to overwrite.
    """
    from .cluster import merge_by_title
    from .render import (render_day, update_month_manifest,
                         update_root_manifest, update_year_manifest)

    info = load_searchinfo(searchinfo)
    data_dir = out / "data"
    day_path = data_dir / f"data-{date.replace('-', '')}.js"
    if day_path.exists() and not force:
        console.print(f"[yellow]Refusing to overwrite[/yellow] {day_path} "
                      "(use --force to overwrite)")
        raise typer.Exit(2)

    store = Store(db)
    rows_raw = store.list_by_date(date)
    if not rows_raw:
        console.print(f"[yellow]No ready articles for {date}.[/yellow]"); raise typer.Exit(1)
    rows = [dict(r) for r in rows_raw]
    original_n = len(rows)
    if merge:
        rows = merge_by_title(rows)
    if len(rows) < original_n:
        console.print(f"[dim]Merged {original_n} → {len(rows)} after cross-source clustering[/dim]")

    day_file = render_day(day=date, rows=rows, out_dir=data_dir,
                          allowed_categories=info.categories)
    month_file = update_month_manifest(month=date[:7], out_dir=data_dir)
    year_file = update_year_manifest(year=date[:4], out_dir=data_dir)
    root_file = update_root_manifest(root_html=out, title=info.title,
                                     categories=info.categories)
    written_ids: list[int] = []
    for r in rows:
        if "_merged_ids" in r:
            written_ids.extend(r["_merged_ids"])
        else:
            written_ids.append(r["id"])
    store.mark_written(written_ids)
    console.print(f"[green]Wrote[/green] {day_file.name}, {month_file.name}, "
                  f"{year_file.name}, {root_file.name}")


@app.command()
def pack(
    major: bool = typer.Option(False, "--major", help="Bump #M, reset #N=0"),
    keep_version: bool = typer.Option(False, "--keep-version"),
    tarball_dir: Path = typer.Option(DEFAULT_TARBALL),
) -> None:
    """ChangeLog → commit → tag → git archive zip."""
    result = run_pack(major=major, keep=keep_version, tarball_dir=tarball_dir)
    console.print(f"[green]Packed[/green] v{result['version']} → {result['zip']} "
                  f"({result['size']} bytes)")


@app.command()
def rewrite_changelog(version: str) -> None:
    """Regenerate the section for an existing version (re-runs ollama)."""
    from .changelog import append_release
    console.print(append_release(version))


if __name__ == "__main__":
    app()
