// data-20260603.js — 2026-06-03
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-03"] = [
  {
    id: "20260603-001",
    trackers: ["security"],
    category: "重大事件",
    title: "全球證券交易所遭長期電子郵件監控：駭客利用原生Windows工具竊取高階主管信箱資料",
    summary: "研究人員揭露一宗針對一家未具名的全球證券交易所高階主管的電子郵件間諜活動。駭客在至少五個月的時間內，透過巧妙利用合法的原生Windows工具，持續監控並竊取了目標的Microsoft Outlook信箱內容。竊取的資料包括聯絡人、行事曆事件以及具體的商業交易細節，對金融市場的資訊具有極高價值。攻擊者透過多階段滲透，首先利用一個先前被入侵的設備進行橫向移動，並在主機上部署了兩個具有系統權限的植入物。後續透過偽裝成普通系統健康檢查的排程任務，並利用基於合法.NET函式庫的資訊竊取工具，將電子郵件轉換為本地檔案，再經由Dropbox進行外傳。專家建議，高價值目標應部署雲端存取安全代理（CASB）和資料外洩防護（DLP）解決方案，並積極利用端點偵測與回應（EDR）軟體警報，以預防類似的資料外洩。",
    tags: ["電子郵件間諜", "證券交易所", "資料外洩", "Windows工具", "CASB", "DLP", "EDR"],
    title_en: "Global Stock Exchange Subjected to Long-Term Email Surveillance: Hackers Exploit Native Windows Tools to Steal Executive Mailbox Data",
    summary_en: "Researchers have uncovered an email espionage campaign targeting the executives of an unnamed global stock exchange. Over a period of at least five months, hackers continuously monitored and stole the target's Microsoft Outlook mailbox content by cleverly exploiting legitimate native Windows tools. The stolen data includes contacts, calendar events, and specific commercial transaction details, which hold extremely high value for financial market intelligence. The attackers performed multi-stage penetration, first using lateral movement from a previously compromised device, and deploying two system-level implants on the host. Subsequently, they converted emails into local files using an information-stealing tool based on legitimate .NET libraries, and exfiltrated them via Dropbox, disguised as routine system health check scheduled tasks. Experts recommend that high-value targets deploy Cloud Access Security Broker (CASB) and Data Loss Prevention (DLP) solutions, and actively utilize Endpoint Detection and Response (EDR) software alerts to prevent similar data leaks.",
    tags_en: ["Email Espionage", "Stock Exchange", "Data Leakage", "Windows Tools", "CASB", "DLP", "EDR"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/global-stock-exchange-hit-monthslong-email-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260603-002",
    trackers: ["security"],
    category: "重大事件",
    title: "微軟揭露 Storm-2949 攻擊鏈：透過社交工程濫用 Azure RBAC 權限竊取雲端祕密",
    summary: "微軟揭露一宗代號 Storm-2949 的雲端身分入侵事件。攻擊者首先透過社交工程手法，假冒內部IT支援人員，接管目標使用者的 Microsoft Entra ID 帳號。他們濫用受害者原有的 Azure RBAC 權限，存取 Microsoft 365 應用程式、雲端檔案服務及 Azure 託管環境的資料。攻擊鏈的關鍵步驟包括：重設密碼、移除驗證方式，並將 Microsoft Authenticator 註冊到攻擊者裝置。在 Azure 環境中，攻擊者利用既有特權取得 Azure App Service 的發布憑證、操作 Azure Key Vault 讀取數十個祕密資料（如資料庫連線字串與身分憑證），並修改 Azure SQL 防火牆規則與 Azure Storage 網路設定，最終透過自製指令碼下載大量 Blob 資料。微軟建議組織應要求所有使用者啟用 MFA，特別對管理員和特權帳號採用抗釣魚 MFA，並啟用條件式存取，同時嚴格稽核 Azure RBAC 與 Key Vault 權限，並串聯身分、雲端與端點記錄以追蹤跨服務攻擊行為。",
    tags: ["Microsoft Entra ID", "Azure RBAC", "Azure Key Vault", "社交工程", "雲端安全", "Storm-2949", "MFA"],
    title_en: "Microsoft Uncovers Storm-2949 Attack Chain: Stealing Cloud Secrets by Abusing Azure RBAC Permissions via Social Engineering",
    summary_en: "Microsoft has disclosed a cloud identity breach incident codenamed Storm-2949. The attackers initially used social engineering techniques, impersonating internal IT support staff, to take over the target user's Microsoft Entra ID account. They then abused the victim's existing Azure RBAC permissions to access data within Microsoft 365 applications, cloud file services, and Azure hosted environments. Key steps in the attack chain included: resetting passwords, removing authentication methods, and registering Microsoft Authenticator to the attacker's device. Within the Azure environment, the attackers leveraged existing privileges to obtain deployment credentials for Azure App Service, operated on Azure Key Vault to read dozens of secrets (such as database connection strings and identity credentials), and modified Azure SQL firewall rules and Azure Storage network settings. Finally, they downloaded a large volume of Blob data using custom scripts. Microsoft recommends that organizations require all users to enable MFA, especially anti-phishing MFA for administrators and privileged accounts, and enable Conditional Access. Furthermore, organizations should strictly audit Azure RBAC and Key Vault permissions, and correlate identity, cloud, and endpoint logs to track cross-service attack behavior.",
    tags_en: ["Microsoft Entra ID", "Azure RBAC", "Azure Key Vault", "Social Engineering", "Cloud Security", "Storm-2949", "MFA"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176337", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-003",
    trackers: ["security"],
    category: "重大事件",
    title: "微軟揭露新勒索軟體 The Gentlemen：結合自我擴散與雙重勒索的 RaaS 威脅",
    summary: "微軟資安威脅情報團隊揭露了一款名為 The Gentlemen 的新興勒索軟體。該惡意軟體採用 Go 語言開發，並由代號 Storm-2697 的組織以勒索軟體即服務（RaaS）模式運作。它具備極高的感染能力，已在北美、南美、歐洲、非洲、亞洲等地的教育、交通、醫療保健及金融機構造成影響。The Gentlemen 的主要威脅點在於其雙重勒索策略，除了加密受害者資料外，還會竊取敏感資料並公開威脅。技術上，它能濫用 Windows 排程工作建立 SYSTEM 權限的持久化機制，並透過 WMI、PsExec 和 PowerShell 等多種遠端執行方式進行強大的橫向移動與自我散播。此外，它還會停用 Defender、刪除磁碟陰影、清除事件日誌等規避偵測機制，使事後分析極為困難。建議機構應強化網路監控、修補系統漏洞，並實施備份與安全教育，以應對此類高度自動化且具備持久化能力的勒索威脅。",
    tags: ["The Gentlemen", "勒索軟體", "RaaS", "微軟", "橫向移動", "雙重勒索"],
    title_en: "Microsoft Unveils New Ransomware, The Gentlemen: An RaaS Threat Combining Self-Propagation and Double Extortion",
    summary_en: "Microsoft's security threat intelligence team has revealed a new ransomware strain called The Gentlemen. Developed using the Go language, this malware operates under a Ransomware-as-a-Service (RaaS) model by an entity codenamed Storm-2697. It possesses extremely high infectivity and has impacted educational, transportation, healthcare, and financial institutions across North America, South America, Europe, Africa, and Asia. The primary threat of The Gentlemen lies in its double extortion strategy: in addition to encrypting victim data, it steals sensitive data and threatens to publish it. Technically, it abuses Windows Scheduled Tasks to establish persistence with SYSTEM privileges, and achieves powerful lateral movement and self-propagation through multiple remote execution methods, including WMI, PsExec, and PowerShell. Furthermore, it employs anti-detection mechanisms such as disabling Defender, deleting disk shadows, and clearing event logs, making post-incident analysis extremely difficult. Organizations are advised to strengthen network monitoring, patch system vulnerabilities, and implement backup and security education to counter such highly automated and persistent ransomware threats.",
    tags_en: ["The Gentlemen", "Ransomware", "RaaS", "Microsoft", "Lateral Movement", "Double Extortion"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176336", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-004",
    trackers: ["security"],
    category: "重大事件",
    title: "國際執法機構「KRATOS 2」行動：瓦解九個非法串流犯罪集團，大規模打擊盜版內容",
    summary: "歐洲和國際執法機構在為期七個月的「Operation KRATOS 2」行動中，成功瓦解了九個有組織犯罪集團，並逮捕了 29 名嫌疑人。此次行動由保加利亞協調，並獲得歐盟警察機構（Europol）等 13 個國家（包括美國、英國、法國等）的支援。調查人員透過與私營部門合作，鎖定了超過 18,000 個與非法服務相關的 IP 位址、4,370 個盜版網域，以及近 400,000 個 URL。總體而言，此次聯合行動導致超過 27,000 個非法串流 URL 被移除，這些內容涉及未經授權的體育、電影和電視內容。Europol 指出，這些犯罪集團會刻意將客戶網站與非法內容伺服器分開，以規避偵測。此外，執法部門也警告，使用這些非法服務不僅為犯罪集團帶來巨額收入，更會讓用戶面臨惡意軟體感染、間諜軟體和資料竊取的重大網路安全風險。",
    tags: ["Europol", "Operation KRATOS 2", "非法串流", "有組織犯罪", "盜版內容", "網路安全風險"],
    title_en: "International Law Enforcement Operation 'KRATOS 2' Dismantles Nine Illegal Streaming Crime Rings, Strikes Major Blow Against Pirated Content",
    summary_en: "In a seven-month 'Operation KRATOS 2,' European and international law enforcement agencies successfully dismantled nine organized crime groups and arrested 29 suspects. The operation was coordinated by Bulgaria and received support from 13 countries, including the United States, the United Kingdom, and France, among others, and Europol. Investigators, through cooperation with the private sector, identified over 18,000 IP addresses related to illegal services, 4,370 pirated domains, and nearly 400,000 URLs. Overall, the joint operation resulted in the removal of over 27,000 illegal streaming URLs, which contained unauthorized sports, film, and television content. Europol noted that these criminal groups deliberately separate client websites from illegal content servers to evade detection. Furthermore, law enforcement agencies warned that using these illegal services not only generates massive revenue for criminal groups but also exposes users to significant cybersecurity risks, including malware infection, spyware, and data theft.",
    tags_en: ["Europol", "Operation KRATOS 2", "Illegal Streaming", "Organized Crime", "Pirated Content", "Cybersecurity Risk"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/police-dismantles-9-crime-groups-in-illegal-streaming-crackdown", lang: "EN" }
    ]
  },
  {
    id: "20260603-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6321-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 針對 OpenSSH 服務發布了安全公告 DSA-6321-1，修補了一個潛在的認證繞過（Authentication Bypass）漏洞。此漏洞可能允許攻擊者在特定條件下，繞過正常的身份驗證機制，從而獲得未經授權的存取權限。受影響的產品為使用 OpenSSH 服務的 Debian 系統。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類認證繞過漏洞屬於高風險的遠端程式碼執行（RCE）或權限提升類問題。Debian 建議所有用戶立即更新 OpenSSH 相關套件，以修補此安全缺陷。用戶應透過標準的系統更新機制（如 `apt update` 後執行 `apt upgrade`）來確保系統達到最新的安全版本，以避免遭受未經授權的存取攻擊。",
    tags: ["Debian", "OpenSSH", "DSA-6321-1", "認證繞過", "Linux 核心元件", "安全更新"],
    title_en: "Debian Releases DSA-6321-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6321-1 for the OpenSSH service, patching a potential Authentication Bypass vulnerability. This vulnerability could potentially allow an attacker, under specific conditions, to bypass normal identity authentication mechanisms, thereby gaining unauthorized access. The affected product is Debian systems utilizing the OpenSSH service. Although the original text does not provide specific CVSS scores or impact scope, this type of authentication bypass vulnerability is classified as a high-risk Remote Code Execution (RCE) or privilege escalation issue. Debian advises all users to immediately update the OpenSSH related packages to patch this security flaw. Users should use standard system update mechanisms (such as running `apt upgrade` after `apt update`) to ensure the system reaches the latest secure version, thereby preventing unauthorized access attacks.",
    tags_en: ["Debian", "OpenSSH", "DSA-6321-1", "Authentication Bypass", "Linux Kernel Component", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00232.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-006",
    trackers: ["os"],
    category: "Linux",
    title: "AMD ROCm AI/ML 函式庫正式整合至 Ubuntu 26.04 LTS，簡化高性能運算部署",
    summary: "AMD 與 Canonical 合作，已將 ROCm AI/ML 和 HPC 函式庫整合至 Ubuntu 26.04 LTS 儲存庫。ROCm 是專為 AMD 硬體設計的軟體堆疊，用於加速 AI/ML 模型訓練和高階運算（HPC）。整合後，使用者可透過 `sudo apt install rocm` 輕鬆安裝完整函式庫，開發者則可使用 `sudo apt install rocm-dev` 獲取開發所需的函式庫與標頭檔。相較於過去需手動下載和編譯安裝腳本的繁瑣流程，現在系統更新（`sudo apt upgrade`）可自動管理 ROCm 的更新與安全修補。目前整合版本為 ROCm 7.1.0，雖然非最新上游版本，但為未來提供穩固基礎。未來將透過穩定發行更新（SRU）提供 ROCm 7.2.x 的原地升級，並持續評估支援 ROCm 8 的路徑，以確保系統的穩定性與相容性。",
    tags: ["AMD", "ROCm", "Ubuntu", "Ubuntu 26.04 LTS", "AI/ML", "HPC"],
    title_en: "AMD ROCm AI/ML Libraries Officially Integrated into Ubuntu 26.04 LTS, Simplifying High-Performance Computing Deployment",
    summary_en: "AMD and Canonical have integrated the ROCm AI/ML and HPC libraries into the Ubuntu 26.04 LTS repository. ROCm is a software stack designed for AMD hardware, used to accelerate AI/ML model training and High-Performance Computing (HPC). Following the integration, users can easily install the complete library using `sudo apt install rocm`, while developers can obtain the necessary development libraries and headers using `sudo apt install rocm-dev`. This streamlines the process compared to the previous cumbersome procedure of manually downloading and compiling installation scripts. Now, system updates (`sudo apt upgrade`) can automatically manage ROCm updates and security patches. The current integrated version is ROCm 7.1.0. Although this is not the latest upstream version, it provides a stable foundation for the future. Future updates will provide an in-place upgrade to ROCm 7.2.x via Stable Release Updates (SRU), and the path to supporting ROCm 8 will continue to be evaluated to ensure system stability and compatibility.",
    tags_en: ["AMD", "ROCm", "Ubuntu", "Ubuntu 26.04 LTS", "AI/ML", "HPC"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/amd-rocm-on-ubuntu", lang: "EN" }
    ]
  },
  {
    id: "20260603-007",
    trackers: ["security"],
    category: "法規與標準",
    title: "Gartner警告：網路保險費率雖降，但排除條款擴大，警惕社會工程與國家級攻擊風險",
    summary: "根據Gartner分析師Paul Furtado指出，當前網路保險市場雖然保費有所穩定甚至下降，但最大的風險在於「排除條款」（Exclusions）的持續擴大。這些排除條款可能讓企業在發生重大事件時措手不及。主要的風險點包括：員工行為失誤、使用過時軟體、未能維護安全控制，甚至涉及社會工程攻擊。例如，若員工因被社會工程欺騙而轉帳，即使未駭入系統，保險也可能不予理賠。此外，保單還可能排除國家級攻擊或大規模雲端服務中斷的損失。企業必須仔細審閱保單細節，並與保險公司進行「非常具體」的溝通，確認是否涵蓋國家級攻擊或特定事件。此外，保單的服務子限額（Sub-limits）和「尾部」（Tail）涵蓋的時效性也需要特別注意，以確保在更換保險供應商時不會產生空窗期。",
    tags: ["網路保險", "Gartner", "排除條款", "社會工程", "保單審核", "資安風險"],
    title_en: "Gartner Warns: Though Cyber Insurance Premiums Decline, Expanding Exclusions Pose Risks from Social Engineering and Nation-State Attacks",
    summary_en: "According to Gartner analyst Paul Furtado, while the current cyber insurance market has seen premiums stabilize or even decrease, the biggest risk lies in the continuous expansion of 'Exclusions.' These exclusions could leave companies unprepared in the event of a major incident. Key risk areas include: employee misconduct, use of outdated software, failure to maintain security controls, and even social engineering attacks. For instance, if an employee transfers funds due to social engineering deception, the insurance may deny coverage even if the system was not hacked. Furthermore, policies may exclude losses resulting from nation-state attacks or large-scale cloud service disruptions. Companies must carefully review policy details and engage in 'highly specific' communication with insurance providers to confirm coverage for nation-state attacks or specific events. Additionally, special attention must be paid to the sub-limits and the temporal coverage of the 'Tail' to ensure no coverage gaps occur when switching insurance providers.",
    tags_en: ["Cyber Insurance", "Gartner", "Exclusions", "Social Engineering", "Policy Review", "Cybersecurity Risk"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/cyber-insurance-rates-drop-exclusions-widen", lang: "EN" }
    ]
  },
  {
    id: "20260603-008",
    trackers: ["os", "security"],
    category: "法規與標準",
    title: "iThome 2026 CIO/CISO調查：企業IT預算成長趨緩，AI與雲端轉型成核心焦點",
    summary: "根據iThome發布的2026年CIO與CISO調查，臺灣大型企業的IT預算預計將比去年增加9%，平均每家編列約2.8億元，佔年營收約4%。然而，相較於前一年的高成長幅度，今年的預算加碼力道趨於謹慎，企業的投資重點正從單純的數位轉型，轉向能創造明確效益的AI轉型。在技術應用層面，AI原生架構的採用率顯著提升，RAG架構的採用率從去年的26%增加至35%，代理式AI的採用率也從17%暴增至32%。此外，企業公雲預算平均增加5%，其中SaaS訂閱費用成為主要支出。在資安領域，企業資安預算預計大增13%，金融業和醫療業的資安投資成長率尤其突出。調查也指出，企業面臨的資安挑戰主要集中在AI資安人才不足和資料治理難題，顯示出AI帶來的巨大潛力與相應的風險。",
    tags: ["iThome", "CIO", "CISO", "AI轉型", "公雲", "資安預算", "RAG架構", "零信任"],
    title_en: "iThome 2026 CIO/CISO Survey: Enterprise IT Budget Growth Slows, AI and Cloud Transformation Become Core Focus",
    summary_en: "According to the 2026 CIO and CISO Survey released by iThome, the IT budget for large enterprises in Taiwan is projected to increase by 9% compared to last year, averaging approximately NT$280 million per company, accounting for about 4% of annual revenue. However, compared to the high growth rate of the previous year, this year's budget increase is more cautious, with corporate investment focus shifting from simple digital transformation to AI transformation that can create clear benefits. At the technical application level, the adoption rate of AI-native architectures has significantly increased. The adoption rate of RAG architecture rose from 26% last year to 35%, and the adoption rate of agentic AI surged from 17% to 32%. Furthermore, enterprise public cloud budgets are expected to increase by an average of 5%, with SaaS subscription fees becoming the main expenditure. In the cybersecurity domain, enterprise cybersecurity budgets are projected to increase by 13%, with the financial and healthcare sectors showing particularly prominent growth in security investment. The survey also pointed out that the main cybersecurity challenges faced by enterprises are insufficient AI security talent and data governance difficulties, highlighting both the immense potential and corresponding risks brought by AI.",
    tags_en: ["iThome", "CIO", "CISO", "AI Transformation", "Public Cloud", "Cybersecurity Budget", "RAG Architecture", "Zero Trust"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/article/176335", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-009",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "ENISA發布NIS360報告：指出太空、鐵路等部門關鍵性提升，需加強資安防禦",
    summary: "歐盟網路安全局（ENISA）於5月28日發布NIS360報告，為歐盟NIS2指令下的高關鍵性部門建立年度評估架構。報告指出，雖然整體資安成熟度有所提升，但受地緣政治與數位化影響，太空、鐵路等關鍵部門的關鍵性（Criticality）顯著攀升，被列為重點關注區域。根據2026年評估，鐵路、飲用水及廢水處理等部門正式進入「風險區」，顯示其防護成熟度亟需提升。此外，太空部門因社會依賴度增加，首次被列入最高關鍵性群組，鐵路部門也因軍事物流地位提升，關鍵性同步攀升。這提醒各部門必須積極應對政策要求與網路威脅，強化資安防禦能力。",
    tags: ["ENISA", "NIS2", "NIS360", "歐盟", "關鍵基礎設施", "資安成熟度"],
    title_en: "ENISA Releases NIS360 Report: Highlights Increased Criticality in Sectors like Space and Rail, Requiring Enhanced Cyber Defense",
    summary_en: "The European Union Agency for Cybersecurity (ENISA) released the NIS360 report on May 28th, establishing an annual assessment framework for high-criticality sectors under the EU's NIS2 Directive. The report indicates that while overall cybersecurity maturity has improved, the criticality of key sectors, such as space and rail, has significantly climbed due to geopolitical and digitalization impacts, making them areas of focus. According to the 2026 assessment, sectors including rail, drinking water, and wastewater treatment have officially entered the 'Risk Zone,' demonstrating an urgent need for enhanced protective maturity. Furthermore, the space sector was listed for the first time in the highest criticality group due to increased societal reliance, and the criticality of the rail sector also climbed due to its enhanced role in military logistics. This serves as a reminder to all sectors to actively address policy requirements and cyber threats, thereby strengthening their cybersecurity defense capabilities.",
    tags_en: ["ENISA", "NIS2", "NIS360", "EU", "Critical Infrastructure", "Cybersecurity Maturity"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176316", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-010",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "ENISA 發布多項資安指引：涵蓋 CRA 報告、安全更新機制與 NIS2 評估",
    summary: "歐盟網路安全機構 ENISA 近期發布了多份重要的資安文件，旨在提升歐盟各領域的網路韌性。其中，ENISA 更新了關於《歐盟網路韌性法案》（CRA）單一報告平台的常見問題解答（FAQ），詳細說明了依據 CRA 第 14 條進行報告所需的資料欄位。此外，ENISA 也發布了第二份關於「安全更新機制」的技術諮詢文件，旨在指導中小製造商了解更新生命週期中的常見威脅，並實施實用控制措施以確保安全交付。另有文件針對《歐洲網路安全認證計畫》（EUCC）的共同標準（Common Criteria）草案進行公開審查。最後，ENISA 發布了第三版 NIS360 報告，持續評估《NIS2 指令》附件 I 所界定的所有高關鍵性產業的資安成熟度與重要性。",
    tags: ["ENISA", "CRA", "NIS2", "EUCC", "資安報告", "安全更新"],
    title_en: "ENISA Releases Multiple Cybersecurity Guidelines: Covering CRA Reporting, Secure Update Mechanisms, and NIS2 Assessment",
    summary_en: "The European Union Agency for Cybersecurity (ENISA) recently published several important cybersecurity documents aimed at enhancing the cyber resilience of various sectors across the EU. Among these, ENISA updated the Frequently Asked Questions (FAQ) for the Cybersecurity Resilience Act (CRA) single reporting platform, detailing the data fields required for reporting under Article 14 of the CRA. Furthermore, ENISA released a second technical advisory document on 'Secure Update Mechanisms,' designed to guide small and medium-sized manufacturers in understanding common threats throughout the update lifecycle and implementing practical controls to ensure secure delivery. Another document opened for public review concerns the Common Criteria draft for the European Cybersecurity Certification Plan (EUCC). Finally, ENISA published the third edition of the NIS360 report, continuously assessing the cybersecurity maturity and criticality of all high-criticality sectors defined in Annex I of the NIS2 Directive.",
    tags_en: ["ENISA", "CRA", "NIS2", "EUCC", "Cybersecurity Report", "Secure Update"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/policy/2026/06/03/updates-from-europe-single-reporting-platform-public-consultations-new-publications", lang: "EN" }
    ]
  },
  {
    id: "20260603-011",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國財政部宣布制裁伊朗最大加密貨幣交易所 Nobitex，指控其協助恐怖活動與規避制裁",
    summary: "美國財政部海外資產管制辦公室（OFAC）宣布對伊朗最大的加密貨幣交易所 Nobitex 實施制裁。制裁的指控指出，Nobitex 協助規避經濟制裁，並處理了與伊斯蘭革命衛隊（IRGC）相關的交易，包括用於恐怖活動的資金流動。美國當局發現，該平台處理的交易中包含與 IRGC 相關的勒索軟體攻擊者錢包。OFAC 還將 Nobitex 的高層主管和創辦人列入制裁名單，同時也制裁了 Wallex、Bitpin 和 Ramzinex 等其他三家伊朗交易所。從實務上講，這意味著任何屬於這些被指定實體和個人的資產，若處於美國管轄範圍內將被凍結，且美國公民被禁止與其進行任何業務往來。此舉不僅是法律制裁，也對國際市場造成壓力，促使盟國和外國公司避免與這些實體交易。",
    tags: ["OFAC", "Nobitex", "伊朗", "加密貨幣", "制裁", "IRGC"],
    title_en: "US Treasury Department Sanctions Iran's Largest Crypto Exchange, Nobitex, Accusing It of Aiding Terrorism and Circumventing Sanctions",
    summary_en: "The U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) announced sanctions against Nobitex, Iran's largest cryptocurrency exchange. The sanctions allege that Nobitex helped circumvent economic sanctions and processed transactions related to the Islamic Revolutionary Guard Corps (IRGC), including funds used for terrorist activities. U.S. authorities discovered that transactions processed by the platform included wallets associated with ransomware attackers linked to the IRGC. OFAC also placed Nobitex's senior executives and founders on the sanctions list, while also sanctioning three other Iranian exchanges: Wallex, Bitpin, and Ramzinex. Practically speaking, this means that any assets belonging to these designated entities and individuals, if located within U.S. jurisdiction, will be frozen, and U.S. citizens are prohibited from engaging in any business dealings with them. This action is not only a legal sanction but also puts pressure on the international market, prompting allied nations and foreign companies to avoid transacting with these entities.",
    tags_en: ["OFAC", "Nobitex", "Iran", "Cryptocurrency", "Sanctions", "IRGC"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/the-us-sanctions-nobitex-crypto-exchange-used-by-ransomware", lang: "EN" }
    ]
  },
  {
    id: "20260603-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露：透過惡意通知劫持 Gemini 語音助理，可遠端控制 Android 設備",
    summary: "安全研究人員 SafeBreach 的 Or Yair 發現了一種利用 Android 系統通知的漏洞，可劫持 Google Gemini 語音助理。該攻擊無需在手機上安裝惡意應用，僅需透過 WhatsApp、Slack 等任何能推送通知的應用程式，將惡意內容作為「有用上下文」輸入給 Gemini。攻擊者利用的攻擊面是 Gemini 的 Utilities 功能，該功能允許助理讀取和回覆通知。Yair 提出的繞過方法名為「Fake Context Alignment」，結合了「混淆」（使用受害者不熟悉的語言提問）和「靜音」（將惡意指令隱藏在可點擊但未朗讀的連結中），成功繞過了 Google 針對間接提示注入和延遲工具調用的最新防禦機制。成功利用後，攻擊者可讓 Gemini 偽造訊息、控制智慧家庭設備、強制開啟應用程式（如 Zoom）、甚至污染 Gemini 的帳戶級長期記憶，使其持續輸出惡意資訊。Google 已將此問題視為高優先級，並在 2025 年 11 月修補了內容分類器，修補是伺服器端的，用戶應在 Gemini 的「連接應用程式」設定中關閉通知讀取功能，或關閉 Google 應用程式的「通知讀取、回覆與控制」權限。",
    tags: ["Gemini", "Android", "通知劫持", "Prompt Injection", "SafeBreach", "Google"],
    title_en: "Research Reveals: Malicious Notifications Can Hijack Gemini Voice Assistant for Remote Android Device Control",
    summary_en: "Security researcher Or Yair of SafeBreach discovered a vulnerability that exploits the Android system notification mechanism to hijack the Google Gemini voice assistant. This attack does not require the installation of malicious applications on the phone; it only requires sending malicious content as 'useful context' via any application that can push notifications, such as WhatsApp or Slack. The attack surface utilized is Gemini's Utilities feature, which allows the assistant to read and respond to notifications. The bypass method proposed by Yair is called 'Fake Context Alignment,' which combines 'obfuscation' (asking questions in languages unfamiliar to the victim) and 'silencing' (hiding malicious instructions within clickable but unread links). This successfully bypassed Google's latest defenses against indirect prompt injection and delayed tool calling. After successful exploitation, the attacker can make Gemini generate fake messages, control smart home devices, force the opening of applications (such as Zoom), or even pollute Gemini's account-level long-term memory, causing it to continuously output malicious information. Google has treated this issue as high priority, patching the content classifier in November 2025. The patch is server-side, and users should disable the notification reading function in Gemini's 'Connected Apps' settings, or revoke the 'Notification Reading, Responding, and Controlling' permission for the Google application.",
    tags_en: ["Gemini", "Android", "Notification Hijacking", "Prompt Injection", "SafeBreach", "Google"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/whatsapp-slack-notifications-could.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露：駭客利用 Google DoubleClick 網域進行惡意郵件釣魚，傳遞 DesckVB RAT",
    summary: "資安研究人員發現一種新型的惡意郵件活動，利用 Google DoubleClick 網域作為初始跳板，以規避安全工具的偵測。攻擊流程始於收件人開啟附帶的 HTML 檔案，該檔案會觸發 Meta-refresh 瀏覽器重定向到 DoubleClick 的點擊追蹤 URL。接著，受害者會被導向一個自適應的惡意郵件頁面，該頁面能根據受害者郵件地址動態生成公司品牌和地點資訊，提高欺騙性。受害者點擊「下載 PDF」按鈕後，會下載一個 ZIP 壓縮檔，啟動感染鏈。感染鏈透過 JavaScript 載入器執行 PowerShell 腳本，最終獲取並執行一個 .NET 惡意程式 (RAT)。該 RAT 具備進程內注入（Process Hollowing）的能力，並透過原始 TCP Socket 與 C2 伺服器通訊，同時修補 AMSI 和 ETW 等 Windows 偵測機制，建立持久性，並具備資料竊取、執行指令等高階能力。為防禦，建議組織部署 DMARC、DKIM、SPF 記錄，並在郵件閘道層級實施附件和連結沙箱化。",
    tags: ["Google DoubleClick", "DesckVB RAT", "惡意郵件", "釣魚攻擊", "Process Hollowing", "RAT"],
    title_en: "Research Reveals: Hackers Use Google DoubleClick Domain for Malicious Email Phishing, Delivering DesckVB RAT",
    summary_en: "Cybersecurity researchers discovered a novel malicious email campaign that utilizes the Google DoubleClick domain as an initial jumpboard to evade security tool detection. The attack process begins when the recipient opens an attached HTML file, which triggers a Meta-refresh browser redirect to a DoubleClick click-tracking URL. Subsequently, the victim is redirected to an adaptive malicious email page that dynamically generates company brand and location information based on the victim's email address, increasing the deception level. After the victim clicks the \"Download PDF\" button, a ZIP archive is downloaded, initiating the infection chain. The infection chain executes a PowerShell script via a JavaScript loader, ultimately obtaining and executing a .NET malicious program (RAT). This RAT possesses Process Hollowing capability, communicates with the C2 server via raw TCP Socket, and simultaneously patches Windows detection mechanisms such as AMSI and ETW to establish persistence. It also features advanced capabilities such as data exfiltration and command execution. For defense, organizations are advised to deploy DMARC, DKIM, and SPF records, and implement attachment and link sandboxing at the email gateway layer.",
    tags_en: ["Google DoubleClick", "DesckVB RAT", "Malicious Email", "Phishing Attack", "Process Hollowing", "RAT"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/google-doubleclick-abused-in-new.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Microsoft 365 Android應用程式存在權限漏洞：第三方App可竊取用戶授權Token",
    summary: "多款Microsoft 365 Android應用程式（包括Word、PowerPoint、Excel、Copilot、Loop、OneNote）因開發模式旗標（Debug Mode）未關閉，導致帳號Token分享檢查失效。此漏洞（FlagLeft）允許同一裝置上的任何第三方應用程式，無需密碼或權限提示，直接竊取用戶的FOCI授權Token。攻擊者可利用這些Token，在未經授權的情況下讀取電子郵件、開啟檔案、瀏覽行事曆或發送訊息。Microsoft已修補此問題，並發布了四個CVE：CVE-2026-41100（Copilot，CVSS 4.4）、CVE-2026-41101（Word，CVSS 7.1）、CVE-2026-41102（PowerPoint，CVSS 7.1）和CVE-2026-42832（Excel，CVSS 7.7）。用戶應立即透過Google Play更新所有受影響的應用程式至最新版本，並建議資安團隊透過MDM強制更新，同時考慮撤銷現有的刷新Token，以確保帳號安全。",
    tags: ["Microsoft 365", "Android", "CVE-2026-41100", "CVE-2026-41101", "CVE-2026-42832", "Token竊取", "FOCI"],
    title_en: "Microsoft 365 Android Apps Contain Permission Vulnerability: Third-Party Apps Can Steal User Authorization Tokens",
    summary_en: "Multiple Microsoft 365 Android applications (including Word, PowerPoint, Excel, Copilot, Loop, and OneNote) contain a vulnerability due to the failure to disable the development mode flag (Debug Mode), which causes the account token sharing check to fail. This vulnerability (FlagLeft) allows any third-party application on the same device to directly steal the user's FOCI authorization token without requiring a password or permission prompt. Attackers can use these tokens to read emails, open files, browse calendars, or send messages without authorization. Microsoft has patched this issue and released four CVEs: CVE-2026-41100 (Copilot, CVSS 4.4), CVE-2026-41101 (Word, CVSS 7.1), CVE-2026-41102 (PowerPoint, CVSS 7.1), and CVE-2026-42832 (Excel, CVSS 7.7). Users should immediately update all affected applications via Google Play to the latest version, and security teams are advised to enforce updates via MDM, while also considering revoking existing refresh tokens to ensure account security.",
    tags_en: ["Microsoft 365", "Android", "CVE-2026-41100", "CVE-2026-41101", "CVE-2026-42832", "Token Theft", "FOCI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/microsoft-365-android-apps-let-any-app.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI工具揭露Redis 7.2.0的嚴重RCE漏洞：CVE-2026-23479，利用Use-After-Free攻擊",
    summary: "Redis 7.2.0版本中存在一個被追蹤為CVE-2026-23479的嚴重遠端程式碼執行（RCE）漏洞。此漏洞源於`unblockClientOnKey()`函數，屬於典型的使用後釋放（Use-After-Free, CWE-416）類型。攻擊鏈的建立需要三個階段：首先利用Lua腳本洩漏堆地址；接著透過操縱客戶端記憶體，讓Redis在釋放客戶端後，立即用偽造的客戶端結構覆蓋該記憶體；最後，利用Redis的記憶體計數機制，進行越界遞減，最終將函數指標重定向至系統命令執行，實現遠端代碼執行。由於Redis在雲端環境的部署廣泛，且許多實例預設未設定密碼，風險極高。修補建議是立即升級至已修補的小版本，例如7.2.14、7.4.9等，或至少將Redis服務置於公網之外，並嚴格限制存取控制列表（ACL），特別是限制單一角色同時擁有`CONFIG`、`@scripting`和`stream`等權限。",
    tags: ["Redis", "CVE-2026-23479", "RCE", "Use-After-Free", "雲端安全", "Lua腳本"],
    title_en: "AI Tool Reveals Critical RCE Vulnerability in Redis 7.2.0: CVE-2026-23479, Exploiting Use-After-Free",
    summary_en: "A critical Remote Code Execution (RCE) vulnerability, tracked as CVE-2026-23479, exists in Redis version 7.2.0. This vulnerability originates in the `unblockClientOnKey()` function and is a classic Use-After-Free (CWE-416) type. Establishing the attack chain requires three stages: first, exploiting a Lua script to leak the heap address; second, manipulating client memory to force Redis to immediately overwrite the memory after releasing the client with a forged client structure; and finally, utilizing Redis's memory counting mechanism to perform an out-of-bounds decrement, ultimately redirecting a function pointer to execute system commands, achieving remote code execution. Given the widespread deployment of Redis in cloud environments, and the fact that many instances are deployed without default passwords, the risk is extremely high. The recommended mitigation is to immediately upgrade to a patched minor version, such as 7.2.14 or 7.4.9, or at minimum, place the Redis service behind a private network and strictly limit the Access Control List (ACL), especially restricting single roles from simultaneously possessing `CONFIG`, `@scripting`, and `stream` permissions.",
    tags_en: ["Redis", "CVE-2026-23479", "RCE", "Use-After-Free", "Cloud Security", "Lua Script"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/autonomous-ai-tool-finds-2-year-old-rce.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "未修補的 Windows 搜尋 URI 處理器漏洞：可透過惡意連結竊取 NTLMv2 雜湊值",
    summary: "資安研究人員揭露一個未修補的 Windows 漏洞，可透過惡意連結誘騙使用者點擊，進而讓攻擊者竊取目標使用者的 NTLMv2 雜湊值。此漏洞與先前影響 Windows 截圖工具 (Snipping Tool) 的 CVE-2026-33829 類似，都是利用 URI 處理器接受未經充分驗證的參數。攻擊者可透過在網頁或電子郵件中嵌入特殊構造的連結，誘使電腦連接到攻擊者指定的 SMB 伺服器，從而觸發 NTLM 認證並洩露 NTLMv2 雜湊值。雖然此漏洞利用的機制與過去的 CVE-2023-35636 相似，但由於 Microsoft 在 2026 年 4 月之後拒絕修補此問題，用戶應採取預防措施。建議的修補措施包括：在不需要的主機上阻擋出站的 SMB 協定（TCP/445 和 TCP/139），強制執行 SMB 簽名，並在適當情況下停用 NTLM 認證。",
    tags: ["Windows", "NTLMv2", "URI 處理器", "SMB", "CVE-2026-33829", "雜湊值竊取"],
    title_en: "Unpatched Windows Search URI Processor Vulnerability: NTLMv2 Hashes Can Be Stolen via Malicious Link",
    summary_en: "Cybersecurity researchers have disclosed an unpatched Windows vulnerability that can be exploited by tricking users into clicking a malicious link, allowing attackers to steal the target user's NTLMv2 hashes. This vulnerability is similar to CVE-2026-33829, which previously affected the Windows Snipping Tool, as both exploit the URI processor accepting insufficiently validated parameters. Attackers can embed specially structured links in web pages or emails to force the computer to connect to an attacker-specified SMB server, thereby triggering NTLM authentication and leaking the NTLMv2 hashes. Although the exploitation mechanism is similar to the past CVE-2023-35636, users should take preventative measures because Microsoft has refused to patch this issue after April 2026. Recommended mitigation measures include: blocking outbound SMB protocols (TCP/445 and TCP/139) on unnecessary hosts, enforcing SMB signing, and disabling NTLM authentication where appropriate.",
    tags_en: ["Windows", "NTLMv2", "URI Processor", "SMB", "CVE-2026-33829", "Hash Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/unpatched-windows-search-uri.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新發現 HTTP/2 Bomb 漏洞：利用 HPACK 標頭壓縮機制造成多數主流網頁伺服器服務拒絕",
    summary: "資安研究人員發現了一個名為 HTTP/2 Bomb 的遠端服務拒絕（DoS）漏洞，影響範圍涵蓋 NGINX、Apache HTTPD、Microsoft IIS、Envoy 和 Cloudflare Pingora 等主流網頁伺服器。此漏洞利用了 HTTP/2 的 HPACK 標頭壓縮機制。攻擊原理是結合了壓縮炸彈（Compression Bomb）和 Slowloris 式的連接保持機制。攻擊者可以發送幾乎空的標頭，但透過讓伺服器為每個標頭條目進行大量的內部簿記（bookkeeping）分配，導致伺服器持續分配大量記憶體，且無法釋放。在假設的攻擊場景中，單一客戶端在數秒內即可使受影響伺服器無法存取，甚至可能在數十秒內耗盡數十 GB 的伺服器記憶體。修補建議：NGINX 建議升級至 1.29.8 以上版本，或禁用 HTTP/2；Apache HTTPD 建議升級至 mod_http2 v2.0.41，或將協議設定為 http/1.1；Microsoft IIS、Envoy 和 Cloudflare Pingora 目前尚未提供補丁。",
    tags: ["HTTP/2 Bomb", "HPACK", "DoS", "NGINX", "Apache HTTPD", "Envoy"],
    title_en: "New HTTP/2 Bomb Vulnerability Discovered: Exploiting HPACK Header Compression Mechanism Causes Denial of Service in Most Major Web Servers",
    summary_en: "Security researchers have discovered a Remote Denial of Service (DoS) vulnerability, dubbed HTTP/2 Bomb, affecting major web servers such as NGINX, Apache HTTPD, Microsoft IIS, Envoy, and Cloudflare Pingora. This vulnerability exploits the HPACK header compression mechanism of HTTP/2. The attack principle combines a Compression Bomb with a Slowloris-style connection maintenance mechanism. An attacker can send nearly empty headers, but by forcing the server to perform extensive internal bookkeeping for each header item, the server is continuously allocated large amounts of memory that cannot be released. In a hypothetical attack scenario, a single client can render an affected server inaccessible within seconds, or potentially exhaust tens of GB of server memory within tens of seconds. Mitigation recommendations: NGINX suggests upgrading to version 1.29.8 or later, or disabling HTTP/2; Apache HTTPD suggests upgrading to mod_http2 v2.0.41, or setting the protocol to http/1.1; Microsoft IIS, Envoy, and Cloudflare Pingora currently do not provide patches.",
    tags_en: ["HTTP/2 Bomb", "HPACK", "DoS", "NGINX", "Apache HTTPD", "Envoy"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/new-http2-bomb-vulnerability-allows.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Weedhack 惡意活動鎖定 Minecraft 玩家：透過 YouTube 進行釣魚，竊取帳密與遠端控制權",
    summary: "資安研究人員發現一場代號為 Weedhack 的惡意軟體服務（MaaS）活動，目標是 Minecraft 玩家。該活動自 2026 年 1 月開始，透過偽裝 Minecraft 客戶端和模組，利用 SEO 污染和 YouTube 影片引導流量至惡意網址。攻擊鏈從下載的惡意 JAR 檔案（如 DonutDupe.jar）開始，該檔案利用 EtherHiding 技術獲取 C2 伺服器網域。隨後，惡意軟體會聯絡 C2 伺服器，下載收集系統資訊、配置 Microsoft Defender 排除項，並建立持久性的後門。該工具提供免費和付費兩個層級，可竊取 Minecraft Session ID、瀏覽器密碼、加密貨幣錢包資料，甚至提供遠端存取、錄影和鍵盤記錄等功能。此外，文章也提及了 CountLoader 惡意載入器，它透過執行 EXE 檔案和 PowerShell 命令，部署了各種後門，包括用於劫持剪貼簿的加密貨幣挖礦程式。修補建議是提高警覺性，避免點擊來自可疑來源的 Minecraft 模組或下載 JAR 檔案。",
    tags: ["Weedhack", "Minecraft", "MaaS", "JAR 檔案", "YouTube 釣魚", "系統資訊竊取", "遠端存取"],
    title_en: "Weedhack Malicious Campaign Targets Minecraft Players: Phishing via YouTube to Steal Credentials and Remote Control",
    summary_en: "Cybersecurity researchers discovered a malicious-as-a-service (MaaS) campaign, codenamed Weedhack, targeting Minecraft players. The campaign began in January 2026, utilizing SEO pollution and YouTube videos to direct traffic to malicious websites by disguising themselves as Minecraft clients and mods. The attack chain starts with downloading a malicious JAR file (such as DonutDupe.jar), which uses EtherHiding technology to acquire the C2 server domain. Subsequently, the malware contacts the C2 server to download modules that collect system information, configure Microsoft Defender exclusions, and establish persistent backdoors. The tool offers both free and paid tiers, capable of stealing Minecraft Session IDs, browser passwords, and cryptocurrency wallet data, and even providing remote access, screen recording, and keylogging functionalities. Additionally, the article mentions the CountLoader malicious loader, which deploys various backdoors, including cryptocurrency mining programs designed to hijack the clipboard, by executing EXE files and PowerShell commands. The remediation advice is to increase vigilance and avoid clicking on Minecraft mods or downloading JAR files from suspicious sources.",
    tags_en: ["Weedhack", "Minecraft", "MaaS", "JAR file", "YouTube Phishing", "System Information Theft", "Remote Access"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/weedhack-attacks-minecraft-users.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 AI 自動化 EDR 規避測試：Sophos 揭露攻擊者建立複雜紅隊實驗室",
    summary: "Sophos X-Ops 分析師發布研究，揭露某未公開的威脅行為者利用人工智慧（AI）技術，建立高度自動化的紅隊實驗室，進行端點偵測與回應（EDR）規避測試。攻擊者使用 Python 腳本，部分為 AI 生成，並結合自動化 Active Directory (AD) 面板，系統性地對 Sophos、CrowdStrike 和 Windows Defender 等主流 EDR 產品進行迭代測試。該實驗室模擬了專業的紅隊流程，包括建構、測試、分析和精煉惡意程式。攻擊者甚至利用 LLM 工具（如 Cursor 和 Claude Opus）來開發惡意程式，並將其測試結果與 MITRE ATT&CK 框架進行對應。Sophos 指出，雖然攻擊技術高度複雜，但組織仍應透過實施縱深防禦（Defense-in-depth）來保護自身，關鍵措施包括及時修補、實施多因素驗證（MFA）、採用 Passkeys 等現代驗證機制，以及全面部署有效的 EDR 解決方案。",
    tags: ["Sophos", "EDR", "AI", "LLM", "紅隊", "攻擊鏈", "MITRE ATT&CK"],
    title_en: "Hackers Use AI Automation to Test EDR Evasion: Sophos Reveals Attackers Build Complex Red Team Labs",
    summary_en: "Sophos X-Ops analysts released research revealing that an undisclosed threat actor is utilizing Artificial Intelligence (AI) technology to build highly automated red team laboratories for testing Endpoint Detection and Response (EDR) evasion. The attackers use Python scripts, some of which are AI-generated, combined with automated Active Directory (AD) panels to systematically test major EDR products, including Sophos, CrowdStrike, and Windows Defender, through iterative testing. This lab simulates professional red team processes, including the construction, testing, analysis, and refinement of malicious code. The attackers even leverage LLM tools (such as Cursor and Claude Opus) to develop malicious code and map its testing results against the MITRE ATT&CK framework. Sophos points out that while the attack techniques are highly sophisticated, organizations must still protect themselves by implementing Defense-in-depth. Key measures include timely patching, implementing Multi-Factor Authentication (MFA), adopting modern authentication mechanisms like Passkeys, and comprehensively deploying effective EDR solutions.",
    tags_en: ["Sophos", "EDR", "AI", "LLM", "Red Team", "Attack Chain", "MITRE ATT&CK"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/endpoint-security/attackers-automate-edr-evasion-testing", lang: "EN" }
    ]
  },
  {
    id: "20260603-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國資安集團在拉丁美洲加劇活動：鎖定政府機構與能源產業情報",
    summary: "報告指出，以中國為背景的國家級資安威脅群組，正加劇對拉丁美洲和加勒比地區的網路攻擊，目標包括海事運輸、石油生產及其他地緣政治利益。這些攻擊主要針對該地區的政府機構，例如著名的 FamousSparrow 和 NegativeGlimmer 曾鎖定巴拿馬的政府部門。攻擊者通常不使用零日漏洞，而是利用常見的戰術，如針對身份驗證的弱點（例如抗釣魚 MFA 漏洞、條件存取繞過或後 MFA Token 竊取），以及邊緣設備和 API 介面的測試。此外，最常見的初始入侵方式是利用未修補的伺服器（如 SQL 或 Exchange 郵件伺服器），因此修補這些網路暴露的邊緣設備應是最高優先事項。專家建議，組織應在所有特權帳戶上實施抗釣魚 MFA，並將網路暴露的邊緣設備修補週期控制在 14 天內，特別是列入 CISA 已知漏洞清單的設備。",
    tags: ["中國資安集團", "拉丁美洲", "APT", "政府機構", "邊緣設備", "MFA", "地緣政治"],
    title_en: "Chinese Cyber Group Intensifies Activities in Latin America: Targeting Government Agencies and Energy Sector Intelligence",
    summary_en: "A report indicates that state-sponsored cyber threat groups originating from China are intensifying cyber attacks against Latin America and the Caribbean region. Targets include maritime transport, oil production, and other geopolitical interests. These attacks primarily target government agencies in the region, with groups such as FamousSparrow and NegativeGlimmer having previously targeted government departments in Panama. Attackers typically do not use zero-day vulnerabilities but instead exploit common tactics, such as weaknesses in identity authentication (e.g., anti-phishing MFA vulnerabilities, conditional access bypass, or post-MFA token theft), and testing edge devices and API interfaces. Furthermore, the most common initial point of entry is exploiting unpatched servers (such as SQL or Exchange mail servers); therefore, patching these network-exposed edge devices should be the highest priority. Experts recommend that organizations implement anti-phishing MFA on all privileged accounts and maintain a patching cycle for network-exposed edge devices of 14 days or less, especially for devices listed in the CISA Known Exploited Vulnerabilities catalog.",
    tags_en: ["Chinese Cyber Group", "Latin America", "APT", "Government Agency", "Edge Device", "MFA", "Geopolitics"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/nation-state-cyber-activity-latin-america", lang: "EN" }
    ]
  },
  {
    id: "20260603-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "開發失誤曝露多款微軟 365 Android App 帳號，遭惡意應用程式竊取授權憑證",
    summary: "研究人員 Enclave 發現多款微軟 365 Android 應用程式（包括 Word、Excel、PowerPoint、OneNote、Loop 和 Microsoft 365 Copilot）存在一個開發失誤。該失誤是因一個本應用於保護身份驗證的除錯設定（debug setting）在生產版本中被錯誤地啟用，導致應用程式無法確保只有受信任的微軟應用程式才能接收身份驗證憑證（authentication tokens）。由於漏洞存在於共享的微軟軟體開發套件（SDK）中，攻擊者只需透過任何能請求憑證的 Android 應用程式，就能繞過安全檢查，竊取用戶的 Microsoft 帳號憑證。這些被竊取的憑證是可重複使用且可長期刷新（FOCI tokens），極具風險。Microsoft 後續已發布更新修復此問題，並追蹤了多個 CVE 編號，包括 CVE-2026-41100、CVE-2026-41101、CVE-2026-41102 和 CVE-2026-42832。此事件強調了在互聯應用程式中，確保身份驗證憑證的安全至關重要，並呼籲採用零信任原則來持續驗證客戶端設備和應用程式的完整性。",
    tags: ["Microsoft 365", "Android", "身份驗證憑證", "SDK", "CVE", "零信任"],
    title_en: "Development Error Exposes Multiple Microsoft 365 Android App Accounts to Theft of Authorization Credentials by Malicious Applications",
    summary_en: "Researchers at Enclave discovered a development error in multiple Microsoft 365 Android applications (including Word, Excel, PowerPoint, OneNote, Loop, and Microsoft 365 Copilot). This error occurred because a debug setting, originally intended for protecting identity authentication, was incorrectly enabled in the production version. This flaw prevents the application from ensuring that only trusted Microsoft applications can receive authentication tokens. Since the vulnerability resides in a shared Microsoft Software Development Kit (SDK), attackers can bypass security checks and steal user Microsoft account credentials using any Android application capable of requesting credentials. These stolen credentials are reusable and can be long-term refreshed (FOCI tokens), posing significant risk. Microsoft subsequently released an update to fix the issue and tracked multiple CVE IDs, including CVE-2026-41100, CVE-2026-41101, CVE-2026-41102, and CVE-2026-42832. This incident underscores the critical importance of securing authentication credentials in interconnected applications and calls for the adoption of zero trust principles to continuously verify the integrity of client devices and applications.",
    tags_en: ["Microsoft 365", "Android", "Authentication Credentials", "SDK", "CVE", "Zero Trust"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/coding-gaffe-exposes-microsoft-365-accounts-takeover", lang: "EN" }
    ]
  },
  {
    id: "20260603-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "安全研究揭露：惡意通知可透過「假上下文對齊」欺騙 Google Gemini，執行未授權指令",
    summary: "安全公司 SafeBreach 發表研究，揭露了一種針對 Google Gemini 語音助理的提示注入（Prompt Injection）漏洞。攻擊者可利用 Gemini 總結訊息通知的能力，將惡意指令隱藏在外語文字或靜音超連結中，從而繞過 Google 原有的安全防護機制。攻擊者可透過此方法，讓助理在用戶不知情的情況下，執行控制智慧家庭設備、啟動未授權影片串流、進行社交工程攻擊，甚至污染大型語言模型（LLM）的長期記憶。研究指出，此漏洞的核心在於 Gemini 在處理訊息時，未能正確傳達訊息的來源上下文。攻擊者結合外語文字和超連結，可讓模型在用戶聽到正常提示的同時，靜默觸發惡意工具授權流程。雖然 Google 已透過內容分類器更新修復了此問題，但專家警告，上下文轉移（Context Shifting）是關鍵風險，建議所有 AI 應用程式應將所有外部輸入（如通知）預設視為不可信，並建立強化的安全控制與分類器。",
    tags: ["Google Gemini", "提示注入", "Prompt Injection", "LLM", "上下文轉移", "SafeBreach"],
    title_en: "Security Research Reveals: Malicious Notifications Can Deceive Google Gemini via 'False Context Alignment' to Execute Unauthorized Commands",
    summary_en: "Security firm SafeBreach published research revealing a Prompt Injection vulnerability targeting the Google Gemini voice assistant. Attackers can exploit Gemini's ability to summarize notifications by hiding malicious instructions within foreign language text or silent hyperlinks, thereby bypassing Google's existing security defenses. Using this method, attackers can trick the assistant into controlling smart home devices, initiating unauthorized video streams, performing social engineering attacks, or even polluting the LLM's long-term memory without the user's knowledge. The research points out that the core of this vulnerability lies in Gemini's failure to correctly transmit the source context of a message while processing it. By combining foreign language text and hyperlinks, attackers can silently trigger malicious tool authorization processes while the user hears a normal prompt. Although Google has updated its content classifiers to fix this issue, experts warn that Context Shifting remains a critical risk, advising that all AI applications should treat all external inputs (such as notifications) as untrusted by default, and establish robust security controls and classifiers.",
    tags_en: ["Google Gemini", "Prompt Injection", "Prompt Injection", "LLM", "Context Shifting", "SafeBreach"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/malicious-notifications-could-trick-google-gemini-users", lang: "EN" }
    ]
  },
  {
    id: "20260603-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-45247至已知漏洞目錄，警告網站快取器存在未經信任資料反序列化風險",
    summary: "美國網路安全局（CISA）宣布將一項新的漏洞，CVE-2026-45247，新增至其「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。此漏洞影響Mirasvit Full Page Cache Warmer，屬於未經信任資料的反序列化漏洞。CISA指出，此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業網路構成重大風險。根據《強制執行指令》（BOD 22-01），該目錄要求聯邦民事行政部門（FCEB）必須在指定期限內修復這些已知漏洞，以保護其網路免受活躍威脅。雖然該指令僅適用於FCEB，但CISA強烈敦促所有組織將修補KEV目錄中的漏洞，納入其漏洞管理優先順序，以降低整體網路暴露風險。",
    tags: ["CISA", "CVE-2026-45247", "KEV Catalog", "反序列化漏洞", "Mirasvit", "漏洞管理"],
    title_en: "CISA Adds CVE-2026-45247 to Known Vulnerabilities Catalog, Warning Website Caching Systems of Untrusted Data Deserialization Risk",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, CVE-2026-45247, to its Known Exploited Vulnerabilities (KEV) Catalog. This vulnerability affects Mirasvit Full Page Cache Warmer and is an untrusted data deserialization flaw. CISA points out that such vulnerabilities are commonly used attack vectors by malicious actors, posing a significant risk to federal enterprise networks. Under the 'Enforcement Directive' (BOD 22-01), this catalog mandates that Federal Civilian Executive Branch (FCEB) agencies must remediate these known vulnerabilities within a specified timeframe to protect their networks from active threats. Although the directive only applies to FCEB, CISA strongly urges all organizations to incorporate patching KEV catalog vulnerabilities into their vulnerability management priorities to reduce overall network exposure risk.",
    tags_en: ["CISA", "CVE-2026-45247", "KEV Catalog", "Deserialization Vulnerability", "Mirasvit", "Vulnerability Management"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/alerts/2026/06/03/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260603-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu修補 pip 函式庫：修復 urllib3 處理高壓縮資料時的 DoS 漏洞 (CVE-2025-66471)",
    summary: "本公告指出 Python 套件管理工具 pip 內建的 urllib3 函式庫存在一個處理高度壓縮資料流時的錯誤。此漏洞（CVE-2025-66471）允許遠端攻擊者利用此問題，導致 pip 消耗過多資源，進而造成服務拒絕（Denial of Service, DoS）的風險。此問題已在最新的系統更新中提供完整修復。使用者應透過執行標準的系統更新指令，將相關套件升級至修補後的版本，以降低安全風險。建議所有使用 pip 管理 Python 環境的系統，務必立即進行系統更新，確保使用修復後的函式庫版本。",
    tags: ["pip", "urllib3", "CVE-2025-66471", "Python", "DoS", "Ubuntu"],
    title_en: "Ubuntu patches pip library: Fixes DoS vulnerability in urllib3 when handling highly compressed data (CVE-2025-66471)",
    summary_en: "This announcement points out an error in the urllib3 library, which is built into the Python package manager pip. This vulnerability (CVE-2025-66471) allows a remote attacker to exploit this issue, causing pip to consume excessive resources and potentially leading to a Denial of Service (DoS) risk. This issue has been fully patched in the latest system update. Users should execute the standard system update command to upgrade the relevant packages to the patched version to mitigate security risks. All systems using pip to manage Python environments are advised to perform a system update immediately to ensure the use of the patched library version.",
    tags_en: ["pip", "urllib3", "CVE-2025-66471", "Python", "DoS", "Ubuntu"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8344-3", lang: "EN" }
    ]
  },
  {
    id: "20260603-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ubuntu發布安全更新：修補多個MySQL漏洞，包含CVE-2026-35240等",
    summary: "Ubuntu發布了USN-8363-2安全更新，修補了MySQL資料庫中的多個安全漏洞。本次更新涵蓋了多個版本，包括將MySQL更新至8.0.46（適用於Ubuntu 22.04 LTS和24.04 LTS）以及8.4.9（適用於Ubuntu 25.10和26.04 LTS）。原文列出了多達30個CVE編號，例如CVE-2026-35240、CVE-2026-35239等，這些漏洞的修補旨在提升MySQL的安全性。除了修補安全漏洞外，更新包也包含錯誤修復和新功能。使用者應透過標準的系統更新指令來應用這些修補，以降低系統的整體安全風險。建議所有使用MySQL的系統立即執行系統更新，確保使用最新的安全版本。",
    tags: ["MySQL", "Ubuntu", "USN-8363-2", "CVE", "資料庫", "安全更新"],
    title_en: "Ubuntu Releases Security Update: Patching Multiple MySQL Vulnerabilities, Including CVE-2026-35240",
    summary_en: "Ubuntu has released the USN-8363-2 security update, which patches multiple security vulnerabilities in the MySQL database. This update covers several versions, including updating MySQL to 8.0.46 (for Ubuntu 22.04 LTS and 24.04 LTS) and 8.4.9 (for Ubuntu 25.10 and 26.04 LTS). The original announcement lists up to 30 CVE IDs, such as CVE-2026-35240 and CVE-2026-35239, with these patches aimed at enhancing MySQL's security. In addition to fixing security vulnerabilities, the update package also includes bug fixes and new features. Users should apply these patches using standard system update commands to reduce overall system security risks. It is recommended that all systems using MySQL immediately perform a system update to ensure they are running the latest secure version.",
    tags_en: ["MySQL", "Ubuntu", "USN-8363-2", "CVE", "Database", "Security Update"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8363-2", lang: "EN" }
    ]
  },
  {
    id: "20260603-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Nginx 曝出多項嚴重漏洞：從資訊洩漏到任意程式碼執行，建議立即更新修補程式",
    summary: "本篇公告揭露了 Nginx 網頁伺服器包含多個模組的嚴重安全漏洞，涵蓋範圍廣泛，包括資訊洩漏、服務拒絕（DoS）以及執行任意程式碼的風險。受影響的漏洞包括：在 `ngx_mail_smtp_module` 中，可能導致敏感資訊洩漏給認證伺服器（CVE-2025-53859）；在 `ngx_http_mp4_module` 中，可能導致服務崩潰或執行任意程式碼（CVE-2026-27784, CVE-2026-32647）；此外，其他模組如 `ngx_http_rewrite_module`、`ngx_http_dav_module` 等也存在因處理特定輸入或指令錯誤而導致崩潰或執行任意程式碼的風險。攻擊者可利用這些漏洞進行資料竊取、服務中斷或遠端程式碼執行。建議所有使用 Nginx 的用戶應立即升級到最新的安全版本，並特別關注涉及郵件、MP4 處理和重寫指令的模組。",
    tags: ["Nginx", "CVE-2025-53859", "CVE-2026-1642", "CVE-2026-27784", "CVE-2026-42945", "資訊洩漏", "服務拒絕"],
    title_en: "Multiple Critical Vulnerabilities Discovered in Nginx: From Information Leakage to Arbitrary Code Execution, Immediate Patching Recommended",
    summary_en: "This announcement reveals multiple critical security vulnerabilities across various modules of the Nginx web server. The scope is wide, covering risks including information leakage, Denial of Service (DoS), and arbitrary code execution. Affected vulnerabilities include: in `ngx_mail_smtp_module`, sensitive information may leak to the authentication server (CVE-2025-53859); in `ngx_http_mp4_module`, service crashes or arbitrary code execution may occur (CVE-2026-27784, CVE-2026-32647); furthermore, other modules such as `ngx_http_rewrite_module` and `ngx_http_dav_module` also pose risks of crashing or executing arbitrary code due to improper handling of specific inputs or directives. Attackers can exploit these vulnerabilities to steal data, disrupt services, or achieve remote code execution. All users of Nginx are advised to immediately upgrade to the latest secure version, paying special attention to modules related to mail, MP4 processing, and rewrite directives.",
    tags_en: ["Nginx", "CVE-2025-53859", "CVE-2026-1642", "CVE-2026-27784", "CVE-2026-42945", "Information Leakage", "Denial of Service"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8375-1", lang: "EN" }
    ]
  },
  {
    id: "20260603-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GoBGP 處理惡意 BGP UPDATE 訊息漏洞曝光：多個 CVE 導致服務拒絕風險",
    summary: "本篇公告揭露了 GoBGP 軟體中多個處理惡意 BGP UPDATE 訊息的漏洞。這些漏洞主要由 GoBGP 對特定格式的 BGP 訊息（如包含 4-byte AS attributes、SRv6 L3 Service attributes、AIGP attributes 或 MRT 資訊/標頭）的錯誤處理所引起。攻擊者可利用這些漏洞，透過遠端發送惡意或格式錯誤的 BGP UPDATE 訊息，導致 GoBGP 服務崩潰，進而造成服務拒絕（Denial of Service, DoS）的影響。本次公告共揭露了 CVE-2026-37461、CVE-2026-41643、CVE-2026-7734、CVE-2026-7735、CVE-2026-7736 及 CVE-2026-7737 六個漏洞。建議使用 Ubuntu 提供的修補程式更新 GoBGP 相關組件，以修復這些潛在的 DoS 漏洞，確保 BGP 路由通訊的穩定性與安全性。",
    tags: ["GoBGP", "BGP", "CVE-2026-37461", "CVE-2026-41643", "DoS", "路由協議"],
    title_en: "GoBGP Vulnerability Exposed in Handling Malicious BGP UPDATE Messages: Multiple CVEs Lead to Denial of Service Risk",
    summary_en: "This announcement reveals multiple vulnerabilities in the GoBGP software related to the handling of malicious BGP UPDATE messages. These vulnerabilities are primarily caused by GoBGP's incorrect handling of specific formats of BGP messages (such as those containing 4-byte AS attributes, SRv6 L3 Service attributes, AIGP attributes, or MRT information/headers). Attackers can exploit these vulnerabilities by remotely sending malicious or malformed BGP UPDATE messages, causing the GoBGP service to crash and resulting in a Denial of Service (DoS) impact. This announcement discloses six CVEs: CVE-2026-37461, CVE-2026-41643, CVE-2026-7734, CVE-2026-7735, CVE-2026-7736, and CVE-2026-7737. It is recommended to update the GoBGP components using the patches provided by Ubuntu to fix these potential DoS vulnerabilities, ensuring the stability and security of BGP routing communication.",
    tags_en: ["GoBGP", "BGP", "CVE-2026-37461", "CVE-2026-41643", "DoS", "Routing Protocol"],
    sources: [
      { name: "Ubuntu Security Blog", url: "https://ubuntu.com/security/notices/USN-8348-1", lang: "EN" }
    ]
  },
  {
    id: "20260603-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Veeam發布13.0.2版：修復高可用性叢集OOM重置及跨平臺還原流程問題",
    summary: "備份與資料保護廠商Veeam近日發布了Veeam Backup & Replication 13.0.2版本更新。本次更新主要針對備份基礎設施的穩定性、跨平臺相容性及還原流程的可靠性進行了重大修正。在可用性方面，修復了先前版本在建立高可用性叢集架構（HA Cluster）時，備份伺服器節點PostgreSQL資料庫因記憶體不足（OOM）保護順序設定而被重置的問題。此外，13.0.2版也改善了跨平臺支援，解決了Hyper-V環境複本VM無法啟動，以及Linux代理程式無法安裝於RHEL 9.8、RHEL 10.2和Ubuntu 26.04 LTS等發行版的問題。另一個重要修正是在檔案層級還原（FLR）作業流程設定上，新版本改由固定的備份服務帳號決定環境設定，取代了先前依據發起還原作業使用者的權限，從而提升了還原作業的穩定性與可靠性。",
    tags: ["Veeam", "Veeam Backup & Replication", "13.0.2", "高可用性", "PostgreSQL", "備份系統", "跨平臺"],
    title_en: "Veeam Releases 13.0.2: Fixes High Availability Cluster OOM Reset and Cross-Platform Restore Process Issues",
    summary_en: "Backup and data protection vendor Veeam recently released the Veeam Backup & Replication 13.0.2 version update. This update includes major fixes aimed at improving the stability, cross-platform compatibility, and reliability of the backup infrastructure and restore processes. Regarding availability, it resolves an issue where previous versions would reset the PostgreSQL database on the backup server node due to Out-of-Memory (OOM) protection settings when establishing a High Availability Cluster (HA Cluster). Furthermore, version 13.0.2 improves cross-platform support by resolving issues where replicated VMs in Hyper-V environments failed to start, and where Linux agents could not be installed on distributions such as RHEL 9.8, RHEL 10.2, and Ubuntu 26.04 LTS. Another significant fix involves the File-Level Restore (FLR) workflow configuration. The new version now determines the environment settings using a fixed backup service account, replacing the previous method that relied on the permissions of the user initiating the restore operation, thereby enhancing the stability and reliability of the restore process.",
    tags_en: ["Veeam", "Veeam Backup & Replication", "13.0.2", "High Availability", "PostgreSQL", "Backup System", "Cross-Platform"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176339", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安公司揭露俄羅斯駭客團體 GreyVibe：利用 AI 與 LLM 進行多管道網路攻擊",
    summary: "資安公司 WithSecure 揭露俄羅斯駭客團體 GreyVibe，指出該團體利用 AI 與大型語言模型（LLM）等先進技術，針對烏克蘭進行網路攻擊。GreyVibe 至少透過三種主要管道散播惡意軟體。第一種是 PhantomMail 網釣活動，駭客透過包含指向雲端共用服務（如 Google Drive）的連結，引誘受害者下載惡意壓縮檔，內容包含惡意載入工具，啟動感染鏈 PhantomRelay。第二種是 PhantomClick 攻擊，利用偽造的 CAPTCHA 驗證網頁，要求使用者完成看似 Cloudflare 風格的驗證流程，實質是在背景啟動惡意程式。第三種是 PrincessClub 誘騙活動，駭客假冒女性透過 Telegram 等平台建立信任，引導軍人存取冒牌網站，散播 Android 或 Windows 惡意程式。這些活動顯示駭客已將 AI 技術融入攻擊流程，提高社會工程學的複雜性與成功率。",
    tags: ["GreyVibe", "WithSecure", "AI", "LLM", "網釣", "惡意軟體", "烏克蘭"],
    title_en: "Cybersecurity Firm Reveals Russian Threat Group GreyVibe: Utilizing AI and LLMs for Multi-Vector Network Attacks",
    summary_en: "Cybersecurity firm WithSecure has revealed the Russian threat group GreyVibe, noting that the group is utilizing advanced technologies such as AI and Large Language Models (LLMs) to conduct cyberattacks targeting Ukraine. GreyVibe spreads malware through at least three main vectors. The first is the PhantomMail phishing campaign, where hackers lure victims into downloading malicious compressed files via links pointing to cloud sharing services (such as Google Drive). These files contain malicious loaders that initiate the infection chain PhantomRelay. The second is the PhantomClick attack, which uses fake CAPTCHA verification pages. These pages require users to complete a seemingly Cloudflare-style verification process, which actually initiates malicious code in the background. The third is the PrincessClub deception campaign, where hackers impersonate women to build trust on platforms like Telegram, guiding military personnel to access fake websites and distributing Android or Windows malware. These activities demonstrate that hackers have integrated AI technology into their attack processes, increasing the complexity and success rate of social engineering.",
    tags_en: ["GreyVibe", "WithSecure", "AI", "LLM", "Phishing", "Malware", "Ukraine"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176330", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安公司揭露新興犯罪組織 DriveSurge：劫持網站發動 FakeUpdates 與 ClickFix 雙重誘餌攻擊",
    summary: "資安公司 Silent Push 近期揭露一個名為 DriveSurge 的新興網路犯罪組織。該組織劫持數千個合法網站，發動大規模的惡意軟體散播活動。DriveSurge 的特殊性在於，它能根據受害者的情境，靈活切換使用兩種誘餌攻擊手法：FakeUpdates 與 ClickFix。FakeUpdates 偽裝成主流瀏覽器（如 Chrome、Firefox、Edge）的更新提示頁面，誘騙受害者下載惡意程式。而 ClickFix 則透過偽造的錯誤訊息，以修復指令的名義，引誘受害者複製並執行惡意的 PowerShell 指令。DriveSurge 主要充當初始存取掮客（IAB），採用按安裝次數計費（PPI）模式，將獲取的存取權限出售給其他攻擊者。受害者在遭劫持網站的使用過程中，會被引導至流量分發系統（TDS）進行分析，再決定最佳的攻擊誘餌，使得攻擊的成功率和針對性極高。建議用戶提高警覺，不輕信網頁上的更新提示或錯誤訊息，並注意執行任何來源不明的指令。",
    tags: ["DriveSurge", "FakeUpdates", "ClickFix", "初始存取掮客", "惡意軟體散播", "Silent Push"],
    title_en: "Cybersecurity firm reveals emerging criminal group DriveSurge: Launching dual bait attacks with FakeUpdates and ClickFix by hijacking websites",
    summary_en: "Cybersecurity firm Silent Push recently revealed an emerging cybercrime organization named DriveSurge. This group hijacks thousands of legitimate websites to launch large-scale malware distribution campaigns. The unique characteristic of DriveSurge is its ability to flexibly switch between two bait attack methods based on the victim's context: FakeUpdates and ClickFix. FakeUpdates disguises itself as an update prompt page for mainstream browsers (such as Chrome, Firefox, and Edge), tricking victims into downloading malicious programs. Meanwhile, ClickFix uses fabricated error messages, luring victims to copy and execute malicious PowerShell commands under the guise of a repair instruction. DriveSurge primarily acts as an Initial Access Broker (IAB), operating on a Pay-Per-Install (PPI) model, selling acquired access privileges to other attackers. As victims browse the compromised websites, they are directed to a Traffic Distribution System (TDS) for analysis, which then determines the optimal attack bait, making the attack highly successful and targeted. Users are advised to raise their awareness, not to trust update prompts or error messages on webpages, and to be careful about executing any commands from unknown sources.",
    tags_en: ["DriveSurge", "FakeUpdates", "ClickFix", "Initial Access Broker", "Malware Distribution", "Silent Push"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176320", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WithSecure揭露俄羅斯駭客組織GreyVibe：利用生成式AI與LLM攻擊烏克蘭及政府機構",
    summary: "資安公司WithSecure揭露了俄羅斯駭客組織GreyVibe的攻擊活動。該組織的活動可追溯至2025年8月，目標涵蓋烏克蘭軍事機構、政府機關、企業及一般民眾。駭客主要透過釣魚郵件、假人機驗證網頁和成人網站等途徑，散播惡意程式。值得注意的是，GreyVibe系統性地運用生成式AI與大型語言模型（LLM）進行攻擊，並在惡意程式LegionRelay中展現出依賴LLM的設計缺陷。雖然攻擊目標與俄羅斯和烏克蘭的利益相符，但研究人員指出，該組織的活動指標更傾向於與廣泛的網路生態相關，而非單純由政府資助的國家級駭客。建議相關機構提高警覺，特別注意利用AI技術進行的網路釣魚和惡意軟體散播。",
    tags: ["GreyVibe", "WithSecure", "生成式AI", "LLM", "惡意軟體", "網路攻擊", "烏克蘭"],
    title_en: "WithSecure Uncovers Russian Hacker Group GreyVibe: Exploiting Generative AI and LLMs to Attack Ukraine and Government Institutions",
    summary_en: "Cybersecurity firm WithSecure has revealed the attack activities of the Russian hacker group GreyVibe. The group's activities can be traced back to August 2025, targeting military institutions, government agencies, corporations, and general citizens in Ukraine. The hackers primarily spread malicious code through phishing emails, fake credential verification websites, and adult websites. Notably, GreyVibe systematically utilizes Generative AI and Large Language Models (LLMs) in their attacks, and the malicious code LegionRelay exhibits design flaws dependent on LLMs. Although the attack targets align with the interests of Russia and Ukraine, researchers point out that the group's activity indicators lean more towards a broad cyber ecosystem rather than being solely from a state-sponsored national-level hacker group. Relevant organizations are advised to raise their awareness, paying special attention to phishing and malware distribution utilizing AI technology.",
    tags_en: ["GreyVibe", "WithSecure", "Generative AI", "LLM", "Malware", "Cyberattack", "Ukraine"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176318", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Android 6月例行更新修補重大漏洞：CVE-2025-48595 權限提升漏洞影響 Android 14/15/16",
    summary: "Google 發布 Android 6 月例行安全公告，共修補了 124 個資安漏洞，其中包含 19 個重大等級和多個高風險漏洞。特別值得關注的是，公告指出其中一個漏洞已被鎖定目標的局部活動利用。該漏洞編號為 CVE-2025-48595，屬於 Android 系統框架元件中的高風險權限提升漏洞。此弱點影響 Android 14、15 及 16，以及 16 QPR2 版本。雖然 Google 提及該漏洞已被利用，但文章並未提供攻擊者具體利用方式的細節。用戶應留意 Google 發布的系統更新，確保設備能及時修補此類系統級的權限提升漏洞，以防範潛在的惡意利用。",
    tags: ["Google", "Android", "CVE-2025-48595", "權限提升", "資安漏洞", "系統更新"],
    title_en: "Google Android June Routine Update Patches Critical Vulnerability: CVE-2025-48595 Privilege Escalation Affects Android 14/15/16",
    summary_en: "Google released its Android June security announcement, patching a total of 124 security vulnerabilities, including 19 critical and multiple high-risk flaws. Of particular concern, the announcement noted that one vulnerability has been subject to localized active exploitation. This vulnerability, identified as CVE-2025-48595, is a high-risk privilege escalation flaw within the Android system framework component. This weakness affects Android 14, 15, and 16, as well as the 16 QPR2 version. Although Google mentioned that the vulnerability has been exploited, the article did not provide details on the specific exploitation methods used by attackers. Users should pay attention to Google's system updates to ensure their devices are promptly patched against such system-level privilege escalation flaws, preventing potential malicious exploitation.",
    tags_en: ["Google", "Android", "CVE-2025-48595", "Privilege Escalation", "Security Vulnerability", "System Update"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176314", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Oracle宣布每月發布CSPU，修補77個漏洞，包含CVSS滿分10分的CVE-2026-46840",
    summary: "為應對AI改變的漏洞識別與修復流程，Oracle宣布除了每季的Critical Patch Update（CPU）外，將增設每月發布Critical Security Patch Update（CSPU）。首個每月更新已於5月發布，共修補了77個漏洞。其中，最值得關注的是修補了CVSS風險評分滿分10分的CVE-2026-46840。此漏洞存在於Oracle REST Data Services的24.2.0至26.1.0版本，影響後端即服務元件。攻擊者無需身分驗證，僅透過HTTPS存取系統，就有可能完全控制該系統。此外，Oracle Communications Unified Assurance修補了最多46個漏洞，其次為Oracle E-Business Suite和Oracle REST Data Services。建議用戶應及時更新至最新版本，以修補這些高風險的漏洞。",
    tags: ["Oracle", "CSPU", "CVE-2026-46840", "Oracle REST Data Services", "漏洞修補", "後端即服務"],
    title_en: "Oracle announces monthly CSPU release, patching 77 vulnerabilities including CVSS 10.0 CVE-2026-46840",
    summary_en: "To address the evolving vulnerability identification and remediation process driven by AI, Oracle announced that in addition to the quarterly Critical Patch Update (CPU), it will now issue a monthly Critical Security Patch Update (CSPU). The first monthly update was released in May, patching a total of 77 vulnerabilities. Of particular concern is the patch for CVE-2026-46840, which has a CVSS risk score of 10.0. This vulnerability exists in Oracle REST Data Services versions 24.2.0 through 26.1.0, affecting the backend service component. Attackers can potentially achieve full control of the system merely by accessing it via HTTPS without authentication. Furthermore, Oracle Communications Unified Assurance patched up to 46 vulnerabilities, followed by Oracle E-Business Suite and Oracle REST Data Services. Users are advised to update to the latest versions promptly to patch these high-risk vulnerabilities.",
    tags_en: ["Oracle", "CSPU", "CVE-2026-46840", "Oracle REST Data Services", "Vulnerability Patching", "Backend Service"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176313", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Oracle WebLogic Server的CVE-2024-21182已遭積極利用，要求聯邦機構緊急修補",
    summary: "美國網路安全暨基礎設施安全局（CISA）發布公告，警告CVE-2024-21182已遭到積極利用，並將其列入已遭利用的漏洞名單（KEV）。此漏洞存在於Oracle WebLogic Server的核心元件。攻擊者無需身分驗證，僅需透過T3或IIOP協定進行網路存取，即可利用此漏洞入侵WebLogic Server。成功利用後，攻擊者可未經授權存取伺服器上的重要資料，甚至完整存取所有可接觸資料。Oracle評估此漏洞的CVSS風險評分為7.5分，屬於高風險等級。CISA已要求聯邦機構必須在指定期限前完成修補。建議相關機構應立即修補WebLogic Server，並密切關注供應商的修補更新。",
    tags: ["CISA", "CVE-2024-21182", "Oracle WebLogic Server", "KEV", "高風險漏洞", "聯邦機構"],
    title_en: "CISA Warns: CVE-2024-21182 in Oracle WebLogic Server is Actively Exploited, Mandating Emergency Patching for Federal Agencies",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has issued an advisory warning that CVE-2024-21182 is being actively exploited and has been listed on the Known Exploited Vulnerabilities (KEV) catalog. This vulnerability resides in a core component of Oracle WebLogic Server. Attackers can exploit this vulnerability and compromise WebLogic Server merely by network access via the T3 or IIOP protocols, without requiring authentication. Successful exploitation allows attackers to access sensitive data on the server without authorization, potentially gaining full access to all reachable data. Oracle assessed the CVSS risk score for this vulnerability at 7.5, classifying it as high risk. CISA has mandated that federal agencies must complete patching within a specified timeframe. It is recommended that relevant organizations immediately patch WebLogic Server and closely monitor vendor patch updates.",
    tags_en: ["CISA", "CVE-2024-21182", "Oracle WebLogic Server", "KEV", "High Risk Vulnerability", "Federal Agencies"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176310", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟譴責研究員揭露零時差漏洞引發爭議：漏洞通報制度與法律行動界線模糊",
    summary: "微軟資安回應中心（MSRC）曾公開譴責研究人員Chaotic Eclipse，因未經協調即公布BlueHammer、RedSun、UnDefend等一系列零時差漏洞。此事件引發資安界對漏洞通報制度的討論。微軟最初暗示可能對該研究員採取法律行動，引起高度關注。隨後，微軟透過社群媒體澄清，其無意對純粹的資安研究人員採取法律行動，並承認在處理漏洞通報的互動上未能達到標準。然而，資安專家指出，微軟在採取封鎖帳號等行動後，使得研究人員透過正規管道揭露漏洞變得極為困難。此外，專家也質疑微軟的說法，指出該公司過去曾有聘請直接公開零時差漏洞的研究人員前例，凸顯了產業在漏洞協調揭露與研究人員權益之間的複雜張力。",
    tags: ["微軟", "MSRC", "零時差漏洞", "漏洞通報", "Chaotic Eclipse", "CVE-2026-33825"],
    title_en: "Microsoft Condemns Researcher for Revealing Zero-Day Vulnerabilities, Highlighting Blurry Lines Between Disclosure Programs and Legal Action",
    summary_en: "Microsoft Security Response Center (MSRC) publicly condemned researcher Chaotic Eclipse for disclosing a series of zero-day vulnerabilities, including BlueHammer, RedSun, and UnDefend, without coordination. This incident sparked industry discussion regarding vulnerability disclosure programs. Microsoft initially hinted at potential legal action against the researcher, drawing significant attention. Subsequently, Microsoft clarified via social media that it did not intend to take legal action against pure security researchers, and admitted that it had failed to meet standards in its interaction with vulnerability disclosures. However, security experts pointed out that Microsoft's actions, such as account blocking, made it extremely difficult for researchers to disclose vulnerabilities through proper channels. Furthermore, experts questioned Microsoft's statements, noting the company's history of employing researchers who publicly disclosed zero-day vulnerabilities, highlighting the complex tension within the industry between coordinated disclosure and researcher rights.",
    tags_en: ["Microsoft", "MSRC", "Zero-Day Vulnerabilities", "Vulnerability Disclosure", "Chaotic Eclipse", "CVE-2026-33825"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176295", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Palo Alto Networks警告：開源工具ROADtools遭駭客濫用，用於雲端竊取與操控Microsoft Entra ID權杖",
    summary: "資安廠商Palo Alto Networks旗下Unit 42指出，原本用於紅隊演練的開源工具組ROADtools，已被攻擊者整合至實際雲端攻擊行動。該工具組以Python撰寫，主要鎖定Azure身分識別與驗證層，能透過微軟合法API與Microsoft Entra ID互動，用於列舉租戶環境的帳號、應用程式，並取得、交換與操控Entra ID權杖。由於其行為可調整User-Agent字串，使流量接近正常操作，傳統偵測機制難以發現。攻擊者已利用此工具進行雲端環境探索與權杖操作，行為模式與APT29等組織的入侵手法相似。Unit 42建議，防禦重點應放在身分識別控管，企業應啟用Microsoft Entra ID權杖保護、透過條件式存取限制裝置代碼流程，並定期稽核OAuth應用程式權限。此外，應整合Azure稽核日誌、Microsoft Graph API活動日誌、登入紀錄與Office 365活動，以偵測異常API使用與可疑權杖行為。",
    tags: ["Palo Alto Networks", "ROADtools", "Microsoft Entra ID", "Azure", "權杖竊取", "身分識別控管"],
    title_en: "Palo Alto Networks Warns: Open-Source Tool ROADtools Abused by Hackers for Cloud Theft and Manipulation of Microsoft Entra ID Tokens",
    summary_en: "Cybersecurity vendor Palo Alto Networks' Unit 42 pointed out that the open-source tool suite ROADtools, originally designed for red team exercises, has been integrated by attackers into actual cloud attack operations. Written in Python, the tool suite primarily targets the Azure identity and authentication layer. It can interact with Microsoft Entra ID using legitimate Microsoft APIs to enumerate accounts and applications within a tenant environment, and to acquire, exchange, and manipulate Entra ID tokens. Because its behavior can adjust the User-Agent string, making the traffic appear close to normal operations, traditional detection mechanisms find it difficult to detect. Attackers have utilized this tool for cloud environment exploration and token manipulation, with behavior patterns similar to the intrusion methods of groups like APT29. Unit 42 recommends that defensive focus should be placed on identity governance. Enterprises should enable Microsoft Entra ID token protection, restrict device code flows through conditional access, and regularly audit OAuth application permissions. Furthermore, they should integrate Azure audit logs, Microsoft Graph API activity logs, sign-in records, and Office 365 activity to detect abnormal API usage and suspicious token behavior.",
    tags_en: ["Palo Alto Networks", "ROADtools", "Microsoft Entra ID", "Azure", "Token Theft", "Identity Governance"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176305", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gitea 釋出 1.26.2 修補 CVE-2026-27771：未登入者可存取私有容器映像檔",
    summary: "開源程式碼託管平臺 Gitea 釋出 1.26.2 版本，修補一項與套件登錄庫權限相關的漏洞，編號為 CVE-2026-27771。資安業者 NoScope 指出，此漏洞可能導致自行架設 Gitea 的組織，在未要求使用者登入的情況下，讓外部人員存取原本應屬私有的容器映像檔。由於容器映像檔可能包含敏感的憑證或內部設定，若被外部取得，將大幅增加系統被入侵或橫向探索的風險。研究人員估算，公開可從網際網路找到的受影響站點可能超過 3 萬個。Gitea 官方已提供修補版本，建議使用者立即升級。若無法立即更新，管理者可暫時啟用「所有內容都必須登入後才能查看」的設定，但需評估此措施對既有服務的影響。",
    tags: ["Gitea", "CVE-2026-27771", "容器映像檔", "開源專案", "程式碼託管"],
    title_en: "Gitea Releases 1.26.2 Patching CVE-2026-27771: Unauthenticated Access to Private Container Images",
    summary_en: "The open-source code hosting platform Gitea has released version 1.26.2 to patch a vulnerability related to package registry permissions, identified as CVE-2026-27771. Security firm NoScope pointed out that this vulnerability could allow external individuals to access private container images belonging to organizations running self-hosted Gitea, without requiring user login. Since container images may contain sensitive credentials or internal configurations, external acquisition significantly increases the risk of system compromise or lateral movement. Researchers estimate that over 30,000 affected sites could be publicly found on the internet. Gitea official has provided a patched version and advises users to upgrade immediately. If immediate updating is not possible, administrators can temporarily enable the 'All content must be logged in to view' setting, but they must assess the impact of this measure on existing services.",
    tags_en: ["Gitea", "CVE-2026-27771", "Container Images", "Open Source", "Code Hosting"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176304", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新式 HTTP/2 Bomb 攻擊：單機可耗盡網頁伺服器記憶體，影響 NGINX、Apache 等主流服務",
    summary: "研究人員發佈了一種名為 HTTP/2 Bomb 的新型阻斷服務（DoS）攻擊，該攻擊能利用 HTTP/2 協定的預設配置，在數秒內耗盡網頁伺服器的記憶體資源。此攻擊結合了 HPACK 壓縮放大機制和 Slowloris 式的流量控制資源保留。攻擊者透過在 HPACK 動態表中插入標頭，並利用其索引引用，使得單個位元組的傳輸能導致伺服器分配數千位元組的記憶體，造成極大的放大效應。接著，攻擊者再透過宣告零位元組的流量控制視窗（flow-control window），阻止伺服器釋放已分配的記憶體。測試結果顯示，Envoy 1.37.2 在約 10 秒內耗盡 32 GB RAM，Apache httpd 2.4.67 在約 18 秒內耗盡 32 GB RAM。修補建議包括升級至 NGINX 1.29.8（新增 `max_headers` 指令）和 Apache httpd mod_http2 2.0.41（已分配 CVE-2026-49975）。對於 IIS、Envoy 和 Pingora，建議在可行情況下停用 HTTP/2，並在前端部署代理或防火牆以強制執行嚴格的標頭計數限制。",
    tags: ["HTTP/2 Bomb", "DoS 攻擊", "HPACK", "Envoy", "Apache httpd", "CVE-2026-49975"],
    title_en: "New HTTP/2 Bomb Attack: Single Machine Can Exhaust Web Server Memory, Affecting NGINX, Apache, and Other Major Services",
    summary_en: "Researchers have released a novel Denial-of-Service (DoS) attack called HTTP/2 Bomb. This attack exploits the default configurations of the HTTP/2 protocol to exhaust a web server's memory resources within seconds. The attack combines the HPACK compression amplification mechanism with Slowloris-style flow control resource retention. Attackers insert headers into the HPACK dynamic table and utilize its index references, causing the transmission of a single byte to force the server to allocate thousands of bytes of memory, resulting in massive amplification. Subsequently, the attacker uses a declared zero-byte flow-control window to prevent the server from releasing the allocated memory. Testing results showed that Envoy 1.37.2 exhausted 32 GB of RAM in approximately 10 seconds, and Apache httpd 2.4.67 exhausted 32 GB of RAM in approximately 18 seconds. Recommended mitigations include upgrading to NGINX 1.29.8 (which adds the `max_headers` directive) and Apache httpd mod_http2 2.0.41 (which addresses CVE-2026-49975). For IIS, Envoy, and Pingora, it is recommended to disable HTTP/2 where feasible and deploy a proxy or firewall at the frontend to enforce strict header count limits.",
    tags_en: ["HTTP/2 Bomb", "DoS attack", "HPACK", "Envoy", "Apache httpd", "CVE-2026-49975"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-http-2-bomb-dos-attack-crashes-web-servers-in-under-a-minute", lang: "EN" }
    ]
  },
  {
    id: "20260603-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：駭客正利用Android和Linux核心漏洞，要求機構修補兩大高風險漏洞",
    summary: "美國網路安全基礎設施安全局（CISA）警告，駭客正在積極利用Linux核心和Android作業系統的漏洞。CISA將兩個漏洞納入其已知被利用漏洞（KEV）目錄。第一個是CVE-2025-48595，一個高嚴重度的Android Framework整數溢位漏洞，可提升權限，且無需用戶互動。第二個是CVE-2022-0492，一個影響多個Linux核心分支的高嚴重權限提升漏洞。該漏洞存在於cgroups v1子系統的`cgroup_release_agent_write()`函數，由於身份驗證檢查不足，本地攻擊者可濫用它來繞過命名空間隔離，提升權限，並可能從容器逃逸至主機系統，獲取root權限。這類問題尤其危害使用cgroups v1的容器化環境。受影響的Linux核心版本範圍廣泛，包括2.6至5.17等。所有受BOD 22-01指令約束的聯邦機構必須在指定期限內修補或停止使用受影響軟體。CISA提醒所有關鍵基礎設施和大型組織應高度重視修補。",
    tags: ["CISA", "KEV", "CVE-2025-48595", "CVE-2022-0492", "Linux kernel", "Android", "容器逃逸"],
    title_en: "CISA Warns: Hackers Exploiting Android and Linux Kernel Vulnerabilities, Urging Organizations to Patch Two High-Risk Flaws",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) warns that hackers are actively exploiting vulnerabilities in the Linux kernel and Android operating system. CISA has added both vulnerabilities to its Known Exploited Vulnerabilities (KEV) catalog. The first is CVE-2025-48595, a high-severity Android Framework integer overflow vulnerability that allows for privilege escalation without user interaction. The second is CVE-2022-0492, a high-severity privilege escalation vulnerability affecting multiple Linux kernel branches. This flaw exists in the `cgroup_release_agent_write()` function within the cgroups v1 subsystem. Due to insufficient authentication checks, a local attacker can exploit it to bypass namespace isolation, escalate privileges, and potentially escape from a container to the host system, thereby gaining root privileges. Such issues are particularly dangerous in containerized environments that use cgroups v1. The affected Linux kernel versions are widely ranged, including versions from 2.6 up to 5.17. All federal agencies constrained by the BOD 22-01 directive must patch or cease using the affected software within a specified timeframe. CISA urges all critical infrastructure and large organizations to pay close attention to patching.",
    tags_en: ["CISA", "KEV", "CVE-2025-48595", "CVE-2022-0492", "Linux kernel", "Android", "Container Escape"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisa-warns-of-active-attacks-exploiting-android-linux-bugs", lang: "EN" }
    ]
  },
  {
    id: "20260603-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究員揭露 VS Code 零日漏洞：可透過惡意擴充套件竊取 GitHub OAuth Token",
    summary: "一名資安研究員釋出針對 Visual Studio Code (VS Code) 的零日漏洞 PoC，允許攻擊者透過誘騙使用者點擊惡意連結，竊取其 GitHub 授權（OAuth）Token。此漏洞利用了 VS Code 沙盒化的 Webview 訊息傳遞系統。攻擊者可植入惡意擴充套件，當使用者在 `github.dev` 進行操作時，惡意程式碼會模擬鍵盤輸入，提取傳遞給 `github.dev` 的 GitHub OAuth Token，並透過 GitHub API 列舉受害者可存取的全部私有儲存庫。研究員指出，由於該 Token 未限定於特定儲存庫，因此擁有完整的存取權限。目前此漏洞尚未修補且未分配 CVE ID。為保護自身，使用者應清除瀏覽器中 `github.dev` 的 Cookie 和本地站點資料，以觸發警告機制。",
    tags: ["VS Code", "GitHub", "OAuth Token", "零日漏洞", "Webview", "資安研究"],
    title_en: "Researcher Discloses VS Code Zero-Day Vulnerability: Malicious Extension Can Steal GitHub OAuth Token",
    summary_en: "A cybersecurity researcher released a Proof-of-Concept (PoC) for a zero-day vulnerability in Visual Studio Code (VS Code), which allows attackers to steal a user's GitHub OAuth Token by tricking them into clicking a malicious link. This vulnerability exploits the Webview message passing system within VS Code's sandbox. An attacker can implant a malicious extension that, when the user interacts with `github.dev`, simulates keyboard input to extract the GitHub OAuth Token being passed to `github.dev`, and then uses the GitHub API to list all private repositories accessible to the victim. The researcher pointed out that because the Token is not limited to a specific repository, it possesses full access rights. Currently, this vulnerability is unpatched and has not been assigned a CVE ID. To protect themselves, users should clear the Cookie and local site data for `github.dev` in their browser to trigger a warning mechanism.",
    tags_en: ["VS Code", "GitHub", "OAuth Token", "Zero-Day Vulnerability", "Webview", "Cybersecurity Research"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/vs-code-zero-day-lets-hackers-steal-github-tokens-in-one-click", lang: "EN" }
    ]
  },
  {
    id: "20260603-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國駭客群 TA4922 擴大攻擊範圍，在歐洲部署 Atlas RAT 等多種惡意程式",
    summary: "資安公司 Proofpoint 報告指出，一個被追蹤為 TA4922 的中國語系網路犯罪集團，已將攻擊目標擴展至歐洲地區，並部署了包括 Atlas RAT、RomulusLoader 和 SilentRunLoader 在內的多種惡意程式。該集團主要動機為財務犯罪，目標包括竊取資料、進行詐騙或出售網路存取權限。TA4922 的攻擊活動呈現高運作節奏和多樣性，已在德國、義大利、英國等歐洲國家進行攻擊。攻擊手法包括使用偽造的薪資通知、稅務稽核或政府合規通知等釣魚誘餌，並透過 WhatsApp、LINE 等通訊軟體聯繫受害者。其中，Atlas RAT 是一款遠端存取木馬，具備系統偵察、資料竊取、密錄、錄音等功能；RomulusLoader 則利用進程空心化等技術執行惡意負載；SilentRunLoader 則專門竊取 Google Chrome 的憑證和瀏覽資料。研究人員推測，該駭客群可能利用大型語言模型（LLMs）加速惡意程式的開發，其能力範圍甚至可能被用於間諜活動。Proofpoint 已發布相關的入侵指標和 C2 基礎設施資訊。",
    tags: ["TA4922", "Atlas RAT", "Proofpoint", "網路犯罪", "歐洲攻擊", "惡意程式"],
    title_en: "Chinese Hacker Group TA4922 Expands Attack Scope in Europe, Deploying Multiple Malwares Including Atlas RAT",
    summary_en: "According to a report from cybersecurity firm Proofpoint, a Chinese-speaking cybercrime group tracked as TA4922 has expanded its attack targets to Europe, deploying various malwares including Atlas RAT, RomulusLoader, and SilentRunLoader. The group's primary motive is financial crime, with goals including data theft, fraud, or selling network access credentials. TA4922's attack activities show high operational tempo and diversity, having targeted European countries such as Germany, Italy, and the UK. Attack methods include using phishing lures such as fake payroll notifications, tax audits, or government compliance notices, and contacting victims via communication apps like WhatsApp and LINE. Among these, Atlas RAT is a Remote Access Trojan (RAT) that possesses system reconnaissance, data theft, camera, and microphone recording capabilities; RomulusLoader utilizes techniques like process hollowing to execute malicious payloads; and SilentRunLoader specializes in stealing Google Chrome credentials and browsing data. Researchers speculate that the hacker group may be utilizing Large Language Models (LLMs) to accelerate malware development, and its capabilities could even be used for espionage. Proofpoint has published related Indicators of Compromise (IoCs) and C2 infrastructure information.",
    tags_en: ["TA4922", "Atlas RAT", "Proofpoint", "Cybercrime", "Europe Attack", "Malware"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/chinese-hackers-use-new-atlas-rat-malware-in-european-cyberattacks", lang: "EN" }
    ]
  },
  {
    id: "20260603-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：駭客正鎖定工業控制的燃料監測系統，建議立即隔離與強化防護",
    summary: "美國網路安全局（CISA）等政府機構警告，駭客正針對用於監測燃料和液體儲存槽的自動油箱計量（ATG）系統發動攻擊。這些系統廣泛應用於能源、化學、食品農業和交通運輸等關鍵基礎設施領域，用於遠端監控儲存槽的液位、溫度和洩漏風險。攻擊者透過利用認證繞過、硬編碼憑證、作業系統命令執行缺陷、SQL注入和權限提升等漏洞，取得系統存取權。一旦系統被攻陷，攻擊者可修改網路設定、產品識別碼、儲槽容量和泵控制，甚至關閉警報，使營運人員無法正確監測液位，從而增加洩漏或設備故障的風險。政府機構建議，組織應立即將ATG系統從網際網路隔離，透過防火牆或VPN限制遠端存取，更換預設密碼，並實施多因素驗證和安全更新。雖然文章未明確歸屬攻擊來源，但指出過去曾有與伊朗駭客相關的攻擊案例，強調即使未造成實體損害，也可能干擾洩漏偵測等安全功能。",
    tags: ["CISA", "ATG系統", "工業控制系統", "關鍵基礎設施", "網路安全", "漏洞"],
    title_en: "CISA Warns: Hackers Targeting Industrial Control Fuel Monitoring Systems, Recommends Immediate Isolation and Enhanced Protection",
    summary_en: "Government agencies, including the U.S. Cybersecurity and Infrastructure Security Agency (CISA), warn that hackers are targeting Automatic Tank Gauging (ATG) systems used for monitoring fuel and liquid storage tanks. These systems are widely deployed across critical infrastructure sectors such as energy, chemical, food agriculture, and transportation, used for remote monitoring of tank levels, temperatures, and leak risks. Attackers gain system access by exploiting vulnerabilities such as credential bypass, hardcoded credentials, operating system command execution flaws, SQL injection, and privilege escalation. Once compromised, attackers can modify network settings, product identifiers, tank capacities, and pump controls, or even disable alarms, preventing operational personnel from accurately monitoring liquid levels and thereby increasing the risk of leaks or equipment failure. Government agencies recommend that organizations immediately isolate ATG systems from the internet, restrict remote access via firewalls or VPNs, change default passwords, and implement multi-factor authentication and security updates. Although the article does not explicitly attribute the attack source, it points out past cases linked to Iranian hackers, emphasizing that even without causing physical damage, the attacks can disrupt safety functions like leak detection.",
    tags_en: ["CISA", "ATG System", "Industrial Control System", "Critical Infrastructure", "Cybersecurity", "Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisa-warns-of-cyberattacks-targeting-fuel-tank-monitoring-systems", lang: "EN" }
    ]
  },
  {
    id: "20260603-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將Magento外掛漏洞列入KEV：Mirasvit Cache Warmer存在可遠端執行程式碼的PHP反序列化缺陷",
    summary: "美國網路安全基礎設施安全局（CISA）已將影響Mirasvit Cache Warmer的關鍵漏洞CVE-2026-45247，列入其已知已利用漏洞（KEV）目錄，因發現有積極的野外利用活動。此漏洞屬於未經信任資料的反序列化缺陷，CVSS評分為9.8，可允許未經身份驗證的攻擊者，透過提供惡意序列化的PHP物件，在受影響伺服器上達成遠端程式碼執行（RCE）。該缺陷影響所有版本早於1.11.12的擴充套件。安全公司Sansec指出，攻擊者可透過任何帶有惡意CacheWarmer cookie的店面請求觸發，利用PHP的unserialize()功能，無需任何身份驗證或管理員權限。Imperva觀察到攻擊者已使用Base64編碼的序列化PHP物件，嘗試執行如system()等任意指令。為應對此風險，CISA已要求聯邦民用行政部門（FCEB）機構在2026年6月6日前修補。網站擁有者應檢查帶有特定格式（如CacheWarmer:後接Base64編碼字串）的Cookie，以偵測潛在的攻擊嘗試。",
    tags: ["CISA", "CVE-2026-45247", "Magento", "Mirasvit Cache Warmer", "PHP", "反序列化"],
    title_en: "CISA Lists Magento Plugin Vulnerability in KEV: Mirasvit Cache Warmer Has PHP Deserialization Flaw Allowing Remote Code Execution",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has added a critical vulnerability affecting Mirasvit Cache Warmer, CVE-2026-45247, to its Known Exploited Vulnerabilities (KEV) catalog due to active exploitation in the wild. This vulnerability is an insecure deserialization flaw involving untrusted data, with a CVSS score of 9.8. It allows unauthenticated attackers to achieve Remote Code Execution (RCE) on affected servers by providing malicious serialized PHP objects. The flaw impacts all versions prior to 1.11.12. Security firm Sansec noted that attackers can trigger the vulnerability via any store request containing a malicious CacheWarmer cookie, utilizing PHP's unserialize() function without requiring any authentication or administrator privileges. Imperva observed attackers attempting to execute arbitrary commands, such as system(), using Base64-encoded serialized PHP objects. To mitigate this risk, CISA has mandated that Federal Civilian Executive Branch (FCEB) agencies patch the vulnerability by June 6, 2026. Website owners should check for cookies with a specific format (e.g., CacheWarmer: followed by a Base64-encoded string) to detect potential attack attempts.",
    tags_en: ["CISA", "CVE-2026-45247", "Magento", "Mirasvit Cache Warmer", "PHP", "Deserialization"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cisa-adds-exploited-magento-rce-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Dragos分析：2026年第一季工業控制系統面臨持續性勒索軟體威脅",
    summary: "Dragos分析報告指出，勒索軟體對工業組織的威脅在2026年第一季持續高位，已進入持續性狀態。全球共觀察到1,020起勒索軟體事件，製造業仍是受影響最深的領域，佔比最高。攻擊者持續鎖定製造業、運輸物流、以及工業控制系統（ICS）周邊的供應鏈環節。報告強調，即使攻擊者未專門設計操縱工業控制協定，僅透過入侵企業IT系統（如ERP平台和虛擬化基礎設施），便能造成OT層面的嚴重中斷和安全風險。攻擊者持續利用憑證竊取、遠端存取服務漏洞，以及雙重勒索（數據竊取後加密）等成熟戰術。主要的勒索軟體群組包括Qilin、Akira、The Gentleman和LockBit5.0等。這顯示工業供應鏈的IT/OT融合，使得企業IT的任何漏洞都可能迅速擴散至關鍵的OT營運系統，造成實質的營運癱瘓。建議組織應強化IT與OT邊界的安全控制，並提高對供應鏈風險的警覺性。",
    tags: ["Dragos", "勒索軟體", "ICS", "OT", "供應鏈安全", "Qilin", "工業控制系統"],
    title_en: "Dragos Analysis: Industrial Control Systems Face Persistent Ransomware Threats in Q1 2026",
    summary_en: "A Dragos analysis report indicates that the threat of ransomware against industrial organizations remained persistently high in Q1 2026, entering a sustained state. A global total of 1,020 ransomware incidents were observed, with the manufacturing sector remaining the most affected area, accounting for the highest proportion. Attackers continue to target the supply chain segments surrounding manufacturing, transportation/logistics, and Industrial Control Systems (ICS). The report emphasizes that even if attackers have not specifically designed exploits to manipulate industrial control protocols, simply by infiltrating corporate IT systems (such as ERP platforms and virtualization infrastructure), severe disruption and security risks can be caused at the OT layer. Attackers continue to utilize mature tactics such as credential theft, remote access service vulnerabilities, and double extortion (encrypting data after exfiltration). Major ransomware groups include Qilin, Akira, The Gentleman, and LockBit5.0. This demonstrates that the convergence of IT/OT in the industrial supply chain means that any vulnerability in corporate IT can rapidly spread to critical OT operational systems, causing actual operational paralysis. Organizations are advised to strengthen security controls at the IT/OT boundary and raise awareness of supply chain risks.",
    tags_en: ["Dragos", "Ransomware", "ICS", "OT", "Supply Chain Security", "Qilin", "Industrial Control Systems"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/dragos-industrial-ransomware-analysis-q1-2026", lang: "EN" }
    ]
  },
  {
    id: "20260603-045",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "研究揭露 VS Code 透過 GitHub.dev 建立的單點擊攻擊，可竊取用戶 GitHub OAuth Token",
    summary: "資安研究人員揭露了一種透過 Microsoft Visual Studio Code (VS Code) 的單點擊攻擊，可竊取用戶的 GitHub OAuth Token。攻擊利用了 GitHub.dev 功能，該功能在瀏覽器沙箱中運行 VS Code 環境，允許用戶進行 Pull Request 和提交。攻擊的技術細節是利用惡意 VS Code 擴充功能，透過在不受信任的 Webview 中執行惡意 JavaScript，模擬鍵盤輸入事件，並觸發「Ctrl+Shift+P」開啟指令面板。這使得攻擊者能夠安裝一個控制的擴充功能，該擴充功能能提取傳遞給 GitHub.dev 的 OAuth Token，並透過 GitHub API 枚舉受害者可存取的私有儲存庫。此外，攻擊還利用了 VS Code 允許在本地工作區安裝擴充功能，繞過了發布者信任檢查。研究人員指出，此漏洞的影響範圍不限於單一儲存庫，而是具有完整的存取權限。微軟已確認此漏洞，並表示已修復，目前客戶無需採取額外行動。",
    tags: ["VS Code", "GitHub", "OAuth Token", "Webview", "擴充功能", "單點擊攻擊"],
    title_en: "Research Reveals Single-Click Attack via VS Code and GitHub.dev Can Steal User GitHub OAuth Token",
    summary_en: "Cybersecurity researchers have disclosed a single-click attack using Microsoft Visual Studio Code (VS Code) that can steal a user's GitHub OAuth Token. The attack exploits the GitHub.dev feature, which runs a VS Code environment within a browser sandbox, allowing users to create Pull Requests and submit code. The technical details involve using a malicious VS Code extension that executes malicious JavaScript within an untrusted Webview. This script simulates keyboard input events and triggers the 'Ctrl+Shift+P' command palette. This allows the attacker to install a controlled extension that can extract the OAuth Token passed to GitHub.dev and subsequently enumerate private repositories accessible to the victim via the GitHub API. Furthermore, the attack leverages VS Code's ability to install extensions in a local workspace, bypassing publisher trust checks. The researchers point out that the impact of this vulnerability is not limited to a single repository but grants full access. Microsoft has confirmed the vulnerability and stated that it has been patched, and customers currently require no further action.",
    tags_en: ["VS Code", "GitHub", "OAuth Token", "Webview", "Extension", "Single-Click Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/one-click-github-dev-attack-lets.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-046",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟揭露 Red Hat npm 供應鏈攻擊：惡意套件利用 preinstall Hook 竊取多雲端與開發者憑證",
    summary: "微軟威脅情報部門發現一場大規模的 npm 供應鏈攻擊，影響了 @redhat-cloud-services 範圍內超過 32 個惡意修改的套件，涵蓋多個版本。攻擊源頭是 RedHatInsights/javascript-clients 的 CI/CD 管線，攻擊者透過合法的 GitHub Actions OIDC 流程發布了帶有真實來源證明（provenance）的惡意套件。一旦安裝，這些套件會觸發 npm 的 preinstall hook，執行一個高度混淆的 4.29 MB 下載器。該下載器會下載 Bun JavaScript runtime，並啟動第二級惡意載荷。該載荷能夠竊取來自 GitHub、npm、AWS、Azure、GCP、HashiCorp Vault、Kubernetes 等多個雲端和開發者系統的憑證和金鑰。攻擊鏈包含多個階段，包括利用多層混淆（如 ROT-XX、AES-128-GCM），在 CI/CD 環境中爬取 Actions 記憶體中的秘密，並透過安裝無密碼 sudo 規則來提升權限。此外，惡意程式還會偽造 SLSA 來源證明，並嘗試將攻擊擴散到其他維護者套件，形成蠕蟲式傳播。微軟已將調查結果分享給 npm 團隊，導致受影響的儲存庫被移除，並對該命名空間實施了額外的保護措施。",
    tags: ["npm", "Red Hat", "供應鏈攻擊", "preinstall hook", "CI/CD", "憑證竊取", "Bun runtime"],
    title_en: "Microsoft Uncovers Red Hat npm Supply Chain Attack: Malicious Packages Exploit preinstall Hook to Steal Multi-Cloud and Developer Credentials",
    summary_en: "Microsoft's Threat Intelligence team discovered a large-scale npm supply chain attack affecting over 32 maliciously modified packages within the @redhat-cloud-services scope, spanning multiple versions. The attack originated from the RedHatInsights/javascript-clients CI/CD pipeline. Attackers published malicious packages with verifiable provenance via a legitimate GitHub Actions OIDC workflow. Once installed, these packages trigger the npm preinstall hook, executing a highly obfuscated 4.29 MB downloader. This downloader fetches the Bun JavaScript runtime and initiates a second-stage malicious payload. This payload is capable of stealing credentials and keys from multiple cloud and developer systems, including GitHub, npm, AWS, Azure, GCP, HashiCorp Vault, and Kubernetes. The attack chain involves multiple stages, including leveraging multi-layered obfuscation (such as ROT-XX and AES-128-GCM) to scrape secrets from Actions memory within the CI/CD environment, and escalating privileges by installing passwordless sudo rules. Furthermore, the malicious code attempts to forge SLSA provenance and spread the attack to other maintainer packages, forming a worm-like propagation. Microsoft has shared its findings with the npm team, resulting in the removal of the affected repository and the implementation of additional protective measures for the namespace.",
    tags_en: ["npm", "Red Hat", "Supply Chain Attack", "preinstall hook", "CI/CD", "Credential Theft", "Bun runtime"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/02/preinstall-persistence-inside-red-hat-npm-miasma-credential-stealing-campaign", lang: "EN" }
    ]
  },
  {
    id: "20260603-047",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "紅帽雲端套件遭Miasma變種惡意程式入侵，恐外洩GitHub與雲端憑證",
    summary: "資安公司OX Security與Aikido揭露，紅帽（Red Hat）NPM套件庫的雲端服務相關套件遭到植入惡意程式Miasma。此惡意程式為Shai-Hulud變種，一旦開發者安裝受污染的套件，電腦或開發環境中的登入權杖、雲端服務憑證及其他敏感資料都可能被惡意程式讀取並外傳。該事件影響@redhat-cloud-services至少31個套件，GitHub上也已發現超過210個含有遭竊憑證的儲存庫。實務上，開發者應提高警覺，並考慮實施更嚴格的套件來源驗證機制，以防範供應鏈層面的憑證竊取風險。",
    tags: ["Red Hat", "NPM", "Miasma", "供應鏈攻擊", "雲端憑證", "開源安全"],
    title_en: "Red Hat Cloud Packages Infected by Miasma Variant Malware, Potentially Leaking GitHub and Cloud Credentials",
    summary_en: "Security firms OX Security and Aikido revealed that cloud service packages in the Red Hat NPM repository were infected with malware named Miasma. This malware is a variant of Shai-Hulud. If a developer installs a contaminated package, the malware could read and exfiltrate login tokens, cloud service credentials, and other sensitive data from the computer or development environment. The incident affected at least 31 packages related to @redhat-cloud-services, and over 210 repositories containing stolen credentials have also been found on GitHub. Practically, developers should raise their awareness and consider implementing stricter package source verification mechanisms to prevent supply chain credential theft risks.",
    tags_en: ["Red Hat", "NPM", "Miasma", "Supply Chain Attack", "Cloud Credentials", "Open Source Security"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176332", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-048",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安研究揭露：Anthropic Claude Code GitHub Actions權限繞過風險，警惕AI代理資料外洩",
    summary: "資安研究人員指出，Anthropic提供的Claude Code GitHub Actions工具存在權限控制不嚴格的風險。攻擊者可利用此漏洞，透過自行建立的GitHub App，在公開儲存庫建立議題或拉取請求，誘導Claude Code在自動化開發流程中處理惡意內容。由於過去的檢查機制對GitHub App觸發者不夠嚴格，攻擊者可透過提示注入，讓AI代理讀取GitHub Actions執行環境中的敏感資料，並利用允許的GitHub操作工具將這些資訊寫回攻擊者可讀取的位置。若環境變數包含可要求OpenID Connect（OIDC）權杖的資訊，進一步可能導致攻擊者換取具有儲存庫權限的GitHub App安裝權杖。Anthropic已在Claude Code GitHub Actions v1.0.94版本進行修補，修補內容包括預設不允許GitHub App觸發工作流程、停用預設工作流程摘要輸出，並調整了可取得的環境變數。開發團隊應檢查工作流程，確保權限僅限於實際所需，並避免讓AI代理接觸不必要的機密資料。",
    tags: ["Anthropic", "Claude Code", "GitHub Actions", "權限繞過", "GitHub App", "提示注入", "CI/CD"],
    title_en: "Cybersecurity Research Reveals: Anthropic Claude Code GitHub Actions Privilege Bypass Risk; Beware of AI Agent Data Leakage",
    summary_en: "Cybersecurity researchers point out that the Anthropic Claude Code GitHub Actions tool has risks associated with insufficient permission control. Attackers can exploit this vulnerability by creating their own GitHub App and opening issues or pull requests in public repositories, thereby tricking Claude Code into processing malicious content during the automated development process. Because previous inspection mechanisms were not strict enough regarding GitHub App triggers, attackers can use prompt injection to make the AI agent read sensitive data from the GitHub Actions execution environment, and then use the allowed GitHub operation tools to write this information to a location readable by the attacker. If the environment variables contain information required to request an OpenID Connect (OIDC) token, this could further allow the attacker to obtain a GitHub App installation token with repository permissions. Anthropic has patched this in Claude Code GitHub Actions v1.0.94, which includes default restrictions preventing GitHub Apps from triggering workflows, disabling default workflow summary output, and adjusting accessible environment variables. Development teams should review their workflows to ensure that permissions are limited only to what is strictly necessary, and avoid allowing the AI agent access to unnecessary confidential data.",
    tags_en: ["Anthropic", "Claude Code", "GitHub Actions", "Privilege Bypass", "GitHub App", "Prompt Injection", "CI/CD"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176319", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-049",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "MITRE 將開源自動化模擬工具 Caldera 捐贈 Apache 軟體基金會，加速全球資安社群標準化發展",
    summary: "MITRE 宣布將其開發近十年的開源自動化模擬工具 Caldera 捐贈給 Apache 軟體基金會（ASF），使其進入孵化器階段。Caldera 的核心價值在於模擬真實世界的網路攻擊行為，協助企業進行紅隊（Red Teaming）和紫隊（Purple Teaming）演練，以測試和強化防禦體系。此次轉移旨在將 Caldera 從 MITRE 主導的專案，轉型為由全球開源社群共同維護的國際標準工具。MITRE 透過捐贈給 ASF，目標是擴大全球資安與開源社群的協作，提升平臺普及率，並確保其「廠商中立」的發展模式。雖然專案已移交至 Apache Caldera 專案頁面，但 MITRE 表示仍將持續參與開發與方向指引，確保其作為符合 MITRE ATT&CK 框架的入侵模擬工具使命不變。",
    tags: ["Caldera", "MITRE", "Apache 軟體基金會", "開源專案", "紅隊演練", "MITRE ATT&CK"],
    title_en: "MITRE Donates Open-Source Automation Tool Caldera to Apache Software Foundation, Accelerating Global Cybersecurity Community Standardization",
    summary_en: "MITRE announced the donation of its open-source automation tool, Caldera, which has been under development for nearly ten years, to the Apache Software Foundation (ASF), entering the incubator stage. Caldera's core value lies in simulating real-world network attack behaviors, assisting enterprises with Red Teaming and Purple Teaming exercises to test and strengthen defense systems. This transfer aims to transition Caldera from a MITRE-led project to an international standard tool maintained collaboratively by the global open-source community. By donating to the ASF, MITRE aims to expand collaboration between the global cybersecurity and open-source communities, increase platform adoption, and ensure its 'vendor-neutral' development model. Although the project has been transferred to the Apache Caldera project page, MITRE stated that it will continue to participate in development and direction guidance, ensuring its mission as an intrusion simulation tool compliant with the MITRE ATT&CK framework remains unchanged.",
    tags_en: ["Caldera", "MITRE", "Apache Software Foundation", "Open-Source Project", "Red Teaming", "MITRE ATT&CK"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176300", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-050",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安專家揭示網路「分割錯覺」：強調從攻擊者視角重繪網路地圖，預防橫向移動",
    summary: "隨著零日漏洞持續出現、AI 輔助攻擊工具日益強大，傳統的「修補一切」防禦模式已失效。本文內容聚焦於網路安全架構的根本問題——「分割錯覺」（Segmentation Illusion）。許多組織誤以為關鍵系統被防火牆或獨立區段保護，但攻擊者透過繪製真實網路地圖，能發現許多未被記錄的「縫隙」。這些縫隙包括：連接到多個網路的設備（multi-homed devices）、未註冊的物聯網（IoT）設備、以及隱藏在工業控制系統（OT）協議閘道器後方、傳統掃描工具無法觸及的資產。攻擊者關注的不是資產清單，而是「路徑」（paths）：即一個立足點如何到達另一個關鍵目標。修復建議是將靜態的資產清單，轉變為動態的攻擊路徑繪製，將修補資源集中在能縮短攻擊者到達關鍵影響點的「鏈接」和「資產」上，特別是當 IT、IoT 和 OT 環境混雜時，必須關注它們之間的交界處。",
    tags: ["網路分割", "橫向移動", "OT/ICS", "資產盤點", "零信任", "攻擊路徑"],
    title_en: "Cybersecurity Experts Reveal the Network's 'Segmentation Illusion': Emphasizing Attack-View Mapping to Prevent Lateral Movement",
    summary_en: "With the continuous emergence of zero-day vulnerabilities and increasingly powerful AI-assisted attack tools, the traditional 'patch everything' defense model has become ineffective. This article focuses on a fundamental problem in network security architecture: the 'Segmentation Illusion.' Many organizations mistakenly believe that critical systems are protected by firewalls or isolated segments, but attackers, by mapping the true network topology, can discover many undocumented 'gaps.' These gaps include: multi-homed devices connected to multiple networks, unregistered Internet of Things (IoT) devices, and assets hidden behind Industrial Control System (OT) protocol gateways that traditional scanning tools cannot reach. Attackers are not concerned with the asset inventory, but with the 'paths': how one foothold can reach another critical target. The suggested remediation is to transform static asset inventories into dynamic attack path mapping, concentrating remediation resources on the 'links' and 'assets' that can shorten an attacker's path to a critical impact point, especially when IT, IoT, and OT environments are mixed. Attention must be paid to the interfaces between these environments.",
    tags_en: ["Network Segmentation", "Lateral Movement", "OT/ICS", "Asset Inventory", "Zero Trust", "Attack Path"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/beyond-zero-day-see-your-network-like.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-051",
    trackers: ["security"],
    category: "前瞻技術",
    title: "企業身份管理面臨「身份暗物質」挑戰，需導入 IVIP 提升可見性與控制力",
    summary: "隨著企業規模擴大，身份管理（IAM）的複雜性導致身份活動分散，形成「身份暗物質」（Identity Dark Matter）。Orchid Security 分析指出，近半數的身份活動發生在中央 IAM 無法監控的範圍，包括未經管理應用程式、本地帳號和過度權限的非人身份，這造成了安全組織認知與實際存取權限之間的巨大差距。為了解決此問題，Gartner 提出了「身份可見性與情報平台」（IVIP），作為一個獨立的「系統之系統」。IVIP 必須能持續發現人與非人身份，統一來自各處的碎片化身份資料，並利用 AI 分析將分散的信號轉化為可行動的資安洞察。Orchid Security 實作此模型，透過二進位分析和動態儀器化，直接從應用程式層面獲取身份活動，而非僅依賴 API。這能揭露傳統工具無法看到的影子 IT 和本地帳號，並提供證據驅動的身份智能，幫助企業從單純的「可見性」邁向「理解」和「控制」。",
    tags: ["IAM", "身份管理", "IVIP", "身份暗物質", "Orchid Security", "AI", "影子IT"],
    title_en: "Enterprise Identity Management Faces 'Identity Dark Matter' Challenge, Requiring IVIP Implementation to Enhance Visibility and Control",
    summary_en: "As enterprises grow in scale, the complexity of Identity and Access Management (IAM) leads to dispersed identity activities, creating 'Identity Dark Matter.' Orchid Security analysis points out that nearly half of identity activities occur outside the scope of central IAM monitoring, including unmanaged applications, local accounts, and over-privileged non-human identities. This creates a significant gap between an organization's perceived security posture and its actual access rights. To solve this problem, Gartner proposed the 'Identity Visibility and Intelligence Platform' (IVIP), described as an independent 'system of systems.' IVIP must continuously discover human and non-human identities, unify fragmented identity data from various sources, and utilize AI analysis to transform scattered signals into actionable security insights. Orchid Security implements this model by obtaining identity activities directly from the application layer through binary analysis and dynamic instrumentation, rather than relying solely on APIs. This reveals Shadow IT and local accounts that traditional tools cannot see, providing evidence-driven identity intelligence that helps enterprises move from mere 'visibility' to 'understanding' and 'control.'",
    tags_en: ["IAM", "Identity Management", "IVIP", "Identity Dark Matter", "Orchid Security", "AI", "Shadow IT"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/shrinking-iam-attack-surface-through.html", lang: "EN" }
    ]
  },
  {
    id: "20260603-052",
    trackers: ["security"],
    category: "前瞻技術",
    title: "川普簽署AI資安行政命令：建立前沿模型自願評估機制，強化聯邦政府資安防護",
    summary: "美國總統川普簽署《促進先進人工智慧創新與安全》行政命令，旨在應對AI技術帶來的資安風險。核心內容包括成立AI資安資訊交換中心，並要求建立「列管前沿模型」的認定標準。此機制允許具備高階網路攻擊能力的AI模型開發商，自願讓政府在發布前取得早期評估權限，以協助政府與關鍵基礎設施營運商提前發現潛在威脅。行政命令強調，此為自願評估，非強制審查。此外，命令要求CISA等單位在30天內發布指引，並與產業合作，共同發掘、驗證及修補AI相關的軟體漏洞，加速部署AI資安工具，強化地方政府、醫院、銀行等關鍵基礎設施的防護能力。",
    tags: ["AI資安", "前沿模型", "CISA", "美國政府", "資安行政命令", "關鍵基礎設施"],
    title_en: "Trump Signs AI Security Executive Order: Establishing Voluntary Assessment Mechanism for Frontier Models to Enhance Federal Government Cybersecurity Protection",
    summary_en: "U.S. President Trump signed the 'Executive Order on Promoting Advanced Artificial Intelligence Innovation and Security,' aimed at addressing cybersecurity risks posed by AI technology. Key provisions include establishing an AI Security Information Exchange Center and mandating the creation of certification standards for 'frontier models.' This mechanism allows developers of AI models with advanced cyber attack capabilities to voluntarily grant the government early assessment rights before deployment, helping the government and critical infrastructure operators proactively detect potential threats. The executive order emphasizes that this is a voluntary assessment, not mandatory review. Furthermore, the order requires agencies like CISA to issue guidelines within 30 days and to collaborate with industry to discover, validate, and patch AI-related software vulnerabilities, accelerating the deployment of AI security tools and strengthening the protective capabilities of critical infrastructure, including local governments, hospitals, and banks.",
    tags_en: ["AI Security", "Frontier Models", "CISA", "U.S. Government", "Cybersecurity Executive Order", "Critical Infrastructure"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176334", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-053",
    trackers: ["security"],
    category: "前瞻技術",
    title: "HPE Zerto 10.9版推出 AI 助理與 Context Protocol，將生成式 AI 導入資料保護管理",
    summary: "備份與資料保護平臺 Zerto 近日發布 10.9 版，大幅升級其管理功能，引入兩項與生成式 AI 相關的新技術。首先是內建的 AI 助理，此功能採用檢索增強生成（RAG）技術，能直接從 Zerto 技術文件檢索資訊，並根據系統環境回覆產品運作問題。此外，Zerto 亦推出 Zerto Context Protocol，這是一個標準化介面，允許外部 AI 用戶端（如 Claude Desktop 或 VS Code Copilot）透過對話方式與 Zerto 的 ZVM 管理平臺互動。外部 AI 用戶端透過 OAuth 2 授權和 TLS 1.2+ 加密通訊協定連線，可查詢並管理虛擬保護群組（VPG）、虛擬機器、警報、RPO 合規性檢查等關鍵系統資訊。此舉使資料保護管理流程更具互動性與智能化，與業界趨勢同步，降低了管理複雜度。",
    tags: ["HPE", "Zerto", "生成式AI", "RAG", "資料保護", "AI助理", "ZVM"],
    title_en: "HPE Zerto 10.9 introduces AI Assistant and Context Protocol, integrating generative AI into data protection management",
    summary_en: "Zerto, a backup and data protection platform, recently released version 10.9, significantly upgrading its management capabilities and introducing two new technologies related to generative AI. First is the built-in AI Assistant, which utilizes Retrieval-Augmented Generation (RAG) technology. This feature can directly retrieve information from Zerto technical documentation and answer product operation questions based on the system environment. Furthermore, Zerto has launched the Zerto Context Protocol, a standardized interface that allows external AI clients (such as Claude Desktop or VS Code Copilot) to interact with Zerto's ZVM management platform via conversational dialogue. External AI clients connect using OAuth 2 authorization and TLS 1.2+ encrypted communication protocols to query and manage critical system information, including Virtual Protection Groups (VPGs), virtual machines, alerts, and RPO compliance checks. This move makes the data protection management process more interactive and intelligent, aligning with industry trends and reducing management complexity.",
    tags_en: ["HPE", "Zerto", "Generative AI", "RAG", "Data Protection", "AI Assistant", "ZVM"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176317", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-054",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟發布 Agent Governance Toolkit 擴充套件，強化 .NET AI 代理工具呼叫的治理與安全控制",
    summary: "微軟推出適用於 .NET 8 以上的 Agent Governance Toolkit MCP 擴充套件，旨在為使用模型脈絡協定（MCP）的 AI 代理系統提供全面的治理層。由於 AI 代理可透過外部工具（如讀取檔案、呼叫 API）與實際資源互動，容易面臨權限控管和提示詞注入等風險，因此需要額外的安全機制。此套件透過單一 WithGovernance() 方法整合兩階段治理流程。第一階段在伺服器啟動時，會掃描工具定義，偵測隱藏指令或跨伺服器攻擊風險，若發現不安全工具，會阻止伺服器啟動。第二階段則在工具被呼叫時，可依據 YAML 政策決定是否允許執行、拒絕執行或設定速率限制，並預設清理工具輸出內容，確保回傳給模型的內容安全。此技術適用於內部 Copilot、企業工具及 AI 代理平臺等 MCP 伺服器，有助於開發者提升 AI 應用程式的安全性與可控性。",
    tags: ["微軟", "Agent Governance Toolkit", ".NET", "AI 代理", "MCP", "提示詞注入", "治理機制"],
    title_en: "Microsoft Releases Agent Governance Toolkit Extension to Enhance Governance and Security Controls for .NET AI Agent Tool Calling",
    summary_en: "Microsoft has launched the Agent Governance Toolkit MCP extension, applicable to .NET 8 and later, designed to provide a comprehensive governance layer for AI agent systems utilizing the Model Context Protocol (MCP). Since AI agents can interact with real-world resources through external tools (such as reading files or calling APIs), they are susceptible to risks like privilege management issues and prompt injection, necessitating additional security mechanisms. This toolkit integrates a two-stage governance process via a single WithGovernance() method. The first stage scans tool definitions upon server startup to detect hidden commands or cross-server attack risks, blocking server startup if unsafe tools are found. The second stage governs tool calls by allowing, denying, or rate-limiting execution based on YAML policies, and proactively sanitizing tool output to ensure the content returned to the model is safe. This technology is applicable to MCP servers, including internal Copilot, enterprise tools, and AI agent platforms, helping developers enhance the security and controllability of AI applications.",
    tags_en: ["Microsoft", "Agent Governance Toolkit", ".NET", "AI Agent", "MCP", "Prompt Injection", "Governance Mechanism"],
    sources: [
      { name: "iThome 資安", url: "https://ithome.com.tw/news/176306", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260603-055",
    trackers: ["os"],
    category: "重點關注",
    title: "RISC-V RVA23 Profile 提升生態系統可攜性：為 Linux 應用提供 Hypervisor 與向量指令支援",
    summary: "本文深入探討 RISC-V 指令集架構（ISA）中的「Profile」概念，並重點介紹了 RVA23 這個標準化配置。Profile 的核心作用是解決指令集過度碎片化導致的軟體相容性問題，它為軟硬體開發者提供了一個共同的目標標準，確保編譯給 RVA23 的二進位檔案能在所有相容的 RVA23 CPU 上運行，極大提升了軟體的可攜性。RVA23 相較於早期版本，特別強制納入了兩個關鍵功能：Hypervisor（虛擬機管理程式）和 Vectors（向量指令）。Hypervisor 讓單一實體 CPU 能高效地模擬多個虛擬機，對於資料中心和大型工作負載的隔離與擴展至關重要。向量指令則用於加速單一應用程式的運算。雖然 Profile 確保了二進位層面的相容性，但系統啟動、設備發現和周邊驅動等底層行為仍需透過如 Server Platform Specification 等標準來解決，這對作業系統開發者和裸機開發者尤其重要。",
    tags: ["RISC-V", "RVA23", "Profile", "Hypervisor", "向量指令", "可攜性", "Linux"],
    title_en: "RISC-V RVA23 Profile Enhances Ecosystem Portability: Providing Hypervisor and Vector Instruction Support for Linux Applications",
    summary_en: "This article delves into the concept of 'Profile' within the RISC-V Instruction Set Architecture (ISA), focusing specifically on the RVA23 standardized configuration. The core function of a Profile is to solve software compatibility issues caused by excessive ISA fragmentation. It provides a common target standard for hardware and software developers, ensuring that binary files compiled for RVA23 can run on all compatible RVA23 CPUs, thereby greatly enhancing software portability. Compared to earlier versions, RVA23 specifically mandates two key features: Hypervisor and Vectors (vector instructions). The Hypervisor allows a single physical CPU to efficiently emulate multiple virtual machines, which is crucial for isolation and scaling in data centers and large workloads. Vector instructions are used to accelerate the computation of single applications. While the Profile ensures binary-level compatibility, underlying behaviors such as system boot, device discovery, and peripheral drivers still require resolution through standards like the Server Platform Specification, which is particularly important for operating system and bare-metal developers.",
    tags_en: ["RISC-V", "RVA23", "Profile", "Hypervisor", "Vector Instructions", "Portability", "Linux"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/risc-v-profiles-why-is-rva23-significant", lang: "EN" }
    ]
  },
  {
    id: "20260603-056",
    trackers: ["security"],
    category: "產業動態",
    title: "Oracle 多產品群組曝出多重漏洞，資安專家提醒修補與風險評估",
    summary: "資安研究機構發現 Oracle 旗下多個產品群組存在多重安全漏洞。這些漏洞的具體技術細節和受影響的產品版本尚未在本文中詳細公開，但專家警告，這些漏洞可能被惡意行為人利用，導致系統被未經授權存取或執行惡意程式。實務上，企業應立即將所有 Oracle 相關產品的修補程式（patch）更新至最新版本，並執行全面的資安盤點，評估哪些產品線是其核心業務依賴。建議除了修補漏洞外，應考慮實施網路分段（network segmentation）和最小權限原則（principle of least privilege），以降低一旦被攻陷的潛在影響範圍。",
    tags: ["Oracle", "資安漏洞", "產品安全", "修補建議", "CVE", "企業資安"],
    title_en: "Multiple Vulnerabilities Exposed Across Oracle Product Groups; Cybersecurity Experts Urge Patching and Risk Assessment",
    summary_en: "Cybersecurity research institutions have discovered multiple security vulnerabilities across several product groups under Oracle. While the specific technical details and affected product versions are not fully disclosed in this article, experts warn that these vulnerabilities could be exploited by malicious actors, potentially leading to unauthorized system access or the execution of malicious code. Practically, enterprises should immediately update all Oracle-related products with patches to the latest versions and conduct a comprehensive security inventory to assess which product lines are critical to their core business operations. In addition to patching vulnerabilities, it is recommended to consider implementing network segmentation and the principle of least privilege to mitigate the potential impact if a breach occurs.",
    tags_en: ["Oracle", "Cybersecurity Vulnerability", "Product Security", "Patching Recommendations", "CVE", "Enterprise Cybersecurity"],
    sources: [
      { name: "JPCERT/CC", url: "https://jpcert.or.jp/wr/2026/wr260603.html", lang: "EN" }
    ]
  }
];
