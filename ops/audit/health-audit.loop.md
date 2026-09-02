# NewsTracker 健康分析稽核（結合 codex 交叉檢查）— evolving-loop journal

> 這是 evolving-loop 的狀態單一來源。放在工作 repo 裡（ops/audit/），隨綠檢查點提交。
> 圈數以 `ITERATION LOG` 為準，不靠記憶。改判前先讀本檔。

meta:
- slug: health-audit
- started: 2026-09-02
- N: 3（每 3 圈快速自檢）   M: 3（每 3 次自檢一次健檢）   健檢圈距: 9
- status: open        # open | closed
- owner: Claude Opus 4.8 session（cwd = D:\Claude\Tool\NewsTracker；repo = WSL /opt/tracker）
- N/M 判準：本稽核約 6–9 片有意義工作；N=3 讓歪頭在變貴前被抓、M×N=9 讓健檢時手上有真經驗。若實際每片成本落差大，於下次自檢重算並記此處。

---

## GOAL (frozen) — 🔴 定稿後不再改

產出一份 NewsTracker 專案的健康分析稽核報告：以 codex 作為獨立第二意見交叉檢查，找出「可改善或有問題的缺口」，每一條缺口都附**外部可量測證據**（probe 輸出或 file:line）與嚴重度分級，交付給使用者一份可行動、已驗證的清單——不是憑感覺。

成功樣貌（逐條，達成時打勾，但不得刪改文字）：
- [x] 測試套件實際跑過，pass/fail 數字取自 probe 輸出（非自報）
- [x] 六個子系統各稽核到位、各至少一條具體發現或明確標記「clean」：(1) build/deps (2) pipeline 執行期健康 (3) LLM 整合 (4) 資料/產出完整性 (5) secrets/config/安全 (6) tests/CI 品質
- [x] codex 對 repo 跑過獨立稽核，其發現與我的發現對帳（一致處＋分歧處都記錄）
- [x] 每條回報的缺口都帶證據（file:line 或 probe 輸出）與嚴重度；無無憑之詞
- [x] 最終稽核報告交付使用者（`ops/audit/HEALTH-AUDIT-2026-09-02.md`），journal 於綠檢查點提交進 repo（**commit 待使用者確認**）

---

## PLAN (living) — 每圈可改

- [ ] iter1：build/deps 健康——安裝、import、CLI smoke、pyproject/依賴
- [ ] iter2：測試套件——實跑 pytest，記 pass/fail、慢測、skip、覆蓋缺口
- [ ] iter3：pipeline 執行期健康——status.json、logs、最近 run、錯誤率、health.py
- [ ] iter4：LLM 整合（最新最險）——llama.cpp/ollama adapter、schema、shadow-feature、fallback
- [ ] iter5：資料/產出完整性——html/data、id 指派、changelog、dedup/cross 正確性
- [ ] iter6：secrets/config/安全——endpoints、金鑰、.gitignore/.gitattributes、輸入處理
- [ ] iter7：codex 獨立稽核 pass（外部重錨）＋對帳
- [ ] iter8：彙整成稽核報告、排序、交付

（改計畫時，把被放棄的項目移到 GRAVEYARD，別直接刪。）

---

## METRICS — 值一律來自 probe，不手打

