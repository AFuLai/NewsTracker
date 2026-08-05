// data-20260623.js — 2026-06-23
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-23"] = [
  {
    id: "20260623-001",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體組織公開宣稱駭入 Tata Electronics，竊取疑似蘋果、特斯拉等客戶的設計與商業機密文件",
    summary: "印度半導體電子製造巨擘 Tata Electronics 近期被資安研究人員發現，勒索軟體組織 World Leaks 在暗網上宣稱駭入該公司，並公開了約 630GB 的資料樣本。這些資料包括疑似與蘋果公司相關的硬體元件設計、材料規格文件，以及與 iPhone 電路板品管標準相關的資料。此外，還包含疑似與特斯拉 Model Y 充電埠和 Model 3 改版專案 Highland 的「商業機密」文件。駭客張貼的樣本也包含 Tata Electronics 的公司 Outlook 電子郵件和 SAP 資訊。儘管 Tata Electronics 證實發生資安事件，但公司強調此事對其各業務營運未造成影響。蘋果公司已開始調查此事。此事件凸顯了供應鏈廠商在面對外部勒索威脅時，其客戶的商業機密資料可能面臨洩露風險。",
    tags: ["Tata Electronics", "勒索軟體", "World Leaks", "蘋果", "特斯拉", "供應鏈安全", "資料外洩"],
    title_en: "Ransomware Group Publicly Claims Hacking Tata Electronics, Stealing Design and Commercial Confidential Documents Allegedly Belonging to Apple and Tesla",
    summary_en: "Tata Electronics, a major Indian semiconductor electronics manufacturer, was recently found by cybersecurity researchers to have been targeted by the ransomware group World Leaks. The group claimed on the dark web to have hacked the company and publicly released a data sample of approximately 630GB. This data includes documents related to hardware component designs and material specifications allegedly associated with Apple, as well as data concerning quality control standards for iPhone circuit boards. Furthermore, the leaked files contain",
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176786", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-002",
    trackers: ["security"],
    category: "重大事件",
    title: "Cyfirma報告：勒索軟體威脅擴及醫療產業鏈，建議強化備份與遠端存取控管",
    summary: "資安威脅情報業者Cyfirma發布報告，指出勒索軟體仍是醫療保健產業面臨的主要網路威脅。根據追蹤過去90天的全球受害情形，報告發現醫療產業的受害組織數量有所增加，佔整體受害比例為9.05%，成為受害產業類別中數量第三多的類別。受害案例已從第一線醫院擴展至製藥、生物科技、醫療設備、保險與醫療行政等整個產業鏈環節。醫療機構一旦遭攻擊，不僅可能導致系統停機影響照護服務，更因持有大量敏感個資與醫療紀錄，面臨營運癱瘓和資料外洩的雙重威脅。為降低風險，研究人員建議醫療機構應強化資料備份與復原演練、修補已知漏洞、嚴格控管遠端存取權限，並持續監測暗網的資料外洩動態。",
    tags: ["Cyfirma", "勒索軟體", "醫療產業", "網路威脅", "資料外洩", "OT/ICS"],
    title_en: "Cyfirma Report: Ransomware Threat Spreads Across Healthcare Supply Chain, Recommends Strengthening Backup and Remote Access Controls",
    summary_en: "Cybersecurity threat intelligence firm Cyfirma released a report indicating that ransomware remains a primary cyber threat facing the healthcare industry. Tracking global incidents over the past 90 days, the report found an increase in the number of affected organizations in the healthcare sector, accounting for 9.05% of total victims, making it the third most affected industry category. Affected cases have expanded from frontline hospitals to encompass the entire supply chain, including pharmaceuticals, biotechnology, medical devices, insurance, and medical administration. When a healthcare facility is attacked, it not only risks system downtime affecting care services but also faces the dual threat of operational paralysis and data leakage due to the possession of large amounts of sensitive personal data and medical records. To mitigate these risks, researchers recommend that healthcare facilities strengthen data backup and recovery drills, patch known vulnerabilities, strictly control remote access privileges, and continuously monitor data leakage dynamics on the dark web.",
    tags_en: ["Cyfirma", "Ransomware", "Healthcare Industry", "Cyber Threat", "Data Leakage", "OT/ICS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176760", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：8250 串列驅動程式現代化與移除過時驅動",
    summary: "Linux 7.2 核心針對 8250 及 16550 UART 串列驅動程式進行了現代化重構，新增支援控制台流量控制，並修復了可能導致軟體鎖死（soft lock-up）的問題。此外，針對特定硬體驅動進行了優化，例如 8250_mtk 獲得 ACPI 支援，且 8250_dw 移除舊有的時脈通知架構。本次更新亦正式移除了長期標記為損壞且缺乏維護的 synclink_gt 驅動程式，藉此精簡核心程式碼庫。建議維護系統整合或使用特定序列介面硬體的開發者關注此變更，以確保軟硬體相容性。",
    tags: ["Linux 7.2", "Kernel", "8250 UART", "序列驅動程式", "核心開發", "驅動程式重構", "開源貢獻"],
    title_en: "Linux 7.2 Kernel Update: 8250 Serial Driver Modernization and Removal of Obsolete Drivers",
    summary_en: "The Linux 7.2 kernel has undergone a modernized refactoring of the 8250 and 16550 UART serial drivers, adding support for console flow control and resolving issues that could lead to soft lock-ups. Additionally, specific hardware drivers have been optimized, such as the 8250_mtk driver receiving ACPI support, while the 8250_dw driver has removed its legacy clock notification architecture. This update also formally removes the long-deprecated and unmaintained synclink_gt driver to streamline the kernel codebase. Developers maintaining system integrations or using specific serial interface hardware are advised to monitor these changes to ensure hardware and software compatibility.",
    tags_en: ["Linux 7.2", "Kernel", "8250 UART", "Serial Drivers", "Kernel Development", "Driver Refactoring", "Open Source Contribution"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Serial", lang: "EN" }
    ]
  },
  {
    id: "20260623-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：優化 RISC-V 架構啟動效能並新增 Eswin SoC 支援",
    summary: "Linux 7.2 核心開發進程中，針對 RISC-V 架構進行多項改進。本次更新重點包括在預設設定中啟用 Eswin SoC 支援，以確保 SiFive HiFive Premier P550 等硬體能有更完善的預設支援。此外，透過實作 HAVE_BUILDTIME_MCOUNT_SORT 機制，允許在連結時期對 __mcount_loc 進行排序，成功縮減了 ftrace 初始化路徑中的核心啟動延遲。除了效能調校，此次更新亦包含針對 cacheinfo 程式碼中潛在記憶體洩漏問題的修復，以及多項細部代碼清理作業，提升整體架構穩定性。建議相關硬體開發者與嵌入式 Linux 使用者關注此版本後續發布進度。",
    tags: ["Linux 7.2", "RISC-V", "Eswin SoC", "SiFive HiFive Premier P550", "ftrace", "核心開發", "效能優化"],
    title_en: "Linux 7.2 Kernel Update: Optimized RISC-V Architecture Boot Performance and New Eswin SoC Support",
    summary_en: "In the Linux 7.2 kernel development process, several improvements have been made to the RISC-V architecture. Key highlights of this update include enabling Eswin SoC support by default to ensure better out-of-the-box hardware support for devices such as the SiFive HiFive Premier P550. Additionally, by implementing the HAVE_BUILDTIME_MCOUNT_SORT mechanism, which allows for the sorting of __mcount_loc at link time, kernel boot latency in the ftrace initialization path has been successfully reduced. Beyond performance tuning, this update also includes fixes for potential memory leaks in the cacheinfo code, as well as various code cleanup operations to improve overall architectural stability. Relevant hardware developers and embedded Linux users are advised to monitor the subsequent release progress of this version.",
    tags_en: ["Linux 7.2", "RISC-V", "Eswin SoC", "SiFive HiFive Premier P550", "ftrace", "Kernel Development", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-RISC-V", lang: "EN" }
    ]
  },
  {
    id: "20260623-005",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.7.1 發布，修復遊戲控制器輸入錯誤與剪貼簿崩潰問題",
    summary: "KDE 社群釋出 Plasma 6.7.1 維護更新，旨在解決 6.7 版本發布後的初期錯誤。本次更新重點包括：預設停用遊戲控制器輸入外掛以排除異常；針對視窗管理員 KWin 進行多項 Bug 修復；調整 kwin-x11 對夜間模式的處理方式；修正 Union 主題引擎的相關問題；並解決 xdg-desktop-portal-kde 中與剪貼簿功能相關的崩潰錯誤。建議使用 KDE Plasma 環境的 Linux 用戶及開發者儘速評估更新，以維持桌面環境穩定性。詳細改動清單可參閱 KDE 官方公告。",
    tags: ["KDE Plasma", "Linux", "KWin", "桌面環境", "開源軟體", "軟體更新"],
    title_en: "KDE Plasma 6.7.1 Released, Fixing Game Controller Input Errors and Clipboard Crashes",
    summary_en: "The KDE community has released the Plasma 6.7.1 maintenance update, aimed at addressing initial bugs following the 6.7 version release. Key updates include: disabling the game controller input plugin by default to eliminate anomalies; implementing multiple bug fixes for the KWin window manager; adjusting how kwin-x11 handles Night Color; resolving issues related to the Union theme engine; and fixing a crash error in xdg-desktop-portal-kde associated with clipboard functionality. Linux users and developers utilizing the KDE Plasma environment are advised to evaluate and apply the update promptly to maintain desktop stability. A detailed changelog can be found in the official KDE announcement.",
    tags_en: ["KDE Plasma", "Linux", "KWin", "Desktop Environment", "Open Source Software", "Software Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.7.1", lang: "EN" }
    ]
  },
  {
    id: "20260623-006",
    trackers: ["security"],
    category: "重大事件",
    title: "近期多起企業遭勒索軟體攻擊與供應鏈資安事件頻傳",
    summary: "近期發生多起資安事件：印度Tata Electronics遭勒索軟體組織World Leaks攻擊，竊取約630GB內部檔案；國內製造業包含易發精機（含子公司東野精機、日福精工）及尼得科超眾均遭勒索軟體攻擊，造成系統加密與運作中斷。此外，供應鏈與應用程式風險持續，如Salesforce因第三方整合應用程式受駭而停用連結；JetBrains市集出現惡意外掛，竊取開發者AI服務API金鑰；Chrome熱門AI擴充套件SiderAI與MaxAI存在漏洞，用戶面臨敏感資料外洩風險。建議企業落實定期備份並離線存放、強化第三方存取權限控管、審慎評估並限制擴充套件權限，並儘速針對資安公告進行系統修補與異常監控。",
    tags: ["勒索軟體", "Tata Electronics", "易發精機", "尼得科超眾", "供應鏈安全", "惡意外掛", "API金鑰", "資料外洩"],
    title_en: "Recent Surge in Ransomware Attacks and Supply Chain Security Incidents",
    summary_en: "A series of recent security incidents has emerged: Tata Electronics in India was targeted by the ransomware group World Leaks, resulting in the theft of approximately 630GB of internal files. Domestically, manufacturing firms including EF Automation (including its subsidiaries Dong Ye Precision and Rifu Precision) and Nidec Chaun-Choung Technology were hit by ransomware, leading to system encryption and operational disruptions. Furthermore, supply chain and application risks persist: Salesforce disabled third-party integrated applications due to security breaches; malicious plugins were discovered on the JetBrains Marketplace, stealing developers' AI service API keys; and popular AI browser extensions for Chrome, SiderAI and MaxAI, were found to contain vulnerabilities, exposing users to the risk of sensitive data leakage. Businesses are advised to implement regular, off-site backups, strengthen control over third-party access rights, cautiously evaluate and restrict extension permissions, and promptly address security bulletins by patching systems and enhancing anomaly monitoring.",
    tags_en: ["Ransomware", "Tata Electronics", "EF Automation", "Nidec Chaun-Choung Technology", "Supply Chain Security", "Malicious Plugin", "API Key", "Data Leak"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176807", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-007",
    trackers: ["security"],
    category: "重大事件",
    title: "沙烏地阿拉伯零售商 BinDawood 與 Budget Saudi 接連揭露資安事故，顯示當地個資法進入嚴格執法期",
    summary: "沙烏地阿拉伯零售集團 BinDawood Holding 與交通公司 Budget Saudi 近期於證券交易所公開揭露資安事故。其中 BinDawood 指出旗下電商應用程式存在安全漏洞，造成部分客戶訂單資料外洩。事故發生後，該公司已修復漏洞，並委託專業資安機構處置，強調核心系統運作與財務狀況未受重大影響。此類事件密集揭露反映沙烏地自 2024 年 9 月全面實施《個人資料保護法》（PDPL）後，企業對透明度要求的轉變。加上沙烏地資料與人工智慧管理局（SDAIA）已開始針對違規案件發布處罰，當地監管機構正從輔導期正式跨入嚴格執行階段，迫使企業必須採取更主動的資安揭露策略。",
    tags: ["BinDawood Holding", "Budget Saudi", "資安事故", "個資外洩", "沙烏地阿拉伯", "PDPL", "資料外洩", "SDAIA"],
    title_en: "Saudi retailers BinDawood and Budget Saudi report consecutive security incidents, signaling a shift toward strict enforcement of local data protection laws",
    summary_en: "Saudi retail group BinDawood Holding and transport company Budget Saudi recently publicly disclosed security incidents to the stock exchange. BinDawood reported that a security vulnerability in its e-commerce application led to the exposure of certain customer order data. Following the incident, the company patched the vulnerability and engaged professional cybersecurity firms to handle the matter, emphasizing that core system operations and financial conditions remain unaffected. The intensive disclosure of such events reflects a shift in corporate transparency requirements in Saudi Arabia since the full implementation of the Personal Data Protection Law (PDPL) in September 2024. With the Saudi Data and AI Authority (SDAIA) now issuing penalties for non-compliance, local regulatory bodies have officially moved from a guidance phase into a strict enforcement stage, compelling companies to adopt more proactive cybersecurity disclosure strategies.",
    tags_en: ["BinDawood Holding", "Budget Saudi", "security incident", "personal data breach", "Saudi Arabia", "PDPL", "data breach", "SDAIA"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176802", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-008",
    trackers: ["security"],
    category: "重大事件",
    title: "加拿大情報局獲准執行網路威脅削減令，遠端清除境內遭殭屍網路感染設備",
    summary: "加拿大聯邦法院揭露，加拿大安全情報局（CSIS）於2024年首度依據專門令狀，遠端介入並清除國內遭殭屍網路感染的設備。受影響裝置涵蓋伺服器、SOHO路由器及IoT物聯網設備。該殭屍網路遭外國敵對勢力利用，作為攻擊關鍵基礎設施、軍事與政府系統的中繼節點，構成嚴重國安威脅。本次行動雖未公開技術細節、殭屍網路名稱與受害數量，但法院認定採取遠端清除惡意程式的作法符合必要與比例原則，且執行過程中未蒐集任何個人識別資訊。此舉旨在提升大眾對殭屍網路風險的認知，並強化國家韌性。",
    tags: ["CSIS", "加拿大", "殭屍網路", "物聯網安全", "關鍵基礎設施", "網路間諜", "網路威脅削減令"],
    title_en: "CSIS Authorized to Execute Cyber Threat Reduction Order, Remotely Clearing Botnet-Infected Devices Within Canada",
    summary_en: "The Canadian Federal Court has revealed that the Canadian Security Intelligence Service (CSIS) first utilized a specialized warrant in 2024 to remotely intervene and clear domestic devices infected by a botnet. The affected devices included servers, SOHO routers, and IoT equipment. This botnet was leveraged by a foreign hostile actor as a relay node to attack critical infrastructure, military, and government systems, posing a severe national security threat. While technical details, the name of the botnet, and the number of victims were not disclosed, the court determined that the remote removal of malicious software met the principles of necessity and proportionality, and that no personally identifiable information was collected during the operation. This action aims to raise public awareness of botnet risks and enhance national resilience.",
    tags_en: ["CSIS", "Canada", "Botnet", "IoT security", "Critical infrastructure", "Cyber espionage", "Cyber Threat Reduction Order"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176800", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-009",
    trackers: ["os"],
    category: "Linux",
    title: "Debian、Red Hat 與 SUSE 等多大發行版發布 Linux 安全更新，涵蓋核心與常見元件",
    summary: "包含 Debian、Fedora、Mageia、Oracle、Red Hat、SUSE 與 Ubuntu 在內的多家 Linux 發行版供應商，針對旗下作業系統與軟體包發布緊急安全更新。本次更新涵蓋廣泛的軟體元件，包括 Linux 核心（Kernel）、OpenSSH、MySQL、Nginx、FFmpeg 以及多項 Python 相關套件與容器化工具。技術細節方面，各發行版修正了各自軟體庫中發現的弱點，攻擊向量視具體組件而定。對於運行相關版本服務的企業與用戶，上述更新解決了潛在的安全風險。建議系統管理員參考所屬發行版的官方安全公告（USN、RHSA 等），儘速執行套件更新以確保服務安全性，並在更新後重啟受影響的服務或系統。",
    tags: ["Linux", "Debian", "Red Hat", "SUSE", "OpenSSH", "Kernel", "安全更新"],
    title_en: "Major Linux distributions including Debian, Red Hat, and SUSE release security updates covering kernels and common components",
    summary_en: "Multiple Linux distribution vendors, including Debian, Fedora, Mageia, Oracle, Red Hat, SUSE, and Ubuntu, have released emergency security updates for their operating systems and software packages. These updates cover a wide range of software components, including the Linux Kernel, OpenSSH, MySQL, Nginx, FFmpeg, as well as various Python-related packages and containerization tools. Regarding technical details, each distribution has patched vulnerabilities discovered within its respective software repositories, with attack vectors varying depending on the specific component. For enterprises and users running services on affected versions, these updates address potential security risks. System administrators are advised to consult their distribution's official security advisories (such as USN, RHSA, etc.) and perform package updates as soon as possible to ensure service security, and to restart affected services or systems after the updates.",
    tags_en: ["Linux", "Debian", "Red Hat", "SUSE", "OpenSSH", "Kernel", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1079083", lang: "EN" }
    ]
  },
  {
    id: "20260623-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Fwupd 2.0.21 版本發布：透過 AI 安全掃描修復超過 250 項潛在漏洞",
    summary: "開源韌體更新解決方案 Fwupd 發布 2.0.21 版本，針對 2.0.x 穩定分支進行更新。此次釋出旨在向後移植（backport）近期於 2.1.x 分支中透過 Anthropic Mythos 與其他 AI/LLM 安全研究工具所發現的超過 250 項潛在安全性問題。此舉主要服務於採用保守更新策略、尚未升級至新版功能分支的 Linux 發行版用戶。開發團隊建議，若作業系統環境允許，用戶應優先升級至修復強度更高的 2.1.x 系列版本，以獲得更全面的程式碼加固與安全性防護。相關軟體更新細節與檔案已透過 GitHub 提供。",
    tags: ["Fwupd", "韌體更新", "Linux", "AI安全", "Mythos", "開源軟體", "安全性修復"],
    title_en: "Fwupd 2.0.21 Released: Over 250 Potential Vulnerabilities Fixed via AI Security Scanning",
    summary_en: "The open-source firmware update solution Fwupd has released version 2.0.21, updating the 2.0.x stable branch. This release aims to backport over 250 potential security issues recently discovered in the 2.1.x branch using Anthropic Mythos and other AI/LLM security research tools. This move primarily serves Linux distribution users who adopt conservative update strategies and have not yet upgraded to the newer feature branch. The development team advises that, if the operating system environment permits, users should prioritize upgrading to the 2.1.x series for more comprehensive code hardening and security protection. Relevant software update details and files are available via GitHub.",
    tags_en: ["Fwupd", "Firmware Update", "Linux", "AI Security", "Mythos", "Open Source Software", "Security Patch"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Fwupd-2.0.21-Released", lang: "EN" }
    ]
  },
  {
    id: "20260623-011",
    trackers: ["security"],
    category: "重大事件",
    title: "前資安犯罪集團 Scattered Spider 成員在英國認罪，涉及攻擊倫敦交通、醫療及多數美國企業",
    summary: "本文報導兩名前資安犯罪集團 Scattered Spider 的成員 Thalha Jubair 和 Owen Flowers 在英國認罪，涉及多起大規模網路犯罪活動。他們被指控參與攻擊倫敦交通（Transport for London）的電腦系統，以及針對美國醫療機構 SSM Health Care Corporation 和 Sutter Health 的網路入侵。此外，該集團的活動範圍極廣，包括在 2022 年至 2025 年間，針對超過 47 家美國實體進行網路入侵，並從受害者處勒索至少 1.15 億美元。犯罪行為包括利用 SIM 交換詐騙、大規模 SMS 釣魚攻擊，竊取單點登入憑證，並從多家大型科技公司（如 LastPass、DoorDash、Mailchimp、Signal）竊取資料。這些事件顯示了犯罪集團利用社會工程學和技術漏洞，對關鍵基礎設施和大型企業造成嚴重威脅。相關被告的審判和處刑仍在進行中，顯示出資安犯罪的持續性和複雜性。",
    tags: ["Scattered Spider", "網路犯罪", "SIM-swapping", "SMS 釣魚", "Transport for London", "勒索軟體"],
    title_en: "Former Cybercrime Group Scattered Spider Members Plead Guilty in UK, Linked to Attacks on London Transport, Healthcare, and Numerous US Companies",
    summary_en: "This article reports that two former cybercrime group members from Scattered Spider, Thalha Jubair and Owen Flowers, pleaded guilty in the UK regarding multiple large-scale cybercrime activities. They were accused of participating in attacks on Transport for London's computer systems, as well as cyber intrusions targeting US healthcare institutions SSM Health Care Corporation and Sutter Health. Furthermore, the group's activities spanned a wide range, including cyber intrusions against over 47 US entities between 2022 and 2025, and extorting at least $115 million from victims. The criminal activities included utilizing SIM swapping fraud, large-scale SMS phishing attacks, stealing single sign-on credentials, and exfiltrating data from multiple large tech companies (such as LastPass, DoorDash, Mailchimp, and Signal). These incidents demonstrate how the criminal group leveraged social engineering and technical vulnerabilities to pose severe threats to critical infrastructure and large corporations. The trials and sentencing of the relevant defendants are ongoing, highlighting the persistence and complexity of cybercrime.",
    tags_en: ["Scattered Spider", "Cybercrime", "SIM-swapping", "SMS Phishing", "Transport for London", "Ransomware"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial", lang: "EN" }
    ]
  },
  {
    id: "20260623-012",
    trackers: ["security"],
    category: "重大事件",
    title: "塔塔電子遭駭客攻擊：數據洩露事件涉及蘋果產品製造資料，世界洩密群組主導勒索",
    summary: "塔塔電子（Tata Electronics）確認其IT基礎設施部分曾遭受網路攻擊。該公司強調，其核心營運並未受到影響。此次事件的爆發，是針對世界洩密（World Leaks）威脅群組的指控，該群組聲稱洩露了大量疑似從塔塔電子竊取的資料。洩露的內容包括多個目錄和文件，據稱包含蘋果產品的製造資料，例如內部元件電路圖、PCB設計、材料規格和SDK檔案。世界洩密被認為是Hunters International的品牌重塑，該群組主要採取數據勒索的方式，而非加密。此事件凸顯了供應鏈企業在面對數據外洩威脅時的風險，建議企業應強化數據防護、監控和應變機制，以應對數據被竊取和公開的風險。",
    tags: ["塔塔電子", "World Leaks", "數據洩露", "蘋果", "勒索軟體", "供應鏈安全"],
    title_en: "Tata Electronics Hit by Hacker Attack: Data Leak Involves Apple Product Manufacturing Data, World Leaks Group Leads Ransomware",
    summary_en: "Tata Electronics confirmed that a portion of its IT infrastructure was subjected to a cyberattack. The company emphasized that its core operations were not affected. The incident is attributed to the threat group World Leaks, which claimed to have leaked a large amount of data allegedly stolen from Tata Electronics. The leaked content includes multiple directories and files, reportedly containing manufacturing data for Apple products, such as internal component schematics, PCB designs, material specifications, and SDK files. World Leaks is believed to be a rebranding of Hunters International, a group that primarily employs data extortion rather than encryption. This incident highlights the risks faced by supply chain companies when confronting data leakage threats, suggesting that enterprises should strengthen data protection, monitoring, and response mechanisms to address the risk of data theft and public disclosure.",
    tags_en: ["Tata Electronics", "World Leaks", "Data Leakage", "Apple", "Ransomware", "Supply Chain Security"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/tata-electronics-confirms-cyberattack-as-hackers-leak-data", lang: "EN" }
    ]
  },
  {
    id: "20260623-013",
    trackers: ["security"],
    category: "重大事件",
    title: "醫療科技公司 Xsolis 遭網路釣魚攻擊，近 140 萬名個資受損",
    summary: "美國醫療科技公司 Xsolis 於 1 月 22 日發現，公司網路遭受了「目標性網路釣魚攻擊」，該攻擊發生於 1 月 20 日。攻擊者透過釣魚方式取得存取權限，並存取了包含客戶個人資訊的檔案。受影響的個資包含姓名、地址、出生日期、健康保險資訊、社會安全碼及醫療治療資訊，受影響人數約為 139 萬人。Xsolis 立即採取行動，隔離了入侵活動，並聘請外部資安專家進行調查。為應對此次事件，公司已重設所有用戶和關鍵帳號的密碼，加強了系統監控，並加速了員工安全訓練，同時通知受影響的個體，並提供一年期的身份監控服務。",
    tags: ["Xsolis", "資料外洩", "網路釣魚", "健康保險資訊", "社會安全碼", "醫療科技"],
    title_en: "Medical Technology Company Xsolis Suffers Data Breach After Phishing Attack Affecting Nearly 1.4 Million Individuals",
    summary_en: "On January 22, U.S. medical technology company Xsolis discovered that its network had been subjected to a 'targeted phishing attack,' which occurred on January 20. The attackers gained access through phishing methods and accessed files containing customer personal information. The compromised data includes names, addresses, dates of birth, health insurance information, social security numbers, and medical treatment information, affecting approximately 1.39 million individuals. Xsolis immediately took action by isolating the intrusion activity and hiring external cybersecurity experts to conduct an investigation. To respond to the incident, the company has reset all user and critical account passwords, enhanced system monitoring, and accelerated employee security training, while also notifying affected individuals and providing one year of identity monitoring services.",
    tags_en: ["Xsolis", "Data Leakage", "Phishing", "Health Insurance Information", "Social Security Number", "Medical Technology"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/healthtech-firm-xolis-suffers-data-breach-impacting-14-million-people", lang: "EN" }
    ]
  },
  {
    id: "20260623-014",
    trackers: ["security"],
    category: "法規與標準",
    title: "Google強化Workspace資料治理：擴大Gemini App對話保存與訴訟保全功能",
    summary: "Google針對Google Workspace環境下的Gemini應用程式，大幅強化了資料治理與資訊保留功能。透過Google Vault，管理員現在可以為Gemini app設定預設保存規則和訴訟保全（litigation holds），將AI對話紀錄納入法遵與法律調查流程。這項更新適用於Business Plus等部分Workspace版本，以及Vault附加元件客戶，但僅限於獨立的Gemini app介面，不涵蓋Gmail或Google Docs等應用程式內建的Gemini互動記錄。此外，Google還新增了管理員控制台選項，允許管理員針對Gemini app對話紀錄設定是否允許使用「臨時對話」或「刪除對話紀錄」的權限，這些設定可依網域或組織單位層級停用。然而，Google強調，若組織已啟動Vault的保存規則或訴訟保全，這些法遵設定將具有最高優先權，即使使用者執行刪除或關閉活動紀錄，資料仍會被保留並可供Vault管理員檢視。",
    tags: ["Google Workspace", "Gemini app", "Google Vault", "資料治理", "訴訟保全", "法遵"],
    title_en: "Google Strengthens Workspace Data Governance: Expanding Gemini App Conversation Retention and Litigation Hold Features",
    summary_en: "Google has significantly enhanced data governance and information retention features for the Gemini application within the Google Workspace environment. Using Google Vault, administrators can now set default retention rules and litigation holds for the Gemini app, incorporating AI conversation records into compliance and legal investigation workflows. This update applies to certain Workspace versions, such as Business Plus, and Vault add-on customers, but is limited to the standalone Gemini app interface and does not cover Gemini interaction records built into applications like Gmail or Google Docs. Furthermore, Google has added administrator console options, allowing admins to set permissions regarding the use of \"temporary conversations\" or the ability to \"delete conversation history\" for the Gemini app. These settings can be disabled at the domain or organizational unit level. However, Google emphasizes that if the organization has activated Vault retention rules or litigation holds, these compliance settings will take the highest priority. Consequently, data will remain retained and visible to Vault administrators, even if the user deletes the data or disables activity history.",
    tags_en: ["Google Workspace", "Gemini app", "Google Vault", "Data Governance", "Litigation Hold", "Compliance"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176797", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-015",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft 證實內部修補程式無法解決 SharePoint 地端部署零時差攻擊漏洞",
    summary: "微軟近期針對地端 SharePoint 伺服器發布的修補程式，經證實未能有效解決當前的資安問題，目前該產品正面臨零時差攻擊威脅。攻擊者正利用該漏洞針對企業環境進行滲透。由於目前修補機制失效，建議受影響的企業與組織應嚴密監控網路流量，限制 SharePoint 對外存取權限，並密切關注微軟官方發布的進一步安全公告與緊急修補程序。在此期間，應審視環境設定以降低遭入侵風險。",
    tags: ["Microsoft", "SharePoint", "零時差漏洞", "企業安全", "伺服器防護"],
    title_en: "Microsoft confirms internal patch fails to resolve SharePoint on-premises zero-day vulnerability",
    summary_en: "Microsoft recently released a patch for on-premises SharePoint servers, which has been confirmed as ineffective in resolving the current security issue. The product is currently facing a zero-day attack threat, with attackers exploiting the vulnerability to infiltrate enterprise environments. Due to the failure of the current patching mechanism, it is recommended that affected enterprises and organizations strictly monitor network traffic, restrict external access to SharePoint, and closely follow official security bulletins and emergency patches released by Microsoft. During this period, environmental configurations should be reviewed to reduce the risk of compromise.",
    tags_en: ["Microsoft", "SharePoint", "Zero-day vulnerability", "Enterprise security", "Server protection"],
    sources: [
      { name: "The Register", url: "https://theregister.com/hpc/2026/06/23/bold-move-cotton-trump-administration-tells-us-techies-it-expects-american-quantum-computer-by-2028/5260074", lang: "EN" }
    ]
  },
  {
    id: "20260623-016",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft SharePoint 本地端更新修補失敗，正遭零日漏洞攻擊",
    summary: "微軟針對本地部署的 SharePoint 伺服器所發布的安全性修補程式未能解決既有弱點，導致該平台目前正遭受零日漏洞攻擊。攻擊細節與相關 CVE 編號在原文中未明確列出。此問題對依賴地端 SharePoint 的組織構成直接安全威脅，可能導致系統遭未經授權存取或遭受攻擊。建議管理員密切關注微軟後續發布的公告與安全更新，並採取必要的臨時防護措施以降低風險。",
    tags: ["Microsoft", "SharePoint", "零日漏洞", "伺服器安全", "地端部署", "資安威脅"],
    title_en: "Microsoft SharePoint On-Premises Update Fails to Patch, Currently Under Zero-Day Attack",
    summary_en: "The security patch released by Microsoft for on-premises SharePoint servers has failed to resolve existing vulnerabilities, leaving the platform currently exposed to zero-day attacks. Specific attack details and the relevant CVE identifiers were not explicitly listed in the original report. This issue poses a direct security threat to organizations relying on on-premises SharePoint, potentially leading to unauthorized system access or compromise. Administrators are advised to closely monitor subsequent announcements and security updates from Microsoft and implement necessary temporary mitigation measures to reduce risk.",
    tags_en: ["Microsoft", "SharePoint", "Zero-day vulnerability", "Server security", "On-premises deployment", "Cybersecurity threat"],
    sources: [
      { name: "The Register", url: "https://theregister.com/databases/2026/06/23/microsoft-access-finally-breaks-free-of-its-22-inch-form-limit/5260005", lang: "EN" }
    ]
  },
  {
    id: "20260623-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "英特爾E835網路卡發布：強調高能效與硬體信任根，接續E830系列主導市場",
    summary: "英特爾（Intel）在2026台北國際電腦展期間，接續推出E835系列網路控制器與網路卡，作為E830系列的後續主力產品。E835系列除了支援最高200 Gb/s的傳輸速度，並具備與E830系列相似的規格外，在能效表現上大幅領先競爭對手。例如，E835-CQDA2的實測耗電量為11.68瓦，相較於Nvidia ConnectX-6 Dx的22.15瓦，能效提升顯著。在安全性方面，E835系列內建了遵循NIST SP 800-193的矽信任根（RoT），並採用CNSA 1.0和FIPS 140-3 level 1的標準。特別值得注意的是，E835支援已簽署（Signed）的SPDM 1.1.2，能使用裝置私鑰對量測結果進行簽章，提供更強的設備見證證明，防止資料偽造或重放攻擊。此外，E835還支援IEEE 1588 PTP v2等精準時間同步技術，並在管理和虛擬化方面提供多種標準支援，鞏固了其在伺服器網路市場的地位。",
    tags: ["Intel", "E835", "E830", "SPDM", "NIST SP 800-193", "RoT", "網路卡"],
    title_en: "Intel Releases E835 Network Adapter: Emphasizing High Energy Efficiency and Hardware Root of Trust, Continuing E830 Series Market Leadership",
    summary_en: "During the 2026 Taipei International Computer Show, Intel launched the E835 series network controller and network adapter, serving as the successor flagship product to the E830 series. In addition to supporting a transmission speed of up to 200 Gb/s and possessing specifications similar to the E830 series, the E835 series significantly outperforms competitors in energy efficiency. For instance, the measured power consumption of the E835-CQDA2 is 11.68W, showing a marked improvement in energy efficiency compared to the 22.15W of the Nvidia ConnectX-6 Dx. Regarding security, the E835 series integrates a silicon Root of Trust (RoT) compliant with NIST SP 800-193 and adopts CNSA 1.0 and FIPS 140-3 level 1 standards. Notably, the E835 supports signed SPDM 1.1.2, enabling the signing of measurement results using a device private key, which provides stronger device attestation and prevents data forgery or replay attacks. Furthermore, the E835 supports precise time synchronization technologies such as IEEE 1588 PTP v2, and offers various standard supports for management and virtualization, solidifying its position in the server networking market.",
    tags_en: ["Intel", "E835", "E830", "SPDM", "NIST SP 800-193", "RoT", "Network Adapter"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/review/176745", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安公司揭露駭客PCPJack攻擊行動：利用TCP隧道與Sliver框架建立SMTP中繼系統",
    summary: "威脅情報公司Hunt.io調查發現，駭客組織PCPJack曾進行大規模攻擊，目標是建立電子郵件中繼系統。攻擊者利用開源TCP隧道工具Chisel，開發了適用於x86、Arm等主流Linux伺服器的惡意程式。這些惡意程式會部署指令碼，透過C2框架Sliver對受害主機下達指令，並為其分配SOCKS5代理伺服器連接埠。攻擊者在AWS、GCP、Azure等多雲環境中，隨機入侵了多達230臺伺服器。調查發現，駭客的目的是建立SMTP品質閘道，藉此隱匿其攻擊流量，並透過公開的C2基礎設施，暴露了其掃描工具和弱點利用工具等資訊。實務上，企業應提高對雲端環境的監控能力，特別是針對不尋常的流量中繼或代理服務建立。建議應加強網路邊界防禦，並對雲端資源的存取權限進行嚴格審核。",
    tags: ["PCPJack", "Hunt.io", "Chisel", "Sliver", "SMTP中繼", "雲端攻擊", "C2基礎設施"],
    title_en: "Cybersecurity Firm Reveals Hacker PCPJack Attack Campaign: Establishing SMTP Relay System Using TCP Tunneling and Sliver Framework",
    summary_en: "An investigation by threat intelligence firm Hunt.io found that the hacker group PCPJack conducted a large-scale attack aimed at establishing an email relay system. The attackers utilized the open-source TCP tunneling tool Chisel to develop malicious programs applicable to mainstream Linux servers, such as x86 and Arm. These malicious programs deploy scripts that issue commands to compromised hosts via the C2 framework Sliver, and allocate SOCKS5 proxy server ports for them. The attackers randomly infiltrated up to 230 servers across multi-cloud environments, including AWS, GCP, and Azure. The investigation found that the hackers' goal was to establish an SMTP quality gateway, thereby concealing their attack traffic. Furthermore, the use of public C2 infrastructure exposed information regarding their scanning tools and exploit tools. Practically, enterprises should enhance their monitoring capabilities in cloud environments, especially concerning unusual traffic relay or proxy service establishment. It is recommended that organizations strengthen network perimeter defenses and strictly audit access permissions for cloud resources.",
    tags_en: ["PCPJack", "Hunt.io", "Chisel", "Sliver", "SMTP Relay", "Cloud Attack", "C2 Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176796", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Oracle發布2026年6月關鍵安全修補：修補122項重大漏洞，包含多個CVSS 10.0高危漏洞",
    summary: "Oracle於6月16日發布2026年6月關鍵安全修補更新（CSPU），共包含245項更新程式，修補了243項漏洞，其中包含122項重大漏洞。本次修補影響範圍廣泛，涵蓋中介軟體、身分識別、企業應用及虛擬化等11個產品家族，其中Oracle Fusion Middleware佔比最高，達43%。資安業者Tenable分析指出，約40%的更新程式可透過網路無需身份驗證發動攻擊。\n\n本次修補的漏洞中，有多個CVSS嚴重性評分達10.0分的重大漏洞。例如，影響Oracle Coherence的CVE-2026-35308與CVE-2026-35307，以及影響Oracle WebCenter Enterprise Capture的CVE-2026-46778與CVE-2026-46781等。此外，另一個CVSS 10.0的漏洞涉及Oracle Solaris作業系統的遠端管理常駐程式。\n\n此外，Oracle也提醒用戶，本次修補已涵蓋先前於6月10日揭露並遭駭客實際利用的Oracle PeopleSoft PeopleTools重大漏洞CVE-2026-35273。建議所有用戶應立即更新所有受影響產品，特別是涉及Fusion Middleware及Solaris系統的用戶，以降低被網路攻擊的風險。",
    tags: ["Oracle", "CSPU", "CVE-2026-35308", "CVE-2026-35273", "CVSS 10.0", "Oracle Fusion Middleware"],
    title_en: "Oracle Releases June 2026 Critical Security Patch: Patches 122 Critical Vulnerabilities, Including Multiple CVSS 10.0 High-Risk Flaws",
    summary_en: "On June 16, Oracle released a Critical Security Patch Update (CSPU) for June 2026, which includes 245 updated programs and patches 243 vulnerabilities, including 122 critical vulnerabilities. This patch has a wide impact, covering 11 product families including middleware, identity, enterprise applications, and virtualization, with Oracle Fusion Middleware accounting for the highest proportion at 43%. Security vendor Tenable analyzed that approximately 40% of the updated programs can be exploited via the network without authentication.\n\nAmong the vulnerabilities patched, there are multiple critical flaws with a CVSS severity score of 10.0. Examples include CVE-2026-35308 and CVE-2026-35307 affecting Oracle Coherence, and CVE-2026-46778 and CVE-2026-46781 affecting Oracle WebCenter Enterprise Capture. Additionally, another CVSS 10.0 vulnerability involves a remote management daemon for the Oracle Solaris operating system.\n\nFurthermore, Oracle reminds users that this patch covers the critical vulnerability CVE-2026-35273 in Oracle PeopleSoft PeopleTools, which was previously disclosed on June 10 and actively exploited by hackers. All users are advised to immediately update all affected products, especially those involving Fusion Middleware and Solaris systems, to mitigate the risk of network attacks.",
    tags_en: ["Oracle", "CSPU", "CVE-2026-35308", "CVE-2026-35273", "CVSS 10.0", "Oracle Fusion Middleware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176795", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FFmpeg libavcodec 發現越界寫入漏洞：CVE-2026-8461 威脅多媒體服務與IoT設備",
    summary: "資安業者 JFrog 揭露 FFmpeg 函式庫 libavcodec 存在 CVE-2026-8461 漏洞。此漏洞位於 MagicYUV 解碼器，屬於越界寫入（out-of-bounds write）類型，可導致阻斷服務，甚至可能被攻擊者用於遠端程式碼執行（RCE）。該漏洞影響 FFmpeg 8.1.2 以前的版本。由於 FFmpeg 是多數影音處理專案（如 Jellyfin、Nextcloud、OBS 等）的基礎元件，此漏洞具有極高的供應鏈風險。攻擊者只需上傳惡意媒體檔案，無需特殊權限或驗證，即可利用此漏洞攻擊使用 FFmpeg 的各種應用程式，範圍涵蓋媒體伺服器、雲端轉碼服務、聊天平台，甚至嵌入式 IoT 設備（如 NAS、智慧電視）。修補建議是立即升級至 FFmpeg 8.1.2 或更高版本。開發者可透過特定指令檢查系統是否使用有漏洞的 MagicYUV 版本。",
    tags: ["FFmpeg", "CVE-2026-8461", "libavcodec", "RCE", "越界寫入", "供應鏈安全"],
    title_en: "FFmpeg libavcodec discovers out-of-bounds write vulnerability: CVE-2026-8461 threatens multimedia services and IoT devices",
    summary_en: "Security vendor JFrog has disclosed a vulnerability, CVE-2026-8461, in the FFmpeg library libavcodec. This vulnerability resides in the MagicYUV decoder and is an out-of-bounds write type, which can lead to denial-of-service, and potentially be exploited by attackers for Remote Code Execution (RCE). The vulnerability affects versions of FFmpeg prior to 8.1.2. Given that FFmpeg is a foundational component for many multimedia processing projects (such as Jellyfin, Nextcloud, OBS, etc.), this vulnerability poses extremely high supply chain risk. Attackers only need to upload a malicious media file, without requiring special privileges or authentication, to exploit this vulnerability against various applications that use FFmpeg. The scope includes media servers, cloud transcoding services, chat platforms, and even embedded IoT devices (such as NAS and smart TVs). The recommended fix is to immediately upgrade to FFmpeg 8.1.2 or later. Developers can check if their system uses the vulnerable MagicYUV version via specific commands.",
    tags_en: ["FFmpeg", "CVE-2026-8461", "libavcodec", "RCE", "Out-of-bounds write", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176794", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-021",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟揭露「Crypto Clipper」惡意程式：結合剪貼簿竊取、Tor通訊與蠕蟲擴散的Windows威脅",
    summary: "微軟揭露一種名為「Crypto Clipper」的加密貨幣剪貼簿惡意程式，該惡意軟體威脅程度高於一般竊資軟體。它結合了剪貼簿監控、竊取加密貨幣資訊、透過Tor匿名通訊，並具備蠕蟲式自我擴散能力。攻擊者最初透過惡意捷徑檔案（LNK）作為入侵手段，這些LNK檔常經由USB隨身碟散播，目的是讓使用者點開後執行惡意程式而非預期文件。惡意程式包含兩個核心元件：一個負責自我複製與持續擴散，另一個則負責監控剪貼簿並竊取加密貨幣資訊。更值得注意的是，該惡意程式部署了便攜版Tor用戶端，並透過本機SOCKS5代理伺服器路由流量，使其形同在受害電腦設置了後門，具有遠端程式碼執行能力。",
    tags: ["Crypto Clipper", "微軟", "惡意軟體", "剪貼簿竊取", "Tor通訊", "蠕蟲擴散", "Windows"],
    title_en: "Microsoft Unveils 'Crypto Clipper' Malware: A Windows Threat Combining Clipboard Theft, Tor Communication, and Worm Propagation",
    summary_en: "Microsoft has disclosed a cryptocurrency clipboard malware named 'Crypto Clipper,' which poses a threat level higher than typical data theft software. It combines clipboard monitoring, theft of cryptocurrency information, anonymous communication via Tor, and worm-like self-propagation capabilities. Attackers initially use malicious shortcut files (LNK) as an entry vector; these LNK files are often spread via USB flash drives, aiming to trick users into executing the malware instead of the intended document. The malware contains two core components: one responsible for self-replication and continuous propagation, and another dedicated to monitoring the clipboard and stealing cryptocurrency information. Notably, the malware deploys a portable Tor client and routes traffic through a local SOCKS5 proxy server, effectively establishing a backdoor on the victim's computer with remote code execution capabilities.",
    tags_en: ["Crypto Clipper", "Microsoft", "Malware", "Clipboard Theft", "Tor Communication", "Worm Propagation", "Windows"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176791", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-022",
    trackers: ["eu_cra", "os", "security"],
    category: "漏洞與威脅情報",
    title: "Canonical Livepatch 支援 Arm64 核心，實現不重啟的即時核心安全修補",
    summary: "Canonical 宣布 Livepatch 功能正式支援 Arm64 架構，大幅擴展了其自動化安全修補能力。從 Ubuntu Core 26 開始，Arm64 設備和雲端虛擬機首次能夠在不中斷服務或重啟的情況下，應用關鍵核心更新。這項升級對於管理無法每日或每週進行安全修補的系統至關重要，能顯著提升系統的網路韌性。技術上，Livepatch 依賴可靠的核心堆疊追蹤（reliable kernel stack traces）來安全地在運行任務上切換到修補後的程式碼。Canonical 透過建立專用的 Arm64 建構農場，並優化了整個修補流程，確保了修補的穩定性與可靠性。實務上，這為企業管理邊緣設備或 Arm 基礎的雲端伺服器提供了關鍵工具，有助於達成如《網路韌性法案》（CRA）等法規要求。建議用戶應升級至 Ubuntu 26.04 LTS 或 Ubuntu Core 26，利用 Livepatch 服務來維持系統的修補狀態。",
    tags: ["Canonical", "Livepatch", "Arm64", "核心修補", "Ubuntu", "網路韌性"],
    title_en: "Canonical Livepatch Supports Arm64 Core, Enabling Live Kernel Security Patching Without Reboot",
    summary_en: "Canonical announced that the Livepatch feature now officially supports the Arm64 architecture, significantly expanding its automated security patching capabilities. Starting with Ubuntu Core 26, Arm64 devices and cloud virtual machines can now apply critical kernel updates without service interruption or reboot. This upgrade is crucial for managing systems that cannot undergo daily or weekly security patching, thereby significantly enhancing system network resilience. Technically, Livepatch relies on reliable kernel stack traces to safely switch to patched code while tasks are running. Canonical achieved this by establishing a dedicated Arm64 build farm and optimizing the entire patching process, ensuring both stability and reliability. Practically, this provides a critical tool for enterprises managing edge devices or Arm-based cloud servers, helping them meet regulatory requirements such as the Cyber Resilience Act (CRA). Users are advised to upgrade to Ubuntu 26.04 LTS or Ubuntu Core 26 to utilize the Livepatch service and maintain the system's patched state.",
    tags_en: ["Canonical", "Livepatch", "Arm64", "Kernel Patching", "Ubuntu", "Network Resilience"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/canonical-announces-live-kernel-patching-for-arm64", lang: "EN" }
    ]
  },
  {
    id: "20260623-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "大規模「FortiBleed」攻擊：駭客濫用 FortiGate 診斷指令竊取千萬筆認證資料",
    summary: "研究人員揭露代號為「FortiBleed」的全球攻擊行動，攻擊者透過掃描網際網路，利用憑證填充與暴力破解入侵 FortiGate 防火牆。駭客開發並部署名為「FortigateSniffer」的 Golang 工具，濫用系統內建診斷指令（diagnose sniffer packet）被動捕捉包含 RADIUS、NTLM 及 Kerberos 等 24 種協定的驗證流量。此行動已滲透全球數十萬台設備，造成大量帳密、雜湊值及工作階段 Cookie 外洩，甚至影響至北約相關防務承包商。攻擊者疑似為俄語系初次存取代理人（IAB），意圖獲取資料後進行後續勒索或於地下市場販售。建議受影響組織立即更換 Fortinet VPN 及管理介面認證，強制執行多因素驗證（MFA），並移除暴露於公網的管理介面，同時檢視 gateway 驗證紀錄以偵測異常行為。",
    tags: ["FortiBleed", "FortiGate", "SOCRadar", "憑證竊取", "FortigateSniffer", "網路防火牆", "憑證填充"],
    title_en: "Massive 'FortiBleed' Campaign: Hackers Abuse FortiGate Diagnostic Commands to Steal Tens of Millions of Credentials",
    summary_en: "Researchers have uncovered a global attack campaign codenamed 'FortiBleed,' in which attackers scan the internet to compromise FortiGate firewalls through credential stuffing and brute-force attacks. The hackers developed and deployed a Golang-based tool dubbed 'FortigateSniffer' that abuses the built-in system diagnostic command 'diagnose sniffer packet' to passively intercept authentication traffic across 24 protocols, including RADIUS, NTLM, and Kerberos. This operation has compromised hundreds of thousands of devices worldwide, resulting in the exfiltration of a massive volume of credentials, hashes, and session cookies, even impacting contractors associated with NATO defense. The attackers are suspected to be Russian-speaking Initial Access Brokers (IABs) aiming to exfiltrate data for subsequent ransomware attacks or sale on underground markets. Affected organizations are advised to immediately rotate Fortinet VPN and management interface credentials, enforce Multi-Factor Authentication (MFA), remove management interfaces exposed to the public internet, and audit gateway authentication logs to detect suspicious activity.",
    tags_en: ["FortiBleed", "FortiGate", "SOCRadar", "Credential Theft", "FortigateSniffer", "Network Firewall", "Credential Stuffing"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/fortibleed-attackers-firewalls-credentials-stealers", lang: "EN" }
    ]
  },
  {
    id: "20260623-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apple A12、A13 晶片 BootROM 存在 usbliter8 漏洞，恐面臨難以透過軟體修補的開機鏈攻擊",
    summary: "資安研究公司 Paradigm Shift 揭露名為「usbliter8」的硬體級漏洞，影響 Apple A12、A13 處理器以及 S4/S5 晶片。此漏洞源於晶片內部 SecureROM 與 Synopsys DWC2 USB 控制器的協作缺陷，攻擊者可藉由惡意 USB 設定封包造成緩衝區寫入位移，進而在開機早期取得程式碼執行權限，並載入未經簽章的 iBoot 映像。由於該漏洞位於不可變的 BootROM 層級，難以透過常規軟體更新完全根治。雖然此攻擊不直接影響安全隔離區處理器（SEP），但可能增加 SEP 被攻擊的風險。研究團隊建議，更新至具備正確 DART 保護機制的後續世代硬體為最有效的緩解手段。",
    tags: ["Apple", "usbliter8", "BootROM", "SecureROM", "硬體漏洞", "開機鏈安全", "Synopsys DWC2"],
    title_en: "Apple A12, A13 Chip BootROM Contains usbliter8 Vulnerability, Potentially Facing Boot Chain Attack Difficult to Patch via Software",
    summary_en: "Security research firm Paradigm Shift has disclosed a hardware-level vulnerability named \"usbliter8,\" affecting Apple A12, A13 processors, and S4/S5 chips. This vulnerability stems from a cooperation flaw between the chip's internal SecureROM and the Synopsys DWC2 USB controller. Attackers can exploit this flaw by sending malicious USB configuration packets, causing a buffer write overflow, and subsequently gaining code execution early in the boot process, allowing the loading of unsigned iBoot images. Because the vulnerability resides in the immutable BootROM layer, it is difficult to fully remediate using standard software updates. Although this attack does not directly affect the Secure Enclave Processor (SEP), it may increase the risk of the SEP being compromised. The research team suggests that updating to subsequent generations of hardware with proper DART protection mechanisms is the most effective mitigation measure.",
    tags_en: ["Apple", "usbliter8", "BootROM", "SecureROM", "Hardware Vulnerability", "Boot Chain Security", "Synopsys DWC2"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176808", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安公司Rebora揭露兩款AI擴充套件漏洞，SiderAI與MaxAI恐遭劫持竊資",
    summary: "資安業者Rebora近期發現兩款熱門AI擴充套件SiderAI與MaxAI存在重大漏洞，分別命名為Spyder與MaXSS。兩者均因訊息傳遞機制驗證不足，導致攻擊者僅需引誘用戶造訪惡意網站，即可觸發跨站攻擊。由於此類擴充套件具備存取瀏覽器頁面內容、操作網頁及開啟分頁等高度權限，受害者一旦中招，其AI帳號、電子郵件、敏感憑證及對話記錄均面臨外洩風險。受影響套件安裝數合計超過千萬，且廠商回應狀況不明，建議使用者暫停使用或密切留意軟體更新。",
    tags: ["Rebora", "SiderAI", "MaxAI", "Spyder漏洞", "MaXSS漏洞", "瀏覽器擴充套件", "跨站攻擊"],
    title_en: "Security firm Rebora discloses vulnerabilities in two AI extensions, SiderAI and MaxAI at risk of hijacking and data theft",
    summary_en: "Security firm Rebora recently discovered critical vulnerabilities in two popular AI extensions, SiderAI and MaxAI, dubbed Spyder and MaXSS, respectively. Both are susceptible to cross-site attacks triggered when an attacker lures a user to a malicious website, due to insufficient validation in their messaging mechanisms. Because these extensions possess high-level permissions—including the ability to access browser page content, manipulate webpages, and open new tabs—victims are at risk of having their AI accounts, emails, sensitive credentials, and conversation logs compromised. The affected extensions have a combined install base of over ten million. As the vendors' response status remains unclear, it is recommended that users suspend use or closely monitor for software updates.",
    tags_en: ["Rebora", "SiderAI", "MaxAI", "Spyder vulnerability", "MaXSS vulnerability", "browser extensions", "cross-site attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176799", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-026",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iPhone Air 2 傳聞將搭載超廣角第二鏡頭",
    summary: "根據彭博社最新報導，市場傳聞 Apple 即將於明年推出的 iPhone Air 2 將會新增第二顆鏡頭，且規格將選定為超廣角鏡頭，而非先前討論的望遠鏡頭。此項變動將直接影響該系列機種的攝影規格配置與產品定位，目前尚未提及相關的硬體技術細節、軟體影像處理演算法或對既有供應鏈的影響。建議關注後續官方公告，以確認最終硬體規格與攝影功能表現。",
    tags: ["Apple", "iPhone Air 2", "鏡頭規格", "攝影功能", "超廣角", "產品更新"],
    title_en: "Rumored Apple iPhone Air 2 to Feature Ultra-Wide Secondary Lens",
    summary_en: "According to a recent Bloomberg report, rumors suggest that the upcoming iPhone Air 2, expected to launch next year, will add a second lens. The specification is reportedly set for an ultra-wide lens, rather than the telephoto lens previously discussed. This change will directly impact the photographic specifications and product positioning of this series. No details regarding hardware technology, software image processing algorithms, or impacts on the existing supply chain have been mentioned yet. It is recommended to monitor subsequent official announcements to confirm the final hardware specifications and camera performance.",
    tags_en: ["Apple", "iPhone Air 2", "Lens Specifications", "Photography Features", "Ultra-Wide", "Product Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/should-the-iphone-air-2-have-an-ultrawide-or-telephoto-as-the-second-camera-poll", lang: "EN" }
    ]
  },
  {
    id: "20260623-027",
    trackers: ["os"],
    category: "Apple",
    title: "Speechify 於 iPhone 與 Mac 平台全面開放免費語音輸入功能",
    summary: "AI 應用程式 Speechify 宣佈，即日起針對所有 iOS 及 macOS 用戶免費開放語音輸入功能。該工具整合了自動編輯層，能即時處理語音轉文字的內容，移除口語中的贅詞並修正標點結構，達到類似專業書面寫作的輸出品質。此外，Speechify 預告將於近期推出具備自主代理功能的 Speechify Voice Agents 與企業級產品 Speechify Work，藉由支援記憶、知識庫連結及 API 呼叫功能，協助企業打造能處理電話與自動化執行工作的 AI 代理。目前相關功能均無需訂閱即可使用。",
    tags: ["Speechify", "語音輸入", "AI", "iOS", "macOS", "生產力工具", "語音代理"],
    title_en: "Speechify Unveils Free Voice Input Features for iPhone and Mac",
    summary_en: "AI application Speechify has announced that its voice input functionality is now free for all iOS and macOS users. The tool integrates an automatic editing layer that processes speech-to-text content in real-time, removing filler words and correcting punctuation to achieve professional written output quality. Additionally, Speechify announced the upcoming launch of Speechify Voice Agents, which feature autonomous agent capabilities, and the enterprise-level product, Speechify Work. By supporting memory, knowledge base integration, and API calling, these tools assist enterprises in building AI agents capable of handling phone calls and executing automated tasks. Currently, these features are available without a subscription.",
    tags_en: ["Speechify", "Voice Input", "AI", "iOS", "macOS", "Productivity Tools", "Voice Agents"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/speechify-brings-voice-typing-to-all-iphone-and-mac-users", lang: "EN" }
    ]
  },
  {
    id: "20260623-028",
    trackers: ["os"],
    category: "Apple",
    title: "英國法院批准 Apple iCloud 反壟斷集體訴訟，用戶或可獲 40 億美元賠償",
    summary: "英國消費者權益組織對 Apple 提起集體訴訟，指控其涉嫌濫用市場支配地位，強迫 iPhone 用戶綁定並使用 iCloud 雲端儲存服務，違反當地反壟斷法規。該訴訟已獲英國競爭監管機構批准進入司法程序。若訴訟成功，預計將有數百萬名英國用戶符合資格參與總額約 30 億英鎊（約 40 億美元）的賠償金分配。此案件凸顯大型科技公司生態系統封閉性在歐洲面臨的法律風險，建議企業持續關注數位市場法案（DMA）及後續反壟斷審判對 Apple 服務整合策略的潛在影響。",
    tags: ["Apple", "iCloud", "反壟斷", "英國", "集體訴訟", "競爭法"],
    title_en: "UK Court Approves Apple iCloud Antitrust Class Action; Users Could Receive $4 Billion in Compensation",
    summary_en: "A UK consumer rights group has filed a class action lawsuit against Apple, alleging the abuse of its dominant market position by forcing iPhone users to bind and utilize the iCloud cloud storage service, in violation of local antitrust regulations. The lawsuit has been approved by the UK competition regulator to proceed to trial. If successful, millions of UK users are expected to be eligible to participate in the distribution of approximately £3 billion (approx. $4 billion) in damages. This case highlights the legal risks facing the closed ecosystems of major technology companies in Europe, and it is advised that enterprises continue to monitor the potential impact of the Digital Markets Act (DMA) and subsequent antitrust trials on Apple's service integration strategy.",
    tags_en: ["Apple", "iCloud", "Antitrust", "UK", "Class action", "Competition law"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/icloud-class-action-lawsuit-could-see-uk-users-share-4b-payout", lang: "EN" }
    ]
  },
  {
    id: "20260623-029",
    trackers: ["os"],
    category: "Apple",
    title: "WWDC 26 重點回顧：Mosyle 專家探討 Apple 企業 IT 管理與部署新趨勢",
    summary: "在最新一集的 Apple @ Work 節目中，Mosyle 的 Alcyr Araujo 與聽眾共同回顧了 WWDC 26 期間發布的各項 IT 相關公告。本次討論重點聚焦於 Apple 生態系中，針對企業級環境的裝置部署、自動化管理以及安全性維護等功能的革新。這對於需要管理大規模 Apple 裝置群的組織而言具有高度參考價值，有助於企業 IT 人員了解如何利用 Apple 平台的新特性提升工作效率，並確保裝置在職場環境中的安全與合規性。建議 IT 管理者持續關注後續的技術文件更新，以利落實相關管理策略。",
    tags: ["Apple", "WWDC26", "Mosyle", "IT管理", "裝置部署", "企業資安"],
    title_en: "WWDC 26 Key Takeaways: Mosyle Experts Discuss New Trends in Apple Enterprise IT Management and Deployment",
    summary_en: "In the latest episode of Apple @ Work, Alcyr Araujo from Mosyle reviews the IT-related announcements made during WWDC 26. The discussion focuses on innovations within the Apple ecosystem for enterprise-level device deployment, automated management, and security maintenance. This provides high reference value for organizations managing large fleets of Apple devices, helping enterprise IT personnel understand how to leverage new features of the Apple platform to improve operational efficiency and ensure device security and compliance in the workplace. IT managers are advised to monitor subsequent technical documentation updates to effectively implement relevant management strategies.",
    tags_en: ["Apple", "WWDC26", "Mosyle", "IT Management", "Device Deployment", "Enterprise Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/wwdc-26-recap", lang: "EN" }
    ]
  },
  {
    id: "20260623-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增四個已知遭利用漏洞：涵蓋Lantronix和Ubiquiti UniFi OS的資安風險",
    summary: "美國網路安全局（CISA）宣布，已根據實際的攻擊證據，將四個新的漏洞納入其「已知遭利用漏洞目錄」（KEV Catalog）。本次新增的漏洞包括Lantronix EDS5000的CVE-2025-67038（代碼注入）、Ubiquiti UniFi OS的CVE-2026-34908（不當存取控制）、CVE-2026-34909（路徑穿越）以及CVE-2026-34910（不當輸入驗證）。這些漏洞被視為惡意網路行為者常用的攻擊途徑，對聯邦企業系統構成重大風險。CISA提醒，雖然聯邦政府的《強制執行指令》（BOD 26-04）要求機構優先修補KEV目錄中的高風險漏洞，但所有組織應採納風險導向的漏洞管理策略，優先修補這些已知的、且具備被利用證據的漏洞。建議受影響的組織應立即查閱CISA的KEV目錄，並針對這些高風險漏洞進行緊急修補與加固。",
    tags: ["CISA", "KEV Catalog", "CVE-2025-67038", "CVE-2026-34908", "Ubiquiti UniFi OS", "漏洞管理"],
    title_en: "CISA Adds Four Known Exploited Vulnerabilities: Security Risks Affecting Lantronix and Ubiquiti UniFi OS",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added four new vulnerabilities to its 'Known Exploited Vulnerabilities Catalog' (KEV Catalog), based on actual evidence of exploitation. The newly added vulnerabilities include CVE-2025-67038 (code injection) in Lantronix EDS5000, CVE-2026-34908 (improper access control) in Ubiquiti UniFi OS, CVE-2026-34909 (path traversal), and CVE-2026-34910 (improper input validation). These vulnerabilities are considered common attack vectors used by malicious actors and pose significant risks to federal enterprise systems. CISA reminds that while the federal government's 'Executive Order' (BOD 26-04) requires agencies to prioritize patching high-risk vulnerabilities listed in the KEV Catalog, all organizations should adopt a risk-based vulnerability management strategy, prioritizing the patching of these known, exploited vulnerabilities. Affected organizations are advised to immediately consult the CISA KEV Catalog and perform emergency patching and hardening for these high-risk vulnerabilities.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2025-67038", "CVE-2026-34908", "Ubiquiti UniFi OS", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/06/23/cisa-adds-four-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260623-031",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "B&R 產品受影響：Linux 核心漏洞 CVE-2026-31431 允許權限提升，建議禁用特定核心模組",
    summary: "B&R Industrial Automation GmbH 發布公告，警告其產品系列（包括 Linux for B&R <=12、APROL <APROL-AutoYaST-DVD- V4.4-010.10.260602、X20EDS410 /all）的 Linux 核心存在漏洞。此漏洞（CVE-2026-31431）屬於核心加密模組 `algif_aead` 的問題，成功利用可能允許攻擊者在受影響系統上提升權限。攻擊者需具備本地低權限存取權限。建議用戶應立即安裝供應商提供的軟體更新。若無法立即更新，可透過禁用 `algif_aead` 核心模組來減輕風險，此措施已被證實能有效阻止利用該漏洞。此外，建議實施嚴格的存取控制策略，並定期審查帳戶權限。",
    tags: ["B&R Industrial Automation GmbH", "Linux 核心", "CVE-2026-31431", "OT/ICS", "權限提升", "核心模組"],
    title_en: "B&R Products Affected: Linux Kernel Vulnerability CVE-2026-31431 Allows Privilege Escalation; Disabling Specific Kernel Module Recommended",
    summary_en: "B&R Industrial Automation GmbH has issued an announcement warning of a vulnerability in the Linux kernel affecting its product lines (including Linux for B&R <=12, APROL <APROL-AutoYaST-DVD- V4.4-010.10.260602, X20EDS410 /all>). This vulnerability (CVE-2026-31431) resides in the core encryption module `algif_aead`. Successful exploitation could allow an attacker to escalate privileges on the affected system. The attacker requires local low-privilege access. Users are advised to immediately install the software update provided by the vendor. If immediate updating is not possible, the risk can be mitigated by disabling the `algif_aead` kernel module, a measure proven to effectively prevent exploitation of this vulnerability. Furthermore, implementing strict access control policies and regularly reviewing account permissions are recommended.",
    tags_en: ["B&R Industrial Automation GmbH", "Linux Kernel", "CVE-2026-31431", "OT/ICS", "Privilege Escalation", "Kernel Module"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-174-06", lang: "EN" }
    ]
  },
  {
    id: "20260623-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "國際執法行動重創 SocGholish 惡意框架，揭露 TDS 系統的網路安全風險",
    summary: "國際執法機構在「Operation Endgame」行動中，成功扣押了與惡意框架 SocGholish 相關的 106 個伺服器和大量網域，並修復了 14,971 個受感染的網站。SocGholish 是一個已存在近十年的惡名框架，主要作為勒索軟體和網路犯罪的初始存取點。該框架透過在受感染的網站植入多階段 JavaScript 惡意程式，偽裝成瀏覽器更新，建立機器群（botnet）的初始立足點。文章特別強調了流量分發系統（TDSs）的風險，指出駭客利用 TDSs 將用戶重定向至釣魚頁面或惡意軟體下載，進而將用戶導向 SocGholish 框架。這類攻擊鏈的受害者範圍極廣，包括政府、教育、金融、醫療等各垂直產業。修補建議包括提高警惕，了解 TDSs 的濫用風險，並加強對網站和用戶端設備的監控，以防範初始存取點的建立。",
    tags: ["SocGholish", "TDSs", "Operation Endgame", "初始存取", "勒索軟體", "網路犯罪"],
    title_en: "International Law Enforcement Strikes Hard Against SocGholish Malicious Framework, Exposing Network Security Risks of TDS Systems",
    summary_en: "In 'Operation Endgame,' international law enforcement agencies successfully seized 106 servers and numerous domains associated with the malicious framework SocGholish, and remediated 14,971 infected websites. SocGholish is a notorious framework that has existed for nearly a decade, primarily serving as an initial access point for ransomware and cybercrime. The framework establishes an initial foothold for a botnet by injecting multi-stage JavaScript malware into infected websites, disguising it as a browser update. The article specifically highlights the risks posed by Traffic Distribution Systems (TDSs), pointing out that hackers exploit TDSs to redirect users to phishing pages or malware downloads, subsequently guiding users toward the SocGholish framework. The victims of this attack chain are extremely broad, encompassing various vertical industries including government, education, finance, and healthcare. Remediation recommendations include raising awareness, understanding the risks of TDS misuse, and strengthening monitoring of websites and endpoint devices to prevent the establishment of initial access points.",
    tags_en: ["SocGholish", "TDSs", "Operation Endgame", "Initial Access", "Ransomware", "Cybercrime"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/socgholish-takedown-malicious-tds-threats", lang: "EN" }
    ]
  },
  {
    id: "20260623-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SOCRadar揭露FortiBleed攻擊：俄羅斯駭客濫用FortiOS診斷指令竊取43萬台FortiGate憑證",
    summary: "威脅情資公司SOCRadar發布報告，揭露一場代號FortiBleed的大規模憑證竊取攻擊活動。該攻擊自2026年2月開始，目標鎖定全球超過43萬臺FortiGate防火牆設備。攻擊者利用基於Golang的惡意工具FortigateSniffer，透過SSH連線，濫用FortiOS內建的`diagnose sniffer packet`診斷指令。攻擊流程包括：先透過憑證填充或暴力破解取得管理權限；部署Sniffer工具監控RADIUS、NTLM、Kerberos和LDAP等協定的憑證流量，擷取明文憑證、電子郵件或雜湊檔案；最後利用分散式GPU叢集進行大規模離線破解。雖然Fortinet曾表示此事件是已洩漏憑證的重複利用，但SOCRadar指出，攻擊活動仍在持續，威脅行為者持續嘗試入侵並部署惡意工具。實務建議應加強對設備組態檔案的監控，並審慎評估診斷指令的濫用風險，以防範憑證被竊取。",
    tags: ["FortiGate", "FortiOS", "FortiBleed", "SOCRadar", "憑證竊取", "diagnose sniffer packet", "Golang"],
    title_en: "SOCRadar Uncovers FortiBleed Attack: Russian Hackers Exploit FortiOS Diagnostic Command to Steal Credentials from 430,000 FortiGate Devices",
    summary_en: "Threat intelligence company SOCRadar released a report revealing a large-scale credential theft campaign dubbed FortiBleed. This attack, which began in February 2026, targeted over 430,000 FortiGate firewall devices globally. The attackers utilized a malicious Golang-based tool, FortigateSniffer, which exploited the built-in FortiOS diagnostic command `diagnose sniffer packet` via SSH connections. The attack process involves: first, obtaining administrative privileges through credential stuffing or brute-forcing; second, deploying the Sniffer tool to monitor credential traffic for protocols such as RADIUS, NTLM, Kerberos, and LDAP, capturing plaintext credentials, emails, or hash files; and finally, performing large-scale offline cracking using distributed GPU clusters. Although Fortinet stated that this incident involves the reuse of leaked credentials, SOCRadar points out that the attack activity is ongoing, with threat actors continuously attempting to infiltrate and deploy malicious tools. Practical recommendations include strengthening monitoring of device configuration files and carefully assessing the risk of diagnostic command misuse to prevent credential theft.",
    tags_en: ["FortiGate", "FortiOS", "FortiBleed", "SOCRadar", "Credential Theft", "diagnose sniffer packet", "Golang"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176813", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄語駭客組織「FortiBleed」大規模攻擊 FortiGate 防火牆，竊取超過 1.1 億憑證",
    summary: "一場由俄語駭客初始存取經紀商（IAB）主導的「FortiBleed」大規模活動，自 2026 年 2 月開始，鎖定全球超過 43 萬台 FortiGate 防火牆。攻擊流程包含：利用 Masscan 和 Shodan 進行廣泛偵察，接著使用「forticheck」等工具進行憑證檢查，並透過字典攻擊和憑證填充（credential stuffing）取得管理權限。一旦取得 SSH 存取權，駭客會部署名為 FortigateSniffer 的工具，利用 FortiOS 內建的 `diagnose sniffer packet` 指令，被動攔截通過設備的 24 種協定（如 RADIUS、LDAP、SMB 等）的明文和雜湊憑證。這些憑證隨後被用 Hashmat 等工具破解，並用於橫向移動和 Active Directory 枚舉。攻擊目標特別關注員工少於 200 人的中小企業（SMBs），尤其鎖定美國和印度等地區的 IT 服務業。此次活動不僅針對 Fortinet 設備，還擴展至 Synology NAS、Sophos 防火牆、Citrix SSL-VPN 等多種網路設備，顯示其採用標準的「噴灑式」攻擊鏈，竊取了包括 RADIUS、NTLM 和 Kerberos 等多種憑證雜湊，總計超過 1.1 億個憑證。",
    tags: ["FortiGate", "FortiOS", "FortiBleed", "憑證竊取", "初始存取", "網路偵察", "SMB"],
    title_en: "Russian Hacker Group 'FortiBleed' Launches Massive Attack on FortiGate Firewalls, Stealing Over 110 Million Credentials",
    summary_en: "A large-scale campaign named 'FortiBleed,' led by Russian Initial Access Brokers (IABs), began in February 2026, targeting over 430,000 FortiGate firewalls globally. The attack process included: conducting widespread reconnaissance using Masscan and Shodan, followed by credential checking with tools like 'forticheck,' and obtaining administrative privileges through dictionary attacks and credential stuffing. Once SSH access was gained, the hackers deployed a tool called FortigateSniffer, which utilized the built-in FortiOS `diagnose sniffer packet` command to passively intercept plaintext and hashed credentials from 24 protocols passing through the device (such as RADIUS, LDAP, and SMB). These credentials were subsequently cracked using tools like Hashmat and used for lateral movement and Active Directory enumeration. The attack specifically targeted Small to Medium Businesses (SMBs) with fewer than 200 employees, particularly focusing on the IT services sector in regions like the US and India. This campaign did not only target Fortinet devices but also expanded to multiple network devices, including Synology NAS, Sophos firewalls, and Citrix SSL-VPN, demonstrating the use of a standard 'spray-and-pray' attack chain, resulting in the theft of various credential hashes, including RADIUS, NTLM, and Kerberos, totaling over 110 million credentials.",
    tags_en: ["FortiGate", "FortiOS", "FortiBleed", "Credential Theft", "Initial Access", "Network Reconnaissance", "SMB"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/fortibleed-targeted-fortigate-firewalls.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "高危 SSRF 漏洞 CVE-2026-20230：Cisco Unified CM 可被遠端未經認證攻擊者利用，獲取 Root 權限",
    summary: "Cisco Unified Communications Manager (Unified CM) 和 Unified CM Session Management Edition (Unified CM SME) 存在一高嚴重性 SSRF 漏洞（CVE-2026-20230）。該漏洞源於對特定 HTTP 請求輸入驗證不當，允許未經認證的遠端攻擊者透過 WebDialer 組件，利用 `file://` URI 寫入任意檔案到底層作業系統。攻擊者可透過控制檔案路徑和內容，最終達到遠端程式碼執行（RCE）並提升至 Root 權限。該漏洞已於 6 月 3 日公開修補，但安全情報公司 Defused 警告，此漏洞已被積極利用，攻擊者甚至能透過寫入測試檔案來識別目標設備。修補建議是立即更新 Cisco 提供的安全補丁，並加強對 WebDialer 組件的輸入驗證，以防止惡意檔案寫入。",
    tags: ["Cisco", "CVE-2026-20230", "SSRF", "Unified CM", "Root 權限", "RCE"],
    title_en: "High-Severity SSRF Vulnerability CVE-2026-20230: Cisco Unified CM Allows Unauthenticated Remote Attacker to Obtain Root Privileges",
    summary_en: "Cisco Unified Communications Manager (Unified CM) and Unified CM Session Management Edition (Unified CM SME) contain a high-severity SSRF vulnerability (CVE-2026-20230). The vulnerability stems from improper input validation of specific HTTP requests, allowing unauthenticated remote attackers to utilize the WebDialer component to write arbitrary files to the underlying operating system via `file://` URI. By controlling the file path and content, attackers can ultimately achieve Remote Code Execution (RCE) and escalate privileges to Root. Although a patch was publicly released on June 3, security intelligence firm Defused warns that this vulnerability is actively exploited, and attackers can even identify target devices by writing test files. The recommended remediation is to immediately apply the security patch provided by Cisco and strengthen input validation for the WebDialer component to prevent malicious file writes.",
    tags_en: ["Cisco", "CVE-2026-20230", "SSRF", "Unified CM", "Root privileges", "RCE"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisco-unified-cm-sme-flaw-cve-2026-20230-now-exploited-in-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260623-036",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新 macOS ClickFix 攻擊利用 DMG 檔案，透過終端機指令靜默竊取憑證與加密貨幣資料",
    summary: "研究人員發現一種新型的 macOS 惡意活動，利用 ClickFix 社交工程手法，誘騙使用者在假 CAPTCHA 或錯誤頁面下執行惡意終端機指令。該指令會從攻擊者伺服器下載 DMG 檔案，並使用 `hdiutil attach -nobrowse` 等系統工具靜默掛載，自動啟動包含竊取工具的應用程式。該惡意程式屬於 Atomic macOS Stealer 系列，能竊取多個瀏覽器（包括 Chrome、Edge、Firefox 等）的密碼、Cookie、自動填寫資料，以及 Apple Keychain 資料。此外，它還能竊取多種加密貨幣錢包（如 Exodus、Trezor Suite）的資料，並竊取 Telegram 和 Discord 的資料。攻擊者還會替換合法設備的應用程式，以進行加密貨幣盜竊。使用者應高度警惕任何要求在終端機執行指令的網站，除非完全理解指令的用途。",
    tags: ["macOS", "ClickFix", "DMG", "InfoStealer", "Atomic macOS Stealer", "終端機指令"],
    title_en: "New macOS ClickFix Attack Exploits DMG Files to Silently Steal Credentials and Cryptocurrency Data via Terminal Commands",
    summary_en: "Researchers have discovered a new type of macOS malicious activity that utilizes the ClickFix social engineering technique to trick users into executing malicious terminal commands on fake CAPTCHA or error pages. This command downloads a DMG file from the attacker's server and silently mounts it using system tools like `hdiutil attach -nobrowse`, automatically launching an application containing stealing tools. This malware belongs to the Atomic macOS Stealer series and is capable of stealing passwords, cookies, autofill data from multiple browsers (including Chrome, Edge, and Firefox), as well as Apple Keychain data. Furthermore, it can steal data from various cryptocurrency wallets (such as Exodus and Trezor Suite), and steal data from Telegram and Discord. Attackers may also replace legitimate device applications to facilitate cryptocurrency theft. Users should be highly vigilant regarding any website that requires executing commands in the terminal, unless they fully understand the purpose of the command.",
    tags_en: ["macOS", "ClickFix", "DMG", "InfoStealer", "Atomic macOS Stealer", "Terminal Command"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-macos-clickfix-attack-silently-mounts-dmgs-to-push-infostealer", lang: "EN" }
    ]
  },
  {
    id: "20260623-037",
    trackers: ["os"],
    category: "Apple",
    title: "YouTube Music 應用程式或將支援 Apple Watch 離線下載功能，改善運動時使用體驗",
    summary: "YouTube Music 應用程式長期以來缺乏在 Apple Watch 上支援離線下載功能，與 Apple Music 或 Spotify 等其他主流音樂串流服務相比，這一直是一個功能缺口。根據 MacRumors 分析師在 X 平台（原 Twitter）發布的程式碼分析，發現 YouTube Music 的 Apple Watch 版本程式碼中包含「clear downloads」等字眼，暗示該應用程式正在為 Apple Watch 的離線下載功能鋪路。雖然文章未提供確切發布時間，但此功能若實現，將極大地提升使用者在運動時無需攜帶手機即可直接使用音樂的便利性。目前，YouTube Music 已在 Wear OS（適用於 Pixel Watch 和 Galaxy Watch）以及 Garmin 手錶上提供離線下載支援，因此這對於 Apple Watch 用戶而言，無疑是一項期待已久的更新。",
    tags: ["YouTube Music", "Apple Watch", "離線下載", "Apple 生態系", "智慧手錶", "音樂串流"],
    title_en: "YouTube Music App May Support Apple Watch Offline Downloads, Improving Workout Experience",
    summary_en: "The YouTube Music app has long lacked offline download support on the Apple Watch, representing a functional gap compared to other major music streaming services like Apple Music or Spotify. According to code analysis published by MacRumors analyst on X (formerly Twitter), the YouTube Music Apple Watch version code contains phrases such as \"clear downloads,\" suggesting the application is preparing for offline download functionality on the Apple Watch. Although the article did not provide an exact release date, if this feature is implemented, it will greatly enhance the convenience for users to listen to music directly during workouts without needing to carry their phone. Currently, YouTube Music offers offline download support on Wear OS (for Pixel Watch and Galaxy Watch) and Garmin watches, making this a highly anticipated update for Apple Watch users.",
    tags_en: ["YouTube Music", "Apple Watch", "Offline Downloads", "Apple Ecosystem", "Smartwatch", "Music Streaming"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/youtube-music-may-soon-support-offline-downloads-on-apple-watch", lang: "EN" }
    ]
  },
  {
    id: "20260623-038",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 AirPods Max 2 首批 Beta 韌體，同步更新多款 AirPods 型號",
    summary: "隨著 iOS 27 beta 2 和 macOS 27 beta 2 的發布，Apple 順應先前承諾，推出了 AirPods Max 2 的首批 Beta 韌體更新。本次更新涵蓋了 AirPods Max 2、AirPods Pro 2、AirPods Pro 2 (USB-C)、AirPods (4th gen)、AirPods (4th gen, ANC) 和 AirPods Pro 3 等多款支援型號。所有受支援型號均更新至版本 9.0.304，Build 9A5304b。用戶需在 Mac 或 iPhone/iPad 的藍牙設定中，手動開啟「AirPods Beta Updates」才能啟用韌體 Beta 更新。Apple 提醒，韌體更新會在 AirPods 放置於充電盒並靠近配對的 iPhone 或 Mac 時自動安裝。本次更新預告了未來 AirPods 的新功能，包括自訂 EQ 和 Apple GymKit 同步。",
    tags: ["Apple", "AirPods Max 2", "iOS 27", "macOS 27", "韌體更新", "Beta 測試"],
    title_en: "Apple Releases First Batch of Beta Firmware for AirPods Max 2, Updates Multiple AirPods Models",
    summary_en: "With the release of iOS 27 beta 2 and macOS 27 beta 2, Apple has released the first batch of Beta firmware updates for the AirPods Max 2, fulfilling a previous commitment. This update covers multiple supported models, including AirPods Max 2, AirPods Pro 2, AirPods Pro 2 (USB-C), AirPods (4th gen), AirPods (4th gen, ANC), and AirPods Pro 3. All supported models are updated to version 9.0.304, Build 9A5304b. Users must manually enable 'AirPods Beta Updates' in the Bluetooth settings on a Mac or iPhone/iPad to activate the firmware Beta update. Apple notes that the firmware update will automatically install when the AirPods are placed in the charging case and near a paired iPhone or Mac. This update previews future AirPods features, including custom EQ and Apple GymKit synchronization.",
    tags_en: ["Apple", "AirPods Max 2", "iOS 27", "macOS 27", "Firmware Update", "Beta Testing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/apple-releases-new-airpods-beta-firmware-including-first-build-for-airpods-max-2", lang: "EN" }
    ]
  },
  {
    id: "20260623-039",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果2026年產品線OLED面板供應鏈曝光：三星與LG將獨供，BOE缺席",
    summary: "根據報導，三星顯示器（Samsung Display）和LG顯示器（LG Display）已開始為蘋果2026年產品線進行OLED面板的大規模量產，預計所有發布的型號都將由這兩家韓國廠商供應。此前，由於品質問題，BOE未能為iPhone 17 Pro提供面板，導致其供應鏈缺席。新報告指出，三星將獨家供應iPad mini、可折疊iPhone和MacBook Pro的OLED面板；LG顯示器則專責供應Apple Watch Series 12的面板。兩家公司預計為iPhone 18 Pro和iPhone 18 Pro Max提供共計9000萬塊面板。此外，報導提及iPhone 18 Pro和iPhone 18 Pro Max將採用LTPO+ OLED技術，以提升低光環境下的能效與顯示響應性。這也凸顯了蘋果對韓國顯示產業的高度依賴性，因為兩家供應商的營收報告顯示，蘋果是其最大的客戶。修補建議方面，用戶應關注官方發布的產品資訊，並了解供應鏈的變化趨勢。",
    tags: ["Apple", "Samsung Display", "LG Display", "OLED", "iPhone 18 Pro", "MacBook Pro", "供應鏈"],
    title_en: "Apple's 2026 Product Line OLED Panel Supply Chain Exposed: Samsung and LG to be Exclusive Suppliers, BOE Absent",
    summary_en: "According to reports, Samsung Display and LG Display have begun large-scale mass production of OLED panels for Apple's 2026 product line, with all released models expected to be supplied by these two South Korean manufacturers. Previously, BOE failed to provide panels for the iPhone 17 Pro due to quality issues, leading to its supply chain absence. A new report indicates that Samsung will exclusively supply OLED panels for the iPad mini, foldable iPhone, and MacBook Pro; while LG Display will specialize in supplying panels for the Apple Watch Series 12. The two companies are expected to provide a total of 90 million panels for the iPhone 18 Pro and iPhone 18 Pro Max. Furthermore, the report mentions that the iPhone 18 Pro and iPhone 18 Pro Max will adopt LTPO+ OLED technology to enhance energy efficiency and display responsiveness in low-light environments. This highlights Apple's high reliance on the South Korean display industry, as the revenue reports of both suppliers show Apple as their largest client. Regarding remediation advice, users should monitor official product information and understand the changing supply chain trends.",
    tags_en: ["Apple", "Samsung Display", "LG Display", "OLED", "iPhone 18 Pro", "MacBook Pro", "Supply Chain"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/apples-2026-oled-lineup-will-reportedly-rely-entirely-on-samsung-and-lg", lang: "EN" }
    ]
  },
  {
    id: "20260623-040",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Invites App 推出 1.9 版本：新增共同主辦、公開賓客名單與設計背景選項",
    summary: "Apple 的數位活動邀請應用程式 Invites 今日發布 1.9 版本更新，持續擴充其功能性。本次更新主要帶來三項重要改進：首先是新增了「共同主辦」（cohosting）功能，讓多位用戶能共同規劃和管理活動；其次，主辦人可以選擇將受邀賓客名單設為公開，方便所有出席者查看；最後，App 增加了多樣化的背景選項，讓數位邀請函設計更具個性化。Invites 應用程式需要透過 iCloud+ 服務才能使用，用戶可在 App Store 下載。本次更新屬於功能增強與使用者體驗優化，並包含例行的錯誤修復。此更新主要針對提升用戶的活動規劃便利性，無重大資安漏洞或修補建議。",
    tags: ["Apple", "Invites", "iCloud+", "App Store", "iOS"],
    title_en: "Apple Invites App Releases 1.9 Version: Adds Co-hosting, Public Guest List, and Design Background Options",
    summary_en: "Apple's digital event invitation application, Invites, has released a 1.9 version update, continuing to expand its functionality. This update primarily introduces three key improvements: first, the addition of a 'co-hosting' feature, allowing multiple users to jointly plan and manage events; second, the host can now opt to make the invited guest list public, allowing all attendees to view it; and finally, the App has added diverse background options, making the digital invitation design more personalized. The Invites application requires an iCloud+ subscription to use, and users can download it from the App Store. This update constitutes a functional enhancement and user experience optimization, and includes routine bug fixes. This update mainly aims to improve the convenience of event planning for users and contains no major security vulnerabilities or patches.",
    tags_en: ["Apple", "Invites", "iCloud+", "App Store", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/apple-invites-updated-with-three-changes-including-a-new-cohosting-feature", lang: "EN" }
    ]
  },
  {
    id: "20260623-041",
    trackers: ["os"],
    category: "Apple",
    title: "Apple App Store Connect 遭遇性能問題，部分開發者無法管理應用程式",
    summary: "Apple 的開發者系統狀態頁面確認 App Store Connect 遭遇性能問題，導致部分開發者無法正常使用。此問題於當地時間上午 9 點開始發生，影響範圍涵蓋多個管理應用程式的區域。雖然 Apple 僅將其描述為「性能」問題，但開發者在社群媒體上回報了多處錯誤。此事件顯示開發者工具鏈的穩定性偶爾會受到影響，可能導致開發流程中管理應用程式的環節受阻。目前 Apple 尚未提供更詳細的技術原因或預計修復時間，開發者應留意 Apple 官方的系統狀態更新，並考慮備份關鍵的應用程式資料，以應對服務中斷帶來的業務影響。",
    tags: ["Apple", "App Store Connect", "開發者工具鏈", "性能問題", "macOS"],
    title_en: "Apple App Store Connect Experiences Performance Issues, Preventing Some Developers from Managing Applications",
    summary_en: "Apple's developer system status page confirmed that App Store Connect is experiencing performance issues, preventing some developers from using it normally. The problem began at 9 AM local time and affects multiple regions managing applications. Although Apple only described it as a 'performance' issue, developers reported multiple errors on social media. This incident highlights that the stability of developer toolchains can occasionally be affected, potentially disrupting the process of managing applications within the development workflow. Apple has not yet provided a detailed technical cause or an estimated time for resolution. Developers should monitor Apple's official system status updates and consider backing up critical application data to mitigate business impact from service disruptions.",
    tags_en: ["Apple", "App Store Connect", "Developer Toolchain", "Performance Issue", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/app-store-connect-is-partially-unavailable-for-some-developers", lang: "EN" }
    ]
  },
  {
    id: "20260623-042",
    trackers: ["os", "security"],
    category: "Apple",
    title: "iPhone 18 Pro 傳聞升級：搭載 A20 Pro 晶片、變焦光圈主鏡與 C2 獨立天線模組",
    summary: "本文彙整了關於未來 iPhone 18 Pro 的三項傳聞升級重點。首先，傳聞搭載 A20 Pro 晶片，該晶片預計採用 2nm 製程和 WMCM 包裝，將為運行 iOS 27 的 Apple Intelligence 等高需求 AI 功能提供強大動力。其次，相機方面預計將進行重大升級，包括主鏡的變焦光圈和望遠鏡的更大光圈，主鏡模組的增大甚至可能使機身邊框更厚。最後，在通訊模組上，iPhone 18 Pro 預計將首次採用 Apple 自研的 C2 獨立天線模組，這項升級被認為是 Apple 完全取代高通（Qualcomm）晶片的關鍵一步，且可能整合 5G 衛星通訊支援，為未來提供獨特的電池續航和隱私功能。",
    tags: ["iPhone 18 Pro", "A20 Pro", "iOS 27", "C2 modem", "變焦光圈", "Apple Intelligence"],
    title_en: "iPhone 18 Pro Rumored Upgrades: Featuring A20 Pro Chip, Zoom Aperture Main Lens, and C2 Independent Antenna Module",
    summary_en: "This article compiles three rumored upgrade highlights for the future iPhone 18 Pro. First, it is rumored to feature the A20 Pro chip, which is expected to utilize a 2nm process and WMCM packaging. This chip is anticipated to provide powerful drive for high-demand AI functions like Apple Intelligence running on iOS 27. Second, significant camera upgrades are expected, including a zoom aperture on the main lens and a larger aperture on the telephoto lens. The increased size of the main lens module might even result in a thicker device bezel. Finally, regarding the communication module, the iPhone 18 Pro is expected to debut Apple's self-developed C2 independent antenna module. This upgrade is viewed as a key step for Apple to completely replace Qualcomm chips and may integrate 5G satellite communication support, offering unique future battery life and privacy features.",
    tags_en: ["iPhone 18 Pro", "A20 Pro", "iOS 27", "C2 modem", "Zoom Aperture", "Apple Intelligence"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/iphone-18-pro-three-new-features-that-already-have-me-excited", lang: "EN" }
    ]
  },
  {
    id: "20260623-043",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Salesforce警告：第三方應用程式Klue Battlecards遭異常活動，用戶資料可能面臨未授權存取風險",
    summary: "資安事件指出，第三方應用程式透過與CRM平臺Salesforce的串接，可能導致用戶資料被竊取。Salesforce於6月18日發布公告，停用已安裝Klue Battlecards應用程式與Salesforce的連接，因其資安團隊偵測到異常活動，可能導致部分用戶資料遭到未經授權存取。此問題源於Klue的應用程式連線環節，而非Salesforce平臺本身弱點。根據Klue的說明，攻擊者於6月12日察覺異狀，透過與整合服務相關的外流憑證，取得存取權限，進而竊取Klue與第三方平臺連接所使用的OAuth權杖（token），從而存取多個用戶的第三方平臺資料，包括Salesforce。Klue已採取行動撤銷受影響的憑證與權杖、移除未授權程式碼，並委託CrowdStrike進行調查。用戶應留意第三方整合應用程式的權限管理，並遵循Salesforce及Klue提供的修復指引。",
    tags: ["Salesforce", "Klue Battlecards", "OAuth權杖", "第三方應用程式", "資料外洩", "CRM平臺"],
    title_en: "Salesforce Warns: Third-Party Application Klue Battlecards Detected Abnormal Activity, User Data May Face Unauthorized Access Risk",
    summary_en: "A cybersecurity incident indicates that a third-party application may have stolen user data through its connection to the Salesforce CRM platform. Salesforce issued an announcement on June 18th, disabling the connection between the installed Klue Battlecards application and Salesforce because its security team detected abnormal activity, which could lead to unauthorized access to some user data. This issue originates from the Klue application connection process, not from a vulnerability within the Salesforce platform itself. According to Klue, attackers detected irregularities on June 12th and obtained access rights through leaked credentials related to the integration service, subsequently stealing the OAuth tokens used by Klue to connect with third-party platforms, thereby accessing third-party platform data for multiple users, including Salesforce. Klue has taken action to revoke the affected credentials and tokens, and remove unauthorized code, and has commissioned CrowdStrike to conduct an investigation. Users should pay attention to the permission management of third-party integration applications and follow the remediation guidelines provided by Salesforce and Klue.",
    tags_en: ["Salesforce", "Klue Battlecards", "OAuth token", "Third-Party Application", "Data Leakage", "CRM Platform"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176798", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-044",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OpenAI擴大資安防禦計畫Daybreak，推出GPT-5.5-Cyber與Patch the Planet，強化開源專案漏洞修補能力",
    summary: "OpenAI宣布擴大其資安防禦計畫Daybreak，並發布完整版GPT-5.5-Cyber模型，旨在透過AI技術提升軟體漏洞的發現、驗證與修補效率。GPT-5.5-Cyber專為資安工作設計，在CyberGym等測試中表現優於一般版GPT-5.5。此外，OpenAI更新了Codex Security工具，該工具能執行深度掃描、建立威脅模型，並自動產生修補程式。為應對AI加速漏洞發現帶來的開源專案維護壓力，OpenAI與多家夥伴共同啟動了Patch the Planet計畫。此計畫旨在協助資安研究人員利用AI模型和Codex Security，直接為開源專案（如cURL、Go、Python等）驗證漏洞並提交修補程式。這顯示AI資安工具正從單純的漏洞發現，轉向解決開源專案長期面臨的修補人力瓶頸。",
    tags: ["OpenAI", "Daybreak", "GPT-5.5-Cyber", "Codex Security", "Patch the Planet", "開源專案"],
    title_en: "OpenAI expands cybersecurity defense initiative Daybreak, launching GPT-5.5-Cyber and Patch the Planet to enhance open-source vulnerability patching capabilities",
    summary_en: "OpenAI announced the expansion of its cybersecurity defense initiative, Daybreak, and the release of the full GPT-5.5-Cyber model. This aims to utilize AI technology to improve the efficiency of software vulnerability discovery, validation, and patching. GPT-5.5-Cyber is specifically designed for cybersecurity work and demonstrated superior performance compared to the general GPT-5.5 in tests such as CyberGym. Furthermore, OpenAI updated the Codex Security tool, which can perform deep scanning, build threat models, and automatically generate patches. To address the maintenance pressure on open-source projects resulting from AI-accelerated vulnerability discovery, OpenAI launched the Patch the Planet initiative with multiple partners. This program aims to assist security researchers in using AI models and Codex Security to validate vulnerabilities and submit patches directly for open-source projects (such as cURL, Go, and Python). This demonstrates that AI security tools are transitioning from mere vulnerability discovery to solving the long-term patching labor bottleneck faced by open-source projects.",
    tags_en: ["OpenAI", "Daybreak", "GPT-5.5-Cyber", "Codex Security", "Patch the Planet", "Open-source Projects"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176787", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-045",
    trackers: ["os"],
    category: "Android",
    title: "Google 系統更新報告：Android 平台持續優化裝置連線、資安與 AI 搜尋體驗",
    summary: "本月 Google 系統更新涵蓋了 Play services、Play Store、Android System Intelligence 等多個核心元件，主要針對 Android 裝置的系統管理、使用者體驗及資安功能進行迭代。在系統層面，Play services v26.24 提升了受監護帳戶的應用程式封鎖功能，並新增了關於裝置螢幕鎖如何用於使用者資料加密的通知。此外，系統更新也為開發者提供了支援裝置連線流程的新功能。在資安與隱私方面，Play services v26.21 允許使用者透過 Credential Exchange 標準，在 Google 密碼管理員與第三方密碼管理員之間匯入和匯出密碼及通行鑰。Play Store v51.8 則強化了 Google Play Protect 對未驗證應用程式的額外安全驗證。整體而言，Google 透過這些更新持續強化 Android 平台的穩定性、安全性，並整合 AI 搜尋功能，提升用戶的整體使用體驗。",
    tags: ["Google", "Android", "Play services", "Play Store", "Credential Exchange", "系統更新", "資安"],
    title_en: "Google System Update Report: Continuous Optimization of Device Connectivity, Security, and AI Search Experience on Android Platform",
    summary_en: "This month's Google system update covers multiple core components, including Play services, Play Store, and Android System Intelligence, focusing on iterative improvements to system management, user experience, and security features for Android devices. At the system level, Play services v26.24 enhances the application blocking function for supervised accounts and introduces notifications regarding how device screen lock is used for user data encryption. Furthermore, the system update provides developers with new features supporting device connectivity workflows. In terms of security and privacy, Play services v26.21 allows users to import and export passwords and passkeys between the Google Password Manager and third-party password managers using the Credential Exchange standard. Play Store v51.8 strengthens Google Play Protect with additional security verification for unverified applications. Overall, through these updates, Google continues to enhance the stability and security of the Android platform while integrating AI search functionalities to improve the overall user experience.",
    tags_en: ["Google", "Android", "Play services", "Play Store", "Credential Exchange", "System Update", "Security"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/22/june-2026-google-system-updates", lang: "EN" }
    ]
  },
  {
    id: "20260623-046",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Dell 發布大規模資安公告，修補 PowerStore、PowerFlex 及 VxRail 等產品軟體供應鏈漏洞",
    summary: "Dell 近期針對旗下的企業級儲存、備份及超融合基礎設施產品發布一系列安全性更新。受影響產品涵蓋 PowerStore 儲存陣列、PowerProtect DP（IDPA）備份設備、PowerFlex 超融合平台及 VxRail 系統。此次修補主因並非產品本身功能缺陷，而是源於底層作業系統（如 Linux、SUSE）、第三方開源軟體（如 OpenSSL、Apache Tomcat、Python、Java）及伺服器硬體韌體（包含 iDRAC、BIOS、Intel/AMD 元件）所存在的資安漏洞。部分公告被列為重大等級，涉及漏洞數量龐大，單一產品線即包含數百項風險。原廠建議用戶參考公告，將相關軟體、作業系統及硬體韌體更新至指定版本。此事件凸顯現代 IT 基礎設施對於軟體供應鏈的高度依賴，企業應落實軟體物料清單（SBOM）管理，以有效掌握資產組成並降低潛在風險。",
    tags: ["Dell", "供應鏈安全", "PowerStore", "PowerFlex", "VxRail", "韌體漏洞", "開源軟體漏洞", "SBOM"],
    title_en: "Dell Issues Major Security Advisory, Patching Software Supply Chain Vulnerabilities in PowerStore, PowerFlex, VxRail, and Other Products",
    summary_en: "Dell has recently released a series of security updates for its enterprise storage, backup, and hyper-converged infrastructure products. Affected products include PowerStore storage arrays, PowerProtect DP (IDPA) backup appliances, the PowerFlex hyper-converged platform, and VxRail systems. These patches are primarily driven not by functional flaws in the products themselves, but by security vulnerabilities residing in underlying operating systems (such as Linux and SUSE), third-party open-source software (such as OpenSSL, Apache Tomcat, Python, and Java), and server hardware firmware (including iDRAC, BIOS, and Intel/AMD components). Some of the advisories are classified as critical, involving a vast number of vulnerabilities, with hundreds of risks identified in a single product line. The manufacturer advises users to consult the security advisories and update relevant software, operating systems, and hardware firmware to the specified versions. This incident highlights the high dependency of modern IT infrastructure on the software supply chain; enterprises should implement Software Bill of Materials (SBOM) management to effectively track asset composition and mitigate potential risks.",
    tags_en: ["Dell", "Supply Chain Security", "PowerStore", "PowerFlex", "VxRail", "Firmware Vulnerabilities", "Open Source Software Vulnerabilities", "SBOM"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176814", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-047",
    trackers: ["os"],
    category: "Android",
    title: "Android 17 正式版效能調查：多數 Pixel 用戶反映體驗持平，部分裝置出現卡頓災情",
    summary: "Google 近期釋出 Android 17 正式更新，針對 7,400 名 Pixel 用戶的效能調查顯示，約 35% 用戶認為系統運作速度與 Android 16 無顯著差異；31.5% 用戶感受到系統優化與流暢度提升，且修正了 Wi-Fi 斷連與待機耗電問題。然而，約 8.29% 的用戶（特別是硬體規格較舊或僅 8GB RAM 的機型）反映更新後出現系統延遲與遊戲卡頓。此外，部分用戶回報了鎖定畫面凍結與 3D 桌布特效失效等介面錯誤。建議用戶在更新前評估裝置效能，並關注後續針對 Bug 的系統修補。",
    tags: ["Android 17", "Google Pixel", "系統效能", "韌體更新", "Wear OS 7", "行動作業系統"],
    title_en: "Android 17 Official Release Performance Survey: Most Pixel Users Report Neutral Experience, While Some Devices Face Stuttering Issues",
    summary_en: "Google recently released the official Android 17 update. A performance survey of 7,400 Pixel users indicates that approximately 35% of users perceive no significant difference in system speed compared to Android 16, while 31.5% reported improvements in system optimization and fluidity, noting fixes for Wi-Fi disconnection and standby power consumption issues. However, about 8.29% of users—particularly those with older hardware or devices limited to 8GB of RAM—reported system latency and gaming stuttering following the update. Additionally, some users reported interface errors, including lock screen freezing and the failure of 3D wallpaper effects. Users are advised to evaluate their device performance before updating and to monitor subsequent system patches for these bugs.",
    tags_en: ["Android 17", "Google Pixel", "System Performance", "Firmware Update", "Wear OS 7", "Mobile Operating System"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/heres-how-your-phone-is-running-after-updating-to-android-17", lang: "EN" }
    ]
  },
  {
    id: "20260623-048",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Icarus駭客利用第三方應用程式漏洞，擴大竊取Salesforce與Gong用戶資料範圍",
    summary: "本次攻擊波次源於第三方應用程式供應商Klue的漏洞，駭客利用其OAuth權杖，竊取了多家客戶的Salesforce資料。受影響的企業包括Huntress、LastPass、HackerOne、Recorded Future等，這些公司在資料外洩後，立即採取了停用Klue的存取權限、輪換API權杖並啟動調查。此外，Gong也發佈了公告，指出使用Klue整合的客戶，其內部授權用戶資料（包含用戶名、職位和電子郵件）可能遭到存取。雖然攻擊源頭是第三方整合商Klue，但其影響範圍已擴大至Gong的用戶資料。專家警告，最大的風險在於駭客可能利用這些竊取的業務聯絡資訊，發送高度針對性的社交工程訊息，因此建議用戶必須透過已知且獨立的渠道驗證所有相關通知，避免洩露憑證或資金。",
    tags: ["Salesforce", "Klue", "OAuth Token", "Gong", "社交工程", "第三方元件漏洞"],
    title_en: "Hackers Exploit Third-Party Application Vulnerability to Expand Theft of Salesforce and Gong User Data",
    summary_en: "This attack wave originated from a vulnerability in the third-party application vendor Klue. Hackers exploited its OAuth tokens to steal Salesforce data from multiple clients. Affected companies include Huntress, LastPass, HackerOne, and Recorded Future, all of which immediately took action after the data leak, including revoking Klue's access, rotating API tokens, and initiating investigations. Furthermore, Gong issued an announcement stating that customers using the Klue integration may have had their internal authorized user data (including usernames, job titles, and email addresses) accessed. Although the attack source was the third-party integrator Klue, its impact has expanded to Gong's user data. Experts warn that the greatest risk lies in hackers potentially using this stolen business contact information to send highly targeted social engineering messages. Therefore, users are advised to verify all related notifications through known and independent channels, and to avoid disclosing credentials or funds.",
    tags_en: ["Salesforce", "Klue", "OAuth Token", "Gong", "Social Engineering", "Third-Party Component Vulnerability"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/scope-salesforce-attacks-expands-icarus-leaks-data", lang: "EN" }
    ]
  },
  {
    id: "20260623-049",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "「Cordyceps」攻擊威脅：惡意 Pull Request 濫用 CI/CD 流程，衝擊軟體供應鏈安全",
    summary: "安全研究人員 Novee 揭露了一種名為「Cordyceps」的 CI/CD 流程弱點。此類漏洞允許攻擊者透過惡意的 Pull Request（拉取請求）提交程式碼，利用自動化的 CI/CD 工作流，竊取高權限的簽名金鑰或存取權杖，從而達成命令注入、權限提升，甚至全面性供應鏈污染。受影響的產品包括 Microsoft 的 Azure Sentinel、Google 的 AI Agent Development Kit、Apache 的 Doris 資料庫、Cloudflare 的 Workers SDK 以及 Python Software Foundation 的 Black 等。攻擊的實務影響極為嚴重，例如在 Azure Sentinel 上，惡意評論即可執行匿名程式碼，竊取 GitHub App 金鑰；在 Google 的環境中，可取得目標 Google Cloud 專案的「認證控制權」。修補建議是將 CI/CD 工作流視為需要嚴格管理的「程式碼資產」，應詳細盤點所有處理不受信任輸入且具有高權限的流程，並對其進行嚴格的權限範圍限制（Scope）。",
    tags: ["CI/CD", "Pull Request", "供應鏈安全", "Novee", "Azure Sentinel", "Google Cloud", "程式碼資產"],
    title_en: "The 'Cordyceps' Attack Threat: Malicious Pull Requests Exploit CI/CD Pipelines, Impacting Software Supply Chain Security",
    summary_en: "Security researcher Novee has disclosed a CI/CD pipeline vulnerability dubbed 'Cordyceps.' This vulnerability allows attackers to submit malicious code via a Pull Request, leveraging automated CI/CD workflows to steal high-privilege signing keys or access tokens. This can lead to command injection, privilege escalation, or even complete supply chain contamination. Affected products include Microsoft's Azure Sentinel, Google's AI Agent Development Kit, Apache's Doris database, Cloudflare's Workers SDK, and Python Software Foundation's Black. The practical impact of the attack is extremely severe; for example, on Azure Sentinel, a malicious comment can execute anonymous code and steal a GitHub App key; and in Google's environment, it can grant control over a target Google Cloud project's credentials. The recommended remediation is to treat CI/CD workflows as 'code assets' requiring strict management. Organizations should thoroughly inventory all processes that handle untrusted input and possess high privileges, and enforce strict scope limitations on them.",
    tags_en: ["CI/CD", "Pull Request", "Supply Chain Security", "Novee", "Azure Sentinel", "Google Cloud", "Code Asset"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/cordyceps-malicious-pull-requests-developer-workflows", lang: "EN" }
    ]
  },
  {
    id: "20260623-050",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "學術研究與實務結合：SCORED 倡議推動開源資安，聚焦 AI 供應鏈與可重現建構",
    summary: "本文介紹 SCORED（Workshop on Software Supply Chain Offensive and Defensive Research）的理念，旨在彌合學術研究與開源實務之間的鴻溝。傳統學術研究常過度追求新穎性，缺乏與實際專案維護者的連結。SCORED 透過將學術界與開源社群（如 OpenSSF）實體結合，特別設立「實務安全（SIP）路徑」，讓研究成果能直接面對業界的實際痛點。2026 年的重點研究領域包括 AI 供應鏈安全、可重現建構（Reproducible Builds）以及 SBOM 等數據集基準化，強調從被動應對威脅轉向主動預防。這項倡議鼓勵學術界將研究重點從純理論轉向具有即時實用價值的成果，確保研究能對真實世界產生可衡量的正向影響。",
    tags: ["SCORED", "OpenSSF", "開源安全", "AI 供應鏈", "SBOM", "可重現建構"],
    title_en: "Bridging Academia and Practice: The SCORED Initiative Promotes Open-Source Security, Focusing on AI Supply Chains and Reproducible Builds",
    summary_en: "This article introduces the concept of SCORED (Workshop on Software Supply Chain Offensive and Defensive Research), which aims to bridge the gap between academic research and open-source practice. Traditional academic research often overemphasizes novelty and lacks connection with actual project maintainers. SCORED achieves this by physically connecting academia with the open-source community (such as OpenSSF), specifically establishing a 'Security Implementation Path (SIP)' to ensure that research outcomes directly address industry pain points. Key research areas for 2026 include AI supply chain security, Reproducible Builds, and the standardization of datasets like SBOM, emphasizing a shift from passively responding to threats toward proactive prevention. This initiative encourages academia to shift its research focus from pure theory toward results with immediate practical value, ensuring that research can generate measurable positive impact in the real world.",
    tags_en: ["SCORED", "OpenSSF", "Open-Source Security", "AI Supply Chain", "SBOM", "Reproducible Builds"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/blog/2026/06/23/bridging-the-gap-between-code-and-research-why-scored-26-matters-for-open-source-security", lang: "EN" }
    ]
  },
  {
    id: "20260623-051",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitHub升級 actions/checkout，預設阻擋利用 fork pull request 觸發的 pwn 攻擊",
    summary: "GitHub為強化軟體供應鏈安全，更新了官方的 actions/checkout action。自 2026 年 6 月 18 日起，最新版本的 actions/checkout 將預設拒絕常見的 pwn 請求模式，特別是針對來自 fork 的 pull request 程式碼。此變更旨在防止惡意行為者利用「pull_request_target」工作流觸發，在未經信任的 fork 程式碼上執行惡意腳本，從而竊取工作流的 GITHUB_TOKEN 及其他秘密。由於 pull_request_target 事件在基礎儲存庫的上下文運行，可能暴露高權限的 GITHUB_TOKEN，若未經審核的 fork 程式碼被檢查並執行，極易導致攻擊者控制的程式碼以工作流的完整權限執行。因此，GitHub建議開發者僅在必要時使用此觸發器，若權限需求不高，應改用「pull_request」事件，並嚴格限制工作流的權限範圍，確保使用者輸入不會導致執行未經信任的程式碼。",
    tags: ["GitHub", "actions/checkout", "pull_request_target", "pwn 攻擊", "軟體供應鏈", "SBOM"],
    title_en: "GitHub upgrades actions/checkout to default block pwn attacks triggered by fork pull requests",
    summary_en: "To strengthen software supply chain security, GitHub has updated the official actions/checkout action. Starting June 18, 2026, the latest version of actions/checkout will by default reject common pwn request patterns, especially those targeting code from forks. This change aims to prevent malicious actors from triggering the 'pull_request_target' workflow to execute malicious scripts on untrusted fork code, thereby stealing the workflow's GITHUB_TOKEN and other secrets. Since the pull_request_target event runs in the context of the base repository, it may expose high-privilege GITHUB_TOKENs. If unreviewed fork code is checked out and executed, it could easily allow attacker-controlled code to run with the workflow's full privileges. Therefore, GitHub advises developers to use this trigger only when necessary. If the privilege requirements are low, they should switch to the 'pull_request' event and strictly limit the workflow's permissions, ensuring that user input does not lead to the execution of untrusted code.",
    tags_en: ["GitHub", "actions/checkout", "pull_request_target", "pwn attack", "software supply chain", "SBOM"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/github-updates-actionscheckout-to-block.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-052",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "LastPass遭供應鏈攻擊：駭客透過Klue竊取OAuth Token，導致客戶資料在Salesforce環境外洩",
    summary: "資安公司LastPass宣布，其客戶資料曾因供應鏈攻擊而外洩。事件起因是駭客Icarus從第三方市場情報平台Klue的基礎設施中，透過利用過時憑證，竊取了連接Klue與多個客戶Salesforce環境的OAuth tokens。駭客隨後利用這些憑證，進入LastPass的Salesforce環境，竊取了客戶資料。受影響的資料類型包括客戶姓名、電話號碼、電子郵件、實體地址、支援案例資訊及銷售/CRM相關資料。LastPass強調，其產品、服務和基礎設施本身並未受到影響，客戶金庫仍安全。公司已採取措施，包括禁用員工對Klue的存取權、輪換所有暴露的API/OAuth tokens，並已通知執法機構。用戶應提高警覺，警惕任何要求提供敏感資訊的電話或電子郵件，切勿分享主密碼。",
    tags: ["LastPass", "Klue", "OAuth tokens", "Salesforce", "供應鏈攻擊", "CRM資料"],
    title_en: "LastPass Suffers Supply Chain Attack: Hackers Steal OAuth Tokens via Klue, Leading to Customer Data Leak in Salesforce Environment",
    summary_en: "Cybersecurity company LastPass announced that its customer data was leaked due to a supply chain attack. The incident occurred when hackers from Icarus stole OAuth tokens connecting Klue to multiple client Salesforce environments by exploiting outdated credentials within the third-party market intelligence platform Klue's infrastructure. The hackers subsequently used these credentials to access LastPass's Salesforce environment and steal customer data. Affected data types include customer names, phone numbers, emails, physical addresses, support case information, and sales/CRM-related data. LastPass emphasized that its product, services, and infrastructure itself were not compromised, and customer vaults remain secure. The company has taken measures, including disabling employee access to Klue, rotating all exposed API/OAuth tokens, and notifying law enforcement. Users are advised to remain vigilant and be wary of any phone calls or emails requesting sensitive information, and never share their master passwords.",
    tags_en: ["LastPass", "Klue", "OAuth tokens", "Salesforce", "Supply Chain Attack", "CRM data"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/lastpass-confirms-data-breach-in-klue-supply-chain-attack", lang: "EN" }
    ]
  },
  {
    id: "20260623-053",
    trackers: ["os"],
    category: "Android",
    title: "Android 17 QPR1 Beta 5 發布：Google 為 Pixel 設備推出第二波修復與 Gemini 品牌整合",
    summary: "Google 發布了 Android 17 QPR1 Beta 5 版本，為兼容的 Pixel 設備（包括 Pixel 6a 至 Pixel 10 Pro Fold 等多款型號）帶來第二波的錯誤修復與功能更新。本次更新的亮點包括整合 Gemini 智慧品牌元素，以及在快速設定面板中新增「不再詢問」的選項。修復內容涵蓋了多個系統層面的穩定性問題，例如修復了遊戲儀表板無法停止螢幕錄影或儲存影片的錯誤，解決了從閒置狀態啟動相機應用程式時可能暫時卡頓的問題，並修復了從常駐顯示模式喚醒設備時螢幕可能出現像素化底欄的錯誤。此外，還修復了在排除活躍 VPN 連線時下載管理器無法完成下載的超時問題，以及私人空間介面崩潰和鎖定應用程式在啟動器搜尋結果中顯示不正確的問題。這些修復旨在提升整體用戶體驗和系統穩定性，建議用戶應透過官方渠道更新至最新 Beta 版本以獲得最佳使用體驗。",
    tags: ["Android 17", "QPR1 Beta 5", "Google", "Pixel", "Gemini", "系統更新"],
    title_en: "Android 17 QPR1 Beta 5 Released: Google Rolls Out Second Wave of Fixes and Gemini Branding Integration for Pixel Devices",
    summary_en: "Google has released Android 17 QPR1 Beta 5, bringing a second wave of bug fixes and feature updates for compatible Pixel devices (including multiple models such as Pixel 6a through Pixel 10 Pro Fold). Key highlights of this update include the integration of Gemini smart branding elements and the addition of a 'Never Ask' option in the quick settings panel. The fixes address multiple system-level stability issues, such as resolving an error where the game dashboard could not stop screen recording or save videos, fixing temporary stuttering when launching the camera app from an idle state, and correcting an error where the screen might display a pixelated bottom bar when waking the device from a persistent display mode. Furthermore, it resolves a timeout issue where the download manager could not complete downloads when excluding an active VPN connection, as well as issues with the Private Space interface crashing and incorrect display of locked applications in the launcher search results. These fixes aim to enhance overall user experience and system stability, and users are advised to update to the latest Beta version through official channels for the best experience.",
    tags_en: ["Android 17", "QPR1 Beta 5", "Google", "Pixel", "Gemini", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/android-17-qpr1-beta-5-everything-new", lang: "EN" }
    ]
  },
  {
    id: "20260623-054",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Android 17 QPR1 Beta 5，Pixel 10 Pro Fold 預覽 Gemini Intelligence 品牌標誌",
    summary: "Google 近期發布了 Android 17 QPR1 Beta 5 版本。本次更新主要為修復錯誤，並在 Pixel 10 Pro Fold 這款折疊手機上加入了 Gemini Intelligence 的品牌標誌。該標誌出現在外接螢幕的底部，且 Google 也更新了其『G』的設計為漸層版本。值得注意的是，此品牌標誌僅限於 Pixel 10 Pro Fold 這款設備。其他如 Pixel 10、Pixel 10 Pro 或 Pixel 10a 等設備安裝此 Beta 5 版本時，並未出現類似的品牌變更。文章指出，本次 Beta 5 版本並未包含任何實際的 Gemini Intelligence 功能，例如「Create My Widget」或「Gboard Rambler」等。這項品牌展示可能只是 Google 的疏忽，未來是否會在 Pixel 和 Samsung 等設備上進行 Gemini Intelligence 的 Beta 測試，仍有待觀察。",
    tags: ["Google", "Android 17", "QPR1 Beta 5", "Pixel 10 Pro Fold", "Gemini Intelligence", "Android 系統更新"],
    title_en: "Google Releases Android 17 QPR1 Beta 5; Pixel 10 Pro Fold Previews Gemini Intelligence Branding",
    summary_en: "Google recently released Android 17 QPR1 Beta 5. This update primarily focuses on bug fixes and introduces the Gemini Intelligence branding on the Pixel 10 Pro Fold foldable phone. This logo appears at the bottom of the external display, and Google has also updated the design of its 'G' logo to a gradient version. Notably, this branding is exclusive to the Pixel 10 Pro Fold. Other devices, such as the Pixel 10, Pixel 10 Pro, or Pixel 10a, do not exhibit similar branding changes when running this Beta 5 version. The article points out that this Beta 5 version does not include any actual Gemini Intelligence features, such as 'Create My Widget' or 'Gboard Rambler'. This branding display might simply be an oversight by Google, and whether Gemini Intelligence will be beta tested on devices like Pixel and Samsung remains to be seen.",
    tags_en: ["Google", "Android 17", "QPR1 Beta 5", "Pixel 10 Pro Fold", "Gemini Intelligence", "Android System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/gemini-intelligence-android-17-qpr1-beta-pixel", lang: "EN" }
    ]
  },
  {
    id: "20260623-055",
    trackers: ["os"],
    category: "Android",
    title: "Google 發布 Android 17 QPR1 Beta 5，修復多項 Pixel 設備的系統與應用程式錯誤",
    summary: "Google 針對 Pixel 設備發布了 Android 17 QPR1 Beta 5 版本，該版本包含 2026 年 6 月的安全修補，旨在修復多個系統層級和應用程式層面的錯誤。修補內容涵蓋了遊戲儀表板無法停止螢幕錄影、相機應用程式從閒置狀態開啟時可能卡頓、以及從 Always-On Display 喚醒時螢幕出現像素化底欄等問題。此外，版本也修復了下載管理器在排除 VPN 連線時無法完成下載、Private Space UI 崩潰，以及 WebView 渲染回歸導致特定遊戲崩潰等問題。這是一個針對開發者和早期測試用戶的 Beta 版本，建議用戶透過 Android Beta Program 參與測試，以確保系統穩定性。修補的設備型號包括 Pixel 6a、Pixel 7、Pixel 8、Pixel 9 等多款機型，以及 Android 模擬器。",
    tags: ["Google", "Android 17", "QPR1 Beta 5", "Pixel", "系統修復", "Android Beta"],
    title_en: "Google Releases Android 17 QPR1 Beta 5, Fixing System and Application Bugs on Multiple Pixel Devices",
    summary_en: "Google has released Android 17 QPR1 Beta 5 for Pixel devices. This version includes security patches for June 2026 and aims to fix numerous system-level and application-level bugs. Patches address issues such as the game dashboard failing to stop screen recording, potential stuttering in the camera app when activated from idle state, and pixelated bottom bars appearing on the screen when waking from Always-On Display. Furthermore, the version fixes issues where the download manager could not complete downloads when excluding VPN connections, crashes in the Private Space UI, and specific game crashes due to WebView rendering regressions. This is a Beta version intended for developers and early testing users, and users are advised to participate in testing via the Android Beta Program to ensure system stability. Affected device models include Pixel 6a, Pixel 7, Pixel 8, Pixel 9, and Android emulators.",
    tags_en: ["Google", "Android 17", "QPR1 Beta 5", "Pixel", "System Fix", "Android Beta"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/android-17-qpr1-beta-5-pixel", lang: "EN" }
    ]
  },
  {
    id: "20260623-056",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 支援 LHDCv5 編解碼器，提升 Android 17 設備的無線音訊品質",
    summary: "Google Pixel 設備在 Android 17 穩定版更新後，已原生支援 LHDCv5 編解碼器。LHDCv5 是一種高品質的無線音訊編解碼器，能提供接近有線連接的音質，優於傳統的 AAC 或 SBC 等標準編解碼器。這項功能不僅限於 Pixel 設備，理論上所有運行 Android 17 最新版本的 Android 設備都能受益。用戶可透過開發人員選項檢查配對的藍牙耳機是否使用 LHDCv5。雖然支援 LHDCv5 的高階無線耳機已廣泛上市，但用戶仍需確保其硬體設備與新編解碼器相容。此更新提升了 Android 設備的音訊傳輸品質，是資安與功能更新的重點關注點。",
    tags: ["Google Pixel", "Android 17", "LHDCv5", "藍牙編解碼器", "無線音訊", "AOSP"],
    title_en: "Google Pixel Supports LHDCv5 Decoder, Enhancing Wireless Audio Quality on Android 17 Devices",
    summary_en: "Following the Android 17 stable update, Google Pixel devices now natively support the LHDCv5 decoder. LHDCv5 is a high-quality wireless audio codec that provides sound quality approaching wired connections, surpassing standard codecs like AAC or SBC. This feature is not limited to Pixel devices; theoretically, all Android devices running the latest version of Android 17 can benefit. Users can check in Developer Options whether their paired Bluetooth headphones utilize LHDCv5. Although high-end wireless headphones supporting LHDCv5 are widely available, users must ensure their hardware devices are compatible with the new codec. This update enhances the audio transmission quality of Android devices and is a key focus point for both security and functional updates.",
    tags_en: ["Google Pixel", "Android 17", "LHDCv5", "Bluetooth Codec", "Wireless Audio", "AOSP"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/google-pixel-wireless-audio-quality-lhdc-android-17-update", lang: "EN" }
    ]
  },
  {
    id: "20260623-057",
    trackers: ["os"],
    category: "Android",
    title: "Google TV Streamer 最新更新：支援 Google Home 喇叭音訊輸出與 Thread 1.4 憑證分享",
    summary: "Google 發布了最新的 Google TV Streamer 更新，該版本除了包含四月 2026 的安全補丁外，增加了多項實用功能。主要亮點包括支援「Google Home 喇叭音訊輸出」，讓使用者能將新的 Gemini 喇叭配對，以實現空間環繞音效。此外，該更新也將 Google TV Streamer 的支援標準提升至 Thread 1.4，並加入了透過 QR Code 分享 Thread 網路憑證的功能，提升了智慧家庭設備的連網便利性。使用者可透過「設定 > 系統 > 關於 > 系統更新」進行安裝。此更新旨在配合新一代 Gemini 喇叭的發布，為智慧家庭生態系統提供更完整的音訊和連網體驗。",
    tags: ["Google TV Streamer", "Google Home", "Gemini", "Thread 1.4", "Android", "音訊輸出"],
    title_en: "Google TV Streamer Latest Update: Supports Google Home Speaker Audio Output and Thread 1.4 Credential Sharing",
    summary_en: "Google has released the latest Google TV Streamer update. In addition to including security patches for April 2026, this version adds several practical features. Key highlights include support for \"Google Home Speaker Audio Output,\" allowing users to pair new Gemini speakers to achieve spatial surround sound. Furthermore, the update upgrades Google TV Streamer's supported standard to Thread 1.4 and adds the functionality to share Thread network credentials via QR Code, enhancing the connectivity convenience of smart home devices. Users can install this update via \"Settings > System > About > System Update.\" This update aims to complement the launch of the new generation Gemini speakers, providing a more complete audio and connectivity experience for the smart home ecosystem.",
    tags_en: ["Google TV Streamer", "Google Home", "Gemini", "Thread 1.4", "Android", "Audio Output"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/google-tv-streamer-home-speaker", lang: "EN" }
    ]
  },
  {
    id: "20260623-058",
    trackers: ["os"],
    category: "Android",
    title: "Amazon Prime Day 促銷活動：Android 遊戲與應用程式優惠資訊彙整",
    summary: "本文報導了 2026 年 Amazon Prime Day 促銷活動的相關資訊。雖然文章主要列舉了多款熱門 Android 遊戲（如 The Last Game、Bloons TD 6、Evoland 2 等）的優惠，但其核心內容是提供多樣化的電子產品折扣資訊。用戶可以關注 Google Pixel 10、Pixel 10a、Samsung Galaxy S26 系列以及 TCL NXTPAPER Android 平板等產品的折扣優惠。這些優惠涵蓋了手機和平板等多種設備，為用戶提供了購買最新 Android 設備的機會。建議消費者在 Prime Day 期間，根據自身需求，比較不同品牌和型號的折扣幅度，以做出最佳的購買決策。",
    tags: ["Amazon Prime Day", "Android", "Google Pixel 10", "Samsung Galaxy S26", "應用程式優惠"],
    title_en: "Amazon Prime Day Promotion: Compilation of Android Game and Application Discounts",
    summary_en: "This article reports on information related to the 2026 Amazon Prime Day promotion. Although the article primarily lists discounts for several popular Android games (such as The Last Game, Bloons TD 6, and Evoland 2), its core content is providing diverse electronic product discount information. Users can pay attention to discount offers for products such as the Google Pixel 10, Pixel 10a, Samsung Galaxy S26 series, and TCL NXTPAPER Android tablets. These offers cover various devices, including phones and tablets, providing users with an opportunity to purchase the latest Android devices. It is recommended that consumers compare the discount levels of different brands and models during Prime Day to make the best purchasing decision based on their own needs.",
    tags_en: ["Amazon Prime Day", "Android", "Google Pixel 10", "Samsung Galaxy S26", "Application Discounts"],
    sources: [
      { name: "9to5Google", url: "https://9to5toys.com/2026/06/23/prime-day-android-app-deals", lang: "EN" }
    ]
  },
  {
    id: "20260623-059",
    trackers: ["os"],
    category: "Android",
    title: "Redmagic 預告 Astra 2 迷你 Android 平板，搭載 Snapdragon 8 Elite Gen 5 挑戰市場",
    summary: "Redmagic 預計將在下週推出 Astra 2，這款迷你 Android 平板電腦被視為小型平板市場的第二波熱潮。此設備被定位為與 Lenovo Legion Tab 競爭的產品，目標用戶群為追求高性能的遊戲玩家。根據洩露資訊，Astra 2 預計搭載 Snapdragon 8 Elite Gen 5 處理器，並配備液冷散熱系統。螢幕規格傳聞為 9 吋 200Hz OLED 顯示器。雖然 Redmagic 尚未確認最終的全球發布日期和定價，但其產品線的更新顯示了小型 Android 設備市場的競爭加劇，為開發者和消費者提供了更多高性能的選擇。",
    tags: ["Redmagic", "Android", "Astra 2", "Snapdragon 8 Elite Gen 5", "迷你平板", "遊戲平板"],
    title_en: "Redmagic Teases Astra 2 Mini Android Tablet, Featuring Snapdragon 8 Elite Gen 5 to Challenge the Market",
    summary_en: "Redmagic is expected to launch the Astra 2 next week, a mini Android tablet viewed as the second wave of the small tablet market. This device is positioned to compete with the Lenovo Legion Tab, targeting high-performance gaming enthusiasts. According to leaked information, the Astra 2 is rumored to feature the Snapdragon 8 Elite Gen 5 processor and an advanced liquid cooling system. The screen specifications are rumored to be a 9-inch 200Hz OLED display. Although Redmagic has not confirmed the final global release date or pricing, the update to its product line indicates increasing competition in the small Android device market, offering more high-performance choices for developers and consumers.",
    tags_en: ["Redmagic", "Android", "Astra 2", "Snapdragon 8 Elite Gen 5", "Mini Tablet", "Gaming Tablet"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/redmagics-new-compact-android-tablet-launches-next-week-to-take-on-legion-tab", lang: "EN" }
    ]
  },
  {
    id: "20260623-060",
    trackers: ["os"],
    category: "Android",
    title: "Android 17 Pixel 手機在橫向觀看影片時，觸控感應區塊出現新 Bug",
    summary: "本篇報導指出，Pixel 手機在更新至 Android 17 系統後，用戶回報了新的觸控輸入問題。此 Bug 尤其在手機橫向（landscape）模式觀看影片時發生，導致螢幕頂部區域無法識別觸控輸入。用戶舉例包括在 YouTube 等影片應用程式中，無法觸及頂部的設定按鈕、投射或切換字幕等功能。此問題並非僅限於影片，在橫向模式下的網頁瀏覽器或任何擴展影片的應用程式中都可能發生。值得注意的是，雖然頂部觸控無反應，但從該區域向下滑動（swiping down）仍能正常觸發通知中心。Google 官方尚未發布修復或解決方案，建議受影響用戶持續關注 Google 的官方公告，或直接向 Google 報告此異常現象。",
    tags: ["Android 17", "Pixel", "觸控輸入", "Android Bug", "Google"],
    title_en: "Android 17 on Pixel Phones: Touch Input Area Bug Occurs When Viewing Videos in Landscape Mode",
    summary_en: "This report highlights a new touch input issue reported by users after updating Pixel phones to the Android 17 operating system. This bug specifically occurs when viewing videos in landscape mode, causing the top area of the screen to fail to recognize touch input. User examples include being unable to access top-area functions in video applications like YouTube, such as settings buttons, casting, or subtitle toggles. This issue is not limited to videos and may occur in web browsers or any application that expands video content in landscape mode. Notably, while the top touch area is unresponsive, swiping down from this area still successfully triggers the notification center. Google has not yet released a fix or solution, and affected users are advised to monitor official Google announcements or report this anomaly directly to Google.",
    tags_en: ["Android 17", "Pixel", "Touch Input", "Android Bug", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/another-touchscreen-bug-appears-in-android-17-on-pixel", lang: "EN" }
    ]
  },
  {
    id: "20260623-061",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch 9 洩漏設計與健康追蹤功能：聚焦運動追蹤與 UI 更新",
    summary: "本文彙整了關於即將推出的三星 Galaxy Watch 9 系列的洩漏資訊，涵蓋了設計、功能和規格預測。洩漏圖片顯示，新機型在健康追蹤方面有重大更新，特別加入了「越野跑」（trail run）追蹤功能，並為 Samsung Health 介面新增了專用面板。此外，整體使用者介面（UI）也進行了多處更新。在設計方面，Galaxy Watch 9 預計提供淺銀、深銀和近黑色的錶殼顏色，並保留了三星標誌性的「圓形置於方形」設計語言。雖然洩漏圖片提供了許多細節，但文章指出這些資訊多為渲染圖或猜測，尚未確認為官方發布。目前，Galaxy Watch 8 的售價為 $219 起。建議關注三星官方後續發布的正式產品資訊。",
    tags: ["Samsung", "Galaxy Watch 9", "Wear OS", "健康追蹤", "UI 更新", "智能手錶"],
    title_en: "Samsung Galaxy Watch 9 Leaked Designs and Health Tracking Features: Focusing on Exercise Tracking and UI Updates",
    summary_en: "This article compiles leaked information regarding the upcoming Samsung Galaxy Watch 9 series, covering design, features, and specification predictions. Leaked images show that the new model features significant updates in health tracking, specifically adding a 'trail run' tracking function and introducing a dedicated panel for the Samsung Health interface. Furthermore, the overall User Interface (UI) has undergone multiple updates. In terms of design, the Galaxy Watch 9 is expected to offer watch case colors of light silver, deep silver, and near black, while retaining Samsung's signature 'circle on square' design language. Although the leaked images provide many details, the article notes that this information largely consists of renders or speculation and has not been officially confirmed. Currently, the Galaxy Watch 8 is priced starting at $219. Users are advised to monitor official Samsung announcements for confirmed product information.",
    tags_en: ["Samsung", "Galaxy Watch 9", "Wear OS", "Health Tracking", "UI Update", "Smartwatch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/samsung-galaxy-watch-9-leaks-renders-software", lang: "EN" }
    ]
  },
  {
    id: "20260623-062",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式漏洞 CVE-2026-54318：惡意應用可偽造位置資訊，控制 Home Assistant 智慧家居設備",
    summary: "本漏洞 CVE-2026-54318 存在於 Android 系統的 LocationSensorManager BroadcastReceiver，影響 Home Assistant 智慧家居系統。在 2026.5.3 版本之前，該接收器以未經權限的方式公開（exported），允許任何安裝的應用程式，即使沒有運行時權限，也能向其廣播偽造的 Google Play Services LocationResult。攻擊者可以利用此漏洞，繞過 Android 開發模式的「模擬位置」限制，透過偽造用戶的 GPS 位置，驅動依賴地理位置的自動化流程，例如遠端開鎖門、解除警報或開啟車庫門。此漏洞已在 2026.5.3 版本中修復。建議用戶應立即更新 Android 系統至 2026.5.3 或更高版本，以修補此核心位置服務漏洞，防止智慧家居設備被惡意控制。",
    tags: ["CVE-2026-54318", "Android", "Home Assistant", "智慧家居", "位置服務", "Android 應用程式"],
    title_en: "Android Application Vulnerability CVE-2026-54318: Malicious App Can Forge Location Data to Control Home Assistant Smart Home Devices",
    summary_en: "The vulnerability CVE-2026-54318 exists in the Android system's LocationSensorManager BroadcastReceiver, affecting the Home Assistant smart home system. Prior to version 2026.5.3, this receiver was exported without proper authorization, allowing any installed application to broadcast forged Google Play Services LocationResult without requiring runtime permissions. An attacker can exploit this vulnerability to bypass the 'mock location' restrictions of Android development mode, driving location-dependent automation routines by forging the user's GPS location. Examples include remotely unlocking doors, disarming alarms, or opening garage doors. This vulnerability was patched in version 2026.5.3. Users are advised to immediately update their Android system to version 2026.5.3 or higher to patch this core location service vulnerability and prevent malicious control of smart home devices.",
    tags_en: ["CVE-2026-54318", "Android", "Home Assistant", "Smart Home", "Location Services", "Android Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-54318", lang: "EN" }
    ]
  },
  {
    id: "20260623-063",
    trackers: ["security"],
    category: "前瞻技術",
    title: "川普簽署行政令加速量子技術發展，要求聯邦政府全面導入後量子密碼（PQC）",
    summary: "美國總統川普簽署兩項行政命令，旨在推動美國量子技術的發展，並應對未來量子電腦對現有加密系統的威脅。第一項命令要求白宮成立國家計畫，加速量子電腦、量子感測器與量子網路的建置，並強化本土供應鏈與人才培育。第二項命令則聚焦於後量子密碼（PQC）的部署，警告「先蒐集、後解密」（Harvest Now, Decrypt Later）攻擊模式的風險。行政令要求聯邦機關全面盤點高價值資產，並加速遷移至美國國家標準與技術研究院（NIST）制定的PQC標準。各機關須在30天內指派PQC遷移負責人，並設定了具體時間表：高價值資產與高衝擊系統的量子安全金鑰交換機制須在2030年底前完成，數位簽章系統升級則需在2031年底前完成。這標誌著美國政府在政策層面，正加速其基礎設施的量子安全轉型。",
    tags: ["後量子密碼", "PQC", "量子電腦", "NIST", "量子網路", "資安風險"],
    title_en: "Trump Signs Executive Orders to Accelerate Quantum Technology Development and Mandate Post-Quantum Cryptography (PQC) Adoption",
    summary_en: "U.S. President Trump signed two executive orders aimed at advancing American quantum technology and addressing the threat posed by future quantum computers to existing cryptographic systems. The first order mandates the establishment of a national plan within the White House to accelerate the construction of quantum computers, quantum sensors, and quantum networks, while also strengthening domestic supply chains and talent development. The second order focuses on the deployment of Post-Quantum Cryptography (PQC), warning against the risks of 'Harvest Now, Decrypt Later' attacks. The executive orders require federal agencies to comprehensively inventory high-value assets and accelerate the transition to PQC standards set by the National Institute of Standards and Technology (NIST). Each agency must appoint a PQC transition lead within 30 days and set specific timelines: quantum-safe key exchange mechanisms for high-value assets and high-impact systems must be completed by the end of 2030, and digital signature system upgrades must be completed by the end of 2031. This marks the U.S. government accelerating the quantum-safe transformation of its infrastructure at the policy level.",
    tags_en: ["PQC", "PQC", "Quantum Computers", "NIST", "Quantum Networks", "Cybersecurity Risks"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176792", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-064",
    trackers: ["eu_cra", "security"],
    category: "前瞻技術",
    title: "五眼聯盟警告：前沿AI模型將在數月內改變網路攻防格局，籲企業強化網路韌性",
    summary: "由美國、英國、加拿大、澳洲與紐西蘭組成的五眼聯盟（Five Eyes），於6月22日發布聯合聲明，警告前沿AI模型預計在數月內將根本性改變網路攻防能力。聲明指出，AI技術雖然能提升漏洞發現、異常監測等防禦效率，但同時也大幅降低了惡意行為者的攻擊門檻，極可能壓縮漏洞從被發現到被利用的防禦空窗期。五眼聯盟呼籲企業與公部門應將網路韌性納入核心商業策略，重新評估效率與安全之間的取捨。實務建議包括：降低網路攻擊面、加速漏洞修補流程、處理不再受支援的舊系統、強化身分安全管理，並提前完成應變準備，將資安事件視為必然風險，重心應放在快速控制和復原。",
    tags: ["五眼聯盟", "Five Eyes", "前沿AI模型", "網路韌性", "資安戰場", "攻擊門檻"],
    title_en: "Five Eyes Alliance Warns: Frontier AI Models Will Change Cyber Defense Landscape in Months, Urges Enterprises to Enhance Cyber Resilience",
    summary_en: "The Five Eyes alliance—comprising the United States, the United Kingdom, Canada, Australia, and New Zealand—issued a joint statement on June 22, warning that frontier AI models are expected to fundamentally change cyber offensive and defensive capabilities within months. The statement noted that while AI technology can enhance defensive efficiency in areas like vulnerability discovery and anomaly monitoring, it simultaneously lowers the attack barrier for malicious actors, potentially compressing the defensive window from vulnerability discovery to exploitation. The Five Eyes alliance urges enterprises and public sectors to integrate cyber resilience into their core business strategies, re-evaluating the trade-off between efficiency and security. Practical recommendations include: reducing the attack surface, accelerating vulnerability patching processes, addressing unsupported legacy systems, strengthening identity security management, and completing incident response preparations in advance, treating cyber incidents as an inevitable risk, and focusing on rapid containment and recovery.",
    tags_en: ["Five Eyes Alliance", "Frontier AI Models", "Cyber Resilience", "Cyber Battlefield", "Attack Barrier"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176789", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-065",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Gartner預警2027年CISO應備四大AI威脅：深度偽造、應用入侵、供應鏈與提示注入",
    summary: "資安研究機構Gartner在2026年舉辦高峰會，針對AI技術快速發展帶來的威脅，預警企業必須在2027年前優先應對四大關鍵風險。這些威脅包括深度偽造（Deepfakes）引發的冒名詐騙、AI應用程式入侵、軟體供應鏈漏洞，以及提示注入（Prompt Injection）。針對深度偽造，建議企業應實施多層控制，特別是偵測影像展示攻擊和合成內容資料注入攻擊，並利用條件存取策略確保線上會議安全。面對AI應用風險，企業應將安全測試深度嵌入AI開發流程，並可參考Gartner的安全管理信任與風險（TRiSM）框架進行動態風險監控。為應對供應鏈漏洞，重點是加速導入軟體物料清單（SBOM）與AI物料清單（AIBOM），提升第三方組件與模型的透明度。最後，針對提示注入，必須落實對大型語言模型（LLM）的輸入監控、過濾，並實施最小權限控制，以防止敏感資料外洩。",
    tags: ["Gartner", "AI", "深度偽造", "SBOM", "LLM", "提示注入", "CISO"],
    title_en: "Gartner Warns CISOs of Four Major AI Threats for 2027: Deepfakes, Application Injections, Supply Chain, and Prompt Injection",
    summary_en: "At its 2026 summit, the cybersecurity research firm Gartner warned that due to the rapid development of AI technology, enterprises must prioritize addressing four key risks before 2027. These threats include impersonation fraud caused by Deepfakes, AI application intrusions, software supply chain vulnerabilities, and Prompt Injection. Regarding Deepfakes, companies are advised to implement multi-layered controls, especially detecting image display attacks and synthetic content data injection attacks, and utilizing conditional access policies to ensure online meeting security. To address AI application risks, enterprises should embed security testing deeply into the AI development process and can reference Gartner's Trust, Risk, and Security Management (TRiSM) framework for dynamic risk monitoring. To counter supply chain vulnerabilities, the focus must be on accelerating the adoption of Software Bill of Materials (SBOM) and AI Bill of Materials (AIBOM) to enhance the transparency of third-party components and models. Finally, concerning Prompt Injection, it is essential to implement input monitoring and filtering for Large Language Models (LLM), and enforce least privilege control to prevent sensitive data leakage.",
    tags_en: ["Gartner", "AI", "Deepfakes", "SBOM", "LLM", "Prompt Injection", "CISO"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176778", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-066",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI推出GPT-5.5-Cyber模型與Patch the Planet，強化AI輔助的漏洞發現與修補能力",
    summary: "OpenAI宣布透過其Daybreak計畫，釋出升級版GPT-5.5-Cyber模型，旨在成為最強大的軟體漏洞分析工具。該模型能深入分析大型程式碼庫，識別、驗證安全問題，並協助開發和測試修補程式。同時，OpenAI也更新了Codex Security外掛，能加速漏洞的發現與修補流程，並預防新漏洞進入生產環境。為支持開源專案，OpenAI與Trail of Bits合作啟動了「Patch the Planet」計畫，初期參與者包括cURL、Sigstore、Python等。此舉旨在應對AI模型加速漏洞發現，使修補瓶頸從「發現」轉移到「修補」的產業痛點。專家警告，AI模型不僅加速了漏洞發現，也讓惡意行為者能更快速地利用漏洞，縮短了防禦時間窗口。OpenAI強調，其目標是為維護者提供完整的防禦循環（發現、驗證、修補、部署），而非取代人工審核。",
    tags: ["OpenAI", "GPT-5.5-Cyber", "Daybreak", "漏洞修補", "AI安全", "開源安全", "Patch the Planet"],
    title_en: "OpenAI Launches GPT-5.5-Cyber Model and Patch the Planet to Enhance AI-Assisted Vulnerability Discovery and Remediation",
    summary_en: "OpenAI announced the release of the upgraded GPT-5.5-Cyber model through its Daybreak initiative, designed to become a powerful software vulnerability analysis tool. This model can deeply analyze large codebases, identify and validate security issues, and assist in developing and testing patches. Concurrently, OpenAI updated the Codex Security extension to accelerate the vulnerability discovery and remediation process, helping to prevent new vulnerabilities from entering production environments. To support open-source projects, OpenAI partnered with Trail of Bits to launch the \"Patch the Planet\" initiative, initially involving projects such as cURL, Sigstore, and Python. This effort aims to address the industry pain point where AI models accelerate vulnerability discovery, shifting the remediation bottleneck from 'discovery' to 'patching.' Experts warn that while AI models accelerate vulnerability discovery, they also enable malicious actors to exploit vulnerabilities more quickly, shortening the defense window. OpenAI emphasized that its goal is to provide maintainers with a complete defense lifecycle (discovery, validation, remediation, deployment), rather than replacing human review.",
    tags_en: ["OpenAI", "GPT-5.5-Cyber", "Daybreak", "Vulnerability Remediation", "AI Security", "Open Source Security", "Patch the Planet"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-067",
    trackers: ["os"],
    category: "重點關注",
    title: "開源 CLI 工具協助偵測過時的 AI 覆寫建議",
    summary: "本文介紹了一個開源的命令行介面 (CLI) 工具，旨在幫助資安人員和開發者從各種技術文件中篩選和識別過時或不準確的 AI 覆寫（override）建議。隨著 AI 應用和技術文件爆炸性增長，許多技術文檔中可能包含過時、誤導或不實的 AI 相關安全或功能建議。使用此工具，可以自動化地掃描和比對這些建議，確保所依賴的技術資訊是最新且正確的。這對於維護複雜的系統配置、撰寫準確的開發指南，以及進行安全審計至關重要。建議的實務應用是將此工具整合到 CI/CD 或知識庫的內容審核流程中，以確保技術文件的資訊時效性與準確性。",
    tags: ["AI", "開源工具", "CLI", "資安資訊", "技術文件", "覆寫建議"],
    title_en: "Open-Source CLI Tool Helps Detect Outdated AI Override Suggestions",
    summary_en: "This article introduces an open-source Command Line Interface (CLI) tool designed to help security professionals and developers filter and identify outdated or inaccurate AI override suggestions from various technical documents. With the explosive growth of AI applications and technical documentation, many technical documents may contain outdated, misleading, or inaccurate AI-related security or functional suggestions. Using this tool, users can automatically scan and compare these suggestions, ensuring that the technical information relied upon is current and accurate. This is crucial for maintaining complex system configurations, writing accurate development guides, and conducting security audits. Practical applications include integrating this tool into CI/CD or knowledge base content review processes to ensure the timeliness and accuracy of technical documentation information.",
    tags_en: ["AI", "Open-Source Tools", "CLI", "Cybersecurity Information", "Technical Documentation", "Override Suggestions"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/23/sniff-out-stale-ai-override-advice-with-this-open-source-cli/5259853", lang: "EN" }
    ]
  },
  {
    id: "20260623-068",
    trackers: ["os"],
    category: "重點關注",
    title: "海光資訊 Hygon C86-4G-M8「Suzhou」處理器支援正式納入 GCC 17 編譯器",
    summary: "中國處理器廠商海光資訊（Hygon）近期將其新款 x86 架構處理器 Model 8（代號：Suzhou）的支援代碼貢獻至 GCC 17 開源編譯器專案中。根據開發提交資訊，該型號為「Chengdu」系列（Model 7）的後繼產品，屬於 Family 18h 架構。在指令集方面，Suzhou 延續了前代規格，完整支援包括 AVX-512、AES 及多項現代化向量與加解密指令集。目前該處理器的實體規格與效能細節仍處於未公開狀態，由於缺乏外部文件與市場資訊，開發者與系統工程師需依賴編譯器供應鏈的更新來進行後續的效能調優與系統適配。",
    tags: ["Hygon", "GCC", "x86", "Suzhou", "處理器", "編譯器", "開源開發", "硬體架構"],
    title_en: "Hygon C86-4G-M8 'Suzhou' Processor Support Officially Included in GCC 17 Compiler",
    summary_en: "Chinese processor manufacturer Hygon has recently contributed support code for its new x86-architecture Model 8 processor (codenamed: Suzhou) to the GCC 17 open-source compiler project. According to development submission details, this model is the successor to the 'Chengdu' series (Model 7) and belongs to the Family 18h architecture. Regarding the instruction set, Suzhou continues the specifications of its predecessor, providing full support for AVX-512, AES, and various modern vector and encryption instruction sets. Currently, the physical specifications and performance details of the processor remain undisclosed. Due to a lack of external documentation and market information, developers and system engineers must rely on compiler supply chain updates for subsequent performance tuning and system adaptation.",
    tags_en: ["Hygon", "GCC", "x86", "Suzhou", "Processor", "Compiler", "Open Source Development", "Hardware Architecture"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Hygon-c86-4g-m8-Suzhou-GCC", lang: "EN" }
    ]
  },
  {
    id: "20260623-069",
    trackers: ["os"],
    category: "重點關注",
    title: "惡意 npm 套件冒充 PostCSS 工具，植入 Windows 遠端存取木馬 (RAT)",
    summary: "資安研究人員揭露多款偽裝成 PostCSS 相關工具的惡意 npm 套件，利用套件相依性誘使開發者下載。此攻擊鏈透過 JavaScript 腳本寫入並執行 PowerShell，進而下載包含 Python 執行環境、Visual Basic 腳本及多個編譯模組的惡意載體。該木馬具備竊取 Google Chrome 憑證與擴充功能資料、執行 Shell 指令、檔案傳輸及與 C2 伺服器通訊等功能。此外，近期 npm 生態系中發現多起針對開發環境的攻擊，包含針對 Linux 的 Rootkit 及針對開發者憑證的竊取活動。建議受影響用戶立即移除相關套件、清理遺留檔案並強制更換開發機憑證。",
    tags: ["npm", "供應鏈攻擊", "RAT", "PostCSS", "Python", "憑證竊取", "惡意套件"],
    title_en: "Malicious npm packages impersonate PostCSS tools to deploy Windows Remote Access Trojan (RAT)",
    summary_en: "Security researchers have uncovered multiple malicious npm packages masquerading as PostCSS-related tools, exploiting package dependencies to trick developers into downloading them. The attack chain utilizes a JavaScript script to write and execute PowerShell, which subsequently downloads a malicious payload containing a Python runtime environment, Visual Basic scripts, and multiple compiled modules. This Trojan is capable of stealing Google Chrome credentials and extension data, executing shell commands, performing file transfers, and communicating with a C2 server. Furthermore, several recent attacks targeting development environments have been identified within the npm ecosystem, including Linux rootkits and campaigns aimed at stealing developer credentials. Affected users are advised to remove the relevant packages immediately, clean up residual files, and force a rotation of credentials on affected development machines.",
    tags_en: ["npm", "supply chain attack", "RAT", "PostCSS", "Python", "credential theft", "malicious package"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/malicious-npm-packages-pose-as-postcss.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-070",
    trackers: ["os"],
    category: "重點關注",
    title: "攻擊者濫用 WhatsApp 傳送偽裝成商務文件的 VBScript 惡意程式以植入 RMM 工具",
    summary: "卡巴斯基研究人員揭露一項針對全球 WhatsApp Desktop 與 Web 用戶的攻擊行動。威脅者疑似透過遭駭帳號發送含有混淆 VBScript 的訊息，檔案偽裝成「財務報告」等商務文件，並在腳本中加入偽造的 Windows 更新模組描述以規避偵測。一旦執行，該腳本會透過 WScript.exe 啟動多階段攻擊鏈，目標是規避 Windows UAC 並最終下載與安裝合法的 ManageEngine RMM 遠端監控軟體，使攻擊者取得受害者的遠端存取權限。該攻擊與 Gh0st RAT 及 ValleyRAT 的基礎設施存在關聯。建議用戶對任何來自通訊軟體的非預期附件保持高度警覺，特別是 VBS、EXE 等可執行檔案類型，務必確認來源安全性。",
    tags: ["WhatsApp", "VBScript", "RMM", "ManageEngine", "惡意程式", "供應鏈攻擊", "Kaspersky"],
    title_en: "Attackers exploit WhatsApp to deliver VBScript malware disguised as business documents",
    summary_en: "Kaspersky researchers have uncovered an attack targeting global WhatsApp Desktop and Web users. Threat actors are suspected of sending messages from compromised accounts containing obfuscated VBScript, with the file disguised as business documents such as 'financial reports.' The script includes fabricated Windows update module descriptions to evade detection. Once executed, the script initiates a multi-stage attack chain via WScript.exe, aiming to bypass Windows UAC and ultimately download and install the legitimate ManageEngine RMM remote monitoring software, granting the attackers remote access to the victim. This attack is linked to the infrastructure of Gh0st RAT and ValleyRAT. Users are advised to remain highly vigilant regarding unexpected attachments from communication platforms, especially executable file types like VBS and EXE, and to confirm the source safety.",
    tags_en: ["WhatsApp", "VBScript", "RMM", "ManageEngine", "Malware", "Supply Chain Attack", "Kaspersky"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/whatsapp-vbscript-campaign-uses-fake.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-071",
    trackers: ["os"],
    category: "重點關注",
    title: "資料中心重啟水下運算實驗：面對環境與基礎設施挑戰的佈署考量",
    summary: "近年來，資料中心業者再次探索水下或浮動式運算設施的可行性。此類架構主要旨在利用自然水體進行冷卻以提升能源效率，並減輕土地空間限制。然而，水下環境極端嚴苛，涉及防腐蝕、防水密封技術、維護困難及硬體更換成本高等挑戰。儘管概念具有吸引力，但在極大規模（多吉瓦等級）的資料中心場域中，水下方案目前仍難以與傳統陸地設施競爭，實務應用多限於特定的小規模測試與實驗性質。",
    tags: ["資料中心", "水下運算", "冷卻技術", "基礎設施", "能源效率"],
    title_en: "Data Centers Revisit Underwater Computing Experiments: Deployment Considerations Amid Environmental and Infrastructure Challenges",
    summary_en: "In recent years, data center operators have once again explored the feasibility of underwater or floating computing facilities. These architectures primarily aim to leverage natural water bodies for cooling to improve energy efficiency and alleviate land space constraints. However, underwater environments are extremely harsh, involving challenges such as corrosion prevention, waterproof sealing technology, maintenance difficulties, and high costs for hardware replacement. Despite the attractiveness of the concept, underwater solutions currently struggle to compete with traditional land-based facilities in large-scale (gigawatt-level) data center environments, with practical applications largely limited to specific small-scale testing and experimental purposes.",
    tags_en: ["Data Center", "Underwater Computing", "Cooling Technology", "Infrastructure", "Energy Efficiency"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/06/23/datacenters-dip-a-toe-back-into-waterborne-computing-despite-obvious-challenges/5259331", lang: "EN" }
    ]
  },
  {
    id: "20260623-072",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "五眼聯盟示警：AI 加速資安事件演變為重大營運與財務危機",
    summary: "五眼聯盟情報機構近期發布警告，指出人工智慧（AI）技術的普及正在改變網路威脅的樣貌，資安事件已不再侷限於技術層面的損害，極易迅速升級為影響企業營運穩定性與財務狀況的重大危機。報告強調，駭客組織正利用 AI 提升攻擊的自動化程度與複雜性，這要求企業資安長與決策者必須重新評估風險模型。實務影響方面，企業可能面臨更快速的資料外洩與業務中斷風險。專家建議，組織應強化事故應變韌性，將資安提升至企業風險管理的核心地位，並在採納 AI 工具的過程中實施嚴格的防禦基準與治理策略，以應對日益升高的營運不確定性。",
    tags: ["五眼聯盟", "人工智慧", "資安危機", "風險管理", "營運韌性"],
    title_en: "Five Eyes Alliance Warns: AI Accelerates Escalation of Cybersecurity Incidents into Major Operational and Financial Crises",
    summary_en: "Intelligence agencies from the Five Eyes alliance recently issued a warning, noting that the proliferation of artificial intelligence (AI) technology is changing the landscape of cyber threats. Cybersecurity incidents are no longer limited to technical damage and can rapidly escalate into major crises impacting business operational stability and financial health. The report emphasizes that hacker groups are leveraging AI to increase the automation and complexity of attacks, requiring Chief Information Security Officers (CISOs) and decision-makers to re-evaluate their risk models. In terms of practical impact, enterprises may face heightened risks of faster data breaches and business disruptions. Experts recommend that organizations strengthen incident response resilience, elevate cybersecurity to the core of enterprise risk management, and implement strict defensive baselines and governance strategies when adopting AI tools to address increasing operational uncertainty.",
    tags_en: ["Five Eyes", "Artificial Intelligence", "Cybersecurity Crisis", "Risk Management", "Operational Resilience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/23/five-eyes-spooks-warn-ai-means-infosec-incidents-can-become-major-operational-and-financial-crises/5259916", lang: "EN" }
    ]
  },
  {
    id: "20260623-073",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安新創 Ent 獲 1 億美元種子輪融資，強調以 AI 推理技術實現端點預防性防護",
    summary: "由 RiskIQ 前創辦人成立的資安新創 Ent，宣布在種子輪獲得 1 億美元資金，並獲國防及大型企業導入。該公司指出，隨著 AI Agent 與生成式 AI 加速企業工作流程，傳統依賴 EDR 與雲端分析的「事後偵測與回應」模式面臨瓶頸，因無法即時攔截看似合法但具高風險的行為（如敏感資料貼上未授權 AI 工具）。Ent 提出「意圖感知」防護方案，透過在端點本機運行輕量級 AI 模型，在秒級內判斷使用者與 AI Agent 的行為脈絡，試圖在威脅發生前執行阻斷。然而，該方案在誤判率、與現有資安架構整合，以及員工隱私治理等方面仍面臨實務挑戰。",
    tags: ["Ent", "生成式AI", "AI Agent", "端點安全", "意圖感知", "邊緣運算", "種子輪募資", "預防性資安"],
    title_en: "Cybersecurity Startup Ent Secures $100 Million in Seed Funding, Focuses on Endpoint Preventive Protection via AI Reasoning",
    summary_en: "Ent, a cybersecurity startup founded by former RiskIQ founders, has announced $100 million in seed funding and adoption by defense and large enterprise clients. The company notes that as AI Agents and generative AI accelerate enterprise workflows, the traditional 'post-incident detection and response' model relying on EDR and cloud analytics is facing bottlenecks, as it fails to instantly block seemingly legitimate but high-risk behaviors, such as pasting sensitive data into unauthorized AI tools. Ent proposes an 'intent-aware' protection solution that runs lightweight AI models locally on endpoints to determine the context of user and AI Agent behaviors within seconds, aiming to block threats before they occur. However, the solution still faces practical challenges regarding false positive rates, integration with existing security architectures, and employee privacy governance.",
    tags_en: ["Ent", "Generative AI", "AI Agent", "Endpoint Security", "Intent-Aware", "Edge Computing", "Seed Funding", "Preventive Cybersecurity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176805", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-074",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Cloudflare 宣布支援 PACT 協定，旨在優化 AI 代理人網路活動安全性並改善驗證體驗",
    summary: "Cloudflare 近期宣布與微軟、Google、Mozilla 及 Shopify 結盟，共同推動 PACT（Private Access Control Tokens）協定之標準化。此協定旨在解決 AI 代理人於自動化網頁作業時，因傳統驗證機制（如帳密登入或 CAPTCHA）導致的中斷問題。PACT 透過提供匿名化令牌以驗證存取者為真人，能在保護隱私、不追蹤使用者行為的前提下，有效防範網頁爬蟲濫用、誤點擊率或搶票等惡意行為。Cloudflare 計畫將 PACT 驗證代碼整合至其全球網路節點，預期能提升旗下數千萬網站的驗證可信度與整體網路安全性。目前該提案已由技術專家提交至 W3C 的反詐欺瀏覽器安全社群小組討論，技術標準化過程預計尚需數年時間，且 Cloudflare 尚未公佈具體實作或上線時程。",
    tags: ["Cloudflare", "PACT", "AI 代理人", "身分驗證", "反機器人", "網頁安全", "W3C", "自動化作業"],
    title_en: "Cloudflare Announces Support for PACT Protocol to Optimize AI Agent Network Activity Security and Improve Authentication Experience",
    summary_en: "Cloudflare recently announced a partnership with Microsoft, Google, Mozilla, and Shopify to promote the standardization of the PACT (Private Access Control Tokens) protocol. This protocol aims to resolve interruptions caused by traditional authentication mechanisms (such as password logins or CAPTCHA) when AI agents perform automated web tasks. By providing anonymized tokens to verify that an accessor is a human, PACT can effectively prevent malicious behaviors such as web scraping abuse, click fraud, or ticket scalping, all while protecting privacy and without tracking user behavior. Cloudflare plans to integrate PACT authentication code into its global network nodes, which is expected to enhance the authentication credibility and overall web security for its tens of millions of websites. The proposal has been submitted by technical experts to the W3C Anti-Fraud Community Group for discussion. The technical standardization process is expected to take several years, and Cloudflare has not yet announced a specific implementation or rollout timeline.",
    tags_en: ["Cloudflare", "PACT", "AI Agents", "Authentication", "Anti-bot", "Web Security", "W3C", "Automation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176801", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260623-075",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Amazon Prime Day 促銷期間詐騙激增，資安人員警告近 7,000 個偽造域名威脅消費者帳密與信用卡資訊",
    summary: "隨著 Amazon Prime Day 促銷活動展開，Check Point Research 指出，自 2025 年 12 月至 2026 年 5 月間，已偵測到近 7,000 個假冒 Amazon 的惡意域名。這些詐騙活動包含偽造電商平台竊取信用卡資料、仿冒登入頁面竊取帳號權限，以及假借「退款系統錯誤」名義發送釣魚郵件。攻擊者利用高度仿真的客服信箱繞過受害者防備。專家提醒，若網站要求重新輸入已儲存的卡號資料或在退款流程中索取個人資訊，應視為高度警訊。建議用戶避免點擊來源不明的電子郵件或廣告連結，並僅透過信任的官方通路進行消費。",
    tags: ["Amazon", "Prime Day", "網路釣魚", "金融詐騙", "Check Point", "資安防護", "社群工程"],
    title_en: "Fraud Surges During Amazon Prime Day: Security Experts Warn of Nearly 7,000 Malicious Domains Threatening Consumer Credentials and Credit Card Data",
    summary_en: "As the Amazon Prime Day promotional event begins, Check Point Research reports that nearly 7,000 malicious domains impersonating Amazon have been detected between December 2025 and May 2026. These fraudulent activities include fake e-commerce platforms designed to steal credit card information, spoofed login pages to harvest account credentials, and phishing emails disguised as 'refund system errors.' Attackers utilize highly convincing customer service emails to bypass victim defenses. Experts warn that users should treat any request to re-enter saved credit card information or requests for personal data during a refund process as high-level red flags. Users are advised to avoid clicking on links from suspicious emails or advertisements and to shop only through trusted, official channels.",
    tags_en: ["Amazon", "Prime Day", "Phishing", "Financial Fraud", "Check Point", "Cybersecurity", "Social Engineering"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/psa-watch-out-for-these-scams-as-amazon-prime-day-goes-live", lang: "EN" }
    ]
  },
  {
    id: "20260623-076",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Elastic利用生成式AI與RAG自動化撰寫CVE安全公告，提升漏洞披露效率",
    summary: "Elastic的InfoSec產品安全團隊開發了一套生成式AI代理（Agent），利用Elastic Agent Builder，能夠直接從原始漏洞報告自動起草完整的CVE安全公告。此系統透過RAG（檢索增強生成）機制，將MITRE CWE和CAPEC目錄的資料索引到Elasticsearch中，確保AI的輸出內容基於權威數據，避免了「幻覺」的分類錯誤。傳統的手動撰寫流程耗時且複雜，需要將技術密集的漏洞報告，人工提煉成包含CWE和CAPEC分類的標準化公告。新系統的優勢在於自動化了這部分繁瑣的分類和撰寫工作，使漏洞的生命週期管理（從發現到披露）更為高效。該系統已在生產環境運行，並展示了ESA-2026-01的輸出範例，極大地加速了安全資訊的公開流程。",
    tags: ["Elasticsearch", "生成式AI", "RAG", "CVE", "CWE", "CAPEC", "資安公告"],
    title_en: "Elastic Uses Generative AI and RAG to Automate CVE Security Announcement Drafting, Improving Vulnerability Disclosure Efficiency",
    summary_en: "Elastic's InfoSec product security team has developed a generative AI agent that utilizes Elastic Agent Builder to automatically draft complete CVE security announcements directly from raw vulnerability reports. This system uses a RAG (Retrieval-Augmented Generation) mechanism to index data from the MITRE CWE and CAPEC directories into Elasticsearch, ensuring that the AI's output content is based on authoritative data and avoids classification errors or 'hallucinations.' The traditional manual drafting process is time-consuming and complex, requiring technical vulnerability reports to be manually distilled into standardized announcements that include CWE and CAPEC classifications. The new system's advantage lies in automating this tedious classification and drafting work, making the vulnerability lifecycle management (from discovery to disclosure) more efficient. The system is already running in a production environment and demonstrated an output example for ESA-2026-01, significantly accelerating the security information public disclosure process.",
    tags_en: ["Elasticsearch", "Generative AI", "RAG", "CVE", "CWE", "CAPEC", "Security Announcement"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/security-advisory-automation-rag-elastic-agent-builder", lang: "EN" }
    ]
  },
  {
    id: "20260623-077",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI Agent技能漏洞：AIR展示外部連結可被竄改，繞過安全掃描器與信任信號",
    summary: "資安公司AIR發布研究，展示了透過一個名為brand-landingpage的虛假AI Agent技能，成功繞過多個主流安全掃描器和信任機制。該技能聲稱使用Google Stitch設計工具，並透過偽造GitHub星號和清潔的掃描報告來建立可信度。攻擊流程是讓Agent安裝技能後，指示其透過一個外部網域（AIR控制）獲取設定文件。掃描器僅分析技能包本身，無法檢測其指向的外部連結。AIR隨後更改了該外部網頁的內容，讓Agent下載並執行惡意腳本。雖然本次演示僅回傳用戶電子郵件，但實際攻擊者可利用此入口讀取文件、竊取資料或攻擊內部系統。文章指出，安全掃描器僅檢查靜態包裝，而攻擊者可以持續修改外部載荷，這是目前AI Agent生態系統的結構性弱點。建議開發者應將技能視為軟體，驗證其指向的外部資源，並實施最小權限原則。",
    tags: ["AI Agent", "Agent Skill", "外部連結竄改", "安全掃描器", "最小權限", "AI 安全"],
    title_en: "AI Agent Skill Vulnerability: AIR Demonstrates External Link Tampering to Bypass Security Scanners and Trust Signals",
    summary_en: "Security firm AIR published research demonstrating how a fake AI Agent skill, named brand-landingpage, successfully bypassed multiple mainstream security scanners and trust mechanisms. The skill claimed to use the Google Stitch design tool and built credibility by fabricating GitHub stars and clean scan reports. The attack process involves having the Agent install the skill, then instructing it to fetch configuration files from an external domain (controlled by AIR). The scanners only analyze the skill package itself and cannot detect the external link it points to. AIR subsequently modified the content of this external webpage, causing the Agent to download and execute a malicious script. Although this demonstration only returned the user's email address, a real attacker could use this entry point to read files, steal data, or attack internal systems. The article points out that security scanners only check static packages, while attackers can continuously modify the external payload—a structural weakness in the current AI Agent ecosystem. It is recommended that developers treat skills as software, validate the external resources they point to, and implement the principle of least privilege.",
    tags_en: ["AI Agent", "Agent Skill", "External Link Tampering", "Security Scanner", "Least Privilege", "AI Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/fake-ai-agent-skill-passed-security.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-078",
    trackers: ["security"],
    category: "前瞻技術",
    title: "川普簽署行政命令：聯邦政府必須在 2030 年前完成後量子密碼遷移",
    summary: "美國總統川普簽署行政命令，為聯邦政府機構設定了強制性的後量子密碼（PQC）遷移期限。由於「現在採集、稍後解密」（harvest now, decrypt later）的威脅，政府必須加速行動。新規定要求關鍵建立（Key establishment）必須在 2030 年 12 月 31 日前完成，數位簽章（Digital signatures）則必須在 2031 年 12 月 31 日前完成。此命令將原定的 PQC 時間表提前了數年，並與 NIST 於 2024 年 8 月最終確定的標準（如 FIPS 203/ML-KEM 和 FIPS 204/205）同步。短期內，各機構需指定 PQC 遷移負責人，並在 90 天內提交高價值資產和高影響系統的遷移計畫。此外，CISA 和 NIST 也將在 270 天內發布加密物料清單（cryptographic bill of materials）的最低要素，這為實現加密敏捷性奠定了基礎。聯邦採購規則也將納入 PQC 規範，為承包商帶來實質的合規壓力。",
    tags: ["後量子密碼", "PQC", "NIST", "FIPS 203", "FIPS 204", "聯邦政府", "加密敏捷性"],
    title_en: "Trump Signs Executive Order: Federal Government Must Complete Post-Quantum Cryptography Transition by 2030",
    summary_en: "U.S. President Trump signed an executive order setting a mandatory deadline for the federal government to transition to Post-Quantum Cryptography (PQC). Due to the threat of \"harvest now, decrypt later,\" the government must accelerate its actions. The new regulation mandates that key establishment must be completed by December 31, 2030, and digital signatures must be completed by December 31, 2031. This order advances the original PQC timeline by several years and aligns with the standards finalized by NIST in August 2024 (such as FIPS 203/ML-KEM and FIPS 204/205). In the short term, agencies must designate PQC transition leads and submit transition plans for high-value assets and high-impact systems within 90 days. Furthermore, CISA and NIST will also release minimum requirements for cryptographic bills of materials within 270 days, laying the groundwork for achieving cryptographic agility. Federal acquisition regulations will also incorporate PQC standards, bringing substantial compliance pressure to contractors.",
    tags_en: ["Post-Quantum Cryptography", "PQC", "NIST", "FIPS 203", "FIPS 204", "Federal Government", "Cryptographic Agility"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/trump-order-sets-2030-deadline-for.html", lang: "EN" }
    ]
  },
  {
    id: "20260623-079",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "微軟發布 KB5095093 更新：Windows 11 引入「時間點還原」功能，強化系統修復能力",
    summary: "微軟發布了 KB5095093 預覽累積更新，適用於 Windows 11 24H2 和 25H2 版本。本次更新主要著重於新功能和錯誤修復，而非安全補丁。核心亮點是新增了「時間點還原」（Point-in-Time restore）功能，允許使用者將作業系統、應用程式和檔案回溯到過去的特定時間點，有助於快速恢復系統狀態，減少停機時間。此功能利用 Volume Shadow Copy Service (VSS) 儲存的還原點，可回溯最近 72 小時內的完整系統狀態。對於一般消費者，系統每 24 小時會建立一次還原點，並保留 72 小時；企業用戶則可自訂還原點的建立和保留間隔。此外，本次更新也修復了在永久刪除檔案時，回收筒確認對話框可能顯示內部檔案名稱而非原始名稱的已知錯誤。其他更新包括改善 Secure Boot 設備目標覆蓋率、增強網域控制器間的 Netlogon 安全通道連接，以及修復了部分網路資源連接的可靠性問題。建議使用者透過設定 > Windows Update 檢查並安裝此可選更新，以利用新的系統修復能力。",
    tags: ["Microsoft", "Windows 11", "KB5095093", "時間點還原", "VSS", "系統修復"],
    title_en: "Microsoft Releases KB5095093 Update: Windows 11 Introduces 'Point-in-Time Restore' Feature, Enhancing System Recovery Capabilities",
    summary_en: "Microsoft has released the KB5095093 preview cumulative update, applicable to Windows 11 versions 24H2 and 25H2. This update primarily focuses on new features and bug fixes, rather than security patches. The core highlight is the addition of a 'Point-in-Time restore' feature, which allows users to roll back the operating system, applications, and files to a specific point in the past. This helps quickly restore the system state and minimize downtime. This feature utilizes restore points stored by the Volume Shadow Copy Service (VSS) and can trace the complete system state back to the last 72 hours. For general consumers, a restore point is created every 24 hours and retained for 72 hours; enterprise users can customize the creation and retention intervals for restore points. Furthermore, this update fixes a known error where the Recycle Bin confirmation dialog might display internal file names instead of original names when permanently deleting files. Other updates include improving the Secure Boot device target coverage, enhancing the Netlogon secure channel connection between domain controllers, and fixing reliability issues with certain network resource connections. Users are advised to check and install this optional update via Settings > Windows Update to utilize the new system recovery capabilities.",
    tags_en: ["Microsoft", "Windows 11", "KB5095093", "Point-in-Time restore", "VSS", "System Recovery"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/windows-11-kb5095093-update-rolls-out-new-point-in-time-restore-feature", lang: "EN" }
    ]
  },
  {
    id: "20260623-080",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Meet 升級：iPhone 用戶現可透過 Safari 瀏覽器直接加入會議，無需下載專用 App",
    summary: "Google Meet 宣布對其網頁版進行升級，大幅改善了 iPhone 用戶的參與體驗。過去，若沒有安裝 Gmail 或 Meet 專用 App，iOS 用戶無法透過行動裝置加入 Google Meet 會議。更新後，iPhone 和 iPad 用戶現在可以直接透過 Safari 瀏覽器（及其他 iOS 瀏覽器）加入會議，無需預先安裝任何應用程式。此功能讓參與者體驗更流暢，即使沒有 Google 帳號，只需提供姓名即可請求進入會議。此功能已開始滾動推出，部分用戶可能仍會看到提示需使用 App，但若未安裝 Meet 或 Gmail，新的網頁加入選項將會自動啟動。此變動提升了 Google Meet 的網頁優先性，讓更多用戶能更便捷地參與線上會議。",
    tags: ["Google Meet", "iPhone", "Safari", "iOS", "網頁應用", "行動通訊"],
    title_en: "Google Meet Upgrade: iPhone Users Can Now Join Meetings Directly via Safari Browser, No Dedicated App Required",
    summary_en: "Google Meet has announced an upgrade to its web version, significantly improving the participation experience for iPhone users. Previously, iOS users could not join Google Meet meetings on mobile devices without installing the dedicated Gmail or Meet app. After the update, iPhone and iPad users can now join meetings directly through the Safari browser (and other iOS browsers), without needing to pre-install any application. This feature provides a smoother experience for participants; even without a Google account, users can request entry by providing only their name. This feature has begun rolling out, and some users may still see prompts requiring an app, but if Meet or Gmail is not installed, the new web join option will automatically activate. This change enhances Google Meet's web-first approach, allowing more users to participate in online meetings more conveniently.",
    tags_en: ["Google Meet", "iPhone", "Safari", "iOS", "Web Application", "Mobile Communication"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/iphone-users-can-now-join-google-meet-calls-without-downloading-an-app", lang: "EN" }
    ]
  },
  {
    id: "20260623-081",
    trackers: ["os"],
    category: "重點關注",
    title: "三星預告 UFS 5.0 儲存解決方案，讀寫速度提升兩倍，適用於未來旗艦手機與 XR 設備",
    summary: "三星宣布推出 UFS 5.0 儲存解決方案，宣稱是業界最快的儲存技術。該新產品的讀取速度高達 10.8 GB/s，寫入速度高達 9.5 GB/s，相較於現有的 UFS 4.1，速度提升了約兩倍。除了極高的性能提升外，UFS 5.0 還能將功耗效率比 UFS 4.1 提升超過 40%，並且尺寸更小 16.7%。三星主要將此技術定位為提升裝置端 AI 運算能力，但其性能提升也將全面增強設備整體效能。該技術預計將用於未來的旗艦智慧型手機、穿戴式裝置和擴增實境（XR）設備。三星計劃於今年第四季度開始小批量生產，容量可達 1TB。目前尚無確切時間表，但此技術預計將推動下一代行動和 AI 裝置市場的發展。",
    tags: ["Samsung", "UFS 5.0", "儲存技術", "AI 運算", "旗艦手機", "XR 設備"],
    title_en: "Samsung announces UFS 5.0 storage solution, doubling read/write speeds for future flagship phones and XR devices",
    summary_en: "Samsung has announced the launch of UFS 5.0 storage solution, claiming it is the fastest storage technology in the industry. The new product boasts a read speed of up to 10.8 GB/s and a write speed of up to 9.5 GB/s, representing an approximate two-fold speed increase compared to existing UFS 4.1. In addition to the extremely high performance boost, UFS 5.0 also improves power efficiency by over 40% compared to UFS 4.1, and is 16.7% smaller in size. Samsung primarily positions this technology to enhance on-device AI computing capabilities, but its performance boost will also comprehensively strengthen overall device efficiency. The technology is expected to be used in future flagship smartphones, wearable devices, and extended reality (XR) devices. Samsung plans to begin small-batch production in the fourth quarter of this year, with capacities up to 1TB. While there is no definite timeline yet, this technology is expected to drive the development of the next generation of mobile and AI devices.",
    tags_en: ["Samsung", "UFS 5.0", "Storage Technology", "AI Computing", "Flagship Phones", "XR Devices"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/samsung-teases-twice-as-fast-ufs-5-0-storage-for-future-flagship-smartphones", lang: "EN" }
    ]
  },
  {
    id: "20260623-082",
    trackers: ["os"],
    category: "重點關注",
    title: "Beeper 推出多平台整合更新：新增 Line 訊息支援、Android 貼圖包與 macOS iMessage 功能優化",
    summary: "跨平台通訊應用程式 Beeper 發布多項重大更新，旨在提升其跨平台整合能力。本次更新最主要的亮點是新增了對 Line 訊息服務的支援，但此功能需透過雲端橋接（cloud bridge）實現。此外，針對 Android 用戶，Beeper App 現已支援從原始應用程式（如 Telegram 和 WhatsApp）導入貼圖包，提升用戶體驗。在 macOS 端，Beeper 針對 iMessage 支援進行了大幅優化，增加了「勿擾狀態通知+通知我」功能、查看編輯歷史、表情符號回覆（emoji reacts）以及整體效能提升。桌面應用程式也與 Raycast 整合，允許用戶在 Beeper 內搜尋訊息。這些更新涵蓋了多個平台，顯示 Beeper 正在積極擴展其跨平台兼容性與功能。",
    tags: ["Beeper", "Line", "Android", "macOS", "iMessage", "跨平台", "通訊應用"],
    title_en: "Beeper Launches Multi-Platform Integration Update: Adding Line Messaging Support, Android Sticker Packs, and macOS iMessage Feature Enhancements",
    summary_en: "The cross-platform communication application Beeper has released several major updates aimed at enhancing its cross-platform integration capabilities. The most notable feature of this update is the addition of support for Line messaging services, though this functionality is achieved via a cloud bridge. Furthermore, for Android users, the Beeper App now supports importing sticker packs from native applications (such as Telegram and WhatsApp), improving the user experience. On the macOS side, Beeper has significantly optimized iMessage support, adding 'Do Not Disturb Status + Notify Me' functionality, viewing edit history, emoji reacts, and overall performance improvements. The desktop application has also integrated with Raycast, allowing users to search for messages within Beeper. These updates cover multiple platforms, demonstrating Beeper's active effort to expand its cross-platform compatibility and features.",
    tags_en: ["Beeper", "Line", "Android", "macOS", "iMessage", "Cross-Platform", "Messaging App"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/beeper-adds-line-integration-sticker-packs-on-android-better-imessage-support", lang: "EN" }
    ]
  },
  {
    id: "20260623-083",
    trackers: ["os"],
    category: "重點關注",
    title: "Chrome Autofill與Google Wallet深度整合：支援填寫機票、車牌等複雜個人資料",
    summary: "Google宣布更新Chrome Autofill功能，將與Google Wallet進行更深層的整合，旨在簡化網頁表單的填寫流程，例如機票登機或停車繳費。此次更新支援更複雜的資料類型，包括機票細節、車輛車牌和VIN號碼，並已在Android和iOS上推出。透過整合，Chrome可以利用儲存在Google Wallet中的資料，如駕照、護照資訊和已知旅客號碼，自動填寫表單。使用者首次在網站輸入敏感資料時，Chrome會詢問是否將其儲存到Google Wallet，且所有資料都會經過加密保護。此外，Chrome的設定介面也更新了，將「密碼與自動填寫」分為「Google密碼管理員」、「支付」、「聯絡資訊」、「身份文件」和「旅行」等更細緻的類別，這些新功能正透過Chrome 150版本在Android上滾動推出。",
    tags: ["Google Wallet", "Chrome Autofill", "Chrome 150", "Android", "身份文件", "資料隱私", "使用者體驗"],
    title_en: "Chrome Autofill and Google Wallet Deep Integration: Supporting Complex Personal Data like Flight Tickets and License Plates",
    summary_en: "Google has announced an update to Chrome Autofill functionality, integrating it more deeply with Google Wallet. The goal is to simplify the process of filling out web forms, such as those for flight check-ins or parking payments. This update supports more complex data types, including flight details, vehicle license plates, and VIN numbers, and has been rolled out on both Android and iOS. Through this integration, Chrome can utilize data stored in Google Wallet, such as driver's licenses, passport information, and known traveler numbers, to automatically fill out forms. When a user enters sensitive data on a website for the first time, Chrome will prompt whether to save it to Google Wallet, and all data will be protected by encryption. Furthermore, Chrome's settings interface has been updated, dividing \"Passwords and Autofill\" into more granular categories such as \"Google Password Manager,\" \"Payments,\" \"Contact Info,\" \"Identity Documents,\" and \"Travel.\" These new features are being rolled out on Android via Chrome 150.",
    tags_en: ["Google Wallet", "Chrome Autofill", "Chrome 150", "Android", "Identity Documents", "Data Privacy", "User Experience"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/chrome-autofill-google-wallet-2", lang: "EN" }
    ]
  },
  {
    id: "20260623-084",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic Claude 服務經歷重大中斷，影響多數模型與平台，已修復恢復正常",
    summary: "大型語言模型供應商 Anthropic 的 Claude 服務於 2026 年 6 月 23 日經歷了重大服務中斷。該故障影響了多數用戶和多個模型，包括常用的 Sonnet 和 Opus 模型。這次的服務中斷時間接近一小時，是 Anthropic 近 60 天內最大的故障之一。故障影響了透過 claude.ai、Claude Console、Claude Code 以及 Claude API 等多個平台存取的模型，但「Claude for Government」例外。Anthropic 雖然未公開故障的確切原因，但已推出修復措施，並持續監測系統穩定性，目前服務已恢復正常運作。",
    tags: ["Anthropic", "Claude", "大型語言模型", "服務中斷", "AI 服務", "雲端服務"],
    title_en: "Anthropic Claude service experiences major outage, affecting multiple models and platforms, now restored",
    summary_en: "Anthropic, a large language model provider, experienced a major service outage for its Claude service on June 23, 2026. The failure affected numerous users and multiple models, including the commonly used Sonnet and Opus models. The service disruption lasted nearly one hour and was one of Anthropic's largest outages in the past 60 days. The outage impacted models accessed through multiple platforms, including claude.ai, Claude Console, Claude Code, and the Claude API, with the exception of \"Claude for Government.\" Although Anthropic did not disclose the exact cause of the failure, it has implemented corrective measures and continues to monitor system stability. Service has now been restored to normal operation.",
    tags_en: ["Anthropic", "Claude", "Large Language Model", "Service Outage", "AI Service", "Cloud Service"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/claude-back-online-after-major-outage", lang: "EN" }
    ]
  },
  {
    id: "20260623-085",
    trackers: ["os"],
    category: "重點關注",
    title: "三星逐步淘汰S Pen支援：停止銷售折疊機型及舊款Galaxy設備的S Pen筆",
    summary: "本文報導指出，三星正在逐步淘汰其S Pen筆的銷售。目前，三星已停止為Galaxy Z Fold 6和Galaxy Z Fold 5等折疊機型銷售S Pen。此外，三星官方網站也已停止銷售所有舊款Galaxy設備的備用S Pen。目前唯一可購買的S Pen型號是專為Galaxy S26 Ultra設計的。這對使用折疊機型或舊款Galaxy設備的用戶造成不便，因為S Pen模型設計不兼容折疊螢幕，且舊款設備的支援壽命也逐漸結束。雖然三星理論上仍有可能重新補貨，但其持續移除舊產品的銷售，顯示出公司正在改變其產品策略，這對依賴S Pen功能的用戶群體是一個值得關注的趨勢。",
    tags: ["三星", "S Pen", "Galaxy Z Fold", "折疊手機", "產品生命週期", "硬體棄用"],
    title_en: "Samsung Gradually Discontinues S Pen Support: Halting Sales of S Pen for Foldable and Older Galaxy Devices",
    summary_en: "This report indicates that Samsung is gradually phasing out the sale of its S Pen stylus. Samsung has currently stopped selling S Pens for foldable models such as the Galaxy Z Fold 6 and Galaxy Z Fold 5. Furthermore, the official Samsung website has ceased sales of replacement S Pens for all older Galaxy devices. The only S Pen model currently available for purchase is one designed specifically for the Galaxy S26 Ultra. This presents an inconvenience for users of foldable or older Galaxy devices, as the S Pen models are not designed to be compatible with foldable screens, and the support lifespan for older devices is also gradually ending. Although Samsung theoretically could restock the items, the continuous removal of older product sales suggests that the company is changing its product strategy, which is a trend worth noting for users who rely on S Pen functionality.",
    tags_en: ["Samsung", "S Pen", "Galaxy Z Fold", "Foldable Phone", "Product Lifecycle", "Hardware Deprecation"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/samsung-just-took-yet-another-step-towards-the-death-of-the-s-pen", lang: "EN" }
    ]
  },
  {
    id: "20260623-086",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy Z Fold 8 系列配色與規格洩漏：Z Fold 8 Ultra 預計搭載新色系",
    summary: "本文根據洩漏資訊，預測三星（Samsung）下一代摺疊手機 Galaxy Z Fold 8 系列的配色與儲存容量規劃。洩漏指出，Z Fold 8、Z Fold 8 Ultra 和 Z Flip 8 三款機型將共用 Cream 和 Graphite 兩種基礎配色。Z Fold 8 預計將推出 Lavender 和 Pistachio 兩種顏色；Z Fold 8 Ultra 則可能擁有 Green Shadow 和 Violet Shadow 兩種專業色系；Z Flip 8 則會增加 Mint 和 Pink 選項。在規格方面，三機型預計起步容量為 256GB，並提供 512GB 版本，其中 Z Fold 8 和 Z Fold 8 Ultra 將支援 1TB 選項。此外，Z Fold 8 將是更短、更寬的版本，而 Z Fold 8 Ultra 的外觀預計與 Galaxy Z Fold 7 相似，定位為更昂貴且硬體更強的旗艦機型。所有產品預計在未來幾個月的三星 Unpacked 活動上發布。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Galaxy Z Flip 8", "摺疊手機", "產品洩漏"],
    title_en: "Samsung Galaxy Z Fold 8 Series Colorways and Specifications Leak: Z Fold 8 Ultra Expected to Feature New Color Schemes",
    summary_en: "Based on leaked information, this article predicts the colorways and storage capacity planning for Samsung's next generation of foldable phones, the Galaxy Z Fold 8 series. The leaks indicate that the three models—the Z Fold 8, Z Fold 8 Ultra, and Z Flip 8—will share two base colorways: Cream and Graphite. The Z Fold 8 is expected to launch with two colors: Lavender and Pistachio; the Z Fold 8 Ultra may feature two professional color schemes: Green Shadow and Violet Shadow; and the Z Flip 8 will add Mint and Pink options. In terms of specifications, all three models are expected to start at 256GB and offer a 512GB version, with the Z Fold 8 and Z Fold 8 Ultra supporting a 1TB option. Furthermore, the Z Fold 8 is expected to be a shorter and wider version, while the Z Fold 8 Ultra's appearance is anticipated to be similar to the Galaxy Z Fold 7, positioning it as a more expensive and hardware-enhanced flagship model. All products are expected to be unveiled at an upcoming Samsung Unpacked event in the coming months.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Fold 8 Ultra", "Galaxy Z Flip 8", "Foldable Phone", "Product Leak"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/galaxy-z-fold-8-colors-leak", lang: "EN" }
    ]
  },
  {
    id: "20260623-087",
    trackers: ["os"],
    category: "重點關注",
    title: "Nothing 宣布 Phone (4b) 預告，預計 7 月 7 日發布，定位更親民的入門級手機",
    summary: "科技公司 Nothing 宣布將取消原有的 CMF Phone 系列，因組件成本不斷上漲。然而，他們預告將推出新的入門級手機「Nothing Phone (4b)」，預計於 7 月 7 日透過 YouTube 進行發布。Nothing 共同創辦人 Akis Evangelidis 確認，Phone (4b) 將定位在 Phone (4a) 的下方，目標是提供更具價格競爭力的產品，預計定價會落在 $200 左右的入門區間。雖然 Nothing 尚未透露具體規格，但從設計草圖來看，該機型預計會是其新產品線的延伸。此消息主要為產品預告與市場定位調整，無技術漏洞或資安風險。",
    tags: ["Nothing", "Nothing Phone (4b)", "手機新品", "產品預告", "市場定位"],
    title_en: "Nothing Announces Phone (4b) Teaser, Expected Release on July 7, Targeting More Affordable Entry-Level Smartphones",
    summary_en: "Tech company Nothing announced the discontinuation of its existing CMF Phone series due to rising component costs. However, they teased a new entry-level smartphone, the \"Nothing Phone (4b)\", which is expected to be unveiled via YouTube on July 7. Co-founder of Nothing, Akis Evangelidis, confirmed that the Phone (4b) will be positioned below the Phone (4a), aiming to offer a more price-competitive product, expected to be priced in the entry-level range around $200. Although Nothing has not revealed specific specifications, design sketches suggest the model will be an extension of its new product line. This news primarily concerns product teasing and market positioning adjustments, and involves no technical vulnerabilities or cybersecurity risks.",
    tags_en: ["Nothing", "Nothing Phone (4b)", "Smartphone News", "Product Teaser", "Market Positioning"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/nothing-phone-4b-teaser-release-date", lang: "EN" }
    ]
  },
  {
    id: "20260623-088",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta推出全新「Meta Glasses」系列，擺脫Ray-Ban品牌，主打更親民價格與升級功能",
    summary: "Meta公司發布了全新的「Meta Glasses」系列，取代了原有的Ray-Ban品牌設計，旨在提供更具價格競爭力的智慧眼鏡產品。新系列包含「Adventurer」、「Fury」和「Starfire」三款款式，價格區間為 $299 至 $399。相較於舊款Ray-Ban設計的Meta眼鏡，新系列在保持相似規格的同時，提升了用戶體驗，例如增加了可調式鏡腳和超長延伸鉸鏈。技術規格方面，所有型號均提供 8 小時電池續航力，充電盒可額外提供 40 小時電力，並具備 12MP 相機、100 度視野角，以及 1080p/60fps 或 3k/30fps 的錄影能力。此外，新系列還加入了原Ray-Ban系列所沒有的自定義「操作按鈕」。此舉顯示Meta正積極應對市場競爭，特別是面對如Android XR等新進入者。本產品的更新，預計將提升其在智慧穿戴裝置市場的市場佔有率。",
    tags: ["Meta", "Meta Glasses", "智慧眼鏡", "穿戴裝置", "Android XR", "市場競爭"],
    title_en: "Meta Launches New 'Meta Glasses' Series, Moving Beyond Ray-Ban Branding to Focus on Affordability and Upgraded Features",
    summary_en: "Meta has released a brand new 'Meta Glasses' series, replacing the previous Ray-Ban branding design. The goal is to offer smart glasses products with greater price competitiveness. The new series includes three styles: 'Adventurer,' 'Fury,' and 'Starfire,' with prices ranging from $299 to $399. Compared to the older Ray-Ban designed Meta glasses, the new series maintains similar specifications while enhancing user experience, such as adding adjustable temple arms and ultra-long hinges. In terms of technical specifications, all models offer 8 hours of battery life, with the charging case providing an additional 40 hours of power. They are equipped with a 12MP camera, a 100-degree field of view, and video recording capabilities of 1080p/60fps or 3k/30fps. Furthermore, the new series includes a customizable 'action button,' a feature absent in the original Ray-Ban series. This move demonstrates Meta's proactive response to market competition, particularly from new entrants like Android XR. The product update is expected to boost its market share in the smart wearable device market.",
    tags_en: ["Meta", "Meta Glasses", "Smart Glasses", "Wearable Devices", "Android XR", "Market Competition"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/meta-smart-glasses-no-ray-ban", lang: "EN" }
    ]
  },
  {
    id: "20260623-089",
    trackers: ["os"],
    category: "重點關注",
    title: "AAWireless 宣布 Prime Day 促銷：提供 Android Auto 與 CarPlay 無線轉接器折扣",
    summary: "本文為 AAWireless 官方的促銷活動公告，而非資安新聞。該文章介紹 AAWireless TWO 和 AAWireless TWO+ 這兩款汽車無線轉接器，用於將有線車載系統升級為支援 Android Auto 或 Apple CarPlay 的無線體驗。促銷期間（6 月 23 日至 6 月 26 日），兩款轉接器均提供折扣。AAWireless TWO 專用於 Android Auto，價格較低；而 AAWireless TWO+ 則具備額外硬體，可同時支援 Android Auto 和 Apple CarPlay，並設有實體按鈕方便切換。用戶只需透過 USB-C 線連接至車輛即可使用。文章同時提及了多個與 Android Auto 相關的生態系統更新，包括 Google Meet 廣泛推出至 Android Auto、Google 為 Gemini 進行修復，以及 Android Auto 相關的 Bug 修正等。此為產品銷售資訊，無資安漏洞或威脅情報。",
    tags: ["AAWireless", "Android Auto", "CarPlay", "無線轉接器", "Google", "產品公告"],
    title_en: "AAWireless Announces Prime Day Sale: Discount on Android Auto and CarPlay Wireless Adapters",
    summary_en: "This article is an official promotional announcement from AAWireless, not a cybersecurity news item. It introduces two car wireless adapters, the AAWireless TWO and the AAWireless TWO+, designed to upgrade wired in-car systems to a wireless experience supporting Android Auto or Apple CarPlay. During the promotion period (June 23 to June 26), both adapters are discounted. The AAWireless TWO is dedicated solely to Android Auto and is priced lower; while the AAWireless TWO+ features additional hardware, allowing it to simultaneously support both Android Auto and Apple CarPlay, and includes physical buttons for easy switching. Users only need to connect it via a USB-C cable to their vehicle to use it. The article also mentions several ecosystem updates related to Android Auto, including the widespread rollout of Google Meet to Android Auto, Google's fixes for Gemini, and various Android Auto bug fixes. This is product sales information and contains no security vulnerabilities or threat intelligence.",
    tags_en: ["AAWireless", "Android Auto", "CarPlay", "Wireless Adapter", "Google", "Product Announcement"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/23/aawireless-two-prime-day-sale", lang: "EN" }
    ]
  },
  {
    id: "20260623-090",
    trackers: ["os"],
    category: "重點關注",
    title: "Swift Package Index 加入 Apple 生態系，預計強化開發者體驗與安全性",
    summary: "Swift Package Index（一個開源的 Swift 套件搜尋引擎與元數據索引）宣布加入 Apple 生態系。此舉旨在為開發者提供更多資源，協助他們做出更優化的套件依賴決策，並讓整個生態系統能以更大的規模發展。雖然目前沒有立即改變，但未來預計將在套件簽名和身份驗證等領域引入新功能，以提升整個生態系統的穩健性和安全性。文章推測，未來可能將實現原生 Xcode 整合，讓開發者可以直接在 Xcode 內搜尋並新增相容的套件，從而簡化依賴管理流程，並提升套件的可發現性。同時，Apple 工程師將與社群貢獻者一同參與，確保 Swift Package Index 仍將保持開源性質。",
    tags: ["Swift", "Apple", "Swift Package Index", "Xcode", "開源", "依賴管理"],
    title_en: "Swift Package Index Joins Apple Ecosystem, Expected to Enhance Developer Experience and Security",
    summary_en: "The Swift Package Index (an open-source Swift package search engine and metadata index) has announced its integration into the Apple ecosystem. This move aims to provide developers with more resources, assisting them in making more optimized package dependency decisions, and allowing the entire ecosystem to grow on a larger scale. Although there are no immediate changes, new features are anticipated in areas such as package signing and identity verification, which are expected to enhance the robustness and security of the entire ecosystem. The article speculates that future developments may include native Xcode integration, allowing developers to search for and add compatible packages directly within Xcode, thereby simplifying the dependency management process and improving package discoverability. Concurrently, Apple engineers will collaborate with community contributors to ensure that the Swift Package Index remains open source.",
    tags_en: ["Swift", "Apple", "Swift Package Index", "Xcode", "Open Source", "Dependency Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/swift-package-index-joins-apple-pledges-to-remain-open-source", lang: "EN" }
    ]
  },
  {
    id: "20260623-091",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "LastPass 透過合作夥伴 Klue 遭資料外洩，用戶需防範釣魚與社工攻擊",
    summary: "資安公司 LastPass 近期再次面臨資料外洩事件，此次的洩漏源頭是其合作的市場研究公司 Klue。駭客透過 Klue 平台存取了客戶資訊和支援案例資料。受影響的資料範圍包括客戶姓名、電話號碼、電子郵件地址、實體地址，以及支援案例和銷售相關資料。LastPass 立即採取行動，包括撤銷員工對 Klue 的存取權、輪換暴露的 API token，並通知了執法機構。公司建議用戶高度警惕利用這些洩漏資訊進行的釣魚攻擊或社交工程嘗試。文章同時提供了相關攻擊者使用的 IP 位址和電子郵件發件網域，供企業進行系統監控。這也是 LastPass 歷年來多次面臨安全事件的最新案例。",
    tags: ["LastPass", "Klue", "資料外洩", "釣魚攻擊", "API token", "CRM", "社交工程"],
    title_en: "LastPass Suffers Data Leak via Partner Klue; Users Must Guard Against Phishing and Social Engineering Attacks",
    summary_en: "Cybersecurity company LastPass has recently faced another data leak incident, this time originating from its partner market research firm, Klue. Hackers accessed customer information and support case data through the Klue platform. The affected data includes customer names, phone numbers, email addresses, physical addresses, as well as support case and sales-related data. LastPass immediately took action, including revoking employee access to Klue, rotating exposed API tokens, and notifying law enforcement. The company advises users to be highly vigilant against phishing attacks or social engineering attempts utilizing this leaked information. The article also provides IP addresses and email sending domains used by related attackers for corporate system monitoring. This marks the latest incident in LastPass's history of multiple security breaches.",
    tags_en: ["LastPass", "Klue", "Data Leak", "Phishing Attack", "API token", "CRM", "Social Engineering"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/lastpass-notifies-users-of-yet-another-data-breach", lang: "EN" }
    ]
  },
  {
    id: "20260623-092",
    trackers: ["os"],
    category: "重點關注",
    title: "中國開發者向監管機構投訴 Apple App Store 費用過高，要求市場公平性調查",
    summary: "一群來自中國的開發者已向中國國家市場監督管理機構（SAMR）提交投訴，指控 Apple 利用其市場支配地位，對本地創作者徵收過高且不公平的 App Store 費用。開發者認為 Apple 的抽成模式限制了開發者的營利空間，並要求監管機構介入調查和懲處。此投訴發生在 Apple 近期宣布了多地（如巴西、日本、歐盟）的 App Store 規則更新之後。在巴西，開發者使用 Apple 的內建購買系統需支付 5% 的支付處理費加上 21% 的 App Store 佣金；在歐盟，為遵守《數位市場法案》，開發者若引導用戶至外部支付選項，可能需支付 2% 的初始獲取費，以及 5% 或 13% 的服務費。儘管 Apple 在中國已將標準佣金從 30% 降至 25%，但開發者仍認為 Apple 未能提供足夠的替代應用市場或更靈活的支付選項，因此持續要求改變。",
    tags: ["Apple", "App Store", "反壟斷", "市場支配地位", "中國", "數位市場法案"],
    title_en: "Chinese Developers Complain to Regulators Over High Apple App Store Fees, Demand Market Fairness Investigation",
    summary_en: "A group of developers from China has submitted complaints to the State Administration for Market Regulation (SAMR) of China, accusing Apple of using its market dominance to charge excessive and unfair App Store fees to local creators. The developers argue that Apple's commission model restricts their profit potential and are calling on the regulatory body to intervene with an investigation and penalties. This complaint follows Apple's recent announcements of App Store rule updates in multiple regions (such as Brazil, Japan, and the EU). In Brazil, developers using Apple's built-in payment system must pay a 5% payment processing fee plus a 21% App Store commission; in the EU, to comply with the Digital Markets Act (DMA), developers who guide users to external payment options may incur an initial acquisition fee of 2%, plus a service fee of 5% or 13%. Although Apple has already lowered its standard commission in China from 30% to 25%, the developers still feel that Apple has not provided sufficient alternative application markets or more flexible payment options, and thus continue to demand changes.",
    tags_en: ["Apple", "App Store", "Antitrust", "Market Dominance", "China", "Digital Markets Act"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/chinese-developers-file-antitrust-complaint-against-apple-over-app-store-fees", lang: "EN" }
    ]
  },
  {
    id: "20260623-093",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV 7月內容預告：涵蓋《Silo》第三季、新劇《Lucky》及多部影集更新",
    summary: "本文為娛樂內容預告，介紹Apple TV在七月推出的多部影集與電影。主要內容包括科幻劇《Silo》第三季（7月3日），該劇描寫地下城社會的陰謀與記憶喪失；犯罪劇《Lucky》（7月15日），由Anya Taylor-Joy主演，講述一名逃亡的詐騙犯；以及動畫家庭劇《Snoopy Presents: There’s No Place Like Home》（7月31日）。此外，文章也提及了《The Dink》電影（7月24日）和《The Savant》的預期七月發行。這些內容旨在為觀眾規劃七月觀看行程，並列出了多部現有劇集（如《Cape Fear》、《Sugar》）的更新日期。本文章為內容宣傳，未涉及任何資安技術或漏洞資訊，故無修補建議。",
    tags: ["Apple TV", "Silo", "Lucky", "Anya Taylor-Joy", "影集預告", "娛樂"],
    title_en: "Apple TV July Content Preview: Featuring Season 3 of 'Silo', New Series 'Lucky', and Multiple Miniseries Updates",
    summary_en: "This article is an entertainment content preview, introducing multiple miniseries and films launching on Apple TV in July. Key content includes the sci-fi drama 'Silo' Season 3 (July 3), which depicts conspiracies and memory loss in an underground society; the crime drama 'Lucky' (July 15), starring Anya Taylor-Joy, about a fugitive scammer; and the animated family drama 'Snoopy Presents: There’s No Place Like Home' (July 31). Additionally, the article mentions the film 'The Dink' (July 24) and the expected July release of 'The Savant'. These contents aim to help viewers plan their viewing schedule for July, listing update dates for several existing series (such as 'Cape Fear' and 'Sugar'). This article is purely promotional content and does not involve cybersecurity technology or vulnerability information, thus no patches are recommended.",
    tags_en: ["Apple TV", "Silo", "Lucky", "Anya Taylor-Joy", "Miniseries Preview", "Entertainment"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/heres-everything-new-apple-tv-has-coming-in-july-2", lang: "EN" }
    ]
  },
  {
    id: "20260623-094",
    trackers: ["os"],
    category: "重點關注",
    title: "無新聞內容，無法撰寫資安新聞報導",
    summary: "原文內容為 9to5Mac Daily 播客的介紹與贊助廣告，未提供任何資安事件或技術細節，故無法撰寫新聞摘要。",
    tags: ["無內容", "9to5Mac", "播客"],
    title_en: "No news content available for cybersecurity news report",
    summary_en: "The original content is an introduction and sponsorship advertisement for the 9to5Mac Daily podcast, and does not provide any cybersecurity incidents or technical details, therefore a news summary cannot be written.",
    tags_en: ["None", "9to5Mac", "Podcast"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/daily-june-23-2026", lang: "EN" }
    ]
  },
  {
    id: "20260623-095",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 推出 Claude Tag：強化 Slack 整合的企業級協作 AI 工具",
    summary: "Anthropic 今日發布新版 Beta 功能 Claude Tag，旨在提供團隊成員更高效的協作體驗。此功能最初以 Slack 整合為起點，適用於 Enterprise 和 Team 訂閱層級的客戶。使用者可以在 Slack 頻道中標記 @Claude，將任務委派給 AI，Claude Tag 將自動從頻道內容中建立上下文，並規劃未來任務。Anthropic 將 Claude Tag 定位為 Claude Code 的進化版，並強調其具備學習能力，甚至可以透過「環境（ambient）」行為主動執行任務，實現排程與自動化。此新工具將取代現有的「Claude in Slack」工具，後者將於 8 月 3 日停用。這代表 Anthropic 正在將其 AI 助理能力，從單純的聊天介面，轉向深度嵌入企業工作流程，實現更全面的工作流自動化。",
    tags: ["Anthropic", "Claude Tag", "Slack", "AI 協作工具", "企業工作流程", "生成式 AI"],
    title_en: "Anthropic Launches Claude Tag: An Enterprise Collaboration AI Tool Enhancing Slack Integration",
    summary_en: "Anthropic today released the new Beta feature, Claude Tag, designed to provide team members with a more efficient collaboration experience. Initially starting with Slack integration, it is available to customers on the Enterprise and Team subscription tiers. Users can tag @Claude within a Slack channel to delegate tasks to the AI. Claude Tag will automatically establish context from the channel content and plan future tasks. Anthropic positions Claude Tag as an evolution of Claude Code, emphasizing its learning capabilities and ability to proactively execute tasks through 'ambient' behavior, achieving scheduling and automation. This new tool will replace the existing 'Claude in Slack' tool, which will be decommissioned on August 3rd. This signifies Anthropic's shift in its AI assistant capabilities, moving from a simple chat interface to deep embedding within enterprise workflows, realizing more comprehensive workflow automation.",
    tags_en: ["Anthropic", "Claude Tag", "Slack", "AI Collaboration Tool", "Enterprise Workflow", "Generative AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/23/anthropic-launches-claude-tag-enterprise-collaborative-tool-for-agentic-workflows", lang: "EN" }
    ]
  },
  {
    id: "20260623-096",
    trackers: ["eu_cra", "security"],
    category: "uncategorized",
    title: "MariaDB 社群伺服器面臨四個關鍵漏洞：可執行任意 Shell 指令，建議立即修補",
    summary: "MariaDB 社群伺服器在啟用 Galera Cluster (wsrep) 的情況下，面臨多個關鍵漏洞，包括 CVE-2026-49261、CVE-2026-48165、CVE-2026-48163 和 CVE-2026-44168。這些漏洞允許攻擊者在受影響系統上執行任意 Shell 指令。其中，CVE-2026-49261 透過在 joiner node 的名稱中嵌入指令來觸發；CVE-2026-48165 允許高權限使用者利用系統變數執行指令；而 CVE-2026-48163 和 CVE-2026-44168 則是在 State Snapshot Transfer (SST) 過程中，惡意 joiner 透過未經驗證的參數，在 donor node 上執行指令。這些漏洞的 CVSS v3.1 分數範圍為 8.0 至 10.0。建議所有使用者和管理員應立即將 MariaDB 社群伺服器更新至最新版本。若無法立即更新，應禁用 wsrep_notify_cmd 來緩解 CVE-2026-49261。",
    tags: ["MariaDB", "CVE-2026-49261", "CVE-2026-48165", "Galera Cluster", "Shell 指令", "資安修補"],
    title_en: "MariaDB Community Server Faces Four Critical Vulnerabilities: Allows Arbitrary Shell Command Execution, Patching Recommended",
    summary_en: "The MariaDB Community Server has been found to have multiple critical vulnerabilities when Galera Cluster (wsrep) is enabled, including CVE-2026-49261, CVE-2026-48165, CVE-2026-48163, and CVE-2026-44168. These vulnerabilities allow attackers to execute arbitrary Shell commands on affected systems. Specifically, CVE-2026-49261 can be triggered by embedding commands within the joiner node's name; CVE-2026-48165 allows high-privilege users to execute commands using system variables; while CVE-2026-48163 and CVE-2026-44168 allow malicious joiners to execute commands on the donor node via unvalidated parameters during the State Snapshot Transfer (SST) process. The CVSS v3.1 scores for these vulnerabilities range from 8.0 to 10.0. All users and administrators are advised to immediately update the MariaDB Community Server to the latest version. If immediate updating is not possible, disabling wsrep_notify_cmd is recommended to mitigate CVE-2026-49261.",
    tags_en: ["MariaDB", "CVE-2026-49261", "CVE-2026-48165", "Galera Cluster", "Shell Command", "Security Patch"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-078", lang: "EN" }
    ]
  }
];
