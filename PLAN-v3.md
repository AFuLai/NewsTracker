# v3.0 交接計畫 — LLM 層精確度與效率升級

> **交接對象**：Opus（主導設計與校準）＋ Sonnet（機械實作 WP 可分派 subagent）。
> 本文件是自包含的執行計畫，由 Fable 5 於 2026-08-14 撰寫，基線為 v2.28（run #63）。
> 使用者已核可整體方向（三階段漸進）。執行時依「實作順序與依賴」逐 WP 推進，每 WP 測試綠後 commit。
> 所有 git 與原始碼操作在 WSL `/opt/tracker`（Windows 側專案根目錄無 `.git`，詳 CLAUDE.md）。

## Context（為何做這件事）

v2.x 的 LLM 層（`tracker/llm/`，六層 L1–L6）功能完整，但 run #63 遙測暴露三個結構性問題：

1. **效率**：全程 10,056s（2.8 小時），其中 translate 107 分（487 篇，~13s/篇）、
   summarize 53 分（184 篇，~17s/篇）。兩者都是**逐篇序列** HTTP 呼叫
   （`orchestrator.py` `_phase_translate` 的 for-loop；`_phase_summarize` Phase B
   注解明寫 "serial summarize"）。GPU 在等網路往返與單請求解碼，批次化空間全未使用。
2. **精確度**：`llm/__init__.py` 的 `_call_ollama` 只送 `format:"json"`（自由 JSON，
   非 schema 約束）。解析失敗時 summarize 退回把原文塞進 `summary[:400]`、分類靠
   `_coerce_category` 字串硬對，錯字/越界值落到 `uncategorized`。語言錯置（韓文摘要
   進英文欄位）靠 L5/L6 的「偵測→重試一次→放棄」事後補救。
3. **EU CRA 相關性判定**：L1 gate 只憑標題＋160 字 snippet 用 prompt 問，且刻意寬鬆
   （fail-open 全留）。CRA 追蹤要的是「法規/標準文件 vs 一般資安新聞」的定量判定，
   prompt gate 沒有分數、沒有門檻、無法校準。dedup 只有 URL hash，同一則 CRA 新聞在
   ENISA、BSI、媒體各發一篇時三篇全進。

2026-08-14 的評估結論（與使用者確認）：**不一步換引擎**。速度與 JSON 精確度的大宗
收益在 ollama 上就拿得到（Phase 0）；llama.cpp（llama-server）真正無可替代的是
`/v1/rerank` 端點與 GBNF 文法，分別在 Phase 1、Phase 2 導入。

## 現狀基線（2026-08-14，v2.28，run #63 = 2026-08-12）

### 硬體與模型

- GPU：NVIDIA RTX 2000 Ada Laptop，8 GB VRAM；WSL 內 23 GB RAM、22 cores
- ollama 0.23.2（WSL），模型 `gemma4:e4b`（Gemma 4 E4B，4-bit 約 5 GB，VRAM 內）
- 呼叫參數：`temperature 0.2`、`num_ctx 8192`、`format:"json"`、`raw_text[:6000]` 截斷

### run #63 遙測（logs/run-20260811-234014.log）

```
fetch 129new/46src → gate -35 (2.6min) → sum 184/207 53min (oow:23 rev_fail:0 zh-fix:0)
→ i18n 487/488 107min → write 16d → 全程 10056s
```

### LLM 層檔案盤點

```
tracker/llm/__init__.py  142 行  call()/_call_ollama/_call_gemini、backend fallback、STATS
tracker/llm/gate.py       59 行  L1 批次 10 篇 prompt 過濾，fail-open
tracker/llm/summarize.py  69 行  L2 摘要+分類，錯語言交 L5 修復
tracker/llm/review.py     47 行  L3 純 regex 反幻覺（CVE/CVSS 落地檢查），無 LLM 呼叫
tracker/llm/probe.py      33 行  L4 頁面結構分類（WP4 auto-probe 用）
tracker/llm/translate.py 125 行  L5 →EN 鏡像 / →zh 修復，lang 驗證+重試一次
tracker/llm/lang.py      214 行  L6 文字系統偵測（L2/L5 可驗證性的基礎）
tracker/orchestrator.py          _phase_gate(368)/_phase_summarize(403)/_phase_translate(555)
tests/test_llm_backend.py, test_llm_layers.py
```

