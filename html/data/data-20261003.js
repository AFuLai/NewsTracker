// data-20261003.js — 2026-10-03
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-03"] = [
  {
    id: "20261003-14603",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心發布多個穩定版本，包含多項重要修補程式，建議使用者立即升級",
    summary: "Linux 核心開發者 Greg Kroah-Hartman 宣布發布了多個穩定版本的 Linux 核心。這些版本包括 7.2.9、6.18.55、6.12.112、6.6.158、6.1.189、5.15.222 和 5.10.271 等。每一次的發布都包含了樹狀結構中大量重要的修補程式。文章建議所有使用者應立即升級到這些最新的穩定核心版本，以確保系統的穩定性與安全性。由於原文未提供具體漏洞或修補細節，僅強調了整體修補的必要性，建議使用者應遵循發行版官方的升級指引。",
    tags: ["Linux 核心", "Greg Kroah-Hartman", "7.2.9", "6.18.55", "安全修補"],
    title_en: "Linux Kernel Releases Multiple Stable Versions with Critical Patches; Users Advised to Upgrade Immediately",
    summary_en: "Linux kernel developer Greg Kroah-Hartman announced the release of multiple stable versions of the Linux kernel. These versions include 7.2.9, 6.18.55, 6.12.112, 6.6.158, 6.1.189, 5.15.222, and 5.10.271. Each release incorporates numerous critical patches across the kernel's codebase. The article advises all users to upgrade immediately to these latest stable kernel versions to ensure system stability and security. Since the original text does not provide specific vulnerability or patch details, it emphasizes the necessity of overall patching, and users are advised to follow their respective distribution's official upgrade guidelines.",
    tags_en: ["Linux Kernel", "Greg Kroah-Hartman", "7.2.9", "6.18.55", "Security Patch"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1098404", lang: "EN" }
    ]
  },
  {
    id: "20261003-14615",
    trackers: ["os"],
    category: "Linux",
    title: "Valve 團隊透過 AMDGPU 核心驅動，大幅提升老舊 AMD GCN 1.0/1.1 顯示卡在 Linux 上的遊戲效能",
    summary: "Valve 團隊的 Timur Kristóf 在 XDC2026 上分享了其針對老舊 AMD GCN 1.0/1.1 世代顯示卡和 APU 的 AMDGPU 核心驅動程式的重大改進工作。這些改進旨在讓這些年代久遠的硬體能在 Linux 環境下更好地支援遊戲和日常任務。Kristóf 的工作將這些舊卡從傳統的 Radeon 驅動程式過渡到現代的 AMDGPU 核心驅動，這不僅能啟用 RADV Vulkan 驅動，還大幅提升了效能和整體功能性。在改進過程中，團隊修復了 AMDGPU 顯示程式碼中針對舊卡的多個缺陷，並解決了各種電源管理問題，甚至加入了軟重置支援等增強功能。這項工作讓這些老舊的顯示卡在 2026 年及以後的 Linux 遊戲使用中更具可行性。這項努力彌補了 AMD 在多年來對這些老舊驅動程式改進資源投入不足的空缺，為使用者帶來顯著的體驗提升。",
    tags: ["Valve", "AMDGPU", "Linux", "GCN 1.0/1.1", "Radeon", "Vulkan"],
    title_en: "Valve Team Significantly Boosts Gaming Performance for Older AMD GCN 1.0/1.1 Graphics Cards on Linux via AMDGPU Core Driver",
    summary_en: "Timur Kristóf of the Valve team shared significant improvements to the AMDGPU core driver, specifically targeting older AMD GCN 1.0/1.1 generation graphics cards and APUs, at XDC2026. These enhancements aim to improve the support for gaming and general tasks on these older pieces of hardware within the Linux environment. Kristóf's work transitions these older cards from the traditional Radeon driver to the modern AMDGPU core driver. This not only enables the RADV Vulkan driver but also significantly boosts performance and overall functionality. During the improvement process, the team fixed multiple defects in the AMDGPU display code related to older cards and resolved various power management issues, even adding enhanced features like soft reset support. This effort makes these older graphics cards more viable for Linux gaming use in 2026 and beyond. This work compensates for AMD's historical lack of dedicated resources for improving these legacy drivers, providing users with a noticeable enhancement in experience.",
    tags_en: ["Valve", "AMDGPU", "Linux", "GCN 1.0/1.1", "Radeon", "Vulkan"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/XDC-2026-Valve-Timur-AMDGPU", lang: "EN" }
    ]
  },
  {
    id: "20261003-14616",
    trackers: ["os"],
    category: "Linux",
    title: "Linaro 提交 核心補丁：優化 Linux 排程器，顯著降低短任務的延遲與峰值延遲",
    summary: "Linaro 工程師 Vincent Guittot 近期發布了一組包含 18 個補丁，專門針對 Linux 核心的排程器（scheduler）程式碼進行優化。這些改動旨在改善系統在多個短任務同時運行時的排程延遲。對於終端使用者而言，這些補丁透過使用 cyclictest 和 Hackbench 等基準測試工具進行壓力測試，展示了顯著的性能提升，特別是在觀察到的峰值延遲（peak latency）方面。除了降低延遲外，這些排程器改進還包括實作正向延遲的衰減機制（decay of positive lag），以及在選擇 CPU 時考慮任務切片（slice）等其他調整。這些補丁是基於 Guittot 近期針對 Linux 核心排程器缺陷所進行的工作，旨在提升系統的整體響應速度與穩定性。相關的詳細數據和技術細節已在郵件清單（mailing list）上公開。",
    tags: ["Linux 核心", "排程器", "Linaro", "latency", "cyclictest", "scheduler"],
    title_en: "Linaro Submits Core Patches: Optimizing Linux Scheduler to Significantly Reduce Short Task Latency and Peak Latency",
    summary_en: "Linaro engineer Vincent Guittot recently released a set of 18 patches specifically optimizing the Linux kernel's scheduler code. These changes aim to improve scheduling latency when multiple short tasks run concurrently. For end-users, these patches demonstrated significant performance improvements, particularly in observed peak latency, through stress testing using benchmark tools like cyclictest and Hackbench. In addition to reducing latency, these scheduler improvements include implementing a decay mechanism for positive lag, as well as other adjustments such as considering task slice when selecting a CPU. These patches build upon Guittot's recent work addressing Linux kernel scheduler deficiencies, aiming to enhance overall system responsiveness and stability. Detailed data and technical specifications have been published on the mailing list.",
    tags_en: ["Linux Kernel", "Scheduler", "Linaro", "latency", "cyclictest", "scheduler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Latency-Short-Slice-Tasks", lang: "EN" }
    ]
  },
  {
    id: "20261003-14617",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 桌面新增 Moose：提供基於 Ollama 的本地 AI 聊天應用程式",
    summary: "本文介紹了一款名為 Moose 的第三方應用程式，它為 GNOME 桌面提供了一個本地 AI 聊天選項。Moose 是一款原生使用 GTK 和 libadwaita 的應用程式，允許使用者在 Linux 環境下透過 Ollama 與 AI 模型進行聊天。該應用程式具備設定 Ollama 環境並管理大型語言模型（LLMs）的功能，並且支援載入本地文件和圖片，並能與 GNOME 桌面環境進行整合。Moose 已透過 Flathub 發布，其基於 Rust 的 GPLv3 原始碼也可在 GitHub 上取得。此外，文章也提及 GNOME Calendar 應用程式進行了多項改進，提升了使用者體驗，以及 Toolpak 專案在圖像系統方面的發表。",
    tags: ["GNOME", "Moose", "Ollama", "GTK", "Linux", "AI 應用程式"],
    title_en: "GNOME Desktop Adds Moose: A Local AI Chat Application Based on Ollama",
    summary_en: "This article introduces Moose, a third-party application that provides a local AI chat option for the GNOME desktop. Moose is a native application built with GTK and libadwaita, allowing users to chat with AI models using Ollama within a Linux environment. The application features the ability to set up the Ollama environment and manage Large Language Models (LLMs), and supports loading local files and images, while also integrating with the GNOME desktop environment. Moose is available via Flathub, and its GPLv3 source code, which is based on Rust, can also be obtained on GitHub. Furthermore, the article mentions several improvements to the GNOME Calendar application, enhancing the user experience, as well as the release of the Toolpak project concerning image systems.",
    tags_en: ["GNOME", "Moose", "Ollama", "GTK", "Linux", "AI Application"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Moose-Local-AI", lang: "EN" }
    ]
  },
  {
    id: "20261003-14619",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 核心更新支援 Raspberry Pi 10吋觸控螢幕 2 與 Ryzen AI NPU",
    summary: "本次 Linux 7.4 核心的更新主要透過 DRM-Misc-Next pull request 進行，新增了多項硬體支援。其中最引人注目的是為今年夏季推出的 Raspberry Pi 10吋觸控螢幕 2 增加了支援。該螢幕為 MIPI-DSI TFT LCD 面板，具備 Ilitek IL79600A 控制器，支援 1200 x 1920 解析度與多點觸控輸入。此外，本次更新也加入了對 Ryzen AI Max 400 系列「Gorgon Halo」的 NPU 支援，只需新增設備 ID 即可啟用 AIE2 Revision 9 NPU。同時，Renesas DRM 驅動程式也擴展了對 RZ/G3L SoC 的支援，這些改動顯示了 Linux 核心持續擴展對新硬體的兼容性。",
    tags: ["Linux 7.4", "Raspberry Pi", "DRM-Misc-Next", "NPU", "Ryzen AI", "MIPI-DSI"],
    title_en: "Linux 7.4 Kernel Update Supports Raspberry Pi 10-inch Touchscreen 2 and Ryzen AI NPU",
    summary_en: "This Linux 7.4 kernel update, primarily implemented through the DRM-Misc-Next pull request, introduces several hardware supports. Most notable is the addition of support for the Raspberry Pi 10-inch Touchscreen 2, which is an MIPI-DSI TFT LCD panel featuring an Ilitek IL79600A controller, supporting 1200 x 1920 resolution and multi-touch input. Furthermore, this update includes support for the Ryzen AI Max 400 series's 'Gorgon Halo' NPU, which can be enabled simply by adding the device ID to activate the AIE2 Revision 9 NPU. Concurrently, the Renesas DRM driver has expanded its support for the RZ/G3L SoC, demonstrating the Linux kernel's continuous expansion of compatibility with new hardware.",
    tags_en: ["Linux 7.4", "Raspberry Pi", "DRM-Misc-Next", "NPU", "Ryzen AI", "MIPI-DSI"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-74-RPi-10-Touch-Display-2", lang: "EN" }
    ]
  },
  {
    id: "20261003-14620",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：強化對 Turtle Beach VelocityOne Race 賽車設備的支援",
    summary: "本次 Linux 7.3-rc6 核心版本發布，為 Linux 模擬賽車社群帶來重要更新，特別是增加了對 Turtle Beach VelocityOne Race 高階賽車輪與踏板系統的支援。雖然 Turtle Beach 未正式支援 Linux，但透過新增的 `hid-universal-pidff` 驅動程式，使得 VelocityOne Race 設備能夠更好地在 Linux 環境下運作。此驅動程式原為去年為改善 Linux 模擬賽車設備支援而開發，已協助解決多品牌賽車輪/踏板的相容性問題。本次更新僅需透過供應商與設備 ID 即可整合，確保了在 Linux 7.3 核心開發後期階段的穩定性。此外，本次 HID 整合拉取（pull）還修復了 Intel THC 驅動程式中的部分緩衝區溢出漏洞，並針對 Sashiko AI 的發現進行了修復，但同時也因錯誤過多而撤銷了 Logitech Bolt Receiver HID++ 的支援。",
    tags: ["Linux 7.3", "Turtle Beach", "VelocityOne Race", "hid-universal-pidff", "核心更新", "模擬賽車"],
    title_en: "Linux 7.3 Kernel Update: Enhanced Support for Turtle Beach VelocityOne Race Racing Equipment",
    summary_en: "The release of the Linux 7.3-rc6 kernel version brings significant updates to the Linux simulation racing community, notably adding support for the high-end racing wheel and pedal system of the Turtle Beach VelocityOne Race. Although Turtle Beach does not officially support Linux, the newly added `hid-universal-pidff` driver allows the VelocityOne Race equipment to function better in a Linux environment. This driver was originally developed last year to improve support for various Linux simulation racing devices, helping to solve compatibility issues across multiple brands of racing wheels/pedals. This update only requires integration via the supplier and device ID, ensuring stability during the late development phase of the Linux 7.3 kernel. Furthermore, this HID integration pull also patched several buffer overflow vulnerabilities in the Intel THC driver and addressed issues discovered by Sashiko AI, but simultaneously reverted support for the Logitech Bolt Receiver HID++ due to excessive errors.",
    tags_en: ["Linux 7.3", "Turtle Beach", "VelocityOne Race", "hid-universal-pidff", "Kernel Update", "Sim Racing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-TB-VelocityOne-Race", lang: "EN" }
    ]
  },
  {
    id: "20261003-14621",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 更新：修復平鋪視窗邊角圓角問題，提升與 Windows 系統一致性",
    summary: "KDE Plasma 桌面環境即將發布 6.8 版本，本次更新主要修復了平鋪（tiled）視窗的邊角圓角問題。根據 2024 年的 Bug 報告，當視窗處於平鋪模式時，應禁用圓角，以達到與 Microsoft Windows 等主流作業系統一致的視覺效果。此外，Plasma 6.8 還包含多項穩定性修復，包括修復了 KWin 在使用 NVIDIA 610.57.04 或更新的顯示驅動程式時可能崩潰的問題，以及修復了拖曳小工具至面板時的崩潰。同時，本次版本也改善了遠端桌面認證與 FreeRDP 3.32 或更高版本的相容性，並提升了系統監控器（System Monitor）對 GPU 記憶體使用量的測量準確性。",
    tags: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "NVIDIA", "FreeRDP"],
    title_en: "KDE Plasma 6.8 Update: Fixes Tiled Window Corner Radius Issue, Improves Consistency with Windows Systems",
    summary_en: "The KDE Plasma desktop environment is preparing to release version 6.8. This update primarily addresses an issue with corner radii on tiled windows. According to 2024 bug reports, when windows are in tiled mode, the corner radius should be disabled to achieve a visual consistency with mainstream operating systems like Microsoft Windows. Furthermore, Plasma 6.8 includes multiple stability fixes, including resolving a potential crash in KWin when using NVIDIA 610.57.04 or newer display drivers, and fixing a crash that occurred when dragging widgets to the panel. Additionally, this version improves compatibility for remote desktop authentication with FreeRDP 3.32 or higher, and enhances the accuracy of System Monitor's measurement of GPU memory usage.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "NVIDIA", "FreeRDP"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-Tiled-Windows", lang: "EN" }
    ]
  },
  {
    id: "20261003-14637",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Anthropic Mythos 模型發現 Rejetto HFS 關鍵漏洞 CVE-2026-61500，可達成遠端代碼執行",
    summary: "資安研究人員 Zach Hanley 利用 Anthropic 的漏洞狩獵模型 Mythos，在 Rejetto HTTP File Server (HFS) 中發現了一個關鍵的身份驗證繞過漏洞，編號為 CVE-2026-61500。該漏洞允許攻擊者達到完整的管理員權限和遠端代碼執行（RCE）。HFS 是一個開源的網頁文件伺服器，此漏洞的發現凸顯了 AI 模型在數學和系統分析方面的強大能力。漏洞的根本原因在於 HFS 使用的 `Math.random()` 函數沒有採用安全的偽隨機數生成器（PRNG），且應用程式洩漏了 `Math.random()` 的輸出。Mythos 模型利用 Z3 這種可滿足性模組理論（SMT）求解器，成功推導出 PRNG 的種子，從而能夠偽造有效的會話 Cookie。研究人員建議所有使用 Rejetto HFS 的用戶應立即更新至 v3.2.1 或更高版本以修補此漏洞。此外，報告指出該漏洞已在野外被利用，且攻擊活動曾從中國的 IP 位址鎖定美國和日本的目標主機。",
    tags: ["Rejetto HFS", "CVE-2026-61500", "Anthropic", "Mythos", "遠端代碼執行", "身份驗證繞過"],
    title_en: "Anthropic's Mythos Model Discovers Critical Vulnerability CVE-2026-61500 in Rejetto HFS, Enabling Remote Code Execution",
    summary_en: "Security researcher Zach Hanley utilized Anthropic's vulnerability hunting model, Mythos, to discover a critical authentication bypass vulnerability, CVE-2026-61500, in Rejetto HTTP File Server (HFS). This vulnerability allows an attacker to achieve full administrator privileges and Remote Code Execution (RCE). HFS is an open-source web file server, and the discovery highlights the powerful capabilities of AI models in mathematical and system analysis. The root cause of the vulnerability is that HFS uses the `Math.random()` function without employing a secure Pseudo-Random Number Generator (PRNG), and the application leaks the output of `Math.random()`. The Mythos model successfully deduced the PRNG seed using a Satisfiability Modulo Theories (SMT) solver like Z3, thereby enabling the forging of valid session cookies. The researcher advises all users of Rejetto HFS to immediately update to v3.2.1 or higher to patch this vulnerability. Furthermore, the report indicates that the vulnerability has been exploited in the wild, and attack activity was observed targeting US and Japanese hosts from Chinese IP addresses.",
    tags_en: ["Rejetto HFS", "CVE-2026-61500", "Anthropic", "Mythos", "Remote Code Execution", "Authentication Bypass"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/10/03/anthropics-super-bug-hunting-model-mythos-is-hardcore-good-at-math-as-latest-vuln-under-attack-shows/5300933", lang: "EN" }
    ]
  },
  {
    id: "20261003-14661",
    trackers: ["os"],
    category: "Windows",
    title: "WinUI 框架缺乏經典 Windows 滾動條快捷鍵：Microsoft 現代化應用程式的基礎功能缺失",
    summary: "本文介紹了一個在 Windows 2000 時代就存在的、但逐漸被現代框架忽略的滾動條快捷鍵：按住 Shift 並點擊滾動條，可以讓視窗直接跳轉到該點位。這個功能在 Win32、WPF，甚至 Electron 等應用程式中都能正常運作，極大地提升了閱讀長篇 PDF 或文件時的效率。然而，文章指出，用於現代 Windows 11 應用程式的 WinUI 框架卻缺乏此基礎功能。這使得 WinUI 在實現核心使用者體驗方面出現了不一致性。雖然 Microsoft 已經在修復 WinUI 的性能和基礎錯誤，但像這種簡單的、跨越多個 Windows 版本的基礎快捷鍵的缺失，顯示出 WinUI 在整合和完善基礎使用者介面細節時仍面臨挑戰。開發者已在 GitHub 上提出相關 Bug，等待框架修復。",
    tags: ["WinUI", "Windows 11", "滾動條", "WPF", "快捷鍵", "Microsoft"],
    title_en: "WinUI Framework Lacks Classic Windows Scrollbar Shortcut: Missing Basic Functionality in Microsoft Modern Applications",
    summary_en: "This article introduces a scrollbar shortcut that has existed since the Windows 2000 era but has been gradually overlooked by modern frameworks: holding Shift and clicking the scrollbar allows the window to jump directly to that point. This functionality works correctly in applications like Win32, WPF, and even Electron, significantly improving efficiency when reading long PDFs or documents. However, the article points out that the WinUI framework, used for modern Windows 11 applications, lacks this basic feature. This creates an inconsistency in WinUI's implementation of core user experience. Although Microsoft is working on fixing WinUI's performance and foundational bugs, the absence of such a simple, cross-version Windows shortcut highlights that WinUI still faces challenges in integrating and perfecting basic UI details. Developers have already raised related bugs on GitHub, awaiting framework fixes.",
    tags_en: ["WinUI", "Windows 11", "Scrollbar", "WPF", "Shortcut", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/04/windows-11s-winui-lacks-a-26-year-old-scroll-shortcut-even-electron-has-and-a-microsoft-veteran-only-just-learned-it", lang: "EN" }
    ]
  },
  {
    id: "20261003-14662",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 內建音訊解碼器有潛在崩潰風險，Microsoft 承諾在後續更新修復",
    summary: "本篇報導指出，Windows 11 的多個版本（包括 26H2、25H2 和 24H2）在安裝了 KB5124010 更新後，若使用內建的 AC-3 (Dolby Digital) 音訊解碼功能，某些應用程式或遊戲可能會突然崩潰。此問題發生在使用者增加音量、更改音訊設定或使用特定音訊功能時。Microsoft 雖表示此問題主要影響依賴內建解碼器的舊版應用程式或遊戲，但仍無法明確指出受影響的應用程式列表。建議使用者若遇到性能問題，可嘗試避免音訊播放或關閉近期啟用的音訊功能。此外，文章也提及 Windows 11 9 月份更新期間，曾發生 File History 服務故障、Remote Desktop 連線問題，以及 Windows Subsystem for Linux 與虛擬機的檔案分享錯誤，顯示系統更新的複雜性與潛在風險。",
    tags: ["Windows 11", "26H2", "KB5124010", "音訊解碼", "AC-3", "系統更新"],
    title_en: "Potential Crash Risk in Windows 11 Built-in Audio Decoder; Microsoft Promises Fix in Future Update",
    summary_en: "This report indicates that multiple versions of Windows 11 (including 26H2, 25H2, and 24H2) may experience sudden crashes in certain applications or games when using the built-in AC-3 (Dolby Digital) audio decoding function after installing the KB5124010 update. This issue occurs when users increase volume, change audio settings, or utilize specific audio features. While Microsoft stated that the problem primarily affects older applications or games that rely on the built-in decoder, they could not provide a definitive list of affected applications. Users encountering performance issues are advised to try avoiding audio playback or disabling recently enabled audio features. Furthermore, the article also mentioned that during the Windows 11 September update period, issues occurred such as File History service failures, Remote Desktop connection problems, and file sharing errors between Windows Subsystem for Linux and virtual machines, highlighting the complexity and potential risks of system updates.",
    tags_en: ["Windows 11", "26H2", "KB5124010", "Audio Decoding", "AC-3", "System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/03/microsoft-confirms-windows-11-26h2-is-crashing-some-games-and-apps-promises-to-fix-it-in-the-next-update", lang: "EN" }
    ]
  },
  {
    id: "20261003-14663",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 10 月 7 日大型 Windows 活動，重點聚焦 AI 應用、RTX Spark 與 Windows 11 介面現代化",
    summary: "微軟預計於 10 月 7 日舉行大型 Windows 活動，重點將圍繞 Windows 11、Surface 設備以及 NVIDIA RTX Spark 展開。本次活動預計不會宣布 Windows 12 或重大消費者功能，而是著重於將 Windows 打造為 AI 應用和開發者的平台。技術亮點包括：1. **AI 整合與安全性**：微軟將透過「Microsoft Execution Containers」提升 Windows 在 RTX Spark PC 上運行 AI Agent 的安全性，確保開發者能安全地執行應用程式。2. **效能優化**：為充分利用 RTX Spark 晶片，微軟已重構了 Windows 11 的工作負載排程器，並提升了 GPU 存取系統記憶體（UMA）的能力。3. **介面現代化**：微軟持續將 Windows 11 的舊有 UI 元素（如 File Properties、AutoPlay 等）替換為 WinUI 3，提升使用者體驗，例如新的 Run dialog 預計能在 94ms 內開啟。總體而言，本次活動旨在展示 Windows 11 如何透過硬體與軟體協作，成為本地 AI 運算的核心平台。",
    tags: ["Windows 11", "Microsoft", "NVIDIA RTX Spark", "AI Agent", "WinUI 3", "Windows 11"],
    title_en: "Microsoft Announces Major Windows Event on October 7, Focusing on AI Applications, RTX Spark, and Windows 11 Interface Modernization",
    summary_en: "Microsoft is scheduled to hold a major Windows event on October 7, focusing on Windows 11, Surface devices, and the deployment of NVIDIA RTX Spark. The event is not expected to announce Windows 12 or major consumer features, but rather to emphasize positioning Windows as a platform for AI applications and developers. Key technical highlights include: 1. **AI Integration and Security**: Microsoft will enhance the security of running AI Agents on RTX Spark PCs using \"Microsoft Execution Containers,\" ensuring developers can execute applications safely. 2. **Performance Optimization**: To fully utilize the RTX Spark chip, Microsoft has refactored the Windows 11 workload scheduler and improved the capability of Unified Memory Access (UMA) for GPU memory access. 3. **Interface Modernization**: Microsoft continues to replace legacy Windows 11 UI elements (such as File Properties and AutoPlay) with WinUI 3 to improve user experience; for instance, the new Run dialog is expected to open within 94ms. Overall, the event aims to demonstrate how Windows 11, through hardware and software collaboration, will become the core platform for local AI computing.",
    tags_en: ["Windows 11", "Microsoft", "NVIDIA RTX Spark", "AI Agent", "WinUI 3", "Windows 11"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/03/microsoft-confirms-big-windows-11-announcement-as-it-keeps-ripping-out-windows-95-era-ui-and-chasing-speed", lang: "EN" }
    ]
  },
  {
    id: "20261003-14664",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 新版 Outlook 推出「經典模式」主題，讓用戶在 Web App 中重現經典介面",
    summary: "為迎合部分用戶對舊版 Outlook 的偏好，Microsoft 在 New Outlook for Windows 10/11 中新增了「啟用經典 Outlook 風格」的選項。此功能允許用戶將 New Outlook 的外觀調整為高度模擬 Outlook Classic 的介面。雖然此模式能讓標題列、圖標、資料夾列表、功能區（Ribbon）等元素看起來極為相似，但 New Outlook 本質上仍是一個運行在 Edge 容器中的 Web 應用程式。啟用此主題後，用戶將無法使用 Copilot 主題、自定義背景或部分新功能。Microsoft 透過調整字體、圖標和佈局，旨在為從 Classic 轉移過來的用戶提供更熟悉的體驗。然而，文章指出，儘管外觀極為接近，New Outlook 仍未具備原生應用程式的性能，這仍是用戶關注的重點。",
    tags: ["Microsoft", "Outlook", "New Outlook", "Windows 11", "Web App", "使用者介面"],
    title_en: "Microsoft's New Outlook Introduces 'Classic Mode' Theme, Allowing Users to Replicate Classic Interface in Web App",
    summary_en: "To cater to users who prefer the older version of Outlook, Microsoft has added an option in New Outlook for Windows 10/11 to 'Enable Classic Outlook Style.' This feature allows users to adjust the New Outlook's appearance to highly simulate the interface of Outlook Classic. Although this mode makes elements like the title bar, icons, folder list, and Ribbon look extremely similar, New Outlook is fundamentally still a web application running within an Edge container. When this theme is enabled, users will lose access to Copilot themes, custom backgrounds, or certain new features. By adjusting fonts, icons, and layout, Microsoft aims to provide a more familiar experience for users transitioning from Classic. However, the article notes that despite the visual similarity, New Outlook still lacks the performance of a native application, which remains a key point of user concern.",
    tags_en: ["Microsoft", "Outlook", "New Outlook", "Windows 11", "Web App", "User Interface"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/03/tested-microsoft-cloned-outlook-classics-look-into-a-new-outlook-theme-instead-of-building-a-native-windows-11-app", lang: "EN" }
    ]
  },
  {
    id: "20261003-14460",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警示Zammad兩高風險漏洞遭積極利用：工作階段劫持與權限提升風險",
    summary: "美國網路與基礎設施安全局（CISA）根據荷蘭漏洞揭露協會（DIVD）的公告，新增兩項已知遭利用漏洞（KEV）：CVE-2026-102489與CVE-2026-102490。受影響產品為開源IT服務臺與客服工單系統Zammad。CVE-2026-102489為工作階段劫持漏洞，影響Zammad 6.3.0至6.5.4版本，可能使攻擊者以使用者身分執行遠端程式碼；CVE-2026-102490則允許本機Zammad使用者將權限提升至 root 等級，影響Zammad 1.5.0至7.1.0-alpha版本。單獨評分，兩漏洞均為高風險（CVSS 8.7分與8.5分），但若串聯利用，嚴重度評分可達9.4分。DIVD建議所有Zammad使用者應立即將系統升級至Zammad第7版，或考慮將系統離線，並可利用提供的日誌檢查指令碼進行入侵調查。",
    tags: ["Zammad", "CVE-2026-102489", "CVE-2026-102490", "CISA", "DIVD", "工作階段劫持", "權限提升"],
    title_en: "CISA Warns of Active Exploitation of Two High-Risk Zammad Vulnerabilities: Session Hijacking and Privilege Escalation Risks",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA), citing an announcement from the Dutch Vulnerability Disclosure Working Group (DIVD), has added two known exploited vulnerabilities (KEVs): CVE-2026-102489 and CVE-2026-102490. The affected product is the open-source IT service desk and ticketing system Zammad. CVE-2026-102489 is a session hijacking vulnerability affecting Zammad versions 6.3.0 through 6.5.4, which could allow an attacker to execute remote code as a user; CVE-2026-102490 allows a local Zammad user to escalate privileges to root level, affecting Zammad versions 1.5.0 through 7.1.0-alpha. Individually, both vulnerabilities are rated as high risk (CVSS 8.7 and 8.5, respectively), but when chained together, the severity score can reach 9.4. DIVD advises all Zammad users to immediately upgrade their system to Zammad version 7, or consider taking the system offline, and can utilize the provided log checking script for intrusion investigation.",
    tags_en: ["Zammad", "CVE-2026-102489", "CVE-2026-102490", "CISA", "DIVD", "Session Hijacking", "Privilege Escalation"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179387", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261003-14461",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告Fortinet FortiMail存在路徑遍歷漏洞CVE-2026-104286，CVSS評分高達9.8分",
    summary: "美國網路與基礎設施安全局（CISA）透過已知遭利用漏洞清單（KEV）公告，指出Fortinet的郵件安全閘道設備FortiMail存在CVE-2026-104286漏洞。此漏洞屬於路徑遍歷（Path Traversal）及對NULL位元組處理不當，允許未經身分驗證的攻擊者透過特製的HTTP或HTTPS請求，在底層系統上寫入任意檔案。該漏洞已收錄於NVD和MITRE，CVSS嚴重程度評分為9.8分，影響版本範圍涵蓋FortiMail的8.0.0至8.0.1、7.6.0至7.6.6、7.4.0至7.4.8及7.2.0至7.2.9等版本。為降低風險，Fortinet建議用戶可暫時停用身分識別加密（IBE）功能，或限制FortiMail管理介面的網際網路存取，僅允許受信任的私人網路連線。聯邦政府各民事執行單位須在10月4日前完成修補。",
    tags: ["Fortinet", "FortiMail", "CVE-2026-104286", "路徑遍歷", "CISA", "KEV"],
    title_en: "CISA Warns of Path Traversal Vulnerability CVE-2026-104286 in Fortinet FortiMail, Scoring 9.8 CVSS",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has announced, via its Known Exploited Vulnerability Catalog (KEV), that Fortinet's email security gateway device, FortiMail, contains the CVE-2026-104286 vulnerability. This flaw is a Path Traversal vulnerability and improper handling of NULL bytes, which allows unauthenticated attackers to write arbitrary files on the underlying system using specially crafted HTTP or HTTPS requests. The vulnerability has been cataloged in NVD and MITRE, with a CVSS severity score of 9.8. Affected versions include FortiMail 8.0.0 through 8.0.1, 7.6.0 through 7.6.6, 7.4.0 through 7.4.8, and 7.2.0 through 7.2.9. To mitigate the risk, Fortinet recommends that users temporarily disable Identity-Based Encryption (IBE) functionality or restrict internet access to the FortiMail management interface, allowing connections only from trusted private networks. Federal government civil agencies must complete patching by October 4th.",
    tags_en: ["Fortinet", "FortiMail", "CVE-2026-104286", "Path Traversal", "CISA", "KEV"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179386", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261003-14462",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome修補多個漏洞：包含CVE-2026-103628越界寫入及多個UAF高風險漏洞",
    summary: "Google於9月29日發布Chrome瀏覽器版本，修補了多達32個漏洞。隨後又緊急推出更新版本，針對Windows和Mac平台提供154.0.8037.97/98版，Android平台為154.0.8037.126版，Linux平台預計後續更新。本次修補的漏洞嚴重程度不一，其中包含一個被評為重大風險的漏洞CVE-2026-103628，此漏洞源於WebGL元件的越界寫入（Out of Bounds Write）。此外，還有9個高風險漏洞，其中4個與記憶體釋放後仍使用（UAF）相關，另有兩個與整數溢出（Integer Overflow）有關，此外還包含授權不當、緩衝區溢位（Buffer Overflow）和類型混淆（Type Confusion）等漏洞。總體而言，本次更新旨在修補多種記憶體相關的漏洞，使用者應儘快更新至最新版本以確保瀏覽器安全性。",
    tags: ["Google Chrome", "CVE-2026-103628", "越界寫入", "UAF", "緩衝區溢位", "瀏覽器漏洞"],
    title_en: "Google Chrome Patches Multiple Vulnerabilities, Including Out-of-Bounds Write CVE-2026-103628 and Multiple High-Risk UAF Flaws",
    summary_en: "Google released a Chrome browser version on September 29th, patching a total of 32 vulnerabilities. It subsequently issued an emergency update targeting Windows and Mac platforms with version 154.0.8037.97/98, and the Android platform with version 154.0.8037.126. A Linux update is expected later. The severity of the patched vulnerabilities varies, but includes a critical vulnerability, CVE-2026-103628, which stems from an Out-of-Bounds Write in the WebGL component. Additionally, there are nine high-risk vulnerabilities, four of which are related to Use-After-Free (UAF), two related to Integer Overflow, and others involving improper authorization, Buffer Overflow, and Type Confusion. Overall, this update aims to patch various memory-related vulnerabilities, and users are advised to update to the latest version promptly to ensure browser security.",
    tags_en: ["Google Chrome", "CVE-2026-103628", "Out-of-Bounds Write", "UAF", "Buffer Overflow", "Browser Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/179385", lang: "ZH-TW" }
    ]
  },
  {
    id: "20261003-14469",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fortra修補BoKS多項關鍵漏洞：包含可導致身份驗證繞過的CVE-2026-79901",
    summary: "資安廠商Fortra針對其Core Privileged Access Manager (BoKS) 產品，發布了修補程式以修復多個漏洞，其中包含三個高風險的漏洞。最嚴重的漏洞CVE-2026-79901，屬於身份驗證繞過缺陷。該漏洞源於Active Directory服務帳號密碼的生成方式，即使用「以當前Unix時間戳為種子的可預測偽隨機序列」生成，若攻擊者掌握服務主體名稱（service principal）並能估計密碼變更時間，可透過離線驗證生成候選密碼集。另一個關鍵漏洞CVE-2026-79898，是crlserver中的命令注入缺陷，允許已驗證使用者在BoKS Master上以root權限執行Shell指令。此外，Fortra還修補了CVE-2026-12627，這是一個堆疊緩衝區溢出漏洞，可能允許遠端攻擊者觸發記憶體損壞。Fortra建議用戶立即更新BoKS產品，以修補這些影響核心帳號管理和身份驗證的漏洞。",
    tags: ["Fortra", "BoKS", "CVE-2026-79901", "CVE-2026-79898", "CVE-2026-12627", "Active Directory", "身份驗證"],
    title_en: "Fortra patches multiple critical vulnerabilities in BoKS, including CVE-2026-79901 which allows authentication bypass",
    summary_en: "Cybersecurity vendor Fortra has released patches for its Core Privileged Access Manager (BoKS) product to fix multiple vulnerabilities, including three high-risk flaws. The most severe vulnerability, CVE-2026-79901, is an authentication bypass defect. This flaw stems from the method used to generate Active Directory service account passwords, which use a 'predictable pseudo-random sequence seeded by the current Unix timestamp.' If an attacker obtains the service principal name and can estimate the password change time, they can generate a set of candidate passwords through offline validation. Another critical vulnerability, CVE-2026-79898, is a command injection flaw in crlserver, allowing an authenticated user to execute shell commands with root privileges on the BoKS Master. Furthermore, Fortra patched CVE-2026-12627, a stack buffer overflow vulnerability that could potentially allow a remote attacker to trigger memory corruption. Fortra advises users to update their BoKS product immediately to patch these vulnerabilities that affect core account management and authentication.",
    tags_en: ["Fortra", "BoKS", "CVE-2026-79901", "CVE-2026-79898", "CVE-2026-12627", "Active Directory", "Authentication"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/fortra-patches-critical-vulnerabilities-in-boks", lang: "EN" }
    ]
  },
  {
    id: "20261003-14479",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "英國MI5警告：中國MSS透過CGTRI資助學術研究，涉嫌進行國家級間諜活動",
    summary: "英國國內情報與安全機構MI5發布「安全服務間諜警報」，警告中國通用技術研究院（CGTRI）被評估為中國國家安全部（MSS）的代理機構。MI5指出，CGTRI的主要目的是資助提升MSS的技術能力，特別是在人工智慧（AI）、網路安全、隱蔽通訊系統和圖像隱寫術等領域。警報指出，超過100名與英國相關的學者已參與由MSS經由CGTRI資助的研究項目，這些活動被視為威脅英國國家安全的間諜活動。MI5敦促英國學術機構立即審查與CGTRI的合作，並在與中國機構進行研究合作時追溯資金來源。此外，警報警告，持續參與此類合作的機構和研究人員，可能根據《2023年國家安全法案》被起訴。中國駐英國大使館則駁斥了這些指控，稱其為「虛構且純粹捏造」。",
    tags: ["MI5", "MSS", "CGTRI", "國家安全", "間諜活動", "AI", "網路安全"],
    title_en: "UK's MI5 Warns: China's MSS Uses CGTRI to Fund Academic Research, Suspected of State-Level Espionage",
    summary_en: "The UK's domestic intelligence and security agency, MI5, issued a 'Security Services Espionage Alert,' warning that the China Global Technology Research Institute (CGTRI) is assessed to be a proxy organization for China's Ministry of State Security (MSS). MI5 stated that CGTRI's primary objective is to fund and enhance the MSS's technical capabilities, particularly in areas such as Artificial Intelligence (AI), cybersecurity, covert communication systems, and steganography. The alert noted that over 100 scholars associated with the UK have participated in research projects funded by the MSS through CGTRI, activities viewed as espionage threatening UK national security. MI5 urged UK academic institutions to immediately review collaborations with CGTRI and to trace funding sources when conducting research cooperation with Chinese organizations. Furthermore, the alert warned that institutions and researchers who continue such cooperation may face prosecution under the '2023 National Security Act.' The Chinese Embassy in the UK, however, refuted these allegations, calling them 'fictional and purely fabricated.'",
    tags_en: ["MI5", "MSS", "CGTRI", "National Security", "Espionage", "AI", "Cybersecurity"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/mi5-says-chinas-mss-funded-research.html", lang: "EN" }
    ]
  },
  {
    id: "20261003-14480",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "疑似中國資安威脅群 Warlock 持續利用 SharePoint 漏洞攻擊跨國組織",
    summary: "資安研究機構 Symantec 與 Carbon Black 報告指出，一個疑似與中國相關的威脅行為者 Warlock（亦被追蹤為 Gold Salem、Longlegs、Storm-2603）持續利用 Microsoft SharePoint 的漏洞進行攻擊。該活動已波及歐洲、非洲和拉丁美洲的葡萄牙語和西班牙語國家，目標包括關鍵基礎設施、政府機構和教育單位。Warlock 攻擊的目標是竊取 SharePoint farm 的 ASP.NET machine keys，進而偽造簽名載荷，達成 SharePoint 應用程式池內的遠端程式碼執行（RCE）。攻擊者利用的技術包括：使用 DLL sideloading 載入惡意程式碼、從合法雲端服務下載後續載荷、濫用有漏洞的驅動程式 K7RKScan.sys（CVE-2025-1055）進行 BYOVD 攻擊以禁用安全軟體，以及利用 LotL 工具（如 Visual Studio Code 的隧道功能）進行偵察和遠端連線。攻擊者會將載荷部署在網域的 SYSVOL 分享中，以大規模部署勒索軟體。研究機構警告，即使在 Warlock 首次出現一年多後，這些 SharePoint 漏洞仍是攻擊者可行的初始存取路徑，特別是對於未修補的部署。",
    tags: ["Warlock", "SharePoint", "CVE-2025-1055", "Microsoft", "勒索軟體", "RCE", "資安威脅"],
    title_en: "Suspected China-Linked Threat Group Warlock Continues to Exploit SharePoint Vulnerabilities to Attack Multinational Organizations",
    summary_en: "Reports from cybersecurity research firms Symantec and Carbon Black indicate that a threat actor suspected to be linked to China, named Warlock (also tracked as Gold Salem, Longlegs, and Storm-2603), is continuously exploiting vulnerabilities in Microsoft SharePoint. This activity has affected Portuguese and Spanish-speaking countries across Europe, Africa, and Latin America, targeting critical infrastructure, government agencies, and educational institutions. Warlock aims to steal the ASP.NET machine keys from the SharePoint farm, which allows them to forge signed payloads and achieve Remote Code Execution (RCE) within the SharePoint application pool. The techniques used by the attackers include: DLL sideloading to load malicious code, downloading subsequent payloads from legitimate cloud services, abusing the vulnerable driver K7RKScan.sys (CVE-2025-1055) for a Bring Your Own Vulnerable Driver (BYOVD) attack to disable security software, and utilizing Living off the Land (LotL) tools (such as Visual Studio Code's tunneling feature) for reconnaissance and remote connections. The attackers deploy payloads in the domain's SYSVOL share for large-scale ransomware deployment. The research firms warn that even over a year after Warlock's initial appearance, these SharePoint vulnerabilities remain a viable initial access path for attackers, especially for unpatched deployments.",
    tags_en: ["Warlock", "SharePoint", "CVE-2025-1055", "Microsoft", "Ransomware", "RCE", "Cybersecurity Threat"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/warlock-exploits-sharepoint-flaws-to.html", lang: "EN" }
    ]
  },
  {
    id: "20261003-14513",
    trackers: ["os"],
    category: "合規指引",
    title: "Apple強化Mac系統權限管理：限制應用程式「全碟存取權」授予，應對AI隱私風險",
    summary: "由於近期AI代理程式可能廣泛存取使用者私密數據（如訊息、郵件）的爭議，Apple宣布將大幅強化Mac作業系統中授予「全碟存取權」（Full Disk Access, FDA）的機制。全碟存取權本是為系統備份工具等特殊應用程式設計，允許其繞過傳統的沙盒安全限制，存取系統內幾乎所有個人數據。Apple指出，部分開發者近期濫用此權限，可能在使用者未充分知情或同意的情況下，將整個系統暴露給風險。為此，Apple將在未來發布的macOS更新中，導入更嚴格的控制機制，要求使用者必須進行「極為明確的動作」（very explicit user action）才能授予此權限。這旨在防止第三方應用程式（特別是AI桌面助理等）透過隱晦方式或批量授權，獲取過度的系統存取權，從而大幅降低隱私洩露的潛在風險。",
    tags: ["Apple", "macOS", "全碟存取權", "FDA", "AI代理程式", "隱私保護"],
    title_en: "Apple Strengthens macOS Permission Management: Restricting Granting of 'Full Disk Access' to Counter AI Privacy Risks",
    summary_en: "Due to recent controversies regarding AI agents potentially accessing user private data (such as messages and emails) broadly, Apple has announced significant enhancements to the mechanism for granting 'Full Disk Access' (FDA) within macOS. Full Disk Access was originally designed for specialized applications like system backup tools, allowing them to bypass traditional sandbox security restrictions and access nearly all personal data on the system. Apple noted that some developers have recently misused this permission, potentially exposing the entire system to risk without the user's full knowledge or consent. Therefore, Apple will introduce stricter control mechanisms in future macOS updates, requiring 'very explicit user action' to grant this permission. This aims to prevent third-party applications (especially AI desktop assistants) from obtaining excessive system access through subtle or bulk authorization, thereby significantly lowering the potential risk of privacy leakage.",
    tags_en: ["Apple", "macOS", "Full Disk Access", "FDA", "AI Agents", "Privacy Protection"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146185", lang: "EN" }
    ]
  },
  {
    id: "20261003-14547",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Watch Series 12升級評測：強調健康監測功能與效能提升",
    summary: "本文為使用者分享升級至 Apple Watch Series 12 的個人經驗，主要著重於其健康監測功能的重大進步。相較於前代機型，Series 12 的心率監測器和全新的「Readiness」應用程式提供了更深入、更全面的健康洞察。作者指出，新的健康應用程式（Health app）現在能以極為實用的方式呈現使用者所需的一切數據，使其在健康穿戴設備的定位上更為嚴謹。此外，Series 12 在整體運行速度，特別是 Siri 的反應速度上也有顯著提升。雖然文章提及 Series 12 在外觀設計上與前代相似，但其在電池續航力（可超過 24 小時）和健康追蹤能力上的提升，使其具備了更強大的吸引力。整體而言，Apple Watch 已從一個輔助配件，發展成為一個功能強大的健康穿戴設備。",
    tags: ["Apple Watch Series 12", "Apple Watch", "健康監測", "Health app", "Apple", "穿戴設備"],
    title_en: "Apple Watch Series 12 Upgrade Review: Highlighting Health Monitoring Features and Performance Improvements",
    summary_en: "This article shares a personal experience of upgrading to the Apple Watch Series 12, focusing primarily on the significant advancements in its health monitoring capabilities. Compared to previous models, the Series 12's heart rate monitor and the new \"Readiness\" application provide deeper and more comprehensive health insights. The author points out that the new Health app can now present all the data users need in an extremely practical manner, solidifying its position as a serious health wearable device. Furthermore, the Series 12 shows noticeable improvements in overall operating speed, particularly in Siri's responsiveness. Although the article mentions that the Series 12's aesthetic design is similar to its predecessor, its enhanced battery life (exceeding 24 hours) and superior health tracking capabilities give it greater appeal. Overall, the Apple Watch has evolved from a supplementary accessory into a powerful health wearable device.",
    tags_en: ["Apple Watch Series 12", "Apple Watch", "Health Monitoring", "Health app", "Apple", "Wearable Device"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/03/heres-why-i-upgraded-from-the-apple-watch-series-10-to-series-12", lang: "EN" }
    ]
  },
  {
    id: "20261003-14548",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 下一代入門款 iPad 預計搭載 A19 晶片與 Wi-Fi 7，預計於明年春季發布",
    summary: "根據洩漏資訊，Apple 下一代入門款 iPad 將不會使用 A18 晶片，而是升級至 A19 晶片。此外，該機型還將配備 N1 網路晶片和支援 Wi-Fi 7 的蜂巢版模組。A19 iPad 的記憶體容量預計為 8GB，雖然足以運行 Siri AI，但若需使用更強大的本地模型或進階語音輸入功能，仍建議具備 12GB 記憶體的設備。雖然預計不會有外觀或螢幕上的重大改進，但這次升級將提升入門款 iPad 的網路連線能力。市場預計該機型將於明年春季發布，與 M6 MacBook Air 等其他產品一同上市。",
    tags: ["Apple", "iPad", "A19", "Wi-Fi 7", "Apple Intelligence"],
    title_en: "Apple's Next-Generation Entry-Level iPad Expected to Feature A19 Chip and Wi-Fi 7, Anticipated for Spring Next Year",
    summary_en: "According to leaked information, Apple's next-generation entry-level iPad will not use the A18 chip, but will instead upgrade to the A19 chip. Furthermore, the model is expected to be equipped with the N1 network chip and a honeycomb module supporting Wi-Fi 7. The A19 iPad is anticipated to have 8GB of memory. While this is sufficient for running Siri AI, devices with 12GB of memory are still recommended for those needing to run more powerful local models or advanced voice input features. Although major improvements to the appearance or screen are not expected, this upgrade will enhance the entry-level iPad's network connectivity. The market anticipates the device will be released next spring, alongside other products such as the M6 MacBook Air.",
    tags_en: ["Apple", "iPad", "A19", "Wi-Fi 7", "Apple Intelligence"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/03/apples-next-ipad-a19-details-release-date", lang: "EN" }
    ]
  },
  {
    id: "20261003-14549",
    trackers: ["os"],
    category: "Apple",
    title: "MacPaw 推出 Leebry：AI 驅動的企業級工作平台，協助 IT 團隊管理 Apple 設備",
    summary: "MacPaw 過去以開發 CleanMyMac 等 Mac 用戶端軟體聞名，現正轉型業務重心，推出 Leebry 平台。Leebry 是一個專為企業設計的 Work AI 平台，旨在協助 IT 團隊管理和維護 Apple 設備。該平台提供整合性的解決方案，讓企業能夠更輕鬆、自動化地部署、管理和保護其 Apple 設備群。這項轉型顯示 MacPaw 正從消費級軟體市場，朝向企業級的設備管理與安全解決方案領域邁進，為 IT 團隊提供一站式的管理工具，以應對日益複雜的企業設備生態需求。",
    tags: ["MacPaw", "Leebry", "Work AI", "Apple 設備管理", "企業級軟體", "IT 團隊"],
    title_en: "MacPaw Launches Leebry: An AI-Powered Enterprise Work Platform for Managing Apple Devices",
    summary_en: "MacPaw was previously known for developing consumer Mac utilities like CleanMyMac, but is now shifting its business focus by launching the Leebry platform. Leebry is a Work AI platform designed specifically for enterprises, aimed at assisting IT teams in managing and maintaining Apple devices. The platform offers an integrated solution, enabling companies to deploy, manage, and secure their Apple device fleets more easily and automatically. This transition indicates that MacPaw is moving from the consumer software market toward the enterprise-grade device management and security solutions sector, providing IT teams with a one-stop management tool to meet the increasingly complex needs of enterprise device ecosystems.",
    tags_en: ["MacPaw", "Leebry", "Work AI", "Apple Device Management", "Enterprise Software", "IT Team"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/03/macpaw-leebry", lang: "EN" }
    ]
  },
  {
    id: "20261003-14618",
    trackers: ["os"],
    category: "Apple",
    title: "LunarG KosmicKrisp 達成 Vulkan 1.4 規範，提升 Apple Silicon 上的 Vulkan 效能",
    summary: "LunarG 宣布其開發的 KosmicKrisp 專案取得 Vulkan 1.4 規範（CTS）認證，並被 The Khronos Group 認定為符合規範的實作。KosmicKrisp 旨在為 Apple 系統提供現代化的 Vulkan-on-Metal 驅動，作為 MoltenVK 的替代方案。該技術利用 Apple Silicon 硬體，在 Metal 之上提供 Vulkan API 支援，並被 LunarG 視為適用於現代 macOS 的生產級解決方案。其效能已顯著提升，與原有的 MoltenVK 實作差距縮小，且已接近原生 Metal API 的效能水準。LunarG 將持續投入資源優化 KosmicKrisp 的效能並修復錯誤，未來預計會增加其他 Vulkan 功能的支援，並強化相關工具鏈。目前 KosmicKrisp 的開發重點僅限於 macOS，若要實現 iOS 支援，則需要更多的資源投入。",
    tags: ["LunarG", "KosmicKrisp", "Vulkan", "Vulkan 1.4", "Metal", "Apple Silicon", "macOS"],
    title_en: "LunarG's KosmicKrisp Achieves Vulkan 1.4 Specification, Enhancing Vulkan Performance on Apple Silicon",
    summary_en: "LunarG announced that its KosmicKrisp project has obtained Vulkan 1.4 Specification (CTS) certification, and has been recognized by The Khronos Group as a compliant implementation. KosmicKrisp aims to provide a modernized Vulkan-on-Metal driver for Apple systems, serving as an alternative to MoltenVK. This technology utilizes Apple Silicon hardware to provide Vulkan API support on top of Metal, which LunarG considers a production-grade solution for modern macOS. Its performance has significantly improved, narrowing the gap with the original MoltenVK implementation, and approaching the performance level of native Metal APIs. LunarG plans to continue investing resources to optimize KosmicKrisp's performance and fix bugs, and expects to add support for other Vulkan features and strengthen related toolchains in the future. Currently, KosmicKrisp's development focus is limited to macOS; achieving iOS support will require further resource commitment.",
    tags_en: ["LunarG", "KosmicKrisp", "Vulkan", "Vulkan 1.4", "Metal", "Apple Silicon", "macOS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KosmicKrisp-Vulkan-1.4-2026", lang: "EN" }
    ]
  },
  {
    id: "20261003-14512",
    trackers: ["security"],
    category: "開源影響",
    title: "OpenAI揭露AI模型「敵對蒸餾」攻擊，阻止數據竊取，並修補加密推理漏洞",
    summary: "OpenAI宣布偵測並阻止了組織性的「敵對蒸餾」（Adversarial Distillation）行為，此行為指攻擊者系統性地利用某個模型輸出的內容，來訓練或複製/改進另一個模型。OpenAI指出，攻擊者並未直接破解加密或侵入資料庫，而是透過操縱模型與用戶之間的對話，使原本應受保護的推理過程以可見的形式重現，並大規模地進行了這類行為。該活動從2026年7月1日開始，並在7月24日至25日達到高峰，OpenAI隨後對超過1.5萬名用戶實施了相同提示詞模式的追蹤。為應對此類威脅，OpenAI加強了防禦措施，包括封鎖可重現加密推理的路徑，並增加了檢測推理是否在串流輸出中洩露的檢查。此外，MATS Research、ELLIS Institute Tübingen和Synk研究團隊的研究指出，在同一公司內，存在一個結構性漏洞，允許將加密推理記錄從一個模型傳輸到另一個較弱的模型，使後者能將記錄以明文形式輸出，這可能用於大規模的非公開數據提取和隱形提示詞注入。OpenAI警告，敵對蒸餾威脅到安全和國家安全，因為竊取的推理內容可能在缺乏安全機制的情況下用於訓練新模型。",
    tags: ["OpenAI", "敵對蒸餾", "Adversarial Distillation", "AI模型", "數據安全", "加密推理"],
    title_en: "OpenAI Reveals AI Model 'Adversarial Distillation' Attack, Prevents Data Theft, and Patches Encrypted Inference Vulnerability",
    summary_en: "OpenAI announced the detection and prevention of systematic 'Adversarial Distillation' activity. This activity refers to attackers systematically using the content output of one model to train or replicate/improve another model. OpenAI pointed out that the attackers did not directly crack encryption or infiltrate databases; instead, they manipulated the dialogue between the model and the user, causing the originally protected inference process to be reproduced in a visible format, and they conducted this activity on a large scale. This activity began on July 1, 2026, peaked between July 24 and 25, and OpenAI subsequently tracked the same prompt pattern across more than 15,000 users. To address this threat, OpenAI strengthened its defensive measures, including blocking the path for reproducible encrypted inference and adding checks to detect whether inference is leaking in the streamed output. Furthermore, research from MATS Research, ELLIS Institute Tübingen, and the Synk research team indicated a structural vulnerability within a single company that allows encrypted inference records to be transferred from one model to another, weaker model, enabling the latter to output the records in plaintext. This could be used for large-scale extraction of non-public data and stealth prompt injection. OpenAI warned that adversarial distillation threatens security and national security, as the stolen inference content could be used to train new models without adequate security mechanisms.",
    tags_en: ["OpenAI", "Adversarial Distillation", "AI Model", "Data Security", "Encrypted Inference"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146169", lang: "EN" }
    ]
  },
  {
    id: "20261003-14523",
    trackers: ["os"],
    category: "Android",
    title: "回顧 Google Pixel 5：一款在特殊市場環境下，兼顧耐用性與基本功能的旗艦級 Android 手機",
    summary: "本文回顧了 Google Pixel 5 這款手機的市場表現與設計特色。該機型在發布時，面臨全球疫情與供應鏈短缺等複雜的市場環境。從硬體角度來看，Pixel 5 採用了生物樹脂（bio-resin）材質，取代了傳統的金屬與玻璃，這提供了更好的耐用性和握持感，是其設計上的獨特亮點。雖然其規格上可能更適合中階市場，但它成功地在旗艦級的價格帶上，兼顧了良好的電池續航力、指紋辨識功能，並提供了相對穩定的使用體驗。作者認為，Pixel 5 的設計和功能組合，使其在當年的市場背景下，展現了其「妥協的實踐」（exercise in compromise）的特質，並證明了其長期的耐用性與價值。",
    tags: ["Google Pixel 5", "Android", "旗艦手機", "生物樹脂", "手機回顧"],
    title_en: "Reviewing the Google Pixel 5: A Flagship Android Phone Balancing Durability and Core Functionality in a Challenging Market Environment",
    summary_en: "This article reviews the market performance and design features of the Google Pixel 5. When it was released, the device faced a complex market environment marked by a global pandemic and supply chain shortages. From a hardware perspective, the Pixel 5 utilized bio-resin material, replacing traditional metal and glass. This provided enhanced durability and a comfortable grip, serving as a unique design highlight. Although its specifications might suggest a mid-range market fit, it successfully offered good battery life and fingerprint recognition at a flagship price point, providing a relatively stable user experience. The author argues that the combination of the Pixel 5's design and features demonstrated an 'exercise in compromise' within the market context of that year, proving its long-term durability and value.",
    tags_en: ["Google Pixel 5", "Android", "Flagship Phone", "Bio-resin", "Phone Review"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/03/google-pixel-5-revisit-bad-situation", lang: "EN" }
    ]
  },
  {
    id: "20261003-14468",
    trackers: ["security"],
    category: "前瞻技術",
    title: "doxx.net 募資 $3800 萬，推出 Agentic Defined Networking (ADN) 平台，強調架構層級隱私與安全",
    summary: "Miami 總部的 doxx.net 公司，在 Andreessen Horowitz 等投資人領投的 A 系列融資輪中，成功募資 $3800 萬。公司創辦人 Barrett Lyon 宣布了其 Agentic Defined Networking (ADN) 平台，該平台目前處於開放測試階段。隨著 AI Agent 越來越常代表使用者瀏覽、溝通和執行操作，如何確保其行為的安全性與隱私成為關鍵挑戰。ADN 旨在解決此問題，它提供一個具有定義連線和內建威脅防護的環境，防止 Agent 存取已知惡意目的地。ADN 是一個平行的、私有的 P2P 網路平台，允許人類使用者和 AI Agent 連接，無需依賴任何中央中介伺服器。該平台提供端到端通訊、內建威脅防護（可阻擋惡意目的地、惡意軟體和網路釣魚網站）、Agent 整合與 API 控制，並擁有自己的 IP 空間、ASN、DNS 根和憑證權威機構。doxx.net 聲稱自 2025 年 12 月以來，已在閉源測試中阻擋超過 3800 萬個威脅。該系統要求用戶無需帳號密碼，而是透過工作證明（proof-of-work）建立帳戶，從根本上實現了架構層級的隱私。",
    tags: ["doxx.net", "ADN", "AI Agent", "P2P", "隱私保護", "零信任架構"],
    title_en: "doxx.net Raises $38 Million in Funding, Launches Agentic Defined Networking (ADN) Platform Emphasizing Architectural Privacy and Security",
    summary_en: "doxx.net, a Miami-based company, successfully raised $38 million in an Series A funding round led by investors including Andreessen Horowitz. The company founder, Barrett Lyon, announced its Agentic Defined Networking (ADN) platform, which is currently in open beta. As AI Agents increasingly represent users browsing, communicating, and executing actions, ensuring the safety and privacy of their behavior has become a critical challenge. ADN aims to solve this problem by providing an environment with defined connections and built-in threat protection, preventing Agents from accessing known malicious destinations. ADN is a parallel, private P2P network platform that allows human users and AI Agents to connect without relying on any central intermediary server. The platform offers end-to-end communication, built-in threat protection (capable of blocking malicious destinations, malware, and phishing sites), Agent integration, and API control, and possesses its own IP space, ASN, DNS root, and Certificate Authority. doxx.net claims that since December 2025, it has blocked over 38 million threats in closed testing. The system requires users to establish accounts via proof-of-work rather than traditional usernames and passwords, fundamentally achieving architectural-level privacy.",
    tags_en: ["doxx.net", "ADN", "AI Agent", "P2P", "Privacy Protection", "Zero Trust Architecture"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/doxx-net-raises-38-million-to-prevent-ai-agent-on-the-internet-misadventures", lang: "EN" }
    ]
  },
  {
    id: "20261003-14481",
    trackers: ["security"],
    category: "前瞻技術",
    title: "2026年資安趨勢報告：雲端、AI與分散式系統重塑安全邊界",
    summary: "本報告概述了在雲端基礎設施、AI擴展和分散式系統的背景下，現代資安的演變趨勢。隨著組織管理身份、設備和數據的複雜性增加，安全重點正從單點防禦轉向持續的可見性、控制和大規模風險響應。核心領域包括身份安全，強調持續治理和最小權限；遙測與數據管理，著重於控制數據的路由、重塑和重用；端點管理，要求實施持續修補和自動化修復；人為風險情報，將「身份完整性」視為新的防火牆，超越傳統技術控制；此外，報告還涵蓋了針對AI生成內容的「人為安全」、擴展的「設備安全」、以及利用AI自動化調查的「AI原生安全運營」等前瞻性議題。實務建議是將安全控制延伸至整個數位生態系統，而非僅限於傳統邊界。",
    tags: ["AI安全", "身份安全", "雲端基礎設施", "端點管理", "人為風險情報", "資安趨勢"],
    title_en: "2026 Cybersecurity Trends Report: Cloud, AI, and Distributed Systems Reshape Security Boundaries",
    summary_en: "This report outlines the evolving trends in modern cybersecurity against the backdrop of cloud infrastructure, AI expansion, and distributed systems. As the complexity of managing identities, devices, and data increases within organizations, the security focus is shifting from single-point defense toward continuous visibility, control, and large-scale risk response. Core areas include identity security, emphasizing continuous governance and least privilege; telemetry and data management, focusing on controlling data routing, reshaping, and reuse; and endpoint management, requiring continuous patching and automated remediation. Furthermore, human risk intelligence views 'identity integrity' as the new firewall, transcending traditional technical controls. The report also covers forward-looking topics such as 'human safety' for AI-generated content, expanded 'device security,' and 'AI-native security operations' utilizing AI for automated investigations. The practical recommendation is to extend security controls across the entire digital ecosystem, rather than being limited to traditional boundaries.",
    tags_en: ["AI Security", "Identity Security", "Cloud Infrastructure", "Endpoint Management", "Human Risk Intelligence", "Cybersecurity Trends"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/the-state-of-cybersecurity-in-2026key.html", lang: "EN" }
    ]
  },
  {
    id: "20261003-14495",
    trackers: ["os", "security"],
    category: "前瞻技術",
    title: "Google Gemini 桌面版潛在擴展功能：AI 恐具備全權存取 macOS 檔案、應用程式與網頁能力",
    summary: "根據觀察，Google 正在測試 Gemini 桌面版的一項潛在功能，該功能可能允許 AI 代理程式獲得極高的系統存取權限。若啟用，Gemini 將能夠讀取、建立、修改甚至刪除 Mac 上的任何檔案，不受使用者明確連接資料夾的限制。此外，它甚至可能與 Mail、Safari 或 Messages 等原生應用程式進行通訊，並透過這些應用執行操作。Google 說明，透過啟用「額外沙盒選項」，可以擴展 Gemini 的能力，使其能夠跨越檔案、網站和原生應用程式工作，而非僅限於聊天視窗。然而，文章指出，Google 並不會給予 Gemini 無限控制權，對於購買產品、轉移資金、建立帳號或修改敏感資訊等關鍵動作，仍會要求使用者明確確認。此功能尚未正式發布，且 Apple 正在考慮限制 AI 代理程式存取個人資料的難度，顯示此技術的實務應用仍存在不確定性。",
    tags: ["Google Gemini", "macOS", "AI 代理程式", "系統存取權限", "沙盒選項", "資料外洩"],
    title_en: "Potential Google Gemini Desktop Feature: AI May Possess Full Access to macOS Files, Applications, and Webpages",
    summary_en: "Observations indicate that Google is testing a potential feature for the Gemini desktop application, which could grant the AI agent extremely high system access privileges. If activated, Gemini would be able to read, create, modify, or even delete any file on the Mac, without being restricted by the user explicitly connecting the folder. Furthermore, it might communicate with native applications such as Mail, Safari, or Messages, and perform actions through them. Google stated that by enabling 'additional sandbox options,' Gemini's capabilities can be expanded to work across files, websites, and native applications, rather than being limited to the chat window. However, the article points out that Google will not grant Gemini unlimited control; critical actions such as purchasing products, transferring funds, creating accounts, or modifying sensitive information will still require explicit user confirmation. Since this feature has not been officially released, and Apple is considering how difficult it is to restrict AI agents from accessing personal data, the practical application of this technology remains uncertain.",
    tags_en: ["Google Gemini", "macOS", "AI agent", "system access privileges", "sandbox options", "data leakage"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/google/google-gemini-could-soon-get-full-access-to-your-macs-files-apps-and-the-web", lang: "EN" }
    ]
  },
  {
    id: "20261003-14521",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 調整 Gemini 模型存取權限：免費與 AI Plus 用戶將面臨模型限制",
    summary: "Google 宣布調整 Gemini 模型的存取權限，影響免費用戶和 AI Plus 訂閱者。根據更新的支援文件，自 10 月 9 日起，未訂閱 Google AI 的用戶將只能使用 (3.5) Flash-Lite 模型，無法再存取 (3.6) Flash 或 (3.1) Pro。AI Plus 訂閱者（每月 $4.99）的權限也將受限，只能使用 Flash-Lite 和 Flash，而 Pro 模型將不再提供。對於 AI Pro 和 AI Ultra 的訂閱者，服務將維持不變，但 $19.99/月客戶將獲得 Deep Think 選項，用於「最大平行推理」，此功能原本僅限於 $99.99 和 $199.99/月的方案。此外，Gemini 應用程式預計將增加「低」、「中」、「高」三個努力程度級別，以提升模型完成任務和提供答案的深度，但也會增加使用限制。Google 也宣布了新的前沿模型 Gemini 4 Argon，預計將首先提供給 AI Ultra 訂閱者。",
    tags: ["Google", "Gemini", "AI Plus", "Gemini 4 Argon", "模型限制", "AI 服務"],
    title_en: "Google Adjusts Gemini Model Access: Free and AI Plus Users Face Model Restrictions",
    summary_en: "Google has announced adjustments to Gemini model access, affecting both free users and AI Plus subscribers. According to updated support documentation, starting October 9, users who do not subscribe to Google AI will only be able to use the (3.5) Flash-Lite model, losing access to (3.6) Flash or (3.1) Pro. AI Plus subscribers (at $4.99/month) will also face restrictions, limited to Flash-Lite and Flash, while the Pro model will no longer be available. Subscribers to AI Pro and AI Ultra will see no change in service, but the $19.99/month tier will gain the Deep Think option, designed for 'maximum parallel reasoning,' a feature previously exclusive to the $99.99 and $199.99/month plans. Furthermore, the Gemini application is expected to introduce three effort levels—'Low,' 'Medium,' and 'High'—to enhance the depth of the model's task completion and answer provision, though this will also increase usage limitations. Google also announced a new frontier model, Gemini 4 Argon, which is expected to be initially available only to AI Ultra subscribers.",
    tags_en: ["Google", "Gemini", "AI Plus", "Gemini 4 Argon", "Model Restrictions", "AI Services"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/03/gemini-model-limits-oct-26", lang: "EN" }
    ]
  },
  {
    id: "20261003-14522",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Pixel Fold：回顧早期摺疊螢幕設計的先見性與市場趨勢分析",
    summary: "本文非資安新聞，而是科技評論文章，討論 Google Pixel Fold 的設計演變與市場定位。文章指出，Pixel Fold 在推出時，其寬螢幕的摺疊外形（form factor）具有先見性，為多工處理和平板應用提供了優勢。作者認為，雖然當時 Android 應用生態系統尚未完全支援這種寬螢幕設計，導致 Google 曾放棄此方向。然而，隨著市場趨勢，如 Samsung Galaxy Z Fold 8 的成功，證明了寬螢幕摺疊機型正成為主流。文章分析了 Pixel Fold 的優點（寬螢幕設計）和缺點（機身厚重、指紋困擾、Tensor G2 的散熱問題），並呼籲 Google 重新關注和推動這種更寬的摺疊螢幕形式，以應對當前市場的發展趨勢。",
    tags: ["Google Pixel Fold", "摺疊螢幕", "Android", "Galaxy Z Fold 8", "Form Factor", "多工處理"],
    title_en: "Google Pixel Fold: A Retrospective on the Foresight of Early Foldable Screen Design and Market Trend Analysis",
    summary_en: "This article is a technology review, not a cybersecurity news item, discussing the design evolution and market positioning of the Google Pixel Fold. It points out that when the Pixel Fold was launched, its wide-screen foldable form factor was visionary, offering advantages for multitasking and tablet applications. The author argues that although the Android application ecosystem did not fully support this wide-screen design at the time, leading Google to abandon this direction. However, with market trends, such as the success of the Samsung Galaxy Z Fold 8, it has proven that wide-screen foldable devices are becoming mainstream. The article analyzes the Pixel Fold's strengths (wide-screen design) and weaknesses (bulkiness, fingerprint issues, and Tensor G2 thermal management problems), and calls on Google to refocus on and promote this wider foldable screen format to meet current market development trends.",
    tags_en: ["Google Pixel Fold", "Foldable Screen", "Android", "Galaxy Z Fold 8", "Form Factor", "Multitasking"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/03/googles-original-pixel-fold-was-the-right-idea-years-ahead-of-its-time", lang: "EN" }
    ]
  },
  {
    id: "20261003-14576",
    trackers: ["os"],
    category: "重點關注",
    title: "外骨骼技術應用於救援與工業：從體能輔助到軍事戰場的發展趨勢",
    summary: "外骨骼（Exoskeleton）是一種外部機械結構，透過連接到人體特定部位，旨在增強穿戴者的物理能力。該技術在多個領域得到應用，包括救援、工業作業和軍事戰場。在工業領域，IKEA、Ford、Boeing 和 Mazda Toyota 等公司已採用此技術，協助倉庫和組裝線工人處理重物，減輕肌肉負擔。在救援和消防領域，芬蘭的 ExoPELA 專案評估證實了外骨骼在實際任務中的益處。更引人注目的是，烏克蘭軍方已在戰場使用 Hypershell 外骨骼，據報告顯示，這能讓士兵「減少疲勞、工作更快，並維持更長時間的戰鬥效能」。隨著機器人馬達、感測器和控制系統成本下降，外骨骼技術已取得顯著進展，預計該產業規模將在 2030 年代中期翻倍或三倍增長。",
    tags: ["外骨骼", "Exoskeleton", "工業應用", "軍事技術", "體能輔助", "IKEA", "Hypershell"],
    title_en: "Exoskeleton Technology Applications in Rescue and Industry: Development Trends from Physical Assistance to the Battlefield",
    summary_en: "An exoskeleton is an external mechanical structure designed to connect to specific parts of the human body, aiming to enhance the wearer's physical capabilities. This technology is being applied across multiple fields, including rescue operations, industrial work, and military battlefields. In the industrial sector, companies such as IKEA, Ford, Boeing, and Mazda Toyota have adopted this technology to help warehouse and assembly line workers handle heavy objects, thereby reducing muscle strain. In rescue and firefighting fields, the ExoPELA project in Finland has confirmed the benefits of exoskeletons in real-world missions. More notably, the Ukrainian military has used Hypershell exoskeletons on the battlefield. Reports indicate that this technology allows soldiers to 'reduce fatigue, work faster, and maintain combat effectiveness for longer periods.' As the costs of robotic motors, sensors, and control systems decrease, exoskeleton technology has made significant progress, with the industry size projected to double or triple by the mid-2030s.",
    tags_en: ["Exoskeleton", "Exoskeleton", "Industrial Applications", "Military Technology", "Physical Assistance", "IKEA", "Hypershell"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/science/2026/10/the-dawn-of-the-age-of-the-exoskeleton", lang: "EN" }
    ]
  },
  {
    id: "20261003-14622",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.19 新版本發布：增強 Wayland 顏色管理、支援 Vulkan 色域與 DNS 快取",
    summary: "Wine 11.19 是 Wine 11.xx 系列的開發版本，持續為使用者提供新功能與修復。本次更新的主要亮點包括：為 GDIPlus 程式碼新增了垂直文字支援，並支援 Unicode 18.0 字符集。此外，該版本也加入了 DNS 查詢快取功能，並優化了 VBScript 解析器。最值得注意的是，Wine Wayland 驅動現在實作了 Vulkan 色域的顏色管理協定，這能顯著提升在 Wayland 環境下運行 Windows 遊戲或應用程式的色彩準確性。除了這些新功能外，Wine 11.19 還修復了 23 個已知的 Bug，涵蓋多種遊戲與應用程式的穩定性問題。使用者可透過 WineHQ.org 下載此開發版本。",
    tags: ["Wine", "Wine 11.19", "Wayland", "Vulkan", "GDIPlus", "DNS 快取"],
    title_en: "Wine 11.19 New Version Released: Enhanced Wayland Color Management, Vulkan Color Space Support, and DNS Caching",
    summary_en: "Wine 11.19 is a development build within the Wine 11.xx series, continuously providing users with new features and fixes. Key highlights of this update include: adding vertical text support to GDIPlus code and supporting the Unicode 18.0 character set. Furthermore, the version incorporates DNS query caching and optimizes the VBScript parser. Most notably, the Wine Wayland driver now implements a color management protocol for Vulkan color spaces, significantly improving color accuracy when running Windows games or applications in a Wayland environment. In addition to these new features, Wine 11.19 fixes 23 known bugs, covering stability issues across various games and applications. Users can download this development build from WineHQ.org.",
    tags_en: ["Wine", "Wine 11.19", "Wayland", "Vulkan", "GDIPlus", "DNS Cache"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.19-Released", lang: "EN" }
    ]
  },
  {
    id: "20261003-14510",
    trackers: ["security"],
    category: "產業動態",
    title: "金融當局緊急召開會議，檢視金融業多處資安事件與AI攻擊情勢",
    summary: "鑑於近期多家金融機構接連發生資安入侵事件，金融委員會（금융위원회）於4日召開了緊急檢閱會議。本次會議召集了包括銀行、金融投資、保險、餘錢、儲蓄銀行、相互金融、虛擬資產及FinTech等各金融領域的協會會長，並邀請了發生資安事件的金融機構最高管理層出席。金融委員會委員長一元銀（이억원）將親自主持會議，旨在檢視當前金融業的資安事件發展趨勢，並討論應對方案。\n\n本次召開緊急會議的原因，是因為除了原定於7日接收各金融機構的自查報告外，預伽藍儲蓄銀行（예가람저축은행）和現代資本（현대캐피탈）也發生了資訊洩露事件，導致會議提前至4日舉行。\n\n自1日以來，從新韓銀行（신한은행）開始，KB國民銀行（KB국민은행）、韓亞銀行（하나은행）、BNK釜山銀行（BNK부산은행）、預伽藍儲蓄銀行、現代資本等機構接連傳出入侵事件。特別是發現了利用AI Agent的攻擊跡象，引發了業界高度關注。然而，金融當局方面指出，目前尚需時間確認這些攻擊事件是否來自同一股勢力，或僅是自查過程中偶然發現的獨立事件。",
    tags: ["金融委員會", "資安事件", "金融機構", "AI Agent", "資訊洩露", "金融業"],
    title_en: "Financial Authorities Convene Emergency Meeting to Review Multiple Cybersecurity Incidents and AI Attack Trends in Financial Sector",
    summary_en: "Due to a series of cybersecurity intrusion incidents affecting multiple financial institutions recently, the Financial Services Commission (금융위원회) held an emergency review meeting on the 4th. The meeting gathered association heads from various financial sectors, including banking, financial investment, insurance, money market funds, savings banks, mutual finance, virtual assets, and FinTech, and also included the senior management of financial institutions that experienced security incidents. The Chairman of the Financial Services Commission, Lee Won-yun (이억원), personally chaired the meeting, which aimed to review the current trends of cybersecurity incidents in the financial industry and discuss countermeasures. The emergency meeting was called because, in addition to the self-inspection reports scheduled to be received from various financial institutions on the 7th, Ye-garan Savings Bank (예가람저축은행) and Hyundai Capital (현대캐피탈) also experienced information leakage incidents, necessitating the meeting's advancement to the 4th. Since the 1st, institutions such as Shinhan Bank (신한은행), KB Kookmin Bank (KB국민은행), Hana Bank (하나은행), BNK Busan Bank (BNK부산은행), Ye-garan Savings Bank, and Hyundai Capital have reported successive intrusion incidents. Of particular concern is the discovery of attack traces utilizing AI Agents, which has drawn high industry attention. However, financial authorities noted that more time is needed to confirm whether these attack incidents originate from the same source or are merely independent events discovered during the self-inspection process.",
    tags_en: ["Financial Services Commission", "Cybersecurity Incident", "Financial Institution", "AI Agent", "Information Leakage", "Financial Sector"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146188", lang: "EN" }
    ]
  },
  {
    id: "20261003-14511",
    trackers: ["security"],
    category: "產業動態",
    title: "藝伽藍儲蓄銀行遭駭客攻擊，個人資料外洩影響約四萬名客戶",
    summary: "藝伽藍儲蓄銀行（예가람저축은행）宣布，因駭客攻擊，其網站伺服器上的客戶個人資料遭到洩露。根據銀行發布的《個人資料洩露事實通知與致歉文》，確認在 9 月 30 日，有身份不明的駭客進入包含客戶個人資料的伺服器，導致資料外洩。洩露的個人資料項目包括客戶姓名、出生日期、聯絡電話等。預估受影響人數約為 4 萬人，但確切規模仍在確認中。銀行表示，在發現洩露事實後，已立即停止相關服務，並完成外部 IP 封鎖等緊急應對措施。此外，銀行也加強了安全監控，並在知悉事件後 24 小時內向當局報備。為協助受害者，銀行將設立客戶服務中心，並計畫向受影響客戶發送通知簡訊。此外，文章提到，在同一時間，包括新韓銀行、KB國民銀行、韓亞銀行（韓亞銀行）等主要商業銀行也接連確認遭受利用 AI 技術的駭客攻擊，雖然우리銀行和NH農協銀行也受攻擊，但表示未發生資訊洩露。",
    tags: ["藝伽藍儲蓄銀行", "個人資訊外洩", "駭客攻擊", "AI 技術", "金融安全"],
    title_en: "Yegaram Savings Bank Suffers Hacker Attack, Personal Data Leak Affecting Approximately 40,000 Customers",
    summary_en: "Yegaram Savings Bank announced that customer personal data stored on its website server was leaked due to a hacker attack. According to the bank's 'Notice of Personal Data Leak and Apology,' it was confirmed that on September 30th, unidentified hackers gained access to a server containing customer personal data, resulting in the data leak. The leaked personal data items include customer names, dates of birth, and contact phone numbers. The estimated number of affected individuals is approximately 40,000, though the exact scale is still being confirmed. The bank stated that upon discovering the leak, it immediately suspended related services and completed emergency response measures, such as external IP blocking. Furthermore, the bank has strengthened security monitoring and reported the incident to the authorities within 24 hours of becoming aware of it. To assist victims, the bank will establish a customer service center and plans to send notification SMS messages to affected customers. Additionally, the article mentions that at the same time, major commercial banks, including Shinhan Bank, KB Kookmin Bank, and Hana Bank, also consecutively confirmed suffering hacker attacks utilizing AI technology. Although Woori Bank and NH Nonghyup Bank were also attacked, they stated that no information leakage occurred.",
    tags_en: ["Yegaram Savings Bank", "Personal Data Leak", "Hacker Attack", "AI Technology", "Financial Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146186", lang: "EN" }
    ]
  }
];
