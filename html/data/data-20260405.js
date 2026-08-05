// data-20260405.js — 2026-04-05
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-05"] = [
  {
    id: "20260405-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "cPanel/WHM 遭未經身份驗證的遠端攻擊繞過漏洞 (CVE-2026-41940)",
    summary: "cPanel 和 WHM 系統在 11.40 版本之後的版本，存在一個身份驗證繞過漏洞 (CVE-2026-41940)。此漏洞允許未經身份驗證的遠端攻擊者，透過未經授權的方式存取控制面板。此漏洞已被列入 CISA 的已知被利用漏洞目錄，顯示其極高的實務風險。攻擊向量為網路 (AV:N)，且無需使用者互動 (UI:N)，CVSS 3.1 分數為 9.8/10，嚴重性極高。建議用戶立即根據供應商的指示應用修補措施，或遵循適用之 BOD 22-01 指引，若無法修補，應考慮停止使用該產品。",
    tags: ["cPanel", "WHM", "CVE-2026-41940", "身份驗證繞過", "遠端攻擊", "CISA"],
    title_en: "cPanel/WHM Vulnerable to Unauthenticated Remote Attack Bypass Flaw (CVE-2026-41940)",
    summary_en: "cPanel and WHM systems running versions after 11.40 contain an authentication bypass vulnerability (CVE-2026-41940). This flaw allows unauthenticated remote attackers to access the control panel in an unauthorized manner. This vulnerability has been listed in CISA's Known Exploited Vulnerabilities Catalog, indicating extremely high practical risk. The attack vector is Network (AV:N), and no user interaction is required (UI:N), resulting in a CVSS 3.1 score of 9.8/10, which is critically severe. Users are advised to immediately apply patches according to the vendor's instructions, or follow the applicable BOD 22-01 guidance. If patching is not possible, users should consider discontinuing the product.",
    tags_en: ["cPanel", "WHM", "CVE-2026-41940", "Authentication Bypass", "Remote Attack", "CISA"],
    sources: [
      { name: "NVD (NIST)", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-41940", lang: "EN" }
    ]
  }
];
