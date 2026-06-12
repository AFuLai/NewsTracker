# v2.0 交接計畫 — 自主化新聞抓取架構

> **交接對象**：Opus 4.8 (high)。本文件是自包含的執行計畫，
> 由 Fable 5 於 2026-06-10 撰寫，基線為 git tag `v1.0`（commit `b5c5ab3`）。
> 使用者已核可全部範圍。執行時依「實作順序與依賴」逐 WP 推進，每 WP commit。

## Context（為何做這件事）

Tracker 已迭代 10 版（v0.1→v1.0），功能完整但架構上有四個成長瓶頸：

1. **抓取方法散落**：FEED/PATH/SITE/API/Wayback 五種方法的分派邏輯 inline 寫死在
   `cli.py:fetch`（三個 phase 區塊，724 行的 cli.py 占最大宗）。加新抓取模型 = 改 cli.py。
2. **重複資料處理耗損**：每次 fetch 重新看所有 feed items。實測 2 週 window：
   `total seen=198, inserted 41` → **157 次無效的 per-URL SELECT + 解析**。
   沒有 HTTP conditional GET（etag/last-modified）、沒有 per-source watermark。
3. **ollama 只做摘要**：雜訊（NISC footer、Boannews 無關文章）會吃完整 fetch_body
   （~5s/篇）+ 完整 summarize（~19s/篇）才被丟棄；分類錯誤無自審重試。
4. **pipeline 用 subprocess 自呼叫**：`tracker pipeline` 內部 shell out 給
   `tracker fetch/summarize/write`，每次重載 config + 重開 DB，靠 regex 抓 stdout
   數字，脆弱且浪費。

**v2.0 目標**（使用者已確認的三個決策）：
- **觸發**：仍由 Claude 手動觸發（一個指令），**不**加 cron 排程
- **ollama 自主程度**：相關性門檻 + 品質自審 + **來源適應偵測**（新來源自動探測抓取方式）
- **Claude 介入**：**零介入、純 log** — Claude 只下指令、讀一行結果；所有判斷在本地完成

## 現狀基線（2026-06-10，v1.0）

### 檔案盤點（/opt/tracker，git tag v1.0 = b5c5ab3）

```
tracker/cli.py        724 行  11 個子指令（status/fetch/summarize/preview/write/
                              pipeline/cross-scan/migrate-v2/pack/rewrite_changelog）
tracker/dedup.py      208 行  Store 類：SQLite、upsert per-URL SELECT-then-INSERT
tracker/render.py     186 行  Jinja2 → data-YYYYMMDD.js + per-tracker manifests
tracker/cross.py      128 行  belongs_to()：category/narrow-domain/markers/token 四訊號
tracker/sources/path.py   127 行  fetch_listing + _looks_like_article（footer 過濾）
tracker/config.py     126 行  searchinfo V3 解析；Entry dataclass（accept_all 等）
tracker/cluster.py    120 行  CVE-bridge + Jaccard 0.45 跨來源合併
tracker/sources/site.py   111 行  DuckDuckGo HTML lite（限流問題已知）
tracker/sources/wayback.py 110 行 archive.org fallback
tracker/llm.py        101 行  ollama HTTP (gemma4:e4b)、_coerce_category
tracker/builtins.py    81 行  domain → method/feed/accept_all 種子表（30+ 條）
tracker/sources/feed.py    73 行  aiohttp 並行 RSS
tracker/sources/article.py 61 行  fetch_body_with_date（trafilatura+stealth）
tracker/sources/api.py     40 行  NVD/HN（目前未接入 fetch 流程）
tracker/sources/dispatch.py 36 行 feeds_for/path_entries/site_entries
tracker/sources/stealth.py  26 行  curl_cffi + threading.Lock
```

### DB 現狀（db/articles.sqlite）

- `articles`：507 rows（written 378 / skipped_window 95 / pending 30 / ready 4）
- 欄位：id, url_hash(UNIQUE), url, source, title, date, category, summary, tags,
  status, raw_text, fetched_at, summarized_at, written_at, trackers
- `fetch_errors`：72 rows（含 NISC footer 雜訊、JPCERT 空 body）
- **沒有**：source_profiles、runs、HTTP cache 欄位

### 已知量化痛點

| 痛點 | 量測 |
|------|------|
| Fetch 重複處理 | 2 週 window：157/198 (79%) 候選是重複，每個都跑 SELECT |
| 雜訊 summarize 浪費 | NISC 5 footer + Boannews 偏題 → 每篇白吃 ~5s fetch_body |
| ollama 序列 | 19s/篇 × 全部候選；無 pre-filter |
| pipeline subprocess | 每 phase 重載（~0.5s）+ stdout regex 解析 |
| DDG 限流 | 重複查詢 30 次後 0 hits（上游限制，需 query cache） |

