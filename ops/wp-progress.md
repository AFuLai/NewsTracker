# WP 進度日誌（PLAN-v4 §6）

> 每 loop 追加一行：`loop#N | 日期 | 做了什麼 | 證據（指令+關鍵輸出）`。
> 每 4 loop 追加一個 CHECK 塊；每 12 loop 追加體檢結果。基線：v2.29、run #77、
> commit `13b9e54`、pytest 465 passed、working tree 乾淨。

loop#1 | 2026-08-28 | WP9 llamacpp adapter：`tracker/llm/_call_llamacpp()`（POST 8083 /v1/chat/completions，schema→response_format json_schema，temp 0.2，連線層失敗 fail-open 回 ollama 鏈）；`TRACKER_LLM_BACKEND` 部署開關進 `resolve_default_backend()`（default 不變）；STATS 增 llamacpp_ok/llamacpp_fallback；orchestrator 遙測 RunReport.llamacpp_fallback + one_line `lfb` 欄位 + _finalize delta。新增 `tests/test_llamacpp_adapter.py`（7）＋擴充 `test_llm_backend.py`（2）。**WP9.1 [x]**。 | `/opt/venv/bin/pytest -q` → `473 passed in 4.75s`（基線 465 + 8）。WP9.2 待 WP8 部署 8083。
