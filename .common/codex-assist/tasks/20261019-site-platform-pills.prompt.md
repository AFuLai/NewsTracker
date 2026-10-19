# Task: give OS platforms their own pill row on the news site (option A, user-approved 2026-10-19)

Working root: /opt/tracker/repo (absolute paths only).

## Files you may touch (closed list)
1. /opt/tracker/repo/ui/index.html

Anything else is a scope gap: stop and report it. Do not touch tracker/*.py, searchinfo/, manifests.

## Background (from the approved plan)
On the security page `CAT_MAP.security` folds the four OS platforms into 漏洞與威脅情報
(`'Linux':'漏洞與威脅情報', 'Windows':'漏洞與威脅情報', 'Apple':'漏洞與威脅情報',` and
`'Android':'漏洞與威脅情報',` around lines 1316–1317), so that pill holds about two thirds of all
items. On the os page `CAT_MAP.os` folds 漏洞與威脅情報 into 重點關注 (line ~1333).

## The change (user decisions are fixed — do not re-decide them)
1. In `CAT_MAP.security` delete exactly the four platform entries (Linux, Windows, Apple, Android).
   Keep every other entry, including `'重點關注':'前瞻技術'`.
2. In `CAT_MAP.os` delete exactly the `'漏洞與威脅情報':'重點關注'` entry. Keep the rest.
3. Add one UI constant next to CAT_MAP, e.g.
   `const SECONDARY_PILLS = { security: { label: '平台', cats: ['Linux','Windows','Apple','Android'] },
                              os: { label: '類型', cats: ['漏洞與威脅情報'] } };`
   (eu_cra has no second row.)
4. `buildCatPills(cats)` (line ~1811) renders, after the existing first row, a second row for the
   current tracker (`state.currentTracker`) when SECONDARY_PILLS has an entry: a small row label
   (the `label`) followed by one pill per category, built exactly like the first-row pills
   (`className 'pill cat-pill'`, `dataset.cat`, `dataset.icon` from the existing `icons` map,
   `onclick = () => setFilter(c)`). Second-row pills share `state.filterCats` with the first row
   (OR semantics, same multi-select); no new state, no new hash parameter — `c=Linux` and
   `c=Linux,Windows` must restore through the existing hash code.
   - Never create two pills with the same `data-cat` inside `#cat-pills`.
   - The second row must be rebuilt / removed when the tracker changes (buildCatPills is already
     called on tracker switch at ~1125 and ~1473), so eu_cra shows no platform pills.
   - Check the other `cat-pills` user at line ~1530 (library mode) still works.
5. `refreshCatPills()` must also refresh the second-row pills (it already selects
   `#cat-pills .cat-pill`; keep it that way if the second row lives inside `#cat-pills`).
6. CSS: the second row sits on its own line (e.g. a `.cat-row-2` wrapper with `flex-basis:100%`
   or a separate flex container), a muted small label before it, and it wraps on mobile. Note the
   rule at line ~893 sets `flex-wrap: nowrap` on `#cat-pills` at some breakpoint — make sure the second
   row is still reachable there (horizontal scroll like the first row is fine).
7. Platform articles now keep their own category on the security page, so their card badge uses the
   existing `.cat-Linux` / `.cat-Windows` / `.cat-Apple` / `.cat-Android` styles (they already exist,
   around line 652). Do not add new colours unless one of those is missing for the security page.

## Must not
- Change `effectiveCat()` logic beyond what the CAT_MAP edits imply, the hash format, search, the month
  menu, or any other tracker's behaviour.
- Remove or rewrite comments that record decisions (the CAT_MAP explanatory comment may be updated to
  describe the new behaviour; keep its intent).
- Where an instruction here contradicts the existing code's contract, say so in your answer instead of
  working around it.

## Before finishing
Run `node --check` on the page's inline script (extract it to /tmp/agy-probes/, delete afterwards) and
`/opt/venv/bin/python -m pytest -q -p no:cacheprovider tests`; report both results verbatim.
Final answer: what changed (with line numbers), what you ran, what you assumed.
