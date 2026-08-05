// data-20260525.js — 2026-05-25
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-25"] = [
  {
    id: "20260525-001",
    trackers: ["security"],
    category: "法規與標準",
    title: "荷蘭逮捕兩名人士，指控其經營的託管服務商協助俄羅斯進行網路攻擊與影響戰",
    summary: "荷蘭當局逮捕兩名與網路託管公司相關的人士，指控他們經營的基礎設施被用於協助俄羅斯進行網路攻擊、資訊操縱和虛假資訊戰。此次調查聚焦於一家名為 Stark Industries Solutions 的託管服務商，該公司曾被用於發動大規模 DDoS 攻擊，並成為與俄羅斯背景駭客團體相關的代理和匿名服務的主要來源。當局指控，這些公司透過與荷蘭的 MIRhosting 進行連線，為俄羅斯相關實體提供技術支持。逮捕的兩名嫌疑人涉及違反歐盟制裁法，指控他們間接或直接為受制裁實體提供經濟資源。當局在行動中查獲了超過 800 台伺服器，並對相關業務進行了調查。相關公司方面則發布聲明，否認其服務被用於影響選舉或進行惡意活動，並強調其正常營運。此事件凸顯了國家層面對利用民營網路基礎設施進行地緣政治攻擊的嚴格監管。",
    tags: ["荷蘭", "俄羅斯", "網路託管", "制裁法", "DDoS 攻擊", "資訊戰"],
    title_en: "Netherlands Arrest Two Individuals for Allegedly Operating Hosting Service Assisting Russia in Cyber Attacks and Information Warfare",
    summary_en: "Dutch authorities arrested two individuals associated with a network hosting company, accusing them of using their infrastructure to assist Russia in cyber attacks, information manipulation, and disinformation campaigns. The investigation focused on a hosting service provider named Stark Industries Solutions, which was reportedly used to launch large-scale DDoS attacks and served as a primary source of proxy and anonymous services linked to Russia-backed hacker groups. Authorities allege that these companies provided technical support to Russia-affiliated entities by connecting with MIRhosting in the Netherlands. The two suspects arrested are also charged with violating EU sanctions law, accused of indirectly or directly providing economic resources to sanctioned entities. During the operation, authorities seized over 800 servers and investigated the related businesses. The companies involved issued statements denying that their services were used to influence elections or conduct malicious activities, emphasizing their normal operations. This incident highlights the strict national-level regulation concerning the use of private network infrastructure for geopolitical attacks.",
    tags_en: ["Netherlands", "Russia", "Network Hosting", "Sanctions Law", "DDoS Attack", "Information Warfare"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/05/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks", lang: "EN" }
    ]
  },
  {
    id: "20260525-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Ghost CMS 遭利用 SQL 注入漏洞 (CVE-2026-26980) 進行大規模網站污染與惡意程式碼植入",
    summary: "資安研究機構 QiAnXin XLab 揭露，駭客正在利用 Ghost CMS 的一個嚴重漏洞 CVE-2026-26980，對多個網站進行大規模污染攻擊。此漏洞是 Ghost Content API 中的 SQL 注入缺陷，允許未經身份驗證的攻擊者讀取資料庫中的任意資料。由於此漏洞可讓攻擊者在未授權情況下取得網站的 Admin API Key，進而能透過 Ghost Admin API 批量修改文章，植入惡意 JavaScript 載入器。攻擊者利用此缺陷，在網站底部植入兩階段載入器，從外部網域取得流量分佈腳本，該腳本用於收集使用者指紋資訊。最終目標是誘騙訪客進入偽造的 CAPTCHA 驗證頁面，觸發 ClickFix 攻擊，引導使用者執行 Base64 編碼指令，最終下載並執行惡意 Windows 可執行檔，達成持久化控制。Ghost CMS 用戶應立即升級至最新版本，並輪換所有憑證、清理網站，並審核存取日誌。",
    tags: ["Ghost CMS", "CVE-2026-26980", "SQL 注入", "ClickFix", "惡意程式碼", "網站污染"],
    title_en: "Ghost CMS Exploited via SQL Injection Vulnerability (CVE-2026-26980) for Large-Scale Website Pollution and Malicious Code Injection",
    summary_en: "Security research organization QiAnXin XLab revealed that hackers are exploiting a critical vulnerability, CVE-2026-26980, in Ghost CMS to conduct large-scale pollution attacks on multiple websites. This vulnerability is an SQL injection flaw within the Ghost Content API, which allows unauthenticated attackers to read arbitrary data from the database. Because this flaw enables attackers to obtain the site's Admin API Key without authorization, they can subsequently use the Ghost Admin API to batch modify articles and inject malicious JavaScript loaders. The attackers utilized this defect to inject a two-stage loader at the bottom of the website, which fetches a traffic distribution script from an external domain. This script is used to collect user fingerprint information. The ultimate goal is to trick visitors into entering a fake CAPTCHA verification page, triggering a ClickFix attack, and guiding the user to execute a Base64 encoded command, ultimately downloading and executing a malicious Windows executable, achieving persistent control. Ghost CMS users should immediately upgrade to the latest version, rotate all credentials, clean the website, and audit access logs.",
    tags_en: ["Ghost CMS", "CVE-2026-26980", "SQL Injection", "ClickFix", "Malicious Code", "Website Pollution"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/ghost-cms-cve-2026-26980-exploited-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260525-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "揭露駭客組織 Lazarus 部署 RemotePE：跨平台記憶體式後門攻擊金融與加密貨幣目標",
    summary: "資安研究人員揭露了一種名為 RemotePE 的跨平台惡意軟體，該惡意軟體被與北韓相關的 Lazarus Group 部署，主要針對金融和加密貨幣組織。這是一個多階段的攻擊鏈，首先透過社會工程學（Social Engineering）滲透員工設備，利用假冒的業務聯繫和假域名進行誘騙。攻擊鏈包含 DPAPILoader 和 RemotePELoader 兩個載入器。DPAPILoader 利用 Windows Data Protection API (DPAPI) 解密並載入 RemotePELoader。RemotePELoader 接著會聯繫 C2 伺服器，並在記憶體中執行 RemotePE，而 RemotePE 本身是一個完全在記憶體中運行的遠端存取木馬（RAT），從不寫入磁碟，因此不會留下檔案系統痕跡。RemotePE 寫成 C++，支援多種命令，包括修改 C2 配置、執行檔案操作、管理進程等。研究人員指出，該工具集具備環境金鑰化、記憶體執行和低取證足跡的特性，顯示其專為長期、隱蔽的監控行動而設計，符合 Lazarus Group 針對高價值目標進行大規模金融盜竊的歷史行為。",
    tags: ["Lazarus Group", "RemotePE", "DPAPI", "RAT", "金融資安", "記憶體攻擊"],
    title_en: "Exposing Lazarus Group's Deployment of RemotePE: Cross-Platform Memory-Based Backdoor Targets Finance and Cryptocurrency",
    summary_en: "Cybersecurity researchers have uncovered a cross-platform malware called RemotePE, which has been deployed by the North Korea-linked Lazarus Group, primarily targeting financial and cryptocurrency organizations. This is a multi-stage attack chain that first penetrates employee devices through Social Engineering, utilizing deceptive business communications and fake domains. The attack chain includes two loaders: DPAPILoader and RemotePELoader. DPAPILoader uses the Windows Data Protection API (DPAPI) to decrypt and load RemotePELoader. RemotePELoader then contacts a C2 server and executes RemotePE in memory. RemotePE itself is a fully in-memory Remote Access Trojan (RAT) that never writes to disk, thus leaving no file system traces. RemotePE is written in C++ and supports various commands, including modifying C2 configurations, executing file operations, and managing processes. Researchers point out that the tool possesses characteristics such as environment keying, memory execution, and low forensic footprint, indicating it is designed for long-term, covert surveillance operations, consistent with the Lazarus Group's historical behavior of conducting large-scale financial theft against high-value targets.",
    tags_en: ["Lazarus Group", "RemotePE", "DPAPI", "RAT", "Financial Security", "Memory Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/lazarus-deploys-remotepe-memory-only.html", lang: "EN" }
    ]
  },
  {
    id: "20260525-004",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitHub遭Poisoned擴充套件入侵，洩露3,800個儲存庫；Linux核心及Drupal等多個漏洞持續曝光",
    summary: "本週資安事件涵蓋供應鏈攻擊、核心系統漏洞及重大資安事件。GitHub確認其內部儲存庫遭入侵，攻擊源頭是員工設備上安裝了被汙染的Nx Console VS Code擴充套件，導致約3,800個儲存庫資料外洩。此事件與近期TanStack供應鏈攻擊相關，顯示開源專案的風險極高。此外，一個在Linux核心中隱藏了九年的漏洞（CVE-2026-46333）被揭露，允許未授權使用者以root權限執行指令。Drupal核心也因SQL注入漏洞（CVE-2026-9082）面臨積極利用，已觀察到大量攻擊嘗試。其他重要事件包括Microsoft修復了Defender的權限提升及DoS漏洞，以及Cisco修補了CVSS 10.0的Secure Workload漏洞，強調了持續修補和監控的必要性。",
    tags: ["GitHub", "Nx Console", "供應鏈攻擊", "CVE-2026-46333", "Drupal Core", "Linux Kernel"],
    title_en: "GitHub Compromised by Poisoned Extension, Exposing 3,800 Repositories; Multiple Vulnerabilities in Linux Kernel and Drupal Exposed",
    summary_en: "This week's security events cover supply chain attacks, core system vulnerabilities, and major security incidents. GitHub confirmed that its internal repositories were compromised, with the attack originating from a poisoned Nx Console VS Code extension installed on an employee's device, leading to the leakage of data from approximately 3,800 repositories. This incident is related to the recent TanStack supply chain attack, highlighting the extreme risk within open-source projects. Furthermore, a vulnerability hidden in the Linux kernel for nine years (CVE-2026-46333) was revealed, allowing unauthorized users to execute commands with root privileges. The Drupal core also faces active exploitation due to an SQL injection vulnerability (CVE-2026-9082), with numerous attack attempts observed. Other significant events include Microsoft patching a privilege escalation and DoS vulnerability in Defender, and Cisco patching a CVSS 10.0 Secure Workload vulnerability, emphasizing the necessity of continuous patching and monitoring.",
    tags_en: ["GitHub", "Nx Console", "Supply Chain Attack", "CVE-2026-46333", "Drupal Core", "Linux Kernel"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/weekly-recap-linux-flaws-defender-0.html", lang: "EN" }
    ]
  },
  {
    id: "20260525-005",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "跨生態系統供應鏈攻擊「TrapDoor」：惡意套件鎖定開發者環境，竊取加密資產與雲端憑證",
    summary: "一場代號為「TrapDoor」的跨生態系統軟體供應鏈攻擊活動，鎖定 npm、PyPI 和 Crates.io 等主流開源套件管理平台。該活動利用超過 34 個惡意套件，橫跨多個版本，主要目標是竊取開發者的敏感資訊，包括加密錢包密鑰、SSH 密碼、雲端憑證（如 AWS 和 GitHub token）以及環境變數。攻擊者利用多種執行路徑，如 npm 的 postinstall hooks、PyPI 的匯入時執行、Rust 的 build.rs 腳本，以及在套件中植入惡意程式碼。具體技術細節包括一個名為 trap-core.js 的 JavaScript 載荷，用於掃描憑證並透過 AWS/GitHub API 驗證竊取資訊；Rust 套件則會加密並將本地密鑰傳輸至 GitHub Gists。更為複雜的是，攻擊者還在開源專案的 Pull Request 中植入隱藏指令，試圖誘騙 AI 輔助工具執行「安全掃描」，從而達到竊取秘密的目的。這類攻擊展示了駭客如何結合傳統的套件投毒與針對開發者工作流程的攻擊，極具威脅性，建議開發者應嚴格審查所有第三方套件的來源和執行行為。",
    tags: ["TrapDoor", "npm", "PyPI", "Crates.io", "供應鏈攻擊", "開源安全", "憑證竊取", "AI 安全"],
    title_en: "Cross-Ecosystem Supply Chain Attack 'TrapDoor': Malicious Packages Target Developer Environments to Steal Cryptographic Assets and Cloud Credentials",
    summary_en: "A cross-ecosystem software supply chain attack campaign, codenamed 'TrapDoor,' has targeted major open-source package repositories such as npm, PyPI, and Crates.io. The campaign utilized over 34 malicious packages across multiple versions, primarily aiming to steal sensitive developer information, including cryptographic wallet keys, SSH passwords, cloud credentials (such as AWS and GitHub tokens), and environment variables. Attackers leveraged various execution paths, such as npm's postinstall hooks, PyPI's import-time execution, Rust's build.rs scripts, and the direct embedding of malicious code within packages. Specific technical details include a JavaScript payload named trap-core.js, used to scan for credentials and exfiltrate information via AWS/GitHub APIs; Rust packages that encrypt and transmit local keys to GitHub Gists. More complexly, attackers also embedded hidden instructions within open-source project Pull Requests, attempting to trick AI assistance tools into executing 'security scans' to achieve the theft of secrets. This type of attack demonstrates how hackers combine traditional package poisoning with attacks targeting developer workflows, posing an extreme threat. Developers are advised to strictly vet the source and execution behavior of all third-party packages.",
    tags_en: ["TrapDoor", "npm", "PyPI", "Crates.io", "Supply Chain Attack", "Open Source Security", "Credential Theft", "AI Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/trapdoor-supply-chain-attack-spreads.html", lang: "EN" }
    ]
  },
  {
    id: "20260525-006",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Red Hat Lightspeed 導入跨服務驗證，解決性能優化與安全合規衝突問題",
    summary: "在分散式系統管理中，性能優化與安全強化經常存在衝突。Red Hat Lightspeed 透過新增跨服務驗證能力，將其 Advisor（建議）服務與 Compliance（合規）服務進行邏輯橋接。傳統上，當一個性能建議（如安裝 `tuned` RPM）與一個安全合規要求（如 CIS 基準要求移除 `tuned`）發生衝突時，系統管理員會面臨「狀態矛盾」的困境。為了解決此問題，Red Hat 建立了一個衝突偵測引擎，將 Advisor 的 Python 建議步驟與 Compliance 服務的 SCAP 內容進行比對。現在，當使用者介面渲染建議時，系統會檢查目標主機的啟用安全策略，若發現衝突，將在修復步驟中注入動態警告，提醒使用者此修復可能影響合規狀態。此外，Red Hat 也將此衝突偵測機制整合到內部 CI/CD 管線，實現開發階段的左移驗證，提升建議的可靠性。",
    tags: ["Red Hat Lightspeed", "跨服務驗證", "性能優化", "安全合規", "SCAP", "CIS 基準"],
    title_en: "Red Hat Lightspeed Introduces Cross-Service Validation to Resolve Conflicts Between Performance Optimization and Security Compliance",
    summary_en: "In distributed system management, performance optimization and security enhancement often conflict. Red Hat Lightspeed addresses this by adding cross-service validation capabilities, logically bridging its Advisor (recommendation) service and Compliance service. Traditionally, when a performance recommendation (such as installing the `tuned` RPM) conflicts with a security compliance requirement (such as a CIS benchmark requiring the removal of `tuned`), system administrators face a 'state contradiction' dilemma. To solve this, Red Hat built a conflict detection engine that compares Advisor's Python recommendation steps with the Compliance service's SCAP content. Now, when the user interface renders recommendations, the system checks the target host's enabled security policies. If a conflict is found, a dynamic warning is injected into the remediation steps, alerting the user that this fix may impact the compliance status. Furthermore, Red Hat has integrated this conflict detection mechanism into its internal CI/CD pipeline, enabling left-shift validation during the development phase and enhancing the reliability of recommendations.",
    tags_en: ["Red Hat Lightspeed", "Cross-Service Validation", "Performance Optimization", "Security Compliance", "SCAP", "CIS Benchmark"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/context-aware-advisor-recommendations-red-hat-lightspeed", lang: "EN" }
    ]
  },
  {
    id: "20260525-007",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI驅動的網路偵測與回應（NDR）如何將「警報洪流」轉化為可行動的威脅情報",
    summary: "傳統的網路偵測與回應（NDR）系統因數據量過大，常被認為會產生過多「噪音」（警報洪流），導致分析師疲勞。然而，隨著「代理式AI」（Agentic AI）的引入，NDR的能力已發生質變。AI能夠自主擷取數據、進行警報分類、關聯分析，並自動處理大量重複性工作。這使得原本被視為負擔的龐大數據量，轉變為可挖掘的戰略資產。AI能從低嚴重性、資訊性的活動中，找出傳統方法容易忽略的關聯訊號，例如異常連線與登入失敗的關聯。具備AI的NDR能將分散的網路證據組合成完整的、有優先級的威脅故事，並提供建議的應對行動。雖然AI極大地提升了效率，但組織仍需持續進行網路行為基準線建立（Baselining）和系統調校，確保數據的品質和系統的持續校準，才能最大化其防禦效益。",
    tags: ["NDR", "Agentic AI", "網路安全", "數據關聯", "SOC", "威脅情報"],
    title_en: "How AI-Driven Network Detection and Response (NDR) Transforms 'Alert Floods' into Actionable Threat Intelligence",
    summary_en: "Traditional Network Detection and Response (NDR) systems are often criticized for generating excessive 'noise' (alert floods) due to massive data volumes, leading to analyst fatigue. However, with the introduction of 'Agentic AI,' the capabilities of NDR have undergone a qualitative transformation. AI can autonomously ingest data, classify alerts, perform correlation analysis, and automate large volumes of repetitive tasks. This transforms what was previously considered a burden of massive data into an exploitable strategic asset. AI can identify correlated signals—such as abnormal connections and failed logins—from low-severity, informational activities that traditional methods often overlook. AI-equipped NDR can synthesize disparate network evidence into complete, prioritized threat narratives, and provide recommended response actions. Although AI significantly boosts efficiency, organizations must continue to establish network behavioral baselines and fine-tune systems to ensure data quality and continuous system calibration to maximize its defensive benefits.",
    tags_en: ["NDR", "Agentic AI", "Cybersecurity", "Data Correlation", "SOC", "Threat Intelligence"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/the-alert-firehose-finally-meets-its.html", lang: "EN" }
    ]
  },
  {
    id: "20260525-008",
    trackers: ["security"],
    category: "前瞻技術",
    title: "紅帽提出後量子密碼策略：強調基礎設施層面的漸進式轉型，而非單純的時限壓力",
    summary: "隨著量子電腦威脅（CRQC）的逼近，業界正加速制定後量子密碼（PQC）的轉型時程。紅帽（Red Hat）指出，對於全球企業級基礎設施而言，PQC的轉型遠超單純的補丁更新，而是一場跨越數年的架構革命。紅帽已將PQC支援納入RHEL 10，支援ML-KEM、ML-DSA和SLH-DSA等標準，並成為首批使用後量子金鑰簽署RPM套件的主要發行版之一。文章強調，企業系統的複雜性（如銀行、政府）和大量遺留應用程式的存在，使得轉型必須是系統性、多階段的。紅帽的策略是透過在平台層面提供工具和軟體，同時管理經典密碼學和PQC兩種狀態，確保基礎設施的連續性和可驗證性。紅帽建議客戶應使用 Mosca 定理（資料保密壽命、遷移時間、威脅時程）來評估實際的轉型需求，而非僅依賴外部的「截止日期」。",
    tags: ["紅帽", "Red Hat", "後量子密碼", "PQC", "RHEL", "ML-KEM", "ML-DSA"],
    title_en: "Red Hat Proposes Post-Quantum Cryptography Strategy: Emphasizing Infrastructure-Level Gradual Transition Over Simple Deadline Pressure",
    summary_en: "As the threat of quantum computers (CRQC) approaches, the industry is accelerating the development of post-quantum cryptography (PQC) transition timelines. Red Hat points out that for global enterprise infrastructure, PQC transition is far beyond a simple patch update; it is an architectural revolution spanning years. Red Hat has included PQC support in RHEL 10, supporting standards such as ML-KEM, ML-DSA, and SLH-DSA, and has become one of the primary distributions using post-quantum key signing for RPM packages. The article emphasizes that due to the complexity of enterprise systems (such as banking and government) and the existence of numerous legacy applications, the transition must be systemic and multi-phased. Red Hat's strategy is to provide tools and software at the platform level, managing both classical cryptography and PQC states simultaneously, thereby ensuring the continuity and verifiability of the infrastructure. Red Hat advises customers to use the Mosca theorem (data confidentiality lifespan, migration time, and threat timeline) to assess actual transition needs, rather than relying solely on external 'deadlines.'",
    tags_en: ["Red Hat", "PQC", "RHEL", "ML-KEM", "ML-DSA"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/building-levee-why-red-hats-post-quantum-strategy-already-production", lang: "EN" }
    ]
  }
];
