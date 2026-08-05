// data-20260714.js — 2026-07-14
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-14"] = [
  {
    id: "20260714-001",
    trackers: ["security"],
    category: "重大事件",
    title: "日本交通（Nihon Kotsu）內部系統遭未授權存取與惡意程式感染，影響派車及預約管理系統",
    summary: "日本最大的計程車業者日本交通（Nihon Kotsu）於7月13日證實，其內部系統曾遭外部未授權存取，並感染惡意程式。為防止影響擴大，公司已立即關閉並隔離了受影響的系統，主要涉及電話派車、租車網路預約管理及部分內部系統。雖然公司於7月11日發現異常並採取隔離措施，但目前尚未發現客戶資料或其他個人資訊遭外洩的跡象。民眾仍可透過其官方App「GO」或實體方式正常使用計程車服務。日本交通已與外部資安專家合作進行深入調查，並將持續分析系統日誌，釐清事件的根本原因和受影響範圍。公司提醒用戶留意任何冒充其公司的可疑電子郵件或簡訊，並承諾若確認涉及個人資料外洩，將會依相關法規通知受影響客戶並公開資訊。",
    tags: ["日本交通", "Nihon Kotsu", "系統入侵", "惡意程式", "資料外洩", "計程車產業"],
    title_en: "Nihon Kotsu's Internal Systems Affected by Unauthorized Access and Malware Infection, Impacting Dispatch and Reservation Management Systems",
    summary_en: "Nihon Kotsu, Japan's largest taxi operator, confirmed on July 13th that its internal systems were subjected to unauthorized external access and malware infection. To prevent further impact, the company immediately shut down and isolated the affected systems, which primarily involve phone dispatch, online car rental reservation management, and certain internal systems. Although the company detected the anomaly and took isolation measures on July 11th, no evidence of customer data or other personal information leakage has been found yet. The public can still use the taxi service normally through the official 'GO' App or physically. Nihon Kotsu has collaborated with external cybersecurity experts to conduct an in-depth investigation and will continue to analyze system logs to clarify the root cause and scope of the incident. The company reminds users to be vigilant regarding any suspicious emails or SMS messages impersonating the company, and commits to notifying affected customers and disclosing information publicly if personal data leakage is confirmed, in accordance with relevant laws and regulations.",
    tags_en: ["Nihon Kotsu", "Nihon Kotsu", "System Intrusion", "Malware", "Data Leakage", "Taxi Industry"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177301", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-002",
    trackers: ["security"],
    category: "重大事件",
    title: "英歐聯合制裁俄羅斯情報機構，歸因波蘭電網遭網路攻擊，警告關鍵基礎設施面臨混合威脅",
    summary: "英國與歐盟聯手宣布首度制裁涉及俄羅斯網路攻擊及資訊戰的個人與實體，並正式將針對波蘭能源電網的網路攻擊歸因於俄羅斯聯邦安全局（FSB）的第16中心。英歐指出，俄羅斯正透過情報機構、網路犯罪集團等，持續對歐洲關鍵基礎設施進行網路攻擊、干預選舉及散播假訊息，構成混合式作戰。英國制裁了包括GRU高層、駭客相關實體等，歐盟也鎖定多個俄羅斯情報人員與攻擊組織。此外，英國國家網路安全中心（NCSC）發布聯合公告，揭露FSB Centre 16持續利用設定不當或已知漏洞的路由器（如思科設備的Smart Install功能），攻擊全球關鍵基礎設施。為防禦，NCSC呼籲關鍵基礎設施營運單位應改用SNMPv3、停用舊版SNMP、並為網路設備設定高強度且唯一的密碼，以降低遭入侵風險。",
    tags: ["俄羅斯情報機構", "FSB Centre 16", "混合式作戰", "關鍵基礎設施", "網路攻擊", "英國", "歐盟"],
    title_en: "UK and EU Jointly Sanction Russian Intelligence Agencies After Attributing Cyberattack on Polish Grid, Warning Critical Infrastructure Faces Hybrid Threats",
    summary_en: "The UK and the EU have jointly announced the first sanctions targeting individuals and entities involved in Russian cyberattacks and information warfare. They formally attribute the cyberattack on Poland's energy grid to Russia's Federal Security Service (FSB) Centre 16. The UK and EU point out that Russia is continuously conducting cyberattacks, interfering with elections, and spreading disinformation against Europe's critical infrastructure through intelligence agencies, cybercrime groups, and others, constituting hybrid warfare. The UK sanctioned entities including GRU high-ranking officials and hacking-related entities, while the EU also targeted multiple Russian intelligence personnel and attack organizations. Furthermore, the UK's National Cyber Security Centre (NCSC) issued a joint announcement, revealing that FSB Centre 16 continues to exploit misconfigured or known vulnerabilities in routers (such as the Smart Install feature on Cisco devices) to attack global critical infrastructure. To defend against this, the NCSC urges critical infrastructure operators to switch to SNMPv3, decommission older versions of SNMP, and set high-strength, unique passwords for network equipment to reduce the risk of intrusion.",
    tags_en: ["Russian Intelligence Agencies", "FSB Centre 16", "Hybrid Warfare", "Critical Infrastructure", "Cyberattack", "UK", "EU"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177300", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-003",
    trackers: ["security"],
    category: "重大事件",
    title: "紅藍隊演練揭示企業資安盲點：從外部情報蒐集到憑證濫用與DNS隧道外洩",
    summary: "本次演練模擬了紅隊（攻擊方）對企業的滲透攻擊，揭示了多個關鍵資安盲點。紅隊的攻擊路徑包括：第一週透過公開來源（如憑證透明度紀錄、Shodan、GitHub）盤點外部攻擊面；第二週利用弱密碼撞庫，透過低速分散式攻擊成功滲透VPN；第三週則利用群組原則偏好漏洞和Pass-the-Hash技術，橫向移動至網域控制器，取得AD資料庫密碼雜湊值；第四週則濫用ADCS憑證管理系統的設定錯誤，建立永久後門，並透過DNS隧道（DNS Tunneling）將敏感資料悄悄外傳。\n\n實務影響顯示，企業在外部攻擊面盤點、MFA強制性、憑證申請監控、以及DLP對DNS通道的覆蓋等方面存在嚴重漏洞。專家建議，企業應從被動防禦轉向主動威脅獵捕（Threat Hunting），建立紫隊（Purple Team）機制，並將資安視為全公司共同責任，透過持續的桌上型演練（Tabletop Exercise）來強化組織韌性。",
    tags: ["紅隊演練", "滲透測試", "Active Directory", "憑證管理系統", "DNS Tunneling", "資安盲點", "Threat Hunting"],
    title_en: "Red Team Exercise Reveals Corporate Security Blind Spots: From External Intelligence Gathering to Certificate Abuse and DNS Tunneling Exfiltration",
    summary_en: "This exercise simulated a red team (attacker) penetration attack on a corporation, revealing multiple critical security blind spots. The red team's attack path included: Week one, mapping the external attack surface using public sources (such as certificate transparency logs, Shodan, and GitHub); Week two, successfully penetrating the VPN through low-speed distributed attacks using weak passwords; Week three, performing lateral movement to the domain controller using group policy preference vulnerabilities and Pass-the-Hash techniques, thereby obtaining AD database password hashes; and Week four, establishing a persistent backdoor by exploiting misconfigurations in the ADCS certificate management system, and quietly exfiltrating sensitive data via DNS Tunneling. Practical implications show that enterprises have severe vulnerabilities in external attack surface mapping, mandatory MFA enforcement, certificate issuance monitoring, and DLP coverage over DNS channels. Experts recommend that companies shift from passive defense to active Threat Hunting, establish Purple Team mechanisms, and treat security as a shared corporate responsibility, strengthening organizational resilience through continuous Tabletop Exercises.",
    tags_en: ["Red Team Exercise", "Penetration Testing", "Active Directory", "Certificate Management System", "DNS Tunneling", "Security Blind Spot", "Threat Hunting"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177293", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-004",
    trackers: ["security"],
    category: "重大事件",
    title: "西班牙警方瓦解1.4億歐元網路詐騙集團：揭露企業騙局與洗錢鏈",
    summary: "西班牙警方與國際刑警、歐安組織合作，成功瓦解一個規模巨大的網路犯罪與洗錢組織。該集團主要透過投資詐騙和商業電子郵件詐騙（BEC）進行犯罪，累積了約1.4億歐元的犯罪所得。警方指出，該犯罪模式屬於「CEO詐騙」和「假發票詐騙」，利用社交工程學，冒充高階主管來轉移款項。犯罪分子建立了一個包含超過800個銀行帳戶的複雜網絡，將非法資金迅速分散和隱藏，透過多國的空殼帳戶進行洗錢。警方在西班牙、葡萄牙等地進行突襲，逮捕了多名嫌犯，並扣押了大量設備。此次行動成功切斷了犯罪鏈，並凍結了部分犯罪所得，為受害者提供追回資金的機會。",
    tags: ["西班牙警方", "網路詐騙", "洗錢", "BEC", "CEO詐騙", "國際刑警", "金融犯罪"],
    title_en: "Spanish Police Dismantle €140 Million Cyber Fraud Ring: Exposing Corporate Scams and Money Laundering Chains",
    summary_en: "Spanish police, in cooperation with Interpol and the Organization for Security and Co-operation in Europe (OSCE), successfully dismantled a massive cybercrime and money laundering organization. The group primarily engaged in investment fraud and Business Email Compromise (BEC) scams, accumulating criminal proceeds totaling approximately €140 million. Police noted that the criminal pattern involved 'CEO fraud' and 'fake invoice fraud,' utilizing social engineering to impersonate senior executives to transfer funds. The criminals established a complex network comprising over 800 bank accounts, rapidly dispersing and concealing illicit funds through shell accounts in multiple countries for money laundering. Police conducted raids in Spain, Portugal, and other locations, arresting multiple suspects and seizing a large amount of equipment. This operation successfully severed the criminal chain and froze a portion of the criminal proceeds, offering victims a chance to recover funds.",
    tags_en: ["Spanish Police", "Cyber Fraud", "Money Laundering", "BEC", "CEO Fraud", "Interpol", "Financial Crime"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/spanish-police-take-down-140-million-cyber-fraud-ring-arrest-four", lang: "EN" }
    ]
  },
  {
    id: "20260714-005",
    trackers: ["os"],
    category: "Linux",
    title: "BPF 安全監控工具 Tetragon 移除使用者空間代理，提升核心監控的可靠性",
    summary: "Tetragon 是一款基於 BPF（Berkeley Packet Filter）的資安監控工具，用於監控運行中的 Linux 核心各個層面並執行使用者定義的策略。傳統上，Tetragon 將監控數據傳輸至使用者空間的代理程序，再由該代理程序將數據轉發至網路上的中央監控服務。然而，這種架構存在一個漏洞：如果攻擊者能夠終止（kill）這個使用者空間的代理程序，系統將無法正確地報告當前的安全狀況。為了解決此問題，開發團隊（包括 Song Liu、Mahé Tardy 和 Liam Wiseheart）提出並展示了移除對使用者空間代理依賴的解決方案。此改進旨在提升 BPF 監控工具的可靠性和穩定性，確保即使在代理程序被攻擊或終止的情況下，核心監控功能仍能持續運作，對於依賴 BPF 進行深度安全監控的企業和資安人員具有實務意義。",
    tags: ["Tetragon", "BPF", "Linux 核心", "資安監控", "使用者空間", "安全架構"],
    title_en: "BPF Security Monitoring Tool Tetragon Removes User-Space Agent, Enhancing Kernel Monitoring Reliability",
    summary_en: "Tetragon is a security monitoring tool based on BPF (Berkeley Packet Filter), used to monitor various layers of the running Linux kernel and enforce user-defined policies. Traditionally, Tetragon transmitted monitoring data to a user-space agent process, which then forwarded the data to a central monitoring service over the network. However, this architecture had a vulnerability: if an attacker could terminate this user-space agent, the system would fail to accurately report the current security status. To address this issue, the development team (including Song Liu, Mahé Tardy, and Liam Wiseheart) proposed and demonstrated a solution that removes the dependency on the user-space agent. This improvement aims to enhance the reliability and stability of BPF monitoring tools, ensuring that core monitoring functionality remains operational even if the agent process is attacked or terminated. This holds practical significance for enterprises and security professionals relying on BPF for deep security monitoring.",
    tags_en: ["Tetragon", "BPF", "Linux Kernel", "Security Monitoring", "User-Space", "Security Architecture"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081696", lang: "EN" }
    ]
  },
  {
    id: "20260714-006",
    trackers: ["os"],
    category: "Linux",
    title: "AlmaLinux、Debian、Fedora、Mageia 與 SUSE 等主流 Linux 發行版發布安全更新",
    summary: "多家主流 Linux 發行版，包括 AlmaLinux、Debian、Fedora、Mageia 和 SUSE，近期發布了多項安全更新。這些更新涵蓋了從核心元件到應用層的廣泛範圍，受影響的元件包括 Linux 核心（kernel）、glibc、systemd、OpenSSH、libxml2、ImageMagick、Docker-compose、Kubernetes 等。更新範圍極廣，涉及的套件包括 buildah、podman、tomcat、libreoffice、haproxy、curl、qemu 等。這類更新對於維護系統的穩定性和安全性至關重要，建議所有使用這些發行版的用戶和系統管理員，應立即根據各自發行版的官方公告，更新所有列出的受影響套件，以修補潛在的漏洞。由於原文未提供具體 CVE 或 CVSS 分數，建議用戶務必查閱各發行版官方的安全公告，了解具體的修補細節。",
    tags: ["AlmaLinux", "Debian", "Fedora", "Mageia", "SUSE", "Ubuntu", "Linux 核心", "安全更新"],
    title_en: "Major Linux Distributions Including AlmaLinux, Debian, Fedora, Mageia, and SUSE Release Security Updates",
    summary_en: "Several major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, and SUSE, have recently released multiple security updates. These updates cover a wide range of components, from core elements to application layers. Affected components include the Linux kernel, glibc, systemd, OpenSSH, libxml2, ImageMagick, Docker-compose, and Kubernetes. The scope of the updates is extensive, involving packages such as buildah, podman, tomcat, libreoffice, haproxy, curl, and qemu. Such updates are crucial for maintaining system stability and security. It is recommended that all users and system administrators utilizing these distributions immediately update all listed affected packages according to their respective distribution's official announcements, in order to patch potential vulnerabilities. Since the original text did not provide specific CVE or CVSS scores, users are advised to consult the official security announcements of each distribution to understand the specific patching details.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "Mageia", "SUSE", "Ubuntu", "Linux kernel", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082832", lang: "EN" }
    ]
  },
  {
    id: "20260714-007",
    trackers: ["os"],
    category: "Linux",
    title: "System76 發布 COSMIC Epoch 1.3：Pop!_OS 24.04 內建磨砂玻璃視覺效果",
    summary: "System76 軟體工程師為其基於 Rust 的 COSMIC 桌面環境，作為 Pop!_OS Linux 發行版的一部分，發布了 COSMIC Epoch 1.3 版本。本次更新的主要亮點是新增了可透過 COSMIC 設定啟用的「磨砂玻璃」（Frosted Glass）視覺效果。除了此視覺優化外，Epoch 1.3 也包含翻譯更新和其他小型改進。該版本目前已在 Pop!_OS 24.04 上可用，預計很快會推廣到其他滾動發行版儲存庫。開發者也可以透過 GitHub 從原始碼建構（building from source）取得此版本。此更新屬於桌面環境的介面優化，主要影響使用者體驗，並非針對核心安全漏洞的修補。",
    tags: ["System76", "Pop!_OS", "COSMIC", "Linux", "Rust", "桌面環境"],
    title_en: "System76 Releases COSMIC Epoch 1.3: Frosted Glass Visual Effects Built into Pop!_OS 24.04",
    summary_en: "System76 software engineers have released COSMIC Epoch 1.3, an update for their Rust-based COSMIC desktop environment, included as part of the Pop!_OS Linux distribution. The main highlight of this update is the addition of 'Frosted Glass' visual effects, which can be enabled via COSMIC settings. In addition to this visual enhancement, Epoch 1.3 also includes translation updates and other minor improvements. This version is currently available on Pop!_OS 24.04 and is expected to be rolled out to other rolling release repositories soon. Developers can also obtain this version by building from source on GitHub. This update is an interface optimization for the desktop environment, primarily affecting user experience, and is not related to core security vulnerability patches.",
    tags_en: ["System76", "Pop!_OS", "COSMIC", "Linux", "Rust", "Desktop Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/COSMIC-Epoch-1.3", lang: "EN" }
    ]
  },
  {
    id: "20260714-008",
    trackers: ["os"],
    category: "Linux",
    title: "FreeBSD 16 移除最後 GPL 授權程式碼：基礎系統逐步擺脫 GNU 依賴",
    summary: "FreeBSD 16 的開發團隊已在基礎系統中移除了最後一段受 GNU GPL 授權的程式碼。這段程式碼是用於對話框（dialog）的實作。過去，FreeBSD 的安裝程式已轉用 bsddialog 來取代 dialog，而原本使用 dialog 的應用程式 dpv 也已停用並移除。隨著 dialog 的移除，FreeBSD 基礎系統的 GNU 子樹也隨之徹底清除。這項變動標誌著 FreeBSD 基礎系統在程式碼授權方面邁向更純粹的狀態。FreeBSD 16.0 預計將於 2027 年 12 月發布，此舉顯示了 FreeBSD 在核心元件的授權自主化與現代化趨勢。",
    tags: ["FreeBSD", "FreeBSD 16", "GPL", "GNU", "bsddialog", "授權自主化"],
    title_en: "FreeBSD 16 Removes Last GPL Licensed Code: Base System Gradually Sheds GNU Dependencies",
    summary_en: "The FreeBSD 16 development team has removed the last segment of GNU GPL licensed code from the base system. This code was used for the implementation of the dialog box. Previously, FreeBSD's installer transitioned to using bsddialog to replace dialog, and the application dpv, which originally used dialog, has also been deprecated and removed. With the removal of dialog, the GNU subdirectory of the FreeBSD base system has been completely cleared. This change marks a move toward a more pure state regarding code licensing in the FreeBSD base system. FreeBSD 16.0 is expected to be released in December 2027, demonstrating FreeBSD's trend toward licensing autonomy and modernization of its core components.",
    tags_en: ["FreeBSD", "FreeBSD 16", "GPL", "GNU", "bsddialog", "Licensing Autonomy"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FreeBSD-16-Goes-GPL-Free", lang: "EN" }
    ]
  },
  {
    id: "20260714-009",
    trackers: ["os"],
    category: "Linux",
    title: "BOSGAME VTA-439 小尺寸電腦評測：搭載 AMD Ryzen AI 9 HX 470 處理器，支援 Linux 系統運作",
    summary: "本文評測了 BOSGAME VTA-439 這款迷你電腦，它搭載了 AMD Ryzen AI 9 HX 470 處理器和 Radeon 890M 顯示卡。該機型定位為性價比高的選擇，相較於更高端的 Ryzen AI Halo 系列，其價格更具吸引力。VTA-439 具備 32GB DDR5-5600 記憶體和 1TB NVMe SSD，並提供豐富的連接埠，包括雙 2.5G 乙太網路埠、WiFi 7 和 USB4 埠。在作業系統方面，雖然預裝了 Windows 11，但文章特別測試了其在 Ubuntu 26.04 LTS 上的穩定性。測試結果顯示，該迷你電腦在運行 Ubuntu 26.04 LTS 時表現穩定，包括有線乙太網路和 WiFi 功能均能順利在 Linux 7.0 核心上運作。此產品主要強調其在 Linux 環境下的良好兼容性與性能。",
    tags: ["BOSGAME", "VTA-439", "AMD Ryzen AI 9 HX 470", "Linux", "Ubuntu 26.04 LTS", "Mini PC"],
    title_en: "BOSGAME VTA-439 Mini PC Review: Featuring AMD Ryzen AI 9 HX 470 Processor and Linux Compatibility",
    summary_en: "This article reviews the BOSGAME VTA-439 mini PC, which is equipped with the AMD Ryzen AI 9 HX 470 processor and Radeon 890M graphics card. This model is positioned as a cost-effective choice, offering better value compared to the higher-end Ryzen AI Halo series. The VTA-439 features 32GB DDR5-5600 memory and a 1TB NVMe SSD, and provides a rich array of ports, including dual 2.5G Ethernet ports, WiFi 7, and USB4 ports. Regarding the operating system, although it comes pre-installed with Windows 11, the article specifically tested its stability on Ubuntu 26.04 LTS. Test results showed that the mini PC performs stably when running Ubuntu 26.04 LTS, with both wired Ethernet and WiFi functions operating smoothly on the Linux 7.0 kernel. This product primarily emphasizes its excellent compatibility and performance in a Linux environment.",
    tags_en: ["BOSGAME", "VTA-439", "AMD Ryzen AI 9 HX 470", "Linux", "Ubuntu 26.04 LTS", "Mini PC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/bosgame-vta-439", lang: "EN" }
    ]
  },
  {
    id: "20260714-010",
    trackers: ["os"],
    category: "Linux",
    title: "GlandaGPU 提出開源 DRM 核心驅動：軟體 GPU 核心提案進入 Linux 核心討論",
    summary: "GlandaGPU 是一個開源的 3D 圖形核心，最初為在 FPGA 硬體上運行設計。目前開發者 Leander Kieweg 已提出一個對應的 Direct Rendering Manager (DRM) 核心驅動程式，並尋求將其納入 Linux 核心主線（mainline）的意見回饋。該驅動程式目前僅支持 640x480 @ 60Hz 的 VGA 輸出，並具備 2D 加速引擎。開發者已提供 RFC 補丁系列供參考，且該專案在 GitHub 上公開。雖然該核心目前被視為一個非商業的「愛好者專案」，但其提出了一個可供開發的軟體 GPU 核心設計，並提供 QEMU 模擬環境，有助於開發者進行測試。目前，上游 DRM 維護者尚未對接受這類非商業軟體核心的驅動程式表達明確立場，但這代表了開源硬體加速和核心驅動開發的最新動向。",
    tags: ["Linux 核心", "DRM", "GlandaGPU", "FPGA", "開源硬體", "QEMU"],
    title_en: "GlandaGPU Proposes Open-Source DRM Core Driver: Software GPU Core Proposal Enters Linux Kernel Discussion",
    summary_en: "GlandaGPU is an open-source 3D graphics core originally designed to run on FPGA hardware. Developer Leander Kieweg has now proposed a corresponding Direct Rendering Manager (DRM) core driver and is seeking feedback for its inclusion in the Linux kernel mainline. The driver currently only supports 640x480 @ 60Hz VGA output and features a 2D acceleration engine. The developer has provided a series of RFC patches for reference, and the project is publicly available on GitHub. Although the core is currently considered a non-commercial 'hobbyist project,' it proposes a developable software GPU core design and provides a QEMU simulation environment to aid developer testing. Currently, upstream DRM maintainers have not expressed a clear stance on accepting such non-commercial software core drivers, but this represents the latest trend in open-source hardware acceleration and core driver development.",
    tags_en: ["Linux Kernel", "DRM", "GlandaGPU", "FPGA", "Open-Source Hardware", "QEMU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GlandaGPU-Linux-Driver-RFC", lang: "EN" }
    ]
  },
  {
    id: "20260714-011",
    trackers: ["os"],
    category: "Linux",
    title: "Intel ANV Vulkan 驅動程式升級：新增 10-bit H.265 視訊編碼支援",
    summary: "Intel 的開源 ANV Vulkan 驅動程式持續提升其視訊處理能力。開發者 Hyunjun Ko 近期針對 Intel Alchemist GPU 及 Gen12.5 顯示卡，修復了 H.264/H.265 編碼的錯誤，並進一步新增了 10-bit H.265 視訊編碼支援。此功能先前因疏忽而未被支援。開發者指出，僅需少量程式碼即可在現有的 Vulkan Video 程式路徑上實現此功能。此相關程式碼已合併，預計將在 Mesa 26.2 穩定版（預計於八月）之前釋出，將提升 Linux 系統上使用 Vulkan 進行高畫質視訊編碼的實用性。",
    tags: ["Intel", "Vulkan", "ANV", "Linux", "H.265", "Mesa"],
    title_en: "Intel ANV Vulkan Driver Upgrade: Adds 10-bit H.265 Video Encoding Support",
    summary_en: "Intel's open-source ANV Vulkan driver continues to enhance its video processing capabilities. Developer Hyunjun Ko recently fixed bugs related to H.264/H.265 encoding for Intel Alchemist GPUs and Gen12.5 graphics cards, and further added support for 10-bit H.265 video encoding. This feature was previously unsupported due to an oversight. The developer noted that this functionality could be implemented on the existing Vulkan Video code path with minimal code. This related code has been merged and is expected to be released before the Mesa 26.2 stable version (expected in August), improving the practicality of using Vulkan for high-definition video encoding on Linux systems.",
    tags_en: ["Intel", "Vulkan", "ANV", "Linux", "H.265", "Mesa"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Vulkan-Video-10-bit-H265", lang: "EN" }
    ]
  },
  {
    id: "20260714-012",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心進展：改善 Apple Silicon SoC 傳感器監控，提升 Mac 功耗與散熱資訊可讀性",
    summary: "本文討論了在 Linux 核心環境下，Apple Silicon SoC 設備的硬體監控（HWMON）功能所面臨的複雜挑戰。由於 Apple Silicon 設備的感測器（如溫度、電壓、功耗、風扇轉速等）分散在 SoC 和設備各處，且其暴露方式（透過 SMC 韌體）缺乏統一標準，導致在 mainline kernel 上整合極為困難。Linux 貢獻者 James Calligeros 正在積極修復此問題，最新補丁系列已提交至 Linux kernel mailing list。修復的重點是透過引入 Device Tree 節點，並採用更結構化的方式（如使用 hwmon-common.dtsi、SoC-specific hwmon-${soc}.dtsi 等）來管理這些感測器資訊，以避免重複和混亂。這項工作對於希望在 Linux 上進行 Apple Mac 功耗和熱能監控的用戶至關重要。雖然這是一個長期且複雜的過程，但目前已取得進展，並持續為 M4、M3 Pro/Max/Ultra 等新晶片支援 Device Tree 的修訂。",
    tags: ["Linux 核心", "Apple Silicon", "HWMON", "Device Tree", "功耗監控", "Mac OS"],
    title_en: "Linux Kernel Progress: Improving Apple Silicon SoC Sensor Monitoring to Enhance Mac Power and Thermal Information Readability",
    summary_en: "This article discusses the complex challenges faced by the Hardware Monitoring (HWMON) functionality for Apple Silicon SoC devices within the Linux kernel environment. Because the sensors (such as temperature, voltage, power consumption, fan speed, etc.) on Apple Silicon devices are distributed across the SoC and the device itself, and their exposure method (via SMC firmware) lacks a unified standard, integration into the mainline kernel is extremely difficult. Linux contributor James Calligeros is actively working to resolve this issue, and a series of recent patches has been submitted to the Linux kernel mailing list. The focus of the fix is to manage this sensor information by introducing Device Tree nodes and adopting a more structured approach (such as using hwmon-common.dtsi, SoC-specific hwmon-${soc}.dtsi, etc.) to prevent duplication and confusion. This work is crucial for users who wish to perform power and thermal monitoring on Apple Macs running Linux. Although this is a long and complex process, progress has been made, and revisions to the Device Tree are ongoing to support new chips like the M4, M3 Pro/Max/Ultra, and others.",
    tags_en: ["Linux Kernel", "Apple Silicon", "HWMON", "Device Tree", "Power Monitoring", "Mac OS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Apple-Wild-Mess-Sensors-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260714-013",
    trackers: ["os"],
    category: "Linux",
    title: "BeOS後繼系統Haiku整合NVMM虛擬化支援，目標發布Beta 6版本",
    summary: "Haiku是一個受BeOS啟發的開源作業系統。在最新的2026年6月狀態報告中，開發者已將NetBSD的虛擬機監控器NVMM移植並合併至Haiku主幹。此功能旨在為Haiku提供透過QEMU進行硬體加速的虛擬化支援。然而，開發者指出此移植版本目前「無法完全正常運作」，因此預設仍處於停用狀態。當嘗試在Haiku或Linux等客體作業系統上使用時，系統會在啟動後期以異常方式崩潰。此外，Haiku還進行了更多藍牙控制指令支援、螢幕亮度處理改善、BFS檔案系統崩潰修復，並開始了64位元PowerPC的建構系統支援。開發團隊正朝著期待已久的Haiku r1 Beta 6里程碑邁進，目標是在八月中旬發布該版本。",
    tags: ["Haiku", "BeOS", "NVMM", "虛擬化", "QEMU", "開源作業系統"],
    title_en: "Haiku, the successor to BeOS, integrates NVMM virtualization support, targeting Beta 6 release",
    summary_en: "Haiku is an open-source operating system inspired by BeOS. In the latest June 2026 status report, developers ported and merged NetBSD's virtual machine monitor, NVMM, into the Haiku mainline. This feature aims to provide Haiku with virtualization support via hardware acceleration using QEMU. However, developers noted that this ported version is currently 'not fully functional,' and is therefore disabled by default. When attempting to use it on guest operating systems such as Haiku or Linux, the system crashes abnormally late in the boot process. Additionally, Haiku has implemented more Bluetooth control command support, improved screen brightness handling, and fixed BFS file system crashes, and has begun supporting 64-bit PowerPC build system support. The development team is moving toward the long-awaited Haiku r1 Beta 6 milestone, targeting a release in mid-August.",
    tags_en: ["Haiku", "BeOS", "NVMM", "Virtualization", "QEMU", "Open-source OS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Haiku-June-2026", lang: "EN" }
    ]
  },
  {
    id: "20260714-014",
    trackers: ["os"],
    category: "Linux",
    title: "Fedora 45 批准輕量化 GRUB2 啟動程式，專為機密運算環境優化",
    summary: "Fedora 工程與指導委員會（FESCo）已批准在 Fedora 45 中引入一個輕量化、替代版的 GRUB2 啟動程式。此獨立套件專注於滿足機密運算（Confidential Computing）環境的需求，僅包含 UEFI 支援和運行現代 CoCo 環境所需的最小核心模組。此精簡版 GRUB2 能夠使用 Bootloader Specification (BLS) 檔案啟動統一核心映像（UKIs）。導入此輕量化版本的主要動機是，機密虛擬機（VMs）依賴遠端證明（remote attestation）並需要提供長期穩定的 TPM PCR 值，而這些值會受到任何啟動程式變更的影響。此外，移除不必要的程式碼和功能，從安全角度來看也是有益的。此外，FESCo 本週也批准在 Fedora 45 中整合了 LLVM 23 編譯器堆疊，延續了 Fedora 發行版提供最新工具鏈的傳統。",
    tags: ["Fedora 45", "GRUB2", "機密運算", "Confidential Computing", "FESCo", "LLVM 23"],
    title_en: "Fedora 45 Approves Lightweight GRUB2 Bootloader Optimized for Confidential Computing Environments",
    summary_en: "The Fedora Engineering Security Committee (FESCo) has approved the inclusion of a lightweight, alternative version of the GRUB2 bootloader in Fedora 45. This standalone package is focused on meeting the requirements of Confidential Computing environments, containing only the minimal core modules necessary for UEFI support and running modern CoCo environments. This streamlined GRUB2 can boot Unified Kernel Images (UKIs) using Bootloader Specification (BLS) files. The primary motivation for introducing this lightweight version is that confidential Virtual Machines (VMs) rely on remote attestation and require stable, long-term TPM PCR values, which can be affected by any bootloader changes. Furthermore, removing unnecessary code and functionality is beneficial from a security perspective. Additionally, FESCo also approved the integration of the LLVM 23 compiler stack into Fedora 45 this week, continuing Fedora's tradition of providing the latest toolchains.",
    tags_en: ["Fedora 45", "GRUB2", "Confidential Computing", "Confidential Computing", "FESCo", "LLVM 23"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GRUB-Light-Approved-Fedora-45", lang: "EN" }
    ]
  },
  {
    id: "20260714-015",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心修補：改善多重 Swap 設備的 I/O 分配與管理機制",
    summary: "本文介紹了一系列針對 Linux 核心的修補程式，旨在優化和改善系統處理多個 Swap 設備（如用於 Swap Tiering 或分層 Swap）的機制。目前許多複雜的 Linux 伺服器部署場景會用到多個 Swap 設備，但現有設計存在多個長期問題。新修補的核心目標是實現更公平地將 I/O 分配到多個 Swap 設備，並徹底移除依賴可變的 plist 和全局鎖定機制。技術上，修補內容包括重構 Swap 設備管理的鎖定模式，使用 percpu rwsem 來保護所有 Swap 設備和新增的 percpu 讀取優先佇列，以提高可擴展性。新設計旨在解決舊版設計中，全局 percpu 叢集快取與 Swap Tiering 等概念的衝突、plist 輪轉機制導致的鎖定爭用，以及輪轉過程缺乏明確規則等問題，使系統設計更具彈性與魯棒性。",
    tags: ["Linux 核心", "Swap 設備", "I/O 分配", "Swap Tiering", "percpu rwsem", "Linux 核心修補"],
    title_en: "Linux Kernel Patch: Improving I/O Allocation and Management for Multiple Swap Devices",
    summary_en: "This article introduces a series of patches for the Linux kernel aimed at optimizing and improving the system's handling of multiple Swap devices (such as those used for Swap Tiering). Many complex Linux server deployment scenarios currently utilize multiple Swap devices, but existing designs contain several long-standing issues. The core goal of the new patch is to achieve a more equitable distribution of I/O across multiple Swap devices and completely eliminate reliance on mutable plists and global locking mechanisms. Technically, the patch involves refactoring the locking pattern for Swap device management, utilizing percpu rwsem to protect all Swap devices and introducing a new percpu read-priority queue to enhance scalability. The new design aims to resolve conflicts between the global percpu cluster cache and concepts like Swap Tiering found in older designs, address lock contention caused by plist rotation mechanisms, and solve the issue of unclear rules during the rotation process, making the system design more flexible and robust.",
    tags_en: ["Linux Kernel", "Swap Device", "I/O Allocation", "Swap Tiering", "percpu rwsem", "Linux Kernel Patch"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Improve-Multi-Swap-Device", lang: "EN" }
    ]
  },
  {
    id: "20260714-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "駭客利用 Joomla 擴充套件漏洞，在數百萬網站上取得完美 10 分的極高權限",
    summary: "本報告揭露了 Joomla 內容管理系統（CMS）的擴充套件存在嚴重漏洞。攻擊者被發現利用 iCagenda 和 Balbooa Forms 等擴充套件中的缺陷，在目標網站上取得極高的權限，甚至達到完美 10 分的評分。這些漏洞可能影響到全球數百萬個使用 Joomla 系統的網站，構成重大的資安風險。由於這些漏洞屬於擴充套件層面，建議網站管理員應立即檢查並更新所有第三方擴充套件，特別是那些功能複雜或未經定期維護的組件。此外，應考慮實施最小權限原則，並定期進行安全審計，以降低被利用的風險。",
    tags: ["Joomla", "CMS", "擴充套件", "資安漏洞", "iCagenda", "Balbooa Forms"],
    title_en: "Hackers Exploit Joomla Extension Vulnerabilities to Achieve Perfect 10 High Privileges on Millions of Websites",
    summary_en: "This report reveals critical vulnerabilities in Joomla Content Management System (CMS) extensions. Attackers were found exploiting flaws in extensions such as iCagenda and Balbooa Forms to gain extremely high privileges on target websites, reaching a perfect 10 score. These vulnerabilities could affect millions of websites globally that use the Joomla system, posing a significant cybersecurity risk. Since these vulnerabilities reside at the extension level, website administrators are advised to immediately check and update all third-party extensions, especially complex or infrequently maintained components. Furthermore, implementing the principle of least privilege and conducting regular security audits are recommended to mitigate the risk of exploitation.",
    tags_en: ["Joomla", "CMS", "Extension", "Vulnerability", "iCagenda", "Balbooa Forms"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/14/baddies-caught-exploiting-extensions-bugs-with-perfect-10-scores-on-vulnerable-joomla-websites/5271001", lang: "EN" }
    ]
  },
  {
    id: "20260714-017",
    trackers: ["os"],
    category: "Linux",
    title: "新 X11 伺服器以純組合語言實作，加入 XLibre 等主流專案",
    summary: "本文介紹了一個全新的 X11 伺服器實作，該伺服器採用純組合語言（assembly）直接開發，並將其整合到現有的主流專案中，包括 yserver、Phoenix，以及 XLibre 等。這代表了 X11 伺服器技術的進展，為開源桌面環境提供了新的底層基礎。雖然文章未提供具體的 CVE 或 CVSS 分數，但其技術細節顯示了對底層圖形系統（X11）的深度優化與重構。對於開發者和資安人員而言，這代表了對核心圖形服務的深入了解和潛在的攻擊面變化。修補或關注點在於了解新伺服器的穩定性、效能優化，以及其在不同 Linux 發行版上的兼容性。",
    tags: ["X11", "組合語言", "Linux 桌面環境", "圖形伺服器", "開源軟體"],
    title_en: "New X11 Server Implemented in Pure Assembly, Integrated with Major Projects like XLibre",
    summary_en: "This article introduces a brand-new X11 server implementation developed directly in pure assembly language. It has been integrated into several existing mainstream projects, including yserver, Phoenix, and XLibre. This represents an advancement in X11 server technology, providing a new underlying foundation for open-source desktop environments. Although the article does not provide specific CVE or CVSS scores, its technical details demonstrate deep optimization and refactoring of the underlying graphics system (X11). For developers and security personnel, this signifies a deep understanding of core graphics services and potential changes in the attack surface. Patching or points of interest include understanding the new server's stability, performance optimization, and compatibility across different Linux distributions.",
    tags_en: ["X11", "Assembly Language", "Linux Desktop Environment", "Graphics Server", "Open Source Software"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/07/14/frame-a-new-x11-server-implemented-directly-in-assembly/5270498", lang: "EN" }
    ]
  },
  {
    id: "20260714-018",
    trackers: ["security"],
    category: "法規與標準",
    title: "企業治理強化：實務指南揭示第三方資訊風險管理（TPRM）的七步驟",
    summary: "本文為高階管理層和董事會提供第三方資訊風險（Third-party information risk）的治理框架。它指出，第三方失敗的風險已超越傳統資安範疇，可能導致營運中斷、法規暴露、聲譽受損等多重影響。有效的治理需要建立清晰的風險暴露（Exposure）視圖。文章提出了一個系統性的七步驟流程：衡量（Measure）剩餘風險暴露；驗證覆蓋率與信心度；比較風險暴露與企業可接受的風險容忍度（Tolerance）；解釋偏離常規的例外情況；彙總（Aggregate）潛在的材料組合風險；進行基準比較（Benchmark）以對標同業；最後是風險處理與轉移（Treat and Transfer）。董事會應監督管理層是否建立了可信的量化模型來衡量和治理此類風險，確保報告具備量化、趨勢和決策導向的特點。",
    tags: ["第三方風險管理", "TPRM", "企業治理", "風險暴露", "董事會監督", "資訊風險"],
    title_en: "Strengthening Corporate Governance: A Practical Guide Revealing the Seven Steps of Third-Party Risk Management (TPRM)",
    summary_en: "This article provides a governance framework for third-party information risk to senior management and the board of directors. It points out that the risk of third-party failure has moved beyond traditional cybersecurity scope, potentially leading to multiple impacts such as operational disruption, regulatory exposure, and reputational damage. Effective governance requires establishing a clear view of risk exposure. The article proposes a systematic seven-step process: Measure remaining risk exposure; Validate coverage and confidence; Compare risk exposure with the enterprise's acceptable risk tolerance; Explain exception cases that deviate from the norm; Aggregate potential material combined risks; Benchmark against industry peers; and finally, Treat and Transfer risk. The board of directors should oversee whether management has established a credible quantitative model to measure and govern such risks, ensuring that reports are quantitative, trend-based, and decision-oriented.",
    tags_en: ["Third-Party Risk Management", "TPRM", "Corporate Governance", "Risk Exposure", "Board Oversight", "Information Risk"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/manage-vendor-risk-in-a-few-practical-steps", lang: "EN" }
    ]
  },
  {
    id: "20260714-019",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國三州推動AI安全法規：要求大型前沿AI模型進行風險評估與透明度報告",
    summary: "隨著前沿人工智慧（Frontier AI）模型能力增強，美國包括伊利諾州、紐約州和加州等州正積極推動立法，要求開發商提高透明度和安全性。伊利諾州通過的《人工智慧安全措施法》（SB315）和紐約州的《負責任AI安全與教育法》（RAISE Act）等法案，規定年營收超過5億美元的大型前沿AI開發商，必須建立並每年更新全面的AI框架。此框架需涵蓋災難風險評估、治理、網路安全、第三方評估及內部使用風險。開發商在部署新模型或大幅修改模型前，也必須提交透明度報告。這些州法規的實施將在2027年，但由於各州法規細節不同，將造成「補丁式合規」的挑戰。專家建議，企業應將安全視為文化和思維模式，建立風險登記冊，並強化身份與存取管理（IAM）控制，以應對AI帶來的「影子AI」風險。",
    tags: ["AI安全法規", "前沿AI模型", "伊利諾州", "紐約州", "加州", "風險評估", "透明度報告"],
    title_en: "Three US States Push AI Safety Regulations: Requiring Risk Assessments and Transparency Reports for Large Frontier AI Models",
    summary_en: "As the capabilities of Frontier AI models increase, US states, including Illinois, New York, and California, are actively pushing legislation requiring developers to enhance transparency and safety. Bills such as Illinois' Artificial Intelligence Safety Measures Act (SB315) and New York's Responsible AI Safety and Education Act (RAISE Act) mandate that large Frontier AI developers with annual revenues exceeding $500 million must establish and annually update a comprehensive AI framework. This framework must cover disaster risk assessment, governance, cybersecurity, third-party evaluation, and internal usage risk. Developers must also submit a transparency report before deploying new models or significantly modifying existing ones. While these state regulations are set to take effect in 2027, the varying details across state laws are expected to create a 'patchwork compliance' challenge. Experts advise that companies should treat security as a culture and mindset, establish a risk register, and strengthen Identity and Access Management (IAM) controls to address the risks posed by 'Shadow AI.'",
    tags_en: ["AI Safety Regulations", "Frontier AI Models", "Illinois", "New York", "California", "Risk Assessment", "Transparency Report"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/frontier-ai-genie-out-of-bottle-where-rulebook", lang: "EN" }
    ]
  },
  {
    id: "20260714-020",
    trackers: ["security"],
    category: "法規與標準",
    title: "韓國Kakao Pay違法傳輸個資：因未經同意將用戶資料傳輸至支付寶，遭行政罰鍰及法院裁定敗訴",
    summary: "韓國最大行動支付平臺Kakao Pay被爆出違法傳送用戶個資至中國支付寶（Alipay）相關公司。根據韓國個人資訊保護委員會（PIPC）的調查，Kakao Pay在2018年至2024年5月期間，未取得用戶明確同意，便將全體用戶個資每日傳輸至支付寶新加坡電子商務公司。PIPC指出，違規行為包括未取得個資提供予第三人及跨境傳輸的明確授權，且傳輸範圍過大，甚至包含從未與Apple生態系互動的Android用戶個資，影響用戶約4千萬人次。\n後續法律程序顯示，首爾行政法院於6月11日裁定Kakao Pay敗訴，認定PIPC的行政處分合法。此外，當地警方也於7月6日針對Kakao Pay總部進行強制搜查，調查是否涉及違反《信用資訊法》與《電子金融交易法》，旨在查明公司內部決策過程。此事件凸顯企業在處理個資跨境傳輸及第三方合作時，必須取得明確且具體的用戶同意。",
    tags: ["Kakao Pay", "個人資訊保護", "PIPC", "跨境傳輸", "支付寶", "個資法"],
    title_en: "South Korea's Kakao Pay Illegal Transfer of Personal Data: Fined by Authorities and Lost Lawsuit for Transferring User Data to Alipay Without Consent",
    summary_en: "South Korea's largest mobile payment platform, Kakao Pay, was exposed for illegally transmitting user personal data to companies related to China's Alipay. According to an investigation by the Personal Information Protection Commission (PIPC) of Korea, Kakao Pay transmitted all user personal data daily to Alipay Singapore E-commerce Company between 2018 and May 2024, without obtaining explicit user consent. The PIPC pointed out that the violations included failing to obtain explicit authorization for providing personal data to third parties and for cross-border transmission, and that the scope of transmission was excessively broad, even including personal data from Android users who had never interacted with the Apple ecosystem, affecting approximately 40 million users. Subsequent legal proceedings showed that the Seoul Administrative Court ruled on June 11 that Kakao Pay lost the case, recognizing the legality of the PIPC's administrative disposition. Furthermore, local police conducted a forced search at Kakao Pay's headquarters on July 6 to investigate potential violations of the Credit Information Act and the Electronic Financial Transactions Act, aiming to ascertain the company's internal decision-making process. This incident highlights that companies must obtain clear and specific user consent when handling cross-border personal data transmission and third-party collaborations.",
    tags_en: ["Kakao Pay", "Personal Information Protection", "PIPC", "Cross-border Transmission", "Alipay", "Personal Data Act"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177283", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-021",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟「補丁天災」紀錄再破紀錄：上月修補程式數量達 622 個 CVE",
    summary: "本文報導微軟在「補丁週」（Patch Tuesday）期間發布了創紀錄的修補程式數量，總計達 622 個。這顯示了微軟在持續修補其產品線上的巨大工作量。雖然原文未提供具體的受影響產品或 CVE 列表，但其核心訊息是微軟持續面臨龐大的安全修補需求。對於資安專業人員和企業 IT 管理者而言，這代表了需要更高效地管理和部署大量的安全更新，以應對不斷增加的漏洞風險。建議組織應建立完善的修補管理流程，並確保所有關鍵系統和應用程式都能及時、全面地應用最新的安全補丁，以降低被已知漏洞攻擊的風險。",
    tags: ["Microsoft", "Patch Tuesday", "CVE", "安全補丁", "Windows", "資安管理"],
    title_en: "Microsoft's 'Patch Disaster' Record Broken: 622 CVEs Patched Last Month",
    summary_en: "This article reports that Microsoft released a record number of patches during 'Patch Tuesday,' totaling 622. This demonstrates the massive effort Microsoft is continuously undertaking to patch its product lines. Although the original text does not provide a specific list of affected products or CVEs, the core message is that Microsoft continues to face a huge demand for security patches. For cybersecurity professionals and enterprise IT managers, this signifies the need for more efficient management and deployment of a large volume of security updates to cope with increasing vulnerability risks. Organizations are advised to establish comprehensive patch management processes and ensure that all critical systems and applications apply the latest security patches in a timely and comprehensive manner to mitigate the risk of being attacked by known vulnerabilities.",
    tags_en: ["Microsoft", "Patch Tuesday", "CVE", "Security Patch", "Windows", "Cybersecurity Management"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/14/patchpocalypse-now-microsoft-tops-last-months-record-with-622-patch-tuesday-cves/5271434", lang: "EN" }
    ]
  },
  {
    id: "20260714-022",
    trackers: ["os"],
    category: "Windows",
    title: "微軟推出 Windows 搜尋功能更新，提升用戶體驗與系統穩定性",
    summary: "本文報導了微軟（Microsoft）持續為 Windows 作業系統推出搜尋功能（Search）的更新。這些更新主要著重於提升用戶的搜尋體驗、優化系統的穩定性，並改善搜尋結果的相關性。雖然文章未提及特定的 CVE 或重大漏洞修補，但這些定期的功能更新對於維持作業系統的安全性與效能至關重要。實務上，用戶應確保系統保持最新狀態，透過 Windows Update 進行必要的更新，以獲得最佳的搜尋功能和系統穩定性。這些更新是微軟持續優化其核心用戶體驗的體現，建議使用者定期檢查並安裝所有系統更新。",
    tags: ["Microsoft", "Windows", "搜尋功能", "系統更新", "用戶體驗"],
    title_en: "Microsoft Releases Windows Search Feature Update to Enhance User Experience and System Stability",
    summary_en: "This article reports on Microsoft's continuous release of updates for the Windows operating system's Search function. These updates primarily focus on enhancing the user's search experience, optimizing system stability, and improving the relevance of search results. Although the article does not mention specific CVEs or major vulnerability patches, these regular feature updates are crucial for maintaining the operating system's security and performance. Practically, users should ensure their system remains up-to-date by performing necessary updates through Windows Update to achieve optimal search functionality and system stability. These updates reflect Microsoft's ongoing optimization of its core user experience, and users are advised to regularly check for and install all system updates.",
    tags_en: ["Microsoft", "Windows", "Search Function", "System Update", "User Experience"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/07/14/microsoft-rolls-out-windows-search-updates-and-theyre-quite-good/5271320", lang: "EN" }
    ]
  },
  {
    id: "20260714-023",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Windows 11 7月安全更新 KB5101650 發布，修補多項漏洞並新增「點時回溯」功能",
    summary: "微軟於 2026 年 7 月發布 Windows 11 KB5101650 安全更新，作為 Patch Tuesday 的一部分，修補了超過 500 個安全問題，並包含多項系統穩定性與藍牙功能改進。本次更新強制性安裝，建議用戶盡快更新，特別是考慮到惡意行為者可能利用 AI 延遲更新的風險。\n\n除了核心系統修補外，本次更新還引入了強大的「點時回溯」（Point-in-time restore）功能。此功能利用 Volume Shadow Copy Service (VSS) 技術，可備份系統、應用程式設定及本地檔案，讓用戶能恢復到過去的特定時間點。Windows 11 Home 版預設每 24 小時會建立一次備份點，而 Enterprise 版則可自訂備份與保留週期。\n\n此外，微軟同時發布了針對 .NET 8.0、.NET Framework 和 .NET 9.0 的安全更新（KB5104032, KB5100998, KB5104033），以及惡意軟體移除工具更新。用戶應透過「設定」>「Windows Update」檢查更新，以確保系統安全與穩定性。",
    tags: ["Windows 11", "KB5101650", "Patch Tuesday", "點時回溯", "VSS", "微軟"],
    title_en: "Windows 11 July Security Update KB5101650 Released, Patching Multiple Vulnerabilities and Adding 'Point-in-time Restore' Feature",
    summary_en: "Microsoft released the Windows 11 KB5101650 security update in July 2026 as part of Patch Tuesday. This update patches over 500 security issues and includes multiple system stability and Bluetooth feature improvements. Since this update is mandatory, users are advised to update promptly, especially considering the risk of malicious actors exploiting AI-delayed updates.\n\nIn addition to core system patches, this update introduces a powerful 'Point-in-time restore' feature. This function utilizes Volume Shadow Copy Service (VSS) technology to back up system, application settings, and local files, allowing users to restore to a specific point in the past. Windows 11 Home Edition automatically creates a backup point every 24 hours, while the Enterprise edition allows users to customize the backup and retention cycles.\n\nFurthermore, Microsoft also released security updates for .NET 8.0, .NET Framework, and .NET 9.0 (KB5104032, KB5100998, KB5104033), as well as updates for malware removal tools. Users should check for updates via 'Settings' > 'Windows Update' to ensure system security and stability.",
    tags_en: ["Windows 11", "KB5101650", "Patch Tuesday", "Point-in-time restore", "VSS", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/14/windows-11-kb5101650-out-with-features-like-screen-tint-bluetooth-upgrade-point-in-time-direct-download-update", lang: "EN" }
    ]
  },
  {
    id: "20260714-024",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 7月修補程式發布：強化點時回溯、藍牙修復及系統穩定性提升",
    summary: "微軟發布 Windows 11 2026 年 7 月修補程式 (KB5101650)，適用於 25H2 和 24H2 版本。本次更新涵蓋了多項重大功能和安全修復，其中最受矚目的是「點時回溯」（Point-in-time restore）。此功能利用 Volume Shadow Copy Service，可捕獲整個作業系統區塊級備份，允許使用者回溯至過去 72 小時內的自動還原點，範圍涵蓋系統檔案、登錄檔和個人文件，實質上提供了一種迷你全碟回滾能力。此外，本次更新還大幅修復了藍牙連接的穩定性，改善了 AirPods 配對和 LE Audio 表現；優化了檔案總管的啟動速度，並提升了系統的整體穩定性，例如修復了 BITS 導致的關機延遲問題。使用者還可透過設定新增日曆介面，更精準地設定更新暫停日期（最長 35 天）。修補建議是所有符合資格的 Windows 11 用戶應儘快安裝此安全更新，以獲得系統恢復和穩定性的全面提升。",
    tags: ["Windows 11", "KB5101650", "Point-in-time restore", "Windows Update", "藍牙", "25H2", "24H2"],
    title_en: "Windows 11 July Patch Released: Enhancing Point-in-time Restore, Bluetooth Fixes, and System Stability",
    summary_en: "Microsoft has released the Windows 11 July Patch (KB5101650), applicable to 25H2 and 24H2 versions. This update includes multiple major features and security fixes, the most notable being 'Point-in-time restore.' This feature utilizes the Volume Shadow Copy Service to capture block-level backups of the entire operating system, allowing users to roll back to automatic restore points within the past 72 hours. The scope covers system files, registry, and personal documents, effectively providing a mini full disk rollback capability. Furthermore, this update significantly improves the stability of Bluetooth connections, enhancing AirPods pairing and LE Audio performance; it optimizes File Explorer startup speed, and boosts overall system stability, such as fixing shutdown delays caused by BITS. Users can also add a calendar interface via Settings to set update pause dates more precisely (up to 35 days). The patch recommends that all eligible Windows 11 users install this security update promptly to gain comprehensive improvements in system recovery and stability.",
    tags_en: ["Windows 11", "KB5101650", "Point-in-time restore", "Windows Update", "Bluetooth", "25H2", "24H2"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/14/i-tested-windows-11-july-2026-patch-tuesday-updates-heres-everything-new-improved-and-fixed", lang: "EN" }
    ]
  },
  {
    id: "20260714-025",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 新版 Outlook 整合 Planner 任務管理，並擴展跨租戶郵件召回功能",
    summary: "Microsoft 正在逐步推出新版 Outlook (New Outlook) 的重大功能更新，旨在提升用戶的生產力整合度。首先，Outlook 將深度整合 Planner 任務管理工具，讓用戶可以直接在郵件、行事曆和任務之間管理工作，減少情境切換。Planner 整合將預設開啟，並可透過左側邊欄存取。此外，Outlook 亦將首次支援跨 Microsoft 365 租戶的郵件召回功能。這項功能允許管理員在允許的情況下，讓外部租戶的郵件也能被召回，有助於提升組織協作與控制力。Microsoft 預計將於 2026 年 8 月中開始推出，並在 2026 年 9 月初完成部署。新版 Outlook 還有其他優化，如通知分組和回覆舊郵件的提醒，但仍有用戶指出其缺少部分經典 Outlook 功能。",
    tags: ["Microsoft 365", "Outlook", "New Outlook", "Planner", "跨租戶", "郵件召回"],
    title_en: "Microsoft's New Outlook Integrates Planner Task Management and Expands Cross-Tenant Email Recall Functionality",
    summary_en: "Microsoft is gradually rolling out major feature updates for New Outlook, aiming to enhance user productivity integration. Firstly, Outlook will deeply integrate the Planner task management tool, allowing users to manage work directly between email, calendar, and tasks, thereby reducing context switching. The Planner integration will be enabled by default and accessible via the left sidebar. Furthermore, Outlook will for the first time support email recall functionality across Microsoft 365 tenants. This feature allows administrators, when permitted, to recall emails sent to external tenants, helping to improve organizational collaboration and control. Microsoft expects to begin rolling out this feature in August 2026, with deployment expected to be completed by early September 2026. New Outlook also includes other optimizations, such as notification grouping and reminders for replying to old emails, though some users have pointed out the absence of certain classic Outlook features.",
    tags_en: ["Microsoft 365", "Outlook", "New Outlook", "Planner", "Cross-Tenant", "Email Recall"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/14/microsofts-new-outlook-is-becoming-your-task-manager-with-built-in-planner-integration", lang: "EN" }
    ]
  },
  {
    id: "20260714-026",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 搜尋功能重大更新：移除廣告、精簡介面並強化本地內容優先權",
    summary: "微軟透過逐步推送的更新，大幅優化了 Windows 11 的搜尋功能。本次更新主要目標是去除過去過度整合的 Bing 廣告、MSN 雜訊和非原生 Web 內容，讓使用者能獲得更乾淨、更專注的搜尋體驗。使用者現在可以透過設定精準控制 Web 搜尋和 Microsoft Store 建議的顯示與否，甚至完全切斷 Bing 的干擾。搜尋結果頁面現在會為每個結果標註來源類型（如應用程式、本地檔案、網頁），並提供更豐富的元數據，例如檔案類型和修改日期。此外，本地應用程式和檔案的搜尋結果現在會優先於 Web 建議，提升了使用者在本地內容查找的效率。功能層面也優化了檔案搜尋，支援更短的字元觸發和子字串匹配，並提升了整體介面流暢度和穩定性。修補建議是建議使用者留意系統更新，並在設定中調整搜尋偏好，以獲得最佳的本地化搜尋體驗。",
    tags: ["Windows 11", "Windows Search", "Bing", "使用者介面優化", "本地搜尋", "系統更新"],
    title_en: "Major Update to Windows 11 Search Functionality: Removing Ads, Streamlining Interface, and Enhancing Local Content Priority",
    summary_en: "Microsoft has significantly optimized the Windows 11 search functionality through phased updates. The primary goal of this update is to remove previously over-integrated Bing advertisements, MSN news, and non-native web content, allowing users to achieve a cleaner, more focused search experience. Users can now precisely control the display of web search and Microsoft Store suggestions via settings, and can even completely block Bing interference. The search results page now labels the source type for each result (e.g., application, local file, webpage) and provides richer metadata, such as file type and modification date. Furthermore, search results for local applications and files now take precedence over web suggestions, improving the efficiency of finding local content. Functionally, file search has also been optimized to support shorter character triggers and substring matching, while overall interface fluidity and stability have been enhanced. The patch advises users to monitor system updates and adjust search preferences in the settings to achieve the optimal localized search experience.",
    tags_en: ["Windows 11", "Windows Search", "Bing", "User Interface Optimization", "Local Search", "System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/14/microsoft-just-decluttered-windows-11-search-after-years-of-msn-tiles-ads-and-trivia", lang: "EN" }
    ]
  },
  {
    id: "20260714-027",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟警告 AI 攻擊加速：Windows 11 漏洞修補期縮短至三日內，籲企業勿延遲更新",
    summary: "隨著攻擊者利用人工智慧（AI）技術，能在數小時內分析並開發出 Windows 11 的漏洞利用程式，微軟（Microsoft）已大幅提高警覺。公司警告，企業和使用者不應再將安全更新延遲超過三天。微軟指出，自今年四月以來，已修補的漏洞數量持續增加，顯示安全修補的必要性極高。為應對此趨勢，微軟不僅開發了名為 MDASH 的 AI 系統來主動尋找和修補漏洞，該系統甚至成功識別了 `tcpip.sys` 中的遠端可利用的 Use-After-Free 漏洞。此外，微軟已更新建議，要求部署 Windows 更新的期限應縮短至三日內，甚至建議設定為零到一日，以確保系統能及時修補漏洞，降低被 AI 攻擊的風險。IT 管理員應儘快利用 Group Policy Editor 或其他機制，確保更新的即時性。",
    tags: ["Microsoft", "Windows 11", "AI 攻擊", "安全更新", "Patch Tuesday", "MDASH", "漏洞修補"],
    title_en: "Microsoft Warns AI Attacks Accelerate: Windows 11 Patch Window Reduced to Three Days, Urging Enterprises Not to Delay Updates",
    summary_en: "As attackers utilize Artificial Intelligence (AI) technology to analyze and develop exploits for Windows 11 within hours, Microsoft has significantly raised its alert level. The company warns that enterprises and users should no longer delay security updates beyond three days. Microsoft points out that the number of patched vulnerabilities since April of this year has continuously increased, demonstrating the critical necessity of security patching. To address this trend, Microsoft has not only developed an AI system called MDASH to proactively search for and patch vulnerabilities, but this system also successfully identified a remotely exploitable Use-After-Free vulnerability in `tcpip.sys`. Furthermore, Microsoft has updated its recommendations, requiring that the deployment deadline for Windows updates be reduced to three days, and even suggesting a timeframe of zero to one day, to ensure systems can patch vulnerabilities promptly and mitigate the risk of AI attacks. IT administrators should use Group Policy Editor or other mechanisms to ensure the immediacy of updates.",
    tags_en: ["Microsoft", "Windows 11", "AI Attacks", "Security Updates", "Patch Tuesday", "MDASH", "Vulnerability Patching"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/14/microsoft-admits-ai-is-exploiting-windows-11-bugs-in-hours-warns-against-delaying-updates-past-3-days", lang: "EN" }
    ]
  },
  {
    id: "20260714-028",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟警告：Windows App Store 存在資訊洩露漏洞，授權攻擊者可本地竊取資料",
    summary: "本篇報告指出一個名為 CVE-2026-49165 的安全漏洞，影響微軟的 Windows App Store。此漏洞屬於「未初始化資源使用」（CWE-908），允許已授權的攻擊者在本地環境執行攻擊，從而洩露系統資訊。攻擊的複雜度與權限要求極低（AV:L/AC:L/PR:L/UI:N/S:U），僅需本地存取權限即可觸發。受影響的產品範圍廣泛，包括 Windows 10 的多個版本（如 1607, 1809, 21H2, 22H2）以及 Windows 11 的多個版本（如 24H2, 25H2, 26H1），甚至包含 Windows Server 2016。建議使用者應立即查閱微軟官方的安全更新指南，並升級至修補版本，以修復此資訊洩露風險。",
    tags: ["Microsoft", "Windows App Store", "CVE-2026-49165", "Windows 10", "Windows 11", "資訊洩露"],
    title_en: "Microsoft Warning: Windows App Store Contains Information Leak Vulnerability, Allowing Authorized Attackers to Locally Steal Data",
    summary_en: "This report points out a security vulnerability named CVE-2026-49165, affecting Microsoft's Windows App Store. This vulnerability is classified as 'Use of Uninitialized Resource' (CWE-908), which allows authorized attackers to execute attacks locally, thereby leaking system information. The attack complexity and required privileges are extremely low (AV:L/AC:L/PR:L/UI:N/S:U), requiring only local access to be triggered. The affected product scope is wide, including multiple versions of Windows 10 (such as 1607, 1809, 21H2, 22H2), multiple versions of Windows 11 (such as 24H2, 25H2, 26H1), and even Windows Server 2016. Users are advised to immediately consult Microsoft's official security update guidelines and upgrade to the patched version to mitigate this information leakage risk.",
    tags_en: ["Microsoft", "Windows App Store", "CVE-2026-49165", "Windows 10", "Windows 11", "Information Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-49165", lang: "EN" }
    ]
  },
  {
    id: "20260714-029",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟 Windows 語音功能漏洞 CVE-2026-49171：授權攻擊者可進行本地權限提升",
    summary: "本漏洞 CVE-2026-49171 存在於微軟的 Windows 語音功能（Windows Speech）。攻擊者若具備授權存取權限，可利用此漏洞執行使用後釋放（Use After Free）的技術缺陷，從而提升本地權限。此漏洞的攻擊向量（AV）為本地（L），攻擊複雜度（AC）為高（H），但預設權限（PR）為低（L），影響程度（I）和機密性（C）皆為高（H）。受影響的產品涵蓋多個版本的 Windows 10 和 Windows 11，包括但不限於版本 1607、1809、21H2、22H2，以及最新的 24H2、25H2 和 26H1 等。微軟已提供修補指南，建議所有用戶應立即更新至修補版本，以防範授權攻擊者利用此缺陷進行本地權限提升。建議用戶應密切關注微軟的官方安全公告，並確保系統及相關組件保持最新狀態。",
    tags: ["Microsoft", "Windows", "CVE-2026-49171", "Use After Free", "本地權限提升", "Windows Speech"],
    title_en: "Microsoft Windows Speech Function Vulnerability CVE-2026-49171: Authorized Attackers Can Perform Local Privilege Escalation",
    summary_en: "The vulnerability CVE-2026-49171 exists in Microsoft's Windows Speech functionality (Windows Speech). If an attacker possesses authorized access, they can exploit this vulnerability, which utilizes a Use After Free technical flaw, to achieve local privilege escalation. The attack vector (AV) is Local (L), the attack complexity (AC) is High (H), but the privilege required (PR) is Low (L). Both the impact (I) and confidentiality (C) are rated High (H). Affected products include multiple versions of Windows 10 and Windows 11, including but not limited to versions 1607, 1809, 21H2, 22H2, as well as the latest 24H2, 25H2, and 26H1. Microsoft has provided remediation guidelines, advising all users to immediately update to the patched version to prevent authorized attackers from exploiting this flaw for local privilege escalation. Users are advised to closely monitor Microsoft's official security announcements and ensure that their systems and related components are kept up to date.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-49171", "Local Privilege Escalation", "Windows Speech"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-49171", lang: "EN" }
    ]
  },
  {
    id: "20260714-030",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows DNS 服務存在未經身份驗證的關鍵功能漏洞 (CVE-2026-49174)",
    summary: "本漏洞（CVE-2026-49174）存在於 Microsoft Windows 系統的 DNS 服務中，屬於未經身份驗證的關鍵功能缺陷。這允許授權攻擊者在本地執行篡改行為，可能導致系統資料或服務被惡意修改。該漏洞的技術細節顯示，攻擊向量為本地（L），權限要求為本地（L），且影響程度為高（I:H）。受影響的產品範圍廣泛，包括 Windows 10 (1809, 21H2, 22H2)、Windows 11 (24H2, 25H2, 26H1) 以及多個版本的 Windows Server (2019, 2022)。修補建議是立即更新至微軟官方提供的修補版本，以消除此本地權限的重大風險。建議所有使用上述作業系統的組織應優先進行系統修補與安全配置審核。",
    tags: ["Microsoft", "Windows", "DNS", "CVE-2026-49174", "Windows Server", "本地攻擊"],
    title_en: "Microsoft Windows DNS Service Has Unauthenticated Critical Vulnerability (CVE-2026-49174)",
    summary_en: "This vulnerability (CVE-2026-49174) resides in the DNS service of Microsoft Windows systems and is an unauthenticated critical flaw. This allows an authorized attacker to perform tampering actions locally, potentially leading to the malicious modification of system data or services. The technical details of the vulnerability show that the attack vector is local (L), the required privileges are local (L), and the impact is high (I:H). The affected product scope is wide, including Windows 10 (1809, 21H2, 22H2), Windows 11 (24H2, 25H2, 26H1), and multiple versions of Windows Server (2019, 2022). The recommended fix is to immediately update to the patch version provided by Microsoft to eliminate this significant local privilege risk. Organizations using the aforementioned operating systems are advised to prioritize system patching and security configuration review.",
    tags_en: ["Microsoft", "Windows", "DNS", "CVE-2026-49174", "Windows Server", "Local Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-49174", lang: "EN" }
    ]
  },
  {
    id: "20260714-031",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：Windows App Store 存在競態條件漏洞，可能允許權限提升",
    summary: "本漏洞（CVE-2026-49784）存在於 Microsoft Windows App Store 的執行機制中，屬於「不當同步的共享資源的並行執行」（race condition）類型。若攻擊者能利用此漏洞，即使僅需授權存取，也可能在本地提升權限。該漏洞影響範圍廣泛，涵蓋多個 Windows 版本的用戶端與伺服器，包括 Windows 10 (1607, 1809, 21H2, 22H2) 以及 Windows 11 (24H2, 25H2, 26H1)，甚至包括 Windows Server 2016。建議所有用戶及系統管理員應立即參考 Microsoft 安全公告，並將系統更新至修補版本，以防止權限被未授權提升。由於原文未提供具體修補版本號，請以官方 MSRC 指引為準。",
    tags: ["Microsoft", "Windows App Store", "CVE-2026-49784", "權限提升", "競態條件", "Windows 10", "Windows 11"],
    title_en: "Warning: Windows App Store Contains Race Condition Vulnerability, Potentially Allowing Privilege Escalation",
    summary_en: "This vulnerability (CVE-2026-49784) exists within the execution mechanism of the Microsoft Windows App Store and is classified as a 'race condition' involving improperly synchronized shared resources. If an attacker can exploit this vulnerability, they may be able to elevate privileges locally, even if only authorized access is required. The vulnerability affects a wide range of Windows versions, including Windows 10 (1607, 1809, 21H2, 22H2), Windows 11 (24H2, 25H2, 26H1), and even Windows Server 2016. All users and system administrators are advised to immediately refer to the Microsoft security advisory and update their systems to the patched version to prevent unauthorized privilege escalation. Since the original text did not provide specific patch version numbers, users should follow the official MSRC guidelines.",
    tags_en: ["Microsoft", "Windows App Store", "CVE-2026-49784", "Privilege Escalation", "Race Condition", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-49784", lang: "EN" }
    ]
  },
  {
    id: "20260714-032",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟 Windows App Store 存在競態條件漏洞 (CVE-2026-50356)，可能導致本地權限提升",
    summary: "本漏洞 (CVE-2026-50356) 存在於微軟的 Windows App Store 應用程式中。這是一個利用共享資源時同步不當所造成的競態條件 (race condition) 漏洞。攻擊者若能利用此漏洞，可以在本地環境提升權限。該漏洞影響範圍廣泛，涵蓋多個版本的 Windows 10 和 Windows 11，以及部分 Windows Server 版本。受影響的版本包括但不限於 Windows 10 Version 22H2、Windows 11 Version 24H2 等。修補建議是立即更新到微軟官方提供的修補版本，以消除此安全風險。由於原文未提供 CVSS 分數或具體影響台數，建議使用者密切關注微軟官方的安全公告，並儘速進行系統更新。",
    tags: ["Microsoft", "Windows App Store", "CVE-2026-50356", "競態條件", "本地權限提升", "Windows 10", "Windows 11"],
    title_en: "Microsoft Windows App Store Contains Race Condition Vulnerability (CVE-2026-50356), Potentially Leading to Local Privilege Escalation",
    summary_en: "This vulnerability (CVE-2026-50356) exists in Microsoft's Windows App Store application. It is a race condition vulnerability caused by improper synchronization when utilizing shared resources. If an attacker can exploit this vulnerability, they can elevate privileges in a local environment. The vulnerability affects a wide range of versions, including but not limited to Windows 10 Version 22H2, Windows 11 Version 24H2, and certain Windows Server versions. The recommended remediation is to immediately update to the patch version provided by Microsoft to eliminate this security risk. Since the original text did not provide a CVSS score or specific affected counts, users are advised to closely monitor official Microsoft security announcements and perform system updates promptly.",
    tags_en: ["Microsoft", "Windows App Store", "CVE-2026-50356", "Race Condition", "Local Privilege Escalation", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-50356", lang: "EN" }
    ]
  },
  {
    id: "20260714-033",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：微軟 Windows Media Foundation 存在堆緩衝區溢位漏洞 (CVE-2026-54993)",
    summary: "本漏洞 (CVE-2026-54993) 是微軟 Windows Media Foundation 模組中的堆緩衝區溢位 (Heap-based buffer overflow) 漏洞。若未修補，攻擊者可透過遠端、低複雜度、無權限的攻擊向量，在本地執行惡意程式碼，造成系統嚴重風險。受影響的系統範圍廣泛，包括 Windows 10 (1809, 21H2, 22H2) 和 Windows 11 (24H2, 25H2, 26H1)，以及 Windows Server 2019 和 Windows Server 2022 等伺服器作業系統。微軟已提供修補措施，建議所有使用上述版本的用戶應立即更新至最新的安全版本，以防止被未經授權的攻擊者利用。由於此漏洞的影響程度高，建議系統管理員應優先修補。",
    tags: ["Microsoft", "Windows Media Foundation", "CVE-2026-54993", "堆緩衝區溢位", "Windows 10", "Windows 11"],
    title_en: "Warning: Microsoft Windows Media Foundation has Heap-based Buffer Overflow Vulnerability (CVE-2026-54993)",
    summary_en: "This vulnerability (CVE-2026-54993) is a Heap-based buffer overflow vulnerability in the Microsoft Windows Media Foundation module. If unpatched, an attacker can execute malicious code locally via a remote, low-complexity, and unauthenticated attack vector, causing severe system risk. The affected systems are widespread, including Windows 10 (1809, 21H2, 22H2) and Windows 11 (24H2, 25H2, 26H1), as well as server operating systems like Windows Server 2019 and Windows Server 2022. Microsoft has provided a patch, and all users running the aforementioned versions are advised to update immediately to the latest secure version to prevent exploitation by unauthorized attackers. Due to the high impact of this vulnerability, system administrators are advised to prioritize patching.",
    tags_en: ["Microsoft", "Windows Media Foundation", "CVE-2026-54993", "Heap-based buffer overflow", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-54993", lang: "EN" }
    ]
  },
  {
    id: "20260714-034",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows Media Foundation 存在堆疊緩衝溢出漏洞 (CVE-2026-58610)，可能允許遠端程式碼執行",
    summary: "本漏洞 (CVE-2026-58610) 是 Microsoft Windows Media Foundation 模組中的堆疊緩衝溢出 (Heap-based buffer overflow) 漏洞。攻擊者若能利用此漏洞，可以在未經授權的情況下執行本地程式碼 (execute code locally)。此漏洞影響範圍廣泛，涵蓋多個版本的 Windows 10 和 Windows 11，包括但不限於 Windows 10 Version 22H2、Windows 11 Version 24H2 等。攻擊向量為本地 (Local) 或低權限 (Low)，但技術影響度為總體 (Total)。建議受影響的組織應立即透過 Microsoft 官方發布的修補程式進行更新，以修復此核心元件的漏洞。使用者應特別注意系統版本是否落後於官方修補的最低版本。",
    tags: ["Microsoft", "Windows Media Foundation", "CVE-2026-58610", "堆疊緩衝溢出", "Windows 10", "Windows 11"],
    title_en: "Microsoft Windows Media Foundation Contains Stack Buffer Overflow Vulnerability (CVE-2026-58610), Potentially Allowing Remote Code Execution",
    summary_en: "This vulnerability (CVE-2026-58610) is a stack buffer overflow vulnerability in the Microsoft Windows Media Foundation module. If an attacker can exploit this vulnerability, they can execute code locally without authorization. This vulnerability affects a wide range of Windows 10 and Windows 11 versions, including but not limited to Windows 10 Version 22H2 and Windows 11 Version 24H2. The attack vector is Local or Low privilege, but the technical impact is Total. Affected organizations are advised to immediately update using official Microsoft patches to fix the vulnerability in this core component. Users should pay special attention to whether their system version is older than the minimum version patched by the official update.",
    tags_en: ["Microsoft", "Windows Media Foundation", "CVE-2026-58610", "Stack Buffer Overflow", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58610", lang: "EN" }
    ]
  },
  {
    id: "20260714-035",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：微軟Windows搜尋元件存在權限提升漏洞 (CVE-2026-50373)",
    summary: "本漏洞CVE-2026-50373存在於微軟的Windows搜尋元件中，屬於不當的存取控制（CWE-284）。該漏洞允許已授權的攻擊者在本地系統上提升權限。根據CVSS v4.0評分，攻擊向量（AV）為本地（L），攻擊複雜度（AC）為本地（L），權限要求（PR）為本地（L），使用者介面（UI）為非互動（N），範圍（S）為本地（U），機密性（C）和完整性（I）為高（H），可用性（A）為高（H）。受影響的產品範圍廣泛，包括Windows 10 (1809, 21H2, 22H2)、Windows 11 (24H2, 25H2, 26H1) 以及Windows Server 2019和Windows Server 2022等版本。建議所有使用者應立即參考微軟官方的安全更新指南，針對受影響的版本進行修補，以防止權限被未授權提升。",
    tags: ["Microsoft", "Windows", "CVE-2026-50373", "權限提升", "Windows Search", "資安漏洞"],
    title_en: "Warning: Privilege Escalation Vulnerability in Microsoft Windows Search Component (CVE-2026-50373)",
    summary_en: "The vulnerability CVE-2026-50373 exists in Microsoft's Windows Search component and is classified as Improper Access Control (CWE-284). This vulnerability allows an authenticated attacker to escalate privileges on a local system. Based on the CVSS v4.0 scoring, the Attack Vector (AV) is Local (L), Attack Complexity (AC) is Low (L), Privileges Required (PR) is Low (L), User Interface (UI) is None (N), Scope (S) is Unchanged (U), and Confidentiality (C) and Integrity (I) are High (H), while Availability (A) is High (H). The affected product scope is wide, including Windows 10 (1809, 21H2, 22H2), Windows 11 (24H2, 25H2, 26H1), and versions like Windows Server 2019 and Windows Server 2022. All users are advised to immediately refer to Microsoft's official security update guidelines and patch affected versions to prevent unauthorized privilege escalation.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-50373", "Privilege Escalation", "Windows Search", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-50373", lang: "EN" }
    ]
  },
  {
    id: "20260714-036",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft 宣布 Windows 系統面臨 Use-after-free 漏洞，可能導致本地權限提升",
    summary: "本漏洞（CVE-2026-50476）為 Microsoft Windows 系統中的 Use-after-free 類型安全問題，允許已授權的攻擊者在本地執行攻擊，從而提升權限。此漏洞的攻擊向量為本地（L），攻擊複雜度（AC）為高（H），但權限要求（PR）為低（L），影響嚴重性（C:H, I:H, A:H）極高。受影響範圍涵蓋多個版本的 Windows 10 和 Windows 11，包括但不限於 1607、1809、21H2、22H2，以及最新的 24H2、25H2 和 26H1 版本，甚至包括 Windows Server 2012 等伺服器作業系統。Microsoft 已提供詳細的修補資訊，建議所有用戶應立即更新至修補版本，以避免遭受本地權限提升的風險。由於此漏洞影響範圍廣泛，建議系統管理員應優先檢查並修補所有受影響的 Windows 系統。",
    tags: ["Microsoft", "Windows", "CVE-2026-50476", "Use-after-free", "本地權限提升", "Windows 10", "Windows 11"],
    title_en: "Microsoft Announces Use-after-free Vulnerability in Windows System, Potentially Leading to Local Privilege Escalation",
    summary_en: "This vulnerability (CVE-2026-50476) is a Use-after-free type security flaw in Microsoft Windows systems, which allows an authorized attacker to execute a local attack and thereby escalate privileges. The attack vector is local (L), the attack complexity (AC) is high (H), but the required privilege (PR) is low (L), and the impact severity (C:H, I:H, A:H) is extremely high. The affected scope covers multiple versions of Windows 10 and Windows 11, including but not limited to 1607, 1809, 21H2, 22H2, and the latest versions 24H2, 25H2, and 26H1, and even server operating systems like Windows Server 2012. Microsoft has provided detailed patch information and recommends that all users immediately update to the patched version to avoid the risk of local privilege escalation. Due to the widespread impact of this vulnerability, system administrators are advised to prioritize checking and patching all affected Windows systems.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-50476", "Local Privilege Escalation", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-50476", lang: "EN" }
    ]
  },
  {
    id: "20260714-037",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警惕！微軟Windows DNS存在權限控制缺陷，授權攻擊者可進行本地篡改",
    summary: "本漏洞（CVE-2026-50495）存在於微軟的Windows DNS服務中，屬於不當的存取控制（CWE-284）。攻擊向量為本地（L），攻擊複雜度低（L），且無需使用者互動（N）。若攻擊者已取得本地授權，可利用此缺陷在本地執行篡改行為。此漏洞影響範圍廣泛，涵蓋Windows 10（包括1809、21H2、22H2等版本）以及Windows 11（包括24H2、25H2、26H1等版本），甚至包括Windows Server 2019和Windows Server 2022等伺服器作業系統。微軟已提供官方修補指南，建議所有受影響的用戶應立即透過官方渠道更新到最新的安全版本，以修補此權限控制缺陷，防止本地惡意篡改。",
    tags: ["Microsoft", "Windows", "DNS", "CVE-2026-50495", "權限控制", "Windows Server"],
    title_en: "Alert! Microsoft Windows DNS has a privilege control flaw, allowing authorized attackers to perform local tampering",
    summary_en: "This vulnerability (CVE-2026-50495) exists in Microsoft's Windows DNS service and is classified as improper access control (CWE-284). The attack vector is local (L), the attack complexity is low (L), and no user interaction is required (N). If an attacker has obtained local authorization, they can exploit this flaw to perform local tampering. This vulnerability affects a wide range of systems, including Windows 10 (including versions 1809, 21H2, 22H2, etc.), Windows 11 (including versions 24H2, 25H2, 26H1, etc.), and even server operating systems like Windows Server 2019 and Windows Server 2022. Microsoft has provided official patch guidelines, recommending that all affected users immediately update through official channels to the latest secure version to fix this privilege control flaw and prevent local malicious tampering.",
    tags_en: ["Microsoft", "Windows", "DNS", "CVE-2026-50495", "Privilege Control", "Windows Server"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-50495", lang: "EN" }
    ]
  },
  {
    id: "20260714-038",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows Media Foundation 存在堆疊緩衝溢出漏洞 (CVE-2026-56189)，允許本地程式碼執行",
    summary: "本漏洞 (CVE-2026-56189) 存在於 Microsoft 的 Windows Media Foundation 元件中，屬於堆疊緩衝溢出 (Heap-based buffer overflow) 類型。若攻擊者能利用此漏洞，可執行本地程式碼，造成系統的嚴重安全風險。該漏洞影響範圍廣泛，涵蓋多個版本的 Windows 10 和 Windows 11，包括但不限於 Windows 10 Version 22H2、Windows 11 Version 24H2 等。攻擊向量為本地 (Local)，權限要求為低權限 (Low)，但技術影響度為極高 (Total)。建議受影響的用戶應立即透過 Microsoft 官方發布的更新修補程式進行升級，以修復此安全漏洞，避免遭受未經授權的程式碼執行攻擊。",
    tags: ["Microsoft", "Windows Media Foundation", "CVE-2026-56189", "堆疊緩衝溢出", "Windows 10", "Windows 11"],
    title_en: "Microsoft Windows Media Foundation Contains Stack Buffer Overflow Vulnerability (CVE-2026-56189), Allowing Local Code Execution",
    summary_en: "This vulnerability (CVE-2026-56189) exists in Microsoft's Windows Media Foundation component and is classified as a stack buffer overflow. If an attacker can exploit this vulnerability, they can execute local code, posing a severe security risk to the system. The vulnerability affects a wide range of versions of Windows 10 and Windows 11, including but not limited to Windows 10 Version 22H2 and Windows 11 Version 24H2. The attack vector is Local, and the required privilege is Low, but the technical impact is Total. Affected users are advised to immediately upgrade using the official update patch released by Microsoft to fix this security flaw and prevent unauthorized code execution attacks.",
    tags_en: ["Microsoft", "Windows Media Foundation", "CVE-2026-56189", "Stack Buffer Overflow", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-56189", lang: "EN" }
    ]
  },
  {
    id: "20260714-039",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：Microsoft Windows Codecs 庫存在未初始化資源漏洞 (CVE-2026-57083)",
    summary: "本漏洞（CVE-2026-57083）存在於 Microsoft Windows Codecs Library，允許未經授權的攻擊者透過利用未初始化資源，在本地揭露資訊。此漏洞的攻擊向量為本地（Local），且無需權限（No Privileges Required）。受影響範圍廣泛，涵蓋多個版本的 Windows 10 和 Windows 11，以及部分 Windows Server 版本。Microsoft 已提供詳細的修補資訊，建議所有使用上述版本系統的用戶，應立即透過官方更新機制，將作業系統升級至修補版本，以避免資訊洩露風險。由於原文未提供 CVSS 分數或具體修補版本，請務必參考 Microsoft 安全公告進行版本比對。",
    tags: ["Microsoft", "Windows", "CVE-2026-57083", "Windows Codecs Library", "資訊洩露", "Windows 10", "Windows 11"],
    title_en: "Warning: Microsoft Windows Codecs Library has Uninitialized Resource Vulnerability (CVE-2026-57083)",
    summary_en: "This vulnerability (CVE-2026-57083) exists in the Microsoft Windows Codecs Library and allows unauthorized attackers to disclose information locally by exploiting uninitialized resources. The attack vector is Local, and no privileges are required. The scope of impact is wide, covering multiple versions of Windows 10 and Windows 11, as well as certain Windows Server versions. Microsoft has provided detailed patch information, and all users of the aforementioned versions are advised to immediately upgrade their operating systems to the patched version through official update mechanisms to prevent information leakage risks. Since the original text did not provide a CVSS score or specific patched versions, please refer to the Microsoft security bulletin for version comparison.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-57083", "Windows Codecs Library", "Information Leakage", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57083", lang: "EN" }
    ]
  },
  {
    id: "20260714-040",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows Media Foundation 存在堆疊緩衝區溢出漏洞 (CVE-2026-57087)，可透過網路遠端執行程式碼",
    summary: "本漏洞 (CVE-2026-57087) 存在於 Microsoft Windows Media Foundation 組件中，屬於堆疊緩衝區溢出 (Heap-based buffer overflow) 類型。攻擊者若能利用此漏洞，可透過網路 (Network) 遠端執行程式碼 (RCE)，且攻擊難度低，影響程度高。受影響的系統包括多個版本的 Windows 10 和 Windows 11，以及 Windows Server 2016 等。建議所有使用者應立即透過 Microsoft 官方渠道，更新至修補版本，以防止遭受未經授權的遠端攻擊。建議檢查產品版本是否在官方列出的受影響範圍內，並儘速進行系統修補。",
    tags: ["Microsoft", "Windows Media Foundation", "CVE-2026-57087", "堆疊緩衝區溢出", "Windows 10", "Windows 11"],
    title_en: "Microsoft Windows Media Foundation Has Stack Buffer Overflow Vulnerability (CVE-2026-57087), Allowing Remote Code Execution",
    summary_en: "This vulnerability (CVE-2026-57087) exists in the Microsoft Windows Media Foundation component and is classified as a Heap-based buffer overflow. If an attacker exploits this vulnerability, they can achieve Remote Code Execution (RCE) over the network, with low difficulty and high impact. Affected systems include multiple versions of Windows 10, Windows 11, and Windows Server 2016. All users are advised to immediately update to the patched version through official Microsoft channels to prevent unauthorized remote attacks. Users should check if their product version falls within the officially listed affected scope and patch the system promptly.",
    tags_en: ["Microsoft", "Windows Media Foundation", "CVE-2026-57087", "Stack Buffer Overflow", "Windows 10", "Windows 11"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57087", lang: "EN" }
    ]
  },
  {
    id: "20260714-041",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：Microsoft Windows Media Foundation 存在堆緩衝溢出漏洞，可透過網路遠端執行程式碼",
    summary: "本漏洞（CVE-2026-57090）是 Microsoft Windows Media Foundation 模組中的堆緩衝溢出（Heap-based buffer overflow）問題。攻擊者若能透過網路（Network）觸發，可導致遠端執行程式碼（RCE）。該漏洞的攻擊向量為網路（AV:N），無需使用者互動（UI:R），且權限要求為低（PR:N）。受影響的產品涵蓋多個版本的 Windows 10 和 Windows 11，以及 Windows Server 2016 等。修補建議是立即更新所有受影響的 Windows 作業系統版本，特別是那些版本號小於指定修補版本（例如 Windows 11 24H2 的 10.0.26100.8875 以下）。建議使用者密切關注 Microsoft 的官方安全公告，並儘速進行系統修補。",
    tags: ["Microsoft", "Windows", "CVE-2026-57090", "Media Foundation", "堆緩衝溢出", "RCE"],
    title_en: "Warning: Microsoft Windows Media Foundation has a heap buffer overflow vulnerability, allowing for remote code execution",
    summary_en: "This vulnerability (CVE-2026-57090) is a heap-based buffer overflow issue in the Microsoft Windows Media Foundation module. If triggered over the network, an attacker can achieve remote code execution (RCE). The vulnerability has a network attack vector (AV:N), requires no user interaction (UI:N), and has low privilege requirements (PR:N). Affected products include multiple versions of Windows 10 and Windows 11, as well as Windows Server 2016. The recommended fix is to immediately update all affected Windows operating system versions, especially those versions with build numbers lower than the specified patch version (e.g., below 10.0.26100.8875 for Windows 11 24H2). Users are advised to closely monitor official Microsoft security announcements and apply system patches promptly.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-57090", "Media Foundation", "Heap Buffer Overflow", "RCE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57090", lang: "EN" }
    ]
  },
  {
    id: "20260714-042",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Microsoft Windows Media Foundation 存在堆疊緩衝溢出漏洞，可透過網路遠端執行程式碼",
    summary: "本漏洞為 CVE-2026-57094，影響 Microsoft Windows Media Foundation 元件。此為堆疊緩衝溢出（Heap-based buffer overflow）漏洞，允許未經授權的攻擊者透過網路（Network）遠端執行程式碼（RCE）。該漏洞的攻擊向量為網路，攻擊複雜度低（AC:L），權限要求為未授權（PR:N），並能導致高機密性（C:H）、高完整性（I:H）和高可用性（A:H）的影響。受影響的產品涵蓋多個版本的 Windows 10 和 Windows 11，以及 Windows Server 2016 等。建議所有使用者應立即參考 Microsoft 官方的安全更新指南，升級至修補版本，以防止遭受遠端攻擊。由於漏洞影響範圍廣泛，建議企業和系統管理員應優先修補所有受影響的 Windows 系統。",
    tags: ["Microsoft", "Windows", "CVE-2026-57094", "Media Foundation", "堆疊緩衝溢出", "RCE"],
    title_en: "Microsoft Windows Media Foundation has a stack buffer overflow vulnerability, allowing for remote code execution",
    summary_en: "This vulnerability is CVE-2026-57094, affecting the Microsoft Windows Media Foundation component. It is a stack buffer overflow vulnerability that allows unauthorized attackers to execute code remotely over the network (RCE). The vulnerability's attack vector is network, attack complexity is low (AC:L), and it requires no privileges (PR:N), potentially leading to high confidentiality (C:H), high integrity (I:H), and high availability (A:H) impact. Affected products include multiple versions of Windows 10 and Windows 11, as well as Windows Server 2016. All users are advised to immediately refer to the official Microsoft security update guidelines and upgrade to the patched version to prevent remote attacks. Due to the wide scope of the vulnerability, enterprises and system administrators are advised to prioritize patching all affected Windows systems.",
    tags_en: ["Microsoft", "Windows", "CVE-2026-57094", "Media Foundation", "Stack Buffer Overflow", "RCE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-57094", lang: "EN" }
    ]
  },
  {
    id: "20260714-043",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟發布創紀錄的 570 個漏洞修補：Windows 11 25H2 進行重大安全更新",
    summary: "微軟於 2026 年 7 月發布了 Patch Tuesday 更新，修補了創紀錄的 570 個安全漏洞，這是相較於前一年 7 月的 316% 增長。本次更新升級了 Windows 11 25H2 至 Build 26200.8875（KB5101650），涵蓋了核心元件如核心、Win32k、NTFS、遠端桌面、SMB 等幾乎所有 Windows 組件。微軟指出，漏洞數量增加與 AI 技術的發展息息相關，攻擊者正利用 AI 加速漏洞搜尋與利用。為應對此趨勢，微軟使用自研 AI 系統 MDASH 進行漏洞掃描與修補。文章提醒使用者，應立即安裝所有 Windows 更新，不應暫停更新，因為安全風險正因 AI 技術的推動而持續升高。",
    tags: ["Microsoft", "Windows 11", "Patch Tuesday", "CVE", "Win32k", "AI 安全", "KB5101650"],
    title_en: "Microsoft Releases Record 570 Vulnerability Patches: Major Security Update for Windows 11 25H2",
    summary_en: "Microsoft released its Patch Tuesday update in July 2026, patching a record 570 security vulnerabilities, representing a 316% increase compared to July of the previous year. This update upgraded Windows 11 25H2 to Build 26200.8875 (KB5101650), covering nearly all Windows components, including core components such as the kernel, Win32k, NTFS, Remote Desktop, and SMB. Microsoft noted that the increase in vulnerabilities is closely related to the development of AI technology, as attackers are using AI to accelerate vulnerability discovery and exploitation. To address this trend, Microsoft utilized its proprietary AI system, MDASH, for vulnerability scanning and patching. The article reminds users that they should install all Windows updates immediately and not postpone updates, as security risks are continuously escalating due to the advancement of AI technology.",
    tags_en: ["Microsoft", "Windows 11", "Patch Tuesday", "CVE", "Win32k", "AI Security", "KB5101650"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/15/microsoft-patched-a-record-570-windows-11-flaws-in-july-4x-last-year-as-ai-finds-bugs-faster", lang: "EN" }
    ]
  },
  {
    id: "20260714-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增四個已知被利用漏洞：涵蓋SonicWall、微軟ADFS與SharePoint等高風險資安威脅",
    summary: "美國網路安全局（CISA）宣布將四個新的漏洞納入「已知被利用漏洞目錄」（KEV Catalog），這些漏洞均基於已觀察到實際的攻擊利用證據。本次新增的漏洞包括：SonicWall SMA1000 的遠端伺服器偽造（CVE-2026-15409）和程式碼注入（CVE-2026-15410）；以及微軟 Active Directory Federation Services（CVE-2026-56155）和 SharePoint Server（CVE-2026-56164）的權限控制與未經身份驗證的關鍵功能漏洞。CISA指出，此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業構成重大風險。此外，CISA也強調了《強制性營運指令》（BOD 26-04）的規定，要求聯邦機構必須優先修補KCV目錄中的高風險漏洞。雖然指令僅適用於聯邦部門，但CISA鼓勵所有組織應採取風險導向的漏洞管理策略，優先修補目錄中的漏洞，以降低整體資安風險。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-15409", "CVE-2026-56164", "SonicWall", "Microsoft", "漏洞管理"],
    title_en: "CISA Adds Four Known Exploited Vulnerabilities: High-Risk Threats Affecting SonicWall, Microsoft ADFS, and SharePoint",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced the inclusion of four new vulnerabilities in its \"Known Exploited Vulnerabilities Catalog\" (KEV Catalog). These vulnerabilities are based on observed evidence of actual attack exploitation. The newly added vulnerabilities include: remote server spoofing (CVE-2026-15409) and code injection (CVE-2026-15410) affecting the SonicWall SMA1000; as well as privilege control and unauthenticated critical function vulnerabilities in Microsoft Active Directory Federation Services (CVE-2026-56155) and SharePoint Server (CVE-2026-56164). CISA noted that such vulnerabilities are common attack vectors used by malicious actors, posing a significant risk to federal entities. Furthermore, CISA highlighted the provisions of the \"Mandatory Operational Directive\" (BOD 26-04), which requires federal agencies to prioritize patching high-risk vulnerabilities listed in the KCV catalog. Although the directive only applies to federal departments, CISA encourages all organizations to adopt a risk-based vulnerability management strategy, prioritizing patching vulnerabilities in the catalog to mitigate overall cybersecurity risk.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-15409", "CVE-2026-56164", "SonicWall", "Microsoft", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/07/14/cisa-adds-four-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260714-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：多個SharePoint伺服器漏洞遭積極利用，建議立即修補並強化安全配置",
    summary: "美國網路安全局（CISA）警告，多個SharePoint Server漏洞正遭受積極利用，威脅攻擊者取得未經授權的存取權。受影響的產品涵蓋所有支援的本機部署SharePoint Server版本（包括Subscription Edition、2019和2016）。這些漏洞包括CVE-2026-32201、CVE-2026-45659和CVE-2026-56164，攻擊者可利用這些漏洞執行遠端程式碼（RCE），並進行後續活動，例如竊取IIS機器金鑰或執行反序列化技術以維持持久性並部署惡意軟體。CISA已將這些漏洞列入已知遭利用漏洞目錄（KEV）。為修復風險，組織應立即套用微軟的最新修補程式，並啟用AMSI整合，特別是設定「完整模式」的請求體掃描。此外，建議實施多層硬化措施，例如限制外部網路存取、建立專門的日誌監控機制，並警惕機器金鑰竊取等入侵跡象。",
    tags: ["SharePoint Server", "CVE-2026-32201", "CVE-2026-45659", "CVE-2026-56164", "RCE", "CISA", "本機部署"],
    title_en: "CISA Warns: Multiple SharePoint Server Vulnerabilities Actively Exploited, Immediate Patching and Security Hardening Recommended",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has warned that multiple SharePoint Server vulnerabilities are being actively exploited, threatening unauthorized access for attackers. Affected products include all supported on-premises deployed SharePoint Server versions (including Subscription Edition, 2019, and 2016). These vulnerabilities include CVE-2026-32201, CVE-2026-45659, and CVE-2026-56164. Attackers can exploit these flaws to execute Remote Code (RCE) and perform subsequent activities, such as stealing IIS machine keys or using deserialization techniques to maintain persistence and deploy malware. CISA has listed these vulnerabilities in its Known Exploited Vulnerabilities (KEV) catalog. To mitigate the risk, organizations must immediately apply Microsoft's latest patches and enable AMSI integration, specifically configuring the request body scan in \"Full Mode.\" Furthermore, implementing multi-layered hardening measures is advised, such as restricting external network access, establishing dedicated log monitoring mechanisms, and remaining vigilant for signs of intrusion, such as machine key theft.",
    tags_en: ["SharePoint Server", "CVE-2026-32201", "CVE-2026-45659", "CVE-2026-56164", "RCE", "CISA", "On-premises"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/07/14/cisa-urges-sharepoint-hardening-after-new-exploitations", lang: "EN" }
    ]
  },
  {
    id: "20260714-046",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟7月修補週發布史上最大更新，包含多個零日漏洞與高風險CVE，強調資安優先級管理",
    summary: "微軟在2026年7月發布了史上規模最大的修補更新，修補了622個獨特的CVE，其中包含三個零日漏洞。本次更新涵蓋了Windows、Office、Edge和SharePoint Server等多個產品線，並包含超過五十個關鍵漏洞。主要的威脅包括：在Active Directory Federation Services的提升權限漏洞（CVE-2026-56155，CVSS: 7.2）和SharePoint Server的提升權限漏洞（CVE-2026-56164，CVSS: 5.3），這兩個漏洞已被CISA列入已知利用漏洞清單。此外，還發現了Windows BitLocker的物理存取繞過漏洞（CVE-2026-50661，CVSS: 6.1）。其他高風險漏洞包括Windows VMSwitch的逃逸漏洞（CVE-2026-57092，CVSS 9.9）和Copilot的遠端程式碼執行漏洞（CVE-2026-48561，CVSS 9.6）。專家指出，面對漏洞數量激增和AI加速的攻擊，組織不能僅依賴CVSS分數，必須將修補重點放在已被利用的漏洞、高風險的產品線（如Windows和Office），並實施持續、高頻率的修補流程，並結合資安情境分析（Context）進行優先級管理。",
    tags: ["Microsoft", "CVE-2026-56155", "CVE-2026-48561", "Patch Tuesday", "零日漏洞", "Active Directory", "CVSS"],
    title_en: "Microsoft Releases Largest Update Ever in July Patch Week, Including Multiple Zero-Day Vulnerabilities and High-Risk CVEs, Emphasizing Security Priority Management",
    summary_en: "Microsoft released its largest patch update to date in July 2026, addressing 622 unique CVEs, including three zero-day vulnerabilities. This update covers multiple product lines, including Windows, Office, Edge, and SharePoint Server, and contains over fifty critical vulnerabilities. Key threats include an elevation of privilege vulnerability in Active Directory Federation Services (CVE-2026-56155, CVSS: 7.2) and an elevation of privilege vulnerability in SharePoint Server (CVE-2026-56164, CVSS: 5.3), both of which have been listed by CISA as known exploited vulnerabilities. Additionally, a physical access bypass vulnerability was found in Windows BitLocker (CVE-2026-50661, CVSS: 6.1). Other high-risk vulnerabilities include an escape vulnerability in Windows VMSwitch (CVE-2026-57092, CVSS 9.9) and a remote code execution vulnerability in Copilot (CVE-2026-48561, CVSS 9.6). Experts point out that given the surge in the number of vulnerabilities and AI-accelerated attacks, organizations cannot rely solely on CVSS scores. Instead, patching efforts must focus on exploited vulnerabilities, high-risk product lines (such as Windows and Office), and implement continuous, high-frequency patching processes, combined with security context analysis for priority management.",
    tags_en: ["Microsoft", "CVE-2026-56155", "CVE-2026-48561", "Patch Tuesday", "Zero-day Vulnerability", "Active Directory", "CVSS"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/records-broken-patch-tuesday-raises-triage-stakes", lang: "EN" }
    ]
  },
  {
    id: "20260714-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 6 GHz Wi-Fi 頻譜的 AFC 系統存在信任漏洞，恐干擾關鍵基礎設施",
    summary: "研究人員指出，用於管理 6 GHz Wi-Fi 頻段、防止其干擾電信塔和公共安全網路的自動頻率協調（AFC）系統存在重大安全弱點。儘管 Wi-Fi 存取點（AP）與 AFC 伺服器之間的通訊受到 TLS 保護，但 AFC 伺服器預設信任來自外部客戶端（如 GPS、GNSS、Wi-Fi 定位、DNS 和 NTP）的數據。攻擊者可以操縱這些輸入，利用這些「非帶外依賴性」進行攻擊，例如偽造 GPS 訊號或地理位置數據，使 AP 向 AFC 伺服器報告錯誤的定位，從而獲取未經授權的頻道和功率分配。此外，攻擊者還可能透過偽造位置或操縱 NTP/DNS，觸發服務拒絕（DoS）攻擊，甚至完全禁用 6 GHz 頻段的運作。研究建議的解決方案包括實施地理圍欄、使用多重位置來源、物理層級的偽造偵測，並更新依賴項，以確保關鍵系統的穩定性。",
    tags: ["6 GHz Wi-Fi", "AFC", "自動頻率協調", "GPS 偽造", "DoS 攻擊", "關鍵基礎設施"],
    title_en: "Research Reveals Trust Vulnerability in 6 GHz Wi-Fi Spectrum AFC Systems, Potentially Disrupting Critical Infrastructure",
    summary_en: "Researchers have pointed out significant security weaknesses in Automatic Frequency Coordination (AFC) systems used to manage the 6 GHz Wi-Fi band and prevent interference with telecommunications towers and public safety networks. Although communication between Wi-Fi Access Points (APs) and the AFC server is protected by TLS, the AFC server inherently trusts data originating from external clients (such as GPS, GNSS, Wi-Fi location, DNS, and NTP). Attackers can manipulate these inputs, exploiting these \"non-out-of-band dependencies\" to launch attacks, such as spoofing GPS signals or geographical location data, causing the AP to report incorrect positioning to the AFC server, thereby obtaining unauthorized channel and power allocations. Furthermore, attackers could trigger Denial-of-Service (DoS) attacks, or even completely disable the operation of the 6 GHz band, by spoofing location or manipulating NTP/DNS. Suggested solutions include implementing geo-fencing, utilizing multiple location sources, physical layer spoofing detection, and updating dependencies to ensure the stability of critical systems.",
    tags_en: ["6 GHz Wi-Fi", "AFC", "Automatic Frequency Coordination", "GPS Spoofing", "DoS Attack", "Critical Infrastructure"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/perimeter/6-ghz-wi-fi-flaws-disrupt-critical-systems", lang: "EN" }
    ]
  },
  {
    id: "20260714-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ClickFix惡意生態系統進化，研究機構建議以YARA結構分析進行防禦",
    summary: "ClickFix是一種社會工程學攻擊手法，透過偽造的錯誤或更新彈出視窗，誘騙使用者手動將惡意指令（通常是PowerShell）複製並貼上執行。這種攻擊模式利用了合法工具和使用者行為，使得傳統的防毒（AV）和端點偵測與回應（EDR）系統難以偵測。隨著攻擊的商業化（MaaS），ClickFix生態系統持續進化，攻擊者不僅使用Lumma Stealer等竊密工具，也擴展到包含DarkGate、XWorm等完整遠端存取木馬（RATs）的交付載體。攻擊者甚至開發出如「CrashFix」等變種，在瀏覽器崩潰後部署誘餌，提高使用者順從性。為應對這種高度規避傳統防禦的威脅，研究人員建議採用YARA結構分析。這種方法不依賴於偵測載荷本身，而是針對ClickFix誘餌頁面固有的HTML結構和行為指紋進行模式匹配，從而達到更可靠的預防效果。",
    tags: ["ClickFix", "社會工程學", "YARA", "PowerShell", "MaaS", "RATs"],
    title_en: "ClickFix Malicious Ecosystem Evolves; Research Institutions Recommend YARA Structure Analysis for Defense",
    summary_en: "ClickFix is a social engineering attack technique that tricks users into manually copying and pasting malicious commands (often PowerShell) through fake error or update pop-up windows. This attack pattern leverages legitimate tools and user behavior, making it difficult for traditional Anti-Virus (AV) and Endpoint Detection and Response (EDR) systems to detect. As the attack becomes commercialized (MaaS), the ClickFix ecosystem continues to evolve. Attackers not only use stealer tools like Lumma Stealer but have also expanded to delivery vectors containing full Remote Access Trojans (RATs) such as DarkGate and XWorm. Attackers have even developed variants like \"CrashFix\" that deploy lures after a browser crash, increasing user compliance. To counter this threat, which highly evades traditional defenses, researchers recommend adopting YARA structure analysis. This method does not rely on detecting the payload itself, but rather performs pattern matching on the inherent HTML structure and behavioral fingerprints of the ClickFix lure page, achieving more reliable preventative effects.",
    tags_en: ["ClickFix", "Social Engineering", "YARA", "PowerShell", "MaaS", "RATs"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/clickfixs-ecosystem-demands-new-defense", lang: "EN" }
    ]
  },
  {
    id: "20260714-049",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟警告：駭客 ShinyHunters 攻擊 SaaS 趨勢轉向 OAuth 濫用與語音釣魚",
    summary: "微軟分析報告指出，駭客組織 ShinyHunters 的攻擊手法已從傳統惡意程式或暴力破解，轉向濫用合法 SaaS 應用程式的 OAuth 驗證功能。攻擊者利用語音釣魚（Vishing）等方式，誘騙企業員工授權惡意 OAuth 應用程式，使駭客能透過 OAuth 工作流取得高權限存取企業的 Salesforce 雲端租戶。進一步，駭客還會提升攻擊至 SaaS 供應鏈，竊取信任的第三方整合應用憑證，進而橫向移動。此外，攻擊者也利用未授權的訪客權限及 GraphQL 整合，繞過查詢限制，大量外傳 CRM 敏感資料。為應對此趨勢，微軟與 Salesforce 合作，在 Defender for Cloud Apps 中加入了更多遙測資料和應用屬性分析，協助用戶偵測可疑的 OAuth 活動和整合連結。",
    tags: ["ShinyHunters", "OAuth 濫用", "Salesforce", "Vishing", "SaaS 供應鏈", "GraphQL"],
    title_en: "Microsoft Warns: Hacker ShinyHunters' Attack Trend Shifts to OAuth Abuse and Voice Phishing",
    summary_en: "A Microsoft analysis report indicates that the attack methods of the hacker group ShinyHunters have shifted from traditional malware or brute-force attacks to abusing the OAuth authentication functionality of legitimate SaaS applications. Attackers use methods like Voice Phishing (Vishing) to trick corporate employees into authorizing malicious OAuth applications, allowing the hackers to gain high-privilege access to a company's Salesforce cloud tenant via the OAuth workflow. Furthermore, the hackers escalate the attack to the SaaS supply chain, stealing trusted third-party integration application credentials to perform lateral movement. Additionally, attackers exploit unauthorized guest privileges and GraphQL integration to bypass query limits and exfiltrate large amounts of sensitive CRM data. To counter this trend, Microsoft and Salesforce have collaborated to add more telemetry data and application attribute analysis within Defender for Cloud Apps, helping users detect suspicious OAuth activity and integration links.",
    tags_en: ["ShinyHunters", "OAuth Abuse", "Salesforce", "Vishing", "SaaS Supply Chain", "GraphQL"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177305", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-050",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Jamf揭露新型macOS竊資軟體CrashStealer：偽裝當機回報工具竊取密碼與金鑰圈資料",
    summary: "資安業者Jamf Threat Labs揭露一種名為CrashStealer的新型惡意軟體。該惡意軟體極具偽裝性，它將自己打包成macOS內建的當機回報工具CrashReporter.app，並利用帶有Apple有效程式碼簽章的安裝程式Werkbit Setup進行散播與安裝，從而繞過macOS的Gatekeeper防護機制。當受害者執行後，惡意軟體會彈出偽造的macOS密碼提示視窗，誘騙使用者輸入系統密碼。成功取得密碼後，CrashStealer能夠解開並存取macOS的「鑰匙圈」（Keychain）密碼管理系統，竊取本機金鑰、Safari瀏覽器及其他應用程式的登入資訊。此外，它還會竊取Chromium與Firefox瀏覽器的憑證、Cookie、多種密碼管理器資料、加密貨幣錢包資訊，以及受害者本地文件。竊取的資料會經過AES-256-GCM加密與ZIP壓縮後，透過libcurl上傳至攻擊者伺服器。使用者應提高警覺，切勿執行來源不明的「當機回報」工具，並應定期更新作業系統與密碼管理習慣。",
    tags: ["Jamf Threat Labs", "CrashStealer", "macOS", "鑰匙圈", "惡意軟體", "程式碼簽章", "資料竊取"],
    title_en: "Jamf Uncovers New macOS Data Theft Malware CrashStealer: Masquerading as a Crash Reporter Tool to Steal Passwords and Keychain Data",
    summary_en: "Security vendor Jamf Threat Labs has uncovered a new piece of malware called CrashStealer. This malware is highly deceptive, as it packages itself as the macOS built-in crash reporting tool, CrashReporter.app. It utilizes an installer named Werkbit Setup, which carries a valid Apple code signature, to spread and install, thereby bypassing macOS's Gatekeeper protection mechanism. When executed, the malware pops up a fake macOS password prompt window, tricking the user into entering their system password. After successfully obtaining the password, CrashStealer can decrypt and access the macOS 'Keychain' password management system, stealing local keys, login information from Safari browser, and other applications. Furthermore, it also steals credentials, cookies, data from various password managers, cryptocurrency wallet information, and local files from Chromium and Firefox browsers. The stolen data is encrypted with AES-256-GCM and ZIP compressed before being uploaded to the attacker's server via libcurl. Users should be vigilant and never execute 'crash reporting' tools from unknown sources, and should regularly update their operating systems and password management habits.",
    tags_en: ["Jamf Threat Labs", "CrashStealer", "macOS", "Keychain", "Malware", "Code Signing", "Data Theft"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177303", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-051",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SOCRadar揭露中國駭客WP-ShellStorm：利用Nacos漏洞鎖定Java微服務，目標涵蓋金融與電商產業",
    summary: "威脅情報公司 SOCRadar 發現，以經濟利益為動機的中國駭客組織 WP-ShellStorm，不僅大規模攻擊 WordPress 網站，更將目標鎖定在企業採用的 Java 微服務基礎設施。駭客在今年 5 月對多個企業組織進行攻擊，竊取了多達 613 個組態設定檔。攻擊的核心是利用 Nacos 身分驗證流程的漏洞 CVE-2021-29441（CVSS 風險評分為 9.8 分）。攻擊者成功繞過身分驗證，竊取了 Nacos 的設定檔，進而獲取到 XXL-Job 的有效管理員權杖。這使得攻擊者能夠對執行個體的所有節點執行遠端程式碼，造成極廣泛的影響。受害企業涵蓋金融科技、電子商務、物流、遊戲及消費性電子等產業，顯示出攻擊鏈條從 CMS 擴展至核心微服務骨幹的嚴重性。建議企業應立即修補 Nacos 的身分驗證漏洞，並對微服務的組態檔進行嚴格的存取權限管理。",
    tags: ["SOCRadar", "WP-ShellStorm", "Nacos", "CVE-2021-29441", "Java", "微服務", "身分驗證"],
    title_en: "SOCRadar Exposes Chinese Hackers WP-ShellStorm: Targeting Java Microservices by Exploiting Nacos Vulnerability, Affecting Finance and E-commerce Industries",
    summary_en: "Threat intelligence company SOCRadar discovered that the Chinese hacking group WP-ShellStorm, motivated by economic gain, is not only launching large-scale attacks on WordPress websites but is also targeting Java microservice infrastructure adopted by enterprises. In attacks against multiple organizations this May, the hackers stole up to 613 configuration files. The core of the attack is the exploitation of the Nacos authentication process vulnerability, CVE-2021-29441 (CVSS score of 9.8). The attackers successfully bypassed authentication, stole Nacos configuration files, and subsequently obtained valid administrator tokens for XXL-Job. This allowed the attackers to execute remote code on all nodes of the instance, causing widespread impact. Affected industries include fintech, e-commerce, logistics, gaming, and consumer electronics, demonstrating the severity of the attack chain extending from CMS to the core microservice backbone. It is recommended that enterprises immediately patch the Nacos authentication vulnerability and implement strict access control management for microservice configuration files.",
    tags_en: ["SOCRadar", "WP-ShellStorm", "Nacos", "CVE-2021-29441", "Java", "Microservices", "Authentication"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177294", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Wireshark 4.6.7 版更新修補 12 項漏洞，涵蓋多種協定解析器與封包檔案解析元件的安全問題",
    summary: "開源網路流量分析工具 Wireshark 發布 4.6.7 版更新，修補了多達 12 項漏洞。由於 Wireshark 廣泛用於網路故障排除、封包分析及資安鑑識，其解析器存在漏洞可能影響分析安全性。本次修補的漏洞多為協定解析器的記憶體安全問題，包括緩衝區溢位、無效記憶體存取及越界讀取等。受影響元件涵蓋 Catapult DCT2000、SSH、IEEE 802.11、UMTS FP、Z39.50 等多種協定解析器，以及 pcapng、DBS Etherwatch 等封包檔案解析元件。其中，最嚴重的漏洞為 DBS Etherwatch 封包檔案解析元件的 CVE-2026-15167，CVSS 評分為 7.5 分，可能導致服務阻斷。建議使用者應立即升級至 Wireshark 4.6.7 或更高版本，以修補這些潛在的記憶體安全風險。",
    tags: ["Wireshark", "CVE-2026-15167", "協定解析器", "記憶體安全", "封包分析", "資安鑑識"],
    title_en: "Wireshark 4.6.7 Update Patches 12 Vulnerabilities, Covering Multiple Protocol Parsers and Packet File Parsers",
    summary_en: "The open-source network traffic analysis tool Wireshark has released version 4.6.7, patching up to 12 vulnerabilities. Because Wireshark is widely used for network troubleshooting, packet analysis, and cybersecurity forensics, vulnerabilities in its parsers could impact analysis security. The vulnerabilities patched in this release are primarily memory safety issues in protocol parsers, including buffer overflows, invalid memory access, and out-of-bounds reads. Affected components include various protocol parsers such as Catapult DCT2000, SSH, IEEE 802.11, UMTS FP, and Z39.50, as well as packet file parsing components like pcapng and DBS Etherwatch. Among these, the most severe vulnerability is CVE-2026-15167 in the DBS Etherwatch packet file parsing component, which has a CVSS score of 7.5 and could potentially lead to a denial of service. Users are advised to immediately upgrade to Wireshark 4.6.7 or later versions to mitigate these potential memory safety risks.",
    tags_en: ["Wireshark", "CVE-2026-15167", "Protocol Parser", "Memory Safety", "Packet Analysis", "Cybersecurity Forensics"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177292", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-053",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SentinelOne揭露：疑似中印背景駭客針對巴基斯坦俾路支省警局進行網路間諜攻擊",
    summary: "端點資安業者 SentinelOne 的 SentinelLABS 威脅研究團隊指出，在 2024 年至 2026 年間，疑似來自中國和印度的威脅行為者，已針對巴基斯坦俾路支省的執法機關發動網路間諜攻擊。研究團隊觀察到，攻擊行動波及了俾路支省警察機關的多項 IT 資產，包括兩台網路設備、多台運行警局網站應用程式的伺服器，以及一台 Fortinet FortiMail 設備。其中，針對俾路支省警察機關的陳情管理系統（CMS）入侵事件，被研判與疑似中國背景攻擊者有關。攻擊者手法包括在網站目錄植入惡意程式變體，用於下載及執行後續攻擊酬載，並以反射方式載入遠端控制木馬 AsyncRAT 的用戶端。這類攻擊不僅可能利用感染警察人員設備作為內部網路跳板，也可能監控透過該系統提出陳情的民眾資料，構成嚴重的資訊竊取風險。",
    tags: ["SentinelOne", "網路間諜攻擊", "AsyncRAT", "巴基斯坦", "俾路支省", "CMS", "APT"],
    title_en: "SentinelOne Reveals: Suspected China-India Background Hackers Target Balochistan Police Department with Cyber Espionage Attack",
    summary_en: "Endpoint security vendor SentinelOne's SentinelLABS threat research team pointed out that between 2024 and 2026, threat actors suspected of originating from China and India launched cyber espionage attacks targeting law enforcement agencies in Pakistan's Balochistan province. The research team observed that the attack actions affected multiple IT assets of the Balochistan police department, including two network devices, multiple servers running the police department's website application, and one Fortinet FortiMail device. Specifically, an intrusion into the Balochistan police department's Complaint Management System (CMS) was assessed to be related to suspected China-based attackers. The attackers' methods included implanting malicious code variants in the website directory to download and execute subsequent attack payloads, and loading a client for the remote control Trojan AsyncRAT via reflection. Such attacks not only potentially utilize infected police personnel devices as internal network jump points but also pose a severe information theft risk by monitoring citizen data submitted through the system.",
    tags_en: ["SentinelOne", "Cyber Espionage Attack", "AsyncRAT", "Pakistan", "Balochistan", "CMS", "APT"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177290", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-054",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OWASP ModSecurity 修補兩漏洞：CVE-2026-52747 繞過防火牆規則，建議升級至 3.0.16 版",
    summary: "開源 Web 應用程式防火牆 ModSecurity 專案（由 OWASP 維護）近日發布資安公告，修補了兩項可能讓攻擊者繞過防火牆規則的漏洞。ModSecurity 廣泛部署於 Apache 或 Nginx 等 Web 伺服器前端，用於攔截 SQL 注入、XSS 等常見 Web 攻擊，因此相關漏洞可能嚴重影響網站的防禦能力。較為嚴重的漏洞是 CVE-2026-52747，CVSS 評分為 8.6 分，源於資料解析器對輸入內容的解析問題，可能導致防火牆與後端應用程式接收到的輸入內容不一致，從而造成防護規則被繞過。另一漏洞 CVE-2026-52761，CVSS 評分為 5.8 分，是 32 位元系統上的 Unicode 轉換問題，可能導致部分防護規則失效。受影響版本為 3.0.15 及更早版本，用戶應立即升級至已修補的 3.0.16 版本，以確保網站的安全性。",
    tags: ["ModSecurity", "OWASP", "CVE-2026-52747", "CVE-2026-52761", "Web應用程式防火牆", "繞過攻擊"],
    title_en: "OWASP ModSecurity Patches Two Vulnerabilities: CVE-2026-52747 Allows Firewall Rule Bypass, Upgrade Recommended to Version 3.0.16",
    summary_en: "The open-source Web Application Firewall (WAF) ModSecurity project (maintained by OWASP) recently issued a security advisory patching two vulnerabilities that could allow attackers to bypass firewall rules. ModSecurity is widely deployed in front of web servers like Apache or Nginx to intercept common web attacks such as SQL injection and XSS. Consequently, related vulnerabilities could severely impact a website's defense capabilities. The more critical vulnerability is CVE-2026-52747, which has a CVSS score of 8.6. It stems from a data parser's issue with input content parsing, potentially causing a discrepancy between the input content received by the firewall and the backend application, thereby allowing the bypass of protection rules. The second vulnerability, CVE-2026-52761, has a CVSS score of 5.8 and is a Unicode conversion issue on 32-bit systems, which could cause certain protection rules to fail. Affected versions are 3.0.15 and earlier; users should immediately upgrade to the patched version 3.0.16 to ensure website security.",
    tags_en: ["ModSecurity", "OWASP", "CVE-2026-52747", "CVE-2026-52761", "Web Application Firewall", "Bypass Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177284", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-055",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Android遠端存取木馬 RedHook 濫用 ADB 無線偵錯功能，取得 Shell 權限進行系統操作",
    summary: "資安業者 Group-IB 警告，名為 RedHook 的 Android 遠端存取木馬（RAT）已擴大活動範圍。該木馬利用 Android 偵錯橋接器（ADB）的無線偵錯功能，讓攻擊者能夠在不需外接電腦的情況下，取得 Shell 層級權限。攻擊者通常會偽裝成政府或金融機構人員，引誘受害者下載 RedHook 惡意 APK，並透過引導使用者啟用無障礙服務和 ADB 無線偵錯來完成感染。RedHook 安裝後，能執行系統操作，包括安裝或移除應用程式、修改安全設定，並為自身授予敏感權限。其運作方式類似 Shizuku，透過 ADB 無線偵錯建立連線，啟動具備 uid 2000 權限的 Shell 處理程序，使攻擊者能執行一般應用程式無法使用的系統級操作。建議金融機構應加強監控使用者連線行為，並持續追蹤仿冒網站及品牌冒用情況。",
    tags: ["RedHook", "Android", "RAT", "ADB", "Shell 權限", "Group-IB", "遠端存取"],
    title_en: "Android Remote Access Trojan RedHook Exploits ADB Wireless Debugging to Gain Shell Privileges for System Operations",
    summary_en: "Security firm Group-IB warns that a Remote Access Trojan (RAT) named RedHook has expanded its scope of activity. This malware exploits the Android Debug Bridge (ADB) wireless debugging function, allowing attackers to gain shell-level privileges without needing an external computer. Attackers typically impersonate government or financial institution personnel, luring victims into downloading the malicious RedHook APK. The infection is completed by guiding the user to enable accessibility services and ADB wireless debugging. Once installed, RedHook can execute system operations, including installing or removing applications, modifying security settings, and granting itself sensitive permissions. Its operation is similar to Shizuku: it establishes a connection via ADB wireless debugging and launches a shell process with uid 2000 privileges, enabling the attacker to perform system-level operations that general applications cannot access. Financial institutions are advised to strengthen monitoring of user connection behavior and continuously track imitation websites and brand impersonation.",
    tags_en: ["RedHook", "Android", "RAT", "ADB", "Shell privileges", "Group-IB", "Remote Access"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177282", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-056",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：已公布18年思科IOS漏洞CVE-2008-4128仍遭積極利用，要求聯邦機構緊急修補",
    summary: "美國網路安全與基礎設施安全局（CISA）近期警告，多個已修補的資安漏洞，包括微軟SharePoint、Adobe ColdFusion和Joomla外掛程式等，正被積極利用，並將其列入已遭利用的漏洞列表（KEV）。其中一個特別的案例是思科（Cisco）網路設備作業系統IOS上的漏洞CVE-2008-4128。CISA於7月13日指出，此漏洞存在於12.4版IOS平臺的HTTP Administration元件，屬於跨網站偽造請求（CSRF）類型。攻擊者可透過發送特定請求（如show privilege、alias exec）到指定URI，從而遠端執行任意命令。儘管此漏洞已公布多年，CVSS風險評分為4.3分（中度），但因其持續被積極利用，CISA已將其列入KEV，並要求聯邦機構在特定期限內完成修補，提醒業界即使是舊版、低風險的漏洞，若被持續利用，仍構成重大威脅。",
    tags: ["CISA", "CVE-2008-4128", "思科", "IOS", "KEV", "CSRF"],
    title_en: "CISA Warns: Published 18-Year Cisco IOS Vulnerability CVE-2008-4128 Still Actively Exploited, Federal Agencies Urged to Patch",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) recently warned that multiple patched vulnerabilities, including those in Microsoft SharePoint, Adobe ColdFusion, and Joomla plugins, are being actively exploited and have been listed on the Known Exploited Vulnerabilities (KEV) catalog. A notable case is the vulnerability CVE-2008-4128 in Cisco's network device operating system, IOS. On July 13, CISA pointed out that this vulnerability resides in the HTTP Administration component of the 12.4 IOS platform and is classified as a Cross-Site Request Forgery (CSRF) type. Attackers can remotely execute arbitrary commands by sending specific requests (such as show privilege, alias exec) to a designated URI. Although this vulnerability has been public for many years and has a CVSS risk score of 4.3 (Medium), CISA has added it to the KEV list due to its continued active exploitation, mandating that federal agencies complete patching within a specified timeframe. This serves as a reminder to the industry that even old, low-risk vulnerabilities pose a significant threat if they are continuously exploited.",
    tags_en: ["CISA", "CVE-2008-4128", "Cisco", "IOS", "KEV", "CSRF"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177297", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/177289", lang: "ZH-TW" },
      { name: "iThome", url: "https://ithome.com.tw/news/177281", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-057",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟發布史上最多 570 個漏洞修補，包含多個零日與 AI 輔助發現的資安風險",
    summary: "微軟近日發布了包含至少 570 個安全漏洞的軟體更新，數量幾乎是上月紀錄的兩倍，微軟指出漏洞數量激增歸因於人工智慧（AI）輔助的漏洞發現。其中，近 60 個漏洞被評為「關鍵」級別，可讓攻擊者在無需使用者協助下遠端接管 Windows 設備。微軟同時修補了三個正在野外被利用的零日漏洞，包括針對 Active Directory Federation Services 的 CVE-2026-56155 和 Microsoft Sharepoint 的 CVE-2026-56164。此外，文章提及了針對 Windows BitLocker 的 CVE-2026-50661 漏洞，若攻擊者有實體存取權，可能導致加密資料洩露。專家警告，AI 技術雖然加速了漏洞發現，但也讓攻擊者能更快地開發出已知漏洞的 PoC 攻擊程式碼，並指出微軟的漏洞可利用性指數可能無法跟上 AI 帶來的發現速度，建議使用者在應用大量修補程式前，應先備份系統資料，並留意潛在的系統穩定性問題。",
    tags: ["Microsoft", "CVE-2026-56155", "CVE-2026-56164", "BitLocker", "零日漏洞", "AI 輔助攻擊", "Patch Tuesday"],
    title_en: "Microsoft Releases Record 570 Patches, Including Multiple Zero-Day and AI-Assisted Security Vulnerabilities",
    summary_en: "Microsoft recently released a software update containing at least 570 security vulnerabilities, nearly double the number recorded last month. Microsoft attributes the surge in vulnerabilities to AI-assisted discovery. Among these, nearly 60 vulnerabilities are rated as 'Critical,' allowing attackers to remotely take control of Windows devices without user assistance. Microsoft also patched three zero-day vulnerabilities actively being exploited in the wild, including CVE-2026-56155 targeting Active Directory Federation Services and CVE-2026-56164 for Microsoft Sharepoint. Furthermore, the article mentions CVE-2026-50661 for Windows BitLocker, which could potentially lead to encrypted data leakage if an attacker has physical access. Experts warn that while AI technology has accelerated vulnerability discovery, it has also enabled attackers to develop PoC exploit code for known vulnerabilities faster. They point out that Microsoft's vulnerability exploitability index may struggle to keep pace with the speed of AI-driven discovery, advising users to back up system data and monitor for potential system stability issues before applying a large number of patches.",
    tags_en: ["Microsoft", "CVE-2026-56155", "CVE-2026-56164", "BitLocker", "Zero-Day Vulnerability", "AI-Assisted Attack", "Patch Tuesday"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws", lang: "EN" }
    ]
  },
  {
    id: "20260714-058",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟史上最大補丁週發布：強調兩處零日漏洞，涉及SharePoint與AD FS權限提升風險",
    summary: "微軟本次補丁週發布了創紀錄的 622 個 CVE 修補，其中包含兩處被攻擊者積極利用的零日漏洞：CVE-2026-56164（SharePoint Server）和 CVE-2026-56155（Active Directory Federation Services）。CVE-2026-56164 允許未經身份驗證的攻擊者透過網路提升權限，若運行自架式 SharePoint，應優先修補。此外，SharePoint Server 2016 和 2019 即將結束延長支援，用戶需注意此風險。CVE-2026-56155 則允許已驗證的攻擊者透過弱存取控制提升本地權限，鑑於 AD FS 負責簽署整個環境的登入憑證，此漏洞風險極高。微軟提醒，不應僅依賴漏洞的嚴重性評分來判斷修補優先級。此外，本次更新還完成了 Kerberos RC4 的硬化，若環境有服務帳號仍依賴 RC4，需先進行稽核和密碼輪換，以防服務中斷。",
    tags: ["Microsoft", "CVE-2026-56164", "CVE-2026-56155", "SharePoint Server", "Active Directory Federation Services", "零日漏洞", "Patch Tuesday"],
    title_en: "Microsoft's Largest Patch Tuesday Ever: Zero-Day Vulnerabilities in SharePoint and AD FS Elevation Risks Highlighted",
    summary_en: "Microsoft released a record 622 CVE fixes this Patch Tuesday, including two zero-day vulnerabilities actively exploited by attackers: CVE-2026-56164 (SharePoint Server) and CVE-2026-56155 (Active Directory Federation Services). CVE-2026-56164 allows unauthenticated attackers to elevate privileges over the network; organizations running self-hosted SharePoint should prioritize patching. Furthermore, SharePoint Server 2016 and 2019 are nearing the end of extended support, a risk users must be aware of. CVE-2026-56155 allows authenticated attackers to elevate local privileges via weak access control. Given that AD FS is responsible for signing login credentials for the entire environment, this vulnerability poses an extremely high risk. Microsoft advises that patching priority should not be determined solely by vulnerability severity scores. Additionally, this update completes the hardening of Kerberos RC4. Environments with service accounts still relying on RC4 must audit and rotate passwords first to prevent service disruption.",
    tags_en: ["Microsoft", "CVE-2026-56164", "CVE-2026-56155", "SharePoint Server", "Active Directory Federation Services", "Zero-Day Vulnerability", "Patch Tuesday"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-059",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SAP 發布 7 月安全更新：修補 NetWeaver ABAP 記憶體寫入漏洞及 Approuter 憑證風險",
    summary: "SAP 在 2026 年 7 月發布了安全更新，修補了多個關鍵漏洞。其中最嚴重的是 CVE-2026-44747，這是一個 CVSS 評分為 9.9 的越界寫入（out-of-bounds write）缺陷。該漏洞允許已驗證的攻擊者利用記憶體管理邏輯錯誤，導致記憶體損壞，可能造成未授權的資料存取、修改或系統不可用。SAP 建議優先安裝修補的 ABAP Kernel 版本。此外，SAP 還修補了兩個其他高風險漏洞：CVE-2026-27690，這是一個 CVSS 評分為 9.1 的 HTTP 請求/回應竊取漏洞，可能導致未驗證的攻擊者發送特殊請求，造成服務拒絕（DoS）或暴露使用者回應。另一個是 CVE-2026-44761，此漏洞源於 SAP 幫助中心提供的範例配置，導致 OAuth 2.0 客戶端保留了預設憑證。未驗證的攻擊者可利用這些公開的預設憑證取得有效存取權杖，進而讀取和修改系統資料。用戶應審核生產環境，移除受影響的範例 OAuth 2.0 客戶端，並使用強密碼替換預設密鑰。",
    tags: ["SAP", "CVE-2026-44747", "CVE-2026-27690", "CVE-2026-44761", "NetWeaver", "ABAP", "OAuth 2.0"],
    title_en: "SAP Releases July Security Update: Patching NetWeaver ABAP Memory Write Vulnerability and Approuter Credential Risk",
    summary_en: "SAP released a security update in July 2026, patching multiple critical vulnerabilities. The most severe is CVE-2026-44747, an out-of-bounds write defect with a CVSS score of 9.9. This vulnerability allows authenticated attackers to exploit a memory management logic error, potentially causing memory corruption, leading to unauthorized data access, modification, or system unavailability. SAP recommends prioritizing the installation of the patched ABAP Kernel version. Furthermore, SAP patched two other high-risk vulnerabilities: CVE-2026-27690, an HTTP request/response theft vulnerability with a CVSS score of 9.1. This could allow unauthenticated attackers to send special requests, causing Denial of Service (DoS) or exposing user responses. The other is CVE-2026-44761, which stems from example configurations provided in the SAP Help Portal, causing OAuth 2.0 clients to retain default credentials. Unauthenticated attackers can exploit these public default credentials to obtain valid access tokens, subsequently reading and modifying system data. Users should review their production environments, remove affected example OAuth 2.0 clients, and use strong passwords to replace default keys.",
    tags_en: ["SAP", "CVE-2026-44747", "CVE-2026-27690", "CVE-2026-44761", "NetWeaver", "ABAP", "OAuth 2.0"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/sap-patches-cvss-99-netweaver-abap-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-060",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Claude for Chrome 擴充功能存在兩類漏洞：可透過偽造點擊觸發敏感任務，或在特定條件下繞過權限檢查",
    summary: "Anthropic 的 Claude for Chrome 擴充功能存在兩項安全漏洞。第一項是「偽造點擊觸發」：攻擊者若能植入任何能讀取或修改 `claude.ai` 網頁內容的擴充功能，可透過模擬點擊（`event.isTrusted` 檢查缺失）來觸發擴充功能預設允許的九個固定任務之一，包括讀取 Gmail、Google 文件和行事曆的任務。若使用者開啟「無需詢問執行」模式，該漏洞的風險評級為 CVSS 9.6（嚴重）。第二項是「繞過權限檢查」：若擴充功能載入的 URL 包含 `?skipPermissions=true` 參數，Claude 側邊欄將直接進入無需權限檢查的模式，可能導致未經使用者同意的資料存取。目前，修補建議是關閉「無需詢問執行」模式，並審查所有具有讀寫 `claude.ai` 權限的擴充功能。研究人員指出，目前版本（v1.0.80）尚未修補這些漏洞，且未公開 CVE 編號。",
    tags: ["Anthropic", "Claude for Chrome", "擴充功能", "偽造點擊", "OAuth", "CVSS", "XSS"],
    title_en: "Claude for Chrome Extension Contains Two Types of Vulnerabilities: Sensitive Tasks Can Be Triggered via Fake Clicks or Bypassed Under Specific Conditions",
    summary_en: "Anthropic's Claude for Chrome extension has two security vulnerabilities. The first is 'Fake Click Triggering': If an attacker can install any extension that reads or modifies the `claude.ai` webpage content, they can trigger one of nine fixed tasks pre-allowed by the extension by simulating a click (due to the absence of `event.isTrusted` checks). This includes tasks like reading Gmail, Google Docs, and Calendar. If the user enables 'Execute without asking,' the risk rating for this vulnerability is CVSS 9.6 (Severe). The second is 'Bypassing Permission Checks': If the URL loaded by the extension contains the parameter `?skipPermissions=true`, the Claude sidebar will enter a mode that bypasses permission checks, potentially leading to data access without the user's consent. The current patch recommendation is to disable the 'Execute without asking' mode and review all extensions with read/write access to `claude.ai`. Researchers point out that the current version (v1.0.80) has not yet patched these vulnerabilities, and no CVE ID has been disclosed.",
    tags_en: ["Anthropic", "Claude for Chrome", "Extension", "Fake Click", "OAuth", "CVSS", "XSS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/claude-for-chrome-flaw-lets-other.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-061",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 LabubaRAT：偽裝 NVIDIA 軟體、具備高度配置性的 Rust 遠端存取木馬",
    summary: "資安研究人員發現了一種代號為 LabubaRAT 的 Rust 遠端存取木馬（RAT）。該惡意程式偽裝成 NVIDIA 的容器運行時工具（nvidia-sysruntime.exe），旨在融入目標環境。LabubaRAT 的設計高度模組化，它不硬編碼 C2 資訊，而是透過命令列參數或 Base64 編碼的參數接收運行時配置，使其可重複用於不同基礎設施或組織。一旦部署，它會建立本地 SQLite 資料庫，進行主機盤點，收集瀏覽器、安全產品（如 CrowdStrike、SentinelOne 等）的列表，以及系統的硬體和 UAC 狀態。其功能極為全面，包括執行命令、PowerShell/JavaScript 執行、截圖、檔案傳輸、SOCKS5 代理支援等。攻擊者可利用其多種通訊路徑（如 HTTPS、DNS 隧道），維持對受害主機的持續存取。研究指出，該惡意軟體可能透過惡意軟體即服務（MaaS）模式提供，代表了高度可配置、框架式的遠端控制能力。",
    tags: ["LabubaRAT", "NVIDIA", "Rust", "遠端存取木馬", "MaaS", "C2", "惡意軟體"],
    title_en: "Research Uncovers LabubaRAT: A Highly Configurable Rust Remote Access Trojan Disguised as NVIDIA Software",
    summary_en: "Cybersecurity researchers have discovered a Rust Remote Access Trojan (RAT) codenamed LabubaRAT. This malicious program disguises itself as NVIDIA's container runtime tool (nvidia-sysruntime.exe) to blend into the target environment. LabubaRAT is highly modular; it does not hardcode C2 information but instead receives runtime configuration via command-line arguments or Base64 encoded parameters, allowing it to be reused across different infrastructures or organizations. Once deployed, it establishes a local SQLite database to perform host enumeration, collecting lists of browsers, security products (such as CrowdStrike, SentinelOne, etc.), and system hardware and UAC status. Its functionality is extremely comprehensive, including command execution, PowerShell/JavaScript execution, screenshot capture, file transfer, and SOCKS5 proxy support. Attackers can utilize its multiple communication paths (such as HTTPS and DNS tunneling) to maintain persistent access to the compromised host. The research indicates that this malware may be offered through a Malicious Activity as a Service (MaaS) model, representing highly configurable, framework-based remote control capabilities.",
    tags_en: ["LabubaRAT", "NVIDIA", "Rust", "Remote Access Trojan", "MaaS", "C2", "Malware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/labubarat-masquerades-as-nvidia.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-062",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "RabbitMQ 曝出兩項存取控制漏洞：可洩漏 OAuth 密鑰並繞過租戶邊界",
    summary: "資安研究人員揭露了兩項影響 RabbitMQ 訊息代理服務的存取控制漏洞，可能讓攻擊者洩漏 OAuth 客戶端密鑰，並繞過租戶邊界。第一個漏洞（CVE-2026-57219，CVSS 8.7）存在於一個過時的 HTTP API 端點（GET /api/auth），若 OAuth 2 配置使用管理密鑰，攻擊者僅需單次請求即可竊取機密密鑰，進而取得管理員權杖，導致對所有訊息、佇列和代理的完全控制。第二個漏洞（CVE-2026-57221，CVSS 5.3）是缺乏授權檢查，允許任何已登入使用者在連接到虛擬主機後，無需權限即可列舉所有佇列和交換器名稱，並讀取佇列訊息和消費者計數。這兩個缺陷都已存在於 2024 年初的程式碼庫中，影響 3.13.0 及之後的版本。修補建議除了升級至最新版本外，若管理介面可從網際網路存取，應輪換 OAuth 客戶端密鑰，並限制對埠 15672 的存取，或實施防火牆規則阻擋受影響端點。",
    tags: ["RabbitMQ", "CVE-2026-57219", "CVE-2026-57221", "OAuth 2.0", "訊息代理", "存取控制"],
    title_en: "RabbitMQ Exposed to Two Access Control Vulnerabilities: Potential OAuth Key Leakage and Tenant Boundary Bypass",
    summary_en: "Security researchers have disclosed two access control vulnerabilities affecting the RabbitMQ message broker service. These vulnerabilities could allow attackers to leak OAuth client secrets and bypass tenant boundaries. The first vulnerability (CVE-2026-57219, CVSS 8.7) exists in a deprecated HTTP API endpoint (GET /api/auth). If the OAuth 2 configuration uses a management secret, an attacker can steal the confidential secret with a single request, thereby obtaining administrator tokens and achieving complete control over all messages, queues, and brokers. The second vulnerability (CVE-2026-57221, CVSS 5.3) is due to a lack of authorization checks. It allows any logged-in user, after connecting to a virtual host, to enumerate all queue and exchange names and read queue messages and consumer counts without proper permissions. Both flaws have existed in the codebase since early 2024 and affect versions 3.13.0 and later. Remediation recommendations include upgrading to the latest version. Furthermore, if the management interface is accessible from the internet, OAuth client secrets should be rotated, and access to port 15672 should be restricted, or firewall rules should be implemented to block the affected endpoints.",
    tags_en: ["RabbitMQ", "CVE-2026-57219", "CVE-2026-57221", "OAuth 2.0", "Message Broker", "Access Control"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/rabbitmq-flaws-could-leak-oauth-secrets.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-063",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究發現 11 個過時的微軟簽名 UEFI 應用程式，可能繞過 Secure Boot 安全機制",
    summary: "資安研究人員發現了 11 個使用微軟簽名的舊版 UEFI 應用程式，這些應用程式可能被攻擊者利用，在系統啟動過程中執行未經信任的程式碼。這些漏洞存在於依賴微軟「Microsoft Corporation UEFI CA 2011」第三方憑證的 UEFI shim bootloaders，即使系統安裝了現代韌體標準。該憑證已於 2026 年 6 月 27 日過期，並已被更新的憑證取代。攻擊者可利用這些過時但仍受信任的 shim，執行任意程式碼，部署 UEFI bootkits，即使 Secure Boot 保護已啟用。這些漏洞涉及的 shim 版本包括 0.7 至 0.9 等，影響了 Red Hat、CentOS、OpenSuse 等多個開源專案。攻擊者可利用 BYOVD 攻擊技術，在作業系統初始化前執行程式碼，繞過 MOK denylist 和 Secure Boot Advanced Targeting (SBAT) 等安全機制。相關漏洞追蹤編號為 CVE-2026-8863 和 CVE-2026-10797。修補建議是升級至最新的 shim 版本，並確保韌體和 bootloader 採用最新的簽名憑證。",
    tags: ["UEFI", "Secure Boot", "shim bootloader", "UEFI bootkits", "CVE-2026-8863", "CVE-2026-10797", "韌體漏洞"],
    title_en: "Research discovers 11 outdated Microsoft-signed UEFI applications that could bypass Secure Boot mechanism",
    summary_en: "Cybersecurity researchers have discovered 11 outdated UEFI applications signed by Microsoft. These applications could potentially be exploited by attackers to execute untrusted code during the system boot process. These vulnerabilities exist in UEFI shim bootloaders that rely on the Microsoft \"Microsoft Corporation UEFI CA 2011\" third-party certificate, even if the system has installed modern firmware standards. This certificate expired on June 27, 2026, and has been replaced by an updated certificate. Attackers can exploit these outdated but still trusted shims to execute arbitrary code and deploy UEFI bootkits, even when Secure Boot protection is enabled. The affected shim versions include 0.7 through 0.9, impacting multiple open-source projects such as Red Hat, CentOS, and OpenSuse. Attackers can utilize BYOVD attack techniques to execute code before the operating system initializes, bypassing security mechanisms like MOK denylist and Secure Boot Advanced Targeting (SBAT). The related vulnerability tracking numbers are CVE-2026-8863 and CVE-2026-10797. The recommended remediation is to upgrade to the latest shim version and ensure that the firmware and bootloader use the latest signing certificates.",
    tags_en: ["UEFI", "Secure Boot", "shim bootloader", "UEFI bootkits", "CVE-2026-8863", "CVE-2026-10797", "Firmware Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/11-old-microsoft-signed-linux-uefi.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-064",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 85 個加密錢包擴充功能存在隱私漏洞，可追蹤用戶多個地址與真實身份",
    summary: "研究人員在 KU Leuven 測試了 85 個流行的加密錢包瀏覽器擴充功能，發現這些錢包本身存在多個隱私漏洞，足以將用戶多個分散的加密地址連結起來，甚至將「匿名」的加密身份與真實姓名或電子郵件綁定。這些漏洞並非駭客攻擊，而是錢包設計的固有行為。研究指出，錢包在與網站和區塊鏈伺服器互動時，會將用戶地址明文傳輸給伺服器，使得外部人員能夠將用戶的獨立地址串聯成單一的個人檔案。此外，即使用戶登出，網站仍可能保留權限，並持續讀取用戶地址，形成持久的追蹤標籤。更嚴重的是，一個曾經連接過的錢包，可以在一個網站的內嵌框架（iframe）中，將用戶地址洩露給另一個不相關的網站的追蹤器，從而將虛擬的加密身份與真實的瀏覽歷史和個人資料連結起來。用戶應定期檢查並清除不再使用的網站權限，並建議使用一次性錢包或在不同活動使用獨立的瀏覽器設定，但文章指出，更根本的修復需要產業層面的改變。",
    tags: ["加密錢包", "瀏覽器擴充功能", "隱私漏洞", "Web3", "地址追蹤", "KU Leuven"],
    title_en: "Research reveals privacy vulnerabilities in 85 crypto wallet extensions, allowing tracking of multiple user addresses and real identities",
    summary_en: "Researchers tested 85 popular crypto wallet browser extensions and found that these wallets contain multiple privacy vulnerabilities that are sufficient to link a user's multiple, dispersed crypto addresses, and even bind an 'anonymous' crypto identity to a real name or email. These vulnerabilities are not due to hacker attacks, but are inherent behaviors in the wallet design. The research points out that when the wallet interacts with websites and blockchain servers, it transmits the user's address in plaintext to the server, allowing external parties to link a user's independent addresses into a single personal profile. Furthermore, even if the user logs out, the website may retain permissions and continue reading the user's address, forming a persistent tracking tag. More seriously, a wallet that has been connected can leak the user's address within an embedded frame (iframe) to a tracker on another unrelated website, thereby linking the virtual crypto identity to the user's real browsing history and personal data. Users should regularly check and clear permissions for unused websites and are advised to use disposable wallets or maintain separate browser settings for different activities, but the article notes that a more fundamental fix requires industry-level change.",
    tags_en: ["Crypto Wallet", "Browser Extension", "Privacy Vulnerability", "Web3", "Address Tracking", "KU Leuven"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/study-of-85-crypto-wallet-extensions.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-065",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 OAuth Client ID 偽造技術，在 Microsoft Entra ID 環境中進行帳號枚舉與密碼驗證",
    summary: "研究機構 Proofpoint 發現，至少有兩組威脅行為者正在利用一種名為 OAuth client ID 偽造（spoofing）的新型規避技術，在雲端攻擊活動中進行帳號枚舉和憑證驗證。攻擊者透過偽造 OAuth client ID，在不產生成功登入事件的情況下，利用 Microsoft Entra ID 錯誤回應的差異，推斷出有效的用戶帳號和密碼。傳統的 Entra sign-in 日誌通常是偵測惡意活動的關鍵來源，但當使用偽造的 client ID 時，日誌中僅記錄應用程式 ID，而缺少應用程式名稱，導致依賴特定應用程式名稱的偵測機制可能完全忽略此類活動。攻擊者利用此盲點，透過 HTTP POST 請求到 OAuth 2.0 token 端點，並使用資源擁有者密碼憑證（ROPC）流程，進行大規模的帳號和密碼猜測。這使得防禦者難以追蹤可被利用的帳號，並規避了傳統的應用程式級別的條件式存取（Conditional Access）政策。建議組織應加強對 OAuth 流程的監控，特別是針對缺乏應用程式名稱記錄的登入日誌異常行為，並考慮實施更廣泛的、不依賴特定應用程式 ID 的行為分析和速率限制策略。",
    tags: ["OAuth client ID spoofing", "Microsoft Entra ID", "帳號枚舉", "OAuth 2.0", "Proofpoint", "雲端安全"],
    title_en: "Hackers Use OAuth Client ID Spoofing to Perform Account Enumeration and Password Validation in Microsoft Entra ID Environment",
    summary_en: "Research organization Proofpoint discovered that at least two groups of threat actors are utilizing a novel evasion technique called OAuth client ID spoofing to perform account enumeration and credential validation during cloud attacks. By spoofing the OAuth client ID, attackers leverage differences in Microsoft Entra ID's error responses—without generating successful sign-in events—to deduce valid user accounts and passwords. Traditional Entra sign-in logs are typically a key source for detecting malicious activity, but when a spoofed client ID is used, the logs only record the application ID and lack the application name. This causes detection mechanisms that rely on specific application names to potentially overlook such activities entirely. Attackers exploit this blind spot by sending HTTP POST requests to the OAuth 2.0 token endpoint, using the Resource Owner Password Credentials (ROPC) flow, to perform large-scale account and password guessing. This makes it difficult for defenders to track exploitable accounts and bypasses traditional application-level Conditional Access policies. Organizations are advised to strengthen monitoring of the OAuth flow, especially for anomalous sign-in log behavior that lacks application name records, and to consider implementing broader behavioral analysis and rate-limiting strategies that do not depend on specific application IDs.",
    tags_en: ["OAuth client ID spoofing", "Microsoft Entra ID", "Account Enumeration", "OAuth 2.0", "Proofpoint", "Cloud Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/oauth-client-id-spoofing-lets-attackers.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-066",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "美國財政部制裁提供VPN服務的嫌犯與犯罪集團，揭露俄國資安威脅活動",
    summary: "美國財政部（OFAC）宣布對一家名為 First VPN Service (1VPNS) 的VPN服務商及其管理員 Dmytro Rashevskyi 進行制裁，指控該服務曾被勒索軟體集團用於攻擊美國企業、金融機構、醫院及政府部門，並隱匿攻擊源頭。此外，美國還針對其他嫌犯，包括販售加密工具的白俄國籍人士，進行制裁。\n\n文章同時揭露了俄羅斯國家級駭客的活動，包括針對關鍵基礎設施的攻擊。特別指出，俄羅斯 FSB Center 16 駭客利用掃描技術，鎖定配置不良的路由器等網路設備，並濫用如 CVE-2008-4128 等已知漏洞進行滲透。CISA 已將 CVE-2008-4128 列入 KEV 目錄，要求聯邦機構修補。\n\n實務影響顯示，這些活動對美國及全球多個關鍵產業構成持續威脅。建議機構應加強網路設備的配置管理，特別是路由器，並及時修補已知漏洞。",
    tags: ["OFAC", "First VPN Service", "CVE-2008-4128", "KEV", "勒索軟體", "俄羅斯駭客", "關鍵基礎設施"],
    title_en: "US Treasury Sanctions Suspects and Groups Providing VPN Services, Exposing Russian Cyber Threat Activity",
    summary_en: "The U.S. Department of the Treasury (OFAC) announced sanctions against a VPN service provider named First VPN Service (1VPNS) and its administrator, Dmytro Rashevskyi. The service is accused of being used by ransomware groups to attack U.S. enterprises, financial institutions, hospitals, and government departments, and to conceal attack origins. Furthermore, the U.S. also sanctioned other suspects, including a Belarusian national who sells encryption tools. The article also revealed activities by Russian state-level hackers, including attacks targeting critical infrastructure. Specifically, the Russian FSB Center 16 hackers utilized scanning techniques to identify poorly configured network equipment, such as routers, and exploited known vulnerabilities like CVE-2008-4128 for penetration. CISA has listed CVE-2008-4128 in the KEV catalog, requiring federal agencies to patch it. Practically, these activities pose a continuous threat to multiple critical industries in the U.S. and globally. Organizations are advised to strengthen network equipment configuration management, especially for routers, and promptly patch known vulnerabilities.",
    tags_en: ["OFAC", "First VPN Service", "CVE-2008-4128", "KEV", "Ransomware", "Russian Hackers", "Critical Infrastructure"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/us-sanctions-first-vpn-service-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-067",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟 2026 年 7 月補丁星期二修復破紀錄 570 個漏洞，包含 3 個零日漏洞",
    summary: "微軟發布 2026 年 7 月「補丁星期二」安全更新，修復破紀錄的 570 個漏洞，其中包含 59 個「機密（Critical）」等級漏洞。本次更新重點修復 3 個零日漏洞：Active Directory 聯合身份驗證服務權限提升漏洞（CVE-2026-56155）與 SharePoint Server 權限提升漏洞（CVE-2026-56164）已遭黑客積極利用，另有 Windows BitLocker 安全功能繞過漏洞（CVE-2026-50661）已被公開披露。微軟指出，漏洞發現量激增主因是近期啟動了 AI 驅動的漏洞偵測系統。實務上，攻擊者可藉此繞過加密或取得網域及伺服器管理權限。建議管理員立即安裝安全更新，SharePoint 漏洞則可透過啟用 AMSI 並將請求主體掃描模式設為 Full 進行緩解。",
    tags: ["微軟", "Patch Tuesday", "零日漏洞", "CVE-2026-56155", "CVE-2026-56164", "CVE-2026-50661", "權限提升", "BitLocker"],
    title_en: "Microsoft's July 2026 Patch Tuesday Fixes Record 570 Vulnerabilities, Including 3 Zero-Day Flaws",
    summary_en: "Microsoft released its July 2026 'Patch Tuesday' security update, fixing a record 570 vulnerabilities, including 59 'Critical' severity flaws. This update specifically addresses three zero-day vulnerabilities: the Active Directory Joint Authentication Service Privilege Escalation vulnerability (CVE-2026-56155) and the SharePoint Server Privilege Escalation vulnerability (CVE-2026-56164), which have been actively exploited by hackers, along with the Windows BitLocker security feature bypass vulnerability (CVE-2026-50661), which has been publicly disclosed. Microsoft stated that the surge in the number of discovered vulnerabilities is due to the recent activation of an AI-driven vulnerability detection system. Practically, attackers could use these flaws to bypass encryption or gain domain and server administrative privileges. Administrators are advised to install the security updates immediately; for the SharePoint vulnerability, mitigation can be achieved by enabling AMSI and setting the request subject scan mode to Full.",
    tags_en: ["Microsoft", "Patch Tuesday", "Zero-day vulnerability", "CVE-2026-56155", "CVE-2026-56164", "CVE-2026-50661", "Privilege Escalation", "BitLocker"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/microsoft-july-2026-patch-tuesday-fixes-massive-570-flaws-3-zero-days", lang: "EN" }
    ]
  },
  {
    id: "20260714-068",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安警示：假冒 LastPass 與 Bitwarden 發送釣魚郵件，引導用戶至偽造網站竊取密碼",
    summary: "資安公司 LastPass 和 BleepingComputer 警告用戶，目前有釣魚活動正在進行，攻擊者利用假冒的資安通知郵件，引導受害者至偽造的網站。這些郵件偽裝成正規的企業通訊，通知用戶服務政策更新，並要求點擊連結「Review & Access Terms」。受害者會被導向模仿 DocuSign 服務的惡意網站，例如 lastpasscompliance[.]com 和 bitwardencompliance[.]com。攻擊者透過這些假網站誘騙用戶下載檔案，或竊取主密碼等憑證。LastPass 強調其系統並未受損，且郵件並非從其基礎設施發出。用戶若曾輸入憑證，應立即從可信設備更改主密碼，並檢查密碼金庫是否有可疑活動。建議用戶警惕任何要求提供主密碼的通知，並將可疑郵件報告至官方指定的電子郵件地址。",
    tags: ["LastPass", "Bitwarden", "釣魚攻擊", "密碼管理", "Phishing", "資安警示"],
    title_en: "Cybersecurity Alert: Phishing Emails Impersonating LastPass and Bitwarden to Steal Passwords",
    summary_en: "Cybersecurity companies LastPass and BleepingComputer warn users about ongoing phishing activities where attackers are using fake security notification emails to lure victims to fraudulent websites. These emails are disguised as legitimate corporate communications, notifying users of service policy updates and requesting them to click a link to \"Review & Access Terms.\" Victims are directed to malicious websites mimicking the DocuSign service, such as lastpasscompliance[.]com and bitwardencompliance[.]com. Attackers use these fake sites to trick users into downloading files or stealing credentials, such as master passwords. LastPass emphasizes that its system is unaffected and that the emails did not originate from its infrastructure. Users who may have entered credentials should immediately change their master passwords from a trusted device and check their password vault for any suspicious activity. Users are advised to be wary of any notification requesting their master password and to report suspicious emails to the official designated email address.",
    tags_en: ["LastPass", "Bitwarden", "Phishing Attack", "Password Management", "Phishing", "Cybersecurity Alert"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/lastpass-bitwarden-users-targeted-with-fake-security-alerts", lang: "EN" }
    ]
  },
  {
    id: "20260714-069",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Progress 證實 ShareFile 零日漏洞為緊急關閉主因，已發布安全更新修補路徑穿越缺陷",
    summary: "Progress Software 證實，上週緊急關閉 ShareFile 儲存區域控制器（Storage Zone Controller）的原因為一項高風險零日漏洞。該漏洞屬於路徑穿越（Path Traversal）缺陷，影響所有 5.x 與 6.x 版本。經身分驗證的管理員用戶可利用此漏洞讀取應用程式服務帳戶可存取的任意檔案、將惡意內容寫入任意目錄，或列舉伺服器檔案系統配置。目前 Progress 已保留 CVE 編號（尚未公開），並釋出 5.12.5 與 6.0.2 修補版本。官方強調目前尚無跡象顯示有客戶帳戶或資料遭到外洩，強烈建議用戶儘速安裝更新以重新恢復伺服器上線。",
    tags: ["Progress Software", "ShareFile", "零日漏洞", "路徑穿越", "Storage Zone Controller", "安全更新"],
    title_en: "Progress Confirms ShareFile Zero-Day Vulnerability as Cause of Emergency Shutdown; Releases Security Update to Patch Path Traversal Flaw",
    summary_en: "Progress Software confirmed that the reason for the emergency shutdown of the ShareFile Storage Zone Controller last week was a high-risk zero-day vulnerability. This vulnerability is a Path Traversal flaw affecting all 5.x and 6.x versions. Authenticated administrator users can exploit this vulnerability to read arbitrary files accessible by the application service account, write malicious content to any directory, or enumerate the server's file system configuration. Progress has reserved a CVE ID (not yet public) and released patched versions 5.12.5 and 6.0.2. The company emphasized that there is currently no evidence of customer accounts or data leakage, and strongly recommends that users install the update immediately to restore server online status.",
    tags_en: ["Progress Software", "ShareFile", "Zero-Day Vulnerability", "Path Traversal", "Storage Zone Controller", "Security Update"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/progress-confirms-sharefile-zero-day-flaw-behind-storage-zone-shutdown", lang: "EN" }
    ]
  },
  {
    id: "20260714-070",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟發布 Windows 11 累計更新，修補 571 個漏洞並強化 Widgets、檔案總管等功能",
    summary: "微軟發布了 Windows 11 的 KB5101650 和 KB5099414 累計更新，涵蓋 25H2/24H2 及 23H2 版本，修補了共計 571 個安全漏洞。此更新屬於 2026 年 7 月的 Patch Tuesday，是自 24H2 版本開始的第七次修補。本次更新的實務影響包括提升系統的可靠性與響應速度，並在功能層面進行了多項重大改進。在功能方面，新增了更專注的 Widgets 體驗，減少干擾；提升了可存取性功能，如新增螢幕色調和更精準的放大鏡控制；File Explorer 增加了在檔案預覽時快速執行指令，並改善了路徑支援的兼容性；此外，本次更新也大幅提升了藍牙連接的穩定性，優化了通話音訊路由，並支援了法語、德語和西班牙語的語音輸入。使用者應透過「Windows Update」或微軟更新目錄手動安裝此累計更新，以確保系統的安全性和功能完整性。",
    tags: ["Microsoft", "Windows 11", "KB5101650", "KB5099414", "Patch Tuesday", "安全漏洞"],
    title_en: "Microsoft releases Windows 11 cumulative update, patching 571 vulnerabilities and enhancing features like Widgets and File Explorer",
    summary_en: "Microsoft has released cumulative updates KB5101650 and KB5099414 for Windows 11, covering 25H2/24H2 and 23H2 versions, which patch a total of 571 security vulnerabilities. This update is part of the July 2026 Patch Tuesday and marks the seventh patch since the 24H2 version. The practical implications of this update include improving system reliability and responsiveness, alongside multiple major functional enhancements. Functionally, it introduces a more focused Widgets experience to reduce distraction; it improves accessibility features, such as adding screen color tone and more precise magnifier control; File Explorer adds the ability to quickly execute commands when previewing files and improves compatibility for path support. Furthermore, this update significantly enhances Bluetooth connection stability, optimizes call audio routing, and supports voice input in French, German, and Spanish. Users should manually install this cumulative update via 'Windows Update' or the Microsoft update catalog to ensure system security and functional integrity.",
    tags_en: ["Microsoft", "Windows 11", "KB5101650", "KB5099414", "Patch Tuesday", "Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/windows-11-kb5101650-and-kb5099414-cumulative-updates-released", lang: "EN" }
    ]
  },
  {
    id: "20260714-071",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SonicWall警告：SMA1000設備面臨兩項零日漏洞，CVSS 10.0的SSRF及後認證代碼注入風險",
    summary: "資安廠商SonicWall警告，其SMA1000設備存在兩項已被積極利用的零日漏洞：CVE-2026-15409和CVE-2026-15410。CVE-2026-15409為一個嚴重（CVSS 10.0）的伺服器端請求偽造（SSRF）漏洞，允許遠端未經身份驗證的攻擊者強制設備向未預期的位置發出請求。而CVE-2026-15410則是一個高嚴重性（CVSS 7.2）的後認證代碼注入缺陷，可能允許遠端已驗證的管理員執行任意作業系統指令，儘管此漏洞需要管理員權限，但SonicWall仍給予其整體CVSS評分10.0。由於兩漏洞均已被證實積極利用，SonicWall強烈敦促客戶立即升級到最新的熱修補版本。受影響的設備型號包括SMA1000的6210、7210和8200v等。若設備被入侵，建議執行重新映像或重新部署，並更改所有用戶和管理員密碼。此外，美國CISA已將這兩漏洞納入已知被利用漏洞目錄（KEV），並要求聯邦機構在特定期限前修復。",
    tags: ["SonicWall", "SMA1000", "CVE-2026-15409", "CVE-2026-15410", "SSRF", "零日漏洞", "CISA"],
    title_en: "SonicWall Warning: SMA1000 Devices Face Two Zero-Day Vulnerabilities, Including CVSS 10.0 SSRF and Post-Authentication Code Injection Risk",
    summary_en: "Security vendor SonicWall has warned that its SMA1000 devices contain two zero-day vulnerabilities that are actively being exploited: CVE-2026-15409 and CVE-2026-15410. CVE-2026-15409 is a critical (CVSS 10.0) Server-Side Request Forgery (SSRF) vulnerability, allowing unauthenticated remote attackers to force the device to make requests to unintended locations. Meanwhile, CVE-2026-15410 is a high-severity (CVSS 7.2) post-authentication code injection flaw that could allow a remote, authenticated administrator to execute arbitrary operating system commands. Although this vulnerability requires administrator privileges, SonicWall assigned it an overall CVSS score of 10.0. Since both vulnerabilities are confirmed to be actively exploited, SonicWall strongly urges customers to immediately upgrade to the latest hotfix version. Affected device models include the SMA1000 6210, 7210, and 8200v. If a device is compromised, it is recommended to perform a re-imaging or redeployment, and change all user and administrator passwords. Furthermore, the U.S. CISA has included both vulnerabilities in its Known Exploited Vulnerabilities Catalog (KEV), requiring federal agencies to remediate within a specific timeframe.",
    tags_en: ["SonicWall", "SMA1000", "CVE-2026-15409", "CVE-2026-15410", "SSRF", "Zero-Day Vulnerability", "CISA"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/sonicwall-warns-of-sma1000-flaws-exploited-in-zero-day-attacks-patch-now", lang: "EN" }
    ]
  },
  {
    id: "20260714-072",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟發布 Windows 10 KB5099539 安全更新，修補 570 個漏洞並強化 RDP 安全性",
    summary: "微軟發布了 Windows 10 KB5099539 安全更新，包含 2026 年 7 月的修補程式，修復了涵蓋微軟產品的 570 個漏洞，其中包括兩個已利用和一個公開的零日漏洞。本次更新除了修補漏洞外，也延長了 Windows 10 消費者版免費的延伸安全更新（ESU）計畫，使其可至 2027 年 10 月 12 日接收更新。\n本次更新主要為安全修補和錯誤修正，而非新功能。技術細節包括修復 OLE 自動化、檔案總管和回收筒的已知問題。在網路安全方面，微軟強化了遠端桌面協定（RDP）的安全性，新增了對 SHA-2 憑證指紋檔的支援，並建議管理員盡快遷移至 SHA-256 或更強的演算法，以降低釣魚風險。\n此外，本次更新也引入了強制執行 TDI 傳輸註冊要求，可能導致依賴未註冊第三方 TDI 傳輸的舊版應用程式無法正常運作。建議使用者留意系統事件日誌中的 AFD Event ID 16003，以判斷是否受到影響。使用者應確保系統更新至最新版本，以修補潛在的漏洞。",
    tags: ["Microsoft", "Windows 10", "KB5099539", "CVE", "RDP", "TDI"],
    title_en: "Microsoft releases Windows 10 KB5099539 security update, patching 570 vulnerabilities and enhancing RDP security",
    summary_en: "Microsoft has released the Windows 10 KB5099539 security update, which includes patches for July 2026. This update fixes 570 vulnerabilities across Microsoft products, including two exploited and one public zero-day vulnerability. In addition to patching vulnerabilities, this update extends the free Extended Security Updates (ESU) program for Windows 10 Home users, allowing them to receive updates until October 12, 2027. This update primarily contains security patches and bug fixes, rather than new features. Technical details include fixing known issues in OLE automation, File Explorer, and the Recycle Bin. Regarding cybersecurity, Microsoft has enhanced the security of the Remote Desktop Protocol (RDP) by adding support for SHA-2 certificate fingerprints, and advises administrators to migrate to SHA-256 or stronger algorithms promptly to mitigate phishing risks. Furthermore, this update introduces mandatory enforcement of TDI transport registration requirements, which may cause older applications relying on unregistered third-party TDI transports to malfunction. Users are advised to monitor the AFD Event ID 16003 in the system event log to determine if they are affected. Users should ensure their system is updated to the latest version to patch potential vulnerabilities.",
    tags_en: ["Microsoft", "Windows 10", "KB5099539", "CVE", "RDP", "TDI"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/microsoft/microsoft-releases-windows-10-kb5099539-extended-security-update", lang: "EN" }
    ]
  },
  {
    id: "20260714-073",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 發布 AirPods 系列韌體公開測試版，與 iOS 27/macOS 27 同步更新",
    summary: "Apple 在發布 iOS 27、iPadOS 27 和 macOS 27 的公開測試版之後，同步推出多款 AirPods 型號的韌體公開測試版。受影響的產品包括 AirPods Max 2、AirPods Pro 3、AirPods Pro 2、AirPods (4th gen) 等。本次韌體版本為 9.0.314，與開發者測試版版本一致。用戶若想參與測試，需確保設備運行 macOS 27 或 iOS 27 Beta，並透過設備的藍牙設定頁面，手動開啟「AirPods Beta Updates」開關。Apple 提醒，韌體更新會在 AirPods 放置於充電盒並靠近配對的 iPhone 或 Mac 時自動安裝。這批更新預計將帶來更多新功能，例如 AirPods Pro 3 的心率數據同步支援，以及自訂 EQ 控制等。",
    tags: ["Apple", "AirPods", "iOS 27", "macOS 27", "韌體更新", "Beta 測試"],
    title_en: "Apple Releases Public Beta Firmware for AirPods Series, Syncing with iOS 27/macOS 27",
    summary_en: "Following the release of the public beta versions of iOS 27, iPadOS 27, and macOS 27, Apple has simultaneously launched public beta firmware for multiple AirPods models. Affected products include AirPods Max 2, AirPods Pro 3, AirPods Pro 2, and AirPods (4th gen). The firmware version is 9.0.314, consistent with the developer beta version. Users wishing to participate in the test must ensure their device is running macOS 27 or iOS 27 Beta, and manually enable the \"AirPods Beta Updates\" switch via the device's Bluetooth settings page. Apple notes that the firmware update will automatically install when the AirPods are placed in the charging case and near a paired iPhone or Mac. This batch of updates is expected to bring new features, such as heart rate data synchronization support for AirPods Pro 3, and customizable EQ controls.",
    tags_en: ["Apple", "AirPods", "iOS 27", "macOS 27", "Firmware Update", "Beta Test"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/airpods-public-betas-arrive-one-day-after-ios-27-public-beta-heres-how-to-enroll", lang: "EN" }
    ]
  },
  {
    id: "20260714-074",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 公測版發布：搭載 Apple Intelligence 與 Siri AI，新功能與支援機型詳解",
    summary: "Apple 已發布 iOS 27 公測版，讓用戶可體驗多項新功能與穩定性提升。iOS 27 支援的機型範圍廣泛，涵蓋從 iPhone 11 到最新的 iPhone 17 Pro Max 等多代機型。新版本帶來包括「兒童安全功能」、Liquid Glass 設計調整，以及 Messages、FaceTime、Maps 等應用程式的更新。其中最受矚目的是整合了 Apple Intelligence 與 Siri AI，這些功能首先在 A19 Pro 晶片的 iPhone 17 Pro Max、iPhone 17 Pro 和 iPhone Air 等頂級機型上啟用，提供重新設計的 Siri 介面、獨立 Siri App，以及 Extend 和 Reframe 等照片編輯功能。此外，部分頂級機型（具備 12GB RAM）還可使用系統級增強的語音輸入和自訂 Siri 語音等更強大的 AI 功能。建議用戶在測試新功能前，留意官方的 Beta 測試指引。",
    tags: ["iOS 27", "Apple Intelligence", "Siri AI", "iPhone", "Apple", "Beta 版"],
    title_en: "iOS 27 Beta Released: Featuring Apple Intelligence and Siri AI, Details on New Features and Supported Devices",
    summary_en: "Apple has released the iOS 27 Beta, allowing users to experience multiple new features and stability improvements. iOS 27 supports a wide range of devices, covering multiple generations from the iPhone 11 up to the latest iPhone 17 Pro Max. The new version introduces features such as 'Child Safety Mode', Liquid Glass design adjustments, and updates to applications like Messages, FaceTime, and Maps. Of particular note is the integration of Apple Intelligence and Siri AI. These features are first enabled on high-end models like the iPhone 17 Pro Max, iPhone 17 Pro, and iPhone Air, equipped with the A19 Pro chip, offering a redesigned Siri interface, a dedicated Siri App, and photo editing features such as Extend and Reframe. Furthermore, some top-tier models (with 12GB RAM) can utilize more powerful AI features, including system-level enhanced voice input and customizable Siri voices. Users are advised to review the official Beta testing guidelines before testing new features.",
    tags_en: ["iOS 27", "Apple Intelligence", "Siri AI", "iPhone", "Apple", "Beta"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/ios-27-new-features-compatibility", lang: "EN" }
    ]
  },
  {
    id: "20260714-075",
    trackers: ["os"],
    category: "Apple",
    title: "MacWhisper 14 重磅更新：推出全新編輯器介面，提升轉錄稿編輯效率與效能",
    summary: "MacWhisper，一款用於 Mac 平台的 AI 語音轉錄應用程式，發布了版本 14.0。本次更新的核心亮點是全新的「編輯器檢視」（Editor View），使用戶可以直接在主轉錄稿介面進行編輯，大幅提升了編輯效率。使用者現在可以更輕鬆地新增段落、快速重新分配發言者，並標記有用的片段。此外，版本 14.1 增加了 Gladia 作為新的雲端轉錄提供者，允許用戶使用自己的 API 金鑰進行轉錄。其他改進包括優化了 AI 服務介面、增強了 Deepgram 的功能（如新增 EU/US 區域選擇和 Nova 3 語言支援），以及優化了多個開啟轉錄稿的播放體驗。這些更新旨在提供更流暢、更高效的專業內容創作工作流程。",
    tags: ["MacWhisper", "macOS", "AI 語音轉錄", "Mac 應用程式", "編輯器介面", "Deepgram"],
    title_en: "MacWhisper 14 Major Update: Introducing New Editor View to Boost Transcription Editing Efficiency and Performance",
    summary_en: "MacWhisper, an AI voice transcription application for Mac platforms, has released version 14.0. The core highlight of this update is the brand-new \"Editor View,\" which allows users to edit directly within the main transcription interface, significantly boosting editing efficiency. Users can now easily add paragraphs, quickly reassign speakers, and mark useful segments. Furthermore, version 14.1 adds Gladia as a new cloud transcription provider, allowing users to transcribe using their own API keys. Other improvements include optimizing the AI service interface, enhancing Deepgram's functionality (such as adding EU/US region selection and Nova 3 language support), and optimizing the playback experience for multiple open transcriptions. These updates aim to provide a smoother and more efficient professional content creation workflow.",
    tags_en: ["MacWhisper", "macOS", "AI Voice Transcription", "Mac Application", "Editor View", "Deepgram"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/macwhisper-14-launches-with-a-new-transcript-editor-faster-performance-more", lang: "EN" }
    ]
  },
  {
    id: "20260714-076",
    trackers: ["os"],
    category: "Apple",
    title: "洩漏消息指出下一代 iPad mini 雖升級 OLED，仍可能限制在 60Hz 螢幕，無法搭載 ProMotion",
    summary: "根據供應鏈洩漏消息來源 yeux1122 的爆料，蘋果預計今年晚些時候將推出新款 iPad mini。該設備據傳將採用 8.4 吋的 LTPS 背板混合 OLED 面板。然而，洩漏消息指出，該螢幕的刷新率將被限制在固定的 60Hz，這意味著 iPad mini 將無法搭載 ProMotion 技術（該技術可動態調整刷新率高達 120Hz）。目前 iPad mini 使用的是 60Hz 的 LCD 面板。雖然升級到 OLED 應能帶來更高的對比度等改善，但用戶若期待更流暢的滾動和動畫效果，可能會感到失望。此外，洩漏消息還提到，新款 iPad mini 的量產工作已在三星顯示器的 A2 Generation 5.5 系列上進行中。",
    tags: ["iPad mini", "OLED", "ProMotion", "60Hz", "Apple", "三星顯示器"],
    title_en: "Leaked reports suggest next-generation iPad mini, despite OLED upgrade, may be limited to 60Hz screen, unable to feature ProMotion",
    summary_en: "According to leaks from the supply chain source yeux1122, Apple is expected to launch a new iPad mini later this year. The device is rumored to feature an 8.4-inch LTPS backplane mixed OLED panel. However, the leaked information indicates that the screen's refresh rate will be limited to a fixed 60Hz, meaning the iPad mini will not support ProMotion technology (a technology that dynamically adjusts the refresh rate up to 120Hz). The current iPad mini uses a 60Hz LCD panel. While the upgrade to OLED should bring improvements like higher contrast, users expecting smoother scrolling and animation effects might be disappointed. Furthermore, the leak also mentioned that mass production of the new iPad mini is underway using Samsung Display's A2 Generation 5.5 series.",
    tags_en: ["iPad mini", "OLED", "ProMotion", "60Hz", "Apple", "Samsung Display"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/leaker-says-next-ipad-mini-will-stick-with-a-60hz-display-despite-oled-upgrade", lang: "EN" }
    ]
  },
  {
    id: "20260714-077",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 即將推出重大 MacBook Pro 更新：搭載 OLED 螢幕、觸控介面與 Dynamic Island",
    summary: "根據產業消息來源，Apple 預計將在今年晚些時候推出一次重大更新的 MacBook Pro。本次更新的技術亮點包括：首次採用 OLED 顯示器取代 mini-LED，提供更深的黑階與高對比度；並將升級為 Apple 首款支援觸控介面的 Mac，同時優化 macOS 以支援更流暢的觸控操作；此外，MacBook Pro 也將從傳統的瀏海設計轉向更現代的挖孔式設計，並首次引入 Dynamic Island 功能。在晶片方面，雖然市場預期 M6 系列，但消息指出新機型將沿用 M5 Pro 和 M5 Max 晶片，並將重點轉向具備 AI 性能提升的 M7 系列。這些變動預示著 MacBook Pro 將在螢幕、介面和設計上進行全面革新，為用戶帶來更接近移動裝置體驗的專業筆電。",
    tags: ["Apple", "MacBook Pro", "OLED", "觸控螢幕", "Dynamic Island", "M5/M7"],
    title_en: "Apple to Launch Major MacBook Pro Update Featuring OLED Display, Touch Interface, and Dynamic Island",
    summary_en: "According to industry sources, Apple is expected to launch a major update to the MacBook Pro later this year. Key technological highlights of this update include: the first adoption of OLED displays to replace mini-LED, offering deeper blacks and higher contrast; upgrading to Apple's first Mac supporting a touch interface, while optimizing macOS to support smoother touch operations; and transitioning the MacBook Pro from the traditional notch design to a more modern cutout design, while introducing the Dynamic Island feature for the first time. Regarding the chips, although the market anticipates the M6 series, reports indicate that the new models will retain the M5 Pro and M5 Max chips, focusing instead on the M7 series, which features enhanced AI performance. These changes suggest that the MacBook Pro will undergo a comprehensive overhaul in screen, interface, and design, bringing users a professional laptop experience closer to that of mobile devices.",
    tags_en: ["Apple", "MacBook Pro", "OLED", "Touch Screen", "Dynamic Island", "M5/M7"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/apples-huge-macbook-pro-overhaul-is-coming-soon-heres-what-we-know", lang: "EN" }
    ]
  },
  {
    id: "20260714-078",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 Public Beta現已開放，用戶應注意穩定性與第三方應用相容性",
    summary: "Apple已發布iOS 27 Public Beta，允許用戶提前體驗新功能。Apple官方提醒，由於此為預發行軟體，可能包含錯誤或不完善之處，建議用戶在安裝前備份設備。文章指出，由於iOS 27的開發階段，第三方應用程式尚未完成優化，用戶在使用時需留意相容性問題。儘管如此，測試者認為本次beta版本在穩定性和平台改善方面表現良好，並特別提及新Siri功能。然而，由於仍是測試版，用戶仍應預期存在錯誤或功能變動，建議使用者謹慎評估是否安裝。",
    tags: ["iOS 27", "Public Beta", "Apple", "Siri", "穩定性", "相容性"],
    title_en: "iOS 27 Public Beta Now Available; Users Should Note Stability and Third-Party App Compatibility",
    summary_en: "Apple has released iOS 27 Public Beta, allowing users to experience new features early. Apple officially reminds users that because this is a pre-release software, it may contain bugs or imperfections, and recommends users back up their devices before installation. The article points out that because iOS 27 is in the development phase, third-party applications have not been fully optimized, and users should pay attention to compatibility issues when using it. Nevertheless, testers believe this beta version performs well in terms of stability and platform improvements, specifically mentioning the new Siri features. However, since it is still a test version, users should anticipate potential bugs or feature changes and are advised to carefully evaluate whether or not to install it.",
    tags_en: ["iOS 27", "Public Beta", "Apple", "Siri", "Stability", "Compatibility"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/13/ios-27-public-beta-should-you-install-it-on-your-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260714-079",
    trackers: ["os"],
    category: "Apple",
    title: "Opera One for iOS 在美英市場成長，得益於用戶選擇與多功能更新",
    summary: "Opera 宣布其 Opera One for iOS 瀏覽器在 2026 年第二季（Q2）表現亮眼，相較於去年同期，在美國的月活躍用戶（MAUs）增長了 50%，在英國增長了 93%。公司指出，此成長趨勢得益於用戶主動選擇使用 Opera，並持續使用其核心功能。Opera 近期更新強調了多種功能，包括更新的同步系統，可實現桌面與 iPhone 之間標籤、書籤和密碼同步；新增了媒體控制功能，讓用戶能管理播放聲音的標籤；此外，瀏覽器 AI 也升級，支援多模態提示輸入和直接上傳文件。Opera 還強調了其免費無限 VPN、優化的標籤管理和內建廣告攔截器等核心特色，這些功能被認為是推動用戶留存的關鍵。整體而言，Opera 在 iOS 和 Android 平台的 MAUs 在 Q2 2026 相比去年同期分別增長了 40% 和 66%。",
    tags: ["Opera One", "iOS", "Apple", "MAUs", "瀏覽器", "多模態 AI"],
    title_en: "Opera One for iOS Gains Traction in US and UK Markets, Driven by User Choice and Feature Updates",
    summary_en: "Opera announced that its Opera One for iOS browser performed strongly in the second quarter (Q2) of 2026. Compared to the same period last year, the browser saw a 50% increase in Monthly Active Users (MAUs) in the United States and a 93% increase in the United Kingdom. The company attributed this growth trend to users actively choosing Opera and continuing to utilize its core features. Recent Opera updates emphasized various functionalities, including an updated synchronization system that allows syncing of tabs, bookmarks, and passwords between desktop and iPhone; the addition of media controls, enabling users to manage tabs playing audio; and an upgraded browser AI that supports multimodal prompt input and direct file uploads. Opera also highlighted its core features, such as free unlimited VPN, optimized tab management, and built-in ad blocker, which are considered key drivers for user retention. Overall, Opera saw MAUs increase by 40% and 66% respectively in Q2 2026 compared to the same period last year on both iOS and Android platforms.",
    tags_en: ["Opera One", "iOS", "Apple", "MAUs", "Browser", "Multimodal AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/opera-gains-ground-among-iphone-users-in-the-us-and-uk", lang: "EN" }
    ]
  },
  {
    id: "20260714-080",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "ASSET研究揭露GhostCommit：利用PNG圖片隱藏指令，繞過AI程式碼審查工具竊取環境變數",
    summary: "資安研究組織ASSET Research Group發佈GhostCommit概念驗證攻擊，展示了攻擊者如何將惡意提示注入指令隱藏在PNG圖片中。此攻擊利用了具備影像理解能力的程式開發代理（如AI Code Agent），在後續的建置流程中讀取圖片，並執行指令。攻擊者透過新增的指示文件（AGENTS.md）指定圖片為建置規格來源，圖片內容則要求代理讀取儲存庫根目錄的.env檔案，將其每個位元組內容轉為整數序列，並寫入Python程式碼。由於惡意指令藏於圖片，且AGENTS.md本身不直接提及.env或編碼流程，導致只檢查文字差異的AI審查工具（如Cursor Bugbot、CodeRabbit）無法偵測風險。一旦指令被執行，敏感的.env內容（包含API金鑰、資料庫連線資訊等）將以數字序列形式寫入程式碼，可從公開的提交紀錄中被攻擊者還原。研究結果顯示，多數AI工具組合會執行此指令，但Claude Code搭配特定模型時則能拒絕執行，突顯了AI安全防護設計的重要性。",
    tags: ["GhostCommit", "AI程式碼審查", "PNG圖片", "提示注入", "程式開發代理", "環境變數", "ASSET Research Group"],
    title_en: "ASSET Research Uncovers GhostCommit: Exfiltrating Environment Variables by Hiding Instructions in PNG Images, Bypassing AI Code Review Tools",
    summary_en: "The cybersecurity research organization ASSET Research Group released the GhostCommit proof-of-concept attack, demonstrating how an attacker can inject malicious instructions hidden within a PNG image. This attack exploits code development agents (such as AI Code Agents) that possess image understanding capabilities. During the subsequent build process, the agent reads the image and executes the instructions. The attacker adds a new instruction file (AGENTS.md) specifying the image as a build specification source. The image content then instructs the agent to read the .env file from the repository root directory, convert each byte's content into an integer sequence, and write it into Python code. Because the malicious instructions are hidden within the image, and AGENTS.md itself does not directly mention .env or the encoding process, AI review tools that only check for textual differences (such as Cursor Bugbot or CodeRabbit) fail to detect the risk. Once the instructions are executed, sensitive .env content (including API keys, database connection information, etc.) is written into the code as a numerical sequence, which can then be reconstructed by the attacker from public commit history. The research findings show that most AI tool combinations execute this instruction, but Claude Code, when paired with a specific model, successfully refused execution, highlighting the critical importance of AI security defense design.",
    tags_en: ["GhostCommit", "AI Code Review", "PNG Image", "Prompt Injection", "Code Development Agent", "Environment Variables", "ASSET Research Group"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177271", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-081",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "AI編碼工具 Cursor 存在「有毒儲存庫」漏洞，惡意檔案可自動執行，資安專家呼籲隔離使用",
    summary: "資安公司 Mindgard 揭露了 AI 編碼平台 Cursor 的一項嚴重漏洞。該漏洞允許攻擊者在儲存庫（repository）根目錄植入惡意的 `git.exe` 檔案。當開發者在 Cursor 環境中開啟包含此惡意檔案的專案時，由於 Cursor 在解析路徑時會自動尋找 Git 二進位檔，會無警告、無授權地執行該惡意程式。這是一種極為簡單的「有毒儲存庫攻擊」，攻擊者可利用開發者的權限執行惡意代碼。Mindgard 指出，儘管已於去年 12 月向 Cursor 報告，但該漏洞在最新版本仍未修復。建議使用者在企業或管理式 Windows 系統上，可使用 AppLocker 或 Windows App Control 策略來阻止從開發工作區目錄執行 `git.exe`。對於一般用戶，在 IDE 未修補前，應僅在隔離的虛擬機（VM）或 Windows Sandbox 等可拋棄環境中開啟不受信任的儲存庫。",
    tags: ["Cursor IDE", "有毒儲存庫攻擊", "git.exe", "AI編碼工具", "Mindgard", "PoC"],
    title_en: "AI Coding Tool Cursor has 'Poisoned Repository' Vulnerability; Malicious Files Can Execute Automatically, Security Experts Urge Isolated Use",
    summary_en: "Security firm Mindgard has disclosed a critical vulnerability in the AI coding platform Cursor. This vulnerability allows attackers to implant a malicious `git.exe` file in the repository root directory. When a developer opens a project containing this malicious file within the Cursor environment, Cursor automatically searches for the Git binary while parsing paths, leading to the malicious program executing without warning or authorization. This constitutes a highly simple 'Poisoned Repository Attack,' allowing attackers to execute malicious code using the developer's permissions. Mindgard points out that although this was reported to Cursor last December, the vulnerability remains unpatched in the latest version. Users are advised that on enterprise or managed Windows systems, they should use AppLocker or Windows App Control policies to prevent `git.exe` from executing from the development workspace directory. For general users, until the IDE is patched, they should only open untrusted repositories in isolated environments such as a virtual machine (VM) or Windows Sandbox.",
    tags_en: ["Cursor IDE", "Poisoned Repository Attack", "git.exe", "AI Coding Tool", "Mindgard", "PoC"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/cursor-ide-malicious-code-poisoned-repos", lang: "EN" }
    ]
  },
  {
    id: "20260714-082",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安警示：Chrome/Edge擴充套件 ModHeader 內含隱藏瀏覽紀錄收集引擎，引發隱私風險",
    summary: "資安業者 Stripe OLT 分析 Chrome 與 Edge 瀏覽器擴充套件 ModHeader，發現其內建隱藏的瀏覽紀錄收集引擎，可收集用戶瀏覽的網頁域名，並進行加密儲存於本機。雖然目前資料上傳功能處於休眠狀態，但收集與儲存功能已正常運作，一旦允許清單內容更新，即可啟用資料外傳。研究人員追蹤資料上傳的目標網域，發現其後端服務有來自中國的軟體套件和地區設定蹤跡。Stripe OLT 認為此設計構成重大供應鏈風險，因此 Google 與 Microsoft 已於 7 月 3 日和 7 月 10 日將該擴充套件從各自的網路商店下架。建議用戶應立即移除該擴充套件，並清除相關瀏覽器資料，以確保瀏覽隱私。",
    tags: ["ModHeader", "Chrome 擴充套件", "Edge 擴充套件", "瀏覽紀錄收集", "隱私風險", "供應鏈風險"],
    title_en: "Security Alert: Chrome/Edge Extension ModHeader Contains Hidden Browsing History Collection Engine, Causing Privacy Risks",
    summary_en: "Security firm Stripe OLT analyzed the Chrome and Edge browser extension ModHeader, discovering that it contains a hidden browsing history collection engine capable of collecting the domains of websites visited by users and storing them encrypted locally. Although the data upload function is currently dormant, the collection and storage functions are operational, and data exfiltration can be activated once the list content update is permitted. Researchers tracked the target domain for data uploads and found traces of software packages and regional settings originating from China on its backend service. Stripe OLT considers this design to constitute a major supply chain risk, leading Google and Microsoft to delist the extension from their respective web stores on July 3 and July 10. Users are advised to immediately remove the extension and clear related browser data to ensure browsing privacy.",
    tags_en: ["ModHeader", "Chrome Extension", "Edge Extension", "Browsing History Collection", "Privacy Risk", "Supply Chain Risk"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177307", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-083",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "NPM 12 版大改版：預設關閉高風險安裝行為，強化開源套件安全",
    summary: "套件管理器 NPM 於 7 月 8 日發布 12 版大改版，旨在大幅提升開源套件的安全性。本次更新的核心變動是將多項過去在安裝過程中自動執行的高風險行為，預設改為關閉，必須由用戶明確授權才能執行。具體而言，`allowScripts` 預設值已改為關閉，且 Git 與遠端 URL 相依性參數（如 `--allow-git`、`--allow-remote`）的預設值也調整為無。這些變更旨在降低套件安裝時被惡意指令碼或不當解析的風險。用戶應注意，GitHub 已於 NPM 11.16.0 以上版本開始通知這些變更，建議開發者在升級前，應檢視並明確許可受信任的指令碼，並將其提交到允許清單，以確保開發流程的連續性。",
    tags: ["NPM", "開源安全", "套件管理", "供應鏈安全", "allowScripts", "GitHub"],
    title_en: "NPM Version 12 Major Update: High-Risk Installation Behaviors Disabled by Default, Strengthening Open-Source Package Security",
    summary_en: "The package manager NPM released a major Version 12 update on July 8th, aiming to significantly enhance the security of open-source packages. The core change in this update is that several high-risk behaviors that were previously executed automatically during installation are now disabled by default, requiring explicit user authorization to run. Specifically, the default value for `allowScripts` has been changed to disabled, and the default values for Git and remote URL dependency parameters (such as `--allow-git` and `--allow-remote`) have also been adjusted to null. These changes aim to reduce the risk of malicious scripts or improper resolutions during package installation. Users should note that GitHub began notifying about these changes in NPM versions 11.16.0 and later, and developers are advised to review and explicitly permit trusted scripts and add them to an allowlist before upgrading, to ensure continuity of the development process.",
    tags_en: ["NPM", "Open-Source Security", "Package Management", "Supply Chain Security", "allowScripts", "GitHub"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177304", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-084",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "友利銀行個資外洩事件：再委外業者Blocko員工作業疏失導致1.7萬客戶資料洩露",
    summary: "韓國友利銀行（Woori Bank）宣布，因外部開發商員工的作業疏失，導致約1.7萬名客戶的個人資訊外洩。此次事件追溯至兩年前的NFT平臺建置專案，該專案已終止，但再委外業者Blocko的員工違規私自留存了包含個資的文件連結，並將其上傳至開發者平臺。外洩的個資類別包括用戶別名以及用於線上身分識別的加密資料「連結資訊（CI）」。友利銀行於發現事故後立即展開調查，並已通報個資保護委員會。Blocko也承認了員工管理不當是事件發生的主因。此事件凸顯了金融機構在處理委外供應鏈資安時，內部員工管理與資料生命週期管理的重要性，提醒業界必須嚴格控制專案終止後資料的銷毀流程，避免因人為疏失造成重大個資外洩風險。",
    tags: ["友利銀行", "Woori Bank", "Blocko", "個資外洩", "供應鏈風險", "NFT平臺", "作業疏失"],
    title_en: "Woori Bank Personal Data Leak: Operational Negligence by Subcontractor Blocko Leads to Leak of 17,000 Customer Records",
    summary_en: "Woori Bank of Korea announced that approximately 17,000 customers' personal information was leaked due to operational negligence by an external developer's employee. The incident dates back to an NFT platform construction project that was terminated two years ago. However, an employee from the subcontractor, Blocko, illegally retained files containing personal data and uploaded them to a developer platform. The leaked personal data categories include user aliases and encrypted data for online identification, referred to as 'CI' (Connection Information). Upon discovering the incident, Woori Bank immediately launched an investigation and notified the Personal Information Protection Commission. Blocko also admitted that improper employee management was the primary cause of the incident. This incident highlights the critical importance of internal employee management and data lifecycle management for financial institutions handling outsourced supply chain security, reminding the industry that strict control over data destruction processes after project termination is essential to prevent major personal data leakage risks due to human error.",
    tags_en: ["Woori Bank", "Woori Bank", "Blocko", "Personal Data Leak", "Supply Chain Risk", "NFT Platform", "Operational Negligence"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177296", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-085",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "IBM與紅帽推出Lightwell服務：強化開放原始碼軟體供應鏈安全與漏洞修補",
    summary: "IBM與紅帽（Red Hat）宣布推出Lightwell服務，旨在強化企業開放原始碼軟體供應鏈的安全性。該服務利用紅帽累積的開放原始碼工程能力，擴大應用於第三方開放原始碼套件。首批已提供超過6,500個應用程式層相依套件，涵蓋Java與Python等生態系，並已完成漏洞修補、數位簽章及生成軟體物料清單（SBOM）。Lightwell採用生成式AI驅動的漏洞修補引擎，能將關鍵安全修正向後移植（backport）至企業長期使用的版本，避免因升級主版本所產生的變更和測試負擔。此外，Lightwell Clearinghouse Premier方案初期鎖定金融服務業，提供受信任的協調中介，讓參與組織可在漏洞公開前，在保密期內協調修補與應變。修補成果將提交回原始社群審查，以避免專案碎片化。",
    tags: ["IBM", "紅帽", "Lightwell", "SBOM", "開放原始碼", "供應鏈安全", "生成式AI"],
    title_en: "IBM and Red Hat Launch Lightwell Service: Strengthening Open Source Software Supply Chain Security and Vulnerability Remediation",
    summary_en: "IBM and Red Hat announced the launch of Lightwell, a service designed to enhance the security of enterprise open source software supply chains. The service leverages Red Hat's accumulated open source engineering capabilities, expanding its application to third-party open source packages. It has initially provided over 6,500 application-layer dependency packages, covering ecosystems such as Java and Python, and has completed vulnerability remediation, digital signing, and the generation of Software Bill of Materials (SBOM). Lightwell utilizes a generative AI-driven vulnerability remediation engine that can backport critical security fixes to versions used long-term by enterprises, avoiding the changes and testing burden associated with major version upgrades. Furthermore, the Lightwell Clearinghouse Premier plan initially targets the financial services industry, providing a trusted coordination intermediary that allows participating organizations to coordinate remediation and response during a confidential period before vulnerabilities are made public. The remediation results will be submitted back to the original community for review, preventing project fragmentation.",
    tags_en: ["IBM", "Red Hat", "Lightwell", "SBOM", "Open Source", "Supply Chain Security", "Generative AI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177285", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-086",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OpenSSF推動模型簽名（OMS）標準，建立AI/ML模型端到端信任鏈",
    summary: "本文深入探討了人工智慧（AI）模型在供應鏈中面臨的獨特安全挑戰。與傳統軟體不同，AI模型無法僅透過檢查權重（weights）來判斷其是否惡意，惡意行為只有在執行模型時才會暴露。因此，模型在從訓練到部署的整個生命週期中，必須建立不可動搖的「保管鏈」（Chain of Custody）。OpenSSF（開放來源安全基金會）正在推動「模型簽名（Model Signing, OMS）」規範，旨在解決模型被篡改的風險。OMS透過加密簽名技術，確保模型、資料集和代理工作流程的完整性。該規範設計為框架中立且具備向後相容性，讓使用者能建立端到端安全的AI供應鏈。實務上，這項技術已與Kaggle、NVIDIA等平台整合，並預計將擴展至PyTorch等主流框架，目標是統一多重安全聲明，以應對「證明過載」（attestation sprawl）的問題。建議開發者應關注OMS標準的發展，將其納入MLSecOps流程，確保AI模型的來源可信。",
    tags: ["OpenSSF", "模型簽名", "OMS", "AI/ML", "供應鏈安全", "MLSecOps"],
    title_en: "OpenSSF Promotes Model Signing (OMS) Standard to Establish End-to-End Trust Chain for AI/ML Models",
    summary_en: "This article delves into the unique security challenges faced by Artificial Intelligence (AI) models within the supply chain. Unlike traditional software, AI models cannot be determined to be malicious merely by inspecting their weights; malicious behavior only manifests when the model is executed. Therefore, throughout the entire lifecycle—from training to deployment—the model must establish an immutable 'Chain of Custody.' The OpenSSF (Open Source Security Foundation) is promoting the 'Model Signing (OMS)' specification, which aims to mitigate the risk of model tampering. OMS uses cryptographic signing techniques to ensure the integrity of the model, dataset, and associated workflow. The specification is designed to be framework-agnostic and backward-compatible, enabling users to build a secure, end-to-end AI supply chain. In practice, this technology has been integrated with platforms like Kaggle and NVIDIA, and is expected to expand to mainstream frameworks such as PyTorch. The goal is to unify multiple security attestations to address the problem of 'attestation sprawl.' Developers are advised to monitor the development of the OMS standard and incorporate it into their MLSecOps processes to ensure the trustworthiness of AI models' origins.",
    tags_en: ["OpenSSF", "Model Signing", "OMS", "AI/ML", "Supply Chain Security", "MLSecOps"],
    sources: [
      { name: "OpenSSF Blog", url: "https://openssf.org/podcast/2026/07/14/whats-in-the-soss-podcast-65-s3e17-signing-the-future-securing-ai-and-ml-artifacts-with-mihai-maruseac", lang: "EN" }
    ]
  },
  {
    id: "20260714-087",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "xAI Grok Build CLI 漏洞：未經授權上傳完整 Git 儲存庫與歷史記錄",
    summary: "研究人員 cereblab 發現 xAI 的 Grok Build coding CLI (版本 0.2.93) 在執行編碼任務時，會將整個 Git 儲存庫、完整的提交歷史記錄，以及所有追蹤的檔案內容，上傳至 xAI 運營的 Google Cloud Storage 儲存桶（grok-code-session-traces）。這與模型實際閱讀的檔案內容量存在巨大差異，顯示了數據洩露的風險。除了整個程式碼庫外，即使是未閱讀的檔案，如包含唯一標記的測試檔案，也會被上傳。此外，即使是設定了「改善模型」的選項，該工具仍會上傳整個儲存庫。更嚴重的是，當 Grok 閱讀檔案時，未經遮蔽的憑證（如 API_KEY 和 DB_PASSWORD）也會被一同上傳到會話狀態存檔中。雖然 xAI 後續修復了此問題，並在伺服器端啟用 `disable_codebase_upload: true`，但開發者仍需立即輪換所有可能被 Grok 讀取或包含在 Git 歷史記錄中的憑證，以防洩漏。",
    tags: ["xAI", "Grok Build", "Git 儲存庫", "憑證洩漏", "Google Cloud Storage", "CLI 工具"],
    title_en: "xAI Grok Build CLI Vulnerability: Unauthorized Upload of Full Git Repository and History",
    summary_en: "Researchers at cereblab discovered that xAI's Grok Build coding CLI (version 0.2.93) uploads the entire Git repository, complete commit history, and all tracked file contents to an xAI-operated Google Cloud Storage bucket (grok-code-session-traces) when executing coding tasks. This volume is significantly larger than the files the model actually reads, indicating a data leakage risk. In addition to the entire codebase, even unread files, such as test files containing unique markers, are uploaded. Furthermore, the tool uploads the entire repository even when the 'improve model' option is enabled. More critically, when Grok reads files, unmasked credentials (such as API_KEY and DB_PASSWORD) are also uploaded to the session state logs. Although xAI subsequently patched this issue and enabled `disable_codebase_upload: true` on the server side, developers are still advised to immediately rotate all credentials that may have been read by Grok or included in the Git history, to prevent potential leakage.",
    tags_en: ["xAI", "Grok Build", "Git Repository", "Credential Leakage", "Google Cloud Storage", "CLI Tool"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/grok-build-uploads-entire-git.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-088",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "148個偽裝成學生工具的npm套件，利用瀏覽器建立DDoS機器人網路攻擊目標伺服器",
    summary: "JFrog研究發現，一場由148個npm套件構成的攻擊活動，偽裝成學生用的網頁代理工具，在五月期間將用戶瀏覽器轉化為分散式阻斷服務（DDoS）機器人網路。這些套件（如charlie-kirk、ilovefemboys）並非針對開發者，而是利用學生為了繞過學校內容過濾器而造訪的流量。攻擊機制包含兩個核心模組：第一個模組（G2）執行HTTP洪泛攻擊，每隔500毫秒向特定網域發送大量請求；第二個模組（I2）則利用Wisp代理協議，在瀏覽器內建立多達1,024個WebSocket連線，對遠端Wisp伺服器發送大量連線建立和關閉訊框。這種攻擊屬於控制平面攻擊，能耗盡目標伺服器的檔案描述符和日誌儲存空間。JFrog指出，這些套件的運作方式繞過了安裝時的檢查，直接在瀏覽器頁面載入。修補建議是開發者應警惕看似無害的第三方npm套件，特別是那些在前端頁面載入時執行複雜邏輯的套件，並應加強對依賴套件的審核。",
    tags: ["npm", "JFrog", "DDoS", "Wisp協議", "開源安全", "第三方元件漏洞", "網路攻擊"],
    title_en: "148 npm packages disguised as student tools establish DDoS botnet attack against target servers using browsers",
    summary_en: "JFrog research found that an attack campaign involving 148 npm packages, disguised as web proxy tools for students, converted user browsers into a distributed denial-of-service (DDoS) botnet during May. These packages (such as charlie-kirk and ilovefemboys) were not targeting developers, but rather utilizing traffic generated by students accessing the internet to bypass school content filters. The attack mechanism includes two core modules: the first module (G2) executes an HTTP flood attack, sending a large volume of requests to a specific domain every 500 milliseconds; the second module (I2) utilizes the Wisp proxy protocol to establish up to 1,024 WebSocket connections within the browser, sending a large volume of connection establishment and closing frames to a remote Wisp server. This type of attack constitutes a control plane attack, which can exhaust the target server's file descriptors and log storage space. JFrog points out that the packages operate by bypassing installation-time checks, executing directly upon page load in the browser. The remediation advice is that developers should be wary of seemingly harmless third-party npm packages, especially those that execute complex logic when loaded on the frontend page, and should strengthen the auditing of their dependencies.",
    tags_en: ["npm", "JFrog", "DDoS", "Wisp protocol", "Open Source Security", "Third-Party Component Vulnerability", "Network Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/148-npm-packages-disguised-as-student.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-089",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "微軟繪製：駭客利用OAuth信任鏈，透過語音詐騙與第三方供應商漏洞攻擊Salesforce環境",
    summary: "微軟研究報告追蹤了自 2025 年中至 2026 年中的一系列攻擊活動，揭示了駭客如何繞過傳統防禦機制，進入企業的 Salesforce 環境。攻擊者未利用任何平台漏洞，而是利用了組織對已建立信任的過度依賴。攻擊路徑主要有三種：第一，透過語音詐騙（vishing）誘騙員工授權惡意連動應用程式；第二，竊取已透過 OAuth 授權的第三方供應商的連線金鑰或 Token；第三，利用配置錯誤的訪客權限（Guest Access）存取 Salesforce Aura 端點。攻擊者利用這些「信任通道」進行資料枚舉和資料外洩，影響範圍涵蓋零售、教育和製造等產業。修補建議包括：強化員工對身份驗證流程的警覺，不輕信電話指示的連線授權；定期審查第三方應用程式的 OAuth 權限範圍；並嚴格配置訪客帳號的權限，限制其存取深度。",
    tags: ["Salesforce", "OAuth", "vishing", "第三方元件漏洞", "連動應用程式", "資料外洩"],
    title_en: "Microsoft Report: Attackers Exploit OAuth Trust Chains via Vishing and Third-Party Vendor Vulnerabilities to Target Salesforce Environments",
    summary_en: "A Microsoft research report tracked a series of attack activities from mid-2025 to mid-2026, revealing how attackers bypassed traditional defense mechanisms to gain access to corporate Salesforce environments. The attackers did not exploit any platform vulnerabilities; instead, they leveraged the organization's over-reliance on established trust. The attack paths primarily included three methods: first, using vishing (voice phishing) to trick employees into authorizing malicious connected applications; second, stealing connection keys or Tokens belonging to third-party vendors that had already been granted OAuth authorization; and third, exploiting misconfigured Guest Access to reach Salesforce Aura endpoints. By utilizing these 'trust channels,' attackers performed data enumeration and data exfiltration, impacting sectors such as retail, education, and manufacturing. Remediation recommendations include: strengthening employee awareness regarding identity verification processes, and not granting connection authorizations based solely on phone instructions; regularly reviewing the OAuth permission scope of third-party applications; and strictly configuring guest account permissions, limiting their depth of access.",
    tags_en: ["Salesforce", "OAuth", "vishing", "Third-Party Component Vulnerability", "Connected Application", "Data Leakage"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/microsoft-maps-year-long-shinyhunters.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-090",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客利用近 300 個假 GitHub 儲存庫，偽裝合法軟體竊取瀏覽器與加密貨幣資料",
    summary: "資安公司 ArcticWolf 揭露一場大規模的網路釣魚活動，駭客建立了近 292 個假 GitHub 儲存庫，偽裝成合法軟體或資安專案，目的是散播資訊竊取型惡意軟體。這些假頁面利用統一的 HTML/JS 模板，透過誘騙用戶下載包含惡意 DLL 的 ZIP 壓縮包。惡意軟體被分析為 BoryptGrab 的變種，能夠在記憶體中執行，並具備繞過 Chrome App-Bound Encryption 的能力。它能竊取多達 19 個瀏覽器的密碼、32 種加密貨幣錢包的資料，以及 Telegram、Discord 等通訊軟體的敏感憑證。數據會被傳輸至俄羅斯基地的 C2 伺服器。研究人員建議用戶對來自非官方 GitHub 頁面的「免費下載」保持高度警惕，並應利用相關的 IoCs 和 Yara 規則進行偵測。",
    tags: ["GitHub", "BoryptGrab", "資訊竊取", "網路釣魚", "開源安全", "惡意軟體"],
    title_en: "Hackers Use Nearly 300 Fake GitHub Repositories to Steal Browser and Cryptocurrency Data by Disguising as Legitimate Software",
    summary_en: "Security firm ArcticWolf revealed a large-scale phishing campaign where hackers established nearly 292 fake GitHub repositories, masquerading as legitimate software or security projects, with the goal of distributing information-stealing malware. These fake pages utilized a uniform HTML/JS template to trick users into downloading ZIP archives containing malicious DLLs. The malware was analyzed as a variant of BoryptGrab, capable of executing in memory and possessing the ability to bypass Chrome App-Bound Encryption. It can steal credentials from up to 19 browsers, data from 32 types of cryptocurrency wallets, and sensitive credentials from communication platforms like Telegram and Discord. The data is transmitted to C2 servers located in Russia. Researchers advise users to remain highly vigilant regarding 'free downloads' from non-official GitHub pages and recommend utilizing relevant IoCs and Yara rules for detection.",
    tags_en: ["GitHub", "BoryptGrab", "Information Theft", "Phishing", "Open Source Security", "Malware"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/nearly-300-github-repos-pose-as-legit-software-to-push-malware", lang: "EN" }
    ]
  },
  {
    id: "20260714-091",
    trackers: ["os"],
    category: "Android",
    title: "三星發布「Flex Titanium」螢幕：Galaxy Z Fold 8 系列將採用鈦合金提升摺疊機耐用性與視覺體驗",
    summary: "三星宣布其下一代摺疊手機，包括 Galaxy Z Fold 8 和 Galaxy Z Fold 8 Ultra，將採用名為「Flex Titanium」的新型螢幕結構。此技術旨在改善摺疊機內螢幕的摺痕可見度，並提升整體耐用性。Flex Titanium 結構包含兩部分：位於 OLED 面板下方的鈦合金薄膜，以及作為支撐的鈦金屬板。鈦合金薄膜相較於塑膠薄膜，機械剛性提高了 20 倍，同時仍保持極薄的尺寸（小於人類頭髮的 30%）。鈦金屬板則從下方支撐整個顯示模組，消除了摺疊過程中可能出現的氣隙，提供更穩定的支撐。雖然原文未提供具體的摺疊壽命數據，但此結構的應用預計將提升用戶體驗，並讓摺痕幾乎不可見。此更新屬於產品硬體設計的重大升級，而非單純的軟體補丁。",
    tags: ["Samsung", "Galaxy Z Fold 8", "Flex Titanium", "OLED", "摺疊螢幕", "Android"],
    title_en: "Samsung Releases 'Flex Titanium' Screen: Galaxy Z Fold 8 Series to Adopt Titanium Alloy for Enhanced Durability and Visual Experience",
    summary_en: "Samsung announced that its next-generation foldable phones, including the Galaxy Z Fold 8 and Galaxy Z Fold 8 Ultra, will adopt a new screen structure called 'Flex Titanium.' This technology aims to improve the visibility of screen creases and enhance overall durability in foldable devices. The Flex Titanium structure consists of two parts: a titanium film located beneath the OLED panel, and a titanium metal plate that provides support. The titanium film boasts a mechanical rigidity 20 times higher than plastic films, while maintaining an extremely thin profile (less than 30% the thickness of human hair). The titanium metal plate supports the entire display module from below, eliminating potential air gaps during folding and providing more stable support. Although the original text did not provide specific folding lifespan data, the application of this structure is expected to enhance the user experience and make creases virtually invisible. This update represents a major upgrade to the product's hardware design, rather than a simple software patch.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Flex Titanium", "OLED", "Foldable Screen", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/samsung-galaxy-z-fold-8-flex-titanium-display", lang: "EN" }
    ]
  },
  {
    id: "20260714-092",
    trackers: ["os"],
    category: "Android",
    title: "Google 宣布 Pixel Care+ 延長開賣，提供 Pixel 9/10 系列用戶意外損壞與維修保障",
    summary: "Google 宣布為現有的 Pixel 9 和 Pixel 10 系列用戶，開放限時的 Pixel Care+ 購買名額。此服務主要提供意外損壞（如跌落、裂痕、潑濺）的無限次數保障，涵蓋前螢幕、後玻璃和電池（剩餘電量低於 80%）。此外，它還提供保固期後的故障無限次數索賠，並承諾快速更換設備和優先支援。原本需在購買後 60 天內加入此服務，但現在延長至 8 月 2 日。受惠機型包括 Pixel 10 系列（Pro/Pro XL/a）和 Pixel 9 系列（Pro/Pro XL/a），但排除 Pixel 9 和 Pixel 10 Pro Fold。用戶需確認設備無螢幕/後玻璃裂痕、液體損壞或任何預存的機械/電氣故障。此為消費性服務公告，與資安漏洞無關。",
    tags: ["Google", "Pixel 9", "Pixel 10", "Pixel Care+", "消費電子", "硬體維修"],
    title_en: "Google Announces Extension of Pixel Care+, Offering Accidental Damage and Repair Coverage for Pixel 9/10 Series Users",
    summary_en: "Google has announced a limited-time opportunity for existing Pixel 9 and Pixel 10 series users to purchase Pixel Care+. This service primarily offers unlimited coverage for accidental damage (such as drops, cracks, and spills), covering the front screen, rear glass, and battery (when remaining charge is below 80%). Furthermore, it provides unlimited claims for malfunctions after the warranty period, along with a commitment to rapid device replacement and priority support. While this service was originally required to be added within 60 days of purchase, the deadline has now been extended to August 2nd. Eligible models include the Pixel 10 series (Pro/Pro XL/a) and the Pixel 9 series (Pro/Pro XL/a), but excludes the Pixel 9 and Pixel 10 Pro Fold. Users must confirm that the device has no screen/rear glass cracks, liquid damage, or any pre-existing mechanical/electrical faults. This is a consumer service announcement and is unrelated to cybersecurity vulnerabilities.",
    tags_en: ["Google", "Pixel 9", "Pixel 10", "Pixel Care+", "Consumer Electronics", "Hardware Repair"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/pixel-care-open-enrollment", lang: "EN" }
    ]
  },
  {
    id: "20260714-093",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Watch 9 與 Ultra 2 規格外洩：搭載 Snapdragon Wear Elite 晶片與 Wear OS 7",
    summary: "本文根據洩漏資訊，詳細介紹了三星（Samsung）即將推出的 Galaxy Watch 9 和 Galaxy Watch Ultra 2 的規格。兩款智慧手錶都將採用高通（Qualcomm）的 Snapdragon Wear Elite 晶片，並配備 2GB RAM，這標誌著三星在 Galaxy Watch 系列中首次放棄使用 Exynos 晶片。基礎的 Galaxy Watch 9 預計升級包括可能增加 64GB 機型、44mm 型號電池容量提升，並支援藍牙 6.0，出廠預裝 Wear OS 7 / One UI 9。而 Galaxy Watch Ultra 2 的升級幅度更大，其電池容量從前兩代機型的 590 mAh 大幅提升至 800 mAh。這些規格更新顯示了三星在智慧穿戴裝置上的重大迭代。建議關注官方發布，以獲取充電速度等其他未公開的升級細節。",
    tags: ["Samsung", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "Qualcomm", "Snapdragon Wear Elite", "Wear OS 7"],
    title_en: "Samsung Galaxy Watch 9 and Ultra 2 Specs Leak: Featuring Snapdragon Wear Elite Chip and Wear OS 7",
    summary_en: "Based on leaked information, this article details the specifications for Samsung's upcoming Galaxy Watch 9 and Galaxy Watch Ultra 2. Both smartwatches are expected to utilize Qualcomm's Snapdragon Wear Elite chip and feature 2GB of RAM, marking the first time Samsung has abandoned the Exynos chip in the Galaxy Watch series. The base Galaxy Watch 9 is anticipated to upgrade with potentially increased 64GB models, improved battery capacity for the 44mm model, and support for Bluetooth 6.0, coming pre-installed with Wear OS 7 / One UI 9. The Galaxy Watch Ultra 2 sees even greater upgrades, with its battery capacity significantly increasing from the 590 mAh of the previous two generations to 800 mAh. These spec updates indicate a major iteration for Samsung in the smart wearable device sector. Users are advised to monitor official announcements for other unreleased upgrade details, such as charging speed.",
    tags_en: ["Samsung", "Galaxy Watch 9", "Galaxy Watch Ultra 2", "Qualcomm", "Snapdragon Wear Elite", "Wear OS 7"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/samsung-galaxy-watch-9-ultra-2-specs-leak", lang: "EN" }
    ]
  },
  {
    id: "20260714-094",
    trackers: ["os"],
    category: "Android",
    title: "Google 宣布 Gemma 4 E2B 模型，原生支援 Pixel 10 系列 TPU，強化離線 AI 體驗",
    summary: "Google 在 I/O Connect India 活動上宣布了 Gemma 4 E2B 模型，這是一個專為在 Pixel 10 系列手機的 TPU（Tensor Processing Unit）上原生運行的開源模型。Gemma 系列模型旨在實現裝置端（on-device）的 AI 運算。該新版本被描述為「先進、強大且極為輕量化」，支援 Pixel 10、10 Pro、10 Pro XL 和 10 Pro Fold 等機型。透過此模型，用戶可以實現多模態的離線功能，例如：無需網路的即時 AI 聊天、拍照識別物體或植物，以及高度私密的裝置端音訊轉錄。Google 演示了「行動動作」（Mobile Actions）等功能，允許用戶僅使用語音或文字即可控制核心手機功能，如 Wi-Fi 或地圖。這些應用場景涵蓋零售（離線購物地圖）和汽車維修（故障零件視覺診斷），大幅提升了手機的實用性和隱私性。",
    tags: ["Google", "Gemma 4", "Pixel 10", "TPU", "AI 模型", "裝置端運算", "Android"],
    title_en: "Google Announces Gemma 4 E2B Model, Natively Supporting Pixel 10 Series TPU to Enhance Offline AI Experience",
    summary_en: "At the I/O Connect India event, Google announced the Gemma 4 E2B model, an open-source model designed to run natively on the TPU (Tensor Processing Unit) of the Pixel 10 series smartphones. The Gemma series models aim to enable on-device AI computation. This new version is described as \"advanced, powerful, and extremely lightweight,\" supporting models such as the Pixel 10, 10 Pro, 10 Pro XL, and 10 Pro Fold. With this model, users can achieve multimodal offline functionalities, such as: real-time AI chat without internet access, object or plant recognition from photos, and highly private on-device audio transcription. Google demonstrated features like \"Mobile Actions,\" which allows users to control core phone functions, such as Wi-Fi or Maps, using only voice or text. These application scenarios cover retail (offline shopping maps) and automotive repair (visual diagnosis of faulty parts), significantly enhancing both the practicality and privacy of the smartphone.",
    tags_en: ["Google", "Gemma 4", "Pixel 10", "TPU", "AI Model", "On-device Computing", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/pixel-10-gemma-4", lang: "EN" }
    ]
  },
  {
    id: "20260714-095",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy Z Fold 8 傳聞具備 20W 無線充電，有助追趕市場標準",
    summary: "根據網路洩漏資訊，三星 Galaxy Z Fold 8 傳聞將具備 20W 的無線充電能力。雖然該資訊與 Z Fold 8 的寬螢幕設計相關，但並未明確指出 Z Fold 8 Ultra 是否會具備相同充電速率。然而，先前洩漏指出，兩款摺疊機型都將配備 45W 的有線充電，這相較於 Galaxy Z Fold 7 的 25W 是一個顯著升級。雖然文章未提及 Qi2.2 或任何磁性標準的更新，但這對於三星摺疊機型來說是一個預期內的缺點。整體而言，20W 無線充電和 45W 有線充電的升級，對於三星追趕市場競爭是必要的。更多細節將在 7 月 22 日的 Galaxy Unpacked 活動中揭曉。",
    tags: ["Samsung", "Galaxy Z Fold 8", "無線充電", "有線充電", "Android", "摺疊手機"],
    title_en: "Samsung Galaxy Z Fold 8 Rumored to Feature 20W Wireless Charging, Helping Catch Up to Market Standards",
    summary_en: "According to leaked information, the Samsung Galaxy Z Fold 8 is rumored to feature 20W wireless charging capability. Although this information relates to the Z Fold 8's wide-screen design, it does not explicitly state whether the Z Fold 8 Ultra will have the same charging rate. However, previous leaks indicated that both foldable models will be equipped with 45W wired charging, which is a significant upgrade compared to the Galaxy Z Fold 7's 25W. While the article does not mention updates to Qi2.2 or any magnetic standards, this is a notable expected drawback for Samsung's foldable lineup. Overall, the upgrades to 20W wireless and 45W wired charging are necessary for Samsung to catch up with market competition. More details will be revealed at the Galaxy Unpacked event on July 22.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Wireless Charging", "Wired Charging", "Android", "Foldable Phone"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/galaxy-z-fold-8-wireless-charging-leak", lang: "EN" }
    ]
  },
  {
    id: "20260714-096",
    trackers: ["os"],
    category: "Android",
    title: "三星Galaxy Z Fold 8系列傳出新尺寸與配色資訊，預計7月22日正式發表",
    summary: "本報導根據洩露的圖片，展示了三星（Samsung）全新Galaxy Z Fold 8系列產品線的資訊。重點產品包括Galaxy Z Fold 8（寬版）、Galaxy Z Flip 8以及Galaxy Watch 9等。洩露的圖片特別強調了Galaxy Z Fold 8的全新寬版外形，並提供了與Galaxy Z Flip 8和Galaxy Fold 8 Ultra的尺寸比較，顯示其定位介於兩者之間。此外，文章還透露了多款產品的獨家配色，例如「Pistachio」（淺綠色）和「Mint」（薄荷綠），這些顏色預計在Samsung.com獨家發布。所有新產品預計在七月二十二日正式公開。此為產品預告與市場資訊，無涉及任何安全漏洞或修補建議。",
    tags: ["三星", "Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Galaxy Watch 9", "Android"],
    title_en: "Samsung Galaxy Z Fold 8 Series Rumored with New Dimensions and Colorways, Expected Official Launch on July 22",
    summary_en: "This report presents information on Samsung's new Galaxy Z Fold 8 series product line, based on leaked images. Key products include the Galaxy Z Fold 8 (wide version), Galaxy Z Flip 8, and Galaxy Watch 9. The leaked images specifically highlight the new wide form factor of the Galaxy Z Fold 8, providing a size comparison with the Galaxy Z Flip 8 and Galaxy Fold 8 Ultra, suggesting its positioning is between the two. Furthermore, the article reveals exclusive colorways for multiple products, such as 'Pistachio' (light green) and 'Mint' (mint green), which are expected to be exclusively released on Samsung.com. All new products are scheduled for official unveiling on July 22. This is a product preview and market information, and does not involve any security vulnerabilities or patch recommendations.",
    tags_en: ["Samsung", "Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Galaxy Watch 9", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/galaxy-z-fold-8-wide-family-leak-images", lang: "EN" }
    ]
  },
  {
    id: "20260714-097",
    trackers: ["os"],
    category: "Android",
    title: "三星 One UI 9 Beta 預覽：強化系統設定、新增網路限制與通訊整合功能",
    summary: "本文預覽了三星 Galaxy 裝置上的 One UI 9 Beta 版本功能，主要針對可折疊機型（如 Galaxy Z Fold 8）的發布進行介紹。系統層面更新包括：強化了可自訂的快速設定面板，新增了輔助功能開關（如「Select to speak」），並允許調整滑桿大小。狀態列新增了網路速度指示器，用戶需透過 Good Lock 的 Quickstar 應用啟用。此外，One UI 9 引入了「網路限制」功能，允許用戶在設定中阻止特定應用程式連網，這被認為是重要的隱私保護工具。系統也整合了通訊應用，將 Google Meet、WhatsApp 等多種通訊服務匯入統一的電話應用程式介面。其他改進包括：提升了媒體播放器的視覺化效果、增加了瀏覽器視窗轉為「最近使用」的便利功能，以及在系統重啟或關機時要求輸入 PIN 碼的額外安全措施。這些更新主要著重於使用者體驗的精細化與隱私保護的強化，但部分功能如「駕駛報告」則因潛在的數據追蹤風險引發了討論。",
    tags: ["Samsung", "One UI 9", "Android 17", "系統更新", "隱私保護", "Galaxy Z Fold 8"],
    title_en: "Samsung One UI 9 Beta Preview: Enhanced System Settings, New Network Restrictions, and Communication Integration Features",
    summary_en: "This article previews the features of the One UI 9 Beta version on Samsung Galaxy devices, primarily focusing on the release for foldable models (such as the Galaxy Z Fold 8). System-level updates include: an enhanced customizable quick settings panel, the addition of accessibility toggles (such as \"Select to speak\"), and the ability to adjust slider sizes. The status bar now features a network speed indicator, which users must enable via the Good Lock Quickstar application. Furthermore, One UI 9 introduces a \"Network Restrictions\" feature, allowing users to block specific applications from accessing the internet within the settings, which is considered an important privacy protection tool. The system also integrates communication applications, consolidating various services like Google Meet and WhatsApp into a unified phone application interface. Other improvements include: enhanced visualization effects in the media player, a convenient feature allowing browser windows to transition to \"Recents,\" and an additional security measure requiring a PIN code upon system restart or shutdown. These updates primarily focus on refining user experience and strengthening privacy protection, though some features, such as \"Driving Reports,\" have sparked discussion due to potential data tracking risks.",
    tags_en: ["Samsung", "One UI 9", "Android 17", "System Update", "Privacy Protection", "Galaxy Z Fold 8"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/one-ui-9-all-the-features-you-need-to-know-video", lang: "EN" }
    ]
  },
  {
    id: "20260714-098",
    trackers: ["os"],
    category: "Android",
    title: "Google 地圖「沉浸式導航」功能逐步推出，提升城市導航體驗與 AI 整合",
    summary: "Google 地圖正在逐步擴大其「沉浸式導航」（Immersive Navigation）的介面更新，這被認為是該應用程式近十年來最大的改動。此功能特別針對城市和都會區域，提供更精細的導航地圖，並整合了 Google 的 AI 能力，例如自然語言語音引導和本地景點路線分析。使用者可以在手機或車載系統（如 Android Auto/CarPlay）上觀察到改動，具體特徵包括透明的橋樑、新的車輛指示器設計，以及更顯眼的車道標記。雖然 Google 原本宣布此功能初期僅限美國用戶，但目前已開始向更廣泛的用戶群體推送。此更新的推出屬於漸進式滾動，尚未達到完整版本。修補或使用建議是留意應用程式的更新通知，並關注 Google 官方的發布資訊。",
    tags: ["Google 地圖", "Immersive Navigation", "Android Auto", "AI 整合", "Google Maps", "Android"],
    title_en: "Google Maps' 'Immersive Navigation' Feature Rolls Out Gradually, Enhancing Urban Guidance and AI Integration",
    summary_en: "Google Maps is gradually expanding its 'Immersive Navigation' interface update, which is considered the biggest change to the application in the last decade. This feature is specifically designed for urban and metropolitan areas, providing more detailed navigation maps and integrating Google's AI capabilities, such as natural language voice guidance and local point-of-interest route analysis. Users can observe these changes on mobile phones or in vehicle systems (such as Android Auto/CarPlay). Specific features include transparent bridges, a redesigned vehicle indicator, and more prominent lane markings. Although Google initially announced this feature was limited to US users, it is now beginning to roll out to a broader user base. This update is still in a progressive rollout phase and has not reached a complete version. The suggested remediation or usage advice is to monitor application update notifications and follow official Google release information.",
    tags_en: ["Google Maps", "Immersive Navigation", "Android Auto", "AI Integration", "Google Maps", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/google-maps-immersive-navigation-rollout-poll", lang: "EN" }
    ]
  },
  {
    id: "20260714-099",
    trackers: ["os"],
    category: "Android",
    title: "三星傳開發 SmartTag 3 藍牙追蹤器，預計提升追蹤功能與連動性",
    summary: "根據報導，三星（Samsung）正準備推出 SmartTag 3 藍牙追蹤器。目前 SmartTag 2 追蹤器已是市場上可靠的追蹤選項，特別是搭配三星 Galaxy 智慧型手機，能提供高準確度和一致性。雖然 SmartTag 設備目前無法在三星生態系統外使用，但傳聞中的 SmartTag 3 預計將帶來更多改進，其中最受期待的升級功能之一是 UWB（超寬頻）連接性。此設備的發布時間點與傳聞中的 Galaxy S26 FE 產品一同推出，預計在未來幾個月內上市。目前報導尚未提供詳細技術規格或發布日期，資安或消費者應持續關注三星官方的 Galaxy Unpacked 重點發布會，以獲取準確資訊。",
    tags: ["Samsung", "SmartTag 3", "藍牙追蹤器", "UWB", "Galaxy", "Android"],
    title_en: "Samsung to Develop SmartTag 3 Bluetooth Tracker, Expected to Enhance Tracking and Connectivity",
    summary_en: "According to reports, Samsung is preparing to launch the SmartTag 3 Bluetooth tracker. The current SmartTag 2 tracker is already a reliable tracking option in the market, especially when paired with Samsung Galaxy smartphones, offering high accuracy and consistency. Although the SmartTag device currently cannot be used outside the Samsung ecosystem, the rumored SmartTag 3 is expected to bring more improvements, with one of the most anticipated upgraded features being UWB (Ultra-Wideband) connectivity. The release timing of this device is rumored to coincide with the Galaxy S26 FE product, expected to hit the market within the coming months. Current reports have not provided detailed technical specifications or release dates; cybersecurity professionals or consumers should continue to follow Samsung's official Galaxy Unpacked events for accurate information.",
    tags_en: ["Samsung", "SmartTag 3", "Bluetooth Tracker", "UWB", "Galaxy", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/samsung-galaxy-smarttag-3-reportedly-coming-later-this-year", lang: "EN" }
    ]
  },
  {
    id: "20260714-100",
    trackers: ["os"],
    category: "Android",
    title: "Google 準備重設計 Android Auto 媒體播放器，增加更多控制按鈕與功能",
    summary: "Google 正在為 Android Auto 的儀表板媒體播放器進行重大重新設計。目前版本自 2023 年推出後，其功能和介面變化不大。根據觀察，新的設計將會讓專輯封面圖尺寸縮小，並將曲目資訊置於中央，下方增加更多控制按鈕。相較於現有的播放/暫停和曲目跳轉控制，新介面預計會加入如隨機播放（shuffle）、重複播放（repeat）以及點讚/讚好（like）等額外按鈕，這些按鈕可能根據不同的應用程式（如 YouTube Music 或其他媒體應用）而有所不同。新的背景設計採用了高度模糊化的專輯封面圖。雖然 Google 尚未公布正式的發布時間，但預計此功能可能會先在 Beta 版本中推出，並可能與 Google 較大的 Android Auto 整體更新一同推出。",
    tags: ["Google", "Android Auto", "媒體播放器", "UI/UX", "Android 系統"],
    title_en: "Google Preparing to Redesign Android Auto Media Player, Adding More Controls and Features",
    summary_en: "Google is undertaking a major redesign of the Android Auto dashboard media player. Since its release in 2023, the functionality and interface of the current version have seen little change. Observations suggest that the new design will reduce the album art size and centralize the track information, adding more control buttons below. Compared to the existing play/pause and track skipping controls, the new interface is expected to include additional buttons such as shuffle, repeat, and like/favorite, which may vary depending on the application (such as YouTube Music or other media apps). The new background design utilizes highly blurred album art. Although Google has not announced a formal release date, this feature is expected to debut first in a Beta version and may be rolled out alongside a larger overall Android Auto update from Google.",
    tags_en: ["Google", "Android Auto", "Media Player", "UI/UX", "Android System"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/android-auto-media-player-redesign-preparing", lang: "EN" }
    ]
  },
  {
    id: "20260714-101",
    trackers: ["os"],
    category: "Android",
    title: "三星預告 Galaxy Watch 9：搭載 Snapdragon 處理器，強調 AI 健康管理與鈦金屬設計",
    summary: "三星官方預告了下一代智慧手錶 Galaxy Watch 9，並預計在 7 月 22 日同步推出 Galaxy Watch Ultra 2。這款手錶被定位為「健康優先、全天候的進階個人化 AI 閘道」。技術亮點包括採用鈦金屬機身、更長的電池續航力，以及搭載全新的 Snapdragon Wear Elite 處理器，這是三星首次在 Galaxy Watch 系列中使用此晶片取代 Exynos。功能方面，除了基礎的活動追蹤、心率和血壓監測外，它還整合了「個人健康教練」功能，涵蓋營養、運動、睡眠（包括睡眠呼吸中止症追蹤）和心理健康等深度健康洞察。此外，手錶支援 Gemini 抬手語音互動，並強調了極致的耐用性，適合極限戶外活動。目前文章未提供具體的 CVE 或安全漏洞資訊，僅為產品預告。",
    tags: ["Samsung", "Galaxy Watch 9", "Snapdragon Wear Elite", "AI 健康管理", "鈦金屬", "Wear OS"],
    title_en: "Samsung Teases Galaxy Watch 9: Featuring Snapdragon Processor, Emphasizing AI Health Management and Titanium Design",
    summary_en: "Samsung officially teased its next-generation smartwatch, the Galaxy Watch 9, and is expected to launch the Galaxy Watch Ultra 2 on July 22. This watch is positioned as a \"health-first, all-day advanced personalized AI gateway.\" Technical highlights include a titanium body, extended battery life, and the integration of the new Snapdragon Wear Elite processor, marking the first time Samsung will use this chip in the Galaxy Watch series to replace Exynos. Functionally, in addition to basic activity tracking, heart rate, and blood pressure monitoring, it integrates a \"Personal Health Coach\" feature, covering deep health insights for nutrition, exercise, sleep (including sleep apnea tracking), and mental health. Furthermore, the watch supports Gemini lift-and-speak voice interaction and emphasizes extreme durability, making it suitable for extreme outdoor activities. The article currently provides no specific CVE or security vulnerability information; it is purely a product preview.",
    tags_en: ["Samsung", "Galaxy Watch 9", "Snapdragon Wear Elite", "AI Health Management", "Titanium", "Wear OS"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/samsung-galaxy-watch-9-official-tease", lang: "EN" }
    ]
  },
  {
    id: "20260714-102",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel Watch 5 外觀渲染圖洩漏：展示多種新配色與 Gemini 快捷功能",
    summary: "本文報導了 Google Pixel Watch 5 在正式發表前，透過渲染圖洩漏了其外觀細節。洩漏的圖片展示了四種不同顏色的錶殼與錶帶組合，包括「Dark Anthracite」（啞光黑）、「Natural Silver」（拋光銀）、「Pyrite」（啞光金）和「Warm Gold」（拋光金）。其中「Warm Gold」配色專屬於 41mm 尺寸。此外，渲染圖還展示了一個新的錶面設計，結合了類比時鐘風格和 Gemini 快捷入口。根據報導，Google 似乎尚未進行重大硬體變更，但仍提及了「穿戴式 Tensor 晶片」，這與過去的洩漏計畫一致。這些資訊主要來自渲染圖和市場名稱，預計將在下個月正式揭曉。",
    tags: ["Google", "Pixel Watch 5", "Android", "穿戴裝置", "Gemini", "Tensor 晶片"],
    title_en: "Google Pixel Watch 5 Exterior Renderings Leak: Showcasing Multiple New Colorways and Gemini Quick Features",
    summary_en: "This article reports on leaked exterior details of the Google Pixel Watch 5 through renderings before its official announcement. The leaked images display four different color combinations for the watch case and strap: \"Dark Anthracite\" (matte black), \"Natural Silver\" (polished silver), \"Pyrite\" (matte gold), and \"Warm Gold\" (polished gold). Notably, the \"Warm Gold\" colorway is exclusive to the 41mm size. Furthermore, the renderings showcase a new watch face design that combines a classic analog clock style with a Gemini quick access entry. According to the report, Google does not appear to have made major hardware changes, but it does mention the \"wearable Tensor chip,\" which aligns with previous leak plans. This information primarily comes from the renderings and market names, and is expected to be officially unveiled next month.",
    tags_en: ["Google", "Pixel Watch 5", "Android", "Wearable Devices", "Gemini", "Tensor Chip"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/google-pixel-watch-5-render-leaks", lang: "EN" }
    ]
  },
  {
    id: "20260714-103",
    trackers: ["os"],
    category: "Android",
    title: "Fitbit Air 首次發布韌體更新 20001.253.2，修復多項錯誤並提升運動追蹤功能",
    summary: "Google 為 Fitbit Air 推出首次上市後韌體更新 20001.253.2，旨在修復多個錯誤並提升整體使用體驗。此更新包含一般性改進和錯誤修復，用戶可在 Google Health 應用程式的裝置頁面看到更新通知。本次更新特別修復了使用 Fitbit Air 進行運動追蹤時，透過連接 GPS 或多個設備/應用程式匯出 TCX 數據時的資料不完整問題。此外，Google 也改善了在運動追蹤過程中失去連線時，應用程式的反應機制。雖然文章未提供具體漏洞資訊，但強調了韌體更新對於提升數據準確性和連線穩定性的實務重要性。建議用戶留意 Google Health 應用程式的通知，及時進行韌體升級，以確保運動數據的完整性與追蹤的可靠性。",
    tags: ["Fitbit Air", "Google Health", "韌體更新", "20001.253.2", "運動追蹤", "數據修復"],
    title_en: "Fitbit Air releases first firmware update 20001.253.2, fixing multiple bugs and enhancing fitness tracking",
    summary_en: "Google has released the first post-launch firmware update, 20001.253.2, for the Fitbit Air, aimed at fixing multiple bugs and enhancing the overall user experience. This update includes general improvements and bug fixes, and users can see the update notification on the device page within the Google Health application. Notably, this update specifically addresses data incompleteness issues that occurred when exporting TCX data using the Fitbit Air for fitness tracking, either via connected GPS or multiple devices/applications. Furthermore, Google has improved the application's response mechanism when the connection is lost during fitness tracking. Although the article does not provide specific vulnerability information, it emphasizes the practical importance of firmware updates for improving data accuracy and connection stability. Users are advised to monitor the Google Health application for notifications and perform the firmware upgrade promptly to ensure the integrity and reliability of their fitness data tracking.",
    tags_en: ["Fitbit Air", "Google Health", "Firmware Update", "20001.253.2", "Fitness Tracking", "Data Fix"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/first-fitbit-air-update", lang: "EN" }
    ]
  },
  {
    id: "20260714-104",
    trackers: ["os"],
    category: "Android",
    title: "Google Store 推出 Pixel 10 Pro 深度折扣，促銷特定型號，可能為清理庫存",
    summary: "本文報導 Google Store 正在進行 Pixel 10 Pro 的深度折扣活動。其中，128 GB Obsidian 型號的 Pixel 10 Pro 價格降至 $699，這是 Google Store 迄今最大的折扣，甚至超過了 Prime Day 的優惠。此外，Google 也提供 Pixel 10 Pro 或 Pro XL 的折扣，以及 Pixel 10 的折扣。這些促銷活動旨在在 Pixel 11 於 8 月 12 日發表前，清理現有庫存。文章推測，此折扣可能與 Google 為了迎接下一代產品而清理過剩庫存有關。此外，Pixel Watch 4 的 LTE 版本也提供折扣，使其價格與藍牙版本一致。消費者應留意這些折扣活動的截止日期，並注意部分顏色或儲存容量可能已缺貨。",
    tags: ["Google Store", "Pixel 10 Pro", "Pixel 10", "Pixel Watch 4", "Android", "促銷活動"],
    title_en: "Google Store Launches Deep Discounts on Pixel 10 Pro, Promoting Specific Models, Possibly for Inventory Clearance",
    summary_en: "This article reports that the Google Store is running a deep discount campaign on the Pixel 10 Pro. Specifically, the 128 GB Obsidian model of the Pixel 10 Pro is priced at $699, marking the largest discount offered by the Google Store to date, even surpassing Prime Day deals. Furthermore, Google is offering discounts on the Pixel 10 Pro or Pro XL, as well as on the Pixel 10. These promotions aim to clear existing inventory before the Pixel 11 is released on August 12th. The article speculates that this discount may be related to Google clearing excess stock in preparation for the next generation of products. Additionally, the LTE version of the Pixel Watch 4 is also discounted, bringing its price in line with the Bluetooth version. Consumers should note the expiration dates of these promotions and be aware that some colors or storage capacities may be out of stock.",
    tags_en: ["Google Store", "Pixel 10 Pro", "Pixel 10", "Pixel Watch 4", "Android", "Promotion"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/13/pixel-10-pro-discount", lang: "EN" }
    ]
  },
  {
    id: "20260714-105",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android Studio Quail 2 上線：支援並行 Agent 工作流、內建記憶體洩漏分析與崩潰修復",
    summary: "Google 發布 Android Studio Quail 2 版本，將多項開發效率工具整合至 IDE。主要亮點包括重新設計的 Agent Mode，允許開發者在單一工作區內同時啟動多個並行聊天任務，例如進行 UI 重構、修復 ProGuard 規則或生成文件，極大提升多任務處理能力。此外，Quail 2 將流行的 LeakCanary 記憶體洩漏檢測工具原生整合至 Profiler。這項升級讓記憶體分析從資源受限的測試手機轉移到開發電腦上執行，分析速度提升多達五倍。當偵測到洩漏時，Profiler 提供互動式、彩色編碼的洩漏追蹤，並支援「Go to declaration」直接跳轉到程式碼，甚至可透過「Fix with Agent」讓 AI 代理分析根源並提供精確的修復程式碼建議。這對於進行大型架構重構或修復複雜的生產崩潰至關重要。",
    tags: ["Android Studio", "Quail 2", "Android 開發", "Agent Mode", "記憶體洩漏", "LeakCanary", "Google"],
    title_en: "Android Studio Quail 2 Launched: Supports Parallel Agent Workflows, Built-in Memory Leak Analysis, and Crash Fixing",
    summary_en: "Google has released Android Studio Quail 2, integrating multiple development efficiency tools into the IDE. Key highlights include a redesigned Agent Mode, which allows developers to simultaneously run multiple parallel chat tasks within a single workspace—for instance, performing UI refactoring, fixing ProGuard rules, or generating documentation—greatly enhancing multi-tasking capabilities. Furthermore, Quail 2 natively integrates the popular LeakCanary memory leak detection tool into the Profiler. This upgrade moves memory analysis from resource-constrained test devices to the developer's computer, boosting analysis speed by up to five times. When a leak is detected, the Profiler provides interactive, color-coded leak tracking and supports 'Go to declaration' to jump directly to the code. It even features 'Fix with Agent,' allowing the AI agent to analyze the root cause and provide precise code repair suggestions. This is crucial for large-scale architectural refactoring or fixing complex production crashes.",
    tags_en: ["Android Studio", "Quail 2", "Android Development", "Agent Mode", "Memory Leak", "LeakCanary", "Google"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/06/android-studio-quail-2-stable-features.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-106",
    trackers: ["os", "security"],
    category: "Android",
    title: "Chrome 瀏覽器於 Android 上的 GPU Use-After-Free 漏洞 (CVE-2026-15772)",
    summary: "Google Chrome 瀏覽器在 Android 平台上存在一個名為 CVE-2026-15772 的安全漏洞。此漏洞屬於 GPU 記憶體管理中的 Use-After-Free 類型，影響範圍為版本早於 150.0.7871.125 的產品。攻擊者若能先取得渲染器程序（renderer process）的控制權，便可利用此漏洞，透過精心構造的 HTML 網頁，潛在地執行沙盒逃逸（sandbox escape）。這類漏洞的嚴重性被評定為高風險（High）。實務上，這要求使用者必須確保瀏覽器已更新至修補版本，以防止遠端攻擊者利用此缺陷進行系統層級的越權操作。建議使用者及企業應立即更新 Chrome 瀏覽器至最新版本，並留意 Google 官方的安全公告。",
    tags: ["Google Chrome", "Android", "CVE-2026-15772", "GPU", "Use-After-Free", "沙盒逃逸"],
    title_en: "GPU Use-After-Free Vulnerability in Chrome Browser on Android (CVE-2026-15772)",
    summary_en: "Google Chrome browser on the Android platform contains a security vulnerability named CVE-2026-15772. This vulnerability is a Use-After-Free type within GPU memory management, affecting products older than version 150.0.7871.125. If an attacker can first gain control of the renderer process, they can exploit this vulnerability using a specially crafted HTML webpage to potentially achieve a sandbox escape. The severity of this vulnerability is rated as High risk. Practically, this requires users to ensure the browser is updated to the patched version to prevent remote attackers from exploiting this flaw for system-level privilege escalation. Users and enterprises are advised to immediately update Chrome browser to the latest version and monitor official Google security announcements.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-15772", "GPU", "Use-After-Free", "Sandbox Escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-15772", lang: "EN" }
    ]
  },
  {
    id: "20260714-107",
    trackers: ["os", "security"],
    category: "Android",
    title: "警惕 Jadx decompiler 漏洞：惡意 APK 可透過版本名稱資訊執行遠端程式碼",
    summary: "資安研究工具 Jadx，一個用於 Dex 到 Java 反編譯的工具，存在一個嚴重的安全漏洞 CVE-2026-42049。在版本 1.5.6 之前，當使用者將反編譯的 APK 匯出為 Android Gradle 專案時，Jadx 會將 AndroidManifest 中的 `android:versionName` 值插入到生成的 `build.gradle` Groovy 模板中，但缺乏適當的資料清理（sanitization）。攻擊者可以利用此缺陷，在惡意 APK 中構造一個能跳脫字串上下文（string context）的 `versionName` 值。當受害者開啟或嘗試建置這個匯出的 Gradle 專案時，惡意代碼將會被執行，從而執行攻擊者控制的 Groovy 程式碼。此漏洞的影響範圍是任何使用舊版 Jadx (前 1.5.6) 進行反編譯和匯出專案的環境。修補建議是立即升級 Jadx 到 1.5.6 或更高版本，以確保在處理 APK 專案時，版本名稱資訊能夠得到正確的清理和處理。",
    tags: ["Jadx", "CVE-2026-42049", "Android", "反編譯", "Groovy", "APK"],
    title_en: "Beware of Jadx decompiler vulnerability: Malicious APK can execute remote code via version name information",
    summary_en: "The security research tool Jadx, which is used for decompiling Dex to Java, has a critical vulnerability, CVE-2026-42049. Before version 1.5.6, when a user exports a decompiled APK as an Android Gradle project, Jadx inserts the `android:versionName` value from the AndroidManifest into the generated `build.gradle` Groovy template, but fails to perform adequate data sanitization. An attacker can exploit this flaw by constructing a `versionName` value within a malicious APK that can escape the string context. When a victim opens or attempts to build this exported Gradle project, the malicious code will be executed, thereby running attacker-controlled Groovy code. The impact of this vulnerability affects any environment using an older version of Jadx (pre-1.5.6) for decompiling and exporting projects. The recommended fix is to immediately upgrade Jadx to version 1.5.6 or higher, ensuring that version name information is correctly sanitized and handled when processing APK projects.",
    tags_en: ["Jadx", "CVE-2026-42049", "Android", "Decompilation", "Groovy", "APK"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-42049", lang: "EN" }
    ]
  },
  {
    id: "20260714-108",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenJS基金會宣布Node.js安全更新流程自動化，並應對AI工具帶來的漏洞通報激增",
    summary: "OpenJS基金會公布了2026年第二季資安進展，重點在於優化Node.js的資安更新流程。為提升效率，安全團隊利用自動化工具將原先複雜的36個步驟流程，縮減至7個步驟，並建立網頁管理介面，集中管理漏洞報告與版本檢查。此外，新工具導入大型語言模型（LLM），可參考Node.js威脅模型、歷史CVE及CWE模式，預估漏洞的可信度與CVSS分數，輔助安全團隊審查。同時，Node.js也放寬了漏洞修補的資訊保密要求，讓協作者能更快速地著手開發修補程式。由於AI代理輔助掃描工具的普及，安全團隊收到的漏洞通報量顯著增加，例如2026年2月HackerOne通報量增至4.6倍。為應對此趨勢，團隊更新了通報要求，要求通報者提供可重現的JavaScript範例，並利用LLM分類器進行初步可信度評估。",
    tags: ["OpenJS基金會", "Node.js", "LLM", "CVE", "自動化", "資安流程"],
    title_en: "OpenJS Foundation Announces Automation of Node.js Security Update Process to Address Surge in Vulnerability Disclosures from AI Tools",
    summary_en: "The OpenJS Foundation released its Q2 2026 security progress report, focusing on optimizing the Node.js security update process. To improve efficiency, the security team utilized automation tools to reduce a previously complex 36-step process to 7 steps, and established a web management interface to centralize vulnerability reporting and version checking. Furthermore, the new tool incorporates a Large Language Model (LLM) that can reference Node.js threat models, historical CVEs, and CWE patterns to estimate vulnerability credibility and CVSS scores, assisting the security team in review. Concurrently, Node.js has relaxed the information confidentiality requirements for vulnerability patching, allowing contributors to begin developing patches more quickly. Due to the proliferation of AI agent-assisted scanning tools, the volume of vulnerability disclosures received by the security team has significantly increased, with HackerOne reports in February 2026 rising to 4.6 times the previous volume. To address this trend, the team updated the disclosure requirements, mandating that reporters provide reproducible JavaScript examples and utilizing an LLM classifier for preliminary credibility assessment.",
    tags_en: ["OpenJS Foundation", "Node.js", "LLM", "CVE", "Automation", "Security Process"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177280", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-109",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Cloudflare建議先採用ML-DSA部署後量子密碼學，加速數位簽章標準化部署",
    summary: "網路基礎設施服務業者Cloudflare指出，儘管NIST仍在評估多種後量子數位簽章候選演算法，但建議業界不應等待更成熟的方案，應先採用已完成標準化的模組格基式數位簽章演算法（ML-DSA）進行後量子密碼學（PQC）的第一階段部署。ML-DSA目前被認為是整體取捨較均衡的通用型方案，可作為現階段部署的基礎。雖然ML-DSA在公開金鑰與簽章尺寸上較大，且效能並非全面優勢，但其標準化進度使其具備實用性。文章提醒，所有後量子簽章方案都需等待TLS通訊協定、數位憑證標準以及各種產品支援，距離全面部署仍需數年時間。Cloudflare預估，即使是FN-DSA等候選方案，在2033年之前也難以廣泛部署。",
    tags: ["Cloudflare", "後量子密碼學", "PQC", "ML-DSA", "數位簽章", "NIST"],
    title_en: "Cloudflare Recommends Adopting ML-DSA for Post-Quantum Cryptography Deployment to Accelerate Digital Signature Standardization",
    summary_en: "Cloudflare, a network infrastructure service provider, points out that although NIST is still evaluating multiple post-quantum digital signature candidate algorithms, the industry should not wait for a more mature solution. Instead, it should initiate the first phase of Post-Quantum Cryptography (PQC) deployment by adopting the standardized Module-Lattice-Based Digital Signature Algorithm (ML-DSA). ML-DSA is currently considered a general-purpose solution with a balanced overall trade-off and can serve as a foundation for current deployment. Although ML-DSA has larger public key and signature sizes, and its performance is not universally superior, its standardization progress gives it practical utility. The article reminds that all post-quantum signature solutions must await support across TLS protocols, digital certificate standards, and various products, meaning full deployment is still years away. Cloudflare estimates that even candidate solutions like FN-DSA will be difficult to widely deploy before 2033.",
    tags_en: ["Cloudflare", "Post-Quantum Cryptography", "PQC", "ML-DSA", "Digital Signature", "NIST"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177279", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-110",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Pentera推出AI安全驗證平台，將風險訊號轉化為可證明攻擊路徑",
    summary: "隨著AI攻擊工具加速，傳統的資安工作流僅依賴掃描器輸出、CVSS分數和威脅情報等分散的風險訊號，難以判斷哪些漏洞是真正可被利用的。Pentera推出AI驅動的安全驗證平台，旨在彌補此資訊孤島，將理論上的漏洞（如高嚴重性但無法到達的漏洞）轉化為可驗證的攻擊證據。該平台透過安全模擬真實世界的攻擊技術，在不影響生產環境的前提下，生成「已驗證的攻擊路徑」，詳細展示攻擊者如何跨越身份、網路、雲端資產和安全控制，鏈接多個暴露點。這使得資安團隊的決策流程從「審查、推論、排定優先級」轉變為「驗證、證明、排定優先級、修復」。此外，Pentera透過MCP（Model Context Protocol）伺服器，將這些驗證數據直接整合到現有的AI工作流中，讓AI代理可以利用自然語言查詢「哪些關鍵掃描發現已被驗證為可利用的攻擊路徑」，從而實現更精準、行動導向的修復。",
    tags: ["Pentera", "AI安全", "安全驗證", "攻擊路徑", "MCP", "資安工作流"],
    title_en: "Pentera Launches AI Security Validation Platform to Convert Risk Signals into Proven Attack Paths",
    summary_en: "As AI attack tools accelerate, traditional cybersecurity workflows often rely on disparate risk signals—such as scanner outputs, CVSS scores, and threat intelligence—making it difficult to determine which vulnerabilities are truly exploitable. Pentera has launched an AI-driven security validation platform designed to bridge this information silo, converting theoretical vulnerabilities (such as high-severity but unreachable flaws) into verifiable attack evidence. The platform simulates real-world attack techniques to generate 'validated attack paths' without impacting the production environment. These paths detail how an attacker can traverse identity, network, cloud assets, and security controls, linking multiple exposure points. This shifts the security team's decision process from 'reviewing, inferring, and prioritizing' to 'validating, proving, prioritizing, and remediating.' Furthermore, Pentera integrates this validation data directly into existing AI workflows via its MCP (Model Context Protocol) server, allowing AI agents to use natural language queries like, 'Which critical scan findings have been validated as exploitable attack paths?' This enables more precise and action-oriented remediation.",
    tags_en: ["Pentera", "AI Security", "Security Validation", "Attack Path", "MCP", "Cybersecurity Workflow"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/how-pentera-turns-ai-security-workflows.html", lang: "EN" }
    ]
  },
  {
    id: "20260714-111",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Health App 5.03 更新：增強多樣化健康追蹤指標與睡眠數據分析",
    summary: "Google Health App 發布 5.03 版本，為 Android 和 iOS 用戶帶來多項生活品質提升。本次更新主要在「今日」分頁新增了更多可追蹤的指標，包括心率變異性、呼吸速率、血氧飽和度（SpO2）、靜息心率、皮膚溫度變化、血糖、蛋白質、脂肪和碳水化合物攝取等，讓用戶能更方便地一目瞭然地掌握日常健康進度。在睡眠追蹤方面，本次更新修正了午睡（Naps）超過 20 分鐘的時長，使其計入 24 小時總睡眠時長。此外，App 修正了游泳運動的距離和單位錯誤，並解決了與 Strava 之間海拔爬升數據不一致的問題。對於 iOS 用戶，本次 5.03 版本也同步提供了先前在 Android 5.02 版本中已有的功能，例如可拖曳重新排序「關鍵指標」圖表，以及改善了食物搜尋結果，使其顯示份量單位和卡路里，提升了用戶體驗。",
    tags: ["Google Health", "Android", "iOS", "健康追蹤", "App 更新", "數據分析"],
    title_en: "Google Health App 5.03 Update: Enhancing Diverse Health Tracking Metrics and Sleep Data Analysis",
    summary_en: "Google Health App has released version 5.03, bringing several quality-of-life improvements for both Android and iOS users. This update primarily adds more trackable metrics to the 'Today' tab, including Heart Rate Variability, Respiration Rate, Blood Oxygen Saturation (SpO2), Resting Heart Rate, Skin Temperature Change, and tracking for glucose, protein, fat, and carbohydrate intake. This allows users to easily monitor their daily health progress at a glance. Regarding sleep tracking, this update corrects the duration of naps exceeding 20 minutes, ensuring they are counted toward the total 24-hour sleep duration. Furthermore, the App fixes errors related to swimming exercise distance and units, and resolves data inconsistencies regarding elevation gain with Strava. For iOS users, this 5.03 version also synchronizes features previously available in Android 5.02, such as the ability to drag and reorder 'Key Metrics' charts, and improves food search results by displaying serving units and calorie counts, enhancing the overall user experience.",
    tags_en: ["Google Health", "Android", "iOS", "Health Tracking", "App Update", "Data Analysis"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/google-health-5-03-release-notes", lang: "EN" }
    ]
  },
  {
    id: "20260714-112",
    trackers: ["os"],
    category: "重點關注",
    title: "Philips Hue Bridge Pro 韌體更新出錯，可能導致設備進入不可恢復狀態，用戶需注意更新版本",
    summary: "Philips Hue Bridge Pro 的韌體更新版本 2071353020 疑似存在錯誤，可能導致部分用戶的設備進入不可恢復的故障狀態，使燈具和配件無法正常控制。受影響的現象包括橋接器上的指示燈變紅，且重置操作無法解決問題，甚至可能需要更換新設備。Philips Hue 已發布新的修復版本 2071401010 來解決此問題，該更新旨在修復在自動更新關閉一段時間後，手動啟動更新時可能發生的故障。為避免受影響，用戶建議在修補程式發布前，透過 Hue 應用程式關閉自動更新功能。",
    tags: ["Philips Hue", "Bridge Pro", "韌體更新", "設備故障", "自動更新", "IoT"],
    title_en: "Philips Hue Bridge Pro Firmware Update Error May Cause Irrecoverable Device State; Users Advised to Note Update Version",
    summary_en: "The firmware update version 2071353020 for the Philips Hue Bridge Pro is suspected to contain an error, which may cause some users' devices to enter an irrecoverable failure state, preventing normal control of lights and accessories. Affected symptoms include the bridge's indicator light turning red, and the issue cannot be resolved by resetting, potentially requiring the replacement of the device. Philips Hue has released a new fix version, 2071401010, to address this issue. This update aims to fix a malfunction that might occur when manually initiating an update after automatic updates have been disabled for a period. To avoid being affected, users are advised to disable automatic updates via the Hue application before the patch is released.",
    tags_en: ["Philips Hue", "Bridge Pro", "Firmware Update", "Device Failure", "Automatic Update", "IoT"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/philips-hue-bridge-pro-update-seems-to-be-breaking-the-hub-taking-lights-down-with-it", lang: "EN" }
    ]
  },
  {
    id: "20260714-113",
    trackers: ["os"],
    category: "重點關注",
    title: "三星Galaxy Z Fold 8與Z Flip 8：免費儲存升級優惠可能縮減，消費者需自付部分費用",
    summary: "根據韓國媒體報導，三星（Samsung）的旗艦摺疊機型，如即將推出的Galaxy Z Flip 8和Fold 8，預購時的「免費雙倍儲存升級」優惠可能大幅調整。過去自Galaxy S23系列推出以來，三星曾提供讓消費者預購較低容量機型，可免費升級至更高容量（例如256GB升級至512GB，甚至更高）。然而，從下一代摺疊機型開始，此免費升級福利將被大幅縮減。新的政策要求購買者必須支付容量差異的約五成費用，預計自付費用約為126,500韓元（約90美元）。報導指出，此舉是三星為提高旗艦產品線的利潤空間所採取的措施。雖然免費升級的時代可能結束，但仍提供部分折扣，消費者在購買下一代Galaxy設備時需注意此費用變動。",
    tags: ["三星", "Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "儲存升級", "消費者政策", "電子產品"],
    title_en: "Samsung Galaxy Z Fold 8 and Z Flip 8: Free storage upgrade offers may be reduced, requiring consumers to pay partial fees",
    summary_en: "According to Korean media reports, the 'free double storage upgrade' offer for Samsung's flagship foldable models, such as the upcoming Galaxy Z Flip 8 and Fold 8, may be significantly adjusted. Since the launch of the Galaxy S23 series, Samsung has offered consumers the ability to pre-order lower-capacity models and upgrade them for free to higher capacities (for example, upgrading from 256GB to 512GB, or even higher). However, starting with the next generation of foldable models, this free upgrade benefit will be greatly reduced. The new policy requires buyers to pay approximately 50% of the capacity difference cost, estimated to be around 126,500 Korean Won (approximately 90 USD). The report indicates that this measure is being taken by Samsung to increase profit margins for its flagship product line. Although the era of free upgrades may be ending, some discounts are still offered, and consumers should be aware of these cost changes when purchasing next-generation Galaxy devices.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Galaxy Z Flip 8", "Storage Upgrade", "Consumer Policy", "Electronics"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/samsung-could-end-free-storage-upgrades-with-galaxy-z-fold-8-and-z-flip-8", lang: "EN" }
    ]
  },
  {
    id: "20260714-114",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Gemini 擴大整合至 Chrome 瀏覽器，英國用戶可透過側邊欄與右鍵選單使用 AI 摘要與內容生成",
    summary: "Google 持續擴大 Gemini AI 功能在 Chrome 瀏覽器的整合，最新於英國地區推出。用戶可以在 Mac、Windows 和 Chromebook Plus 設備上，透過螢幕右上角、鍵盤快捷鍵、Mac 選單列或右鍵選單，啟動 Gemini。此功能允許 Gemini 以側邊欄或浮動視窗的形式呈現，提供多樣化的使用場景。用戶可利用它來總結冗長內容、跨多個分頁比較資訊，並與 Google 生態系統（如 Calendar、Maps、Gmail）深度整合，無需離開當前頁面即可執行排程會議、查詢地點或起草郵件。此外，它還利用 Nano Banana 2 能力，支援透過文字提示對網頁圖片進行轉換。Google 預計在英國桌面版推出後，下個月將支援 Chrome for iOS 用戶。此舉顯示 Google 積極將生成式 AI 融入核心瀏覽器體驗，提升用戶的資訊處理效率。",
    tags: ["Google", "Gemini", "Chrome", "AI 整合", "生成式 AI", "瀏覽器功能"],
    title_en: "Google Gemini expands integration into Chrome browser, offering AI summaries and content generation to UK users via sidebar and right-click menu",
    summary_en: "Google continues to expand the integration of Gemini AI features into the Chrome browser, with the latest rollout targeting the UK region. Users can now activate Gemini on Mac, Windows, and Chromebook Plus devices via the top-right corner of the screen, keyboard shortcuts, the Mac menu bar, or the right-click menu. This feature allows Gemini to appear in a sidebar or floating window, offering diverse use cases. Users can utilize it to summarize lengthy content, compare information across multiple tabs, and deeply integrate with the Google ecosystem (such as Calendar, Maps, and Gmail). This allows users to schedule meetings, look up locations, or draft emails without leaving the current page. Furthermore, it leverages Nano Banana 2 capabilities to support converting webpage images using text prompts. Google expects to support Chrome for iOS users next month after the desktop version launch in the UK. This move demonstrates Google's commitment to integrating generative AI into the core browser experience, enhancing user information processing efficiency.",
    tags_en: ["Google", "Gemini", "Chrome", "AI Integration", "Generative AI", "Browser Features"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/14/gemini-chrome-uk", lang: "EN" }
    ]
  },
  {
    id: "20260714-115",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 預計推出首款 AI 設備：便攜式智慧揚聲器，具備相機與多感測器",
    summary: "根據彭博社報導，OpenAI 預計將進入硬體市場，首款產品將是一款便攜式、無螢幕的智慧揚聲器。該設備被定位為「AI 時代的新型家庭電腦」，旨在提高用戶的生產力。它不僅具備揚聲器功能，還整合了相機和多種感測器，能理解用戶周遭的環境和情境，並搭載超越傳統智慧揚聲器的先進 AI 模型。這款設備設計為可充電電池供電，允許用戶在不同房間（如洗衣房、廚房、客廳）間攜帶使用，或選擇持續插電使用。雖然其功能可能與 Apple HomePod 類比，但 OpenAI 聲稱其不會侵犯任何商業秘密。這款揚聲器是 OpenAI 正在開發的約五個產品之一，其長期規劃甚至包括一款能取代智慧型手機的行動 AI 設備，以及穿戴式產品和家用機器人。",
    tags: ["OpenAI", "智慧揚聲器", "AI 設備", "硬體市場", "感測器", "行動 AI"],
    title_en: "OpenAI Expected to Launch First AI Device: Portable Smart Speaker with Camera and Multi-Sensors",
    summary_en: "According to Bloomberg, OpenAI is expected to enter the hardware market with its first product: a portable, screenless smart speaker. The device is positioned as a 'new type of home computer for the AI era,' designed to boost user productivity. It not only features speaker functionality but also integrates a camera and various sensors, allowing it to understand the user's surrounding environment and context, and is powered by an advanced AI model that surpasses traditional smart speakers. The device is designed to run on rechargeable batteries, allowing users to carry it between different rooms (such as laundry rooms, kitchens, and living rooms), or to be used continuously while plugged in. Although its functionality may be comparable to the Apple HomePod, OpenAI claims it will not infringe on any trade secrets. This speaker is one of approximately five products OpenAI is developing, with long-term plans even including a mobile AI device capable of replacing smartphones, as well as wearable products and household robots.",
    tags_en: ["OpenAI", "Smart Speaker", "AI Device", "Hardware Market", "Sensor", "Mobile AI"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/report-openais-first-device-will-be-a-portable-speaker-with-a-camera-and-other-sensors", lang: "EN" }
    ]
  },
  {
    id: "20260714-116",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI回應蘋果訴訟：否認竊取商業機密，強調專注於創新技術開發",
    summary: "蘋果公司近期對OpenAI提起訴訟，指控OpenAI及其前員工竊取了蘋果的機密硬體資訊，目的是推動OpenAI的消費性設備業務。OpenAI隨後發布聲明，雖然表示認真對待這些指控，但同時聲稱「不了解任何支持該指控有根據的證據」，並強調公司相信公平競爭，專注於開發賦能人們的創新技術。報導指出，蘋果的訴訟核心並非阻止前員工為競爭對手工作，而是指控其帶走了專有的文件、硬體資訊及其他機密資料。目前OpenAI尚未詳細說明其立場或內部措施，法律戰的細節仍待OpenAI提交正式回應。",
    tags: ["OpenAI", "Apple", "商業機密", "法律訴訟", "AI技術", "競爭法"],
    title_en: "OpenAI Responds to Apple Lawsuit: Denies Theft of Trade Secrets, Emphasizes Focus on Innovative Technology Development",
    summary_en: "Apple recently filed a lawsuit against OpenAI, accusing the company and former employees of stealing Apple's confidential hardware information to advance OpenAI's consumer device business. OpenAI subsequently issued a statement, stating that while they take the allegations seriously, they claim to be \"unaware of any evidence supporting these accusations,\" and emphasized that the company believes in fair competition and is focused on developing innovative technology that empowers people. The report indicates that the core of Apple's lawsuit is not preventing former employees from working for competitors, but rather accusing them of taking proprietary documents, hardware information, and other confidential data. OpenAI has not yet detailed its position or internal measures, and the specifics of the legal battle await OpenAI's formal response.",
    tags_en: ["OpenAI", "Apple", "Trade Secrets", "Legal Litigation", "AI Technology", "Competition Law"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/openai-says-it-has-seen-no-evidence-supporting-apples-trade-secret-theft-claims", lang: "EN" }
    ]
  },
  {
    id: "20260714-117",
    trackers: ["os"],
    category: "重點關注",
    title: "Canva Code 2.0 重磅發布：AI 賦能視覺化網頁與應用程式編輯",
    summary: "設計工具巨頭 Canva 今日發表了 Canva Code 2.0，這是一個由 AI 驅動的編碼平台。該版本旨在讓使用者能夠像在 Canva 設計介面一樣，視覺化地建立、編輯網站、應用程式和互動式體驗。使用者可以透過文字提示（prompt）、選擇超過 50 個新範本，或直接匯入現有的 HTML 程式碼來開始創作。新功能強調了高度的創意控制權，並整合了 Canva 內建的品牌工具，讓設計與編碼流程更為一致。此外，Canva Code 2.0 還支援團隊成員的即時協作，並且產出的作品是完全互動式的，能自動適應不同螢幕尺寸，並可連接自訂網域或發佈到免費的 Canva 網域。這項更新代表 Canva 將其 AI 能力從單純的內容生成，擴展到完整的互動式產品開發流程，極大地降低了使用者建立專業網頁的門檻。",
    tags: ["Canva", "Canva Code 2.0", "AI 賦能", "網頁開發", "視覺化編輯", "互動式體驗"],
    title_en: "Canva Code 2.0 Major Release: AI Empowers Visual Web and Application Editing",
    summary_en: "Design tool giant Canva today announced Canva Code 2.0, an AI-driven coding platform. This version aims to allow users to visually build, edit websites, applications, and interactive experiences, much like working within the Canva design interface. Users can start creating using text prompts, selecting from over 50 new templates, or directly importing existing HTML code. The new features emphasize high creative control and integrate Canva's built-in brand tools, ensuring greater consistency between design and coding workflows. Furthermore, Canva Code 2.0 supports real-time collaboration among team members, and the resulting creations are fully interactive, automatically adapting to different screen sizes, and can be connected to custom domains or published to a free Canva domain. This update signifies Canva's expansion of its AI capabilities from mere content generation to a complete interactive product development workflow, significantly lowering the barrier for users to build professional websites.",
    tags_en: ["Canva", "Canva Code 2.0", "AI Empowerment", "Web Development", "Visual Editing", "Interactive Experience"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/canva-code-2-0-adds-visual-editing-html-imports-and-real-time-collaboration", lang: "EN" }
    ]
  },
  {
    id: "20260714-118",
    trackers: ["os"],
    category: "重點關注",
    title: "PrismML發布Bonsai 27B模型，宣稱能在iPhone、iPad及Mac原生運行，並強調與Apple的技術合作進展",
    summary: "AI新創公司PrismML發布了其Bonsai 27B大型語言模型。該模型宣稱可以在Apple設備（Mac、iPhone、iPad）上原生運行，並透過MLX框架支援，同時也支援NVIDIA CUDA。技術上，Bonsai 27B採用了混合注意力架構，並透過專為其設計的低位元核心（low-bit kernels）實現高效能運算。文章指出，該模型在1-bit模式下，在M5 Max上的速度可達87 tok/s，並聲稱這是第一個能通過手機設備（如12 GB iPhone）的記憶體限制的27B模型。此外，PrismML的執行長Babak Hassibi也透露，Apple正在評估其技術的性能、能效和速度。雖然PrismML將與Apple的合作描述為積極進展，但文章提醒開發者應保持審慎態度，並建議關注該模型在實際應用場景中的技術評估。",
    tags: ["PrismML", "Bonsai 27B", "Apple", "MLX", "AI模型", "邊緣運算"],
    title_en: "PrismML Releases Bonsai 27B Model, Claims Native Operation on iPhone, iPad, and Mac, Highlighting Technical Collaboration with Apple",
    summary_en: "AI startup PrismML has released its Bonsai 27B large language model. The model claims native operation on Apple devices (Mac, iPhone, iPad) and is supported via the MLX framework, while also supporting NVIDIA CUDA. Technically, Bonsai 27B utilizes a hybrid attention architecture and achieves high-performance computing through specialized low-bit kernels designed for it. The article notes that the model achieves a speed of up to 87 tok/s in 1-bit mode on the M5 Max, and claims to be the first 27B model to overcome the memory limitations of mobile devices (such as a 12 GB iPhone). Furthermore, PrismML CEO Babak Hassibi revealed that Apple is evaluating the model's performance, energy efficiency, and speed. Although PrismML describes its collaboration with Apple as making positive progress, the article advises developers to remain cautious and suggests monitoring the model's technical evaluation in real-world application scenarios.",
    tags_en: ["PrismML", "Bonsai 27B", "Apple", "MLX", "AI Model", "Edge Computing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/prismml-releases-bonsai-27b-claiming-first-major-ai-model-of-its-size-fit-for-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260714-119",
    trackers: ["os"],
    category: "重點關注",
    title: "歐盟修訂電池法規：Apple Watch等穿戴裝置可豁免用戶可更換電池要求",
    summary: "歐盟委員會修訂了《電池法規》，為包括Apple Watch在內的某些穿戴式裝置（如智慧手錶、智慧眼鏡、健身追蹤器）爭取了豁免權。原法規要求內建電池的便攜式電池必須在產品壽命週期內由用戶可移除和更換。本次豁免的關鍵在於，這些穿戴裝置的電池如果被用戶自行拆卸，可能會影響其安全性、耐用性或防水性，或者由於裝置體積過小，使得用戶無法安全地進行電池更換。雖然此修訂為Apple等廠商在歐洲市場保留了密封電池設計的設計自由度，但該提案仍需經過歐洲議會和歐盟理事會的審查。歐盟方面強調，此舉並非屈服於外部壓力，而是基於確保消費者和工業產品安全性的技術考量。",
    tags: ["歐盟", "EU", "電池法規", "Apple Watch", "穿戴裝置", "產品設計"],
    title_en: "EU Revises Battery Regulation: Wearable Devices like Apple Watch Can Be Exempted from User-Replaceable Battery Requirements",
    summary_en: "The European Commission has revised the Battery Regulation, securing exemptions for certain wearable devices, including the Apple Watch (such as smartwatches, smart glasses, and fitness trackers). The original regulation required portable batteries with built-in batteries to be user-removable and replaceable throughout the product lifecycle. The key to this exemption is that if these wearable devices' batteries are disassembled by the user, it may compromise their safety, durability, or water resistance, or due to the small size of the device, it may be impossible for the user to safely replace the battery. While this revision retains design freedom for manufacturers like Apple to use sealed battery designs in the European market, the proposal still requires review by the European Parliament and the Council of the European Union. The EU emphasizes that this measure is not a concession to external pressure, but is based on technical considerations to ensure the safety of consumer and industrial products.",
    tags_en: ["EU", "EU", "Battery Regulation", "Apple Watch", "Wearable Devices", "Product Design"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/apple-watch-among-wearables-exempted-from-eu-user-replaceable-battery-rules", lang: "EN" }
    ]
  },
  {
    id: "20260714-120",
    trackers: ["os"],
    category: "重點關注",
    title: "Spotify推出Talk to Spotify AI功能，讓付費用戶能用自然語言互動查詢音樂與內容",
    summary: "Spotify宣布推出名為Talk to Spotify的AI功能，目前處於測試版（beta）階段，可讓符合資格的Premium用戶透過手機應用程式（iOS和Android）使用語音或文字與應用程式內AI助理互動。此功能能利用用戶的收聽歷史，並結合對藝人、專輯、歌曲、播客和有聲書的廣泛知識，讓用戶能用自然語言提問，例如詢問「我之前聽過哪些流派？」或「請播放一些我沒聽過的藝人」。該功能最大的亮點是能維持多輪對話的上下文，讓用戶可以透過更自然的問答流程來精煉需求，例如先要求播放某類藝人，再進一步要求「加入Bad Bunny」或「讓節奏更歡快」。目前該功能正在美國、愛爾蘭和瑞典等地區，針對18歲以上的Premium用戶逐步推出。此更新屬於用戶體驗與功能增強，而非資安修補，主要影響為提升內容探索的便利性。",
    tags: ["Spotify", "AI助理", "自然語言處理", "Premium用戶", "iOS", "Android"],
    title_en: "Spotify launches Talk to Spotify AI feature, allowing paid users to interact with music and content using natural language",
    summary_en: "Spotify has announced the launch of an AI feature called Talk to Spotify, which is currently in beta. Eligible Premium users can interact with the in-app AI assistant using voice or text via the mobile application (iOS and Android). This feature utilizes the user's listening history and combines it with extensive knowledge about artists, albums, songs, podcasts, and audiobooks, allowing users to ask questions in natural language, such as asking, \"What genres have I listened to before?\" or \"Please play some artists I haven't heard before.\" The biggest highlight of this feature is its ability to maintain conversational context across multiple turns, allowing users to refine their requests through a more natural Q&A flow—for example, first requesting a certain type of artist, and then further requesting \"add Bad Bunny\" or \"make the beat more upbeat.\" The feature is currently rolling out to Premium users aged 18 and over in regions such as the US, Ireland, and Sweden. This update is classified as a user experience and feature enhancement, rather than a security patch, primarily improving the convenience of content discovery.",
    tags_en: ["Spotify", "AI Assistant", "Natural Language Processing", "Premium User", "iOS", "Android"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/spotify-now-lets-premium-users-chat-about-music-podcasts-and-books", lang: "EN" }
    ]
  },
  {
    id: "20260714-121",
    trackers: ["os"],
    category: "重點關注",
    title: "IDC報告：2026年第二季中國智慧型手機市場分析，華為與蘋果表現亮眼",
    summary: "根據IDC的報告，在2026年第二季度，中國智慧型手機市場整體年減4.3%，總出貨量約為6600萬台。在主要手機製造商中，華為和蘋果是唯一實現出貨增長的品牌。蘋果的出貨量年增24.4%，市場佔有率從13.9%提升至18.1%，位居第二。華為仍保持市場領導地位，佔比為22.6%。其他主要品牌則因記憶體和元件成本上升、政府補貼減弱以及消費者需求疲軟（特別是618購物節期間）而大幅下滑。IDC指出，蘋果提前預示下半年的價格上漲，促使部分消費者提早購買iPhone 17系列，這顯示了品牌吸引力。然而，IDC警告，隨著低成本元件庫存耗盡，成本壓力可能在下半年加劇，預計中國市場的年減幅度可能擴大至20%。",
    tags: ["IDC", "Apple", "Huawei", "智慧型手機", "中國市場", "市場分析"],
    title_en: "IDC Report: China Smartphone Market Analysis for Q2 2026, Huawei and Apple Show Strong Performance",
    summary_en: "According to IDC's report, the overall Chinese smartphone market saw a year-on-year decline of 4.3% in the second quarter of 2026, with total shipments estimated at 66 million units. Among major smartphone manufacturers, Huawei and Apple were the only brands to achieve shipment growth. Apple's shipments increased by 24.4% year-on-year, raising its market share from 13.9% to 18.1%, securing the second spot. Huawei maintained its market leadership with a 22.6% share. Other major brands experienced significant declines due to rising memory and component costs, weakening government subsidies, and soft consumer demand (especially during the 618 shopping festival). IDC noted that Apple's advance warning of price increases in the second half of the year prompted some consumers to purchase the iPhone 17 series early, demonstrating strong brand appeal. However, IDC cautioned that as low-cost component inventories deplete, cost pressure may intensify in the second half, projecting that the year-on-year decline in the Chinese market could expand to 20%.",
    tags_en: ["IDC", "Apple", "Huawei", "Smartphone", "China Market", "Market Analysis"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/idc-apple-shipped-nearly-1-in-5-smartphones-in-china-in-q2-2026", lang: "EN" }
    ]
  },
  {
    id: "20260714-122",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果（Apple）回應Epic Games，爭取暫停App Store佣金案的低階法庭程序",
    summary: "本案涉及蘋果公司（Apple）與Epic Games之間關於App Store佣金的法律爭議。核心爭議點源於2021年的一項禁令，要求蘋果允許開發者將用戶引導至App Store以外的購買選項。雖然禁令未明確禁止對這些交易收取佣金，但法官後續裁定蘋果的實施方式違反了禁令，並裁定蘋果處於藐視法庭（contempt）狀態。為應對最高法院（Supreme Court）同意審理這項藐視法庭的裁定，蘋果已提出暫停低階法庭程序的請求。Epic Games則反對，認為這是蘋果延遲審理其提議的費用。蘋果在回應Epic的異議中，堅稱其主張的唯一基礎是最高法院對「藐視法庭」裁定的審查，並指出Epic的論點誤解了最高法院審查的範圍，認為若不審查藐視法庭的裁定，任何關於佣金的「移交程序」（remand proceedings）都缺乏法律基礎。蘋果要求法庭在審查期間暫停程序，以避免程序進展後再被最高法院的決定所影響。",
    tags: ["Apple", "Epic Games", "App Store", "最高法院", "藐視法庭", "法律訴訟", "佣金爭議"],
    title_en: "Apple Responds to Epic Games, Seeking Stay of Lower Court Proceedings in App Store Commission Case",
    summary_en: "This case involves a legal dispute between Apple and Epic Games concerning App Store commissions. The core dispute stems from a 2021 injunction that required Apple to allow developers to direct users to purchasing options outside the App Store. Although the injunction did not explicitly prohibit charging commissions on these transactions, a subsequent court ruling found that Apple's implementation violated the injunction, and ruled that Apple was in contempt of court. To address the Supreme Court's agreement to hear this contempt ruling, Apple has filed a request to stay the lower court proceedings. Epic Games, however, opposes this, arguing that it is Apple delaying the review of the costs proposed by Epic. In its response to Epic's objection, Apple insists that the sole basis for its claim is the Supreme Court's review of the 'contempt' ruling, pointing out that Epic's arguments misunderstand the scope of the Supreme Court's review, and arguing that any 'remand proceedings' regarding commissions would lack legal basis without the review of the contempt ruling. Apple requests the court to stay the proceedings during the review period to prevent the progress of the case from being affected by the Supreme Court's eventual decision.",
    tags_en: ["Apple", "Epic Games", "App Store", "Supreme Court", "Contempt of Court", "Legal Litigation", "Commission Dispute"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/apple-says-epics-arguments-against-pausing-the-case-are-wrong", lang: "EN" }
    ]
  },
  {
    id: "20260714-123",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果傳傳「20週年 iPhone」設計趨勢：邁向單片玻璃外觀的設計演進",
    summary: "本文討論了蘋果（Apple）的設計願景，特別是前設計總監 Jony Ive 曾提出的「單片玻璃」（single slab of glass）外觀概念。報導指出，蘋果似乎在 Ive 離開後仍持續追求此目標，並透過「Liquid Glass」等軟體準備來支持新的硬體設計。文章預期，在「20週年 iPhone」的設計上，可能會提供更接近此單片玻璃外觀的元素，預示著蘋果在未來產品設計上持續的演進趨勢。此為產品設計趨勢分析，未涉及任何安全漏洞或修補建議。",
    tags: ["Apple", "iPhone", "設計趨勢", "Jony Ive", "單片玻璃", "產品規劃"],
    title_en: "Apple's Design Trend for '20th Anniversary iPhone': Evolution Towards a Single Slab Glass Aesthetic",
    summary_en: "This article discusses Apple's design vision, particularly the 'single slab of glass' aesthetic concept once proposed by former design director Jony Ive. Reports indicate that Apple appears to continue pursuing this goal even after Ive's departure, utilizing software preparations such as 'Liquid Glass' to support new hardware designs. The article anticipates that the '20th Anniversary iPhone' design may incorporate elements closer to this single slab glass aesthetic, signaling Apple's ongoing evolution in product design. This is a product design trend analysis and does not involve any security vulnerabilities or patch recommendations.",
    tags_en: ["Apple", "iPhone", "Design Trend", "Jony Ive", "Single Slab Glass", "Product Planning"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/how-the-20th-anniversary-iphone-will-provide-a-single-slab-of-glass-look", lang: "EN" }
    ]
  },
  {
    id: "20260714-124",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安資訊：Apple TV 釋出電影《Mayday》預告片，主演為萊恩·雷諾茲與肯尼斯·布蘭阿格",
    summary: "本文為娛樂新聞，介紹 Apple TV 釋出的電影《Mayday》預告片。該片為一部動作喜劇間諜電影，主演為萊恩·雷諾茲（飾演美國海軍飛行員）和肯尼斯·布蘭阿格（飾演前 KGB 探員）。故事背景設定在冷戰時期，講述主角在深入敵方陣地後，與一位不尋常的盟友之間發展出的關係。電影由 John Francis Daley 和 Jonathan Goldstein 共同編劇與執導。本內容不涉及任何資安漏洞、產品更新或技術安全資訊，僅為影視娛樂報導。",
    tags: ["Apple TV", "Mayday", "萊恩·雷諾茲", "肯尼斯·布蘭阿格", "娛樂新聞"],
    title_en: "Non-Security Information: Apple TV Releases Trailer for Movie 'Mayday,' Starring Ryan Reynolds and Kenneth Branagh",
    summary_en: "This article is entertainment news, introducing the trailer for the movie 'Mayday' released by Apple TV. The film is an action-comedy spy movie starring Ryan Reynolds (as a US Navy pilot) and Kenneth Branagh (as a former KGB agent). The story is set during the Cold War, detailing the relationship that develops between the protagonist and an unusual ally after infiltrating enemy territory. The movie was co-written and directed by John Francis Daley and Jonathan Goldstein. This content does not involve any cybersecurity vulnerabilities, product updates, or technical security information; it is purely an entertainment report.",
    tags_en: ["Apple TV", "Mayday", "Ryan Reynolds", "Kenneth Branagh", "Entertainment News"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/apple-tvs-next-action-comedy-starring-ryan-reynolds-gets-first-trailer", lang: "EN" }
    ]
  },
  {
    id: "20260714-125",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "線上安全監管機構要求科技巨頭加強防範性勒索（Sextortion）機制，點名 Apple、Meta 與 Google",
    summary: "一線上安全監管機構指出，科技巨頭在應對性勒索（sextortion）等網路性剝削犯罪方面，仍有許多可以改進之處。該監管機構特別點名了 Apple、Meta 和 Google 這三家公司，要求它們必須採取更積極的措施來保護用戶，特別是年齡較小的受害者。性勒索犯罪的受害者傾向為青少年，包括未滿 16 歲的兒童。文章強調，科技公司應共同加強平台層面的安全機制，以有效遏止利用網路進行性剝削和勒索的行為，保護弱勢群體。",
    tags: ["性勒索", "Sextortion", "Apple", "Meta", "Google", "網路安全", "平台責任"],
    title_en: "Online Security Regulator Demands Tech Giants Strengthen Defense Against Sextortion, Naming Apple, Meta, and Google",
    summary_en: "An online security regulator has pointed out that tech giants still have significant room for improvement in addressing online sexual exploitation crimes such as sextortion. The regulator specifically named Apple, Meta, and Google, demanding that they take more proactive measures to protect users, especially younger victims. Since the victims of sextortion crime tend to be adolescents, including children under 16, the article emphasizes that tech companies must jointly strengthen platform-level security mechanisms to effectively curb the use of the internet for sexual exploitation and extortion, thereby protecting vulnerable groups.",
    tags_en: ["Sextortion", "Apple", "Meta", "Google", "Cybersecurity", "Platform Responsibility"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/safety-regulator-says-apple-needs-to-do-more-to-combat-sextortion", lang: "EN" }
    ]
  },
  {
    id: "20260714-126",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple @ Work 播客討論 IDC PC 出貨報告：市場需求與營收增長分析",
    summary: "本集 Apple @ Work 播客邀請 Jitesh Ubrani，深入分析 IDC 近期的 PC 出貨報告。報告指出整體 PC 出貨量有所下降，但 Apple 的營收卻呈現增長趨勢。討論重點聚焦於市場的結構性變化，特別是儘管整體市場需求放緩，Apple 仍能透過其產品線和服務，維持穩定的營收增長。本內容屬於產業市場分析，而非資安事件，主要提供市場趨勢和產品銷售的洞察。建議關注 Apple 在市場低迷期如何透過優化產品組合和服務生態系來應對市場挑戰。",
    tags: ["Apple", "IDC", "PC 市場", "市場分析", "營收報告"],
    title_en: "Apple @ Work Podcast Discusses IDC PC Shipment Report: Market Demand and Revenue Growth Analysis",
    summary_en: "This episode of the Apple @ Work podcast invites Jitesh Ubrani to deeply analyze the recent IDC PC shipment report. The report indicates a decline in overall PC shipments, yet Apple's revenue shows a growth trend. The discussion focuses on structural changes in the market, particularly how Apple is maintaining stable revenue growth through its product line and services, even as overall market demand slows. This content is an industry market analysis, not a cybersecurity incident, and primarily provides insights into market trends and product sales. It suggests paying attention to how Apple is addressing market challenges by optimizing its product mix and service ecosystem during periods of market downturn.",
    tags_en: ["Apple", "IDC", "PC Market", "Market Analysis", "Revenue Report"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/14/apple-work-podcast-breaking-down-the-recent-idc-pc-shipment-report", lang: "EN" }
    ]
  },
  {
    id: "20260714-127",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布重磅升級圖片搜尋功能，整合 AI 打造個人化視覺內容體驗",
    summary: "Google 宣布為紀念圖片搜尋服務成立二十五週年，將對現有的圖片搜尋介面進行重大升級。新功能預計將整合更先進的 AI 技術，提供一個主動的圖片內容畫廊。用戶在尚未輸入任何搜尋關鍵字時，就能看到一個根據其個人興趣和歷史紀錄（包括網頁和搜尋紀錄）持續更新的圖片內容建議畫廊。這項改變旨在提供更具視覺化和個人化的搜尋體驗。雖然文章未提供具體版本號或技術細節，但核心趨勢是將 AI 深度整合到基礎的搜尋功能中，讓使用者在進入搜尋頁面時，就能接收到高度相關的視覺內容建議，提升用戶的互動性和黏著度。",
    tags: ["Google", "圖片搜尋", "AI 整合", "使用者體驗", "搜尋引擎"],
    title_en: "Google Announces Major Upgrade to Image Search Functionality, Integrating AI for Personalized Visual Content Experience",
    summary_en: "Google announced a major upgrade to its image search interface to commemorate the 25th anniversary of the service. The new features are expected to integrate advanced AI technology, providing an active image content gallery. Users will see a continuously updating image content suggestion gallery based on their personal interests and history (including web and search history) even before entering any search keywords. This change aims to provide a more visual and personalized search experience. Although the article does not provide specific version numbers or technical details, the core trend is the deep integration of AI into fundamental search functions, allowing users to receive highly relevant visual content suggestions immediately upon entering the search page, thereby enhancing user engagement and stickiness.",
    tags_en: ["Google", "Image Search", "AI Integration", "User Experience", "Search Engine"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/google/2026/07/google-revamps-image-search-for-its-25th-anniversary-with-more-images-and-more-ai", lang: "EN" }
    ]
  },
  {
    id: "20260714-128",
    trackers: ["os"],
    category: "重點關注",
    title: "紐約州宣布實施數據中心建設為期一年的暫停令，關注能源與環境衝擊",
    summary: "紐約州在民主黨州長 Kathy Hochul 的宣布下，成為首個對大型數據中心建設實施暫停令的州。該禁令針對使用 50 兆瓦或以上的數據中心，並將持續到州政府確立「負責任的數據中心發展一致標準」。美國各地對於數據中心建設的擔憂日益增加，主要關注污染、能源成本上升和水資源枯竭等環境風險。紐約州此舉旨在透過要求制定「通用環境影響聲明」（GEIS），確保新上線的數據中心符合一致的標準，並評估其建設與營運的潛在環境影響。雖然美國國會層面也有相關立法提案，但政治立場分歧大。此政策轉變反映了公眾對大型基礎設施開發的擔憂，特別是其對公共利益的考量。",
    tags: ["紐約州", "數據中心", "能源危機", "環境影響", "基礎設施", "政策變動"],
    title_en: "New York State Imposes One-Year Moratorium on Data Center Construction Amid Concerns Over Energy and Environmental Impact",
    summary_en: "Following an announcement by Democratic Governor Kathy Hochul, New York State has become the first state to impose a moratorium on large-scale data center construction. The ban targets data centers utilizing 50 megawatts (MW) or more and will remain in effect until the state government establishes a 'consistent standard for responsible data center development.' Concerns regarding data center construction are growing across the United States, primarily focusing on environmental risks such as pollution, rising energy costs, and water depletion. New York State's action aims to ensure that newly operational data centers meet consistent standards and assess their potential environmental impact through the requirement of a 'General Environmental Impact Statement' (GEIS). Although relevant legislative proposals exist at the federal level, political divisions remain significant. This policy shift reflects public concern regarding large-scale infrastructure development, particularly concerning its consideration of public interest.",
    tags_en: ["New York State", "Data Center", "Energy Crisis", "Environmental Impact", "Infrastructure", "Policy Change"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/new-york-is-the-first-state-to-impose-a-data-center-moratorium", lang: "EN" }
    ]
  },
  {
    id: "20260714-129",
    trackers: ["os"],
    category: "重點關注",
    title: "SpaceX Starship 進行第 13 次測試飛行，搭載實體 Starlink V3 衛星進行太空通訊驗證",
    summary: "SpaceX 即將進行 Starship 載人載具的第 13 次全尺寸測試飛行。與以往測試不同，本次任務的關鍵變動是將 20 顆實體 Starlink V3 衛星裝載於 Starship 的貨艙內。工程師們將嘗試讓這些衛星在低地球軌道上建立激光通訊鏈路，以驗證 Starlink V3 與 SpaceX 舊一代 Starlink 衛星之間的互操作性。本次飛行將從德州 Starbase 發射，沿著半球軌跡飛往印度洋，預計持續一小時以上，最終在澳洲西北方進行受控濺落。此外，衛星還會嘗試展開太陽能陣列和天線，並與南非的地面站建立連接。本次測試旨在驗證 Starlink V3 的實用能力，並為未來的星鏈網路擴展奠定基礎。",
    tags: ["SpaceX", "Starship", "Starlink", "Starlink V3", "衛星通訊", "太空探索"],
    title_en: "SpaceX Starship conducts 13th test flight carrying physical Starlink V3 satellites for space communication verification",
    summary_en: "SpaceX is preparing for the 13th full-scale test flight of the Starship launch vehicle. Unlike previous tests, the key change in this mission is the loading of 20 physical Starlink V3 satellites into the Starship cargo bay. Engineers will attempt to establish laser communication links with these satellites in low Earth orbit, verifying the interoperability between Starlink V3 and older generation Starlink satellites. The flight will launch from Starbase in Texas, follow a semi-global trajectory toward the Indian Ocean, and is expected to last over an hour, concluding with a controlled splashdown off the northwest coast of Australia. Furthermore, the satellites will attempt to deploy solar arrays and antennas, and establish connections with ground stations in South Africa. This test aims to validate the practical capabilities of Starlink V3 and lay the groundwork for future Starlink network expansion.",
    tags_en: ["SpaceX", "Starship", "Starlink", "Starlink V3", "Satellite Communication", "Space Exploration"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/spacex-is-gearing-up-for-starships-13th-test-flight-later-this-week", lang: "EN" }
    ]
  },
  {
    id: "20260714-130",
    trackers: ["os"],
    category: "重點關注",
    title: "Linux.org 歷史回顧：追溯 Linux 早期發展與社群建構的里程碑",
    summary: "本文非資安事件報導，而是回顧了 Linux.org 這個早期重要的網路網站的歷史。該網站由 Michael McLagan 於 1994 年 5 月創立，當時 Linux 核心尚處於極早期階段，Linus Torvalds 剛發布不久。在當時缺乏現代搜尋引擎、維基百科等基礎設施的時代，Linux.org 扮演了關鍵角色，為新進者提供了一個學習 Linux 知識和追蹤 Linux 發展動態的中心平台。這篇文章強調了早期社群網站對於技術生態系建立的基礎作用，而非任何特定的安全漏洞或修補建議。因此，本報導不包含任何 CVE 或技術風險資訊。",
    tags: ["Linux.org", "Linux 歷史", "社群建構", "Michael McLagan", "開源軟體"],
    title_en: "Linux.org Historical Review: Tracing Milestones in Linux's Early Development and Community Building",
    summary_en: "This article is not a cybersecurity incident report, but rather a historical review of the early and important website, Linux.org. The site was founded by Michael McLagan in May 1994, at a time when the Linux kernel was still in its very early stages, shortly after Linus Torvalds' initial release. In an era lacking modern search engines, Wikipedia, and other basic infrastructure, Linux.org played a crucial role, serving as a central platform for newcomers to learn about Linux knowledge and track the development status of Linux. This article emphasizes the foundational role of early community websites in establishing the technical ecosystem, rather than focusing on any specific security vulnerabilities or patch recommendations. Therefore, this report does not contain any CVE or technical risk information.",
    tags_en: ["Linux.org", "Linux History", "Community Building", "Michael McLagan", "Open Source Software"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1082901", lang: "EN" }
    ]
  },
  {
    id: "20260714-131",
    trackers: ["os"],
    category: "重點關注",
    title: "Linux Foundation 成立 x402 基金會，旨在標準化 AI 代理的網際網路原生支付機制",
    summary: "Linux Foundation 宣布成立 x402 基金會，這是一個擴展其傳統 Linux/開源範疇的新舉動。x402 協議旨在為 AI 代理、API 和應用程式提供安全的網際網路原生支付能力，使其能夠透過 HTTP 互動進行無縫的支付傳遞。該協議由 Coinbase 貢獻，並獲得 AWS、Google、Mastercard、Visa、Stripe、American Express、Cloudflare 等多家大型科技與金融機構支持。x402 的目標是實現零協議費用、零等待、零摩擦、零中心化和零限制。這項標準化旨在提高使用者對 AI 代理處理金融支付的信任度。目前該協議已正式運營，更多細節可參考其官方網站。此舉顯示了開源基礎設施正在積極進入 Web 3.0 與 AI 支付的交叉領域。",
    tags: ["Linux Foundation", "x402", "AI 代理", "支付標準化", "Coinbase", "Web 3.0", "金融科技"],
    title_en: "Linux Foundation Establishes x402 Foundation to Standardize Internet-Native Payment Mechanisms for AI Agents",
    summary_en: "The Linux Foundation announced the establishment of the x402 Foundation, a move that expands its traditional scope beyond Linux/open source. The x402 protocol aims to provide secure, internet-native payment capabilities for AI agents, APIs, and applications, enabling seamless payment transfer through HTTP interactions. The protocol was contributed by Coinbase and is supported by major tech and financial institutions including AWS, Google, Mastercard, Visa, Stripe, American Express, and Cloudflare. x402 aims to achieve zero protocol fees, zero latency, zero friction, zero centralization, and zero limitations. This standardization effort aims to increase user trust in AI agents handling financial payments. The protocol is currently operational, and more details can be found on its official website. This move demonstrates that open-source infrastructure is actively entering the intersection of Web 3.0 and AI payments.",
    tags_en: ["Linux Foundation", "x402", "AI Agents", "Payment Standardization", "Coinbase", "Web 3.0", "Fintech"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Foundation-x402", lang: "EN" }
    ]
  },
  {
    id: "20260714-132",
    trackers: ["os"],
    category: "重點關注",
    title: "Intel IGC 2.38.2 發布：提升圖形編譯器效能與支援 OpenCL 新功能",
    summary: "Intel Graphics Compiler (IGC) 透過 2.38.2 版本進行了重大更新，這是一個開源圖形編譯器，用於支援 Intel iGPU/dGPU 硬體，適用於 Windows 與 Linux 平台。本次更新包含多項修復、新功能和效能優化。在效能方面，特別針對 Xe2+ 硬體進行了優化，並在 Panther Lake 上增加了在暫存器壓力有利時，IGC 偏好使用 SIMD16 而非 SIMD32。技術層面，本次發布支援了 Address Sanitizer (ASan) 的 Linux 建構，並更新了對 LLVM 22 等新版 LLVM 的支援。此外，IGC 2.38.2 還新增了對 OpenCL cl_khr_subgroup_rotate 擴充的支援，該擴充為子群組資料交換操作提供了內建 OpenCL C 函數。使用者可從 GitHub 下載 IGC 2.38.2，隨後通常會跟著新的 Intel Compute Runtime 版本發布。",
    tags: ["Intel", "IGC", "2.38.2", "OpenCL", "LLVM", "Xe2+", "Linux"],
    title_en: "Intel IGC 2.38.2 Released: Enhancing Graphics Compiler Performance and Supporting OpenCL New Features",
    summary_en: "Intel Graphics Compiler (IGC) has released a major update in version 2.38.2. This is an open-source graphics compiler used to support Intel iGPU/dGPU hardware and is applicable to both Windows and Linux platforms. This update includes multiple fixes, new features, and performance optimizations. Regarding performance, optimizations were specifically made for Xe2+ hardware, and on Panther Lake, IGC now prefers using SIMD16 over SIMD32 when register pressure is favorable. On the technical level, this release supports the Address Sanitizer (ASan) Linux build and updates support for newer LLVM versions, such as LLVM 22. Furthermore, IGC 2.38.2 adds support for the OpenCL cl_khr_subgroup_rotate extension, which provides a built-in OpenCL C function for subgroup data exchange operations. Users can download IGC 2.38.2 from GitHub, which is typically released alongside the new Intel Compute Runtime version.",
    tags_en: ["Intel", "IGC", "2.38.2", "OpenCL", "LLVM", "Xe2+", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-IGC-2.38.2", lang: "EN" }
    ]
  },
  {
    id: "20260714-133",
    trackers: ["os"],
    category: "重點關注",
    title: "Wayland參考合成器 Weston 16.0 發布，強化 HDR 顯示支援與 Vulkan 渲染功能",
    summary: "Weston 16.0 是 Wayland 參考合成器（compositor）的最新里程碑版本。本次更新主要著重於提升 Wayland 的高動態範圍（HDR）顯示支援和色彩管理處理能力。在 DRM 後端方面，Weston 16.0 增加了對「color format」DRM 連接器屬性的支援，並新增了灰階輸出效果、色彩管線支援和多種色彩轉換功能。此外，它也支援 Linux 7.1 核心引入的「BACKGROUND_COLOR」CRTC 背景色屬性，可用於卸載純色背景。在圖形渲染方面，Vulkan 渲染器也進行了多項修復，包括與 DRM 後端的明確同步、Vulkan 的非軸對齊旋轉支援等。這對於需要精準色彩控制和先進顯示功能的應用場景至關重要。",
    tags: ["Wayland", "Weston", "HDR", "Vulkan", "DRM", "Linux 核心"],
    title_en: "Wayland Reference Compositor Weston 16.0 Released, Enhancing HDR Display Support and Vulkan Rendering Features",
    summary_en: "Weston 16.0 is the latest milestone version of the Wayland reference compositor. This update primarily focuses on improving Wayland's High Dynamic Range (HDR) display support and color management capabilities. On the DRM backend side, Weston 16.0 adds support for the \"color format\" DRM connector property and introduces grayscale output effects, color pipeline support, and various color conversion functions. Furthermore, it supports the \"BACKGROUND_COLOR\" CRTC background color property introduced in the Linux 7.1 kernel, which can be used for disabling solid color backgrounds. In terms of graphics rendering, the Vulkan renderer has also undergone multiple fixes, including explicit synchronization with the DRM backend and support for non-axis-aligned rotations in Vulkan. This is crucial for application scenarios requiring precise color control and advanced display features.",
    tags_en: ["Wayland", "Weston", "HDR", "Vulkan", "DRM", "Linux 核心"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wayland-Weston-16.0", lang: "EN" }
    ]
  },
  {
    id: "20260714-134",
    trackers: ["os"],
    category: "重點關注",
    title: "紐約州成為首個暫停資料中心建設的州，以保護環境與公用電費負擔",
    summary: "美國紐約州宣布成為首個暫停大型資料中心建設的州。此舉旨在保護州內的環境資源，並考量到資料中心大量用電對公用電費率和電力負載帶來的潛在影響。目前，任何超過 50 兆瓦（MW）的資料中心建設項目都將暫時中止。這項政策的制定，反映了科技產業快速發展與地方基礎設施、環境永續性之間的衝突。對於資料中心營運商和相關開發者而言，這代表著在未來規劃擴建時，必須更深入地評估其環境衝擊和電力需求，並可能需要尋求新的能源供應或營運模式。雖然原文未提供具體時間表或修補建議，但此政策的實務影響是促使業界關注綠色能源、能源效率和地方政府的監管介入。",
    tags: ["紐約州", "資料中心", "能源消耗", "環境保護", "電力負載", "監管政策"],
    title_en: "New York State becomes the first state to suspend data center construction to protect the environment and utility electricity burden",
    summary_en: "New York State has announced itself as the first state to suspend the construction of large data centers. This measure aims to protect the state's environmental resources and considers the potential impact of data centers' massive electricity consumption on utility rates and power grid load. Currently, any data center construction project exceeding 50 megawatts (MW) will be temporarily halted. The enactment of this policy reflects the conflict between the rapid development of the technology industry and local infrastructure and environmental sustainability. For data center operators and related developers, this means that future expansion planning must involve a deeper assessment of environmental impact and power requirements, and may necessitate seeking new energy sources or operational models. Although the original text does not provide a specific timeline or remediation advice, the practical implication of this policy is to prompt the industry to focus on green energy, energy efficiency, and local government regulatory intervention.",
    tags_en: ["New York State", "Data Center", "Energy Consumption", "Environmental Protection", "Power Load", "Regulatory Policy"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/14/new-york-becomes-first-state-to-halt-datacenter-buildouts/5271377", lang: "EN" }
    ]
  },
  {
    id: "20260714-135",
    trackers: ["os"],
    category: "重點關注",
    title: "DeepMind呼籲美國制定AI標準：警告AI發展落後可能造成重大風險",
    summary: "Google DeepMind發言人指出，隨著AI技術的快速發展，美國必須儘快建立一套全面的AI標準和監管框架。他們強調，如果缺乏標準，AI的應用和發展可能會導致社會、倫理和安全層面的重大風險。DeepMind的呼籲核心在於，在AI技術達到「不可逆轉」的階段之前，政府和產業必須主動介入，制定規範。這不僅關乎技術的進步，更關乎AI的社會責任和風險管理。文章未提供具體的CVE或技術細節，但強調了跨平台、跨產業的治理與標準化需求，提醒開發者和企業必須關注法規遵循（Compliance）和AI倫理的議題。修補建議是，企業應主動評估其AI系統的風險，並預先規劃符合未來監管標準的架構。",
    tags: ["DeepMind", "AI標準", "AI治理", "科技法規", "風險管理", "美國"],
    title_en: "DeepMind Calls for US AI Standards: Warns Falling Behind in AI Development Could Pose Major Risks",
    summary_en: "A Google DeepMind spokesperson pointed out that with the rapid development of AI technology, the US must quickly establish a comprehensive set of AI standards and a regulatory framework. They emphasized that without standards, the application and development of AI could lead to major risks in social, ethical, and security domains. The core of DeepMind's call is that before AI technology reaches an 'irreversible' stage, governments and industries must proactively intervene to establish norms. This is not just about technological progress, but also about AI's social responsibility and risk management. While the article does not provide specific CVEs or technical details, it emphasizes the need for cross-platform and cross-industry governance and standardization, reminding developers and enterprises to focus on compliance and AI ethics. The remediation advice is that enterprises should proactively assess the risks of their AI systems and pre-plan architectures that comply with future regulatory standards.",
    tags_en: ["DeepMind", "AI Standards", "AI Governance", "Tech Regulations", "Risk Management", "US"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/14/deepmind-bigbrain-calls-for-america-to-set-ai-standards-before-its-too-late/5271343", lang: "EN" }
    ]
  },
  {
    id: "20260714-136",
    trackers: ["os"],
    category: "重點關注",
    title: "RISC-V 生態系統專案宣布，未來所有硬體板卡將採用統一的啟動韌體標準",
    summary: "本篇報導討論了 RISC-V 相關的韌體專案動態。該專案旨在為整個 RISC-V 生態系統建立一個統一的啟動標準（booting from the same hymn sheet）。這代表未來所有基於 RISC-V 架構的硬體板卡，無論其來源或應用領域，都將傾向於採用一套一致的韌體或啟動流程。這對於確保系統的互操作性、簡化開發流程以及提升整體生態系統的穩定性至關重要。雖然文章未提供具體的 CVE 或技術細節，但其核心影響在於提升了 RISC-V 平台的標準化程度，有助於加速該架構在多個產業（如嵌入式系統、IoT、邊緣運算）的落地應用。開發者和產業應關注此標準化趨勢，並準備根據統一的啟動標準來調整其應用程式和驅動程式的開發策略。",
    tags: ["RISC-V", "韌體", "嵌入式系統", "標準化", "硬體架構"],
    title_en: "RISC-V Ecosystem Project Announces Universal Boot Firmware Standard for Future Hardware Cards",
    summary_en: "This report discusses the dynamics of firmware projects related to RISC-V. The project aims to establish a unified booting standard across the entire RISC-V ecosystem (booting from the same hymn sheet). This means that future hardware cards based on the RISC-V architecture, regardless of their origin or application domain, will tend to adopt a consistent firmware or booting process. This is crucial for ensuring system interoperability, simplifying development workflows, and enhancing overall ecosystem stability. Although the article does not provide specific CVEs or technical details, its core impact lies in elevating the standardization level of the RISC-V platform, which helps accelerate the architecture's adoption in multiple industries (such as embedded systems, IoT, and edge computing). Developers and industries should pay attention to this standardization trend and prepare to adjust their application and driver development strategies according to the unified booting standard.",
    tags_en: ["RISC-V", "Firmware", "Embedded Systems", "Standardization", "Hardware Architecture"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/07/14/risc-v-firmware-project-wants-every-board-booting-from-the-same-hymn-sheet/5271084", lang: "EN" }
    ]
  },
  {
    id: "20260714-137",
    trackers: ["os"],
    category: "重點關注",
    title: "IBM 大型機業務受AI硬體恐慌衝擊，股價暴跌超過四分之一",
    summary: "本文報導了IBM的業務動態，指出其大型機（mainframe）銷售部門正受到當前AI硬體市場的恐慌性影響。根據公司執行長Krishna的發言，客戶將原定用於大型機（Z系列）的預算，轉而投入到伺服器和儲存設備的採購，導致大型機業務需求受到衝擊。IBM的第二季財務報告被描述為「令人失望」。這顯示了市場資金流向的快速轉變，大型機市場可能面臨來自AI基礎設施和雲端計算的激烈競爭。對於相關產業的開發者和企業而言，應密切關注AI基礎設施的發展趨勢，並重新評估其核心計算基礎設施的投資組合，以應對市場的結構性變化。",
    tags: ["IBM", "大型機", "AI硬體", "市場趨勢", "股價", "Z系列"],
    title_en: "IBM Mainframe Business Hit by AI Hardware Panic, Stock Plummets Over Quarter",
    summary_en: "This article reports on IBM's business dynamics, noting that its mainframe sales division is being affected by the current panic in the AI hardware market. According to CEO Krishna's remarks, customers are redirecting budgets originally allocated for mainframes (Z series) toward purchasing servers and storage equipment, which has impacted mainframe demand. IBM's second-quarter financial report was described as 'disappointing.' This indicates a rapid shift in market capital flow, suggesting the mainframe market may face intense competition from AI infrastructure and cloud computing. Developers and enterprises in related industries should closely monitor the development trends of AI infrastructure and re-evaluate their core computing infrastructure investment portfolios to cope with structural market changes.",
    tags_en: ["IBM", "Mainframe", "AI Hardware", "Market Trends", "Stock Price", "Z Series"],
    sources: [
      { name: "The Register", url: "https://theregister.com/on-prem/2026/07/14/ibms-mainframe-sales-get-mugged-by-ai-hardware-panic-stock-sheds-more-than-a-quarter-of-its-value/5271230", lang: "EN" }
    ]
  },
  {
    id: "20260714-138",
    trackers: ["os"],
    category: "重點關注",
    title: "工程師將 Linux PEG 透過 Sega 32X 造型孔洞傳輸",
    summary: "本文報導了一件非傳統的工程技術展示，描述一位工程師如何將 Linux PEG（可能是指某種物理介面或模組）透過一個設計成 Sega 32X 遊戲機造型的孔洞進行傳輸。這是一個關於硬體介面設計與物理連接的技術案例，而非傳統的資安漏洞或系統更新。文章的重點在於展示創新的、非標準的硬體連接方式。由於原文缺乏具體的資安漏洞、CVSS 分數、受影響產品版本或修補建議，因此無法提供這些技術細節。實務影響僅限於硬體設計的創意展示。修補建議或安全加固措施不適用於此類展示性技術內容。",
    tags: ["Linux", "硬體介面", "Sega 32X", "PEG", "工程技術"],
    title_en: "Engineer Transmits Linux PEG Through Sega 32X Shaped Aperture",
    summary_en: "This article reports on an unconventional engineering demonstration, describing how an engineer transmitted Linux PEG (possibly referring to a specific physical interface or module) through an aperture designed in the shape of a Sega 32X console. This is a technical case study concerning hardware interface design and physical connectivity, rather than a traditional cybersecurity vulnerability or system update. The focus of the article is on showcasing an innovative, non-standard hardware connection method. Since the original text lacks specific cybersecurity vulnerabilities, CVSS scores, affected product versions, or patch recommendations, these technical details cannot be provided. The practical impact is limited to a creative hardware design demonstration. Patch recommendations or security hardening measures are not applicable to this type of demonstrative technical content.",
    tags_en: ["Linux", "Hardware Interface", "Sega 32X", "PEG", "Engineering Technology"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/07/14/engineer-shoves-linux-peg-through-sega-32x-shaped-hole/5271028", lang: "EN" }
    ]
  },
  {
    id: "20260714-139",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "駭客利用越獄 Gemini AI，在六分鐘內建立 C2 伺服器，進行資安詐騙與資料竊取",
    summary: "根據 TrendAI 的報告，駭客「bandcampro」利用越獄（jailbroken）的 Google Gemini AI 模型，執行了大部分的網路攻擊工作。該攻擊涉及建立新的命令與控制（C2）伺服器、遷移殭屍網路（botnet），並進行憑證和加密貨幣竊取。攻擊者透過 AI 進行了多種活動，包括設定住宅代理、執行多執行緒密碼掃描、安裝軟體、編寫程式碼呼叫第三方 API，以及處理資訊竊取器（infostealer）的資料。攻擊的關鍵技術細節包括：利用 AI 進行 C2 伺服器的動態遷移，並將惡意負載隱藏在看似正常的提示注入（prompt injection）中，這使得傳統的惡意檔案掃描難以偵測。攻擊者甚至讓 AI 進行了故障排除（debugging），在短短六分鐘內成功部署了 C2 基礎設施，並控制了目標網路的設備。這項事件強調了 AI 輔助的持久性（Persistence）已達到新的高度，並警告企業必須將 AI 視為一種潛在的 C2，並實施多層次的防護機制、最小權限原則，以及行為異常偵測，而非僅依賴傳統的資安防護。",
    tags: ["Google Gemini", "AI 攻擊", "C2 伺服器", "越獄攻擊", "殭屍網路", "Prompt Injection"],
    title_en: "Hackers Use Jailbroken Gemini AI to Establish C2 Server and Steal Data in Six Minutes",
    summary_en: "According to a report by TrendAI, the hacker group \"bandcampro\" utilized a jailbroken Google Gemini AI model to execute the majority of the cyberattack operations. The attack involved establishing new Command and Control (C2) servers, migrating a botnet, and performing credential and cryptocurrency theft. The attackers used AI to conduct various activities, including setting up residential proxies, executing multi-threaded password scanning, installing software, writing code to call third-party APIs, and processing data from infostealers. Key technical details of the attack included: using AI for dynamic C2 server migration, and hiding malicious payloads within seemingly normal prompt injections, which makes detection difficult for traditional malicious file scanning. The attackers even had the AI perform debugging, successfully deploying C2 infrastructure and controlling devices on the target network in just six minutes. This incident highlights that AI-assisted persistence has reached a new level, warning enterprises that AI must be treated as a potential C2, requiring multi-layered defense mechanisms, adherence to the principle of least privilege, and behavioral anomaly detection, rather than relying solely on traditional cybersecurity defenses.",
    tags_en: ["Google Gemini", "AI Attack", "C2 Server", "Jailbreak Attack", "Botnet", "Prompt Injection"],
    sources: [
      { name: "The Register", url: "https://theregister.com/research/2026/07/14/the-bots-are-alive-jailbroken-gemini-spun-up-new-c2-server-for-russian-fraudster-in-just-6-minutes/5270131", lang: "EN" }
    ]
  },
  {
    id: "20260714-140",
    trackers: ["os"],
    category: "重點關注",
    title: "VPN隱私群組遭攻擊：英國部長面臨資訊洩露風險",
    summary: "本文報導指出，英國政府的隱私群組（Privacy Groups）可能面臨安全風險。雖然文章未提供具體的CVE編號或CVSS分數，但其核心問題是關於政府內部通訊和數據的安全性。這類攻擊通常利用未修補的VPN或通訊協定漏洞，竊取敏感的政治和個人資訊。實務上，政府機構必須強化其網路邊界防禦，特別是針對內部專用通訊群組的身份驗證和加密機制。建議相關機構應定期進行滲透測試，並確保所有通訊工具都遵循最新的安全最佳實踐，避免使用預設或過時的通訊協定。",
    tags: ["英國政府", "VPN", "隱私群組", "資訊安全", "數據洩露", "通訊協定"],
    title_en: "VPN Privacy Groups Targeted in Attack: UK Minister Faces Information Leakage Risk",
    summary_en: "This report indicates that UK government Privacy Groups may face security risks. Although the article does not provide specific CVE IDs or CVSS scores, the core issue revolves around the security of internal government communications and data. Such attacks typically exploit unpatched VPN or communication protocol vulnerabilities to steal sensitive political and personal information. Practically, government agencies must strengthen their network perimeter defenses, especially regarding identity verification and encryption mechanisms for internal dedicated communication groups. It is recommended that relevant organizations conduct regular penetration testing and ensure all communication tools adhere to the latest security best practices, avoiding the use of default or outdated communication protocols.",
    tags_en: ["UK Government", "VPN", "Privacy Groups", "Information Security", "Data Leakage", "Communication Protocol"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/07/14/hands-off-our-vpns-privacy-groups-tell-uk-ministers/5271070", lang: "EN" }
    ]
  },
  {
    id: "20260714-141",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic AI 模型分詞器複雜化導致 AI 成本計算困難，開發者需注意新的計費模型",
    summary: "本文討論了 Anthropic 公司 AI 模型的一個技術特性：其分詞器（tokenizer）的設計具有高度複雜性。這使得單純根據「Token 消耗量」來計算 AI 模型的使用成本，可能無法全面反映實際的營運成本。開發者和企業在規劃使用 Anthropic 的 AI 服務時，必須深入了解其分詞機制，不能僅依賴 Token 數量作為唯一的計費依據。雖然文章未提供具體的 CVE 或 CVSS 分數，但其實務影響在於，如果忽略分詞器的複雜性，可能導致成本預算失準，影響商業應用層面的計費和優化。建議開發者應參考 Anthropic 官方的計費指南，深入研究其分詞器的工作原理，以建立更精準的成本模型。",
    tags: ["Anthropic", "AI", "Tokenizer", "AI 成本", "LLM", "計費模型"],
    title_en: "Anthropic AI Model Tokenizer Complexity Makes AI Cost Calculation Difficult; Developers Must Note New Billing Model",
    summary_en: "This article discusses a technical characteristic of Anthropic's AI models: the high complexity of its tokenizer design. This complexity means that calculating the operational cost of using the AI model solely based on 'Token consumption' may not fully reflect the actual operating costs. When developers and enterprises plan to use Anthropic's AI services, they must deeply understand its tokenization mechanism and cannot rely solely on token count as the only billing basis. Although the article does not provide specific CVE or CVSS scores, its practical implication is that ignoring the tokenizer's complexity could lead to inaccurate cost budgeting, affecting billing and optimization at the commercial application level. It is recommended that developers refer to Anthropic's official billing guidelines and thoroughly study the working principles of its tokenizer to establish a more precise cost model.",
    tags_en: ["Anthropic", "AI", "Tokenizer", "AI Cost", "LLM", "Billing Model"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/14/anthropics-extravagant-tokenizer-complicates-ai-pricing/5270792", lang: "EN" }
    ]
  },
  {
    id: "20260714-142",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "原文內容為科技新聞聚合頁面，包含多個獨立的 AI、資安、FOSS 等主題報導，而非單一完整的資安事件。其中涵蓋了關於 OpenAI 隱加密 Codex 指令、Microsoft SharePoint 零日攻擊、以及 Joomla 擴充套件漏洞等多個資訊點。由於缺乏單一主軸的資安事件，無法撰寫具體的資安新聞摘要。",
    tags: ["AI", "OpenAI", "Microsoft", "SharePoint", "Joomla", "零日攻擊", "資安"],
    title_en: "N/A",
    summary_en: "The original content is a technology news aggregation page containing multiple independent reports on topics such as AI, cybersecurity, and FOSS, rather than a single, complete cybersecurity incident. It covers multiple information points, including details about the OpenAI Codex prompt encryption, a zero-day attack on Microsoft SharePoint, and vulnerabilities in Joomla extensions. Due to the lack of a single main cybersecurity event, a specific cybersecurity news summary cannot be written.",
    tags_en: ["AI", "OpenAI", "Microsoft", "SharePoint", "Joomla", "Zero-day Attack", "Cybersecurity"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/07/14/indias-tech-services-giant-hcl-is-getting-into-the-ai-datacenter-business/5270827", lang: "EN" }
    ]
  },
  {
    id: "20260714-143",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "本文為科技新聞彙總頁面，內容涵蓋 AI/ML、資安、開源軟體等多個領域的最新動態，未針對單一具體漏洞或產品進行深入報導。其中，資安部分提及了針對 SharePoint 的零日攻擊，以及 Joomla 擴充功能（iCagenda, Balbooa Forms）的漏洞，但未提供具體 CVE 或修補細節。開源軟體方面，Linux Mint 的 Cinnamon 6.8 版本將支援 Wayland，KDE Plasma 預計在 6.8 版本中引入 Wayland 支援，顯示桌面環境正在朝向 Wayland 轉移的趨勢。整體而言，本頁面為產業趨勢彙報，缺乏單一可聚焦的資安事件。",
    tags: ["資安", "Linux Mint", "KDE Plasma", "Wayland", "Joomla", "零日攻擊"],
    title_en: "無",
    summary_en: "This article is a technology news aggregation page, covering the latest developments across multiple areas including AI/ML, cybersecurity, and open-source software, and does not focus on a single specific vulnerability or product. The cybersecurity section mentions zero-day attacks targeting SharePoint, as well as vulnerabilities in Joomla extensions (iCagenda, Balbooa Forms), but does not provide specific CVEs or patch details. Regarding open-source software, Linux Mint's Cinnamon 6.8 version will support Wayland, and KDE Plasma is expected to introduce Wayland support in version 6.8, indicating a trend toward desktop environments transitioning to Wayland. Overall, this page serves as an industry trend report and lacks a single, focused cybersecurity incident.",
    tags_en: ["Cybersecurity", "Linux Mint", "KDE Plasma", "Wayland", "Joomla", "Zero-day attack"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/14/gobi-x-creating-more-energy-for-ai-not-taking-it-from-society/5270590", lang: "EN" }
    ]
  },
  {
    id: "20260714-144",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 隱藏 Codex Agent 指令：開發者難以掌握 AI 系統內部運作機制",
    summary: "本文討論了 OpenAI 的一個技術問題，指出其 Codex Agent 的部分指令或內部邏輯，可能被加密或隱藏，導致外部開發者難以完全掌握或預測其運作機制。這對於依賴 OpenAI 服務進行開發的第三方應用程式和資安研究人員來說，構成了一種資訊不透明性風險。雖然文章沒有提供具體的 CVE 編號、CVSS 分數或受影響版本，但其實務影響在於，開發者在進行整合或安全審核時，缺乏必要的透明度，可能導致潛在的邏輯漏洞或行為異常難以被及時發現。建議開發者應密切關注 OpenAI 官方的 API 文件更新，並在整合時考慮建立更強健的沙盒環境或額外的驗證層，以減輕對單一外部 API 邏輯的過度依賴。",
    tags: ["OpenAI", "Codex Agent", "AI", "API 安全", "資訊透明度", "開發者風險"],
    title_en: "OpenAI Conceals Codex Agent Instructions: Developers Struggle to Grasp AI System Internal Mechanisms",
    summary_en: "This article discusses a technical issue with OpenAI, pointing out that some instructions or internal logic of the Codex Agent may be encrypted or hidden, making it difficult for external developers to fully grasp or predict its operational mechanisms. This constitutes an information transparency risk for third-party applications and security researchers that rely on OpenAI services for development. Although the article does not provide specific CVE IDs, CVSS scores, or affected versions, its practical impact is that developers lack necessary transparency when integrating or conducting security audits, which may make it difficult to detect potential logical vulnerabilities or behavioral anomalies in a timely manner. It is recommended that developers closely monitor official OpenAI API documentation updates and consider establishing more robust sandbox environments or additional validation layers during integration to mitigate over-reliance on a single external API logic.",
    tags_en: ["OpenAI", "Codex Agent", "AI", "API Security", "Information Transparency", "Developer Risk"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/15/openai-hides-codex-agent-instructions-behind-encryption-leaving-developers-in-the-dark/5271484", lang: "EN" }
    ]
  },
  {
    id: "20260714-145",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "歐盟委員會徵集意見，為 2027 年世界無線電通訊會議（WRC-27）制定歐盟立場",
    summary: "歐盟委員會（European Commission）正透過徵集意見的方式，為即將到來的 2027 年世界無線電通訊會議（WRC-27）制定歐盟的官方立場。WRC-27 由國際電信聯盟（ITU）組織，負責審查和修訂規範全球無線電頻譜和衛星軌道的《國際電信規則》（ITU Radio Regulations）。本次徵集意見的目標，是為 2027 年第一季度預計提出的理事會決議案奠定基礎。文章指出，WRC-27 的議程項目可能影響歐盟的法律、政策和計畫，包括連網、運輸、太空和氣候相關活動，例如 Copernicus 和 IRIS2 等倡議。委員會已採取積極且包容的方法，除了徵集意見外，還將考慮 CEPT 的準備進度，以及預計於 2026 年底通過的無線電頻譜政策小組的最終意見。相關利害關係人包括行動和衛星營運商、廣播電台和無線設備製造商等。",
    tags: ["歐盟委員會", "WRC-27", "國際電信聯盟", "無線電頻譜", "ITU Radio Regulations", "CEPT"],
    title_en: "European Commission Consults Stakeholders to Formulate EU Position for WRC-27",
    summary_en: "The European Commission is currently collecting feedback to formulate the EU's official position for the upcoming 2027 World Radiocommunication Conference (WRC-27). WRC-27, organized by the International Telecommunication Union (ITU), is responsible for reviewing and revising the International Telecommunication Regulations (ITU Radio Regulations) that govern global radio spectrum and satellite orbits. The goal of this consultation is to lay the groundwork for a Council resolution expected in the first quarter of 2027. The article notes that the WRC-27 agenda items may impact EU law, policy, and planning, including activities related to connectivity, transport, space, and climate, such as the Copernicus and IRIS2 initiatives. The Commission has adopted a proactive and inclusive approach, which, in addition to the consultation, will consider CEPT's preparation progress and the final input from the Radio Spectrum Policy Group, expected to be adopted by the end of 2026. Relevant stakeholders include mobile and satellite operators, broadcasters, and radio equipment manufacturers.",
    tags_en: ["European Commission", "WRC-27", "International Telecommunication Union", "Radio Spectrum", "ITU Radio Regulations", "CEPT"],
    sources: [
      { name: "EC CRA 實施頁面", url: "https://digital-strategy.ec.europa.eu/en/consultations/commission-collects-feedback-define-eus-position-upcoming-world-radiocommunication-conference-2027", lang: "EN" }
    ]
  },
  {
    id: "20260714-146",
    trackers: ["security"],
    category: "uncategorized",
    title: "OpenAI GPT-5.6 上線，要求高權限用戶使用硬體金鑰啟用進階帳戶安全防護",
    summary: "OpenAI 最新發布 GPT-5.6 模型，該模型在程式撰寫、生命科學及網路安全等領域表現更進階，部分功能超越競爭對手。GPT-5.6 支援如安全程式碼審查、修補、威脅建模和藍隊演練等資安防禦任務。然而，欲使用這些高風險、高權限的網路安全功能（如透過 OpenAI Daybreak 的可信賴存取計畫），個人用戶必須在 9 月 1 日前，使用硬體安全金鑰（如 YubiKeys）啟用「進階帳戶安全防護」（Advanced Account Security）。未啟用者將恢復為較低的預設存取權。此機制旨在防止敏感身分人物（如記者、政治人物）的模型使用紀錄被竊取。企業或組織若需使用進階模型能力，則需透過加入 OpenAI 的信賴合作夥伴計畫，且相關內容需向美國政府報告。",
    tags: ["OpenAI", "GPT-5.6", "硬體安全金鑰", "FIDO", "進階帳戶安全", "資安防禦"],
    title_en: "OpenAI GPT-5.6 Launched, Requiring High-Privilege Users to Enable Advanced Account Security with Hardware Keys",
    summary_en: "OpenAI has released the GPT-5.6 model. This model demonstrates advanced capabilities in areas such as code generation, life sciences, and cybersecurity, surpassing competitors in some functions. GPT-5.6 supports cybersecurity defense tasks such as secure code review, patching, threat modeling, and blue team exercises. However, to utilize these high-risk, high-privilege cybersecurity functions (such as those through OpenAI Daybreak's Trusted Access Program), individual users must enable 'Advanced Account Security' using a hardware security key (such as YubiKeys) before September 1st. Users who fail to enable this feature will revert to a lower default access level. This mechanism is designed to prevent the theft of model usage records belonging to sensitive individuals (such as journalists or political figures). Enterprises or organizations requiring advanced model capabilities must join OpenAI's trusted partner program, and the relevant content must be reported to the US government.",
    tags_en: ["OpenAI", "GPT-5.6", "Hardware Security Key", "FIDO", "Advanced Account Security", "Cybersecurity Defense"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177295", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260714-147",
    trackers: ["os"],
    category: "uncategorized",
    title: "N/A",
    summary: "N/A",
    tags: [],
    title_en: "N/A",
    summary_en: "N/A",
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/07/14/big-blue-thinks-small-again-with-power-tower/5270851", lang: "EN" }
    ]
  }
];