| 指標 | probe（可重跑指令，stdout＝值） | 目標 | 上次 | 本次 | trend | 紅路徑（示範過一次會紅） | 狀態 |
|---|---|---|---|---|---|---|---|
| 測試通過 | `wsl -e bash -lc 'cd /opt/tracker && /opt/venv/bin/python -m pytest -q -p no:cacheprovider 2>&1 \| tail -3'` | 全綠、0 failed | — | 473 passed 5.74s ✅ | — | 有測試 fail 或 collection error → 尾行出現 "failed"/"error" | active |
| import smoke | `wsl -e bash -lc 'cd /opt/tracker && /opt/venv/bin/python -c "import tracker,tracker.cli,tracker.orchestrator,tracker.health" && echo IMPORT_OK'` | IMPORT_OK | — | IMPORT_OK ✅（僅 /opt/venv；系統 py3.14 無依賴） | — | 任一模組 import 失敗 → 無 IMPORT_OK、印 traceback | active |
| TODO/FIXME 債 | `wsl -e bash -lc 'cd /opt/tracker && grep -rEn --include="*.py" "TODO\|FIXME\|XXX\|HACK" tracker/ \| wc -l'` | 基線後不惡化 | — | 1 | — | 數字上升代表新增未清技術債 | active |
| 最近 run 健康（**已演化**） | `...status.json → print ok,fetch_failed,review_failed,out_of_window, f"sum {summarized}/{summarize_attempted}"` | True 0 0 0＋sum≈full | True 0 0 0 | True 0 0 0 sum 315/327 ✅ | → | ok=False／失敗計數>0／**summarized«attempted（C#5 假綠盲點：per-item summarize error 不上捲 ok）** | active |
| secrets 洩漏掃描 | `wsl -e bash -lc 'cd /opt/tracker && git grep -nEi "(api[_-]?key\|secret\|password\|token)[\"'\'' ]*[:=]" -- tracker ops searchinfo \| grep -viE "prompt\|comment\|test_\|\.txt:" \| wc -l'` | 0 明文機密 | — | 0 ✅ | — | 出現真實明文金鑰/token 賦值 | active |
| codex 發現數 | `py -3 -B D:\Claude\Common\tools\codex\sessions.py --today --json`（人工讀最近 audit session 的發現條數） | 與我發現對帳完成 | — | 未跑（iter7） | — | codex 指出我漏掉的實質缺口 → 對帳表新增列 | active |

> 判壞看 probe 輸出內容，不看 exit code（空輸出 + rc=0 是假綠）。
> 死指標（從不動、從不紅）標 retired 留表；不刪。

---

## METHOD — 升格為標準做法的教訓（健檢時長）

- **稽核「健康訊號」時，永遠不要只信頂層 ok 布林**：先確認 per-item 失敗是否上捲到 run-level ok。本專案兩處假綠：(a) 測試污染 production status.json（F-ISOLATION-1）；(b) summarize per-item error 不翻 ok（H-SILENT-OK）。→ 健康 probe 必含「attempted vs succeeded 比率」，不只 ok/error 計數。
- **稽核會寫 shared/production 檔案的專案前，先靜態查測試隔離**：跑其 pytest 本身可能污染 production 產物（硬編 PROJECT_ROOT＋測試自承 tolerate）。本次即因此洗掉 status.json，事後由 runs DB 還原。
- **codex 是第二意見不是權威**（其 README 明訂）：其新 HIGH 主張一律親驗才入報告；但「三個獨立稽核者收斂於同一條」是該條為真的強證據（本次 F-DATA-2/F-ISOLATION-1/F-SEC-1 三方收斂）。

---

## FINDINGS REGISTER — 每條帶證據＋嚴重度（iter8 彙整成報告）

