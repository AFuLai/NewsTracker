# Tracker (v2)

Self-driving security / regulation news tracker. Runs entirely on WSL with a
local Ollama model (`gemma4:e4b`) — **no external API**. Claude Code triggers it
with one command and reads one line back; everything else (fetch, relevance
gating, summarize, self-review, write, cleanup) happens locally. Outputs a static
HTML site to `D:\Claude\Track Security\html\`.

**Trackers** (top-level topics, switchable in the UI; each has its own
`searchinfo_*.md`, categories, and manifest tree):
- `security` — 資安新聞（5 類）
- `eu_cra` — EU CRA 法令與標準（7 類）
- `os` — 作業系統 Linux / Windows / Apple / Android（依平台 5 類，含 NVD CVE API）

Adding a tracker = one `searchinfo_*.md` + one line in `SEARCHINFOS`
(`tracker/__init__.py`); the orchestrator, cross-detection, manifest, and UI
tracker pill all pick it up generically.

## One-command operation (zero-touch)

Runs in the machine-wide venv at **`/opt/venv`** (shared with other tools). The
`tracker` command is on PATH via `~/.local/bin/tracker` — no activation needed.

```bash
tracker pipeline --days 7          # 更新最近 7 天（含今天）
# → one summary line, e.g.
# run#42 OK 2026-06-09..2026-06-15 [security,eu_cra] | fetch 41new/40src (304:6 fail:1) | gate -23 | sum 38/41 (oow:3 rev_fail:1) | cross +4/-2 | write 13d | err 2 | 612s
```

**Date window.** Three ways, in priority order:

| Form | Window |
|------|--------|
| `--days N` | most recent N days **including today** (`--days 1` = today only) |
| `--since YYYY-MM-DD --until YYYY-MM-DD` | explicit range |
| *(omit all)* | default = last 7 days incl. today |

`--since` alone runs from that date to today; `--until` alone ends there with a
7-day lookback. `--days` overrides both.

On an interactive terminal this shows a **live execution dashboard** — the
planned phases (Preflight → Fetch → Gate → Summarize → Write → Cleanup) with
✓/▶/· status, a progress bar + ETA for the long phases, the current item, and
elapsed time; on completion a summary panel.

For a **graphical browser UI**, add `--ui`:

```bash
tracker pipeline --since 2026-03-01 --until 2026-05-31 --ui
# 執行儀表板： http://localhost:8787   ← opens automatically in the Windows browser
```

It starts a tiny local web server (works from WSL2 via localhost forwarding — no
X server needed), opens your Windows default browser, and renders graphical phase
cards + progress bars + ETA that update live, plus a completion summary. `--port`
changes the port (default 8787).

**Interactive console.** With `--ui` the dashboard opens **before anything runs**
and shows a parameter form (date window, trackers, Summarize/Translate backend,
Gate/Translate/Cleanup toggles, summarize limit) pre-filled from the command
line. Review/edit it, then click **▶ 開始執行** to start. The CLI flags are just
the defaults; the run uses whatever you confirm in the form. After it starts, the
panel becomes a control bar:
- **⏸ 暫停 / ▶ 恢復** — pause/resume the run (takes effect between articles).
- **↻ 重新來過 從 [stage]** — restart from any stage on the current data; tick
  **強制重做** to first reset that stage's output (ready→pending for Summarize,
  clear `summary_en` for Translate) and redo it.
- **Summarize / Translate backend** — switch between Gemini and Ollama live; the
  change applies to subsequent articles.
- **✕ 關閉** — stop the run and exit.

## LLM backends (Gemini via Chrome / Ollama)

Summarize and Translate can run on **Gemini** (driven through your logged-in
debug Chrome, like IC37) or local **Ollama**. Default is **auto**: Gemini if a
debug Chrome (`--remote-debugging-port=9999`) is reachable, otherwise Ollama. A
Gemini call that fails (Chrome down, not logged in, timeout) **transparently
falls back to Ollama** per call, so a run never stalls.

```bash
tracker pipeline --days 7 --summarize-llm gemini --translate-llm ollama
tracker pipeline --days 7 --gemini-model Flash-Lite     # pick the Gemini UI model
# auto (default): gemini when Chrome is up, else ollama; per-call fallback to ollama
```

Gate / review / probe always use Ollama (fast, high-frequency, local).
**Privacy:** the Gemini backend sends prompts to Google — it is only the default
when your debug Chrome is detected. The shared venv lives at `/opt/venv` (with
`playwright`).

Pass `--quiet` for the one-line-only form (zero-touch / piping). Full detail
always goes to `logs/run-<ts>.log`, the `runs` DB table, and `status.json` at the
project root:

```bash
tracker status --last-run
```

**Dependency preflight.** Every run first ensures ollama is up — if not, it
auto-starts `ollama serve` in the background (detached, left running for next
time). If a chosen source needs a JS-rendering browser (method=BROWSER) and a
debug Chrome isn't reachable, you're told to start it
(`chrome --remote-debugging-port=9999`) and retry, or cancel (browser sources
are then skipped).

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
ARCHIVE / BROWSER (see `tracker/methods.py`). BROWSER renders JS-only pages via a
debug Chrome (CDP) — opt-in; needs `chrome --remote-debugging-port=9999`.

## Ollama layers

| Layer | Module | Role |
|-------|--------|------|
| L1 gate | `llm/gate.py` | batch relevance pre-filter (drops footer/ads/off-topic); lenient, all-keep on failure |
| L2 summarize | `llm/summarize.py` |繁中 summary + category + tags |
| L3 review | `llm/review.py` | deterministic anti-hallucination (cited CVE/CVSS must appear in the source body); 1 retry then `review_failed` |
| L4 probe | `llm/probe.py` | page-structure classification for auto-probe |
| L5 translate | `llm/translate.py` | English mirror of title/summary/tags (zh→en; CVE IDs & proper nouns preserved) |

## Bilingual (中文 / English)

Every article is summarized in Traditional Chinese, then mirrored into English by
the local L5 layer (`title_en` / `summary_en` / `tags_en` columns; CVE IDs,
versions, and proper nouns are kept verbatim). The site has a **🌐 中 / EN**
toggle in the top-right header — it switches article text, category labels,
tracker names, and all UI chrome, and remembers the choice in `localStorage`.
Items without an English mirror fall back to Chinese, so the toggle is always safe.

## Site-wide search

The news area's first row has a **🔎 search box** that queries the whole site
(the current tracker, across all years). On the first search the UI lazy-loads
every day file once, then filters in-memory. Matching is case-insensitive, ANDs
space-separated terms, and is done on **word boundaries** for alphanumeric terms
(so "CRA" matches the acronym, not the "cra" inside "crash") while keeping
substring matching for CJK. It searches **only the fields shown in the current
language** — on the 中文 page it matches the Chinese title/summary/tags, on the
English page the English ones — so a search never hits a hidden translation.
Results respect the active category filter, and switching language re-runs an
active search.

Next to the box are **scope toggles — 標題 / 內文 / 標籤 (Title / Body / Tags)** —
to restrict which fields are matched; all three are on by default and at least
one always stays on. Changing a scope re-runs the search and re-adjusts the date
menu.

After a search the **date menu adjusts to the results**: year pills show only
years with matches, the month grid greys out months with none, and the per-month
date list shows only matched dates with their match counts — so you can drill
year → month → date entirely within the result set. Clear the box (✕ or Esc) to
return to normal browsing. Switching tracker or category re-scopes the search.

## Bilingual translation backfill

The pipeline translates new articles automatically (the **Translate** phase runs
after Summarize). To backfill or re-translate existing history:

```bash
tracker translate            # translate every article still missing English,
                             # then re-render the affected day files + manifests
tracker translate --no-rewrite   # DB only, skip the re-render
tracker pipeline --days 7 --no-translate   # skip the English mirror for one run
```

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
- After any change: `python -m pytest -q` (64 tests).
