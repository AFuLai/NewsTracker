// data-20260624.js — 2026-06-24
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-24"] = [
  {
    id: "20260624-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Salesforce 因 Klue Battlecards 整合服務遭駭客利用 OAuth 權杖竊取客戶資料，ShinyHunters 宣稱犯案",
    summary: "Salesforce 近日暫時中斷應用程式 Klue Battlecards 與其平臺的連結，主因偵測到異常活動且部分用戶資料遭未經授權存取。資安公司 ReliaQuest 調查發現，攻擊者入侵 Klue 整合服務帳號進行身分驗證並取得 OAuth 權杖，隨後利用自動化 Python 指令碼針對 Salesforce 的 REST API 端點發起循環查詢，以分頁方式在短時間內大規模竊取企業用戶資料。部分受害組織在 15 分鐘內遭發送近千筆請求，甚至面臨連續 6 小時不間斷的資料外洩。駭客團體 ShinyHunters 隨後宣稱對此負責並要求談判，且疑似與勒索團體 Lcarus 有所關聯。建議受影響企業應立即審查相關 OAuth 授權、清查 API 存取日誌，並暫停異常的第三方整合連線。",
    tags: ["Salesforce", "Klue Battlecards", "OAuth 權杖", "API 攻擊", "ShinyHunters", "資料外洩", "供應鏈安全"],
    title_en: "Salesforce Hit by Hacker Using OAuth Token Theft via Klue Battlecards Integration Service, ShinyHunters Claims Responsibility",
    summary_en: "Salesforce recently temporarily disconnected the Klue Battlecards application from its platform after detecting abnormal activity and unauthorized access to some user data. Security firm ReliaQuest investigated and found that attackers compromised the Klue integration service account to perform authentication and obtain an OAuth token. They then used automated Python scripts to launch cyclical queries against Salesforce's REST API endpoint, massively exfiltrating corporate user data in paginated batches. Some affected organizations received nearly a thousand requests within 15 minutes, and faced continuous data leakage for up to 6 hours. The hacker group ShinyHunters subsequently claimed responsibility and demanded a ransom, appearing to be linked to the ransomware group Lcarus. Affected enterprises are advised to immediately review relevant OAuth permissions, audit API access logs, and temporarily suspend suspicious third-party integrations.",
    tags_en: ["Salesforce", "Klue Battlecards", "OAuth Token", "API Attack", "ShinyHunters", "Data Leakage", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176822", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-002",
    trackers: ["security"],
    category: "重大事件",
    title: "密碼管理服務 LastPass 遭第三方 AI 平台 Klue 遭駭波及，部分客戶聯絡資訊與客服工單外洩",
    summary: "密碼管理服務商 LastPass 於 6 月 23 日公告，其使用的第三方 AI 市場情報分析平台 Klue 發生安全事故。駭客利用外流的舊憑證入侵 Klue 後端，並取得用於整合 Salesforce 及 Gong 系統的 OAuth 令牌，隨後利用該令牌存取了 LastPass 在 Salesforce 環境中的客戶資料。外洩內容涵蓋標準的 CRM 客戶聯絡資訊（包含姓名、電話、電子郵件、實體住址）以及客服支援工單和銷售資料。LastPass 強調，此事件僅影響與 Klue 整合的系統，其產品、服務、基礎架構及客戶密碼保存庫均未受影響。目前 LastPass 已切斷對 Klue 的存取、更換外洩的 API 憑證，並與相關單位展開調查。官方建議用戶防範隨之而來的釣魚與社交工程攻擊。",
    tags: ["LastPass", "Klue", "Salesforce", "資料外洩", "OAuth 令牌", "供應鏈安全", "客戶關係管理"],
    title_en: "Password Manager LastPass Affected by Breach via Third-Party AI Platform Klue; Customer Contact Info and Support Tickets Exposed",
    summary_en: "Password manager LastPass announced on June 23 that its third-party AI market intelligence platform, Klue, experienced a security incident. Attackers exploited leaked old credentials to breach the Klue backend, obtaining OAuth tokens used to integrate with Salesforce and Gong systems. Subsequently, these tokens were used to access customer data belonging to LastPass within the Salesforce environment. The leaked content includes standard CRM customer contact information (including name, phone number, email, and physical address), as well as customer support tickets and sales data. LastPass emphasized that this incident only affected the system integrated with Klue, and that its product, services, infrastructure, and customer password vault were unaffected. LastPass has since cut off access to Klue, replaced the leaked API credentials, and launched an investigation with relevant parties. The company advises users to guard against subsequent phishing and social engineering attacks.",
    tags_en: ["LastPass", "Klue", "Salesforce", "Data Leakage", "OAuth Token", "Supply Chain Security", "CRM"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176821", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-003",
    trackers: ["security"],
    category: "重大事件",
    title: "AI競爭情報公司Klue遭駭致憑證外流，Salesforce等第三方平台用戶資料恐遭竊，Huntress證實受害",
    summary: "AI競爭情報公司Klue近日爆發資安事故，攻擊者利用一組測試第三方整合時建立、長期未使用卻仍有效的憑證，成功滲透Klue的基礎設施。駭客隨後在後端系統植入惡意程式碼，藉此竊取客戶用來連接CRM等第三方平台的OAuth權杖，進而非法存取並匯出受害用戶的資料。Salesforce偵測到Klue Battlecards應用程式的異常活動後，已暫停相關連結。威脅情報公司Huntress隨後證實受害，其存放在Salesforce的企業聯絡資訊與訂閱資料遭外洩，並收到自稱「mr bean」的駭客勒索信。經資安人員比對暗網資訊，研判攻擊者為新興勒索組織Lcarus。目前相關產品遙測與密碼資訊未受影響，建議用戶應加強停用閒置憑證，並清查相關OAuth權杖安全性。",
    tags: ["Klue", "Salesforce", "Huntress", "Lcarus", "OAuth權杖", "憑證外流", "資料外洩", "勒索軟體"],
    title_en: "AI Competitive Intelligence Company Klue Suffers Breach, Leading to Certificate Leak; User Data from Third-Party Platforms Like Salesforce Potentially Stolen, Confirmed by Huntress",
    summary_en: "AI competitive intelligence company Klue recently suffered a security incident. Attackers exploited a set of certificates established during third-party integration testing, which were long unused but remained valid, to penetrate Klue's infrastructure. The hackers subsequently implanted malicious code into the backend system, thereby stealing OAuth tokens used by customers to connect to third-party platforms like CRM, and subsequently illegally accessed and exfiltrated the affected users' data. Salesforce detected abnormal activity from the Klue Battlecards application and has since suspended the relevant connection. Threat intelligence company Huntress subsequently confirmed the breach, noting that corporate contact information and subscription data stored in Salesforce were leaked, and that they received a ransom note from an attacker calling themselves \"mr bean.\" Based on forensic analysis of dark web information, security personnel determined that the attackers belong to the emerging ransomware group Lcarus. Currently, the telemetry and password information for related products remain unaffected. Users are advised to strengthen the deactivation of idle certificates and to audit the security of related OAuth tokens.",
    tags_en: ["Klue", "Salesforce", "Huntress", "Lcarus", "OAuth token", "Certificate Leak", "Data Leak", "Ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176820", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-004",
    trackers: ["security"],
    category: "重大事件",
    title: "巴西公共警報系統遭未授權利用發送假警報，影響聖保羅、里約等多地",
    summary: "巴西整合與區域發展部（MIDR）指出，巴西民防警報系統Defesa Civil Alerta在6月19日至20日期間，遭未經授權的外部行為利用。攻擊者透過公共警報發送介面（IDAP）和細胞廣播（Cell Broadcast）技術，向聖保羅州、南馬托格羅索州、里約熱內盧州等多個地區的民眾發送了假冒的緊急警報。初步調查顯示，在特定時間內共發生了10次未授權發送行為，其中多數利用細胞廣播技術觸發「極端」等級警報。事件後，MIDR已立即暫停Defesa Civil Alerta平臺運作，並封鎖了IDAP的所有外部存取，同時保存系統日誌進行數位鑑識分析。目前雖未確認系統有結構性損害，但事件仍嚴重影響了公共安全資訊的可靠性，巴西聯邦警察已介入調查。",
    tags: ["巴西", "Defesa Civil Alerta", "細胞廣播", "公共警報", "MIDR", "假警報"],
    title_en: "Brazil's Public Alert System Hacked to Send False Alarms, Affecting São Paulo, Rio, and Other Areas",
    summary_en: "Brazil's Ministry of Integration and Regional Development (MIDR) reported that the Defesa Civil Alerta civil defense alert system was exploited by unauthorized external actors between June 19 and 20. Attackers used the Integrated Digital Alert Platform (IDAP) and Cell Broadcast technology to send fake emergency alerts to residents in multiple regions, including São Paulo state, Mato Grosso do Sul state, and Rio de Janeiro state. Preliminary investigations show that there were a total of 10 unauthorized sending incidents during a specific period, many of which utilized Cell Broadcast technology to trigger 'extreme' level alerts. Following the incident, MIDR immediately suspended the operation of the Defesa Civil Alerta platform and blocked all external access to IDAP, while preserving system logs for digital forensic analysis. Although no structural damage to the system has been confirmed, the incident severely impacted the reliability of public safety information, and the Brazilian Federal Police have intervened to investigate.",
    tags_en: ["Brazil", "Defesa Civil Alerta", "Cell Broadcast", "Public Alert", "MIDR", "False Alarm"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176831", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-005",
    trackers: ["security"],
    category: "重大事件",
    title: "國際合作瓦解 Amadey 與 StealC 惡意網路基礎設施，回收數千萬美元資產",
    summary: "國際執法機構與私營資安公司（包括 Bitdefender、Microsoft 等）協同行動，成功瓦解了 Amadey 和 StealC 這兩類惡意軟體的犯罪基礎設施。這兩款惡意軟體均採用「惡意軟體即服務」（MaaS）模式，用於發動勒索軟體、金融詐騙及攻擊關鍵基礎設施。Amadey 是一款自 2018 年活躍的 C++ 後門，功能包括指紋識別、下載檔案、執行命令、截圖、開啟 VNC/RDP 等。StealC 則是一個資料竊取工具，可從瀏覽器、Discord、Outlook 等應用程式竊取密碼、Cookie、瀏覽紀錄等。此次行動成功識別並限制了超過 4,700 萬美元的加密貨幣資產，並恢復了高達 2,700 萬個被盜登入憑證。此次事件強調了公私部門合作在瓦解大規模網路犯罪生態系統中的重要性，並提醒用戶需警惕透過受感染的 WordPress 網站或釣魚活動傳播的惡意軟體。",
    tags: ["Amadey", "StealC", "MaaS", "勒索軟體", "網路犯罪", "國際合作"],
    title_en: "International Cooperation Dismantles Amadey and StealC Malicious Cyber Infrastructure, Recovers Tens of Millions of Dollars in Assets",
    summary_en: "International law enforcement agencies and private cybersecurity companies (including Bitdefender, Microsoft, etc.) collaborated to successfully dismantle the criminal infrastructure associated with two types of malware: Amadey and StealC. Both pieces of malware utilize a 'Malware-as-a-Service' (MaaS) model to launch ransomware attacks, financial fraud, and attacks on critical infrastructure. Amadey is a C++ backdoor active since 2018, featuring functionalities such as fingerprint identification, file downloading, command execution, screen capturing, and opening VNC/RDP. StealC, on the other hand, is a data theft tool capable of stealing passwords, cookies, and browsing history from applications like browsers, Discord, and Outlook. This operation successfully identified and restricted over $47 million in cryptocurrency assets, and recovered up to 27 million stolen login credentials. This incident underscores the importance of public-private cooperation in dismantling large-scale cybercrime ecosystems and reminds users to be vigilant against malware spread through compromised WordPress websites or phishing activities.",
    tags_en: ["Amadey", "StealC", "MaaS", "Ransomware", "Cybercrime", "International Cooperation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/amadey-and-stealc-malware-network.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-006",
    trackers: ["security"],
    category: "重大事件",
    title: "美國司法部查扣柬埔寨HuiOne集團雲端帳戶：揭露大規模網路詐騙與洗錢網絡",
    summary: "美國司法部（DoJ）宣布查扣了與柬埔寨HuiOne集團子公司相關的雲端計算帳戶。該集團被指控協助個人和組織透過加密貨幣區塊鏈，進行投資詐騙、網路詐騙等犯罪活動的資金轉移，並將贓款轉入合法銀行系統，且未被察覺。查扣的帳戶曾是HuiOne Guarantee的後端基礎設施，該平台在2021年至2025年間，透過一個非法Telegram市場，販售了從個人資料、洗錢服務、詐騙網站建置服務，到用於人臉替換、語音克隆和深度偽造的工具等各種犯罪工具。該集團利用此雲端帳戶作為技術骨幹，協助洗錢和隱藏數十億美元的詐騙贓款。此外，美國財政部（Treasury）還對與詐騙相關的九名個人和二十六個實體實施了制裁。這顯示了跨國犯罪組織持續利用技術基礎設施進行大規模網路犯罪，對美國公民構成重大威脅。",
    tags: ["美國司法部", "HuiOne Group", "加密貨幣詐騙", "洗錢", "深度偽造", "跨國犯罪"],
    title_en: "U.S. Department of Justice Seizes Cambodian HuiOne Group Cloud Accounts: Exposing Large-Scale Online Fraud and Money Laundering Network",
    summary_en: "The U.S. Department of Justice (DoJ) announced the seizure of cloud computing accounts associated with subsidiaries of the Cambodian HuiOne Group. The group is accused of assisting individuals and organizations in transferring funds for criminal activities, such as investment fraud and online scams, using cryptocurrency blockchain, and subsequently laundering the proceeds into the legitimate banking system without detection. The seized accounts were previously the backend infrastructure for HuiOne Guarantee. Between 2021 and 2025, this platform sold various criminal tools through an illicit Telegram marketplace, ranging from personal data and money laundering services to fraud website construction services, and tools used for face swapping, voice cloning, and deepfakes. The group utilized this cloud account as a technical backbone to facilitate the laundering and concealment of billions of dollars in fraudulent proceeds. Furthermore, the U.S. Treasury has imposed sanctions on nine individuals and twenty-six entities related to the fraud. This highlights how transnational criminal organizations continue to exploit technological infrastructure for large-scale cybercrime, posing a significant threat to U.S. citizens.",
    tags_en: ["U.S. Department of Justice", "HuiOne Group", "Cryptocurrency Fraud", "Money Laundering", "Deepfake", "Transnational Crime"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/doj-seizes-huione-cloud-account-tied-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-007",
    trackers: ["os"],
    category: "Linux",
    title: "Fedora 考慮強制實施 2FA，強化開源專案供應鏈安全防護",
    summary: "由於先前發生了疑似的帳號遭入侵事件，導致 AI 代理程式為 Fedora 專案帶來一系列問題，開源社群開始關注帳號安全。為降低攻擊者透過帳號入侵植入惡意軟體到開源供應鏈的風險，Fedora 專案正在討論強制實施雙因素驗證（2FA）或多因素驗證（MFA）。初期實施範圍將針對「provenpackager」群組的套件打包者。Fedora 預計在未來三個月左右開始要求該群組的成員啟用 2FA，以提升專案的整體安全防護等級，特別是針對供應鏈層面的風險管理。",
    tags: ["Fedora", "2FA", "MFA", "開源供應鏈", "帳號安全", "provenpackager"],
    title_en: "Fedora Considers Mandatory 2FA to Enhance Open Source Project Supply Chain Security",
    summary_en: "Following a suspected account compromise incident that introduced a series of issues for the Fedora project via AI agents, the open-source community has begun paying closer attention to account security. To mitigate the risk of attackers injecting malicious software into the open-source supply chain through account compromise, the Fedora project is discussing the mandatory implementation of Two-Factor Authentication (2FA) or Multi-Factor Authentication (MFA). The initial scope of implementation will target package packagers within the 'provenpackager' group. Fedora plans to require members of this group to enable 2FA within the next three months, thereby elevating the project's overall security posture, especially concerning supply chain risk management.",
    tags_en: ["Fedora", "2FA", "MFA", "Open Source Supply Chain", "Account Security", "provenpackager"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1078964", lang: "EN" }
    ]
  },
  {
    id: "20260624-008",
    trackers: ["os"],
    category: "Linux",
    title: "深入探討 BPF 記憶體區域 (arenas) 的應用與 libarena 函式庫的發展",
    summary: "本文介紹了 BPF (Berkeley Packet Filter) 記憶體區域 (arenas) 的概念，這些區域允許程式在不受 Verifier 邊界檢查限制的情況下，自由地建立資料結構。這些資料結構對於多個程式都是潛在可用的。作者 Emil Tsalapatis 於 2026 年的 Linux Storage, Filesystem, Memory-Management, and BPF Summit 上展示了 libarena 函式庫。該函式庫提供了用於 BPF arenas 的通用工具。雖然該函式庫已包含在核心中，但目前仍處於早期階段，作者預計將會進行更多相關工作，顯示 BPF 記憶體管理和工具鏈持續發展。",
    tags: ["BPF", "Linux 核心", "libarena", "記憶體管理", "Linux 程式設計"],
    title_en: "In-depth Exploration of BPF Memory Arenas and the Development of the libarena Library",
    summary_en: "This article introduces the concept of BPF (Berkeley Packet Filter) memory arenas, which allow programs to freely create data structures without being restricted by Verifier boundary checks. These data structures are potentially available to multiple programs. The author, Emil Tsalapatis, presented the libarena library at the Linux Storage, Filesystem, Memory-Management, and BPF Summit in 2026. This library provides general-purpose tools for BPF arenas. Although the library is already included in the kernel, it is currently in an early stage. The author plans to conduct further related work, demonstrating the continuous development of BPF memory management and toolchains.",
    tags_en: ["BPF", "Linux Kernel", "libarena", "Memory Management", "Linux Programming"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1078526", lang: "EN" }
    ]
  },
  {
    id: "20260624-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：netfilter nf_queue 導致 Use-After-Free，可能影響網路封包處理",
    summary: "本漏洞位於 Linux 核心的 netfilter 模組中的 nf_queue 功能。攻擊者若能觸發此缺陷，可能導致 Use-After-Free (UAF) 條件。漏洞的技術細節是：當透過 br_pass_frame_up() 寫入 skb->dev 時，若 NFQUEUE 僅持有 state.in/out 和 bridge physdevs 的參考，導致隊列中的封包在 reinjection 時，skb->dev 仍指向已被釋放的 bridge master，從而觸發 UAF。此漏洞的嚴重性評估為 CVSS v4.0 的權限、複雜度、攻擊向量等均為低（L/L/N），但影響度（C/I/A）皆為高（H）。修補建議是更新 Linux 核心到已修復的版本，特別是在處理隊列封包的釋放和重新注入流程時，應儲存 skb->dev 並在隊列生命週期內持有其參考，以確保在 NETDEV_DOWN 處理期間使用正確的設備。建議開發者關注核心網路堆疊的封包處理邏輯。",
    tags: ["Linux 核心", "netfilter", "nf_queue", "Use-After-Free", "CVE-2026-52912", "Linux 網路堆疊"],
    title_en: "Linux Kernel Vulnerability: netfilter nf_queue Causes Use-After-Free, Potentially Affecting Network Packet Processing",
    summary_en: "This vulnerability resides in the nf_queue functionality within the Linux kernel's netfilter module. If an attacker can trigger this flaw, it may lead to a Use-After-Free (UAF) condition. The technical details of the vulnerability are as follows: When writing to skb->dev via br_pass_frame_up(), if NFQUEUE only holds references to state.in/out and bridge physdevs, it can cause the skb->dev to still point to a released bridge master during reinjection, thereby triggering a UAF. The severity assessment for this vulnerability is low across privilege, complexity, and attack vector (L/L/N), but high for impact (C/I/A). The recommended fix is to update the Linux kernel to a patched version. Specifically, when handling the release and reinjection process of queued packets, skb->dev should be stored and its reference held throughout the queue's lifecycle to ensure the correct device is used during NETDEV_DOWN processing. Developers are advised to pay attention to the packet processing logic of the core network stack.",
    tags_en: ["Linux Kernel", "netfilter", "nf_queue", "Use-After-Free", "CVE-2026-52912", "Linux Network Stack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52912", lang: "EN" }
    ]
  },
  {
    id: "20260624-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：batman-adv 模組在禁用介面時可能發生空指針解引用",
    summary: "本漏洞存在於 Linux 核心的 batman-adv 模組中，涉及 `batadv_v_ogm_send_meshif()` 函式。當 `batadv_hard_iface` 介面被禁用時，其 `mesh_iface` 指標會被設為 NULL。然而，`batadv_v_ogm_send_meshif()` 仍可能透過 `batadv_v_ogm_queue_on_if()` 發送 OGMs，而後者會無條件地對已為 NULL 的 `hard_iface->mesh_iface` 呼叫 `netdev_priv()`，導致空指針解引用（NULL pointer dereference）。為修復此問題，必須確保 `batadv_v_ogm_queue_on_if()` 在使用時，檢查其是否與最初呼叫 `batadv_v_ogm_send_meshif()` 時使用的 `mesh_iface` 相同。建議使用者應升級至已修補的 Linux 核心版本，以避免此類核心層級的穩定性與安全風險。",
    tags: ["Linux 核心", "batman-adv", "空指針解引用", "CVE-2026-52913", "Linux 核心漏洞"],
    title_en: "Linux Kernel Vulnerability: Null Pointer Dereference Possible in batman-adv Module During Interface Disablement",
    summary_en: "This vulnerability resides in the Linux kernel's batman-adv module, specifically involving the `batadv_v_ogm_send_meshif()` function. When the `batadv_hard_iface` interface is disabled, its `mesh_iface` pointer is set to NULL. However, `batadv_v_ogm_send_meshif()` may still attempt to send OGMs via `batadv_v_ogm_queue_on_if()`, which unconditionally calls `netdev_priv()` on the already NULL `hard_iface->mesh_iface`, leading to a null pointer dereference. To fix this issue, it must be ensured that `batadv_v_ogm_queue_on_if()` checks if it uses the same `mesh_iface` pointer that was originally used by `batadv_v_ogm_send_meshif()`. Users are advised to upgrade to a patched Linux kernel version to avoid this type of kernel-level stability and security risk.",
    tags_en: ["Linux Kernel", "batman-adv", "Null Pointer Dereference", "CVE-2026-52913", "Linux Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52913", lang: "EN" }
    ]
  },
  {
    id: "20260624-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 batman-adv 模組存在資訊不一致性，可能導致本地服務拒絕 (CVE-2026-52914)",
    summary: "本漏洞存在於 Linux 核心的 batman-adv 模組中，涉及碎片重組長度計數的邏輯缺陷。正常情況下，batman-adv 會追蹤佇列碎片（queued fragments）的有效負載長度，並在重組前進行驗證。然而，原有的計數機制允許累積的碎片長度在更新過程中被截斷，使得惡意攻擊者可以利用格式錯誤的碎片鏈（malformed fragment chains）繞過預期的驗證，導致核心在處理重組時進入不一致的長度狀態，最終造成本地服務拒絕（local denial of service）。修補建議是透過將累積長度儲存在一個指定長度類型的欄位中，並在執行現有驗證邏輯之前，拒絕處理任何更新溢出（update overflows）的行為。建議使用者應更新至修補後的 Linux 核心版本以修復此問題。",
    tags: ["Linux 核心", "batman-adv", "CVE-2026-52914", "DoS", "網路堆疊", "核心漏洞"],
    title_en: "Information Inconsistency in Linux Kernel's batman-adv Module May Lead to Local Denial of Service (CVE-2026-52914)",
    summary_en: "This vulnerability exists in the batman-adv module of the Linux kernel and involves a logical flaw in the counting of fragment reassembly lengths. Normally, batman-adv tracks the effective payload length of queued fragments and validates it before reassembly. However, the existing counting mechanism allows the accumulated fragment length to be truncated during updates, enabling malicious attackers to bypass expected validation using malformed fragment chains. This leads to the kernel entering an inconsistent length state while processing reassembly, ultimately causing a local denial of service. The suggested fix is to store the accumulated length in a dedicated length type field and reject any update overflows before executing the existing validation logic. Users are advised to update to a patched Linux kernel version to resolve this issue.",
    tags_en: ["Linux Kernel", "batman-adv", "CVE-2026-52914", "DoS", "Network Stack", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52914", lang: "EN" }
    ]
  },
  {
    id: "20260624-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：netfilter ip6t_hbh 漏洞，防止用戶空間傳入過大選項列表",
    summary: "本漏洞位於 Linux 核心的 netfilter 模組中，具體影響 `ip6t_hbh` 功能。問題出在 `struct ip6t_opts` 結構體，它僅儲存最多 `IP6T_OPTS_OPTSNR` 個選項描述符，但 `hbh_mt6_check()` 函數在檢查時並未拒絕用戶空間傳入的過大 `optsnr` 值。這可能導致在規則設定路徑中發生陣列越界存取（off-by-one array access），如 UBSAN 警告所示。修補措施是在規則設定路徑中增加對 `optsnr` 的驗證，確保只能安裝符合固定大小選項陣列的匹配資料。此修補遵循了現有的 `xtables` 模式，並維持了封包匹配路徑的穩定性。建議系統管理員應升級至修補後的 Linux 核心版本，以防止潛在的記憶體安全問題。",
    tags: ["Linux 核心", "netfilter", "ip6t_hbh", "CVE-2026-52915", "陣列越界", "Linux 安全"],
    title_en: "Linux Kernel Patch: netfilter ip6t_hbh Vulnerability Prevents Overly Large Option Lists from User Space",
    summary_en: "This vulnerability resides in the Linux kernel's netfilter module, specifically affecting the `ip6t_hbh` functionality. The issue lies within the `struct ip6t_opts` structure, which only stores up to `IP6T_OPTS_OPTSNR` option descriptors. However, the `hbh_mt6_check()` function fails to reject overly large `optsnr` values passed from user space during validation. This could lead to an array out-of-bounds access (off-by-one array access) during rule setting paths, as indicated by UBSAN warnings. The fix involves adding validation for `optsnr` during rule setting paths, ensuring that only matching data conforming to the fixed-size option array can be installed. This patch adheres to the existing `xtables` model and maintains the stability of the packet matching path. System administrators are advised to upgrade to the patched Linux kernel version to prevent potential memory safety issues.",
    tags_en: ["Linux Kernel", "netfilter", "ip6t_hbh", "CVE-2026-52915", "Array Out-of-Bounds", "Linux Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52915", lang: "EN" }
    ]
  },
  {
    id: "20260624-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：batman-adv 處理單播分片時，可透過巢狀封包導致堆疊溢出（CVE-2026-52916）",
    summary: "本漏洞存在於 Linux 核心的 `batman-adv` 模組中，涉及處理單播分片（unicast fragment）的邏輯。攻擊者可以精心構造一個惡意的 `BATADV_UNICAST_FRAG` 封包，使其重組後的有效負載本身又是一個 `BATADV_UNICAST_FRAG` 封包，形成「Matryoshka 風格」的巢狀結構。當核心接收到此類封包時，`batadv_batman_skb_recv()` 函數會不斷遞迴處理這些巢狀分片，導致遞迴層級無界增長，最終耗盡核心堆疊空間，造成堆疊溢出。此漏洞利用了核心在處理分片重組時，未限制遞迴深度的缺陷。修補建議為在核心的重分片或分片內分片處理流程中，明確地丟棄所有仍為 `BATADV_UNICAST_FRAG` 格式的封包，以防止無限遞迴。此漏洞已在核心中修復。",
    tags: ["Linux 核心", "batman-adv", "CVE-2026-52916", "堆疊溢出", "網路協議", "核心模組"],
    title_en: "Linux Kernel: Stack Overflow via Nested Packets in batman-adv when Handling Unicast Fragments (CVE-2026-52916)",
    summary_en: "This vulnerability resides in the `batman-adv` module of the Linux kernel, specifically involving the logic for handling unicast fragments. An attacker can craft a malicious `BATADV_UNICAST_FRAG` packet such that the reconstructed payload itself is another `BATADV_UNICAST_FRAG` packet, forming a 'Matryoshka-style' nested structure. When the kernel receives such a packet, the `batadv_batman_skb_recv()` function repeatedly processes these nested fragments, causing the recursion depth to grow indefinitely and eventually exhausting the kernel stack space, leading to a stack overflow. This vulnerability exploits a flaw in the kernel's handling of fragment reassembly, where the recursion depth is not limited. The suggested fix is to explicitly discard any packets that remain in `BATADV_UNICAST_FRAG` format during the kernel's refragmentation or intra-fragmentation processing flow, thereby preventing infinite recursion. This vulnerability has been patched in the kernel.",
    tags_en: ["Linux Kernel", "batman-adv", "CVE-2026-52916", "Stack Overflow", "Network Protocol", "Kernel Module"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52916", lang: "EN" }
    ]
  },
  {
    id: "20260624-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 SCTP 診斷功能中，因狀態過時導致的越界讀取漏洞",
    summary: "本漏洞存在於 Linux 核心的 SCTP (Stream Control Transmission Protocol) 診斷功能中。當執行 `sctp: diag: reject stale associations in dump_one path` 時，如果 SCTP 進行了 `exact sock_diag` 查找，可能會持有傳輸參考並鎖定套接字。若在鎖定期間，SCTP 關聯狀態已被標記為死亡並釋放了綁定地址列表，後續的 `inet_assoc_attr_size()` 和 `inet_diag_msg_sctpasoc_fill()` 函數仍可能嘗試解引用已無效的關聯狀態。這可能導致 `inet_diag_msg_sctpasoc_fill()` 將空綁定地址列表誤讀為有效的 `sctp_sockaddr_entry`，進而觸發從不相關的關聯記憶體中發生越界讀取（out-of-bounds read）。修補措施要求在取得套接字鎖後，若關聯已被回收或從端點分離，應立即拒絕該關聯，並將查找報告為過時（stale），以防止 `dump-one` 路徑格式化撕裂的關聯狀態。",
    tags: ["Linux 核心", "SCTP", "越界讀取", "Linux 核心漏洞", "sctp: diag"],
    title_en: "Linux Kernel Patch: Fixes Out-of-Bounds Read Vulnerability in SCTP Diagnostic Function",
    summary_en: "This vulnerability exists in the SCTP (Stream Control Transmission Protocol) diagnostic function of the Linux kernel. When executing `sctp: diag: reject stale associations in dump_one path`, if SCTP performs an `exact sock_diag` lookup, it may hold a transmission reference and lock the socket. If, during this locked period, the SCTP association state has been marked as dead and the bound address list has been released, subsequent calls to `inet_assoc_attr_size()` and `inet_diag_msg_sctpasoc_fill()` may still attempt to dereference an invalid association state. This could cause `inet_diag_msg_sctpasoc_fill()` to misread an empty bound address list as a valid `sctp_sockaddr_entry`, thereby triggering an out-of-bounds read from unrelated association memory. The patch requires that after acquiring the socket lock, if the association has been reclaimed or separated from the endpoint, it should immediately reject the association and report the lookup as stale, preventing format-string-like reads from stale association states in the `dump-one` path.",
    tags_en: ["Linux Kernel", "SCTP", "Out-of-bounds Read", "Linux Kernel Vulnerability", "sctp: diag"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52917", lang: "EN" }
    ]
  },
  {
    id: "20260624-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心藍牙服務漏洞：未同步的接受佇列操作可能導致服務崩潰",
    summary: "本漏洞位於 Linux 核心的藍牙（Bluetooth）子系統，涉及 `accept_q` 接受佇列缺乏同步保護。當系統在執行藍牙服務時，如果沒有正確的鎖機制，可能導致在佇列進行遍歷（walk）時，另一個子程序（child teardown）意外地解除連結（unlink）了相同的 socket，進而丟失了其最後的參考計數。這類未同步的操作可能導致藍牙服務的穩定性問題或崩潰。修補建議是為 `accept_q` 引入專門的鎖機制來保護佇列更新和輪詢操作，並重構 `bt_accept_dequeue()` 函數，使其在釋放佇列鎖之前，先取得臨時的子程序參考，以確保資源的完整性。使用者應立即更新至包含修補的 Linux 核心版本，以避免潛在的服務中斷風險。",
    tags: ["Linux 核心", "Bluetooth", "CVE-2026-52918", "accept_q", "核心漏洞", "系統服務"],
    title_en: "Linux Kernel Bluetooth Service Vulnerability: Unsynchronized Accept Queue Operation May Cause Service Crash",
    summary_en: "This vulnerability resides in the Bluetooth subsystem of the Linux kernel, involving the lack of synchronization protection for the `accept_q` accept queue. When the system executes the Bluetooth service, if proper locking mechanisms are not in place, another child teardown process might unexpectedly unlink the same socket while the queue is being walked, leading to the loss of its final reference count. Such unsynchronized operations can cause stability issues or crashes in the Bluetooth service. The suggested fix is to introduce a dedicated locking mechanism for `accept_q` to protect queue updates and polling operations, and to refactor the `bt_accept_dequeue()` function to acquire a temporary child process reference before releasing the queue lock, thereby ensuring resource integrity. Users should immediately update to a patched Linux kernel version to avoid potential service disruption risks.",
    tags_en: ["Linux Kernel", "Bluetooth", "CVE-2026-52918", "accept_q", "Kernel Vulnerability", "System Service"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52918", lang: "EN" }
    ]
  },
  {
    id: "20260624-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：batman-adv 模組計數器溢出導致資源釋放錯誤",
    summary: "本漏洞存在於 Linux 核心的 batman-adv 模組，具體影響於 `tp_meter.c` 檔案。當系統在關機或介面移除過程中，如果多個路徑（如超時、使用者取消、正常結束）呼叫 `batadv_tp_sender_shutdown()` 函數，原始的計數器（atomic counter）可能會發生計數器溢出（underflow），導致計數器值變成負數。由於發送器邏輯將任何非零值視為「仍在發送」，負數值會使發送器 kthread 無限循環，最終導致在殭屍執行緒（zombie thread）仍活躍的情況下，介面被移除時發生使用後釋放（use-after-free）的嚴重安全問題。修補建議是使用 `atomic_xchg()` 來確保計數器只從 1 轉換到 0 一次。受影響版本為 4.8 及低於特定版本，建議升級至修補後的 Linux 核心版本以修復此問題。",
    tags: ["Linux 核心", "batman-adv", "CVE-2026-52919", "use-after-free", "Linux Kernel"],
    title_en: "Linux Kernel Vulnerability: batman-adv Module Counter Overflow Causes Resource Release Error",
    summary_en: "This vulnerability exists in the Linux kernel's batman-adv module, specifically affecting the `tp_meter.c` file. When the system is shutting down or an interface is being removed, if multiple paths (such as timeout, user cancellation, or normal termination) call the `batadv_tp_sender_shutdown()` function, the original atomic counter may experience an underflow, causing the counter value to become negative. Because the sender logic treats any non-zero value as 'still sending,' the negative value causes the sender kthread to enter an infinite loop, ultimately leading to a severe use-after-free issue when the interface is removed while a zombie thread is still active. The suggested fix is to use `atomic_xchg()` to ensure the counter transitions from 1 to 0 only once. Affected versions are 4.8 and lower than a specific version; it is recommended to upgrade to a patched Linux kernel version to resolve this issue.",
    tags_en: ["Linux Kernel", "batman-adv", "CVE-2026-52919", "use-after-free", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52919", lang: "EN" }
    ]
  },
  {
    id: "20260624-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 netfilter 漏洞修復：修復 xt_policy 嚴格模式的策略匹配邏輯",
    summary: "本漏洞涉及 Linux 核心的 netfilter 模組，具體位於 `xt_policy` 檔案。問題點在於嚴格模式（strict mode）的輸入策略匹配（inbound policy matching）邏輯存在不一致性。當執行 `match_policy_in()` 函數時，如果策略匹配需要依賴多個轉換（transforms）的資訊，其順序處理邏輯可能與規則佈局（rule layout）的順序不一致。修復後，系統將能從已消耗的轉換數量推導出嚴格匹配的策略位置，確保多元素輸入規則能夠被一致地匹配。此修補屬於核心功能層面的邏輯修正，建議所有使用 Linux 核心的系統管理員應立即更新到修復後的版本，以確保網路過濾規則的正確性和安全性。修補建議是更新到修復了此邏輯錯誤的 Linux 核心版本。",
    tags: ["Linux 核心", "netfilter", "xt_policy", "CVE-2026-52920", "網路安全", "策略匹配"],
    title_en: "Linux Kernel netfilter Vulnerability Fix: Correcting Policy Matching Logic in xt_policy Strict Mode",
    summary_en: "This vulnerability affects the netfilter module in the Linux kernel, specifically within the `xt_policy` file. The issue lies in an inconsistency in the inbound policy matching logic of strict mode. When the `match_policy_in()` function is executed, if policy matching relies on information from multiple transforms, the sequential processing logic might be inconsistent with the rule layout order. After the fix, the system will be able to deduce the policy position for strict matching from the number of consumed transforms, ensuring that multi-element input rules are consistently matched. This patch is a core functional logic correction, and system administrators using the Linux kernel are advised to update immediately to the patched version to ensure the accuracy and security of network filtering rules. The recommended patch is an update to the Linux kernel version that fixes this logic error.",
    tags_en: ["Linux Kernel", "netfilter", "xt_policy", "CVE-2026-52920", "Network Security", "Policy Matching"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52920", lang: "EN" }
    ]
  },
  {
    id: "20260624-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 netfilter ipset 漏洞：修復 hash set 範圍迭代終止問題",
    summary: "本漏洞存在於 Linux 核心的 netfilter ipset 模組中，影響多種 hash set 變體（如 hash:ip, mark 等）。問題點在於當使用 32 位元迭代器迭代 IPv4 範圍時，如果迭代器在處理完請求範圍的最後一個位址後再進一步遞增，可能會導致遍歷狀態超出預期範圍。這可能使後續的重試操作從一個非預期的位置繼續，造成不穩定的行為。修補建議是明確地在迴圈結束時處理迭代器遞增，並在處理完上界後立即停止，以保持現有的重試行為完整性，同時防止遍歷超出原始邊界。此漏洞已在 Linux 核心中得到修復，建議系統管理員應升級至最新的核心版本以修補。",
    tags: ["Linux 核心", "netfilter", "ipset", "CVE-2026-52921", "IPv4", "核心漏洞"],
    title_en: "Linux Kernel netfilter ipset Vulnerability: Fix for Hash Set Range Iteration Termination Issue",
    summary_en: "This vulnerability resides in the netfilter ipset module of the Linux kernel, affecting various hash set variants (such as hash:ip, mark, etc.). The issue arises when using a 32-bit iterator to iterate over an IPv4 range. If the iterator increments further after processing the last address in the requested range, the traversal state may exceed the expected range. This can cause subsequent retry operations to continue from an unexpected position, leading to unstable behavior. The suggested fix is to explicitly handle the iterator increment at the end of the loop and stop immediately after processing the upper bound, thereby maintaining the integrity of existing retry behavior while preventing traversal beyond the original boundaries. This vulnerability has been patched in the Linux kernel, and system administrators are advised to upgrade to the latest kernel version for remediation.",
    tags_en: ["Linux Kernel", "netfilter", "ipset", "CVE-2026-52921", "IPv4", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52921", lang: "EN" }
    ]
  },
  {
    id: "20260624-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：batman-adv 處理分配錯誤導致 NULL 指標解引用風險",
    summary: "本漏洞存在於 Linux 核心的 `batman-adv` 模組中，具體為 `batadv_dat_forward_data()` 函數。該函數在為每個 DHT 候選者複製 skb 時，會呼叫 `pskb_copy_for_clone()`。然而，程式碼並未檢查此複製操作的返回值，直接將結果傳遞給 `batadv_send_skb_prepare_unicast_4addr()`。如果 skb 複製失敗（分配錯誤），會導致後續函數對 NULL 指標進行解引用，從而觸發 NULL 指標解引用（NULL pointer dereference）的漏洞。修補建議是修改相關邏輯，在分配失敗時，應跳過向當前 DHT 候選者進行轉發，而非直接執行可能導致崩潰的操作。此漏洞已在 Linux 核心中得到修復，建議系統管理員應升級至最新的核心版本以修補。",
    tags: ["Linux 核心", "batman-adv", "NULL 指標解引用", "CVE-2026-52922", "skb"],
    title_en: "Linux Kernel Vulnerability: batman-adv Handling Allocation Error Leads to NULL Pointer Dereference Risk",
    summary_en: "This vulnerability exists in the `batman-adv` module of the Linux kernel, specifically within the `batadv_dat_forward_data()` function. This function calls `pskb_copy_for_clone()` when cloning skbs for each DHT candidate. However, the code fails to check the return value of this copy operation, passing the result directly to `batadv_send_skb_prepare_unicast_4addr()`. If the skb copy fails (due to an allocation error), it causes a subsequent function to dereference a NULL pointer, thereby triggering a NULL pointer dereference vulnerability. The suggested fix is to modify the relevant logic to skip forwarding to the current DHT candidate upon allocation failure, rather than executing an operation that could cause a crash. This vulnerability has been patched in the Linux kernel, and system administrators are advised to upgrade to the latest kernel version for remediation.",
    tags_en: ["Linux Kernel", "batman-adv", "NULL pointer dereference", "CVE-2026-52922", "skb"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52922", lang: "EN" }
    ]
  },
  {
    id: "20260624-020",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：IPC ID 分配邊界檢查缺陷，防止 IDR 狀態損壞與記憶體越界存取",
    summary: "本漏洞位於 Linux 核心的 IPC (Inter-Process Communication) 系統，具體影響 `ipc_idr_alloc()` 函數在檢查點/恢復 (checkpoint/restore) 路徑的 ID 分配機制。當系統的 SysV IPC ID 空間尾部接近飽和時，由於分配函數缺乏明確的上限限制，導致分配請求可能溢出有效的 IPC ID 範圍（超過 `ipc_mni`）。這會造成實際的 IDR (ID Range) 條目被遺留在高索引位置，而新分配的物件 ID 卻仍使用較窄的 SysV IPC 索引寬度進行編碼。後續的移除操作 (`ipc_rmid()`) 會誤用截斷的索引，導致系統狀態混亂。在共享記憶體 (shared memory) 的情境下，雖然物件本身會被釋放，但高索引的 IDR 槽位會成為懸空指標 (dangling pointer)。當系統再次掃描 `/proc/sysvipc/shm` 時，會嘗試解引用這個已釋放的記憶體，可能導致崩潰或資訊洩露。修補建議是在檢查點/恢復路徑中，將 ID 分配請求限制在 `ipc_mni` 範圍內，一旦有效範圍耗盡，應立即失敗，從而防止越界分配。",
    tags: ["Linux 核心", "IPC", "SysV IPC", "CVE-2026-52923", "IDR", "記憶體越界"],
    title_en: "Linux Kernel Patch: IPC ID Allocation Boundary Check Flaw Prevents IDR State Corruption and Memory Out-of-Bounds Access",
    summary_en: "This vulnerability resides in the Linux kernel's IPC (Inter-Process Communication) system, specifically affecting the ID allocation mechanism within the `ipc_idr_alloc()` function's checkpoint/restore path. When the tail end of the system's SysV IPC ID space approaches saturation, the allocation function lacks clear upper bounds, allowing allocation requests to potentially overflow the valid IPC ID range (exceeding `ipc_mni`). This results in actual IDR (ID Range) entries being left in high index positions, while newly allocated object IDs are still encoded using a narrower SysV IPC index width. Subsequent removal operations (`ipc_rmid()`) incorrectly use truncated indices, leading to system state corruption. In the context of shared memory, although the object itself is released, the high-index IDR slot becomes a dangling pointer. When the system subsequently scans `/proc/sysvipc/shm`, it attempts to dereference this released memory, potentially causing a crash or information leak. The patch recommends restricting ID allocation requests within the checkpoint/restore path to the `ipc_mni` range. If the valid range is exhausted, the operation should immediately fail, thereby preventing out-of-bounds allocation.",
    tags_en: ["Linux Kernel", "IPC", "SysV IPC", "CVE-2026-52923", "IDR", "Memory Out-of-Bounds"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52923", lang: "EN" }
    ]
  },
  {
    id: "20260624-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux SCTP 核心漏洞：Stale Cookie 處理流程導致 Use-After-Free 崩潰",
    summary: "本漏洞存在於 Linux 核心的 SCTP 協定實現中，具體發生在處理「Stale Cookie」錯誤時。當接收到 Stale Cookie 錯誤，系統會將關聯（association）從 COOKIE_ECHOED 狀態回滾到 COOKIE_WAIT 狀態。在回滾過程中，雖然會釋放舊的串流表（stream table）並建立新的，但核心程式碼未能正確失效（invalidate）輸出佇列的指標 `stream->out_curr`。這導致後續的 SCTP 排程器（scheduler）在執行資料解佇列（dequeue）路徑時，仍會依賴指向已釋放的舊串流狀態的指標，從而引發典型的 Use-After-Free（使用已釋放記憶體）問題，最終導致系統崩潰。此漏洞已在核心層面修復，修復措施要求在處理 Stale Cookie 情況時，必須徹底清除關聯的輸出佇列，確保所有待傳輸和重傳狀態被丟棄，並使所有排程器快取指標失效，才能安全地重建串流狀態。",
    tags: ["Linux 核心", "SCTP", "Use-After-Free", "CVE-2026-52924", "Linux 核心漏洞", "sctp_stream_update"],
    title_en: "Linux SCTP Core Vulnerability: Use-After-Free Crash Due to Stale Cookie Handling Process",
    summary_en: "This vulnerability exists in the SCTP protocol implementation within the Linux kernel, specifically occurring when handling a \"Stale Cookie\" error. When the system receives a Stale Cookie error, it rolls back the association from the COOKIE_ECHOED state to the COOKIE_WAIT state. During this rollback process, although the old stream table is released and a new one is established, the core code fails to correctly invalidate the pointer `stream->out_curr` in the output queue. This causes the subsequent SCTP scheduler, when executing the data dequeue path, to still rely on a pointer pointing to the old, released stream state, thereby triggering a typical Use-After-Free issue, ultimately leading to a system crash. This vulnerability has been fixed at the kernel level. The remediation requires that when handling the Stale Cookie scenario, the association's output queue must be thoroughly cleared, ensuring that all pending and retransmission states are discarded, and that all scheduler cache pointers are invalidated before the stream state can be safely reconstructed.",
    tags_en: ["Linux Kernel", "SCTP", "Use-After-Free", "CVE-2026-52924", "Linux Kernel Vulnerability", "sctp_stream_update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52924", lang: "EN" }
    ]
  },
  {
    id: "20260624-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：VRF 端口移除時的 NPD 潛在風險修復",
    summary: "本漏洞位於 Linux 核心的網路功能（netdev）處理流程中，具體涉及在從虛擬路由區（VRF）移除端口時，可能導致 RCU 讀取器（RCU reader）做出錯誤假設。當 RCU 讀取器使用 `netif_is_l3_slave()` 識別為 VRF 端口後，它會假設後續呼叫 `netdev_master_upper_dev_get_rcu()` 返回的設備仍具備 VRF 設備的特徵。然而，由於在移除端口時缺乏 RCU 同步機制，讀取器可能會看到一個新的主設備（例如橋接器），但該設備可能不具備預期的 L3 設備操作（l3mdev operations），進而導致空指針解引用（NULL pointer dereference, NPD）的風險。修復方案是在清除 `IFF_L3MDEV_SLAVE` 標誌後，增加 RCU 同步機制。此修復旨在確保在設備狀態變更時，核心元件的資料一致性，防止惡意或意外的系統崩潰。建議系統管理員應更新至修復此問題的 Linux 核心版本。",
    tags: ["Linux 核心", "VRF", "NPD", "RCU", "netdev", "空指針解引用"],
    title_en: "Linux Kernel Vulnerability: Potential NPD Risk During VRF Port Removal Fixed",
    summary_en: "This vulnerability resides in the Linux kernel's network device (netdev) processing flow, specifically involving a potential incorrect assumption made by the RCU reader when a port is removed from a Virtual Routing and Forwarding (VRF) context. When the RCU reader identifies a port as a VRF port using `netif_is_l3_slave()`, it assumes that subsequent calls to `netdev_master_upper_dev_get_rcu()` will return a device that still possesses the characteristics of a VRF device. However, due to the lack of RCU synchronization mechanisms during port removal, the reader might observe a new master device (e.g., a bridge), but this device may not possess the expected L3 device operations (l3mdev operations), leading to a risk of NULL pointer dereference (NPD). The fix involves adding RCU synchronization mechanisms after clearing the `IFF_L3MDEV_SLAVE` flag. This patch aims to ensure data consistency of core components when device state changes, preventing malicious or accidental system crashes. System administrators are advised to update to the Linux kernel version that fixes this issue.",
    tags_en: ["Linux Kernel", "VRF", "NPD", "RCU", "netdev", "NULL pointer dereference"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52925", lang: "EN" }
    ]
  },
  {
    id: "20260624-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：batman-adv 網關狀態殘留問題，建議更新核心版本",
    summary: "本漏洞位於 Linux 核心的 `batman-adv` 模組，涉及網狀網路（mesh）的關閉流程。當執行網狀網路拆除（teardown）時，`batadv_gw_node_free()` 函數會移除網關列表的條目，但並未清除當前選定的網關狀態。這會導致系統留下「陳舊的網關狀態」（stale gateway state），當後續進行網狀網路重建時，可能會造成功能異常或故障。修補建議是在執行網關列表遍歷前，明確清除 `bat_priv->gw.curr_gw`，以確保選定的網關參考在拆除過程中被正確釋放。受影響的系統應升級到修補後的 Linux 核心版本。",
    tags: ["Linux 核心", "batman-adv", "網狀網路", "Linux 核心漏洞", "網路堆疊"],
    title_en: "Linux Kernel Vulnerability: batman-adv Gateway State Persistence Issue, Update Kernel Version Recommended",
    summary_en: "This vulnerability resides in the `batman-adv` module of the Linux kernel and involves the mesh network shutdown process. When performing a mesh network teardown, the `batadv_gw_node_free()` function removes entries from the gateway list but fails to clear the currently selected gateway state. This results in a \"stale gateway state\" remaining on the system, which may cause functional anomalies or failures when the mesh network is subsequently rebuilt. The patch suggests explicitly clearing `bat_priv->gw.curr_gw` before iterating through the gateway list, ensuring that the selected gateway reference is correctly released during the teardown process. Affected systems should upgrade to a patched Linux kernel version.",
    tags_en: ["Linux Kernel", "batman-adv", "Mesh Network", "Linux Kernel Vulnerability", "Network Stack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52926", lang: "EN" }
    ]
  },
  {
    id: "20260624-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 netfilter ebtables 修正 OOB Read 漏洞：加強使用者空間結構大小驗證",
    summary: "本漏洞存在於 Linux 核心的 netfilter 模組中的 ebtables 功能。問題出在 `compat_mtw_from_user()` 函式，該函式負責將 32 位元的使用者空間 ebtables 擴充結構轉換為核心原生結構。若未對使用者提供的 `match_size` 或 `target_size` 進行足夠的驗證，當處理特定擴充時，核心的翻譯邏輯可能會根據擴充預期的大小執行記憶體存取。如果使用者提供的大小小於擴充所需的實際大小，將導致「越界讀取」（Out-of-Bounds Read）。本次修補透過新增檢查，確保 `match_size` 至少等於擴充所需的 `compatsize`，從而涵蓋了 matches、watchers 和 targets 等部分，同時維持了與標準 targets 的相容性。此修補旨在防止因不當大小驗證導致的記憶體安全問題，提升核心網路過濾機制（netfilter）的穩定性與安全性。",
    tags: ["Linux 核心", "netfilter", "ebtables", "OOB Read", "Linux 安全修補"],
    title_en: "Linux Kernel netfilter ebtables fix for OOB Read vulnerability: Strengthening user-space structure size validation",
    summary_en: "This vulnerability exists in the ebtables functionality within the Linux kernel's netfilter module. The issue lies in the `compat_mtw_from_user()` function, which is responsible for converting 32-bit user-space ebtables extension structures into native kernel structures. If the user-provided `match_size` or `target_size` is not sufficiently validated, the kernel's translation logic may perform memory access based on the expected size of the extension when processing specific extensions. If the size provided by the user is smaller than the actual size required by the extension, it results in an \"Out-of-Bounds Read.\" This patch introduces new checks to ensure that `match_size` is at least equal to the required `compatsize`, thereby covering parts such as matches, watchers, and targets, while maintaining compatibility with standard targets. This fix aims to prevent memory safety issues caused by inadequate size validation, enhancing the stability and security of the kernel's network filtering mechanism (netfilter).",
    tags_en: ["Linux Kernel", "netfilter", "ebtables", "OOB Read", "Linux Security Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52927", lang: "EN" }
    ]
  },
  {
    id: "20260624-025",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：af_unix 處理 SIOCATMARK 邏輯錯誤，非串流 Socket 易受影響",
    summary: "本漏洞存在於 Linux 核心的 af_unix 網路功能中，涉及 SIOCATMARK 參數處理邏輯錯誤。SIOCATMARK 用於報告接收佇列是否處於緊急標記（urgent mark）狀態，特別針對 MSG_OOB 訊息。然而，在 AF_UNIX 介面中，MSG_OOB 僅支援 SOCK_STREAM 類型的串流 Socket。由於 SOCK_DGRAM 和 SOCK_SEQPACKET 等非串流 Socket 類型在 sendmsg() 和 recvmsg() 中會拒絕 MSG_OOB，因此它們不應支援 SIOCATMARK。漏洞的本質在於，在檢查接收佇列之前，系統未能正確判斷 Socket 類型，導致非串流 Socket 在執行 SIOCATMARK 時可能產生不當行為。修補建議要求在檢查接收佇列之前，應先判斷 Socket 類型，若為非串流 Socket，應直接返回 -EOPNOTSUPP 錯誤，而非進行後續檢查。建議使用者更新至修補後的 Linux 核心版本，以避免潛在的系統不穩定性或安全風險。",
    tags: ["Linux 核心", "af_unix", "SIOCATMARK", "MSG_OOB", "CVE-2026-52928", "Linux 漏洞"],
    title_en: "Linux Kernel Vulnerability: af_unix Handling of SIOCATMARK Logic Error Affects Non-Stream Sockets",
    summary_en: "This vulnerability resides in the af_unix networking feature of the Linux kernel, involving a logic error in the handling of the SIOCATMARK parameter. SIOCATMARK is used to report whether the receive queue is in an urgent mark status, specifically for MSG_OOB messages. However, in the AF_UNIX interface, MSG_OOB is only supported by SOCK_STREAM type stream sockets. Since non-stream socket types like SOCK_DGRAM and SOCK_SEQPACKET reject MSG_OOB in sendmsg() and recvmsg(), they should not support SIOCATMARK. The core of the vulnerability is that the system fails to correctly determine the socket type before checking the receive queue, potentially causing improper behavior when non-stream sockets execute SIOCATMARK. The patch suggests that before checking the receive queue, the socket type must first be determined. If it is a non-stream socket, the function should immediately return the -EOPNOTSUPP error, rather than proceeding with further checks. Users are advised to update to the patched Linux kernel version to prevent potential system instability or security risks.",
    tags_en: ["Linux Kernel", "af_unix", "SIOCATMARK", "MSG_OOB", "CVE-2026-52928", "Linux Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52928", lang: "EN" }
    ]
  },
  {
    id: "20260624-026",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 SCTP 漏洞：防止狀態回滾時的空指針解引用攻擊",
    summary: "本漏洞位於 Linux 核心的 SCTP 網路協定處理單元，涉及「流（stream）完全回滾被拒絕添加流狀態」的邏輯缺陷。當系統在 ADD_OUT_STREAMS 被拒絕時，SCTP 僅縮減佇列區塊並降低出流計數（outcnt），但會留下過時的移除流元數據（metadata）。這使得後續的重新添加操作可能會重用一個過時的擴展（ext），進而導致在排程器（scheduler）的 get 路徑中發生空指針解引用（null-pointer dereference）。此漏洞的修復方法是確保在回滾被拒絕的流時，其狀態必須像其他流大小調整一樣被徹底清除。修補建議是升級到包含修復邏輯的 Linux 核心版本。攻擊向量為網路（Network），權限要求為低（Low），修復難度為高（High）。",
    tags: ["Linux 核心", "SCTP", "空指針解引用", "CVE-2026-52929", "網路協定"],
    title_en: "Linux Kernel SCTP Vulnerability: Null Pointer Dereference Attack During State Rollback Prevention",
    summary_en: "This vulnerability resides in the SCTP network protocol handling unit within the Linux kernel, involving a logical flaw in 'stream complete rollback being rejected when adding stream state.' When the system rejects ADD_OUT_STREAMS, SCTP only shrinks the queue block and reduces the outcnt, but leaves behind outdated removed stream metadata. This allows subsequent re-addition operations to potentially reuse an outdated extension (ext), leading to a null-pointer dereference in the scheduler's get path. The fix requires ensuring that when a rollback is rejected, the stream's state is thoroughly cleared, similar to how other stream size adjustments are handled. The patch recommends upgrading to a Linux kernel version that includes the corrected logic. The attack vector is Network, the required privilege is Low, and the exploit complexity is High.",
    tags_en: ["Linux Kernel", "SCTP", "Null Pointer Dereference", "CVE-2026-52929", "Network Protocol"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52929", lang: "EN" }
    ]
  },
  {
    id: "20260624-027",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：IPC/shm 資源清理不完整，可能導致系統不穩定的安全問題",
    summary: "本漏洞涉及 Linux 核心的 IPC/shm 模組，具體問題點在於在處理孤立的共享記憶體 (shm) 清理時，`shm_nattch` 的更新與 `shm_may_destroy()` 的檢查流程存在不一致性。攻擊者可能利用此時機差，在未持有適當鎖定（如 `shm_perm.lock`）的情況下，執行 attach 路徑操作，導致系統未能正確決定孤立段是否已無用，進而造成資源管理上的缺陷。修補建議是將 `shm_may_destroy()` 的檢查邏輯移動到持有 `shm_perm.lock` 的範圍內，並在確認不再符合移除條件時釋放鎖定。系統管理員應立即更新至修補後的 Linux 核心版本，以確保資源清理的原子性和完整性。",
    tags: ["Linux 核心", "CVE-2026-52930", "IPC", "shm", "系統核心", "資源管理"],
    title_en: "Linux Kernel Vulnerability: Incomplete IPC/shm Resource Cleanup May Lead to System Instability",
    summary_en: "This vulnerability affects the Linux kernel's IPC/shm module. The specific issue lies in an inconsistency between the update of `shm_nattch` and the checking process of `shm_may_destroy()` when handling the cleanup of orphaned shared memory (shm). An attacker may exploit this race condition to perform attach path operations without holding the appropriate lock (such as `shm_perm.lock`), causing the system to incorrectly determine if the orphaned segment is obsolete, thereby leading to resource management flaws. The recommended fix is to move the `shm_may_destroy()` checking logic into the scope where `shm_perm.lock` is held, and to release the lock when it is confirmed that the segment no longer meets the removal criteria. System administrators should immediately update to the patched Linux kernel version to ensure the atomicity and integrity of resource cleanup.",
    tags_en: ["Linux Kernel", "CVE-2026-52930", "IPC", "shm", "Kernel", "Resource Management"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52930", lang: "EN" }
    ]
  },
  {
    id: "20260624-028",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：batman-adv 模組允許未初始化變數讀取，可能導致系統崩潰",
    summary: "本漏洞存在於 Linux 核心的 `batman-adv` 模組的 `tp_meter.c` 檔案中。當一個節點在進行 `tp_meter` 會話時，如果它目前扮演接收者（Receiver）角色，並接收到惡意的 ACK 封包，程式碼會嘗試讀取本應由發送者（Sender）角色專屬且未初始化的成員變數。這導致了未定義行為，並可能造成系統崩潰或資訊洩露。攻擊向量為網路（Network），攻擊複雜度低（Low），權限要求為普通使用者（None）。修補建議是透過在存取 `tp_vars` 的成員變數前，立即檢查其 `role` 是否為 `BATADV_TP_SENDER`，若非則應立即中止操作，以避免讀取未初始化的變數。建議使用者升級到包含修補程式的 Linux 核心版本。",
    tags: ["Linux 核心", "batman-adv", "CVE-2026-52931", "tp_meter", "網路堆疊", "核心漏洞"],
    title_en: "Linux Kernel Vulnerability: batman-adv Module Allows Uninitialized Variable Read, Potentially Causing System Crash",
    summary_en: "This vulnerability resides in the `tp_meter.c` file of the Linux kernel's `batman-adv` module. When a node is in a `tp_meter` session and is currently acting as a Receiver, receiving a malicious ACK packet, the code attempts to read a member variable that is exclusively intended for the Sender role and has not been initialized. This leads to undefined behavior and could potentially cause a system crash or information leakage. The attack vector is Network, the attack complexity is Low, and the required privileges are None. The suggested fix is to immediately check if the `role` is `BATADV_TP_SENDER` before accessing the `tp_vars` member variable; otherwise, the operation should be aborted immediately to prevent reading uninitialized variables. Users are advised to upgrade to a Linux kernel version containing the patch.",
    tags_en: ["Linux Kernel", "batman-adv", "CVE-2026-52931", "tp_meter", "Network Stack", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52931", lang: "EN" }
    ]
  },
  {
    id: "20260624-029",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：xfrm: ipcomp 錯誤導致資源洩漏，需更新核心版本修復",
    summary: "本漏洞涉及 Linux 核心的 `xfrm: ipcomp` 功能，問題點在於在處理 `aconmp` 錯誤時，未能正確釋放目標頁面（destination pages）的資源。這可能導致資源洩漏。根據提供的資訊，修復建議是將 `out_free_req` 標籤向上移動，確保在發生錯誤或成功時，分配給目標 SG list 的資源都能被釋放。受影響的程式檔案為 `net/xfrm/xfrm_ipcomp.c`。建議使用者應將 Linux 核心升級到修復版本，以避免潛在的資源洩漏風險。由於原文未提供具體的 CVE 編號或 CVSS 分數，建議使用者應參考官方的 Linux 核心更新公告進行修補。",
    tags: ["Linux 核心", "xfrm", "ipcomp", "資源洩漏", "CVE-2026-52932"],
    title_en: "Linux Kernel Vulnerability: xfrm: ipcomp Error Causes Resource Leakage, Requires Kernel Update for Fix",
    summary_en: "This vulnerability affects the `xfrm: ipcomp` functionality within the Linux kernel. The issue lies in the failure to correctly release resources for destination pages when handling `aconmp` errors. This may lead to resource leakage. According to the provided information, the suggested fix is to move the `out_free_req` label upwards to ensure that resources allocated to the destination SG list are released whether an error occurs or the operation succeeds. The affected source file is `net/xfrm/xfrm_ipcomp.c`. Users are advised to upgrade their Linux kernel to the patched version to prevent potential resource leakage risks. Since the original text did not provide a specific CVE ID or CVSS score, users should refer to official Linux kernel update announcements for patching.",
    tags_en: ["Linux Kernel", "xfrm", "ipcomp", "Resource Leakage", "CVE-2026-52932"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52932", lang: "EN" }
    ]
  },
  {
    id: "20260624-030",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 io_uring/poll 漏洞：簽名比較邏輯缺陷導致慢路徑無法觸發",
    summary: "本漏洞存在於 Linux 核心的 io_uring/poll 功能中，具體位於 io_poll_get_ownership() 函數。問題出在該函數使用有符號比較（signed comparison）來判斷 poll_refs 是否達到慢路徑（slowpath）的閾值。當 poll_refs 中設定了 IO_POLL_CANCEL_FLAG (BIT(31)) 時，該值在有符號算術中會變成負數，導致 `>= 128` 的比較永遠評估為 False，使得慢路徑無法正確被觸發。修復方法是將 atomic_read() 的結果強制轉換為無符號整數（unsigned int）再進行比較。此漏洞的攻擊向量為本地（L），權限為本地（L），影響嚴重性為高（H）。建議使用者應升級至修補了此簽名比較邏輯缺陷的 Linux 核心版本，以確保 slowpath 的正確執行。",
    tags: ["Linux 核心", "io_uring", "io_poll_get_ownership", "CVE-2026-52933", "signed comparison", "slowpath"],
    title_en: "Linux Kernel io_uring/poll Vulnerability: Signature Comparison Logic Flaw Prevents Slowpath Triggering",
    summary_en: "This vulnerability exists in the io_uring/poll functionality of the Linux kernel, specifically within the io_poll_get_ownership() function. The issue arises because this function uses signed comparison to determine if poll_refs has reached the slowpath threshold. When the IO_POLL_CANCEL_FLAG (BIT(31)) is set in poll_refs, this value becomes negative in signed arithmetic, causing the comparison `>= 128` to always evaluate to False, thus preventing the slowpath from being correctly triggered. The fix involves explicitly casting the result of atomic_read() to an unsigned integer before comparison. The attack vector is local (L), the required privilege is local (L), and the impact severity is high (H). Users are advised to upgrade to a Linux kernel version that has patched this signature comparison logic flaw to ensure correct slowpath execution.",
    tags_en: ["Linux Kernel", "io_uring", "io_poll_get_ownership", "CVE-2026-52933", "signed comparison", "slowpath"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52933", lang: "EN" }
    ]
  },
  {
    id: "20260624-031",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：batman-adv 處理 TVLV 封包時，因尺寸計算溢位導致的記憶體寫入錯誤（CVE-2026-52934）",
    summary: "本漏洞存在於 Linux 核心的 `batman-adv` 模組中，具體為 `batadv_tvlv_container_ogm_append()` 函數。當該函數從 `tvlv.container_list` 建構 TVLV 封包區段時，會呼叫 `batadv_tvlv_container_list_size()` 來計算總尺寸。問題出在 `batadv_tvlv_container_list_size()` 的回傳型別和累加器皆為 `u16`。若累積的尺寸超過 `U16_MAX`，會發生整數溢位（wrap around），導致後續在 `batadv_tvlv_container_ogm_append()` 中的記憶體分配尺寸不足。隨後執行 `memcpy` 複製操作時，將會寫入分配緩衝區的邊界之外，造成核心記憶體損壞。修補建議是將 `batadv_tvlv_container_list_size()` 的回傳型別擴展為 `size_t`，並在 `batadv_tvlv_container_ogm_append()` 中增加檢查，確保計算的長度未超過 `U16_MAX`，否則應直接退出，模擬分配失敗。",
    tags: ["Linux 核心", "batman-adv", "TVLV", "u16", "記憶體溢位", "CVE-2026-52934"],
    title_en: "Linux Kernel: Memory Write Error in batman-adv when Handling TVLV Packets Due to Size Calculation Overflow (CVE-2026-52934)",
    summary_en: "This vulnerability exists in the `batman-adv` module of the Linux kernel, specifically within the `batadv_tvlv_container_ogm_append()` function. When this function constructs a TVLV packet segment from `tvlv.container_list`, it calls `batadv_tvlv_container_list_size()` to calculate the total size. The issue is that both the return type and the accumulator in `batadv_tvlv_container_list_size()` are `u16`. If the accumulated size exceeds `U16_MAX`, an integer overflow (wrap around) occurs, leading to an insufficient memory allocation size in `batadv_tvlv_container_ogm_append()`. Subsequently, when the `memcpy` copy operation is executed, it writes outside the boundaries of the allocated buffer, causing kernel memory corruption. The suggested fix is to expand the return type of `batadv_tvlv_container_list_size()` to `size_t`, and to add a check in `batadv_tvlv_container_ogm_append()` to ensure that the calculated length does not exceed `U16_MAX`; otherwise, it should exit immediately, simulating allocation failure.",
    tags_en: ["Linux Kernel", "batman-adv", "TVLV", "u16", "Memory Overflow", "CVE-2026-52934"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52934", lang: "EN" }
    ]
  },
  {
    id: "20260624-032",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 xfrm/espintcp 模組的狀態重用漏洞，防止越界讀取",
    summary: "本漏洞位於 Linux 核心的 xfrm/espintcp 模組，涉及 `espintcp_sendmsg()` 函數的狀態管理問題。當 `espintcp` 保持一個正在進行的部分傳輸（partial send）狀態時，如果呼叫者在舊的傳輸尚未完成前，就重新初始化或重用傳送訊息結構（`emsg->skmsg`），可能會導致問題。具體來說，`espintcp_push_msgs()` 即使成功返回，但如果前一個部分傳送狀態仍未完成，後續的 `espintcp_sendmsg()` 仍會重用舊的上下文狀態（`ctx->partial`）。這可能導致新的 `sk_msg` 結構帶有過時的偏移量（stale offset），進而造成傳送路徑發生越界讀取（out-of-bounds read）。修補建議是，當 `espintcp_push_msgs()` 返回時，如果 `emsg->len` 仍有值，新的傳送操作應直接失敗，而不是覆蓋正在進行的部分傳送狀態，以確保記憶體安全。",
    tags: ["Linux 核心", "xfrm", "espintcp", "記憶體安全", "越界讀取", "Linux 核心修補"],
    title_en: "Linux Kernel Patch: Fixes State Reuse Vulnerability in xfrm/espintcp Module to Prevent Out-of-Bounds Read",
    summary_en: "This vulnerability resides in the xfrm/espintcp modules of the Linux kernel, concerning state management issues within the `espintcp_sendmsg()` function. When `espintcp` maintains a partial send state, if the caller reinitializes or reuses the send message structure (`emsg->skmsg`) before the previous transmission is complete, it can lead to issues. Specifically, even if `espintcp_push_msgs()` returns successfully, if the previous partial send state has not been completed, subsequent calls to `espintcp_sendmsg()` may reuse the old context state (`ctx->partial`). This can result in a new `sk_msg` structure containing a stale offset, leading to an out-of-bounds read in the send path. The suggested patch is that when `espintcp_push_msgs()` returns, if `emsg->len` still has a value, the new send operation should fail immediately rather than overwriting the ongoing partial send state, thereby ensuring memory safety.",
    tags_en: ["Linux Kernel", "xfrm", "espintcp", "Memory Safety", "Out-of-Bounds Read", "Linux Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52935", lang: "EN" }
    ]
  },
  {
    id: "20260624-033",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全公告：修復 jitterentropy 模組的 Spinlock 競態條件漏洞",
    summary: "本漏洞涉及 Linux 核心的 `crypto: jitterentropy` 模組。該模組在處理熵收集和 SHA3 條件化時，原先使用 spinlock 保護共享狀態。當多個讀取器（readers）同時存取時，如果其中一個路徑執行耗時的熵收集，其他等待的讀取器會陷入忙等（spinning），導致系統性能下降甚至停滯。修復建議是將 `rng->jent_lock` 從 spinlock 更換為 mutex。這樣可以確保在發生爭用時，等待的讀取器會進入睡眠狀態（sleep），而不是持續忙等，從而避免非搶佔式鎖定（non-preemptible lock hold）導致的系統資源阻塞。建議系統管理員應更新至修復版本，以避免潛在的性能瓶頸與穩定性問題。",
    tags: ["Linux 核心", "jitterentropy", "CVE-2026-52936", "spinlock", "mutex", "熵收集"],
    title_en: "Linux Kernel Security Advisory: Fix for Spinlock Race Condition Vulnerability in jitterentropy Module",
    summary_en: "This vulnerability affects the `crypto: jitterentropy` module in the Linux kernel. This module previously used a spinlock to protect shared state when handling entropy collection and SHA3 conditioning. When multiple readers simultaneously accessed the module, if one path executed time-consuming entropy collection, other waiting readers would enter a busy-wait (spinning) state, leading to system performance degradation or even stagnation. The recommended fix is to replace `rng->jent_lock` from a spinlock to a mutex. This ensures that when contention occurs, waiting readers enter a sleep state rather than continuously busy-waiting, thereby preventing system resource blockage caused by non-preemptible lock holding. System administrators are advised to update to the patched version to avoid potential performance bottlenecks and stability issues.",
    tags_en: ["Linux Kernel", "jitterentropy", "CVE-2026-52936", "spinlock", "mutex", "entropy collection"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52936", lang: "EN" }
    ]
  },
  {
    id: "20260624-034",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：tap_ioctl() 堆疊資訊洩漏，可能繞過 KASLR",
    summary: "本漏洞存在於 Linux 核心的 `tap_ioctl()` 函式中，具體發生在 SIOCGIFHWADDR 路徑。該函式在將未初始化堆疊結構 `sockaddr_storage` 的 16 位元組資料複製到使用者空間時，僅寫入必要的 MAC 位址資訊，導致後續的 8 位元組堆疊資料未被初始化，從而洩漏了核心堆疊內容。攻擊者可以利用此漏洞，透過 macvtap chardev 裝置，獲取核心的 `.text` 和直接映射指標（direct-map pointers），從而繞過核心地址空間佈局隨機化（KASLR）機制。修補建議是初始化堆疊變數（ss）以避免未初始化資料洩漏。受影響的產品為 Linux 核心，建議升級至修補版本，以確保系統安全。",
    tags: ["Linux 核心", "tap_ioctl", "SIOCGIFHWADDR", "KASLR", "堆疊資訊洩漏", "Linux 核心漏洞"],
    title_en: "Linux Kernel Vulnerability: tap_ioctl() Stack Information Leakage May Bypass KASLR",
    summary_en: "This vulnerability exists in the `tap_ioctl()` function of the Linux kernel, specifically occurring via the SIOCGIFHWADDR path. The function only writes the necessary MAC address information when copying 16 bytes of the uninitialized stack structure `sockaddr_storage` to user space, leaving the subsequent 8 bytes of stack data uninitialized. This results in the leakage of core stack content. An attacker can exploit this vulnerability using the macvtap chardev device to obtain the kernel's `.text` and direct-map pointers, thereby bypassing the Kernel Address Space Layout Randomization (KASLR) mechanism. The suggested fix is to initialize stack variables (ss) to prevent uninitialized data leakage. The affected product is the Linux kernel; users are advised to upgrade to a patched version to ensure system security.",
    tags_en: ["Linux Kernel", "tap_ioctl", "SIOCGIFHWADDR", "KASLR", "Stack Information Leakage", "Linux Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52937", lang: "EN" }
    ]
  },
  {
    id: "20260624-035",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 bpf_sk_storage_clone 等函數中的空指針解引用漏洞",
    summary: "本漏洞位於 Linux 核心的 BPF (Berkeley Packet Filter) 相關元件，具體影響 bpf_sk_storage_clone 和 bpf_sk_storage_diag_put_all 等函數。問題出在 bpf_selem_unlink_nofail() 在移除 selem 時將 SDATA(selem)->smap 設為 NULL，但隨後在 bpf_sk_storage_clone() 中，一個並發的 RCU reader 可能會觀察到 selem 仍處於列表中，但其 smap 已為 NULL，從而導致空指針解引用（NULL pointer dereference）的一般保護故障。修補建議是為 bpf_sk_storage_clone() 和 bpf_sk_storage_diag_put_all() 添加 NULL 檢查，並重構相關函數，確保在操作 smap 時的安全性。系統管理員應立即更新至修補後的 Linux 核心版本，以防止潛在的崩潰或服務中斷。",
    tags: ["Linux 核心", "BPF", "NULL pointer dereference", "bpf_sk_storage_clone", "RCU", "Linux 核心修補"],
    title_en: "Linux Kernel Patch: Fixes Null Pointer Dereference Vulnerability in Functions like bpf_sk_storage_clone",
    summary_en: "This vulnerability resides in the BPF (Berkeley Packet Filter) related components of the Linux kernel, specifically affecting functions such as bpf_sk_storage_clone and bpf_sk_storage_diag_put_all. The issue arises because bpf_selem_unlink_nofail() sets SDATA(selem)->smap to NULL when removing a selem. Subsequently, within bpf_sk_storage_clone(), a concurrent RCU reader might observe that the selem is still in the list, but its smap has been set to NULL, leading to a general protection fault due to null pointer dereference. The suggested fix is to add NULL checks in bpf_sk_storage_clone() and bpf_sk_storage_diag_put_all(), and to refactor the related functions to ensure safety when operating on smap. System administrators should immediately update to the patched Linux kernel version to prevent potential crashes or service interruptions.",
    tags_en: ["Linux Kernel", "BPF", "NULL pointer dereference", "bpf_sk_storage_clone", "RCU", "Linux Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52938", lang: "EN" }
    ]
  },
  {
    id: "20260624-036",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：未經授權的 AF_RDS sendmsg() 可導致 NULL 指標解引用，影響 rds_ib_send_cqe_handler()",
    summary: "本漏洞存在於 Linux 核心的網路功能 net/rds，具體影響 rds_ib_send_cqe_handler() 函式。攻擊向量為未授權的 AF_RDS sendmsg() 呼叫，特別是針對活躍的 RDS/IB 連線，且傳送原子訊息 (atomic cmsg)。在支援原生遮罩原子操作 (masked atomics) 的硬體（如 mlx4, mlx5）上，無需額外設定即可觸發。問題根源在於 rds_ib_send_unmap_op() 僅處理非遮罩操作碼，導致遮罩原子完成時，程式流程會進入預設路徑，返回 `rm == NULL`，但 `send->s_op` 仍被設定。隨後，`rds_ib_send_cqe_handler()` 嘗試解引用這個 NULL 的 `rm` 指標，在 softirq 上下文中引發 NULL 指標解引用 (NULL deref)，可能導致系統崩潰或核心恐慌。修補建議是修改 rds_ib_send_unmap_op()，使其能像處理非遮罩操作碼一樣，正確處理遮罩原子操作碼，並將其映射到相同的 `rds_message.atomic` 聯合成員，確保資料結構的完整性。",
    tags: ["Linux 核心", "CVE-2026-52939", "net/rds", "AF_RDS", "NULL 指標解引用", "softirq"],
    title_en: "Linux Kernel Vulnerability: Unauthorized AF_RDS sendmsg() Can Cause NULL Pointer Dereference, Affecting rds_ib_send_cqe_handler()",
    summary_en: "This vulnerability exists in the Linux kernel's networking feature net/rds, specifically affecting the rds_ib_send_cqe_handler() function. The attack vector is an unauthorized AF_RDS sendmsg() call, particularly targeting active RDS/IB connections, and transmitting atomic messages (atomic cmsg). It can be triggered on hardware supporting native masked atomic operations (such as mlx4, mlx5) without additional configuration. The root cause is that rds_ib_send_unmap_op() only handles non-masked opcodes. This causes the program flow to enter the default path during a masked atomic completion, returning `rm == NULL`, but `send->s_op` is still set. Subsequently, rds_ib_send_cqe_handler() attempts to dereference this NULL `rm` pointer, triggering a NULL pointer dereference (NULL deref) in the softirq context, which may lead to a system crash or kernel panic. The suggested fix is to modify rds_ib_send_unmap_op() so that it correctly handles masked atomic opcodes, similar to how it handles non-masked opcodes, and maps them to the same `rds_message.atomic` member, ensuring data structure integrity.",
    tags_en: ["Linux Kernel", "CVE-2026-52939", "net/rds", "AF_RDS", "NULL Pointer Dereference", "softirq"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52939", lang: "EN" }
    ]
  },
  {
    id: "20260624-037",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：tun 模組未正確清零 vnet header，可能洩漏 14 位元組堆疊資料",
    summary: "本漏洞存在於 Linux 核心的 tun 模組，具體發生在 `tun_put_user()` 函式中。當處理非隧道（non-tunnel）的 skb 時，`virtio_net_hdr_tnl_from_skb()` 僅初始化前 10 位元組，導致後續的 14 位元組（包含 num_buffers 和 hash/tunnel 欄位）保留為堆疊垃圾（stack garbage）。攻擊者若能利用 `TUNSETVNETHDRSZ` 設定 vnet header 大小為 24 位元組，可導致 `__tun_vnet_hdr_put()` 將這 24 位元組不完全初始化的結構體複製到使用者空間，從而洩漏 14 位元組的核心堆疊資料。此漏洞可由未授權使用者利用，建議系統管理員應立即更新 Linux 核心至修復版本，以確保 `tun_put_user()` 能夠像 `tun_get_user()` 一樣，在宣告後完整清零整個 header 結構體。",
    tags: ["Linux 核心", "tun 模組", "CVE-2026-52940", "vnet header", "堆疊資料洩漏", "kernel"],
    title_en: "Linux Kernel Vulnerability: tun Module Fails to Zeroize vnet Header, Potentially Leaking 14 Bytes of Stack Data",
    summary_en: "This vulnerability exists in the Linux kernel's tun module, specifically within the `tun_put_user()` function. When processing non-tunnel skbs, `virtio_net_hdr_tnl_from_skb()` only initializes the first 10 bytes, causing the subsequent 14 bytes (including num_buffers and hash/tunnel fields) to retain stack garbage. An attacker who can utilize `TUNSETVNETHDRSZ` to set the vnet header size to 24 bytes can cause `__tun_vnet_hdr_put()` to copy this incompletely initialized structure into user space, thereby leaking 14 bytes of kernel stack data. This vulnerability can be exploited by unauthorized users. System administrators are advised to immediately update the Linux kernel to a patched version to ensure that `tun_put_user()` fully zeroizes the entire header structure after declaration, similar to how `tun_get_user()` does.",
    tags_en: ["Linux Kernel", "tun module", "CVE-2026-52940", "vnet header", "stack data leakage", "kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52940", lang: "EN" }
    ]
  },
  {
    id: "20260624-038",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 smc_msg_event tracepoint 在 SMC-D 模式下可能導致的 NULL 指標解引用漏洞",
    summary: "本漏洞存在於 Linux 核心的網路堆疊中，具體影響於 `net/smc` 模組的 `smc_msg_event` tracepoint。該 tracepoint 類別被 `smc_tx_sendmsg` 和 `smc_rx_recvmsg` 共用，在處理 SMC-D（System Management Controller - Device）模式時，會無條件地解引用 `smc->conn.lnk` 指標。當啟用此 tracepoint 並在 SMC-D socket 上執行首次 `sendmsg()` 或 `recvmsg()` 操作時，會導致系統崩潰（General Protection Fault 或 KASAN null-ptr-deref）。雖然啟用 tracepoint 需要 root 權限，但觸發該漏洞的 `socket(AF_SMC, ...)` 呼叫本身卻不需要特權，使得攻擊面擴大。修補建議是修改程式碼，當處理 SMC-D 時，應記錄空設備名稱，而非嘗試解引用 NULL 指標。此修補屬於核心元件層面的安全強化。",
    tags: ["Linux 核心", "smc_msg_event", "NULL 指標解引用", "SMC-D", "net/smc", "Linux 漏洞"],
    title_en: "Linux Kernel Patch: Fixes NULL Pointer Dereference Vulnerability in smc_msg_event Tracepoint under SMC-D Mode",
    summary_en: "This vulnerability exists in the Linux kernel's networking stack, specifically affecting the `smc_msg_event` tracepoint within the `net/smc` module. This tracepoint class is shared by `smc_tx_sendmsg` and `smc_rx_recvmsg`. When processing SMC-D (System Management Controller - Device) mode, it unconditionally dereferences the `smc->conn.lnk` pointer. Enabling this tracepoint and performing the first `sendmsg()` or `recvmsg()` operation on an SMC-D socket causes a system crash (General Protection Fault or KASAN null-ptr-deref). Although enabling the tracepoint requires root privileges, the `socket(AF_SMC, ...)` call itself does not require elevated privileges, expanding the attack surface. The suggested fix is to modify the code to record an empty device name when handling SMC-D, rather than attempting to dereference a NULL pointer. This patch represents a security enhancement at the core component level.",
    tags_en: ["Linux Kernel", "smc_msg_event", "NULL Pointer Dereference", "SMC-D", "net/smc", "Linux Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52941", lang: "EN" }
    ]
  },
  {
    id: "20260624-039",
    trackers: ["security"],
    category: "法規與標準",
    title: "金管會發布PQC遷移指引：要求金融業提升密碼治理，應對量子運算風險",
    summary: "鑑於量子運算技術的快速發展，金管會發布《金融業後量子密碼（PQC）遷移參考指引》，要求金融機構提前規劃應對量子威脅。指引指出，現行公鑰密碼在未來可能被破解，特別點名了「先攔截、日後解密」（HNDL）和「現在信任、稍後偽造」（TNFL）兩類量子攻擊模式。金管會強調，PQC遷移已超越單純的系統升級，必須提升至董事會層級的企業治理議題。金融機構需建立密碼技術清單（CBOM），並將「加密敏捷性」作為核心能力，以確保系統能快速調整加密演算法。此外，指引要求將PQC準備度納入供應鏈管理，並建議建立跨機構的共同遷移路線圖，建議從2026年至2035年分階段推動遷移作業。",
    tags: ["金管會", "PQC", "後量子密碼", "加密敏捷性", "金融業", "量子運算"],
    title_en: "Financial Regulatory Authority Issues PQC Migration Guidelines: Requiring Financial Institutions to Enhance Cryptographic Governance to Address Quantum Computing Risks",
    summary_en: "Given the rapid development of quantum computing technology, the Financial Regulatory Authority (FRA) has issued the 'Reference Guidelines for Post-Quantum Cryptography (PQC) Migration for Financial Institutions,' requiring financial institutions to proactively plan for quantum threats. The guidelines point out that current public-key cryptography may be vulnerable to cracking in the future, specifically naming two quantum attack models: 'Harvest Now, Decrypt Later' (HNDL) and 'Store Now, Forge Later' (TNFL). The FRA emphasizes that PQC migration is beyond a simple system upgrade; it must be elevated to an enterprise governance issue at the board level. Financial institutions must establish a Cryptographic Bill of Materials (CBOM) and make 'crypto-agility' a core capability to ensure systems can rapidly adjust cryptographic algorithms. Furthermore, the guidelines mandate incorporating PQC readiness into supply chain management and recommend establishing a cross-industry migration roadmap, suggesting phased migration efforts from 2026 to 2035.",
    tags_en: ["Financial Regulatory Authority", "PQC", "Post-Quantum Cryptography", "Crypto-agility", "Financial Industry", "Quantum Computing"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176824", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "QNAP修補14項漏洞：高風險堆疊溢位與指令注入威脅NAS與視訊監控平臺",
    summary: "儲存設備廠商QNAP於6月17日發布資安公告，修補了旗下NAS作業系統（包括QTS、QuTS hero、QuTS cloud）與QVP視訊監控平臺共計14項漏洞。其中，最嚴重的漏洞為CVE-2026-26240與CVE-2026-26241，兩者均達到CVSS 9.1分，且與檔案名稱處理機制有關，可能導致堆疊緩衝區溢位，進而造成系統服務中斷。本次修補的漏洞類型以記憶體安全問題為主，包含5項堆疊緩衝區溢位，以及3項指令注入漏洞，攻擊者可能利用這些漏洞遠端執行系統指令。建議用戶應立即升級至QTS 5.2.9、QuTS hero h5.2.9、QuTS cloud c5.2.9與QVP 2.8.0以上版本，以降低遭受攻擊的風險。",
    tags: ["QNAP", "CVE-2026-26240", "CVE-2026-26241", "堆疊緩衝區溢位", "指令注入", "NAS"],
    title_en: "QNAP Patches 14 Vulnerabilities: High-Risk Stack Overflow and Command Injection Threaten NAS and Surveillance Platforms",
    summary_en: "Storage device manufacturer QNAP issued a security advisory on June 17, patching a total of 14 vulnerabilities across its NAS operating systems (including QTS, QuTS hero, and QuTS cloud) and the QVP surveillance platform. The most severe vulnerabilities are CVE-2026-26240 and CVE-2026-26241, both scoring CVSS 9.1. These vulnerabilities are related to file name handling mechanisms and could potentially lead to stack buffer overflows, resulting in system service disruption. The vulnerabilities patched in this release primarily involve memory safety issues, including 5 stack buffer overflows and 3 command injection flaws. Attackers could exploit these vulnerabilities to remotely execute system commands. Users are advised to immediately upgrade to QTS 5.2.9, QuTS hero h5.2.9, QuTS cloud c5.2.9, and QVP 2.8.0 or higher to mitigate the risk of attack.",
    tags_en: ["QNAP", "CVE-2026-26240", "CVE-2026-26241", "Stack Buffer Overflow", "Command Injection", "NAS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176830", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露三星、LG智慧電視App潛藏風險：IP位址可能被用於代理伺服器，淪為網路跳板",
    summary: "資安研究人員發現，許多智慧電視App，特別是針對三星（Tizen）和LG（webOS）平台的應用程式，可能透過內嵌的SDK，將用戶的住家IP位址用於代理伺服器（Proxy）。研究分析指出，在6,038個App套件中，有超過2,000款包含此類SDK。這些App常以遊戲或工具等幌子誘騙用戶下載，且同意條款往往隱藏在安裝流程中。這類風險的實務影響極大，一旦IP位址被出售或出借，電視不僅可能成為導引流量的代理伺服器，更可能成為外部駭客存取家中其他連網設備（如路由器、NAS、攝影機）的跳板。雖然部分代理伺服器供應商如Bright Data和Honeygain聲稱有KYC和嚴格審查機制，但研究人員仍警告，由於平台缺乏嚴格的審查標準，用戶的私有網路安全仍面臨重大隱憂。",
    tags: ["智慧電視", "IP位址", "代理伺服器", "SDK", "三星", "LG"],
    title_en: "Research Reveals Potential Risks in Samsung and LG Smart TV Apps: IP Addresses May Be Used for Proxy Servers, Becoming Network Jumpboards",
    summary_en: "Cybersecurity researchers have discovered that many smart TV applications, particularly those for Samsung (Tizen) and LG (webOS) platforms, may use embedded SDKs to utilize users' home IP addresses for proxy servers. The research analysis indicates that over 2,000 out of 6,038 analyzed app packages contain such SDKs. These apps often trick users into downloading them under the guise of games or utilities, and the agreement terms are frequently hidden within the installation process. The practical impact of this risk is significant; if the IP address is sold or leased, the TV could not only become a proxy server for routing traffic but could also become a jumpboard for external hackers to access other connected devices in the home (such as routers, NAS, or cameras). Although some proxy server providers, such as Bright Data and Honeygain, claim to have KYC and strict screening mechanisms, researchers warn that due to the platforms' lack of rigorous vetting standards, users' private network security still faces major concerns.",
    tags_en: ["Smart TV", "IP Address", "Proxy Server", "SDK", "Samsung", "LG"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176829", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "2026年FIFA世界盃面臨多層次網路威脅：從釣魚到IT/OT橫向移動風險",
    summary: "隨著2026年FIFA世界盃即將舉行，美國、加拿大和墨西哥等主辦地區的網路威脅環境日益複雜。Flashpoint分析指出，攻擊者動機主要圍繞金錢和數據，威脅活動包括票務詐騙、釣魚攻擊、勒索軟體、DDoS攻擊，以及針對公共服務系統的漏洞利用。詐騙者正在建立大量冒充FIFA相關服務的假域網，旨在竊取用戶憑證和個人資訊。此外，威脅行為者還可能利用AI增強詐騙活動、操縱博彩和租賃市場。專家警告，組織最大的盲點是IT與OT（營運技術）之間的未受控網路連接，這使得攻擊者可以輕易進行橫向移動。修補建議包括：在活動前建立「正常」行為基線，利用蜜罐模擬場館基礎設施，並實施即時行為遙測，以便在攻擊發生前幾分鐘發現異常行為。同時，應積極進行事前威脅狩獵，並審慎管理供應鏈風險，避免信任的第三方供應商留下持久的後門。",
    tags: ["FIFA 2026", "網路威脅", "釣魚攻擊", "IT/OT 安全", "供應鏈風險", "社會工程學"],
    title_en: "2026 FIFA World Cup Faces Multi-Layered Cyber Threats: From Phishing to IT/OT Lateral Movement Risks",
    summary_en: "With the 2026 FIFA World Cup approaching, the cyber threat landscape in the host regions—including the United States, Canada, and Mexico—is becoming increasingly complex. Flashpoint analysis indicates that attacker motivations are primarily centered on financial gain and data theft. Threat activities include ticketing fraud, phishing attacks, ransomware, DDoS attacks, and the exploitation of vulnerabilities in public service systems. Scammers are establishing numerous fake domains impersonating FIFA-related services, aiming to steal user credentials and personal information. Furthermore, threat actors may leverage AI to enhance fraudulent activities, and manipulate betting and rental markets. Experts warn that an organization's biggest blind spot is uncontrolled network connectivity between IT and OT (Operational Technology), which allows attackers to easily perform lateral movement. Remediation recommendations include: establishing a 'normal' behavior baseline before the event, using honeypots to simulate venue infrastructure, and implementing real-time behavioral telemetry to detect anomalies within minutes of an attack occurring. Concurrently, proactive threat hunting and careful management of supply chain risks are necessary to prevent trusted third-party vendors from leaving persistent backdoors.",
    tags_en: ["FIFA 2026", "Cyber Threats", "Phishing Attacks", "IT/OT Security", "Supply Chain Risk", "Social Engineering"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/2026-fifa-world-cup-faces-surge-cyber-threats", lang: "EN" }
    ]
  },
  {
    id: "20260624-043",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 macOS XPC 服務漏洞：標準用戶可禁用 EDR/MDM 等安全工具",
    summary: "研究人員發現一種新型的 macOS 權限提升技術，允許標準權限用戶在無需管理員密碼或核心漏洞的情況下，禁用企業級安全工具和調用特權功能。該技術利用了 macOS 建立和驗證應用程式信任資訊的方式。攻擊者可以偽裝受信任的應用程式元件，執行本應僅供特權程序執行的操作。核心問題在於 macOS 儲存和重複使用應用程式的 CDHash（加密指紋）時的缺陷：一旦快取，系統會持續信任該應用程式，即使其元件被修改。這使得攻擊者可以注入惡意程式碼到受信任應用程式的 NIB 文件中，欺騙系統執行特權指令。研究團隊利用此漏洞成功禁用 CrowdStrike Falcon EDR 和 Kandji MDM 等安全工具。雖然 Iru Inc. 已針對 Kandji Agent 釋出修補版本，且 CrowdStrike 也已修復並增加偵測機制，但該漏洞的根本問題存在於 macOS 系統本身，影響範圍廣泛，建議開發者應審查並加強使用 XPC 服務的驗證邏輯，並實施廠商層面的緩解措施。",
    tags: ["macOS", "XPC", "權限提升", "CDHash", "EDR", "MDM", "CVE-2026-39118"],
    title_en: "Research Uncovers macOS XPC Service Vulnerability: Standard Users Can Disable Security Tools like EDR/MDM",
    summary_en: "Researchers discovered a novel macOS privilege escalation technique that allows standard-privilege users to disable enterprise-grade security tools and invoke privileged functions without needing administrator passwords or core vulnerabilities. The technique exploits how macOS establishes and validates application trust information. Attackers can impersonate trusted application components to execute operations that should only be performed by privileged processes. The core issue lies in a flaw in how macOS stores and reuses the CDHash (cryptographic fingerprint) of applications: once cached, the system continues to trust the application even if its components are modified. This allows attackers to inject malicious code into the NIB file of a trusted application, deceiving the system into executing privileged instructions. The research team successfully used this vulnerability to disable security tools such as CrowdStrike Falcon EDR and Kandji MDM. Although Iru Inc. has released a patched version for Kandji Agent, and CrowdStrike has also patched and enhanced detection mechanisms, the fundamental problem resides within the macOS system itself, affecting a wide range of applications. Developers are advised to review and strengthen the validation logic used for XPC services, and vendors should implement mitigation measures at the vendor level.",
    tags_en: ["macOS", "XPC", "Privilege Escalation", "CDHash", "EDR", "MDM", "CVE-2026-39118"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/apple-macos-security-gap-users-disable-security-tools", lang: "EN" }
    ]
  },
  {
    id: "20260624-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "沙烏地租車商 Budget Saudi 行動App遭非法存取，專家警示行動端資安防護落後",
    summary: "沙烏地阿拉伯租車龍頭 Budget Saudi 於 6 月 9 日在證交所揭露，其行動應用程式曾遭未經授權的非法存取。公司強調未涉及金融或銀行資料，並已通報主管機關。資安業者 iConnect ITBS 隨後分析，指出此類事件的風險點在於行動 App 的資安防護未能跟上業務發展。主要技術漏洞包括：第一，行動 App 存取後端系統時，原有資安防線無法有效監控；第二，雖然有 MFA 選項，但未強制執行，導致帳密填充攻擊（Credential Stuffing）風險高；第三，API 回傳資訊缺乏權限控管與過濾，容易發生列舉攻擊（Enumeration），未落實最小揭露原則。此外，許多企業在日誌蒐集上，可能缺乏 API 閘道日誌，形成監控盲點。建議開發思維應預設帳密已外洩，並強化 API 的權限控制與日誌監控。",
    tags: ["Budget Saudi", "行動App安全", "Credential Stuffing", "API 安全", "最小揭露", "資安事件"],
    title_en: "Budget Saudi Mobile App Suffers Unauthorized Access; Experts Warn of Lagging Mobile Security Defenses",
    summary_en: "Saudi Arabian car rental leader Budget Saudi disclosed on June 9 that its mobile application was subjected to unauthorized access. The company emphasized that no financial or banking data was involved and that relevant authorities have been notified. Cybersecurity firm iConnect ITBS subsequently analyzed the incident, pointing out that the risk lies in mobile app security defenses failing to keep pace with business development. Key technical vulnerabilities identified include: First, the existing security defenses could not effectively monitor the mobile app's access to backend systems; second, although an MFA option exists, it is not mandatory, leading to a high risk of Credential Stuffing attacks; and third, the API response information lacks proper authorization control and filtering, making it susceptible to Enumeration attacks and failing to implement the principle of least privilege. Furthermore, many enterprises may lack API gateway logging for log collection, creating monitoring blind spots. It is recommended that development practices assume credentials have already been leaked, and that API authorization control and log monitoring be strengthened.",
    tags_en: ["Budget Saudi", "Mobile App Security", "Credential Stuffing", "API Security", "Least Privilege", "Cybersecurity Incident"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176803", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟宣布瓦解 StealC 與 Amadey 資訊竊取工具，阻止網路犯罪集團獲取企業憑證",
    summary: "資訊竊取程式（Infostealers）是網路犯罪生態系統中最普遍且影響深遠的威脅。這些惡意軟體會靜默地竊取密碼、Cookie 和會話 Token，若未被緩解，單一設備的感染可能演變成企業風險，甚至讓攻擊者繞過多因素驗證（MFA）。文章指出，StealC 是一款收集瀏覽器、加密貨幣錢包和電子郵件等敏感資料的惡意軟體服務（MaaS），而 Amadey 則是用於傳遞 StealC 等惡意軟體的載入器（Loader）。2026 年 6 月 24 日，微軟數位犯罪單位（DCU）與歐洲刑警組織（Europol）合作，成功行動瓦解了 StealC 和 Amadey 的基礎設施，共識別並關閉了超過 200 個惡意 C2 網域和 IP。微軟利用包括 Copilot 在內的工具進行分析，成功從惡意二進位檔中識別出硬編碼的 C2 伺服器。這場行動強調了身份保護和憑證衛生對於防禦企業入侵的重要性。",
    tags: ["Infostealers", "StealC", "Amadey", "憑證竊取", "MaaS", "C2", "微軟"],
    title_en: "Microsoft announces the dismantling of StealC and Amadey information theft tools, preventing cybercrime groups from obtaining corporate credentials",
    summary_en: "Information stealers (Infostealers) are the most common and far-reaching threat in the cybercrime ecosystem. These malicious programs silently steal passwords, cookies, and session tokens. If left unmitigated, a single device infection can escalate into an enterprise risk, even allowing attackers to bypass Multi-Factor Authentication (MFA). The article notes that StealC is a malicious as-a-service (MaaS) designed to collect sensitive data such as browsers, cryptocurrency wallets, and emails, while Amadey is a loader used to deliver malicious software like StealC. On June 24, 2026, Microsoft's Digital Crime Unit (DCU), in collaboration with Europol, successfully dismantled the infrastructure of StealC and Amadey, identifying and shutting down over 200 malicious C2 domains and IPs. Microsoft utilized tools including Copilot for analysis, successfully identifying hardcoded C2 servers from malicious binaries. This operation underscores the importance of identity protection and credential hygiene for defending against enterprise intrusions.",
    tags_en: ["Infostealers", "StealC", "Amadey", "Credential Theft", "MaaS", "C2", "Microsoft"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/24/stealc-and-amadey-breaking-down-infostealers-and-the-cybercrime-services-that-deliver-them", lang: "EN" }
    ]
  },
  {
    id: "20260624-046",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Lantronix EDS5000設備存在嚴重注入漏洞，攻擊者已在野外利用",
    summary: "美國網路安全與基礎設施安全局（CISA）警告，Lantronix EDS5000系列設備存在一個關鍵的程式碼注入漏洞（CVE-2025-67038），CVSS評分為9.8。此漏洞源於HTTP RPC模組在用戶認證失敗時執行日誌寫入功能，由於未對用戶名參數進行輸入清理，攻擊者可透過注入任意作業系統指令，以root權限執行惡意指令。該漏洞最早於2026年4月被觀察到在野外被利用，甚至在官方修補前就已遭到攻擊。此外，文章也提及Ubiquiti UniFi OS存在三個高嚴重性漏洞（CVE-2026-34908, CVE-2026-34909, CVE-2026-34910），攻擊者可利用這些漏洞進行遠端代碼執行和橫向移動。建議受影響組織立即應用修補程式，並實施網路分段、更換預設密碼，以降低被攻擊風險。",
    tags: ["CISA", "Lantronix", "CVE-2025-67038", "程式碼注入", "OT/ICS", "網路安全"],
    title_en: "CISA Warns: Lantronix EDS5000 Devices Have Critical Injection Vulnerability Exploited in the Wild",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) has warned that the Lantronix EDS5000 series devices contain a critical code injection vulnerability (CVE-2025-67038), which has a CVSS score of 9.8. This vulnerability stems from the HTTP RPC module's logging function executed upon failed user authentication. Because the username parameter is not sanitized, attackers can inject arbitrary operating system commands and execute malicious instructions with root privileges. This vulnerability was first observed being exploited in the wild in April 2026, meaning it was attacked even before an official patch was available. Furthermore, the article also mentions three high-severity vulnerabilities in Ubiquiti UniFi OS (CVE-2026-34908, CVE-2026-34909, CVE-2026-34910), which attackers can exploit for remote code execution and lateral movement. Affected organizations are advised to immediately apply patches and implement network segmentation and change default passwords to reduce the risk of attack.",
    tags_en: ["CISA", "Lantronix", "CVE-2025-67038", "Code Injection", "OT/ICS", "Cybersecurity"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cisa-warns-critical-lantronix-eds5000.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cisco Unified CM 遭利用 SSRF 漏洞，CISA 已列入 KEV 清單，建議立即修補",
    summary: "資安研究機構觀察到攻擊者已開始利用影響 Cisco Unified Communications Manager (Unified CM) 和 Unified CM SME 的關鍵漏洞 CVE-2026-20230。此漏洞源於不當的 HTTP 輸入驗證，允許未經身份驗證的遠端攻擊者執行伺服器端請求偽造（SSRF）攻擊。成功利用後，攻擊者可透過寫入底層作業系統檔案，進而提升權限至 root。攻擊成功的前提是 WebDialer 服務必須啟用，但此服務預設為停用狀態。SSD Secure Disclosure 進一步指出，該漏洞允許攻擊者利用 Webdialer 元件，在伺服器上任意寫入檔案，最終可達成程式碼執行。由於此漏洞已被確認在野外被利用，美國 CISA 已於 2026 年 6 月 25 日將 CVE-2026-20230 列入已知被利用漏洞（KEV）目錄，要求聯邦民用行政部門在 2026 年 6 月 28 日前修補。建議用戶應立即升級至 Unified CM 和 Unified CM SME 的 14SU6 或 15SU5 版本，或在無法修補時，停用 WebDialer 服務。",
    tags: ["Cisco", "CVE-2026-20230", "Unified CM", "SSRF", "KEV", "CISA"],
    title_en: "Cisco Unified CM Exploited via SSRF Vulnerability; CISA Lists it in KEV Catalog, Advising Immediate Patching",
    summary_en: "Security research organizations have observed that attackers have begun exploiting a critical vulnerability, CVE-2026-20230, affecting Cisco Unified Communications Manager (Unified CM) and Unified CM SME. This vulnerability stems from improper HTTP input validation, allowing unauthenticated remote attackers to execute Server-Side Request Forgery (SSRF) attacks. Successful exploitation allows attackers to elevate privileges to root by writing to underlying operating system files. While the prerequisite for successful attack is the WebDialer service being enabled (though it is disabled by default), SSD Secure Disclosure further points out that the vulnerability allows attackers to use the Webdialer component to arbitrarily write files on the server, ultimately achieving code execution. Since this vulnerability has been confirmed exploited in the wild, the U.S. CISA added CVE-2026-20230 to its Known Exploited Vulnerabilities (KEV) catalog on June 25, 2026, requiring federal civilian agencies to patch by June 28, 2026. Users are advised to immediately upgrade to Unified CM and Unified CM SME versions 14SU6 or 15SU5, or, if patching is not possible, disable the WebDialer service.",
    tags_en: ["Cisco", "CVE-2026-20230", "Unified CM", "SSRF", "KEV", "CISA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cisco-unified-cm-flaw-exploited-after.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mandiant揭露Cisco SD-WAN零日攻擊：CVE-2026-20245允許攻擊者取得Root權限",
    summary: "Mandiant發布報告，揭露駭客如何利用Cisco Catalyst SD-WAN的零日漏洞CVE-2026-20245，在攻擊者已取得初步存取權限後，進一步升級權限。該漏洞是一個高嚴重性的命令注入缺陷，存在於SD-WAN Manager (vManage)、Controller (vSmart) 和 Validator (vBond) 等元件的CLI介面。攻擊者透過上傳惡意的CSV檔案，能夠讓認證的本地攻擊者執行任意命令並取得root權限。攻擊鏈的過程包括：先建立惡意的SD-WAN對等連線，取得管理員帳號，竊取配置資訊，隨後利用CVE-2026-20245，創建名為\"troot\"的root帳號，並備份系統關鍵檔案（如/etc/passwd和/etc/shadow）。攻擊者還採取了清除痕跡的行為，包括恢復原始密碼和刪除惡意Payload，以規避偵測。Cisco已發布安全更新，建議客戶立即升級到修復版本，並檢查是否有未經授權的對等連線。",
    tags: ["Cisco", "CVE-2026-20245", "SD-WAN", "命令注入", "Root權限", "Mandiant"],
    title_en: "Mandiant Reveals Cisco SD-WAN Zero-Day Attack: CVE-2026-20245 Allows Attacker to Obtain Root Privileges",
    summary_en: "Mandiant has published a report revealing how attackers exploited the zero-day vulnerability CVE-2026-20245 in Cisco Catalyst SD-WAN to escalate privileges after gaining initial access. This vulnerability is a high-severity command injection flaw present in the CLI interfaces of components such as SD-WAN Manager (vManage), Controller (vSmart), and Validator (vBond). By uploading a malicious CSV file, an authenticated local attacker can execute arbitrary commands and obtain root privileges. The attack chain involved: first establishing a malicious SD-WAN peer connection and obtaining an administrator account; then stealing configuration information; subsequently exploiting CVE-2026-20245 to create a root account named \"troot\" and backup critical system files (such as /etc/passwd and /etc/shadow). The attacker also performed actions to cover their tracks, including resetting original passwords and deleting malicious payloads, in order to evade detection. Cisco has released a security update and recommends that customers immediately upgrade to the patched version and check for unauthorized peer connections.",
    tags_en: ["Cisco", "CVE-2026-20245", "SD-WAN", "Command Injection", "Root Privileges", "Mandiant"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/attackers-hit-cisco-sd-wan-flaw-2-months-before-disclosure", lang: "EN" },
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/mandiant-reveals-how-cisco-sd-wan-zero-day-attacks-gained-root-access", lang: "EN" }
    ]
  },
  {
    id: "20260624-049",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "惡意 Edge 擴充功能 Edgecution：利用 Native Messaging 逃逸瀏覽器沙箱部署後門",
    summary: "安全研究公司 Zscaler 分析了一種名為 Edgecution 的惡意 Microsoft Edge 擴充功能，該擴充功能被用於勒索軟體攻擊，目的是逃逸瀏覽器沙箱，並部署一個基於 Python 的後門。攻擊鏈始於駭客冒充 IT 人員，透過 Microsoft Teams 誘騙員工訪問偽造的更新頁面。受害者點擊的偽造按鈕會執行自動化腳本（如 AutoHotKey 或 PowerShell），這些腳本最終會配置環境並啟動 Edge 瀏覽器。惡意擴充功能作為第一階段元件，連接到攻擊者的 C2 端點，接收指令。它利用 Chrome 的 Native Messaging 協議，透過本地應用程式（如 Python 後門）來執行系統級命令，包括執行 Shell 命令、運行 PowerShell、寫入檔案和收集系統資訊。攻擊者透過偽造的 ZIP 檔案和本地批次檔來啟動這個流程，這展示了駭客在建立持久性方面的複雜性。建議組織加強對瀏覽器擴充功能的監控，並對 Native Messaging 主機配置實施嚴格控制。",
    tags: ["Microsoft Edge", "Edgecution", "Native Messaging", "勒索軟體", "Python 後門", "沙箱逃逸"],
    title_en: "Malicious Edge Extension, Edgecution: Exploiting Native Messaging to Escape Browser Sandbox and Deploy Backdoor",
    summary_en: "Security research firm Zscaler analyzed a malicious Microsoft Edge extension called Edgecution. This extension is used in ransomware attacks with the goal of escaping the browser sandbox and deploying a Python-based backdoor. The attack chain begins with hackers impersonating IT staff and tricking employees into visiting a fake update page via Microsoft Teams. When the victim clicks the fake button, an automated script (such as AutoHotKey or PowerShell) executes, which ultimately configures the environment and launches the Edge browser. The malicious extension acts as the first-stage component, connecting to the attacker's C2 endpoint to receive instructions. It utilizes Chrome's Native Messaging protocol to execute system-level commands, such as running shell commands, executing PowerShell, writing files, and collecting system information, through a local application (like a Python backdoor). The attacker initiates this process using fake ZIP files and local batch files, demonstrating the complexity of establishing persistence. Organizations are advised to strengthen monitoring of browser extensions and implement strict controls on the Native Messaging host configuration.",
    tags_en: ["Microsoft Edge", "Edgecution", "Native Messaging", "Ransomware", "Python backdoor", "Sandbox Escape"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/malicious-edge-extension-abuses-native-messaging-as-bridge-to-malware", lang: "EN" }
    ]
  },
  {
    id: "20260624-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：Ubiquiti UniFi OS及Lantronix設備存在高風險漏洞，可遭遠端利用",
    summary: "美國網路安全基礎設施安全局（CISA）警告，駭客正在積極利用Ubiquiti UniFi OS和Lantronix系列設備的漏洞進行攻擊。針對Ubiquiti的漏洞，CISA已將以下三個高風險漏洞列入已知被利用漏洞清單：CVE-2026-34908（存取控制繞過）、CVE-2026-34909（路徑遍歷）和CVE-2026-34910（輸入驗證不當）。這些漏洞允許未經身份驗證的攻擊者進行系統變更、存取敏感檔案，甚至執行任意作業系統指令，可能導致遠端程式碼執行和系統完全接管。Ubiquiti已於五月發布安全更新。此外，Lantronix的EDS5000型號在韌體2.1.0.0R3中存在CVE-2025-67038的嚴重根級指令注入漏洞，攻擊者可透過HTTP RPC模組注入指令。為修復這些漏洞，建議使用者立即應用廠商提供的安全更新或緩解措施。系統管理員應盡快修補，以避免遭受攻擊。",
    tags: ["CISA", "Ubiquiti", "UniFi OS", "Lantronix", "CVE-2026-34908", "CVE-2026-34910", "指令注入"],
    title_en: "CISA Warns: High-Risk Vulnerabilities Found in Ubiquiti UniFi OS and Lantronix Devices, Potentially Exploitable Remotely",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has warned that hackers are actively exploiting vulnerabilities in Ubiquiti UniFi OS and Lantronix series devices. Regarding Ubiquiti, CISA has listed the following three high-risk vulnerabilities in its known exploited vulnerabilities list: CVE-2026-34908 (Access Control Bypass), CVE-2026-34909 (Path Traversal), and CVE-2026-34910 (Improper Input Validation). These vulnerabilities allow unauthenticated attackers to perform system changes, access sensitive files, and even execute arbitrary operating system commands, potentially leading to Remote Code Execution (RCE) and complete system takeover. Ubiquiti released a security update in May. Additionally, the Lantronix EDS5000 model has a critical root command injection vulnerability, CVE-2025-67038, in firmware 2.1.0.0R3. Attackers can inject commands through the HTTP RPC module. To remediate these vulnerabilities, users are advised to immediately apply the vendor-provided security updates or mitigation measures. System administrators should patch as soon as possible to prevent attacks.",
    tags_en: ["CISA", "Ubiquiti", "UniFi OS", "Lantronix", "CVE-2026-34908", "CVE-2026-34910", "Command Injection"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisa-warns-of-max-severity-ubiquiti-flaws-exploited-in-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260624-051",
    trackers: ["os"],
    category: "Apple",
    title: "Mosyle推出Mosyle@Home，協助學校管理Mac與iPad，讓家長也能遠端監控學童使用時間與應用程式",
    summary: "Mosyle宣布推出Mosyle@Home平台，旨在解決學校發放的Mac與iPad在非課後時間，IT控制權與家長監控需求之間的平衡問題。該平台允許家長透過免費帳號註冊學童設備，在專屬儀表板上管理設備。功能包括：查看螢幕使用時間、設定使用時限、暫停設備使用、限制特定應用程式或鎖定單一應用程式模式，以及啟用網站過濾和監控網路使用紀錄。文章指出，舊有的ScreenGuide功能已正式棄用，現有用戶將被引導遷移至Mosyle@Home，且無需額外費用。對於訂閱Mosyle OneK12方案的學校，全新的macOS家庭管理功能也將免費提供。此舉讓學校能維持課堂時段的完全控制權，同時將控制權平穩地轉移給家庭，提供更完整的設備管理解決方案。",
    tags: ["Mosyle", "Mosyle@Home", "macOS", "iPadOS", "K-12", "設備管理"],
    title_en: "Mosyle Launches Mosyle@Home to Help Schools Manage Macs and iPads, Allowing Parents to Monitor Student Usage and Applications Remotely",
    summary_en: "Mosyle announced the launch of the Mosyle@Home platform, designed to address the balance between IT control and parental monitoring needs for school-issued Macs and iPads outside of class hours. The platform allows parents to register student devices using a free account and manage the devices on a dedicated dashboard. Features include: viewing screen usage time, setting usage limits, pausing device usage, restricting specific applications or locking into single-app mode, and enabling website filtering and monitoring network usage records. The article notes that the old ScreenGuide function has been officially deprecated, and existing users will be guided to transition to Mosyle@Home at no extra cost. Schools subscribed to the Mosyle OneK12 plan will also receive the new macOS family management features for free. This initiative allows schools to maintain full control during class hours while smoothly transferring control to the family, providing a more comprehensive device management solution.",
    tags_en: ["Mosyle", "Mosyle@Home", "macOS", "iPadOS", "K-12", "Device Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/mosyle-launches-new-services-to-help-parents-manage-mac-and-ipad-screen-time-for-k-12-devices-at-home", lang: "EN" }
    ]
  },
  {
    id: "20260624-052",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳聞 MacBook Ultra 將搭載 OLED 螢幕、Touch 支援與 Dynamic Island，重新定義 Mac 體驗",
    summary: "根據傳聞消息來源，Apple 即將推出代號 MacBook Ultra 的新機型，預計將在今年秋季上市。該機型預計將進行「全面重新設計」，體積將比現有的 MacBook Pro 更輕薄。在技術規格方面，MacBook Ultra 將是首款搭載 OLED 顯示器的 Mac，預計能提供更深的黑色、更高的對比度和更佳的電池續航力。此外，Apple 也計畫為 Mac 引入觸控螢幕支援，作為輔助輸入方式。在設計上，新機型預計將採用挖孔式鏡頭取代傳統的瀏海設計，並整合 Dynamic Island 功能，該功能除了遮蔽鏡頭外，還將成為 macOS 上的新效能中心，甚至可能作為 Siri AI 的主要介面。雖然傳聞指出 M6 系列晶片計畫已延後，但新機型仍將搭載 M5 Pro 和 M5 Max 晶片。此外，Apple 也正在研究為 Mac 引入行動通訊功能，但預計需等到 2026 年左右才能實現。",
    tags: ["Apple", "MacBook Ultra", "OLED", "Dynamic Island", "macOS", "M5 Pro", "M5 Max"],
    title_en: "Rumored MacBook Ultra to Feature OLED Display, Touch Support, and Dynamic Island, Redefining the Mac Experience",
    summary_en: "According to rumored sources, Apple is preparing to launch a new model codenamed MacBook Ultra, expected to hit the market this autumn. This model is anticipated to undergo a 'complete redesign,' becoming lighter and thinner than the current MacBook Pro. In terms of technical specifications, the MacBook Ultra will be the first Mac to feature an OLED display, which is expected to deliver deeper blacks, higher contrast ratios, and improved battery life. Furthermore, Apple plans to introduce touch screen support for Mac, serving as an auxiliary input method. In design, the new model is expected to adopt a punch-hole camera design to replace the traditional notch, and integrate the Dynamic Island feature. This feature will not only cover the camera but will also become a new control center within macOS, potentially serving as the primary interface for Siri AI. Although rumors indicate that the M6 series chip plans have been delayed, the new model will still be equipped with M5 Pro and M5 Max chips. Additionally, Apple is researching the integration of cellular connectivity for Mac, but this is not expected to be realized until around 2026.",
    tags_en: ["Apple", "MacBook Ultra", "OLED", "Dynamic Island", "macOS", "M5 Pro", "M5 Max"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/macbook-ultra-is-coming-six-new-features-launching-this-fall", lang: "EN" }
    ]
  },
  {
    id: "20260624-053",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 17預計打破紀錄：分析蘋果旗艦機型生命週期與產品更新趨勢",
    summary: "本文非資安新聞，而是分析蘋果產品生命週期。文章指出，蘋果的旗艦機型通常會經歷一段時間的市場熱度。過去，iPhone 4曾保持了近16個月的頂級地位。根據目前的傳聞和分析，預計iPhone 17將會打破這個紀錄，成為蘋果標準型號最長壽命的旗艦機型。這預計將使iPhone 17在主線產品線的頂端地位持續約18個月，超越iPhone 4的紀錄。文章也提到，與過去不同，現代的產品週期將會包含每年推出的Pro系列，以及可能出現的折疊式iPhone，這將改變傳統的升級模式。對於使用者和開發者而言，了解這些產品週期規劃有助於預期未來產品的迭代方向。",
    tags: ["Apple", "iPhone 17", "旗艦機型", "產品生命週期", "iPhone 4", "Apple 生態系"],
    title_en: "iPhone 17 Expected to Break Records: Analyzing Apple Flagship Lifecycle and Product Update Trends",
    summary_en: "This article is not a cybersecurity news item, but rather an analysis of Apple's product lifecycle. It points out that Apple's flagship models typically maintain a period of market hype. In the past, the iPhone 4 held the top spot for nearly 16 months. According to current rumors and analysis, the iPhone 17 is expected to break this record, becoming the longest-lasting flagship model in Apple's standard lineup. This is projected to keep the iPhone 17 in the top position of the main product line for approximately 18 months, surpassing the record set by the iPhone 4. The article also mentions that, unlike the past, modern product cycles will include the annual release of the Pro series, as well as potentially foldable iPhones, which will change the traditional upgrade pattern. For users and developers, understanding these product cycle plans helps in anticipating the future direction of product iteration.",
    tags_en: ["Apple", "iPhone 17", "Flagship Model", "Product Lifecycle", "iPhone 4", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/iphone-17-availability", lang: "EN" }
    ]
  },
  {
    id: "20260624-054",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 內建「Siri 模式」於相機 App，強化視覺智慧功能，提升手機實用性",
    summary: "Apple 在 iOS 27 版本中為內建相機 App 增添了全新的「Siri 模式」。此模式將原本獨立的視覺智慧功能，直接整合到相機應用程式內，與照片、影片、人像等模式並列。當啟用此模式後，用戶可利用相機拍攝的內容，透過視覺智慧功能來獲取資訊和執行操作。例如，可對準餐廳尋找地圖資訊、查看營業時間；詢問植物以了解養護資訊；拍攝活動傳單以新增至行事曆；檢視餐點的營養資訊；翻譯文字；或掃描收據進行分帳。此更新大幅提升了相機 App 的實用性，讓用戶無需切換模式即可利用 AI 進行多樣化的資訊擷取與服務。",
    tags: ["iOS 27", "Apple", "相機 App", "Siri 模式", "視覺智慧", "AI 功能"],
    title_en: "iOS 27 integrates 'Siri Mode' into the Camera App, enhancing visual intelligence and improving mobile utility",
    summary_en: "In iOS 27, Apple has added a brand new 'Siri Mode' to the built-in Camera App. This mode integrates previously standalone visual intelligence functions directly into the camera application, positioning it alongside modes for photos, videos, and portraits. When activated, users can utilize the content captured by the camera to retrieve information and perform actions through visual intelligence. For example, users can aim at a restaurant to find map information and check operating hours; query a plant to learn care instructions; photograph an event flyer to add it to the calendar; view nutritional information of a meal; translate text; or scan a receipt for splitting the bill. This update significantly enhances the Camera App's utility, allowing users to leverage AI for diverse information extraction and services without needing to switch modes.",
    tags_en: ["iOS 27", "Apple", "Camera App", "Siri Mode", "Visual Intelligence", "AI Feature"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/ios-27-gives-the-camera-app-on-iphone-a-brand-new-mode", lang: "EN" }
    ]
  },
  {
    id: "20260624-055",
    trackers: ["os"],
    category: "Apple",
    title: "Apple傳推出MacBook Ultra，預計將使MacBook產品線達到史上最多四款機型",
    summary: "本文報導指出，Apple除了今年已推出的多款MacBook型號外，傳聞今年秋季還可能推出名為「MacBook Ultra」的新機型。若此傳聞屬實，將使MacBook產品線達到史上最多四款的規模。該新機型預計將具備全新設計，比現有的MacBook Pro更輕薄，搭載M6晶片家族，並首次在MacBook系列引入觸控螢幕和OLED顯示器，同時可能採用動態島取代傳統瀏海設計。這項產品線擴張，與Apple近年來擴大iPhone產品線的趨勢一致，顯示Apple正透過更多價格帶的產品，爭取觸及更廣泛的市場客群。目前文章為產品傳聞與市場分析，未涉及任何安全漏洞或技術細節。",
    tags: ["Apple", "MacBook", "MacBook Ultra", "M6晶片", "OLED", "產品傳聞"],
    title_en: "Apple rumored to launch MacBook Ultra, potentially bringing MacBook product line to a record four models",
    summary_en: "This report indicates that in addition to the various MacBook models already launched this year, Apple may introduce a new model called \"MacBook Ultra\" this autumn. If this rumor proves true, it would expand the MacBook product line to a record high of four models. The new model is expected to feature a completely redesigned chassis, be lighter than the current MacBook Pro, be powered by the M6 chip family, and for the first time in the MacBook series, incorporate a touchscreen and OLED display. It may also adopt a Dynamic Island design to replace the traditional notch. This product line expansion aligns with Apple's recent trend of expanding its iPhone product line, suggesting that Apple is aiming to reach a broader market segment by offering products across more price points. Please note that this article contains product rumors and market analysis, and does not involve any security vulnerabilities or technical details.",
    tags_en: ["Apple", "MacBook", "MacBook Ultra", "M6 chip", "OLED", "Product Rumor"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/apples-new-macbook-lineup-could-be-its-biggest-ever-this-fall", lang: "EN" }
    ]
  },
  {
    id: "20260624-056",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch SE 3 與 Series 11 價格比較：Prime Day 促銷資訊",
    summary: "本文為產品比較與促銷資訊，介紹了 Apple Watch SE 3、Apple Watch Series 11 和 Apple Ultra 3 的產品線更新。文章主要比較了 Apple Watch SE 3 與 Apple Watch Series 11 的價格資訊，並指出這兩款產品在 Prime Day 期間有大幅折扣。具體折扣價格包括 40mm Apple Watch SE 3 從 $199 起（原價 $249），44mm Apple Watch SE 3 從 $229 起（原價 $279）；以及 42mm Apple Watch Series 11 從 $279 起（原價 $399），46mm Apple Watch Series 11 從 $309 起（原價 $429）。本內容不涉及資安漏洞或技術細節，僅為市場行銷資訊。",
    tags: ["Apple Watch", "Apple Watch SE 3", "Apple Watch Series 11", "Apple Ultra 3", "Prime Day", "產品更新"],
    title_en: "Apple Watch SE 3 vs. Series 11 Price Comparison: Prime Day Sale Information",
    summary_en: "This article provides product comparison and promotional information, introducing updates to the Apple Watch SE 3, Apple Watch Series 11, and Apple Ultra 3 product lines. The article primarily compares the pricing of the Apple Watch SE 3 and the Apple Watch Series 11, noting that both products are heavily discounted during Prime Day. Specific discounted prices include the 40mm Apple Watch SE 3 starting from $199 (original price $249), and the 44mm Apple Watch SE 3 starting from $229 (original price $279); as well as the 42mm Apple Watch Series 11 starting from $279 (original price $399), and the 46mm Apple Watch Series 11 starting from $309 (original price $429). This content does not involve cybersecurity vulnerabilities or technical details; it is purely market marketing information.",
    tags_en: ["Apple Watch", "Apple Watch SE 3", "Apple Watch Series 11", "Apple Ultra 3", "Prime Day", "Product Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/apple-watch-series-11-vs-apple-watch-se", lang: "EN" }
    ]
  },
  {
    id: "20260624-057",
    trackers: ["os"],
    category: "Apple",
    title: "分析師預測 iPhone 18 Pro 價格可能漲幅有限，避免過度預期",
    summary: "本文報導了關於下一代 iPhone 18 Pro 的價格預測。儘管 Apple 執行長 Tim Cook 曾公開表示「價格上漲是不可避免的」，導致部分分析師預估 iPhone 18 Pro 的起價可能從前代 $1,099 上升至 $1,399 或更高。然而，最新的 J.P. Morgan 分析師報告指出，若整體漲幅維持在 $50 到 $100 之間，則 iPhone 18 Pro 的價格漲幅可能不會過於驚人。文章推測，Apple 的發言可能是一種策略性行為，旨在為產品設定一個預期範圍，讓消費者對較小的漲幅感到滿意。建議消費者關注官方後續發布的定價資訊，並權衡預期漲幅與產品升級的實際價值。",
    tags: ["Apple", "iPhone 18 Pro", "Tim Cook", "J.P. Morgan", "定價預測"],
    title_en: "Analysts predict iPhone 18 Pro price increase may be limited, cautioning against overestimation",
    summary_en: "This article reports on price predictions for the next-generation iPhone 18 Pro. Although Apple CEO Tim Cook publicly stated that 'price increases are unavoidable,' leading some analysts to estimate that the starting price of the iPhone 18 Pro might rise from the previous generation's $1,099 to $1,399 or higher. However, the latest J.P. Morgan analyst report suggests that if the overall increase remains between $50 and $100, the price jump for the iPhone 18 Pro may not be overly surprising. The article speculates that Apple's statements might be a strategic move, designed to set an expected range for the product, thereby satisfying consumers with a smaller increase. Consumers are advised to monitor official subsequent pricing announcements and weigh the expected increase against the actual value of the product upgrade.",
    tags_en: ["Apple", "iPhone 18 Pro", "Tim Cook", "J.P. Morgan", "Pricing Prediction"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/iphone-18-pro-might-cost-less-than-expected-per-report", lang: "EN" }
    ]
  },
  {
    id: "20260624-058",
    trackers: ["os"],
    category: "Apple",
    title: "Apple更新iPhone失竊應對指南：警告用戶勿在設備上留下聯絡資訊，防範社工詐騙",
    summary: "Apple更新了其官方支援頁面，提供了更詳細的iPhone失竊應對建議。新指南特別警告用戶，如果手機是遭竊而非遺失，應避免在鎖定螢幕上顯示任何聯絡資訊。這是因為竊賊可能會利用這些資訊進行社工詐騙，例如假冒Apple或電信業者來獲取重啟設備所需的敏感資訊。此外，Apple也提醒用戶不要移除設備的「尋找我的」（Find My）功能，因為這會移除「啟用鎖定」（Activation Lock），讓竊賊更容易清除和轉售設備。建議用戶應儘快將設備標記為「遺失」（Mark as Lost），即使啟用了「失竊設備保護」（Stolen Device Protection），因為保護措施的額外安全保障只會持續一段時間。此功能能要求生物識別驗證才能執行敏感操作，如存取密碼或信用卡，並在陌生地點更改Apple帳號密碼時，會強制等待一小時並要求使用Face ID或Touch ID，以防止竊賊在用戶輸入密碼時進行監控。",
    tags: ["Apple", "iPhone", "Find My", "失竊設備保護", "社工詐騙", "iOS"],
    title_en: "Apple Updates iPhone Theft Response Guide: Warns Users Against Leaving Contact Information on Devices to Prevent Social Engineering Scams",
    summary_en: "Apple has updated its official support page with more detailed iPhone theft response recommendations. The new guide specifically warns users that if their phone has been stolen rather than lost, they should avoid displaying any contact information on the locked screen. This is because thieves might use this information for social engineering scams, such as impersonating Apple or a carrier to obtain sensitive information required to reset the device. Furthermore, Apple reminds users not to remove the device's \"Find My\" function, as doing so removes the \"Activation Lock,\" making it easier for thieves to wipe and resell the device. Users are advised to quickly mark the device as \"Lost,\" even if \"Stolen Device Protection\" is enabled, because the extra security provided by the protection measure only lasts for a limited time. This feature requires biometric verification to perform sensitive actions, such as accessing passwords or credit cards, and when changing an Apple account password from an unfamiliar location, it enforces a one-hour waiting period and requires Face ID or Touch ID to prevent thieves from monitoring the user while they enter their password.",
    tags_en: ["Apple", "iPhone", "Find My", "Stolen Device Protection", "Social Engineering Scam", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/what-to-do-if-your-iphone-is-stolen-more-detailed-advice-from-apple", lang: "EN" }
    ]
  },
  {
    id: "20260624-059",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 蘋果日曆功能升級：新增自然語言輸入、iCloud 忙/空狀態顯示與超大尺寸小工具",
    summary: "蘋果在 iOS 27 中大幅更新了「日曆」應用程式，提升了使用者體驗與功能性。主要新增功能包括「智慧活動詳情」（Smart Event Details），透過 Apple Intelligence 支援自然語言輸入，使用者只需用白話文描述活動，系統即可自動填寫標題、時間、地點和參與者等詳細資訊。此外，日曆介面在活動詳情檢視和創建/編輯時進行了設計優化，並首次為 iCloud 日曆提供「忙碌/空閒」狀態顯示選項，解決了過去僅適用於 Google 等第三方日曆的缺失。在系統層面，iOS 27 也支援超大尺寸的 Home Screen 與 Today Widget，日曆可提供「列表」和「接下來」兩種超大尺寸小工具，能顯示更多活動。此外，Siri AI 也大幅升級，具備個人情境感知能力，並新增了透過相機掃描活動傳單來創建活動的功能，整體提升了日曆的智慧化管理能力。",
    tags: ["iOS 27", "Apple Calendar", "Apple Intelligence", "Siri AI", "自然語言輸入", "iCloud"],
    title_en: "iOS 27 Apple Calendar Enhancements: Adding Natural Language Input, iCloud Busy/Free Status, and Large Widgets",
    summary_en: "Apple has significantly updated the \"Calendar\" application in iOS 27, enhancing both user experience and functionality. Key new features include \"Smart Event Details,\" which leverages Apple Intelligence to support natural language input. Users can now simply describe an event in plain language, and the system will automatically populate detailed information such as the title, time, location, and attendees. Furthermore, the calendar interface has been optimized for viewing and creating/editing event details, and for the first time, it offers a \"Busy/Free\" status display option for iCloud Calendar, addressing a previous limitation that only applied to third-party calendars like Google. At the system level, iOS 27 also supports large-sized Home Screen and Today Widgets, allowing the Calendar to provide two types of large widgets: \"List\" and \"Upcoming,\" which can display more events. Additionally, Siri AI has been greatly upgraded with personal context awareness and a new feature allowing users to create events by scanning event flyers with the camera, collectively enhancing the calendar's intelligent management capabilities.",
    tags_en: ["iOS 27", "Apple Calendar", "Apple Intelligence", "Siri AI", "Natural Language Input", "iCloud"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/heres-everything-new-for-apple-calendar-in-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260624-060",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Ultra 可折疊機型解決鉸鏈結構問題，預計於九月發表",
    summary: "傳聞中曾有關於蘋果（Apple）下一代折疊手機 iPhone Ultra 的發布延遲問題，但最新的供應鏈報告指出，先前關於 3D 列印鉸鏈模組的耐久性與結構問題已得到解決。該折疊機型的鉸鏈由台灣的信巨興（Shinjuxing）和美國的 amphenol 供應，其品質和耐用性是關鍵考量。早期開發過程中，曾出現鉸鏈在耐久性測試中產生輕微異音，且部分組裝工序的公差超出預期，導致瑕疵率增加。目前據悉，這些問題已得到修復，產品已進入試產階段。蘋果高度重視品質，確保首次進入折疊機市場的產品能達到極高標準。目前市場普遍預期，這款最昂貴的 iPhone 將在九月的發表會上正式亮相。",
    tags: ["Apple", "iPhone Ultra", "折疊手機", "3D 列印", "鉸鏈", "供應鏈"],
    title_en: "iPhone Ultra foldable model resolves hinge structure issues, expected to be announced in September",
    summary_en: "There were rumors regarding delays in the release of Apple's next-generation foldable phone, the iPhone Ultra. However, the latest supply chain reports indicate that previous issues concerning the durability and structure of the 3D printed hinge module have been resolved. The hinge for this foldable model is supplied by Shinjuxing of Taiwan and amphenol of the US, making its quality and durability critical considerations. During early development, minor noises were observed in the hinge during durability testing, and some assembly processes exceeded expected tolerances, leading to an increased defect rate. It is currently reported that these issues have been fixed, and the product has entered the pilot production stage. Apple places high importance on quality, ensuring that the product entering the foldable market for the first time meets extremely high standards. Currently, the market generally anticipates that this most expensive iPhone will officially debut at the September event.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Phone", "3D Printing", "Hinge", "Supply Chain"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/iphone-ultra-3d-printed-hinge-problems-reportedly-solved-ready-for-september-launch", lang: "EN" }
    ]
  },
  {
    id: "20260624-061",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 服務高層預告 Apple TV 將迎來重大升級與內容擴充",
    summary: "Apple 服務高層 Eddy Cue 在坎城電影節接受頒獎後，預告 Apple TV 將迎來「更好、更多」的程式內容與功能升級。雖然文章未提供具體技術細節或安全漏洞資訊，但其核心訊息是 Apple 正在積極擴充 Apple TV 的生態系統。此外，Cue 與製作人 Jerry Bruckheimer 也透露，未來可能會推出《F1 The Movie》的續集。這顯示 Apple 不僅著重於內容的豐富化，也持續強化其娛樂平台的能力，預計未來將有更多內容和功能更新，提升用戶體驗。",
    tags: ["Apple TV", "Eddy Cue", "Apple 服務", "內容擴充", "娛樂平台"],
    title_en: "Apple Services Executive Predicts Major Upgrade and Content Expansion for Apple TV",
    summary_en: "Following an award ceremony at the Cannes Film Festival, Apple Services executive Eddy Cue announced that Apple TV will receive",
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/eddy-cue-says-better-and-more-coming-to-apple-tv", lang: "EN" }
    ]
  },
  {
    id: "20260624-062",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安公司警告：攻擊者利用Klue Battlecards整合服務，透過OAuth權杖大規模竊取Salesforce用戶資料",
    summary: "威脅情報公司 ReliaQuest 警告，攻擊者已透過遭入侵的 Klue Battlecards 整合服務，對 Salesforce 平台發動大規模資料竊取活動。攻擊者首先取得該整合服務帳號的 OAuth 權杖，並利用自動化的 Python 指令碼，識別目標企業組織的 Salesforce 物件目錄。隨後，攻擊者透過循環的 REST API 請求，並利用 QueryMore 游標分頁機制，在長時間內（甚至有連續超過 6 小時）持續擷取大量用戶資料。ReliaQuest 指出，攻擊者在部分受害環境中，能在極短時間內（如 15 分鐘內）發送近千筆查詢請求。Salesforce 隨後宣布暫時切斷該應用程式與平台的連結。建議用戶應立即審查所有第三方整合應用程式的權限範圍，並特別注意那些使用 OAuth 權杖進行自動化資料查詢的服務，以防範未經授權的資料外洩。",
    tags: ["Salesforce", "Klue Battlecards", "OAuth 權杖", "REST API", "資料外洩", "供應鏈安全"],
    title_en: "Cybersecurity Firm Warns: Attackers Used Klue Battlecards Integration Service to Mass Steal Salesforce User Data via OAuth Tokens",
    summary_en: "Threat intelligence company ReliaQuest warned that attackers launched a large-scale data theft campaign against the Salesforce platform using an compromised Klue Battlecards integration service. The attackers first obtained the OAuth token for the integration service account and then used automated Python scripts to identify the Salesforce object directories of target organizations. Subsequently, the attackers continuously extracted massive amounts of user data over an extended period (even exceeding 6 continuous hours) by making iterative REST API requests and leveraging the QueryMore cursor pagination mechanism. ReliaQuest pointed out that in some affected environments, the attackers were able to send nearly a thousand query requests in a very short time (such as within 15 minutes). Salesforce subsequently announced the temporary disconnection of the application from the platform. Users are advised to immediately review the permission scope of all third-party integration applications, paying special attention to services that use OAuth tokens for automated data querying, to prevent unauthorized data leakage.",
    tags_en: ["Salesforce", "Klue Battlecards", "OAuth Token", "REST API", "Data Leakage", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176833", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-063",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "研究揭露：大量導入 LLM 功能的 iOS App 普遍存在憑證外洩與後端代理安全風險",
    summary: "維克森林大學研究團隊開發動態分析框架 LLMKeyLens，針對從 App Store 蒐集的 LLM 相關 iOS 應用程式進行安全評估。研究發現，在執行期間的網路流量中，許多 App 暴露了可被利用的 LLM API 憑證、未要求驗證的後端代理機制，或用於呼叫 LLM 服務的憑證資訊。樣本分析顯示，高達 64% 的 App 存在此類安全缺陷，主要外洩型態為 JSON Web Token (JWT) 驗證權杖，其次是缺乏身分驗證的後端代理。儘管研究團隊已向開發者通報，但在 90 天的追蹤期後，僅有 28% 的 App 進行了修復，顯示 LLM API 憑證外洩與後端代理存取風險在 iOS 生態系中普遍且持續存在。這反映了實際開發實踐與安全整合原則之間存在系統性落差。",
    tags: ["LLM", "iOS App", "API 憑證", "JWT", "後端代理", "動態分析", "安全漏洞"],
    title_en: "Research Reveals: Many iOS Apps Integrating LLM Features Have Common Credential Leakage and Backend Proxy Security Risks",
    summary_en: "A research team from Victoria University developed a dynamic analysis framework called LLMKeyLens to conduct security assessments on LLM-related iOS applications collected from the App Store. The research found that during execution, many apps exposed exploitable LLM API credentials, unauthenticated backend proxy mechanisms, or credential information used to call LLM services. Sample analysis showed that up to 64% of the apps contained these security flaws, primarily involving the leakage of JSON Web Token (JWT) authentication tokens, followed by unauthenticated backend proxies. Although the research team notified the developers, only 28% of the apps were patched after a 90-day follow-up period, indicating that LLM API credential leakage and backend proxy access risks are widespread and persistent within the iOS ecosystem. This reflects a systemic gap between actual development practices and security integration principles.",
    tags_en: ["LLM", "iOS App", "API Credentials", "JWT", "Backend Proxy", "Dynamic Analysis", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176825", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-064",
    trackers: ["security"],
    category: "開源影響",
    title: "libssh2 函式庫揭露重大遠端程式碼執行漏洞 CVE-2026-55200，影響 1.11.1 版本前產品",
    summary: "廣泛用於SSH通訊的開源函式庫 libssh2，近日揭露了重大漏洞 CVE-2026-55200。此漏洞允許未經身分驗證的攻擊者，透過傳送特製的SSH封包，觸發遠端程式碼執行（RCE）。該漏洞源於 libssh2 處理SSH封包時，對封包長度欄位的邊界檢查不足。攻擊者可傳送長度值過大的封包，導致記憶體越界寫入，造成堆積記憶體損毀，最終實現遠端任意程式碼執行。該漏洞的嚴重性評分（CVSS v4）為 9.2 分，影響範圍涵蓋 1.11.1 版本以前的 libssh2。由於 libssh2 廣泛應用於檔案傳輸工具、備份軟體及其他SSH相關應用，相關產品可能受到波及。開發團隊已提交修補程式，並正準備發布正式修補版本，建議使用者應儘速更新至修補後的版本以防範攻擊。",
    tags: ["libssh2", "CVE-2026-55200", "SSH", "遠端程式碼執行", "開源函式庫", "記憶體越界"],
    title_en: "libssh2 Library Discloses Critical Remote Code Execution Vulnerability CVE-2026-55200, Affecting Products Before Version 1.11.1",
    summary_en: "The open-source library libssh2, widely used for SSH communication, recently disclosed a critical vulnerability, CVE-2026-55200. This vulnerability allows unauthenticated attackers to trigger Remote Code Execution (RCE) by sending specially crafted SSH packets. The flaw originates from libssh2's insufficient boundary checking when processing SSH packets for the packet length field. An attacker can send packets with excessively large length values, leading to memory buffer overflow, causing stack memory corruption, and ultimately achieving arbitrary remote code execution. The vulnerability has a CVSS v4 score of 9.2, affecting libssh2 versions prior to 1.11.1. Given that libssh2 is widely utilized in file transfer tools, backup software, and other SSH-related applications, related products may be impacted. The development team has submitted a patch and is preparing to release an official patched version, advising users to update to the patched version immediately to prevent attacks.",
    tags_en: ["libssh2", "CVE-2026-55200", "SSH", "Remote Code Execution", "Open-Source Library", "Memory Overflow"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176834", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-065",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Palo Alto Networks 發現 OpenClaw 技能市場存在惡意代碼，威脅 AI 供應鏈安全",
    summary: "安全研究機構 Palo Alto Networks 的 Unit 42 發現 OpenClaw 生態系統的 ClawHub 技能市場存在多個惡意技能。這些技能被設計成看似合法，但實際上可竊取憑證、繞過安全掃描，並執行其他新型惡意活動，使 AI 供應鏈成為重大的攻擊面。研究人員將這些威脅分為資訊竊取器（infostealers）、偵測規避和代理式威脅（agentic threats）三大類。具體而言，其中兩個技能針對 macOS 平台，包含連線至 C2 基礎設施的資訊竊取器；另一個技能則透過膨脹檔案大小來規避 ClawScan 和 VirusTotal 等掃描器。最為新型的是「代理式聯盟注入」和「代理式搶跑」等代理式威脅，可讓攻擊者利用 AI 代理的權限進行財務牟利。這些惡意技能的存在，凸顯了 AI 代理框架（如 OpenClaw）在執行第三方技能時，其供應鏈的固有風險。雖然 ClawHub 已整合 VirusTotal 和 ClawScan 進行篩選，但 Unit 42 發現的技能仍能繞過這些自動化機制，顯示出防禦的難度，特別是當技能是以 LLM 可解讀的純文字指令形式存在時。",
    tags: ["OpenClaw", "ClawHub", "Palo Alto Networks", "AI 供應鏈", "資訊竊取器", "代理式威脅", "CVE"],
    title_en: "Palo Alto Networks discovers malicious code in OpenClaw skill marketplace, threatening AI supply chain security",
    summary_en: "The security research firm Palo Alto Networks' Unit 42 discovered multiple malicious skills within the OpenClaw ecosystem's ClawHub marketplace. These skills are designed to appear legitimate but can actually steal credentials, bypass security scans, and execute other novel malicious activities, making the AI supply chain a significant attack surface. The researchers categorized these threats into three types: infostealers, detection evasion, and agentic threats. Specifically, two skills target the macOS platform and include infostealers that connect to C2 infrastructure; another skill bypasses scanners like ClawScan and VirusTotal by inflating file size. The most novel are the agentic threats, such as 'agentic alliance injection' and 'agentic pre-run,' which allow attackers to exploit the privileges of AI agents for financial gain. The existence of these malicious skills highlights the inherent supply chain risk when AI agent frameworks (such as OpenClaw) execute third-party skills. Although ClawHub integrates VirusTotal and ClawScan for filtering, the skills discovered by Unit 42 can still bypass these automated mechanisms, demonstrating the difficulty of defense, especially when skills exist in the form of plain text instructions readable by LLMs.",
    tags_en: ["OpenClaw", "ClawHub", "Palo Alto Networks", "AI supply chain", "infostealers", "agentic threats", "CVE"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/malicious-openclaw-skills-clawhub-threaten-ai-supply-chain", lang: "EN" }
    ]
  },
  {
    id: "20260624-066",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Wordfence揭露ShapedPlugin外掛供應鏈攻擊：多款付費Pro版外掛植入後門，竊取網站憑證與雙重認證金鑰",
    summary: "資安業者Wordfence於6月16日揭露，WordPress外掛開發商ShapedPlugin遭遇供應鏈攻擊。攻擊者入侵其基礎設施，並將惡意程式碼植入其多款付費Pro版外掛程式，透過原廠更新機制散播給用戶。受影響的產品包括Product Slider Pro for WooCommerce、Smart Post Show Pro，以及Real Testimonials Pro等三款。這類惡意外掛會透過載入器從外部伺服器下載惡意軟體，並以外掛程式形式安裝，主要目的是竊取受害者網站的憑證和雙重認證金鑰。此外，攻擊者還能建立多個長期存取後門、提供可寫入任意檔案的REST API，並具備自行刪除載入器、竄改檔案時間等偵測規避機制。該漏洞已被指派CVE-2026-10735，CVSS嚴重性評分達9.8分。ShapedPlugin已為前兩款產品發布修補版本，但Real Testimonials Pro尚未修復。用戶應立即更新或考慮停用受影響的付費Pro版外掛。",
    tags: ["ShapedPlugin", "WordPress", "CVE-2026-10735", "供應鏈攻擊", "外掛程式", "憑證竊取"],
    title_en: "Wordfence Uncovers ShapedPlugin Plugin Supply Chain Attack: Multiple Paid Pro Plugins Implant Backdoors to Steal Website Certificates and Two-Factor Authentication Keys",
    summary_en: "Security firm Wordfence revealed on June 16th that WordPress plugin developer ShapedPlugin was targeted by a supply chain attack. Attackers infiltrated its infrastructure and implanted malicious code into several of its paid Pro plugins, distributing them to users through the official update mechanism. Affected products include Product Slider Pro for WooCommerce, Smart Post Show Pro, and Real Testimonials Pro. These malicious plugins download malware from external servers via a loader and install it in the form of a plugin, primarily aiming to steal the victim's website certificates and two-factor authentication keys. Furthermore, the attackers were able to establish multiple persistent access backdoors, provide a REST API capable of writing to arbitrary files, and implement detection evasion mechanisms such as self-deleting the loader and modifying file timestamps. The vulnerability has been assigned CVE-2026-10735, with a CVSS severity score of 9.8. ShapedPlugin has released patches for the first two products, but Real Testimonials Pro has not yet been fixed. Users should immediately update or consider disabling the affected paid Pro plugins.",
    tags_en: ["ShapedPlugin", "WordPress", "CVE-2026-10735", "Supply Chain Attack", "Plugin", "Certificate Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176859", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-067",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CNAPP 趨勢分析：Microsoft 平台如何從單點可見性轉向情境化風險管理",
    summary: "隨著雲端環境擴展至多雲、容器、API及AI工作負載，傳統資安工具已難以應對複雜的風險。Frost & Sullivan 的報告指出，雲原生應用保護平台（CNAPP）正從單純的「可見性」轉型為「操作性風險降低平台」。新一代 CNAPP 必須具備整合能力，能夠在程式碼、雲端配置、執行時期、身份和資料等多個層面，將風險優先級化，重點關注「可被利用性」（Exploitability）而非僅依賴「嚴重性」。Microsoft Defender for Cloud 體現了這一趨勢，它能將配置錯誤、過度權限和敏感資料暴露等訊號關聯起來，幫助安全團隊識別出真實的攻擊路徑，而非單一的漏洞。這使得安全團隊能夠在開發、運行和營運的整個生命週期中，持續進行風險驗證與響應，實現更連貫的風險管理。",
    tags: ["CNAPP", "Microsoft Defender for Cloud", "雲原生安全", "風險管理", "多雲環境", "應用生命週期"],
    title_en: "CNAPP Trend Analysis: How Microsoft Platform Shifts from Point Visibility to Contextual Risk Management",
    summary_en: "As cloud environments expand to multi-cloud, containers, API, and AI workloads, traditional security tools struggle to address complex risks. A report by Frost & Sullivan indicates that Cloud-Native Application Protection Platforms (CNAPP) are transitioning from mere 'visibility' to 'operational risk reduction platforms.' Next-generation CNAPPs must possess integration capabilities to prioritize risks across multiple layers—including code, cloud configuration, runtime, identity, and data—focusing on 'exploitability' rather than solely relying on 'severity.' Microsoft Defender for Cloud exemplifies this trend. It correlates signals such as misconfigurations, excessive permissions, and sensitive data exposure, helping security teams identify genuine attack paths rather than isolated vulnerabilities. This enables security teams to continuously validate and respond to risks throughout the entire development, runtime, and operational lifecycle, achieving more cohesive risk management.",
    tags_en: ["CNAPP", "Microsoft Defender for Cloud", "Cloud-Native Security", "Risk Management", "Multi-Cloud Environment", "Application Lifecycle"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/06/24/cnapp-evolution-how-microsoft-aligns-with-leading-cloud-risk-management-platforms", lang: "EN" }
    ]
  },
  {
    id: "20260624-068",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Novee Security揭露Cordyceps漏洞：CI/CD工作流缺陷可讓攻擊者接管300個大型開源專案",
    summary: "資安研究機構 Novee Security 發現了一類名為 Cordyceps 的 CI/CD 工作流缺陷，可讓未經身份驗證的攻擊者接管大型開源專案的儲存庫。該漏洞的核心問題在於 CI/CD 設定過於寬鬆，允許拉取請求（PR）觸發權限過高的工作流。攻擊者只需一個免費帳號，即可偽造批准、推送程式碼或竊取憑證。Novee 對約 30,000 個高影響力儲存庫進行掃描，發現超過 300 個專案存在完全可利用的缺陷。實務影響極為嚴重，攻擊者可執行惡意程式碼、竊取憑證並從而危害整個軟體供應鏈。例如，在 Microsoft 的 Azure Sentinel 上，攻擊者可透過 PR 運行匿名程式碼，竊取 GitHub App key；在 Google 的 AI Agent Development Kit 上，可取得 Google Cloud 儲存庫的完全權限。修補建議是嚴格審核 CI/CD 工作流的權限範圍，確保 PR 僅擁有完成其任務所需的最小權限，並實施更嚴格的信任邊界控制。",
    tags: ["CI/CD", "Cordyceps", "開源專案", "軟體供應鏈", "Novee Security", "拉取請求", "憑證竊取"],
    title_en: "Novee Security Discloses Cordyceps Vulnerability: CI/CD Workflow Flaws Allow Attackers to Hijack 300 Large Open-Source Projects",
    summary_en: "Security research organization Novee Security discovered a class of CI/CD workflow flaws, dubbed Cordyceps, that allow unauthenticated attackers to hijack large open-source project repositories. The core issue lies in overly permissive CI/CD configurations, which allow pull requests (PRs) to trigger workflows with excessive permissions. An attacker only needs a free account to forge approvals, push code, or steal credentials. Novee scanned approximately 30,000 high-impact repositories and found over 300 projects with fully exploitable flaws. The practical impact is extremely severe; attackers can execute malicious code, steal credentials, and thereby compromise the entire software supply chain. For example, on Microsoft's Azure Sentinel, an attacker can run anonymous code via a PR to steal a GitHub App key; and on Google's AI Agent Development Kit, they can gain full access to Google Cloud repositories. The recommended remediation is to strictly audit the permission scope of CI/CD workflows, ensuring that PRs only possess the minimum necessary permissions to complete their tasks, and implementing stricter trust boundary controls.",
    tags_en: ["CI/CD", "Cordyceps", "Open-Source Projects", "Software Supply Chain", "Novee Security", "Pull Request", "Credential Theft"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-069",
    trackers: ["os"],
    category: "Android",
    title: "GM 宣布車用 Google 內建系統擴增支援 200+ 應用程式，並擴展至後座螢幕",
    summary: "通用汽車（GM）宣布，其搭載 Google 內建系統（Google built-in）的車輛，將透過最新的軟體更新，開放超過 200 個新的 Google Play 應用程式。這項更新不僅讓駕駛座可存取更多串流媒體、遊戲和互動內容，更特別擴展至後座乘客螢幕。受影響的車型包括 2025 年及更新款的 Chevrolet Tahoe/Suburban、Cadillac Escalade 等，以及 GMC Yukon/Yukon XL。GM 正在逐步淘汰 Android Auto 和 CarPlay 的支援，使車載娛樂體驗完全依賴「Google 內建」系統。新增的應用程式涵蓋 YouTube、Disney+、Hulu 等串流服務，讓前座和後座乘客都能享受個人化的內容。雖然部分服務如 Amazon Music、Spotify 等後座支援功能「即將推出」，但這大幅提升了車輛的娛樂功能和用戶體驗。用戶需透過 OnStar 連接和 Google 帳號登入才能使用這些新功能。",
    tags: ["GM", "Android Automotive", "Google Play", "車載娛樂", "Google built-in", "串流媒體"],
    title_en: "GM Announces Expansion of Google Built-in System Support for 200+ Applications, Extending to Rear Screens",
    summary_en: "General Motors (GM) announced that vehicles equipped with the Google built-in system will receive a major software update, granting access to over 200 new Google Play applications. This update not only expands the driver's access to more streaming media, games, and interactive content but also extends this functionality to the rear passenger screens. Affected models include the 2025 and newer Chevrolet Tahoe/Suburban, Cadillac Escalade, and GMC Yukon/Yukon XL. GM is phasing out support for Android Auto and CarPlay, making the in-vehicle entertainment experience entirely reliant on the \"Google built-in\" system. The new applications cover streaming services such as YouTube, Disney+, and Hulu, allowing both front and rear passengers to enjoy personalized content. Although rear support for some services like Amazon Music and Spotify is \"coming soon,\" this significantly enhances the vehicle's entertainment capabilities and user experience. Users must connect via OnStar and log in with a Google account to utilize these new features.",
    tags_en: ["GM", "Android Automotive", "Google Play", "In-Vehicle Entertainment", "Google built-in", "Streaming Media"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/24/gm-new-android-automotive-google-built-in-apps", lang: "EN" }
    ]
  },
  {
    id: "20260624-070",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Play 宣布新的開發者收入模式：提供多樣化計費選項與分開服務費",
    summary: "Google Play 宣布更新其開發者商業模式，旨在提供更靈活的數位商品和內容銷售選項。新機制允許開發者在英國、歐盟經濟區和美國等地區，除了使用 Google Play 內建的計費系統外，還可以提供替代的計費系統或引導用戶至自有網站進行購買。開發者甚至可以根據 UX 指南設計自訂的選擇畫面。\n\n為實現這種靈活性，Google Play 將服務費用（service fee）與計費費用（billing fee）分開。自 2026 年 6 月 30 日起，服務費將在美國、歐盟經濟區和英國率先實施。新的服務費率為：年收入前 100 萬美元（USD）的交易為 10%；對於所有自動續訂的訂閱服務，也適用 10% 的服務費。其他交易的費率則依據用戶的安裝時間（新安裝或現有安裝）而定。\n\n此變動實質上賦予開發者更大的營收控制權，但開發者需注意了解新的費率結構和地區性生效日期，以確保商業流程的順暢。",
    tags: ["Google Play", "Android", "開發者經濟模式", "服務費用", "數位內容", "收入流動性"],
    title_en: "Google Play Announces New Developer Revenue Model: Offering Diverse Billing Options and Separating Service Fees",
    summary_en: "Google Play has announced an update to its developer business model, aiming to provide more flexible options for selling digital goods and content. The new mechanism allows developers, in regions such as the UK, the European Economic Area (EEA), and the US, to offer alternative billing systems or direct users to their own websites for purchases, in addition to using Google Play's built-in billing system. Developers can even design customized selection screens based on UX guidelines.\n\nTo achieve this flexibility, Google Play will separate the service fee from the billing fee. Starting June 30, 2026, the service fee will be implemented first in the US, the EEA, and the UK. The new service fee rates are: 10% for transactions up to $1 million USD in annual revenue; and a 10% service fee also applies to all auto-renewing subscription services. The fee rate for other transactions will vary depending on whether the user is newly installing or has an existing installation.\n\nWhile this change effectively grants developers greater revenue control, developers must pay attention to understanding the new fee structure and regional effective dates to ensure smooth business operations.",
    tags_en: ["Google Play", "Android", "Developer Business Model", "Service Fee", "Digital Content", "Revenue Stream"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/06/play-expanded-billing.html", lang: "EN" }
    ]
  },
  {
    id: "20260624-071",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome Android WebGL 存在 Use-after-free 漏洞，可能導致沙箱逃逸，需更新至 149.0.7827.197 以上版本",
    summary: "Google Chrome 在 Android 平台上的 WebGL 實作中，存在一個名為 CVE-2026-13028 的 Use-after-free 漏洞。此漏洞允許遠端攻擊者透過精心構造的 HTML 頁面，潛在地執行沙箱逃逸（sandbox escape）。該漏洞的嚴重性被評定為 Critical。受影響的產品為 Android 平台上的 Google Chrome，版本為 149.0.7827.197 之前的版本。攻擊向量為網路（AV:N），無需本地權限（PR:N），且利用複雜度低（AC:L）。實務上，攻擊者可利用此漏洞在網頁環境中執行高權限的程式碼，對用戶設備構成重大威脅。修補建議是立即將 Google Chrome 瀏覽器更新至 149.0.7827.197 或更高版本，以修補此 WebGL 核心元件的記憶體管理缺陷。",
    tags: ["Google Chrome", "Android", "CVE-2026-13028", "WebGL", "Use-after-free", "沙箱逃逸"],
    title_en: "Chrome Android WebGL has Use-after-free vulnerability, potentially leading to sandbox escape; update to version 149.0.7827.197 or later",
    summary_en: "Google Chrome's implementation of WebGL on the Android platform contains a Use-after-free vulnerability, designated as CVE-2026-13028. This vulnerability allows a remote attacker to potentially execute a sandbox escape via a specially crafted HTML page. The severity of this vulnerability is assessed as Critical. The affected product is Google Chrome on the Android platform, specifically versions prior to 149.0.7827.197. The attack vector is network (AV:N), no local privileges are required (PR:N), and the complexity is low (AC:L). In practice, an attacker can exploit this vulnerability to execute high-privilege code within a web page environment, posing a significant threat to user devices. The recommended fix is to immediately update the Google Chrome browser to version 149.0.7827.197 or higher, to patch this memory management flaw in the WebGL core component.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-13028", "WebGL", "Use-after-free", "Sandbox Escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-13028", lang: "EN" }
    ]
  },
  {
    id: "20260624-072",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome 瀏覽器 Android 版面臨 CVE-2026-13030 漏洞：GPU 記憶體未初始化使用導致資訊洩露",
    summary: "Google Chrome 在 Android 平台上的版本，早於 149.0.7827.197，存在一個名為 CVE-2026-13030 的安全漏洞。此漏洞的本質是「GPU 記憶體未初始化使用」（Uninitialized Use in GPU），允許遠端攻擊者透過精心構造的 HTML 網頁，從程序記憶體中竊取潛在的敏感資訊。根據 CVSS 3.1 評分，攻擊向量為網路（AV:N），攻擊複雜度為高（AC:H），且無需用戶互動（UI:R）。實務上，這類漏洞可能導致用戶資料或會話資訊被竊取。修補建議是立即升級 Google Chrome 瀏覽器至 149.0.7827.197 或更高版本，以修復此 GPU 相關的記憶體安全問題。",
    tags: ["Google Chrome", "Android", "CVE-2026-13030", "GPU", "記憶體安全", "資訊洩露"],
    title_en: "Chrome Browser Android Version Affected by CVE-2026-13030 Vulnerability: Information Leakage Due to Uninitialized GPU Memory Use",
    summary_en: "Google Chrome versions on the Android platform, prior to 149.0.7827.197, contain a security vulnerability identified as CVE-2026-13030. The vulnerability stems from 'Uninitialized Use in GPU,' which allows a remote attacker to steal potentially sensitive information from process memory by loading a specially crafted HTML webpage. Based on the CVSS 3.1 scoring, the attack vector is Network (AV:N), the attack complexity is High (AC:H), and no user interaction is required (UI:R). In practice, this type of vulnerability could lead to the theft of user data or session information. The recommended fix is to immediately upgrade Google Chrome browser to version 149.0.7827.197 or later to patch this GPU-related memory safety issue.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-13030", "GPU", "Memory Safety", "Information Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-13030", lang: "EN" }
    ]
  },
  {
    id: "20260624-073",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome Android WebGL 存在 Use-after-free 漏洞，可能導致沙箱逃逸，需更新至 149.0.7827.197 以上版本",
    summary: "Google Chrome 在 Android 平台上的 WebGL 實作中，存在一個名為 CVE-2026-13032 的 Use-after-free 漏洞。此漏洞允許遠端攻擊者透過精心構造的 HTML 頁面，潛在地執行沙箱逃逸（sandbox escape）。該漏洞的嚴重性被評定為 Critical。受影響的產品是 Android 平台上的 Google Chrome，版本為 149.0.7827.197 之前的版本。攻擊向量為網路（AV:N），無需本地權限（PR:N），且在低複雜度條件下（AC:L）。實務上，攻擊者可利用此漏洞在 WebGL 渲染環境中觸發記憶體管理錯誤，進而突破應用程式的隔離機制。為修補此漏洞，使用者應立即將 Google Chrome 更新至 149.0.7827.197 或更高版本。開發者應特別注意 WebGL 相關的記憶體安全處理。",
    tags: ["Google Chrome", "Android", "CVE-2026-13032", "WebGL", "Use-after-free", "沙箱逃逸"],
    title_en: "Chrome Android WebGL has Use-after-free vulnerability, potentially leading to sandbox escape; update to version 149.0.7827.197 or higher",
    summary_en: "Google Chrome's WebGL implementation on the Android platform contains a Use-after-free vulnerability, designated as CVE-2026-13032. This vulnerability allows a remote attacker to potentially achieve sandbox escape by utilizing a specially crafted HTML page. The severity of this vulnerability is rated as Critical. The affected product is Google Chrome on the Android platform, specifically versions prior to 149.0.7827.197. The attack vector is network (AV:N), requiring no local privileges (PR:N), and having low complexity (AC:L). In practice, an attacker can exploit this vulnerability to trigger a memory management error within the WebGL rendering environment, thereby bypassing the application's isolation mechanism. To patch this vulnerability, users should immediately update Google Chrome to version 149.0.7827.197 or higher. Developers should pay special attention to memory safety handling related to WebGL.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-13032", "WebGL", "Use-after-free", "sandbox escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-13032", lang: "EN" }
    ]
  },
  {
    id: "20260624-074",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome WebView 於 Android 平台存在 UAF 漏洞，允許本地攻擊者執行任意程式碼",
    summary: "Google Chrome 的 WebView 元件在 Android 平台上存在 CVE-2026-13037 漏洞。此漏洞屬於使用後釋放 (Use after free, UAF) 類型，允許本地攻擊者透過精心構造的 HTML 頁面，在沙盒環境內執行任意程式碼。該漏洞的嚴重性被評定為高風險 (High)。受影響的產品為 Android 平台上的 Chrome WebView，版本為 149.0.7827.197 之前。攻擊向量為本地 (Local)，無需使用者互動 (User Interaction: None)，且攻擊成功後可達到高度的機密性、完整性與可用性影響。修補建議是升級 WebView 元件至 149.0.7827.197 或更高版本，以修復此核心安全缺陷。",
    tags: ["Google Chrome", "WebView", "Android", "CVE-2026-13037", "Use after free", "Chromium"],
    title_en: "Google Chrome WebView on Android Platform Has UAF Vulnerability Allowing Local Code Execution",
    summary_en: "The Google Chrome WebView component on the Android platform contains the CVE-2026-13037 vulnerability. This vulnerability is of the Use after free (UAF) type, allowing a local attacker to execute arbitrary code within a sandbox environment via a specially crafted HTML page. The vulnerability is rated as High severity. The affected product is Chrome WebView on the Android platform, versions prior to 149.0.7827.197. The attack vector is Local, requires no User Interaction, and successful exploitation can achieve high impact on Confidentiality, Integrity, and Availability. The recommended fix is to upgrade the WebView component to version 149.0.7827.197 or later, to patch this critical security flaw.",
    tags_en: ["Google Chrome", "WebView", "Android", "CVE-2026-13037", "Use after free", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-13037", lang: "EN" }
    ]
  },
  {
    id: "20260624-075",
    trackers: ["security"],
    category: "前瞻技術",
    title: "1Password併購Apono：整合AI代理身分管理與意圖存取控制，強化企業存取治理",
    summary: "資安廠商1Password宣布併購以色列資安新創公司Apono，旨在解決隨著AI代理（AI Agents）普及，傳統身分管理系統難以應對的碎片化安全治理問題。1Password指出，現有系統多僅能驗證「准許進入」，而無法對身分進入系統後的行為進行持續監控。此次整合將利用Apono的「意圖存取控制」（Intent-Based Access Control）技術，將其納入1Password今年3月推出的統一存取平臺。核心目標是確保無論是人類、機器或AI代理，都能在完成任務的精確時刻，僅獲得所需的最小權限（Least Privilege），並能即時監測其行為是否偏離預期意圖。這項技術的實務影響是將身分管理從單純的「准入驗證」提升至「持續行為監控與權限精準縮減」，強化了企業在AI時代的整體身分安全治理能力。",
    tags: ["1Password", "Apono", "AI代理", "意圖存取控制", "身分管理", "最小權限"],
    title_en: "1Password Acquires Apono: Integrating AI Agent Identity Management and Intent-Based Access Control to Strengthen Enterprise Access Governance",
    summary_en: "Cybersecurity vendor 1Password announced the acquisition of Apono, an Israeli cybersecurity startup. This move aims to solve the fragmented security governance issues that traditional identity management systems struggle to address with the proliferation of AI Agents. 1Password points out that existing systems can only verify 'permission to enter,' but cannot continuously monitor behavior after the identity has entered the system. This integration will utilize Apono's 'Intent-Based Access Control' technology, incorporating it into the unified access platform that 1Password launched this March. The core objective is to ensure that whether the user is a human, machine, or AI agent, they only receive the minimum required privileges (Least Privilege) at the precise moment needed to complete a task, and that their behavior can be monitored in real-time for deviations from the expected intent. The practical implication of this technology is elevating identity management from mere 'entry verification' to 'continuous behavioral monitoring and precise privilege reduction,' thereby strengthening overall identity security governance for enterprises in the AI era.",
    tags_en: ["1Password", "Apono", "AI Agents", "Intent-Based Access Control", "Identity Management", "Least Privilege"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176826", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-076",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CISA 指引：利用 SASE 實現現代化 TIC 3.0 解決方案，推動零信任架構採用",
    summary: "美國網路安全局（CISA）發布了《利用 SASE 在現代 TIC 3.0 解決方案中的旅程》指引。該文件詳細說明了「可信網際網路連接」（TIC）3.0 倡議如何協助政府機構現代化用戶連接應用程式、資料和服務的方式。雖然主要目標受眾為聯邦機構，但任何希望現代化傳統邊界式架構、推進零信任（Zero Trust）採用，並改善分散式環境中可見度和控制能力的組織都能從此指引中受益。該指引強調了將安全存取服務邊緣（SASE）整合到現代的 TIC 3.0 解決方案中，以強化網路安全防護，實現更精細的存取控制和持續的風險管理。建議組織應參考此指引，規劃其網路架構的現代化路徑，特別是針對零信任原則的實施。",
    tags: ["CISA", "SASE", "零信任架構", "TIC 3.0", "網路安全"],
    title_en: "CISA Guidance: Leveraging SASE to Implement Modern TIC 3.0 Solutions and Drive Zero Trust Adoption",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) has released the 'Journey of Using SASE in Modern TIC 3.0 Solutions' guidance. This document details how the 'Trusted Internet Connectivity' (TIC) 3.0 initiative can assist government agencies in modernizing the way user connections access applications, data, and services. While the primary target audience is federal agencies, any organization looking to modernize traditional perimeter-based architectures, advance Zero Trust adoption, and improve visibility and control capabilities in distributed environments can benefit from this guidance. The guidance emphasizes integrating Secure Access Service Edge (SASE) into modern TIC 3.0 solutions to strengthen cybersecurity defenses, achieve more granular access control, and enable continuous risk management. Organizations are advised to refer to this guidance when planning their network architecture modernization path, especially concerning the implementation of Zero Trust principles.",
    tags_en: ["CISA", "SASE", "Zero Trust Architecture", "TIC 3.0", "Cybersecurity"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/resources-tools/resources/using-sase-modern-tic-30-solution", lang: "EN" }
    ]
  },
  {
    id: "20260624-077",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Anbox Cloud結合Google C4A Metal，實現大規模、高保真度的Android雲端開發與測試",
    summary: "本文介紹了Canonical的Anbox Cloud平台，結合Google Cloud推出的C4A Metal（基於Axion的裸機實例），為Android開發者提供了一個革命性的雲端解決方案。傳統上，Android開發需要在物理設備實驗室和雲端抽象化環境之間做出取捨。C4A Metal透過在雲端提供原生的Arm硬體支援，消除了這種性能限制和複雜性。Anbox Cloud可以利用C4A Metal在裸機層級運行和協調大量的Android系統，無需嵌套虛擬化，確保了與AOSP和Cuttlefish等參考平台的極高保真度。這使得系統級Android開發、驗證和合規性工作流程能夠無縫遷移到雲端。對於需要大規模Cuttlefish環境的平台團隊和車廠OEM而言，這意味著可以建立一個具備雲原生擴展能力、行為如同真實硬體的Cuttlefish叢集，極大地提升了開發效率和並行處理能力。此外，Anbox Cloud設計為可在C4A和N4A等Axion系列環境運行，提供了一個跨越不同硬體層級的統一平台。",
    tags: ["Anbox Cloud", "C4A Metal", "Android 開發", "Cuttlefish", "Arm 架構", "雲端虛擬化"],
    title_en: "Anbox Cloud integrates with Google C4A Metal to enable large-scale, high-fidelity Android cloud development and testing",
    summary_en: "This article introduces Canonical's Anbox Cloud platform, which integrates with Google Cloud's C4A Metal (a bare-metal instance based on Axion), providing a revolutionary cloud solution for Android developers. Traditionally, Android development required compromising between physical device labs and abstracted cloud environments. C4A Metal eliminates this performance limitation and complexity by offering native Arm hardware support in the cloud. Anbox Cloud can leverage C4A Metal to run and coordinate numerous Android systems at the bare-metal level, eliminating the need for nested virtualization and ensuring extremely high fidelity with reference platforms like AOSP and Cuttlefish. This allows system-level Android development, validation, and compliance workflows to seamlessly transition to the cloud. For platform teams and automotive OEMs requiring large-scale Cuttlefish environments, this means they can establish a Cuttlefish cluster with cloud-native scalability and behavior identical to real hardware, greatly enhancing development efficiency and parallel processing capabilities. Furthermore, Anbox Cloud is designed to operate in Axion series environments such as C4A and N4A, offering a unified platform that spans across different hardware layers.",
    tags_en: ["Anbox Cloud", "C4A Metal", "Android Development", "Cuttlefish", "Arm Architecture", "Cloud Virtualization"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/anbox-cloud-on-c4a-metal-android-at-scale-without-friction", lang: "EN" }
    ]
  },
  {
    id: "20260624-078",
    trackers: ["os"],
    category: "重點關注",
    title: "Instagram Reels 支援 Google Cast 投射至電視，擴大內容觀看場景",
    summary: "Meta 的 Instagram 應用程式現已推出支援 Google Cast 功能，使用者可直接將 Reels 影片內容從手機投射到任何支援 Google Cast 的電視上。此功能讓用戶無需額外安裝應用程式，即可透過 Chromecast 或內建 Cast 功能的電視（如 Vizio、LG 等）觀看 Reels。Meta 宣布，此功能已在 Google TV 和 Fire TV 上可見，包括「儲存」頁面的影片。目前該功能透過手機操作，只需數個步驟即可完成投射。雖然文章指出這是一個基於帳號的逐步推出，尚未對所有用戶開放，但它代表 Instagram 正在測試一個專為橫向內容設計的「專屬主頁」，以充分利用電視大螢幕的觀看體驗。此更新旨在提升 Reels 的觀看便利性與分享性，讓用戶能更輕鬆地將喜愛的內容帶到電視群組觀看。",
    tags: ["Instagram", "Meta", "Google Cast", "Reels", "電視觀看", "跨平台"],
    title_en: "Instagram Reels supports Google Cast casting to TVs, expanding content viewing scenarios",
    summary_en: "Meta's Instagram application now features support for Google Cast, allowing users to directly cast Reels video content from their mobile phones to any Google Cast-compatible TV. This feature enables users to watch Reels on TVs with Chromecast or built-in Cast functionality (such as Vizio, LG, etc.) without needing to install extra applications. Meta announced that this feature is visible on Google TV and Fire TV, including videos from the 'Saved' section. Currently, the function is operated via the mobile phone and can be completed in just a few steps. Although the article notes that this is a gradual, account-based rollout and is not yet available to all users, it represents Instagram testing a dedicated 'home page' designed for horizontal content, aiming to fully utilize the viewing experience of large TV screens. This update aims to enhance the viewing convenience and shareability of Reels, allowing users to easily bring their favorite content to a group viewing on a TV.",
    tags_en: ["Instagram", "Meta", "Google Cast", "Reels", "TV Viewing", "Cross-platform"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/24/instagram-reels-google-cast-support-tv", lang: "EN" }
    ]
  },
  {
    id: "20260624-079",
    trackers: ["os"],
    category: "重點關注",
    title: "Gemini 整合 Chrome 瀏覽器，推出「螢幕選取」工具，並升級 3.5 Flash 支援電腦使用功能",
    summary: "Google 宣布 Gemini 整合到 Chrome 瀏覽器中，新增了「螢幕選取」（Select from screen）工具。此功能允許使用者快速擷取當前頁面的文字或圖片，直接作為提示（prompt）輸入給 Gemini，提升了互動性。此功能正作為 Chrome 149 的一部分逐步推出，使用者可能需要重新啟動瀏覽器才能看到。此外，Google 也宣布 Gemini 3.5 Flash 模型升級，現具備內建的「電腦使用」（Computer Use）工具。此原生整合取代了獨立的 Gemini 2.5 Computer Use 模型，讓開發者可以利用此功能建構跨瀏覽器、行動和桌面環境的自定義代理（custom agents）。這項升級提升了模型在長週期和企業自動化任務上的表現，例如分析應用程式功能列表。在安全性方面，企業客戶可要求對敏感或不可逆的動作進行明確的用戶確認，並能在偵測到間接提示注入（indirect prompt injection）時自動停止任務。Gemini 3.5 Flash 模型現已透過 Gemini API 上線。",
    tags: ["Google", "Gemini", "Chrome", "Gemini 3.5 Flash", "AI 代理", "提示工程", "Chrome 149"],
    title_en: "Gemini Integrates with Chrome Browser, Launches 'Select from screen' Tool, and Upgrades 3.5 Flash for Computer Use Functionality",
    summary_en: "Google announced that Gemini has been integrated into the Chrome browser, adding a new 'Select from screen' tool. This feature allows users to quickly capture text or images from the current page and directly input them as prompts to Gemini, enhancing interactivity. This functionality is being rolled out gradually as part of Chrome 149, and users may need to restart the browser to see it. Furthermore, Google announced an upgrade to the Gemini 3.5 Flash model, which now includes a built-in 'Computer Use' tool. This native integration replaces the standalone Gemini 2.5 Computer Use model, allowing developers to build custom agents that operate across browser, mobile, and desktop environments. This upgrade improves the model's performance in long-term and enterprise automation tasks, such as analyzing application feature lists. From a security perspective, enterprise customers can require explicit user confirmation for sensitive or irreversible actions, and the task will automatically stop upon detection of indirect prompt injection. The Gemini 3.5 Flash model is now available via the Gemini API.",
    tags_en: ["Google", "Gemini", "Chrome", "Gemini 3.5 Flash", "AI Agents", "Prompt Engineering", "Chrome 149"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/24/gemini-chrome-select-screen", lang: "EN" }
    ]
  },
  {
    id: "20260624-080",
    trackers: ["os"],
    category: "重點關注",
    title: "無法歸納為資安新聞，內容為個人閒聊與產品推薦",
    summary: "本文為一篇個人生活風格分享文章，內容涵蓋了多種電子產品的推薦，包括充電器、耳機、平板電腦、配件等。文章未提及任何資安漏洞、系統更新、CVE 編號或任何技術安全議題。因此，無法撰寫資安新聞摘要。",
    tags: ["產品推薦", "生活風格", "電子產品"],
    title_en: "Cannot be classified as cybersecurity news; content is personal chat and product recommendations",
    summary_en: "This article is a personal lifestyle sharing piece, covering recommendations for various electronic products, including chargers, earphones, tablets, and accessories. The article does not mention any security vulnerabilities, system updates, CVE IDs, or any technical security issues. Therefore, it cannot be written as a cybersecurity news summary.",
    tags_en: ["Product Recommendation", "Lifestyle", "Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/24/here-are-some-discounted-older-tech-items-i-still-heartily-recommend", lang: "EN" }
    ]
  },
  {
    id: "20260624-081",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法撰寫新聞標題：原文內容為消費電子產品購物清單，無資安事件資訊",
    summary: "本文為個人生活分享，內容討論Amazon Prime Day的購物體驗，並分享作者多年累積的日常使用電子產品清單。文章未提及任何資安漏洞、產品安全更新或技術風險資訊，因此無法撰寫資安新聞摘要。",
    tags: ["Amazon", "Prime Day", "消費電子", "生活分享"],
    title_en: "Cannot write news title: Original content is a consumer electronics shopping list, with no cybersecurity event information",
    summary_en: "This article is a personal life share, discussing the shopping experience of Amazon Prime Day and sharing the author's accumulated list of daily-use electronic products over many years. The article does not mention any security vulnerabilities, product safety updates, or technical risk information, and therefore cannot be summarized as a cybersecurity news item.",
    tags_en: ["Amazon", "Prime Day", "Consumer Electronics", "Life Sharing"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/24/my-prime-day-picks-are-mostly-boring-but-thats-also-why-theyre-worth-buying", lang: "EN" }
    ]
  },
  {
    id: "20260624-082",
    trackers: ["os"],
    category: "重點關注",
    title: "AirPods Pro 3內建心率感測器表現優異，超越多數智慧手錶與穿戴裝置",
    summary: "本篇文章比較了AirPods Pro 3內建的心率感測器與多款主流穿戴裝置（包括Apple Watch Series 11、Garmin Venu 4、Google Pixel Watch 4、Samsung Galaxy Watch 8等）的準確性。測試採用Polar H10胸帶作為黃金標準，在不同強度運動下進行心率數據記錄。結果顯示，Apple Watch Series 11仍保持領先地位，平均誤差率為0.63%，心率差異為0.89 BPM。AirPods Pro 3則位居第二，平均誤差率為1.23%，心率差異為2.02 BPM。儘管AirPods Pro 3的數據準確度優於所有非Apple品牌的穿戴裝置，但若用戶已購買AirPods Pro 3，可能無需額外購買智慧手錶僅為心率數據。文章指出，耳部位置可能比手腕更適合測量心率。",
    tags: ["AirPods Pro 3", "Apple Watch Series 11", "心率感測器", "穿戴裝置", "健康追蹤", "Polar H10"],
    title_en: "AirPods Pro 3's Built-in Heart Rate Sensor Performs Well, Outperforming Many Smartwatches and Wearables",
    summary_en: "This article compares the heart rate sensor built into the AirPods Pro 3 with several mainstream wearable devices (including Apple Watch Series 11, Garmin Venu 4, Google Pixel Watch 4, Samsung Galaxy Watch 8, etc.) regarding accuracy. The testing used a Polar H10 chest strap as the gold standard, recording heart rate data during different intensity exercises. The results show that the Apple Watch Series 11 still maintains the leading position, with an average error rate of 0.63% and a heart rate difference of 0.89 BPM. The AirPods Pro 3 ranks second, with an average error rate of 1.23% and a heart rate difference of 2.02 BPM. Although the data accuracy of the AirPods Pro 3 is superior to all non-Apple brand wearables, users who already own the AirPods Pro 3 may not need to purchase a smartwatch solely for heart rate data. The article points out that the ear location may be more suitable for measuring heart rate than the wrist.",
    tags_en: ["AirPods Pro 3", "Apple Watch Series 11", "Heart Rate Sensor", "Wearable Devices", "Health Tracking", "Polar H10"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/heres-how-the-airpods-heart-rate-sensor-fares-against-apple-watch-and-other-wearables", lang: "EN" }
    ]
  },
  {
    id: "20260624-083",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 更新 GPT-5.5 Instant 模型：提升對話自然度與理解複雜意圖能力",
    summary: "OpenAI 宣布更新其最常用的 AI 模型 GPT-5.5 Instant 版本。該模型最初於五月五日推出，並經歷了兩次行為調整。本次更新旨在讓模型「更具趣味性」，並提升其理解用戶提問背後意圖的能力，使其能更適當地調整回應。此外，新版本也宣稱能更可靠地處理複雜的限制條件，並使購物和本地推薦的建議更實用、更連貫。付費用戶預計今日即可使用更新後的模型，免費用戶則將於隔日開放。本次更新屬於模型行為與功能優化，而非修補安全漏洞，主要影響用戶的日常使用體驗。",
    tags: ["OpenAI", "GPT-5.5 Instant", "AI 模型", "大型語言模型", "LLM", "模型更新"],
    title_en: "OpenAI Updates GPT-5.5 Instant Model: Enhancing Conversational Naturalness and Complex Intent Understanding",
    summary_en: "OpenAI announced an update to its widely used AI model, GPT-5.5 Instant. Initially launched on May 5th, the model has undergone two previous behavioral adjustments. This update aims to make the model 'more engaging' and enhance its ability to understand the intent behind user queries, allowing it to adjust responses more appropriately. Furthermore, the new version claims to handle complex constraints more reliably, making shopping and local recommendation suggestions more practical and coherent. Paid subscribers are expected to have access to the updated model today, while free subscribers will receive access the following day. This update constitutes model behavior and functional optimization, rather than a security vulnerability patch, and primarily affects the user's daily usage experience.",
    tags_en: ["OpenAI", "GPT-5.5 Instant", "AI Model", "Large Language Model", "LLM", "Model Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/openai-just-updated-how-chatgpts-most-used-model-works-again-details-here", lang: "EN" }
    ]
  },
  {
    id: "20260624-084",
    trackers: ["os"],
    category: "重點關注",
    title: "無可用內容：9to5Mac Daily 節目回顧（2026年6月24日）",
    summary: "本文為 9to5Mac Daily 節目回顧的內容頁面，僅包含收聽連結、贊助商廣告（Roborock）以及一個音訊播放器。原文未提供任何具體的資安事件、漏洞或產品更新資訊，因此無法撰寫資安新聞摘要。建議讀者透過收聽音訊內容或查閱其他來源獲取資訊。",
    tags: ["9to5Mac", "資安資訊", "節目回顧", "無內容"],
    title_en: "No Available Content: 9to5Mac Daily Program Recap (June 24, 2026)",
    summary_en: "This article is a content page for the 9to5Mac Daily program recap, containing only listening links, sponsor advertisements (Roborock), and an audio player. Since the original source does not provide any specific cybersecurity incidents, vulnerabilities, or product update information, a cybersecurity news summary cannot be written. Readers are advised to listen to the audio content or check other sources for information.",
    tags_en: ["9to5Mac", "Cybersecurity Information", "Program Recap", "No Content"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/daily-june-24-2026", lang: "EN" }
    ]
  },
  {
    id: "20260624-085",
    trackers: ["os"],
    category: "重點關注",
    title: "USB-C 接口標準混亂：選購周邊設備時需注意規格差異",
    summary: "本文討論了 USB-C 接口標準在實務應用上的混亂性。USB-C 本身僅是一個外觀的插頭和插座形式（form-factor），而非一個統一的標準。這導致用戶在選購周邊設備，特別是連接線材時，難以確定產品是否完全符合所需標準，也難以判斷是否需要購買過於高規格的線材。文章提醒用戶，在購買 USB-C 相關產品時，必須仔細了解其背後的實際標準（如 USB4 與 Thunderbolt 4）和所需功能，避免因規格混淆而導致設備無法正常運作或浪費預算。",
    tags: ["USB-C", "USB4", "Thunderbolt 4", "周邊設備", "標準化"],
    title_en: "USB-C Interface Standard Confusion: Caution When Purchasing Peripherals",
    summary_en: "This article discusses the confusion surrounding USB-C interface standards in practical applications. USB-C itself is merely a physical connector form-factor, not a unified standard. This leads users to difficulty in determining whether a peripheral device, especially connecting cables, fully meets the required standard, and also makes it hard to judge if purchasing overly high-spec cables is necessary. The article reminds users that when buying USB-C related products, they must carefully understand the underlying actual standards (such as USB4 and Thunderbolt 4) and required functions, to avoid equipment malfunction or budget waste due to specification confusion.",
    tags_en: ["USB-C", "USB4", "Thunderbolt 4", "Peripherals", "Standardization"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/24/can-you-save-money-with-a-usb4-cable-over-a-thunderbolt-4-one", lang: "EN" }
    ]
  },
  {
    id: "20260624-086",
    trackers: ["security"],
    category: "產業動態",
    title: "多達十家資安公司受駭：Klue Battlecards應用程式遭入侵，用戶資料外洩風險升高",
    summary: "多達十家資安公司，包括Huntress、HackerOne、Insurity、Jamf等，確認其應用程式Klue Battlecards曾遭駭客入侵。駭客透過此應用程式試圖竊取儲存在Salesforce平台上的用戶資料。受影響的範圍僅限於Salesforce的執行個體，其他系統與產品系統仍正常運作。受害公司已立即切斷與Klue的整合，並正在進行深入調查，以確認受影響的資料範圍。此外，密碼管理服務廠商LastPass亦於後續證實部分客戶的聯絡和客戶支援資料外洩，使得受害資安廠商的總數達到十家。所有受影響公司均強調，目前尚未有具體公開的資料外洩細節，建議用戶留意相關通知，並保持警惕。",
    tags: ["Klue Battlecards", "Salesforce", "資安公司", "資料外洩", "Huntress", "LastPass"],
    title_en: "Up to Ten Cybersecurity Firms Affected by Breach: Klue Battlecards Application Compromised, Heightening Risk of User Data Leakage",
    summary_en: "Up to ten cybersecurity firms, including Huntress, HackerOne, Insurity, and Jamf, have confirmed that their application, Klue Battlecards, was compromised by hackers. The attackers attempted to steal user data stored on the Salesforce platform via this application. The scope of the impact is limited only to the Salesforce instance; other systems and product lines remain operational. The affected companies have immediately disconnected the integration with Klue and are conducting deep investigations to confirm the scope of the compromised data. Furthermore, password management service vendor LastPass later confirmed the leakage of some customer contact and support data, bringing the total number of affected cybersecurity firms to ten. All affected companies emphasize that there are currently no specific public details regarding the data leakage and advise users to monitor related notifications and remain vigilant.",
    tags_en: ["Klue Battlecards", "Salesforce", "Cybersecurity Firm", "Data Leakage", "Huntress", "LastPass"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176827", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260624-087",
    trackers: ["security"],
    category: "uncategorized",
    title: "Microsoft Edge 發現多個漏洞，資安專家提醒用戶立即更新以防範攻擊",
    summary: "資安研究機構發現 Microsoft Edge 瀏覽器存在多個安全漏洞。這些漏洞可能允許遠端攻擊者在未經授權的情況下執行惡意程式碼，造成系統的嚴重危害。由於漏洞的具體技術細節和受影響版本範圍未在原文中詳細公開，建議所有用戶應立即透過官方渠道更新至最新版本的 Edge 瀏覽器，以修補這些潛在的安全風險。用戶應保持警惕，並定期檢查瀏覽器和作業系統的更新通知，確保系統處於最佳的安全性狀態。本事件的實務影響為用戶的資料安全和系統完整性，建議用戶應將其視為高優先級的修補作業。",
    tags: ["Microsoft Edge", "安全漏洞", "資安更新", "瀏覽器安全", "遠端攻擊"],
    title_en: "Multiple Vulnerabilities Discovered in Microsoft Edge; Cybersecurity Experts Urge Immediate Update to Prevent Attacks",
    summary_en: "Cybersecurity research institutions have discovered multiple security vulnerabilities in the Microsoft Edge browser. These vulnerabilities could potentially allow remote attackers to execute malicious code without authorization, causing severe harm to the system. Since the specific technical details and affected version ranges of the vulnerabilities were not fully disclosed in the original text, all users are advised to immediately update to the latest version of the Edge browser through official channels to patch these potential security risks. Users should remain vigilant and regularly check for browser and operating system update notifications to ensure the system is in optimal security condition. The practical impact of this incident is on user data security and system integrity, and users are advised to treat this as a high-priority patching task.",
    tags_en: ["Microsoft Edge", "Security Vulnerability", "Cybersecurity Update", "Browser Security", "Remote Attack"],
    sources: [
      { name: "JPCERT/CC", url: "https://jpcert.or.jp/wr/2026/wr260624.html", lang: "EN" }
    ]
  }
];
