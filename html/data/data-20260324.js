// data-20260324.js — 2026-03-24
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-03-24"] = [
  {
    id: "20260324-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 2026 OT/ICS 威脅報告：資安防禦應聚焦於邊界與存取點",
    summary: "本報告分析了當前工業控制系統（OT/ICS）的威脅格局，指出攻擊者已不再局限於特定群體，而是包含國家級、金錢動機的勒索軟體和意識形態駭客。攻擊活動（如 AZURITE、PYROXENE、SYLVANITE 等）持續集中於影響物理流程的關鍵資產，包括工程工作站、遠端存取基礎設施和身份系統。報告強調，大多數 OT 事件並非直接發生在 OT 網路內部，而是透過連接企業與操作環境的邊界設施（如 VPN、邊緣設備、身份系統）取得初始存取權。因此，防禦者應將優先順序放在加固這些存取點，而非僅關注 OT 內部系統。此外，報告指出全球 OT 網路缺乏可觀測性，許多組織的事件調查甚至無法收集到足夠的威脅情報，可能導致在營運症狀出現後才發現入侵。",
    tags: ["OT/ICS", "工業控制系統", "威脅情報", "遠端存取", "邊界安全", "資安防禦"],
    title_en: "Dragos 2026 OT/ICS Threat Report: Cybersecurity Defenses Should Focus on Boundaries and Access Points",
    summary_en: "This report analyzes the current threat landscape for Operational Technology/Industrial Control Systems (OT/ICS), pointing out that attackers are no longer limited to specific groups, but include nation-state actors, financially motivated ransomware groups, and ideological hackers. Attack activities (such as AZURITE, PYROXENE, SYLVANITE, etc.) continue to focus on critical assets that impact physical processes, including engineering workstations, remote access infrastructure, and identity systems. The report emphasizes that most OT incidents do not occur directly within the OT network, but rather gain initial access through boundary facilities connecting the enterprise and operational environments (such as VPNs, edge devices, and identity systems). Therefore, defenders should prioritize hardening these access points, rather than solely focusing on internal OT systems. Furthermore, the report notes that global OT networks lack observability, and many organizations may be unable to collect sufficient threat intelligence for incident investigation, potentially leading to the discovery of an intrusion only after operational symptoms appear.",
    tags_en: ["OT/ICS", "Industrial Control Systems", "Threat Intelligence", "Remote Access", "Boundary Security", "Cybersecurity Defense"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/blog/ot-threat-landscape-2026", lang: "EN" }
    ]
  }
];
