"""Typer CLI — Claude Code's primary interface."""
from __future__ import annotations

import asyncio
import json
from datetime import date as _date
from pathlib import Path

import typer
from rich.console import Console
from rich.table import Table

from . import (DEFAULT_DB, DEFAULT_OUT, DEFAULT_TARBALL, DEFAULT_TRACKER,
               OLLAMA_MODEL, SEARCHINFOS)
from .config import load_searchinfo, load_tracker
from .dedup import Store
from .pack import pack as run_pack
from .pack import read_version
from .sources import dispatch
from .sources.feed import fetch_all as fetch_feeds

app = typer.Typer(add_completion=False, no_args_is_help=True,
                  help="Tracker — local security/regulation news pipeline (WSL+Ollama)")
console = Console()


def _parse_date(s: str) -> _date:
    return _date.fromisoformat(s)


def _info_for(tracker: str, searchinfo: Path | None):
    """Load SearchInfo for an explicit path or via tracker name."""
    if searchinfo:
        return load_searchinfo(searchinfo)
    return load_tracker(tracker)


@app.command()
def status(
    tracker: str = typer.Option(DEFAULT_TRACKER, "--tracker", help=f"One of: {list(SEARCHINFOS)}"),
    searchinfo: Path | None = typer.Option(None, help="Override searchinfo path"),
    db: Path = typer.Option(DEFAULT_DB),
) -> None:
    """Show source list, DB stats, current version."""
    info = _info_for(tracker, searchinfo)
    m, n = read_version()
    console.print(f"[bold]Tracker:[/bold] {tracker}")
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
    tracker: str = typer.Option(DEFAULT_TRACKER, "--tracker"),
    searchinfo: Path | None = typer.Option(None, help="Override searchinfo path"),
    db: Path = typer.Option(DEFAULT_DB),
    source: str | None = typer.Option(None, help="Limit to a single domain"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    concurrency: int = typer.Option(8),
    site_search: bool = typer.Option(False, "--site-search"),
    site_keys: int = typer.Option(2, help="Keywords per SITE entry (when --site-search)"),
) -> None:
    """Fetch FEED sources in parallel; optionally DDG-search SITE entries."""
    info = _info_for(tracker, searchinfo)
    s_date, u_date = _parse_date(since), _parse_date(until)
    feeds = dispatch.feeds_for(info.entries)
    if source:
        feeds = [(n, u) for n, u in feeds if source in u]
    if not feeds and not site_search:
        console.print("[yellow]No FEED sources matched.[/yellow]"); raise typer.Exit(1)

    store = None if dry_run else Store(db)
    new_count = total_count = 0

    if feeds:
        console.print(f"[{tracker}] Fetching {len(feeds)} feeds, {since}..{until}, concurrency={concurrency}")
        results = asyncio.run(fetch_feeds(feeds, since=s_date, until=u_date, concurrency=concurrency))
        for src, items in results.items():
            total_count += len(items)
            for it in items:
                if dry_run:
                    console.print(f"  [{src}] {it.published} {it.title[:80]}  {it.url}")
                elif store.upsert_candidate(url=it.url, source=src, title=it.title,
                                            date=it.published, raw_text=it.summary or "",
                                            tracker=tracker):
                    new_count += 1

    if site_search:
        from .sources import site as ddg
        sites = dispatch.site_entries(info.entries)
        if source:
            sites = [e for e in sites if source in e.domain]
        keys = [k.text for k in info.keys][:site_keys] if info.keys else []
        if not keys:
            console.print("[yellow]No KEYs in searchinfo; skipping site search.[/yellow]")
        else:
            console.print(f"[{tracker}] DDG-searching {len(sites)} SITE entries × {len(keys)} keys "
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
                                                    title=h.title, raw_text=h.snippet,
                                                    tracker=tracker):
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
    tracker: str = typer.Option(DEFAULT_TRACKER, "--tracker"),
    searchinfo: Path | None = typer.Option(None, help="Override searchinfo path"),
    pending: bool = typer.Option(True, "--pending/--all"),
    concurrency: int = typer.Option(4),
    limit: int = typer.Option(100),
    db: Path = typer.Option(DEFAULT_DB),
    self_test: bool = typer.Option(False, "--self-test"),
    fetch_full: bool = typer.Option(True, "--fetch-full/--no-fetch-full"),
    min_body: int = typer.Option(800),
    since: str = typer.Option(""),
    until: str = typer.Option(""),
    cross_detect: bool = typer.Option(True, "--cross-detect/--no-cross-detect",
                                      help="After summary, evaluate cross-tracker belongings"),
) -> None:
    """Call local ollama (gemma4:e4b) to summarize pending articles for a tracker."""
    from .cross import NARROW_DOMAINS, belongs_to
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

    info = _info_for(tracker, searchinfo)
    # Pre-load "other" trackers for cross detection
    other_infos = {}
    if cross_detect:
        for name in SEARCHINFOS:
            if name != tracker:
                try:
                    other_infos[name] = load_tracker(name)
                except Exception as exc:
                    console.print(f"[dim]skip cross-detect against {name}: {exc}[/dim]")

    store = Store(db)
    rows = store.list_pending(limit=limit, tracker=tracker) if pending else []
    if not rows:
        console.print(f"[yellow]No pending articles for tracker={tracker}.[/yellow]"); raise typer.Exit(0)
    console.print(f"[{tracker}] Summarizing {len(rows)} articles via ollama "
                  f"(fetch_full={fetch_full}, concurrency={concurrency})...")

    # Phase A: parallel fetch_body + date
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

    # Phase B: serial ollama + optional cross-detect
    done = skipped_window = cross_hits = 0
    for r in rows:
        body = bodies[r["id"]]
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
            # Cross-tracker detection
            for other_name, other_info in other_infos.items():
                if belongs_to(article_url=r["url"],
                              article_title=result["title"] or r["title"] or "",
                              article_tags=result["tags"] or [],
                              other=other_info, other_name=other_name,
                              narrow_domains=NARROW_DOMAINS.get(other_name)):
                    if store.add_tracker(r["id"], other_name):
                        cross_hits += 1
        except Exception as exc:
            store.log_error(r["source"], f"summarize: {exc}", r["url"])
    msg = (f"[green]Summarized {done}/{len(rows)}[/green] "
           f"(fetched: {fetched}")
    if skipped_window:
        msg += f", out-of-window: {skipped_window}"
    if cross_hits:
        msg += f", cross-tracker added: {cross_hits}"
    console.print(msg + ")")


