// data-20260713.js — 2026-07-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-13"] = [
  {
    id: "20260713-001",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客團體Helix疑似源自BlackFile，透過語音網釣與裝置代碼竊取權杖攻擊企業",
    summary: "威脅情報公司ReliaQuest揭露一個名為Helix的資料勒索團體，該團體被研判極可能是先前解散的BlackFile分裂後形成的。Helix的攻擊模式以身分盜用為基礎，攻擊者會先透過語音網釣（vishing）偽裝成受害組織的直屬主管，取得員工信任。接著，他們會誘導受害者完成裝置代碼驗證流程，從而繞過條件式存取原則，在不需密碼的情況下竊取已驗證的工作階段權杖（session token）。在攻擊戰術上，Helix會採取分頭式攻擊，先利用一個帳號進行資料偵察和竊取SharePoint資料，數日後再入侵另一個帳號，透過Teams或電子郵件發送勒索訊息。這種作法旨在分散資安團隊的調查資源，大幅提高事件回應的難度。",
    tags: ["Helix", "BlackFile", "ShinyHunters", "vishing", "裝置代碼釣魚", "SharePoint", "勒索軟體"],
    title_en: "Hacker Group Helix Suspected to Originate from BlackFile, Targeting Enterprises via Vishing and Device Code Token Theft",
    summary_en: "Threat intelligence firm ReliaQuest has disclosed a data extortion group named Helix, which is assessed to be highly likely formed from the remnants of the previously disbanded BlackFile. Helix's attack pattern is based on impersonation; attackers first use voice phishing (vishing) to impersonate a direct superior within the victimized organization, gaining the employee's trust. They then guide the victim to complete a device code verification process, thereby bypassing Conditional Access policies and stealing validated session tokens without requiring a password. In terms of attack tactics, Helix employs a decentralized approach, first using one account to conduct reconnaissance and steal SharePoint data, and several days later, infiltrating a separate account to send extortion messages via Teams or email. This method is designed to disperse the security team's investigative resources, significantly increasing the difficulty of incident response.",
    tags_en: ["Helix", "BlackFile", "ShinyHunters", "vishing", "Device Code Phishing", "SharePoint", "Ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177267", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-002",
    trackers: ["security"],
    category: "重大事件",
    title: "CISA高權限AWS憑證外洩事件：政府雲端資料洩漏風險與後續修復措施",
    summary: "美國網路安全與基礎設施安全局（CISA）曾因承包商將包含多個高權限AWS GovCloud政府雲端服務帳號及內部系統憑證的開發儲存庫複本，上傳至公開GitHub，引發重大資料外洩警報。此事件引起美國國會關注，外界擔憂其可能造成嚴重的政府資料外洩。CISA於接獲通報後，立即採取行動，已下架該GitHub儲存庫，並將開發環境下線、重置相關憑證，同時撤銷了該承包商的系統存取權限。鑑識結果顯示，洩漏的憑證並未用於CISA以外的環境，未造成客戶或任務資料外洩。CISA指出，事故源於承包商為建構自動化雲端基礎設施，將包含基礎設施即程式碼（IaC）和管理員憑證的資料公開。為防止類似事件再次發生，CISA已對相關環境進行了全面憑證輪換，並強化了程式碼儲存庫的存取控制，限制使用者上傳至公開儲存庫的能力。",
    tags: ["CISA", "AWS GovCloud", "GitHub", "憑證外洩", "政府資安", "資料外洩"],
    title_en: "CISA High-Privilege AWS Credentials Leak Incident: Government Cloud Data Leak Risk and Subsequent Remediation Measures",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) was alerted to a major data leak after a contractor uploaded a copy of a development repository containing multiple high-privilege AWS GovCloud government cloud service accounts and internal system credentials to public GitHub. This incident drew attention from the U.S. Congress, raising concerns about potential severe government data leakage. Upon receiving the notification, CISA took immediate action, taking the GitHub repository offline, taking the development environment offline, resetting relevant credentials, and revoking the contractor's system access. Forensic results indicated that the leaked credentials were not used in any environment outside of CISA, and no customer or mission data was compromised. CISA noted that the incident stemmed from the contractor making public data that included Infrastructure as Code (IaC) and administrator credentials while building automated cloud infrastructure. To prevent similar incidents, CISA conducted a comprehensive credential rotation across the relevant environments and strengthened access controls on code repositories, limiting the ability of users to upload to public repositories.",
    tags_en: ["CISA", "AWS GovCloud", "GitHub", "Credential Leak", "Government Security", "Data Leak"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177260", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-003",
    trackers: ["security"],
    category: "重大事件",
    title: "拉脫維亞林業公司LVM遭勒索軟體攻擊，外國駭客竊取44GB內部資料，影響客戶服務",
    summary: "拉脫維亞國有林業公司LVM於6月22日遭到勒索軟體攻擊，事發已超過三週，公司仍在修復受影響的資訊系統。LVM技術長透露，攻擊者鎖定一個已停用兩年的系統，利用特定漏洞進入，但公司表示未收到勒索訊息，並拒絕支付贖金。拉脫維亞電腦緊急應變團體CERT.LV介入調查，指出攻擊者為以經濟利益為動機的外國勒索軟體駭客集團，曾針對北約及歐盟機構進行攻擊。駭客在網路上公布了LVM約44 GB的資料，內容包括內部文件、電子郵件、專案程式碼、系統憑證、金鑰及使用者帳密等。雖然LVM參與開發國會選舉系統，但CERT.LV經比對確認，該系統的原始碼是獨立隔離並交付給國家數位發展局保管，未遭竄改或未經授權存取。此外，CERT.LV也指出同一駭客群組曾入侵基礎設施供應商Olpha的伺服器，但檔案未遭加密。",
    tags: ["LVM", "勒索軟體", "CERT.LV", "拉脫維亞", "資料外洩", "OT/ICS"],
    title_en: "Latvian Forestry Company LVM Hit by Ransomware Attack; Foreign Hackers Steal 44GB of Internal Data, Affecting Customer Services",
    summary_en: "Latvian forestry company LVM was hit by a ransomware attack on June 22. More than three weeks later, the company is still recovering its affected information systems. LVM's CTO revealed that the attackers targeted a system that had been decommissioned for two years, exploiting a specific vulnerability to gain entry. However, the company stated that it did not receive a ransom message and refused to pay a ransom. The Latvian Computer Emergency Response Team (CERT.LV) intervened in the investigation, pointing out that the attackers were a foreign ransomware group motivated by economic gain, which has previously targeted NATO and EU institutions. The hackers published approximately 44 GB of LVM's data online, including internal documents, emails, project code, system credentials, keys, and user passwords. Although LVM was involved in developing the parliamentary election system, CERT.LV confirmed through comparison that the source code for this system was independently isolated and handed over to the State Digital Development Agency, and was not tampered with or accessed without authorization. Furthermore, CERT.LV also pointed out that the same hacker group had previously breached the infrastructure supplier Olpha's servers, but the files were not encrypted.",
    tags_en: ["LVM", "Ransomware", "CERT.LV", "Latvia", "Data Leak", "OT/ICS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177257", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-004",
    trackers: ["security"],
    category: "重大事件",
    title: "Progress ShareFile 警告：要求關閉 Storage Zone Controller 伺服器以應對外部資安威脅",
    summary: "檔案分享平台 ShareFile 的廠商 Progress 於 7 月 10 日緊急通知用戶，要求暫時關閉執行 Storage Zone Controller 的伺服器，以應對外部資安威脅。此元件是 ShareFile 供企業自建部署的儲存閘道，允許將檔案保留於企業內部設備，同時利用 ShareFile 的分享與管理功能。由於該元件常部署於對外服務的伺服器，因此被認為較容易成為攻擊目標。Progress 雖然已暫停受影響帳號的存取權限，並表示目前尚未發現資料遭未授權存取，但仍要求用戶採取預防性措施，手動關閉受影響伺服器。目前 Progress 尚未公布事件的具體威脅性質或進一步的修補建議，僅要求用戶關閉服務，導致部分用戶對資安風險和後續應對方案表達擔憂。",
    tags: ["Progress", "ShareFile", "Storage Zone Controller", "資安威脅", "企業部署", "資料外洩"],
    title_en: "Progress Warns Users to Shut Down Storage Zone Controller Servers to Counter External Cybersecurity Threats for ShareFile",
    summary_en: "Progress, the vendor of the file-sharing platform ShareFile, issued an urgent notice to users on July 10th, requiring the temporary shutdown of servers running the Storage Zone Controller. This component is a storage gateway that ShareFile provides for on-premise enterprise deployment, allowing files to be retained on internal corporate devices while utilizing ShareFile's sharing and management functionalities. Because this component is often deployed on externally facing servers, it is considered a relatively easy target for attackers. Although Progress has suspended access to affected accounts and stated that no unauthorized data access has been detected so far, it still urges users to take preventative measures by manually shutting down the affected servers. Progress has not yet disclosed the specific nature of the threat or further remediation advice, only requiring users to shut down the service, leading some users to express concern regarding the cybersecurity risk and subsequent response plan.",
    tags_en: ["Progress", "ShareFile", "Storage Zone Controller", "Cybersecurity Threat", "Enterprise Deployment", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177255", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-005",
    trackers: ["security"],
    category: "重大事件",
    title: "前資安人員利用職務機密協助BlackCat勒索軟體集團，美國法院判處70個月徒刑",
    summary: "本案揭露一位前資安事件應變公司員工Angelo Martino，利用其職務期間取得的客戶機密資訊，暗中與BlackCat（又稱ALPHV）勒索軟體集團勾結。Martino在為五個受害組織進行談判的過程中，將客戶的談判策略、保險理賠上限等敏感資訊洩露給攻擊者，協助BlackCat索取更高贖金並从中牟利。此外，他還與兩名前資安同業合作，於2023年4月至11月間，對美國更多組織部署BlackCat勒索軟體。美國司法部（DOJ）已將其以共謀妨礙州際商業活動罪起訴，並判處70個月徒刑。此案再次強調資安事件應變人員的職責與道德風險，提醒業界應強化內部控制與員工背景審查，避免內部人員成為攻擊鏈環節。",
    tags: ["BlackCat", "ALPHV", "勒索軟體", "資安事件應變", "內部人員", "美國司法部"],
    title_en: "Former Cybersecurity Professional Used Confidential Information to Aid BlackCat Ransomware Group; US Court Sentences 70 Months Imprisonment",
    summary_en: "This case reveals that Angelo Martino, a former employee of a cybersecurity incident response firm, secretly colluded with the BlackCat (also known as ALPHV) ransomware group, utilizing confidential client information obtained during his employment. During the process of negotiating with five affected organizations, Martino leaked sensitive information, such as client negotiation strategies and insurance claim limits, to the attackers. This action helped BlackCat demand higher ransoms and profit from the scheme. Furthermore, he collaborated with two former cybersecurity peers to deploy BlackCat ransomware against more US organizations between April and November 2023. The U.S. Department of Justice (DOJ) charged him with conspiracy to obstruct interstate commerce and sentenced him to 70 months in prison. This case once again emphasizes the professional responsibility and ethical risks faced by cybersecurity incident response personnel, reminding the industry to strengthen internal controls and employee background checks to prevent internal staff from becoming links in the attack chain.",
    tags_en: ["BlackCat", "ALPHV", "Ransomware", "Cyber Incident Response", "Insider Threat", "U.S. Department of Justice"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177251", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-006",
    trackers: ["security"],
    category: "重大事件",
    title: "荷蘭電信公司 Odido 遭網路攻擊：駭客冒充員工進行釣魚詐騙，約 620 萬客戶資料外洩",
    summary: "荷蘭大型電信公司 Odido 於今年 2 月遭遇網路攻擊。駭客團體 ShinyHunters 利用冒充公司 IT 部門員工的方式進行網路釣魚（Phishing），成功竊取了約 620 萬名客戶的帳號資料。此事件引起荷蘭當局的高度關注，荷蘭國家檢察署與國家調查與行動單位發布聯合聲明後，警方進一步介入調查。警方指出，涉案駭客曾使用荷蘭語的男性聲音冒充 Odido IT 人員聯繫客服中心。警方已關閉駭客用於散播竊取資料的多臺伺服器，並呼籲涉案人士自首。此事件顯示了電信服務提供商在面對社工工程（Social Engineering）攻擊時，帳號資料外洩的重大風險，強調了客戶端和企業內部流程的防護重要性。",
    tags: ["Odido", "ShinyHunters", "網路釣魚", "資料外洩", "社工攻擊", "電信業"],
    title_en: "Dutch Telecom Company Odido Targeted by Cyberattack: Hackers Impersonate Employees in Phishing Scam, Exposing Data of Approx. 6.2 Million Customers",
    summary_en: "Dutch major telecommunications company Odido suffered a cyberattack in February of this year. The hacker group ShinyHunters conducted a phishing attack by impersonating company IT department staff, successfully stealing account data belonging to approximately 6.2 million customers. This incident drew significant attention from Dutch authorities. Following a joint statement from the Netherlands Public Prosecution Service and the National Investigation and Action Unit, police subsequently launched an investigation. Police pointed out that the involved hackers used a male Dutch voice to impersonate Odido IT personnel when contacting the customer service center. Police have since shut down multiple servers used by the hackers to disseminate the stolen data and have called for the suspects to surrender. This incident highlights the significant risk of account data leakage faced by telecommunications service providers when confronted with Social Engineering attacks, emphasizing the importance of protection measures at both the customer and corporate internal process levels.",
    tags_en: ["Odido", "ShinyHunters", "Phishing", "Data Leakage", "Social Engineering", "Telecommunications"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177244", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-007",
    trackers: ["security"],
    category: "重大事件",
    title: "日本最大計程車業者「日本交通」遭惡意軟體攻擊，緊急關閉派遣系統導致服務停擺",
    summary: "日本營收規模最大的計程車與包車運營商「日本交通」（Nihon Kotsu）宣布遭受外部未授權存取的惡意軟體攻擊，迫使該公司緊急中斷系統連線以防止損害擴大。此事件導致其核心的計程車派遣系統、網頁預約、電話叫車及內部系統全面癱瘓，甚至影響到針對孕婦提供的專車服務。雖然該公司目前正與外部資安專家合作調查是否發生資料外洩，且官方尚未證實外洩情事，但勒索軟體組織 AiLock 已宣稱網攻為其所為，並威脅將於近期公開竊取的數據。日本交通建議客戶現階段改用「GO」叫車 App 或至實體招呼站搭車，並提醒防範冒名該公司的可疑郵件與惡意連結。",
    tags: ["日本交通", "Nihon Kotsu", "惡意軟體", "勒索軟體", "AiLock", "計程車派遣系統", "關鍵基礎設施", "資料外洩"],
    title_en: "Japan's Largest Taxi Operator, Nihon Kotsu, Hit by Malware Attack, Forcing Shutdown of Dispatch System and Service Disruption",
    summary_en: "Nihon Kotsu, Japan's largest taxi and charter operation, announced that it suffered a malware attack involving unauthorized external access, forcing the company to urgently disconnect its systems to prevent further damage. This incident led to the complete paralysis of its core taxi dispatch system, web booking, phone hailing, and internal systems, even affecting specialized services for pregnant women. Although the company is currently collaborating with external cybersecurity experts to investigate potential data leakage, and official confirmation of a leak has not been provided, the ransomware group AiLock has claimed responsibility for the attack and threatened to disclose stolen data soon. Nihon Kotsu advises customers to temporarily use the 'GO' ride-hailing App or use physical taxi stands, and reminds the public to beware of suspicious emails and malicious links impersonating the company.",
    tags_en: ["Nihon Kotsu", "Nihon Kotsu", "Malware", "Ransomware", "AiLock", "Taxi Dispatch System", "Critical Infrastructure", "Data Leakage"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/japans-largest-taxi-operator-shuts-systems-after-cyberattack", lang: "EN" }
    ]
  },
  {
    id: "20260713-008",
    trackers: ["os", "security"],
    category: "重大事件",
    title: "惡意軟體 CrashStealer 偽裝 Apple 崩潰回報工具，鎖定 macOS 憑證與加密貨幣錢包",
    summary: "一款名為 CrashStealer 的全新 macOS 資訊竊取惡意軟體，近期被發現偽裝成 Apple 官方的系統元件「CrashReporter.app」，並利用已獲得 Apple 簽名與公證的安裝程式「Werkbit Setup」散布，藉此繞過 macOS 的 Gatekeeper 防護機制。當使用者執行時，該惡意軟體會彈出虛假的密碼輸入提示，並透過 dscl 指令在本地端驗證正確性，以藉此解鎖使用者的 Keychain 鑰匙圈。此外，它還鎖定 Chromium 和 Firefox 瀏覽器的憑證與 Cookie、超過 80 款加密貨幣錢包擴充功能，以及 14 款密碼管理器。竊取到的資料會以 AES-256-GCM 演算法加密，並打包成隱藏的 ZIP 檔上傳至 C2 伺服器。建議 macOS 使用者切勿從非官方網站下載軟體，並留意異常的系統權限提示。",
    tags: ["CrashStealer", "macOS", "資訊竊取軟體", "Jamf", "Keychain", "加密貨幣錢包", "憑證竊取"],
    title_en: "Malware CrashStealer Masquerades as Apple Crash Reporter Tool, Targeting macOS Credentials and Crypto Wallets",
    summary_en: "A new macOS infostealer malware named CrashStealer was recently discovered masquerading as the official Apple system component, \"CrashReporter.app.\" It utilizes an installer, \"Werkbit Setup,\" which has obtained Apple signing and notarization, to distribute itself, thereby bypassing macOS's Gatekeeper protection mechanism. When executed, the malware prompts the user with a fake password input dialog and uses the `dscl` command for local validation, thereby unlocking the user's Keychain keychain. Furthermore, it steals credentials and cookies from Chromium and Firefox browsers, over 80 cryptocurrency wallet extensions, and 14 password managers. The stolen data is encrypted using the AES-256-GCM algorithm and packaged into a hidden ZIP file for upload to a C2 server. macOS users are advised not to download software from unofficial websites and to be vigilant for unusual system permission prompts.",
    tags_en: ["CrashStealer", "macOS", "Infostealer", "Jamf", "Keychain", "Cryptocurrency Wallet", "Credential Theft"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-crashstealer-malware-poses-as-apple-crash-reporting-tool", lang: "EN" }
    ]
  },
  {
    id: "20260713-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Cisco 部署客製化核心面臨挑戰：Fastabend 介紹 BPF 於修補核心漏洞的應用",
    summary: "本文介紹了 John Fastabend 在 2026 年 Linux Storage, Filesystem, Memory-Management, and BPF Summit 上分享的經驗。由於 Cisco 等企業設備常運行客製化的 Linux 核心，部署安全補丁面臨獨特且複雜的挑戰。Fastabend 提出的技術利用 BPF (Berkeley Packet Filter) 機制來預防核心漏洞的利用。此技術有潛力大幅縮短響應核心漏洞所需的時間。然而，他指出要達到完全的有效性，核心本身必須增加更多的掛鉤（hooks）點，才能讓 BPF 能夠更全面地進行保護。",
    tags: ["Cisco", "Linux 核心", "BPF", "核心漏洞", "安全補丁", "John Fastabend"],
    title_en: "Challenges in Deploying Custom Kernels on Cisco Devices: Fastabend Introduces BPF for Kernel Vulnerability Patching",
    summary_en: "This article introduces the experience shared by John Fastabend at the 2026 Linux Storage, Filesystem, Memory-Management, and BPF Summit. Because enterprise devices like Cisco often run customized Linux kernels, deploying security patches faces unique and complex challenges. The technology proposed by Fastabend utilizes the BPF (Berkeley Packet Filter) mechanism to prevent the exploitation of kernel vulnerabilities. This technique has the potential to significantly reduce the time required to respond to kernel vulnerabilities. However, he points out that to achieve full effectiveness, the kernel itself must incorporate more hook points to allow BPF to perform more comprehensive protection.",
    tags_en: ["Cisco", "Linux Kernel", "BPF", "Kernel Vulnerability", "Security Patch", "John Fastabend"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081546", lang: "EN" }
    ]
  },
  {
    id: "20260713-010",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 12 (Bookworm) 宣布進入最終常規更新階段，長期支援至 2028 年",
    summary: "Debian 專案宣布 Debian 12 (代號 Bookworm) 已進入其最終常規更新階段。此版本將會持續提供長期支援更新，支援期限延長至 2028 年。由於 Bookworm 是一個穩定版本，其更新內容主要集中於安全修補。文章提醒 Debian 用戶，儘管目前版本仍有長期支援，但仍建議考慮升級至更新的版本。此外，Debian 13 (代號 Trixie) 本週末也收到了更新，內容包含許多與 Bookworm 相似的安全修補。",
    tags: ["Debian", "Debian 12", "Bookworm", "Linux 核心", "安全更新", "長期支援"],
    title_en: "Debian 12 (Bookworm) enters final stable update phase, with long-term support until 2028",
    summary_en: "The Debian project announced that Debian 12 (codenamed Bookworm) has entered its final stable update phase. This version will continue to receive long-term support updates, extending the support period until 2028. Since Bookworm is a stable release, its updates primarily focus on security patches. The article reminds Debian users that although the current version still has long-term support, they are advised to consider upgrading to a newer version. Furthermore, Debian 13 (codenamed Trixie) also received updates this weekend, containing many security patches similar to those in Bookworm.",
    tags_en: ["Debian", "Debian 12", "Bookworm", "Linux Kernel", "Security Update", "Long-Term Support"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082647", lang: "EN" }
    ]
  },
  {
    id: "20260713-011",
    trackers: ["os"],
    category: "Linux",
    title: "多主流 Linux 發行版發布安全更新：涵蓋核心、圖形、網路與應用層面修補",
    summary: "本文彙整了 Debian、Fedora、Mageia、Oracle、Slackware 與 SUSE 等多個主流 Linux 發行版發布的最新安全更新清單。這些更新涵蓋了從作業系統核心（kernel）到各種應用層級的元件，包括圖形系統（mesa, xorg-x11-server, webkitgtk）、網路服務（OpenSSH, nginx, postgresql, unbound）、開發工具鏈（node.js, python-urllib3, docker-compose）以及各種庫函式庫（libxml2, libssl, libxfont）。受影響的元件範圍極廣，涉及多個 CVE 漏洞修補，實務上建議使用者應立即根據各自發行版和元件的更新公告，執行系統升級，以修補潛在的安全性風險。由於原文僅提供更新清單，未公開具體的 CVSS 分數或受影響台數，但整體趨勢顯示了對系統穩定性與安全性的全面加固。",
    tags: ["Linux", "Debian", "Fedora", "SUSE", "安全更新", "CVE", "核心元件"],
    title_en: "Multiple Major Linux Distributions Release Security Updates: Covering Core, Graphics, Network, and Application Layers",
    summary_en: "This article compiles the latest security updates released by multiple major Linux distributions, including Debian, Fedora, Mageia, Oracle, Slackware, and SUSE. These updates cover components ranging from the operating system kernel to various application layers, including graphics systems (mesa, xorg-x11-server, webkitgtk), network services (OpenSSH, nginx, postgresql, unbound), development toolchains (node.js, python-urllib3, docker-compose), and various libraries (libxml2, libssl, libxfont). The scope of affected components is extremely broad, involving multiple CVE vulnerability patches. Practically, users are advised to immediately perform system upgrades based on the specific update announcements for their respective distributions and components, in order to patch potential security risks. Since the original text only provides an update list and does not disclose specific CVSS scores or the number of affected systems, the overall trend indicates a comprehensive strengthening of system stability and security.",
    tags_en: ["Linux", "Debian", "Fedora", "SUSE", "Security Update", "CVE", "Kernel Component"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082642", lang: "EN" }
    ]
  },
  {
    id: "20260713-012",
    trackers: ["os"],
    category: "Linux",
    title: "FreeBSD 桌面安裝器整合 NVIDIA 驅動支援：自動偵測與授權問題待解",
    summary: "FreeBSD 開發人員 Alfonso Siciliano 近期更新了 FreeBSD 桌面安裝器（desktop install option）的進度。該功能旨在提供自動化的 GPU 偵測與驅動安裝，先前已成功整合了 Intel 和 AMD 顯示卡支援。目前重點轉向 NVIDIA 驅動的處理。由於 NVIDIA 官方驅動程式支援多個不同分支（特別是為了維持舊版硬體支援），自動選擇驅動版本具有技術複雜性。開發團隊已開發出自動偵測適當 NVIDIA GPU 驅動的解決方案，但目前最大的障礙是 NVIDIA 驅動的授權問題尚未釐清。因此，短期內此功能不會整合到 bsdinstall 中，NVIDIA 用戶將需要在安裝過程中手動透過選單選擇所需的驅動版本。開發團隊預計此桌面安裝選項將在 FreeBSD 15.2 版本發布時（目標穩定版為 12 月）準備就緒。",
    tags: ["FreeBSD", "NVIDIA", "FreeBSD 15.2", "桌面安裝器", "驅動支援", "授權問題"],
    title_en: "FreeBSD Desktop Installer Integrates NVIDIA Driver Support: Automatic Detection and Licensing Issues Remain",
    summary_en: "FreeBSD developer Alfonso Siciliano recently updated the progress of the FreeBSD desktop installer option. This feature aims to provide automated GPU detection and driver installation, having previously successfully integrated support for Intel and AMD graphics cards. The current focus is on handling NVIDIA drivers. Because NVIDIA official drivers support multiple different branches (especially to maintain support for older hardware), automatically selecting the correct driver version is technically complex. The development team has created a solution for automatically detecting the appropriate NVIDIA GPU driver, but the biggest hurdle currently is the unresolved licensing issue with the NVIDIA drivers. Therefore, this feature will not be integrated into bsdinstall in the short term, and NVIDIA users will need to manually select the required driver version via the menu during installation. The development team anticipates that this desktop installation option will be ready upon the release of FreeBSD 15.2 (with a target stable release in December).",
    tags_en: ["FreeBSD", "NVIDIA", "FreeBSD 15.2", "Desktop Installer", "Driver Support", "Licensing Issue"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FreeBSD-Desktop-Install-NVIDIA", lang: "EN" }
    ]
  },
  {
    id: "20260713-013",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME OS開發「測試中心」：打造類似Apple TestFlight的實驗性軟體測試平台",
    summary: "GNOME OS的開發者正在利用德國原型基金的資金，開發一套名為「測試中心」（Test Center）的開發工具套件。此系統旨在為現代Linux計算環境提供一個測試實驗性應用程式和函式庫的平台，其概念類似於Apple的TestFlight或早期的Mozilla Labs。由於GNOME OS採用基於映像檔的作業系統架構，測試中心特別著重於在這種受限環境下，簡化開發者測試實驗性軟體的流程。目前此功能仍處於原型開發階段，但其目標是提升GNOME OS作為開發環境的可用性。此外，GNOME生態系統近期也進行了多項更新，包括Glycin新增OpenEXR影像支援、改善JPEG/PNG/TIFF影像的像素密度讀取功能，以及提升GLib預設的網路監控能力。",
    tags: ["GNOME OS", "Test Center", "Linux", "開發工具鏈", "systemd-sysext", "OpenEXR", "GLib"],
    title_en: "GNOME OS Develops 'Test Center': Creating an Experimental Software Testing Platform Similar to Apple TestFlight",
    summary_en: "GNOME OS developers are utilizing funding from the German Prototype Fund to develop a development toolkit called 'Test Center.' This system aims to provide a platform for testing experimental applications and libraries in modern Linux computing environments, conceptually similar to Apple's TestFlight or early Mozilla Labs. Because GNOME OS uses an image-based operating system architecture, Test Center specifically focuses on simplifying the process for developers to test experimental software within this restricted environment. While this feature is currently in the prototype development stage, its goal is to enhance GNOME OS's usability as a development environment. Furthermore, the GNOME ecosystem has recently undergone multiple updates, including Glycin adding OpenEXR image support, improving pixel density reading for JPEG/PNG/TIFF images, and enhancing GLib's default network monitoring capabilities.",
    tags_en: ["GNOME OS", "Test Center", "Linux", "Development Toolchain", "systemd-sysext", "OpenEXR", "GLib"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-OS-Test-Center", lang: "EN" }
    ]
  },
  {
    id: "20260713-014",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心系統呼叫入口處理重構：提升跨架構一致性與堆疊隨機化安全性",
    summary: "資深 Linux 核心開發者 Thomas Gleixner 針對 Linux 核心的系統呼叫（syscall）入口處理機制進行了大規模重構與優化。本次修補旨在解決不同 CPU 架構（如 PowerPC）在處理核心堆疊隨機化（stack randomization）時不一致或次優化的問題。重構的核心目標是讓所有架構採用統一的通用系統呼叫入口程式碼，並確保堆疊隨機化能在最早期、最正確的時機執行。此外，開發者還修復了 x86 核心程式碼中歷史累積的「怪異點」（oddities），並更新了 seccomp、ptrace 等相關功能，使其返回布林值以明確指示系統呼叫權限。雖然重構預計不會造成功能上的改變，但測試顯示在系統呼叫密集型工作負載和微基準測試中，整體重構帶來了輕微的效能提升。這些修補預計將在 Linux 7.3 核心版本週期提交。",
    tags: ["Linux 核心", "系統呼叫", "System Call", "堆疊隨機化", "PowerPC", "x8664", "Linux 7.3"],
    title_en: "Linux Kernel System Call Entry Handling Refactoring: Enhancing Cross-Architecture Consistency and Stack Randomization Security",
    summary_en: "Senior Linux kernel developer Thomas Gleixner has undertaken a large-scale refactoring and optimization of the Linux kernel's system call (syscall) entry handling mechanism. This patch aims to address inconsistencies or suboptimal handling of core stack randomization across different CPU architectures (such as PowerPC). The core goal of the refactoring is to ensure all architectures adopt a unified, generic system call entry code, and to guarantee that stack randomization executes at the earliest and most accurate point. Furthermore, the developer fixed historical 'oddities' in the x86 kernel code and updated related functionalities like seccomp and ptrace to return boolean values to clearly indicate system call permissions. Although the refactoring is not expected to cause functional changes, testing has shown that the overall refactoring provides a slight performance improvement under system call-intensive workloads and microbenchmarks. These patches are expected to be submitted in the Linux 7.3 kernel version cycle.",
    tags_en: ["Linux Kernel", "System Call", "System Call", "Stack Randomization", "PowerPC", "x8664", "Linux 7.3"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Rework-Sysclal-Entry-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260713-015",
    trackers: ["os"],
    category: "Linux",
    title: "Raspberry Pi 5 核心支援進展：BCM2712 IOMMU 驅動程式將進入主線 Linux Kernel",
    summary: "本篇報導指出，Raspberry Pi 5 的核心支援方面，關鍵的 IOMMU 驅動程式正在開發並準備進入主線 Linux Kernel。開源開發者 Daniel Drake 針對 Broadcom BCM2712 IOMMU 驅動程式進行了工作，該驅動程式是從 Raspberry Pi 的下游驅動程式基礎上進行改進和增強的。此整合不僅提供了 IOMMU 功能，還將其與單板電腦（SBC）的顯示控制器連接，以實現高效的圖形記憶體管理。開發者提到，新的驅動程式實作了使用 generic_pt 管理頁表，並採用了符合標準的 DT 屬性名稱。此外，該驅動程式還針對圖形記憶體管理進行了優化，並已在 3D 加速圖形環境下進行了測試。雖然目前 IOMMU 嚴格使用 4KB 頁面，但由於 RPi 5 預設的 PAGE_SIZE 為 16KB，導致頁表分配會浪費 12KB。開發者計劃在後續工作中解決此頁面大小的效率問題。",
    tags: ["Raspberry Pi 5", "Linux Kernel", "IOMMU", "BCM2712", "Daniel Drake", "主線核心"],
    title_en: "Raspberry Pi 5 Core Support Progress: BCM2712 IOMMU Driver to Enter Mainline Linux Kernel",
    summary_en: "This report indicates that key IOMMU drivers for the Raspberry Pi 5 core support are being developed and prepared for inclusion in the mainline Linux Kernel. Open-source developer Daniel Drake has worked on the Broadcom BCM2712 IOMMU driver, which is an improvement and enhancement of the existing Raspberry Pi downstream driver. This integration not only provides IOMMU functionality but also connects it with the single-board computer's (SBC) display controller to achieve efficient graphics memory management. The developer mentioned that the new driver implements page table management using generic_pt and adopts standard DT attribute names. Furthermore, the driver has been optimized for graphics memory management and has been tested in a 3D accelerated graphics environment. Although the IOMMU strictly uses 4KB pages, the RPi 5's default PAGE_SIZE of 16KB causes a 12KB waste in page table allocation. The developer plans to address this page size efficiency issue in future work.",
    tags_en: ["Raspberry Pi 5", "Linux Kernel", "IOMMU", "BCM2712", "Daniel Drake", "Mainline Core"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Raspberry-Pi-5-IOMMU-Driver", lang: "EN" }
    ]
  },
  {
    id: "20260713-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心藍牙模組記憶體洩漏漏洞 (CVE-2026-53364) 修正公告",
    summary: "本漏洞影響 Linux 核心的藍牙堆疊 (Bluetooth: hci_conn.c) 模組。問題出在 `hci_le_big_terminate()` 函式中，當未設定 `pa_sync_term` 或 `big_sync_term` 旗標時，該函式會透過 `kzalloc_obj` 分配 `iso_list_data`，但若後續評估 PA 和 BIG 同步連線狀態時，並在早期返回路徑，將無法執行對應的記憶體釋放，導致記憶體洩漏。此漏洞已在 Linux 核心中得到修復。建議系統管理員應升級至修復版本，以避免資源耗盡及潛在的穩定性問題。修補細節已在 Linux 核心的 Git 儲存庫中提供，使用者應參考官方公告進行系統更新。",
    tags: ["Linux 核心", "藍牙", "Bluetooth", "記憶體洩漏", "CVE-2026-53364", "hci_conn.c"],
    title_en: "Linux Kernel Bluetooth Module Memory Leak Vulnerability (CVE-2026-53364) Fix Announcement",
    summary_en: "This vulnerability affects the Bluetooth stack (Bluetooth: hci_conn.c) module in the Linux kernel. The issue resides in the `hci_le_big_terminate()` function. When the `pa_sync_term` or `big_sync_term` flags are not set, this function allocates `iso_list_data` using `kzalloc_obj`. However, if the subsequent evaluation of the PA and BIG synchronization connection status returns early, the corresponding memory release fails to execute, leading to a memory leak. This vulnerability has been fixed in the Linux kernel. System administrators are advised to upgrade to the patched version to prevent resource exhaustion and potential stability issues. Patch details are available in the Linux kernel Git repository, and users should refer to official announcements for system updates.",
    tags_en: ["Linux Kernel", "Bluetooth", "Bluetooth", "Memory Leak", "CVE-2026-53364", "hci_conn.c"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53364", lang: "EN" }
    ]
  },
  {
    id: "20260713-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 vsock/virtio 零拷貝機制漏洞，防止多 skb 發送時的記憶體洩漏",
    summary: "本漏洞存在於 Linux 核心的 vsock/virtio 網路功能中。當系統將大型訊息分塊（fragmented）成多個 skb 進行發送時，原機制僅將零拷貝（zerocopy）的用戶參數（uarg）分配並附加到循環中的最後一個 skb 上。這導致在循環中非最終的 skb 缺乏完成追蹤，使得核心無法通知用戶空間這些固定頁面（pinned pages）何時可以安全重用。更嚴重的是，如果發送循環提前中斷，uarg 將根本不會被分配，進而造成固定頁面洩漏，且沒有完成通知機制。修復方案採納了 TCP 的做法：在發送循環開始前，預先分配零拷貝 uarg，並使用 skb_zcopy_set() 將參考計數（reference）附加到每個 skb 上。這樣可以確保每個 skb 的完成都會正確遞減參考計數，只有在最後一個 skb 釋放後才會發出通知。此外，在失敗時，若未發送任何資料，uarg 也會透過 net_zcopy_put_abort() 進行乾淨中止。此修復旨在提升 Linux 核心在處理多分塊發送時的記憶體安全性和資源管理效率。",
    tags: ["Linux 核心", "vsock/virtio", "zerocopy", "skb", "記憶體洩漏", "網路堆疊"],
    title_en: "Linux Kernel Fixes vsock/virtio Zero-Copy Mechanism Vulnerability, Preventing Memory Leak During Multi-skb Sending",
    summary_en: "This vulnerability exists in the Linux kernel's vsock/virtio networking functionality. When the system fragments a large message into multiple skbs for sending, the original mechanism only allocated and attached the zero-copy user argument (uarg) to the last skb in the loop. This resulted in non-final skbs within the loop lacking completion tracking, preventing the kernel from notifying user space when these pinned pages could be safely reused. More critically, if the sending loop was prematurely interrupted, the uarg would not be allocated at all, leading to pinned page leaks and lacking a completion notification mechanism. The fix adopts the approach used by TCP: pre-allocating the zero-copy uarg before the sending loop starts, and using skb_zcopy_set() to attach the reference count to every skb. This ensures that the reference count correctly decrements upon completion of each skb, and notification is only issued after the last skb is released. Furthermore, in case of failure, if no data was sent, the uarg is cleanly aborted via net_zcopy_put_abort(). This fix aims to enhance the memory safety and resource management efficiency of the Linux kernel when handling fragmented sending.",
    tags_en: ["Linux Kernel", "vsock/virtio", "zerocopy", "skb", "memory leak", "network stack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53365", lang: "EN" }
    ]
  },
  {
    id: "20260713-018",
    trackers: ["security"],
    category: "法規與標準",
    title: "韓國個資保護委員會重罰樂扣樂扣等三家企業，因未修補伺服器漏洞與個資防護義務疏失導致個資外洩",
    summary: "韓國個人資訊保護委員會（PIPC）於7月8日宣布，對樂扣樂扣（LocknLock）、Ubase及Sunphoto三家企業，因違反《個人資訊保護法》的資安防護義務，處以總計7.1億韓元的行政裁罰金。其中，樂扣樂扣因駭客於2024年兩度利用郵件伺服器漏洞入侵，導致約130萬名會員及1,111筆員工的敏感個資外洩，受罰最重。PIPC指出其重大缺失包括：未修補自2022年已公開的伺服器漏洞、核心伺服器共用管理員密碼、缺乏異常流量監測機制，以及未對高敏感個資加密保護。Ubase因管理員介面未設IP限制且缺乏MFA，導致1,852名用戶個資流向Telegram；Sunphoto則因管理員介面存取疏漏，導致17萬名會員個資外洩。PIPC強調，個資外洩主因是企業疏於基本安全防護，提醒企業必須建立完善的資安管理體系。",
    tags: ["韓國個資保護委員會", "PIPC", "個資外洩", "伺服器漏洞", "MFA", "資安防護義務", "樂扣樂扣"],
    title_en: "Korea's PIPC Heavily Fines LocknLock and Two Other Companies for Personal Data Leakage Due to Unpatched Server Vulnerabilities and Negligence in Data Protection Duties",
    summary_en: "The Personal Information Protection Commission (PIPC) of Korea announced on July 8th that it imposed a total administrative fine of 710 million KRW on three companies—LocknLock, Ubase, and Sunphoto—for violating their data security protection obligations under the Personal Information Protection Act. LocknLock was fined the most heavily because hackers exploited email server vulnerabilities twice in 2024, leading to the leakage of sensitive personal data belonging to approximately 1.3 million members and 1,111 employees. The PIPC pointed out that its major deficiencies included: failing to patch a server vulnerability that had been public since 2022, sharing administrator passwords for core servers, lacking an abnormal traffic monitoring mechanism, and failing to encrypt highly sensitive personal data. Ubase leaked the personal data of 1,852 users to Telegram because its administrator interface lacked IP restrictions and Multi-Factor Authentication (MFA). Sunphoto leaked the personal data of 170,000 members due to access negligence on its administrator interface. The PIPC emphasized that the primary cause of the data leakage was the companies' neglect of basic security measures, reminding businesses that they must establish a comprehensive cybersecurity management system.",
    tags_en: ["Personal Information Protection Commission", "PIPC", "Data Leakage", "Server Vulnerability", "MFA", "Data Security Obligation", "LocknLock"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177246", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-019",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 搜尋功能升級：改善介面雜亂度，提升本地文件與設定搜尋的精準度",
    summary: "微軟透過 Windows Insiders 的 Experimental 通道，逐步推出多項 Windows 搜尋框的介面與功能優化。本次更新主要針對使用者回饋，旨在讓搜尋體驗更可靠、更清晰。優化內容包括：簡化搜尋主畫面，減少視覺雜亂；提升結果來源的辨識度，明確標示結果來自應用程式、設定、檔案或網頁；移除網頁搜尋結果中的促銷內容，讓資訊更聚焦。此外，使用者可在設定中控制網頁和 Microsoft Store 的建議顯示。在本地搜尋方面，系統優先顯示應用程式、設定和檔案，特別是當本地內容是最佳匹配時。搜尋功能也增強了對拼字錯誤、遺漏字元和部分單字的容忍度，並提升了檔案搜尋能力，新增了對兩字檔案搜尋的支援，同時改善了雲端和連接檔案的顯示。這些改動旨在讓使用者能更快、更準確地找到所需的應用程式、設定或文件，整體搜尋可靠性也得到提升。",
    tags: ["Windows", "Windows Search Box", "Windows Insiders", "搜尋功能", "使用者體驗", "本地搜尋"],
    title_en: "Windows Search Feature Upgrade: Improving Interface Clutter and Enhancing Local File and Setting Search Accuracy",
    summary_en: "Microsoft is gradually rolling out multiple interface and feature optimizations for the Windows Search box through the Windows Insiders Experimental channel. This update primarily addresses user feedback, aiming to make the search experience more reliable and clearer. Optimization content includes: simplifying the search main screen to reduce visual clutter; improving the source identification of results by clearly labeling whether results come from applications, settings, files, or web pages; and removing promotional content from web search results to keep information more focused. Additionally, users can now control the display of web and Microsoft Store suggestions in the settings. For local search, the system prioritizes displaying applications, settings, and files, especially when local content is the best match. The search function has also enhanced tolerance for spelling errors, missing characters, and partial words, and improved file search capabilities by adding support for two-character file searches, while also improving the display of cloud and connected files. These changes aim to help users find the required applications, settings, or documents faster and more accurately, thereby improving overall search reliability.",
    tags_en: ["Windows", "Windows Search Box", "Windows Insiders", "Search Feature", "User Experience", "Local Search"],
    sources: [
      { name: "Windows Blogs", url: "https://blogs.windows.com/windows-insider/2026/07/13/improving-windows-search-box-with-less-clutter-and-more-control", lang: "EN" }
    ]
  },
  {
    id: "20260713-020",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布：Windows 10 用戶若不升級，可再延續使用舊電腦一年",
    summary: "本文報導微軟針對 Windows 10 用戶提供延續使用舊設備的選項。微軟指出，雖然 Windows 10 的支援生命週期已接近尾聲，但對於部分無法升級或不便升級的用戶，公司仍提供了一年的延長支援期。這項政策旨在減緩用戶的升級壓力，讓他們有更多時間規劃硬體升級。實務上，這對仍使用舊型電腦的用戶是一個緩和的通知，但長期來看，用戶仍應規劃升級至支援更安全、功能更完善的作業系統版本，以確保系統能獲得最新的安全補丁和功能更新。文章未提供具體版本號或安全漏洞細節，僅是產品生命週期管理上的政策調整。",
    tags: ["Microsoft", "Windows 10", "作業系統", "產品生命週期", "安全更新"],
    title_en: "Microsoft Announces: Windows 10 Users Can Continue Using Old Computers for Another Year",
    summary_en: "This article reports that Microsoft is offering an option for Windows 10 users to continue using older devices. Microsoft noted that although the support lifecycle for Windows 10 is nearing its end, the company is still providing an extended support period of one year for users who are unable or inconvenient to upgrade. This policy aims to ease the pressure on users to upgrade, giving them more time to plan hardware upgrades. Practically, this is a reassuring notice for users still using older computers, but in the long term, users should still plan to upgrade to an operating system version that supports greater security and more complete functionality, to ensure the system receives the latest security patches and feature updates. The article does not provide specific version numbers or security vulnerability details, only a policy adjustment regarding product lifecycle management.",
    tags_en: ["Microsoft", "Windows 10", "Operating System", "Product Lifecycle", "Security Updates"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/13/microsoft-emails-windows-10-holdouts-fine-keep-your-old-pc-another-year/5270336", lang: "EN" }
    ]
  },
  {
    id: "20260713-021",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 Windows 10 ESU 延長至 2027 年，但文章指出 Windows 10 在效能與使用者體驗上仍優於 Windows 11",
    summary: "微軟已透過電子郵件通知 Windows 10 用戶，其延伸安全更新（ESU）計畫將延長至 2027 年 10 月 12 日。此延長是針對已註冊 ESU 的個人設備，且無需用戶採取任何行動。文章指出，儘管微軟宣稱延長提供時間，但從使用者體驗和效能角度來看，Windows 10 在多個方面仍優於 Windows 11。例如，Windows 10 的工作列、行動視圖和動作中心採用原生 Win32 Shell Code，啟動速度快，而 Windows 11 許多元件則改用 WebView2 和 XAML，導致效能下降。此外，Windows 10 的右鍵選單和工作列功能（如可拖移至任何邊緣）在使用者體驗上更為流暢。文章建議，若已註冊 ESU，無需理會通知郵件；若未註冊，應透過「設定」>「更新與安全性」>「Windows Update」進行註冊，以維持安全更新。",
    tags: ["Microsoft", "Windows 10", "Windows 11", "ESU", "Win32", "效能優化"],
    title_en: "Microsoft Announces Windows 10 ESU Extension to 2027, But Article Notes Windows 10 Still Superior to Windows 11 in Performance and User Experience",
    summary_en: "Microsoft has notified Windows 10 users via email that its Extended Security Update (ESU) program will be extended until October 12, 2027. This extension applies to personally registered ESU devices and requires no action from the user. The article points out that despite Microsoft claiming the extension provides time, Windows 10 remains superior to Windows 11 in multiple aspects concerning user experience and performance. For instance, Windows 10's taskbar, action view, and action center utilize native Win32 Shell Code, resulting in fast startup times, whereas many components in Windows 11 use WebView2 and XAML, leading to performance degradation. Furthermore, Windows 10's right-click context menu and taskbar features (such as drag-to-any-edge) offer a smoother user experience. The article advises that registered ESU users need not worry about the notification email; unregistered users should register via 'Settings' > 'Update & Security' > 'Windows Update' to maintain security updates.",
    tags_en: ["Microsoft", "Windows 10", "Windows 11", "ESU", "Win32", "Performance Optimization"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/13/microsofts-new-windows-10-esu-email-doesnt-push-windows-11-just-reminds-users-of-the-year-extension", lang: "EN" }
    ]
  },
  {
    id: "20260713-022",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch與iOS 27新功能探討：深入了解新版Siri體驗與訊息功能升級",
    summary: "本文為一期關於 Apple 生態系統的播客內容，主要討論了 Apple Watch 的全新 Siri 體驗，以及 iOS 27 上預計推出的 Siri 新功能。此外，內容也涵蓋了 Apple Watch 的功能願望清單，以及 iPhone 訊息功能（Messages）的增強。雖然文章未提供具體的漏洞或安全資訊，但作為資安新聞，應關注新版作業系統（iOS 27）和核心功能（Siri、Messages）的設計與潛在安全面。建議用戶隨時關注 Apple 官方發布的軟體更新，確保系統和應用程式保持最新狀態，以獲得最佳的安全性與功能體驗。",
    tags: ["Apple Watch", "iOS 27", "Siri", "iPhone", "Apple 生態系統", "軟體更新"],
    title_en: "Exploring New Features in Apple Watch and iOS 27: Deep Dive into the New Siri Experience and Messages Upgrades",
    summary_en: "This article summarizes a podcast episode focused on the Apple ecosystem, primarily discussing the brand-new Siri experience on the Apple Watch and anticipated new Siri features in iOS 27. Furthermore, the content covers Apple Watch feature wishlists and enhancements to the iPhone Messages functionality. Although the article does not provide specific vulnerabilities or security information, as a cybersecurity news piece, attention should be paid to the design and potential security aspects of the new operating system (iOS 27) and core features (Siri, Messages). Users are advised to monitor official Apple releases for software updates to ensure their system and applications remain current, thereby achieving optimal security and functionality.",
    tags_en: ["Apple Watch", "iOS 27", "Siri", "iPhone", "Apple Ecosystem", "Software Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/12/9to5mac-overtime-072-apple-watch-and-the-new-siri", lang: "EN" }
    ]
  },
  {
    id: "20260713-023",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2008-4128至已知利用漏洞目錄，警告企業應優先修補高風險漏洞",
    summary: "美國網路安全局（CISA）宣布將一項新的漏洞CVE-2008-4128（Cisco IOS Cross-Site Request Forgery Vulnerability）加入其已知利用漏洞（KEV）目錄。此類漏洞常被惡意行為者利用，對聯邦企業構成重大風險。CISA同時重申了《具約束力的營運指令》（BOD 26-04）的要求，該指令要求聯邦民事行政部門（FCEB）必須優先修補KEV目錄中列出的高風險漏洞，特別是那些在公開資產上可授予攻擊者完全控制權的漏洞。雖然BOD 26-04僅適用於FCEB，但CISA鼓勵所有組織應採取風險導向的漏洞管理策略，將修補KEV目錄中的漏洞列為最高優先級。組織應密切關注CISA的公告，並將修補行動優先順序化，以降低整體資安風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2008-4128", "Cisco IOS", "漏洞管理", "BOD 26-04"],
    title_en: "CISA Adds CVE-2008-4128 to Known Exploited Vulnerabilities Catalog, Urging Enterprises to Prioritize High-Risk Patches",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the addition of a new vulnerability, CVE-2008-4128 (Cisco IOS Cross-Site Request Forgery Vulnerability), to its Known Exploited Vulnerabilities (KEV) catalog. Such vulnerabilities are frequently exploited by malicious actors and pose a significant risk to federal entities. CISA also reiterated the requirements of the Binding Operational Directive (BOD 26-04), which mandates that Federal Civilian Executive Branch (FCEB) departments must prioritize patching high-risk vulnerabilities listed in the KEV catalog, especially those that could grant an attacker full control over public assets. Although BOD 26-04 only applies to FCEB, CISA encourages all organizations to adopt a risk-based vulnerability management strategy, listing patches for KEV catalog vulnerabilities as the highest priority. Organizations should closely monitor CISA announcements and prioritize patching actions to mitigate overall cybersecurity risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2008-4128", "Cisco IOS", "Vulnerability Management", "BOD 26-04"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/07/13/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260713-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄羅斯國家資助駭客組織鎖定網路設備漏洞，警告關鍵基礎設施應加強路由器衛生管理",
    summary: "美國國家安全局（NSA）、CISA、FBI等多國資安機構聯合發布警示，指出俄羅斯聯邦安全局（FSB）的Center 16駭客群持續利用全球各地配置不良且存在漏洞的網路設備，特別是路由器，來入侵多個關鍵基礎設施網路。這些攻擊者主要透過掃描，尋找啟用SNMP代理且接受常見或預設密碼的網路設備。受影響的關鍵產業包括通訊、能源、金融服務、政府設施、醫療保健等。為了解決此威脅，資安機構強烈建議設備擁有者和網路防禦者必須採取緩解和修復措施，特別是加強「路由器衛生管理」，確保設備配置安全，並修補已知的漏洞。建議參考官方報告，採取如停用不必要的服務、更新韌體和實施網路分段等措施。",
    tags: ["俄羅斯駭客", "FSB Center 16", "路由器", "網路設備", "關鍵基礎設施", "SNMP", "CISA"],
    title_en: "Russian State-Sponsored Hackers Target Network Device Vulnerabilities, Warning Critical Infrastructure to Enhance Router Hygiene Management",
    summary_en: "Multiple international cybersecurity agencies, including the U.S. National Security Agency (NSA), CISA, and FBI, have jointly issued a warning, pointing out that the Russian Federal Security Service (FSB)'s Center 16 hacking group continues to exploit poorly configured and vulnerable network devices globally, especially routers, to infiltrate multiple critical infrastructure networks. These attackers primarily scan for network devices that have SNMP enabled and accept common or default passwords. Key affected sectors include communications, energy, financial services, government facilities, and healthcare. To mitigate this threat, cybersecurity agencies strongly recommend that device owners and network defenders implement remediation and repair measures, particularly by enhancing 'router hygiene management,' ensuring secure device configuration, and patching known vulnerabilities. It is advised to refer to official reports and take measures such as disabling unnecessary services, updating firmware, and implementing network segmentation.",
    tags_en: ["Russian Hackers", "FSB Center 16", "Router", "Network Device", "Critical Infrastructure", "SNMP", "CISA"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/cybersecurity-advisories/aa26-194a", lang: "EN" }
    ]
  },
  {
    id: "20260713-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "英國與歐盟聯合制裁俄羅斯資安行動：國家級駭客利用弱點路由器設備攻擊關鍵基礎設施",
    summary: "美國及盟國資安機構發布聯合警告，指出俄羅斯國家級駭客（如 FSB Center 16）持續利用未受保護的路由器和網路設備，滲透全球關鍵基礎設施網路。受影響產業包括國防、能源、金融、政府和醫療等。駭客常用的攻擊手法包括掃描接受預設或易猜密碼的 SNMP 服務，並透過 TFTP 或 FTP 協議導出設備配置檔。此外，攻擊者也利用已知的 Cisco 漏洞和濫用 Cisco Smart Install (SMI) 進行初始存取。為減輕風險，機構應立即禁用 Cisco Smart Install，將 SNMPv1 升級至支援更強驗證和加密的 SNMPv3，並為所有網路設備更換強密碼。此外，應監控 SNMP Set 請求和異常的本地帳號活動，並在網路邊界封鎖不必要的 TFTP、SNMP 和 Smart Install 流量。",
    tags: ["俄羅斯駭客", "FSB Center 16", "關鍵基礎設施", "SNMPv3", "Cisco Smart Install", "網路設備"],
    title_en: "UK and EU Joint Sanction Russia Cyber Security Action: State-Level Hackers Attack Critical Infrastructure Using Vulnerable Routers",
    summary_en: "US and allied cybersecurity agencies have issued a joint warning, pointing out that Russian state-level hackers (such as FSB Center 16) are continuously exploiting unprotected routers and network equipment to penetrate global critical infrastructure networks. Affected sectors include defense, energy, finance, government, and healthcare. Common attack methods used by hackers include scanning for SNMP services accepting default or easily guessed passwords, and exfiltrating device configuration files via TFTP or FTP protocols. Furthermore, attackers are utilizing known Cisco vulnerabilities and abusing Cisco Smart Install (SMI) for initial access. To mitigate risks, agencies recommend immediately disabling Cisco Smart Install, upgrading SNMPv1 to SNMPv3 which supports stronger authentication and encryption, and changing strong passwords for all network equipment. Additionally, monitoring for SNMP Set requests and abnormal local account activity, and blocking unnecessary TFTP, SNMP, and Smart Install traffic at the network perimeter, are advised.",
    tags_en: ["Russian hackers", "FSB Center 16", "Critical infrastructure", "SNMPv3", "Cisco Smart Install", "Network equipment"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/endpoint-security/weak-security-fuel-russian-cyberattacks", lang: "EN" }
    ]
  },
  {
    id: "20260713-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新型模組化惡意軟體 GigaWiper 結合後門與資料清除功能，提升攻擊複雜度",
    summary: "研究人員發現一種名為 GigaWiper 的新型模組化惡意植入物，它結合了後門（Backdoor）和資料清除（Wiper）的特性，極大地提升了攻擊的複雜度和破壞性。與傳統「即發即忘」的清除程式不同，GigaWiper 允許攻擊者在觸發破壞前，先透過持久性存取、遠端控制和偵察等功能，深入了解目標系統，選擇最致命的攻擊時機。該植入物具備穩健的命令與控制（C2）能力，可執行遠端 Shell、檔案管理、系統偵察等約 20 種命令。其破壞模組包括：覆寫實體磁碟的原始磁碟清除器、基於 Crucio 家族的假勒索軟體，以及基於 FlockWiper 的多通道安全清除器。此外，其 C2 基礎設施還利用 RabbitMQ 和 Redis 等非標準協議進行通訊。安全專家建議，防禦重點應從偵測清除事件轉移到識別攻擊的早期入侵跡象，並建議修補措施包括啟用租戶級篡改保護、限制本地管理員合併功能，並阻擋已知 C2 基礎設施的直接存取。",
    tags: ["GigaWiper", "Wiper", "後門", "模組化惡意軟體", "C2", "資料清除", "網路安全"],
    title_en: "New Modular Malware GigaWiper Combines Backdoor and Data Wiping Functions, Increasing Attack Complexity",
    summary_en: "Researchers have discovered a novel modular malware implant called GigaWiper. It combines the characteristics of a Backdoor and a Wiper, significantly increasing the complexity and destructiveness of attacks. Unlike traditional 'fire-and-forget' wiping programs, GigaWiper allows attackers to deeply understand the target system—through persistent access, remote control, and reconnaissance—before triggering the destruction, enabling them to select the most lethal time for the attack. The implant possesses robust Command and Control (C2) capabilities, capable of executing approximately 20 types of commands, including remote Shell, file management, and system reconnaissance. Its destructive modules include: a raw disk wiper that overwrites physical disks, pseudo-ransomware based on the Crucio family, and a multi-channel secure wiper based on FlockWiper. Furthermore, its C2 infrastructure utilizes non-standard protocols such as RabbitMQ and Redis for communication. Security experts recommend that defensive focus should shift from detecting the wiping event to identifying early signs of intrusion. Suggested mitigation measures include enabling tenant-level tamper protection, restricting local administrator merge functions, and blocking direct access to known C2 infrastructure.",
    tags_en: ["GigaWiper", "Wiper", "Backdoor", "Modular Malware", "C2", "Data Wiping", "Cybersecurity"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/gigawiper-threat-actors-choose-their-own-destructive-attack", lang: "EN" }
    ]
  },
  {
    id: "20260713-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露新型釣魚即服務平臺 Forg365，結合 AI 攻擊 Microsoft 365 帳號",
    summary: "資安業者 ZeroBEC 揭露一個名為 Forg365 的新型釣魚即服務（Phishing-as-a-Service, PhaaS）平臺。該平臺採用訂閱制營運，透過 Telegram 進行銷售與支援，其控制面板整合了 AI 功能，能自動生成釣魚信件內容，並利用 Amazon SES 發送郵件。Forg365 具備多種攻擊路徑，包括濫用 Microsoft 裝置驗證碼流程，引導受害者在真實驗證頁面輸入代碼以取得 OAuth 權杖；以及傳統的中間人攻擊（AiTM），透過代理伺服器攔截驗證資訊。這類平臺與先前揭露的 Kali365 相似，但加入了 AI 輔助功能，使其威脅性更高。ZeroBEC 建議企業應限制裝置驗證碼的使用，並加強監控 Entra 登入、Microsoft 驗證代理程式的記錄，以及異常的裝置註冊行為，以降低被釣魚攻擊的風險。",
    tags: ["ZeroBEC", "Forg365", "Phishing-as-a-Service", "Microsoft 365", "AiTM", "裝置驗證碼"],
    title_en: "Cybersecurity Firm Uncovers New Phishing-as-a-Service Platform, Forg365, Leveraging AI Attacks on Microsoft 365 Accounts",
    summary_en: "Cybersecurity firm ZeroBEC has exposed a new Phishing-as-a-Service (PhaaS) platform called Forg365. This platform operates on a subscription model, selling and supporting its services via Telegram. Its control panel integrates AI functionality, which can automatically generate phishing email content and send emails using Amazon SES. Forg365 supports multiple attack vectors, including abusing the Microsoft device verification code process to trick victims into entering codes on a legitimate verification page to obtain OAuth tokens; as well as traditional Adversary-in-the-Middle (AiTM) attacks, which intercept verification information through proxy servers. This type of platform is similar to the previously disclosed Kali365 but incorporates AI assistance, making it more threatening. ZeroBEC advises enterprises to limit the use of device verification codes and strengthen monitoring of Entra sign-ins, Microsoft authentication proxy logs, and abnormal device registration behavior to mitigate the risk of phishing attacks.",
    tags_en: ["ZeroBEC", "Forg365", "Phishing-as-a-Service", "Microsoft 365", "AiTM", "裝置驗證碼"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177269", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安業者揭露：攻擊者利用生成式AI進行「Vibe Coding」生成PowerShell惡意指令碼，收集AD環境資訊",
    summary: "資安業者 Huntress 揭露了一起利用生成式AI輔助開發惡意工具的攻擊事件。攻擊者採用「Vibe Coding」（直覺式程式開發）的方式，生成PowerShell指令碼來收集企業 Active Directory (AD) 環境資訊。這些惡意指令碼雖然程式碼結構可能雜亂，但仍構成實質威脅，並增加了傳統特徵碼偵測的難度。Huntress 分析發現，這些AI生成的樣本具有過度設計、使用多種備用方法尋找網域控制器，以及包含未修改的佔位符等特徵。攻擊流程仍遵循傳統模式：攻擊者先透過竊取的憑證使用 RDP 登入 Windows Server，部署惡意指令碼，利用指令碼尋找網域控制站（DC），收集使用者、電腦、群組和信任關係等 AD 資訊，並以 HTML 格式回傳給攻擊者。防禦建議指出，由於惡意行為模式未變，防禦者必須從傳統特徵碼偵測轉向行為分析（Behavioral Analysis）來捕捉這些惡意行為。",
    tags: ["Huntress", "生成式AI", "PowerShell", "Active Directory", "Vibe Coding", "行為分析"],
    title_en: "Cybersecurity Firm Reveals: Attackers Use Generative AI for 'Vibe Coding' to Generate PowerShell Malicious Scripts, Collecting AD Environment Information",
    summary_en: "Cybersecurity firm Huntress revealed an attack incident utilizing generative AI to assist in the development of malicious tools. Attackers employed 'Vibe Coding' (intuitive coding) to generate PowerShell scripts designed to collect corporate Active Directory (AD) environment information. Although the code structure of these malicious scripts may appear disorganized, they still pose a significant threat and increase the difficulty of detection by traditional signature-based methods. Huntress analysis found that these AI-generated samples exhibit characteristics such as over-design, the use of multiple fallback methods to locate domain controllers, and the inclusion of unmodified placeholders. The attack process still follows traditional patterns: attackers first log into Windows Server using stolen credentials via RDP, deploy the malicious script, use the script to locate domain controllers (DCs), collect AD information such as users, computers, groups, and trust relationships, and then return this information to the attacker in HTML format. Defensive recommendations point out that since the malicious behavior pattern has not changed, defenders must shift from traditional signature-based detection to Behavioral Analysis to capture these malicious activities.",
    tags_en: ["Huntress", "Generative AI", "PowerShell", "Active Directory", "Vibe Coding", "Behavioral Analysis"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177265", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-029",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Palo Alto Networks修補13項漏洞：PAN-OS、Cloud NGFW及Prisma Browser修復緩衝區溢位與Chromium核心漏洞",
    summary: "資安廠商Palo Alto Networks於7月9日發布更新，修補了旗下多個產品線共計13項漏洞。其中最關鍵的是CVE-2026-0288，此漏洞影響PAN-OS防火牆作業系統，屬於緩衝區溢位問題，CVSS嚴重性評分為7.2分。攻擊者若利用此漏洞，可能導致服務中斷，甚至進一步執行任意程式碼，風險極高。受影響版本包括PAN-OS 10.x、11.x與12.x，以及Prisma Access的10.x與11.x。用戶應立即更新至官方公告指定的修補版本。此外，Palo Alto也針對Prisma Browser企業瀏覽器，修補了源自Chromium核心的530項漏洞，除了PAN-OS的修正外，還涵蓋了其他12項平臺漏洞，建議用戶全面更新以確保系統安全。",
    tags: ["Palo Alto Networks", "CVE-2026-0288", "PAN-OS", "緩衝區溢位", "Chromium", "網路安全"],
    title_en: "Palo Alto Networks Patches 13 Vulnerabilities: PAN-OS, Cloud NGFW, and Prisma Browser Fix Buffer Overflow and Chromium Core Flaws",
    summary_en: "Cybersecurity vendor Palo Alto Networks released an update on July 9th, patching a total of 13 vulnerabilities across multiple product lines. The most critical of these is CVE-2026-0288, a buffer overflow vulnerability affecting the PAN-OS firewall operating system, which has a CVSS severity score of 7.2. If exploited, this vulnerability could lead to service disruption or even arbitrary code execution, posing an extremely high risk. Affected versions include PAN-OS 10.x, 11.x, and 12.x, as well as Prisma Access 10.x and 11.x. Users are advised to immediately update to the patched versions specified in the official announcement. Furthermore, Palo Alto also patched 530 vulnerabilities originating from the Chromium core in the Prisma Browser enterprise browser. In addition to the PAN-OS fix, the update covers 12 other platform vulnerabilities, and users are recommended to perform a comprehensive update to ensure system security.",
    tags_en: ["Palo Alto Networks", "CVE-2026-0288", "PAN-OS", "Buffer Overflow", "Chromium", "Network Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177263", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-030",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Datadog揭露駭客濫用GitHub API進行偵察：透過Ghost帳號蒐集企業私有資訊",
    summary: "資安業者Datadog近期揭露，駭客利用建立多年的「Ghost帳號」系統性地透過GitHub的公開API進行偵察活動。攻擊者透過GraphQL及REST API，查詢企業的公開儲存庫、組織成員、使用者關係及Gist等資訊，目的是建立企業組織、開發人員與專案之間的詳細關係圖。由於這些查詢多針對公開資料，攻擊流量容易混入正常API使用，難以被企業察覺。更嚴重的是，Datadog觀察到部分攻擊者還利用外洩的OAuth Token及個人存取權杖（PAT）嘗試存取私有儲存庫，甚至已成功複製私有儲存庫的案例。為防範此類未授權的資料外洩，Datadog建議企業應啟用GitHub稽核日誌串流，建立正常User-Agent使用基準，並持續監控異常的API活動、存取權杖使用，以及私有儲存庫的查詢、複製與下載行為。",
    tags: ["GitHub API", "Datadog", "OAuth Token", "PAT", "偵察行動", "資料外洩"],
    title_en: "Datadog Reveals Hackers Exploiting GitHub API for Reconnaissance: Collecting Corporate Private Information via Ghost Accounts",
    summary_en: "Security vendor Datadog recently revealed that hackers are systematically conducting reconnaissance activities using GitHub's public API through 'Ghost accounts' established over years. Attackers use GraphQL and REST APIs to query public corporate repositories, organization members, user relationships, and Gists, aiming to build a detailed relationship map between corporate organizations, developers, and projects. Because these queries often target public data, the attack traffic can easily blend in with normal API usage, making it difficult for companies to detect. More seriously, Datadog observed some attackers also utilizing leaked OAuth Tokens and Personal Access Tokens (PATs) to attempt access to private repositories, with cases of successful private repository duplication already occurring. To prevent this type of unauthorized data leakage, Datadog recommends that companies enable GitHub audit log streaming, establish a baseline for normal User-Agent usage, and continuously monitor for anomalous API activity, token usage, and private repository query, duplication, and download behavior.",
    tags_en: ["GitHub API", "Datadog", "OAuth Token", "PAT", "Reconnaissance", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177262", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA要求修補Joomla兩款外掛漏洞；WP-ShellStorm後門大規模攻擊持續，影響全球逾140萬網站",
    summary: "資安事件持續多點爆發，美國網路與基礎設施安全局（CISA）於7月10日更新已遭利用漏洞清單（KEV），要求聯邦機構在3天內修補Joomla兩款外掛套件的重大漏洞：iCagenda的CVE-2026-48939與Balbooa Forms的CVE-2026-56291，兩者皆為CVSS評分10分的嚴重漏洞。同時，駭客利用後門程式WP-ShellStorm進行大規模攻擊，鎖定超過140萬個網域，主要目的是在WordPress網站植入Webshell並轉賣存取權限。此外，澳洲網路安全中心（ACSC）也警告，全球多種內容管理平臺（CMS）面臨大規模Webshell植入攻擊。修補建議包括：聯邦機構應立即修補Joomla外掛漏洞；網站管理員應警惕CMS漏洞，並檢查是否有可疑的Webshell植入跡象。",
    tags: ["Joomla", "CVE-2026-48939", "CVE-2026-56291", "WP-ShellStorm", "Webshell", "CISA", "CMS"],
    title_en: "CISA Mandates Patching of Two Joomla Plugin Vulnerabilities; WP-ShellStorm Backdoor Attacks Continue, Affecting Over 1.4 Million Websites",
    summary_en: "Cybersecurity incidents are erupting at multiple points. On July 10, the U.S. Cybersecurity and Infrastructure Security Agency (CISA) updated its Known Exploited Vulnerabilities (KEV) catalog, requiring federal agencies to patch two critical Joomla plugin vulnerabilities within three days: iCagenda's CVE-2026-48939 and Balbooa Forms' CVE-2026-56291. Both vulnerabilities carry a CVSS score of 10. Concurrently, hackers are utilizing the WP-ShellStorm backdoor in large-scale attacks, targeting over 1.4 million domains. The primary goal is to implant webshells into WordPress websites and resell access credentials. Furthermore, the Australian Cyber Security Centre (ACSC) warned that various Content Management Systems (CMS) globally are facing large-scale webshell injection attacks. Recommended patches include: Federal agencies must immediately patch the Joomla plugin vulnerabilities; and website administrators should be vigilant against CMS vulnerabilities and check for signs of suspicious webshell implants.",
    tags_en: ["Joomla", "CVE-2026-48939", "CVE-2026-56291", "WP-ShellStorm", "Webshell", "CISA", "CMS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177261", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SOCRadar揭露：中國駭客大規模攻擊WordPress，植入Webshell並轉賣存取權限",
    summary: "威脅情報公司SOCRadar揭露一場名為Webshell Access Brokerage Operation (WABO) 的大規模網路攻擊活動。攻擊者主要鎖定WordPress網站，利用多達27個CVE漏洞，在受害網站植入Webshell後門程式。這些駭客的最終目的，是將受害網站的存取權限轉賣給其他犯罪組織，顯示出明確的經濟犯罪動機。除了WordPress，SOCRadar也觀察到攻擊者試圖入侵企業的Java基礎設施。攻擊活動的跡象來自於駭客曝露的Python SimpleHTTPServer執行個體，內容包含完整的攻擊工具和目標清單。雖然SOCRadar推測攻擊源自中國，但他們特別指出，來自臺灣IP位址113.196.56[.]150的請求異常頻繁，總計超過4.2萬次，可能代表另一組研究人員或攻擊者在進行相關活動。建議網站管理員應提高警覺，修補所有已知的CVE漏洞，並監控網站是否有可疑的Webshell後門植入。",
    tags: ["SOCRadar", "WordPress", "Webshell", "CVE", "網路攻擊", "Webshell Access Brokerage Operation", "Python"],
    title_en: "SOCRadar Reveals: Chinese Hackers Launch Large-Scale WordPress Attacks, Implanting Webshells and Reselling Access",
    summary_en: "Threat intelligence company SOCRadar has uncovered a large-scale cyber attack operation named Webshell Access Brokerage Operation (WABO). The attackers primarily targeted WordPress websites, exploiting up to 27 CVE vulnerabilities to implant Webshell backdoor programs on the compromised sites. The ultimate goal of these hackers is to resell the access credentials of the victim websites to other criminal organizations, indicating a clear economic criminal motive. In addition to WordPress, SOCRadar also observed attempts by the attackers to infiltrate corporate Java infrastructure. Evidence of the attack activity came from a Python SimpleHTTPServer executable exposed by the hackers, which contained complete attack tools and target lists. Although SOCRadar suspects the attack originated from China, they specifically noted that requests from the Taiwan IP address 113.196.56[.]150 were unusually frequent, totaling over 42,000 times, potentially indicating another group of researchers or attackers conducting related activities. Website administrators are advised to heighten their vigilance, patch all known CVE vulnerabilities, and monitor their websites for suspicious Webshell backdoor implants.",
    tags_en: ["SOCRadar", "WordPress", "Webshell", "CVE", "Cyber Attack", "Webshell Access Brokerage Operation", "Python"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177253", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Okta警告：O-UNC-066威脅行為者利用語音網釣（Vishing）竊取Microsoft 365帳號與通行金鑰",
    summary: "身分與存取管理業者Okta警告，自2026年4月起，代號O-UNC-066的威脅行為者開始利用語音網釣（vishing）手法，鎖定多個產業的企業與組織。攻擊者會致電目標員工，謊稱需為Microsoft 365帳號註冊新的通行金鑰（passkey），誘騙受害者交出帳號密碼，並配合完成多因素驗證（MFA）。攻擊流程極為複雜，首先透過假網站竊取帳密，隨後在合法登入頁面確認MFA方式，再切換假網站頁面誘騙受害者輸入簡訊驗證碼或一次性密碼。最終目標是讓受害者在假網站完成「復原金鑰」的助記詞（mnemonic sentence）註冊，藉此讓攻擊者將自行控制的通行金鑰註冊到真正的Microsoft帳號。Okta建議企業應提高員工對vishing攻擊的警覺性，並強化MFA流程的教育訓練，避免受害者在壓力下完成不必要的帳號操作。",
    tags: ["Okta", "Microsoft 365", "Vishing", "通行金鑰", "MFA", "O-UNC-066"],
    title_en: "Okta Warning: Threat Actor O-UNC-066 Uses Vishing to Steal Microsoft 365 Accounts and Passkeys",
    summary_en: "Identity and Access Management vendor Okta warns that since April 2026, threat actors designated O-UNC-066 have begun using vishing techniques to target enterprises and organizations across multiple industries. Attackers call target employees, falsely claiming the need to register a new passkey for a Microsoft 365 account. They trick victims into revealing their account passwords and cooperating with the Multi-Factor Authentication (MFA) process. The attack process is highly complex: first, credentials are stolen via a fake website; subsequently, the MFA method is confirmed on a legitimate login page; finally, the fake website page is used to trick the victim into entering SMS verification codes or one-time passwords. The ultimate goal is to have the victim register a mnemonic sentence (recovery key) on the fake site, allowing the attackers to register their own controlled passkey to the genuine Microsoft account. Okta advises companies to raise employee awareness of vishing attacks and strengthen educational training on MFA processes, preventing victims from completing unnecessary account operations under pressure.",
    tags_en: ["Okta", "Microsoft 365", "Vishing", "Passkey", "MFA", "O-UNC-066"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177252", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-034",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Debian 13.6 版發布：修補多項核心漏洞，並升級 fwupd 應對 UEFI Secure Boot 憑證到期問題",
    summary: "主要Linux發行版Debian發布了13.6版本更新，整合了大量元件漏洞修補與系統錯誤修正。本次更新的重點之一是升級了韌體更新工具 fwupd 至 2.0.20 版，旨在解決因 UEFI Secure Boot 開機載入程式憑證授權到期所導致的系統更新問題，確保系統能順利更新 Secure Boot 憑證。此外，本次更新涵蓋了超過百項漏洞修補，涉及範圍廣泛，包括網路資料傳輸工具 curl 的多項漏洞（如憑證驗證、記憶體安全等）、Apache HTTP Server 的多項修補（涉及記憶體使用、HTTP/2 處理及阻斷服務等），以及 QEMU 模擬器、OpenSSL 函式庫和 Chromium 瀏覽器等關鍵元件的更新。這些修補旨在提升系統的整體安全性與穩定性，建議使用者應及時更新至最新版本以修補潛在的漏洞。",
    tags: ["Debian", "Linux", "fwupd", "UEFI Secure Boot", "漏洞修補", "OpenSSL"],
    title_en: "Debian 13.6 Release: Patches Multiple Core Vulnerabilities and Upgrades fwupd to Address UEFI Secure Boot Certificate Expiration",
    summary_en: "The major Linux distribution Debian has released a 13.6 version update, integrating numerous component vulnerability patches and system bug fixes. A key focus of this update is the upgrade of the firmware update tool fwupd to version 2.0.20. This aims to resolve system update issues caused by the expiration of UEFI Secure Boot bootloader certificates, ensuring the system can successfully update its Secure Boot certificates. Furthermore, this update includes over a hundred vulnerability patches, covering a wide range of components. These include multiple vulnerabilities in the network data transfer tool curl (such as certificate validation and memory safety), multiple patches for the Apache HTTP Server (involving memory usage, HTTP/2 handling, and denial-of-service issues), and updates to critical components like the QEMU emulator, OpenSSL library, and Chromium browser. These patches are designed to enhance the overall security and stability of the system, and users are advised to update to the latest version promptly to patch potential vulnerabilities.",
    tags_en: ["Debian", "Linux", "fwupd", "UEFI Secure Boot", "Vulnerability Patch", "OpenSSL"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177250", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟揭露GigaWiper後門：Go語言開發的破壞性惡意程式，具備遠端控制與磁碟抹除功能",
    summary: "微軟威脅情報團隊揭露一種類型為GigaWiper的破壞型後門程式。研究人員自2025年10月起觀測到相關的資料抹除活動。這套以Go語言開發的惡意程式，將命令暨控制（C2）、遠端控制及多種系統破壞功能整合於單一後門。GigaWiper整合了多種惡意功能，包括直接覆寫實體磁碟、加密檔案（類似Crucio勒索軟體，副檔名為.candy，但無法解密）、以及重新實作磁碟抹除工具FlockWiper。除了破壞資料，它還具備系統資訊蒐集及資料外傳能力。微軟已公布相關的C2伺服器IP位址及惡意程式SHA-256雜湊值，建議企業應啟用防竄改與雲端防護功能，並確保端點偵測與回應（EDR）工具處於封鎖模式運作，以進行偵測與阻斷。",
    tags: ["GigaWiper", "微軟", "後門", "Go語言", "資料抹除", "EDR", "C2"],
    title_en: "Microsoft Uncovers GigaWiper Backdoor: Destructive Malicious Program Developed in Go Language with Remote Control and Disk Wiping Capabilities",
    summary_en: "Microsoft Threat Intelligence has revealed a type of destructive backdoor program named GigaWiper. Researchers have observed related data wiping activities since October 2025. This malicious program, developed in Go language, integrates Command and Control (C2), remote control, and various system destructive functions into a single backdoor. GigaWiper incorporates multiple malicious functions, including direct physical disk overwriting, file encryption (similar to Crucio ransomware, with the extension .candy, but non-decryptable), and a re-implementation of the disk wiping tool FlockWiper. In addition to destroying data, it also possesses system information collection and data exfiltration capabilities. Microsoft has published the relevant C2 server IP addresses and the malicious program's SHA-256 hash values, advising enterprises to enable anti-tampering and cloud protection features, and ensure Endpoint Detection and Response (EDR) tools are operating in blocking mode to facilitate detection and containment.",
    tags_en: ["GigaWiper", "Microsoft", "Backdoor", "Go language", "Data Wiping", "EDR", "C2"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177249", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "澳洲警訊：CMS平臺面臨大規模攻擊，駭客鎖定WordPress外掛及Joomla漏洞進行Webshell植入",
    summary: "澳洲網路安全中心（ACSC）發布警訊，警告全球CMS平臺正遭受大規模攻擊。駭客利用多種已知弱點，如未經身分驗證的檔案上傳、遠端程式碼執行（RCE）、伺服器請求偽造（SSRF）及反序列化漏洞，試圖植入Webshell以遠端控制受害主機。攻擊目標涵蓋WordPress、Craft CMS、MaxSite CMS、MetInfo CMS等，特別關注WordPress外掛程式的弱點，以及Joomla的JCE外掛程式（CVE-2026-48907）等。ACSC指出，許多漏洞已具備公開CVE編號，且開發團隊已提供修補程式，但駭客正利用網站管理者未及時更新的空檔期進行滲透。實務影響包括網站運作中斷、用戶憑證或資料被竊取，甚至被用作更廣泛的入侵途徑。建議網站管理者應立即檢查並更新所有CMS核心、外掛程式及主題，修補已知漏洞。",
    tags: ["ACSC", "CMS", "WordPress", "Joomla", "RCE", "Webshell", "CVE-2026-48907"],
    title_en: "Australian Warning: CMS Platforms Face Large-Scale Attacks as Hackers Target WordPress Plugins and Joomla Vulnerabilities for Webshell Injection",
    summary_en: "The Australian Cyber Security Centre (ACSC) has issued a warning regarding large-scale attacks targeting global CMS platforms. Hackers are exploiting various known vulnerabilities, such as unauthenticated file uploads, Remote Code Execution (RCE), Server-Side Request Forgery (SSRF), and deserialization flaws, in an attempt to inject Webshells for remote control of compromised hosts. Attack targets include WordPress, Craft CMS, MaxSite CMS, and MetInfo CMS, with particular focus on vulnerabilities in WordPress plugins and the Joomla JCE plugin (CVE-2026-48907). ACSC points out that many of these vulnerabilities have public CVE identifiers and patches have been provided by development teams, but hackers are exploiting the window of time when site administrators fail to update promptly. Practical impacts include website operational disruption, theft of user credentials or data, and even using the compromised site as a pathway for broader intrusion. Website administrators are advised to immediately check and update all CMS cores, plugins, and themes to patch known vulnerabilities.",
    tags_en: ["ACSC", "CMS", "WordPress", "Joomla", "RCE", "Webshell", "CVE-2026-48907"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177248", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zimbra 協同平臺修補 XSS 漏洞：惡意郵件可於網頁用戶端執行腳本",
    summary: "開源協同平臺 Zimbra Collaboration Suite (ZCS) 近期發布安全更新，修補了一個經典的跨站指令碼（XSS）漏洞。此漏洞允許攻擊者透過傳送特製的惡意郵件，在用戶的網頁用戶端執行惡意腳本程式。雖然本次漏洞未分配 CVE 編號或風險值，但 Zimbra 維護單位已提醒用戶，必須將 ZCS 10.0.x、9.0.x 或 8.8.15 等版本升級至最新的 Daffodil v10.1.19 版本。此外，對於已實施 SNMP 緩解措施的 ZCS 10.1.x 用戶，則無需額外操作。文章提及 Zimbra 的 XSS 漏洞一直是駭客的目標，過去曾發生利用 CVE-2022-24682 攻擊政府和媒體，以及利用 CVE-2025-27915 攻擊巴西軍方等重大事件，提醒用戶應高度重視修補與安全配置。",
    tags: ["Zimbra Collaboration Suite", "XSS", "跨站指令碼", "開源平臺", "CVE-2022-24682", "CVE-2025-27915"],
    title_en: "Zimbra Collaboration Suite Patches XSS Vulnerability: Malicious Emails Can Execute Scripts on Web Client",
    summary_en: "The open-source collaboration platform, Zimbra Collaboration Suite (ZCS), recently released a security update to patch a classic Cross-Site Scripting (XSS) vulnerability. This vulnerability allows attackers to execute malicious scripts on a user's web client by sending specially crafted malicious emails. Although this vulnerability has not been assigned a CVE ID or risk score, the Zimbra maintenance team advises users to upgrade versions such as ZCS 10.0.x, 9.0.x, or 8.8.15 to the latest Daffodil v10.1.19 version. Furthermore, users of ZCS 10.1.x who have already implemented SNMP mitigations do not require additional action. The article notes that Zimbra's XSS vulnerability has historically been a target for hackers, citing major incidents such as the exploitation of CVE-2022-24682 against government and media entities, and the exploitation of CVE-2025-27915 against the Brazilian military, reminding users to highly prioritize patching and secure configuration.",
    tags_en: ["Zimbra Collaboration Suite", "XSS", "Cross-Site Scripting", "Open-Source Platform", "CVE-2022-24682", "CVE-2025-27915"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177242", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-038",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟警告：駭客利用 OAuth 信任關係與客製化設定，大規模竊取 Salesforce 帳戶資料",
    summary: "微軟觀察到一系列的威脅活動，期間橫跨 2025 年中至 2026 年中，駭客利用與 ShinyHunters 相關的客製化手法，攻擊客戶的 SaaS 應用程式，特別是 Salesforce 實例。攻擊者主要透過濫用信任的 OAuth 權限、供應鏈漏洞，以及未經妥善配置的訪客帳號權限，進行未授權的存取、資料外洩和持久化。攻擊路徑包括：透過冒充 IT 人員的語音釣魚（vishing）誘騙使用者授權惡意連線應用；利用第三方整合（如 Salesloft、Gainsight）的供應鏈漏洞，竊取 OAuth token；以及利用未經保護的訪客帳號權限，透過 GraphQL 查詢大量資料。這些攻擊行為並非利用 Salesforce 的軟體漏洞，而是利用了信任的權限結構。實務影響是攻擊者可以繼承高權限，進行大規模的 CRM 記錄（如帳戶、聯絡人、服務案例）查詢和資料外洩，且行為模式難以被傳統防禦系統偵測。微軟建議客戶應強化對 OAuth 連線應用程式的監控、驗證第三方整合、審查訪客存取配置，並啟用 Salesforce 事件監控等機制，以提升偵測的精細度。",
    tags: ["Salesforce", "OAuth", "SaaS", "vishing", "供應鏈攻擊", "資料外洩", "Microsoft Defender for Cloud Apps"],
    title_en: "Microsoft Warns: Hackers Exploit OAuth Trust Relationships and Custom Configurations to Mass Steal Salesforce Account Data",
    summary_en: "Microsoft has observed a series of threat activities spanning from mid-2025 to mid-2026, during which hackers used custom techniques associated with ShinyHunters to attack customer SaaS applications, particularly Salesforce instances. Attackers primarily conducted unauthorized access, data exfiltration, and persistence by abusing trusted OAuth permissions, supply chain vulnerabilities, and improperly configured guest account privileges. Attack vectors included: tricking users into authorizing malicious connected applications via vishing (voice phishing) by impersonating IT staff; exploiting supply chain vulnerabilities in third-party integrations (such as Salesloft and Gainsight) to steal OAuth tokens; and leveraging unprotected guest account privileges to query large amounts of data via GraphQL. These attack behaviors do not exploit Salesforce software vulnerabilities but rather exploit the trusted permission structure. The practical impact is that attackers can inherit high privileges, performing large-scale queries and data exfiltration of CRM records (such as accounts, contacts, and service cases), and their behavior patterns are difficult for traditional defense systems to detect. Microsoft advises customers to strengthen monitoring of OAuth connected applications, validate third-party integrations, review guest access configurations, and enable mechanisms like Salesforce Event Monitoring to improve detection granularity.",
    tags_en: ["Salesforce", "OAuth", "SaaS", "vishing", "Supply Chain Attack", "Data Exfiltration", "Microsoft Defender for Cloud Apps"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/07/13/defending-saas-based-applications-against-shinyhunters-oauth-abuse", lang: "EN" }
    ]
  },
  {
    id: "20260713-039",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "原生C++資訊竊取程式 CrashStealer 透過簽名載體繞過 macOS 安全機制竊取敏感資料",
    summary: "資安研究人員發現了一種名為 CrashStealer 的 macOS 資訊竊取惡意軟體。與傳統依賴 AppleScript 或 Objective-C 的竊取程式不同，CrashStealer 使用原生 C++ 編寫，提高了難度。該惡意軟體透過一個簽名且經過 Apple notarized 的載體（Werkbit.app）分發，成功繞過了 Gatekeeper 檢查。其攻擊流程包括：先透過一個 PIN 驗證的網域下載，然後執行後會聯繫 GitHub 取得檔案，再拉取 shell script 來下載最終的 Payload（CrashReporter.dmg）。一旦執行，它會建立 LaunchAgent 持久性，並在本地驗證用戶密碼，接著解鎖登入鑰匙圈，收集瀏覽器（如 Chrome、Brave、Edge 等）、加密貨幣錢包擴充功能、密碼管理器（如 1Password、Bitwarden 等）以及文件夾的憑證。所有收集的資料會使用 AES-GCM 加密後，透過 libcurl 上傳至攻擊者控制的伺服器。該惡意軟體特別強調分析抵抗性，採用了控制流扁平化和加密字串等技術。",
    tags: ["macOS", "CrashStealer", "資訊竊取", "原生C++", "Gatekeeper", "LaunchAgent", "AES-GCM"],
    title_en: "Native C++ Info Stealer Program CrashStealer Steals Sensitive Data by Bypassing macOS Security Mechanisms via Signed Payload",
    summary_en: "Security researchers discovered a macOS info-stealing malware named CrashStealer. Unlike traditional stealers that rely on AppleScript or Objective-C, CrashStealer is written in native C++, increasing its complexity. The malware is distributed via a signed and Apple notarized payload (Werkbit.app), successfully bypassing Gatekeeper checks. Its attack flow includes: first downloading via a PIN-protected domain, then connecting to GitHub after execution to retrieve files, and finally pulling a shell script to download the ultimate Payload (CrashReporter.dmg). Once executed, it establishes LaunchAgent persistence, validates user passwords locally, then unlocks the login keychain, and collects credentials from browsers (such as Chrome, Brave, Edge, etc.), cryptocurrency wallet extensions, password managers (such as 1Password, Bitwarden, etc.), and file folders. All collected data is encrypted using AES-GCM and then uploaded to the attacker-controlled server via libcurl. The malware specifically emphasizes anti-analysis resistance, employing techniques such as control flow flattening and encrypted strings.",
    tags_en: ["macOS", "CrashStealer", "Info Stealing", "Native C++", "Gatekeeper", "LaunchAgent", "AES-GCM"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/crashstealer-macos-malware-uses.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google與微軟下架 ModHeader 擴充功能：發現內建休眠式瀏覽紀錄收集器",
    summary: "安全研究機構 Stripe OLT 發現，廣受使用的標頭編輯擴充功能 ModHeader（在 Chrome 和 Edge 上擁有數百萬安裝）的官方版本中，內建了一個休眠的瀏覽紀錄收集器。該收集器雖然目前處於休眠狀態，但其設計允許它在特定條件下啟動，收集用戶瀏覽的網域，並將加密後的資料每日上傳至 api.stanfordstudies[.]com。該擴充功能版本 7.0.18 仍保留標頭編輯功能，但其背景代碼包含第二個系統，能夠建立設備指紋，並定期打包加密的網域列表與指紋進行上傳。雖然目前分析顯示收集器尚未實際收集或傳送任何資料，但其存在本身即構成重大風險。用戶應立即移除 ModHeader，並特別檢查是否曾在該擴充功能中貼入任何 API 金鑰、Bearer Token 或 Session Cookie，若有，應立即輪換。對於防禦者，建議在 DNS 和代理層級阻擋 stanfordstudies[.]com 和 extensions-hub[.]com，並在日誌中搜尋相關的 POST 請求。",
    tags: ["ModHeader", "瀏覽紀錄收集", "擴充功能安全", "Stripe OLT", "設備指紋", "API 洩漏"],
    title_en: "Google and Microsoft Delist ModHeader Extension: Discovery of Built-in Dormant Browser History Collector",
    summary_en: "Security research firm Stripe OLT discovered that the official version of ModHeader, a widely used header editing extension (with millions of installations on Chrome and Edge), contains a dormant browser history collector. Although currently dormant, its design allows it to activate under specific conditions, collecting the domains visited by the user and uploading the encrypted data daily to api.stanfordstudies[.]com. While this extension version 7.0.18 still retains its header editing functionality, its background code includes a second system capable of establishing a device fingerprint and periodically bundling the encrypted domain list and fingerprint for upload. Although current analysis shows that the collector has not actually collected or transmitted any data, its mere existence constitutes a significant risk. Users should immediately remove ModHeader and specifically check if they ever pasted any API keys, Bearer Tokens, or Session Cookies into the extension; if so, they must be rotated immediately. For defenders, it is recommended to block stanfordstudies[.]com and extensions-hub[.]com at the DNS and proxy layers, and to search logs for related POST requests.",
    tags_en: ["ModHeader", "Browser History Collection", "Extension Security", "Stripe OLT", "Device Fingerprinting", "API Leakage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/google-and-microsoft-pull-modheader.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安週報：從 ShareFile 警告到 Zimbra/npm 漏洞，揭示 AI 時代的資安新威脅",
    summary: "本週資安週報涵蓋多重威脅，指出攻擊者利用普通且快速演進的漏洞攻擊，並強調修補的時效性。主要事件包括：Progress 警告 ShareFile 客戶關閉 Storage Zone Controllers；Zimbra 提醒客戶修補 Classic Web Client 的儲存型 XSS 漏洞，該漏洞允許惡意電子郵件執行程式碼，可能洩露帳號資訊；Jscrambler 的 npm 套件遭到入侵，植入 Rust 資訊竊取器，目標跨越 Windows、macOS 和 Linux；此外，報告還詳細介紹了 GigaWiper 後門，以及代號 SHELLSTORM 的大規模攻擊，該攻擊利用 WordPress 插件的 27 個 CVE 部署 Web Shell。此外，研究還警示了「HalluSquatting」這種新型攻擊，利用 AI 輔助工具的幻覺特性，引導其安裝惡意機器人。",
    tags: ["ShareFile", "Zimbra", "npm", "CVE", "XSS", "AI 安全", "Web Shell"],
    title_en: "Cybersecurity Weekly Report: From ShareFile Warnings to Zimbra/npm Vulnerabilities, Revealing New Security Threats in the AI Era",
    summary_en: "This week's cybersecurity report covers multiple threats, pointing out that attackers are exploiting common and rapidly evolving vulnerabilities, and emphasizing the urgency of patching. Key incidents include: Progress warning ShareFile customers to decommission Storage Zone Controllers; Zimbra advising customers to patch a stored XSS vulnerability in the Classic Web Client, which allows malicious emails to execute code and potentially leak account information; the jscrambler npm package was compromised and implanted with a Rust information stealer, targeting Windows, macOS, and Linux; furthermore, the report detailed the GigaWiper backdoor, and a large-scale attack codenamed SHELLSTORM, which exploited 27 CVEs in WordPress plugins to deploy Web Shells. Additionally, research warned about a new attack type called \"HalluSquatting,\" which leverages the hallucination characteristics of AI-assisted tools to guide the installation of malicious bots.",
    tags_en: ["ShareFile", "Zimbra", "npm", "CVE", "XSS", "AI Security", "Web Shell"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/weekly-recap-sharefile-threat-citrix.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露「隱形記憶注入」攻擊：AI個人助理透過電子郵件植入假資訊",
    summary: "本研究報告揭示了一種名為「隱形記憶注入」（stealth memory injection）的AI攻擊手法。攻擊者無需帳號密碼，僅需發送一封看似普通的電子郵件給設定了閱讀郵件功能的個人AI助理（如OpenClaw）。該助理會誤判郵件中的指令，利用其內建的檔案工具，將攻擊者植入的虛假「事實」（false fact）寫入其持久記憶體（persistent memory）。由於助理設計上會隱藏其後台操作步驟，使用者難以察覺記憶體被篡改。在後續的對話中，這個植入的假資訊會悄悄地改變助理的回答或執行行為。研究使用MemGhost工具進行測試，在多個測試案例中，成功率高達 71.4% 至 87.5%。修補建議包括：限制AI助理的記憶寫入權限，要求在寫入持久記憶前必須向使用者確認，並對所有記憶寫入操作進行詳細日誌記錄。此外，應將處理不受信任郵件的閱讀功能與核心記憶管理功能分離。",
    tags: ["AI助理", "記憶注入", "電子郵件攻擊", "OpenClaw", "MemGhost", "Prompt Injection"],
    title_en: "Research Uncovers 'Stealth Memory Injection' Attack: AI Personal Assistants Implant False Information via Email",
    summary_en: "This research report reveals an AI attack technique called 'stealth memory injection.' Attackers do not require account passwords; they only need to send a seemingly ordinary email to a personal AI assistant configured with email reading capabilities (such as OpenClaw). The assistant misinterprets the instructions within the email and uses its built-in file tools to write fabricated 'facts' implanted by the attacker into its persistent memory. Because the assistant is designed to hide its background operational steps, users find it difficult to detect when the memory has been tampered with. In subsequent conversations, this implanted false information quietly alters the assistant's responses or execution behavior. The research used the MemGhost tool for testing, achieving a success rate of 71.4% to 87.5% across multiple test cases. Remediation suggestions include: restricting the AI assistant's memory write permissions, requiring user confirmation before writing to persistent memory, and implementing detailed logging for all memory write operations. Furthermore, the reading function for handling untrusted emails should be separated from the core memory management function.",
    tags_en: ["AI助理", "記憶注入", "電子郵件攻擊", "OpenClaw", "MemGhost", "Prompt Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-memghost-attack-plants-persistent.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "攻擊者利用配置錯誤的伺服器，對 Microsoft 365 進行多種 MFA 繞過與憑證竊取攻擊",
    summary: "法國資安公司 Lexfo 追蹤到一個在公共埠位監聽的 Python Web 伺服器，該伺服器配置錯誤，在 `.bash_history` 中甚至留下了攻擊命令。從這一次配置失誤，攻擊者得以揭露其完整的工具包，包括釣魚配置、憑證竊取日誌、RMM 安裝程式和備份檔案。攻擊者利用客製化的 Evilginx 代理，針對 Microsoft 365 進行了多場釣魚活動，目標多為企業郵箱。攻擊者採用了兩種機制繞過 MFA：一種是透過代理實時登入，另一種是濫用合法的 Microsoft 登入流程。其中一種攻擊（black-queen）特別利用了 OAuth 裝置代碼流程，透過偽造的 Authenticator 頁面引導受害者在真實的 Microsoft 頁面完成登入，從而取得活的 Session Token。這種方式的優點是即使受害者使用 Passkey 或 FIDO2，只要他們在真實的 Microsoft 基礎設施上完成授權，攻擊者仍能成功捕獲 Token。修補建議包括：嚴格檢查伺服器的配置，避免在公共埠位運行攻擊伺服器；對於 Microsoft 365，必須實施足夠強的條件式存取（Conditional Access）策略，特別是針對長時間存活的 Session Token，以防止其在密碼重設後仍可使用。",
    tags: ["Microsoft 365", "Evilginx", "MFA 繞過", "OAuth 裝置代碼流程", "憑證竊取", "Python Web 伺服器"],
    title_en: "Attackers Exploit Misconfigured Server Against Microsoft 365 for Various MFA Bypass and Credential Theft Attacks",
    summary_en: "French cybersecurity firm Lexfo tracked a Python web server listening on a public port that was misconfigured, even leaving attack commands in its `.bash_history`. From this configuration error, attackers were able to reveal their complete toolkit, including phishing configurations, credential theft logs, RMM installers, and backup files. The attackers conducted multiple phishing campaigns targeting corporate email accounts using a customized Evilginx proxy. They employed two mechanisms to bypass MFA: one through real-time proxy login, and another by abusing legitimate Microsoft login flows. One specific attack (black-queen) particularly exploited the OAuth device code flow, guiding victims to complete the login on the real Microsoft page via a fake Authenticator page, thereby obtaining a live Session Token. The advantage of this method is that even if the victim uses Passkey or FIDO2, the attacker can still successfully capture the Token as long as they complete the authorization on the real Microsoft infrastructure. Remediation recommendations include: strictly checking server configurations and avoiding running attack servers on public ports; and for Microsoft 365, implementing sufficiently strong Conditional Access policies, especially for long-lived Session Tokens, to prevent them from remaining usable after a password reset.",
    tags_en: ["Microsoft 365", "Evilginx", "MFA Bypass", "OAuth Device Code Flow", "Credential Theft", "Python Web Server"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/misconfigured-server-reveals-three.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA列入KEV：Joomla iCagenda與Balbooa Forms兩套外掛遭零日攻擊，可遠端執行程式",
    summary: "美國CISA已將兩項嚴重漏洞（CVSS 10.0）列入已知遭利用漏洞清單（KEV），目標為Joomla的iCagenda和Balbooa Forms外掛。CVE-2026-48939允許攻擊者透過iCagenda的活動表單上傳任意檔案，導致PHP程式碼執行；CVE-2026-56291則讓Balbooa Forms外掛可接受匿名上傳任意檔案，造成遠端程式碼執行。mySites.guru觀察到這兩個漏洞自2026年6月起即遭零日攻擊，攻擊者可利用這些缺陷在未經身份驗證的情況下上傳並執行惡意PHP Web Shell。受影響版本包括iCagenda 4.x (至 4.0.7) 和 3.x (至 3.9.14)，以及Balbooa Forms 2.4.0及以下。建議網站管理員立即升級至修補版本，並檢查網站的公共資料夾內是否有可疑的PHP檔案，以防已被植入後門。",
    tags: ["Joomla", "iCagenda", "Balbooa Forms", "CVE-2026-48939", "CVE-2026-56291", "遠端程式碼執行", "CISA"],
    title_en: "CISA Lists KEV: Joomla iCagenda and Balbooa Forms Plugins Targeted by Zero-Day Attacks Allowing Remote Code Execution",
    summary_en: "The U.S. CISA has added two critical vulnerabilities (CVSS 10.0) to its Known Exploited Vulnerabilities catalog (KEV), targeting the Joomla iCagenda and Balbooa Forms plugins. CVE-2026-48939 allows attackers to upload arbitrary files via iCagenda's activity forms, leading to PHP code execution; CVE-2026-56291 allows the Balbooa Forms plugin to accept anonymous uploads of arbitrary files, resulting in remote code execution. mySites.guru observed that both vulnerabilities have been subject to zero-day attacks since June 2026. Attackers can exploit these flaws to upload and execute malicious PHP Web Shells without authentication. Affected versions include iCagenda 4.x (up to 4.0.7) and 3.x (up to 3.9.14), and Balbooa Forms 2.4.0 and earlier. Website administrators are advised to immediately upgrade to the patched versions and check the site's public directories for suspicious PHP files to prevent potential backdoor installations.",
    tags_en: ["Joomla", "iCagenda", "Balbooa Forms", "CVE-2026-48939", "CVE-2026-56291", "Remote Code Execution", "CISA"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/icagenda-and-balbooa-forms-joomla-flaws.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA 警告 Joomla 擴充功能 iCagenda 與 Balbooa Forms 遭零日漏洞攻擊，可執行遠端代碼",
    summary: "美國網路安全暨關鍵基礎設施安全局（CISA）發出警告，指出 Joomla 的兩款擴充功能 iCagenda 與 Balbooa Forms 正遭到自動化攻擊者積極利用。這兩項漏洞分別為 CVE-2026-48939 與 CVE-2026-56291，皆屬於任意檔案上傳漏洞。攻擊者能藉此上傳包含 PHP 腳本在內的危險檔案，進而實現遠端代碼執行（RCE）並完全控制受害網站。根據資安平台監測，兩者在官方釋出修補前便遭到零日漏洞攻擊。CISA 已將其列入已遭利用漏洞（KEV）目錄，並要求聯邦機構限期完成修補。建議網站系統管理員立即確認是否安裝該元件，並盡速升級至安全版本。",
    tags: ["CISA", "Joomla", "CVE-2026-48939", "CVE-2026-56291", "iCagenda", "Balbooa Forms", "RCE", "零日漏洞"],
    title_en: "CISA Warns Joomla Extensions iCagenda and Balbooa Forms Targeted by Zero-Day Vulnerability Attack, Allowing Remote Code Execution",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning regarding two Joomla extensions, iCagenda and Balbooa Forms, which are being actively exploited by automated attackers. These two vulnerabilities are CVE-2026-48939 and CVE-2026-56291, respectively, both classified as arbitrary file upload vulnerabilities. Attackers can exploit these flaws to upload malicious files containing PHP scripts, thereby achieving Remote Code Execution (RCE) and gaining complete control over the compromised website. According to security platform monitoring, both vulnerabilities were targeted by zero-day attacks before official patches were released. CISA has listed them in its Known Exploited Vulnerabilities (KEV) catalog and has mandated federal agencies to complete patching within a deadline. Website system administrators are advised to immediately check if these components are installed and to upgrade to a secure version as soon as possible.",
    tags_en: ["CISA", "Joomla", "CVE-2026-48939", "CVE-2026-56291", "iCagenda", "Balbooa Forms", "RCE", "Zero-Day Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cisa-warns-of-actively-exploited-rce-flaws-in-joomla-extensions", lang: "EN" }
    ]
  },
  {
    id: "20260713-046",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 tvOS 27 與 HomePod 27 公開測試版，提升影音體驗與智慧家庭功能",
    summary: "Apple 已釋出 tvOS 27 和 HomePod 27 的公開測試版，讓 Apple TV 4K 用戶和 HomePod 用戶可提前體驗新功能。用戶可透過 Apple Beta Software Program 於 beta.apple.com 註冊並安裝。tvOS 27 的新功能包括重新設計的 Podcast App（具備影片升級）、智慧下載、更大的文字尺寸、更快速的 AirPlay 連接，以及 Apple Music 增加 Hi-Res Lossless Audio 和 AutoMix 等。此外，HomePod 27 也帶來更快速的 AirPlay 連接和更流暢的動畫效果。文章提醒，tvOS 27 將淘汰部分 Apple TV 型號的支援，但 HomePod 27 保留了對所有現有 HomePod 型號的支援。雖然傳聞中的 Siri AI 功能尚未加入，但這些更新預計將為 Apple TV 和智慧家庭設備帶來更佳的影音和操作體驗。",
    tags: ["Apple", "tvOS 27", "HomePod 27", "Apple TV 4K", "AirPlay", "Apple Music"],
    title_en: "Apple Releases tvOS 27 and HomePod 27 Public Beta, Enhancing Multimedia Experience and Smart Home Features",
    summary_en: "Apple has released public beta versions of tvOS 27 and HomePod 27, allowing Apple TV 4K and HomePod users to experience new features in advance. Users can register and install the beta via the Apple Beta Software Program at beta.apple.com. New features in tvOS 27 include a redesigned Podcast App (with video upgrades), smart downloads, larger text size, faster AirPlay connectivity, and additions to Apple Music such as Hi-Res Lossless Audio and AutoMix. Furthermore, HomePod 27 brings faster AirPlay connectivity and smoother animation effects. The article notes that while tvOS 27 will deprecate support for certain Apple TV models, HomePod 27 retains support for all existing HomePod models. Although the rumored Siri AI functionality has not been included, these updates are expected to provide a better multimedia and operational experience for Apple TV and smart home devices.",
    tags_en: ["Apple", "tvOS 27", "HomePod 27", "Apple TV 4K", "AirPlay", "Apple Music"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/tvos-27-and-homepod-27-public-betas-now-available-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260713-047",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 27 與 macOS 27 Golden Gate 修訂版 Beta 3，開發者需注意新版本號",
    summary: "Apple 近期除了發布 iPadOS 27 和 macOS 27 Golden Gate 的公開 Beta 版本外，也同時推出了這些開發者 Beta 3 的修訂版本。修訂後的 iPadOS 27 開發者 Beta 3 版本號為 24A5380l，而更新的 macOS 27 Golden Gate Beta 3 版本號為 26A5378n。文章指出，Apple 發布修訂版本的原因尚不明確，但可能用於修補在公開 Beta 上線前發現的潛在問題。雖然原文未提供具體變更細節，但開發者和資安人員仍需留意這些新版本，以確保系統的穩定性與安全性。建議開發者應密切追蹤 Apple 官方的更新公告，並在測試新版本時，特別關注是否有任何值得注意的系統層面或功能性變動。",
    tags: ["Apple", "iPadOS 27", "macOS 27", "Golden Gate", "Beta 測試", "開發者更新"],
    title_en: "Apple Releases iPadOS 27 and macOS 27 Golden Gate Revision Beta 3; Developers Must Note New Version Numbers",
    summary_en: "In addition to releasing the public Beta versions of iPadOS 27 and macOS 27 Golden Gate, Apple has also simultaneously rolled out developer Beta 3 revisions for these operating systems. The revised iPadOS 27 Developer Beta 3 version number is 24A5380l, and the updated macOS 27 Golden Gate Beta 3 version number is 26A5378n. The article notes that the reason for Apple releasing these revisions is unclear, but it may be intended to patch potential issues discovered before the public Beta launch. Although the original text does not provide specific change details, developers and cybersecurity professionals should remain vigilant regarding these new versions to ensure system stability and security. Developers are advised to closely monitor official Apple update announcements and pay special attention to any notable system-level or functional changes when testing the new versions.",
    tags_en: ["Apple", "iPadOS 27", "macOS 27", "Golden Gate", "Beta Testing", "Developer Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-rolls-out-revised-beta-3-builds-for-ipados-27-and-macos-27-golden-gate", lang: "EN" }
    ]
  },
  {
    id: "20260713-048",
    trackers: ["os"],
    category: "Apple",
    title: "macOS 27 Golden Gate 公開測試版發布：重點升級包含新 Siri AI、Spotlight 搜尋修復與統一設計",
    summary: "Apple 已發布 macOS 27 Golden Gate 的公開測試版，這是其作業系統系列的重要更新。本次升級的核心亮點是全新 Siri AI 體驗，該功能能索引來自訊息、郵件等應用程式的內容，以回答問題和執行請求。此外，macOS 27 Golden Gate 也大幅改善了 Spotlight 搜尋的可靠性，修復了先前版本（如 macOS Tahoe 26）的相關問題。在使用者介面方面，系統調整了 Liquid Glass 效果，並採用了統一的視窗和應用程式角半徑。此外，Apple Intelligence 功能也得到提升，包括更高效的寫作工具、視覺智慧功能，以及能透過自然語言指令建立擴充功能的新 Safari 擴充功能建構器。開發者和使用者應注意，由於這是測試版，系統穩定性可能存在差異，建議謹慎安裝和使用。",
    tags: ["macOS 27", "Golden Gate", "Apple Intelligence", "Siri AI", "Spotlight 搜尋", "macOS 更新"],
    title_en: "macOS 27 Golden Gate Public Beta Released: Key Upgrades Include New Siri AI, Spotlight Search Fixes, and Unified Design",
    summary_en: "Apple has released the public beta of macOS 27 Golden Gate, a major update to its operating system line. The core highlight of this upgrade is the brand-new Siri AI experience, which can index content from applications like Messages and Mail to answer questions and execute requests. Furthermore, macOS 27 Golden Gate significantly improves the reliability of Spotlight search, fixing issues present in previous versions (such as macOS Tahoe 26). In terms of user interface, the system adjusts the Liquid Glass effect and adopts a unified corner radius for windows and applications. Additionally, Apple Intelligence features have been enhanced, including more efficient writing tools, visual intelligence capabilities, and a new Safari extension builder that allows for the creation of extensions via natural language commands. Developers and users should note that, as this is a beta version, system stability may vary, and careful installation and use are recommended.",
    tags_en: ["macOS 27", "Golden Gate", "Apple Intelligence", "Siri AI", "Spotlight Search", "macOS Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/macos-27-public-beta-now-available-heres-how-to-install-it", lang: "EN" }
    ]
  },
  {
    id: "20260713-049",
    trackers: ["os"],
    category: "Apple",
    title: "watchOS 27 Public Beta 上線：Siri AI 賦能手錶，具備動態應用網格與單手操作手勢",
    summary: "Apple 發布 watchOS 27 public beta，為 Apple Watch 用戶帶來一系列重大功能升級。核心亮點是搭載 Siri AI，讓手錶能回答更廣泛的問題、理解個人情境，並在應用程式中執行操作，甚至可同步對話紀錄。此外，系統新增了動態應用網格和更主動的 Smart Stack，提供更豐富的介面體驗。使用者還可體驗新的單手操作手勢，無需觸控螢幕即可操作小工具。健康與健身方面，新增了 Workout Buddy 輔導、改善跑步機距離測量，以及針對年齡大用戶的經期變化追蹤。由於這是 Beta 版本，若出現問題，用戶需等待 Apple 發布新版本。建議用戶在更新前，確保配對的 iPhone 已更新至 iOS 27 public beta，並留意系統穩定性。",
    tags: ["watchOS 27", "Apple Watch", "Siri AI", "Apple Intelligence", "Beta Test", "Apple Health"],
    title_en: "watchOS 27 Public Beta Released: Siri AI Empowers Watch with Dynamic App Grid and Single-Hand Gestures",
    summary_en: "Apple has released watchOS 27 public beta, bringing a series of major feature upgrades for Apple Watch users. The core highlight is the integration of Siri AI, allowing the watch to answer broader questions, understand personal context, and perform actions within apps, even synchronizing conversation records. Additionally, the system introduces a dynamic app grid and a more proactive Smart Stack, offering a richer interface experience. Users can also experience new single-hand gestures, enabling interaction with widgets without needing to touch the screen. In health and fitness, new features include Workout Buddy coaching, improved treadmill distance measurement, and menstrual cycle tracking tailored for older users. Since this is a Beta version, users should be prepared for potential issues and await Apple's official release of a stable version. It is recommended that users ensure their paired iPhone is updated to iOS 27 public beta before updating, and to monitor system stability.",
    tags_en: ["watchOS 27", "Apple Watch", "Siri AI", "Apple Intelligence", "Beta Test", "Apple Health"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/watchos-27-public-beta", lang: "EN" }
    ]
  },
  {
    id: "20260713-050",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Public Beta 上線：Siri AI 重構、照片編輯強化及 Liquid Glass 客製化功能詳解",
    summary: "Apple 已發布 iOS 27 Public Beta，為用戶提供體驗年度重大軟體更新的機會。本次更新的核心亮點是圍繞下一代 Apple Intelligence 重構的 Siri AI。新 Siri 不僅能進行持續對話，還能理解螢幕內容、執行應用程式操作，並從個人資料中搜尋細節。此外，系統大幅強化了照片編輯功能，新增 Clean Up、Extend 和 Spatial Reframing 等工具。Safari 亦升級，可自動按主題整理分頁，並新增「通知我」功能。在介面層面，Liquid Glass 提供了更精細的客製化滑桿，讓用戶可調整透明度。雖然 iOS 27 支援 iPhone 11 及更新機型，但部分最先進的 AI 功能（如 Siri AI）仍要求 iPhone 15 Pro 或更新的機型。用戶在安裝 Beta 軟體前，應務必備份資料，並注意 Beta 版本可能存在錯誤或相容性問題。",
    tags: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "Public Beta", "Liquid Glass"],
    title_en: "iOS 27 Public Beta Released: Detailed Features of Rebuilt Siri AI, Enhanced Photo Editing, and Liquid Glass Customization",
    summary_en: "Apple has released the iOS 27 Public Beta, offering users a chance to experience the year's major software update. The core highlight of this update revolves around the rebuilt Siri AI, powered by next-generation Apple Intelligence. The new Siri can not only maintain continuous conversations but also understand screen content, execute application operations, and search for details from personal data. Furthermore, the system significantly enhances photo editing capabilities, adding tools such as Clean Up, Extend, and Spatial Reframing. Safari has also been upgraded to automatically organize tabs by theme and introduces a 'Notify Me' function. On the interface level, Liquid Glass provides more granular customization sliders, allowing users to adjust transparency. Although iOS 27 supports iPhone 11 and newer models, some of the most advanced AI features (such as Siri AI) still require an iPhone 15 Pro or newer model. Users must ensure they back up their data before installing the Beta software and should be aware that the Beta version may contain bugs or compatibility issues.",
    tags_en: ["Apple", "iOS 27", "Siri AI", "Apple Intelligence", "Public Beta", "Liquid Glass"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/ios-27-public-beta", lang: "EN" }
    ]
  },
  {
    id: "20260713-051",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 27 公開 Beta：重點介紹 Siri AI、Liquid Glass 與系統級功能升級",
    summary: "Apple 已發布 iPadOS 27 的公開 Beta 版本，讓用戶可以在正式發布前搶先體驗新功能。本次更新強調效能提升，包括加速 AirDrop、檔案傳輸、視窗切換等日常操作。主要新增功能包括整合 Siri AI，用戶可透過專用 App 或螢幕頂部手勢呼叫，搜尋範圍涵蓋 Siri 與 Spotlight 所有功能。此外，iPadOS 27 引入了 Liquid Glass 滑桿，用於自訂 UI 設計，並透過 Apple Intelligence 支援自定義 iPad 壁紙和鍵盤增強等系統級功能。系統層面也升級了 Screen Time 等親子控制功能，並增加了大型小工具至 Today 視圖、狀態列顯示活動 App 名稱，以及讓 iPhone App 具備可調整大小的功能。用戶若想體驗這些新功能，可透過 beta.apple.com 參與測試計畫。",
    tags: ["iPadOS 27", "Apple Intelligence", "Siri AI", "Liquid Glass", "Beta 版", "Apple"],
    title_en: "Apple Releases iPadOS 27 Public Beta: Highlighting Siri AI, Liquid Glass, and System-Level Feature Upgrades",
    summary_en: "Apple has released the public Beta version of iPadOS 27, allowing users to experience new features before the official release. This update emphasizes performance improvements, including accelerated AirDrop, file transfer, and window switching for daily operations. Key new features include integrated Siri AI, which can be invoked via a dedicated app or a top-screen gesture, expanding search capabilities across all Siri and Spotlight functions. Furthermore, iPadOS 27 introduces the Liquid Glass slider for customizing UI design, and leverages Apple Intelligence to support system-level features like customizable iPad wallpapers and enhanced keyboards. System-level features also include upgrades to parental controls such as Screen Time, the addition of large widgets to the Today view, displaying active app names in the status bar, and enabling adjustable sizing for iPhone apps. Users interested in experiencing these new features can participate in the testing program via beta.apple.com.",
    tags_en: ["iPadOS 27", "Apple Intelligence", "Siri AI", "Liquid Glass", "Beta", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-releases-ipados-27-public-beta-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260713-052",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 macOS Sonoma 14.8.8 與 macOS Sequoia 15.7.8 第五個 RC 版本，包含重要安全修補",
    summary: "Apple 近期為開發者發布了 macOS Sonoma 14.8.8 和 macOS Sequoia 15.7.8 的第五個 Release Candidate (RC 5) 版本。這兩個版本分別為 build 23J615 和 24G817。除了這兩個系統外，Apple 也同步發布了 iOS、iPadOS 和 macOS 26.6 的開發者 Beta 5 版本。雖然 Apple 尚未公布詳細的修補內容，但根據其發布說明，這些版本包含「重要的安全修補」，建議所有用戶更新。此舉發生在 Apple 之前發布了包含部分原定於 26.6 版本中的安全修補的 26.5.2 版本之後，暗示可能還有其他預計修補內容會包含在本次的 RC 版本中。",
    tags: ["Apple", "macOS Sonoma", "macOS Sequoia", "RC 5", "安全修補", "iOS"],
    title_en: "Apple Releases macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8 RC 5 Builds with Important Security Fixes",
    summary_en: "Apple recently released the fifth Release Candidate (RC 5) versions for macOS Sonoma 14.8.8 and macOS Sequoia 15.7.8. These two versions are build 23J615 and 24G817, respectively. In addition to these two operating systems, Apple also released developer Beta 5 versions for iOS, iPadOS, and macOS 26.6. Although Apple has not disclosed the detailed patch contents, according to its release notes, these versions include \"important security fixes,\" and all users are advised to update. This release follows Apple's previous release of version 26.5.2, which contained security fixes originally intended for the 26.6 version, suggesting that there may be other planned fixes included in this RC version.",
    tags_en: ["Apple", "macOS Sonoma", "macOS Sequoia", "RC 5", "Security Fix", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/macos-sonoma-14-8-8-and-macos-sequoia-15-7-8-get-a-rare-fifth-rc", lang: "EN" }
    ]
  },
  {
    id: "20260713-053",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 26.6、watchOS 26.6 等系統第五版 Beta，修補錯誤並應對 AI 威脅",
    summary: "Apple 已發布 iPadOS 26.6、watchOS 26.6、tvOS 26.6、visionOS 26.6 以及 HomePod 26.6 的公開 Beta 5 版本。這些更新版本包含多項錯誤修復，其中部分修復是因應日益增長的 AI 驅動安全漏洞威脅而提前釋出。本次 Beta 釋出標誌著 26.6 系列軟體更新的收尾階段，開發者和業界的關注點正逐漸轉向預計今年秋季發布的 iOS 27 及相關配套更新，預計不久後也會發布第一版公開 Beta。開發者可立即安裝這些 Beta 5 版本，官方正式版本預計很快就會推出。",
    tags: ["Apple", "iPadOS", "watchOS", "tvOS", "visionOS", "Beta 測試"],
    title_en: "Apple releases Beta 5 of iPadOS 26.6, watchOS 26.6, and other systems, patching vulnerabilities and addressing AI threats",
    summary_en: "Apple has released public Beta 5 versions of iPadOS 26.6, watchOS 26.6, tvOS 26.6, visionOS 26.6, and HomePod 26.6. These updated versions include multiple bug fixes, some of which have been released preemptively to address the growing threat of AI-driven security vulnerabilities. This Beta release marks the concluding phase of the 26.6 series software updates, with developer and industry focus gradually shifting toward the anticipated iOS 27 and related updates scheduled for this autumn, which are expected to have their first public Beta released soon. Developers can install these Beta 5 versions immediately, with the official stable release expected shortly.",
    tags_en: ["Apple", "iPadOS", "watchOS", "tvOS", "visionOS", "Beta 測試"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-rolls-beta-5-for-ipados-26-6-tvos-26-6-watchos-26-6-more", lang: "EN" }
    ]
  },
  {
    id: "20260713-054",
    trackers: ["os", "security"],
    category: "Apple",
    title: "macOS 26.6 Beta 5 發布：蘋果持續修補系統漏洞，預計包含更多安全補丁",
    summary: "蘋果已發布 macOS 26.6 public beta 5 (版本號 25G5065a)。本次更新預計不會加入大量用戶可見的新功能，而是著重於「錯誤修復與整體改善」。鑑於 AI 驅動的資安漏洞促使蘋果加快安全修補的釋出速度，本次系統更新預計會包含額外的安全補丁，部分補丁甚至已在 macOS 26.5 中包含。先前版本已修復了部分應用程式被誤判為 Intel 專用所導致的 macOS 棄用通知問題，並解決了生態系統和 HealthKit 的相關問題。開發者應注意，此 Beta 版本的發布，可能預示著下一版本將是 Release Candidate (RC)。建議使用者在安裝前備份設備，並透過「系統設定」的「軟體更新」進行更新。",
    tags: ["macOS", "Apple", "26.6", "Beta 5", "安全修補", "系統更新"],
    title_en: "macOS 26.6 Beta 5 Released: Apple Continues System Patching, Expected to Include More Security Patches",
    summary_en: "Apple has released macOS 26.6 public beta 5 (version number 25G5065a). This update is not expected to introduce many user-visible new features, but rather focuses on \"bug fixes and overall improvements.\" Given that AI-driven security vulnerabilities have prompted Apple to accelerate the release speed of security patches, this system update is expected to include additional security patches, some of which were already included in macOS 26.5. Previous versions addressed issues related to macOS deprecation notices caused by some applications being incorrectly identified as Intel-exclusive, and resolved issues related to the ecosystem and HealthKit. Developers should note that the release of this Beta version may indicate that the next version will be a Release Candidate (RC). Users are advised to back up their devices before installing and to update via \"System Settings\" under \"Software Update\".",
    tags_en: ["macOS", "Apple", "26.6", "Beta 5", "Security Patch", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/macos-26-6-beta-5-now-available-heres-whats-coming", lang: "EN" }
    ]
  },
  {
    id: "20260713-055",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 26.6 Beta 5：預告聯絡人封鎖限制調整與新型防盜功能",
    summary: "Apple 近期發布了 iOS 26.6 的公開 Beta 5 版本，此版本雖然不是最新的主要功能焦點，但預計將是下一批送貨版本。目前業界關注的焦點仍是 iOS 27。iOS 26.6 的更新內容主要包含兩項可觀察到的變動：一是調整了可封鎖的聯絡人數量限制；二是新增了某種新型的 iPhone 防盜功能。此外，此更新也可能為 iOS 27 中 Siri AI 所使用的 Spotlight 索引功能進行準備。由於 iOS 27 的正式版本預計於九月推出，iOS 26.6 將是大多數用戶在秋季前使用的版本。開發者應留意這些系統層面的調整，以確保應用程式能順利適應新的系統限制與功能。",
    tags: ["Apple", "iOS 26.6", "iOS 27", "Beta 版", "防盜功能", "Spotlight"],
    title_en: "Apple Releases iOS 26.6 Beta 5: Teasing Contact Blocking Limit Adjustments and New Anti-Theft Features",
    summary_en: "Apple recently released the public Beta 5 version of iOS 26.6. Although this version is not the focus of major new features, it is expected to be the next wave of delivery versions. Industry attention remains focused on iOS 27. The update for iOS 26.6 primarily includes two observable changes: first, an adjustment to the limit on the number of contacts that can be blocked; and second, the addition of a new type of iPhone anti-theft feature. Furthermore, this update may also prepare for the Spotlight indexing function used by Siri AI in iOS 27. Since the official version of iOS 27 is expected in September, iOS 26.6 will be the version used by most users before autumn. Developers should pay attention to these system-level adjustments to ensure applications can smoothly adapt to the new system limitations and features.",
    tags_en: ["Apple", "iOS 26.6", "iOS 27", "Beta", "Anti-Theft Feature", "Spotlight"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-releases-ios-26-6-beta-5-for-iphone-heres-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260713-056",
    trackers: ["os"],
    category: "Apple",
    title: "市場分析：Apple iPhone 儘管產業低迷仍佔全球智慧型手機出貨份額紀錄高達 20%",
    summary: "根據 Counterpoint Research 的報告，在 2026 年第二季度，全球智慧型手機市場整體面臨下行趨勢。儘管如此，Apple 的 iPhone 銷量仍年增 3%，並創下紀錄的 20% 市場佔有率。在市場份額方面，Samsung 憑藉 Galaxy S26 系列的強勁需求和積極促銷活動，回歸領先地位，佔比達 24%。報告指出，Apple 能夠避免進行價格上漲，這使其連續實現年增長。然而，Apple 在中國市場的銷量年減，且由於記憶體供應限制，舊款 iPhone 型號的需求也相對疲軟。Counterpoint 預測，全球智慧型手機出貨量將在全年下降約 14%，且記憶體短缺問題預計持續到 2027 年。廠商預計將持續削減低利潤型號，並增加對翻新及前代設備的依賴。",
    tags: ["Apple", "iPhone", "Counterpoint Research", "全球智慧型手機市場", "市場佔有率", "2026年"],
    title_en: "Market Analysis: Apple iPhone Maintains Record 20% Global Smartphone Shipment Share Despite Industry Downturn",
    summary_en: "According to a Counterpoint Research report, the global smartphone market faced a downward trend in the second quarter of 2026. Despite this, Apple's iPhone sales grew by 3% year-over-year, achieving a record 20% market share. In terms of market share, Samsung regained the leading position, reaching 24% due to strong demand and aggressive promotions for the Galaxy S26 series. The report noted that Apple's ability to avoid price increases allowed it to achieve continuous annual growth. However, Apple experienced year-over-year sales declines in the Chinese market, and demand for older iPhone models remained relatively weak due to memory supply constraints. Counterpoint predicts that global smartphone shipments will decline by approximately 14% throughout the year, and the memory shortage issue is expected to persist until 2027. Manufacturers are expected to continue reducing low-profit models and increasing reliance on refurbished and previous-generation devices.",
    tags_en: ["Apple", "iPhone", "Counterpoint Research", "Global Smartphone Market", "Market Share", "2026"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/report-apple-hits-record-20-global-smartphone-shipment-share-as-market-plunges", lang: "EN" }
    ]
  },
  {
    id: "20260713-057",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "知名開源AI代理平台OpenClaw存在三項高風險漏洞，利用WhatsApp訊息可執行任意程式碼",
    summary: "研究人員Chinmohan Nayak發現知名開源AI代理整合平臺OpenClaw（影響版本 2026.6.1）存在三項資安弱點，涉及環境變數過濾、Git傳輸協定及沙箱防護機制。這些漏洞的攻擊向量是利用偽裝成除錯請求的WhatsApp訊息，使得攻擊者能在OpenClaw主機上執行任意程式碼。Nayak指出，這些弱點的根源在於AI代理程式「照單全收」的特性，而非傳統的記憶體破壞手法。具體而言，GHSA-hjr6-g723-hmfm可透過變數注入繞過環境變數過濾器；GHSA-9969-8g9h-rxwm利用特製的Git ext::網址執行任意命令；GHSA-575v-8hfq-m3mc則是沙箱父資料夾繞過，利用OpenClaw對/home和/var的信任度較高。OpenClaw開發團隊已發布修補版本 2026.6.6，建議使用者立即升級以防範攻擊。",
    tags: ["OpenClaw", "AI代理", "GHSA", "開源安全", "沙箱逃逸", "環境變數"],
    title_en: "OpenClaw, a prominent open-source AI agent platform, has three high-risk vulnerabilities exploitable via WhatsApp messages to execute arbitrary code",
    summary_en: "Researchers Chinmohan Nayak discovered three security vulnerabilities in the prominent open-source AI agent integration platform OpenClaw (affecting version 2026.6.1), involving environment variable filtering, Git transfer protocols, and sandbox protection mechanisms. The attack vector for these vulnerabilities is utilizing WhatsApp messages disguised as debugging requests, allowing attackers to execute arbitrary code on the OpenClaw host. Nayak points out that the root cause of these weaknesses lies in the AI agent's 'blind compliance' nature, rather than traditional memory corruption techniques. Specifically, GHSA-hjr6-g723-hmfm can bypass the environment variable filter through variable injection; GHSA-9969-8g9h-rxwm exploits arbitrary command execution via a custom Git ext:: URL; and GHSA-575v-8hfq-m3mc is a sandbox parent directory bypass, leveraging OpenClaw's high trust level for /home and /var. The OpenClaw development team has released a patched version 2026.6.6 and advises users to upgrade immediately to prevent attacks.",
    tags_en: ["OpenClaw", "AI Agent", "GHSA", "Open Source Security", "Sandbox Escape", "Environment Variable"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177241", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-058",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "CISA資料外洩事件後分析：揭示政府機構資安漏洞與事件應對流程缺陷",
    summary: "美國網路安全與基礎設施安全局（CISA）公開發布了其近期資料外洩事件的後事分析報告。事件指出，一位承包商將包含AWS GovCloud金鑰、內部系統明文帳密等敏感資料，在GitHub上公開存放了近六個月。報告揭示了CISA在事件應對流程上的多個重大缺陷，包括：首次收到警報後，AWS金鑰的失效化耗時超過48小時；且在處理外部安全研究人員的通知時，缺乏明確且獨立的通報管道。\n專家指出，組織應建立成熟的金鑰管理能力，並將外部資安研究人員的洩密報告視為獨立的事件類型，而非產品或客戶的漏洞。此外，應持續進行公開程式碼倉庫（如GitHub）的秘密掃描，而非僅限於定期盤點。CISA已承諾修訂其通報管道，並加強內部掃描機制，以提升整體資安韌性。",
    tags: ["CISA", "GitHub", "AWS GovCloud", "金鑰管理", "資安事件應對", "秘密掃描", "後事分析"],
    title_en: "Post-Mortem Analysis of CISA Data Leak: Revealing Government Agency Security Vulnerabilities and Incident Response Process Flaws",
    summary_en: "The Cybersecurity and Infrastructure Security Agency (CISA) of the United States has published a post-mortem analysis report regarding its recent data leak incident. The incident revealed that a contractor publicly stored sensitive data, including AWS GovCloud keys and internal system plaintext credentials, on GitHub for nearly six months. The report exposed multiple significant flaws in CISA's incident response process, including: it took over 48 hours for the AWS keys to be invalidated after the initial alert was received; and there was a lack of clear and independent notification channels when handling reports from external security researchers. Experts point out that organizations should establish mature key management capabilities and treat disclosures from external security researchers as a distinct incident type, rather than merely a product or customer vulnerability. Furthermore, continuous secret scanning of public code repositories (such as GitHub) should be implemented, rather than relying solely on periodic inventory checks. CISA has committed to revising its notification channels and strengthening its internal scanning mechanisms to enhance overall cybersecurity resilience.",
    tags_en: ["CISA", "GitHub", "AWS GovCloud", "Key Management", "Incident Response", "Secret Scanning", "Post-Mortem Analysis"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/07/lessons-learned-from-cisas-recent-github-leak", lang: "EN" }
    ]
  },
  {
    id: "20260713-059",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "新型 PhaaS 攻擊平台 Forg365 鎖定 Microsoft 365，結合 AI 與設備認證竊取帳號",
    summary: "資安研究機構 ZeroBAC 揭露了一種名為 Forg365 的新型釣魚即服務（PhaaS）攻擊平台。該平台高度工業化，旨在大規模、低門檻地攻擊 Microsoft 365 帳號。攻擊鏈結合了設備代碼釣魚、中間人攻擊（AitM）戰術、AI 輔助誘餌生成，並利用 Amazon SES 和 Twilio SendGrid 等合法郵件基礎設施進行傳遞，使惡意郵件融入正常流量。攻擊者可透過 Telegram 註冊，使用操作面板生成誘餌、設定活動，並管理捕獲的 OAuth token。Forgg365 的關鍵特點包括模擬 Microsoft 認證流程的設備認證釣魚分支，以及使用 ForgCookie 擴充功能進行「自動 SSO Cookie 刷新」，從而劫持並維持對受害帳號的持續存取權限。這類平台不僅能竊取憑證，還能執行後滲透操作，例如監控特定關鍵字或利用 AI 起草回覆郵件。這類攻擊極大地降低了攻擊門檻，使得技術經驗較少的犯罪者也能進行大規模、持續的網路攻擊。建議組織應加強對身份驗證流程的監控，特別是設備代碼和 SSO 流程，並考慮實施多層次的身份保護機制。",
    tags: ["Forgg365", "Microsoft 365", "PhaaS", "設備代碼釣魚", "AitM", "OAuth token", "AI 攻擊"],
    title_en: "New PhaaS Attack Platform Forg365 Targets Microsoft 365, Combining AI and Device Authentication to Steal Accounts",
    summary_en: "Cybersecurity research organization ZeroBAC has revealed a novel phishing-as-a-service (PhaaS) attack platform called Forg365. This platform is highly industrialized, aiming to attack Microsoft 365 accounts on a large scale and with low barriers to entry. The attack chain combines device code phishing, Man-in-the-Middle (AitM) tactics, and AI-assisted lure generation, utilizing legitimate email infrastructures such as Amazon SES and Twilio SendGrid for delivery, allowing malicious emails to blend into normal traffic. Attackers can register via Telegram, use an operation panel to generate lures and set activities, and manage captured OAuth tokens. Key features of Forg365 include a device authentication phishing branch that simulates the Microsoft authentication process, and the use of the ForgCookie extension for 'automatic SSO Cookie refreshing,' thereby hijacking and maintaining continuous access to victim accounts. Such platforms are capable not only of stealing credentials but also of performing post-exploitation operations, such as monitoring specific keywords or using AI to draft reply emails. These attacks significantly lower the barrier to entry, enabling even technically inexperienced criminals to conduct large-scale, persistent cyber attacks. Organizations are advised to strengthen monitoring of identity authentication processes, especially device code and SSO flows, and to consider implementing multi-layered identity protection mechanisms.",
    tags_en: ["Forgg365", "Microsoft 365", "PhaaS", "Device Code Phishing", "AitM", "OAuth token", "AI Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/forg365-phaas-targets-microsoft-365.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-060",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安業者 Jscrambler 遭竊 npm 憑證，惡意版本套件遭植入資訊竊取程式下載近千五百次",
    summary: "網頁安全業者 Jscrambler 遭駭客竊取 npm 發布憑證，導致其 Code Integrity 產品相關的 npm 套件被上傳多個惡意版本（涵蓋 8.14、8.16、8.17 與 8.20）。該惡意套件利用 preinstall 勾點執行資訊竊取軟體，並使用 ChaCha20-Poly1305 演算法進行高度混淆。攻擊旨在竊取原始碼、開發者憑證、雲端及 AI 開發工具組態、加密貨幣錢包及瀏覽器資料等。該套件在下架前兩小時內已被下載 1,479 次，並波及另外四個相依套件。Jscrambler 已廢棄受影響版本、撤銷發布憑證並強化管線控制。建議受影響組織視環境已被入侵，立即撤換所有憑證並更新至 8.22 安全版本。",
    tags: ["Jscrambler", "npm 套件投毒", "資訊竊取軟體", "憑證外洩", "供應鏈攻擊", "Socket"],
    title_en: "Cybersecurity firm Jscrambler's npm credentials stolen; malicious package containing information stealer downloaded nearly 1,500 times",
    summary_en: "Web security firm Jscrambler had its npm publishing credentials stolen by hackers, leading to multiple malicious versions being uploaded to npm for its Code Integrity product (covering versions 8.14, 8.16, 8.17, and 8.20). These malicious packages utilized the preinstall script to execute an information stealer, which was highly obfuscated using the ChaCha20-Poly1305 algorithm. The attack aimed to steal source code, developer credentials, cloud and AI development tool configurations, cryptocurrency wallet data, and browser data. The package was downloaded 1,479 times within two hours of its listing and affected four other dependent packages. Jscrambler has deprecated the affected versions, revoked the publishing credentials, and strengthened its pipeline controls. Affected organizations are advised to treat their environment as compromised, immediately revoke all credentials, and update to the secure version 8.22.",
    tags_en: ["Jscrambler", "npm package poisoning", "information stealer", "credential leak", "supply chain attack", "Socket"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-backdoor-jscrambler-npm-package-with-infostealer-malware", lang: "EN" }
    ]
  },
  {
    id: "20260713-061",
    trackers: ["os"],
    category: "Android",
    title: "Google Snapseed 推出 4.1 版，大幅擴充支援多種 RAW 格式，提升 Android 影像處理能力",
    summary: "Google 的 Snapseed 應用程式為 Android 用戶發布了 4.1 版本更新。本次更新的主要亮點是大幅擴充了對 RAW 格式的支援，涵蓋了 DNG、ARW、RAF、NEF、CR3、ORF 和 PEF 等多數主流相機的格式。這項功能提升了影像處理的廣度和穩定性，並改善了使用體驗。此外，用戶現在可以直接在編輯工具內撤銷（undo）和重做（redo）編輯動作，無需返回主編輯畫面。Snapseed 4.1 正在逐步向 Android 用戶推送，iOS 版本預計將很快跟進。Google 提醒用戶，由於 RAW 處理的複雜性，仍可能出現少量 Bug，建議用戶在使用時留意並回報問題，以確保應用程式的穩定性。",
    tags: ["Google", "Snapseed", "Android", "RAW 格式", "DNG", "影像處理"],
    title_en: "Google Snapseed releases version 4.1, significantly expanding support for multiple RAW formats and enhancing Android image processing capabilities",
    summary_en: "Google's Snapseed application has released version 4.1 for Android users. The main highlight of this update is the significantly expanded support for RAW formats, covering numerous mainstream camera formats such as DNG, ARW, RAF, NEF, CR3, ORF, and PEF. This feature enhances the breadth and stability of image processing and improves the overall user experience. Additionally, users can now undo and redo editing actions directly within the editing tools, without needing to return to the main editing screen. Snapseed 4.1 is being gradually pushed to Android users, with the iOS version expected to follow soon. Google advises users that due to the complexity of RAW processing, minor bugs may still occur, and recommends that users monitor and report any issues encountered to ensure application stability.",
    tags_en: ["Google", "Snapseed", "Android", "RAW format", "DNG", "Image processing"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/snapseed-4-1-raw", lang: "EN" }
    ]
  },
  {
    id: "20260713-062",
    trackers: ["os"],
    category: "Android",
    title: "Google 宣布 2026 年 7 月系統更新：Play Store 與服務升級包含 AI 內容識別與工作檔案管理",
    summary: "Google 發布了 2026 年 7 月的系統更新說明，涵蓋了 Play 服務、Play Store 以及多個 Android 系統核心元件的更新。本次更新主要針對用戶體驗與開發者功能進行優化。在 Play Store v52.3 的更新中，用戶在歐盟地區將能識別 AI 生成的圖片，並提升大螢幕的內容佈局密度。Play services v26.26 的升級則著重於帳戶管理和裝置連線，例如提升 Google One 內購體驗，並新增了用於改善工作檔案設定的 API。此外，系統更新也加入了支援工作檔案帳戶從手機傳輸至 Wear OS 手錶的功能，以及讓用戶能在 PC 端管理 Google 位置分享設定。這些更新旨在提升 Android 生態系統的穩定性、安全性與開發便利性，建議開發者關注新的 API 支援，用戶應透過設定應用程式更新所有相關系統服務。",
    tags: ["Google", "Android", "Play Store", "Play services", "AI 內容識別", "Wear OS", "系統更新"],
    title_en: "Google Announces July 2026 System Update: Play Store and Services Upgrades Include AI Content Identification and Work File Management",
    summary_en: "Google released the system update documentation for July 2026, covering updates to Play Services, the Play Store, and multiple core Android system components. This update primarily focuses on optimizing user experience and developer functionality. The Play Store v52.3 update will allow users in the European Union to identify AI-generated images and improve content layout density on large screens. The Play services v26.26 upgrade focuses on account management and device connectivity, such as enhancing the Google One in-app purchase experience and adding a new API for improving work file settings. Furthermore, the system update includes support for transferring work file accounts from mobile phones to Wear OS watches, and allows users to manage Google location sharing settings on a PC. These updates aim to enhance the stability, security, and development convenience of the Android ecosystem. Developers are advised to pay attention to the new API support, and users should update all relevant system services through the settings application.",
    tags_en: ["Google", "Android", "Play Store", "Play services", "AI Content Identification", "Wear OS", "System Update"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/july-2026-google-system-updates", lang: "EN" }
    ]
  },
  {
    id: "20260713-063",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列 FCC 資訊曝光：預計搭載 MediaTek Modem，包含 UWB 與 Thread 功能",
    summary: "根據 FCC 網站的認證清單，Google Pixel 11 系列的五款新設備已曝光。雖然具體型號代號（如 GPQQ7, GUJ0N 等）尚未明確對應到 Pixel 11、Pixel 11 Pro、Pixel 11 Pro XL 等各個版本，但資料顯示該系列將搭載 MediaTek modem，這與過去觀察到的 Exynos 晶片組有所不同，符合業界預期。\n\n從網路頻段資訊來看，這五款設備中，有三款將具備 UWB（超寬頻）和 Thread 功能，除了標準的 5G mmWave 和衛星連線能力外。這暗示了 Pixel 11 系列在連網功能和物聯網（IoT）應用上的強化。\n\n雖然 FCC 文件提供了許多硬體細節，但整體而言，資訊多為產品規格和型號代號，缺乏重大安全漏洞或軟體更新的資訊。該系列預計於 8 月 11 日發布。",
    tags: ["Google Pixel 11", "FCC", "MediaTek", "UWB", "Thread", "Android"],
    title_en: "Google Pixel 11 Series FCC Information Leaked: Expected to Feature MediaTek Modem, Including UWB and Thread Functionality",
    summary_en: "According to the FCC website's certification list, five new devices belonging to the Google Pixel 11 series have been exposed. Although the specific model codes (such as GPQQ7, GUJ0N, etc.) have not been clearly mapped to individual versions like Pixel 11, Pixel 11 Pro, or Pixel 11 Pro XL, the data indicates that the series will feature a MediaTek modem. This differs from the Exynos chipset observed in the past, aligning with industry expectations.\n\nRegarding network band information, three of these five devices will possess UWB (Ultra-Wideband) and Thread functionality, in addition to standard 5G mmWave and satellite connectivity. This suggests an enhancement of the Pixel 11 series' connectivity features and Internet of Things (IoT) applications.\n\nWhile the FCC documents provide many hardware details, the information is generally limited to product specifications and model codes, lacking details on major security vulnerabilities or software updates. The series is expected to launch on August 11th.",
    tags_en: ["Google Pixel 11", "FCC", "MediaTek", "UWB", "Thread", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/google-pixel-11-models-appear-fcc-website", lang: "EN" }
    ]
  },
  {
    id: "20260713-064",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列傳採用 Tensor G6，據報將是首款搭載台積電 2nm 製程的智慧型手機",
    summary: "根據最新報告，Google 的 Pixel 11 系列預計將搭載 Tensor G6 晶片。該晶片據傳將是首款採用台積電 (TSMC) 2nm 製程的晶片，這讓 Pixel 11 成為首批上市搭載此先進製程的智慧型手機系列。雖然傳聞指出 Tensor G6 的升級幅度可能並非革命性，但預計仍會包含新的 CPU 核心、改良的 GPU，以及安全晶片和行動天線等方面的升級。此 2nm 製程的採用，讓 Google 在蘋果和高通等競爭對手之前搶佔了市場先機。Google 已確認於 8 月 12 日舉行活動發布 Pixel 11 系列，市場預期此新機型將帶來顯著的技術進步。",
    tags: ["Google", "Pixel 11", "Tensor G6", "TSMC", "2nm", "Android"],
    title_en: "Google Pixel 11 Series to Adopt Tensor G6, Reportedly the First Smartphone Featuring TSMC 2nm Process",
    summary_en: "According to the latest reports, Google's Pixel 11 series is expected to feature the Tensor G6 chip. This chip is rumored to be the first to utilize TSMC's 2nm process, making the Pixel 11 the first smartphone series to hit the market with this advanced process. Although rumors suggest that the upgrade to the Tensor G6 may not be revolutionary, it is anticipated to include upgrades such as new CPU cores, an improved GPU, and enhancements to the security chip and mobile antenna. The adoption of this 2nm process allows Google to seize a market advantage ahead of competitors like Apple and Qualcomm. Google has confirmed an event to launch the Pixel 11 series on August 12th, and the market expects this new model to bring significant technological advancements.",
    tags_en: ["Google", "Pixel 11", "Tensor G6", "TSMC", "2nm", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/pixel-11-tensor-g6-upgrade-tsmc-2nm", lang: "EN" }
    ]
  },
  {
    id: "20260713-065",
    trackers: ["os"],
    category: "Android",
    title: "Google AI Mode 提升聊天紀錄搜尋功能，用戶可於 Android 和 iOS 搜尋歷史對話",
    summary: "Google 在其 AI Mode 服務上進行了使用者體驗優化，讓用戶可以直接在 Android 和 iOS 平台上搜尋過去的聊天紀錄。透過 Google App 或 AI Mode 首頁的導航抽屜，新增了「搜尋討論串」欄位，可輕鬆進入完整的「我的活動」頁面。此功能讓用戶能更便捷地追蹤和繼續舊的對話。此外，Google 也更新了 iPhone 應用程式的介面設計，將原本固定在螢幕底部的提示框改為浮動的圓角矩形。更重要的功能更新是，移動端已新增了透過「加號」選單上傳「檔案」的能力，此功能目前已在 google.com/ai 上線，但尚未全面開放至 Android 平台。",
    tags: ["Google", "AI Mode", "Android", "iOS", "聊天紀錄", "使用者介面"],
    title_en: "Google AI Mode enhances chat history search function, allowing users to search past conversations on Android and iOS",
    summary_en: "Google has optimized the user experience for its AI Mode service, allowing users to directly search their past chat records on both Android and iOS platforms. A new 'Search Discussions' field has been added via the Google App or the AI Mode homepage navigation drawer, providing easy access to the complete 'My Activity' page. This feature enables users to track and resume old conversations more conveniently. Furthermore, Google has updated the iPhone application's interface design, changing the previously fixed bottom prompt box to a floating rounded rectangle. A more significant functional update is the addition of the ability to upload 'Files' via the 'plus' menu on mobile devices. This feature is currently live at google.com/ai but has not yet been fully rolled out to the Android platform.",
    tags_en: ["Google", "AI Mode", "Android", "iOS", "Chat History", "User Interface"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/google-ai-mode-search-chat-history", lang: "EN" }
    ]
  },
  {
    id: "20260713-066",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 系列預覽：Amazon 提前曝光三色型號與規格細節",
    summary: "本報導根據 Amazon 上的預覽商品列表，初步揭露了 Google Pixel 11 系列手機的資訊。受影響產品為 Pixel 11、Pixel 11 Pro、Pixel 11 Pro Fold 等型號。從規格上看，基礎 Pixel 11 預計配備 6.3 吋螢幕（1080×2424），儲存容量為 256GB，RAM 為 12GB，電池容量分別為 4,985 mAh（基礎）、5,115 mAh（Pro XL）和 4,750 mAh（Fold）。雖然列表描述提及 Android 16，但文章指出這些手機實際發布時預計會搭載 Android 17。此外，有用戶觀察到 Pixel 11 Pro 的鏡頭設計可能採用了類似「All Lenses on Prism」（ALoP）的圓形設計，預示著潛在的影像升級。然而，文章提醒讀者，由於資訊來源為 Amazon 的預覽列表，所有規格和設計都應謹慎看待，且這些列表可能很快就會消失。",
    tags: ["Google Pixel 11", "Pixel 11 Pro", "Android 17", "手機規格", "Amazon 洩漏", "Pixel 11 Fold"],
    title_en: "Pixel 11 Series Preview: Amazon Leaks Details of Three Color Models and Specifications",
    summary_en: "This report reveals preliminary information on the Google Pixel 11 series phones, based on a preview product list on Amazon. Affected products include models such as the Pixel 11, Pixel 11 Pro, and Pixel 11 Pro Fold. In terms of specifications, the base Pixel 11 is expected to feature a 6.3-inch screen (1080×2424), 256GB storage, and 12GB RAM. The battery capacities are listed as 4,985 mAh (base), 5,115 mAh (Pro XL), and 4,750 mAh (Fold). Although the list description mentions Android 16, the article points out that these phones are expected to feature Android 17 upon actual release. Furthermore, users have observed that the Pixel 11 Pro's camera design might adopt a circular design similar to 'All Lenses on Prism' (ALoP), suggesting potential imaging upgrades. However, the article cautions readers that since the information source is Amazon's preview list, all specifications and designs should be viewed with caution, and these lists may disappear soon.",
    tags_en: ["Google Pixel 11", "Pixel 11 Pro", "Android 17", "Phone Specifications", "Amazon Leak", "Pixel 11 Fold"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/this-might-be-the-pixel-11-in-three-colors-gallery", lang: "EN" }
    ]
  },
  {
    id: "20260713-067",
    trackers: ["os", "security"],
    category: "Android",
    title: "EVbee Service Android App 存在通訊加密與憑證驗證漏洞，可能遭網路竊取充電站存取碼",
    summary: "EVbee Service Android 應用程式（版本 v1.4.101.00）存在安全漏洞，該應用程式雖然使用 TLS 加密通訊（HTTPS），但未執行伺服器憑證驗證。這使得網路路徑上的攻擊者可以攔截並操縱應用程式與 EVbee 伺服器之間的通訊。更嚴重的是，該通訊內容使用了 RC4 加密，且使用了硬編碼金鑰，這極大地降低了加密強度，使攻擊者更容易取得通訊內容。由於通訊內容涉及充電站的存取碼，一旦被竊取，可能導致充電設施的未授權使用。修補建議是開發者應立即修復憑證驗證機制，並升級通訊加密標準，避免使用弱加密演算法如 RC4。",
    tags: ["EVbee Service", "CVE-2026-22093", "Android", "TLS", "RC4", "通訊加密"],
    title_en: "EVbee Service Android App has communication encryption and certificate validation vulnerabilities, potentially allowing theft of charging station access codes",
    summary_en: "The EVbee Service Android application (version v1.4.101.00) contains security vulnerabilities. Although the application uses TLS encryption for communication (HTTPS), it fails to perform server certificate validation. This allows attackers on the network path to intercept and manipulate communication between the application and the EVbee server. More critically, the communication content uses RC4 encryption and hardcoded keys, which significantly weakens the encryption strength, making it easier for attackers to obtain the communication content. Since the communication content involves charging station access codes, theft could lead to unauthorized use of the charging facility. The recommended fix is for developers to immediately repair the certificate validation mechanism and upgrade the communication encryption standard, avoiding weak encryption algorithms like RC4.",
    tags_en: ["EVbee Service", "CVE-2026-22093", "Android", "TLS", "RC4", "Communication Encryption"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-22093", lang: "EN" }
    ]
  },
  {
    id: "20260713-068",
    trackers: ["security"],
    category: "前瞻技術",
    title: "黃隊（Yellow Teams）定義未來資安：透過AI模型建構「護甲」應對先進威脅",
    summary: "隨著AI模型（如Anthropic的Mythos和OpenAI的GPT-5.5）在資安領域的應用日益廣泛，傳統的紅隊（Red Team）和藍隊（Blue Team）正在出現新的角色——黃隊（Yellow Teams）。黃隊專門負責開發防禦和攻擊工具，定義未來資安的框架。文章指出，AI模型雖然強大，但在缺乏人類上下文理解時，容易產生誤判，例如無法判斷內部不可見的端點是否為漏洞。為了解決此問題，業界開始開發「護甲」（Harness），這是一種圍繞AI模型的軟體層保護層，用來定義其權限、政策和行為準則。Netskope和Cisco等公司已開源了具體的護甲框架（如Foundry Security Spec），並利用AI代理（Agents）進行多步驟的漏洞狩獵。這顯示，未來資安防禦的重點已從單純的修補，轉向整合紅、藍、黃三方知識，利用AI提升分析效率，並建立更完善的AI使用流程。",
    tags: ["Yellow Team", "AI 安全", "Harness", "Mythos", "GPT-5.5", "資安框架"],
    title_en: "Yellow Teams Define Future Cybersecurity: Building 'Armor' Against Advanced Threats Using AI Models",
    summary_en: "As AI models (such as Anthropic's Mythos and OpenAI's GPT-5.5) become increasingly prevalent in the cybersecurity domain, traditional Red Team and Blue Team roles are giving rise to a new function: Yellow Teams. Yellow Teams are specifically responsible for developing both defensive and offensive tools, thereby defining the framework for future cybersecurity. The article points out that while AI models are powerful, they are prone to misjudgment when lacking human contextual understanding, such as failing to determine if an invisible internal endpoint constitutes a vulnerability. To address this, the industry is beginning to develop 'Harnesses,' which are software-layer protective layers built around AI models. These Harnesses are used to define the model's permissions, policies, and behavioral guidelines. Companies like Netskope and Cisco have open-sourced specific Harness frameworks (such as the Foundry Security Spec) and are utilizing AI Agents for multi-step vulnerability hunting. This indicates that the focus of future cybersecurity defense is shifting from mere patching to integrating Red, Blue, and Yellow team knowledge, leveraging AI to enhance analysis efficiency, and establishing more comprehensive AI usage workflows.",
    tags_en: ["Yellow Team", "AI Security", "Harness", "Mythos", "GPT-5.5", "Cybersecurity Framework"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/yellow-teams-defining-future-ai-security", lang: "EN" }
    ]
  },
  {
    id: "20260713-069",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI驅動的 ScamBuster 系統：透過模擬受害者人設，大規模反制網路釣魚詐騙",
    summary: "Filigran 的 Laurent Giovannoni 推出 ScamBuster，這是一個開源的 AI 系統，旨在將網路釣魚詐騙的矛頭轉向詐騙者。傳統做法多為刪除惡意郵件，但 ScamBuster 改變了這一點：它不會立即刪除，而是利用 AI 驅動的「受害者人設」（如年邁寡婦、小企業主等）回覆詐騙郵件。其核心目標是引誘詐騙者自發洩露其背後的基礎設施和金錢資訊。系統僅作為「入站式」監聽器，接收詐騙郵件後啟動對話。透過對話，ScamBuster 會收集並分析詐騙者提供的指標（Indicators），例如國際銀行帳號（IBAN）、支付網域或電話前綴。這些資訊會被結構化，並以 STIX 2.1 和 MISP 等標準格式輸出，幫助安全研究人員和執法機構建立詐騙者群體輪廓。此外，系統還具備自學習能力，能根據對話的結果優化人設和應對策略，提高資訊獲取效率。該系統底層採用大型語言模型（LLM）代理，並設計為 AI 模型的「無關聯」（Agnostic）架構，可整合 OpenAI、Anthropic 或 Llama 等多種模型。",
    tags: ["ScamBuster", "AI", "網路釣魚", "LLM", "STIX 2.1", "資訊收集", "安全研究"],
    title_en: "AI-Powered ScamBuster System: Countering Phishing Scams by Simulating Victim Personas",
    summary_en: "Laurent Giovannoni of Filigran has launched ScamBuster, an open-source AI system designed to turn the spear of phishing scams back onto the scammers. While traditional methods focus on deleting malicious emails, ScamBuster changes this approach: instead of immediate deletion, it uses AI-driven 'victim personas' (such as elderly widows, small business owners, etc.) to reply to the scam emails. Its core objective is to lure the scammers into voluntarily disclosing their underlying infrastructure and financial information. The system acts only as an 'inbound' listener, initiating dialogue after receiving a phishing email. Through this dialogue, ScamBuster collects and analyzes indicators provided by the scammers, such as International Bank Account Numbers (IBAN), payment domains, or phone prefixes. This information is then structured and exported in standard formats like STIX 2.1 and MISP, assisting security researchers and law enforcement agencies in profiling scammer groups. Furthermore, the system possesses self-learning capabilities, optimizing personas and response strategies based on dialogue outcomes to enhance information gathering efficiency. The system utilizes a Large Language Model (LLM) agent at its core and is designed with an AI model 'agnostic' architecture, allowing integration with multiple models such as OpenAI, Anthropic, or Llama.",
    tags_en: ["ScamBuster", "AI", "Phishing", "LLM", "STIX 2.1", "Intelligence Gathering", "Security Research"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/turning-tables-email-scammers-scambuster", lang: "EN" }
    ]
  },
  {
    id: "20260713-070",
    trackers: ["eu_cra", "security"],
    category: "前瞻技術",
    title: "英國啟動「網路韌性承諾」與國家級AI防禦藍圖Cyber Shield，應對AI加劇的網路威脅",
    summary: "面對AI加劇的網路安全威脅，英國政府與國家網路安全中心（NCSC）啟動了「網路韌性承諾」（Cyber Resilience Pledge），鼓勵企業提升資安韌性。該承諾要求企業將網路安全提升至董事會層級責任，並強化供應鏈安全。此外，NCSC與科學、創新與技術部（DSIT）共同開發了國家級網路防禦藍圖「Cyber Shield」。該藍圖的核心目標是利用先進的代理人AI（Agentic AI），建立一個可大規模、自動化運作的國家網路防禦體系。Cyber Shield規劃讓紅隊與藍隊AI代理人協同運作，紅隊負責高速發現系統弱點，藍隊則即時偵測、遏制威脅並進行防禦。這些AI系統初期將專注於自動發現漏洞與威脅，未來目標是自動修復，並能在各組織控制下跨越邊界協作，提升國家整體安全。目前該計畫仍處於規劃與測試階段，將逐步發展為全國商業化方案。",
    tags: ["英國政府", "NCSC", "網路韌性", "Cyber Shield", "AI安全", "Agentic AI"],
    title_en: "UK Launches 'Cyber Resilience Pledge' and National AI Defense Blueprint Cyber Shield to Counter AI-Enhanced Cyber Threats",
    summary_en: "In response to cyber threats amplified by AI, the UK government and the National Cyber Security Centre (NCSC) have launched the 'Cyber Resilience Pledge,' encouraging businesses to enhance their cybersecurity resilience. This pledge mandates that companies elevate cybersecurity to a board-level responsibility and strengthen supply chain security. Furthermore, the NCSC, in collaboration with the Department for Science, Innovation and Technology (DSIT), has developed the national cyber defense blueprint, 'Cyber Shield.' The core objective of this blueprint is to utilize advanced Agentic AI to establish a national cyber defense system that can operate automatically and at scale. Cyber Shield plans for Red Team and Blue Team AI agents to operate collaboratively, with the Red Team responsible for rapidly discovering system vulnerabilities, and the Blue Team handling real-time threat detection, containment, and defense. These AI systems will initially focus on automated vulnerability and threat discovery, with a future goal of automated remediation, and the ability to collaborate across organizational boundaries under the control of various entities, thereby enhancing overall national security. The plan is currently in the planning and testing phase and will gradually develop into a nationwide commercial solution.",
    tags_en: ["UK Government", "NCSC", "Cyber Resilience", "Cyber Shield", "AI Security", "Agentic AI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177272", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-071",
    trackers: ["security"],
    category: "前瞻技術",
    title: "奧義智慧推出桌遊《Cybercrete》，以模擬CTEM框架提升資安教育與跨部門協作能力",
    summary: "奧義智慧科技（CyCraft）推出桌遊《Cybercrete：守衛資安之路》，旨在將複雜的企業資安管理概念融入遊戲，提升資安教育的實用性。遊戲設計核心緊扣Gartner提出的「持續性威脅暴露管理」（CTEM）方法論，強調企業應持續性地管理和主動式地識別攻擊面。遊戲流程模擬了CTEM的五大步驟：界定、探索、排序、驗證與行動。玩家需扮演資安長、安全架構師等不同職能角色，在有限資源下，學習如何優先處理風險，並體會跨部門溝通與協作的重要性。遊戲機制結合了策略合作與劇本殺元素，讓玩家在模擬的網路資產拓樸上，學習漏洞管理、端點安全及情資應用等實務知識。開發團隊強調，資安管理的第一步是了解內部資產配置與權限，並體認到「資安不是一個人的事」。",
    tags: ["奧義智慧科技", "Cybercrete", "CTEM", "資安教育", "資安框架", "跨部門協作"],
    title_en: "CyCraft Launches Board Game 'Cybercrete' to Enhance Cybersecurity Education and Cross-Departmental Collaboration by Simulating the CTEM Framework",
    summary_en: "CyCraft Technology launched the board game 'Cybercrete: The Path to Cybersecurity Defense,' which aims to integrate complex enterprise cybersecurity management concepts into a game format, thereby enhancing the practicality of cybersecurity education. The game's core design is closely tied to the 'Continuous Threat Exposure Management' (CTEM) methodology proposed by Gartner, emphasizing that enterprises must continuously manage and proactively identify their attack surface. The game process simulates the five key steps of CTEM: Define, Explore, Prioritize, Validate, and Act. Players take on different roles, such as CISO and Security Architect, learning how to prioritize risks and experiencing the importance of cross-departmental communication and collaboration under limited resources. The game mechanics combine strategic cooperation with murder mystery elements, allowing players to learn practical knowledge such as vulnerability management, endpoint security, and threat intelligence application on a simulated network asset topology. The development team emphasized that the first step in cybersecurity management is understanding internal asset configuration and permissions, and realizing that 'cybersecurity is not the job of one person.'",
    tags_en: ["CyCraft Technology", "Cybercrete", "CTEM", "Cybersecurity Education", "Cybersecurity Framework", "Cross-Departmental Collaboration"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177268", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-072",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "微軟宣布整合AI加速漏洞發現與修補流程，強化Windows安全更新能力",
    summary: "微軟宣布將全面利用人工智慧（AI）技術，擴大Windows平臺的漏洞發現、驗證與修補流程。由於AI加速了漏洞發現的速度與規模，微軟推出了MDASH多模型代理式AI安全系統，用於掃描Windows關鍵二進位檔，並利用多個AI模型驗證潛在漏洞，再經專屬流程排除誤報，交由工程師調查。AI的應用不僅限於漏洞發現，也將導入修補流程，協助分析錯誤原因、提出候選修補方式及挑選回歸測試。微軟表示，這代表未來每次Windows安全更新將納入更多修補內容，顯示其漏洞辨識與處理能力持續提升。雖然文章未透露正式導入時間，但微軟已在近期Patch Tuesday修補了歷來規模最大的單月漏洞數量之一。",
    tags: ["微軟", "Windows", "AI", "漏洞發現", "安全更新", "MDASH"],
    title_en: "Microsoft Announces Integration of AI to Accelerate Vulnerability Discovery and Patching, Strengthening Windows Security Update Capabilities",
    summary_en: "Microsoft announced that it will fully utilize Artificial Intelligence (AI) technology to expand the vulnerability discovery, validation, and patching process for the Windows platform. Because AI accelerates the speed and scale of vulnerability discovery, Microsoft introduced the MDASH multi-model agentic AI security system. This system is used to scan critical Windows binaries and utilizes multiple AI models to validate potential vulnerabilities, which are then processed through a dedicated workflow to eliminate false positives before being handed over to engineers for investigation. The application of AI is not limited to discovery; it will also be introduced into the patching process, assisting in root cause analysis, proposing candidate fixes, and selecting regression tests. Microsoft stated that this means that future Windows security updates will include more patching content, demonstrating its continuously improving vulnerability identification and handling capabilities. Although the article did not disclose a formal implementation timeline, Microsoft recently patched one of the largest single-month volumes of vulnerabilities to date.",
    tags_en: ["Microsoft", "Windows", "AI", "Vulnerability Discovery", "Security Update", "MDASH"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177264", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260713-073",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟宣布 Entra ID 預設採用 Passkey，強化身份驗證防禦 AI 時代網路威脅",
    summary: "為應對 AI 時代日益複雜的身份攻擊，微軟宣布將在 Microsoft Entra ID 中，逐步將 Passkey 設為預設的身份驗證方式。此舉旨在取代易受釣魚和竊取攻擊的 SMS 或語音驗證，大幅提升防釣魚能力。從 2026 年 9 月 1 日開始，Passkey 將成為預設體驗，用戶在進行多因素驗證時，將會被提示註冊 Passkey。隨後，微軟將逐步停止提供原生的 SMS 和語音電信服務，並於 2027 年 2 月 1 日完全退役此功能。文章強調，Passkey 採用公鑰加密，而非共享密鑰，從根本上提升了安全性。微軟建議所有組織盡快將用戶遷移至 Passkey 或其他防釣魚的驗證方法，並提供了從同步 Passkey（如 iCloud Keychain）和設備綁定 Passkey（如 FIDO2 安全金鑰）等多種方式進行部署的詳細規劃指引。",
    tags: ["Microsoft Entra ID", "Passkey", "多因素驗證", "身份驗證", "FIDO2", "網路安全"],
    title_en: "Microsoft Announces Passkey as Default for Entra ID, Strengthening Identity Authentication Against AI-Era Cyber Threats",
    summary_en: "To counter increasingly sophisticated identity attacks in the AI era, Microsoft announced that it will gradually set Passkey as the default identity authentication method within Microsoft Entra ID. This move aims to replace SMS or voice authentication, which are susceptible to phishing and theft, significantly enhancing anti-phishing capabilities. Starting September 1, 2026, Passkey will become the default experience, and users will be prompted to register a Passkey when performing multi-factor authentication. Subsequently, Microsoft will gradually cease providing native SMS and voice telecommunication services, completely retiring this functionality on February 1, 2027. The article emphasizes that Passkey uses public-key cryptography rather than shared secrets, fundamentally improving security. Microsoft advises all organizations to quickly migrate users to Passkey or other anti-phishing authentication methods, and provides detailed deployment guidelines for various methods, including syncing Passkeys (such as iCloud Keychain) and device-bound Passkeys (such as FIDO2 security keys).",
    tags_en: ["Microsoft Entra ID", "Passkey", "Multi-Factor Authentication", "Identity Authentication", "FIDO2", "Cybersecurity"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/07/13/microsoft-entra-id-security-updates-passkeys-are-the-default-authentication-method-in-entra-id", lang: "EN" }
    ]
  },
  {
    id: "20260713-074",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI 驅動的 SOC 應對模式：結合「快速系統」與「慢速系統」提升偵測效率",
    summary: "本文探討現代資安營運中心（SOC）應對警報的思維模式，並提出結合人類認知科學（卡尼曼的「快慢思維」理論）與 AI 技術的架構建議。文章指出，傳統的 SOC 往往要求分析師將「自動化、模式識別」的任務（System 1）與「需要深度判斷、耗能」的任務（System 2）混為一談，導致分析師過度疲勞，忽略了大量低嚴重性但關鍵的威脅。根據研究，絕大多數（約 98%）的警報可以透過自動化處理，而真正需要人工判斷的警報僅佔極小部分（約 2%）。因此，理想的 SOC 架構應讓 AI 負責 100% 訊號的快速、自動化調查（System 1），將所有證據和初步判斷彙整後，再將極少數真正需要判斷的案例交給人類分析師進行深度、審慎的判斷（System 2）。這能確保資源分配效率，避免漏網之魚。",
    tags: ["SOC", "AI Agent", "System 1", "System 2", "資安架構", "自動化偵測"],
    title_en: "AI-Driven SOC Response Model: Enhancing Detection Efficiency by Integrating 'System 1' and 'System 2'",
    summary_en: "This article explores the cognitive model for modern Security Operations Center (SOC) alert response and proposes an architectural framework that combines human cognitive science (Kahneman's 'System 1 and System 2' theory) with AI technology. It points out that traditional SOC operations often require analysts to conflate tasks of 'automation and pattern recognition' (System 1) with tasks that 'require deep judgment and consume energy' (System 2), leading to analyst fatigue and the overlooking of numerous low-severity but critical threats. Research indicates that the vast majority (approximately 98%) of alerts can be handled through automation, while only a very small fraction (approximately 2%) truly requires human judgment. Therefore, the ideal SOC architecture should allow AI to handle the rapid, automated investigation of 100% of signals (System 1), consolidating all evidence and preliminary judgments, and then passing only the extremely few cases requiring judgment to human analysts for deep, careful analysis (System 2). This ensures efficient resource allocation and prevents missed threats.",
    tags_en: ["SOC", "AI Agent", "System 1", "System 2", "Cybersecurity Architecture", "Automation Detection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/thinking-fast-and-slow-in-soc-case-for.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-075",
    trackers: ["security"],
    category: "前瞻技術",
    title: "研究揭露駭客利用AI生成腳本進行AD環境偵察與資料外洩",
    summary: "資安研究人員觀察到一個入侵事件，其中未知的威脅行為者利用了疑似AI生成的PowerShell腳本，對Active Directory (AD) 環境進行了大規模偵察。攻擊鏈首先透過預先取得的憑證，在網域加入的Windows Server上建立遠端桌面存取權限，並在特定資料夾部署工具。該腳本被描述為「高度積極」且「嘈雜」，具備多重備援機制，用於系統性地收集AD使用者、電腦、群組、OU和信任關係等資訊。攻擊者隨後使用s5cmd和C#-based工具尋找可存取資料儲存庫，最終將資料彙整成CSV檔案，並生成包含資料竊取摘要的HTML報告進行外洩。研究指出，AI的應用並非引入了全新的攻擊技術，而是極大地降低了攻擊的門檻，使攻擊者能夠以更快的速度和規模執行傳統的攻擊流程，將AI作為一種「能力倍增器」。",
    tags: ["PowerShell", "Active Directory", "AI", "LLM", "資安攻擊", "資料外洩", "AD"],
    title_en: "Research Reveals Hackers Using AI-Generated Scripts for AD Environment Reconnaissance and Data Exfiltration",
    summary_en: "Cybersecurity researchers observed an intrusion incident where an unknown threat actor utilized seemingly AI-generated PowerShell scripts to conduct large-scale reconnaissance within an Active Directory (AD) environment. The attack chain began by establishing remote desktop access on a domain-joined Windows Server using pre-obtained credentials, and deploying tools in a specific folder. The script was described as 'highly aggressive' and 'noisy,' featuring multiple redundancy mechanisms to systematically collect information regarding AD users, computers, groups, OUs, and trust relationships. The attackers subsequently used s5cmd and C#-based tools to locate accessible data repositories, ultimately compiling the data into CSV files and generating an HTML report containing a summary of the stolen data for exfiltration. The research points out that the application of AI does not introduce entirely new attack techniques, but rather significantly lowers the barrier to entry, enabling attackers to execute traditional attack processes with greater speed and scale, effectively using AI as an 'capability multiplier.'",
    tags_en: ["PowerShell", "Active Directory", "AI", "LLM", "Cybersecurity Attack", "Data Exfiltration", "AD"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/attacker-uses-suspected-ai-generated.html", lang: "EN" }
    ]
  },
  {
    id: "20260713-076",
    trackers: ["os"],
    category: "重點關注",
    title: "三星健康 App 重新設計後，用戶若拒絕同意數據用於 AI 訓練，將面臨數據無法同步或被刪除的影響",
    summary: "隨著三星健康（Samsung Health）App 進行重新設計並整合更多 AI 功能，用戶在同意書中被要求做出選擇：是否允許三星使用其健康數據進行 AI 訓練，包括人工審核。這些數據範圍廣泛，包含步數、睡眠、藥物記錄、生理週期追蹤，甚至完整的病歷、檢測結果等。如果用戶選擇退出（Opting out）此同意，系統會彈出警告，指出健康數據將被刪除，且未來無法同步至三星帳戶。這不僅意味著數據無法跨設備同步，還可能產生更深層的影響。三星官方聲明，若用戶撤回同意，數據將無法與三星帳戶同步，且除非法律規定必須保留，否則數據將會被清除。此變動發生在三星健康 App 推出更多 AI 功能，並在 Galaxy Watch 9 等新產品發布前夕，實質上提高了用戶同意數據用於商業 AI 訓練的門檻。",
    tags: ["Samsung Health", "AI 訓練", "數據隱私", "數據同意", "健康數據", "數據同步"],
    title_en: "After Redesign, Samsung Health App Users Who Refuse to Consent to Data for AI Training Face Data Sync Failure or Deletion",
    summary_en: "As the Samsung Health App undergoes a redesign and integrates more AI functionalities, users are required to make a choice in the consent agreement: whether or not to allow Samsung to use their health data for AI training, including manual review. This data scope is extensive, encompassing step counts, sleep patterns, medication records, physiological cycle tracking, and even complete medical records and test results. If the user chooses to opt out of this consent, the system issues a warning stating that the health data will be deleted and will no longer be able to sync to the Samsung account. This not only means the data cannot be cross-device synced but may also have deeper implications. Samsung officially stated that if a user withdraws consent, the data cannot sync with the Samsung account, and the data will be cleared unless legally required to be retained. This change occurs as Samsung Health introduces more AI features and just before the release of new products like the Galaxy Watch 9, effectively raising the hurdle for users to consent to their data being used for commercial AI training.",
    tags_en: ["Samsung Health", "AI Training", "Data Privacy", "Data Consent", "Health Data", "Data Sync"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/samsung-health-ai-training-data-consent", lang: "EN" }
    ]
  },
  {
    id: "20260713-077",
    trackers: ["os"],
    category: "重點關注",
    title: "OnePlus 品牌傳聞將退出美國與歐洲市場，品牌戰略面臨重大轉型",
    summary: "根據報導，OnePlus 品牌預計將在美國和歐洲市場正式退出，相關宣布據稱將在本週內進行。此舉被認為是品牌長期戰略調整的結果，並與 Oppo 品牌集團的整體策略轉型有關。雖然原文未提供具體原因，但報導指出，OnePlus 正在經歷品牌定位的重大變化，甚至其作業系統 OxygenOS 也面臨被淘汰的風險。目前，OnePlus 已開始在部分地區引導用戶轉向購買 Oppo 產品。報導強調，印度和中國市場似乎不受此影響。這代表 OnePlus 品牌將經歷一次重大的市場收縮與品牌重塑，消費者應留意官方發布的最新資訊，以了解其產品線和支援服務的後續安排。",
    tags: ["OnePlus", "Oppo", "品牌戰略", "市場退出", "OxygenOS", "消費電子"],
    title_en: "Rumors suggest OnePlus brand may exit US and European markets, facing major brand strategy transformation",
    summary_en: "According to reports, the OnePlus brand is expected to officially exit the US and European markets, with related announcements reportedly coming this week. This move is considered the result of a long-term strategic adjustment for the brand and is linked to the overall strategic transformation of the Oppo brand group. Although the original text does not provide specific reasons, the reports indicate that OnePlus is undergoing a major change in brand positioning, and even its operating system, OxygenOS, faces the risk of being phased out. Currently, OnePlus has begun guiding users in certain regions to purchase Oppo products. The reports emphasize that the Indian and Chinese markets appear unaffected by this. This suggests that the OnePlus brand will undergo a significant market contraction and brand restructuring, and consumers should pay attention to official announcements for the latest information regarding its product line and support services arrangements.",
    tags_en: ["OnePlus", "Oppo", "Brand Strategy", "Market Exit", "OxygenOS", "Consumer Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/oneplus-us-europe-shut-down-report", lang: "EN" }
    ]
  },
  {
    id: "20260713-078",
    trackers: ["os"],
    category: "重點關注",
    title: "Omdia報告：iPhone 17系列帶動蘋果第二季出貨量創紀錄，但市場預測仍面臨記憶體危機衝擊",
    summary: "本報導綜合了Counterpoint Research與Omdia兩家市場分析機構的初步數據，指出蘋果（Apple）在2026年第二季度（Q2）的iPhone出貨量表現創下歷史新高。儘管市場整體面臨記憶體危機，導致出貨量年減約4%，但蘋果憑藉iPhone 17系列，在傳統上需求較弱的第二季仍成功取得20%的市場佔有率，表現強勁。Omdia預測，未來兩個季度將面臨最劇烈的出貨量下降，這主要是季節性需求高峰與記憶體晶片供應受限共同造成的。分析師提醒，雖然蘋果在第二季提高了多數產品的定價，但未來iPhone是否會受到類似價格上漲的影響，仍是市場關注的焦點。",
    tags: ["Apple", "Omdia", "Counterpoint Research", "iPhone 17", "市場佔有率", "記憶體危機", "智慧型手機"],
    title_en: "Omdia Report: iPhone 17 Series Drives Record Apple Q2 Shipments, But Market Forecast Still Faces Memory Crisis Impact",
    summary_en: "This report synthesizes preliminary data from two market analysis firms, Counterpoint Research and Omdia, indicating that Apple achieved record iPhone shipment volumes in the second quarter (Q2) of 2026. Although the overall market faces a memory crisis, leading to an estimated annual shipment decline of 4%, Apple performed strongly, securing a 20% market share in the second quarter—a period traditionally weaker in demand—thanks to the iPhone 17 series. Omdia predicts that the next two quarters will face the most severe shipment decline, primarily due to the combination of seasonal demand troughs and constrained memory chip supply. Analysts note that while Apple increased the pricing of most products in Q2, whether future iPhones will be affected by similar price increases remains a key focus for the market.",
    tags_en: ["Apple", "Omdia", "Counterpoint Research", "iPhone 17", "Market Share", "Memory Crisis", "Smartphone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/second-report-says-apple-posted-its-strongest-ever-q2-for-iphone-shipments-amid-market-downturn", lang: "EN" }
    ]
  },
  {
    id: "20260713-079",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta與Apple就歐盟強制互通性功能爭議：討論跨設備配對同步機制",
    summary: "隨著《數位市場法案》（DMA）的實施，Apple被迫開放部分功能，以實現第三方設備與iPhone/iPad的互通性。Meta公司提出一個具體需求：希望其Meta設備（如Ray-Ban Meta眼鏡和Quest頭戴裝置）能夠像AirPods一樣，在用戶的單一設備配對後，自動同步並在該用戶的其他Apple設備上可用。Meta指出，目前用戶體驗不佳，每次配對都需要額外的系統提示。Apple最初的回應是提出一個新的API，允許第三方應用同步配對資訊。Meta雖然承認該方案提供了核心功能，但反對Apple將API存取權綁定於AccessorySetupKit，擔心這會破壞其在歐盟以外的現有配對體驗。儘管Meta提出擔憂，Apple仍堅持其方案，並指出其他開發者在歐盟以外已成功採用該套件。此爭議核心在於如何平衡歐盟法規要求的互通性與設備生態系統的整合體驗。",
    tags: ["Meta", "Apple", "DMA", "互通性", "API", "AccessorySetupKit", "跨平台"],
    title_en: "Meta and Apple Dispute Over EU Mandatory Interoperability Features: Discussing Cross-Device Pairing Synchronization Mechanism",
    summary_en: "With the implementation of the Digital Markets Act (DMA), Apple has been compelled to open up certain functionalities to ensure interoperability with third-party devices. Meta has put forward a specific requirement: it wants its Meta devices (such as Ray-Ban Meta glasses and Quest headsets) to automatically synchronize and be available on the user's other Apple devices after a single device pairing, similar to AirPods. Meta pointed out that the current user experience is poor, requiring additional system prompts for every pairing. Apple initially responded by proposing a new API that would allow third-party applications to synchronize pairing information. Although Meta acknowledged that this solution provides core functionality, it opposes Apple tying the API access rights to the AccessorySetupKit, fearing this will disrupt its existing pairing experience outside the EU. Despite Meta's concerns, Apple insists on its solution, pointing out that other developers have successfully adopted this kit outside the EU. The core of this dispute lies in how to balance the interoperability required by EU regulations with the integrated experience of the device ecosystem.",
    tags_en: ["Meta", "Apple", "DMA", "Interoperability", "API", "AccessorySetupKit", "Cross-platform"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/meta-challenges-apples-plan-for-eu-mandated-third-party-device-interoperability", lang: "EN" }
    ]
  },
  {
    id: "20260713-080",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果對 OpenAI 提告竊取商業機密：指控大量前員工帶走核心知識",
    summary: "蘋果公司（Apple）已對 OpenAI 提起訴訟，指控其竊取商業機密。訴訟文件指出，OpenAI 雇用了超過 400 名前蘋果員工，這些員工可能掌握蘋果的機密和專有資訊。蘋果主張，OpenAI 不應利用這些前員工帶來的知識，來推動其硬體開發或從蘋果現任員工和合作夥伴處獲取更多機密資訊。報導進一步透露，許多從蘋果工程部門（特別是前任 Apple Vision Pro 和智慧眼鏡專案負責人）離職的員工加入了 OpenAI，其中 OpenAI 的硬體主管 Tang Tan 曾是蘋果的設計主管。此次訴訟的結果尚待觀察，但預計將是科技界關注的重大事件。",
    tags: ["Apple", "OpenAI", "商業機密", "員工流動", "法律訴訟", "硬體開發"],
    title_en: "Apple Sues OpenAI for Alleged Theft of Trade Secrets: Accusing Company of Taking Core Knowledge from Numerous Former Employees",
    summary_en: "Apple has filed a lawsuit against OpenAI, accusing the company of stealing trade secrets. The lawsuit documents allege that OpenAI hired over 400 former Apple employees, who may possess confidential and proprietary information belonging to Apple. Apple claims that OpenAI should not utilize the knowledge brought by these former employees to advance its hardware development or to acquire further confidential information from current Apple employees and partners. Reports further reveal that many employees who left Apple's engineering department (especially former leads for Apple Vision Pro and smart glasses projects) joined OpenAI, and OpenAI's hardware lead, Tang Tan, was previously a design lead at Apple. The outcome of this lawsuit remains to be seen, but it is expected to be a major event of interest to the tech industry.",
    tags_en: ["Apple", "OpenAI", "Trade Secrets", "Employee Mobility", "Legal Litigation", "Hardware Development"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-lawsuit-reveals-how-many-former-employees-now-work-at-openai", lang: "EN" }
    ]
  },
  {
    id: "20260713-081",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 儘管面臨專有技術竊取訴訟，仍計畫於今年發表產品並於 2027 年發布",
    summary: "OpenAI 近期面臨第二次專有技術竊取訴訟，涉及其硬體野心。儘管如此，根據彭博社的報導，OpenAI 仍計畫在今年推出其首款產品，並預計於 2027 年正式發布。這顯示其產品時程規劃似乎不受法律訴訟的重大影響。文章未提供具體技術細節或受影響產品的名稱，僅提及其硬體開發的進度與時間表。建議關注 OpenAI 未來產品的市場發布時程與法律風險的最新動態。",
    tags: ["OpenAI", "硬體", "專有技術", "法律訴訟", "AI 產品時程"],
    title_en: "OpenAI Plans Product Launch This Year and Release in 2027 Despite Facing Proprietary Technology Theft Lawsuits",
    summary_en: "OpenAI recently faced a second proprietary technology theft lawsuit concerning its hardware ambitions. Nevertheless, according to Bloomberg, OpenAI still plans to launch its first product this year, with a formal release anticipated in 2027. This suggests that its product timeline appears largely unaffected by the legal litigation. The article does not provide specific technical details or names of affected products, only mentioning the progress and timeline of its hardware development. It is recommended to monitor the latest developments regarding OpenAI's future product market launch schedule and legal risks.",
    tags_en: ["OpenAI", "Hardware", "Proprietary Technology", "Legal Litigation", "AI Product Timeline"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/openai-hardware-timeline-reportedly-unchanged-after-apple-trade-secret-theft-lawsuit", lang: "EN" }
    ]
  },
  {
    id: "20260713-082",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果收購可觀察性平台 SigScalr，整合開源工具支援開發者生態系",
    summary: "蘋果公司（Apple）透過子公司，宣布收購了開發可觀察性平台 SigLens 的新創公司 SigScalr 的部分資產，並聘用部分員工。SigLens 是一個開源的平台，旨在幫助開發者收集、搜尋和分析應用程式及基礎設施產生的日誌（logs）、指標（metrics）和追蹤（traces）。它被定位為相較於 Splunk、Datadog 和 Elasticsearch 等服務的更高效替代方案。此次收購符合歐盟《數位市場法案》（DMA）的規定。雖然文章未提及具體的技術漏洞或安全風險，但這項收購顯示蘋果正積極將開源的開發工具鏈整合到其生態系中。開發者社群已將 SigLens 的主 GitHub 倉庫封存為唯讀模式，並將授權變更為更寬鬆的 Apache 2.0 許可，鼓勵社群進行 Fork 或二次開發，顯示其對開源生態的重視。",
    tags: ["Apple", "SigScalr", "SigLens", "可觀察性平台", "Observability", "開源", "Apache 2.0"],
    title_en: "Apple Acquires Observability Platform SigScalr, Integrating Open-Source Tools to Support Developer Ecosystem",
    summary_en: "Apple announced through a subsidiary the acquisition of certain assets and the employment of staff from SigScalr, a startup that developed the observability platform SigLens. SigLens is an open-source platform designed to help developers collect, search, and analyze logs, metrics, and traces generated by applications and infrastructure. It is positioned as a more efficient alternative to services like Splunk, Datadog, and Elasticsearch. This acquisition aligns with the regulations of the EU's Digital Markets Act (DMA). Although the article does not mention specific technical vulnerabilities or security risks, the acquisition demonstrates Apple's active effort to integrate open-source development tools into its ecosystem. The developer community has placed the main SigLens GitHub repository in read-only mode and changed the license to the more permissive Apache 2.0, encouraging the community to Fork or develop secondary applications, highlighting its commitment to the open-source ecosystem.",
    tags_en: ["Apple", "SigScalr", "SigLens", "Observability Platform", "Observability", "Open Source", "Apache 2.0"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/apple-acquires-observability-startup-sigscalr", lang: "EN" }
    ]
  },
  {
    id: "20260713-083",
    trackers: ["os"],
    category: "重點關注",
    title: "Epic Games反對蘋果要求暫停App Store佣金審判，主張應立即進行外部購買機制評估",
    summary: "本案涉及App Store的佣金爭議，核心爭點是蘋果公司（Apple）是否能對App Store外部購買的交易收取佣金。此前，法官曾根據2021年的禁令，裁定蘋果違反了允許開發者引導用戶至App Store外的支付選項的規定，並裁定蘋果處於民事藐視（civil contempt）狀態。蘋果公司目前正要求暫停低階法院的審判，理由是最高法院尚未對蘋果是否被認定違反禁令的爭議做出裁決。然而，Epic Games強烈反對此要求，指出這是蘋果第三次拖延審判的企圖。Epic主張，無論最高法院如何裁決，低階法院仍必須就外部購買的適當佣金進行審理，因此應立即推進審判程序，以促進市場競爭。如果法院駁回蘋果的暫停請求，蘋果將必須在判決後24小時內提交其外部連結的佣金提案。",
    tags: ["Apple", "Epic Games", "App Store", "佣金爭議", "民事藐視", "法律訴訟"],
    title_en: "Epic Games Opposes Apple's Request to Suspend App Store Commission Trial, Argues for Immediate External Purchase Mechanism Assessment",
    summary_en: "This case involves the App Store commission dispute, with the core issue being whether Apple can charge a commission on transactions made through external purchases outside the App Store. Previously, a judge ruled that Apple violated regulations allowing developers to guide users to payment options outside the App Store, and ruled that Apple was in civil contempt. Apple is currently requesting a suspension of the lower court trial, citing that the Supreme Court has not yet ruled on the dispute of whether Apple violated the injunction. However, Epic Games strongly opposes this request, pointing out that this is Apple's third attempt to delay the trial. Epic argues that regardless of the Supreme Court's ruling, the lower court must still assess an appropriate commission for external purchases, and therefore the trial proceedings should be immediately advanced to promote market competition. If the court denies Apple's suspension request, Apple will be required to submit its commission proposal for external links within 24 hours of the judgment.",
    tags_en: ["Apple", "Epic Games", "App Store", "Commission Dispute", "Civil Contempt", "Legal Litigation"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/epic-games-fights-apples-request-to-pause-app-store-commission-proceedings", lang: "EN" }
    ]
  },
  {
    id: "20260713-084",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果股價反彈 15%，投資人看好其 AI 策略與價格上漲動能",
    summary: "本文報導蘋果（Apple）的股票走勢。在 WWDC 2026 大會後，蘋果股價曾因 AI 相關宣布的表現未達預期而下跌。然而，市場情緒隨後轉變，投資人似乎開始看好蘋果在 AI 方面的謹慎策略，並對其未來可能實施的價格上漲動能給予正面評價。自六月低點以來，蘋果的股價已反彈了 15%。這顯示市場正在重新評估蘋果的價值，特別是其在 AI 應用和產品定價策略上的穩定性與增長潛力。本報導為市場分析，未提及任何技術漏洞或修補建議。",
    tags: ["Apple", "AAPL", "WWDC", "AI", "股價分析", "市場趨勢"],
    title_en: "Apple Stock Rebounds 15%; Investors Optimistic on AI Strategy and Price Hike Momentum",
    summary_en: "This article reports on the stock performance of Apple. Following the WWDC 2026 conference, Apple's stock price initially dropped due to announcements related to AI that failed to meet expectations. However, market sentiment subsequently shifted, with investors appearing to favor Apple's cautious approach to AI and giving positive evaluations to the potential for future price increases. Since its low point in June, Apple's stock has rebounded by 15%. This indicates that the market is reassessing Apple's value, particularly regarding its stability and growth potential in AI applications and product pricing strategies. This report is for market analysis and does not mention any technical vulnerabilities or patch recommendations.",
    tags_en: ["Apple", "AAPL", "WWDC", "AI", "Stock Analysis", "Market Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/aapl-stock-rallies-15-as-investors-favor-ai-caution-and-welcome-price-increases", lang: "EN" }
    ]
  },
  {
    id: "20260713-085",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 廣告業務引發爭議：前高管信件與新功能整合，引發用戶對商業模式的質疑",
    summary: "本文討論了 Apple 公司在廣告業務上的商業模式爭議。文章指出，早在 2014 年，前高管 Tim Cook 就曾發出信件，將 Apple 與以用戶為產品的廣告資助服務區分開來。然而，隨著 Apple Maps 等應用程式開始引入廣告功能，該信件已被從公司網站移除。資安觀察家 John Gruber 認為，公司應停止廣告業務，並建議新任 CEO John Ternus 應考慮此建議。這篇文章主要聚焦於 Apple 的商業策略轉變，而非技術漏洞或安全事件，提醒用戶關注產品的商業模式變化對用戶體驗和隱私的潛在影響。",
    tags: ["Apple", "廣告商業模式", "Tim Cook", "John Gruber", "Apple Maps", "用戶隱私"],
    title_en: "Controversy over Apple's Advertising Business: Former Executive Letter and New Features Integration Raise User Concerns about Business Model",
    summary_en: "This article discusses the commercial model controversy surrounding Apple's advertising business. It points out that as early as 2014, former executive Tim Cook issued a letter distinguishing Apple from ad-supported services that use users as products. However, as applications like Apple Maps began introducing advertising features, this letter was removed from the company website. Security observer John Gruber believes the company should cease its advertising operations and suggests that the new CEO, John Ternus, should consider this advice. This article primarily focuses on Apple's shift in business strategy, rather than technical vulnerabilities or security incidents, reminding users to pay attention to the potential impact of product business model changes on user experience and privacy.",
    tags_en: ["Apple", "Advertising Business Model", "Tim Cook", "John Gruber", "Apple Maps", "User Privacy"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/should-apple-get-out-of-the-ad-business-altogether-poll", lang: "EN" }
    ]
  },
  {
    id: "20260713-086",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟擬立法限制未滿 13 歲青少年使用社群媒體，並規劃分階段逐步開放",
    summary: "歐盟正提出立法，旨在禁止未滿 13 歲的兒童使用社群媒體應用程式，並規劃針對青少年群體「分階段、逐步的存取權」。目前許多社群媒體平台雖然宣稱最低年齡為 13 歲，但實際執行上存在漏洞。此提案將賦予法律效力，並為年齡介於 13 至 16 歲的青少年設置限制。歐盟委員會主席烏爾蘇拉·馮德萊恩強調，重點不在於兒童是否能接觸社群媒體，而在於社群媒體是否能接觸到我們的孩子。此外，歐盟已警告 Meta，指出 Instagram 和 Facebook 資訊流的「無限滾動」機制可能違反歐盟法律。若此提案通過，將加入全球多國（如澳洲、英國、法國、德國等）限制社群媒體年齡的行列，反映了全球對青少年心理健康和數位保護的日益關注。",
    tags: ["歐盟", "社群媒體", "青少年保護", "立法限制", "Meta", "無限滾動"],
    title_en: "EU Proposes Legislation to Restrict Social Media Use for Minors Under 13, Planning Phased Gradual Access",
    summary_en: "The EU is proposing legislation aimed at banning children under 13 from using social media applications, and planning for 'phased, gradual access' for adolescent groups. Currently, many social media platforms claim a minimum age of 13, but loopholes exist in actual enforcement. This proposal would give legal force and establish restrictions for adolescents aged 13 to 16. European Commission President Ursula von der Leyen emphasized that the focus is not on whether children can access social media, but whether social media can access our children. Furthermore, the EU has warned Meta, pointing out that the 'infinite scroll' mechanism of Instagram and Facebook feeds may violate EU law. If this proposal passes, it will join a global cohort of countries (such as Australia, the UK, France, and Germany) restricting social media ages, reflecting growing global concern over adolescent mental health and digital protection.",
    tags_en: ["EU", "Social Media", "Adolescent Protection", "Legislative Restriction", "Meta", "Infinite Scroll"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/eu-plans-to-ban-under-13s-from-social-media-with-phased-access-afterwards", lang: "EN" }
    ]
  },
  {
    id: "20260713-087",
    trackers: ["os"],
    category: "重點關注",
    title: "加州推出新電動車補貼計畫：首次購車居民可領取 $3,500 補助",
    summary: "本文報導加州州長 Gavin Newsom 簽署了一項新的電動車（EV）補貼法案，旨在刺激本州居民購買電動車。該計畫名為 MyFirstEV Zero Emissions Vehicles instant rebate program。根據規定，加州居民首次購買的電動車，若車輛價格低於 $50,000，可獲得 $3,500 的即時補貼。此外，對於價格低於 $25,000 的二手電動車，也能獲得 $1,750 的補貼。此舉旨在應對美國聯邦層級（特別是 IRS）取消清潔車輛稅收抵免後，美國電動車市場銷售放緩的趨勢，鼓勵加州成為清潔能源的領導者。",
    tags: ["加州", "電動車", "EV", "補貼", "新能源車", "MyFirstEV"],
    title_en: "California Launches New EV Subsidy Program: First-Time Buyers Eligible for $3,500 Rebate",
    summary_en: "This article reports that California Governor Gavin Newsom signed a new electric vehicle (EV) subsidy bill aimed at encouraging residents to purchase EVs. The program is named the MyFirstEV Zero Emissions Vehicles instant rebate program. According to the regulations, California residents who purchase a new EV priced under $50,000 are eligible for a $3,500 instant rebate. Furthermore, a $1,750 rebate is available for used EVs priced under $25,000. This initiative aims to address the slowdown in the US EV market sales following the cancellation of clean vehicle tax credits at the federal level (particularly by the IRS), and encourages California to become a leader in clean energy.",
    tags_en: ["California", "EV", "Subsidy", "New Energy Vehicle", "MyFirstEV"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/cars/2026/07/first-time-ev-buyers-in-california-can-now-claim-a-new-rebate", lang: "EN" }
    ]
  },
  {
    id: "20260713-088",
    trackers: ["os"],
    category: "重點關注",
    title: "記憶體成本上漲導致智慧型手機出貨量低點，三星與蘋果表現相對穩健",
    summary: "市場報告指出，由於DRAM和NAND等記憶體晶片價格持續上漲，導致智慧型手機出貨量大幅下滑，創下自2013年以來第二季度的低點。分析師認為，製造商將更多資源投入AI運算領域，減少了用於消費性設備（如手機和PC）的組件供應。特別是針對價格在500美元或以下的入門級手機，記憶體成本佔比極高，使得這些產品的價格上漲壓力更大。在主要手機製造商中，三星和蘋果的出貨量表現相對穩健，而Oppo、Vivo和Xiaomi等品牌則出現下降。蘋果上個季度出貨量成長了3%，成功維持了當代機型的價格穩定性，但未來發布新機型後，價格穩定性可能受到挑戰。",
    tags: ["智慧型手機", "記憶體成本", "DRAM", "NAND", "三星", "蘋果", "供應鏈"],
    title_en: "Rising Memory Costs Cause Smartphone Shipments to Hit Low Point; Samsung and Apple Show Relatively Stable Performance",
    summary_en: "Market reports indicate that continuous price increases for memory chips such as DRAM and NAND have led to a significant decline in smartphone shipments, reaching the second-quarter low since 2013. Analysts believe that manufacturers are allocating more resources to the AI computing domain, reducing component supply for consumer electronics (such as phones and PCs). Specifically, for entry-level phones priced at $500 or less, the memory cost proportion is extremely high, putting greater upward price pressure on these products. Among major phone manufacturers, Samsung and Apple showed relatively stable shipment performance, while brands like Oppo, Vivo, and Xiaomi experienced declines. Apple's shipments grew by 3% last quarter, successfully maintaining price stability for current models, but this stability may face challenges after the release of new models in the future.",
    tags_en: ["Smartphone", "Memory Cost", "DRAM", "NAND", "Samsung", "Apple", "Supply Chain"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/07/apple-and-samsung-benefit-as-memory-shortage-pushes-smartphone-shipments-to-historic-lows", lang: "EN" }
    ]
  },
  {
    id: "20260713-089",
    trackers: ["os"],
    category: "重點關注",
    title: "防禦方採用「上下文轟炸」：利用提示注入機制阻斷 LLM 攻擊行為",
    summary: "隨著提示注入（Prompt Injection）成為攻擊者引導大型語言模型（LLM）執行惡意行為的常用手段，防禦方也開始將其用於防御。研究人員 Tracebit 發現了一種名為「上下文轟炸」（Context Bombing）的技術。該方法的核心概念是將特定的、禁止的指令（如要求提供製造生物武器的步驟）與密鑰、密碼等敏感資訊一同植入 LLM 的上下文。當 LLM 遇到這些被禁止的指令時，會觸發其內建的拒絕機制（refusal mechanism），從而中止執行原有的惡意指令。在模擬的 AWS 環境測試中，使用上下文轟炸的結果顯示，攻擊代理從原本 57% 的機率取得完整帳戶管理權，大幅下降至 5%；而完全的系統入侵機率也從 36% 降至 1%。這項技術展示了極高的防禦潛力，特別適用於保護儲存在雲端環境中的敏感資料。",
    tags: ["大型語言模型", "LLM", "提示注入", "Prompt Injection", "上下文轟炸", "Context Bombing", "資安防禦", "AWS"],
    title_en: "Defenders Adopt 'Context Bombing': Using Prompt Injection Mechanism to Block LLM Attack Behavior",
    summary_en: "As Prompt Injection becomes a common method for attackers to guide Large Language Models (LLMs) into executing malicious actions, defenders are also beginning to utilize it for defense. Researchers at Tracebit discovered a technique called 'Context Bombing.' The core concept of this method is to embed specific, prohibited instructions (such as requesting steps to manufacture biological weapons) alongside sensitive information like keys and passwords within the LLM's context. When the LLM encounters these prohibited instructions, it triggers its built-in refusal mechanism, thereby aborting the execution of the original malicious command. In simulated AWS environment tests, the results of using Context Bombing showed that the attack agent's probability of obtaining full account administration rights dropped significantly from 57% to 5%; and the probability of complete system compromise dropped from 36% to 1%. This technique demonstrates extremely high defensive potential, particularly for protecting sensitive data stored in cloud environments.",
    tags_en: ["Large Language Models", "LLM", "Prompt Injection", "Prompt Injection", "Context Bombing", "Context Bombing", "Cybersecurity Defense", "AWS"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/07/now-defenders-are-embracing-the-prompt-injection-too", lang: "EN" }
    ]
  },
  {
    id: "20260713-090",
    trackers: ["os"],
    category: "重點關注",
    title: "AWS Graviton5 效能評測：與 AMD EPYC Turin、Intel Xeon Granite Rapids 的伺服器性能比較",
    summary: "本文針對 AWS M9g 系列（搭載 Graviton5 CPU）進行了效能基準測試，將其與搭載 AMD EPYC Turin 和 Intel Xeon Granite Rapids 的 EC2 實例進行了比較。Graviton5 採用 Arm Neoverse-V3 核心，並搭配 DDR5-8800 記憶體，相較於前代 Graviton4，展現了顯著的世代提升。測試使用了 Ubuntu 26.04 LTS 作業系統、Linux 7.0 核心和 GCC 15.2 編譯器。在硬體配置上，AMD EPYC M8a 實例使用 DDR5-6400 記憶體，Intel Xeon M8i 實例使用 DDR5-7200 記憶體。雖然 M8i 實例的時價單價格低於 M9g，但 Graviton5 在效能上展現出強勁的競爭力。這份評測對於規劃下一代雲端伺服器架構、評估 Arm 架構在 x86 伺服器市場的潛力具有重要的參考價值。",
    tags: ["AWS", "Graviton5", "Arm 架構", "AMD EPYC", "Intel Xeon", "伺服器性能"],
    title_en: "AWS Graviton5 Performance Evaluation: Server Performance Comparison with AMD EPYC Turin and Intel Xeon Granite Rapids",
    summary_en: "This article conducted performance benchmarking for the AWS M9g series (equipped with Graviton5 CPU), comparing it with EC2 instances running AMD EPYC Turin and Intel Xeon Granite Rapids. Graviton5 utilizes the Arm Neoverse-V3 core and is paired with DDR5-8800 memory, demonstrating a significant generational improvement over the previous Graviton4. The tests used the Ubuntu 26.04 LTS operating system, Linux 7.0 kernel, and GCC 15.2 compiler. Regarding hardware configuration, the AMD EPYC M8a instance used DDR5-6400 memory, and the Intel Xeon M8i instance used DDR5-7200 memory. Although the list price of the M8i instance is lower than M9g, Graviton5 exhibits strong competitive performance. This evaluation holds significant reference value for planning next-generation cloud server architectures and assessing the potential of the Arm architecture in the x86 server market.",
    tags_en: ["AWS", "Graviton5", "Arm architecture", "AMD EPYC", "Intel Xeon", "Server performance"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/graviton5-epyc-xeon", lang: "EN" }
    ]
  },
  {
    id: "20260713-091",
    trackers: ["os"],
    category: "重點關注",
    title: "Cloud Hypervisor 53.0 發布：新增外部卸載快照/還原服務，強化虛擬機管理功能",
    summary: "Cloud Hypervisor 53.0 版本已發布，這是一個專注於雲端工作負載和現代安全需求的開源 Rust 語言虛擬機監控器（VMM）。本次更新的主要亮點是引入了「外部卸載快照/還原服務」（offloaded snapshot/restore daemon）。此新服務允許快照和還原的處理由外部程序執行，與 Cloud Hypervisor 內建的快照/還原功能保持一致性。Meta 的工程師參與了此新服務的開發，顯示該專案在 Meta 內部的使用或規劃正在增加。此外，Cloud Hypervisor 53.0 還支援使用雙向 TLS（mutual TLS）進行即時遷移資料加密，並支援 VFIO migration v2 進行同一主機的快照/還原。同時，該版本也新增了 Windows 客體支援，用於在 KVM 後端執行嵌套 Hyper-V，並增加了 virtio-rtc 設備支援等功能。",
    tags: ["Cloud Hypervisor", "VMM", "Rust", "Meta", "快照/還原", "虛擬化"],
    title_en: "Cloud Hypervisor 53.0 Released: Adds External Offloaded Snapshot/Restore Service, Enhancing VM Management Capabilities",
    summary_en: "Cloud Hypervisor 53.0 has been released, an open-source Rust language Virtual Machine Monitor (VMM) focused on cloud workloads and modern security requirements. The main highlight of this update is the introduction of an 'external offloaded snapshot/restore daemon.' This new service allows snapshot and restore operations to be executed by external processes, maintaining consistency with Cloud Hypervisor's built-in snapshot/restore functionality. Meta engineers participated in the development of this new service, indicating increasing internal use or planning for the project at Meta. Furthermore, Cloud Hypervisor 53.0 now supports encrypting live migration data using mutual TLS and supports VFIO migration v2 for snapshot/restore on the same host. Concurrently, this version also adds Windows guest support for running nested Hyper-V on a KVM backend, and includes features such as virtio-rtc device support.",
    tags_en: ["Cloud Hypervisor", "VMM", "Rust", "Meta", "Snapshot/Restore", "Virtualization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Cloud-Hypervisor-53", lang: "EN" }
    ]
  },
  {
    id: "20260713-092",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟高層警告AI前沿實驗室：嚴防知識產權外洩，強調數據安全與商業機密保護",
    summary: "本文報導了微軟高層（Satya Nadella）針對前沿AI實驗室發出警告，要求相關公司必須高度警惕其知識產權（IP）的安全問題。這項警告的重點在於，在AI領域的快速發展和商業合作背景下，數據和專有技術的保護至關重要。雖然原文未提供具體的CVE或技術細節，但其核心實務影響指向了AI模型訓練數據、專有算法和商業機密可能面臨的洩露風險。文章強調，AI的商業化進程使得IP保護成為企業生存的關鍵要素，建議相關公司應建立更嚴密的內部控制機制和數據防護措施，以應對潛在的數據外洩和競爭風險。",
    tags: ["Microsoft", "AI", "知識產權", "數據安全", "AI模型", "企業情報"],
    title_en: "Microsoft Executives Warn AI Frontier Labs: Strictly Prevent Intellectual Property Leakage, Emphasize Data Security and Protection of Commercial Secrets",
    summary_en: "This article reports on a warning issued by Microsoft executives (Satya Nadella) to frontier AI laboratories, requiring relevant companies to be highly vigilant regarding the security of their intellectual property (IP). The focus of this warning is that, against the backdrop of rapid development and commercial collaboration in the AI domain, the protection of data and proprietary technology is crucial. Although the original text does not provide specific CVE or technical details, its core practical implication points to the leakage risks that AI model training data, proprietary algorithms, and commercial secrets may face. The article emphasizes that the commercialization process of AI makes IP protection a critical element for corporate survival, and suggests that relevant companies should establish stricter internal control mechanisms and data protection measures to cope with potential data leakage and competitive risks.",
    tags_en: ["Microsoft", "AI", "Intellectual Property", "Data Security", "AI Model", "Corporate Intelligence"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/13/microsoft-chief-turns-hostile-on-frontier-ai-labs-warns-companies-to-guard-their-ip/5270628", lang: "EN" }
    ]
  },
  {
    id: "20260713-093",
    trackers: ["os"],
    category: "重點關注",
    title: "德國企業因網路犯罪導致生產線停擺，宣布申請破產",
    summary: "本文報導了一家德國企業因遭受網路犯罪的攻擊，導致其生產線被迫停擺了長達六週。雖然文章未提供具體的CVE或技術細節，但事件的實務影響極為嚴重，直接造成了企業的營運中斷和財務危機，最終導致該公司宣布申請破產。這類事件凸顯了企業數位基礎設施的脆弱性，即使是看似穩定的生產環境，也可能因為網路攻擊而遭受致命的打擊。對於所有依賴數位系統的企業而言，必須將網路安全防護提升到最高優先級，應建立完善的備援機制、實施零信任架構，並定期進行紅隊演練，以確保核心業務的連續性。企業應特別關注供應鏈安全和OT（Operational Technology）系統的保護，以應對日益複雜且具破壞性的網路攻擊。",
    tags: ["德國企業", "網路犯罪", "供應鏈安全", "OT系統", "企業風險", "破產"],
    title_en: "German Company Halts Production Line Due to Cybercrime, Files for Bankruptcy",
    summary_en: "This article reports that a German company was forced to halt its production line for a period of six weeks after suffering a cybercrime attack. Although the article does not provide specific CVEs or technical details, the practical impact of the incident was extremely severe, directly causing operational disruption and a financial crisis for the company, ultimately leading to its filing for bankruptcy. Such incidents highlight the vulnerability of corporate digital infrastructure; even seemingly stable production environments can suffer fatal blows from cyberattacks. For all companies relying on digital systems, elevating cybersecurity protection to the highest priority is essential. They must establish comprehensive backup mechanisms, implement zero-trust architecture, and conduct regular red team exercises to ensure business continuity. Companies should pay special attention to supply chain security and the protection of Operational Technology (OT) systems to cope with increasingly complex and destructive cyberattacks.",
    tags_en: ["German Company", "Cybercrime", "Supply Chain Security", "OT Systems", "Enterprise Risk", "Bankruptcy"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/07/13/german-firm-files-for-insolvency-blames-cybercrims-who-shut-down-production-for-6-weeks/5270524", lang: "EN" }
    ]
  },
  {
    id: "20260713-094",
    trackers: ["os"],
    category: "重點關注",
    title: "英國與歐盟正式指控俄羅斯對波蘭發動能源網路攻擊",
    summary: "英國和歐盟已正式指控俄羅斯對波蘭發動了能源網路攻擊。這項指控的具體技術細節和攻擊向量未在原文中公開，但事件的實務影響極為重大，直接威脅到波蘭的關鍵基礎設施——能源供應系統。此次事件的發生，凸顯了地緣政治衝突背景下，國家級網路攻擊的嚴重性與複雜性。雖然原文未提供修補建議或修復措施，但根據相關安全指引，受影響的能源部門和關鍵基礎設施營運者應立即強化網路邊界防禦、實施網路分段（segmentation），並對所有外部連線的工業控制系統（ICS）進行嚴格的存取控制與監控，以防止類似的供應鏈或核心系統層面的入侵。",
    tags: ["俄羅斯", "波蘭", "能源網路攻擊", "地緣政治", "關鍵基礎設施", "網路安全"],
    title_en: "UK and EU Officially Accuse Russia of Launching Energy Network Attack on Poland",
    summary_en: "The UK and the EU have officially accused Russia of launching an energy network attack on Poland. While the specific technical details and attack vectors are not disclosed in the original text, the practical impact of the incident is extremely significant, directly threatening Poland's critical infrastructure—its energy supply system. The occurrence of this event highlights the severity and complexity of state-level cyber attacks within the context of geopolitical conflict. Although the original text does not provide remediation suggestions or recovery measures, according to relevant security guidelines, affected energy sectors and critical infrastructure operators should immediately strengthen network perimeter defenses, implement network segmentation, and enforce strict access control and monitoring on all industrial control systems (ICS) connected externally, to prevent similar supply chain or core system level intrusions.",
    tags_en: ["Russia", "Poland", "Energy Network Attack", "Geopolitics", "Critical Infrastructure", "Cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/13/uk-eu-officially-pin-poland-energy-cyberattack-on-russia/5270458", lang: "EN" }
    ]
  },
  {
    id: "20260713-095",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法生成標題，原文內容為 SpaceX 飛船發射測試資訊，非資安事件。",
    summary: "無法生成摘要。提供的文章內容為關於 SpaceX Starship 飛船的發射測試行程安排，與資安事件無關。因此無法提供受影響產品、技術細節或修補建議。",
    tags: ["SpaceX", "Starship", "飛船測試", "非資安事件"],
    title_en: "Cannot generate title, original content is about SpaceX spacecraft launch test information, not a cybersecurity incident.",
    summary_en: "Cannot generate summary. The provided article content is about the launch test schedule for the SpaceX Starship spacecraft, and is unrelated to cybersecurity incidents. Therefore, it is impossible to provide affected products, technical details, or patch recommendations.",
    tags_en: ["SpaceX", "Starship", "Spacecraft Test", "Non-Cybersecurity Event"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/07/13/lucky-13-spacex-aims-for-july-16-starship-flight-test/5270434", lang: "EN" }
    ]
  },
  {
    id: "20260713-096",
    trackers: ["os"],
    category: "重點關注",
    title: "世界盃後，攻擊者可能利用舊版資訊竊取工具攻擊阿根廷國家足球隊",
    summary: "這篇報導指出，在世界盃賽事結束後，攻擊者可能針對阿根廷國家足球隊進行攻擊。攻擊者利用的可能是一個已經存在一段時間的資訊竊取工具（infostealer）感染點。這類攻擊的實務影響是針對體育賽事相關的組織，可能導致敏感數據或戰術資訊的洩露。文章未提供具體的漏洞細節或CVSS分數，但提醒相關體育或大型組織應高度警惕，並檢查其系統是否有未知的、舊的資訊竊取工具感染痕跡，以預防潛在的網路威脅。",
    tags: ["阿根廷國家足球隊", "資訊竊取工具", "世界盃", "網路攻擊", "體育產業"],
    title_en: "After the World Cup, attackers may use old information-stealing tools to target the Argentine national football team",
    summary_en: "This report points out that after the World Cup concludes, attackers may target the Argentine national football team. The attackers might utilize an existing, long-standing infection point for an information-stealing tool (infostealer). The practical impact of such attacks is directed at organizations related to sporting events, potentially leading to the leakage of sensitive data or tactical information. The article does not provide specific vulnerability details or CVSS scores, but it reminds relevant sports or large organizations to be highly vigilant and to check their systems for signs of unknown, old infostealer infections, in order to prevent potential cyber threats.",
    tags_en: ["Argentine national football team", "information-stealing tool", "World Cup", "cyber attack", "sports industry"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/13/world-cup-grudge-attackers-may-have-scored-argentine-fa-access-via-year-old-infostealer-infection/5270302", lang: "EN" }
    ]
  },
  {
    id: "20260713-097",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Progress Orders 關閉神秘安全威脅的 ShareFile 伺服器",
    summary: "Progress 根據安全考量，已下令關閉其 ShareFile 伺服器，以應對一個未具體說明來源的神秘安全威脅。這項行動顯示了企業在面對未知或高風險的資安事件時，會採取極端的預防性措施。雖然原文未提供具體的漏洞名稱、CVSS 分數或受影響版本，但事件的發生強調了企業必須對其雲端和內部文件共享系統保持高度警惕。對於使用 ShareFile 服務的組織而言，建議應密切關注 Progress 官方的進一步安全公告，並考慮實施更嚴格的存取控制、多因素驗證（MFA）以及定期進行安全審計，以降低潛在的攻擊面。",
    tags: ["Progress", "ShareFile", "安全威脅", "雲端安全", "資安事件"],
    title_en: "Progress Orders Closure of ShareFile Server Amid Mysterious Security Threat",
    summary_en: "Out of security considerations, Progress has ordered the closure of its ShareFile server to address a mysterious security threat of unspecified origin. This action demonstrates the extreme preventive measures enterprises take when facing unknown or high-risk cybersecurity incidents. Although the original text does not provide a specific vulnerability name, CVSS score, or affected version, the incident highlights the necessity for enterprises to maintain high vigilance over their cloud and internal file-sharing systems. For organizations using ShareFile services, it is recommended that they closely monitor further security announcements from Progress and consider implementing stricter access controls, Multi-Factor Authentication (MFA), and regular security audits to reduce potential attack surface.",
    tags_en: ["Progress", "ShareFile", "Security Threat", "Cloud Security", "Cybersecurity Incident"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/13/progress-orders-emergency-sharefile-server-shutdown-over-mystery-security-threat/5270281", lang: "EN" }
    ]
  },
  {
    id: "20260713-098",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft 雲端戰略與安全挑戰：從授權收入到基礎設施保護的轉型趨勢",
    summary: "本文非傳統的資安漏洞報導，而是探討大型科技公司，特別是 Microsoft，在雲端基礎設施和商業模式轉型中所面臨的戰略挑戰。文章指出，隨著 AI 浪潮的推動，企業的計算資源需求正從單純的軟體授權（License）轉向對底層計算能力（Compute）的依賴。這使得「出租閒置的運算資源」成為任何大型基礎設施公司（Infra Company）的自然進化方向。從資安角度來看，這意味著攻擊面（Attack Surface）的擴大，攻擊者將更可能瞄準雲端基礎設施的邊緣或供應鏈，而非單純的應用層漏洞。對於開發者和資安人員而言，應關注跨平台、底層計算資源的保護，以及如何應對由 AI 帶來的新的安全風險和架構複雜性。",
    tags: ["Microsoft", "雲端基礎設施", "AI", "計算資源", "供應鏈", "戰略趨勢"],
    title_en: "Microsoft's Cloud Strategy and Security Challenges: Transitioning from Licensing Revenue to Infrastructure Protection",
    summary_en: "This article is not a traditional cybersecurity vulnerability report, but rather an exploration of the strategic challenges faced by large technology companies, particularly Microsoft, during their cloud infrastructure and business model transformation. The article points out that driven by the AI wave, enterprise computing resource demands are shifting from simple software licensing (License) to reliance on underlying compute capabilities (Compute). This makes 'renting idle computing resources' a natural evolution direction for any large infrastructure company (Infra Company). From a security perspective, this signifies an expansion of the attack surface, meaning attackers are more likely to target the edges or supply chain of cloud infrastructure, rather than merely application-layer vulnerabilities. For developers and security professionals, attention should be paid to the protection of cross-platform, underlying compute resources, and how to address new security risks and architectural complexities brought about by AI.",
    tags_en: ["Microsoft", "Cloud Infrastructure", "AI", "Compute Resources", "Supply Chain", "Strategic Trends"],
    sources: [
      { name: "The Register", url: "https://theregister.com/columnists/2026/07/13/microsoft-is-losing-the-battle-to-protect-license-lucre-it-better-get-used-to-the-feeling/5269709", lang: "EN" }
    ]
  },
  {
    id: "20260713-099",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple指控OpenAI竊取核心技術：法律戰聚焦AI時代的知識產權爭議",
    summary: "本文報導Apple提出法律指控，指控OpenAI竊取了其核心技術和商業秘密。雖然文章未提供具體的CVE或技術細節，但事件本質是圍繞AI時代的知識產權（IP）爭議。Apple的指控暗示OpenAI在開發其AI模型和相關產品時，可能使用了不當的競爭行為或竊取了專有技術。這類法律訴訟對於AI產業的發展模式和商業倫理具有重大影響。對於業界開發者和企業而言，這提醒了在利用大型語言模型（LLM）和AI技術時，必須嚴格注意數據來源的合法性、知識產權的歸屬，並建立完善的技術保護機制，以避免法律風險。目前文章未提供修補或預防措施，但建議企業應建立內部審核機制，確保AI模型訓練數據的合規性與來源透明度。",
    tags: ["Apple", "OpenAI", "知識產權", "AI", "法律訴訟", "技術秘密"],
    title_en: "Apple Accuses OpenAI of Stealing Core Technology: Legal Battle Focuses on Intellectual Property Disputes in the AI Era",
    summary_en: "This article reports on Apple's legal accusation, alleging that OpenAI stole its core technology and trade secrets. Although the article does not provide specific CVE or technical details, the essence of the event revolves around intellectual property (IP) disputes in the AI era. Apple's accusations suggest that OpenAI may have engaged in improper competitive practices or stolen proprietary technology while developing its AI models and related products. Such legal litigation has significant implications for the development models and business ethics of the AI industry. For industry developers and enterprises, this serves as a reminder that when utilizing Large Language Models (LLM) and AI technology, strict attention must be paid to the legality of data sources and the attribution of intellectual property, and comprehensive technical protection mechanisms must be established to avoid legal risks. While the article does not provide patches or preventive measures, it suggests that enterprises should establish internal audit mechanisms to ensure the compliance and source transparency of AI model training data.",
    tags_en: ["Apple", "OpenAI", "Intellectual Property", "AI", "Legal Litigation", "Trade Secrets"],
    sources: [
      { name: "The Register", url: "https://theregister.com/legal/2026/07/13/apple-accuses-openai-of-stealing-its-core-tech-secrets/5270256", lang: "EN" }
    ]
  },
  {
    id: "20260713-100",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "攻擊者利用 Nmap 掃描工具，對網路進行癱瘓式攻擊",
    summary: "本文描述了一起網路安全事件，攻擊者在嘗試學習使用 Nmap 掃描工具的過程中，意外地對目標網路造成了癱瘓（crippled）的影響。雖然文章沒有提供具體的 CVE 編號、CVSS 分數或受影響的產品版本，但事件的本質是利用網路掃描工具的誤用或惡意行為，對目標網路的服務可用性造成了嚴重干擾。實務影響上，這提醒了網路管理員和資安人員，即使是學習或測試階段的網路工具，也必須極度謹慎，並應在隔離或受控的測試環境中進行操作，以避免誤傷或造成實際的服務中斷。修補建議是強化網路邊界控制、實施速率限制（Rate Limiting）和異常行為監控，以防止來自內部或外部的掃描活動造成服務癱瘓。",
    tags: ["Nmap", "網路掃描", "DoS/DDoS", "網路安全", "資安事件"],
    title_en: "Attackers Use Nmap Scanning Tool to Launch Denial-of-Service Attack",
    summary_en: "This article describes a cybersecurity incident where an attacker, while attempting to learn how to use the Nmap scanning tool, inadvertently caused a crippling effect on the target network. Although the article does not provide specific CVE IDs, CVSS scores, or affected product versions, the essence of the incident is the misuse or malicious use of network scanning tools, which severely disrupted the service availability of the target network. Practically, this serves as a reminder to network administrators and security personnel that even network tools used during learning or testing phases must be handled with extreme caution and should be operated in an isolated or controlled testing environment to prevent accidental damage or actual service disruption. Remediation suggestions include strengthening network boundary controls, implementing Rate Limiting, and anomaly behavior monitoring to prevent scanning activities, whether internal or external, from causing service paralysis.",
    tags_en: ["Nmap", "Network Scanning", "DoS/DDoS", "Cybersecurity", "Security Incident"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/07/13/user-crippled-a-network-while-trying-to-learn-nmap/5269687", lang: "EN" }
    ]
  },
  {
    id: "20260713-101",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta承認首個超級智能AI模型過時，無法存活超過三天",
    summary: "本文報導Meta平台指出，其開發的首個超級智能（Superintelligence）AI模型在實際運行中表現不佳，無法維持超過三天。這項資訊揭示了大型AI模型在從實驗室到實際應用場景過渡時，面臨的穩定性、可靠性與持續運營的重大挑戰。雖然文章未提供具體的技術細節或CVE資訊，但其核心警示點在於，即使是頂尖的AI模型，也可能存在無法預期的系統性缺陷或運維上的極度不穩定性。對於AI開發者和企業而言，這提醒了在部署任何大型、前沿的AI系統時，必須進行極為嚴格的壓力測試、邊界條件測試，並建立穩健的監控與回滾機制，以確保系統的長期穩定性與商業運營的連續性。這類事件強調了AI系統的「可持續性」比單純的「智能程度」更為關鍵。",
    tags: ["Meta", "AI", "超級智能", "AI模型", "系統穩定性", "AI開發"],
    title_en: "Meta admits first Superintelligence AI model is outdated, unable to survive beyond three days",
    summary_en: "This article reports that Meta has indicated that its first Superintelligence AI model performs poorly in actual operation, unable to maintain stability beyond three days. This information reveals the significant challenges large AI models face when transitioning from laboratory settings to real-world application scenarios, specifically concerning stability, reliability, and sustained operation. Although the article does not provide specific technical details or CVE information, its core warning point is that even top-tier AI models may possess unpredictable systemic defects or extreme operational instability. For AI developers and enterprises, this serves as a reminder that when deploying any large, cutting-edge AI system, extremely rigorous stress testing, boundary condition testing, and robust monitoring and rollback mechanisms must be implemented to ensure long-term stability and continuity of commercial operations. Such incidents emphasize that the \"sustainability\" of an AI system is more critical than its mere \"intelligence level.\"",
    tags_en: ["Meta", "AI", "Superintelligence", "AI Model", "System Stability", "AI Development"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/13/meta-admits-its-first-superintelligence-was-too-stupid-to-survive-for-three-days/5270234", lang: "EN" }
    ]
  },
  {
    id: "20260713-102",
    trackers: ["os"],
    category: "重點關注",
    title: "聯想（Lenovo）澄清：未在非允許地區使用禁用的中國製固態硬碟",
    summary: "本文報導了關於電腦製造商聯想（Lenovo）的供應鏈和產品合規性問題。聯想明確否認在某些地區使用被禁用的中國製固態硬碟（SSDs）。這類產品的使用限制通常與地緣政治和出口管制相關。文章強調了企業在採購和部署硬體設備時，必須嚴格遵守各國的貿易法規和產品禁令。對於IT採購和資安人員而言，這提醒了供應鏈管理和產品合規性檢查的重要性，確保所有組件來源合法且符合目標市場的規定。具體修補或行動建議是，企業應加強對其採購硬體設備的供應鏈審核機制，確保所有組件（如SSD）的來源和使用地區都符合當地法規。",
    tags: ["Lenovo", "固態硬碟", "供應鏈", "地緣政治", "產品合規性"],
    title_en: "Lenovo Clarifies: Not Using Banned Chinese-Made Solid State Drives in Unauthorized Regions",
    summary_en: "This article reports on supply chain and product compliance issues concerning computer manufacturer Lenovo. Lenovo explicitly denies using banned Chinese-made Solid State Drives (SSDs) in certain regions. The use of such products is typically related to geopolitical factors and export controls. The article emphasizes that enterprises must strictly adhere to the trade regulations and product bans of various countries when procuring and deploying hardware equipment. For IT procurement and cybersecurity personnel, this highlights the importance of supply chain management and product compliance checks, ensuring that all components are legally sourced and compliant with the target market's regulations. The specific remediation or action recommendation is that enterprises should strengthen their supply chain audit mechanisms for procured hardware equipment, ensuring that the source and usage region of all components (such as SSDs) comply with local laws.",
    tags_en: ["Lenovo", "Solid State Drive", "Supply Chain", "Geopolitics", "Product Compliance"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/07/13/lenovo-denies-using-banned-chinese-ssds-where-theyre-not-allowed/5270212", lang: "EN" }
    ]
  },
  {
    id: "20260713-103",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "MCP Appium 存在跨平台 XSS 漏洞：攻擊者可注入惡意 HTML/JS 執行任意指令",
    summary: "MCP Appium 伺服器提供 AI 助理自動化 Android 與 iOS 應用程式測試的工具。在版本 1.85.10 之前的版本中，`createLocatorGeneratorUI` 函式在處理元素屬性（如文字、`content-desc`、`resource-id` 和定位器選擇器值）時，未對攻擊者控制的輸入進行 HTML 或 JavaScript 上下文轉義。這使得攻擊者若能控制待測應用程式的 UI，便可注入任意 HTML 和 JavaScript 到 `generate_locators` 工具返回的 MCP UI 資源中。當受害者（MCP 客戶端）渲染此資源時，注入的腳本會執行，並能透過 `window.parent.postMessage` 呼叫任意 MCP 工具，例如擷取螢幕截圖、讀取頁面原始碼等，導致未經授權的工具執行。此漏洞已在版本 1.85.10 中修復。",
    tags: ["MCP Appium", "CVE-2026-58500", "XSS", "跨平台", "自動化測試", "Android", "iOS"],
    title_en: "MCP Appium Contains Cross-Platform XSS Vulnerability: Attackers Can Inject Malicious HTML/JS to Execute Arbitrary Commands",
    summary_en: "The MCP Appium server is a tool for automating Android and iOS application testing using AI assistants. In versions prior to 1.85.10, the `createLocatorGeneratorUI` function failed to perform HTML or JavaScript context escaping on attacker-controlled input when processing element attributes (such as text, `content-desc`, `resource-id`, and locator selector values). This allows an attacker who can control the application under test's UI to inject arbitrary HTML and JavaScript into the MCP UI resource returned by `generate_locators`. When the victim (the MCP client) renders this resource, the injected script executes, enabling the calling of arbitrary MCP tools via `window.parent.postMessage`, such as capturing screenshots or reading page source, leading to unauthorized tool execution. This vulnerability has been fixed in version 1.85.10.",
    tags_en: ["MCP Appium", "CVE-2026-58500", "XSS", "Cross-Platform", "Automated Testing", "Android", "iOS"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58500", lang: "EN" }
    ]
  },
  {
    id: "20260713-104",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI傳告Apple官司：Jony Ive可能被迫捲入，使Apple處於尷尬境地",
    summary: "本文討論了Apple與OpenAI之間關於商業機密竊取的法律訴訟。Apple在訴訟中，雖然努力避免提及前設計主管Jony Ive，但由於Ive的公司io Products曾與OpenAI合作開發了爭議的核心硬體，使其難以完全排除在外。Apple的訴訟主要指控OpenAI及其相關方進行了系統性的不當行為，但未具名指控Ive。然而，由於Ive在io Products的創立和硬體專案的監督中扮演了關鍵角色，OpenAI理論上可以主張他掌握了產品開發過程、團隊依賴資訊以及Apple商業機密相關的相關知識。這可能迫使Apple在法律程序（如證據開示）中，必須對Ive進行審問，或挑戰其證詞。這將使Apple處於極為微妙的立場，尤其考慮到Ive自2019年離職後，一直保持著對Apple公開的尊重。此類法律程序對Apple而言，可能帶來公關和法律上的挑戰。",
    tags: ["Apple", "OpenAI", "Jony Ive", "法律訴訟", "商業機密", "io Products"],
    title_en: "OpenAI's Disclosure in Apple Lawsuit: Jony Ive May Be Forced to Be Involved, Putting Apple in an Awkward Position",
    summary_en: "This article discusses the legal lawsuit between Apple and OpenAI concerning the theft of trade secrets. Although Apple has tried to avoid mentioning former design chief Jony Ive in the lawsuit, Ive's company, io Products, collaborated with OpenAI on the core hardware at the center of the dispute, making it difficult to completely exclude him. Apple's lawsuit primarily accuses OpenAI and its affiliates of systematic misconduct, but it does not name Ive. However, given Ive's key role in the establishment of io Products and the supervision of hardware projects, OpenAI could theoretically claim that he possesses relevant knowledge regarding the product development process, team dependencies, and Apple's trade secrets. This may force Apple, during legal procedures (such as discovery), to question or challenge Ive's testimony. This would place Apple in an extremely delicate position, especially considering that Ive has maintained public respect for Apple since his departure in 2019. Such legal proceedings could pose both public relations and legal challenges for Apple.",
    tags_en: ["Apple", "OpenAI", "Jony Ive", "Legal Lawsuit", "Trade Secrets", "io Products"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/openai-could-force-apple-into-an-awkward-fight-with-jony-ive", lang: "EN" }
    ]
  },
  {
    id: "20260713-105",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "未公開",
    tags: [],
    title_en: "N/A",
    summary_en: "N/A",
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/14/zucks-ai-ambitions-put-meta-on-course-to-become-americas-next-big-cloud-provider/5270758", lang: "EN" }
    ]
  },
  {
    id: "20260713-106",
    trackers: ["os"],
    category: "重點關注",
    title: "Zig 開發者批評 Buns、Claude、Rust 重寫專案缺乏審核，質疑程式碼品質",
    summary: "本文報導了 Zig 開發社群的討論，核心議題是針對一些大型專案（如 Buns、Claude、Rust 相關的重寫或整合專案）的程式碼品質和審核流程。開發者們指出，這些重寫或整合的程式碼可能缺乏充分的同行審查（peer review）和嚴謹的測試，導致程式碼的可靠性、安全性或可維護性存在風險。這類情況對於依賴這些大型開源專案的開發者和企業系統來說，實務影響是巨大的，可能導致潛在的漏洞、性能瓶頸或功能不穩定。建議開發者在採用或依賴這些大型重寫專案時，應特別關注其程式碼的來源、審核記錄，並進行獨立的安全性與功能性測試，以確保系統的穩健性。本篇文章屬於開發趨勢與最佳實踐的討論，而非單一 CVE 的修補公告。",
    tags: ["Zig", "Rust", "Buns", "Claude", "開源軟體", "程式碼審核", "開發趨勢"],
    title_en: "Zig Developers Criticize Buns, Claude, Rust Rewrites for Lack of Review, Question Code Quality",
    summary_en: "This article reports on discussions within the Zig development community, focusing on the code quality and review processes of certain large projects (such as Buns, Claude, or Rust-related rewrite/integration projects). Developers point out that these rewritten or integrated codes may lack sufficient peer review and rigorous testing, posing risks to the code's reliability, security, or maintainability. For developers and enterprise systems that rely on these large open-source projects, the practical impact is significant, potentially leading to latent vulnerabilities, performance bottlenecks, or functional instability. It is recommended that developers, when adopting or relying on these large rewrite projects, pay special attention to the code's provenance, review history, and conduct independent security and functional testing to ensure system robustness. This article belongs to the discussion of development trends and best practices, rather than a single CVE patch announcement.",
    tags_en: ["Zig", "Rust", "Buns", "Claude", "Open Source Software", "Code Review", "Development Trends"],
    sources: [
      { name: "The Register", url: "https://theregister.com/devops/2026/07/14/zig-creator-calls-buns-claude-rust-rewrite-unreviewed-slop/5270743", lang: "EN" }
    ]
  },
  {
    id: "20260713-107",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "歐盟發起中小企業網路韌性調查：協助企業評估網路安全風險",
    summary: "歐盟委員會發布了一項針對中小企業（SME）網路韌性的調查，旨在了解各成員國企業在網路安全領域面臨的挑戰與需求。此調查的目的是協助企業評估其現有的網路安全風險，並了解其在實施網路韌性措施時的痛點。調查內容涵蓋了從治理結構、技術保護措施到員工意識等多個層面。雖然文章本身未提供具體的技術漏洞或攻擊細節，但其核心實務影響在於提醒中小企業必須將網路安全納入核心業務規劃，建立全面的風險管理體系。建議企業應利用此類官方資源，定期進行內部安全評估，並考慮尋求專業的網路安全諮詢，以強化整體網路韌性。",
    tags: ["歐盟委員會", "中小企業", "網路韌性", "網路安全", "風險管理", "SME"],
    title_en: "EU Launches Cybersecurity Resilience Survey for SMEs: Helping Companies Assess Cyber Risks",
    summary_en: "The European Commission has released a survey on cybersecurity resilience for Small and Medium-sized Enterprises (SMEs), aiming to understand the challenges and needs of businesses across member states in the field of cybersecurity. The purpose of this survey is to help companies assess their existing cybersecurity risks and identify pain points when implementing resilience measures. The survey content covers multiple aspects, ranging from governance structures and technical protection measures to employee awareness. Although the article itself does not provide specific technical vulnerabilities or attack details, its core practical implication is to remind SMEs that they must integrate cybersecurity into their core business planning and establish a comprehensive risk management system. It is recommended that companies utilize such official resources to conduct regular internal security assessments and consider seeking professional cybersecurity consultation to strengthen overall cyber resilience.",
    tags_en: ["European Commission", "SME", "Cyber Resilience", "Cybersecurity", "Risk Management", "SME"],
    sources: [
      { name: "EC CRA 實施頁面（News）", url: "https://digital-strategy.ec.europa.eu/en/news/sme-cyber-resilience-act-survey", lang: "EN" }
    ]
  },
  {
    id: "20260713-108",
    trackers: ["os", "security"],
    category: "uncategorized",
    title: "WinFsp 檔案系統代理程式發現整數溢位漏洞 (CVE-2026-7162)，建議立即更新修補版本",
    summary: "CSA 針對開源 Windows 檔案系統軟體 WinFsp，發布了 CVE-2026-7162 漏洞公告。此漏洞屬於整數溢位（integer overflow）類型，若成功利用，攻擊者可能取得受影響軟體的系統級存取權限。該漏洞的 CVSS v3.1 分數為 7.8/10。受影響的版本為 WinFsp 2.2.26112 及更早版本。產品擁有者已發布了安全更新來修補此漏洞。所有使用者和系統管理員應立即將 WinFsp 更新至最新版本，以避免遭受攻擊。建議使用者參考官方提供的更新連結進行修補。",
    tags: ["WinFsp", "CVE-2026-7162", "整數溢位", "Windows", "系統存取權限"],
    title_en: "Integer Overflow Vulnerability Found in WinFsp File System Driver (CVE-2026-7162); Immediate Update to Patch Version Recommended",
    summary_en: "CSA has issued a CVE-2026-7162 vulnerability announcement regarding the open-source Windows file system software, WinFsp. This vulnerability is an integer overflow type. If successfully exploited, an attacker could potentially gain system-level access to the affected software. The CVSS v3.1 score for this vulnerability is 7.8/10. Affected versions include WinFsp 2.2.26112 and earlier. The product owner has released a security update to patch this vulnerability. All users and system administrators should immediately update WinFsp to the latest version to prevent potential attacks. Users are advised to refer to the official update link for patching.",
    tags_en: ["WinFsp", "CVE-2026-7162", "Integer Overflow", "Windows", "System Access"],
    sources: [
      { name: "新加坡 CSA", url: "https://csa.gov.sg/alerts-and-advisories/alerts/al-2026-086", lang: "EN" }
    ]
  }
];
