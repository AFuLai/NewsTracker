# v4.0 交接計畫 — 生成引擎本地化（llama.cpp）＋ shadow 功能收割 ＋ loop 工作協定

> **交接對象**：另開之執行 session。本文件自包含，由 Fable 5 於 2026-08-28 撰寫。
> 基線：v2.29、run #77（2026-08-26）、commit `13679ed`、pytest **465 passed**、working tree 乾淨。
> 前置：PLAN-v3 Phase 0/1（WP1–WP6）已落地驗收；Phase 2（WP7）為條件觸發、未執行。
> 本計畫由**使用者明示啟動**生成端 llama.cpp 導入（等同 v3 觸發條件 (c) 的使用者決策），
> 並把 v3 的 WP7 拆解承接為 WP8–WP10。所有 git 與原始碼操作在 WSL `/opt/tracker`；
> 憲法（`D:\Claude\Common\rule\`）session 啟動必讀。

## 0. 現況盤點（2026-08-28 實測，指令附後）

| 項目 | 實況 |
|---|---|
| llama.cpp | `b10423` 裝於 `/opt/llama.cpp/llama-b10423/`；embed :8081、rerank :8082 均 `{"status":"ok"}` |
| systemd | `ollama` / `llama-embed` / `llama-rerank` 三服務 active（`ops/systemd/`） |
| 生成端 | ollama 0.23.2 `gemma4:e4b`；`endpoints.json` 偏好遠端 TWTY3PC1876；本機 42/43 層在 GPU |
| 生成模型 GGUF | **不存在**——`/opt/llama.cpp/models/` 只有 bge 兩顆（embed/rerank 用） |
| WP5 CRA gate | **shadow**（`TRACKER_CRA_GATE` 未設 enforce）；`cra_scores` 僅 **64 筆**（2026-08-21 起） |
| WP6 semdedup | **shadow**（`TRACKER_SEMANTIC_DEDUP` 未開 merge）；run #77 記 sem16 配對 |
| run #77 遙測 | 全程 2331s；translate 1301s（56%）；zh-fix:2；`fo4`（endpoint failover ×4）；schema_miss 0 pfb 0 |

再推導：`systemctl is-active ollama llama-embed llama-rerank`；`curl -s 127.0.0.1:8081/health 127.0.0.1:8082/health`；
`ls /opt/llama.cpp/models/`；`grep "finished:" logs/run-20260826-013539.log`；
`python3 -c "import sqlite3;c=sqlite3.connect('db/articles.sqlite');print(c.execute('select count(*),min(scored_at),max(scored_at) from cra_scores').fetchone())"`。

## 1. 缺口分析

- **G1 生成端依賴外部、效能不可控**：同一遠端（TWTY3PC1876）translate 實測 1.61 s/篇（2026-08-19，
  `ollama_hosts.py` docstring）→ run #69 p50 4.6s → run #77 p50 **22.7s**＋4 次 failover。借用他人機器，
  負載隨對方波動，且受 `TRACKER_OLLAMA_REMOTE_WINDOW` 時窗政策約束。本機 ollama 又只能放 42/43 層
  （output layer 留 CPU，Phase 0 驗收記錄「調參數不可達」）。
- **G2 語言錯置只有事後補救**：zh-fix 持續非零（run #77 = 2）。JSON schema 鎖得住結構鎖不住字元集；
  GBNF 字元範圍鎖需要 llama.cpp 生成端（v3 WP7 的核心論據，至今未做）。
- **G3 WP5 卡在 shadow**：τ=-3.0 是以 `title+summary[:400]` 校準的**暫定值**，`cra_gate.py` 明文要求
  以 gate 自身輸入（title+snippet）分佈重推導後才可 enforce；shadow 資料只累積 64 筆，按 run #77 的
  節奏（14 sc/run）要再等數月。v3 驗收三項（recall/precision、fail-open 關機驗證、跨來源收斂抽查）全部未勾。
- **G4 WP6 卡在 shadow**：semdedup 配對只記 log 不合併；門檻未經混淆矩陣驗證，v3 驗收未勾。
- **G5 Gemini backend 的隱私與脆弱性**：prompt 送 Google；Playwright 驅動 UI，選擇器/label 隨站方改版即斷。
  本地生成達標後其存在價值需重新裁決（使用者決策項）。
- **G6 版本與校準的耦合**：`CALIBRATION.md` 明定分數綁 `bge-reranker-v2-m3-FP16/b10423/queries-v1`，
  升級 binary 即作廢全部校準數字——生成端引入新版本時**不得**動到 8081/8082 兩實例。
- **G7 遙測盲區**：run 之間服務死掉靠 systemd 補救，但 pipeline 對「遠端變慢 14×」只有事後 p50 可看，
  無退避機制（fo 只處理連線失敗，不處理慢）。

## 2. 目標（可量測）

| # | 目標 | 量尺（WP3 遙測同一把尺） |
|---|---|---|
| 1 | 生成完全本地自主：不依賴遠端也能在可接受時間完成 | 本地 llamacpp 全程 < 90 分（**預測**，以實測為準）；`fo`=0 |
| 2 | 語言錯置機械性歸零 | zh-fix=0 且 en 欄位無 CJK，連續 2 個完整 run，由 GBNF 保證而非重試 |
| 3 | CRA gate 由 shadow 轉 enforce | 校準集 recall ≥ 0.95、precision > L1 現況；數字＋再推導指令進 commit |
| 4 | semdedup 由 shadow 轉 merge | 抽查 ≥ 30 對誤合併 0；eu_cra 跨來源同事件收斂 |
| 5 | 精確度既有成果不回退 | schema_miss=0、parse_fallback=0、rev_fail=0 維持 |

## 3. Work Packages（續 v3 編號；v3 之 WP7 由 WP8–WP10 承接並作廢）

### WP8 llama-server 生成實例部署

- **新 build 獨立安裝**：以執行當日 `github.com/ggml-org/llama.cpp/releases` 最新 tag 為準
  （2026-08-28 查得 b10664）釘選，裝於 `/opt/llama.cpp/llama-b<NNNNN>/`，tarball sha256 記入
  `ops/llama-server/MANIFEST.md`。**b10423 兩實例與其模型完全不動**（G6）。
- **模型**：`bartowski/google_gemma-4-E4B-it-GGUF` **Q4_K_M（5.41 GB）** 起手——與現行 ollama
  `gemma4:e4b` 同一模型家族，量化後可全卸載（含 output layer），直接解掉 42/43 問題。
  sha256 記 MANIFEST。放不下再降 Q4_K_S/IQ4_XS；Q8_0（8.03 GB）在 8 GB 卡上不可行。
- **啟動參數**（研究出處：`ops/research/20260828-llamacpp-server.md` Q3/Q5）：
  `-ngl 99 -fa on -ctk q8_0 -ctv q8_0 -c 8192 -np 4 --cache-reuse 256 --jinja`，
  port **8083**、bind `127.0.0.1`（無 auth，不得離box）。Gemma 4 已知 tool-call/模板 issue 不影響
  本管線（我們走 json_schema/grammar，不用 tool calls）；模板異常時用社群修正 Jinja 檔備援。
- systemd unit `llama-gen.service` 進 `ops/systemd/`（install.sh 加入清單）；
  `ops/llama-server/sanity.py` 擴充三條生成 sanity：/health、一次 json_schema 受約束生成、
  server log 確認 `offloaded 43/43`（或該版等價訊息）＋ `nvidia-smi` VRAM 佔用記錄。
- 驗收：`- [ ] WP8.1 全層 GPU（含 output layer），VRAM 峰值記入 MANIFEST`
  `- [ ] WP8.2 sanity 三條全綠，指令與輸出進 commit message`

### WP9 tracker/llm adapter（llamacpp backend）

- `tracker/llm/__init__.py` 增 `_call_llamacpp()`：POST `http://127.0.0.1:8083/v1/chat/completions`，
  `response_format: {"type":"json_schema",...}` 承接既有 schema 參數；temperature 0.2 對齊；
  URL 走 env `TRACKER_LLAMACPP_URL`（default 8083）。
