// data-20260109.js — 2026-01-09
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-09"] = [
  {
    id: "20260109-001",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android UWB測試元件存在不當匯出漏洞 (CVE-2026-20972)，本地攻擊者可啟用超寬頻功能",
    summary: "本漏洞 (CVE-2026-20972) 存在於 Android 系統的 UwbTest 應用程式元件中，該元件在 SMR Jan-2026 Release 1 版本之前存在缺陷。該漏洞允許本地攻擊者透過不當的元件匯出機制，在未經授權的情況下啟用超寬頻 (UWB) 功能。攻擊向量為本地 (Local)，攻擊複雜度為低 (Low)。雖然 CVSS 3.1 評分顯示攻擊成功後可導致低機密性洩漏 (I:L)，但攻擊者必須在本地執行，且無需用戶互動。受影響的設備為使用特定 Android 系統版本（如 Samsung Android 13.0）的設備。修補建議是升級至 SMR Jan-2026 Release 1 或之後的修補版本，以修復 UwbTest 的元件匯出安全問題。",
    tags: ["CVE-2026-20972", "Android", "UWB", "Samsung", "Android 系統", "元件匯出"],
    title_en: "Android UWB Test Component Has Improper Export Vulnerability (CVE-2026-20972); Local Attacker Can Enable Ultra-Wideband Functionality",
    summary_en: "This vulnerability (CVE-2026-20972) resides in the UwbTest application component of the Android system, which was flawed prior to the SMR Jan-2026 Release 1 version. The vulnerability allows a local attacker to enable Ultra-Wideband (UWB) functionality without authorization, utilizing an improper component export mechanism. The attack vector is Local, and the attack complexity is Low. Although the CVSS 3.1 score indicates low confidentiality leakage (I:L) upon successful attack, the attacker must execute locally and requires no user interaction. Affected devices are those running specific Android system versions (such as Samsung Android 13.0). The recommended fix is to upgrade to the SMR Jan-2026 Release 1 or later patched version to resolve the component export security issue in UwbTest.",
    tags_en: ["CVE-2026-20972", "Android", "UWB", "Samsung", "Android System", "Component Export"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-20972", lang: "EN" }
    ]
  }
];
