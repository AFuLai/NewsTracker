// data-20260617.js — 2026-06-17
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-17"] = [
  {
    id: "20260617-001",
    trackers: ["security"],
    category: "重大事件",
    title: "歐洲理事會、任天堂、教育科技公司等遭駭：多起重大資料外洩事件分析",
    summary: "多起國際資安事件揭露多方組織面臨嚴重資料外洩風險。歐洲理事會被駭客ShinyHunters竊取約42.9萬份包含薪資、銀行帳號、社會安全碼等敏感人事資料；任天堂的員工關係平臺TINYpulse亦遭駭，資料涵蓋2016年至2026年的員工資訊。此外，教育科技公司Infinite Campus從Salesforce平臺外洩約13.7萬名師生個資，而德國多家醫院的病患資料外洩，起因於委外服務商Unimed遭駭，凸顯供應鏈風險。此外，CI/CD平臺Jenkins和Joomla外掛JCE等也因漏洞被積極利用，攻擊者甚至利用AI技術進行攻擊。這些事件強調了從供應鏈、第三方服務商，到AI應用層面，資安防護的全面性與即時修補的重要性。",
    tags: ["歐洲理事會", "ShinyHunters", "資料外洩", "供應鏈攻擊", "CVE-2026-48907", "Jenkins", "Infinite Campus"],
    title_en: "Council of Europe, Nintendo, EdTech Companies Hacked: Analysis of Multiple Major Data Leak Incidents",
    summary_en: "Multiple international cybersecurity incidents reveal that various organizations face severe data leakage risks. The Council of Europe was hacked by the group ShinyHunters, resulting in the theft of approximately 429,000 sensitive personnel records, including salary, bank account numbers, and social security codes. Nintendo's employee relations platform, TINYpulse, was also compromised, with data covering employee information from 2016 to 2026. Furthermore, the educational technology company Infinite Campus leaked personal data of approximately 137,000 students and staff from the Salesforce platform, while patient data from several German hospitals was leaked due to a breach at the outsourced service provider Unimed, highlighting supply chain risks. Additionally, CI/CD platforms like Jenkins and Joomla plugins like JCE were actively exploited due to vulnerabilities, and attackers even utilized AI technology in their attacks. These incidents underscore the critical importance of comprehensive and timely cybersecurity defenses, spanning from the supply chain and third-party service providers to the AI application layer.",
    tags_en: ["Council of Europe", "ShinyHunters", "Data Leakage", "Supply Chain Attack", "CVE-2026-48907", "Jenkins", "Infinite Campus"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176698", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-002",
    trackers: ["os", "security"],
    category: "重大事件",
    title: "義大利亞得里亞海港務局遭Anubis勒索軟體攻擊：透過釣魚與IT系統漏洞癱瘓核心業務",
    summary: "義大利亞得里亞海港務局於去年12月遭遇Anubis勒索軟體攻擊，導致貨物追蹤、船期排程及海關作業等核心系統全面癱瘓，並有約2%資料外洩。資安公司調查指出，駭客最初是透過向員工發送帶有惡意附件的釣魚信件成功入侵，隨後進行權限提升與內部橫向移動。攻擊者並非直接針對OT環境，而是鎖定M365與Azure等IT系統，利用港務局IT基礎設施中尚未修補的漏洞取得控制權。勒索軟體加密了數千份檔案，並竊取了合約與員工機敏資料，要求支付一千萬美元贖金。事故後，港務局雖未支付贖金，但因備份通訊協定過時，導致資料復原速度緩慢。",
    tags: ["亞得里亞海港務局", "Anubis", "勒索軟體", "釣魚攻擊", "M365", "Azure", "IT基礎設施"],
    title_en: "Italian Adriatic Port Authority Hit by Anubis Ransomware Attack: Core Operations Paralyzed via Phishing and IT System Vulnerabilities",
    summary_en: "The Italian Adriatic Port Authority suffered an Anubis ransomware attack last December, leading to the complete paralysis of core systems such as cargo tracking, vessel scheduling, and customs operations, with approximately 2% of data leaked. Cybersecurity firm investigations indicated that the attackers initially gained entry by successfully compromising an employee through a phishing email containing malicious attachments, followed by privilege escalation and internal lateral movement. The attackers did not directly target the OT environment but instead focused on IT systems like M365 and Azure, exploiting unpatched vulnerabilities within the Port Authority's IT infrastructure to gain control. The ransomware encrypted thousands of files and stole sensitive contract and employee data, demanding a $10 million ransom. Although the Port Authority did not pay the ransom, the slow data recovery was attributed to outdated backup communication protocols.",
    tags_en: ["Adriatic Port Authority", "Anubis", "Ransomware", "Phishing Attack", "M365", "Azure", "IT Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176681", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-003",
    trackers: ["security"],
    category: "重大事件",
    title: "任天堂疑似遭駭客竊取員工資料，勒索金200萬美元，資料來源為TINYpulse系統",
    summary: "根據報導，日本電玩大廠任天堂疑似遭駭客攻擊。駭客代號SHADOWBYT3$於6月13日在地下論壇發布勒索訊息，聲稱從任天堂用於收集員工匿名反饋的TINYpulse系統竊取了近859MB的資料。外洩的資料內容包括員工姓名、電子郵件、分析報告、銀行對帳單PDF檔以及職場問卷，時間範圍涵蓋2016年至2026年。駭客要求200萬美元作為贖金，並設定了48小時的回應期限。Cybernews研究人員分析的樣本證實了資料的真實性，且資料的元數據符合駭客描述。任天堂方面尚未正式證實此次事件的真實性，但這是該公司近半年來第二次傳出遭駭事件。",
    tags: ["任天堂", "勒索軟體", "TINYpulse", "資料外洩", "員工資料", "駭客攻擊"],
    title_en: "Nintendo Suspected of Data Theft by Hackers; Demands $2 Million Ransom from TINYpulse System Data",
    summary_en: "According to reports, Japanese gaming giant Nintendo was suspected of being attacked by hackers. A hacker, codenamed SHADOWBYT3$, posted a ransom message on June 13th on an underground forum, claiming to have stolen nearly 859MB of data from Nintendo's TINYpulse system, which is used to collect anonymous employee feedback. The leaked data reportedly includes employee names, email addresses, analysis reports, bank statement PDF files, and workplace questionnaires, covering the period from 2016 to 2026. The hackers demanded $2 million in ransom and set a 48-hour response deadline. Samples analyzed by Cybernews researchers confirmed the authenticity of the data, and the data's metadata matched the hacker's description. Nintendo has not yet officially confirmed the incident, but this marks the second suspected hacking incident for the company in the past six months.",
    tags_en: ["Nintendo", "Ransomware", "TINYpulse", "Data Leak", "Employee Data", "Hacking Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176673", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-004",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體駭客入侵教育科技公司 Infinite Campus，竊取超過 13 萬帳號的學生及員工資料",
    summary: "教育科技公司 Infinite Campus 曾遭勒索軟體駭客 ShinyHunters 攻擊，駭客聲稱透過其使用的 Salesforce 平台竊取了約 1.2 GB 的檔案。由於 Infinite Campus 為美國超過 3,200 個學區提供學生資訊系統，影響範圍廣泛，涉及約 1,100 萬名學生的個資。後續根據 Have I Been Pwned 的資料庫更新，確認約有 137,100 個帳號的資料外洩。外洩的資料類型包括電子郵件信箱、姓名、工作頭銜、電話號碼、居住地址、使用者名稱、支援工單內容及雇主姓名。Infinite Campus 官方指出，大部分外洩資料屬於學校工作人員的聯絡資訊，且多為公開資訊。此事件凸顯教育機構的資料安全風險，建議相關機構應強化對第三方雲端平台（如 Salesforce）的權限管理與監控，並對員工資料進行加密保護。",
    tags: ["Infinite Campus", "ShinyHunters", "Salesforce", "勒索軟體", "教育科技", "資料外洩"],
    title_en: "Ransomware Hackers Breach EdTech Company Infinite Campus, Stealing Student and Employee Data for Over 137,000 Accounts",
    summary_en: "Educational technology company Infinite Campus was attacked by ransomware hackers ShinyHunters. The hackers claimed to have stolen approximately 1.2 GB of files via the Salesforce platform used by the company. Given that Infinite Campus provides student information systems to over 3,200 school districts in the United States, the scope of the impact is wide, involving the personal data of approximately 11 million students. Subsequent updates to the Have I Been Pwned database confirmed the leakage of data from about 137,100 accounts. The leaked data types include email addresses, names, job titles, phone numbers, residential addresses, usernames, support ticket contents, and employer names. Infinite Campus officials pointed out that most of the leaked data pertains to the contact information of school staff and is largely public information. This incident highlights the data security risks faced by educational institutions, suggesting that relevant organizations should strengthen access management and monitoring for third-party cloud platforms (such as Salesforce), and implement encryption protection for employee data.",
    tags_en: ["Infinite Campus", "ShinyHunters", "Salesforce", "Ransomware", "EdTech", "Data Leak"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176672", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-005",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客組織 ShinyHunters 宣稱竊取歐洲理事會大量人員薪資與敏感資料",
    summary: "駭客組織 ShinyHunters 在其公開網站宣稱成功入侵歐洲理事會（Council of Europe）的內部系統，竊取了大量敏感的個人資料。外洩的資料包括上萬名員工從 2011 年至 2026 年的薪資單（約 40.9 萬份）、內部人事檔案、履歷表等。這些資料類型極為敏感，涵蓋員工 ID、地址、電話號碼、出生日期、薪資、銀行帳號、稅務和社會安全碼資訊，甚至包含醫療和出勤記錄。駭客要求歐洲理事會在特定日期前聯繫，否則將公開這些資料。歐洲理事會目前正在進行調查，並拒絕對媒體評論。此事件屬於國家級駭客行動，顯示國際組織的資料安全面臨重大威脅。",
    tags: ["歐洲理事會", "ShinyHunters", "資料外洩", "薪資資料", "國際組織", "個人資料"],
    title_en: "Hacker Group ShinyHunters Claims Theft of Council of Europe Employee Payroll and Sensitive Data",
    summary_en: "The hacker group ShinyHunters claimed on its public website to have successfully breached the internal systems of the Council of Europe, stealing a large amount of sensitive personal data. The leaked data includes payroll records (approximately 409,000 files) for tens of thousands of employees spanning from 2011 to 2026, along with internal HR files and resumes. These data types are extremely sensitive, encompassing employee IDs, addresses, phone numbers, dates of birth, salaries, bank account details, tax and social security numbers, and even medical and attendance records. The hackers are demanding that the Council of Europe contact them by a specific date, or they will publish the data. The Council of Europe is currently conducting an investigation and has declined to comment to the media. This incident constitutes a state-level cyberattack, highlighting the significant data security threat facing international organizations.",
    tags_en: ["Council of Europe", "ShinyHunters", "Data Leak", "Payroll Data", "International Organization", "Personal Data"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176671", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-006",
    trackers: ["security"],
    category: "重大事件",
    title: "科達（Kodak）確認資料外洩事件，駭客組織 ShinyHunters 聲稱竊取超過 220 萬筆客戶個人資料",
    summary: "科達（Kodak）證實公司遭遇資安事件，並聘請外部專家調查駭客非法取得其部分公司資料。雖然公司發言指出僅是「有限量」的資料外洩，且目前沒有系統或營運上的威脅，但駭客組織 ShinyHunters 已在暗網聲稱負責，並威脅公開竊取的資料。該駭客團體聲稱竊取了超過 220 萬筆包含客戶個人身份資訊（PII）和內部企業資料的記錄，並設定了公開洩露的期限。此外，ShinyHunters 也聲稱過去一年來攻擊了數百家 Salesforce 客戶，並曾針對利用 Oracle PeopleSoft 軟體套件的零日漏洞，對超過 100 個組織進行資料竊取攻擊。科達尚未透露駭客取得系統的具體方式。",
    tags: ["Kodak", "ShinyHunters", "資料外洩", "PII", "勒索軟體", "Oracle PeopleSoft"],
    title_en: "Kodak Confirms Data Leak Incident; Hacker Group ShinyHunters Claims Theft of Over 2.2 Million Customer Records",
    summary_en: "Kodak has confirmed it suffered a cybersecurity incident and hired external experts to investigate the unauthorized acquisition of some of its company data by hackers. Although the company stated that the leaked data was only a 'limited amount' and that there are currently no system or operational threats, the hacker group ShinyHunters has claimed responsibility on the dark web and threatened to publish the stolen data. The group claims to have stolen over 2.2 million records containing customer Personally Identifiable Information (PII) and internal corporate data, and has set a deadline for public disclosure. Furthermore, ShinyHunters also claimed to have attacked hundreds of Salesforce clients over the past year, and had conducted data theft attacks against over 100 organizations utilizing a zero-day vulnerability in the Oracle PeopleSoft software suite. Kodak has not yet disclosed the specific method by which the hackers gained access to the system.",
    tags_en: ["Kodak", "ShinyHunters", "Data Leak", "PII", "Ransomware", "Oracle PeopleSoft"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/kodak-confirms-data-breach-claimed-by-shinyhunters-extortion-gang", lang: "EN" }
    ]
  },
  {
    id: "20260617-007",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心移除 AppleTalk 協定支援：因 AI 生成補丁過多成為維護負擔",
    summary: "Linux 上游開發者決定從主線核心中移除 AppleTalk 網路協定支援。AppleTalk 協定自 2009 年（在 macOS X 10.6 Snow Leopard 版本中）已被 Apple 淘汰，長期以來已逐漸被標準的 TCP/IP 協定取代。本次移除的動機，主要是因為近期在郵件清單中湧入了大量由 AI 生成的補丁，這些補丁使得維護該協定成為了不必要的負擔。本次移除的程式碼量約為 4,000 行，已在 Linux 7.2 版本中完成。此舉與 Linux 7.1 版本中移除 ARCnet、舊版 ISA/PCMCIA 硬體支援、ISDN 和業餘無線電等過時網路驅動程式的趨勢一致。開發者建議，對仍需使用 AppleTalk 的使用者，可參考專門的模組儲存庫維護。修補建議是讓系統保持更新，以移除過時且維護成本高的協定支援。",
    tags: ["Linux 核心", "AppleTalk", "AI 生成補丁", "網路協定", "Linux 7.2"],
    title_en: "Linux Kernel Removes AppleTalk Protocol Support: Overburdened by Excessive AI-Generated Patches",
    summary_en: "Linux upstream developers have decided to remove support for the AppleTalk networking protocol from the mainline kernel. AppleTalk was deprecated by Apple in 2009 (in macOS X 10.6 Snow Leopard) and has long been gradually replaced by standard TCP/IP protocols. The primary motivation for this removal is the recent influx of numerous AI-generated patches into mailing lists, which have made maintaining this protocol an unnecessary burden. The code removed amounts to approximately 4,000 lines and was completed in Linux 7.2. This move aligns with the trend of removing outdated network drivers in Linux 7.1, such as ARCnet, old ISA/PCMCIA hardware support, ISDN, and amateur radio. Developers recommend that users who still require AppleTalk refer to specialized module repositories for maintenance. The suggested patch is to keep the system updated to remove support for outdated and high-maintenance protocols.",
    tags_en: ["Linux Kernel", "AppleTalk", "AI-generated patches", "Networking protocol", "Linux 7.2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Drops-AppleTalk", lang: "EN" }
    ]
  },
  {
    id: "20260617-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 儲存子系統更新：強化 NVMe、IO_uring 與引入 dm-inlinecrypt 功能",
    summary: "本文介紹 Linux 7.2 版本針對儲存子系統進行的重大功能更新。主要更新包括 NVMe 核心程式碼，新增了每控制器管理和 I/O 超時 sysfs 屬性，並支援 PCI peer-to-peer DMA (P2PDMA) 於多路徑設備上，提升了監控能力。在 RAID 相關的 MD 子系統方面，修復了 RAID1 和 RAID10 在讀取錯誤恢復路徑中的死鎖問題，並改善了 P2PDMA 的傳播處理。此外，IO_uring 介面進行了重構，提升了任務工作基礎設施的效能，並增強了零拷接收 (ZCRX) 的可靠性與功能，支援了 IORING_OP_CONNECT 的操作碼過濾。最值得注意的是 Device Mapper (DM) 引入了 dm-inlinecrypt 目標，這是一種用於內聯區塊設備加密的機制，相較於傳統的 dm-crypt，特別適用於支援內聯加密的 UFS 主機控制器。這些更新旨在全面提升 Linux 系統的儲存效能、穩定性與安全性。",
    tags: ["Linux", "Linux 7.2", "儲存子系統", "IO_uring", "NVMe", "dm-inlinecrypt", "PCI P2PDMA"],
    title_en: "Linux 7.2 Storage Subsystem Update: Enhancing NVMe, IO_uring, and Introducing dm-inlinecrypt Functionality",
    summary_en: "This article introduces major functional updates to the Linux 7.2 version's storage subsystem. Key updates include the NVMe core code, which adds per-controller management and I/O timeout sysfs attributes, and supports PCI peer-to-peer DMA (P2PDMA) on multi-path devices, enhancing monitoring capabilities. Regarding the RAID-related MD subsystem, deadlocks in the read error recovery path for RAID1 and RAID10 have been fixed, and P2PDMA propagation handling has been improved. Furthermore, the IO_uring interface has been refactored, boosting the performance of the task work infrastructure, and enhancing the reliability and functionality of Zero Copy Receive (ZCRX), supporting the IORING_OP_CONNECT opcode filtering. Most notably, Device Mapper (DM) has introduced the dm-inlinecrypt target, a mechanism for in-line block device encryption. This is particularly suitable for UFS host controllers that support in-line encryption, compared to traditional dm-crypt. These updates aim to comprehensively improve the storage performance, stability, and security of the Linux system.",
    tags_en: ["Linux", "Linux 7.2", "Storage Subsystem", "IO_uring", "NVMe", "dm-inlinecrypt", "PCI P2PDMA"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Storage", lang: "EN" }
    ]
  },
  {
    id: "20260617-009",
    trackers: ["os"],
    category: "Linux",
    title: "System76 打造垂直整合的 Linux 平台：從硬體到 COSMIC 桌面環境的生態願景",
    summary: "本文深入探討了 Linux PC 供應商 System76 的發展模式與未來規劃。System76 是一家歷史悠久的企業，其核心策略是建立一個垂直整合、以開源為導向的 Linux 計算堆疊。該公司強調其硬體（如 Thelio 系列）和軟體（如 Pop!_OS 和 COSMIC）的深度結合，目標是為開發者、研究人員和 Linux 核心使用者提供高度客製化、可審核的平台。在硬體方面，System76 推出了 Mira 和 Thelio Major 等新一代設計，專注於優化散熱和擴展性；軟體方面，其 Rust 語言基底的 COSMIC 桌面環境被設計為模組化和可組合的 UI 層，旨在讓其他 OEM 或發行版維護者能輕鬆地建立自定義的 Linux 桌面體驗。文章指出，在 AI 數據中心和元件價格上漲的背景下，System76 的業務持續增長，證明了專業 Linux 工作站市場的穩定需求。這體現了 System76 不僅是一個硬體製造商，更是一個致力於推動整個 Linux 生態系統發展的平台提供者。",
    tags: ["System76", "Linux", "Pop!_OS", "COSMIC", "開源", "PC 堆疊", "嵌入式系統"],
    title_en: "System76 Builds a Vertically Integrated Linux Platform: An Ecosystem Vision from Hardware to the COSMIC Desktop Environment",
    summary_en: "This article delves into the development model and future plans of Linux PC vendor System76. System76 is a long-established company whose core strategy is to build a vertically integrated, open-source-driven Linux computing stack. The company emphasizes the deep integration of its hardware (such as the Thelio series) and software (like Pop!_OS and COSMIC), aiming to provide highly customizable and auditable platforms for developers, researchers, and core Linux users. On the hardware front, System76 has released next-generation designs like the Mira and Thelio Major, focusing on optimizing cooling and expandability; on the software front, its Rust-based COSMIC desktop environment is designed as a modular and composable UI layer, intended to allow other OEMs or distribution maintainers to easily build custom Linux desktop experiences. The article notes that despite the backdrop of AI data centers and rising component costs, System76's business continues to grow, demonstrating the stable demand for the professional Linux workstation market. This illustrates that System76 is not merely a hardware manufacturer, but a platform provider committed to advancing the entire Linux ecosystem.",
    tags_en: ["System76", "Linux", "Pop!_OS", "COSMIC", "Open Source", "PC Stack", "Embedded Systems"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/06/17/system76-boss-reckons-he-can-liberate-the-entire-pc-stack-just-give-him-another-15-years/5255258", lang: "EN" }
    ]
  },
  {
    id: "20260617-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6350-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 針對 OpenSSH 服務發布了安全公告 DSA-6350-1，修補了一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在特定條件下，無需正確憑證即可執行遠端命令。雖然原文未提供具體 CVSS 分數或影響範圍，但此類漏洞對系統的遠端存取安全構成重大威脅。受影響的系統主要運行 OpenSSH 服務的 Debian 相關發行版。建議系統管理員應立即更新 OpenSSH 套件至 Debian 提供的修補版本，以防止未經授權的遠端存取和執行惡意指令。此修補屬於核心元件的更新，對於維護系統的遠端存取安全至關重要。",
    tags: ["Debian", "OpenSSH", "DSA-6350-1", "認證繞過", "Linux 核心元件", "遠端存取"],
    title_en: "Debian Releases DSA-6350-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6350-1 for the OpenSSH service, patching a potential authentication bypass vulnerability. This vulnerability could potentially allow an attacker to execute remote commands without proper credentials under specific conditions. Although the original text does not provide a specific CVSS score or impact scope, such vulnerabilities pose a significant threat to the remote access security of the system. Affected systems primarily run Debian-related distributions utilizing the OpenSSH service. System administrators are advised to immediately update the OpenSSH package to the patched version provided by Debian to prevent unauthorized remote access and the execution of malicious commands. This patch constitutes an update to a core component and is crucial for maintaining the remote access security of the system.",
    tags_en: ["Debian", "OpenSSH", "DSA-6350-1", "Authentication Bypass", "Linux Core Component", "Remote Access"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00261.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6349-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布安全公告 DSA-6349-1，修補了 OpenSSH 服務中一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在特定條件下，無需正確認證即可執行遠端命令。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類漏洞對系統的遠端存取安全構成重大威脅。受影響的系統為使用 Debian 基礎發行版並安裝 OpenSSH 服務的伺服器。修補建議是立即升級 OpenSSH 服務至 Debian 官方提供的修補版本，以防止未經授權的遠端存取和系統控制。建議系統管理員應定期檢查 Debian 安全公告，並及時應用所有核心元件的更新。",
    tags: ["Debian", "OpenSSH", "DSA-6349-1", "認證繞過", "Linux 核心", "安全更新"],
    title_en: "Debian Releases DSA-6349-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6349-1, patching a potential authentication bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote commands without proper authentication under specific conditions. Although the original text does not provide specific CVSS scores or impact scope, such vulnerabilities pose a significant threat to the remote access security of systems. Affected systems are servers using Debian-based distributions and installed with the OpenSSH service. The recommended fix is to immediately upgrade the OpenSSH service to the patched version provided by Debian to prevent unauthorized remote access and system control. System administrators are advised to regularly check Debian security advisories and apply all core component updates in a timely manner.",
    tags_en: ["Debian", "OpenSSH", "DSA-6349-1", "Authentication Bypass", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00260.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-012",
    trackers: ["security"],
    category: "法規與標準",
    title: "英國擬禁未滿 16 歲青少年使用社群媒體，引發隱私權專家擔憂監控風險",
    summary: "英國政府計劃於 2027 年初實施禁令，限制未滿 16 歲的青少年使用包括 Facebook、Instagram、TikTok、X 和 YouTube 等用戶間互動的社群媒體平台，並可能包括限制「無限滾動」等功能。此舉是英國成為最新國家對社群媒體公司採取行動的國家。除了主要平台外，訊息服務如 Signal 或 WhatsApp 不受影響。然而，隱私權專家和數位權利倡議者對此表示高度擔憂，認為這類禁令可能導致過度的監控和審查。他們指出，年齡驗證技術本身就是一個難題，全面封鎖而非精準控制，可能反而剝奪了年輕人的權利，並將父母的關切轉化為國家層面的權威。專家建議，企業應尋求在保護隱私和確保年齡驗證準確性之間的平衡點，而非採取一刀切的封鎖措施。",
    tags: ["英國", "社群媒體", "青少年", "隱私權", "監控", "年齡驗證", "法規"],
    title_en: "UK plans to ban social media use for minors under 16, raising privacy expert concerns over surveillance risks",
    summary_en: "The UK government plans to implement a ban in early 2027, restricting minors under 16 from using social media platforms with user-generated content, including Facebook, Instagram, TikTok, X, and YouTube, and potentially limiting features like 'infinite scrolling.' This makes the UK the latest country to take action against social media companies. Messaging services such as Signal or WhatsApp are not affected. However, privacy experts and digital rights advocates have expressed high concern, arguing that such a ban could lead to excessive surveillance and censorship. They point out that age verification technology itself is a challenge, and that a blanket ban rather than precise control might actually strip away young people's rights, transforming parental concern into state-level authority. Experts suggest that companies should seek a balance between protecting privacy and ensuring the accuracy of age verification, rather than adopting a one-size-fits-all prohibition.",
    tags_en: ["UK", "Social Media", "Minors", "Privacy", "Surveillance", "Age Verification", "Regulation"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/uk-social-media-ban-privacy-experts-worried", lang: "EN" }
    ]
  },
  {
    id: "20260617-013",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "德國BSI頒發首張5G核心網路組件安全認證：Mavenir產品通過NESAS 2.0驗證",
    summary: "德國聯邦資訊安全局（BSI）於6月15日宣布，首次發布針對5G核心網路組件的BSI NESAS網路設備安全保障計畫認證。美國雲端原生網路軟體商Mavenir的「5G匯流封包核心網路」產品組合，其負責網路功能註冊與發現的「網路儲存功能」（Network Repository Function，版本CC 24.4.2 p4 SW）成功獲得此項認證。此認證是依據BSI NESAS 2.0驗證計畫進行評估，證明該產品組件符合BSI、GSMA以及3GPP等業界與安全規範標準。BSI此舉標誌著德國在確保5G行動通訊基礎設施安全方面邁進重要里程碑。隨著業界對此類強制認證規定的關注，預計未來將有更多廠商申請此類安全認證，以應對德國自2026年1月1日開始實施的5G關鍵組件強制認證要求。",
    tags: ["BSI", "NESAS 2.0", "5G核心網路", "Mavenir", "GSMA", "3GPP"],
    title_en: "German BSI Issues First Security Certification for 5G Core Network Components: Mavenir Product Passes NESAS 2.0 Validation",
    summary_en: "The German Federal Office for Information Security (BSI) announced on June 15th the first BSI NESAS Network Equipment Security Assurance Program certification for 5G core network components. Mavenir, a US cloud-native network software provider, successfully obtained this certification for its '5G Converged Packet Core Network' product suite, specifically for the 'Network Repository Function' (version CC 24.4.2 p4 SW), which handles network function registration and discovery. This certification was based on the BSI NESAS 2.0 validation program, demonstrating that the product component meets industry and security standards set by BSI, GSMA, and 3GPP. This move by the BSI marks a significant milestone for Germany in ensuring the security of 5G mobile communication infrastructure. Given the industry's attention to such mandatory certification regulations, it is anticipated that more vendors will apply for this type of security certification to meet Germany's mandatory certification requirements for 5G critical components, effective January 1, 2026.",
    tags_en: ["BSI", "NESAS 2.0", "5G Core Network", "Mavenir", "GSMA", "3GPP"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176685", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-014",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 更新後，第三方辦公文件應用程式可能面臨發布延遲或兼容性問題",
    summary: "本文討論了在 Windows 系統進行更新後，第三方開發的辦公文件應用程式（Office Document Launches）可能面臨的兼容性挑戰與發布延遲。雖然原文未提供具體的 CVE 或 CVSS 分數，但其核心問題在於作業系統層面的變動，可能導致依賴特定系統 API 或架構的第三方軟體無法順利運行或需要重新驗證。實務上，這提醒開發者和企業IT部門，在進行大型作業系統更新（如 Windows Patch Tuesday）後，必須預留時間進行全面的兼容性測試，特別是對於依賴系統核心功能的應用程式。建議第三方軟體供應商應密切關注 Windows 的系統更新公告，並及時更新其產品以確保與最新的作業系統版本完美整合，避免因系統變動導致的業務中斷。",
    tags: ["Windows", "第三方應用程式", "兼容性", "Office 文件", "系統更新"],
    title_en: "Third-Party Office Document Applications May Face Release Delays or Compatibility Issues After Windows Updates",
    summary_en: "This article discusses the compatibility challenges and potential release delays for third-party developed office document applications (Office Document Launches) following updates to the Windows operating system. Although the original text does not provide specific CVE or CVSS scores, the core issue lies in changes at the operating system level, which may prevent third-party software relying on specific system APIs or architectures from running smoothly or may require re-validation. Practically, this serves as a reminder to developers and enterprise IT departments that comprehensive compatibility testing must be scheduled after major operating system updates (such as Windows Patch Tuesday), especially for applications that depend on core system functionalities. It is recommended that third-party software vendors closely monitor Windows system update announcements and promptly update their products to ensure perfect integration with the latest OS versions, thereby preventing business disruptions caused by system changes.",
    tags_en: ["Windows", "Third-Party Applications", "Compatibility", "Office Documents", "System Updates"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/06/17/windows-update-leaves-third-party-office-document-launches-in-limbo/5257425", lang: "EN" }
    ]
  },
  {
    id: "20260617-015",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 搜尋功能重大升級：支援輸入錯誤、提升本地檔案優先級並可關閉 Bing 搜尋結果",
    summary: "微軟在 Windows 11 Insider Preview Build 26300.8687 版本中，為 Windows Search 帶來了多項重大改進。核心改動包括：大幅提升對用戶輸入錯誤（如拼字錯誤、字元遺漏或部分單字）的容忍度，使其能準確找到應用程式和本地檔案。此外，搜尋結果的排名機制也得到優化，確保最相關的設定或檔案能優先顯示。\n\n實務上，用戶在搜尋本地檔案時，現在能更可靠地找到文件，而非被網頁搜尋結果干擾。更重要的是，微軟正在測試一個新功能，允許用戶在設定中完全關閉 Windows Search 的 Bing 網頁搜尋結果，讓搜尋結果更專注於本機內容。部分改進，如兩字觸發本地檔案搜尋，已透過 2026 年 6 月的更新推送給所有 Windows 11 用戶，提升了整體使用體驗。",
    tags: ["Windows 11", "Windows Search", "Insider Preview", "本地檔案搜尋", "Bing", "系統更新"],
    title_en: "Major Upgrade to Windows 11 Search Functionality: Supports Input Errors, Prioritizes Local Files, and Allows Disabling Bing Search Results",
    summary_en: "Microsoft has introduced several major improvements to Windows Search in the Windows 11 Insider Preview Build 26300.8687 version. Core changes include significantly increasing tolerance for user input errors (such as typos, missing characters, or partial words), allowing it to accurately locate applications and local files. Furthermore, the search result ranking mechanism has been optimized to ensure that the most relevant settings or files are displayed with priority.\n\nPractically, users can now more reliably find documents when searching local files, rather than being distracted by web search results. More importantly, Microsoft is testing a new feature that allows users to completely disable Windows Search's Bing web search results in the settings, making the search results more focused on local content. Some improvements, such as triggering local file search with two characters, have been pushed to all Windows 11 users through the June 2026 update, enhancing the overall user experience.",
    tags_en: ["Windows 11", "Windows Search", "Insider Preview", "Local File Search", "Bing", "System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/17/microsoft-confirms-windows-11-search-will-find-your-apps-not-bing-results-even-if-you-make-typos", lang: "EN" }
    ]
  },
  {
    id: "20260617-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Chrome 瀏覽器修補 33 項資安漏洞：多數高風險問題集中於記憶體管理與身分驗證元件",
    summary: "Google 發布 Chrome 桌面版瀏覽器新版本，為 Windows、Mac 與 Linux 平臺更新至 149.0.7827.155/156，共修補 33 項資安漏洞。本次修補的重大漏洞主要涉及網頁分享 API、嵌入式瀏覽器元件 WebView、數位身分憑證、檔案輸入、密碼管理及 Web Authentication 等核心元件。技術分析顯示，本次修補的漏洞問題類型以記憶體相關缺陷為主，其中多數高風險漏洞屬於「已釋放卻仍被使用」（UAF）問題。除了 WebView 的漏洞屬於架構實作不當外，其他重大漏洞多為 UAF 類型。使用者應儘速更新至最新版本，以修補這些潛在的記憶體安全漏洞，避免遭受利用。",
    tags: ["Google", "Chrome", "UAF", "記憶體漏洞", "資安修補", "WebView", "身分驗證"],
    title_en: "Chrome Browser Patches 33 Security Vulnerabilities: Most High-Risk Issues Focus on Memory Management and Identity Components",
    summary_en: "Google released a new version of the Chrome desktop browser, updating Windows, Mac, and Linux platforms to 149.0.7827.155/156, and patching a total of 33 security vulnerabilities. The major vulnerabilities patched in this release primarily involve core components such as the Web Page Sharing API, the embedded browser component WebView, digital identity certificates, file input, password management, and Web Authentication. Technical analysis shows that the vulnerability types patched are mainly memory-related defects, with most high-risk vulnerabilities being of the 'Use-After-Free' (UAF) type. Aside from WebView vulnerabilities being due to architectural implementation flaws, other critical vulnerabilities are mostly UAF type. Users should update to the latest version promptly to patch these potential memory safety flaws and prevent exploitation.",
    tags_en: ["Google", "Chrome", "UAF", "Memory Vulnerability", "Security Patch", "WebView", "Identity Authentication"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176703", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Cloud Vertex AI SDK 漏洞揭露：模型上傳流程可遭替換執行任意程式碼",
    summary: "Palo Alto Networks旗下 Unit 42 揭露 Google Cloud Vertex AI SDK for Python 一個已修補的漏洞。該漏洞存在於模型註冊前的暫存儲存設計缺陷。當開發者使用舊版 SDK 上傳模型時，若未指定暫存位置，SDK 會根據專案 ID 自動生成預設儲存桶。Unit 42 指出，舊版 SDK 僅檢查儲存桶名稱是否存在，但未驗證其權屬，使得攻擊者若知道受害者專案 ID，可以在全球範圍建立同名儲存桶。攻擊者隨後可將模型構件導向其控制的儲存位置，並在模型上傳完成到 Vertex AI 服務讀取檔案的極短時間內，替換為惡意檔案。由於許多機器學習模型使用 pickle 或 Joblib 儲存，當 Vertex AI 服務載入惡意模型時，可能觸發任意程式碼執行。攻擊程式可嘗試讀取服務帳號憑證、環境變數及雲端中繼資料。Google 已修補此問題，修復重點為加入儲存桶權屬驗證。建議開發者升級至 1.148.0 或更新版本，並務必明確指定自控的暫存儲存桶。",
    tags: ["Google Cloud", "Vertex AI", "SDK", "Python", "模型上傳", "任意程式碼執行", "CVE"],
    title_en: "Google Cloud Vertex AI SDK Vulnerability Disclosed: Arbitrary Code Execution Possible During Model Upload Process",
    summary_en: "Unit 42, a group under Palo Alto Networks, has disclosed a patched vulnerability in the Google Cloud Vertex AI SDK for Python. The vulnerability resides in a design flaw within the temporary storage mechanism used before model registration. When developers use an older version of the SDK to upload a model without specifying a temporary storage location, the SDK automatically generates a default bucket based on the project ID. Unit 42 points out that the older SDK only checks for the existence of the bucket name but fails to validate its ownership. This allows an attacker, knowing the victim's project ID, to create a similarly named bucket globally. The attacker can then redirect the model components to a storage location under their control, and within the extremely short time frame when the model is uploaded and the Vertex AI service reads the file, replace it with a malicious file. Since many machine learning models use pickle or Joblib for storage, loading the malicious model by the Vertex AI service could trigger arbitrary code execution. The attack code could attempt to read service account credentials, environment variables, and cloud metadata. Google has patched this issue, with the fix focusing on adding bucket ownership validation. Developers are advised to upgrade to version 1.148.0 or later, and ensure they explicitly specify a controlled temporary storage bucket.",
    tags_en: ["Google Cloud", "Vertex AI", "SDK", "Python", "Model Upload", "Arbitrary Code Execution", "CVE"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176695", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-018",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Fortinet沙箱系統遭鎖定多個高風險漏洞：CVE-2026-25089等指令注入漏洞遭利用嘗試",
    summary: "資安公司Fortinet修補了多個重大等級的漏洞，其中包含CVE-2026-25089。此漏洞存在於FortiSandbox的網頁介面，源於其處理JSON指令時，未對特殊字元進行適當過濾與處理，屬於作業系統指令注入類型的漏洞，CVSS風險評分為9.1分。威脅情報公司Defused Cyber警告，已偵測到攻擊者嘗試利用CVE-2026-25089、CVE-2026-39813和CVE-2026-39808等漏洞攻擊FortiSandbox。Defused Cyber研判，攻擊者可能借助AI力量進行攻擊，但目前尚未成功利用CVE-2026-25089。此外，CVE-2026-39813和CVE-2026-39808皆為權限提升或執行未授權程式碼的漏洞，風險值亦為9.1。建議用戶應立即修補所有相關漏洞，以防範被攻擊者利用。",
    tags: ["Fortinet", "FortiSandbox", "CVE-2026-25089", "指令注入", "作業系統漏洞", "CVE-2026-39813"],
    title_en: "Multiple High-Risk Vulnerabilities Found in Fortinet Sandbox System: Command Injection Vulnerabilities like CVE-2026-25089 Targeted",
    summary_en: "Cybersecurity company Fortinet has patched multiple critical vulnerabilities, including CVE-2026-25089. This vulnerability resides in the FortiSandbox web interface and stems from improper filtering and handling of special characters when processing JSON commands. It is classified as an operating system command injection vulnerability, with a CVSS risk score of 9.1. Threat intelligence company Defused Cyber warned that it has detected attackers attempting to exploit vulnerabilities such as CVE-2026-25089, CVE-2026-39813, and CVE-2026-39808 to attack FortiSandbox. Defused Cyber assesses that attackers may be leveraging AI for attacks, but have not yet successfully exploited CVE-2026-25089. Furthermore, CVE-2026-39813 and CVE-2026-39808 are both privilege escalation or unauthorized code execution vulnerabilities, also carrying a risk score of 9.1. Users are advised to immediately patch all related vulnerabilities to prevent exploitation by attackers.",
    tags_en: ["Fortinet", "FortiSandbox", "CVE-2026-25089", "Command Injection", "OS Vulnerability", "CVE-2026-39813"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176694", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-019",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "ESET揭露中國駭客組織Earth Lusca：將Linux後門SprySOCKS變種為Windows惡意程式攻擊政府機關",
    summary: "資安公司ESET發現，中國駭客組織Earth Lusca（包括TAG-22、Aquatic Panda、FishMonger）將原本針對Linux環境的後門程式SprySOCKS，開發出Windows版本進行攻擊。這些變種（名為WIN_DRV和WIN_PLUS）在2023年至2024年間，主要攻擊臺灣、宏都拉斯、泰國和巴基斯坦的政府機關。惡意程式支援TCP、UDP、WebSocket通訊，可下達超過30種命令，包括系統資訊收集和檔案管理。特別是WIN_DRV，內建核心驅動程式RawWNPF，能隱藏網路連線、程序及檔案，並透過TCP流量轉發功能，讓攻擊者無需知道監聽連接埠即可發送指令。此外，攻擊情境疑似涉及利用CVE-2023-24932繞過安全開機防護機制。",
    tags: ["Earth Lusca", "SprySOCKS", "Windows惡意程式", "CVE-2023-24932", "後門", "政府機關"],
    title_en: "ESET Uncovers Chinese Hacker Group Earth Lusca: Modifying Linux Backdoor SprySOCKS into Windows Malware to Attack Government Agencies",
    summary_en: "Security company ESET discovered that the Chinese hacking group Earth Lusca (including TAG-22, Aquatic Panda, FishMonger) developed a Windows version of the backdoor program SprySOCKS, which was originally designed for Linux environments. These variants (named WIN_DRV and WIN_PLUS) primarily targeted government agencies in Taiwan, Honduras, Thailand, and Pakistan between 2023 and 2024. The malware supports TCP, UDP, and WebSocket communication, and can execute over 30 types of commands, including system information collection and file management. Notably, WIN_DRV includes a core driver, RawWNPF, capable of hiding network connections, processes, and files. Furthermore, its TCP traffic forwarding function allows attackers to send commands without needing to know the listening port. Additionally, the attack scenario is suspected to involve exploiting CVE-2023-24932 to bypass secure boot protection mechanisms.",
    tags_en: ["Earth Lusca", "SprySOCKS", "Windows Malware", "CVE-2023-24932", "Backdoor", "Government Agencies"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176684", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ChromeOS LTS-144 更新修補 40 項漏洞，包含兩起高危 UAF 漏洞 CVE-2026-11638 與 CVE-2026-10886",
    summary: "Google 發布 ChromeOS 作業系統長期支援版 LTS-144 的更新版本 144.0.7559.255，於 6 月 13 日上線，修補了共 40 項漏洞。其中，有 17 項被評為重大風險，22 項為高風險，另有 1 項中度風險。本次修補的漏洞類型高度集中於記憶體相關問題，共計 34 項，佔比超過 8 成。特別值得注意的是，其中 29 項為使用後釋放的記憶體仍被使用（UAF）問題。兩起風險最高的漏洞為 CVE-2026-11638（影響列印系統元件 Printing）和 CVE-2026-10886（影響檔案系統存取架構 FileSystem），兩者均為 UAF 類型，CVSS 嚴重性評分皆達 9.6 分。此外，有 5 項重大漏洞源自 ChromeOS 圖形介面基礎的平臺抽象層元件 Ozone。使用者應儘速更新至最新版本，以修補這些高風險的記憶體安全漏洞。",
    tags: ["ChromeOS", "LTS-144", "CVE-2026-11638", "CVE-2026-10886", "UAF", "記憶體安全"],
    title_en: "ChromeOS LTS-144 Update Patches 40 Vulnerabilities, Including Two High-Risk UAF Flaws CVE-2026-11638 and CVE-2026-10886",
    summary_en: "Google released an updated version of the ChromeOS Long-Term Support edition, LTS-144, version 144.0.7559.255, which went live on June 13th, patching a total of 40 vulnerabilities. Of these, 17 were rated as major risk, 22 as high risk, and 1 as medium risk. The vulnerabilities patched in this update are highly concentrated in memory-related issues, totaling 34 items, accounting for over 80%. Of particular note, 29 of these are Use-After-Free (UAF) issues. The two highest-risk vulnerabilities are CVE-2026-11638 (affecting the Printing component) and CVE-2026-10886 (affecting the FileSystem architecture). Both are UAF types, with CVSS severity scores reaching 9.6. Furthermore, 5 major vulnerabilities originate from Ozone, the platform abstraction layer component underlying the ChromeOS graphical interface. Users should update to the latest version promptly to patch these high-risk memory security vulnerabilities.",
    tags_en: ["ChromeOS", "LTS-144", "CVE-2026-11638", "CVE-2026-10886", "UAF", "Memory Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176680", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Wazuh修補重大風險漏洞：Manager 5.x 版本盤點同步機制遭利用，可能竄改安全資料",
    summary: "開源安全平台 Wazuh 修補了 Wazuh Manager 5.0.0-beta1 及後續 5.x 版本中的一項重大風險漏洞。此漏洞出現在 Manager 處理代理程式（Agent）送出的清查資料時，由於未妥善驗證代理程式控制的內容，攻擊者若在允許匿名註冊的組態下，可註冊惡意代理程式並送出特製資料。由於 Wazuh Manager 預設使用具有全部存取權限的 OpenSearch 角色，攻擊者可利用此漏洞刪除警示日誌、竄改弱點或資產清查資料，嚴重破壞安全遙測資料的完整性，甚至可能影響多租戶環境的資料隔離。Wazuh 已在 wazuh-manager 5.0.0-beta3 版本修補此問題，透過在 OpenSearch 的 _bulk 請求的 _index 欄位導入跳脫處理。此外，管理員應遵循最小權限原則，檢查 OpenSearch 索引存取控制、代理程式註冊設定，並避免讓 Wazuh Manager 使用 admin 或 all_access 等高權限角色。",
    tags: ["Wazuh", "Wazuh Manager", "OpenSearch", "安全遙測", "盤點同步機制", "CVE"],
    title_en: "Wazuh Patches Critical Vulnerability: Manager 5.x Version Inventory Synchronization Mechanism Exploitable to Tamper with Security Data",
    summary_en: "The open-source security platform Wazuh has patched a critical vulnerability in Wazuh Manager versions 5.0.0-beta1 and subsequent 5.x releases. This vulnerability resides in how the Manager processes inventory data sent by agents. Because the content controlled by the agent is not properly validated, an attacker, under configurations that allow anonymous registration, can register a malicious agent and send specially crafted data. Since Wazuh Manager defaults to using an OpenSearch role with full access privileges, an attacker can exploit this vulnerability to delete alert logs, tamper with vulnerability or asset inventory data, severely compromising the integrity of security telemetry data, and potentially affecting data isolation in multi-tenant environments. Wazuh has patched this issue in version wazuh-manager 5.0.0-beta3 by implementing escaping handling in the _index field of the OpenSearch _bulk request. Furthermore, administrators should adhere to the principle of least privilege, review OpenSearch index access controls and agent registration settings, and avoid allowing Wazuh Manager to use high-privilege roles such as admin or all_access.",
    tags_en: ["Wazuh", "Wazuh Manager", "OpenSearch", "Security Telemetry", "Inventory Synchronization Mechanism", "CVE"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176677", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FIRST 預測 2026 年漏洞總量增至 6.6 萬，強調應以 CISA KEV 與 EPSS 篩選高風險漏洞",
    summary: "國際資安應變組織 FIRST 發布 2026 年中漏洞預測報告，預估全年 CVE 漏洞數量將上修至 6.6 萬個。報告指出，雖然漏洞總量持續攀升，但真正具備高度威脅或被積極利用的漏洞（「洪水」訊號）增長速度並未同步加快。FIRST 建議企業應持續利用 EPSS（漏洞利用預測評分系統）和 CISA KEV（已知被利用漏洞清單）作為優先篩選標準。特別提到，採用 EPSS 超過 10% 的門檻，旨在協助組織根據其風險承受度（Risk Appetite），精準鎖定最具槓桿效應的高風險漏洞，進行修補。這提醒資安團隊，面對大量漏洞通報時，應善用自動化工具進行風險評分，有效管理風險暴露，而非僅關注漏洞總數。",
    tags: ["FIRST", "CVE", "CISA KEV", "EPSS", "漏洞預測", "資安風險"],
    title_en: "FIRST predicts 2026 vulnerability count to rise to 66,000, emphasizing the use of CISA KEV and EPSS to filter high-risk vulnerabilities",
    summary_en: "The international cybersecurity organization FIRST released its 2026 mid-year vulnerability prediction report, estimating that the total number of CVE vulnerabilities throughout the year will increase to 66,000. The report points out that while the total volume of vulnerabilities continues to climb, the growth rate of vulnerabilities that possess high threat levels or are actively exploited (the 'flood' signal) has not increased synchronously. FIRST advises enterprises to continue utilizing EPSS (Exploit Prediction Scoring System) and CISA KEV (Known Exploited Vulnerabilities Catalog) as priority filtering standards. It specifically mentions using an EPSS threshold exceeding 10% to help organizations precisely pinpoint the highest-leverage, high-risk vulnerabilities based on their Risk Appetite, and thus prioritize patching. This reminds cybersecurity teams that when faced with a large volume of vulnerability disclosures, they should leverage automated tools for risk scoring and effectively manage risk exposure, rather than merely focusing on the total number of vulnerabilities.",
    tags_en: ["FIRST", "CVE", "CISA KEV", "EPSS", "Vulnerability Prediction", "Cybersecurity Risk"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176666", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Joomla外掛JCE存在嚴重未經身分驗證漏洞，已列入KEV並要求修補",
    summary: "美國網路安全與基礎設施安全局（CISA）警告，由Widget Factory開發的Joomla Content Editor（JCE）外掛程式，存在一個名為CVE-2026-48907的重大漏洞。此漏洞屬於存取控制不當，攻擊者無需身分驗證即可建立新的編輯者設定檔，進而可能導致PHP程式碼上傳及執行。CISA已掌握積極利用此弱點的攻擊跡象，並將其列入已遭利用的漏洞名單（KEV），因此要求聯邦機構在特定期限前完成修補。該漏洞的CVSS v4.0評分為滿分10分。Widget Factory已於6月3日發布修補版本2.9.99.5，但由於漏洞在6月12日被證實遭到積極利用，網路上已出現公開的概念驗證程式碼，駭客正透過自動化方式進行攻擊。廠商呼籲所有用戶務必儘速更新JCE，並同時檢查網站是否有被入侵的跡象。",
    tags: ["CISA", "Joomla", "JCE", "CVE-2026-48907", "KEV", "存取控制"],
    title_en: "CISA Warns: Joomla Plugin JCE Has Critical Unauthenticated Vulnerability, Listed in KEV and Requires Patching",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has warned that the Joomla Content Editor (JCE) plugin, developed by Widget Factory, contains a critical vulnerability identified as CVE-2026-48907. This vulnerability is an improper access control flaw that allows an attacker to create new editor configuration files without authentication, potentially leading to PHP code upload and execution. CISA has detected signs of active exploitation of this weakness and has listed it in the Known Exploited Vulnerabilities (KEV) catalog, thus requiring federal agencies to patch it within a specific timeframe. The vulnerability has a CVSS v4.0 score of 10.0. Widget Factory released a patched version 2.9.99.5 on June 3rd, but because the vulnerability was confirmed to be actively exploited on June 12th, public proof-of-concept code has appeared online, and attackers are conducting automated attacks. The vendor urges all users to update JCE immediately and simultaneously check their websites for signs of compromise.",
    tags_en: ["CISA", "Joomla", "JCE", "CVE-2026-48907", "KEV", "Access Control"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176670", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Widget Factory Joomla編輯器存在嚴重漏洞，已列入已知被利用漏洞清單",
    summary: "美國網路安全基礎設施安全局（CISA）已將一個影響Widget Factory Joomla內容編輯器（JCE）的嚴重漏洞，列入其已知被利用漏洞清單（KEV）。該漏洞追蹤編號為CVE-2026-48907，屬於不當存取控制（improper access control）缺陷，可導致未經身份驗證的使用者透過建立新的編輯器個人資料，上傳並執行PHP程式碼。此問題影響JCE版本從1.0.0至2.9.99.4，已在2.9.99.5版本中修補。CISA已要求聯邦民事行政部門（FCEB）在2026年6月19日前修補。此外，文章還揭露了兩場針對WordPress網站的供應鏈攻擊活動：一場利用OptinMonster等插件注入惡意JavaScript建立後門帳號；另一場則透過植入假插件，使網站在每次載入時向外部API回傳任意HTML或JavaScript，並在頁面底部注入，造成搜尋排名受損。這些攻擊顯示了網站管理員權限和資料庫的嚴重風險，建議網站管理員立即更新所有CMS插件，並監控是否有不尋常的後門或資料庫變動。",
    tags: ["CISA", "Joomla", "Widget Factory", "CVE-2026-48907", "不當存取控制", "KEV", "WordPress", "供應鏈攻擊"],
    title_en: "CISA Warns: Widget Factory Joomla Editor Has Critical Vulnerability, Listed in Known Exploited Vulnerabilities Catalog",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added a critical vulnerability affecting the Widget Factory Joomla Content Editor (JCE) to its Known Exploited Vulnerabilities (KEV) catalog. The vulnerability, tracked as CVE-2026-48907, is an improper access control flaw that allows unauthenticated users to upload and execute PHP code by creating a new editor profile. This issue affects JCE versions from 1.0.0 to 2.9.99.4 and was patched in version 2.9.99.5. CISA has mandated that Federal Civilian Executive Branch (FCEB) agencies patch the vulnerability by June 19, 2026. Furthermore, the article also revealed two supply chain attack campaigns targeting WordPress websites: one utilized plugins like OptinMonster to inject malicious JavaScript and create backdoor accounts; another involved implanting fake plugins that caused the website to return arbitrary HTML or JavaScript to an external API upon every load, which was then injected at the bottom of the page, potentially damaging search rankings. These attacks highlight severe risks to website administrator privileges and databases, and it is recommended that website administrators immediately update all CMS plugins and monitor for unusual backdoors or database changes.",
    tags_en: ["CISA", "Joomla", "Widget Factory", "CVE-2026-48907", "Improper Access Control", "KEV", "WordPress", "Supply Chain Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cisa-warns-of-actively-exploited-joomla.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-025",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟確認修補「RoguePlanet」零日漏洞：影響 Windows 10/11 Defender 權限提升風險",
    summary: "資安研究人員「Nightmare Eclipse」公開了一個名為「RoguePlanet」的零日漏洞，該漏洞被追蹤為 CVE-2026-50656。此漏洞存在於 Microsoft Defender 引擎，允許攻擊者透過一個競態條件（race condition）在已修補的 Windows 10 和 Windows 11 設備上，以 SYSTEM 權限啟動命令提示字元。該 PoC 攻擊程式碼聲稱在實時保護開啟或關閉時均有效。微軟已確認知悉此漏洞，並已指派 CVE-2026-50656 編號，並正在積極開發安全修補程式。雖然微軟尚未承認 Nightmare Eclipse 是發現者，但已承諾提供高品質的安全更新。實務上，用戶應密切關注微軟官方公告，並儘快應用修補程式，以防範此類權限提升攻擊。由於此漏洞涉及核心防禦機制，建議企業應強化 EDR/SIEM 監控，並考慮進行漏洞模擬測試。",
    tags: ["Microsoft Defender", "RoguePlanet", "CVE-2026-50656", "Windows 10", "Windows 11", "零日漏洞", "權限提升"],
    title_en: "Microsoft Confirms Patch for 'RoguePlanet' Zero-Day Vulnerability: Affecting Windows 10/11 Defender Privilege Escalation Risk",
    summary_en: "Cybersecurity researcher 'Nightmare Eclipse' disclosed a zero-day vulnerability named 'RoguePlanet', tracked as CVE-2026-50656. This vulnerability exists in the Microsoft Defender engine, allowing an attacker to spawn a command prompt with SYSTEM privileges on patched Windows 10 and Windows 11 devices via a race condition. The PoC exploit code claims to be effective whether real-time protection is enabled or disabled. Microsoft has acknowledged this vulnerability, assigned it CVE-2026-50656, and is actively developing a security patch. Although Microsoft has not credited Nightmare Eclipse as the discoverer, they have committed to providing a high-quality security update. Practically, users should closely monitor official Microsoft announcements and apply patches promptly to prevent this type of privilege escalation attack. Since this vulnerability involves core defense mechanisms, enterprises are advised to strengthen EDR/SIEM monitoring and consider conducting vulnerability simulation testing.",
    tags_en: ["Microsoft Defender", "RoguePlanet", "CVE-2026-50656", "Windows 10", "Windows 11", "Zero-Day Vulnerability", "Privilege Escalation"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/microsoft-working-on-defender-patch-for-rogueplanet-zero-day", lang: "EN" }
    ]
  },
  {
    id: "20260617-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安研究揭露：RaaS 駭客組織 INC 如何透過掌握基本攻擊手法，持續威脅醫療等高壓產業",
    summary: "資安廠商 Acronis 透過研究報告，揭露了名為 INC 的勒索軟體駭客組織。該組織自 2023 年出現，已聲稱攻擊超過 800 個受害者，並在 ALPHV/BlackCat 和 LockBit 等大型勒索軟體集團受挫後崛起。INC 屬於雙重勒索（Double Extortion）攻擊者，透過加密和資料外洩威脅，主要鎖定製造、法律、醫療等具有高度敏感資料的產業。研究指出，INC 的成功關鍵在於其攻擊的「可擴展性」和「專注於高壓產業」，而非技術創新。其入侵手法包括使用魚叉式網路釣魚、透過初始存取經紀商獲取有效帳號，並利用已知的漏洞，例如 Citrix Bleed 2 (CVE-2025-5777)、SimpleHelp RMM (CVE-2024-57727) 和 Citrix Netscaler (CVE-2023-3519) 等。一旦進入，他們使用標準的攻擊流程，如 pings、cmd.exe 進行偵測，透過 Living-off-the-land binaries 進行橫向移動，並使用 Rust 重寫的惡意程式進行資料竊取。Acronis 建議受害者應實施 3-2-1 備份原則，確保備份離線或不可變更，並優先強化邊界存取控制，減少外部暴露。",
    tags: ["INC", "Ransomware", "RaaS", "雙重勒索", "CVE-2025-5777", "醫療產業", "攻擊手法"],
    title_en: "Cybersecurity Research Reveals: How RaaS Hacker Group INC Continues to Threaten High-Pressure Industries Like Healthcare Using Basic Attack Techniques",
    summary_en: "Cybersecurity vendor Acronis released a research report exposing a ransomware group named INC. This group, which emerged in 2023, has claimed to attack over 800 victims, rising to prominence after major ransomware groups like ALPHV/BlackCat and LockBit faced setbacks. INC is a Double Extortion attacker, threatening victims through encryption and data leakage, primarily targeting industries with highly sensitive data, such as manufacturing, legal, and healthcare. The research indicates that INC's success hinges on the 'scalability' and 'focus on high-pressure industries' of its attacks, rather than technical innovation. Their intrusion methods include spear-phishing, obtaining valid accounts through initial access brokers, and exploiting known vulnerabilities, such as Citrix Bleed 2 (CVE-2025-5777), SimpleHelp RMM (CVE-2024-57727), and Citrix Netscaler (CVE-2023-3519). Once inside, they use standard attack procedures, such as pings and cmd.exe for reconnaissance, lateral movement using Living-off-the-land binaries, and exfiltrating data using malware rewritten in Rust. Acronis advises victims to implement the 3-2-1 backup principle, ensuring backups are offline or immutable, and to prioritize strengthening perimeter access controls to reduce external exposure.",
    tags_en: ["INC", "Ransomware", "RaaS", "Double Extortion", "CVE-2025-5777", "Healthcare Industry", "Attack Techniques"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/inc-ransomware-thrives-by-mastering-the-basics", lang: "EN" }
    ]
  },
  {
    id: "20260617-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "「FortiBleed」大規模資安攻擊：駭客竊取超過 3 萬 Fortinet 設備憑證，警告企業立即更換密碼",
    summary: "資安研究機構 SOCRadar 揭露一場名為「FortiBleed」的大規模資安攻擊，駭客正在針對全球各地的 Fortinet 防火牆和 VPN 閘道器進行憑證收穫（Credential Harvesting）。攻擊者已建立一個包含超過 30,791 個設備的有效登入憑證資料庫，這些憑證涵蓋來自 194 個國家、包括政府、電信、醫療、金融等關鍵產業的組織。研究指出，此次攻擊並非利用 Fortinet 的零日漏洞，而是純粹的憑證竊取行動。攻擊成功的主要原因，是許多受害組織的設備使用了預設、通用或長期未更換的弱密碼帳號。攻擊鏈是自動化的，駭客透過掃描、憑證重用和密碼噴灑等方式，不斷利用已竊取的憑證來入侵更多設備，形成自我持續的攻擊模型。SOCRadar 強烈警告，任何使用 Fortinet 產品的組織應立即將其網路邊界視為已遭入侵，並採取行動：立即更換所有管理和 VPN 憑證，並在所有遠端存取和管理帳號上啟用多因素驗證（MFA）。",
    tags: ["Fortinet", "FortiBleed", "憑證竊取", "資安攻擊", "VPN", "密碼管理"],
    title_en: "Major Cybersecurity Attack 'FortiBleed': Hackers Steal Credentials for Over 30,000 Fortinet Devices, Warning Enterprises to Change Passwords Immediately",
    summary_en: "Cybersecurity research firm SOCRadar has revealed a large-scale cybersecurity attack dubbed 'FortiBleed,' where hackers are targeting Fortinet firewalls and VPN gateways globally for credential harvesting. The attackers have established a database of valid login credentials covering over 30,791 devices, belonging to organizations in 194 countries, including critical sectors such as government, telecommunications, healthcare, and finance. The research indicates that this attack does not exploit a zero-day vulnerability in Fortinet, but is purely a credential theft operation. The primary reason for the attack's success is that many victim organizations' devices utilized weak passwords—default, generic, or those that have not been changed for long periods. The attack chain is automated; hackers continuously use the stolen credentials to breach more devices through scanning, credential reuse, and password spraying, forming a self-sustaining attack model. SOCRadar strongly warns that any organization using Fortinet products should immediately treat its network perimeter as compromised and take action: immediately change all management and VPN credentials, and enable Multi-Factor Authentication (MFA) on all remote access and management accounts.",
    tags_en: ["Fortinet", "FortiBleed", "Credential Harvesting", "Cybersecurity Attack", "VPN", "Password Management"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/sweeping-credential-harvesting-heist-compromises-30k-fortinet-devices", lang: "EN" }
    ]
  },
  {
    id: "20260617-028",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型加密錢包竊取木馬分析：CryptoClipper利用Tor和剪貼簿竊取資產",
    summary: "安全專家發現一種Windows基的加密錢包竊取木馬（CryptoClipper），該惡意軟體自2026年2月開始活躍。該木馬利用Windows Script Host和ActiveX邏輯，部署一個便攜式Tor客戶端，透過本地SOCKS5代理進行通訊。其攻擊行為包括高頻率竊取剪貼簿資料、擷取螢幕截圖、以及替換用戶複製的錢包地址。該木馬不依賴傳統安裝程式或暴露的IP C2，而是將金錢動機的竊取器轉化為輕量級的後門。初始入侵點為惡意的.lnk快捷檔，這些快捷檔常透過USB儲存設備傳播，並啟動一個包含蠕蟲組件和竊取器的惡意載荷。竊取器運行時會檢查環境，若偵測到Task Manager則退出；成功後，它會持續監控剪貼簿，提取符合錢包模式的種子短語和私鑰，並透過Tor上傳螢幕截圖。防禦建議應關注行為層面信號，例如腳本解釋器啟動可疑子程序、localhost:9050代理使用、PowerShell中的螢幕擷取指令，以及剪貼簿檢查或加密地址替換行為。",
    tags: ["CryptoClipper", "Windows", "Tor", "剪貼簿竊取", "惡意軟體", "LNK 快捷檔"],
    title_en: "Analysis of New Encryption Wallet Stealing Malware: CryptoClipper Uses Tor and Clipboard to Steal Assets",
    summary_en: "Security experts have discovered a Windows-based encryption wallet stealing malware (CryptoClipper) that has been active since February 2026. The malware utilizes Windows Script Host and ActiveX logic to deploy a portable Tor client, communicating via a local SOCKS5 proxy. Its attack behavior includes high-frequency clipboard data theft, screen capturing, and replacing wallet addresses copied by the user. The malware does not rely on traditional installers or exposed IP C2, instead transforming the money-motivated stealer into a lightweight backdoor. The initial point of entry is a malicious .lnk shortcut file, which often propagates via USB storage devices and launches a malicious payload containing a worm component and the stealer. When running, the stealer checks the environment and exits if Task Manager is detected; upon success, it continuously monitors the clipboard, extracting seed phrases and private keys matching wallet patterns, and uploads screenshots via Tor. Defensive recommendations should focus on behavioral indicators, such as suspicious subprocesses launched by script interpreters, the use of the localhost:9050 proxy, screen capture commands in PowerShell, and behaviors like clipboard checking or encrypted address replacement.",
    tags_en: ["CryptoClipper", "Windows", "Tor", "Clipboard Theft", "Malware", "LNK Shortcut"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/17/crypto-clipper-uses-tor-worm-like-propagation-for-persistence-control", lang: "EN" }
    ]
  },
  {
    id: "20260617-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟確認 Defender 零日漏洞 RoguePlanet (CVE-2026-50656)，為權限提升缺陷，正積極修補",
    summary: "微軟正式披露，其正在開發修補程式以解決一個代號為 RoguePlanet 的 Defender 零日漏洞。此漏洞已分配到 CVE-2026-50656，被描述為一個權限提升（privilege escalation）缺陷，CVSS 分數為 7.8。該漏洞存在於 Microsoft Defender 的惡意軟體保護引擎中。該漏洞的 PoC（概念驗證）由安全研究員 Chaotic Eclipse（別名 Nightmare-Eclipse）公開，指出這是一個典型的競態條件（race condition）漏洞，可讓攻擊者取得具有 SYSTEM 權限的 Shell。研究員指出，該 PoC 即使在即時保護關閉或被動模式下，仍有成功運作的可能性。微軟已確認此漏洞，並承諾提供高品質的安全更新。此為 Chaotic Eclipse 披露的第四個 Defender 漏洞，前三個已成功修補。",
    tags: ["Microsoft Defender", "CVE-2026-50656", "RoguePlanet", "權限提升", "零日漏洞", "競態條件"],
    title_en: "Microsoft Confirms Defender Zero-Day Vulnerability RoguePlanet (CVE-2026-50656), Identified as Privilege Escalation Flaw, and is Actively Patching",
    summary_en: "Microsoft has officially disclosed that it is developing a patch to address a zero-day vulnerability in Defender, codenamed RoguePlanet. This vulnerability has been assigned CVE-2026-50656 and is described as a privilege escalation flaw, with a CVSS score of 7.8. The vulnerability resides within the malicious software protection engine of Microsoft Defender. The Proof-of-Concept (PoC) for this vulnerability was published by security researcher Chaotic Eclipse (also known as Nightmare-Eclipse), pointing out that it is a typical race condition vulnerability that could allow an attacker to obtain a SYSTEM-level shell. The researcher noted that the PoC has the potential to operate successfully even when real-time protection is disabled or in passive mode. Microsoft has confirmed this vulnerability and committed to providing a high-quality security update. This is the fourth Defender vulnerability disclosed by Chaotic Eclipse, with the previous three having been successfully patched.",
    tags_en: ["Microsoft Defender", "CVE-2026-50656", "RoguePlanet", "Privilege Escalation", "Zero-Day Vulnerability", "Race Condition"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/microsoft-confirms-rogueplanet-defender_02022423645.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安分析揭示：組織攻擊面過度暴露，資料庫、管理介面與舊有服務是主要風險點",
    summary: "本分析指出，許多組織的攻擊面（Attack Surface）存在過度暴露的風險，這類風險不一定源於零日漏洞，更常來自於不必要的服務公開。研究分析了數千個攻擊面，發現高比例的組織有管理控制台（HTTP panels）、高風險埠口、資料庫和不應公開的資訊暴露。其中，資料庫暴露（如 MySQL 和 Postgres）位居首位，超過四分之一的組織有此風險。此外，API 文件暴露和遠端桌面服務（RDP）也名列前茅，RDP長期以來一直是勒索軟體攻擊的初始入侵點。文章強調，比起單純修補漏洞，更關鍵的防禦策略是進行「攻擊面縮減」（Attack Surface Reduction），即審視哪些服務本來就不應該對外可達，從根本上減少攻擊的入口點。",
    tags: ["攻擊面管理", "資料庫暴露", "RDP", "HTTP panels", "攻擊面縮減", "MySQL", "Postgres"],
    title_en: "Cybersecurity Analysis Reveals: Overexposed Organizational Attack Surface, Databases, Management Interfaces, and Legacy Services are Key Risk Points",
    summary_en: "This analysis points out that many organizations' Attack Surfaces are excessively exposed. This type of risk does not necessarily stem from zero-day vulnerabilities but more often from unnecessary services being publicly exposed. The research analyzed thousands of attack surfaces and found that a high proportion of organizations have exposed management consoles (HTTP panels), high-risk ports, databases, and information that should not be public. Among these, database exposure (such as MySQL and Postgres) ranks highest, with over a quarter of organizations facing this risk. Furthermore, exposed API documentation and Remote Desktop Protocol (RDP) are also prominent. RDP has long been an initial entry point for ransomware attacks. The article emphasizes that rather than simply patching vulnerabilities, the more critical defense strategy is 'Attack Surface Reduction,' which involves reviewing which services should not be externally accessible in the first place, thereby fundamentally reducing potential attack entry points.",
    tags_en: ["Attack Surface Management", "Database Exposure", "RDP", "HTTP panels", "Attack Surface Reduction", "MySQL", "Postgres"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/the-top-10-attack-surface-exposures-in.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-031",
    trackers: ["os"],
    category: "Apple",
    title: "Apple在WWDC 26展示新一代AI開發工具：從提示詞生成到本地端大型模型整合",
    summary: "Apple在WWDC 26上發表了「Inside Apple Intelligence and Xcode: Special Presentation」，展示了開發者如何利用新一代AI工具和框架來建構應用程式。本次展示的重點包括使用單一提示詞（prompt）即可生成包含3D動畫和視覺智慧功能的完整App，並強調了Xcode 27在編碼前提供規劃和提問的能力。開發者可以透過新的Apple Foundation Models框架，將應用程式與Siri AI、Core AI框架以及升級後的MLX框架整合，甚至能整合第三方模型。此外，Apple還展示了在macOS Tahoe 26.2上，利用低延遲的RDMA-over-Thunderbolt技術，讓一個擁有1萬億參數的大型模型（如Kimi 2.6）能在本地端多台Mac Studio上運行，這為未來App的本地AI能力設定了高標準。",
    tags: ["Apple", "WWDC26", "Xcode 27", "Apple Intelligence", "Foundation Models", "macOS Tahoe 26.2", "AI開發"],
    title_en: "Apple Unveils Next-Generation AI Development Tools at WWDC 26: From Prompt Generation to Local Large Model Integration",
    summary_en: "At WWDC 26, Apple presented \"Inside Apple Intelligence and Xcode: Special Presentation,\" demonstrating how developers can build applications using next-generation AI tools and frameworks. Key highlights of this presentation include the ability to generate complete apps—complete with 3D animations and visual intelligence features—from a single prompt, and emphasizing Xcode 27's capability to provide planning and questioning assistance before coding. Developers can integrate applications with Siri AI, the Core AI framework, and the upgraded MLX framework using the new Apple Foundation Models framework, and even integrate third-party models. Furthermore, Apple showcased running a large model with 10 trillion parameters (such as Kimi 2.6) locally on multiple Mac Studio machines running macOS Tahoe 26.2, utilizing low-latency RDMA-over-Thunderbolt technology. This sets a high standard for future local AI capabilities in apps.",
    tags_en: ["Apple", "WWDC26", "Xcode 27", "Apple Intelligence", "Foundation Models", "macOS Tahoe 26.2", "AI开发"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-showcases-its-new-developer-ai-tools-in-impressive-90-minute-presentation", lang: "EN" }
    ]
  },
  {
    id: "20260617-032",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果高管證實：因記憶體供應短缺，未來產品價格將上漲",
    summary: "蘋果執行長提姆·庫克（Tim Cook）在接受《華爾街日報》採訪後證實，由於持續的記憶體（RAM）供應短缺，蘋果的產品價格將不可避免地上漲。庫克指出，記憶體和儲存空間的價格都是公司面臨的問題，特別是 DRAM 市場，他提到分配給用於 AI 伺服器的高頻寬記憶體（HBM）正在推高價格，導致消費者產品的供應減少，價格上漲。庫克表示，公司正在盡力緩解這些成本增加，但現狀已難以持續。雖然庫克未透露具體的漲價時間點或受影響產品，但市場預期Mac和iPad等產品可能較早受到影響。此消息發生在蘋果即將推出新一代產品（如預計九月發布的 iPhone 18）之前，提醒消費者考慮鎖定現有產品的價格。",
    tags: ["Apple", "Tim Cook", "RAM", "記憶體供應鏈", "MacBook", "價格上漲"],
    title_en: "Apple Executive Confirms: Future Product Prices Will Rise Due to Memory Supply Shortages",
    summary_en: "Apple CEO Tim Cook confirmed in an interview with the Wall Street Journal that due to persistent memory (RAM) supply shortages, Apple's product prices will inevitably increase. Cook pointed out that the cost of memory and storage space is a problem for the company, particularly in the DRAM market. He noted that the allocation of high-bandwidth memory (HBM) for AI servers is driving up prices, leading to reduced supply and increased costs for consumer products. Cook stated that the company is doing its best to mitigate these rising costs, but the current situation is unsustainable. Although Cook did not disclose specific price increase timelines or affected products, the market anticipates that products like Mac and iPad may be affected sooner. This news comes just before Apple is set to launch its next generation of products (such as the anticipated iPhone 18 in September), reminding consumers to consider locking in current product prices.",
    tags_en: ["Apple", "Tim Cook", "RAM", "Memory Supply Chain", "MacBook", "Price Increase"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-confirms-price-increases-are-coming-to-its-products-due-to-ram-shortage", lang: "EN" }
    ]
  },
  {
    id: "20260617-033",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Ultra 4 傳聞功能曝光：升級感測器、設計大改與新血壓監測功能",
    summary: "根據供應鏈消息，傳聞中的 Apple Watch Ultra 4 將帶來多項重大升級。硬體方面，預計感測器元件數量將增加一倍，以提升健康數據的精準度與電池續航力，並減少對演算法數據解讀的依賴。此外，該機型預計進行「全面性重新設計」，這是 Ultra 系列自推出以來最大的設計變革。在健康功能方面，Apple 正在準備推出新的高血壓通知功能，雖然目前尚未公開，但預計將在九月的發表會上與 Apple Watch Ultra 4 及 Series 12 一同揭曉。傳聞指出，得益於新的 S 系列晶片或感測器提升，Ultra 4 的電力效率預計將有顯著改善。這些升級涵蓋了健康監測、外觀設計和電池續航力三大面向，預計將在九月正式發表。",
    tags: ["Apple Watch Ultra 4", "Apple Watch", "感測器", "健康監測", "Apple Watch Series 12", "Apple"],
    title_en: "Apple Watch Ultra 4 Rumored Features Revealed: Upgraded Sensors, Major Design Overhaul, and New Blood Pressure Monitoring",
    summary_en: "According to supply chain reports, the rumored Apple Watch Ultra 4 will bring several major upgrades. On the hardware front, the number of sensor components is expected to double to enhance the accuracy of health data and battery life, while reducing reliance on algorithmic data interpretation. Furthermore, the model is rumored to undergo a 'complete redesign,' marking the biggest design change for the Ultra series since its launch. Regarding health features, Apple is preparing to introduce a new high blood pressure notification function. Although not yet public, it is expected to be unveiled alongside the Apple Watch Ultra 4 and Series 12 at the September keynote. Rumors suggest that thanks to the new S-series chip or sensor improvements, the Ultra 4's power efficiency is expected to see significant improvements. These upgrades cover three main areas: health monitoring, aesthetic design, and battery life, and are expected to be officially announced in September.",
    tags_en: ["Apple Watch Ultra 4", "Apple Watch", "Sensor", "Health Monitoring", "Apple Watch Series 12", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-watch-ultra-4-four-rumored-new-features-coming", lang: "EN" }
    ]
  },
  {
    id: "20260617-034",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果預計2027年春季發布iPhone Air 2，升級雙鏡頭與電池續航力",
    summary: "根據報導，蘋果（Apple）計畫於2027年春季推出iPhone Air 2。該機型預計保留現有設計，但在兩個關鍵領域進行升級。主要升級包括在後置鏡頭增加一個超廣角鏡頭，從現有的單一48MP主鏡頭升級為雙鏡頭系統。此外，蘋果也著重提升電池續航力，雖然具體來源（如更大的電池或能效提升）尚未明確。市場普遍認為，增加第二個鏡頭和改善電池續航力是提升用戶體驗的重點，特別是針對現有Air機型單鏡頭系統的用戶抱怨。蘋果的產品線規劃顯示，iPhone Air 2將與iPhone 18和iPhone 18e一同在2027年春季發布。",
    tags: ["Apple", "iPhone Air 2", "iPhone 18", "超廣角鏡頭", "電池續航力", "產品規劃"],
    title_en: "Apple expected to release iPhone Air 2 in Spring 2027, upgrading dual camera and battery life",
    summary_en: "According to reports, Apple plans to launch the iPhone Air 2 in Spring 2027. The model is expected to retain the current design but will feature upgrades in two key areas. The main upgrades include adding an ultra-wide camera to the rear camera, upgrading from the current single 48MP main camera to a dual-camera system. Furthermore, Apple is focusing on improving battery life, although the specific source (such as a larger battery or improved energy efficiency) has not been clarified. The market generally believes that adding a second camera and improving battery life are key points for enhancing user experience, especially addressing user complaints about the current Air model's single-camera system. Apple's product line planning indicates that the iPhone Air 2 will be released alongside the iPhone 18 and iPhone 18e in Spring 2027.",
    tags_en: ["Apple", "iPhone Air 2", "iPhone 18", "Ultra-wide camera", "Battery life", "Product planning"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/iphone-air-2-coming-next-year-with-two-key-upgrades-report", lang: "EN" }
    ]
  },
  {
    id: "20260617-035",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重磅升級：AirPods 支援自訂 EQ、GymKit 擴展至 iPhone，並整合更強大 Siri AI 功能",
    summary: "Apple 在 iOS 27 中為 AirPods 帶來多項重大功能升級。其中最引人注目的是整合了更強大的 Siri AI，使其具備線上資訊檢索、開箱即用的對話式互動，以及根據個人上下文提供相關答案的能力，大幅提升了 AirPods 的智慧穿戴體驗。此外，AirPods 支援自訂 EQ 功能，使用者可精細調整低、中、高頻的音色。GymKit 功能也擴展至 iPhone，讓 AirPods Pro 3 可同步心率數據，與跑步機等健身器材連動，提供更全面的運動數據。另有消息指出，AirPods Pro 3 支援第二代 UWB 晶片，搭配 watchOS 27 的精準尋找功能，可從手腕精確定位 AirPods。這些更新旨在讓 AirPods 不僅是音訊設備，更成為一個多功能的 AI 穿戴裝置。",
    tags: ["iOS 27", "AirPods", "Siri AI", "Custom EQ", "GymKit", "Apple Watch"],
    title_en: "iOS 27 Major Upgrade: AirPods Support Custom EQ, GymKit Extended to iPhone, and Integration of Enhanced Siri AI Features",
    summary_en: "Apple is bringing multiple major feature upgrades to AirPods in iOS 27. The most notable is the integration of a more powerful Siri AI, giving it the ability to perform online information retrieval, out-of-the-box conversational interaction, and provide contextually relevant answers, significantly enhancing the smart wearable experience of AirPods. Furthermore, AirPods support a custom EQ function, allowing users to fine-tune the bass, mid, and treble tones. The GymKit feature has also been extended to iPhone, enabling AirPods Pro 3 to synchronize heart rate data and connect with fitness equipment like treadmills, providing more comprehensive exercise data. Another report indicates that AirPods Pro 3 supports the second-generation UWB chip, which, combined with the precise Find feature in watchOS 27, allows for accurate location tracking of AirPods from the wrist. These updates aim to transform AirPods from merely an audio device into a multi-functional AI wearable device.",
    tags_en: ["iOS 27", "AirPods", "Siri AI", "Custom EQ", "GymKit", "Apple Watch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/heres-everything-new-for-airpods-in-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260617-036",
    trackers: ["os"],
    category: "Apple",
    title: "Apple OS 27 系列更新：macOS、iPadOS、watchOS 與 tvOS 捨棄多款舊型號支援",
    summary: "Apple 在發布 macOS Golden Gate、iPadOS 27、watchOS 27 和 tvOS 27 等新版作業系統時，大幅縮減了對舊型號設備的支援範圍。雖然 iOS 27 和 HomePod 27 仍支援與去年 OS 26 相同的設備群，但其他四大平台均淘汰了多款舊設備。受影響的設備包括：無法運行 macOS Golden Gate 的 MacBook Pro (2020/2019)、iMac (2020)、Mac Pro (2019)；無法運行 iPadOS 27 的 iPad Pro 12.9-inch (第 3 代)、iPad mini 5 等；以及無法運行 watchOS 27 的 Apple Watch Ultra、Series 8、Series 7 等多代款型號。這代表用戶若使用這些舊設備，將無法獲得最新的作業系統功能與安全更新，建議用戶評估設備是否能順利升級至支援的最新版本。",
    tags: ["Apple", "macOS Golden Gate", "iPadOS 27", "watchOS 27", "tvOS 27", "設備支援"],
    title_en: "Apple OS 27 Series Updates: macOS, iPadOS, watchOS, and tvOS Drop Support for Multiple Older Models",
    summary_en: "When releasing new operating systems such as macOS Golden Gate, iPadOS 27, watchOS 27, and tvOS 27, Apple has significantly reduced the range of supported older devices. Although iOS 27 and HomePod 27 still support the same device group as last year's OS 26, the other four major platforms have phased out multiple older devices. Affected devices include: MacBook Pro (2020/2019) and iMac (2020) and Mac Pro (2019), which cannot run macOS Golden Gate; iPad Pro 12.9-inch (3rd generation), iPad mini 5, and others, which cannot run iPadOS 27; and multiple generations of models, including Apple Watch Ultra, Series 8, and Series 7, which cannot run watchOS 27. This means that users with these older devices will not receive the latest operating system features and security updates. Users are advised to evaluate whether their equipment can successfully upgrade to the latest supported version.",
    tags_en: ["Apple", "macOS Golden Gate", "iPadOS 27", "watchOS 27", "tvOS 27", "Device Support"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apples-new-software-drops-support-for-these-16-products", lang: "EN" }
    ]
  },
  {
    id: "20260617-037",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch將搭載Siri AI，watchOS 27確立其主流穿戴式AI產品地位",
    summary: "Apple宣布在watchOS 27中引入Siri AI功能，這被視為Apple Watch自久以來最大的變革。此功能將透過專用的Siri應用程式提供，並旨在讓Apple Watch成為首款主流的穿戴式AI產品。除了Apple Watch本身，Siri AI的生態系統也包含AirPods，能延伸其在螢幕無操作的場景下的使用。文章指出，Apple Watch因其隨時可用的特性，能提供比僅依賴iPhone或AirPods更廣泛的AI互動場景。watchOS 27要求用戶具備Apple Watch Series 9或更新機型，或Apple Watch Ultra 2或更新機型，或Apple Watch SE 3。此舉強化了Apple在穿戴式AI市場的佈局。",
    tags: ["Apple Watch", "watchOS 27", "Siri AI", "Apple Intelligence", "穿戴式AI", "Apple"],
    title_en: "Apple Watch to Feature Siri AI, watchOS 27 Establishes its Position as a Mainstream Wearable AI Product",
    summary_en: "Apple announced the introduction of Siri AI functionality in watchOS 27, which is considered the biggest transformation for the Apple Watch in years. This feature will be provided through a dedicated Siri application and aims to establish the Apple Watch as the first mainstream wearable AI product. Beyond the Apple Watch itself, the Siri AI ecosystem also includes AirPods, extending its use in scenarios without a screen. The article points out that the Apple Watch, due to its always-available nature, can provide a broader AI interaction scenario than relying solely on an iPhone or AirPods. watchOS 27 requires users to have an Apple Watch Series 9 or newer model, or an Apple Watch Ultra 2 or newer model, or an Apple Watch SE 3. This move strengthens Apple's positioning in the wearable AI market.",
    tags_en: ["Apple Watch", "watchOS 27", "Siri AI", "Apple Intelligence", "Wearable AI", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/siri-ai-will-make-the-apple-watch-a-fully-fledged-ai-wearable-in-watchos-27", lang: "EN" }
    ]
  },
  {
    id: "20260617-038",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 天氣 App 升級：新增兩項功能，強化用戶體驗與資訊整合",
    summary: "本文介紹 iOS 27 作業系統中，Apple 天氣 App 將迎來兩項全新功能。這些更新旨在提升用戶獲取天氣資訊的便利性與整合度。雖然原文未提供具體的技術細節或漏洞資訊，但從產品更新的角度來看，這屬於 Apple 平台層面的功能升級。建議用戶在升級至 iOS 27 時，留意這些新增功能，以充分利用作業系統的最新體驗。由於文章內容僅為產品功能介紹，未涉及資安漏洞或修補建議，因此無需提供特定的修補措施。",
    tags: ["Apple", "iOS 27", "Weather App", "作業系統更新", "Apple 生態系"],
    title_en: "iOS 27 Weather App Update: Two New Features Enhance User Experience and Information Integration",
    summary_en: "This article introduces two brand-new features coming to the Apple Weather App within the iOS 27 operating system. These updates aim to improve the convenience and integration of weather information for users. Although the original text does not provide specific technical details or vulnerability information, from a product update perspective, this constitutes a feature upgrade at the Apple platform level. Users are advised to note these new features when upgrading to iOS 27 to fully utilize the latest operating system experience. Since the article content is solely a product feature introduction and does not involve security vulnerabilities or patch recommendations, specific remediation measures are not required.",
    tags_en: ["Apple", "iOS 27", "Weather App", "Operating System Update", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-weather-gets-two-brand-new-features-in-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260617-039",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重大升級：Apple 宣布多達 40 項優化，提升 iPhone 效能與使用者體驗",
    summary: "Apple 最新發布的 iOS 27 系統版本，除了整合 Apple Intelligence 和 Siri AI 等重大功能外，更強調在軟體層面進行了全面的優化，預計能讓 iPhone 的整體操作速度和可靠性顯著提升。根據 Apple 的說明，本次更新涵蓋了超過 40 個優化點，範圍橫跨照片、Safari 瀏覽器、訊息、Apple Music、HomeKit 等多個核心功能。具體優化包括照片新內容載入速度提升高達 70%、Safari 網頁性能及 JavaScript 處理速度提升、AirDrop 傳輸速度提升高達 80%，以及應用程式啟動速度提升高達 30%。這些性能提升甚至對使用較舊型號（如 iPhone 11）的用戶也極具吸引力。目前 iOS 27 正在開發者 Beta 階段，預計將於今年秋季對公眾開放。建議用戶關注 Apple 官方公告，並在正式發布後進行系統更新，以享受更流暢的使用體驗。",
    tags: ["iOS 27", "Apple Intelligence", "iPhone", "系統優化", "Safari", "AirDrop"],
    title_en: "iOS 27 Major Upgrade: Apple Announces Up to 40 Optimizations to Enhance iPhone Performance and User Experience",
    summary_en: "In addition to integrating major features like Apple Intelligence and Siri AI, Apple's newly released iOS 27 system version emphasizes comprehensive software-level optimizations, which are expected to significantly improve the overall operating speed and reliability of iPhones. According to Apple, this update covers over 40 optimization points, spanning multiple core functions including Photos, Safari browser, Messages, Apple Music, and HomeKit. Specific optimizations include up to a 70% increase in photo content loading speed, improved Safari webpage performance and JavaScript processing speed, up to an 80% increase in AirDrop transfer speed, and up to a 30% increase in application launch speed. These performance enhancements are highly appealing even to users with older models (such as the iPhone 11). iOS 27 is currently in the developer Beta phase and is expected to be released to the public this autumn. Users are advised to monitor official Apple announcements and update their systems after the official release to enjoy a smoother user experience.",
    tags_en: ["iOS 27", "Apple Intelligence", "iPhone", "System Optimization", "Safari", "AirDrop"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/ios-27-makes-your-iphone-faster-in-40-ways-heres-the-full-list", lang: "EN" }
    ]
  },
  {
    id: "20260617-040",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 升級：Apple One 訂閱服務強化，提升 AI 存取權與家庭自動化功能",
    summary: "本文介紹 iOS 27 版本將為 Apple One 訂閱用戶帶來多項重大升級。首先，與 Apple Intelligence 相關的功能，如圖像生成等，雖然對所有用戶開放，但部分功能會設有每日使用限制，用戶需升級至 Apple One Premier 或 Family 等更高階方案，才能獲得更高的使用配額。其次，HomeKit Secure Video 將新增四項功能，包括 4K 錄影、影片描述生成、影片內容搜尋等，所有 Apple One 訂閱者皆可享有，但需搭配相容的智慧攝影機和家庭中樞。此外，Apple Music 也迎來多項改進，包括 AutoMix 功能擴展至 Apple TV 和 HomePod，以及 Hi-Res Lossless Audio 串流等。這些更新主要聚焦於提升用戶體驗和服務整合，而非修補核心漏洞，因此無特定的資安修補建議。",
    tags: ["iOS 27", "Apple One", "Apple Intelligence", "HomeKit Secure Video", "Apple Music", "iCloud+"],
    title_en: "iOS 27 Upgrade: Enhanced Apple One Subscription Services Boost AI Access and Home Automation Features",
    summary_en: "This article introduces several major upgrades for Apple One subscribers in the iOS 27 version. First, while features related to Apple Intelligence, such as image generation, are available to all users, some functions will have daily usage limits. Users must upgrade to higher tiers like Apple One Premier or Family to gain higher usage quotas. Second, HomeKit Secure Video will add four new features, including 4K recording, video description generation, and video content search, which are available to all Apple One subscribers, provided they use compatible smart cameras and a home hub. Furthermore, Apple Music receives multiple improvements, including the expansion of the AutoMix feature to Apple TV and HomePod, and Hi-Res Lossless Audio streaming. These updates primarily focus on enhancing user experience and service integration rather than patching core vulnerabilities, thus there are no specific cybersecurity patch recommendations.",
    tags_en: ["iOS 27", "Apple One", "Apple Intelligence", "HomeKit Secure Video", "Apple Music", "iCloud+"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-one-is-getting-better-in-ios-27-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260617-041",
    trackers: ["os"],
    category: "Apple",
    title: "iA Writer 8 重磅更新：搭載 Liquid Glass 設計，提升跨平台一致性與用戶體驗",
    summary: "輕量級文字編輯器 iA Writer 發布了版本 8.0 更新，針對 iPhone、iPad 和 Mac 進行全面介面優化。本次更新的核心亮點是引入了 Liquid Glass 設計風格，讓應用程式的視覺效果能更完美地融入 iOS 26/27 和 macOS Tahoe/Golden Gate 等新系統環境。在圖標方面，iA Writer 移除了手動切換功能，改為自動匹配系統的深色/淺色模式，並更好地支援 Apple 的「透明」外觀選項。除了設計層面的改進，iA Writer 8 還增加了多項實用功能，包括：透過快速搜尋導航文件大綱、新增指令面板（Command Palette）以快速存取格式化和匯出功能、優化檔案庫（Library）以提供更緊湊的瀏覽介面，以及在作者權責（Authorship）功能中顯示作者顏色，提升協作文件的可追蹤性。該版本已在 App Store 上架。",
    tags: ["iA Writer", "Apple", "macOS", "iOS", "Liquid Glass", "文字編輯器"],
    title_en: "iA Writer 8 Major Update: Featuring Liquid Glass Design for Enhanced Cross-Platform Consistency and User Experience",
    summary_en: "The lightweight text editor iA Writer has released version 8.0, featuring comprehensive interface optimizations for iPhone, iPad, and Mac. The core highlight of this update is the introduction of the Liquid Glass design style, allowing the application's visual effects to integrate more seamlessly with new system environments like iOS 26/27 and macOS Tahoe/Golden Gate. Regarding icons, iA Writer has removed the manual switching function, opting instead for automatic matching of the system's dark/light mode, and better supporting Apple's 'transparency' appearance option. Beyond design improvements, iA Writer 8 also adds several practical features, including: quick search navigation through document outlines, a new Command Palette for rapid access to formatting and export functions, an optimized Library for a more compact browsing interface, and displaying author colors within the Authorship feature to improve traceability in collaborative documents. This version is now available on the App Store.",
    tags_en: ["iA Writer", "Apple", "macOS", "iOS", "Liquid Glass", "Text Editor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/ia-writer-8-brings-liquid-glass-design-clear-icon-support-more", lang: "EN" }
    ]
  },
  {
    id: "20260617-042",
    trackers: ["os"],
    category: "Apple",
    title: "Jamf 推出 macOS 原生 AI 治理控制平面，強化企業對 Gen AI 應用程式的監控與控制",
    summary: "Jamf 宣布推出 AI Governance 技術，這項新功能整合至 Jamf Pro，旨在為 IT 與資安團隊提供對管理 Mac 上運行生成式 AI (Gen AI) 工具的全面可見性與控制權。由於許多 AI 工具直接在 Apple Silicon 上作為原生背景程序運行，傳統的網路代理或跨平台端點工具難以監控，導致企業難以掌握資料外洩風險。此功能作為 macOS 原生層級的控制，能解決此痛點。它提供深層工具發現、模型存取、網路權限及檔案系統的細粒度策略控制，並包含供應商控制追蹤引擎，確保企業治理政策能即時跟上 AI 工具的變動。初期支援 Claude Code、Claude Desktop 和 OpenAI Codex 等工具，預計於 6 月 30 日對使用 Jamf Pro 管理 macOS 的組織開放。這有助於企業在允許員工使用新一代 AI 工具的同時，仍能滿足嚴格的合規性要求。",
    tags: ["Jamf Pro", "macOS", "AI Governance", "生成式 AI", "Apple Silicon", "企業安全"],
    title_en: "Jamf Launches macOS Native AI Governance Control Plane to Enhance Enterprise Monitoring and Control of Gen AI Applications",
    summary_en: "Jamf announced the launch of AI Governance technology, a new feature integrated into Jamf Pro. It aims to provide IT and security teams with comprehensive visibility and control over generative AI (Gen AI) tools running on managed Macs. Since many AI tools run directly as native background processes on Apple Silicon, traditional network proxies or cross-platform endpoint tools struggle to monitor them, making it difficult for enterprises to manage data leakage risks. This feature addresses this pain point by operating at the macOS native level of control. It offers deep tool discovery, model access, network permission, and file system granular policy control, and includes a vendor control tracking engine to ensure that enterprise governance policies can keep pace with changes in AI tools. Initial support includes tools such as Claude Code, Claude Desktop, and OpenAI Codex, and is expected to be available to organizations managing macOS with Jamf Pro by June 30th. This helps enterprises meet strict compliance requirements while allowing employees to utilize next-generation AI tools.",
    tags_en: ["Jamf Pro", "macOS", "AI Governance", "Generative AI", "Apple Silicon", "Enterprise Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/jamf-launches-native-ai-governance-control-plane-for-macos", lang: "EN" }
    ]
  },
  {
    id: "20260617-043",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Siri AI 首次開發者測試展示：透過整合多個應用程式，大幅提升個人化資訊檢索與生活效率",
    summary: "本文分享了作者使用 Apple 首次開發者 Beta 版 Siri AI 的實際體驗。Siri AI 能夠透過索引用戶設備上的多個應用程式數據（如照片、日曆、備忘錄、郵件、WhatsApp 等），執行複雜的跨應用程式查詢。例如，它可以根據地點尋找特定活動的照片、綜合日曆和訊息內容判斷朋友的拜訪時間、或從備忘錄和電子郵件中提取活動代碼。在處理跨源資訊時，Siri AI 展現了強大的整合能力，能自動彙整多個來源的資料，例如提供一次旅行的住宿細節。雖然作者指出目前搜尋功能仍傾向於尋找精確關鍵字匹配，而非人類的語義理解，但整體而言，Siri AI 預計將徹底改變用戶使用設備的方式，使「詢問 Siri」成為執行大部分任務的首選起點。",
    tags: ["Apple Intelligence", "Siri AI", "iOS", "macOS", "Apple Maps", "跨應用程式整合"],
    title_en: "Apple Siri AI First Developer Test Showcase: Significantly Enhancing Personalized Information Retrieval and Life Efficiency by Integrating Multiple Applications",
    summary_en: "This article shares the author's hands-on experience using the Apple Beta version of Siri AI. Siri AI is capable of executing complex cross-application queries by accessing data from multiple applications on the user's device (such as Photos, Calendar, Notes, Mail, WhatsApp, etc.). For example, it can find photos of specific events based on location, determine a friend's visit time by synthesizing calendar and message content, or extract activity codes from Notes and emails. When handling cross-source information, Siri AI demonstrates strong integration capabilities, such as providing accommodation details for a trip. Although the author points out that the current search function still tends toward finding precise keyword matches rather than human semantic understanding, overall, Siri AI is expected to completely change how users interact with their devices, making 'asking Siri' the preferred starting point for executing most tasks.",
    tags_en: ["Apple Intelligence", "Siri AI", "iOS", "macOS", "Apple Maps", "Cross-Application Integration"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/seeing-siri-ai-in-action-has-me-excited-for-the-future", lang: "EN" }
    ]
  },
  {
    id: "20260617-044",
    trackers: ["os"],
    category: "Apple",
    title: "利用 Apple Intelligence 篩選通知：用戶呼籲開發者強制分類通知層級，避免垃圾訊息干擾",
    summary: "本文討論了用戶長期以來對於 iOS 通知過載和垃圾訊息困擾的痛點。作者提出，理想的通知系統應能區分「例外（Exceptional）」、「常規（Routine）」和「行銷（Marketing）」三種層級的通知。雖然 Apple 過去已實現許多功能，但尚未強制要求開發者進行通知分類。作者指出，隨著 Apple Intelligence 在 iOS 27 的推出，提供了一個新的解決方案：讓 iPhone 能夠主動攔截並靜默刪除用戶不希望接收的通知。此機制將由 Apple Intelligence 執行，取代開發者自行分類的模式。雖然此方法存在誤判重要通知的風險，但作者認為這與其他 AI 功能帶來的風險類似，最終仍是個人選擇。此提案旨在改善用戶體驗，讓通知系統更具智慧和篩選能力。",
    tags: ["Apple Intelligence", "iOS 27", "通知管理", "用戶體驗", "垃圾訊息", "Apple"],
    title_en: "Using Apple Intelligence to Filter Notifications: Users Call for Developers to Mandate Notification Tiers to Prevent Spam Interference",
    summary_en: "This article discusses the long-standing pain point of iOS notification overload and spam. The author proposes that an ideal notification system should be able to distinguish between three tiers of notifications: 'Exceptional,' 'Routine,' and 'Marketing.' Although Apple has implemented many features in the past, it has not mandated developers to categorize notifications. The author points out that with the introduction of Apple Intelligence in iOS 27, a new solution has emerged: allowing the iPhone to proactively intercept and silently delete unwanted user notifications. This mechanism will be executed by Apple Intelligence, replacing the model of developers self-classifying content. While this method carries the risk of misidentifying important notifications, the author argues that this risk is similar to other AI features and ultimately remains a matter of personal choice. This proposal aims to improve the user experience by making the notification system smarter and more capable of filtering.",
    tags_en: ["Apple Intelligence", "iOS 27", "Notification Management", "User Experience", "Spam", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/feature-request-apple-intelligence-provides-a-new-opportunity-to-block-junk-notifications", lang: "EN" }
    ]
  },
  {
    id: "20260617-045",
    trackers: ["os"],
    category: "Apple",
    title: "Apple App Store推出個人化推薦功能，資安專家警告收集用戶所有點擊數據",
    summary: "Apple 近期在 App Store 推出「個人化合集」（Personalized Collections）功能，旨在為用戶提供高度客製化的應用程式推薦。然而，資安研究人員指出，為實現此功能，Apple 正在收集極為廣泛的分析數據，包括記錄用戶每一次的點擊行為。這項功能雖然提升了用戶體驗，但其背後收集的數據範圍極廣，涉及用戶的詳細使用行為軌跡。實務影響在於，用戶的每一次互動都可能被追蹤和分析，引發隱私隱憂。目前原文未提供具體修補建議，但建議用戶留意 Apple 相關的隱私權政策，並審慎評估個人數據的分享範圍。",
    tags: ["Apple", "App Store", "個人化推薦", "數據隱私", "用戶行為追蹤"],
    title_en: "Apple App Store Launches Personalized Recommendations Feature; Cybersecurity Experts Warn of Comprehensive User Click Data Collection",
    summary_en: "Apple recently introduced the 'Personalized Collections' feature in the App Store, designed to provide users with highly customized application recommendations. However, cybersecurity researchers point out that to enable this function, Apple is collecting extremely broad analytical data, including recording every user click. While this feature enhances user experience, the scope of data collection is extensive, involving detailed user behavioral tracking. The practical implication is that every user interaction may be tracked and analyzed, raising privacy concerns. Although the original text does not provide specific remediation advice, users are advised to pay attention to Apple's privacy policies and carefully evaluate the scope of personal data sharing.",
    tags_en: ["Apple", "App Store", "Personalized Recommendations", "Data Privacy", "User Behavior Tracking"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/apple-collects-every-tap-to-deliver-app-store-personalized-recommendations", lang: "EN" }
    ]
  },
  {
    id: "20260617-046",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "德國醫療委外服務商 Unimed 遭駭，多家大學附設醫院病患資料外洩，凸顯供應鏈風險",
    summary: "本案事件源於德國醫療帳務委外服務商 Unimed 遭受網路攻擊，導致多家大型大學附設醫院的病患個人資料外洩。受影響的醫院包括弗萊堡、海德堡、科隆及烏姆大學附設醫院等。Unimed 發布公告指出，該公司於 4 月 14 日遭受攻擊，竊取資料範圍主要為帳單爭議溝通紀錄，涉及商業保險、自費及私人醫療補充保險病患的資訊。受影響的資料量級龐大，例如弗萊堡大學附設醫院單獨揭露有 5.4 萬名病患個資外洩。事件再次強調了醫療產業高度依賴第三方供應鏈服務商，一旦該服務商遭駭，將會造成廣泛的資料外洩風險。建議醫院及相關機構應強化對委外服務商的資安審核與監控，以降低供應鏈攻擊的風險。",
    tags: ["Unimed", "德國醫療", "病患資料外洩", "供應鏈攻擊", "醫療資訊安全", "資料外洩"],
    title_en: "German Medical Outsourcing Provider Unimed Hacked, Patient Data Leaked from Multiple University Hospitals, Highlighting Supply Chain Risks",
    summary_en: "The incident originated from Unimed, a German medical billing outsourcing service provider, suffering a cyberattack that led to the leakage of personal patient data from multiple large university hospitals. Affected hospitals include those affiliated with Freiburg, Heidelberg, Cologne, and Ulm universities. Unimed issued a statement indicating that the company was attacked on April 14th, and the stolen data primarily involved billing dispute communication records, pertaining to patients covered by commercial insurance, self-pay, and private supplementary medical insurance. The volume of affected data is massive; for example, Freiburg University Hospital alone disclosed the leakage of 54,000 patient records. This incident once again emphasizes the medical industry's high reliance on third-party supply chain service providers, meaning that if such a service provider is compromised, it can lead to widespread data leakage risks. It is recommended that hospitals and related institutions strengthen their cybersecurity audits and monitoring of outsourcing service providers to mitigate the risks of supply chain attacks.",
    tags_en: ["Unimed", "German Healthcare", "Patient Data Leakage", "Supply Chain Attack", "Medical Information Security", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176679", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-047",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究人員揭露FIFA後端API漏洞：透過身分授權機制缺陷，可劫持世界盃轉播影像及竄改賽事資料",
    summary: "一名研究人員發現國際足球協會（FIFA）後端平臺API存在嚴重漏洞。該漏洞源於身分與授權機制設計缺陷，允許未經授權的外部人員透過特定的流程（如FIFA經紀人網站）進入內部系統，並存取本應受限的串流管理控制臺及轉播員資訊系統。攻擊者無需繞過前端App的權限檢查，即可直接透過後端API存取這些關鍵功能。這使得攻擊者能夠讀取所有賽事實況影像、控制串流設備（如啟動、暫停），甚至可能劫持攝影機畫面，或在影像傳輸至電視網前進行置換。更嚴重的是，攻擊者可編輯賽事比分、轉播員講稿及球員出賽資料，這些資訊將會直接顯示在電視直播畫面。研究人員指出，FIFA在接獲通報後雖已修補漏洞，但缺乏公開的資安通報管道，且未主動聯繫通報者，凸顯了其資安流程的重大缺陷。",
    tags: ["FIFA", "API 漏洞", "身分授權機制", "串流管理", "後端安全", "JWT"],
    title_en: "Researcher Exposes FIFA Backend API Vulnerability: Hijacking World Cup Broadcast Footage and Tampering with Match Data via Authentication Flaw",
    summary_en: "A researcher discovered a critical vulnerability in the International Federation of Association Football (FIFA)'s backend platform API. The vulnerability stems from a flaw in the identity and authorization mechanism, which allows unauthorized external personnel to access internal systems and restricted streaming management consoles and broadcast crew information systems through specific processes (such as the FIFA agent website). Attackers can access these critical functions directly via the backend API without needing to bypass the frontend app's permission checks. This enables attackers to read all match live footage, control streaming equipment (such as starting or pausing streams), and potentially hijack camera feeds or substitute images before they are transmitted to television networks. More critically, attackers can edit match scores, broadcast scripts, and player appearance data—information that would be displayed directly on live television broadcasts. The researcher noted that although FIFA patched the vulnerability after receiving notification, the organization lacks a public security disclosure channel and failed to proactively contact the reporter, highlighting significant deficiencies in its cybersecurity processes.",
    tags_en: ["FIFA", "API Vulnerability", "Identity and Authorization Mechanism", "Streaming Management", "Backend Security", "JWT"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176691", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-048",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "惡意擴充套件「PromptSnatcher」：廣告攔截工具偽裝竊取使用者與生成式AI的對話內容",
    summary: "資安研究專案MalExt Sentry揭露，部分看似正常的瀏覽器擴充套件，如Smart Adblocker和Adblock for Browser，可能被惡意利用。這些擴充套件雖然提供廣告攔截功能，但其客製化攔截引擎被發現用於竊取使用者與多種生成式AI服務的互動內容。受影響的AI平臺包括ChatGPT、Gemini、Claude、Copilot、Grok、Perplexity、DeepSeek和Meta AI等八種。惡意行為不僅收集對話內容，還會檢查使用者在這些AI平臺上的訂閱層級，並將所有資料傳送至遠端伺服器。此案例警示，瀏覽器擴充套件已成為收集敏感AI對話內容的潛在管道。使用者在使用生成式AI服務或下載擴充套件時，必須提高警覺，注意權限與資料傳輸的風險。",
    tags: ["MalExt Sentry", "生成式AI", "瀏覽器擴充套件", "PromptSnatcher", "ChatGPT", "Gemini", "資料竊取"],
    title_en: "Malicious Extension 'PromptSnatcher': Ad-blocking Tool Disguised to Steal User and Generative AI Conversation Content",
    summary_en: "Security research project MalExt Sentry revealed that certain seemingly normal browser extensions, such as Smart Adblocker and Adblock for Browser, can be maliciously exploited. Although these extensions provide ad-blocking functionality, their customized filtering engines were found to be used to steal user interaction content with various generative AI services. Affected AI platforms include ChatGPT, Gemini, Claude, Copilot, Grok, Perplexity, DeepSeek, and Meta AI, totaling eight platforms. The malicious activity not only collects conversation content but also checks the user's subscription level on these AI platforms, transmitting all data to a remote server. This case serves as a warning that browser extensions have become a potential vector for collecting sensitive AI conversation content. Users must heighten their vigilance when using generative AI services or downloading extensions, paying attention to permission and data transmission risks.",
    tags_en: ["MalExt Sentry", "Generative AI", "Browser Extension", "PromptSnatcher", "ChatGPT", "Gemini", "Data Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176689", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-049",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "JetBrains市場惡意插件竊取AI API金鑰；Chrome擴充功能也實施「提示竊取」攻擊",
    summary: "資安研究人員發現JetBrains Marketplace上存在一場協調的惡意活動，多達15個插件偽裝成AI編碼助手，旨在竊取用戶輸入的AI服務提供商API金鑰。這些插件要求用戶在設定面板輸入如OpenAI、DeepSeek等服務的API金鑰，雖然功能看似正常，但實際上會將金鑰透過明文HTTP請求竊取到攻擊者控制的遠端伺服器。此外，文章還揭露了兩款名為Smart Adblocker和Adblock for Browser的Chrome擴充功能，它們偽裝成廣告攔截器，實施「提示竊取」（Prompt Poaching）攻擊，能夠記錄用戶與ChatGPT、Claude、Gemini等主流AI聊天機器人的非公開對話內容、模型使用紀錄和帳戶層級元數據。這兩類攻擊共同顯示了駭客正透過開發者環境和瀏覽器擴充功能，從開源生態系統竊取高價值的AI服務憑證和用戶私密對話。",
    tags: ["JetBrains Marketplace", "AI API金鑰", "惡意插件", "Chrome擴充功能", "Prompt Poaching", "開源生態系統"],
    title_en: "JetBrains Marketplace Malicious Plugins Steal AI API Keys; Chrome Extensions Also Implement 'Prompt Poaching' Attacks",
    summary_en: "Security researchers have discovered a coordinated malicious campaign on the JetBrains Marketplace involving up to 15 plugins disguised as AI coding assistants. These plugins require users to input API keys for AI service providers such as OpenAI and DeepSeek in the settings panel. While appearing functional, they actually steal the keys via plaintext HTTP requests to a remote server controlled by attackers. Furthermore, the article reveals two Chrome extensions, named Smart Adblocker and Adblock for Browser. These extensions disguise themselves as ad blockers and execute 'Prompt Poaching' attacks, capable of recording users' private conversations, model usage history, and account-level metadata with major AI chatbots like ChatGPT, Claude, and Gemini. These two types of attacks collectively demonstrate that hackers are stealing high-value AI service credentials and private user conversations from the open-source ecosystem via developer environments and browser extensions.",
    tags_en: ["JetBrains Marketplace", "AI API Keys", "Malicious Plugins", "Chrome Extensions", "Prompt Poaching", "Open-Source Ecosystem"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/malicious-jetbrains-plugins-steal-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-050",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AI框架Mastra生態系統遭供應鏈攻擊：144個npm套件被植入資訊竊取惡意程式",
    summary: "知名的AI應用開發框架Mastra的生態系統遭遇一場代號為easy-day-js的供應鏈攻擊。攻擊者透過劫持一位前貢獻者（ehindero）的npm帳號，在短時間內向Mastra命名空間下的多達144個npm套件中，自動植入了第三方依賴庫「easy-day-js」。該惡意套件模仿日期庫dayjs，但在安裝後（postinstall hook）會觸發一個混淆的載入器（loader）。此載入器會禁用TLS驗證，並從攻擊者控制的伺服器下載第二階段的資訊竊取惡意程式。該惡意程式具備跨平台能力，可竊取瀏覽器歷史記錄、超過160個加密貨幣錢包擴充功能資料，並在Windows、macOS和Linux上建立持久性。由於Mastra在AI開發和雲基礎設施的交匯點，其套件安裝環境極為敏感，任何安裝過受影響版本的工作站、CI執行器或建構環境都應視為潛在受損。建議立即回滾至安全版本，並輪換所有相關憑證。",
    tags: ["npm", "Mastra", "供應鏈攻擊", "easy-day-js", "資訊竊取", "開源安全"],
    title_en: "Mastra AI Framework Ecosystem Suffers Supply Chain Attack: 144 npm Packages Implanted with Information Theft Malware",
    summary_en: "The ecosystem of Mastra, a well-known AI application development framework, was targeted by a supply chain attack codenamed easy-day-js. The attackers compromised the npm account of a former contributor (ehindero) and rapidly implanted the third-party dependency library \"easy-day-js\" into up to 144 npm packages within the Mastra namespace. This malicious package mimics the date library dayjs, but upon installation (via a postinstall hook), it triggers a obfuscated loader. This loader disables TLS verification and downloads a second-stage information theft payload from an attacker-controlled server. The malware is cross-platform, capable of stealing browser history, data from over 160 cryptocurrency wallet extensions, and establishing persistence on Windows, macOS, and Linux. Given that Mastra operates at the intersection of AI development and cloud infrastructure, its package installation environment is highly sensitive. Any workstation, CI runner, or build environment that has installed the affected version should be considered potentially compromised. It is recommended to immediately roll back to a secure version and rotate all related credentials.",
    tags_en: ["npm", "Mastra", "Supply Chain Attack", "easy-day-js", "Information Theft", "Open Source Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/144-mastra-npm-packages-compromised-via.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-051",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy XR 頭戴裝置英國預購開賣，預計 2026 年 7 月 8 日上市",
    summary: "三星 Galaxy XR 頭戴裝置已從美國有限發布擴大至英國市場，並於今日開放預購。該設備搭載 Snapdragon XR+ Gen 2 晶片，配備 4K micro-OLED 螢幕，並提供長達 2.5 小時的電池續航力。雖然原文未提及具體漏洞或安全風險，但該設備基於 Android XR 平台，旨在提供獨立使用體驗，並作為連接 Windows PC（未來可能支援 macOS）的橋樑。硬體規格與先前美國發布的機型完全相同。預計該設備定價為 £1,699，並將於 2026 年 7 月 8 日開始出貨。三星英國亦在多個地點舉辦體驗活動，讓消費者提前了解此 XR 設備。",
    tags: ["Samsung", "Galaxy XR", "Android XR", "Snapdragon XR+ Gen 2", "XR 頭戴裝置", "Windows PC"],
    title_en: "Samsung Galaxy XR Headset Pre-orders Open in UK, Expected to Launch on July 8, 2026",
    summary_en: "The Samsung Galaxy XR headset has expanded its availability from a limited US release to the UK market, with pre-orders opening today. The device is equipped with the Snapdragon XR+ Gen 2 chip, features a 4K micro-OLED screen, and offers up to 2.5 hours of battery life. Although the original text does not mention specific vulnerabilities or security risks, the device is based on the Android XR platform and aims to provide an independent user experience while serving as a bridge to connect with Windows PCs (and potentially macOS in the future). The hardware specifications are identical to the model previously released in the US. The device is expected to be priced at £1,699 and will begin shipping on July 8, 2026. Samsung UK is also hosting experience events at multiple locations, allowing consumers to familiarize themselves with the XR device in advance.",
    tags_en: ["Samsung", "Galaxy XR", "Android XR", "Snapdragon XR+ Gen 2", "XR Headset", "Windows PC"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/the-samsung-galaxy-xr-pre-orders-open-in-uk-available-july-8", lang: "EN" }
    ]
  },
  {
    id: "20260617-052",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安研究揭露：駭客利用假名聲經濟與跨平台營銷，推廣加密貨幣剪貼簿竊取惡意工具",
    summary: "Check Point Research報告揭露了一場新型的網路威脅活動。攻擊者利用一系列看似正規的平台，如主流新聞網站的付費文章、WordPress釣魚頁面、GitHub和SourceForge等開源專案，來營造虛假的「名聲經濟」。他們透過協調的五星好評、虛假的下載量和教學影片，建立惡意的信任感。本次活動的最終目標是推廣一個名為「加密貨幣剪貼簿竊取器」的惡意工具。該工具基於Rust語言，針對Windows和macOS系統，持續監控剪貼簿內容，一旦偵測到符合加密貨幣錢包地址的模式，就會將原始地址替換為攻擊者控制的地址，從而竊取數位資產。攻擊者甚至利用Ghost Networks等服務污染VirusTotal等聲譽系統，並在GitHub上建立多個帳號進行交叉推廣，甚至透過專業的新聞發稿服務進行市場推廣，顯示出攻擊者在操縱公眾信任和平台聲譽方面的高度專業化。",
    tags: ["Check Point Research", "加密貨幣", "剪貼簿竊取器", "Rust", "名聲經濟", "GitHub", "VirusTotal"],
    title_en: "Cybersecurity Research Reveals: Hackers Utilize Fake Reputation Economy and Cross-Platform Marketing to Promote Cryptocurrency Clipboard Stealer Malware",
    summary_en: "A Check Point Research report has revealed a novel cyber threat campaign. Attackers are leveraging a series of seemingly legitimate platforms, such as paid articles on mainstream news websites, WordPress phishing pages, and open-source projects on GitHub and SourceForge, to create a false 'reputation economy.' They establish malicious trust through coordinated five-star reviews, fake download counts, and tutorial videos. The ultimate goal of this campaign is to promote a malicious tool called a 'cryptocurrency clipboard stealer.' This tool, built using the Rust language, targets Windows and macOS systems. It continuously monitors clipboard content, and upon detecting a pattern matching a cryptocurrency wallet address, it replaces the original address with an address controlled by the attackers, thereby stealing digital assets. The attackers even utilized services like Ghost Networks to pollute reputation systems such as VirusTotal, and established multiple accounts on GitHub for cross-promotion, even using professional news distribution services for market promotion. This demonstrates the attackers' highly professional approach to manipulating public trust and platform reputation.",
    tags_en: ["Check Point Research", "Cryptocurrency", "Clipboard Stealer", "Rust", "Reputation Economy", "GitHub", "VirusTotal"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/crypto-clipper-campaign-abuses-fake.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-053",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 螢幕截圖功能升級：AI 處理擴展至雲端，提升功能性但引發隱私疑慮",
    summary: "Google 的 Pixel 螢幕截圖功能（Pixel Screenshots）在版本 1.26.134.11 中進行重大更新。原本所有處理都僅限於裝置端（on-device AI），但現已新增「雲端」處理選項。用戶設定介面已更新，說明資料可在裝置或雲端「安全、隔離的環境」進行處理。此舉讓用戶可以利用 Google 宣布的 Private AI Compute 技術，透過硬體安全認證的封閉雲端環境，結合 Gemini 模型進行更強大的 AI 智能體驗，例如 Magic Cue 和 Recorder 的進一步功能。雖然文章指出 Pixel Screenshots 仍保留了離線處理能力，但功能擴展至雲端，使得用戶必須信任 Google 的雲端處理機制。此變動雖然能提供更多功能，但也引起了資安社群對資料隱私和信任度的擔憂。",
    tags: ["Google Pixel", "Pixel Screenshots", "AI 處理", "Private AI Compute", "Gemini", "Android 系統更新"],
    title_en: "Pixel Screenshot Feature Upgrade: AI Processing Extends to Cloud, Enhancing Functionality but Raising Privacy Concerns",
    summary_en: "Google's Pixel Screenshots feature underwent a major update in version 1.26.134.11. Previously, all processing was limited to the device (on-device AI), but a new 'cloud' processing option has been added. The user settings interface has been updated, stating that data can be processed in a 'secure, isolated environment' on either the device or in the cloud. This allows users to leverage Google's announced Private AI Compute technology, utilizing a hardware-secured, closed cloud environment combined with the Gemini model for enhanced AI intelligence experiences, such as advanced features for Magic Cue and Recorder. Although the article notes that Pixel Screenshots retains offline processing capability, the expansion of functionality to the cloud requires users to trust Google's cloud processing mechanism. While this change provides more features, it has also raised concerns within the cybersecurity community regarding data privacy and trust.",
    tags_en: ["Google Pixel", "Pixel Screenshots", "AI Processing", "Private AI Compute", "Gemini", "Android System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/pixel-screenshots-cloud-ai", lang: "EN" }
    ]
  },
  {
    id: "20260617-054",
    trackers: ["os"],
    category: "Android",
    title: "Android Auto 突然移除 Facebook Messenger App 支援，用戶無法在車載系統使用訊息功能",
    summary: "部分 Android Auto 用戶發現，Facebook Messenger App 已突然從車載顯示器和手機啟動器中消失，無法在車內使用訊息功能。這項變動讓許多習慣在通勤時使用該 App 接收訊息的用戶感到困擾。雖然 Google 尚未發布官方說明，但用戶已在 Google 論壇上報告此問題。目前確認的 App 版本為 Facebook Messenger v565.0.0.43.88。雖然直接的 App 圖標和功能已移除，但 Android Auto 的通知介面仍支援接收 Messenger 的通知，只是缺乏直接的過濾器。用戶應留意 Google 或 Meta 是否會發布修復或更新，以恢復完整的車載訊息體驗。",
    tags: ["Android Auto", "Facebook Messenger", "Meta", "車載系統", "App 移除", "Android 平台"],
    title_en: "Android Auto Suddenly Removes Facebook Messenger App Support, Preventing Users from Using Messaging Features in Vehicle Systems",
    summary_en: "Some Android Auto users have noticed that the Facebook Messenger App has suddenly disappeared from the in-car display and phone launcher, making it impossible to use messaging features while driving. This change has inconvenienced many users who are accustomed to using the App to receive messages during their commute. Although Google has not issued an official statement, users have reported this issue on the Google forum. The currently confirmed App version is Facebook Messenger v565.0.0.43.88. Although the direct App icon and functionality have been removed, Android Auto's notification interface still supports receiving Messenger notifications, though it lacks a direct filter. Users should monitor Google or Meta for any patches or updates that may restore the complete in-car messaging experience.",
    tags_en: ["Android Auto", "Facebook Messenger", "Meta", "In-Vehicle System", "App Removal", "Android Platform"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/android-auto-has-suddenly-lost-its-facebook-messenger-app", lang: "EN" }
    ]
  },
  {
    id: "20260617-055",
    trackers: ["os"],
    category: "Android",
    title: "華為榮耀（Honor）預告基於 Android 17 的 MagicOS 11，設計風格高度模仿 Apple Liquid Glass",
    summary: "本文報導華為榮耀（Honor）預告了其基於 Android 17 的 MagicOS 11 更新。該更新的設計語言被觀察到高度模仿 Apple 的 Liquid Glass 風格，展現了水滴狀按鈕、光線折射和發光效果等元素。雖然 Google 官方表示 Liquid Glass 不會出現在 Pixel 設備上，但這類設計趨勢在 Android 品牌中並非首次。目前，Honor 正在其 Magic 8 系列（包括 Magic 8、Magic 8 Pro 等）上測試此更新，預計今年稍晚會推廣至其他 Honor 設備。這顯示了 Android 品牌在 UI/UX 設計上持續追隨主流蘋果生態系統的趨勢。由於文章為產品預告，未提供具體漏洞或安全資訊，修補建議為關注官方發布的系統更新。",
    tags: ["Honor", "Android 17", "MagicOS 11", "Apple", "Liquid Glass", "UI/UX"],
    title_en: "Huawei Honor Teases MagicOS 11 Based on Android 17, With Design Highly Mimicking Apple Liquid Glass",
    summary_en: "This article reports that Huawei Honor has teased an update called MagicOS 11, which is based on Android 17. The design language of this update has been observed to highly mimic Apple's Liquid Glass style, featuring elements such as droplet-shaped buttons, light refraction, and glowing effects. Although Google officially stated that Liquid Glass will not appear on Pixel devices, this design trend is not new among Android brands. Honor is currently testing this update on its Magic 8 series (including the Magic 8 and Magic 8 Pro), and it is expected to be rolled out to other Honor devices later this year. This demonstrates the trend of Android brands continuously following the mainstream Apple ecosystem in UI/UX design. Since this article is a product preview and does not provide specific vulnerabilities or security information, the remediation advice is to monitor official system updates.",
    tags_en: ["Honor", "Android 17", "MagicOS 11", "Apple", "Liquid Glass", "UI/UX"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/honor-android-17-magic-os-11-liquid-glass-teaser", lang: "EN" }
    ]
  },
  {
    id: "20260617-056",
    trackers: ["os"],
    category: "Android",
    title: "Android 17大幅升級「Android Switch」工具，提升跨平台資料遷移能力",
    summary: "Google在Android 17版本中，大幅升級了用於從iPhone遷移到Android的「Android Switch」工具。此工具的升級旨在提供更全面、更流暢的資料轉移體驗，甚至超越目前在不同Android設備間的遷移能力。新功能包括：Google帳戶同步、包含媒體、貼圖等內容的訊息（SMS、MMS、RCS、iMessage）歷史記錄遷移；主畫面佈局、壁紙等；以及更廣泛的資料類型，如密碼、通行密鑰（passkeys）、Wi-Fi憑證、鬧鐘等。此外，它還支援傳輸呼叫記錄、加密RCS訊息、行事曆附件、檔案資料夾、Apple備忘錄附件及標籤，甚至包含eSIM的遷移（部分電信商尚未支援）。Google表示，此功能從今日開始，將以「小比例」的方式滾動發布，目前僅限於Pixel設備，未來幾週內將擴展至更多非Pixel設備。此舉大幅改善了用戶在跨作業系統或跨品牌設備間轉換時的資料完整性與便利性。",
    tags: ["Android 17", "Android Switch", "iPhone", "資料遷移", "Google Pixel", "RCS", "eSIM"],
    title_en: "Android 17 significantly upgrades 'Android Switch' tool, enhancing cross-platform data migration capabilities",
    summary_en: "In the Android 17 version, Google has significantly upgraded the 'Android Switch' tool used for migrating data from iPhone to Android. This upgrade aims to provide a more comprehensive and smoother data transfer experience, even surpassing current migration capabilities between different Android devices. New features include: Google account synchronization, migration of message history (SMS, MMS, RCS, iMessage) containing media and stickers; home screen layout, wallpapers; and a broader range of data types, such as passwords, passkeys, Wi-Fi credentials, and alarms. Furthermore, it supports transferring call logs, encrypted RCS messages, calendar attachments, file folders, Apple Notes attachments, and labels, even including eSIM migration (though some carriers do not yet support it). Google stated that this feature will begin rolling out today in a 'limited capacity,' currently restricted to Pixel devices, with plans to expand to more non-Pixel devices in the coming weeks. This move significantly improves data integrity and convenience for users switching between operating systems or across different brand devices.",
    tags_en: ["Android 17", "Android Switch", "iPhone", "Data Migration", "Google Pixel", "RCS", "eSIM"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/android-17-iphone-switching-upgrades", lang: "EN" }
    ]
  },
  {
    id: "20260617-057",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google 發表 Android XR Geospatial API：實現具備亞米級精準度的實體世界空間體驗",
    summary: "Google 在 Google I/O 上宣布更新的空間體驗功能，將其 Geospatial API 作為預覽版整合至 ARCore for Jetpack XR。此 API 結合了 Google 的視覺定位系統 (VPS)，使 Android XR 能夠將數位內容錨定到實體世界，並提供亞米級精準度的定位與精確方向。開發者可以利用此 API 結合 Gemini API、Google Maps Grounding 和 Jetpack XR SDK，打造沉浸式的、無需看地圖的步行導覽體驗。技術上，Geospatial API 透過先進的電腦視覺技術，提供比傳統 GPS 更準確的 GeospatialPose（包含緯度、經度與方位角），開發者需監控水平精準度與方位角精準度，確保用戶處於戶外公共空間以維持體驗的準確性。此功能對於開發跨平台、世界級空間應用至關重要。",
    tags: ["Android XR", "Geospatial API", "ARCore", "Google I/O", "VPS", "Jetpack XR SDK", "Gemini API"],
    title_en: "Google Releases Android XR Geospatial API: Enabling Sub-Meter Precision for Real-World Spatial Experiences",
    summary_en: "At Google I/O, Google announced updated spatial experience capabilities, integrating the Geospatial API as a preview into ARCore for Jetpack XR. This API combines Google's Visual Positioning System (VPS), enabling Android XR to anchor digital content to the physical world and provide sub-meter precision positioning and accurate orientation. Developers can utilize this API in conjunction with the Gemini API, Google Maps Grounding, and the Jetpack XR SDK to create immersive, map-free walking navigation experiences. Technically, the Geospatial API uses advanced computer vision technology to provide a GeospatialPose (including latitude, longitude, and bearing) that is more accurate than traditional GPS. Developers must monitor horizontal and heading accuracy to ensure the user remains in an outdoor public space to maintain the experience's accuracy. This feature is crucial for developing cross-platform, world-scale spatial applications.",
    tags_en: ["Android XR", "Geospatial API", "ARCore", "Google I/O", "VPS", "Jetpack XR SDK", "Gemini API"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/06/android-xr-geospatial-api-gemini.html", lang: "EN" }
    ]
  },
  {
    id: "20260617-058",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Google發布Android 17與Pixel Drop：強化AI功能、提升多工處理與資安防護",
    summary: "Google於6月16日正式推出Android 17作業系統，並同步發布Pixel Drop軟體更新。Android 17在使用者體驗上新增了Bubbles氣泡視窗和Screen Reactions功能，提升多工處理與內容創作能力。在安全性方面，新版系統強化了個資權限管理，允許使用者更精細地控制App的資料存取範圍，並提升了Find Hub的「Mark as Lost」功能，即使知曉PIN碼也無法存取資料。此外，系統也強化了Live Threat Detection和Advanced Protection模式，並新增App記憶體使用上限，以改善效能與降低暴力破解風險。Pixel Drop則導入了Gemini Omni用於影片編輯、Lyria 3用於音樂生成，以及Voice Translate等AI功能，擴大了Quick Share與AirDrop的互通性。Android 17已開放給Pixel 6及後續機種，其他品牌裝置將陸續更新。",
    tags: ["Google", "Android 17", "Pixel Drop", "AI功能", "資安防護", "多工處理"],
    title_en: "Google Releases Android 17 and Pixel Drop: Enhancing AI Features, Improving Multitasking, and Strengthening Security",
    summary_en: "Google officially launched Android 17 operating system and simultaneously released the Pixel Drop software update on June 16. Android 17 enhances user experience with the addition of Bubbles window and Screen Reactions features, improving multitasking and content creation capabilities. In terms of security, the new system strengthens personal data permission management, allowing users to control App data access more granularly, and improves the 'Mark as Lost' function in Find Hub, preventing data access even if the PIN is known. Furthermore, the system enhances Live Threat Detection and Advanced Protection modes, and introduces an App memory usage limit to improve performance and reduce brute-force attack risks. Pixel Drop introduces Gemini Omni for video editing, Lyria 3 for music generation, and Voice Translate, expanding the interoperability of Quick Share and AirDrop with various AI functions. Android 17 is now available for Pixel 6 and subsequent models, with other brand devices to receive updates sequentially.",
    tags_en: ["Google", "Android 17", "Pixel Drop", "AI Features", "Cybersecurity", "Multitasking"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176692", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-059",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AWS推出PQC就緒度掃描工具，協助企業盤點TLS連線的後量子密碼遷移路徑",
    summary: "隨著量子運算技術的發展，傳統加密機制面臨保護力不足的危機，公有雲業者AWS為應對此挑戰，推出了PQC Readiness Scanner。此工具以AWS Config合規套件建置，旨在協助企業盤點和檢查其在AWS環境中，特別是透過Application Load Balancer (ALB)、Network Load Balancer (NLB) 和API Gateway的TLS連線組態。它能持續檢查這些端點是否符合PQC就緒（PQ-ready）安全政策，並評估是否仍允許使用TLS 1.0或TLS 1.1等舊版協定。AWS提醒，PQC金鑰交換演算法僅在TLS 1.3內協商，因此端點必須同時支援TLS 1.3與PQC機制，才能建立後量子安全的連線。雖然AWS提供了掃描工具，但實際的TLS安全政策採用、後量子加密機制的導入與維護，仍需由客戶企業自行規劃與管理。",
    tags: ["AWS", "PQC", "後量子密碼學", "TLS 1.3", "AWS Config", "公有雲安全"],
    title_en: "AWS Launches PQC Readiness Scanner Tool to Help Enterprises Map Post-Quantum Cryptography Migration Paths for TLS Connections",
    summary_en: "As quantum computing technology advances, traditional cryptographic mechanisms face insufficient protection. To address this challenge, public cloud provider AWS has launched the PQC Readiness Scanner. Built using the AWS Config compliance suite, this tool aims to help enterprises inventory and check their TLS connection configurations within the AWS environment, particularly those utilizing Application Load Balancer (ALB), Network Load Balancer (NLB), and API Gateway. It continuously checks whether these endpoints comply with PQ-ready security policies and assesses whether they still permit the use of older protocols like TLS 1.0 or TLS 1.1. AWS notes that PQC key exchange algorithms are only negotiated within TLS 1.3; therefore, endpoints must simultaneously support TLS 1.3 and PQC mechanisms to establish a post-quantum secure connection. Although AWS provides the scanning tool, the actual adoption, implementation, and maintenance of TLS security policies and post-quantum cryptographic mechanisms remain the responsibility of the client enterprise to plan and manage.",
    tags_en: ["AWS", "PQC", "Post-Quantum Cryptography", "TLS 1.3", "AWS Config", "Public Cloud Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176682", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-060",
    trackers: ["eu_cra", "security"],
    category: "前瞻技術",
    title: "UCD主導SHIELD-6G專案：歐盟透過AI強化6G網路安全與韌性",
    summary: "愛爾蘭都柏林大學（UCD）宣布主導SHIELD-6G專案，該專案隸屬於歐盟Horizon Europe架構下的智慧網路與服務聯合事業（SNS JU）。此專案總經費達800萬歐元，目標是開發一個面向6G網路的AI驅動威脅情資平臺。專案匯集了包括法國Thales等國際學術機構與企業，旨在為6G網路建立安全、可靠性與韌性的基礎指引。SHIELD-6G將結合聯邦學習、可解釋AI和數位分身等先進技術，以強化6G網路的即時威脅偵測、合規檢查與多網域環境下的安全防護能力。這反映了歐盟在6G標準與架構發展初期，即同步著重於安全、隱私保護與策略性數位技術供應鏈的佈局。",
    tags: ["6G", "AI", "UCD", "SHIELD-6G", "歐盟", "聯邦學習", "韌性"],
    title_en: "UCD Leads SHIELD-6G Project: EU Enhances 6G Network Security and Resilience via AI",
    summary_en: "University College Dublin (UCD) announced that it will lead the SHIELD-6G project, which is part of the Smart Networks and Services Joint Undertaking (SNS JU) under the EU's Horizon Europe framework. With a total funding of 8 million euros, the project aims to develop an AI-driven threat intelligence platform for 6G networks. The project brings together international academic institutions and companies, including France's Thales, with the goal of establishing foundational guidelines for 6G network security, reliability, and resilience. SHIELD-6G will integrate advanced technologies such as federated learning, explainable AI, and digital twins to enhance real-time threat detection, compliance checking, and security protection capabilities in multi-domain environments for 6G networks. This reflects the EU's early focus on security, privacy protection, and strategic digital technology supply chain planning alongside the development of 6G standards and architecture.",
    tags_en: ["6G", "AI", "UCD", "SHIELD-6G", "EU", "Federated Learning", "Resilience"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176678", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260617-061",
    trackers: ["os"],
    category: "重點關注",
    title: "Mozilla Firefox 採用 zlib-rs 提升安全與效能：深入探討 Rust 實現的壓縮技術變革",
    summary: "Mozilla Firefox 自 151 版本開始，已將 Gzip 壓縮/解壓縮的底層函式庫從傳統 C 語言的 Zlib，替換為基於 Rust 的 zlib-rs 實作。此項技術升級旨在提升記憶體安全性和整體效能。雖然 zlib-rs 被宣傳為「即插即用」的替代品，但其導入過程涉及調整不同壓縮等級的演算法，並曾受 Intel 13th/14th Gen Core CPU 穩定性問題的影響，甚至增加了少量「unsafe」程式碼。然而，最終的 zlib-rs 實作確實帶來了更佳的記憶體安全性和顯著的效能提升，尤其是在 x86_64 架構上。此外，在 AArch64 架構上，zlib-rs 也能比 Apple 提供的 macOS zlib 程式碼進行更精細的調優。這項變革代表了瀏覽器核心元件從 C/C++ 轉向使用 Rust 等現代語言，以應對複雜的硬體穩定性挑戰與提升軟體可靠性的趨勢。",
    tags: ["Mozilla Firefox", "zlib-rs", "Rust", "Gzip", "x86_64", "AArch64", "記憶體安全"],
    title_en: "Mozilla Firefox Adopts zlib-rs to Enhance Security and Performance: An In-Depth Look at the Compression Technology Shift to Rust",
    summary_en: "Starting with version 151, Mozilla Firefox replaced the traditional C language Zlib library for Gzip compression/decompression with a zlib-rs implementation based on Rust. This technical upgrade aims to improve memory safety and overall performance. Although zlib-rs is promoted as a 'plug-and-play' replacement, its integration process involved adjusting algorithms for various compression levels and was previously affected by stability issues with Intel 13th/14th Gen Core CPUs, even introducing a small amount of 'unsafe' code. Nevertheless, the final zlib-rs implementation has indeed delivered better memory safety and noticeable performance improvements, especially on the x86_64 architecture. Furthermore, on the AArch64 architecture, zlib-rs can achieve finer tuning compared to the macOS zlib code provided by Apple. This change represents a trend where browser core components are shifting from C/C++ to modern languages like Rust to address complex hardware stability challenges and enhance software reliability.",
    tags_en: ["Mozilla Firefox", "zlib-rs", "Rust", "Gzip", "x86_64", "AArch64", "Memory Safety"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mozilla-Firefox-zlib-rs-Usage", lang: "EN" }
    ]
  },
  {
    id: "20260617-062",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "未公開",
    tags: [],
    title_en: "N/A",
    summary_en: "N/A",
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/06/17/cyberattack-sees-crops-kept-in-the-ground/5256321", lang: "EN" }
    ]
  },
  {
    id: "20260617-063",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟整合身份與安全訊號，強化防禦AI加速的網路攻擊",
    summary: "隨著人工智慧（AI）的發展，網路攻擊的速度、規模和自主性都大幅提升，身份（Identity）已成為最關鍵的攻擊入口。微軟（Microsoft）強調身份安全不能再孤立運作，必須具備全面的可見度與整合的解決方案。為應對此挑戰，微軟推出了統一的身份風險評分（unified identity risk score），該評分能分析和關聯跨帳戶、會話、工作負載和應用程式的相關訊號，提供單一、全面的身份風險評估。此外，更新後的Microsoft Entra ID Protection體驗將這些風險訊號整合到一個介面，讓管理員能更清楚了解風險的來源和擴散模式。在應對行動方面，微軟透過新的身份專用RBAC角色，讓安全營運團隊（SOC）能在不擁有廣泛管理權限的前提下，執行核心的身份回應動作，實現了「最小權限原則」與「營運效率」的平衡，從而加速了從洞察到回應的流程。",
    tags: ["Microsoft Entra", "身份安全", "AI 攻擊", "身份風險評分", "RBAC", "SOC"],
    title_en: "Microsoft Integrates Identity and Security Signals to Strengthen Defense Against AI-Accelerated Cyber Attacks",
    summary_en: "With the rapid development of Artificial Intelligence (AI), the speed, scale, and autonomy of cyber attacks have significantly increased, making Identity the most critical attack vector. Microsoft emphasizes that identity security cannot operate in isolation; it requires comprehensive visibility and integrated solutions. To address this challenge, Microsoft introduced a unified identity risk score. This score analyzes and correlates signals across accounts, sessions, workloads, and applications, providing a single, comprehensive identity risk assessment. Furthermore, the updated Microsoft Entra ID Protection experience integrates these risk signals into one interface, allowing administrators to better understand the source and propagation pattern of risks. In terms of response capabilities, Microsoft introduced new identity-specific RBAC roles. This allows Security Operations Centers (SOC) to execute core identity response actions without possessing broad administrative privileges, thereby balancing the 'principle of least privilege' with 'operational efficiency,' and accelerating the process from insight to response.",
    tags_en: ["Microsoft Entra", "Identity Security", "AI Attacks", "Identity Risk Score", "RBAC", "SOC"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://techcommunity.microsoft.com/blog/microsoft-entra-blog/ai-is-accelerating-cyberattacks%E2%80%94here%E2%80%99s-how-to-stay-ahead/4528592", lang: "EN" }
    ]
  },
  {
    id: "20260617-064",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Anbox Cloud 推出虛擬化 Android 支援，提供容器與完整系統兩種運行模式",
    summary: "Anbox Cloud 發布 1.30.0 版本，首次支援虛擬化 Android 系統。這項重大升級讓用戶可以在雲端環境中運行完整的 Android 系統映像，並透過輕量級虛擬機（VM）進行管理。此功能擴展了 Anbox Cloud 的能力，但並未取代其原有的容器化 Android 支援。文章指出，容器化 Android 仍適用於需要快速擴展和高密度部署的應用程式層級工作負載；而虛擬化 Android 則解決了需要完整系統控制權的場景，例如客製化 AOSP、汽車原廠系統（AAOS）或 Cuttlefish 映像。透過 VM 運行，用戶可以獲得完整的系統級兼容性，同時仍能利用 Anbox Cloud 的 API 和自動化功能。無論是哪種模式，Anbox Cloud 仍以 LXD 作為基礎，確保了強大的隔離性和資源管理。這使得開發者可以在同一平台內，根據工作負載需求，選擇最適合的運行模式。",
    tags: ["Anbox Cloud", "Android", "虛擬機 (VM)", "容器化", "AOSP", "LXD"],
    title_en: "Anbox Cloud Launches Virtualized Android Support, Offering Both Container and Full System Operating Modes",
    summary_en: "Anbox Cloud has released version 1.30.0, which introduces support for virtualized Android systems for the first time. This major upgrade allows users to run complete Android system images in a cloud environment and manage them through lightweight Virtual Machines (VMs). This feature expands Anbox Cloud's capabilities but does not replace its existing containerized Android support. The article notes that containerized Android remains suitable for application-level workloads requiring rapid scaling and high-density deployment; while virtualized Android addresses scenarios needing full system control, such as customized AOSP, automotive OEM systems (AAOS), or Cuttlefish images. By running via VM, users can achieve full system-level compatibility while still utilizing Anbox Cloud's API and automation features. Regardless of the mode, Anbox Cloud continues to use LXD as its foundation, ensuring strong isolation and resource management. This allows developers to select the most appropriate operating mode on the same platform, depending on their workload requirements.",
    tags_en: ["Anbox Cloud", "Android", "VM", "Containerization", "AOSP", "LXD"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/virtualized-android-comes-to-anbox-cloud", lang: "EN" }
    ]
  },
  {
    id: "20260617-065",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布停產 Nest Mini 與 Nest Audio 智慧音箱，升級至 Google Home 產品線",
    summary: "Google 確認已終止 Nest Mini 和 Nest Audio 這兩款智慧音箱的生產。Nest Mini 自 2019 年推出，曾是入門級的智慧家庭助理；Nest Audio 則於 2021 年推出，提供較佳音質。隨著 Google Home 喇叭的推出，這兩款產品線將被取代。雖然硬體生產已停產，但 Google 保證現有的 Nest Mini 和 Nest Audio 設備仍將持續獲得定期的軟體更新、安全補丁和客戶服務支援。Google 強調，其智慧家庭生態系統仍會持續發展，並將透過 Google Home 喇叭來取代這兩款設備，為用戶提供更完整的體驗。用戶應注意，雖然硬體支援持續，但這兩款舊型號將無法再購買。",
    tags: ["Google", "Nest Mini", "Nest Audio", "Google Home", "智慧音箱", "產品停產"],
    title_en: "Google announces discontinuation of Nest Mini and Nest Audio smart speakers, upgrading to the Google Home product line",
    summary_en: "Google has confirmed the discontinuation of production for the Nest Mini and Nest Audio smart speakers. The Nest Mini, launched in 2019, was an entry-level smart home assistant; the Nest Audio was launched in 2021 and offered superior sound quality. With the introduction of the Google Home speaker, these two product lines will be replaced. Although hardware production has ceased, Google guarantees that existing Nest Mini and Nest Audio devices will continue to receive regular software updates, security patches, and customer service support. Google emphasized that its smart home ecosystem will continue to evolve, and the Google Home speaker will replace these two devices, offering users a more complete experience. Users should note that while hardware support continues, these two older models will no longer be available for purchase.",
    tags_en: ["Google", "Nest Mini", "Nest Audio", "Google Home", "Smart Speaker", "Product Discontinuation"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/google-nest-mini-audio-end-production-discontinued", lang: "EN" }
    ]
  },
  {
    id: "20260617-066",
    trackers: ["os"],
    category: "重點關注",
    title: "Waze 推出世界盃比分提醒功能，用戶反應兩極化，提供關閉設定指南",
    summary: "導航應用程式 Waze 近期推出了一項預設開啟的功能，會在用戶駕駛過程中，以路面危險警報的形式彈出世界盃比賽的即時比分或進球提醒。此功能讓熱門球迷感到興奮，但對於僅需導航的用戶來說，可能會造成過度干擾。雖然官方說明此功能應在車輛靜止時啟用，但有用戶報告在行駛過程中也接收到相關通知。用戶可以透過進入「設定」>「警報與報告」>「報告」路徑，手動關閉「即時比賽」（Live Matches）警報。然而，文章指出此設定在多台 Android 手機和 iPhone 應用程式上都難以找到，可能代表該功能尚未全面發布或 Waze 正在逐步禁用此功能。建議用戶若覺得過於分散注意力，應透過系統設定關閉此警報。",
    tags: ["Waze", "Google", "導航系統", "用戶體驗", "軟體功能更新", "Android Auto"],
    title_en: "Waze introduces World Cup score alerts; user feedback is polarized, offering a guide to disabling the feature",
    summary_en: "The navigation application Waze recently introduced a feature that is enabled by default, which displays real-time World Cup match scores or goal alerts as road hazard warnings while users are driving. While this feature excites passionate fans, it may cause excessive distraction for users who only need navigation. Although the official description states that this feature should be activated when the vehicle is stationary, some users have reported receiving related notifications while driving. Users can manually disable the 'Live Matches' alert by navigating to 'Settings' > 'Alerts & Reports' > 'Reports'. However, the article notes that this setting is difficult to locate on multiple Android phones and iPhone applications, suggesting that the feature may not be fully rolled out or that Waze is gradually disabling it. It is recommended that users who find it too distracting should disable this alert through their system settings.",
    tags_en: ["Waze", "Google", "Navigation System", "User Experience", "Software Feature Update", "Android Auto"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/waze-world-cup-alerts-how-to-turn-off", lang: "EN" }
    ]
  },
  {
    id: "20260617-067",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 相簿擴展 AI 編輯功能至五國，提供文字指令進行照片調整",
    summary: "Google Photos 正在擴大其 AI 驅動的「使用 Ask Photos 編輯」（Edit with Ask Photos）功能。此功能允許使用者透過文字指令（如「移除眩光」或「給照片復古色調」）來進行照片編輯，實現了對照片的對話式調整。該功能最初在美國、澳洲、印度和日本推出，現已擴展至德國、英國、法國、西班牙和義大利這五個新地區。目前，此新擴展功能僅限於 Android 平台，但在美國地區仍可在 iOS 上使用。此更新屬於 Google Photos 的功能擴展，旨在提升使用者在不同地理區域的內容創作體驗。使用者若欲使用此功能，需留意其在不同地區的滾動發布時間表。",
    tags: ["Google Photos", "AI 編輯", "Ask Photos", "Android", "iOS", "功能擴展"],
    title_en: "Google expands AI editing features in Google Photos to five countries, enabling text-prompt photo adjustments",
    summary_en: "Google Photos is expanding its AI-powered \"Edit with Ask Photos\" feature. This functionality allows users to perform photo edits using text prompts (such as \"remove glare\" or \"give the photo a vintage tone\"), enabling conversational photo adjustments. Initially launched in the US, Australia, India, and Japan, the feature has now expanded to five new regions: Germany, the UK, France, Spain, and Italy. Currently, this new expansion is limited to the Android platform, though it remains available on iOS in the US. This update represents a functional expansion of Google Photos, aiming to enhance the content creation experience for users across different geographical regions. Users should note the staggered rollout schedule for this feature across various regions.",
    tags_en: ["Google Photos", "AI Editing", "Ask Photos", "Android", "iOS", "Feature Expansion"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/google-photos-edit-ask-photos-expansion", lang: "EN" }
    ]
  },
  {
    id: "20260617-068",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Calendar 擴增活動顏色選擇，並升級 Google Voice 支援 AI 筆記功能",
    summary: "Google 近期發布兩項生活品質提升更新。首先，Google Calendar 擴展了活動自訂顏色選項，從原先的 11 個預設顏色增加至最多 200 種自訂顏色，使用者可在網頁版和 Calendar API 選擇完整的 RGB 色盤，大幅提升日曆的視覺化組織能力。此功能為長期需求，將逐步在未來幾週內全面開放。其次，針對企業客戶，Google Voice 增添了「為我記錄筆記」（Take notes for me）功能。此功能利用 Gemini AI 技術，除了錄音外，還能轉錄通話內容、總結重點，並整理行動項目，類似 Google Meet 的體驗。通話結束後，文字稿、音訊錄音和筆記將同步存入 Voice 應用程式並透過電子郵件通知。此功能適用於 Voice Standard 和 Voice Premier 附加服務，以及 Voice Standard 單獨方案，並可由管理員在管理控制台進行自訂與配置。",
    tags: ["Google Calendar", "Google Voice", "Gemini AI", "日曆功能", "企業服務", "AI 筆記"],
    title_en: "Google Calendar expands event color selection and upgrades Google Voice with AI note-taking functionality",
    summary_en: "Google recently released two updates aimed at improving user quality of life. First, Google Calendar has expanded the custom color options for events, increasing them from the original 11 default colors to up to 200 custom colors. Users can select from a full RGB palette on both the web version and via the Calendar API, significantly enhancing the visual organization capabilities of the calendar. This feature addresses a long-standing user request and will be rolled out completely over the next few weeks. Second, for enterprise customers, Google Voice has added the \"Take notes for me\" feature. This function utilizes Gemini AI technology to not only record calls but also transcribe the conversation, summarize key points, and organize action items, providing an experience similar to Google Meet. After the call ends, the transcript, audio recording, and notes are synchronized into the Voice application and delivered via email notification. This feature is available with Voice Standard and Voice Premier add-ons, as well as the Voice Standard standalone plan, and can be customized and configured by administrators in the admin console.",
    tags_en: ["Google Calendar", "Google Voice", "Gemini AI", "Calendar Features", "Enterprise Services", "AI Note-taking"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/google-calendar-event-colors", lang: "EN" }
    ]
  },
  {
    id: "20260617-069",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 關閉 Gemini Code Assist 與 Gemini CLI，轉向 Antigravity CLI 打造多代理開發平台",
    summary: "Google 宣布將逐步淘汰其面向消費者的 Gemini Code Assist 和 Gemini CLI 工具。這些工具原用於協助開發者在終端機環境中處理大型程式碼庫、生成應用程式或自動化複雜工作流程。由於市場需求轉向需要多個代理（multi-agent）協同工作來解決複雜問題，Google 決定將資源集中於單一產品：Google Antigravity。Antigravity 被定位為首選的「代理優先」（agent-first）開發平台，並透過 Antigravity CLI 提供全新的終端機體驗。Gemini CLI 和 Gemini Code Assist for GitHub 將於 6 月 18 日關閉，而 Gemini Code Assist for GitHub 的完整服務將於 7 月 17 日終止，所有程式碼審查活動將停止。但值得注意的是，企業用戶的 Gemini Code Assist for GitHub 服務將保持不變。此舉代表 Google 正在調整其 AI 開發工具的戰略方向，強調統一的後端架構來支援複雜的 AI 代理工作流。",
    tags: ["Google", "Gemini Code Assist", "Gemini CLI", "Antigravity CLI", "AI 開發工具", "多代理系統", "開發者工具"],
    title_en: "Google Discontinues Gemini Code Assist and Gemini CLI, Pivoting to Antigravity CLI for a Multi-Agent Development Platform",
    summary_en: "Google announced the phased deprecation of its consumer-facing Gemini Code Assist and Gemini CLI tools. These tools were previously used to assist developers in handling large codebases, generating applications, or automating complex workflows within a terminal environment. Due to a market shift toward solutions requiring multiple agents (multi-agent) to solve complex problems, Google has decided to consolidate resources into a single product: Google Antigravity. Antigravity is positioned as the premier \"agent-first\" development platform, offering a new terminal experience via the Antigravity CLI. The Gemini CLI and Gemini Code Assist for GitHub will be shut down on June 18, with the full service for Gemini Code Assist for GitHub terminating on July 17, ceasing all code review activities. However, enterprise users' Gemini Code Assist for GitHub service will remain unchanged. This move signifies Google's strategic adjustment of its AI development tools, emphasizing a unified backend architecture to support complex AI agent workflows.",
    tags_en: ["Google", "Gemini Code Assist", "Gemini CLI", "Antigravity CLI", "AI Development Tools", "Multi-Agent System", "Developer Tools"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/gemini-cli-code-assist-shutting-down", lang: "EN" }
    ]
  },
  {
    id: "20260617-070",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Vids 擴大 AI 虛擬人功能：免費帳號現享 AI 虛擬人與多語言語音生成",
    summary: "Google 宣布將 AI 虛擬人（AI avatars）功能開放給所有免費帳號用戶，強化其工作空間（Workspace）的影片創作工具 Google Vids。目前 Google Vids 已有七百萬用戶每月使用。這些 AI 虛擬人可作為數位主持人，能根據內容更新進行「重寫腳本」。用戶可從預設的「高品質」虛擬人庫中選擇，或使用 Nano Banana 2 進行客製化生成。免費個人用戶每月可獲得十次影片生成額度，可用於虛擬人或 Veo 影片生成。此外，Google 還增加了能「調整虛擬人情緒」的功能，讓其語氣能精準匹配傳達意圖。付費用戶（包含 AI Pro 和 Ultra）未來將能為投影片內容生成多國語言（如法語、德語、義大利語、日語、韓語、葡萄牙語、西班牙語）的 AI 語音旁白。更進一步，客製化虛擬人甚至可以被指令進行行走、說話，並與指定物件互動，且 Veo 影片生成已移除時長限制，不再限於八秒。",
    tags: ["Google Vids", "AI 虛擬人", "Workspace", "AI 語音", "Nano Banana 2", "Veo"],
    title_en: "Google Vids expands AI avatar features: Free accounts now get access to AI avatars and multi-language voice generation",
    summary_en: "Google announced that it is opening the AI avatars feature to all free account users, enhancing Google Vids, its video creation tool within Google Workspace. Google Vids currently has seven million monthly users. These AI avatars can serve as digital hosts and can \"rewrite scripts\" based on content updates. Users can select from a predefined \"high-quality\" avatar library or use Nano Banana 2 for customized generation. Free individual users receive a monthly quota of ten video generations, usable for avatars or Veo video generation. Furthermore, Google has added a feature to \"adjust the avatar's emotion,\" allowing the tone to precisely match the intended message. Paid subscribers (including AI Pro and Ultra) will eventually be able to generate multi-language AI voiceovers (such as French, German, Italian, Japanese, Korean, Portuguese, and Spanish) for slide content. Furthermore, customized avatars can even be instructed to walk, speak, and interact with specified objects, and the Veo video generation has removed its duration limit, no longer restricted to eight seconds.",
    tags_en: ["Google Vids", "AI avatars", "Workspace", "AI voice", "Nano Banana 2", "Veo"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/17/google-vids-ai-avatars-free", lang: "EN" }
    ]
  },
  {
    id: "20260617-071",
    trackers: ["os"],
    category: "重點關注",
    title: "Baltimore市長支持Towson店員工，要求Apple公平處理關店影響",
    summary: "本篇報導聚焦於Apple即將永久關閉的Towson Town Center零售店，該店是美國最早實現工會化的Apple Store之一。工會IAM Union指控Apple對Towson員工的待遇不公，認為其未能提供與其他兩家關店店鋪相同的轉調機會。Apple方面表示，其與工會的協議僅要求在離Towson店鋪50英里範圍內提供轉調，並為無法轉調的員工提供遣散金，且公司沒有在該範圍內開設新店的計畫。目前，馬里蘭州市長Brandon M. Scott已公開表態支持Towson店員工，呼籲Apple應給予這些員工與非工會店鋪員工相同的機會，並指出Apple的決定不僅影響了員工，也對當地社區造成了衝擊。工會和地方官員持續向Apple施壓，要求其改變關店計畫或改善員工待遇。Apple自4月28日發布聲明後，尚未對此爭議做出進一步評論。",
    tags: ["Apple", "Towson Town Center", "IAM Union", "Brandon M. Scott", "零售店關閉", "勞工權益"],
    title_en: "Baltimore Mayor Supports Towson Store Employees, Calls for Apple to Treat Store Closure Impact Fairly",
    summary_en: "This report focuses on the impending permanent closure of the Apple Store at Towson Town Center, one of the earliest Apple Stores in the US to unionize. The IAM Union accuses Apple of unfair treatment towards Towson employees, arguing that the company failed to provide the same transfer opportunities as the two other closing stores. Apple stated that its agreement with the union only requires transfers within a 50-mile radius of the Towson store, and that it provides severance pay for employees who cannot transfer, noting that the company has no plans to open new stores within that radius. Currently, Baltimore Mayor Brandon M. Scott has publicly stated his support for the Towson employees, urging Apple to give these employees the same opportunities as non-union store employees, and pointing out that Apple's decision affects not only the employees but also the local community. The union and local officials continue to pressure Apple to change its closure plans or improve employee treatment. Apple has not made any further comment on this dispute since issuing a statement on April 28th.",
    tags_en: ["Apple", "Towson Town Center", "IAM Union", "Brandon M. Scott", "Retail Store Closure", "Labor Rights"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/baltimore-mayor-voices-support-for-apple-towson-workers-amid-store-closure-controversy", lang: "EN" }
    ]
  },
  {
    id: "20260617-072",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 更新 ChatGPT 推出「排程任務」功能，提升提醒與自動化工作管理能力",
    summary: "OpenAI 近期更新 ChatGPT，新增「排程任務」（Scheduled tasks）功能，旨在讓使用者能讓 ChatGPT 協助設定提醒、處理週期性工作或進行監控。此功能透過側邊欄新增的專用頁面，讓使用者可以集中查看、設定任務執行時間（如早晨、下午、傍晚），並可進行暫停、恢復、編輯或刪除。排程任務的監控功能甚至能搜尋網路和檢查連線應用程式的變動，並在有值得報告的變動時通知使用者。此新系統將取代現有的「Pulse」主動任務功能，且 Pulse 將在 14 天內移除。此功能目前已對 Plus、Pro、Business 和 Enterprise 等用戶開放。此更新屬於功能性升級，主要提升用戶的自動化工作流程管理能力，並強調任務執行有時段限制（每小時執行一次）。",
    tags: ["OpenAI", "ChatGPT", "排程任務", "自動化", "AI 應用", "SaaS"],
    title_en: "OpenAI Updates ChatGPT with 'Scheduled Tasks' Feature to Enhance Reminders and Automated Workflow Management",
    summary_en: "OpenAI recently updated ChatGPT by adding a 'Scheduled tasks' feature, designed to allow users to have ChatGPT assist with setting reminders, handling periodic work, or performing monitoring. This feature utilizes a dedicated sidebar page, allowing users to centrally view and set task execution times (such as morning, afternoon, or evening), and enabling them to pause, resume, edit, or delete tasks. The scheduled tasks monitoring function can even search the web and check for changes in connected applications, notifying the user when significant changes are detected. This new system will replace the existing 'Pulse' proactive task function, and Pulse will be removed within 14 days. This feature is currently available to users on Plus, Pro, Business, and Enterprise plans. This update is a functional upgrade that primarily enhances the user's automated workflow management capabilities, emphasizing that task execution is time-limited (once per hour).",
    tags_en: ["OpenAI", "ChatGPT", "Scheduled tasks", "Automation", "AI applications", "SaaS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/openai-launches-scheduled-tasks-in-chatgpt-details-here", lang: "EN" }
    ]
  },
  {
    id: "20260617-073",
    trackers: ["os"],
    category: "重點關注",
    title: "CSA發布Matter 1.6與Product Security 1.1：強化智慧家庭跨生態系統協作與安全標準",
    summary: "互聯物標準聯盟（CSA）宣布Matter 1.6和Product Security 1.1的更新。Matter 1.6是一次功能性升級，旨在提升設備在不同生態系統間的互動能力和適應性。主要亮點包括NFC基礎配置（NFC-Based Commissioning），允許設備在未上電前透過NFC進行雙向通訊和配置，極大地便利了大型或預先佈署的場景設置。此外，Matter 1.6引入了Joint Fabric，讓多個用戶授權控制器可以共同管理單一Matter網路，並新增了熱水計表建議（Thermostat Suggestions），使設備能根據用戶偏好和多源輸入進行智能建議，而非直接強制指令。Product Security 1.1則擴展了安全認證範圍，從單一設備擴展至完整的IoT系統，涵蓋設備、應用程式、遠端流程和閘道器，並簡化了符合歐盟RED和新加坡等國際標準的流程，為製造商提供更簡化的全球市場合規性。",
    tags: ["CSA", "Matter 1.6", "Product Security 1.1", "IoT", "智慧家庭", "NFC", "跨平台"],
    title_en: "CSA Releases Matter 1.6 and Product Security 1.1: Enhancing Smart Home Cross-Ecosystem Collaboration and Security Standards",
    summary_en: "The Connectivity Standards Alliance (CSA) announced updates to Matter 1.6 and Product Security 1.1. Matter 1.6 is a functional upgrade designed to improve device interaction capabilities and adaptability across different ecosystems. Key highlights include NFC-Based Commissioning, which allows for two-way communication and commissioning via NFC even before the device is powered on, greatly simplifying large-scale or pre-deployed scene setups. Furthermore, Matter 1.6 introduces Joint Fabric, enabling multiple user-authorized controllers to jointly manage a single Matter network, and adds Thermostat Suggestions, allowing devices to provide intelligent suggestions based on user preferences and multi-source inputs, rather than issuing direct commands. Product Security 1.1 expands the scope of security certification from single devices to entire IoT systems, covering devices, applications, remote processes, and gateways. It also streamlines the compliance process with international standards such as the EU RED and Singapore standards, offering manufacturers a simplified global market compliance path.",
    tags_en: ["CSA", "Matter 1.6", "Product Security 1.1", "IoT", "Smart Home", "NFC", "Cross-Platform"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/17/matter-1-6-and-product-security-1-1-officially-announced-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260617-074",
    trackers: ["security"],
    category: "uncategorized",
    title: "Keras 框架發現跨站腳本攻擊（XSS）漏洞，建議立即更新以防範安全風險",
    summary: "資安研究人員發現 Keras 深度學習框架存在跨站腳本攻擊（XSS）漏洞。此漏洞可能允許攻擊者在特定條件下，透過惡意輸入執行客戶端腳本，從而竊取用戶會話資訊或執行未經授權的行為。雖然原文未提供具體受影響版本或CVSS評分，但此類漏洞的實務影響極為嚴重，可能導致應用程式的資料洩露或功能被惡意控制。建議使用 Keras 框架的最新穩定版本，或根據官方安全公告進行版本升級，以修補此安全缺陷，確保應用程式的安全性。開發者應特別注意所有用戶輸入的資料，並實施適當的輸入驗證和輸出編碼機制，以降低被利用的風險。",
    tags: ["Keras", "XSS", "跨站腳本攻擊", "深度學習", "資安漏洞", "安全更新"],
    title_en: "XSS Vulnerability Found in Keras Framework; Immediate Update Recommended to Prevent Security Risks",
    summary_en: "Cybersecurity researchers have discovered a Cross-Site Scripting (XSS) vulnerability in the Keras deep learning framework. This vulnerability could potentially allow an attacker, under specific conditions, to execute client-side scripts via malicious input, thereby stealing user session information or performing unauthorized actions. Although the original text did not provide specific affected versions or CVSS scores, the practical impact of such a vulnerability is extremely severe, potentially leading to application data leakage or malicious control of functionality. It is recommended that users upgrade to the latest stable version of the Keras framework, or follow official security advisories for version upgrades, to patch this security flaw and ensure application safety. Developers should pay special attention to all user-provided data and implement appropriate input validation and output encoding mechanisms to mitigate the risk of exploitation.",
    tags_en: ["Keras", "XSS", "Cross-Site Scripting", "Deep Learning", "Security Vulnerability", "Security Update"],
    sources: [
      { name: "JPCERT/CC", url: "https://jpcert.or.jp/wr/2026/wr260617.html", lang: "EN" }
    ]
  }
];
