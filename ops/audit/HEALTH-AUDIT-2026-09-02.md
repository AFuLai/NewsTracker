# NewsTracker 健康分析稽核報告 — 2026-09-02

**範圍**：NewsTracker v2.29（`/opt/tracker`，engine + pipeline + 產出站點）
**方法**：evolving-loop 三層疊代 + **三個獨立稽核者交叉檢查**——本 session、2 個 Explore subagent（LLM 整合 / 資料完整性）、以及 **codex（GPT-5 級，獨立第二意見）**。每條缺口都附 `file:line` 證據並標注驗證狀態。
**Journal（過程單一來源）**：`ops/audit/health-audit.loop.md`

---

## 總評

引擎**工程品質高**：473 測試全綠（5.7s、0 skip、hermetic）、無明文機密、config 全走 `TRACKER_*` env、SQL 全參數化、orchestrator/preflight/health.py 註解與失敗語義考究。production run#79 健康（err 0）。

但稽核暴露一個**復發主題：假綠健康訊號**——系統整體偏好 fail-open / 不中斷，代價是失敗被吞、監控訊號可信度下降。這是最值得優先處理的一類。另有數個**安全**（XSS/SSRF/未驗證儀表板）與**資料正確性**缺口。

> ⚠️ 稽核足跡揭露：本次跑測試套件時，測試把 production `status.json` 洗成 `run#1 FAIL`（見 F-ISOLATION-1）。已由 runs DB 的 run#79 記錄**還原為 `ok:true`**。這是唯一被觸碰的 production 檔案。

---

## 缺口清單（依嚴重度）

驗證狀態：**CONFIRMED**＝本 session 親自讀碼/實測證實；**PLAUSIBLE**＝codex/subagent 指出、機制合理但未逐行親驗。收斂＝多個獨立稽核者各自發現同一條。

### 🔴 HIGH

| id | 缺口 | 證據 | 狀態 | 建議修法 |
|---|---|---|---|---|
| **F-ISOLATION-1** | 測試套件寫入真實 production `status.json`，跑一次 `pytest` 就把 last-run 健康訊號洗成 FAIL | `orchestrator.py:1277` 寫硬編 `PROJECT_ROOT/status.json`；`__init__.py:18` 硬編路徑；`tests/test_orchestrator.py:33,:41`（自承 tolerate）。**本 session 實測復現**、已還原 | CONFIRMED（3方收斂：我+codex#14） | `_finalize` 的 status 路徑改由參數決定（預設 PROJECT_ROOT，測試傳 tmp）；或 conftest monkeypatch |
| **H-SILENT-OK** | per-article summarize 例外只 `log_error`+`debug`+`continue`，**不翻 `rep.ok`、不加 `rep.errors`**→ 全部摘要失敗仍回報 `ok:true` 0 errors | `orchestrator.py:816-823`；僅 preflight-down(:335)、phase 例外(:424) 會翻 ok | CONFIRMED（我+codex#5） | summarize error 計數，超閾值（或全失敗）時翻 ok/加 errors；status probe 併看 `summarized/attempted` |
| **H-DASH** | 執行儀表板綁 `0.0.0.0` 且 handler 無驗證，暴露「改 ollama endpoint／跑 pipeline」等狀態變更控制→同網段可把 prompt 與文章內容導向攻擊者伺服器 | `web_dashboard.py:204`（`ThreadingHTTPServer(("0.0.0.0",port))`，無 auth） | CONFIRMED（我+codex#1） | 綁 `127.0.0.1`（WSL2 可靠 Windows localhost 轉發）或加 token；endpoint 變更加確認 |
| **F-SEC-1** | 站點 source 連結 href 未限制 scheme，`javascript:`/`data:` 會執行→XSS；上游 feed 抓取即未擋 | `ui/index.html:2046`（escHtml 只轉義 `& < > "`，不擋 scheme）＋`fetchers/feed.py:53` | CONFIRMED（3方收斂：我+資料subagent+codex#3） | 白名單 `http/https`（render 與 fetch 兩層）；escHtml 補 `'` |
| **F-DATA-2** | `merge_by_title` 跨 tracker 合併（吃全日各 tracker 列）時只保留 primary 的 `trackers`、**未 union**→同 CVE 跨 tracker 文章會從非主 tracker 頁消失 | `cluster.py:162-173` 未 union trackers；`orchestrator.py:1099` 餵全 tracker 列；title/CVE 合併(`cluster.py:132-140`)**無條件**（非 shadow） | CONFIRMED live（3方收斂：我+資料subagent+codex#6） | cluster 輸出 union 所有 member 的 trackers |
| **H-SSRF** | PATH 抓取「同網域」檢查用 `netloc` 子字串比對，`trusted.example@127.0.0.1`、`example.com.evil.com` 皆過→SSRF/抓內網 | `sources/path.py:202`（`domain_norm not in netloc`；netloc 含 userinfo） | CONFIRMED（我+codex#2） | 比對 `urlsplit().hostname` 的精確後綴，非子字串 |
| **F-CONC-1** | pipeline 無 process-level lock，排程 run 與儀表板 run 重疊→重複摘要、互蓋、SQLite 爭用、同時 render 同檔 | `orchestrator.py:286`（結構性；與 F-DATA-3/4 同源） | PLAUSIBLE（codex#4；未見 lockfile） | 進入時取 flock/PID lock，重疊即拒 |

### 🟠 MEDIUM

