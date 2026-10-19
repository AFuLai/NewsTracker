// data-20261017.js — 2026-10-17
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-17"] = [
  {
    id: "20261017-16360",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心修復罕見的 SMP 啟動掛起問題，影響自 2024 年的 KThreads",
    summary: "本修復針對 Linux 核心中自 2024 年 9 月引入的 printer KThreads 相關程式碼，解決了在常見的 SMP 系統啟動時可能發生的罕見掛起（hang）問題。問題根源被追溯到非阻塞式控制台輸出（NBCON）的 KThreads 過早啟動。由於這些 KThreads 在早期啟動階段（early_initcall()）會異步地啟用/禁用中斷，可能干擾到早期 SMP 設置過程，導致系統掛起。修復方案是將 NBCON 控制台列印 KThreads 的啟動時間延遲到所有 arch initcalls 完成之後。此修復已合併，預計將從 Linux 7.3 核心版本回溯（back-ported）到其他目前支援的核心分支，以避免系統掛起。建議系統管理員關注未來核心更新，確保系統運行在修復後的版本。",
    tags: ["Linux 核心", "SMP", "KThreads", "NBCON", "Linux 7.3", "核心修復"],
    title_en: "Linux Kernel Fixes Rare SMP Boot Hang Issue Affecting KThreads Since 2024",
    summary_en: "This fix addresses a rare hang issue in the Linux kernel related to printer KThreads code introduced in September 2024. The problem was traced back to the premature startup of KThreads for Non-Blocking Console Output (NBCON). Because these KThreads asynchronously enable/disable interrupts during the early startup phase (early_initcall()), they could potentially interfere with the early SMP setup process, leading to system hangs. The solution is to delay the startup of NBCON console printing KThreads until after all arch initcalls are complete. This fix has been merged and is expected to be back-ported to other currently supported kernel branches, preventing system hangs. System administrators are advised to monitor future kernel updates and ensure their systems are running the patched version.",
    tags_en: ["Linux Kernel", "SMP", "KThreads", "NBCON", "Linux 7.3", "Kernel Fix"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-KThreads-NBCON", lang: "EN" }
    ]
  },
  {
    id: "20261017-16362",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心修復 Samsung 990 PRO 與 990 EVO Plus SSD 的 Immediate Readiness 兼容性問題",
    summary: "隨著 Linux 7.3 穩定核心的即將發布，開發者為 Samsung 990 PRO 和 Samsung 990 EVO Plus NVMe 固態硬碟加入了緊急修復。問題出在 PCIe 4.0 引入的 Immediate Readiness 位元，用於指示驅動器在重置後可立即處理配置請求。然而，部分版本的 Samsung 990 PRO 和 990 EVO Plus 韌體在未實際支援此功能的情況下，卻錯誤地宣告了 Immediate Readiness。這種錯誤宣告導致 Linux 核心在重置後無法正確恢復配置，特別是破壞了 VFIO 轉傳（pass-through）功能。Linux 7.3 的修復透過讓核心忽略這些錯誤宣告，確保了系統穩定性。此修復對於使用這些特定型號 SSD 進行虛擬化或需要穩定 I/O 性能的環境至關重要。",
    tags: ["Linux 7.3", "Samsung 990 PRO", "Samsung 990 EVO Plus", "NVMe", "PCIe 4.0", "VFIO"],
    title_en: "Linux 7.3 Kernel Fix Addresses Immediate Readiness Compatibility Issue for Samsung 990 PRO and 990 EVO Plus SSDs",
    summary_en: "With the upcoming release of the Linux 7.3 stable kernel, developers have included an emergency fix for the Samsung 990 PRO and Samsung 990 EVO Plus NVMe solid-state drives. The issue stems from the Immediate Readiness bit introduced in PCIe 4.0, which indicates whether a drive can immediately handle configuration requests after a reset. However, certain firmware versions of the Samsung 990 PRO and 990 EVO Plus incorrectly declare Immediate Readiness even when the feature is not actually supported. This erroneous declaration causes the Linux kernel to fail to properly restore configuration after a reset, particularly disrupting VFIO pass-through functionality. The Linux 7.3 fix addresses this by having the kernel ignore these incorrect declarations, thereby ensuring system stability. This patch is critical for environments utilizing these specific models of SSDs for virtualization or those requiring stable I/O performance.",
    tags_en: ["Linux 7.3", "Samsung 990 PRO", "Samsung 990 EVO Plus", "NVMe", "PCIe 4.0", "VFIO"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Samsung-990-Immediate", lang: "EN" }
    ]
  },
  {
    id: "20261017-16363",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.9 即將推出全新天氣小工具與重新設計的螢幕鍵盤",
    summary: "KDE 開發團隊在 Plasma 6.9 版本中持續進行功能優化。本次更新的重點包括重新設計的天氣小工具，該小工具透過 Open-Meteo 獲取天氣預報資訊，相較於舊版有顯著的佈局和資訊展示改善。此外，Plasma 6.9 還引入了重新設計的螢幕鍵盤，使用者可選擇全尺寸鍵盤、日文輸入法（Japanese flick keyboard）等，且佈局不再受限於系統地區設定。除了這些主要功能升級外，Plasma 6.9 也包含多項錯誤修復和一般改進，並為 Plasma 6.8.1 的錯誤修復點發布做準備。這些更新旨在提升使用者介面體驗和功能性。",
    tags: ["KDE Plasma", "Plasma 6.9", "Open-Meteo", "Linux", "使用者介面"],
    title_en: "KDE Plasma 6.9 to Launch New Weather Widget and Redesigned On-Screen Keyboard",
    summary_en: "The KDE development team continues to enhance functionality in the Plasma 6.9 version. Key highlights of this update include a redesigned weather widget, which retrieves weather forecast information via Open-Meteo. This new widget features significant improvements in layout and information display compared to previous versions. Furthermore, Plasma 6.9 introduces a redesigned on-screen keyboard, allowing users to select options such as a full-size keyboard or a Japanese flick keyboard. Crucially, the layout is no longer restricted by system locale settings. Beyond these major feature upgrades, Plasma 6.9 also includes various bug fixes and general improvements, and prepares for the release of a bug fix point for Plasma 6.8.1. These updates aim to enhance the overall user interface experience and functionality.",
    tags_en: ["KDE Plasma", "Plasma 6.9", "Open-Meteo", "Linux", "User Interface"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.9-Weather-Keyboard", lang: "EN" }
    ]
  },
  {
    id: "20261017-16364",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Ubuntu Touch 24.04-2.1 更新：修補無密碼提升管理員權限漏洞，並新增多款硬體支援",
    summary: "Ubuntu Touch 發布了 24.04-2.1 版本，並同時發布了前一個系列的維護更新 24.04-1.5。兩次更新都包含一項重要的安全修補，修復了允許未限制應用程式（unconfined applications）無需密碼即可提升管理員權限的漏洞。該漏洞的根源在於任何未限制應用程式都可以透過 D-Bus 與系統級的 lomiri-download-manager 和 lomiri-upload-manager 進行通訊，從而執行任意指令或以 root 權限讀取設備上的任何檔案。此外，24.04-2.1 版本最大的亮點是擴展了支援的設備清單，新增了 Nothing Phone (1)、OnePlus Nord N10、OnePlus Nord N100、Volla Tablet、Xiaomi Redmi Note 9 Pro (Global) 等多款設備的支援。Ubuntu Touch 也更新了 Morph Browser 引擎，採用了較新的 QtWebEngine 版本，並帶來了其他多項修復與改進。",
    tags: ["Ubuntu Touch", "24.04-2.1", "D-Bus", "Linux", "安全修補", "QtWebEngine"],
    title_en: "Ubuntu Touch 24.04-2.1 Update: Patches Passwordless Privilege Escalation Vulnerability and Adds Multiple Hardware Supports",
    summary_en: "Ubuntu Touch released version 24.04-2.1, alongside a maintenance update for the previous series, 24.04-1.5. Both updates include a critical security patch that fixes a vulnerability allowing unconfined applications to escalate administrator privileges without a password. The vulnerability stems from any unconfined application being able to communicate with the system-level lomiri-download-manager and lomiri-upload-manager via D-Bus, thereby executing arbitrary commands or reading any file on the device with root privileges. Furthermore, the biggest highlight of the 24.04-2.1 version is the expanded list of supported devices, adding support for multiple devices such as the Nothing Phone (1), OnePlus Nord N10, OnePlus Nord N100, Volla Tablet, and Xiaomi Redmi Note 9 Pro (Global). Ubuntu Touch also updated the Morph Browser engine, adopting a newer QtWebEngine version, and bringing other fixes and improvements.",
    tags_en: ["Ubuntu Touch", "24.04-2.1", "D-Bus", "Linux", "Security Patch", "QtWebEngine"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Ubuntu-Touch-24.04-2.1", lang: "EN" }
    ]
  },
  {
    id: "20261017-16406",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 Secure Boot 憑證期限逼近：Microsoft 警告舊版系統將面臨安全保護空窗期",
    summary: "Microsoft 的 Windows 啟動載入器（boot loader）所使用的 Production PCA 2011 憑證將於 2026 年 10 月 19 日到期。Secure Boot 是一個 UEFI 韌體功能，用於檢查從 UEFI 驅動到作業系統的每個啟動軟體簽名。隨著舊憑證的過期，雖然電腦仍可正常啟動並執行標準 Windows 更新，但將無法再接收針對早期啟動流程的新安全保護。若未更新至 2023 年的憑證，系統將錯過修補新發現的啟動鏈漏洞，例如 2023 年的 bootkit BlackLotus。用戶應透過 Windows Update 檢查 Secure Boot 狀態，確保已應用所有必要的憑證更新。若遇到「Hardware or firmware limitations」或「Can no longer receive required updates」等警告，建議查閱 PC 製造商（如 Dell、HP、Lenovo 等）的支援頁面，進行 BIOS 更新。Microsoft 建議開發者不要將 Secure Boot 憑證硬編碼到應用程式中，並強調系統必須同時具備 2023 憑證和新的啟動管理器才算完全更新。",
    tags: ["Windows 11", "Secure Boot", "UEFI", "Microsoft", "PCA 2011", "Windows Update"],
    title_en: "Windows 11 Secure Boot Certificate Expiration Nears: Microsoft Warns Older Systems Will Face Security Protection Gap",
    summary_en: "The Production PCA 2011 certificate used by the Windows boot loader will expire on October 19, 2026. Secure Boot is a UEFI firmware feature that checks the digital signature of every startup software, from the UEFI driver to the operating system. With the expiration of the old certificate, although the computer can still boot and run standard Windows updates, it will no longer receive new security protections for the early boot process. If not updated to the 2023 certificate, the system will miss patches for newly discovered boot chain vulnerabilities, such as the 2023 bootkit BlackLotus. Users should check the Secure Boot status via Windows Update to ensure all necessary certificate updates have been applied. If encountering warnings such as \"Hardware or firmware limitations\" or \"Can no longer receive required updates,\" it is recommended to consult the support pages of the PC manufacturer (such as Dell, HP, Lenovo, etc.) and perform a BIOS update. Microsoft advises developers not to hardcode Secure Boot certificates into applications, and emphasizes that the system is only fully updated when it possesses both the 2023 certificate and the new boot manager.",
    tags_en: ["Windows 11", "Secure Boot", "UEFI", "Microsoft", "PCA 2011", "Windows Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/17/windows-11s-last-secure-boot-deadline-hits-monday-microsoft-reveals-what-happens-to-your-pc", lang: "EN" }
    ]
  },
  {
    id: "20261017-16407",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 引入「加速應用程式啟動」功能，讓 Edge 等單例應用程式啟動更快速",
    summary: "微軟在 Windows 11 的最新 Release Preview 更新中，推出了「加速應用程式啟動」（accelerated app launches）功能。此功能主要針對已在背景運行的單例應用程式（single-instanced app），例如 Microsoft Edge。傳統上，當使用者從工作列或開始選單啟動此類應用程式時，Windows 會先啟動一個額外的臨時程序（extra, temporary process）來檢查應用程式是否正在運行，再將請求轉交給主程序，這個中間步驟會造成延遲，尤其是在多工處理（multitasking）的繁忙設備上。新的機制允許 Windows 直接將啟動請求路由到正在運行的實例，從而大幅縮短啟動路徑，提升使用者體驗。目前此功能僅限於 Edge 等應用程式的「暖啟動」（warm launches）情境，即應用程式已在背景運行。雖然微軟目標是讓所有 Windows 應用程式都能受益，但開發者需透過請求「解鎖權杖」（unlock token）等方式，使用實驗性 API 才能啟用，且功能尚未全面開放。此更新屬於漸進式推出，建議使用者留意後續的 Windows 11 補丁更新。",
    tags: ["Windows 11", "Microsoft Edge", "加速應用程式啟動", "Windows 25H2", "單例應用程式", "KB5127936"],
    title_en: "Windows 11 Introduces 'Accelerated App Launches' Feature for Faster Startup of Single-Instance Applications like Edge",
    summary_en: "Microsoft has introduced an 'accelerated app launches' feature in the latest Windows 11 Release Preview update. This feature primarily targets single-instanced applications, such as Microsoft Edge, that are already running in the background. Traditionally, when a user launches such an application from the taskbar or Start Menu, Windows would first start an extra, temporary process to check if the application is already running, before forwarding the request to the main process. This intermediate step causes delay, especially on busy, multitasking devices. The new mechanism allows Windows to route the launch request directly to the running instance, significantly shortening the launch path and improving user experience. Currently, this feature is limited to 'warm launch' scenarios for applications like Edge, meaning the application is already running in the background. Although Microsoft aims for all Windows applications to benefit, developers must use experimental APIs, such as requesting an 'unlock token,' to enable it, and the feature is not yet fully available. This update is rolled out gradually, and users are advised to monitor subsequent Windows 11 patch updates.",
    tags_en: ["Windows 11", "Microsoft Edge", "Accelerated App Launches", "Windows 25H2", "Single-Instance Application", "KB5127936"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/17/microsoft-is-killing-a-pointless-extra-process-that-slows-windows-11-app-launches-but-you-cant-force-enable-it-yet", lang: "EN" }
    ]
  },
  {
    id: "20261017-16408",
    trackers: ["os"],
    category: "Windows",
    title: "前 Windows 高層批評 Windows 11 26H2 任務列功能仍不完善，缺乏自動隱藏與拖曳支援",
    summary: "前微軟 Windows 負責人 Mikhail Parakhin 批評 Windows 11 26H2 更新的任務列體驗仍不夠完善，指出儘管系統已支援可移動任務列，但關鍵的自動隱藏（Auto-hide）功能在頂部或側邊仍無法正常運作。Parakhin 認為，此缺陷使得 Windows 11 的任務列體驗遠不如 Windows 10。文章指出，雖然 Windows 11 透過設定介面可將任務列移動至螢幕邊緣，但缺乏像 Windows 10 那樣直接拖曳移動的便利性，且自動隱藏功能僅限於底部。此外，Windows 11 的右鍵選單功能和手動調整任務列大小的能力也相較於 Windows 10 仍有明顯不足。這顯示微軟在推出「現代任務列」時，許多進階用戶習慣和功能尚未完全復刻，影響了生產力使用體驗。",
    tags: ["Windows 11", "Windows 10", "任務列", "26H2", "Microsoft", "使用者體驗"],
    title_en: "Former Windows Executive Criticizes Windows 11 26H2 Taskbar Functionality as Still Imperfect, Lacking Auto-Hide and Drag Support",
    summary_en: "Former Microsoft Windows executive Mikhail Parakhin criticized the taskbar experience in the Windows 11 26H2 update, stating that while the system supports a movable taskbar, the critical auto-hide function does not work correctly when positioned at the top or side. Parakhin believes this flaw makes the Windows 11 taskbar experience significantly inferior to Windows 10. The article points out that although Windows 11 allows users to move the taskbar to the screen edge via settings, it lacks the convenience of direct drag-and-drop movement found in Windows 10, and the auto-hide function is limited to the bottom. Furthermore, Windows 11's right-click context menu functionality and manual taskbar resizing capabilities are noticeably deficient compared to Windows 10. This suggests that Microsoft has not fully replicated many advanced user habits and features when introducing the 'modern taskbar,' impacting the overall productivity experience.",
    tags_en: ["Windows 11", "Windows 10", "Taskbar", "26H2", "Microsoft", "User Experience"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/17/cmon-man-former-windows-boss-calls-out-windows-11-26h2s-half-baked-taskbar-says-its-not-usable-yet", lang: "EN" }
    ]
  },
  {
    id: "20261017-16231",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Drupal修補兩項關鍵漏洞：Field UI與Entity List可導致遠端程式碼執行",
    summary: "內容管理系統 Drupal 修補了兩項關鍵漏洞，可能允許攻擊者在任何支援版本的網站上執行遠端程式碼。受影響的漏洞包括 Field UI 模組的 CVE-2026-108097，以及 Entity List 模組的 CVE-2026-108099。Drupal 官方警告，由於漏洞已公開，攻擊者可能在短時間內開發出利用程式。CVE-2026-108097 的漏洞雖然不能單獨利用 Drupal 核心，但透過貢獻模組或自訂程式碼可提供多種利用路徑，其中至少有一種無需身份驗證。CVE-2026-108099 的利用也需要與貢獻模組或自訂程式碼互動，且包含至少一種無需身份驗證的已知利用路徑。管理員應根據其發行分支，將 Drupal 核心升級至版本 10.6.19、11.3.19 或 11.4.10，並將 Entity List 升級至 3.0.10。若無法升級，建議解除安裝 Drupal 核心的 Field UI 模組作為緩解措施。",
    tags: ["Drupal", "CVE-2026-108097", "CVE-2026-108099", "遠端程式碼執行", "CMS", "模組漏洞"],
    title_en: "Drupal Patches Two Critical Vulnerabilities: Field UI and Entity List Could Lead to Remote Code Execution",
    summary_en: "The Content Management System Drupal has patched two critical vulnerabilities that could allow attackers to execute remote code on any supported version of the site. The affected vulnerabilities include CVE-2026-108097 in the Field UI module, and CVE-2026-108099 in the Entity List module. Drupal officially warns that since the vulnerabilities are public, attackers may develop exploit code in a short period. While CVE-2026-108097 cannot be exploited directly against the Drupal core, it offers multiple exploitation paths through contributed or custom code, at least one of which requires no authentication. Exploiting CVE-2026-108099 also requires interaction with contributed or custom code and includes at least one known unauthenticated exploitation path. Administrators should upgrade the Drupal core to version 10.6.19, 11.3.19, or 11.4.10, depending on their release branch, and upgrade Entity List to 3.0.10. If upgrading is not possible, uninstalling the Field UI module from the Drupal core is recommended as a mitigation measure.",
    tags_en: ["Drupal", "CVE-2026-108097", "CVE-2026-108099", "Remote Code Execution", "CMS", "Module Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/drupal-patches-critical-rce-flaws-warns-exploits-may-emerge-soon", lang: "EN" }
    ]
  },
  {
    id: "20261017-16285",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 預警 iPhone Duo 上市日可能缺乏現貨，建議用戶提前預購",
    summary: "根據 MacRumors 報導，Apple 員工已收到指示，告知顧客在 iPhone Duo 上市日，若未提前預購，可能無法透過店面購買到該設備。Apple 官網雖建議用戶於 10 月 24 日查看供貨情況，但 MacRumors 指出這並非購買的保證。Apple 此前已表示 iPhone Duo 的需求「極高」，但業界長期以來一直預期生產限制將導致上市初期供應有限。這項消息證實了即使用戶在發布前夜排隊，也可能無法取得設備。目前市場普遍預計，如果供應限制持續，用戶在可預見的未來很難購買到設備，且市場上已出現高價的轉售行為。建議用戶若急需購買，可考慮透過電信商或 Best Buy 等渠道。",
    tags: ["Apple", "iPhone Duo", "MacRumors", "供應鏈", "產品發布"],
    title_en: "Apple Warns iPhone Duo May Face Stock Shortages on Launch Day, Advising Early Pre-Ordering",
    summary_en: "According to MacRumors, Apple employees have been instructed to inform customers that if they do not pre-order the iPhone Duo before its launch date, they may not be able to purchase the device in physical stores. Although the official Apple website suggests checking stock availability on October 24th, MacRumors points out that this does not guarantee a purchase. Apple previously stated that demand for the iPhone Duo is 'extremely high,' but the industry has long anticipated that production limitations would lead to limited supply in the initial launch period. This news confirms that even if users queue up the night before the release, they might still not be able to acquire the device. Currently, the market generally expects that if supply constraints persist, users will find it difficult to purchase the device in the foreseeable future, and high-priced resale activity has already appeared in the market. Users who urgently need to purchase the device are advised to consider channels such as carriers or Best Buy.",
    tags_en: ["Apple", "iPhone Duo", "MacRumors", "Supply Chain", "Product Launch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/17/iphone-duo-walk-in-purchases-challenging-report", lang: "EN" }
    ]
  },
  {
    id: "20261017-16288",
    trackers: ["os"],
    category: "Apple",
    title: "EE英國電信商宣布iPhone Handoff定價：可免費加入或每月收取費用",
    summary: "本文報導英國電信商EE宣布iPhone Handoff服務的定價細節。iPhone Handoff是一項允許用戶在多部iPhone間使用同一eSIM的服務，可讓用戶在不同機型間輕鬆切換，確保通訊、通話和訊息通知的連續性。Apple在新品發表會上宣布了該功能，並獲得T-Mobile、Verizon和Deutsche Telekom等電信商支持。根據報導，EE將此服務作為其Full Works Plus方案的附加內容提供，用戶可免費使用；若選擇其他方案，則需每月支付£5。這項功能旨在提供極高的靈活性和便利性，讓用戶無論在何處都能保持通訊不中斷。雖然Apple已宣布該功能將在年底前推出，但目前EE仍表示服務「即將推出」。",
    tags: ["EE", "iPhone Handoff", "eSIM", "Apple", "英國電信商"],
    title_en: "UK Telecom Provider EE Announces Pricing for iPhone Handoff: Free Inclusion or Monthly Fee",
    summary_en: "This article reports on the pricing details announced by UK telecom provider EE for the iPhone Handoff service. iPhone Handoff is a service that allows users to use the same eSIM across multiple iPhones, enabling seamless switching between different devices and ensuring continuity of communication, calls, and message notifications. Apple announced this feature at a new product launch event, receiving support from carriers such as T-Mobile, Verizon, and Deutsche Telekom. According to the report, EE will offer this service as an add-on to its Full Works Plus plan, which users can access for free; however, users selecting other plans will be charged £5 per month. This feature aims to provide extremely high flexibility and convenience, ensuring users maintain uninterrupted communication regardless of their location. Although Apple has announced that the feature will be available by the end of the year, EE currently states that the service is 'coming soon.'",
    tags_en: ["EE", "iPhone Handoff", "eSIM", "Apple", "UK Telecom Provider"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/17/iphone-handoff-pricing-details-ee-uk", lang: "EN" }
    ]
  },
  {
    id: "20261017-16290",
    trackers: ["os"],
    category: "Apple",
    title: "macOS 27 (Golden Gate) 將移除 Rosetta 支援，企業需提前規劃遷移策略",
    summary: "隨著 macOS 27 (代號 Golden Gate) 的發布，Apple 將會自動移除對 Rosetta 的支援。這對管理包含仍使用 Intel 專用軟體的設備群（fleet）的企業用戶構成重大挑戰。文章提醒企業管理者，如果其設備群仍依賴任何過時的 Intel 專用軟體，必須提前制定周密的遷移計畫，以避免用戶在系統更新後遇到功能性問題。這項變動代表 Apple 生態系統正加速轉向 Apple Silicon 原生架構，要求所有軟體供應商必須及時更新產品，提供原生支援的工具，否則將無法在新的 macOS 版本上正常運作。企業應主動評估現有軟體堆棧，並規劃將所有應用程式遷移至 Apple Silicon 原生版本，以確保業務連續性。",
    tags: ["macOS 27", "Rosetta", "Apple Silicon", "Intel", "企業設備管理", "Apple 生態系統"],
    title_en: "macOS 27 (Golden Gate) to Deprecate Rosetta Support, Requiring Enterprise Planning for Migration Strategy",
    summary_en: "With the release of macOS 27 (codenamed Golden Gate), Apple will automatically remove support for Rosetta. This poses a significant challenge for enterprise users managing device fleets that still utilize Intel-specific software. The article advises enterprise administrators that if their device fleets still rely on any outdated Intel-specific software, they must proactively develop a comprehensive migration plan to prevent functional issues for users after a system update. This change signifies Apple's ecosystem accelerating its shift toward the Apple Silicon native architecture, requiring all software vendors to update their products promptly and provide natively supported tools, or they will fail to operate correctly on the new macOS version. Enterprises should proactively assess their current software stack and plan to migrate all applications to Apple Silicon native versions to ensure business continuity.",
    tags_en: ["macOS 27", "Rosetta", "Apple Silicon", "Intel", "Enterprise Device Management", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/17/how-im-preparing-my-fleet-for-rosettas-removal-in-macos-27", lang: "EN" }
    ]
  },
  {
    id: "20261017-16292",
    trackers: ["os"],
    category: "Apple",
    title: "Verizon 確認對 iPhone Handoff 收費 $10/月，與 T-Mobile 價格成倍差異",
    summary: "Apple 在 WWDC 上展示了 iOS 27 新功能 iPhone Handoff，該功能允許用戶在兩台 iPhone 之間共用單一電話號碼。該功能最初由 T-Mobile 和 Deutsche Telekom 支持，預計今年底會擴展至 Verizon 和 EE。T-Mobile 確認收費 $5/月，而 Deutsche Telekom 則透過其 MultiSIM 服務收費 €6.95/月。根據報導，Verizon 也確認了其定價，宣布將對 iPhone Handoff 收取每月 $10 的費用，這比 T-Mobile 的價格高出兩倍。使用此功能，用戶可以在兩台相容的 iPhone 型號間無縫切換，並保持對 Verizon 5G 網路的完整存取。目前，AT&T 似乎沒有計劃支持此功能，而是專注於現有的 eSIM 啟用與轉移選項。此功能適用於運行 iOS 27 的相容 iPhone 型號。",
    tags: ["iPhone Handoff", "iOS 27", "Verizon", "T-Mobile", "Apple", "eSIM"],
    title_en: "Verizon Confirms $10/Month Fee for iPhone Handoff, Doubling T-Mobile's Price",
    summary_en: "Apple showcased the new iPhone Handoff feature in iOS 27 at WWDC. This feature allows users to share a single phone number across two iPhones. Initially supported by T-Mobile and Deutsche Telekom, the feature is expected to expand to Verizon and EE by the end of the year. T-Mobile confirmed a fee of $5/month, while Deutsche Telekom charges €6.95/month through its MultiSIM service. According to reports, Verizon has also confirmed its pricing, announcing a monthly fee of $10 for iPhone Handoff, which is double T-Mobile's price. Using this feature allows users to seamlessly switch between two compatible iPhone models while maintaining full access to the Verizon 5G network. Currently, AT&T does not appear to plan support for this feature, focusing instead on existing eSIM activation and transfer options. This feature is applicable to compatible iPhone models running iOS 27.",
    tags_en: ["iPhone Handoff", "iOS 27", "Verizon", "T-Mobile", "Apple", "eSIM"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/16/verizon-confirms-10-monthly-fee-for-new-iphone-handoff-feature", lang: "EN" }
    ]
  },
  {
    id: "20261017-16207",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "以色列廣告公司 Discover-Tech 透過 AdFection 投放惡意廣告，利用 Candiru 零點擊間諜軟體攻擊 Al Jazeera",
    summary: "加拿大網路監測組織 Citizen Lab 報告指出，以色列廣告公司 Discover-Tech 透過其廣告生態系統，發動了名為 AdFection 的大規模惡意攻擊。該攻擊利用廣告投放機制，將 Candiru 間諜軟體植入目標設備，並可追蹤數百萬用戶。攻擊的實質是透過看似正常的廣告，植入惡意程式碼，實現用戶去匿名化、設備指紋識別，並執行零點擊駭客攻擊。Citizen Lab 估計，在 2024 年至 2025 年間，至少有 45 台 Al Jazeera 設備遭到此類攻擊。Discover-Tech 的 Controlium 平台被證實用於建立用戶資料庫，並在廣告顯示時觸發惡意程式碼。為應對此類廣泛的廣告向量威脅，Citizen Lab 建議防禦方應在閘道層級（gateway）阻擋定向廣告，直到產業能可靠地阻擋所有 AdFection 風格的攻擊向量。",
    tags: ["Candiru", "Discover-Tech", "AdFection", "零點擊", "間諜軟體", "廣告生態系統", "Citizen Lab"],
    title_en: "Israeli Ad Agency Discover-Tech Used AdFection to Deploy Malicious Ads, Targeting Al Jazeera with Candiru Zero-Click Spyware",
    summary_en: "A report by the Canadian cyber monitoring organization Citizen Lab indicates that the Israeli ad agency Discover-Tech launched a large-scale malicious attack through its advertising ecosystem, dubbed AdFection. The attack utilized ad delivery mechanisms to implant Candiru spyware onto target devices, capable of tracking millions of users. The attack essentially involved injecting malicious code through seemingly normal advertisements to achieve user de-anonymization, device fingerprinting, and executing zero-click hacking attacks. Citizen Lab estimates that at least 45 Al Jazeera devices were compromised by this type of attack between 2024 and 2025. Discover-Tech's Controlium platform was confirmed to be used to build user databases and trigger malicious code when ads were displayed. To counter this widespread advertising vector threat, Citizen Lab advises defenders to block targeted ads at the gateway level until the industry can reliably block all AdFection-style attack vectors.",
    tags_en: ["Candiru", "Discover-Tech", "AdFection", "Zero-Click", "Spyware", "Ad Ecosystem", "Citizen Lab"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/israeli-ad-firm-doubled-as-candirus-zero-click-spyware-delivery-channel", lang: "EN" }
    ]
  },
  {
    id: "20261017-16216",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安研究揭露 MALFEX 惡意 npm 套件：imgdecode 透過 DLL 注入竊取資料",
    summary: "資安研究人員發現一個名為 \"imgdecode\" 的惡意 npm 套件，它是長期持續的供應鏈攻擊活動 MALFEX 的一部分。該活動自 2023 年 8 月開始，旨在透過 npm 惡意套件滲透 Windows 系統。imgdecode 套件透過一個編譯的 Node.js 附加 DLL，在 Windows 環境下執行惡意載入器。當 Node.js 程式呼叫 require('imgdecode') 時，DLL 會嘗試從 GitHub 下載加密的 shellcode，解密後再注入到新的 dllhost.exe 程序中。MALFEX 攻擊鏈包含多個套件，例如 cdn-img-fetch、img-to-native 和 native-runner，用於下載和執行 Node.js 竊取器。imgdecode 的最新版本 1.0.3 移除依賴性，使其無需其他 MALFEX 套件即可執行。攻擊鏈還包含反分析檢查，用於偵測虛擬機和沙箱，並竊取符合特定擴充氣（如 .kdbx, .pem, .env）的檔案。修補建議是避免使用或審核任何來自 MALFEX 相關的 npm 套件，並強化對第三方元件的安全性檢查。",
    tags: ["npm", "MALFEX", "imgdecode", "供應鏈攻擊", "Node.js", "DLL 注入"],
    title_en: "Cybersecurity Research Exposes MALFEX Malicious npm Package: imgdecode Steals Data via DLL Injection",
    summary_en: "Security researchers discovered a malicious npm package named \"imgdecode,\" which is part of the long-running supply chain attack campaign MALFEX. This campaign has been active since August 2023, aiming to penetrate Windows systems using malicious npm packages. The imgdecode package executes a malicious loader DLL in a Windows environment via a compiled Node.js add-on. When a Node.js program calls require('imgdecode'), the DLL attempts to download encrypted shellcode from GitHub, decrypts it, and then injects it into a new dllhost.exe process. The MALFEX attack chain includes multiple packages, such as cdn-img-fetch, img-to-native, and native-runner, used to download and execute the Node.js stealer. The latest version of imgdecode, 1.0.3, removes dependencies, allowing it to execute without other MALFEX packages. The attack chain also includes anti-analysis checks to detect virtual machines and sandboxes, and it steals files matching specific extensions (such as .kdbx, .pem, .env). The remediation advice is to avoid or audit any npm packages related to MALFEX, and to strengthen security checks on third-party components.",
    tags_en: ["npm", "MALFEX", "imgdecode", "Supply Chain Attack", "Node.js", "DLL Injection"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/malfex-npm-package-imgdecode-hides.html", lang: "EN" }
    ]
  },
  {
    id: "20261017-16217",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "駭客利用 ConnectWise Cloud Backup 憑證，透過 M365 廣域權限竊取客戶資料",
    summary: "資安研究人員警告，不詳的威脅行為者正在利用一個已被盜用的 ConnectWise Cloud Backup 憑證，對客戶的 Microsoft 365 (M365) 環境進行未授權存取。ConnectWise Cloud Backup 是一款為 MSP 設計的雲端備份與復原服務，其應用程式在客戶租戶中被授予了對信箱、OneDrive、SharePoint、Teams 和目錄資料的廣泛存取權限。研究人員觀察到，該憑證曾於 10 月 15 日在多個客戶租戶中被用於取得 Microsoft Graph tokens。攻擊者利用這些權限，可以讀取備份服務可存取的所有客戶資料。更嚴重的是，攻擊者甚至透過修改應用程式設定，將 ConnectWise Cloud Management app 賦予了 Global Administrator 權限，並為其他關鍵應用程式新增了客戶端密鑰，極大地擴大了風險範圍。受影響的組織是所有安裝了此備份應用程式的企業。建議用戶立即停用該應用程式，並在 Microsoft Entra Admin Center 檢查 Sign-in logs，特別是從非預期 IP 位址（如 144.172.64[.]128）的活動，並審核是否有新增的目錄角色或憑證。",
    tags: ["ConnectWise Cloud Backup", "Microsoft 365", "M365", "Global Administrator", "Microsoft Graph", "供應鏈安全"],
    title_en: "Hackers Exploit ConnectWise Cloud Backup Credentials to Steal Client Data via M365 Global Permissions",
    summary_en: "Cybersecurity researchers warn that unknown threat actors are exploiting a compromised ConnectWise Cloud Backup credential to perform unauthorized access to client Microsoft 365 (M365) environments. ConnectWise Cloud Backup is a cloud backup and recovery service designed for MSPs, and its application is granted extensive access permissions within client tenants, including access to mailboxes, OneDrive, SharePoint, Teams, and directory data. Researchers observed that the credential was used on October 15th to obtain Microsoft Graph tokens across multiple client tenants. By utilizing these permissions, attackers can read all client data accessible by the backup service. More critically, the attackers even modified the application settings to grant the ConnectWise Cloud Management app Global Administrator permissions and added client secrets for other critical applications, significantly expanding the scope of the risk. Affected organizations are all enterprises that have installed this backup application. Users are advised to immediately disable the application and check the Sign-in logs in the Microsoft Entra Admin Center, paying special attention to activity from unexpected IP addresses (such as 144.172.64[.]128), and to audit for any newly added directory roles or credentials.",
    tags_en: ["ConnectWise Cloud Backup", "Microsoft 365", "M365", "Global Administrator", "Microsoft Graph", "Supply Chain Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/hackers-use-compromised-connectwise.html", lang: "EN" }
    ]
  },
  {
    id: "20261017-16227",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "供應鏈遭攻擊：駭客利用 ConnectWise Cloud Backup 服務，入侵 Microsoft 365 租戶",
    summary: "ConnectWise 宣布因駭客入侵其 Cloud Backup 服務，導致多個客戶的 Microsoft 365 租戶面臨風險，因此已暫停客戶存取。此次攻擊被認定為供應鏈攻擊，駭客利用了應用程式身份（service principal）的權限，透過自動化腳本從單一 IP 位址 (144.172.64[.]128) 進行未經 MFA 保護的登入。攻擊者利用了客戶先前授予的廣泛權限，技術上能夠讀寫郵件、附件、OneDrive 和 SharePoint 檔案，並嘗試在多個租戶中提升權限（如 Global Administrator）和建立持久性存取點。雖然目前證據顯示攻擊者主要進行的是偵察和登入活動，但仍有證據指出攻擊者嘗試在部分租戶中建立持久性。ConnectWise 建議管理員檢查 Entra 中的 service principal 登入記錄，特別是針對相關應用程式 ID 的異常來源地址；Microsoft 建議審查應用程式憑證變更和 OAuth 授權；Huntress 則建議停用相關 ConnectWise 應用程式，並檢查所有雲端管理整合。",
    tags: ["ConnectWise", "Microsoft 365", "Cloud Backup", "供應鏈攻擊", "service principal", "Entra ID", "CVE"],
    title_en: "Supply Chain Attack: Hackers Compromise Microsoft 365 Tenants via ConnectWise Cloud Backup Service",
    summary_en: "ConnectWise announced that due to a hack compromising its Cloud Backup service, multiple customer Microsoft 365 tenants are at risk, leading the company to temporarily suspend customer access. This attack is classified as a supply chain attack, where hackers exploited service principal permissions and used automated scripts to perform unprotected logins from a single IP address (144.172.64[.]128) without MFA. The attackers leveraged broad permissions previously granted by the customers, technically enabling them to read and write emails, attachments, OneDrive, and SharePoint files, and attempting to elevate privileges (such as Global Administrator) and establish persistent access across multiple tenants. Although current evidence suggests the attackers primarily conducted reconnaissance and login activities, there is evidence that they attempted to establish persistence in some tenants. ConnectWise advises administrators to check service principal login records in Entra, especially for anomalous source addresses related to the affected application ID; Microsoft recommends reviewing application credential changes and OAuth permissions; and Huntress advises disabling the relevant ConnectWise application and checking all cloud management integrations.",
    tags_en: ["ConnectWise", "Microsoft 365", "Cloud Backup", "Supply Chain Attack", "service principal", "Entra ID", "CVE"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-breach-microsoft-365-tenants-via-connectwise-supply-chain-attack", lang: "EN" }
    ]
  },
  {
    id: "20261017-16266",
    trackers: ["os"],
    category: "重點關注",
    title: "高通駁斥 Snapdragon 8 Elite Extreme Gen 6 過熱傳聞：強調下一代旗艦平台穩定性",
    summary: "近期有報導指出，三星（Samsung）可能因 Snapdragon 8 Elite Extreme Gen 6 晶片存在過熱問題，正在考慮放棄使用該晶片，轉而採用自研的 Exynos 2700。針對此傳聞，高通（Qualcomm）正式發聲，堅稱關於 Snapdragon 8 Elite Extreme Gen 6 存在「熱能問題」（thermal issues）的報導是「不準確」（inaccurate）。高通發言人強調，他們對下一代旗艦平台的創新和強勁動能感到自豪，並持續與全球原始設備製造商（OEMs）合作，提供頂級使用者體驗。高通 CMO Don McGuire 在 X 平台也重申，晶片沒有「系統性的熱能問題」。Snapdragon 8 Elite Extreme Gen 6 搭載了兩個 5GHz 核心，相較於 Gen 5 旗艦，在 CPU 和 GPU 性能上均有大幅提升。目前已確認採用此晶片的設備品牌包括 Motorola Signature 27、Xiaomi 18、Redmagic 12 Pro Plus、Honor Magic 9 Pro Max 和 OnePlus 16 等。",
    tags: ["Qualcomm", "Snapdragon 8 Elite Extreme Gen 6", "三星", "Exynos 2700", "晶片效能", "熱能管理"],
    title_en: "Qualcomm Refutes Snapdragon 8 Elite Extreme Gen 6 Overheating Rumors: Emphasizes Next-Gen Flagship Platform Stability",
    summary_en: "Recent reports suggested that Samsung might consider abandoning the Snapdragon 8 Elite Extreme Gen 6 chip due to alleged overheating issues, potentially switching to its proprietary Exynos 2700. In response to these rumors, Qualcomm officially stated that reports regarding 'thermal issues' with the Snapdragon 8 Elite Extreme Gen 6 are 'inaccurate.' A Qualcomm spokesperson emphasized their pride in the innovation and strong momentum of the next-generation flagship platform, noting continued collaboration with global Original Equipment Manufacturers (OEMs) to deliver a top-tier user experience. Qualcomm CMO Don McGuire also reiterated on X that the chip does not have 'systemic thermal issues.' The Snapdragon 8 Elite Extreme Gen 6 features two 5GHz cores, representing significant improvements in both CPU and GPU performance compared to the Gen 5 flagship. Devices confirmed to use this chip include the Motorola Signature 27, Xiaomi 18, Redmagic 12 Pro Plus, Honor Magic 9 Pro Max, and OnePlus 16.",
    tags_en: ["Qualcomm", "Snapdragon 8 Elite Extreme Gen 6", "Samsung", "Exynos 2700", "Chip Performance", "Thermal Management"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/17/qualcomm-says-rumors-about-snapdragon-8-elite-extreme-gen-6-overheating-are-inaccurate", lang: "EN" }
    ]
  },
  {
    id: "20261017-16287",
    trackers: ["os"],
    category: "重點關注",
    title: "UGREEN推出液冷設計Qi2.2 25W MagSafe行動電源，強調散熱與多功能性",
    summary: "UGREEN發布一款新型的Qi2.2 25W 10000mAh MagSafe行動電源，最大的特色是採用了液冷散熱設計。該設計旨在比一般MagSafe行動電源更涼爽，使用者表示這對於擔心發熱問題的用戶來說是一個顯著優點。除了無線充電功能外，此行動電源底部還整合了USB-C充電線，方便用戶為無法無線充電或偏好有線充電的設備供電。此外，它還配備了側邊小顯示屏，可即時顯示電量百分比和充電速度。雖然文章指出該產品體積較厚，且缺乏支架功能，但若用戶對MagSafe行動電源的發熱有顧慮，此款產品能提供解決方案。目前該產品在Amazon上進行促銷，價格為$95。",
    tags: ["UGREEN", "MagSafe", "Qi2.2", "行動電源", "液冷", "Apple配件"],
    title_en: "UGREEN Launches Liquid-Cooled Qi2.2 25W MagSafe Power Bank, Emphasizing Heat Dissipation and Versatility",
    summary_en: "UGREEN has released a new Qi2.2 25W 10000mAh MagSafe power bank, whose most notable feature is its liquid-cooling design. This design aims to be cooler than typical MagSafe power banks, a feature users noted as a significant advantage for those concerned about overheating. In addition to wireless charging, the power bank integrates a USB-C charging cable at its base, making it convenient for users to power devices that cannot be wirelessly charged or those who prefer wired charging. Furthermore, it is equipped with a side mini-display screen that can instantly show the battery percentage and charging speed. Although the article notes that the product is bulkier and lacks a stand function, for users concerned about the heat generated by MagSafe power banks, this product offers a solution. The product is currently on sale on Amazon for $95.",
    tags_en: ["UGREEN", "MagSafe", "Qi2.2", "Power Bank", "Liquid Cooling", "Apple Accessories"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/17/ugreen-25w-magsafe-liquid-cooling-battery-bank", lang: "EN" }
    ]
  },
  {
    id: "20261017-16289",
    trackers: ["os"],
    category: "重點關注",
    title: "iPhone Duo官方矽膠保護殼使用黏性膠設計，用戶需留意其替換與移除的實用性問題",
    summary: "本文討論了蘋果公司（Apple）為新機型 iPhone Duo 設計的官方配件，特別是 $79 的矽膠保護殼。該保護殼採用黏性膠（adhesive）而非磁吸設計來固定於 iPhone 本身。雖然這對於可折疊機型（foldable cases）並非新概念，但文章指出，這種設計限制了用戶更換保護殼或選擇無殼使用（caseless）的便利性。一旦移除，黏性膠的附著力可能會減弱。對於用戶而言，若不喜歡蘋果官方的配件，文章推薦了 Spigen 的 Ultra Hybrid Pro 和 ESR 的 Classic Hybrid 等第三方品牌作為替代選擇。總體而言，這是一個關於新手機配件設計的用戶體驗觀察，而非資安漏洞報告，建議用戶在購買官方配件前，需評估其黏性膠設計帶來的實用性限制。",
    tags: ["Apple", "iPhone Duo", "配件", "矽膠保護殼", "用戶體驗", "Spigen", "ESR"],
    title_en: "iPhone Duo Official Silicone Case Uses Adhesive Design, Users Should Note Practicality Issues with Replacement and Removal",
    summary_en: "This article discusses official accessories from Apple for the new iPhone Duo model, specifically the $79 silicone case. This case uses an adhesive design rather than a magnetic attachment to secure it to the iPhone itself. While foldable cases are not a new concept, the article points out that this design limits the user's convenience when swapping cases or choosing to use the phone caseless. Once removed, the adhesive's grip may weaken. For users who do not prefer Apple's official accessories, the article recommends third-party brands such as Spigen's Ultra Hybrid Pro and ESR's Classic Hybrid as alternatives. Overall, this is a user experience observation regarding new phone accessory design, rather than a cybersecurity vulnerability report, suggesting that users should evaluate the practical limitations imposed by the adhesive design before purchasing official accessories.",
    tags_en: ["Apple", "iPhone Duo", "Accessories", "Silicone Case", "User Experience", "Spigen", "ESR"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/17/iphone-duo-silicone-case-adhesive-psa", lang: "EN" }
    ]
  },
  {
    id: "20261017-16358",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS 宣布 NTFS 驅動程式成熟，可支援安裝與使用，邁向 Beta 版本",
    summary: "開源作業系統 ReactOS 宣布其 NTFS 檔案系統驅動程式已達到成熟階段，目前已可支援使用該驅動程式進行作業系統的安裝與實際使用，同時也實現了 NTFS 格式化支援。這標誌著 ReactOS 距離其期待已久的 Beta 版本又邁進了一大步。然而，ReactOS 亦提醒，目前的 NTFS 驅動程式仍存在多項限制，包括缺乏快取（caching）導致效能不如其他平台，且尚未實作日誌記錄（journaling）與安全支援。開發團隊也指出，仍可能存在其他未發現的 Bug。這項進展對於 ReactOS 是一個重要的里程碑。",
    tags: ["ReactOS", "NTFS", "開源作業系統", "作業系統驅動程式", "Beta 版本"],
    title_en: "ReactOS Announces Mature NTFS Driver, Enabling Installation and Usage, Moving Towards Beta Release",
    summary_en: "The open-source operating system ReactOS has announced that its NTFS file system driver has reached a mature stage. The driver can now support both the installation and practical use of the operating system, and it also includes support for NTFS formatting. This marks a significant step for ReactOS toward its long-awaited Beta version. However, ReactOS also cautions that the current NTFS driver still has several limitations, including performance issues due to the lack of caching compared to other platforms, and the absence of journaling and security support. The development team also points out that other undiscovered bugs may still exist. This advancement represents an important milestone for ReactOS.",
    tags_en: ["ReactOS", "NTFS", "Open-Source Operating System", "Operating System Driver", "Beta Version"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ReactOS-NTFS-Driver", lang: "EN" }
    ]
  },
  {
    id: "20261017-16359",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 驅動 MeshXFS：將 XFS 檔案系統進化為開源叢集式 POSIX 檔案系統",
    summary: "MeshXFS 是一個開源的叢集式檔案系統，其開發過程展示了 AI 在複雜系統編寫上的應用。該專案由 Steve Shoecraft 發起，目標是讓 AI 將 XFS 檔案系統驅動改造成一個完整的叢集式 POSIX 檔案系統。MeshXFS 具備分散式鎖定、多節點同步存取、圍欄機制（fencing）和崩潰恢復等功能。開發者指出，AI 負責了許多核心功能，包括網路和共享磁碟上的兩套分散式鎖管理器、跨節點快取一致性、使用 SCSI 持久保留的圍欄機制，以及整個 XFS 程式碼的修改和測試框架。雖然部分使用者對 AI 創建的系統存儲數據感到擔憂，但 MeshXFS 聲稱每個發行版本都會在真實的多節點叢集上運行約 30 個測試套件，以確保數據完整性。這項成果證明了 AI 能夠參與編寫複雜的核心級檔案系統驅動，為未來系統開發提供了新的可能性。",
    tags: ["MeshXFS", "XFS", "POSIX", "叢集檔案系統", "AI 程式碼生成", "開源專案"],
    title_en: "AI-Driven MeshXFS: Evolving the XFS Filesystem into an Open-Source Clustered POSIX Filesystem",
    summary_en: "MeshXFS is an open-source clustered filesystem that demonstrates the application of AI in writing complex systems. The project, initiated by Steve Shoecraft, aims to transform the XFS filesystem driver into a complete clustered POSIX filesystem. MeshXFS features distributed locking, multi-node synchronized access, fencing mechanisms, and crash recovery. Developers noted that AI was responsible for many core functionalities, including two sets of distributed lock managers for network and shared disk environments, cross-node cache coherence, a SCSI-persistent fencing mechanism, and the modification and testing framework for the entire XFS codebase. Although some users expressed concern about the data stored in the AI-created system, MeshXFS claims that every release version runs approximately 30 test suites on a real multi-node cluster to ensure data integrity. This achievement proves that AI can participate in writing complex core-level filesystem drivers, opening up new possibilities for future system development.",
    tags_en: ["MeshXFS", "XFS", "POSIX", "Clustered Filesystem", "AI Code Generation", "Open-Source Project"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/MeshXFS-XFS-Clustered", lang: "EN" }
    ]
  },
  {
    id: "20261017-16361",
    trackers: ["os"],
    category: "重點關注",
    title: "GNOME AI 聊天應用 Moose 0.6 版本發布，強化雲端連線與本地模型支援",
    summary: "GNOME 應用程式 Moose，這款圍繞 GTK4 和 libadwaita 建構的 AI 聊天應用程式，最新發布了 0.6 版本。本次更新大幅提升了其功能性，特別是增加了對雲端 AI 平台的支援，並配備了受保護的憑證儲存機制，以確保連線的安全性。此外，Moose 也新增了「僅限本地模式」（Local-Only mode），允許使用者在設備上使用 Ollama 管理的本地模型。使用者現在可以針對單一聊天或跨提供者設定權限處理。功能方面，更新後的應用程式整合了 GNOME 文件瀏覽器，讓使用者可以直接與系統檔案互動並附加到 AI 聊天對話中。本地模型目錄也已擴展，支援聊天、視覺、推理和編碼等多種用途。後續發布的 0.6.1 版本進一步增加了支援 Mistral AI 和 DeepSeek 等主流 AI 服務。Moose 可透過 GitHub 或 Flathub 的 Flatpak 形式取得。",
    tags: ["GNOME", "Moose", "AI 聊天", "GTK4", "Ollama", "Mistral AI", "DeepSeek"],
    title_en: "GNOME AI Chat Application Moose 0.6 Released, Enhancing Cloud Connectivity and Local Model Support",
    summary_en: "Moose, an AI chat application built around GTK4 and libadwaita for GNOME, has released its latest 0.6 version. This update significantly enhances its functionality, particularly by adding support for cloud AI platforms and incorporating a protected credential storage mechanism to ensure connection security. Furthermore, Moose introduces a \"Local-Only mode,\" allowing users to utilize local models managed by Ollama directly on their device. Users can now set permissions for single chats or across multiple providers. Functionally, the updated application integrates the GNOME file browser, enabling users to interact directly with system files and attach them to AI chat conversations. The local model directory has also been expanded, supporting various use cases including chat, vision, reasoning, and coding. The subsequent 0.6.1 version will further add support for major AI services such as Mistral AI and DeepSeek. Moose is available via GitHub or as a Flatpak on Flathub.",
    tags_en: ["GNOME", "Moose", "AI Chat", "GTK4", "Ollama", "Mistral AI", "DeepSeek"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Moose-0.6-AI", lang: "EN" }
    ]
  },
  {
    id: "20261017-16365",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.20 發布：強化 ARM64EC 偵錯功能並重構 CD-ROM 支援至 Mount Manager",
    summary: "Wine 11.20 作為最新的雙週開發版本發布，旨在讓使用者能在 Linux 環境下運行 Windows 遊戲與應用程式。本次更新包含了多項功能改進與修復，特別是針對 ARM64EC 支援，現已整合回放偵錯（replay debugging）功能。此外，Wine 進行了重要的架構重構，將其 CD-ROM 支援程式碼遷移至 Mount Manager。此變動是作為 NTDLL 程式碼重工的一部分，目的是讓 Wine 不再直接開啟 Unix 裝置，而是依賴 Mount Manager 的 \"mountmgr\" 程式碼來處理。本次版本共提供 24 個 Bug 修復，涵蓋範圍從 QuickBooks 等軟體到 Battlefield 1942 和 Pure Pinball 等遊戲。使用者可透過 WineHQ.org 下載 Wine 11.20。",
    tags: ["Wine", "Linux", "ARM64EC", "CD-ROM", "Mount Manager", "開發更新"],
    title_en: "Wine 11.20 Released: Enhances ARM64EC Debugging and Refactors CD-ROM Support to Mount Manager",
    summary_en: "Wine 11.20, the latest bi-weekly development release, aims to allow users to run Windows games and applications in a Linux environment. This update includes multiple feature enhancements and fixes, particularly for ARM64EC support, which now integrates replay debugging. Furthermore, Wine has undergone a significant architectural refactoring, migrating its CD-ROM support code to Mount Manager. This change is part of the NTDLL code overhaul, ensuring that Wine no longer directly accesses Unix devices but instead relies on Mount Manager's \"mountmgr\" code to handle it. This version provides a total of 24 bug fixes, covering a range of software from QuickBooks to games like Battlefield 1942 and Pure Pinball. Users can download Wine 11.20 from WineHQ.org.",
    tags_en: ["Wine", "Linux", "ARM64EC", "CD-ROM", "Mount Manager", "Development Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.20-Released", lang: "EN" }
    ]
  },
  {
    id: "20261017-16381",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "網路犯罪從竊取資料轉向攻擊實體系統：BAS與OT網路成為新目標",
    summary: "網路攻擊的威脅已超越傳統的資料竊取，正朝向能造成實體損害的物理系統。攻擊者利用Building Automation Systems (BAS) 和 Operational Technology (OT) 網路，對設施的暖通空調 (HVAC)、照明、門禁控制、消防警報等關鍵基礎設施進行攻擊。Armis Labs 的報告指出，高達 73% 的組織擁有 BAS，且有已知漏洞；更令人擔憂的是，91% 的 BAS 透過不安全的協定進行通訊，極大地擴大了攻擊面。由於 BAS 和 OT 系統相較於 IT 系統缺乏足夠的資安控制，且許多系統需要持續運行，難以進行修補或掃描。攻擊者利用此弱點，不僅能造成營運中斷，還可將物理後果作為勒索的籌碼。此外，AI 技術的進步使得攻擊者不再需要是 OT 專家，能更輕易地理解和操作複雜的工業控制系統，增加了攻擊的難度和潛在的物理危害。修補建議包括加強 BAS 和 OT 網路的資安控制，並應特別關注其不安全的通訊協定。",
    tags: ["BAS", "OT", "Operational Technology", "勒索軟體", "實體系統", "資安漏洞"],
    title_en: "Cybercrime Shifts from Data Theft to Physical System Attacks: BAS and OT Networks Become New Targets",
    summary_en: "The threat of cyberattacks has moved beyond traditional data theft, shifting towards physical systems capable of causing real-world damage. Attackers are utilizing Building Automation Systems (BAS) and Operational Technology (OT) networks to target critical infrastructure such as HVAC, lighting, access control, and fire alarm systems. A report by Armis Labs indicates that up to 73% of organizations possess BAS, and many have known vulnerabilities. More concerningly, 91% of BAS communicate using insecure protocols, greatly expanding the attack surface. Because BAS and OT systems lack adequate cybersecurity controls compared to IT systems, and many require continuous operation, patching or scanning is difficult. Attackers exploit this weakness not only to cause operational disruption but also to use physical consequences as leverage for ransomware. Furthermore, the advancement of AI technology means attackers no longer need to be OT experts, making it easier for them to understand and manipulate complex industrial control systems, increasing the difficulty and potential physical harm of attacks. Remediation recommendations include strengthening cybersecurity controls for BAS and OT networks, with special attention paid to insecure communication protocols.",
    tags_en: ["BAS", "OT", "Operational Technology", "Ransomware", "Physical Systems", "Cybersecurity Vulnerabilities"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/10/17/cybercrims-go-beyond-stealing-data-to-attack-physical-building-systems/5303677", lang: "EN" }
    ]
  },
  {
    id: "20261017-16382",
    trackers: ["os"],
    category: "重點關注",
    title: "Amazon推出AI穿戴裝置Bee Frontier與Bee Eclipse：聲稱能記錄對話並提供個人化提醒與購物建議",
    summary: "Amazon透過其收購的穿戴設備新創公司Bee，推出了兩款AI穿戴裝置：Bee Frontier（形似智慧手錶或健身追蹤器）和Bee Eclipse（可磁吸於手機背部的輕薄設備）。這兩款設備旨在隨時聆聽用戶的對話，記錄重要細節，例如約會地點或時間，並將其轉化為對話摘要、待辦事項和提醒。用戶可透過Bee手機App（支援iPhone或Android）或桌面應用程式存取這些摘要。設備具備指示燈，當正在聆聽和AI正在摘要對話時會亮起。此外，Bee設備可連接Amazon的Alexa+ AI助理和Amazon.com，讓用戶可以詢問會議摘要或根據設備收集的資訊獲得個人化購物推薦。Amazon聲稱這些產品尊重用戶隱私，語音會在即時處理成洞察，而非儲存，而文字記錄則經過加密，僅用戶可存取。Bee Frontier具備IP67防水和七天電池壽命，售價為$74.99；Bee Eclipse則具備USB-C充電埠，宣稱單次充電可使用超過21天，售價為$99.99。",
    tags: ["Amazon", "Bee", "AI穿戴裝置", "Alexa+", "數據隱私", "智慧助理"],
    title_en: "Amazon Launches AI Wearables Bee Frontier and Bee Eclipse: Claiming Ability to Record Conversations and Provide Personalized Reminders and Shopping Suggestions",
    summary_en: "Amazon, through its acquired wearable startup Bee, has launched two AI wearable devices: the Bee Frontier (resembling a smartwatch or fitness tracker) and the Bee Eclipse (a thin device that magnetically attaches to the back of a phone). These devices are designed to constantly listen to users' conversations, recording important details such as meeting locations or times, and converting them into conversation summaries, to-do lists, and reminders. Users can access these summaries via the Bee mobile App (supporting iPhone or Android) or a desktop application. The devices feature an indicator light that illuminates when they are listening and the AI is summarizing the conversation. Furthermore, the Bee devices can connect to Amazon's Alexa+ AI assistant and Amazon.com, allowing users to ask for meeting summaries or receive personalized shopping recommendations based on the data collected by the device. Amazon claims that these products respect user privacy, stating that voice data is processed in real-time into insights rather than being stored, and that text records are encrypted and accessible only to the user. The Bee Frontier features IP67 waterproofing and a seven-day battery life, priced at $74.99; the Bee Eclipse features a USB-C charging port and claims over 21 days of usage on a single charge, priced at $99.99.",
    tags_en: ["Amazon", "Bee", "AI Wearables", "Alexa+", "Data Privacy", "Smart Assistant"],
    sources: [
      { name: "The Register", url: "https://theregister.com/personal-tech/2026/10/17/amazon-wants-you-to-bee-lieve-wearable-ai-can-recall-it-all-for-you/5303569", lang: "EN" }
    ]
  },
  {
    id: "20261017-16383",
    trackers: ["os"],
    category: "重點關注",
    title: "英國太空總署尋求公眾命名其太空碎片清除任務，目標清除低軌道衛星",
    summary: "英國太空總署（UK Space Agency）宣布，其主導的「主動碎片清除任務」（Active Debris Removal Mission）將邀請公眾參與命名，以提高公眾參與度。該任務由 ClearSpace UK 領銜執行，計畫於 2029 年開始，目標清除兩顆英國註冊的低軌道衛星。英國政府已投入超過 £60 百萬資金支持，預計在 2032 年前完成整個清除工作。任務概念是利用專用太空船捕獲碎片，將其降至低軌道，透過在大氣層燒毀的方式進行清除，然後升至更高軌道等待下次任務。這項技術對於清理日益擁擠的軌道空間至關重要。此前，歐洲太空總署（ESA）已於 2019 年宣布了 ClearSpace-1 任務，目標是進行首次軌道碎片清除。此舉顯示了全球對太空垃圾清理的重視，並預示著未來太空資源管理和維護的趨勢。",
    tags: ["UK Space Agency", "ClearSpace UK", "Active Debris Removal", "低軌道", "太空碎片", "ESA"],
    title_en: "UK Space Agency Seeks Public Input for Naming Space Debris Removal Mission Targeting Low Earth Orbit Satellites",
    summary_en: "The UK Space Agency announced that its flagship 'Active Debris Removal Mission' will invite the public to participate in naming the mission, aiming to boost public engagement. The mission is led by ClearSpace UK and is scheduled to begin in 2029, with the goal of removing two UK-registered low Earth orbit satellites. The UK government has committed over £60 million in funding, with the entire cleanup expected to be completed by 2032. The mission concept involves using a dedicated spacecraft to capture the debris, de-orbiting it to low altitude for controlled destruction via atmospheric burn-up, and then raising it to a higher orbit for subsequent missions. This technology is crucial for cleaning up increasingly congested orbital space. Previously, the European Space Agency (ESA) announced the ClearSpace-1 mission in 2019, which aimed to conduct the first orbital debris removal. This initiative highlights the global focus on space junk cleanup and foreshadows future trends in space resource management and maintenance.",
    tags_en: ["UK Space Agency", "ClearSpace UK", "Active Debris Removal", "Low Earth Orbit", "Space Debris", "ESA"],
    sources: [
      { name: "The Register", url: "https://theregister.com/science/2026/10/17/get-in-the-bin-uk-space-agency-wants-public-to-name-its-debris-removal-mission/5303555", lang: "EN" }
    ]
  }
];
