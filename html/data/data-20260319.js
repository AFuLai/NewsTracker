// data-20260319.js — 2026-03-19
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-03-19"] = [
  {
    id: "20260319-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Amazon揭露：Cisco防火牆FMC存在零日漏洞，被Interlock勒索軟體群組利用攻擊",
    summary: "Amazon威脅情報團隊揭露，Cisco Secure Firewall Management Center (FMC) 軟體存在一個名為 CVE-2026-20131 的漏洞，該漏洞已被駭客群組 Interlock 惡意利用作為零日攻擊。此漏洞影響FMC的網頁管理介面，允許遠端、未經身份驗證的攻擊者執行任意 Java 代碼並取得 root 權限。Cisco 已於本月修補了此漏洞，但Amazon研究人員的調查發現，Interlock 群組至少自一月下旬即利用此漏洞進行攻擊。Interlock 過去的目標包括教育、工程、建築、製造、醫療、政府及公共部門等，傾向於造成營運中斷以迫使支付贖金。為協助防禦，Amazon已分享了相關的入侵指標 (IoCs)。建議用戶應立即修補 FMC 軟體，並特別注意限制 FMC 管理介面對外網的暴露。",
    tags: ["Cisco", "CVE-2026-20131", "FMC", "Interlock", "勒索軟體", "零日"],
    title_en: "Amazon Reveals: Cisco Firewall FMC Contains Zero-Day Vulnerability Exploited by Interlock Ransomware Group",
    summary_en: "Amazon Threat Intelligence Team revealed a vulnerability, CVE-2026-20131, in the Cisco Secure Firewall Management Center (FMC) software. This vulnerability has been maliciously exploited by the hacker group Interlock as a zero-day attack. The flaw affects FMC's web management interface, allowing unauthenticated remote attackers to execute arbitrary Java code and gain root privileges. Cisco has patched this vulnerability this month, but Amazon researchers found that the Interlock group has been exploiting it since at least late January. Interlock's past targets include education, engineering, construction, manufacturing, healthcare, government, and public sectors, with a tendency to cause operational disruption to force ransom payments. To assist in defense, Amazon has shared relevant Indicators of Compromise (IoCs). Users are advised to immediately patch the FMC software and pay special attention to restricting the exposure of the FMC management interface to the external network.",
    tags_en: ["Cisco", "CVE-2026-20131", "FMC", "Interlock", "Ransomware", "Zero-Day"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/cisco-firewall-vulnerability-exploited-as-zero-day-in-interlock-ransomware-attacks", lang: "EN" }
    ]
  }
];
