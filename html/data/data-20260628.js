// data-20260628.js — 2026-06-28
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-28"] = [
  {
    id: "20260628-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6373-1：修補 OpenSSH 服務的潛在遠端執行漏洞",
    summary: "Debian 安全公告 DSA-6373-1 針對 OpenSSH 服務發布了安全修補。該漏洞允許攻擊者在未經授權的情況下，透過 OpenSSH 服務執行遠端程式碼。這類漏洞通常屬於嚴重的遠端程式碼執行（RCE）類型，可能導致系統完全被接管。修補建議是立即更新 Debian 系統的 OpenSSH 套件至修補版本。由於 OpenSSH 是許多伺服器和開發環境的關鍵元件，所有運行 OpenSSH 服務的系統都應將此修補作為高優先級的作業。建議系統管理員應檢查並限制 OpenSSH 的存取權限，並確保系統防火牆配置正確，以降低潛在的攻擊面。",
    tags: ["Debian", "OpenSSH", "DSA-6373-1", "RCE", "Linux 核心", "安全修補"],
    title_en: "Debian Releases DSA-6373-1: Patching Potential Remote Code Execution Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6373-1 has released a security patch for the OpenSSH service. This vulnerability allows an attacker to execute remote code without authorization via the OpenSSH service. Such vulnerabilities typically fall under the category of Remote Code Execution (RCE), which could potentially lead to complete system compromise. The recommended patch is to immediately update the OpenSSH package on Debian systems to the patched version. Since OpenSSH is a critical component for many servers and development environments, all systems running the OpenSSH service should treat this patch as a high-priority task. System administrators are advised to check and restrict OpenSSH access permissions, and ensure that system firewall configurations are correct, in order to reduce the potential attack surface.",
    tags_en: ["Debian", "OpenSSH", "DSA-6373-1", "RCE", "Linux Kernel", "Security Patch"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00284.html", lang: "EN" }
    ]
  },
  {
    id: "20260628-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6372-1：修補 OpenSSH 服務中的認證繞過漏洞",
    summary: "Debian 安全公告 DSA-6372-1 針對 OpenSSH 服務發布了安全更新，修補了一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在未經授權的情況下，透過特定的方式執行遠端命令。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但這類認證繞過漏洞通常被視為高風險，可能影響使用 OpenSSH 服務的伺服器和系統。建議所有使用 Debian 系統的用戶，應立即更新到包含此修補的 OpenSSH 版本，以防止被未經授權的遠端存取。修補的具體技術細節和受影響的 OpenSSH 版本，應參考 Debian 官方的安全公告頁面，並確保系統保持在最新狀態。",
    tags: ["Debian", "OpenSSH", "DSA-6372-1", "認證繞過", "Linux 核心元件", "安全更新"],
    title_en: "Debian Releases DSA-6372-1: Patching Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6372-1 has released a security update for the OpenSSH service, patching a potential authentication bypass vulnerability. This vulnerability could potentially allow an attacker to execute remote commands without authorization through specific methods. Although the original text does not provide specific CVSS scores or affected version ranges, such authentication bypass vulnerabilities are typically considered high risk and may impact servers and systems using the OpenSSH service. All users of Debian systems are advised to immediately update to the OpenSSH version containing this patch to prevent unauthorized remote access. For specific technical details of the patch and the affected OpenSSH versions, users should refer to the official Debian security advisory page and ensure their system remains up-to-date.",
    tags_en: ["Debian", "OpenSSH", "DSA-6372-1", "Authentication Bypass", "Linux Kernel Component", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00283.html", lang: "EN" }
    ]
  },
  {
    id: "20260628-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發進度：Kernel 7.2-rc1 預覽版發布，開發週期進入穩定階段",
    summary: "本文為 Linux 核心開發進度更新，提及 Kernel 7.2-rc1 預覽版（prepatch）的發布。文章指出，自發布以來已過兩週，且核心的合併窗口（merge window）已關閉。這代表開發週期正在進入一個相對穩定的階段。雖然原文未提供具體的漏洞細節或 CVSS 分數，但這類核心版本更新對於系統管理員和資安人員至關重要，因為它包含了最新的修補程式和功能改進。建議使用者密切關注 Linux 核心的官方發行公告，並及時升級到最新的穩定版本，以確保系統能修補潛在的漏洞並利用最新的安全功能。",
    tags: ["Linux 核心", "Kernel 7.2", "prepatch", "核心開發", "資安更新"],
    title_en: "Linux Kernel Development Progress: Kernel 7.2-rc1 Preview Released, Development Cycle Enters Stabilization Phase",
    summary_en: "This article provides an update on Linux kernel development progress, mentioning the release of the Kernel 7.2-rc1 preview (prepatch). It notes that two weeks have passed since the release, and the kernel's merge window has closed. This indicates that the development cycle is entering a relatively stable phase. Although the original text does not provide specific vulnerability details or CVSS scores, such kernel version updates are crucial for system administrators and cybersecurity personnel, as they contain the latest patches and feature improvements. Users are advised to closely monitor official Linux kernel release announcements and promptly upgrade to the latest stable version to ensure the system is patched against potential vulnerabilities and utilizes the newest security features.",
    tags_en: ["Linux Kernel", "Kernel 7.2", "prepatch", "Kernel Development", "Security Update"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1079891", lang: "EN" }
    ]
  },
  {
    id: "20260628-004",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2-rc1 正式發布：搭載 AMDGPU HDMI 2.1 FRL、AMD ISP4 等新功能，預計支援 Fedora 45 與 Ubuntu 26.10",
    summary: "Linux 核心版本 7.2-rc1 已發布，標誌著 Linux 7.2 的合併窗口關閉。此版本包含了多項重大功能更新與性能優化，包括 Cache Aware Scheduling、Intel 的 USB4STREAM 功能、修復 Linux 7.1 的 NTFS 驅動、移除 strncpy API，以及新增 ARCTIC 風扇控制器驅動和 AMD ISP4 驅動。此外，它也首次加入了 AMDGPU HDMI 2.1 FRL 的支援工作。Linux 7.2 核心規模超過 4300 萬行程式碼。此穩定版預計將為 Fedora 45 和 Ubuntu 26.10 等發行版提供核心支援。開發者應關注這些新的硬體支援和核心 API 的變更，以進行系統層級的升級與測試。",
    tags: ["Linux 7.2", "Linux 核心", "AMDGPU", "HDMI 2.1", "Fedora 45", "Ubuntu 26.10"],
    title_en: "Linux 7.2-rc1 Officially Released: Featuring New Functionality like AMDGPU HDMI 2.1 FRL and AMD ISP4, Expected to Support Fedora 45 and Ubuntu 26.10",
    summary_en: "The Linux kernel version 7.2-rc1 has been released, marking the closure of the merge window for Linux 7.2. This version includes multiple major feature updates and performance optimizations, including Cache Aware Scheduling, Intel's USB4STREAM functionality, fixes for the Linux 7.1 NTFS driver, the removal of the strncpy API, and the addition of ARCTIC fan controller and AMD ISP4 drivers. Furthermore, it introduces support for AMDGPU HDMI 2.1 FRL for the first time. The Linux 7.2 kernel codebase exceeds 43 million lines of code. This stable version is expected to provide kernel support for distributions such as Fedora 45 and Ubuntu 26.10. Developers should pay attention to these new hardware supports and kernel API changes when upgrading and testing system-level components.",
    tags_en: ["Linux 7.2", "Linux Kernel", "AMDGPU", "HDMI 2.1", "Fedora 45", "Ubuntu 26.10"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-rc1-Released", lang: "EN" }
    ]
  },
  {
    id: "20260628-005",
    trackers: ["os"],
    category: "Linux",
    title: "CachyOS June 2026 發行版：搭載性能優化與 Hyprland Noctalia 桌面選項",
    summary: "CachyOS 發布了 June 2026 版本，這是一個專為愛好者和遊戲玩家優化的 Arch Linux 發行版。本次更新著重於大幅提升系統性能。主要的技術優化包括：使用擴展的 PGO（Profile Guided Optimizations）來優化 Python 建置；整合了新的 GCC patch 以進一步提升性能；並修復了 OpenBLAS 套件中因 Phoronix 基準測試而出現的性能退化問題。此外，新版本還新增了 CachyOS Hyprland Noctalia 桌面選項，並將 GNOME System Monitor 替換為 Resources app，同時對 CachyOS-Welcome app 進行了多項改進。使用者可從 CachyOS.org 下載最新的 ISO 映像檔。",
    tags: ["CachyOS", "Arch Linux", "Linux", "PGO", "GCC", "Hyprland"],
    title_en: "CachyOS June 2026 Release: Featuring Performance Optimizations and Hyprland Noctalia Desktop Option",
    summary_en: "CachyOS has released the June 2026 version, an Arch Linux distribution optimized for enthusiasts and gamers. This update focuses on significantly boosting system performance. Key technical optimizations include: utilizing extended PGO (Profile Guided Optimizations) to optimize Python builds; integrating a new GCC patch to further enhance performance; and fixing a performance degradation issue in the OpenBLAS package that was identified during Phoronix benchmarking. Additionally, the new version introduces the CachyOS Hyprland Noctalia desktop option, replaces the GNOME System Monitor with a Resources app, and implements several improvements to the CachyOS-Welcome app. Users can download the latest ISO image from CachyOS.org.",
    tags_en: ["CachyOS", "Arch Linux", "Linux", "PGO", "GCC", "Hyprland"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/CachyOS-June-2026-Released", lang: "EN" }
    ]
  },
  {
    id: "20260628-006",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心預計引入 DRM 色彩格式屬性，AMD GPU 驅動程式率先支援",
    summary: "Linux 核心開發團隊正為 Linux 7.3 版本準備一項重大顯示功能：DRM (Direct Rendering Manager) 的「色彩格式」屬性。此新屬性允許使用者空間（user-space）透過顯示連接器，要求顯示驅動程式輸出特定的色彩格式，初期支援包括 AUTO、RGB、YUV 4:4:4、YUV 4:2:2 和 YUV 4:2:0 等。此功能歷經多年開發，目前已透過 drm-misc-next 整合，並首度由 AMDGPU 核心圖形驅動程式提供支援。Wayland 的 Weston 合成器已準備好使用此新屬性。除了 AMDGPU，開發者也已提出針對 Intel 和 Rockchip DRM 驅動程式的支援補丁，預計在 Linux 7.3 合併窗口前加入。此更新對於需要精確色彩管理和多格式輸出的應用程式至關重要。",
    tags: ["Linux 7.3", "DRM", "色彩格式", "AMDGPU", "Wayland", "Linux 核心"],
    title_en: "Linux 7.3 Kernel Expected to Introduce DRM Color Format Attribute, with AMD GPU Driver Providing Initial Support",
    summary_en: "The Linux kernel development team is preparing a major display feature for Linux 7.3: the 'color format' attribute for DRM (Direct Rendering Manager). This new attribute allows user-space to request specific color formats from the display driver via display connectors, with initial support including AUTO, RGB, YUV 4:4:4, YUV 4:2:2, and YUV 4:2:0. This feature has undergone years of development and is currently integrated via drm-misc-next, with initial support provided by the AMDGPU kernel graphics driver. The Weston compositor for Wayland is ready to utilize this new attribute. In addition to AMDGPU, developers have also submitted support patches for Intel and Rockchip DRM drivers, which are expected to be included before the Linux 7.3 merge window. This update is crucial for applications requiring precise color management and multi-format output.",
    tags_en: ["Linux 7.3", "DRM", "Color Format", "AMDGPU", "Wayland", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-DRM-Color-Format", lang: "EN" }
    ]
  },
  {
    id: "20260628-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心重大更新：移除 strncpy API、淘汰 i486 支援，並修補多個 LPE 漏洞",
    summary: "本期回顧涵蓋了 Linux 核心在 Q2 期間的重大變動與安全修補。首先，Linux 7.2 已正式移除 strncpy API，結束了長達六年的棄用過程。在硬體支援方面，Linux 7.1 預計將開始逐步淘汰並最終移除對 Intel 486 CPU 的支援。此外，核心持續修補了多個本地權限提升（LPE）漏洞，包括 ssh-keysign-pwn 和 Fragnesia，以應對如 Dirty Frag 等先前公開的漏洞。另有報告指出，Linux 7.0 核心版本在發布後，PostgreSQL 資料庫的吞吐量性能曾一度下降，建議使用者可能需要適應新的核心版本。整體而言，這些更新體現了核心的現代化趨勢，朝向移除過時的硬體支援和提高安全性。",
    tags: ["Linux 核心", "LPE", "i486", "strncpy", "Linux 7.0", "Dirty Frag"],
    title_en: "Major Linux Kernel Updates: Removal of strncpy API and Deprecation of i486 Support, Plus Multiple LPE Vulnerability Patches",
    summary_en: "This review covers major changes and security patches in the Linux kernel during Q2. First, Linux 7.2 has officially removed the strncpy API, concluding a deprecation process spanning six years. Regarding hardware support, Linux 7.1 is expected to begin gradually phasing out and eventually removing support for the Intel 486 CPU. Furthermore, the kernel has continuously patched multiple Local Privilege Escalation (LPE) vulnerabilities, including ssh-keysign-pwn and Fragnesia, to address previously disclosed vulnerabilities such as Dirty Frag. Another report noted that after the release of the Linux 7.0 kernel version, PostgreSQL database throughput performance temporarily decreased, suggesting that users may need to adapt to the new kernel version. Overall, these updates reflect the kernel's modernization trend, moving towards removing outdated hardware support and enhancing security.",
    tags_en: ["Linux Kernel", "LPE", "i486", "strncpy", "Linux 7.0", "Dirty Frag"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Kernel-Q2-2026", lang: "EN" }
    ]
  },
  {
    id: "20260628-008",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心程式碼規模突破 4300 萬行，7.2 版本持續擴展與優化",
    summary: "本文報導 Linux 核心程式碼庫的最新統計數據，指出隨著 Linux 7.2 版本合併窗口的結束，核心原始碼總行數已超過 4300 萬行。截至目前，Linux Git 樹的總行數達到 43,898,743 行，相較於 Linux 7.1 的 42,924,382 行，顯示核心持續快速增長。儘管核心正在移除舊的硬體驅動程式（如 i486），但 AMDGPU/AMDKFD 等關鍵驅動程式的程式碼量仍持續增加，目前單一 AMD 現代核心圖形驅動程式的程式碼量已達約 6,356,056 行。這代表 Linux 核心在持續整合新功能和優化，對於開發者和資安人員而言，需關注其龐大的程式碼基礎帶來的複雜性與潛在的維護挑戰。Linux 7.2-rc1 版本預計將於近期發布。",
    tags: ["Linux 核心", "Linux 7.2", "程式碼庫", "AMDGPU", "核心開發"],
    title_en: "Linux Kernel Codebase Exceeds 43 Million Lines, 7.2 Version Continues Expansion and Optimization",
    summary_en: "This article reports the latest statistics on the Linux kernel codebase, noting that with the closure of the Linux 7.2 merge window, the total lines of core source code have exceeded 43 million lines. As of now, the total lines in the Linux Git tree reach 43,898,743 lines, showing continuous rapid growth compared to the 42,924,382 lines in Linux 7.1. Although the core is removing old hardware drivers (such as i486), the code size for critical drivers like AMDGPU/AMDKFD continues to increase. Currently, the code size for a single AMD modern graphics driver has reached approximately 6,356,056 lines. This indicates that the Linux kernel is continuously integrating new features and optimizations, presenting complexity and potential maintenance challenges that developers and security personnel must pay attention to due to its massive codebase. The Linux 7.2-rc1 version is expected to be released soon.",
    tags_en: ["Linux Kernel", "Linux 7.2", "Codebase", "AMDGPU", "Kernel Development"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-43-Million-Lines", lang: "EN" }
    ]
  },
  {
    id: "20260628-009",
    trackers: ["os"],
    category: "Linux",
    title: "介紹 Nourish：一款基於 Vulkan 技術、支援無限滾動與平移的 Wayland 合成器",
    summary: "Nourish 是一款新型的 Wayland 合成器，旨在提供一個不受螢幕尺寸限制的 Linux 桌面體驗。它採用 Vulkan API 進行渲染，並具備「無限」縮放和平移功能，提供無限的工作空間。為了保持縮放的精準度和清晰度，Nourish 利用了 Wayland 的分數縮放協議（fractional scaling protocol）。該合成器在開源的 AMD 和 Intel GPU 驅動，以及官方 NVIDIA 驅動上進行了測試。在 Wayland 層面，Nourish 藉助使用 Rust 編寫的 y5 合成器，並整合了 Smithay、WGPU、Iced 等專案的程式碼。目前，Nourish 的二進位套件已可供 Fedora Linux 使用。這項開發代表了 Linux 桌面環境在圖形渲染和工作空間管理上的進步。",
    tags: ["Wayland", "Nourish", "Vulkan", "Linux 桌面", "y5", "Fedora Linux"],
    title_en: "Introducing Nourish: A Wayland Compositor Based on Vulkan Technology Supporting Infinite Scrolling and Panning",
    summary_en: "Nourish is a new Wayland compositor designed to provide a Linux desktop experience that is not limited by screen size. It uses the Vulkan API for rendering and features 'infinite' scaling and panning capabilities, offering an endless workspace. To maintain scaling precision and clarity, Nourish utilizes Wayland's fractional scaling protocol. The compositor has been tested on open-source AMD and Intel GPU drivers, as well as official NVIDIA drivers. At the Wayland layer, Nourish leverages the y5 compositor, which is written in Rust, and integrates code from projects such as Smithay, WGPU, and Iced. Currently, the binary package for Nourish is available for Fedora Linux. This development represents an advancement in graphic rendering and workspace management for the Linux desktop environment.",
    tags_en: ["Wayland", "Nourish", "Vulkan", "Linux Desktop", "y5", "Fedora Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Nourish-Wayland-Compositor", lang: "EN" }
    ]
  },
  {
    id: "20260628-010",
    trackers: ["os"],
    category: "Linux",
    title: "微軟發布 Azure Linux 4.0：基於 Fedora 43 的雲端專用、極簡化作業系統",
    summary: "微軟在 Build 2026 上發布了 Azure Linux 4.0，這是一個完全由微軟維護的開源 Linux 發行版。它基於 Fedora 43，並專為在 Azure 雲端環境運行工作負載而設計。與 Ubuntu 或 Fedora 等通用桌面發行版不同，Azure Linux 4.0 是一個極簡、純文字介面、專為伺服器和容器工作負載優化的系統，旨在最小化攻擊面。版本 4.0 的重大改變是，它不再從零組件維護，而是作為一系列聲明式覆蓋層（declarative overlays）建立在 Fedora 43 快照之上，所有差異都公開記錄。此外，它升級了套件管理器，從自建的 tdnf 改用更快速、更符合 Red Hat 生態系的 dnf5。技術堆疊包括 Linux 6.18 LTS 核心、glibc 2.42、systemd 258，並整合了支援後量子密碼學（如 CRYSTALS-Kyber）的 OpenSSL 3.5。該系統僅支援 Azure 雲端，不提供桌面環境，旨在提供一個可預測、高效能的雲端基礎設施。",
    tags: ["Azure Linux 4.0", "Microsoft", "Fedora 43", "Linux 核心", "dnf5", "雲端工作負載", "OpenSSL 3.5"],
    title_en: "Microsoft Releases Azure Linux 4.0: A Cloud-Native, Minimalist OS Based on Fedora 43",
    summary_en: "Microsoft announced Azure Linux 4.0 at Build 2026, an open-source Linux distribution maintained entirely by Microsoft. It is based on Fedora 43 and is designed specifically for running workloads in the Azure cloud environment. Unlike general-purpose desktop distributions like Ubuntu or Fedora, Azure Linux 4.0 is a minimalist, pure text-interface system optimized for server and container workloads, aiming to minimize the attack surface. A major change in version 4.0 is that it no longer maintains components from scratch, but is built as a series of declarative overlays on top of a Fedora 43 snapshot, with all differences publicly recorded. Furthermore, it upgraded the package manager, switching from the custom-built tdnf to dnf5, which is faster and more aligned with the Red Hat ecosystem. The technical stack includes the Linux 6.18 LTS kernel, glibc 2.42, systemd 258, and integrates OpenSSL 3.5, which supports post-quantum cryptography (such as CRYSTALS-Kyber). The system is exclusively supported for Azure cloud and does not provide a desktop environment, aiming to deliver a predictable, high-performance cloud infrastructure.",
    tags_en: ["Azure Linux 4.0", "Microsoft", "Fedora 43", "Linux Kernel", "dnf5", "Cloud Workloads", "OpenSSL 3.5"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/29/microsoft-called-linux-a-cancer-now-ships-its-own-free-distro-thats-nothing-like-ubuntu-or-fedora", lang: "EN" }
    ]
  },
  {
    id: "20260628-011",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 推出低延遲模式 (LLP)，提升啟動選單與系統介面反應速度",
    summary: "微軟透過 2026 年 6 月的選用更新 (KB5095093)，開始逐步向更多 PC 推播 Windows 11 的低延遲模式 (Low Latency Profile, LLP)。LLP 是一種硬體層級的 CPU 增強技術，旨在優化 Windows 介面元素（如啟動選單、通知中心、快速設定）的反應速度，讓使用者體驗更流暢。該技術透過在開啟系統元件時，短暫提高 CPU 利用率，但此增幅極為短暫（少於 3 秒），不會影響整體系統效能。目前 LLP 僅針對 OS 元素優化，尚未支援應用程式層面，預計後續會更新。編輯建議，對於配置較低階的 PC（例如具備 8GB RAM 的低階處理器），此功能能帶來顯著的性能提升，改善系統的卡頓感。若欲手動啟用，可使用第三方工具 ViveTool 執行特定指令，並重新啟動系統。",
    tags: ["Windows 11", "Low Latency Profile", "LLP", "KB5095093", "CPU 效能", "系統優化"],
    title_en: "Windows 11 introduces Low Latency Profile (LLP) to enhance Start Menu and system interface responsiveness",
    summary_en: "Microsoft is gradually rolling out Windows 11's Low Latency Profile (LLP) to more PCs via an optional update (KB5095093), starting in June 2026. LLP is a hardware-level CPU enhancement technology designed to optimize the responsiveness of Windows interface elements (such as the Start Menu, Notification Center, and Quick Settings), resulting in a smoother user experience. This technology temporarily increases CPU utilization when opening system components, but this increase is extremely brief (less than 3 seconds) and will not affect overall system performance. Currently, LLP only optimizes OS elements and does not support the application layer; subsequent updates are expected. Editors suggest that for PCs with lower configurations (e.g., low-end processors with 8GB RAM), this feature can provide a noticeable performance boost, improving the feeling of system stuttering. To manually enable it, users can use the third-party tool ViveTool to execute specific commands and restart the system.",
    tags_en: ["Windows 11", "Low Latency Profile", "LLP", "KB5095093", "CPU Performance", "System Optimization"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/28/windows-11s-low-latency-performance-boost-rolls-out-to-more-pcs-making-start-menu-notifications-load-faster", lang: "EN" }
    ]
  },
  {
    id: "20260628-012",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 檔案總管性能升級：Microsoft 推出更快速的啟動與介面優化",
    summary: "Microsoft 透過 2026 年 6 月的選用更新 (KB5095093 / Build 26200.8737)，開始逐步推出 Windows 11 檔案總管（File Explorer）的性能優化。本次更新的重點是提升啟動速度，並改善「Home」等現代化區域的流暢度，而非僅依賴背景預載（preloading）。具體優化包括：改善檔案總管的啟動速度、修復與掛載磁碟映像時的反應遲緩問題、優化地址欄的可靠性與建議顯示速度，以及修復了重新命名項目時選取文字的錯誤。此外，Microsoft 規劃了未來功能，包括讓右鍵（context）選單能即時載入所有項目，並將傳統的「屬性」視窗（Properties tab）升級為基於 WinUI 3 的現代化介面。這些修補旨在解決檔案總管長期以來性能不佳、介面過時等問題，使用者應留意透過系統更新獲取這些性能提升。",
    tags: ["Windows 11", "File Explorer", "KB5095093", "性能優化", "WinUI 3", "系統更新"],
    title_en: "Windows 11 File Explorer Performance Upgrade: Microsoft Rolls Out Faster Startup and Interface Optimizations",
    summary_en: "Microsoft is gradually rolling out performance optimizations for Windows 11 File Explorer through an optional update in June 2026 (KB5095093 / Build 26200.8737). The focus of this update is to improve startup speed and enhance the fluidity of modernized areas, such as the \"Home\" view, rather than solely relying on background preloading. Specific optimizations include: improving File Explorer startup speed, fixing sluggish response times when mounting and unmounting disk images, optimizing the reliability and suggestion display speed of the address bar, and fixing an error related to text selection when renaming items. Furthermore, Microsoft has planned future features, including enabling the context menu to load all items instantly, and upgrading the traditional \"Properties\" tab to a modernized interface based on WinUI 3. These fixes aim to address long-standing issues with File Explorer's poor performance and outdated interface. Users should monitor system updates to receive these performance enhancements.",
    tags_en: ["Windows 11", "File Explorer", "KB5095093", "Performance Optimization", "WinUI 3", "System Update"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/28/microsoft-begins-rolling-out-a-faster-file-explorer-on-windows-11-and-no-its-not-preloading", lang: "EN" }
    ]
  },
  {
    id: "20260628-013",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "高風險 Linux 權限提升漏洞 CVE-2026-46331 曝光：Root 權限可透過流量控制子系統利用",
    summary: "資安廠商 Threat Landscape 揭露一高風險的 Linux 本機權限提升漏洞 CVE-2026-46331。此漏洞存在於 Linux 核心的流量控制（traffic control, tc）子系統，具備 CVSS 7.3 分的嚴重度，允許本機使用者繞過多種安全控制，直接取得完整的 root 權限。漏洞的根本原因在於 `act_pedit` 動作內部的寫入時複製（COW）機制實作不當。當系統計算安全寫入範圍時，無法考慮多個分類金鑰新增的標頭偏移量，導致核心將資料寫入到安全邊界之外，造成越界寫入並毀損共享頁面快取。受影響的 Linux 版本包括 Red Hat Enterprise Linux 8 至 10 版，以及搭配 5.18 版至 7.1-rc6 版核心的 Ubuntu、Debian 等。攻擊者已公開 PoC 程式，利用此漏洞可將記憶體越界寫入轉化為 root shell。修復建議是升級至 Linux 核心 7.1-rc7 版或更高版本，並應注意傳統檔案完整性監控（FIM）無法偵測此類記憶體層面的攻擊。",
    tags: ["CVE-2026-46331", "Linux 核心", "本機權限提升", "流量控制", "Root 權限", "COW"],
    title_en: "High-Risk Linux Privilege Escalation Vulnerability CVE-2026-46331 Exposed: Root Privilege Obtainable via Traffic Control Subsystem",
    summary_en: "Security vendor Threat Landscape has disclosed a high-risk Linux local privilege escalation vulnerability, CVE-2026-46331. This vulnerability resides in the Linux kernel's traffic control (tc) subsystem, possessing a CVSS score of 7.3. It allows local users to bypass multiple security controls and directly obtain full root privileges. The root cause of the vulnerability is improper implementation of the Copy-On-Write (COW) mechanism within the `act_pedit` operation. When the system calculates the safe write range, it fails to account for the header offset added by multiple class keys, leading the kernel to write data outside the safe boundary. This results in an out-of-bounds write and corruption of the shared page cache. Affected Linux versions include Red Hat Enterprise Linux 8 through 10, as well as Ubuntu and Debian running kernels from version 5.18 up to 7.1-rc6. Attackers have publicly released a PoC program, which can convert this memory out-of-bounds write into a root shell. The recommended fix is to upgrade to Linux kernel version 7.1-rc7 or higher. Furthermore, users should note that traditional File Integrity Monitoring (FIM) may not detect this type of memory-level attack.",
    tags_en: ["CVE-2026-46331", "Linux Kernel", "Local Privilege Escalation", "Traffic Control", "Root Privilege", "COW"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/176912", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260628-014",
    trackers: ["os"],
    category: "Apple",
    title: "Apple Mac Studio 晶片升級預告：M5 Ultra 預計今年推出，未來規劃至 M7 系列",
    summary: "本文根據科技媒體報導，預測 Apple 將在今年晚些時候推出更新的 Mac Studio 機型，搭載 M5 Max 和 M5 Ultra 晶片。目前市售的 Mac Studio 搭載 M4 Max 和 M3 Ultra，因此晶片升級是主要的產品更新點。此外，報導指出除了今年的 M5 升級外，Apple 的產品規劃還涵蓋了更遠期的迭代，例如預計在 2028 年左右可能會推出搭載 M7 系列晶片的 Mac Studio，顯示 Apple 在 Mac 產品線的晶片更新週期與產品規劃。",
    tags: ["Apple", "Mac Studio", "M5 Ultra", "M7", "晶片升級", "產品規劃"],
    title_en: "Apple Mac Studio Chip Upgrade Preview: M5 Ultra Expected This Year, Future Planning Extends to M7 Series",
    summary_en: "According to tech media reports, Apple is predicted to launch updated Mac Studio models later this year, equipped with M5 Max and M5 Ultra chips. Since currently available Mac Studios feature M4 Max and M3 Ultra, the chip upgrade is the primary product update point. Furthermore, the reports indicate that beyond this year's M5 upgrade, Apple's product planning includes longer-term iterations, such as the potential launch of Mac Studios featuring the M7 series chips around 2028, illustrating Apple's chip update cycle and product roadmap for the Mac line.",
    tags_en: ["Apple", "Mac Studio", "M5 Ultra", "M7", "Chip Upgrade", "Product Planning"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/28/m7-ultra-mac-studio-coming-in-2028-after-m5-ultra-model-later-this-year", lang: "EN" }
    ]
  },
  {
    id: "20260628-015",
    trackers: ["os"],
    category: "重點關注",
    title: "Vim 介面升級：透過延遲重繪處理，大幅提升 GTK3 在 Wayland 環境下的效能",
    summary: "本篇報導指出 Vim 編輯器在 GTK3 工具包介面搭配 Wayland 顯示環境下，將透過一次程式碼修補（pull request）大幅提升效能。開發者 Dezza 引入了「延遲髒污重繪處理」（deferred dirty redraw handling）機制，重構了 Vim GTK3 Wayland 後端處理重繪流程的方式。實務上，這項改進能讓滾動操作更流暢、CPU 使用率顯著降低，特別是在連續按鍵輸入或滾動（如 PgUp/Ctrl+B）時，能避免過度觸發微型重繪（micro-redraws），從而提升整體使用者體驗。目前此修補尚未正式合併，但被視為 GTK3 在 Wayland 上的重大效能里程碑。使用者應關注 Vim 官方的開發進度，以獲取此效能優化。",
    tags: ["Vim", "GTK3", "Wayland", "效能優化", "使用者介面"],
    title_en: "Vim Interface Upgrade: Significantly Enhancing GTK3 Performance in Wayland via Deferred Redraw Handling",
    summary_en: "This report highlights a significant performance enhancement for the Vim editor's GTK3 toolkit interface when running in a Wayland display environment. Developer Dezza introduced a \"deferred dirty redraw handling\" mechanism, refactoring how the Vim GTK3 Wayland backend processes redraw cycles. Practically, this improvement results in smoother scrolling and a noticeable reduction in CPU usage, especially during continuous key input or scrolling (such as PgUp/Ctrl+B). By preventing excessive micro-redraws, the overall user experience is enhanced. Although this patch has not yet been formally merged, it is considered a major performance milestone for GTK3 on Wayland. Users should monitor Vim's official development progress to obtain this performance optimization.",
    tags_en: ["Vim", "GTK3", "Wayland", "Performance Optimization", "User Interface"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Vim-GTK3-Wayland-Faster", lang: "EN" }
    ]
  },
  {
    id: "20260628-016",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft Edge在Mac上的優勢與發展：從性能、生態整合到去綁定帳號的趨勢分析",
    summary: "本文分析了Microsoft Edge在Mac用戶群體中的使用熱潮，指出Edge在性能、資源管理和企業整合方面的優勢。用戶普遍讚揚Edge具備輕量化、RAM管理高效，甚至被認為比Chrome更快速。在企業和政府環境中，Edge因其與Microsoft 365的深度整合，以及某些內部系統對特定憑證的要求，成為不可或缺的選擇。此外，Edge在Chromium項目中的大量貢獻，使其功能不斷豐富，並在垂直分頁、睡眠分頁等功能上領先。為改善用戶體驗，Microsoft正逐步移除產品的帳號鎖定機制，Edge甚至將支援Google帳號登入，這極大地提升了其跨平台和跨設備的實用性。儘管Edge在功能移除（如Collections和Sidebar）和AI介面設計上受到批評，但其持續的優化和生態整合使其在Mac市場的地位穩固。",
    tags: ["Microsoft Edge", "Mac", "Chromium", "跨平台", "性能優化", "生態整合"],
    title_en: "Microsoft Edge's Advantages and Development on Mac: An Analysis from Performance, Ecosystem Integration, to Decoupling Account Dependency Trends",
    summary_en: "This article analyzes the growing adoption of Microsoft Edge among Mac users, highlighting Edge's advantages in performance, resource management, and enterprise integration. Users frequently praise Edge for its lightweight nature and efficient RAM management, even considering it faster than Chrome. In enterprise and government environments, Edge is an indispensable choice due to its deep integration with Microsoft 365 and the requirements of certain internal systems for specific credentials. Furthermore, Edge's substantial contributions to the Chromium project continuously enrich its features, making it a leader in functions such as vertical tabs and sleeping tabs. To improve the user experience, Microsoft is gradually removing product account lock mechanisms; Edge even supports Google account login, which greatly enhances its cross-platform and cross-device utility. Although Edge has faced criticism regarding feature removals (such as Collections and Sidebar) and AI interface design, its continuous optimization and ecosystem integration solidify its position in the Mac market.",
    tags_en: ["Microsoft Edge", "Mac", "Chromium", "Cross-platform", "Performance Optimization", "Ecosystem Integration"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/28/microsoft-edge-claps-back-at-users-mocking-mac-usage-calls-itself-the-best-browser", lang: "EN" }
    ]
  }
];