@app.command()
def preview(
    date: str = typer.Argument(..., help="YYYY-MM-DD"),
    tracker: str = typer.Option(DEFAULT_TRACKER, "--tracker"),
    db: Path = typer.Option(DEFAULT_DB),
) -> None:
    """Print JSON of articles ready for a date+tracker (for Claude review)."""
    rows = Store(db).list_by_date(date, tracker=tracker)
    out = [{"id": r["id"], "title": r["title"], "category": r["category"],
            "summary": r["summary"], "url": r["url"], "tags": (r["tags"] or "").split(","),
            "source": r["source"], "trackers": (r["trackers"] or "").split(",")} for r in rows]
    typer.echo(json.dumps(out, ensure_ascii=False, indent=2))


@app.command()
def write(
    date: str = typer.Option(..., help="YYYY-MM-DD"),
    tracker: str = typer.Option(DEFAULT_TRACKER, "--tracker"),
    searchinfo: Path | None = typer.Option(None),
    out: Path = typer.Option(DEFAULT_OUT, "--out", help="HTML root dir"),
    db: Path = typer.Option(DEFAULT_DB),
    force: bool = typer.Option(False, "--force",
                               help="Overwrite shared data-YYYYMMDD.js (default: skip if present)"),
    merge: bool = typer.Option(True, "--merge/--no-merge"),
) -> None:
    """Render SQLite → shared data-YYYYMMDD.js + per-tracker manifest chain."""
    from .cluster import merge_by_title
    from .render import (render_day, update_month_manifest,
                         update_root_manifest, update_year_manifest)

    info = _info_for(tracker, searchinfo)
    data_dir = out / "data"
    day_path = data_dir / f"data-{date.replace('-', '')}.js"
    if day_path.exists() and not force:
        console.print(f"[yellow]Refusing to overwrite[/yellow] {day_path} "
                      "(use --force to overwrite)")
        raise typer.Exit(2)

    store = Store(db)
    # Gate: only proceed if THIS tracker has any ready articles for the day.
    tracker_rows = store.list_by_date(date, tracker=tracker)
    if not tracker_rows:
        console.print(f"[yellow]No ready articles for {date} (tracker={tracker}).[/yellow]")
        raise typer.Exit(1)

    # Render the SHARED data file with EVERY tracker's items for this date —
    # otherwise switching trackers in the UI loses content.
    all_rows = [dict(r) for r in store.list_writable_for_day(date)]
    original_n = len(all_rows)
    if merge:
        all_rows = merge_by_title(all_rows)
    if len(all_rows) < original_n:
        console.print(f"[dim]Merged {original_n} → {len(all_rows)} after clustering[/dim]")

    # Allowed categories: union of every loaded tracker's whitelist so we
    # don't down-grade an EU CRA item to 'uncategorized' just because security
    # is the current writer.
    all_categories: list[str] = []
    for name in SEARCHINFOS:
        try:
            ti = load_tracker(name)
            for c in ti.categories:
                if c not in all_categories:
                    all_categories.append(c)
        except Exception:
            pass
    day_file = render_day(day=date, rows=all_rows, out_dir=data_dir,
                          allowed_categories=all_categories)
    month_file = update_month_manifest(month=date[:7], data_root=data_dir, tracker=tracker)
    year_file = update_year_manifest(year=date[:4], data_root=data_dir, tracker=tracker)

    # Root manifest: enumerate all tracker metas (title + categories).
    tracker_metas = {}
    for name in SEARCHINFOS:
        try:
            ti = load_tracker(name)
            tracker_metas[name] = {"title": ti.title, "categories": ti.categories}
        except Exception:
            tracker_metas[name] = {"title": name, "categories": []}
    root_file = update_root_manifest(root_html=out, trackers=tracker_metas)

    # Mark only THIS tracker's rows as written — other trackers may still
    # need to render the same shared data file from their side.
    written_ids: list[int] = [r["id"] for r in tracker_rows]
    store.mark_written(written_ids)
    console.print(f"[green][{tracker}] Wrote[/green] {day_file.name} (shared), "
                  f"{month_file.name}, {year_file.name}, {root_file.name}")


