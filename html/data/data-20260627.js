// data-20260627.js — 2026-06-27
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-27"] = [
  {
    id: "20260627-001",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：發布 7.1.2、7.0.14 與 6.18.37 穩定版，包含多項重要修補",
    summary: "Linux 核心發布了三個穩定版本更新：7.1.2、7.0.14 和 6.18.37。這些更新版本各自包含了相對少量但重要的修補程式。特別指出，7.0.14 版本標誌著 7.0.x 系列的終點版本。這些核心更新旨在修補多項重要的系統漏洞，確保作業系統的穩定性與安全性。使用者應根據其發行版和需求，及時升級至最新的穩定核心版本，以修補潛在的安全風險，維持系統的正常運作。由於原文未提供具體的 CVE 編號或 CVSS 分數，建議使用者查閱各發行版（如 Ubuntu, RHEL 等）的官方安全公告，確認是否需要進行升級。",
    tags: ["Linux 核心", "Kernel", "7.1.2", "7.0.14", "6.18.37", "安全更新"],
    title_en: "Linux Kernel Updates: Release of 7.1.2, 7.0.14, and 6.18.37 Stable Versions Include Multiple Important Patches",
    summary_en: "The Linux kernel has released three stable version updates: 7.1.2, 7.0.14, and 6.18.37. Each of these updated versions includes a relatively small but important set of patches. Notably, the 7.0.14 version marks the end-of-life version for the 7.0.x series. These kernel updates aim to patch multiple critical system vulnerabilities, ensuring the stability and security of the operating system. Users should upgrade to the latest stable kernel version in a timely manner, based on their distribution and needs, to patch potential security risks and maintain normal system operation. Since the original text did not provide specific CVE IDs or CVSS scores, users are advised to consult the official security announcements of their respective distributions (such as Ubuntu, RHEL, etc.) to confirm if an upgrade is necessary.",
    tags_en: ["Linux Kernel", "Kernel", "7.1.2", "7.0.14", "6.18.37", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1079852", lang: "EN" }
    ]
  },
  {
    id: "20260627-002",
    trackers: ["os"],
    category: "Linux",
    title: "Bytedance提議「Reserved THP」功能，旨在整合HugeTLB與THP優點，提升Linux核心大頁面記憶體管理",
    summary: "本篇報導介紹了Linux核心開發者及百度騰訊工程師Qi Zheng提議的「Reserved THP」新功能。此提案旨在解決目前Linux核心中HugeTLB和Transparent Huge Page (THP) 兩大記憶體管理機制功能割裂的問題。HugeTLB具備預留和保證分配的優點，但缺乏對交換（swap）的支援；而THP雖然與核心記憶體管理整合度高且支援交換，但缺乏預留和保證分配的能力。Reserved THP的目標是結合兩者的優點：它能像HugeTLB一樣提供可預留的記憶體池，並能像THP一樣支援交換機制。開發者舉例說明，在進行熱升級（hot-upgrade）時，如果能預留部分記憶體並在升級後回收（reclaim）冷記憶體，將能大幅優化資源利用率。此提案已透過LKML patch series發布，是Linux核心記憶體管理領域的重大進展。",
    tags: ["Linux核心", "Reserved THP", "HugeTLB", "THP", "記憶體管理", "Linux kernel"],
    title_en: "Bytedance Proposes 'Reserved THP' Feature to Integrate HugeTLB and THP Advantages, Enhancing Linux Kernel Large Page Memory Management",
    summary_en: "This report introduces the 'Reserved THP' feature proposed by Linux kernel developers and Baidu/Tencent engineer Qi Zheng. This proposal aims to solve the functional fragmentation between two major memory management mechanisms in the Linux kernel: HugeTLB and Transparent Huge Page (THP). HugeTLB offers the advantage of reserved and guaranteed allocation, but lacks support for swap. Conversely, THP is highly integrated with core memory management and supports swap, but lacks the capability for reserved and guaranteed allocation. The goal of Reserved THP is to combine the advantages of both: it can provide a reservable memory pool like HugeTLB, while also supporting the swap mechanism like THP. The developer illustrates with an example that during a hot-upgrade, reserving a portion of memory and reclaiming cold memory after the upgrade would significantly optimize resource utilization. This proposal has been released through the LKML patch series, marking a major advancement in the Linux kernel memory management domain.",
    tags_en: ["Linux kernel", "Reserved THP", "HugeTLB", "THP", "Memory management", "Linux kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Reserved-THP-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260627-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux MD RAID5 軟體 RAID 效能優化：多核心、多磁碟陣列可提升至 17%",
    summary: "本篇報導介紹了一系列針對 Linux MD RAID5 軟體 RAID 程式碼的擴展性增強補丁。這些補丁主要由 Hiroshi Nishida 提出，旨在優化在擁有大量 CPU 核心和多個磁碟的 RAID 陣列上的效能。優化重點包括降低每個條帶（per-stripe）和條帶快取（stripe-cache）的競爭。根據測試，在多核心、多磁碟的 RAID5 設置中，當工作執行緒（worker threads）增加時，效能提升明顯，特別是在 RAID5 條帶處理工作執行緒的表現上，整體提升幅度可達 10% 至 17%。這些補丁目前已提交至 Linux 核心郵件清單（LKML）等待程式碼審查，適用於需要高性能軟體 RAID 解決方案的 Linux 系統管理員。",
    tags: ["Linux", "MD RAID5", "軟體 RAID", "Linux 核心", "效能優化", "LKML"],
    title_en: "Linux MD RAID5 Software RAID Performance Optimization: Multi-core, Multi-disk Arrays Can Achieve Up to 17% Improvement",
    summary_en: "This report introduces a series of scalability enhancement patches for the Linux MD RAID5 software RAID code. These patches, primarily proposed by Hiroshi Nishida, aim to optimize performance on RAID arrays featuring numerous CPU cores and multiple disks. Optimization focuses include reducing contention for each stripe and stripe cache. According to tests, in a multi-core, multi-disk RAID5 setup, performance shows significant improvement as the number of worker threads increases, particularly in the performance of RAID5 stripe processing worker threads, achieving an overall increase of 10% to 17%. These patches have been submitted to the Linux Kernel Mailing List (LKML) awaiting code review and are applicable to Linux system administrators requiring high-performance software RAID solutions.",
    tags_en: ["Linux", "MD RAID5", "Software RAID", "Linux Kernel", "Performance Optimization", "LKML"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-MD-RAID5-Scalability-Work", lang: "EN" }
    ]
  },
  {
    id: "20260627-004",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME AI 助理 Newelle 1.4.5 更新：整合 Stable Diffusion 及雲端模型支援圖像生成與編輯功能",
    summary: "GNOME 生態系統的 AI 虛擬助理 Newelle 發布了 1.4.5 版本更新。本次更新最大的亮點是加入了 AI 圖像生成支援功能，用戶可透過本地的 Stable Diffusion (使用 stablediffusion.cpp) 或設定雲端模型來實現。此外，它也支援與 OpenAI、Pollinations 和 OpenRouter 等多個雲端服務的圖像生成功能，並擴展至圖像編輯能力。除了核心功能升級外，Newelle 1.4.5 還重新設計了聊天介面，使其更為簡潔。對於使用 Flatpak 版本的用戶，本次更新增加了 STDIO MCP 伺服器支援和優化的工具延遲載入功能。用戶可從 GitHub 或 Flathub 下載此版本。",
    tags: ["GNOME", "Newelle", "AI 助理", "Stable Diffusion", "Linux", "圖像生成"],
    title_en: "GNOME AI Assistant Newelle 1.4.5 Update: Integrates Stable Diffusion and Cloud Model Support for Image Generation and Editing",
    summary_en: "Newelle, the AI virtual assistant for the GNOME ecosystem, has released version 1.4.5. The biggest highlight of this update is the addition of AI image generation support, which users can utilize either through local Stable Diffusion (using stablediffusion.cpp) or by configuring cloud models. Furthermore, it supports image generation from multiple cloud services, including OpenAI, Pollinations, and OpenRouter, and has expanded its capabilities to include image editing. In addition to core feature upgrades, Newelle 1.4.5 has also redesigned the chat interface to make it more streamlined. For users utilizing the Flatpak version, this update adds support for the STDIO MCP server and optimizes the tool lazy-loading function. Users can download this version from GitHub or Flathub.",
    tags_en: ["GNOME", "Newelle", "AI Assistant", "Stable Diffusion", "Linux", "Image Generation"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Newelle-Image-Gen", lang: "EN" }
    ]
  },
  {
    id: "20260627-005",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.7.2 即將發布，修復 KWin 多螢幕變動刷新率的常見崩潰問題",
    summary: "KDE Plasma 桌面環境的開發團隊持續進行穩定性修復。即將推出的 Plasma 6.7.2 版本，主要修復了目前最常見的 KWin 崩潰問題，特別是在多螢幕配置和變動刷新率（variable refresh rates）環境下。此外，該版本還會修復 KDE Info Center 在顯示特定 NVIDIA 顯示卡資訊時可能發生的崩潰案例，並提升 Chromium 基礎應用程式的全螢幕影片播放效能。同時，下一代 Plasma 6.8 版本也修復了從 Dolphin 或 Audex 移除音訊 CD 後可能發生的崩潰，並預設為 NVIDIA 顯示卡開啟了三重緩衝（triple buffering）功能。這些更新旨在提升使用者體驗和系統穩定性，建議使用最新版本的 Plasma 6.7.2 以避免已知崩潰問題。",
    tags: ["KDE Plasma", "Plasma 6.7.2", "KWin", "Linux 桌面環境", "變動刷新率", "NVIDIA"],
    title_en: "KDE Plasma 6.7.2 to be released, fixing common crashes related to KWin multi-monitor variable refresh rates",
    summary_en: "The KDE Plasma desktop environment development team continues to focus on stability fixes. The upcoming Plasma 6.7.2 version primarily addresses the most common KWin crash issues, especially in multi-monitor configurations and variable refresh rates environments. Additionally, this version will fix crash cases that may occur when KDE Info Center displays specific NVIDIA graphics card information, and improve the performance of full-screen video playback for Chromium-based applications. Furthermore, the next-generation Plasma 6.8 version also fixes crashes that might occur after removing audio CDs from Dolphin or Audex, and defaults to enabling triple buffering for NVIDIA graphics cards. These updates aim to enhance user experience and system stability, and users are advised to use the latest version of Plasma 6.7.2 to avoid known crash issues.",
    tags_en: ["KDE Plasma", "Plasma 6.7.2", "KWin", "Linux Desktop Environment", "Variable Refresh Rate", "NVIDIA"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-This-Week-Crashes", lang: "EN" }
    ]
  },
  {
    id: "20260627-006",
    trackers: ["os"],
    category: "Linux",
    title: "System76 推出 COSMIC-Monitor：Rust 語言建構的全新系統監控工具，取代 GNOME System Monitor",
    summary: "System76 在其 COSMIC 作業環境中，發布了全新的系統監控工具 COSMIC-Monitor。此工具旨在取代傳統的 GNOME System Monitor，與 COSMIC 桌面環境和 Pop!_OS 深度整合。從技術角度來看，COSMIC-Monitor 使用 Rust 語言編寫，並依賴 libcosmic 工具包，這使其與整個 COSMIC 堆棧保持一致性。該監控器具備全面的性能監測能力，涵蓋 CPU、程序、記憶體、GPU、磁碟和網路等關鍵系統資源的即時數據。對於使用者而言，這代表了在 Pop!_OS/COSMIC 環境下，獲得一個原生、高效能且與系統深度整合的系統資源監控介面。使用者可透過 System76 的官方部落格獲取更多資訊與截圖。",
    tags: ["System76", "COSMIC", "Pop!_OS", "COSMIC-Monitor", "Rust", "GNOME System Monitor"],
    title_en: "System76 Launches COSMIC-Monitor: A New System Monitoring Tool Built with Rust, Replacing GNOME System Monitor",
    summary_en: "System76 has released COSMIC-Monitor, a brand new system monitoring tool for its COSMIC operating environment. This tool is designed to replace the traditional GNOME System Monitor and is deeply integrated with the COSMIC desktop environment and Pop!_OS. From a technical standpoint, COSMIC-Monitor is written in the Rust language and relies on the libcosmic toolkit, ensuring consistency with the entire COSMIC stack. The monitoring utility provides comprehensive performance monitoring capabilities, covering real-time data for key system resources such as CPU, processes, memory, GPU, disk, and network. For users, this means gaining a native, high-performance, and deeply integrated system resource monitoring interface within the Pop!_OS/COSMIC environment. More information and screenshots are available on the System76 official blog.",
    tags_en: ["System76", "COSMIC", "Pop!_OS", "COSMIC-Monitor", "Rust", "GNOME System Monitor"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/COSMIC-System-Monitor", lang: "EN" }
    ]
  },
  {
    id: "20260627-007",
    trackers: ["os"],
    category: "Windows",
    title: "微軟澄清「WSL 3」不存在，取代為內建 WSL Containers 於 Windows 11 推出",
    summary: "微軟官方已澄清，目前不存在名為「WSL 3」的版本。此前流傳的資訊混淆了新功能「WSL Containers」。該功能是在 Build 2026 上發布，旨在讓開發者無需使用 Docker Desktop 等第三方工具，即可直接在 Windows 11 上建立、運行和互動 Linux 容器。WSL Containers 是一個建立在現有 WSL 基礎設施之上的新能力層，而非版本升級。它透過 wslc.exe 命令行介面，提供與 Docker 相似的語法，大幅簡化了企業環境的部署流程，並支援透過 Group Policy 或 MDM 進行管理。此外，該功能還支援透過 Container Device Interface 進行 GPU 加速工作負載，適用於如 CUDA 機器學習等場景。開發者可透過 WSL Container API 將容器功能整合到原生 Windows 應用程式邏輯中。該功能預計在一週內推出。",
    tags: ["Microsoft", "WSL Containers", "Windows 11", "Linux 容器", "Docker Desktop", "Build 2026"],
    title_en: "Microsoft clarifies that 'WSL 3' does not exist, replacing it with built-in WSL Containers in Windows 11 launch",
    summary_en: "Microsoft has officially clarified that there is no version currently named 'WSL 3'. Previously circulated information confused this with the new feature, 'WSL Containers'. This feature is set to launch in Build 2026 and aims to allow developers to build, run, and interact with Linux containers directly on Windows 11 without needing third-party tools like Docker Desktop. WSL Containers is a new capability layer built upon the existing WSL infrastructure, rather than a version upgrade. It utilizes the wslc.exe command-line interface, providing syntax similar to Docker, significantly simplifying deployment processes in enterprise environments, and supporting management via Group Policy or MDM. Furthermore, the feature supports GPU accelerated workloads through the Container Device Interface, applicable to scenarios such as CUDA machine learning. Developers can integrate container functionality into native Windows application logic using the WSL Container API. This feature is expected to be released within a week.",
    tags_en: ["Microsoft", "WSL Containers", "Windows 11", "Linux Containers", "Docker Desktop", "Build 2026"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/28/microsoft-denies-wsl-3-exists-reveals-windows-11s-wsl-containers-ship-next-week", lang: "EN" }
    ]
  },
  {
    id: "20260627-008",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 引入日曆式更新暫停與單次重啟機制，改善使用者體驗與更新管理",
    summary: "微軟透過 KB5095093 更新，為 Windows 11 用戶提供更精細的日曆式更新暫停功能。使用者現在可以在「設定」>「Windows Update」中，直接選擇一個具體的結束日期來暫停系統更新，取代了原有的固定週數選項。此功能允許用戶在旅行或忙碌期間，精準控制更新時機，但需注意，暫停期間的更新仍未永久禁用，到期後系統會自動檢查並安裝所有待處理的更新。\n此外，微軟也宣布將整合驅動程式、.NET 和韌體更新，使其與每月品質更新同步，目標是將更新流程簡化為單次每月重啟。此機制目前已在 Windows Insider 預覽通道推出，並將逐步推廣至公眾。最後，微軟修復了以往「關機」時會強制安裝待處理更新的行為，確保用戶在選擇關機時，系統不會自動執行更新。\n建議用戶留意系統更新的推送，並在必要時利用新的日曆功能進行暫停，但應注意這僅是改善使用者體驗，不應作為規避安全更新的手段。",
    tags: ["Windows 11", "KB5095093", "Windows Update", "系統更新", "使用者體驗", "單次重啟"],
    title_en: "Windows 11 introduces calendar-based update pause and single restart mechanism to improve user experience and update management",
    summary_en: "Microsoft has provided Windows 11 users with a more granular calendar-based update pause feature via the KB5095093 update. Users can now select a specific end date directly within Settings > Windows Update to pause system updates, replacing the previous fixed-week option. This feature allows users to precisely control the timing of updates during travel or busy periods. However, users should note that updates are not permanently disabled during the pause; the system will automatically check for and install all pending updates upon expiration. Furthermore, Microsoft announced the integration of driver, .NET, and firmware updates, synchronizing them with the monthly quality update to simplify the update process into a single monthly restart. This mechanism has currently been rolled out in the Windows Insider Preview channel and will be gradually extended to the public. Finally, Microsoft fixed the previous behavior where pending updates were forcibly installed upon 'shut down,' ensuring that the system will not automatically perform updates when the user selects shutdown. Users are advised to monitor system update notifications and utilize the new calendar feature for pausing when necessary, but they should note that this is intended to improve user experience and should not be used as a means to bypass security updates.",
    tags_en: ["Windows 11", "KB5095093", "Windows Update", "System Update", "User Experience", "Single Restart"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/27/windows-adds-calendar-pause-and-a-single-monthly-reboot", lang: "EN" }
    ]
  },
  {
    id: "20260627-009",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11「點時回溯」功能詳解：了解其運作機制、儲存空間佔用與修復流程",
    summary: "本文介紹了 Windows 11 新增的「點時回溯」（Point-in-time restore）系統恢復功能。此功能允許使用者在系統發生故障（如進入開機循環）時，透過回溯至過去的快照狀態來恢復系統，無需重新安裝作業系統。該功能利用 Windows 的 Volume Shadow Copy Service (VSS) 服務，在 Home、Pro 和 Enterprise 版本中皆可使用。根據微軟文件，該功能預設儲存空間限制為磁碟容量的 2%，最低 2GB，最高 50GB。該空間不會預先劃分，而是動態消耗剩餘的可用空間。預設回溯點每 24 小時建立一次，保留期為 72 小時。該功能預計在 2026 年 7 月的 Patch Tuesday 更新中全面推出，並在 2026 年 6 月的更新中已開始提供。使用者需注意，若磁碟容量小於 200GB，該功能預設不會開啟，需手動啟用。修復時，需進入 Windows Recovery Environment (WinRE) 進行操作。",
    tags: ["Windows 11", "Point-in-time restore", "VSS", "Windows Recovery Environment", "KB5095093", "系統恢復"],
    title_en: "Deep Dive into Windows 11's 'Point-in-time Restore' Feature: Understanding its Mechanism, Storage Usage, and Recovery Process",
    summary_en: "This article introduces the new 'Point-in-time restore' system recovery feature in Windows 11. This function allows users to restore the system to a previous snapshot state when a failure occurs (such as entering a boot loop), eliminating the need to reinstall the operating system. The feature utilizes Windows' Volume Shadow Copy Service (VSS) and is available in Home, Pro, and Enterprise editions. According to Microsoft documentation, the default storage limit is 2% of the disk capacity, with a minimum of 2GB and a maximum of 50GB. This space is not pre-allocated but dynamically consumes available remaining space. By default, a restore point is created every 24 hours, with a retention period of 72 hours. The feature is expected to be fully rolled out in the Patch Tuesday update in July 2026, and has already begun being provided in the June 2026 update. Users should note that if the disk capacity is less than 200GB, the feature is disabled by default and must be manually enabled. To perform a restore, users must operate within the Windows Recovery Environment (WinRE).",
    tags_en: ["Windows 11", "Point-in-time restore", "VSS", "Windows Recovery Environment", "KB5095093", "System Recovery"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/27/microsoft-warns-windows-11-recovery-feature-uses-up-to-50gb-of-storage-but-for-a-good-cause", lang: "EN" }
    ]
  },
  {
    id: "20260627-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome發布更新修補三項高風險漏洞：包含Mojo整數溢位與UAF缺陷",
    summary: "Google於6月23日發布Chrome瀏覽器更新，隨後又釋出新版本，更新至Windows與Mac平臺的149.0.7827.200與149.0.7827.201，以及Linux與Android版本149.0.7827.200，共修補三項資安漏洞。其中，CVE-2026-13281是發生在Chrome核心跨處理程序通訊框架Mojo的整數溢位缺陷；CVE-2026-13282與CVE-2026-13283則為記憶體已釋放卻仍被使用（UAF）類型，分別影響Chrome Android版的Payments與AdFilter元件。Google最新公布的漏洞皆為高風險等級，但CVE.org網站評估顯示，CVE-2026-13281可讓遠端攻擊者透過惡意檔案執行沙箱跳脫；CVE-2026-13282需本機攻擊者實體存取裝置；CVE-2026-13283則可讓遠端攻擊者透過說服使用者操作特定介面手勢執行任意程式碼。建議使用者儘速更新至最新版本，以修補這些高風險的瀏覽器漏洞。",
    tags: ["Google Chrome", "CVE-2026-13281", "CVE-2026-13282", "CVE-2026-13283", "Mojo", "整數溢位", "UAF"],
    title_en: "Google Chrome Releases Update Patching Three High-Risk Vulnerabilities: Including Mojo Integer Overflow and UAF Flaws",
    summary_en: "Google released a Chrome browser update on June 23, followed by a new version, updating to 149.0.7827.200 and 149.0.7827.201 for Windows and Mac, and version 149.0.7827.200 for Linux and Android, to patch three security vulnerabilities. Among them, CVE-2026-13281 is an integer overflow flaw occurring in Mojo, Chrome's core cross-process communication framework; CVE-2026-13282 and CVE-2026-13283 are Memory Use After Free (UAF) types, affecting the Payments and AdFilter components of Chrome Android, respectively. All vulnerabilities recently disclosed by Google are classified as high risk, but evaluations on the CVE.org website show that CVE-2026-13281 allows a remote attacker to execute a sandbox escape via a malicious file; CVE-2026-13282 requires a local attacker with physical access to the device; and CVE-2026-13283 allows a remote attacker to execute arbitrary code by persuading the user to perform specific interface gestures. Users are advised to update to the latest version promptly to patch these high-risk browser vulnerabilities.",
    tags_en: ["Google Chrome", "CVE-2026-13281", "CVE-2026-13282", "CVE-2026-13283", "Mojo", "Integer Overflow", "UAF"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176911", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260627-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "烏克蘭資安機構揭露：俄羅斯情報服務透過簡訊詐騙竊取高層帳號密碼",
    summary: "烏克蘭安全服務局（SSU）與美國聯邦調查局（FBI）共同揭露，俄羅斯情報服務長期針對烏克蘭、歐洲及美國的政府官員、軍方人員、政客及活動家，進行系統性網路攻擊。攻擊目標是竊取用戶的敏感軍事、政治和經濟資訊，以及個人資料。攻擊手法是發送偽裝成通訊平台支援機器人的簡訊，誘騙受害者透露帳號憑證。雖然原文未指明具體CVE或漏洞，但攻擊向量為社會工程學（Social Engineering）和釣魚（Phishing）。為防範此類威脅，建議用戶定期檢查通訊應用程式的活躍會話，登出未知連線，並務必啟用雙因素驗證（2FA）。此外，切勿向陌生人透露確認碼、PIN碼、密碼或帳號恢復金鑰，避免點擊可疑連結或開啟未知聊天內容的檔案。",
    tags: ["俄羅斯情報", "SSU", "FBI", "釣魚攻擊", "社會工程學", "通訊應用程式", "帳號憑證"],
    title_en: "Ukrainian Security Agency Reveals: Russian Intelligence Services Steal High-Level Account Passwords via SMS Scams",
    summary_en: "The Ukrainian Security Service (SSU) and the U.S. Federal Bureau of Investigation (FBI) jointly revealed that Russian intelligence services have been systematically targeting government officials, military personnel, politicians, and activists in Ukraine, Europe, and the United States. The attack aims to steal sensitive military, political, and economic information, as well as personal data. The attack method involves sending SMS messages disguised as communication platform support bots, tricking victims into revealing account credentials. Although the original text does not specify a particular CVE or vulnerability, the attack vectors are Social Engineering and Phishing. To prevent such threats, users are advised to regularly check active sessions on communication applications, log out of unknown connections, and ensure that Two-Factor Authentication (2FA) is enabled. Furthermore, never disclose confirmation codes, PINs, passwords, or account recovery keys to strangers, and avoid clicking suspicious links or opening unknown chat files.",
    tags_en: ["Russian Intelligence", "SSU", "FBI", "Phishing", "Social Engineering", "Communication Applications", "Account Credentials"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/ukraine-says-russian-intelligence-used.html", lang: "EN" }
    ]
  },
  {
    id: "20260627-012",
    trackers: ["os"],
    category: "Apple",
    title: "新應用程式 Mirage：實現跨越 Mac、iPad、iPhone、Vision Pro 的無線桌面螢幕共享",
    summary: "文章介紹了一款名為 Mirage 的新應用程式，它旨在為整個 Apple 生態系統提供頂級的桌面無線螢幕共享功能。使用者可以將 Mac 的桌面畫面串流到 iPhone、iPad、Vision Pro，甚至另一台 Mac 上。該應用程式強調其極低的延遲（low latency）和豐富的功能，定位為遠端使用 Mac 的一站式解決方案。這項功能對於需要跨多設備進行內容展示或遠端操作的開發者和專業人士極具實用價值。雖然原文未提供技術細節或漏洞資訊，但它代表了 Apple 生態系統在設備間互聯性與無線螢幕共享方面的最新趨勢。",
    tags: ["Mirage", "Apple 生態系統", "無線螢幕共享", "Mac", "iPadOS", "Vision Pro"],
    title_en: "New Application Mirage: Enabling Wireless Desktop Screen Sharing Across Mac, iPad, iPhone, and Vision Pro",
    summary_en: "The article introduces a new application called Mirage, which aims to provide top-tier wireless desktop screen sharing functionality across the entire Apple ecosystem. Users can stream their Mac desktop screen to an iPhone, iPad, Vision Pro, or even another Mac. The application emphasizes its low latency and rich features, positioning itself as a one-stop solution for remote Mac usage. This functionality is highly valuable for developers and professionals who require content display or remote operation across multiple devices. Although the original text does not provide technical details or vulnerability information, it represents the latest trend in device interconnectivity and wireless screen sharing within the Apple ecosystem.",
    tags_en: ["Mirage", "Apple Ecosystem", "Wireless Screen Sharing", "Mac", "iPadOS", "Vision Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/27/mirage-brings-your-mac-display-to-your-ipad-iphone-vision-pro-and-other-macs", lang: "EN" }
    ]
  },
  {
    id: "20260627-013",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Mac與iPad價格上漲：Amazon折扣優惠仍是搶購時機",
    summary: "本文報導Apple近期大幅提高多款MacBook和iPad的定價，例如MacBook Pro和MacBook Air的價格均有顯著上漲。雖然Apple官方價格已調整，但文章提醒消費者，在Amazon等第三方零售商處仍存在許多折扣優惠，許多型號的售價仍低於Apple的官方定價。受影響產品包括MacBook Neo、MacBook Air、MacBook Pro系列以及M4/M5系列iPad Air等。消費者應留意這些價格差異，並儘快行動，利用Amazon的折扣機會購買，以避免價格完全同步上漲。建議購買者應即時比對Apple官方網站與Amazon的價格，以尋找最佳的購買時機。",
    tags: ["Apple", "MacBook", "iPad", "價格上漲", "Amazon", "電子產品"],
    title_en: "Apple Mac and iPad Price Hikes: Amazon Discounts Remain Prime Shopping Opportunity",
    summary_en: "This article reports that Apple has recently significantly raised the prices of multiple MacBook and iPad models, with notable increases in the pricing of devices like the MacBook Pro and MacBook Air. Although Apple's official prices have been adjusted, the article reminds consumers that many discounts are still available at third-party retailers like Amazon, and the selling prices for many models remain lower than Apple's official retail price. Affected products include the MacBook Neo, MacBook Air, MacBook Pro series, and M4/M5 series iPad Air. Consumers should pay attention to these price discrepancies and act quickly to take advantage of Amazon's discounts, thereby avoiding a complete synchronization of price increases. Buyers are advised to compare prices between the Apple official website and Amazon in real-time to find the best purchasing opportunity.",
    tags_en: ["Apple", "MacBook", "iPad", "Price Hike", "Amazon", "Electronics"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/27/psa-apples-price-increases-arent-yet-in-effect-on-amazon-act-quick", lang: "EN" }
    ]
  },
  {
    id: "20260627-014",
    trackers: ["os"],
    category: "Apple",
    title: "撰文者分享部署 Windows PC 的經驗，凸顯 macOS 在企業部署與整合上的優勢",
    summary: "本文為一篇個人觀察分享，撰文者描述了需要為特定任務部署一台 Windows PC（Dell 筆電）的經驗。透過這個過程，撰文者深刻體會到 Apple 在 macOS 系統和整體企業部署流程上的高度整合性與優越性。文章並未提及任何特定的漏洞、CVE 編號或技術細節，而是從使用者體驗的角度，強調了 Apple 生態系統在設備管理、部署和整體工作流程上的便利性與完善度。這篇文章屬於產品使用心得分享，而非資安事件報導，但間接強調了 Apple 平台在企業級環境的穩定性和易用性。",
    tags: ["macOS", "企業部署", "Apple 生態系統", "Windows 比較", "設備管理"],
    title_en: "Author shares experience deploying Windows PC, highlighting macOS's advantages in enterprise deployment and integration",
    summary_en: "This article is a personal observation and sharing, where the author describes the experience of needing to deploy a Windows PC (Dell laptop) for specific tasks. Through this process, the author deeply realized Apple's high level of integration and superiority in the macOS system and overall enterprise deployment workflow. The article does not mention any specific vulnerabilities, CVE IDs, or technical details, but rather emphasizes, from a user experience perspective, the convenience and completeness of the Apple ecosystem in device management, deployment, and overall workflow. This article is a product usage review, not a cybersecurity incident report, but indirectly highlights the stability and ease of use of the Apple platform in enterprise-grade environments.",
    tags_en: ["macOS", "Enterprise Deployment", "Apple Ecosystem", "Windows Comparison", "Device Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/27/apple-work-deploying-a-new-pc-made-me-appreciate-everything-apple-built-into-macos", lang: "EN" }
    ]
  },
  {
    id: "20260627-015",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "第三方供應商風險警示：教育部門面臨系統性威脅，需強化身份與漏洞管理",
    summary: "教育部門因其混合了舊有技術與大量學生個人資料的特性，成為網路犯罪集團的目標。根據報告指出，第三方系統的漏洞是主要的感染途徑，且單一應用程式的崩潰可能影響數千個機構。文章提及多起重大事件，包括利用 Oracle E-Business Suite 的零日漏洞、攻擊 Instructure 的 Canvas 學習管理系統，以及 2023 年利用 MOVEit 應用程式的大規模資料外洩事件。這些事件凸顯了教育機構在管理第三方風險上的巨大挑戰。專家建議，教育機構必須建立完善的第三方風險管理計畫，要求供應商在合約上承擔漏洞通知、審計權和事件應變能力等責任。同時，學校應主動控制身份層級，實施強化的單點登入（SSO）和多因素驗證（MFA），並建立自身的漏洞管理與修補機制。",
    tags: ["教育部門", "第三方風險", "SaaS", "MOVEit", "Canvas", "SSO", "MFA"],
    title_en: "Third-Party Vendor Risk Alert: Education Sector Faces Systemic Threats and Must Strengthen Identity and Vulnerability Management",
    summary_en: "Due to its nature of combining legacy technology with vast amounts of student personal data, the education sector has become a prime target for cybercrime groups. Reports indicate that vulnerabilities in third-party systems are the primary infection vector, and the failure of a single application can impact thousands of institutions. The article mentions several major incidents, including the exploitation of a zero-day vulnerability in Oracle E-Business Suite, attacks on the Instructure Canvas Learning Management System, and the large-scale data leak in 2023 utilizing the MOVEit application. These incidents highlight the immense challenges educational institutions face in managing third-party risk. Experts recommend that educational institutions must establish comprehensive third-party risk management plans, requiring vendors to assume contractual responsibility for vulnerability notification, audit rights, and incident response capabilities. Furthermore, schools should proactively control identity levels, implement enhanced Single Sign-On (SSO) and Multi-Factor Authentication (MFA), and establish their own vulnerability management and patching mechanisms.",
    tags_en: ["Education Sector", "Third-Party Risk", "SaaS", "MOVEit", "Canvas", "SSO", "MFA"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyber-risk/third-party-breaches-teaches-education-lesson-vendor-risk", lang: "EN" }
    ]
  },
  {
    id: "20260627-016",
    trackers: ["security"],
    category: "前瞻技術",
    title: "OpenAI 推出 GPT-5.6 Sol 等新模型，強化資安能力並限時提供給政府機構",
    summary: "OpenAI 近期發布了三種版本的 GPT-5.6，包括旗艦模型 Sol、效率平衡的 Terra，以及專注於速度的 Luna。特別是 Sol 模型，被強調具備了目前最完善的安全架構，並針對高風險活動和網路資安請求進行了強化。該模型被譽為在網路資安領域能力最強，適用於漏洞研究、補丁開發、除錯和防禦性測試。OpenAI 表示，這項技術旨在協助防禦方尋找弱點並加強系統，同時透過強大的防護機制阻止攻擊性行為。儘管模型在發現漏洞和開發 Exploit 方面表現出色，但 OpenAI 警告其能力仍無法執行自主的端到端攻擊或武器化漏洞。此外，OpenAI 甚至展示了 GPT-5.6 能夠透過內部框架 VulnLMP，產生可信的記憶體安全漏洞線索，顯示了實體漏洞研究的自動化趨勢。由於技術的「雙重用途」性質，OpenAI 提醒用戶在預覽階段可能會遇到限制或需要額外審核。此舉與美國政府對 AI 模型能力評估的關注，以及其他 AI 公司（如 Anthropic）逐步恢復其資安模型市場准入的趨勢一致。",
    tags: ["OpenAI", "GPT-5.6", "Sol", "漏洞研究", "資安模型", "AI 攻擊工具與防禦"],
    title_en: "OpenAI Launches New Models Including GPT-5.6 Sol, Enhancing Cybersecurity Capabilities and Offering Limited Access to Government Agencies",
    summary_en: "OpenAI recently released three versions of GPT-5.6: the flagship model Sol, the efficiency-balanced Terra, and the speed-focused Luna. The Sol model, in particular, is highlighted for possessing the most comprehensive security architecture to date, with enhancements specifically targeting high-risk activities and cybersecurity requests. This model is touted as having the strongest capabilities in the cybersecurity domain, suitable for vulnerability research, patch development, debugging, and defensive testing. OpenAI stated that this technology aims to assist defenders in finding weaknesses and strengthening systems, while simultaneously preventing malicious behavior through robust defense mechanisms. Although the model performs excellently in discovering vulnerabilities and developing exploits, OpenAI warns that its capabilities cannot execute autonomous end-to-end attacks or weaponize vulnerabilities. Furthermore, OpenAI even demonstrated that GPT-5.6 can generate credible memory safety vulnerability leads using an internal framework, VulnLMP, showcasing the trend toward automated physical vulnerability research. Due to the 'dual-use' nature of the technology, OpenAI reminds users that they may encounter limitations or require additional review during the preview phase. This move aligns with the U.S. government's focus on evaluating AI model capabilities, and the trend of other AI companies (such as Anthropic) gradually restoring market access for their cybersecurity models.",
    tags_en: ["OpenAI", "GPT-5.6", "Sol", "Vulnerability Research", "Cybersecurity Model", "AI Attack Tools and Defense"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/06/openai-limits-gpt-56-rollout-as-sol.html", lang: "EN" }
    ]
  },
  {
    id: "20260627-017",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果爭取美國政府批准採購中國記憶體晶片，應對全球供應鏈與價格上漲壓力",
    summary: "根據《金融時報》報導，蘋果公司（Apple）正向美國政府遊說，爭取購買來自被列入黑名單的中國晶片製造商 CXMT 的記憶體晶片。該中國公司因涉嫌與解放軍有關，已被五角大廈列入黑名單。蘋果此舉旨在應對全球記憶體供應短缺，以及近期因晶片價格上漲而導致的 Mac 和 iPad 等產品價格大幅提高所面臨的財務壓力。雖然蘋果技術上可以從中國供應商採購晶片，但五角大廈的限制使此事複雜化。蘋果執行長 Tim Cook 表示，為了確保供應鏈的穩定性，公司願意考慮所有供應來源，包括中國晶片公司。這顯示蘋果正在積極尋求解決方案，以緩解供應鏈和成本上升帶來的衝擊。",
    tags: ["Apple", "CXMT", "記憶體晶片", "供應鏈", "美國政府", "晶片短缺"],
    title_en: "Apple Seeks US Government Approval to Purchase Chinese Memory Chips Amid Global Supply Chain and Price Hike Pressures",
    summary_en: "According to the Financial Times, Apple is lobbying the US government to purchase memory chips from CXMT, a Chinese chip manufacturer listed on a blacklist. The Chinese company was blacklisted by the Pentagon due to alleged ties with the PLA. Apple's move aims to address global memory supply shortages and the financial pressure resulting from significant price increases for products like Mac and iPad due to recent chip price hikes. Although Apple is technically capable of sourcing chips from Chinese suppliers, the Pentagon's restrictions complicate the matter. Apple CEO Tim Cook stated that to ensure supply chain stability, the company is willing to consider all sources of supply, including Chinese chip companies. This indicates that Apple is actively seeking solutions to mitigate the impact of supply chain and cost increases.",
    tags_en: ["Apple", "CXMT", "Memory Chips", "Supply Chain", "US Government", "Chip Shortage"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/26/apple-asks-trump-admin-to-approve-chinese-ram-after-product-price-increases", lang: "EN" }
    ]
  },
  {
    id: "20260627-018",
    trackers: ["os"],
    category: "重點關注",
    title: "葡萄牙 Amble 發布 One 電動 Buggy：結合 Apple 設計美學與輕量化 L7e 級別設計",
    summary: "葡萄牙的 Amble 公司推出 Amble One，這是一款專為短程、輕型移動設計的電動 Buggy。該車型設計風格受到 Apple 產品的啟發，具備極具現代感的外觀。Amble One 定位為 L7e 級別的輕型電動車，這要求車輛的車重必須控制在 450 公斤以下，使其能在歐洲公共道路上合法行駛。該車型具備超過 60 英里的續航里程，最高時速限制為 40 英里/小時，且可在標準家用插座充電五小時。其開放式、無門設計除了美學考量外，也是達成極低車重的重要結構組成。這款車旨在滿足在海岸步道、私人莊園等非傳統路況下的移動需求，代表了輕型電動車的新品類。",
    tags: ["Amble", "Amble One", "電動車", "L7e", "輕型電動車", "Apple 設計"],
    title_en: "Portugal's Amble Launches One Electric Buggy: Combining Apple Design Aesthetics with Lightweight L7e Classification",
    summary_en: "Portugal's Amble company has launched the Amble One, an electric buggy designed for short-range, light-duty mobility. The vehicle's design style is inspired by Apple products, featuring a highly modern aesthetic. The Amble One is classified as an L7e light electric vehicle, which mandates that the vehicle's weight must be kept below 450 kg to ensure legal operation on European public roads. The model boasts a range exceeding 60 miles, a maximum speed limit of 40 mph, and can charge in five hours using a standard household outlet. Its open, doorless design is crucial not only for aesthetics but also for achieving the extremely low weight. This vehicle is designed to meet mobility needs in non-traditional environments such as coastal paths and private estates, representing a new category in light electric vehicles.",
    tags_en: ["Amble", "Amble One", "Electric Vehicle", "L7e", "Light Electric Vehicle", "Apple Design"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/cars/2026/06/apple-and-audi-alumni-have-made-a-luxe-ev-based-on-the-moon-buggy", lang: "EN" }
    ]
  },
  {
    id: "20260627-019",
    trackers: ["os"],
    category: "重點關注",
    title: "開源影片編輯軟體 Shotcut 26.6 發布：強化 HDR 支援與 Linux Vulkan 顯示模式",
    summary: "開源跨平台影片編輯軟體 Shotcut 發布了 26.6 版本。本次更新主要著重於提升高動態範圍（HDR）內容的支援度，包括新增 HDR 預覽視窗、在時間軸屬性中顯示動態範圍資料，並支援使用 GPU 模式將內容轉換為 HDR，同時也增加了 HDR 輸出支援。此外，Shotcut 26.6 提升了插件功能，新增了 RNNoise 音訊濾波器，並在 Linux 系統上增加了選擇 Vulkan 顯示模式的選項。本次版本也更新了依賴庫，改用 FFmpeg 8.1.2 和 MLT 7.40 框架，並修復了多個錯誤。使用者可透過 Shotcut.org 下載最新版本。",
    tags: ["Shotcut", "26.6", "HDR", "Vulkan", "FFmpeg", "開源軟體"],
    title_en: "Open-Source Video Editor Shotcut 26.6 Released: Enhanced HDR Support and Linux Vulkan Display Mode",
    summary_en: "The open-source cross-platform video editor Shotcut has released version 26.6. This update primarily focuses on improving support for High Dynamic Range (HDR) content, including the addition of an HDR preview window, displaying dynamic range data in the timeline properties, and supporting the conversion of content to HDR using GPU mode, along with enhanced HDR output support. Furthermore, Shotcut 26.6 improves plugin functionality by adding the RNNoise audio filter and introduces the option to select a Vulkan display mode on Linux systems. This version also updates dependency libraries, adopting FFmpeg 8.1.2 and the MLT 7.40 framework, and fixes multiple bugs. Users can download the latest version from Shotcut.org.",
    tags_en: ["Shotcut", "26.6", "HDR", "Vulkan", "FFmpeg", "Open-Source Software"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Shotcut-26.6-Released", lang: "EN" }
    ]
  },
  {
    id: "20260627-020",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "AI 輔助工具潛在風險：研究警告 AI 編碼助手可能讓惡意程式碼執行系統指令",
    summary: "隨著 AI 在軟體開發和資安領域的應用日益廣泛，研究人員警告，許多 AI 編碼輔助工具（如 GitHub Copilot 等）可能存在嚴重的安全漏洞。這些工具在執行專案配置或生成程式碼時，可能會無意間或被惡意利用，導致執行超出預期的系統指令。攻擊者可以利用此機制，在看似安全的專案環境中植入惡意程式碼，從而竊取雲端憑證或執行任意命令。這類漏洞的風險點在於 AI 輔助工具的「信任邊界」模糊化，使得開發者難以區分哪些程式碼是安全的，哪些是潛在的攻擊載體。資安團隊應提高警覺，特別是當專案配置或外部輸入被 AI 處理時，必須實施嚴格的程式碼審核和沙盒機制，並考慮使用更安全的、經過驗證的開發流程來減緩風險。",
    tags: ["AI", "編碼助手", "安全漏洞", "雲端憑證", "供應鏈", "程式碼執行"],
    title_en: "Potential Risks of AI Assistance Tools: Research Warns AI Coding Assistants May Allow Execution of System Commands by Malicious Code",
    summary_en: "As AI application expands across software development and cybersecurity, researchers warn that many AI coding assistance tools (such as GitHub Copilot) may contain serious security vulnerabilities. When these tools execute project configurations or generate code, they could unintentionally or maliciously lead to the execution of system commands beyond expectations. Attackers can exploit this mechanism to inject malicious code into seemingly secure project environments, thereby stealing cloud credentials or executing arbitrary commands. The risk point of these vulnerabilities lies in the blurring of the 'trust boundary' of AI assistance tools, making it difficult for developers to distinguish which code is safe and which is a potential attack vector. Cybersecurity teams should raise awareness, and when project configurations or external inputs are processed by AI, strict code review and sandbox mechanisms must be implemented, while also considering the use of more secure, validated development processes to mitigate risk.",
    tags_en: ["AI", "Coding Assistant", "Vulnerability", "Cloud Credentials", "Supply Chain", "Code Execution"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/06/27/its-looking-like-a-hot-messy-summer-for-security-teams-as-ai-finds-countless-previously-hidden-vulns/5260478", lang: "EN" }
    ]
  },
  {
    id: "20260627-021",
    trackers: ["os"],
    category: "uncategorized",
    title: "N/A",
    summary: "N/A",
    tags: [],
    title_en: "N/A",
    summary_en: "N/A",
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/27/nasa-tests-ai-medic-for-astronauts-too-far-from-earth-to-call-a-doctor/5262828", lang: "EN" }
    ]
  }
];
