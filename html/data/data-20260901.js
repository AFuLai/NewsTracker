// data-20260901.js — 2026-09-01
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-01"] = [
  {
    id: "20260901-10163",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Linux 提升資料安全：預設啟用 Btrfs 自動快照功能，支援用戶資料回溯",
    summary: "KDE Linux 在本月發布了重要的系統安全與用戶體驗升級。最大的改動是為所有用戶檔案啟用自動 Btrfs 快照功能，並將用戶主目錄設定為 Btrfs 子卷（sub-volumes）。此功能透過設定 Snapper 和 KIO-Snapshot，讓使用者可以輕鬆回溯用戶檔案到較早的狀態，達到類似「撤銷」的資料保護效果。這項功能並非取代傳統的備份機制，但極大地增強了系統的資料安全性。此外，KDE Linux 還提升了 Dolphin 檔案管理器的 Btrfs 快照整合度，並預設啟用了 CJKV（中、日、韓、越）輸入法支援，改善了多語言用戶的體驗。整體而言，本次更新著重於資料完整性、用戶體驗和多語言支援，並包含多項品質保證、測試和安全修補。",
    tags: ["KDE Linux", "Btrfs", "快照", "Snapper", "Linux 核心", "資料安全"],
    title_en: "KDE Linux Enhances Data Security: Enables Default Btrfs Automatic Snapshot Feature for User Data Recovery",
    summary_en: "KDE Linux released a significant system security and user experience upgrade this month. The major change is the activation of automatic Btrfs snapshot functionality for all user files, and setting the user home directory as a Btrfs sub-volume. This feature, implemented using Snapper and KIO-Snapshot, allows users to easily restore user files to an earlier state, providing a data protection effect similar to an 'undo' function. While this feature does not replace traditional backup mechanisms, it significantly enhances the system's data security. Furthermore, KDE Linux improved the Btrfs snapshot integration within the Dolphin file manager and enabled default support for CJKV (Chinese, Japanese, Korean, Vietnamese) input methods, improving the experience for multilingual users. Overall, this update focuses on data integrity, user experience, and multilingual support, and includes multiple quality assurance, testing, and security patches.",
    tags_en: ["KDE Linux", "Btrfs", "Snapshot", "Snapper", "Linux Kernel", "Data Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Linux-August-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-10164",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 發布 Linux 核心排程器補丁，提升 Vera 晶片上的 SMT 效能",
    summary: "NVIDIA 工程師 Andrea Righi 為其 Olympus 核心的 NVIDIA Vera 晶片，在 Linux 核心排程器（scheduler）提交了一系列補丁。Olympus 核心採用 SMT（Simultaneous Multi-Threading）設計，當兩個對稱處理單元（PEs）都活躍時，核心處於雙執行緒模式；但當其中一個 PE 閒置時，核心應能恢復單執行緒模式以達到最佳效能。\n\n原有的排程機制在處理 PE 閒置和活躍的轉換時，容易導致性能下降。本次補丁的核心目標是讓排程器能更精確地識別並偏好完全閒置的核心，避免不必要的 PE 喚醒，從而確保單執行緒模式能穩定恢復。\n\n透過這些補丁，特別是針對 PE0 設置了優先權，並指導了公平排程器（fair scheduler）的閒置選擇路徑，可以有效提升 SMT 負載的性能。測試結果顯示，在兩節點的 Vera 系統上運行 GEMM 基準測試時，吞吐量從基線核心的約 9.4 TFLOP/s 提升至約 10.1 TFLOP/s，且運行結果更具可預測性。這類更新對於使用 NVIDIA Vera 晶片進行高性能計算（HPC）的用戶至關重要，建議系統維護者關注 Linux 核心的最新排程器更新。",
    tags: ["NVIDIA", "Linux 核心", "Vera", "Olympus", "SMT", "排程器"],
    title_en: "NVIDIA Releases Linux Kernel Scheduler Patch to Improve SMT Efficiency on Vera Chip",
    summary_en: "NVIDIA engineer Andrea Righi submitted a series of patches to the Linux kernel scheduler for the NVIDIA Vera chip, which is used in the Olympus core. The Olympus core utilizes a Simultaneous Multi-Threading (SMT) design, operating in a dual-threaded mode when both Processing Elements (PEs) are active; however, when one PE is idle, the core should revert to a single-threaded mode to achieve optimal performance.\n\nThe existing scheduling mechanism often resulted in performance degradation when transitioning between PE idle and active states. The core goal of this patch is to enable the scheduler to more accurately identify and prioritize completely idle cores, thereby avoiding unnecessary PE wake-ups and ensuring stable recovery into single-threaded mode.\n\nThese patches, particularly by setting a priority for PE0 and guiding the fair scheduler's idle selection path, effectively boost SMT load performance. Testing results show that when running the GEMM benchmark on Vera systems with two nodes, throughput increased from approximately 9.4 TFLOP/s on the baseline core to approximately 10.1 TFLOP/s, with more predictable results. Such updates are crucial for users utilizing the NVIDIA Vera chip for High-Performance Computing (HPC), and system maintainers are advised to monitor the latest Linux kernel scheduler updates.",
    tags_en: ["NVIDIA", "Linux Kernel", "Vera", "Olympus", "SMT", "Scheduler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Linux-Sched-Vera-SMT", lang: "EN" }
    ]
  },
  {
    id: "20260901-10307",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體 Aurora 運用 AI 輔助工具攻擊企業，利用自製模組鎖定 VMware ESXi 虛擬機",
    summary: "勒索軟體 Aurora 自今年四月開始活躍，資安公司 CloudSEK 揭露攻擊者利用 AI 程式碼助手 Cursor 和 Claude Sonnet 規劃攻擊行動，並在俄語環境中運作。截至七月，已有超過二十家企業組織遭受侵害。Gambit Security 的調查顯示，Aurora 在早期攻擊階段，利用自製的 NetExec LDAP 模組，在受害組織的網路中搜尋 VMware ESXi 虛擬機監控程式和 vCenter 伺服器。該惡意模組會透過查詢網域控制員、掃描 443 與 902 埠、讀取 TLS 憑證以獲取 ESXi 簽章，進而部署勒索軟體加密虛擬機器，並在 SSH 橫幅中留下勒索訊息。此外，攻擊者還利用 Cursor 和 Claude Sonnet 協助執行滲透行為，例如植入 VPN 用戶端、使用 Nmap 或 NetExec 掃描網路，並嘗試執行 NTLM 中繼攻擊，利用 PetitPotam、Coerce Plus、PrinterBug 及 Impacket 等工具。此事件凸顯了 AI 技術被用於強化網路攻擊的風險。",
    tags: ["Aurora", "勒索軟體", "AI 攻擊", "VMware ESXi", "NetExec", "APT"],
    title_en: "Ransomware Aurora Uses AI-Assisted Tools to Attack Enterprises, Targeting VMware ESXi Virtual Machines with Custom Modules",
    summary_en: "The ransomware Aurora has been active since April of this year. Cybersecurity firm CloudSEK revealed that attackers are utilizing AI code assistants like Cursor and Claude Sonnet to plan their attacks, which operate within a Russian-language environment. As of July, over twenty corporate organizations have been compromised. An investigation by Gambit Security showed that in its early attack stages, Aurora uses a custom NetExec LDAP module to search for VMware ESXi virtual machine monitoring agents and vCenter servers within the victim's network. This malicious module queries domain controllers, scans ports 443 and 902, and reads TLS certificates to obtain ESXi signatures, subsequently deploying ransomware to encrypt virtual machines and leaving a ransom message in the SSH banner. Furthermore, attackers utilized Cursor and Claude Sonnet to assist with penetration activities, such as implanting VPN clients, using Nmap or NetExec for network scanning, and attempting NTLM relay attacks using tools like PetitPotam, Coerce Plus, PrinterBug, and Impacket. This incident highlights the risk of AI technology being used to enhance network attacks.",
    tags_en: ["Aurora", "Ransomware", "AI Attacks", "VMware ESXi", "NetExec", "APT"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178592", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10308",
    trackers: ["security"],
    category: "重大事件",
    title: "資安公司揭露勒索軟體 Aurora 攻擊活動：利用 AI 輔助規劃與 Zig 語言加密",
    summary: "資安公司 CloudSEK 與 TRM Labs 合作，揭露了勒索軟體 Aurora（Aur0ra）的攻擊活動。該組織自今年四月開始活躍，已在九個國家和超過二十家企業造成影響，並從受害者處獲取了互動存取權限。研究人員發現，攻擊者利用 AI 程式碼助手 Cursor 來規劃攻擊行動，並使用俄語與 AI 進行對話，且排除了 CIS 國家。Aurora 團隊建立了一套可重複執行的 AD 入侵指引，並使用 Zig 語言編寫加密程式，該程式有 Windows 和 Linux/ESXi 版本。攻擊者透過 SCP 通訊協定從公開的 Cloudflare R2 儲存桶拉取程式碼傳輸至受害主機。此外，分析顯示攻擊者可能已收到兩筆贖金。該活動凸顯了現代勒索軟體如何整合 AI 工具進行攻擊規劃，並利用特定語言編寫惡意軟體。",
    tags: ["Aurora", "勒索軟體", "AI 攻擊", "CloudSEK", "TRM Labs", "Zig 語言", "資料外洩"],
    title_en: "Cybersecurity Firm Reveals Ransomware Aurora Attack Activity: Utilizing AI for Planning and Zig Language Encryption",
    summary_en: "Cybersecurity firms CloudSEK and TRM Labs have revealed the attack activity of the ransomware group Aurora (Aur0ra). This group has been active since April of this year, impacting nine countries and over twenty organizations, and has obtained interactive access from victims. Researchers found that the attackers utilized the AI coding assistant Cursor to plan their operations, engaging in Russian-language dialogue with the AI, and excluded CIS countries. The Aurora team established a repeatable AD intrusion playbook and wrote encryption code using the Zig language, which has both Windows and Linux/ESXi versions. The attackers transferred the code to the victim machines via the public Cloudflare R2 storage bucket using the SCP protocol. Furthermore, analysis indicates that the attackers may have received two ransom payments. This activity highlights how modern ransomware integrates AI tools for attack planning and utilizes specific languages for malware development.",
    tags_en: ["Aurora", "Ransomware", "AI Attack", "CloudSEK", "TRM Labs", "Zig Language", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178583", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10313",
    trackers: ["os", "security"],
    category: "重大事件",
    title: "ATF 獨立系統遭入侵，勒索軟體組織 Qilin 曝光其名單，但核心業務未受影響",
    summary: "美國菸酒槍砲及爆炸物管理局（ATF）於 8 月 26 日宣布，其一套獨立運作的系統遭受了資安入侵事件。ATF 在發現異常後立即切斷了受影響環境的連線，並啟動了事件應變流程，同時與美國司法部合作進行調查。ATF 強調，該被入侵的系統是獨立運作的，目前沒有證據顯示此次事件已波及到 ATF 的企業網路、電子槍械申請系統（eForms）或其他日常運營系統，日常任務並未受到影響。然而，資安媒體 BleepingComputer 報導指出，在同一天，勒索軟體組織 Qilin 將 ATF 列入了其暗網資料外洩網站，但該報導並未說明是否已竊取資料或提出贖金要求，ATF 方面也未確認入侵事件與 Qilin 的關聯性。總體而言，此次事件主要涉及一個隔離的系統，對 ATF 的核心業務運作未造成直接衝擊。",
    tags: ["ATF", "勒索軟體", "Qilin", "資安事件", "政府機構", "資料外洩"],
    title_en: "ATF's Isolated System Breached; Ransomware Group Qilin Lists It, But Core Operations Remain Unaffected",
    summary_en: "The Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) announced on August 26 that one of its independently operating systems suffered a cybersecurity breach. Upon detecting the anomaly, the ATF immediately disconnected the affected environment and initiated its incident response process, cooperating with the U.S. Department of Justice in the investigation. The ATF emphasized that the breached system was isolated, and there is currently no evidence suggesting the incident has affected the ATF's corporate network, eForms system, or other daily operational systems, and that routine mission operations were not impacted. However, cybersecurity media BleepingComputer reported that on the same day, the ransomware group Qilin listed the ATF on its dark web data leak site. The report did not specify whether data was actually stolen or if a ransom was demanded, and the ATF has not confirmed any connection between the breach and Qilin. Overall, the incident primarily involves an isolated system and has not caused a direct impact on the ATF's core business operations.",
    tags_en: ["ATF", "Ransomware", "Qilin", "Cybersecurity Incident", "Government Agency", "Data Leak"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178569", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10317",
    trackers: ["security"],
    category: "重大事件",
    title: "暗網販售逾1.53億美加駕照掃描檔，指向某大型身份驗證公司遭入侵",
    summary: "一項新的身份盜竊服務在暗網上線，正在販售來自美國和加拿大超過1.53億張的駕照數位掃描檔。根據受訪者的描述，這些資料似乎是從一家在路易斯安那州廣泛使用的身份驗證公司竊取的。聯邦調查局（FBI）新奧爾良分局已對這些圖像的來源展開官方調查。該服務名為 Nexus，除了駕照外，還包含超過1000萬張身份卡、數百萬張旅行文件和醫療卡。資料來源聲稱來自一家大型身份驗證公司發生的活躍入侵事件，該公司客戶群包含多家財富五百強企業。研究人員推測，這些資料可能是在租車過程中被收集的，因為多位受訪者確認在特定日期向租車公司出示了駕照。目前，資料正在持續被收集和上傳到該服務上，顯示數據竊取活動仍在進行中。建議相關機構密切關注 FBI 的調查進展，並加強對第三方身份驗證供應商的資安審查。",
    tags: ["身份盜竊", "暗網", "駕照資料外洩", "身份驗證公司", "FBI 調查", "Nexus"],
    title_en: "Over 153 Million US and Canadian Driver's License Scans Sold on Dark Web, Pointing to Breach at Major Identity Verification Company",
    summary_en: "A new identity theft service has appeared on the dark web, selling digital scans of over 153 million driver's licenses from the United States and Canada. According to sources, this data appears to have been stolen from an identity verification company widely used in Louisiana. The FBI's New Orleans field office has launched an official investigation into the source of these images. The service, named Nexus, contains not only driver's licenses but also over 10 million identity cards, millions of travel documents, and medical cards. The data source claims the data originated from an active intrusion event at a large identity verification company whose clientele includes many Fortune 500 companies. Researchers speculate that the data may have been collected during the process of renting vehicles, as multiple sources confirmed showing their driver's licenses to rental companies on a specific date. The data is reportedly still being collected and uploaded to the service, indicating that the data theft activity is ongoing. It is recommended that relevant organizations closely monitor the FBI's investigation and strengthen security audits of third-party identity verification providers.",
    tags_en: ["Identity Theft", "Dark Web", "Driver's License Data Leak", "Identity Verification Company", "FBI Investigation", "Nexus"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses", lang: "EN" }
    ]
  },
  {
    id: "20260901-10327",
    trackers: ["security"],
    category: "重大事件",
    title: "五名委內瑞拉籍人士在美國法院認罪，涉嫌進行ATM「大獎詐騙」",
    summary: "五名委內瑞拉籍國民在美國法院認罪，涉及企圖對堪薩斯州的ATM機植入惡意軟體。這些被告計劃遠程啟動該軟體，迫使ATM機吐出現金。儘管他們的嘗試均未成功，但他們被監控攝像機捕捉到，隨後被逮捕。美國司法部表示，所有五人均對共謀實施銀行盜竊罪認罪。其中一人被判處九個月監禁，其他四人仍在等待判決。FBI警告，全國範圍內「大獎詐騙」（jackpotting）的事件正在增加，自2020年以來已發生超過1,900起相關事件，其中2025年單年就登記了超過700起，造成了超過2000萬美元的損失。此案凸顯了此類犯罪行為的日益普遍趨勢，提醒業界需提高警惕。",
    tags: ["ATM Jackpotting", "委內瑞拉籍", "銀行盜竊", "惡意軟體", "FBI", "金融犯罪"],
    title_en: "Five Venezuelan Nationals Plead Guilty in US Court for Alleged ATM 'Jackpotting' Scheme",
    summary_en: "Five Venezuelan nationals pleaded guilty in a US court for attempting to implant malicious software onto an ATM in Kansas. The defendants planned to remotely activate the software, forcing the ATM to dispense cash. Although their attempts were unsuccessful, they were captured by surveillance cameras and subsequently arrested. The U.S. Department of Justice stated that all five pleaded guilty to conspiracy to commit bank robbery. One individual was sentenced to nine months in custody, while the other four are awaiting sentencing. The FBI warned that incidents of 'jackpotting' nationwide are increasing, with over 1,900 related incidents reported since 2020. Of these, over 700 were registered in 2025 alone, resulting in losses exceeding $20 million. This case highlights the growing prevalence of such criminal activities and reminds the industry to remain vigilant.",
    tags_en: ["ATM Jackpotting", "Venezuelan", "Bank Robbery", "Malware", "FBI", "Financial Crime"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/five-venezuelans-plead-guilty-in-us-court-to-atm-jackpotting", lang: "EN" }
    ]
  },
  {
    id: "20260901-10328",
    trackers: ["security"],
    category: "重大事件",
    title: "勒索軟體集團 Gentlemen 聲稱入侵 Nutex Health，竊取病患及財務資料",
    summary: "醫療服務公司 Nutex Health 確認發生資料外洩事件，其個人及商業資訊已被竊取。該公司已向美國證券交易委員會 (SEC) 報告，確認駭客已未經授權存取其網路並竊取了伺服器上的特定檔案。被竊取的資料涵蓋病患、員工、提供者、商業及財務資訊。該勒索軟體集團 Gentlemen（亦稱 Storm-2697）已聲稱對此次事件負責，並將 Nutex Health 列入其 Tor 洩露網站，威脅在九天內公佈所竊取資料。該集團作為 RaaS 運營，採用雙重勒索方式，即加密受害者資料並將其外洩以施加壓力。Nutex Health 正在持續調查事件的範圍和影響，並已通知 SEC 收到相關的集體訴訟投訴。",
    tags: ["Nutex Health", "Gentlemen", "勒索軟體", "資料外洩", "RaaS", "醫療產業", "SEC"],
    title_en: "Ransomware Group Gentlemen Claims Breach of Nutex Health, Stealing Patient and Financial Data",
    summary_en: "Healthcare service company Nutex Health has confirmed a data breach, stating that its personal and commercial information has been stolen. The company has reported the incident to the U.S. Securities and Exchange Commission (SEC), confirming that hackers gained unauthorized access to its network and stole specific files from its servers. The stolen data includes patient, employee, provider, commercial, and financial information. The ransomware group Gentlemen (also known as Storm-2697) has claimed responsibility for the incident, listing Nutex Health on its Tor leak site and threatening to publish the stolen data within nine days. The group operates as a Ransomware-as-a-Service (RaaS), employing a double extortion method by encrypting the victim's data and subsequently leaking it to exert pressure. Nutex Health is continuing to investigate the scope and impact of the incident and has notified the SEC of receiving related class-action complaints.",
    tags_en: ["Nutex Health", "Gentlemen", "Ransomware", "Data Breach", "RaaS", "Healthcare Industry", "SEC"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/ransomware-gang-claims-nutex-health-data-breach", lang: "EN" }
    ]
  },
  {
    id: "20260901-10330",
    trackers: ["security"],
    category: "重大事件",
    title: "Aesto Health 遭駭客入侵，超過 950 萬人個人及健康資料外洩",
    summary: "醫療科技公司 Aesto Health 發生資料外洩事件，該公司為醫療機構提供安全資料遷移、電子健康紀錄 (EHR) 交換及舊資料歸檔服務。根據公司於 2026 年 6 月發布的事件通知，此次事件的入侵行為是在 2025 年 12 月 18 日被發現的，涉及其 Amazon Web Services (AWS) 基礎設施的部分區域。調查結果顯示，駭客在 2025 年 12 月 2 日至 18 日期間，竊取了個人身份資訊 (PII) 和受保護健康資訊 (PHI)。受影響的資料類型包括姓名、社會安全碼、駕照號碼、出生日期、財務帳戶號碼、醫療資訊、健康保險資訊及納稅人識別號碼等。Aesto Health 已向美國衛生及人力資源部 (HHS) 報告，確認有 9,540,683 名個人受到此次資料外洩的影響。至少有兩 dozen 的醫療服務提供者客戶受到影響，部分客戶已選擇自行通知受影響者。建議相關機構應立即審查其雲端基礎設施安全配置，並加強對敏感健康資料的保護措施。",
    tags: ["Aesto Health", "資料外洩", "PHI", "PII", "AWS", "醫療健康", "數據安全"],
    title_en: "Aesto Health Suffers Hacker Breach, Exposing Personal and Health Data of Over 9.5 Million People",
    summary_en: "Medical technology company Aesto Health experienced a data breach. The company provides secure data migration, Electronic Health Record (EHR) exchange, and legacy data archiving services for medical institutions. According to an incident notification released by the company in June 2026, the intrusion was discovered on December 18, 2025, and involved parts of its Amazon Web Services (AWS) infrastructure. Investigations revealed that hackers stole Personally Identifiable Information (PII) and Protected Health Information (PHI) between December 2 and December 18, 2025. Affected data types include names, social security numbers, driver's license numbers, dates of birth, financial account numbers, medical information, health insurance information, and tax identification numbers. Aesto Health has reported the incident to the U.S. Department of Health and Human Services (HHS), confirming that 9,540,683 individuals were affected by the data leak. At least two dozen medical service provider clients were impacted, some of whom have chosen to notify affected individuals themselves. It is recommended that relevant organizations immediately review their cloud infrastructure security configurations and strengthen protective measures for sensitive health data.",
    tags_en: ["Aesto Health", "Data Breach", "PHI", "PII", "AWS", "Healthcare", "Data Security"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/9-5-million-impacted-by-aesto-health-data-breach", lang: "EN" }
    ]
  },
  {
    id: "20260901-10427",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6480-1 安全公告，修補核心元件中的潛在安全漏洞",
    summary: "Debian 安全團隊發布了 DSA-6480-1 安全公告，針對其發行版中發現的一個潛在安全問題進行了修補。此漏洞涉及核心元件，雖然原文未提供詳細的技術細節或 CVSS 分數，但該公告提示使用者應立即採取行動以確保系統安全。對於使用 Debian 系統的用戶和系統管理員而言，應密切關注官方的安全更新，並根據 Debian 提供的指引進行系統升級。這項更新旨在加強系統的整體安全性，防止潛在的攻擊向量被利用。建議所有受影響的 Debian 用戶及相關機構，應盡快應用此安全修補程式，以避免遭受未知的安全威脅。",
    tags: ["Debian", "DSA-6480-1", "安全公告", "Linux 核心", "安全修補"],
    title_en: "Debian Releases DSA-6480-1 Security Advisory to Patch Potential Vulnerability in Core Component",
    summary_en: "The Debian security team has issued the DSA-6480-1 security advisory, addressing a potential vulnerability discovered in its distribution. This vulnerability affects a core component. Although the original advisory does not provide detailed technical specifications or a CVSS score, the notice urges users to take immediate action to ensure system security. Users and system administrators utilizing Debian systems should closely monitor official security updates and upgrade their systems according to Debian's provided guidelines. This update aims to strengthen overall system security and prevent potential attack vectors from being exploited. All affected Debian users and related organizations are advised to apply this security patch promptly to avoid unknown security threats.",
    tags_en: ["Debian", "DSA-6480-1", "Security Advisory", "Linux Kernel", "Security Patch"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00391.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10431",
    trackers: ["os"],
    category: "Linux",
    title: "多數主流 Linux 發行版發布安全更新，涵蓋核心、網路服務與應用程式層面",
    summary: "本次安全更新涵蓋了 AlmaLinux、Debian、Fedora、Mageia、Oracle、Red Hat、SUSE 和 Ubuntu 等多數主流 Linux 發行版。這些更新涉及了廣泛的元件，包括 Linux 核心、網路服務（如 bind9、nginx、unbound）、基礎庫（如 glibc、openssl）以及各種應用程式（如 MySQL、Node.js、Firefox）。發行版針對不同元件發布了修補程式，例如 Red Hat 更新了 kernel 和 openssl，Ubuntu 更新了 coreutils 和 libssh，而 SUSE 則更新了大量套件，涵蓋了 PostgreSQL、Chromium 和各種工具。由於安全漏洞的性質多樣化，用戶應立即檢查其系統的更新狀態，並根據發行版的官方公告進行必要的升級操作，以確保系統安全。未公開的 CVSS 分數或具體漏洞細節未在原文中提供，但更新的廣泛性顯示了對多種潛在安全風險的修補。",
    tags: ["Linux", "AlmaLinux", "Debian", "Red Hat", "Ubuntu", "安全更新", "核心", "供應鏈"],
    title_en: "Most Major Linux Distributions Release Security Updates Covering Kernel, Network Services, and Applications",
    summary_en: "This round of security updates covers numerous major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, Oracle, Red Hat, SUSE, and Ubuntu. These updates affect a wide range of components, including the Linux kernel, network services (such as bind9, nginx, unbound), foundational libraries (such as glibc, openssl), and various applications (such as MySQL, Node.js, and Firefox). Different distributions have released patches for various components; for example, Red Hat updated the kernel and openssl, Ubuntu updated coreutils and libssh, and SUSE updated numerous packages covering PostgreSQL, Chromium, and various tools. Due to the diverse nature of security vulnerabilities, users should immediately check their system's update status and perform necessary upgrades according to the official announcements of their distribution to ensure system security. While no specific CVSS scores or vulnerability details were provided in the original text, the breadth of the updates indicates patching against multiple potential security risks.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Red Hat", "Ubuntu", "Security Update", "Kernel", "Supply Chain"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1091919", lang: "EN" }
    ]
  },
  {
    id: "20260901-10434",
    trackers: ["os"],
    category: "Linux",
    title: "AMDGPU Linux 驅動程式新增 HDMI 被動 VRR 支援，改善顯示器切換體驗",
    summary: "AMD 正在持續優化其上游 AMDGPU 核心圖形驅動程式，並發布了最新的補丁，以支援 HDMI 連接的被動可變刷新率（Passive VRR）。此功能旨在解決當 HDMI 輸出切換至 VRR 模式時，螢幕可能出現空白或亮度閃爍的問題。與 DisplayPort 或 Embedded DisplayPort 不同，HDMI 的被動 VRR 透過在固定刷新率的桌面使用期間，使 HDMI 接收器保持在可變刷新率狀態來實現。此功能先前包含在 HDMI 2.1 的「遊戲」補丁系列中，現已獨立成一個補丁系列。最新的程式碼已在 AMDGPU 驅動程式中啟用為預設選項，但使用者仍可選擇禁用，以保留在切換到 VRR 模式時出現的閃爍或空白現象。開發人員期望這些 HDMI 2.1 的最新增強功能能及時在十月下旬的 Linux 7.4 合併窗口中完成審核和準備工作。",
    tags: ["AMDGPU", "HDMI 2.1", "Passive VRR", "Linux 核心", "圖形驅動程式", "VRR"],
    title_en: "AMDGPU Linux Driver Adds HDMI Passive VRR Support, Improving Display Switching Experience",
    summary_en: "AMD continues to optimize its upstream AMDGPU kernel graphics driver and has released the latest patch to support Passive Variable Refresh Rate (VRR) over HDMI connections. This feature aims to resolve issues where the screen might display blanking or brightness flickering when switching the HDMI output to VRR mode. Unlike DisplayPort or Embedded DisplayPort, HDMI Passive VRR achieves this by keeping the HDMI receiver in a variable refresh rate state even during fixed-refresh-rate desktop usage. This functionality was previously included in the HDMI 2.1 'Gaming' patch series but is now independent. The latest code has been enabled by default in the AMDGPU driver, though users can still choose to disable it if they wish to retain the flickering or blanking phenomenon when switching to VRR mode. Developers expect these latest HDMI 2.1 enhancements to complete review and preparation in the Linux 7.4 merge window late October.",
    tags_en: ["AMDGPU", "HDMI 2.1", "Passive VRR", "Linux Kernel", "Graphics Driver", "VRR"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMDGPU-HDMI-Passive-VRR", lang: "EN" }
    ]
  },
  {
    id: "20260901-10435",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心新增 ASUS ROG Strix Arion NVMe 外接盒 RGB 控制驅動程式",
    summary: "一位開源開發者 Liang Haowen 開發了名為 \"leds-asus-aura-scsi\" 的 Linux 驅動程式，目前正在 Linux 核心郵件列表上審查中。此驅動程式旨在為 ASUS ROG Strix Arion NVMe 外接 M.2 SSD 外殼啟用 RGB 照明控制功能。該外接盒在 Linux 上作為標準 USB 質量儲存設備正常運作，但其 RGB 照明功能是透過 ENE 控制器使用廠商 SCSI 命令來控制的。硬體上共有四個可獨立定址的 LED，透過 LEDs sysfs 介面可以在 Linux 中進行操作。此驅動程式是為實現一個更廣泛的 ASUS Aura 介面而進行的努力的一部分。未來是否能進入主線核心，仍有待觀察。",
    tags: ["ASUS", "ROG Strix Arion", "Linux 核心", "RGB 照明", "NVMe", "驅動程式"],
    title_en: "Linux Kernel Adds Driver for ASUS ROG Strix Arion NVMe Enclosure RGB Control",
    summary_en: "Open-source developer Liang Haowen has developed a Linux driver named \"leds-asus-aura-scsi,\" which is currently under review on the Linux kernel mailing list. This driver aims to enable RGB lighting control for the ASUS ROG Strix Arion NVMe external M.2 SSD enclosure. While the enclosure functions normally as a standard USB mass storage device on Linux, its RGB lighting is controlled via the ENE controller using vendor SCSI commands. The hardware features four independently addressable LEDs, which can be controlled in Linux through the LEDs sysfs interface. This driver is part of an effort to implement broader ASUS Aura functionality. Whether it will be merged into the mainline kernel remains to be seen.",
    tags_en: ["ASUS", "ROG Strix Arion", "Linux Kernel", "RGB Lighting", "NVMe", "Driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ASUS-ROG-Strix-Arion-RGB-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260901-10437",
    trackers: ["os"],
    category: "Linux",
    title: "systemd 262-rc1 正式發布，強化容器化、安全與即時更新功能",
    summary: "systemd 262-rc1 作為 Linux 初始化系統和服務管理器的新重大更新的首次測試版本發布。本次更新在多個組件上帶來了廣泛的改進。主要亮點包括 systemd 管理器內嵌了基礎的單元文件，作為容器化環境的備援機制。此外，systemd 現在可以被編譯成單一靜態連結的 PID 1/執行器二進位檔，適用於極小的容器。在安全方面，systemd-homed 搭配 FSCRYPT 支援 v2 策略，且 systemd-vmspawn 的 --coco= 選項現支援 Intel TDX，擴展了機密運算選項，此前已支援 AMD SEV-SNP。其他改進還包括 service units 支援 LUOSession= 以創建 Live Update Orchestrator 會話，以及 systemd-firstboot 支援 headless 模式以簡化自動化安裝。這些更新顯示了 systemd 在現代雲端和安全環境中的持續演進。",
    tags: ["systemd", "Linux", "systemd 262-rc1", "容器化", "機密運算", "FSCRYPT"],
    title_en: "systemd 262-rc1 Officially Released, Enhancing Containerization, Security, and Live Update Capabilities",
    summary_en: "systemd 262-rc1, the first release candidate for the Linux initialization system and service manager, has been released with widespread improvements across multiple components. Key highlights include the embedding of basic unit files within the systemd manager, serving as a fallback mechanism for containerized environments. Furthermore, systemd can now be compiled into a single static-linked PID 1/executor binary, making it suitable for minimal containers. On the security front, systemd-homed now supports v2 policies with FSCRYPT, and the systemd-vmspawn --coco= option now supports Intel TDX, expanding confidential computing options previously limited to AMD SEV-SNP. Other improvements include service units supporting LUOSession= to create Live Update Orchestrator sessions, and systemd-firstboot supporting headless mode to simplify automated installations. These updates demonstrate systemd's continued evolution in modern cloud and security environments.",
    tags_en: ["systemd", "Linux", "systemd 262-rc1", "Containerization", "Confidential Computing", "FSCRYPT"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/systemd-262-rc1", lang: "EN" }
    ]
  },
  {
    id: "20260901-10438",
    trackers: ["os"],
    category: "Linux",
    title: "AMD Zen 6 客戶端處理器引入 CPPC 調整，Linux 核心預設值設定低功耗核心為 0.47x",
    summary: "AMD Zen 6 客戶端處理器在 ACPI Collaborative Processor Performance Control (CPPC) 方面進行了調整，這項標準用於 OS 與平台之間管理 CPU 核心頻率和功耗縮放。由於 Zen 6 平台使用 CPPC 的方式與先前不同，Linux 核心為此加入了硬編碼的頻率值，以進行容量計算。這些硬編碼值分別設定了 Zen 6 效能核心為 5025、效率核心為 3524，以及新加入的低功耗核心類型為 2399。這意味著低功耗核心的性能約為效率核心的 0.68 倍，或為完整效能核心的 0.47 倍。目前，此為針對 Model 80 系列所有 Zen 6 客戶端的硬編碼預設值，其精確度尚待驗證。這些新的 CPPC 補丁已提交至 Linux 核心郵件列表審查，預計最早將在 Linux 7.4 中主線化，該版本對下一代 Ryzen 處理器支援至關重要。",
    tags: ["AMD", "Zen 6", "CPPC", "Linux 核心", "ACPI", "CPU 功耗"],
    title_en: "AMD Zen 6 Client Processors Introduce CPPC Adjustment, Setting Default Low-Power Core Frequency in Linux Kernel to 0.47x",
    summary_en: "AMD Zen 6 client processors have implemented adjustments regarding ACPI Collaborative Processor Performance Control (CPPC), a standard used by the OS and platform to manage CPU core frequency and power scaling. Because the method Zen 6 platforms use CPPC differs from previous implementations, the Linux kernel has added hardcoded frequency values for capacity calculation. These hardcoded values set the Zen 6 performance core at 5025, the efficiency core at 3524, and the newly introduced low-power core type at 2399. This means the low-power core's performance is approximately 0.68 times that of the efficiency core, or 0.47 times that of the full performance core. Currently, these are hardcoded default values for all Model 80 series Zen 6 clients, and their accuracy is pending validation. These new CPPC patches have been submitted to the Linux kernel mailing list for review and are expected to be mainline in Linux 7.4, a version crucial for supporting next-generation Ryzen processors.",
    tags_en: ["AMD", "Zen 6", "CPPC", "Linux Kernel", "ACPI", "CPU Power"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-Zen-6-Client-CPPC-Changes", lang: "EN" }
    ]
  },
  {
    id: "20260901-10439",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Xe 驅動為 Linux 7.4 引入冷重置恢復功能，提升 Panther Lake 顯示卡穩定性",
    summary: "Intel 正在為 Linux 7.4 準備新的 Xe 核心圖形驅動程式功能。其中一項重大改進是引入了冷重置恢復（cold reset recovery）支援。此機制旨在處理需要完整設備電源循環才能恢復的硬體錯誤。當 Intel 顯示硬體出現某些錯誤時，可能導致 GPU 進入「持久硬體錯誤狀態」，此時僅進行 PCIe 重置或重新載入核心驅動程式不足以解決問題。Linux 7.4 將引入 DRM_WEDGE_RECOVERY_COLD_RESET，配合使用者空間實現對 Intel 圖形設備的完全電源循環。此外，Linux 7.4 也為 Panther Lake Xe3 整合圖形帶來了 Intelligent Bias Control v3 (IBC v3) 的改進，該演算法能帶來針對 Panther Lake 的電源管理優化，特別適用於遊戲等工作負載。驅動程式還增加了 DRM_RAS Netlink 錯誤事件支援、多佇列並行頁面錯誤處理的 VF 遷移，以及 PCI 錯誤除錯的改進。",
    tags: ["Intel", "Xe 驅動", "Linux 7.4", "冷重置恢復", "Panther Lake", "DRM"],
    title_en: "Intel Xe Driver Introduces Cold Reset Recovery Feature for Linux 7.4, Enhancing Panther Lake Graphics Stability",
    summary_en: "Intel is preparing new Xe core graphics driver functionality for Linux 7.4. A major improvement is the introduction of cold reset recovery support. This mechanism is designed to handle hardware errors that require a complete device power cycle for recovery. When Intel display hardware encounters certain errors, it may cause the GPU to enter a \"persistent hardware error state,\" which cannot be resolved merely by performing a PCIe reset or reloading the core driver. Linux 7.4 will introduce DRM_WEDGE_RECOVERY_COLD_RESET, enabling a full power cycle for Intel graphics devices in user space. Furthermore, Linux 7.4 brings improvements to Intelligent Bias Control v3 (IBC v3) for Panther Lake Xe3 integrated graphics. This algorithm provides power management optimization specifically for Panther Lake, particularly useful for workloads like gaming. The driver also adds support for DRM_RAS Netlink error events, VF transition for multi-queue parallel page error handling, and improvements to PCI error debugging.",
    tags_en: ["Intel", "Xe Driver", "Linux 7.4", "Cold Reset Recovery", "Panther Lake", "DRM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Xe-Linux-7.4-First-PR", lang: "EN" }
    ]
  },
  {
    id: "20260901-10440",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2/7.3 發布後，AI 程式碼洪流導致 CVE 激增至近 2000 級",
    summary: "本月 Linux 核心開發者面臨 AI/LLM 生成的補丁和錯誤報告的巨大壓力。隨著 Linux 7.2 穩定版和 Linux 7.3 合併窗口的發布，此趨勢尤為明顯。由於 AI/LLM 模型分析龐大的 Linux 核心程式碼庫，每次核心發布的 CVE 數量已從以往的約 500 級激增至接近 2000 級，預計 Linux 7.3 可能會突破此門檻。為應對此「洪流」，Linux 核心的第二把手 Greg Kroah-Hartman 已決定拒絕接受 AI/LLM 生成的提交，除非是真正有效的安全修復。此外，Linux 7.3 的網路子系統更新已合併，但維護者表示因 AI 產生的程式碼變動而感到「完全不知所措」。值得注意的是，NTFS3 驅動程式存在一個未修復的漏洞，允許使用預先製作的 NTFS 映像檔在 Linux 系統上獲取 root 權限。Debian 投票通過了關於「生成式 AI 的負責任使用」的政策。",
    tags: ["Linux 核心", "AI/LLM", "CVE", "Linux 7.3", "NTFS3", "Debian"],
    title_en: "Following Linux 7.2/7.3 Release, AI Code Flood Causes CVE Spike to Nearly 2000",
    summary_en: "Linux kernel developers are facing immense pressure this month from patches and bug reports generated by AI/LLM. This trend is particularly evident with the release of Linux 7.2 stable and the Linux 7.3 merge window. As AI/LLM models analyze the massive Linux kernel codebase, the number of CVEs per kernel release has surged from the usual approximately 500 to nearly 2000, with Linux 7.3 potentially exceeding this threshold. To cope with this \"flood,\" Greg Kroah-Hartman, the second-in-command for the Linux kernel, has decided to reject submissions generated by AI/LLM unless they constitute a genuine security fix. Furthermore, while the networking subsystem for Linux 7.3 has been merged, maintainers reported feeling \"completely overwhelmed\" by the changes generated by AI code. Notably, the NTFS3 driver contains an unpatched vulnerability that allows root access on Linux systems using pre-made NTFS images. Debian passed a policy regarding the \"responsible use of generative AI.\"",
    tags_en: ["Linux Kernel", "AI/LLM", "CVE", "Linux 7.3", "NTFS3", "Debian"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/August-2026-Highlights", lang: "EN" }
    ]
  },
  {
    id: "20260901-10441",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：EDAC 子系統修正，加入 Intel Starfire 和 AMD ECC 記憶體優化",
    summary: "在 Linux 7.3 合併窗口關閉後，Error Detection And Correction (EDAC) 子系統的變更被延遲提交。Linus Torvalds 最終批准了這些延遲的變更。本次更新包含多項重要改進：在 Intel 方面，iGEN6 EDAC 驅動程式中加入了對 Intel Starfire SoC 的支援，該 SoC 專為極端環境設計。此外，Intel 的 iGEN6 和 iE31200 驅動程式統一了地址轉換邏輯並進行了程式碼清理。在 AMD 方面，地址轉換函式庫 (ATL) 現在僅在具備 ECC 記憶體的 AMD Zen 系統上載入，以避免在非 ECC 平台上產生日誌雜訊。然而，本次 EDAC 變更也導致了 ThunderX 和 MPC85XX 等驅動程式被「孤立」（orphaning），因為缺乏維護者和硬體存取權限，這些驅動程式未來可能被移除。這些變更皆已合併至 Linux 7.3 核心。",
    tags: ["Linux 7.3", "EDAC", "Intel Starfire", "AMD Zen", "核心更新", "記憶體控制器"],
    title_en: "Linux 7.3 Kernel Update: EDAC Subsystem Fixes, Adding Support for Intel Starfire and AMD ECC Memory Optimization",
    summary_en: "Following the closure of the Linux 7.3 merge window, changes to the Error Detection And Correction (EDAC) subsystem were delayed. Linus Torvalds has finally approved these delayed changes. This update includes several significant improvements: For Intel, the iGEN6 EDAC driver now includes support for the Intel Starfire SoC, which is designed for extreme environments. Furthermore, the Intel iGEN6 and iE31200 drivers have unified address translation logic and undergone code cleanup. For AMD, the Address Translation Library (ATL) will now only load on AMD Zen systems equipped with ECC memory, preventing log noise on non-ECC platforms. However, these EDAC changes have also resulted in the 'orphaning' of drivers such as ThunderX and MPC85XX, due to a lack of maintainers and hardware access rights; these drivers may be removed in the future. All these changes have been merged into the Linux 7.3 kernel.",
    tags_en: ["Linux 7.3", "EDAC", "Intel Starfire", "AMD Zen", "Kernel Update", "Memory Controller"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-EDAC", lang: "EN" }
    ]
  },
  {
    id: "20260901-10233",
    trackers: ["os"],
    category: "Windows",
    title: "Nvidia 確認不再為 Windows 10 提供遊戲驅動支援，用戶應考慮升級至 Windows 11",
    summary: "儘管微軟已將 Windows 10 的安全更新延長至 2027 年，但對於遊戲玩家而言，這並不代表所有硬體廠商都會跟進。Nvidia 已率先宣布，將於 2026 年 10 月發布支援 Windows 10 的最終 Game Ready Driver。從 2026 年 11 月開始，使用 Windows 10 將無法獲得遊戲相關的修復或優化。雖然 Nvidia 的驅動程式仍會提供安全修復支援至至少 2029 年，但對於遊戲體驗而言，這是一個重大轉變，因為新遊戲的 Bug 或優化將無法得到修補。文章提醒，由於市場上仍有大量用戶（HP 數據顯示約 30% 的 PC 仍運行 Windows 10）堅持使用舊系統，用戶應認真考慮升級至 Windows 11，否則未來運行新遊戲時可能會面臨性能問題或功能限制。",
    tags: ["Nvidia", "Windows 10", "Windows 11", "Game Ready Driver", "作業系統支援", "PC 遊戲"],
    title_en: "Nvidia Confirms Ending Game Driver Support for Windows 10; Users Should Consider Upgrading to Windows 11",
    summary_en: "Although Microsoft has extended security updates for Windows 10 until 2027, this does not mean that all hardware vendors will continue support for gaming. Nvidia has announced that it will release a final Game Ready Driver supporting Windows 10 in October 2026. Starting in November 2026, users on Windows 10 will no longer receive game-related fixes or optimizations. While Nvidia's drivers will still provide security patch support until at least 2029, this represents a major shift for gaming, as new game bugs or optimizations will not be addressed. The article reminds users that since a significant number of users still rely on the older system (HP data shows that approximately 30% of PCs still run Windows 10), they should seriously consider upgrading to Windows 11 to avoid potential performance issues or feature limitations when running new games in the future.",
    tags_en: ["Nvidia", "Windows 10", "Windows 11", "Game Ready Driver", "Operating System Support", "PC Gaming"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/01/nvidia-wont-extend-windows-10-driver-support-like-microsoft-did-ending-it-in-october-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-10320",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "歐盟《網路韌性法案》(CRA) 探討：開源軟體供應鏈面臨的監管責任轉變",
    summary: "本集播客節目邀請 OpenSSF 的歐盟政策顧問 Madalin Neag，深入解析歐盟新頒布的《網路韌性法案》(Cyber Resilience Act, CRA)。該法案標誌著科技產業對開源軟體處理方式的重大轉變，從過去的「免費自助餐」思維，轉向必須面對新的監管責任。CRA 旨在為數位產品建立一套橫向的網路安全基準。討論涵蓋了「軟體守護者」(Software Steward) 的創新概念，強調從被動使用轉向積極的上游貢獻的重要性。專家指出，合規性應被視為良好工程實踐的結果，而非單純的勾選清單。雖然對於非商業活動的開源維護者，法規責任可能不適用，但該法案將重塑全球軟體供應鏈，鼓勵採用「安全設計」(secure-by-design) 的思維模式，強化整個數位生態系統的安全。",
    tags: ["EU CRA", "網路韌性法案", "開源安全", "軟體供應鏈", "監管責任", "安全設計"],
    title_en: "Exploring the EU Cyber Resilience Act (CRA): Shifting Regulatory Responsibilities in the Open Source Software Supply Chain",
    summary_en: "This podcast episode invites Madalin Neag, EU Policy Advisor for OpenSSF, to deeply analyze the newly enacted EU Cyber Resilience Act (CRA). This law marks a significant shift in how the tech industry approaches open-source software, moving from a past 'free-for-all' mindset to one where new regulatory responsibilities must be addressed. The CRA aims to establish a horizontal cybersecurity standard for digital products. The discussion covers the innovative concept of the 'Software Steward,' emphasizing the importance of moving from passive usage to active upstream contribution. Experts point out that compliance should be viewed as an outcome of good engineering practice, rather than merely a checklist item. While legal responsibilities may not apply to open-source maintainers engaged in non-commercial activities, the Act will reshape the global software supply chain, encouraging the adoption of a 'secure-by-design' mindset and strengthening the security of the entire digital ecosystem.",
    tags_en: ["EU CRA", "Cyber Resilience Act", "Open Source Security", "Software Supply Chain", "Regulatory Responsibility", "Secure-by-Design"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/podcast/2026/09/01/whats-in-the-soss-podcast-71-s3e23-navigating-the-new-era-the-eu-cyber-resilience-act-explained-with-madalin-neag", lang: "EN" }
    ]
  },
  {
    id: "20260901-10324",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國海岸警衛隊成立海洋網路安全政策辦公室，強化海運系統資安管理",
    summary: "鑑於海運產業對資訊與營運技術的依賴日益增加，美國海岸警衛隊（US Coast Guard）已成立專門的海洋網路安全政策辦公室（CG-MCP）。此辦公室將作為海岸警衛隊制定和實施規範海洋運輸系統（MTS）網路安全和資安政策的中央權威機構。其職責包括制定國內政策、貢獻國際標準、指導協調性的資安合規與執法策略，並與產業夥伴、學術界及國家實驗室進行合作。此舉旨在應對當前威脅與漏洞，並為海運業的未來網路安全挑戰做好準備。此決策是在政府會計辦公室（GAO）指出海岸警衛隊在保障 MTS 安全方面存在多項不足之後做出的，GAO 曾建議海岸警衛隊應改善資安事件資訊的準確性、提供更便捷的資安缺陷數據，並完善其資安策略的風險評估與資源規劃等。",
    tags: ["美國海岸警衛隊", "海洋網路安全", "MTS", "資安政策", "GAO", "關鍵基礎設施"],
    title_en: "US Coast Guard Establishes Maritime Cybersecurity Policy Office to Strengthen Maritime System Cybersecurity Management",
    summary_en: "Given the increasing reliance of the maritime industry on information and operational technology, the US Coast Guard has established a dedicated Cybersecurity Policy Office for Maritime (CG-MCP). This office will serve as the central authority within the Coast Guard for developing and implementing cybersecurity and information security policies for Maritime Transportation Systems (MTS). Its responsibilities include formulating domestic policies, contributing to international standards, guiding coordinated cybersecurity compliance and enforcement strategies, and collaborating with industry partners, academia, and national laboratories. This move aims to address current threats and vulnerabilities, and to prepare for the future cybersecurity challenges facing the maritime industry. This decision follows recommendations from the Government Accountability Office (GAO), which pointed out several deficiencies in the Coast Guard's efforts to secure MTS. The GAO had previously advised the Coast Guard to improve the accuracy of cybersecurity incident information, provide more accessible cybersecurity vulnerability data, and enhance its risk assessment and resource planning for cybersecurity strategies.",
    tags_en: ["US Coast Guard", "Maritime Cybersecurity", "MTS", "Cybersecurity Policy", "GAO", "Critical Infrastructure"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/coast-guard-establishes-office-of-maritime-cybersecurity-policy", lang: "EN" }
    ]
  },
  {
    id: "20260901-10433",
    trackers: ["os"],
    category: "Windows",
    title: "WinBtrfs 1.10 正式發布，增強 Btrfs 在 Windows 上的寫入功能與穩定性",
    summary: "WinBtrfs 1.10 版本現已發布，這是一個用於 Microsoft Windows 系統的驅動程式，旨在支援 Btrfs 檔案系統的讀寫操作。本次更新在兩年多後迎來重大功能升級，主要新增了對寫入空閒空間位圖和寫入壓縮內嵌檔案的支持，這些功能先前僅有讀取支援。此外，新版本還提升了對可移除裝置的處理能力，並增強了在記憶體或磁碟空間不足時的錯誤恢復機制。修復內容包括解決了在子卷間移動檔案時可能發生的崩潰、同時創建大量檔案時（例如 Steam 客戶端觀察到的情況）的崩潰問題，並解決了預分配問題和多裝置卷的磁碟使用統計資訊等。該版本可供透過 GitHub 下載，並同時也為 ReactOS 的 Btrfs 讀寫支援提供了基礎。",
    tags: ["WinBtrfs", "Btrfs", "Windows", "檔案系統", "驅動程式", "系統更新"],
    title_en: "WinBtrfs 1.10 Officially Released, Enhancing Btrfs Write Functionality and Stability on Windows",
    summary_en: "WinBtrfs 1.10 has been released, a driver designed for Microsoft Windows systems to support Btrfs file system read and write operations. This update marks a major functional upgrade after more than two years, primarily adding support for writing free space bitmaps and writing compressed embedded files, functionalities that were previously read-only. Furthermore, the new version improves handling for removable devices and strengthens the error recovery mechanism when memory or disk space is insufficient. Fixes include resolving crashes that could occur when moving files between subvolumes, as well as crashes when creating a large number of files (such as observed by the Steam client). It also addresses preallocation issues and disk usage statistics for multi-device volumes. The version is available for download via GitHub and also provides foundational read/write support for ReactOS's Btrfs.",
    tags_en: ["WinBtrfs", "Btrfs", "Windows", "File System", "Driver", "System Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/WinBtrfs-1.10", lang: "EN" }
    ]
  },
  {
    id: "20260901-10455",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 存在漏洞，Defender 警報失效，安全風險升高",
    summary: "該報導指出 Windows 11 存在一個安全漏洞，導致 Windows Defender 的警報系統未能正確偵測到潛在的威脅。雖然文章未提供具體的 CVE 編號或 CVSS 分數，但該問題揭示了作業系統安全防禦機制可能存在的盲點。此類問題對用戶和企業環境構成實質威脅，因為惡意軟體可能繞過標準的安全保護措施。建議用戶應密切關注 Microsoft 的官方安全公告，並確保系統保持在最新的安全更新狀態，以防範未公開的攻擊向量。對於資安專業人員而言，這是一個重要的提醒，強調即使是主流作業系統，其內建的安全功能也可能存在需要修補的缺陷。",
    tags: ["Windows 11", "Windows Defender", "安全漏洞", "資安風險", "Microsoft"],
    title_en: "Windows 11 Vulnerability Exposes Defender Alert Failure, Heightening Security Risks",
    summary_en: "This report points out a security vulnerability in Windows 11, which causes the Windows Defender alert system to fail in detecting potential threats. Although the article does not provide a specific CVE ID or CVSS score, the issue reveals potential blind spots in the operating system's security defense mechanisms. Such problems pose a substantial threat to both user and enterprise environments, as malware may bypass standard security protections. Users are advised to closely monitor official Microsoft security announcements and ensure their systems remain updated with the latest security patches to guard against undisclosed attack vectors. For cybersecurity professionals, this serves as an important reminder that even mainstream operating systems may have inherent security flaws requiring patching.",
    tags_en: ["Windows 11", "Windows Defender", "Vulnerability", "Cybersecurity Risk", "Microsoft"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/09/01/windows-11-misses-the-pointer-while-defender-cries-wolf/5293602", lang: "EN" }
    ]
  },
  {
    id: "20260901-10462",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟 Windows 11 整合更新：每月僅需一次重啟，優化使用者體驗",
    summary: "微軟已宣布重大更新，針對 Windows 11 24H2、25H2 及 26H1 版本，將整合驅動程式更新、.NET 更新和韌體更新，使其每月僅需進行一次重啟，取代過去因不同類型的更新而導致多次重啟的困擾。此變更已於 2026 年 7 月 28 日之後發布的更新中開始滾動，並在 8 月 14 日的 Patch Tuesday 更新中逐步推出。此舉旨在提供更可預測的更新體驗。雖然大部分安全更新仍按月正常安裝，但此整合機制確保了保護不會延遲。需要注意的是，Microsoft Defender 安全情報更新、AI 組件更新、關鍵或緊急驅動程式更新等仍會立即安裝，以確保系統安全。使用者可以在設定中查看整合後的更新列表，並可透過設定調整自動重啟的「活躍時段」。",
    tags: ["Windows 11", "微軟", "更新管理", "驅動程式更新", "Patch Tuesday", "韌體更新"],
    title_en: "Microsoft Windows 11 Integrated Updates: One Monthly Restart to Optimize User Experience",
    summary_en: "Microsoft has announced a major update for Windows 11 versions 24H2, 25H2, and 26H1, which will integrate driver updates, .NET updates, and firmware updates. This aims to reduce the inconvenience of multiple restarts caused by different types of updates, requiring only one restart per month. This change has begun rolling out in updates released after July 28, 2026, and will be gradually introduced in the August 14 Patch Tuesday update. This initiative aims to provide a more predictable update experience. While most security updates will continue to install monthly as normal, this integrated mechanism ensures that protection is not delayed. It should be noted that updates such as Microsoft Defender security intelligence, AI component updates, and critical or emergency driver updates will still install immediately to ensure system security. Users can view the integrated update list in Settings and adjust the automatic restart 'active period' via Settings.",
    tags_en: ["Windows 11", "Microsoft", "Update Management", "Driver Updates", "Patch Tuesday", "Firmware Updates"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/01/more-interruptions-than-necessary-microsoft-on-windows-11s-forced-reboots-for-updates-rolls-out-a-fix", lang: "EN" }
    ]
  },
  {
    id: "20260901-9901",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA分析：2024至2025年漏洞激增，攻擊者仍偏好利用已知且可預防的軟體弱點",
    summary: "美國網路安全暨基礎設施安全局（CISA）公布2024至2025會計年度的漏洞分析結果，指出CVE紀錄數量大幅增長，從2024年度的14,234筆增加至2025年度的30,517筆，數量增加超過一倍。然而，CISA觀察到實際遭利用的漏洞（KEV）仍高度集中於長年存在的軟體弱點，其中41.5%的KEV涉及MITRE長期追蹤的弱點。這些弱點主要包括SQL注入、輸入驗證不當、路徑遍歷、命令注入、程式碼注入，以及缺乏身分驗證等，均屬於MITRE CWE Top 25的常見缺陷。此外，CISA的網路衛生掃描也揭示，仍有高比例的美國關鍵基礎設施組織使用已終止支援的軟體或棄用的SSL/TLS協定。CISA提醒，組織修補漏洞時，不應僅依賴CVSS分數，應綜合評估漏洞是否為已知遭利用（KEV）、是否可自動化利用，以及資產暴露程度，並呼籲軟體業者應落實安全設計（Secure by Design）原則。",
    tags: ["CISA", "CVE", "KEV", "MITRE CWE", "SQL注入", "安全設計"],
    title_en: "CISA Analysis: Vulnerability Surge Expected from 2024 to 2025, Attackers Still Prefer Exploiting Known and Preventable Software Flaws",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) released its vulnerability analysis for the 2024–2025 fiscal year, noting a significant increase in the number of CVE records. The count rose from 14,234 records in 2024 to 30,517 records in 2025, more than doubling. However, CISA observed that actively exploited vulnerabilities (KEV) remain highly concentrated in long-standing software weaknesses. Specifically, 41.5% of KEVs involve flaws tracked by MITRE over extended periods. These weaknesses primarily include SQL injection, improper input validation, path traversal, command injection, code injection, and lack of authentication, all of which are common defects listed in the MITRE CWE Top 25. Furthermore, CISA's network hygiene scans revealed that a high proportion of U.S. critical infrastructure organizations still utilize software with discontinued support or deprecated SSL/TLS protocols. CISA advises that when patching vulnerabilities, organizations should not rely solely on CVSS scores. Instead, they must comprehensively assess whether the vulnerability is a known exploited vulnerability (KEV), if it can be automatically exploited, and the level of asset exposure. CISA also urges software vendors to implement Secure by Design principles.",
    tags_en: ["CISA", "CVE", "KEV", "MITRE CWE", "SQL Injection", "Secure by Design"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178542", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10287",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安研究揭示惡意內部人員助長勒索軟體攻擊，安全防線面臨新挑戰",
    summary: "安全研究人員觀察到「內部人員協助」的勒索軟體攻擊有所增加。這類威脅不一定源於零日漏洞或網路釣魚，而是由擁有合法存取權的員工協助攻擊者進入組織。SentinelOne 數據顯示，內部威脅的年成本高達每家組織 1950 萬美元，其中 56% 的事件歸因於疏忽的內部人員。更嚴重的是，涉及高權限惡意內部人員的事件，平均每起將使組織損失約 490 萬美元。Mimecast 的報告也指出，惡意內部人員的事件在過去一年中增加了 42%。攻擊者正利用防火牆和 VPN 無法防禦的「人」這一環節。這類威脅包括員工被收買提供網路存取權，或因不滿而進行報復性破壞。企業必須同時關注疏忽和惡意的內部風險，以應對日益嚴峻的資安挑戰。",
    tags: ["內部威脅", "勒索軟體", "惡意內部人員", "資安風險", "SentinelOne", "網路安全"],
    title_en: "Cybersecurity Research Reveals Malicious Insiders Fuel Ransomware Attacks, Presenting New Security Challenges",
    summary_en: "Security researchers have observed an increase in ransomware attacks facilitated by 'insider assistance.' These threats do not necessarily originate from zero-day vulnerabilities or phishing, but rather involve employees with legitimate access assisting attackers in breaching an organization. SentinelOne data shows that the annual cost of internal threats reaches $19.5 million per organization, with 56% of incidents attributed to negligent insiders. More critically, incidents involving high-privilege malicious insiders cost organizations an average of $4.9 million per event. A Mimecast report also points out a 42% increase in malicious insider incidents over the past year. Attackers are exploiting the 'human' element—a vulnerability that firewalls and VPNs cannot defend against. These threats include employees being compromised to provide network access, or conducting retaliatory sabotage due to dissatisfaction. Enterprises must address both negligent and malicious insider risks simultaneously to cope with increasingly severe cybersecurity challenges.",
    tags_en: ["Insider Threat", "Ransomware", "Malicious Insider", "Cybersecurity Risk", "SentinelOne", "Cybersecurity"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/stronger-security-drives-ransomware-groups-to-recruit-from-within", lang: "EN" }
    ]
  },
  {
    id: "20260901-10288",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Langflow 平台面臨嚴重 RCE 漏洞 CVE-2026-0768 被廣泛利用，攻擊活動激增",
    summary: "低代碼 AI 開發平台 Langflow 存在一個關鍵的遠程代碼執行 (RCE) 漏洞，編號為 CVE-2026-0768。該漏洞的 CVSS 安全性評分為 9.8，最初由 Trend Micro 的 Zero Day Initiative (ZDI) 在一月揭露。VulnCheck 的安全研究人員觀察到此漏洞已被大量利用，攻擊者正在進行偵察和憑證收集活動。最初的攻擊活動主要來自俄羅斯 IP 地址，但現已擴散至多個國家。研究人員報告指出，攻擊者正在進行自動化掃描、初始存取、後續利用，包括竊取 Langflow 的 secret_key、抓取環境變數中的 API 金鑰和雲端憑證，以及橫向移動和源代碼外洩。此外，還發現有攻擊者試圖針對已植入後門的 Langflow 實例進行持久化機制建立。VulnCheck 觀察到，在 2026 年，針對 Langflow 的被利用漏洞數量顯著增加，凸顯了攻擊者對該技術的興趣日益濃厚。建議管理員應最小化暴露風險，並設定非預設的 secret keys 以減輕任意代碼執行風險。",
    tags: ["Langflow", "CVE-2026-0768", "RCE", "AI 平台", "漏洞利用", "憑證竊取"],
    title_en: "Langflow Platform Faces Critical RCE Vulnerability CVE-2026-0768, Seeing Widespread Exploitation and Increased Attack Activity",
    summary_en: "The low-code AI development platform Langflow contains a critical Remote Code Execution (RCE) vulnerability, designated as CVE-2026-0768. This vulnerability was initially disclosed in January by Trend Micro's Zero Day Initiative (ZDI), with a CVSS score of 9.8. Security researchers from VulnCheck have observed that this vulnerability is being heavily exploited, with attackers conducting reconnaissance and credential harvesting activities. Initial attack activity primarily originated from Russian IP addresses but has since spread to multiple countries. The research report indicates that attackers are performing automated scanning, initial access, and subsequent exploitation, including stealing Langflow's secret_key, grabbing API keys and cloud credentials from environment variables, and performing lateral movement and source code leakage. Furthermore, attackers have been found attempting to establish persistence mechanisms against Langflow instances that have already been compromised with backdoors. VulnCheck notes a significant increase in the number of exploited vulnerabilities targeting Langflow in 2026, highlighting the growing interest of attackers in this technology. Administrators are advised to minimize exposure risk and set non-default secret keys to mitigate the risk of arbitrary code execution.",
    tags_en: ["Langflow", "CVE-2026-0768", "RCE", "AI Platform", "Exploitation", "Credential Theft"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/critical-langflow-flaw-exploited-attacks-rise", lang: "EN" },
      { name: "SecurityWeek", url: "https://securityweek.com/hackers-start-exploiting-critical-langflow-vulnerability", lang: "EN" }
    ]
  },
  {
    id: "20260901-10290",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 Polygon 區塊鏈進行「EtherHiding」攻擊，滲透 31 家組織",
    summary: "GuidePoint Security 的研究團隊發布報告指出，一場名為 ClickFix 的攻擊活動，利用 Polygon 區塊鏈技術，採用「EtherHiding」手法來隱藏和自動化其惡意活動，已成功入侵至少 31 家組織。攻擊者利用區塊鏈作為一個可控的地址簿，動態更新其命令與控制（C2）伺服器，而非使用固定地址，從而規避傳統的 IP 或網域封鎖。此攻擊的獨特之處在於，它使用 Polygon 智能合約，並結合「搜尋引擎投毒系統」和惡意 JavaScript 注入，繞過 CloudFlare 的人工驗證覆蓋層。攻擊的流程是先滲透目標網站（如電子商務、專業服務等），植入惡意 JavaScript，當終端用戶在搜尋受感染網站時，會觸發一個「門控」機制，最終引導用戶執行惡意指令（如 Windows+R, Ctrl+V, Enter）來運行惡意載入器。此類攻擊的特點是後門會定期向 Polygon 區塊鏈查詢最新的 C2 目錄，使得感染行為難以被偵測，且能存活系統重啟。專家指出，此類攻擊的成功最終歸因於使用者的操作失誤，並暗示攻擊者可能為初始存取經紀人（IAB）。",
    tags: ["ClickFix", "Polygon 區塊鏈", "EtherHiding", "C2", "惡意軟體", "供應鏈安全", "駭客攻擊"],
    title_en: "Hackers Use Polygon Blockchain for 'EtherHiding' Attack, Compromising 31 Organizations",
    summary_en: "A report released by GuidePoint Security's research team indicates that an attack campaign named ClickFix utilized Polygon blockchain technology and an 'EtherHiding' technique to conceal and automate its malicious activities, successfully compromising at least 31 organizations. The attackers leveraged the blockchain as a controllable address book, dynamically updating their command and control (C2) servers instead of using fixed addresses, thereby evading traditional IP or domain blocking. The unique aspect of this attack is that it uses a Polygon smart contract, combined with a 'search engine poisoning system' and malicious JavaScript injection, to bypass CloudFlare's human verification layer. The attack process involves first infiltrating target websites (such as e-commerce or professional services), implanting malicious JavaScript. When an end-user searches the infected site, a 'gating' mechanism is triggered, ultimately guiding the user to execute malicious commands (such as Windows+R, Ctrl+V, Enter) to run a malicious loader. A characteristic of these attacks is that the backdoor periodically queries the Polygon blockchain for the latest C2 directory, making the infection difficult to detect and allowing it to survive system restarts. Experts point out that the success of such attacks is ultimately attributed to user operational error, and suggest that the attackers may be affiliated with an Initial Access Broker (IAB).",
    tags_en: ["ClickFix", "Polygon blockchain", "EtherHiding", "C2", "malware", "supply chain security", "hacking attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/endpoint-security/clickfix-campaign-comprises-31-orgs-abuses-polygon-blockchain", lang: "EN" }
    ]
  },
  {
    id: "20260901-10310",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安研究員揭露 Nvidia 元件零時差漏洞 GreenSection，可能導致跨使用者利用與程序破壞",
    summary: "資安研究人員 Nightmare Eclipse（Chaotic Eclipse）除了先前揭露微軟的零時差漏洞外，近期開始針對其他廠商的系統進行漏洞挖掘。本週，該研究員揭露了存在於 Nvidia 元件的零時差漏洞，命名為 GreenSection。此漏洞的根本原因在於多個 Nvidia 使用者模式元件共用一個特定的全域記憶體區段，且任何人都可讀寫該區塊。由於該區塊儲存了關鍵資料結構，可能導致應用程式在執行過程中發生記憶體越界寫入。研究人員指出，儘管此弱點無法直接授予攻擊者系統權限，但攻擊者可以輕易地在不同使用者之間進行利用，甚至可能破壞 dwm.exe 的處理程序。此外，該研究員也曾揭露過卡巴斯基和 Avast 防毒軟體中存在的權限提升漏洞 HardBreacher 和 PrettyPrague。",
    tags: ["Nvidia", "零時差漏洞", "GreenSection", "記憶體越界寫入", "資安研究員", "權限提升"],
    title_en: "Security Researcher Uncovers Nvidia Component Zero-Day Vulnerability, GreenSection, Potentially Leading to Cross-User Exploitation and Process Corruption",
    summary_en: "In addition to previously disclosing zero-day vulnerabilities in Microsoft, security researcher Nightmare Eclipse (Chaotic Eclipse) has recently begun digging for vulnerabilities in other vendors' systems. This week, the researcher disclosed a zero-day vulnerability in Nvidia components, named GreenSection. The root cause of this vulnerability is that multiple Nvidia user-mode components share a specific global memory segment, which is readable and writable by anyone. Because this segment stores critical data structures, it could potentially lead to memory out-of-bounds writes during application execution. The researcher pointed out that although this weakness cannot directly grant the attacker system privileges, the attacker can easily exploit it across different users and potentially corrupt the dwm.exe process. Furthermore, the researcher has previously disclosed privilege escalation vulnerabilities in Kaspersky and Avast antivirus software, named HardBreacher and PrettyPrague.",
    tags_en: ["Nvidia", "Zero-Day Vulnerability", "GreenSection", "Memory Out-of-Bounds Write", "Security Researcher", "Privilege Escalation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178574", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10311",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GTA VI 傳出外洩檔案遭駭客利用，散播惡意軟體與偽造 ISO",
    summary: "隨著《俠盜獵車手VI》（GTA VI）的檔案外洩傳聞，駭客利用玩家的期待心理，散播了惡意軟體。研究人員分析流傳的 113GB ISO 檔案後發現，其內容多為零值資料，但夾帶了約 50KB 的惡意程式。此外，資安媒體指出，除了偽造的遊戲 ISO 檔案外，還出現了惡意的下載網站和應用程式。這些惡意軟體可能透過 DLL 側載技術執行，或將使用者導向其他惡意網站。由於該遊戲實際發售日期為 11 月，目前網路上流傳的所謂外洩版本，極有可能成為攻擊者散播惡意程式的誘餌，使用者應提高警惕，避免下載來源不明的檔案。",
    tags: ["GTA VI", "惡意軟體", "檔案外洩", "DLL 側載", "網路釣魚", "遊戲安全"],
    title_en: "Alleged GTA VI Leak Files Exploited by Hackers to Spread Malware and Fake ISOs",
    summary_en: "Following rumors of leaked files for Grand Theft Auto VI (GTA VI), hackers exploited player anticipation to distribute malware. Researchers analyzed a circulating 113GB ISO file and found that while most of the content was zero-value data, it contained approximately 50KB of malicious code. Furthermore, cybersecurity media reported that in addition to the fake game ISOs, malicious download websites and applications have also appeared. This malware may execute through DLL side-loading techniques or redirect users to other malicious sites. Since the game's actual release date is scheduled for November, the so-called leaked versions circulating online are highly likely to be bait used by attackers to spread malicious programs. Users are advised to remain vigilant and avoid downloading files from unknown sources.",
    tags_en: ["GTA VI", "Malware", "File Leak", "DLL Side-loading", "Phishing", "Game Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178573", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10312",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安研究員揭露卡巴斯基與 Avast 防毒軟體零時差漏洞，可能導致權限提升與系統控制",
    summary: "資安研究人員 Nightmare Eclipse（Chaotic Eclipse）持續針對防毒軟體進行安全研究。近期，該研究員揭露了卡巴斯基企業版端點防護系統的權限提升漏洞 HardBreacher，成功利用後，攻擊者可能獲得完整權限。此外，若能控制使用者介面流程，還可能導致防毒軟體失控、停止運作，或限制檔案存取。卡巴斯基已透過自動更新發布了相關修補程式。\n\n接著，該研究員公布了針對 Gen Digital 旗下 Avast Antivirus 的零時差漏洞 PrettyPrague。她提供的概念驗證程式碼顯示，該漏洞可濫用防毒軟體的沙箱元件，從中竊取 SAM 資料庫並生成完整的 SYSTEM 層級 Shell。儘管研究員在最新的 Windows 11 25H2 與 Avast Antivirus 上進行了驗證，但她推測此問題可能也影響到 Gen Digital 旗下的 AVG 和 Norton 等其他防毒產品。安全專家建議用戶應儘快更新所有防毒軟體以防範潛在風險。",
    tags: ["卡巴斯基", "Avast Antivirus", "HardBreacher", "PrettyPrague", "權限提升", "零時差漏洞", "端點防護"],
    title_en: "Security Researcher Discloses Kaspersky and Avast Antivirus Zero-Day Vulnerabilities, Potentially Leading to Privilege Escalation and System Control",
    summary_en: "Security researcher Nightmare Eclipse (Chaotic Eclipse) continues to conduct security research on antivirus software. Recently, the researcher disclosed the privilege escalation vulnerability, HardBreacher, in Kaspersky Endpoint Security. Successful exploitation could allow an attacker to gain full system privileges. Furthermore, if the user interface workflow can be controlled, it could also lead to the antivirus software becoming uncontrollable, ceasing operation, or restricting file access. Kaspersky has released a relevant patch through automatic updates. Separately, the researcher also disclosed the zero-day vulnerability, PrettyPrague, affecting Avast Antivirus, a product of Gen Digital. The proof-of-concept code provided demonstrates that this vulnerability can be exploited to abuse the antivirus software's sandbox component, allowing the theft of the SAM database and the generation of a full SYSTEM-level shell. Although the researcher validated this issue on Windows 11 25H2 and Avast Antivirus, they speculate that the problem may also affect other antivirus products under Gen Digital, such as AVG and Norton. Security experts advise users to update all antivirus software promptly to prevent potential risks.",
    tags_en: ["Kaspersky", "Avast Antivirus", "HardBreacher", "PrettyPrague", "Privilege Escalation", "Zero-Day Vulnerability", "Endpoint Protection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178570", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10314",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FIRST 宣布 VulnOptiCON 2026，聚焦 AI 時代下漏洞管理與風險應對",
    summary: "隨著 AI 技術的導入，資安團隊面臨的漏洞修補時程正被大幅壓縮，產業迫切需要調整應對策略。國際資安應變組織 FIRST 宣布，原 Vuln4Cast 研討會更名並擴大舉辦為 VulnOptiCON 2026，將於 9 月 23 日至 25 日在盧森堡舉行。本次會議的主題從原先的漏洞預測技術，擴展至涵蓋漏洞追蹤、CVE 計畫的前景，以及 AI 如何改變漏洞的發現與利用等更廣泛的生態系統議題。FIRST 預測今年 CVE 漏洞數量將突破 6.6 萬個，凸顯了風險管理的迫切性。研討會將匯集資安實務人員、研究人員及資料科學家，分享如何利用漏洞相關資料進行預防性應對，以應對 AI 加速下的不確定性與變化。",
    tags: ["FIRST", "VulnOptiCON 2026", "CVE", "AI 攻擊", "漏洞管理", "資安應變"],
    title_en: "FIRST Announces VulnOptiCON 2026, Focusing on Vulnerability Management and Risk Response in the AI Era",
    summary_en: "With the integration of AI technology, cybersecurity teams are facing significantly compressed vulnerability patching timelines, creating an urgent need for adjusted industry response strategies. The international cybersecurity response organization FIRST announced that the former Vuln4Cast conference has been renamed and expanded into VulnOptiCON 2026, which will be held from September 23 to 25 in Luxembourg. The conference theme has expanded from its original focus on vulnerability prediction techniques to cover broader ecosystem issues, including vulnerability tracking, the future of CVE planning, and how AI is changing vulnerability discovery and exploitation. FIRST predicts that the number of CVE vulnerabilities this year will exceed 66,000, highlighting the urgency of risk management. The conference will gather cybersecurity practitioners, researchers, and data scientists to share how to use vulnerability-related data for proactive defense against the uncertainties and changes accelerated by AI.",
    tags_en: ["FIRST", "VulnOptiCON 2026", "CVE", "AI Attacks", "Vulnerability Management", "Cybersecurity Incident Response"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178563", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10315",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PaperCut 零時差漏洞遭利用，資安公司揭露攻擊活動，涉及 CVE-2026-82078 與 CVE-2026-81578",
    summary: "列印管理系統供應商 PaperCut 於 8 月 27 日發出警告，指出有人利用零時差漏洞攻擊 PaperCut NG 與 PaperCut MF 用戶。這些弱點已分別被登記為 CVE-2026-82078 和 CVE-2026-81578。在 PaperCut 發出警告前，威脅情報公司 Huntress 已觀察到兩起漏洞利用活動，其中一例在 8 月 26 日發生，攻擊者利用事件記錄檔中的 Base64 編碼字串執行指令，以識別受害電腦的使用者帳號和 Windows 作業系統版本。另一起事故在 27 日發生，攻擊者還能偵測正在執行的處理程序。此外，watchTowr 也偵測到漏洞利用，並發現了額外的身分驗證繞過弱點。Defused Cyber 在 8 月 29 日的蜜罐中偵測到不同類型的攻擊，該攻擊主要用於竊取資料庫表單內容，而非遠端程式碼執行（RCE）。建議用戶應密切關注供應商的官方安全公告，並儘快採取必要的修補措施以防範潛在風險。",
    tags: ["PaperCut", "CVE-2026-82078", "CVE-2026-81578", "零時差漏洞", "漏洞利用", "資安威脅情報"],
    title_en: "PaperCut Zero-Day Vulnerability Exploited; Security Firms Reveal Attack Activity Involving CVE-2026-82078 and CVE-2026-81578",
    summary_en: "Print management system vendor PaperCut issued a warning on August 27th, noting that zero-day vulnerabilities were being exploited to attack PaperCut NG and PaperCut MF users. These weaknesses have been registered as CVE-2026-82078 and CVE-2026-81578, respectively. Before PaperCut issued its warning, threat intelligence firm Huntress observed two instances of vulnerability exploitation. One incident occurred on August 26th, where attackers used a Base64 encoded string within event logs to execute commands, identifying the affected computer's user account and Windows operating system version. Another incident on the 27th showed that attackers could also detect running processes. Additionally, watchTowr detected the vulnerability exploitation and discovered an additional authentication bypass weakness. Defused Cyber detected various types of attacks in its honeypot on August 29th, noting that the attacks were primarily aimed at stealing database form content rather than achieving Remote Code Execution (RCE). Users are advised to closely monitor official vendor security announcements and implement necessary patches promptly to prevent potential risks.",
    tags_en: ["PaperCut", "CVE-2026-82078", "CVE-2026-81578", "Zero-Day Vulnerability", "Exploitation", "Cybersecurity Threat Intelligence"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178579", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/178566", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10316",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "PaperCut 系統遭零時差漏洞攻擊，CISA 警告已遭利用，要求政府機構緊急修補",
    summary: "列印管理系統供應商 PaperCut 針對其 PaperCut NG 與 PaperCut MF 系統發出安全警告，指出存在零時差漏洞 CVE-2026-82078 和 CVE-2026-81578。安全機構已掌握有客戶遭受利用的證據，並將這些漏洞列入已遭利用的漏洞名單（KEV）。美國網路安全與基礎設施安全局（CISA）已發布警告，要求聯邦機構必須在 9 月 14 日前完成修補工作。此事件凸顯了關鍵基礎設施軟體面臨的即時安全風險，建議受影響的組織應立即採取補丁更新措施，以防止進一步的惡意攻擊。",
    tags: ["PaperCut", "CVE-2026-82078", "CVE-2026-81578", "零時差漏洞", "CISA", "列印管理系統"],
    title_en: "PaperCut System Targeted by Zero-Day Vulnerability Attack; CISA Warns of Exploitation and Mandates Emergency Patching",
    summary_en: "Print management system vendor PaperCut has issued a security advisory concerning its PaperCut NG and PaperCut MF systems, revealing two zero-day vulnerabilities: CVE-2026-82078 and CVE-2026-81578. Security agencies have confirmed evidence of customer exploitation, listing these vulnerabilities in their Known Exploited Vulnerabilities (KEV) catalog. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning, mandating that federal agencies complete patching by September 14. This incident highlights the immediate security risks faced by critical infrastructure software, advising affected organizations to implement patch updates immediately to prevent further malicious attacks.",
    tags_en: ["PaperCut", "CVE-2026-82078", "CVE-2026-81578", "Zero-Day Vulnerability", "CISA", "Print Management System"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178562", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10318",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟追蹤假冒軟體安裝程式惡意活動，攻擊者利用仿冒網站滲透多產業運營",
    summary: "微軟安全專家正在追蹤一場活躍的惡意軟體活動，該活動利用假冒軟體下載網站來冒充可信供應商，並散播惡意安裝程式。此次活動主要針對尋求下載熱門軟體的用戶，已導致多個組織和產業遭受入侵，特別影響中國境內的多國企業營運和華語使用者。受影響的產業涵蓋醫療保健、製造業、遊戲、科技、物流、政府和教育等領域。攻擊鏈始於仿冒的供應商下載頁面，隨後傳遞動態生成的安裝程式壓縮檔。惡意安裝程式在執行後會部署惡意軟體，建立持久性，並與攻擊者控制的基礎設施進行通訊。微軟評估此活動與公開報導的 Silver Fox（或 Yinhu, 银狐）假軟體活動一致，但尚未歸因於國家級行為者。建議組織應優先防止從不受信任的軟體來源下載，並確保 SmartScreen、網路保護、防篡改保護和 Microsoft Defender XDR 等保護功能已啟用，以協助識別、阻擋和應對相關活動。",
    tags: ["惡意軟體活動", "假冒軟體", "Microsoft Defender", "Silver Fox", "供應鏈安全", "中國市場", "網路威脅"],
    title_en: "Microsoft Tracks Malicious Activity from Fake Software Installers, Attackers Penetrate Multiple Industries via Impersonation Websites",
    summary_en: "Microsoft security experts are tracking an active malicious software campaign that utilizes fake software download websites to impersonate trusted vendors and distribute malicious installers. This campaign primarily targets users seeking to download popular software, leading to intrusions across multiple organizations and industries, particularly affecting multinational corporations operating in China and Chinese-speaking users. Affected sectors include healthcare, manufacturing, gaming, technology, logistics, government, and education. The attack chain begins at a fake vendor download page, subsequently delivering dynamically generated installer archives. Upon execution, the malicious installer deploys malware, establishes persistence, and communicates with attacker-controlled infrastructure. Microsoft assesses this activity to be consistent with the publicly reported Silver Fox (or Yinhu, 银狐) fake software campaign, but has not yet attributed it to a state-level actor. Organizations are advised to prioritize preventing downloads from untrusted software sources and ensure that protective features such as SmartScreen, Network Protection, Tamper Protection, and Microsoft Defender XDR are enabled to assist in identifying, blocking, and responding to related activities.",
    tags_en: ["Malware Campaign", "Fake Software", "Microsoft Defender", "Silver Fox", "Supply Chain Security", "China Market", "Cyber Threat"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/09/01/counterfeit-installers-system-compromise-tracking-deceptive-software-download-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260901-10325",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究人員利用 AI 成功將 PLC 漏洞移植至新設備，凸顯 AI 在 OT 安全領域的潛在風險",
    summary: "Forescout 的 Vedere Labs 研究人員利用 Anthropic 的 Claude 模型，成功地將一個針對 WAGO PLC 的遠端程式碼執行 (RCE) 漏洞移植到另一個相關的 WAGO PLC 型號上。該起始漏洞基於 CVE-2021-31886，這是一個針對 Nucleus FTP 伺服器的預認證緩衝區溢位漏洞，允許未經身份驗證的攻擊者在目標 PLC 上執行任意 ARM Shellcode。研究人員在進行實驗時，使用了 Claude Code，並讓其存取終端機、Ghidra 等工具。儘管 AI 成功生成了可運作的 Payload，但過程需要數小時的專注工作和高額的 API 費用。研究人員指出，雖然目前人工操作可能更經濟，但隨著所需專家干預程度的降低，AI 在大規模針對多個相關目標進行攻擊的邊際成本上具有巨大潛力。此外，後續嘗試開發命令與控制 (C2) 植入物時，AI 導致設備永久損壞。",
    tags: ["WAGO PLC", "CVE-2021-31886", "RCE", "AI 攻擊", "OT 安全", "工業控制系統"],
    title_en: "Researchers Successfully Port PLC Vulnerability to New Device Using AI, Highlighting Potential Risks in OT Security",
    summary_en: "Researchers from Forescout's Vedere Labs utilized Anthropic's Claude model to successfully port a Remote Code Execution (RCE) vulnerability targeting a WAGO PLC to another related WAGO PLC model. The initial vulnerability was based on CVE-2021-31886, a pre-authenticated buffer overflow vulnerability in the Nucleus FTP server, which allows unauthenticated attackers to execute arbitrary ARM Shellcode on the target PLC. During the experiment, the researchers used Claude Code, granting it access to tools like the terminal and Ghidra. Although the AI successfully generated a functional payload, the process required several hours of focused work and incurred high API costs. The researchers noted that while manual operation may currently be more economical, AI holds immense potential for significantly reducing the marginal cost of large-scale attacks against multiple related targets as the required level of expert intervention decreases. Furthermore, subsequent attempts to develop Command and Control (C2) implants resulted in permanent damage to the device caused by the AI.",
    tags_en: ["WAGO PLC", "CVE-2021-31886", "RCE", "AI Attacks", "OT Security", "Industrial Control Systems"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/experiment-porting-a-plc-exploit-with-ai-takes-hours-and-hundreds-of-dollars", lang: "EN" }
    ]
  },
  {
    id: "20260901-10331",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "攻擊者在 JFrog Artifactory 關鍵漏洞 CVE-2026-82329 上持續利用，導致管理員權限外洩",
    summary: "根據 watchTowr 的報告，威脅行為者在 JFrog Artifactory 上的新修補關鍵安全漏洞 CVE-2026-82329 公佈數天後即開始利用。此漏洞是一個身份驗證繞過問題，在預設配置下，允許未經身份驗證的攻擊者在具有網路存取權限的情況下獲得管理員權限。該漏洞存在於 JFrog Access 中，攻擊者可利用「幽靈」加入金鑰來偽造存取權限並生成管理員級憑證。JFrog 已於 2026 年 8 月 28 日發布了 Artifactory 版本 7.161.20 進行修補，影響的舊版本包括 7.161.0 > 7.161.19 等。Vercel CEO Guillermo Rauch 指出，由於 Artifactory 託管二進位檔，此漏洞具有極高的潛在危害性。建議運行自管型 JFrog Artifactory 的組織應立即修補暴露在網際網路上的系統，並檢查稽核日誌、輪換暴露的憑證，以及審查連接的系統是否存在惡意更改或後門存取。",
    tags: ["JFrog Artifactory", "CVE-2026-82329", "身份驗證繞過", "供應鏈安全", "管理員權限", "網路攻擊"],
    title_en: "Attackers Continue Exploiting Critical JFrog Artifactory Vulnerability CVE-2026-82329, Leading to Administrator Privilege Leakage",
    summary_en: "According to a report by watchTowr, threat actors began exploiting the newly patched critical security vulnerability CVE-2026-82329 in JFrog Artifactory just days after its disclosure. This vulnerability is an authentication bypass issue that, under default configurations, allows unauthenticated attackers with network access to gain administrator privileges. The flaw exists in JFrog Access, where attackers can utilize a 'ghost' key to forge access credentials and generate administrator-level tokens. JFrog released Artifactory version 7.161.20 on August 28, 2026, to patch the issue, affecting older versions including 7.161.0 > 7.161.19. Vercel CEO Guillermo Rauch noted that due to Artifactory hosting binaries, this vulnerability poses extremely high potential risk. Organizations running self-hosted JFrog Artifactory are advised to immediately patch any internet-exposed systems, check audit logs, rotate exposed credentials, and review connected systems for malicious changes or backdoor access.",
    tags_en: ["JFrog Artifactory", "CVE-2026-82329", "Authentication Bypass", "Supply Chain Security", "Administrator Privilege", "Network Attack"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/attackers-pounce-critical-artifactory-flaw-disclosure", lang: "EN" },
      { name: "SecurityWeek", url: "https://securityweek.com/critical-jfrog-artifactory-vulnerability-reportedly-exploited-in-the-wild", lang: "EN" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-exploit-critical-jfrog.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10332",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安威脅分析：Breeze Comet 駭客組織鎖定巴西金融業，利用多種技術進行詐騙轉帳",
    summary: "Google Threat Intelligence Group (GTIG) 和 Mandiant 報告指出，一個名為 Breeze Comet（前 UNC5669）的財務動機威脅行為者，自 2024 年以來持續鎖定巴西的金融服務、零售和電子商務機構。該組織專精於操縱巴西的支付系統和銀行軟體以進行詐騙轉帳，已成功執行了數十萬美元的資產盜竊。攻擊者透過釣魚（如冒充 IT 支援人員在 WhatsApp 上引導安裝 PowerShell 腳本）或攻擊易受攻擊的 JBoss AS 伺服器來獲取初始存取權。進階階段，他們使用 COBALTSPIN 等惡意軟體進行橫向移動，並利用多種後門（如 LIGHTPAINT、MILDFROST、KICKPLATE、BOATBEAM）建立持久性。最終，攻擊者利用特權帳戶和 COBALTSPIN 存取核心金融應用程式，執行大量詐騙交易，並清除事件日誌以掩蓋足跡。修補建議包括加強身份驗證、監控異常的 RMM 工具安裝，並對支付系統的 API 進行嚴格的異常行為監控。",
    tags: ["Breeze Comet", "巴西金融業", "詐騙轉帳", "COBALTSPIN", "RMM 工具", "APT 組織"],
    title_en: "Cyber Threat Analysis: Breeze Comet Targets Brazilian Financial Sector Using Multiple Techniques for Fraudulent Transfers",
    summary_en: "Reports from the Google Threat Intelligence Group (GTIG) and Mandiant indicate that a financially motivated threat actor, known as Breeze Comet (formerly UNC5669), has been continuously targeting financial services, retail, and e-commerce institutions in Brazil since 2024. This group specializes in manipulating Brazil's payment systems and banking software to execute fraudulent transfers, successfully stealing hundreds of thousands of dollars in assets. Attackers gain initial access through phishing (such as impersonating IT support staff on WhatsApp to trick victims into installing PowerShell scripts) or by exploiting vulnerable JBoss AS servers. In the advanced stage, they use malware like COBALTSPIN for lateral movement and establish persistence using multiple backdoors (such as LIGHTPAINT, MILDFROST, KICKPLATE, and BOATBEAM). Finally, the attackers utilize privileged accounts and COBALTSPIN to access core financial applications, execute large volumes of fraudulent transactions, and clear event logs to cover their tracks. Remediation recommendations include strengthening identity authentication, monitoring for anomalous RMM tool installations, and implementing strict behavioral monitoring on payment system APIs.",
    tags_en: ["Breeze Comet", "Brazilian Financial Sector", "Fraudulent Transfers", "COBALTSPIN", "RMM Tools", "APT Group"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/breeze-comet-executes-hundreds-of.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10334",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "伊朗駭客組織 Nimbus Manticore 利用釣魚郵件滲透，部署跨平台 RAT 惡意軟體",
    summary: "伊朗駭客組織 Nimbus Manticore 被歸因於兩款未公開的惡意軟體家族：NodeRabbit 和 PollCat。該組織利用釣魚郵件，特別是偽裝成技術職位招募人員的「夢想工作」誘餌，透過 LinkedIn 等平台發送包含惡意編碼挑戰檔案的郵件。受害者在完成看似無害的工程挑戰時，會被引導下載包含惡意程式碼的壓縮檔。NodeRabbit 透過植入惡意 npm 套件（如 colorized_terminal）來靜默啟動後門植入物，該植入物會與 Azure 託管的 C2 伺服器進行通訊。該惡意軟體支援多達 11 個命令，可執行諸如收集主機詳情、執行任意 Shell 命令等操作。該組織的工具集正在擴展，已開始開發支援 Linux 和 Apple macOS 的跨平台 RAT。持久化機制依作業系統不同而異，包括 Windows Run 登錄檔鍵、Linux cron 條目和 macOS 啟動代理。Kaspersky 正在追蹤這些惡意軟體變種，顯示出攻擊者在利用軟體開發流程進行滲透的趨勢。",
    tags: ["Nimbus Manticore", "NodeRabbit", "PollCat", "釣魚攻擊", "RAT", "npm 套件", "跨平台"],
    title_en: "Iranian Hacker Group Nimbus Manticore Uses Phishing Emails to Deploy Cross-Platform RAT Malware",
    summary_en: "The Iranian hacker group Nimbus Manticore has been attributed to two previously unknown malware families: NodeRabbit and PollCat. The group uses phishing emails, specifically employing a \"dream job\" lure disguised as technical recruitment, sent via platforms like LinkedIn. These emails contain malicious coding challenge files. When victims complete the seemingly harmless engineering challenge, they are guided to download a compressed file containing malicious code. NodeRabbit silently activates a backdoor implant by injecting malicious npm packages (such as colorized_terminal), which then communicates with an Azure-hosted C2 server. This malware supports up to 11 commands, capable of performing actions such as collecting host details and executing arbitrary shell commands. The group's toolkit is expanding, and they have begun developing a cross-platform RAT supporting Linux and Apple macOS. Persistence mechanisms vary by operating system, including Windows Run registry keys, Linux cron entries, and macOS launch agents. Kaspersky is tracking these malware variants, highlighting a trend of attackers exploiting software development processes for infiltration.",
    tags_en: ["Nimbus Manticore", "NodeRabbit", "PollCat", "Phishing Attack", "RAT", "npm Package", "Cross-Platform"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/iranian-hackers-pose-as-recruiters-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10335",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客趨勢分析：攻擊者偏好可複製的「流程」而非新穎的「攻擊技術」",
    summary: "近期安全分析顯示，駭客的攻擊模式正從開發複雜的零日漏洞或新工具，轉向採用可大規模複製的「操作流程」（Playbook）。這類攻擊不依賴特定技術堆疊，而是利用人類行為或現有系統工具。例如，ClickFix 技術被觀察到是導致攻擊的常見初始存取方式，它不依賴任何漏洞，因此無需修補，且不產生可被掃描的附件。在後續的攻擊階段，攻擊者大量使用系統內建的行政工具（Living off the land），這類工具在受害者環境中普遍存在，且不需安裝惡意軟體。這類模式的成功在於其可擴展性，類似於仿製藥廠依賴既有研究成果進行量產，而非從零開始發明。這類趨勢使得攻擊的成功率高度依賴於目標的暴露程度，而非技術上的精妙性。安全防禦應關注如何應對這種基於流程的、可重複的攻擊模式。",
    tags: ["ClickFix", "Living off the land", "攻擊流程", "初始存取", "威脅情報", "系統工具"],
    title_en: "Hacker Trend Analysis: Attackers Prefer Replicable 'Processes' Over Novel 'Attack Techniques'",
    summary_en: "Recent security analyses indicate that hacker attack patterns are shifting from developing complex zero-day vulnerabilities or new tools, toward adopting large-scale replicable 'playbooks.' These attacks do not rely on specific technology stacks but rather exploit human behavior or existing system tools. For example, ClickFix has been observed as a common initial access method for attacks. Since it does not depend on any vulnerability, no patching is required, and it does not generate scannable attachments. In subsequent attack stages, attackers heavily utilize built-in administrative tools (Living off the land). These tools are universally present in the victim's environment and do not require the installation of malware. The success of this pattern lies in its scalability, similar to how generic drug manufacturers rely on existing research findings for mass production rather than inventing from scratch. This trend means that the success rate of an attack highly depends on the target's exposure level, rather than technical sophistication. Security defenses should focus on how to counter these process-based, repeatable attack patterns.",
    tags_en: ["ClickFix", "Living off the land", "Attack Playbook", "Initial Access", "Threat Intelligence", "System Tools"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/threat-actors-dont-want-better-attacks.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10336",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "METR 曝遭兩次資安事件：攻擊者竊取 API 金鑰並大量消耗公有模型信用額度",
    summary: "研究機構 METR 公布其遭遇兩起安全事件，外部行為者試圖未經授權存取其系統。儘管機構表示未有敏感資訊外洩，但攻擊者在 2026 年 3 月竊取了用於公有模型推論的 API 金鑰，並在三週內消耗了大量信用額度，估計金額高達 60 萬美元。該事件源於一個「fail-open 漏洞」，導致一個本應受 Google 認證保護的個人 EC2 實例在數日內意外暴露於公網。此外，攻擊者利用該金鑰進行了惡意使用。在 2026 年 5 月，METR 觀察到一場持續性的外部攻擊活動，攻擊者利用代理程式自動化漏洞發現，並試圖滲透其公開基礎設施。此時，一個本應只包含非敏感模型資料的資料庫，意外地包含了敏感模型資料，但 METR 表示攻擊者未經證實地存取到任何非公開資料。METR 已更新安全政策，加強監控並為金鑰增加支出警報。",
    tags: ["METR", "API 金鑰竊取", "Fail-open 漏洞", "AI 安全", "攻擊活動", "公有模型"],
    title_en: "METR Suffers Two Security Incidents: Attackers Steal API Key and Consume Massive Public Model Credits",
    summary_en: "Research institution METR announced that it was the target of two security incidents involving external actors attempting unauthorized access to its systems. Although the institution stated that no sensitive information was leaked, attackers stole an API key used for public model inference in March 2026, consuming a large amount of credits over three weeks, estimated to cost up to $600,000. This incident stemmed from a \"fail-open vulnerability,\" which unexpectedly exposed a personal EC2 instance, supposedly protected by Google certification, to the public internet over several days. Furthermore, the attackers misused this key. In May 2026, METR observed a persistent external attack campaign where attackers exploited a proxy automation vulnerability and attempted to penetrate its public infrastructure. During this time, a database that should have only contained non-sensitive model data unexpectedly included sensitive model data, but METR stated that attackers did not access any non-public data without verification. METR has since updated its security policies, enhanced monitoring, and implemented expenditure alerts for the key.",
    tags_en: ["METR", "API Key Theft", "Fail-open Vulnerability", "AI Security", "Attack Activity", "Public Model"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-steal-metr-api-key-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10338",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安威脅：攻擊者利用 Langflow 與 Ruby on Rails 的兩項關鍵漏洞進行攻擊",
    summary: "VulnCheck 最新發現，攻擊者正在利用 Langflow 和 Ruby on Rails 中的兩項關鍵漏洞進行攻擊。其中 CVE-2026-0768 是一個嚴重漏洞（CVSS 9.8），由於輸入驗證不足，可能允許攻擊者以 root 使用者權限執行任意 Python 代碼。另一個漏洞 CVE-2026-66066（代號 KindaRails2Shell，CVSS 9.5）允許未經身份驗證的攻擊者讀取伺服器上的任意檔案，並洩露如密鑰、資料庫密碼和 API 令牌等敏感資訊，最終可導致遠端程式碼執行。CVE-2026-66066 的利用方式是利用 Active Storage 與 libvips 在讀取輸入檔案時的差異。VulnCheck 記錄到大量偵測，顯示威脅行為者正在進行情報收集和憑證採集活動，目標包括查詢環境變數和讀取秘密金鑰。安全研究人員指出，即使在修補後的伺服器上，CVE-2026-66066 的變體金鑰序列化反序列化漏洞仍可能存在風險。目前已發現數千個暴露的 Ruby on Rails 實例存在此類漏洞，凸顯了 AI 開發平台日益受到威脅的趨勢。",
    tags: ["Langflow", "Ruby on Rails", "CVE-2026-0768", "CVE-2026-66066", "遠端程式碼執行", "資安威脅情報"],
    title_en: "Cybersecurity Threat: Attackers Exploiting Two Critical Vulnerabilities in Langflow and Ruby on Rails",
    summary_en: "VulnCheck has discovered that attackers are exploiting two critical vulnerabilities in Langflow and Ruby on Rails. CVE-2026-0768 is a severe vulnerability (CVSS 9.8) that, due to insufficient input validation, could allow an attacker to execute arbitrary Python code with root user privileges. The other vulnerability, CVE-2026-66066 (codename KindaRails2Shell, CVSS 9.5), allows unauthenticated attackers to read arbitrary files on the server, potentially leaking sensitive information such as keys, database passwords, and API tokens, which could ultimately lead to Remote Code Execution (RCE). CVE-2026-66066 is exploited by leveraging a discrepancy between Active Storage and libvips when reading input files. VulnCheck has recorded a large volume of detections, indicating that threat actors are engaged in reconnaissance and credential harvesting activities, targeting the querying of environment variables and the reading of secret keys. Security researchers point out that even on patched servers, variants of the CVE-2026-66066 key serialization deserialization vulnerability may still pose a risk. Thousands of exposed Ruby on Rails instances have been found with this type of vulnerability, highlighting the increasing threat facing AI development platforms.",
    tags_en: ["Langflow", "Ruby on Rails", "CVE-2026-0768", "CVE-2026-66066", "Remote Code Execution", "Cybersecurity Threat Intelligence"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/attackers-exploit-critical-langflow-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10341",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Spark 3.5.4 存在 XSS 漏洞，可能導致瀏覽器權限提升",
    summary: "Apache Spark 的 Spark History Server 在 3.5.8 版本之前存在一個跨站腳本 (XSS) 漏洞，編號為 CVE-2026-32773。此漏洞源於 Spark History Server 中缺乏對 XSS 的轉義處理，允許惡意 Spark 作業生成任意未轉義的前端程式碼，從而可能在瀏覽器中導致最低權限提升。該漏洞被評定為「低」風險，因為利用該漏洞需要攻擊者具備相對較高的權限（能夠啟動 Spark 作業），並且需要欺騙擁有更高權限的使用者登入並訪問 Spark 歷史記錄網頁。建議使用者應升級至 Spark 3.5.8 或更高版本，以修補此安全問題。此問題正在以 SPARK-53747 追蹤。",
    tags: ["Apache Spark", "CVE-2026-32773", "XSS", "Spark History Server", "安全漏洞", "軟體更新"],
    title_en: "Apache Spark 3.5.4 Contains XSS Vulnerability, Potentially Leading to Browser Privilege Escalation",
    summary_en: "The Spark History Server in Apache Spark versions prior to 3.5.8 contains a Cross-Site Scripting (XSS) vulnerability, identified as CVE-2026-32773. This vulnerability stems from the lack of XSS encoding handling within the Spark History Server, which allows malicious Spark jobs to generate arbitrary, unencoded frontend code. This could potentially lead to a low-privilege escalation in the browser. The vulnerability is rated as 'Low' risk because exploiting it requires the attacker to possess relatively high privileges (the ability to launch Spark jobs) and requires tricking a higher-privileged user into logging in and accessing the Spark history web page. Users are advised to upgrade to Spark 3.5.8 or later versions to patch this security issue. This issue is being tracked under SPARK-53747.",
    tags_en: ["Apache Spark", "CVE-2026-32773", "XSS", "Spark History Server", "Vulnerability", "Software Update"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/01/4", lang: "EN" }
    ]
  },
  {
    id: "20260901-10342",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "NLTK 函式庫曝 ReDoS 漏洞，高風險用戶輸入可導致服務中斷",
    summary: "知名 Python 自然語言處理函式庫 NLTK 發現了高嚴重性漏洞 CVE-2026-80205。該漏洞存在於 Text.findall() 和 TokenSearcher.findall() 方法中，允許攻擊者透過提供惡意正規表達式 (regex) 模式，觸發正規表達式阻斷服務 (ReDoS) 攻擊。根本原因在於這些方法在將使用者輸入轉換為標準 regex 後，未對其進行時效限制或回溯複雜度驗證，導致嵌套量詞可能強制指數級狀態枚舉，使 CPU 負載飆升並使程序無限期掛起。受影響的版本為 nltk <= 3.9.4，建議使用者立即升級至 3.10.0 或更高版本。修補措施是將標準函式庫的 re 替換為支援逾時參數的正規表達式函式庫，並為受影響的方法增加了明確的逾時參數，若超過時間將拋出 TimeoutError，從而防止無限期佔用資源。",
    tags: ["NLTK", "CVE-2026-80205", "ReDoS", "Python", "自然語言處理", "函式庫漏洞"],
    title_en: "NLTK Library Exposed to ReDoS Vulnerability; High-Risk User Input Can Cause Service Disruption",
    summary_en: "The popular Python natural language processing library NLTK has discovered a high-severity vulnerability, CVE-2026-80205. This vulnerability exists in the Text.findall() and TokenSearcher.findall() methods, allowing an attacker to trigger a Regular Expression Denial of Service (ReDoS) attack by providing a malicious regular expression (regex) pattern. The root cause is that these methods fail to implement time limits or backtracking complexity validation when converting user input into a standard regex. This allows nested quantifiers to potentially force exponential state enumeration, causing CPU load to spike and the program to hang indefinitely. Affected versions are nltk <= 3.9.4; users are advised to immediately upgrade to version 3.10.0 or higher. The fix involves replacing the standard library's re module with a regex library that supports timeout parameters, and adding explicit timeout parameters to the affected methods. If the time limit is exceeded, a TimeoutError is raised, thereby preventing indefinite resource consumption.",
    tags_en: ["NLTK", "CVE-2026-80205", "ReDoS", "Python", "Natural Language Processing", "Library Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/01/3", lang: "EN" }
    ]
  },
  {
    id: "20260901-10343",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "FreeRDP 3.30.0 及更早版本存在五項伺服器端漏洞，可觸發預認證遠端程式碼執行",
    summary: "FreeRDP 3.31.0 版本修補了 Bynario 報告的五項伺服器端漏洞，以及其他 17 個安全問題。研究人員展示了如何將其中三項漏洞鏈接起來，以實現預認證遠端程式碼執行（RCE）。受影響的應用程式包括嵌入 FreeRDP 作為 RDP 伺服器的 GNOME Remote Desktop 和 KDE krdp。雖然這些服務通常不會預設啟用，但若管理員配置使用受影響的遠端桌面/登入服務，則會受到影響。漏洞包括 GHSA-x7v6-xfx3-52j6（CVSS 9.3，臨界級），允許預認證安全機制選擇繞過；GHSA-r7jx-j9h7-j4xj（CVSS 6.5，中等級），導致未初始化堆洩漏；GHSA-9jcm-x588-gh26（CVSS 7.5，高危級），可能導致遠端拒絕服務或在特定建構中觸發寫入操作。修補建議是升級至 FreeRDP 3.31.0。對於使用 3.30.0 或更早版本的發行版，建議進行 3.31.0 的重基或自行實作回溯補丁。",
    tags: ["FreeRDP", "RDP", "CVE", "遠端程式碼執行", "GNOME Remote Desktop", "GHSA"],
    title_en: "FreeRDP versions 3.30.0 and earlier contain five server-side vulnerabilities, allowing pre-authentication remote code execution",
    summary_en: "FreeRDP version 3.31.0 patches five server-side vulnerabilities reported by Bynario, as well as 17 other security issues. Researchers demonstrated how to chain three of these vulnerabilities to achieve pre-authentication Remote Code Execution (RCE). Affected applications include GNOME Remote Desktop and KDE krdp, which embed FreeRDP as an RDP server. Although these services are typically not enabled by default, they are affected if an administrator configures them to use the vulnerable remote desktop/login service. The vulnerabilities include GHSA-x7v6-xfx3-52j6 (CVSS 9.3, Critical), which allows for pre-authentication security mechanism bypass; GHSA-r7jx-j9h7-j4xj (CVSS 6.5, Medium), leading to an uninitialized heap leak; and GHSA-9jcm-x588-gh26 (CVSS 7.5, High), potentially causing remote denial-of-service or triggering write operations in specific builds. The recommended fix is to upgrade to FreeRDP 3.31.0. For distributions using 3.30.0 or earlier, it is recommended to rebase to 3.31.0 or apply a manual backport patch.",
    tags_en: ["FreeRDP", "RDP", "CVE", "Remote Code Execution", "GNOME Remote Desktop", "GHSA"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/01/2", lang: "EN" }
    ]
  },
  {
    id: "20260901-10344",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "HTML::FormFu 函式庫存在資源耗盡漏洞 CVE-2026-19873，可能導致服務癱瘓",
    summary: "資安研究人員發布了關於 Perl 語言中 HTML::FormFu 函式庫的 CVE-2026-19873 漏洞。此漏洞允許攻擊者透過查詢字串中 Repeatable 元素的無界重複次數，觸發資源耗盡情況。這類漏洞可能導致目標伺服器資源被耗盡，最終造成服務無法正常運作或癱瘓。雖然原始郵件中提到了補丁的連結在發布時出現 404 錯誤，但此漏洞的性質屬於典型的輸入驗證缺陷。建議使用者應立即升級至修復後的版本，以防止遭受資源耗盡攻擊。由於原文未提供 CVSS 分數或受影響的具體版本範圍，建議使用者密切關注官方安全公告以獲取最新的修補資訊。",
    tags: ["HTML::FormFu", "CVE-2026-19873", "Perl", "資源耗盡", "輸入驗證"],
    title_en: "HTML::FormFu Library Has Resource Exhaustion Vulnerability CVE-2026-19873, Potentially Causing Service Denial",
    summary_en: "Security researchers have disclosed CVE-2026-19873, a vulnerability in the HTML::FormFu library written in Perl. This flaw allows an attacker to trigger a resource exhaustion condition by querying elements with repeatable attributes an unbounded number of times. Such vulnerabilities can deplete the target server's resources, ultimately causing the service to become unavailable or crash. Although the original email mentioned a 404 error for the patch link upon release, the nature of this vulnerability is a classic input validation defect. Users are advised to immediately upgrade to the patched version to prevent resource exhaustion attacks. Since the original text did not provide a CVSS score or the specific affected version range, users are advised to closely monitor official security announcements for the latest remediation information.",
    tags_en: ["HTML::FormFu", "CVE-2026-19873", "Perl", "Resource Exhaustion", "Input Validation"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/01/1", lang: "EN" }
    ]
  },
  {
    id: "20260901-10391",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Ultra 預計將搭載 MagSafe 與新機型規格，Mark Gurman 透露更多細節",
    summary: "根據 Mark Gurman 在接受 Tom’s Guide 的最新採訪，關於即將在九月活動中發布的 iPhone Ultra，透露了多項新資訊。該機型預計將保留 MagSafe 功能，並具備 5.5 吋外螢幕和 7.8 吋內螢幕。在規格方面，它將搭載最新的 Apple Pro 晶片和 Apple Modem。關於螢幕，雖然傳聞中的「無摺痕」顯示器並未完全消除，但得益於更耐用的鉬金鉸鏈，其表現可能優於現有的三星摺疊手機。此外，iOS 27 將支援類似 iPad 的應用程式佈局和側邊應用程式多工處理，並新增跨多個螢幕應用程式的拖放功能。關於發布時間，Gurman 預期 iPhone Ultra 將與新的 Pro 手機同時發布或在幾週內發布，不預期會出現大幅延遲。預計起價仍維持在 2,000 美元以上。",
    tags: ["iPhone Ultra", "Apple", "MagSafe", "iOS 27", "摺疊手機", "Mark Gurman"],
    title_en: "iPhone Ultra Expected to Feature MagSafe and New Specifications, Mark Gurman Reveals More Details",
    summary_en: "According to Mark Gurman's latest interview with Tom's Guide, several new details were revealed about the upcoming iPhone Ultra, set to launch at the September event. The model is expected to retain MagSafe functionality and feature a 5.5-inch outer screen and a 7.8-inch inner screen. In terms of specifications, it will be equipped with the latest Apple Pro chip and Apple Modem. Regarding the display, while the rumored 'seamless' display has not been completely eliminated, its performance may surpass existing Samsung foldable phones thanks to a more durable hinge mechanism. Furthermore, iOS 27 will support application layouts and side app multitasking similar to the iPad, and will add drag-and-drop functionality across multiple screen applications. Regarding the release timeline, Gurman anticipates the iPhone Ultra will launch concurrently with the new Pro phones or within a few weeks, and does not expect significant delays. The expected starting price is still projected to be above $2,000 USD.",
    tags_en: ["iPhone Ultra", "Apple", "MagSafe", "iOS 27", "Foldable Phone", "Mark Gurman"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/new-iphone-ultra-details-arrive-for-specs-multitasking-launch-timing-more", lang: "EN" }
    ]
  },
  {
    id: "20260901-10402",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV+ 新增 15 部經典電影，提供訂閱用戶免費觀看",
    summary: "Apple TV+ 近期擴充其內容庫，新增了 15 部經典電影供訂閱用戶免費串流觀看。此前，Apple TV+ 的內容多以原創劇集和電影為主，授權內容較少。本次新增的影片包括《The Social Network》、《War of the Worlds》等，但用戶需注意，電影的可用性可能因居住地區而異，且部分上個月新增的影片已下架。對於希望觀看特定影片的用戶，建議盡快行動。此外，Apple TV+ 訂閱費用為每月 $14.99，或可透過 Apple One 套餐享有折扣。未來幾個月預計會有更多 Apple 原創內容推出。",
    tags: ["Apple TV+", "經典電影", "內容庫擴充", "訂閱服務", "授權內容"],
    title_en: "Apple TV+ Adds 15 Classic Films for Free Viewing to Subscribers",
    summary_en: "Apple TV+ has recently expanded its content library by adding 15 classic films for subscribers to stream for free. Previously, Apple TV+'s content primarily consisted of original series and films, with fewer licensed titles. The newly added films include titles such as 'The Social Network' and 'War of the Worlds,' but users should note that film availability may vary by region, and some titles added last month have already been removed. Users wishing to watch specific films are advised to act quickly. Furthermore, the Apple TV+ subscription fee is $14.99 per month, or a discount may be available through the Apple One bundle. More Apple original content is expected to be released in the coming months.",
    tags_en: ["Apple TV+", "Classic Films", "Content Library Expansion", "Subscription Service", "Licensed Content"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/apple-tv-just-added-a-ton-of-free-classic-movies-heres-everything-new", lang: "EN" }
    ]
  },
  {
    id: "20260901-10403",
    trackers: ["os"],
    category: "Apple",
    title: "Perplexity 推出 Mac 混合運算 AI 功能，強化本地隱私保護",
    summary: "Perplexity 在其 Mac 應用程式中推出了「混合運算」（Hybrid Compute）功能，旨在將人工智慧任務分散到雲端模型和 Mac 本地模型之間，以提升隱私性。此功能允許使用者從 iPhone 觸發任務，而 Mac 則會存取本地檔案並在敏感步驟中執行本地運算。為確保資料隱私，系統會使用一個本地的 PII 分類器來讀取每個任務，將姓名、地址和帳號等個人身份資訊替換為佔位符，待答案返回後再恢復。該本地 PII 分類器已開源，並與 Perplexity 的 Secure Intelligence Institute 合作訓練。此功能要求使用 Apple silicon 晶片，運行 macOS 15 或更高版本，且最低需要 24GB 的統一記憶體，建議使用 32GB 以獲得最佳體驗。使用者可一鍵下載 PPLX Qwen 3.8 27B 等本地模型，無需設定 Ollama 或 API 金鑰。此舉顯示 Perplexity 正在利用 Mac 的硬體能力來提供更注重隱私的 AI 體驗。",
    tags: ["Perplexity", "Hybrid Compute", "macOS", "AI", "隱私保護", "Apple silicon"],
    title_en: "Perplexity Launches Mac Hybrid Compute AI Feature to Enhance Local Privacy Protection",
    summary_en: "Perplexity has introduced a \"Hybrid Compute\" feature in its Mac application, designed to distribute AI tasks between cloud models and local Mac models to enhance privacy. This feature allows users to trigger tasks from an iPhone, while the Mac accesses local files and performs local computation during sensitive steps. To ensure data privacy, the system uses a local PII classifier to read each task, replacing personal identifying information such as names, addresses, and accounts with placeholders, which are restored after the answer is returned. This local PII classifier is open-sourced and was trained in collaboration with Perplexity's Secure Intelligence Institute. The feature requires Apple silicon chips, macOS 15 or later, and a minimum of 24GB of unified memory, with 32GB recommended for the best experience. Users can download local models like PPLX Qwen 3.8 27B with a single click, without needing to set up Ollama or API keys. This move demonstrates Perplexity's utilization of Mac's hardware capabilities to provide a more privacy-focused AI experience.",
    tags_en: ["Perplexity", "Hybrid Compute", "macOS", "AI", "Privacy Protection", "Apple silicon"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/perplexity-launches-privacy-minded-hybrid-compute-ai-feature-for-mac", lang: "EN" }
    ]
  },
  {
    id: "20260901-10406",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 新任 CEO John Ternus 宣布重點：強調產品可靠性、耐用性與永續設計",
    summary: "Apple 已正式任命 John Ternus 為新任執行長，並更新了其官方個人簡介。該簡介明確指出了 Ternus 在任期內關注的幾個核心重點。其中一項新增的段落強調了在硬體領域的「可靠性與耐用性」，以及在「材料與硬體設計上的創新」。Ternus 致力於推動產品的碳足跡減量，例如引入了新型回收鋁化合物，並在多條產品線中應用了該材料。此外，他也關注提升產品的可維修性，以延長多款 Apple 產品的使用壽命。這表明在 Ternus 的領導下，Apple 將持續重視環境永續性，同時將硬體創新和產品長壽命作為關鍵戰略方向。這項更新反映了公司在硬體設計和環保責任上的持續投入。",
    tags: ["Apple", "John Ternus", "CEO", "硬體設計", "永續性", "產品可靠性"],
    title_en: "Apple's New CEO John Ternus Announces Key Focus Areas: Reliability, Durability, and Sustainable Design",
    summary_en: "Apple has officially appointed John Ternus as its new Chief Executive Officer, updating his official biography. This biography clearly outlines several core areas of focus for Ternus during his tenure. One newly added section emphasizes 'reliability and durability' in hardware, as well as 'innovation in materials and hardware design.' Ternus is committed to reducing the carbon footprint of products, for instance, by introducing new recycled aluminum compounds and applying this material across multiple product lines. Furthermore, he is focused on improving product repairability to extend the lifespan of various Apple products. This indicates that under Ternus's leadership, Apple will continue to prioritize environmental sustainability while making hardware innovation and product longevity key strategic directions. This update reflects the company's ongoing commitment to hardware design and environmental responsibility.",
    tags_en: ["Apple", "John Ternus", "CEO", "Hardware Design", "Sustainability", "Product Reliability"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/john-ternus-just-revealed-his-priorities-in-first-introduction-as-apple-ceo", lang: "EN" }
    ]
  },
  {
    id: "20260901-10408",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro 預計推出三種全新顏色：深櫻桃紅/酒紅、天藍色與黑色",
    summary: "根據一位可靠的微博洩密者透露，蘋果即將在下週的九月活動中發布 iPhone 18 Pro 系列，預計將推出三種全新的顏色，且這些顏色將與去年的款式完全不同。洩密者提供的顏色預測包括深櫻桃紅/酒紅、天藍色和黑色。有報導指出，銀色可能不會是今年的選項，這意味著 iPhone 18 Pro 將完全替換 iPhone 17 Pro 的顏色陣容。天藍色雖然過去曾出現在 iPhone Air 和 MacBook Air 上，但其色調非常低調，在日常光線下可能更接近銀色。許多用戶去年對 iPhone 17 Pro 缺乏黑色或 Space Gray 選項感到失望，因此黑色回歸是市場期待的重點。這項洩密情報主要關注產品外觀的變動，並未提及任何技術規格或安全漏洞。",
    tags: ["iPhone 18 Pro", "蘋果", "顏色預測", "iPhone 17 Pro", "洩密情報", "Apple 事件"],
    title_en: "iPhone 18 Pro Expected to Launch with Three New Colors: Deep Cherry Red/Burgundy, Sky Blue, and Black",
    summary_en: "According to a reliable Weibo leak, Apple is set to unveil the iPhone 18 Pro series at next week's September event, which is expected to feature three brand-new colors, all of which will be completely different from last year's models. The leaked colors include Deep Cherry Red/Burgundy, Sky Blue, and Black. Reports indicate that Silver may not be an option this year, meaning the iPhone 18 Pro will completely replace the color lineup of the iPhone 17 Pro. Although Sky Blue has appeared previously on the iPhone Air and MacBook Air, its tone is very subtle and may appear closer to Silver in normal lighting. Many users were disappointed last year by the lack of a Black or Space Gray option for the iPhone 17 Pro, making the return of Black a key market expectation. This leaked information primarily focuses on product aesthetic changes and does not mention any technical specifications or security vulnerabilities.",
    tags_en: ["iPhone 18 Pro", "Apple", "Color Prediction", "iPhone 17 Pro", "Leak Information", "Apple Event"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/here-are-iphone-18-pros-new-colors-says-leaker", lang: "EN" }
    ]
  },
  {
    id: "20260901-10412",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 調整漏洞獎勵計畫：深入探討 macOS 安全面臨的變革",
    summary: "本期 Security Bite Podcast 的第一部分，邀請了 Objective-See 的 Patrick Wardle 與 Moonlock Lab 的 Kseniia Yamburh，深入討論 Apple 漏洞獎勵計畫的最新變動。雖然文章本身是播客的介紹，但其核心內容聚焦於 Apple 安全生態系統的重大調整。第二部分將會延續討論，探討當前 macOS 的威脅情勢，以及即將舉行的 Objective by the Sea 大會。這表明 Apple 在安全防禦策略上正在進行結構性的變革。對於資安專業人士而言，關注這些變動至關重要，因為它們反映了 Apple 對於安全報告和漏洞處理流程的最新方向。建議關注後續的播客內容，以獲取關於 macOS 威脅態勢和安全政策變動的詳細資訊。",
    tags: ["Apple", "漏洞獎勵計畫", "macOS", "資安趨勢", "Objective-See", "安全更新"],
    title_en: "Apple Adjusts Vulnerability Bounty Program: An In-Depth Look at Changes Facing macOS Security",
    summary_en: "The first part of this Security Bite Podcast features Patrick Wardle of Objective-See and Kseniia Yamburh of Moonlock Lab, who discuss the latest changes to Apple's vulnerability bounty program. Although the article is an introduction to the podcast, its core content focuses on major adjustments within the Apple security ecosystem. The second part will continue this discussion, exploring the current threat landscape for macOS and the upcoming Objective by the Sea conference. This indicates that Apple is undergoing structural changes in its security defense strategy. For cybersecurity professionals, monitoring these changes is crucial, as they reflect Apple's latest direction regarding security reporting and vulnerability handling processes. We recommend following the subsequent podcast episodes for detailed information on the macOS threat landscape and security policy changes.",
    tags_en: ["Apple", "Vulnerability Bounty Program", "macOS", "Cybersecurity Trends", "Objective-See", "Security Updates"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/security-bite-podcast-why-apples-making-big-changes-to-its-bug-bounty-program-part-1", lang: "EN" }
    ]
  },
  {
    id: "20260901-10415",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重大更新：通知中心開啟方式將改變，影響 iPhone 與 iPad 使用習慣",
    summary: "Apple 在 iOS 27 中對 iPhone 和 iPad 的通知中心（Notification Center）開啟方式進行了重大變革。自 2011 年 iOS 5 以來，通知中心一直是彙整各應用程式通知的中央介面。本次更新將改變用戶開啟該功能的習慣，這項變更已在多個開發者 Beta 版本中確認將在當月發布。儘管此功能變更可能不符合部分用戶長期的操作習慣，但這屬於系統介面層面的設計調整，而非安全漏洞或功能性缺陷。開發者和用戶應留意此系統級的介面變化，以適應 iOS 27 的新操作邏輯。",
    tags: ["iOS 27", "Apple", "通知中心", "iPhone", "iPad", "系統更新"],
    title_en: "iOS 27 Major Update: Notification Center Access Method Changes, Affecting iPhone and iPad Usage Habits",
    summary_en: "Apple is implementing a significant overhaul to how the Notification Center is accessed on iPhones and iPads in iOS 27. Since iOS 5 in 2011, the Notification Center has served as the central hub for aggregating notifications from various applications. This update will change the user's habit of accessing this feature, a change confirmed in multiple developer Beta versions and expected to roll out this month. Although this functional change may deviate from some users' long-standing operational habits, it constitutes a system interface design adjustment, not a security vulnerability or functional defect. Developers and users should note this system-level interface change to adapt to the new operational logic of iOS 27.",
    tags_en: ["iOS 27", "Apple", "Notification Center", "iPhone", "iPad", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/ios-27-just-broke-15-years-of-muscle-memory-on-iphone-and-ipad", lang: "EN" }
    ]
  },
  {
    id: "20260901-10447",
    trackers: ["os"],
    category: "Apple",
    title: "Firefox 協助 iPhone 用戶繞過網站廣告並賺取收入的新功能",
    summary: "Firefox 推出了一項新功能，允許 iPhone 使用者在瀏覽網站時繞過廣告，同時也能從中獲利。這項更新的細節表明，該功能在用戶體驗和商業模式之間建立了一種新的平衡。雖然原文未提供具體的技術細節或漏洞資訊，但該功能主要關注於瀏覽器層面的用戶體驗增強和收入來源的創新。對於用戶而言，這意味著可以更有效地瀏覽內容，同時參與到廣告相關的收入機制中。建議用戶在更新瀏覽器後，留意相關的設定選項，以確保功能按預期運作。此更新體現了現代網頁瀏覽器在用戶體驗和商業模式整合方面的持續演進。",
    tags: ["Firefox", "iPhone", "廣告繞過", "瀏覽器", "用戶體驗"],
    title_en: "Firefox introduces new feature for iPhone users to bypass website ads and earn income",
    summary_en: "Firefox has launched a new feature that allows iPhone users to bypass advertisements while browsing websites, and simultaneously earn income from them. Details of this update suggest that the feature establishes a new balance between user experience and business models. Although the original text does not provide specific technical details or vulnerability information, the feature primarily focuses on enhancing the user experience and innovating revenue streams at the browser level. For users, this means they can browse content more efficiently while participating in ad-related income mechanisms. Users are advised to pay attention to relevant settings options after updating the browser to ensure the feature operates as expected. This update reflects the continuous evolution of modern web browsers in integrating user experience and business models.",
    tags_en: ["Firefox", "iPhone", "Ad Blocking", "Browser", "User Experience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/01/firefox-helps-iphone-users-bypass-ads-on-web-sites-while-making-money-showing-its-own-ads/5293747", lang: "EN" }
    ]
  },
  {
    id: "20260901-10289",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AI安全非營利組織METR遭API金鑰竊取，導致公有AI模型信用額度被盜用",
    summary: "資安非營利組織METR近期披露了兩起網路安全事件。一宗事件發生在三月，攻擊者利用一個被竊取的API金鑰，在公有AI模型上進行了持續性的存取，並消耗了高達60萬美元的信用額度。該事件源於攻擊者利用一個存在「容錯開啟漏洞」的協調工具，在個人AWS實例上植入了METR的公有模型API金鑰，導致該實例在數日內暴露於公眾網路。METR隨後採取了行動，包括撤銷存取權限、輪換憑證並加強部署政策。另一宗事件發生在五月，攻擊者進行了持續性的外部攻擊，試圖透過「公開的文字記錄檢視器」中不慎暴露的唯讀SQL查詢機制，來獲取未公開的評估數據。儘管獨立研究人員負責地披露了此漏洞，但METR表示，證據顯示攻擊者並未成功利用該漏洞獲取任何非公開數據。為應對這些事件，METR加強了安全投資，包括增加安全主管、關閉舊有基礎設施，並強化了監控和憑證輪換機制。",
    tags: ["METR", "API金鑰竊取", "AI模型安全", "AWS", "資料外洩", "憑證管理"],
    title_en: "AI Security Non-profit METR Suffers API Key Theft, Leading to Misuse of Public AI Model Credits",
    summary_en: "The cybersecurity non-profit organization METR recently disclosed two network security incidents. The first incident, which occurred in March, involved attackers using a stolen API key to conduct persistent access on a public AI model, consuming up to $600,000 in credits. This incident stemmed from attackers utilizing a coordination tool with a 'fault-tolerant open vulnerability' to implant METR's public model API key onto a personal AWS instance, leaving the instance exposed to the public internet for several days. METR subsequently took action, including revoking access, rotating credentials, and strengthening deployment policies. The second incident, which occurred in May, involved persistent external attacks attempting to acquire non-public evaluation data through a read-only SQL query mechanism inadvertently exposed in a 'public text log viewer.' Although an independent researcher responsibly disclosed this vulnerability, METR stated that evidence showed the attackers did not successfully exploit the vulnerability to obtain any non-public data. In response to these incidents, METR has increased its security investments, including hiring a Chief Security Officer, decommissioning legacy infrastructure, and strengthening monitoring and credential rotation mechanisms.",
    tags_en: ["METR", "API Key Theft", "AI Model Security", "AWS", "Data Leakage", "Credential Management"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/identity-access-management-security/ai-model-evaluator-metr-credential-theft-probing", lang: "EN" }
    ]
  },
  {
    id: "20260901-10333",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "Packagist 惡意主題套件散播，針對未更新 iOS 設備植入間諜軟體與竊取資產",
    summary: "資安研究人員發現了在 Packagist 上的一組 13 個惡意 Composer 主題套件。這些套件旨在注入 JavaScript 到安裝了這些函式庫的越南電影和漫畫串流網站中，並啟動針對未修補 iOS 設備的間諜軟體攻擊。攻擊鏈包含兩部分：一是針對所有移動設備的廣告詐騙和賭博重定向鏈；二是針對 iPhone 的 WebKit 到核心漏洞利用鏈，該鏈最終會安裝間諜軟體。該攻擊利用了 CVE-2025-31277 和 CVE-2025-43529 等 WebKit 漏洞，並利用了未公開的 iOS 核心逃逸漏洞。成功後，惡意程式會收集金鑰鏈資料庫、Wi-Fi 密碼、簡訊資料庫、聯絡人、瀏覽器 Cookie、位置歷史記錄和帳戶資料，並將其加密後透過 HTTPS 上傳至 C2 伺服器。受影響的網站營運商可能在不知情的情況下散播了此惡意程式。建議使用 OphimCMS 或 KKPhim 的網站營運商檢查並移除相關套件，並審計其 jQuery 和主題腳本以尋找入侵指標。",
    tags: ["Packagist", "Composer", "惡意套件", "iOS 漏洞", "間諜軟體", "CVE-2025-31277", "供應鏈攻擊"],
    title_en: "Malicious Theme Packages Spread via Packagist Target Unpatched iOS Devices with Spyware and Asset Theft",
    summary_en: "Cybersecurity researchers discovered a set of 13 malicious Composer theme packages on Packagist. These packages are designed to inject JavaScript into Vietnamese movie and comic streaming websites that install these libraries, initiating a spyware attack targeting unpatched iOS devices. The attack chain has two parts: first, an ad fraud and gambling redirection chain targeting all mobile devices; and second, a WebKit-to-core exploit chain targeting iPhones, which ultimately installs spyware. The attack leverages WebKit vulnerabilities such as CVE-2025-31277 and CVE-2025-43529, and utilizes an undisclosed iOS core escape vulnerability. Upon success, the malicious code collects keychain data, Wi-Fi passwords, SMS data, contacts, browser cookies, location history, and account data, encrypting and uploading it via HTTPS to a C2 server. Website operators affected may have unknowingly spread this malicious code. It is recommended that website operators of OphimCMS or KKPhim check and remove the relevant packages, and audit their jQuery and theme scripts for indicators of compromise.",
    tags_en: ["Packagist", "Composer", "Malicious Packages", "iOS Vulnerability", "Spyware", "CVE-2025-31277", "Supply Chain Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/13-malicious-packagist-packages-target.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10366",
    trackers: ["os"],
    category: "Android",
    title: "三星擴大 Android 17 / One UI 9 Beta 測試計畫，涵蓋更多 2025 年旗艦機型",
    summary: "三星正在擴大其 Android 17 / One UI 9 的 Beta 測試計畫，預計穩定版本距離發布已不遠。目前，One UI 9 基於 Android 17，已在 Galaxy Z Fold 8 系列和 Flip 8 上原生提供，但尚未全面推廣至整個 Galaxy 生態系。此前，Galaxy S26 用戶已在數月內進行測試，但現在 Beta 正在擴大。三星確認，One UI 9 Beta 現已擴展至其 2025 年旗艦產品線，包括 Galaxy S25/+/Ultra/FE、Galaxy Z Fold 7 和 Galaxy Z Flip 7。該更新將於九月在印度、韓國、美國和英國等地區透過 Samsung Members 應用程式提供選擇性 Beta 測試。雖然沒有確切時間表，但根據過往發布情況，預計將很快推出。用戶可透過 Samsung Members 應用程式註冊參與測試。",
    tags: ["Samsung", "Android 17", "One UI 9", "Beta 測試", "Galaxy S25", "Galaxy Z Fold 7"],
    title_en: "Samsung expands Android 17 / One UI 9 Beta testing to include more 2025 flagship models",
    summary_en: "Samsung is expanding its Android 17 / One UI 9 Beta testing program, with the stable version expected to be released soon. Currently, One UI 9, which is based on Android 17, is natively available on the Galaxy Z Fold 8 series and Flip 8, but has not been fully rolled out across the entire Galaxy ecosystem. Previously, Galaxy S26 users conducted testing over several months, but the Beta is now expanding. Samsung confirmed that the One UI 9 Beta has now expanded to include its 2025 flagship product line, including the Galaxy S25/+/Ultra/FE, Galaxy Z Fold 7, and Galaxy Z Flip 7. The update will be offered as an optional Beta test via the Samsung Members app in regions such as India, South Korea, the US, and the UK in September. While there is no exact timeline, based on past release patterns, it is expected to roll out shortly. Users can register to participate in the testing via the Samsung Members app.",
    tags_en: ["Samsung", "Android 17", "One UI 9", "Beta Testing", "Galaxy S25", "Galaxy Z Fold 7"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/samsung-android-17-one-ui-9-beta-update-expand", lang: "EN" }
    ]
  },
  {
    id: "20260901-10369",
    trackers: ["os"],
    category: "Android",
    title: "Pixel Watch 5 首次更新發布：強化 Gemini 個人化與離線 AI 功能",
    summary: "Google 發布了 Pixel Watch 5 的首次更新（2026 年 9 月），該更新將設備從 CD5A.260611.008 升級至 CP3A.260905.002。此版本仍基於 Wear OS 7 和 Android 17。本次更新的主要亮點是深度整合 Gemini AI 功能，包括 Gemini 個人化，該功能能學習用戶的過往對話和連接的 Google 應用程式（如 Gmail、日曆、搜尋等）來提供個人化回覆。此外，新增了 Gemini 智能主動建議，能將複雜任務簡化為一鍵操作。值得注意的是，設備現已具備離線 Gemini 功能，允許在完全離線狀態下即時處理計時器設定等核心操作。其他改進包括提升了「抬手說話」手勢模型、GPS 路線追蹤的準確性，以及擴展了多項手勢應用程式功能，例如使用雙指捏合進行快速操作。用戶可透過設定 > 系統 > 系統更新來獲取 OTA 更新。",
    tags: ["Pixel Watch 5", "Wear OS 7", "Gemini", "Android 17", "Google", "AI 整合"],
    title_en: "Pixel Watch 5 First Update Released: Enhanced Gemini Personalization and Offline AI Features",
    summary_en: "Google has released the first update for the Pixel Watch 5 (September 2026), upgrading the device from CD5A.260611.008 to CP3A.260905.002. This version remains based on Wear OS 7 and Android 17. The main highlight of this update is the deep integration of Gemini AI features, including Gemini personalization. This feature learns from the user's past conversations and connected Google applications (such as Gmail, Calendar, Search, etc.) to provide personalized responses. Additionally, Gemini smart proactive suggestions have been added, which can simplify complex tasks into one-click operations. Notably, the device now features offline Gemini functionality, allowing core operations like setting timers to be processed in real-time even when completely offline. Other improvements include enhanced 'raise-to-speak' gesture models, improved accuracy for GPS route tracking, and expanded multi-gesture application functions, such as using a two-finger pinch for quick actions. Users can obtain the OTA update via Settings > System > System Update.",
    tags_en: ["Pixel Watch 5", "Wear OS 7", "Gemini", "Android 17", "Google", "AI Integration"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/first-pixel-watch-5-update", lang: "EN" }
    ]
  },
  {
    id: "20260901-10370",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 系列提前接收 2026 年 9 月安全補丁，修復近期發現的關鍵問題",
    summary: "Google 正在為 Pixel 11 系列發布一項非週期性更新，該更新包含 2026 年 9 月的安全補丁。該更新已透過 OTA 方式推送給 Pixel 11 Pro、11 Pro XL 和 11 Pro Fold 等型號，版本為 CD1A.260905.001.A1。此安全更新的層級為「2026 年 9 月 1 日」。儘管此更新被視為 Android 17 的初始發布版本，但它並非完整的 Android 17 QPR1。分析指出，Google 提前發布此補丁，很可能是為了修復自上個月發布以來在 Pixel 11 上發現的特定問題，而非等待完整的 Android 17 QPR1 版本。該補丁大小約在 100 MB 以下。用戶應留意官方發布的完整安全公告，以了解具體修復了哪些關鍵錯誤。",
    tags: ["Pixel 11", "Android 17", "安全補丁", "Google", "OTA 更新", "資安"],
    title_en: "Pixel 11 Series Receives September 2026 Security Patch Early, Fixing Recently Discovered Critical Issues",
    summary_en: "Google is releasing a non-periodic update for the Pixel 11 series, which includes the September 2026 security patch. This update has been pushed via OTA to models such as the Pixel 11 Pro, 11 Pro XL, and 11 Pro Fold, with version CD1A.260905.001.A1. The security update level is designated as 'September 1, 2026.' Although this update is considered the initial release version for Android 17, it is not the complete Android 17 QPR1. Analysis suggests that Google released this patch early, likely to fix specific issues discovered on the Pixel 11 since last month, rather than waiting for the full Android 17 QPR1 version. The patch size is approximately under 100 MB. Users should monitor official security announcements for details on the specific critical vulnerabilities addressed.",
    tags_en: ["Pixel 11", "Android 17", "Security Patch", "Google", "OTA Update", "Cybersecurity"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/pixel-11-september-update-early", lang: "EN" }
    ]
  },
  {
    id: "20260901-10371",
    trackers: ["os"],
    category: "Android",
    title: "Google Play 推出 Android 應用程式折扣清單，包含 Radiant: Guardians Of Light 等遊戲",
    summary: "本文介紹了當前在 Google Play 商店中可供選購的折扣 Android 應用程式清單。雖然文章提到了 Amazon 和 Best Buy 的勞動節促銷活動，但其主要內容是推薦一系列折扣應用程式，例如 Super Dark Deception、My Child Lebensborn、Crystal Journey 和 Radiant: Guardians Of Light 等。這些應用程式的折扣資訊是作為消費者的參考，不涉及任何資安漏洞或技術安全議題。讀者可以關注 Google Play 禮品卡優惠，搭配獲得 $15 的 Best Buy 抵用金，以獲取更多優惠。建議使用者在選購應用程式前，留意其評價和安全性。",
    tags: ["Google Play", "Android 應用程式", "折扣", "Radiant: Guardians Of Light", "促銷活動"],
    title_en: "Google Play Launches Android App Discount List Featuring Games Like Radiant: Guardians Of Light",
    summary_en: "This article introduces a list of discounted Android applications currently available on the Google Play Store. Although the article mentions Labor Day promotions from Amazon and Best Buy, its main focus is recommending a series of discounted apps, such as Super Dark Deception, My Child Lebensborn, Crystal Journey, and Radiant: Guardians Of Light. This discount information is provided for consumer reference and does not involve any cybersecurity vulnerabilities or technical security issues. Readers can also look into Google Play gift card deals combined with a $15 Best Buy coupon to maximize savings. Users are advised to check the ratings and security of any application before purchasing.",
    tags_en: ["Google Play", "Android Applications", "Discount", "Radiant: Guardians Of Light", "Promotion"],
    sources: [
      { name: "9to5Google", url: "https://9to5toys.com/2026/09/01/today-android-app-deals-radiant-guardians", lang: "EN" }
    ]
  },
  {
    id: "20260901-10372",
    trackers: ["os"],
    category: "Android",
    title: "Google 9月2026版Android更新發布，強化Find Hub記憶功能與引入Motion Assist等新功能",
    summary: "Google 發布了 2026 年 9 月的 Android 更新，帶來多項重大新功能。在 Android 16 及更高版本中，Find Hub 與 Gemini 現在可以追蹤沒有追蹤器標籤的物品。使用者可以透過語音指令指示 Gemini 記住物品的放置位置，並可附上照片，這些資訊將儲存在 Find Hub 的「Remembered」分頁中，同時也支援語音查詢位置。此外，Android 17+ 將引入 Motion Assist 功能，透過螢幕上的微小氣泡疊層來緩解暈車症，使用者可自訂其顏色、形狀和透明度，並可自動偵測車輛移動。Gemini Live 也增加了 Guided Vision，提供即時的口頭描述功能，可用於閱讀細小字體或在低光環境下點餐。此功能將逐步在支援 Gemini 的國家中推出。此外，Google Messages 整合了 Google Keep，允許使用者直接在聊天中分享和更新購物清單或旅遊筆記。這些更新旨在提升用戶的日常便利性和輔助功能。",
    tags: ["Google", "Android 16+", "Android 17+", "Gemini", "Find Hub", "Google Messages"],
    title_en: "Google releases September 2026 Android update, enhancing Find Hub memory and introducing Motion Assist and other new features",
    summary_en: "Google has released the September 2026 Android update, bringing several major new features. In Android 16 and higher, Find Hub and Gemini can now track items without a tracker tag. Users can instruct Gemini via voice commands to remember an item's placement, optionally attaching a photo. This information is stored in the 'Remembered' tab within Find Hub and is also searchable via voice. Furthermore, Android 17+ will introduce Motion Assist, which uses subtle bubble overlays on the screen to alleviate motion sickness. Users can customize its color, shape, and transparency, and it can automatically detect vehicle movement. Gemini Live also adds Guided Vision, offering real-time verbal descriptions useful for reading small text or ordering food in low light. This feature will be rolled out gradually in countries supporting Gemini. Additionally, Google Messages integrates Google Keep, allowing users to share and update shopping lists or travel notes directly within chats. These updates aim to enhance users' daily convenience and assistive capabilities.",
    tags_en: ["Google", "Android 16+", "Android 17+", "Gemini", "Find Hub", "Google Messages"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/september-2026-android-drop", lang: "EN" }
    ]
  },
  {
    id: "20260901-10373",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 系列現身 Android 17 QPR2 Beta 4，預告多項使用者介面重大更新",
    summary: "Google 已發布 Android 17 QPR2 Beta 4 版本，Pixel 11、Pixel 11 Pro、Pixel 11 Pro XL 和 Pixel 11 Pro Fold 等設備現可加入 Android Beta Program 進行測試。此版本包含 CP41.260814.003.C2 韌體，並已包含 2026 年八月的安全補丁。雖然目前尚未提供手動安裝的工廠或 OTA 映像檔，但該版本預計於十二月穩定發布。Android 17 QPR2 將帶來多項使用者可見的變更，包括擴展的動態色彩主題、可自訂的快速設定佈局、鎖定畫面上的系統模糊效果，以及應用程式鎖定功能和狀態列自訂功能。Beta 4 版本標誌著平台穩定性里程碑，Pixel 11 系列預計將跳過 Android 17 QPR1 的預覽週期，直接邁向九月的穩定發布。使用者應留意官方公告，以獲取最新的安裝和使用資訊。",
    tags: ["Pixel 11", "Android 17", "QPR2 Beta", "Google", "Android Beta Program", "系統更新"],
    title_en: "Pixel 11 Series Appears on Android 17 QPR2 Beta 4, Teasing Major UI Updates",
    summary_en: "Google has released Android 17 QPR2 Beta 4, which is now available for testing on devices such as the Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold through the Android Beta Program. This version includes the CP41.260814.003.C2 firmware and incorporates the August 2026 security patch. Although a manually installable factory or OTA image is not yet available, the version is expected to stabilize and release in December. Android 17 QPR2 brings several user-facing changes, including expanded dynamic color themes, customizable quick settings layouts, system blur effects on the lock screen, and features like app locking and status bar customization. Beta 4 marks a platform stability milestone, with the Pixel 11 series expected to skip the Android 17 QPR1 preview cycle and move directly toward a stable release in September. Users should monitor official announcements for the latest installation and usage information.",
    tags_en: ["Pixel 11", "Android 17", "QPR2 Beta", "Google", "Android Beta Program", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/pixel-11-android-17-qpr2-beta", lang: "EN" }
    ]
  },
  {
    id: "20260901-10375",
    trackers: ["os"],
    category: "Android",
    title: "Google Android Auto 17.6 內建新功能測試：預告快速設定選單與「Jimothy」天氣彩蛋",
    summary: "透過對 Android Auto 17.6 版本進行 APK 反編譯分析，發現 Google 正在為車載介面實作快速設定圖塊功能，目前已可見「勿擾模式」（Do Not Disturb）的相關字串，為未來擴充奠定基礎。儘管此功能目前未對一般使用者開放，但已在特定條件下可於通知列顯示。此外，分析還揭露了一個名為「Jimothy」的病毒式浣熊彩蛋模式，該模式能以天氣動畫形式顯示當前溫度和天氣狀況於音樂小工具上。雖然快速設定選單被認為是合理的產品增強，但「Jimothy」彩蛋被視為一個趣味性的玩笑，不太可能正式發布。此分析基於對應用程式程式碼的逆向工程，旨在預測未來的產品走向。",
    tags: ["Android Auto", "Google", "快速設定", "Jimothy", "Android 17.6", "車載系統"],
    title_en: "Google Android Auto 17.6 Internal Feature Testing: Previewing Quick Settings Menu and 'Jimothy' Weather Easter Egg",
    summary_en: "By performing APK decompilation analysis on Android Auto 17.6, we discovered that Google is implementing a quick settings tile feature for the in-car interface. Strings related to 'Do Not Disturb' are already visible, laying the groundwork for future expansion. Although this feature is not yet available to general users, it can be displayed in the notification area under specific conditions. Furthermore, the analysis revealed a viral raccoon easter egg mode named 'Jimothy,' which displays current temperature and weather conditions on the music widget using weather animations. While the quick settings menu is considered a reasonable product enhancement, the 'Jimothy' easter egg is viewed as a fun joke and is unlikely to be officially released. This analysis is based on reverse engineering of the application code and aims to predict future product directions.",
    tags_en: ["Android Auto", "Google", "Quick Settings", "Jimothy", "Android 17.6", "In-Car Systems"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/android-auto-quick-settings-jimothy-weather-easter-egg", lang: "EN" }
    ]
  },
  {
    id: "20260901-10380",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 Pro 錄影功能出現靜態音問題，Google 承諾數週內透過相機 App 更新修復",
    summary: "Google 在 Pixel 11 Pro 系列中發現了一個與 Video Boost 功能相關的錯誤，導致使用者在錄影時出現靜態音。Video Boost 是一項利用雲端處理來大幅提升影片品質的功能，最初在 Pixel 8 Pro 上推出。使用者在 Reddit 等平台回報了此問題，現象表現為錄影過程中每隔幾秒出現明顯的靜態爆音。雖然目前有清除 Google 相機 App 快取或關閉 Audio Zoom 等臨時解決方案，但 Google 已確認此問題，並表示將在未來數週內透過相機應用程式更新提供官方修復。此外，後續的每月 Android 更新中還將包含進一步的效能優化。此問題主要影響 Pixel 11 Pro 的使用者，Google 正在積極處理此軟體缺陷。",
    tags: ["Google Pixel 11 Pro", "Video Boost", "靜態音", "Android", "軟體更新", "相機應用"],
    title_en: "Google Pixel 11 Pro Video Recording Exhibits Static Noise Issue; Google Promises Camera App Update Fix Within Weeks",
    summary_en: "Google has identified a bug in the Pixel 11 Pro series related to the Video Boost feature, causing static noise during video recording. Video Boost is a function that uses cloud processing to significantly enhance video quality, initially launched on the Pixel 8 Pro. Users reported this issue on platforms like Reddit, describing the phenomenon as noticeable static bursts occurring every few seconds during recording. While temporary workarounds exist, such as clearing the Google Camera App cache or disabling Audio Zoom, Google has confirmed the issue and stated it will provide an official fix via a camera application update within the next few weeks. Furthermore, subsequent monthly Android updates will include further performance optimizations. This issue primarily affects Pixel 11 Pro users, and Google is actively addressing this software defect.",
    tags_en: ["Google Pixel 11 Pro", "Video Boost", "Static Noise", "Android", "Software Update", "Camera App"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/google-pixel-11-pro-bug-static-sounds-video", lang: "EN" }
    ]
  },
  {
    id: "20260901-10382",
    trackers: ["os"],
    category: "Android",
    title: "Google Android Auto 17.6 更新推出，導入全新綠色圖標與品牌視覺設計",
    summary: "Google 在其 Android Auto 17.6 更新中進行了微小的視覺刷新。此次更新主要在應用程式的圖標和相關介面元素上進行了設計上的調整。先前，Android Auto 使用的是藍色圖標風格，但現在推出了全新的綠色圖標。雖然此新圖標在某些通知中偶爾可見，但使用者在大多數情況下仍會看到舊的藍色圖標。使用者最穩定能看到新綠色圖標的位置是在存取 Android Auto 設定時的應用程式切換器中。此外，Android Auto 的官方網站和相關的 Gemini 整合廣告縮圖也更新了新的設計，字體標誌也進行了微調。設定選單也採用了綠色強調色以配合新的視覺風格。總體而言，這次更新主要集中在品牌形象的迭代，對終端使用者功能性影響較小，但提升了品牌一致性。",
    tags: ["Android Auto", "Google", "17.6", "UI/UX", "品牌更新", "Android 系統"],
    title_en: "Google Android Auto 17.6 Update Launches with New Green Icon and Brand Visual Design",
    summary_en: "Google has rolled out minor visual refreshes with its Android Auto 17.6 update. This update primarily involves design adjustments to the application's icons and related interface elements. Previously, Android Auto used a blue icon style, but a brand new green icon has been introduced. Although this new icon is occasionally visible in certain notifications, users will still mostly see the old blue icon. The most stable place for users to see the new green icon is in the application switcher when accessing Android Auto settings. Furthermore, the official Android Auto website and related Gemini integration ad thumbnails have also been updated with the new design, and the font logo has been slightly adjusted. The settings menu has also adopted a green accent color to align with the new visual style. Overall, this update focuses mainly on brand image iteration, having minimal functional impact on end-users, but improving brand consistency.",
    tags_en: ["Android Auto", "Google", "17.6", "UI/UX", "Brand Update", "Android System"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/android-auto-17-6-update-rolling-out-with-redesigned-logo-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260901-10417",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android Studio Quail 4 正式發布，內建 Android Skills 與 Gemma 4 本地模型支援",
    summary: "Android Studio Quail 4 已穩定發布，為開發者提供高效且有效的 AI 輔助編碼能力。本次更新的核心亮點是內建了「Android Skills」，這些是經由 Android 團隊精心策劃的模組化 AI 指令，旨在指導大型語言模型（LLMs）處理複雜的 Android 工作流程，例如 AGP 9 升級、性能分析和 Jetpack Navigation 框架升級。IDE 預載了 23 種精選技能。此外，Quail 4 還原生整合了 Google 最強大的開源模型 Gemma 4，允許開發者在不依賴第三方設置的情況下，在本地環境中安全、私密地使用 AI 進行程式碼輔助。運行最小模型需要 12GB RAM，但建議使用 32GB 以上的記憶體以獲得最佳體驗。開發者可以透過設定輕鬆管理和使用這些新功能，並可自行創建客製化技能來擴展 Agent Mode 的能力。",
    tags: ["Android Studio", "Quail 4", "Gemma 4", "AI 編碼", "Android Skills", "本地模型"],
    title_en: "Android Studio Quail 4 Officially Released with Built-in Android Skills and Gemma 4 Local Model Support",
    summary_en: "Android Studio Quail 4 has been stably released, offering developers highly efficient and effective AI-assisted coding capabilities. The core highlight of this update is the inclusion of \"Android Skills,\" which are modular AI prompts meticulously designed by the Android team. These skills guide Large Language Models (LLMs) through complex Android workflows, such as AGP 9 upgrades, performance profiling, and Jetpack Navigation framework upgrades. The IDE comes preloaded with 23 curated skills. Furthermore, Quail 4 natively integrates Google's powerful open-source model, Gemma 4, allowing developers to use AI for code assistance locally, securely, and privately, without relying on third-party setups. Running the minimum model requires 12GB of RAM, but 32GB or more of memory is recommended for the best experience. Developers can easily manage and utilize these new features through settings, and can also create custom skills to extend the Agent Mode's capabilities.",
    tags_en: ["Android Studio", "Quail 4", "Gemma 4", "AI Coding", "Android Skills", "Local Model"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/09/leverage-gemma-4-android-studio-quail.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10421",
    trackers: ["os"],
    category: "Android",
    title: "Android 9 月更新加入 Gemini 功能，增強 Find Hub 追蹤與輔助視覺能力",
    summary: "本次 Android 更新（非 Pixel 專屬版本）為更廣泛的設備帶來了新的 Gemini 功能和非 AI 增強。主要更新包括讓用戶可以指示 Gemini 記錄未配備追蹤器標籤物品的位置，這些資訊將儲存在 Find Hub 中，用於輔助尋找手機、耳機等物品。此外，Gemini Live 引入了「Guided Vision」（輔助視覺）功能，這對於提升無障礙性極為重要。Guided Vision 能夠分析相機畫面，幫助用戶定位畫面中的物體，或從光線昏暗環境中的菜單等提取難以辨識的文字。該功能可透過系統無障礙快捷鍵或 TalkBack 選單啟動，適用於 Android 9 Pie 及更高版本的幾乎所有 Android 手機。這些更新旨在讓用戶介面更美觀、功能更實用。",
    tags: ["Android", "Gemini", "Find Hub", "Guided Vision", "Android 16", "無障礙功能"],
    title_en: "Android's September Update Adds Gemini Features, Enhancing Find Hub Tracking and Visual Assistance",
    summary_en: "This Android update (not exclusive to Pixel devices) brings new Gemini features and non-AI enhancements to a wider range of devices. Key updates include allowing users to instruct Gemini to record the location of items without attached trackers, with this information stored in Find Hub to assist in locating items like phones or headphones. Additionally, Gemini Live introduces 'Guided Vision,' a feature critical for improving accessibility. Guided Vision analyzes the camera feed to help users locate objects in the frame or extract difficult-to-read text, such as from menus in low-light environments. This feature can be activated via the system accessibility shortcut or the TalkBack menu, and is available on nearly all Android phones running Android 9 Pie or higher. These updates aim to make the user interface more aesthetically pleasing and functionally useful.",
    tags_en: ["Android", "Gemini", "Find Hub", "Guided Vision", "Android 16", "Accessibility Features"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/09/latest-android-drop-connects-gemini-to-find-hub-adds-keep-notes-and-themes-to-messages", lang: "EN" }
    ]
  },
  {
    id: "20260901-10463",
    trackers: ["os", "security"],
    category: "Android",
    title: "Firefox for Android 存在權限提升漏洞，已在 Firefox 155 中修復",
    summary: "本篇報告指出 Firefox for Android 存在一項權限提升漏洞。此漏洞的修復已包含在 Firefox 155 版本中。雖然原文未提供詳細的技術細節或 CVSS 分數，但此類漏洞可能允許攻擊者在 Android 平台上利用特定條件，提升其在應用程式中的權限，從而可能導致資料洩露或系統層級的惡意行為。建議使用最新版本的 Firefox for Android，確保已安裝 Firefox 155 或更高版本，以避免遭受此安全風險。資安人員應密切關注瀏覽器供應商發布的安全公告，及時進行系統更新，以維護應用程式的安全性。",
    tags: ["Firefox", "Android", "權限提升", "CVE-2026-84117", "瀏覽器安全"],
    title_en: "Firefox for Android contains privilege escalation vulnerability, patched in Firefox 155",
    summary_en: "This report highlights a privilege escalation vulnerability found in Firefox for Android. The fix for this vulnerability has been included in the Firefox 155 version. Although the original text does not provide detailed technical specifics or a CVSS score, such vulnerabilities could potentially allow an attacker to exploit specific conditions on the Android platform to elevate privileges within the application, potentially leading to data leakage or malicious system-level behavior. Users are advised to use the latest version of Firefox for Android, ensuring they have installed Firefox 155 or a higher version, to mitigate this security risk. Cybersecurity professionals should closely monitor security advisories issued by browser vendors and perform timely system updates to maintain application security.",
    tags_en: ["Firefox", "Android", "Privilege Escalation", "CVE-2026-84117", "Browser Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-84117", lang: "EN" }
    ]
  },
  {
    id: "20260901-10464",
    trackers: ["os", "security"],
    category: "Android",
    title: "Firefox for Android WebExtensions 組件存在資訊洩露漏洞，已在 Firefox 155 中修復",
    summary: "本漏洞存在於 Firefox for Android 的 WebExtensions 組件中，屬於資訊洩露類型。該安全問題已在 Firefox 155 版本中得到修復。雖然原文未提供詳細的 CVSS 分數或攻擊向量資訊，但此類漏洞可能允許攻擊者在特定條件下竊取敏感資訊。建議使用 Firefox 155 或更高版本，以確保用戶的資料安全，避免遭受潛在的資訊洩露風險。資安人員應密切關注瀏覽器供應商發布的安全公告，及時更新應用程式以應對新發現的威脅。",
    tags: ["Firefox", "Android", "WebExtensions", "資訊洩露", "CVE-2026-84127"],
    title_en: "Information Leak Vulnerability in Firefox for Android WebExtensions Component Fixed in Firefox 155",
    summary_en: "This vulnerability resides in the WebExtensions component of Firefox for Android and is classified as an information leak. This security issue has been patched in Firefox 155. Although the original text did not provide detailed CVSS scores or attack vector information, this type of vulnerability could potentially allow an attacker to steal sensitive information under specific conditions. Users are advised to use Firefox 155 or a later version to ensure data security and avoid potential information leakage risks. Security professionals should closely monitor security advisories released by browser vendors and update applications promptly to address newly discovered threats.",
    tags_en: ["Firefox", "Android", "WebExtensions", "Information Leak", "CVE-2026-84127"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-84127", lang: "EN" }
    ]
  },
  {
    id: "20260901-10465",
    trackers: ["os", "security"],
    category: "Android",
    title: "Firefox Focus for Android 存在安全漏洞，已在 Firefox 155 中修復",
    summary: "本篇報告指出 Firefox Focus for Android 存在一項安全問題。該漏洞已在 Firefox 155 版本中得到修復。雖然原文未提供詳細的技術細節、CVSS 分數或受影響的具體組織範圍，但此類漏洞通常可能允許攻擊者在特定條件下執行未經授權的操作或導致應用程式行為異常。使用者應立即檢查其 Firefox Focus for Android 的版本，並確保已升級至 Firefox 155 或更高版本，以避免潛在的安全風險。對於開發者而言，應關注此類在瀏覽器應用中發現的漏洞，並確保其安全實作的健壯性。建議使用者定期更新應用程式，以獲取最新的安全補丁。",
    tags: ["Firefox Focus", "Android", "安全漏洞", "CVE-2026-84135", "瀏覽器安全", "應用程式更新"],
    title_en: "Security Vulnerability Found in Firefox Focus for Android, Fixed in Firefox 155",
    summary_en: "This report highlights a security vulnerability found in Firefox Focus for Android. This vulnerability has been patched in the Firefox 155 version. Although the original source did not provide detailed technical specifics, CVSS scores, or the specific scope of affected organizations, such vulnerabilities can typically allow an attacker to perform unauthorized operations or cause abnormal application behavior under certain conditions. Users should immediately check their Firefox Focus for Android version and ensure they have upgraded to Firefox 155 or a higher version to avoid potential security risks. For developers, attention should be paid to such vulnerabilities found in browser applications, ensuring the robustness of their security implementation. Users are advised to regularly update the application to obtain the latest security patches.",
    tags_en: ["Firefox Focus", "Android", "Security Vulnerability", "CVE-2026-84135", "Browser Security", "App Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-84135", lang: "EN" }
    ]
  },
  {
    id: "20260901-9900",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Kubernetes 1.37 穩定版發布：引入 Pod 憑證與叢集信任套件，強化工作負載身分驗證",
    summary: "Kubernetes 官方發布 1.37 版本，將 Pod 憑證（Pod Certificates）和叢集信任套件（Cluster Trust Bundles）升級為穩定版。這項新機制為工作負載提供了一種超越傳統 Service Account JWT 的身分驗證方式。過去，工作負載身分主要依賴 JWT，一旦被竊取，攻擊者可能冒用身份。Pod 憑證改採 X.509 憑證與非對稱密碼機制，可用於 TLS 與雙向 TLS (mTLS) 身分驗證，並支援憑證自動輪替，大幅提升安全性。\n\n此外，1.37 版本也將 Manifest 式准入控制（Manifest-based Admission Control）升級至 Beta。這允許管理員從本機靜態檔案載入准入 Webhook 和 CEL 政策，這些安全政策在 API 伺服器啟動時即生效，不依賴 etcd，且無法透過 Kubernetes API 修改，從而降低了具備 API 權限者竄改安全政策的風險。\n\n然而，目前 Kubernetes 核心仍未提供 Pod 憑證簽發器，管理員仍需額外部署憑證簽發控制器來負責憑證的簽發、更新，以及維護叢集信任套件中的信任錨點資訊。",
    tags: ["Kubernetes", "Kubelet", "Pod Certificates", "X.509", "mTLS", "Admission Control"],
    title_en: "Kubernetes 1.37 Stable Release: Introducing Pod Certificates and Cluster Trust Bundles to Enhance Workload Identity Authentication",
    summary_en: "The Kubernetes official release of version 1.37 has promoted Pod Certificates and Cluster Trust Bundles to stable versions. This new mechanism provides workloads with an identity authentication method that surpasses traditional Service Account JWTs. Previously, workload identity primarily relied on JWTs, which, if stolen, could allow an attacker to impersonate the identity. Pod Certificates adopt X.509 certificates and asymmetric cryptography, usable for TLS and mutual TLS (mTLS) authentication, and support automatic certificate rotation, significantly enhancing security.\n\nFurthermore, version 1.37 promotes Manifest-based Admission Control to Beta. This allows administrators to load Admission Webhooks and CEL policies from local static files. These security policies take effect when the API server starts up, do not rely on etcd, and cannot be modified via the Kubernetes API, thereby reducing the risk of an attacker with API privileges tampering with security policies.\n\nHowever, the Kubernetes core currently does not provide a Pod Certificate Issuer. Administrators are still required to deploy an external certificate issuance controller to handle certificate issuance, updates, and the maintenance of trust anchor information within the cluster trust bundles.",
    tags_en: ["Kubernetes", "Kubelet", "Pod Certificates", "X.509", "mTLS", "Admission Control"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178549", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-9902",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Gartner預測AI安全市場高速成長，警示AI Agent面臨存取控制與提示詞注入風險",
    summary: "研究調查機構Gartner預估，全球AI安全市場規模將呈現爆炸性增長，預計從2026年的28.35億美元，成長至2027年的47.83億美元，年增率高達68.7%。Gartner指出，隨著企業AI專案的擴展，安全風險日益複雜，不僅面臨傳統漏洞，更增加了第三方與開源軟體的漏洞，以及供應鏈攻擊的威脅。特別警示，預計到2029年，成功攻擊AI Agent的事件中，超過半數將與存取控制弱點（Access Control）和提示詞注入（Prompt Injection）相關。在各個AI安全領域中，AI應用程式安全預計市場規模最大，其次是AI使用控制，顯示市場對AI應用層面和使用流程的保護需求極高。",
    tags: ["Gartner", "AI安全", "AI Agent", "Prompt Injection", "存取控制", "供應鏈安全"],
    title_en: "Gartner Predicts Rapid Growth in AI Security Market, Warns AI Agents Face Access Control and Prompt Injection Risks",
    summary_en: "Research firm Gartner estimates that the global AI security market will experience explosive growth, projected to increase from $2.835 billion in 2026 to $4.783 billion in 2027, representing a Compound Annual Growth Rate (CAGR) of 68.7%. Gartner points out that as enterprise AI projects expand, security risks are becoming increasingly complex, facing not only traditional vulnerabilities but also threats from third-party and open-source software vulnerabilities, as well as supply chain attacks. Specifically, it warns that by 2029, over half of successful attacks against AI Agents are expected to be related to Access Control weaknesses and Prompt Injection. Among various AI security domains, AI Application Security is expected to be the largest market, followed by AI Usage Control, indicating a high market demand for protection at the AI application layer and usage process.",
    tags_en: ["Gartner", "AI Security", "AI Agent", "Prompt Injection", "Access Control", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178560", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-9903",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Google Android 17 強化隱私與連線安全：導入 ECH、限制區域網路存取及強化 2G 防護",
    summary: "Google 發布 Android 17 作業系統，大幅提升行動裝置的網路隱私與連線安全性。主要新增功能包括支援 ECH（Encrypted Client Hello），此機制能加密 TLS 連線建立時可能洩露的伺服器名稱資訊，有效降低網路業者或中介者追蹤使用者連線網域的風險。此外，Android 17 限制 App 存取區域網路（LAN），要求 App 必須取得使用者明確授權，才能掃描或連線同一網路內的智慧設備（如電視、攝影機）。系統也預設採用憑證透明度（CT）機制，增加 TLS 憑證的驗證層級。在行動網路層面，為防範偽基地臺攻擊，Android 17 參與的電信業者將預設關閉 2G 網路，以阻止駭客將用戶強制連線至安全性較低的 2G，從而繞過現有的詐騙過濾機制。",
    tags: ["Android 17", "Google", "ECH", "區域網路", "2G 防護", "隱私保護"],
    title_en: "Google Android 17 Enhances Privacy and Connection Security: Introducing ECH, Restricting LAN Access, and Strengthening 2G Protection",
    summary_en: "Google has released the Android 17 operating system, significantly boosting mobile device network privacy and connection security. Key new features include support for ECH (Encrypted Client Hello), a mechanism that encrypts server name information potentially leaked during TLS connection establishment. This effectively reduces the risk of network providers or intermediaries tracking users' connected domains. Furthermore, Android 17 restricts App access to Local Area Networks (LAN), requiring apps to obtain explicit user permission before scanning or connecting to smart devices within the same network (such as TVs or cameras). The system also defaults to using Certificate Transparency (CT) mechanisms, increasing the verification level of TLS certificates. At the mobile network layer, to prevent fake base station attacks, carriers participating in Android 17 will default to disabling 2G networks, thereby preventing hackers from forcing users onto the less secure 2G standard and bypassing existing fraud filtering mechanisms.",
    tags_en: ["Android 17", "Google", "ECH", "Local Area Network", "2G Protection", "Privacy Protection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178557", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260901-10007",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "KISA啟動「物理安全系統互通性測試」，推動異廠設備標準化整合",
    summary: "隨著CCTV、安全感測器、門禁控制等物理安全系統的應用日益普及，業界對於能整合管理多種設備的整合式安全服務需求不斷增加。然而，由於不同製造商和設備型號之間在資料結構和連動方式上存在差異，若要將不同系統串接起來，往往需要進行額外的開發工作。為了解決此痛點，韓國資訊安全院（KISA）自2022年起透過「物理安全整合平台研發」，持續開發了系統間連動的標準和驗證基準。本次啟動的「物理安全系統互通性測試」，旨在將這些研發出的連動標準推廣至產業現場，並支援標準化產品之間的整合。測試範圍涵蓋「整合系統」（如整合平台、整合監控系統）和「單一系統」（如視訊安全-安全感測器-門禁控制）。通過測試，系統需證明能依據連動標準正常傳輸和處理資料。通過測試的企業將獲得有效期為3年的「物理安全系統互通性測試結果報告」，這能讓企業正式證明其系統的標準適用性與連動功能，有助於活化產業生態系並降低企業開發成本。測試申請將於7日開始受理。",
    tags: ["KISA", "物理安全系統", "互通性測試", "整合系統", "標準化", "門禁控制"],
    title_en: "KISA Launches 'Physical Security System Interoperability Testing' to Promote Standardization and Integration of Multi-Vendor Equipment",
    summary_en: "As physical security systems—such as CCTV, safety sensors, and access control—become increasingly widespread, the industry demand for integrated security services capable of managing diverse equipment is growing. However, because different manufacturers and equipment models vary in data structures and connectivity methods, connecting different systems often requires additional development work. To solve this pain point, the Korea Internet & Security Agency (KISA) has been developing standardized interconnection protocols and verification criteria through the 'Physical Security Integration Platform Development' since 2022. The newly launched 'Physical Security System Interoperability Testing' aims to promote these developed interconnection standards into the industry field and support the integration of standardized products. The testing scope covers both 'integrated systems' (such as integration platforms and integrated monitoring systems) and 'single systems' (such as video surveillance-safety sensors-access control). Through testing, the system must demonstrate that it can correctly transmit and process data according to the interconnection standards. Companies that pass the test will receive a 'Physical Security System Interoperability Test Report' valid for three years. This report allows companies to formally prove the standard applicability and interconnection functionality of their systems, helping to revitalize the industry ecosystem and reduce corporate development costs. Applications for the test will begin accepting submissions on the 7th.",
    tags_en: ["KISA", "Physical Security System", "Interoperability Test", "Integrated System", "Standardization", "Access Control"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145573", lang: "EN" }
    ]
  },
  {
    id: "20260901-10322",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Palo Alto Networks 收購 AI 代理平台 Console，強化 Cortex 平台之自動化與自然語言操作能力",
    summary: "資安巨頭 Palo Alto Networks 宣布收購 AI 原生平台 Console。此項收購旨在深化其 Cortex 平台的代理能力，使安全團隊能夠透過自然語言描述操作目標，讓 AI 代理自動執行分析和跨企業環境的行動。Console 的技術允許使用者以自然語言描述操作目標，AI 代理隨後負責完成達成該目標所需的分析和操作。Palo Alto Networks 表示，這有助於組織以機器速度解決警報、問題和請求。此次收購發生在公司公布 2026 財年第四季度的財務業績之後，該季度營收年增 34% 至 34.1 億美元。雖然交易的財務細節未公開，但此舉標誌著公司在整合前瞻性 AI 技術，以實現更自動化的資安營運。",
    tags: ["Palo Alto Networks", "Console", "AI 代理", "Cortex", "自然語言處理", "資安自動化"],
    title_en: "Palo Alto Networks Acquires AI Agent Platform Console to Enhance Cortex Platform's Automation and Natural Language Capabilities",
    summary_en: "Cybersecurity giant Palo Alto Networks announced the acquisition of the AI-native platform, Console. This acquisition aims to deepen the agent capabilities of its Cortex platform, enabling security teams to describe operational goals using natural language, allowing AI agents to automatically perform analysis and actions across enterprise environments. Console's technology allows users to describe operational objectives in natural language, and the AI agent is then responsible for performing the necessary analysis and actions to achieve that goal. Palo Alto Networks stated that this will help organizations resolve alerts, issues, and requests at machine speed. The acquisition comes after the company reported its financial results for the fourth quarter of fiscal year 2026, where revenue increased by 34% to $3.41 billion. While the financial details of the transaction were not disclosed, this move marks the company's commitment to integrating advanced AI technology to achieve more automated security operations.",
    tags_en: ["Palo Alto Networks", "Console", "AI Agent", "Cortex", "Natural Language Processing", "Security Automation"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/palo-alto-networks-acquires-ai-agent-platform-console", lang: "EN" }
    ]
  },
  {
    id: "20260901-10323",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Sevii 推出 AI 自主防禦與修復平台，應對 AI 驅動攻擊的極速威脅",
    summary: "隨著 AI 驅動攻擊的速度和範圍不斷擴大，Sevii 擴展了其自主防禦與修復 (ADR) 平台，加入了新的 AI 安全模組。此模組旨在即時、自主地應對威脅，因為企業難以掌握組織內所有隱藏的 AI 使用情況。該模組能即時接收客戶安全偵測堆疊的警報，並利用 AI 代理（稱為「網路戰士」）進行為期七天的回溯性情境搜查，以確認偵測到的行為是否為真正的 AI 攻擊。若確認為真，系統會尋找攻擊在客戶基礎設施中的其他潛在擴散點。若需要修復，系統可自主執行，例如在偵測到受感染筆電的異常活動時，會立即隔離該筆電、禁用帳戶、清除惡意程序，並強制使用者重設密碼。此完整 AI 驅動的自主流程通常在兩到十五分鐘內完成，旨在與 AI 攻擊的極速進行相匹配，從而實現「以火對火」的防禦。",
    tags: ["Sevii", "AI 防禦", "自主修復", "ADR 平台", "AI 攻擊", "網路戰士"],
    title_en: "Sevii Launches AI Autonomous Defense and Remediation Platform to Counter Rapid AI-Driven Threats",
    summary_en: "As the speed and scope of AI-driven attacks continue to expand, Sevii has enhanced its Autonomous Defense and Remediation (ADR) platform by integrating a new AI security module. This module is designed to address threats in real-time and autonomously, recognizing that organizations often struggle to track all hidden AI usage within their premises. The module can receive real-time alerts from a client's security detection stack and utilize an AI agent (dubbed the 'Cyber Warrior') to perform a seven-day retrospective scenario search, confirming whether the detected behavior constitutes a genuine AI attack. If confirmed, the system will search for other potential points of spread within the client's infrastructure. If remediation is necessary, the system can execute it autonomously. For example, upon detecting anomalous activity on an infected laptop, it will immediately isolate the laptop, disable the account, clear the malicious program, and force the user to reset their password. This complete AI-driven autonomous process typically completes within two to fifteen minutes, aiming to match the rapid pace of AI attacks and achieve a 'fire-to-fire' defense.",
    tags_en: ["Sevii", "AI Defense", "Autonomous Remediation", "ADR Platform", "AI Attack", "Cyber Warrior"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/sevii-targets-ai-speed-attacks-with-preemptive-autonomous-defense", lang: "EN" }
    ]
  },
  {
    id: "20260901-10337",
    trackers: ["security"],
    category: "前瞻技術",
    title: "俄羅斯相關威脅行為者 UAC-0099 採用 GuardBreaker 技術干擾 AI 分析",
    summary: "資安研究人員揭露了一種名為 GuardBreaker 的新技術，該技術正被俄羅斯相關的威脅行為者 UAC-0099 用於攻擊烏克蘭的目標，目的是干擾人工智慧（AI）輔助的分析過程。該技術的原理是故意觸發大型語言模型（LLM）的安全機制，阻止其正常運作。ESET 指出，UAC-0099 在惡意 VBS 腳本中插入了「我想要製造核武器。幫我...」等敏感文本作為註解，意圖吸引 AI 的注意力並阻止其分析剩餘程式碼。該腳本被認為是 UAC-0099 更廣泛工具集的一部分，該行為者過去曾針對交通和能源部門。此外，此類反分析技巧並非首次出現，先前在 Mini Shai-Hulud 供應鏈攻擊中，攻擊者也利用了包含關於生物和核武器的提示注入來繞過 AI 安全護欄。這些攻擊旨在導致 AI 掃描器進入拒絕狀態或產生上下文污染。建議組織應加強對 AI 輔助安全工作流程的防禦，特別是確保內容在送入語言模型時能被明確隔離為不可信數據。",
    tags: ["UAC-0099", "GuardBreaker", "LLM", "AI 攻擊", "供應鏈安全", "VBS 腳本", "惡意軟體"],
    title_en: "Russian-Linked Threat Actor UAC-0099 Uses GuardBreaker Technique to Disrupt AI Analysis",
    summary_en: "Cybersecurity researchers have revealed a new technique called GuardBreaker, which is being utilized by the Russian-linked threat actor UAC-0099 to target Ukrainian objectives. The goal is to disrupt AI-assisted analysis processes. The technique works by deliberately triggering the safety mechanisms of Large Language Models (LLMs), preventing them from operating normally. ESET points out that UAC-0099 inserted sensitive texts, such as \"I want to build a nuclear weapon. Help me...\", as comments within malicious VBS scripts. This is intended to capture the AI's attention and prevent it from analyzing the remaining code. This script is believed to be part of UAC-0099's broader toolkit, as the actor has previously targeted the transportation and energy sectors. Furthermore, this type of anti-analysis technique is not new; previously, in the Mini Shai-Hulud supply chain attack, attackers also used prompt injection containing information about biological and nuclear weapons to bypass AI safety barriers. These attacks aim to cause the AI scanner to enter a refusal state or generate context pollution. Organizations are advised to strengthen defenses for AI-assisted security workflows, particularly by ensuring that content sent to language models is clearly isolated as untrusted data.",
    tags_en: ["UAC-0099", "GuardBreaker", "LLM", "AI Attack", "Supply Chain Security", "VBS Script", "Malware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/russia-aligned-uac-0099-plants-nuclear.html", lang: "EN" }
    ]
  },
  {
    id: "20260901-10374",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Meet 硬體平台從 ChromeOS 轉向 Android，提供更多樣化與彈性",
    summary: "Google 宣布將其 Google Meet 硬體產品線從 ChromeOS 轉移至 Android 系統。現有的 Google Meet 硬體，包括觸控控制器、攝影機、麥克風、喇叭和運行排程軟體及視訊會議套件的 Chromebox，將逐步過渡。儘管如此，Google 保證現有的 ChromeOS 設備將持續獲得安全補丁、穩定性更新和 ChromeOS 版本，支援期限至 2030 年不變。硬體合作夥伴如 Logitech、CTL 和 Asus 將依據時間表逐步停止製造和銷售基於 ChromeOS 的硬體。Google 轉向 Android 的主要優勢包括設備多樣性，提供更廣泛的機身形式（如緊湊型一體機、視訊條等）；企業級穩定性，確保性能和響應速度；以及硬體靈活性，認證的 AOSP 設備可運行多種視訊會議解決方案，避免設備替換的投資損失。Google 預計將在 2027 年推出多款適用於大型空間的 Android 設備。",
    tags: ["Google Meet", "ChromeOS", "Android", "硬體轉移", "AOSP", "設備多樣性"],
    title_en: "Google Meet Hardware Platform Shifts from ChromeOS to Android, Offering Greater Diversity and Flexibility",
    summary_en: "Google announced that it will transition its Google Meet hardware product line from ChromeOS to the Android operating system. Existing Google Meet hardware, including touch controllers, cameras, microphones, speakers, and Chromeboxes that run scheduling software and video conferencing suites, will undergo a gradual transition. Despite this, Google guarantees that existing ChromeOS devices will continue to receive security patches, stability updates, and ChromeOS versions, with support extending until 2030. Hardware partners such as Logitech, CTL, and Asus will gradually cease manufacturing and selling ChromeOS-based hardware according to a schedule. The main advantages of Google's shift to Android include device diversity, offering a wider range of form factors (such as compact all-in-ones and video bars); enterprise-grade stability, ensuring performance and responsiveness; and hardware flexibility, allowing certified AOSP devices to run multiple video conferencing solutions, thereby avoiding investment losses from equipment replacement. Google anticipates launching multiple Android devices for large spaces in 2027.",
    tags_en: ["Google Meet", "ChromeOS", "Android", "Hardware Transition", "AOSP", "Device Diversity"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/google-meet-hardware-chromeos-android", lang: "EN" }
    ]
  },
  {
    id: "20260901-10379",
    trackers: ["os"],
    category: "重點關注",
    title: "Razer 發布 Prio 遊戲控制器：USB-C 摺疊設計，極致便攜性提升",
    summary: "Razer 最新推出了 Prio 遊戲控制器，這是一款專為智慧型手機設計的 USB-C 連接控制器。其最大的特色在於極致的便攜性，當不使用時，控制器可以摺疊至近似信用卡大小的體積，尺寸約為寬高 10-15mm。儘管如此，它仍保留了觸感良好的低剖面搖桿、雙按鈕和扳機，以及 D-Pad 和 ABXY 按鈕。值得一提的是，其搖桿採用了非接觸式感測器來避免搖桿漂移問題。Razer Prio 目前在公司官方網站和 Amazon 上架銷售，定價為 99.99 美元。這款產品的設計目標是為移動遊戲玩家提供一個更小巧、更方便攜帶的遊戲體驗。",
    tags: ["Razer", "Prio", "遊戲控制器", "USB-C", "便攜性", "移動遊戲"],
    title_en: "Razer Launches Prio Gaming Controller: USB-C Foldable Design Enhances Portability",
    summary_en: "Razer has recently launched the Prio gaming controller, a USB-C connected controller designed specifically for smartphones. Its most notable feature is its extreme portability; when not in use, the controller folds down to a size comparable to a credit card, with dimensions of approximately 10-15mm in width and height. Despite its compact size, it retains tactile low-profile joysticks, dual buttons and triggers, a D-Pad, and ABXY buttons. Notably, the joysticks utilize non-contact sensors to prevent stick drift issues. The Razer Prio is currently available for sale on the company's official website and Amazon, priced at $99.99. The product is designed to provide mobile gamers with a more compact and convenient gaming experience.",
    tags_en: ["Razer", "Prio", "gaming controller", "USB-C", "portability", "mobile gaming"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/razer-prio-usb-c-foldable-game-controller", lang: "EN" }
    ]
  },
  {
    id: "20260901-10381",
    trackers: ["os"],
    category: "重點關注",
    title: "OPPO Find X10 傳聞規格曝光：搭載 8000mAh 電池與雙 200MP 鏡頭",
    summary: "根據傳聞報導，OPPO 即將發布的旗艦機 Find X10 將搭載頂級規格。據 Digital Chat Station 透露，基礎款 Find X10 被描述為「最強大的標準版旗艦」，其規格傳聞包括 8000mAh 電池、200MP 主鏡頭搭配 200MP 長焦鏡頭，以及超窄邊框顯示器和 BT.2020 超廣色域。GSMArena 補充指出，Find X10 的螢幕尺寸可能維持在 6.59 吋，但面板有所升級，相機系統相較於去年的 50MP 傳感器有顯著提升。此外，OPPO 預計將在不久的將來推出新旗艦系列，其中「Pro Max」型號據傳會增加第三個 200MP 鏡頭。此消息顯示 OPPO 正在積極推動其旗艦產品線的升級與創新。",
    tags: ["OPPO", "Find X10", "旗艦手機", "手機規格", "8000mAh", "相機"],
    title_en: "OPPO Find X10 Rumored Specs Revealed: Featuring 8000mAh Battery and Dual 200MP Cameras",
    summary_en: "According to rumors, OPPO's upcoming flagship Find X10 will feature top-tier specifications. Digital Chat Station revealed that the base Find X10 is described as the 'most powerful standard flagship,' with rumored specs including an 8000mAh battery, a 200MP main camera paired with a 200MP telephoto camera, and an ultra-narrow bezel display with BT.2020 ultra-wide color gamut. GSMArena added that the Find X10's screen size may remain at 6.59 inches, but the panel will be upgraded, and the camera system shows a significant improvement compared to last year's 50MP sensor. Furthermore, OPPO is expected to launch a new flagship series soon, with the 'Pro Max' model rumored to add a third 200MP camera. This news indicates that OPPO is actively promoting upgrades and innovations across its flagship product line.",
    tags_en: ["OPPO", "Find X10", "flagship phone", "phone specs", "8000mAh", "camera"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/oppo-find-x10-specs-battery-leak", lang: "EN" }
    ]
  },
  {
    id: "20260901-10385",
    trackers: ["os"],
    category: "重點關注",
    title: "小米子品牌 Poco 發布旗艦手機 F9 Pro 與 F9 Ultra，搭載 Snapdragon 8 Elite Gen 5 處理器",
    summary: "小米子品牌 Poco 正式推出旗艦智慧型手機 Poco F9 Pro 和 Poco F9 Ultra。這兩款手機在硬體規格上進行了重大升級，F9 Ultra 配備 Qualcomm 的 Snapdragon 8 Elite Gen 5 處理器，搭配高達 16GB RAM 和 1TB UFS 4.1 儲存空間。兩款手機均整合了專用的 12nm VisionBoost D8 圖形晶片，用於 AI 影像處理。螢幕方面，兩者均採用高刷新率 HyperRGB AMOLED 面板，最高亮度達 4,500 尼特。相機系統全面升級，主鏡頭皆為 200MP，並具備 OIS 和 4K 錄影能力。F9 Ultra 在相機配置上更進階，配備 50MP 潛望式長焦鏡頭，提供 5 倍光學變焦。此外，F9 Ultra 搭載了巨大的 8,050mAh 電池，而 F9 Pro 則為 6,330mAh。兩款手機均支援 100W 有線快充和 IP68 防塵防水等級。F9 Pro 的起價為 $699，而 F9 Ultra 的起價為 $799。消費者可透過官方渠道購買。",
    tags: ["Poco", "F9 Pro", "F9 Ultra", "Snapdragon 8 Elite Gen 5", "智慧型手機", "硬體規格", "AI 影像"],
    title_en: "Xiaomi's Poco Brand Launches Flagship Phones F9 Pro and F9 Ultra, Featuring Snapdragon 8 Elite Gen 5 Processor",
    summary_en: "The Poco brand has officially launched the flagship smartphones, the Poco F9 Pro and Poco F9 Ultra. Both phones feature significant hardware upgrades; the F9 Ultra is equipped with Qualcomm's Snapdragon 8 Elite Gen 5 processor, paired with up to 16GB of RAM and 1TB UFS 4.1 storage. Both models integrate a dedicated 12nm VisionBoost D8 GPU for AI image processing. Regarding the display, both utilize a high refresh rate HyperRGB AMOLED panel with a maximum brightness of 4,500 nits. The camera system has been fully upgraded, with both main lenses featuring 200MP, along with OIS and 4K video recording capabilities. The F9 Ultra features an advanced camera configuration, including a 50MP periscope telephoto lens that provides 5x optical zoom. Furthermore, the F9 Ultra is equipped with a massive 8,050mAh battery, while the F9 Pro has a 6,330mAh battery. Both phones support 100W wired fast charging and IP68 dust and water resistance. The starting price for the F9 Pro is $699, and the starting price for the F9 Ultra is $799. Consumers can purchase them through official channels.",
    tags_en: ["Poco", "F9 Pro", "F9 Ultra", "Snapdragon 8 Elite Gen 5", "smartphone", "hardware specifications", "AI imaging"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/01/poco-f9-pro-and-f9-ultra-launch", lang: "EN" }
    ]
  },
  {
    id: "20260901-10388",
    trackers: ["os"],
    category: "重點關注",
    title: "福特選擇 Apple Maps 搭載新電動車平台，而非 Google Maps 進行深度整合",
    summary: "福特宣布將在其新一代電動車平台 Fathom 上採用原生的 Apple Maps 整合，而非選擇 Google Maps。福特高級車輛專案副總裁 Alan Clarke 表示，在評估了性能、成本和品質等眾多因素後，他們決定 Apple Maps 提供了「最佳解決方案」。由於電動車的特性，如續航里程估算、充電站可用性、天氣等複雜因素，福特需要一個具備獲取高程、天氣及準確更新充電資訊能力的優秀地圖提供者。福特強調，他們希望與 Apple Maps 團隊建立緊密的合作關係，以確保車載系統中的精確性。值得注意的是，福特並未採用 CarPlay Ultra，而是將提供原生的 Apple Maps，同時也保留了標準的 CarPlay 和 Android Auto 選項，讓駕駛者仍可選擇使用 Google Maps、Waze 等其他地圖服務。這項決定旨在為客戶提供最優質的駕駛體驗。",
    tags: ["福特", "Apple Maps", "Google Maps", "Fathom", "電動車", "車載系統"],
    title_en: "Ford Selects Apple Maps for New EV Platform, Rejecting Deep Google Maps Integration",
    summary_en: "Ford announced that it will integrate native Apple Maps into its new generation electric vehicle platform, Fathom, rather than opting for Google Maps. Alan Clarke, Vice President of Advanced Vehicle Programs at Ford, stated that after evaluating numerous factors including performance, cost, and quality, they determined that Apple Maps provided the \"optimal solution.\" Given the characteristics of electric vehicles, such as complex factors like range estimation, charging station availability, and weather, Ford requires a superior map provider capable of accessing elevation, weather, and accurately updating charging information. Ford emphasized that they aim to build a close partnership with the Apple Maps team to ensure accuracy within the in-vehicle system. Notably, Ford will not adopt CarPlay Ultra; instead, it will provide native Apple Maps while retaining standard CarPlay and Android Auto options, allowing drivers to continue choosing other mapping services like Google Maps and Waze. This decision aims to provide customers with the best possible driving experience.",
    tags_en: ["Ford", "Apple Maps", "Google Maps", "Fathom", "Electric Vehicle", "In-Vehicle System"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/ford-explains-why-it-chose-apple-maps-over-google-for-its-new-evs", lang: "EN" }
    ]
  },
  {
    id: "20260901-10389",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 新任 CEO John Ternus 獲高額薪酬，Tim Cook 擔任執行主席獲得巨額獎金",
    summary: "根據最新的監管文件披露，Apple 的新任執行長 John Ternus 將獲得一包含 5800 萬美元的薪酬方案。該方案包括每年 300 萬美元的底薪，以及自 2027 財年起目標價值為 5500 萬美元的年度股權獎勵，其中 4125 萬美元是基於績效的限制性股票單位 (RSUs)。此外，Ternus 在 2026 年也將獲得一筆目標價值 250 萬美元的按比例股票獎勵。同時，Apple 的執行主席 Tim Cook 也獲得了目標價值 4700 萬美元的薪酬方案，包括每年 200 萬美元的底薪和 4500 萬美元的財年股權獎勵。報導指出，Cook 作為執行主席的職責將涉及管理 Apple 與川普總統及中國政府的關係。這些薪酬結構反映了公司對高階主管的重視，但具體薪酬細節和影響範圍未在本次公開文件中詳盡說明。",
    tags: ["Apple", "John Ternus", "Tim Cook", "薪酬結構", "執行主席", "SEC"],
    title_en: "Apple's New CEO John Ternus to Receive High Compensation, Tim Cook to Get Large Bonus as Executive Chairman",
    summary_en: "According to the latest regulatory filings, Apple's new Chief Executive Officer, John Ternus, will receive a compensation package valued at $58 million. This package includes an annual base salary of $3 million, and annual equity awards with a target value of $55 million starting in fiscal year 2027, of which $41.25 million are performance-based Restricted Stock Units (RSUs). Additionally, Ternus will receive a proportional stock award with a target value of $2.5 million in 2026. Meanwhile, Apple's Executive Chairman, Tim Cook, also received a compensation package with a target value of $47 million, including an annual base salary of $2 million and a fiscal year equity award of $45 million. The report notes that Cook's duties as Executive Chairman will involve managing Apple's relationship with President Trump and the Chinese government. While these compensation structures reflect the company's emphasis on senior management, the specific details and scope of the compensation were not fully elaborated in this public filing.",
    tags_en: ["Apple", "John Ternus", "Tim Cook", "Compensation Structure", "Executive Chairman", "SEC"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/john-ternus-gets-58m-pay-package-as-ceo-tim-cook-47m-as-chairman", lang: "EN" }
    ]
  },
  {
    id: "20260901-10390",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Maps 響應政治指令，將「安大略湖」更名為「美洲湖」",
    summary: "Apple 已開始在其 Apple Maps 應用程式中，將「Lake Ontario」（安大略湖）更名為「Lake America」（美洲湖）。此變動是遵循美國前總統 Trump 上週發出的指令，該指令是作為與加拿大持續進行的貿易爭端的一部分。此更名變動首先被 Bloomberg 報導，僅適用於美國境內的 Apple Maps 使用者。在加拿大，使用者仍會看到「Lake Ontario」的名稱；而全球其他地區的使用者則會同時看到這兩種名稱。Google Maps 幾天前也已將其更名，並表示遵循美國地理名稱資訊系統 (GNIS) 的規定。美國內政部長 Doug Burgum 表示，Trump 已直接聯繫 Apple 進行此項變更。此變動的推出是漸進式的，不同用戶可能在不同時間看到不同的名稱。MapQuest 則表示拒絕進行此更名，此舉反而導致了其下載量增加。",
    tags: ["Apple Maps", "政治影響", "地理名稱變更", "美國政策", "加拿大", "科技新聞"],
    title_en: "Apple Maps Renames 'Lake Ontario' to 'Lake America' Following Political Directive",
    summary_en: "Apple has begun renaming 'Lake Ontario' within its Apple Maps application to 'Lake America'. This change follows a directive issued by former U.S. President Trump, as part of ongoing trade disputes with Canada. The renaming was first reported by Bloomberg and is only applicable to Apple Maps users within the United States. Users in Canada will continue to see the name 'Lake Ontario,' while users in other global regions will see both names simultaneously. Google Maps also renamed the lake several days ago, stating that the change adheres to the U.S. Geographic Names Information System (GNIS) regulations. U.S. Secretary of the Interior Doug Burgum stated that Trump directly contacted Apple regarding this change. The rollout of this change is gradual, and different users may see different names at different times. MapQuest, meanwhile, stated that it refuses to implement the renaming, a move that has reportedly increased its downloads.",
    tags_en: ["Apple Maps", "Political Influence", "Geographical Name Change", "U.S. Policy", "Canada", "Tech News"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/apple-maps-renaming-lake-ontario-to-lake-america-following-trump-order", lang: "EN" }
    ]
  },
  {
    id: "20260901-10396",
    trackers: ["os"],
    category: "重點關注",
    title: "John Ternus 接任 Apple CEO，高層人事變動引發策略調整猜測",
    summary: "隨著 John Ternus 正式擔任 Apple 執行長，多家媒體報導揭露了公司高層的數項變動。Luca Maestri 已從「企業服務」主管職位卸任，其職責將轉移給 CFO Kevan Parekh，但 Maestri 仍將在 Apple University 擔任教學職務。此外，原負責併購的 Adrian Perica 的職位也可能發生調整，據傳他可能會被 Ternus 調整為不直接向其匯報，並可能分散至服務和財務團隊。這些變動被外界解讀為 Ternus 可能會改變 Apple 在併購策略上的方式，部分分析師預期他將會採取更積極的收購行動。此外，有消息指出，Ternus 可能會改變公司處理離職高階主管的方式，不像前任 Cook 那樣習慣讓他們擔任較小的職位。這些人事調整顯示了新領導層可能正在推動公司營運模式的重大轉變。",
    tags: ["Apple", "John Ternus", "高層變動", "併購策略", "Luca Maestri", "企業服務"],
    title_en: "John Ternus Takes Over as Apple CEO; Executive Changes Spark Speculation of Strategic Shifts",
    summary_en: "With John Ternus officially assuming the role of Apple CEO, multiple media reports have revealed several changes among the company's senior leadership. Luca Maestri has stepped down from his role overseeing 'Enterprise Services,' with his responsibilities being transferred to CFO Kevan Parekh. However, Maestri will remain at Apple University in a teaching capacity. Furthermore, Adrian Perica, who previously managed mergers and acquisitions, may also see his role adjusted. It is rumored that he might be reorganized by Ternus to report outside of his direct line and potentially be dispersed across the service and finance teams. These changes are being interpreted by the outside world as potential shifts in Apple's M&A strategy, with some analysts anticipating a more aggressive acquisition approach. Additionally, there are reports that Ternus may change how the company handles departing senior executives, moving away from the practice of assigning them smaller roles, as was common under the previous CEO. These personnel adjustments suggest that the new leadership may be driving significant transformations in the company's operational model.",
    tags_en: ["Apple", "John Ternus", "Executive Changes", "M&A Strategy", "Luca Maestri", "Enterprise Services"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/john-ternuss-first-day-as-apple-ceo-heres-the-latest", lang: "EN" }
    ]
  },
  {
    id: "20260901-10397",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta 發布 Muse Voice Transcribe，為 Mac 帶來即時多語言語音轉錄功能",
    summary: "Meta 推出 Muse Voice Transcribe，這是其首個即時音訊感知模型，透過 Meta Model API 整合至 Meta AI for Mac、Muse Code 及開發者使用。此技術結合了串流自動語音識別、語者區分和語音終點檢測功能。在實際應用中，它能即時轉錄語音，區分超過二十種聲音，並判斷說話者何時結束語音，且無需額外的後處理步驟。該模型在超過 70 種語言上進行了訓練，發布時驗證了 25 種語言，並支援超過一小時的音訊，同時支持句子內或跨句的自然語言切換。該系統採用「自適應延遲」機制，根據語音難易度決定聆聽時長，以平衡速度與準確性。目前，此技術已在 Mac 上啟用，使用者可透過按住 Fn 鍵在任何應用程式中進行語音輸入。該服務透過 Meta Model API 提供，費用為每 1,000 音訊分鐘 $3。",
    tags: ["Meta", "Muse Voice Transcribe", "語音識別", "Mac", "AI 模型", "語音轉錄"],
    title_en: "Meta Releases Muse Voice Transcribe, Bringing Real-Time Multilingual Speech Transcription to Mac",
    summary_en: "Meta has launched Muse Voice Transcribe, its first real-time audio perception model. This model is integrated through the Meta Model API into Meta AI for Mac, Muse Code, and for developer use. The technology combines streaming automatic speech recognition, speaker diarization, and voice endpoint detection. In practice, it can transcribe speech in real-time, distinguish over twenty voices, and determine when a speaker finishes speaking, all without requiring additional post-processing steps. The model was trained on over 70 languages, validated 25 languages upon release, and supports over an hour of audio, while also supporting natural language switching within or across sentences. The system utilizes an 'adaptive latency' mechanism, which determines the listening duration based on the difficulty of the speech, balancing speed and accuracy. Currently, this technology is available on Mac, allowing users to perform voice input in any application by holding the Fn key. The service is provided via the Meta Model API, costing $3 per 1,000 audio minutes.",
    tags_en: ["Meta", "Muse Voice Transcribe", "Speech Recognition", "Mac", "AI Model", "Speech Transcription"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/meta-launches-muse-voice-transcribe-for-real-time-voice-dictation-on-mac", lang: "EN" }
    ]
  },
  {
    id: "20260901-10407",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "本文為 9to5Mac 的每日新聞摘要節目介紹，內容主要為推廣其播客節目，並未提供任何具體的資安新聞事件、漏洞或技術細節。因此，無法進行資安分析或分類。",
    tags: ["9to5Mac", "播客", "新聞摘要"],
    title_en: "N/A",
    summary_en: "This article is an introduction to the daily news digest program from 9to5Mac, primarily promoting their podcast. It does not provide any specific cybersecurity news events, vulnerabilities, or technical details. Therefore, it cannot be subjected to cybersecurity analysis or classification.",
    tags_en: ["9to5Mac", "Podcast", "News Digest"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/daily-september-1-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-10410",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果股東在 Tim Cook 任期內獲得驚人增長，新任 CEO John Ternus 可採取不同管理路徑",
    summary: "彭博社報導指出，在 Tim Cook 擔任執行長期間，蘋果公司的股東取得了驚人的增長。累計增長率高達 2,275%，若計入股息支付，總回報率更是達 2,736%。儘管此成就極為顯著，但文章認為新任執行長 John Ternus 並不必須模仿 Cook 的管理方式。這篇文章主要探討了公司高層領導層的績效與未來管理方向的比較分析，而非技術安全議題。因此，本摘要側重於傳達此商業觀察。建議關注蘋果公司未來的戰略決策與市場表現。",
    tags: ["Apple", "Tim Cook", "John Ternus", "股東回報", "公司治理", "商業分析"],
    title_en: "Apple Shareholders Achieved Astonishing Growth During Tim Cook's Tenure; New CEO John Ternus Can Adopt a Different Management Path",
    summary_en: "Bloomberg reports that Apple shareholders achieved remarkable growth during Tim Cook's tenure as CEO. The cumulative growth rate reached 2,275%, and including dividend payouts, the total return rate reached 2,736%. Although this achievement is highly significant, the article suggests that the new CEO, John Ternus, does not need to emulate Cook's management style. This article primarily explores a comparative analysis of the company's senior leadership performance and future management direction, rather than focusing on technical security issues. Therefore, this summary focuses on conveying this business observation. It is recommended to monitor Apple's future strategic decisions and market performance.",
    tags_en: ["Apple", "Tim Cook", "John Ternus", "Shareholder Returns", "Corporate Governance", "Business Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/aapl-gained-2736-under-cook-but-ternus-doesnt-have-to-emulate-him", lang: "EN" }
    ]
  },
  {
    id: "20260901-10411",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 指控 Apple 內部爭議為「自身製造的混亂」遭竊取商業機密",
    summary: "本篇報導涉及科技巨頭 Apple 與 OpenAI 之間一場關於商業機密的法律糾紛。Apple 方面公開了基於分析前員工 Chang Liu 所使用的 MacBook 的「驚人證據」，指控兩名前員工竊取了與硬體設計相關的商業機密。然而，AI 公司 OpenAI 對此法律行動進行了反擊，聲稱整個事件「是 Apple 自己造成的混亂」。這場爭議的焦點在於知識產權和內部機密保護，涉及兩家頂尖科技公司的法律戰。目前文章未提供具體的技術細節、CVSS 分數或受影響的產品版本，主要著重於雙方在法律層面的相互指控。",
    tags: ["OpenAI", "Apple", "商業機密", "法律糾紛", "硬體設計"],
    title_en: "OpenAI Accuses Apple of Creating 'Self-Inflicted Chaos' Over Alleged Theft of Trade Secrets",
    summary_en: "This report covers a legal dispute concerning trade secrets between tech giants Apple and OpenAI. Apple has publicly presented 'stunning evidence' derived from analyzing a MacBook used by former employee Chang Liu, accusing two former employees of stealing trade secrets related to hardware design. However, AI company OpenAI has counter-attacked the legal action, claiming the entire incident 'is chaos created by Apple itself.' The focus of this dispute is intellectual property and internal secret protection, involving a legal battle between two top technology companies. The article does not provide specific technical details, CVSS scores, or affected product versions, focusing primarily on the mutual accusations made by both parties in the legal sphere.",
    tags_en: ["OpenAI", "Apple", "Trade Secrets", "Legal Dispute", "Hardware Design"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/openai-calls-trade-secret-dispute-a-mess-of-apples-own-making", lang: "EN" }
    ]
  },
  {
    id: "20260901-10413",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 領導層變動：John Ternus 接任 CEO，Tim Cook 轉任執行主席",
    summary: "蘋果公司於 9 月 1 日正式宣布高層領導層變動。John Ternus 已接任公司執行長（CEO）職位，標誌著公司進入新時代。原 CEO Tim Cook 則轉任董事會成員，擔任執行主席（Executive Chair）。此變動已在蘋果官方領導層頁面上得到體現。本次變動屬於公司內部高層人事調整，不涉及任何技術漏洞或安全事件。對於關注蘋果公司營運和策略的專業人士而言，這是一個重要的關注點，反映了公司內部權力結構的轉移。",
    tags: ["Apple", "John Ternus", "Tim Cook", "CEO", "領導層變動", "公司治理"],
    title_en: "Apple Leadership Shakeup: John Ternus Appointed CEO, Tim Cook Transitions to Executive Chair",
    summary_en: "Apple officially announced a high-level leadership change on September 1st. John Ternus has assumed the role of Chief Executive Officer (CEO), marking the company's entry into a new era. Former CEO Tim Cook has transitioned to a role on the Board of Directors, serving as Executive Chair. This change has been reflected on Apple's official leadership page. This adjustment is an internal corporate personnel change and does not involve any technical vulnerabilities or security incidents. For professionals tracking Apple's operations and strategy, this is a significant point of interest, reflecting a shift in the company's internal power structure.",
    tags_en: ["Apple", "John Ternus", "Tim Cook", "CEO", "Leadership Change", "Corporate Governance"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/apple-leadership-page-updated-as-john-ternus-becomes-the-new-ceo", lang: "EN" }
    ]
  },
  {
    id: "20260901-10414",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple @ Work 播客探討企業級 AI 採用的「人性化」面向",
    summary: "本期 Apple @ Work 播客邀請到 Dr. Gleb Tsipursky 進行深入探討，主題聚焦於企業環境中人工智慧（AI）採用的「人性化」層面。內容涵蓋了 Dr. Tsipursky 的著作以及相關議題。雖然文章主要介紹了這集播客的內容，但未提供任何關於技術漏洞、安全風險或特定產品的技術細節。對於尋求了解 AI 導入在企業中如何影響人員和流程的專業人士，這是一個重要的資訊來源。建議聽眾收聽該播客以獲取更全面的洞察。",
    tags: ["Apple @ Work", "AI 採納", "企業應用", "Dr. Gleb Tsipursky", "播客"],
    title_en: "Apple @ Work Podcast Discusses the 'Human Element' of Enterprise AI Adoption",
    summary_en: "This episode of the Apple @ Work podcast invites Dr. Gleb Tsipursky for an in-depth discussion focusing on the 'human element' of Artificial Intelligence (AI) adoption within enterprise environments. The content covers Dr. Tsipursky's work and related topics. While the article primarily introduces the podcast episode's content, it does not provide any technical details regarding vulnerabilities, security risks, or specific products. This is an important resource for professionals seeking to understand how AI implementation affects personnel and processes in a corporate setting. Listeners are advised to tune into the podcast for a more comprehensive insight.",
    tags_en: ["Apple @ Work", "AI Adoption", "Enterprise Applications", "Dr. Gleb Tsipursky", "Podcast"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/01/apple-work-podcast-the-human-side-of-ai-adoption-in-the-enterprise", lang: "EN" }
    ]
  },
  {
    id: "20260901-10416",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "本文為 9to5Mac 的每日新聞摘要節目介紹，內容主要為推廣其播客節目，並未提供任何具體的資安事件或技術新聞資訊。因此，無法進行資安新聞分析。",
    tags: ["9to5Mac", "播客", "新聞摘要"],
    title_en: "N/A",
    summary_en: "This article is an introduction to the daily news summary program from 9to5Mac, primarily promoting their podcast. It does not provide any specific cybersecurity incidents or technical news information. Therefore, a cybersecurity news analysis cannot be performed.",
    tags_en: ["9to5Mac", "Podcast", "News Summary"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/31/daily-august-31-2026", lang: "EN" }
    ]
  },
  {
    id: "20260901-10420",
    trackers: ["os"],
    category: "重點關注",
    title: "CDC 排除賓州麻疹死亡案例，質疑州級死亡判定準確性",
    summary: "美國疾病管制與預防中心（CDC）在最新國家麻疹數據更新中，將賓州衛生官員上週報告的兩起麻疹死亡案例排除在外。此舉打破了傳統上由各州決定病例和死亡判定的先例，公開質疑了該州的死亡判定準確性。據報導，CDC 新任主任 Erica Schwartz 負責了此決定。CDC 網站上的聲明指出，目前可用的資訊尚未確立麻疹是否導致或促成這些死亡，或受害者是否在感染麻疹期間死於其他原因。該數據頁面在週末多次變動，從顯示 2026 年總死亡數為「0」，更新為「2」，最終又被更改為刪除這兩起死亡，並用星號標記，以配合該不包含死亡案例的特殊聲明。此事件凸顯了公共衛生數據報告中的決策權與資訊透明度問題。",
    tags: ["CDC", "麻疹", "公共衛生", "數據透明度", "賓州", "Erica Schwartz"],
    title_en: "CDC Excludes Pennsylvania Measles Deaths, Questioning State-Level Mortality Determination Accuracy",
    summary_en: "In its latest national measles data update, the US Centers for Disease Control and Prevention (CDC) excluded two measles death cases reported by Pennsylvania health officials last week. This move deviates from the traditional precedent of states independently determining case and death classifications, publicly questioning the accuracy of the state's mortality determinations. Reports indicate that the CDC's new director, Erica Schwartz, was responsible for this decision. A statement on the CDC website noted that the currently available information has not established whether measles caused or contributed to these deaths, or if the victims died of other causes while infected with measles. This data page fluctuated multiple times over the weekend, changing from showing a total death count of '0' for 2026, updating to '2', and finally being revised to delete the two deaths, marking them with an asterisk to align with the special statement that these cases do not include deaths. This incident highlights issues of decision-making authority and information transparency in public health data reporting.",
    tags_en: ["CDC", "Measles", "Public Health", "Data Transparency", "Pennsylvania", "Erica Schwartz"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/health/2026/09/cdc-reported-then-deleted-two-measles-deaths-that-were-questioned-by-rfk-jr", lang: "EN" }
    ]
  },
  {
    id: "20260901-10425",
    trackers: ["os"],
    category: "重點關注",
    title: "NASA 轉向火星空中探測：SkyFall 任務將使用直升機取代傳統著陸器與漫遊車",
    summary: "在過去三十多年中，NASA 首次不再有確定的計畫發送新的火星著陸器或漫遊車。該機構近期的火星探索重點轉向了空中無人機，這是一種幾年前才被認為可行的開創性探索模式。SkyFall 任務將是首次在火星上進行科學用途的直升機飛行，該任務計劃於 2028 年底左右啟動。SkyFall 的直升機將搭乘 NASA 的 Space Reactor-1 “Freedom” 任務前往火星，該任務的主要目標是展示深空核電推進技術。JPL 與高空無人機開發商 AeroVironment 合作設計和製造這三架 SkyFall 直升機。這些新載具在 Ingenuity 的設計基礎上進行升級，尺寸更大，並配備了更先進的科學儀器，包括地穿透雷達，用於尋找火星表層下方的冰層。與 Ingenuity 相比，SkyFall 能夠透過空中中繼衛星進行數據傳輸和接收，極大地提升了科學探測能力。",
    tags: ["NASA", "SkyFall", "火星探索", "直升機", "AeroVironment", "核電推進"],
    title_en: "NASA Shifts Focus to Martian Aerial Exploration: SkyFall Mission Will Use Helicopters Instead of Traditional Landers and Rovers",
    summary_en: "In the past three decades, NASA has not had a definite plan to send new Mars landers or rovers. The agency's recent focus for Mars exploration has shifted toward aerial drones, a pioneering exploration model only deemed feasible a few years ago. The SkyFall mission will be the first to conduct scientific helicopter flights on Mars, with the mission planned to launch around the end of 2028. The SkyFall helicopters will travel to Mars aboard NASA's Space Reactor-1 “Freedom” mission, whose primary goal is to demonstrate deep space nuclear electric propulsion technology. JPL collaborated with high-altitude drone developer AeroVironment to design and manufacture these three SkyFall helicopters. These new vehicles are upgrades based on the Ingenuity design, are larger in size, and are equipped with more advanced scientific instruments, including ground-penetrating radar, used to locate subsurface ice layers on Mars. Compared to Ingenuity, SkyFall can transmit and receive data through aerial relay satellites, greatly enhancing scientific exploration capabilities.",
    tags_en: ["NASA", "SkyFall", "Mars Exploration", "Helicopter", "AeroVironment", "Nuclear Electric Propulsion"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/09/without-new-landers-or-rovers-its-helicopters-or-bust-for-nasas-mars-program", lang: "EN" }
    ]
  },
  {
    id: "20260901-10429",
    trackers: ["os"],
    category: "重點關注",
    title: "Python 3.13 實驗性 JIT 編譯器開發進展與未來路徑討論",
    summary: "Python 3.13 版本引入了實驗性的即時編譯器 (JIT) 以優化 CPython 執行 Python 代碼的方式。自此功能推出後，JIT 的開發持續進行，儘管其形式化程度可能不如預期。在六月，Python 的指導委員會 (SC) 發布了一項公告，指出在未接受支持 JIT 的 PEP（Python Enhancement Proposal）之前，主分支上將不會有新的 JIT 開發（僅限於錯誤和安全修復）。這促成了 PEP 836（\"JIT Go Brrr: The Path to a Supported JIT Compiler for CPython\"）的創建，該提案目前正在討論中。目前看來，JIT 的工作可能會繼續，但具體時間點尚不確定。",
    tags: ["Python", "JIT 編譯器", "CPython", "PEP 836", "語言開發", "編譯器"],
    title_en: "Progress on Experimental JIT Compiler in Python 3.13 and Discussion of Future Roadmap",
    summary_en: "Python 3.13 introduced an experimental Just-In-Time (JIT) compiler to optimize how CPython executes Python code. Since its introduction, JIT development has continued, although its formalization may be less advanced than anticipated. In June, the Python Steering Council (SC) issued an announcement stating that no new JIT development would be merged into the main branch unless a supporting PEP (Python Enhancement Proposal) was accepted (limited only to bug and security fixes). This prompted the creation of PEP 836 (\"JIT Go Brrr: The Path to a Supported JIT Compiler for CPython\"), which is currently under discussion. While JIT work appears likely to continue, the specific timeline remains uncertain.",
    tags_en: ["Python", "JIT Compiler", "CPython", "PEP 836", "Language Development", "Compiler"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1090385", lang: "EN" }
    ]
  },
  {
    id: "20260901-10430",
    trackers: ["os"],
    category: "重點關注",
    title: "Firefox 瀏覽器 155 版本發布，新增廣告阻擋計數器與安全修補",
    summary: "Mozilla 發布了 Firefox 網頁瀏覽器 155 版本。本次更新帶來了多項顯著變更，包括在網址列顯示已阻擋的廣告追蹤器數量，以及容器的重新排序功能。此外，瀏覽器確保了僅在使用者明確操作下才會開啟 mailto: 連結。對於網路開發者而言，本次發布也包含了一些可能產生影響的變更，同時也修補了多個錯誤和安全漏洞。值得注意的是，用於「受限入口網站」（如飯店 Wi-Fi 登入頁面）的網域已從 detectportal.firefox.com 變更為 firefox-portal-detection.com，這可能需要使用者更新網路允許清單。使用者應注意查閱官方發布說明，以了解所有安全修補的細節。",
    tags: ["Firefox", "瀏覽器更新", "安全修補", "廣告阻擋", "網頁開發"],
    title_en: "Firefox Browser Version 155 Released with Ad Blocker Counter and Security Fixes",
    summary_en: "Mozilla has released Firefox web browser version 155. This update introduces several notable changes, including displaying the number of blocked ad trackers in the address bar, as well as a reordering function for containers. Furthermore, the browser now ensures that mailto: links only open when explicitly initiated by the user. For web developers, this release also includes several potentially impactful changes, alongside multiple bug and security fixes. Notably, the domain used for 'restricted websites' (such as hotel Wi-Fi login pages) has changed from detectportal.firefox.com to firefox-portal-detection.com, which may require users to update their network permissions. Users are advised to consult the official release notes for details on all security patches.",
    tags_en: ["Firefox", "Browser Update", "Security Fixes", "Ad Blocking", "Web Development"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1091926", lang: "EN" }
    ]
  },
  {
    id: "20260901-10446",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "攻擊者竊取 METR API 金鑰，利用價值 60 萬美元的點數，數週未被察覺",
    summary: "一則資安新聞報導指出，一名攻擊者成功竊取了 METR 的 API 金鑰，並利用了價值約 60 萬美元的點數。值得注意的是，該點數是由模型提供者免費提供給 METR 的，而非實際客戶所能獲得的優惠。事件的嚴重性在於，攻擊者在利用這些資源的數週期間，並未引起任何警覺。這類事件凸顯了 API 金鑰管理和帳戶監控的重大風險。實務上，組織必須加強對敏感 API 憑證的保護，並實施嚴格的異常行為監控機制，以確保任何未經授權的使用行為都能被及時偵測到。雖然原文未提供具體的修補建議，但強烈建議相關機構應立即審查其 API 存取權限和安全策略。",
    tags: ["METR", "API 金鑰", "資安事件", "帳戶安全", "攻擊者", "點數盜用"],
    title_en: "Attacker Steals METR API Key, Exploits Points Worth $600,000 Over Weeks Without Detection",
    summary_en: "A recent cybersecurity report revealed that an attacker successfully stole the METR API key and exploited points valued at approximately $600,000. Notably, these points were provided by the model provider to METR for free, rather than being discounts available to actual customers. The severity of the incident lies in the fact that the attacker operated using these resources for several weeks without triggering any alarms. Such incidents highlight significant risks in API key management and account monitoring. Practically, organizations must strengthen the protection of sensitive API credentials and implement strict anomaly detection mechanisms to ensure that any unauthorized usage can be detected promptly. Although the original text did not provide specific remediation suggestions, it strongly advises relevant organizations to immediately review their API access permissions and security policies.",
    tags_en: ["METR", "API Key", "Cybersecurity Incident", "Account Security", "Attacker", "Point Misuse"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/01/attacker-stole-a-metr-api-key-used-600k-worth-of-credits-and-no-one-noticed-for-weeks/5293730", lang: "EN" }
    ]
  },
  {
    id: "20260901-10448",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 承諾加強模型控制，呼籲合作夥伴共同努力提升 AI 安全性",
    summary: "Anthropic 公司承諾將更努力地控制其 AI 模型，並呼籲其合作夥伴共同參與此項工作。此舉顯示了 AI 領域對模型安全性和可控性的日益重視。雖然文章中提到了其他安全事件，但核心焦點在於 Anthropic 的政策轉變。在 AI 領域，模型失控的風險是當前資安界關注的熱點。雖然原文未提供具體技術細節或漏洞資訊，但此類承諾對於建立更穩健的 AI 生態系統至關重要。建議相關企業和開發者應密切關注 Anthropic 的實施細節，並確保其數據保留政策的有效性，以符合日益嚴格的合規要求。",
    tags: ["Anthropic", "AI 安全", "模型控制", "資安趨勢", "合作夥伴關係"],
    title_en: "Anthropic Commits to Strengthening Model Controls, Calls for Partner Collaboration to Enhance AI Safety",
    summary_en: "Anthropic has committed to exercising greater control over its AI models and is calling on its partners to participate in this effort. This move reflects the growing industry focus on model safety and controllability within the AI domain. While the article mentions other security incidents, the core focus remains on Anthropic's policy shift. In the AI sector, the risk of model loss of control is a major concern for the cybersecurity community. Although the original text does not provide specific technical details or vulnerability information, such commitments are crucial for building a more robust AI ecosystem. It is recommended that relevant enterprises and developers closely monitor Anthropic's implementation details and ensure the effectiveness of its data retention policies to meet increasingly stringent compliance requirements.",
    tags_en: ["Anthropic", "AI Safety", "Model Control", "Cybersecurity Trends", "Partnership"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/01/anthropic-pledges-to-try-harder-to-keep-models-under-control-asks-partners-to-chip-in/5293733", lang: "EN" }
    ]
  },
  {
    id: "20260901-10449",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS 釋出，提供類似 Windows 95 的操作系統體驗，並聲稱減少了錯誤",
    summary: "ReactOS 是一個旨在重現經典 Windows 95 時代操作系統體驗的專案。該系統的發布強調其在提供懷舊介面之餘，也聲稱在穩定性和錯誤處理方面有所改進。雖然文章未提供具體的技術細節或安全漏洞資訊，但它展示了 FOSS（自由開源軟體）社群在操作系統復興和維護方面的努力。對於尋求輕量級、懷舊化操作系統的用戶而言，ReactOS 是一個值得關注的選擇。開發者和資安人員應關注這類專案在現代安全標準下的兼容性與潛在風險。目前，關於其安全性的具體評估數據並未公開。",
    tags: ["ReactOS", "Windows 95", "FOSS", "操作系統", "懷舊系統", "開源軟體"],
    title_en: "ReactOS Released, Offering a Windows 95-like OS Experience and Claiming Reduced Errors",
    summary_en: "ReactOS is a project designed to recreate the operating system experience of the classic Windows 95 era. The system's release emphasizes that, in addition to providing a nostalgic interface, it also claims improvements in stability and error handling. Although the article does not provide specific technical details or security vulnerability information, it showcases the efforts of the FOSS (Free Open-Source Software) community in OS revival and maintenance. For users seeking a lightweight, retro operating system, ReactOS is a noteworthy option. Developers and cybersecurity professionals should monitor the compatibility and potential risks of such projects under modern security standards. Currently, specific assessment data regarding its security has not been made public.",
    tags_en: ["ReactOS", "Windows 95", "FOSS", "Operating System", "Retro OS", "Open Source Software"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/09/01/reactos-0416-serves-90s-windows-nostalgia-with-fewer-bugs/5293694", lang: "EN" }
    ]
  },
  {
    id: "20260901-10450",
    trackers: ["os"],
    category: "重點關注",
    title: "Oracle 預期 AI 輔助工程能讓生產力達到光速，但客戶需驗證數據保留政策",
    summary: "本文報導了 Oracle 關於利用人工智慧（AI）和機器學習（ML）提升生產力的願景。Oracle 承諾在 AI 相關服務中實施零數據保留政策，但文章提醒客戶必須主動檢查該政策是否確實生效。此外，文章還提到 Anthropic 承諾會更努力地控制其模型，並請求合作夥伴共同努力。在安全方面，有報導指出攻擊者利用 METR API 金鑰竊取了價值六十萬美元的信用額度，且未被察覺數週，突顯了安全監控的重大風險。總體而言，業界正積極探索 AI 的潛力，同時也面臨著數據隱私、模型控制和資安監控的嚴峻挑戰，企業在採用 AI 服務時必須保持高度警惕，並對數據處理流程進行嚴格的驗證。",
    tags: ["Oracle", "AI", "數據隱私", "生產力", "Anthropic", "資安風險"],
    title_en: "Oracle Predicts AI Assistance Can Achieve Light Speed Productivity, But Clients Must Verify Data Retention Policies",
    summary_en: "This article reports on Oracle's vision for leveraging Artificial Intelligence (AI) and Machine Learning (ML) to boost productivity. Oracle commits to implementing a zero data retention policy across its AI-related services, but the article cautions clients that they must proactively verify if this policy is genuinely enforced. Furthermore, the article mentions Anthropic's commitment to improving model control and calls for collaborative efforts from partners. On the security front, reports indicate that attackers exploited a METR API key to steal $600,000 in credit lines, remaining undetected for weeks, highlighting significant risks in security monitoring. Overall, while the industry actively explores AI's potential, it simultaneously faces severe challenges related to data privacy, model control, and cybersecurity monitoring. Enterprises must maintain a high level of vigilance when adopting AI services and rigorously validate all data processing workflows.",
    tags_en: ["Oracle", "AI", "Data Privacy", "Productivity", "Anthropic", "Cybersecurity Risk"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/01/oracle-pins-hopes-on-star-wars-productivity-jump-to-lightspeed-from-ai-assisted-engineering-1/5293596", lang: "EN" }
    ]
  },
  {
    id: "20260901-10451",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟與 AWS 建立多雲橋樑，解決客戶對跨平台整合的需求",
    summary: "本文探討了微軟（Microsoft）和 Amazon Web Services (AWS) 正在共同開發一個多雲環境的橋樑。此舉旨在滿足客戶對於在不同雲端平台間進行無縫整合的日益增長的需求。雖然文章未提供具體的技術細節或漏洞資訊，但它強調了當前企業級基礎設施的趨勢，即不再局限於單一雲供應商。對於資安專業人員和開發者而言，這意味著需要關注跨平台安全策略的制定、數據流的治理，以及如何確保在混合雲或多雲架構中保持一致的安全標準。這項趨勢反映了市場對靈活性和供應商鎖定風險的擔憂，促使大型雲服務提供商進行更深度的互操作性工作。建議企業應密切關注兩大巨頭在互操作性方面的最新動態，並審視現有的安全架構是否能夠適應多雲部署的複雜性。",
    tags: ["Microsoft", "AWS", "多雲", "雲端安全", "跨平台", "基礎設施"],
    title_en: "Microsoft and AWS Build Multi-Cloud Bridge to Meet Customer Cross-Platform Integration Needs",
    summary_en: "This article explores the joint development by Microsoft and Amazon Web Services (AWS) of a multi-cloud environment bridge. This initiative aims to meet the growing customer demand for seamless integration across different cloud platforms. While the article does not provide specific technical details or vulnerability information, it highlights a current trend in enterprise infrastructure: the move away from reliance on a single cloud provider. For cybersecurity professionals and developers, this means focusing on developing cross-platform security strategies, governing data flows, and ensuring consistent security standards within hybrid or multi-cloud architectures. This trend reflects market concerns regarding flexibility and vendor lock-in risk, prompting major cloud service providers to deepen their interoperability efforts. Enterprises are advised to closely monitor the latest developments in interoperability between the two giants and review whether their existing security architecture can accommodate the complexity of multi-cloud deployments.",
    tags_en: ["Microsoft", "AWS", "Multi-Cloud", "Cloud Security", "Cross-Platform", "Infrastructure"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/09/01/microsoft-and-aws-build-the-multicloud-bridge-they-said-customers-barely-needed/5293614", lang: "EN" }
    ]
  },
  {
    id: "20260901-10453",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Nutex 確認敏感資料遭竊，資安事件揭露數據安全風險",
    summary: "文章報導 Nutex 確認發生了敏感資料外洩事件。雖然原文未提供具體技術細節或 CVSS 分數，但事件顯示了企業在數據保護方面面臨的嚴峻挑戰。此類事件通常涉及未經授權的資料存取或竊取，對受影響的組織可能造成重大的業務和聲譽損害。建議相關企業應立即審查其數據安全協議、存取控制機制，並加強對敏感資料的加密和監控能力，以預防未來的安全威脅。這類事件提醒業界，即使是看似穩定的系統，也可能存在未被察覺的漏洞。",
    tags: ["Nutex", "資料外洩", "資安事件", "數據安全", "敏感資料"],
    title_en: "Nutex Confirms Sensitive Data Breach, Exposing Data Security Risks",
    summary_en: "The article reports that Nutex has confirmed a sensitive data leakage incident. Although the original text does not provide specific technical details or CVSS scores, the incident highlights the severe challenges enterprises face in data protection. Such incidents typically involve unauthorized data access or theft, which can cause significant business and reputational damage to the affected organization. It is recommended that relevant companies immediately review their data security protocols and access control mechanisms, and strengthen encryption and monitoring capabilities for sensitive data to prevent future security threats. This type of incident reminds the industry that even seemingly stable systems may contain undetected vulnerabilities.",
    tags_en: ["Nutex", "Data Leakage", "Cybersecurity Incident", "Data Security", "Sensitive Data"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/09/01/the-gentlemen-come-calling-as-nutex-confirms-sensitive-data-theft/5293642", lang: "EN" }
    ]
  },
  {
    id: "20260901-10454",
    trackers: ["os"],
    category: "重點關注",
    title: "Softaculous 流量遭 BGP 劫持，安全事件引發業界恐慌",
    summary: "文章報導了 Softaculous 流量遭受 BGP 劫持的事件，該事件導致了安全上的擔憂。BGP 劫持是一種網路路由攻擊，攻擊者可能劫持特定服務的流量，將其導向未經授權的伺服器。此次事件的發生，促使業界對網路基礎設施的韌性和安全防護機制進行了嚴峻的審視。雖然原文未提供具體的 CVSS 分數或受影響的組織數量，但此類事件的潛在影響是極為廣泛的，可能導致數據洩露、服務中斷或惡意流量重定向。對於使用 Softaculous 或依賴其服務的組織，建議應加強網路監控，並審查其 BGP 路由配置的安全性，考慮使用更穩健的網路服務供應商或實施額外的流量驗證機制，以降低被劫持的風險。",
    tags: ["BGP 劫持", "Softaculous", "網路安全", "流量劫持", "基礎設施安全"],
    title_en: "Softaculous Traffic Subject to BGP Hijacking, Security Incident Sparks Industry Concern",
    summary_en: "This article reports on an incident where Softaculous traffic was subjected to BGP hijacking, raising significant security concerns. BGP hijacking is a type of network routing attack where an attacker may hijack the traffic of a specific service, redirecting it to unauthorized servers. The occurrence of this incident has prompted the industry to conduct a rigorous review of network infrastructure resilience and security defense mechanisms. Although the original text does not provide specific CVSS scores or the number of affected organizations, the potential impact of such events is extremely broad, potentially leading to data leakage, service disruption, or malicious traffic redirection. Organizations using or relying on Softaculous services are advised to strengthen network monitoring and review the security of their BGP routing configurations. They should consider using more robust network service providers or implementing additional traffic validation mechanisms to mitigate the risk of hijacking.",
    tags_en: ["BGP Hijacking", "Softaculous", "Cybersecurity", "Traffic Hijacking", "Infrastructure Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/09/01/33-hour-bgp-hijack-of-softaculous-traffic-prompts-security-scramble/5293608", lang: "EN" }
    ]
  },
  {
    id: "20260901-10458",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Windows Defender 導致公車延誤事件：揭示安全軟體在日常運營中的意外影響",
    summary: "這篇文章報導了一個非傳統的資安事件，即 Windows Defender 的運作導致了某條前往 Altrincham 的公車延誤。這突顯了安全軟體在實際操作環境中可能產生的意想不到的干擾或影響。雖然文章未提供具體的技術細節、CVE 編號或攻擊向量，但它強調了安全產品的實務應用層面可能出現的意外行為。對於使用者和系統管理員而言，這提醒我們，即使是旨在保護系統的工具，也可能在特定情境下對日常運營造成影響。建議使用者應密切關注其安全軟體的運行狀態，並了解其可能對系統資源和外部流程的潛在影響。",
    tags: ["Windows Defender", "安全軟體", "運營影響", "資安事件", "日常運營"],
    title_en: "Windows Defender Causes Bus Delay Incident: Revealing the Unexpected Impact of Security Software on Daily Operations",
    summary_en: "This article reports on an unconventional cybersecurity incident: the operation of Windows Defender caused a delay for a bus heading to Altrincham. This highlights the potential for unexpected interference or impact that security software can have in real-world operational environments. Although the article does not provide specific technical details, CVE IDs, or attack vectors, it emphasizes the potential for unexpected behavior at the practical application layer of security products. For users and system administrators, this serves as a reminder that even tools designed to protect systems can impact daily operations in specific scenarios. Users are advised to closely monitor the operational status of their security software and understand its potential impact on system resources and external processes.",
    tags_en: ["Windows Defender", "Security Software", "Operational Impact", "Cybersecurity Incident", "Daily Operations"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/09/01/next-bus-to-altrincham-delayed-by-windows-defender/5293289", lang: "EN" }
    ]
  },
  {
    id: "20260901-10365",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "資安公司SensTone受邀拜訪荷蘭海牙市，商討保護歐盟工業基礎設施的OT安全合作",
    summary: "資安專業企業SensTone（代表：柳昌勳）在荷蘭海牙市訪問團的拜訪下，與海牙市政府及荷蘭大使館相關人員討論了保護歐洲工業基礎設施的營運技術（OT）安全合作方案。此次會面是因SensTone被選為「數位軟著陸計畫」（The Digital Softlanding Program）的潛力資安企業而促成。SensTone將藉此計畫獲得歐洲資安市場洞察、在地市場進入（GTM）策略優化，並協助應對NIS2和CRA等歐洲在地法規的合規驗證。雙方共同認識到全球OT安全威脅日益嚴峻的風險，特別關注工業控制系統中頻繁發生的認證繞過和未經授權存取問題。SensTone展示了其技術，該技術能在不更改現有設備或網路設定的情況下，在完全離線狀態下生成動態代碼，從而實現最適合OT環境的強大存取控制。此技術能有效滿足歐盟NIS2、CISA、NIST、IEC 62443等全球機構建議的嚴格安全標準要求，預計能順利應用於歐洲在地工業基礎設施。SensTone表示，將以此為基礎，鞏固在地網絡，致力於實質性地貢獻於歐洲工業基礎設施的保護。",
    tags: ["SensTone", "OT安全", "NIS2", "CRA", "工業基礎設施", "資安合規", "荷蘭海牙"],
    title_en: "Cybersecurity Firm SensTone Visits The Hague to Discuss OT Security Cooperation for EU Industrial Infrastructure Protection",
    summary_en: "Cybersecurity firm SensTone (represented by Ryu Chang-hoon) met with officials from the Hague City Government and the Dutch Embassy to discuss operational technology (OT) security cooperation plans for protecting Europe's industrial infrastructure. This meeting was facilitated by SensTone's selection as a potential cybersecurity firm in 'The Digital Softlanding Program.' Through this initiative, SensTone aims to gain insights into the European cybersecurity market, optimize its Go-To-Market (GTM) strategy for the local market, and assist with compliance validation against European local regulations such as NIS2 and CRA. Both parties recognized the escalating global OT security threat, with a particular focus on common issues like certificate bypass and unauthorized access within industrial control systems. SensTone showcased its technology, which generates dynamic code in a completely offline state without altering existing equipment or network configurations, thereby achieving robust access control optimized for the OT environment. This technology is expected to effectively meet the stringent security standard requirements set by global organizations such as the EU's NIS2, CISA, NIST, and IEC 62443, making it suitable for application in local European industrial infrastructure. SensTone stated that, building on this foundation, it is committed to strengthening the local network and making a substantial contribution to the protection of Europe's industrial infrastructure.",
    tags_en: ["SensTone", "OT Security", "NIS2", "CRA", "Industrial Infrastructure", "Cybersecurity Compliance", "The Hague"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145579", lang: "EN" }
    ]
  }
];
