# 關注度與內容框架：使用者裁示（2026-10-19）

承接 plan run 20261019-layout-scenarios-plan 第 3.3 節的兩個 GAP。

## 1. 不做「嚴重度」，改做「關注度」（取代 frame.severity）
- 使用者裁示：要的是**關注度**，不是嚴重度。關注度由「關鍵資訊」規則決定，例如 KEV、EU CRA 標準更新、FAQ 更新。
- 讀者在設定介面自選要關注哪些規則，設定存在瀏覽器裡，key 為 `tracker_watch`。
- **預設關注：** EU CRA 的標準更新與法規更新。
- 實作在前端：比對現有欄位（tracker、category、title、tags），不需要動 pipeline。量測（session，DB written）：
  - eu_cra 各分類筆數：法令更新 38、調和標準 20、法規與標準 35、合規指引 44。
  - 標題或標籤含「KEV」的有 210 筆；含「零時差」的有 60 筆。
  - 含「FAQ」或「常見問題」的為 0 筆，FAQ 更新暫時併入「合規指引」。

## 2. 框架欄位名稱：照提案表通過，「手法」改用中性詞
涉及對象 / Who · 影響地區 / Where · 起因 / Why · 經過／手法 / How · 影響範圍 / Impact ·
受影響產品 / Affected products · 事件發生日 / Event date。不包含 Severity，由第 1 點的關注度取代。
框架欄位的 pipeline 實作（plan S8–S9）另開切片進行。
