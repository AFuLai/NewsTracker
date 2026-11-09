Slice T2 of the 2026-11-09 backlog (refs/plans/BACKLOG.md item 3: the news workspace feels slow). Touch only ui/index.html. Vanilla JS.

Measured cause: the workspace default range (30d) calls ensureHubLoaded(30), which awaits ALL ~30 day files (each `data/data-YYYYMMDD.js` is up to ~500 KB, ~10 MB total across trackers) before the first wsDraw, and wsDraw then builds every card (~2700) in one go.

Read (ui/index.html; grep, do not read the whole file): ensureHubLoaded (~3336), loadDayFile / injectScript (~5880), wsLoadRange / wsEnsure (~4330-4362), wsDraw (~4633-4703), renderWorkspace (~4704-4716), buildWsCard / buildWsTitleRow (~5432-5480), wsRefocus, the ws state object (grep `const ws = {`), I18N keys wsLoading / tlCount.

1. Progressive data loading.
   - ensureHubLoaded(days, cb, onProgress) gains an optional third argument. Day files are loaded newest date first, at most 4 in flight at a time (not all at once). After the files of the newest 7 distinct dates (or all of them if fewer) have finished, call onProgress({ done, total }) once; afterwards call it again at most every 400 ms while loading continues (done/total = day files finished / day files needed), then call cb when everything is loaded (as today). Existing callers that pass no onProgress behave as today apart from the ordering and the concurrency cap.
   - wsLoadRange / wsEnsure pass a progress callback through for the quick ranges (WS_QUICK) so that renderWorkspace can draw as soon as the first progress call arrives (it must still honour `seq` so a late load never draws over a newer view), and redraws on each further progress call and on completion. While loading is incomplete, the ws-head shows a muted status `載入中 done/total` / `Loading done/total` (new I18N key wsPartial) next to the count; it disappears when done.
   - A redraw caused by progress must not move the user: keep window.scrollY, the focused element (wsRefocus already handles focus keys) and the number of articles already rendered (see 2).
   - Non-quick ranges (year, a single day, custom) keep today's behaviour.
2. Incremental rendering in wsDraw.
   - Render the first 60 articles of `shown` (keeping the date grouping and both cards / titles modes), then append the next 60 each time a sentinel element at the end of the list comes within 800 px of the viewport (IntersectionObserver with rootMargin). When IntersectionObserver is unavailable, render everything as today.
   - Keep the rendered count in ws (e.g. ws.rendered); a redraw from progress keeps at least that many; a change of range, filter, search or mode resets it to 60. A date group split across two batches must append into the same group/grid, not create a second divider for the same date.
   - The header count and the rail counts still reflect the whole `shown` / `base`, not the rendered part.
   - Opening an article from a permalink (`pendingOpenId`) whose card is not rendered yet must still work (render up to it first, or open it from `shown` directly).
3. Do not change: TRACKER-TYPES, TRACKER-PREFS, TRACKER-STORE blocks; the hub (我的關注) view apart from what it gets from ensureHubLoaded; the reader. Do not add test-environment detection of any kind.

Done = the existing pytest suite passes and the inline JS parses with `node --check`; the session will measure first-paint time and scroll behaviour in a real browser against the previous commit.
