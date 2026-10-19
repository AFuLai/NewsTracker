Restyle the local console in tracker/web_dashboard.py (the embedded `_HTML`) into the "single-screen ops board" the user chose. Design reference (read it): refs/plans/20261019-ux-mockups/Main.dc.html and refs/plans/20261019-ux-mockups/README.md. Background analysis with line numbers: .common/codex-assist/runs/20261019-ux-research/answer.txt section 1 (direction A). Touch only tracker/web_dashboard.py and tests/test_web_dashboard.py.

Layout:
- The top nav and the hero merge into one dark status band about 44px tall: title, state pill, run title, elapsed/ETA, the run controls. Keep #hero, #heroState, #title, #elapsed, #eta, #live and every class the JS sets on them.
- Below it, a two-column area (7:5) with max-width 1440px. Left: the run card (config, control, phases, note, summary). Right, stacked: Publish, LLM endpoints, CRA library (keep its hidden logic).
- Under 1100px wide it falls back to a single column, with no horizontal scroll.
- The site preview card becomes a full-width collapsible drawer at the bottom, collapsed by default. The iframe is at most 45vh, and there is a "全螢幕" button that makes it fill the viewport, with Esc or the same button to exit.
- Density: body 13px; card titles 12px/600 with letter-spacing; card padding 10-12px; gaps 10-12px; phase rows 6x10px; radius 8px; 1px borders instead of shadows; IBM Plex Mono-style monospace for numbers (use a system monospace stack, no external fonts).

Hard rules:
- Every element id that the script references (`$('...')`) must still exist. An acceptance probe checks this.
- No behaviour change to the polling, deploy or control JS.
- Do not remove decision or explanatory comments.
- Add a test in tests/test_web_dashboard.py asserting that every `$('id')` used in `_HTML` has a matching id="..." in it.