- backend 選擇：`TRACKER_LLM_BACKEND=llamacpp|ollama|gemini`（**default 維持 ollama**，切換是部署
  動作不是程式碼 flag day）。fallback 鏈不變哲學：llamacpp 連線層失敗 → 走既有 ollama_hosts 鏈
  （fail-open）；STATS 增 `llamacpp_ok` / `llamacpp_fallback`，遙測行 `llm` 欄位如實反映。
- `call()` 對外簽名**只增不改**；六層與 orchestrator 不動——它們只認 `call()`。
- 測試：`test_llm_backend.py` 擴充＋新 `test_llamacpp_adapter.py`（httpx mock：正常、schema 傳遞、
  連線失敗 fallback、STATS 計數）。
- 驗收：`- [x] WP9.1 pytest 全綠`（loop#1：473 passed，見 wp-progress）
  `- [ ] WP9.2 TRACKER_LLM_BACKEND=llamacpp 完整 run ×1：schema_miss=0、pfb=0、rev_fail=0`（待 WP8 部署 8083）

### WP10 GBNF 字元鎖＋效能定調

- **GBNF**（研究 Q2：GBNF 支援 Unicode 範圍 `[\u4e00-\u9fff]` 等）：L5 translate 的 en 欄位鎖
  拉丁＋常用標點、zh 欄位鎖 CJK＋標點；grammar 隨 request 送（body `grammar` 欄位），
  ollama/gemini 路徑不受影響（它們拿不到 grammar，維持 L6 事後檢查為保險絲）。
