// data-20260811.js — 2026-08-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-11"] = [
  {
    id: "20260811-001",
    trackers: ["security"],
    category: "重大事件",
    title: "美韓執法機構發布聯合公告：Gunra勒索軟體濫用Fortinet漏洞與VPN弱點入侵關鍵基礎設施",
    summary: "美國FBI、CISA與韓國警察廳發布聯合警告，指出Gunra勒索軟體採用RaaS模式營運，主要針對政府機構與關鍵基礎設施。攻擊者濫用Fortinet設備漏洞（CVE-2024-55591、CVE-2025-24472）、暴露的憑證及SSH存取控制漏洞入侵VPN閘道，甚至透過預設憑證取得管理員權限並安裝OpenSSH建立遠端通道。入侵後，攻擊者利用Impacket與SMB進行橫向移動，或竊取Session取得VDI存取權以控制AD伺服器。官方建議優先修補遠端設備漏洞、實作網段分割並建立離線備份。",
    tags: ["Gunra", "FBI", "CISA", "CVE-2024-55591", "CVE-2025-24472", "Fortinet", "勒索軟體", "RaaS"],
    title_en: "US and South Korea Law Enforcement Agencies Issue Joint Advisory: Gunra Ransomware Exploits Fortinet Vulnerabilities and VPN Weaknesses to Breach Critical Infrastructure",
    summary_en: "The US FBI, CISA, and the Korean National Police Agency have issued a joint warning, noting that the Gunra ransomware operates using a Ransomware-as-a-Service (RaaS) model and primarily targets government agencies and critical infrastructure. Attackers exploited Fortinet device vulnerabilities (CVE-2024-55591, CVE-2025-24472), exposed credentials, and SSH access control flaws to breach VPN gateways. They even obtained administrator privileges using default credentials and installed OpenSSH to establish remote tunnels. After gaining entry, attackers used Impacket and SMB for lateral movement, or stole sessions to gain VDI access and control AD servers. Authorities recommend prioritizing the patching of remote device vulnerabilities, implementing network segmentation, and establishing offline backups.",
    tags_en: ["Gunra", "FBI", "CISA", "CVE-2024-55591", "CVE-2025-24472", "Fortinet", "Ransomware", "RaaS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178037", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-002",
    trackers: ["security"],
    category: "重大事件",
    title: "醫療物流業者久裕遭遇網路攻擊 啟動資安防禦程序並進行通報",
    summary: "上櫃藥品流通與醫療物流業者久裕（4173）於8月10日晚間發布重大訊息，證實公司部分資訊系統遭受網路攻擊。事發後，久裕已立即啟動資訊安全防禦機制，並委請外部資安專家與技術公司協助處理，同時依照相關規定向主管機關完成通報。根據公司現階段的調查與初步評估，本次資安事件對整體營運尚無重大影響，後續將持續強化相關防禦措施。",
    tags: ["久裕", "網路攻擊", "資安事件", "醫療物流", "重大訊息"],
    title_en: "Medical Logistics Company Chiu Yu Suffers Cyberattack, Initiates Security Defenses and Regulatory Reporting",
    summary_en: "Chiu Yu (4173), a listed pharmaceutical distribution and medical logistics company, issued a major announcement on the evening of August 10th, confirming that some of its information systems were subjected to a cyberattack. Following the incident, Chiu Yu immediately activated its information security defense mechanisms and engaged external cybersecurity experts and technical companies for assistance. Concurrently, the company completed mandatory reporting to relevant regulatory authorities. According to the company's current investigation and preliminary assessment, this cybersecurity incident has not significantly impacted overall operations, and the company will continue to strengthen relevant defensive measures moving forward.",
    tags_en: ["Chiu Yu", "Cyberattack", "Security Incident", "Medical Logistics", "Major Announcement"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178035", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-003",
    trackers: ["security"],
    category: "重大事件",
    title: "國際物流巨擘 CEVA Logistics 遭網路攻擊，造成歐洲倉儲停擺與多家荷蘭企業個資外洩",
    summary: "國際物流巨頭 CEVA Logistics 於 7 月底遭遇網路攻擊，導致歐洲 8 座倉儲中心作業停擺，波及多家零售與企業客戶的貨物交付。受影響單位包括 De Bijenkorf、電商 Bol、金融公司 ING、眼鏡品牌 Ace & Tate 及荷蘭足球球會 Ajax 等。經調查，攻擊者存取了兩個訂單處理系統，可能造成顧客個人資料外洩。荷蘭資料保護主管機關已收到 10 起相關通報。目前受影響服務已陸續恢復，但官方尚未證實是否涉及勒索軟體。建議企業持續監控物流供應鏈系統風險與資料外洩警訊。",
    tags: ["CEVA Logistics", "網路攻擊", "資料外洩", "供應鏈攻擊", "荷蘭", "物流產業"],
    title_en: "Global Logistics Giant CEVA Logistics Hit by Cyberattack, Causing European Warehouse Shutdown and Data Leakage for Multiple Dutch Companies",
    summary_en: "Global logistics giant CEVA Logistics suffered a cyberattack late in July, causing operational shutdowns at eight warehouse centers across Europe and affecting the delivery of goods for multiple retail and corporate clients. Affected entities include De Bijenkorf, e-commerce retailer Bol, financial institution ING, eyewear brand Ace & Tate, and Dutch football club Ajax. Investigations revealed that attackers accessed two order processing systems, potentially leading to customer personal data leakage. The Dutch Data Protection Authority has received 10 related notifications. While affected services have gradually resumed, officials have not yet confirmed whether ransomware was involved. Companies are advised to continue monitoring risks within their logistics supply chain systems and data leakage alerts.",
    tags_en: ["CEVA Logistics", "Cyberattack", "Data Leakage", "Supply Chain Attack", "Netherlands", "Logistics Industry"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178010", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-004",
    trackers: ["security"],
    category: "重大事件",
    title: "波蘭熱電廠遭駭客經由蜂巢式專網入侵，關閉蒸汽渦輪機與水處理系統",
    summary: "CERT Polska 揭露 2025 年 12 月波蘭熱電廠（CHP）遭駭攻擊事件。駭客首先入侵風力發電廠未啟用 MFA 的 FortiGate 防火牆，取得憑證後存取 Teltonika RUTX50 路由器，並利用電力分配營運商私人 APN 網路缺乏用戶端隔離（Client Isolation）的配置缺陷，跨網段掃描並入侵熱電廠。攻擊者透過預設憑證登入 WAGO PFC200 控制器，進一步存取 Siemens S7 系列 PLC、Moxa 序列設備伺服器與交換器，將控制器切換至 STOP 模式並更改密碼，導致蒸汽渦輪機與水處理系統停擺。攻擊過程完全利用合法協定與設備原生功能，並在離開前將設備恢復原廠設定以抹滅痕跡。建議資安人員審查私人 APN 設定、開啟隔離機制、落實網路分段並更改預設憑證。",
    tags: ["CERT Polska", "熱電廠", "OT/ICS", "APN 專網", "WAGO", "FortiGate", "Siemens PLC", "關鍵基礎設施"],
    title_en: "Polish Power Plant Breached by Hackers via Mesh Network, Shutting Down Steam Turbine and Water Treatment System",
    summary_en: "CERT Polska revealed an attack on a Polish Combined Heat and Power (CHP) plant in December 2025. Hackers initially breached a FortiGate firewall at a wind farm that lacked MFA, obtaining credentials and accessing a Teltonika RUTX50 router. They then exploited a configuration flaw—the lack of Client Isolation—on the power distribution operator's private APN network to scan across network segments and infiltrate the CHP plant. The attackers logged into a WAGO PFC200 controller using default credentials, subsequently accessing Siemens S7 series PLCs, Moxa serial equipment servers, and switches. They switched the controller to STOP mode and changed the passwords, causing the steam turbine and water treatment system to shut down. The entire attack utilized legitimate protocols and native device functions, and the attackers restored the equipment to factory settings before leaving to erase traces. Cybersecurity personnel are advised to review private APN configurations, enable isolation mechanisms, enforce network segmentation, and change default credentials.",
    tags_en: ["CERT Polska", "CHP", "OT/ICS", "APN Network", "WAGO", "FortiGate", "Siemens PLC", "Critical Infrastructure"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/hackers-breach-polish-power-plant.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-005",
    trackers: ["security"],
    category: "重大事件",
    title: "美韓聯合發布資安警訊：Gunra 勒索軟體鎖定政府與關鍵基礎設施，利用 Fortinet 漏洞進行跨平台攻擊",
    summary: "美國聯邦機構與南韓警察廳發布聯合警訊，警告全球政府及關鍵基礎設施防範 Gunra 勒索軟體攻擊。Gunra 於 2025 年 4 月首次出現，基於 Conti 程式碼開發，採用雙重勒索模式，受害領域涵蓋醫療、金融與政府機構。攻擊者主要利用 Fortinet FortiOS 及 FortiProxy 之關鍵身份驗證漏洞（CVE-2024-55591、CVE-2025-24472）與 VPN Gateway 漏洞入侵，並已推出 Linux 版本進行跨平台攻擊。該組織於 2026 年 1 月轉型為 RaaS 勒索軟體即服務模式（亦使用 Golden Community 名義），並招募初始存取經紀人。南韓安 lab 分析指出其與北韓 Lazarus 組織有所關聯。官方建議儘速修補對外系統漏洞、實施網路隔離並建立離線備份。",
    tags: ["Gunra", "勒索軟體", "RaaS", "Fortinet", "CVE-2024-55591", "CVE-2025-24472", "Lazarus", "關鍵基礎設施"],
    title_en: "US-Korea Joint Cybersecurity Alert: Gunra Ransomware Targets Government and Critical Infrastructure Using Fortinet Vulnerabilities for Cross-Platform Attacks",
    summary_en: "US federal agencies and the South Korean National Police Agency have issued a joint alert warning global governments and critical infrastructure to defend against Gunra ransomware attacks. Gunra first appeared in April 2025, developed based on Conti code, and employs a double-extortion model, affecting sectors including healthcare, finance, and government institutions. Attackers primarily exploit critical authentication vulnerabilities in Fortinet FortiOS and FortiProxy (CVE-2024-55591, CVE-2025-24472) and VPN Gateway vulnerabilities for intrusion, and have since released a Linux version for cross-platform attacks. The group transitioned to a Ransomware-as-a-Service (RaaS) model in January 2026 (also operating under the name Golden Community) and recruited initial access brokers. Analysis by the South Korean Ahn lab suggests a connection to North Korea's Lazarus group. Authorities recommend promptly patching external system vulnerabilities, implementing network segmentation, and establishing offline backups.",
    tags_en: ["Gunra", "Ransomware", "RaaS", "Fortinet", "CVE-2024-55591", "CVE-2025-24472", "Lazarus", "Critical Infrastructure"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/us-warns-of-gunra-ransomware-attacks-against-government-critical-infrastructure", lang: "EN" }
    ]
  },
  {
    id: "20260811-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6429-1 修補相關安全漏洞",
    summary: "Debian 發布了編號為 DSA-6429-1 的安全公告，針對相關軟體套件提出安全更新。受影響的產品與組織包含 Debian 作業系統相關元件。技術細節部分，包含具體的 CVE 編號、CVSS 評分與攻擊向量等資訊在公告原文中未公開說明。實務影響方面，未修補的系統可能面臨潛在的安全風險。修補建議為使用者與系統管理員應儘速透過 Debian 套件管理系統更新至安全版本，以確保系統安全。相關詳細資訊可參閱 Debian 官方安全追蹤器。",
    tags: ["Debian", "DSA-6429-1", "Linux", "安全性更新", "漏洞修補"],
    title_en: "Debian Releases Security Advisory DSA-6429-1 Patching Vulnerabilities",
    summary_en: "Debian has issued security advisory DSA-6429-1, providing security updates for affected software packages. Affected products and organizations include components related to the Debian operating system. The technical details, including specific CVE IDs, CVSS scores, and attack vectors, are not disclosed in the advisory text. In terms of practical impact, unpatched systems may face potential security risks. The recommended remediation is for users and system administrators to promptly update to the secure version using the Debian package management system to ensure system safety. Detailed information can be found on the official Debian security tracker.",
    tags_en: ["Debian", "DSA-6429-1", "Linux", "Security Update", "Vulnerability Patch"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00340.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-007",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 開源 Nova 驅動程式與 Linux 7.3 核心 Rust 整合進展",
    summary: "Linux 7.3 合併視窗的 DRM-Next 提交帶來了重要的 Rust 核心與驅動程式更新，重點包含 DRM 基礎設施、I/O 處理、SysMem 後端與生命週期管理工具。在 NVIDIA 開源 Nova 驅動程式方面，本次更新整合了 GPU 系統處理器（GSP）啟動流程、新增 vGPU 啟動支援、TLV 韌體映像格式，並強化 NVIDIA Hopper 與 Blackwell 架構的支援。此外，ARM Mali 的 Tyr 驅動程式亦有韌體載入與 MCU 啟動改善。開發人員與企業應持續關注此基於 Rust 的繪圖驅動程式發展，並評估後續核心升級規劃。",
    tags: ["Linux", "NVIDIA", "Nova", "Rust", "DRM", "Hopper", "Blackwell", "Tyr"],
    title_en: "NVIDIA Open-Source Nova Driver and Linux 7.3 Kernel Rust Integration Progress",
    summary_en: "The DRM-Next submission merged into Linux 7.3 brings significant Rust core and driver updates, focusing on DRM infrastructure, I/O handling, SysMem backends, and lifecycle management tools. Regarding the open-source NVIDIA Nova driver, this update integrates the GPU System Processor (GSP) initialization flow, adds vGPU startup support, and introduces the TLV firmware image format, while also strengthening support for NVIDIA Hopper and Blackwell architectures. Furthermore, the ARM Mali Tyr driver sees improvements in firmware loading and MCU initialization. Developers and enterprises should continue to monitor the development of this Rust-based graphics driver and evaluate future kernel upgrade plans.",
    tags_en: ["Linux", "NVIDIA", "Nova", "Rust", "DRM", "Hopper", "Blackwell", "Tyr"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Nova-Rust-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260811-008",
    trackers: ["security"],
    category: "重大事件",
    title: "前資安專家 Marcus Hutchins 回顧從惡意程式開發到資安研究的轉變歷程",
    summary: "本文深入探討了資安專家 Marcus Hutchins 的個人經歷，他從一位熱衷於理解系統運作原理的年輕程式設計師，逐漸進入了網路犯罪領域。Hutchins 最初以 MalwareTech 匿名部落格的形式，販售關於惡意軟體運作原理的 Proof of Concepts (PoC)，並成為專業的惡意軟體開發者，負責維護後門和繞過防毒系統的程式碼。他指出，他最初的行為是將技能視為商品出售，缺乏直接參與犯罪行為的心理距離，使其能「情感上疏離」。然而，隨著時間推移，他逐漸了解了自己程式碼所造成的實際危害，意識到自己不能再為這些行為負責。最終，他決定切斷與犯罪團體的聯繫，轉向正規的資安研究與開發工作。這段經歷展現了資安專業人員在道德選擇和職業轉型過程中的複雜心路歷程。",
    tags: ["Marcus Hutchins", "MalwareTech", "惡意軟體", "PoC", "網路犯罪", "資安專業"],
    title_en: "Former Cybersecurity Expert Marcus Hutchins Recalls His Journey from Malware Development to Cybersecurity Research",
    summary_en: "This article delves into the personal journey of cybersecurity expert Marcus Hutchins. He began as a young programmer fascinated by understanding system operational principles, gradually entering the realm of cybercrime. Hutchins initially sold Proof of Concepts (PoC) regarding malware operational principles through his anonymous blog, MalwareTech, becoming a professional malware developer responsible for maintaining backdoors and code designed to bypass antivirus systems. He noted that his initial actions were driven by viewing his skills as commodities for sale, maintaining a psychological distance from direct criminal involvement, which allowed him to remain 'emotionally detached.' However, over time, he came to understand the actual harm caused by his code, realizing he could no longer be responsible for such actions. Ultimately, he decided to sever ties with the criminal group and transition into legitimate cybersecurity research and development work. This experience illustrates the complex psychological journey of a cybersecurity professional navigating ethical choices and career transitions.",
    tags_en: ["Marcus Hutchins", "MalwareTech", "Malware", "PoC", "Cybercrime", "Cybersecurity Professional"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/hacker-conversations-marcus-hutchins", lang: "EN" }
    ]
  },
  {
    id: "20260811-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSL 函式庫中的潛在安全漏洞",
    summary: "Debian 針對 OpenSSL 函式庫發布了安全更新，修補了潛在的安全漏洞。此更新屬於 Debian 安全公告 DSA-6430-1，旨在加強系統的安全性。雖然原文未提供具體的漏洞描述或 CVSS 分數，但此類更新通常針對核心函式庫的記憶體處理或加密操作缺陷。使用者應立即根據 Debian 的官方指引，將 OpenSSL 函式庫升級至修補版本，以防止潛在的攻擊者利用這些漏洞造成系統的未授權存取或資料洩露。建議所有使用 Debian 系統的用戶，特別是伺服器環境，都應定期檢查並應用來自 Debian 安全團隊的最新安全補丁，確保系統的穩固性與安全性。",
    tags: ["Debian", "OpenSSL", "DSA-6430-1", "安全更新", "函式庫", "Linux 核心"],
    title_en: "Debian Issues Security Advisory: Patching Potential Vulnerabilities in OpenSSL Library",
    summary_en: "Debian has released a security update for the OpenSSL library, patching potential vulnerabilities. This update is covered under Debian Security Advisory DSA-6430-1 and aims to enhance system security. Although the original text does not provide specific vulnerability descriptions or CVSS scores, such updates typically address memory handling or cryptographic operation flaws in core libraries. Users should immediately upgrade the OpenSSL library to the patched version following Debian's official guidelines to prevent potential attackers from exploiting these vulnerabilities to cause unauthorized system access or data leakage. It is recommended that all users of Debian systems, especially those in server environments, regularly check and apply the latest security patches from the Debian security team to ensure system stability and security.",
    tags_en: ["Debian", "OpenSSL", "DSA-6430-1", "Security Update", "Library", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00341.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-010",
    trackers: ["os"],
    category: "Linux",
    title: "KVM 規劃層（KVM planes）旨在為 Linux 系統提供虛擬化安全域抽象層",
    summary: "隨著虛擬化技術的發展，除了將客戶端系統隔離於主機系統之外，業界也越來越關注在單一虛擬化系統內建立多個獨立的安全域。為了應對這一趨勢，CPU 和軟體供應商正在實作各種解決方案。KVM 專案目前正在開發一個名為 KVM planes 的規劃層。該層旨在為 Linux 系統提供一個抽象層，以便將這些複雜的虛擬化安全功能整合並可用化。這項工作由 KVM 社群中的 Jörg Rödel、Paolo Bonzini 等人共同進行，屬於複雜的系統開發任務，目標是提升 Linux 虛擬化環境的安全性與隔離性。",
    tags: ["KVM", "Linux", "虛擬化", "安全域", "Jörg Rödel", "Paolo Bonzini"],
    title_en: "KVM planes aims to provide a virtualization security domain abstraction layer for Linux systems",
    summary_en: "As virtualization technology develops, industry focus is increasingly shifting towards establishing multiple independent security domains within a single virtualized system, in addition to isolating client systems from the host system. To address this trend, CPU and software vendors are implementing various solutions. The KVM project is currently developing a plane called KVM planes. This layer aims to provide an abstraction layer for Linux systems, integrating and making available these complex virtualization security features. This work is being undertaken by members of the KVM community, including Jörg Rödel and Paolo Bonzini, and constitutes a complex system development task aimed at enhancing the security and isolation of Linux virtualization environments.",
    tags_en: ["KVM", "Linux", "Virtualization", "Security Domain", "Jörg Rödel", "Paolo Bonzini"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087590", lang: "EN" }
    ]
  },
  {
    id: "20260811-011",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME Shell 設計團隊分享長期願景：探討未來使用者介面與功能規劃",
    summary: "GNOME 的貢獻者 Tobias Bernard 發布了部落格文章，詳細介紹了設計團隊對於 GNOME Shell 長期發展的設計理念與未來功能規劃。這些內容涵蓋了從使用者體驗到系統架構的各種概念，旨在為社群和開發者提供一個更全面的長期願景。文章指出，雖然這些想法需要進一步的討論、原型設計和測試，但它們代表了 GNOME 團隊對未來使用者介面和功能增強的規劃方向。這類設計藍圖的實現，最終仍取決於開發者的資源投入、興趣以及可能的資金支持。對於開發者和資安人員而言，這份文件提供了了解 GNOME 平台未來發展趨勢的重要參考資料。",
    tags: ["GNOME Shell", "Linux", "使用者介面", "設計藍圖", "Tobias Bernard"],
    title_en: "GNOME Shell Design Team Shares Long-Term Vision: Exploring Future UI and Feature Planning",
    summary_en: "GNOME contributor Tobias Bernard published a blog post detailing the design team's design philosophy and future feature planning for GNOME Shell's long-term development. The content covers various concepts, ranging from user experience to system architecture, aiming to provide the community and developers with a comprehensive long-term vision. The article notes that while these ideas require further discussion, prototyping, and testing, they represent the GNOME team's planned direction for future UI and feature enhancements. The realization of such design blueprints ultimately depends on developer resource commitment, interest, and potential funding. For developers and cybersecurity professionals, this document serves as an important reference for understanding the future development trends of the GNOME platform.",
    tags_en: ["GNOME Shell", "Linux", "User Interface", "Design Blueprint", "Tobias Bernard"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088238", lang: "EN" }
    ]
  },
  {
    id: "20260811-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "多發行版安全更新公告：AlmaLinux、Debian、Fedora、SUSE等多系統元件修補漏洞",
    summary: "多個主流 Linux 發行版，包括 AlmaLinux、Debian、Fedora、Mageia、Oracle 和 SUSE，近期發布了廣泛的安全性更新。這些更新涵蓋了從核心元件到應用層的眾多組件，涉及的產品範圍極廣，例如：Debian 更新了 caddy、libyaml-syck-perl、nss 和 wordpress；Fedora 更新了 kernel、chromium、emacs、suricata 等；SUSE 則更新了大量的庫和應用程式，包括 ffmpeg、libssh2_org、nodejs22、thunderbird 等；AlmaLinux 專注於 gpsd 的修補；Oracle 則更新了 gpsd-minimal、kernel、libarchive、php、ruby 等。本次更新的重點在於修補多個系統層級和應用層的潛在漏洞，確保用戶能夠維持系統的穩定性和安全性。建議所有使用這些發行版的用戶，應立即根據官方公告，更新所有受影響的套件，以修補潛在的漏洞，避免遭受攻擊。",
    tags: ["AlmaLinux", "Debian", "Fedora", "SUSE", "Linux", "安全更新", "CVE", "系統元件"],
    title_en: "Multi-Distribution Security Update Announcement: Patches for Vulnerabilities in Multiple System Components Across AlmaLinux, Debian, Fedora, and SUSE",
    summary_en: "Several major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, Oracle, and SUSE, have recently released extensive security updates. These updates cover numerous components, ranging from core system elements to application layers, affecting a wide range of products. For example: Debian updated caddy, libyaml-syck-perl, nss, and wordpress; Fedora updated kernel, chromium, emacs, and suricata; SUSE updated numerous libraries and applications, including ffmpeg, libssh2_org, nodejs22, and thunderbird; and AlmaLinux focused on patching gpsd; while Oracle updated gpsd-minimal, kernel, libarchive, php, and ruby. The focus of these updates is to patch potential vulnerabilities at multiple system and application levels, ensuring users maintain system stability and security. All users of these distributions are advised to immediately update all affected packages according to official announcements to patch potential vulnerabilities and prevent attacks.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "SUSE", "Linux", "Security Update", "CVE", "System Component"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088226", lang: "EN" }
    ]
  },
  {
    id: "20260811-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Intel 發布 20260811 CPU Microcode 更新，修復八項重大安全漏洞，涵蓋 Xeon 6 與 Core Ultra 系列",
    summary: "Intel 今日發布 20260811 CPU microcode 更新，為現有處理器修復多項功能與安全問題，包括為 Bartlett Lake 和 Wildcat Lake 晶片發布首批 microcode。本次更新追溯至 Intel Core Gen10 處理器。\n\n本次更新共修復八個安全漏洞，其中包含多項權限提升（escalation of privilege）與資訊洩露（information disclosure）問題。受影響的產品涵蓋 Xeon 6 處理器、Core Ultra 系列（包括 Core Ultra Series 2 和 Series 3）以及 3rd Gen Xeon Scalable 處理器。\n\n具體漏洞包括：INTEL-SA-01379（高評級權限提升，涉及 Intel TDX 與 Xeon 6）、INTEL-SA-01404（Xeon 6 處理器與 Intel TDX 的資訊洩露）、INTEL-SA-01423（Ring 0 暫時執行期間的資料轉發錯誤導致的資訊洩露），以及 INTEL-SA-01428（影響所有 Intel Core Ultra CPU 和 Xeon 6 的權限提升）。此外，還修復了 Core Ultra Series 2/3 的服務拒絕（denial of service）問題，以及 Xeon 處理器中的控制流錯誤等。\n\n使用者應立即透過官方渠道更新 CPU microcode，以修補這些潛在的硬體層級安全風險。",
    tags: ["Intel", "CPU Microcode", "Xeon 6", "Core Ultra", "INTEL-SA-01379", "資訊安全"],
    title_en: "Intel Releases 20260811 CPU Microcode Update to Patch Eight Critical Vulnerabilities, Covering Xeon 6 and Core Ultra Series",
    summary_en: "Intel today released a CPU microcode update for existing processors, addressing multiple functional and security issues. This includes the first microcode release for Bartlett Lake and Wildcat Lake chips, tracing back to Intel Core Gen10 processors.\n\nThis update patches eight security vulnerabilities, including multiple privilege escalation and information disclosure issues. Affected products include Xeon 6 processors, Core Ultra series (including Core Ultra Series 2 and Series 3), and 3rd Gen Xeon Scalable processors.\n\nSpecific vulnerabilities include: INTEL-SA-01379 (High-severity privilege escalation, affecting Intel TDX and Xeon 6), INTEL-SA-01404 (Information disclosure in Xeon 6 processors and Intel TDX), INTEL-SA-01423 (Information disclosure due to data forwarding errors during Ring 0 temporary execution), and INTEL-SA-01428 (Privilege escalation affecting all Intel Core Ultra CPUs and Xeon 6). Additionally, the update fixes denial-of-service issues in Core Ultra Series 2/3, as well as control flow errors in Xeon processors.\n\nUsers should immediately update their CPU microcode through official channels to patch these potential hardware-level security risks.",
    tags_en: ["Intel", "CPU Microcode", "Xeon 6", "Core Ultra", "INTEL-SA-01379", "Information Security"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-CPU-Microcode-20260811", lang: "EN" }
    ]
  },
  {
    id: "20260811-014",
    trackers: ["os"],
    category: "Linux",
    title: "Fedora Workstation 44 效能分析：為 Intel Panther Lake 筆電優化需調整 Power-Profiles-Daemon",
    summary: "本文針對在 Framework Laptop 13 Pro（搭載 Intel Core Ultra X9 388H SoC）上運行 Fedora Workstation 44 的效能表現進行深度分析。作者發現，Fedora 44 在多項基準測試中表現落後於其他主流 Linux 發行版。最初懷疑問題出於 Thermald 套件版本過舊（Fedora 44 預設為 2.5.9），但即使更新至 2.5.12，效能仍未顯著提升。隨後，作者回顧了 Fedora 44 在 2024 年從 Power-Profiles-Daemon 轉向 Red Hat Tuned 的重大變更。最終測試發現，將系統的電源管理工具從 Tuned 切換回 Power-Profiles-Daemon，能讓 Fedora 44 的效能表現大幅提升，使其與其他 Linux 發行版達到競爭水平。這顯示，對於特定硬體（如 Intel Panther Lake）的電源管理優化，選擇正確的電源管理框架比單純更新核心元件更為關鍵。",
    tags: ["Fedora Workstation 44", "Power-Profiles-Daemon", "Tuned", "Intel Panther Lake", "Linux 效能優化", "Thermald"],
    title_en: "Fedora Workstation 44 Performance Analysis: Adjusting Power-Profiles-Daemon for Intel Panther Lake Laptops",
    summary_en: "This article provides an in-depth performance analysis of running Fedora Workstation 44 on the Framework Laptop 13 Pro (equipped with Intel Core Ultra X9 388H SoC). The author found that Fedora 44 underperforms compared to other mainstream Linux distributions in several benchmarks. Initially, the author suspected the issue was due to an outdated Thermald package version (Fedora 44 defaults to 2.5.9), but even updating to 2.5.12 did not significantly improve performance. Subsequently, the author reviewed the major change in Fedora 44 in 2024, which involved transitioning from Power-Profiles-Daemon to Red Hat Tuned. The final test revealed that switching the system's power management tool from Tuned back to Power-Profiles-Daemon significantly boosted Fedora 44's performance, bringing it to a competitive level with other Linux distributions. This suggests that for power management optimization on specific hardware (such as Intel Panther Lake), selecting the correct power management framework is more critical than simply updating core components.",
    tags_en: ["Fedora Workstation 44", "Power-Profiles-Daemon", "Tuned", "Intel Panther Lake", "Linux Performance Optimization", "Thermald"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/fedora-pantherlake-thermald-tuned", lang: "EN" }
    ]
  },
  {
    id: "20260811-015",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME Shell 規劃未來功能：預告搜尋增強、自訂快速設定與多視窗管理改進",
    summary: "GNOME 互動設計師 Tobias Bernard 分享了未來 GNOME Shell 版本規劃的長期藍圖與改進方向。這些設計夢涵蓋多個領域，旨在提升使用者體驗與功能性。主要的改進點包括：增強搜尋功能，使搜尋結果能顯示更豐富的內容和操作；讓「快速設定」區域可自訂，使用者可以根據需求新增或移除選項；此外，設計團隊也考慮簡化日曆彈出視窗、優化拖放式視窗管理、支援拼貼（mosaic）與平鋪（tiling）模式，並提升視窗切換體驗。其他規劃還包括登入畫面網格化、動態電池圖示，以及讓 GNOME Shell 具備透明面板的設計。這些功能目前處於規劃階段，部分可能需要更多的開發資源、原型製作和測試才能實現。相關資訊可透過 GNOME Shell Dev Blog 了解更多。",
    tags: ["GNOME Shell", "Linux", "GNOME", "桌面環境", "使用者介面", "Linux 核心"],
    title_en: "GNOME Shell Plans Future Features: Teasing Enhanced Search, Customizable Quick Settings, and Multi-Window Management Improvements",
    summary_en: "GNOME interaction designer Tobias Bernard shared a long-term roadmap and direction for future GNOME Shell versions. These design concepts cover multiple areas, aiming to enhance user experience and functionality. Key improvements include: enhanced search capabilities, allowing search results to display richer content and actions; making the 'Quick Settings' area customizable, enabling users to add or remove options as needed; and simplifying the calendar pop-up window, optimizing drag-and-drop window management, supporting mosaic and tiling modes, and improving the window switching experience. Other planned features include a grid-based login screen, dynamic battery indicators, and the design of a transparent panel for GNOME Shell. These features are currently in the planning stage, and some may require additional development resources, prototyping, and testing to be implemented. More information can be found on the GNOME Shell Dev Blog.",
    tags_en: ["GNOME Shell", "Linux", "GNOME", "Desktop Environment", "User Interface", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Shell-Plans-2026", lang: "EN" }
    ]
  },
  {
    id: "20260811-016",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心優化：提升 follow_page_mask() 批次查詢效率，大幅加速記憶體管理操作",
    summary: "本篇報導介紹 Linux 核心開發者 Rik van Riel 針對記憶體管理（MM）領域進行的優化。核心功能是改進 `follow_page_mask()` 的效能。原先此函數在轉換虛擬位址到對應的 struct page 時，是逐頁（one page at a time）進行頁表遍歷（page tables）。Rik van Riel 的優化目標是讓頁表遍歷器（walkers）能夠一次回傳多個頁面（more than one page per call），實現查詢的批次處理（batch look-ups）。這項改進能為使用 `follow_page_mask()` 的程式，例如 Linux 內建的 `get_user_pages()` 程式，帶來顯著的速度提升。透過這些 Request for Comments (RFC) 補丁，用於測試記憶體管理功能的 `gup_test` 程式已展現出顯著的性能增益。這類優化對於提升 Linux 系統的整體記憶體管理效率至關重要。",
    tags: ["Linux 核心", "follow_page_mask()", "記憶體管理", "gup_test", "Linux MM"],
    title_en: "Linux Kernel Optimization: Enhancing follow_page_mask() Batch Query Efficiency for Accelerated Memory Management Operations",
    summary_en: "This report details an optimization made by Linux kernel developer Rik van Riel in the area of Memory Management (MM). The core improvement focuses on enhancing the efficiency of the `follow_page_mask()` function. Previously, this function traversed page tables page by page (one page at a time) when converting a virtual address to its corresponding struct page. Rik van Riel's optimization aims to allow page table walkers to return multiple pages in a single call (more than one page per call), thereby enabling batch look-ups. This enhancement provides a significant speed boost for programs utilizing `follow_page_mask()`, such as the built-in Linux `get_user_pages()` program. Through these Request for Comments (RFC) patches, the `gup_test` program, used for testing memory management functionalities, has demonstrated notable performance gains. Such optimizations are crucial for improving the overall memory management efficiency of Linux systems.",
    tags_en: ["Linux Kernel", "follow_page_mask()", "Memory Management", "gup_test", "Linux MM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Batch-Follow-Page-Mask", lang: "EN" }
    ]
  },
  {
    id: "20260811-017",
    trackers: ["os"],
    category: "Linux",
    title: "Google 貢獻者推動 Raspberry Pi AXI PMU 驅動程式進入主線 Linux 核心",
    summary: "本篇報導指出，Raspberry Pi 裝置的效能監控單元 (PMU) 驅動程式長期以來缺乏主線 Linux 核心支援。Google 的工程師 Ian Rogers 正在努力開發一個與 Linux perf 兼容的 PMU 驅動程式，用於廣播道 AXI (Broadcom AXI) 介面所暴露的效能計數器。目前雖然存在使用客製化 DebugFS 節點的外部驅動程式，但 Rogers 的目標是將其提升為主線核心可用的驅動。最新的補丁提供了標準的 Linux perf 子系統整合，並透過 `/sys/bus/event_source/devices/rpi_axi_pmu/` 暴露未核心事件 (uncore events)，同時支援 CPU 熱插拔等功能。此驅動已涵蓋用於 Raspberry Pi 1 至 Raspberry Pi 4 的 Broadcom BCM2835-BCM2711。此外，針對 Raspberry Pi 5 所使用的 BCM2712，開發者正在進一步工作，以暴露周邊如 PCIe RP1 Southbridge 連結、HEVC 解碼器、顯示引擎和 DSU L3 互連的額外效能監控指標。有興趣的開發者可以在 LKML 找到這些提案補丁。",
    tags: ["Raspberry Pi", "Linux 核心", "PMU", "Broadcom AXI", "perf", "Ian Rogers"],
    title_en: "Google Contributor Drives Raspberry Pi AXI PMU Driver into Mainline Linux Kernel",
    summary_en: "This report notes that the Performance Monitoring Unit (PMU) driver for Raspberry Pi devices has long lacked mainline Linux kernel support. Google engineer Ian Rogers has been working to develop a PMU driver compatible with Linux perf, designed to expose performance counters available via the Broadcom AXI interface. While external drivers utilizing custom DebugFS nodes currently exist, Rogers' goal is to elevate this functionality to mainline kernel availability. The latest patch provides standard Linux perf subsystem integration and exposes uncore events via `/sys/bus/event_source/devices/rpi_axi_pmu/`, while also supporting features like CPU hot-plugging. This driver covers the Broadcom BCM2835-BCM2711 used in Raspberry Pi 1 through Raspberry Pi 4. Furthermore, for the BCM2712 used in Raspberry Pi 5, the developer is continuing work to expose additional performance metrics for peripherals such as the PCIe RP1 Southbridge link, HEVC decoder, display engine, and DSU L3 interconnect. Interested developers can find these proposed patches on LKML.",
    tags_en: ["Raspberry Pi", "Linux Kernel", "PMU", "Broadcom AXI", "perf", "Ian Rogers"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Raspberry-Pi-AXI-PMU-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260811-018",
    trackers: ["os"],
    category: "Linux",
    title: "FastFlowLM 1.0 發布，整合至 AMD ROCm 生態系，強化 Ryzen AI NPU 上的 LLM 支援",
    summary: "FastFlowLM 1.0 版本已正式發布，並作為開源軟體納入 AMD ROCm 生態系統。FastFlowLM 是一個用於在 AMD Ryzen AI NPU 上運行視覺、音訊、嵌入式和 MoE 大型語言模型（LLMs）的軟體。本次升級後，FastFlowLM 繼續支援所有 AMD XDNA2 NPU 及後續晶片。除了整合至 ROCm 組織外，FastFlowLM 1.0 還增加了對 SmolVLA 視覺-語言-動作（VLA）模型的支援，並提升了 flm benchmark 的基準測試能力，同時修復了多個錯誤。此軟體最初在今年稍早透過 FastFlowLM 0.9.35 版本為 Linux 提供了支援，使得 Ryzen AI NPU 在 Linux 上的 LLM 應用變得可行。使用者可從 GitHub 下載 FastFlowLM 的原始碼，以及針對 Ubuntu、Debian、通用 Linux x86_64 和 Windows 的預編譯二進位檔，以在 AMD Ryzen AI NPU 上運行 LLMs。",
    tags: ["FastFlowLM", "AMD", "ROCm", "Ryzen AI NPU", "LLMs", "Linux"],
    title_en: "FastFlowLM 1.0 Released, Integrated into AMD ROCm Ecosystem, Enhancing LLM Support on Ryzen AI NPU",
    summary_en: "FastFlowLM version 1.0 has been officially released and incorporated as open-source software into the AMD ROCm ecosystem. FastFlowLM is a software designed to run visual, audio, embedded, and Mixture-of-Experts (MoE) Large Language Models (LLMs) on AMD Ryzen AI NPUs. Following this upgrade, FastFlowLM continues to support all AMD XDNA2 NPUs and subsequent chips. In addition to its integration into the ROCm project, FastFlowLM 1.0 adds support for the SmolVLA vision-language-action (VLA) model and improves the benchmarking capabilities of the flm benchmark, while also fixing multiple bugs. This software was initially made available for Linux earlier this year via the FastFlowLM 0.9.35 version, making LLM applications feasible on Ryzen AI NPUs running Linux. Users can download the FastFlowLM source code and pre-compiled binaries for Ubuntu, Debian, generic Linux x86_64, and Windows from GitHub to run LLMs on AMD Ryzen AI NPUs.",
    tags_en: ["FastFlowLM", "AMD", "ROCm", "Ryzen AI NPU", "LLMs", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FastFlowLM-1.0", lang: "EN" }
    ]
  },
  {
    id: "20260811-019",
    trackers: ["os"],
    category: "Linux",
    title: "Claude Opus 協助修復 HP OmniBook X Flip 14 在 Linux 上的音訊支援問題",
    summary: "本文介紹了針對 HP OmniBook X Flip 14-kc0xxx 這款搭載 AMD Ryzen AI 300 系列處理器的筆記型電腦，在 Linux 系統上缺乏音訊支援的修復過程。原先該硬體無法正確掃描 SoundWire 連接埠，導致內建喇叭、耳機孔和 DMIC 陣列等音訊功能無法正常運作。修復工作透過使用 Claude Opus 5 作為編碼和除錯助理，成功開發了 Linux 核心補丁。這些補丁包括為 AMD Audio Co-Processor (ACP) 增加強制 SoundWire 探測的程式碼，並加入描述 SoundWire 拓撲結構的內容。此外，還需要針對 TAS2783 濾波器驅動程式進行兩組獨立補丁，以確保音訊輸出能達到立體聲效果而非單聲道。作者指出，修復過程是迭代式的，並強調了人工驗證的重要性，最終補丁已提交審核，旨在讓該筆電在 Linux 上恢復完整的音訊功能。",
    tags: ["HP OmniBook X Flip 14", "Linux 核心", "AMD Ryzen AI 300", "SoundWire", "Claude Opus 5", "Linux 補丁"],
    title_en: "Claude Opus Assists in Fixing Audio Support Issues on HP OmniBook X Flip 14 Running Linux",
    summary_en: "This article details the process of fixing audio support issues on the HP OmniBook X Flip 14-kc0xxx laptop, which is equipped with the AMD Ryzen AI 300 series processor, when running on Linux. Originally, the hardware failed to correctly detect the SoundWire port, causing audio functions such as the built-in speakers, headphone jack, and DMIC array to malfunction. The fix involved using Claude Opus 5 as a coding and debugging assistant to successfully develop a Linux kernel patch. These patches included code to force SoundWire detection for the AMD Audio Co-Processor (ACP) and added content describing the SoundWire topology. Furthermore, two separate patches were required for the TAS2783 filter driver to ensure stereo audio output rather than mono. The author notes that the repair process was iterative and emphasized the importance of manual verification. The final patch has been submitted for review, aiming to restore full audio functionality to the laptop on Linux.",
    tags_en: ["HP OmniBook X Flip 14", "Linux Kernel", "AMD Ryzen AI 300", "SoundWire", "Claude Opus 5", "Linux Patch"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/HP-X-Flip-14-Linux-Audio", lang: "EN" }
    ]
  },
  {
    id: "20260811-020",
    trackers: ["os"],
    category: "Linux",
    title: "Mozilla 撤銷 Firefox 簽署金鑰：私有 GPG 子金鑰意外上傳至 GitHub 儲存庫",
    summary: "Mozilla 因發現其用於簽署 Firefox 和 Thunderbird 發行版的 GPG 私有子金鑰（private subkey）的未加密副本意外提交至一個 GitHub 儲存庫，決定立即撤銷並更換該金鑰。該子金鑰用於簽署 Linux tarballs、RPM 套件和檢查和檔案，確保使用者和套件管理員能驗證軟體來源的真實性。雖然 Mozilla 表示審核記錄未發現金鑰被未經授權方存取的證據，但為防止類似事件重演，已增加額外安全措施。對於大多數使用者而言，金鑰更換無需採取行動。然而，手動驗證 GPG 簽章的使用者必須匯入新的簽署金鑰並執行舊金鑰的撤銷。對於透過 Mozilla RPM 儲存庫安裝 Firefox 的使用者，特別是運行 Fedora 42 或更早版本的系統，需要手動移除舊金鑰並匯入替換金鑰。此外，在匯入撤銷資訊後，正常的簽章驗證將會拒絕使用已撤銷子金鑰簽署的舊版本。",
    tags: ["Mozilla", "Firefox", "Thunderbird", "GPG", "GitHub", "簽署金鑰", "Linux"],
    title_en: "Mozilla Revokes Firefox Signing Key: Private GPG Subkey Accidentally Uploaded to GitHub Repository",
    summary_en: "Mozilla has decided to immediately revoke and replace a GPG private subkey used for signing Firefox and Thunderbird releases after an unencrypted copy of the key was accidentally committed to a GitHub repository. This subkey is used to sign Linux tarballs, RPM packages, and checksum files, ensuring that users and package managers can verify the authenticity of the software source. Although Mozilla stated that audit logs did not find evidence of unauthorized access to the key, additional security measures have been implemented to prevent similar incidents. For most users, no action is required due to the key change. However, users who manually verify GPG signatures must import the new signing key and revoke the old one. Users who install Firefox via the Mozilla RPM repository, especially those running Fedora 42 or earlier versions, must manually remove the old key and import the replacement key. Furthermore, after importing the revocation information, normal signature verification will reject older versions signed with the revoked subkey.",
    tags_en: ["Mozilla", "Firefox", "Thunderbird", "GPG", "GitHub", "Signing Key", "Linux"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/11/mozilla-revokes-firefox-signing-key-after-unencrypted-copy-lands-in-github/5285908", lang: "EN" }
    ]
  },
  {
    id: "20260811-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6431-1 相關的資訊洩漏漏洞",
    summary: "Debian 安全團隊發布安全公告 DSA-6431-1，修補了一個與資訊洩漏相關的漏洞。此漏洞的詳細技術細節和受影響元件未在提供的原文中明確說明，但根據 Debian 安全追蹤器（security-tracker）的連結，此修補旨在加強系統的資訊安全。建議所有使用 Debian 系統的用戶，應立即更新到包含此修補的最新版本，以防止潛在的資訊洩漏風險。由於原文未提供 CVSS 分數、受影響版本範圍或具體攻擊向量，用戶應以 Debian 官方發布的公告為準，並確保系統及相關元件（如核心、使用者空間工具）已完全更新，以達到最佳的安全性保護。",
    tags: ["Debian", "DSA-6431-1", "資訊洩漏", "安全公告", "Linux"],
    title_en: "Debian Releases Security Advisory: Patching Information Leak Vulnerability DSA-6431-1",
    summary_en: "The Debian security team has issued security advisory DSA-6431-1, patching an information leak vulnerability. While the provided text does not specify the detailed technical aspects or affected components of this vulnerability, the patch, according to the Debian security tracker link, aims to enhance system information security. All users of Debian systems are advised to immediately update to the latest version containing this patch to prevent potential information leakage risks. Since the original text does not provide a CVSS score, affected version range, or specific attack vectors, users should rely on the official Debian advisory and ensure that the system and related components (such as the kernel and user-space tools) are fully updated to achieve optimal security protection.",
    tags_en: ["Debian", "DSA-6431-1", "Information Leak", "Security Advisory", "Linux"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00342.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-022",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 10 仍具韌性：產業報告顯示其市場佔有率高，持續影響企業安全與升級規劃",
    summary: "本文分析了 Windows 10 儘管進入支援延期（ESU）階段，仍未消亡的市場現狀。根據 IT 資產管理公司 Lansweeper 的數據，Windows 10 在企業生態系統中的市場佔有率仍維持在約 17%，顯示其用戶群體具有高度的「頑固性」。這類用戶多來自醫療、製藥和消費零售等產業，這些設備的升級需求和時程規劃仍是關鍵考量。\n\n從安全角度來看，Windows 10 的風險明顯高於 Windows 11。Lansweeper 指出，Windows 10 設備平均擁有 1,903 個活躍的 CVE，而 Windows 11 僅為 652 個，差距高達 2.9 倍。此外，即使有 ESU 補丁，仍有部分設備拒絕升級，運行著極度脆弱的作業系統。\n\n此外，硬體製造商 HP 的報告也證實了這一點，HP 提到其安裝基礎中仍有約 30% 的 PC 運行著 Windows 10。儘管 Microsoft 和 OEM 尚未提供明確的市場份額數據，但這些數據顯示，Windows 10 的用戶群體仍是企業升級規劃和安全維護的重大挑戰，促使市場持續關注 Windows 11 的推廣與 AI PC 轉型帶來的機會。",
    tags: ["Windows 10", "Windows 11", "Lansweeper", "CVE", "企業資安", "ESU", "HP"],
    title_en: "Windows 10 Remains Resilient: Industry Report Shows High Market Share, Continues to Impact Enterprise Security and Upgrade Planning",
    summary_en: "This article analyzes the current market status of Windows 10, which remains in use despite entering the Extended Security Update (ESU) phase. According to data from IT asset management company Lansweeper, Windows 10 maintains a market share of approximately 17% within the enterprise ecosystem, demonstrating a high degree of 'persistence.' These users primarily come from industries such as healthcare, pharmaceuticals, and consumer retail, where the upgrade requirements and timing remain critical considerations.\n\nFrom a security perspective, Windows 10 is significantly riskier than Windows 11. Lansweeper points out that Windows 10 devices average 1,903 active CVEs, compared to only 652 for Windows 11—a difference of 2.9 times. Furthermore, even with ESU patches, some devices refuse to upgrade, running extremely vulnerable operating systems.\n\nAdditionally, a report from hardware manufacturer HP confirms this, noting that approximately 30% of the PCs in its installed base still run Windows 10. Although Microsoft and OEMs have not provided explicit market share data, these figures show that the Windows 10 user base remains a major challenge for enterprise upgrade planning and security maintenance, prompting continued market focus on the promotion of Windows 11 and the opportunities presented by the AI PC transition.",
    tags_en: ["Windows 10", "Windows 11", "Lansweeper", "CVE", "Enterprise Security", "ESU", "HP"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/11/5-years-later-windows-10-refuses-to-die-and-microsoft-just-cant-push-holdouts-to-windows-11", lang: "EN" }
    ]
  },
  {
    id: "20260811-023",
    trackers: ["security"],
    category: "法規與標準",
    title: "資安署訂定公務出國資通訊設備管理須知：高風險地區需改用臨時設備",
    summary: "為降低公務人員出國期間機密資料外洩的風險，資安署依據《資通安全管理法》訂定「公務出國資通訊設備管理須知」。此規範根據人員身分與出國地區風險程度分級管理，區分「一般」與「進階」兩級措施。\n一般措施要求出國前必須更新所有設備軟體、套用政府組態基準（GCB），並完成資料備份。若在國外處理公務，建議使用VPN，並將電子郵件網頁呈現設定為純文字連結。\n進階措施專門適用於「重要人員」前往「高資安風險地區」（如中國大陸、港澳）。此類人員不得攜帶公務或私人設備，必須改用資訊單位預先處理、格式化並安裝監控軟體的臨時設備。此外，所有機密資料需加密備份，並落實「資料最小化」原則。\n資安署提醒，出國期間應隨時注意設備，避免使用公共充電站（防範Juice Jacking），返國後設備無論是否為臨時設備，都必須交由資訊單位進行全機掃描與檢查，以確保安全。",
    tags: ["資安署", "公務出國", "資通安全管理法", "高風險地區", "臨時設備", "資料最小化"],
    title_en: "Cybersecurity Agency Issues Guidelines for Managing Communication Equipment Used by Public Officials Abroad: Temporary Equipment Required in High-Risk Areas",
    summary_en: "To mitigate the risk of confidential data leakage during official travel, the Cybersecurity Agency (CSA) has established the \"Guidelines for Managing Communication Equipment Used by Public Officials Abroad,\" based on the Communications Security Management Act. These guidelines implement a tiered management system based on personnel status and the risk level of the destination country, distinguishing between \"General\" and \"Advanced\" measures. General measures require all equipment to be updated with software, applied with Government Configuration Baseline (GCB), and have data backups completed before departure. When conducting official business abroad, using a VPN is recommended, and email web display settings should be set to plain text links. Advanced measures are specifically applicable to \"Key Personnel\" traveling to \"High Cybersecurity Risk Areas\" (such as Mainland China, Hong Kong, and Macau). Such personnel are prohibited from bringing official or personal devices and must instead use temporary equipment pre-processed, formatted, and installed with monitoring software by the information unit. Furthermore, all confidential data must be encrypted and backed up, and the principle of \"data minimization\" must be implemented. The CSA reminds users to remain vigilant about their equipment while abroad, avoiding public charging stations (to prevent Juice Jacking). Upon return, all equipment, whether temporary or not, must be submitted to the information unit for full-system scanning and inspection to ensure security.",
    tags_en: ["Cybersecurity Agency", "Official Travel", "Communications Security Management Act", "High-Risk Area", "Temporary Equipment", "Data Minimization"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178046", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-024",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "歐盟《網路韌性法案》（CRA）實務指南：軟體供應鏈合規與實作策略",
    summary: "隨著歐盟《網路韌性法案》（EU Cyber Resilience Act, CRA）的報告期限（2026年9月）和全面合規要求（2027年12月）臨近，軟體製造商和商業實體必須將合規行動從政策解讀轉向實際操作。OpenSSF主辦的技術講座「CRA Readiness: A Practitioner’s Guide to Compliance」旨在提供實務指導。本次活動將深入探討2026年CRA意識與準備報告的實證發現，指出生態系統的趨勢、持續存在的準備差距以及主要的合規痛點。內容涵蓋了OpenSSF成員公司的實際案例，展示了如何加強軟體供應鏈透明度、實施SBOM（軟體物料清單）和來源追溯（provenance）的最佳實踐。此外，講座還將介紹新成立的Launchpad SIG，探討開源社群如何協作分享可操作的工具和最佳實踐，為企業提供具體的路線圖，以應對CRA帶來的挑戰。",
    tags: ["EU Cyber Resilience Act", "CRA", "SBOM", "軟體供應鏈", "OpenSSF", "合規性"],
    title_en: "EU Cyber Resilience Act (CRA) Practical Guide: Software Supply Chain Compliance and Implementation Strategies",
    summary_en: "With the approaching reporting deadline (September 2026) and full compliance requirements (December 2027) for the EU Cyber Resilience Act (CRA), software manufacturers and commercial entities must transition their compliance efforts from policy interpretation to practical implementation. The technical seminar, \"CRA Readiness: A Practitioner’s Guide to Compliance,\" hosted by OpenSSF, aims to provide practical guidance. This event will delve into empirical findings from the 2026 CRA awareness and readiness report, highlighting ecosystem trends, persistent readiness gaps, and major compliance pain points. The content includes real-world case studies from OpenSSF member companies, demonstrating best practices for enhancing software supply chain transparency, implementing Software Bill of Materials (SBOM), and source provenance. Furthermore, the seminar will introduce the newly established Launchpad SIG, exploring how the open-source community can collaborate to share actionable tools and best practices, providing enterprises with a concrete roadmap to address the challenges posed by the CRA.",
    tags_en: ["EU Cyber Resilience Act", "CRA", "SBOM", "Software Supply Chain", "OpenSSF", "Compliance"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/blog/2026/08/11/cra-readiness-a-practitioners-guide-to-compliance", lang: "EN" }
    ]
  },
  {
    id: "20260811-025",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "深入解析歐盟網路韌性法案（CRA）：開源社群的實用應對策略與準備指引",
    summary: "本集播客邀請到 ARM 的軟體社群總監 Megan Knight，深入探討即將實施的歐盟網路韌性法案（Cyber Resilience Act, CRA）。Knight 指出，儘管業界對 CRA 的關注度持續提高，但仍存在大量資訊缺口，許多企業和維護者對於法案的具體要求和實施細節仍缺乏充分了解。她強調，面對複雜的法規要求，最可行的策略是建立「實用證據模型」，並隨著指引的演進持續更新。對於開源維護者和組織而言，應主動參與社群工作組（如 ORBIT 和 ORC），利用 LF Research 等提供的最新報告，了解法案對產品生命週期和安全性的影響。實務建議包括主動提升社群參與度，並將合規性納入產品開發的早期階段，以降低理解和應對這項大型立法門檻。建議聽眾關注 OpenSSF 和 Linux Foundation 等機構發布的最新報告和資源，以掌握最新的合規行動步驟。",
    tags: ["EU CRA", "Cyber Resilience Act", "OpenSSF", "ARM", "軟體社群", "合規性"],
    title_en: "Deep Dive into the EU Cyber Resilience Act (CRA): Practical Strategies and Preparation Guidelines for the Open Source Community",
    summary_en: "This podcast episode features Megan Knight, Software Community Director at ARM, who provides an in-depth discussion of the upcoming European Union Cyber Resilience Act (CRA). Knight points out that although industry attention to the CRA is increasing, there remains a significant information gap. Many companies and maintainers lack a thorough understanding of the Act's specific requirements and implementation details. She emphasizes that, when faced with complex regulatory demands, the most viable strategy is to establish a 'practical evidence model' and continuously update as guidelines evolve. For open source maintainers and organizations, it is crucial to actively participate in community working groups (such as ORBIT and ORC) and utilize the latest reports provided by organizations like LF Research to understand the Act's impact on product lifecycle and security. Practical recommendations include proactively increasing community engagement and integrating compliance into the early stages of product development to lower the barrier of understanding and responding to this major legislation. Listeners are advised to follow the latest reports and resources published by organizations such as OpenSSF and the Linux Foundation to grasp the most current compliance steps.",
    tags_en: ["EU CRA", "Cyber Resilience Act", "OpenSSF", "ARM", "Software Community", "Compliance"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/podcast/2026/08/11/whats-in-the-soss-podcast-68-s3e20-cra-readiness-practical-strategies-for-open-source-communities-with-megan-knight", lang: "EN" }
    ]
  },
  {
    id: "20260811-026",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國水務基礎設施面臨網路威脅，新法案與「水監中心」啟動雙重防禦機制",
    summary: "鑑於近期針對美國至少 12 個州多個社區供水系統的協調性網路攻擊，美國國會正在推動《水網路保護法案》（Water Cyber Shield Act）。該法案旨在擴大聯邦監管，賦予環境保護署（EPA）與 CISA、NIST 等機構執行網路安全評估、強制執行糾正措施和建立安全標準的權力。此外，法案還將每年撥款 3 億美元，並要求對大型系統進行風險評估，擴大網路事件報告義務。同時，在 DEF CON 大會上，國家農村水業協會（NRWA）與 DEF CON Franklin 共同啟動了「水監中心」（Water Watch Center, WWC）。該中心專注於服務少於 10,000 人的小型、資源有限的公用事業，這些系統佔全國約 91%。透過 WWC，多家資安公司將提供管理式偵測與回應服務，並與大學合作，利用 DARPA 的 CASTLE 專案研究，建構水環境的數位分身，以測試和實施 AI 驅動的防禦代理，自動偵測和阻止網路入侵。",
    tags: ["美國水務基礎設施", "Water Cyber Shield Act", "EPA", "CISA", "NIST", "WWC", "AI 攻擊工具與防禦"],
    title_en: "US Water Infrastructure Faces Cyber Threats: New Act and 'Water Watch Center' Launch Dual Defense Mechanisms",
    summary_en: "Following coordinated cyberattacks targeting multiple community water systems in at least 12 US states, Congress is advancing the Water Cyber Shield Act. This act aims to expand federal oversight, granting the Environmental Protection Agency (EPA), CISA, and NIST the authority to conduct cybersecurity assessments, enforce corrective measures, and establish safety standards. Furthermore, the act allocates $300 million annually and mandates risk assessments for large systems, expanding cyber incident reporting obligations. Concurrently, at DEF CON, the National Rural Water Association (NRWA) and DEF CON Franklin jointly launched the 'Water Watch Center' (WWC). This center focuses on small, resource-limited utilities serving fewer than 10,000 people, which account for approximately 91% of the nation's systems. Through the WWC, multiple cybersecurity firms will provide managed detection and response services, and in collaboration with universities, will utilize DARPA's CASTLE project research to build digital twins of the water environment, testing and implementing AI-driven defense agents to automatically detect and prevent cyber intrusions.",
    tags_en: ["US Water Infrastructure", "Water Cyber Shield Act", "EPA", "CISA", "NIST", "WWC", "AI Attack Tools and Defense"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/us-water-systems-get-cyber-boost-from-new-senate-bill-and-water-watch-center", lang: "EN" }
    ]
  },
  {
    id: "20260811-027",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 2026年8月安全更新：提升Voice Access功能，修復檔案大小顯示單位，並擴展外部指紋讀取支援",
    summary: "微軟發布了針對 Windows 11 的 2026 年 8 月安全更新 (KB5121003)，此版本主要為一系列品質生活化（Quality-of-Life）的修復與功能優化，而非重大核心漏洞修補。本次更新的重點包括大幅升級 Voice Access 功能，新增 Voice Isolation 模式以過濾背景噪音，並支援韓文語言。此外，File Explorer 的詳細檢視（Details view）已修復了檔案大小顯示單位問題，現在會根據檔案實際大小顯示 KB、MB 或 GB，而非全部以 KB 呈現。另一個重要改進是 Windows Hello Enhanced Sign-in Security 現在支援外部外接指紋讀取器，擴大了安全性應用範圍。其他優化包括：中鍵點擊可從網址列和檔案總管首頁開啟新分頁；Windows Search 提升了對拼寫錯誤和部分應用名稱的處理能力；以及改善了電源和電池設定在休眠、待機和闔蓋狀態下的一致性。使用者應注意，此更新分兩階段推送，且 Windows 11 24H2 版本將於 2026 年 10 月 13 日達到支援終止日。",
    tags: ["Windows 11", "KB5121003", "Voice Access", "File Explorer", "Windows Hello", "安全更新"],
    title_en: "Windows 11 August 2026 Security Update: Enhancing Voice Access, Fixing File Size Display Units, and Expanding External Fingerprint Reader Support",
    summary_en: "Microsoft has released the August 2026 security update (KB5121003) for Windows 11. This version primarily consists of a series of Quality-of-Life fixes and feature enhancements, rather than major core vulnerability patches. Key highlights of this update include a significant upgrade to Voice Access functionality, adding a Voice Isolation mode to filter background noise, and adding Korean language support. Furthermore, the File Explorer Details view has fixed an issue with file size display units; it will now display KB, MB, or GB based on the file's actual size, rather than always showing it in KB. Another important improvement is that Windows Hello Enhanced Sign-in Security now supports external fingerprint readers, expanding the scope of security applications. Other optimizations include: right-clicking to open new tabs from the address bar and File Explorer home page; improved handling of spelling errors and certain application names in Windows Search; and improved consistency of power and battery settings during sleep, standby, and lid-closed states. Users should note that this update will be rolled out in two phases, and the Windows 11 24H2 version will reach its end-of-support date on October 13, 2026.",
    tags_en: ["Windows 11", "KB5121003", "Voice Access", "File Explorer", "Windows Hello", "Security Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/11/i-tested-windows-11-august-2026-update-heres-everything-new-improved-and-fixed", lang: "EN" }
    ]
  },
  {
    id: "20260811-028",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 KB5121003 更新發布：提升應用程式啟動速度、改善檔案總管單位顯示與搜尋拼字輸入能力",
    summary: "微軟發布 Windows 11 KB5121003 更新，作為 2026 年 8 月的強制性 Patch Tuesday 更新，旨在提升系統效能與使用者體驗。本次更新主要優化了應用程式的啟動速度，特別是在低階電腦上，並大幅改善了檔案總管（File Explorer）的單位顯示，使其能根據檔案大小自動選擇最合適的單位（如 MB 或 GB，而非統一顯示 KB）。此外，File Explorer 的地址欄也更流暢，並新增了中鍵點擊資料夾可在新分頁開啟的功能。在系統搜尋（Windows Search）方面，KB5121003 顯著提升了對拼字錯誤（typos）的處理能力，使用戶在搜尋應用程式時更準確。使用者應透過 Windows Update 或直接下載 .msu 檔案進行安裝。由於本次更新涉及多個元件（包括 .NET 8.0.30、.NET Framework 和 .NET 9.0.19），建議準備好接受兩次或多次系統重啟以確保所有修補程式順利安裝。",
    tags: ["Windows 11", "KB5121003", "Patch Tuesday", "File Explorer", "Windows Search", "Microsoft"],
    title_en: "Windows 11 KB5121003 Update Released: Improves Application Startup Speed, Enhances File Explorer Unit Display, and Search Spell Check Capability",
    summary_en: "Microsoft has released Windows 11 KB5121003, a mandatory Patch Tuesday update for August 2026, aimed at enhancing system performance and user experience. This update primarily optimizes application startup speed, especially on lower-spec computers, and significantly improves the unit display within File Explorer. It now automatically selects the most appropriate unit (such as MB or GB, rather than uniformly displaying KB) based on file size. Furthermore, the File Explorer address bar is smoother, and a new feature allows users to open folders in a new tab by middle-clicking them. Regarding system search (Windows Search), KB5121003 significantly enhances the ability to handle typos, making application searching more accurate for users. Users should install this update via Windows Update or by directly downloading the .msu file. Since this update involves multiple components (including .NET 8.0.30, .NET Framework, and .NET 9.0.19), users are advised to prepare for two or more system restarts to ensure all patches are installed successfully.",
    tags_en: ["Windows 11", "KB5121003", "Patch Tuesday", "File Explorer", "Windows Search", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/11/windows-11-kb5121003-out-with-faster-performance-for-apps-search-handling-types-and-more-changes-direct-download-links-msu", lang: "EN" }
    ]
  },
  {
    id: "20260811-029",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows 搜尋元件存在弱身份驗證漏洞，授權攻擊者可本地洩露資訊",
    summary: "本漏洞（CVE-2026-59135）存在於 Microsoft Windows 系統的搜尋元件中，屬於弱身份驗證（Weak authentication）問題。攻擊者若具備本地存取權限（Authorized attacker），可利用此漏洞在本地洩露系統資訊。該漏洞的攻擊向量為本地（Local），權限要求為本地（Local），且無需使用者介面互動（UI:N）。受影響的產品範圍廣泛，包括但不限於 Windows 10 (版本 1607, 1809, 21H2, 22H2) 以及 Windows 11 (版本 23H2, 24H2, 25H2, 26H1) 等多個版本。建議所有用戶應立即透過 Microsoft 官方更新機制，升級至修補版本，以消除此本地資訊洩露風險。",
    tags: ["Microsoft", "Windows", "CVE-2026-59135", "搜尋元件", "弱身份驗證"],
    title_en: "Weak Authentication Vulnerability in Microsoft Windows Search Component Allows Local Information Leakage by Authorized Attackers",
    summary_en: "This vulnerability (CVE-2026-59135) resides in the search component of Microsoft Windows systems and is classified as a Weak authentication issue. An attacker with local access can exploit this vulnerability to leak system information locally. The attack vector is Local, the required privileges are Local, and it does not require user interface interaction (UI:N). The affected product scope is wide, including but not limited to Windows 10 (versions 1607, 1809, 21H2, 22H2) and multiple Windows 11 versions such as 23H2, 24H2, 25H2, and 26H1. All users are advised to immediately upgrade to a patched version through the official Microsoft update mechanism to eliminate this local information leakage risk.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-59135", "Search Component", "Weak Authentication"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-59135", lang: "EN" }
    ]
  },
  {
    id: "20260811-030",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft COM 元件存在未初始化資源漏洞 (CVE-2026-59136)，可能導致本地資訊洩露",
    summary: "本漏洞 CVE-2026-59136 存在於 Microsoft 的 COM 元件中。根據描述，此漏洞是因「使用未初始化資源 (Use of uninitialized resource)」所導致，允許已授權的攻擊者在本地環境中洩露資訊。此漏洞的攻擊向量為本地 (AV:L)，且無需權限 (PR:L)，攻擊複雜度低 (AC:L)，攻擊條件為未經使用者互動 (UI:N)。\n\n雖然 NVD 尚未提供 CVSS 4.0 的評估，但 CVSS 3.1 的評分向量顯示其機密性 (C) 為高 (H)，而完整性 (I) 和可用性 (A) 影響為低或無影響。實務上，這類未初始化資源的漏洞通常會被用於資訊收集或本地權限提升。\n\n由於此漏洞涉及核心系統元件，建議受影響的組織應密切關注 Microsoft 官方的安全公告，並儘快透過官方修補程式進行更新，以修復 COM 元件中的潛在安全缺陷。",
    tags: ["Microsoft", "COM", "CVE-2026-59136", "Windows", "資訊洩露", "未初始化資源"],
    title_en: "Microsoft COM Component Vulnerability (CVE-2026-59136) May Lead to Local Information Leakage",
    summary_en: "The vulnerability CVE-2026-59136 exists within a Microsoft COM component. According to the description, this vulnerability is caused by a \"Use of uninitialized resource,\" allowing an authenticated attacker to leak information in a local environment. The attack vector is local (AV:L), and no privileges are required (PR:L), with low attack complexity (AC:L), and no user interaction required (UI:N).\n\nAlthough NVD has not yet provided a CVSS 4.0 assessment, the CVSS 3.1 scoring vector indicates high confidentiality (C), while integrity (I) and availability (A) are low or have no impact. In practice, this type of uninitialized resource vulnerability is often used for information gathering or local privilege escalation.\n\nBecause this vulnerability involves a core system component, affected organizations are advised to closely monitor official Microsoft security announcements and update promptly using official patches to fix the potential security flaw in the COM component.",
    tags_en: ["Microsoft", "COM", "CVE-2026-59136", "Windows", "Information Leakage", "Uninitialized Resource"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-59136", lang: "EN" }
    ]
  },
  {
    id: "20260811-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Atlassian AI助理Rovo漏洞RovoBlast可遭利用外洩敏感資料，漏洞已修補",
    summary: "資安公司Varonis揭露名為RovoBlast的資安漏洞，影響Atlassian旗下的AI助理Rovo。攻擊者只要引誘使用者點選指定連結，即可觸發嵌入的指令，使Rovo將攻擊者下達的外部參數視為信任參數。此攻擊無須越獄、繞過權限或彈出警示訊息。由於Rovo可透過Rovo Connectors串連Jira、Confluence、Slack、Google Workspace與M365等50多種服務與資料庫，攻擊者可搭配ResearchAgent工具進行Parameter-to-Prompt型式的資料外洩。Atlassian已於同年7月完成修正。",
    tags: ["Atlassian", "Rovo", "Varonis", "RovoBlast", "AI安全", "資料外洩", "ResearchAgent"],
    title_en: "Atlassian AI Assistant Rovo Vulnerability: RovoBlast Could Leak Sensitive Data; Vulnerability Patched",
    summary_en: "Security firm Varonis disclosed a vulnerability named RovoBlast affecting Atlassian's AI assistant, Rovo. An attacker only needs to trick a user into clicking a specified link to trigger an embedded command, causing Rovo to treat external parameters provided by the attacker as trusted parameters. This attack does not require privilege escalation, bypass, or the popping up of alerts. Since Rovo can connect to over 50 services and databases, including Jira, Confluence, Slack, Google Workspace, and M365 via Rovo Connectors, an attacker can use the ResearchAgent tool to perform data leakage in a Parameter-to-Prompt format. Atlassian completed the fix in July of the same year.",
    tags_en: ["Atlassian", "Rovo", "Varonis", "RovoBlast", "AI Security", "Data Leakage", "ResearchAgent"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178045", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Atlassian AI助理Rovo爆發間接提示注入漏洞，未授權即可竊取Jira與Confluence敏感資料",
    summary: "AI資安公司PromptArmor揭露Atlassian AI助理Rovo存在間接提示注入漏洞。攻擊者可誘使使用者要求Rovo依指引產生Jira工單，並上傳隱藏提示注入的檔案。由於Rovo的URL搜尋工具缺乏針對代理程式動態產生URL的防護機制，系統在呼叫該工具開啟指定URL時，會將Jira工單與Confluence文件等敏感資料外洩至攻擊者控制的網站。即使企業停用Rovo網路搜尋功能也無法阻擋攻擊，且使用者介面僅會顯示工單更新，不會留下攻擊跡象。通報後Atlassian雖已立案但迄今尚未修補。",
    tags: ["Atlassian", "Rovo", "PromptArmor", "提示注入", "間接提示注入", "Jira", "Confluence", "AI安全"],
    title_en: "Atlassian AI Assistant Rovo Exposed to Indirect Prompt Injection Vulnerability, Allowing Unauthorized Theft of Jira and Confluence Sensitive Data",
    summary_en: "AI security firm PromptArmor has disclosed an indirect prompt injection vulnerability in Atlassian's AI Assistant, Rovo. An attacker can trick a user into asking Rovo to generate a Jira ticket, while simultaneously uploading a file containing a hidden prompt injection. Because Rovo's URL search tool lacks protection against dynamically generated URLs by proxies, the system leaks sensitive data—such as Jira tickets and Confluence documents—to a website controlled by the attacker when calling this tool to open the specified URL. Even if the enterprise disables Rovo's network search function, the attack cannot be prevented, and the user interface will only display the ticket update, leaving no trace of the attack. Although Atlassian has logged the report, a patch has not yet been released.",
    tags_en: ["Atlassian", "Rovo", "PromptArmor", "Prompt Injection", "Indirect Prompt Injection", "Jira", "Confluence", "AI Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178034", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-033",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "N-central身分驗證漏洞遭積極利用、Metabase零時差漏洞致多事業外洩",
    summary: "8月11日資安焦點包含：N-able旗下RMM工具N-central身分驗證繞過漏洞（CVE-2026-18556、CVE-2026-18577）遭駭客積極利用，攻擊者藉此存取網域控制器與備份伺服器，中國駭客Storm-1175亦疑利用此漏洞部署新型勒索軟體StormEncryptor；Metabase發布修補預防雲端與自建版本遭零時差漏洞（CVE-2026-72898）攻擊，目前已知Framework與Anaconda等企業受害致資料外洩。此外，Paperclip platform爆發嚴重程度10分的漏洞，OpenAI推Daybreak Red安全模型已挖掘逾400項OS Kernel漏洞，ClamAV則修補8個高風險漏洞（包含CVE-2025-8088）。修補建議：管理者應儘速更新N-central、Metabase及ClamAV至最新版本，並封鎖未知端點及重設異常憑證。",
    tags: ["N-central", "CVE-2026-18577", "Metabase", "CVE-2026-72898", "StormEncryptor", "Paperclip", "ClamAV", "勒索軟體"],
    title_en: "N-central Authentication Vulnerability Actively Exploited; Metabase Zero-Day Flaw Leads to Multiple Data Breaches",
    summary_en: "Key cybersecurity focus for August 11th includes: N-able's RMM tool, N-central, which has an authentication bypass vulnerability (CVE-2026-18556, CVE-2026-18577) being actively exploited by hackers. Attackers used this flaw to access domain controllers and backup servers. Chinese hacker group Storm-1175 is also suspected of using this vulnerability to deploy a new ransomware, StormEncryptor. Separately, Metabase released a patch after its cloud and self-hosted versions were attacked by a zero-day vulnerability (CVE-2026-72898). Known victims include enterprises such as Framework and Anaconda, which suffered data leaks. Furthermore, the Paperclip platform experienced a critical vulnerability rated at severity 10, and OpenAI's Daybreak Red security model has uncovered over 400 OS Kernel vulnerabilities. ClamAV also patched eight high-risk vulnerabilities, including CVE-2025-8088. Remediation recommendations: Administrators should promptly update N-central, Metabase, and ClamAV to the latest versions, and block unknown endpoints and reset anomalous credentials.",
    tags_en: ["N-central", "CVE-2026-18577", "Metabase", "CVE-2026-72898", "StormEncryptor", "Paperclip", "ClamAV", "ransomware"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178032", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-034",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Metabase爆發零時差漏洞CVE-2026-72898遭積極利用，恐致SQL注入與管理權限遭接管",
    summary: "開源商業智慧平台 Metabase 官方發出安全警告，指出其雲端服務 Metabase Cloud 遭駭客利用未知的零時差漏洞進行攻擊。經調查，該漏洞編號為 CVE-2026-72898（GitHub 編號 GHSA-vwf4-m7j8-wcjf），屬於嚴重的 SQL 注入漏洞，CVSS v3.1 與 v4.0 的風險評分皆達到滿分 10 分。\n\n未經身分驗證的攻擊者可利用此漏洞將任意 SQL 指令注入 Metabase 應用程式資料庫，進而直接取得管理員存取權限。成功接管後，攻擊者能竄改系統組態設定、竊取資料庫憑證，並任意讀取與匯出資料。\n\n目前 Metabase Cloud 已完成修補；自行部署用戶應儘速升級至 0.58.24、0.59.21、0.60.17、0.61.11、0.62.9 或 0.63.5 等修補版本。若暫時無法更新，應暫時封鎖特定端點因應。",
    tags: ["Metabase", "CVE-2026-72898", "SQL注入", "零時差漏洞", "身份驗證", "商業智慧"],
    title_en: "Metabase Exploited Zero-Day Vulnerability CVE-2026-72898, Leading to SQL Injection and Potential Admin Privilege Takeover",
    summary_en: "The open-source business intelligence platform Metabase issued a security advisory, warning that its cloud service, Metabase Cloud, was being attacked by hackers exploiting an unknown zero-day vulnerability. Investigations revealed that this vulnerability, designated CVE-2026-72898 (GitHub ID GHSA-vwf4-m7j8-wcjf), is a critical SQL injection flaw, achieving a maximum score of 10 points on both the CVSS v3.1 and v4.0 scales.\n\nUnauthenticated attackers can exploit this vulnerability to inject arbitrary SQL commands into the Metabase application database, thereby gaining direct administrator access. After successful compromise, attackers can modify system configuration settings, steal database credentials, and arbitrarily read and export data.\n\nMetabase Cloud has been patched. Users who self-deploy should urgently upgrade to patched versions such as 0.58.24, 0.59.21, 0.60.17, 0.61.11, 0.62.9, or 0.63.5. If immediate updating is not possible, they should temporarily block the specific endpoint as a mitigation measure.",
    tags_en: ["Metabase", "CVE-2026-72898", "SQL Injection", "Zero-Day Vulnerability", "Authentication", "Business Intelligence"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178029", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/178023", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-035",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "N-able N-central身分驗證繞過漏洞遭駭客積極利用，攻擊者部署多款RMM工具與Cloudflare Tunnel建立後門",
    summary: "N-able揭露旗下N-central遠端監控管理系統存在CVE-2026-18556與CVE-2026-18577等身分驗證繞過漏洞，CISA隨後將CVE-2026-18577列入已知遭利用漏洞清單。Huntress與Sophos等資安公司指出，駭客已成功利用該漏洞入侵多個客戶環境。攻擊者在入侵N-central後，可執行指令碼並掌控管理終端，進一步橫向移動至網域控制器與備份伺服器等關鍵主機。攻擊手法包括建立惡意帳號、重設管理員密碼，以及部署AnyDesk、RustDesk等大量RMM工具與伪裝成系統元件的Cloudflare Tunnel以建立持久性後門。建議受影響組織應儘速更新至安全版本並清查異常網域帳號與RMM連線。",
    tags: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "CISA KEV", "RMM", "Huntress", "Sophos"],
    title_en: "N-able N-central Authentication Bypass Vulnerabilities Actively Exploited by Hackers; Attackers Deploy Multiple RMM Tools and Cloudflare Tunnels to Establish Backdoors",
    summary_en: "N-able disclosed authentication bypass vulnerabilities, including CVE-2026-18556 and CVE-2026-18577, in its N-central remote monitoring and management system. CISA subsequently listed CVE-2026-18577 on its Known Exploited Vulnerabilities Catalog. Cybersecurity firms such as Huntress and Sophos have pointed out that hackers have successfully exploited these vulnerabilities to breach multiple customer environments. After gaining access to N-central, attackers can execute scripts and take control of the management terminal, further moving laterally to critical hosts such as domain controllers and backup servers. Attack techniques include creating malicious accounts, resetting administrator passwords, and deploying numerous RMM tools like AnyDesk and RustDesk, along with Cloudflare Tunnels disguised as system components, to establish persistent backdoors. Affected organizations are advised to promptly update to the secure version and investigate for abnormal domain accounts and RMM connections.",
    tags_en: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "CISA KEV", "RMM", "Huntress", "Sophos"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178018", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "N-able修補遠端監控平台N-central零日漏洞CVE-2026-18577，駭客植入Cloudflare隧道維持權限",
    summary: "遠端管理與監控平台業者N-able於8月初針對旗下N-central平台釋出修補更新與Hotfix 2（2026.3.1.10），以對抗身分驗證繞過漏洞CVE-2026-18577（CVSS v4.0評分為8.2分）。該漏洞最初被登記為CVE-2026-18556，係因其MDR服務於7月底偵測到異常攻擊而曝光。攻擊者能在未經身分驗證的情況下以管理者權限遠端存取系統，並透過 Take Control 功能連線至受管理裝置，隨後註冊 Cloudflare 隧道服務以建立持久性後門存取。N-able已證實有少量客戶受害並已主動聯繫，建議用戶應儘速套用最新Hotfix更新以確保安全。",
    tags: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "身分驗證繞過", "零日漏洞", "Cloudflare Tunnel"],
    title_en: "N-able Patches N-central Zero-Day Vulnerability CVE-2026-18577; Attackers Implant Cloudflare Tunnel to Maintain Access",
    summary_en: "Remote monitoring and management platform vendor N-able released a patched update and Hotfix 2 (2026.3.1.10) in early August to address the authentication bypass vulnerability CVE-2026-18577 (CVSS v4.0 score of 8.2). The vulnerability was initially registered as CVE-2026-18556, having been exposed after MDR services detected abnormal attacks in late July. Attackers could remotely access the system with administrator privileges without authentication and connect to managed devices via the Take Control function, subsequently registering Cloudflare Tunnel service to establish persistent backdoor access. N-able has confirmed that a small number of customers were affected and has proactively contacted them, advising users to apply the latest Hotfix update immediately to ensure security.",
    tags_en: ["N-able", "N-central", "CVE-2026-18577", "CVE-2026-18556", "Authentication Bypass", "Zero-Day Vulnerability", "Cloudflare Tunnel"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178020", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/178011", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-037",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iPhone 20 週年全玻璃改款設計傳出仍按計畫進行",
    summary: "根據彭博社（Bloomberg）最新報導，儘管先前有傳聞指出 Apple 打算取消長期謠傳的全玻璃機身設計，但針對 iPhone 推出 20 週年的重大外觀重新設計，目前仍按計畫進行中，預計將於明年的 Pro 系列機型中正式亮相。雖然報導聚焦於消費性硬體產品的設計更新與供應鏈動態，目前原文尚未揭露任何與資安漏洞、CVSS 評分或技術攻擊向量相關的資訊。相關受影響產品主要為未來發佈的旗艦 iPhone 裝置。",
    tags: ["Apple", "iPhone", "Hardware", "20th Anniversary", "Bloomberg"],
    title_en: "Apple iPhone 20th Anniversary All-Glass Redesign Rumors Continue as Planned",
    summary_en: "According to a recent report from Bloomberg, although previous rumors suggested Apple might cancel the long-standing rumor of an all-glass body design, the major aesthetic redesign for the iPhone's 20th anniversary is still proceeding as planned. It is expected to debut in next year's Pro series models. While the report focuses on design updates and supply chain dynamics for consumer hardware products, the original text has not disclosed any information related to security vulnerabilities, CVSS scores, or technical attack vectors. The affected products are primarily the future flagship iPhone devices.",
    tags_en: ["Apple", "iPhone", "Hardware", "20th Anniversary", "Bloomberg"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/10/apples-20th-anniversary-iphone-redesign-reportedly-remains-on-track", lang: "EN" }
    ]
  },
  {
    id: "20260811-038",
    trackers: ["os"],
    category: "Apple",
    title: "Jefferies因傳出蘋果取消iPhone 20週年全玻璃機身設計調降Apple股票評級",
    summary: "華爾街投資機構Jefferies將蘋果公司（Apple）的股票評級調降至「落後大盤」（Underperform）。分析師Edison Lee引述供應鏈調查指出，蘋果原定於iPhone推出20週年（預計2027年）發表的全玻璃機身iPhone新機開發計畫，因生產良率過低問題已遭喊停。\n\n此決策恐使蘋果失去推升高單價旗艦機種平均售價與毛利率的機會，難以抵銷記憶體與組件成本持續飆升的壓力。目前蘋果未公開回應相關消息，市場也持續關注其AI策略與後續iPhone 19 Pro等產品線的成本走向，其他創新設計是否受影響仍有待觀察。",
    tags: ["Apple", "iPhone", "Jefferies", "全玻璃機身", "股市評級", "供應鏈"],
    title_en: "Jefferies Downgrades Apple Stock Rating Amid Reports of Glass Body Design Cut for iPhone 20th Anniversary",
    summary_en: "Investment firm Jefferies downgraded Apple's stock rating to \"Underperform.\" Analyst Edison Lee cited supply chain investigations, pointing out that Apple's planned development of a fully glass-bodied iPhone for its 20th anniversary (expected in 2027) has been halted due to low production yield rates. This decision could deprive Apple of the opportunity to raise the average selling price and gross margin of its flagship models, making it difficult to offset the continuous pressure from soaring memory and component costs. Apple has not publicly responded to the news, and the market continues to monitor its AI strategy and the cost trajectory of subsequent product lines, such as the iPhone 19 Pro. Whether other innovative designs will be affected remains to be seen.",
    tags_en: ["Apple", "iPhone", "Jefferies", "Glass Body", "Stock Rating", "Supply Chain"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/10/jefferies-downgrades-apple-stock-cites-all-glass-iphone-cancellation-rumor", lang: "EN" }
    ]
  },
  {
    id: "20260811-039",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA新增三項已知遭利用漏洞：涵蓋Cisco ASA、Windows WinSock及Metabase等高風險資安威脅",
    summary: "美國網路安全局（CISA）宣布，根據活動利用證據，已將三個新的漏洞納入其「已知遭利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。這三個漏洞包括：CVE-2026-20349，影響Cisco Secure Firewall Adaptive Security Appliance (ASA) 和 Firewall Threat Defense (FTD) 的堆積檢查漏洞；CVE-2026-68820，影響Microsoft Windows的WinSock使用後釋放漏洞；以及CVE-2026-72898，影響Metabase的SQL注入漏洞。CISA指出，這類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業構成重大風險。此外，CISA的《具約束力的營運指令》（BOD 26-04）要求聯邦政府機構必須優先修補KEV目錄中的高風險漏洞，特別是那些在公開資產上、且成功利用後能完全控制系統的漏洞。CISA鼓勵所有組織應採納基於風險的漏洞管理方法，並優先修補KEV目錄中的漏洞，以降低整體資安風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-20349", "CVE-2026-68820", "CVE-2026-72898", "Cisco ASA", "Windows"],
    title_en: "CISA Adds Three Known Exploited Vulnerabilities: High-Risk Threats Affecting Cisco ASA, Windows WinSock, and Metabase",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that, based on evidence of active exploitation, it has added three new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog. These three vulnerabilities include: CVE-2026-20349, a stack-checking vulnerability affecting Cisco Secure Firewall Adaptive Security Appliance (ASA) and Firewall Threat Defense (FTD); CVE-2026-68820, a use-after-free vulnerability affecting Microsoft Windows WinSock; and CVE-2026-72898, an SQL injection vulnerability affecting Metabase. CISA noted that these types of vulnerabilities are commonly used attack vectors by malicious actors and pose significant risks to federal enterprises. Furthermore, CISA's Binding Operational Directive (BOD 26-04) requires federal government agencies to prioritize patching high-risk vulnerabilities listed in the KEV catalog, especially those that reside on public assets and allow for complete system control after successful exploitation. CISA encourages all organizations to adopt a risk-based vulnerability management approach and prioritize patching vulnerabilities listed in the KEV catalog to reduce overall cybersecurity risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-20349", "CVE-2026-68820", "CVE-2026-72898", "Cisco ASA", "Windows"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/08/11/cisa-adds-three-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260811-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警告：Mira Hormone Monitor 韌體與 App 存在多個高風險漏洞，可能遭遠端未授權存取健康資料",
    summary: "Quanovate Tech Inc. (營運名稱為 Mira / Mira Care) 的 Mira Hormone Monitor 設備韌體及 Mira Android App 存在多個高風險漏洞，包括 CVE-2026-66875、CVE-2026-66098 等。這些漏洞主要涉及未經身份驗證的關鍵功能存取、身份驗證繞過及弱密碼機制。\n\n若漏洞被成功利用，攻擊者可透過藍牙低能耗 (BLE) 範圍，未經授權存取、修改健康資料，甚至導致服務中斷 (Denial-of-Service)，並可能取得使用者帳號控制權。\n\n受影響產品版本為 Mira Monitor Firmware 1.7.1.47 及 Mira Android App 4.5.15.4。修復建議是使用者應透過 App 更新至最新版本，韌體版本應更新至 v01.07.01.53，App 版本應更新至 iOS v3.5.18 或 Android v4.5.18。廠商已提供修復措施，使用者無需額外操作。",
    tags: ["Quanovate Tech Inc.", "Mira Hormone Monitor", "CVE-2026-66875", "CVE-2026-66098", "醫療設備", "BLE"],
    title_en: "Warning: Multiple High-Risk Vulnerabilities Found in Mira Hormone Monitor Firmware and App, Potentially Allowing Unauthorized Remote Access to Health Data",
    summary_en: "The Mira Hormone Monitor device firmware and the Mira Android App, developed by Quanovate Tech Inc. (operating as Mira / Mira Care), contain multiple high-risk vulnerabilities, including CVE-2026-66875 and CVE-2026-66098. These vulnerabilities primarily involve unauthorized access to critical functions without authentication, authentication bypass, and weak password mechanisms.\n\nIf successfully exploited, attackers could gain unauthorized access to or modify health data via the Bluetooth Low Energy (BLE) range, potentially causing Denial-of-Service, and could even acquire control over the user's account.\n\nThe affected product versions are Mira Monitor Firmware 1.7.1.47 and Mira Android App 4.5.15.4. The recommended remediation is for users to update the App to the latest version, and the firmware should be updated to v01.07.01.53, and the App to iOS v3.5.18 or Android v4.5.18. The vendor has provided the fix, and no additional user action is required.",
    tags_en: ["Quanovate Tech Inc.", "Mira Hormone Monitor", "CVE-2026-66875", "CVE-2026-66098", "Medical Device", "BLE"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/ics-medical-advisories/icsma-26-223-01", lang: "EN" }
    ]
  },
  {
    id: "20260811-041",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟八月補丁週發布大量CVE，專家提醒應聚焦高風險的EoP與RCE漏洞",
    summary: "微軟近期發布了大量安全更新，本月補丁週修復了 421 個獨特 CVE，其中包括兩個零日漏洞。這些漏洞影響範圍廣泛，涵蓋 Windows、Office 和 SharePoint Server 等多個產品線。安全專家指出，面對如此龐大的補丁量，組織不應被數量所淹沒，而應將重點放在優先修補的關鍵漏洞。\n\n本月最需關注的漏洞包括：CVE-2026-68820，這是一個影響 Windows Ancillary Function Driver for WinSock 的權限提升（EoP）漏洞，可供本地認證攻擊者無需用戶互動即可取得 SYSTEM 級別權限；以及 CVE-2026-62832，這是一個公開已知漏洞，與上述漏洞結合，可能導致系統完全被攻陷。\n\n此外，還有其他高風險漏洞值得注意，例如 CVE-2026-62878，這是一個無需用戶互動的 Windows DNS Server 遠端程式碼執行（RCE）漏洞，被描述為可傳播的堆疊型緩衝區溢出；以及 CVE-2026-62815，這是影響 QUIC 網路傳輸協定的 RCE 漏洞。專家建議，即使微軟評估某些高嚴重性漏洞的利用可能性較低，企業仍應儘快測試並部署修補程式，特別是針對暴露在網際網路的服務。",
    tags: ["Microsoft", "Patch Tuesday", "CVE-2026-68820", "CVE-2026-62878", "RCE", "EoP", "Windows"],
    title_en: "Microsoft's August Patch Tuesday Releases Numerous CVEs; Experts Advise Focusing on High-Risk EoP and RCE Vulnerabilities",
    summary_en: "Microsoft recently released a large volume of security updates, with this month's Patch Tuesday fixing 421 unique CVEs, including two zero-day vulnerabilities. These vulnerabilities affect a wide range of products, including Windows, Office, and SharePoint Server. Security experts point out that faced with such a massive volume of patches, organizations should not be overwhelmed by the sheer number, but rather focus on patching critical vulnerabilities with the highest priority.\n\nThe most critical vulnerabilities to watch this month include: CVE-2026-68820, an Elevation of Privilege (EoP) vulnerability affecting the Windows Ancillary Function Driver for WinSock, which allows a local authenticated attacker to gain SYSTEM-level privileges without user interaction; and CVE-2026-62832, a publicly known vulnerability that, when combined with the aforementioned vulnerability, could potentially lead to complete system compromise.\n\nAdditionally, other high-risk vulnerabilities warrant attention, such as CVE-2026-62878, a Windows DNS Server Remote Code Execution (RCE) vulnerability that requires no user interaction and is described as a transmissible stack buffer overflow; and CVE-2026-62815, an RCE vulnerability affecting the QUIC network transport protocol. Experts recommend that even if Microsoft assesses the exploitability of certain high-severity vulnerabilities as low, enterprises should still promptly test and deploy patches, especially for services exposed to the internet.",
    tags_en: ["Microsoft", "Patch Tuesday", "CVE-2026-68820", "CVE-2026-62878", "RCE", "EoP", "Windows"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/microsofts-patch-tuesday-deluge-continues", lang: "EN" }
    ]
  },
  {
    id: "20260811-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gunra勒索軟體集團利用Fortinet漏洞及繞過MFA，攻擊關鍵基礎設施",
    summary: "一個不斷發展的勒索軟體即服務（RaaS）犯罪集團Gunra，正利用已知的漏洞和防火牆/VPN設備的缺陷，在全球範圍內攻擊關鍵基礎設施和政府機構。該集團的勒索軟體基於已停用Conti集團洩露的程式碼，並已擴展至Linux和Windows環境。FBI和美國政府機構警告，Gunra利用了Fortinet產品的兩個已知漏洞進行初始存取：CVE-2024-55591（FortiOS/FortiProxy的關鍵身份驗證繞過漏洞）和CVE-2025-24472（高嚴重性身份驗證繞過漏洞）。攻擊者還能透過控制SSL-VPN設備，竊取員工憑證和會話資訊，並利用這些資訊繞過目標組織的多因素驗證（MFA）。此外，Gunra還會修改VDI認證門戶伺服器上的身份驗證處理檔案，允許輸入特定的一次性密碼（OTP）值來持續繞過MFA。建議組織應優先修補所有面向網際網路的設備漏洞，實施離線不可變備份，並進行網路區段化，以限制攻擊範圍。",
    tags: ["Gunra", "Fortinet", "CVE-2024-55591", "CVE-2025-24472", "RaaS", "MFA"],
    title_en: "Gunra Ransomware Group Exploits Fortinet Vulnerabilities and Bypasses MFA to Attack Critical Infrastructure",
    summary_en: "Gunra, a rapidly evolving Ransomware-as-a-Service (RaaS) criminal group, is attacking critical infrastructure and government organizations globally by exploiting known vulnerabilities and flaws in firewall/VPN equipment. The group's ransomware is based on code leaked by the defunct Conti group and has been expanded to both Linux and Windows environments. The FBI and U.S. government agencies warn that Gunra is utilizing two known vulnerabilities in Fortinet products for initial access: CVE-2024-55591 (a critical identity authentication bypass vulnerability in FortiOS/FortiProxy) and CVE-2025-24472 (a high-severity identity authentication bypass vulnerability). Furthermore, attackers can steal employee credentials and session information by controlling SSL-VPN equipment, and then use this information to bypass the target organization's Multi-Factor Authentication (MFA). Additionally, Gunra modifies identity authentication processing files on VDI credential gateways, allowing the continuous bypass of MFA by inputting specific One-Time Password (OTP) values. Organizations are advised to prioritize patching all internet-facing device vulnerabilities, implementing offline immutable backups, and performing network segmentation to limit the scope of attacks.",
    tags_en: ["Gunra", "Fortinet", "CVE-2024-55591", "CVE-2025-24472", "RaaS", "MFA"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/gunra-ransomware-gang-fortinet-flaws-bypasses-mfa", lang: "EN" },
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/11/feds-warn-gunra-ransomware-is-exploiting-known-bugs-to-hit-critical-infrastructure/5286263", lang: "EN" }
    ]
  },
  {
    id: "20260811-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟分析DeadLock勒索軟體：利用Polygon區塊鏈與去中心化網路分散攻擊系統",
    summary: "微軟威脅情報團隊分析了名為DeadLock的勒索軟體。該勒索軟體自2025年7月出現，已在外洩網站公布超過80個受害組織，其中半數以上位於歐洲。DeadLock的攻擊模式結合了多種去中心化技術，包括利用Polygon區塊鏈的智慧合約來上傳代理伺服器網址與外洩網站內容，並透過多個公開節點取得資料。受害者與攻擊者之間的通訊則經由Session去中心化通訊網路傳送，而遭竊資料則可能存放在Wasabi雲端儲存服務。這種分散式架構讓攻擊者在更換服務時，無需修改受害者電腦上的網頁檔案，提高了系統的韌性。此外，DeadLock的Rust加密程式設計了負載控制機制，在加密新檔案前會檢查電腦的CPU和記憶體使用情況，以避免系統過載。微軟指出，雖然系統分散，但仍依賴可讀取Polygon節點、攻擊者代理伺服器及Wasabi等外部服務，這些服務中斷仍可能影響攻擊的完整性。",
    tags: ["DeadLock", "微軟", "勒索軟體", "Polygon區塊鏈", "Session", "Wasabi"],
    title_en: "Microsoft Analyzes DeadLock Ransomware: Utilizing Polygon Blockchain and Decentralized Networks to Disperse Attack Systems",
    summary_en: "Microsoft's Threat Intelligence team analyzed a ransomware strain named DeadLock. This ransomware appeared in July 2025 and has exposed over 80 victim organizations on its leak site, more than half of which are located in Europe. DeadLock's attack pattern combines multiple decentralized technologies, including using smart contracts on the Polygon blockchain to upload proxy server addresses and leak site content, and acquiring data through multiple public nodes. Communication between the victim and the attacker is transmitted via the Session decentralized communication network, while stolen data may be stored on Wasabi cloud storage service. This decentralized architecture allows attackers to change services without modifying the webpage files on the victim's computer, thereby increasing system resilience. Furthermore, DeadLock's Rust-encrypted code designs a load control mechanism that checks the computer's CPU and memory usage before encrypting new files, preventing system overload. Microsoft noted that although the system is decentralized, it still relies on external services such as readable Polygon nodes, attacker proxy servers, and Wasabi, the disruption of which could still affect the integrity of the attack.",
    tags_en: ["DeadLock", "Microsoft", "Ransomware", "Polygon Blockchain", "Session", "Wasabi"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178048", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用裝置驗證碼流程攻擊 Microsoft 365：Any.run揭露 Kali365 釣魚工具威脅",
    summary: "近期駭客利用 Microsoft 裝置驗證碼（Device Code）流程，透過 Kali365 等釣魚工具，成為入侵 Microsoft 365 帳號的新興手法。此類攻擊的特殊性在於，攻擊者並非引導受害者進入偽造登入頁面，而是將其導向真正的 Microsoft 登入網站，再誘騙受害者輸入攻擊者產生的裝置驗證碼。藉此，攻擊者能夠取得 Microsoft 365 的 OAuth 存取權杖，從而持續存取受害者的郵件、檔案及其他雲端資源，而無需直接竊取用戶密碼。這使得傳統依賴密碼和多因素驗證（MFA）的防禦機制出現盲點。Any.run 觀察到自今年 4 月以來，相關攻擊活動持續發生，主要目標為美國企業。為應對此類濫用合法驗證流程的威脅，資安業者建議企業不能僅依賴傳統釣魚或密碼竊取偵測，應著重限制裝置驗證碼流程、監控 OAuth 權杖的簽發異常，並準備好執行權杖層面的防禦措施，例如撤銷活動連線、使更新權杖失效及檢查 OAuth 授權。",
    tags: ["Microsoft 365", "裝置驗證碼", "OAuth 權杖", "Kali365", "釣魚攻擊", "Any.run"],
    title_en: "Hackers Exploit Device Code Flow to Attack Microsoft 365: Any.run Reveals Kali365 Phishing Tool Threat",
    summary_en: "Recently, hackers have utilized the Microsoft Device Code flow, using phishing tools like Kali365, as a novel method for compromising Microsoft 365 accounts. The unique aspect of this attack is that the attacker does not guide the victim to a fake login page; instead, they direct the victim to the genuine Microsoft login website and then trick the victim into entering a device code generated by the attacker. By doing so, the attacker can obtain an OAuth access token for Microsoft 365, allowing continuous access to the victim's email, files, and other cloud resources without needing to directly steal the user's password. This creates a blind spot in traditional defense mechanisms that rely on passwords and Multi-Factor Authentication (MFA). Any.run has observed that related attack activity has been ongoing since April of this year, primarily targeting US enterprises. To counter this threat, which abuses legitimate verification processes, cybersecurity professionals recommend that enterprises should not rely solely on traditional phishing or credential theft detection. Instead, they should focus on restricting the device code flow, monitoring for abnormal OAuth token issuance, and preparing to execute token-level defense measures, such as revoking active sessions, invalidating refresh tokens, and checking OAuth permissions.",
    tags_en: ["Microsoft 365", "Device Code", "OAuth Token", "Kali365", "Phishing Attack", "Any.run"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178049", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Adobe 緊急修補：ColdFusion、Campaign Classic 等產品修復多項高風險漏洞，包含 RCE 與 OS 指令注入",
    summary: "Adobe 在週二發布修補程式，涵蓋其產品線的超過 50 個漏洞，其中 ColdFusion、Campaign Classic 和 Commerce 包含多個關鍵級缺陷。ColdFusion 的更新修復了 15 個安全缺陷，包括三個關鍵漏洞，可能導致任意程式碼執行（RCE）和應用程式服務拒絕（DoS）。其中包含 OS 指令注入漏洞 CVE-2026-48362（CVSS 10/10）、eval 注入漏洞 CVE-2026-48273（CVSS 9.9/10）和不正確授權漏洞 CVE-2026-71384（CVSS 9.6/10）。Campaign Classic 的更新也具有優先級 1 評級，修復了三個關鍵缺陷，可導致任意程式碼執行：包括兩個不正確授權問題 CVE-2026-71398 和 CVE-2026-27302（CVSS 10/10），以及一個 SQL 注入漏洞 CVE-2026-48381（CVSS 9.0/10）。Adobe 建議用戶應立即為這兩款產品應用修補程式。Commerce 產品修復了 CVE-2026-71362（CVSS 9.1/10）等漏洞，建議在 30 天內更新。Adobe 強調，這些缺陷具有較高的被利用風險，用戶應立即採取行動。",
    tags: ["Adobe", "ColdFusion", "Campaign Classic", "CVE-2026-48362", "RCE", "OS 指令注入"],
    title_en: "Adobe Emergency Patch: Multiple High-Risk Vulnerabilities Fixed in Products Including ColdFusion and Campaign Classic, Including RCE and OS Command Injection",
    summary_en: "Adobe released patches on Tuesday covering over 50 vulnerabilities across its product line, including multiple critical flaws in ColdFusion, Campaign Classic, and Commerce. The ColdFusion update fixes 15 security flaws, including three critical vulnerabilities that could lead to Remote Code Execution (RCE) and Denial of Service (DoS). These include an OS Command Injection vulnerability, CVE-2026-48362 (CVSS 10/10); an eval injection vulnerability, CVE-2026-48273 (CVSS 9.9/10); and an improper authorization vulnerability, CVE-2026-71384 (CVSS 9.6/10). The Campaign Classic update also carries a Priority 1 rating, fixing three critical flaws that could lead to arbitrary code execution: including two improper authorization issues, CVE-2026-71398 and CVE-2026-27302 (CVSS 10/10), and one SQL injection vulnerability, CVE-2026-48381 (CVSS 9.0/10). Adobe advises users to apply patches immediately for these two products. The Commerce product fixed vulnerabilities such as CVE-2026-71362 (CVSS 9.1/10) and recommends updating within 30 days. Adobe emphasized that these flaws carry a high risk of exploitation, and users should act immediately.",
    tags_en: ["Adobe", "ColdFusion", "Campaign Classic", "CVE-2026-48362", "RCE", "OS Command Injection"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/adobe-urges-immediate-patching-of-critical-coldfusion-campaign-classic-flaws", lang: "EN" }
    ]
  },
  {
    id: "20260811-046",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zoom修補四個漏洞，其中包含零點擊遠端代碼執行（RCE）的嚴重缺陷",
    summary: "Zoom於週二宣布為其產品修補四個漏洞，其中包括一個極為嚴重的缺陷，允許進行零點擊遠端代碼執行（RCE）。這三個安全缺陷都存在於使用專有協定的註釋器（annotator）功能中，影響所有支援平台的Zoom客戶。最嚴重的漏洞是CVE-2026-53413，這是一個記憶體損壞問題，允許會議參與者在沒有受害者任何操作的情況下，將代碼執行到其他參與者的機器上。攻擊者可利用註釋器專有協定在觀看者和分享者之間建立的直接通道，針對個別會議參與者。該漏洞源於文本註釋器中缺少邊界檢查，允許攻擊者發送惡意訊息，將代碼寫入超出預定緩衝區的位置，從而導致RCE。此外，Zoom還修補了CVE-2026-53414，一個可觸發緩衝區過讀並導致拒絕服務（DoS）的缺陷。Zoom已為Workplace版本、Rooms版本和Meeting SDK等產品發布了修補程式，建議所有用戶立即更新至最新版本，以修補這些關鍵漏洞。",
    tags: ["Zoom", "CVE-2026-53413", "RCE", "零點擊", "記憶體損壞", "註釋器"],
    title_en: "Zoom patches four vulnerabilities, including critical zero-click Remote Code Execution (RCE) flaw",
    summary_en: "Zoom announced on Tuesday that it has patched four vulnerabilities in its products, including an extremely severe flaw that allows for zero-click Remote Code Execution (RCE). Three of these security defects reside within the annotator function, which uses a proprietary protocol, affecting Zoom clients across all supported platforms. The most critical vulnerability is CVE-2026-53413, a memory corruption issue that allows a meeting participant to execute code on another participant's machine without any action from the victim. An attacker can exploit the direct channel established by the annotator's proprietary protocol between a viewer and a sharer to target individual meeting participants. This flaw stems from a lack of boundary checking in the text annotator, allowing an attacker to send malicious messages that write code outside the designated buffer, thereby causing RCE. Additionally, Zoom patched CVE-2026-53414, a defect that could trigger a buffer over-read leading to Denial of Service (DoS). Zoom has released patches for products such as Workplace, Rooms, and Meeting SDK, and advises all users to update immediately to the latest version to mitigate these critical vulnerabilities.",
    tags_en: ["Zoom", "CVE-2026-53413", "RCE", "Zero-Click", "Memory Corruption", "Annotator"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/zoom-patches-zero-click-code-execution-vulnerability", lang: "EN" }
    ]
  },
  {
    id: "20260811-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SAP發布28項安全補丁：修復多個高危險性漏洞，包括CVE-2026-58231及記憶體汙染問題",
    summary: "企業軟體製造商SAP於本月發布了28項安全說明，並修補了多個關鍵漏洞。其中最嚴重的漏洞為CVE-2026-58231，這是一個發生在SAP Commerce Cloud (Data Hub Adapter) 的不當授權問題，可能允許遠端攻擊者繞過身份驗證，進而導致程式碼執行和未經授權存取內部組件。此外，SAP還修復了兩個關鍵的程式碼注入缺陷：CVE-2026-44772和CVE-2026-44758。這些漏洞允許攻擊者提交特殊編寫的輸入，在底層主機上執行任意指令，導致整個基礎設施遭到徹底危害。另一個高危險性缺陷為CVE-2026-34265，這是一個發生在NetWeaver Application Server ABAP的記憶體汙染問題，源於DIAG協定解析中的邏輯錯誤，可無需身份驗證即可利用，導致敏感資訊洩露或系統崩潰。SAP提醒用戶應立即更新所有相關組件，以修補這些高風險的漏洞。",
    tags: ["SAP", "CVE-2026-58231", "CVE-2026-44772", "CVE-2026-34265", "SAP Commerce Cloud", "記憶體汙染", "程式碼注入"],
    title_en: "SAP Releases 28 Security Patches: Fixing Multiple High-Risk Vulnerabilities, Including CVE-2026-58231 and Memory Corruption Issues",
    summary_en: "Enterprise software manufacturer SAP released 28 security advisories this month, patching multiple critical vulnerabilities. The most severe vulnerability is CVE-2026-58231, an improper authorization issue found in SAP Commerce Cloud (Data Hub Adapter). This flaw could allow a remote attacker to bypass authentication, leading to remote code execution and unauthorized access to internal components. Furthermore, SAP patched two critical code injection defects: CVE-2026-44772 and CVE-2026-44758. These vulnerabilities allow attackers to submit specially crafted input that executes arbitrary commands on the underlying host, potentially compromising the entire infrastructure. Another high-risk defect is CVE-2026-34265, a memory corruption issue in NetWeaver Application Server ABAP. This stems from a logical error during DIAG protocol parsing and can be exploited without authentication, leading to sensitive information leakage or system crash. SAP urges users to immediately update all affected components to patch these high-risk vulnerabilities.",
    tags_en: ["SAP", "CVE-2026-58231", "CVE-2026-44772", "CVE-2026-34265", "SAP Commerce Cloud", "Memory Corruption", "Code Injection"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/sap-patches-critical-code-injection-memory-corruption-vulnerabilities", lang: "EN" }
    ]
  },
  {
    id: "20260811-048",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟發布月度安全更新：修補 398 個漏洞，包含正在被利用的 Windows 核心驅動程式漏洞 CVE-2026-68820",
    summary: "微軟於本月發布了月度安全更新，修補了共 398 個新的 CVE，其中包含 62 個關鍵漏洞。本次更新中，最引人注意的是 CVE-2026-68820，這是一個位於處理網路 Socket 操作的 Windows 核心驅動程式（afd.sys）的 Use-After-Free 漏洞。該漏洞被標記為正在積極被利用，攻擊者若已在目標機器上運行程式碼，可利用此漏洞進行權限提升，達到 SYSTEM 權限。此外，本次更新還修補了四個無需任何用戶互動或帳號的遠端程式碼執行（RCE）漏洞，包括影響 Windows DNS Server (CVE-2026-62878)、Windows Deployment Services (CVE-2026-62893)、Microsoft QUIC 協定 (CVE-2026-62815) 和 HPC Pack (CVE-2026-59124)。其中，CVE-2026-62878 被描述為可蠕蟲化，具備極高的實務風險。此外，本次更新也完成了 SharePoint 鏈式漏洞的修補，修補了 RCE 組件 CVE-2026-63520，與先前修補的身份驗證繞過漏洞 (CVE-2026-55040) 共同封堵了未經身份驗證的 RCE 路徑。建議系統管理員應優先修補 CVE-2026-68820，其次是所有暴露的 DNS、WDS、QUIC 和 HPC 服務，並確保內部部署的 SharePoint 伺服器已完成兩階段修補。",
    tags: ["Microsoft", "CVE-2026-68820", "Windows Kernel", "RCE", "權限提升", "CVE-2026-62878", "SharePoint"],
    title_en: "Microsoft Releases Monthly Security Update: Patches 398 Vulnerabilities, Including Exploited Windows Kernel Driver Flaw CVE-2026-68820",
    summary_en: "Microsoft has released its monthly security update, patching a total of 398 new CVEs, including 62 critical vulnerabilities. The most notable vulnerability in this update is CVE-2026-68820, a Use-After-Free flaw located in the Windows kernel driver (afd.sys) responsible for handling network socket operations. This vulnerability is marked as actively exploited, allowing an attacker who has already executed code on the target machine to achieve privilege escalation to SYSTEM level. Furthermore, the update patches four remote code execution (RCE) vulnerabilities that require no user interaction or account credentials. These include flaws affecting Windows DNS Server (CVE-2026-62878), Windows Deployment Services (CVE-2026-62893), Microsoft QUIC protocol (CVE-2026-62815), and HPC Pack (CVE-2026-59124). Notably, CVE-2026-62878 is described as wormable, posing an extremely high practical risk. Additionally, this update completes the patching of a SharePoint chain vulnerability, addressing the RCE component CVE-2026-63520, which, combined with the previously patched authentication bypass vulnerability (CVE-2026-55040), seals an unauthenticated RCE path. System administrators are advised to prioritize patching CVE-2026-68820, followed by all exposed DNS, WDS, QUIC, and HPC services, and to ensure that internally deployed SharePoint servers complete the two-stage patching process.",
    tags_en: ["Microsoft", "CVE-2026-68820", "Windows Kernel", "RCE", "Privilege Escalation", "CVE-2026-62878", "SharePoint"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/08/microsoft-plugs-nearly-400-security-holes", lang: "EN" },
      { name: "SecurityWeek", url: "https://securityweek.com/august-2026-patch-tuesday-microsoft-fixes-421-cves-one-exploited-zero-day", lang: "EN" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html", lang: "EN" },
      { name: "The Register", url: "https://theregister.com/security/2026/08/11/421-bugs-in-microsofts-patch-tuesday-release-and-the-norks-have-already-attacked-one/5286483", lang: "EN" }
    ]
  },
  {
    id: "20260811-049",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 Kimwolf v7 Android Botnet 具備 HTTP/2 洪泛攻擊，並利用 ENS 與 Tor 提升韌性",
    summary: "資安研究人員透過 Palo Alto Networks Unit 42 發現了 Kimwolf/AISURU 的新版本 v7。此新型 Android 和 IoT 殭屍網路在執行分散式阻斷服務（DDoS）攻擊時，具備利用 HTTP/2 協定並建構完整瀏覽器指紋的能力，使得攻擊流量難以與正常瀏覽區分。在 C2（命令與控制）基礎設施方面，v7 採用分層機制，利用 Ethereum Name Service (ENS) 查詢 C2 位址，並硬編碼了 Tor 的 .onion 隱藏服務作為備用，同時透過本地代理（127.0.0[.]1:23075）路由所有流量，使其更難被瓦解。該殭屍網路主要針對具備 Android Debug Bridge (ADB) 功能的 Android TV 盒子，並嘗試偽裝成系統正常程序（如 \"netd_service\"）以躲避偵測。專家建議，組織應將 Android TV 盒子視為不可信設備，並將其與企業網路進行網路區隔，或限制 ADB 僅限於 USB 存取，以消除主要的傳播途徑。",
    tags: ["Kimwolf", "AISURU", "Android Botnet", "DDoS", "HTTP/2", "ENS", "Tor"],
    title_en: "New Kimwolf v7 Android Botnet Features HTTP/2 Flooding Attacks and Uses ENS and Tor to Enhance Resilience",
    summary_en: "Cybersecurity researchers, through Palo Alto Networks Unit 42, discovered a new version, v7, of the Kimwolf/AISURU botnet. This new Android and IoT zombie network is capable of utilizing the HTTP/2 protocol and constructing complete browser fingerprints when executing Distributed Denial of Service (DDoS) attacks, making the attack traffic difficult to distinguish from normal browsing traffic. Regarding its C2 (Command and Control) infrastructure, v7 employs a layered mechanism, using Ethereum Name Service (ENS) queries to resolve C2 addresses, and hardcoding a Tor .onion hidden service as a backup, while routing all traffic through a local proxy (127.0.0[.]1:23075) to make it harder to dismantle. The botnet primarily targets Android TV boxes with Android Debug Bridge (ADB) functionality, and attempts to disguise itself as legitimate system processes (such as \"netd_service\") to evade detection. Experts recommend that organizations treat Android TV boxes as untrusted devices and network segment them from the corporate network, or restrict ADB access to USB only, to eliminate the primary propagation vector.",
    tags_en: ["Kimwolf", "AISURU", "Android Botnet", "DDoS", "HTTP/2", "ENS", "Tor"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/kimwolf-v7-android-botnet-makes-http2.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zoom 會議註解功能存在多重漏洞，可能導致參與者或主講者電腦被遠端接管",
    summary: "Zoom 視訊會議的註解（Annotation）功能存在三種嚴重漏洞，攻擊者僅需參與會議即可發動攻擊，無需點擊或下載任何內容。這些漏洞包括緩衝區溢寫（Buffer Overwrite）、緩衝區溢讀（Buffer Over-read）和使用後釋放（Use-after-free）。漏洞的技術細節指出，攻擊者可以利用結構化物件傳輸的計數器（count）來溢出固定大小的緩衝區，進而覆蓋返回位址，或透過未初始化堆記憶體（uninitialized heap memory）進行地址隨機化繞過。這些漏洞被追蹤為 CVE-2026-53413（CVSS 8.3）、CVE-2026-53414（CVSS 6.5）和 CVE-2026-53415（CVSS 8.3）。Zoom 已發布修補程式，修復版本包括 Zoom Workplace 7.1.5 及 7.0.6，以及相關的 VDI Client 和 Zoom Rooms 版本。建議用戶應立即升級至最新修補版本，以防範被遠端接管的風險。",
    tags: ["Zoom", "CVE-2026-53413", "CVE-2026-53414", "CVE-2026-53415", "註解功能", "緩衝區溢寫", "遠端代管"],
    title_en: "Zoom Annotation Feature Contains Multiple Vulnerabilities, Potentially Allowing Remote Takeover of Participant or Host Computers",
    summary_en: "Three critical vulnerabilities have been found in Zoom's Annotation feature for video conferencing. Attackers can exploit these vulnerabilities simply by participating in a meeting, without needing to click or download any content. These flaws include Buffer Overwrite, Buffer Over-read, and Use-after-free. Technical details indicate that attackers can exploit the 'count' field of structured object transmissions to overflow fixed-size buffers, thereby overwriting return addresses, or perform address randomization bypass using uninitialized heap memory. These vulnerabilities are tracked as CVE-2026-53413 (CVSS 8.3), CVE-2026-53414 (CVSS 6.5), and CVE-2026-53415 (CVSS 8.3). Zoom has released patches, with fixed versions including Zoom Workplace 7.1.5 and 7.0.6, as well as related VDI Client and Zoom Rooms versions. Users are advised to immediately upgrade to the latest patched versions to prevent the risk of remote takeover.",
    tags_en: ["Zoom", "CVE-2026-53413", "CVE-2026-53414", "CVE-2026-53415", "Annotation Feature", "Buffer Overwrite", "Remote Takeover"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/zoom-annotation-flaws-could-let-meeting.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄羅斯國家駭客組織 Sandworm 透過假招聘活動，利用偽造 VPN 惡意程式攻擊烏克蘭 IT 工作者",
    summary: "烏克蘭電腦緊急應變小組 (CERT-UA) 公佈一場由俄羅斯國家級駭客組織所策劃的社工攻擊活動。該活動被歸類為 UAC-0145，屬於 Sandworm（亦稱 APT44、Seashell Blizzard 等）的子群組，與 GRU 有關聯。攻擊者偽裝成招聘人員，透過工作網站聯繫目標 IT 專業人員，並將聊天轉移至 Telegram。在虛假的技術面試環節，受害者會收到包含 WireGuard VPN 設定檔的電子郵件，要求他們連接 VPN 進行評估。\n\n攻擊的核心在於提供一個經過修改的 WireGuard 客戶端。該惡意版本新增了對非標準 'SymmetricKey' 選項的支援，其值包含 BASE64 編碼的 AES-256-GCM 資料（包含 nonce、密文和驗證標籤）。攻擊者利用解密後的 AES-256 金鑰，透過 WireGuard 的標準 'runScriptCommand' 機制，在受害者主機上執行任意命令。Windows 版本還利用 PowerShell 建立排程任務下載第二階段負載，Linux 版本則使用 cURL 下載執行檔。CERT-UA 警告 IT 專業人員警惕此類社工手法，並建議組織僅允許經管理設備存取企業資源，並實施持續監控。",
    tags: ["Sandworm", "UAC-0145", "WireGuard", "社工攻擊", "APT44", "烏克蘭"],
    title_en: "Russian State Hacker Group Sandworm Uses Fake Recruitment Activities and Malicious VPN to Attack Ukrainian IT Workers",
    summary_en: "The Ukrainian Computer Emergency Response Team (CERT-UA) has disclosed a social engineering campaign orchestrated by a Russian state-level hacking group. This campaign, designated UAC-0145, is attributed to Sandworm (also known as APT44, Seashell Blizzard, etc.) and is associated with the GRU. The attackers impersonated recruiters, contacting target IT professionals through job websites and subsequently moving the conversation to Telegram. During a fake technical interview phase, victims received an email containing a WireGuard VPN configuration file, requesting them to connect to the VPN for an evaluation.\n\nThe core of the attack involves providing a modified WireGuard client. This malicious version adds support for a non-standard 'SymmetricKey' option, whose value contains BASE64 encoded AES-256-GCM data (including a nonce, ciphertext, and authentication tag). The attackers exploit the decrypted AES-256 key to execute arbitrary commands on the victim's machine using WireGuard's standard 'runScriptCommand' mechanism. The Windows version also utilizes PowerShell to create a scheduled task for downloading a second-stage payload, while the Linux version uses cURL to download and execute an executable. CERT-UA warns IT professionals to be vigilant against such social engineering tactics and advises organizations to restrict access to corporate resources to managed devices and implement continuous monitoring.",
    tags_en: ["Sandworm", "UAC-0145", "WireGuard", "Social Engineering", "APT44", "Ukraine"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/sandworm-linked-uac-0145-uses-fake-job.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究人員揭露 SharePoint 伺服器重大漏洞：可透過 AI 輔助進入管理員權限",
    summary: "資安研究機構 Rapid7 發現了影響 Microsoft SharePoint Server Subscription Edition、2019 和 2016 的嚴重漏洞。該漏洞（CVE-2026-55040，CVSS 9.1）允許遠端未經身份驗證的攻擊者，透過了解目標帳號的 SID 或 UPN，假冒任何指定使用者的身份。攻擊鏈的第二環是另一個遠端程式碼執行（RCE）漏洞（CVE-2026-63520，CVSS 8.1），該漏洞存在於 SharePoint 的 Business Connectivity Services，可讓攻擊者以網站後端 Windows 服務帳號執行程式碼。攻擊鏈的完整利用路徑涉及 SharePoint 的 JSON Web Token (JWT) 驗證流程缺陷。雖然 Microsoft 已發布了修補程式（例如 KB5002882 等），但用戶仍需確認已安裝 7 月份的更新，並留意後續的 8 月份修補。CISA 提醒，即使產品已過終止支援期，仍需高度警惕，並建議進行事件回應，特別是尋找 IIS machine keys 的竊取跡象。",
    tags: ["SharePoint Server", "CVE-2026-55040", "CVE-2026-63520", "Microsoft", "JWT", "RCE"],
    title_en: "Researchers Uncover Critical SharePoint Server Vulnerability: AI Assistance Allows Privilege Escalation",
    summary_en: "Security research firm Rapid7 discovered a severe vulnerability affecting Microsoft SharePoint Server Subscription Edition, 2019, and 2016. This vulnerability (CVE-2026-55040, CVSS 9.1) allows unauthenticated remote attackers to impersonate any specified user by knowing the target account's SID or UPN. The second stage of the attack chain is another Remote Code Execution (RCE) vulnerability (CVE-2026-63520, CVSS 8.1), which exists in SharePoint's Business Connectivity Services and allows attackers to execute code using the website's backend Windows service account. The full exploitation path involves a flaw in SharePoint's JSON Web Token (JWT) validation process. Although Microsoft has released patches (e.g., KB5002882), users must confirm the installation of the July update and remain vigilant for subsequent August patches. CISA warns that even if the product is past its end-of-support date, high vigilance is required, and incident response is recommended, especially looking for signs of stolen IIS machine keys.",
    tags_en: ["SharePoint Server", "CVE-2026-55040", "CVE-2026-63520", "Microsoft", "JWT", "RCE"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/researchers-disclose-ai-assisted.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-053",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "DeadLock勒索軟體利用Polygon智能合約建立去中心化基礎設施，提升營運韌性",
    summary: "安全廠商觀察到DeadLock勒索軟體群體，利用去中心化基礎設施來進行受害者通訊和資料外洩操作，以提升其營運韌性。該勒索軟體最初於2025年7月被偵測到，採用雙重勒索（double extortion）戰術，加密受害者環境並威脅公開洩露竊取資料。DeadLock使用混合加密設計，結合Curve25519橢圓曲線密碼學和XChaCha20流式密碼進行檔案加密，並使用.dlock副檔名加密檔案。其勒索訊息要求受害者下載名為Session的端到端加密通訊應用程式，或透過一個特殊的HTML網頁介面進行溝通。最為獨特的是，DeadLock利用JavaScript程式碼與Polygon智能合約互動，實現去中心化的代理伺服器位址輪轉，這使得攻擊者能夠建立一種難以被審查和關閉的基礎設施。此外，該惡意軟體還具備資源感知節流機制，並透過修改登錄檔、清除日誌等方式進行防禦規避。修復建議包括監控去中心化通訊和區塊鏈相關的惡意活動，並強化端點偵測能力。",
    tags: ["DeadLock", "勒索軟體", "Polygon", "去中心化", "雙重勒索", "Smart Contract"],
    title_en: "DeadLock Ransomware Uses Polygon Smart Contracts to Build Decentralized Infrastructure, Enhancing Operational Resilience",
    summary_en: "Security vendors have observed the DeadLock ransomware group utilizing decentralized infrastructure for victim communication and data exfiltration operations, thereby enhancing its operational resilience. The ransomware was initially detected in July 2025 and employs a double extortion tactic, encrypting victim environments and threatening to publicly leak stolen data. DeadLock uses a hybrid encryption design, combining Curve25519 elliptic curve cryptography and XChaCha20 stream cipher for file encryption, appending the .dlock extension to encrypted files. Its ransom note demands that victims download an end-to-end encrypted communication application named Session, or communicate through a specialized HTML web interface. Most uniquely, DeadLock interacts with Polygon smart contracts using JavaScript code to achieve decentralized proxy server address rotation, allowing the attackers to establish infrastructure that is difficult to monitor or shut down. Furthermore, the malware includes a resource-aware throttling mechanism and employs defense evasion techniques such as modifying the registry and clearing logs. Remediation recommendations include monitoring for malicious activity related to decentralized communication and blockchain, and strengthening endpoint detection capabilities.",
    tags_en: ["DeadLock", "Ransomware", "Polygon", "Decentralized", "Double Extortion", "Smart Contract"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/deadlock-ransomware-uses-polygon-smart.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-054",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "惡意 SIM 卡可遠端控制設備：研究揭露透過標準化指令接管車載與工業設備",
    summary: "研究人員在測試多款手機與蜂巢式模組後發現，惡意 SIM 卡可以透過標準的 AT 指令（RUN AT）強制設備執行攻擊者指定的指令，從而接管整個設備。此風險主要存在於搭載 Quectel 模組的電氣車充電器、工業路由器和車載通訊單元等物聯網（IoT）硬體設備。\n\n攻擊機制利用了 SIM 卡的「主動指令」能力，該能力允許 SIM 卡主動向基地台模組發送 AT 指令。當模組運行在 Android 或類似作業系統上時，攻擊面會擴大，甚至能讓 SIM 卡控制設備執行任意程式碼。\n\n研究團隊指出，由於此介面是標準化通訊能力，單純修補漏洞無效，建議的解決方案是將此介面進行硬化、棄用或直接禁用。目前，設備製造商（如 Qualcomm）已宣布將在未來產品中預設關閉此介面，但用戶應主動詢問模組供應商，確認韌體中是否已禁用 RUN AT 功能。\n\n若設備缺乏物理安全保護，且 SIM 卡槽可及，則極易成為攻擊目標。目前尚未有實際攻擊報告，但此風險對運行蜂巢式 IoT 設備的企業構成重大威脅。",
    tags: ["SIM 卡", "RUN AT", "Quectel", "IoT", "電氣車充電器", "AT 指令"],
    title_en: "Malicious SIM Cards Can Remotely Control Devices: Research Reveals Hijacking of Automotive and Industrial Equipment via Standard Commands",
    summary_en: "Researchers found that malicious SIM cards can force devices to execute attacker-specified commands using standard AT commands (RUN AT), thereby taking control of the entire device. This risk primarily affects IoT hardware devices such as electric vehicle chargers, industrial routers, and automotive communication units equipped with Quectel modules.\n\nThe attack mechanism exploits the SIM card's 'active command' capability, which allows the SIM card to proactively send AT commands to the base station module. When the module runs on Android or similar operating systems, the attack surface expands, potentially allowing the SIM card to control the device and execute arbitrary code.\n\nThe research team points out that because this interface is a standardized communication capability, simply patching a vulnerability is ineffective. The recommended solutions are to harden, deprecate, or outright disable this interface. Device manufacturers (such as Qualcomm) have announced plans to disable this interface by default in future products, but users should proactively inquire with module suppliers to confirm if the RUN AT function has been disabled in the firmware.\n\nIf a device lacks physical security protection and the SIM card slot is accessible, it is highly susceptible to attack. While there are no actual attack reports yet, this risk poses a significant threat to enterprises operating cellular IoT devices.",
    tags_en: ["SIM Card", "RUN AT", "Quectel", "IoT", "EV Charger", "AT Command"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/a-malicious-sim-card-can-run-attacker.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-055",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Mozilla 撤銷 Firefox 與 Thunderbird Linux 簽名金鑰：因私有儲存庫意外洩露",
    summary: "Mozilla 宣布撤銷用於 Firefox 和 Thunderbird Linux 下載的加密簽名金鑰。該金鑰用於驗證下載的 tarball 確實來自 Mozilla 且未被篡改。撤銷的原因是該金鑰的未加密副本意外提交到 Mozilla 自己的私有程式碼儲存庫中。雖然 Mozilla 聲稱已審核並確認沒有外部未經授權的存取，但為確保安全，仍決定進行撤銷。此舉影響所有使用舊金鑰簽名檔案驗證的用戶，包括舊版下載。對於大多數用戶而言，無需採取行動。但對於手動檢查簽名、或透過 Mozilla RPM 套件安裝 Firefox 的用戶，必須手動匯入新的金鑰並導入舊金鑰的撤銷資訊。文章指出，此次金鑰更換發生得比預計時間（約兩年一次）提前了七個月。建議受影響用戶應執行移除舊金鑰並匯入新金鑰的步驟，以確保系統的完整性。",
    tags: ["Mozilla", "Firefox", "Thunderbird", "Linux", "簽名金鑰", "OpenPGP", "供應鏈安全"],
    title_en: "Mozilla Revokes Firefox and Thunderbird Linux Signing Keys Due to Accidental Leak in Private Repository",
    summary_en: "Mozilla has announced the revocation of the cryptographic signing keys used for Firefox and Thunderbird Linux downloads. These keys are used to verify that downloaded tarballs genuinely originate from Mozilla and have not been tampered with. The revocation is necessary because an unencrypted copy of the key was accidentally committed to Mozilla's own private code repository. Although Mozilla stated that it has audited and confirmed no external unauthorized access, they decided to proceed with the revocation to ensure security. This action affects all users who verify signed files using the old keys, including those using older versions. Most users do not need to take action. However, users who manually check signatures or install Firefox via Mozilla RPM packages must manually import the new key and incorporate the revocation information for the old key. The article notes that this key change occurred seven months ahead of the expected schedule (approximately every two years). Affected users are advised to follow the steps of removing the old key and importing the new key to ensure system integrity.",
    tags_en: ["Mozilla", "Firefox", "Thunderbird", "Linux", "Signing Key", "OpenPGP", "Supply Chain Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/mozilla-revokes-firefox-and-thunderbird.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-056",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究人員揭露假加密貨幣公司：北韓工資匯款與身份盜用新手法",
    summary: "資安研究人員揭露了一起高度複雜的網路詐騙活動，該活動涉及建立一家虛假的 DeFi 協議（Ballena Azul）和加密貨幣公司。詐騙集團透過招聘開發人員的方式，成功讓疑似北韓的工資匯款人員進入公司內部系統。受影響的實務風險在於，一旦「員工」身份建立，其後續的存取權限和行為會被視為合法且預期的。研究人員觀察到，這些「操作員」在入職後進行了偵察行為，包括執行 `dxdiag`、`systeminfo` 和 `wmic` 等系統指令，並安裝了 Chrome Remote Desktop，甚至將個人 Google 帳號同步到工作虛擬機（VM）中。詐騙集團利用了多種技術，包括使用 AI 輔助的求職工具和多個 VPN 服務（如 AstrillVPN），並利用了看似正規的身份文件（如帶有 Google Gemini 處理元數據和 SynthID 水標的圖像）。這類詐騙不僅是招聘風險，更涉及對內部系統和源代碼的潛在滲透。建議企業應實施定期的身份驗證檢查，對遠端工作模式進行實體核實，並加強對招聘人員和供應鏈的審查。",
    tags: ["北韓駭客", "身份盜用", "DeFi 協議", "虛假公司", "SynthID", "招聘風險", "Ballena Azul"],
    title_en: "Researchers Expose Fake Crypto Company: New North Korean Payroll and Identity Theft Tactics",
    summary_en: "Cybersecurity researchers have uncovered a highly sophisticated online scam involving the establishment of a fake DeFi protocol (Ballena Azul) and cryptocurrency company. The scam group successfully infiltrated the company's internal systems by recruiting individuals posing as payroll workers, suspected to be from North Korea. The practical risk lies in the fact that once an 'employee' identity is established, their subsequent access rights and actions are considered legitimate and expected. Researchers observed that these 'operators' conducted reconnaissance activities after joining, including running system commands such as `dxdiag`, `systeminfo`, and `wmic`, and installing Chrome Remote Desktop, and even syncing personal Google accounts to the work virtual machine (VM). The scam group utilized multiple technologies, including AI-assisted job search tools and multiple VPN services (such as AstrillVPN), and leveraged seemingly legitimate identity documents (such as images containing Google Gemini processed metadata and SynthID watermarks). This type of fraud is not merely a hiring risk; it involves potential penetration of internal systems and source code. Companies are advised to implement regular identity verification checks, conduct physical verification for remote work models, and strengthen vetting processes for hiring personnel and supply chains.",
    tags_en: ["North Korean Hackers", "Identity Theft", "DeFi Protocol", "Fake Company", "SynthID", "Hiring Risk", "Ballena Azul"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/researchers-built-fake-crypto-startup.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-057",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 Windows PnP 自動安裝路徑可被武器化，透過模擬 USB 設備達成 SYSTEM 權限提升",
    summary: "資安研究人員 Alejandro Hernando 和 Borja Martinez 在為 DEF CON 34 準備的報告《Plug And Pwn: Weaponizing Windows PnP Auto-Install》中，描述了一種利用 Windows Plug and Play (PnP) 自動安裝機制進行權限提升的技術。該技術的核心是模擬任意 USB 設備，並將 PnP 安裝路徑轉化為 SYSTEM 級別的程式碼執行。攻擊鏈的實作涉及多個步驟：首先模擬 Sierra Wireless 設備，讓 Windows 安裝 SwiService.exe，利用其 SetDNS 原語進行 DNS 重定向；接著模擬 Sony FeliCa 讀卡器，透過 HTTP 獲取配置檔案；最後，利用路徑遍歷漏洞（path-traversal flaw）將 DLL 植入 System32，重新連接設備後即可執行植入的 DLL，從而獲得 SYSTEM 權限。研究人員指出，即使在完全更新的 Windows 11 系統上，此攻擊鏈也成立。此外，該研究還展示了遠端變體，透過 RDP 模擬 USB 流量，利用 Intel RealSense 設備的安裝路徑，結合 CRYPTBASE.dll 的搜尋順序劫持，使低權限使用者也能獲得 SYSTEM 權限。然而，研究人員強調，此遠端攻擊路徑是配置依賴的，且 Microsoft 預設不允許支援 PnP 和低階 USB 重定向，建議管理員應檢查並限制相關功能。",
    tags: ["Windows PnP", "SYSTEM 權限提升", "USB 設備模擬", "Plug And Pwn", "RDP", "路徑遍歷"],
    title_en: "Research Reveals Windows PnP Auto-Install Path Can Be Weaponized to Achieve SYSTEM Privilege Escalation via Simulated USB Devices",
    summary_en: "Security researchers Alejandro Hernando and Borja Martinez, in their report for DEF CON 34 titled \"Plug And Pwn: Weaponizing Windows PnP Auto-Install,\" described a technique for privilege escalation utilizing the Windows Plug and Play (PnP) auto-installation mechanism. The core of this technique involves simulating arbitrary USB devices and converting the PnP installation path into SYSTEM-level code execution. The attack chain implementation involves multiple steps: first, simulating a Sierra Wireless device to prompt Windows to install SwiService.exe, which then uses its SetDNS primitive for DNS redirection; next, simulating a Sony FeliCa card reader to fetch a configuration file via HTTP; finally, exploiting a path-traversal flaw to implant a DLL into System32. Upon reconnecting the device, the implanted DLL is executed, thereby achieving SYSTEM privileges. The researchers noted that this attack chain remains viable even on fully updated Windows 11 systems. Furthermore, the research demonstrated a remote variant, which simulates USB traffic via RDP, leveraging the installation path of an Intel RealSense device and combining it with search order hijacking of CRYPTBASE.dll, allowing low-privilege users to gain SYSTEM privileges. However, the researchers emphasized that this remote attack path is configuration-dependent, and Microsoft does not enable support for PnP and low-level USB redirection by default, advising administrators to check and restrict these related features.",
    tags_en: ["Windows PnP", "SYSTEM Privilege Escalation", "USB Device Simulation", "Plug And Pwn", "RDP", "Path Traversal"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/researchers-turn-usb-auto-install-into.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-058",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Gunra勒索軟體攻擊鏈分析：利用CVE-2024-5559與CVE-2025-24472攻擊關鍵基礎設施",
    summary: "資安機構警告，名為Gunra的勒索軟體正在全球範圍內攻擊關鍵基礎設施，目標包括醫療、金融、政府及非營利組織。攻擊者利用了兩項已知的安全漏洞：Schneider Electric PowerLogic P5 的 CVE-2024-5559，以及 Fortinet FortiOS 和 FortiProxy 的 CVE-2025-24472，以取得初始存取權。Gunra採用雙重勒索機制，結合資料外洩和資料加密，以達到最大破壞力。攻擊鏈高度複雜，除了利用 Impacket 庫進行橫向移動和從 NTDS 檔案中竊取密碼雜湊（secretsdump.py），還會刪除系統日誌、清空命令歷史，並在夜間時段進行內部偵察。此外，攻擊者甚至能篡改 VDI 驗證門戶的認證處理檔案，以繞過多因素驗證（MFA），並透過竊取的企業伺服器憑證加密資料庫和 NAS 系統。修補建議包括立即修補上述兩項漏洞，並強化網路邊界防禦、實施最小權限原則，並監控異常的內部網路活動。",
    tags: ["Gunra", "CVE-2024-5559", "CVE-2025-24472", "勒索軟體", "關鍵基礎設施", "Impacket", "VDI"],
    title_en: "Gunra Ransomware Attack Chain Analysis: Exploiting CVE-2024-5559 and CVE-2025-24472 to Target Critical Infrastructure",
    summary_en: "Cybersecurity organizations warn that a ransomware group named Gunra is attacking critical infrastructure globally, targeting sectors including healthcare, finance, government, and non-profit organizations. The attackers are exploiting two known vulnerabilities: CVE-2024-5559 in Schneider Electric PowerLogic P5, and CVE-2025-24472 in Fortinet FortiOS and FortiProxy, to gain initial access. Gunra employs a double-extortion mechanism, combining data exfiltration and data encryption to maximize destructive impact. The attack chain is highly complex, involving the use of the Impacket library for lateral movement and stealing password hashes from NTDS files (secretsdump.py), in addition to deleting system logs and clearing command history, and conducting internal reconnaissance during nighttime hours. Furthermore, the attackers are capable of tampering with credential processing files on VDI authentication portals to bypass Multi-Factor Authentication (MFA), and encrypting databases and NAS systems using stolen enterprise server credentials. Remediation recommendations include immediately patching the aforementioned two vulnerabilities, strengthening network perimeter defenses, implementing the principle of least privilege, and monitoring for anomalous internal network activity.",
    tags_en: ["Gunra", "CVE-2024-5559", "CVE-2025-24472", "Ransomware", "Critical Infrastructure", "Impacket", "VDI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/gunra-ransomware-exploits-fortinet-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-059",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 延長 2026 學年回歸促銷活動，教育族群可至 9 月 24 日購買 Mac 與 iPad",
    summary: "Apple 宣布延長其 2026 學年回歸促銷活動（Back to School deals）的期限。原定於 7 月 16 日至 8 月 27 日，現已延長至 9 月 24 日。本次活動除了提供標準的教育折扣價外，符合資格的學生在購買合格的 Mac 或 iPad 時，還可額外獲得價值高達 150 美元的 Apple Gift Card。\n\n本次促銷活動的資格對象涵蓋美國的 K–12 學校教職員、高等教育機構的教職員、在校或已被錄取的學生，以及為子女購買的父母。購買必須是個人用途，而非機構採購或轉售。\n\n文章提醒，若錯過本次活動，消費者仍可透過 Apple 官方 Amazon 商店或 Apple 認證翻新店（Certified Refurbished Store）尋找折扣優惠。",
    tags: ["Apple", "Mac", "iPad", "Back to School", "教育折扣", "Apple Gift Card"],
    title_en: "Apple Extends 2026 Back to School Promotion, Allowing Educational Groups to Purchase Mac and iPad until September 24",
    summary_en: "Apple has announced an extension of its 2026 Back to School deals. Originally scheduled from July 16 to August 27, the promotion has now been extended until September 24. In addition to offering standard educational discounts, eligible students purchasing qualifying Macs or iPads can also receive an Apple Gift Card valued up to $150.\n\nThe promotion is available to K–12 school faculty in the US, faculty at higher education institutions, enrolled or accepted students, and parents purchasing for their children. Purchases must be for personal use, not for institutional procurement or resale.\n\nThe article reminds consumers that if they miss this promotion, they can still find discounts through the official Apple Amazon store or Apple Certified Refurbished Stores.",
    tags_en: ["Apple", "Mac", "iPad", "Back to School", "Educational Discount", "Apple Gift Card"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-extends-2026-back-to-school-deals-on-macs-and-ipads-until-september-24", lang: "EN" }
    ]
  },
  {
    id: "20260811-060",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 18 Pro 傳聞升級：預計搭載可變光圈主鏡、更大光圈望遠鏡及專業級軟體功能",
    summary: "根據傳聞消息，下一代 iPhone 18 Pro 系列預計將帶來顯著的相機硬體升級。主要的升級點包括：可變光圈（variable aperture）的主相機、更大光圈的望遠鏡（Telephoto camera）以及專為專業級拍攝設計的軟體功能。可變光圈被認為是最大的新功能，它可能允許使用者調整照片的焦點和景深，提升人像模式和低光拍攝的表現。望遠鏡增加的光圈尺寸，預計能改善其在低光環境下的拍攝表現。此外，蘋果還可能升級內建的相機應用程式，使其功能更接近專業相機，並可能推出 Pro 獨有的軟體功能，例如改進的相機控制按鈕。這些升級預計將使 iPhone 的相機系統在硬體和軟體兩方面都達到新的高度。",
    tags: ["iPhone 18 Pro", "Apple", "可變光圈", "相機硬體", "iOS", "望遠鏡"],
    title_en: "iPhone 18 Pro Rumored Upgrade: Expected to Feature Variable Aperture Main Camera, Larger Aperture Telephoto, and Professional Software Features",
    summary_en: "According to rumors, the next generation iPhone 18 Pro series is expected to bring significant camera hardware upgrades. Key upgrades include: a variable aperture main camera, a telephoto camera with a larger aperture, and software features designed for professional-grade photography. The variable aperture is considered the biggest new feature, potentially allowing users to adjust focus and depth of field in photos, thereby enhancing portrait mode and low-light shooting performance. The larger aperture on the telephoto lens is expected to improve its performance in low-light environments. Furthermore, Apple may upgrade the built-in camera application to make its functionality closer to professional cameras, and might introduce Pro-exclusive software features, such as improved camera control buttons. These upgrades are expected to elevate the iPhone's camera system to new heights in both hardware and software.",
    tags_en: ["iPhone 18 Pro", "Apple", "Variable Aperture", "Camera Hardware", "iOS", "Telephoto"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/iphone-18-pro-three-new-camera-upgrades-are-coming", lang: "EN" }
    ]
  },
  {
    id: "20260811-061",
    trackers: ["os"],
    category: "Apple",
    title: "傳聞指出蘋果未來折疊手機可能採用「iPhone Ultra」命名，內部員工已普遍使用此名稱",
    summary: "根據資安新聞來源報導，蘋果公司傳聞其即將推出的折疊式 iPhone 型號，內部員工已普遍使用「iPhone Ultra」作為代號或名稱。雖然這尚未得到蘋果官方的正式確認，但資深科技爆料者 Mark Gurman 在 X 平台上指出，公司內部許多員工都習慣稱呼該產品為「Ultra」。目前市場上流傳的名稱包括「iPhone Fold」和「iPhone Ultra」。文章強調，由於蘋果公司的高度保密性，內部使用的名稱不一定代表最終的產品品牌名稱，最終命名仍可能由蘋果的行銷團隊決定。此消息主要為產品命名傳聞，並未涉及任何技術漏洞或安全風險。",
    tags: ["Apple", "iPhone Ultra", "折疊手機", "產品命名", "Mark Gurman"],
    title_en: "Rumors Suggest Apple's Future Foldable Phone May Use 'iPhone Ultra' Naming, Already Used Internally",
    summary_en: "According to cybersecurity news sources, Apple is rumored to be using 'iPhone Ultra' as a codename or name for its upcoming foldable iPhone model. Although this has not been officially confirmed by Apple, senior tech reporter Mark Gurman pointed out on X that many employees within the company are accustomed to referring to the product as 'Ultra.' Currently circulating names in the market include 'iPhone Fold' and 'iPhone Ultra.' The article emphasizes that due to Apple's high level of secrecy, the name used internally may not represent the final product brand name, and the final naming may still be determined by Apple's marketing team. This news is primarily about product naming rumors and does not involve any technical vulnerabilities or security risks.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Phone", "Product Naming", "Mark Gurman"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/everyone-at-apple-uses-iphone-ultra-name-says-mark-gurman", lang: "EN" }
    ]
  },
  {
    id: "20260811-062",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iOS 27 公開 Beta 3，AirPods Pro 3 等耳機型號同步更新新韌體",
    summary: "Apple 今日發布了 iOS 27 的公開 Beta 3 版本，同時也為 AirPods Pro 3、AirPods Pro 2、AirPods 4 和 AirPods Max 2 等多款耳機型號釋出新的 Beta 韌體。先前此韌體僅限於開發者 Beta，但目前已擴大至公開 Beta 用戶。這些耳機型號需要配備 H2 晶片才能支援最新的 Beta 韌體。iOS 27 預計將為 AirPods 帶來多樣的新功能，其中部分功能專屬於 AirPods Pro 3。此耳機韌體更新將與 iOS 27 的正式發布時間同步，形成一套完整的軟硬體支援方案。用戶若想參與公開 Beta 測試，可透過 beta.apple.com 進行註冊。",
    tags: ["Apple", "iOS 27", "AirPods Pro 3", "AirPods Pro 2", "韌體更新", "H2 晶片"],
    title_en: "Apple Releases iOS 27 Public Beta 3, Syncing New Firmware for AirPods Pro 3 and Other Earbud Models",
    summary_en: "Apple today released the public Beta 3 version of iOS 27, simultaneously rolling out new Beta firmware for multiple earbud models, including AirPods Pro 3, AirPods Pro 2, AirPods 4, and AirPods Max 2. Previously, this firmware was restricted to developer Beta, but it has now been expanded to public Beta users. These earbud models require the H2 chip to support the latest Beta firmware. iOS 27 is expected to bring various new features to AirPods, some of which are exclusive to the AirPods Pro 3. This earbud firmware update will synchronize with the official release timeline of iOS 27, forming a complete software and hardware support ecosystem. Users interested in participating in the public Beta test can register via beta.apple.com.",
    tags_en: ["Apple", "iOS 27", "AirPods Pro 3", "AirPods Pro 2", "Firmware Update", "H2 Chip"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/airpods-pro-3-and-more-just-got-new-public-beta-firmware", lang: "EN" }
    ]
  },
  {
    id: "20260811-063",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 5 更新：提升 Liquid Glass 透明度，提供更精細的介面自訂選項",
    summary: "Apple 發布 iOS 27 beta 5 版本，除了包含重新設計的 App 圖示和新的 Siri AI 語音選項外，也為 Liquid Glass 設計增加了重要的自訂功能。本次更新在「設定」>「外觀」>「Liquid Glass」中新增了滑動器，使用戶可以精準調整 Liquid Glass 的透明度，達到高度透明、帶色調或中間的任何偏好。在 beta 5 版本中，Apple 進一步調整了此滑動器，使得其最透明的設定比先前版本更加透明，為使用者提供了更「玻璃感」的介面體驗。這是一個介面優化而非重大安全更新，主要目的是提升使用者對 UI 元素透明度的控制權。",
    tags: ["iOS 27", "Apple", "Liquid Glass", "beta 5", "介面自訂", "macOS"],
    title_en: "iOS 27 Beta 5 Update: Enhancing Liquid Glass Transparency and Offering Finer Interface Customization Options",
    summary_en: "Apple has released iOS 27 beta 5. In addition to featuring redesigned app icons and new Siri AI voice options, this update introduces significant customization features for Liquid Glass. The update adds a slider within Settings > Appearance > Liquid Glass, allowing users to precisely adjust the transparency of Liquid Glass, achieving any preference from highly transparent to tinted or intermediate levels. In beta 5, Apple further refined this slider, making the most transparent setting even clearer than in previous versions, offering users a more 'glass-like' interface experience. This is an interface optimization rather than a major security update, primarily aimed at giving users greater control over the transparency of UI elements.",
    tags_en: ["iOS 27", "Apple", "Liquid Glass", "beta 5", "Interface Customization", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/ios-27-beta-5-lets-you-make-liquid-glass-more-transparent-than-ever", lang: "EN" }
    ]
  },
  {
    id: "20260811-064",
    trackers: ["os"],
    category: "Apple",
    title: "watchOS 27 預計擴增 Modular 表盤客製化選項，新增九種顏色樣式",
    summary: "根據洩露資訊，Apple 預計在 watchOS 27 版本中為其廣受歡迎的 Modular 表盤增加多樣化的顏色客製化選項。Modular 表盤因其高度的通用性而受到用戶青睞，不僅提供多個複雜功能（complication）槽位，用戶還可以透過豐富的顏色選項進行個人化設計。洩露資訊指出，在 iOS 27 beta 5 的程式碼中，發現了九種新的 Modular 顏色選項的參考名稱。這些新增的顏色可能也預示著未來 Apple Watch Series 12 或 Apple Watch Ultra 4 將推出的新型錶帶。此外，另有報導指出，watchOS 27 還將推出一款靈感來自 Modular Ultra 的全新 Modular 表盤。此更新主要為用戶提供更豐富的個人化選擇，但目前尚未公開這些新顏色的預覽。",
    tags: ["watchOS 27", "Apple Watch", "Modular", "iOS 27", "Apple"],
    title_en: "watchOS 27 Expected to Expand Modular Face Complication Options, Adding Nine New Color Styles",
    summary_en: "According to leaked information, Apple is expected to add diverse color customization options to its popular Modular face in watchOS 27. The Modular face is favored by users due to its high versatility, offering not only multiple complication slots but also rich color options for personalized design. Leaked information points to the discovery of reference names for nine new Modular color options within the iOS 27 beta 5 code. These new colors may also foreshadow new strap types for the future Apple Watch Series 12 or Apple Watch Ultra 4. Furthermore, other reports indicate that watchOS 27 will introduce a brand new Modular face inspired by the Modular Ultra. This update primarily aims to provide users with richer personalization choices, though a preview of these new colors has not yet been made public.",
    tags_en: ["watchOS 27", "Apple Watch", "Modular", "iOS 27", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/watchos-27-will-upgrade-popular-apple-watch-face-with-new-options-per-leak", lang: "EN" }
    ]
  },
  {
    id: "20260811-065",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 macOS 27 Golden Gate Public Beta 3，更新包含全新 Siri AI 與介面標準化",
    summary: "Apple 已開始向參與公開測試計畫的用戶發布 macOS 27 Golden Gate public beta 3。此版本雖然沒有引入重大新功能，但大幅重新設計了包括 Siri、Activity Monitor、Safari 和 App Store 等多個應用程式的圖示。主要亮點包括全新 Siri App，以及改進的 Siri AI 助理功能。此外，用戶現在可以透過滑桿控制 Liquid Glass 的強度，並在系統層面統一了應用程式和視窗的圓角半徑，解決了 macOS Tahoe 26 版本中圓角不一致的常見問題。該版本的 release build 為 26A5406e。用戶若想安裝，需透過 Apple 的 beta 網站加入計畫，並在「系統設定」中選擇更新。此為系統功能更新，無重大漏洞或安全風險。",
    tags: ["macOS 27 Golden Gate", "Apple", "Siri", "Public Beta", "系統更新"],
    title_en: "Apple Releases macOS 27 Golden Gate Public Beta 3, Featuring New Siri AI and Interface Standardization",
    summary_en: "Apple has begun releasing macOS 27 Golden Gate public beta 3 to users participating in the public beta program. Although this version does not introduce major new features, it significantly redesigned the icons for multiple applications, including Siri, Activity Monitor, Safari, and the App Store. Key highlights include a brand new Siri App and enhanced Siri AI assistant functionality. Furthermore, users can now control the intensity of Liquid Glass using a slider, and the system has standardized the corner radius of applications and windows, addressing the common issue of inconsistent corner radii found in the macOS Tahoe 26 version. The release build for this version is 26A5406e. To install, users must join the program via the Apple beta website and select the update in 'System Settings.' This is a system feature update and poses no major vulnerabilities or security risks.",
    tags_en: ["macOS 27 Golden Gate", "Apple", "Siri", "Public Beta", "System Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-rolls-out-macos-27-golden-gate-public-beta-3-heres-how-to-install-it", lang: "EN" }
    ]
  },
  {
    id: "20260811-066",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 iPadOS 27 公開 Beta 3，同步更新 tvOS 27 等多個系統",
    summary: "Apple 已發布 iPadOS 27 的公開 Beta 3 版本，同時也為 tvOS 27、HomePod 27 等多個作業系統帶來更新。本次更新旨在讓用戶在正式發布前體驗更穩定、更流暢的系統。雖然文章未提及具體漏洞或安全修補，但公開 Beta 版本通常會包含系統優化和功能改進。iPadOS 27 的新功能包括重新設計的 Siri、Safari、Preview 等應用程式圖示，新增 Siri 語音自訂選項，以及在設定中增加新的搜尋功能。此外，iCloud+ 也提供了關於 AI 功能限制的詳細資訊。開發者和早期使用者可以透過測試這些 Beta 版本，為正式發布做準備，但仍需注意系統可能存在偶發的 Bug。",
    tags: ["iPadOS 27", "Apple", "tvOS 27", "HomePod 27", "Beta 測試"],
    title_en: "Apple Releases iPadOS 27 Public Beta 3, Updating Multiple Systems Including tvOS 27",
    summary_en: "Apple has released Public Beta 3 of iPadOS 27, simultaneously bringing updates to multiple operating systems, including tvOS 27 and HomePod 27. This update aims to allow users to experience a more stable and smoother system before the official release. Although the article does not mention specific vulnerabilities or security patches, public beta versions typically include system optimizations and feature improvements. New features in iPadOS 27 include redesigned app icons for Siri, Safari, and Preview, added Siri voice customization options, and a new search function in Settings. Furthermore, iCloud+ has provided detailed information regarding AI feature limitations. Developers and early adopters can test these beta versions to prepare for the official release, but users should still be mindful that the system may contain occasional bugs.",
    tags_en: ["iPadOS 27", "Apple", "tvOS 27", "HomePod 27", "Beta Testing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/public-beta-3-for-ipados-27-and-more-available-now-heres-whats-new", lang: "EN" }
    ]
  },
  {
    id: "20260811-067",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Public Beta 3 上線：Siri AI 重構、照片編輯強化及 Liquid Glass 客製化升級",
    summary: "蘋果發布 iOS 27 公開測試版 3，為用戶帶來年度最大軟體更新。本次更新的核心亮點是圍繞下一代 Apple Intelligence 重構的 Siri AI。新 Siri 不僅能進行持續對話，還能理解螢幕內容、執行應用程式操作，並回答更廣泛的問題。此外，系統在照片應用程式中加入了 Clean Up、Extend 和 Spatial Reframing 等強大編輯工具，提升了內容創作能力。Safari 亦升級，可自動按主題整理分頁，並新增「通知我」功能監看網頁變化。系統介面方面，Liquid Glass 提供了更精細的客製化滑桿，讓用戶可調整透明度和色調。整體而言，iOS 27 提升了系統效能，據稱應用程式啟動速度可提升高達 30%，且支援範圍涵蓋 iPhone 11 及更新機型，但部分先進 AI 功能仍要求 iPhone 15 Pro 或更新機型。",
    tags: ["iOS 27", "Apple Intelligence", "Siri AI", "Liquid Glass", "iPhone", "Beta"],
    title_en: "iOS 27 Public Beta 3 Released: Siri AI Overhaul, Enhanced Photo Editing, and Liquid Glass Customization Upgrade",
    summary_en: "Apple has released iOS 27 Public Beta 3, bringing the year's biggest software update for users. The core highlight of this update is the rebuilt Siri AI, centered around the next generation of Apple Intelligence. The new Siri can not only maintain continuous conversations but also understand screen content, execute app operations, and answer broader questions. Furthermore, the Photos app has introduced powerful editing tools like Clean Up, Extend, and Spatial Reframing, enhancing content creation capabilities. Safari has also been upgraded to automatically organize tabs by theme and includes a new 'Notify Me' feature to monitor web page changes. Regarding the system interface, Liquid Glass offers more granular customization sliders, allowing users to adjust transparency and tone. Overall, iOS 27 improves system performance, reportedly boosting app launch speeds by up to 30%. It supports iPhone 11 and newer models, though some advanced AI features still require an iPhone 15 Pro or newer model.",
    tags_en: ["iOS 27", "Apple Intelligence", "Siri AI", "Liquid Glass", "iPhone", "Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/ios-27-public-beta-3", lang: "EN" }
    ]
  },
  {
    id: "20260811-068",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Ultra預計搭載超大螢幕與側邊多工功能，強化專業用戶生產力",
    summary: "本文預測下一代 iPhone Ultra 將具備兩項吸引專業用戶的特色。首先，它將搭載史上最大的內建顯示器，預計尺寸約為 7.8 吋，比現有的 iPhone 17 Pro Max (6.9 吋) 更大，提供接近 iPad mini 的尺寸體驗。其次，軟體方面，iOS 27 預計將為許多應用程式增加橫向佈局，而 iPhone Ultra 更可能獨家支援側邊多工（side-by-side multitasking）功能。這項功能允許用戶首次在螢幕上同時運行兩個應用程式，極大地提升了移動生產力。這些更新預計將使 iPhone Ultra 成為專業用戶的首選型號。",
    tags: ["iPhone Ultra", "iOS 27", "側邊多工", "Apple", "螢幕尺寸", "生產力"],
    title_en: "iPhone Ultra Expected to Feature Large Screen and Side-by-Side Multitasking for Enhanced Professional Productivity",
    summary_en: "This article predicts two features for the next-generation iPhone Ultra that will appeal to professional users. First, it is expected to feature the largest built-in display ever, projected to be around 7.8 inches, which is larger than the current iPhone 17 Pro Max (6.9 inches), offering an experience closer to the iPad mini. Second, on the software front, iOS 27 is expected to add horizontal layouts to many applications, and the iPhone Ultra is more likely to exclusively support side-by-side multitasking. This feature allows users to run two applications simultaneously on the screen for the first time, greatly boosting mobile productivity. These updates are expected to make the iPhone Ultra the preferred model for professional users.",
    tags_en: ["iPhone Ultra", "iOS 27", "Side-by-Side Multitasking", "Apple", "Screen Size", "Productivity"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/iphone-ultra-will-have-two-features-that-pro-users-should-love", lang: "EN" }
    ]
  },
  {
    id: "20260811-069",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Arcade 9月更新：新增兩款益智遊戲 Block Blast!+ 與 Art of Fauna: Cozy Puzzles+",
    summary: "Apple 宣布其遊戲訂閱服務 Apple Arcade 將於 9 月推出兩款新的益智遊戲：Block Blast!+ 和 Art of Fauna: Cozy Puzzles+。這兩款遊戲將於 9 月 3 日正式加入平台。Block Blast!+ 為玩家帶來了深受歡迎的每日益智遊戲體驗，風格類似於 Tetris；而 Art of Fauna: Cozy Puzzles+ 則結合了舒緩的拼圖式玩法，並以豐富的自然世界故事為背景。與 Apple Arcade 的所有遊戲一樣，這些新內容均為無廣告、無內購的訂閱服務。此外，Apple 還預告了其他遊戲的更新，例如 puffies 將增加新的藝術包，Simon’s Cat – Blast Time 將推出大量新關卡，以及 stitch. 將慶祝里程碑。Apple Arcade 費用為每月 $6.99，提供一個月免費試用，並可透過 Family Sharing 支援最多五位用戶。",
    tags: ["Apple Arcade", "Block Blast!+", "Art of Fauna: Cozy Puzzles+", "益智遊戲", "Apple One"],
    title_en: "Apple Arcade September Update: Adding Two Puzzle Games, Block Blast!+ and Art of Fauna: Cozy Puzzles+",
    summary_en: "Apple announced that its gaming subscription service, Apple Arcade, will launch two new puzzle games in September: Block Blast!+ and Art of Fauna: Cozy Puzzles+. Both games will officially join the platform on September 3rd. Block Blast!+ offers players a popular daily puzzle experience, similar in style to Tetris; while Art of Fauna: Cozy Puzzles+ combines relaxing puzzle gameplay with a rich natural world story. Like all games in Apple Arcade, these new additions are part of an ad-free, no-in-app-purchase subscription service. Furthermore, Apple also previewed updates for other games, such as puffies receiving new art packs, Simon’s Cat – Blast Time introducing numerous new levels, and stitch. celebrating a milestone. Apple Arcade costs $6.99 per month and offers a one-month free trial, supporting up to five users via Family Sharing.",
    tags_en: ["Apple Arcade", "Block Blast!+", "Art of Fauna: Cozy Puzzles+", "Puzzle Game", "Apple One"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-arcade-adding-two-beloved-puzzlers-to-ad-free-platform-in-september", lang: "EN" }
    ]
  },
  {
    id: "20260811-070",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 5：Apple 宣布將 AI 功能使用限制與 iCloud+ 訂閱方案掛鉤",
    summary: "Apple 在 iOS 27 beta 5 版本中確認了其先前暗示的重大變動：用戶若升級至更高階的 iCloud+ 訂閱方案，將能獲得更多使用 Apple Intelligence 的權限。這項設計將使 AI 功能的使用限制（例如圖片生成、AI 摘要等）與用戶的訂閱層級掛鉤。在 Home app 的設定中，用戶可以查看其 iCloud+ 方案支援的 AI 摘要相機數量。根據測試，2TB 的 iCloud+ 方案可支援五個相機的 AI 摘要，而 12TB 的方案則可支援 15 個相機。這強烈暗示了升級更高的 iCloud+ 方案，不僅能增加 AI 摘要的相機數量，也將提高其他 AI 功能的使用配額。此舉符合 Apple CEO Tim Cook 在財報會議上提出的策略方向，即將 AI 服務的門檻與訂閱服務綁定，實質上推動用戶升級付費服務。",
    tags: ["iOS 27", "Apple Intelligence", "iCloud+", "Apple One", "AI 功能", "Apple"],
    title_en: "iOS 27 Beta 5: Apple Announces Tying AI Feature Usage Limits to iCloud+ Subscription Plans",
    summary_en: "In the iOS 27 beta 5 version, Apple confirmed a major change previously hinted at: users who upgrade to higher-tier iCloud+ subscription plans will gain increased access to Apple Intelligence features. This design will link the usage limits of AI features (such as image generation and AI summaries) to the user's subscription level. Within the Home app settings, users can view the number of AI summary-supported cameras supported by their iCloud+ plan. Testing shows that the 2TB iCloud+ plan supports AI summaries for five cameras, while the 12TB plan supports 15 cameras. This strongly suggests that upgrading to a higher iCloud+ plan not only increases the number of cameras supported for AI summaries but also raises the usage quota for other AI features. This move aligns with the strategic direction set by Apple CEO Tim Cook during the earnings call, which is to tie the threshold for AI services to subscription services, effectively encouraging users to upgrade to paid services.",
    tags_en: ["iOS 27", "Apple Intelligence", "iCloud+", "Apple One", "AI Features", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/ios-27-beta-5-adds-option-to-upgrade-icloud-subscription-for-more-ai", lang: "EN" }
    ]
  },
  {
    id: "20260811-071",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果iPhone 20週年機型設計傳聞：邁向「單片玻璃」的演進路徑",
    summary: "本文討論了關於蘋果公司（Apple）下一代iPhone，特別是預計在20週年紀念時推出的機型設計傳聞。蘋果長期以來一直以「單片玻璃」（a single slab of glass）為終極設計願景。雖然市場曾有關於該機型是否會是獨立型號（如iPhone Air）的報導，但最近的資訊更傾向於將此設計應用於下一年的iPhone Pro系列。有分析師曾提出，由於良率問題，蘋果可能已放棄全玻璃設計，但彭博社的Mark Gurman等消息人士反駁了此說法，指出蘋果的產品藍圖並未改變。文章總結指出，無論最終產品如何，它都將是邁向「單片玻璃」願景的又一步進化。作者預期下一年的設計將是重大進步，但這只是演進過程中的一步，未來仍有更多發展空間。",
    tags: ["Apple", "iPhone", "單片玻璃", "產品設計", "iPhone Pro", "20週年"],
    title_en: "Rumors of Apple's 20th Anniversary iPhone Design: The Path Towards 'Single Slab Glass'",
    summary_en: "This article discusses rumors surrounding the design of Apple's next-generation iPhone, particularly the model anticipated for the 20th-anniversary milestone. Apple has long maintained 'a single slab of glass' as its ultimate design vision. While there have been reports in the market about whether this model might be a standalone variant (such as an iPhone Air), recent information suggests that this design will be applied to the next year's iPhone Pro series. Some analysts had suggested that Apple might have abandoned the all-glass design due to yield issues, but sources like Bloomberg's Mark Gurman have refuted this, pointing out that Apple's product blueprint remains unchanged. The article concludes that regardless of the final product, it will represent another step toward the 'single slab glass' vision. The author anticipates that next year's design will be a major advancement, but notes that this is merely one step in an ongoing evolution with much room for future development.",
    tags_en: ["Apple", "iPhone", "Single Slab Glass", "Product Design", "iPhone Pro", "20th Anniversary"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/making-sense-of-the-conflicting-20th-anniversary-iphone-reports", lang: "EN" }
    ]
  },
  {
    id: "20260811-072",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Beta 5 代碼洩露：預告六款未發布的 iPhone 型號，涵蓋 iPhone 18 系列與折疊機",
    summary: "Apple 發布 iOS 27 beta 5 版本，除了包含新的 App 圖標和 Spotlight 設計調整外，其系統文件也意外洩露了關於未來六款未發布 iPhone 型號的代碼參考。這些參考代碼位於與 iPhone 電池驅動和 Battery Intelligence 功能相關的系統文件中。根據洩露的內部識別碼（如 V62, V63, V64, V67, V68, V69），可以推測出涵蓋 iPhone 18 系列、iPhone Air 2 以及預計的折疊式 iPhone Ultra 等多款機型。這些代碼僅包含 Apple 內部識別符號，未提供任何產品細節。市場預計 Apple 將在下個月啟動 iPhone 18 Pro 和 iPhone 18 Pro Max 的發表週期，而 iPhone Ultra 也預計同期公布。其他型號如 iPhone 18、iPhone 18e 和 iPhone Air 2 則預計在 2027 年初推出。這標誌著 Apple 改變了其 iPhone 的發布週期，將新品發布分散到全年兩個窗口期。",
    tags: ["Apple", "iOS 27", "iPhone 18", "iPhone Ultra", "Beta 測試版", "系統文件"],
    title_en: "iOS 27 Beta 5 Code Leak Reveals Six Unannounced iPhone Models, Including iPhone 18 Series and Foldables",
    summary_en: "Apple released iOS 27 beta 5. In addition to new App icons and Spotlight design adjustments, the system files unexpectedly leaked code references for six unannounced iPhone models. These references are located within system files related to iPhone battery management and Battery Intelligence features. Based on the leaked internal identifiers (such as V62, V63, V64, V67, V68, V69), it is inferred that the models include the iPhone 18 series, iPhone Air 2, and a potential foldable iPhone Ultra. These codes only contain internal Apple identifiers and provide no product details. The market anticipates Apple will launch the iPhone 18 Pro and iPhone 18 Pro Max during the next month's launch cycle, with the iPhone Ultra also expected to be announced around the same time. Other models, such as the iPhone 18, iPhone 18e, and iPhone Air 2, are anticipated to launch in early 2027. This suggests Apple is changing its iPhone release cycle, spreading new product launches across two windows throughout the year.",
    tags_en: ["Apple", "iOS 27", "iPhone 18", "iPhone Ultra", "Beta", "System Files"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/ios-27-code-reveals-six-unreleased-iphone-models-coming-soon", lang: "EN" }
    ]
  },
  {
    id: "20260811-073",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 因 iCloud Private Relay 漏洞面臨集體訴訟指控，涉嫌詐欺行為",
    summary: "安全研究人員揭露了 Apple iCloud Private Relay 功能存在漏洞。該功能本應保護用戶的 IP 位址，使其瀏覽網站時無法被追蹤。然而，研究發現此漏洞導致該保護機制經常失效，無法有效隱藏用戶的 IP 位址。由於此問題，Apple 面臨集體訴訟的指控，被指控涉嫌詐欺行為。雖然文章未提供具體漏洞細節或修補建議，但此事件凸顯了雲端服務和隱私保護機制在實作層面可能存在的重大安全缺陷，提醒用戶應持續關注 Apple 相關服務的安全性更新。",
    tags: ["Apple", "iCloud", "Private Relay", "資安漏洞", "集體訴訟", "隱私保護"],
    title_en: "Apple Faces Class-Action Lawsuit Allegations Over iCloud Private Relay Vulnerability, Accused of Deceptive Practices",
    summary_en: "Security researchers have disclosed a vulnerability in Apple's iCloud Private Relay feature. This feature is designed to protect users' IP addresses, preventing tracking while browsing websites. However, the research found that this vulnerability frequently causes the protective mechanism to fail, making it unable to effectively conceal the user's IP address. Due to this issue, Apple faces allegations of a class-action lawsuit, accused of deceptive practices. Although the article does not provide specific vulnerability details or remediation suggestions, this incident highlights potential significant security flaws in the implementation of cloud services and privacy protection mechanisms, reminding users to continuously monitor security updates for Apple-related services.",
    tags_en: ["Apple", "iCloud", "Private Relay", "Cybersecurity Vulnerability", "Class-Action Lawsuit", "Privacy Protection"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-faces-class-action-lawsuit-for-fraud-over-icloud-private-relay-flaw", lang: "EN" }
    ]
  },
  {
    id: "20260811-074",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "WordPress外掛開發商BdThemes遭新型態供應鏈攻擊，污染API資料串流影響逾35萬用戶",
    summary: "資安業者Wordfence揭露WordPress外掛開發商BdThemes遭遇供應鏈攻擊。攻擊者未竄改官方程式碼庫，而是入侵上游API伺服器，污染外掛內部Biggopti元件的資料流。攻擊者利用該元件CVSS 5.4分的XSS漏洞，將惡意指令碼注入WordPress管理介面中，只要管理員登入就會觸發攻擊，進而遭建立惡意帳號並植入Webshell。此攻擊可避開傳統網頁應用程式防火牆與磁碟掃描，受影響產品包含Element Pack、Prime Slider等，總活躍安裝量超過35萬。目前受入侵的API端點已修復恢復正常。",
    tags: ["BdThemes", "WordPress", "供應鏈攻擊", "XSS漏洞", "Wordfence", "Biggopti", "Webshell"],
    title_en: "WordPress Plugin Developer BdThemes Suffers Novel Supply Chain Attack, Corrupting API Data Stream Affecting Over 350,000 Users",
    summary_en: "Security firm Wordfence has revealed that WordPress plugin developer BdThemes was targeted by a supply chain attack. Instead of modifying the official codebase, the attackers infiltrated an upstream API server and corrupted the data stream within the plugin's internal Biggopti component. The attackers exploited a CVSS 5.4 XSS vulnerability in this component to inject malicious scripts into the WordPress administration interface. The attack is triggered simply by an administrator logging in, which then allows the establishment of malicious accounts and the implantation of a Webshell. This attack can bypass traditional Web Application Firewalls and disk scanning. Affected products include Element Pack and Prime Slider, with a total active installation count exceeding 350,000. The compromised API endpoint has since been repaired and restored to normal operation.",
    tags_en: ["BdThemes", "WordPress", "Supply Chain Attack", "XSS Vulnerability", "Wordfence", "Biggopti", "Webshell"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178021", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-075",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Mozilla 私鑰意外暴露於 GitHub，撤銷舊檔並發布新 GPG 簽署金鑰",
    summary: "Mozilla 宣布因將用於 Firefox 與 Thunderbird（包含 Linux tarballs、RPM 包及校驗檔）的 GPG 簽署私鑰意外上傳至 GitHub 私有儲存庫，已決定撤銷舊金鑰並發布新金鑰。雖然該儲存庫僅限內部開發人員存取，且審計紀錄顯示未有未授權存取痕跡，但私鑰外洩仍具備遭攻擊者用於簽署惡意檔案的供應鏈攻擊風險。Mozilla 已加入預防機制。一般使用者無需採取行動，但手動驗證 GPG 簽署者與使用 RPM 套件者需依指示匯入新金鑰或進行相應設定。",
    tags: ["Mozilla", "Firefox", "Thunderbird", "GPG 金鑰", "供應鏈安全", "GitHub"],
    title_en: "Mozilla's Private Key Accidentally Exposed on GitHub; Old Key Revoked and New GPG Key Published",
    summary_en: "Mozilla announced that it has revoked its old GPG signing key and published a new one after the private key, used for Firefox and Thunderbird (including Linux tarballs, RPM packages, and verification files), was accidentally uploaded to a private GitHub repository. Although the repository was restricted to internal developers and audit logs show no unauthorized access, the private key leak still poses a supply chain attack risk, allowing attackers to sign malicious files. Mozilla has implemented preventative measures. General users do not need to take action, but users who manually verify GPG signatures and those using RPM packages must import the new key or make corresponding settings as instructed.",
    tags_en: ["Mozilla", "Firefox", "Thunderbird", "GPG Key", "Supply Chain Security", "GitHub"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/mozilla-issues-new-firefox-gpg-key-following-exposure", lang: "EN" }
    ]
  },
  {
    id: "20260811-076",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Chrome擴充功能『AI Sidebar』重現，透過Google基礎設施傳遞新型惡意載荷",
    summary: "Netskope Threat Labs發現一個名為『AI Sidebar with DeepSeek, ChatGPT, Claude and more』的Chrome擴充功能，該擴充功能曾因竊取對話內容而被Google移除，現已透過Google自身的CRX分發基礎設施重新流通，並重新到達企業瀏覽器端。該擴充功能最初曾被指控爬取ChatGPT和DeepSeek的對話內容並傳送至外部網域。雖然後續版本看似修復了惡意行為，但Netskope觀察到版本1.7.3.0（2026年7月下旬發布）引入了新的惡意機制。該機制利用Chrome的更新和解除安裝事件，建立了一套聯盟行銷（affiliate）模式。具體而言，當擴充功能更新時，會觸發一個指向AI影片生成平台的聯盟連結；而解除安裝路徑則利用Chrome的特定漏洞，確保用戶在移除擴充功能時仍會產生推薦流量。安全公司已將此版本分類為Trojan.GenericFCA.Script.37952，並警告企業應立即移除此擴充功能，因為相同的傳遞通道未來可能載入更具破壞性的惡意載荷。",
    tags: ["Chrome擴充功能", "AI Sidebar", "Netskope Threat Labs", "CRX分發", "聯盟行銷", "Trojan.GenericFCA.Script.37952"],
    title_en: "Chrome Extension 'AI Sidebar' Reappears, Transmitting Novel Malicious Payloads via Google Infrastructure",
    summary_en: "Netskope Threat Labs discovered a Chrome extension named 'AI Sidebar with DeepSeek, ChatGPT, Claude and more.' This extension, which was previously removed by Google for stealing conversation content, is now circulating again through Google's own CRX distribution infrastructure, reaching enterprise browsers. The extension was initially accused of scraping ChatGPT and DeepSeek conversation content and transmitting it to external domains. Although subsequent versions appeared to fix the malicious behavior, Netskope observed that version 1.7.3.0 (released in late July 2026) introduced a new malicious mechanism. This mechanism leverages Chrome's update and uninstall events to establish an affiliate marketing model. Specifically, when the extension updates, it triggers an affiliate link pointing to an AI video generation platform; and the uninstall path exploits a specific Chrome vulnerability to ensure that users still generate referral traffic when removing the extension. Security firms have classified this version as Trojan.GenericFCA.Script.37952, warning enterprises to immediately remove the extension because the same transmission channel could potentially load more destructive malicious payloads in the future.",
    tags_en: ["Chrome Extension", "AI Sidebar", "Netskope Threat Labs", "CRX Distribution", "Affiliate Marketing", "Trojan.GenericFCA.Script.37952"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/extension-banned-for-stealing-ai-chats-returns-to-chrome-store-resumes-malicious-activities", lang: "EN" }
    ]
  },
  {
    id: "20260811-077",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "惡意 MCP 伺服器可利用 GhostSplice 技術竊取 SSH 金鑰與客戶資料",
    summary: "ASSET Research Group 揭露了一種名為 GhostSplice 的新型攻擊技術，可透過惡意 Model Context Protocol (MCP) 伺服器，在 AI 程式輔助工具中竊取敏感資料。此攻擊的本質在於，它不會發出單一明顯的惡意指令，而是將竊取請求分割成多個看似正常的片段，並將這些片段放置在 AI 輔助工具已使用的多個通道（如工具描述、工具結果）中。AI 代理（agent）會將這些分散的片段重新組合，從而將 SSH 金鑰、專有原始碼、客戶資料（customers.csv）和環境變數（.env）等敏感資訊傳輸給攻擊者。研究指出，即使單獨的片段看起來無害，當它們組合在一起時，就能指示 AI 收集本地的敏感檔案。此漏洞的實務影響極大，因為它繞過了單一的內容審核機制。修補建議是，客戶端必須將伺服器輸出的內容視為純資料而非指令，並且不應允許一個工具的輸出值未經檢查地流入另一個工具的參數中。此外，使用者應確保對所有第三方和自定義的 MCP 整合進行嚴格的審核。",
    tags: ["MCP", "GhostSplice", "AI 輔助工具", "SSH 金鑰", "程式碼竊取", "ASSET Research Group"],
    title_en: "Malicious MCP Server Can Use GhostSplice Technique to Steal SSH Keys and Customer Data",
    summary_en: "ASSET Research Group has disclosed a novel attack technique called GhostSplice, which can steal sensitive data through a malicious Model Context Protocol (MCP) server within AI coding assistance tools. The core of this attack is that it does not issue a single obvious malicious command; instead, it segments the exfiltration request into multiple seemingly normal fragments, placing these fragments across multiple channels already used by the AI assistance tool (such as tool descriptions or tool results). The AI agent then reassembles these dispersed fragments, transmitting sensitive information like SSH keys, proprietary source code, customer data (customers.csv), and environment variables (.env) to the attacker. The research indicates that even if individual fragments appear harmless, their combination instructs the AI to collect sensitive local files. The practical impact of this vulnerability is significant because it bypasses single content review mechanisms. The recommended mitigation is that clients must treat server output content as pure data rather than instructions, and should not allow the output value of one tool to flow into another tool's parameters without inspection. Furthermore, users should ensure rigorous auditing of all third-party and custom MCP integrations.",
    tags_en: ["MCP", "GhostSplice", "AI Coding Tools", "SSH Keys", "Code Theft", "ASSET Research Group"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/malicious-mcp-servers-can-split.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-078",
    trackers: ["os"],
    category: "Android",
    title: "Google TV Freeplay 擴充內容，提供超過 10,000 部點播電影與影集",
    summary: "Google TV 的 Freeplay 服務持續擴展其內容庫。除了過去新增的數百個直播電視頻道外，Freeplay 現已整合點播電影和影集內容。透過與 A24 和 Lionsgate 等合作夥伴，Google 宣布將加入超過 10,000 部影視作品，用戶無需額外安裝應用程式即可觀看。Freeplay 體驗介面現已新增「直播電視」和「免費電影與影集」兩個分頁，方便用戶尋找內容。此功能自今日起開始滾動推出，讓用戶能更方便地透過 Google TV 觀看多樣化的免費內容。",
    tags: ["Google TV", "Freeplay", "Android", "點播內容", "A24", "Lionsgate"],
    title_en: "Google TV Freeplay expands content, offering over 10,000 on-demand movies and series",
    summary_en: "Google TV's Freeplay service continues to expand its content library. In addition to the hundreds of live TV channels added previously, Freeplay now integrates on-demand movies and series. Through partnerships with companies like A24 and Lionsgate, Google announced the addition of over 10,000 titles, viewable without requiring users to install additional applications. The Freeplay experience interface now includes two tabs: 'Live TV' and 'Free Movies & Series,' making it easier for users to find content. This feature is rolling out starting today, allowing users to view diverse free content on Google TV more conveniently.",
    tags_en: ["Google TV", "Freeplay", "Android", "On-Demand Content", "A24", "Lionsgate"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/11/google-tv-free-movies-on-demand", lang: "EN" }
    ]
  },
  {
    id: "20260811-079",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Buds 獲 FDA 認證，將推出個人化助聽器功能",
    summary: "三星宣布其 Galaxy Buds 將在美國獲得 FDA 認證，推出「Hearing Test」和「Hearing Aid」兩項新功能。這些功能旨在提升使用者對周遭聲音的感知，特別針對聽力缺陷進行個人化調整。使用者可以透過自我測試，讓系統精準判斷聽力缺口，進而由「Hearing Aid」功能放大難以聽到的聲音，例如高頻、周圍的低語聲和遠處的聲音。此外，該功能還支援進階的降噪和波束成形技術，能幫助使用者聚焦前方聲音並抑制背景雜音。此功能預計於 2026 年第四季，僅限於 Galaxy Buds 3 Pro 和 Galaxy Buds 4 Pro，並在美國及其他指定市場推出。",
    tags: ["Samsung", "Galaxy Buds", "FDA", "助聽器", "聽力輔助", "Galaxy Buds 3 Pro", "Galaxy Buds 4 Pro"],
    title_en: "Samsung Galaxy Buds receive FDA clearance, set to launch personalized hearing aid features",
    summary_en: "Samsung announced that its Galaxy Buds will receive FDA clearance in the United States, introducing two new features: \"Hearing Test\" and \"Hearing Aid.\" These features aim to enhance the user's perception of surrounding sounds, providing personalized adjustments especially for hearing impairments. Users can perform self-tests, allowing the system to accurately diagnose hearing gaps, which the \"Hearing Aid\" function can then amplify to make difficult-to-hear sounds—such as high frequencies, surrounding whispers, and distant voices—more audible. Furthermore, the function supports advanced noise reduction and beamforming technology, helping users focus on sounds in front of them while suppressing background noise. This feature is expected to launch in Q4 2026, exclusively for the Galaxy Buds 3 Pro and Galaxy Buds 4 Pro, and will be available in the US and other designated markets.",
    tags_en: ["Samsung", "Galaxy Buds", "FDA", "Hearing Aid", "Hearing Assistance", "Galaxy Buds 3 Pro", "Galaxy Buds 4 Pro"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/11/samsung-galaxy-buds-hearing-aid-feature", lang: "EN" }
    ]
  },
  {
    id: "20260811-080",
    trackers: ["os", "security"],
    category: "Android",
    title: "Microsoft Teams for Android 存在 XSS 漏洞，授權攻擊者可進行網路偽造攻擊",
    summary: "本篇報告揭露 CVE-2026-65767，指出 Microsoft Teams for Android 應用程式存在不當處理輸入資料時導致的網頁生成漏洞，屬於跨站腳本攻擊（Cross-Site Scripting, XSS）。此漏洞允許授權攻擊者（authorized attacker）在網路環境下執行偽造（spoofing）行為。雖然原文未提供具體的 CVSS 分數或影響範圍，但該漏洞的攻擊向量為網路（AV:N）、低複雜度（AC:L）、低權限（PR:L），且可導致高機密性（C:H）、高完整性（I:H）和高可用性（A:H）的影響。建議使用者應密切關注 Microsoft 官方的安全公告，並儘快更新至修補版本，以防範被授權帳號劫持或資料竊取。",
    tags: ["Microsoft Teams", "Android", "CVE-2026-65767", "XSS", "跨站腳本攻擊", "資安漏洞"],
    title_en: "Microsoft Teams for Android has XSS vulnerability, allowing authorized attackers to perform network spoofing attacks",
    summary_en: "This report discloses CVE-2026-65767, pointing out a Cross-Site Scripting (XSS) vulnerability in the Microsoft Teams for Android application caused by improper handling of input data. This vulnerability allows an authorized attacker to perform spoofing actions within a network environment. Although the original text did not provide specific CVSS scores or impact scope, the vulnerability's attack vector is Network (AV:N), the attack complexity is Low (AC:L), and the required privileges are Low (PR:L). Furthermore, it can lead to High Confidentiality (C:H), High Integrity (I:H), and High Availability (A:H) impacts. Users are advised to closely monitor official Microsoft security announcements and update to the patched version as soon as possible to prevent authorized account hijacking or data theft.",
    tags_en: ["Microsoft Teams", "Android", "CVE-2026-65767", "XSS", "Cross-Site Scripting", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-65767", lang: "EN" }
    ]
  },
  {
    id: "20260811-081",
    trackers: ["os", "security"],
    category: "Android",
    title: "Microsoft Teams Android 存在路徑遍歷漏洞 (CVE-2026-65768)，允許遠端執行程式碼",
    summary: "本漏洞 (CVE-2026-65768) 存在於 Microsoft Teams 的 Android 應用程式中。攻擊者若能利用此「路徑遍歷」（path traversal）缺陷，可導致應用程式在未經授權的限制目錄外操作，進而允許透過網路執行惡意程式碼。此漏洞的攻擊向量為網路 (AV:N)，攻擊複雜度為低 (AC:L)，且無需登入權限 (PR:N)，屬於遠端、可控、高風險的威脅。建議使用者應留意 Microsoft 官方的修補公告，並儘速更新至修復版本，以避免遭受遠端程式碼執行攻擊。由於 NVD 尚未提供完整的 CVSS 4.0 評分，實務修補建議應以官方安全公告為準。",
    tags: ["Microsoft Teams", "Android", "CVE-2026-65768", "路徑遍歷", "遠端程式碼執行", "Microsoft Corporation"],
    title_en: "Microsoft Teams Android Path Traversal Vulnerability (CVE-2026-65768) Allows Remote Code Execution",
    summary_en: "This vulnerability (CVE-2026-65768) exists in the Microsoft Teams Android application. If an attacker exploits this 'path traversal' flaw, it can cause the application to operate outside of authorized restricted directories, thereby allowing the execution of malicious code over the network. The attack vector is Network (AV:N), the attack complexity is Low (AC:L), and no privileges are required (PR:N), classifying it as a remote, controllable, high-risk threat. Users are advised to monitor official Microsoft patch announcements and update to the patched version promptly to prevent remote code execution attacks. Since NVD has not yet provided a complete CVSS 4.0 score, practical patching advice should follow official security announcements.",
    tags_en: ["Microsoft Teams", "Android", "CVE-2026-65768", "Path Traversal", "Remote Code Execution", "Microsoft Corporation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-65768", lang: "EN" }
    ]
  },
  {
    id: "20260811-082",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 應用程式 Mira 存在資訊洩漏漏洞 CVE-2026-66832，透過 WebView 傳輸用戶會話與識別資訊",
    summary: "本漏洞 CVE-2026-66832 存在於 Mira Android 應用程式中。當使用者透過應用程式內嵌的 WebView 內容（例如商店重定向流程）進行操作時，應用程式會將用戶的即時會話 Token 作為查詢字串參數附加到 URL 中，同時也會將持久性用戶識別碼包含在 WebView 的 User-Agent 標頭中。這些敏感資訊會被傳輸給第三方網站屬性、來源日誌（referrer logs），以及 WebView 內運行的任何 JavaScript。這屬於資訊洩漏（Information Leakage）類型的漏洞，可能導致攻擊者竊取用戶的會話狀態和個人識別資訊。由於原文未提供修補或版本資訊，建議開發者應審查所有使用 WebView 內容的流程，確保敏感的會話 Token 和用戶識別碼不會被意外地暴露在 URL 或 HTTP 標頭中，特別是在與第三方服務互動時。",
    tags: ["Android", "Mira", "CVE-2026-66832", "WebView", "資訊洩漏", "會話Token"],
    title_en: "Information Leakage Vulnerability CVE-2026-66832 Found in Android Application Mira via WebView",
    summary_en: "The vulnerability CVE-2026-66832 exists in the Mira Android application. When a user interacts with embedded WebView content within the application (such as store redirection flows), the application appends the user's active session Token as a query string parameter to the URL, and simultaneously includes the persistent user identifier in the WebView's User-Agent header. This sensitive information is transmitted to third-party website properties, referrer logs, and any JavaScript running within the WebView. This constitutes an Information Leakage vulnerability, which could allow an attacker to steal the user's session state and personally identifiable information. Since the original text did not provide patch or version information, developers are advised to review all processes that utilize WebView content, ensuring that sensitive session Tokens and user identifiers are not accidentally exposed in URLs or HTTP headers, especially when interacting with third-party services.",
    tags_en: ["Android", "Mira", "CVE-2026-66832", "WebView", "Information Leakage", "Session Token"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-66832", lang: "EN" }
    ]
  },
  {
    id: "20260811-083",
    trackers: ["os", "security"],
    category: "Android",
    title: "Mira Android Companion App 存在 CVE-2026-67558 漏洞，允許攻擊者注入偽造荷爾蒙測量數據",
    summary: "Mira Android companion app v4.5.15.4 存在一個安全漏洞 (CVE-2026-67558)。該應用程式在識別配對的 Mira 荷爾蒙分析儀時，僅依賴進行字串匹配（substring match）於 BLE 廣告名稱，缺乏加密的周邊設備身份驗證、MAC 白名單或綁定身份檢查。這使得攻擊者可以攔截即時會話令牌資訊，並注入偽造的荷爾蒙測量數據到受害者的雲端記錄和臨床趨勢檢視介面。此漏洞的 CVSS 3.1 向量為 AV:A/AC:L/PR:N/UI:R/S:C/C:H/I:L/A:N，表示攻擊向量為物理接觸，攻擊複雜度為低，權限要求為無，使用者互動要求為偵測，範圍為更高，機密性高，完整性低，可用性無。建議開發者應加強設備配對和身份驗證機制，避免僅依賴 BLE 廣告名稱進行設備識別。",
    tags: ["Mira", "Android", "CVE-2026-67558", "BLE", "荷爾蒙分析儀", "資安漏洞"],
    title_en: "CVE-2026-67558 Vulnerability in Mira Android Companion App Allows Injection of Fake Hormone Measurement Data",
    summary_en: "The Mira Android companion app v4.5.15.4 contains a security vulnerability (CVE-2026-67558). When identifying a paired Mira hormone analyzer, the application relies solely on substring matching of the BLE advertising name, lacking encrypted peripheral device authentication, MAC whitelisting, or binding identity checks. This allows an attacker to intercept real-time session token information and inject fabricated hormone measurement data into the victim's cloud records and clinical trend viewing interface. The CVSS 3.1 vector for this vulnerability is AV:A/AC:L/PR:N/UI:R/S:C/C:H/I:L/A:N, indicating a physical attack vector, low attack complexity, no privileges required, user interaction required for detection, higher scope, high confidentiality, low integrity, and no availability impact. Developers are advised to strengthen device pairing and authentication mechanisms, avoiding reliance solely on BLE advertising names for device identification.",
    tags_en: ["Mira", "Android", "CVE-2026-67558", "BLE", "Hormone Analyzer", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-67558", lang: "EN" }
    ]
  },
  {
    id: "20260811-084",
    trackers: ["os", "security"],
    category: "Android",
    title: "Mira Android APK 存在 CVE-2026-67568 漏洞，允許遠端讀寫生殖健康資料",
    summary: "本漏洞 CVE-2026-67568 存在於 Mira 的 Android APK v4.5.15.4 版本。攻擊者若能利用此漏洞，可從連網主機對受害者的生殖健康資料進行讀取和寫入操作。這可能導致健康資訊被偽造、刪除或被破壞，造成嚴重的隱私與資料完整性風險。根據 CVSS 3.1 評分向量，此漏洞的攻擊向量（AV）為網路（N），權限（PR）為無（N），使用者介面（UI）為無（N），範圍（S）為使用者（U），機密性（C）和完整性（I）皆為高（H）。雖然原文未提供具體的修補版本或修補建議，但建議用戶應立即檢查並更新 Mira 應用程式至安全版本，以防止資料被未經授權存取或修改。",
    tags: ["Mira", "Android", "CVE-2026-67568", "生殖健康資料", "資料完整性"],
    title_en: "CVE-2026-67568 Vulnerability in Mira Android APK Allows Remote Read/Write of Reproductive Health Data",
    summary_en: "The vulnerability CVE-2026-67568 exists in Mira's Android APK version v4.5.15.4. If an attacker exploits this vulnerability, they can perform read and write operations on the victim's reproductive health data from a connected host. This could lead to the falsification, deletion, or corruption of health information, posing severe privacy and data integrity risks. According to the CVSS 3.1 scoring vector, the vulnerability has a Network (N) attack vector (AV), None (N) privileges required (PR), None (N) user interface (UI), and User (U) scope (S). Both Confidentiality (C) and Integrity (I) are rated High (H). Although the original text does not provide specific patched versions or remediation advice, users are advised to immediately check and update the Mira application to a secure version to prevent unauthorized access or modification of data.",
    tags_en: ["Mira", "Android", "CVE-2026-67568", "Reproductive Health Data", "Data Integrity"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-67568", lang: "EN" }
    ]
  },
  {
    id: "20260811-085",
    trackers: ["security"],
    category: "前瞻技術",
    title: "趨勢科技 TrendAI 發表 AI Security Blueprint 與 Agentic Governance Gateway 強化 AI 代理管控",
    summary: "趨勢科技於黑帽大會展示旗下 TrendAI Vision One 平臺的新功能。針對企業內部 AI 應用與 AI Agent 的資安防護，推出「AI Security Blueprint」儀表板與「Agentic Governance Gateway」。該方案聚焦於涵蓋服務、模型、資料儲存庫及身分權限等 AI 資產的全生命週期能見度，並針對 AI 代理實施如同人類員工的低權限與身分治理。平臺結合先前推出的 AI Secure Access 與 AI Application Security（含 AI Guard），能即時攔截提示詞注入等攻擊並實施多雲 AI-SPM 態勢管理。",
    tags: ["趨勢科技", "TrendAI", "AI Security Blueprint", "Agentic Governance Gateway", "Agentic AI", "提示詞注入", "AI-SPM", "黑帽大會"],
    title_en: "TrendAI by Trend Micro Unveils AI Security Blueprint and Agentic Governance Gateway to Enhance AI Agent Control",
    summary_en: "At Black Hat, Trend Micro showcased new functionalities for its TrendAI Vision One platform. To address the cybersecurity protection of enterprise internal AI applications and AI Agents, the company introduced the \"AI Security Blueprint\" dashboard and the \"Agentic Governance Gateway.\" This solution focuses on providing full lifecycle visibility for AI assets, including services, models, data repositories, and identity permissions. Furthermore, it implements low-privilege and identity governance for AI Agents, mirroring human employee controls. Combined with previously launched AI Secure Access and AI Application Security (including AI Guard), the platform can instantly intercept attacks such as prompt injection and perform multi-cloud AI-SPM posture management.",
    tags_en: ["Trend Micro", "TrendAI", "AI Security Blueprint", "Agentic Governance Gateway", "Agentic AI", "Prompt Injection", "AI-SPM", "Black Hat"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178036", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-086",
    trackers: ["security"],
    category: "前瞻技術",
    title: "趨勢科技於 Black Hat USA 提出企業 AI 資安架構：重塑可視性、所有權、可觀測性與治理四大面向",
    summary: "隨著大型語言模型與 Agentic AI 的普及，資安威脅日益嚴峻。趨勢科技於黑帽大會（Black Hat USA）建議企業重塑 AI 資安風險管理架構，並聚焦於四大核心面向：全面掌握 AI 工具與敏感資料流向的「可視性」、釐清 AI Agent 權責劃分與存取控制的「所有權」、深入稽核提示詞與工具呼叫等動態行為的「可觀測性」，以及涵蓋模型越獄防範與 MCP 伺服器安全的「治理」。修補與防護建議方面，企業應透端點、郵件與雲端感測器建立使用輪廓，並針對 Agent 賦予明確權責規範與稽核機制，以因應潛在風險。",
    tags: ["趨勢科技", "TrendAI", "Agentic AI", "AI Security", "Black Hat USA", "MCP", "AI 治理", "資安風險管理"],
    title_en: "TrendAI Presents Enterprise AI Security Architecture at Black Hat USA: Reshaping Visibility, Ownership, Observability, and Governance",
    summary_en: "With the proliferation of Large Language Models and Agentic AI, cybersecurity threats are escalating. At Black Hat USA, TrendAI recommended that enterprises reshape their AI security risk management architecture, focusing on four core areas: 'Visibility'—achieving comprehensive mastery over AI tool usage and sensitive data flow; 'Ownership'—clarifying AI Agent accountability and access control; 'Observability'—deeply auditing dynamic behaviors such as prompts and tool calls; and 'Governance'—encompassing model jailbreak prevention and MCP server security. Regarding remediation and defense recommendations, enterprises should establish usage profiles using endpoint, email, and cloud sensors, and assign clear accountability and auditing mechanisms for Agents to address potential risks.",
    tags_en: ["TrendAI", "Agentic AI", "AI Security", "Black Hat USA", "MCP", "AI Governance", "Cybersecurity Risk Management"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178013", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-087",
    trackers: ["security"],
    category: "前瞻技術",
    title: "PortSwigger 發布自主 AI 資安研究系統 HTTP Terminator，發現 Apache Traffic Server 零時差漏洞 CVE-2026-63078",
    summary: "PortSwigger 研究總監 James Kettle 發表自主資安研究系統 HTTP Terminator，該系統利用 AI 結合 138 份 RFC 文件片段產生 3 萬個測試向量，能自動提出攻擊假設並進行驗證。此研究成功找出多種新型 HTTP 請求不同步（HTTP Request Smuggling）手法與共用解析器混淆概念，並在獲授權的漏洞懸賞計畫中檢測約 3 萬個網站，發現 Apache Traffic Server 零時差漏洞 CVE-2026-63078，相關弱點亦於銀行與機場等環境得到驗證。PortSwigger 已公開該系統原始碼並更新 HTTP Request Smuggler 等工具。修補建議方面，專家建議網站避免前端與後端伺服器間使用 HTTP/1.1 連線，應升級至 HTTP/2 或更新版本。",
    tags: ["PortSwigger", "James Kettle", "HTTP Terminator", "CVE-2026-63078", "Apache Traffic Server", "HTTP Request Smuggling", "AI資安", "HTTP請求不同步"],
    title_en: "PortSwigger Releases Proprietary AI Security Research System HTTP Terminator, Discovering Apache Traffic Server Zero-Day Vulnerability CVE-2026-63078",
    summary_en: "PortSwigger Research Director James Kettle unveiled HTTP Terminator, a proprietary security research system. This system utilizes AI combined with 138 RFC document snippets to generate 30,000 test vectors, automatically proposing and validating attack hypotheses. This research successfully identified multiple novel HTTP Request Smuggling techniques and shared parser confusion concepts. By testing approximately 30,000 websites within an authorized bug bounty program, the system discovered the Apache Traffic Server zero-day vulnerability CVE-2026-63078. Related weaknesses were also validated in environments such as banks and airports. PortSwigger has made the system's source code public and updated tools like HTTP Request Smuggler. Regarding remediation, experts recommend that websites avoid using HTTP/1.1 connections between front-end and back-end servers, and instead upgrade to HTTP/2 or a newer version.",
    tags_en: ["PortSwigger", "James Kettle", "HTTP Terminator", "CVE-2026-63078", "Apache Traffic Server", "HTTP Request Smuggling", "AI Security", "HTTP Request Smuggling"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178025", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-088",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Google ADK for Python 爆代理對代理（Agent-to-Agent）攻擊漏洞，低權限 AI 代理可被利用竄改 GitHub PR",
    summary: "資安業者 Pillar Security 揭露 Google ADK for Python 存在代理對代理（Agent-to-Agent）攻擊漏洞。攻擊者可透過在 GitHub 拉取請求（PR）中植入惡意提示，誘使低權限用戶互動代理發送特製的 @Gemini CLI 指令，藉此觸發僅限維護者使用的高權限代理工作流程。此攻擊向量會導致敏感資訊暴露、拉取請求內容遭竄改，甚至可能進一步污染程式碼審查與變更流程。受影響產品為 Google ADK for Python，CVE 與 CVSS 分數未公開。研究人員於 6 月初向 Google 通報後，官方目前已完成修補。",
    tags: ["Google", "ADK for Python", "Agentic AI", "Pillar Security", "Agent-to-Agent 攻擊", "GitHub", "Prompt Injection"],
    title_en: "Google ADK for Python Vulnerable to Agent-to-Agent Attack, Low-Privilege AI Agents Can Be Exploited to Tamper with GitHub PRs",
    summary_en: "Security firm Pillar Security has disclosed an Agent-to-Agent attack vulnerability in Google ADK for Python. An attacker can inject malicious prompts into a GitHub Pull Request (PR) to trick a low-privilege user into having an interactive agent send a specialized @Gemini CLI command. This action can trigger a high-privilege agent workflow intended only for maintainers. This attack vector could lead to sensitive information exposure, tampering with PR content, and potentially further polluting the code review and modification process. The affected product is Google ADK for Python. No CVE or CVSS score has been disclosed. The vulnerability was reported to Google by researchers in early June, and the official patch has since been implemented.",
    tags_en: ["Google", "ADK for Python", "Agentic AI", "Pillar Security", "Agent-to-Agent Attack", "GitHub", "Prompt Injection"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178024", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-089",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "OpenAI 發表 Daybreak 分級機制與 GPT-5.6-Cyber 模型，挖掘逾 400 項 OS 核心漏洞",
    summary: "OpenAI 宣布將資安人員專用的 Daybreak 計畫劃分為 Blue 與 Red 兩級存取權限。其中 Red 級採用全新資安模型 GPT-5.6-Cyber，專門用於零時差漏洞發掘與漏洞利用鏈開發，在進階資安任務完成率達 95%。該模型已於 Chrome V8 引擎發現可逃出沙箱的漏洞（含 CVE-2026-15903）、5 項行動作業系統漏洞、3 項資料庫重大漏洞，以及熱門作業系統核心逾 400 項可能造成權限提升的漏洞。相關漏洞正協調修補中。針對存取安全，OpenAI 將進行嚴格身分與用途審查，並規定 9 月 1 日起 Daybreak 個人帳號必須使用硬體安全金鑰。",
    tags: ["OpenAI", "GPT-5.6-Cyber", "Daybreak", "CVE-2026-15903", "AI 安全", "漏洞發掘", "權限提升", "紅隊演練"],
    title_en: "OpenAI Releases Daybreak Tiered Mechanism and GPT-5.6-Cyber Model, Uncovering Over 400 OS Core Vulnerabilities",
    summary_en: "OpenAI announced that its Daybreak program, designed for cybersecurity professionals, will be divided into Blue and Red access tiers. The Red tier utilizes a new security model, GPT-5.6-Cyber, specifically designed for zero-day vulnerability discovery and exploit chain development, achieving a 95% completion rate in advanced security tasks. This model has already discovered a sandbox-escape vulnerability in the Chrome V8 engine (including CVE-2026-15903), five mobile operating system vulnerabilities, three critical database vulnerabilities, and over 400 potential privilege escalation vulnerabilities in popular operating system cores. These vulnerabilities are currently being coordinated for patching. Regarding access security, OpenAI will implement strict identity and usage reviews, mandating that all Daybreak personal accounts must use a hardware security key starting September 1st.",
    tags_en: ["OpenAI", "GPT-5.6-Cyber", "Daybreak", "CVE-2026-15903", "AI Security", "Vulnerability Discovery", "Privilege Escalation", "Red Teaming"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178022", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-090",
    trackers: ["security"],
    category: "前瞻技術",
    title: "資安業者 ThreatLocker 完成 1.9 億美元 F 輪募資，深化零信任架構與 AI 安全防護能力",
    summary: "美國零信任資安業者 ThreatLocker 宣布完成 1.9 億美元 F 輪募資，資金將用於強化旗下零信任平台、AI 安全控管能力及擴充國際市場。 ThreatLocker 採用預設拒絕（deny-by-default）機制，近期將控制範疇延伸至網路與雲端，推出 ZTNA 與 ZTCA 解決方案，免除傳統 VPN 並防止憑證遭竊後存取 M365 或 GitHub 等雲端服務。針對 AI 安全，該平台支援控管 Claude Code 與 OpenAI Codex 等 AI 工具及 Agentic AI 對 MCP 伺服器的存取權限，並阻擋未經核准的 AI 生成程式碼執行。",
    tags: ["ThreatLocker", "零信任", "ZTNA", "ZTCA", "AI安全", "MCP", "募資"],
    title_en: "Cybersecurity Firm ThreatLocker Completes $190 Million Series F Funding to Deepen Zero Trust Architecture and AI Security Capabilities",
    summary_en: "American zero trust cybersecurity firm ThreatLocker announced the completion of $190 million in Series F funding. The capital will be used to strengthen its zero trust platform, enhance AI security controls, and expand into international markets. ThreatLocker employs a deny-by-default mechanism and is expanding its control scope to include networks and cloud environments, launching ZTNA and ZTCA solutions. These solutions eliminate the need for traditional VPNs and prevent unauthorized access to cloud services like M365 or GitHub even if credentials are stolen. Regarding AI security, the platform supports controlling access to AI tools and Agentic AI, such as Claude Code and OpenAI Codex, for MCP servers, and blocks the execution of unapproved AI-generated code.",
    tags_en: ["ThreatLocker", "Zero Trust", "ZTNA", "ZTCA", "AI Security", "MCP", "Funding"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178019", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-091",
    trackers: ["security"],
    category: "前瞻技術",
    title: "澳洲通訊局警告頂尖 AI 模型降低網路攻擊門檻，呼籲組織重新檢視資安風險與供應鏈管理",
    summary: "澳洲通訊局（ASD）發布資安指引，警告頂尖 AI 模型（Frontier AI Model）將大幅縮短漏洞發現與自動化利用的時間，降低發動網路攻擊的門檻，恐使組織既有的資安風險評估假設失效。ASD 呼籲企業董事會、政府與關鍵基礎設施單位重新評估風險容忍度，並注意 AI 供應商受外國控制以及三、四方供應鏈的韌性風險。在防護建議上，組織短期內應落實最小權限原則、優化身分存取管理、控管 AI 代理權限，並及時修補漏洞與演練事件應變計畫；中長期則應引人可控且有人員監督的 AI 工具輔助軟體開發漏洞檢測與資安評估，並恪守安全設計（Secure by Design）原則。",
    tags: ["澳洲通訊局", "ASD", "頂尖 AI 模型", "Agentic AI", "AI 資安風險", "供應鏈安全", "最小權限原則", "Secure by Design"],
    title_en: "Australian Signals Directorate Warns Top AI Models Lower Cyber Attack Barrier, Urges Organizations to Reassess Security Risks and Supply Chain Management",
    summary_en: "The Australian Signals Directorate (ASD) has issued a security advisory, warning that advanced AI models (Frontier AI Models) will significantly shorten the time required for vulnerability discovery and automated exploitation, thereby lowering the barrier to launching cyber attacks. This could render organizations' existing cybersecurity risk assessment assumptions invalid. ASD urges corporate boards, government entities, and critical infrastructure operators to reassess their risk tolerance, paying particular attention to the risks associated with AI suppliers controlled by foreign entities and the resilience of third- and fourth-party supply chains. For immediate protective measures, organizations should implement the principle of least privilege, optimize identity access management, control AI agent permissions, and promptly patch vulnerabilities and drill incident response plans. In the medium to long term, they should adopt AI tools for software development vulnerability detection and security assessment that are controllable and supervised by personnel, while adhering to the Secure by Design principle.",
    tags_en: ["Australian Signals Directorate", "ASD", "Frontier AI Models", "Agentic AI", "AI Security Risk", "Supply Chain Security", "Principle of Least Privilege", "Secure by Design"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178017", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-092",
    trackers: ["security"],
    category: "前瞻技術",
    title: "F5警告企業採用中國開放權重AI模型風險：慎防提示詞注入與Pickle反序列化漏洞",
    summary: "F5旗下研究團隊針對Qwen3.5、GLM-5.2等中國開放權重AI模型進行安全性分析，指出模型效能提升並不等於具備更高的提示注入與越獄攻擊抵禦能力。此外，開放權重不等於開放原始碼，企業無法掌控訓練資料與流程，需留意資料主權與供應鏈背景風險。技術層面上，傳統以Pickle格式散布的模型檔案在載入反序列化時，可能執行夾帶的惡意程式碼。研究團隊建議企業確認檔案來源、在隔離環境測試、優先採用不具程式碼執行能力的Safetensors格式，並將模型檔案納入既有的軟體供應鏈安全管理流程。",
    tags: ["F5", "Qwen3.5", "GLM-5.2", "開放權重AI模型", "提示注入", "Pickle", "Safetensors", "軟體供應鏈安全"],
    title_en: "F5 Warns Enterprises of Risks in Adopting Chinese Open-Weight AI Models: Beware of Prompt Injection and Pickle Deserialization Vulnerabilities",
    summary_en: "F5's research team conducted a security analysis of Chinese open-weight AI models, such as Qwen3.5 and GLM-5.2, pointing out that improved model performance does not equate to higher resistance against prompt injection and jailbreak attacks. Furthermore, open-weight does not mean open-source; enterprises cannot control the training data or process, necessitating attention to data sovereignty and supply chain background risks. On a technical level, model files traditionally distributed in Pickle format may execute malicious code during deserialization upon loading. The research team advises enterprises to verify file sources, test in isolated environments, prioritize the use of Safetensors format—which lacks code execution capabilities—and integrate model files into existing software supply chain security management processes.",
    tags_en: ["F5", "Qwen3.5", "GLM-5.2", "Open-Weight AI Models", "Prompt Injection", "Pickle", "Safetensors", "Software Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178015", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-093",
    trackers: ["security"],
    category: "前瞻技術",
    title: "IP情報與Bot偵測業者Spur獲Insight Partners兩億美元投資",
    summary: "IP情報與機器人程式（Bot）偵測業者Spur Intelligence宣佈獲得Insight Partners高達兩億美元的投資。Spur於2017年由前美國國防部工程師創立，專注於協助企業辨識正常網路活動與透過VPN、常駐代理網路（Residential Proxy Network）及Bot網路等匿名化基礎設施隱藏來源的流量。相關技術能透過API與資料饋送整合至企業系統，協助資安團隊精準偵測詐欺、網路威脅與帳號濫用。因應Bot流量激增，該資金將用於產品研發、擴展情報涵蓋範圍與營運規模。",
    tags: ["Spur Intelligence", "Insight Partners", "Bot 偵測", "IP 情報", "Residential Proxy", "網路詐欺偵測", "匿名化基礎設施"],
    title_en: "IP Intelligence and Bot Detection Firm Spur acquires $200 Million Investment from Insight Partners",
    summary_en: "IP intelligence and bot detection firm Spur Intelligence announced it has secured up to $200 million in investment from Insight Partners. Founded in 2017 by a former U.S. Department of Defense engineer, Spur specializes in helping enterprises distinguish normal network activity from traffic hidden by anonymization infrastructures such as VPNs, Residential Proxy Networks, and bot networks. Its technology can be integrated into enterprise systems via API and data feeds, assisting security teams in accurately detecting fraud, cyber threats, and account abuse. To address the surge in bot traffic, the funds will be used for product development, expanding intelligence coverage, and scaling operations.",
    tags_en: ["Spur Intelligence", "Insight Partners", "Bot Detection", "IP Intelligence", "Residential Proxy", "Fraud Detection", "Anonymization Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178012", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260811-094",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI 推出專用資安模型 GPT-5.6-Cyber 並擴大 Daybreak 合作計畫",
    summary: "OpenAI 宣布推出專為授權資安工作設計的 GPT-5.6-Cyber 模型，並擴大 Daybreak 資安夥伴計畫。該模型建立於 GPT-5.6-Sol 之上，專門訓練用於尋找零日漏洞與建立漏洞利用鏈，並降低了雙重用途任務的拒絕率。測試顯示，該模型在包含漏洞利用鏈開發、權限提升與身份驗證繞過等提示中的完成率達 95%。目前它已成功發現 Chrome 瀏覽器 V8 引擎的高危險性漏洞，以及未公開名稱的行動作業系統、資料庫與作業系統核心漏洞。為防止濫用，OpenAI 將僅透過 Daybreak 計畫（分為 Daybreak Blue 與 Daybreak Red 等級）向受信任的夥伴開放此模型。",
    tags: ["OpenAI", "GPT-5.6-Cyber", "Daybreak", "零日漏洞", "AI 安全", "V8 引擎", "漏洞利用鏈"],
    title_en: "OpenAI Launches Specialized Security Model GPT-5.6-Cyber and Expands Daybreak Partnership Program",
    summary_en: "OpenAI announced the launch of GPT-5.6-Cyber, a model specifically designed for licensed security work, and the expansion of its Daybreak security partnership program. Built upon GPT-5.6-Sol, this model is specialized for finding zero-day vulnerabilities and constructing exploit chains, while also reducing the refusal rate for dual-use tasks. Testing showed that the model achieved a 95% completion rate in prompts involving exploit chain development, privilege escalation, and identity authentication bypass. It has successfully discovered high-risk vulnerabilities in the Chrome browser V8 engine, as well as undisclosed vulnerabilities in mobile operating systems, databases, and operating system kernels. To prevent misuse, OpenAI will only make this model available to trusted partners through the Daybreak program (categorized into levels such as Daybreak Blue and Daybreak Red).",
    tags_en: ["OpenAI", "GPT-5.6-Cyber", "Daybreak", "Zero-day Vulnerability", "AI Security", "V8 Engine", "Exploit Chain"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/openai-unveils-new-cybersecurity-model-gpt-5-6-cyber", lang: "EN" }
    ]
  },
  {
    id: "20260811-095",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "Group-IB 揭露北韓駭客利用 AI 與 30 分鐘實時 Deepfake 偽造身分應徵全球企業",
    summary: "資安公司 Group-IB 於 ISEC 2026 大會上指出，北韓駭客組織正利用 ChatGPT 撰寫履歷，並結合 30 分鐘的實時 Deepfake 影音合成技術進行視訊面試，成功繞過企業的身分驗證（KYC）機制以偽裝求職。此類攻擊旨在滲透企業內部網路存取原始碼或竊取薪資轉轉移至北韓政權。攻擊者使用語音複製工具成本僅 10 至 50 美元，但對企業造成的金錢損失高達數千萬美元。由於攻擊者可預先測試商業驗證方案，單靠自動化偵測難以全面防禦。建議企業將 HR 招聘流程納入資安管制，引入威脅情報（Earned Intelligence）與主動預測機制，並在視訊面試中加入檢驗渲染瑕疵動作的交叉驗證手段。",
    tags: ["Group-IB", "北韓駭客", "Deepfake", "ChatGPT", "KYC身分驗證", "供應鏈攻擊", "AI脅威", "ISEC 2026"],
    title_en: "Group-IB Reveals North Korean Hackers Using AI and 30-Minute Live Deepfake to Impersonate Job Applicants in Global Companies",
    summary_en: "Cybersecurity firm Group-IB highlighted at ISEC 2026 that North Korean hacking groups are utilizing ChatGPT to write resumes, combining this with 30-minute live Deepfake video synthesis technology during video interviews to successfully bypass corporate Know Your Customer (KYC) mechanisms while posing as job seekers. These attacks aim to infiltrate corporate internal networks to access source code or steal payroll funds for transfer to the North Korean regime. The attackers use voice cloning tools that cost only $10 to $50, but the financial loss inflicted on companies can reach tens of millions of dollars. Because attackers can pre-test commercial verification schemes, automated detection alone makes comprehensive defense difficult. It is recommended that companies integrate cybersecurity controls into their HR recruitment processes, introduce threat intelligence and proactive prediction mechanisms, and incorporate cross-verification methods—such as checking for rendering flaws—during video interviews.",
    tags_en: ["Group-IB", "North Korean Hackers", "Deepfake", "ChatGPT", "KYC", "Supply Chain Attack", "AI Threat", "ISEC 2026"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145116&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260811-096",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "Fortinet 於 ISEC 2026 警告 Agentic AI 安全風險，呼籲建立代理型 AI 防護網與外部控制機制",
    summary: "在 ISEC 2026 上，Fortinet 常務金秀英指出 Agentic AI 的崛起帶來了全新層面的安全威脅。隨著 AI 具備自主判斷並能呼叫 API 與工具，提示詞注入（Prompt Injection）已成為主要攻擊路徑，甚至可能引發工具污染與權限提升。由於 CVE 與 CVSS 等具體漏洞編號未公開，其防禦重點在於模型外部控制。修補與建議措施包括：設置輸入與輸出護欄、掌控 AI 資產與網路 Inline 控制點、明確規定授權範圍，並在程式碼提交前進行驗證。",
    tags: ["Fortinet", "Agentic AI", "Prompt Injection", "ISEC 2026", "AI 安全", "OWASP"],
    title_en: "Fortinet Warns of Agentic AI Security Risks at ISEC 2026, Urging the Establishment of Agentic AI Defenses and External Control Mechanisms",
    summary_en: "At ISEC 2026, Fortinet Executive Director Kim Soo-young highlighted that the rise of Agentic AI introduces entirely new levels of security threats. As AI gains autonomous decision-making capabilities and the ability to call APIs and tools, Prompt Injection has become a primary attack vector, potentially leading to tool contamination and privilege escalation. Since specific vulnerability IDs like CVE and CVSS scores have not been disclosed, the focus of defense must be on external model control. Remediation and recommended measures include: implementing input and output guardrails, controlling AI assets and network inline control points, clearly defining authorization scopes, and conducting verification before code submission.",
    tags_en: ["Fortinet", "Agentic AI", "Prompt Injection", "ISEC 2026", "AI Security", "OWASP"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145110&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260811-097",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "Mobilint與Intellivix合作參與韓國道路公社AI CCTV轉型專案",
    summary: "AI晶片廠商Mobilint與影像分析企業Intellivix合作，參與韓國道路公社（EX）及韓國智慧社會振興院（NIA）主管的全國高速公路AI CCTV轉型專案。該項目涵蓋約4,000台高速公路CCTV，結合Mobilint的AI加速器「MLA400」與Intellivix的AI影像分析平台，運用Vision AI與VLM技術即時偵測交通事故、逆向行駛等突發狀況。系統支援與既有VMS、NVR等舊有架構整合，大幅降低硬體替換成本，強化韓國國產AI晶片在公共交通監控領域的應用普及與營運效率。",
    tags: ["Mobilint", "Intellivix", "MLA400", "AI CCTV", "Vision AI", "VLM", "韓國道路公社", "NIA"],
    title_en: "Mobilint and Intellivix Partner on South Korea Expressway Corporation AI CCTV Transformation Project",
    summary_en: "AI chip manufacturer Mobilint and image analysis company Intellivix are collaborating on a nationwide expressway AI CCTV transformation project, overseen by the Korea Expressway Corporation (EX) and the National Information Society Agency (NIA). The project covers approximately 4,000 expressway CCTV cameras. By combining Mobilint's AI accelerator, 'MLA400,' with Intellivix's AI image analysis platform, the system utilizes Vision AI and VLM technologies to detect sudden incidents such as traffic accidents and wrong-way driving in real-time. The system supports integration with existing architectures like VMS and NVR, significantly reducing hardware replacement costs and enhancing the adoption and operational efficiency of South Korea's domestic AI chips in public transportation surveillance.",
    tags_en: ["Mobilint", "Intellivix", "MLA400", "AI CCTV", "Vision AI", "VLM", "Korea Expressway Corporation", "NIA"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145109&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260811-098",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 為符合歐盟 AI 法案，宣布為 Claude 模型生成內容嵌入浮水印與數位來源元數據",
    summary: "為應對歐盟（EU）的《AI 法案》內容與透明度規定，Anthropic 宣布將在其未來推出的模型，包括已發布的 Claude 模型，生成的所有文字和檔案中嵌入浮水印（watermarks）。該技術旨在追溯內容來源（provenance）。對於文字內容，Anthropic 表示會將不可察覺的浮水印直接編織到文本本身，確保即使內容被複製貼上或經過部分編輯，浮水印仍能保留。對於檔案，則會依循 C2PA 標準，附加數位簽署的來源元數據。此舉涵蓋 Claude Platform (API)、Claude、Claude Code、Claude Cowork 和 Claude Tag 等所有受支援的產品，甚至包括 AWS、Google Cloud 和 Microsoft Foundry 等第三方提供商。雖然 Anthropic 聲稱浮水印不會改變內容的意義、品質或可讀性，但業界專家指出，目前缺乏技術細節，且現有的 OCR 系統或開源工具都可能移除或忽略這些標記。Anthropic 本身也承認，檢測到的浮水印並不能作為內容由 Claude 產生的決定性證據。",
    tags: ["Anthropic", "Claude", "AI 法案", "浮水印", "C2PA", "內容溯源"],
    title_en: "Anthropic Announces Watermarking and Digital Provenance Metadata for Claude Models to Comply with EU AI Act",
    summary_en: "In response to the European Union's (EU) AI Act content and transparency regulations, Anthropic announced that all text and files generated by its future models, including the already released Claude models, will be embedded with watermarks. This technology aims to track content provenance. For text content, Anthropic stated that it will weave imperceptible watermarks directly into the text itself, ensuring the watermark remains even if the content is copied, pasted, or partially edited. For files, it will attach digitally signed provenance metadata following the C2PA standard. This measure covers all supported products, including Claude Platform (API), Claude, Claude Code, Claude Cowork, and Claude Tag, and even third-party providers such as AWS, Google Cloud, and Microsoft Foundry. Although Anthropic claims the watermarks will not alter the meaning, quality, or readability of the content, industry experts point out that the lack of technical details, and the fact that existing OCR systems or open-source tools may remove or ignore these markers. Anthropic itself also acknowledged that the detection of the watermark cannot serve as definitive proof that the content was generated by Claude.",
    tags_en: ["Anthropic", "Claude", "AI Act", "Watermarking", "C2PA", "Content Provenance"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/11/anthropic-pledges-to-embed-watermarks-to-help-discern-ai-slop-in-sop-to-eu/5285792", lang: "EN" }
    ]
  },
  {
    id: "20260811-099",
    trackers: ["security"],
    category: "前瞻技術",
    title: "企業應主動建立AI治理框架：避免等待法規明確，應從風險可見性與應變演練入手",
    summary: "本文指出，AI治理已從法律部門的職責，提升至需要執行長（CEO）層級關注的戰略議題。許多企業誤以為可以等待AI法規定案後再處理治理問題，但這是一種短視行為。根據GrantThornton的報告，有46%的組織指出AI治理和合規問題是導致AI表現不佳的主因。作者強調，由於AI技術的快速採用和監管環境的碎片化，企業不能被動等待。例如，將通用AI工具用於敏感法律諮詢，可能導致資訊失去法律保密權，造成重大風險。因此，企業應建立具備適應性的治理框架，重點包括：第一，提升風險可見性，了解數據流向、AI系統的處理數據，以及適用於AI使用的各類法規；第二，建立彈性治理框架，利用AI輔助監控工具追蹤跨司法管轄區的法規和威脅變化；第三，定期演練事件應變，模擬網路攻擊或資料外洩等危機情境，確保在事件發生初期能迅速、協調地做出反應。主動將風險管理嵌入營運，才是AI時代的競爭優勢。",
    tags: ["AI治理", "風險管理", "C-Suite", "合規性", "事件應變", "AI法規"],
    title_en: "Enterprises Must Proactively Establish AI Governance Frameworks: Focusing on Risk Visibility and Incident Response Rather Than Waiting for Clear Regulations",
    summary_en: "This article points out that AI governance has evolved from a legal department function to a strategic issue requiring the attention of the CEO level. Many companies mistakenly believe they can wait until AI laws are finalized before addressing governance issues, but this is short-sighted. According to a Grant Thornton report, 46% of organizations identify AI governance and compliance issues as the primary cause of poor AI performance. The author emphasizes that due to the rapid adoption of AI technology and the fragmented regulatory environment, companies cannot afford to wait passively. For instance, using general AI tools for sensitive legal consultations may result in the loss of legal privilege, causing significant risk. Therefore, enterprises should establish an adaptive governance framework focusing on three key areas: First, enhancing risk visibility by understanding data flows, the data processed by AI systems, and the various regulations applicable to AI use; second, building a flexible governance framework that utilizes AI-assisted monitoring tools to track regulatory and threat changes across jurisdictions; and third, regularly practicing incident response by simulating crisis scenarios such as cyberattacks or data leaks, ensuring a rapid and coordinated response in the initial stages of an event. Proactively embedding risk management into operations is the competitive advantage in the AI era.",
    tags_en: ["AI Governance", "Risk Management", "C-Suite", "Compliance", "Incident Response", "AI Regulations"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/the-ai-governance-gap-is-a-leadership-problem-waiting-wont-close-it", lang: "EN" }
    ]
  },
  {
    id: "20260811-100",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Corma 募資 6,000 萬美元，開發專用 AI 基礎模型強化防禦性資安",
    summary: "Corma 這家總部位於特拉維夫和舊金山的資安新創公司，宣布成功募得 6,000 萬美元種子資金，投資方包括 Sequoia Capital、Khosla Ventures 和 Coatue。Corma 的核心產品是一個專為防禦性資安操作設計的 AI 基礎模型。該系統能夠處理大量的資安遙測數據，例如系統事件、稽核日誌和網路流量。透過分析這些資訊，該技術能夠在長時間跨度內連結微小的異常指標，從而進行複雜的威脅評估。其架構驅動的自動化代理（agents）可直接整合到企業現有的資安基礎設施中，與人工人員協作，持續學習環境並偵測、中和多階段入侵等威脅。公司指出，現有的通用 AI 模型（如 OpenAI 和 Anthropic 的模型）雖然能執行端到端攻擊，但在防禦方面卻表現不足，因此強調需要一個從零開始建構的、專門用於資安的 AI 防禦工作力，以匹配攻擊者的速度和複雜度。",
    tags: ["Corma", "AI 基礎模型", "防禦性資安", "AI 攻擊", "資安遙測", "自動化代理"],
    title_en: "Corma Raises $60 Million to Develop Specialized AI Foundation Model for Defensive Cybersecurity",
    summary_en: "Corma, a cybersecurity startup headquartered in Tel Aviv and San Francisco, announced that it successfully raised $60 million in seed funding. Investors include Sequoia Capital, Khosla Ventures, and Coatue. Corma's core product is an AI foundation model designed specifically for defensive cybersecurity operations. The system processes massive amounts of cybersecurity telemetry data, such as system events, audit logs, and network traffic. By analyzing this information, the technology can connect subtle anomaly indicators over extended periods to perform complex threat assessments. Its architecture-driven automated agents can be directly integrated into enterprises' existing security infrastructure, collaborating with human personnel to continuously learn the environment and detect and neutralize multi-stage intrusions. The company noted that existing general-purpose AI models (such as those from OpenAI and Anthropic) are effective for executing end-to-end attacks but are insufficient for defense, emphasizing the need for a purpose-built, specialized AI defense workforce built from the ground up to match the speed and complexity of attackers.",
    tags_en: ["Corma", "AI Foundation Model", "Defensive Cybersecurity", "AI Attack", "Cybersecurity Telemetry", "Automated Agents"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/corma-raises-60-million-for-defensive-cybersecurity-ai-model", lang: "EN" }
    ]
  },
  {
    id: "20260811-101",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI發布GPT-5.6-Cyber：AI模型強化漏洞研究與滲透測試能力",
    summary: "OpenAI於近期發布了專注於網路安全領域的新型AI模型GPT-5.6-Cyber。該模型基於GPT-5.6 Sol，專門訓練用於漏洞研究、滲透測試和事件響應等專業網路安全任務，旨在提高發現零日漏洞和開發攻擊鏈的能力，並降低對高風險、雙用途網路任務的拒絕率。GPT-5.6-Cyber透過新的Daybreak Red層級提供給授權企業進行漏洞研究和安全測試。測試顯示，該模型在開發攻擊鏈、權限提升等進階場景的完成率達95.0%，顯著優於GPT-5.6 Sol和GPT-5.5-Cyber。模型成功發現了CVE-2026-15903（CVSS 8.8），這是一個V8 JavaScript引擎的越界讀寫漏洞，可導致任意程式碼執行。此外，它還標記了多個作業系統、資料庫和行動作業系統的重大漏洞。OpenAI已將此模型提供給包括Accenture、Cisco、Cloudflare等信任的合作夥伴，以協助企業在攻擊者利用漏洞前進行修補，應對AI加速的網路攻擊浪潮。",
    tags: ["OpenAI", "GPT-5.6-Cyber", "漏洞與威脅情報", "滲透測試", "CVE-2026-15903", "AI"],
    title_en: "OpenAI Releases GPT-5.6-Cyber: AI Model Enhances Vulnerability Research and Penetration Testing Capabilities",
    summary_en: "OpenAI recently unveiled GPT-5.6-Cyber, a new AI model specialized for the cybersecurity domain. Based on GPT-5.6 Sol, this model is specifically trained for professional cybersecurity tasks such as vulnerability research, penetration testing, and incident response. It aims to improve the ability to discover zero-day vulnerabilities and develop attack chains, while also reducing the refusal rate for high-risk, dual-use network tasks. GPT-5.6-Cyber is provided through a new Daybreak Red tier for authorized enterprises conducting vulnerability research and security testing. Testing showed that the model achieved a 95.0% completion rate in advanced scenarios like developing attack chains and privilege escalation, significantly outperforming GPT-5.6 Sol and GPT-5.5-Cyber. Furthermore, the model successfully discovered CVE-2026-15903 (CVSS 8.8), an out-of-bounds read/write vulnerability in a V8 JavaScript engine that could lead to arbitrary code execution. It also flagged multiple critical vulnerabilities across various operating systems, databases, and mobile operating systems. OpenAI has made this model available to trusted partners, including Accenture, Cisco, and Cloudflare, to help enterprises patch vulnerabilities before attackers can exploit them, addressing the wave of AI-accelerated cyber attacks.",
    tags_en: ["OpenAI", "GPT-5.6-Cyber", "Vulnerability and Threat Intelligence", "Penetration Testing", "CVE-2026-15903", "AI"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/openai-launches-gpt-56-cyber-with.html", lang: "EN" }
    ]
  },
  {
    id: "20260811-102",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Canonical 將 NVIDIA Nemotron 3.5 Lightning 整合至 Ubuntu，推動常駐 AI 代理應用",
    summary: "Canonical 宣布，NVIDIA 新推出的 Nemotron 3.5 Lightning 模型，一個專為常駐 AI 代理設計的開源可客製化模型，現已透過單一指令在 Ubuntu 上部署。Nemotron 3.5 Lightning 是一個 30B 的混合專家模型（MoE），具備 3B 的活躍參數，專為高吞吐量的代理工作負載設計。透過使用 inference snaps 部署，企業可以輕鬆地在工作站、邊緣設備和伺服器等各環境部署模型，實現標準化和一致的運行時。此模型最大的優勢之一是其 100 萬 token 的上下文視窗，這使得 AI 代理能夠在長期的、多步驟的工作流程中維持上下文記憶。此外，使用 snaps 部署還能提供嚴格的隔離執行、簡化維護和修補流程，大幅縮短企業的整合時間，使開發團隊能專注於構建 AI 應用，而非基礎設施管理。",
    tags: ["Canonical", "NVIDIA", "Nemotron 3.5 Lightning", "Ubuntu", "AI 代理", "MoE", "inference snaps"],
    title_en: "Canonical integrates NVIDIA Nemotron 3.5 Lightning into Ubuntu, promoting persistent AI agent applications",
    summary_en: "Canonical announced that the newly released Nemotron 3.5 Lightning model from NVIDIA, an open-source, customizable model designed for persistent AI agents, can now be deployed on Ubuntu with a single command. Nemotron 3.5 Lightning is a 30B Mixture-of-Experts (MoE) model with 3B active parameters, designed for high-throughput agent workloads. By utilizing inference snaps for deployment, enterprises can easily deploy the model across various environments, including workstations, edge devices, and servers, ensuring standardized and consistent runtime. One of the model's key advantages is its 1 million token context window, which allows AI agents to maintain context memory over long, multi-step workflows. Furthermore, using snaps for deployment provides strict execution isolation and simplifies maintenance and patching processes, significantly reducing enterprise integration time and allowing development teams to focus on building AI applications rather than infrastructure management.",
    tags_en: ["Canonical", "NVIDIA", "Nemotron 3.5 Lightning", "Ubuntu", "AI Agent", "MoE", "inference snaps"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/nvidia-nemotron-3-5-lightning", lang: "EN" }
    ]
  },
  {
    id: "20260811-103",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Gemini App 達成每月用戶超十億大關，顯示 AI 產品的快速增長趨勢",
    summary: "Google 宣布其 Gemini 應用程式已達到每月超過 10 億用戶的里程碑，這被 CEO Sundar Pichai 譽為公司「增長最快的產品」。Gemini 是 Google 第 14 個達到此里程碑的產品，其他包括 Search、Gmail、Android、Maps、Chrome、Play 和 YouTube。用戶數據顯示，該應用程式的增長速度極快，從 2025 年 5 月的 4 億月活躍用戶，到一年後的 9 億，並在七月下旬達到 10 億。在用戶結構上，超過十分之一的用戶使用 iOS 平台，而 macOS 應用程式的重度用戶使用頻率比其他平台高出約兩倍。功能方面，Gemini 正在推出超過 60 種新的地區方言，並支援「Gemini Live」，讓五分之一的互動可以利用即時相機和螢幕分享。此外，Gemini 每日負責生成超過 1.5 億張圖片，並在 Android 方面強調了跨 40 個應用程式的任務自動化功能，顯示 Google 在 AI 整合和跨平台生態系統上的重大佈局。",
    tags: ["Google", "Gemini", "AI", "跨平台", "Android", "iOS", "Sundar Pichai"],
    title_en: "Google Gemini App Reaches 1 Billion Monthly Users, Highlighting Rapid Growth Trend for AI Products",
    summary_en: "Google announced that its Gemini application has reached the milestone of over 1 billion monthly users, a feat CEO Sundar Pichai hailed as the company's \"fastest-growing product.\" Gemini is the 14th Google product to achieve this milestone, joining others such as Search, Gmail, Android, Maps, Chrome, Play, and YouTube. User data shows that the application's growth rate is extremely fast, increasing from 400 million monthly active users in May 2025 to 900 million a year later, and reaching 1 billion by late July. In terms of user demographics, over one-tenth of users utilize the iOS platform, while heavy users of the macOS application show a usage frequency approximately twice that of other platforms. Functionally, Gemini is rolling out over 60 new regional dialects and supports \"Gemini Live,\" allowing one-fifth of interactions to utilize real-time camera and screen sharing. Furthermore, Gemini is responsible for generating over 150 million images daily, and on the Android front, it emphasizes task automation across 40 applications, demonstrating Google's major commitment to AI integration and cross-platform ecosystem development.",
    tags_en: ["Google", "Gemini", "AI", "Cross-Platform", "Android", "iOS", "Sundar Pichai"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/11/gemini-app-1-billion", lang: "EN" }
    ]
  },
  {
    id: "20260811-104",
    trackers: ["os"],
    category: "重點關注",
    title: "Beeper 更新功能：整合多應用程式聊天記錄，實現單一對話視圖",
    summary: "Beeper 宣布推出重大更新，旨在解決用戶在多個不同通訊應用程式（如 Slack、WhatsApp 等）中與同一人對話時，聊天記錄分散的問題。新功能允許用戶將與同一人的多個應用程式聊天記錄合併成單一的對話視圖，讓用戶無需思考底層使用的應用程式，即可進行連續的對話。此外，Beeper 在 Android 平台也增加了客製化背景、訊息分類標籤、支援投票等功能。對於免費用戶，部分原本需要付費的進階功能，如「無痕模式」（Incognito Mode）、「延遲發送」（Send Later）、「語音備忘錄轉文字」和「聊天提醒」等，現在可有限時體驗。iPhone 應用程式也新增了 CarPlay 整合。此更新旨在提升用戶體驗，將多個通訊孤島整合到一個介面。",
    tags: ["Beeper", "多應用程式整合", "聊天記錄合併", "Android", "iOS", "通訊軟體"],
    title_en: "Beeper Update Feature: Integrating Multi-App Chat History for a Unified Conversation View",
    summary_en: "Beeper announced a major update aimed at solving the problem of fragmented chat history when users communicate with the same person across multiple different messaging applications (such as Slack, WhatsApp, etc.). The new feature allows users to merge multiple chat histories with the same person from various applications into a single, unified conversation view, enabling continuous dialogue without the user needing to consider the underlying application used. Furthermore, Beeper has added features to the Android platform, including customizable backgrounds, message categorization labels, and support for polls. For free users, several advanced features that previously required a paid subscription, such as \"Incognito Mode,\" \"Send Later,\" \"Voice Memo to Text,\" and \"Chat Reminders,\" are now available for limited-time trial. The iPhone application has also added CarPlay integration. This update aims to enhance the user experience by consolidating multiple communication silos into one interface.",
    tags_en: ["Beeper", "Multi-App Integration", "Chat History Merging", "Android", "iOS", "Messaging Apps"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/11/beeper-merge-chats-update", lang: "EN" }
    ]
  },
  {
    id: "20260811-105",
    trackers: ["os"],
    category: "重點關注",
    title: "Samsung Galaxy Z Fold 8 耐用性測試與拆解分析：展示鈦金屬強化與鉸鏈結構",
    summary: "本文根據 YouTuber JerryRigEverything 的耐用性測試和拆解影片，分析了 Samsung Galaxy Z Fold 8 的結構與耐用性。測試顯示，儘管外螢幕仍像一般玻璃手機一樣容易刮傷，但內螢幕的保護層和機身結構表現出高度的韌性。拆解過程揭示了 Samsung 使用鈦金屬（titanium）來加固和平坦化內顯示器，但折疊顯示器組件的塑膠層仍是結構上的弱點。最引人注目的是，即使在施加超出實際使用情境的巨大壓力下，Galaxy Z Fold 8 的鉸鏈和機身框架依然保持完整。此外，文章也觀察到 Qi 充電環的設計位置較低，對於使用磁吸配件（如錢包或電池包）的用戶來說，可能不是最理想的。從電池角度看，雖然 Samsung 採用了碳矽技術（silicon-carbon tech），但電池本身仍僅標示為鋰離子（lithium-ion）。",
    tags: ["Samsung", "Galaxy Z Fold 8", "折疊手機", "耐用性測試", "鈦金屬", "Qi 充電"],
    title_en: "Samsung Galaxy Z Fold 8 Durability Test and Teardown Analysis: Showcasing Titanium Reinforcement and Hinge Structure",
    summary_en: "Based on YouTuber JerryRigEverything's durability test and teardown videos, this article analyzes the structure and durability of the Samsung Galaxy Z Fold 8. The tests show that while the outer screen remains susceptible to scratching like typical glass phones, the inner screen's protective layer and the overall body structure exhibit high resilience. The teardown process revealed that Samsung used titanium to reinforce and flatten the inner display, but the plastic layer of the foldable display component remains a structural weak point. Most notably, even under immense pressure exceeding typical usage scenarios, the Galaxy Z Fold 8's hinge and body frame remained intact. Furthermore, the article observed that the placement of the Qi charging ring is relatively low, which may not be ideal for users who utilize magnetic accessories (such as wallets or battery packs). Regarding the battery, although Samsung adopted silicon-carbon technology, the battery itself is still only labeled as lithium-ion.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Foldable Phone", "Durability Test", "Titanium", "Qi Charging"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/11/galaxy-z-fold-8-bend-test-teardown", lang: "EN" }
    ]
  },
  {
    id: "20260811-106",
    trackers: ["os"],
    category: "重點關注",
    title: "Sensor Tower報告：2026年第二季全球行動應用支出增長由非遊戲類主導，AI應用帶動生成式AI領漲",
    summary: "根據Sensor Tower發布的2026年第二季數位市場指數報告，全球行動應用支出增長主要由非遊戲類應用程式帶動，而遊戲相關收入則年減4.5%。報告指出，非遊戲類收入年增14.6%，總收入達到244億美元，下載量為255億次。其中，生成式AI應用是最大的增長動力，消費者支出年增108%。市場領導者ChatGPT佔據了該類別約60%的收入份額，年增82%。雖然美國的應用內購買（IAP）收入年減3%，但仍以148億美元領先全球。在下載量方面，印度仍位居第一。值得注意的是，雖然約會與社交類別是唯一全球收入下降的類別，但拉丁美洲市場（如墨西哥、巴西、阿根廷）展現了強勁的增長動能。",
    tags: ["Sensor Tower", "生成式AI", "行動應用", "ChatGPT", "Q2 2026", "市場分析"],
    title_en: "Sensor Tower Report: Non-Game Apps Drive Global Mobile App Spending Growth in Q2 2026, with Generative AI Leading Gains",
    summary_en: "According to the Digital Market Index report for Q2 2026 released by Sensor Tower, global mobile app spending growth was primarily driven by non-game applications, while gaming-related revenue saw an annual decrease of 4.5%. The report indicates that non-game revenue increased by 14.6% year-over-year, reaching $24.4 billion, with 25.5 billion downloads. Among these, generative AI applications were the biggest growth driver, with consumer spending rising by 108%. Market leader ChatGPT accounted for approximately 60% of this category's revenue, showing an annual increase of 82%. Although in-app purchase (IAP) revenue in the US declined by 3% year-over-year, it still led globally with $14.8 billion. In terms of downloads, India remained in first place. Notably, while the dating and social category was the only global revenue-declining category, the Latin American market (including Mexico, Brazil, and Argentina) demonstrated strong growth momentum.",
    tags_en: ["Sensor Tower", "Generative AI", "Mobile Apps", "ChatGPT", "Q2 2026", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/report-non-gaming-apps-drove-mobile-spending-growth-in-q2-as-games-fell-4-5", lang: "EN" }
    ]
  },
  {
    id: "20260811-107",
    trackers: ["os"],
    category: "重點關注",
    title: "法院駁回蘋果延期App Store費用審判請求，Epic Games訴訟將加速進行",
    summary: "在Epic Games與Apple的持續訴訟中，法院已決定駁回Apple要求暫停App Store費用審判程序的請求。此前，Apple曾因在法院下令允許開發者使用替代支付方式後，仍對外部購買收取27%的佣金而被裁定藐視法庭。Apple已將此藐視法庭的裁決上訴至最高法院，並以此為由向地方法院請求暫停審判，主張最高法院的判決可能影響當前審理工作。Epic Games方面則反駁，主張無論最高法院的審查結果如何，審判程序都應繼續進行。法院的決定迫使Apple在24小時內提交其提議的App Store費用、相關計算方式及支持證據，以決定其是否能對App Store以外的購買進行抽成。此案涉及應用程式商店的交易佣金爭議，對整個應用生態系統的商業模式具有重大影響。",
    tags: ["Apple", "Epic Games", "App Store", "法律訴訟", "交易佣金", "法律程序"],
    title_en: "Court Rejects Apple's Request to Delay App Store Fee Trial, Accelerating Epic Games Lawsuit",
    summary_en: "In the ongoing litigation between Epic Games and Apple, the court has ruled to reject Apple's request to suspend the App Store fee trial proceedings. Previously, Apple was found in contempt of court for continuing to charge a 27% commission on external purchases, even after the court ordered developers to be allowed alternative payment methods. Apple has appealed this contempt ruling to the Supreme Court and used this as grounds to request a stay of the trial from the lower court, arguing that the Supreme Court's decision could affect the current proceedings. Epic Games, however, countered that the trial must proceed regardless of the Supreme Court's review outcome. The court's decision now compels Apple to submit its proposed App Store fees, relevant calculation methods, and supporting evidence within 24 hours, to determine if it can charge a commission on purchases made outside the App Store. This case involves the dispute over application store transaction commissions and has significant implications for the commercial model of the entire application ecosystem.",
    tags_en: ["Apple", "Epic Games", "App Store", "Lawsuit", "Transaction Commission", "Legal Procedure"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/court-rejects-apples-attempt-to-postpone-app-store-fee-proceedings-in-epic-games-case", lang: "EN" }
    ]
  },
  {
    id: "20260811-108",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 傳考慮爭取美國「英國公開賽」串流權，與 Netflix、Amazon 等巨頭競爭",
    summary: "根據《The Guardian》的報導，Apple 正在與 R&A（皇家撲權會）進行初步討論，考慮爭取美國「英國公開賽」（The Open Championship）的串流媒體權。這項賽事是歷史最悠久的男子高爾夫大賽之一，目前權利主要由 NBC 和 Versant 透過協議持有。報導指出，Apple 仍致力於投資體育權利，並持續尋找新的內容資產。除了高爾夫賽事外，Apple 近年來已宣布了與 Formula 1 的獨家廣播合作，並串流傳送棒球和 MLS 賽事。其他媒體巨頭如 Netflix 和 Amazon 也被預期會對此權利感興趣，顯示體育內容串流權正在成為科技公司重要的戰略佈局。",
    tags: ["Apple", "R&A", "The Open Championship", "串流媒體", "體育權利", "Netflix", "Amazon"],
    title_en: "Apple reportedly considering bidding for US 'The Open Championship' streaming rights, competing with giants like Netflix and Amazon",
    summary_en: "According to a report by The Guardian, Apple is in preliminary discussions with R&A (The Royal and Ancient Golf Club of St Andrews) regarding the acquisition of streaming rights for the US 'The Open Championship.' This tournament is one of the most historic men's golf majors, with rights currently held primarily by NBC and Versant through agreements. The report notes that Apple remains committed to investing in sports rights and continues to seek new content assets. Beyond golf, Apple has recently announced exclusive broadcast partnerships with Formula 1 and streams baseball and MLS games. Other media giants such as Netflix and Amazon are also expected to be interested in these rights, indicating that sports streaming rights are becoming a critical strategic focus for technology companies.",
    tags_en: ["Apple", "R&A", "The Open Championship", "Streaming Media", "Sports Rights", "Netflix", "Amazon"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-streaming-rights-golf-open", lang: "EN" }
    ]
  },
  {
    id: "20260811-109",
    trackers: ["os"],
    category: "重點關注",
    title: "無文章內容，無法撰寫資安新聞標題與摘要",
    summary: "原文內容為 9to5Mac Daily 的播客介紹，未提供任何資安事件、漏洞或產品更新資訊，因此無法撰寫新聞摘要。",
    tags: ["9to5Mac", "播客", "無資安資訊"],
    title_en: "No Content Available for Cybersecurity News Title and Summary",
    summary_en: "The original content is a podcast introduction from 9to5Mac Daily and does not provide any cybersecurity incident, vulnerability, or product update information, therefore a news summary cannot be written.",
    tags_en: ["9to5Mac", "Podcast", "No Cybersecurity Information"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/daily-august-11-2026-ios-27", lang: "EN" }
    ]
  },
  {
    id: "20260811-110",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Pay與Wallet負責人Jennifer Bailey宣布退休，結束兩十年蘋果職涯",
    summary: "根據Bloomberg的報導，負責Apple Pay和Wallet業務的Apple高階主管Jennifer Bailey宣布將於十月退休。Jennifer Bailey自2014年擔任Apple Pay的副總，並自2000年代初期加入Apple公司。這則消息主要屬於公司人事變動，而非資安事件。文章內容僅提及其職位變動，未提供任何關於安全漏洞、技術細節、攻擊向量或修補建議的資訊。因此，本摘要無法提供實務資安建議。",
    tags: ["Apple", "Apple Pay", "Wallet", "Jennifer Bailey", "公司人事"],
    title_en: "Apple Pay and Wallet Head Jennifer Bailey Announces Retirement, Ending Two Decades at Apple",
    summary_en: "According to a Bloomberg report, Apple senior executive Jennifer Bailey, who oversees Apple Pay and Wallet, announced her retirement in October. Jennifer Bailey served as the Vice President of Apple Pay starting in 2014 and joined Apple in the early 2000s. This news primarily concerns corporate personnel changes rather than a cybersecurity incident. The article only mentions her role change and does not provide any information regarding security vulnerabilities, technical details, attack vectors, or remediation advice. Therefore, this summary cannot provide practical cybersecurity advice.",
    tags_en: ["Apple", "Apple Pay", "Wallet", "Jennifer Bailey", "Corporate Personnel"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/apple-pay-and-wallet-leader-retiring-after-two-decades-at-apple", lang: "EN" }
    ]
  },
  {
    id: "20260811-111",
    trackers: ["os"],
    category: "重點關注",
    title: "SpaceXAI 與 Cursor 聯手推出 Grok Bot，打造跨平台 AI 助理應用程式",
    summary: "SpaceXAI 與 Cursor 宣布合作，共同發布一款名為 Grok Bot 的全新 AI 代理（AI agent）應用程式。Grok Bot 定義為「可委派實際工作的 AI 隊友」，旨在協助使用者完成跨應用程式和工具的端到端任務。該 Bot 能夠登入使用者現有的應用程式和服務，如同「同事」般處理訊息，並具備記憶對話內容、學習使用者偏好，從而持續提升工作效率。Grok Bot 目前已在 Mac 和 iOS 平台推出 Beta 版本，同時也提供 Windows 和 Linux 桌面版本，Android 版本預計將陸續推出。初期使用權限限制於 SuperGrok Heavy、Cursor Ultra 和 Cursor Teams Premium 的訂閱用戶。此應用程式的推出，顯示了 AI 助理正在朝向更深入、更具工作流程整合性的方向發展。",
    tags: ["SpaceXAI", "Cursor", "Grok Bot", "AI Agent", "跨平台", "應用程式"],
    title_en: "SpaceXAI and Cursor Partner to Launch Grok Bot, Creating a Cross-Platform AI Assistant Application",
    summary_en: "SpaceXAI and Cursor announced a collaboration to jointly release a new AI agent application called Grok Bot. Grok Bot is defined as an \"AI teammate capable of performing actual work,\" designed to assist users with end-to-end tasks across multiple applications and tools. The Bot can log into the user's existing applications and services, handling messages like a \"colleague,\" and possesses the ability to remember conversation context and learn user preferences, thereby continuously improving work efficiency. Grok Bot is currently available in Beta on Mac and iOS platforms, and also offers desktop versions for Windows and Linux, with the Android version scheduled for phased rollout. Initial access is restricted to subscribers of SuperGrok Heavy, Cursor Ultra, and Cursor Teams Premium. The launch of this application demonstrates that AI assistants are moving toward deeper, more workflow-integrated functionalities.",
    tags_en: ["SpaceXAI", "Cursor", "Grok Bot", "AI Agent", "Cross-Platform", "Application"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/grok-bot-is-an-all-new-iphone-and-mac-app-from-spacexai-and-cursor", lang: "EN" }
    ]
  },
  {
    id: "20260811-112",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Zoom 平台漏洞遭 AI 工具輔助發現，可能遠端接管支援多系統設備",
    summary: "研究人員發現 Zoom 視訊會議平台存在漏洞，可被攻擊者利用遠端執行程式碼，接管參與會議的設備。受影響範圍涵蓋 Zoom 支援的所有作業系統，包括 Windows、macOS、Linux、iOS 和 Android。攻擊方式特別針對進行螢幕分享的會議參與者或主機，可進行無聲且無需受害者互動的攻擊。資安公司 A Security 已向 Zoom 公佈此漏洞，並已完成修補。值得注意的是，該漏洞的發現過程展示了 AI 工具的巨大潛力，研究人員僅使用公開 AI 模型，透過不到 20 個提示（prompts）便成功找出漏洞並建立可運作的攻擊。這顯示了未來資安威脅的發現門檻正在大幅降低，使得原本需要專業團隊耗時數月才能發現的缺陷，現在可以透過 AI 輔助快速定位。",
    tags: ["Zoom", "AI 工具", "遠端執行程式碼", "多系統漏洞", "資安威脅"],
    title_en: "Zoom Platform Vulnerability Discovered with AI Tool Assistance, Potentially Allowing Remote Takeover of Multi-System Devices",
    summary_en: "Researchers have discovered a vulnerability in the Zoom video conferencing platform that could allow attackers to execute remote code, thereby taking control of devices participating in the meeting. The affected scope covers all operating systems supported by Zoom, including Windows, macOS, Linux, iOS, and Android. The attack method specifically targets meeting participants or hosts who are screen sharing, allowing for silent and non-interactive attacks. A Security has disclosed this vulnerability to Zoom, and a patch has been implemented. Notably, the discovery process highlights the immense potential of AI tools; researchers successfully found the vulnerability and built a working exploit using only public AI models and fewer than 20 prompts. This demonstrates that the barrier for discovering future security threats is significantly lowering, allowing flaws that previously required professional teams months to find to now be rapidly located with AI assistance.",
    tags_en: ["Zoom", "AI Tools", "Remote Code Execution", "Multi-System Vulnerability", "Cybersecurity Threat"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/zoom-flaw-let-an-attacker-take-over-your-device-including-iphone-and-mac", lang: "EN" }
    ]
  },
  {
    id: "20260811-113",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 尋求中國記憶體晶片面臨更多阻力，政治與供應鏈雙重壓力加劇",
    summary: "本文討論了 Apple 過去曾考慮從中國兩家公司 CXMT 和 YMTC 採購記憶體晶片以應對記憶體短缺的方案。雖然從技術上講，這並非立即違法，但此舉面臨巨大的政治與商業阻力。先前，Apple 曾尋求美國政府的許可，但由於國防部（Pentagon）的黑名單，使用這些晶片可能會導致 iPhone 在部分或全部聯邦員工中被禁用，並可能使 Apple 面臨高昂的政治或公關風險。最新報告指出，不僅美國國會代表已向商務部發函，要求將 CXMT 列入實體清單，限制美國公司採購；此外，據《華爾街日報》報導，即使政策允許，CXMT 本年度的產能也已達到上限，難以承接新的國際訂單。這些發展使得 Apple 依賴中國供應鏈的方案變得極為困難。",
    tags: ["Apple", "CXMT", "YMTC", "記憶體晶片", "供應鏈", "美國政策"],
    title_en: "Apple Faces Growing Resistance in China Memory Chip Sourcing, Facing Dual Political and Supply Chain Pressures",
    summary_en: "This article discusses Apple's past consideration of sourcing memory chips from two Chinese companies, CXMT and YMTC, to address memory shortages. While not immediately illegal from a technical standpoint, this move faces significant political and commercial resistance. Previously, Apple sought permission from the U.S. government, but due to the Pentagon's blacklist, using these chips could result in iPhones being disabled for some or all federal employees, potentially exposing Apple to high political or PR risks. A recent report indicates that not only have U.S. Congressional representatives written to the Department of Commerce demanding that CXMT be placed on an Entity List to restrict procurement by U.S. companies, but according to the Wall Street Journal, even if policy allowed it, CXMT's capacity for the current year has reached its limit, making it difficult to accommodate new international orders. These developments make Apple's reliance on the Chinese supply chain increasingly challenging.",
    tags_en: ["Apple", "CXMT", "YMTC", "Memory Chips", "Supply Chain", "U.S. Policy"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/11/china-now-even-less-likely-to-solve-apples-memory-crunch", lang: "EN" }
    ]
  },
  {
    id: "20260811-114",
    trackers: ["os"],
    category: "重點關注",
    title: "Chrome 導入 Device-Bound Session Credentials (DBSCs) 強化防護，有效抵禦會話 Cookie 竊取導致的帳號接管",
    summary: "Google Chrome 瀏覽器新增了一項名為 Device-Bound Session Credentials (DBSCs) 的保護功能。此機制旨在防止透過竊取會話 Cookie (session cookies) 進行的帳號接管攻擊。會話 Cookie 用於加速用戶在需要驗證的網站上的瀏覽體驗，讓伺服器能證明用戶已成功登入。隨著 Two-Factor Authentication (2FA) 和 Passkeys 等更強的保護措施普及，傳統的釣魚和帳號接管方式已不再有效，攻擊者轉而依賴竊取會話 Cookie 的資訊竊取惡意軟體 (infostealer malware) 或中間人攻擊 (adversary-in-the-middle attacks)。DBSCs 的運作方式是將一個獨特的加密金鑰儲存在運行瀏覽器的設備硬體安全區域內。在 Windows 設備上，此區域為 TPM (Trusted Platform Module)；在 macOS 和 iOS 上，則為 Secure Enclave。新版 Chrome for Windows 和 macOS 透過此機制生成並儲存金鑰，從硬體層面保護會話憑證，大幅提升帳號安全性。",
    tags: ["Google Chrome", "DBSCs", "會話 Cookie", "TPM", "Secure Enclave", "帳號接管"],
    title_en: "Chrome Introduces Device-Bound Session Credentials (DBSCs) to Enhance Protection Against Session Cookie Theft and Account Takeover",
    summary_en: "Google Chrome browser has introduced a new protective feature called Device-Bound Session Credentials (DBSCs). This mechanism is designed to prevent account takeover attacks that rely on stolen session cookies. Session cookies are used to accelerate the user browsing experience on websites requiring authentication, allowing the server to confirm the user's successful login. As stronger protective measures like Two-Factor Authentication (2FA) and Passkeys become more prevalent, traditional phishing and account takeover methods are becoming less effective. Consequently, attackers are shifting to stealing session cookies using infostealer malware or executing adversary-in-the-middle attacks. DBSCs works by storing a unique cryptographic key within the hardware security area of the device running the browser. On Windows devices, this area is the TPM (Trusted Platform Module); on macOS and iOS, it is the Secure Enclave. The new versions of Chrome for Windows and macOS utilize this mechanism to generate and store the key, protecting session credentials at the hardware level and significantly enhancing account security.",
    tags_en: ["Google Chrome", "DBSCs", "Session Cookie", "TPM", "Secure Enclave", "Account Takeover"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/chrome-adopts-what-may-be-the-best-protection-yet-against-account-takeovers", lang: "EN" }
    ]
  },
  {
    id: "20260811-115",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布 Gemini 達到 10 億月活躍用戶，成為 Google 產品中成長最快的 AI 應用",
    summary: "Google 執行長 Sundar Pichai 公佈重大里程碑，指出其 AI 聊天機器人 Gemini 已達到 10 億月活躍用戶（MAUs）。雖然 Google 旗下已有其他 13 個產品達到此數字，但 Gemini 實現此目標的速度最快。此 10 億用戶數據專指直接使用 Gemini 應用程式或網頁介面輸入提示（prompt）或使用 Gemini Live 的用戶。Gemini 已深度整合至 Gmail、Drive 等多個 Google 服務，並成為 Google 搜尋體驗的核心部分。此外，Google 觀察到用戶使用模式的變化，例如 63% 的活躍用戶使用語音輸入，且越來越多是「純語音」用戶。在圖像生成方面，Google 估計這些用戶每天產生高達 1.5 億張圖像，所有內容均會使用 SynthID 進行浮水印標記。Google 也正開發新的學習工具，以更好地支持學生群體的學習需求。",
    tags: ["Google", "Gemini", "AI", "月活躍用戶", "Sundar Pichai", "SynthID"],
    title_en: "Google Announces Gemini Reaches 1 Billion Monthly Active Users, Becoming Fastest-Growing AI Application in Google's Portfolio",
    summary_en: "Google CEO Sundar Pichai announced a major milestone, stating that its AI chatbot Gemini has reached 1 billion Monthly Active Users (MAUs). While 13 other Google products have also reached this figure, Gemini achieved it at the fastest rate. This 1 billion user figure specifically refers to users who directly input prompts or use Gemini Live via the Gemini application or web interface. Gemini is deeply integrated into multiple Google services, such as Gmail and Drive, and has become a core part of the Google Search experience. Furthermore, Google has observed shifts in user behavior, such as 63% of active users utilizing voice input, with an increasing number being 'pure voice' users. In image generation, Google estimates that these users generate up to 150 million images daily, all of which are watermarked using SynthID. Google is also developing new learning tools to better support the educational needs of students.",
    tags_en: ["Google", "Gemini", "AI", "Monthly Active Users", "Sundar Pichai", "SynthID"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/08/google-says-gemini-has-reached-1b-users-faster-than-any-other-google-product", lang: "EN" }
    ]
  },
  {
    id: "20260811-116",
    trackers: ["os"],
    category: "重點關注",
    title: "川普提名共和黨人加入FCC，可能使共和黨在聯邦通信委員會取得3:1多數",
    summary: "聯邦通信委員會（FCC）在川普第二任期內一直人手不足，但即將迎來一位新委員。川普打破了歷史常規，提名共和黨人 Danielle Thumann Severs 填補空缺，這將使共和黨在FCC獲得3:1的優勢。傳統上，總統和參議院會協調，確保總統所在黨派僅維持一票多數。目前，FCC在川普第二任期內一直以2:1的共和黨多數運作。Thumann Severs 需經由共和黨控制的參議院確認後才能上任。FCC在川普任期內曾被用於攻擊不給予川普有利報導的新聞廣播公司。增加第三位共和黨委員將為現任主席 Brendan Carr提供更多支持，推動其政策。然而，文章指出，如果共和黨試圖完全佔據委員會，可能會違反法律，因為法律禁止任何政黨擁有FCC的超級多數，否則FCC的決策將面臨被法院阻撓的風險。",
    tags: ["FCC", "聯邦通信委員會", "川普", "Brendan Carr", "Danielle Thumann Severs", "共和黨"],
    title_en: "Trump's Nomination of Republican to FCC Could Give GOP a 3:1 Majority",
    summary_en: "The Federal Communications Commission (FCC) has been understaffed during Trump's second term, but is about to gain a new commissioner. Trump has broken historical convention by nominating Republican Danielle Thumann Severs to fill the vacancy, which would give the Republican party a 3:1 advantage on the FCC. Traditionally, the President and Senate coordinate to ensure the President's party maintains only a single-vote majority. Currently, the FCC has been operating with a 2:1 Republican majority during Trump's term. Thumann Severs must be confirmed by the Republican-controlled Senate before taking office. The FCC has been used during Trump's tenure to attack news broadcasters that did not provide favorable coverage to Trump. Adding a third Republican commissioner will provide more support to the current Chair, Brendan Carr, in advancing his policies. However, the article notes that if the Republican party attempts to completely occupy the commission, it could violate the law, as the law prohibits any single party from holding a supermajority on the FCC, otherwise the FCC's decisions risk being blocked by the courts.",
    tags_en: ["FCC", "Federal Communications Commission", "Trump", "Brendan Carr", "Danielle Thumann Severs", "Republican Party"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/trump-to-give-republicans-a-3-1-fcc-majority-isnt-filling-empty-democratic-seat", lang: "EN" }
    ]
  },
  {
    id: "20260811-117",
    trackers: ["os"],
    category: "重點關注",
    title: "Leonardo 的 SignalTrace 系統：結合車牌讀取與電子訊號，強化人流追蹤監控技術",
    summary: "SignalTrace 是由安全公司 Leonardo 推出的系統，旨在與自動車牌讀取器結合，用於監測和追蹤移動的電子設備。該系統能夠識別經常一起移動的消費性設備群組（如手機、智能手錶）的電子訊號，並將這些訊號與車牌記錄和時間戳記的地理位置進行關聯。這使得調查人員即使不知道車牌號碼，也能根據設備訊號的模式，推斷出設備的持有者與特定車輛的關聯性。雖然 Leonardo 聲稱 SignalTrace「不識別個人」，僅收集藍牙或射頻等電子訊號，但其功能已能將個體的移動模式和設備關聯性，作為警方調查的重要線索。此技術的應用，預示著監控技術將更側重於個體的行為模式和關聯性追蹤，對個人隱私和數據治理提出了重大挑戰。",
    tags: ["Leonardo", "SignalTrace", "電子訊號", "監控技術", "數據治理", "隱私權"],
    title_en: "Leonardo's SignalTrace System: Combining License Plate Reading and Electronic Signals to Enhance Human Flow Tracking Surveillance Technology",
    summary_en: "SignalTrace is a system developed by the security company Leonardo, designed to integrate with automatic license plate readers to monitor and track moving electronic devices. The system can identify electronic signal groups of consumer devices (such as smartphones and smartwatches) that frequently move together, and correlate these signals with license plate records and geo-located timestamps. This allows investigators to infer the association between a device's owner and a specific vehicle, even without knowing the license plate number. Although Leonardo claims SignalTrace 'does not identify individuals' and only collects electronic signals like Bluetooth or radio frequency, its functionality can establish an individual's movement patterns and device associations, providing crucial leads for police investigations. The application of this technology suggests that surveillance will increasingly focus on tracking individual behavioral patterns and associations, posing significant challenges to personal privacy and data governance.",
    tags_en: ["Leonardo", "SignalTrace", "Electronic Signals", "Surveillance Technology", "Data Governance", "Privacy Rights"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/new-surveillance-tech-links-your-phone-to-your-license-plate", lang: "EN" }
    ]
  },
  {
    id: "20260811-118",
    trackers: ["os"],
    category: "重點關注",
    title: "研究揭露 Pass-ta-key 攻擊：分析 Passkey 儲存機制與安全性誤解",
    summary: "近期有研究人員提出一種名為 Pass-ta-key 的攻擊方式，旨在從運行惡意軟體的 Windows 機器上，竊取 Google Password Manager (GPM) 應用程式儲存的所有 Passkey。此攻擊引起了安全界和終端用戶的混淆，因為許多人誤以為 Passkey 必須儲存在受保護的硬體環境，如 Trusted Platform Manager (TPM) 中。然而，事實上，FIDO 2 規範並未強制要求 Passkey 必須儲存在 TPM 或任何專用的硬體模組中。大多數平台和第三方 Passkey 管理軟體並非將 Passkey 儲存在這些專用硬體中。只有 Microsoft 提供了在 Windows TPM 中儲存 Passkey 的選項，且主要建議此選項給企業用戶，而非一般消費者。因此，該攻擊的成功，揭示了 Passkey 儲存機制缺乏統一標準，而非 Passkey 本身存在根本性缺陷。",
    tags: ["Passkey", "FIDO 2", "Windows", "Google Password Manager", "TPM", "資安攻擊"],
    title_en: "Research Uncovers Pass-ta-key Attack: Analyzing Passkey Storage Mechanisms and Security Misconceptions",
    summary_en: "Recently, researchers introduced an attack method called Pass-ta-key, which aims to steal all Passkeys stored by the Google Password Manager (GPM) application from a Windows machine running malicious software. This attack has caused confusion in the security community and among end-users, as many mistakenly believe that Passkeys must be stored in a protected hardware environment, such as a Trusted Platform Manager (TPM). However, the FIDO 2 specification does not mandate that Passkeys must be stored in a TPM or any dedicated hardware module. Most platforms and third-party Passkey management software do not store Passkeys in these dedicated hardware modules. Only Microsoft offers the option to store Passkeys in a Windows TPM, and it primarily recommends this option for enterprise users, rather than general consumers. Therefore, the success of this attack reveals a lack of unified standard for Passkey storage mechanisms, rather than a fundamental flaw in Passkeys themselves.",
    tags_en: ["Passkey", "FIDO 2", "Windows", "Google Password Manager", "TPM", "Cybersecurity Attack"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/heres-why-the-new-pass-ta-key-attack-is-mostly-a-nothingburger", lang: "EN" }
    ]
  },
  {
    id: "20260811-119",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 將 ChatGPT 桌面應用程式帶入 Linux 平台，提供多種架構與發行版",
    summary: "OpenAI 今日宣布，其 ChatGPT 桌面應用程式已推出 Linux 版本，目前處於預覽階段。此應用程式支援 ChatGPT、ChatGPT Work 和 Codex 等功能整合。該 Linux 版本的應用程式已在 Ubuntu 24.04 LTS、Ubuntu 26.04 LTS、Debian 13 和 Fedora 43/44 等系統上進行了測試與驗證。使用者可從 OpenAI.com 下載，並提供 x64 和 ARM64 兩種架構的 RPM 與 Debian 套件。這項舉動顯示 OpenAI 正在擴大其 AI 產品的跨平台支援，讓更多 Linux 使用者能使用其桌面 AI 服務。",
    tags: ["OpenAI", "ChatGPT", "Linux", "跨平台", "桌面應用程式", "Ubuntu", "Debian"],
    title_en: "OpenAI brings ChatGPT desktop application to Linux platform, offering multiple architectures and distributions",
    summary_en: "OpenAI today announced that its ChatGPT desktop application has launched a Linux version, which is currently in preview. This application supports integrated functionalities such as ChatGPT, ChatGPT Work, and Codex. The Linux version has been tested and validated on systems including Ubuntu 24.04 LTS, Ubuntu 26.04 LTS, Debian 13, and Fedora 43/44. Users can download it from OpenAI.com, and it is available in both x64 and ARM64 architectures as RPM and Debian packages. This move demonstrates OpenAI's effort to expand cross-platform support for its AI products, making its desktop AI services accessible to more Linux users.",
    tags_en: ["OpenAI", "ChatGPT", "Linux", "Cross-Platform", "Desktop Application", "Ubuntu", "Debian"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ChatGPT-Desktop-Linux-Preview", lang: "EN" }
    ]
  },
  {
    id: "20260811-120",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Flatpak 1.19 與 1.18.1 發布，修補九項安全漏洞，包含沙盒逃逸與權限提升風險",
    summary: "應用程式沙盒與發行技術 Flatpak 發布了 1.19 版本及 1.18.1 穩定版。本次更新包含多項新發現的安全修補，Flatpak 1.19 提供了九個安全修復，而 1.18.1 則有十個。這些安全漏洞包括透過符號連結（symlink）攻擊可能導致的沙盒逃逸，該漏洞可能讓攻擊者獲得完整的主機檔案系統讀寫權限。此外，還修復了透過 revokefs 符號連結路徑遍歷所導致的本地 root 權限提升漏洞，以及多個任意 root 讀寫、32 位元系統可能的緩衝區溢出等安全問題。除了安全修復外，Flatpak 1.19 也增加了系統級降級功能，並改善了 Bash 補全等功能。建議使用者應升級至 1.18.1 或 1.19 版本，以修補這些嚴重的安全風險。",
    tags: ["Flatpak", "沙盒技術", "安全漏洞", "權限提升", "Linux"],
    title_en: "Flatpak 1.19 and 1.18.1 Released, Patching Nine Security Vulnerabilities Including Sandbox Escape and Privilege Escalation Risks",
    summary_en: "Flatpak, the application sandboxing and distribution technology, has released versions 1.19 and 1.18.1 stable. These updates include multiple newly discovered security patches. Flatpak 1.19 provides nine security fixes, while 1.18.1 includes ten. These vulnerabilities include sandbox escapes potentially caused by symlink attacks, which could allow an attacker to gain full read and write access to the host file system. Additionally, the updates patch a local root privilege escalation vulnerability caused by revokefs symlink path traversal, as well as several other security issues such as arbitrary root read/write and potential buffer overflows on 32-bit systems. Beyond the security fixes, Flatpak 1.19 also adds system-level downgrade functionality and improves features like Bash completion. Users are advised to upgrade to version 1.18.1 or 1.19 to mitigate these serious security risks.",
    tags_en: ["Flatpak", "Sandboxing", "Vulnerability", "Privilege Escalation", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Flatpak-1.19-Released", lang: "EN" }
    ]
  },
  {
    id: "20260811-121",
    trackers: ["os"],
    category: "重點關注",
    title: "Rusticl OpenCL 驅動支援 cl_ext_float_atomics，擴展浮點數原子操作能力",
    summary: "Mesa 26.3 版本透過 Rusticl OpenCL 驅動，新增了對 cl_ext_float_atomics 的支援。此擴充功能允許在記憶體中對浮點數執行原子操作，支援 FP16、FP32 和 FP64 數值，適用於全域或裝置本地記憶體。該功能對於需要精確同步浮點數計算的應用程式至關重要。雖然 LLVMpipe、Zink 和 Intel Iris 等驅動程式已具備基礎支援，但目前僅支援 FP32 的原子操作。開發者需留意，若要全面利用此功能，仍需等待對 FP16 和 FP64 的支援完善。預計 Mesa 26.3 穩定版將於今年 11 月發布。",
    tags: ["Mesa", "OpenCL", "Rusticl", "cl_ext_float_atomics", "FP32", "原子操作"],
    title_en: "Rusticl OpenCL Driver Supports cl_ext_float_atomics, Expanding Floating-Point Atomic Operation Capabilities",
    summary_en: "Mesa version 26.3 introduces support for cl_ext_float_atomics via the Rusticl OpenCL driver. This extension allows atomic operations on floating-point numbers in memory, supporting FP16, FP32, and FP64 values, applicable to both global and device local memory. This feature is crucial for applications requiring precise synchronization of floating-point calculations. While drivers such as LLVMpipe, Zink, and Intel Iris already provide basic support, current support is limited to FP32 atomic operations. Developers should note that full utilization of this feature requires awaiting comprehensive support for FP16 and FP64. Mesa 26.3 stable is expected to be released this November.",
    tags_en: ["Mesa", "OpenCL", "Rusticl", "cl_ext_float_atomics", "FP32", "Atomic Operations"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Rusticl-cl_ext_float_atomics", lang: "EN" }
    ]
  },
  {
    id: "20260811-122",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "物流巨頭 CEVA 遭駭客攻擊，客戶資料外洩影響 Valve、Ajax 等多家企業",
    summary: "法國總部的物流公司 CEVA，在 7 月 29 日至 8 月 1 日期間遭受網路攻擊。據悉，此次事件影響了其在歐洲的八個倉庫，導致大量客戶資料外洩。受影響的資料可能包括客戶的姓名、街道地址、郵遞區號、國家、電話號碼和電子郵件地址，以及訂購的產品類型和價格。Valve 等客戶已向用戶發出警告，指出駭客可利用這些資料進行高度逼真的網路釣魚（phishing）攻擊。雖然 Valve 表示支付資訊、密碼和 Steam Guard 代碼未被盜取，但客戶仍需警惕任何聲稱來自 Steam、Valve 或配送公司的可疑訊息，特別是那些提及地址或要求支付費用的訊息。此外，荷蘭的 Bol 和 De Bijenkorf 等零售商也受此事件影響，暫停了與 CEVA 的資料交換和部分營運。CEVA 尚未公開說明攻擊方式、具體外洩資料量或受影響的企業數量。",
    tags: ["CEVA", "網路攻擊", "資料外洩", "Valve", "物流供應鏈", "Phishing"],
    title_en: "Logistics Giant CEVA Hit by Hacker Attack, Client Data Leak Affects Companies Including Valve and Ajax",
    summary_en: "CEVA, a logistics company headquartered in France, suffered a cyberattack between July 29 and August 1. The incident reportedly affected eight of its European warehouses, leading to a massive leak of client data. The compromised data may include customers' names, street addresses, postal codes, countries, phone numbers, and email addresses, as well as the types and prices of products ordered. Clients such as Valve have issued warnings to users, noting that the hackers could use this data for highly sophisticated phishing attacks. Although Valve stated that payment information, passwords, and Steam Guard codes were not stolen, customers are advised to be vigilant regarding any suspicious messages claiming to be from Steam, Valve, or delivery companies, especially those mentioning addresses or requesting payment. Furthermore, retailers such as Bol and De Bijenkorf in the Netherlands were also affected by the incident, temporarily suspending data exchange and certain operations with CEVA. CEVA has not yet publicly disclosed the attack vector, the specific volume of leaked data, or the total number of affected companies.",
    tags_en: ["CEVA", "Cyberattack", "Data Leak", "Valve", "Logistics Supply Chain", "Phishing"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/11/cyberattack-on-logistics-giant-ceva-delivers-customer-data-into-the-wrong-hands/5286229", lang: "EN" }
    ]
  },
  {
    id: "20260811-123",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Elastic公開AI程式碼代理（Agent）活動監控方案：利用Hook機制追蹤開發者端點行為",
    summary: "隨著AI程式碼代理（Coding Agent）的普及，開發者端點的行為監控成為一個盲點。由於這些代理具備執行Shell指令、編輯檔案和呼叫Model Context Protocol (MCP) 伺服器等能力，其行為在Endpoint Detection and Response (EDR) 工具的角度看來，與人工操作難以區分。Elastic透過開發一個依賴性為零的Bash腳本，結合Cursor的Hook機制，實現了對AI代理活動的全面記錄。該腳本能記錄從IDE和CLI發出的所有工具呼叫，並將JSONL格式的日誌傳輸至Elasticsearch。這項技術允許安全團隊執行精準的ES|QL查詢，追蹤特定時間內哪些主機讀取了特定檔案（如.pem），或哪些代理連接了特定的第三方MCP伺服器。Elastic強調，此方案的目標是實現「可見性」（Visibility），而非「阻斷」（Blocking），以確保不干擾開發者的工作流程。此方法為所有提供生命週期Hook的AI代理提供了一個可行的監控模式，對於提升企業治理和安全調查能力具有重大實用價值。",
    tags: ["AI Agent", "Cursor", "Hook機制", "Elasticsearch", "EDR", "MCP", "端點監控"],
    title_en: "Elastic Releases AI Code Agent Activity Monitoring Solution: Tracking Developer Endpoint Behavior Using Hook Mechanisms",
    summary_en: "With the increasing prevalence of AI coding agents, monitoring developer endpoint behavior has become a blind spot. Because these agents possess capabilities such as executing shell commands, editing files, and calling Model Context Protocol (MCP) servers, their actions are difficult for Endpoint Detection and Response (EDR) tools to distinguish from manual human operations. Elastic addressed this by developing a dependency-free Bash script that combines Cursor's Hook mechanism to achieve comprehensive logging of AI agent activities. This script records all tool calls originating from the IDE and CLI, transmitting the logs in JSONL format to Elasticsearch. This technology allows security teams to perform precise ES|QL queries, tracking which hosts read specific files (such as .pem) or which agents connected to specific third-party MCP servers within a given timeframe. Elastic emphasizes that the goal of this solution is to achieve \"Visibility,\" rather than \"Blocking,\" ensuring that it does not disrupt the developer workflow. This method provides a viable monitoring pattern for all AI agents that offer lifecycle hooks, holding significant practical value for improving enterprise governance and security investigation capabilities.",
    tags_en: ["AI Agent", "Cursor", "Hook Mechanism", "Elasticsearch", "EDR", "MCP", "Endpoint Monitoring"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/ai-coding-agent-audit-cursor-hooks", lang: "EN" }
    ]
  },
  {
    id: "20260811-124",
    trackers: ["os"],
    category: "重點關注",
    title: "Modular 的 Mojo 語言達到 1.0 里程碑，旨在統一 AI 軟體堆疊，挑戰 CUDA 生態系",
    summary: "Modular 開發的 Mojo 程式語言已正式發布 1.0 版本，目標是成為一個穩定、通用且可投入生產的程式語言。Mojo 的核心目標是統一 AI 軟體堆疊，讓開發者能夠輕鬆地針對多樣化的硬體系統（如 GPU、CPU、ASIC 等）開發 AI 應用，而不必受限於特定供應商的平台，例如 Nvidia 的 CUDA 或 AMD 的 ROCm。Mojo 結合 MAX 推論框架，旨在提供一個更開放的替代方案。該語言結合了 Python 的易用性，同時具備類似 Rust 的記憶體安全性和系統程式設計能力。它利用 MLIR（Multi-Level Intermediate Representation Overview）來存取 AI 專用硬體功能，從而提升效能並優化運算成本。1.0 版本新增了支援 Python 風格的「lambda」語法、改進的 Mojo Language Server Protocol (LSP) 伺服器，以及 Mojo AI 技能。Mojo 標準函式庫採用 Apache License v2.0，並預計今年將開源 Mojo 編譯器和工具鏈，以確保其作為一個中立的 AI 開發平台。",
    tags: ["Mojo", "Modular", "AI", "CUDA", "LLVM", "MLIR"],
    title_en: "Modular's Mojo Language Reaches 1.0 Milestone, Aiming to Unify the AI Software Stack and Challenge the CUDA Ecosystem",
    summary_en: "Modular has officially released Mojo, a programming language, in version 1.0, with the goal of becoming a stable, general-purpose, and production-ready language. Mojo's core objective is to unify the AI software stack, allowing developers to easily develop AI applications for diverse hardware systems (such as GPU, CPU, and ASIC) without being restricted to a specific vendor's platform, like Nvidia's CUDA or AMD's ROCm. By integrating the MAX inference framework, Mojo aims to provide a more open alternative. The language combines Python's ease of use with memory safety and systems programming capabilities similar to Rust. It utilizes MLIR (Multi-Level Intermediate Representation Overview) to access specialized AI hardware functionalities, thereby boosting performance and optimizing computational costs. Version 1.0 introduced support for Python-style 'lambda' syntax, an improved Mojo Language Server Protocol (LSP) server, and Mojo AI skills. The Mojo standard library uses the Apache License v2.0, and the company plans to open-source the Mojo compiler and toolchain this year, ensuring it remains a neutral AI development platform.",
    tags_en: ["Mojo", "Modular", "AI", "CUDA", "LLVM", "MLIR"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/12/modulars-mojo-programming-language-hits-10-milestone/5286545", lang: "EN" }
    ]
  },
  {
    id: "20260811-125",
    trackers: ["os"],
    category: "重點關注",
    title: "Signal 推出 Automatic Key Verification (AKV)，強化端對端加密通訊的安全性",
    summary: "Signal 宣布推出 Automatic Key Verification (AKV) 功能，旨在為用戶提供額外的安全層級，確保加密聊天對象的身份真實性。傳統上，Signal 依賴端對端加密和「安全數字」（Safety Numbers）進行驗證，但理論上仍存在「中間人攻擊」（man in the middle）的風險，攻擊者可能透過竄改中央帳戶目錄來冒充他人。AKV 透過建立一個公開的「金鑰透明度伺服器」（key transparency server）和相關的「帳本」（ledger）系統，記錄用戶的公鑰變更。用戶只需在聯絡人個人資料頁面點擊「自動驗證」（Verify automatically）按鈕，系統便會檢查聯絡人的公用加密金鑰是否與 Signal 預期的金鑰匹配。此系統由 Cloudflare 和安全公司 Trail of Bits 作為第三方審計方，負責驗證 Signal 伺服器和索引的完整性。然而，文章指出，即使有第三方審計，也無法保證數據的準確性，因此用戶仍需定期主動進行「監控」（Monitoring）才能達到完整的防護系統。此功能要求用戶必須透過電話號碼才能驗證其他聯絡人的金鑰，且用戶仍需主動操作才能確保安全。",
    tags: ["Signal", "Automatic Key Verification (AKV)", "端對端加密", "金鑰透明度", "中間人攻擊", "資安架構"],
    title_en: "Signal Launches Automatic Key Verification (AKV) to Enhance Safety of End-to-End Encrypted Communications",
    summary_en: "Signal has announced the launch of Automatic Key Verification (AKV), a feature designed to provide users with an additional layer of security to ensure the authenticity of encrypted chat recipients. Traditionally, Signal relies on end-to-end encryption and 'Safety Numbers' for verification, but theoretically, the risk of 'man in the middle' attacks remains, where an attacker might impersonate others by tampering with a central account directory. AKV addresses this by establishing a public 'key transparency server' and an associated 'ledger' system that records changes to user public keys. Users simply need to click the 'Verify automatically' button on a contact's profile page, and the system will check if the contact's public encryption key matches the key expected by Signal. This system is audited by third parties, Cloudflare and the security company Trail of Bits, which are responsible for verifying the integrity of the Signal server and index. However, the article points out that even with third-party auditing, data accuracy cannot be guaranteed, meaning users must still actively perform 'Monitoring' regularly to achieve a complete defense system. This feature requires users to verify other contacts' keys using their phone number, and users must still take proactive steps to ensure security.",
    tags_en: ["Signal", "Automatic Key Verification (AKV)", "End-to-End Encryption", "Key Transparency", "Man-in-the-Middle Attack", "Cybersecurity Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/11/signal-adds-an-extra-layer-of-security-to-make-sure-youre-actually-chatting-with-the-right-person/5286461", lang: "EN" }
    ]
  },
  {
    id: "20260811-126",
    trackers: ["os"],
    category: "重點關注",
    title: "國防部擬透過「無招標」方式向 Palantir 爭取高額合約，引發合約透明度爭議",
    summary: "根據 The Register 報導，美國國防部副部長 Stephen Feinberg 擬起一份備忘錄，指示下屬部門在 2027 年至 2028 年間，透過「無競爭招標」（no-bid）方式，向 AI 數據分析公司 Palantir 採購高達 2.44 億美元的服務。該備忘錄的標題為「Funding Palantir」。\n\n這類做法被批評為繞過標準的競爭性招標程序。專家指出，國防部通常要求使用競爭性合約程序，除非有明確的法律依據和書面證明。此次備忘錄缺乏對豁免競爭性招標的法律依據說明，引發了合約透明度和利益衝突的質疑。\n\nPalantir 過去也曾受益於多筆無招標合約，包括與 USDA 和 ICE 的合約。此外，報導指出，Palantir 的共同創辦人 Peter Thiel 和美國副總統 J.D. Vance 的關係，以及多位政府官員對該公司的投資，也加劇了公眾對其合約公平性的關注。Palantir 方面尚未對此發表回應。",
    tags: ["Palantir", "國防部", "無招標合約", "Stephen Feinberg", "合約透明度", "AI 數據分析"],
    title_en: "Department of Defense Plans to Secure Large Contract from Palantir via 'No-Bid' Method, Sparking Contract Transparency Controversy",
    summary_en: "According to The Register, U.S. Department of Defense Deputy Secretary Stephen Feinberg is planning to issue a memorandum instructing subordinate departments to procure services from AI data analytics company Palantir, valued at up to $244 million, between 2027 and 2028, using a 'no-bid' method. The memorandum is titled 'Funding Palantir'.\n\nThis practice has been criticized for circumventing standard competitive bidding procedures. Experts point out that the Department of Defense typically requires competitive contract procedures unless there is clear legal basis and written documentation. The memorandum lacks explanation regarding the legal basis for waiving competitive bidding, raising concerns about contract transparency and conflicts of interest.\n\nPalantir has previously benefited from multiple no-bid contracts, including those with the USDA and ICE. Furthermore, the report notes that the relationship between Palantir's co-founder Peter Thiel and U.S. Vice President J.D. Vance, along with investments by several government officials in the company, has intensified public scrutiny regarding the fairness of its contracts. Palantir has not yet responded to this report.",
    tags_en: ["Palantir", "Department of Defense", "No-Bid Contract", "Stephen Feinberg", "Contract Transparency", "AI Data Analytics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/public-sector/2026/08/11/palantir-could-receive-244m-pentagon-no-bid-contract/5286438", lang: "EN" }
    ]
  },
  {
    id: "20260811-127",
    trackers: ["os"],
    category: "重點關注",
    title: "乘客涉嫌在飛機上干擾 Wi-Fi 訊號，疑似試圖建立假網路竊取資料",
    summary: "這起事件發生在 Delta Air Lines 從拉斯維加斯飛往亞特蘭大的一班飛機上。根據機組人員透過 ACARS 系統發出的訊息，懷疑有乘客在飛機上干擾了原有的 Wi-Fi 訊號，並廣播了一個名為「DELTA WIFI FAST」的未授權網路。有網路討論指出，此行為可能涉及「去驗證攻擊」（deauthentication attack），目的是先踢掉合法網路的用戶，再引入包含假登入頁面的惡意網路，意圖竊取乘客的憑證。Delta Air Lines 隨後確認了此事，但強調飛機安全和所有系統並未受影響，並澄清這並非對任何 Delta 系統的駭客攻擊。然而，該公司承認在飛機上短時間內確實廣播了未授權的 Wi-Fi 網路。根據美國聯邦通信委員會（FCC）的規定，故意阻斷 Wi-Fi 通訊可能違反《通信法》第 333 條，一旦被認定為故意違規，處罰可能包括監禁和罰款。",
    tags: ["Delta Air Lines", "Wi-Fi 訊號干擾", "ACARS", "去驗證攻擊", "FCC", "網路安全"],
    title_en: "Passenger Suspected of Interfering with Aircraft Wi-Fi Signal, Allegedly Attempting to Establish Fake Network to Steal Data",
    summary_en: "The incident occurred on a Delta Air Lines flight from Las Vegas to Atlanta. According to a message sent by crew members via the ACARS system, a passenger was suspected of interfering with the aircraft's existing Wi-Fi signal and broadcasting an unauthorized network named \"DELTA WIFI FAST.\" Online discussions suggest that this behavior may involve a \"deauthentication attack,\" aimed at first kicking legitimate network users off, and then introducing a malicious network containing a fake login page, intending to steal passenger credentials. Delta Air Lines subsequently confirmed the incident but emphasized that aircraft safety and all systems were unaffected, clarifying that this was not a hacking attempt against any Delta system. However, the company admitted that an unauthorized Wi-Fi network was indeed broadcast on the aircraft for a short period. Under the regulations of the U.S. Federal Communications Commission (FCC), intentionally disrupting Wi-Fi communication may violate Article 333 of the Communications Act, and if deemed intentional, penalties could include imprisonment and fines.",
    tags_en: ["Delta Air Lines", "Wi-Fi Signal Interference", "ACARS", "Deauthentication Attack", "FCC", "Cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/11/def-con-dingus-suspected-of-trying-to-take-over-delta-in-flight-wi-fi/5286331", lang: "EN" }
    ]
  },
  {
    id: "20260811-128",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "여의시스템 與 Telstar Agentic Robotics 簽署 MOU，深化實體 AI 智慧工廠領域合作",
    summary: "韓國智慧工廠解決方案企業여의시스템（Yosys）與 Telstar Agentic Robotics 於 11 日宣佈簽署業務合作協議（MOU），共同布局由實體 AI（Physical AI）引領的黑燈工廠與智慧工廠市場。雙方將共享研發與業務能力，提供相互技術支援，並開展海外聯合行銷以應對全球市場。此外，兩家公司計畫由二代經營者主導建立定期交流網路，健全長遠合作基礎。由於本事件屬企業戰略合作，原文並未提及 CVE 編號、CVSS 風險評分或安全漏洞修補建議。",
    tags: ["여의시스템", "Telstar Agentic Robotics", "智慧工廠", "黑燈工廠", "實體 AI", "業務合作協議"],
    title_en: "Yosys and Telstar Agentic Robotics Sign MOU to Deepen Cooperation in Physical AI Smart Factory Sector",
    summary_en: "Yosys, a South Korean smart factory solution enterprise, and Telstar Agentic Robotics announced on the 11th that they have signed a Memorandum of Understanding (MOU) to jointly develop the black box factory and smart factory markets, driven by Physical AI. The two parties will share R&D and business capabilities, provide mutual technical support, and conduct joint overseas marketing to address the global market. Furthermore, the companies plan to establish a regular exchange network led by second-generation owners, solidifying the foundation for long-term cooperation. As this event pertains to corporate strategic cooperation, the original text does not mention any CVE IDs, CVSS risk scores, or security vulnerability remediation suggestions.",
    tags_en: ["Yosys", "Telstar Agentic Robotics", "Smart Factory", "Black Box Factory", "Physical AI", "MOU"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145115&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260811-129",
    trackers: ["security"],
    category: "研討活動",
    title: "HackerOne 於 ISEC 2026 強調 AI 時代下「持續性威脅暴露管理 (CTEM)」與人機協同之重要性",
    summary: "在第 20 屆國際安全會議 (ISEC 2026) 上，HackerOne 副總裁 John Addeo 發表演講指出，隨著生成式 AI 普及，攻擊者能以低成本自動化發動大規模攻擊，導致企業面臨的攻擊面大幅擴增。傳統滲透測試已無法跟上 AI 縮短的漏洞利用速度，因此提出「持續性威脅暴露管理 (CTEM)」作為應對策略。CTEM 包含四個關鍵階段：資產發現、風險優先順序篩選、修復驗證與持續性管理。演講強調企業應建立涵蓋整體業務的資安治理體系，結合 AI 的自動化探測能力與人類專家的決策能力，實現人機協同以彌補資安落差。",
    tags: ["HackerOne", "CTEM", "持續性威脅暴露管理", "ISEC 2026", "AI資安", "漏洞管理", "攻擊面管理"],
    title_en: "HackerOne Highlights the Importance of Continuous Threat Exposure Management (CTEM) and Human-Machine Collaboration in the AI Era at ISEC 2026",
    summary_en: "At the 20th International Security Conference (ISEC 2026), HackerOne Vice President John Addeo delivered a talk pointing out that with the proliferation of generative AI, attackers can automate large-scale attacks at a low cost, leading to a significant expansion of the attack surface faced by enterprises. Traditional penetration testing can no longer keep pace with the speed of vulnerability exploitation shortened by AI, thus proposing 'Continuous Threat Exposure Management (CTEM)' as a countermeasure. CTEM includes four key stages: asset discovery, risk prioritization, remediation validation, and continuous management. The talk emphasized that enterprises should establish an overall business security governance system, combining AI's automated detection capabilities with human expert decision-making to achieve human-machine collaboration and bridge the security gap.",
    tags_en: ["HackerOne", "CTEM", "Continuous Threat Exposure Management", "ISEC 2026", "AI Security", "Vulnerability Management", "Attack Surface Management"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145117&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260811-130",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "第20屆國際安全會議（ISEC 2026）於首爾開幕：聚焦AI代理與自主防禦未來趨勢",
    summary: "第20屆國際安全會議（ISEC 2026）於首爾COEX開幕，主題為「以AI實現自主防禦的未來」。因應AI代理可自動搜尋系統漏洞並製作惡意程式等威脅，會議強調防禦體系必須從手動處置轉型為涵蓋威脅偵測、分析與處置的「自主防禦」體系。本屆活動由KISA及韓國CISO協會等聯合主辦，匯集237家企業機構與約8000名資安從業人員。會中由微軟、Fortinet、HackerOne及Group-IB等專家發表專題，探討影子AI控制、非人服務帳號風險、Zero Trust與SBOM供應鏈安全等議題，並同步舉辦CPO與CISO研習會，致力強化AI時代下的整體資安韌性。",
    tags: ["ISEC 2026", "KISA", "AI Agent", "自主防禦", "CISO", "供應鏈安全", "影子AI", "資安研討會"],
    title_en: "20th International Security Conference (ISEC 2026) Opens in Seoul: Focusing on AI Agents and Future Autonomous Defense Trends",
    summary_en: "The 20th International Security Conference (ISEC 2026) opened at COEX in Seoul with the theme, \"The Future of Autonomous Defense through AI.\" In response to threats such as AI agents automatically searching for system vulnerabilities and generating malicious code, the conference emphasized that defense systems must transition from manual response to an \"autonomous defense\" system that encompasses threat detection, analysis, and remediation. The event is jointly organized by KISA and the Korea CISO Association, gathering 237 corporate organizations and approximately 8,000 cybersecurity professionals. Experts from Microsoft, Fortinet, HackerOne, and Group-IB presented specialized talks on topics including shadow AI control, non-human service account risks, Zero Trust, and SBOM supply chain security, while also hosting workshops for CPOs and CISOs, aiming to strengthen overall cybersecurity resilience in the age of AI.",
    tags_en: ["ISEC 2026", "KISA", "AI Agent", "Autonomous Defense", "CISO", "Supply Chain Security", "Shadow AI", "Cybersecurity Workshop"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145111&kind=&sub_kind=", lang: "EN" }
    ]
  }
];
