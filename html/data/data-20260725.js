// data-20260725.js — 2026-07-25
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-25"] = [
  {
    id: "20260725-001",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 專案考慮規範大型語言模型（LLM）在建構發行版的使用",
    summary: "Debian 專案目前正在討論是否應規範大型語言模型（LLM）在建構其發行版過程中的使用。討論提出了三種主要替代方案：完全禁止使用 LLM、在「實務可行」的範圍內拒絕使用 LLM，或是明確允許使用 LLM，但需制定一套嚴格的條件。目前這項討論才剛開始，尚未確定投票時間。此議題對於整個 Linux 發行版的開發流程和內容生成有潛在影響，資安與開發人員應關注其後續的決議，以了解 LLM 如何影響核心元件的審核與整合。",
    tags: ["Debian", "大型語言模型", "LLM", "Linux 發行版", "軟體供應鏈", "開源專案"],
    title_en: "Debian Project Considers Regulating the Use of Large Language Models (LLMs) in Distribution Builds",
    summary_en: "The Debian Project is currently discussing whether it should regulate the use of Large Language Models (LLMs) during the process of building its distributions. The discussion has proposed three main alternatives: a complete ban on using LLMs, refusing their use within a scope of 'practical feasibility,' or explicitly allowing their use while establishing a set of strict conditions. This discussion is in its early stages, and a voting time has not yet been set. This issue has potential implications for the entire Linux distribution development process and content generation. Cybersecurity professionals and developers should monitor subsequent decisions to understand how LLMs will impact the vetting and integration of core components.",
    tags_en: ["Debian", "Large Language Models", "LLM", "Linux Distribution", "Software Supply Chain", "Open Source Project"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1085314", lang: "EN" }
    ]
  },
  {
    id: "20260725-002",
    trackers: ["os"],
    category: "Linux",
    title: "多主流 Linux 發行版發布安全更新：涵蓋核心、應用程式與服務層面修補",
    summary: "本文彙整了 AlmaLinux、Debian、Fedora、Mageia、Oracle、SUSE 等多個主流 Linux 發行版發布的安全更新清單。這些更新涵蓋了從作業系統核心（kernel）、核心元件（如 glibc、systemd）到上百個應用程式層面的修補。受影響的技術範圍極廣，包括但不限於 OpenSSL、Java 開發套件、Chromium、Python 函式庫、資料庫（如 MariaDB、PostgreSQL）、容器技術（如 Podman、containerd）以及各種網路服務（如 Nginx、Apache）。實務影響顯示，這些更新旨在修補廣泛的漏洞，確保系統在多層次結構上的穩定性與安全性。建議系統管理員應根據發行版的官方公告，及時更新所有核心元件和應用程式，以修補潛在的漏洞，維持系統的最高安全等級。",
    tags: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "安全更新", "核心元件"],
    title_en: "Multiple Major Linux Distributions Release Security Updates: Patching Core, Application, and Service Layers",
    summary_en: "This article compiles a list of security updates released by multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Mageia, Oracle, and SUSE. These updates cover patches ranging from the operating system kernel and core components (such as glibc and systemd) to hundreds of application layers. The affected technical scope is extremely broad, including but not limited to OpenSSL, Java development kits, Chromium, Python libraries, databases (such as MariaDB and PostgreSQL), container technologies (such as Podman and containerd), and various network services (such as Nginx and Apache). Practically, these updates aim to patch widespread vulnerabilities, ensuring stability and security across the system's multi-layered structure. System administrators are advised to update all core components and applications promptly, following the official announcements of their respective distributions, to patch potential vulnerabilities and maintain the highest level of system security.",
    tags_en: ["Linux", "AlmaLinux", "Debian", "Fedora", "SUSE", "Security Update", "Core Components"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1085272", lang: "EN" }
    ]
  },
  {
    id: "20260725-003",
    trackers: ["os"],
    category: "Linux",
    title: "GNU C Library (glibc) 發布 Version 2.44，新增系統級可調參數設定與安全修補",
    summary: "GNU C Library (glibc) 已發布 Version 2.44。本次更新包含多項功能與安全改進。主要新增了用於系統級設定可調參數的 `/etc/tunables.conf` 檔案，並加入了一個新的可調參數，用以控制唯讀可執行區段是否使用透明巨頁（transparent huge pages）。此外，本次版本也包含多項數學函數的改進，以及一系列安全修補。實務上，系統管理員應注意更新 glibc 以修補潛在的安全漏洞，並可利用新的設定檔來精細化系統的性能與安全參數配置。建議系統維護者根據其作業系統的發行版和需求，評估升級到 Version 2.44 的必要性。",
    tags: ["glibc", "GNU C Library", "Linux", "Version 2.44", "安全修補", "tunables.conf"],
    title_en: "GNU C Library (glibc) Releases Version 2.44, Adding System-Level Tunable Parameter Settings and Security Patches",
    summary_en: "GNU C Library (glibc) has released Version 2.44. This update includes multiple functional and security improvements. Key additions include the `/etc/tunables.conf` file for system-level configuration of tunable parameters, and a new tunable parameter to control whether read-only executable segments use transparent huge pages. Furthermore, this version incorporates improvements to various mathematical functions, along with a series of security patches. Practically, system administrators should consider updating glibc to patch potential security vulnerabilities and can utilize the new configuration file to fine-tune the system's performance and security parameters. System maintainers are advised to assess the necessity of upgrading to Version 2.44 based on their operating system distribution and requirements.",
    tags_en: ["glibc", "GNU C Library", "Linux", "Version 2.44", "Security Patches", "tunables.conf"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1085030", lang: "EN" }
    ]
  },
  {
    id: "20260725-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心發布 6.12.98：修復 ext4 文件描述符洩漏漏洞，建議使用者升級",
    summary: "Linux 核心開發者 Greg Kroah-Hartman 已發布 6.12.98 穩定版 Linux 核心。本次更新主要針對 ext4 文件系統中的一個文件描述符洩漏（file descriptor leak）問題進行修復。文件描述符洩漏可能導致系統資源管理上的問題，影響系統穩定性與可靠性。所有使用 ext4 文件系統的用戶都應立即升級到此穩定核心版本，以確保系統資源得到正確管理，避免潛在的穩定性風險。由於原文未提供具體的 CVSS 分數或影響範圍，建議用戶應遵循發行版（如 Ubuntu, RHEL 等）的官方安全公告，進行系統升級。",
    tags: ["Linux 核心", "6.12.98", "ext4", "文件描述符洩漏", "Linux 核心更新"],
    title_en: "Linux Kernel Release 6.12.98: Fixes ext4 File Descriptor Leak Vulnerability, Users Advised to Upgrade",
    summary_en: "Linux kernel developer Greg Kroah-Hartman has released the stable Linux kernel version 6.12.98. This update primarily addresses a file descriptor leak issue within the ext4 file system. File descriptor leaks can lead to system resource management problems, impacting system stability and reliability. All users utilizing the ext4 file system are advised to immediately upgrade to this stable kernel version to ensure proper system resource management and avoid potential stability risks. As the original text does not provide specific CVSS scores or impact scope, users are advised to follow the official security announcements of their distribution (such as Ubuntu, RHEL, etc.) when upgrading their systems.",
    tags_en: ["Linux Kernel", "6.12.98", "ext4", "File Descriptor Leak", "Linux Kernel Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1085026", lang: "EN" }
    ]
  },
  {
    id: "20260725-005",
    trackers: ["os"],
    category: "Linux",
    title: "GNU C Library (glibc) 2.44 發布：新增 /etc/tunables.conf 系統配置與多平台優化",
    summary: "GNU 開發者發布了 GNU C Library (glibc) 2.44 版本，這是一個針對現代 Linux 系統的重大功能更新。本次更新最主要的變動是引入了 `/etc/tunables.conf` 檔案，作為儲存系統級 glibc 可調參數的持久化選項，取代了原有的 `GLIBC_TUNABLES=` 環境變數。使用此檔案可以更方便地儲存每行一個可調參數，並支援多種過濾器和選項。此外，glibc 2.44 也帶來了多項效能提升，包括引入了 FMA'ed cosh 實作，性能提升約 35%；並從 CORE-MATH 專案匯入更優化且準確的數學函數。在硬體支援方面，glibc 2.44 為 LoongArch CPU 進行了優化，並新增了 LoongArch32 32 位元支援；同時，AArch64 和 RISC-V 平台上的多個函數也獲得了更好的優化。此版本預計將逐步整合至 Ubuntu 26.10、Fedora 45 等未來發行版的 Linux 發行版中。",
    tags: ["glibc", "GNU C Library", "Linux 核心", "/etc/tunables.conf", "LoongArch", "AArch64", "Fedora 45"],
    title_en: "GNU C Library (glibc) 2.44 Released: Introducing /etc/tunables.conf System Configuration and Multi-Platform Optimizations",
    summary_en: "GNU developers have released GNU C Library (glibc) version 2.44, a major feature update for modern Linux systems. The most significant change in this update is the introduction of the `/etc/tunables.conf` file, which serves as a persistent option for storing system-level glibc tunable parameters, replacing the original `GLIBC_TUNABLES=` environment variable. Using this file allows for easier storage of one tunable parameter per line and supports multiple filters and options. Furthermore, glibc 2.44 brings several performance enhancements, including the introduction of an FMA'ed cosh implementation, which provides an approximate 35% performance boost; and the integration of more optimized and accurate mathematical functions from the CORE-MATH project. In terms of hardware support, glibc 2.44 includes optimizations for LoongArch CPUs and adds LoongArch32 32-bit support; simultaneously, multiple functions on AArch64 and RISC-V platforms have also received improved optimizations. This version is expected to be gradually integrated into future Linux distributions, such as Ubuntu 26.10 and Fedora 45.",
    tags_en: ["glibc", "GNU C Library", "Linux Kernel", "/etc/tunables.conf", "LoongArch", "AArch64", "Fedora 45"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNU-C-Library-glibc-2.44", lang: "EN" }
    ]
  },
  {
    id: "20260725-006",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 更新：推出 kscreenctl 替代 kscreen-doctor，並強化遠端桌面與登入管理功能",
    summary: "KDE 開發團隊發布了 Plasma 6.8 版本，主要更新內容包括引入新的螢幕控制工具 kscreenctl，旨在取代舊有的 kscreen-doctor。kscreenctl 提供多樣化的顯示輸出配置選項。此外，Plasma 6.8 的內建遠端桌面 (RDP) 伺服器新增了功能，允許使用者設定在最後一個連線的 RDP 客戶端斷開後，自動鎖定會話，提升安全性。Plasma 登入管理器也改進了追蹤每個使用者最後使用會話的能力。此外，針對特定版本，如 Plasma 6.6.7，修復了在使用最新 NVIDIA 驅動程式和啟用色彩管理功能時，KWin 在登入時可能發生的崩潰問題。這些更新主要屬於功能增強與穩定性修復，旨在提升桌面環境的可用性與安全性。",
    tags: ["KDE Plasma", "Plasma 6.8", "kscreenctl", "KWin", "Linux 桌面環境", "RDP"],
    title_en: "KDE Plasma 6.8 Update: Introducing kscreenctl to replace kscreen-doctor, and enhancing remote desktop and login management features",
    summary_en: "The KDE development team has released the Plasma 6.8 version. Key updates include the introduction of the new screen control tool, kscreenctl, designed to replace the older kscreen-doctor. kscreenctl provides diverse display output configuration options. Furthermore, the built-in Remote Desktop Protocol (RDP) server in Plasma 6.8 has been enhanced with a feature that automatically locks the session when the last connected RDP client disconnects, thereby improving security. The Plasma login manager has also improved its ability to track each user's last used session. Additionally, for specific versions, such as Plasma 6.6.7, a crash issue in KWin has been fixed that might occur during login when using the latest NVIDIA drivers and enabling color management. These updates primarily focus on feature enhancements and stability fixes, aiming to improve the usability and security of the desktop environment.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "kscreenctl", "KWin", "Linux Desktop Environment", "RDP"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-kscreenctl", lang: "EN" }
    ]
  },
  {
    id: "20260725-007",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 內測版升級：File Explorer 提升刪除大型碎片化檔案速度，改善使用者體驗",
    summary: "本文介紹 Windows 11 Insider Experimental Preview Build 26300.8935 的多項功能優化。主要改進包括 File Explorer 刪除大型、碎片化檔案的速度，特別適用於磁碟空間接近滿載時。此優化改善了 NTFS 處理碎片化檔案時，查找和清除每個檔案片段記錄的效率。此外，File Explorer 的 Home 標籤載入速度和響應性也得到提升，並增加了觸控滾動支援。未來還預計會重構 Properties 對話框，從傳統 Win32 介面過渡到支援深色模式的 WinUI 版本，並強化「本機搜尋」功能。這些改動旨在提升 File Explorer 的整體性能和現代化體驗，但目前僅在實驗性內測通道提供。",
    tags: ["Windows 11", "File Explorer", "NTFS", "WinUI", "Insider Build", "系統優化"],
    title_en: "Windows 11 Insider Build Upgrade: File Explorer Improves Deletion Speed for Large, Fragmented Files, Enhancing User Experience",
    summary_en: "This article introduces several feature optimizations in the Windows 11 Insider Experimental Preview Build 26300.8935. Key improvements include faster deletion of large, fragmented files in File Explorer, particularly useful when disk space is nearly full. This optimization enhances the efficiency of NTFS when locating and clearing records for each fragmented file segment. Additionally, the loading speed and responsiveness of the Home tab in File Explorer have been improved, and touch scrolling support has been added. Future plans include refactoring the Properties dialog box, transitioning from the traditional Win32 interface to a WinUI version that supports dark mode, and strengthening the \"Local Search\" functionality. These changes aim to boost the overall performance and modernization of File Explorer, but are currently only available in the experimental insider channel.",
    tags_en: ["Windows 11", "File Explorer", "NTFS", "WinUI", "Insider Build", "System Optimization"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/26/windows-11s-file-explorer-is-now-faster-at-deleting-large-files-in-a-rare-speed-win-from-microsoft", lang: "EN" }
    ]
  },
  {
    id: "20260725-008",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 24H2/25H2 內建觸控板右鍵區域自定義功能，提升用戶體驗",
    summary: "本篇報導介紹 Windows 11 在 2026 年 7 月透過強制性 Patch Tuesday 更新（KB5101650），為觸控板（Touchpad）新增了右鍵區域大小自定義功能。用戶現在可以在「設定」>「藍牙與裝置」>「觸控板」中，選擇預設、小、中、大或自定義尺寸，以精準控制觸控板右下角響應單指右鍵的區域大小，旨在減少誤點並提升操作直覺性。此功能適用於具備可按壓表面的觸控板。此項功能被指出是 Windows 歷史上的首次原生支援，並與 Windows 11 正在推動的更全面觸控回饋系統（如 InputHapticsManager API）相結合，將觸控回饋視為系統設計的一部分。雖然 macOS 允許調整二指點擊區域，但其邊界是鎖定的；而 Windows 11 的此項更新，顯示了微軟在提升作業系統人機互動細節上的持續努力。",
    tags: ["Windows 11", "KB5101650", "觸控板", "人機介面", "Haptics", "24H2", "25H2"],
    title_en: "Windows 11 24H2/25H2 Built-in Touchpad Right-Click Area Customization Enhances User Experience",
    summary_en: "This report introduces a new feature in Windows 11, available via a mandatory Patch Tuesday update (KB5101650) in July 2026: the ability to customize the size of the touchpad's right-click area. Users can now navigate to Settings > Bluetooth & devices > Touchpad to select preset, small, medium, large, or custom dimensions. This allows for precise control over the size of the area in the bottom-right corner of the touchpad that responds to a single-finger right-click, aiming to reduce misclicks and improve operational intuitiveness. This feature applies to touchpads with a pressable surface. It is noted as the first native support of its kind in Windows history, and it combines with the more comprehensive touch feedback system that Windows 11 is promoting (such as the InputHapticsManager API), treating haptic feedback as part of the system design. Although macOS allows adjustment of the two-finger tap area, its boundaries are fixed; this Windows 11 update demonstrates Microsoft's continuous efforts to enhance the detailed human-computer interaction of the operating system.",
    tags_en: ["Windows 11", "KB5101650", "Touchpad", "Human-Machine Interface", "Haptics", "24H2", "25H2"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/25/windows-11-now-lets-you-resize-the-touchpad-right-click-zone-something-even-macos-cant-do", lang: "EN" }
    ]
  },
  {
    id: "20260725-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome修補四個高風險漏洞：防禦沙箱逃逸與遠端執行漏洞",
    summary: "Google 近期發布Chrome瀏覽器更新，針對Windows、macOS、Linux與Android等多平台修補了四個高風險漏洞。這些漏洞皆由Google內部發現，包含三個記憶體已釋放卻仍被使用（UAF）類型，以及一個越界寫入（Out of bounds write）類型。若未進行修補，遠端攻擊者可利用這些漏洞，透過特製的HTML網頁，執行沙箱逃逸，進而達到遠端程式碼執行（RCE）的嚴重後果。其中，CVE-2026-16805、CVE-2026-16807、CVE-2026-16804與CVE-2026-16806這四個漏洞，分別被評為高風險，其CVSS評分為8.8分、8.8分、8.3分和8.1分。使用者應儘快更新至最新版本，以避免遭受遠端攻擊。修補建議是立即更新瀏覽器至最新的穩定版版本。",
    tags: ["Google Chrome", "CVE-2026-16805", "CVE-2026-16807", "UAF", "沙箱逃逸", "遠端程式碼執行"],
    title_en: "Google Chrome Patches Four High-Risk Vulnerabilities: Preventing Sandbox Escape and Remote Code Execution",
    summary_en: "Google recently released a Chrome browser update that patches four high-risk vulnerabilities across multiple platforms, including Windows, macOS, Linux, and Android. All these vulnerabilities were discovered internally by Google, comprising three Use-After-Free (UAF) types and one Out-of-bounds write type. If left unpatched, remote attackers could exploit these vulnerabilities using specially crafted HTML pages to achieve sandbox escape, leading to the severe consequence of Remote Code Execution (RCE). Specifically, the four vulnerabilities, CVE-2026-16805, CVE-2026-16807, CVE-2026-16804, and CVE-2026-16806, were rated as high risk, with CVSS scores of 8.8, 8.8, 8.3, and 8.1, respectively. Users should update to the latest version promptly to avoid remote attacks. The recommended patch is to immediately update the browser to the latest stable version.",
    tags_en: ["Google Chrome", "CVE-2026-16805", "CVE-2026-16807", "UAF", "Sandbox Escape", "Remote Code Execution"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177624", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260725-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕 Fastjson 關鍵漏洞：攻擊者可透過惡意 JSON 執行程式碼，影響 Spring Boot 應用",
    summary: "資安公司 ThreatBook 和 Imperva 警告，阿里巴巴的 Fastjson Java JSON 函式庫存在一個關鍵漏洞（CVE-2026-16723）。此漏洞允許攻擊者在未經身份驗證的情況下，透過惡意 JSON 請求執行程式碼，其權限等同於 Java 流程。受影響版本範圍為 Fastjson 1.2.68 至 1.2.83。攻擊鏈需要 Spring Boot 可執行 fat-JAR、可網路存取的路徑，以及預設未啟用的 SafeMode。攻擊原理是利用 Fastjson 的型別解析路徑，惡意控制的 `@type` 值可被轉換為類資源查找，進而載入攻擊者控制的惡意位元組碼。若無法立即遷移，建議啟用 SafeMode（-Dfastjson.parser.safeMode=true），或使用 `com.alibaba:fastjson:1.2.83_noneautotype` 版本。長期修復方案是遷移至 Fastjson2。應檢查應用程式的 Fastjson 依賴，並監控可疑的 `@type` 值、嵌套 JAR URL 或意外的外部連線。",
    tags: ["Fastjson", "CVE-2026-16723", "JSON 解析", "Spring Boot", "Java", "RCE"],
    title_en: "Beware of Fastjson Critical Vulnerability: Attackers Can Execute Code via Malicious JSON, Affecting Spring Boot Applications",
    summary_en: "Security companies ThreatBook and Imperva warn that Alibaba's Fastjson Java JSON library contains a critical vulnerability (CVE-2026-16723). This vulnerability allows attackers to execute code via malicious JSON requests without authentication, with privileges equivalent to the Java process. The affected version range is Fastjson 1.2.68 to 1.2.83. The attack chain requires Spring Boot to execute fat-JARs, network accessibility, and SafeMode to be disabled by default. The principle of the attack is to exploit Fastjson's type parsing path, where a malicious controlled `@type` value can be converted into a class resource lookup, subsequently loading malicious bytecode controlled by the attacker. If immediate migration is not possible, it is recommended to enable SafeMode (-Dfastjson.parser.safeMode=true) or use the version `com.alibaba:fastjson:1.2.83_noneautotype`. The long-term remediation plan is to migrate to Fastjson2. Applications should check their Fastjson dependencies and monitor for suspicious `@type` values, nested JAR URLs, or unexpected external connections.",
    tags_en: ["Fastjson", "CVE-2026-16723", "JSON Parsing", "Spring Boot", "Java", "RCE"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/fastjson-1x-rce-vulnerability-targeted.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究人員公開 GitLab RCE PoC：利用 Oj 庫的記憶體漏洞攻擊自架設版本",
    summary: "資安研究機構 depthfirst 在 7 月 24 日公開了針對 GitLab 的一個可運作的 RCE（遠端程式碼執行）PoC（概念驗證）程式碼。該漏洞存在於自架設的 GitLab 18.11.3 版本，且尚未更新。攻擊者只需是任何可以推送到專案的已驗證使用者，即可透過提交一個惡意的 Jupyter notebook 並開啟其 commit diff 來觸發。攻擊鏈利用了 Ruby JSON 解析器 Oj 的兩個記憶體損壞漏洞。具體來說，一個漏洞會寫入超出固定大小的堆疊，控制解析器的啟動回呼，而另一個漏洞則會洩漏堆積指標，最終使攻擊能夠指向系統函式庫（system()）。攻擊的影響範圍廣泛，影響所有層級（CE 和 EE），從免費到 Ultimate 版。雖然攻擊執行時的權限僅為 `git` 使用者，但仍可存取原始碼、服務密鑰和 CI/CD 資料。建議使用者應升級到 18.10.8、18.11.5 或 19.0.2。若無法升級，應諮詢 GitLab 官方，因為目前沒有已知的配置性規避方法。",
    tags: ["GitLab", "RCE", "Oj", "記憶體漏洞", "PoC", "Ruby", "自架設"],
    title_en: "Researchers release GitLab RCE PoC: Exploiting memory vulnerability in Oj library affects self-hosted versions",
    summary_en: "Security research organization depthfirst released a working RCE (Remote Code Execution) PoC (Proof of Concept) targeting GitLab on July 24. The vulnerability exists in self-hosted GitLab versions 18.11.3 and earlier. An attacker only needs to be an authenticated user with the ability to push to a project to trigger the exploit by submitting a malicious Jupyter notebook and opening its commit diff. The attack chain utilizes two memory corruption vulnerabilities in the Ruby JSON parser, Oj. Specifically, one vulnerability writes beyond a fixed-size stack, controlling the parser's startup callback, while the other leaks stack pointers, ultimately allowing the attacker to point to the system library (system()). The impact is widespread, affecting all tiers (CE and EE), from Free to Ultimate. Although the attack executes with the privileges of the `git` user, it still allows access to source code, service secrets, and CI/CD data. Users are advised to upgrade to 18.10.8, 18.11.5, or 19.0.2. If upgrading is not possible, users should consult GitLab official support, as there is currently no known configuration workaround.",
    tags_en: ["GitLab", "RCE", "Oj", "Memory Vulnerability", "PoC", "Ruby", "Self-hosted"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/researcher-publishes-gitlab-rce-poc.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CTM360揭露保險業目標的進化型網路釣魚：利用Google廣告進行實時帳號劫持",
    summary: "近期調查揭示，針對保險業的網路釣魚活動已從傳統的收集帳密模式，進化為實時帳號劫持。攻擊者不再只是收集資料，而是同步活動，在受害者不知情的情況下，透過假冒的保險入口網站，在單次瀏覽會話內完成身份驗證。攻擊者利用受害者輸入的資料，甚至包括一次性密碼（OTP），實時地與合法保險系統互動，完成帳號接管。攻擊的初始媒介已轉變為透過購買Google廣告，在用戶搜尋保險報價時引導點擊，而非傳統的釣魚郵件。這些釣魚網站高度模仿真實保險服務的介面和流程，並利用GitHub Pages、Netlify等合法雲端服務建構，使其難以被傳統品牌監控系統偵測。這類攻擊的複雜性，使得傳統的僅識別惡意網站已不足夠，組織必須關注其背後的運營基礎設施和技術流程。",
    tags: ["網路釣魚", "帳號劫持", "保險業", "Google廣告", "OTP", "CTM360"],
    title_en: "CTM360 Uncovers Advanced Phishing Targeting the Insurance Industry: Utilizing Google Ads for Real-Time Account Takeover",
    summary_en: "Recent investigations reveal that phishing activities targeting the insurance industry have evolved from traditional credential harvesting to real-time account takeover. Attackers no longer merely collect data; instead, they conduct synchronized activities, completing identity verification within a single browsing session through fake insurance portals without the victim's knowledge. Attackers utilize data entered by the victim, including One-Time Passwords (OTP), to interact in real-time with legitimate insurance systems, completing account takeover. The initial vector of the attack has shifted from traditional phishing emails to guiding clicks via purchased Google Ads, specifically when users are searching for insurance quotes. These phishing sites highly mimic the interface and processes of real insurance services and are built using legitimate cloud services like GitHub Pages and Netlify, making them difficult for traditional brand monitoring systems to detect. The complexity of these attacks means that traditional methods focusing only on identifying malicious websites are insufficient; organizations must focus on the underlying operational infrastructure and technical processes.",
    tags_en: ["Phishing", "Account Takeover", "Insurance Industry", "Google Ads", "OTP", "CTM360"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/ctm360-research-reveals-how-insurance.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cl0p駭客群利用PTC Windmill及FlexPLM漏洞，進行未經身份驗證的遠端程式碼執行攻擊",
    summary: "與Cl0p駭客群相關的惡意活動，正在利用PTC Windmill和FlexPLM系統中暴露於網際網路的漏洞，進行新的資料勒索攻擊。攻擊者透過鏈接一個FlexPLM WSDL端點的預驗證資訊洩露缺陷（CVSS v3.1 7.5），結合Windchill登入Servlet的伺服器端缺陷，實現未經身份驗證的遠端程式碼執行（RCE）。這使得攻擊者可以在路徑 /Windchill/login/ 下部署帶有十六進位名稱的JSP Web Shell。攻擊者利用此漏洞（CVE-2026-12569，CVSS 分數 9.3）進行檔案系統枚舉、工程/設計資料的準備，最終執行雙重勒索（資料竊取）。受影響產業包括製造、汽車、航空航天和零售等。PTC已警告客戶，並指出此漏洞已被納入CISA的已知漏洞目錄（KEV）。建議客戶立即修補相關系統，並監控來自已知惡意IP地址的活動。",
    tags: ["Cl0p", "PTC Windmill", "FlexPLM", "CVE-2026-12569", "RCE", "資料勒索"],
    title_en: "Cl0p Group Exploits PTC Windmill and FlexPLM Vulnerabilities for Unauthenticated Remote Code Execution Attack",
    summary_en: "Malicious activities associated with the Cl0p group are exploiting vulnerabilities exposed on the internet within PTC Windmill and FlexPLM systems to conduct new data ransomware attacks. Attackers are achieving unauthenticated Remote Code Execution (RCE) by chaining a pre-authentication information leakage flaw in a FlexPLM WSDL endpoint (CVSS v3.1 7.5) with a server-side defect in the Windchill login Servlet. This allows attackers to deploy a JSP Web Shell with hexadecimal naming under the path /Windchill/login/. The attackers utilize this vulnerability (CVE-2026-12569, CVSS Score 9.3) to perform file system enumeration and prepare engineering/design data, ultimately executing double extortion (data theft). Affected industries include manufacturing, automotive, aerospace, and retail. PTC has warned customers and pointed out that this vulnerability has been included in CISA's Known Exploited Vulnerabilities catalog (KEV). Customers are advised to immediately patch the affected systems and monitor for activity from known malicious IP addresses.",
    tags_en: ["Cl0p", "PTC Windmill", "FlexPLM", "CVE-2026-12569", "RCE", "Data Ransomware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/cl0p-affiliates-target-internet-exposed.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-014",
    trackers: ["os"],
    category: "Apple",
    title: "Apple TV 宣布《Neuromancer》系列劇集首播日期，並釋出《Dark Matter》及《Matchbox》新預告片",
    summary: "Apple TV 在聖地牙哥漫畫展（Comic Con）上，宣布了多項內容更新。其中，改編自經典科幻小說《Neuromancer》的系列劇集已確定首播日期為一月二十二日。此外，Apple TV 還同步釋出了《Dark Matter》第二季和電影《Matchbox》的最新預告片。這些內容展示了 Apple TV 在影視內容版圖上的積極佈局，吸引了大量科幻與娛樂愛好者的關注。目前原文未提及任何技術漏洞或資安風險，僅為內容宣傳資訊。",
    tags: ["Apple TV", "Neuromancer", "Dark Matter", "Matchbox", "科幻", "影視內容"],
    title_en: "Apple TV announces premiere date for 'Neuromancer' series and releases new trailers for 'Dark Matter' and 'Matchbox'",
    summary_en: "At Comic-Con in San Diego, Apple TV announced several content updates. Notably, the series adaptation of the classic science fiction novel 'Neuromancer' has set its premiere date for January 22nd. Furthermore, Apple TV simultaneously released the latest trailers for 'Dark Matter' Season 2 and the film 'Matchbox'. This content demonstrates Apple TV's aggressive expansion into the film and television content landscape, attracting significant attention from science fiction and entertainment enthusiasts. The original text does not mention any technical vulnerabilities or security risks; it is purely promotional content.",
    tags_en: ["Apple TV", "Neuromancer", "Dark Matter", "Matchbox", "Sci-Fi", "Media Content"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/apple-tv-neuromancer-adaptation-trailers", lang: "EN" }
    ]
  },
  {
    id: "20260725-015",
    trackers: ["os"],
    category: "Apple",
    title: "【App介紹】NeoCam：為 iPhone/iPad 帶來復古 Game Boy 風格的相機應用程式",
    summary: "本文介紹了一款名為 NeoCam 的獨立開發相機應用程式，適用於 iPhone 和 iPad。該 App 的特色是能為用戶拍攝的所有照片，模擬出復古的 Game Boy 遊戲機相機風格。其功能可以在實時進行調整，提供創意的照片濾鏡效果。這類 App 屬於應用層的創意工具，主要提供視覺美化和復古風格的體驗，而非修補系統漏洞或處理資安威脅。對於尋求獨特照片風格的用戶，這是一款值得關注的創意工具。",
    tags: ["NeoCam", "iPhone", "iPad", "相機應用", "復古風格", "iOS"],
    title_en: "[App Introduction] NeoCam: A Camera Application Bringing Retro Game Boy Style to iPhone/iPad",
    summary_en: "This article introduces an independently developed camera application called NeoCam, designed for iPhone and iPad. The app's feature is that it simulates the retro Game Boy camera style for all photos taken by the user. Its functions can be adjusted in real-time, offering creative photo filter effects. This type of app is a creative tool at the application layer, primarily providing visual beautification and retro style experience, rather than patching system vulnerabilities or handling cybersecurity threats. For users seeking a unique photo style, this is a creative tool worth paying attention to.",
    tags_en: ["NeoCam", "iPhone", "iPad", "Camera App", "Retro Style", "iOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/indie-app-spotlight-neocam-brings-a-retro-video-game-style-look-to-your-iphone-photos", lang: "EN" }
    ]
  },
  {
    id: "20260725-016",
    trackers: ["os"],
    category: "Apple",
    title: "三星 Galaxy Z Fold8 發表：深入探討可折疊手機的最新趨勢與挑戰",
    summary: "本文內容主要報導了關於三星 Galaxy Z Fold8 的深度討論，內容涵蓋了該款最新可折疊手機的實機體驗、其 4:3 螢幕比例的優缺點，以及業界為解決螢幕摺痕問題所做的努力。文章討論了這些發展趨勢對於蘋果公司未來可折疊 iPhone 的潛在影響。由於原文為產品發表與市場分析性質，未提及任何具體的漏洞、CVE 編號、CVSS 分數或受影響產品版本資訊，故不涉及資安風險分析。建議關注業界對可折疊螢幕技術的進展，以評估未來行動裝置的設計趨勢。",
    tags: ["三星", "Galaxy Z Fold8", "可折疊手機", "iPhone", "行動裝置趨勢"],
    title_en: "Samsung Galaxy Z Fold8 Launch: An In-Depth Look at the Latest Trends and Challenges in Foldable Phones",
    summary_en: "This article reports on an in-depth discussion regarding the Samsung Galaxy Z Fold8. The content covers the hands-on experience of this latest foldable phone, the advantages and disadvantages of its 4:3 screen ratio, and the industry's efforts to solve screen crease issues. The article discusses the potential impact of these developmental trends on Apple's future foldable iPhone. Since the original text is nature of product launch and market analysis, it does not mention any specific vulnerabilities, CVE IDs, CVSS scores, or affected product version information, and therefore does not involve cybersecurity risk analysis. It is recommended to follow industry developments in foldable screen technology to assess future mobile device design trends.",
    tags_en: ["Samsung", "Galaxy Z Fold8", "Foldable Phone", "iPhone", "Mobile Device Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/9to5mac-overtime-074-apples-foldable-iphone", lang: "EN" }
    ]
  },
  {
    id: "20260725-017",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果 iPhone 18 系列發布異動：今年九月僅推出 Pro 與折疊機型",
    summary: "根據報導，蘋果今年九月的年度 iPhone 發布會將有所不同。傳統上，蘋果會一次性推出完整的 iPhone 系列產品線，但今年將會改變此模式。今年九月預計僅會推出 iPhone 18 Pro、iPhone 18 Pro Max，以及一款全新的折疊式 iPhone 機型。這代表用戶在今年秋季無法一次性看到完整的 iPhone 系列產品線，需要留意蘋果官方的後續公告以確認詳細的產品規劃與上市時間。",
    tags: ["Apple", "iPhone 18", "iPhone 18 Pro", "折疊手機", "產品發布"],
    title_en: "Apple iPhone 18 Series Launch Changes: Only Pro and Foldable Models Expected This September",
    summary_en: "According to reports, Apple's annual iPhone launch event this September will be different. Traditionally, Apple launches a complete line of iPhone products at once, but this year, the pattern will change. Only the iPhone 18 Pro, iPhone 18 Pro Max, and a brand new foldable iPhone model are expected this September. This means users will not see the complete iPhone series product line all at once this fall, and they should pay attention to Apple's official follow-up announcements to confirm the detailed product planning and release schedule.",
    tags_en: ["Apple", "iPhone 18", "iPhone 18 Pro", "Foldable Phone", "Product Launch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/heres-why-iphone-18-wont-launch-in-september", lang: "EN" }
    ]
  },
  {
    id: "20260725-018",
    trackers: ["os"],
    category: "Apple",
    title: "數位看板應用比較：新報告指出 Apple TV 在企業級可靠性上優於 Android 設備",
    summary: "本報告比較了在企業或零售環境部署數位看板的兩種主要設備類型：Apple TV 和 Android 設備。根據 Kitcast 發布的《2026 年數位看板現狀報告》，研究發現 Apple TV 在整體可靠性方面表現更佳，特別是在大規模部署的場景下。這對於需要高穩定性和長期運營的企業 IT 團隊來說，是一個重要的參考指標。報告強調了設備選擇對於營運穩定性的影響，建議企業在規劃數位看板系統時，應考慮設備的可靠性與維護成本，而非僅從初期採購成本著眼。",
    tags: ["Apple TV", "數位看板", "企業部署", "Android", "可靠性", "Kitcast"],
    title_en: "Digital Signage Application Comparison: New Report Indicates Apple TV Outperforms Android Devices in Enterprise Reliability",
    summary_en: "This report compares two major types of devices for deploying digital signage in enterprise or retail environments: Apple TV and Android devices. According to the '2026 Digital Signage Landscape Report' published by Kitcast, the study found that Apple TV demonstrates superior overall reliability, especially in large-scale deployment scenarios. This serves as a crucial benchmark for enterprise IT teams requiring high stability and long-term operation. The report emphasizes the impact of device selection on operational stability, advising enterprises to consider device reliability and maintenance costs when planning digital signage systems, rather than focusing solely on initial procurement costs.",
    tags_en: ["Apple TV", "Digital Signage", "Enterprise Deployment", "Android", "Reliability", "Kitcast"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/apple-tv-proves-to-be-more-reliable-than-android-in-new-digital-signage-report", lang: "EN" }
    ]
  },
  {
    id: "20260725-019",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Magnet Forensics 起訴 Paradigm Shift，指控其公開的 usbliter8 漏洞利用程式使用了竊取的 Apple 晶片零日密鑰",
    summary: "資安公司 Magnet Forensics 對 Paradigm Shift Technology 提告，指控其公開的 usbliter8 漏洞利用程式，使用了前員工竊取的專有技術機密。usbliter8 是一種針對 Apple A12 和 A13 晶片的 BootROM 漏洞，能夠在設備啟動初期執行任意程式碼，繞過簽名檢查，並載入修改後的系統軟體。此漏洞的實務影響範圍限於 2018 年和 2019 年推出的較舊 Apple 晶片。由於 usbliter8 針對 BootROM 層級，無法透過軟體更新修復。Magnet Forensics 聲稱，該漏洞的開發與公開，源自前員工在 Magnet Forensics 期間所研究的內部專有零日存取能力（代號 MSG）。Magnet 要求移除 usbliter8 的公開內容，並尋求金錢賠償，以防止其專有技術機密的進一步使用或洩露。",
    tags: ["Magnet Forensics", "Paradigm Shift Technology", "usbliter8", "Apple SoC", "BootROM", "零日漏洞", "智慧財產權"],
    title_en: "Magnet Forensics Sues Paradigm Shift, Alleging Public usbliter8 Exploit Uses Stolen Apple Chip Zero-Day Keys",
    summary_en: "Cybersecurity firm Magnet Forensics has sued Paradigm Shift Technology, alleging that the company's publicly released usbliter8 exploit utilizes proprietary trade secrets stolen by a former employee. usbliter8 is a BootROM vulnerability targeting Apple A12 and A13 chips, which allows arbitrary code execution during early device boot, bypassing signature checks and loading modified system software. The practical impact of this vulnerability is limited to older Apple chips released in 2018 and 2019. Because usbliter8 targets the BootROM layer, it cannot be patched via software updates. Magnet Forensics claims that the development and public release of this vulnerability originated from internal proprietary zero-day access capabilities (codenamed MSG) researched by a former employee during their tenure at Magnet. Magnet demands the removal of usbliter8's public content and seeks monetary compensation to prevent further use or leakage of its proprietary technical secrets.",
    tags_en: ["Magnet Forensics", "Paradigm Shift Technology", "usbliter8", "Apple SoC", "BootROM", "Zero-Day Vulnerability", "Intellectual Property"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/24/new-lawsuit-alleges-unpatchable-apple-chip-exploit-was-developed-using-stolen-trade-secrets", lang: "EN" }
    ]
  },
  {
    id: "20260725-020",
    trackers: ["os", "security"],
    category: "供應鏈與開源安全",
    title: "SourTrade惡意廣告利用Bun Runtime，透過分段組裝方式傳遞Windows惡意執行檔",
    summary: "資安公司 Confiant 揭露一場名為 SourTrade 的惡意廣告活動，該活動旨在針對零售交易者和加密貨幣投資者。攻擊者利用合法且功能強大的 Bun runtime 作為基礎，而非從單一固定 URL 下載完整惡意檔案。攻擊流程涉及在落地頁註冊 page-scoped ServiceWorker，並透過 SharedWorker 請求包含 PE 標頭、區段表和惡意 JavaScriptCore 字節碼的配置資訊。Bun 運行時支援將應用程式和字節碼編譯成獨立的 Windows 可執行檔。攻擊者透過 AES-CTR 模式生成隨機位元流，並將其與 Bun 運行時和惡意材料結合，在每次受害者會話中組裝出不同的惡意檔案，使得每個受害者接收到的檔案雜湊值都不同。這種分段組裝的技術使得傳統基於雜湊值的偵測難度極高。防禦建議應檢視整個攻擊鏈，從廣告引導、隱藏的落地頁，到 `/config` 請求、次級網域的運行時下載，以及 ServiceWorker 的下載過程，而非僅依賴單一網路或檔案證據。",
    tags: ["SourTrade", "Bun runtime", "惡意廣告", "ServiceWorker", "Windows 可執行檔", "加密貨幣投資者"],
    title_en: "SourTrade Malicious Ad Exploits Bun Runtime to Deliver Windows Malicious Executables via Segmented Assembly",
    summary_en: "Security firm Confiant revealed a malicious advertising campaign named SourTrade, which targets retail traders and cryptocurrency investors. The attackers leveraged the legitimate and powerful Bun runtime, rather than downloading a complete malicious file from a single fixed URL. The attack process involves registering a page-scoped ServiceWorker on the landing page, and then requesting configuration information via a SharedWorker that contains a PE header, section table, and malicious JavaScriptCore bytecode. The Bun runtime supports compiling applications and bytecode into independent Windows executables. The attackers generate random bit streams using AES-CTR mode and combine them with the Bun runtime and malicious materials to assemble different malicious files during each victim session, ensuring that the file hash received by each victim is unique. This segmented assembly technique makes traditional hash-based detection extremely difficult. Defense recommendations should examine the entire attack chain—from the ad redirection and hidden landing page, to the `/config` request, runtime download from a secondary domain, and the ServiceWorker download process—rather than relying solely on single network or file evidence.",
    tags_en: ["SourTrade", "Bun runtime", "Malicious Ad", "ServiceWorker", "Windows Executable", "Cryptocurrency Investor"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/malvertising-sends-malware-in-pieces.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-021",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "DevMan RaaS 平台升級：駭客組織 Funky Mantis 建立中央化控制系統，強化攻擊流程",
    summary: "資安公司 PRODAFT 追蹤到一個名為 Funky Mantis 的勒索軟體即服務（RaaS）平台 DevMan。該平台是一個中央化的操作中心，整合了建構載荷、財務管理、受害者溝通、支持記錄和支付功能。DevMan 曾從 Qilin、DragonForce 等群組衍生，其核心技術與 DragonForce 具有相似性。該組織曾公開聲稱開發出專門針對 SCADA 系統的惡意軟體，旨在超越加密，對工業控制系統造成物理性損害。最新版本的平台（v3）進一步強化了工作流程管理，支援結構化的受害者記錄、生命週期狀態追蹤、團隊創建和收入管理。平台允許攻擊者為 Windows、ESXi 或 Linux 創建載荷，Windows 版本包含權限檢查、服務終止、事件日誌清除、橫向移動等功能，並使用 ChaCha20-Poly1305 加密文件。受害者應注意，應禁止服務和備份帳戶進行互動式 VPN 登入。",
    tags: ["DevMan", "Funky Mantis", "RaaS", "SCADA", "勒索軟體", "PRODAFT", "ChaCha20-Poly1305"],
    title_en: "DevMan RaaS Platform Upgrade: Hacker Group Funky Mantis Establishes Centralized Control System, Enhancing Attack Workflow",
    summary_en: "Cybersecurity firm PRODAFT has tracked a Ransomware-as-a-Service (RaaS) platform named DevMan, operated by the group Funky Mantis. This platform serves as a centralized operational hub, integrating payload construction, financial management, victim communication, support logging, and payment functionalities. DevMan has reportedly evolved from groups such as Qilin and DragonForce, sharing core technical similarities with DragonForce. The group previously claimed to develop malware specifically targeting SCADA systems, designed to bypass encryption and inflict physical damage on industrial control systems. The latest version of the platform (v3) further enhances workflow management, supporting structured victim records, lifecycle status tracking, team creation, and revenue management. The platform allows attackers to create payloads for Windows, ESXi, or Linux. The Windows version includes features such as privilege checks, service termination, event log clearing, and lateral movement, and uses ChaCha20-Poly1305 for file encryption. Victims are advised to prohibit interactive VPN logins for service and backup accounts.",
    tags_en: ["DevMan", "Funky Mantis", "RaaS", "SCADA", "Ransomware", "PRODAFT", "ChaCha20-Poly1305"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/devman-raas-portal-centralizes-payload.html", lang: "EN" }
    ]
  },
  {
    id: "20260725-022",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安內容：科技生活習慣改變與數位戒斷經驗分享",
    summary: "本文為一位科技內容創作者分享個人如何克服「手機成癮」的經驗。作者指出現代人過度使用智慧型手機，導致注意力分散和「不專注」的生活狀態。他分享了從減少社群媒體使用（如 Twitter、Threads、Instagram）的過程，並發現難以完全戒除，最終將注意力轉移到其他活動，例如在觀看電影時不攜帶手機，或在感到想「滑動」時改為玩遊戲機（Switch 或 Steam Deck）。文章的核心觀點是，應將注意力從「服務內容」轉移到「使用手機的行為模式」上，透過改變生活習慣，來提升「臨場感」和生活品質。本文未涉及任何資安技術或產品漏洞資訊。",
    tags: ["手機成癮", "數位戒斷", "生活習慣", "注意力管理", "Android", "科技趨勢"],
    title_en: "Non-Security Content: Sharing Experiences of Lifestyle Changes and Digital Detox",
    summary_en: "This article is a personal sharing by a tech content creator on how they overcame 'smartphone addiction.' The author points out that modern people overuse smartphones, leading to attention deficit and a state of 'inattention' in daily life. They share their process of reducing social media usage (such as Twitter, Threads, and Instagram), finding that complete abstinence was difficult. Ultimately, they shifted their focus to other activities, such as not bringing their phones when watching movies, or playing on a game console (Switch or Steam Deck) when feeling the urge to 'scroll.' The core argument of the article is that attention should be shifted from 'service content' to the 'behavioral pattern of using the phone.' By changing lifestyle habits, one can improve 'presence' and overall quality of life. This article does not involve any cybersecurity technology or product vulnerability information.",
    tags_en: ["Smartphone Addiction", "Digital Detox", "Lifestyle Habits", "Attention Management", "Android", "Tech Trends"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/25/im-using-my-phone-way-less-and-its-making-me-happier", lang: "EN" }
    ]
  },
  {
    id: "20260725-023",
    trackers: ["os"],
    category: "重點關注",
    title: "Amazon Basics Matter 智能插座評測：低成本實現 Apple HomeKit 互聯性",
    summary: "本文評測了 Amazon Basics 的智能插座，強調其支援 Matter 協議，使其能輕鬆融入 Apple HomeKit 生態系統。Matter 協議為智能家居硬體建立了通用標準，讓該插座能與 Apple HomePod mini 或 Apple TV 4K 等 Matter 兼容的 Apple Home Hub 直接連線，無需額外應用程式。作者指出，智能插座是智能家居最實用的基礎元件，可用於自動化季節性燈光、氣候控制（如加熱器、除濕機）和早晨例行程序（如咖啡機）。此外，該產品設計了緊湊的物理尺寸，能充分利用單個插座空間。然而，文章提醒使用者，此為 2.4 GHz Wi-Fi 專用設備，而非 Thread 設備，可能存在相較於 Thread 設備的延遲，且會增加路由器客戶端負載。但考量到其低於 10 美元的價格，作者認為其性能表現已足夠可靠。",
    tags: ["Amazon Basics", "Matter", "Apple HomeKit", "智能家居", "Wi-Fi", "Thread"],
    title_en: "Review of Amazon Basics Smart Plug: Achieving Apple HomeKit Interoperability at a Low Cost",
    summary_en: "This article reviews the Amazon Basics smart plug, highlighting its support for the Matter protocol, which allows it to easily integrate into the Apple HomeKit ecosystem. The Matter protocol establishes a universal standard for smart home hardware, enabling this plug to connect directly with Matter-compatible Apple Home Hubs, such as the Apple HomePod mini or Apple TV 4K, without requiring additional applications. The author points out that smart plugs are among the most practical foundational components in smart homes, useful for automating seasonal lighting, climate control (such as heaters or dehumidifiers), and morning routines (such as coffee makers). Furthermore, the product is designed with a compact physical footprint, maximizing the use of a single outlet space. However, the article reminds users that this is a 2.4 GHz Wi-Fi-only device, not a Thread device, which may result in higher latency compared to Thread devices and increase router client load. Given its price point of under $10, the author concludes that its performance is sufficiently reliable.",
    tags_en: ["Amazon Basics", "Matter", "Apple HomeKit", "Smart Home", "Wi-Fi", "Thread"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/the-amazon-basics-matter-plug-delivers-apple-home-control-for-under-10", lang: "EN" }
    ]
  },
  {
    id: "20260725-024",
    trackers: ["os"],
    category: "重點關注",
    title: "Meirro Pro 32吋 6K 顯示器：挑戰 Apple Studio Display 的高性價替代方案",
    summary: "本文介紹了一款名為 Meirro Pro 的 32 吋 6K 顯示器，作為 Apple 淘汰 Pro Display XDR 後，市場上尋求更大尺寸 Retina 級顯示器的替代選擇。Meirro Pro 採用全鋁金屬結構，並提供單纜線解決方案，價格為 $1,199。雖然文章未提供具體的技術規格或安全漏洞資訊，但它強調了這款顯示器在尺寸、解析度（6K）和設計上的優勢，使其成為一個具競爭力的市場新進入者。對於 Mac 用戶而言，這款顯示器提供了比 Apple Studio Display 更大、更具吸引力的選擇。",
    tags: ["Meirro Pro", "Apple Studio Display", "6K 顯示器", "Mac 用戶", "顯示器市場"],
    title_en: "Meirro Pro 32-inch 6K Display: A High-Value Alternative to the Apple Studio Display",
    summary_en: "This article introduces the Meirro Pro, a 32-inch 6K display designed as an alternative for users seeking a larger, Retina-grade display following the discontinuation of the Apple Pro Display XDR. The Meirro Pro features an all-aluminum structure and offers a single-cable solution, priced at $1,199. Although the article does not provide specific technical specifications or security vulnerability information, it highlights the display's advantages in size, resolution (6K), and design, positioning it as a highly competitive new market entrant. For Mac users, this display offers a larger and more appealing choice compared to the Apple Studio Display.",
    tags_en: ["Meirro Pro", "Apple Studio Display", "6K Display", "Mac User", "Display Market"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/hands-on-the-meirro-pro-6k-might-be-the-best-apple-studio-display-alternative-yet-video", lang: "EN" }
    ]
  },
  {
    id: "20260725-025",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 產品線週末促銷資訊：MacBook Pro、AirPods Pro Max 及 iPhone 17 Pro 等多款設備優惠",
    summary: "本文為 9to5Toys 提供的產品促銷資訊，涵蓋了 Amazon、Best Buy 等多個零售商在週末期間的銷售活動。主要的優惠項目包括 M5 Pro MacBook Pro 型號最高可享 $500 折扣、AirPods Pro 3 和 AirPods Pro Max 具折扣，以及 Apple Watch Series 11 和 iPhone 17 Pro 等產品線的持續折扣。文章主要提供消費者的購買指引，並提及了充電配件和 Find My 設備的優惠。由於這篇文章屬於商業促銷資訊，未涉及任何資安漏洞、技術更新或安全公告，因此不包含 CVE 或技術細節。",
    tags: ["Apple", "MacBook Pro", "AirPods Pro Max", "iPhone 17 Pro", "促銷活動", "消費電子"],
    title_en: "Apple Product Line Weekend Sale Information: Discounts on Multiple Devices Including MacBook Pro, AirPods Pro Max, and iPhone 17 Pro",
    summary_en: "This article provides product promotion information from 9to5Toys, covering sales activities from multiple retailers such as Amazon and Best Buy during the weekend. Key deals include up to $500 discounts on the M5 Pro MacBook Pro model, discounts on AirPods Pro 3 and AirPods Pro Max, and ongoing discounts on product lines such as Apple Watch Series 11 and iPhone 17 Pro. The article primarily offers purchasing guidance for consumers and mentions deals on charging accessories and Find My devices. Since this article pertains to commercial promotional information and does not involve any cybersecurity vulnerabilities, technical updates, or security announcements, it does not include CVEs or technical details.",
    tags_en: ["Apple", "MacBook Pro", "AirPods Pro Max", "iPhone 17 Pro", "Promotional Activity", "Consumer Electronics"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/25/apple-weekend-deals-macbook-pro-airpods-airtag-2", lang: "EN" }
    ]
  },
  {
    id: "20260725-026",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果爭取使用中國記憶體晶片引發爭議，美光（Micron）警告可能損害美國半導體產業",
    summary: "本報導指出，蘋果公司（Apple）正積極遊說美國政府，爭取在產品外銷市場使用來自中國的記憶體晶片，包括來自常鑫科技（CXMT）和陽正記憶體（YMTC）的晶片。然而，美國主要的記憶體晶片製造商美光（Micron）對此提出強烈反對，警告若允許使用中國供應商的晶片，將可能損害美國本土半導體產業的競爭力，如同過去中國對美國鋼鐵和製造業的衝擊。美光主張，應加速國內晶片廠建設並增加美國投資來緩解記憶體短缺。此爭議使川普政府處於兩難境地，必須在「降低美國消費者價格」與「提升國內半導體產能」兩項經濟優先事項之間做出選擇。蘋果此前已透過大規模投資和協議來爭取政治資本，但此次爭議凸顯了美國在供應鏈安全與經濟發展之間的重大政策衝突。",
    tags: ["Apple", "Micron", "半導體", "記憶體晶片", "CXMT", "YMTC", "供應鏈"],
    title_en: "Apple's Push to Use Chinese Memory Chips Sparks Controversy; Micron Warns Potential Damage to US Semiconductor Industry",
    summary_en: "This report indicates that Apple is actively lobbying the US government to use memory chips from China in its overseas product markets, including chips from CXMT and YMTC. However, Micron, a major US memory chip manufacturer, strongly opposes this, warning that allowing the use of chips from Chinese suppliers could damage the competitiveness of the domestic US semiconductor industry, similar to China's past impact on US steel and manufacturing. Micron argues that the US should accelerate the construction of domestic chip factories and increase American investment to alleviate memory shortages. This controversy places the Trump administration in a dilemma, forcing a choice between two economic priorities: 'lowering US consumer prices' and 'boosting domestic semiconductor capacity.' Apple has previously accumulated political capital through large-scale investments and agreements, but this controversy highlights a major policy conflict in the US between supply chain security and economic development.",
    tags_en: ["Apple", "Micron", "Semiconductor", "Memory Chips", "CXMT", "YMTC", "Supply Chain"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/24/report-apple-and-micron-clash-before-trump-over-chinese-memory-chips", lang: "EN" }
    ]
  },
  {
    id: "20260725-027",
    trackers: ["os"],
    category: "重點關注",
    title: "大科技公司被指控阻撓：歐盟研究人員難以獲取TikTok API，影響政治資訊研究",
    summary: "本報導指出，在羅馬尼亞總統選舉前夕，TikTok平台曾被用於大規模推廣一位政治人物Calin Georgescu，其內容涉及移民和反猶太主義等極端觀點。為深入研究此類虛假資訊和政治操縱，歐盟研究人員Adriana Iamnitchi及其團隊於2025年10月向TikTok申請了API存取權，但遭到拒絕。TikTok方面以研究人員身份證明不足、商業利益不明確或未滿足安全要求為由拒絕。然而，兩個月後，TikTok卻標記了大量疑似受損帳號，並針對一個由第三方「虛假互動供應商」運營的、推廣該政治人物的協調網路採取了行動。事件揭示了科技巨頭在處理敏感政治內容和學術研究需求時的雙重標準，並引發了關於平台透明度與監管（如歐盟《數位服務法案》DSA）的討論。",
    tags: ["TikTok", "DSA", "API", "政治資訊操縱", "歐盟", "內容審核"],
    title_en: "Tech Giant Accused of Obstruction: EU Researchers Struggle to Access TikTok API, Impacting Political Information Research",
    summary_en: "This report points out that prior to the Romanian presidential election, the TikTok platform was used to massively promote a political figure, Calin Georgescu, whose content involved extreme views such as immigration and anti-Semitism. To deeply study such disinformation and political manipulation, EU researchers Adriana Iamnitchi and her team applied for API access from TikTok in October 2025, but were denied. TikTok rejected the request citing insufficient researcher credentials, unclear commercial interests, or failure to meet security requirements. However, two months later, TikTok flagged numerous suspected compromised accounts and took action against a coordinated network promoting the political figure, which was operated by a third-party 'fake interaction supplier.' The incident reveals a double standard by tech giants when handling sensitive political content and academic research needs, sparking discussions about platform transparency and regulation (such as the EU's Digital Services Act, DSA).",
    tags_en: ["TikTok", "DSA", "API", "Political Information Manipulation", "EU", "Content Moderation"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/07/big-tech-accused-of-stonewalling-european-social-media-researchers", lang: "EN" }
    ]
  },
  {
    id: "20260725-028",
    trackers: ["os"],
    category: "重點關注",
    title: "GNOME Shell 擴充功能 Kiwi Menu 1.6.4 更新：強化 macOS 風格的快速選單體驗",
    summary: "Kiwi Menu 是一個為 GNOME Shell 設計的擴充功能，旨在為桌面提供類似 macOS 的快速選單體驗。最新發布的 Kiwi Menu 1.6.4 版本，帶來了多項 macOS 風格的介面改進。主要更新包括：模擬 macOS 應用程式強制退出（Force Quit）的對話框、新增類似 Apple macOS 的「關於這台電腦」（About This PC）視窗，以及可配置的鍵盤快捷鍵和整體選單外觀的優化。該擴充功能可透過 GNOME Extensions 取得。本次更新屬於使用者介面（UI/UX）層面的功能增強，主要提升了 GNOME 系統的視覺一致性和操作便利性。使用者若希望獲得更接近 Apple 生態系統的桌面體驗，建議更新至最新版本的 Kiwi Menu。",
    tags: ["GNOME Shell", "Kiwi Menu", "macOS", "擴充功能", "使用者介面", "桌面環境"],
    title_en: "GNOME Shell Extension Kiwi Menu 1.6.4 Update: Enhanced macOS Style Quick Menu Experience",
    summary_en: "Kiwi Menu is an extension designed for GNOME Shell, aiming to provide a quick menu experience similar to macOS on the desktop. The newly released Kiwi Menu 1.6.4 version introduces multiple macOS-style interface improvements. Key updates include: simulating the macOS application Force Quit dialog box, adding an 'About This PC' window similar to Apple macOS, and optimizing configurable keyboard shortcuts and overall menu appearance. The extension is available via GNOME Extensions. This update focuses on User Interface (UI/UX) enhancements, primarily improving the visual consistency and operational convenience of the GNOME system. Users seeking a desktop experience closer to the Apple ecosystem are advised to update to the latest version of Kiwi Menu.",
    tags_en: ["GNOME Shell", "Kiwi Menu", "macOS", "Extension", "User Interface", "Desktop Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Kiwi-Menu-macOS-Vibes", lang: "EN" }
    ]
  },
  {
    id: "20260725-029",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.14 新版本發布：首次支援 FreeBSD 的 WoW64 模式與開始選單圖示功能",
    summary: "Wine 11.14 是這款開源軟體最新的雙週開發版本，用於在 Linux、macOS 等平台運行 Windows 應用程式和遊戲。本次更新的重大亮點包括首次為 FreeBSD 提供了 WoW64 模式的初步支援。WoW64 模式旨在讓 32 位元的 Windows 軟體能夠在 64 位元的系統上運行，且無需依賴 32 位元的多重函式庫支援。此外，Wine 11.14 也增加了對開始選單（Start Menu）圖示的支援，提升使用者介面體驗。除了這些核心功能，本次版本還加入了 DirectSound 的 7.1 格式轉換支援，並在 BCrypt 中加入了 AES-GMAC 演算法支援。本次更新修復了多個已知錯誤，影響範圍涵蓋 Adobe Reader 等應用程式到 Heroes of the Storm 等遊戲。開發團隊持續朝著 Wine 12.0 穩定版邁進，預計於 2027 年 1 月發布。",
    tags: ["Wine", "WineHQ", "WoW64", "FreeBSD", "Windows 模擬", "開源軟體", "遊戲相容性"],
    title_en: "Wine 11.14 New Version Released: First Support for FreeBSD's WoW64 Mode and Start Menu Icon Functionality",
    summary_en: "Wine 11.14 is the latest bi-weekly development version of the open-source software used to run Windows applications and games on platforms like Linux and macOS. Major highlights of this update include preliminary support for WoW64 mode on FreeBSD. WoW64 mode aims to allow 32-bit Windows software to run on 64-bit systems without relying on 32-bit multi-library support. Furthermore, Wine 11.14 adds support for Start Menu icons, enhancing the user interface experience. In addition to these core features, this version also includes support for DirectSound's 7.1 format conversion and adds AES-GMAC algorithm support in BCrypt. This update fixes multiple known bugs, affecting applications ranging from Adobe Reader to games like Heroes of the Storm. The development team continues working towards the Wine 12.0 stable release, which is expected in January 2027.",
    tags_en: ["Wine", "WineHQ", "WoW64", "FreeBSD", "Windows Emulation", "Open-Source Software", "Game Compatibility"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.14-Released", lang: "EN" }
    ]
  },
  {
    id: "20260725-030",
    trackers: ["os"],
    category: "重點關注",
    title: "Linux社群討論AI影響：從OpenBSD到Vendefoul Wolf Linux的抗AI開發趨勢",
    summary: "隨著Linus Torvalds宣布Linux非反AI專案，社群內的反AI情緒和開發趨勢日益明顯。這場爭論不僅限於技術層面，更延伸至AI倫理、數據採集合法性、環境成本及對就業市場的影響等宏觀議題。在作業系統層面，OpenBSD和NetBSD等系統已開始將LLM生成代碼視為「可疑」或「有瑕疵」，甚至要求無法版權保護的代碼不能貢獻。此外，許多大型FOSS專案（如systemd、GNOME、Wayland、Flatpak）的開發和資金來源與IBM子公司Red Hat等企業深度綁定，引發了「反企業化」的討論。在發行版層面，Vendefoul Wolf Linux等「非主流」發行版，特別是其基於Devuan的系統，以及專注於X11兼容性的KDE Plasma分支（如Sonic和Katana），代表了社群對維持獨立性和技術選擇權的努力。在瀏覽器端，Mozilla在Firefox中加入LLM功能引發用戶不滿，促使社群呼籲建立LLM-free的Firefox分支，並考慮重啟Servo引擎作為替代方案。",
    tags: ["Linux", "OpenBSD", "NetBSD", "LLM", "FOSS", "Red Hat", "Vendefoul Wolf Linux", "Firefox"],
    title_en: "Linux Community Discusses AI's Impact: Anti-AI Development Trends from OpenBSD to Vendefoul Wolf Linux",
    summary_en: "Following Linus Torvalds' announcement that Linux is not an anti-AI project, anti-AI sentiment and development trends within the community are becoming increasingly apparent. This debate is not limited to the technical layer but extends to macro issues such as AI ethics, data collection legality, environmental costs, and the impact on the job market. At the operating system level, systems like OpenBSD and NetBSD have begun treating LLM-generated code as 'suspicious' or 'flawed,' even requiring that code without copyright protection cannot be contributed. Furthermore, the development and funding sources of many large FOSS projects (such as systemd, GNOME, Wayland, and Flatpak) are deeply tied to corporations like IBM's subsidiary Red Hat, sparking discussions about 'anti-corporatization.' At the distribution level, 'niche' distributions like Vendefoul Wolf Linux, particularly its Devuan-based system, and KDE Plasma branches focused on X11 compatibility (such as Sonic and Katana), represent the community's efforts to maintain independence and technical choice. In the browser space, Mozilla's inclusion of LLM features in Firefox has caused user dissatisfaction, prompting calls within the community to establish an LLM-free Firefox branch and consider restarting the Servo engine as an alternative.",
    tags_en: ["Linux", "OpenBSD", "NetBSD", "LLM", "FOSS", "Red Hat", "Vendefoul Wolf Linux", "Firefox"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/25/anti-ai-open-source-has-an-enemy-in-common-but-almost-nothing-else/5278275", lang: "EN" }
    ]
  },
  {
    id: "20260725-031",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟宣布 Surface 系列筆電相機品質超越 Apple，Surface Laptop 與 Pro 奪冠",
    summary: "本文報導指出，微軟的 Surface 系列筆記型電腦在相機品質方面表現優異，甚至超越了 Apple 的產品。根據微軟的發言，兩款新的 Surface PC 在相機拍照能力上表現出色，其中 Surface Laptop 和 Surface Pro 獲得了最佳評價。這篇文章主要為產品比較和市場行銷資訊，未提及任何資安漏洞、CVE 編號、或技術層面的安全風險。因此，本摘要僅描述產品的市場定位與性能優勢，並無實務修補建議。",
    tags: ["Microsoft", "Surface", "Apple", "筆電", "相機品質", "產品比較"],
    title_en: "Microsoft Announces Surface Laptops with Camera Quality Exceeding Apple, Surface Laptop and Pro Take the Crown",
    summary_en: "This article reports that Microsoft's Surface series laptops exhibit excellent camera quality, even surpassing Apple's products. According to Microsoft's statements, two new Surface PCs perform excellently in camera photography, with the Surface Laptop and Surface Pro receiving the best evaluations. This article primarily contains product comparison and market marketing information, and does not mention any cybersecurity vulnerabilities, CVE IDs, or technical safety risks. Therefore, this summary only describes the product's market positioning and performance advantages, and contains no practical remediation suggestions.",
    tags_en: ["Microsoft", "Surface", "Apple", "Laptop", "Camera Quality", "Product Comparison"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/25/microsoft-reveals-its-beating-every-apple-laptop-in-camera-quality-surface-laptop-and-pro-takes-top-spot", lang: "EN" }
    ]
  }
];
