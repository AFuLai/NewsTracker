// data-20250313.js — 2025-03-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2025-03-13"] = [
  {
    id: "20250313-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "美國政府警告：Medusa勒索軟體攻擊超過300家關鍵基礎設施，利用未修補漏洞與LOTL手法",
    summary: "美國網路安全機構CISA、FBI與MS-ISAC聯合警告，Medusa勒索軟體作為服務（RaaS）的相關團夥自2021年以來已攻擊超過300家關鍵基礎設施組織。該團夥採用雙重勒索（Double Extortion）模式，不僅加密受害者資料，還竊取資料並威脅洩露。攻擊者常透過釣魚竊取憑證，並利用未修補的漏洞進行初始存取，包括CVE-2024-1709（ScreenConnect）和CVE-2023-48788（Fortinet EMS）。在攻擊過程中，他們會禁用安全軟體、終止備份相關程序，並使用「在土地上生存」（LOTL）和合法工具進行偵察、橫向移動和資料外傳。此外，報告指出甚至可能出現「三重勒索」（Triple Extortion）的詐騙行為。建議組織應加強資安防禦，修補已知漏洞，並提高警惕，防範利用合法工具進行攻擊。",
    tags: ["Medusa", "RaaS", "關鍵基礎設施", "CVE-2024-1709", "CVE-2023-48788", "LOTL", "CISA"],
    title_en: "US Government Warns: Medusa Ransomware Attacks Over 300 Critical Infrastructure Entities Using Unpatched Vulnerabilities and LOTL Techniques",
    summary_en: "A joint warning from US cybersecurity agencies CISA, FBI, and MS-ISAC indicates that groups associated with the Medusa Ransomware-as-a-Service (RaaS) have attacked over 300 critical infrastructure organizations since 2021. This group employs a Double Extortion model, not only encrypting victim data but also stealing it and threatening to leak it. Attackers frequently steal credentials through phishing and gain initial access by exploiting unpatched vulnerabilities, including CVE-2024-1709 (ScreenConnect) and CVE-2023-48788 (Fortinet EMS). During the attack process, they disable security software, terminate backup-related processes, and use 'Living Off the Land' (LOTL) techniques and legitimate tools for reconnaissance, lateral movement, and data exfiltration. Furthermore, the report points to the potential emergence of 'Triple Extortion' scams. Organizations are advised to strengthen cybersecurity defenses, patch known vulnerabilities, and remain vigilant against attacks that utilize legitimate tools.",
    tags_en: ["Medusa", "RaaS", "Critical Infrastructure", "CVE-2024-1709", "CVE-2023-48788", "LOTL", "CISA"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/medusa-ransomware-made-300-critical-infrastructure-victims", lang: "EN" }
    ]
  }
];
