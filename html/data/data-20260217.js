// data-20260217.js — 2026-02-17
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-17"] = [
  {
    id: "20260217-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 2026年報告揭示OT/ICS威脅升級：新威脅群體針對關鍵基礎設施進行操作性破壞",
    summary: "Dragos發布2026年OT/ICS網路資安報告，指出威脅情勢已達成熟階段，攻擊者已從偵察階段發展到具備操作性破壞能力。報告識別出包括AZURITE、PYROXENE和SYLVANITE在內的三個新威脅群體。這些群體針對關鍵基礎設施進行攻擊，例如PYROXENE在區域衝突期間部署了破壞性清除惡意軟體，而ELECTRUM則針對波蘭的能源系統進行了影響操作資產的攻擊。攻擊者正在系統性地建立存取路徑，並將攻擊從單一設備擴展到整個工業控制系統。此外，勒索軟體攻擊針對工業組織的年增長率達49%，全球影響了3,300個組織。報告強調，OT環境的能見度（Visibility）至關重要，缺乏監控將導致未來採用AI、電池儲能等技術時產生更大的盲點。修補建議是建立全面的OT環境可見度，以提升偵測和應變能力。",
    tags: ["Dragos", "OT/ICS", "關鍵基礎設施", "勒索軟體", "AZURITE", "PYROXENE"],
    title_en: "Dragos 2026 Report Reveals Escalating OT/ICS Threats: New Threat Groups Targeting Critical Infrastructure for Operational Disruption",
    summary_en: "Dragos released its 2026 OT/ICS cybersecurity report, indicating that the threat landscape has reached a mature stage, with attackers progressing from reconnaissance to possessing operational disruption capabilities. The report identifies three new threat groups, including AZURITE, PYROXENE, and SYLVANITE. These groups are targeting critical infrastructure; for example, PYROXENE deployed destructive wiper malware during regional conflicts, while ELECTRUM targeted Poland's energy system, impacting operational assets. Attackers are systematically establishing access paths, expanding attacks from single devices to entire industrial control systems. Furthermore, the annual growth rate of ransomware attacks against industrial organizations reached 49%, affecting 3,300 organizations globally. The report emphasizes that visibility in OT environments is crucial, as a lack of monitoring will create greater blind spots when adopting future technologies such as AI and battery storage. The remediation recommendation is to establish comprehensive OT environment visibility to enhance detection and response capabilities.",
    tags_en: ["Dragos", "OT/ICS", "Critical Infrastructure", "Ransomware", "AZURITE", "PYROXENE"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/resources/press-release/dragos-2026-year-in-review-new-ot-threats-ransomware", lang: "EN" }
    ]
  },
  {
    id: "20260217-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 2026 OT資安報告：工業控制系統面臨的威脅與可見性危機",
    summary: "本報告回顧了工業控制系統（ICS）和營運技術（OT）領域的資安趨勢，指出威脅情勢日益複雜。攻擊者已從初步佈局，進展到主動繪製控制迴路，並了解如何操縱實體過程。雖然威脅群體規模擴大，但全球大多數OT網路仍缺乏足夠的可見性來及時偵測威脅。數據顯示，僅有30%的OT網路具備可見性，且高達56%的組織無法監控IT/OT邊界以下的活動。這導致許多組織在偵測和回應方面面臨巨大挑戰。攻擊者正透過ICS網路攻擊鏈進行偵察、開發和測試，目標是了解控制迴路，為未來操縱工業流程做準備。修補建議是提升OT網路的可見性，並強化邊界監控，以應對日益精密的攻擊。",
    tags: ["OT資安", "ICS", "營運技術", "威脅情報", "網路可見性", "勒索軟體"],
    title_en: "Dragos 2026 OT Security Report: Threats and Visibility Crisis Facing Industrial Control Systems",
    summary_en: "This report reviews the cybersecurity trends in the Industrial Control Systems (ICS) and Operational Technology (OT) domains, pointing out the increasingly complex threat landscape. Attackers have progressed from initial reconnaissance to actively mapping control loops and understanding how to manipulate physical processes. Although the threat groups are expanding, most OT networks globally still lack sufficient visibility to detect threats in a timely manner. Data shows that only 30% of OT networks possess visibility, and a high of 56% of organizations cannot monitor activities below the IT/OT boundary. This presents significant challenges for many organizations in detection and response. Attackers are conducting reconnaissance, development, and testing through ICS network attack chains, aiming to understand control loops in preparation for future industrial process manipulation. The remediation advice is to improve OT network visibility and strengthen boundary monitoring to cope with increasingly sophisticated attacks.",
    tags_en: ["OT Security", "ICS", "Operational Technology", "Threat Intelligence", "Network Visibility", "Ransomware"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/ot-cybersecurity-year-in-review", lang: "EN" }
    ]
  },
  {
    id: "20260217-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos 2026 OT資安年鑑：揭示敵對勢力深入工業控制系統，攻擊目標轉向物理流程",
    summary: "Dragos發布2026年OT資安年鑑，指出威脅情勢發生根本性轉變：敵對勢力已超越預先部署，開始主動繪製控制迴路，並了解如何操縱物理流程。報告分析了KAMACITE和ELECTRUM等群組的活動擴展，這些群組曾負責2015和2016年的烏克蘭電力停電事件。攻擊者如AZURITE專攻工程工作站，利用公開PoC程式碼的時差進行攻擊，竊取警報數據和配置檔。PYROXENE則進行多年度供應鏈活動，利用假LinkedIn帳號進行社會工程。此外，SYLVANITE擅長武器化邊緣設備漏洞，並將存取權交給後續的攻擊者。報告強調，許多勒索軟體事件被誤分類為「IT事件」，導致營運控制系統（OT）的虛擬化基礎設施也面臨加密風險。此外，許多OT資安廠商提供的漏洞警報缺乏補丁或緩解措施，且許多資安事件的偵測能力和IT/OT區隔性仍有嚴重不足。",
    tags: ["OT資安", "工業控制系統", "KAMACITE", "ELECTRUM", "AZURITE", "供應鏈攻擊"],
    title_en: "Dragos 2026 OT Security Yearbook: Reveals Adversaries Deepening Penetration into Industrial Control Systems, Shifting Attack Targets to Physical Processes",
    summary_en: "Dragos released the 2026 OT Security Yearbook, pointing to a fundamental shift in the threat landscape: adversaries have moved beyond pre-deployed access and are now actively mapping control loops and understanding how to manipulate physical processes. The report analyzes the expanding activities of groups such as KAMACITE and ELECTRUM, groups previously responsible for the 2015 and 2016 Ukraine power outages. Attackers like AZURITE focus on engineering workstations, exploiting time differences in publicly available PoC code to steal alarm data and configuration files. PYROXENE conducts multi-year supply chain activities, utilizing fake LinkedIn accounts for social engineering. Furthermore, SYLVANITE specializes in weaponizing edge device vulnerabilities and handing over access to subsequent attackers. The report emphasizes that many ransomware incidents are misclassified as 'IT events,' leaving the operational technology (OT) virtualization infrastructure vulnerable to encryption risks. Additionally, many vulnerabilities reported by OT security vendors lack patches or mitigation measures, and the detection capabilities and IT/OT segmentation remain severely deficient for many security incidents.",
    tags_en: ["OT Security", "Industrial Control Systems", "KAMACITE", "ELECTRUM", "AZURITE", "Supply Chain Attack"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/blog/dragos-2026-ot-cybersecurity-year-in-review", lang: "EN" }
    ]
  }
];