- **先離線 A/B 再上線**：取 50 篇歷史 rows，schema-only vs schema+grammar 各跑一遍，
  比對品質（人工抽讀 10 篇）與單篇耗時——字元級約束與 BPE 分詞有互相拉扯的已知風險，>15% 退化
  即簡化字元類（例如只鎖「en 欄位無 CJK」的否定類，不鎖白名單）。
- **效能量測**（WP3 遙測同一把尺）：單篇 p50/p95 與 4 並發吞吐，對三個基線：ollama-local、
  ollama-remote（借用時段）、llamacpp-local。數字進 commit。
- **投機解碼＝量測後才留**：unsloth 版另附 MTP drafter（~99 MB）；社群有 MoE 目標全配置無增益的
  前例，故 gate 條件：實測總吞吐 +15% 以上才納入 systemd 參數，否則記錄數字後捨棄。
- 驗收：`- [ ] WP10.1 A/B 記錄落地（ops/research/ 或 commit message），採用/簡化決策有數字支撐`
  `- [ ] WP10.2 zh-fix=0 且 en 欄位無 CJK，連續 2 完整 run`
  `- [ ] WP10.3 llamacpp-local 吞吐數字落地；若劣於 ollama-remote 借用時段，寫明混用策略（見 WP13）`

### WP11 CRA gate τ 重校準 → enforce（不依賴 WP8–10，可並行）

- 樣本現況 64 筆不足。**離線 replay 補樣本**：歷史 eu_cra 相關 rows 以 gate 的真實輸入形態
  （title + snippet，同 `cra_gate.py` 的截斷常數）重新過 8082 打分——與 2026-08-14 校準
  （title+summary[:400]）的關鍵差異正是輸入形態，這次必須一致。replay 分數**不得**寫入
  `cra_scores` 正式列（或以獨立欄位/表標注 source=replay），MODEL_TAG 不變（同 b10423 服務）。
- shadow（64+持續累積）＋ replay 合計 ≥ 300 筆再推 τ；閾值選擇偏保守（recall 優先），
  完整分佈表與再推導指令進 commit（憲法 §9.4 精神：數字必附重算指令）。
- enforce 開啟 = `TRACKER_CRA_GATE=enforce` 進 daemon/排程環境；**首個 enforce run 的全部
  dropped rows 人工讀過**，誤殺 > 0 即回 shadow 並記錄。
- 補 v3 未勾驗收：`- [ ] WP11.1 recall ≥ 0.95、precision > L1 現況，數字進 commit`
  `- [ ] WP11.2 fail-open 驗證：停 8082 跑一次，pipeline 照常完成`
  `- [ ] WP11.3 首 enforce run dropped 全數抽查，誤殺 0`

### WP12 semdedup 啟用（不依賴 WP8–10，可並行）

- 從 logs 收集歷史 shadow 配對 ≥ 30 對（run #72 起有 `[semdedup]` 行），人工判定建混淆矩陣；
  現行 cos 門檻的 precision 未達 1.0 就調門檻重驗，達標後 `TRACKER_SEMANTIC_DEDUP=merge`。
