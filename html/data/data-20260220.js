// data-20260220.js — 2026-02-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-20"] = [
  {
    id: "20260220-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告BeyondTrust漏洞CVE-2026-1731遭勒索軟體利用，影響遠端支援與特權存取功能",
    summary: "美國網路安全局（CISA）已將BeyondTrust產品的CVE-2026-1731漏洞納入已知已被利用漏洞（KEV）目錄，警告該漏洞正被用於勒索軟體攻擊。此漏洞影響BeyondTrust的遠端支援（Remote Support, RS）和特權遠端存取（Privileged Remote Access, PRA）功能，允許攻擊者進行未經身份驗證的遠端程式碼執行（RCE）。該漏洞的野外利用在概念驗證（PoC）公開後的24小時內即開始，CISA已將其列入KEV目錄，並指示聯邦機構在特定日期前修復。雖然目前沒有公開報告將CVE-2026-1731的利用與特定勒索軟體群組掛鉤，但安全社群已觀察到勒索軟體團伙正在鎖定此漏洞。安全公司觀察到攻擊者利用此漏洞進行偵察、資料竊取、橫向移動，並部署了Web Shell、遠端管理工具和後門，目標產業涵蓋金融、高科技、醫療、教育、法律和零售等領域。",
    tags: ["BeyondTrust", "CVE-2026-1731", "CISA", "勒索軟體", "RCE", "遠端存取"],
    title_en: "CISA Warns BeyondTrust Vulnerability CVE-2026-1731 is Being Exploited by Ransomware, Affecting Remote Support and Privileged Access Functions",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added the CVE-2026-1731 vulnerability in BeyondTrust products to its Known Exploited Vulnerability (KEV) catalog, warning that the vulnerability is being used in ransomware attacks. This vulnerability affects BeyondTrust's Remote Support (RS) and Privileged Remote Access (PRA) functions, allowing attackers to perform unauthenticated Remote Code Execution (RCE). Exploitation of this vulnerability was observed in the wild within 24 hours of the Proof-of-Concept (PoC) being published. CISA has listed it in the KEV catalog and instructed federal agencies to remediate by a specific date. Although there are no public reports currently linking the exploitation of CVE-2026-1731 to specific ransomware groups, the security community has observed ransomware groups targeting this vulnerability. Security firms have noted attackers using this vulnerability for reconnaissance, data exfiltration, lateral movement, and deploying Web Shells, remote management tools, and backdoors. Target industries include finance, high-tech, healthcare, education, legal, and retail.",
    tags_en: ["BeyondTrust", "CVE-2026-1731", "CISA", "Ransomware", "RCE", "Remote Access"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/beyondtrust-vulnerability-exploited-in-ransomware-attacks", lang: "EN" }
    ]
  }
];