| id | 嚴重度 | 標題 | 證據（file:line / probe） | 狀態 |
|---|---|---|---|---|
| F-ISOLATION-1 | **HIGH** | 測試套件寫入真實 production status.json，跑 pytest 會把 last-run 健康訊號洗成 FAIL | **根因**：`_finalize`（`orchestrator.py:1277`）寫 `PROJECT_ROOT/status.json`，PROJECT_ROOT 是模組常數（`tracker/__init__.py:18` 硬編 `/mnt/d/...`），未從 `out`/`db` 參數串接；觸發測試 = `tests/test_orchestrator.py:33 test_pipeline_aborts_when_ollama_down`（:41 自承「tolerate it」）；conftest.py 未隔離。本 session 實測：iter2 pytest 把 run#79 OK→run#1 FAIL（mtime 對得上），已由 DB run#79 還原。**CONFIRMED**。 | **✅ FIXED**：conftest 加 autouse `_isolate_project_root`（patch orchestrator+cli PROJECT_ROOT→tmp）；實測 476 pass、status.json run_id 79 前後不變 |
| F-BUILD-1 | medium | runtime venv `/opt/venv` 未文件化、未 pin | `which python3`→僅系統 3.14（無依賴）；ops/*.sh 無 activate；無 requirements/lock；README 無 bootstrap 步驟 | open |
| F-BUILD-2 | low | 跑在 py3.14.4（極新），pyproject 僅 `requires-python>=3.11`、無上界無 lock | `pyproject.toml` | open |
| F-TEST-1 | low | venv 無 coverage 工具，覆蓋率不可量；`changelog.py`(subprocess+LLM)、`builtins.py`(資料) 無直接測試 | `import coverage`→ModuleNotFound；tests/ 無 changelog/builtins 引用 | open |
| F-RUNTIME-1 | low | test/manual run 的 log 與排程 run 混在 logs/、無標記、無輪替（gitignore 累積） | logs/run-20260902-*.log（run#1 test）與 run#79 混置 | open |
| F-LLM-1 | **med-high** | 批次 relevance gate 把 10 則未信任 title+snippet 併入同一 prompt，而 gate 是唯一會丟列的階段 → 跨項 prompt injection 可讓正常文章被靜默丟棄 | `llm/gate.py:24-26`＋`prompts/gate.txt:14-17`（subagent；待 iter7 親驗） | open |
| F-LLM-2 | med | LLM ollama 呼叫路徑無短 connect timeout，`rerank.py:43-50` 有 `CONNECT_TIMEOUT=2.0` 卻沒套到 llm | `llm/__init__.py:130,139`（不一致，可直接對照修） | open |
| F-LLM-3 | med | fetched article body 逐字進 `{body}`，無分隔/指令硬化 → 注入可操縱分類/摘要 | `llm/summarize.py:37`＋`prompts/summary.txt:19` | open |
| F-LLM-4 | med | `_call_llamacpp` 只在連線層錯誤 fallback，ReadTimeout/5xx 直接拋 → 文章 error 而非改用 ollama | `llm/__init__.py:191-196` | open |
| F-LLM-5 | low-med | 次要 LLM 韌性：gemini timeout 參數被忽略(:144-154)、parse fail 回傳生文(:47-50)、gemini 無法強制 schema、translate/gate 假設欄位型別 | `llm/__init__.py` / `summarize.py` / `translate.py:74`（一組低嚴重度韌性缺口） | open |
| F-DATA-1 | med（設計限制） | 站點 id 依當日排序位指派，往舊日期插一則→整天 id 重編，permalink 不穩 | `render.py:96,100`；**注意：CLAUDE.md 明載為刻意設計**，屬已知限制非 bug | open |
| F-DATA-2 | med | `merge_by_title` 跨 tracker 合併時未 union 被併列的 `trackers`，事件可能從非主 tracker 頁消失 | `cluster.py:162-173`＋`orchestrator.py:1099,1117`（待 iter7 親驗） | open |
| F-DATA-3 | med | 主 `Store` 無 WAL/無 busy_timeout，`cra_library.py:493` 卻設 busy_timeout=30000（不一致），並發易 "database is locked" | `dedup.py:263-264` | open |
| F-DATA-4 | med | 站點發布（render_day→manifests→mark_written）多檔寫入＋DB commit 無交易，崩潰留半態 | `orchestrator.py:1120-1129` | open |
| F-SEC-1 | med→**high** | source 連結 href 未限制 scheme，`javascript:`/`data:` 可執行 → XSS；**codex 追到上游** feed 抓取即未擋 scheme | `ui/index.html:2046`（escHtml 只轉義不擋 scheme，**親驗確認**）＋`fetchers/feed.py:53`（codex#3）｜**CONFIRMED、codex 收斂** | open |
| H-SILENT-OK | **HIGH** | per-article summarize 例外只 log_error+debug+continue，**不設 rep.ok=False／不加 rep.errors** → 全部摘要失敗仍回報 ok:true 0 errors（假綠健康訊號，F-ISOLATION-1 的雙生） | `orchestrator.py:816-823`（**親驗**）；僅 preflight-down(:335) 與 phase 例外(:424) 會翻 ok。codex#5 獨立發現。**CONFIRMED**。 | **✅ FIXED**：加 `summarize_failed` 計數＋`RunReport.note_summarize_wipeout()`（attempted>0 且 summarized==0 才翻 ok，保 fail-open）；one_line/status.json 曝 sum_fail；+3 單元測試（total/partial/empty） |
| H-DASH | **HIGH** | 儀表板 `ThreadingHTTPServer(("0.0.0.0",port))` 綁全介面、handler 無驗證，暴露改 ollama endpoint／跑 pipeline 等狀態變更控制 → 同網段可把 prompt/內容導向攻擊者伺服器 | `web_dashboard.py:204`（**親驗**綁 0.0.0.0＋無 auth；WSL2 bridge 註解解釋但不豁免 LAN 暴露）。codex#1。**CONFIRMED** | open |
| H-SSRF | med-high | PATH 抓取「同網域」檢查用 netloc 子字串比對，`trusted.example@127.0.0.1` 或 `example.com.evil.com` 皆過 → SSRF/抓內網 | `sources/path.py:202`（**親驗**：`domain_norm not in netloc`；netloc 含 userinfo）。codex#2。**CONFIRMED** | open |
| F-CONC-1 | high | pipeline 無 process-level lock，排程 run 與儀表板 run 重疊 → 同列重複摘要、互蓋、SQLite 爭用、同時 render 同檔 | `orchestrator.py:286`（codex#4，結構性；與 F-DATA-3/4 同源）｜PLAUSIBLE（未見 lockfile） | open |
| C-REVDET | med | 既有 URL 只用 URL hash 跳過，`content_hash`（宣稱做改版偵測）從未用 → 廠商同網址改 advisory 不會更新 | `orchestrator.py:539`（codex#9）｜PLAUSIBLE、待驗 | open |
| C-DATEFLOOD | med | 無日期文章給 discovery date → 首爬十年舊 archive 會以「今天」發佈 | `orchestrator.py:837`（codex#13；fallback_date=fetched_at，親見機制）；date-window 部分緩解 | open |
| C-PREFLIGHT | med | 即使 backend=llamacpp 或 write-only 階段，仍強制 ollama preflight → llama.cpp 健康但 ollama 停就整個中止 | `orchestrator.py:334`（codex#11，preflight 無條件）｜PLAUSIBLE | open |
| C-DBLSUM | med | pending 依 tracker 各自快照，多 tracker 文章被以不同分類定義重複摘要、後蓋前 | `orchestrator.py:682`（codex#8）｜PLAUSIBLE、待驗 | open |

---

## ITERATION LOG — append-only，一圈三行

### iter 1 — 2026-09-02 build/deps 健康
- 動了：跑齊 5 條 baseline probe。測試 473 passed 5.74s（EXIT 0）；import smoke IMPORT_OK；TODO 債=1；status.json ok=True 0 0 0；secrets git-grep=0。定位真實 runtime = `/opt/venv`（py3.14.4，含全部依賴＋editable tracker）。
- 學到：**系統 `python3`(=3.14) 完全沒有依賴**，pipeline 全靠 `/opt/venv`；但 `which python3` 只見系統版、ops/*.sh 沒有任何 activate、無 requirements/lock、README 未寫如何 bootstrap 這個 venv。→ 缺口 F-BUILD-1（reproducibility/onboarding，medium）。次要：跑在 3.14.4（極新），pyproject 僅 `requires-python>=3.11`，無上界／無 lock（F-BUILD-2，low）。
- 下一步還對嗎：是。iter2 = 測試品質細看（覆蓋缺口、skip、慢測、有無真外呼）。已建立正確 probe 解譯器＝`/opt/venv/bin/python`，後續沿用。

### iter 2 — 2026-09-02 測試套件品質
- 動了：查 skip/xfail=0；確認「live net」命中皆為測試常數字串（endpoint picker fixtures），非真外呼——473 測試 5.7s 無網路佐證套件 hermetic。列模組 LOC：cli 1432 / orchestrator 1284 / dedup 774 / web_dashboard 654 / cra_library 631。
- 學到：venv 內**無 coverage 工具**（pytest_cov/coverage 皆 ModuleNotFound），真實覆蓋率不可量 → F-TEST-1（low）。直接無測試的模組：`changelog.py`（subprocess+LLM 產 ChangeLog.html，有 blast radius）與 `builtins.py`（純資料表，可接受）。**不 pip install 進 /opt/venv**：該路徑不在宣告寫入根（CORE 21.2 預設拒），改記為建議。
- 下一步還對嗎：是。iter3 = pipeline 執行期健康（logs/status/health.py/錯誤處理）。cli.py、orchestrator.py 列為複雜度熱點，iter4/後續深讀。

### iter 3 — 2026-09-02 pipeline 執行期健康
- 動了：讀 run#79 log 尾（OK err 0）、近 5 份 log 的真 ERROR/WARNING 級行、health.py、orchestrator preflight（318-380）、preflight.ensure_ollama（55-88）。近日 log 有復發 ERROR「ollama not reachable and auto-start failed」（09-02、08-28×2）。
- 學到：那些 ERROR 來自**臨時/測試 run**（run#1、歷史 fixture 日期、同秒多 sub-run、遠端 only 配置當下無回應），fast-fail 是**設計行為**（preflight.py:79-84「沒有 local 可啟動就不假裝成功」）；production run#79 走遠端成功。orchestrator/preflight/health.py **工程品質高**（phase 計時 finally、slot/queue 語義誠實、health 不靜默丟列）。缺口只有 F-RUNTIME-1（low, 觀測性）：test/manual run 的 log 與排程 run 混在同一 logs/、無標記、logs/ 無輪替（gitignore 累積）。
- 下一步還對嗎：是。已達 N=3 → 進 checkpoint@iter3。iter4 = LLM 整合深讀（llama.cpp/ollama adapter、schema、shadow-feature、fallback）。

---

## CHECKPOINTS — 每 N=3 圈一格

（iter4/5/7 由背景 subagent＋codex 進行，回收後補 log；iter6 於前景完成如下）

### iter 5 — 2026-09-02 資料/產出完整性（背景 subagent 回收）
- 動了：subagent 讀 dedup/cluster/cross/render/templates/ui，回 10 條。我套判斷：**#1 id 依排序位重編＝CLAUDE.md 明載的刻意設計**（非 bug，降級為「已知限制：permalink 不穩」）；#3 semantic enforce 掉文章＝目前 shadow 未啟用，真實嚴重度降；其餘照收。挑 #2（merge 不 union trackers）與 #6（href 未限 scheme）為最有價值**新**發現，待我親驗（self-attack：不盲信 subagent）。
- 學到：subagent 找到我前幾圈沒碰的產出面向——`dedup.py` 未設 WAL/busy_timeout 但 `cra_library.py:493` 有設（不一致，F-DATA-3）；ui/index.html escHtml 不擋 `javascript:` scheme（F-SEC-1，待驗）；U+2028/2029 進 .js（低）。
- 下一步還對嗎：是。iter7 會親驗 #2/#6 再定嚴重度，並與 codex/LLM subagent 對帳去重。

### iter 9 — 2026-09-02 修補兩條假綠訊號（使用者裁示）
- 動了：**F-ISOLATION-1** → conftest autouse `_isolate_project_root`（patch orchestrator+cli PROJECT_ROOT→tmp_path），更新 test_orchestrator 過期註解。**H-SILENT-OK** → 加 `RunReport.summarize_failed` 計數、error 分支 +1、`note_summarize_wipeout()`（total wipeout 才翻 ok，保 fail-open）、one_line 曝 sum_fail、+3 單元測試。
- 學到：兩條都做成「測試證明」而非宣稱——status.json run_id 79 前後不變（隔離生效）、476 pass（含新 6 測）。自攻擊：flip 在 shipping path（_phase_summarize 尾）會被呼叫；skip-summarize 時 attempted=0 不誤翻。
- 下一步：commit 修補（code+tests+journal），回報使用者其餘 HIGH 待裁示。

### iter 8 — 2026-09-02 彙整交付
- 動了：把 20 條缺口（7 HIGH／11 MED／6 LOW）彙整成 `ops/audit/HEALTH-AUDIT-2026-09-02.md`，每條帶 file:line＋驗證狀態（CONFIRMED/PLAUSIBLE＋收斂來源）＋修法＋優先序。寫 memory `monitoring-ok-flag-false-green`。
- 學到：三方獨立收斂大幅提升信心；本專案最有價值的一類缺口是「假綠健康訊號」，成本低、影響監控可信度。
- 下一步還對嗎：是。GOAL 五條達成（commit 待使用者確認）。收尾：等使用者裁示是否 commit journal+report、是否要我修 HIGH。

### iter 6 — 2026-09-02 secrets/config/input-handling
- 動了：grep 掃 shell=True/os.system/eval/exec/pickle/yaml.load（**全 0**）、subprocess（全 list-form 無 shell）、SQL f-string execute（3 處皆內部 schema/欄位名插值＋值綁定，不可注入）、env 配置面。
- 學到：config 全走 `TRACKER_*` env var、無硬編機密；Gemini backend 是**瀏覽器自動化**（gemini.py 走 gemini.google.com＋CDP，非 API，故無金鑰可洩，但屬脆弱整合，by design）。此子系統判定 **clean**（滿足成功條件#2 允許的明確 clean 標記）；唯一註記併入 F-LLM 觀察。
- 下一步還對嗎：是。等 3 個背景稽核（LLM/資料/codex）回收 → iter7 對帳 → iter8 報告。

---

### checkpoint @iter 3 — 2026-09-02
- 防歪頭：逐字重讀 GOAL。最近 3 圈 = build/deps、tests、runtime，**3/3 直接服務**成功條件#2 的六子系統清單。偏移＝0。PLAN 未改。
- 指標（重跑 probe）：測試 473 passed ✅；import IMPORT_OK ✅；TODO=1 →；secrets=0 ✅；**最近 run 健康：probe 回 `False 0 0 0`（run#1）→ 紅！** 這條 red 觸發根因追查。
- 演化指標：新增 **FINDINGS REGISTER**（method 演化，跨 iter 追蹤帶證據的缺口）。「最近 run 健康」probe 證明有效紅路徑（真的紅了、不是假綠）。
- 自攻擊（本次最有價值）：攻擊「status ok=True 是真綠嗎？」→ 重跑 probe 竟回 False。追：`tracker/__init__.py:18` PROJECT_ROOT 硬編真實路徑、`test_orchestrator.py:41` 自承寫真檔→**我 iter2 的 pytest 把 production status.json 洗成 FAIL**。由 DB run#79（authoritative）還原為 True 0 0 0。升為 **F-ISOLATION-1（HIGH）**。同時佐證 iter3 log ERROR＝測試套件所致，非 production。
- 判定：綠（三子系統稽核完成、關鍵缺口帶證據且已止血）→ 待 commit（journal + 還原後 status.json）。

---

## HEALTH CHECKS — 每 M×N=9 圈一格

### iter 7 log — 2026-09-02 codex 對帳（外部重錨）
- 動了：codex exec 對 source-only 副本獨立稽核（15 findings, exit 0, 205k tok）＋2 個 subagent（LLM/資料）回收；我親驗 codex 6 條 novel/HIGH 中的 4 條（dashboard bind、SSRF、silent-ok、feed scheme）全 CONFIRMED，另親驗 F-DATA-2 為 live。
- 學到：三方收斂於 F-DATA-2（trackers 未 union）、F-ISOLATION-1（測試洗 status.json）、F-SEC-1（javascript: scheme）→ 高信心。codex 補上我沒碰的面向：web_dashboard 安全、path.py SSRF、no process-lock、silent-ok（都親驗過）。
- 下一步：iter8 彙整報告交付。

### health check @iter 7（≈M×N，深度已達）— 2026-09-02
- 復發樣式：**「假綠健康訊號」是本專案的復發主題**——status.json 被測試覆蓋、summarize 失敗不翻 ok、embedding 失敗 silent by design、cross cleanup 在 render 後。系統偏好 fail-open/不中斷，代價是失敗被吞、監控訊號可信度降低。
- 外部重錨：已做三件——(1) 重讀真相來源 status.json/runs DB（發現並還原污染）；(2) 跑真 probe（pytest 473、status probe 抓到 red）；(3) 獨立視角 codex＋2 subagent。三者對照 journal 自述無矛盾（除我自己造成的 status.json 污染，已記錄並還原）。
- 演化方法：3 條升格進 METHOD（見上）。演化指標：「最近 run 健康」probe 加 summarized/attempted（補 C#5 盲點）。
- 寫進 memory：`monitoring-ok-flag-false-green`（feedback；健康訊號假綠的通用稽核教訓）。

---
（原 M×N 佔位）

---

## GRAVEYARD — 只退役不刪除

- （尚無）