## 目標架構

```
                         Claude（觸發 + 讀一行結果）
                              │  tracker pipeline --since … --until …
                              ▼
┌──────────────────────────────────────────────────────────────┐
│ orchestrator.py（單進程，無 subprocess 自呼叫）                  │
│                                                              │
│  Phase 1 FETCH    Phase 2 GATE      Phase 3 SUMMARIZE        │
│  ┌────────────┐   ┌─────────────┐   ┌──────────────────┐     │
│  │ Fetcher     │   │ ollama L1:  │   │ ollama L2: 摘要   │     │
│  │ registry    │──▶│ 相關性門檻   │──▶│ ollama L3: 自審   │     │
│  │ (pluggable) │   │ (title+snip)│   │ (retry once)     │     │
│  └─────┬──────┘   └─────────────┘   └────────┬─────────┘     │
│        │ 304/watermark skip                  │               │
│  ┌─────▼──────────┐               ┌──────────▼──────────┐    │
│  │ source_profiles │               │ Phase 4 WRITE       │    │
│  │ (etag/watermark │               │ cluster + render +  │    │
│  │  /failure count)│               │ cross-scan reverse  │    │
│  └────────────────┘               └──────────┬──────────┘    │
│                                              ▼               │
│  Phase 0 PROBE（新來源時）         runs table + logs/run-*.log │
│  ollama L4: 頁面結構分類            status.json（一行摘要）      │
└──────────────────────────────────────────────────────────────┘
```

## 實作範圍（六個 Work Package）

### WP1 — Fetcher 抽象層（pluggable 抓取模型）

**新檔 `tracker/fetchers/__init__.py`**：

```python
class FetchResult(NamedTuple):
    items: list[Candidate]      # (url, title, snippet, published)
    not_modified: bool          # HTTP 304 → 完全跳過
    etag: str | None
    last_modified: str | None
    error: str | None

class Fetcher(Protocol):
    method: ClassVar[str]       # "FEED" / "LISTING" / "SEARCH" / "API" / "ARCHIVE"
    def fetch(self, profile: SourceProfile, window: DateWindow) -> FetchResult: ...

REGISTRY: dict[str, type[Fetcher]] = {}
def register(cls): REGISTRY[cls.method] = cls; return cls
```

**遷移現有五種**為 `tracker/fetchers/{feed,listing,search,api,archive}.py`：
- `feed.py` ← sources/feed.py（加 conditional GET）
- `listing.py` ← sources/path.py（保留 footer 過濾、accept_all）
- `search.py` ← sources/site.py（加 query result cache，避免 DDG 限流重複打）
- `api.py` ← sources/api.py（**接入主流程**：NVD CVE API 對 security tracker 啟用）
- `archive.py` ← sources/wayback.py

加新抓取模型 = 新增一個檔案 + `@register`。`sources/` 舊模組保留為薄 re-export
（向後相容既有 import），一版後刪。

### WP2 — source_profiles 表 + 增量抓取

**Schema v2**（`dedup.py` 加 idempotent migration，模式同 `_ensure_trackers_column`）：

```sql
CREATE TABLE IF NOT EXISTS source_profiles (
  domain          TEXT PRIMARY KEY,
  name            TEXT,
  method          TEXT NOT NULL,          -- registry key
  feed_url        TEXT, search_path TEXT,
  accept_all      INTEGER DEFAULT 0,
  trackers        TEXT NOT NULL,          -- 哪些 tracker 用此來源
  etag            TEXT, last_modified TEXT,   -- HTTP conditional GET
  last_seen_utc   TEXT,                   -- watermark：上次看到的最新文章時間
  consecutive_failures INTEGER DEFAULT 0,
  avg_yield       REAL DEFAULT 0,         -- 每次 fetch 平均新增數（探測健康度）
  probed_at       TEXT, probe_note TEXT   -- WP4 自動探測結果
);
CREATE TABLE IF NOT EXISTS runs (
  run_id      INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at  TEXT, finished_at TEXT,
  args        TEXT,                        -- JSON: since/until/trackers
  stats       TEXT,                        -- JSON: per-phase counts
  errors      TEXT                         -- JSON array
);
ALTER TABLE articles ADD COLUMN content_hash TEXT;  -- 改版重發偵測
```

**增量抓取三件套**：
1. **Conditional GET**：FEED/LISTING fetcher 帶 If-None-Match / If-Modified-Since；
   304 → 整個來源 0 解析成本
2. **Watermark 預過濾**：feed item `published <= last_seen_utc - 1day margin` 直接跳過，
   不進 dedup