- 補 v3 未勾驗收：`- [ ] WP12.1 抽查誤合併 0，混淆矩陣進 commit`
  `- [ ] WP12.2 eu_cra 頁跨來源同事件收斂為單 cluster（抽查 5 例）`

### WP13 收尾與裁決項

- **端點策略改寫**：llamacpp-local 達標後，`endpoints.json`/preferred 的語義從「遠端優先」改為
  「本地自主、遠端為借用時段的加速選項」；具體混用策略以 WP10.3 數字決定，寫入
  `ops/llama-server/MANIFEST.md`。
- **Gemini backend 去留**：屬使用者裁決（隱私：prompt 送 Google）。本計畫只準備決策材料
  （近 10 run 的 gemini_ok/fallback 統計），不擅自移除。
- 文件同步：MANIFEST、systemd README、`ops/claude-md/shared.md` 若涉共用內容走 `sync.sh --apply`。
- 驗收：`- [ ] WP13.1 端點策略落地並記錄` `- [ ] WP13.2 Gemini 決策材料呈交使用者`

## 4. 實作順序與依賴

```
WP8（部署）→ WP9（adapter）→ WP10（GBNF＋量測）→ WP13（收尾）
WP11（CRA 校準→enforce）──┐ 與 WP8–10 無依賴，可並行或先做
WP12（semdedup 啟用）    ──┘ （只用既有 b10423 服務）
```

每 WP：pytest 綠 → path-limited commit（訊息含變更理由與量測數字）。
`html/data/` 的未提交 run 產物一律不夾帶。

## 5. 不變約束（承 v3，新增兩條）

- 六層架構、`call()` 簽名只增不改、fail-open 哲學、L3 regex 反幻覺、render id 規則、
  searchinfo V3、`html/` 產出格式——全部照舊。
- **新增**：8081/8082 兩實例、其模型檔與 `MODEL_TAG` 不動（G6）；除非 WP11 重校準時一併 bump
  MODEL_TAG 並重推全部數字。
- **新增**：`TRACKER_LLM_BACKEND` default 不改 ollama，直到 WP10 驗收全綠且使用者知情。

## 6. Loop 工作協定（本計畫的執行方式）

依 2026-08-28 研究定案（出處與依據：`ops/research/20260828-loop-protocol.md`；
Anthropic long-running-agent harness、Ralph loop、Reflexion、LLM 自評偏誤文獻）。

### 每 loop（廉價、機械）

一個 loop ＝ 一個有界任務（一條 checklist 項或其明確子步驟）。結束條件三件套：
pytest 綠、`ops/wp-progress.md` 追加一行（`loop#N | 日期 | 做了什麼 | 證據（指令+關鍵輸出）`）、
path-limited commit。**checklist 項目文字不得改寫**，只能 `[ ]`→`[x]` 附證據；
要改計畫，在本檔末尾「修訂」節追加條目說明理由，不覆寫原文。

### 每 4 loop：完成度確認（機械、不含判斷、不憑感覺）

輸出固定格式塊追加到 `ops/wp-progress.md`：

```
CHECK loop#N | items x/y (Δ+n) | pytest: 465+ passed（貼指令+尾行）
regression: 已完成 WP 驗收指標重跑結果（如 sanity 三條、zh-fix 計數）
scope: git diff --stat 自上次 CHECK；未對應 checklist 的檔案列為 off-plan: [...]
verdict: ON_TRACK | DRIFT | STALL
```

- 判準：off-plan 非空 → DRIFT；連續兩次 CHECK Δ=0 → STALL。
- DRIFT/STALL 時**先處理再前進**：回到計畫對齊，或走「修訂」節明文改計畫；不得帶病進下一 loop。

### 每 12 loop：體檢（加入判斷，fresh context）

以 subagent（新開 context）執行，**只讀** PLAN-v4.md、wp-progress.md、最近三個 CHECK 塊、
`git log/diff`——不讀工作 transcript（防自評寬鬆與 context 污染）。內容：

