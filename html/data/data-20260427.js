// data-20260427.js — 2026-04-27
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-27"] = [
  {
    id: "20260427-001",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Red Hat宣布VEX文件重大升級：優化安全數據生態，提升漏洞資訊的精準度與可用性",
    summary: "紅帽（Red Hat）產品安全部門宣布，將對其安全數據生態系統進行重大升級，全面重構其通用安全諮詢框架（CSAF）和漏洞利用交換（VEX）文件。本次更新旨在提高安全數據的可用性與整合性，使資訊傳遞更清晰、更簡化。新版VEX文件引入多項關鍵改進，包括：提升產品粒度，不再僅以主要版本標記，而是明確列出受影響的支援流（如 RHEL 9.6）；簡化產品樹結構，移除不一致的巢狀層級；增強驗證機制，改善使用 CPEs 和 PURLs 等識別輔助工具；並標準化產品名稱和 ID，使追蹤「已修復」和「未修復」狀態更一致。紅帽目前已提供 Beta 版本供合作夥伴採用，並計劃在 Red Hat Summit 2026 進行正式發布，屆時舊版VEX文件將被棄用。此舉有助於整個安全生態系統提高性能和長期支持能力。",
    tags: ["Red Hat", "VEX", "CSAF", "SBOM", "供應鏈安全", "RHEL"],
    title_en: "Red Hat Announces Major VEX File Upgrade: Optimizing the Security Data Ecosystem and Enhancing Vulnerability Information Accuracy and Usability",
    summary_en: "Red Hat's Product Security department announced a major upgrade to its security data ecosystem, completely restructuring its Common Security Advisory Framework (CSAF) and Vulnerability Exploitability eXchange (VEX) files. This update aims to improve the availability and integration of security data, making information transfer clearer and simpler. The new VEX files introduce several key improvements, including: increasing product granularity, no longer marking only by major versions, but explicitly listing affected support streams (such as RHEL 9.6); simplifying the product tree structure by removing inconsistent nested levels; enhancing validation mechanisms, improving the use of identification aids like CPEs and PURLs; and standardizing product names and IDs, ensuring more consistent tracking of 'remediated' and 'unremediated' statuses. Red Hat has currently provided a Beta version for partners to adopt and plans to officially release it at Red Hat Summit 2026, at which point the old VEX files will be deprecated. This initiative helps the entire security ecosystem improve performance and long-term support capabilities.",
    tags_en: ["Red Hat", "VEX", "CSAF", "SBOM", "Supply Chain Security", "RHEL"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/redefining-security-data-red-hats-new-vex-experience-heading-red-hat-summit-2026", lang: "EN" }
    ]
  },
  {
    id: "20260427-002",
    trackers: ["security"],
    category: "產業動態",
    title: "Cisco防火牆持續遭受攻擊：分析CVE-2025-20363等多重漏洞，建議立即修補並進行深度鑑識",
    summary: "Cisco的ASA和FTD防火牆產品面臨持續且複雜的攻擊，涉及多個漏洞，包括CVE-2025-20362（無認證存取URL端點）和CVE-2025-20333（認證後任意程式碼執行）。攻擊者不僅利用這些漏洞，還設置了難以偵測的持久化後門（如FIRESTARTER），並可能在修補版本發布前就已完成入侵。實務影響極大，即使已修補，設備內仍可能存在隱藏的惡意程式或後門。建議用戶立即將設備升級至修補版本，並參考Cisco、NCSC（英國國家網路安全中心）和CISA提供的YARA規則、Python腳本及專門的「偵測指南」，對設備進行全面的鑑識調查，特別關注本地密碼、憑證和金鑰是否需要重設。",
    tags: ["Cisco", "ASA", "FTD", "CVE-2025-20363", "防火牆", "網路安全", "鑑識"],
    title_en: "Cisco Firewalls Under Continuous Attack: Analyzing Multiple Vulnerabilities Including CVE-2025-20363, Immediate Patching and Deep Forensics Recommended",
    summary_en: "Cisco's ASA and FTD firewall products are facing continuous and complex attacks involving multiple vulnerabilities, including CVE-2025-20362 (unauthenticated access to URL endpoint) and CVE-2025-20333 (authenticated arbitrary code execution). Attackers are not only exploiting these vulnerabilities but have also installed difficult-to-detect persistent backdoors (such as FIRESTARTER), and may have already completed intrusions even before the patch versions were released. The practical impact is significant; even after patching, hidden malicious code or backdoors may persist on the device. Users are advised to immediately upgrade their devices to the patched version and conduct comprehensive forensic investigations, referencing YARA rules, Python scripts, and specialized 'Detection Guides' provided by Cisco, NCSC (UK National Cyber Security Centre), and CISA. Special attention should be paid to whether local passwords, certificates, and keys need to be reset.",
    tags_en: ["Cisco", "ASA", "FTD", "CVE-2025-20363", "Firewall", "Cybersecurity", "Forensics"],
    sources: [
      { name: "JPCERT/CC", url: "https://jpcert.or.jp/at/2025/at250021.html", lang: "EN" }
    ]
  }
];
