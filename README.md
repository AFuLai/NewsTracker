# Tracker (v2)

Self-driving security / regulation news tracker. Runs entirely on WSL with a
local Ollama model (`gemma4:e4b`) — **no external API**. Claude Code triggers it
with one command and reads one line back; everything else (fetch, relevance
gating, summarize, self-review, write, cleanup) happens locally. Outputs a static
HTML site to `D:\Claude\Track Security\html\`.

## One-command operation (zero-touch)

```bash
cd /opt/tracker && source .venv/bin/activate
tracker pipeline --since 2026-06-09 --until 2026-06-15
# → one summary line, e.g.
# run#42 OK 2026-06-09..2026-06-15 [security,eu_cra] | fetch 41new/40src (304:6 fail:1) | gate -23 | sum 38/41 (oow:3 rev_fail:1) | cross +4/-2 | write 13d | err 2 | 612s
```

Full detail goes to `logs/run-<ts>.log`, the `runs` DB table, and `status.json`
at the project root. For human-readable detail of the last run:

```bash
tracker status --last-run
```

## Architecture (v2)

```
Claude  ──one command──▶  tracker pipeline  ──one line──▶  Claude
                              │
                  orchestrator.run_pipeline() — single process
   ┌──────────────────────────────────────────────────────────────┐
   │ 0 preflight   ollama self-test (abort cleanly if down)        │
   │ 1 FETCH       fetcher registry over source_profiles           │
   │               conditional GET (304) + batch dedup + watermark │
   │ 2 GATE  (L1)  ollama batch relevance filter — drop noise      │
   │ 3 SUMMARIZE   L2 summarize → L3 review (anti-hallucination)    │
   │               → cross-tracker detect                          │
   │ 4 WRITE       cluster + render data-*.js + per-tracker manifest│
   │ 5 CLEANUP     cross-scan reverse (demote false positives)     │
   └──────────────────────────────────────────────────────────────┘
```

Key tables (`db/articles.sqlite`, all migrations idempotent):
- `articles` — candidates + summaries (status: pending → gated_out / ready /
  written / skipped_window / review_failed)
- `source_profiles` — per-source runtime cache: method, feed_url, etag,
  last_modified, last_seen watermark, consecutive_failures, probe_note
- `runs` — one row per pipeline invocation (args/stats/errors JSON)

## Adding a new source — name + URL only

`searchinfo_*.md` stays the source of truth. To add a source you only need a
name and URL; the method is auto-detected:

```bash
# 1. add one ENTRY row to searchinfo_security.md (or _eu_cra.md):
#    | My Source | https://example.com/news | description |
# 2. seed/refresh profiles:
tracker init-profiles
# 3. let auto-probe pick the fetch method (RSS → listing → stealth → ollama → wayback → search):
tracker probe https://example.com/news --tracker security --save
```

You do **not** edit `builtins.py` anymore. Auto-probe also self-heals: any source
whose `consecutive_failures` reaches 3 is re-probed automatically at the start of
the next fetch. Probe order:

1. RSS autodiscovery (`<link rel=alternate>` + common feed paths, validated)
2. Live listing density (≥5 article-shape links → LISTING)
3. curl_cffi stealth retry (defeats TLS-fingerprint bot blocks, e.g. CISA)
4. Ollama L4 page-structure classification
5. Wayback snapshot availability → ARCHIVE
6. Fallback → SEARCH (DuckDuckGo, cached 24h)

## Adding a new fetch model — one file, no core edits

Drop a file in `tracker/fetchers/` with a class decorated `@register`:

```python
# tracker/fetchers/jsonld.py
from . import Candidate, DateWindow, FetchResult, Profile, register

@register
class JsonLdFetcher:
    method = "JSONLD"
    def fetch(self, profile: Profile, window: DateWindow) -> FetchResult:
        ...  # return FetchResult(items=[Candidate(url=..., title=...)])
```

`tracker.fetchers._autoload()` imports it on package load; `get_fetcher("JSONLD")`
then dispatches to it. **No edits to `cli.py` or `orchestrator.py`.** Point a
source at it by setting that profile's `method` (via `init-profiles` mapping or
`tracker probe --save`). Canonical methods: FEED / LISTING / SEARCH / API /
ARCHIVE (see `tracker/methods.py`).

## Ollama layers

| Layer | Module | Role |
|-------|--------|------|
| L1 gate | `llm/gate.py` | batch relevance pre-filter (drops footer/ads/off-topic); lenient, all-keep on failure |
| L2 summarize | `llm/summarize.py` |繁中 summary + category + tags |
| L3 review | `llm/review.py` | deterministic anti-hallucination (cited CVE/CVSS must appear in the source body); 1 retry then `review_failed` |
| L4 probe | `llm/probe.py` | page-structure classification for auto-probe |

## CLI

| Command | Purpose |
|---------|---------|
| `pipeline` | one-shot fetch→gate→summarize→write→cleanup (zero-touch) |
| `status [--last-run]` | source/DB stats, or last run detail |
| `init-profiles` | seed `source_profiles` from searchinfo ENTRYs |
| `probe <url> [--save]` | auto-detect a source's fetch method |
| `fetch / summarize / write / cross-scan` | individual phases (still usable) |
| `migrate-v2` | one-shot legacy html/data layout migration |
| `pack [--major]` | ChangeLog → commit → tag → tarball zip |

## Layout

| Path | Purpose |
|------|---------|
| `tracker/fetchers/` | pluggable fetch models (registry) |
| `tracker/llm/` | ollama layers (gate/summarize/review/probe) |
| `tracker/orchestrator.py` | single-process pipeline |
| `tracker/prompts/` `tracker/templates/` | ollama prompts / Jinja2 `.js` output |
| `db/articles.sqlite` | local store (gitignored) |
| `logs/` | per-run DEBUG logs (gitignored) |
| `VERSION` `ChangeLog.html` | version + accumulating release notes |

## Performance

`summarize` is bottlenecked by serial ollama calls (~15–20s/article on
`gemma4:e4b`); body-fetch runs in parallel. To parallelize ollama, set
`OLLAMA_NUM_PARALLEL=2 ollama serve` (needs ~12 GB VRAM) and run with
`--concurrency 2`. The L1 gate cuts 30–50% of candidates before they reach
summarize, which is the bigger win. Conditional GET (304) + the 24h SEARCH query
cache make re-runs over an overlapping window cheap.

## Operational notes

- curl_cffi must stay serialized behind a lock (`sources/stealth.py`) — parallel
  calls crash glibc (`free(): invalid size`).
- DDG rate-limits repeated queries; the SEARCH fetcher caches results 24h.
- If ollama wedges: `pkill -9 ollama && ollama serve`.
- After any change: `python -m pytest -q` (53 tests).
