# codex-assist playbook — NewsTracker

> This project's overlay on the shared skill (Common `skills/codex-assist/`, agy engine via `/agy-assist`).

meta:
- project: D--Claude-Tool-NewsTracker
- base: skills/codex-assist@1265f62aecb469d66d9f078552a59e24c544580f
- egress: cloud-ok          # repo is PUBLIC and the site content is public news; no private data in the tree
- writer_mode: true         # implement allowed (user 2026-10-19 asked agy to rework the console and site)

## Read fence notes
- Paths that must never reach an engine: `db/` (articles.sqlite holds raw_text), `endpoints.json`
  (LAN host names), `logs/`. All are gitignored; prompts never ask for them.

## Project-specific notes
- Acceptance runs `/opt/venv/bin/python -m pytest -q -p no:cacheprovider tests` (pytest testpaths=tests).
- The console page is the `_HTML` string in `tracker/web_dashboard.py`; the site shell is `ui/index.html`
  (render copies it to /opt/tracker/web/public/index.html).

## METHOD
- (none yet)

## Retired
- (none)
