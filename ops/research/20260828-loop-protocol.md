# 研究筆記：loop 工作協定的依據（PLAN-v4 §6）

> 2026-08-28，web 研究 subagent 產出、主 session 匯整。PLAN-v4 §6 的 4/12 節奏是使用者
> 指定的實例化；本檔記錄「哪些機制有實證出處、哪些是合理合成」。

## 有出處的機制

1. **JSON/checklist 燒盡表＋只准翻 pass 位、不准改題**——Anthropic long-running-agent
   harness（2025-11）：feature list 每項 `description/steps/passes`，agent 只能翻 `passes`，
   「刪改測試不可接受」明文入 prompt；進度檔＋描述性 commit 是跨 context 的工作狀態。
   每 session 先**重驗舊功能**再做新功能——回歸偵測內建於節奏。
   https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
2. **給 agent 一個可跑的檢查**——Claude Code best practices：測試/build exit code/
   diff-against-fixture；升級階梯：prompt 內檢查 → 每回合重評的目標條件 → Stop hook 確定性
   gate → **fresh context 的對抗 review subagent**（「做工的不當評分的」）。要求證據
   （指令＋輸出），不收「已完成」的宣稱。https://code.claude.com/docs/en/best-practices
3. **Ralph loop**（Geoffrey Huntley, 2025-07；Anthropic 官方 plugin 存在）：同一 prompt
   逐輪餵、每輪 fresh context；PLANNING（spec vs code 差距分析→重排 TODO）與 BUILDING 分離；
   測試當「背壓」擋 commit；明確完成暗語＋最大輪數硬預算。
   https://ghuntley.com/loop/ ；https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
4. **Reflexion**：把失敗訊號轉成一行式口語教訓存 episodic memory，**下一輪無條件再注入**
   ——複用靠再注入不靠檢索。https://arxiv.org/abs/2303.11366
5. **自評偏誤實證**：LLM 評自家輸出偏寬；格式漂亮加分與內容無關（arXiv 2411.16594 等）。
   → 12-loop 體檢必須 fresh context、只讀 artifacts 不讀工作 transcript。
6. **Context rot**：context 遠未滿即退化（Chroma research）；同一修正兩次失敗即重開，
   不在污染 context 續打。https://www.trychroma.com/research/context-rot
7. **CLAUDE.md/教訓遵循率**：散文規則遵循率約七成、膨脹即被忽略 → 教訓少而精、祈使句、
   具體路徑；紅線升格為確定性 gate（Promotion 欄的由來）。
   https://redreamality.com/blog/claude-md-agents-md-deep-dive/
8. **失敗模式清單**：提前宣稱完成/改測試自肥（Anthropic harness 文）；AutoGPT/BabyAGI 的
   循環重規劃與目標漂移（vectara/awesome-agent-failures 案例集）。

## 合成（無直接出處，PLAN-v4 已標）

- 「每 4 / 每 12」的具體數字（使用者指定的節奏，文獻只支持「高頻機械驗證＋低頻判斷性審查」的分層）。
- diff-size-per-loop、time-per-item 作漂移訊號（與出處一致的延伸；實證三件套是
  burndown、測試通過率、回歸重驗）。
- 活躍教訓 ~10 條上限（由第 7 點膨脹發現推出的啟發式）。

## 落地形態

PLAN-v4 §6：每 loop 三件套（pytest 綠＋progress 行＋path-limited commit）；
每 4 loop 機械 CHECK（burndown/回歸/scope/velocity → ON_TRACK|DRIFT|STALL）；
每 12 loop fresh-context 體檢（趨勢/計畫時效/健康指標/對抗檢視，改善方向必須落成
spec/測試/gate/prompt 的具體變更）；`ops/LESSONS.md` 模板含 Promotion 與 Expires-when。
