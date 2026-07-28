"""Tests for F2 + F3 (plan: tracker-v221-extraction-dates.md).

F2 — a trafilatura-extracted meta date must never outrank the feed/API
pubDate for the summarize-time window decision. Previously
`eff_date = dates[aid] or r["date"]` let a bogus site-wide meta date (e.g.
Phoronix's constant 2026-02-01) win over a fresh, correct feed date and get
the article silently `skipped_window`'d.

F3 — an article with neither a feed date nor an extractable meta date must
not stay `date IS NULL` forever (every downstream query — _ready_dates,
rebuild_days, list_by_date, list_writable_for_day — is keyed on a non-NULL
date), or it becomes permanently invisible even after being fully
summarized. The fix falls back to the discovery date (`fetched_at`, stamped
at insert time) only when both real dates are absent.

Both bugs existed in two parallel code paths: orchestrator._phase_summarize
(used by `tracker daily`/`tracker pipeline`) and cli.summarize (the
standalone `tracker summarize` command). Both are covered here.
"""
from __future__ import annotations

import logging
import tempfile
from datetime import date as _date
from pathlib import Path

import tracker.orchestrator as orch
from tracker.dedup import Store
from tracker.fetchers import DateWindow
from tracker.orchestrator import RunReport, _phase_summarize
from tracker.progress import NullReporter

LOG = logging.getLogger("test_date_priority")


class _FakeInfo:
    categories = ["test-cat"]
    category_defs = {}
    title = "Fake Tracker"


def _patch_common(monkeypatch, *, fetch_map):
    """Wire orchestrator._phase_summarize's dependencies to deterministic fakes.

    fetch_map: {url: (body, meta_date_or_None)} — stands in for
    sources.article.fetch_body_with_date, which normally runs trafilatura
    against the live page.
    """
    # Single-entry SEARCHINFOS so the cross-tracker-detect loop (which iterates
    # every OTHER tracker) has nothing to do with our fake tracker name.
    monkeypatch.setattr(orch, "SEARCHINFOS", {"security": Path("unused")})
    monkeypatch.setattr(orch, "load_tracker", lambda name: _FakeInfo())
    # Bypass the L3 ollama review hook entirely — not what these tests probe.
    monkeypatch.setattr(orch, "REVIEW_FN", lambda result, raw_text, info: (True, None))

    import tracker.llm as llm_mod
    import tracker.sources.article as article_mod

    def fake_summarize_article(*, url, raw_text, categories, category_defs, backend="ollama"):
        return {"title": "Fake Title", "summary": "Fake summary.",
                "category": categories[0], "tags": ["fake"]}

    def fake_fetch_body_with_date(url, **kwargs):
        return fetch_map.get(url, ("", None))

    monkeypatch.setattr(llm_mod, "summarize_article", fake_summarize_article)
    monkeypatch.setattr(article_mod, "fetch_body_with_date", fake_fetch_body_with_date)


def _run_summarize(store, *, since: str, until: str):
    window = DateWindow(_date.fromisoformat(since), _date.fromisoformat(until))
    rep = RunReport()
    rpt = NullReporter()
    _phase_summarize(store, window, ["security"], rep, LOG, limit=100,
                     concurrency=2, rpt=rpt, controller=None, backend="ollama")
    return rep


def test_feed_date_wins_over_bad_meta_date(monkeypatch):
    """F2: a stale/bogus meta date (outside the window) must not cause an
    article with a good, in-window feed date to be skipped — and the stored
    `date` must remain the feed date, not the bogus meta date."""
    tmp = Path(tempfile.mkdtemp())
    store = Store(tmp / "t.sqlite")
    url = "https://phoronix.example/some-fresh-article"
    store.insert_candidates_batch([{
        "url": url, "source": "Phoronix", "title": "orig title",
        "date": "2026-07-26",  # real feed pubDate, inside the run window
        "raw_text": "", "tracker": "security", "content_hash": "h1",
    }])

    # trafilatura pulls the site-wide (wrong) constant meta date, well
    # outside the window — this is exactly the Phoronix 2026-02-01 case.
    _patch_common(monkeypatch, fetch_map={url: ("A" * 900, "2026-02-01")})

    rep = _run_summarize(store, since="2026-07-01", until="2026-07-31")

    assert rep.out_of_window == 0, "a good feed date must not be overridden by a bad meta date"
    assert rep.summarized == 1

    row = store.conn.execute("SELECT * FROM articles WHERE url=?", (url,)).fetchone()
    assert row["status"] == "ready"
    assert row["date"] == "2026-07-26", (
        "the persisted date must stay the feed date; COALESCE must not let "
        "the bogus meta date in since a real date was already stored")


def test_bad_meta_date_would_have_wrongly_skipped_without_the_fix():
    """Sanity check pinning the OLD (buggy) priority so the regression is
    unambiguous: dates[aid] or r["date"] picks the meta date first."""
    dates_aid = "2026-02-01"
    r_date = "2026-07-26"
    old_eff_date = dates_aid or r_date
    new_eff_date = r_date or dates_aid
    assert old_eff_date == "2026-02-01"
    assert new_eff_date == "2026-07-26"