@app.command("cross-scan")
def cross_scan(
    date: str = typer.Option(..., help="YYYY-MM-DD"),
    db: Path = typer.Option(DEFAULT_DB),
) -> None:
    """Re-evaluate cross-tracker belongings for all ready articles on a date."""
    from .cross import NARROW_DOMAINS, belongs_to

    store = Store(db)
    rows = store.list_ready_by_date(date)
    if not rows:
        console.print(f"[yellow]No ready articles for {date}.[/yellow]"); raise typer.Exit(0)

    infos = {}
    for name in SEARCHINFOS:
        try:
            infos[name] = load_tracker(name)
        except Exception as exc:
            console.print(f"[red]skip {name}: {exc}[/red]")
    added = 0
    for r in rows:
        current = set((r["trackers"] or "").split(","))
        title = r["title"] or ""
        tags = (r["tags"] or "").split(",")
        for name, info in infos.items():
            if name in current:
                continue
            if belongs_to(article_url=r["url"], article_title=title,
                          article_tags=tags, other=info, other_name=name,
                          narrow_domains=NARROW_DOMAINS.get(name)):
                if store.add_tracker(r["id"], name):
                    added += 1
                    console.print(f"  +{name}: {title[:60]}")
    console.print(f"[green]Added {added} cross-tracker memberships[/green]")


@app.command("migrate-v2")
def migrate_v2(
    out: Path = typer.Option(DEFAULT_OUT, "--out"),
) -> None:
    """One-shot migration of legacy single-tracker html/data/ layout to v2.

    Operations (idempotent):
      1. Create data/{tracker}/ dirs for each known tracker.
      2. Move legacy data/manifest-YYYY*.js (top-level) into data/security/.
      3. Inject `trackers: ["security"]` into every item of data/data-YYYYMMDD.js
         that lacks the field.
      4. Rebuild root manifest.js as TRACKER_MANIFESTS structure.
    """
    import re as _re

    data_dir = out / "data"
    if not data_dir.exists():
        console.print(f"[red]{data_dir} not found[/red]"); raise typer.Exit(1)

    # 1. Per-tracker dirs
    for name in SEARCHINFOS:
        (data_dir / name).mkdir(parents=True, exist_ok=True)

    # 2. Move legacy manifests into security/
    moved = 0
    for p in list(data_dir.glob("manifest-*.js")):
        target = data_dir / "security" / p.name
        if not target.exists():
            p.replace(target); moved += 1
        else:
            p.unlink(); moved += 1  # already migrated
    console.print(f"  moved {moved} legacy manifest files into data/security/")

    # 3. Inject trackers field into each data-YYYYMMDD.js item if missing.
    # NOTE: use a function-style replacement to avoid Python re.sub's quirky
    # backslash handling of `\"` in replacement strings (would otherwise emit
    # literal `[\"security\"]` which is invalid JS).
    inject_re = _re.compile(r'(\n  \{\n    id: "[^"]+",\n)(?!    trackers:)', _re.M)
    INSERT = '    trackers: ["security"],\n'
    touched = 0
    for p in sorted(data_dir.glob("data-*.js")):
        body = p.read_text(encoding="utf-8")
        new = inject_re.sub(lambda m: m.group(1) + INSERT, body)
        # Heal any prior runs that wrote the escaped artifact.
        new = new.replace(r'[\"security\"]', '["security"]')
        if new != body:
            p.write_text(new, encoding="utf-8", newline="\n")
            touched += 1
    console.print(f"  injected trackers field into {touched} data files")

    # 4. Rebuild per-tracker month/year manifests + root from current data
    from .render import (update_month_manifest, update_root_manifest,
                         update_year_manifest)

    months: set[tuple[str, str]] = set()  # (tracker, YYYY-MM)
    for name in SEARCHINFOS:
        for p in data_dir.glob("data-*.js"):
            stem = p.stem.replace("data-", "")
            month = f"{stem[:4]}-{stem[4:6]}"
            months.add((name, month))
    for tname, month in sorted(months):
        update_month_manifest(month=month, data_root=data_dir, tracker=tname)
    for tname in SEARCHINFOS:
        for year in {m[:4] for _, m in months}:
            update_year_manifest(year=year, data_root=data_dir, tracker=tname)
    tracker_metas = {}
    for name in SEARCHINFOS:
        try:
            ti = load_tracker(name)
            tracker_metas[name] = {"title": ti.title, "categories": ti.categories}
        except Exception:
            tracker_metas[name] = {"title": name, "categories": []}
    update_root_manifest(root_html=out, trackers=tracker_metas)
    console.print(f"[green]Migration complete[/green]")


@app.command()
def pack(
    major: bool = typer.Option(False, "--major"),
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
