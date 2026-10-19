Research and plan (no code changes). Answer in Traditional Chinese (zh-TW), sections numbered.

Context (measured by the dispatching session): the public site is a single page `ui/index.html` (2376 lines, vanilla JS;
persists prefs in localStorage keys tracker_lang/tracker_theme/tracker_skin/tracker_nav/tracker_lib_group; category pills via
CAT_MAP/buildCatPills ~L1327-1400; card rendering ~L2040-2100; CRA library with clusters ~L1550-1660).
The local console is `tracker/web_dashboard.py` (827 lines; HTML embedded; Publish card with btnPreview -> Firebase preview channel ~L792).

User request (verbatim): 在console要有預覽方式。研究事件地圖的呈現方式。研究 https://www.i-web.com.tw/seo.html 與網路上新聞相關網頁布局，新聞內容框架化，可以選擇不同的導覽情境配置，記錄在瀏覽器記憶。

Deliver:
1. Layout survey: fetch https://www.i-web.com.tw/seo.html and 4-6 real news sites/news-aggregator layouts (name each URL you actually fetched; say "not fetched" otherwise). Extract reusable layout patterns (hero/headline, river, grid, sidebar, timeline, topic hub) and their SEO-relevant structure (headings, schema.org NewsArticle, breadcrumbs).
2. 事件地圖 (event map): 2-4 presentation options (e.g. timeline-by-cluster, geographic map, entity/relationship graph, storyline) — for each: what data our articles already carry (read ui/index.html to see fields used: sources, tags, cluster, date, category) vs what is missing, and library cost (no build step; CDN only).
3. 新聞內容框架化: a content frame (fixed fields per article: 5W1H / impact / affected products / timeline) — which can be derived from existing fields, which need LLM extraction in the pipeline.
4. 導覽情境配置 (navigation scenario presets): 3-5 presets (e.g. 快讀, 分析師, 事件追蹤, 合規 CRA), each = layout + default filters + density; stored as one localStorage key (propose schema, versioning, fallback when storage throws). Name the functions in ui/index.html it would hook into (cite file:line).
5. Console preview: how web_dashboard.py should preview a preset/layout locally before Firebase (cite lines), minimal design.
6. Slice plan: ordered small implement slices, each with touched files and an acceptance check.
Cite file:line for every claim about our code. State assumptions explicitly.
