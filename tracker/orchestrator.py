"""Single-process pipeline orchestrator (WP5).

run_pipeline() executes the whole update in ONE process — no subprocess
self-calls, no stdout regex parsing. It drives the fetcher registry + source
profiles (WP1/WP2), the ollama gate/summarize/review layers (WP3, wired via
optional hooks), and the existing render/cross building blocks.

Output contract for zero-touch operation:
- full DEBUG log to logs/run-<ts>.log
- a row in the `runs` table (args/stats/errors JSON)
- status.json at the project root (machine-readable last-run summary)
- the caller (cli.pipeline) prints ONE line built from RunReport.one_line()
"""
from __future__ import annotations

import json
import logging
import time
from concurrent.futures import ThreadPoolExecutor
from dataclasses import asdict, dataclass, field
from datetime import date as _date
from datetime import datetime
from pathlib import Path

from . import DEFAULT_DB, DEFAULT_OUT, PROJECT_ROOT, SEARCHINFOS
from .config import load_tracker
from .dedup import Store
from .fetchers import DateWindow, Profile, get_fetcher
from .methods import ARCHIVE, FEED, LISTING

# CRA / regulation-aware listing filter for the eu_cra tracker (moved here from
# cli.fetch so both the legacy command and the orchestrator share one source).
EU_CRA_FILTER = (
    "cra", "cyber resilience", "cyber-resilience",
    "regulation", "directive", "harmonised", "harmonized",
    "compliance", "conformity", "cybersecurity",
    "サイバー", "規制",
    "網路韌性", "歐盟", "EU ", "資安",
    "사이버", "유럽", "보안", "규제",
    "ENISA", "ETSI", "CEN", "JPCERT", "NISC", "CSA", "KISA",
    # A European Norm release is on-topic wherever it comes from. Kept as a
    # two-word phrase so effective_filter() does not treat it as the mere
    # name of the source when fetching etsi.org itself.
    "ETSI EN", "EN 303", "EN 304",
    "standardisation", "standardization",
)

# Per-tracker fetch tuning: a SEARCH query prefix + a keyword filter applied to
# LISTING/SEARCH candidates (FEED/API ignore it). Trackers not listed here use
# the defaults (no prefix, no filter) — e.g. `security` and `os`, whose sources
# are already on-topic (or query-scoped) and rely on the L1 gate for noise
# removal rather than a keyword whitelist that could drop valid headlines.
TRACKER_FETCH: dict[str, dict] = {
    "eu_cra": {"query_prefix": "Cyber Resilience Act", "filter": EU_CRA_FILTER},
}

# ollama L3 review hook (WP3): REVIEW_FN(result, raw_text, info) -> (ok, reason).
# The L1 gate is driven directly in _phase_gate (so it can report per-batch).
from .llm.review import review as REVIEW_FN        # noqa: E402


@dataclass
class RunReport:
    run_id: int = 0
    since: str = ""
    until: str = ""
    trackers: list[str] = field(default_factory=list)
    fetch_sources: int = 0
    fetch_304: int = 0
    fetch_failed: int = 0
    fetch_new: int = 0
    dormant_skipped: int = 0
    gated_out: int = 0
    summarize_attempted: int = 0
    summarized: int = 0
    review_failed: int = 0
    translated: int = 0
    out_of_window: int = 0
    cross_added: int = 0
    cross_removed: int = 0
    days_written: int = 0
    summarize_backend: str = "ollama"
    translate_backend: str = "ollama"
    gemini_fallback: int = 0
    errors: list[str] = field(default_factory=list)
    elapsed_s: float = 0.0
    ok: bool = True

    def one_line(self) -> str:
        status = "OK" if self.ok else "FAIL"
        return (f"run#{self.run_id} {status} {self.since}..{self.until} "
                f"[{','.join(self.trackers)}] | "
                f"fetch {self.fetch_new}new/{self.fetch_sources}src "
                f"(304:{self.fetch_304} fail:{self.fetch_failed}) | "
                f"gate -{self.gated_out} | "
                f"sum {self.summarized}/{self.summarize_attempted} "
                f"(oow:{self.out_of_window} rev_fail:{self.review_failed}) | "
                f"i18n {self.translated} | "
                f"llm {self.summarize_backend[:3]}/{self.translate_backend[:3]}"
                f"{f' fb{self.gemini_fallback}' if self.gemini_fallback else ''} | "
                f"cross +{self.cross_added}/-{self.cross_removed} | "
                f"write {self.days_written}d | err {len(self.errors)} | "
                f"{self.elapsed_s:.0f}s")


