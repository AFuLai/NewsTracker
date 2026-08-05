// data-20260409.js — 2026-04-09
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-09"] = [
  {
    id: "20260409-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Elastic於英國國防網路演習DCM26：展示多租戶Elastic Cloud與數據隔離技術",
    summary: "Elastic公司參與了英國國防部（UK Ministry of Defence）的「Defence Cyber Marvel (DCM) 26」網路演習。本次演習規模龐大，匯集了來自29個國家、70個組織的超過2,500名人員，模擬在印太地區升級的區域危機情境。DCM是一個高壓的「武力對抗」網路演習，Blue Teams需在模擬的網路環境中保護資產，抵抗Red Teams的攻擊。Elastic在本次演習中，採用了單一、基於空間的多租戶Elastic Cloud部署，為所有40個防禦團隊提供隔離的作業空間（Kibana Spaces）和數據流（Data Streams）。每個團隊的數據都透過專屬的命名空間（如`bt_01_hostnation`）進行隔離，並使用動態索引權限（dynamic index privilege blocks）來確保數據的嚴格隔離，展現了其在大型、多租戶環境下的安全和可擴展性。",
    tags: ["Elastic", "Defence Cyber Marvel", "DCM26", "多租戶", "數據隔離", "網路演習"],
    title_en: "Elastic showcases multi-tenant Elastic Cloud and data isolation technology at UK Defence Cyber Marvel (DCM) 26",
    summary_en: "Elastic participated in the UK Ministry of Defence's \"Defence Cyber Marvel (DCM) 26\" cyber exercise. This large-scale exercise gathered over 2,500 personnel from 70 organizations across 29 countries, simulating an escalating regional crisis in the Indo-Pacific region. DCM is a high-pressure \"force-on-force\" cyber exercise where Blue Teams must protect assets and resist Red Team attacks within a simulated network environment. During this exercise, Elastic utilized a single, spatially-based multi-tenant Elastic Cloud deployment, providing isolated operational spaces (Kibana Spaces) and data streams for all 40 defense teams. Each team's data was isolated through dedicated namespaces (such as `bt_01_hostnation`) and ensured strict data separation using dynamic index privilege blocks, demonstrating its security and scalability in large, multi-tenant environments.",
    tags_en: ["Elastic", "Defence Cyber Marvel", "DCM26", "Multi-tenant", "Data Isolation", "Cyber Exercise"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/elastic-defence-cyber-marvel", lang: "EN" }
    ]
  }
];
