// data-20260211.js — 2026-02-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-11"] = [
  {
    id: "20260211-001",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 宣布修補 CVE-2026-20700：多平台記憶體溢位漏洞，警示已遭利用",
    summary: "本漏洞（CVE-2026-20700）為一記憶體損壞問題，涉及狀態管理改善，可能允許攻擊者在具備記憶體寫入能力的情況下執行任意程式碼。受影響產品涵蓋 iOS、iPadOS、macOS、tvOS、visionOS 與 watchOS 等多個 Apple 平台。Apple 已發布修補程式，要求用戶升級至 iOS 26.3、iPadOS 26.3、macOS Tahoe 26.3 等版本。特別值得注意的是，Apple 警告此漏洞可能已在針對特定目標個體的極度複雜攻擊中被利用，並同時發布了 CVE-2025-14174 和 CVE-2025-43529 應對此報告。由於此漏洞已被列入 CISA 已知利用漏洞目錄，建議所有用戶應立即執行修補，以降低被惡意利用的風險。",
    tags: ["Apple", "CVE-2026-20700", "記憶體溢位", "iOS", "macOS", "CISA"],
    title_en: "Apple announces patch for CVE-2026-20700: Multi-platform memory overflow vulnerability, warning of potential exploitation",
    summary_en: "This vulnerability (CVE-2026-20700) is a memory corruption issue related to state management improvements, which could potentially allow an attacker to execute arbitrary code with memory write capabilities. Affected products include multiple Apple platforms such as iOS, iPadOS, macOS, tvOS, visionOS, and watchOS. Apple has released a patch, requiring users to upgrade to versions such as iOS 26.3, iPadOS 26.3, and macOS Tahoe 26.3. Notably, Apple warns that this vulnerability may have been exploited in highly complex attacks targeting specific individuals, and simultaneously released CVE-2025-14174 and CVE-2025-43529 to address this report. Since this vulnerability has been listed in the CISA Known Exploited Vulnerabilities Catalog, all users are advised to apply the patch immediately to mitigate the risk of malicious exploitation.",
    tags_en: ["Apple", "CVE-2026-20700", "Memory Overflow", "iOS", "macOS", "CISA"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-20700", lang: "EN" }
    ]
  }
];
