// data-20250820.js — 2025-08-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2025-08-20"] = [
  {
    id: "20250820-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安分析：深入探討工業控制系統（ICS）的威脅群組活動與攻擊手法",
    summary: "本文彙整了多個威脅群組（Threat Groups）的分析報告，重點揭示了針對工業控制系統（ICS）環境的複雜攻擊鏈與戰術。攻擊者透過「釣魚」（Phishing）和「蜜罐式攻擊」（Watering-hole）進行偵察，目標包括竊取PLC配置、HMI數據和警報邏輯，以建立未來破壞的藍圖。攻擊手法涵蓋了利用LOTL（Living Off the Land）戰術建立持久存取權，修改PLC的梯形邏輯（ladder logic）並部署客製化後門，甚至開發用於破壞工業流程的惡意ICS惡意軟體。攻擊目標廣泛，從電網基礎設施到航太、國防供應鏈，並利用VPN漏洞、第三方連線以及SOHO路由器進行初始滲透。實務建議是必須提升對OT環境的監控能力，並預期威脅群組將持續利用零日漏洞或未修補的外部設備來進行偵察和數據外洩。",
    tags: ["ICS", "OT", "威脅群組", "PLC", "LOTL", "釣魚攻擊"],
    title_en: "Cybersecurity Analysis: Deep Dive into Threat Group Activities and Attack Techniques Targeting Industrial Control Systems (ICS)",
    summary_en: "This article compiles analysis reports from multiple Threat Groups, focusing on the complex attack chains and tactics targeting Industrial Control System (ICS) environments. Attackers conduct reconnaissance through 'Phishing' and 'Watering-hole' attacks, aiming to steal PLC configurations, HMI data, and alarm logic to build a blueprint for future disruption. Attack techniques include using Living Off the Land (LOTL) tactics to establish persistent access, modifying PLC ladder logic, and deploying custom backdoors, or even developing malicious ICS malware designed to disrupt industrial processes. Attack targets are broad, ranging from power grid infrastructure to aerospace and defense supply chains, often utilizing VPN vulnerabilities, third-party connections, and SOHO routers for initial penetration. Practical recommendations emphasize the necessity of enhancing monitoring capabilities within the OT environment, while anticipating that threat groups will continue to exploit zero-day vulnerabilities or unpatched external equipment for reconnaissance and data exfiltration.",
    tags_en: ["ICS", "OT", "Threat Group", "PLC", "LOTL", "Phishing Attack"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/threat-groups", lang: "EN" }
    ]
  }
];