3. **批次 dedup**：fetch run 開始時 `SELECT url_hash FROM articles` 一次載入 set()，
   之後純記憶體比對；新增用單一 `executemany INSERT OR IGNORE`。
   消滅 157 次 per-URL SELECT。

**builtins.py 降級為種子**：首次啟動 `tracker init-profiles` 把 builtins + searchinfo
ENTRY 灌進 source_profiles；之後 runtime 只讀 DB，builtins 只在新環境 bootstrap 用。

### WP3 — ollama 四層角色（llm.py 擴充為 llm/ 套件）

```
tracker/llm/__init__.py      call()/self_test()（搬現有）
tracker/llm/gate.py          L1 相關性門檻
tracker/llm/summarize.py     L2 摘要+分類（搬現有 summarize_article）
tracker/llm/review.py        L3 品質自審
tracker/llm/probe.py         L4 來源結構分類（WP4 用）
tracker/prompts/gate.txt / review.txt / probe.txt
```

- **L1 gate**（新）：batch 10 條 title+snippet 一次 prompt（省 round-trip），輸出
  `[{"i":0,"keep":true,"reason":"CVE 漏洞"},…]`。門檻寬鬆（疑似相關就 keep），
  目的只是砍明顯雜訊（footer、廣告、活動公告）。預期省 30–50% 的 fetch_body+summarize。
  gate 掉的標 `status='gated_out'`（保留 audit）。
- **L3 review**（新）：summarize 輸出後檢查：(a) JSON schema 完整、(b) category 在
  該 tracker 白名單、(c) summary 中的 CVE 編號/CVSS 分數必須在原文出現過（regex 比對
  raw_text）。任一失敗 → 帶失敗原因重跑 L2 一次；再失敗 → `status='review_failed'`
  + fetch_errors 記錄。消滅「編造 CVSS」問題的最後防線。
- 溫度／逾時沿用現有 `call()`；全部走 localhost:11434，零外部 API。

### WP4 — 來源適應偵測（auto-probe）

**新子指令 `tracker probe <url> [--tracker X] [--save]`**，亦在 fetch 遇到
`consecutive_failures >= 3` 的來源時自動重探：

```
探測順序（每步成功即停）：
 1. RSS autodiscovery：HTML <link rel=alternate type=rss/atom>；
    常見路徑暴力試 /feed /rss /rss.xml /atom.xml /index.xml /feed.xml
 2. Listing 啟發式：抓 entry URL，selectolax 算 article-shape 連結密度
    （≥5 → LISTING 可用）
 3. stealth 重試（curl_cffi chrome 指紋）→ 同上判定
 4. ollama L4：把頁面前 3000 字 + 連結清單給 gemma4，問
    「這是文章列表頁/單篇文章/JS shell/錯誤頁？最佳抓取建議？」
    輸出 JSON {page_type, suggested_method, confidence}
 5. Wayback snapshot 可用性
 6. 全敗 → method=SEARCH（DDG fallback）
結果寫入 source_profiles（method/feed_url/probe_note/probed_at）
```

**效果**：searchinfo 加一行新 ENTRY（只要名稱+URL）→ 下次 fetch 自動 probe 並選定
最佳方法，不再需要手動編 builtins.py。

### WP5 — 單進程 orchestrator + 零介入 logging

**新檔 `tracker/orchestrator.py`**：`run_pipeline(since, until, trackers, …) -> RunReport`
直接呼叫內部函式（fetch_all_sources → gate → summarize → write_days → cross_scan），
回傳結構化 RunReport。`cli.pipeline` 變薄殼：解析參數 → orchestrator → 印報告。

**Logging**：
- `logs/run-YYYYMMDD-HHMMSS.log`（Python logging，DEBUG 全量）
- `runs` 表寫入 per-phase stats JSON
- `status.json`（專案根）：最近一次 run 的機器可讀摘要
- stdout 最終只印 **一行**：
  `run#42 OK 5/30-6/04 | fetch 41(+3 gated) | sum 38/41 | write 13d | err 2 | 776s`
  → Claude 只讀這一行 + exit code，token 成本 < 100/次

**`tracker status --last-run`**：人類可讀的上次執行詳情（從 runs 表讀）。

### WP6 — 驗收測試 + 文件 + 釋出

- 單元測試：fetchers registry、watermark 邏輯、L1 gate 解析、L3 review 的 CVE
  比對、probe 判定（mock HTTP）。目標 19 → 35+ tests
- `README.md` 改寫：v2 架構圖、加新來源 SOP（一行 ENTRY → auto-probe）、
  加新 fetcher SOP（一個檔案 + @register）
- 真實整合測試：近 7 天 window 跑 `tracker pipeline`，對照 v1.0 量測：
  重複處理數、gate 節省數、總耗時
- `tracker pack --major` → **Tracker-2.0.zip**

## 實作順序與依賴