def _setup_logger(run_ts: str) -> logging.Logger:
    logs_dir = Path("/opt/tracker/logs")
    logs_dir.mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger(f"tracker.run.{run_ts}")
    logger.setLevel(logging.DEBUG)
    logger.handlers.clear()
    fh = logging.FileHandler(logs_dir / f"run-{run_ts}.log", encoding="utf-8")
    fh.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(message)s"))
    logger.addHandler(fh)
    return logger


def run_pipeline(*, since: str, until: str, trackers: list[str],
                 db: Path = DEFAULT_DB, out: Path = DEFAULT_OUT,
                 summarize_limit: int = 300, cleanup: bool = True,
                 gate: bool = True, translate: bool = True, concurrency: int = 8,
                 browser_base: str | None = None, reporter=None,
                 start_at: str = "fetch", force: bool = False, controller=None,
                 summarize_backend: str = "ollama",
                 translate_backend: str = "ollama",
                 include_dormant: bool = False) -> RunReport:
    from .progress import NullReporter
    from .control import PHASES, ControlAbort
    from . import llm
    rpt = reporter or NullReporter()

    run_ts = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
    log = _setup_logger(run_ts)
    t0 = time.time()
    window = DateWindow(_date.fromisoformat(since), _date.fromisoformat(until))
    store = Store(db)
    rid = store.start_run(json.dumps({"since": since, "until": until, "trackers": trackers}))
    rep = RunReport(run_id=rid, since=since, until=until, trackers=list(trackers))
    rep.summarize_backend, rep.translate_backend = summarize_backend, translate_backend
    stats0 = dict(llm.STATS)
    log.info("run %s start: %s..%s trackers=%s start_at=%s force=%s backends=%s/%s",
             rid, since, until, trackers, start_at, force,
             summarize_backend, translate_backend)

    # Planned phases shown in the dashboard.
    plan = [("preflight", "Preflight"), ("fetch", "Fetch")]
    if gate:
        plan.append(("gate", "Gate"))
    plan.append(("summarize", "Summarize"))
    if translate:
        plan.append(("translate", "Translate"))
    plan.append(("write", "Write"))
    if cleanup:
        plan.append(("cleanup", "Cleanup"))
    rpt.begin(since=since, until=until, trackers=trackers, phases=plan)

    start_idx = PHASES.index(start_at) if start_at in PHASES else 0
    def _do(name):
        return PHASES.index(name) >= start_idx
    def _ck():
        if controller is not None:
            controller.checkpoint()

    # ── Phase 0: ollama preflight (auto-start if down) ───────────────────────
    rpt.enter("preflight", "checking ollama")
    from .preflight import ensure_ollama
    if not ensure_ollama():
        rep.ok = False
        rep.errors.append("ollama down (auto-start failed)")
        log.error("ollama not reachable and auto-start failed")
        rpt.result("preflight", "ollama unreachable", failed=True)
        _finalize(store, rep, t0, log, stats0)
        return rep
    log.info("ollama ready")
    rpt.result("preflight", "ollama ready")

    try:
        if _do("fetch"):
            _ck(); _phase_fetch(store, window, trackers, rep, log, concurrency, rpt, browser_base,
                                include_dormant=include_dormant)
        if gate and _do("gate"):
            _ck(); _phase_gate(store, trackers, rep, log, rpt)
        if _do("summarize"):
            _ck()
            if force and start_at == "summarize":
                _reset_resummarize(store, window, trackers, log)
            _phase_summarize(store, window, trackers, rep, log, summarize_limit,
                             concurrency, rpt, controller=controller,
                             backend=summarize_backend)
        if translate and _do("translate"):
            _ck()
            if force and start_at == "translate":
                _reset_retranslate(store, window, trackers, log)
            _phase_translate(store, rep, log, rpt, controller=controller,
                             backend=translate_backend)
        if _do("write"):
            _ck(); _phase_write(store, trackers, rep, log, out, rpt)
        if cleanup and _do("cleanup"):
            _ck(); _phase_cross_cleanup(store, rep, log, rpt)
    except ControlAbort:
        rep.errors.append("restart requested")
        log.info("control: restart requested mid-run")
        _finalize(store, rep, t0, log, stats0)
        raise
    except Exception as exc:  # never crash the orchestrator; record and finish
        rep.ok = False
        rep.errors.append(f"phase exception: {exc}")
        log.exception("pipeline phase crashed")

    _finalize(store, rep, t0, log, stats0)
    return rep


