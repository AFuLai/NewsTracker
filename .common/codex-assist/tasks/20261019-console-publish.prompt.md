# Task: redesign the pipeline console page and add a Publish (Firebase) feature

Working root: /opt/tracker/repo (always use absolute paths).

## Files you may touch (closed list — anything else is a scope gap: stop and report it)
1. /opt/tracker/repo/tracker/web_dashboard.py
2. /opt/tracker/repo/tests/test_dashboard_publish.py   (new file)

Read for context only (do not edit): /opt/tracker/repo/tracker/deploy.py (the `deploy(*, channel=None)`
function and `DeployError`), /opt/tracker/repo/tests/conftest.py (fixture `_never_deploy` already replaces
`tracker.deploy.deploy` with a stub under test), /opt/tracker/repo/tests/test_web_dashboard.py.

## Part 1 — backend: publish action (tracker/web_dashboard.py)

`_apply_control(controller, cmd, cra_job=None)` (around line 127) handles POST /control commands.
Add a command `{"cmd": "deploy", "channel": "<name>"}` (channel optional; absent or "" = live site):

- It must NOT block the HTTP handler: start the deploy in a background `threading.Thread(daemon=True)`
  and return `(True, "")` immediately.
- It must refuse with `(False, "<zh-Hant message>")` when a deploy is already running (one at a time).
- Like `cralib` and the endpoint commands, it works when `controller is None`, so put it before the
  `if controller is None` check.
- Keep the deploy state in a small module-level object guarded by a `threading.Lock`:
  `state` one of `idle | running | ok | failed`, `channel`, `message` (last line on ok, the error text on
  failure), `started_at`, `finished_at` (epoch seconds). Call `tracker.deploy.deploy(channel=...)`
  through the module (`from . import deploy as _deploy_mod; _deploy_mod.deploy(...)`) so the test stub
  in conftest applies. Catch `DeployError` AND any other Exception: a failure is recorded as
  `state="failed"` with its message, never swallowed and never reported as ok.
- `WebReporter.snapshot()` gains a key `"deploy"` holding a copy of that state dict.
- Do not change the existing `/state` keys, the existing commands, the bind-host logic or the
  `serve()` signature.

## Part 2 — frontend: redesign `_HTML` (same file, the r"""...""" string from about line 218 to the end)

Visual direction (inspired by modern website-builder templates, e.g. the Wix template gallery):
- A sticky top bar: product name 「NewsTracker 控制台」 on the left, section links on the right
  (執行 / 發布 / LLM 端點 / CRA 圖書庫) that scroll to anchored sections.
- A hero status card at the top: big run state (待命 / 執行中 / 完成 / 失敗), the period title, elapsed
  time and ETA, in large type.
- Content laid out as cards in a responsive grid (one column under 760px, two columns above where it
  fits), generous whitespace (24–32px gaps), 12–16px corner radius, soft shadows, one accent colour.
- Light theme by default with a `@media (prefers-color-scheme: dark)` variant; all colours as CSS custom
  properties on `:root`. System font stack including "Microsoft JhengHei". No external fonts, scripts
  or CDN links — the page must stay fully self-contained.
- New 「發布」card: shows the deploy state (with colour: idle grey, running accent + spinner, ok green,
  failed red), the channel, the message and finished time; two buttons:
  「預覽發布」 posts `{"cmd":"deploy","channel":"preview"}`;
  「正式發布」 asks `confirm("確定要發布到正式站 afu-news.web.app？")` first and then posts
  `{"cmd":"deploy"}`. Both buttons are disabled while `st.deploy.state === "running"`. If the message
  contains an `https://` URL, render it as a link (escaped with the existing `esc()` helper).
- Keep every existing capability working with the same /state fields and /control commands:
  phase cards with progress bars, start/config form (`buildConfig`), pause/resume/restart/close
  controls (`syncControl`), backend switch, the endpoint picker and policy (`fillEnd`, `pickEnd`,
  `fillPolicy`), the CRA library panel (`syncCra`), the completion summary. You may restructure the
  markup and CSS freely, but keep these JS functions' behaviour and the `poll()` loop.
- All user-visible text stays Traditional Chinese.

## Part 3 — tests (tests/test_dashboard_publish.py, new)

pytest tests, no network, no real firebase (the conftest stub already returns "stubbed under test"):
- deploy command returns ok, and after the thread finishes the snapshot's `deploy.state == "ok"`
  (wait by joining the thread or polling with a short timeout, no sleeps longer than 2 s in total).
- a second deploy while one is running is refused (make the stub block on a `threading.Event`
  via monkeypatch of `tracker.deploy.deploy`).
- a stub that raises `DeployError("boom")` ends in `state == "failed"` and message containing "boom".
- the `_HTML` string contains the 「發布」card markup and the two button labels.

## Rules
- Do not touch any file outside the closed list; do not leave probe or scratch files in the repo.
- Keep existing comments that record decisions (NOTE / WHY / SAFETY etc.).
- Where a rule here contradicts the existing code's contract, say so in your answer instead of
  working around it.
- Before finishing run: `/opt/venv/bin/python -m pytest -q -p no:cacheprovider tests` and report the
  last line verbatim.
- Final answer: list of files changed, what you ran and its result, anything you assumed.