def test_missing_date_falls_back_to_discovery_date(monkeypatch):
    """F3: no feed date, no extractable meta date → the article must still
    end up with a non-NULL date (discovery date fallback), or it can never be
    written out by _ready_dates / list_by_date / list_writable_for_day."""
    tmp = Path(tempfile.mkdtemp())
    store = Store(tmp / "t.sqlite")
    url = "https://eur-lex.europa.eu/eli/reg/2024/2847"
    store.insert_candidates_batch([{
        "url": url, "source": "EUR-Lex", "title": "CRA regulation text",
        "date": None,  # LISTING/ARCHIVE-style source: no feed date at all
        "raw_text": "", "tracker": "security", "content_hash": "h2",
    }])
    fetched_at = store.conn.execute(
        "SELECT fetched_at FROM articles WHERE url=?", (url,)).fetchone()[0]
    expected_date = fetched_at[:10]

    # meta extraction also fails to find a date (returns None) — the LISTING/
    # SEARCH/ARCHIVE fetchers don't set `published`, and this page's own meta
    # tags don't parse either.
    _patch_common(monkeypatch, fetch_map={url: ("B" * 900, None)})

    rep = _run_summarize(store, since="2000-01-01", until="2099-12-31")

    assert rep.summarized == 1
    row = store.conn.execute("SELECT * FROM articles WHERE url=?", (url,)).fetchone()
    assert row["status"] == "ready"
    assert row["date"] is not None, (
        "an article with no feed/meta date must fall back to the discovery "
        "date, not stay NULL forever (F3: permanently invisible 'ready' rows)")
    assert row["date"] == expected_date


def test_missing_date_fallback_does_not_clobber_a_real_date(monkeypatch):
    """The fallback must only ever fire when BOTH the feed and meta dates are
    absent. If the feed already supplied a date, the discovery-date fallback
    must never touch it."""
    tmp = Path(tempfile.mkdtemp())
    store = Store(tmp / "t.sqlite")
    url = "https://example.com/has-a-real-date"
    store.insert_candidates_batch([{
        "url": url, "source": "Example", "title": "t",
        "date": "2026-05-01", "raw_text": "", "tracker": "security",
        "content_hash": "h3",
    }])
    _patch_common(monkeypatch, fetch_map={url: ("C" * 900, None)})

    rep = _run_summarize(store, since="2000-01-01", until="2099-12-31")

    assert rep.summarized == 1
    row = store.conn.execute("SELECT * FROM articles WHERE url=?", (url,)).fetchone()
    assert row["date"] == "2026-05-01"


# ── Parallel path: cli.summarize (the standalone `tracker summarize` command) ──
# Same F2/F3 bug, same fix, different call site (cli.py:~352-390). Covered
# separately since it does not share code with orchestrator._phase_summarize.

from typer.testing import CliRunner  # noqa: E402

from tracker.cli import app  # noqa: E402

runner = CliRunner()


def test_cli_summarize_feed_date_wins_over_bad_meta_date(monkeypatch, tmp_path):
    db = tmp_path / "t.sqlite"
    store = Store(db)
    url = "https://phoronix.example/cli-path-fresh-article"
    store.insert_candidates_batch([{
        "url": url, "source": "Phoronix", "title": "orig title",
        "date": "2026-07-26", "raw_text": "", "tracker": "security",
        "content_hash": "cli-h1",
    }])

    import tracker.llm as llm_mod
    import tracker.sources.article as article_mod
    monkeypatch.setattr(llm_mod, "summarize_article",
        lambda **kw: {"title": "T", "summary": "S", "category": "test", "tags": ["t"]})
    monkeypatch.setattr(article_mod, "fetch_body_with_date",
        lambda url, **kw: ("A" * 900, "2026-02-01"))

    result = runner.invoke(app, [
        "summarize", "--tracker", "security", "--db", str(db),
        "--since", "2026-07-01", "--until", "2026-07-31",
        "--no-cross-detect",
    ])

    assert result.exit_code == 0, result.output
    assert "out-of-window" not in result.output, result.output

    row = store.conn.execute("SELECT * FROM articles WHERE url=?", (url,)).fetchone()
    assert row["status"] == "ready"
    assert row["date"] == "2026-07-26"


def test_cli_summarize_missing_date_falls_back_to_discovery_date(monkeypatch, tmp_path):
    db = tmp_path / "t.sqlite"
    store = Store(db)
    url = "https://eur-lex.europa.eu/eli/reg/2024/2847-cli"
    store.insert_candidates_batch([{
        "url": url, "source": "EUR-Lex", "title": "CRA regulation text",
        "date": None, "raw_text": "", "tracker": "security",
        "content_hash": "cli-h2",
    }])
    fetched_at = store.conn.execute(
        "SELECT fetched_at FROM articles WHERE url=?", (url,)).fetchone()[0]
    expected_date = fetched_at[:10]

    import tracker.llm as llm_mod
    import tracker.sources.article as article_mod
    monkeypatch.setattr(llm_mod, "summarize_article",
        lambda **kw: {"title": "T", "summary": "S", "category": "test", "tags": ["t"]})
    monkeypatch.setattr(article_mod, "fetch_body_with_date",
        lambda url, **kw: ("B" * 900, None))

    result = runner.invoke(app, [
        "summarize", "--tracker", "security", "--db", str(db),
        "--no-cross-detect",
    ])

    assert result.exit_code == 0, result.output
    row = store.conn.execute("SELECT * FROM articles WHERE url=?", (url,)).fetchone()
    assert row["status"] == "ready"
    assert row["date"] == expected_date
