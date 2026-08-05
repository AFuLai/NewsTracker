// data-20260519.js — 2026-05-19
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-19"] = [
  {
    id: "20260519-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞 CVE-2026-43491：qrtr 服務缺乏邊界檢查導致記憶體耗盡風險",
    summary: "本漏洞 CVE-2026-43491 存在於 Linux 核心的網路服務 `qrtr` 模組中。其根本問題在於原始程式碼對每個節點（node）所新增的伺服器數量缺乏邊界檢查（bound checking）。攻擊者若發送惡意的 `NEW_SERVER` 訊息，可以持續地充斥該服務，最終導致系統記憶體耗盡（exhaust memory）。修補措施已透過限制每個節點的最大伺服器註冊數為 256 來解決此問題。此外，修補內容也包含對 `qrtr_ns_worker()` 失敗路徑的錯誤訊息進行速率限制（rate limit）。由於此漏洞已在 kernel.org 提交並修復，建議系統管理員應升級至包含此修補的 Linux 核心版本，以防止記憶體資源被惡意攻擊耗盡。",
    tags: ["Linux 核心", "CVE-2026-43491", "qrtr", "記憶體耗盡", "網路服務", "Linux 核心更新"],
    title_en: "Linux Kernel Vulnerability CVE-2026-43491: qrtr Service Lacks Boundary Checks, Leading to Memory Exhaustion Risk",
    summary_en: "The vulnerability CVE-2026-43491 exists in the `qrtr` network service module within the Linux kernel. The root cause is the lack of boundary checking in the original code regarding the number of servers added per node. If an attacker sends malicious `NEW_SERVER` messages, they can continuously fill the service, eventually leading to system memory exhaustion. The fix addresses this issue by limiting the maximum number of registered servers per node to 256. Furthermore, the patch includes rate limiting for error messages in the `qrtr_ns_worker()` failure path. Since this vulnerability has been submitted and patched on kernel.org, system administrators are advised to upgrade to a Linux kernel version containing this patch to prevent malicious depletion of memory resources.",
    tags_en: ["Linux Kernel", "CVE-2026-43491", "qrtr", "Memory Exhaustion", "Network Service", "Linux Kernel Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43491", lang: "EN" }
    ]
  },
  {
    id: "20260519-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 mpi_read_raw_from_sgl() 潛在整數下溢漏洞，防止服務拒絕 (DoS)",
    summary: "本漏洞存在於 Linux 核心的 lib/crypto 模組中，具體為 mpi_read_raw_from_sgl() 函數的整數下溢問題。當散列列表 (scatterlist, sgl) 的實際大小超過傳入的 nbytes 參數，且散列列表的前 nbytes+1 位元組為零時，循環會錯誤計算零位元組數量，導致 nbytes 發生下溢。此漏洞最初在 commit 2d4d1eea540b 引入，但直到 commit 63ba4d67594a 之後，透過 KEYCTL_PKEY_ENCRYPT 系統呼叫，若 out_len 大於 in_len 且 'in' 緩衝區填充零，便能觸發。攻擊者利用此漏洞可導致核心進入無限循環，造成軟鎖定 (soft lockup)，實質上是服務拒絕 (DoS) 攻擊。修復建議為升級 Linux 核心版本，修復了 mpi_read_raw_from_sgl() 中的整數計算邏輯。",
    tags: ["Linux 核心", "CVE-2026-43492", "mpi_read_raw_from_sgl", "整數下溢", "DoS", "lib/crypto"],
    title_en: "Linux Kernel Fixes mpi_read_raw_from_sgl() Potential Integer Underflow Vulnerability, Preventing Denial of Service (DoS)",
    summary_en: "This vulnerability resides in the Linux kernel's lib/crypto module, specifically within the mpi_read_raw_from_sgl() function, concerning an integer underflow issue. When the actual size of the scatterlist (sgl) exceeds the provided nbytes parameter, and the first nbytes+1 bytes of the scatterlist are zero, the loop incorrectly calculates the number of zero bytes, leading to an underflow of nbytes. This vulnerability was initially introduced in commit 2d4d1eea540b, but it could be triggered via the KEYCTL_PKEY_ENCRYPT system call after commit 63ba4d67594a, if out_len is greater than in_len and the 'in' buffer is zero-filled. An attacker exploiting this vulnerability can cause the kernel to enter an infinite loop, resulting in a soft lockup, which constitutes a Denial of Service (DoS) attack. The recommended fix is to upgrade the Linux kernel version, which corrects the integer calculation logic within mpi_read_raw_from_sgl().",
    tags_en: ["Linux Kernel", "CVE-2026-43492", "mpi_read_raw_from_sgl", "Integer Underflow", "DoS", "lib/crypto"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43492", lang: "EN" }
    ]
  },
  {
    id: "20260519-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 CVE-2026-43493：修復 pcrypt 處理 MAY_BACKLOG 請求的漏洞",
    summary: "本漏洞 CVE-2026-43493 存在於 Linux 核心的加密子系統 `crypto: pcrypt` 中。該問題涉及處理 `MAY_BACKLOG` 請求時，未能正確處理 `EBUSY` 錯誤值，導致系統在接收到此類請求時可能面臨不穩定的狀態。修補措施要求開發者必須檢查返回的錯誤值是否為 `EBUSY`，並過濾掉 `EINPROGRESS` 通知，以確保系統的穩定性和正確性。此修補已由 kernel.org 於 2026 年 5 月和 6 月進行更新。受影響的用戶應立即升級至包含此修補的 Linux 核心版本，以避免潛在的系統不穩定性或安全風險。建議所有系統管理員關注核心元件的更新公告，確保系統運行在最新的安全版本。",
    tags: ["Linux 核心", "CVE-2026-43493", "crypto", "pcrypt", "Linux 核心", "MAY_BACKLOG"],
    title_en: "Linux Kernel Patch CVE-2026-43493: Fixing Vulnerability in pcrypt Handling of MAY_BACKLOG Requests",
    summary_en: "This vulnerability, CVE-2026-43493, resides in the Linux kernel's encryption subsystem, `crypto: pcrypt`. The issue involves improper handling of the `EBUSY` error value when processing `MAY_BACKLOG` requests, which could lead to an unstable state when the system receives such requests. The patch requires developers to check if the returned error value is `EBUSY` and to filter out `EINPROGRESS` notifications, thereby ensuring system stability and correctness. This patch was updated by kernel.org in May and June 2026. Affected users should immediately upgrade to the Linux kernel version containing this patch to prevent potential system instability or security risks. System administrators are advised to monitor kernel component update announcements to ensure their systems are running the latest secure version.",
    tags_en: ["Linux Kernel", "CVE-2026-43493", "crypto", "pcrypt", "Linux Kernel", "MAY_BACKLOG"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43493", lang: "EN" }
    ]
  },
  {
    id: "20260519-004",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google I/O 宣布 Android CLI 穩定版與 AI Studio 整合，強化 AI Agent 驅動的開發流程",
    summary: "Google 在 I/O 大會上宣布多項開發者工具的重大更新，旨在透過 AI Agent 提升 Android 應用開發效率。其中，Android CLI 已穩定發布，提供程式化工具，使任何 AI Agent（如 Claude Code、Codex）能更輕鬆地執行核心 Android 開發任務。開發者可利用它直接存取 Android Studio 的功能，包括語義符號解析、警告分析和 Jetpack Compose 預覽渲染。此外，Android CLI 還支援透過新的 Android skills 執行端到端 UI 測試。另一個重大進展是 Google AI Studio 允許開發者僅透過提示詞（prompt）即可建構原生 Android 應用，並使用 Jetpack Compose、Kotlin 等最佳實踐。這些應用可直接分享至 Android 設備或透過 Google Play Console 進行內部測試，之後再轉移至 Android Studio 進行進階優化。這些更新代表了 Android 生態系統正朝向 AI Agent 驅動的開發模式發展，極大簡化了從原型到生產級應用（production-ready）的整個流程。",
    tags: ["Android CLI", "Google AI Studio", "AI Agent", "Jetpack Compose", "Kotlin", "Google I/O"],
    title_en: "Google I/O Announces Android CLI Stable Release and Integration with AI Studio, Strengthening AI Agent-Driven Development Workflow",
    summary_en: "At the I/O conference, Google announced major updates to several developer tools aimed at boosting Android application development efficiency through AI Agents. Notably, Android CLI has been stably released, providing a programmatic tool that allows any AI Agent (such as Claude Code or Codex) to more easily execute core Android development tasks. Developers can use it to directly access Android Studio functionalities, including semantic symbol resolution, warning analysis, and Jetpack Compose preview rendering. Furthermore, Android CLI supports end-to-end UI testing via new Android skills. Another significant advancement is Google AI Studio, which allows developers to build native Android applications solely through prompts, utilizing best practices like Jetpack Compose and Kotlin. These applications can be directly shared to Android devices or used for internal testing via the Google Play Console, before being transferred to Android Studio for advanced optimization. These updates signify that the Android ecosystem is moving toward an AI Agent-driven development model, greatly simplifying the entire process from prototype to production-ready application.",
    tags_en: ["Android CLI", "Google AI Studio", "AI Agent", "Jetpack Compose", "Kotlin", "Google I/O"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/17-things-android-developers-google-io.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google AI Studio 革命性升級：實現從提示到原生 Android 應用程式的端到端開發",
    summary: "Google 宣布 Google AI Studio 進行重大升級，讓使用者只需透過文字提示（prompt），即可在數分鐘內生成完整的原生 Android 應用程式。這極大地降低了開發門檻，無論是初學者還是資深開發者都能快速原型設計。新功能強調了原生 Android 的優勢，包括使用 Kotlin 語言和 Jetpack Compose 建立的現代化使用者體驗，以及對離線支援、背景服務和 GPS、藍牙等硬體感應器的深度整合。開發流程已全面簡化為端到端工作流：使用者可在瀏覽器內使用嵌入式 Android 模擬器進行開發與預覽；接著可透過整合的 Android Debug Bridge (adb) 直接將應用程式安裝到實體 Android 設備；最後，甚至可以直接從 AI Studio 透過 Google Play 開發者帳號，將應用程式上傳至內部測試軌道，實現極速發布。這項整合讓開發者無需安裝重型 SDK，即可在瀏覽器中完成從概念到測試發布的完整流程。",
    tags: ["Google AI Studio", "Android 開發", "Kotlin", "Jetpack Compose", "原生 Android", "AI 輔助開發"],
    title_en: "Google AI Studio Revolutionary Upgrade: Enabling End-to-End Development from Prompt to Native Android Application",
    summary_en: "Google announced a major upgrade to Google AI Studio, allowing users to generate complete native Android applications within minutes, simply by using text prompts. This significantly lowers the development barrier, enabling rapid prototyping for both beginners and experienced developers. The new features emphasize the advantages of native Android, including a modern user experience built with Kotlin and Jetpack Compose, as well as deep integration with hardware sensors like offline support, background services, GPS, and Bluetooth. The development process has been fully streamlined into an end-to-end workflow: users can develop and preview within an embedded Android emulator in the browser; subsequently, they can directly install the application onto a physical Android device using the integrated Android Debug Bridge (adb); finally, they can even upload the application to an internal testing track directly from AI Studio via a Google Play Developer account, achieving ultra-fast deployment. This integration allows developers to complete the entire process—from concept to test deployment—within the browser without needing to install heavy SDKs.",
    tags_en: ["Google AI Studio", "Android Development", "Kotlin", "Jetpack Compose", "Native Android", "AI Assisted Development"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/build-android-apps-google-ai-studio.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-006",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google TV 平台升級：透過 Gemini 強化內容發現，並要求開發者支援指點式遙控器輸入",
    summary: "Google TV 平台擁有超過 3 億月活躍裝置，使其成為重要的應用程式成長場域。本次更新重點在於提升內容的「可發現性」（discoverability）和適應新的使用者輸入模式。首先，平台整合了 Gemini AI 語音助理，開發者可利用其元數據（metadata）來幫助使用者透過語音搜尋內容，提升內容曝光。其次，隨著指點式遙控器（Pointer remote）的普及，Google 要求所有 TV 應用程式必須支援更複雜的輸入模式。開發者需確保 UI 庫能處理「懸停狀態」（hover states）、響應指點式滑動（scrollable containers）以及模擬滑鼠點擊（cursor clicks）等多模態互動。建議開發者應使用 Jetpack Compose 等現代 UI 框架，並透過連接實體滑鼠進行測試，以確保應用程式能應對遠距離、非精準的指點操作。",
    tags: ["Google TV", "Android TV", "Gemini", "Pointer remote", "Jetpack Compose", "UI/UX"],
    title_en: "Google TV Platform Upgrade: Enhancing Content Discovery with Gemini and Requiring Developer Support for Pointer Remote Input",
    summary_en: "With over 300 million monthly active devices, the Google TV platform is a critical area for application growth. This update focuses on improving content 'discoverability' and adapting to new user input patterns. First, the platform integrates the Gemini AI voice assistant, allowing developers to utilize metadata to help users search for content via voice, thereby increasing content exposure. Second, with the increasing adoption of pointer remotes, Google mandates that all TV applications must support more complex input modes. Developers must ensure that the UI library can handle 'hover states,' respond to pointer scrolling in containers, and simulate cursor clicks for multi-modal interaction. Developers are advised to use modern UI frameworks like Jetpack Compose and test with a physical mouse to ensure the application can handle long-distance, imprecise pointing operations.",
    tags_en: ["Google TV", "Android TV", "Gemini", "Pointer remote", "Jetpack Compose", "UI/UX"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/increase-google-tv-app-discovery.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-007",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android CLI 穩定版 1.0 發布，強化 AI Agent 開發能力，提升 Android 專案開發效率",
    summary: "Google 在 Google I/O '26 上宣布，Android CLI 已穩定發布 1.0 版本，為所有 Android 開發者提供更強大的命令行工具。此更新旨在提升 AI Agent 在 Android 應用程式開發中的能力。開發者現在可以透過 Android CLI，讓 AI Agent 存取 Android Studio 的深層次功能，例如靜態分析引擎、重構工具、依賴管理等，從而更精準地理解和修改開源 Android 專案。此外，Google Antigravity 2.0 也新增了可選的 Android 資源套件，包含 Android CLI，使該工具能更高效地執行從專案建立到部署的核心任務。開發者建議若使用 Android CLI，應執行 `android update` 命令以獲取最新功能，並結合 Android Studio 的專業工具進行開發，以達到生產級的品質。",
    tags: ["Android CLI", "Android Studio", "AI Agent", "Google I/O", "Android 開發", "Google Antigravity"],
    title_en: "Android CLI Stable Version 1.0 Released, Enhancing AI Agent Capabilities and Boosting Android Project Development Efficiency",
    summary_en: "At Google I/O '26, Google announced the stable release of Android CLI version 1.0, providing all Android developers with a more powerful command-line tool. This update aims to enhance the capabilities of AI Agents in Android application development. Developers can now use Android CLI to allow AI Agents access to deep-level functionalities within Android Studio, such as static analysis engines, refactoring tools, and dependency management, thereby enabling a more precise understanding and modification of open-source Android projects. Furthermore, Google Antigravity 2.0 has added an optional Android resource package, which includes Android CLI, allowing the tool to execute core tasks from project setup to deployment more efficiently. Developers are advised that if using Android CLI, they should run the `android update` command to obtain the latest features, and combine it with Android Studio's professional tools to achieve production-grade quality.",
    tags_en: ["Android CLI", "Android Studio", "AI Agent", "Google I/O", "Android Development", "Google Antigravity"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-cli-stable-1-0-agent-development.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-008",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google 啟動 Android XR Developer Catalyst 計劃，加速智慧眼鏡與擴增實境應用開發",
    summary: "隨著 Android XR 生態系統的擴展，Google 宣布啟動「Android XR Developer Catalyst Program」。此計畫旨在為開發者提供資源、硬體和資金支持，加速開發能在未來一年內上線的 XR 應用。受影響的開發者群體為所有希望在 Android XR 平台上開發應用程式的開發者。技術細節上，該計畫提供早期版本的硬體開發套件，涵蓋有線 XR 眼鏡（如 XREAL Project Aura）和智慧眼鏡（音訊與顯示器）。參與者可獲得專業技術支援，並有機會申請非償還性補助金。開發者可以使用 Kotlin 搭配 Jetpack XR SDK，或使用 Unity、Unreal Engine、Godot 等主流遊戲引擎進行開發。應用程式需在 6 到 12 個月內發布，申請截止日期為太平洋夏令時間 6 月 30 日。此舉顯示 Google 對沉浸式計算和穿戴式裝置的深度投入。",
    tags: ["Android XR", "Google", "Jetpack XR SDK", "智慧眼鏡", "擴增實境", "開發者生態系"],
    title_en: "Google Launches Android XR Developer Catalyst Program to Accelerate Smart Glasses and Augmented Reality Application Development",
    summary_en: "As the Android XR ecosystem expands, Google has announced the launch of the \"Android XR Developer Catalyst Program.\" This program aims to provide developers with resources, hardware, and funding support to accelerate the development of XR applications scheduled for release within the next year. The affected developer group includes all developers looking to build applications on the Android XR platform. Technically, the program provides early-access hardware development kits, covering wired XR glasses (such as XREAL Project Aura) and smart glasses (audio and display). Participants can receive professional technical support and have the opportunity to apply for non-repayable grants. Developers can use Kotlin with the Jetpack XR SDK, or use mainstream game engines such as Unity, Unreal Engine, and Godot for development. Applications must be released within 6 to 12 months, with the application deadline set for June 30th Pacific Daylight Time. This move demonstrates Google's deep commitment to immersive computing and wearable devices.",
    tags_en: ["Android XR", "Google", "Jetpack XR SDK", "Smart Glasses", "Augmented Reality", "Developer Ecosystem"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/apply-android-xr-developer-catalyst.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-009",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android 17 推進適應式開發生態：強制大型螢幕支援，提升多裝置應用體驗",
    summary: "Google 宣布隨著 Android 17 的發布，開發者需轉向「適應式優先開發」（adaptive first development）標準。由於用戶使用場景已從單一手機形式擴展至摺疊機、平板、筆電、車用顯示器及 XR 環境等多樣化設備，應用程式必須具備高度的彈性與響應性。Android 17 (API level 37) 提高了品質基準，將移除大型螢幕設備（寬度 > 600 dp）上對方向和可調整性的開發者選擇性排除（opt-out）。目標 API 達到 37 的應用程式，必須能適應多樣的顯示尺寸，以符合用戶期望。此外，Android 16 QPR3 已穩定支援「連接顯示器」（Connected Displays），讓 Pixel 和 Samsung 等設備可透過外部顯示器轉為桌面環境。開發者應利用 Jetpack 和新工具，確保應用程式能在多樣介面上提供一致且優化的體驗。",
    tags: ["Android 17", "適應式開發", "多裝置生態系", "API level 37", "Connected Displays", "Google Play"],
    title_en: "Android 17 Promotes Adaptive Development Ecosystem: Mandating Large Screen Support to Enhance Multi-Device Application Experience",
    summary_en: "Google announced that with the release of Android 17, developers must transition to an \"adaptive first development\" standard. As user use cases have expanded from single mobile phones to diverse devices including foldables, tablets, laptops, in-vehicle displays, and XR environments, applications must possess high flexibility and responsiveness. Android 17 (API level 37) raises quality standards by eliminating developer opt-out for large screen devices (width > 600 dp). Applications targeting API 37 must be able to adapt to diverse display sizes to meet user expectations. Furthermore, Android 16 QPR3 has stabilized support for \"Connected Displays,\" allowing devices like Pixel and Samsung to transition to a desktop environment via external displays. Developers should utilize Jetpack and new tools to ensure applications provide a consistent and optimized experience across various interfaces.",
    tags_en: ["Android 17", "Adaptive Development", "Multi-Device Ecosystem", "API level 37", "Connected Displays", "Google Play"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-adaptive-development-ecosystem.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-010",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android XR SDK Developer Preview 4 發布：強化擴增實境開發，支援音訊與顯示眼鏡",
    summary: "Google 發布 Android XR SDK 的 Developer Preview 4，持續推動跨裝置的擴增實境（XR）開發。本次更新重點在於優化針對音訊和顯示眼鏡的增強體驗，並宣布核心函式庫（如 XR Runtime, Jetpack SceneCore, ARCore for Jetpack XR）即將進入 Beta 階段。開發者可透過新的 Android XR Developer Catalyst Program 獲取早期硬體和資源。在開發層面，新增了 Jetpack Projected 的 Device Availability API，能將穿戴狀態整合至標準 Android Lifecycle.State，讓應用程式能根據裝置是否佩戴來調整行為。此外，Jetpack Compose Glimmer 亦更新，加入了 Google Sans Flex 字體，並新增了 Stacks 和 Title Chips 等互動組件，提升在光學透傳顯示器上的可用性。",
    tags: ["Android XR SDK", "Jetpack Projected", "Jetpack Compose Glimmer", "擴增實境", "Google Sans Flex", "Android 開發"],
    title_en: "Android XR SDK Developer Preview 4 Released: Enhancing AR Development with Audio and Display Glasses Support",
    summary_en: "Google has released Developer Preview 4 of the Android XR SDK, continuing to advance cross-device Augmented Reality (XR) development. This update focuses on enhancing the augmented experience for audio and display glasses, and announces that core libraries (such as XR Runtime, Jetpack SceneCore, and ARCore for Jetpack XR) are moving into the Beta phase. Developers can access early hardware and resources through the new Android XR Developer Catalyst Program. On the development front, Jetpack Projected introduced the Device Availability API, which integrates wearing status into the standard Android Lifecycle.State, allowing applications to adjust behavior based on whether the device is worn. Furthermore, Jetpack Compose Glimmer has been updated with the Google Sans Flex font and new interactive components like Stacks and Title Chips, improving usability on optical pass-through displays.",
    tags_en: ["Android XR SDK", "Jetpack Projected", "Jetpack Compose Glimmer", "Augmented Reality", "Google Sans Flex", "Android Development"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-xr-sdk-developer-preview-4-updates.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-011",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google發布 Android Performance Analyzer (APA)，提供深度系統與繪圖性能分析工具",
    summary: "Google 推出了 Android Performance Analyzer (APA)，這是一款專為 Android 生態系統開發的全新性能分析工具。APA 旨在協助開發者優化應用程式或遊戲的運行速度，特別適用於使用 Vulkan 等圖形引擎的工程師。該工具目前已開放 Beta 使用，可分析應用程式或遊戲的 CPU、GPU、記憶體和功耗使用情況，並觀察其與系統行為的互動。APA 依賴 Perfetto 進行系統追蹤，並整合了 LunarG 的 GFXReconstruct 技術來實現圖形捕獲與回放。對於運行 Android 12 或更高版本的設備，能提供最佳的系統級性能和 GPU 計數器數據。APA 可作為輕量級獨立桌面應用程式使用，或整合至 Android Studio 的 System Trace viewer 中，支援 Windows、MacOS 和 Linux 等多平台。它提供深度的系統分析能力，包括查看 CPU 核心頻率、行程線程活動，以及透過 SurfaceFlinger 事件深入了解渲染和顯示合成管線。",
    tags: ["Android", "Android Performance Analyzer", "APA", "性能分析", "Perfetto", "Vulkan", "Google"],
    title_en: "Google Releases Android Performance Analyzer (APA), Offering Deep System and Graphical Performance Analysis Tools",
    summary_en: "Google has released the Android Performance Analyzer (APA), a brand-new performance analysis tool designed for the Android ecosystem. APA aims to help developers optimize the running speed of applications or games, especially for engineers using graphics engines like Vulkan. The tool is currently available in Beta and can analyze the CPU, GPU, memory, and power consumption of applications or games, while observing their interaction with system behavior. APA relies on Perfetto for system tracing and integrates LunarG's GFXReconstruct technology to achieve graphics capture and playback. For devices running Android 12 or higher, it provides optimal system-level performance and GPU counter data. APA can be used as a lightweight standalone desktop application or integrated into the Android Studio System Trace viewer, supporting multiple platforms such as Windows, MacOS, and Linux. It offers deep system analysis capabilities, including viewing CPU core frequency, process thread activity, and gaining deep insights into the rendering and display composition pipeline through SurfaceFlinger events.",
    tags_en: ["Android", "Android Performance Analyzer", "APA", "Performance Analysis", "Perfetto", "Vulkan", "Google"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/introducing-android-performance-analyzer.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-012",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android Studio 引入 Agent Skills 提升開發效率：AI 輔助開發邁向「代理式」應用建構",
    summary: "Google 在 I/O 大會上宣布 Android 開發工具鏈的重大升級，標誌著開發模式從「AI 輔助」邁向「代理式」（Agentic）開發。新功能核心是「Agent Skills」，這是一種模組化指令集，能將大型語言模型（LLMs）錨定在專業工作流程和領域知識上。開發者可以透過新增 Skills，指導 AI 代理遵循特定的最佳實踐、架構模式或函式庫工作流程，從而實現更準確、更具上下文感知能力的程式碼生成和自動化任務執行。此外，Android Studio 現在支援多種 AI 模型（包括 Google、Anthropic、OpenAI 等），並強調本地模型 Gemma 4 的高效能。開發者還能使用 Android CLI 快速建構應用，並在 Agent Mode 下直接整合 Firebase 服務（如 Auth 和 Firestore），大幅簡化了全端應用程式的開發流程。這些更新旨在讓開發者能用更少的努力，將想法轉化為高品質的生產級應用。",
    tags: ["Android Studio", "Agentic Development", "Agent Skills", "LLMs", "Firebase", "Google I/O", "Android CLI"],
    title_en: "Android Studio Introduces Agent Skills to Boost Development Efficiency: AI-Assisted Development Moves Towards 'Agentic' Application Building",
    summary_en: "At the Google I/O conference, Google announced a major upgrade to the Android development toolchain, marking a shift in development paradigm from 'AI-assisted' to 'Agentic' development. The core of the new features is 'Agent Skills,' a modular set of instructions that anchors Large Language Models (LLMs) to specialized workflows and domain knowledge. By adding Skills, developers can guide AI agents to follow specific best practices, architectural patterns, or library workflows, thereby achieving more accurate and context-aware code generation and automated task execution. Furthermore, Android Studio now supports multiple AI models (including Google, Anthropic, and OpenAI), while also emphasizing the high performance of the local model, Gemma 4. Developers can also use the Android CLI to quickly build applications and directly integrate Firebase services (such as Auth and Firestore) in Agent Mode, significantly simplifying the full-stack application development process. These updates aim to allow developers to transform ideas into high-quality, production-grade applications with less effort.",
    tags_en: ["Android Studio", "Agentic Development", "Agent Skills", "LLMs", "Firebase", "Google I/O", "Android CLI"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-013",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google 宣布 Android UI 開發標準轉向 Compose First，View 組件進入維護模式",
    summary: "Google 宣布 Android UI 開發的重大趨勢轉變，正式推動「Compose First」策略。Jetpack Compose 已發展成 Android UI 開發的標準，Google 建議所有新的 UI 功能都應使用 Compose 構建，並鼓勵開發者在修改舊功能時，同步將其遷移至 Compose。\n\n本次更新的實務影響是，Compose 替代的 View 組件（位於 `android.widget` 套件）以及基於 View 的函式庫（如 Fragments、RecyclerView、ViewPager 等）將進入「維護模式」（maintenance mode）。這意味著 Google 將繼續為這些舊組件提供關鍵的 Bug 修復，但不會再新增任何新功能。\n\n此外，所有新的 Android Studio UI 工具和開發者指導文件（documentation, codelabs, samples）都將專注於 Jetpack Compose。開發者應利用提供的遷移工具（如 XML to Compose migration skill）協助將現有佈局轉換為 Compose，以充分利用 Compose 帶來的原生效能、適應性及開發效率。",
    tags: ["Android", "Jetpack Compose", "View 組件", "UI 開發", "Google", "Kotlin"],
    title_en: "Google Announces Shift to Compose First for Android UI Development, View Components Enter Maintenance Mode",
    summary_en: "Google has announced a major trend shift in Android UI development, formally promoting a \"Compose First\" strategy. Jetpack Compose has become the standard for Android UI development, and Google recommends that all new UI features should be built using Compose, encouraging developers to migrate existing functionalities to Compose when making modifications.\n\nThe practical implication of this update is that View components (located in the `android.widget` package) and View-based libraries (such as Fragments, RecyclerView, and ViewPager) will enter \"maintenance mode.\" This means that Google will continue to provide critical bug fixes for these older components but will no longer add any new features.\n\nFurthermore, all new Android Studio UI tools and developer documentation (documentation, codelabs, samples) will focus exclusively on Jetpack Compose. Developers should utilize the provided migration tools (such as the XML to Compose migration skill) to help convert existing layouts to Compose, thereby fully leveraging the performance, adaptability, and development efficiency that Compose offers.",
    tags_en: ["Android", "Jetpack Compose", "View Components", "UI Development", "Google", "Kotlin"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-ui-development-is-compose-first.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-014",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google 發布 Android for Cars 更新：提升車載娛樂系統的開發彈性與體驗",
    summary: "Google 宣布推出多項 Android for Cars 的更新，旨在讓開發者能為車載系統打造更豐富、更具差異化的用戶體驗。本次更新重點包括提升 Car App Library 的模組化程度，並推出新的組件和模板功能。開發者現在可以為 Android Automotive OS 建立客製化的媒體瀏覽與播放體驗，實現「一次開發，多平台部署」的目標。此外，Google 也更新了 Android Automotive OS 模擬器系統映像，支援使用 Car App Library 媒體模板建構的應用程式。透過 Car App Library 1.9.0-alpha01 等版本，開發者可利用擴展的標頭、可滾動的亮點區塊，以及新增的 Chip 和 CondensedItem 等組件，大幅提升內容展示和互動性，讓應用程式在不同車載資訊娛樂螢幕上更具吸引力。",
    tags: ["Android for Cars", "Android Automotive OS", "Car App Library", "Google I/O", "車載系統", "Android 開發"],
    title_en: "Google Releases Android for Cars Update: Enhancing Development Flexibility and Experience for In-Vehicle Infotainment Systems",
    summary_en: "Google announced several updates to Android for Cars, aimed at enabling developers to create richer and more differentiated user experiences for in-vehicle systems. Key highlights of this update include improving the modularity of the Car App Library and introducing new component and template functionalities. Developers can now build customized media browsing and playback experiences for Android Automotive OS, achieving the goal of 'develop once, deploy on multiple platforms.' Furthermore, Google updated the Android Automotive OS simulator system image to support applications built using the Car App Library media templates. With versions such as Car App Library 1.9.0-alpha01, developers can significantly enhance content display and interactivity by utilizing extended headers, scrollable highlight blocks, and newly added components like Chip and CondensedItem, making applications more appealing across various in-vehicle infotainment screens.",
    tags_en: ["Android for Cars", "Android Automotive OS", "Car App Library", "Google I/O", "In-Vehicle Systems", "Android Development"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-for-cars-unifying-platforms-premium-experiences.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-015",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google I/O 2026 重磅發布：擴展 Android 生態系，透過 Gemini 與 Play Shorts 提升應用程式曝光與用戶互動",
    summary: "本次 Google I/O 發表了多項旨在擴大應用程式觸及範圍的更新。核心重點包括將應用程式和內容的發現機制延伸至 Gemini 虛擬助理，用戶將能在 Gemini 介面直接搜尋和發現應用程式，並能深度連結至內容。此外，Google Play 透過 Engage SDK 提升了內容的個人化分發能力，支援跨越超過 80 個市場，並在平板主畫面等新介面展示。在 Play Store 本身，Google 推出 Play Shorts，這是一個全螢幕、垂直短影音格式，讓開發者能以更具吸引力的形式展示應用程式的特色。這些更新的實務影響是讓應用程式的曝光點不再局限於 Play Store，而是融入用戶的日常搜尋和多設備使用場景，極大提升了用戶的發現率和再參與度。開發者應積極利用 Gemini 整合和 Engage SDK 的新功能，以確保內容能在多個新介面和搜尋路徑中被發現。",
    tags: ["Google Play", "Android", "Gemini", "Play Shorts", "Engage SDK", "應用程式生態系"],
    title_en: "Google I/O 2026 Major Release: Expanding the Android Ecosystem through Gemini and Play Shorts to Enhance App Visibility and User Engagement",
    summary_en: "This Google I/O unveiled multiple updates aimed at expanding application reach. Key highlights include extending the discovery mechanism for apps and content into the Gemini virtual assistant. Users will now be able to search for and discover applications directly within the Gemini interface, with deep linking capabilities to content. Furthermore, Google Play enhanced content personalization distribution with the Engage SDK, supporting over 80 markets and featuring new display formats, such as on tablet home screens. Within the Play Store itself, Google introduced Play Shorts, a full-screen, vertical short video format that allows developers to showcase app features in a more engaging manner. The practical impact of these updates is that app visibility is no longer limited to the Play Store, but is integrated into users' daily search and multi-device usage scenarios, greatly boosting user discoverability and re-engagement. Developers should actively utilize the new Gemini integration and Engage SDK features to ensure their content is discoverable across multiple new interfaces and search paths.",
    tags_en: ["Google Play", "Android", "Gemini", "Play Shorts", "Engage SDK", "Application Ecosystem"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/io-2026-whats-new-in-google-play.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-016",
    trackers: ["os", "security"],
    category: "Android",
    title: "Wear OS 7 重磅登場：提升電池效率、整合 Gemini AI，並推出動態 Widget 與 Live Updates",
    summary: "Google 發布 Wear OS 7，為智慧手錶生態系統帶來重大更新，重點在於提升電力效率和智慧功能。相較於 Wear OS 6，平均用戶預期電池續航力可提升高達 10%。新版本將整合 Gemini Intelligence，提供更主動、個人化的協助。開發者方面，Wear OS 7 引入了 Live Updates 和增強的媒體控制等新功能，並透過 Wear Compose 1.6 和 AppFunctions 等工具，讓開發者能打造更流暢、直觀的應用程式。此外，新的 Wear Widgets 採用 Jetpack Glance 和 RemoteCompose 框架，提供更具表達力且與 Compose 一致的設計體驗，支援小/大兩種卡片佈局，確保跨設備設計的協調性。開發者可透過 Wear OS 7 Canary 模擬器（基於 Android 17）進行測試，以掌握新平台的能力。",
    tags: ["Wear OS 7", "Google", "Gemini Intelligence", "Android 17", "Jetpack Glance", "Wear Widgets"],
    title_en: "Wear OS 7 Makes a Grand Entrance: Enhanced Battery Efficiency, Gemini AI Integration, and Dynamic Widgets with Live Updates",
    summary_en: "Google has released Wear OS 7, bringing major updates to the smartwatch ecosystem, with a focus on improving power efficiency and smart features. Compared to Wear OS 6, average user expected battery life can increase by up to 10%. The new version integrates Gemini Intelligence, providing more proactive and personalized assistance. For developers, Wear OS 7 introduces new features like Live Updates and enhanced media controls, and utilizes tools such as Wear Compose 1.6 and AppFunctions, allowing developers to build smoother and more intuitive applications. Furthermore, the new Wear Widgets adopt the Jetpack Glance and RemoteCompose frameworks, offering a more expressive and Compose-consistent design experience. They support both small and large card layouts, ensuring coordination in cross-device design. Developers can test the platform's capabilities using the Wear OS 7 Canary simulator (based on Android 17).",
    tags_en: ["Wear OS 7", "Google", "Gemini Intelligence", "Android 17", "Jetpack Glance", "Wear Widgets"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/whats-new-wear-os-7.html", lang: "EN" }
    ]
  },
  {
    id: "20260519-017",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Android XR開發進展：Google推出Engine Hub，支援Unreal Engine與Godot，加速跨平台開發流程",
    summary: "Google宣布推出Android XR Engine Hub，旨在統一Unity、Unreal Engine和Godot等主流遊戲引擎在Android XR的開發工作流程。此Hub作為開發控制中心，透過高頻寬橋接，將設備的感知數據（如手部追蹤、眼球注視、環境平面檢測等）即時串流至開發者的Windows工作站。這大幅提升了開發效率，開發者無需每次修改都進行完整的APK建置與安裝，即可在「播放模式」下進行低延遲測試。支援的關鍵技術包括OpenXR擴展，例如`XR_EXT_hand_tracking`、`XR_EXT_eye_gaze_interaction`等，以及Android XR的臉部追蹤和環境理解功能。對於Unreal Engine，目前已提供開發者預覽版支援，透過專用插件可利用OpenXR和Android XR的平台特定API，進一步深化了XR應用開發的便利性。",
    tags: ["Android XR", "OpenXR", "Unreal Engine", "Godot", "Android Developer", "XR開發"],
    title_en: "Android XR Development Progress: Google Launches Engine Hub to Support Unreal Engine and Godot, Accelerating Cross-Platform Development Workflow",
    summary_en: "Google has announced the launch of the Android XR Engine Hub, designed to unify the development workflow for major game engines like Unity, Unreal Engine, and Godot on Android XR. This Hub acts as a development control center, streaming the device's sensory data (such as hand tracking, eye gaze, and environmental plane detection) in real-time to the developer's Windows workstation via high-bandwidth bridging. This significantly boosts development efficiency, allowing developers to perform low-latency testing in 'Play Mode' without needing a full APK build and installation after every modification. Key supported technologies include OpenXR extensions, such as `XR_EXT_hand_tracking` and `XR_EXT_eye_gaze_interaction`, along with Android XR's face tracking and environmental understanding features. For Unreal Engine, a developer preview is currently available, utilizing a dedicated plugin that leverages OpenXR and Android XR's platform-specific APIs, further enhancing the convenience of XR application development.",
    tags_en: ["Android XR", "OpenXR", "Unreal Engine", "Godot", "Android Developer", "XR Development"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-xr-updates-unity-unreal-godot.html", lang: "EN" }
    ]
  }
];
