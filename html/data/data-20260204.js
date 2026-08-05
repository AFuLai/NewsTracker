// data-20260204.js — 2026-02-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-04"] = [
  {
    id: "20260204-001",
    trackers: ["os", "security"],
    category: "Android",
    title: "三星電話應用程式元件不當匯出，導致本地攻擊者可利用CVE-2026-20983提升權限",
    summary: "本漏洞（CVE-2026-20983）存在於三星（Samsung）的電話應用程式（Samsung Dialer）中，且影響範圍涵蓋於未更新至SMR Feb-2026 Release 1之前的版本。該漏洞的根本原因在於應用程式元件的匯出處理不當。攻擊者若能取得本地存取權限（Local attacker），可利用此缺陷啟動任意活動（arbitrary activity），並獲得與Samsung Dialer相同的高權限。根據CVSS 3.1評分，此漏洞的攻擊向量（AV）為本地、複雜度（AC）為本地、權限要求（PR）為本地，而機密性（C）、完整性（I）、可用性（A）均為高風險（High）。修補建議是升級至SMR Feb-2026 Release 1或之後的修補版本。建議所有使用三星電話應用程式的Android設備用戶，應立即檢查並更新系統安全補丁，以防範本地權限提升攻擊。",
    tags: ["Samsung", "CVE-2026-20983", "Android", "Samsung Dialer", "本地權限提升", "應用程式元件"],
    title_en: "Samsung Phone Application Component Improper Export Allows Local Attackers to Exploit CVE-2026-20983 for Privilege Escalation",
    summary_en: "This vulnerability (CVE-2026-20983) exists in the Samsung Dialer application and affects versions that have not been updated to SMR Feb-2026 Release 1. The root cause of the vulnerability is improper handling of application component exports. A local attacker who gains local access can exploit this flaw to initiate arbitrary activity and gain high privileges equivalent to those of the Samsung Dialer. According to the CVSS 3.1 score, the attack vector (AV) is Local, the complexity (AC) is Local, the privileges required (PR) is Local, while confidentiality (C), integrity (I), and availability (A) are all rated High. The recommended fix is to upgrade to SMR Feb-2026 Release 1 or a later patched version. All Android device users utilizing the Samsung Dialer are advised to immediately check and update their system security patches to prevent local privilege escalation attacks.",
    tags_en: ["Samsung", "CVE-2026-20983", "Android", "Samsung Dialer", "Local Privilege Escalation", "Application Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-20983", lang: "EN" }
    ]
  }
];
