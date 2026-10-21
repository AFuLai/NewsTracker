Architecture and UX plan (NO code changes). Answer in Traditional Chinese (zh-TW).

User's words (verbatim): 我不是UI專家，但先前已經有一些調查研究，既有設計應該是框架化，要能將資料與顯示脫鉤，針對顯示進行改造，目前的設計感覺好幾套混在一起，沒有天然簡易直覺。幾個大功能要保留，只是改呈現方式，最主要是讀取新聞的沉浸感。

So the user wants: (1) a framework where the data layer is decoupled from the presentation; (2) the presentation redesigned into ONE coherent, simple, intuitive system; (3) all major features kept, only their presentation changed; (4) the top priority is an immersive news-reading experience.

Target: ui/index.html (4354 lines, vanilla JS, no build step, served as a static file, data from data/*.js day files and manifest.js; Firebase Hosting). Existing research and rulings to read first:
- refs/plans/20261019-ux-mockups/README.md: the rulings so far.
- .common/codex-assist/runs/20261019-layout-scenarios-plan/answer.txt: layout survey.
- .common/codex-assist/runs/20261019-ux-research/answer.txt: hub research.
- refs/plans/20261019-watch-and-frame-decisions.md.

Deliver:
1. **Inventory.** Every user-facing feature in ui/index.html today, with file:line for its entry point. Mark each as keep / merge / drop-candidate, with a reason. Cover at least:
   - tracker archive views with the year/month/date sidebar;
   - search;
   - category and platform pills;
   - presets (PRESETS / tracker_view);
   - layouts grid/river/hero/hub/timeline;
   - watch rules / 只看關注;
   - overview hub (sections/tiles, briefing);
   - CRA library;
   - article overlay (openOverlay);
   - bilingual zh/en;
   - skins md3/classic, light/dark theme and 10 palettes;
   - hash permalinks.
   List all localStorage keys (there are 10) and propose how to consolidate them.
2. **Overlaps that make it feel like "several systems mixed".** Be concrete: which features do the same job differently (e.g. three colour systems skin/theme/palette; presets vs hub presentations vs layouts; category pills vs news types vs watch rules; overlay vs reader).
3. **Target architecture, staying a single static page with no build step** (multiple files are allowed if served statically; say so):
   - **Data layer:** a store with a pure query API (e.g. `query({window, types, tags, platforms, search, watchOnly}) -> articles`, plus aggregates), owning loading, caching and de-duplication. It never touches the DOM.
   - **State layer:** one prefs object with one storage key, versioned and migrated from the old keys, plus a URL-hash codec.
   - **View layer:** a small set of renderer components (shell/nav, list item, card, reader, filter bar, stats tile), each a pure function from (data, state) to DOM, with one design-token system (CSS custom properties) that replaces skins, theme and palettes. Palettes become token sets; light/dark becomes two of them.
   - Name the existing functions that map into each layer, cite them, and say which go away.
4. **Immersive reading design** (the core). Propose the reading experience concretely, with ASCII wireframes for desktop and phone. Consider:
   - a reader mode: two-pane list + article on desktop, full-screen article on phone;
   - typography: measure 60–75 characters, CJK line-height, font size control;
   - keyboard j/k/←/→/Esc;
   - swipe on phone;
   - progress / read state (read markers stored locally);
   - minimal chrome while reading;
   - sources and related articles (same CVE / cluster) at the end;
   - "next in this type".
   Reference how 2–3 well-known reading experiences do it (Feedly, Inoreader, Pocket/Reader mode, Apple News, Google News). Fetch what you can and name the URLs you actually fetched.
5. **One navigation model** that subsumes the overview hub, the browse-by-source archive and the CRA library without losing any of them. Give the information architecture as a tree.
6. **Migration slice plan:** ordered small slices, each shippable, that move from today's code to the target without a big-bang rewrite. Each slice lists touched files, what the user would see, and an acceptance check that a session can run (node checks of pure functions, DOM checks in a browser). Existing permalinks must keep working.
7. **Risks and the decisions the user must make**, phrased simply, at most 4, each with your recommendation.

Cite file:line for every claim about our code. State assumptions. Be concise. Prefer tables and wireframes over prose.
