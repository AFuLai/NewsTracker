// data-20250225.js — 2025-02-25
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2025-02-25"] = [
  {
    id: "20250225-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 報告：OT/ICS 網路威脅升級，指出 BAUXITE、GRAPHITE 等新威脅群，並警示 FrostyGoop 等惡意軟體攻擊關鍵基礎設施",
    summary: "Dragos 於 2025 年發布《OT/ICS 網路安全年度回顧報告》，指出營運技術（OT）環境已成為主流攻擊目標。報告詳細揭露了兩個新的 OT 威脅群：BAUXITE 和 GRAPHITE。BAUXITE 曾針對美國、歐洲、澳洲和中東的能源、水務等關鍵基礎設施，與伊朗相關的駭客組織有技術重疊。GRAPHITE 則專注於東歐和中東的能源、油氣和政府部門，與 APT28 有技術重疊，並針對烏克蘭的軍事相關目標。此外，報告警示了多種新型惡意軟體，如 FrostyGoop，該惡意軟體可操縱 Modbus TCP/502 通訊，並曾導致烏克蘭某地熱供暖系統停電。VOLTZITE 仍是關鍵威脅，專門竊取 OT 相關資料，如網路圖和操作指令。報告建議，雖然攻擊手段複雜，但企業應透過強化網路區隔、提升 OT 可視性及建立事件回應能力來提升韌性。",
    tags: ["Dragos", "OT/ICS", "BAUXITE", "GRAPHITE", "FrostyGoop", "網路威脅", "關鍵基礎設施"],
    title_en: "Dragos Report: OT/ICS Network Threats Escalating, Identifying New Threat Groups like BAUXITE and GRAPHITE, and Warning of Malwares like FrostyGoop Attacking Critical Infrastructure",
    summary_en: "Dragos released the \"OT/ICS Cybersecurity Annual Review Report\" in 2025, noting that Operational Technology (OT) environments have become mainstream attack targets. The report detailed two new OT threat groups: BAUXITE and GRAPHITE. BAUXITE has targeted critical infrastructure in energy, water, and other sectors across the US, Europe, Australia, and the Middle East, showing technical overlap with hacker groups linked to Iran. GRAPHITE focuses on energy, oil and gas, and government sectors in Eastern Europe and the Middle East, showing technical overlap with APT28, and targeting military-related objectives in Ukraine. Furthermore, the report warned of various new types of malware, such as FrostyGoop, which can manipulate Modbus TCP/502 communications and has previously caused power outages in a district heating system in Ukraine. VOLTZITE remains a key threat, specializing in stealing OT-related data, such as network diagrams and operational commands. The report suggests that despite the complexity of attack methods, enterprises should enhance resilience by strengthening network segmentation, improving OT visibility, and establishing incident response capabilities.",
    tags_en: ["Dragos", "OT/ICS", "BAUXITE", "GRAPHITE", "FrostyGoop", "Network Threat", "Critical Infrastructure"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/resources/press-release/dragos-reports-ot-ics-cyber-threats-escalate-amid-geopolitical-conflicts-and-increasing-ransomware-attacks", lang: "EN" }
    ]
  },
  {
    id: "20250225-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos發布第8屆OT/ICS資安年鑑：揭示地緣政治驅動的關鍵基礎設施威脅",
    summary: "Dragos發布其第8屆OT/ICS資安年鑑，深入分析當前操作技術（OT）和工業控制系統（ICS）的網路威脅格局。報告指出，地緣政治衝突正在驅動各類駭客組織積極攻擊OT網路，收集情報並進行破壞性部署。報告追蹤了23個威脅群組，包括新出現的BAUXITE、GRAPHITE等，這些群組針對能源、水務、化工等關鍵產業。具體威脅活動包括VOLTZITE，該群組擅長偽裝於信任網路中，竊取GIS資料和ICS操作指令；以及ELECTRUM，該群組與KyivStar電信攻擊相關，並引入了新型的AcidPour清除程式，專門用於OT環境。此外，文章還提到了Fuxnet惡意軟體曾用於覆寫莫斯科感測器閘道器的韌體，以及FrostyGoop惡意軟體曾導致烏克蘭暖氣系統停電，這強調了ICS惡意軟體對關鍵基礎設施的即時操作風險。報告強調，即使在攻擊目標特定時，其戰術和技術也為全球工業防禦者提供了警示。",
    tags: ["OT/ICS", "工業控制系統", "地緣政治", "惡意軟體", "威脅情報", "Dragos", "韌體漏洞"],
    title_en: "Dragos Releases 8th OT/ICS Security Yearbook: Revealing Geopolitically Driven Critical Infrastructure Threats",
    summary_en: "Dragos has released its 8th OT/ICS Security Yearbook, providing an in-depth analysis of the current threat landscape for Operational Technology (OT) and Industrial Control Systems (ICS). The report indicates that geopolitical conflicts are driving various threat groups to actively attack OT networks, collect intelligence, and conduct destructive deployments. The report tracks 23 threat groups, including newly emerged ones like BAUXITE and GRAPHITE, which target critical industries such as energy, water, and chemical manufacturing. Specific threat activities include VOLTZITE, a group skilled at masquerading within trusted networks to steal GIS data and ICS operational commands; and ELECTRUM, a group linked to KyivStar telecommunications attacks, which introduced the novel AcidPour wiper, specifically designed for OT environments. Furthermore, the article mentions that the Fuxnet malware was previously used to overwrite firmware on Moscow sensor gateways, and that FrostyGoop malware caused power outages in Ukrainian heating systems, highlighting the immediate operational risk of ICS malware to critical infrastructure. The report emphasizes that even when targeting specific objectives, the tactics and techniques provide warnings for global industrial defenders.",
    tags_en: ["OT/ICS", "Industrial Control Systems", "Geopolitics", "Malware", "Threat Intelligence", "Dragos", "Firmware Vulnerability"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/blog/dragos-8th-annual-ot-cybersecurity-year-in-review-is-now-available", lang: "EN" }
    ]
  }
];