1. **趨勢**：velocity 軌跡、同一測試/指標反覆失敗的聚類。
2. **計畫時效**：哪些項目該拆、該退役、與現實不符（防原地重規劃迴圈）。
3. **健康指標**（實質、可重跑）：最近 run 遙測（schema_miss/pfb/zh-fix/rev_fail/fo）、
   四個服務 health（8081/8082/8083/11434）、`git status` 乾淨、systemd 三+1 服務 active。
4. **對抗檢視**：對照 diff 與計畫，**只報**影響正確性或明文需求的缺口（防過度報告驅動過度工程）。
5. **產出**：評語每一句附證據；1–3 條改善方向，每條必須落成 spec 行/測試/hook/prompt 的具體變更
   （「更小心」不算）；0–2 條 LESSONS 候選。結果進 `ops/wp-progress.md`。

### 教訓紀錄（LESSONS）

`ops/LESSONS.md`，每 loop 開始重讀（再注入，Reflexion 式）。上限 ~10 條活躍教訓，
溢出即整併或升格。模板：

```markdown
## L-001 | 2026-08-30 | loop 7
Symptom: <可觀察的失敗，一行>
Root cause: <一行>
Rule: <祈使句、具體路徑/指令>
Promotion: none | 已加測試 <path> | 已加 gate <name> | 已進 PLAN 修訂 <ref>
Expires-when: <此條失效條件>
```

- **Promotion 是關鍵機制**：停留在散文的教訓遵循率有限；升格為測試/gate 後即可修剪散文行。
- 可普遍化（去掉專名仍成立＋有實際事故＋rule/ 未覆蓋＋會改變行為）的教訓走憲法 §7.6 四條件
  自測，經 `tools/feedback/submit.sh` 提交 Common，**不私改 Common**。
- 同一修正**兩次失敗**即停手：記錄後換策略或重開 fresh context，不在污染的 context 裡續打。

## 7. 風險與緩解

| 風險 | 緩解 |
|---|---|
| 新 build 破壞 embed/rerank 相容 | 生成實例獨立目錄安裝；8081/8082 釘死 b10423 不動（G6） |
| grammar × BPE 品質退化 | WP10 離線 A/B 50 篇先行；>15% 退化改否定類簡化 |
| Q4_K_M ＋ KV ＋ 4 並發撐爆 8 GB | sanity 記 VRAM 峰值；降 Q4_K_S/IQ4_XS、ctx 6144 或 -np 2，以總吞吐為準 |
| 投機解碼無增益（MoE 前例） | 量測 gate：+15% 才留，否則記數字捨棄 |
| Gemma 4 模板/tool-call 已知 issue | 不用 tool calls；`--jinja`＋社群修正模板備援 |
| replay 分佈仍非 gate 真實輸入 | 同截斷、同 query 集；τ 取保守側；首 enforce run 全抽查（WP11.3） |
| 本地生成慢於借用遠端 | 不強切：WP13 以數字定混用策略，本地自主是底線不是唯一路徑 |
| repo 夾帶 run 產物 | 一律 path-limited add |

## 8. 給執行 session 的提示

- 憲法必讀；git 一律 `wsl -e bash -lc 'cd /opt/tracker && …'`；commit identity 用全域設定。
- pytest 在 `/opt/venv/bin/pytest`（系統 python3 無 pytest）。
- 模型下載（~5.4 GB）與新 build tarball：來源 URL 與 sha256 一律記入
  `ops/llama-server/MANIFEST.md`，下載前後各驗一次 hash。
- 基線數字：run #77 遙測行（`grep "finished:" logs/run-20260826-013539.log`）；
  tests 465 passed @ `13679ed`。
- 研究筆記（本計畫的依據與出處）：`ops/research/20260828-llamacpp-server.md`、
  `ops/research/20260828-loop-protocol.md`。落地新研究心得也放 `ops/research/`。
- 分工建議：WP8/WP9/WP12 邊界清楚可派 subagent；WP10 A/B 判讀、WP11 τ 抉擇、
  所有 enforce/merge 開關由主 session 判讀；有疑慮就多視角對抗（12-loop 體檢的對抗檢視
  可提前臨時加開），不盲猜。

## 修訂

（執行 session 在此追加，格式：`R-nnn | 日期 | loop# | 改了什麼 | 理由`）
