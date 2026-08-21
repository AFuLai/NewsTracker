// data-20260815.js — 2026-08-15
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-15"] = [
  {
    id: "20260815-001",
    trackers: ["eu_cra"],
    category: "法令更新",
    title: "法國憲法法院裁定限制未成年人社群媒體的法案違憲：質疑年齡驗證技術與基本權利保護",
    summary: "法國憲法法院裁定政府推動的限制15歲以下用戶使用社群媒體的法案違憲，理由是該法案侵犯了言論自由和隱私權。原定於9月1日實施的嚴格年齡限制政策，現需全面重新審視。該法案要求15歲以下用戶不能建立新帳號，且現有帳號需在四個月內強制關閉，並要求平台必須導入由法國個人資料保護委員會（CNIL）認證的年齡驗證技術。然而，憲法法院指出，該法案要求所有用戶進行年齡證明，但未明確規定其條件和限制，且過度限制了言論和通訊自由，缺乏足夠的法律保障。此事件反映了全球範圍內（包括澳洲、中國、歐盟等）對青少年社群媒體使用規範趨嚴的趨勢，但法國的判決也凸顯了年齡驗證技術在準確性與隱私侵犯風險之間難以平衡的挑戰。全球科技巨頭如Google、Meta等，雖然對一刀切的年齡限制政策持保留態度，但仍表示若政府立法強制執行，將遵守規定。",
    tags: ["法國", "憲法法院", "社群媒體", "年齡驗證技術", "隱私權", "CNIL"],
    title_en: "French Constitutional Court Rules Law Restricting Minors' Social Media Use Unconstitutional: Questioning Age Verification Technology and Fundamental Rights",
    summary_en: "The French Constitutional Court ruled that a government-proposed bill restricting users under the age of 15 from using social media is unconstitutional, citing violations of freedom of expression and privacy rights. The strict age restriction policy, originally set to take effect on September 1st, must now undergo a complete reassessment. The bill required users under 15 to be prohibited from creating new accounts, and existing accounts to be forcibly closed within four months, while also mandating that platforms implement age verification technology certified by the French Data Protection Authority (CNIL). However, the Constitutional Court pointed out that while the bill requires all users to undergo age verification, it fails to clearly define the conditions and limitations, and excessively restricts freedom of expression and communication, lacking sufficient legal safeguards. This incident reflects a global trend (including in Australia, China, and the EU) toward stricter regulations on adolescent social media use, but the French ruling also highlights the challenge of balancing accuracy and privacy infringement risks inherent in age verification technology. Global tech giants such as Google and Meta, while expressing reservations about blanket age restriction policies, stated they would comply if mandated by government legislation.",
    tags_en: ["France", "Constitutional Court", "Social Media", "Age Verification Technology", "Privacy Rights", "CNIL"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145169&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260815-002",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME 51 Beta 版本發布：新增指紋管理、改善 Wayland 視覺效果與 GTK 性能",
    summary: "GNOME 51 Beta 版本已正式發布，提供多項小幅但實用性的改進。本次更新主要著重於提升使用者體驗與核心元件的穩定性。主要新增功能包括在 GNOME Control Center 中加入了指紋管理介面，以及 GNOME Initial Setup 對 systemd-homed 帳戶的支援。在視覺效果方面，GNOME Shell 現在能尊重「減少動態效果」的設定，Mutter compositor 也新增了在 Wayland 上支援背景模糊效果。此外，GTK 支援了 ext-background-effect Wayland 協定，並重構了 GDK frame-clock 以提高精準度。其他改進包括 GNOME Software 提升了圖標載入性能、GNOME Web Epiphany 重新啟用 WebRTC 支援，以及 Glycin 圖像載入程式碼增加了對 XMP、Radiance HDR 等格式的支援。開發者可留意，GNOME 51 的 Release Candidate 預計於八月底，而穩定版 GNOME 51.0 則預計於九月十八日發布。",
    tags: ["GNOME 51", "Wayland", "GTK", "Mutter", "Linux 核心", "GNOME Shell"],
    title_en: "GNOME 51 Beta Released: Adds Fingerprint Management, Improves Wayland Visuals and GTK Performance",
    summary_en: "The GNOME 51 Beta version has been officially released, offering several minor yet practical improvements. This update primarily focuses on enhancing user experience and the stability of core components. Key new features include the addition of a fingerprint management interface in the GNOME Control Center, and support for systemd-homed accounts in the GNOME Initial Setup. Regarding visual effects, GNOME Shell can now respect the 'reduce animations' setting, and the Mutter compositor has added support for background blur effects on Wayland. Furthermore, GTK now supports the ext-background-effect Wayland protocol, and GDK frame-clock has been refactored to improve accuracy. Other improvements include enhanced icon loading performance in GNOME Software, the re-enabling of WebRTC support in GNOME Web Epiphany, and the addition of support for formats like XMP and Radiance HDR in the Glycin image loading code. Developers should note that the GNOME 51 Release Candidate is expected in late August, with the stable GNOME 51.0 version anticipated on September 18.",
    tags_en: ["GNOME 51", "Wayland", "GTK", "Mutter", "Linux Kernel", "GNOME Shell"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-51-Beta", lang: "EN" }
    ]
  },
  {
    id: "20260815-003",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Jay Shader 編譯器透過 Mesa 26.3-devel 成功通過 Vulkan CTS，支援 Xe2 與 Xe3 硬體",
    summary: "Intel 的 Jay 繪圖著色器編譯器是為其圖形硬體設計的 SSA（Single Instruction, Multiple Data）編譯器，用於 Mesa Iris Gallium3D 和 ANV Vulkan 驅動程式。該編譯器旨在成為開源 Intel Linux 圖形驅動程式的預設著色器編譯器。先前 Jay 僅能通過 OpenGL ES 3.0 和 OpenCL 3.0 的一致性測試，但尚未通過 Vulkan 的一致性測試套件（CTS）。本週，最新的 Jay 代碼已合併至 Mesa 26.3-devel，使得該編譯器在 Xe2 和最新的 Xe3 圖形硬體上均成功通過了 Vulkan CTS。開發人員 Alyssa Rosenzweig 提到，這次合併包含 63 個補丁，用於實作更多功能、VRT 優化和錯誤修復。這標誌著 Jay 編譯器在開源 Intel Linux 圖形驅動程式發展上的重要里程碑，預計在 Mesa 26.3 發布（11 月）後，將更接近成為預設編譯器。",
    tags: ["Intel", "Jay Compiler", "Mesa", "Vulkan", "Xe2", "Xe3", "Linux"],
    title_en: "Intel Jay Shader Compiler Passes Vulkan CTS with Mesa 26.3-devel, Supporting Xe2 and Xe3 Hardware",
    summary_en: "Intel's Jay graphics shader compiler is an SSA (Single Instruction, Multiple Data) compiler designed for its graphics hardware, used within the Mesa Iris Gallium3D and ANV Vulkan drivers. The compiler aims to become the default shader compiler for open-source Intel Linux graphics drivers. Previously, Jay could only pass consistency tests for OpenGL ES 3.0 and OpenCL 3.0, but had not yet passed the Vulkan Consistency Test Suite (CTS). This week, the latest Jay code was merged into Mesa 26.3-devel, allowing the compiler to successfully pass the Vulkan CTS on both Xe2 and the latest Xe3 graphics hardware. Developer Alyssa Rosenzweig noted that this merge included 63 patches for implementing more features, VRT optimizations, and bug fixes. This marks a significant milestone in the development of the Jay compiler for open-source Intel Linux graphics drivers, and it is expected to be closer to becoming the default compiler after the release of Mesa 26.3 (in November).",
    tags_en: ["Intel", "Jay Compiler", "Mesa", "Vulkan", "Xe2", "Xe3", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Jay-Compiler-Xe2-Xe3-CTS", lang: "EN" }
    ]
  },
  {
    id: "20260815-004",
    trackers: ["os"],
    category: "Linux",
    title: "RustConn 0.20 重磅發布：增強 GTK4/libadwaita 介面，打造現代化 Linux 連線管理工具",
    summary: "RustConn 是一個基於 Rust 語言開發的現代化連線管理器，支援 SSH、RDP、VNC、Telnet 等多種協定。最新版本 RustConn 0.20 已發布，是該工具持續進步的重大里程碑。本版本主要著重於提升使用者介面（UI）元素，並增加了支援選擇不同 GTK 渲染器選項的功能。此外，它也繼承了自 RustConn 0.19.xx 版本以來累積的各種修復與增強。根據 GNOME 的相關報導，RustConn 具備了可分離的會話視窗、分割檢視改善、帶有輪轉和紅黑處理的會話日誌記錄，以及針對部分協定的自動登入功能。這款工具適用於 Linux/GNOME 桌面環境，使用者可透過 GitHub 或 Flathub 的 Flatpak 二進位檔獲取。",
    tags: ["RustConn", "GTK4", "libadwaita", "Linux", "GNOME", "連線管理器"],
    title_en: "RustConn 0.20 Major Release: Enhancing GTK4/libadwaita Interface for a Modern Linux Connection Manager",
    summary_en: "RustConn is a modern connection manager built using the Rust language, supporting multiple protocols such as SSH, RDP, VNC, and Telnet. The latest version, RustConn 0.20, has been released, marking a significant milestone in the tool's continuous development. This version primarily focuses on enhancing the User Interface (UI) elements and adds functionality to support selecting different GTK renderer options. Furthermore, it incorporates various fixes and enhancements accumulated since the RustConn 0.19.xx version. According to GNOME reports, RustConn features separable session windows, improved split views, session log recording with rotation and black/red handling, and automatic login functionality for certain protocols. This tool is designed for the Linux/GNOME desktop environment and can be obtained via GitHub or the Flatpak binary on Flathub.",
    tags_en: ["RustConn", "GTK4", "libadwaita", "Linux", "GNOME", "Connection Manager"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/RustConn-0.20-Released", lang: "EN" }
    ]
  },
  {
    id: "20260815-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心更新：修復多款硬體音訊問題，支援 Intel Nova Lake HDMI-In 擷取",
    summary: "隨著 Linux 7.2 核心版本即將發布，本次更新整合了多項音訊相關的修復與硬體支援特性。其中，針對搭載 AMD Ryzen 7/9 處理器的 HyperX OMEN Gaming Laptop 16-ap1xxx（HP board 8F06）型號，新增了硬體 Quirks，使其內建數位麥克風陣列能在 Linux 環境下正常使用。此外，也修復了 SteelSeries Arctis Nova 5 耳機在近期核心版本中，由於混音器控制（mixer controls）被禁用而無法正常運作的問題。更重要的是，本次更新為即將推出的 Intel Nova Lake 平台加入了 HDMI-In 擷取支援，此功能是在 Intel 和 Sound Open Firmware 驅動程式程式碼中添加必要 ID 後完成的。這些修補和特性提升了 Linux 系統對多樣化周邊設備和新硬體的相容性。",
    tags: ["Linux 7.2", "音訊驅動", "HyperX OMEN", "Intel Nova Lake", "Quirks", "AMD Ryzen"],
    title_en: "Linux 7.2 Kernel Update: Fixes Multiple Audio Issues and Adds Support for Intel Nova Lake HDMI-In Capture",
    summary_en: "With the upcoming release of the Linux 7.2 kernel version, this update integrates multiple audio-related fixes and hardware support features. Specifically, new hardware Quirks have been added for the HyperX OMEN Gaming Laptop 16-ap1xxx (HP board 8F06) model, enabling its built-in digital microphone array to function correctly in a Linux environment. Furthermore, an issue has been fixed concerning the SteelSeries Arctis Nova 5 headset, which was previously unable to function properly in recent kernel versions due to disabled mixer controls. Crucially, this update adds HDMI-In capture support for the upcoming Intel Nova Lake platform. This functionality was achieved by adding necessary IDs within the Intel and Sound Open Firmware driver code. These fixes and features enhance the compatibility of the Linux system with diverse peripheral devices and new hardware.",
    tags_en: ["Linux 7.2", "Audio Drivers", "HyperX OMEN", "Intel Nova Lake", "Quirks", "AMD Ryzen"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Last-Sound-Fixes-Linux-7.2", lang: "EN" }
    ]
  },
  {
    id: "20260815-006",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 新增功能：支援精細調整滑鼠與觸控板速度，提升使用者體驗",
    summary: "KDE Plasma 6.8 版本為桌面使用者帶來多項介面與功能優化。其中一個顯著的改進是新增了精細調整滑鼠和觸控板速度的功能，此功能源於 2023 年的用戶需求，旨在完善現有的滾動/指標速度滑桿。此外，Plasma 6.8 也提升了遠端桌面會話的體驗，實現了完全共享的剪貼簿功能，並修復了遠端桌面伺服器在關閉連線時可能崩潰的問題。在應用程式管理方面，Plasma 6.8 改善了對 Flatpak 或 Nix 套件的支援，使其能更穩健地固定在工作管理員小工具中。另有更新指出，KDE Connect 為 Frameworks 6.30 修復了可能佔用整個 CPU 核心 100% 的 Bug。對於 Plasma 6.7 穩定系列，Plasma 6.7.5 KWin 則升級了對 Wayland wl_data_device 的支援，以改善 Firefox 的拖放功能。這些更新主要著重於提升使用者介面和核心元件的穩定性與功能性。",
    tags: ["KDE Plasma", "Plasma 6.8", "Linux 桌面環境", "Wayland", "KWin", "Flatpak"],
    title_en: "KDE Plasma 6.8 Adds Feature: Fine-Tuning Mouse and Touchpad Speed to Enhance User Experience",
    summary_en: "The KDE Plasma 6.8 version brings multiple interface and functional optimizations for desktop users. A notable improvement is the addition of fine-tuning controls for mouse and touchpad speed. This feature addresses user feedback from 2023, aiming to enhance the existing scroll/pointer speed slider. Furthermore, Plasma 6.8 improves the remote desktop session experience by implementing fully shared clipboard functionality and fixing an issue where the remote desktop server could crash upon connection closure. Regarding application management, Plasma 6.8 improves support for Flatpak or Nix packages, allowing them to be more reliably pinned within the system tray widget. Another update notes that KDE Connect fixed a bug in Frameworks 6.30 that could consume 100% of an entire CPU core. For the Plasma 6.7 stable series, Plasma 6.7.5 KWin upgraded support for Wayland wl_data_device to improve Firefox's drag-and-drop functionality. These updates primarily focus on enhancing the stability and functionality of the user interface and core components.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "Linux Desktop Environment", "Wayland", "KWin", "Flatpak"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Plasma-6.8-Tune-Mouse-Speeds", lang: "EN" }
    ]
  },
  {
    id: "20260815-007",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 開發者就 LLM 使用權進行投票，決定 AI 貢獻的未來方向",
    summary: "Debian 專案的開發者目前正在進行一項關於在專案內部使用大型語言模型（LLM）的總體決議投票。這項投票旨在決定社群對於 AI 輔助貢獻的接受程度與規範。投票選項涵蓋了從「完全禁止 LLM 貢獻」到「接受 AI 貢獻用於特定工作」等多種立場，甚至包含「Debian 專案由人類建立」的選項，以及基於環境考量的「避免使用 LLM」等議題。開發者們透過投票機制，將共同決定未來在 AI 輔助開發工具和內容生成方面的政策，這對於整個開源專案的治理模式具有重大影響。投票期間已開始，參與者需關注 Debian.org 網站獲取各選項的詳細資訊。",
    tags: ["Debian", "LLM", "AI 輔助開發", "開源專案治理", "Linux 核心"],
    title_en: "Debian Developers Vote on LLM Usage Rights, Determining the Future Direction of AI Contributions",
    summary_en: "Debian project developers are currently conducting a general resolution vote regarding the use of Large Language Models (LLMs) within the project. This vote aims to determine the community's acceptance level and guidelines for AI-assisted contributions. The voting options range from 'complete prohibition of LLM contributions' to 'acceptance of AI contributions for specific tasks,' and even include options such as 'The Debian project must be built by humans' and 'avoiding LLMs' based on environmental considerations. Through this voting mechanism, developers will collectively decide the future policy regarding AI-assisted development tools and content generation, which has significant implications for the governance model of the entire open-source project. The voting period has begun, and participants are advised to monitor Debian.org for detailed information on all options.",
    tags_en: ["Debian", "LLM", "AI-assisted development", "Open-source governance", "Linux kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Debian-Votes-On-LLM-Usage", lang: "EN" }
    ]
  },
  {
    id: "20260815-008",
    trackers: ["os"],
    category: "Linux",
    title: "AMD 發布 109 個補丁，為 GFX 12.1 繪圖引擎新增 RAS 支援，強化工作站與資料中心應用",
    summary: "AMD 近期為其開源 Linux 驅動程式發布了包含 109 個補丁的重大更新，專門為即將推出的 GFX 12.1 繪圖引擎增加 RAS（可靠性、可用性與可維護性）支援。GFX 12.1 尚未明確指定服務的產品，但從新增的補丁內容來看，它具備 SR-IOV 等典型工作站/資料中心級別的功能，而非一般消費級顯示卡。這項更新顯示 GFX 12.1 可能用於下一代工作站或資料中心產品，例如 Radeon AI PRO R9700 的後繼機型，或用於 AMD Instinct MI300A 的 APU 後續產品。雖然這些 RAS 支援目前無法納入 Linux v7.3，但預計將能在今年晚些時候的 Linux v7.4 版本中完成整合，為相關產業提供更穩健的硬體支援。",
    tags: ["AMD", "GFX 12.1", "RAS", "Linux", "工作站", "資料中心"],
    title_en: "AMD Releases 109 Patches, Adds RAS Support to GFX 12.1 Graphics Engine, Strengthening Workstation and Data Center Applications",
    summary_en: "AMD recently released a major update to its open-source Linux driver, containing 109 patches. This update specifically adds RAS (Reliability, Availability, and Serviceability) support for the upcoming GFX 12.1 graphics engine. While GFX 12.1 has not been explicitly assigned to a product, the added patches indicate that it possesses typical workstation/data center level features, such as SR-IOV, rather than being for general consumer graphics cards. This update suggests that GFX 12.1 may be intended for next-generation workstation or data center products, such as successors to the Radeon AI PRO R9700, or for subsequent APU products for the AMD Instinct MI300A. Although this RAS support cannot be included in Linux v7.3, it is expected to be integrated into the Linux v7.4 version later this year, providing more robust hardware support for relevant industries.",
    tags_en: ["AMD", "GFX 12.1", "RAS", "Linux", "Workstation", "Data Center"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-GFX12.1-RAS-Patch-Series", lang: "EN" }
    ]
  },
  {
    id: "20260815-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 liveupdate 流程中 session 類型驗證漏洞",
    summary: "本漏洞存在於 Linux 核心的 liveupdate 機制中，涉及 session 類型驗證不當。當使用者在建立（outgoing）會話後，直接執行 retrieve 操作，而未透過 kexec 進行中間步驟時，會導致 memfd 的 retrieve 處理程序執行。此處理程序預期是在 post-kexec 環境下被呼叫，因此會嘗試執行 `kho_restore_vmalloc()` 或 `kho_restore_folio()` 來恢復記憶體。雖然 KHO 機制會捕獲此錯誤並返回錯誤，但由於這被視為內部錯誤，導致系統產生大量 WARN() 警告，造成不必要的系統混亂和潛在的穩定性問題。修補建議是必須在 `luo_session_ioctl()` 函數中，為每個 ioctl 操作類型關聯正確的類型，並在分派 ioctl 處理程序前進行嚴格的類型驗證，確保操作是在正確的會話類型上被呼叫。",
    tags: ["Linux 核心", "liveupdate", "ioctl", "memfd", "kexec", "CVE-2026-68455"],
    title_en: "Linux Kernel Patch: Fixing Session Type Validation Vulnerability in liveupdate Process",
    summary_en: "This vulnerability exists within the Linux kernel's liveupdate mechanism, involving improper session type validation. When a user executes a retrieve operation immediately after establishing an outgoing session, without going through an intermediate kexec step, it triggers the memfd retrieve process. This process is expected to be called in a post-kexec environment, and thus attempts to execute `kho_restore_vmalloc()` or `kho_restore_folio()` to restore memory. Although the KHO mechanism catches this error and returns an error, because this is treated as an internal error, the system generates a large number of WARN() warnings, causing unnecessary system clutter and potential stability issues. The suggested fix is to correctly associate the type for each ioctl operation type within the `luo_session_ioctl()` function, and to perform strict type validation before dispatching the ioctl handler, ensuring the operation is called on the correct session type.",
    tags_en: ["Linux Kernel", "liveupdate", "ioctl", "memfd", "kexec", "CVE-2026-68455"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68455", lang: "EN" }
    ]
  },
  {
    id: "20260815-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 usb: atm: ueagle-atm 驅動程式在設備移除時的競態條件漏洞",
    summary: "本修補針對 Linux 核心中的 `usb: atm: ueagle-atm` 驅動程式，解決了在設備（device）被物理移除時可能發生的競態條件（race condition）問題。問題出在 `ueagle-atm` 驅動程式在 `.probe()` 函式中使用非同步的 `request_firmware_nowait()` 進行韌體載入，但在設備移除的 `.disconnect()` 處理程序中，並未等待其非同步操作完成。這可能導致設備卸載（teardown）流程與非同步韌體載入操作同時執行，進而觸發核心檔案系統（kernfs）和 sysfs 相關的意外行為，並在過去的 syzbot 測試中被多次報告。修補方案是在 `.disconnect()` 處理程序中加入等待預韌體載入（pre-firmware load）的機制，確保設備移除的完整性。此修補已通過合成再現器、USB gadget 和 QEMU 模擬器等多種測試驗證，旨在提高核心驅動程式的穩定性和可靠性。",
    tags: ["Linux 核心", "ueagle-atm", "usb", "競態條件", "kernfs", "sysfs"],
    title_en: "Linux Kernel Patch: Fixes Race Condition in usb: atm: ueagle-atm Driver During Device Removal",
    summary_en: "This patch addresses a race condition in the `usb: atm: ueagle-atm` driver within the Linux kernel. The issue occurs when a device is physically removed. The problem stems from the `ueagle-atm` driver using the asynchronous `request_firmware_nowait()` function in its `.probe()` function for firmware loading, but failing to wait for this asynchronous operation to complete during the device removal `.disconnect()` handler. This could lead to the device teardown process running concurrently with the asynchronous firmware loading operation, potentially triggering unexpected behavior in the kernel filesystem (kernfs) and sysfs, which has been reported multiple times in past syzbot tests. The fix introduces a mechanism in the `.disconnect()` handler to wait for pre-firmware loading, ensuring the integrity of device removal. This patch has been validated through various tests, including synthetic reproducers, USB gadgets, and QEMU emulators, aiming to enhance the stability and reliability of the kernel driver.",
    tags_en: ["Linux Kernel", "ueagle-atm", "usb", "race condition", "kernfs", "sysfs"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68456", lang: "EN" }
    ]
  },
  {
    id: "20260815-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 ksmbd 漏洞：SMB 檔案操作時的憑證處理不當問題",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，涉及對 SMB 檔案系統操作（如 SET_SPARSE、SET_ZERO_DATA 和 SET_COMPRESSION）的處理。問題核心在於，這些操作雖然透過開啟的 SMB 句柄執行，但其底層的 VFS xattr、fallocate 或 fileattr 輔助函數，卻使用了當前 ksmbd 工作者憑證。這導致這些輔助函數可以獨立於 SMB 句柄的存取遮罩，重新驗證 inode 權限、所有權和 LSM 策略。攻擊者若能利用此漏洞，可能在目標檔案被開啟時捕獲的憑證，執行超出預期範圍的檔案操作。修補建議是將憑證處理限制在單一檔案的 FSCTL 處理範圍內，而非將會話憑證應用於整個 IOCTL 處理器，特別是當該處理器包含無句柄和多句柄操作時。受影響的版本範圍包括所有小於 6.1.178、6.6.145、6.12.97、6.18.40 和 7.1.5 的版本。建議升級至最新的 Linux 核心版本以修復此安全缺陷。",
    tags: ["Linux 核心", "ksmbd", "SMB", "CVE-2026-68457", "VFS", "LSM"],
    title_en: "Linux Kernel ksmbd Vulnerability: Improper Credential Handling During SMB File Operations",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, concerning the handling of SMB file system operations (such as SET_SPARSE, SET_ZERO_DATA, and SET_COMPRESSION). The core issue is that while these operations are executed through an opened SMB handle, the underlying VFS xattr, fallocate, or fileattr helper functions utilize the credentials of the current ksmbd worker. This allows these helper functions to re-validate inode permissions, ownership, and LSM policies independently of the access mask provided by the SMB handle. If an attacker can exploit this vulnerability, they may perform file operations beyond the expected scope using credentials captured when the target file was opened. The recommended fix is to restrict credential handling within the scope of a single file's FSCTL processing, rather than applying the session credentials to the entire IOCTL processor, especially when that processor includes handleless and multi-handle operations. Affected versions include all versions less than 6.1.178, 6.6.145, 6.12.97, 6.18.40, and 7.1.5. Users are advised to upgrade to the latest Linux kernel version to patch this security flaw.",
    tags_en: ["Linux Kernel", "ksmbd", "SMB", "CVE-2026-68457", "VFS", "LSM"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68457", lang: "EN" }
    ]
  },
  {
    id: "20260815-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 CVE-2026-68458：binder 交易處理中的緩衝區大小計算錯誤",
    summary: "本漏洞位於 Linux 核心的 binder 機制中，涉及 `binder_transaction()` 函數的緩衝區大小計算邏輯。問題出在 `security_release_secctx()` 函數執行後，它會將 `lsmctx` 結構體中的 `len` 欄位清零（memset zeroes len）。然而，在後續計算 `sg_buf_end_offset` 時，程式碼卻再次讀取了這個已被清零的 `lsmctx.len`，導致計算出的 `sg_buf_end_offset` 實際值過大。\n\n由於 `BINDER_TYPE_PTR` 物件依賴這個過大的 `sg_buf_end_offset` 作為複製操作的唯一上限，攻擊者可以利用這個錯誤，讓資料複製操作超出預期的緩衝區範圍，進而讀取到原本儲存 `secctx` 結構體內容的記憶體位元組。修復建議是，在計算 `lsmctx_aligned_size` 時，應將其值在函數範圍內快取（cache），而不是在 `security_release_secctx()` 之後重新讀取已被清除的 `lsmctx.len`，並使用這個快取值進行後續的減法計算。",
    tags: ["Linux 核心", "binder", "CVE-2026-68458", "security_release_secctx", "內核漏洞"],
    title_en: "Linux Kernel Fixes CVE-2026-68458: Buffer Size Calculation Error in Binder Transaction Processing",
    summary_en: "This vulnerability resides in the Linux kernel's binder mechanism, specifically involving the buffer size calculation logic within the `binder_transaction()` function. The issue arises because after the execution of the `security_release_secctx()` function, it zeroes out the `len` field in the `lsmctx` structure (memset zeroes len). However, when subsequently calculating `sg_buf_end_offset`, the code reads this already zeroed `lsmctx.len`, causing the calculated `sg_buf_end_offset` to be excessively large. Since the `BINDER_TYPE_PTR` object relies on this oversized `sg_buf_end_offset` as the sole upper limit for the copy operation, an attacker can exploit this error to make the data copy operation exceed the expected buffer range, thereby reading memory bytes originally storing the `secctx` structure content. The suggested fix is that when calculating `lsmctx_aligned_size`, its value should be cached within the function scope, rather than being re-read from the cleared `lsmctx.len` after `security_release_secctx()`, and this cached value should be used for subsequent subtraction calculations.",
    tags_en: ["Linux Kernel", "binder", "CVE-2026-68458", "security_release_secctx", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68458", lang: "EN" }
    ]
  },
  {
    id: "20260815-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "f2fs 文件系統修復潛在死鎖：修補 gc_merge 路徑的 f2fs_balance_fs 函式",
    summary: "本修補針對 Linux 核心中的 f2fs 文件系統，解決了在掛載設備時使用 `gc_merge` 掛載選項可能發生的潛在死鎖（deadlock）問題。當使用此選項時，在 `f2fs_balance_fs()` 函式執行過程中，如果寫回緩存頁面（writeback）和垃圾回收（GC）執行流程交錯，可能會導致多個執行緒（如 Kworker、GC thread、Truncator）在鎖定資源（folio's lock）時相互等待，進而造成死鎖。修補的重點是確保在 `gc_merge` 路徑的 `f2fs_balance_fs()` 函式中，提交緩存的 I/O 請求（cached bios）的方式，與 `NOGC_MERGE` 路徑保持一致。具體修補內容是呼叫 `f2fs_submit_merged_write(sbi, DATA)` 和 `f2fs_submit_all_merged_ipu_writes(sbi)` 函式，以正確提交合併寫入操作，從而避免資源鎖定衝突，確保文件系統的穩定性與資料完整性。",
    tags: ["Linux 核心", "f2fs", "gc_merge", "死鎖", "文件系統", "f2fs_balance_fs"],
    title_en: "f2fs Filesystem Fixes Potential Deadlock: f2fs_balance_fs Function Patches gc_merge Path",
    summary_en: "This patch targets the f2fs filesystem within the Linux kernel, resolving a potential deadlock issue that can occur when mounting a device using the `gc_merge` mount option. When this option is used, if the writeback and garbage collection (GC) processes interleave during the execution of the `f2fs_balance_fs()` function, it can cause multiple threads (such as Kworker, GC thread, and Truncator) to wait for each other while locking resources (folio's lock), leading to a deadlock. The focus of the patch is to ensure that the method of submitting cached I/O requests (cached bios) within the `f2fs_balance_fs()` function in the `gc_merge` path remains consistent with the `NOGC_MERGE` path. Specifically, the patch calls `f2fs_submit_merged_write(sbi, DATA)` and `f2fs_submit_all_merged_ipu_writes(sbi)` functions to correctly submit merged write operations, thereby avoiding resource locking conflicts and ensuring filesystem stability and data integrity.",
    tags_en: ["Linux Kernel", "f2fs", "gc_merge", "deadlock", "filesystem", "f2fs_balance_fs"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68459", lang: "EN" }
    ]
  },
  {
    id: "20260815-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統修復潛在死鎖：空間耗盡時的資料寫回問題",
    summary: "本篇公告針對 Linux 核心中的 f2fs 文件系統（f2fs filesystem）提出修復，解決了在文件系統空間接近耗盡時可能發生的潛在死鎖（deadlock）問題。當文件系統空間極度受限時，系統在執行資料寫回（writeback）或平衡（balance）操作時，可能會導致相關工作執行緒（kworker）或任務（task）進入長時間阻塞狀態，進而造成系統性能瓶頸或服務中斷。此問題主要發生在 f2fs 進行垃圾回收（garbage collect, gc）和寫回資料頁面（write data pages）的過程中。修復建議是升級到包含此修補的 Linux 核心版本，以確保在資源極度受限的環境下，文件系統操作能夠順利完成，避免系統死鎖。由於原文未提供具體的 CVE 編號或 CVSS 分數，修補建議為升級核心。",
    tags: ["Linux 核心", "f2fs", "死鎖", "文件系統", "kworker", "核心修補"],
    title_en: "Linux f2fs Filesystem Fixes Potential Deadlock: Data Writeback Issue During Space Exhaustion",
    summary_en: "This announcement addresses a fix in the Linux kernel's f2fs filesystem, resolving a potential deadlock issue that can occur when the filesystem space is nearly exhausted. When filesystem space is severely limited, the system may enter a prolonged blocked state for related worker threads (kworker) or tasks during writeback or balance operations. This can lead to system performance bottlenecks or service interruptions. This issue primarily occurs during f2fs garbage collection (gc) and writing data pages. The recommended fix is to upgrade to a Linux kernel version containing this patch, ensuring that filesystem operations can complete smoothly even in resource-constrained environments, thus preventing system deadlocks. Since the original text did not provide specific CVE IDs or CVSS scores, the patch recommendation is a kernel upgrade.",
    tags_en: ["Linux Kernel", "f2fs", "Deadlock", "Filesystem", "kworker", "Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68460", lang: "EN" }
    ]
  },
  {
    id: "20260815-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全更新：修復 fwnode_handle 初始化時的未初始化記憶體洩漏風險",
    summary: "本漏洞涉及 Linux 核心中的 `fwnode_init()` 函數，當韌體節點（firmware node）在堆疊或堆上分配，且使用非零化分配函數初始化時，如果未正確初始化 `fwnode_handle` 的次要指標（secondary pointer），可能導致該指標包含未初始化記憶體。這使得後續使用該指標（例如在 `dev_to_swnode()` 中）時，可能會發生未預期的行為或記憶體洩漏。修補建議是在初始化 `fwnode_handle` 時，明確將 `fwnode->secondary` 設置為 NULL，並確保初始化結構體的所有剩餘欄位，以避免使用未初始化或不確定的記憶體值。此漏洞的修復已包含在多個 Linux 核心版本中，建議系統管理員應升級至最新的安全版本以修補此問題。",
    tags: ["Linux 核心", "fwnode_handle", "fwnode_init()", "記憶體洩漏", "CVE-2026-68461"],
    title_en: "Linux Kernel Security Update: Fixes Uninitialized Memory Leak Risk During fwnode_handle Initialization",
    summary_en: "This vulnerability affects the `fwnode_init()` function within the Linux kernel. When a firmware node is allocated on the stack or heap, and initialized using a non-zeroing allocation function, failure to properly initialize the `fwnode_handle`'s secondary pointer may result in this pointer containing uninitialized memory. This can lead to unexpected behavior or memory leaks when the pointer is subsequently used (e.g., in `dev_to_swnode()`). The recommended fix is to explicitly set `fwnode->secondary` to NULL when initializing `fwnode_handle`, and to ensure all remaining fields of the structure are initialized, thereby preventing the use of uninitialized or uncertain memory values. The fix for this vulnerability has been included in multiple Linux kernel versions, and system administrators are advised to upgrade to the latest secure version to patch this issue.",
    tags_en: ["Linux Kernel", "fwnode_handle", "fwnode_init()", "Memory Leak", "CVE-2026-68461"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68461", lang: "EN" }
    ]
  },
  {
    id: "20260815-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 bpf 程式碼中接受負數常數偏移量導致的緩衝區越界漏洞",
    summary: "本漏洞存在於 Linux 核心的 eBPF (extended Berkeley Packet Filter) 系統中。核心的 verifier 在檢查緩衝區存取時，原本僅檢查指令偏移量，而未能正確處理由指標算術產生的負數常數偏移量。這使得攻擊者可以利用一個負數偏移量（例如 -8）和零的指令偏移量，通過 verifier 驗證，從而繞過安全檢查。具體來說，當對可寫的原始追蹤點 (writable raw tracepoints) 進行存取時，計算的結束位址也會基於 `reg->var_off.value`。攻擊者可以利用這種機制，讓一個從 -8 開始的八位元組存取，將計算出的結束位址繞回零，使得程式能夠成功載入和附加，同時不增加 `max_tp_access` 的限制。修補建議是確保 `reg->var_off` 確實是常數後，必須使用帶符號算術計算出有效的存取起始位址，並在該位址為負數時拒絕執行，從而防止負數偏移量導致的越界存取。",
    tags: ["Linux 核心", "eBPF", "bpf", "緩衝區越界", "CVE-2026-68462"],
    title_en: "Linux Kernel Patch: Fixes Buffer Overflow Vulnerability in bpf Code Accepting Negative Constant Offsets",
    summary_en: "This vulnerability exists within the eBPF (extended Berkeley Packet Filter) system of the Linux kernel. The kernel's verifier, when checking buffer access, originally only checked instruction offsets and failed to correctly handle negative constant offsets resulting from pointer arithmetic. This allows an attacker to utilize a negative offset (e.g., -8) and a zero instruction offset to bypass security checks, even after verifier validation. Specifically, when accessing writable raw tracepoints, the calculated end address also relies on `reg->var_off.value`. An attacker can exploit this mechanism by making an eight-byte access starting from -8, causing the calculated end address to wrap back to zero. This allows the program to successfully load and attach without increasing the `max_tp_access` limit. The suggested patch ensures that after confirming `reg->var_off` is a constant, the effective access start address must be calculated using signed arithmetic, and execution must be rejected if this address is negative, thereby preventing the out-of-bounds access caused by negative offsets.",
    tags_en: ["Linux Kernel", "eBPF", "bpf", "Buffer Overflow", "CVE-2026-68462"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68462", lang: "EN" }
    ]
  },
  {
    id: "20260815-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全更新：修復 mmc: sdhci-esdhc-imx 模組的電源管理漏洞",
    summary: "本漏洞涉及 Linux 核心的 mmc: sdhci-esdhc-imx 驅動程式，屬於電源管理（power management）相關的缺陷。問題點在於在系統進入休眠（suspend）狀態時，處理資源釋放和狀態恢復的邏輯存在不當。原有的程式碼使用 `pm_runtime_get_sync()`，若發生錯誤，可能導致資源計數器（usage counter）未正確處理，進而可能導致系統在嘗試存取硬體暫存器時發生核心崩潰（kernel panic）。修復方案建議將 `pm_runtime_get_sync()` 替換為 `pm_runtime_resume_and_get()`。新函數在失敗時會自動釋放使用計數器，避免了需要額外呼叫 `pm_runtime_put_noidle()` 的步驟，並確保了錯誤處理的完整性。建議系統管理員應升級 Linux 核心到修復此問題的最新版本，以避免潛在的系統不穩定性或崩潰。",
    tags: ["Linux 核心", "mmc", "sdhci-esdhc-imx", "電源管理", "kernel panic"],
    title_en: "Linux Kernel Security Update: Patching Power Management Vulnerability in mmc:sdhci-esdhc-imx Module",
    summary_en: "This vulnerability affects the `mmc:sdhci-esdhc-imx` driver within the Linux kernel, specifically concerning power management defects. The issue lies in the improper logic for resource release and state restoration when the system enters a suspend state. The original code used `pm_runtime_get_sync()`, which, if it failed, could lead to incorrect handling of the resource usage counter. This, in turn, might cause a kernel panic when the system attempts to access hardware registers. The proposed fix suggests replacing `pm_runtime_get_sync()` with `pm_runtime_resume_and_get()`. The new function automatically releases the usage counter upon failure, eliminating the need for an additional call to `pm_runtime_put_noidle()`, and ensuring complete error handling. System administrators are advised to upgrade the Linux kernel to the latest version containing this fix to prevent potential system instability or crashes.",
    tags_en: ["Linux Kernel", "mmc", "sdhci-esdhc-imx", "Power Management", "kernel panic"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68463", lang: "EN" }
    ]
  },
  {
    id: "20260815-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 mmc: sdhci-esdhc-imx 設備在系統休眠喚醒時的未處理中斷警告",
    summary: "本修補針對 Linux 核心中的 mmc: sdhci-esdhc-imx 驅動程式，解決了在使用 Wi-Fi 離帶喚醒（out-of-band wakeup）功能時，系統進入休眠（suspend）狀態時可能發生的「irq xxx: nobody cared」警告。問題根源在於，當系統進入休眠時，即使 `device_may_wakeup()` 判斷 usdhc 設備不具備喚醒能力，其相關中斷（interrupt）並未被無條件禁用。當 Wi-Fi 離帶喚醒觸發系統恢復（resume）時，Wi-Fi 會在 usdhc 設備尚未完全恢復運行時發送卡片中斷。由於 usdhc 仍處於運行時休眠狀態，無法正確處理此中斷，進而導致系統發出「nobody cared」警告。修復方案要求無論設備是否具備喚醒能力，都必須在系統休眠期間無條件禁用 usdhc 中斷，並在恢復時重新啟用，以確保在休眠/恢復轉換過程中不會處理任何中斷。此修補旨在提升系統在低功耗模式下，特別是涉及無線網路喚醒場景的穩定性。",
    tags: ["Linux 核心", "mmc", "sdhci-esdhc-imx", "系統休眠", "中斷處理", "Wi-Fi 喚醒"],
    title_en: "Linux Kernel Fix for mmc: sdhci-esdhc-imx Device Unhandled Interrupt Warning During System Suspend/Wakeup",
    summary_en: "This patch addresses the `mmc: sdhci-esdhc-imx` driver in the Linux kernel, resolving an \"irq xxx: nobody cared\" warning that can occur when the system enters suspend state while using out-of-band wakeup functionality. The root cause is that when the system suspends, the associated interrupt for the usdhc device is not unconditionally disabled, even if `device_may_wakeup()` determines that the usdhc device cannot wake the system. When Wi-Fi out-of-band wakeup triggers system resume, the Wi-Fi sends a card interrupt before the usdhc device has fully resumed operation. Because the usdhc remains in a suspended state, it cannot properly handle this interrupt, leading to the \"nobody cared\" warning. The fix requires unconditionally disabling the usdhc interrupt during system suspend, regardless of the device's wakeup capability, and re-enabling it upon resume. This ensures that no interrupts are processed during the suspend/resume transition. This patch aims to improve system stability in low-power modes, particularly in scenarios involving wireless network wake-up.",
    tags_en: ["Linux Kernel", "mmc", "sdhci-esdhc-imx", "System Suspend", "Interrupt Handling", "Wi-Fi Wakeup"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68464", lang: "EN" }
    ]
  },
  {
    id: "20260815-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心元件 sdhci-esdhc-imx 漏洞修復：防止設備無法恢復預設引腳配置",
    summary: "本漏洞修復涉及 Linux 核心的 `drivers/mmc/host/sdhci-esdhc-imx.c` 檔案，專門處理 eMMC 介面。問題點在於，當設備處於休眠（sleep）的 pinctrl 狀態，但缺乏高頻率引腳狀態（100MHz/200MHz）時，原程式碼可能無法正確恢復預設的引腳配置。修復內容是將 `pins_100mhz` 和 `pins_200mhz` 的 IS_ERR 檢查移入各自的 switch case 判斷區塊，確保在執行預設狀態恢復時，不會進入預設的 `default` case，從而解決了設備無法恢復正確引腳配置的潛在問題。建議使用者應升級至修復後的 Linux 核心版本，以確保設備的穩定性和正確的硬體初始化。由於原文未提供 CVSS 分數或具體受影響版本範圍，修補建議為升級核心。",
    tags: ["Linux 核心", "sdhci-esdhc-imx", "eMMC", "pinctrl", "CVE-2026-68465"],
    title_en: "Linux Kernel Component sdhci-esdhc-imx Vulnerability Fix: Preventing Device Failure to Restore Default Pin Configuration",
    summary_en: "This vulnerability fix involves the `drivers/mmc/host/sdhci-esdhc-imx.c` file in the Linux kernel, which specifically handles the eMMC interface. The issue arises because when a device is in a pinctrl state of sleep, but lacks high-frequency pin states (100MHz/200MHz), the original code might fail to correctly restore the default pin configuration. The fix involves moving the `IS_ERR` checks for `pins_100mhz` and `pins_200mhz` into their respective switch case blocks. This ensures that when restoring the default state, the code does not enter the default `default` case, thereby resolving the potential issue where the device fails to restore the correct pin configuration. Users are advised to upgrade to the patched Linux kernel version to ensure device stability and proper hardware initialization. Since the original text did not provide a CVSS score or specific affected version range, the patch recommendation is a kernel upgrade.",
    tags_en: ["Linux Kernel", "sdhci-esdhc-imx", "eMMC", "pinctrl", "CVE-2026-68465"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68465", lang: "EN" }
    ]
  },
  {
    id: "20260815-020",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：mtd: rawnand 驅動程式在 DMA 超時處理上存在缺陷，可能導致資料存取不安全",
    summary: "本漏洞影響 Linux 核心中的 `mtd: rawnand` 驅動程式，具體位於 `lpc32xx_slc.c` 檔案。問題點在於 `lpc32xx_xmit_dma()` 函數在等待 DMA 完成回呼時，會忽略 `wait_for_completion_timeout()` 的返回值。當 DMA 傳輸超時時，系統會將其視為成功，但實際上未正確解除映射（unmap）scatterlist，導致超時傳輸無法持續存取緩衝區。這可能讓攻擊者在錯誤回傳後，仍能透過未解除映射的 scatterlist 繼續存取記憶體，造成資訊洩露或系統不穩定。修補建議是必須在解除映射 scatterlist 之前，先終止 DMA 通道，以確保超時傳輸無法繼續存取緩衝區。此漏洞的修復已包含在最新的 Linux 核心版本中，建議系統管理員應升級至修補後的版本以消除風險。",
    tags: ["Linux 核心", "CVE-2026-68466", "mtd: rawnand", "DMA", "lpc32xx_slc.c", "Linux 驅動程式"],
    title_en: "Linux Kernel Vulnerability: mtd: rawnand Driver Flaw in DMA Timeout Handling May Lead to Data Access Insecurity",
    summary_en: "This vulnerability affects the `mtd: rawnand` driver within the Linux kernel, specifically located in the `lpc32xx_slc.c` file. The issue lies in the `lpc32xx_xmit_dma()` function, which ignores the return value of `wait_for_completion_timeout()` when waiting for DMA completion callbacks. When a DMA transfer times out, the system treats it as successful, but it fails to correctly unmap the scatterlist. This failure means that a timeout transfer cannot cease accessing the buffer. This could allow an attacker, even after an erroneous return, to continue accessing memory via the unmapped scatterlist, potentially leading to information leakage or system instability. The recommended fix is to terminate the DMA channel before unmapping the scatterlist, ensuring that the timeout transfer cannot continue accessing the buffer. This vulnerability has been patched in the latest Linux kernel versions, and system administrators are advised to upgrade to the patched version to mitigate the risk.",
    tags_en: ["Linux Kernel", "CVE-2026-68466", "mtd: rawnand", "DMA", "lpc32xx_slc.c", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68466", lang: "EN" }
    ]
  },
  {
    id: "20260815-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：mtd: mchp23k256 驅動程式存在使用 SPI 匹配資料的風險",
    summary: "本漏洞影響 Linux 核心的 mtd: mchp23k256 驅動程式，涉及在處理晶片容量資訊時的邏輯錯誤。該驅動程式同時在 OF match table 和 SPI id table 中儲存晶片容量資訊。當系統使用 `of_device_get_match_data()` 進行探測時，若非 OF SPI modalias match，則會回退到 `mchp23k256_caps`，即使 SPI id table 選擇了不同的零件。這可能導致在 OF match data 缺失的情況下，仍使用錯誤的 MTD 幾何資訊，造成系統不正確的行為。修復建議是改用 `spi_get_device_match_data()`，確保在 OF match data 缺失時，能正確消耗 SPI id-table 中的 driver_data，從而避免錯誤的 MTD 幾何資訊。建議使用者升級到修復此問題的 Linux 核心版本。",
    tags: ["Linux 核心", "mtd", "mchp23k256", "SPI", "CVE-2026-68467"],
    title_en: "Linux Kernel Vulnerability: mtd: mchp23k256 Driver Risks Using SPI Match Data",
    summary_en: "This vulnerability affects the mtd: mchp23k256 driver in the Linux kernel, involving a logic error when handling chip capacity information. This driver stores chip capacity information in both the OF match table and the SPI id table. When the system uses `of_device_get_match_data()` for probing, if it is not an OF SPI modalias match, it falls back to `mchp23k256_caps`, even if the SPI id table selected a different part. This may result in the system using incorrect MTD geometry information when OF match data is missing, causing incorrect system behavior. The suggested fix is to use `spi_get_device_match_data()`, which ensures that when OF match data is missing, the driver correctly consumes the `driver_data` from the SPI id-table, thereby preventing the use of incorrect MTD geometry information. Users are advised to upgrade to a Linux kernel version that fixes this issue.",
    tags_en: ["Linux Kernel", "mtd", "mchp23k256", "SPI", "CVE-2026-68467"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68467", lang: "EN" }
    ]
  },
  {
    id: "20260815-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：mtd: virt-concat 註冊名稱重複時的記憶體洩漏問題",
    summary: "本漏洞位於 Linux 核心的 mtd 驅動程式模組 `drivers/mtd/mtd_virt_concat.c` 中，涉及 `mtd_virt_concat_create_join()` 函數。當系統多次註冊虛擬連接（virtual concat）時，如果名稱已經存在，該函數會建立相同的名稱並進入等名分支。問題出在該分支沒有釋放新分配的臨時名稱字串，導致記憶體洩漏。此漏洞影響 Linux 核心的特定版本，建議使用者應升級到修復版本以避免資源耗盡。由於原文未提供 CVSS 分數或具體影響範圍，建議系統管理員應參考官方公告，並確保核心版本已修補。",
    tags: ["Linux 核心", "mtd", "mtd_virt_concat", "記憶體洩漏", "CVE-2026-68468"],
    title_en: "Linux Kernel Vulnerability: Memory Leak in mtd: virt-concat on Duplicate Registration Name",
    summary_en: "This vulnerability resides in the Linux kernel's mtd driver module, specifically in `drivers/mtd/mtd_virt_concat.c`, and affects the `mtd_virt_concat_create_join()` function. When the system repeatedly registers a virtual concatenation (virtual concat) and the name already exists, the function creates the same name and enters the equivalent name branch. The issue is that this branch fails to release the newly allocated temporary name string, leading to a memory leak. This vulnerability affects specific versions of the Linux kernel, and users are advised to upgrade to a patched version to prevent resource exhaustion. Since the original text did not provide a CVSS score or specific impact scope, system administrators are advised to consult official announcements and ensure the kernel version is patched.",
    tags_en: ["Linux Kernel", "mtd", "mtd_virt_concat", "Memory Leak", "CVE-2026-68468"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68468", lang: "EN" }
    ]
  },
  {
    id: "20260815-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：mwifiex 驅動程式修復 Wi-Fi 漫遊後「忙碌掃描」問題",
    summary: "本文針對 Linux 核心中的 `wifi: mwifiex` 驅動程式指出一個電源管理與網路連線狀態的漏洞。當設備在進行漫遊（roam）或連線（association）過程中，如果接收到 `EVENT_SLEEP` 訊號，但驅動程式在處理連線回應時，會不當地將電源狀態（ps_state）強制設定為 `PS_STATE_AWAKE`。這導致原本應發生的 `sleep-confirm` 指令未能發送，進而使得後續的掃描（scan）指令無法完成，並導致使用者空間的進一步請求失敗，回傳 `-EBUSY` 錯誤。\n\n此問題在進行多次漫遊迭代後會發生，尤其是在 `EVENT_SLEEP` 和 `association command` 之間存在特定時間延遲（約 20ms）時可重現。修復建議是移除不必要的 `ps_state` 賦值，確保電源狀態僅在與電源節能事件處理相關的路徑中，並在主工作佇列（main workqueue）上進行正確的睡眠確認，以維持系統的電源管理正確性。",
    tags: ["Linux 核心", "mwifiex", "Wi-Fi", "電源管理", "CVE", "漫遊"],
    title_en: "Linux Kernel: mwifiex Driver Fixes Wi-Fi Roaming 'Busy Scan' Issue",
    summary_en: "This article addresses a vulnerability in the `wifi: mwifiex` driver within the Linux kernel related to power management and network connection state. When a device is roaming or associating, if it receives an `EVENT_SLEEP` signal, the driver incorrectly forces the power state (`ps_state`) to `PS_STATE_AWAKE` while processing the connection response. This prevents the necessary `sleep-confirm` command from being sent, causing subsequent scan commands to fail and resulting in the user space returning an `-EBUSY` error.\n\nThis issue occurs after multiple roaming iterations, and it is reproducible with a specific time delay (approximately 20ms) between `EVENT_SLEEP` and the `association command`. The suggested fix is to remove unnecessary `ps_state` assignments, ensuring that the power state is only set within paths related to power saving events, and to correctly perform the sleep confirmation on the main workqueue to maintain system power management accuracy.",
    tags_en: ["Linux Kernel", "mwifiex", "Wi-Fi", "Power Management", "CVE", "Roaming"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68469", lang: "EN" }
    ]
  },
  {
    id: "20260815-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：mac80211 處理擴展幀時的資訊洩漏漏洞修復",
    summary: "本修補針對 Linux 核心的 `mac80211` 驅動程式，解決了在處理擴展幀（Extension frames）時可能發生的資訊洩漏漏洞。當接收路徑（RX path）處理未支援的擴展子類型時，原本會過早地讀取常規標頭（regular header）的地址欄位，導致安全風險。修補建議在接收資料流進入通用處理路徑前，應先過濾掉未支援的擴展子類型。此外，針對 S1G beacon 幀，修補要求在通用接收分派（generic RX dispatch）前，必須先進行線性化處理，並強制要求包含固定欄位的 S1G beacon 標頭。同時，修補也優化了 S1G beacon 的路由路徑，避免在處理這些擴展幀時，在 `mac80211` 的接收路徑中執行常規標頭的地址讀取操作，以降低攻擊面。最後，修補也確保了 `ieee80211_get_bssid()` 函數在返回 S1G 來源地址指標前，具備長度安全檢查。",
    tags: ["Linux 核心", "mac80211", "無線網路", "資訊洩漏", "CVE-2026-68470"],
    title_en: "Linux Kernel Patch: Information Leak Vulnerability Fixed in mac80211 Handling of Extension Frames",
    summary_en: "This patch addresses an information leak vulnerability in the Linux kernel's `mac80211` driver, which could occur when processing extension frames. When the Receive path (RX path) handles unsupported extension sub-types, it would prematurely read the address field of the regular header, creating a security risk. The patch recommends filtering out unsupported extension sub-types before the received data stream enters the general processing path. Additionally, regarding S1G beacon frames, the patch mandates that a linearization process must be performed before the generic RX dispatch, and it enforces that the S1G beacon header must contain fixed fields. Concurrently, the patch also optimizes the S1G beacon routing path, preventing the regular header address read operation within the `mac80211` receive path when handling these extension frames, thereby reducing the attack surface. Finally, the patch also ensures that the `ieee80211_get_bssid()` function performs a length safety check before returning the S1G source address pointer.",
    tags_en: ["Linux Kernel", "mac80211", "Wireless Networking", "Information Leak", "CVE-2026-68470"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68470", lang: "EN" }
    ]
  },
  {
    id: "20260815-025",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞 CVE-2026-68471：Wi-Fi 802.11 協定資訊驗證缺陷",
    summary: "本漏洞 CVE-2026-68471 存在於 Linux 核心的 Wi-Fi 驅動程式中，具體涉及 `ieee80211` 協定處理。原始碼描述指出，`ieee80211_mle_common_size()` 函數使用第一個 common-info octet 作為所有已知 MLE 類型的 common information 長度。然而，`ieee80211_mle_size_ok()` 僅對 Basic、Probe Request 和 TDLS MLEs 進行長度驗證，而 Reconfiguration MLEs 和 Priority Access MLEs 在計算最小 common size 時跳過了長度 octet 的驗證，且 Priority Access MLEs 甚至跳過了對宣告 common information 長度的驗證。\n此漏洞的修復建議是必須考慮 Reconfiguration common-info 長度 octet，並對所有已知 MLE 類型進行宣告 common information 長度的驗證。實務上，這類協定層面的資訊驗證缺陷可能導致攻擊者透過惡意 Wi-Fi 訊號，在未經授權的情況下執行操作，造成系統層面的資訊洩露或服務中斷。\n建議系統管理員應立即更新至修補了此缺陷的 Linux 核心版本，以確保 Wi-Fi 協定處理的完整性與安全性。",
    tags: ["Linux 核心", "CVE-2026-68471", "ieee80211", "Wi-Fi", "MLE", "Linux 驅動程式"],
    title_en: "Linux Kernel Vulnerability CVE-2026-68471: Wi-Fi 802.11 Protocol Information Validation Flaw",
    summary_en: "The vulnerability CVE-2026-68471 resides in the Linux kernel's Wi-Fi driver, specifically affecting the `ieee80211` protocol handling. The source code description indicates that the `ieee80211_mle_common_size()` function uses the first common-info octet as the common information length for all known MLE types. However, `ieee80211_mle_size_ok()` only performs length validation for Basic, Probe Request, and TDLS MLEs, while skipping length validation of the length octet for Reconfiguration MLEs and Priority Access MLEs. Furthermore, Priority Access MLEs even skip validation of the declared common information length. The suggested fix for this vulnerability is to properly consider the Reconfiguration common-info length octet and to validate the declared common information length for all known MLE types. In practice, such protocol-level information validation flaws could allow an attacker to execute operations without authorization using malicious Wi-Fi signals, potentially leading to system-level information leakage or service disruption. System administrators are advised to immediately update to a Linux kernel version patched against this flaw to ensure the integrity and security of Wi-Fi protocol handling.",
    tags_en: ["Linux Kernel", "CVE-2026-68471", "ieee80211", "Wi-Fi", "MLE", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68471", lang: "EN" }
    ]
  },
  {
    id: "20260815-026",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 Wi-Fi 驅動程式的 EHT MLE 驗證漏洞，防止資訊洩露",
    summary: "本漏洞存在於 Linux 核心的 Wi-Fi 驅動程式 `cfg80211` 中，涉及處理 EHT (Extended HT) 多鏈路元素 (MLE) 的邏輯。當父幀的 EHT MLE 包含一個與未傳輸 BSSID 索引匹配的 MLD ID 時，`cfg80211_gen_new_ie()` 函數會從父幀複製 ML 探測響應元素。原始程式碼僅檢查了擴展元素是否大於一個位元組，而沒有充分驗證 MLE 的類型和大小。這使得攻擊者可以透過惡意 AP 發送一個短小的 EHT MLE，導致 `ieee80211_mle_get_mld_id()` 函數在讀取 MLD ID 時越界讀取（read past the IE boundary），從而造成資訊洩露。修補措施是在讀取 MLD ID 之前，增加對 MLE 類型和大小的驗證，確保符合 MLE 輔助函數的契約要求，從而拒絕短小的惡意元素。此修復提升了 Wi-Fi 網路的安全性，防止了底層核心層面的資訊洩露。",
    tags: ["Linux 核心", "cfg80211", "EHT MLE", "Wi-Fi", "資訊洩露"],
    title_en: "Linux Kernel Fixes EHT MLE Validation Vulnerability in Wi-Fi Driver to Prevent Information Leakage",
    summary_en: "This vulnerability resides in the `cfg80211` Wi-Fi driver within the Linux kernel, specifically concerning the logic that processes Extended HT (EHT) Multi-Link Element (MLE). When the parent frame's EHT MLE contains an MLD ID that does not match the transmitted BSSID index, the `cfg80211_gen_new_ie()` function copies the ML detection response element from the parent frame. The original code only checked if the extended element was greater than one byte, failing to adequately validate the MLE's type and size. This allowed an attacker to send a short EHT MLE via a malicious AP, causing the `ieee80211_mle_get_mld_id()` function to perform an out-of-bounds read while reading the MLD ID, resulting in information leakage. The patch addresses this by adding validation for the MLE type and size before reading the MLD ID, ensuring compliance with the contract requirements of the MLE helper function, and thus rejecting short, malicious elements. This fix enhances Wi-Fi network security by preventing information leakage at the underlying kernel level.",
    tags_en: ["Linux Kernel", "cfg80211", "EHT MLE", "Wi-Fi", "Information Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68472", lang: "EN" }
    ]
  },
  {
    id: "20260815-027",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 uaccess 漏洞：PowerPC 架構下地址遮罩檢查錯誤，可能導致權限提升",
    summary: "本漏洞位於 Linux 核心的 `powerpc/uaccess` 模組，影響 `mask_user_address()` 函數。問題出在該函數錯誤地檢查了 `CONFIG_E500` 而非正確的 `CONFIG_PPC_E500`，導致在 E500 硬體上，`mask_user_address_isel()` 函數未能被正確使用。此漏洞的 CVSS 評分為 AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H，代表攻擊向量為本地、權限為最低、複雜度為低、用戶互動為無，影響機密性、完整性、可用性均為高。修補建議是更新 Linux 核心到修復版本，以確保地址遮罩的檢查邏輯正確性。",
    tags: ["Linux 核心", "powerpc", "uaccess", "CVE-2026-68473", "地址遮罩"],
    title_en: "Linux Kernel uaccess Vulnerability: Address Masking Check Error on PowerPC Architecture May Lead to Privilege Escalation",
    summary_en: "This vulnerability resides in the `powerpc/uaccess` module of the Linux kernel, affecting the `mask_user_address()` function. The issue stems from the function incorrectly checking for `CONFIG_E500` instead of the correct `CONFIG_PPC_E500`, which prevents the `mask_user_address_isel()` function from being properly utilized on E500 hardware. The CVSS score for this vulnerability is AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H, indicating a local attack vector, lowest privileges required, low complexity, no user interaction, and high impact on confidentiality, integrity, and availability. The recommended fix is to update the Linux kernel to a patched version to ensure the accuracy of the address masking check logic.",
    tags_en: ["Linux Kernel", "powerpc", "uaccess", "CVE-2026-68473", "address masking"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68473", lang: "EN" }
    ]
  },
  {
    id: "20260815-028",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：powerpc/spufs 內存映射存取存在越界風險，建議更新核心版本",
    summary: "本漏洞影響 Linux 核心中 powerpc/spufs 相關功能，具體發生在 spufs_mem_mmap_access() 函式。該函式在計算本地儲存偏移量時，錯誤地使用 vma->vm_end 作為邊界檢查，而非正確的本地儲存大小（LS_SIZE）。在 64 位元架構下，偏移量通常遠低於 vma->vm_end，導致邊界檢查失效，進而使得長度（len）的限制無法生效，可能導致緩衝區溢出或不正確的記憶體存取。此漏洞的修復方式是修改邊界檢查邏輯，確保偏移量和長度都受到 LS_SIZE 的限制，以模擬 spufs_mem_mmap_fault() 和 spufs_ps_fault() 已採用的保護機制。建議使用者應將 Linux 核心升級至修復此問題的最新版本，以避免潛在的記憶體安全風險。",
    tags: ["Linux 核心", "powerpc", "spufs", "越界存取", "記憶體安全"],
    title_en: "Linux Kernel Vulnerability: Out-of-Bounds Risk in powerpc/spufs Memory Mapping Access; Update Kernel Version Recommended",
    summary_en: "This vulnerability affects the powerpc/spufs functionality within the Linux kernel, specifically occurring in the spufs_mem_mmap_access() function. This function incorrectly uses vma->vm_end as the boundary check when calculating the local storage offset, instead of the correct local storage size (LS_SIZE). On 64-bit architectures, the offset is typically much lower than vma->vm_end, causing the boundary check to fail. This failure prevents the length (len) restriction from taking effect, potentially leading to a buffer overflow or incorrect memory access. The fix involves modifying the boundary check logic to ensure that both the offset and the length are restricted by LS_SIZE, thereby simulating the protective mechanisms already implemented in spufs_mem_mmap_fault() and spufs_ps_fault(). Users are advised to upgrade their Linux kernel to the latest patched version to mitigate potential memory safety risks.",
    tags_en: ["Linux Kernel", "powerpc", "spufs", "Out-of-Bounds Access", "Memory Safety"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68474", lang: "EN" }
    ]
  },
  {
    id: "20260815-029",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心資源洩漏漏洞：Sunxi ioremap 失敗時的記憶體管理缺陷已修復",
    summary: "本漏洞涉及 Linux 核心的 `drivers/reset/reset-sunxi.c` 檔案，具體是 `sunxi_reset_init()` 函數。當系統執行 `ioremap()` 失敗時，原本透過 `request_mem_region()` 取得的記憶體區域未能被釋放，導致系統資源洩漏（resource leak）。這屬於記憶體管理上的缺陷，可能導致系統穩定性問題或資源耗盡。修補建議是在程式碼中加入 `err_mem_region` 標籤，以確保在記憶體區域釋放之前，能正確地釋放相關的記憶體區域標籤，從而避免資源洩漏。由於原文未提供 CVSS 分數、影響台數或外洩筆數等具體數字，故未公開。使用者應立即更新至修復此缺陷的 Linux 核心版本，以確保系統的穩定性和資源的正確管理。",
    tags: ["Linux 核心", "資源洩漏", "sunxi", "ioremap", "CVE-2026-68475", "記憶體管理"],
    title_en: "Linux Kernel Resource Leak Vulnerability: Memory Management Flaw in Sunxi ioremap Failure Handled",
    summary_en: "This vulnerability affects the `drivers/reset/reset-sunxi.c` file within the Linux kernel, specifically within the `sunxi_reset_init()` function. When the system executes `ioremap()` and it fails, the memory region originally acquired via `request_mem_region()` is not properly released, leading to a system resource leak. This is a memory management flaw that could potentially cause system instability or resource exhaustion. The suggested fix involves adding an `err_mem_region` label in the code to ensure that the relevant memory region label is correctly released before the memory region itself is released, thereby preventing the resource leak. Since the original source did not provide specific details such as CVSS scores, number of affected systems, or number of exposed records, it has not been publicly disclosed. Users should immediately update to the Linux kernel version that fixes this flaw to ensure system stability and proper resource management.",
    tags_en: ["Linux Kernel", "Resource Leak", "sunxi", "ioremap", "CVE-2026-68475", "Memory Management"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68475", lang: "EN" }
    ]
  },
  {
    id: "20260815-030",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 IPVS 模組漏洞：IP 頭部重分配後重新加載問題",
    summary: "本漏洞影響 Linux 核心的 IPVS (IP Virtual Server) 模組，具體發生在 `ipvs: reload ip header after head reallocation` 的功能中，涉及 `__ip_vs_get_out_rt()` 呼叫 `skb_ensure_writable()` 可能導致 `skb->head` 進行重新分配。此類問題可能導致核心層面的資訊洩露或服務中斷。攻擊向量為網路（AV:N），權限要求為低（AC:L），但影響和機密性皆為高（C:H/I:H/A:H）。修補建議是升級 Linux 核心到已修復的版本。由於原文未提供具體 CVE 編號，建議系統管理員應參考 NVD 頁面或官方公告，確保核心已更新至修復此 IPVS 模組問題的最新版本。",
    tags: ["Linux 核心", "IPVS", "CVE-2026-68476", "netfilter", "Linux 核心更新"],
    title_en: "Linux Kernel IPVS Module Vulnerability: Reloading After IP Header Reallocation",
    summary_en: "This vulnerability affects the IPVS (IP Virtual Server) module in the Linux kernel. Specifically, it occurs within the `ipvs: reload ip header after head reallocation` functionality, involving the call to `skb_ensure_writable()` from `__ip_vs_get_out_rt()`, which may cause reallocation of `skb->head`. Such issues could potentially lead to kernel-level information leakage or service disruption. The attack vector is network (AV:N), and the required privileges are low (AC:L), but the impact and confidentiality/integrity/availability are all high (C:H/I:H/A:H). The recommended fix is to upgrade the Linux kernel to a patched version. Since the original text did not provide a specific CVE ID, system administrators are advised to consult NVD pages or official announcements to ensure the kernel is updated to the latest version that resolves this IPVS module issue.",
    tags_en: ["Linux Kernel", "IPVS", "CVE-2026-68476", "netfilter", "Linux Kernel Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68476", lang: "EN" }
    ]
  },
  {
    id: "20260815-031",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 ipvs 漏洞修復：修正 IPv6 傳輸偏移與 ICMPV6 檢查和",
    summary: "本漏洞修復涉及 Linux 核心的 ipvs 模組，主要問題點在於應用程式代碼在處理 IPv6 相關功能時，錯誤地假設了 IPv4 網路標頭格式，即使透過 ipvsh 參數提供了 IPv6 資訊也會造成問題。這可能導致運行在 IPv6 環境下的應用程式出現異常。修復內容包括提供正確的 ICMPV6 標頭偏移量，以確保在 IPv6 封包帶有擴展標頭時，checksum 檢查能夠正確執行。開發者應升級到修復後的 Linux 核心版本，以避免潛在的網路通訊異常。由於原文未提供 CVSS 分數或具體影響範圍，建議使用者參考官方公告進行版本升級。",
    tags: ["Linux 核心", "ipvs", "IPv6", "CVE-2026-68477", "Netfilter"],
    title_en: "Linux Kernel ipvs Vulnerability Fix: Correcting IPv6 Transport Offset and ICMPV6 Checks",
    summary_en: "This vulnerability fix affects the Linux kernel's ipvs module. The core issue is that the application code incorrectly assumes the IPv4 network header format when handling IPv6-related functions, leading to problems even when IPv6 information is provided via ipvsh parameters. This could cause abnormal behavior in applications running in an IPv6 environment. The fix includes providing the correct ICMPV6 header offset to ensure that the checksum check executes correctly when the IPv6 packet contains extension headers. Developers should upgrade to the patched Linux kernel version to prevent potential network communication anomalies. As the original text did not provide a CVSS score or specific impact scope, users are advised to refer to official announcements for version upgrade guidance.",
    tags_en: ["Linux Kernel", "ipvs", "IPv6", "CVE-2026-68477", "Netfilter"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68477", lang: "EN" }
    ]
  },
  {
    id: "20260815-032",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：Memory Stick 區塊計數溢位漏洞 (CVE-2026-68478)",
    summary: "本漏洞存在於 Linux 核心的 Memory Stick (ms_block) 驅動程式中。當該驅動程式處理的記憶卡報告的區塊數量 (block_count) 過大時，會導致計算 `zone_count` 和後續的陣列索引超出預設的緩衝區範圍，進而寫入 `free_block_count` 陣列的有效索引範圍之外。由於 `free_block_count` 是一個固定大小的整數陣列，其有效索引範圍為 0 到 15 (MS_MAX_ZONES=16)。如果記憶卡報告的區塊數量超過 8192 個區塊，攻擊者可以利用此問題寫入超出界限的索引，從而破壞 `struct msb_data` 的結構完整性。修補措施已在 `msb_ftl_initialize()` 函式中實作，現在會主動拒絕處理報告區塊數量超過 `MS_MAX_ZONES * MS_BLOCKS_IN_ZONE` 的記憶卡，有效防止了越界寫入。建議系統維護者應立即更新至修補後的 Linux 核心版本。",
    tags: ["Linux 核心", "Memory Stick", "ms_block", "CVE-2026-68478", "越界寫入"],
    title_en: "Linux Kernel Patch: Memory Stick Block Counter Overflow Vulnerability (CVE-2026-68478)",
    summary_en: "This vulnerability exists in the Memory Stick (ms_block) driver within the Linux kernel. When the driver processes memory cards that report an excessively large block count (block_count), it causes the calculation of `zone_count` and subsequent array indexing to exceed the predefined buffer range, leading to writes outside the valid index range of the `free_block_count` array. Since `free_block_count` is a fixed-size integer array with a valid index range of 0 to 15 (MS_MAX_ZONES=16), an attacker can exploit this issue by writing out-of-bounds indices, thereby corrupting the structural integrity of `struct msb_data`. The patch has been implemented in the `msb_ftl_initialize()` function, which now proactively rejects processing memory cards reporting a block count exceeding `MS_MAX_ZONES * MS_BLOCKS_IN_ZONE`, effectively preventing the out-of-bounds write. System administrators are advised to immediately update to the patched Linux kernel version.",
    tags_en: ["Linux Kernel", "Memory Stick", "ms_block", "CVE-2026-68478", "Out-of-bounds Write"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68478", lang: "EN" }
    ]
  },
  {
    id: "20260815-033",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：brcmfmac 處理短認證幀時的堆溢位漏洞 (CVE-2026-72003)",
    summary: "本漏洞存在於 Linux 核心的 `wifi: brcmfmac: cyw` 驅動程式中，涉及處理 Wi-Fi 認證幀（auth frame）時的堆溢位（heap overflow）。當 `brcmf_notify_auth_frame_rx()` 函數從韌體事件中獲取幀長度並進行複製時，僅進行了 `e->datalen >= sizeof(*rxframe)` 的長度檢查。然而，在計算實際複製長度 `mgmt_frame_len` 時，如果該長度小於管理標頭偏移量（24 bytes），由於使用無符號數值進行減法運算，會導致 `mgmt_frame_len` 變成一個極大的數值。隨後，`memcpy` 函數會嘗試將數據複製到遠超出原始 `kzalloc` 緩衝區的範圍，從而造成堆溢位。攻擊者可利用惡意或故障的存取點（AP）在外部 SAE 認證交換期間發送過短的幀，從而遠程觸發此堆溢位。修補建議是在執行複製操作前，增加檢查，確保接收到的幀長度不短於管理標頭偏移量。",
    tags: ["Linux 核心", "brcmfmac", "heap overflow", "Wi-Fi", "CVE-2026-72003"],
    title_en: "Linux Kernel Patch: Heap Overflow Vulnerability in brcmfmac Handling Short Authentication Frames (CVE-2026-72003)",
    summary_en: "This vulnerability exists in the `wifi: brcmfmac: cyw` driver within the Linux kernel, involving a heap overflow when processing Wi-Fi authentication frames (auth frames). When the `brcmf_notify_auth_frame_rx()` function retrieves the frame length from a firmware event and copies it, it only performs a length check of `e->datalen >= sizeof(*rxframe)`. However, when calculating the actual copy length `mgmt_frame_len`, if this length is less than the management header offset (24 bytes), the use of unsigned arithmetic causes `mgmt_frame_len` to become an extremely large value. Subsequently, the `memcpy` function attempts to copy data far beyond the bounds of the original `kzalloc` buffer, resulting in a heap overflow. An attacker can exploit this by sending overly short frames from a malicious or faulty Access Point (AP) during an external SAE authentication exchange, thereby remotely triggering this heap overflow. The recommended patch is to add a check before performing the copy operation, ensuring that the received frame length is not shorter than the management header offset.",
    tags_en: ["Linux Kernel", "brcmfmac", "heap overflow", "Wi-Fi", "CVE-2026-72003"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-72003", lang: "EN" }
    ]
  },
  {
    id: "20260815-034",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 mac80211 修正記憶體洩漏：修復 ieee80211_register_hw() 函數的錯誤路徑",
    summary: "本篇公告指出 Linux 核心的 mac80211 驅動程式存在一個記憶體洩漏（memory leak）漏洞。當使用 kmemdup() 函數複製支援的頻段結構（supported band structures）失敗時，錯誤處理路徑會跳過 rate_control_deinitialize() 函數的執行，導致初始化後的 local->rate_ctrl 結構體無法釋放，造成記憶體洩漏。此問題已在核心層級得到修復。該漏洞最初是在開發用於核心記憶體管理錯誤的實驗性分析工具時發現的，目前該工具尚未公開。雖然原文提到此錯誤在 v7.1-rc7 版本中仍存在，但已提供修復方法，建議使用者應更新至修復後的核心版本以避免資源洩漏。",
    tags: ["Linux 核心", "mac80211", "記憶體洩漏", "kmemdup", "ieee80211_register_hw()"],
    title_en: "Linux Kernel mac80211 Fixes Memory Leak: Corrects Error Path in ieee80211_register_hw() Function",
    summary_en: "This announcement points out a memory leak vulnerability in the Linux kernel's mac80211 driver. When the function kmemdup() fails to copy supported band structures, the error handling path skips the execution of rate_control_deinitialize(), causing the initialized local->rate_ctrl structure to remain unreleased, resulting in a memory leak. This issue has been fixed at the kernel level. The vulnerability was initially discovered while developing an experimental analysis tool for kernel memory management errors, which is not yet public. Although the original text mentions that this error persists in version v7.1-rc7, a fix has been provided, and users are advised to update to the patched kernel version to prevent resource leakage.",
    tags_en: ["Linux Kernel", "mac80211", "Memory Leak", "kmemdup", "ieee80211_register_hw()"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-72004", lang: "EN" }
    ]
  },
  {
    id: "20260815-035",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：rt2x00 驅動程式在偵測階段的資源釋放邏輯缺陷",
    summary: "本漏洞涉及 Linux 核心中的 `rt2x00` 無線網路驅動程式。問題出在 `rt2x00lib_probe_dev()` 函數在偵測（probe）失敗時，會使用完整的 `rt2x00lib_remove_dev()` 資源清理路徑。然而，在工作佇列（workqueue）和設備資料（drv_data）分配可能失敗的早期階段，某些關鍵的工作項目（如 `intf_work`、`autowakeup_work` 和 `sleep_work`）尚未初始化。這導致在早期退出時，不應進入假設所有工作項目已設定完成的完整移除路徑。攻擊者可利用 QEMU PoC 模擬工作佇列分配失敗，迫使系統進入錯誤的清理流程，導致系統報告無效的工作佇列（invalid work drains）。修補建議是，在設備資料分配失敗時應直接返回，而在工作佇列分配失敗時，應使用一個更精簡的早期清理路徑，避免使用完整的移除流程。",
    tags: ["Linux 核心", "rt2x00", "驅動程式", "資源管理", "CVE-2026-72005"],
    title_en: "Linux Kernel Patch: Resource Release Logic Flaw in rt2x00 Driver During Detection",
    summary_en: "This vulnerability affects the `rt2x00` wireless network driver within the Linux kernel. The issue lies in the `rt2x00lib_probe_dev()` function, which utilizes the complete `rt2x00lib_remove_dev()` resource cleanup path when detection (probe) fails. However, during early stages where the allocation of the workqueue and device data (`drv_data`) might fail, certain critical work items (such as `intf_work`, `autowakeup_work`, and `sleep_work`) may not have been initialized. This causes the system to enter the full removal path, which assumes all work items have been successfully set up, even during an early exit. An attacker can exploit this using a QEMU PoC that simulates workqueue allocation failure, forcing the system into the incorrect cleanup process and resulting in the system reporting invalid work drains. The suggested patch is that if device data allocation fails, the function should return directly, and if workqueue allocation fails, a more streamlined early cleanup path should be used, avoiding the complete removal process.",
    tags_en: ["Linux Kernel", "rt2x00", "Driver", "Resource Management", "CVE-2026-72005"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-72005", lang: "EN" }
    ]
  },
  {
    id: "20260815-036",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：mlx5 驅動程式在釋放 ST 索引資料時可能發生記憶體洩漏",
    summary: "本漏洞影響 Linux 核心的 net/mlx5 驅動程式，特別是在處理 TPH steering-tag hints 相關的 RDMA MRs 工作負載時。問題出在當系統釋放 ST table entry 時，雖然 `mlx5_st_dealloc_index()` 已經從 `idx_xa` 移除該條目，但其底層的 `mlx5_st_idx_data` 記憶體分配卻沒有被正確釋放。這導致每次循環分配和釋放 mkeys 時，都會洩漏一個 `struct mlx5_st_idx_data`。長期運行會導致 kmalloc slab 記憶體持續增長，造成資源洩漏。修補建議是修改程式碼，確保在呼叫 `xa_erase()` 之後，釋放 `idx_data`，以匹配簿記結構的生命週期與其追蹤的 ST entry 的生命週期。受影響的程式碼路徑為 `drivers/net/ethernet/mellanox/mlx5/core/lib/st.c`。",
    tags: ["Linux 核心", "mlx5", "記憶體洩漏", "RDMA", "CVE-2026-72006"],
    title_en: "Linux Kernel Vulnerability: Memory Leak in mlx5 Driver During ST Index Deallocation",
    summary_en: "This vulnerability affects the net/mlx5 driver in the Linux kernel, specifically when handling RDMA MR workloads related to TPH steering-tag hints. The issue arises because when the system releases an ST table entry, although `mlx5_st_dealloc_index()` removes the entry from `idx_xa`, the underlying memory allocated for `mlx5_st_idx_data` is not correctly freed. This results in a leak of a `struct mlx5_st_idx_data` every time mkeys are allocated and deallocated in a cycle. Over time, this causes continuous growth of kmalloc slab memory, leading to resource exhaustion. The suggested fix is to modify the code to ensure that `idx_data` is freed after calling `xa_erase()`, matching the lifecycle of the bookkeeping structure with that of the tracked ST entry. The affected code path is `drivers/net/ethernet/mellanox/mlx5/core/lib/st.c`.",
    tags_en: ["Linux Kernel", "mlx5", "Memory Leak", "RDMA", "CVE-2026-72006"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-72006", lang: "EN" }
    ]
  },
  {
    id: "20260815-037",
    trackers: ["os", "security"],
    category: "Linux",
    title: "i.MX8MP 核心元件修復：解決 VC8000E 功耗啟動時的時序問題",
    summary: "本修復針對 Linux 核心中的 pmdomain: imx 相關漏洞，解決了 i.MX8MP 晶片組在 VC8000E/VPUMIX 進行功耗啟動/關機循環時可能遇到的時序問題（ERR050531）。問題描述指出，VC8000E 重置解除邊緣和 AXI 時脈可能存在時序不一致性。修復建議的解決方案是透過設定 BLK_CLK_EN_CSR 的 bit2 為 0，來關閉發送到 VC8000E 和 VPU_NOC m_v_2 介面的 AXI 時脈，以避免在 VC8000E 功耗啟動過程中發生掛起。開發者需在 'struct imx8m_blk_ctrl_domain_data' 中新增一個布林變數 is_errata_err050531 來判斷是否需要此臨時解決方案。若為真，則必須在啟動 gpc 之前清除時脈，並在啟動後再重新啟用時脈。這屬於核心層面的硬體支援修復，旨在提高嵌入式系統的穩定性。",
    tags: ["Linux 核心", "i.MX8MP", "VC8000E", "pmdomain", "時序問題", "嵌入式系統"],
    title_en: "i.MX8MP Core Component Fix: Resolving Timing Issues During VC8000E Power Cycling",
    summary_en: "This fix addresses a vulnerability related to `pmdomain: imx` within the Linux kernel, resolving a potential timing issue (ERR050531) encountered by the i.MX8MP chipset during power-on/power-off cycles involving the VC8000E/VPUMIX. The issue description points to potential timing inconsistencies between the VC8000E reset deassertion edge and the AXI clock. The suggested solution is to set bit 2 of `BLK_CLK_EN_CSR` to 0, thereby disabling the AXI clock sent to the VC8000E and VPU_NOC m_v_2 interfaces. This prevents system hang during the VC8000E power-on process. Developers must add a boolean variable, `is_errata_err050531`, to the `struct imx8m_blk_ctrl_domain_data` to determine if this temporary workaround is necessary. If true, the clock must be cleared before initializing the GPC and re-enabled afterward. This constitutes a core-level hardware support fix aimed at enhancing the stability of embedded systems.",
    tags_en: ["Linux Kernel", "i.MX8MP", "VC8000E", "pmdomain", "Timing Issue", "Embedded System"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-72007", lang: "EN" }
    ]
  },
  {
    id: "20260815-038",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11/10 頻繁重啟現象解析：多重重啟是安裝 Secure Boot 憑證與韌體更新的正常過程",
    summary: "本文針對部分使用者在安裝 Windows 11 和 Windows 10 的月度累積更新後，設備會出現多次重啟的現象進行解釋。微軟（Microsoft）確認此現象主要與 Secure Boot 憑證的滾動部署（rollout）以及相關的韌體（firmware）更新有關。Secure Boot 憑證的更新過程複雜，需要將新的憑證資料寫入設備的韌體，並讓系統在不同階段（如準備、應用憑證、使用新簽署的 Bootloader）進行多次重啟才能完成。微軟指出，一旦憑證更新完成，此多重重啟現象將會停止。此外，系統在接收到累積更新時，若同時包含韌體或驅動程式更新，也可能觸發額外的重啟。微軟已確認正在測試單次重啟的方案，目標是讓使用者在每月更新時只需重啟一次。建議使用者留意系統的官方公告，並確保更新流程順利完成，以防錯過修補 AI 驅動的安全漏洞。",
    tags: ["Windows 11", "Windows 10", "Secure Boot", "韌體更新", "Microsoft", "累積更新"],
    title_en: "Analysis of Windows 11/10 Frequent Restart Phenomenon: Multiple Restarts are Normal During Secure Boot Certificate and Firmware Updates",
    summary_en: "This article explains the phenomenon of multiple restarts experienced by some users after installing monthly cumulative updates for Windows 11 and Windows 10. Microsoft has confirmed that this phenomenon is primarily related to the rollout of Secure Boot certificates and associated firmware updates. The process of updating Secure Boot certificates is complex, requiring new certificate data to be written into the device's firmware, and the system needs multiple restarts at different stages (such as preparation, applying certificates, and using the newly signed Bootloader) to complete the process. Microsoft points out that once the certificate update is complete, the multiple restart phenomenon will cease. Furthermore, if the system receives a cumulative update that simultaneously includes firmware or driver updates, it may trigger additional restarts. Microsoft has confirmed that it is testing a single-restart solution, aiming to require users to restart only once during monthly updates. Users are advised to pay attention to official system announcements and ensure the update process completes smoothly to avoid missing security patches for AI-related vulnerabilities.",
    tags_en: ["Windows 11", "Windows 10", "Secure Boot", "Firmware Update", "Microsoft", "Cumulative Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/15/dont-panic-if-windows-11-reboots-multiple-times-for-security-updates-explained-why-its-happening", lang: "EN" }
    ]
  },
  {
    id: "20260815-039",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 意外損壞 Outlook Classic 的 Copilot 整合功能，用戶需透過新版或網頁版使用",
    summary: "Microsoft 在為 Outlook Classic 整合更多 AI 功能的過程中，意外導致 Copilot 功能消失。根據 Microsoft 的支援文件，當 Outlook for Windows 更新至 build 20026.20182 及更高版本後，用戶將無法在 Outlook 中找到 Copilot Chat 或 Copilot 入點。此問題主要影響擁有 Copilot Chat (Basic) 或付費 M365 Copilot (Premium) 帳戶的用戶。若用戶發現 Copilot 在功能區（Ribbon menu）缺失、無法開啟，或顯示為灰色，即為此 Bug。Microsoft 建議受影響的用戶暫時改用 Outlook on the web 或 Microsoft 365 Copilot 獨立應用程式。若問題持續存在，可嘗試建立新的 Outlook 設定檔、清除快取或刪除本地配置。公司提醒，在調查期間，應透過其他支援的 Microsoft 365 應用程式使用 Copilot。",
    tags: ["Microsoft", "Outlook Classic", "Copilot", "AI", "M365", "Windows"],
    title_en: "Microsoft inadvertently breaks Copilot integration in Outlook Classic; users must use the new version or web version",
    summary_en: "While integrating more AI features into Outlook Classic, Microsoft inadvertently caused the Copilot functionality to disappear. According to Microsoft support documentation, after Outlook for Windows updates to build 20026.20182 or higher, users will be unable to find Copilot Chat or the Copilot entry point within Outlook. This issue primarily affects users with Copilot Chat (Basic) or paid M365 Copilot (Premium) accounts. If users notice that Copilot is missing from the Ribbon menu, cannot be opened, or appears grayed out, this is the bug. Microsoft advises affected users to temporarily switch to Outlook on the web or the standalone Microsoft 365 Copilot application. If the problem persists, users can try creating a new Outlook profile, clearing the cache, or deleting local configurations. The company reminds users that during the investigation period, they should use Copilot through other supported Microsoft 365 applications.",
    tags_en: ["Microsoft", "Outlook Classic", "Copilot", "AI", "M365", "Windows"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/15/microsoft-confirms-it-accidentally-disabled-copilot-in-outlook-classic-and-we-wish-it-wasnt-a-mistake", lang: "EN" }
    ]
  },
  {
    id: "20260815-040",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 Linux 殭屍網路程式 Evooo1Bot 攻擊邊緣設備，將路由器轉為 SOCKS5 流量中繼節點",
    summary: "研究人員發現一種名為 Evooo1Bot 的新型 Mirai 基礎模組化 Linux 殭屍網路程式。該惡意軟體主要鎖定面向網際網路的閘道設備（gateway devices），將其轉化為 SOCKS5 流量中繼節點。Evooo1Bot 的功能遠超單純的代理節點，它具備憑證竊取、SSH 暴力破解、發動分散式阻斷服務（DDoS）攻擊等能力。該程式利用已知的漏洞，目標設備包括 Alcatel、NETGEAR、Tenda、Mitsubishi Electric、Telesquare、D-Link 等品牌。Fortinet 研究指出，雖然它重用了 Mirai 的 DDoS 引擎，但擴展了加密的 C2 通訊、SSH 暴力破解掃描器、SOCKS 轉接模組、憑證嗅探器和整合的漏洞利用工具箱。新版本甚至包含針對 Hikvision 攝影機、Atlassian Confluence、Zyxel 防火牆、TP-Link 路由器等設備的獨立漏洞利用模組。攻擊者利用該殭屍網路程式可以透過加密的 C2 通訊（使用 443 埠）進行通訊，並透過 SOCKS5 模組隱藏惡意流量，甚至可進行大規模的住宅代理服務營利。為防禦，建議持續更新 IoT 設備的韌體，更換預設管理員密碼，關閉遠端存取面板，並在供應商停止支援時更換設備。",
    tags: ["Evooo1Bot", "Linux Botnet", "SOCKS5", "DDoS", "IoT 設備", "殭屍網路"],
    title_en: "New Linux Botnet, Evooo1Bot, Attacks Edge Devices, Converting Routers into SOCKS5 Traffic Relays",
    summary_en: "Researchers have discovered a new Mirai-based modular Linux botnet called Evooo1Bot. This malware primarily targets internet-facing gateway devices, converting them into SOCKS5 traffic relay nodes. Evooo1Bot's capabilities far exceed simple proxy functionality, including credential theft, SSH brute-forcing, and launching Distributed Denial of Service (DDoS) attacks. The program exploits known vulnerabilities, targeting brands such as Alcatel, NETGEAR, Tenda, Mitsubishi Electric, Telesquare, and D-Link. Fortinet research indicates that while it reuses the Mirai DDoS engine, it has expanded to include encrypted C2 communication, an SSH brute-forcing scanner, a SOCKS proxy module, a credential sniffer, and an integrated exploit toolkit. New versions even contain dedicated exploit modules for devices such as Hikvision cameras, Atlassian Confluence, Zyxel firewalls, and TP-Link routers. Attackers utilizing this botnet can communicate via encrypted C2 traffic (using port 443) and conceal malicious traffic through the SOCKS5 module, even enabling large-scale residential proxy service monetization. For defense, it is recommended to continuously update IoT device firmware, change default administrator passwords, disable remote access panels, and replace equipment when vendor support ceases.",
    tags_en: ["Evooo1Bot", "Linux Botnet", "SOCKS5", "DDoS", "IoT Devices", "Botnet"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/new-evooo1bot-linux-botnet-turns-routers-into-traffic-relay-nodes", lang: "EN" }
    ]
  },
  {
    id: "20260815-041",
    trackers: ["os"],
    category: "Apple",
    title: "Notepad.exe：一款極簡、超快速的 Mac 程式碼編輯器介紹",
    summary: "本文介紹了一款名為 Notepad.exe 的獨立開發應用程式，旨在為程式設計師提供一個極簡且高效的程式碼編輯體驗。傳統的開發流程通常需要用戶先建立專案結構，並經過多層選單設定才能開始編寫程式碼。Notepad.exe 改變了這一模式，主張用戶應先從一個空白檔案開始，將專案的規劃留待之後。這使得用戶能夠更快速、更順暢地將初步的程式想法轉化為實際的程式碼，大幅降低了入門和開始編寫的門檻。這款應用程式的設計理念是讓開發過程盡可能簡單化，讓用戶專注於寫作本身。",
    tags: ["Notepad.exe", "程式碼編輯器", "Mac OS", "開發工具"],
    title_en: "Notepad.exe: Introducing a Minimalist, Ultra-Fast Mac Code Editor",
    summary_en: "This article introduces an independent application called Notepad.exe, designed to provide programmers with a minimalist and highly efficient code editing experience. Traditional development workflows often require users to first establish a project structure and navigate through multiple menu layers before writing code. Notepad.exe changes this pattern, advocating that users should start with a blank file and defer project planning until later. This allows users to quickly and smoothly convert initial programming ideas into actual code, significantly lowering the barrier to entry and starting the writing process. The application's design philosophy is to simplify the development process as much as possible, allowing users to focus solely on the writing itself.",
    tags_en: ["Notepad.exe", "Code Editor", "Mac OS", "Development Tools"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/15/indie-app-spotlight-notepad-exe-is-an-ultra-fast-lightweight-code-editor-for-your-mac", lang: "EN" }
    ]
  },
  {
    id: "20260815-042",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 家庭產品線更新：HomePod mini 與 Apple TV 等設備預計迎來重大升級",
    summary: "本文討論 Apple 家庭產品（主要指 HomePod mini 和 Apple TV）的產品生命週期已達到 4 到 6 年，因此預計將迎來一次重大更新。雖然過去一直有傳聞稱 Siri AI 的發展是新硬體發布的延遲因素，但隨著 Siri AI 的進步，市場預期 Apple 將很快開始推出新一代的家庭產品。文章指出，這些更新將涵蓋 Apple 生態系統中的多種設備，預計為用戶帶來功能和性能上的顯著提升，以應對不斷發展的智能家居需求。",
    tags: ["Apple", "HomePod mini", "Apple TV", "Siri AI", "智能家居", "產品更新"],
    title_en: "Apple Home Product Line Update: Devices like HomePod mini and Apple TV Expected to Receive Major Upgrades",
    summary_en: "This article discusses that Apple's home product line (primarily referring to HomePod mini and Apple TV) has reached a product lifecycle of 4 to 6 years, suggesting an upcoming major refresh. Although there have been persistent rumors that the development of Siri AI has delayed new hardware releases, with the advancement of Siri AI, the market anticipates that Apple will soon launch a new generation of home products. The article points out that these updates will cover various devices within the Apple ecosystem, expected to bring significant improvements in functionality and performance to meet the growing demands of smart home technology.",
    tags_en: ["Apple", "HomePod mini", "Apple TV", "Siri AI", "Smart Home", "Product Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/15/apple-home-product-roadmap-tv-homepod-smart-display", lang: "EN" }
    ]
  },
  {
    id: "20260815-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SAP Commerce Cloud 遭高危漏洞 CVE-2026-58231 攻擊，恐致任意程式碼執行",
    summary: "SAP Commerce Cloud 受到一項高嚴重性漏洞 CVE-2026-58231 的威脅，該漏洞的 CVSS 評分為 10.0。此漏洞源於不當的授權檢查和輸入驗證，允許未經身份驗證的攻擊者利用預設的身份驗證客戶端，向缺乏足夠驗證的特定功能提交惡意輸入。成功利用此漏洞可能導致任意程式碼執行，進而危害應用程式的機密性、完整性和可用性。安全廠商 Onapsis 提醒客戶必須修補到指定的 Commerce Cloud 修復版本，並重新建置/部署更新後的 SAP Commerce Cloud 版本。作為臨時的權宜之計，客戶可透過在 SAP Commerce Cloud 中配置 IP 過濾集（IP Filter Set），限制對易受攻擊端點的存取。儘管目前尚未公開 PoC，但已觀察到攻擊嘗試，建議用戶應立即採取修補措施。",
    tags: ["SAP Commerce Cloud", "CVE-2026-58231", "任意程式碼執行", "高危漏洞", "輸入驗證"],
    title_en: "SAP Commerce Cloud Targeted by Critical Vulnerability CVE-2026-58231, Potential for Arbitrary Code Execution",
    summary_en: "SAP Commerce Cloud is threatened by a high-severity vulnerability, CVE-2026-58231, which has a CVSS score of 10.0. This vulnerability stems from improper authorization checks and input validation, allowing unauthenticated attackers to submit malicious input to a specific feature using the default authentication client that lacks sufficient validation. Successful exploitation of this vulnerability could lead to arbitrary code execution, compromising the application's confidentiality, integrity, and availability. Security vendor Onapsis advises customers to patch to the specified Commerce Cloud fixed version and rebuild/deploy the updated SAP Commerce Cloud version. As a temporary measure, customers can restrict access to the vulnerable endpoint by configuring an IP Filter Set within SAP Commerce Cloud. Although no PoC has been publicly released, attack attempts have been observed, and users are advised to implement patching measures immediately.",
    tags_en: ["SAP Commerce Cloud", "CVE-2026-58231", "Arbitrary Code Execution", "Critical Vulnerability", "Input Validation"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/sap-commerce-cloud-cve-2026-58231.html", lang: "EN" }
    ]
  },
  {
    id: "20260815-044",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apple macOS 螢幕共享功能存在嚴重漏洞，可遠端取得 Root 權限，已遭積極利用",
    summary: "國家網路安全中心（NCSC-NL）警告，Apple macOS 的螢幕共享（Screen Sharing）功能存在嚴重漏洞，已在野外被積極利用來部署加密貨幣挖礦程式。主要的漏洞為 CVE-2026-65400，這是一個關鍵的認證問題，允許已在網路上的攻擊者在未經有效憑證的情況下，登入內建的遠端桌面服務。此漏洞的修補已包含在 macOS Tahoe 26.6.1、macOS Sequoia 15.7.9 和 macOS Sonoma 14.8.9 等緊急更新中。\n\n除了 CVE-2026-65400，文章還提及了其他相關漏洞，包括 CVE-2026-43779、CVE-2026-43777 和 CVE-2026-43760。研究人員指出，這些漏洞屬於邏輯錯誤（logic bugs），特別是 CVE-2026-65400 允許攻擊者在經過 VNC 認證後，透過檔案複製操作，轉化為保護檔案洩露、任意 Root 檔案創建和遠端 Root 指令執行（LPE）。\n\n攻擊者甚至發現了更早的、無需密碼的預認證漏洞，僅需知道 IP 位址即可入侵。由於這些漏洞的利用門檻極低，甚至被 AI 代理程式在數小時內開發出可用的攻擊程式，實務影響極大。建議使用者立即更新系統至最新版本，若無法修補，應停用螢幕共享功能。",
    tags: ["Apple macOS", "CVE-2026-65400", "螢幕共享", "遠端桌面", "LPE", "NCSC-NL"],
    title_en: "Critical Vulnerability in Apple macOS Screen Sharing Allows Remote Root Access, Actively Exploited",
    summary_en: "The National Cyber Security Centre (NCSC-NL) has warned that a critical vulnerability exists in Apple macOS's Screen Sharing function, which is being actively exploited in the wild to deploy cryptocurrency mining malware. The primary vulnerability is CVE-2026-65400, a critical authentication flaw that allows an attacker already on the network to log into the built-in remote desktop service without valid credentials. The patch for this vulnerability has been included in emergency updates such as macOS Tahoe 26.6.1, macOS Sequoia 15.7.9, and macOS Sonoma 14.8.9.\n\nIn addition to CVE-2026-65400, the article also mentions other related vulnerabilities, including CVE-2026-43779, CVE-2026-43777, and CVE-2026-43760. Researchers point out that these vulnerabilities are logic bugs; specifically, CVE-2026-65400 allows an attacker, after passing VNC authentication, to escalate into a Local Privilege Escalation (LPE) through a file copy operation, leading to arbitrary root file creation and remote root command execution.\n\nAttackers have even discovered earlier, pre-authentication vulnerabilities that require only knowledge of the IP address for intrusion. Due to the extremely low barrier to exploitation, usable exploit code was even developed by AI agents within hours, posing a significant practical risk. Users are advised to immediately update their systems to the latest version, and if patching is not possible, they should disable the Screen Sharing function.",
    tags_en: ["Apple macOS", "CVE-2026-65400", "Screen Sharing", "Remote Desktop", "LPE", "NCSC-NL"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/apple-macos-screen-sharing-flaw.html", lang: "EN" }
    ]
  },
  {
    id: "20260815-045",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-15689：Perl Dancer2 插件允許透過 Host 標頭進行密碼重設連結中毒攻擊",
    summary: "Dancer2::Plugin::Auth::Extensible 函式庫的 0.713 版本及更早版本，存在一個名為 CVE-2026-15689 的安全漏洞。此漏洞允許攻擊者透過操縱 HTTP 請求的 Host 標頭（或 X-Forwarded-Host）來執行密碼重設連結中毒（Password Reset Link Poisoning）。當應用程式使用預設的密碼重設或歡迎信件功能時，它會根據請求的 Host 標頭來生成重設連結。攻擊者可以利用此機制，將發送給受害者的重設連結指向攻擊者控制的網域，從而竊取重設代碼，最終接管受害者的帳號。該漏洞的根本原因是弱的密碼恢復機制（CWE-640）。修補建議是，在 0.712 版本及更高版本中，必須設定 `uri_base` 設定鍵，將其明確指定為應用程式自身的基礎 URL，否則應拒絕任何 Host 標頭不符合預期應用程式主機名的請求。",
    tags: ["CVE-2026-15689", "Dancer2::Plugin::Auth::Extensible", "Perl", "Host Header", "密碼重設", "CWE-640"],
    title_en: "CVE-2026-15689: Perl Dancer2 Plugin Allows Password Reset Link Poisoning via Host Header",
    summary_en: "Versions 0.713 and earlier of the Dancer2::Plugin::Auth::Extensible library contain a security vulnerability identified as CVE-2026-15689. This vulnerability allows an attacker to perform Password Reset Link Poisoning by manipulating the HTTP request's Host header (or X-Forwarded-Host). When the application uses default password reset or welcome email functionality, it generates the reset link based on the requested Host header. An attacker can exploit this mechanism to redirect the reset link sent to the victim to a domain controlled by the attacker, thereby stealing the reset code and ultimately taking over the victim's account. The root cause of this vulnerability is a weak password recovery mechanism (CWE-640). The recommended fix is that in version 0.712 and later, the `uri_base` configuration key must be set to explicitly specify the application's own base URL; otherwise, requests with Host headers that do not match the expected application hostname should be rejected.",
    tags_en: ["CVE-2026-15689", "Dancer2::Plugin::Auth::Extensible", "Perl", "Host Header", "Password Reset", "CWE-640"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/15/4", lang: "EN" }
    ]
  },
  {
    id: "20260815-046",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "DBI 模組存在堆疊溢出漏洞：舊版 Perl 允許未經驗證的數字佔位符進行堆記憶體寫入",
    summary: "Perl 的 DBI 模組（版本早於 1.652）存在一個嚴重的堆記憶體越界寫入（heap out-of-bounds write）漏洞，CVE-2026-73194。此漏洞源於對未經驗證的數字佔位符（numeric placeholder）處理不當，導致在 `preparse` 過程中，攻擊者可以設置一個負數的 binder counter。當後續的語句包含問號（?）時，會透過 `sprintf` 函數擴展成帶有負數索引的佔位符，導致緩衝區分配錯誤，最終造成堆記憶體越界寫入。此漏洞的嚴重性與問號的數量成正比。建議所有使用 DBI 模組的系統，應立即升級至版本 1.652 或更高版本。對於無法立即升級的部署，可將 SQL 語句中的佔位符限制在 99,999 個以作為臨時緩解措施。",
    tags: ["CVE-2026-73194", "DBI", "Perl", "堆記憶體越界寫入", "Out-of-bounds Write"],
    title_en: "DBI Module Contains Stack Overflow Vulnerability: Older Perl Versions Allow Unvalidated Numeric Placeholders to Perform Heap Memory Write",
    summary_en: "The Perl DBI module (versions prior to 1.652) contains a critical heap out-of-bounds write vulnerability, CVE-2026-73194. This vulnerability stems from improper handling of unvalidated numeric placeholders, allowing an attacker to set a negative binder counter during the `preparse` process. When subsequent statements include question marks (?), these are expanded via the `sprintf` function into placeholders with negative indices, leading to incorrect buffer allocation and ultimately causing a heap out-of-bounds write. The severity of this vulnerability is proportional to the number of question marks. All systems using the DBI module are advised to immediately upgrade to version 1.652 or later. For deployments that cannot be immediately upgraded, restricting the placeholders in SQL statements to 99,999 can serve as a temporary mitigation measure.",
    tags_en: ["CVE-2026-73194", "DBI", "Perl", "Heap Out-of-bounds Write", "Out-of-bounds Write"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/15/3", lang: "EN" }
    ]
  },
  {
    id: "20260815-047",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "DBI 模組曝出堆疊溢寫漏洞：32位元 Perl 系統可遭利用，建議升級至 1.652 以上",
    summary: "DBI 模組（版本早於 1.652）在 32 位元 Perl 環境下存在一個堆疊越界寫入（heap out-of-bounds write）的漏洞，CVE-2026-73193。此漏洞源於 `preparse` 函式在計算輸出緩衝區大小時，因字串長度計算（STRLEN）發生整數環繞（integer wraparound）。攻擊者可透過傳入一個極長的未經信任的 SQL 語句，導致計算溢出，使程式在沒有容量檢查的情況下，將超出分配的緩衝區寫入資料。這類攻擊可導致攻擊者寫入其控制的位元組，造成嚴重的安全風險。建議所有使用 32 位元 Perl 環境的用戶，應立即升級 DBI 模組至 1.652 或更高版本。若無法升級，則需限制 SQL 語句的大小不超過 292 MB。",
    tags: ["CVE-2026-73193", "DBI", "Perl", "堆疊越界寫入", "32位元", "整數環繞"],
    title_en: "DBI Module Exposed to Stack Overflow Vulnerability: 32-bit Perl Systems Can Be Exploited, Upgrade to 1.652 or Higher Recommended",
    summary_en: "The DBI module (versions prior to 1.652) contains a heap out-of-bounds write vulnerability in 32-bit Perl environments, identified as CVE-2026-73193. This vulnerability stems from an integer wraparound issue during string length calculation (STRLEN) within the `preparse` function. An attacker can exploit this by passing an extremely long, untrusted SQL statement, causing an overflow calculation that allows the program to write data beyond the allocated buffer without performing capacity checks. Such an attack could allow an attacker to write controlled bytes, posing a severe security risk. All users running 32-bit Perl environments are advised to immediately upgrade the DBI module to version 1.652 or higher. If upgrading is not possible, the size of the SQL statement must be limited to no more than 292 MB.",
    tags_en: ["CVE-2026-73193", "DBI", "Perl", "Heap Out-of-Bounds Write", "32-bit", "Integer Wraparound"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/15/2", lang: "EN" }
    ]
  },
  {
    id: "20260815-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GNU Inetutils talkd 緩衝區溢位漏洞：長 DNS 名稱導致的 CVE-2026-19720 分析",
    summary: "本漏洞影響 GNU Inetutils 套件中的 talkd 服務，屬於因處理過長的 DNS 名稱而導致的緩衝區溢位（buffer overflow）問題。該漏洞的發現與修復過程記錄了詳細的時間線，從 2026 年 7 月 2 日的報告開始，經過多次驗證和修補程式的撰寫與確認。最終，Red Hat 為此問題分配了 CVE-2026-19720。此類漏洞若未修補，可能允許攻擊者利用過長的輸入參數，導致服務崩潰或執行任意程式碼。建議使用者應立即更新至修補了此漏洞的 GNU Inetutils 版本，以確保系統的網路服務安全。",
    tags: ["GNU Inetutils", "talkd", "CVE-2026-19720", "緩衝區溢位", "DNS", "網路服務"],
    title_en: "GNU Inetutils talkd Buffer Overflow Vulnerability: CVE-2026-19720 Analysis Caused by Long DNS Names",
    summary_en: "This vulnerability affects the talkd service within the GNU Inetutils package and is a buffer overflow issue caused by processing overly long DNS names. The discovery and remediation process for this vulnerability documented a detailed timeline, starting with a report on July 2, 2026, followed by multiple validations and the development and confirmation of patches. Red Hat ultimately assigned CVE-2026-19720 for this issue. If unpatched, this type of vulnerability could allow an attacker to exploit overly long input parameters, leading to service crashes or arbitrary code execution. Users are advised to immediately update to the patched GNU Inetutils version to ensure the security of their network services.",
    tags_en: ["GNU Inetutils", "talkd", "CVE-2026-19720", "Buffer Overflow", "DNS", "Network Service"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/15/1", lang: "EN" }
    ]
  },
  {
    id: "20260815-049",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Pixel 11廣告曝光神秘穿戴裝置：疑似推出全新型號的健身追蹤器",
    summary: "近期有用戶在YouTube上發現Google Pixel 11的廣告，這些廣告除了展示Pixel 11手機和Pixel Watch 5等產品外，還出現了一款神秘的穿戴式追蹤器。該裝置外觀呈橢圓形，配有螢幕，介面設計類似Pixel Watch 5，但其基本形狀與Fitbit Air的核心穿戴裝置相似，整體觀感更接近Fitbit Charge系列。雖然Google尚未對此裝置做出任何官方說明，但其在Pixel 11廣告中一同亮相，暗示Google可能正在開發或準備推出一款新的、配備螢幕的健身追蹤器。目前文章指出，雖然Fitbit Air的成功和業界對無螢幕追蹤器的趨勢，讓市場對此裝置的真實性產生疑問，但其在廣告中的出現已成為業界關注的焦點。建議關注Google官方後續發布的資訊。",
    tags: ["Google Pixel 11", "Pixel Watch 5", "Fitbit Air", "穿戴裝置", "Google Health", "健身追蹤器"],
    title_en: "Google Pixel 11 Ad Reveals Mysterious Wearable Device: Potential Launch of All-New Fitness Tracker",
    summary_en: "Recently, users on YouTube discovered an advertisement for the Google Pixel 11. In addition to showcasing the Pixel 11 phone and products like the Pixel Watch 5, the ad also featured a mysterious wearable tracker. The device has an oval appearance and includes a screen, with an interface design similar to the Pixel Watch 5. However, its basic shape resembles the core wearable devices of the Fitbit Air, giving it an overall feel closer to the Fitbit Charge series. Although Google has not made any official statement regarding this device, its appearance alongside the Pixel 11 ad suggests that Google may be developing or preparing to launch a new, screen-equipped fitness tracker. The article notes that while the success of the Fitbit Air and the industry trend toward screen-less trackers raise questions about the device's authenticity, its appearance in the ad has become a focus of industry attention. It is recommended to monitor official information released by Google in the future.",
    tags_en: ["Google Pixel 11", "Pixel Watch 5", "Fitbit Air", "Wearable Device", "Google Health", "Fitness Tracker"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/15/google-pixel-11-ad-unknown-fitbit-tracker", lang: "EN" }
    ]
  },
  {
    id: "20260815-050",
    trackers: ["os"],
    category: "重點關注",
    title: "美國商務部長警告 Apple 避免採購中國記憶體晶片，籲尋求替代供應鏈",
    summary: "根據《華爾街日報》報導，美國商務部長 Howard Lutnick 表示，美國政府不贊成 Apple 從中國採購記憶體晶片，尤其是在全球供應鏈短缺的背景下。Apple 近期曾尋求購買來自中國公司 CXMT 和 YMTC 的記憶體晶片，但這些公司均被美國政府列入限制名單，且 YMTC 和 CXMT 已被國防部指定為與中國軍方相關的公司。Lutnick 在一次訪談中強調，美國不應讓美國企業使用中國的記憶體產品，並暗示 Apple 必須尋找「其他解決方案」。雖然 Apple COO Sabih Khan 指出記憶體晶片在產品中並非高度客製化，可能可以使用現成的晶片，但若涉及客製化，則需遵守美國出口管制規定。美國政府的立場明確傾向於鼓勵 Apple 轉向非中國的供應商，以維護美國本土產業鏈的完整性。",
    tags: ["Apple", "美國商務部", "記憶體晶片", "CXMT", "YMTC", "供應鏈", "出口管制"],
    title_en: "U.S. Commerce Secretary Warns Apple to Avoid Sourcing Chinese Memory Chips, Urges Alternative Supply Chains",
    summary_en: "According to a report in the Wall Street Journal, U.S. Commerce Secretary Howard Lutnick stated that the U.S. government does not approve of Apple sourcing memory chips from China, particularly amid global supply chain shortages. Apple recently sought to purchase memory chips from Chinese companies CXMT and YMTC, but both companies have been placed on U.S government restriction lists, and YMTC and CXMT have been designated by the Department of Defense as companies associated with the Chinese military. Lutnick emphasized in an interview that the U.S. should not allow American companies to use Chinese memory products, hinting that Apple must find 'other solutions.' Although Apple COO Sabih Khan pointed out that memory chips are not highly customized in products and that off-the-shelf chips might be usable, any customized chips must comply with U.S export control regulations. The U.S. government's stance clearly favors encouraging Apple to transition to non-Chinese suppliers to maintain the integrity of the American domestic industrial chain.",
    tags_en: ["Apple", "U.S. Department of Commerce", "Memory Chips", "CXMT", "YMTC", "Supply Chain", "Export Control"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/14/commerce-secretary-says-us-opposes-apple-buying-chinese-memory-chips", lang: "EN" }
    ]
  },
  {
    id: "20260815-051",
    trackers: ["os"],
    category: "重點關注",
    title: "美國發電設施趨勢分析：2026年上半年新上線電廠以太陽能與電池儲能為主",
    summary: "本文分析了美國能源資訊管理局（US Energy Information Administration）提供的數據，回顧了2026年第一季度至第二季度間，共計368座新上線的公用事業級發電設施。數據顯示，新上線的電廠類型主要集中在公用事業級太陽能發電和電池儲能系統。其中，太陽能發電項目佔了數量上的主導地位，共計207個；電池儲能系統則佔了95個。雖然文章提到了幾個大型項目，例如位於新墨西哥州的SunZia Wind South和SunZia Wind North（總容量達3,650 megawatts）以及俄亥俄州的Trumbull Energy Center（900 megawatts天然氣電廠），但作者指出，這些大型項目並不能代表美國陸地風能產業的復興趨勢，而更像是過去繁榮時期的回音。整體趨勢顯示，能源轉型正加速，太陽能和儲能技術是當前美國電力市場最主要的發展動力。",
    tags: ["美國電力市場", "太陽能發電", "電池儲能", "公用事業級", "US Energy Information Administration", "能源轉型"],
    title_en: "Analysis of US Power Generation Trends: New Plants Coming Online in H1 2026 Dominated by Solar and Battery Storage",
    summary_en: "This article analyzes data provided by the U.S. Energy Information Administration (EIA), reviewing a total of 368 new utility-scale power generation facilities that came online between Q1 and Q2 of 2026. The data indicates that the types of new facilities are primarily concentrated in utility-scale solar generation and battery storage systems. Specifically, solar generation projects accounted for the majority of the count, totaling 207; while battery storage systems accounted for 95. Although the article mentions several large projects, such as SunZia Wind South and SunZia Wind North in New Mexico (with a combined capacity of 3,650 megawatts) and the Trumbull Energy Center in Ohio (a 900-megawatt natural gas plant), the author points out that these large projects do not represent a revival trend for the US onshore wind industry, but rather seem like echoes of a past period of prosperity. The overall trend suggests that the energy transition is accelerating, with solar and storage technologies being the primary driving forces in the current US power market.",
    tags_en: ["US power market", "solar generation", "battery storage", "utility-scale", "US Energy Information Administration", "energy transition"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/science/2026/08/so-much-solar-digging-into-the-list-of-every-us-power-plant-that-went-online-this-year", lang: "EN" }
    ]
  },
  {
    id: "20260815-052",
    trackers: ["os"],
    category: "重點關注",
    title: "npm供應鏈蠕蟲 ChainDrop 攻擊：透過 tarball 傳播並植入開發環境，繞過傳統防禦",
    summary: "資安研究人員發現一種名為 ChainDrop 的新型 Shai-Hulud 蠕蟲，透過 npm 生態系統進行大規模供應鏈攻擊。該蠕蟲已感染數百個 npm 套件，這些套件每月被下載數十億次，目標是深度基礎設施依賴。ChainDrop 的威脅性在於其傳播機制極為隱蔽：它不依賴修改原始碼提交，而是透過 tarball 格式進行傳播。一旦觸發，它會掃描用戶工作區，竊取具有完整寫入權限的 npm token、雲端金鑰和密鑰，並將數據加密後傳輸給攻擊者。此外，它還會搜尋 GitHub 憑證，並將惡意配置程式碼直接提交到目標分支，使得開發者在打開受感染的 Git 分支時，會自動觸發背景任務，從而完成整個攻擊循環。由於 npm 廣泛整合於 CI/CD 流程，攻擊者可以利用自動化更新的途徑進行滲透。受影響的套件已從 npm 移除，建議開發者檢查未添加的 `.claude/settings.json` 和 `.vscode/tasks.json` 等配置檔，並重新評估 CI/CD 流程和受信任的發布工具，將所有來自儲存庫的配置內容視為可執行內容。",
    tags: ["npm", "供應鏈攻擊", "ChainDrop", "Shai-Hulud", "CI/CD", "tarball"],
    title_en: "npm Supply Chain Worm ChainDrop Attack: Spreading via Tarballs and Implanting Development Environments, Bypassing Traditional Defenses",
    summary_en: "Cybersecurity researchers have discovered a novel Shai-Hulud worm named ChainDrop, which is conducting large-scale supply chain attacks through the npm ecosystem. The worm has infected hundreds of npm packages, which are downloaded billions of times monthly, targeting deep infrastructure dependencies. ChainDrop's threat lies in its highly stealthy propagation mechanism: it does not rely on modifying source code commits but rather propagates via the tarball format. Once triggered, it scans the user's workspace, stealing npm tokens, cloud keys, and secrets with full write permissions, and then transmitting the encrypted data to the attacker. Furthermore, it searches for GitHub credentials and directly commits malicious configuration code to the target branch, causing background tasks to automatically trigger when the developer opens the infected Git branch, thereby completing the entire attack cycle. Since npm is widely integrated into CI/CD pipelines, attackers can exploit automated update paths for penetration. The affected packages have been removed from npm. Developers are advised to check configuration files such as `.claude/settings.json` and `.vscode/tasks.json` for unauthorized additions, and to re-evaluate CI/CD processes and trusted publishing tools, treating all configuration content originating from repositories as executable content.",
    tags_en: ["npm", "Supply Chain Attack", "ChainDrop", "Shai-Hulud", "CI/CD", "tarball"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/15/chaindrop-worm-crawls-into-npm-supply-chain-evades-standard-defenses/5287958", lang: "EN" }
    ]
  },
  {
    id: "20260815-053",
    trackers: ["os"],
    category: "重點關注",
    title: "Anthropic 宣布文本水標技術：強調其依賴於非關鍵詞彙的修改，以符合 EU AI Act",
    summary: "為符合歐盟《人工智慧法案》（EU AI Act），Anthropic 宣布將在其 AI 模型 Claude 的生成文本中實施「水標」（watermarking）機制。此技術的原理是透過影響模型在生成過程中的非關鍵詞彙選擇，來為文本注入一種可被偵測的統計特徵。這項技術源自 Google DeepMind 的 SynthID-Text 研究，其核心是修改「下一個 Token 採樣程序」，在文本分佈中植入微妙的、上下文特定的修改。Anthropic 聲稱，此水標機制僅應用於不影響文本意義的「低風險段落」，例如在描述天氣或一般情境的詞彙替換。公司內部測試顯示，水標對文本內容、創造力或可讀性沒有影響。然而，文章指出，此水標機制並非完美，若進行「徹底重寫」（complete rewrite）等程度的編輯，水標可能會被移除。Anthropic 亦強調，此機制不會增加模型的運行成本或速度，主要目的是展示其對法規的合規性努力。",
    tags: ["Anthropic", "Claude", "EU AI Act", "Watermarking", "LLM", "AI 倫理"],
    title_en: "Anthropic Announces Text Watermarking Technology: Emphasizing Reliance on Non-Critical Vocabulary Modifications to Comply with EU AI Act",
    summary_en: "To comply with the European Union's AI Act (EU AI Act), Anthropic announced it will implement a 'watermarking' mechanism in the generated text of its AI model, Claude. The principle of this technology is to inject a detectable statistical feature into the text by influencing the model's selection of non-critical vocabulary during the generation process. This technology draws from Google DeepMind's SynthID-Text research, which fundamentally modifies the 'next token sampling procedure' to embed subtle, context-specific alterations within the text distribution. Anthropic claims that this watermarking mechanism is only applied to 'low-risk passages' that do not affect the text's meaning, such as vocabulary substitutions when describing weather or general scenarios. Internal company testing showed that the watermarking has no impact on the text's content, creativity, or readability. However, the article notes that the watermarking mechanism is not perfect, and it may be removed if the text undergoes edits such as a 'complete rewrite.' Anthropic also emphasized that this mechanism will not increase the model's operational cost or speed, and its primary goal is to demonstrate its commitment to regulatory compliance.",
    tags_en: ["Anthropic", "Claude", "EU AI Act", "Watermarking", "LLM", "AI Ethics"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/15/anthropic-says-text-watermarking-scheme-relies-on-inconsequential-words/5288156", lang: "EN" }
    ]
  },
  {
    id: "20260815-054",
    trackers: ["security"],
    category: "產業動態",
    title: "서강대 통합 로그인系統遭外部攻擊：約18萬筆學生、教職員、校友個人資料外洩",
    summary: "서강대학교於11日遭遇外部攻擊，導致包含學號、員工編號、姓名、ID、所屬、電子郵件、手機號碼及加密的統一密碼等約18萬筆個人資訊外洩。學校確認此次事件為身分不明的外部攻擊，透過隨機密碼猜測攻擊（무작위 대입공격）導致外部未授權IP存取。學校已於14日偵測到事故並立即採取了封鎖攻擊IP、限制服務存取及網路隔離等緊急措施，並向個人資訊保護委員會和教育部等相關機構進行了通報。\n\n學校提醒，雖然未包含高識別資訊和敏感資訊，但強烈建議所有用戶立即更改學內入口網站『SAINT』的密碼。此外，學校也建議用戶警惕來源不明的電話、電子郵件或簡訊，並更改使用相同帳號資訊的其他服務密碼，以預防二次傷害。",
    tags: ["서강대", "個人資訊外洩", "外部攻擊", "SAINT", "密碼安全"],
    title_en: "Sogang University Integrated Login System Targeted by External Attack: Approximately 180,000 Records of Student, Staff, and Alumni Personal Data Leaked",
    summary_en: "Sogang University suffered an external attack on the 11th, resulting in the leakage of approximately 180,000 records of personal information, including student IDs, employee IDs, names, IDs, departments, email addresses, mobile phone numbers, and encrypted unified passwords. The university confirmed that the incident was an external attack by an unknown entity, which led to unauthorized access by external IPs through a brute-force attack. The university detected the incident on the 14th and immediately implemented emergency measures, such as blocking the attack IPs, restricting service access, and network isolation. It has also reported the incident to relevant authorities, including the Personal Information Protection Commission and the Ministry of Education.\n\nThe university reminds users that although highly identifying or sensitive information was not included, all users are strongly advised to immediately change their passwords for the campus portal, 'SAINT'. Furthermore, the university recommends that users remain vigilant against unknown phone calls, emails, or text messages, and change the passwords for other services that use the same account credentials to prevent secondary damage.",
    tags_en: ["Sogang University", "Personal Data Leakage", "External Attack", "SAINT", "Password Security"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145172&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260815-055",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "오리엔텀與softwareQ簽署合作備忘錄，共研金融領域量子運算應用",
    summary: "오리엔텀（Orientum）與加拿大量子軟體公司softwareQ簽署了業務合作備忘錄（MOU），旨在共同開發和驗證適用於金融、銀行和保險領域的量子運算算法及軟體工具鏈。雙方將以韓國首爾和加拿大溫哥華為據點，建立一個從技術可行性驗證、概念驗證（PoC）到原型開發的實質合作體系。\n\n合作領域涵蓋衍生性商品定價、投資組合優化與風險管理、用於銀行和保險的量子機器學習，以及量子電路與算法的提升。오리엔텀將提供金融領域的業務理解、實際應用案例和量子金融算法開發能力，包括其自研的用於衍生性商品定價、投資組合優化和風險分析的量子金融算法，以及名為Atom-Q的硬體抽象層。\n\nsoftwareQ則專精於量子軟體工程、量子編譯與電路優化、量子算法實現和模擬等專業技術。其核心解決方案包括量子編譯器staq、模擬庫Quantum++，以及用於在多種硬體後端執行量子算法的平台aqcess。雙方預計結合오리엔텀的金融算法與softwareQ的編譯模擬能力，加速將量子金融算法應用於實際的風險管理和衍生性商品定價工作負載，目標是讓量子軟體能夠在實驗室外穩定運行，產生實際影響。",
    tags: ["오리엔텀", "softwareQ", "量子運算", "金融科技", "MOU", "Quantum++", "staq"],
    title_en: "Orientum and softwareQ Sign Cooperation MOU to Jointly Develop Quantum Computing Applications for the Financial Sector",
    summary_en: "Orientum and softwareQ, a Canadian quantum software company, signed a Memorandum of Understanding (MOU) aimed at jointly developing and validating quantum computing algorithms and software toolchains for the financial, banking, and insurance sectors. The two parties will establish a substantial cooperative system, operating from bases in Seoul, South Korea, and Vancouver, Canada, covering everything from technical feasibility verification and Proof-of-Concept (PoC) to prototype development. The areas of cooperation include derivative pricing, portfolio optimization and risk management, quantum machine learning for banking and insurance, and the enhancement of quantum circuits and algorithms. Orientum will provide business understanding of the financial sector, practical application cases, and quantum financial algorithm development capabilities, including its proprietary quantum financial algorithms for derivative pricing, portfolio optimization, and risk analysis, as well as a hardware abstraction layer named Atom-Q. softwareQ specializes in professional technologies such as quantum software engineering, quantum compilation and circuit optimization, quantum algorithm implementation, and simulation. Its core solutions include the quantum compiler staq, the simulation library Quantum++, and the platform aqcess, which enables quantum algorithms to run on various hardware backends. The two parties anticipate combining Orientum's financial algorithms with softwareQ's compilation and simulation capabilities to accelerate the application of quantum financial algorithms to real-world risk management and derivative pricing workloads, with the goal of making quantum software stable and impactful outside of a laboratory setting.",
    tags_en: ["Orientum", "softwareQ", "Quantum Computing", "Fintech", "MOU", "Quantum++", "staq"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145171&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260815-056",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "英國犯罪紀錄處（ACRO）遭英國情報委員會（ICO）譴責：長期未修補CMS漏洞導致數千名敏感資料外洩風險",
    summary: "英國犯罪紀錄處（ACRO）因系統安全體系整體疏失，被英國情報委員會（ICO）正式處以譴責（Reprimand）。調查顯示，ACRO在2021年7月至2023年6月間遭受了三次系統入侵。攻擊者利用基於Kentico CMS的公共網站漏洞，而該系統自2019年9月後約四年時間內未進行安全修補。事故的主要原因被歸咎於ACRO、維護服務商（MSP）和網頁開發商之間，修補責任劃分不清。此外，儘管防毒軟體偵測到Mimikatz等資憑竊取工具的嘗試並發出警告，但組織內部缺乏有效的安全警報審核和升級流程，導致入侵跡象長期被忽略。在一次重大事件中，攻擊者曾在2022年8月至2023年3月間潛伏網站伺服器約七個月，並在2023年2月為約11,000名人的敏感資料進行了準備（Staging）。雖然ACRO的日誌保存不善，無法確認資料是否實際外洩（Exfiltration），但事件暴露了其安全管理和資訊透明度的嚴重缺陷。",
    tags: ["ACRO", "ICO", "Kentico CMS", "Mimikatz", "資料外洩", "資訊安全", "英國法規"],
    title_en: "UK's ACRO Reprimanded by ICO: Failure to Patch CMS Vulnerability Leads to Risk of Thousands of Sensitive Data Leakage",
    summary_en: "The UK's ACRO (Association of Chief Police Officers) was formally reprimanded by the Information Commissioner's Office (ICO) for systemic security negligence. Investigations revealed that ACRO suffered three system intrusions between July 2021 and June 2023. Attackers exploited public website vulnerabilities based on Kentico CMS, a system that remained unpatched for approximately four years after September 2019. The primary cause of the incident was attributed to unclear division of patching responsibilities among ACRO, its Managed Service Provider (MSP), and the web developer. Furthermore, although antivirus software detected attempts to steal credentials using tools like Mimikatz and issued warnings, the organization lacked effective security alert review and escalation processes, causing the signs of intrusion to be ignored for an extended period. In one major incident, attackers were able to dwell on the website server for approximately seven months between August 2022 and March 2023, and staged sensitive data belonging to approximately 11,000 individuals in February 2023. Although ACRO's poor log retention prevents confirmation of actual data exfiltration, the incident exposed severe deficiencies in its security management and information transparency.",
    tags_en: ["ACRO", "ICO", "Kentico CMS", "Mimikatz", "Data Leakage", "Information Security", "UK Regulations"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145168&kind=&sub_kind=", lang: "EN" }
    ]
  }
];
