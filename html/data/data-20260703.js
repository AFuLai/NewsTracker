// data-20260703.js — 2026-07-03
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-03"] = [
  {
    id: "20260703-001",
    trackers: ["security"],
    category: "重大事件",
    title: "Europol行動揭露：駭客利用WordPress弱點與憑證，散播SocGholish惡意軟體",
    summary: "歐洲刑警組織（Europol）公布「Operation Endgame」行動成果，多國執法單位成功破壞了惡意程式SocGholish、Amadey和StealC背後的犯罪基礎設施。本次行動圍剿了106個散播殭屍網路SocGholish的網域與伺服器，以及14,971個受感染的WordPress網站。根據Shadowserver基金會的數據，駭客在三年內已入侵超過144萬個WordPress網站，遍及全球多國。駭客入侵的途徑包括透過密碼潑灑、外洩或重用的憑證，或利用主機代管平臺、CMS、外掛程式、佈景主題等元件的弱點。此外，駭客還會利用Domain Shadowing等手法，在合法網域下新增惡意子網域，以隱匿蹤跡並利用原網域的信譽來迴避偵測。修補建議應包含強化憑證管理、修補CMS及相關元件的漏洞，並警惕網域子網域的異常新增。",
    tags: ["Europol", "Operation Endgame", "WordPress", "SocGholish", "殭屍網路", "憑證管理", "Domain Shadowing"],
    title_en: "Europol Action Reveals: Hackers Used WordPress Vulnerabilities and Credentials to Spread SocGholish Malware",
    summary_en: "Europol announced the results of 'Operation Endgame,' during which multiple national law enforcement agencies successfully dismantled the criminal infrastructure behind the malware strains SocGholish, Amadey, and StealC. This operation targeted 106 domains and servers distributing the botnet SocGholish, as well as 14,971 infected WordPress websites. According to data from the Shadowserver Foundation, hackers have compromised over 1.44 million WordPress sites globally within three years. Attack vectors include leaked, sprayed, or reused credentials, or exploiting vulnerabilities in components such as hosting platforms, CMS, plugins, and themes. Furthermore, hackers utilize techniques like Domain Shadowing to add malicious subdomains under legitimate domains, thereby concealing their tracks and leveraging the original domain's reputation to evade detection. Remediation recommendations include strengthening credential management, patching vulnerabilities in CMS and related components, and being vigilant about unusual subdomain additions.",
    tags_en: ["Europol", "Operation Endgame", "WordPress", "SocGholish", "Botnet", "Credential Management", "Domain Shadowing"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177078", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-002",
    trackers: ["security"],
    category: "重大事件",
    title: "PChome旗下拍付國際遭駭傳竊取350萬用戶個資，數發部啟動行政檢查",
    summary: "PChome旗下拍付國際的Pi錢包資安事件成為焦點，有勒索軟體團體Settra在暗網聲稱入侵，竊取了包含350萬名Pi錢包用戶個資、內部系統架構及長達9年營運記錄的資料。雖然拍付國際已啟動應變程序，但事件引發數發部高度重視，並隨即啟動實地行政檢查，以釐清資料保護的落實作為。此外，本週資安焦點也包括Linux基金會成立Akrites計畫，旨在建立跨產業開源軟體漏洞協調機制，應對AI加速的漏洞攻擊風險。業界也持續關注AI模型安全，Anthropic發表Claude Sonnet 5，強調強化了抵抗提示注入和惡意請求的能力。企業應強化權限控管，並特別留意AI功能（如SQL Server 2025）可能被濫用竊取敏感資訊的風險。",
    tags: ["PChome", "拍付國際", "Settra", "個資外洩", "數發部", "勒索軟體", "AI資安"],
    title_en: "PChome's Paifu International Hacked, Allegedly Stealing Personal Data of 3.5 Million Users; Ministry of Digital Affairs Initiates Administrative Inspection",
    summary_en: "The security incident involving Pi Wallet at PChome's Paifu International has become a major focus. A ransomware group named Settra claimed on the dark web to have breached the system, allegedly stealing data including personal information of 3.5 million Pi Wallet users, internal system architecture, and up to nine years of operational records. Although Paifu International has initiated its incident response procedures, the incident has prompted the Ministry of Digital Affairs (MDA) to pay close attention and immediately launch an on-site administrative inspection to clarify the implementation of data protection measures. Furthermore, this week's security focus also includes the Linux Foundation establishing the Akrites program, aimed at building an industry-wide open-source vulnerability coordination mechanism to address the risks of vulnerability attacks accelerated by AI. The industry also continues to monitor AI model security, with Anthropic releasing Claude Sonnet 5, emphasizing enhanced resistance to prompt injection and malicious requests. Enterprises should strengthen access control and pay special attention to the risk of AI functionalities (such as SQL Server 2025) being misused to steal sensitive information.",
    tags_en: ["PChome", "Paifu International", "Settra", "Personal Data Leakage", "MDA", "Ransomware", "AI Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177047", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6376-1：修補 OpenSSH 服務中的心臟病變漏洞",
    summary: "Debian 安全公告 DSA-6376-1 針對 OpenSSH 服務發布了安全更新，修補了一個潛在的「心臟病變」（Heartbleed）類型的漏洞。此漏洞可能允許遠端攻擊者在特定條件下利用 OpenSSH 服務的記憶體管理缺陷，竊取或洩露連接期間的敏感資料，例如用戶憑證或會話資訊。該漏洞的攻擊向量為遠端，且可能無需身份驗證。修補建議是立即升級 Debian 系統上的 OpenSSH 套件至修補版本。由於這類漏洞通常影響所有使用 OpenSSH 服務的系統，建議所有系統管理員應檢查並更新其 OpenSSH 服務，以確保系統的安全性。未公開具體 CVSS 分數或受影響版本範圍，但建議將其視為高優先級的修補。",
    tags: ["Debian", "OpenSSH", "DSA-6376-1", "心臟病變", "記憶體漏洞", "SSH"],
    title_en: "Debian Releases DSA-6376-1: Patching Heartbleed Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6376-1 has released a security update for the OpenSSH service, patching a potential 'Heartbleed'-type vulnerability. This vulnerability could allow a remote attacker, under specific conditions, to exploit a memory management flaw in the OpenSSH service to steal or leak sensitive data during a connection, such as user credentials or session information. The attack vector is remote, and it may not require authentication. The recommended fix is to immediately upgrade the OpenSSH package on Debian systems to the patched version. Since this type of vulnerability typically affects all systems using the OpenSSH service, all system administrators are advised to check and update their OpenSSH service to ensure system security. While specific CVSS scores or affected version ranges are not disclosed, this patch should be treated as high priority.",
    tags_en: ["Debian", "OpenSSH", "DSA-6376-1", "Heartbleed", "Memory Vulnerability", "SSH"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00287.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "GNU Guix 宣布多項漏洞：Guix Substitute 與 Guix Pull 存在遠端權限提升與檔案覆寫風險",
    summary: "GNU Guix 專案宣布在其核心工具 `guix substitute` 中發現三項漏洞，另有第四項影響 `guix pull` 和 `guix time-machine` 指令。`guix substitute` 的遠端利用僅需目標系統嘗試下載二進位替代品，攻擊者甚至可透過中間人攻擊（MITM）或配置的替代伺服器觸發，無需使用 HTTPS。此外，即使是本地利用，只要能連接到 `guix-daemon` 的 Socket，任何使用者皆可觸發。針對 `guix pull` 和 `guix time-machine` 的漏洞（CVE ID 待定），攻擊者只需控制這些指令使用的 channels 檔案，即可在使用者有權限的任何位置創建或覆寫檔案。Guix 專案強烈建議所有使用者立即升級 `guix` 和 `guix-daemon` 以修補這些安全問題。",
    tags: ["GNU Guix", "guix substitute", "guix pull", "權限提升", "Linux 核心元件", "安全公告"],
    title_en: "GNU Guix Announces Multiple Vulnerabilities: Guix Substitute and Guix Pull Face Remote Privilege Escalation and File Overwrite Risks",
    summary_en: "The GNU Guix project announced three vulnerabilities found in its core tool `guix substitute`, and a fourth affecting the `guix pull` and `guix time-machine` commands. Remote exploitation of `guix substitute` only requires the target system to attempt downloading binary substitutes; attackers can even trigger this via a Man-in-the-Middle (MITM) attack or a configured substitute server, without needing HTTPS. Furthermore, even with local exploitation, any user who can connect to the `guix-daemon` Socket can trigger it. For the vulnerabilities affecting `guix pull` and `guix time-machine` (CVE ID pending), attackers only need to control the channels file used by these commands to create or overwrite files in any location accessible to the user. The Guix project strongly recommends that all users immediately upgrade `guix` and `guix-daemon` to patch these security issues.",
    tags_en: ["GNU Guix", "guix substitute", "guix pull", "Privilege Escalation", "Linux Core Component", "Security Advisory"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081199", lang: "EN" }
    ]
  },
  {
    id: "20260703-005",
    trackers: ["os"],
    category: "Linux",
    title: "深入探討負向目錄條目（Negative Dentries）的檔案系統問題，提升 Linux 儲存與檔案系統的穩定性",
    summary: "本次技術分享聚焦於 Linux 檔案系統中的「負向目錄條目」（Negative Dentries）機制。負向目錄條目是一種優化技術，用於快速判斷指定名稱的檔案是否不存在，從而避免進行完整的名稱查找。然而，當一個目錄包含過多負向目錄條目時，可能會引發系統效能或穩定性問題。本次會議由 Miklos Szeredi 帶領，深入討論了過多負向目錄條目可能帶來的各種問題。這類問題的修復與優化，對於提升 Linux 核心在處理大型、複雜檔案結構時的可靠性和效率至關重要。建議相關系統開發者和核心維護人員關注檔案系統的設計邊界與優化，以確保系統在極端負載下的穩定運行。",
    tags: ["Linux 核心", "檔案系統", "Negative Dentries", "LFS Summit", "系統優化", "文件系統結構"],
    title_en: "In-depth Exploration of Negative Dentries in File System Issues to Enhance Linux Storage and File System Stability",
    summary_en: "This technical sharing session focuses on the 'Negative Dentries' mechanism within the Linux file system. Negative Dentries are an optimization technique used to quickly determine if a file with a specified name does not exist, thereby avoiding a complete name lookup. However, when a directory contains an excessive number of negative dentries, it can lead to system performance or stability issues. This session, led by Miklos Szeredi, deeply discusses the various problems that too many negative dentries can cause. Addressing and optimizing these issues is crucial for improving the reliability and efficiency of the Linux kernel when handling large, complex file structures. It is recommended that relevant system developers and kernel maintainers pay attention to the design boundaries and optimization of the file system to ensure stable operation under extreme loads.",
    tags_en: ["Linux Kernel", "File System", "Negative Dentries", "LFS Summit", "System Optimization", "File System Structure"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1079407", lang: "EN" }
    ]
  },
  {
    id: "20260703-006",
    trackers: ["os"],
    category: "Linux",
    title: "多主流 Linux 發行版發布安全更新：涵蓋核心、資料庫與應用程式元件修補",
    summary: "本次安全更新涵蓋了 AlmaLinux、Debian、Fedora、Oracle、Red Hat、SUSE 和 Ubuntu 等多個主流 Linux 發行版。修補範圍極廣，涉及核心元件（如 glibc、kernel）、資料庫系統（如 mariadb、postgresql）、容器技術（如 buildah、podman、containerd）以及各種應用程式層級的函式庫（如 openssl、libssh2）。具體修補的元件包括但不限於：glibc、kernel、OpenSSL、Nginx、PostgreSQL、MySQL 等。實務影響涵蓋了從作業系統底層到上層應用程式的廣泛安全面。建議使用者應根據各發行版官方公告，及時更新所有受影響的元件，特別是核心系統函式庫和網路服務。由於原文未提供單一 CVE 或 CVSS 分數，建議使用者務必查閱各發行版官方的更新說明，以了解具體的漏洞細節和修補的必要性。",
    tags: ["AlmaLinux", "Debian", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "Linux 核心", "glibc"],
    title_en: "Multiple Major Linux Distributions Release Security Updates: Patching Core, Database, and Application Components",
    summary_en: "This security update covers multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Oracle, Red Hat, SUSE, and Ubuntu. The scope of the patches is extremely broad, involving core components (such as glibc, kernel), database systems (such as mariadb, postgresql), container technologies (such as buildah, podman, containerd), and various application-level libraries (such as openssl, libssh2). Specific patched components include, but are not limited to: glibc, kernel, OpenSSL, Nginx, PostgreSQL, and MySQL. The practical impact covers a wide range of security surfaces, from the operating system layer to the upper application layer. Users are advised to update all affected components promptly, following the official announcements of each distribution, especially core system libraries and network services. Since the original text did not provide a single CVE or CVSS score, users must consult the official update notices of each distribution to understand the specific vulnerability details and the necessity of patching.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "Oracle", "Red Hat", "SUSE", "Ubuntu", "Linux Kernel", "glibc"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1081187", lang: "EN" }
    ]
  },
  {
    id: "20260703-007",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 51 Alpha 版發布：提升桌面體驗與功能性，包含離線地圖及硬體加速支援",
    summary: "GNOME 桌面環境已發布 51 Alpha 版本，預計於九月穩定版推出。本次更新著重於多個組件的細微優化與功能增強，而非單一重大漏洞修補。主要改進包括：Epiphany 瀏覽器新增複製 URL 的快捷鍵；GDM 顯示管理器支援 KMSCON VT，並可更改預設會話；GNOME 地圖支援離線地圖下載功能；GNOME 遠端桌面修復並啟用 AMD 顯示驅動的硬體加速支援；GNOME Shell 支援 vA-API H.264 螢幕串流的速率控制，並支援 text_input_v3 協議版本 2；此外，Nautilus 文件管理器提升了檢視重載效能，GTK 亦能尊重「減少動態」設定。這些改動旨在提升整體使用者體驗與功能完善度，資安人員應關注這些核心元件的穩定性與新功能帶來的潛在配置風險。",
    tags: ["GNOME", "GNOME 51", "Linux 桌面環境", "GDM", "Nautilus", "GTK4", "Linux 核心元件"],
    title_en: "GNOME 51 Alpha Release: Enhancing Desktop Experience and Functionality, Including Offline Maps and Hardware Acceleration Support",
    summary_en: "The GNOME desktop environment has released version 51 Alpha, which is expected to reach stable release in September. This update focuses on subtle optimizations and feature enhancements across multiple components, rather than addressing a single major vulnerability. Key improvements include: Epiphany browser adding a shortcut to copy URLs; GDM display manager supporting KMSCON VT and allowing changes to the default session; GNOME Maps supporting offline map download functionality; GNOME Remote Desktop fixing issues and enabling hardware acceleration support for AMD display drivers; GNOME Shell supporting rate control for vA-API H.264 screen streaming and supporting text_input_v3 protocol version 2. Furthermore, Nautilus file manager improved view reload performance, and GTK can now respect the \"reduce animations\" setting. These changes aim to enhance overall user experience and functional completeness. Security personnel should monitor the stability of these core components and the potential configuration risks introduced by the new features.",
    tags_en: ["GNOME", "GNOME 51", "Linux Desktop Environment", "GDM", "Nautilus", "GTK4", "Linux Core Components"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-51-Alpha", lang: "EN" }
    ]
  },
  {
    id: "20260703-008",
    trackers: ["os"],
    category: "Linux",
    title: "UPower 1.91.3 修復電池充電模式預設值，避免誤觸「快速充電」導致筆電電池壽命衰退",
    summary: "本篇更新針對 Linux 系統的 UPower 電源管理抽象層，發布了版本 1.91.3 的重要修復。先前的一個 Bug 報告指出，當使用者在禁用筆電電池充電閾值功能時，UPower 會錯誤地將預設充電模式切換為「快速充電」（Fast Charging）。然而，預設的充電模式應為「標準充電」（Standard），因為快速充電會因過熱產生熱應力，長期下來會加速電池老化和性能衰退。這項修復由開源開發者 Armin Wolf 貢獻，旨在讓 UPower 在處理設備電池時，優先選擇「標準充電」模式。使用者若在禁用充電閾值功能後遇到預設充電模式改變為快速充電的情況，應立即更新至 UPower 1.91.3 或更高版本，以確保電池健康和最佳使用壽命。",
    tags: ["UPower", "Linux", "電池管理", "電源管理", "1.91.3", "充電模式"],
    title_en: "UPower 1.91.3 Fixes Battery Charging Mode Default to Prevent Accidental 'Fast Charging' and Battery Degradation",
    summary_en: "This update addresses the UPower power management abstraction layer for Linux systems, releasing version 1.91.3 with an important fix. A previous bug report indicated that when users disabled the laptop battery charging threshold feature, UPower would incorrectly switch the default charging mode to 'Fast Charging.' However, the default charging mode should be 'Standard Charging,' as fast charging can generate thermal stress due to overheating, which accelerates battery aging and performance degradation over time. This fix was contributed by open-source developer Armin Wolf, aiming to ensure that UPower prioritizes 'Standard Charging' mode when handling device batteries. Users who encounter the default charging mode changing to fast charging after disabling the charging threshold feature should immediately update to UPower 1.91.3 or later to ensure battery health and optimal lifespan.",
    tags_en: ["UPower", "Linux", "Battery Management", "Power Management", "1.91.3", "Charging Mode"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/UPower-1.91.3", lang: "EN" }
    ]
  },
  {
    id: "20260703-009",
    trackers: ["os"],
    category: "Linux",
    title: "Rust Coreutils cp 命令在處理 -L 參數時出錯，導致 Ubuntu 映像建置失敗，暫時回歸使用 GNU Coreutils",
    summary: "本事件指出，儘管 Rust Coreutils 相較於 GNU Coreutils 具有更好的記憶體安全性，但在其實現的各個命令中仍持續發現細微的不相容性問題。最新發現的問題是，Rust Coreutils 的 `cp` 命令在處理 `-L` 參數時存在錯誤，導致 Ubuntu 映像建置（特別是 Live Media ISO 構建）失敗。此問題被標記為「關鍵」級別的 Bug。由於此類問題，Ubuntu 最終選擇將 `cp` 命令的版本回滾至 GNU Coreutils。雖然社群有建議修改 Ubuntu 的建置腳本以避免回滾，但目前最新的 `coreutils-from` 套件更新已確認回歸至 GNU Coreutils 版本。開發者已在 Rust Coreutils 上提交了修復建議，但截至目前尚未合併。",
    tags: ["Ubuntu", "Rust Coreutils", "GNU Coreutils", "coreutils", "cp", "Linux 核心"],
    title_en: "Rust Coreutils cp Command Fails with -L Parameter, Causing Ubuntu Image Builds to Fail, Temporarily Reverting to GNU Coreutils",
    summary_en: "This incident highlights that despite Rust Coreutils offering better memory safety compared to GNU Coreutils, subtle incompatibility issues persist in its implemented commands. The latest issue found is that the Rust Coreutils `cp` command fails when processing the `-L` parameter, causing Ubuntu image builds (especially Live Media ISO construction) to fail. This problem has been marked as a 'Critical' bug. Due to this issue, Ubuntu ultimately chose to roll back the `cp` command version to GNU Coreutils. Although the community has suggested modifying Ubuntu's build scripts to avoid the rollback, the latest `coreutils-from` package update has confirmed a return to the GNU Coreutils version. Developers have submitted a fix suggestion for Rust Coreutils, but it has not been merged as of yet.",
    tags_en: ["Ubuntu", "Rust Coreutils", "GNU Coreutils", "coreutils", "cp", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Rust-Coreutils-cp-Ubuntu-Images", lang: "EN" }
    ]
  },
  {
    id: "20260703-010",
    trackers: ["os"],
    category: "Linux",
    title: "Intel 為 Linux 7.3 準備 Nova Lake 顯示支援：啟用 CMTG 與 DC3CO 低功耗功能",
    summary: "本篇報導指出 Intel 已針對 Linux 7.3 核心，提交了第一批針對 Nova Lake 晶片組的圖形驅動程式更新。這些更新主要集中在提升 Nova Lake Xe3P 整合圖形/顯示器的支援度。具體技術進展包括啟用 Common Mode Timing Generator (CMTG)，該功能適用於 Lunar Lake 及更新硬體，用於同步多個顯示器（如 eDP 筆電面板與外部 DisplayPort）。此外，Linux 7.3 也支援 Nova Lake 的 DC3CO（Display C3 with Clock Off）低功耗狀態，讓顯示引擎在閒置時能更有效地關閉電源。這些功能是 Intel 在 Nova Lake 上線前，為 Linux 7.3 準備的關鍵支援。開發者應留意這些驅動程式的 Pull Request，預計在未來數週內會有更多更新，且 Linux 7.3 的合併窗口預計在八月後半段。",
    tags: ["Intel", "Linux 7.3", "Nova Lake", "drm-intel-next", "CMTG", "DC3CO"],
    title_en: "Intel Prepares Nova Lake Display Support for Linux 7.3: Enabling CMTG and DC3CO Low Power Features",
    summary_en: "This report indicates that Intel has submitted the first batch of graphics driver updates for the Nova Lake chipset, targeting the Linux 7.3 kernel. These updates primarily focus on enhancing support for Nova Lake Xe3P integrated graphics/displays. Specific technical advancements include enabling the Common Mode Timing Generator (CMTG), a feature applicable to Lunar Lake and newer hardware, used to synchronize multiple displays (such as eDP laptop panels and external DisplayPort). Furthermore, Linux 7.3 now supports Nova Lake's DC3CO (Display C3 with Clock Off) low power state, allowing the display engine to shut down power more efficiently when idle. These features represent key support prepared by Intel for Nova Lake on Linux 7.3 before its official release. Developers should monitor these driver Pull Requests, as more updates are expected in the coming weeks, with the Linux 7.3 merge window anticipated for late August.",
    tags_en: ["Intel", "Linux 7.3", "Nova Lake", "drm-intel-next", "CMTG", "DC3CO"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-DRM-First-For-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260703-011",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 為 Vera Rubin VR-NVL 伺服器平台上游化 BMC Device Tree，支援 OpenBMC 韌體",
    summary: "NVIDIA 近期透過 Linux 核心郵件清單提交了其 Vera Rubin VR-NVL 伺服器平台的基板管理控制器（BMC）的 Device Tree (DT) 檔案。該 DT 檔案長達 901 行，用於支援基於 ASpeed AST2600 控制器的 BMC。這項工作是 NVIDIA 將其最新硬體平台支援上游化的重要環節，同時也為 U-Boot 和 OpenBMC 軟體提供了相應的補丁。業界對 OpenBMC 的興趣持續增長，許多超大規模雲端服務提供商（hyperscalers）也正因安全性和可適應性等原因，轉向採用 OpenBMC 等開源韌體解決方案，這趨勢也涵蓋了 AMD 和 Intel 的伺服器。這顯示了業界對提升伺服器韌體透明度和可控性的高度重視。",
    tags: ["NVIDIA", "OpenBMC", "Linux 核心", "Device Tree", "BMC", "Vera Rubin", "ASpeed"],
    title_en: "NVIDIA Upstreams BMC Device Tree for Vera Rubin VR-NVL Server Platform, Supporting OpenBMC Firmware",
    summary_en: "NVIDIA recently submitted the Device Tree (DT) file for its Vera Rubin VR-NVL server platform's Baseboard Management Controller (BMC) to the Linux kernel mailing list. This DT file, which spans 901 lines, is designed to support the BMC based on the ASpeed AST2600 controller. This effort represents a significant step for NVIDIA in upstreaming support for its latest hardware platform, and it also provides corresponding patches for U-Boot and OpenBMC software. Industry interest in OpenBMC continues to grow, with many hyperscale cloud service providers increasingly adopting open-source firmware solutions like OpenBMC due to concerns regarding security and adaptability. This trend also encompasses servers from AMD and Intel. This highlights the industry's strong emphasis on improving server firmware transparency and controllability.",
    tags_en: ["NVIDIA", "OpenBMC", "Linux Kernel", "Device Tree", "BMC", "Vera Rubin", "ASpeed"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-VR-NVL-BMC-DT", lang: "EN" }
    ]
  },
  {
    id: "20260703-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心強化 BPF 程式碼，修補 JIT 噴灑攻擊與 Spectre-v2 相關漏洞",
    summary: "Linux 核心在 7.2-rc2 版本中，針對 BPF (Berkeley Packet Filter) 程式碼引入了重要的安全強化措施。此更新主要由 Intel 工程師 Pawan Gupta 提交，旨在抵禦 JIT (Just-In-Time) 噴灑攻擊。由於 BPF JIT 分配器會重複使用記憶體空間，當新程式碼覆蓋舊程式碼時，可能會導致間接跳轉（indirect jump）重用舊的分支預測（branch prediction）資訊。為了解決此問題，新修補程式引入了 `bpf_arch_pred_flush` 機制，在 JIT 記憶體重用時強制刷新分支預測器。此外，該更新還增加了在啟用 Spectre-v2 緩解措施時，對 BPF JIT 分配進行 IBPB (Indirect Branch Predictor Barrier) 刷新，進一步提升了 BPF 執行環境的安全性。這些強化措施已合併至 Linux Git，預計在 7.2-rc2 版本中提供。",
    tags: ["Linux 核心", "BPF", "JIT 噴灑攻擊", "Spectre-v2", "IBPB", "Linux 7.2-rc2"],
    title_en: "Linux Kernel Strengthens BPF Code, Patching JIT Spray Attacks and Spectre-v2 Related Vulnerabilities",
    summary_en: "The Linux kernel, in version 7.2-rc2, has introduced significant security enhancements to BPF (Berkeley Packet Filter) code. This update was primarily submitted by Intel engineer Pawan Gupta, aiming to defend against JIT (Just-In-Time) spray attacks. Because the BPF JIT allocator reuses memory space, new code overwriting old code could potentially cause indirect jumps to reuse old branch prediction information. To address this issue, the new patch introduces the `bpf_arch_pred_flush` mechanism, which forces a flush of the branch predictor when JIT memory is reused. Furthermore, the update adds IBPB (Indirect Branch Predictor Barrier) flushing for BPF JIT allocation when Spectre-v2 mitigation is enabled, further enhancing the security of the BPF execution environment. These enhancements have been merged into the Linux Git and are expected to be available in version 7.2-rc2.",
    tags_en: ["Linux Kernel", "BPF", "JIT Spray Attacks", "Spectre-v2", "IBPB", "Linux 7.2-rc2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc3-BPF-Hardening", lang: "EN" }
    ]
  },
  {
    id: "20260703-013",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心計畫淘汰 32 位元 MSR 介面，改用 64 位元指令優化 x86 程式碼",
    summary: "Linux 核心開發團隊正在主導移除對 32 位元模型特定暫存器（MSR）介面的使用，轉而統一使用更現代、更優化的 64 位元介面。此項工作由 SUSE 工程師 Juergen Gross 帶動，旨在改善核心程式碼的統一性與可讀性。目前，開發者已將相關修補程式提交至 tip/tip.git 的 x86/msr 分支，預計將在今年晚些時候的 Linux 7.3 核心週期中落地。移除 32 位元介面（如 rdmsr()）的主要原因是它們基於 64 位元值，且與現代 x86 CPU 支援的 MSR 存取指令模式不匹配。雖然此變更會改變核心程式碼內的呼叫慣例，但開發團隊強調，這不會影響 Linux 對 x86 32 位元 CPU 的支援，舊的 32 位元 CPU 仍可正常運作。此舉最終目標是將所有 MSR 存取巨集轉換為內聯函數，進一步優化核心效能。",
    tags: ["Linux 核心", "MSR", "x86", "rdmsr", "64-bit", "核心優化"],
    title_en: "Linux Kernel Plans to Deprecate 32-bit MSR Interface, Adopting 64-bit Instructions to Optimize x86 Code",
    summary_en: "The Linux kernel development team is leading the effort to remove the use of 32-bit Model Specific Register (MSR) interfaces, transitioning instead to a unified, more modern, and optimized 64-bit interface. This work was spearheaded by SUSE engineer Juergen Gross, aiming to improve the consistency and readability of the core code. Developers have submitted the relevant patches to the x86/msr branch in tip/tip.git, which are expected to land in the Linux 7.3 kernel cycle later this year. The primary reason for removing the 32-bit interfaces (such as rdmsr()) is that they are based on 64-bit values and do not align with the MSR access instruction modes supported by modern x86 CPUs. Although this change will alter calling conventions within the core code, the development team emphasizes that it will not affect Linux's support for x86 32-bit CPUs, and older 32-bit CPUs will continue to function normally. The ultimate goal of this initiative is to convert all MSR access macros into inline functions, further optimizing core performance.",
    tags_en: ["Linux Kernel", "MSR", "x86", "rdmsr", "64-bit", "Kernel Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Ending-32-bit-MSR-Work", lang: "EN" }
    ]
  },
  {
    id: "20260703-014",
    trackers: ["security"],
    category: "法規與標準",
    title: "歐洲央行論壇警示：AI加速金融交易與資安風險，央行需調整監理工具",
    summary: "隨著AI技術在金融交易、支付流程與資安攻防中的應用日益廣泛，歐洲央行（ECB）年度論壇指出，AI的快速演進將使金融作業自動化、加速化，這既提升了防禦能力，也為攻擊者提供了更低成本、更大規模的攻擊工具。英格蘭銀行副總裁Sarah Breeden強調，金融機構、關鍵第三方供應商及基礎設施業者必須縮短漏洞修補時間，並強化危機後的營運與恢復能力。此外，AI在信貸評估的應用，使得監理機關難以追溯銀行決策的依據，凸顯了監管工具的滯後性。因此，央行與監理機關必須建立前瞻性的合作機制，透過情境分析和壓力測試，提前評估AI對金融體系的潛在衝擊。",
    tags: ["歐洲央行", "ECB", "AI", "金融穩定", "監理風險", "Agentic AI"],
    title_en: "ECB Forum Warns: AI Accelerates Financial Transactions and Cybersecurity Risks, Requiring Central Banks to Adjust Supervisory Tools",
    summary_en: "As AI technology becomes increasingly prevalent in financial transactions, payment processes, and cybersecurity defense, the European Central Bank (ECB) annual forum pointed out that the rapid evolution of AI will automate and accelerate financial operations. While this enhances defensive capabilities, it also provides attackers with lower-cost, larger-scale attack tools. Sarah Breeden, Deputy Vice President of the Bank of England, emphasized that financial institutions, critical third-party suppliers, and infrastructure operators must shorten vulnerability patching times and strengthen post-crisis operational and recovery capabilities. Furthermore, the application of AI in credit assessment makes it difficult for regulators to trace the basis of bank decisions, highlighting the lag in current regulatory tools. Therefore, central banks and regulators must establish proactive cooperation mechanisms, utilizing scenario analysis and stress testing to preemptively assess the potential impact of AI on the financial system.",
    tags_en: ["ECB", "AI", "Financial Stability", "Supervisory Risk", "Agentic AI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177059", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國LLMs模型提升漏洞發現能力，專家警告防禦方需加強架構理解與修補",
    summary: "近期，中國企業釋出如GLM 5.2等開源大型語言模型（LLMs），在漏洞發現基準測試中表現優異，甚至超越部分美國頂級模型。此外，另有安全工具也宣稱能發現數千個漏洞。這顯示AI模型在尋找漏洞的能力已大幅提升，可能導致「AI漏洞風暴」。資安專家警告，無論模型來源，防禦方都必須將安全債務修補，深入了解自身系統架構，並優先修補配置上的弱點。雖然頂級模型在發現零日漏洞方面仍有價值，但專家更擔憂的是當前防禦體系的不足，強調無論是前沿還是成熟模型，都可能讓防禦方措手不及。此外，由於中國模型可本地部署，對於數據主權和關鍵基礎設施的保護具有優勢。",
    tags: ["LLMs", "GLM 5.2", "漏洞發現", "開源模型", "資安架構", "數據主權"],
    title_en: "Chinese LLMs Enhance Vulnerability Discovery Capabilities; Experts Warn Defense Teams Must Strengthen Architecture Understanding and Patching",
    summary_en: "Recently, Chinese enterprises have released open-source Large Language Models (LLMs), such as GLM 5.2, which have shown excellent performance in vulnerability discovery benchmarks, even surpassing some top American models. Furthermore, other security tools have also claimed the ability to discover thousands of vulnerabilities. This indicates a significant enhancement in AI models' capability to find vulnerabilities, potentially leading to an 'AI vulnerability storm.' Cybersecurity experts warn that regardless of the model source, defense teams must address security debt, gain a deep understanding of their system architecture, and prioritize patching configuration weaknesses. While top-tier models remain valuable for discovering zero-day vulnerabilities, experts are more concerned about the current deficiencies in defense systems, emphasizing that both cutting-edge and mature models could catch defense teams unprepared. Additionally, because Chinese models can be deployed locally, this offers an advantage for protecting data sovereignty and critical infrastructure.",
    tags_en: ["LLMs", "GLM 5.2", "Vulnerability Discovery", "Open-Source Models", "Cybersecurity Architecture", "Data Sovereignty"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/chinese-llms-broaden-gap-between-attackers-and-defenders", lang: "EN" }
    ]
  },
  {
    id: "20260703-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安專家警示「Zero Day Clock」：漏洞利用窗口急縮至數小時，企業防禦壓力極大",
    summary: "資安專家利用「Zero Day Clock」網站圖表，視覺化展示了已知漏洞從公開揭露到首次被實際利用的時間（Time-to-Exploit, TTE）的趨勢。該專案旨在警示資安界，漏洞利用的防禦窗口正在急劇消失。數據顯示，TTE的平均值從2018年開始呈現急遽縮減的趨勢，到2026年已降至極短的數小時內，極大壓縮了企業的反應時間。該網站整合了CISA KEV、VulnCheck等多方威脅情報，追蹤分析了超過3,500個漏洞利用案例。專家強調，企業必須正視這一趨勢，將其作為向董事會報告的關鍵警示，要求組織提升資安韌性，建立更快速的漏洞修補與應對機制。",
    tags: ["Zero Day Clock", "Time-to-Exploit", "CISA KEV", "漏洞利用", "資安趨勢", "防禦窗口"],
    title_en: "Cybersecurity Experts Warn of 'Zero Day Clock': Vulnerability Exploitation Window Shrinks to Hours, Placing Immense Pressure on Corporate Defense",
    summary_en: "Cybersecurity experts are using the 'Zero Day Clock' website to visualize the trend of Time-to-Exploit (TTE)—the time between a vulnerability's public disclosure and its first actual exploitation. The project aims to warn the cybersecurity community that the defense window for exploiting vulnerabilities is rapidly disappearing. Data shows that the average TTE has been rapidly shrinking since 2018, falling to mere hours by 2026, which severely compresses corporate response time. The website integrates multi-source threat intelligence, including CISA KEV and VulnCheck, tracking and analyzing over 3,500 vulnerability exploitation cases. Experts emphasize that enterprises must acknowledge this trend, treating it as a critical warning when reporting to the board, and demanding that organizations enhance cybersecurity resilience and establish faster vulnerability patching and response mechanisms.",
    tags_en: ["Zero Day Clock", "Time-to-Exploit", "CISA KEV", "Exploitation", "Cybersecurity Trends", "Defense Window"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177079", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "跨國釣魚攻擊鎖定中小企業：駭客冒用國際刑警組織名義部署勒索軟體",
    summary: "近期，資安業者 Bitdefender 揭露一場大規模的跨國釣魚攻擊行動。攻擊目標鎖定缺乏專業法務能力的全球中小企業，橫跨食品、農業、法律、金融等多元產業。駭客透過偽造國際刑警組織（INTERPOL）的郵件，聲稱受害者涉及跨國調查，誘騙收件者點擊連結下載並執行惡意檔案，最終在受害系統部署勒索軟體。研究人員指出，惡意軟體偽裝成視訊檔案的可執行檔，並使用 Proton Drive 等強調隱私的雲端服務託管酬載，而非常見的雲端硬碟。攻擊者利用國際執法機構的公信力提高郵件可信度，且要求受害者透過匿名通訊平臺 Tox 聯繫協商贖金，增加了受害者的困境。企業應提高警覺，特別注意來自官方機構的非預期郵件，並強化員工的資安教育，避免點擊可疑連結。",
    tags: ["釣魚攻擊", "勒索軟體", "國際刑警組織", "中小企業", "Bitdefender", "Proton Drive"],
    title_en: "Cross-Border Phishing Attack Targets SMEs: Hackers Impersonate Interpol to Deploy Ransomware",
    summary_en: "Recently, cybersecurity firm Bitdefender revealed a large-scale cross-border phishing campaign. The attack targeted global small and medium-sized enterprises (SMEs) lacking professional legal capabilities, spanning diverse industries such as food, agriculture, law, and finance. Hackers used emails impersonating the International Criminal Police Organization (INTERPOL), claiming the victims were involved in cross-border investigations. They lured recipients into clicking links to download and execute malicious files, ultimately deploying ransomware on the victim's systems. Researchers noted that the malware disguised itself as an executable video file and hosted the payload on privacy-focused cloud services like Proton Drive, rather than conventional cloud drives. The attackers leveraged the credibility of international law enforcement agencies to increase email trustworthiness, and furthermore, required victims to contact negotiation channels via the anonymous communication platform Tox, exacerbating the victims' predicament. Companies should raise their awareness, paying special attention to unexpected emails from official organizations, and strengthen employee cybersecurity education to avoid clicking suspicious links.",
    tags_en: ["Phishing Attack", "Ransomware", "International Criminal Police Organization", "SMEs", "Bitdefender", "Proton Drive"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177080", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Microsoft 雲端郵件 Exchange Online 權限提升漏洞 CVE-2026-54998 已修補，防範未授權資料存取",
    summary: "Microsoft 於 7 月 2 日揭露雲端郵件服務 Exchange Online 的高風險漏洞 CVE-2026-54998。此漏洞源自 Exchange Online 的授權機制，可能讓已通過身分驗證的攻擊者透過網路提升權限，進而造成未授權的資料存取。該漏洞的 CVSS 嚴重性評分達 8.8 分，對機密性、完整性與可用性皆有高度影響。Microsoft 已在雲端服務平臺完成修補，且公告指出目前尚無遭實際利用跡象。由於此漏洞的攻擊複雜性與所需權限均為低，建議用戶應確保其 Exchange Online 服務已透過 Microsoft 官方管道完成最新的安全修補，以避免潛在的資料外洩風險。",
    tags: ["Microsoft", "Exchange Online", "CVE-2026-54998", "權限提升", "雲端服務", "資料外洩"],
    title_en: "Microsoft Cloud Email Exchange Online Privilege Escalation Vulnerability CVE-2026-54998 Patched, Preventing Unauthorized Data Access",
    summary_en: "Microsoft disclosed a high-risk vulnerability, CVE-2026-54998, in its cloud email service, Exchange Online, on July 2. This vulnerability originates from the Exchange Online authorization mechanism and could allow an authenticated attacker to escalate privileges over the network, leading to unauthorized data access. The vulnerability has a CVSS severity score of 8.8, posing a high impact on confidentiality, integrity, and availability. Microsoft has completed the patch on the cloud service platform and announced that there are currently no signs of active exploitation. Given that the attack complexity and required privileges for this vulnerability are both low, users are advised to ensure their Exchange Online service has been updated with the latest security patches through official Microsoft channels to prevent potential data leakage risks.",
    tags_en: ["Microsoft", "Exchange Online", "CVE-2026-54998", "Privilege Escalation", "Cloud Service", "Data Leakage"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177077", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用Azure CLI與ROPC機制攻擊M365帳號：Huntress揭露8,100萬次登入嘗試",
    summary: "資安公司Huntress報告揭露，駭客在6月12日至26日期間，利用Microsoft Azure CLI工具，針對Microsoft 365帳號發動了超過8,100萬次的登入嘗試。攻擊者利用已外洩的帳號密碼，透過ROPC（Resource Owner Password Credentials）OAuth驗證程序，對M365帳號進行密碼噴灑攻擊。此攻擊的實務影響在於，攻擊者能藉此避開部分企業實施的多因素驗證（MFA）與條件式存取政策（CAP）。此外，思科Talos也揭露了ARToken等釣魚即服務（PhaaS）平臺，可鎖定M365權杖，支援讀取Outlook郵件、建立轉寄規則，並用於發動商業電子郵件詐騙（BEC）。修補建議包括強化MFA機制，並審視OAuth流程的安全性，特別是針對ROPC等高風險驗證流程。",
    tags: ["Microsoft 365", "Azure CLI", "ROPC", "密碼噴灑", "MFA", "BEC"],
    title_en: "Hackers Attack M365 Accounts Using Azure CLI and ROPC Mechanism: Huntress Reveals 81 Million Login Attempts",
    summary_en: "A report from cybersecurity firm Huntress revealed that between June 12 and June 26, hackers launched over 81 million login attempts targeting Microsoft 365 accounts using the Microsoft Azure CLI tool. The attackers utilized leaked account credentials to perform password spraying attacks against M365 accounts via the ROPC (Resource Owner Password Credentials) OAuth authentication flow. The practical impact of this attack is that the attackers can bypass some Multi-Factor Authentication (MFA) and Conditional Access Policy (CAP) implemented by enterprises. Furthermore, Cisco Talos disclosed phishing-as-a-service (PhaaS) platforms, such as ARToken, which can hijack M365 tokens, support reading Outlook emails, creating forwarding rules, and being used for Business Email Compromise (BEC). Remediation recommendations include strengthening MFA mechanisms and reviewing the security of OAuth processes, especially high-risk authentication flows like ROPC.",
    tags_en: ["Microsoft 365", "Azure CLI", "ROPC", "Password Spraying", "MFA", "BEC"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177072", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "思科Unified CM重大漏洞CVE-2026-20230已遭積極利用，建議用戶立即升級修補",
    summary: "思科（Cisco）針對企業通訊管理平臺Unified CM的重大漏洞CVE-2026-20230，於7月1日發布修訂資安公告，確認該漏洞已被積極利用。該漏洞的CVSS嚴重性評分為8.6分，思科PSIRT於2026年發現此漏洞已被積極利用。根據追蹤資料，全球約有200餘臺Unified CM裝置暴露於網際網路，但修補狀況不明。由於該漏洞的概念驗證程式碼已公開，且已有多方（如Defused Cyber、CISA、臺灣國家資安院）警示其已被實際利用，用戶應立即升級到思科提供的修復版本，以防範遭受攻擊。",
    tags: ["思科", "Cisco", "Unified CM", "CVE-2026-20230", "CVSS", "資安公告", "KEV"],
    title_en: "Cisco Unified CM Critical Vulnerability CVE-2026-20230 Actively Exploited; Users Advised to Upgrade Immediately",
    summary_en: "Cisco released an updated security advisory on July 1st regarding a critical vulnerability, CVE-2026-20230, in its Unified CM enterprise communication platform, confirming that the vulnerability has been actively exploited. The vulnerability has a CVSS severity score of 8.6, and the Cisco PSIRT discovered that the vulnerability was actively exploited in 2026. According to tracking data, approximately 200 Unified CM devices globally are exposed to the internet, but the patching status is unknown. Since proof-of-concept code for this vulnerability has been made public, and multiple parties (such as Defused Cyber, CISA, and the Taiwan National Cybersecurity Agency) have warned of its actual exploitation, users should immediately upgrade to the remediation version provided by Cisco to prevent attacks.",
    tags_en: ["Cisco", "Cisco", "Unified CM", "CVE-2026-20230", "CVSS", "Security Advisory", "KEV"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177070", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "執法行動 Operation Endgame 揭露竊資軟體 StealC 基礎設施漏洞，協助中斷犯罪活動",
    summary: "多國執法機關與資安公司 Proofpoint、IBM X-Force 聯手進行 Operation Endgame 執法行動，成功破壞了包括 SocGholish、Amadey 和 StealC 在內的惡意程式犯罪基礎設施。研究團隊發現 StealC 的 C2 後臺存在一項安全漏洞，該漏洞源於後臺程式對上傳檔案名稱處理不當，可能允許攻擊者在伺服器上寫入未經授權的檔案。儘管 StealC 開發者已於 2 月修補此漏洞，研究人員仍指出後臺程式碼架構存在多處拼湊和冗餘邏輯，可能曝露其他弱點。Proofpoint 與 IBM 透過打造 StealC 模擬器，模擬受感染裝置與 C2 伺服器的通訊行為，成功掌握了攻擊者投遞的次階段惡意程式與基礎設施關聯，協助執法單位進行查扣。",
    tags: ["StealC", "Operation Endgame", "C2 伺服器", "基礎設施漏洞", "竊資軟體", "Proofpoint", "IBM"],
    title_en: "Law Enforcement Operation Endgame Exposes StealC Data Theft Software Infrastructure Vulnerability, Aiding Disruption of Criminal Activities",
    summary_en: "Multiple national law enforcement agencies and cybersecurity firms Proofpoint and IBM X-Force collaborated on Operation Endgame, successfully dismantling malicious criminal infrastructure including SocGholish, Amadey, and StealC. The research team discovered a security vulnerability in StealC's C2 backend, which originated from improper handling of uploaded file names by the backend program. This vulnerability potentially allows attackers to write unauthorized files to the server. Although StealC developers patched this vulnerability in February, researchers pointed out that the backend code architecture contains multiple instances of cobbled-together and redundant logic, which may expose other weaknesses. Proofpoint and IBM created a StealC simulator to mimic the communication behavior between infected devices and the C2 server, successfully capturing the secondary malicious payloads and infrastructure associations deployed by the attackers, assisting law enforcement agencies in seizure and takedown.",
    tags_en: ["StealC", "Operation Endgame", "C2 Server", "Infrastructure Vulnerability", "Data Theft Software", "Proofpoint", "IBM"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177069", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Citrix NetScaler 漏洞遭迅速濫用：CVE-2026-8451 具備高嚴重性，建議立即修補",
    summary: "研究人員觀察到，Citrix於6月30日公布的NetScaler ADC及SSL VPN設備的六項漏洞，其中CVE-2026-8451，在漏洞揭露後不到24小時即被攻擊者濫用。該漏洞與過去的CitrixBleed漏洞性質相似，屬於敏感資料外洩問題，CVSS v4.0嚴重性評分達8.8分。攻擊模式顯示，攻擊者會向目標伺服器傳送特定請求，若主機回傳200訊息，即會植入濫用程式，符合真實攻擊而非一般掃描的判斷。受影響的設備包括NetScaler ADC及Gateway，影響版本涵蓋14.1-72.61以前、13.1-63.18以前等。Citrix已提供修補版本，建議所有用戶應立即更新系統以防範攻擊。",
    tags: ["Citrix", "NetScaler", "CVE-2026-8451", "SSL VPN", "資安漏洞", "高嚴重性"],
    title_en: "Citrix NetScaler Vulnerability Rapidly Exploited: CVE-2026-8451 Has High Severity, Immediate Patching Recommended",
    summary_en: "Researchers observed that among six vulnerabilities in NetScaler ADC and SSL VPN devices, disclosed by Citrix on June 30, CVE-2026-8451 was exploited by attackers less than 24 hours after its disclosure. This vulnerability is similar in nature to the past CitrixBleed vulnerability, involving sensitive data leakage, and has a CVSS v4.0 severity score of 8.8. The attack pattern shows that attackers send specific requests to the target server; if the host returns a 200 message, an exploit program is injected, indicating a real attack rather than a general scan. Affected devices include NetScaler ADC and Gateway, with affected versions covering 14.1 up to 72.61 and 13.1 up to 63.18, among others. Citrix has provided a patch version, and all users are advised to immediately update their systems to prevent attacks.",
    tags_en: ["Citrix", "NetScaler", "CVE-2026-8451", "SSL VPN", "Security Vulnerability", "High Severity"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177067", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "遠端管理工具 SimpleHelp 曝露 CVSS 10 分漏洞 CVE-2026-48558，CISA 警告已遭駭客利用",
    summary: "遠端管理工具平臺 SimpleHelp 在五月發布資安更新，修補了評級為 CVSS 10 分的嚴重漏洞 CVE-2026-48558。此漏洞一旦未修補，極易成為駭客攻擊的目標。資安公司 Blackpoint 及美國網路安全與基礎設施安全局（CISA）已警告，該漏洞已被用於實際攻擊活動。Shadowserver 基金會追蹤發現，截至七月一日，仍有大量 SimpleHelp 伺服器未進行修補而曝險，其中部分位於美國。文章呼籲 IT 人員應立即更新 SimpleHelp 系統，以防遭受利用。由於此漏洞的嚴重性極高，建議所有使用 SimpleHelp 的機構應優先修補，並監控是否有異常的遠端連線活動。",
    tags: ["SimpleHelp", "CVE-2026-48558", "CVSS 10", "遠端管理工具", "CISA", "資安漏洞"],
    title_en: "Remote Management Tool SimpleHelp Exposed CVSS 10 Vulnerability CVE-2026-48558; CISA Warns of Active Exploitation",
    summary_en: "The remote management platform SimpleHelp released a security update in May to patch a critical vulnerability, CVE-2026-48558, which was rated CVSS 10. If left unpatched, this vulnerability is highly susceptible to exploitation by hackers. Security firm Blackpoint and the U.S. Cybersecurity and Infrastructure Security Agency (CISA) have warned that this vulnerability has been used in actual attack campaigns. Shadowserver Foundation tracked that, as of July 1st, a large number of SimpleHelp servers remain exposed and unpatched, some of which are located in the United States. The article urges IT personnel to immediately update their SimpleHelp systems to prevent exploitation. Due to the extreme severity of this vulnerability, all organizations using SimpleHelp are advised to prioritize patching and monitor for any unusual remote connection activity.",
    tags_en: ["SimpleHelp", "CVE-2026-48558", "CVSS 10", "Remote Management Tool", "CISA", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177066", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 修補 6 個漏洞：包含憑證驗證與組態檔邏輯錯誤，建議升級至指定版本",
    summary: "Apache 軟體基金會發布資安公告，修補了 Java Web 應用程式伺服器 Apache Tomcat 的 6 個漏洞。受影響版本包含 9.x、10.x 與 11.x 等多個分支。其中，兩個重大漏洞為 CVE-2026-55276 和 CVE-2026-53434。CVE-2026-55276 是由於 Tomcat 產生有效組態檔（effective web.xml）的邏輯錯誤，可能導致管理員誤判安全性設定。CVE-2026-53434 則出現在 FFM Connector 處理憑證撤銷清單（CRL）的驗證機制，可能使應被撤銷的憑證仍被接受，影響連線驗證安全。用戶應立即升級至修補後的版本，包括 9.0.119、10.1.56 與 11.0.23 以上。雖然公告中列出的安全影響等級為 Low，但外部資料庫顯示其 CVSS 嚴重性評分為 9.1，建議用戶注意風險評估。",
    tags: ["Apache Tomcat", "CVE-2026-55276", "CVE-2026-53434", "Java Web 伺服器", "憑證驗證", "資安漏洞"],
    title_en: "Apache Tomcat Patches 6 Vulnerabilities: Including Certificate Validation and Configuration File Logic Errors, Upgrade to Specified Versions Recommended",
    summary_en: "The Apache Software Foundation has issued a security announcement patching six vulnerabilities in the Apache Tomcat Java Web Application Server. Affected versions include multiple branches such as 9.x, 10.x, and 11.x. Two major vulnerabilities are CVE-2026-55276 and CVE-2026-53434. CVE-2026-55276 is due to a logic error in how Tomcat generates the effective web.xml configuration file, which could potentially lead administrators to misjudge security settings. CVE-2026-53434 resides in the validation mechanism for Certificate Revocation Lists (CRL) when processed by the FFM Connector, potentially allowing revoked certificates to still be accepted, compromising connection validation security. Users are advised to immediately upgrade to the patched versions, including 9.0.119, 10.1.56, and 11.0.23 or higher. Although the security impact level listed in the announcement is Low, external databases show a CVSS severity score of 9.1, and users are advised to pay attention to risk assessment.",
    tags_en: ["Apache Tomcat", "CVE-2026-55276", "CVE-2026-53434", "Java Web Server", "Certificate Validation", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177063", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-025",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "勒索軟體利用 CitrixBleed 2 (CVE-2025-5777) 威脅，駭客透過 RaaS 滲透高價值基礎設施",
    summary: "資安公司 Arctic Wolf 追蹤到勒索軟體 Anubis 的 RaaS 附屬團體，正透過多種方式滲透受害組織。其中一種主要的攻擊路徑即是利用 Citrix Bleed 2 漏洞（CVE-2025-5777）。此外，駭客也常利用有效的憑證登入思科 AnyConnect VPN 系統。Arctic Wolf 分析指出，這些攻擊者具有共通的作法：他們會反覆使用多款合法的遠端管理與監控工具（RMM），並鎖定網域控制器、虛擬化平臺、NAS 系統等高價值基礎設施。更進一步，駭客還會利用 cloudflared 等具驗證機制的代理伺服器，以及基於 SSH 的 SOCKS 隧道，來建立替代的對外通訊，加劇了企業的資安風險。建議企業應即時修補所有遠端存取服務的漏洞，並強化對內部網路高價值資產的監控與防禦。",
    tags: ["Citrix", "CVE-2025-5777", "勒索軟體", "RaaS", "Arctic Wolf", "AnyConnect"],
    title_en: "Ransomware Exploits CitrixBleed 2 (CVE-2025-5777) Threat, Hackers Infiltrate High-Value Infrastructure via RaaS",
    summary_en: "Cybersecurity firm Arctic Wolf has tracked an RaaS affiliate group utilizing the ransomware Anubis, which is infiltrating victim organizations through multiple vectors. One primary attack path involves exploiting the Citrix Bleed 2 vulnerability (CVE-2025-5777). Furthermore, hackers frequently use valid credentials to log into Cisco AnyConnect VPN systems. Arctic Wolf's analysis indicates that these attackers share common tactics: they repeatedly use multiple legitimate Remote Monitoring and Management (RMM) tools, targeting high-value infrastructure such as domain controllers, virtualization platforms, and NAS systems. Moreover, the hackers establish alternative external communication channels by leveraging proxy servers with authentication mechanisms, such as cloudflared, and SSH-based SOCKS tunnels, significantly escalating corporate cybersecurity risks. Enterprises are advised to immediately patch all remote access service vulnerabilities and strengthen monitoring and defense for high-value internal network assets.",
    tags_en: ["Citrix", "CVE-2025-5777", "Ransomware", "RaaS", "Arctic Wolf", "AnyConnect"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177060", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-026",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Langflow 遭 RCE 漏洞攻擊：駭客利用 CVE-2026-33017 竊取挖礦程式",
    summary: "圖像化大型語言模型（LLM）開發工具 Langflow 的工程團隊曾揭露一個遠端程式碼執行（RCE）漏洞 CVE-2026-33017，該漏洞的 CVSS v4.0 風險評分為 9.3。威脅情報公司 Sysdig 警告，攻擊者已在短時間內開始利用此漏洞。駭客利用未經身分驗證的 Langflow API 端點，透過傳入單行 Python 程式碼，成功拉取 Shell 指令碼。攻擊的目的是竊取名為 lambsys.elf 的挖礦程式二進位檔。該程式是用 Go 語言編寫，啟動後會執行多項惡意行為，包括清除競爭對手的挖礦程序、終止常見挖礦連接埠的處理程序，並停用 AppArmor、UFW、iptables、SELinux 等多層系統安全機制，甚至包含阿里巴巴的雲端代理程式。建議使用者應立即修補或限制對 Langflow API 的存取權限，以防範被用於挖礦或進行系統破壞。",
    tags: ["Langflow", "CVE-2026-33017", "RCE", "LLM", "挖礦攻擊", "Python"],
    title_en: "Langflow Targeted by RCE Vulnerability: Attackers Exploit CVE-2026-33017 to Steal Mining Program",
    summary_en: "The engineering team behind Langflow, a graphical development tool for Large Language Models (LLMs), disclosed a Remote Code Execution (RCE) vulnerability, CVE-2026-33017, which has a CVSS v4.0 risk score of 9.3. Threat intelligence company Sysdig warns that attackers have begun exploiting this vulnerability in a short period. Attackers utilized unauthenticated Langflow API endpoints, successfully pulling shell scripts by injecting single-line Python code. The goal of the attack was to steal a mining program binary file named lambsys.elf. This program, written in Go, executes multiple malicious actions upon startup, including clearing competitor mining processes, terminating common mining port processes, and disabling multiple layers of system security mechanisms such as AppArmor, UFW, iptables, and SELinux, even including Alibaba's cloud agent. Users are advised to immediately patch or restrict access to the Langflow API to prevent it from being used for mining or system destruction.",
    tags_en: ["Langflow", "CVE-2026-33017", "RCE", "LLM", "Mining Attack", "Python"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177058", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-027",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "IBM修補Db2資料庫重大漏洞CVE-2026-10109：遠端執行程式碼風險，建議升級至最新累積版本",
    summary: "IBM於6月23日發布資安公告，修補了Db2資料庫的一個重大漏洞CVE-2026-10109。此漏洞的CVSS嚴重性評分高達9.8分，源於Db2的DRDA資料庫通訊協定在初始握手程序處理上的不當，可能允許攻擊者執行遠端程式碼。受影響的產品版本包括11.5.x與12.1.x的Server版。由於IBM未提供針對個別版本的修補程式或緩解措施，使用者必須將系統升級至包含修補程式的累積特殊版本（CSB）。這些CSB版本涵蓋Db2 Universal、Db2 Server、Db2 Connect等所有組件，建議用戶應立即升級至基於最新11.5.9或12.1.4版的累積特殊版本，以確保系統安全。",
    tags: ["IBM", "Db2", "CVE-2026-10109", "遠端執行程式碼", "資料庫", "資安公告"],
    title_en: "IBM Patches Critical Db2 Database Vulnerability CVE-2026-10109: Remote Code Execution Risk, Upgrade to Latest Cumulative Version Recommended",
    summary_en: "On June 23, IBM issued a security announcement patching a critical vulnerability, CVE-2026-10109, in the Db2 database. This vulnerability has a CVSS severity score of 9.8 and originates from improper handling of the initial handshake procedure within Db2's DRDA database communication protocol, potentially allowing attackers to execute remote code. Affected product versions include the Server editions of 11.5.x and 12.1.x. Since IBM did not provide patches or mitigations for individual versions, users must upgrade their systems to a Cumulative Special Bulletin (CSB) version that includes the patch. These CSB versions cover all components, including Db2 Universal, Db2 Server, and Db2 Connect. Users are advised to immediately upgrade to the Cumulative Special Version based on the latest 11.5.9 or 12.1.4 release to ensure system security.",
    tags_en: ["IBM", "Db2", "CVE-2026-10109", "Remote Code Execution", "Database", "Security Announcement"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177057", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-028",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Talos揭露ARToken釣魚平臺：攻擊者濫用裝置碼流程竊取Microsoft 365權杖，威脅發動BEC",
    summary: "思科Talos威脅情報團隊揭露ARToken釣魚即服務（PhaaS）平臺，指出該工具與EvilTokens生態系共用基礎架構，主要鎖定Microsoft 365帳號。攻擊者可透過釣魚連結，誘騙受害者在微軟合法裝置登入頁面輸入驗證碼，並完成MFA驗證，藉此濫用OAuth 2.0裝置授權流程。成功後，攻擊者能取得可用權杖，進而存取受害者Microsoft 365環境，並可透過Primary Refresh Token (PRT) 維持長期存取權。ARToken整合了超過80個API端點，功能包括讀取Outlook郵件、建立轉寄規則、存取SharePoint與OneDrive資料，甚至可發動商業電子郵件詐騙（BEC）。為防禦此類威脅，研究人員建議企業重新檢視裝置碼驗證流程的必要性，並透過條件式存取政策限制高風險登入情境；同時應針對財務、採購等關鍵人員，加強裝置碼釣魚與BEC攻擊的識別與應變訓練。",
    tags: ["思科Talos", "ARToken", "Microsoft 365", "PhaaS", "OAuth 2.0", "BEC"],
    title_en: "Talos Uncovers ARToken Phishing Platform: Attackers Exploit Device Code Flow to Steal Microsoft 365 Tokens, Threatening BEC",
    summary_en: "The Cisco Talos Threat Intelligence team has uncovered the ARToken phishing Platform-as-a-Service (PhaaS), noting that the tool shares infrastructure with the EvilTokens ecosystem and primarily targets Microsoft 365 accounts. Attackers can use phishing links to trick victims into entering verification codes on legitimate Microsoft device sign-in pages and completing MFA verification, thereby exploiting the OAuth 2.0 device authorization flow. Upon success, attackers can acquire usable tokens, subsequently accessing the victim's Microsoft 365 environment, and maintaining long-term access via a Primary Refresh Token (PRT). ARToken integrates over 80 API endpoints, with functionalities including reading Outlook emails, creating forwarding rules, accessing SharePoint and OneDrive data, and even initiating Business Email Compromise (BEC). To defend against such threats, researchers recommend that enterprises re-evaluate the necessity of the device code authentication process and implement Conditional Access policies to restrict high-risk login scenarios; furthermore, they should enhance training for key personnel in finance and procurement regarding the identification and response to device code phishing and BEC attacks.",
    tags_en: ["Cisco Talos", "ARToken", "Microsoft 365", "PhaaS", "OAuth 2.0", "BEC"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177056", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-029",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安警示：FatFs檔案系統庫曝七大漏洞，物理存取可導致嵌入式設備程式碼執行",
    summary: "資安公司 runZero 公佈了在 FatFs 檔案系統庫中發現的七個漏洞。FatFs 是一個廣泛用於 USB 隨身碟、SD 卡等儲存媒體的檔案系統庫，被嵌入到安全攝影機、無人機、工業控制器、硬體加密錢包等大量嵌入式設備的韌體中。這些漏洞的共同點是設備在處理惡意或格式錯誤的儲存媒體時，會導致記憶體處理錯誤。其中最嚴重的漏洞為 CVE-2026-6682，這是一個 FAT32 掛載時的整數溢位（CVSS 7.6，高風險），可能導致記憶體損壞並執行攻擊者代碼。其他漏洞包括 exFAT 標籤欄位溢位（CVE-2026-6687）和長檔名溢位（CVE-2026-6688）。由於許多嵌入式設備缺乏記憶體保護機制，runZero 警告，只要發生物理存取，攻擊者即可取得設備的完全控制權。目前 FatFs 的維護者缺乏回應，修補工作需由下游設備廠商自行處理。建議設備製造商應審核使用 FatFs 的周邊程式碼，並將物理連接埠和韌體更新通道視為攻擊面，限制未經信任的媒體接入。",
    tags: ["FatFs", "CVE-2026-6682", "嵌入式設備", "檔案系統", "記憶體溢位", "物理存取"],
    title_en: "Cybersecurity Alert: FatFs File System Library Exposed to Seven Vulnerabilities, Physical Access Can Lead to Embedded Device Code Execution",
    summary_en: "Cybersecurity firm runZero has disclosed seven vulnerabilities found in the FatFs file system library. FatFs is a file system library widely used in storage media such as USB flash drives and SD cards, and is embedded in the firmware of numerous embedded devices, including security cameras, drones, industrial controllers, and hardware encryption wallets. The commonality among these vulnerabilities is that the device experiences memory handling errors when processing malicious or incorrectly formatted storage media. The most severe vulnerability is CVE-2026-6682, an integer overflow that occurs during FAT32 mounting (CVSS 7.6, High Risk), which could lead to memory corruption and the execution of attacker code. Other vulnerabilities include exFAT label field overflow (CVE-2026-6687) and long filename overflow (CVE-2026-6688). Because many embedded devices lack memory protection mechanisms, runZero warns that physical access alone allows an attacker to gain complete control over the device. Currently, the maintainers of FatFs have not responded, and patching must be handled by the downstream device manufacturers themselves. It is recommended that device manufacturers review the peripheral code using FatFs and treat physical connection ports and firmware update channels as attack surfaces, restricting access from untrusted media.",
    tags_en: ["FatFs", "CVE-2026-6682", "Embedded Devices", "File System", "Memory Overflow", "Physical Access"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/unpatched-flaws-disclosed-in-filesystem.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-030",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Bad Epoll Linux 核心漏洞（CVE-2026-46242）允許普通用戶升級為 Root，影響桌面與 Android",
    summary: "Bad Epoll 是一個新的 Linux 核心漏洞（CVE-2026-46242），屬於「使用後釋放」（use-after-free）類型。它發生在核心的兩個不同部分同時嘗試清理同一個內部物件時，導致記憶體衝突。攻擊者可以利用這種時間差來破壞核心記憶體，從普通用戶權限提升至 Root 權限。此漏洞影響所有基於 6.4 或更高版本的 Linux 核心，但未修補的版本仍存在風險。由於 Epoll 是核心標準功能，無法關閉，修補建議是應用上游提交 a6dc643c6931 或安裝發行版提供的回溯補丁。雖然目前沒有證據顯示該漏洞已被實際利用，但其可從 Chrome 的渲染器沙箱內部觸發，且可影響 Android 系統，風險極高。",
    tags: ["Linux 核心", "CVE-2026-46242", "use-after-free", "Root 權限提升", "Android", "Epoll"],
    title_en: "Bad Epoll Linux Kernel Vulnerability (CVE-2026-46242) Allows Standard Users to Elevate to Root, Affecting Desktop and Android",
    summary_en: "Bad Epoll is a new Linux kernel vulnerability (CVE-2026-46242) classified as a 'use-after-free' type. It occurs when two different parts of the kernel attempt to clean the same internal object simultaneously, leading to a memory conflict. An attacker can exploit this timing difference to corrupt kernel memory, escalating privileges from a standard user to Root. This vulnerability affects all Linux kernels based on 6.4 or higher, but unpatched versions remain at risk. Since Epoll is a core kernel function that cannot be disabled, the recommended fix is to apply the upstream commit a6dc643c6931 or install the distribution-provided backport patch. Although there is currently no evidence that this vulnerability has been actively exploited, it can be triggered from within the Chrome renderer sandbox and may affect Android systems, posing an extremely high risk.",
    tags_en: ["Linux Kernel", "CVE-2026-46242", "use-after-free", "Root Privilege Escalation", "Android", "Epoll"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-bad-epoll-linux-kernel-flaw-lets.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-031",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究發現新型模組化惡意框架 Avalon：透過釣魚郵件與 ISO 偽裝進行多階段攻擊",
    summary: "資安研究人員發現了一個代號為 Avalon 的模組化惡意框架，該框架透過多階段的釣魚鏈進行傳播，能夠繞過傳統安全控制。攻擊鏈始於偽造的法律文件郵件，誘騙受害者點擊嵌入 ISO 影像的 Windows 捷徑，啟動 MSBuild 專案。該專案載入的 .NET 組件會干擾 Windows 事件追蹤 (ETW) 功能，降低鑑識可見度，並透過 HTTPS 下載後續載荷。Avalon 整合了憑證收集（包括瀏覽器、加密貨幣錢包、VPN 密碼等）、橫向移動、C2 通訊、以及最終的勒索軟體執行（代號 CrownX）。其功能包括終止 Volume Shadow Copy Service、移除系統痕跡、甚至直接干擾磁碟結構，使系統無法恢復。研究指出，該框架展示了 AI 輔助開發的跡象，大幅降低了惡意軟體開發的門檻，使得攻擊者無需高超技術即可建立複雜的攻擊流程。",
    tags: ["Avalon", "CrownX", "釣魚攻擊", "模組化惡意軟體", "ETW", "AI 輔助攻擊", "橫向移動"],
    title_en: "Research Uncovers Modular Malicious Framework Avalon: Multi-Stage Attacks via Phishing Emails and ISO Disguise",
    summary_en: "Cybersecurity researchers have discovered a modular malicious framework, codenamed Avalon. This framework propagates through multi-stage phishing chains, capable of bypassing traditional security controls. The attack chain begins with a forged legal document email, tricking the victim into clicking a Windows shortcut embedded with an ISO image, which then initiates an MSBuild project. The .NET component loaded by this project interferes with Windows Event Tracing (ETW) functionality, reducing forensic visibility, and subsequently downloads further payloads via HTTPS. Avalon integrates credential harvesting (including browser, cryptocurrency wallet, and VPN passwords), lateral movement, C2 communication, and ultimately, ransomware execution (codenamed CrownX). Its capabilities include terminating the Volume Shadow Copy Service, removing system traces, and even directly interfering with disk structures, making system recovery impossible. The research indicates that the framework shows signs of AI-assisted development, significantly lowering the barrier to entry for malicious software development, allowing attackers to establish complex attack processes without requiring high technical expertise.",
    tags_en: ["Avalon", "CrownX", "Phishing Attack", "Modular Malware", "ETW", "AI-Assisted Attack", "Lateral Movement"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/new-avalon-malware-framework-packs.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-032",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安分析揭露「Armored Likho」駭客群：鎖定政府與電網，利用開源工具進行深度滲透",
    summary: "資安廠商分析指出，一個名為「Armored Likho」的未公開駭客群，近期正針對俄羅斯、巴西和國卡斯克斯坦等地的政府機構和電力部門進行網路攻擊。該駭客群的攻擊目標為網路間諜活動，並結合了針對個人財務的活動。其工具箱包含混淆的模組化遠端存取木馬（RAT）和資訊竊取器，旨在規避動態分析。攻擊鏈的啟動點通常是利用釣魚郵件，誘騙受害者下載包含執行檔的壓縮包。攻擊者會利用VBScript和排程任務建立持久性，並使用如Go2Tunnel等工具建立反向SSH隧道。此外，他們還利用了已修補的Windows文件處理漏洞（CVE-2025-9491），透過捷徑（LNK）觸發遠端程式碼執行。竊取器「BusySnake Stealer」功能極為複雜，可竊取剪貼簿、系統檔案、螢幕截圖、密碼，甚至透過偽裝的遠端桌面軟體（如RustDesk）誘騙受害者輸入憑證。此駭客群的行為模式與已知的「Eagle Werewolf」駭客群有高度重疊，顯示其具備高度的專業性與持續的威脅性。",
    tags: ["Armored Likho", "BusySnake Stealer", "CVE-2025-9491", "RAT", "網路間諜", "Go2Tunnel", "政府機構"],
    title_en: "Cybersecurity Analysis Uncovers 'Armored Likho' Threat Group: Targeting Governments and Power Grids with Open-Source Tools for Deep Penetration",
    summary_en: "Cybersecurity vendors' analysis points to an undisclosed threat group named 'Armored Likho' that has recently been conducting cyberattacks against government agencies and power sectors in locations such as Russia, Brazil, and Kazakhstan. The group's attack objectives are focused on cyber espionage, combined with activities targeting personal finances. Their toolkit includes obfuscated, modular Remote Access Trojans (RATs) and information stealers, designed to evade dynamic analysis. The attack chain typically initiates through phishing emails, tricking victims into downloading compressed packages containing executables. The attackers establish persistence using VBScript and scheduled tasks, and utilize tools like Go2Tunnel to establish reverse SSH tunnels. Furthermore, they exploit a patched Windows file handling vulnerability (CVE-2025-9491) to trigger Remote Code Execution via LNK shortcuts. The stealer, 'BusySnake Stealer,' is highly sophisticated, capable of stealing clipboard data, system files, screenshots, and passwords, and can even trick victims into entering credentials through disguised remote desktop software (such as RustDesk). This threat group's behavioral patterns show high overlap with the known 'Eagle Werewolf' threat group, indicating a high degree of professionalism and persistent threat capability.",
    tags_en: ["Armored Likho", "BusySnake Stealer", "CVE-2025-9491", "RAT", "Cyber Espionage", "Go2Tunnel", "Government Agencies"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/armored-likho-targets-government.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-033",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "前歐議委員受襲：Citizen Lab揭露Pegasus間諜軟體攻擊，揭示歐盟監管漏洞",
    summary: "公民實驗室（Citizen Lab）發布報告，揭露前歐洲議會成員斯泰利奧斯·庫洛格盧（Stelios Kouloglou）在其參與調查商業監控工具的委員會期間，多次遭受臭名昭著的Pegasus間諜軟體攻擊。研究人員分析其iPhone的鑑識資料，發現其設備在2022年10月21日和2023年3月6日、7日被入侵。攻擊利用了蘋果智慧家庭軟體（HomeKit）的零點擊漏洞（zero-click exploit），代號為PWNYOURHOME，該漏洞已由蘋果在iOS 16.3.1中修復。報告指出，攻擊的模式與先前針對俄白流亡記者和活動家的活動存在重疊，暗示幕後客戶可能擁有在多個歐洲司法管轄區進行監控的授權。此次事件是PEGA委員會成員首次公開成為Pegasus受害者，凸顯了政府利用監控工具對記者、立法者和異議人士進行監控的風險。此外，報告還提及了俄羅斯當局利用Cellebrite工具入侵反對派人士設備的案例，加劇了對國家級監控威脅的擔憂。",
    tags: ["Pegasus", "Citizen Lab", "歐洲議會", "零點擊漏洞", "iOS", "監控軟體", "資訊戰"],
    title_en: "Former MEP Attacked: Citizen Lab Reveals Pegasus Spyware Attack, Exposing EU Regulatory Loopholes",
    summary_en: "Citizen Lab released a report revealing that Stelios Kouloglou, a former European Parliament member, was subjected to multiple Pegasus spyware attacks during his committee work investigating commercial surveillance tools. Researchers analyzed forensic data from his iPhone and found that his device was compromised on October 21, 2022, and March 6 and 7, 2023. The attacks utilized a zero-click exploit in Apple's HomeKit software, codenamed PWNYOURHOME, a vulnerability that Apple patched in iOS 16.3.1. The report noted that the attack pattern overlaps with previous activities targeting Russian opposition journalists and activists, suggesting that the client behind the attacks may possess authorization to conduct surveillance across multiple European jurisdictions. This incident marks the first time a PEGA committee member has publicly been a Pegasus victim, highlighting the risk of governments using surveillance tools to monitor journalists, legislators, and dissidents. Furthermore, the report mentioned cases of Russian authorities using Cellebrite tools to infiltrate the devices of opposition figures, escalating concerns about state-level surveillance threats.",
    tags_en: ["Pegasus", "Citizen Lab", "European Parliament", "zero-click exploit", "iOS", "surveillance software", "information warfare"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/european-parliament-member.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-034",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新 macOS 資訊竊取工具 PamStealer：偽裝 Maccy 剪貼簿管理器，透過 PAM 竊取登入密碼",
    summary: "資安研究人員發現了一款名為 PamStealer 的 macOS 資訊竊取工具。該惡意軟體偽裝成知名的開源剪貼簿管理器 Maccy，透過一個名為「maccyapp[.]com」的仿冒網站進行初始感染。攻擊鏈採用兩階段交付：第一階段是嵌入磁碟映像檔的 AppleScript，它利用 JXA 下載並部署第二階段的 Rust 惡意程式。第二階段的 Rust 程式是一個功能強大的資訊竊取器，能夠收集瀏覽器資料、加密貨幣錢包擴充功能、iCloud Keychain 和剪貼簿內容。最關鍵的特徵是它能透過 macOS 的 Pluggable Authentication Modules (PAM) 驗證受害者輸入的系統登入密碼，並在驗證失敗時重複要求輸入，直到成功捕獲。此外，該工具還會顯示一個仿冒的 Gatekeeper 警告訊息，誤導使用者以為下載失敗。攻擊者利用了 AppleScript 的執行機制，即使檔案仍帶有 `com.apple.quarantine` 屬性也能執行，且具備環境偵測能力，僅在 Apple Silicon 設備上運作。修補建議是使用者應警惕任何模仿 Maccy 的仿冒網站，並僅從官方來源下載應用程式。",
    tags: ["PamStealer", "macOS", "AppleScript", "PAM", "資訊竊取", "Rust", "Maccy"],
    title_en: "New macOS Info-Stealing Tool PamStealer: Masquerading as Maccy Clipboard Manager to Steal Login Passwords via PAM",
    summary_en: "Cybersecurity researchers have discovered an information-stealing tool for macOS called PamStealer. This malware masquerades as the popular open-source clipboard manager Maccy, achieving initial infection through a spoofed website named \"maccyapp[.]com\". The attack chain uses a two-stage delivery: the first stage is an AppleScript embedded disk image, which utilizes JXA to download and deploy the second stage, a Rust malicious program. The second-stage Rust program is a powerful info-stealer capable of collecting browser data, cryptocurrency wallet extensions, iCloud Keychain, and clipboard contents. Its most critical feature is its ability to intercept the victim's system login password via macOS's Pluggable Authentication Modules (PAM) and repeatedly prompt for input upon failed authentication until successful capture. Furthermore, the tool displays a fake Gatekeeper warning message to mislead the user into thinking the download failed. The attackers exploited the AppleScript execution mechanism, allowing execution even if the file retains the `com.apple.quarantine` attribute, and it possesses environment detection capabilities, operating only on Apple Silicon devices. The remediation advice is for users to be wary of any spoofed websites mimicking Maccy and to only download applications from official sources.",
    tags_en: ["PamStealer", "macOS", "AppleScript", "PAM", "Information Theft", "Rust", "Maccy"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/pamstealer-uses-fake-maccy-sites-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-035",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 評測 iPad 系列：分析基礎、Air、Pro 與 mini 四款機型定位與建議",
    summary: "本文深入分析 Apple 當前 iPad 系列的四款產品：基礎 iPad、iPad Air、iPad Pro 與 iPad mini，為用戶提供購買指南。Apple 將基礎 iPad 定位為日常使用（如串流、FaceTime），強調其高性價比；iPad Air 則定位為「Mac級性能」的甜點級選擇，具備 M4 晶片和 Apple Intelligence 支援，適合需要較強運算能力但預算有限的用戶；iPad Pro 則是接近 Mac 的專業級設備，擁有 M5 晶片、Ultra Retina XDR 顯示器和高階連線規格，適合專業創作者；iPad mini 則強調其極致便攜性，適合閱讀或特定專業場景。文章提醒，用戶在選擇時需注意儲存容量、螢幕刷新率等細節，並根據自身需求（如是否需要 Apple Intelligence 或極致便攜性）權衡各機型的優缺點。",
    tags: ["iPad", "Apple Intelligence", "M4 晶片", "iPad Air", "iPad Pro", "Apple Pencil"],
    title_en: "Apple Reviews the iPad Lineup: Analyzing the Positioning and Recommendations for the Base, Air, Pro, and mini Models",
    summary_en: "This article deeply analyzes the four current iPad products from Apple: the base iPad, iPad Air, iPad Pro, and iPad mini, providing a buying guide for users. Apple positions the base iPad for daily use (such as streaming and FaceTime), emphasizing its high cost-performance ratio. The iPad Air is positioned as a sweet spot choice with 'Mac-level performance,' featuring the M4 chip and Apple Intelligence support, suitable for users who need strong computing power but have limited budgets. The iPad Pro is a professional-grade device approaching a Mac, featuring the M5 chip, Ultra Retina XDR display, and high-end connectivity specifications, making it ideal for professional creators. The iPad mini emphasizes extreme portability, making it suitable for reading or specific professional scenarios. The article reminds users to pay attention to details such as storage capacity and screen refresh rate when choosing, and to weigh the pros and cons of each model based on their own needs (such as whether Apple Intelligence or extreme portability is required).",
    tags_en: ["iPad", "Apple Intelligence", "M4 chip", "iPad Air", "iPad Pro", "Apple Pencil"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/03/which-ipad-is-right-for-you", lang: "EN" }
    ]
  },
  {
    id: "20260703-036",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Home 生態系統缺乏權限轉移機制，影響用戶在新居或搬家時的智能家居設備管理",
    summary: "本文指出 Apple Home 生態系統在處理用戶搬家或交接新居時，缺乏明確的設備所有權轉移機制。當用戶從舊居搬到新居，或將智能家居設備交給他人時，現有的系統流程並未提供簡便或標準化的方式來轉移設備的控制權和所有權。這使得智能家居設備的管理和設置過程變得複雜且不順暢。對於依賴智能家居系統的用戶而言，這是一個實務上的痛點，影響了整個智能家居體驗的連續性。文章呼籲 Apple 應增設此類功能，以改善用戶在不同居住環境間的設備管理流程。",
    tags: ["Apple Home", "智能家居", "設備管理", "權限轉移", "iOS"],
    title_en: "Apple Home Ecosystem Lacks Permission Transfer Mechanism, Affecting Smart Home Device Management During Moves",
    summary_en: "This article points out that the Apple Home ecosystem lacks a clear mechanism for transferring device ownership when users move or take over a new residence. When a user moves from an old home to a new one, or transfers smart home devices to another person, the existing system processes do not provide a simple or standardized way to transfer control and ownership of the devices. This makes the management and setup process for smart home devices complex and cumbersome. For users who rely on smart home systems, this is a practical pain point that affects the continuity of the entire smart home experience. The article calls on Apple to add such a feature to improve the device management process for users moving between different living environments.",
    tags_en: ["Apple Home", "Smart Home", "Device Management", "Permission Transfer", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/03/we-really-need-a-way-to-hand-over-ownership-of-an-apple-home", lang: "EN" }
    ]
  },
  {
    id: "20260703-037",
    trackers: ["os"],
    category: "Apple",
    title: "前蘋果員工官司最新進展：Prosser駁斥共謀竊取「Liquid Glass」秘密，指責對方資訊來源不當",
    summary: "本案涉及前蘋果員工 Jon Prosser 與 Michael Ramacciotti，因洩露蘋果未公開的 iOS 26 設計細節（代號 Liquid Glass）而面臨蘋果公司（Apple）的訴訟。蘋果指控雙方竊取商業機密，並違反《電腦詐欺與濫用法》（CFAA）。Prosser在獲得第二次答辯機會後，提交了答辯書，駁斥了蘋果關於他參與共謀或有蓄意傷害蘋果的指控。Prosser的答辯書承認他曾參與並錄製了與 Ramacciotti 的 FaceTime 通話，但強調自己當時不知道 iPhone 屬於前員工 Lipnik，也否認參與任何共謀行為。他主張自己只是作為新聞機構，報導收到的獨家資訊。Prosser同時要求法院駁回蘋果的訴狀，並要求賠償律師費。此案的核心爭議點仍圍繞在資訊的獲取過程是否合法，以及雙方是否構成共謀。",
    tags: ["Apple", "iOS 26", "Liquid Glass", "商業機密", "訴訟", "Prosser"],
    title_en: "Update on Apple Former Employee Lawsuit: Prosser Denies Conspiring to Steal 'Liquid Glass' Secrets, Citing Improper Information Sources",
    summary_en: "This case involves former Apple employees Jon Prosser and Michael Ramacciotti, who faced a lawsuit from Apple regarding the leak of unreleased iOS 26 design details (codenamed Liquid Glass). Apple accused both parties of stealing trade secrets and violating the Computer Fraud and Abuse Act (CFAA). After receiving a second opportunity to respond, Prosser submitted a defense filing, refuting Apple's claims that he participated in a conspiracy or intentionally harmed Apple. Prosser's defense filing acknowledged that he had participated in and recorded a FaceTime call with Ramacciotti, but emphasized that he was unaware at the time that the iPhone belonged to former employee Lipnik, and denied participating in any conspiracy. He maintained that he was merely reporting exclusive information received as a news organization. Prosser also requested the court to dismiss Apple's lawsuit and sought compensation for legal fees. The core dispute remains focused on whether the process of obtaining the information was legal, and whether the parties constituted a conspiracy.",
    tags_en: ["Apple", "iOS 26", "Liquid Glass", "Trade Secrets", "Lawsuit", "Prosser"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/prosser-denies-conspiring-to-steal-apple-secrets-in-lawsuit-response-blames-ramacciotti", lang: "EN" }
    ]
  },
  {
    id: "20260703-038",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "FBI警示：駭客TeamPCP大規模竄改開發工具，透過軟體供應鏈植入惡意程式碼",
    summary: "美國聯邦調查局（FBI）發布資安警示，警告企業需防範駭客組織TeamPCP發動的軟體供應鏈攻擊。攻擊者透過竄改廣泛使用的開發工具與資安套件，如Trivy、KICS、LiteLLM及Telnyx Python SDK等，將惡意程式碼植入合法軟體套件。這些工具常被部署於企業的CI/CD流程、雲端基礎架構及資安工作流程中，成為攻擊的入口點。攻擊的目標是竊取雲端存取權杖（Token）、SSH金鑰、Kubernetes Secrets等高度敏感的資訊，並取得受害環境的持續存取權限。FBI建議企業應立即採取防禦措施，包括固定使用已驗證的Commit SHA雜湊值、定期輪替CI/CD憑證、啟用多因素驗證（MFA），並強化對CI/CD流程的監控，以有效降低供應鏈攻擊的風險。",
    tags: ["FBI", "TeamPCP", "軟體供應鏈", "CI/CD", "Trivy", "開源安全", "憑證輪替"],
    title_en: "FBI Warns: Hacker Group TeamPCP Massively Tampered with Development Tools, Injecting Malicious Code via Software Supply Chain",
    summary_en: "The U.S. Federal Bureau of Investigation (FBI) issued a cybersecurity alert warning enterprises to guard against a software supply chain attack launched by the hacker group TeamPCP. The attackers tampered with widely used development tools and security packages, such as Trivy, KICS, LiteLLM, and Telnyx Python SDK, injecting malicious code into legitimate software packages. These tools are often deployed in corporate CI/CD pipelines, cloud infrastructure, and security workflows, making them entry points for attacks. The goal of the attack is to steal highly sensitive information such as cloud access tokens, SSH keys, and Kubernetes Secrets, thereby gaining persistent access to the compromised environment. The FBI advises companies to immediately implement defensive measures, including fixing the use of verified Commit SHA hashes, regularly rotating CI/CD credentials, enabling Multi-Factor Authentication (MFA), and strengthening monitoring of CI/CD processes to effectively mitigate the risk of supply chain attacks.",
    tags_en: ["FBI", "TeamPCP", "Software Supply Chain", "CI/CD", "Trivy", "Open Source Security", "Credential Rotation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177075", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-039",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "加密貨幣預測市場 Polymarket 遭供應鏈攻擊，駭客植入惡意指令碼盜取用戶資產",
    summary: "大型加密貨幣預測市場平台 Polymarket 近期確認遭受供應鏈攻擊。駭客透過入侵其第三方供應商，在網站前端植入惡意指令碼，導致用戶資產被盜。區塊鏈資安公司 PeckShield 分析指出，這起事件屬於網路釣魚攻擊，駭客從受影響用戶手中盜取了價值約 300 萬美元的 PUSD 代幣，並將這些資產從 Polygon 轉移至以太坊，兌換成約 1,893 個以太幣（ETH）。圖像化分析平台 Bubblemaps 顯示，受影響用戶數小於 15 人。Polymarket 承諾將全額賠償受影響客戶。本次攻擊的實務影響為用戶資產的直接損失，建議用戶應提高警覺，並留意來自第三方供應商的潛在惡意程式碼。",
    tags: ["Polymarket", "供應鏈攻擊", "加密貨幣", "PUSD", "網路釣魚", "Polygon", "以太坊"],
    title_en: "Cryptocurrency Prediction Market Polymarket Suffers Supply Chain Attack; Hackers Implant Malicious Script to Steal User Assets",
    summary_en: "The large cryptocurrency prediction market platform Polymarket recently confirmed it was subjected to a supply chain attack. Hackers infiltrated a third-party vendor to implant malicious code on the website's frontend, resulting in the theft of user assets. Blockchain security firm PeckShield analyzed that this incident constitutes a phishing attack, where hackers stole approximately $3 million worth of PUSD tokens from affected users and transferred these assets from Polygon to Ethereum, exchanging them for approximately 1,893 ETH. The visualization platform Bubblemaps showed that the number of affected users was less than 15. Polymarket has pledged to fully compensate affected customers. The practical impact of this attack is the direct loss of user assets, and users are advised to heighten their vigilance and monitor for potential malicious code originating from third-party vendors.",
    tags_en: ["Polymarket", "Supply Chain Attack", "Cryptocurrency", "PUSD", "Phishing", "Polygon", "Ethereum"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177064", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-040",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "北韓資安威脅：惡意 npm 套件模仿 Rollup 工具，竊取開發者工作站與 CI/CD 憑證",
    summary: "北韓相關威脅行為者利用一系列惡意 npm 套件，如「rollup-packages-polyfill-core」和「rollup-runtime-polyfill-core」，偽裝成正規的 Rollup 樣式工具，進行供應鏈攻擊。這些惡意套件透過隱藏的安裝時執行程式碼，在開發者工作站和 CI/CD 環境中運行，目標是竊取敏感憑證和資料。攻擊鏈包含多個第二階段的 SVG 實用工具，它們會從外部 JSONKeeper 網址獲取並執行 JavaScript 惡意程式碼。該惡意程式碼會執行環境檢查，成功後會連線至外部伺服器，下載加密的 JavaScript Payload，最終利用 @nut-tree-fork/nut-js 等套件實現遠端存取、螢幕截圖、資料竊取（包括瀏覽器、加密貨幣錢包）和收集開發者相關的配置檔（如 AWS、Azure、SSH 密鑰）。JFrog 指出，由於 Rollup 插件常在本地配置或 CI/CD 環境載入，這些環境極易暴露 API Key、SSH Key 和專案密鑰等資產。此類攻擊模式與過去的北韓 Lazarus 相關活動相似，提醒開發者必須高度警惕 npm 生態系統中的惡意套件。",
    tags: ["npm", "Rollup", "北韓", "供應鏈攻擊", "憑證竊取", "CI/CD", "惡意套件"],
    title_en: "North Korea Cyber Threat: Malicious npm Packages Mimic Rollup Tool to Steal Developer Workstation and CI/CD Credentials",
    summary_en: "North Korea-affiliated threat actors are utilizing a series of malicious npm packages, such as \"rollup-packages-polyfill-core\" and \"rollup-runtime-polyfill-core,\" to conduct supply chain attacks by masquerading as legitimate Rollup-style tools. These malicious packages execute hidden installation-time code on developer workstations and CI/CD environments, aiming to steal sensitive credentials and data. The attack chain includes multiple second-stage SVG utility tools, which fetch and execute malicious JavaScript code from an external JSONKeeper URL. This malicious code performs environment checks and, upon success, connects to an external server to download an encrypted JavaScript payload. Finally, it utilizes packages like @nut-tree-fork/nut-js to achieve remote access, screen capture, data theft (including browser and cryptocurrency wallet data), and collection of developer-related configuration files (such as AWS, Azure, and SSH keys). JFrog points out that because Rollup plugins are often loaded in local configurations or CI/CD environments, these environments are highly susceptible to exposing assets like API Keys, SSH Keys, and project secrets. This attack pattern is similar to past North Korean Lazarus-related activities, reminding developers to remain highly vigilant regarding malicious packages within the npm ecosystem.",
    tags_en: ["npm", "Rollup", "North Korea", "Supply Chain Attack", "Credential Theft", "CI/CD", "Malicious Packages"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/north-korea-linked-npm-packages-mimic.html", lang: "EN" }
    ]
  },
  {
    id: "20260703-041",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 系列預測：外觀設計維持傳統，重點關注 AI 整合與晶片架構的演進",
    summary: "本文分析了預計發布的 Pixel 11 系列手機，指出其在設計上預計將沿用成熟的風格，尺寸和外觀變化不大。規格上，基礎型號預計為 6.3 吋，Pro XL 為 6.8 吋，並將有更高的螢幕最大亮度（Pixel 11 達 2200 nits，Pro 系列達 2450 nits）。在硬體方面，雖然預計採用 TSMC 的 2nm 製程，但晶片組（Tensor）的架構預計為非對稱的 7 核心（1+4+2），且 GPU 性能預計仍落後競爭對手。文章指出，AI 任務對記憶體需求增加，可能導致基礎型號的 RAM 規格調整。此外，Pixel 11 預計恢復 50MP 主鏡頭，這被視為修復了前代基礎型號的痛點。然而，作者對 Tensor 晶片組的原始性能提升抱持懷疑態度，認為其主要賣點仍是相機系統的穩定性。",
    tags: ["Google Pixel 11", "Android", "Tensor 晶片組", "50MP 主鏡頭", "AI 任務", "2nm 製程"],
    title_en: "Pixel 11 Series Predictions: Design Expected to Maintain Tradition, Focus on AI Integration and Chip Architecture Evolution",
    summary_en: "This article analyzes the upcoming Pixel 11 series phones, noting that the design is expected to retain a mature style, with minimal changes in size and appearance. In terms of specifications, the base model is anticipated to be 6.3 inches, and the Pro XL model to be 6.8 inches, featuring higher maximum screen brightness (Pixel 11 reaching 2200 nits, and the Pro series reaching 2450 nits). Regarding hardware, although it is expected to adopt TSMC's 2nm process, the chip architecture (Tensor) is predicted to be an asymmetric 7-core setup (1+4+2), and the GPU performance is expected to lag behind competitors. The article points out that increased memory demands for AI tasks may lead to adjustments in the RAM specifications of the base model. Furthermore, the Pixel 11 is expected to restore a 50MP main camera, which is seen as addressing a pain point of the previous generation's base model. However, the author remains skeptical about significant raw performance improvements in the Tensor chip, suggesting that its main selling point remains the stability of the camera system.",
    tags_en: ["Google Pixel 11", "Android", "Tensor Chip", "50MP Main Camera", "AI Tasks", "2nm Process"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/03/yes-the-pixel-11-will-be-more-of-the-same-for-better-or-worse-video", lang: "EN" }
    ]
  },
  {
    id: "20260703-042",
    trackers: ["os"],
    category: "Android",
    title: "Gemini 在 Android Auto 上持續發言問題：用戶手動操作後仍無法停止語音回饋",
    summary: "本文指出 Gemini 在 Android Auto 上的核心問題是：即使使用者已經透過觸控螢幕完成了互動或選擇了目的地，Gemini 的語音助理仍會持續發言，無法自動停止。例如，當使用 Gemini 啟動導航流程，並在 Google Maps 介面中選擇了目的地後，Gemini 仍會繼續詢問「您想要哪一個？」等問題，即使螢幕選項已消失且路線已確定。作者強調，傳統的 Google Assistant 在 Android Auto 上能透過觸控互動終止語音指令，但 Gemini 缺乏此機制，且此問題自去年 11 月首次推出以來一直存在，但 Google 尚未修復。這類問題嚴重影響了行車時的用戶體驗，因為語音互動的目的是減少分心和減少與螢幕的接觸。作者呼籲 Google 必須修復這個看似簡單但極具困擾的設計缺陷。",
    tags: ["Gemini", "Android Auto", "Google", "語音助理", "UX/UI", "Android 平台"],
    title_en: "Gemini Continues Speaking on Android Auto: Voice Feedback Persists After Manual User Interaction",
    summary_en: "This article highlights a core issue with Gemini on Android Auto: even after the user has completed interaction or selected a destination via the touchscreen, the Gemini voice assistant continues speaking and fails to automatically stop. For example, when using Gemini to initiate a navigation process and selecting a destination within the Google Maps interface, Gemini continues to ask questions like, 'Which one do you want?' even when the screen options have disappeared and the route is confirmed. The author emphasizes that the traditional Google Assistant on Android Auto can terminate voice commands through touch interaction, but Gemini lacks this mechanism. Furthermore, this issue, which first appeared since the launch last November, remains unaddressed by Google. Such issues severely impact the user experience while driving, as the purpose of voice interaction is to reduce distraction and minimize screen contact. The author urges Google to fix this seemingly simple but highly frustrating design flaw.",
    tags_en: ["Gemini", "Android Auto", "Google", "Voice Assistant", "UX/UI", "Android Platform"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/03/gemini-android-auto-problem-keeps-listening", lang: "EN" }
    ]
  },
  {
    id: "20260703-043",
    trackers: ["os"],
    category: "Android",
    title: "Google Wallet 整合 Wear OS 支付紀錄，提升智慧穿戴裝置交易追蹤便利性",
    summary: "Google Wallet 應用程式已升級功能，使用者現在可以在手機上查看透過 Wear OS 智慧手錶進行的非接觸式支付（NFC payments）交易紀錄。過去，Google Wallet 內部的交易歷史紀錄僅顯示手機本身的購買紀錄。此次更新讓用戶能更全面地掌握所有支付行為，詳細頁面會明確標註「Purchase made on watch」，使用戶無需透過穿戴式應用程式查詢。此功能提升了 Google Wallet 的實用性，讓交易追蹤更為便利。雖然此功能已回溯生效，但目前交易歷史紀錄仍受限於 10 筆項目顯示。此更新屬於 Google 平台生態系統的整合優化，旨在提供更完整的用戶支付體驗。",
    tags: ["Google Wallet", "Wear OS", "NFC 支付", "Android 系統", "支付紀錄", "智慧穿戴"],
    title_en: "Google Wallet integrates Wear OS payments, enhancing transaction tracking convenience for smart wearables",
    summary_en: "The Google Wallet application has been upgraded with a new feature allowing users to view transaction records for contactless payments (NFC payments) made via Wear OS smartwatches directly on their phone. Previously, the transaction history within Google Wallet only displayed purchases made with the phone itself. This update enables users to gain a more comprehensive overview of all payment activities. The detailed page will clearly label transactions as \"Purchase made on watch,\" eliminating the need for users to check through the wearable application. This feature significantly enhances the utility of Google Wallet, making transaction tracking more convenient. Although this feature is retroactively effective, the transaction history record is currently limited to displaying 10 items. This update represents an integration optimization within the Google platform ecosystem, aiming to provide a more complete user payment experience.",
    tags_en: ["Google Wallet", "Wear OS", "NFC payments", "Android system", "payment history", "smart wearables"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/03/google-wallet-wear-os-history", lang: "EN" }
    ]
  },
  {
    id: "20260703-044",
    trackers: ["os"],
    category: "Android",
    title: "OxygenOS 與 Realme UI 傳將停用，OnePlus 設備將全面整合至 ColorOS 平台",
    summary: "根據產業報導，OxygenOS 和 Realme UI 預計在未來數月內停用。這項變動是隨著 OnePlus 和 Realme 品牌進行「積極重組」的結果，所有現有的 OnePlus 和 Realme 智慧型手機都將全面遷移至 Oppo 的 ColorOS 平台。由於 ColorOS 和 OxygenOS 本身已高度相似，因此此次停用變動在產業內已是可預期的趨勢。這標誌著 OnePlus 品牌在軟體層面與 Oppo 品牌整合更深，進一步加劇了 OnePlus 品牌獨立性的消退。對於用戶而言，這意味著設備的軟體更新和使用者體驗將統一為 ColorOS，用戶需關注後續的軟體遷移流程與通知機制。",
    tags: ["OxygenOS", "ColorOS", "OnePlus", "Realme", "Oppo", "Android 平台"],
    title_en: "OxygenOS and Realme UI set to be discontinued; OnePlus devices to fully integrate into ColorOS platform",
    summary_en: "According to industry reports, OxygenOS and Realme UI are expected to be discontinued within the coming months. This change is a result of the 'active restructuring' of the OnePlus and Realme brands, meaning all existing OnePlus and Realme smartphones will fully transition to Oppo's ColorOS platform. Since ColorOS and OxygenOS are already highly similar, this discontinuation is a predictable trend within the industry. This marks a deeper software-level integration of the OnePlus brand with the Oppo brand, further accelerating the decline of OnePlus's brand independence. For users, this means that device software updates and user experience will be unified under ColorOS, and users should pay attention to subsequent software migration processes and notification mechanisms.",
    tags_en: ["OxygenOS", "ColorOS", "OnePlus", "Realme", "Oppo", "Android 平台"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/03/report-claims-oxygenos-and-realme-ui-set-to-be-discontinued", lang: "EN" }
    ]
  },
  {
    id: "20260703-045",
    trackers: ["os"],
    category: "Android",
    title: "Google Wallet for Android 在美國推出線上訂單追蹤功能，整合 Gmail 資訊",
    summary: "Google Wallet 為 Android 用戶在美國地區推出了新的線上訂單追蹤功能。此功能旨在讓 Google Wallet 介面更像一個儀表板，用戶可以在主頁面卡片輪播區看到即將到貨的訂單，點擊後可查看詳細購買資訊、圖片，以及從 Gmail 擷取的追蹤資訊。所有訂單歷史記錄和追蹤詳情也可透過「交易」>「訂單」查看。為啟用此功能，用戶需確保在 Gmail 設定中開啟「Google Workspace 智慧功能」的相關選項。目前此功能支援美國大部分主要商家，但對於較小的商家或非美國的訂單，可能無法顯示。此更新屬於功能性擴展，而非安全修補，旨在提升用戶的購物體驗和資訊整合度。",
    tags: ["Google Wallet", "Android", "訂單追蹤", "Gmail", "Google Pay", "智慧功能"],
    title_en: "Google Wallet for Android Launches Online Order Tracking Feature in the US, Integrating Gmail Information",
    summary_en: "Google Wallet has launched a new online order tracking feature for Android users in the United States. This feature aims to make the Google Wallet interface function more like a dashboard, allowing users to view incoming orders in the main card carousel. By clicking on an order, users can view detailed purchase information, images, and tracking details extracted from Gmail. All order history and tracking details can also be viewed under \"Transactions\" > \"Orders.\" To enable this feature, users must ensure that the relevant options for \"Google Workspace Smart Features\" are enabled in their Gmail settings. Currently, this feature supports most major merchants in the US, but may not display details for smaller merchants or non-US orders. This update is a functional expansion, not a security patch, designed to enhance the user's shopping experience and information integration.",
    tags_en: ["Google Wallet", "Android", "Order Tracking", "Gmail", "Google Pay", "Smart Features"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/02/google-wallet-order-tracking", lang: "EN" }
    ]
  },
  {
    id: "20260703-046",
    trackers: ["os", "security"],
    category: "Android",
    title: "ASUS Router App 存在 Android 組件匯出不當漏洞 (CVE-2026-12960)",
    summary: "本漏洞 CVE-2026-12960 屬於 Android 應用程式組件匯出不當 (Improper Export of Android Application Components) 的安全問題，影響範圍為 ASUS Router App。攻擊者可利用此漏洞，透過在同一裝置上安裝的第三方應用程式，發送一個精心構造的 Intent，導致 ASUS Router App 執行開啟指定 URL 的行為。此漏洞的利用路徑為本地（Local），且無需權限（No Privilege），屬於使用者介面觸發型（UI:P）的攻擊向量。建議使用者應參考 ASUS 安全公告，並儘速更新 ASUS Router App 以修補此安全漏洞，以防止未經授權的遠端操作。",
    tags: ["ASUS Router App", "CVE-2026-12960", "Android", "Intent", "組件匯出", "Android 應用程式"],
    title_en: "ASUS Router App has Improper Android Component Export Vulnerability (CVE-2026-12960)",
    summary_en: "This vulnerability, CVE-2026-12960, is an Improper Export of Android Application Components security issue affecting the ASUS Router App. An attacker can exploit this vulnerability by sending a specially crafted Intent from a third-party application installed on the same device, causing the ASUS Router App to execute the action of opening a specified URL. The exploitation path for this vulnerability is local and requires no privilege, making it a UI:P attack vector. Users are advised to refer to the ASUS security announcement and promptly update the ASUS Router App to patch this vulnerability, preventing unauthorized remote operations.",
    tags_en: ["ASUS Router App", "CVE-2026-12960", "Android", "Intent", "Component Export", "Android Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-12960", lang: "EN" }
    ]
  },
  {
    id: "20260703-047",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android版Microsoft Edge曝CVE-2026-58296：透過網路洩露個人私密資訊",
    summary: "本漏洞（CVE-2026-58296）影響的是 Android 平台的 Microsoft Edge 瀏覽器。攻擊者若能利用此漏洞，可以在未經授權的情況下，透過網路將用戶的私人個人資訊洩露給未經授權的行為人。根據 CVSS 3.1 評分，此漏洞的攻擊向量為網路（AV:N），權限要求為無（PR:N），使用者互動要求為遠端（UI:R），影響機密性（C:H）和完整性（I:L），但未提及可用性影響（A:N）。實務上，這代表攻擊者無需本地存取權限，僅需透過網路即可觸發，並可能導致高度機密資料外洩。建議用戶及開發者應密切關注 Microsoft 官方發布的修補程式與安全公告，並確保 Edge 瀏覽器保持更新至最新版本，以降低被利用的風險。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58296", "資訊洩露", "瀏覽器安全", "Android 平台"],
    title_en: "Android Microsoft Edge Exposed to CVE-2026-58296: Network Leakage of Private User Information",
    summary_en: "This vulnerability (CVE-2026-58296) affects the Microsoft Edge browser on the Android platform. If an attacker exploits this vulnerability, they can leak the user's private personal information over the network without authorization. According to the CVSS 3.1 score, the attack vector is Network (AV:N), the required privileges are None (PR:N), the user interaction requirement is Remote (UI:R), and it impacts Confidentiality (C:H) and Integrity (I:L), but does not mention Availability impact (A:N). Practically, this means an attacker does not require local access and only needs to trigger it over the network, potentially leading to the leakage of highly confidential data. Users and developers are advised to closely monitor official Microsoft releases for patches and security announcements, and ensure the Edge browser is updated to the latest version to mitigate the risk of exploitation.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58296", "Information Leakage", "Browser Security", "Android Platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58296", lang: "EN" }
    ]
  },
  {
    id: "20260703-048",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android版Microsoft Edge曝CVE-2026-58297：允許未授權攻擊者竊取個人資訊",
    summary: "本漏洞（CVE-2026-58297）影響Android平台的Microsoft Edge瀏覽器。攻擊者若能利用此漏洞，可以在網路環境中未經授權地揭露使用者私密個人資訊。根據CVSS 3.1評分，此漏洞的攻擊向量為網路（AV:N），攻擊複雜度為低（AC:L），權限要求為無（PR:N），使用者互動要求為遠端（UI:R），範圍為本地（S:U），機密性影響為高（C:H），完整性影響為低（I:L），可用性影響為無（A:N）。由於此漏洞涉及瀏覽器核心功能，建議使用者及開發者應密切關注Microsoft發布的官方安全修補程式，並確保Edge瀏覽器及Android作業系統保持最新版本，以降低被攻擊的風險。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58297", "瀏覽器漏洞", "個人資訊洩露", "Android 安全"],
    title_en: "Android Microsoft Edge Exposed to CVE-2026-58297: Allows Unauthorized Theft of Personal Information",
    summary_en: "This vulnerability (CVE-2026-58297) affects the Microsoft Edge browser on the Android platform. If an attacker exploits this vulnerability, they can unauthorizedly disclose users' private personal information in a network environment. According to the CVSS 3.1 score, the attack vector is Network (AV:N), attack complexity is Low (AC:L), privileges required is None (PR:N), user interaction is Remote (UI:R), scope is Unchanged (S:U), confidentiality impact is High (C:H), integrity impact is Low (I:L), and availability impact is None (A:N). Since this vulnerability involves core browser functionality, users and developers are advised to closely monitor official security patches released by Microsoft and ensure that the Edge browser and Android operating system are kept up to date to mitigate the risk of attack.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58297", "Browser Vulnerability", "Personal Information Leakage", "Android Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58297", lang: "EN" }
    ]
  },
  {
    id: "20260703-049",
    trackers: ["os", "security"],
    category: "Android",
    title: "Microsoft Edge for Android 存在 TOCTOU 競態條件漏洞，允許遠端程式碼執行",
    summary: "本漏洞為 CVE-2026-58299，存在於 Microsoft Edge 瀏覽器在 Android 平台上的實作。該漏洞屬於時間檢查與時間使用（Time-of-check time-of-use, TOCTOU）的競態條件（race condition）類型。攻擊者若能利用此缺陷，可透過網路（Network）進行攻擊，達到執行未經授權的程式碼（Remote Code Execution, RCE）的危害。根據 CVSS 3.1 評分，其攻擊向量為網路（AV:N）、攻擊複雜度為高（AC:H）、權限要求為低（PR:N）、使用者互動要求為遠端（UI:R）、範圍為本地（S:U），且影響機密性、完整性、可用性皆為高（C:H/I:H/A:H）。由於 NVD 頁面尚未提供完整的修補或建議，建議使用者應密切關注 Microsoft 官方的安全公告，並儘快更新至修補了此漏洞的 Edge 瀏覽器版本，以降低被遠端攻擊的風險。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58299", "TOCTOU", "RCE", "Android 瀏覽器"],
    title_en: "Microsoft Edge for Android has TOCTOU race condition vulnerability, allowing Remote Code Execution",
    summary_en: "This vulnerability, CVE-2026-58299, exists in the Microsoft Edge browser implementation on the Android platform. The vulnerability is a Time-of-check time-of-use (TOCTOU) race condition. If an attacker can exploit this flaw, they can perform a network-based attack to achieve Remote Code Execution (RCE). According to the CVSS 3.1 scoring, the attack vector is Network (AV:N), attack complexity is High (AC:H), privileges required is None (PR:N), user interaction is Required (UI:R), and scope is Unchanged (S:U), with high impact on Confidentiality, Integrity, and Availability (C:H/I:H/A:H). Since the NVD page has not yet provided complete patches or recommendations, users are advised to closely monitor official Microsoft security announcements and update to the patched Edge browser version as soon as possible to mitigate the risk of remote attacks.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58299", "TOCTOU", "RCE", "Android browser"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58299", lang: "EN" }
    ]
  },
  {
    id: "20260703-050",
    trackers: ["os", "security"],
    category: "Android",
    title: "Microsoft Edge for Android 存在路徑遍歷漏洞 (CVE-2026-58300)，可能導致本地資訊洩露",
    summary: "本漏洞 CVE-2026-58300 存在於 Microsoft Edge for Android 應用程式中。攻擊者若能利用此路徑遍歷（Absolute path traversal）漏洞，可以在未經授權的情況下，從本地系統讀取敏感資訊。根據 CVSS 3.1 評分，此漏洞的攻擊向量為本地（AV:L），攻擊複雜度為低（AC:L），權限要求為無（PR:N），且無需使用者互動（UI:N）。雖然目前 NVD 尚未提供完整的 CVSS 4.0 評估，但此漏洞的實務影響為資訊洩露，建議使用者及開發者應密切關注 Microsoft 官方發布的修補程式或安全公告，以進行及時的系統更新，避免遭受未經授權的資料讀取攻擊。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58300", "路徑遍歷", "資訊洩露", "Android 應用程式"],
    title_en: "Microsoft Edge for Android has Path Traversal Vulnerability (CVE-2026-58300), Potentially Leading to Local Information Leakage",
    summary_en: "The vulnerability CVE-2026-58300 exists in the Microsoft Edge for Android application. If an attacker can exploit this path traversal vulnerability, they can read sensitive information from the local system without authorization. According to the CVSS 3.1 score, the attack vector is Local (AV:L), the attack complexity is Low (AC:L), the privileges required are None (PR:N), and no user interaction is required (UI:N). Although NVD has not yet provided a complete CVSS 4.0 assessment, the practical impact of this vulnerability is information leakage. Users and developers are advised to closely monitor official Microsoft releases for patches or security advisories to ensure timely system updates and prevent unauthorized data reading attacks.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58300", "Path Traversal", "Information Leakage", "Android Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58300", lang: "EN" }
    ]
  },
  {
    id: "20260703-051",
    trackers: ["os", "security"],
    category: "Android",
    title: "Microsoft Edge for Android 存在路徑穿越漏洞 (CVE-2026-58522)，可能導致本地資訊洩露",
    summary: "本篇報告指出 Microsoft Edge 於 Android 平台存在一個路徑穿越（Relative path traversal）漏洞，編號為 CVE-2026-58522。此漏洞允許未經授權的攻擊者在本地環境中揭露資訊。根據 CVSS 3.1 評分，該漏洞的攻擊向量（AV）為本地（L），攻擊複雜度（AC）為低（L），權限要求（PR）為無（N），使用者互動（UI）為無（N），範圍（S）為本地（U），機密性（C）為高（H），完整性（I）為低（L），可用性（A）為無（N）。雖然 NVD 尚未提供完整的評估資訊，但此類漏洞通常代表應用程式在處理本地路徑時的輸入驗證不足。建議使用者及開發者應密切關注 Microsoft 官方的安全公告，並儘快更新 Edge 瀏覽器至修補版本，以防止資料外洩風險。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58522", "路徑穿越", "資訊洩露", "Android 平台"],
    title_en: "Microsoft Edge for Android has Path Traversal Vulnerability (CVE-2026-58522), Potentially Leading to Local Information Leakage",
    summary_en: "This report points out a Path Traversal vulnerability (Relative path traversal) in Microsoft Edge on the Android platform, identified as CVE-2026-58522. This vulnerability allows unauthorized attackers to disclose information within the local environment. According to the CVSS 3.1 scoring, the vulnerability has a Local Attack Vector (AV) of Local (L), Attack Complexity (AC) of Low (L), Privileges Required (PR) of None (N), User Interaction (UI) of None (N), Scope (S) of Unchanged (U), Confidentiality (C) of High (H), Integrity (I) of Low (L), and Availability (A) of None (N). Although NVD has not yet provided complete assessment information, this type of vulnerability usually indicates insufficient input validation when the application handles local paths. Users and developers are advised to closely monitor official Microsoft security announcements and update the Edge browser to a patched version as soon as possible to prevent data leakage risks.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58522", "Path Traversal", "Information Leakage", "Android Platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58522", lang: "EN" }
    ]
  },
  {
    id: "20260703-052",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android版Microsoft Edge存在越權存取漏洞：可透過網路繞過安全功能",
    summary: "本漏洞（CVE-2026-58523）存在於Microsoft Edge的Android版本，屬於不當的存取控制（Improper access control）。攻擊者若能利用此漏洞，可以在網路環境下繞過Edge內建的安全功能。根據CVSS 3.1評分，此漏洞的攻擊向量為網路（AV:N），攻擊複雜度為低（AC:L），且無需權限（PR:N），但可導致高機密性洩漏（C:H）。建議使用者應留意Microsoft針對此類跨平台瀏覽器的安全更新，並儘快修補以防範未經授權的資料存取。",
    tags: ["Microsoft Edge", "Android", "CVE-2026-58523", "越權存取", "資安漏洞", "瀏覽器安全"],
    title_en: "Android version of Microsoft Edge has privilege escalation vulnerability: Can bypass security features over the network",
    summary_en: "This vulnerability (CVE-2026-58523) exists in the Android version of Microsoft Edge and is classified as Improper access control. If an attacker can exploit this vulnerability, they can bypass Edge's built-in security features in a network environment. According to the CVSS 3.1 score, the vulnerability has a Network attack vector (AV:N), low attack complexity (AC:L), and no privileges required (PR:N), but can lead to high confidentiality leakage (C:H). Users are advised to pay attention to security updates from Microsoft for this type of cross-platform browser and patch promptly to prevent unauthorized data access.",
    tags_en: ["Microsoft Edge", "Android", "CVE-2026-58523", "Privilege Escalation", "Cybersecurity Vulnerability", "Browser Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-58523", lang: "EN" }
    ]
  },
  {
    id: "20260703-053",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI驅動的勒索軟體攻擊：駭客團體JadePuffer利用LLM與CVE-2025-3248進行全自動入侵",
    summary: "資安公司指出，駭客團體JadePuffer進行了一起極具前瞻性的勒索軟體攻擊。此次攻擊行動的特點是完全由AI代理和大型語言模型（LLM）驅動，被威脅情報公司Sysdig定義為「代理型威脅行為者」（Agent Threat Actor，ATA）。攻擊者首先利用可從網際網路存取的Langflow執行個體中的已知漏洞CVE-2025-3248，建立初期入侵管道。隨後，AI代理展開全自動、動態調整的勒索軟體攻擊，其惡意酬載包含自然語言註解，能理解目標環境的自然語言脈絡，並能自行排除問題。報告指出，AI代理在嘗試登入特定系統失敗後，僅用極短時間便能調整並成功登入，顯示出超越人類操作的自動化能力。最終，攻擊目標是破壞受害組織的資料庫並進行勒索。",
    tags: ["LLM", "AI代理", "勒索軟體", "CVE-2025-3248", "JadePuffer", "Agent Threat Actor"],
    title_en: "AI-Driven Ransomware Attacks: Hacker Group JadePuffer Uses LLM and CVE-2025-3248 for Fully Automated Intrusion",
    summary_en: "Cybersecurity firms have pointed out that the hacker group JadePuffer conducted a highly advanced ransomware attack. The distinguishing feature of this attack was that it was entirely driven by AI agents and Large Language Models (LLM), which threat intelligence company Sysdig defined as an \"Agent Threat Actor\" (ATA). The attackers first exploited the known vulnerability CVE-2025-3248 in a publicly accessible Langflow instance to establish an initial foothold. Subsequently, the AI agent deployed a fully automated, dynamically adjusting ransomware attack. Its malicious payload included natural language annotations, allowing it to understand the natural language context of the target environment and self-correct issues. The report noted that after failing to log into a specific system, the AI agent was able to adjust and successfully log in in a very short time, demonstrating automation capabilities that surpass human operation. The ultimate goal of the attack was to corrupt the victim organization's database and execute a ransomware demand.",
    tags_en: ["LLM", "AI Agent", "Ransomware", "CVE-2025-3248", "JadePuffer", "Agent Threat Actor"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177055", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-054",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI輔助開發加速軟體變更，資安報告警告傳統滲透測試難以掌握生產環境即時風險",
    summary: "應用程式安全平臺業者Aikido Security發布《State of AI in Pentesting 2026》報告，指出隨著AI輔助開發加速企業軟體變更與發布節奏，傳統固定週期的滲透測試已難以完整反映生產環境的最新風險。調查顯示，高比例的雲端原生組織（76%）曾因資安疑慮限制或撤回AI驅動的行為。此外，由於軟體交付節奏加快，許多組織（76%）每週至少部署一次重大變更，但僅21%的組織能每次發布都執行安全驗證。報告強調，傳統滲透測試不僅受限於時間和應用程式脈絡，且容易遺漏商業邏輯缺陷或多步驟攻擊路徑。資安專業人員更期待的是可頻繁執行、隨需啟動的測試，以及可重現的系統證據，以應對現代快速變動的軟體交付模式。",
    tags: ["AI輔助開發", "滲透測試", "軟體交付", "雲端原生", "資安風險", "Aikido Security"],
    title_en: "AI-Assisted Development Accelerates Software Changes; Security Report Warns Traditional Penetration Testing Struggles to Capture Real-Time Production Risks",
    summary_en: "Application security platform vendor Aikido Security released the 'State of AI in Pentesting 2026' report, pointing out that as AI-assisted development accelerates corporate software change and release cycles, traditional fixed-cycle penetration testing can no longer fully reflect the latest risks in the production environment. The survey found that a high proportion of cloud-native organizations (76%) have either restricted or withdrawn AI-driven behavior due to security concerns. Furthermore, due to the accelerating software delivery pace, many organizations (76%) deploy major changes at least once a week, yet only 21% of organizations perform security validation with every release. The report emphasizes that traditional penetration testing is limited not only by time and application context but also tends to overlook business logic flaws or multi-step attack paths. Security professionals are increasingly expecting testing that can be executed frequently, on-demand, and provides reproducible system evidence to cope with modern, rapidly changing software delivery models.",
    tags_en: ["AI-Assisted Development", "Penetration Testing", "Software Delivery", "Cloud-Native", "Security Risk", "Aikido Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177054", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260703-055",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Red Hat OpenShift 4.22 推出 BackendTLSPolicy，強化 Gateway API 後端流量的端到端加密安全",
    summary: "本文介紹 Red Hat OpenShift 4.22 版本新增的 BackendTLSPolicy Kubernetes 資源，旨在為使用 Gateway API 的用戶提供更完善的傳輸層安全（TLS）加密功能。Gateway API 是下一代網路入口解決方案，用於取代傳統的 Kubernetes ingress。BackendTLSPolicy 允許用戶在 Gateway API 中指定從閘道（gateway）到後端 Pod 的額外 TLS 加密，實現與 OpenShift route 既有「重新加密終止」（re-encrypt termination）功能相同的安全等級。傳統的 TLS 加密路徑包含客戶端到閘道、閘道到後端 Pod 等多個終止點。BackendTLSPolicy 專門處理「後端終止」（Backend termination）的加密，確保了從客戶端到後端 Pod 的端到端加密。該機制支持使用主機名稱（SNI）或主體替代名稱（SANs）進行 TLS 驗證，並可利用預定義的 CA 憑證或後端 Pod 提供的憑證進行驗證，有助於企業用戶在遷移至 Gateway API 時，不犧牲現有的高安全標準。",
    tags: ["Red Hat OpenShift", "Gateway API", "BackendTLSPolicy", "TLS 加密", "Kubernetes", "網路入口"],
    title_en: "Red Hat OpenShift 4.22 introduces BackendTLSPolicy to enhance end-to-end encryption security for Gateway API backend traffic",
    summary_en: "This article introduces the new BackendTLSPolicy Kubernetes resource in Red Hat OpenShift 4.22, designed to provide more comprehensive Transport Layer Security (TLS) encryption capabilities for users utilizing the Gateway API. The Gateway API is the next-generation network ingress solution, intended to replace traditional Kubernetes ingress. BackendTLSPolicy allows users to specify additional TLS encryption from the gateway to the backend Pod within the Gateway API, achieving the same level of security as OpenShift's existing 're-encrypt termination' functionality. The traditional TLS encryption path includes multiple termination points, such as client-to-gateway and gateway-to-backend Pod. BackendTLSPolicy specifically handles 'backend termination' encryption, ensuring end-to-end encryption from the client to the backend Pod. This mechanism supports TLS validation using Subject Name Indication (SNI) or Subject Alternative Names (SANs), and can utilize predefined CA certificates or certificates provided by the backend Pod, helping enterprise users maintain existing high security standards when migrating to the Gateway API.",
    tags_en: ["Red Hat OpenShift", "Gateway API", "BackendTLSPolicy", "TLS Encryption", "Kubernetes", "Ingress"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/backendtlspolicy-expands-gateway-api-transport-security", lang: "EN" }
    ]
  },
  {
    id: "20260703-056",
    trackers: ["os"],
    category: "重點關注",
    title: "探討 2026 年實體 QWERTY 鍵盤手機市場：Unihertz Titan Elite 2 與 Clicks Power Keyboard 評測",
    summary: "本文探討了在 2026 年智能手機市場中，實體 QWERTY 鍵盤手機的復興趨勢。文章評測了兩款產品：Unihertz Titan Elite 2 是一款專用 QWERTY Android 手機，外型緊湊，但其 Android 16 的軟體調校被認為略顯粗糙。另一款是 Clicks Power Keyboard，這是一個可透過藍牙連接、具備內建電池和 Qi2 充電功能的 BlackBerry 風格配件。作者認為 Power Keyboard 是一個聰明的外部配件，但整體外型仍顯笨重。雖然這類設備能滿足懷舊需求，但作者總結認為，在數位鍵盤提供更優化佈局和更快速的符號/表情符號存取後，實體鍵盤的優勢已難以說服，建議用戶需權衡其便攜性與使用體驗。",
    tags: ["Unihertz", "Clicks", "Power Keyboard", "QWERTY", "Android 16", "行動裝置", "硬體配件"],
    title_en: "Exploring the 2026 Physical QWERTY Keyboard Smartphone Market: Reviewing the Unihertz Titan Elite 2 and Clicks Power Keyboard",
    summary_en: "This article explores the revival trend of physical QWERTY keyboard smartphones in the 2026 smart device market. It reviews two products: the Unihertz Titan Elite 2, a dedicated QWERTY Android phone with a compact design, but whose Android 16 software tuning is considered somewhat rough. The other is the Clicks Power Keyboard, a BlackBerry-style accessory that connects via Bluetooth, features a built-in battery, and supports Qi2 charging. The author considers the Power Keyboard a clever external accessory, but notes that its overall form factor remains bulky. While such devices can satisfy nostalgic demands, the author concludes that, given that digital keyboards offer more optimized layouts and faster access to symbols/emojis, the advantages of physical keyboards are difficult to argue. It advises users to weigh portability against the overall user experience.",
    tags_en: ["Unihertz", "Clicks", "Power Keyboard", "QWERTY", "Android 16", "Mobile Device", "Hardware Accessory"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/03/android-physical-qwerty-phones-clicks-power-keyboard-unihertz-titan-2-elite", lang: "EN" }
    ]
  },
  {
    id: "20260703-057",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple TV 獨家串流《Silo》第三季：揭開地下避難所的起源與謎團",
    summary: "這篇報導介紹了科幻影集《Silo》的最新消息。該劇集基於 Hugh Howey 的書籍系列，講述人類生活在一個巨大的地下掩體中，但其起源至今仍是謎團。第三季將在 Apple TV 上獨家串流播出，採用分開的時間線敘事結構。在當前時間線中，主角 Juliette（由 Rebecca Ferguson 飾演）正在努力應對失憶症；而在過去的時間線回憶中，則將揭示建造這些地下掩體（silos）的相關人物、方式和根本原因。本內容屬於娛樂新聞，無技術漏洞或資安風險，僅為內容預告。",
    tags: ["Apple TV", "Silo", "科幻影集", "串流媒體", "娛樂新聞"],
    title_en: "Apple TV Exclusively Streams Season 3 of 'Silo': Unveiling the Origin and Mystery of the Underground Shelter",
    summary_en: "This report introduces the latest news about the sci-fi series 'Silo.' The show is based on Hugh Howey's book series, which narrates human life within a massive underground bunker, the origin of which remains a mystery. Season 3 will stream exclusively on Apple TV, utilizing a fragmented timeline narrative structure. In the current timeline, the protagonist Juliette (played by Rebecca Ferguson) is struggling to cope with amnesia; while the past timeline memories will reveal the individuals, methods, and fundamental reasons for the construction of these underground shelters (silos). This content is entertainment news, containing no technical vulnerabilities or cybersecurity risks, and serves only as a content preview.",
    tags_en: ["Apple TV", "Silo", "Sci-Fi Series", "Streaming Media", "Entertainment News"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/02/apple-tv-silo-season-three", lang: "EN" }
    ]
  },
  {
    id: "20260703-058",
    trackers: ["os"],
    category: "重點關注",
    title: "無",
    summary: "本文為航太產業報告，內容涵蓋 NASA 的 Artemis II 任務進度、羅馬太空望遠鏡的計畫，以及商業衛星服務任務。其中提到 Katalyst Space Technologies 成功發射 Link 衛星，該衛星搭乘於 Northrop Grumman Pegasus XL 火箭，目標是提升 NASA Swift 天文衛星的軌道高度，以延長其任務壽命。此任務成功克服了多日的天氣和技術挑戰。文章指出，Pegasus XL 火箭已逐漸被更經濟的商業發射服務（如 SpaceX 和 Rocket Lab）取代，這反映了小型衛星發射市場的趨勢變化。",
    tags: ["Katalyst Space Technologies", "Northrop Grumman", "Pegasus XL", "NASA", "Swift", "Link 衛星", "太空產業"],
    title_en: "None",
    summary_en: "This article is an aerospace industry report covering the progress of NASA's Artemis II mission, the plan for the Roman Space Telescope, and commercial satellite service missions. It mentions that Katalyst Space Technologies successfully launched the Link satellite, which was carried by a Northrop Grumman Pegasus XL rocket. The goal of this launch was to raise the orbital altitude of the NASA Swift astronomical satellite to extend its mission life. This mission successfully overcame multiple days of weather and technical challenges. The article points out that the Pegasus XL rocket is gradually being replaced by more economical commercial launch services (such as SpaceX and Rocket Lab), reflecting a trend change in the small satellite launch market.",
    tags_en: ["Katalyst Space Technologies", "Northrop Grumman", "Pegasus XL", "NASA", "Swift", "Link satellite", "Aerospace Industry"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/07/rocket-report-indian-startup-nears-first-launch-spacexs-millenary-milestone", lang: "EN" }
    ]
  },
  {
    id: "20260703-059",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安資訊：回顧《Wing Commander IV》與 90 年代遊戲產業的發展趨勢",
    summary: "本文為一篇回顧性質的文章，主要探討 1990 年代中後期（特別是 1996-1997 年）的文化背景，並以遊戲《Wing Commander IV》作為代表。文章描述了當時遊戲產業的發展預期，即遊戲將與好萊塢電影和矽谷科技的元素融合，創造出高度互動的娛樂體驗。作者並未提及任何技術漏洞、安全風險或具體的資安事件。因此，本摘要無法提供任何修補建議或技術細節。",
    tags: ["Wing Commander IV", "遊戲產業", "回顧", "90年代", "文化趨勢"],
    title_en: "Non-Security Information: Reviewing Wing Commander IV and Development Trends in the 1990s Gaming Industry",
    summary_en: "This article is a retrospective piece that primarily explores the cultural context of the mid-to-late 1990s (specifically 1996-1997), using the game Wing Commander IV as a representative example. The article describes the development expectations of the gaming industry at the time, namely the fusion of games with elements from Hollywood cinema and Silicon Valley technology to create highly interactive entertainment experiences. The author does not mention any technical vulnerabilities, security risks, or specific cybersecurity incidents. Therefore, this summary cannot provide any patch recommendations or technical details.",
    tags_en: ["Wing Commander IV", "Gaming Industry", "Review", "90s", "Cultural Trends"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gaming/2026/07/wing-commander-iv-and-the-fmv-future-that-never-quite-was", lang: "EN" }
    ]
  },
  {
    id: "20260703-060",
    trackers: ["os"],
    category: "重點關注",
    title: "Vulkan 1.4.356 發布：新增支援 OCP Microscaling MX 格式，加速機器學習運算",
    summary: "Vulkan 繪圖 API 發布了版本 1.4.356，主要亮點是新增了 VK_EXT_shader_ocp_microscaling_types 擴充功能。此擴充功能旨在支援 Open Compute Project (OCP) 的 Microscaling MX 資料類型，包括 MXFP4、MXFP6、MXFP8 和 MXINT8 等。這些新資料類型對於提升 AI 訓練和推論的效率至關重要，能幫助提高運算吞吐量並降低記憶體頻寬需求。雖然該擴充功能支援這些浮點類型，但它本身並未直接提供對微縮化張量或微縮化資料操作的支援。此功能是業界需求驅動的，並獲得 NVIDIA、Samsung、Imagination 和 Arm 等多家公司貢獻。開發者應關注此擴充功能，以利用這些新資料類型優化機器學習工作負載。",
    tags: ["Vulkan", "VK_EXT_shader_ocp_microscaling_types", "Open Compute Project", "OCP", "機器學習", "AI", "GPU"],
    title_en: "Vulkan 1.4.356 Released: Adds Support for OCP Microscaling MX Format to Accelerate Machine Learning Computing",
    summary_en: "The Vulkan graphics API has released version 1.4.356, with the main highlight being the addition of the VK_EXT_shader_ocp_microscaling_types extension. This extension is designed to support the Open Compute Project (OCP) Microscaling MX data types, including MXFP4, MXFP6, MXFP8, and MXINT8. These new data types are crucial for improving the efficiency of AI training and inference, helping to boost computational throughput and reduce memory bandwidth requirements. Although the extension supports these floating-point types, it does not directly provide support for microscaled tensor or microscaled data operations. This feature is industry-driven and contributed by multiple companies, including NVIDIA, Samsung, Imagination, and Arm. Developers should pay attention to this extension to optimize machine learning workloads using these new data types.",
    tags_en: ["Vulkan", "VK_EXT_shader_ocp_microscaling_types", "Open Compute Project", "OCP", "Machine Learning", "AI", "GPU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Vulkan-1.4.356-Released", lang: "EN" }
    ]
  },
  {
    id: "20260703-061",
    trackers: ["os"],
    category: "重點關注",
    title: "Coreboot與AMD openSIL在MSI Ryzen主機板上成功支援Windows 11，開拓開源韌體生態",
    summary: "專案團隊3mdeb成功將Coreboot與AMD openSIL的韌體堆疊，從原先的Gigabyte EPYC主機板，移植至現代AMD Ryzen AM5桌面平台，具體以MSI PRO B850-P為例。此舉讓MSI PRO B850-P WIFI成為Linux和開源愛好者的獨特選擇。除了主要的Linux支援進展外，團隊也針對Windows 11進行了測試，並成功讓Windows 11能在此開源韌體環境下順利運行，無需額外修復。進展包括修復了AMDGPU圖形驅動錯誤、整合了AMD PSP韌體TPM支援、改善了SMBIOS記憶體資訊報告，並優化了Windows的電源管理行為。這項成果極大地提升了Coreboot+openSIL的實用性，使其能更廣泛地應用於主流消費級硬體。",
    tags: ["Coreboot", "AMD openSIL", "MSI PRO B850-P", "Windows 11", "AMD Ryzen", "韌體"],
    title_en: "Coreboot and AMD openSIL Successfully Support Windows 11 on MSI Ryzen Motherboards, Pioneering Open-Source Firmware Ecosystem",
    summary_en: "The project team 3mdeb successfully ported the Coreboot and AMD openSIL firmware stack from the original Gigabyte EPYC motherboard to the modern AMD Ryzen AM5 desktop platform, specifically using the MSI PRO B850-P as an example. This makes the MSI PRO B850-P WIFI a unique choice for Linux and open-source enthusiasts. In addition to the primary Linux support advancements, the team also tested for Windows 11 and successfully enabled Windows 11 to run smoothly in this open-source firmware environment without requiring additional fixes. Progress included fixing AMDGPU graphics driver errors, integrating AMD PSP firmware TPM support, improving SMBIOS memory information reporting, and optimizing Windows power management behavior. This achievement significantly enhances the practicality of Coreboot+openSIL, allowing it to be applied more broadly to mainstream consumer hardware.",
    tags_en: ["Coreboot", "AMD openSIL", "MSI PRO B850-P", "Windows 11", "AMD Ryzen", "Firmware"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Coreboot-openSIL-MSI-Windows", lang: "EN" }
    ]
  },
  {
    id: "20260703-062",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS 專案實現首個 Windows NT6 系統呼叫，邁向 Vista 相容性里程碑",
    summary: "ReactOS 是一個旨在成為「開源 Windows」的專案，目標是實現與 Windows 驅動程式和軟體二進位相容性。目前該專案的發展重點從最初的 Windows NT 5.2（XP/Server 2003）已轉向支援 Windows NT 6.0（Vista 及後續版本）的相容性。ReactOS 近期在專案樹中合併了新的 NT6 處理器功能，並成功實作了該開源專案的第一個 NT6 系統呼叫。具體實作的函數為 `NtGetCurrentProcessorNumberEx`，用於回傳呼叫者正在運行的邏輯處理器編號。雖然此功能本身相對基礎，但它標誌著 ReactOS 在追蹤 Windows NT 6.0 架構的發展上又邁進了一大步。這項進展顯示了 ReactOS 專案持續在開源作業系統領域，努力達成與主流 Windows 系統的深度相容性。",
    tags: ["ReactOS", "Windows NT6", "系統呼叫", "開源作業系統", "Windows Vista", "相容性"],
    title_en: "ReactOS Project Implements First Windows NT6 System Call, Advancing Towards Vista Compatibility Milestone",
    summary_en: "ReactOS is a project aiming to become an \"open-source Windows,\" with the goal of achieving binary compatibility with Windows drivers and software. The project's development focus has shifted from the initial Windows NT 5.2 (XP/Server 2003) to supporting compatibility with Windows NT 6.0 (Vista and subsequent versions). ReactOS recently merged new NT6 processor functionality into its project tree and successfully implemented the project's first NT6 system call. The specific function implemented is `NtGetCurrentProcessorNumberEx`, which returns the logical processor number of the calling process. Although this function itself is relatively basic, it marks a significant step for ReactOS in tracking the development of the Windows NT 6.0 architecture. This progress demonstrates ReactOS's continued efforts to achieve deep compatibility with mainstream Windows systems within the open-source operating system domain.",
    tags_en: ["ReactOS", "Windows NT6", "System Call", "Open-Source OS", "Windows Vista", "Compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ReactOS-First-NT6-Syscall", lang: "EN" }
    ]
  },
  {
    id: "20260703-063",
    trackers: ["os"],
    category: "重點關注",
    title: "Psion創始人David Potter逝世：回顧掌舵早期個人電腦與手持設備的技術歷程",
    summary: "本文悼念南非裔科技先驅David Potter，他是Psion計算機的創始人。Psion在1980年代至2000年代間，是英國科技產業的關鍵參與者。Potter最初關注的是早期家用電腦市場，如Sinclair ZX Spectrum，並為其提供軟體套件。然而，他很快意識到家用電腦市場缺乏長期實用性，於是將資源轉向了應用軟體和一個全新的概念：手持計算機。這促成了Psion Organizer系列等開創性的產品。Psion的GUI作業系統EPOC16，後來發展為用於第一波智慧型手機的Symbian OS，並基於32位Arm架構開發。儘管Psion最終在2004年將Symbian業務出售給Nokia，但Potter曾預測Linux是一個不斷增長的威脅，預測準確。這篇文章回顧了其從早期微處理器到現代行動通訊的技術演變，強調了其在計算機產業轉型的先見之明。",
    tags: ["Psion", "David Potter", "Symbian", "EPOC", "行動計算機", "技術先見性"],
    title_en: "Psion Founder David Potter Passes Away: A Retrospective on the Technical Journey of Early Personal Computers and Handheld Devices",
    summary_en: "This article pays tribute to David Potter, a South African technology pioneer and the founder of Psion Computers. During the 1980s through the 2000s, Psion was a key player in the British technology industry. Potter initially focused on the early home computer market, such as the Sinclair ZX Spectrum, providing software packages for it. However, he soon realized that the home computer market lacked long-term practicality, redirecting resources toward application software and an entirely new concept: handheld computers. This led to pioneering products like the Psion Organizer series. Psion's GUI operating system, EPOC16, later evolved into Symbian OS, which was developed based on the 32-bit Arm architecture. Although Psion eventually sold its Symbian business to Nokia in 2004, Potter had predicted that Linux would be a growing threat, a prediction that proved accurate. This article reviews his technical evolution from early microprocessors to modern mobile communications, highlighting his foresight in the computer industry's transition.",
    tags_en: ["Psion", "David Potter", "Symbian", "EPOC", "Handheld Computing", "Technical Foresight"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/07/03/david-potter-the-man-who-put-psion-in-the-palm-of-your-hand-logs-off-at-82/5266624", lang: "EN" }
    ]
  },
  {
    id: "20260703-064",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Adapthealth遭駭客入侵：病患健康資料與密碼遭竊，資安警示加劇",
    summary: "醫療服務供應商Adapthealth近期遭遇資安事件，其系統遭到駭客入侵，導致病患的個人健康資料和帳號密碼遭到竊取。本次事件揭示了醫療產業數據安全的高度脆弱性。雖然原文未提供具體的漏洞細節或CVSS分數，但事件的實務影響極為嚴重，直接威脅到病患的隱私權和個人健康資訊的安全性。建議醫療機構應立即審視其數據儲存與傳輸的加密機制，並強化身份驗證（如實施多因素驗證 MFA），以防止未經授權的存取。此外，應定期進行滲透測試和安全稽核，建立完善的事件響應機制，以應對未來可能發生的數據洩露事件。",
    tags: ["Adapthealth", "數據洩露", "醫療資訊安全", "資安事件", "隱私權"],
    title_en: "Adapthealth Hacked: Patient Health Data and Passwords Stolen, Heightening Cybersecurity Alerts",
    summary_en: "Medical service provider Adapthealth recently suffered a cybersecurity incident when its systems were breached by hackers, leading to the theft of patients' personal health data and account passwords. This incident highlights the high vulnerability of data security within the healthcare industry. Although the original text does not provide specific vulnerability details or CVSS scores, the practical impact of the event is extremely severe, directly threatening patient privacy and the security of personal health information. It is recommended that medical institutions immediately review their data storage and transmission encryption mechanisms, and strengthen identity verification (such as implementing Multi-Factor Authentication, MFA), to prevent unauthorized access. Furthermore, they should conduct regular penetration testing and security audits, and establish a robust incident response mechanism to address potential future data leakage events.",
    tags_en: ["Adapthealth", "Data Leakage", "Healthcare Information Security", "Cybersecurity Incident", "Privacy Rights"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/03/adapthealth-crooks-stole-our-passwords-patient-health-data/5266512", lang: "EN" }
    ]
  },
  {
    id: "20260703-065",
    trackers: ["os"],
    category: "重點關注",
    title: "3D 列印核能反應爐模組：新創公司目標資料中心，引發能源與基礎設施安全疑慮",
    summary: "本文報導了一家新創公司正在開發使用 3D 列印技術製造核能反應爐模組的技術。雖然文章未提及具體的 CVE 或技術漏洞，但其核心內容指向能源基礎設施的現代化與潛在風險。這類技術的應用，特別是將核能模組與資料中心結合，涉及極高的安全標準和嚴密的物理安全控制。從資安角度來看，這類高度自動化、高度集成的能源與計算設施，其控制系統（SCADA/ICS）的網路安全、供應鏈安全，以及物理層的入侵防禦，都成為關鍵的關注點。實務上，任何涉及關鍵基礎設施的技術部署，都必須納入從設計階段（Security by Design）的資安評估，確保其韌性（Resilience）和抗攻擊能力。建議相關產業應關注工業控制系統（ICS）的網路隔離、設備韌體更新，以及跨層級的資安管理。",
    tags: ["核能反應爐", "3D 列印", "資料中心", "基礎設施安全", "ICS/SCADA", "供應鏈安全"],
    title_en: "3D Printed Nuclear Reactor Modules: Startup Targets Data Centers, Raising Energy and Infrastructure Security Concerns",
    summary_en: "This article reports on a startup developing technology to manufacture nuclear reactor modules using 3D printing. Although the article does not mention specific CVEs or technical vulnerabilities, its core content points to the modernization of energy infrastructure and potential risks. The application of such technology, especially combining nuclear modules with data centers, involves extremely high security standards and stringent physical security controls. From a cybersecurity perspective, the network security, supply chain security, and physical layer intrusion defense of the control systems (SCADA/ICS) in these highly automated, highly integrated energy and computing facilities are key areas of concern. In practice, any technological deployment involving critical infrastructure must incorporate cybersecurity assessments from the design phase (Security by Design) to ensure its resilience and anti-attack capabilities. It is recommended that relevant industries pay attention to network isolation for Industrial Control Systems (ICS), equipment firmware updates, and cross-layer cybersecurity management.",
    tags_en: ["Nuclear Reactor", "3D Printing", "Data Center", "Infrastructure Security", "ICS/SCADA", "Supply Chain Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/systems/2026/07/03/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module/5266480", lang: "EN" }
    ]
  },
  {
    id: "20260703-066",
    trackers: ["os"],
    category: "重點關注",
    title: "NetNut 網路設備被破解：Google 與 FBI 鎖定價值兩百萬台設備的殭屍網路",
    summary: "本報導指出，一個名為 NetNut 的網路設備被破解，成為一個大型的殭屍網路（botnet）。攻擊者利用此漏洞控制這些設備，並將其用於惡意活動。Google 和 FBI 等機構已針對這個由 NetNut 設備組成的殭屍網路展開調查與行動。雖然文章未提供具體的 CVE 編號、CVSS 分數或受影響的產品版本，但其實務影響極為重大，顯示了網路邊緣設備（IoT/嵌入式設備）的安全風險極高。建議設備製造商和使用者應立即檢查其設備是否有可疑的網路活動，並確保所有韌體和固件都更新到最新的安全版本，以防止被惡意接管。",
    tags: ["NetNut", "殭屍網路", "IoT 安全", "Google", "FBI", "嵌入式設備"],
    title_en: "NetNut Network Devices Hacked: Google and FBI Target Botnet of Worth Two Million Devices",
    summary_en: "This report indicates that a network device named NetNut has been compromised, turning it into a large botnet. Attackers are utilizing this vulnerability to control these devices and deploy them for malicious activities. Organizations such as Google and the FBI have launched investigations and actions targeting this botnet composed of NetNut devices. Although the article does not provide specific CVE IDs, CVSS scores, or affected product versions, the practical impact is extremely significant, highlighting the high security risk of network edge devices (IoT/embedded devices). It is recommended that device manufacturers and users immediately check their equipment for suspicious network activity and ensure all firmware and solid-state storage are updated to the latest secure versions to prevent malicious takeover.",
    tags_en: ["NetNut", "Botnet", "IoT Security", "Google", "FBI", "Embedded Devices"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/07/03/netnut-cracked-as-google-and-fbi-target-2-million-device-botnet/5266414", lang: "EN" }
    ]
  },
  {
    id: "20260703-067",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "駭客入侵個人電腦，用戶指控駭客行為如同「一般失敗」，事件揭露個人資安防護盲點",
    summary: "本文報導了一起個人資安事件，一位用戶向媒體描述了自己被駭客入侵電腦的經歷。雖然文章未提供具體的受影響產品、CVE 編號或技術細節，但事件本質揭示了個人電腦在面對惡意入侵時的脆弱性。從用戶的描述來看，攻擊可能涉及未經授權的遠端存取或惡意軟體植入，造成個人資料或系統的洩漏。實務影響提醒用戶，即使是看似簡單的個人設備，也可能成為攻擊的目標。修補建議方面，用戶應提高警覺性，定期更新作業系統和應用程式，並考慮使用多層次的資安防護措施，例如防火牆和防毒軟體，以最大程度地降低被入侵的風險。",
    tags: ["個人資安", "駭客攻擊", "系統入侵", "用戶警覺", "資安事件"],
    title_en: "Hacker Intrusion of Personal Computer: User Claims Hacker Behavior is Like 'General Failure,' Incident Reveals Personal Security Blind Spots",
    summary_en: "This article reports on a personal security incident where a user described their experience of being hacked on a computer. Although the article does not provide specific affected products, CVE IDs, or technical details, the incident fundamentally reveals the vulnerability of personal computers when facing malicious intrusion. Based on the user's description, the attack may involve unauthorized remote access or malware implantation, leading to the leakage of personal data or system information. The practical implication reminds users that even seemingly simple personal devices can become targets for attacks. Regarding remediation suggestions, users should increase their vigilance, regularly update operating systems and applications, and consider using multi-layered security measures, such as firewalls and antivirus software, to minimize the risk of being compromised.",
    tags_en: ["Personal Security", "Hacker Attack", "System Intrusion", "User Awareness", "Security Incident"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/07/03/user-swore-hacker-called-general-failure-had-invaded-his-pc/5265548", lang: "EN" }
    ]
  },
  {
    id: "20260703-068",
    trackers: ["os"],
    category: "重點關注",
    title: "GitHub發起CD-ROM服務，讓開發者可將公開程式碼燒錄成實體光碟，引發業界討論",
    summary: "程式碼託管平台 GitHub（隸屬於微軟）宣布推出一個臨時性的服務，允許開發者將其公開的 GitHub 儲存庫（public repo）燒錄成 CD-ROM。此舉是在 PlayStation 宣布逐步淘汰實體遊戲光碟的背景下發起的，被許多人視為一場針對 Sony 的「玩笑」。該服務透過 Microsoft Forms 收集用戶的 GitHub 使用者名稱、公開儲存庫 URL、聯絡資訊及收件地址。該活動為期四天（2026 年 7 月 2 日至 7 月 6 日），且僅限於前 1,000 個符合資格的提交者，每人限領一張。雖然 GitHub 聲稱只使用資料進行出貨，並在發貨後刪除，但此舉引發了開發者社群的爭議。部分人認為這是懷舊的幽默，但也有人批評 GitHub 在自身系統穩定性方面（如 2025 年 5 月至 2026 年 4 月間記錄了 257 起事件）存在問題，認為此舉分散了對其核心問題的注意力。",
    tags: ["GitHub", "Microsoft", "CD-ROM", "程式碼託管", "PlayStation", "供應鏈"],
    title_en: "GitHub Launches CD-ROM Service, Allowing Developers to Burn Public Code into Physical Discs, Sparking Industry Discussion",
    summary_en: "Code hosting platform GitHub (a subsidiary of Microsoft) announced a temporary service allowing developers to burn their public GitHub repositories into CD-ROMs. This move was made against the backdrop of PlayStation announcing the gradual phase-out of physical game discs and was viewed by many as a 'joke' aimed at Sony. The service collects user GitHub usernames, public repository URLs, contact information, and shipping addresses via Microsoft Forms. The activity runs for four days (July 2 to July 6, 2026) and is limited to the first 1,000 eligible submitters, with one disc per person. Although GitHub claims to only use the data for shipping and will delete it afterward, the move has sparked controversy within the developer community. Some view it as nostalgic humor, while others criticize GitHub for its own system stability issues (which recorded 257 incidents between May 2025 and April 2026), arguing that this initiative distracts from its core problems.",
    tags_en: ["GitHub", "Microsoft", "CD-ROM", "Code Hosting", "PlayStation", "Supply Chain"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/03/microsoft-github-is-burning-free-cds-of-your-public-code-to-troll-playstation-and-xbox-should-take-notes", lang: "EN" }
    ]
  }
];