# ── Phase 1: FETCH ───────────────────────────────────────────────────────────

def _phase_fetch(store, window, trackers, rep, log, concurrency, rpt, browser_base=None,
                 *, include_dormant: bool = False):
    rpt.enter("fetch", "preparing sources")
    # Auto-reprobe any source that has crossed the failure threshold so a site
    # that changed its layout self-heals before we fetch it again.
    try:
        from .probe import reprobe_failing
        reprobed = reprobe_failing(store)
        if reprobed:
            log.info("auto-reprobed %d failing sources", reprobed)
    except Exception as exc:
        log.warning("reprobe step skipped: %s", exc)

    all_hashes = store.all_url_hashes()       # one batch SELECT, then in-memory
    pending_new: list[dict] = []
    seen_this_run: set[str] = set()
    for tname in trackers:
        info = load_tracker(tname)
        keys = [k.text for k in info.keys]
        _fcfg = TRACKER_FETCH.get(tname, {})
        query_prefix = _fcfg.get("query_prefix", "")
        filt = _fcfg.get("filter", ())
        entry_url = {e.domain: e.url for e in info.entries}
        all_profiles = store.list_profiles(tracker=tname)
        if include_dormant:
            profiles = all_profiles
            n_dormant = 0
        else:
            profiles = [r for r in all_profiles if not store.is_dormant(r)]
            n_dormant = len(all_profiles) - len(profiles)
        rep.fetch_sources += len(profiles)
        rep.dormant_skipped += n_dormant
        log.info("[%s] fetch over %d profiles (%d dormant skipped)",
                 tname, len(profiles), n_dormant)
        if n_dormant:
            log.info("[%s] skipped %d dormant sources", tname, n_dormant)
        rpt.note(f"[{tname}] fetching {len(profiles)} sources"
                 + (f", skipped {n_dormant} dormant" if n_dormant else ""))

        def make_profile(row):
            # fetch_listing appends search_path to the base URL, and the
            # searchinfo ENTRY url is itself a deep link
            # (…/en/policies/cyber-resilience-act). A path-scoped entry point
            # therefore has to start from the domain root, or the two paths
            # concatenate into nonsense.
            url = (entry_url.get(row["domain"])
                   if row["source_key"] == row["domain"] else None)
            return Profile.from_row(
                row, url=url,
                extra={"keywords": keys, "query_prefix": query_prefix,
                       "filter_keywords": filt, "cdp_base": browser_base})

        feed_rows = [r for r in profiles if r["method"] == FEED]
        other_rows = [r for r in profiles if r["method"] != FEED]

        def run_one(row):
            prof = make_profile(row)
            fetcher = get_fetcher(prof.method)
            try:
                res = fetcher.fetch(prof, window)
            except Exception as exc:
                return row, None, str(exc)
            return row, res, None

        results = []
        # FEED: parallel (conditional GET is cheap, network-bound)
        if feed_rows:
            with ThreadPoolExecutor(max_workers=max(concurrency, 2)) as pool:
                results.extend(pool.map(run_one, feed_rows))
        # LISTING/SEARCH/API/ARCHIVE: sequential (throttled / heavy)
        for row in other_rows:
            results.append(run_one(row))

        for row, res, err in results:
            domain = row["domain"]
            # Counters are keyed by source_key, not domain: one site can have
            # several entry points (see dedup.profile_key) and each must age
            # independently. For a single-entry source the two are identical.
            key = row["source_key"]
            if err or (res and res.error):
                rep.fetch_failed += 1
                store.record_profile_yield(key, 0, failed=True)
                store.log_error(row["name"], f"fetch: {err or res.error}", None)
                log.debug("[%s] %s fetch error: %s", tname, domain, err or res.error)
                continue
            if res.not_modified:
                rep.fetch_304 += 1
                store.mark_profile_alive(key)
                log.debug("[%s] %s 304 not modified", tname, domain)
                continue
            items = list(res.items)
            # LISTING with 0 items and not accept_all → Wayback fallback
            if not items and row["method"] == LISTING and not row["accept_all"]:
                arch = get_fetcher(ARCHIVE)
                try:
                    ares = arch.fetch(make_profile(row), window)
                    if ares.items:
                        items = ares.items
                        log.info("[%s] %s live=0, wayback=%d", tname, domain, len(items))
                except Exception as exc:
                    log.debug("[%s] %s wayback failed: %s", tname, domain, exc)
            new_for_source = 0
            newest = row["last_seen_utc"] or ""
            for c in items:
                from .dedup import url_hash
                h = url_hash(c.url)
                if h in all_hashes or h in seen_this_run:
                    continue
                seen_this_run.add(h)
                pending_new.append({
                    "url": c.url, "source": row["name"], "title": c.title,
                    "date": c.published, "raw_text": c.snippet,
                    "tracker": tname, "content_hash": c.content_hash})
                new_for_source += 1
                if c.published and c.published > newest:
                    newest = c.published
            store.update_profile_http(
                key, etag=res.etag, last_modified=res.last_modified,
                last_seen_utc=newest or None)
            # Liveness signal, in order of honesty:
            #   res.items_seen — raw entries the source served, before the
            #     date-window and topic filters (fetchers that know it set it)
            #   len(res.items) — fallback for fetchers that don't
            # Never new_for_source: that is post-dedup, so a healthy source
            # returning 30 already-known articles would score 0.
            store.record_profile_yield(
                key, new_for_source,
                items_seen=res.items_seen if res.items_seen is not None
                else len(res.items))
            log.debug("[%s] %s yielded %d new", tname, domain, new_for_source)

    inserted = store.insert_candidates_batch(pending_new)
    rep.fetch_new = inserted
    log.info("fetch complete: %d new candidates inserted", inserted)
    if rep.dormant_skipped:
        log.info("skipped %d dormant sources", rep.dormant_skipped)
    rpt.result("fetch", f"{inserted} new / {rep.fetch_sources} sources "
                        f"(304:{rep.fetch_304}, fail:{rep.fetch_failed}, "
                        f"dormant:{rep.dormant_skipped})")


