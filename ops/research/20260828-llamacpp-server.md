# 研究筆記：llama-server 生成端導入（PLAN-v4 WP8–WP10 依據）

> 2026-08-28，web 研究 subagent 產出、主 session 匯整。每項附出處與信心等級
> （confirmed＝文件/發佈頁直接證實；likely＝可信推斷，執行時需實測驗證）。
> **失效條件**：llama.cpp 後續版本改動 server flags 或 Gemma 4 GGUF 生態變化時，本檔數字需重查。

## 1. 最新版本與既有兩實例的升級風險

- 最新 tag **b10664**（2026-08-27）；release 極頻繁，「穩定」＝釘一個 tag。
- b10423 → b10664 之間**未發現** `--embedding` / `--reranking --pooling rank` / `/v1/rerank`
  回應格式的破壞性變更；期間顯著新增為 **b10662 的 `--kv-unified-per-slot`**（加法、不破壞）。
- 但約 240 個 tag 未逐一稽核 → 結論等級 likely。**對策（已進 PLAN-v4）**：生成實例獨立安裝，
  8081/8082 釘死 b10423 不動（校準 MODEL_TAG 綁定該 build）。
- 出處：https://github.com/ggml-org/llama.cpp/releases ；
  https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md

## 2. 結構化輸出（confirmed）

- `/v1/chat/completions` 支援 `response_format: {"type":"json_schema",...}`（OpenAI 相容），
  server 端編譯為 grammar；也可直接送 body 欄位 `grammar`（GBNF）。約束只作用於解碼，不注入 prompt。
- GBNF 支援 Unicode 字元範圍：`[ぁ-ゟ]`、`\uXXXX`/`\UXXXXXXXX`、否定 `[^...]` ——
  en 欄位鎖拉丁、zh 欄位鎖 `[一-鿿]` 等皆可行。
- 實務警告（非文件、常識級）：字元級約束與 BPE 分詞互相拉扯，過緊會傷流暢度 → **離線 A/B 先行**。
- 出處：server README（同上）；https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md

## 3. 並發（~4 路短 JSON 請求）

- `-np/--parallel N`（現 default `-1` 自動）；`-cb` continuous batching **預設開啟**。
- ctx 傳統上按 slot 均分（`-c 8192` × `-np 4` → 每 slot 2048）；b10662 起可用
  `--kv-unified-per-slot N` 顯式指定。
- prompt cache 逐 slot：`--cache-prompt`（預設開）吃共同前綴；`--cache-reuse N` 允許 KV shift
  重用非前綴塊（系統 prompt 相同、文章本體不同的場景有效）。
- 建議起手（likely，數字屬建議非文件規定）：`-np 4 -cb -c 8192 --cache-reuse 256`。

## 4. 投機解碼

- flag 面已改版：`--spec-draft-model/-md`、`--spec-draft-n-max`（default 3）、`--spec-type
  none|draft-simple|draft-eagle3|draft-mtp|…`；MTP 支援已於 PR #22673 併入。
- 典型增益 20–50%（結構化低熵輸出如 JSON 屬有利面）；但 RTX 3090 上 MoE 目標 19 種配置
  **全數無淨增益**的公開實測存在——MoE routing 讓 acceptance 不可預測。
- unsloth 的 Gemma 4 GGUF repo 附 **MTP drafter（~99 MB Q8_0）**，新版 llama.cpp 可自動發現，
  比 E2B 當 draft 便宜。grammar × 投機 × 多 slot 的組合無文件明文保證（likely）→ 實測 gate。
- 出處：server README；https://github.com/ggml-org/llama.cpp/pull/22673 ；
  https://github.com/thc1006/qwen3.6-speculative-decoding-rtx3090

## 5. 8 GB VRAM 塞法

- `-ctk/-ctv` 支援 `q8_0` 等；V-cache 量化需 flash-attn（`-fa on|off|auto`，現 default auto）。
- 配方：`-fa on -ctk q8_0 -ctv q8_0` KV 約砍半、品質損失可忽略；Gemma 4 E4B 多數層為
  512-token sliding window（unsloth 註記），ctx 8192 下 KV 本來就小。
- Q4_K_M 5.41 GB 權重 ＋ q8_0 KV @8192 ＋ compute buffer → **全卸載（含 output layer）可入 8 GB**
  （likely——執行時 `-ngl 99` 實測並看 `nvidia-smi`）。這直接解掉 ollama 42/43 層問題
  （ollama 的 9.6 GB 是偏重的變體）。

## 6. Gemma 4 E4B GGUF 生態（confirmed）

| repo | 要點 |
|---|---|
| `ggml-org/gemma-4-E4B-it-GGUF` | 官方轉換：Q4_0 4.59 GB、Q8_0 8.03 GB、BF16 15.1 GB |
| `bartowski/google_gemma-4-E4B-it-GGUF` | 全階梯：IQ4_XS 5.11 / Q4_K_S 5.24 / **Q4_K_M 5.41（推薦）** / Q5_K_M 5.82 / Q6_K 6.33 / Q8_0 8.03 GB |
| `unsloth/gemma-4-E4B-it-GGUF`（含 -qat-） | UD 量化 3.55–5.13 GB；**附 MTP drafter GGUF（98.7 MB）**；42 層＋PLE、128K ctx |
| `unsloth/gemma-4-E2B-it-GGUF` 等 | E2B 可作傳統 draft（與 E4B 同家族 vocab——**未經明文確認**） |

- Q8_0 在 8 GB 卡不可行（權重即近乎吃滿）；Q5_K_M/Q6_K 是全卸載的品質上限、Q4_K_M 安全解。
- **已知 issue（全部與本管線無關，因為我們不用 tool calls）**：tool-call 以原始 token 洩入
  content（llama.cpp #22786）、解析殘留（#21316）、`peg-gemma4` 解析器無限重複（#21375）、
  thinking-channel 洩漏需修正 Jinja 模板（asf0/gemma4_jinja；unsloth repo 附更新模板）。
  對策：`--jinja` ＋ 必要時掛修正模板。

## 7. ollama vs llama-server 吞吐

- 單流近乎打平（38 vs 36 tok/s 一例；另一例 ollama 落後 ~10%）。
- **並發是結構性差距**：ollama 排隊制在高並發 TTFT 升到 ~3.2s，continuous batching 類 server
  維持 ~145ms；4 路短 JSON 正是 llama-server 的有利面（likely——無 RTX 2000 Ada 同硬體數據）。
- 出處：https://insiderllm.com/guides/llamacpp-vs-ollama-vs-vllm/ ；
  https://www.promptquorum.com/local-llms/llamacpp-vs-ollama-vs-vllm ；
  https://whysogeek.com/vllm-ollama-llamacpp-which-inference-engine-2026/

## 結論（進 PLAN-v4 的形態）

生成實例：新 tag 獨立安裝＋bartowski Q4_K_M＋
`-ngl 99 -fa on -ctk q8_0 -ctv q8_0 -c 8192 -np 4 --cache-reuse 256 --jinja`，
JSON 走 `response_format: json_schema`、字元鎖走 GBNF Unicode 範圍；
MTP drafter 只在實測 +15% 以上才留。
