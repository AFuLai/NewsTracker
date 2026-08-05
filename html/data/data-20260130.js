// data-20260130.js — 2026-01-30
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-30"] = [
  {
    id: "20260130-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究深入探討 macOS CoreAudio 類型混淆漏洞 (CVE-2024-54529) 的利用技術細節",
    summary: "本文是關於 macOS 安全研究的進階技術分享，重點深入探討如何利用一個類型混淆漏洞 (CVE-2024-54529)。此漏洞存在於 CoreAudio 框架的 com.apple.audio.audiohald Mach 服務中，該服務由 coreaudiod 進程使用。具體來說，在處理如 _XIOContext_Fetch_Workgroup_Port 等 Mach 訊息處理程序時，系統會根據 Mach 訊息中的 ID 從 Object Map 獲取 HALS_Object，並假設其為特定類型 (ioct) 進行操作，但缺乏適當的類型驗證。作者分享了將潛在可利用的崩潰（crash）轉化為實際可運作的漏洞利用程式（exploit）的複雜過程，內容涵蓋了技術細節、創意解難和成功利用的過程。建議讀者先參考作者關於此漏洞的詳細報告，以掌握其技術背景。",
    tags: ["macOS", "CoreAudio", "CVE-2024-54529", "類型混淆", "Mach 服務", "漏洞利用"],
    title_en: "In-depth Study of Exploitation Techniques for macOS CoreAudio Type Confusion Vulnerability (CVE-2024-54529)",
    summary_en: "This article is an advanced technical sharing piece on macOS security research, focusing on how to exploit a type confusion vulnerability (CVE-2024-54529). This vulnerability resides in the com.apple.audio.audiohald Mach service within the CoreAudio framework, which is utilized by the coreaudiod process. Specifically, when processing Mach messages such as _XIOContext_Fetch_Workgroup_Port, the system retrieves the HALS_Object from the Object Map based on the ID in the Mach message and assumes it is a specific type (ioct) for operation, but lacks proper type validation. The author shares the complex process of converting a potential crash into a functional exploit, covering technical details, creative puzzle-solving, and the successful exploitation process. Readers are advised to first refer to the author's detailed report on this vulnerability to grasp its technical background.",
    tags_en: ["macOS", "CoreAudio", "CVE-2024-54529", "Type Confusion", "Mach Service", "Exploitation"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/01/sound-barrier-2.html", lang: "EN" }
    ]
  }
];
