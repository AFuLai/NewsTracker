# LESSONS — 活躍教訓（PLAN-v4 §6，Reflexion 式，每 loop 開始重讀）

> 上限 ~10 條活躍教訓，溢出即整併或升格。Promotion 為關鍵機制：升格為測試/gate
> 後即可修剪散文行。模板見 PLAN-v4 §6「教訓紀錄」。同一修正兩次失敗即停手。

## L-001 | 2026-08-28 | loop 2
Symptom: gemma-4-E4B 在 /v1/chat/completions + response_format json_schema 下 content 全空、finish_reason:length，文字跑進 reasoning_content。
Root cause: 此 GGUF 的 chat template 注入 `<|channel>thought` 思考通道；grammar 只約束 final 通道，模型耗盡預算仍在思考。`--reasoning off`／`enable_thinking:false` 均無效。
Rule: llamacpp 生成一律走 `/completion` + `json_schema`（或 grammar），不要用 /v1/chat/completions 的 chat template。
Promotion: 已加測試 ops/llama-server/sanity.py（gen 檢查斷言 json_schema 輸出為合法 JSON）；PLAN 修訂 R-003；WP9 adapter 待改（WP9.2 前）。
Expires-when: 換掉此模型/模板，或改用一個不含思考通道的 template。

## L-003 | 2026-08-28 | loop 4
Symptom: llama-server /completion 對真實 summarize prompt 回 400「request (N tokens) exceeds context size (2048)」，短測試卻正常。
Root cause: `-c 8192 -np 4` 把 ctx 平均分給 4 slot＝每 slot 2048；但 body[:6000] 字（CJK ~1 token/字）就 ~6000 token。per-slot ctx 才是每次請求的真實上限，不是 -c 總值。
Rule: llama-server 多 slot 時，per-slot ctx（= -c / -np）必須 ≥ 管線單次請求需求（本專案 ≈8192，對齊 ollama num_ctx）。設 -c 時先乘上 -np。
Promotion: 已進 PLAN 修訂 R-004；MANIFEST flags 更新；sanity gen 檢查用短 prompt 未涵蓋此坑——WP10 若加長 prompt 的 gen sanity 可升格為測試。
Expires-when: 改變 -np/-c 或模型 context 策略時。

## L-002 | 2026-08-28 | loop 2
Symptom: `wsl -e bash -lc` 內含 `pkill -f "llama-b10665/llama-server"` 的指令回 exit 15（SIGTERM），伺服器沒被正確重啟。
Root cause: `pkill -f` 比對整條 command line，而該 pattern 字串本身就在自己的 command line 裡 → 殺到自己這個 shell。
Rule: 在 wsl 指令裡殺行程用 bracket-safe pattern（`[l]lama-...`）或以 pid/port（`pgrep -f "port 8083" | head -1`）殺，勿用會命中自身命令列的字面 pattern。
Promotion: none（散文教訓；發生第二次再考慮升格為包裝腳本）。
Expires-when: 改用專用的 stop 腳本管理 llama-server 行程後。