| id | 缺口 | 證據 | 狀態 |
|---|---|---|---|
| **F-LLM-2** | LLM ollama 路徑無短 connect timeout；`rerank.py:50-54` 有 `connect=2.0` 卻沒套 llm；read timeout 也不 demote→死端點整輪拖滿 timeout | `llm/__init__.py:130-139` | CONFIRMED（我+codex#10） |
| **F-LLM-1** | 批次 gate 把 10 則未信任 title+snippet 併入同 prompt，而 gate 是唯一丟列階段→跨項 prompt injection 可讓正常文章被靜默丟 | `llm/gate.py:24-45`（fail-open 部分緩解） | CONFIRMED 機制（LLM subagent） |
| **F-LLM-3** | fetched body 逐字進 `{body}` 無指令硬化→注入可操縱分類/摘要，review 只 ground CVE/CVSS | `llm/summarize.py:37`＋`prompts/summary.txt` | CONFIRMED（LLM subagent+codex#12） |
| **F-LLM-4** | `_call_llamacpp` 只在連線層錯誤 fallback，ReadTimeout/5xx 直接拋→文章 error 而非改用 ollama | `llm/__init__.py:191-196` | PLAUSIBLE（LLM subagent） |
| **F-DATA-3** | 主 `Store` 無 WAL/無 busy_timeout，`cra_library.py:493` 卻設 busy_timeout=30000（不一致）→並發易 "database is locked" | `dedup.py:263-264` | CONFIRMED（資料 subagent） |
| **F-DATA-4** | 站點發布（render_day→manifests→mark_written）多檔寫入+DB commit 無交易；cross cleanup 在 render 後→站/DB 不一致殘留 | `orchestrator.py:1120-1129`,`:409` | PLAUSIBLE（資料subagent+codex#7） |
| **F-BUILD-1** | runtime venv `/opt/venv` 未文件化/未 pin；系統 py3.14 無依賴；wheel 未含 `searchinfo/` 且 runtime 硬編 `/opt/tracker`→他機安裝跑不起 | `pyproject.toml:31`；`which python3`→僅系統 | CONFIRMED（我+codex#15） |
| **C-REVDET** | 既有 URL 只用 URL hash 跳過，`content_hash`（宣稱做改版偵測）從未用→廠商同網址改 advisory 不更新 | `orchestrator.py:539` | PLAUSIBLE（codex#9） |
| **C-DATEFLOOD** | 無日期文章給 discovery date→首爬十年舊 archive 以「今天」發佈 | `orchestrator.py:837` | PLAUSIBLE（codex#13；date-window 部分緩解） |
| **C-PREFLIGHT** | backend=llamacpp 或 write-only 階段仍強制 ollama preflight→ollama 停就整個中止 | `orchestrator.py:334` | PLAUSIBLE（codex#11） |
| **C-DBLSUM** | pending 依 tracker 各自快照，多 tracker 文章被以不同分類定義重複摘要、後蓋前 | `orchestrator.py:682` | PLAUSIBLE（codex#8） |

### 🟡 LOW

| id | 缺口 | 證據 |
|---|---|---|
| **F-DATA-1** | 站點 id 依當日排序位指派，插舊日期→整天 id 重編、permalink 不穩 | `render.py:96,100`｜**注意：CLAUDE.md 明載為刻意設計**，屬已知限制非 bug |
| **F-TEST-1** | venv 無 coverage 工具、覆蓋率不可量；`changelog.py`/`builtins.py` 無直接測試 | `import coverage`→ModuleNotFound |
| **F-RUNTIME-1** | test/manual run 的 log 與排程 run 混在 `logs/`、無標記、無輪替 | logs/ gitignore 累積 |
| **F-BUILD-2** | 跑在 py3.14.4（極新），pyproject 僅 `requires-python>=3.11`、無 lock | `pyproject.toml` |
| **F-LLM-5** | 次要 LLM 韌性：gemini timeout 參數被忽略、parse fail 回傳生文、gemini 無法強制 schema、translate/gate 假設欄位型別 | `llm/__init__.py:144-154`,`summarize.py:47-50`,`translate.py:74` |
| **F-DATA-5** | 產出 `.js` 未轉義 U+2028/2029→pre-ES2019 引擎該日檔載入失敗 | `render.py:15-17`+`data_day.js.j2` |

---

## 判定為健康（clean）之項目

- 測試：473 pass、0 skip、hermetic、5.7s。
- 機密/注入面：0 硬編機密、config 全 env、無 `shell=True`/`os.system`/`eval`/`exec`/`pickle`、subprocess 全 list-form、SQL f-string 僅插內部 schema 名（值皆綁定）。
- LLM 併發：STATS 增量有鎖、Gemini session 單例序列化、非 ollama backend 強制 worker=1。
- health.py：純資料蒐集、join 缺漏不靜默丟列，設計良好。

---

## 建議優先序

1. **止血假綠訊號（HIGH，低成本）**：F-ISOLATION-1（測試隔離）+ H-SILENT-OK（summarize 失敗翻 ok）——這兩條直接關乎「你能不能信任 status.json」。
2. **安全（HIGH）**：H-DASH（綁 127.0.0.1/加 auth）、F-SEC-1（scheme 白名單）、H-SSRF（hostname 精確比對）。
3. **資料正確性（HIGH/MED）**：F-DATA-2（union trackers）、F-CONC-1（process lock）、F-DATA-3（WAL+busy_timeout）。
4. **LLM 韌性（MED，多為與既有 `rerank.py` 對齊）**：F-LLM-2 connect timeout、F-LLM-1/3 prompt injection 硬化、F-LLM-4 fallback 拓寬。
5. **可重現性（MED）**：F-BUILD-1（文件化/pin venv、wheel 含 searchinfo 或去硬編路徑）。

> 需要的話，我可以就其中任一條開實作（例如先修 F-ISOLATION-1 + H-SILENT-OK，附測試）。PLAUSIBLE 條目建議修前各花 5 分鐘逐行親驗。
