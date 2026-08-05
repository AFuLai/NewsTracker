// data-20260720.js — 2026-07-20
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-20"] = [
  {
    id: "20260720-001",
    trackers: ["security"],
    category: "重大事件",
    title: "哥倫比亞國家石油公司 Ecopetrol 遭勒索攻擊：雲端資料外洩及勒索威脅事件分析",
    summary: "哥倫比亞國家石油公司 Ecopetrol S.A. 於 7 月 17 日發布聲明，揭露遭遇未經授權的網路存取事件。初步調查顯示，集團內約 15 家子公司（含公司本身）的雲端檔案儲存環境遭到入侵，導致 3,300 個用戶帳戶相關資料被非法下載。攻擊者利用竊取的機密資料對 Ecopetrol 進行勒索，威脅若不支付贖金將公開外洩資訊。資安社群指出，勒索軟體組織 Gentlemen 已宣稱 Ecopetrol 為其受害者。Ecopetrol 方面表示，其防禦機制已成功攔截惡意加密行為，並已撤銷所有非法存取權限。公司已向哥倫比亞總檢察長辦公室提起刑事訴訟，並強調核心營運與產能未受波及，但持續評估業務機密與專有技術的資訊外洩風險。建議企業應強化雲端環境的監控能力，並建立完善的資安事件應變機制，以應對勒索攻擊。",
    tags: ["Ecopetrol", "勒索軟體", "雲端安全", "資料外洩", "OT/ICS", "資安事件"],
    title_en: "Ecopetrol, Colombian National Oil Company, Suffers Ransomware Attack: Analysis of Cloud Data Leakage and Extortion Threat",
    summary_en: "Ecopetrol S.A., the Colombian national oil company, issued a statement on July 17th revealing that it had suffered an unauthorized network access incident. Preliminary investigations show that the cloud file storage environment of approximately 15 subsidiaries (including the company itself) was compromised, leading to the illegal download of data related to 3,300 user accounts. The attackers are using the stolen confidential data to extort Ecopetrol, threatening to publicly leak the information if a ransom is not paid. Cybersecurity communities point out that the ransomware group Gentlemen has claimed Ecopetrol as its victim. Ecopetrol stated that its defense mechanisms successfully intercepted the malicious encryption activity and that all unauthorized access rights have been revoked. The company has filed a criminal lawsuit with the Colombian Attorney General's Office and emphasized that core operations and production capacity were unaffected, but it continues to assess the risk of information leakage concerning business secrets and proprietary technologies. It is recommended that enterprises strengthen cloud environment monitoring capabilities and establish comprehensive cybersecurity incident response mechanisms to cope with ransomware attacks.",
    tags_en: ["Ecopetrol", "Ransomware", "Cloud Security", "Data Leakage", "OT/ICS", "Cybersecurity Incident"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177433", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-002",
    trackers: ["security"],
    category: "重大事件",
    title: "23andMe資料外洩事件：紐約州檢察長達成1,800萬美元和解，揭露帳密填充與安全漏洞",
    summary: "個人基因檢測服務業者23andMe，因2023年10月發生的大規模資料外洩事件，與紐約州等43名檢察長達成1,800萬美元和解。此次事件是攻擊者利用客戶在其他遭入侵網站使用的相同帳號密碼，透過帳密填充（Credential Stuffing）攻擊，登入約1.4萬個帳戶，並透過DNA Relatives及Family Tree功能存取客戶個人資料。據調查發現，23andMe在安全防護上存在多項重大疏失，包括未將客戶密碼與已知外洩密碼進行比對、未強制啟用多因素驗證（MFA）、缺乏適當的登入限制、以及未部署入侵防護或資料外洩監控工具。此外，公司也未對異常的登入嘗試模式進行調查或處理。和解要求23andMe Research Institute成立資料安全諮詢委員會，並持續保障消費者刪除個人資料的權利。",
    tags: ["23andMe", "資料外洩", "帳密填充", "個人資料", "紐約州檢察長", "數據安全"],
    title_en: "23andMe Data Breach: New York Attorney General Reaches $18 Million Settlement, Exposing Credential Stuffing and Security Flaws",
    summary_en: "Personal genetic testing service provider 23andMe reached an $18 million settlement with 43 attorneys general, including New York, following a massive data breach in October 2023. The incident occurred when attackers used the same credentials that customers used on other compromised websites, executing a Credential Stuffing attack to log into approximately 14,000 accounts. Attackers then accessed customers' personal data through the DNA Relatives and Family Tree features. The investigation revealed multiple significant security lapses by 23andMe, including failing to compare customer passwords against known leaked passwords, not mandating Multi-Factor Authentication (MFA), lacking proper login restrictions, and failing to deploy intrusion prevention or data leak monitoring tools. Furthermore, the company did not investigate or address unusual login attempt patterns. The settlement requires 23andMe Research Institute to establish a data security advisory committee and continuously guarantee consumers' right to delete personal data.",
    tags_en: ["23andMe", "Data Breach", "Credential Stuffing", "Personal Data", "New York Attorney General", "Data Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177441", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-003",
    trackers: ["security"],
    category: "重大事件",
    title: "安永（EY）工單系統遭未授權存取，客戶稅務資訊外洩，公司已向美國主管機關通報",
    summary: "全球四大會計師事務所安永（Ernst & Young）近日曝出資安事件。根據報導，其IT部門使用的第三方支援工單系統遭到未經授權的存取。攻擊者在3月28日至4月12日期間，透過該平臺下載了包含客戶稅務申報的個人與財務資訊文件。安永已於7月中旬向美國加州及佛蒙特州主管機關通報此事件。雖然安永強調資料並未被濫用或鎖定，但該公司並未公開受影響客戶的具體人數或範圍，僅確認臺灣客戶未受影響。本案提醒企業應強化第三方支援系統的存取控制與監控機制，特別是處理敏感客戶資料的平台，應實施最小權限原則，並定期審核存取日誌，以降低資料外洩風險。",
    tags: ["安永", "Ernst & Young", "工單系統", "資料外洩", "稅務資訊", "第三方系統"],
    title_en: "Ernst & Young's Ticketing System Suffers Unauthorized Access, Client Tax Information Leaked; Company Notifies US Authorities",
    summary_en: "Global accounting firm Ernst & Young (EY) recently disclosed a cybersecurity incident. According to reports, a third-party support ticketing system used by its IT department was subjected to unauthorized access. Between March 28 and April 12, attackers used the platform to download personal and financial documents containing client tax filing information. EY notified the authorities in California and Vermont, US, in mid-July. Although EY emphasized that the data was not misused or locked, the company did not disclose the specific number or scope of affected clients, only confirming that clients in Taiwan were unaffected. This incident serves as a reminder for enterprises to strengthen access control and monitoring mechanisms for third-party support systems, especially platforms handling sensitive client data. Implementing the principle of least privilege and regularly auditing access logs are crucial to mitigating data leakage risks.",
    tags_en: ["Ernst & Young", "Ticketing System", "Data Leakage", "Tax Information", "Third-Party System"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177427", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-004",
    trackers: ["security"],
    category: "重大事件",
    title: "PCB與磁性元件廠商松上電子遭網路攻擊，公司發布重大訊息說明系統受影響與復原進度",
    summary: "印刷電路板（PCB）與磁性元件廠商松上電子於7月17日晚間，透過股市公開資訊觀測站發布重大訊息，揭露公司部分資訊系統曾遭受網路攻擊。公司資訊部門在發現異常後，立即啟動了防禦與復原機制進行應對。針對此次事件，松上電子後續說明，目前受影響的系統已恢復正常運作。根據其初步評估，此次網路攻擊對公司的整體營運並無重大影響。公司透過公開資訊向市場和相關利害關係人說明了資安事件的發生、應對措施以及現狀，展現了企業在遭遇網路事件時的透明化溝通與風險控管能力。",
    tags: ["松上電子", "網路攻擊", "資訊系統", "PCB", "資安事件"],
    title_en: "Songlist Electronics, a PCB and Magnetic Component Manufacturer, Suffers Cyberattack and Issues Major Announcement on System Impact and Recovery Progress",
    summary_en: "Songlist Electronics, a manufacturer of printed circuit boards (PCB) and magnetic components, issued a major announcement via the stock exchange's public information observation station on the evening of July 17, revealing that some of its information systems had been subjected to a cyberattack. Upon detecting the anomaly, the company's IT department immediately activated defense and recovery mechanisms to respond. Regarding this incident, Songlist Electronics later stated that the affected systems have now returned to normal operation. According to its preliminary assessment, the cyberattack did not significantly impact the company's overall operations. The company used public information to explain the occurrence of the cybersecurity incident, the response measures, and the current status to the market and relevant stakeholders, demonstrating the enterprise's ability for transparent communication and risk control when encountering a cyber event.",
    tags_en: ["Songlist Electronics", "Cyberattack", "Information System", "PCB", "Cybersecurity Incident"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177446", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-005",
    trackers: ["security"],
    category: "重大事件",
    title: "亞培遭兩駭客組織入侵：勒索集團竊取3千萬客戶PII與醫病紀錄",
    summary: "醫療科技巨頭亞培（Abbott Laboratories）於7月16日發布公告，確認內部系統曾遭未經授權存取。雖然公司聲稱此事件不影響任何業務營運或病患服務，但資安新聞指出，亞培遭到兩組駭客組織的攻擊。第一組是勒索集團ShinyHunters，他們聲稱於六月中旬入侵亞培的Microsoft Entra SSO帳號，從Microsoft Entra、ServiceNow、SharePoint、Databricks及Coupa等系統竊取了包括超過3千萬筆客戶可識別個人資訊（PII）、2,200萬份醫病對話記錄和2,000萬份訂單等敏感資料。第二組駭客團體ShadowByt3，則透過客戶入口網站LabCentral，竊取了CE製造證書、操作手冊及技術規格等核心實驗室診斷業務文件。這類事件凸顯醫療產業數據安全的重要性，建議企業應強化身份驗證機制，特別是針對SSO帳號的監控與多層防禦。",
    tags: ["亞培", "Abbott Laboratories", "勒索軟體", "資料外洩", "PII", "醫療產業"],
    title_en: "Abbott Laboratories Breached by Two Hacker Groups: Ransomware Group Steals 30 Million Customer PII and Medical Records",
    summary_en: "Medical technology giant Abbott Laboratories issued a statement on July 16 confirming unauthorized access to its internal systems. Although the company stated that the incident did not affect any business operations or patient services, cybersecurity news indicates that Abbott was targeted by two distinct hacker groups. The first group, the ransomware collective ShinyHunters, claimed to have infiltrated Abbott's Microsoft Entra SSO accounts in mid-June. They reportedly stole sensitive data from systems including Microsoft Entra, ServiceNow, SharePoint, Databricks, and Coupa, encompassing over 30 million records of customer Personally Identifiable Information (PII), 22 million patient dialogue records, and 20 million order records. The second group, ShadowByt3, accessed core laboratory diagnostic business documents—such as CE manufacturing certificates, operation manuals, and technical specifications—via the client portal, LabCentral. These incidents underscore the critical importance of data security within the healthcare industry, recommending that companies strengthen identity verification mechanisms, especially monitoring and multi-layered defense for SSO accounts.",
    tags_en: ["Abbott Laboratories", "Ransomware", "Data Leakage", "PII", "Healthcare Industry"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177435", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-006",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客攻擊 Ostium 交易平台，透過操縱離鏈價格資訊竊取 2370 萬美元加密貨幣",
    summary: "去中心化交易平台 Ostium 近期遭受攻擊，駭客透過入侵用於提供協議價格的離鏈基礎設施，提交了偽造的價格報告。攻擊者利用這些被操縱的價格，在協議中快速建立和平倉大量頭寸，從流動性提供者（LP）金庫竊取了約 2370 萬美元的加密貨幣。雖然交易員的保證金和現有頭寸未受影響，但平台已緊急暫停所有交易，以確保安全。目前 Ostium 正在加強受影響的基礎設施安全，並承諾提供詳細的事件後分析報告，以確定恢復交易的具體時間和技術細節。",
    tags: ["Ostium", "去中心化金融", "離鏈價格操縱", "流動性提供者", "加密貨幣攻擊", "DeFi"],
    title_en: "Hackers Attack Ostium Exchange Platform, Steal $23.7 Million in Cryptocurrency by Manipulating Off-Chain Price Data",
    summary_en: "The decentralized exchange platform Ostium recently suffered an attack when hackers infiltrated the off-chain infrastructure used to provide protocol prices, submitting falsified price reports. The attackers utilized these manipulated prices to rapidly establish and close large positions within the protocol, stealing approximately $23.7 million worth of cryptocurrency from the Liquidity Provider (LP) treasury. Although traders' collateral and existing positions were unaffected, the platform has temporarily suspended all trading to ensure safety. Ostium is currently strengthening the security of the affected infrastructure and has pledged to provide a detailed post-incident analysis report to determine the specific timeline and technical details for resuming trading.",
    tags_en: ["Ostium", "Decentralized Finance", "Off-Chain Price Manipulation", "Liquidity Provider", "Cryptocurrency Attack", "DeFi"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-steal-237-million-in-crypto-from-ostium-in-off-chain-attack", lang: "EN" }
    ]
  },
  {
    id: "20260720-007",
    trackers: ["os"],
    category: "Linux",
    title: "Fedora Project 正在重新檢視其核心變更流程，評估其技術與發行版維護的有效性",
    summary: "本文討論了 Fedora Project 在其發行版維護流程上的現況。Fedora 一向以其嚴謹的流程管理聞名，涵蓋了從 RPM 套件建立、法律合規到處理自包含技術變更和系統級重大變更等各個環節。然而，文章指出目前該專案似乎正經歷一次「中年危機」，正在同時重新審視多個既有的變更流程。這代表開發者和維護者需要關注其核心流程的調整，以確保發行版在持續演進時的穩定性和效率。雖然文章未提及具體漏洞或安全風險，但流程的調整對生態系統的穩定性具有實務影響，建議相關開發者密切關注 Fedora 官方的流程公告與變更指南。",
    tags: ["Fedora Project", "RPM", "Linux 發行版", "變更流程", "開源專案"],
    title_en: "Fedora Project is Reviewing its Core Change Process, Assessing the Effectiveness of its Technical and Release Maintenance",
    summary_en: "This article discusses the current state of the Fedora Project's release maintenance process. Fedora has always been known for its rigorous process management, covering various aspects from RPM package creation and legal compliance to handling self-contained technical changes and system-level major changes. However, the article points out that the project currently seems to be undergoing a 'mid-life crisis,' simultaneously reviewing multiple existing change processes. This means that developers and maintainers need to pay attention to adjustments in its core processes to ensure the stability and efficiency of the release as it continues to evolve. Although the article does not mention specific vulnerabilities or security risks, the process adjustments have practical implications for the ecosystem's stability, and relevant developers are advised to closely monitor official Fedora announcements and change guides.",
    tags_en: ["Fedora Project", "RPM", "Linux Distribution", "Change Process", "Open Source Project"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081557", lang: "EN" }
    ]
  },
  {
    id: "20260720-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "GNOME 安全問題追蹤流程調整：縮短報告時限並尋找接任者",
    summary: "GNOME 安全問題追蹤負責人 Michael Catanzaro 發布部落格文章，說明因 AI 生成安全報告增加，其管理漏洞報告的流程將進行調整。自 2026 年 8 月 1 日起，GNOME 漏洞報告的揭露時限將從原來的 90 天縮短至 30 天。此外，Catanzaro 也宣布將於 2026 年 12 月 1 日完全退出此職務，預計會留下一個職務空缺。他呼籲有經驗的 GNOME 社群成員主動接手此安全追蹤工作。同時，文章指出目前的追蹤基礎設施（使用 Wiki 頁面）過於原始且需要大量手動維護，建議應改用能根據漏洞實際狀態動態更新的專業 Web 應用程式。",
    tags: ["GNOME", "Linux", "安全追蹤", "漏洞報告", "Michael Catanzaro", "CVE"],
    title_en: "Adjustments to GNOME Security Issue Tracking Process: Shortening Reporting Deadlines and Seeking Successor",
    summary_en: "GNOME Security Issue Tracking lead Michael Catanzaro published a blog post detailing process adjustments for managing vulnerability reports due to the increase in AI-generated security reports. Effective August 1, 2026, the disclosure deadline for GNOME vulnerabilities will be shortened from the original 90 days to 30 days. Furthermore, Catanzaro announced that he will fully step down from this role on December 1, 2026, which is expected to leave a vacant position. He is calling on experienced GNOME community members to take over this security tracking work. The article also points out that the current tracking infrastructure (using Wiki pages) is too rudimentary and requires extensive manual maintenance, suggesting a shift to a professional web application that can dynamically update based on the actual status of the vulnerability.",
    tags_en: ["GNOME", "Linux", "Security Tracking", "Vulnerability Report", "Michael Catanzaro", "CVE"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083754", lang: "EN" }
    ]
  },
  {
    id: "20260720-009",
    trackers: ["os"],
    category: "Linux",
    title: "Debian、Fedora、Mageia、Oracle、SUSE等多發行版發布大量安全更新，涵蓋核心、網路服務與應用層元件",
    summary: "本次安全更新涵蓋了多個主流 Linux 發行版，包括 Debian、Fedora、Mageia、Oracle 以及 SUSE。更新範圍極廣，涉及作業系統核心（kernel）、網路服務（如 OpenSSH、postfix、bind、samba）、以及大量應用層函式庫和工具（如 libtiff、glibc、python、chromium、grafana 等）。\n\n具體技術細節上，更新涵蓋了從核心層面的修補到上層應用程式的依賴庫更新。例如，Debian 更新了 kernel、libnfs、roundcube 和 tiff；Fedora 更新了 antlr4-project、chromium、erlang、libseccomp、libtiff、log4cxx、mbedtls、openssh 等多個元件；Oracle 和 SUSE 的更新列表也極為龐大，涵蓋了從 MariaDB、PostgreSQL 到各種 Python/Perl 相關的庫。\n\n實務影響上，這表明各發行版持續修補其生態系統中廣泛使用的元件，以應對潛在的漏洞。資安人員和系統管理員應密切關注這些發行版發布的官方安全公告，並根據自身環境的依賴關係，及時進行系統升級和修補，以確保系統的穩定性和安全性。",
    tags: ["Debian", "Fedora", "Mageia", "Oracle", "SUSE", "Linux 核心", "安全更新"],
    title_en: "Multiple Distributions Including Debian, Fedora, Mageia, Oracle, and SUSE Release Extensive Security Updates Covering Core, Network Services, and Application Components",
    summary_en: "These security updates cover multiple mainstream Linux distributions, including Debian, Fedora, Mageia, Oracle, and SUSE. The scope of the updates is extremely broad, involving the operating system kernel, network services (such as OpenSSH, postfix, bind, samba), and numerous application-layer libraries and tools (such as libtiff, glibc, python, chromium, grafana, etc.).\n\nIn terms of specific technical details, the updates range from kernel-level patches to updates of dependencies in higher-level applications. For example, Debian updated kernel, libnfs, roundcube, and tiff; Fedora updated multiple components including antlr4-project, chromium, erlang, libseccomp, libtiff, log4cxx, mbedtls, and openssh; and the update lists for Oracle and SUSE were also massive, covering libraries related to everything from MariaDB and PostgreSQL to various Python/Perl components.\n\nIn practical terms, this indicates that each distribution is continuously patching widely used components within its ecosystem to address potential vulnerabilities. Security personnel and system administrators should closely monitor the official security announcements released by these distributions and perform timely system upgrades and patches based on their environment's dependencies to ensure system stability and security.",
    tags_en: ["Debian", "Fedora", "Mageia", "Oracle", "SUSE", "Linux Kernel", "Security Updates"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083708", lang: "EN" }
    ]
  },
  {
    id: "20260720-010",
    trackers: ["os"],
    category: "Linux",
    title: "NetworkManager 1.58 發布：強化 IPv6 轉型支援與虛擬化網路功能",
    summary: "NetworkManager 1.58 版本已發布，主要針對 Linux 系統的網路管理功能進行了重大升級。本次更新新增了對 464XLAT（Customer-side Translator）的支援，這能為遺留應用程式建立虛擬 IPv4 介面，並將其出站 IPv4 流量轉換為 IPv6，有助於 IPv6 網路環境下存取舊版 IPv4 服務。此外，版本也加入了對 GENEVE 介面的支援，用於在 Hypervisor 和虛擬交換器之間路由虛擬化流量。在使用者介面層面，D-Bus API 和 nmcli 工具現在支援跨重啟持久化管理狀態。在無線網路方面，WiFi 連接的",
    tags: ["NetworkManager", "Linux", "IPv6", "464XLAT", "GENEVE", "網路管理"],
    title_en: "NetworkManager 1.58 Released: Enhanced IPv6 Transition Support and Virtual Networking Features",
    summary_en: "NetworkManager version 1.58 has been released, featuring major upgrades to network management functionalities for Linux systems. This update adds support for 464XLAT (Customer-side Translator), which can create virtual IPv4 interfaces for legacy applications and translate their outbound IPv4 traffic to IPv6, aiding access to older IPv4 services within an IPv6 network environment. Furthermore, the version includes support for GENEVE interfaces, used for routing virtualized traffic between Hypervisors and virtual switches. At the user interface level, the D-Bus API and nmcli tool now support persistent management states across reboots. Regarding wireless networking, WiFi connections...",
    tags_en: ["NetworkManager", "Linux", "IPv6", "464XLAT", "GENEVE", "Network Management"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NetworkManager-1.58", lang: "EN" }
    ]
  },
  {
    id: "20260720-011",
    trackers: ["os"],
    category: "Linux",
    title: "Intel 宣布升級 Xeon 6/6+ 伺服器記憶體支援，提供 8000 MT/s RDIMM 與 Gen 2 MRDIMM 規劃",
    summary: "Intel 宣布將透過 BIOS 更新，擴展目前 Xeon 6 和 Xeon 6+ 處理器系列對記憶體的支援範圍。本次升級包含兩大重點：首先，針對 Xeon 6700P 處理器，將支援 8000 MT/s 的 RDIMM，這相較於現有的 RDIMM-6400，能為記憶體密集型工作負載帶來顯著提升，記憶體速度提升約 25%，延遲降低約 6%。其次，Intel 也規劃了 Gen 2 MRDIMM 的支援，預計在 2027 年第一季為 Xeon 6900P 處理器啟用，雖然 Gen 2 MRDIMM 預期可達 12,800 MT/s，但初期支援仍會限制在 8800 MT/s。用戶需留意，支援 8000 MT/s RDIMM 的 BIOS 更新預計於八月至九月推出。這些升級旨在提升伺服器在記憶體頻寬密集型應用中的效能，但實際效能提升的評測仍有待獨立測試。",
    tags: ["Intel", "Xeon 6", "Xeon 6+", "RDIMM", "MRDIMM", "BIOS", "伺服器"],
    title_en: "Intel Announces Memory Support Upgrade for Xeon 6/6+ Servers, Planning for 8000 MT/s RDIMM and Gen 2 MRDIMM",
    summary_en: "Intel announced that it will expand the memory support range for its Xeon 6 and Xeon 6+ processor series via a BIOS update. This upgrade includes two major points: First, the Xeon 6700P processor will support 8000 MT/s RDIMM. Compared to the existing RDIMM-6400, this offers a significant boost for memory-intensive workloads, increasing memory speed by approximately 25% and reducing latency by approximately 6%. Second, Intel has also planned support for Gen 2 MRDIMM, which is expected to be enabled for the Xeon 6900P processor in Q1 2027. Although Gen 2 MRDIMM is expected to reach 12,800 MT/s, the initial support will be limited to 8800 MT/s. Users should note that the BIOS update supporting 8000 MT/s RDIMM is scheduled for release between August and September. These upgrades aim to enhance server performance in memory bandwidth-intensive applications, but actual performance improvements are subject to independent testing.",
    tags_en: ["Intel", "Xeon 6", "Xeon 6+", "RDIMM", "MRDIMM", "BIOS", "Server"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-More-Xeon-6-MRDIMMs", lang: "EN" }
    ]
  },
  {
    id: "20260720-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "GNOME 專案調整安全報告政策：縮短披露期限至 30 天，並限制 AI 生成內容",
    summary: "GNOME 專案因應 AI/LLM 生成的安全報告激增，宣布調整其安全報告處理流程。主要變動包括：將安全漏洞的披露窗口期從業界慣例的 90 天縮短至 30 天。此舉是基於觀察到大多數 GNOME 安全問題能在最初一到三週內修復或根本無法修復。此外，對於禁止 AI 生成內容的專案，若安全報告包含 AI/LLM 生成的發現，該報告將不再轉發，而是直接關閉，但仍會通知專案維護者。負責 GNOME 安全追蹤的 Michael Catanzaro 也宣布將於今年 11 月開始逐步退出此職務。這些變動旨在提高反應速度，並應對 AI 內容帶來的品質與政策挑戰。實務上，開發者和維護者需注意新的報告流程和更緊湊的修補時程。",
    tags: ["GNOME", "Linux", "安全報告", "AI/LLM", "安全漏洞", "Michael Catanzaro"],
    title_en: "GNOME Project Adjusts Security Reporting Policy: Shortens Disclosure Period to 30 Days and Restricts AI-Generated Content",
    summary_en: "In response to the surge of security reports generated by AI/LLMs, the GNOME Project has announced adjustments to its security reporting process. Key changes include: shortening the disclosure window for security vulnerabilities from the industry standard of 90 days to 30 days. This decision is based on observations that most GNOME security issues can be patched or are fundamentally unpatchable within the first one to three weeks. Furthermore, for projects that prohibit AI-generated content, if a security report contains AI/LLM generated findings, the report will no longer be forwarded but will be directly closed, though project maintainers will still be notified. Michael Catanzaro, who is responsible for GNOME security tracking, also announced that he will begin gradually stepping down from this role starting this November. These changes aim to increase response speed and address the quality and policy challenges posed by AI content. Practically, developers and maintainers must pay attention to the new reporting workflow and the tighter patching timeline.",
    tags_en: ["GNOME", "Linux", "Security Report", "AI/LLM", "Vulnerability", "Michael Catanzaro"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Security-Changes-2026", lang: "EN" }
    ]
  },
  {
    id: "20260720-013",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心提升 Intel Panther Lake Xe3 Arc B390 顯示卡效能表現",
    summary: "本文針對開發中的 Linux 7.2 核心版本進行效能測試，特別關注其在搭載 Intel Core Ultra Series 3「Panther Lake」硬體的顯示效能。測試環境使用 MSI Prestige 14 Flip AI+ 筆電，配備 Core Ultra X7 358H SoC 及 Arc B390 Xe3 顯示晶片。測試基於 Ubuntu 26.04 LTS 系統，搭配 Mesa 26.0.3 和 GNOME 50.1 在 Wayland 環境下運行。結果顯示，相較於穩定的 Linux 7.1 核心，Linux 7.2 Git 版本在處理 Panther Lake Xe3 顯示卡時，展現出更快的效能提升。此更新預計於八月穩定發布，對於使用新一代 Intel 顯示硬體的用戶具有實質的效能優化價值。",
    tags: ["Linux 7.2", "Intel", "Panther Lake", "Xe3 Arc B390", "Ubuntu 26.04", "Mesa"],
    title_en: "Linux 7.2 Kernel Boosts Performance for Intel Panther Lake Xe3 Arc B390 Graphics Card",
    summary_en: "This article details performance testing of the developing Linux 7.2 kernel version, focusing specifically on display performance on hardware equipped with Intel Core Ultra Series 3 'Panther Lake' components. The testing environment utilized an MSI Prestige 14 Flip AI+ laptop, featuring a Core Ultra X7 358H SoC and the Arc B390 Xe3 display chip. The tests were conducted on the Ubuntu 26.04 LTS system, running Mesa 26.0.3 and GNOME 50.1 within a Wayland environment. The results indicate that, compared to the stable Linux 7.1 kernel, the Linux 7.2 Git version exhibits significantly improved performance when handling the Panther Lake Xe3 graphics card. This update is expected to be released in a stable version in August, offering substantial performance optimization value for users utilizing the new generation of Intel display hardware.",
    tags_en: ["Linux 7.2", "Intel", "Panther Lake", "Xe3 Arc B390", "Ubuntu 26.04", "Mesa"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/linux-72-panther-lake", lang: "EN" }
    ]
  },
  {
    id: "20260720-014",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心引入 KNOD 專案，實現 GPU 內核級網路卸載，加速 XDP 與 IPsec 處理",
    summary: "Linux 核心開發者在網路資料處理領域提出了一項重大進展，即 KNOD 專案。KNOD 旨在實現完全在內核層級（in-kernel）的網路卸載功能，將原本由主機 CPU 處理的封包加速運算，轉移至 GPU 執行。這項技術的關鍵優勢在於，它無需依賴任何使用者空間（user-space）函式庫，如 AMD ROCm，所有流程都在內核內完成。具體而言，網路介面卡（NIC）將接收到的封包直接透過 DMA 傳輸到 GPU 記憶體，GPU 接著在批次封包上進行平行運算，並將結果返回給內核。這使得原本受限於 CPU 核心數量的吞吐量，能夠轉變為依賴 GPU 的佔用率（occupancy）來擴展。KNOD 能夠透明地卸載現有的 XDP 程式和 IPsec SA，極大地提升了線速封包處理能力。目前開發工作已在 AMD 的 GCN 與 RDNA2 硬體上完成，並已提交至 Linux 核心郵件列表（RFC）。",
    tags: ["Linux 核心", "KNOD", "GPU 卸載", "XDP", "IPsec", "AMD"],
    title_en: "Linux Kernel Introduces KNOD Project for In-Kernel GPU Network Offload, Accelerating XDP and IPsec Processing",
    summary_en: "Linux kernel developers have introduced a major advancement in network data processing: the KNOD project. KNOD aims to achieve fully in-kernel network offload functionality, shifting packet acceleration computation, which was previously handled by the host CPU, to the GPU. The key advantage of this technology is that it does not rely on any user-space libraries, such as AMD ROCm; all processes are completed within the kernel. Specifically, the Network Interface Card (NIC) directly transfers received packets via DMA to the GPU memory, where the GPU performs parallel computation on the batch of packets and returns the results to the kernel. This transforms throughput, which was previously limited by CPU core count, to one that scales based on GPU occupancy. KNOD can transparently offload existing XDP programs and IPsec SAs, significantly enhancing line-rate packet processing capability. Development work has been completed on AMD's GCN and RDNA2 hardware and has been submitted to the Linux kernel mailing list (RFC).",
    tags_en: ["Linux Kernel", "KNOD", "GPU Offload", "XDP", "IPsec", "AMD"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KNOD-Network-Offload-AMD-GPUs", lang: "EN" }
    ]
  },
  {
    id: "20260720-015",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心移除 Qualcomm 加密加速器驅動 (QCE)，因效能低落與多重 Bug 導致",
    summary: "Linux 核心正在逐步禁用 Qualcomm 加密引擎加速器 (QCE) 驅動。該驅動最初於 2014 年被整合至主線核心，用於 Snapdragon 及嵌入式處理器中的資料加密、雜湊與完整性檢查。然而，由於多項重大缺陷，包括效能遠低於 CPU 核心處理加密工作、歷史上存在多種驅動 Bug、以及缺乏對硬體的獨佔存取權導致與安全世界發生競態條件 (race conditions)，開發團隊決定將其標記為「BROKEN」並從預設的 ARMv7 和 AArch64/ARM64 核心建構中移除。此變更旨在防止開發者將其納入發佈的核心版本。雖然未來該驅動可能用於處理受限媒體內容，但目前核心尚未支援此功能，使用者應避免在其缺陷修復前使用此驅動。此變更已透過提交至 cryptodev 進行排程。",
    tags: ["Linux 核心", "Qualcomm", "QCE", "加密加速器", "ARMv7", "AArch64"],
    title_en: "Linux Kernel Removes Qualcomm Crypto Accelerator Driver (QCE) Due to Low Performance and Multiple Bugs",
    summary_en: "The Linux kernel is gradually disabling the Qualcomm Crypto Engine Accelerator (QCE) driver. This driver was initially integrated into the mainline kernel in 2014 for data encryption, hashing, and integrity checking on Snapdragon and embedded processors. However, due to several major defects—including performance significantly lower than CPU core processing for cryptographic tasks, historical instances of various driver bugs, and lack of exclusive hardware access leading to race conditions with the security world—the development team has decided to mark it as \"BROKEN\" and remove it from the default ARMv7 and AArch64/ARM64 kernel builds. This change aims to prevent developers from including it in released core versions. Although the driver may be used in the future for processing restricted media content, the core does not currently support this function, and users should avoid using this driver until its defects are fixed. This change has been scheduled via a commit to cryptodev.",
    tags_en: ["Linux Kernel", "Qualcomm", "QCE", "Crypto Accelerator", "ARMv7", "AArch64"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-QCE-Disabling", lang: "EN" }
    ]
  },
  {
    id: "20260720-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "駭客持續攻擊 WordPress 關鍵漏洞，利用多種方式進行惡意行為",
    summary: "文章指出，WordPress 是一個持續遭受攻擊的目標，攻擊者不斷利用其關鍵漏洞來進行各種惡意行為。雖然原文未提供具體 CVE 編號或 CVSS 分數，但強調了 WordPress 由於其廣泛的應用性，成為攻擊者持續關注的目標。這些漏洞可能允許攻擊者在網站上植入惡意程式碼、竊取資料或劫持網站。對於使用 WordPress 的網站管理員和開發者而言，修補建議是必須保持核心系統、主題和所有外掛程式（plugins）的更新狀態，並實施嚴格的安全性措施，例如使用強密碼、啟用兩步驟驗證，並定期審查網站的檔案完整性，以降低被攻擊的風險。",
    tags: ["WordPress", "漏洞", "CMS", "安全更新", "Web應用程式"],
    title_en: "Hackers Continuously Attack Critical WordPress Vulnerabilities, Exploiting Various Methods for Malicious Activities",
    summary_en: "The article points out that WordPress is a continuously targeted platform, with attackers constantly exploiting its critical vulnerabilities to conduct various malicious activities. Although the original text does not provide specific CVE IDs or CVSS scores, it emphasizes that due to its widespread application, WordPress remains a persistent target for attackers. These vulnerabilities could potentially allow attackers to inject malicious code, steal data, or hijack the website. For website administrators and developers using WordPress, the recommended remediation is to keep the core system, themes, and all plugins updated, and to implement strict security measures, such as using strong passwords, enabling two-factor authentication, and regularly reviewing the website's file integrity, in order to reduce the risk of attack.",
    tags_en: ["WordPress", "Vulnerability", "CMS", "Security Update", "Web Application"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/20/attackers-pummel-critical-wordpress-vuln-to-create-all-sorts-of-mischief/5275265", lang: "EN" }
    ]
  },
  {
    id: "20260720-017",
    trackers: ["eu_cra"],
    category: "法令更新",
    title: "歐盟指控 AliExpress 違反《數位服務法》，罰款 5.5 億歐元，要求改善非法及假冒商品風險評估",
    summary: "歐盟委員會（Commission）對電商平台 AliExpress 處以 5.5 億歐元的罰款，指控其違反《數位服務法》（DSA）的規定。核心問題在於 AliExpress 未能履行勤勉評估義務，未能有效評估和減輕其平台上非法、不安全或假冒商品的傳播風險。委員會指出，假冒衣物、不安全的玩具、危險的化妝品等非法商品傳播，不能被視為線上購物不可避免的成本。平台必須系統性地識別並解決這些風險，確保消費者能安全購物。委員會已要求平台採取行動，並警告若未能遵守，將面臨定期罰款。此事件強調了大型線上平台在內容審核和風險管理方面的嚴格責任。",
    tags: ["歐盟委員會", "Digital Services Act", "DSA", "AliExpress", "電商平台", "合規責任"],
    title_en: "EU Accuses AliExpress of Violating Digital Services Act, Imposes €550 Million Fine, and Demands Improvement in Illegal and Counterfeit Goods Risk Assessment",
    summary_en: "The European Commission has fined the e-commerce platform AliExpress €550 million, accusing it of violating the provisions of the Digital Services Act (DSA). The core issue is that AliExpress failed to fulfill its due diligence obligations, specifically failing to effectively assess and mitigate the risk of illegal, unsafe, or counterfeit goods circulating on its platform. The Commission pointed out that the circulation of illegal goods—such as counterfeit clothing, unsafe toys, and dangerous cosmetics—cannot be viewed as an unavoidable cost of online shopping. The platform must systematically identify and resolve these risks to ensure consumer safety. The Commission has demanded that the platform take action and warned that failure to comply will result in periodic fines. This incident underscores the strict responsibilities of large online platforms regarding content moderation and risk management.",
    tags_en: ["European Commission", "Digital Services Act", "DSA", "AliExpress", "e-commerce platform", "compliance responsibility"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act", lang: "EN" }
    ]
  },
  {
    id: "20260720-018",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "微軟提醒多版本作業系統支援終止：Windows 11 24H2、Windows 10 LTSB 2016及Server 2022等用戶應規劃升級",
    summary: "微軟發布技術支援到期提醒，指出多個作業系統版本將面臨支援終止。具體而言，Windows 11 24H2 Home/Pro版、Windows 10 Enterprise LTSB 2016、以及Windows 10 IoT Enterprise LTSB 2016的更新支援將於2026年10月13日結束。用戶應考慮升級至Windows 11 25H2或Windows 11 LTSC 2024。此外，Windows 11 Enterprise/Education版將延長支援至2027年10月12日。對於企業用戶，可透過購買延伸安全更新（ESU）服務延長Windows 10 LTSB 2016的支援，但需支付費用。同時，Windows Server 2022將在同一日結束主流支援，但仍可進入延伸支援，持續獲得安全更新至2031年10月14日。微軟也提醒，Windows Server 2016的支援將在2027年1月12日結束，建議用戶提前規劃升級。",
    tags: ["微軟", "Windows 11", "Windows 10", "Windows Server 2022", "技術支援", "ESU"],
    title_en: "Microsoft warns of end-of-life support for multiple operating systems: Users of Windows 11 24H2, Windows 10 LTSB 2016, and Server 2022 should plan for upgrades",
    summary_en: "Microsoft has issued a technical support expiration warning, noting that multiple operating system versions will face end-of-life support. Specifically, update support for Windows 11 24H2 Home/Pro, Windows 10 Enterprise LTSB 2016, and Windows 10 IoT Enterprise LTSB 2016 will end on October 13, 2026. Users should consider upgrading to Windows 11 25H2 or Windows 11 LTSC 2024. Furthermore, Windows 11 Enterprise/Education versions will have extended support until October 12, 2027. For enterprise users, support for Windows 10 LTSB 2016 can be extended by purchasing Extended Security Updates (ESU), but this requires payment. Meanwhile, Windows Server 2022 will end mainstream support on the same date, but can still enter extended support, receiving security updates until October 14, 2031. Microsoft also reminds users that support for Windows Server 2016 will end on January 12, 2027, and recommends planning for an upgrade in advance.",
    tags_en: ["Microsoft", "Windows 11", "Windows 10", "Windows Server 2022", "Technical Support", "ESU"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177426", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-019",
    trackers: ["os"],
    category: "Windows",
    title: "OneDrive 新增保護功能：限制敏感 PDF 在 Edge 瀏覽器中的螢幕截圖與下載",
    summary: "微軟透過 OneDrive 推出新功能，旨在保護標記為「敏感」的 PDF 文件，限制使用者在 Microsoft Edge 瀏覽器中進行螢幕截圖和下載。此功能最初會限定於企業客戶，並需透過啟用「Do Not Allow Screen Capture in OneDrive and SharePoint」的管理員政策才能生效。此更新旨在彌補先前瀏覽器渲染的 PDF 文件未能強制執行 Microsoft Purview Information Protection (MIP) 控制的漏洞，使網頁體驗與桌面行為保持一致。當文件被上傳者或組織標記為禁止截圖時，即使在 Edge 的網頁 PDF 檢視器中，使用者也無法截圖或下載。雖然此功能目前限制在 Edge，但微軟表示未來會逐步擴展至其他瀏覽器和行動應用程式。此舉有助於企業保護敏感資料，確保內容即使在外部存取時也能保持安全。",
    tags: ["OneDrive", "Microsoft Edge", "PDF", "Microsoft Purview Information Protection (MIP)", "Windows", "資料安全"],
    title_en: "OneDrive Adds Protection Feature: Restricting Screen Captures and Downloads of Sensitive PDFs in Edge Browser",
    summary_en: "Microsoft has introduced a new feature via OneDrive designed to protect PDFs marked as 'sensitive,' restricting users from taking screenshots or downloading the files within the Microsoft Edge browser. This feature is initially limited to enterprise customers and requires enabling the 'Do Not Allow Screen Capture in OneDrive and SharePoint' administrative policy to take effect. This update aims to address a vulnerability where PDF files rendered by the browser could bypass Microsoft Purview Information Protection (MIP) controls, ensuring consistency between the web and desktop experience. When a file is marked by the uploader or organization as restricted from capture, users will be unable to screenshot or download the content, even when viewing the PDF in the Edge web viewer. Although this feature is currently limited to Edge, Microsoft stated that it plans to gradually expand it to other browsers and mobile applications. This measure helps enterprises protect sensitive data, ensuring content remains secure even during external access.",
    tags_en: ["OneDrive", "Microsoft Edge", "PDF", "Microsoft Purview Information Protection (MIP)", "Windows", "Data Security"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/20/onedrive-will-block-screenshots-of-sensitive-pdfs-but-only-in-microsoft-edge-of-course", lang: "EN" }
    ]
  },
  {
    id: "20260720-020",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 7月更新後可能需多次重啟：大型更新與 .NET Framework/Secure Boot 相關",
    summary: "本篇報導指出，安裝大型的 Windows 11 月度更新（如 2026 年 7 月更新）時，用戶的設備偶爾會需要多次重啟，這與以往預期的單次重啟不同。造成這種現象的主要原因包括：大型 Windows 更新本身、獨立的 .NET Framework 更新，以及 Secure Boot 憑證的更新。文章強調，如果設備重啟多次，用戶應讓其完成安裝過程，不應強制關機。此外，Secure Boot 憑證的部署仍在進行中，雖然微軟曾預計在 2026 年 6 月完成，但目前仍需透過 Windows Update 逐步推送。部分用戶在安裝 7 月更新後，可能會在事件檢視器（Event Viewer）看到 SCEP 憑證相關錯誤（如 HTTP 429 Too Many Requests），這通常是系統在重新驗證或請求 TPM 證明憑證的正常現象，無需過度擔憂。微軟提醒用戶，由於 AI 輔助漏洞偵測會發現更多安全漏洞，更新的體積將持續增大，建議盡快修補。",
    tags: ["Windows 11", "Patch Tuesday", "Secure Boot", ".NET Framework", "Windows Update", "CVE"],
    title_en: "Windows 11 May Require Multiple Restarts After July Update: Related to Large Updates and .NET Framework/Secure Boot",
    summary_en: "This report points out that when installing large Windows 11 monthly updates (such as the July 2026 update), user devices may occasionally require multiple restarts, which differs from the previously expected single restart. The main causes for this phenomenon include: the large Windows update itself, independent .NET Framework updates, and updates to Secure Boot credentials. The article emphasizes that if the device restarts multiple times, users should allow it to complete the installation process and should not force a shutdown. Furthermore, the deployment of Secure Boot credentials is ongoing. Although Microsoft had initially planned to complete it in June 2026, it is still being gradually pushed through Windows Update. Some users who install the July update may see SCEP certificate-related errors (such as HTTP 429 Too Many Requests) in the Event Viewer. This is typically a normal phenomenon when the system is re-authenticating or requesting TPM proof certificates, and there is no need for excessive concern. Microsoft reminds users that due to AI-assisted vulnerability detection, more security vulnerabilities will be found, and the size of updates will continue to grow, recommending timely patching.",
    tags_en: ["Windows 11", "Patch Tuesday", "Secure Boot", ".NET Framework", "Windows Update", "CVE"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/20/windows-11s-biggest-updates-may-need-multiple-reboots-but-thats-normal-dont-force-shutdown", lang: "EN" }
    ]
  },
  {
    id: "20260720-021",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Insider Preview 發布新版本建置，涵蓋 Beta、Experimental 及 Release Preview 階段",
    summary: "微軟（Microsoft）透過 Windows Insider Program 宣布，於 2026 年 7 月 20 日發布了多個 Windows 11 Insider Preview 建置。本次更新涵蓋了 Beta、Experimental 和 Release Preview 三個不同階段的版本。對於 Beta 頻道，提供了 Build 26220.8925；Experimental 頻道則有 Build 26300.8935。此外，針對 26H1 版本，也提供了新的 Beta 建置 Build 28020.2539。同時，Release Preview 階段也更新了 24H2/25H2 和 26H1 的建置，分別為 Build 26100.8942/26200.8942 與 Build 28000.2597。這些建置是為早期測試和開發者預覽目的，使用者應留意官方發布的詳細版本說明，並根據自身需求選擇合適的測試版本。建議使用者在測試新版本時，應謹慎評估穩定性與功能差異。",
    tags: ["Windows 11", "Insider Preview", "Beta", "Experimental", "Release Preview", "Microsoft"],
    title_en: "Windows 11 Insider Preview Releases New Builds Covering Beta, Experimental, and Release Preview Stages",
    summary_en: "Microsoft announced through the Windows Insider Program the release of multiple Windows 11 Insider Preview builds on July 20, 2026. This update covers three different stages: Beta, Experimental, and Release Preview. For the Beta channel, Build 26220.8925 was provided; the Experimental channel received Build 26300.8935. Additionally, new Beta builds were provided for the 26H1 version, specifically Build 28020.2539. Concurrently, the Release Preview stage updated builds for 24H2/25H2 and 26H1, which are Build 26100.8942/26200.8942 and Build 28000.2597, respectively. These builds are intended for early testing and developer preview purposes. Users should pay attention to the official detailed version descriptions and select the appropriate test version based on their needs. It is recommended that users carefully assess the stability and functional differences when testing new versions.",
    tags_en: ["Windows 11", "Insider Preview", "Beta", "Experimental", "Release Preview", "Microsoft"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windows-insider/2026/07/20/announcing-new-builds-for-20-july-2026", lang: "EN" }
    ]
  },
  {
    id: "20260720-022",
    trackers: ["os"],
    category: "Windows",
    title: "Windows Server 更新服務面臨元數據資料量爆炸的挑戰",
    summary: "本文討論了 Windows Server 的更新服務在處理日益龐大且複雜的元數據（metadata）資料時所面臨的壓力。隨著 Microsoft 產品生態系統的擴展和功能增加，相關的元數據量呈指數級增長，這對傳統的更新和同步機制構成了嚴峻的挑戰。文章指出，單純增加儲存空間或提高處理器性能無法根本解決這個問題，因為問題的根源在於資料結構和資訊管理的複雜性。這要求 Microsoft 必須重新審視其更新服務的架構設計，特別是資料索引、版本控制和依賴關係的處理方式。對於企業 IT 管理者而言，這意味著未來維護和部署 Windows Server 相關的更新時，需要預期更複雜的資料管理流程和潛在的效能瓶頸。修補建議是從根本上優化元數據的生成、儲存和查詢機制，而非僅僅進行表面上的性能提升。",
    tags: ["Windows Server", "元數據", "Microsoft", "更新服務", "IT架構", "資料管理"],
    title_en: "Windows Server Update Services Face Challenges from Exploding Metadata Volume",
    summary_en: "This article discusses the pressure faced by Windows Server's update services when handling increasingly massive and complex metadata. As the Microsoft product ecosystem expands and features are added, the volume of related metadata is growing exponentially, posing a severe challenge to traditional update and synchronization mechanisms. The article points out that simply increasing storage space or improving processor performance cannot fundamentally solve this problem, as the root cause lies in the complexity of data structures and information management. This necessitates Microsoft re-evaluating the architectural design of its update services, especially concerning data indexing, version control, and dependency handling. For enterprise IT administrators, this means that future maintenance and deployment of Windows Server updates must anticipate more complex data management processes and potential performance bottlenecks. The suggested remedy is to fundamentally optimize the mechanisms for metadata generation, storage, and querying, rather than merely implementing superficial performance enhancements.",
    tags_en: ["Windows Server", "Metadata", "Microsoft", "Update Services", "IT Architecture", "Data Management"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/07/20/windows-server-update-services-buckle-under-microsofts-metadata-mountain/5274843", lang: "EN" }
    ]
  },
  {
    id: "20260720-023",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟緊急修補 Windows 系統，應對 Dell 設備的熱門漏洞攻擊",
    summary: "本文報導微軟（Microsoft）針對 Windows 系統發布了修補程式，以應對針對 Dell 品牌電腦的熱門漏洞攻擊。雖然文章未提供具體的 CVE 編號或 CVSS 分數，但指出這些修補是為了修補在特定硬體設備（如 Dell）上常見的、可能被利用的漏洞。實務上，這類修補通常涉及作業系統核心或驅動層面的安全加固。建議所有使用 Windows 系統的用戶，特別是使用 Dell 品牌電腦的用戶，應立即檢查並安裝最新的 Windows 安全更新，以確保系統的完整性與安全性。由於漏洞的具體技術細節未公開，用戶應以微軟官方或設備製造商（如 Dell）的公告為準，遵循官方指引進行修補。",
    tags: ["Microsoft", "Windows", "Dell", "安全修補", "漏洞", "Patch Tuesday"],
    title_en: "Microsoft Issues Emergency Patch for Windows System to Address Popular Vulnerability Attacks on Dell Devices",
    summary_en: "This article reports that Microsoft has released a patch for the Windows system to address popular vulnerability attacks targeting Dell brand computers. Although the article does not provide specific CVE IDs or CVSS scores, it points out that these patches are intended to fix vulnerabilities that are common and potentially exploitable on specific hardware devices (such as Dell). In practice, such patches usually involve security hardening at the operating system core or driver level. All users of Windows systems, especially those using Dell brand computers, are advised to immediately check and install the latest Windows security updates to ensure system integrity and security. Since the specific technical details of the vulnerabilities have not been disclosed, users should rely on official announcements from Microsoft or the device manufacturer (such as Dell) and follow official guidelines for patching.",
    tags_en: ["Microsoft", "Windows", "Dell", "Security Patch", "Vulnerability", "Patch Tuesday"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/20/microsoft-rushes-out-windows-fix-for-dells-hot-and-bothered-pcs/5274810", lang: "EN" }
    ]
  },
  {
    id: "20260720-024",
    trackers: ["os"],
    category: "Windows",
    title: "LG顯示器透過Windows Update強制安裝App，並植入McAfee廣告，引發用戶隱私與廣告困擾",
    summary: "本文揭露LG顯示器在連接到Windows PC後，會透過Windows Update機制自動安裝名為「LG Monitor App Installer」的應用程式。此機制利用Windows自Windows 8以來存在的「設備元數據」（device metadata）功能，允許OEM廠商在用戶不知情的情況下推送軟體。該應用程式不僅會強制安裝如OnScreen Control等輔助工具，更令人擔憂的是，其更新日誌甚至明確提及並展示了McAfee的廣告和試用促銷，導致用戶在每次開機或使用時，都會看到該防毒軟體的彈出式廣告。此行為嚴重侵犯用戶隱私，且在沒有用戶明確同意的情況下，透過系統級更新管道推送商業廣告。Microsoft官方已承認此自動安裝功能存在，但其缺乏用戶同意介面，使得OEM廠商可以利用此漏洞推送非必要的軟體和廣告。用戶應警惕透過設備連接觸發的自動軟體安裝，並留意應用程式的權限範圍。",
    tags: ["LG顯示器", "Windows Update", "McAfee", "設備元數據", "OEM", "自動安裝", "隱私洩露"],
    title_en: "LG Displays Force Install App via Windows Update, Embedding McAfee Ads, Causing User Privacy and Ad Concerns",
    summary_en: "This article reveals that when connected to a Windows PC, LG displays automatically install an application called \"LG Monitor App Installer\" via the Windows Update mechanism. This mechanism utilizes the \"device metadata\" function, which has existed in Windows since Windows 8, allowing OEM manufacturers to push software without the user's explicit knowledge. Not only does this application forcibly install auxiliary tools such as OnScreen Control, but what is concerning is that its update logs explicitly mention and display McAfee advertisements and trial promotions. This results in users seeing pop-up ads for the antivirus software every time they power on or use the device. This behavior severely infringes upon user privacy and pushes commercial advertisements through a system-level update channel without explicit user consent. Microsoft has officially acknowledged the existence of this automatic installation feature, but its lack of a user consent interface allows OEM manufacturers to push unnecessary software and advertisements. Users should be vigilant regarding automatic software installations triggered by device connection and pay attention to the application's permission scope.",
    tags_en: ["LG Displays", "Windows Update", "McAfee", "Device Metadata", "OEM", "Automatic Installation", "Privacy Leak"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/21/lg-admits-its-monitor-app-installs-bloatware-via-windows-update-and-microsoft-is-letting-it-happen", lang: "EN" }
    ]
  },
  {
    id: "20260720-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ServiceNow AI平臺遭沙箱逃逸漏洞攻擊：CVE-2026-6875 允許遠端程式碼執行與代理伺服器滲透",
    summary: "企業流程自動化巨頭ServiceNow於7月13日發布公告，揭露其AI平臺存在重大等級的沙箱逃逸漏洞CVE-2026-6875。此漏洞被評估為遠端程式碼執行（RCE）弱點，CVSS v4.0評分高達9.5分，極具攻擊性。攻擊者在特定情境下，無需身分驗證即可執行任意程式碼。資安公司Searchlight Cyber進一步指出，此漏洞不僅能讓攻擊者入侵ServiceNow執行個體，更可滲透至其連接的代理伺服器。問題根源於GlideRecord查詢API及指令碼沙箱機制，使得攻擊者能繞過沙箱限制，從任意資料表拉取資料、建立管理員帳號，甚至對已設定的代理伺服器執行Shell指令。ServiceNow於發現漏洞後迅速採取緊急緩解措施，並在數週內推出修補程式，將此問題正式登記為CVE-2026-6875。建議用戶應立即部署ServiceNow提供的緊急緩解措施，並儘速更新修補程式，以防範被利用。",
    tags: ["ServiceNow", "CVE-2026-6875", "RCE", "沙箱逃逸", "AI平臺", "流程自動化"],
    title_en: "ServiceNow AI Platform Targeted by Sandbox Escape Vulnerability: CVE-2026-6875 Allows Remote Code Execution and Proxy Server Penetration",
    summary_en: "Enterprise process automation giant ServiceNow announced on July 13th the discovery of a critical-severity sandbox escape vulnerability, CVE-2026-6875, within its AI platform. This vulnerability is assessed as a Remote Code Execution (RCE) weakness, boasting a CVSS v4.0 score of 9.5, making it highly exploitable. Under specific conditions, attackers can execute arbitrary code without requiring authentication. Security firm Searchlight Cyber further pointed out that this vulnerability not only allows attackers to compromise the ServiceNow instance but can also penetrate connected proxy servers. The root cause lies in the GlideRecord query API and the scripting sandbox mechanism, which allows attackers to bypass sandbox restrictions, pull data from arbitrary tables, create administrator accounts, and even execute Shell commands against configured proxy servers. ServiceNow quickly implemented emergency mitigation measures upon discovering the flaw and released a patch within weeks, officially registering the issue as CVE-2026-6875. Users are advised to immediately deploy the emergency mitigation measures provided by ServiceNow and update the patch promptly to prevent exploitation.",
    tags_en: ["ServiceNow", "CVE-2026-6875", "RCE", "Sandbox Escape", "AI Platform", "Process Automation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177439", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "F5修補Nginx及BIG-IP共8項漏洞：Nginx資料平面CVE-2026-42533為重大堆疊溢位風險",
    summary: "資安業者F5於7月15日發布安全通知，修補旗下Nginx系列產品及BIG-IP共8項漏洞。其中最嚴重的是影響Nginx Plus及Nginx Open Source資料平面的CVE-2026-42533，CVSS 4.0風險分數為9.2分，屬於重大風險。該漏洞發生在map指令使用正規表示式比對時，若攻擊者傳送特製HTTP請求，在特定組態下可引發堆疊緩衝區溢位，導致Nginx工作處理程序重啟，若未啟用ASLR或可繞過ASLR，甚至可能執行任意程式碼。此外，Nginx Ingress Controller有兩項高風險漏洞：CVE-2026-55723（CVSS 4.0，8.7分）允許攻擊者注入Nginx組態指令，建立或刪除檔案；CVE-2026-52865（CVSS 4.0，7.1分）可導致控制平面處理程序崩潰，造成服務阻斷。BIG-IP資料層也修補了CVE-2026-59762（CVSS 4.0，8.7分），遠端攻擊者可透過特製請求增加系統記憶體用量，造成效能下降或服務阻斷。建議所有用戶應立即更新至F5發布的修補版本，並檢查系統的ASLR配置。",
    tags: ["F5", "Nginx", "BIG-IP", "CVE-2026-42533", "堆疊緩衝區溢位", "CVE-2026-55723", "CVE-2026-59762"],
    title_en: "F5 Patches Nginx and BIG-IP with 8 Vulnerabilities: Nginx Data Plane CVE-2026-42533 is a Critical Stack Overflow Risk",
    summary_en: "Security vendor F5 issued a security advisory on July 15, patching a total of 8 vulnerabilities across its Nginx series products and BIG-IP. The most severe is CVE-2026-42533, affecting the Nginx Plus and Nginx Open Source data planes. This vulnerability has a CVSS 4.0 score of 9.2, classified as critical. The flaw occurs when the map directive uses regular expression matching; if an attacker sends a specially crafted HTTP request, it can trigger a stack buffer overflow under specific configurations, causing the Nginx worker process to restart. If ASLR is not enabled or can be bypassed, this could potentially lead to arbitrary code execution. Additionally, the Nginx Ingress Controller has two high-risk vulnerabilities: CVE-2026-55723 (CVSS 4.0, 8.7) allows an attacker to inject Nginx configuration directives to create or delete files; and CVE-2026-52865 (CVSS 4.0, 7.1) could cause the control plane process to crash, leading to service disruption. The BIG-IP data layer also patched CVE-2026-59762 (CVSS 4.0, 8.7), which allows a remote attacker to increase system memory usage via a specially crafted request, potentially causing performance degradation or service disruption. All users are advised to immediately update to the patched versions released by F5 and check their system's ASLR configuration.",
    tags_en: ["F5", "Nginx", "BIG-IP", "CVE-2026-42533", "Stack Buffer Overflow", "CVE-2026-55723", "CVE-2026-59762"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177437", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露：駭客利用「文字加鹽」手法混淆 LLM 郵件防護，釣魚攻擊難度提升",
    summary: "資安業者 Barracuda 揭露，駭客正進化利用「文字加鹽」（Text Salting）的傳統垃圾郵件規避手法，來干擾現代基於機器學習及大型語言模型（LLM）的郵件防護工具。該手法是在惡意郵件中加入大量隨機、看似無害的填充文字（如隨機故事、一般對話），以稀釋可疑關鍵詞（如「獎勵」、「到期」）的比例，降低郵件被判定為釣魚信的機率。攻擊者進一步結合 CSS 等技術，將填充文字的顯示範圍裁切至零或字體大小設為零，使內容對收件人不可見。由於部分 LLM 分析時可能無法識別這些隱藏內容，這些無害的填充文字反而可能改變模型對郵件真實意圖和風險的判斷，導致釣魚信被錯誤歸類為正常郵件。Barracuda 建議企業應採用多層式郵件防護，不能單純依賴關鍵字或 AI 內容分析，必須同時檢查郵件結構、寄件者信譽、身分驗證結果，並比較收件人實際看到的內容與郵件原始碼，以找出遭刻意隱藏的文字。",
    tags: ["Barracuda", "文字加鹽", "Text Salting", "LLM", "釣魚攻擊", "郵件防護"],
    title_en: "Cybersecurity Vendor Reveals: Hackers Use 'Text Salting' Technique to Obfuscate LLM Email Protection, Increasing Difficulty of Phishing Attacks",
    summary_en: "Cybersecurity vendor Barracuda revealed that hackers are evolving the use of 'Text Salting,' a traditional spam evasion technique, to disrupt modern email protection tools based on machine learning and Large Language Models (LLM). This technique involves adding large amounts of random, seemingly harmless filler text (such as random stories or general conversations) to malicious emails. This dilutes the proportion of suspicious keywords (such as 'reward' or 'expired'), thereby lowering the probability that the email will be classified as a phishing message. Attackers further combine this with technologies like CSS to clip the display range of the filler text to zero or set the font size to zero, making the content invisible to the recipient. Because some LLM analyses may fail to identify this hidden content, these harmless filler texts can instead alter the model's judgment of the email's true intent and risk, causing phishing emails to be incorrectly classified as normal messages. Barracuda advises enterprises to adopt multi-layered email protection, rather than relying solely on keywords or AI content analysis. It is essential to simultaneously check the email structure, sender reputation, authentication results, and compare the content actually visible to the recipient with the email's raw source code to uncover intentionally hidden text.",
    tags_en: ["Barracuda", "Text Salting", "LLM", "Phishing Attack", "Email Protection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177434", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-028",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Zoom修補重大漏洞：CVSS 9.8分CVE-2026-53412，防禦未驗證接管風險",
    summary: "視訊會議平臺Zoom於7月14日發布資安更新，修補了四個Windows版產品的漏洞。其中最嚴重的為CVE-2026-53412，該漏洞源於輸入驗證不當，CVSS評分為9.8分。此漏洞允許未經身分驗證的攻擊者透過網路，接管用戶帳號，主要影響Windows版Zoom Workplace 7.0.0以前的版本，以及Windows版Zoom Workplace VDI Client 7.0.10、6.6.15與6.5.18以前的版本。此外，Zoom也修補了三個高風險漏洞，包括CVSS評分達7.8分的CVE-2026-53411（源自VDI外掛程式輸入驗證不足）和CVE-2026-53409（源自Zoom Rooms權限管理不當）。這些後三個漏洞雖然影響產品不同，但都可能讓已通過身分驗證的本機攻擊者提升權限。用戶應立即至Zoom下載中心升級至最新修補版本，以防範未經身分驗證的遠端接管風險。",
    tags: ["Zoom", "CVE-2026-53412", "Windows", "輸入驗證", "CVSS", "未經身分驗證"],
    title_en: "Zoom Patches Critical Vulnerability: CVE-2026-53412, Unauthenticated Takeover Risk",
    summary_en: "Video conferencing platform Zoom released a security update on July 14th, patching vulnerabilities in four Windows versions. The most severe is CVE-2026-53412, which stems from improper input validation and has a CVSS score of 9.8. This vulnerability allows unauthenticated attackers to take over user accounts over the network. It primarily affects Windows versions of Zoom Workplace prior to 7.0.0, and Windows versions of Zoom Workplace VDI Client prior to 7.0.10, 6.6.15, and 6.5.18. Additionally, Zoom patched three other high-risk vulnerabilities, including CVE-2026-53411 (stemming from insufficient input validation in VDI add-ons) and CVE-2026-53409 (stemming from improper permission management in Zoom Rooms). Although these three vulnerabilities affect different products, they could all allow an authenticated local attacker to escalate privileges. Users should immediately upgrade to the latest patched version from the Zoom download center to prevent the risk of unauthenticated remote takeover.",
    tags_en: ["Zoom", "CVE-2026-53412", "Windows", "Input Validation", "CVSS", "Unauthenticated"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177432", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CERT/CC揭露HTTP/2伺服器流量控制漏洞：遠端攻擊可致記憶體耗盡及服務阻斷",
    summary: "美國電腦緊急應變小組協調中心（CERT/CC）警告，部分HTTP/2伺服器實作存在流量控制漏洞。未經身分驗證的遠端攻擊者可利用此漏洞，透過發送特製HTTP請求，在伺服器端造成記憶體資源耗盡（OOM）及阻斷服務（DoS）。此漏洞的本質在於伺服器回應用戶端呼叫傳送資料時，未能有效限制緩衝記憶體資源的損耗。攻擊者可開啟多道同時資料流，並利用標準的流量控制參數（如SETTINGS_INITIAL_WINDOW_SIZE = 0），迫使伺服器持續生成回應資料並滯留在緩衝記憶體內，導致大量資源累積。這可能導致系統崩潰或嚴重影響服務可用性。受影響產品包括Apache Traffic Server、Citrix、F5、Meta、Red Hat等，已發布對應的修補措施。建議使用者應立即參考各廠商的公告，確認受影響版本，並採取修補或實施記憶體上限、限制同時資料流等緩解措施，以降低風險。",
    tags: ["HTTP/2", "流量控制", "DoS", "CERT/CC", "CVE-2026-59173", "記憶體耗盡"],
    title_en: "CERT/CC Discloses HTTP/2 Server Flow Control Vulnerability: Remote Attacks Can Cause Memory Exhaustion and Service Disruption",
    summary_en: "The US Computer Emergency Readiness Center Coordination Center (CERT/CC) warns that certain HTTP/2 server implementations contain a flow control vulnerability. Unauthenticated remote attackers can exploit this vulnerability by sending specially crafted HTTP requests, causing memory resource exhaustion (OOM) and Denial of Service (DoS) on the server side. The core of this vulnerability lies in the server's failure to effectively limit the consumption of buffer memory resources when responding to client calls for data. Attackers can open multiple simultaneous data streams and utilize standard flow control parameters (such as SETTINGS_INITIAL_WINDOW_SIZE = 0) to force the server to continuously generate response data and hold it in buffer memory, leading to massive resource accumulation. This could result in system crashes or severely impact service availability. Affected products include Apache Traffic Server, Citrix, F5, Meta, Red Hat, and others, which have released corresponding patches. Users are advised to immediately refer to vendor announcements, confirm affected versions, and implement patches or mitigation measures such as setting memory limits or restricting concurrent data streams to reduce risk.",
    tags_en: ["HTTP/2", "Flow Control", "DoS", "CERT/CC", "CVE-2026-59173", "Memory Exhaustion"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177430", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GoldenEyeDog APT集團利用社交工程攻擊竊取DigiCert程式碼簽章憑證資訊，散播改良型RAT",
    summary: "數位憑證機構DigiCert在今年4月遭遇社交工程攻擊，攻擊者偽裝成螢幕保護程式的惡意檔案，成功入侵其客服支援流程，竊取了與EV程式碼簽章（EV Code Signing）憑證相關的資訊。資安公司Expel追蹤發現，幕後黑手為中國網路犯罪集團GoldenEyeDog的子團體CylindricalCanine。該集團自2024年起便頻繁濫用程式碼簽章憑證繞過Windows SmartScreen機制散播惡意軟體。此次攻擊的重大變化是駭客改用DigiCert的憑證，甚至利用頒發給先前持有有效憑證的公司。DigiCert調查指出，攻擊者竊取了客戶初始化的程式碼，用於啟動硬體權杖進行應用程式簽章。Expel分析確認，攻擊者使用的惡意程式是基於Gh0st RAT改良的遠端存取木馬（RAT）Golden Gh0st RAT。此事件揭示了憑證管理流程的重大漏洞，並提醒業界需高度警惕利用合法簽章機制進行惡意活動。",
    tags: ["DigiCert", "GoldenEyeDog", "CylindricalCanine", "程式碼簽章", "社交工程", "RAT", "EV Code Signing"],
    title_en: "GoldenEyeDog APT Group Uses Social Engineering to Steal DigiCert Code Signing Certificate Information and Spread Modified RAT",
    summary_en: "Digital certificate authority DigiCert was targeted by a social engineering attack in April this year. The attackers disguised malicious files as screen savers, successfully infiltrating its customer support process and stealing information related to EV Code Signing certificates. Security firm Expel tracked the incident and identified the perpetrators as CylindricalCanine, a subgroup of the Chinese cybercrime group GoldenEyeDog. This group has been frequently abusing code signing certificates since 2024 to distribute malware by bypassing the Windows SmartScreen mechanism. The significant development in this attack is the use of DigiCert's certificates, even utilizing those issued to companies that previously held valid certificates. DigiCert's investigation indicated that the attackers stole client-initialized code used to initiate hardware tokens for application signing. Expel's analysis confirmed that the malicious program used by the attackers is Golden Gh0st RAT, a modified Remote Access Trojan (RAT) based on Gh0st RAT. This incident reveals significant vulnerabilities in certificate management processes and serves as a reminder to the industry to be highly vigilant against malicious activities utilizing legitimate signing mechanisms.",
    tags_en: ["DigiCert", "GoldenEyeDog", "CylindricalCanine", "Code Signing", "Social Engineering", "RAT", "EV Code Signing"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177429", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Okta揭露OpenSSL「HollowByte」漏洞：未登錄CVE、可致服務阻斷，呼籲用戶儘速升級",
    summary: "身分驗證解決方案廠商Okta於7月16日揭露OpenSSL一個名為HollowByte的嚴重漏洞。該漏洞允許未經身分驗證的攻擊者，僅需遠端傳送11個位元組的惡意封包，即可在OpenSSL伺服器完成安全交握前，配置超出比例的記憶體空間。這將導致記憶體耗盡，最終造成服務阻斷（Denial of Service, DoS）。由於OpenSSL被廣泛內嵌於網頁伺服器、程式語言執行環境與資料庫系統，其影響範圍極為廣泛。儘管OpenSSL開發團隊將此弱點視為一般程式錯誤（bug），並未登記CVE編號或公布CVSS評分，但他們已在4.0.1版，以及3.6.3、3.5.7、3.4.6、3.0.21等多個版本中進行修補。Okta強烈呼籲所有用戶應立即升級至最新版本的OpenSSL以防範此類攻擊。",
    tags: ["OpenSSL", "HollowByte", "服務阻斷", "身分驗證", "CVE", "記憶體耗盡"],
    title_en: "Okta Discloses OpenSSL 'HollowByte' Vulnerability: Unregistered CVE, Causes Service Disruption, Urges Users to Upgrade Promptly",
    summary_en: "Identity verification solution vendor Okta disclosed a severe vulnerability in OpenSSL, named HollowByte, on July 16. This vulnerability allows unauthenticated attackers to configure disproportionate memory space on an OpenSSL server by remotely transmitting a malicious 11-byte packet, even before a secure handshake is completed. This will lead to memory exhaustion, ultimately causing a Denial of Service (DoS). Because OpenSSL is widely embedded in web servers, programming language execution environments, and database systems, its impact scope is extremely broad. Although the OpenSSL development team considers this weakness a general programming bug and has not registered a CVE ID or published a CVSS score, they have patched it in versions 4.0.1, 3.6.3, 3.5.7, 3.4.6, and 3.0.21. Okta strongly urges all users to immediately upgrade to the latest version of OpenSSL to prevent such attacks.",
    tags_en: ["OpenSSL", "HollowByte", "Denial of Service", "Identity Verification", "CVE", "Memory Exhaustion"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177425", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-032",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "WordPress發布安全更新修補RCE漏洞CVE-2026-63030，影響核心REST API，CVSS高達9.8分",
    summary: "WordPress開發團隊於7月17日發布了多個安全更新版本，修補了兩個漏洞，其中最值得注意的是CVE-2026-63030。此漏洞存在於WordPress的核心REST API，結合了Batch-route混淆與SQL注入弱點，允許攻擊者在不需預先身分驗證的情況下，透過匿名使用者進行遠端程式碼執行（RCE）。該漏洞影響6.9.0以上版本，CVSS風險評分高達9.8分，潛在影響範圍極廣，尤其考量到全球有超過5億網站使用WordPress。\n\n資安公司Searchlight Cyber指出，此漏洞已命名為wp2shell，並提供網站檢查工具。若管理員無法立即更新，建議可透過封鎖匿名用戶存取批次API作為臨時緩解措施，但此舉可能影響網站正常運作。其他資安廠商如Cloudflare已在WAF中加入保護規則，建議網站管理員應立即更新至最新版本，並考慮實施WAF規則進行額外防護。",
    tags: ["WordPress", "CVE-2026-63030", "RCE", "REST API", "SQL注入", "CVSS"],
    title_en: "WordPress Releases Security Update to Patch RCE Vulnerability CVE-2026-63030 Affecting Core REST API, Scoring CVSS 9.8",
    summary_en: "The WordPress development team released multiple security updates on July 17th, patching two vulnerabilities, the most notable of which is CVE-2026-63030. This vulnerability exists in the core REST API of WordPress, combining Batch-route obfuscation with an SQL injection weakness, allowing attackers to perform Remote Code Execution (RCE) via an anonymous user without requiring prior authentication. The vulnerability affects versions 6.9.0 and above, with a CVSS risk score of up to 9.8, posing a potentially wide impact given that over 500 million websites globally use WordPress. Cybersecurity firm Searchlight Cyber pointed out that this vulnerability has been named wp2shell and provided a website checking tool. If administrators cannot update immediately, they are advised to block anonymous user access to the batch API as a temporary mitigation, though this action may impact normal website operation. Other cybersecurity vendors, such as Cloudflare, have added protective rules to their WAF, advising site administrators to update to the latest version immediately and consider implementing WAF rules for additional protection.",
    tags_en: ["WordPress", "CVE-2026-63030", "RCE", "REST API", "SQL Injection", "CVSS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177424", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SonicWall SMA1000 防火牆面臨兩大漏洞 CVE-2026-15409/15410，攻擊者利用竊取憑證進行橫向移動",
    summary: "資安公司Rapid7發布報告，揭露SonicWall SMA1000防火牆設備存在兩個嚴重漏洞：CVE-2026-15409和CVE-2026-15410。其中CVE-2026-15409的CVSS風險評分達到滿分10分，且兩個漏洞均已被用於實際攻擊。這些漏洞主要出現在SMA1000的Websocket代理伺服器功能。攻擊者可利用CVE-2026-15409建立初始通道，再利用CVE-2026-15410提升至root權限。攻擊鏈的實務影響極為嚴重，攻擊者可先繞過輸入驗證機制在作業系統層級執行指令，竊取高價值憑證、活躍連線階段及多因素驗證設定，以維持長期存取。隨後，攻擊者可從受駭設備內部，對核心網域控制器發起異常AD身分驗證，並利用LDAP服務帳號進行橫向移動。建議用戶應立即參考SonicWall的公告，並採取修補措施，以防範被利用進行後續的資料竊取與勒索。",
    tags: ["SonicWall", "CVE-2026-15409", "CVE-2026-15410", "SMA1000", "防火牆", "橫向移動"],
    title_en: "SonicWall SMA1000 Firewall Faces Two Vulnerabilities CVE-2026-15409/15410, Attackers Exploit to Steal Credentials and Perform Lateral Movement",
    summary_en: "Security company Rapid7 released a report revealing two critical vulnerabilities in the SonicWall SMA1000 firewall device: CVE-2026-15409 and CVE-2026-15410. CVE-2026-15409 has a maximum CVSS risk score of 10, and both vulnerabilities have been used in actual attacks. These vulnerabilities primarily affect the Websocket proxy server function of the SMA1000. Attackers can use CVE-2026-15409 to establish an initial foothold, and then utilize CVE-2026-15410 to escalate to root privileges. The practical impact of this attack chain is extremely severe; attackers can first bypass input validation mechanisms to execute commands at the operating system level, steal high-value credentials, active connection stages, and multi-factor authentication settings, thereby maintaining long-term access. Subsequently, attackers can initiate abnormal AD authentication against core domain controllers from within the compromised device, and perform lateral movement using LDAP service accounts. Users are advised to immediately refer to SonicWall's announcement and implement patches to prevent subsequent data theft and ransomware attacks.",
    tags_en: ["SonicWall", "CVE-2026-15409", "CVE-2026-15410", "SMA1000", "Firewall", "Lateral Movement"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177422", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/177423", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WP2Shell：AI輔助鏈接兩大漏洞，使數百萬WordPress網站面臨未經身份驗證的遠端接管風險",
    summary: "攻擊者利用「WP2Shell」鏈式攻擊，結合WordPress核心的兩大漏洞：CVE-2026-60137（SQL注入）和CVE-2026-63030（批次REST API邏輯缺陷）。這兩個漏洞原本單獨存在時，CVE-2026-60137需經身份驗證，但透過與CVE-2026-63030的組合，攻擊者可實現未經身份驗證的遠端程式碼執行（RCE），從而完全接管目標網站。這些漏洞影響範圍廣大，可能波及數千萬甚至數億個使用預設安裝配置的WordPress網站。由於PoC（概念驗證）程式碼的普及，攻擊行為極為迅速且大規模。資安專家警告，即使修補後，仍需檢查網站是否有新增的管理員帳號或惡意外掛。WordPress已發布安全更新，修補了影響版本（6.9.0 - 6.9.4 和 7.0.0 - 7.0.1）。建議所有用戶應立即升級至修復版本，並持續監控系統異常。",
    tags: ["WordPress", "CVE-2026-60137", "CVE-2026-63030", "RCE", "SQL注入", "AI攻擊"],
    title_en: "WP2Shell: AI-Assisted Chain Exploits Two Major WordPress Vulnerabilities, Exposing Millions of Sites to Unauthenticated Remote Takeover Risk",
    summary_en: "Attackers are utilizing the \"WP2Shell\" chain attack, combining two core WordPress vulnerabilities: CVE-2026-60137 (SQL Injection) and CVE-2026-63030 (Batch REST API Logic Flaw). While CVE-2026-60137 required authentication when exploited individually, combining it with CVE-2026-63030 allows attackers to achieve unauthenticated Remote Code Execution (RCE), leading to complete takeover of the target website. These vulnerabilities have a wide impact scope, potentially affecting tens of millions or even hundreds of millions of WordPress sites using default installation configurations. Due to the widespread availability of Proof-of-Concept (PoC) code, the attack activity is extremely rapid and large-scale. Security experts warn that even after patching, users must check for newly created administrator accounts or malicious backdoors. WordPress has released a security update that patches the affected versions (6.9.0 - 6.9.4 and 7.0.0 - 7.0.1). All users are advised to immediately upgrade to the patched version and continuously monitor the system for anomalies.",
    tags_en: ["WordPress", "CVE-2026-60137", "CVE-2026-63030", "RCE", "SQL Injection", "AI Attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/wp2shell-millions-wordpress-sites-remote-takeover", lang: "EN" }
    ]
  },
  {
    id: "20260720-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "大型活動資安規劃需整合數位與實體風險，預警應從早期情報蒐集開始",
    summary: "本文為資安觀點文章，強調大型活動（如體育賽事、音樂會、政治集會）的威脅評估不能僅限於物理安全。有效的安全策略必須在活動前夕，從整個生態系統（包括場地、供應商、高階人士、線上社群和交通基礎設施）進行全面評估。威脅往往在數位層面留下痕跡，因此，早期數位威脅情報（Digital Threat Intelligence）至關重要。文章指出，應將物理安全、網路安全、高階保護、通訊和法律等各領域的風險視為相互關聯，而非獨立存在。成功的安全計畫需要跨部門的協作，並能及早識別關鍵的威脅訊號，以便在危機發生前採取行動。",
    tags: ["大型活動安全", "數位情報", "物理安全", "風險評估", "跨部門協作"],
    title_en: "Cybersecurity Planning for Large-Scale Events Must Integrate Digital and Physical Risks; Warning Must Start with Early Intelligence Gathering",
    summary_en: "This article offers a cybersecurity perspective, emphasizing that threat assessment for large-scale events (such as sporting events, concerts, or political rallies) cannot be limited to physical security. Effective security strategies must conduct a comprehensive assessment of the entire ecosystem—including the venue, suppliers, high-profile individuals, online communities, and transportation infrastructure—well in advance of the event. Since threats often leave traces in the digital layer, early Digital Threat Intelligence is crucial. The article points out that risks from physical security, cybersecurity, executive protection, communications, and legal domains should be viewed as interconnected, rather than existing independently. Successful security planning requires cross-departmental collaboration and the ability to identify key threat signals early, allowing action to be taken before a crisis occurs.",
    tags_en: ["Large-Scale Event Security", "Digital Intelligence", "Physical Security", "Risk Assessment", "Cross-Departmental Collaboration"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/cybersecurity-keeps-events-uneventful", lang: "EN" }
    ]
  },
  {
    id: "20260720-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Claude for Chrome 擴充套件仍存在漏洞：攻擊者可注入偽造點擊事件，誘使AI執行讀取Gmail等敏感任務",
    summary: "資安業者 Manifold 揭露 Anthropic 的 Claude for Chrome 擴充套件仍存在安全漏洞。該漏洞允許攻擊者透過網頁指令碼注入偽造的點擊事件，繞過原本的防護機制。雖然 Claude for Chrome 在五月修補了 ClaudeBleed 漏洞，限制了可自動執行的任務範圍，但其核心問題在於未能正確驗證觸發 AI 自動執行任務的點擊輸入是否來自真實使用者。攻擊者可利用此缺陷，透過網頁指令碼偽造點擊事件，誘使 Claude 執行讀取 Gmail、Google 文件和行事曆等固定任務，造成資料外洩風險。儘管 Manifold 已於五月向 Anthropic 通報，但直到最新版本 1.0.80，此問題仍未修復。為緩解風險，資安專家建議用戶應立即關閉 Claude for Chrome 的「無需詢問即可執行」模式，確保所有 AI 代理任務都必須經過用戶手動核准。",
    tags: ["Anthropic", "Claude for Chrome", "Manifold", "擴充套件漏洞", "點擊事件注入", "AI 代理安全"],
    title_en: "Vulnerability persists in Claude for Chrome extension: Attackers can inject fake click events to trick AI into performing sensitive tasks like reading Gmail",
    summary_en: "Security firm Manifold has disclosed that Anthropic's Claude for Chrome extension still contains a security vulnerability. This flaw allows attackers to inject fabricated click events via web scripts, bypassing existing protective mechanisms. Although Claude for Chrome patched the ClaudeBleed vulnerability in May, limiting the scope of automatically executable tasks, its core issue remains the failure to properly validate whether click inputs that trigger AI automated tasks originate from a genuine user. Attackers can exploit this defect by fabricating click events using web scripts, thereby tricking Claude into executing fixed tasks such as reading Gmail, Google Docs, and Calendar, leading to data leakage risks. Although Manifold reported this to Anthropic in May, the issue remains unpatched even in the latest version 1.0.80. To mitigate the risk, security experts recommend that users immediately disable the 'Execute without prompt' mode for Claude for Chrome, ensuring that all AI agent tasks require manual user approval.",
    tags_en: ["Anthropic", "Claude for Chrome", "Manifold", "Extension Vulnerability", "Click Event Injection", "AI Agent Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177461", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟警示：ACR Stealer惡意軟體透過ClickFix社交工程竊取憑證與企業資料",
    summary: "微軟Defender Experts觀察到，自2026年4月底至6月中旬，竊資惡意軟體ACR Stealer的攻擊活動有所增加。攻擊者主要利用ClickFix社交工程手法，誘騙使用者執行惡意命令，目標是竊取瀏覽器儲存的帳號密碼、Cookie、驗證權杖及企業文件，可能導致帳號被接管和雲端資源未經授權存取。該惡意軟體被認為是以惡意軟體即服務（MaaS）模式提供。文章描述了兩種主要的攻擊鏈：第一類攻擊透過遠端WebDAV分享惡意DLL，並利用Windows內建的rundll32.exe載入，後續執行高度混淆的PowerShell指令碼，最終酬載在記憶體中執行。第二類攻擊則以MSHTA啟動遠端HTA內容，經VBScript和混淆PowerShell下載嵌入圖片的加密資料，並在記憶體中執行。兩類攻擊都利用Windows資料保護API解密本機憑證，並針對PDF、Microsoft 365文件及OneDrive/SharePoint資料夾進行資料收集。微軟建議企業加強員工對偽造驗證提示的警覺，並限制PowerShell、Python、mshta.exe及rundll32.exe執行來自不受信任來源的內容。",
    tags: ["ACR Stealer", "微軟", "社交工程", "PowerShell", "WebDAV", "憑證竊取", "MaaS"],
    title_en: "Microsoft Alert: ACR Stealer Malware Steals Credentials and Corporate Data via ClickFix Social Engineering",
    summary_en: "Microsoft Defender Experts have observed an increase in attack activity from the data-stealing malware ACR Stealer from late April to mid-June 2026. Attackers primarily utilize the ClickFix social engineering technique to trick users into executing malicious commands, aiming to steal stored browser credentials, cookies, authentication tokens, and corporate documents. This could lead to account takeover and unauthorized access to cloud resources. The malware is believed to be delivered via a Malware-as-a-Service (MaaS) model. The article describes two main attack chains: The first type of attack involves sharing malicious DLLs via remote WebDAV and utilizing Windows' built-in rundll32.exe to load them, followed by executing highly obfuscated PowerShell scripts, with the final payload running in memory. The second type of attack initiates remote HTA content using MSHTA, downloading encrypted data containing embedded images via VBScript and obfuscated PowerShell, and executing it in memory. Both types of attacks use the Windows Data Protection API to decrypt local credentials, collecting data from PDF, Microsoft 365 files, and OneDrive/SharePoint folders. Microsoft advises enterprises to strengthen employee awareness regarding fake authentication prompts and to restrict the execution of content from untrusted sources by PowerShell, Python, mshta.exe, and rundll32.exe.",
    tags_en: ["ACR Stealer", "Microsoft", "Social Engineering", "PowerShell", "WebDAV", "Credential Theft", "MaaS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177455", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI開發工具 Cursor 存在重大漏洞：惡意 Git 儲存庫可自動執行任意程式碼",
    summary: "資安業者 Mindgard 揭露 AI 輔助開發工具 Cursor 存在嚴重漏洞。該漏洞的根源在於 Cursor 在載入專案時，會自動從工作目錄等多個位置尋找 Git 執行檔（binaries）。攻擊者只需在儲存庫根目錄放置一個惡意的 `git.exe`，當用戶使用 Cursor 開啟該儲存庫時，系統便會在未經用戶任何點擊、核准或提示的情況下自動執行此惡意程式碼。此漏洞極度危險，無需複雜的攻擊鏈或模型操縱即可觸發。Mindgard 提醒用戶，由於 Cursor 尚未正面處理此問題，建議企業用戶應透過應用程式政策限制工作目錄的執行檔啟動；個人用戶則應僅在隔離環境中開啟不受信任的儲存庫，以降低風險。",
    tags: ["Cursor", "Mindgard", "git.exe", "自動執行程式碼", "AI開發工具", "儲存庫漏洞"],
    title_en: "Major Vulnerability Found in AI Development Tool Cursor: Malicious Git Repository Can Execute Arbitrary Code",
    summary_en: "Security firm Mindgard has disclosed a critical vulnerability in the AI-assisted development tool Cursor. The root cause is that Cursor automatically searches for Git binaries from multiple locations, including the working directory, when loading a project. An attacker only needs to place a malicious `git.exe` in the repository root directory. When a user opens this repository using Cursor, the malicious code executes automatically without any user click, approval, or prompt. This vulnerability is extremely dangerous, as it can be triggered without complex attack chains or model manipulation. Mindgard advises users that, since Cursor has not yet addressed this issue, enterprise users should restrict binary execution in the working directory via application policy; individual users should only open untrusted repositories in an isolated environment to mitigate risk.",
    tags_en: ["Cursor", "Mindgard", "git.exe", "Automatic Code Execution", "AI Development Tool", "Repository Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177454", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "卡巴斯基揭露GoSerpent攻擊鏈：鎖定東南亞政府機構，竊取文件與帳號資料",
    summary: "卡巴斯基全球研究與分析團隊（GReAT）揭露一波針對東南亞政府及外交機構的網路攻擊活動。攻擊者自2025年底開始，利用Go語言開發的遠端控制木馬GoSerpent，對受害電腦進行控制，持續蒐集文件和帳號資料。GoSerpent不僅能執行指令、傳送檔案，還能作為中繼站進入內部網路。攻擊鏈的關鍵步驟包括：首先透過GoSerpent安裝惡意DLL ThumbcacheService，該服務會搜尋Word、Excel、PDF文件，甚至檢查資源回收筒的已刪除檔案，將資料壓縮並存入本地檔案。接著，攻擊者利用Mimikatz和QuarksDumpLocalHash等工具竊取系統登入憑證及本機帳號密碼雜湊。在2026年5月，攻擊者升級至使用Stowaway等工具，建立隱蔽連線，最終透過TmcPayload將先前蒐集的文件傳輸至指定的網路共享位置。研究團隊指出，攻擊者使用阿里雲等合法雲端服務架設C2，增加了偵測難度。此攻擊鏈的目標是持續、隱蔽地竊取高價值資料，實務上建議機構應強化端點防禦、監控DLL行為，並實施嚴格的帳號權限管理，以應對複雜的橫向移動與資料外傳威脅。",
    tags: ["GoSerpent", "Mimikatz", "DLL", "東南亞政府", "網路攻擊", "資料外洩"],
    title_en: "Kaspersky Uncovers GoSerpent Attack Chain: Targeting Southeast Asian Government Agencies to Steal Documents and Account Data",
    summary_en: "Kaspersky's Global Research and Analysis Team (GReAT) has uncovered a wave of cyber attacks targeting government and diplomatic institutions in Southeast Asia. Beginning in late 2025, attackers utilized GoSerpent, a remote control trojan developed in Go language, to compromise victim computers, continuously collecting documents and account data. GoSerpent not only executes commands and transmits files but can also act as a relay to penetrate internal networks. Key steps in the attack chain include: first, installing the malicious DLL ThumbcacheService via GoSerpent. This service searches for Word, Excel, and PDF files, and even checks for deleted files in the recycle bin, compressing the data and saving it to a local file. Next, attackers use tools like Mimikatz and QuarksDumpLocalHash to steal system login credentials and local account password hashes. In May 2026, the attackers upgraded to using tools such as Stowaway to establish covert connections, finally transmitting the previously collected files to a specified network share via TmcPayload. The research team noted that the attackers established C2 using legitimate cloud services like Alibaba Cloud, increasing detection difficulty. The goal of this attack chain is the continuous and covert theft of high-value data. Practically, the team recommends that institutions strengthen endpoint defense, monitor DLL behavior, and implement strict account privilege management to counter complex lateral movement and data exfiltration threats.",
    tags_en: ["GoSerpent", "Mimikatz", "DLL", "Southeast Asian Government", "Cyber Attack", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177443", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fortinet揭露：惡意壓縮檔偽裝字型檔，透過記憶體載入木馬進行網路釣魚攻擊",
    summary: "資安業者Fortinet揭露一波自2026年3月底持續至今的大規模網路釣魚活動。攻擊者利用惡意壓縮檔，以商業合作或付款等主題誘騙目標，並在其中嵌入偽裝成TrueType字型檔（.ttf）的惡意載入器。攻擊流程極為複雜，惡意檔案會先複製到Windows主機特定目錄，並建立排程工作以確保長期存取。更關鍵的是，攻擊者利用LuaJIT等工具，執行將副檔名偽裝成字型檔的惡意Lua指令碼，最終將遠端存取木馬（如Agent Tesla、Remcos、XWorm）和鍵盤側錄程式等惡意程式直接載入受害主機的記憶體中。這種記憶體植入技術，能有效降低傳統資安工具在磁碟層面偵測的機率。Fortinet提醒，使用者應提高警覺，不應輕信看似無害的檔案副檔名，應警惕任何要求開啟或執行可疑壓縮檔的郵件附件。",
    tags: ["Fortinet", "網路釣魚", "惡意軟體", "記憶體攻擊", "Agent Tesla", "TrueType字型檔"],
    title_en: "Fortinet Reveals: Malicious Compressed Files Disguising as Fonts for Memory-Loaded Malware in Phishing Attacks",
    summary_en: "Security vendor Fortinet has revealed a large-scale phishing campaign that has been ongoing since late March 2026. Attackers are using malicious compressed files, luring targets with themes such as business cooperation or payments, and embedding malicious loaders disguised as TrueType font files (.ttf). The attack process is highly complex: the malicious file first copies itself to a specific directory on the Windows host and establishes a scheduled task to ensure persistent access. Crucially, the attackers utilize tools like LuaJIT to execute malicious Lua scripts that disguise their extensions as font files. These scripts ultimately load remote access Trojans (such as Agent Tesla, Remcos, and XWorm) and keyloggers directly into the victim's memory. This memory injection technique significantly reduces the probability of detection by traditional security tools operating at the disk level. Fortinet advises users to raise their awareness, not to trust seemingly harmless file extensions, and to be vigilant against email attachments that require opening or executing suspicious compressed files.",
    tags_en: ["Fortinet", "Phishing", "Malware", "Memory Attack", "Agent Tesla", "TrueType Font"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177450", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Group-IB揭露ClickLock竊資惡意程式：Mac強制登入密碼，竊取密碼與金鑰",
    summary: "資安業者Group-IB揭露新型Mac竊資惡意程式ClickLock。此惡意程式不需系統漏洞或管理權限，而是透過關閉使用者操作的應用程式，使Mac幾乎無法使用，從而迫使受害者輸入系統登入密碼。攻擊鏈推測可能透過ClickFix手法散播，誘騙使用者在假驗證頁面執行惡意指令。ClickLock會顯示偽造的macOS密碼視窗，並透過本機目錄服務驗證密碼，成功後將密碼傳送至攻擊者控制的Telegram機器人。若使用者取消，惡意程式會建立LaunchAgent，持續關閉系統應用程式，並反覆觸發macOS鑰匙圈授權視窗，以解密Chrome等瀏覽器儲存的密碼、Cookie及自動填寫資料。竊取資料範圍廣泛，包括8款瀏覽器、31個加密貨幣錢包擴充套件等。Group-IB提醒，若Mac只剩密碼視窗可操作，應立即強制關機並以安全模式重啟，並立即更改所有相關帳號密碼。",
    tags: ["Group-IB", "ClickLock", "Mac OS", "竊資惡意程式", "LaunchAgent", "Telegram Bot API"],
    title_en: "Group-IB Uncovers ClickLock Data-Theft Malware: Forces Mac Login Password Input, Steals Passwords and Keys",
    summary_en: "Security firm Group-IB has revealed a new Mac data-theft malware called ClickLock. This malware does not require system vulnerabilities or administrative privileges; instead, it disables user-operated applications, rendering the Mac nearly unusable, thereby forcing the victim to input the system login password. The attack chain is speculated to spread via the ClickFix technique, tricking users into executing malicious commands on a fake authentication page. ClickLock displays a fabricated macOS password window and validates the password through the local directory service. Upon success, it transmits the password to an attacker-controlled Telegram bot. If the user cancels, the malware establishes a LaunchAgent, continuously disabling system applications and repeatedly triggering the macOS Keychain authorization window to decrypt passwords, cookies, and autofill data stored in browsers like Chrome. The scope of stolen data is extensive, including 8 types of browsers and 31 cryptocurrency wallet extensions. Group-IB advises that if the Mac is only operable via the password window, the user should immediately force a shutdown and restart in Safe Mode, and immediately change all related account passwords.",
    tags_en: ["Group-IB", "ClickLock", "Mac OS", "Data-Theft Malware", "LaunchAgent", "Telegram Bot API"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177448", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "HTTP/2伺服器流量控制漏洞恐引DoS，OpenSSL及WordPress等多產品面臨多重資安風險",
    summary: "多款HTTP/2伺服器（如Apache Traffic Server、Citrix、F5等）因流量控制漏洞，可能讓未經身分驗證的攻擊者透過特製HTTP請求，耗盡記憶體資源，導致服務阻斷（DoS）。此外，OpenSSL開發團隊修補了未登記CVE的HollowByte漏洞，呼籲用戶儘速升級。WordPress核心存在RCE漏洞CVE-2026-63030，結合REST API與SQL注入，影響全球超過5億網站。F5修補的Nginx系列漏洞CVE-2026-42533，CVSS v4.0為9.2分，可引發堆積緩衝區溢位。另有SonicWall防火牆設備存在CVE-2026-15409（CVSS 10分）等漏洞，已被勒索軟體駭客利用。建議用戶應即時更新所有伺服器、CMS系統及網路設備的最新安全版本，並特別關注高風險的RCE與DoS漏洞修補。",
    tags: ["HTTP/2", "DoS", "OpenSSL", "WordPress", "CVE-2026-63030", "Nginx", "CVE-2026-15409"],
    title_en: "HTTP/2 Server Flow Control Vulnerability May Lead to DoS; Multiple Products Including OpenSSL and WordPress Face Multiple Security Risks",
    summary_en: "Multiple HTTP/2 servers (such as Apache Traffic Server, Citrix, and F5) are susceptible to a flow control vulnerability, which could allow unauthenticated attackers to exhaust memory resources using specially crafted HTTP requests, leading to Denial of Service (DoS). Furthermore, the OpenSSL development team patched an undocumented CVE-free HollowByte vulnerability and urges users to upgrade promptly. The WordPress core contains an RCE vulnerability, CVE-2026-63030, which, when combined with REST API and SQL injection, affects over 500 million websites globally. Another vulnerability patched by F5 in the Nginx series is CVE-2026-42533, with a CVSS v4.0 score of 9.2, which can cause a stack buffer overflow. Additionally, SonicWall firewall devices have vulnerabilities such as CVE-2026-15409 (CVSS 10.0), which have been exploited by ransomware attackers. Users are advised to immediately update all servers, CMS systems, and network devices to the latest secure versions, paying special attention to patches for high-risk RCE and DoS vulnerabilities.",
    tags_en: ["HTTP/2", "DoS", "OpenSSL", "WordPress", "CVE-2026-63030", "Nginx", "CVE-2026-15409"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177447", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA、NSA等發布協調式漏洞揭露指引：建議廠商建立標準化VDP與CVE處理流程",
    summary: "美國CISA、NSA、JPCERT/CC等國際機構共同發布《協調式漏洞揭露計畫指引》，旨在協助軟體製造商及線上服務供應商建立或優化漏洞揭露（CVD）流程。指引建議廠商應公開建立漏洞揭露政策（VDP），並透過符合RFC 9116規範的security.txt檔案提供通報資訊。VDP應包含安全港（Safe Harbor）條款，明確界定善意安全研究的授權範圍。在漏洞處理流程上，建議將通報與一般客服分開，並在收到通報後2至3個工作天內聯繫研究人員，進行風險評估與修補。此外，廠商應依CVE計畫規則判斷是否指派CVE編號，並使用通用安全公告框架（CSAF）等機器可讀格式，公開受影響產品、CVE編號、CVSS評分及修補措施，確保資訊可及性。",
    tags: ["CISA", "NSA", "協調式漏洞揭露", "VDP", "CVE", "安全公告"],
    title_en: "CISA, NSA, and others release coordinated vulnerability disclosure guidelines: Recommending vendors establish standardized VDP and CVE handling processes",
    summary_en: "International organizations such as the U.S. CISA, NSA, and JPCERT/CC have jointly released the 'Coordinated Vulnerability Disclosure Program Guidelines.' These guidelines aim to assist software manufacturers and online service providers in establishing or optimizing their vulnerability disclosure (CVD) processes. The guidelines recommend that vendors publicly establish a Vulnerability Disclosure Policy (VDP) and provide reporting information via a security.txt file compliant with RFC 9116. The VDP should include Safe Harbor clauses, clearly defining the scope of authorized good-faith security research. Regarding vulnerability handling processes, it is recommended that reporting be separated from general customer service, and that researchers be contacted within 2 to 3 business days of receiving a report to conduct risk assessment and patching. Furthermore, vendors should determine whether to assign a CVE ID according to CVE program rules, and use machine-readable formats such as the Common Security Advisory Framework (CSAF) to publicly disclose affected products, CVE IDs, CVSS scores, and remediation measures, ensuring information accessibility.",
    tags_en: ["CISA", "NSA", "Coordinated Vulnerability Disclosure", "VDP", "CVE", "Security Advisory"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177445", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用生成式AI與WebDAV漏洞，大規模發動針對墨西哥的資訊竊取攻擊",
    summary: "資安公司Rapid7從一個暴露的惡意投送伺服器中，回收了一套完整的攻擊工具包，包含1,048個檔案，揭示了攻擊者利用生成式AI（LLMs）輔助進行攻擊開發的完整流程。攻擊的核心技術是利用WebDAV工作目錄劫持（WebDAV working-directory hijack），該漏洞最初由Check Point報告，並在Microsoft於2025年6月修補了原始的IE診斷工具路徑。攻擊者將路徑指向攻擊者控制的WebDAV共享，使Windows在執行合法簽署的程式時，從遠端載入惡意檔案。該工具包不僅包含針對CVE-2025-33053的測試，還擴展到59個針對其他簽署二進位檔的劫持測試。在實際活動中，攻擊者利用一個偽造的政府身份查詢網站（typosquatting），投送了偽裝成PDF的.scr執行檔，該檔案在記憶體中執行.NET資訊竊取器，竊取了加密貨幣錢包、瀏覽器憑證和Telegram會話等敏感資料。防禦建議除了修補已知的漏洞外，更應監控WebClient服務啟動、簽署二進位檔啟動子程序，以及檔案名使用從右到左字序（RTLO）或雙副檔名等異常行為。",
    tags: ["Rapid7", "WebDAV", "CVE-2025-33053", "生成式AI", "資訊竊取", "WebDAV工作目錄劫持"],
    title_en: "Hackers Exploit Generative AI and WebDAV Vulnerability to Launch Large-Scale Information Theft Attack Targeting Mexico",
    summary_en: "Cybersecurity firm Rapid7 recovered a complete attack toolkit from an exposed malicious drop server, containing 1,048 files, which reveals the entire process of attackers utilizing generative AI (LLMs) to assist in attack development. The core technique of the attack is exploiting a WebDAV working-directory hijack. This vulnerability was initially reported by Check Point and was patched by Microsoft in June 2025 for the original IE diagnostic tool path. Attackers redirect the path to a WebDAV share controlled by the attacker, causing Windows to load malicious files from a remote source when executing legitimately signed programs. The toolkit not only includes testing for CVE-2025-33053 but also expands to 59 hijack tests targeting other signed binaries. In actual activity, attackers used a typosquatting fake government identity query website to drop a .scr executable disguised as a PDF. This file executes a .NET information stealer in memory, stealing sensitive data such as cryptocurrency wallets, browser credentials, and Telegram sessions. Defensive recommendations include not only patching known vulnerabilities but also monitoring for abnormal behaviors such as the startup of the WebClient service, the execution of signed binaries' child processes, and the use of right-to-left word order (RTLO) or double extensions.",
    tags_en: ["Rapid7", "WebDAV", "CVE-2025-33053", "Generative AI", "Information Theft", "WebDAV working-directory hijack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/exposed-server-reveals-ai-assisted.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安分析：HollowGraph惡意植入物利用Microsoft 365日曆進行C2通訊與資料竊取",
    summary: "安全公司 Group-IB 揭露了一種名為 HollowGraph 的間諜植入物，它利用受控的 Microsoft 365 帳戶日曆功能作為命令與控制（C2）通道。該惡意程式是一個 .NET DLL，其核心機制是將任務指令和竊取資料偽裝成日曆事件的附件，並將日期設定在遠期（例如 2050 年），以規避監控。它透過標準的 Microsoft Graph API 流量進行操作，使得活動看起來像是正常的 M365 聊天。植入物使用混合 RSA 和 AES-256 加密來保護所有傳輸的資料。此外，它還利用 DNS 查詢，透過接收的 IPv6 AAAA 記錄，來刷新應用程式的 Entra ID（Azure AD）登入憑證（如 Client Secret），此通道是明文傳輸。由於該攻擊利用了合法服務的正常功能，因此沒有可部署的軟體漏洞修補。防禦建議包括：監控日曆中帶有遠期日期、特定 GUID 或特定附件名稱的事件；限制和審計可存取 Graph 的客戶端憑證 OAuth 應用程式；以及監測應用程式是否進行日曆變更。",
    tags: ["HollowGraph", "Microsoft 365", "Graph API", "C2", "間諜植入物", "Azure AD", "Group-IB"],
    title_en: "Cybersecurity Analysis: HollowGraph Malware Implant Uses Microsoft 365 Calendar for C2 Communication and Data Exfiltration",
    summary_en: "Security company Group-IB has revealed a spyware implant called HollowGraph, which utilizes the controlled calendar functionality of Microsoft 365 as a Command and Control (C2) channel. The malicious program is a .NET DLL whose core mechanism is to disguise task commands and stolen data as calendar event attachments, setting the dates far into the future (e.g., 2050) to evade monitoring. It operates through standard Microsoft Graph API traffic, making the activity appear as normal M365 chat. The implant uses a hybrid RSA and AES-256 encryption to protect all transmitted data. Furthermore, it leverages DNS queries to refresh the application's Entra ID (Azure AD) login credentials (such as Client Secret) via received IPv6 AAAA records, which are transmitted in plaintext. Because the attack exploits the normal functionality of a legitimate service, there is no software vulnerability patch to deploy. Defensive recommendations include: monitoring calendar events that contain future dates, specific GUIDs, or specific attachment names; restricting and auditing client credential OAuth applications that can access Graph; and monitoring applications that perform calendar modifications.",
    tags_en: ["HollowGraph", "Microsoft 365", "Graph API", "C2", "Spyware Implant", "Azure AD", "Group-IB"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/hollowgraph-malware-hides-c2-and-stolen.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-046",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "WordPress核心漏洞與SonicWall零日攻擊回顧：多重RCE與資料外洩威脅警示",
    summary: "本週資安重點涵蓋多個高風險漏洞。首先，Searchlight Cyber揭露了WordPress核心的wp2shell漏洞，這是一個結合了CVE-2026-63030（REST API批次路由混淆）和CVE-2026-60137（核心SQL注入）的組合攻擊，允許未經身份驗證的攻擊者執行遠端程式碼（RCE）。由於WordPress在全球的廣泛部署，修補建議是盡快修補，並部署控制措施以偵測潛在的後門。其次，資安廠商觀察到SonicWall Secure Mobile Access (SMA) 設備遭到零日攻擊，涉及CVE-2026-15409和CVE-2026-15410，可導致任意指令執行。此外，CISA已將一個影響Microsoft SharePoint Server的漏洞（CVE-2026-58644）加入KEV清單，該漏洞允許未經授權的攻擊者執行任意程式碼。另有OpenSSL的DoS缺陷，可透過極小數據包耗盡伺服器記憶體。整體而言，攻擊者利用多種漏洞，從WordPress到VPN設備，持續威脅著企業的關鍵基礎設施。",
    tags: ["WordPress", "CVE-2026-63030", "CVE-2026-60137", "SonicWall", "CVE-2026-15409", "RCE", "CISA"],
    title_en: "WordPress Core Vulnerability and SonicWall Zero-Day Attack Review: Multi-RCE and Data Leakage Threat Alert",
    summary_en: "This week's cybersecurity focus covers multiple high-risk vulnerabilities. First, Searchlight Cyber revealed the wp2shell vulnerability in the WordPress core. This is a combined attack utilizing CVE-2026-63030 (REST API batch routing confusion) and CVE-2026-60137 (core SQL injection), which allows unauthenticated attackers to execute remote code (RCE). Given WordPress's widespread global deployment, the patch recommendation is to apply fixes promptly and deploy control measures to detect potential backdoors. Secondly, security vendors observed zero-day attacks targeting SonicWall Secure Mobile Access (SMA) devices, involving CVE-2026-15409 and CVE-2026-15410, which could lead to arbitrary command execution. Furthermore, CISA has added a vulnerability affecting Microsoft SharePoint Server (CVE-2026-58644) to the KEV catalog. This vulnerability allows unauthorized attackers to execute arbitrary code. There is also a DoS flaw in OpenSSL, which can deplete server memory using extremely small data packets. Overall, attackers are utilizing multiple types of vulnerabilities, from WordPress to VPN devices, continuously threatening corporate critical infrastructure.",
    tags_en: ["WordPress", "CVE-2026-63030", "CVE-2026-60137", "SonicWall", "CVE-2026-15409", "RCE", "CISA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/weekly-recap-wordpress-rce-sonicwall-0.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄羅斯情報單位大規模劫持歐洲與烏克蘭網路攝影機，監控軍事運輸與戰場動態",
    summary: "根據荷蘭民軍情報與軍事情報單位（AIVD/MIVD）的報告，至少有俄羅斯情報單位正在系統性地劫持歐洲和烏克蘭的網路攝影機。這些監控系統被用於追蹤軍事運輸路線、前往基輔的武器裝運，以及烏克蘭部隊的具體位置。在烏克蘭，攝影機的存取甚至被用於嘗試癱瘓烏軍人員和摧毀設備。攻擊者通常透過掃描網際網路，尋找暴露的設備，並利用預設密碼、過時韌體或出廠設定的漏洞進入系統。這些攻擊不需零日漏洞，僅需透過圖像識別軟體自動搜尋軍事車輛和貨物。專家建議的修復措施包括：首先找出所有暴露在公共網際網路的攝影機；關閉埠轉發和 UPnP，改用 VPN 進行存取；更換預設憑證並啟用多因素驗證（MFA）；並將敏感區域（如後勤路線）排除在監控範圍之外。修復的重點不僅是修補設備，更是將其從公共網際網路環境中移除，並嚴格控制其視野。",
    tags: ["俄羅斯情報", "網路攝影機", "AIVD", "MIVD", "OT/ICS 設備漏洞", "預設密碼", "網路監控"],
    title_en: "Russian Intelligence Units Mass Hijack European and Ukrainian Network Cameras to Monitor Military Transport and Battlefield Dynamics",
    summary_en: "According to a report from the Netherlands' AIVD/MIVD (Intelligence and Military Intelligence Service), Russian intelligence units are systematically hijacking network cameras across Europe and Ukraine. These surveillance systems are being used to track military transport routes, weapon shipments heading to Kyiv, and the precise locations of Ukrainian forces. In Ukraine, the cameras' access has even been used in attempts to disable Ukrainian personnel and destroy equipment. Attackers typically scan the internet, looking for exposed devices, and gain entry using default passwords, outdated firmware, or factory-set vulnerabilities. These attacks do not require zero-day exploits; they only need image recognition software to automatically search for military vehicles and cargo. Experts recommend remediation measures including: first, identifying all cameras exposed to the public internet; disabling port forwarding and UPnP, and using VPNs for access; changing default credentials and enabling Multi-Factor Authentication (MFA); and excluding sensitive areas (such as logistics routes) from surveillance coverage. The focus of remediation is not just patching the equipment, but removing it from the public internet environment and strictly controlling its field of view.",
    tags_en: ["Russian Intelligence", "Network Cameras", "AIVD", "MIVD", "OT/ICS Device Vulnerabilities", "Default Passwords", "Network Surveillance"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/russian-intelligence-hacks-ip-cameras.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安專家警告：漏洞暴露窗口持續擴大，修補速度無法追上攻擊速度",
    summary: "本文指出，資安領域最關鍵的指標已從「發現多少漏洞」轉移到「漏洞暴露窗口」（Exposure Window）——即漏洞可被利用到被修復之間的時間間隙。作者強調，這個窗口目前過於寬廣，平均網路犯罪的爆發時間已降至 29 分鐘，遠快於業界（如 PCI DSS）允許的修復期限。問題核心在於「動員能力」（Mobilization）：企業的修復流程和組織複雜性，使得修補工作無法跟上攻擊者的速度。儘管有 CISA 等政策轉向依據漏洞可利用性而非 CVSS 分數，但修復流程仍受限於人工審批、部門間交接和變更窗口，導致許多高風險漏洞仍未修補。因此，資安團隊必須從傳統的「修補覆蓋率」轉向採用 SOC 團隊的「速度型指標」，將重點放在「攻擊路徑分析」（Attack Path Analysis），以縮小實際的「爆發半徑」（Blast Radius）。",
    tags: ["漏洞暴露窗口", "攻擊路徑分析", "CISA", "CVSS", "動員能力", "資安修補"],
    title_en: "Cybersecurity Experts Warn: Vulnerability Exposure Window Continues to Widen, Patching Speed Cannot Keep Up with Attack Speed",
    summary_en: "This article points out that the most critical metric in the cybersecurity domain has shifted from 'how many vulnerabilities are discovered' to the 'Exposure Window'—the time gap between when a vulnerability can be exploited and when it is patched. The author emphasizes that this window is currently too wide, as the average time for a network crime to erupt has dropped to 29 minutes, far faster than the remediation deadlines allowed by the industry (such as PCI DSS). The core problem lies in 'Mobilization': corporate patching processes and organizational complexity prevent remediation efforts from keeping pace with attackers. Although policies like those from CISA are shifting focus from CVSS scores to vulnerability exploitability, the patching process remains constrained by manual approvals, departmental handoffs, and change windows, leaving many high-risk vulnerabilities unpatched. Therefore, cybersecurity teams must transition from the traditional 'patch coverage rate' to adopting 'speed metrics' used by SOC teams, focusing on 'Attack Path Analysis' to reduce the actual 'Blast Radius'.",
    tags_en: ["Exposure Window", "Attack Path Analysis", "CISA", "CVSS", "Mobilization", "Cybersecurity Patching"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/mythos-didnt-break-your-security.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-049",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "7-Zip XZ 壓縮檔處理漏洞 (CVE-2026-14266)：堆緩衝區溢出可能允許執行惡意程式碼",
    summary: "7-Zip 在處理 XZ 壓縮格式的區塊資料時，存在一個堆緩衝區溢出漏洞 (CVE-2026-14266)。該漏洞源於解碼器在過濾輸出時，錯誤地將完整的輸出緩衝區長度傳遞給解碼器，而非剩餘空間，導致了越界寫入條件。若攻擊者成功利用，可以在當前程序權限下執行程式碼。該漏洞的 CVSS 3.0 評分為 7.0（高風險），攻擊向量為本地 (AV:L)，需要攻擊者誘騙受害者開啟惡意檔案。Trend Micro 的 Zero Day Initiative (ZDI) 已詳細說明此漏洞，並在 7-Zip 26.02 版本中修補。建議所有經常開啟外部壓縮檔案的機器，應立即手動升級至 7-Zip 26.02 或更高版本。此外，任何使用 7-Zip XZ 解碼器的產品，也需要其各自的廠商修補。",
    tags: ["7-Zip", "CVE-2026-14266", "堆緩衝區溢出", "XZ 格式", "緩存溢出", "本地攻擊"],
    title_en: "7-Zip XZ Archive Processing Vulnerability (CVE-2026-14266): Heap Buffer Overflow May Allow Remote Code Execution",
    summary_en: "A heap buffer overflow vulnerability (CVE-2026-14266) exists in 7-Zip when processing block data in the XZ compression format. The vulnerability stems from the decoder incorrectly passing the full output buffer length to the decoder during output filtering, instead of the remaining space, leading to an out-of-bounds write condition. If successfully exploited, an attacker can execute code with the current program's privileges. The vulnerability has a CVSS 3.0 score of 7.0 (High Risk), with a local attack vector (AV:L), requiring the attacker to trick the victim into opening a malicious file. Trend Micro's Zero Day Initiative (ZDI) has detailed this vulnerability and patched it in 7-Zip version 26.02. It is recommended that all machines frequently opening external compressed files immediately manually upgrade to 7-Zip 26.02 or later. Furthermore, any product utilizing the 7-Zip XZ decoder also requires patching from its respective vendor.",
    tags_en: ["7-Zip", "CVE-2026-14266", "Heap Buffer Overflow", "XZ Format", "Buffer Overflow", "Local Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-7-zip-vulnerability-could-let.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "雅詩蘭黛遭駭：利用 Oracle E-Business Suite 漏洞外洩員工個人資料",
    summary: "化妝品巨頭雅詩蘭黛（Estée Lauder）宣布，其員工的個人資料已遭駭客入侵，受影響的系統是公司用於人力資源（HR）管理的 Oracle E-Business Suite。入侵事件發生在 2025 年 8 月 9 日左右。雖然雅詩蘭黛未公開具體漏洞，但時間點與針對 Oracle E-Business Suite 的 CVE-2025-61882 大規模利用活動吻合。該漏洞允許攻擊者繞過身份驗證，並透過 BI Publisher Integration 組件遠端執行程式碼，可能導致敏感的 HR 和業務資料外洩。外洩的資料包括全名、郵遞區號、電子郵件、出生日期、社會安全碼（SSNs）、護照號碼、銀行帳戶資訊、健康資訊和薪資報告等。此漏洞已在 2025 年 10 月修補，且已被 Clop 勒索軟體組織利用。公司已提供身份監控服務，並建議受影響員工提高警惕，防範身份盜竊和詐騙。",
    tags: ["雅詩蘭黛", "Estée Lauder", "Oracle E-Business Suite", "CVE-2025-61882", "資料外洩", "HR 系統"],
    title_en: "Estée Lauder Hacked: Employee Personal Data Leaked via Oracle E-Business Suite Vulnerability",
    summary_en: "Cosmetics giant Estée Lauder announced that its employees' personal data was compromised by hackers. The affected system is the Oracle E-Business Suite, which the company uses for Human Resources (HR) management. The intrusion occurred around August 9, 2025. Although Estée Lauder did not disclose the specific vulnerability, the timing aligns with the large-scale exploitation of CVE-2025-61882 targeting Oracle E-Business Suite. This vulnerability allows attackers to bypass authentication and execute remote code via the BI Publisher Integration component, potentially leading to the leakage of sensitive HR and business data. The leaked data includes full names, zip codes, email addresses, dates of birth, Social Security Numbers (SSNs), passport numbers, bank account information, health information, and payroll reports. This vulnerability was patched in October 2025 and has been exploited by the Clop ransomware group. The company has provided identity monitoring services and advises affected employees to remain vigilant against identity theft and fraud.",
    tags_en: ["Estée Lauder", "Estée Lauder", "Oracle E-Business Suite", "CVE-2025-61882", "Data Leakage", "HR System"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/est-e-lauder-discloses-data-breach-via-oracle-e-business-flaw", lang: "EN" }
    ]
  },
  {
    id: "20260720-051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SonicWall SMA1000 零日漏洞遭利用：SSRF與命令注入鏈攻擊，植入客製化惡意軟體",
    summary: "資安廠商 SonicWall 的 SMA1000 系列 VPN 設備，曾遭受利用兩個零日漏洞的攻擊鏈。受影響的設備型號包括 SMA1000 6210、7210 和 8200v。攻擊者利用的漏洞包括 CVE-2026-15409（關鍵的伺服器端請求偽造 SSRF）和 CVE-2026-15410（高嚴重性命令注入）。攻擊鏈的初期，駭客利用 SSRF 漏洞，透過 `/wsproxy` 端點建立未經身份驗證的 WebSocket 通道，暴露了內部應用程式，進而竊取設備的 `product_uuid`。接著，攻擊者利用命令注入漏洞，以 root 權限執行指令，成功植入名為 KNUCKLEBALL 的客製化惡意軟體。該惡意軟體進一步部署了 Sou5（作為反向代理）和 ORANGETAIL（客製化 Java webshell），用於維持隱蔽存取和遠端執行加密負載。SonicWall 已發布修補程式，建議客戶立即升級至版本 12.4.3-03453 或 12.5.0-02835。建議用戶應立即修補，並審查設備的內部網路隔離與監控機制。",
    tags: ["SonicWall", "SMA1000", "CVE-2026-15409", "CVE-2026-15410", "SSRF", "命令注入", "零日漏洞"],
    title_en: "SonicWall SMA1000 Zero-Day Vulnerability Exploitation: SSRF and Command Injection Chain Attack Implant Custom Malware",
    summary_en: "The SMA1000 series VPN devices from cybersecurity vendor SonicWall were targeted by an attack chain exploiting two zero-day vulnerabilities. Affected models include SMA1000 6210, 7210, and 8200v. The vulnerabilities exploited were CVE-2026-15409 (a critical Server-Side Request Forgery, SSRF) and CVE-2026-15410 (a high-severity Command Injection). In the initial phase of the attack chain, hackers leveraged the SSRF vulnerability to establish an unauthenticated WebSocket channel via the `/wsproxy` endpoint, exposing internal applications and subsequently stealing the device's `product_uuid`. Next, the attackers utilized the command injection vulnerability to execute commands with root privileges, successfully implanting custom malware named KNUCKLEBALL. This malware further deployed Sou5 (as a reverse proxy) and ORANGETAIL (a custom Java webshell) to maintain covert access and execute encrypted payloads. SonicWall has released patches and recommends that customers immediately upgrade to version 12.4.3-03453 or 12.5.0-02835. Users are advised to patch immediately and review the device's internal network isolation and monitoring mechanisms.",
    tags_en: ["SonicWall", "SMA1000", "CVE-2026-15409", "CVE-2026-15410", "SSRF", "Command Injection", "Zero-Day Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/sonicwall-sma1000-flaws-exploited-as-zero-days-to-push-custom-malware", lang: "EN" }
    ]
  },
  {
    id: "20260720-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露四款主流 AI 程式碼代理（含 Cursor、Codex、Gemini CLI）可透過沙盒逃逸，執行惡意指令",
    summary: "安全研究人員透過「沙盒逃逸」的方式，在四款廣泛使用的 AI 程式碼代理工具中發現了安全漏洞，包括 Cursor、OpenAI 的 Codex、Google 的 Gemini CLI 和 Antigravity。這些漏洞的本質並非直接攻擊沙盒，而是利用代理寫入的檔案，被沙盒外部的信任工具（如 IDE、Python 擴充功能、Git 或本地服務）讀取或執行，從而觸發惡意指令。攻擊的觸發點是「提示注入」（Prompt injection），惡意指令可以植入 README、Issue 或依賴項中。具體修補資訊包括：Cursor 的一個工作區控制的 .claude hook 配置被利用進行未沙盒化的指令執行，已追蹤為 CVE-2026-48124，並在 3.0.0 版本修復；Codex CLI 的「安全」指令白名單信任 `git show`，但實際呼叫並非唯讀，OpenAI 已在 v0.95.0 修補，並待發布 CVE。此外，一個涉及 Docker socket 的漏洞同時影響了 Codex、Cursor 和 Gemini CLI。修補建議是安全團隊應關注代理留下的檔案內容，而非僅檢查沙盒是否存在，應實施監控機制，確保信任的本地工具不會執行代理寫入的內容。",
    tags: ["AI 程式碼代理", "沙盒逃逸", "Cursor", "Codex", "Gemini CLI", "提示注入", "CVE-2026-48124"],
    title_en: "Research Reveals Four Major AI Code Agents (Including Cursor, Codex, and Gemini CLI) Can Escape Sandboxes to Execute Malicious Commands",
    summary_en: "Security researchers discovered vulnerabilities in four widely used AI code agent tools—Cursor, OpenAI's Codex, Google's Gemini CLI, and Antigravity—by exploiting 'sandbox escape' mechanisms. The core issue is not a direct attack on the sandbox itself, but rather the utilization of files written by the agent that are subsequently read or executed by trusted tools outside the sandbox (such as IDEs, Python extensions, Git, or local services), thereby triggering malicious commands. The attack vector is 'Prompt injection,' where malicious commands can be embedded in READMEs, Issues, or dependencies. Specific patch details include: A workspace-controlled `.claude` hook configuration in Cursor was exploited for unsandboxed command execution, tracked as CVE-2026-48124, and patched in version 3.0.0; the Codex CLI's 'safe' command whitelist trusts `git show`, but the actual call is not read-only. OpenAI has patched this in v0.95.0, with a CVE pending release. Furthermore, a vulnerability involving the Docker socket simultaneously affects Codex, Cursor, and Gemini CLI. The remediation advice is that security teams should focus on the content of files left by the agents, rather than merely checking for the existence of a sandbox. They should implement monitoring mechanisms to ensure that trusted local tools do not execute content written by the agents.",
    tags_en: ["AI Code Agents", "Sandbox Escape", "Cursor", "Codex", "Gemini CLI", "Prompt Injection", "CVE-2026-48124"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cursor-codex-gemini-cli-antigravity-hit-by-sandbox-escapes", lang: "EN" }
    ]
  },
  {
    id: "20260720-053",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞：iPhone 18 Pro 搭載 A20 Pro 晶片，採用 2nm 製程與 WMCM 封裝技術",
    summary: "本文根據傳聞報導，指出未來 iPhone 18 Pro 和 iPhone Ultra 將搭載 A20 Pro 晶片。該晶片預計將是蘋果首款採用台積電（TSMC）2 奈米（2nm）製程的 iPhone 晶片，這將帶來更高的能效和更強的運算能力。此外，A20 Pro 還預計首次採用「晶圓級多晶片模組」（Wafer-Level Multi-Chip Module, WMCM）封裝技術。WMCM 允許系統單晶片（SoC）和動態隨機存取記憶體（DRAM）等組件在晶圓級直接整合，無需額外的介面層或基板。這不僅能提升晶片性能，更能在物理上縮短與記憶體的距離，預期能大幅提升 AI 處理和高階遊戲的效能，並降低功耗。由於 iOS 27 預計會高度聚焦 AI 功能，因此 A20 Pro 在 AI 任務上的能力預期會特別突出。此為傳聞資訊，實際產品規格仍待蘋果官方公布。",
    tags: ["iPhone 18 Pro", "A20 Pro", "2nm", "TSMC", "WMCM", "iOS 27"],
    title_en: "Rumor: iPhone 18 Pro to feature A20 Pro chip, utilizing 2nm process and WMCM packaging technology",
    summary_en: "According to rumor reports, the future iPhone 18 Pro and iPhone Ultra are expected to be equipped with the A20 Pro chip. This chip is anticipated to be the first iPhone chip from Apple to utilize TSMC's 2 nanometer (2nm) process, which will deliver higher energy efficiency and enhanced computing power. Furthermore, the A20 Pro is also expected to debut the 'Wafer-Level Multi-Chip Module' (WMCM) packaging technology. WMCM allows components such as the System-on-Chip (SoC) and Dynamic Random Access Memory (DRAM) to be directly integrated at the wafer level, eliminating the need for external interface layers or substrates. This not only boosts chip performance but also physically shortens the distance to memory, which is expected to significantly improve AI processing and high-end gaming performance while reducing power consumption. Given that iOS 27 is expected to heavily focus on AI functionalities, the A20 Pro's capabilities in AI tasks are anticipated to be particularly prominent. Please note that this information is based on rumors, and actual product specifications are subject to official announcement by Apple.",
    tags_en: ["iPhone 18 Pro", "A20 Pro", "2nm", "TSMC", "WMCM", "iOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/iphone-18-pros-new-a20-chip-rumored-to-bring-two-major-upgrades", lang: "EN" }
    ]
  },
  {
    id: "20260720-054",
    trackers: ["os"],
    category: "Apple",
    title: "App Store新應用程式激增，Apple強調審核標準與安全性不變",
    summary: "根據《紐約時報》援引 Sensor Tower 的數據報告指出，App Store在2026年上半年新發布的應用程式數量翻了一番，但整體下載量僅增長了2%。這顯示應用程式的發布速度遠超用戶的實際使用增長。報告提到，開發者正利用「vibecoding」等新工具快速製作並上架應用。針對應用程式提交激增帶來的審核壓力，Apple 發言人 Peter Ajemian 表示，Apple 仍能持續在 48 小時內審核 90% 的提交內容。他強調，無論應用程式是透過何種方式開發，所有應用程式都必須符合 Apple 對品質、隱私和安全性的高標準。",
    tags: ["App Store", "Apple", "vibecoding", "應用程式開發", "安全審核", "Sensor Tower"],
    title_en: "Surge in New App Store Applications, Apple Reaffirms Unchanged Review Standards and Security",
    summary_en: "According to data reported by Sensor Tower, cited by The New York Times, the number of applications released on the App Store in the first half of 2026 doubled, yet overall downloads only increased by 2%. This indicates that the pace of application release far exceeds the actual growth in user usage. The report mentions that developers are utilizing new tools, such as 'vibecoding,' to rapidly create and list applications. Regarding the increased review pressure caused by the surge in submissions, Apple spokesperson Peter Ajemian stated that Apple can still review 90% of submissions within 48 hours. He emphasized that regardless of how the applications are developed, all apps must comply with Apple's high standards for quality, privacy, and security.",
    tags_en: ["App Store", "Apple", "vibecoding", "App Development", "Security Review", "Sensor Tower"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/report-app-store-added-nearly-as-many-new-apps-in-h1-2026-as-in-all-of-2025", lang: "EN" }
    ]
  },
  {
    id: "20260720-055",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 預告：Apple Music 將加入多項新功能，提升用戶體驗與內容管理",
    summary: "本文介紹了 iOS 27 系統版本預計為 Apple Music 帶來多項改進與新功能。這些更新旨在豐富用戶的音樂聆聽體驗與內容管理能力。雖然原文未提供具體功能細節，但整體趨勢顯示 Apple 正在持續優化其生態系統內的應用程式。對於開發者和用戶而言，應關注這些系統級的更新，以確保應用程式能順利適應新的介面和功能。建議用戶在系統更新時，留意 Apple 官方發布的相關說明，以掌握所有新增的特性，並確保設備能獲得最佳的軟體支援。",
    tags: ["Apple Music", "iOS 27", "Apple", "系統更新", "用戶體驗"],
    title_en: "iOS 27 Preview: Apple Music to Feature Multiple New Functions, Enhancing User Experience and Content Management",
    summary_en: "This article introduces several anticipated improvements and new features for Apple Music in the iOS 27 operating system version. These updates aim to enrich the user's music listening experience and content management capabilities. Although the original text does not provide specific feature details, the overall trend suggests that Apple is continuously optimizing its applications within its ecosystem. Developers and users should pay attention to these system-level updates to ensure that applications can smoothly adapt to the new interfaces and functions. Users are advised to monitor official Apple announcements during system updates to grasp all new features and ensure their devices receive optimal software support.",
    tags_en: ["Apple Music", "iOS 27", "Apple", "System Update", "User Experience"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-music-in-ios-27-five-new-features-coming-to-your-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260720-056",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iOS 26.6 即將發布：重點在於優化 Spotlight 索引，為 iOS 27 升級做準備",
    summary: "Apple 即將發布 iOS 26.6 版本，目前已發布 Release Candidate (RC)，預計在未來兩週內對公眾開放。雖然 iOS 26.6 本身沒有太多新功能，但其核心目的是「優化」iPhone 的 Spotlight 索引。此優化是為了為預計在今年秋季發布的 iOS 27 版本做準備，確保用戶在升級到 iOS 27 時，索引建置過程能更快速。除了 Spotlight 優化外，該版本也包含了一些錯誤修復和安全更新，但 Apple 尚未詳細公布具體的安全修補內容。用戶應留意官方發布的修補清單，並在適當時間進行更新，以確保系統穩定性及為下一代 iOS 系統做好準備。",
    tags: ["Apple", "iOS 26.6", "iOS 27", "Spotlight 索引", "安全更新", "macOS"],
    title_en: "Apple iOS 26.6 to be Released: Focus on Optimizing Spotlight Index for iOS 27 Upgrade Preparation",
    summary_en: "Apple is preparing to release iOS 26.6, which is currently available as a Release Candidate (RC) and is expected to be publicly available within the next two weeks. Although iOS 26.6 itself does not introduce many new features, its core purpose is to 'optimize' the iPhone's Spotlight index. This optimization is intended to prepare for the iOS 27 version, which is expected to be released this autumn, ensuring that the index building process is faster when users upgrade to iOS 27. In addition to Spotlight optimization, the version includes some bug fixes and security updates, though Apple has not yet disclosed the specific security patch details. Users should monitor the official patch list and update at an appropriate time to ensure system stability and preparation for the next generation of iOS.",
    tags_en: ["Apple", "iOS 26.6", "iOS 27", "Spotlight Index", "Security Update", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/ios-26-6-new-features-release-date-more", lang: "EN" }
    ]
  },
  {
    id: "20260720-057",
    trackers: ["os"],
    category: "Apple",
    title: "WhatsApp Mac App 推出 Liquid Glass 設計更新，提升桌面與行動裝置介面一致性",
    summary: "WhatsApp 正逐步將其 Liquid Glass 設計語言應用至 Mac 應用程式，旨在縮小桌面版與 iOS/iPadOS 之間的介面差異。此更新已開始在 Mac App Store 上滾動推出，主要改動包括重新設計的側邊欄、更新的聊天欄和附件選單。新版介面增加了專門的側邊欄區塊來管理「鎖定聊天」和「社群」，使鎖定聊天需透過認證才能進入，與 iPhone 體驗一致。此舉標誌著 WhatsApp 跨平台設計語言的整合進展，讓 Mac 應用程式的介面設計與 Apple 最新作業系統的設計趨勢保持一致。然而，目前此 Mac App 的更新仍僅限於部分用戶，預計未來幾週會逐步擴大覆蓋範圍。",
    tags: ["WhatsApp", "Mac App", "Liquid Glass", "Apple", "UI/UX", "跨平台"],
    title_en: "WhatsApp Mac App rolls out Liquid Glass design update, improving consistency between desktop and mobile interfaces",
    summary_en: "WhatsApp is gradually applying its Liquid Glass design language to the Mac application, aiming to reduce the interface disparity between the desktop version and iOS/iPadOS. This update has begun rolling out on the Mac App Store, with major changes including a redesigned sidebar, updated chat fields, and attachment menus. The new interface adds a dedicated sidebar section to manage 'Locked Chats' and 'Communities,' requiring authentication to access Locked Chats, aligning with the iPhone experience. This marks progress in WhatsApp's cross-platform design language integration, ensuring the Mac application's interface design remains consistent with Apple's latest operating system design trends. However, this Mac App update is currently limited to a subset of users and is expected to gradually expand its coverage in the coming weeks.",
    tags_en: ["WhatsApp", "Mac App", "Liquid Glass", "Apple", "UI/UX", "Cross-platform"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/whatsapp-rolling-out-liquid-glass-revamp-to-its-mac-app", lang: "EN" }
    ]
  },
  {
    id: "20260720-058",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 4 程式碼洩漏：預示未來 iPhone Ultra 將搭載雙電池多功能設計",
    summary: "本文根據 iOS 27 beta 4 的程式碼分析，揭露了 Apple 未來旗艦機型 iPhone Ultra 的潛在硬體設計。程式碼字串明確提及了「多電池 iPhone」的設計，這與先前網路洩漏的資訊一致。該機型預計將搭載兩顆獨立電池，分別容量為 1,921mAh 和 2,962mAh，總容量達 4,883mAh。雖然這屬於 iPhone 首次採用，但類似的雙電池設計在折疊式智慧型手機中並非罕見。這些資訊支持了市場預期，該 iPhone Ultra 預計將於九月初發表。本內容為程式碼分析與產業情報，非安全漏洞或修補公告，用戶無需採取額外安全措施。",
    tags: ["iOS 27", "iPhone Ultra", "Apple", "多電池", "程式碼洩漏", "硬體設計"],
    title_en: "iOS 27 Beta 4 Code Leak Reveals Potential Dual-Battery Design for Future iPhone Ultra",
    summary_en: "Based on an analysis of the iOS 27 beta 4 code, this article reveals potential hardware designs for Apple's future flagship model, the iPhone Ultra. Code strings explicitly mention a \"dual-battery iPhone\" design, which aligns with previously leaked information. The model is expected to feature two independent batteries, with capacities of 1,921mAh and 2,962mAh, totaling 4,883mAh. Although this would be a first for the iPhone, a dual-battery design is not uncommon in foldable smartphones. This information supports market expectations that the iPhone Ultra is slated for release in early September. Please note that this content is based on code analysis and industry intelligence, and is not a security vulnerability or patch announcement; users do not need to take any additional security measures.",
    tags_en: ["iOS 27", "iPhone Ultra", "Apple", "Dual-Battery", "Code Leak", "Hardware Design"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/ios-27-beta-4-mentions-new-iphone-model-with-multi-battery-feature", lang: "EN" }
    ]
  },
  {
    id: "20260720-059",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 4 上線：開發者可預覽 Siri AI、動態島與控制中心新功能",
    summary: "Apple 已發布 iOS 27 Beta 4，為開發者提供最新的預覽更新。此版本主要圍繞 Siri AI、Apple Intelligence、Liquid Glass 介面優化，並包含多項生活品質提升。本次 Beta 4 的更新內容包括：當透過動態島或主畫面下滑呼叫 Siri 時，新增了「啟動畫面」；修復了 Beta 3 版本引入的深度效果錯誤；Siri 支援了兩種具備語速與表現力調整的增強語音；此外，控制中心現已支援 AirPods Pro 的全新自適應模式滑桿。由於這是 Beta 版本，文章提醒用戶不建議在主要設備上安裝，預計在秋季與新 iPhone 系列一同正式發布。此更新支援 iPhone 11 及更新機型，但部分 Siri AI 功能仍需較新硬體支援。",
    tags: ["iOS 27", "Apple Intelligence", "Siri AI", "Beta 測試", "動態島", "Apple 生態系"],
    title_en: "iOS 27 Beta 4 Released: Developers Can Preview New Features for Siri AI, Dynamic Island, and Control Center",
    summary_en: "Apple has released iOS 27 Beta 4, providing developers with the latest preview update. This version primarily focuses on Siri AI, Apple Intelligence, and Liquid Glass interface optimizations, along with multiple quality-of-life improvements. The updates in Beta 4 include: a new 'launch screen' when calling Siri via the Dynamic Island or by swiping down from the home screen; a fix for the depth effect error introduced in Beta 3; Siri now supports two enhanced voices with adjustable speed and expressiveness; and the Control Center now supports a new adaptive mode slider for AirPods Pro. Since this is a Beta version, the article advises users not to install it on primary devices, as it is expected to be officially released with the new iPhone series in the fall. This update supports iPhone 11 and newer models, but some Siri AI features still require newer hardware support.",
    tags_en: ["iOS 27", "Apple Intelligence", "Siri AI", "Beta Testing", "Dynamic Island", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/heres-whats-new-with-ios-27-beta-4", lang: "EN" }
    ]
  },
  {
    id: "20260720-060",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iOS 26.6 RC 版本預告：透過 Spotlight 索引功能提前為 iOS 27 進行準備",
    summary: "Apple 發布了 iOS 26.6 的 RC 版本，官方發行說明特別強調其中包含一個關鍵功能：Spotlight 索引。此舉的目的是讓用戶的 iPhone 在升級到 iOS 27 時能更順暢地使用新功能。過去在 iOS 27 Beta 階段，開發者曾注意到 iPhone 進行索引作業會耗費極長時間。為避免公眾遇到類似的體驗，Apple 選擇在 iOS 26.6 版本中提前執行大部分的索引工作。因此，如果用戶安裝了 iOS 26.6 並發現手機正在進行 Spotlight 索引，這是預期的行為，有助於為 iOS 27 即將到來的 Siri 和 Spotlight 大幅改進做好準備。此更新除了包含一般性的 Bug 修復和安全更新外，更著重於優化索引流程，提升整體用戶體驗。",
    tags: ["Apple", "iOS 26.6", "iOS 27", "Spotlight", "RC 版本", "安全更新"],
    title_en: "Apple iOS 26.6 RC Preview: Preparing for iOS 27 via Spotlight Indexing Functionality",
    summary_en: "Apple has released the iOS 26.6 RC version, and the official release notes specifically highlight a key feature: Spotlight indexing. The purpose of this is to ensure that users' iPhones can use new features more smoothly when upgrading to iOS 27. In previous iOS 27 Beta stages, developers noted that the indexing process could consume a significant amount of time on iPhones. To prevent the public from encountering a similar experience, Apple has chosen to perform most of the indexing work in the iOS 26.6 version. Therefore, if a user installs iOS 26.6 and notices the phone performing Spotlight indexing, this is expected behavior, helping to prepare for the major improvements to Siri and Spotlight coming with iOS 27. In addition to general bug fixes and security updates, this update focuses on optimizing the indexing process to enhance the overall user experience.",
    tags_en: ["Apple", "iOS 26.6", "iOS 27", "Spotlight", "RC Version", "Security Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/ios-26-6-includes-key-feature-that-prepares-your-iphone-for-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260720-061",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 macOS 26.6 RC 測試版，著重修復錯誤與優化 Spotlight 索引",
    summary: "Apple 已發布 macOS 26.6 的第一個開發者與公開測試版（Release Candidate, RC），預計將在下週正式更新。本次更新版本（Build 25G70）的重點並非新功能，而是著重於系統的錯誤修復與穩定性提升。特別值得注意的是，該版本可能包含優化 Spotlight 索引的功能，以為後續的 iOS 27 系統升級做準備。此外，Apple 也修復了先前某些應用程式被錯誤識別為僅限 Intel 架構所顯示的棄用通知，並解決了生態系統和 HealthKit 相關的錯誤。使用者若想安裝此 RC 版本，需透過「系統設定」中的「軟體更新」進入 Beta 更新區進行操作。建議使用者在進行任何系統升級前，務必備份 Mac 設備。",
    tags: ["macOS", "Apple", "macOS 26.6", "Spotlight", "RC", "系統更新"],
    title_en: "Apple Releases macOS 26.6 RC Beta Build, Focusing on Bug Fixes and Spotlight Index Optimization",
    summary_en: "Apple has released the first developer and public testing version (Release Candidate, RC) of macOS 26.6, which is expected to be officially updated next week. The focus of this update (Build 25G70) is not on new features, but rather on system bug fixes and stability improvements. Notably, this version may include optimized Spotlight indexing functionality, preparing for the subsequent iOS 27 system upgrade. Additionally, Apple has fixed previous issues where certain applications were incorrectly displaying deprecation notices restricted to Intel architecture, and resolved errors related to the ecosystem and HealthKit. Users wishing to install this RC version must proceed through the Beta Updates section in 'System Settings' under 'Software Update.' Users are advised to back up their Mac device before performing any system upgrade.",
    tags_en: ["macOS", "Apple", "macOS 26.6", "Spotlight", "RC", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/macos-26-6-rc-now-available-heres-whats-coming", lang: "EN" }
    ]
  },
  {
    id: "20260720-062",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 27、tvOS 27 等多系統開發者 Beta 4 版本，持續進行功能優化與除錯",
    summary: "Apple 近期發布了 iPadOS 27、tvOS 27、watchOS 27 等多個新版作業系統的開發者 Beta 4 版本。這些更新目前正在向開發者和測試者滾動發布，用戶可透過設備的「設定」中的軟體更新區塊進行安裝。文章指出，在正式版發布前，Apple 通常會在 Beta 週期早期引入顯著的新功能，而後期版本則主要著重於錯誤修復和效能提升。目前這些系統仍有數週的 Beta 迭代時間，預計在未來幾天內將向公開 Beta 測試者發布。開發者和資安人員應持續關注這些 Beta 版本，以掌握新功能和潛在的系統變動。建議使用者留意官方公告，並在正式發布前，密切關注系統的穩定性和安全性更新。",
    tags: ["Apple", "iPadOS 27", "tvOS 27", "watchOS 27", "Beta 測試", "作業系統更新"],
    title_en: "Apple Releases Developer Beta 4 for Multiple Systems Including iPadOS 27 and tvOS 27, Continuing Feature Optimization and Debugging",
    summary_en: "Apple recently released Developer Beta 4 versions for multiple new operating systems, including iPadOS 27, tvOS 27, and watchOS 27. These updates are currently rolling out to developers and testers, and users can install them through the 'Software Update' section in the device's 'Settings.' The article notes that before the official release, Apple typically introduces significant new features in the early stages of the Beta cycle, while later versions focus primarily on bug fixes and performance enhancements. These systems still have several weeks of Beta iteration time, and public Beta testing is expected to begin in the coming days. Developers and cybersecurity professionals should continue to monitor these Beta versions to stay updated on new features and potential system changes. Users are advised to pay attention to official announcements and closely monitor system stability and security updates before the official release.",
    tags_en: ["Apple", "iPadOS 27", "tvOS 27", "watchOS 27", "Beta Testing", "Operating System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-releases-beta-4-for-ipados-27-tvos-27-and-more", lang: "EN" }
    ]
  },
  {
    id: "20260720-063",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 26.6、watchOS 26.6 等軟體 RC 版本，預告新一波系統更新即將上線",
    summary: "Apple 已發布其下一波軟體更新的 RC（Release Candidate，發行候選）版本，涵蓋 iPadOS 26.6、watchOS 26.6、macOS 26.6 和 tvOS 26.6 等多個系統。RC 版本通常在 Beta 測試週期結束時發布，旨在與隨後正式發布給公眾的軟體版本保持一致。目前這些 26.6 更新的重點似乎更多是底層的系統改進，而非新增功能。雖然文章未提及具體漏洞或安全修補，但發布 RC 版本代表這些系統已接近正式發布，預計在一週左右會正式上線。使用者應留意 Apple 官方的發布公告，並確保系統更新至最新版本以獲得最佳的穩定性和安全性。",
    tags: ["Apple", "iPadOS 26.6", "watchOS 26.6", "macOS 26.6", "RC 版本", "系統更新"],
    title_en: "Apple Releases iPadOS 26.6, watchOS 26.6, and Other Software RC Versions, Signaling Upcoming System Updates",
    summary_en: "Apple has released the Release Candidate (RC) versions for its next wave of software updates, covering multiple operating systems including iPadOS 26.6, watchOS 26.6, macOS 26.6, and tvOS 26.6. RC versions are typically released at the end of the Beta testing cycle and are intended to match the software version that will be officially released to the public. Currently, the focus of these 26.6 updates appears to be more on underlying system improvements rather than new features. Although the article does not mention specific vulnerabilities or security patches, the release of RC versions indicates that these systems are nearing official deployment, which is expected in about a week. Users should monitor official Apple announcements and ensure their systems are updated to the latest version for optimal stability and security.",
    tags_en: ["Apple", "iPadOS 26.6", "watchOS 26.6", "macOS 26.6", "RC Version", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-releases-ipados-26-6-rc-plus-watchos-26-6-and-more", lang: "EN" }
    ]
  },
  {
    id: "20260720-064",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 macOS Sonoma 14.8.8 與 macOS Sequoia 15.7.8 第六輪開發版，預計包含重要安全修補",
    summary: "Apple 近期為 macOS Sonoma 14.8.8 和 macOS Sequoia 15.7.8 推出了第六輪的開發與公開測試版（Release Candidates, RC）。這兩個版本號（分別為 23J619 和 24G822）的更新，由於其發布時機，預計會包含重要的安全修補。此前，Apple 已因應 AI 相關工具帶來的風險，提前發布了包含修補的 iOS、iPadOS 和 macOS 26.5.2 版本。雖然 Apple 尚未公布本次 RC 包含的具體細節，但官方建議所有用戶應更新至這些版本，以確保系統的安全性和穩定性。用戶應留意 Apple 官方發布的修補說明，以了解本次更新修復的具體漏洞或安全風險。",
    tags: ["Apple", "macOS", "Sonoma", "Sequoia", "安全修補", "開發版"],
    title_en: "Apple Releases macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8 Sixth Round Developer Builds, Expected to Include Critical Security Patches",
    summary_en: "Apple recently released the sixth round of developer and public test builds (Release Candidates, RC) for macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8. Due to their release timing, these updates (with build numbers 23J619 and 24G822, respectively) are expected to include important security patches. Previously, Apple had released patched versions of iOS, iPadOS, and macOS 26.5.2 in response to risks posed by AI-related tools. Although Apple has not yet disclosed the specific details included in this RC, the official recommendation is for all users to update to these versions to ensure system security and stability. Users should monitor official Apple release notes to understand the specific vulnerabilities or security risks addressed by this update.",
    tags_en: ["Apple", "macOS", "Sonoma", "Sequoia", "Security Patch", "Developer Build"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/sixth-release-candidates-for-macos-sonoma-14-8-8-and-macos-sequoia-15-7-8-now-rolling-out", lang: "EN" }
    ]
  },
  {
    id: "20260720-065",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 26.6 首版 RC，預計為下一代 iPhone 更新，並強化聯絡人封鎖限制與防盜功能",
    summary: "Apple 近期發布了 iOS 26.6 的首版 Release Candidate (RC)，該版本預計將是下一代 iPhone 的主要更新。雖然業界焦點已轉向 iOS 27，但 iOS 26.6 仍將是接下來發布給客戶的穩定版本。根據測試，iOS 26.6 帶來了兩項顯著變動：一是調整了可封鎖的聯絡人數量限制；二是新增了防盜功能。此外，此更新也可能為 iOS 27 中 Siri AI 所使用的 Spotlight 索引功能進行準備，並已在發行說明中公開確認。開發者應留意，雖然此版本功能更新不多，但它代表了 Apple 產品線的穩定迭代，為用戶提供持續的系統安全與功能修補。建議用戶關注 Apple 官方的正式發布時間，以確保系統能順利升級至最新版本。",
    tags: ["Apple", "iOS 26.6", "iPhone", "RC", "防盜功能", "Siri AI"],
    title_en: "Apple Releases iOS 26.6 Beta RC, Expected for Next-Generation iPhone Update, Enhancing Contact Blocking Limits and Anti-Theft Features",
    summary_en: "Apple recently released the first Release Candidate (RC) of iOS 26.6, which is anticipated to be the major update for the next-generation iPhone. Although industry focus has shifted to iOS 27, iOS 26.6 will still be the stable version released to customers next. Testing shows that iOS 26.6 introduces two significant changes: first, it adjusts the limit on the number of contacts that can be blocked; and second, it adds anti-theft functionality. Furthermore, this update may also prepare for the Spotlight indexing feature used by Siri AI in iOS 27, which has been publicly confirmed in the release notes. Developers should note that while this version does not feature many functional updates, it represents a stable iteration of the Apple product line, providing users with continuous system security and functional patches. Users are advised to monitor Apple's official release schedule to ensure smooth upgrading to the latest version.",
    tags_en: ["Apple", "iOS 26.6", "iPhone", "RC", "Anti-Theft Feature", "Siri AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-releases-first-ios-26-6-rc-for-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260720-066",
    trackers: ["os"],
    category: "Apple",
    title: "macOS 27 Golden Gate 開發者 Beta 4 發布：強化 UI 透明度與全新 Siri AI 功能",
    summary: "Apple 於公開 Beta 季節後，發布了 macOS 27 Golden Gate 的開發者 Beta 4 版本。此版本預計將成為後續的公開 Beta 2。macOS 27 Golden Gate 帶來多項系統改進，包括 Liquid Glass 的升級，使用者現在可以精確調整 UI 元素的透明度或不透明度。此外，系統全面標準化了圓角設計，解決了 macOS 26 時代的常見問題。本版本最大的亮點是整合了全新的 Siri AI 功能，該功能利用底層的新索引系統，能更精準地擷取相關資訊來生成回答。整體系統改進依賴第三代 Apple Foundation Models。開發者可透過「系統設定」>「一般」>「軟體更新」來安裝此開發者 Beta 版本。建議使用者在更新前備份 Mac 設備。",
    tags: ["macOS 27", "Golden Gate", "Apple", "Siri AI", "Liquid Glass", "開發者 Beta"],
    title_en: "macOS 27 Golden Gate Developer Beta 4 Released: Enhanced UI Transparency and New Siri AI Features",
    summary_en: "Following the public Beta season, Apple has released the developer Beta 4 version of macOS 27 Golden Gate. This version is expected to precede the subsequent public Beta 2. macOS 27 Golden Gate introduces multiple system improvements, including an upgrade to Liquid Glass, allowing users to precisely adjust the transparency or opacity of UI elements. Furthermore, the system has standardized the corner radius design across the board, addressing common issues found in the macOS 26 era. The biggest highlight of this version is the integration of new Siri AI functionality, which utilizes a new underlying indexing system to extract relevant information and generate answers more accurately. Overall system improvements rely on the third-generation Apple Foundation Models. Developers can install this developer Beta version via 'System Settings' > 'General' > 'Software Update'. Users are advised to back up their Mac device before updating.",
    tags_en: ["macOS 27", "Golden Gate", "Apple", "Siri AI", "Liquid Glass", "Developer Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/macos-27-golden-gate-beta-4-now-available-to-developers-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260720-067",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 27 Beta 4：重點聚焦 Siri AI、Apple Intelligence 整合與系統優化",
    summary: "Apple 已發布 iOS 27 的第四個開發者測試版 (Beta 4)，持續其夏季測試週期，預計今年秋季正式發布。本次更新最大的亮點是全面整合「Siri AI」功能，這是一個由下一代 Apple Intelligence 和 Apple Foundation Models 驅動的重建語音助理。Siri AI 提升了對話的豐富度、個人情境理解、廣泛的知識庫和系統內更深層的應用操作。此外，Apple Intelligence 的能力擴展至照片、Safari、密碼、郵件、訊息、通訊錄、捷徑、主頁等多個應用程式。雖然 iOS 27 本身支援 iPhone 11 及更新機型，但最先進的 AI 功能（如 Siri AI）則需要更高階的 Apple Intelligence 相容硬體，甚至要求 iPhone 17 Pro 等機型。除了 AI 升級，iOS 27 還優化了 Liquid Glass 設計、提升了相簿載入、AirDrop 傳輸、以及訊息的連續傳送等多項系統性能。開發者應注意，Beta 版本仍可能存在 Bug，建議使用者留意官方後續公告。",
    tags: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "Beta 測試", "Foundation Models"],
    title_en: "Apple Releases iOS 27 Beta 4: Focusing on Siri AI, Apple Intelligence Integration, and System Optimizations",
    summary_en: "Apple has released the fourth developer beta (Beta 4) of iOS 27, continuing its summer testing cycle and expected official release this autumn. The biggest highlight of this update is the comprehensive integration of 'Siri AI,' a rebuilt voice assistant powered by the next-generation Apple Intelligence and Apple Foundation Models. Siri AI enhances conversational richness, personal context understanding, a broad knowledge base, and deeper system-level application operations. Furthermore, Apple Intelligence capabilities have expanded to multiple applications, including Photos, Safari, Passwords, Mail, Messages, Contacts, Shortcuts, and the Home Screen. While iOS 27 supports iPhone 11 and newer models, the most advanced AI features (such as Siri AI) require higher-tier Apple Intelligence compatible hardware, potentially demanding models like the iPhone 17 Pro. In addition to the AI upgrades, iOS 27 also optimizes system performance in areas such as Liquid Glass design, photo album loading, AirDrop transfers, and continuous message sending. Developers should note that Beta versions may still contain bugs, and users are advised to monitor official subsequent announcements.",
    tags_en: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "Beta Testing", "Foundation Models"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/ios-27-beta-4", lang: "EN" }
    ]
  },
  {
    id: "20260720-068",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳新 iPad mini 將搭載 OLED 螢幕、A19/A20 Pro 晶片，並具備防水與新式喇叭系統",
    summary: "根據報導，蘋果即將推出新款 iPad mini，預計將是自該設備兩年以來的重大更新。最大的變革在於螢幕，傳聞新款 iPad mini 將採用 OLED 顯示器，這相較於目前的 LCD 面板，能提供更深的黑色、更豐富的色彩和更好的對比度。此外，新機型預計將搭載 A19 Pro 或 A20 Pro 晶片，性能提升將支援 iOS 27 的先進 Siri AI 功能。蘋果也傳出將為 iPad mini 設計防水外殼，並採用新型的振動式喇叭系統，以協助達到防水設計。預計新款 OLED iPad mini 可能在今年十月推出，被譽為「半個十年來最大的升級」。",
    tags: ["Apple", "iPad mini", "OLED", "A19 Pro", "A20 Pro", "iOS 27"],
    title_en: "Apple rumored to equip new iPad mini with OLED screen, A19/A20 Pro chip, and waterproof/new speaker system",
    summary_en: "According to reports, Apple is preparing to launch a new iPad mini, which is expected to be the most significant update for the device in two years. The biggest change is the screen, with rumors suggesting the new iPad mini will adopt an OLED display. Compared to the current LCD panel, this will provide deeper blacks, richer colors, and better contrast. Furthermore, the new model is expected to feature an A19 Pro or A20 Pro chip, with performance enhancements supporting advanced Siri AI features in iOS 27. Apple is also rumored to design a waterproof casing for the iPad mini and adopt a new type of vibration speaker system to help achieve the waterproof design. The new OLED iPad mini is expected to launch this October and is being hailed as 'the biggest upgrade in half a decade.'",
    tags_en: ["Apple", "iPad mini", "OLED", "A19 Pro", "A20 Pro", "iOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/new-ipad-mini-coming-soon-with-these-major-changes", lang: "EN" }
    ]
  },
  {
    id: "20260720-069",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Sports App 升級至 4.2 版本，擴增全球足球聯賽支援與隊陣視覺化功能",
    summary: "Apple 發布 Sports App 4.2 版本更新，專為全球足球迷設計。本次更新主要功能是擴增全球支援的足球聯賽，新增了包括比利時聯賽、丹麥超級聯賽、荷蘭聯賽、日本J1聯賽、波蘭聯賽、蘇格蘭聯賽和瑞士超級聯賽在內的七個聯賽。此外，應用程式現已支援「隊陣（formation）」的顯示，使用戶能更直觀地了解每場比賽的陣容配置。對於足球迷而言，Apple TV 也提供免費觀看美國職業足球大聯盟（MLS）的比賽。本次更新屬於應用程式功能擴展，主要提升用戶體驗，並未涉及任何資安漏洞或核心系統變更。修補建議為更新至 App Store 的最新版本。",
    tags: ["Apple Sports", "iOS", "足球", "App Store", "4.2", "功能更新"],
    title_en: "Apple Sports App upgraded to version 4.2, expanding global football league support and team formation visualization",
    summary_en: "Apple has released an update to the Sports App, version 4.2, designed for global football fans. The main feature of this update is the expansion of supported global football leagues, adding seven leagues including the Belgian League, Danish Superliga, Dutch League, Japanese J1 League, Polish League, Scottish League, and Swiss Super League. Furthermore, the application now supports the display of 'formation,' allowing users to more intuitively understand the starting lineup configuration for each match. For football fans, Apple TV also offers free viewing of Major League Soccer (MLS) games. This update is an application feature expansion, primarily enhancing user experience, and does not involve any security vulnerabilities or core system changes. The recommended remediation is to update to the latest version available on the App Store.",
    tags_en: ["Apple Sports", "iOS", "Football", "App Store", "4.2", "Feature Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apples-sports-app-expands-soccer-features-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260720-070",
    trackers: ["os"],
    category: "Apple",
    title: "macOS 26.5用戶面臨花環與觸控板無響問題，清除CoreSpotlight資料夾可修復",
    summary: "部分macOS 26.5用戶回報，在使用系統時會遇到系統花環（beach ball）和觸控板長時間無反應的問題，嚴重影響生產力。活動監控（Activity Monitor）顯示，高CPU使用率可能來自`mediaanalysisd`、`kernel_task`或`corespotlightd`等程序。這類問題可能與Apple的系統索引或媒體分析功能有關。文章指出一個可行的解決方案是手動刪除`~/Library/Metadata/CoreSpotlight`資料夾。執行此操作後，Mac系統需要重新建立Spotlight索引，雖然這會耗費時間，但使用者報告稱，在重新索引完成後，此類卡頓和無響問題已不再發生。建議受影響用戶依照指引刪除該資料夾，並耐心等待系統完成重建。",
    tags: ["macOS", "CoreSpotlight", "系統效能", "macOS 26.5", "Apple", "系統故障排除"],
    title_en: "macOS 26.5 Users Encounter Beach Ball and Trackpad Unresponsive Issues; Clearing CoreSpotlight Folder May Resolve",
    summary_en: "Some macOS 26.5 users have reported encountering system beach ball and prolonged trackpad unresponsiveness issues while using the system, severely impacting productivity. Activity Monitor shows that high CPU usage may originate from processes such as `mediaanalysisd`, `kernel_task`, or `corespotlightd`. These issues may be related to Apple's system indexing or media analysis functions. The article points out a viable solution: manually deleting the `~/Library/Metadata/CoreSpotlight` folder. After performing this action, the Mac system needs to rebuild the Spotlight index. Although this process consumes time, users report that after the re-indexing is complete, these types of stuttering and unresponsiveness issues no longer occur. Affected users are advised to follow the guide to delete the folder and wait patiently for the system to complete the rebuild.",
    tags_en: ["macOS", "CoreSpotlight", "System Performance", "macOS 26.5", "Apple", "Troubleshooting"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/mac-beach-balls-and-unresponsive-trackpad-this-fix-seems-to-work", lang: "EN" }
    ]
  },
  {
    id: "20260720-071",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "從 Code Red 蠕蟲時代的教訓看 AI 安全：提升資產可見性與治理的重要性",
    summary: "本文回顧了 25 年前 Code Red 蠕蟲的爆發，指出它暴露了組織「無法保護其不知擁有之資產」的根本安全現實。專家們強調，Code Red 攻擊利用了許多組織未察覺、未配置或未修補的服務。隨著企業加速採用 AI 工具、AI Agent 和 AI 工作流程，安全團隊面臨的挑戰與當年相似：缺乏環境可見性、治理不足。這篇文章的核心訊息是，無論是蠕蟲時代還是 AI 時代，基礎的資產盤點、環境可見性、以及在攻擊者發現之前識別並保護新興技術，都是維持安全運營的關鍵要求。修補建議是將重點放在提升資產可見性，管理攻擊面，並建立全面的治理框架來應對 AI 帶來的風險。",
    tags: ["Code Red", "蠕蟲", "AI 安全", "資產可見性", "攻擊面管理", "治理"],
    title_en: "Lessons from the Code Red Worm Era for AI Security: The Importance of Improving Asset Visibility and Governance",
    summary_en: "This article reviews the Code Red worm outbreak 25 years ago, pointing out the fundamental security reality that organizations are 'unable to protect assets they do not know they possess.' Experts emphasize that the Code Red attack exploited many services that organizations were unaware of, had not configured, or had not patched. As enterprises accelerate the adoption of AI tools, AI Agents, and AI workflows, the challenges faced by security teams are similar to those of that era: lack of environmental visibility and insufficient governance. The core message of this article is that, whether in the worm era or the AI era, basic asset inventory, environmental visibility, and identifying and protecting emerging technologies before attackers do, are critical requirements for maintaining secure operations. The remediation suggestion is to focus on improving asset visibility, managing the attack surface, and establishing comprehensive governance frameworks to address AI-related risks.",
    tags_en: ["Code Red", "Worm", "AI Security", "Asset Visibility", "Attack Surface Management", "Governance"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/25-years-after-code-red-what-the-worm-era-can-teach-us-about-ai-security-2", lang: "EN" }
    ]
  },
  {
    id: "20260720-072",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "歐盟委員會發布AI法案透明度指引：規範AI系統提供者與部署者的標籤義務",
    summary: "歐盟委員會發布了關於人工智慧（AI）系統透明度義務的指引，旨在協助AI系統的提供者和部署者遵守《AI法案》的規定。這些指引的實施義務將於 2026 年 8 月 2 日開始生效。指引強調，透明度義務的目的是幫助公眾識別他們是否正在與AI系統互動，或內容是否由AI生成或修改，從而降低欺騙和操縱的風險。\n\n根據《AI法案》，AI系統的提供者必須設計系統，以便在使用者直接與AI互動時進行告知，並必須為AI生成或操縱的內容添加機器可讀的標記。此外，部署者也必須在公眾接觸到深度偽造（deep fakes）、缺乏人工審核的AI生成公共利益內容，以及情緒識別或生物識別分類系統時，進行充分的告知。這份指引明確界定了哪些提供者和部署者必須遵守這些透明度義務，並涵蓋了AI生成內容的標記與標籤要求。",
    tags: ["歐盟委員會", "AI法案", "透明度義務", "AI系統", "深度偽造", "機器可讀標記"],
    title_en: "European Commission Issues AI Act Transparency Guidelines: Mandating Labeling Obligations for AI System Providers and Deployers",
    summary_en: "The European Commission has released guidelines concerning transparency obligations for Artificial Intelligence (AI) systems, aiming to help AI system providers and deployers comply with the AI Act. These guidelines' implementation obligations will take effect on August 2, 2026. The guidelines emphasize that the purpose of the transparency obligation is to help the public identify whether they are interacting with an AI system, or whether content has been generated or modified by AI, thereby reducing the risk of deception and manipulation.\n\nUnder the AI Act, AI system providers must design systems to provide notification when users directly interact with the AI, and must add machine-readable labels to AI-generated or manipulated content. Furthermore, deployers must provide adequate notification when the public encounters deepfakes, AI-generated public interest content lacking human review, and emotion recognition or biometric classification systems. These guidelines clearly define which providers and deployers must comply with these transparency obligations, and cover the labeling and marking requirements for AI-generated content.",
    tags_en: ["European Commission", "AI Act", "Transparency Obligation", "AI System", "Deepfakes", "Machine-readable Label"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems", lang: "EN" }
    ]
  },
  {
    id: "20260720-073",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "歐盟委員會發布AI法案透明度指引：規範AI系統提供者與部署者的義務",
    summary: "歐盟委員會（European Commission）發布了關於《人工智慧法案》（AI Act）透明度義務的指引，旨在協助AI系統的提供者和部署者理解並遵守法案要求。根據指引，AI法案採取風險導向方法，將AI系統分為四個風險類別，其中涉及透明度風險的系統必須遵守《AI法案》第50條規定的透明度義務。這些義務將於2026年8月2日開始適用。委員會發布此指引的目的是為主管機關、提供者和部署者提供實務指導，確保透明度義務的執行方式一致、有效、比例和統一。指引涵蓋了如何實施針對特定AI系統的透明度義務，並提供了相關的問答集和最佳實踐指南，協助市場參與者達到法規遵循。",
    tags: ["AI Act", "歐盟委員會", "透明度義務", "AI系統", "Article 50", "合規指引"],
    title_en: "European Commission Issues AI Act Transparency Guidance: Regulating Obligations for AI System Providers and Deployers",
    summary_en: "The European Commission has released guidance on the transparency obligations under the Artificial Intelligence Act (AI Act), aiming to help providers and deployers of AI systems understand and comply with the Act's requirements. According to the guidance, the AI Act adopts a risk-based approach, classifying AI systems into four risk categories. Systems involving transparency risks must comply with the transparency obligations stipulated in Article 50 of the AI Act. These obligations will become applicable on August 2, 2026. The Commission issued this guidance to provide practical instructions to regulatory authorities, providers, and deployers, ensuring that the implementation of transparency obligations is consistent, effective, proportionate, and uniform. The guidance covers how to implement transparency obligations for specific AI systems and provides related FAQs and best practice guidelines to assist market participants in achieving regulatory compliance.",
    tags_en: ["AI Act", "European Commission", "Transparency Obligations", "AI Systems", "Article 50", "Compliance Guidance"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems", lang: "EN" }
    ]
  },
  {
    id: "20260720-074",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Hugging Face遭AI代理攻擊：透過惡意資料集觸發程式碼執行路徑，竊取憑證並橫向移動",
    summary: "AI模型開發與託管平臺Hugging Face於7月16日揭露遭自主AI代理執行攻擊。攻擊者利用惡意資料集觸發資料處理流程中的兩條程式碼執行路徑，成功取得節點存取權限，進而竊取雲端與叢集憑證，並在內部進行橫向移動。由於Hugging Face是大量AI模型、資料集與開發工具的託管平臺，此次入侵構成重大的供應鏈風險，潛在影響範圍包括使用者下載或整合的AI模型與開發工具的完整性。\n\n為應對此事件，Hugging Face已修補了攻擊者入侵的程式碼執行路徑，重建了受害叢集節點，並替換了所有受影響的憑證與權杖。同時，平台也部署了額外的防護措施與更嚴格的存取控制。目前調查顯示，提供給用戶的模型、資料集、容器映像及已發布軟體套件的軟體供應鏈，尚未發現遭到竄改的跡象。",
    tags: ["Hugging Face", "AI代理攻擊", "惡意資料集", "程式碼執行路徑", "憑證竊取", "供應鏈風險"],
    title_en: "Hugging Face Targeted by AI Agent Attack: Code Execution Path Triggered via Malicious Dataset to Steal Credentials and Perform Lateral Movement",
    summary_en: "The AI model development and hosting platform Hugging Face disclosed on July 16 that it was subjected to an autonomous AI agent attack. The attackers utilized a malicious dataset to trigger two code execution paths within the data processing workflow, successfully obtaining node access privileges. They subsequently stole cloud and cluster credentials and performed lateral movement within the internal network. Given that Hugging Face is a hosting platform for a vast number of AI models, datasets, and development tools, this intrusion constitutes a significant supply chain risk, with potential impact extending to the integrity of AI models and development tools downloaded or integrated by users.\n\nIn response to the incident, Hugging Face has patched the code execution paths exploited by the attackers, rebuilt the compromised cluster nodes, and replaced all affected credentials and tokens. Furthermore, the platform has deployed additional protective measures and stricter access controls. Current investigations indicate that the software supply chain for models, datasets, container images, and published software packages provided to users has not shown signs of tampering.",
    tags_en: ["Hugging Face", "AI Agent Attack", "Malicious Dataset", "Code Execution Path", "Credential Theft", "Supply Chain Risk"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177440", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-075",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安研究揭露 SleeperGem 攻擊：惡意 RubyGems 套件滲透開發環境，竊取憑證並建立持久化後門",
    summary: "資安研究人員發現了一種代號為 SleeperGem 的軟體供應鏈攻擊，目標是 Ruby 生態系統。攻擊者透過在 RubyGems 註冊庫上發布三組惡意 gem：`git_credential_manager` (v2.8.0-2.8.3)、`Dendreo` (v1.1.3-v1.1.4) 和 `fastlane-plugin-run_tests_firebase_testlab` (v0.3.2)。這些惡意 gem 本質上都是載入器（loader），它們會從攻擊者控制的 Forgejo 主機抓取第二階段的惡意載荷。攻擊的特點是偽裝成官方工具，且利用了長期未更新的帳號。一旦安裝，惡意程式會掃描系統環境變數，若偵測到 CI/CD 相關變數（如 GitHub Actions, GitLab），則會退出，確保只在開發者機器上執行。在 `git_credential_manager` 的情況下，惡意程式會在 gem 被載入時觸發，下載腳本和二進位檔，並在 Windows 上透過 PowerShell 執行。更嚴重的是，`git_credential_manager` 的 v2.8.3 版本會使用安裝腳本啟動背景服務，並建立持久化機制（如 cron entry 和 systemd user service），甚至在成功取得 root 權限後，會植入一個 setuid root 副本的系統 shell。受影響用戶應立即視為機器和密鑰已被入侵，並清除殘留的 daemon、移除持久化機制，並輪換所有憑證。",
    tags: ["RubyGems", "SleeperGem", "軟體供應鏈", "git_credential_manager", "開源安全", "憑證竊取"],
    title_en: "Security Research Uncovers SleeperGem Attack: Malicious RubyGems Packages Infiltrate Development Environments, Steal Credentials, and Establish Persistent Backdoors",
    summary_en: "Security researchers have discovered a software supply chain attack, dubbed SleeperGem, targeting the Ruby ecosystem. The attackers published three malicious gems on the RubyGems repository: `git_credential_manager` (v2.8.0-2.8.3), `Dendreo` (v1.1.3-v1.1.4), and `fastlane-plugin-run_tests_firebase_testlab` (v0.3.2). These malicious gems are essentially loaders that fetch a second-stage malicious payload from an attacker-controlled Forgejo host. The attack is characterized by its disguise as official tools and its exploitation of long-unupdated accounts. Once installed, the malicious code scans system environment variables and exits if CI/CD related variables (such as GitHub Actions, GitLab) are detected, ensuring execution only on developer machines. In the case of `git_credential_manager`, the malicious code triggers upon gem loading, downloading scripts and binaries, and executing them via PowerShell on Windows. More critically, the v2.8.3 version of `git_credential_manager` starts a background service using an installation script and establishes persistence mechanisms (such as cron entries and systemd user services), even implanting a setuid root copy of the system shell after successfully obtaining root privileges. Affected users should immediately assume their machine and keys have been compromised, and must clean up residual daemons, remove persistence mechanisms, and rotate all credentials.",
    tags_en: ["RubyGems", "SleeperGem", "Software Supply Chain", "git_credential_manager", "Open Source Security", "Credential Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/sleepergem-uses-three-malicious.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-076",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitHub「FakeGit」活動揭露近 7,600 個惡意儲存庫，利用 AI 誘餌攻擊開發者與 AI 代理",
    summary: "資安研究機構 Island 揭露一場代號「FakeGit」的大規模惡意活動，發現了近 7,600 個偽造的 GitHub 儲存庫。這些儲存庫偽裝成 AI 技能或 Model Context Protocol (MCP) 伺服器，旨在傳遞名為 SmartLoader 的惡意程式，並進一步部署資訊竊取工具 StealC。攻擊者利用了開發者對 AI 相關工具的信任，透過複製專案、偽造開發者資料和具說服力的 README 文件來誘騙目標。更令人擔憂的是，該活動發展出「AgentBaiting」技術，使得 AI 代理（如 Anthropic Claude Code、Google Gemini、OpenAI ChatGPT）在執行正常搜尋任務時，能自主發現並執行這些惡意儲存庫的指令，無需人類干預。攻擊鏈透過 ZIP 壓縮檔觸發 LuaJIT 加載器，最終執行混淆的 Lua 腳本。為防禦，建議建立審核機制，在沙盒環境評估新 AI 代理能力，並嚴密監控 AI 代理的行為路徑。",
    tags: ["GitHub", "FakeGit", "AI 代理", "SmartLoader", "MCP", "開源安全", "資訊竊取"],
    title_en: "GitHub 'FakeGit' Campaign Exposes Nearly 7,600 Malicious Repositories Using AI Baiting to Attack Developers and AI Agents",
    summary_en: "Security research firm Island has exposed a large-scale malicious campaign codenamed 'FakeGit,' discovering nearly 7,600 fake GitHub repositories. These repositories masquerade as AI skills or Model Context Protocol (MCP) servers, aiming to deliver malware named SmartLoader and subsequently deploy information theft tools like StealC. The attackers exploited developers' trust in AI-related tools by cloning projects, fabricating developer profiles, and using highly convincing README files to deceive targets. More concerning is that the campaign developed 'AgentBaiting' technology, allowing AI agents (such as Anthropic Claude Code, Google Gemini, and OpenAI ChatGPT) to autonomously discover and execute instructions from these malicious repositories while performing normal search tasks, without human intervention. The attack chain triggers a LuaJIT loader via ZIP archives, ultimately executing obfuscated Lua scripts. For defense, it is recommended to establish review mechanisms, evaluate new AI agent capabilities in a sandbox environment, and strictly monitor the behavioral paths of AI agents.",
    tags_en: ["GitHub", "FakeGit", "AI Agents", "SmartLoader", "MCP", "Open Source Security", "Information Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/fakegit-campaign-uses-7600-github.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-077",
    trackers: ["os"],
    category: "Android",
    title: "Google 系統更新詳報：Play services v26.28 提升帳號管理與裝置連線功能，WebView 亦強化開發者工具",
    summary: "本文彙整 Google 於 2026 年 7 月發布的系統更新內容，涵蓋 Play services、Play Store、Android WebView 等核心元件。Play services v26.28 於 7 月 20 日發布，主要在手機端新增了對 WebView 的音訊權限支援，並支援製造商啟動儲存空間管理和訂閱流程。此外，在裝置連線方面，Auto、手機和 TV 裝置皆獲得了額外的品質日誌功能。Play Store v52.4 則在手機端優化了搜尋體驗，並新增了在安裝應用程式時可將小工具加入主畫面。Android WebView v151 於 7 月 15 日更新，為開發者提供了 HTTP Cache Quota API，讓應用程式能手動管理 WebView 的快取大小，並升級至分區感知（partitioned-aware）的連結架構，提升了安全性與隱私。\n\n整體而言，本次更新重點在於提升跨裝置的連動性、強化開發者工具鏈的穩定性，並持續優化使用者介面與系統功能，例如在手機端可於鎖定畫面查看 IMEI。",
    tags: ["Google", "Android", "Play services", "Android WebView", "系統更新", "開發者工具"],
    title_en: "Google System Update Details: Play services v26.28 Enhances Account Management and Device Connectivity, WebView Also Strengthens Developer Tools",
    summary_en: "This article compiles the system update content released by Google in July 2026, covering core components such as Play services, Play Store, and Android WebView. Play services v26.28, released on July 20, primarily added audio permission support for WebView on mobile devices, and supports manufacturer-initiated storage management and subscription flows. Furthermore, regarding device connectivity, Auto, mobile, and TV devices all received additional quality logging functionality. Play Store v52.4 optimized the search experience on mobile devices and added the ability to add widgets to the home screen when installing applications. Android WebView v151 updated on July 15 provided developers with the HTTP Cache Quota API, allowing applications to manually manage the WebView cache size, and upgraded to a partitioned-aware linking architecture, enhancing security and privacy. Overall, the focus of this update is on improving cross-device connectivity, strengthening the stability of the developer toolchain, and continuously optimizing user interfaces and system functions, such as viewing the IMEI on the lock screen of mobile devices.",
    tags_en: ["Google", "Android", "Play services", "Android WebView", "System Update", "Developer Tools"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/july-2026-google-system-updates", lang: "EN" }
    ]
  },
  {
    id: "20260720-078",
    trackers: ["os"],
    category: "Android",
    title: "Snapseed 攝影應用程式於 Android 更新，新增地理標記與原始影像儲存功能",
    summary: "Google 的 Snapseed 攝影應用程式於 Android 平台發布了版本 4.1.1.x 的更新。本次更新主要提升了用戶的內容管理與編輯彈性。用戶現在可以在相機設定中啟用「位置元數據」（Location Metadata）功能，使拍攝的影像能夠像其他手機照片一樣帶有地理標記。此外，新增了「擷取原始影像以供重新編輯」（Capture original for re-editing）的選項，預設啟用，允許用戶在使用濾鏡或風格（Film Styles/Looks）進行編輯後，仍能儲存原始的基礎影像，以便日後進行進一步修改。用戶還可以透過系統檔案選擇器為 Snapseed 建立專屬的儲存資料夾。這些功能旨在讓用戶能更精確地管理和追溯影像的原始狀態，提升專業攝影流程的便利性。修補建議是更新至 Snapseed 應用程式的最新版本。",
    tags: ["Snapseed", "Android", "地理標記", "位置元數據", "影像編輯", "App 更新"],
    title_en: "Snapseed Photo App for Android Updates, Adding Geo-tagging and Original Image Storage Functionality",
    summary_en: "Google's Snapseed photo application released an update to version 4.1.1.x for the Android platform. This update primarily enhances user content management and editing flexibility. Users can now enable the 'Location Metadata' feature in the camera settings, allowing captured images to include geo-tags, similar to other phone photos. Additionally, a new option, 'Capture original for re-editing,' is introduced and enabled by default. This allows users to save the original base image even after applying filters or styles (Film Styles/Looks), enabling further modifications later. Users can also create a dedicated storage folder for Snapseed using the system file picker. These features aim to allow users to more accurately manage and track the original state of images, improving the convenience of professional photography workflows. The recommended fix is to update to the latest version of the Snapseed application.",
    tags_en: ["Snapseed", "Android", "Geo-tagging", "Location Metadata", "Image Editing", "App Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/snapseed-camera-geotag", lang: "EN" }
    ]
  },
  {
    id: "20260720-079",
    trackers: ["os"],
    category: "Android",
    title: "三星傳出 Galaxy Z Fold 8 系列生產計畫，聚焦更寬版折疊手機",
    summary: "根據一份新報告指出，三星（Samsung）正在規劃 Galaxy Z Fold 8、Fold 8 Ultra 和 Flip 8 的生產計畫。報告顯示，三星將重點放在更寬且成本較低的折疊手機型號。初步的預估生產量分配為：Galaxy Z Fold 8 (寬版) 280 萬台，Galaxy Z Fold 8 Ultra 200 萬台，以及 Galaxy Z Flip 8 150 萬台。這顯示了三星在產品線上的策略轉移，過去更強調 Z Flip 系列，但這次更側重於新的寬版折疊機型。雖然整體折疊機的預計產量與去年相比變化不大（去年因 Fold 7 爆紅，總量超過 600 萬台），但這次的規劃明確指出了其市場預期與產品重點。",
    tags: ["三星", "Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "折疊手機", "Android"],
    title_en: "Samsung plans production for Galaxy Z Fold 8 series, focusing on wider foldable phones",
    summary_en: "According to a new report, Samsung is planning production for the Galaxy Z Fold 8, Fold 8 Ultra, and Flip 8. The report indicates that Samsung will focus on wider and more cost-effective foldable phone models. The preliminary estimated production volume allocation is: Galaxy Z Fold 8 (wide version) at 2.8 million units, Galaxy Z Fold 8 Ultra at 2 million units, and Galaxy Z Flip 8 at 1.5 million units. This suggests a strategic shift in Samsung's product line, moving away from the previous emphasis on the Z Flip series to focus more on the new wide-format foldable models. Although the overall estimated foldable production volume shows little change compared to last year (when the total exceeded 6 million units due to the popularity of the Fold 7), this plan clearly outlines its market expectations and product priorities.",
    tags_en: ["Samsung", "Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Foldable phone", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/samsung-galaxy-z-fold-8-wide-production-reports", lang: "EN" }
    ]
  },
  {
    id: "20260720-080",
    trackers: ["os"],
    category: "Android",
    title: "Google 確認 Pixel 6/6 Pro 將於 Android 17 QPR2 Beta 發布前達到終止支援，更新支援已規劃至 2024 年底",
    summary: "Google 宣布，隨著 Android 17 QPR2 Beta 的發布，Pixel 6 和 Pixel 6 Pro 將達到終止支援（End of Life）。這兩款設備最初於 2021 年 10 月發布，原定支援三年 Android 更新和兩年安全補丁。雖然 Google 在 2024 年將支援期延長至五年，但由於設備已達到生命週期終點，Pixel 6 和 6 Pro 的用戶將無法接收 QPR2 的 OTA 更新。它們的最後一次更新將是 9 月的 Pixel Drop/QPR1 和 10 月的安全補丁。相比之下，Pixel 6a 的支援期將持續到 2027 年 7 月。這提醒用戶，老舊設備在支援期結束後，將無法獲得最新的作業系統功能和安全修補，建議用戶考慮升級至支援最新的 Pixel 系列設備，以確保持續的安全保護。",
    tags: ["Google", "Pixel 6", "Pixel 6 Pro", "Android 17", "End of Life", "作業系統支援"],
    title_en: "Google Confirms Pixel 6/6 Pro Will Reach End of Support Before Android 17 QPR2 Beta Release, Updates Planned Until End of 2024",
    summary_en: "Google announced that with the release of Android 17 QPR2 Beta, the Pixel 6 and Pixel 6 Pro will reach End of Life. These two devices were originally released in October 2021, with planned support for three years of Android updates and two years of security patches. Although Google extended the support period to five years in 2024, because the devices have reached the end of their lifecycle, Pixel 6 and 6 Pro users will not receive the QPR2 OTA update. Their last updates will be the September Pixel Drop/QPR1 and the October security patch. In contrast, the Pixel 6a's support period will continue until July 2027. This reminds users that older devices will not receive the latest operating system features and security patches after their support period ends, advising users to consider upgrading to a supported Pixel series device to ensure continuous security protection.",
    tags_en: ["Google", "Pixel 6", "Pixel 6 Pro", "Android 17", "End of Life", "Operating System Support"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/pixel-6-no-android-17-qpr2", lang: "EN" }
    ]
  },
  {
    id: "20260720-081",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 Pro 圖片首次從 Google Fi 官網洩露，預計 8 月發表",
    summary: "本篇報導指出，Pixel 11 Pro 的圖片已從 Google Fi 網站洩露，這使得該資訊的可靠性大幅提高。該設備的設計，包括「Dune」配色，與先前在 Amazon 發現的圖片相似。報導澄清，洩露的圖片為 Pixel 11 Pro，而非 Pro XL 型號，判斷依據是手機麥克風的擺放位置。雖然 Pixel 11 系列包含 Pixel 11、11 Pro XL 和 11 Pro Fold 等多款機型，但目前只有 Pro 型號的圖片出現。預計 Pixel 11 系列將於 8 月份正式發表。此外，市場預測新機型可能會有顯著的價格上漲，但 Google Fi 似乎也規劃了以 $100 購買 Pixel 11 Pro XL 的折扣方案，可能需搭配新方案簽約或折抵舊機。",
    tags: ["Google", "Pixel 11 Pro", "Android", "Google Fi", "手機洩漏", "Pixel 11 系列"],
    title_en: "Google Pixel 11 Pro Images First Leaked from Google Fi Official Website, Expected August Release",
    summary_en: "This report points out that images of the Pixel 11 Pro have been leaked from the Google Fi website, significantly increasing the reliability of this information. The device's design, including the \"Dune\" colorway, is similar to images previously found on Amazon. The report clarifies that the leaked images are for the Pixel 11 Pro, not the Pro XL model, based on the placement of the phone's microphone. Although the Pixel 11 series includes multiple models such as the Pixel 11, 11 Pro XL, and 11 Pro Fold, only the Pro model's images have appeared so far. The Pixel 11 series is expected to be officially launched in August. Furthermore, the market predicts that the new models might see a significant price increase, but Google Fi also appears to have planned a discount scheme to purchase the Pixel 11 Pro XL for $100, which may require signing up for a new plan or trading in an old device.",
    tags_en: ["Google", "Pixel 11 Pro", "Android", "Google Fi", "Phone Leak", "Pixel 11 Series"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/pixel-11-pro-shows-up-on-one-of-googles-websites", lang: "EN" }
    ]
  },
  {
    id: "20260720-082",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Android 17 QPR2 Beta 1：Pixel 系列設備更新與開發者 SDK 修正",
    summary: "Google 已發布 Android 17 QPR2 Beta 1 版本，供 Pixel 設備測試。此版本為 2026 年第四季（12 月）的預計發布版本，並包含針對開發者的輕微 SDK 更新。本次更新主要修復了多項系統穩定性與功能性問題，包括：藍牙重新配對在遠端綁定丟失後會靜默失敗；設備喚醒時鎖定畫面會短暫顯示媒體播放器控制；以及在呼叫 Gemini 功能時可能導致 Pixel 設備意外重啟等。此外，還修復了通知中心顯示異常、多指拖放手勢導致應用程式停止接收觸控事件，以及 ML-DSA 鍵生成失敗等問題。本次 Beta 1 系統映像檔涵蓋 Pixel 6a、7、7 Pro、7a、Tablet、Fold、8、8 Pro、8a、9、9 Pro 等多款機型，以及 Android 模擬器。文章提醒用戶，若不希望參與 Beta 測試，應忽略此更新，等待穩定版 QPR1 的正式發布。",
    tags: ["Android 17", "QPR2 Beta 1", "Google", "Pixel", "Android 模擬器", "系統更新", "開發者 SDK"],
    title_en: "Google Releases Android 17 QPR2 Beta 1: Pixel Devices Update and Developer SDK Fixes",
    summary_en: "Google has released Android 17 QPR2 Beta 1 for testing on Pixel devices. This version is slated for release in Q4 2026 (December) and includes minor SDK updates for developers. This update primarily fixes multiple system stability and functionality issues, including: silent failure of Bluetooth re-pairing after remote binding loss; temporary display of media player controls on the lock screen when the device wakes up; and potential unexpected reboots of Pixel devices when calling Gemini features. Additionally, it fixes issues such as abnormal notification center display, application failure to receive touch events due to multi-finger drag-and-drop gestures, and ML-DSA key generation failures. This Beta 1 system image covers multiple models, including Pixel 6a, 7, 7 Pro, 7a, Tablet, Fold, 8, 8 Pro, 8a, 9, 9 Pro, and Android Emulator. The article advises users who do not wish to participate in Beta testing to ignore this update and wait for the official stable QPR1 release.",
    tags_en: ["Android 17", "QPR2 Beta 1", "Google", "Pixel", "Android Emulator", "System Update", "Developer SDK"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/android-17-qpr2-beta-1-pixel", lang: "EN" }
    ]
  },
  {
    id: "20260720-083",
    trackers: ["os"],
    category: "Android",
    title: "三星傳出 Galaxy Watch Ultra 2 規格：具備 5,000 尼特亮度與 IP69K 防護等級",
    summary: "本文報導了關於三星（Samsung）即將推出的 Galaxy Watch Ultra 2 的洩漏資訊。該款智慧手錶預計將在電池容量和系統單晶片（SoC）方面進行升級。傳聞指出電池容量將增加至 800mAh，並搭載新的 Snapdragon Wear Elite 晶片。此外，洩漏的行銷圖片顯示，Galaxy Watch Ultra 2 將具備 5,000 尼特的螢幕亮度，並達到 IP69K 的防水防塵等級。這些規格提升旨在強化其「全能型」定位。三星預計將於 7 月 22 日發表該系列產品，屆時的售價可能有所上調。",
    tags: ["Samsung", "Galaxy Watch Ultra 2", "智慧手錶", "Snapdragon Wear Elite", "IP69K", "硬體規格"],
    title_en: "Samsung leaks Galaxy Watch Ultra 2 specs: Featuring 5,000 nits brightness and IP69K rating",
    summary_en: "This article reports leaked information regarding Samsung's upcoming Galaxy Watch Ultra 2. The smart watch is expected to receive upgrades in battery capacity and System on Chip (SoC). Rumors indicate that the battery capacity will increase to 800mAh, and it will be equipped with the new Snapdragon Wear Elite chip. Furthermore, leaked marketing images show that the Galaxy Watch Ultra 2 will feature a screen brightness of 5,000 nits and achieve an IP69K waterproof and dustproof rating. These specification enhancements aim to strengthen its 'all-rounder' positioning. Samsung is expected to announce the product series on July 22, at which time the selling price may be increased.",
    tags_en: ["Samsung", "Galaxy Watch Ultra 2", "Smartwatch", "Snapdragon Wear Elite", "IP69K", "Hardware Specs"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/galaxy-watch-ultra-2-leaks-days-before-launch", lang: "EN" }
    ]
  },
  {
    id: "20260720-084",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android Nearby Connections API 將限制自動開啟無線電，開發者需手動管理 Wi-Fi/藍牙狀態",
    summary: "Google 宣布更新 Nearby Connections API 的預設行為，旨在強化用戶隱私與透明度。過去，該 API 可自動開啟 Wi-Fi 和藍牙無線電以建立連線，無需用戶明確授權。未來，此功能將不再適用於第一方（1P）和第三方（3P）應用程式。對於依賴 Nearby Connections 的開發者而言，實務影響重大：應用程式必須改為手動管理所需的無線電（Wi-Fi 或藍牙）狀態，並在無線電未開啟時，必須主動通知用戶並請求其手動啟用。這些變更預計將在 2026 年底生效。開發者應即刻審查連線工作流程，確保平穩過渡。",
    tags: ["Android", "Nearby Connections API", "Google", "無線電管理", "用戶隱私", "API 更新"],
    title_en: "Android Nearby Connections API will restrict automatic radio activation, requiring developers to manually manage Wi-Fi/Bluetooth state",
    summary_en: "Google has announced updates to the Nearby Connections API's default behavior, aiming to enhance user privacy and transparency. Previously, the API could automatically activate Wi-Fi and Bluetooth radios to establish connections without explicit user authorization. This functionality will no longer be available for both first-party (1P) and third-party (3P) applications. For developers relying on Nearby Connections, the practical impact is significant: applications must now manually manage the required radio (Wi-Fi or Bluetooth) state, and when the radio is inactive, they must proactively notify the user and request manual activation. These changes are expected to take effect by the end of 2026. Developers should immediately review their connection workflows to ensure a smooth transition.",
    tags_en: ["Android", "Nearby Connections API", "Google", "Radio Management", "User Privacy", "API Update"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/07/upcoming-changes-nearby-connections-api.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-085",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在 Use-after-free 漏洞，可能導致沙盒逃逸",
    summary: "Google Chrome 在 Android 平台上的版本 150.0.7871.128 之前，存在一個名為 CVE-2026-15900 的安全漏洞。此漏洞屬於 Use-after-free 類型，影響範圍為 GPU 處理器。若攻擊者能透過精心構造的 HTML 頁面，利用此漏洞，理論上可能執行沙盒逃逸（sandbox escape）。這類漏洞的嚴重性被評定為「Critical」。實務上，使用者應立即更新 Chrome 瀏覽器至最新版本，以修補此核心安全缺陷。由於 NVD 尚未提供 CVSS 分數等詳細評估，建議使用者保持警惕，並遵循 Google 官方的修補建議。",
    tags: ["Google Chrome", "Android", "CVE-2026-15900", "Use-after-free", "GPU", "沙盒逃逸"],
    title_en: "Use-after-free vulnerability found in Google Chrome Android, potentially leading to sandbox escape",
    summary_en: "Google Chrome versions prior to 150.0.7871.128 on the Android platform contain a security vulnerability identified as CVE-2026-15900. This vulnerability is of the Use-after-free type and affects the GPU processor. Theoretically, if an attacker can exploit this vulnerability using a specially crafted HTML page, it could lead to a sandbox escape. The severity of this vulnerability is rated as \"Critical.\" Practically, users should immediately update their Chrome browser to the latest version to patch this core security flaw. Since NVD has not yet provided detailed assessments such as the CVSS score, users are advised to remain vigilant and follow official patching recommendations from Google.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-15900", "Use-after-free", "GPU", "sandbox escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15900", lang: "EN" }
    ]
  },
  {
    id: "20260720-086",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Hugging Face遭自主AI代理攻擊：透過惡意資料集利用程式碼執行路徑滲透內部系統",
    summary: "AI平台Hugging Face近日遭遇一次由自主AI代理系統發動的駭客攻擊。攻擊的起點是惡意資料集，該資料集濫用了兩個程式碼執行路徑：一個是遠端程式碼資料集載入器，另一個是資料集配置中的模板注入，從而讓攻擊者在處理工作節點上執行惡意程式碼。攻擊者利用此存取點，成功升級至節點級別權限，收集了雲端和叢集憑證，並在週末期間橫向移動至多個內部叢集。攻擊行為由一個自主代理框架執行，該框架在短壽命的沙箱群組中執行了數千個獨立動作，並在公共服務上設置了自我遷移的命令與控制（C2）機制。Hugging Face已修復了根本原因，包括移除攻擊者足跡、重建受影響節點、輪換所有相關憑證和密鑰，並部署了更嚴格的存取控制和監控警報。公司呼籲客戶輪換所有存取權杖並審查帳戶活動。此次事件凸顯了在進行鑑識分析時，若西方主流模型因安全防護機制（Guardrails）觸發而無法處理攻擊命令和C2工件，企業應準備能在自有基礎設施上運行的、不受限制的AI模型。",
    tags: ["Hugging Face", "自主AI代理", "資料集注入", "程式碼執行", "AI安全", "C2"],
    title_en: "Hugging Face Targeted by Autonomous AI Agent Attack: Internal Systems Penetrated via Malicious Dataset Exploitation",
    summary_en: "The AI platform Hugging Face recently suffered a cyberattack launched by an autonomous AI agent system. The attack originated from a malicious dataset, which exploited two code execution paths: a remote code dataset loader and template injection within the dataset configuration. This allowed the attacker to execute malicious code on the processing worker nodes. Utilizing this access point, the attacker successfully escalated to node-level privileges, collecting cloud and cluster credentials, and subsequently performed lateral movement to multiple internal clusters over the weekend. The attack was executed by an autonomous agent framework, which ran thousands of independent actions within short-lived sandbox groups and established self-propagating command and control (C2) mechanisms on public services. Hugging Face has remediated the root cause by removing attacker artifacts, rebuilding affected nodes, rotating all relevant credentials and keys, and deploying stricter access controls and monitoring alerts. The company urges customers to rotate all access tokens and review account activity. This incident highlights that when performing forensic analysis, enterprises should prepare for unrestricted AI models running on proprietary infrastructure, especially if Western mainstream models fail to process attack commands and C2 artifacts due to safety guardrails.",
    tags_en: ["Hugging Face", "Autonomous AI Agent", "Dataset Injection", "Code Execution", "AI Security", "C2"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/worlds-largest-ai-model-repository.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-087",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 應用工具擴展風險：Gartner警告 AI Ops 將導致控制台蔓延與更多故障",
    summary: "Gartner 預測，隨著 AI 和機器學習（ML）的應用工具日益普及，特別是將 AI 代理（agents）連接到外部服務，將會極大地擴大風險範圍。這種「AI Ops」的趨勢，雖然提升了功能性，但也可能導致「控制台蔓延」（console sprawl），使系統管理和監控變得複雜，並增加故障點。文章強調，AI 系統的複雜性與分散化，使得系統的維護和故障排除難度增加，資安人員必須警惕這種由工具鏈過度擴展帶來的風險。雖然原文未提供具體 CVE 或版本號，但其核心警告是：AI 系統的整合與複雜化，會成為新的攻擊面和營運風險點。企業在部署 AI 應用時，應建立更完善的治理框架，並對各個連接點進行嚴格的權限管理與安全審計。",
    tags: ["AI Ops", "AI 代理", "系統風險", "控制台蔓延", "Gartner", "AI/ML"],
    title_en: "AI Application Tool Expansion Risks: Gartner Warns AI Ops Will Lead to Console Sprawl and More Failures",
    summary_en: "Gartner predicts that as AI and Machine Learning (ML) application tools become increasingly prevalent, especially when AI agents are connected to external services, the scope of risk will expand significantly. While this 'AI Ops' trend enhances functionality, it can also lead to 'console sprawl,' complicating system management and monitoring, and increasing points of failure. The article emphasizes that the complexity and decentralization of AI systems increase the difficulty of maintenance and troubleshooting, requiring security personnel to be vigilant about the risks stemming from over-expansion of toolchains. Although the original text does not provide specific CVEs or version numbers, its core warning is that the integration and complexity of AI systems will become new attack surfaces and operational risk points. Enterprises deploying AI applications should establish more robust governance frameworks and implement strict permission management and security audits for every connection point.",
    tags_en: ["AI Ops", "AI agents", "System risk", "Console sprawl", "Gartner", "AI/ML"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/20/ai-ops-tools-will-create-console-sprawl-and-break-it-more-often-gartner/5274712", lang: "EN" }
    ]
  },
  {
    id: "20260720-088",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Ivanti利用大型語言模型（LLMs）自動修復漏洞：從Sentry產品線開始推動自動化修補流程",
    summary: "鑑於網路威脅行為者利用人工智慧進行網路攻擊的日益擔憂，資安廠商Ivanti正積極推動將大型語言模型（LLMs）應用於漏洞修復與發現。Ivanti的資安長Daniel Spicer透露，他們利用LLMs來增強紅隊和產品安全團隊的能力，特別針對傳統工具難以發現的漏洞。他們已成功利用LLMs發現了其Sentry行動閘道產品中的一個嚴重漏洞（CVE-2026-10520，CVSS評分10/10）。在修復方面，Ivanti的目標是讓LLMs在SAST和DAST掃描工具發現的弱點時，能夠自動化地進行修復，並將修補後的程式碼提交給工程師審核，甚至最終目標是實現完全自動化的修補流程。Ivanti目前結合了多種前沿和開源LLMs，透過針對特定CWE類別設計提示詞（prompt），將修補過程轉化為可持續運營的技能，並建立AI Agent。這項技術的應用，預示著資安修補流程正朝向高度自動化、甚至無需人工介入的未來發展。",
    tags: ["Ivanti", "LLMs", "漏洞修復", "SAST", "DAST", "CVE-2026-10520", "AI Agent"],
    title_en: "Ivanti Uses Large Language Models (LLMs) to Automatically Patch Vulnerabilities: Initiating Automated Patching Process Starting with Sentry Product Line",
    summary_en: "Given growing concerns about threat actors using artificial intelligence for cyberattacks, cybersecurity vendor Ivanti is actively promoting the application of Large Language Models (LLMs) for vulnerability remediation and discovery. Ivanti's Chief Information Security Officer, Daniel Spicer, revealed that they are utilizing LLMs to enhance the capabilities of their red team and product security teams, especially for vulnerabilities that are difficult for traditional tools to detect. They successfully used LLMs to discover a critical vulnerability (CVE-2026-10520, CVSS score 10/10) in their Sentry mobile gateway product. Regarding remediation, Ivanti aims to enable LLMs to automatically fix weaknesses found by SAST and DAST scanning tools, submitting the patched code for engineer review, with the ultimate goal of achieving a fully automated patching process. Ivanti currently combines various cutting-edge and open-source LLMs, transforming the patching process into a sustainable operational skill by designing prompts targeting specific CWE categories, and establishing an AI Agent. The application of this technology suggests that the cybersecurity patching process is moving toward a highly automated future, potentially requiring no human intervention.",
    tags_en: ["Ivanti", "LLMs", "Vulnerability Remediation", "SAST", "DAST", "CVE-2026-10520", "AI Agent"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/remediating-vulnerabilities-llms-ivanti-automation", lang: "EN" }
    ]
  },
  {
    id: "20260720-089",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI帶來的風險加劇CISO壓力：企業需建立跨部門的AI治理與安全標準",
    summary: "隨著企業全面採用AI技術，網路攻擊面急劇擴大，使得資安長（CISO）面臨前所未有的治理和法律風險。根據Splunk的調查指出，高階資安主管中，有近四分之一（26%）考慮離職，主要壓力來源包括AI帶來的複雜性、個人法律責任的擔憂，以及攻擊面擴大的風險。CISO現在幾乎都必須負責AI的治理與風險管理，且有高比例的主管擔心因資安事件導致的個人責任。文章強調，AI的快速採用導致員工常規建立「影子AI」（Shadow AI）應用，造成巨大的安全盲區。雖然AI能提升資安團隊分析和事件監控的能力，但CISO仍需與董事會合作，建立一套基於穩健風險管理原則的資安計畫，並特別關注AI代理（Agents）的工具呼叫、驗證機制及連接範圍，以應對日益複雜的威脅。",
    tags: ["AI治理", "CISO", "影子AI", "資安風險", "AI代理", "風險管理"],
    title_en: "AI-Driven Risks Intensify CISO Pressure: Enterprises Must Establish Cross-Departmental AI Governance and Security Standards",
    summary_en: "As enterprises fully adopt AI technology, the cyber attack surface is rapidly expanding, presenting CISOs with unprecedented governance and legal risks. According to a Splunk survey, nearly a quarter (26%) of senior security executives are considering leaving their roles. Key sources of stress include the complexity introduced by AI, concerns over personal legal liability, and the risks associated with an expanding attack surface. CISOs are now almost required to manage AI governance and risk, and a high proportion of executives worry about personal liability stemming from security incidents. The article emphasizes that the rapid adoption of AI leads employees to frequently establish 'Shadow AI' applications, creating massive security blind spots. While AI can enhance a security team's ability to analyze and monitor incidents, CISOs must collaborate with the board of directors to establish a security plan based on robust risk management principles, paying special attention to AI Agents' tool calling, validation mechanisms, and connection scope to address increasingly complex threats.",
    tags_en: ["AI Governance", "CISO", "Shadow AI", "Cybersecurity Risk", "AI Agents", "Risk Management"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/cisos-feel-heat-ai-risk", lang: "EN" }
    ]
  },
  {
    id: "20260720-090",
    trackers: ["security"],
    category: "前瞻技術",
    title: "MITRE公布持續遠端鑑證框架：強化雲端、AI與機密運算環境的動態信任驗證標準",
    summary: "美國非營利研究機構 MITRE 於 7 月 16 日公布《持續遠端鑑證框架》（Framework for Continuous Remote Attestation）草案。此框架與 Fr0ntierX、Invary 及堪薩斯大學合作推動，旨在為雲端、AI 工作負載及機密運算環境建立一套可持續驗證系統信任狀態的互通性標準。傳統資安模型僅在系統啟動時進行驗證，已無法應對現代威脅，因此此框架強調「執行時信任」的持續鑑證，使其成為實踐零信任架構的關鍵基石。\n\n該框架採用分層遠端驗證方法，涵蓋範圍從底層硬體根、作業系統、容器、執行環境，直至最上層的 AI 工作負載，目標是建立跨產業的技術標準。MITRE 呼籲業界參與，期盼雲端服務商、硬體廠商與 AI 平臺業者能提供意見回饋，共同完善這套守護未來運算環境的關鍵標準。",
    tags: ["MITRE", "持續遠端鑑證", "機密運算", "零信任", "AI 工作負載", "硬體信任根"],
    title_en: "MITRE Releases Continuous Remote Attestation Framework: Establishing Dynamic Trust Verification Standards for Cloud, AI, and Confidential Computing Environments",
    summary_en: "The US non-profit research organization MITRE published the draft 'Framework for Continuous Remote Attestation' on July 16. Developed in collaboration with Fr0ntierX, Invary, and the University of Kansas, this framework aims to establish an interoperable standard for continuously verifying the trust state of cloud, AI workloads, and confidential computing environments. Traditional security models only validate systems at startup, which is insufficient to address modern threats. Therefore, the framework emphasizes continuous attestation of 'runtime trust,' making it a critical foundation for implementing zero trust architectures.\n\nThe framework adopts a layered remote attestation approach, covering scopes from the underlying hardware root, operating system, containers, and execution environments, up to the highest layer of AI workloads. Its goal is to establish an industry-wide technical standard. MITRE calls for industry participation, inviting cloud service providers, hardware manufacturers, and AI platform vendors to provide feedback to jointly perfect this key standard for safeguarding future computing environments.",
    tags_en: ["MITRE", "Continuous Remote Attestation", "Confidential Computing", "Zero Trust", "AI Workloads", "Hardware Root of Trust"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177444", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-091",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CSA發布AI控制矩陣1.1版：提供AI生命週期安全與治理指引",
    summary: "雲端安全聯盟（CSA）於7月14日更新並發布AI控制矩陣（AI Controls Matrix, AICM）1.1版。本次更新將控制目標從243項增加至247項，涵蓋18個控制領域，旨在應對企業加速導入生成式AI與AI代理所帶來的風險。CSA指出，隨著AI應用擴展，資料外洩、模型安全、供應鏈中斷，以及漏洞利用速度加快等風險日益升高。AICM涵蓋AI系統從規劃、建置到除役的完整生命週期，提供了具體的安全控制措施，例如防範模型遭到操控或污染、防止提示注入（Prompt Injection）以及保護模型權重和推論過程的安全性（Inference security）。除了AICM，CSA亦提供AI共識評估計畫問卷（AI-CAIQ）和控制實作指南，協助企業盤點AI系統，並檢視第三方AI服務供應商的安全管理能力。CSA建議企業應依據系統角色與架構，選擇並落實適當的控制措施。",
    tags: ["CSA", "AI Controls Matrix", "AICM", "生成式AI", "模型安全", "提示注入", "AI治理"],
    title_en: "CSA Releases AI Controls Matrix 1.1: Providing Guidance for AI Lifecycle Security and Governance",
    summary_en: "The Cloud Security Alliance (CSA) updated and released the AI Controls Matrix (AICM) version 1.1 on July 14th. This update increases the number of control objectives from 243 to 247, covering 18 control domains. It aims to address the risks posed by enterprises accelerating the adoption of generative AI and AI agents. CSA points out that as AI applications expand, risks such as data leakage, model security issues, supply chain disruptions, and accelerated vulnerability exploitation are increasing. The AICM covers the entire lifecycle of AI systems, from planning and deployment to decommissioning, providing specific security controls. Examples include preventing model manipulation or contamination, preventing Prompt Injection, and ensuring the security of model weights and inference processes (Inference security). In addition to the AICM, CSA also provides the AI Consensus Assessment Questionnaire (AI-CAIQ) and control implementation guides, helping enterprises inventory their AI systems and assess the security management capabilities of third-party AI service providers. CSA recommends that enterprises select and implement appropriate controls based on the system's role and architecture.",
    tags_en: ["CSA", "AI Controls Matrix", "AICM", "Generative AI", "Model Security", "Prompt Injection", "AI Governance"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177442", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260720-092",
    trackers: ["security"],
    category: "前瞻技術",
    title: "俄語駭客利用 Google Gemini CLI AI，建立可快速遷移的 C&C 基礎設施進行網路攻擊",
    summary: "研究人員分析了 2026 年 3 月至 4 月期間的 Gemini CLI 工作階段日誌，發現一名俄語駭客（代號 bandcampro）利用 Google Gemini 開源 AI 工具，將其作為「主要駭客代理、顧問和介面」，來執行複雜的網路攻擊活動。駭客利用 AI 進行密碼破解、建立住宅代理、入侵 WordPress 商家，並規劃針對老年人的加密貨幣詐騙。具體案例顯示，駭客利用 Gemini CLI 在牙科診所部署並操作了 C&C 基礎設施，並成功控制了多台設備。AI 甚至能自動診斷並修復如「502 Bad Gateway」等網路錯誤，並在極短時間內將整個 C&C 架構遷移到新的 VPS 上。這使得整個 C&C 營運高度可複製且易於丟棄，極大地降低了資安防禦的難度。此外，AI 也被用於管理殭屍網路、生成 PowerShell 指令等。Trend Micro 警告，這種 AI 輔助的攻擊模式，使得攻擊基礎設施變得「可丟棄」，並可能讓缺乏技術知識的惡意行為者也能執行大規模攻擊，使溯源和阻斷難度大幅提升。",
    tags: ["Google Gemini", "AI 攻擊", "C&C 基礎設施", "殭屍網路", "駭客行為", "Credential Theft"],
    title_en: "Russian Hacker Uses Google Gemini CLI AI to Establish Highly Portable C&C Infrastructure for Cyber Attacks",
    summary_en: "Researchers analyzed Gemini CLI session logs from March to April 2026 and discovered a Russian hacker (alias bandcampro) who utilized the Google Gemini open-source AI tool as a 'primary hacking agent, consultant, and interface' to execute complex cyber attack activities. The hacker used the AI for password cracking, establishing residential proxies, infiltrating WordPress merchants, and planning cryptocurrency scams targeting the elderly. Specific cases showed the hacker using Gemini CLI to deploy and operate a C&C infrastructure within a dental clinic, successfully controlling multiple devices. The AI could even automatically diagnose and fix network errors like '502 Bad Gateway,' and migrate the entire C&C architecture to a new VPS in a very short time. This made the entire C&C operation highly reproducible and easy to discard, significantly lowering the difficulty of cybersecurity defense. Furthermore, the AI was also used to manage botnets and generate PowerShell commands. Trend Micro warned that this AI-assisted attack pattern makes attack infrastructure 'disposable,' potentially enabling malicious actors lacking technical knowledge to execute large-scale attacks, greatly increasing the difficulty of attribution and disruption.",
    tags_en: ["Google Gemini", "AI Attacks", "C&C Infrastructure", "Botnets", "Hacking Behavior", "Credential Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/russian-speaking-hacker-uses-google.html", lang: "EN" }
    ]
  },
  {
    id: "20260720-093",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安資訊：9to5Google Podcast「The Sideload」第 39 集內容概述",
    summary: "本文內容為 9to5Google 播客《The Sideload》的第 39 集介紹，主題涵蓋現代網路景觀、如何在科技時代尋找平靜，以及不斷發展的機器草坪機（robo-lawnmowers）世界。本集邀請了 Chris Wedel（來自 Gadgets & Gravel）進行討論。內容主要為一般科技生活議題的閒聊與觀察，並包含 NordVPN 的贊助廣告。由於原文不涉及任何資安漏洞、產品更新或技術細節，因此無法提供任何具體的 CVE、CVSS 分數或修補建議。聽眾可透過多個平台（如 YouTube、Spotify、Apple Podcasts）收聽。",
    tags: ["9to5Google", "The Sideload", "Podcast", "NordVPN", "科技趨勢", "網路安全"],
    title_en: "Non-Security Information: Overview of 9to5Google Podcast's 'The Sideload' Episode 39",
    summary_en: "This article introduces Episode 39 of the 9to5Google podcast, 'The Sideload.' The topics covered include the modern internet landscape, finding tranquility in the technological age, and the ever-evolving world of robo-lawnmowers. The episode features a discussion with Chris Wedel from Gadgets & Gravel. The content primarily consists of general tech lifestyle chat and observations, and includes a sponsored advertisement for NordVPN. Since the original text does not involve any security vulnerabilities, product updates, or technical details, no specific CVEs, CVSS scores, or patch recommendations can be provided. Listeners can tune in on multiple platforms (such as YouTube, Spotify, and Apple Podcasts).",
    tags_en: ["9to5Google", "The Sideload", "Podcast", "NordVPN", "Tech Trends", "Cybersecurity"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/20/the-sideload-039-digital-landscaping", lang: "EN" }
    ]
  },
  {
    id: "20260720-094",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 擴大南灣辦公室版圖：簽約租賃 Sunnyvale 125,800 平方呎新址",
    summary: "本文報導 Apple 於 2026 年簽下位於 Sunnyvale 的辦公室租賃合約，面積約 125,800 平方呎。這標誌著 Apple 在 2026 年於該地區進行的重大房地產佈局。此舉發生在 Apple 經歷了 2025 年大規模的南灣擴張，當年公司投入超過 10 億美元，購買了包括 Cupertino Gateway 和 Mathilda Commons 等多個大型房產群。此外，市場報告指出，南灣的辦公室空置率正在改善，第二季度為 14.1%。除了 Apple 之外，Amazon 也簽約租賃了位於 Sunnyvale 的辦公空間。本新聞內容屬於商業房地產動態，未涉及任何資安技術或漏洞資訊，因此無法提供修補建議。",
    tags: ["Apple", "Sunnyvale", "南灣", "房地產", "商業動態", "擴張"],
    title_en: "Apple Expands South Bay Office Footprint: Signs Lease for 125,800 Sq. Ft. New Location in Sunnyvale",
    summary_en: "This article reports that Apple signed an office lease in Sunnyvale in 2026, covering an area of approximately 125,800 sq. ft. This marks a significant real estate expansion for Apple in the region in 2026. This move follows Apple's large-scale South Bay expansion in 2025, when the company invested over $1 billion, acquiring multiple large property complexes including Cupertino Gateway and Mathilda Commons. Furthermore, market reports indicate that the office vacancy rate in the South Bay is improving, standing at 14.1% in the second quarter. Besides Apple, Amazon has also signed a lease for office space in Sunnyvale. As this news content pertains to commercial real estate dynamics and does not involve cybersecurity technology or vulnerability information, no patch recommendations can be provided.",
    tags_en: ["Apple", "Sunnyvale", "South Bay", "Real Estate", "Commercial Dynamics", "Expansion"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-leases-126000-square-foot-office-building-in-sunnyvale", lang: "EN" }
    ]
  },
  {
    id: "20260720-095",
    trackers: ["os"],
    category: "重點關注",
    title: "Volvo 宣布透過 OTA 更新，為超過兩百萬輛車型整合 Apple Music 娛樂系統",
    summary: "汽車製造商 Volvo 宣布將透過空中下載（OTA）更新，為旗下多款車型（包括 EX90、ES90、XC90、S90、V90、XC60、S60、V60、XC40、EX40 和 EC40，適用於 2020 年及之後的車型）的資訊娛樂系統整合 Apple Music 功能。此更新旨在提升車主的使用體驗，並提供給符合資格的客戶免費試用期。除了標準播放外，配備 Bowers & Wilkins 音響系統的 EX60、EX90 和 ES90 還將支援 Dolby Atmos 的空間音訊。此外，全新推出的 EX60 在交付時也會原生整合 Apple Music。此更新屬於汽車電子系統的軟體功能升級，主要影響車主的使用便利性，並需車主保持 Apple Music 的有效訂閱才能使用。相關優惠活動將持續至 2027 年 7 月 6 日。",
    tags: ["Volvo", "Apple Music", "OTA 更新", "車載娛樂系統", "汽車電子", "Dolby Atmos"],
    title_en: "Volvo announces integration of Apple Music entertainment system via OTA update for over two million vehicles",
    summary_en: "Automaker Volvo announced that it will integrate Apple Music functionality into the infotainment systems of multiple vehicle models (including EX90, ES90, XC90, S90, V90, XC60, S60, V60, XC40, EX40, and EC40, applicable to models from 2020 onwards) via Over-The-Air (OTA) update. This update aims to enhance the owner's user experience and offers a free trial period for eligible customers. In addition to standard playback, the EX60, EX90, and ES90 equipped with Bowers & Wilkins audio systems will also support Dolby Atmos spatial audio. Furthermore, the newly launched EX60 will natively integrate Apple Music upon delivery. This update constitutes a software functional upgrade to the vehicle's electronic system, primarily affecting the owner's convenience of use, and requires the owner to maintain an active Apple Music subscription to use the service. The related promotional offer will continue until July 6, 2027.",
    tags_en: ["Volvo", "Apple Music", "OTA Update", "In-car Entertainment System", "Automotive Electronics", "Dolby Atmos"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/volvo-adds-apple-music-to-more-than-2-million-cars-with-up-to-three-months-free", lang: "EN" }
    ]
  },
  {
    id: "20260720-096",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 宣布新電影《Being Heumann》將於 11 月上映，聚焦殘障權益運動的真實故事",
    summary: "Apple 的影視部門宣布，由電影《CODA》的導演 Sian Heder 的續作《Being Heumann》將於 11 月 6 日在電影院上映，並於 11 月 13 日在 Apple TV 平台推出。該片基於真實故事，講述 Judy Heumann 在 1977 年發起的殘障權益運動，展現她如何將憤怒轉化為革命的動力。這部電影預計將與其他多部電影一同角逐下一屆奧斯卡獎。雖然原文未提供具體的技術漏洞或資安資訊，但此新聞主要為影視內容更新，提醒用戶關注 Apple TV 平台的內容生態與相關的觀影體驗。",
    tags: ["Apple", "Apple TV", "Being Heumann", "CODA", "電影上映", "影視內容"],
    title_en: "Apple Announces New Film 'Being Heumann' Premiering in November, Focusing on the Real Story of Disability Rights Activism",
    summary_en: "Apple's film and television division announced that 'Being Heumann,' a sequel to the film 'CODA' directed by Sian Heder, will premiere in theaters on November 6 and be available on the Apple TV platform on November 13. The film is based on a true story, recounting Judy Heumann's disability rights activism starting in 1977, and showcasing how she transformed anger into revolutionary force. The movie is expected to compete with several other films for the next Academy Awards. Although the original text does not provide specific technical vulnerabilities or cybersecurity information, this news primarily concerns cinematic content updates, reminding users to pay attention to the content ecosystem and related viewing experiences on the Apple TV platform.",
    tags_en: ["Apple", "Apple TV", "Being Heumann", "CODA", "Film Release", "Media Content"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/apple-unveils-new-film-from-best-picture-oscar-winner", lang: "EN" }
    ]
  },
  {
    id: "20260720-097",
    trackers: ["os"],
    category: "重點關注",
    title: "Amazon修改訂單郵件格式導致Apple Wallet訂單追蹤功能失效",
    summary: "Apple Wallet曾透過AI功能，能掃描用戶的電子郵件，自動將線上訂單資訊（包括產品細節）加入錢包，讓用戶能追蹤多個零售商的訂單。然而，由於Amazon方面進行了郵件內容的變更，導致Apple Wallet的訂單追蹤功能對Amazon的購物者幾乎失效。過去，Amazon的訂單相關郵件會包含具體的產品細節，但現在Amazon改為只使用模糊的類別詞彙來提及產品（例如，將尿布訂單描述為「3 Drugstore Items」）。由於Apple Wallet的追蹤功能依賴郵件中的產品細節來運作，當Amazon移除這些具體資訊後，Wallet應用程式便無法提供準確的訂單追蹤協助。這項變動對經常在Amazon購物並依賴Wallet追蹤訂單的用戶造成實質不便，且目前似乎沒有可供用戶選擇退出或恢復產品細節的途徑。",
    tags: ["Apple Wallet", "Amazon", "訂單追蹤", "AI功能", "iOS 26", "用戶體驗"],
    title_en: "Amazon Modification to Order Email Format Causes Apple Wallet Order Tracking Failure",
    summary_en: "Apple Wallet previously utilized an AI feature that could scan users' emails and automatically add online order information (including product details) to the wallet, allowing users to track orders from multiple retailers. However, due to changes made by Amazon to the email content, Apple Wallet's order tracking function for Amazon shoppers has become nearly ineffective. Previously, Amazon's order-related emails contained specific product details, but Amazon now uses vague category terms to reference products (for example, describing a diaper order as \"3 Drugstore Items\"). Since Apple Wallet's tracking function relies on product details within the email to operate, when Amazon removed these specific details, the Wallet application can no longer provide accurate order tracking assistance. This change causes significant inconvenience for users who frequently shop on Amazon and rely on Wallet for order tracking, and there currently appears to be no option for users to opt out or restore the product details.",
    tags_en: ["Apple Wallet", "Amazon", "Order Tracking", "AI Feature", "iOS 26", "User Experience"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/amazon-just-broke-one-of-apple-wallets-best-recent-features", lang: "EN" }
    ]
  },
  {
    id: "20260720-098",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 產品價格上漲恐減緩用戶升級週期，消費者行為分析",
    summary: "根據 9to5Mac 網站的讀者調查，市場普遍認為 Apple 提高產品價格的趨勢，可能會減緩用戶的設備升級週期。調查結果顯示，大多數讀者表示，即使價格上漲，他們也會選擇延後升級。只有極少數（約 9%）的受訪者認為價格上漲不會影響他們的購買行為。這項分析主要關注市場經濟和消費者行為，而非特定的技術漏洞或安全事件。對於消費者和產業觀察者而言，這提醒了設備製造商在制定價格策略時，需更謹慎評估市場對價格敏感度的影響。",
    tags: ["Apple", "市場趨勢", "消費者行為", "產品定價", "升級週期"],
    title_en: "Apple Product Price Increases May Slow User Upgrade Cycles: A Consumer Behavior Analysis",
    summary_en: "According to a reader survey conducted by 9to5Mac, the market generally believes that Apple's trend of raising product prices may slow down the user device upgrade cycle. The survey results showed that most readers indicated that even with price increases, they would choose to delay upgrading. Only a small minority (approximately 9%) believed that price increases would not affect their purchasing behavior. This analysis focuses primarily on market economics and consumer behavior, rather than specific technical vulnerabilities or security incidents. For consumers and industry observers, this serves as a reminder that device manufacturers must carefully assess the impact of price sensitivity when formulating pricing strategies.",
    tags_en: ["Apple", "Market Trends", "Consumer Behavior", "Product Pricing", "Upgrade Cycle"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/higher-apple-prices-look-set-to-slow-upgrade-cycles", lang: "EN" }
    ]
  },
  {
    id: "20260720-099",
    trackers: ["os"],
    category: "重點關注",
    title: "AI生成內容成新威脅：名人自傳與書籍在Apple Books及Amazon上充斥假文獻",
    summary: "近期觀察指出，利用人工智慧（AI）技術生成虛假內容的現象正日益嚴重。內容創作者和名人，如作家 Joanna Stern 和記者 Kashmir Hill，都遭遇了此類困擾。Joanna Stern 在其著作《I Am Not a Robot》發行後不久，便在 Apple Books 上發現了多個仿冒版本；而 Kashmir Hill 則在 Amazon 上發現了大量由 AI 撰寫的虛假個人傳記。這些案例顯示，AI 內容生成工具已成為製造假文獻的主要來源，其數量和速度令人擔憂。這類假內容不僅可能造成名譽損害，也可能影響市場的真實資訊流通。雖然文章未提供具體修補建議，但強調了內容創作者需要提高警覺，並可能需要平台（如 Apple Books 和 Amazon）加強內容審核機制，以應對 AI 深度偽造內容帶來的威脅。",
    tags: ["AI生成內容", "深度偽造", "Apple Books", "Amazon", "內容審核", "資訊安全"],
    title_en: "AI-Generated Content Becomes New Threat: Celebrity Memoirs and Books Flooding Apple Books and Amazon with Fake Literature",
    summary_en: "Recent observations indicate that the phenomenon of generating false content using Artificial Intelligence (AI) technology is becoming increasingly severe. Content creators and celebrities, such as author Joanna Stern and journalist Kashmir Hill, have encountered this problem. Shortly after the release of her work, *I Am Not a Robot*, Joanna Stern found multiple counterfeit versions on Apple Books; meanwhile, Kashmir Hill discovered a large volume of AI-written fake biographies on Amazon. These cases demonstrate that AI content generation tools have become a primary source for manufacturing fake literature, and their volume and speed are concerning. Such fake content not only risks causing reputational damage but can also affect the circulation of truthful information in the market. Although the article does not provide specific remediation suggestions, it emphasizes that content creators need to heighten their vigilance and that platforms (such as Apple Books and Amazon) may need to strengthen their content review mechanisms to address the threats posed by AI deepfake content.",
    tags_en: ["AI-Generated Content", "Deepfake", "Apple Books", "Amazon", "Content Review", "Information Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/20/ai-fakes-a-growing-problem-on-apple-books-some-written-in-a-few-hours", lang: "EN" }
    ]
  },
  {
    id: "20260720-100",
    trackers: ["os"],
    category: "重點關注",
    title: "無人機技術在美國野火應對中的應用：小型無人機用於快速撲滅初期火源",
    summary: "隨著氣候變遷導致野火季節幾乎全年化，各方正在測試無人機作為快速應變工具的潛力。這些小型無人機無法取代大型飛機運輸大量水或阻燃劑，但它們被用於協助消防人員快速應對小型火源。在加州，CAL FIRE等機構與私人公司（如Seneca）合作進行了實地測試。Seneca的Argo-1無人機每架可攜帶約100磅的水或阻燃劑。當操作員上傳GPS座標點後，這些自主無人機可以飛向目標，利用感測器偵測火源熱訊號，並進行協同噴灑。雖然滿載無人機的單程往返距離有限（約10英里），但其體積小，易於運輸，顯示出在偏遠或初期火災應對中的實用價值。",
    tags: ["無人機", "野火應對", "CAL FIRE", "Seneca", "Argo-1", "氣候變遷"],
    title_en: "Application of Drone Technology in US Wildfire Response: Small Drones for Rapid Initial Fire Suppression",
    summary_en: "As climate change has made wildfire seasons nearly year-round, various parties are testing the potential of drones as rapid response tools. While these small drones cannot replace large aircraft that transport massive amounts of water or retardants, they are being used to assist firefighters in rapidly addressing small fire sources. In California, agencies like CAL FIRE have conducted field tests in collaboration with private companies (such as Seneca). Seneca's Argo-1 drone can carry approximately 100 pounds of water or retardant per unit. After the operator uploads GPS coordinates, these autonomous drones can fly to the target, use sensors to detect heat signatures from the fire source, and perform coordinated spraying. Although the single round-trip distance for a fully loaded drone is limited (approximately 10 miles), its small size and ease of transport demonstrate practical value in remote or initial wildfire response scenarios.",
    tags_en: ["Drone", "Wildfire Response", "CAL FIRE", "Seneca", "Argo-1", "Climate Change"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/07/firefighting-drones-in-the-works-as-wildfires-plague-us-nearly-year-round", lang: "EN" }
    ]
  },
  {
    id: "20260720-101",
    trackers: ["os"],
    category: "重點關注",
    title: "聯邦法官下令暫停派拉蒙與華納兄弟的合併案，支持州政府反壟斷訴訟",
    summary: "聯邦法官已下令暫停派拉蒙（Paramount）和華納兄弟（Warner Bros. Discovery）進行價值 1,110 億美元的合併案。這項臨時禁令禁止兩家公司完成合併和整合營運。這項禁令最初僅為 14 天有效，但可延長為初步禁令，直到案件最終解決。這起訴訟由包括加州在內的 12 個州提起，旨在阻止這場合併案，因為州政府認為它將消除市場競爭，特別是在電影影業和有線電視領域。法官指出，合併後的公司預計將佔據 27% 的院線發行市場份額，並認為這「極有可能違反反壟斷法」。這顯示了州政府在維護市場競爭和防止大型企業壟斷方面的法律行動。",
    tags: ["反壟斷法", "Paramount", "Warner Bros. Discovery", "合併案", "聯邦法庭", "市場競爭"],
    title_en: "Federal Judge Halts Paramount and Warner Bros. Discovery Merger, Supporting State Anti-Trust Lawsuits",
    summary_en: "A federal judge has issued an injunction halting the $111 billion merger between Paramount and Warner Bros. Discovery. This temporary restraining order prohibits the two companies from completing the merger and integrating operations. Although initially valid for only 14 days, the injunction can be extended to a preliminary injunction until the case is finally resolved. The lawsuit was filed by 12 states, including California, aiming to block the merger because the state governments believe it will eliminate market competition, particularly in the film and cable television sectors. The judge noted that the merged company is expected to hold a 27% market share in theatrical film distribution and deemed this 'highly likely to violate anti-trust law.' This highlights the legal actions taken by state governments to maintain market competition and prevent corporate monopolies.",
    tags_en: ["Anti-trust Law", "Paramount", "Warner Bros. Discovery", "Merger", "Federal Court", "Market Competition"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/judge-halts-paramounts-111b-purchase-of-warner-bros-in-win-for-us-states", lang: "EN" }
    ]
  },
  {
    id: "20260720-102",
    trackers: ["os"],
    category: "重點關注",
    title: "美國太空軍擴大國防衛星發射能力，NSSL合約增至170億美元",
    summary: "美國太空軍（US Space Force）宣布大幅增加其國家安全太空發射（NSSL）合約的最高價值，從原先的56億美元增至170億美元。此舉反映了國防部對軍事衛星發射需求不斷上升的趨勢。NSSL計畫旨在讓太空系統司令部（Space Systems Command）從眾多發射服務提供商中，為單一任務選擇最合適的發射服務。NSSL分為兩條路徑：Lane 1適用於風險較高的任務，如實驗性有效載荷或衛星群組的共用發射；而Lane 2則專用於最高優先級的戰略任務，例如用於監聽或生存核戰的衛星。目前，這筆170億美元的資金主要用於Lane 1的採購，該路徑對商業發射商的認證要求較低。目前參與Lane 1的商業公司包括SpaceX、ULA、Blue Origin、Rocket Lab、Stoke Space、Relativity Space和Impulse Space等。SpaceX目前在Lane 1任務訂單中佔據了大部分份額。",
    tags: ["美國太空軍", "NSSL", "國防部", "衛星發射", "SpaceX", "ULA"],
    title_en: "US Space Force Expands National Security Space Launch Capability, Increasing NSSL Contract Value to $17 Billion",
    summary_en: "The US Space Force announced a significant increase in the maximum value of its National Security Space Launch (NSSL) contract, raising it from the original $5.6 billion to $17 billion. This move reflects the Department of Defense's continuously rising demand for military satellite launch capabilities. The NSSL program aims to allow the Space Systems Command to select the most suitable launch service from multiple service providers for a single mission. NSSL is divided into two paths: Lane 1 is applicable to higher-risk missions, such as experimental payloads or shared launches for satellite constellations; while Lane 2 is dedicated to the highest-priority strategic missions, such as satellites for monitoring or surviving nuclear war. Currently, the $17 billion funding is primarily allocated to Lane 1 procurement, a path that has lower certification requirements for commercial launch providers. Commercial companies currently participating in Lane 1 include SpaceX, ULA, Blue Origin, Rocket Lab, Stoke Space, Relativity Space, and Impulse Space. SpaceX currently holds the majority share of the Lane 1 mission orders.",
    tags_en: ["US Space Force", "NSSL", "Department of Defense", "Satellite Launch", "SpaceX", "ULA"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/the-space-force-is-now-seeking-to-buy-up-to-30-billion-in-rocket-launches", lang: "EN" }
    ]
  },
  {
    id: "20260720-103",
    trackers: ["os"],
    category: "重點關注",
    title: "AT&T訴訟敗訴：加州電信服務規定仍有效，電信商須持續提供基礎電話服務",
    summary: "AT&T曾向聯邦法院提起訴訟，試圖廢除加州《最後一哩路電信商》（COLR）規定，該規定要求電信商在其服務區域內向潛在客戶提供基礎電話服務。AT&T主張該州規定已被聯邦通信委員會（FCC）的命令取代，並尋求臨時禁令以立即停止向新客戶提供服務。然而，在南加州地區法院的聽證會上，聯邦法官拒絕了AT&T的臨時禁令申請。因此，AT&T目前仍須遵守加州的規定，持續向潛在客戶提供電話服務。AT&T計畫在2027年6月1日停止向新客戶提供服務，並逐步關閉部分銅線（POTS）線路，但其目前仍受限於加州的規定。",
    tags: ["AT&T", "加州", "COLR", "電信服務", "聯邦法規", "基礎電話服務"],
    title_en: "AT&T Loses Lawsuit: California Telecommunications Rules Remain Effective, Carriers Must Continue Providing Basic Phone Service",
    summary_en: "AT&T filed a lawsuit in federal court attempting to repeal California's 'California's Open Loop Rule' (COLR), which requires carriers to provide basic phone service to potential customers within their service area. AT&T argued that the state rule had been superseded by a Federal Communications Commission (FCC) order, and sought a temporary injunction to immediately cease providing service to new customers. However, at a hearing in the Southern California District Court, the federal judge denied AT&T's request for a temporary injunction. Therefore, AT&T must currently comply with California's regulations and continue providing phone services to potential customers. Although AT&T plans to stop providing service to new customers and gradually decommission some copper (POTS) lines starting June 1, 2027, it remains restricted by California's rules.",
    tags_en: ["AT&T", "California", "COLR", "Telecommunications Service", "Federal Regulation", "Basic Phone Service"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california", lang: "EN" }
    ]
  },
  {
    id: "20260720-104",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "勒索軟體威脅激增與支付爭議：企業面臨支付與法律風險的兩難困境",
    summary: "根據 Sophos 2025 年的研究，近半數的受勒索軟體攻擊的公司最終選擇支付贖金以獲取資料或系統。然而，全球多個司法管轄區，包括英國，已開始考慮或實施禁止支付贖金的政策，特別針對公共部門和關鍵基礎設施。勒索軟體攻擊的複雜度和精細度不斷提高，攻擊者尤其鎖定中小型企業。Fortinet 的分析指出，惡意 AI 駭客工具（如 WormGPT、FraudGPT）的興起，使得勒索軟體受害者數量在 2025 年年增率達到 389%，攻擊成本大幅降低，使得複雜攻擊的門檻商品化。資安專家普遍建議不支付贖金，因為這會強化犯罪生態系統，且無法保證資料恢復，甚至可能導致二次勒索。然而，部分專家也指出，在支付被禁止但資料恢復又不可行時，實際情況往往比單純的禁令更為複雜。",
    tags: ["勒索軟體", "Ransomware", "AI 駭客工具", "支付贖金", "網路安全趨勢", "供應鏈安全"],
    title_en: "Ransomware Threat Surge and Payment Dilemma: Businesses Face a Catch-22 of Payment and Legal Risk",
    summary_en: "According to Sophos' 2025 research, nearly half of companies attacked by ransomware ultimately choose to pay the ransom to retrieve data or systems. However, multiple global jurisdictions, including the UK, have begun considering or implementing policies that prohibit ransom payments, especially for public sector entities and critical infrastructure. The complexity and sophistication of ransomware attacks are constantly increasing, with attackers particularly targeting small and medium-sized enterprises (SMEs). Fortinet's analysis points out that the emergence of malicious AI hacking tools (such as WormGPT and FraudGPT) has driven the annual growth rate of ransomware victims to 389% in 2025, significantly lowering the cost of attack and commoditizing complex attacks. Cybersecurity experts generally advise against paying ransoms, as this strengthens the criminal ecosystem and does not guarantee data recovery, potentially leading to secondary extortion. However, some experts also point out that when payment is prohibited but data recovery is impossible, the actual situation is often more complex than a simple ban.",
    tags_en: ["Ransomware", "Ransomware", "AI Hacking Tools", "Ransom Payment", "Cybersecurity Trends", "Supply Chain Security"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/07/pay-up-or-not-ransomware-surge-has-victims-facing-tough-choices", lang: "EN" }
    ]
  },
  {
    id: "20260720-105",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 程式輔助工具趨勢：Anthropic Claude Code 採用「精簡式框架 (Lean Harness)」而非預設結構化上下文",
    summary: "隨著大型語言模型 (LLMs) 的快速發展，AI 輔助開發工具的重點已從模型本身轉移到管理和運用這些模型的軟體框架（Harness）。Anthropic 的 Claude Code 產品團隊指出，由於模型能力提升過快，不宜過早規劃或建立過於限制性的功能。因此，Claude Code 傾向於採用「精簡式框架 (Lean Harness)」策略，將其定位為模型與開發者專案之間的一層介面。該框架的設計哲學是信任模型未來的發展，避免預設建立結構化的程式碼上下文。文章提及了其他競爭對手如 OpenAI 的 Codex、Google 的 Antigravity，以及開源選項 OpenCode 等，它們在代理工作流 (agentic workflows) 的利用方式上各有不同。開發者應關注這種趨勢：即採用更少預設意見、更具彈性的框架，讓開發者自行疊加所需的工具與功能。",
    tags: ["AI 輔助開發", "大型語言模型", "Claude Code", "Anthropic", "Lean Harness", "代理工作流"],
    title_en: "AI Coding Assistant Tool Trends: Anthropic Claude Code Adopts 'Lean Harness' Over Default Structured Context",
    summary_en: "With the rapid development of Large Language Models (LLMs), the focus of AI-assisted development tools has shifted from the models themselves to the software frameworks (Harness) used to manage and deploy these models. The Anthropic Claude Code product team noted that due to the rapid pace of model capability improvements, it is unwise to plan or build overly restrictive features too early. Therefore, Claude Code tends to adopt a 'Lean Harness' strategy, positioning itself as an interface layer between the model and the developer's project. The framework's design philosophy is to trust the model's future development, avoiding the default establishment of structured code context. The article mentions other competitors such as OpenAI's Codex, Google's Antigravity, and the open-source option OpenCode, each utilizing agentic workflows differently. Developers should pay attention to this trend: adopting more opinionated, more flexible frameworks that allow developers to stack the necessary tools and features themselves.",
    tags_en: ["AI Assisted Development", "Large Language Models", "Claude Code", "Anthropic", "Lean Harness", "Agentic Workflows"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/07/beyond-grep-the-case-for-a-context-rich-ai-coding-harness", lang: "EN" }
    ]
  },
  {
    id: "20260720-106",
    trackers: ["os"],
    category: "重點關注",
    title: "famfs 檔案系統：用於 CXL 記憶體共享的進展與未來整合展望",
    summary: "famfs 是一個旨在提供對大型記憶體駐留檔案共享存取的檔案系統框架。該技術與 Compute Express Link (CXL) 等設備緊密相關，目標是實現高效能的記憶體共享。該概念最早於 LSFMM+BPF 2024 討論，隨後在 2025 年的會議上描述了新的實作方案。目前，famfs 尚未正式進入 Linux 核心。LWN 網站曾於 2026 年四月關注過將 famfs 合併進核心的討論。這項技術代表了 Linux 系統在處理異質記憶體和加速器資源共享方面的重大趨勢，對於未來高性能計算（HPC）和 AI 應用場景至關重要。開發者和系統架構師應持續關注其在 Linux 核心的整合進度，以了解其對儲存和記憶體管理帶來的實務影響。",
    tags: ["famfs", "CXL", "Linux 核心", "記憶體共享", "高性能計算", "檔案系統"],
    title_en: "famfs Filesystem: Progress and Future Integration Outlook for CXL Memory Sharing",
    summary_en: "famfs is a filesystem framework designed to provide access to large memory-resident file sharing. This technology is closely related to devices like Compute Express Link (CXL), aiming to achieve high-performance memory sharing. The concept was first discussed at LSFMM+BPF 2024 and later described with new implementation plans at a 2025 conference. Currently, famfs has not been formally integrated into the Linux kernel. LWN reported on the discussion of merging famfs into the kernel in April 2026. This technology represents a major trend for Linux systems in handling heterogeneous memory and accelerator resource sharing, making it crucial for future High-Performance Computing (HPC) and AI application scenarios. Developers and system architects should continue to monitor its integration progress into the Linux kernel to understand its practical impact on storage and memory management.",
    tags_en: ["famfs", "CXL", "Linux Kernel", "Memory Sharing", "High-Performance Computing", "Filesystem"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082687", lang: "EN" }
    ]
  },
  {
    id: "20260720-107",
    trackers: ["os"],
    category: "重點關注",
    title: "AMD ROCm 提升 SPIR-V 支援，推動統一 AI 軟體堆疊與跨 GPU 運算能力",
    summary: "AMD 近期發布了關於 ROCm 堆疊中 SPIR-V 介面表示（IR）支援的進展。SPIR-V 本身是與 Vulkan API 相關的中間表示，但也被 Khronos 支援的 OpenGL 和 OpenCL 等 API 所支持。AMD 透過在 ROCm 中支援 SPIR-V IR，旨在減少為每款 GPU 設備編譯專用目標的必要性，從而實現更統一的運算體驗。目前 ROCm 7.2 及更高版本已具備基礎支援，包括 AMD GCN SPIR-V 目標在 LLVM/Clang 中的實作，以及可投入生產的 SPIRV-LLVM 轉換器路徑和每進程 JIT 快取。未來目標包括將內建 LLVM SPIR-V 後端取代轉換器作為預設降級路徑，並解決 JIT 在套件級安裝和針對不同架構設備庫的建構問題。這項技術的發展預期能讓單一 ROCm 二進位檔能適用於多款 GPU，提供更平穩的建構時間和二進位大小，並已在 PyTorch 等應用中展現出成功潛力。",
    tags: ["AMD", "ROCm", "SPIR-V", "LLVM", "AI 軟體堆疊", "Vulkan"],
    title_en: "AMD ROCm Enhances SPIR-V Support to Drive Unified AI Software Stack and Cross-GPU Computing Capabilities",
    summary_en: "AMD recently announced advancements in SPIR-V Intermediate Representation (IR) support within the ROCm stack. While SPIR-V is an intermediate representation associated with the Vulkan API, it is also supported by other APIs such as OpenGL and OpenCL, which are supported by Khronos. By supporting SPIR-V IR in ROCm, AMD aims to reduce the necessity of compiling specialized targets for every GPU device, thereby achieving a more unified computing experience. Basic support is currently available in ROCm 7.2 and later versions, including the implementation of the AMD GCN SPIR-V target in LLVM/Clang, as well as a production-ready SPIRV-LLVM converter path and per-process JIT cache. Future goals include replacing the converter with a built-in LLVM SPIR-V backend as the default fallback path, and resolving issues related to JIT in package-level installation and building for different architecture device libraries. The development of this technology is expected to allow a single ROCm binary to be applicable across multiple GPUs, providing more stable build times and smaller binary sizes, and has already demonstrated successful potential in applications like PyTorch.",
    tags_en: ["AMD", "ROCm", "SPIR-V", "LLVM", "AI Software Stack", "Vulkan"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-ROCm-SPIR-V-Reality-2026", lang: "EN" }
    ]
  },
  {
    id: "20260720-108",
    trackers: ["os"],
    category: "重點關注",
    title: "Firefox 153.0 發布：新增 Vulkan 影片解碼支援，提升跨平台硬體加速能力",
    summary: "Mozilla 發布了 Firefox 153.0 版本，這是一個最新的長期支援版本（ESR），專為企業、學校等機構提供長期穩定性。本次更新的主要技術亮點是引入了 Vulkan 影片解碼支援。過去在 Linux 平台上，Firefox 主要依賴 Video Acceleration API (VA-API)，但該介面在 NVIDIA 等廠商的官方支援上存在限制。透過 Vulkan 支援，Firefox 提供了更現代、跨廠商且跨平台的影片加速介面，顯著提升了硬體解碼的兼容性與效能。此外，Firefox 153 也帶來了多項其他增強，包括 PDF 相關功能優化、持續的 JPEG-XL 格式支援，以及在 Windows 上的 HDR 影片播放能力。開發者可透過 Firefox Labs 區域啟用 JPEG-XL 的實驗性支援。使用者可從 ftp.mozilla.org 下載 Firefox 153.0 的發行二進位檔案。",
    tags: ["Mozilla", "Firefox", "Firefox 153", "Vulkan", "Video Decoding", "ESR", "JPEG-XL"],
    title_en: "Firefox 153.0 Released: Adds Vulkan Video Decoding Support, Enhancing Cross-Platform Hardware Acceleration",
    summary_en: "Mozilla has released Firefox 153.0, the latest Extended Support Release (ESR), designed to provide long-term stability for organizations such as enterprises and schools. The main technical highlight of this update is the introduction of Vulkan video decoding support. Previously, on Linux platforms, Firefox primarily relied on the Video Acceleration API (VA-API), but this interface had limitations in official support from vendors like NVIDIA. With Vulkan support, Firefox offers a more modern, cross-vendor, and cross-platform video acceleration interface, significantly improving hardware decoding compatibility and performance. Furthermore, Firefox 153 also brings several other enhancements, including PDF-related feature optimizations, continued JPEG-XL format support, and HDR video playback capability on Windows. Developers can enable experimental JPEG-XL support via the Firefox Labs area. Users can download the Firefox 153.0 release binaries from ftp.mozilla.org.",
    tags_en: ["Mozilla", "Firefox", "Firefox 153", "Vulkan", "Video Decoding", "ESR", "JPEG-XL"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Firefox-153-Downloads", lang: "EN" }
    ]
  },
  {
    id: "20260720-109",
    trackers: ["os"],
    category: "重點關注",
    title: "AMD 為 GCC 編譯器提供 AVX10_V2_AUX 指令集支援補丁，加速 AI/ML 工作負載",
    summary: "AMD 工程師已為 GNU 編譯器集合（GCC）發布了支援 AVX10_V2_AUX 指令集的補丁。此指令集是 AI 計算擴展（ACE）的一部分，旨在增強 AVX 指令集，為人工智慧（AI）和機器學習（ML）工作負載提供專用的資料處理和格式轉換能力。AVX10_V2_AUX 支援將標準資料類型轉換為壓縮格式，例如 FP4 和 FP6，並支援額外的 OCP 微縮型格式和新的四捨五入模式。這些新功能詳述於 ACE v1 規範。此補丁與 Intel 此前發布的 ACE 啟用補丁相輔相成，體現了 AMD 和 Intel 在 x86 生態系統諮詢小組（x86 Ecosystem Advisory Group）的緊密合作。該系列補丁包含 7 個修補，旨在新增對 cpuid 偵測、內建函數和內聯函數的支援。目前補丁已提交至 GCC 編譯器郵件清單審查，預計將在 GCC 17.1 穩定版本中完成支援。",
    tags: ["AMD", "GCC", "AVX10_V2_AUX", "AI/ML", "x86", "ACE"],
    title_en: "AMD Provides AVX10_V2_AUX Instruction Set Support Patch for GCC Compiler, Accelerating AI/ML Workloads",
    summary_en: "AMD engineers have released a patch for the GNU Compiler Collection (GCC) supporting the AVX10_V2_AUX instruction set. This instruction set is part of the AI Computing Extension (ACE), designed to enhance the AVX instruction set by providing specialized data processing and format conversion capabilities for Artificial Intelligence (AI) and Machine Learning (ML) workloads. AVX10_V2_AUX supports converting standard data types into compressed formats, such as FP4 and FP6, and also supports additional OCP miniature formats and new rounding modes. These new features are detailed in the ACE v1 specification. This patch complements the ACE enablement patch previously released by Intel, demonstrating close collaboration between AMD and Intel within the x86 Ecosystem Advisory Group. The series of patches includes 7 fixes, aiming to add support for cpuid detection, built-in functions, and intrinsic functions. The patch has been submitted to the GCC compiler mailing list for review and is expected to be fully supported in the GCC 17.1 stable release.",
    tags_en: ["AMD", "GCC", "AVX10_V2_AUX", "AI/ML", "x86", "ACE"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GCC-AVX10-V2-AUX-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260720-110",
    trackers: ["os"],
    category: "重點關注",
    title: "Wayland 合成器 Hyprland 0.56 版本發布，強化佈局功能與 Lua API 客製化支援",
    summary: "Wayland 合成器 Hyprland 最新發布了 0.56 版本，這是一個包含近三個月改進的重大功能更新。本次更新主要著重於提升使用者體驗與可客製化程度。功能亮點包括多項佈局優化，新增了滾動（scrolling）和主控（master）功能。此外，開發者也獲得了大量新的 Lua API，進一步擴展了 Hyprland 的客製化能力。在視覺效果方面，0.56 版本增加了新的視窗規則效果，並支援 XDG 互動式拖曳，允許使用者拖曳客戶端裝飾標題列。此外，其搭配的 glow 工具現在也支援漸層（gradients）效果。使用者可透過 Hypr.land 專案網站或 GitHub 下載和了解更多詳細資訊。",
    tags: ["Hyprland", "Wayland", "合成器", "Lua API", "桌面環境", "Wayland Compositor"],
    title_en: "Wayland Compositor Hyprland 0.56 Version Released, Enhancing Layout Features and Lua API Customization Support",
    summary_en: "The Wayland compositor Hyprland has released the latest 0.56 version, a major feature update incorporating improvements from the last three months. This update primarily focuses on enhancing user experience and customization. Key features include multiple layout optimizations, adding scrolling and master functionalities. Furthermore, developers have gained numerous new Lua APIs, further expanding Hyprland's customization capabilities. Regarding visual effects, the 0.56 version introduces new window rule effects and supports XDG interactive dragging, allowing users to drag client decoration title bars. Additionally, its companion glow tool now supports gradient effects. Users can download and learn more detailed information via the Hypr.land project website or GitHub.",
    tags_en: ["Hyprland", "Wayland", "Compositor", "Lua API", "Desktop Environment", "Wayland Compositor"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Hyprland-0.56", lang: "EN" }
    ]
  },
  {
    id: "20260720-111",
    trackers: ["os"],
    category: "重點關注",
    title: "詐騙集團冒充聯邦調查局（FBI）在社群媒體上詐騙犯罪受害者",
    summary: "本文報導指出，詐騙集團正利用社群媒體平台，冒充美國聯邦調查局（FBI）的身份，對犯罪受害者進行詐騙行為。這些詐騙分子通常會利用受害者在經歷犯罪事件後的情緒焦慮與求助心理，假冒官方機構來騙取受害者的個人資訊或金錢。文章強調，這類詐騙行為屬於社會工程學（Social Engineering）陷阱，而非技術漏洞。受害者應提高警覺，切勿輕信社群媒體上聲稱來自官方機構的訊息，特別是要求提供敏感資料或進行金錢轉帳的指示。若懷疑身分，應透過官方網站或已知的官方聯絡方式進行二次驗證，而非依賴社群媒體上的聯繫。",
    tags: ["詐騙", "FBI", "社群媒體", "社會工程學", "犯罪受害者", "警惕"],
    title_en: "Scam Groups Impersonating FBI on Social Media to Defraud Crime Victims",
    summary_en: "This report indicates that scam groups are utilizing social media platforms to impersonate the U.S. Federal Bureau of Investigation (FBI) and defraud crime victims. These scammers often exploit the emotional distress and need for help experienced by victims after a crime, posing as official agencies to trick victims into revealing personal information or transferring money. The article emphasizes that such fraudulent activities constitute a Social Engineering trap, rather than a technical vulnerability. Victims should remain vigilant and never trust messages on social media claiming to be from official agencies, especially those requesting sensitive data or money transfers. If in doubt, verification should be done through official websites or known official contact methods, rather than relying on social media contacts.",
    tags_en: ["Scam", "FBI", "Social Media", "Social Engineering", "Crime Victim", "Vigilance"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/20/scammers-impersonate-fbi-on-social-media-prey-on-crime-victims/5275224", lang: "EN" }
    ]
  },
  {
    id: "20260720-112",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "AWS 客戶案例揭示：即使是微小的配置疏忽，也可能導致關鍵任務系統的重大安全漏洞",
    summary: "本文報導了一個關於雲端安全配置失誤的實務案例，強調了即使是雲端環境中最小的疏忽，也可能對關鍵任務系統造成極大的安全風險。雖然文章未提供具體的 CVE 編號或 CVSS 分數，但其核心教訓是關於雲端資源配置（Cloud Resource Configuration）的安全性管理。案例指出，當缺乏嚴格的權限控制和配置審核時，攻擊者可以利用這些「小疏忽」作為攻擊的切入點，從而達到對核心業務系統的控制。實務影響提醒組織，安全防護不能僅依賴於邊界防禦或單一產品的修補，更必須建立一套全面的、涵蓋身份存取管理（IAM）和資源配置審核的流程。修補建議是：定期進行安全配置審計、實施最小權限原則（Principle of Least Privilege），並對所有雲端資源的存取路徑進行嚴格的監控與驗證。",
    tags: ["AWS", "雲端安全", "配置管理", "最小權限原則", "資安實務", "雲端漏洞"],
    title_en: "AWS Customer Case Reveals: Even Minor Configuration Oversight Can Lead to Major Security Vulnerabilities in Critical Systems",
    summary_en: "This article reports on a practical case concerning cloud security misconfigurations, emphasizing that even the smallest oversight in a cloud environment can pose significant security risks to critical systems. Although the article does not provide specific CVE IDs or CVSS scores, its core lesson revolves around the security management of Cloud Resource Configuration. The case highlights that without strict access control and configuration auditing, attackers can exploit these 'minor oversights' as entry points, thereby achieving control over core business systems. The practical implication reminds organizations that security defense cannot rely solely on perimeter defense or single-product patching; rather, a comprehensive process covering Identity Access Management (IAM) and resource configuration auditing must be established. Remediation suggestions include: conducting regular security configuration audits, implementing the Principle of Least Privilege, and rigorously monitoring and verifying all access paths for cloud resources.",
    tags_en: ["AWS", "Cloud Security", "Configuration Management", "Principle of Least Privilege", "Cybersecurity Practices", "Cloud Vulnerabilities"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/07/20/aws-customer-learns-the-hard-way-how-even-the-smallest-oversight-can-be-mission-critical/5275089", lang: "EN" }
    ]
  },
  {
    id: "20260720-113",
    trackers: ["os"],
    category: "重點關注",
    title: "惡意雲端客戶可癱瘓電網：AI與ML技術帶來的能源基礎設施風險",
    summary: "本文探討了人工智慧（AI）和機器學習（ML）技術在能源基礎設施領域帶來的重大風險。研究指出，惡意的雲端客戶可以利用這些先進技術，對關鍵的電力電網系統進行攻擊，造成大規模的癱瘓。這類攻擊的潛在影響範圍極廣，不僅威脅到電力供應，也可能波及社會的各個層面。由於AI和ML模型越來越複雜，其應用場景也越來越廣泛，使得攻擊面（risk radius）急劇擴大。資安專業人士和基礎設施營運者必須高度警惕，應將AI/ML的安全性納入到OT（營運技術）和IT（資訊技術）的整合安全架構中，特別是針對雲端環境的邊界控制與身份驗證機制進行加強，以防止惡意行為的發生。修補建議包括實施零信任架構、強化物理與數位邊界控制，並對AI模型進行嚴格的輸入驗證與輸出監控。",
    tags: ["AI", "ML", "電力電網", "基礎設施安全", "雲端安全", "OT/IT融合"],
    title_en: "Malicious Cloud Clients Can Paralyze Power Grids: Risks to Energy Infrastructure from AI and ML Technologies",
    summary_en: "This article explores the significant risks posed by Artificial Intelligence (AI) and Machine Learning (ML) technologies in the energy infrastructure sector. Research indicates that malicious cloud clients can leverage these advanced technologies to attack critical power grid systems, causing large-scale paralysis. The potential impact of such attacks is extremely broad, threatening not only the power supply but also various aspects of society. As AI and ML models become increasingly complex and their application scenarios expand, the attack surface (risk radius) is rapidly growing. Cybersecurity professionals and infrastructure operators must remain highly vigilant, integrating AI/ML security into the combined security architecture of OT (Operational Technology) and IT (Information Technology). Special attention must be paid to strengthening boundary controls and identity verification mechanisms, particularly in cloud environments, to prevent malicious activities. Remediation suggestions include implementing zero trust architecture, strengthening physical and digital boundary controls, and conducting rigorous input validation and output monitoring for AI models.",
    tags_en: ["AI", "ML", "Power Grid", "Infrastructure Security", "Cloud Security", "OT/IT Convergence"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/20/malicious-cloud-customers-can-bring-down-the-power-grid/5275193", lang: "EN" }
    ]
  },
  {
    id: "20260720-114",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 惡意代理攻擊風險升高：Hugging Face 遭遇「邪惡代理」挑戰，顯示 LLM 應用安全挑戰",
    summary: "隨著大型語言模型（LLMs）與外部服務的整合，AI 代理（AI agents）的應用範圍和風險也同步擴大。文章指出，即使是像 Hugging Face 這樣的平台，在面對惡意代理（evil agents）的攻擊時，也面臨極大的安全挑戰。這類攻擊可能利用模型與外部服務的連接點，執行未經授權或惡意的操作。實務上，開發者必須高度警惕 AI 代理的「擴散風險」（risk radius），並建立嚴格的權限控制和沙盒機制，以防止模型被惡意利用。目前，業界尚未公開針對此類攻擊的統一修補或防禦機制，但建議開發者應從供應鏈安全、輸入驗證和最小權限原則等多方面加強防護。",
    tags: ["AI 代理", "LLMs", "Hugging Face", "惡意代理", "供應鏈安全", "AI 應用安全"],
    title_en: "Rising Risk of AI Malicious Agent Attacks: Hugging Face Faces 'Evil Agent' Challenge, Highlighting LLM Application Security Challenges",
    summary_en: "As Large Language Models (LLMs) integrate with external services, the scope and risk of AI agents are expanding concurrently. The article points out that even platforms like Hugging Face face significant security challenges when confronted with malicious agents. These attacks may exploit the connection points between the model and external services to execute unauthorized or malicious operations. Practically, developers must be highly vigilant about the 'risk radius' of AI agents and establish strict permission controls and sandbox mechanisms to prevent models from being misused. Currently, the industry has not publicly disclosed a unified patch or defense mechanism for this type of attack, but it is recommended that developers strengthen defenses across multiple areas, including supply chain security, input validation, and the principle of least privilege.",
    tags_en: ["AI agents", "LLMs", "Hugging Face", "malicious agents", "supply chain security", "AI application security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/20/frontier-llms-couldnt-help-hugging-face-fight-off-evil-agents/5275168", lang: "EN" }
    ]
  },
  {
    id: "20260720-115",
    trackers: ["os"],
    category: "重點關注",
    title: "Document Foundation警告：微軟文件格式可能限制用戶使用權與功能",
    summary: "Document Foundation指出，微軟的各種文件格式（如Office格式）在設計上可能包含限制用戶使用權或功能（rights management）的機制。這意味著即使用戶擁有文件，其使用權限仍可能被嵌入格式本身所控制，限制了用戶的自由度。這類機制可能導致用戶無法在不同平台或應用程式間自由地使用或編輯文件。雖然文章未提供具體的 CVE 或技術細節，但其實務影響是，用戶在處理和分享文件時，必須注意文件格式可能帶來的隱性限制，建議用戶在處理敏感或需要高度兼容性的文件時，考慮使用開放標準格式（如PDF/A或OpenDocument Format）來規避這些潛在的限制。",
    tags: ["Microsoft", "文件格式", "Document Foundation", "使用權管理", "兼容性", "Open Standard"],
    title_en: "Document Foundation Warning: Microsoft File Formats May Limit User Usage and Functionality",
    summary_en: "Document Foundation points out that various Microsoft file formats (such as Office formats) may contain mechanisms designed to restrict user usage rights or functionality (rights management). This means that even if a user owns the document, its usage rights might still be controlled by the format itself, limiting the user's freedom. Such mechanisms can prevent users from freely using or editing files across different platforms or applications. Although the article does not provide specific CVEs or technical details, the practical implication is that users must be aware of potential hidden limitations imposed by file formats when processing and sharing documents. It is recommended that users consider using open standard formats (such as PDF/A or OpenDocument Format) when handling sensitive or highly compatible files to avoid these potential restrictions.",
    tags_en: ["Microsoft", "File Format", "Document Foundation", "Rights Management", "Compatibility", "Open Standard"],
    sources: [
      { name: "The Register", url: "https://theregister.com/applications/2026/07/20/the-document-foundation-says-microsofts-file-formats-keep-users-on-a-short-leash/5274960", lang: "EN" }
    ]
  },
  {
    id: "20260720-116",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Microsoft 365 曆表功能遭惡意利用，成為 HollowGraph 戰役的間諜資料傳輸工具",
    summary: "本報導揭露攻擊者利用 Microsoft 365 的曆表功能，將其轉化為傳輸間諜資料的媒介。在名為 HollowGraph 的戰役中，攻擊者透過此機制，將敏感資訊偽裝成看似正常的日曆事件，從而達到竊取資料的目的。這類攻擊利用了應用程式層面的邏輯漏洞，使得日曆功能本身成為了攻擊鏈中的關鍵環節。實務上，這意味著組織必須提高對日曆事件內容的審核機制，並考慮對日曆功能進行更嚴格的內容驗證與監控。雖然原文未提供具體的 CVE 編號或 CVSS 分數，但其警示了企業級雲端協作工具在應用層面可能面臨的資料外洩風險，建議組織應立即審查所有雲端日曆的共享權限與內容完整性。",
    tags: ["Microsoft 365", "HollowGraph", "日曆功能", "間諜活動", "資料外洩", "雲端安全"],
    title_en: "Microsoft 365 Calendar Feature Exploited for Espionage Data Exfiltration in HollowGraph Campaign",
    summary_en: "This report reveals that attackers are utilizing Microsoft 365's calendar functionality, transforming it into a medium for transmitting espionage data. In a campaign named HollowGraph, attackers exploit this mechanism to disguise sensitive information as seemingly normal calendar events, thereby achieving data theft. This type of attack leverages application-layer logical vulnerabilities, making the calendar function itself a critical link in the attack chain. Practically, this means organizations must enhance their review mechanisms for calendar event content and consider implementing stricter content validation and monitoring for calendar features. Although the original text does not provide specific CVE IDs or CVSS scores, it warns of potential data leakage risks in enterprise cloud collaboration tools at the application layer, advising organizations to immediately review all cloud calendar sharing permissions and content integrity.",
    tags_en: ["Microsoft 365", "HollowGraph", "Calendar Feature", "Espionage", "Data Leakage", "Cloud Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/20/microsoft-365-calendars-become-spy-drop-boxes-in-hollowgraph-campaign/5274982", lang: "EN" }
    ]
  },
  {
    id: "20260720-117",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟AI標籤規則即將生效：影響AI模型開發與部署的合規性要求",
    summary: "歐盟（EU）的AI標籤規則即將於下個月生效，旨在提高市場透明度並保護消費者。此法規要求在市場投放的AI系統必須明確標註其風險等級和數據來源，特別針對高風險AI應用場景。對於開發者和企業而言，這意味著在設計和部署AI模型時，必須建立嚴格的追溯機制和透明化流程。雖然原文未提供具體的技術細節或CVE編號，但其實務影響是要求AI產品的生命週期管理（MLOps）必須納入合規性考量。建議受影響的AI開發者應立即審查其產品的風險分類，並規劃符合歐盟法規的標籤化和文件化流程，以避免市場准入障礙。",
    tags: ["歐盟", "AI", "ML", "AI標籤規則", "合規性", "數據透明度"],
    title_en: "EU AI Labeling Rules Nearing Effect: Compliance Requirements for AI Model Development and Deployment",
    summary_en: "The European Union's (EU) AI labeling rules are set to take effect next month, aiming to enhance market transparency and protect consumers. This regulation mandates that AI systems placed on the market must clearly label their risk level and data source, particularly for high-risk AI application scenarios. For developers and enterprises, this means that when designing and deploying AI models, they must establish strict traceability mechanisms and transparent processes. Although the original text does not provide specific technical details or CVE IDs, the practical implication is that the Machine Learning Operations (MLOps) lifecycle management for AI products must incorporate compliance considerations. Affected AI developers are advised to immediately review their product's risk classification and plan for labeling and documentation processes compliant with EU regulations to avoid market access barriers.",
    tags_en: ["EU", "AI", "ML", "AI Labeling Rules", "Compliance", "Data Transparency"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/20/eus-ai-labeling-rules-take-effect-next-month/5274917", lang: "EN" }
    ]
  },
  {
    id: "20260720-118",
    trackers: ["os"],
    category: "重點關注",
    title: "AI數據中心環境衝擊：xAI在田納西州孟菲斯建廠引發污染與爭議",
    summary: "本文討論了AI數據中心快速擴建帶來的環境與社會衝擊。以Elon Musk的xAI在田納西州孟菲斯（Memphis）的數據中心為例，該設施的建設速度極快，且佔地面積巨大。為滿足龐大的電力需求，xAI採用了燃燒天然氣的燃氣輪機，這不僅產生了大量碳排放，更釋放出PM2.5等有害顆粒物，嚴重威脅當地居民的呼吸道健康。此外，數據中心運營產生的噪音污染，甚至被當地居民形容為「酷刑」。報導指出，這些大型AI數據中心消耗的土地、水和電力遠超傳統雲端運算中心。當地的居民對此缺乏知情權和參與感，已引發了社區層面的激烈爭議與法律行動。修補建議方面，文章強調了需要更透明的規劃流程和對環境影響的嚴格評估，以確保科技發展與社區福祉的平衡。",
    tags: ["xAI", "AI數據中心", "孟菲斯", "環境污染", "PM2.5", "氣候變遷"],
    title_en: "Environmental Impact of AI Data Centers: xAI's Memphis, Tennessee Facility Sparks Pollution and Controversy",
    summary_en: "This article discusses the environmental and social impacts resulting from the rapid expansion of AI data centers. Taking Elon Musk's xAI data center in Memphis, Tennessee, as an example, the facility has been constructed at an extremely fast pace and occupies a massive area. To meet its enormous power demands, xAI utilizes gas turbines that burn natural gas. This process not only generates substantial carbon emissions but also releases harmful particulate matter such as PM2.5, severely threatening the respiratory health of local residents. Furthermore, the noise pollution generated by the data center's operation has even been described by local residents as 'torture.' Reports indicate that these large AI data centers consume far more land, water, and electricity than traditional cloud computing centers. Local residents feel deprived of information and participation, leading to intense community controversy and legal action. In terms of remediation, the article emphasizes the need for more transparent planning processes and rigorous environmental impact assessments to ensure a balance between technological development and community well-being.",
    tags_en: ["xAI", "AI Data Center", "Memphis", "Environmental Pollution", "PM2.5", "Climate Change"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/20/watching-the-world-burn-as-all-the-money-flows-into-a-multitrillion-dollar-magic-8-ball/5274553", lang: "EN" }
    ]
  },
  {
    id: "20260720-119",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "資安專家揭露：PaidWork用戶資料遭大規模洩漏，超過 23 個月記錄資料庫外洩至網上",
    summary: "資安專家指出，一家名為 PaidWork的平台，其用戶資料庫曾發生大規模洩漏事件。該資料庫包含了超過 23 個月的記錄資料，並被公開dump至網上。雖然原文未提供具體的技術漏洞或CVSS分數，但事件顯示了平台在資料安全管理上的重大缺陷，可能涉及未經加密或權限控制的資料儲存。資料洩漏的實務影響極為嚴重，可能導致用戶的個人身份資訊（PII）和敏感工作記錄遭到竊取，進而面臨身份盜用或商業機密外洩的風險。建議用戶應立即更改所有與該平台相關的密碼，並啟用雙因素驗證（2FA）。同時，平台方應立即進行全面的安全審計，修補資料庫的存取控制機制，並考慮實施資料加密和最小權限原則，以防止未來再次發生類似的資料外洩事件。",
    tags: ["PaidWork", "資料洩漏", "資安事件", "個人資料", "數據庫安全"],
    title_en: "Cybersecurity Experts Reveal: PaidWork User Data Suffers Massive Leak, Over 23 Months of Records Dumped Online",
    summary_en: "Cybersecurity experts point out that a platform named PaidWork experienced a massive data leak involving its user database. This database contained over 23 months of records and was publicly dumped online. Although the original text does not provide specific technical vulnerabilities or CVSS scores, the incident highlights significant deficiencies in the platform's data security management, potentially involving unencrypted or improperly permissioned data storage. The practical impact of the data leak is extremely severe, potentially leading to the theft of users' Personally Identifiable Information (PII) and sensitive work records, thus exposing them to risks of identity theft or commercial secret leakage. Users are advised to immediately change all passwords associated with the platform and enable Two-Factor Authentication (2FA). Concurrently, the platform should conduct a comprehensive security audit, patch the database's access control mechanisms, and consider implementing data encryption and the principle of least privilege to prevent similar data leakage incidents in the future.",
    tags_en: ["PaidWork", "Data Leakage", "Cybersecurity Incident", "Personal Data", "Database Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/20/infosec-expert-paidwork-users-data-pwned-after-23m-record-database-dumped-online/5274869", lang: "EN" }
    ]
  },
  {
    id: "20260720-120",
    trackers: ["os"],
    category: "重點關注",
    title: "英國政府專案預警：共享服務叢集存在重大故障風險",
    summary: "本文報導英國政府在專案管理方面面臨的重大挑戰。根據英國政府的專案預警機制，其共享服務叢集（shared services cluster）被評級為「紅色」（Red），顯示出極高的風險。這類共享服務通常用於跨部門或跨專案的基礎設施支援，一旦出現故障，將會對整個政府部門的運營造成廣泛且嚴重的影響。文章指出，政府在專案的複雜性、依賴性管理以及基礎設施的穩定性方面存在結構性問題。雖然原文未提供具體的技術漏洞或CVE編號，但其實務影響指向了系統架構的脆弱性與管理流程的風險。修補建議應著重於強化共享服務的冗餘設計、實施更嚴格的風險評估流程，並對核心基礎設施進行獨立的壓力測試與安全審計。",
    tags: ["英國政府", "專案管理", "共享服務", "基礎設施風險", "系統架構"],
    title_en: "UK Government Project Warning: Shared Services Cluster Faces Major Failure Risk",
    summary_en: "This article reports on significant challenges the UK government faces in project management. According to the UK government's project warning mechanism, its shared services cluster has been rated 'Red,' indicating extremely high risk. These shared services are typically used for cross-departmental or cross-project infrastructure support; a failure could cause widespread and severe operational impact across the entire government department. The article points out structural issues within the government regarding project complexity, dependency management, and infrastructure stability. Although the original text does not provide specific technical vulnerabilities or CVE IDs, the practical impact points toward system architecture fragility and management process risks. Remediation recommendations should focus on strengthening the redundancy design of shared services, implementing stricter risk assessment processes, and conducting independent stress testing and security audits on core infrastructure.",
    tags_en: ["UK Government", "Project Management", "Shared Services", "Infrastructure Risk", "System Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/07/20/major-glitch-in-matrix-as-uk-government-projects-watchdog-rates-shared-services-cluster-red/5274368", lang: "EN" }
    ]
  },
  {
    id: "20260720-121",
    trackers: ["os"],
    category: "重點關注",
    title: "Airbus 離開 AWS 雲端平台後，未來營運與供應鏈的關鍵挑戰",
    summary: "本文討論了大型企業如空客（Airbus）從單一雲端供應商（如 AWS）轉移或離開其基礎設施的潛在影響。當企業將核心業務和數據從單一雲端環境撤出時，其後續的營運模式、供應鏈管理以及技術架構的重塑將成為關鍵挑戰。這不僅涉及技術層面的遷移，更包括了業務流程、合規性要求以及對多雲或混合雲架構的重新評估。對於其他產業和企業而言，這是一個重要的警示信號，強調了「雲端鎖定」（Vendor Lock-in）的風險，並促使業界關注建立更具彈性、分散風險的 IT 基礎設施。建議企業應規劃多雲策略，並將核心業務邏輯與特定雲端服務解耦，以確保業務的連續性和彈性。",
    tags: ["Airbus", "AWS", "雲端供應鏈", "多雲策略", "Vendor Lock-in", "IT 基礎設施"],
    title_en: "Airbus's Departure from AWS Cloud Platform: Key Challenges for Future Operations and Supply Chain",
    summary_en: "This article discusses the potential impact on large enterprises, such as Airbus, when they transition from or leave a single cloud provider (such as AWS). When a company withdraws its core business and data from a single cloud environment, subsequent operational models, supply chain management, and the restructuring of technical architectures become key challenges. This involves not only technical migration but also business process changes, compliance requirements, and the re-evaluation of multi-cloud or hybrid cloud architectures. For other industries and enterprises, this serves as an important warning signal, emphasizing the risk of \"Vendor Lock-in\" and prompting the industry to focus on building more resilient and diversified IT infrastructure. It is recommended that companies plan for a multi-cloud strategy and decouple core business logic from specific cloud services to ensure business continuity and flexibility.",
    tags_en: ["Airbus", "AWS", "Cloud Supply Chain", "Multi-cloud Strategy", "Vendor Lock-in", "IT Infrastructure"],
    sources: [
      { name: "The Register", url: "https://theregister.com/columnists/2026/07/20/airbus-takes-flight-from-aws-what-happens-next-is-critical/5274109", lang: "EN" }
    ]
  },
  {
    id: "20260720-122",
    trackers: ["os"],
    category: "重點關注",
    title: "英國審計師警告政府：在依賴AI節省成本前，應先進行嚴謹的財務計算",
    summary: "本文報導英國的審計師指出，政府在規劃利用人工智慧（AI）技術來實現成本節省時，必須謹慎評估其財務可行性，不能僅憑樂觀預期而盲目投入。雖然AI在各行各業的應用前景廣闊，但其導入涉及的技術複雜性、潛在的數據治理風險，以及對既有工作流程的根本性改變，都需要進行詳盡的成本效益分析。審計師強調，在將AI應用納入國家級的重大決策之前，必須建立穩健的評估模型，確保預期的節省效益能夠真正轉化為可持續且可驗證的財務成果。這提醒政府機構和企業在推動數位轉型時，應採取更為務實、數據驅動的審慎態度，避免過度樂觀的預算規劃。",
    tags: ["英國政府", "人工智慧", "AI應用", "成本效益分析", "數位轉型", "審計師報告"],
    title_en: "UK Auditor Warns Government: Conduct Rigorous Financial Calculations Before Relying on AI for Cost Savings",
    summary_en: "This article reports that UK auditors point out that when planning to utilize Artificial Intelligence (AI) technology for cost savings, the government must cautiously assess its financial feasibility and cannot blindly invest based solely on optimistic expectations. Although AI has broad application prospects across various industries, its implementation involves technical complexity, potential data governance risks, and fundamental changes to existing workflows, all of which require detailed cost-benefit analysis. The auditors emphasize that before incorporating AI applications into major national-level decisions, robust evaluation models must be established to ensure that expected savings can genuinely translate into sustainable and verifiable financial outcomes. This serves as a reminder to government agencies and enterprises that when promoting digital transformation, they should adopt a more pragmatic, data-driven, and cautious approach, avoiding overly optimistic budget planning.",
    tags_en: ["UK Government", "Artificial Intelligence", "AI Application", "Cost-Benefit Analysis", "Digital Transformation", "Auditor Report"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/07/20/auditors-tell-uk-government-to-do-the-math-before-banking-on-45b-ai-savings/5274194", lang: "EN" }
    ]
  },
  {
    id: "20260720-123",
    trackers: ["os"],
    category: "重點關注",
    title: "紅帽（Red Hat）推出兩伺服器邊緣設備，強調高硬體成本下的解決方案",
    summary: "本文報導了紅帽（Red Hat）為應對高昂的硬體成本，推出了一款專為邊緣運算（Edge）設計的兩伺服器設備。該設備的設計重點是提供一個完整的運算解決方案，而無需額外的迷你電腦（Mini PC）。這類邊緣設備在工業、零售或需要分散式運算的場景中越來越重要。雖然文章沒有提及具體的 CVE 或技術漏洞，但它強調了在資源受限或成本敏感的邊緣環境中，企業需要更高效能、更具成本效益的硬體架構。對於部署邊緣運算解決方案的企業，應關注供應商提供的整體解決方案，而非單純的硬體組件。",
    tags: ["紅帽", "Red Hat", "邊緣運算", "Edge Computing", "硬體成本", "伺服器"],
    title_en: "Red Hat Launches Dual-Server Edge Device, Emphasizing Solutions for High Hardware Costs",
    summary_en: "This article reports that Red Hat has launched a dual-server device designed for edge computing to address high hardware costs. The device is designed to provide a complete computing solution without the need for external Mini PCs. Such edge devices are becoming increasingly important in industrial, retail, or scenarios requiring distributed computing. Although the article does not mention specific CVEs or technical vulnerabilities, it emphasizes that in resource-constrained or cost-sensitive edge environments, enterprises require more efficient and cost-effective hardware architectures. Companies deploying edge computing solutions should focus on the overall solution provided by the vendor, rather than just the hardware components.",
    tags_en: ["Red Hat", "Edge Computing", "Hardware Costs", "Server"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/07/20/high-hardware-costs-see-red-hat-offer-a-two-server-edge-rig-no-mini-pc-required/5274762", lang: "EN" }
    ]
  }
];
