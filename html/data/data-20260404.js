// data-20260404.js — 2026-04-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-04"] = [
  {
    id: "20260404-001",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Elastic Security推出多項整合，強化macOS、QRadar、AWS等數據可視性與分析能力",
    summary: "本文介紹了 Elastic Security 生態系統的九項新整合，旨在解決安全數據分散、難以全面檢視的問題。新整合涵蓋了 macOS 安全事件、IBM QRadar、Proofpoint Essentials、AWS Security Hub 等多個領域。macOS Security Events 整合提供了 OS 層級的深度可視性，透過預設過濾器（predicate-based filters）將龐大的日誌量精煉為與安全相關的事件，包括身份驗證、進程執行和網路連線，並可供 AI 助理進行自然語言查詢。AWS Security Hub 整合則能將雲環境的資安發現（findings）以 Open Cybersecurity Schema Framework (OCSF) 格式匯入，並標準化為 ECS，讓用戶能在單一平台關聯雲端資安態勢與端點、身份等其他來源的訊號。此外，QRadar 整合支援 SIEM 遷移工作流，並可利用生成式 AI 將現有規則映射至 Elastic 的檢測庫。這些整合的實務影響是將分散的資安數據集中化、標準化，並提升分析師在單一平台進行關聯分析和快速調查的能力。",
    tags: ["Elastic Security", "macOS", "AWS Security Hub", "IBM QRadar", "Proofpoint Essentials", "SIEM", "OCSF"],
    title_en: "Elastic Security Launches Multiple Integrations to Enhance Data Visibility and Analytics for macOS, QRadar, AWS, and More",
    summary_en: "This article introduces nine new integrations within the Elastic Security ecosystem, designed to address the challenge of scattered and difficult-to-comprehend security data. The new integrations cover multiple domains, including macOS security events, IBM QRadar, Proofpoint Essentials, and AWS Security Hub. The macOS Security Events integration provides deep OS-level visibility, refining massive log volumes into security-relevant events—including identity authentication, process execution, and network connections—using predicate-based filters, and enabling natural language querying via an AI assistant. The AWS Security Hub integration, meanwhile, ingests cloud environment security findings in the Open Cybersecurity Schema Framework (OCSF) format and standardizes them into ECS, allowing users to correlate cloud security posture with signals from other sources like endpoints and identities on a single platform. Furthermore, the QRadar integration supports SIEM migration workflows and can use generative AI to map existing rules to Elastic's detection library. The practical impact of these integrations is the centralization and standardization of disparate security data, significantly enhancing an analyst's ability to perform correlated analysis and rapid investigation on a single platform.",
    tags_en: ["Elastic Security", "macOS", "AWS Security Hub", "IBM QRadar", "Proofpoint Essentials", "SIEM", "OCSF"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/elastic-security-integrations-roundup-q1-2026", lang: "EN" }
    ]
  },
  {
    id: "20260404-002",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Electron 框架 macOS 應用程式路徑處理漏洞 (CVE-2026-34779)",
    summary: "Electron 是一個用於跨平台桌面應用程式的框架，使用 JavaScript、HTML 和 CSS 開發。此漏洞 (CVE-2026-34779) 存在於 Electron 框架的舊版本中，特別是 macOS 平台。當應用程式呼叫 `app.moveToApplicationsFolder()` API 時，如果應用程式的 Bundle 路徑包含特定字元，舊版本會使用 AppleScript 的備用路徑，而此備用路徑未能正確處理這些字元。在特定條件下，攻擊者可以透過精心設計的啟動路徑，在使用者接受「移動到應用程式資料夾」的提示時，觸發任意 AppleScript 執行。受影響的應用程式必須使用 `app.moveToApplicationsFolder()` API。未受影響的應用程式則不受影響。此問題已在 Electron 38.8.6、39.8.1、40.8.0 和 41.0.0-beta.8 版本中修補。建議開發者立即升級到修補版本，並特別檢查應用程式是否使用了該 API。",
    tags: ["Electron", "CVE-2026-34779", "macOS", "AppleScript", "跨平台", "OS Command Injection"],
    title_en: "Electron Framework macOS Application Path Handling Vulnerability (CVE-2026-34779)",
    summary_en: "Electron is a framework used for developing cross-platform desktop applications using JavaScript, HTML, and CSS. This vulnerability (CVE-2026-34779) exists in older versions of the Electron framework, specifically on the macOS platform. When an application calls the `app.moveToApplicationsFolder()` API, if the application's Bundle path contains specific characters, older versions use an AppleScript fallback path. This fallback path fails to correctly handle these characters. Under specific conditions, an attacker can trigger arbitrary AppleScript execution by designing a malicious startup path, when the user accepts the 'Move to Applications Folder' prompt. Affected applications must use the `app.moveToApplicationsFolder()` API. Applications that do not use this API are unaffected. This issue has been patched in Electron versions 38.8.6, 39.8.1, 40.8.0, and 41.0.0-beta.8. Developers are advised to upgrade immediately to the patched versions and specifically check if their application uses this API.",
    tags_en: ["Electron", "CVE-2026-34779", "macOS", "AppleScript", "Cross-Platform", "OS Command Injection"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-34779", lang: "EN" }
    ]
  }
];