# ── Phase 2: GATE (WP3 hook) ─────────────────────────────────────────────────

def _phase_gate(store, trackers, rep, log, rpt):
    rpt.enter("gate", "scoring relevance")
    # total batches across trackers for a progress bar
    from .llm.gate import BATCH
    pending = {t: [dict(r) for r in store.list_pending(limit=10_000, tracker=t)]
               for t in trackers}
    total_batches = sum((len(v) + BATCH - 1) // BATCH for v in pending.values())
    done_batches = 0
    for tname in trackers:
        info = load_tracker(tname)
        rows = pending[tname]
        if not rows:
            continue
        for start in range(0, len(rows), BATCH):
            batch = rows[start:start + BATCH]
            try:
                from .llm.gate import _gate_batch
                topic = f"{info.title}（分類：{', '.join(info.categories)}）"
                keep = _gate_batch(topic, [{"title": r["title"], "snippet": r["raw_text"]}
                                           for r in batch])
            except Exception as exc:
                log.warning("[%s] gate batch failed, keeping all: %s", tname, exc)
                keep = [True] * len(batch)
            for r, k in zip(batch, keep):
                if not k:
                    store.mark_status(r["id"], "gated_out")
                    rep.gated_out += 1
            done_batches += 1
            rpt.tick(done_batches, total_batches, f"[{tname}] gated {rep.gated_out} so far")
    log.info("gate complete: %d gated out", rep.gated_out)
    rpt.result("gate", f"dropped {rep.gated_out} noise")


# ── Phase 3: SUMMARIZE (+ L3 review hook + cross-detect) ─────────────────────

def _phase_summarize(store, window, trackers, rep, log, limit, concurrency, rpt,
                     controller=None, backend="ollama"):
    from .cross import NARROW_DOMAINS, belongs_to
    from .llm import summarize_article
    from .sources.article import fetch_body_with_date

    since, until = window.since.isoformat(), window.until.isoformat()
    other_infos_cache: dict[str, object] = {}
    rpt.enter("summarize", "fetching article bodies")
    pending_by_tracker = {t: store.list_pending(limit=limit, tracker=t) for t in trackers}
    grand_total = sum(len(v) for v in pending_by_tracker.values())
    processed = 0
    for tname in trackers:
        info = load_tracker(tname)
        rows = pending_by_tracker[tname]
        if not rows:
            continue
        rep.summarize_attempted += len(rows)
        log.info("[%s] summarize %d pending", tname, len(rows))

        # cross-detect targets: the OTHER trackers
        others = {}
        for other in SEARCHINFOS:
            if other == tname:
                continue
            if other not in other_infos_cache:
                try:
                    other_infos_cache[other] = load_tracker(other)
                except Exception:
                    other_infos_cache[other] = None
            if other_infos_cache[other]:
                others[other] = other_infos_cache[other]

        # Phase A: parallel body fetch
        bodies = {r["id"]: (r["raw_text"] or "").strip() for r in rows}
        dates = {r["id"]: None for r in rows}
        targets = [(r["id"], r["url"]) for r in rows
                   if r["url"] and (len(bodies[r["id"]]) < 800 or not r["date"])]
        if targets:
            with ThreadPoolExecutor(max_workers=max(concurrency, 2)) as pool:
                for aid, (body, mdate) in zip(
                        [t[0] for t in targets],
                        pool.map(lambda t: fetch_body_with_date(t[1]), targets)):
                    if len(body) > len(bodies[aid]):
                        bodies[aid] = body
                    if mdate:
                        dates[aid] = mdate

        # Phase B: serial summarize + review + cross-detect (pausable per article)
        for r in rows:
            aid = r["id"]
            if controller is not None:
                controller.checkpoint()
            bk = controller.backend_for("summarize") if controller is not None else backend
            processed += 1
            rpt.tick(processed, grand_total,
                     f"[{tname}] {(r['title'] or '')[:70]}")
            body = bodies[aid]
            # F2: the feed/API pubDate is authoritative. Some sites' article
            # HTML carries a bogus meta date (e.g. a site-wide static value),
            # which must never outrank a real feed date when deciding whether
            # an article falls inside the run's window. Meta date is only a
            # fallback for sources that don't supply a feed date at all.
            eff_date = r["date"] or dates[aid]
            if (since and eff_date and eff_date < since) or \
               (until and eff_date and eff_date > until):
                store.mark_status(aid, "skipped_window", date=dates[aid])
                rep.out_of_window += 1
                continue
            if not body:
                store.log_error(r["source"], "empty body after fetch", r["url"])
                continue
            try:
                result = summarize_article(
                    url=r["url"], raw_text=body, categories=info.categories,
                    category_defs=info.category_defs, backend=bk)
                if REVIEW_FN is not None:
                    ok, reason = REVIEW_FN(result, body, info)
                    if not ok:
                        # one retry
                        result = summarize_article(
                            url=r["url"], raw_text=body, categories=info.categories,
                            category_defs=info.category_defs, backend=bk)
                        ok2, reason2 = REVIEW_FN(result, body, info)
                        if not ok2:
                            store.mark_status(aid, "review_failed", date=dates[aid])
                            store.log_error(r["source"], f"review: {reason2}", r["url"])
                            rep.review_failed += 1
                            continue
                # F3: if neither the feed nor the meta extraction produced a
                # date, fall back to the discovery date (fetched_at — when
                # this candidate was first inserted) so the article still
                # gets a non-NULL `date` and isn't permanently invisible to
                # every downstream date-keyed query (_ready_dates,
                # rebuild_days, list_by_date, ...). update_summary's
                # date=COALESCE(date, ?) means this never clobbers a genuine
                # feed/meta date already stored in the row.
                fallback_date = dates[aid] or (r["fetched_at"] or "")[:10] or None
                store.update_summary(
                    aid, title=result["title"] or r["title"],
                    summary=result["summary"], category=result["category"],
                    tags=result["tags"], date=fallback_date)
                rep.summarized += 1
                for oname, oinfo in others.items():
                    if belongs_to(article_url=r["url"],
                                  article_title=result["title"] or r["title"] or "",
                                  article_tags=result["tags"] or [],
                                  article_category=result["category"],
                                  other=oinfo, other_name=oname,
                                  narrow_domains=NARROW_DOMAINS.get(oname)):
                        if store.add_tracker(aid, oname):
                            rep.cross_added += 1
            except Exception as exc:
                store.log_error(r["source"], f"summarize: {exc}", r["url"])
                log.debug("summarize id=%s error: %s", aid, exc)
    log.info("summarize complete: %d/%d (oow=%d rev_fail=%d cross+%d)",
             rep.summarized, rep.summarize_attempted, rep.out_of_window,
             rep.review_failed, rep.cross_added)
    rpt.result("summarize", f"{rep.summarized}/{rep.summarize_attempted} "
                            f"(oow {rep.out_of_window}, rev-fail {rep.review_failed})")


# ── Phase 3b: TRANSLATE (L5 — English mirror) ────────────────────────────────

def _phase_translate(store, rep, log, rpt, controller=None, backend="ollama"):
    """Translate freshly-summarized (ready) articles into English so the write
    phase emits both languages. Forward-only: only rows lacking summary_en."""
    rpt.enter("translate", "translating to English")
    from .llm.translate import translate_article
    rows = store.list_untranslated(limit=100_000, statuses=("ready",))
    total = len(rows)
    if not total:
        rpt.result("translate", "0 (nothing new)")
        return
    for i, r in enumerate(rows, 1):
        if controller is not None:
            controller.checkpoint()
        bk = controller.backend_for("translate") if controller is not None else backend
        rpt.tick(i, total, f"{(r['title'] or '')[:70]}")
        tags = [t for t in (r["tags"] or "").split(",") if t]
        try:
            tr = translate_article(title=r["title"] or "", summary=r["summary"] or "",
                                   tags=tags, backend=bk)
        except Exception as exc:
            log.debug("translate id=%s error: %s", r["id"], exc)
            continue
        if tr["summary_en"]:
            store.update_translation(
                r["id"], title_en=tr["title_en"] or r["title"] or "",
                summary_en=tr["summary_en"], tags_en=tr["tags_en"])
            rep.translated += 1
    log.info("translate complete: %d/%d", rep.translated, total)
    rpt.result("translate", f"{rep.translated}/{total} → EN")


# ── Phase 4: WRITE ───────────────────────────────────────────────────────────

def _phase_write(store, trackers, rep, log, out, rpt):
    rpt.enter("write", "rendering data files")
    from .cluster import merge_by_title
    from .render import (render_day, update_month_manifest,
                         update_root_manifest, update_year_manifest)

    data_dir = out / "data"
    # union of categories across all trackers (so a cross-belong item keeps its
    # category regardless of which tracker triggers the write)
    all_categories: list[str] = []
    tracker_metas: dict[str, dict] = {}
    for name in SEARCHINFOS:
        try:
            ti = load_tracker(name)
            tracker_metas[name] = {"title": ti.title, "categories": ti.categories}
            for c in ti.categories:
                if c not in all_categories:
                    all_categories.append(c)
        except Exception:
            tracker_metas[name] = {"title": name, "categories": []}

    written_days: set[str] = set()
    for tname in trackers:
        for d in _ready_dates(store, tname):
            tracker_rows = store.list_by_date(d, tracker=tname)
            if not tracker_rows:
                continue
            all_rows = [dict(r) for r in store.list_writable_for_day(d)]
            all_rows = merge_by_title(all_rows)
            render_day(day=d, rows=all_rows, out_dir=data_dir,
                       allowed_categories=all_categories)
            update_month_manifest(month=d[:7], data_root=data_dir, tracker=tname)
            update_year_manifest(year=d[:4], data_root=data_dir, tracker=tname)
            written_ids = [r["id"] for r in tracker_rows]
            store.mark_written(written_ids)
            written_days.add(f"{tname}:{d}")
            log.debug("[%s] wrote %s (%d rows)", tname, d, len(tracker_rows))
    if written_days:
        update_root_manifest(root_html=out, trackers=tracker_metas)
    rep.days_written = len(written_days)
    log.info("write complete: %d tracker-days", rep.days_written)
    rpt.result("write", f"{rep.days_written} tracker-days")


def _ready_dates(store, tracker) -> list[str]:
    rows = store.conn.execute(
        "SELECT DISTINCT date FROM articles WHERE status='ready' AND date IS NOT NULL "
        "AND (','||trackers||',') LIKE '%,'||?||',%' ORDER BY date DESC", (tracker,))
    return [r[0] for r in rows]


def rebuild_days(store, out: Path, dates: list[str] | None = None) -> int:
    """Re-render day data files + manifests for the given dates (or every
    summarized day if None). Used after a bulk translation backfill so the
    static files pick up the new English fields. Does not change article status.
    Returns the number of day files rewritten."""
    from .cluster import merge_by_title
    from .render import (render_day, update_month_manifest,
                         update_root_manifest, update_year_manifest)

    data_dir = out / "data"
    all_categories: list[str] = []
    tracker_metas: dict[str, dict] = {}
    for name in SEARCHINFOS:
        try:
            ti = load_tracker(name)
            tracker_metas[name] = {"title": ti.title, "categories": ti.categories}
            for c in ti.categories:
                if c not in all_categories:
                    all_categories.append(c)
        except Exception:
            tracker_metas[name] = {"title": name, "categories": []}

    if dates is None:
        dates = [r[0] for r in store.conn.execute(
            "SELECT DISTINCT date FROM articles WHERE status IN ('ready','written') "
            "AND date IS NOT NULL")]
        # Also consider days that only exist on disk. A day whose articles were
        # all demoted (gated_out, or cross-removed) drops out of the query
        # above, so it would never be revisited and its now-wrong file would
        # stay on the site forever. Observed: gating etsi.org/legal-notice left
        # 「ETSI 官方網站法律公告」 live in data-20260327.js after a full rebuild.
        for p in data_dir.glob("data-????????.js"):
            ymd = p.stem.removeprefix("data-")
            if len(ymd) == 8 and ymd.isdigit():
                dates.append(f"{ymd[:4]}-{ymd[4:6]}-{ymd[6:8]}")
    months: set[str] = set()
    years: set[str] = set()
    written = 0
    for d in sorted(set(dates)):
        rows = [dict(r) for r in store.list_writable_for_day(d)]
        if not rows:
            # Nothing left for this day — drop the stale file so it stops
            # being served. Manifests are rescanned from the files below.
            stale = data_dir / f"data-{d.replace('-', '')}.js"
            if stale.exists():
                stale.unlink()
                months.add(d[:7]); years.add(d[:4]); written += 1
            continue
        rows = merge_by_title(rows)
        render_day(day=d, rows=rows, out_dir=data_dir, allowed_categories=all_categories)
        months.add(d[:7]); years.add(d[:4]); written += 1
    for tname in tracker_metas:
        for m in sorted(months):
            update_month_manifest(month=m, data_root=data_dir, tracker=tname)
        for y in sorted(years):
            update_year_manifest(year=y, data_root=data_dir, tracker=tname)
    update_root_manifest(root_html=out, trackers=tracker_metas)
    return written


# ── Phase 5: cross-scan reverse cleanup ──────────────────────────────────────

def _phase_cross_cleanup(store, rep, log, rpt):
    rpt.enter("cleanup", "re-checking cross-tracker memberships")
    from .cross import NARROW_DOMAINS, belongs_to
    rows = list(store.conn.execute(
        "SELECT * FROM articles WHERE status IN ('ready','written')"))
    infos = {}
    for name in SEARCHINFOS:
        try:
            infos[name] = load_tracker(name)
        except Exception:
            pass
    for r in rows:
        current = set(t for t in (r["trackers"] or "").split(",") if t)
        title, tags, cat = r["title"] or "", (r["tags"] or "").split(","), r["category"]
        for name in list(current):
            info = infos.get(name)
            if not info:
                continue
            if belongs_to(article_url=r["url"], article_title=title, article_tags=tags,
                          article_category=cat, other=info, other_name=name,
                          narrow_domains=NARROW_DOMAINS.get(name),
                          # Lets the category signal stay authoritative for a
                          # tracker's own articles while requiring topical
                          # evidence for ones borrowed from another tracker.
                          article_trackers=sorted(current)):
                continue
            if store.remove_tracker(r["id"], name):
                rep.cross_removed += 1
    log.info("cross cleanup: -%d demoted", rep.cross_removed)
    rpt.result("cleanup", f"-{rep.cross_removed} demoted, +{rep.cross_added} added earlier")


# ── finalize ─────────────────────────────────────────────────────────────────

def _tracker_or(trackers) -> str:
    # trackers come from SEARCHINFOS keys (safe identifiers), inlined for an OR clause.
    return " OR ".join(f"(','||trackers||',') LIKE '%,{t},%'" for t in trackers) or "0"


def _reset_resummarize(store, window, trackers, log):
    """Force redo: ready/written → pending in this window+trackers (re-summarize)."""
    n = store.conn.execute(
        f"UPDATE articles SET status='pending' WHERE status IN ('ready','written') "
        f"AND date>=? AND date<=? AND ({_tracker_or(trackers)})",
        (window.since.isoformat(), window.until.isoformat())).rowcount
    store.conn.commit()
    log.info("force re-summarize: reset %d -> pending", n)


def _reset_retranslate(store, window, trackers, log):
    """Force redo: clear summary_en in this window+trackers (re-translate)."""
    n = store.conn.execute(
        f"UPDATE articles SET summary_en=NULL WHERE status IN ('ready','written') "
        f"AND date>=? AND date<=? AND ({_tracker_or(trackers)})",
        (window.since.isoformat(), window.until.isoformat())).rowcount
    store.conn.commit()
    log.info("force re-translate: cleared %d summary_en", n)


def _finalize(store, rep, t0, log, stats0=None):
    rep.elapsed_s = time.time() - t0
    if stats0 is not None:
        from . import llm
        rep.gemini_fallback = llm.STATS["gemini_fallback"] - stats0.get("gemini_fallback", 0)
    stats = asdict(rep)
    store.finish_run(rep.run_id, stats_json=json.dumps(stats, ensure_ascii=False),
                     errors_json=json.dumps(rep.errors, ensure_ascii=False), ok=rep.ok)
    try:
        status_path = PROJECT_ROOT / "status.json"
        status_path.write_text(json.dumps({
            "run_id": rep.run_id, "ok": rep.ok, "one_line": rep.one_line(),
            "finished_at": datetime.utcnow().isoformat(), **stats,
        }, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception as exc:
        log.warning("could not write status.json: %s", exc)
    log.info("run %s finished: %s", rep.run_id, rep.one_line())