- `_phase_summarize` Phase A（body fetch）已用 ThreadPoolExecutor 並發；
  Phase B（LLM 摘要＋review＋cross-detect）序列，靠 `controller.checkpoint()` 逐篇可暫停。
- `_phase_translate`：純序列 for-loop，逐篇 `translate_article()`。
- dedup：`tracker/dedup.py` URL hash；跨來源合併只有 `cluster.py`（CVE-bridge + Jaccard 0.45 標題）。
- eu_cra 分類定義：`searchinfo/searchinfo_eu_cra.md` CATEGORY 表七類
  （法令更新/調和標準/合規指引/開源影響/產業動態/亞太對應/研討活動）。

## 目標

| # | 目標 | 對應機制 |
|---|------|---------|
| 1 | 新聞精確度：schema 解析失敗歸零、分類 enum 鎖定、語言錯置機械性消除 | WP1（schema）、WP7（GBNF，條件性） |
| 2 | EU CRA 精準追蹤：定量 rerank gate、語意去重、cross-tagging | WP4–WP6 |
| 3 | 效率：LLM 兩階段 160 分 → 35–50 分（預測，以實測為準），全程 < 60 分 | WP2、WP7（條件性） |

## 實作範圍（三階段七個 Work Package）

### Phase 0 — 不換引擎，ollama 上直接收割（WP1–WP3）

#### WP1 Schema 約束輸出（精確度主力）

ollama 0.5+ 支援 structured outputs：`format` 欄位可放完整 JSON schema 物件
（會轉成 grammar 約束解碼）。改造 `tracker/llm/__init__.py`：

- `call()` 新增 `schema: dict | None` 參數；有 schema 時 `payload["format"] = schema`
  （取代 `"json"`）。`_call_gemini` 路徑維持現狀（marker + 提示文字）。
- L2 summarize：schema 鎖 `{title:str, summary:str, category:enum[whitelist+uncategorized],
  tags:array[str]}` — enum 由呼叫端以該 tracker 的 `info.categories` 動態組。
  `_coerce_category` 降級為保險絲：命中即記 `STATS["schema_miss"] += 1`（理論上應為 0）。
- L5 translate（兩方向）與 L1 gate（`{results:[{i:int, keep:bool}]}`）同步改造。
- 解析失敗的舊 fallback 路徑保留但計數（`STATS["parse_fallback"]`），run 報告輸出。
- 風險：grammar 約束對 token masking 有效能損耗（社群回報視 schema 複雜度而定）。
  WP1 驗收須量測前後單篇耗時，>15% 退化時簡化 schema（如 tags 不鎖型別）。

#### WP2 LLM 呼叫並發化（效率主力）

- `_phase_translate`：改 ThreadPoolExecutor 並發（`max_workers = TRACKER_LLM_CONCURRENCY`，
  預設 4），DB 寫入收斂回主執行緒（sqlite 單寫者）。`controller.checkpoint()` 改批次間檢查。
- `_phase_summarize` Phase B：同樣併發化 LLM 呼叫；review（L3 純 regex）與 cross-detect
  可在 future 回收處序列執行，維持「逐篇可暫停」語意：暫停點放在批次邊界，
  批次大小 = 並發數。
- ollama 側：文件化 `OLLAMA_NUM_PARALLEL=4`（服務啟動環境）。注意 num_parallel 會把
  KV cache 分割，8 GB VRAM 下 4 並發 × 8192 ctx 可能溢出到 RAM——實測後必要時
  降 `num_ctx` 至 6144 或並發降 3，以「總吞吐」為準則（記錄於 WP2 commit message）。
- gemini backend（`backend_for()` 動態切換）與並發互斥：backend 非 ollama 時退回序列。

#### WP3 遙測補強（驗收的量尺）

- run 報告（`run NN finished:` 行）加：per-phase 秒數（gate/sum/i18n 各自 elapsed）、
  `schema_miss`/`parse_fallback` 計數、實際並發數。
- 這行是 Phase 0/1/2 所有驗收的資料來源，先做不吃虧；可與 WP1 並行。

