Design research and proposal (no code changes). Answer in Traditional Chinese (zh-TW). The user says UX is their weak spot and has no proposal of their own: you must PROPOSE concrete directions, matched to existing templates/sites, not ask them to design.

Our code:
- Console (local operator dashboard): tracker/web_dashboard.py, HTML/CSS embedded in `_HTML` (cards: run progress, LLM endpoints, Publish, 網站預覽 preview card with iframe). User verdict: "控制台畫面太過鬆散" (too loose / spread out).
- Public site: ui/index.html. Four top-level views in the header: 資安 (security), EU CRA (eu_cra), 作業系統 (os), CRA 庫 (CRA library). It now has presets (PRESETS, view-select), layouts grid/river/hero/hub/timeline, and a 關注 (watch) feature: WATCH_RULES + tracker_watch + a "只看關注" pill (see refs/plans/20261019-watch-and-frame-decisions.md). User verdict: "目前的關注跟直接點選關鍵字差不多功能" — watch feels the same as clicking a keyword; it should INTEGRATE the four categories (the four views above) into one place and offer different presentations: cards, list, map-style, etc., as news sites do.

Research (name each URL you actually fetched; write "not fetched" otherwise; do not describe a page you did not fetch):
A. https://www.canva.com/website-builder/templates/business/ — pick 3 templates whose structure suits a dense operator console (status + actions + logs + settings). For each: name/URL, layout skeleton (grid columns, card density, typography scale, colour usage), what to borrow.
B. 4-6 news/aggregator sites with a personalised or multi-section front page (e.g. Google News "For you", Feedly, Inoreader, BBC, Reuters, The Verge, iThome, TechNews 科技新報). For each: how they merge sections into one front page and how they switch presentation (cards / list / magazine / map / timeline / topic clusters).
C. "地圖式" (map-style) presentation for our data: we have NO geo fields. Propose what "map" can honestly mean here (treemap by category×tracker, topic mind-map/cluster map, CVE↔vendor relation map, world map only if geo is added later) and which is achievable now client-side with our fields (trackers, category, tags, title, date, sources, watch matches).

Deliver:
1. Console: 2 alternative compact directions (e.g. "single-screen ops board" vs "sidebar + tabs"), each with an ASCII wireframe, which Canva template it borrows from, density targets (font sizes, paddings, gap), and the list of console sections mapped into it. Cite tracker/web_dashboard.py lines for each existing section.
2. Watch hub ("我的關注"): one integrated page/view across all four views, driven by watch rules. Give 2-3 alternative directions with ASCII wireframes: e.g. (a) Google-News-style "For you" sections per rule, (b) dashboard tiles with counts + drill-down, (c) map-style treemap/cluster map. For each: presentation switcher (卡片/條列/地圖…), how rules from all four views combine, how it differs from just clicking a keyword (e.g. cross-tracker, counts/trends, new-since-last-visit using localStorage, per-rule sections). Cite ui/index.html functions it would hook (file:line).
3. Your recommendation for each (1 and 2) with reasons, and the risks.
4. Slice plan for the recommended directions (touched files, acceptance check per slice). CDN libraries allowed only if needed (name exact lib), otherwise vanilla.
Cite file:line for every claim about our code. State assumptions.
