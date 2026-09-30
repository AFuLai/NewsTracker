// data-20260930.js — 2026-09-30
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-30"] = [
  {
    id: "20260930-13823",
    trackers: ["security"],
    category: "重大事件",
    title: "荷蘭警方逮捕涉嫌駭客組織 ShinyHunters 成員，調查多起大型資料外洩事件",
    summary: "荷蘭警方於9月15日逮捕一名涉嫌參與駭客組織 ShinyHunters 的24歲男子。警方在嫌犯的電子裝置中，扣押了大量資料和電子儲存裝置，目前正在進行深入分析。ShinyHunters 近年來多次涉及大型資料外洩事件，包括最近聲稱入侵美國聯邦調查局（FBI）網站，竊取員工及應徵者個資。雖然FBI網路部門確認被捕嫌犯為ShinyHunters疑似領導者之一，並表示正與國際夥伴合作，但警方尚未確認該嫌犯是否參與了聲稱入侵FBI的事件。此案顯示駭客組織的活動範圍廣泛，其目標常包括政府機構和大型組織的敏感資料，提醒相關單位需提高警覺，加強資安防護與資料監控。",
    tags: ["ShinyHunters", "荷蘭警方", "資料外洩", "FBI", "駭客組織", "個資竊取"],
    title_en: "Dutch Police Arrest Suspected Member of Hacker Group ShinyHunters, Investigating Multiple Large Data Leak Incidents",
    summary_en: "On September 15, Dutch police arrested a 24-year-old man suspected of involvement with the hacker group ShinyHunters. Police seized a large amount of data and electronic storage devices from the suspect's electronics, which are currently undergoing in-depth analysis. ShinyHunters has been involved in multiple large-scale data leak incidents in recent years, including a recent alleged breach of the FBI website, where personal information of employees and applicants was stolen. Although the FBI cyber division confirmed that the arrested suspect is a suspected leader of ShinyHunters and stated that they are cooperating with international partners, the police have not yet confirmed whether the suspect was involved in the alleged FBI breach. This case highlights the wide scope of hacker activities, with targets often including sensitive data from government agencies and large organizations, reminding relevant parties to heighten their vigilance and strengthen cybersecurity defenses and data monitoring.",
    tags_en: ["ShinyHunters", "Dutch Police", "Data Leak", "FBI", "Hacker Group", "Personal Data Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179302", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13824",
    trackers: ["security"],
    category: "重大事件",
    title: "資安業者揭露勒索攻擊活動 JadePuffer：利用 AI 代理擴大攻擊至 Azure 雲端資產",
    summary: "資安業者 Sysdig 揭露了一種名為 JadePuffer 的勒索攻擊活動。該活動利用 AI 代理（AI agent）自動化執行偵察、竊取憑證、橫向移動及資料加密等完整攻擊流程，並將攻擊目標擴展至 AI 資產、訓練資料集與向量資料庫。微軟資安研究人員也公開了兩起針對 Azure 雲端環境的 JadePuffer 攻擊案例，將其追蹤為 Storm-3168。攻擊者利用遭入侵的服務主體（Service principals）存取受害者 Azure 環境，進行大規模資料刪除。攻擊者先盤點受害者 Azure 資源並取得儲存帳戶金鑰，隨後針對超過 100 個儲存帳號、SQL 資料庫、Key Vault、Function Apps 等多種資源執行刪除操作。雖然破壞行動持續時間短，但攻擊者嘗試刪除 SQL 資料庫與復原保護鎖，顯示其攻擊的廣度和複雜性。微軟指出，攻擊者使用的服務主體憑證曾出現在 GitHub 的公開 Issue 中，暗示了潛在的洩漏風險。建議用戶應加強對服務主體憑證的保護，並實施多層防禦機制，特別是針對雲端環境的資源刪除與變更操作。",
    tags: ["JadePuffer", "Azure", "Microsoft", "AI 代理", "服務主體", "勒索攻擊", "雲端安全"],
    title_en: "Cybersecurity Firm Uncovers Ransomware Campaign JadePuffer: Leveraging AI Agents to Expand Attacks to Azure Cloud Assets",
    summary_en: "Cybersecurity firm Sysdig has uncovered a ransomware campaign named JadePuffer. This campaign utilizes AI agents to automate a complete attack lifecycle, including reconnaissance, credential theft, lateral movement, and data encryption, expanding its targets to AI assets, training datasets, and vector databases. Microsoft security researchers also disclosed two instances of JadePuffer attacks targeting Azure cloud environments, tracking them as Storm-3168. The attackers used compromised service principals to access victim Azure environments, performing large-scale data deletion. The attackers first inventoried the victim's Azure resources and obtained storage account keys, subsequently executing deletion operations across diverse resources including over 100 storage accounts, SQL databases, Key Vaults, and Function Apps. Although the destructive action was brief, the attackers attempted to delete SQL databases and recovery protection locks, demonstrating the breadth and complexity of their attack. Microsoft noted that the service principal credentials used by the attackers had previously appeared in public GitHub issues, suggesting a potential leakage risk. Users are advised to strengthen the protection of service principal credentials and implement multi-layered defense mechanisms, especially for resource deletion and modification operations in cloud environments.",
    tags_en: ["JadePuffer", "Azure", "Microsoft", "AI Agent", "Service Principal", "Ransomware", "Cloud Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179300", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13828",
    trackers: ["security"],
    category: "重大事件",
    title: "美國國防部資料中心遭外洩：逾305萬現役及退役人員個資遭竊",
    summary: "美國國防部人力資料中心（DMDC）發生大規模資料外洩事件，影響範圍涵蓋約276萬現役及29.4萬已故人員，總計超過305萬名人員。外洩資料包括受影響人員的社會安全號碼、姓名、出生日期、聯絡資訊、性別、種族及軍事職務等個人敏感資訊。DMDC於7月16日發現檔案共享系統存在資安漏洞，後續調查發現，未授權使用者自2025年10月至2026年7月間存取伺服器中的未加密個資檔案，持續約九個月。雖然DMDC已修補系統並表示目前無證據顯示資料遭到濫用，但事件仍對受影響人員造成重大隱私風險。受影響者將獲得一年信用監控及身分恢復服務，但官方尚未公布具體漏洞類型、攻擊者身份或入侵方式。",
    tags: ["美國國防部", "DMDC", "資料外洩", "個資安全", "社會安全號碼"],
    title_en: "U.S. Department of Defense Data Center Breach: Personal Information of Over 3.05 Million Active and Retired Personnel Stolen",
    summary_en: "A massive data leak occurred at the Department of Defense Manpower Data Center (DMDC), affecting approximately 2.76 million active-duty and 294,000 deceased personnel, totaling over 3.05 million individuals. The leaked data includes sensitive personal information such as the affected personnel's Social Security Numbers, names, dates of birth, contact information, gender, race, and military occupational specialties. DMDC discovered a security vulnerability in the file-sharing system on July 16th. Subsequent investigations found that unauthorized users accessed unencrypted personal data files on the server from October 2025 to July 2026, over a period of approximately nine months. Although DMDC has patched the system and stated there is currently no evidence of data misuse, the incident still poses significant privacy risks to the affected personnel. Affected individuals will receive one year of credit monitoring and identity restoration services, but official sources have not yet disclosed the specific vulnerability type, attacker identity, or method of intrusion.",
    tags_en: ["Department of Defense", "DMDC", "Data Leak", "Personal Data Security", "Social Security Number"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179295", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13831",
    trackers: ["security"],
    category: "重大事件",
    title: "遊戲軟體公司<0xE9><0x88><0x8A>象遭不明IP位址異常入侵營運資訊設備，資安團隊啟動應變",
    summary: "遊戲軟體公司<0xE9><0x88><0x8A>象（3293）於9月29日透過股市公開資訊觀測站發布重大訊息，揭露其營運資訊設備曾遭不明IP位址異常入侵活動。公司資安團隊在偵測到異常活動後，立即啟動了資安應變機制進行處理。根據<0xE9><0x88><0x8A>象的初步評估，本次事件對公司的整體營運並無重大影響。然而，公司並未提供進一步細節，包括遭異常入侵的具體設備資訊、入侵方式，以及資料是否遭到竊取或系統是否受到破壞。本事件屬於典型的資安事件通報，顯示企業需持續監控營運設備，並在偵測到異常入侵時，應立即啟動應變流程，並透過公開管道向市場及公眾進行透明化說明。",
    tags: ["<0xE9><0x88><0x8A>象", "3293", "資安事件", "營運資訊設備", "異常入侵"],
    title_en: "Game Software Company (3293) Reports Abnormal Intrusion Attempt on Operational Information Systems from Unknown IP Address; Security Team Initiates Incident Response",
    summary_en: "Game Software Company (3293) announced a major event via the Stock Exchange's Public Information Observation Station on September 29, disclosing that its operational information systems were subjected to abnormal intrusion activity from an unknown IP address. Upon detecting the abnormal activity, the company's cybersecurity team immediately activated its incident response mechanism. According to Game Software Company's preliminary assessment, this incident did not significantly impact the company's overall operations. However, the company did not provide further details, including specific information about the compromised equipment, the method of intrusion, or whether data was stolen or systems were damaged. This incident constitutes a typical cybersecurity event notification, highlighting the need for enterprises to continuously monitor operational equipment and, upon detecting abnormal intrusion, immediately initiate response procedures and provide transparent explanations to the market and the public through public channels.",
    tags_en: ["Game Software Company", "3293", "Cybersecurity Incident", "Operational Information Systems", "Abnormal Intrusion"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179289", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13832",
    trackers: ["security"],
    category: "重大事件",
    title: "神腦國際外部伺服器遭自動化攻擊，訂單資訊遭擷取，公司啟動應變機制",
    summary: "通訊產品通路商神腦國際於9月29日公告，其外部伺服器曾遭受自動化攻擊。攻擊者透過該路徑擷取了部分訂單資訊。神腦國際獲報後立即啟動應變會議，並採取多項必要措施以降低潛在影響。根據初步評估，該事件對公司的營運、財務狀況，以及服務提供能力並無重大影響。由於外洩資料為訂單資訊，神腦國際特別提醒消費者，應提高警覺，以防個資被詐騙集團利用，並已在官方網站與App上進行反詐騙宣導，以保護用戶權益。",
    tags: ["神腦國際", "外部伺服器", "自動化攻擊", "訂單資訊", "資料外洩", "個資保護"],
    title_en: "Shennǎo International External Server Targeted by Automated Attack; Order Information Exfiltrated; Company Activates Incident Response",
    summary_en: "Communication product distributor Shennǎo International announced on September 29th that its external server was subjected to an automated attack. The attackers utilized this pathway to exfiltrate some order information. Upon receiving notification, Shennǎo International immediately convened an incident response meeting and implemented multiple necessary measures to mitigate potential impact. According to preliminary assessments, the incident has no significant impact on the company's operations, financial status, or service provision capabilities. Since the leaked data consisted of order information, Shennǎo International specifically advises consumers to heighten their vigilance against potential misuse by fraud groups and has launched anti-scam campaigns on its official website and App to protect user rights.",
    tags_en: ["Shennǎo International", "External Server", "Automated Attack", "Order Information", "Data Leakage", "Personal Data Protection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179288", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13833",
    trackers: ["security"],
    category: "重大事件",
    title: "華碩eShop遭未授權存取：部分客戶訂單與聯絡資訊可能外洩",
    summary: "根據科技媒體報導，華碩（ASUS）的線上購物商店eShop曾發生資安事件，有客戶收到通知信指出部分訂單資訊可能遭到未經授權存取。華碩表示，調查顯示受影響的資料包含客戶的聯絡資訊與訂單紀錄，但目前尚未發現相關資訊遭到濫用，或有客戶因此蒙受損害。此外，華碩強調此次事件不涉及信用卡、銀行帳戶或其他金融資訊。公司已立即採取措施控制影響，並持續進行調查，同時提醒客戶留意可能由第三方利用這些資訊製作的釣魚電郵、簡訊或電話。",
    tags: ["ASUS", "華碩", "eShop", "資料外洩", "客戶資訊", "釣魚攻擊"],
    title_en: "ASUS eShop Suffers Unauthorized Access: Partial Customer Order and Contact Information Potentially Exposed",
    summary_en: "According to tech media reports, ASUS's online shopping store, eShop, experienced a security incident. Some customers received notifications indicating that partial order information may have been subject to unauthorized access. ASUS stated that the investigation revealed that the affected data includes customer contact information and order records, but no misuse of this information or resulting damage to customers has been found so far. Furthermore, ASUS emphasized that this incident did not involve credit card, bank account, or other financial information. The company immediately took measures to contain the impact and is continuing its investigation, while advising customers to be vigilant against phishing emails, SMS, or calls that may be created using this information.",
    tags_en: ["ASUS", "eShop", "Data Leak", "Customer Information", "Phishing Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179287", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13960",
    trackers: ["os"],
    category: "Linux",
    title: "Archinstall 4.5 重磅更新：新增 RT 核心選項、AArch64 支援，提升 Arch Linux 安裝體驗",
    summary: "Arch Linux 發布了 Archinstall 4.5 版本，作為其文字介面安裝程式的最新更新。本次更新主要針對提升系統的穩定性與功能性。使用者現在可以在安裝時選擇 `linux-rt` 和 `linux-rt-lts` 這兩個實時核心（real-time kernel）選項，方便在乾淨的 Arch Linux 安裝環境中部署上游的實時核心。此外，Archinstall 4.5 也擴展了 AArch64 的支援，涵蓋 GRUB 和 Limine EFI 的安裝，並增加了 AArch64 根分區類型 GUID 的處理能力。在桌面環境方面，本次更新將 Hyprland、Labwc、Niri 和 Sway 等選項的後端從 polkit 轉換為 systemd-logind，提升了系統的整合性。除了這些重大功能升級外，還包含了多種錯誤修復與其他優化。建議使用者在升級 Arch Linux 系統時，留意此版本提供的核心和環境選項。",
    tags: ["Arch Linux", "Archinstall", "linux-rt", "AArch64", "systemd-logind", "Linux 核心"],
    title_en: "Archinstall 4.5 Major Update: Adds RT Kernel Options and AArch64 Support, Enhancing Arch Linux Installation Experience",
    summary_en: "Arch Linux has released Archinstall 4.5, the latest update for its command-line installer. This update primarily focuses on improving system stability and functionality. Users can now select `linux-rt` and `linux-rt-lts` real-time kernel options during installation, facilitating the deployment of upstream real-time kernels in a clean Arch Linux environment. Furthermore, Archinstall 4.5 expands AArch64 support, covering the installation of GRUB and Limine EFI, and enhances handling for AArch64 root partition type GUIDs. Regarding desktop environments, this update changes the backend for options like Hyprland, Labwc, Niri, and Sway from polkit to systemd-logind, improving system integration. In addition to these major feature upgrades, it includes various bug fixes and other optimizations. Users are advised to pay attention to the kernel and environment options provided by this version when upgrading their Arch Linux system.",
    tags_en: ["Arch Linux", "Archinstall", "linux-rt", "AArch64", "systemd-logind", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Arch-Linux-Archinstall-4.5", lang: "EN" }
    ]
  },
  {
    id: "20260930-13837",
    trackers: ["security"],
    category: "法規與標準",
    title: "SANS提出DAIR事件回應框架：強調動態調整與持續迭代的資安應變模式",
    summary: "資安教育與研究機構SANS Institute提出新的事件回應框架Dynamic Approach to Incident Response (DAIR)。該框架指出，傳統的事件處理模型（如PICERL、NIST SP 800-61）常將事件應變描述為線性、依序的流程。DAIR主張，實際的事件調查應是動態的、非線性的，應根據調查取得的新證據，不斷重新界定事件範圍（Scope）、調整圍堵（Contain）、清除（Eradicate）及復原（Recover）的措施。在事件處置過程中，團隊必須持續協調決策，權衡企業營運需求與可接受風險。DAIR涵蓋準備、偵測、驗證、回應行動及事後檢討等環節，並特別針對勒索軟體、雲端及OT環境提供了專門指引，甚至納入利用生成式AI與AI代理加速分析的應用。此外，DAIR的紀錄產出亦可直接作為企業進行NIST CSF 2.0評估的佐證，有效整合資安應變與風險管理流程。",
    tags: ["SANS Institute", "DAIR", "NIST CSF 2.0", "事件回應", "資安應變", "OT"],
    title_en: "SANS Proposes DAIR Incident Response Framework: Emphasizing Dynamic Adjustment and Continuous Iteration in Cybersecurity Incident Response",
    summary_en: "The cybersecurity education and research organization SANS Institute has introduced a new incident response framework called Dynamic Approach to Incident Response (DAIR). This framework points out that traditional incident handling models (such as PICERL and NIST SP 800-61) often describe incident response as a linear, sequential process. DAIR argues that actual incident investigation should be dynamic and non-linear, requiring continuous redefinition of the Scope, Containment, Eradication, and Recovery measures based on newly acquired evidence. Throughout the incident handling process, teams must continuously coordinate decisions, balancing enterprise operational needs with acceptable risk. DAIR covers stages including Preparation, Detection, Validation, Response Actions, and Post-Incident Review, and provides specialized guidance for ransomware, cloud, and OT environments. It even incorporates the application of generative AI and AI agents to accelerate analysis. Furthermore, the documentation generated by DAIR can directly serve as evidence for an enterprise's NIST CSF 2.0 assessment, effectively integrating cybersecurity incident response with risk management processes.",
    tags_en: ["SANS Institute", "DAIR", "NIST CSF 2.0", "Incident Response", "Cybersecurity Incident Response", "OT"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179231", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-14000",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 更新現已推出，提供多種安裝方式供使用者選擇",
    summary: "微軟已開始逐步推出 Windows 11 26H2 版本（亦稱 Windows 11 2026 Update）。使用者可透過 Windows Update、Windows 11 Installation Assistant、Media Creation Tool 或 ISO 檔案等多種方式進行安裝。微軟指出，26H2 版本在服務基礎上與近期 Windows 11 版本一致，旨在提供最新的 Windows 創新功能，並優化更新體驗，以最小化使用者中斷。若透過 Windows Update 進行升級，流程類似於每月更新，只需小幅下載和快速重啟即可完成。文章提醒，無論選擇哪種方法，都應先備份資料，因為乾淨安裝可能會清除所有現有資料。微軟建議使用者透過 Windows Update 進行升級，但若無法看到 26H2，可使用 Installation Assistant 或 ISO 檔案作為替代方案。請注意，不同方法有不同的操作流程和適用情境，建議使用者根據自身需求選擇最合適的安裝方式。",
    tags: ["Windows 11", "26H2", "Windows Update", "Microsoft", "Installation Assistant", "OS 更新"],
    title_en: "Windows 11 26H2 Update Released, Offering Multiple Installation Methods for Users",
    summary_en: "Microsoft has begun rolling out the Windows 11 26H2 version (also known as the Windows 11 2026 Update). Users can install it through multiple methods, including Windows Update, the Windows 11 Installation Assistant, the Media Creation Tool, or an ISO file. Microsoft notes that the 26H2 version is based on the same service foundation as recent Windows 11 versions, aiming to provide the latest Windows innovations and optimize the update experience to minimize user disruption. If upgrading via Windows Update, the process is similar to a monthly update, requiring only a small download and quick restart. The article reminds users that regardless of the method chosen, they should back up their data first, as a clean installation may erase all existing data. Microsoft recommends using Windows Update for the upgrade, but if 26H2 is not visible, the Installation Assistant or ISO file can be used as alternatives. Note that different methods have different operational procedures and applicable scenarios, so users are advised to select the most suitable installation method based on their needs.",
    tags_en: ["Windows 11", "26H2", "Windows Update", "Microsoft", "Installation Assistant", "OS Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/30/how-to-download-and-install-windows-11-26h2-now-available-for-everyone", lang: "EN" }
    ]
  },
  {
    id: "20260930-14001",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 ISO 完整安裝影像現已釋出，支援 x64 與 Arm64 架構",
    summary: "微軟已釋出 Windows 11 26H2 的 ISO 完整安裝影像，這是 2026 年的年度功能更新版本。該版本提供 x64 和 Arm64 兩種架構的 ISO 檔案，大小約為 7.9GB。雖然目前運行 Windows 11 24H2 或 25H2 的設備可透過小型啟用套件（enablement package）進行升級，但下載 ISO 則可進行完整的系統安裝或乾淨重灌。此 ISO 影像已包含截至 2026 年 9 月的累積更新，適合進行乾淨安裝。文章強調，使用者應從微軟官方下載，並建議透過 PowerShell 驗證 SHA-256 Hash 值，以確保 ISO 檔案未被篡改。此外，ISO 影像可作為系統備份、離線安裝、系統修復或虛擬機環境的基礎媒體，但使用者必須記得區分這是作業系統的安裝媒體，而非個人資料的備份。",
    tags: ["Windows 11", "26H2", "ISO", "x64", "Arm64", "微軟"],
    title_en: "Windows 11 26H2 ISO Full Installation Image Released, Supporting x64 and Arm64 Architectures",
    summary_en: "Microsoft has released the Windows 11 26H2 ISO full installation image, which is the annual feature update version for 2026. This version provides ISO files for both x64 and Arm64 architectures, with a size of approximately 7.9GB. Although devices currently running Windows 11 24H2 or 25H2 can upgrade via a small enablement package, downloading the ISO allows for a complete system installation or clean reinstallation. This ISO image includes cumulative updates up to September 2026, making it suitable for a clean install. The article emphasizes that users should download from the official Microsoft source and recommends verifying the SHA-256 Hash value via PowerShell to ensure the ISO file has not been tampered with. Furthermore, the ISO image can serve as system backup, offline installation, system repair, or base media for virtual machine environments, but users must remember to distinguish that this is an operating system installation medium, not a personal data backup.",
    tags_en: ["Windows 11", "26H2", "ISO", "x64", "Arm64", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/30/download-windows-11-26h2-iso-offline-installer-directly-from-microsoft", lang: "EN" }
    ]
  },
  {
    id: "20260930-14002",
    trackers: ["os"],
    category: "Windows",
    title: "微軟警告 Windows 11 26H2 存在三項已知 Bug：音訊故障、企業帳號登入問題及 AVD 桌面載入異常",
    summary: "微軟宣布 Windows 11 26H2 年度更新正式推出，雖然對一般消費者而言沒有新功能，但微軟已確認此版本（以及 25H2、24H2）存在至少三項已知問題。首先，部分 PC 在安裝 26H2 後，可能導致 USB Audio Class 1.0 設備無法啟動或產生音訊，且「裝置管理員」會報錯。此外，對於使用 Active Directory 的企業環境，26H2 由於啟用 Machine Identity Isolation feature，可能導致受 Credential Guard 保護的機器帳號無法正常登入。最後，針對 Azure Virtual Desktop (AVD) 主機，26H2 可能會引起桌面載入或黑畫面問題。微軟表示，由於這三個版本共享相同的底層程式碼和服務分支，因此一個版本出現的 Bug，其他版本也會受到影響，並承諾未來會透過更新修復這些問題。文章建議，若主要顧慮是 24H2 或 25H2 的 Bug，則不建議跳過 26H2，因為升級過程能降低應用程式和硬體相容性風險。",
    tags: ["Windows 11", "26H2", "Microsoft", "USB Audio", "Credential Guard", "Azure Virtual Desktop", "Windows Update"],
    title_en: "Microsoft Warns of Three Known Bugs in Windows 11 26H2: Audio Failures, Enterprise Account Login Issues, and AVD Desktop Loading Anomalies",
    summary_en: "Microsoft has announced the official release of the Windows 11 26H2 annual update. While this version introduces no new features for general consumers, Microsoft has confirmed at least three known issues in this version (as well as 25H2 and 24H2). First, some PCs may experience issues with USB Audio Class 1.0 devices failing to initialize or produce audio after installing 26H2, and the 'Device Manager' may report errors. Furthermore, in enterprise environments using Active Directory, 26H2 may prevent machine accounts protected by Credential Guard from logging in properly due to the activation of the Machine Identity Isolation feature. Finally, AVD hosts running 26H2 may encounter desktop loading or black screen issues. Microsoft stated that because these three versions share the same underlying code and service branches, a bug found in one version will affect the others, and they commit to fixing these issues through future updates. The article advises that if the primary concern is the bugs in 24H2 or 25H2, users should not skip 26H2, as the upgrade process helps mitigate application and hardware compatibility risks.",
    tags_en: ["Windows 11", "26H2", "Microsoft", "USB Audio", "Credential Guard", "Azure Virtual Desktop", "Windows Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/30/microsoft-explains-if-windows-11-26h2-has-issues-and-whether-you-should-skip-the-update", lang: "EN" }
    ]
  },
  {
    id: "20260930-13827",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mozilla發布Firefox 157：修補38個高風險資安漏洞，並警告加密金鑰可能洩漏網路流量",
    summary: "Mozilla於9月29日發布Firefox 157改版，並為長期支援版本（ESR）發布多個更新，修補了多數資安弱點。本次更新共修補了76個漏洞，其中有38個被評定為高風險等級。根據Tenable的資料分析，其中31個漏洞的CVSS嚴重程度評分達到重大等級，特別是CVE-2026-100758、CVE-2026-100760、CVE-2026-100775、CVE-2026-100781、CVE-2026-100787，以及CVE-2026-100794等，其危險程度甚至達到滿分10分。\n除了資安修補外，Firefox 157也引入了新的警示機制，提醒使用者當設定特定加密金鑰時，可能導致電腦其他軟體讀取經加密處理的網路流量。使用者應留意這些安全警告，並及時更新至最新版本以修補高風險漏洞。",
    tags: ["Mozilla", "Firefox 157", "資安漏洞", "CVE-2026-100758", "高風險", "資安更新"],
    title_en: "Mozilla Releases Firefox 157: Patches 38 High-Risk Security Vulnerabilities and Warns of Potential Encrypted Key Leakage in Network Traffic",
    summary_en: "Mozilla released Firefox 157 on September 29th, along with multiple updates for its Extended Support Release (ESR) version, patching numerous security weaknesses. This update addresses a total of 76 vulnerabilities, 38 of which are rated as high risk. According to data analysis from Tenable, 31 of these vulnerabilities achieved a Critical CVSS severity score, particularly CVE-2026-100758, CVE-2026-100760, CVE-2026-100775, CVE-2026-100781, CVE-2026-100787, and CVE-2026-100794, some of which reached the maximum score of 10. Beyond security patches, Firefox 157 also introduced a new warning mechanism, alerting users that setting specific encryption keys might allow other software on the computer to read encrypted network traffic. Users are advised to pay attention to these security warnings and update to the latest version promptly to patch the high-risk vulnerabilities.",
    tags_en: ["Mozilla", "Firefox 157", "Security Vulnerability", "CVE-2026-100758", "High Risk", "Security Update"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179297", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13830",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome發布更新修補32個資安漏洞，包含重大等級的CVE-2026-102331",
    summary: "Google於9月29日發布了電腦版與Android版Chrome瀏覽器的更新版本，共修補了32個資安漏洞。其中，一個漏洞被評為重大等級，另有25個高風險等級的弱點。受影響的漏洞包括CVE-2026-102331，這是一個存在於ANGLE元件的記憶體緩衝區溢位類型弱點。根據NVD資料，此漏洞的CVSS嚴重程度評分為9.6分，攻擊者可透過特製的HTML網頁，有機會在沙箱外部執行任意程式碼。為緩解這些弱點，Windows與macOS用戶應更新至154.0.8037.92或154.0.8037.93版本；Linux與Android用戶則應更新至154.0.8037.92版本。",
    tags: ["Google Chrome", "CVE-2026-102331", "記憶體緩衝區溢位", "資安漏洞", "瀏覽器安全"],
    title_en: "Google Chrome releases update patching 32 security vulnerabilities, including critical CVE-2026-102331",
    summary_en: "Google released updated versions of its desktop and Android Chrome browsers on September 29, patching a total of 32 security vulnerabilities. One of these vulnerabilities was rated as critical, and there were an additional 25 high-risk weaknesses. The affected vulnerabilities include CVE-2026-102331, a memory buffer overflow type weakness present in the ANGLE component. According to NVD data, this vulnerability has a CVSS severity score of 9.6, and attackers can potentially execute arbitrary code outside the sandbox using a specially crafted HTML webpage. To mitigate these weaknesses, Windows and macOS users should update to version 154.0.8037.92 or 154.0.8037.93; Linux and Android users should update to version 154.0.8037.92.",
    tags_en: ["Google Chrome", "CVE-2026-102331", "Memory Buffer Overflow", "Security Vulnerability", "Browser Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179291", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13834",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "蘋果緊急修補 CoreGraphics 漏洞 CVE-2026-86950，CISA 警告已遭積極利用",
    summary: "蘋果於 9 月 28 日發布 iOS、iPadOS 及 macOS 26.7.1 更新，緊急修補了圖形處理框架元件 CoreGraphics 的記憶體越界寫入漏洞 CVE-2026-86950。美國網路安全與基礎設施安全局（CISA）隨後宣布，已掌握該弱點遭積極利用的證據，並將其列入已遭利用的漏洞名單（KEV）。該漏洞的 CVSS 嚴重性評分為 8.8，被評估為極度複雜的針對性攻擊，主要鎖定尚未升級 iOS 27 的 iPhone 用戶。聯邦機構被要求在 10 月 2 日前完成修補。修補建議是立即更新至最新的作業系統版本，以防範被積極利用的攻擊。",
    tags: ["Apple", "iOS", "macOS", "CoreGraphics", "CVE-2026-86950", "CISA", "KEV"],
    title_en: "Apple Issues Emergency Patch for CoreGraphics Vulnerability CVE-2026-86950; CISA Warns of Active Exploitation",
    summary_en: "On September 28, Apple released the iOS, iPadOS, and macOS 26.7.1 update, which urgently patched a memory out-of-bounds write vulnerability in the CoreGraphics graphics processing framework, identified as CVE-2026-86950. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) subsequently announced evidence of the weakness being actively exploited, listing it in its Known Exploited Vulnerabilities (KEV) catalog. The vulnerability has a CVSS severity score of 8.8 and is assessed as a highly complex, targeted attack primarily affecting iPhone users who have not upgraded to iOS 27. Federal agencies were required to complete the patch by October 2. The patch recommendation is to immediately update to the latest operating system version to prevent exploitation by active threats.",
    tags_en: ["Apple", "iOS", "macOS", "CoreGraphics", "CVE-2026-86950", "CISA", "KEV"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179285", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13835",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zenity揭露Salesforce Agentforce存在SalesBleed漏洞：透過Web-to-Lead進行間接提示詞注入與資料外傳",
    summary: "資安業者Zenity近日揭露Salesforce AI代理平臺Agentforce存在名為SalesBleed的安全問題。攻擊者無需取得受害企業的Salesforce帳號，即可利用公開的Web-to-Lead功能，透過提交惡意提示詞的潛在客戶資料，將惡意內容寫入CRM系統。當企業員工後續使用Agentforce處理這些資料時，可能觸發間接提示詞注入（Indirect Prompt Injection），導致CRM資料外傳。攻擊鏈的關鍵在於，研究人員找到繞過Salesforce原本Trusted URLs網址遮蔽機制的方法，使Agentforce產生包含CRM資料的攻擊者網域網址。系統解析這些網址時，會發出包含CRM資料的DNS查詢，並將資料傳送至攻擊者控制的權威DNS伺服器，實現無需使用者點擊的資料外傳。Zenity指出，Salesforce已修復相關問題，目前該完整攻擊鏈已無法運作。Salesforce回應表示，目前沒有證據顯示此問題曾被用於攻擊客戶。",
    tags: ["Salesforce", "Agentforce", "Zenity", "間接提示詞注入", "Web-to-Lead", "資料外傳"],
    title_en: "Zenity Discloses SalesBleed Vulnerability in Salesforce Agentforce via Web-to-Lead Indirect Prompt Injection and Data Exfiltration",
    summary_en: "Security firm Zenity recently disclosed a security flaw, named SalesBleed, in the Salesforce AI agent platform, Agentforce. Attackers can exploit this vulnerability using the public Web-to-Lead function to write malicious content into the CRM system by submitting malicious lead data, without needing to obtain the victim company's Salesforce account credentials. When company employees subsequently use Agentforce to process this data, it may trigger Indirect Prompt Injection, leading to CRM data exfiltration. The critical part of the attack chain is that the researchers found a method to bypass Salesforce's original Trusted URLs masking mechanism, causing Agentforce to generate an attacker-controlled domain URL containing CRM data. When the system resolves these URLs, it issues a DNS query containing the CRM data, transmitting the data to an attacker-controlled authoritative DNS server, thereby achieving data exfiltration without requiring user clicks. Zenity noted that Salesforce has patched the relevant issue, and the complete attack chain is currently non-functional. Salesforce responded by stating that there is currently no evidence that this issue has been used to attack customers.",
    tags_en: ["Salesforce", "Agentforce", "Zenity", "Indirect Prompt Injection", "Web-to-Lead", "Data Exfiltration"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179283", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13836",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "網路安全研究揭示 OT/IoMT 設備常與其他系統共用網路區段，增加橫向移動風險",
    summary: "網路安全業者 Forescout 旗下 Vedere Labs 進行研究，檢視了 209 個組織、47,700 個網路區段及超過 250 萬臺裝置，發現許多關鍵設備的網路區段規劃存在重大漏洞。研究指出，含有營運技術（OT）設備的區段中，僅有 13% 為 OT 專用，而醫療物聯網（IoMT）設備的專用區段比例更低，僅為 6%。此外，IP 網路攝影機和 POS 系統的專用區段比例也分別僅約 2% 和 20%。這代表這些關鍵設備與其他類型設備共用網路區段的風險極高。當設備共用區段後，一旦其中一臺設備遭到入侵，攻擊者將更容易利用此機會進行橫向移動，擴大攻擊範圍。實際攻擊事件也證實了此風險，資安業者 S-RM 揭露，Akira 勒索軟體攻擊者曾利用一臺存在漏洞且未受 EDR 保護的網路攝影機，成功部署 Linux 版 Akira 勒索軟體，並透過網路攝影機存取 SMB 共享資料夾，加密了受害企業的網路檔案。",
    tags: ["OT", "IoMT", "網路分段", "橫向移動", "Forescout", "Vedere Labs", "勒索軟體"],
    title_en: "Cybersecurity Research Reveals OT/IoMT Devices Often Share Network Segments with Other Systems, Increasing Lateral Movement Risk",
    summary_en: "Security vendor Forescout's Vedere Labs conducted research across 209 organizations, 47,700 network segments, and over 2.5 million devices, discovering significant vulnerabilities in the network segmentation planning of many critical devices. The research found that in segments containing Operational Technology (OT) devices, only 13% were dedicated to OT, and the proportion of dedicated segments for Internet of Medical Things (IoMT) devices was even lower, at just 6%. Furthermore, dedicated segment proportions for IP network cameras and POS systems were only about 2% and 20%, respectively. This indicates an extremely high risk of these critical devices sharing network segments with other types of equipment. When devices share segments, if one device is compromised, attackers can more easily exploit this opportunity to perform lateral movement, expanding the scope of the attack. Real-world attack incidents have also confirmed this risk; security firm S-RM revealed that Akira ransomware attackers once utilized a vulnerable and EDR-unprotected network camera to successfully deploy the Linux version of Akira ransomware, and subsequently accessed an SMB shared folder via the camera to encrypt the victim company's network files.",
    tags_en: ["OT", "IoMT", "Network Segmentation", "Lateral Movement", "Forescout", "Vedere Labs", "Ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179193", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13869",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新 Spectre-v2 攻擊：BTR 利用 JIT 引擎的殘留分支預測，威脅 Web 瀏覽器與核心安全",
    summary: "安全研究人員發表了 Branch Target Reuse (BTR) 攻擊，這是一種針對即時編譯器（JIT）引擎的新型 Spectre-v2 攻擊。BTR 攻擊的關鍵在於，現代 CPU 在進行自修改後雖然能恢復程式碼一致性，但並不能自動清除殘留的間接分支預測條目（stale indirect branch prediction entries）。在 JIT 引擎中，這些殘留目標可能比原始程式碼壽命更長，當程式碼快取（code cache）重新填充時，攻擊者可以利用這些殘留目標，實現「推測性執行後釋放」（speculative execute-after-free）原語。這使得攻擊者能夠劫持推測控制流，指向已過時的偏移量，從而繞過軟體加固或觸及未對齊的 Gadgets。受影響的範圍包括 Web 瀏覽器、語言運行時和作業系統核心，例如 Linux cBPF、Oracle GraalVM 和 SpiderMonkey (Firefox JIT)。為修復此漏洞，Linux 核心開發者為 x86 平台新增了 IBPB 機制，並分配了兩個 CVE：CVE-2026-64507 和 CVE-2026-64508。Oracle GraalVM 則透過隨機化 JIT 程式碼快取位置來減緩區域重用。Mozilla 目前正將重點放在網站隔離的部署上。",
    tags: ["Spectre-v2", "BTR", "JIT 引擎", "CVE-2026-64507", "CVE-2026-64508", "Linux kernel", "GraalVM"],
    title_en: "New Spectre-v2 Attack: BTR Exploits Residual Branch Prediction in JIT Engines, Threatening Web Browsers and Core Security",
    summary_en: "Security researchers have disclosed a Branch Target Reuse (BTR) attack, a novel Spectre-v2 vulnerability targeting Just-In-Time (JIT) engines. The core of the BTR attack lies in the fact that while modern CPUs restore code consistency after self-modification, they cannot automatically clear residual indirect branch prediction entries. In JIT engines, these residual targets may persist longer than the original code's lifespan. When the code cache is repopulated, attackers can exploit these residual targets to achieve a 'speculative execute-after-free' primitive. This allows attackers to hijack the speculative control flow to point to stale offsets, thereby bypassing software hardening or reaching unaligned gadgets. Affected areas include web browsers, language runtimes, and operating system kernels, such as Linux cBPF, Oracle GraalVM, and SpiderMonkey (Firefox JIT). To mitigate this vulnerability, Linux kernel developers introduced the IBPB mechanism for the x86 platform and assigned two CVEs: CVE-2026-64507 and CVE-2026-64508. Oracle GraalVM is addressing this by randomizing the JIT code cache location to mitigate region reuse. Mozilla is currently focusing on implementing site isolation.",
    tags_en: ["Spectre-v2", "BTR", "JIT Engine", "CVE-2026-64507", "CVE-2026-64508", "Linux kernel", "GraalVM"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/30/1", lang: "EN" }
    ]
  },
  {
    id: "20260930-13883",
    trackers: ["security"],
    category: "合規指引",
    title: "三星與 LG 智慧電視個人資料外洩爭議：如何關閉自動內容識別與管理隱私權",
    summary: "智慧電視因內建攝影機和麥克風，被指能超秒級收集用戶的觀看模式、消費資訊甚至政治傾向等高度敏感的個人資料。文章指出，自動內容識別（ACR）功能會擷取螢幕影像和音訊來收集觀看數據，用戶應在電視的「設定」菜單中關閉相關功能。以三星電視為例，需進入「一般與個人隱私」後，撤銷智慧 Hub 使用條款、觀看歷史資訊收集和興趣基礎廣告服務的同意。LG電視則需在「設定」>「一般」>「系統」>「其他設定」中，將「Live Plus」和「Live Promotion」功能關閉，以阻斷觀看數據分析連結。此外，用戶應定期檢查第三方應用程式的權限，若無必要，應在「應用程式管理」中禁用，防止透過應用程式間的間接路徑洩漏資訊。對於麥克風和攝影機，若不使用語音或影像通訊功能，建議物理上使用遮蔽物（如貼紙）進行遮擋，以確保隱私安全。",
    tags: ["智慧電視", "ACR", "個人隱私", "三星電子", "LG電子", "數據安全"],
    title_en: "Samsung and LG Smart TV Data Leak Controversy: How to Disable Automatic Content Recognition and Manage Privacy",
    summary_en: "Smart TVs, due to their built-in cameras and microphones, have been accused of collecting highly sensitive personal data, such as viewing patterns, consumption information, and even political leanings, at ultra-fast speeds. The article points out that the Automatic Content Recognition (ACR) feature captures screen images and audio to collect viewing data, and users should disable relevant functions in the TV's 'Settings' menu. For Samsung TVs, users must go to 'General and Privacy' and revoke consent for Smart Hub usage terms, viewing history data collection, and interest-based advertising services. For LG TVs, users need to navigate to 'Settings' > 'General' > 'System' > 'Other Settings' and disable 'Live Plus' and 'Live Promotion' features to block viewing data analysis links. Furthermore, users should regularly check third-party application permissions and disable them in 'Application Management' if they are not necessary, preventing information leakage through indirect application paths. For the microphone and camera, if voice or video communication functions are not used, it is recommended to physically cover them (e.g., with stickers) to ensure privacy and security.",
    tags_en: ["Smart TV", "ACR", "Privacy", "Samsung Electronics", "LG Electronics", "Data Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146087", lang: "EN" }
    ]
  },
  {
    id: "20260930-13882",
    trackers: ["eu_cra"],
    category: "開源影響",
    title: "駭客利用自訂 GPT 偽裝正規服務，實施「點擊修復」攻擊竊取系統資訊",
    summary: "資安公司 Huntress 揭露了一種新型的網路攻擊手法，攻擊者利用 ChatGPT 的自訂 GPT 功能進行社會工程學攻擊，稱為「ClickFix」攻擊。攻擊者創建了偽裝成正規產品（如「Plus 5.6」）的自訂 GPT，誘騙受害者透過 Google 廣告進入。該 GPT 偽裝成需要升級或使用替代網域，並將受害者引導至一個看似 Cloudflare 的假頁面。在這個假頁面，受害者被指示執行 PowerShell 指令，進而下載並執行惡意安裝檔案。攻擊鏈包含多層複雜技術：第一階段利用 DLL Side-loading 技術，讓正規簽名程式載入惡意 DLL，並透過註冊表鍵值和排程任務確保持久性。第二階段，惡意程式偽裝成音訊檔案，進行系統偵察，最終植入的惡意程式是一個遠端控制程式（RAT）。該 RAT 能夠收集系統資訊，並透過 DNS-over-HTTPS 等方式與 C&C 伺服器通訊。OpenAI 曾刪除相關 GPT，但攻擊者很快又發布了第二個版本，改變了安裝方式，甚至將載入器移動到 Microsoft NuGet 套件中。Huntress 警告，攻擊者持續利用自訂 GPT 的特性進行社會工程，建議用戶提高警覺，並留意來源不明的指令或檔案。",
    tags: ["ChatGPT", "自訂 GPT", "ClickFix", "DLL Side-loading", "遠端控制程式", "社會工程學"],
    title_en: "Hackers Use Custom GPTs Disguised as Legitimate Services to Execute 'ClickFix' Attack and Steal System Information",
    summary_en: "Security firm Huntress has revealed a novel cyber attack technique where attackers use ChatGPT's custom GPT feature to conduct social engineering attacks, dubbed the 'ClickFix' attack. The attackers created custom GPTs disguised as legitimate products (such as 'Plus 5.6'), luring victims through Google Ads. These GPTs mimic needing an upgrade or using an alternative domain, directing the victim to a fake page that appears to be Cloudflare. On this fake page, the victim is instructed to run a PowerShell command, which subsequently downloads and executes a malicious installation file. The attack chain involves multiple layers of complex technology: the first stage utilizes DLL Side-loading techniques, allowing a legitimate signed program to load a malicious DLL, and ensures persistence through registry keys and scheduled tasks. In the second stage, the malicious program disguises itself as an audio file to perform system reconnaissance, culminating in the deployment of a Remote Access Trojan (RAT). This RAT can collect system information and communicate with a Command and Control (C&C) server via methods like DNS-over-HTTPS. Although OpenAI previously deleted the related GPT, the attackers quickly released a second version, changing the installation method and even moving the loader into a Microsoft NuGet package. Huntress warns that attackers continue to leverage the custom GPT feature for social engineering, advising users to remain vigilant and scrutinize any instructions or files from unknown sources.",
    tags_en: ["ChatGPT", "Custom GPT", "ClickFix", "DLL Side-loading", "Remote Access Trojan", "Social Engineering"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146093", lang: "EN" }
    ]
  },
  {
    id: "20260930-13825",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Amazon Corretto 27 支援 TLS 1.3 後量子混合金鑰交換，強化對量子運算威脅的防護",
    summary: "AWS推出的 Amazon Corretto 27，定位為功能發行版本（Feature Release），旨在提升Java應用程式的安全性與法規遵循能力。與Oracle JDK 27類似，Corretto 27內建JEP 527，支援TLS 1.3的後量子混合金鑰交換（Post-Quantum Hybrid Key Exchange）。此功能允許在TLS 1.3連線中結合傳統與後量子金鑰交換演算法，為未來量子運算帶來的威脅提供額外防護。\n此外，Amazon Corretto 27也內建JEP 536，提供JFR（Java Flight Recorder）處理程序內資料遮蔽機制（In-Process Data Redaction）。此機制可在收集Java應用程式和JVM資料的JFR記錄程序離開JVM前，自動遮蔽其中的敏感資料。這對於處理客戶、員工或受監管敏感資料的AI系統尤其重要，有助於在進行效能分析與診斷時，同時滿足合規、隱私與安全要求。",
    tags: ["Amazon Corretto", "AWS", "Java", "TLS 1.3", "後量子密碼學", "JEP 527", "JEP 536"],
    title_en: "Amazon Corretto 27 Supports TLS 1.3 Post-Quantum Hybrid Key Exchange, Enhancing Protection Against Quantum Computing Threats",
    summary_en: "AWS has released Amazon Corretto 27, a Feature Release designed to enhance the security and regulatory compliance capabilities of Java applications. Similar to Oracle JDK 27, Corretto 27 includes JEP 527, which supports Post-Quantum Hybrid Key Exchange for TLS 1.3. This feature allows the combination of traditional and post-quantum key exchange algorithms within a TLS 1.3 connection, providing additional protection against future quantum computing threats.\n\nFurthermore, Amazon Corretto 27 incorporates JEP 536, offering In-Process Data Redaction for Java Flight Recorder (JFR) processes. This mechanism automatically redacts sensitive data within JFR records before they leave the JVM when collecting data from Java applications and the JVM. This is particularly crucial for AI systems handling customer, employee, or regulated sensitive data, helping to meet compliance, privacy, and security requirements while performing performance analysis and diagnostics.",
    tags_en: ["Amazon Corretto", "AWS", "Java", "TLS 1.3", "Post-Quantum Cryptography", "JEP 527", "JEP 536"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179299", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13829",
    trackers: ["security"],
    category: "前瞻技術",
    title: "白宮與六大科技巨頭簽署「超級智慧協議」，要求建立四層AI安全管控機制",
    summary: "美國白宮於9月29日召集包括Google、OpenAI、Meta、Anthropic、xAI及Nvidia在內的六家AI與科技巨頭，簽署了《白宮超級智慧協議》。該協議旨在應對前沿AI模型的發展帶來的安全風險，要求參與企業建立一套包含四層的AI安全管控與稽核機制。這套機制要求企業在模型訓練與部署期間，持續監控其能力與行為，特別關注網路、生物及化學安全等潛在風險。此外，協議還要求設立專責內部團隊進行安全措施的運作確認，並引入獨立外部稽核，由第三方評估安全措施的有效性。最後，需在董事會設立獨立委員會，負責監督內外部稽核結果並確保問題得到改善。雖然該協議目前為企業自願承諾，不具法律強制力，但白宮指出，隨著技術發展，未來可能將納入法律或監管制度，顯示政府正積極介入AI的風險管理與標準制定。",
    tags: ["AI安全", "白宮", "Google", "OpenAI", "Meta", "Anthropic", "Nvidia", "超級智慧"],
    title_en: "White House and Six Tech Giants Sign 'Super Intelligence Accord,' Mandating Four-Layer AI Safety Control Mechanism",
    summary_en: "On September 29th, the U.S. White House convened six major AI and technology giants, including Google, OpenAI, Meta, Anthropic, xAI, and Nvidia, to sign the 'White House Super Intelligence Accord.' This agreement aims to address the security risks posed by the development of advanced AI models, requiring participating companies to establish a four-layer AI safety control and auditing mechanism. This mechanism mandates that companies continuously monitor the capabilities and behaviors of their models during both training and deployment, with a particular focus on potential risks such as cyber, bio, and chemical security. Furthermore, the accord requires the establishment of dedicated internal teams to confirm the operation of safety measures, alongside introducing independent external audits by third parties to assess the effectiveness of these safety measures. Finally, an independent committee must be established within the board of directors to oversee both internal and external audit results and ensure that issues are remediated. Although the accord is currently a voluntary corporate commitment and lacks legal enforceability, the White House noted that as technology advances, it may be incorporated into law or regulatory frameworks, indicating the government's active involvement in AI risk management and standard setting.",
    tags_en: ["AI Safety", "White House", "Google", "OpenAI", "Meta", "Anthropic", "Nvidia", "Super Intelligence"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179294", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13838",
    trackers: ["security"],
    category: "前瞻技術",
    title: "微軟推出整合式安全維運中心（ISOC）預覽版，整合SIEM、XDR與AI能力",
    summary: "微軟於9月23日宣布推出整合式安全維運中心（Integrated Security Operations Center, ISOC）的公開預覽版。ISOC旨在將安全資訊與事件管理（SIEM）、延伸偵測及回應（XDR）、威脅情報、自動化及AI功能整合至Microsoft Defender入口網站。此舉旨在解決資安人員在調查事件時，需要跨工具切換、整理多源安全訊號及重建事件脈絡的痛點。ISOC允許資安人員與AI代理共同利用整合的安全訊號，進行威脅調查並採取應對措施。ISOC並非獨立產品，部分原需額外購買Microsoft Sentinel的功能，如活頁簿（Workbooks）和自然語言自動化劇本（playbook），現可由符合資格的Microsoft 365 E5及E7客戶直接在Microsoft Defender使用。若需匯入更多安全資料，可透過超過500種資料連接器，但資料擷取可能產生額外費用。目前ISOC預覽版主要提供給具備Microsoft Defender Suite、Microsoft 365 E5或E7授權，且未使用Microsoft Sentinel工作區的客戶參與。從11月15日起，符合授權資格的既有Sentinel客戶亦可選擇採用ISOC，微軟仍會持續提供Microsoft Sentinel。",
    tags: ["Microsoft Defender", "ISOC", "SIEM", "XDR", "AI", "Microsoft 365 E5", "Microsoft Sentinel"],
    title_en: "Microsoft Launches Integrated Security Operations Center (ISOC) Preview, Integrating SIEM, XDR, and AI Capabilities",
    summary_en: "On September 23, Microsoft announced the public preview of the Integrated Security Operations Center (ISOC). ISOC aims to integrate Security Information and Event Management (SIEM), Extended Detection and Response (XDR), threat intelligence, automation, and AI functionalities into the Microsoft Defender portal. This initiative addresses the pain points faced by security personnel, such as the need to switch between multiple tools, correlate multi-source security signals, and reconstruct event context during investigations. ISOC allows security personnel and AI agents to utilize integrated security signals for threat investigation and response actions. ISOC is not a standalone product; features previously requiring separate purchases from Microsoft Sentinel, such as Workbooks and natural language automation playbooks, are now available directly within Microsoft Defender for eligible Microsoft 365 E5 and E7 customers. While over 500 data connectors are available for ingesting more security data, data ingestion may incur additional costs. Currently, the ISOC preview is primarily offered to customers with Microsoft Defender Suite, Microsoft 365 E5, or E7 licenses who are not utilizing a Microsoft Sentinel workspace. Starting November 15, existing Sentinel customers with qualifying licenses can also opt into ISOC, though Microsoft will continue to provide Microsoft Sentinel.",
    tags_en: ["Microsoft Defender", "ISOC", "SIEM", "XDR", "AI", "Microsoft 365 E5", "Microsoft Sentinel"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179233", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260930-13849",
    trackers: ["security"],
    category: "前瞻技術",
    title: "科技巨頭簽署自律協議應對AI風險：Trump促成頂尖AI公司建立內部監管機制",
    summary: "前總統Donald Trump宣布，他與包括Anthropic、Google、Meta、OpenAI、Nvidia、xAI等頂尖AI公司高層，在白宮舉行會議後，簽署了一項自願協議。該協議旨在應對公眾對AI技術的擔憂，並要求這些公司實施「穩健的內部控制」，並與「獨立外部審計師」合作進行評估。此外，各公司還需在董事會內設立委員會，負責評估內部和外部審計報告。協議雖然為未來的法規制定打開了可能性，但目前僅聚焦於這四個自願步驟。儘管部分專家對「自律」的可靠性表示懷疑，認為應透過強健的法律責任和監管來降低風險，但該協議的簽署，反映了產業在推動AI創新與應對潛在風險之間尋求平衡的努力。",
    tags: ["AI", "自律監管", "Anthropic", "Google", "Meta", "OpenAI", "Nvidia"],
    title_en: "Tech Giants Sign Voluntary Agreement to Address AI Risks: Trump Facilitates Internal Governance Mechanisms at Top AI Companies",
    summary_en: "Former President Donald Trump announced that following a meeting at the White House with top AI companies, including Anthropic, Google, Meta, OpenAI, Nvidia, and xAI, a voluntary agreement was signed. This agreement aims to address public concerns regarding AI technology and mandates these companies to implement 'robust internal controls' and collaborate with 'independent external auditors' for evaluation. Furthermore, the companies are required to establish a committee within their boards of directors responsible for reviewing both internal and external audit reports. Although the agreement opens possibilities for future regulation, it currently focuses only on these four voluntary steps. Despite some experts expressing skepticism regarding the reliability of 'self-regulation,' arguing that strong legal accountability and regulation are necessary to mitigate risks, the signing of this agreement reflects the industry's effort to balance AI innovation with addressing potential risks.",
    tags_en: ["AI", "Self-Regulation", "Anthropic", "Google", "Meta", "OpenAI", "Nvidia"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/trump-says-top-tech-firms-have-signed-accord-to-self-police-ai-development", lang: "EN" }
    ]
  },
  {
    id: "20260930-13910",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Pay 印度正式推出：Axis Bank 信用卡用戶可使用支付服務",
    summary: "Apple Pay 支付服務現已在印度正式推出，最初宣布後已歷經近十二年時間。本次擴展的服務範圍涵蓋使用 Axis Bank 發行的 Visa 和 Mastercard 信用卡用戶。這項服務的推出，使得 Apple Pay 能夠進入印度市場，成為該國少數尚未支援此功能的重大市場之一。用戶可透過此服務在支援的商家處使用 Apple Pay 進行支付。本更新主要為市場擴展公告，目前未提供具體的技術細節或漏洞資訊，建議用戶留意 Apple 官方公告，確保設備系統及支付應用程式保持最新。",
    tags: ["Apple Pay", "印度", "Axis Bank", "Visa", "Mastercard", "支付服務"],
    title_en: "Apple Pay Officially Launches in India: Axis Bank Credit Card Users Can Utilize Payment Service",
    summary_en: "The Apple Pay payment service has officially launched in India, nearly twelve years after its initial announcement. This expanded service now covers users with Visa and Mastercard credit cards issued by Axis Bank. The launch allows Apple Pay to enter the Indian market, which was previously one of the major markets in the country that did not support this feature. Users can utilize Apple Pay for payments at supported merchants through this service. This update is primarily a market expansion announcement and does not provide specific technical details or vulnerability information. Users are advised to monitor official Apple announcements and ensure their device system and payment applications are kept up to date.",
    tags_en: ["Apple Pay", "India", "Axis Bank", "Visa", "Mastercard", "Payment Service"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/29/apple-pay-now-rolling-out-to-axis-bank-customers-in-india", lang: "EN" }
    ]
  },
  {
    id: "20260930-13911",
    trackers: ["os"],
    category: "重點關注",
    title: "美銀警告：Meta Muse AI 代理人威脅 Apple 生態系統，可能繞過其服務收入",
    summary: "銀行美國（Bank of America）發布投資報告指出，Meta 的 Muse AI 代理人等第三方 AI 代理人，可能日益繞過 Apple 的生態系統，威脅其服務收入。報告指出，Apple 面臨的風險是即使維持了設備銷售，仍可能失去產品發現、推薦和交易的環節。Muse 能夠瀏覽網頁、填寫表單、預訂行程、發送電子郵件和代表用戶進行購買，其商業整合範圍包括 Shopify、Shop Pay、Expedia 和 PayPal 等。分析師認為，未來「選擇代理人者」將成為商家，而「擁有代理人者」將收集原本屬於作業系統、搜尋和應用商店的導流經濟學。報告建議 Apple 必須加速整合其服務、晶片、支付、隱私和 Siri AI 團隊，以應對 AI 代理人帶來的挑戰。此外，報告也指出 Apple 的 Siri AI 在持續背景任務、廣泛的第三方動作支援和專門的代理人支付通道等方面，與 Muse 等競爭對手仍有差距。",
    tags: ["Apple", "Meta", "Muse AI", "AI 代理人", "服務收入", "生態系統", "投資分析"],
    title_en: "Bank of America Warns: Meta Muse AI Agents Threaten Apple Ecosystem, Potentially Bypassing Service Revenue",
    summary_en: "A Bank of America investment report indicates that third-party AI agents, such as Meta's Muse AI, may increasingly bypass Apple's ecosystem, threatening its service revenue. The report notes that the risk Apple faces is the potential loss of product discovery, recommendation, and transaction segments, even if device sales are maintained. Muse is capable of browsing web pages, filling out forms, booking trips, sending emails, and making purchases on behalf of users. Its commercial integration scope includes platforms like Shopify, Shop Pay, Expedia, and PayPal. Analysts suggest that in the future, the 'chooser of agents' will become the merchant, while the 'owner of agents' will capture the traffic economy that previously belonged to the operating system, search, and app store. The report advises Apple to accelerate the integration of its services, chips, payments, privacy, and Siri AI teams to address the challenges posed by AI agents. Furthermore, the report points out that Apple's Siri AI still lags behind competitors like Muse in areas such as continuous background tasks, broad third-party action support, and dedicated agent payment channels.",
    tags_en: ["Apple", "Meta", "Muse AI", "AI Agents", "Service Revenue", "Ecosystem", "Investment Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/29/bank-of-america-says-metas-muse-highlights-a-new-risk-for-apples-services-revenue", lang: "EN" }
    ]
  },
  {
    id: "20260930-13974",
    trackers: ["os"],
    category: "重點關注",
    title: "川普行政部門促使六大AI公司簽署「白宮超智能協定」，建立自訂的非約束性AI安全規範",
    summary: "美國前總統Donald Trump促使包括Meta、Google、OpenAI、Anthropic、Nvidia和XAI在內的六家領先AI公司，簽署了一份名為「White House Accord on Superintelligence」的非約束性文件。該協定旨在建立關於「超智能」（Superintelligence）的共同承諾，強調各公司需自行建立穩健的內部流程和控制機制，以確保其前沿模型（frontier models）的開發和部署是安全的。文件提出了四層控制與審計層級：1. 建立內部控制監測模型在網路安全、生物安全和化學威脅等領域的行為；2. 賦予內部團隊負責監控和修復問題；3. 與獨立外部審計機構合作進行評估；4. 指定董事會獨立委員會監督所有控制和審計活動。然而，該文件並未定義「穩健」的具體標準，也未規定外部審計的頻率。這份協定實質上讓參與公司自行制定規則，並為未來將這些步驟編纂成法律留下了可能性。此外，川普還簽署了行政命令，要求聯邦政府機構在官方文件中使用「Super Intelligence」（SI）取代「Artificial Intelligence」（AI）。",
    tags: ["AI", "Superintelligence", "Donald Trump", "Meta", "Google", "OpenAI", "Anthropic", "Nvidia"],
    title_en: "Trump Administration Urges Six Major AI Firms to Sign 'White House Accord on Superintelligence,' Establishing Voluntary AI Safety Guidelines",
    summary_en: "Former U.S. President Donald Trump prompted six leading AI companies—including Meta, Google, OpenAI, Anthropic, Nvidia, and XAI—to sign a non-binding document titled the 'White House Accord on Superintelligence.' The accord aims to establish a shared commitment regarding 'Superintelligence,' emphasizing that each company must independently establish robust internal processes and control mechanisms to ensure the safe development and deployment of their frontier models. The document proposes four layers of control and auditing: 1. Establishing internal control models to monitor behavior in areas such as cybersecurity, biosecurity, and chemical threats; 2. Assigning internal teams responsible for monitoring and remediating issues; 3. Collaborating with independent external auditing bodies for evaluation; and 4. Designating an independent board committee to oversee all control and auditing activities. However, the document fails to define specific standards for 'robustness' or mandate the frequency of external audits. Essentially, the accord allows participating companies to self-regulate, leaving the possibility of codifying these steps into law in the future. Furthermore, Trump signed an executive order requiring federal government agencies to use 'Super Intelligence' (SI) instead of 'Artificial Intelligence' (AI) in official documents.",
    tags_en: ["AI", "Superintelligence", "Donald Trump", "Meta", "Google", "OpenAI", "Anthropic", "Nvidia"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/09/30/trump-administration-gets-big-tech-to-sign-weak-non-binding-ai-regulations/5299955", lang: "EN" }
    ]
  },
  {
    id: "20260930-13877",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Intellivix與新加坡在地合作夥伴簽署MOU，加速搶攻東南亞安全AI市場",
    summary: "Intellivix在「Tech Week Singapore 2026」活動中，與Gallagher Security、Aicon T&G、RH Synergy、IDLink Systems等四家位於新加坡及東協地區的主要安全基礎設施營運商簽署了連環業務合作備忘錄（MOU）。本次合作旨在正式進軍東南亞的「安全AI市場」。Intellivix提供的「生成式智慧監控系統」（GenAMS），目標是取代合作夥伴現有的龐大CCTV及實體安全基礎設施，而是利用現有的影像串流，結合高階AI技術。此系統將使監控體系從依賴人眼觀察，轉變為AI能夠24小時自主判斷與應對的模式。主要功能包括即時偵測火災、跌倒、未經授權闖入、交通事故、違規丟棄垃圾等多種異常跡象，並利用生成式AI自動撰寫事故經過報告，為公共及工業安全服務。特別值得一提的是，Intellivix的下一代全天候視覺AI硬體「VIXallcam」，即使在高溫潮濕氣候和惡劣天氣下，也能在邊緣（Edge）端實現基於深度學習的影像復原及高精度異常跡象偵測演算法，因此在當地市場獲得了高度評價。合作夥伴計劃將此解決方案優先應用於智慧城市、國家道路網路、大型物流基礎設施等專案。",
    tags: ["Intellivix", "Gallagher Security", "GenAMS", "VIXallcam", "東南亞", "AI", "實體安全"],
    title_en: "Intellivix Signs MOUs with Singapore Local Partners to Accelerate Entry into Southeast Asian Security AI Market",
    summary_en: "At 'Tech Week Singapore 2026,' Intellivix signed multiple Memorandums of Understanding (MOUs) with four major security infrastructure operators located in Singapore and the ASEAN region: Gallagher Security, Aicon T&G, RH Synergy, and IDLink Systems. This collaboration aims to formally enter the Southeast Asian 'Security AI market.' Intellivix's 'Generative AI Monitoring System' (GenAMS) is designed to replace partners' existing extensive CCTV and physical security infrastructure. Instead, it leverages existing video streams combined with advanced AI technology. This system shifts monitoring from relying on human observation to a model where AI can autonomously detect and respond 24 hours a day. Key functionalities include real-time detection of anomalies such as fire, falls, unauthorized intrusion, traffic accidents, and illegal waste dumping. Furthermore, it uses generative AI to automatically draft incident reports for public and industrial safety services. Notably, Intellivix's next-generation all-weather visual AI hardware, 'VIXallcam,' has received high praise in the local market because it can perform deep learning-based image restoration and high-precision anomaly detection algorithms at the Edge, even in hot, humid, and adverse weather conditions. The partners plan to prioritize applying this solution in projects such as smart cities, national road networks, and large-scale logistics infrastructure.",
    tags_en: ["Intellivix", "Gallagher Security", "GenAMS", "VIXallcam", "Southeast Asia", "AI", "Physical Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146115", lang: "EN" }
    ]
  },
  {
    id: "20260930-13878",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "微軟專家預測AI時代金融安全趨勢：從隔離式防禦轉向自律型代理安全",
    summary: "微軟資深安全顧問張光雲在「微軟產業峰會」上發表演說，指出金融安全防禦的趨勢正從傳統的「隔離式」轉向以「人工智慧（AI）」為核心的模式。隨著金融監管機構逐步放寬「網路隔離」的規定，企業若具備高安全能力，將能更充分地利用雲端和AI的效益。然而，AI的普及帶來了新的風險，張顧問預測未來將出現大量未經授權的AI代理（Shadow AI），並面臨數據外洩和AI系統被操縱的威脅。為應對此挑戰，微軟提出「AI核心新安全營運模型」，主張將重複性的安全任務委派給AI代理，讓人類安全人員專注於整體安全策略的協調（Orchestration）。他強調，安全人員必須從單純的警報處理員，進化為能夠指揮AI執行大規模任務、達成實際業務成果的「前沿安全工程師」。微軟的Project Perception系統展示了AI代理分析威脅指標並制定應對計畫的能力，甚至成功預識別了多個嚴重漏洞（CVE）。",
    tags: ["微軟", "AI安全", "金融安全", "網路隔離", "Agentic Security", "CVE"],
    title_en: "Microsoft Expert Predicts AI Era Financial Security Trends: Shift from Isolated Defense to Autonomous Agent Security",
    summary_en: "At the 'Microsoft Industry Summit,' senior security consultant Guangyun Zhang delivered a presentation highlighting that the trend in financial security defense is shifting from traditional 'isolation-based' methods to a model centered on 'Artificial Intelligence (AI).' As financial regulatory bodies gradually relax 'network isolation' requirements, enterprises with high security capabilities will be able to utilize the benefits of cloud and AI more fully. However, the proliferation of AI brings new risks. Consultant Zhang predicts the future will see a large number of unauthorized AI agents (Shadow AI), facing threats of data leakage and AI system manipulation. To address this challenge, Microsoft proposed a 'New AI Core Security Operating Model,' advocating for the delegation of repetitive security tasks to AI agents, allowing human security personnel to focus on overall security strategy orchestration. He emphasized that security personnel must evolve from mere alert handlers into 'Frontline Security Engineers' capable of directing AI to execute large-scale tasks and achieve tangible business outcomes. Microsoft's Project Perception system demonstrated the ability of AI agents to analyze threat intelligence and formulate response plans, even successfully predicting multiple severe vulnerabilities (CVE).",
    tags_en: ["Microsoft", "AI Security", "Financial Security", "Network Isolation", "Agentic Security", "CVE"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146113", lang: "EN" }
    ]
  },
  {
    id: "20260930-13879",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "微軟提出「信任控制層」架構，協助金融業應對 AI 擴散與資安挑戰",
    summary: "微軟（MS）在產業高峰會上指出，金融業的 AI 應用正從導入階段邁向擴散期，但企業普遍面臨「法規與合規」的阻礙，其中「資安與資料外洩」是主要顧慮。根據 MS 數據，雖然高比例的金融機構已規劃 AI 預算，但實際將 AI 應用於核心業務的比例仍偏低。為了解決資安困境，MS 建議建立「信任控制層」（Trust Control Plane）。這要求在 AI 演進為自主型 Agent 的過程中，必須設定強大的權限邊界，並建立事後證明機制，以確保安全。MS 建議整合從「Copilot」到「Agent 365」的平台，並與「Microsoft Defender」連動，從所有層面確保可觀察性與控制力。最終，只有明確區分 AI 工程師與資安部門職責，並建立數據治理（Data Governance）的控制能力，才能讓 AI 順利進入金融核心業務。",
    tags: ["微軟", "AI", "金融科技", "Trust Control Plane", "Agent 365", "數據治理"],
    title_en: "Microsoft Proposes 'Trust Control Plane' Architecture to Help Financial Sector Address AI Diffusion and Security Challenges",
    summary_en: "At an industry summit, Microsoft (MS) noted that the financial sector's adoption of AI is transitioning from the introduction phase to the diffusion phase. However, enterprises generally face obstacles related to 'regulation and compliance,' with 'cybersecurity and data leakage' being the primary concern. According to MS data, although a high proportion of financial institutions have planned AI budgets, the actual proportion applying AI to core business remains low. To solve this security dilemma, MS recommends establishing a 'Trust Control Plane.' This requires setting strong permission boundaries and establishing post-facto proof mechanisms as AI evolves into autonomous Agents, ensuring safety. MS suggests integrating a platform ranging from 'Copilot' to 'Agent 365,' and linking it with 'Microsoft Defender' to ensure observability and control at all levels. Ultimately, only by clearly separating the responsibilities of AI engineers and security departments, and establishing data governance control capabilities, can AI successfully enter core financial operations.",
    tags_en: ["Microsoft", "AI", "Fintech", "Trust Control Plane", "Agent 365", "Data Governance"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146111", lang: "EN" }
    ]
  },
  {
    id: "20260930-13881",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "지니언스 (Genianse) 榮獲「2026年韓國就業最佳企業」，推動AI轉型與工作模式創新",
    summary: "資安企業지니언스（Genianse）因推動先進組織文化，包括參與「2026年韓國工作週4.5天制試點事業」及實踐週年工作制等，榮獲勞動部主辦的「2026年韓國就業最佳企業」認證。該企業被肯定在創造優質就業機會、實踐工作與生活平衡、改善工作環境等方面表現卓越。지니언스透過擴大青年及弱勢群體職位，推動能力導向的招聘，並積極支持育嬰假等福利。此外，公司推動了彈性工時制度、居家辦公，並將重複性、標準化的工作流程轉移至AI系統，使員工能專注於更具創造性和戰略性的核心任務。公司表示，將持續結合AI技術創新與業務流程改革，打造高效率的工作環境，並藉此強化招募品牌，加速在全球資安市場的成長。",
    tags: ["지니언스", "AI", "週4.5天制", "組織文化", "資安"],
    title_en: "Genianse Awarded '2026 Korea Best Employer' for Driving AI Transformation and Innovative Work Models",
    summary_en: "Cybersecurity company Genianse received the '2026 Korea Best Employer' certification, organized by the Ministry of Employment and Labor. This recognition acknowledges the company's outstanding performance in creating quality employment opportunities, promoting work-life balance, and improving the working environment, including participation in the '2026 Korea 4.5-Day Work Week Pilot Project' and implementing annual work systems. Genianse promotes capability-based recruitment by expanding roles for youth and vulnerable groups, and actively supports benefits such as parental leave. Furthermore, the company has introduced flexible working hours and remote work options, while transitioning repetitive and standardized workflows to AI systems. This allows employees to focus on more creative and strategic core tasks. The company stated that it will continue to combine AI technology innovation with business process reform to build a highly efficient work environment, thereby strengthening its recruitment brand and accelerating its growth in the global cybersecurity market.",
    tags_en: ["Genianse", "AI", "4.5-Day Work Week", "Organizational Culture", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146097", lang: "EN" }
    ]
  },
  {
    id: "20260930-13884",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Theori AI平台Xint受美國國防部DARPA委託，進行應用程式與供應鏈安全分析",
    summary: "安全公司Theori（티오리）開發的AI自律模擬駭客平台Xint，已獲美國國防高等研究計畫局（DARPA）委託，用於分析美國國防部系統的應用程式與開源通訊軟體。該平台能夠對國防部使用的自研應用程式和開源通訊軟體進行精準分析，並透過二進位分析評估軟體供應鏈的風險。在一次測試中，Xint分析了加密通訊應用Signal的Android版本，成功在短時間內發現了三處因不當例外處理（uncaught-exception）導致的漏洞。這些漏洞已成功被Signal開發團隊修補，並納入8.11版本更新。Theori指出，即使是加密通訊應用，其周邊的網路或作業系統相關程式碼也常缺乏嚴格檢驗，容易成為攻擊目標，Xint旨在即使不具備原始碼，也能透過二進位檔案進行定期且精密的驗證。",
    tags: ["Theori", "Xint", "DARPA", "美國國防部", "應用程式安全", "Supply Chain Risk"],
    title_en: "Theori's AI Platform Xint Commissioned by US Department of Defense's DARPA for Application and Supply Chain Security Analysis",
    summary_en: "The AI autonomous simulation hacking platform Xint, developed by security company Theori, has been commissioned by the U.S. Department of Defense's Defense Advanced Research Projects Agency (DARPA). It is used to analyze applications and open-source communication software used by the Department of Defense systems. The platform can precisely analyze proprietary applications and open-source communication software used by the Department of Defense, and assess software supply chain risks through binary analysis. In one test, Xint analyzed the Android version of the encrypted communication application Signal, successfully discovering three vulnerabilities caused by uncaught exceptions in a short period. These vulnerabilities were successfully patched by the Signal development team and included in the 8.11 version update. Theori noted that even encrypted communication applications often lack rigorous scrutiny in their surrounding network or operating system related code, making them susceptible to attack. Xint aims to provide regular and precise verification even when source code is unavailable, using binary files.",
    tags_en: ["Theori", "Xint", "DARPA", "Department of Defense", "Application Security", "Supply Chain Risk"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146094", lang: "EN" }
    ]
  }
];