### Phase 1 — llama-server 嵌入＋rerank（CPU、與 ollama 並存，WP4–WP6）

#### WP4 llama-server 部署（僅 embed/rerank，不碰生成）

- WSL 內裝 llama.cpp 官方 release binary（或 build），**CPU 模式**跑兩個小模型：
  - 嵌入：`bge-m3` GGUF（~1.2 GB，多語含中文）
  - rerank：`bge-reranker-v2-m3` GGUF，`--embedding --pooling rank` 啟用 `/v1/rerank`
- 兩實例（port 8081/8082）或 llama-swap；由 orchestrator 啟停 wrapper ＋健康檢查
  （`/health`），失敗時 fail-open（沿用 L1 gate 哲學：rerank 不可用→全留＋記 log）。
- 版本釘死：binary 版本與模型檔 SHA 記入 `ops/`（可重現性）。
- 不佔 VRAM，與 ollama 完全並存，零風險先行。

#### WP5 CRA gate v2（rerank 定量過濾）

- 查詢集：由 `searchinfo_eu_cra.md` CATEGORY 七類各衍生 1–3 條英文 query
  （如 "CRA harmonised standard EN progress CEN CENELEC JTC 13"、
  "Cyber Resilience Act delegated act implementing regulation"…），存
  `tracker/prompts/cra_queries.txt`（單一來源）。
- 對 eu_cra tracker 的候選文章：title+snippet 送 `/v1/rerank` 對查詢集取 max score。
- **先跑 shadow mode**：只記分（DB 加欄位或 log），不影響 gate 結果；累積 1–2 週
  （或用歷史 DB 已標 eu_cra 的 rows 當驗證集回放）後校準門檻 τ。
- 啟用條件：驗證集上 recall ≥ 0.95 且 precision 明顯優於現況 L1。啟用後 L1 prompt
  gate 對 eu_cra 停用（其他 tracker 不動），rerank 分數寫入遙測。
- 門檻校準與驗證集判讀是設計判斷——**此 WP 由 Opus 主 session 親自做**，不分派。

#### WP6 語意去重＋cross-tagging

- bge-m3 嵌入向量存 sqlite（`articles` 加 `embedding BLOB`，僅新 rows，勿回填全庫）。
- 寫入前跨來源相似度 > τ₂（初值 0.85，shadow 校準）→ 交 `cluster.py` 現有合併機制
  （作為 CVE-bridge/Jaccard 之外的第三訊號，不重寫 cluster.py）。
- cross-tagging：security 池文章對 CRA 查詢集 rerank 分數 ≥ τ → trackers 補掛 `eu_cra`
  （取代/補強現有 `cross.py` 四訊號中的 token 訊號；`cross.py` 邏輯保留）。

### Phase 2 — 生成引擎切換 llama-server（條件觸發，WP7）

**觸發條件（滿足任一才做，否則本階段不執行）**：
(a) Phase 0 後全程仍 > 90 分；(b) `zh-fix`/`rev_fail` 經 WP1 後仍持續非零，需要 GBNF
字元級鎖定；(c) 決定升級 Gemma 4 26B-A4B（MoE）。

- WP7：`_call_ollama` 抽象為 adapter（env `TRACKER_LLM_URL`/`TRACKER_LLM_BACKEND`），
  llama-server OpenAI 相容 `/v1/chat/completions`；GBNF 文法把 `title_en`/`summary_en`
  鎖拉丁字元範圍、中文欄位鎖 CJK 範圍（機械性消滅語言錯置，L5 重試迴路降為保險絲）；
  善用 per-slot prompt 前綴快取（模板置前）。
- 26B-A4B 路線：`--n-cpu-moe` 把 experts 放 RAM（23 GB 可容 Q4 ~15 GB）、attention 留
  GPU，掛 E2B drafter 投機解碼（社群實測 2–3×）。先 benchmark 單篇品質與速度再決定。
- 驗收基準與 WP2 同一把尺（WP3 遙測）。

## 實作順序與依賴

```
WP3（遙測）──┬─ WP1（schema）──┐
             └─ WP2（並發）  ──┴─→ 基準 run ×2 → Phase 0 驗收
WP4（部署）→ WP5（CRA gate v2, shadow→啟用）
         └→ WP6（去重+cross-tag, shadow→啟用）
Phase 0 驗收後評估觸發條件 → （條件成立才）WP7
```