```
WP2 schema（先行，其他 WP 依賴 source_profiles/runs 表）
 → WP1 fetcher 抽象（搬遷 + conditional GET 接 WP2 欄位）
 → WP5 orchestrator（用 WP1 registry；先不含 gate/review 也能跑通）
 → WP3 ollama 四層（gate/review 插入 orchestrator phase 之間）
 → WP4 auto-probe（依賴 WP1 registry + WP3 L4）
 → WP6 驗收釋出
```

每個 WP 完成即 commit（訊息含量測數據），WP1/WP2 完成後可先 pack v1.1 作為
中繼 checkpoint（預設小版進位），全部完成後 `pack --major` 進 v2.0。

## 不變的東西（向後相容約束）

- `searchinfo_security.md` / `searchinfo_eu_cra.md` V3 格式**不動**（仍是 source of truth；
  source_profiles 是 runtime 快取不是設定）
- `html/` 輸出格式不動：data-YYYYMMDD.js item 結構、TRACKER_MANIFESTS、
  per-tracker manifest 路徑全部照舊（UI 零改動）
- 既有 CLI 子指令全部保留可用（fetch/summarize/write 變成 orchestrator 的薄包裝）
- DB 既有 507 articles 不動，schema migration 必須 idempotent
- ollama 模型維持 `gemma4:e4b`，僅透過 localhost HTTP，零外部 API
- 打包流程不動：`tracker pack` / ChangeLog.html / git tag / tarball/

## 驗收標準（v2.0 釋出前全綠）

1. **效率**：同一 2 週 window 連跑兩次 `tracker pipeline`，第二次的 fetch phase
   耗時 < 第一次的 20%（304 + watermark 生效），重複候選的 per-URL SELECT 數 = 0
2. **Gate 效益**：對含 NISC/Boannews 的 window，gate 擋下的雜訊 ≥ 80%（footer、
   偏題文章不進 summarize）；gated_out 中誤殺率抽查 < 10%
3. **Review 防線**：人工注入一篇「編造 CVSS」的測試案例，L3 能攔截並重跑
4. **Auto-probe**：searchinfo 加一個從未見過的真實來源（如 https://www.cisa.gov/news-events/alerts），
   `tracker pipeline` 自動探測出正確 method 並抓到文章，全程無人工介入
5. **零介入**：完整 pipeline 跑完，stdout 僅一行摘要 + status.json；Claude 端
   token 消耗 < 500/次（觸發 + 讀結果）
6. **回歸**：19 個既有測試全綠；瀏覽器開 index.html 兩 tracker 顯示正常；
   `tracker pack --major` 產出 Tracker-2.0.zip
7. **新 fetcher 擴充演練**：照 README SOP 加一個 dummy fetcher（如 JSON-LD 解析），
   不改 cli.py/orchestrator.py 任何一行即可被 registry 接受

## 風險與緩解

| 風險 | 緩解 |
|------|------|
| gemma4:e4b 對 L1 gate 批次 JSON 輸出不穩 | gate 失敗 fallback = 全 keep（寧可多抓不漏抓）|
| conditional GET 部分站不支援 | etag 欄位 NULL 就照舊全抓，watermark 仍生效 |
| auto-probe 誤判（如把分類頁當 listing）| probe_note 記錄判定依據；consecutive_failures 觸發重探 |
| 大重構破壞既有行為 | WP 順序設計成每步可獨立驗證；sources/ 薄殼保相容 |
| ollama 服務中斷（本輪實際發生過）| orchestrator 開頭 self_test，失敗即停並在 status.json 標記 |

## 給 Opus 4.8 的執行提示

- 開發環境：WSL Ubuntu 26.04、`/opt/tracker`（git repo）、venv 在 `.venv/`、
  Python 3.14、ollama 0.23.2 跑 `gemma4:e4b`（~19s/篇摘要）
- Windows 端輸出：`/mnt/d/Claude/Track Security/html`、tarball 同目錄 `tarball/`
- 從 Windows 呼叫：`wsl.exe -e bash -c 'cd /opt/tracker && source .venv/bin/activate && …'`
- 檔案編輯可走 UNC：`\\wsl.localhost\Ubuntu\opt\tracker\…`
- **小心 bash heredoc 內的中文與括號**（本輪曾因 commit message 內 `()` 炸掉，
  改用 `git commit -F file` 模式）
- curl_cffi 必須維持 threading.Lock 序列化（v0.3 發現的 free() crash）
- DDG 連續查詢會限流：search fetcher 的 query cache 是必要的不是優化
- ollama 偶爾僵死：`pkill -9 ollama && ollama serve` 重啟即復原（v1.0 打包時發生過）
- 每個 WP commit 後跑 `python -m pytest -q` 確認回歸