- WP1/WP2/WP3 相互獨立可並行（Sonnet 可各領一個）；合流後跑完整 pipeline 兩次取均值。
- WP5/WP6 依賴 WP4；兩者 shadow 期可重疊。
- 每 WP：測試綠（pytest）→ commit（訊息含變更理由與量測數字）。

## 不變的東西（向後相容約束）

- 六層架構與模組邊界不動；`call()` 對外簽名只增不改（`schema=None` 預設）。
- gemini backend fallback 鏈（`oll/oll` 遙測格式）不動。
- L3 review 純 regex 反幻覺機制不動（這是防「捏造 CVSS」的最後防線）。
- `html/` 產出格式、`render.py` 的 id 排序編號規則不動。
- fail-open 哲學不動：任何 LLM/rerank 失敗 → 保留文章 ＋ 記 log，寧多勿漏。
- searchinfo V3 格式不動；CRA 查詢集是新增檔案，不改 searchinfo 解析。

## 驗收標準（各階段）

**Phase 0**（跑完整 pipeline ×2 取均值，對照 run #63 基線）：
- [ ] `parse_fallback` = 0、`schema_miss` = 0（WP3 遙測輸出）
- [ ] summarize＋translate 合計 < 60 分（基線 160 分）；全程 < 90 分（基線 168 分）
- [ ] `rev_fail` 不高於基線；`uncategorized` 佔比下降（DB 查詢對照）
- [ ] 8 GB VRAM 下無 OOM/溢出降速（ollama log 確認 layers 全在 GPU）

**Phase 1**：
- [ ] 驗證集（歷史 eu_cra rows 回放）recall ≥ 0.95、precision > L1 現況，數字進 commit
- [ ] rerank 服務失敗時 pipeline 照常完成（fail-open 驗證：關掉服務跑一次）
- [ ] 跨來源重複（同事件多來源）在 eu_cra 頁面收斂為單 cluster（抽查 5 例）

**Phase 2（若觸發）**：
- [ ] 語言錯置（`zh-fix`＋en 欄位含 CJK）= 0，由 GBNF 保證而非重試
- [ ] 吞吐不低於 Phase 0 結果

## 風險與緩解

| 風險 | 緩解 |
|------|------|
| grammar 約束拖慢解碼（schema 複雜度敏感） | WP1 前後量測單篇耗時；>15% 退化簡化 schema |
| 4 並發 × 8192 ctx 撐爆 8 GB VRAM | 實測；降 ctx 或並發，以總吞吐為準 |
| 併發後 sqlite 寫入競爭 | DB 寫收斂主執行緒；LLM 呼叫才進 pool |
| rerank 模型對中文/法規域外、分數不可比 | shadow mode 先行；門檻用驗證集校準，不拍腦袋 |
| bge/reranker GGUF 轉換品質問題（近零分數已知案例） | 用社群驗證過的 GGUF；部署時先跑 3 條 sanity query |
| gemini backend 與並發互動 | backend 非 ollama 時退回序列（WP2 內建） |
| repo 有未提交的 html/data run 產物 | 各 WP commit 一律 path-limited add，勿夾帶 |

## 給執行 session 的提示

- **分工建議**：Opus 主 session 負責 WP5 門檻校準、Phase 0 驗收判讀、Phase 2 觸發決策；
  WP1/WP2/WP3/WP4/WP6 是邊界清楚的機械實作，可分派 Sonnet subagent（各附本檔對應段落）。
- 憲法（`D:\Claude\Common\rule\`）session 啟動必讀；git 一律 WSL
  （`wsl -e bash -lc 'cd /opt/tracker && …'`）；commit identity 用全域設定，勿逐次指定。
- 基線 run log：`logs/run-20260811-234014.log`。改動前先跑 `pytest` 確認綠色起點。
- `html/data/` 現有未提交變更是 run #63 產物，與本計畫無關——不要 commit、不要 revert，
  留給使用者處置。
- 本檔驗收數字的重新推導：run 報告行（`grep "finished:" logs/run-*.log`）＋
  `sqlite3 db/articles.sqlite "select category,count(*) from articles group by 1"`。
