// data-20260927.js — 2026-09-27
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-27"] = [
  {
    id: "20260927-13643",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6522-1：修補 OpenSSH 服務中的潛在漏洞",
    summary: "Debian 發布了安全公告 DSA-6522-1，修補了 OpenSSH 服務中發現的一個潛在漏洞。此漏洞可能影響使用特定版本的 OpenSSH 服務的系統。雖然原文未提供詳細的技術細節或 CVSS 分數，但此類修補通常針對遠端執行或資訊洩露的風險。建議所有使用 Debian 系統的用戶，特別是那些透過 OpenSSH 服務進行遠端連線的用戶，應立即更新系統至包含修補的最新版本，以確保系統的安全性。用戶應遵循 Debian 官方的修補指引，執行系統更新指令，以消除潛在的攻擊面。本公告的修補旨在強化 OpenSSH 的安全性，保護用戶的遠端存取權限。",
    tags: ["Debian", "OpenSSH", "DSA-6522-1", "Linux 核心", "安全更新"],
    title_en: "Debian Issues Security Advisory DSA-6522-1: Patching Potential Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6522-1, patching a potential vulnerability discovered in the OpenSSH service. This vulnerability may affect systems running specific versions of the OpenSSH service. Although the original text does not provide detailed technical specifics or a CVSS score, such patches typically address risks related to remote execution or information leakage. All users of Debian systems, especially those who use the OpenSSH service for remote connections, are advised to immediately update their systems to the latest patched version to ensure system security. Users should follow Debian's official patching guidelines and execute system update commands to eliminate potential attack vectors. The patch in this advisory aims to strengthen OpenSSH's security, protecting users' remote access privileges.",
    tags_en: ["Debian", "OpenSSH", "DSA-6522-1", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00435.html", lang: "EN" }
    ]
  },
  {
    id: "20260927-13644",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6521-1：修補 OpenSSH 服務中的潛在漏洞",
    summary: "Debian 發布了安全公告 DSA-6521-1，修補了 OpenSSH 服務中發現的潛在安全漏洞。此漏洞可能影響使用特定版本 OpenSSH 的系統。雖然原文未提供詳細的技術細節或 CVSS 分數，但此類修補通常針對遠端執行或資訊洩漏的風險。建議所有使用 Debian 系統的用戶，特別是那些依賴 OpenSSH 服務的伺服器，應立即更新到包含修補的 OpenSSH 版本，以確保系統的安全性。用戶應透過標準的系統更新機制（如 apt update/upgrade）來應用這些安全修補。本公告的修補是針對核心元件的安全性強化，旨在防止未經授權的存取或惡意操作。",
    tags: ["Debian", "OpenSSH", "DSA-6521-1", "Linux 核心", "安全更新"],
    title_en: "Debian Issues Security Advisory DSA-6521-1: Patching Potential Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6521-1, patching a potential vulnerability discovered in the OpenSSH service. This vulnerability may affect systems running specific versions of OpenSSH. Although the original text does not provide detailed technical specifications or CVSS scores, such patches typically address risks related to remote execution or information leakage. All users of Debian systems, especially those running servers that rely on the OpenSSH service, are advised to immediately update to the patched OpenSSH version to ensure system security. Users should apply these security patches using standard system update mechanisms (such as apt update/upgrade). This advisory's patch strengthens the security of a core component, aiming to prevent unauthorized access or malicious operations.",
    tags_en: ["Debian", "OpenSSH", "DSA-6521-1", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00434.html", lang: "EN" }
    ]
  },
  {
    id: "20260927-13645",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6520-1 相關漏洞，強化系統安全性",
    summary: "Debian 專案發布安全公告，修補一個與 DSA-6520-1 相關的漏洞。此漏洞的修補旨在提升系統的整體安全性，特別是針對核心元件的潛在風險。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但該公告屬於 Debian 安全公告（DSA），表明這是一個需要系統管理員關注的系統層級安全問題。建議所有使用 Debian 系統的用戶應立即參考官方公告，並執行系統更新，以確保系統能夠修補所有已知的安全漏洞，從而避免潛在的攻擊風險。修補建議是透過標準的系統更新機制（如 apt update/upgrade）來完成。",
    tags: ["Debian", "DSA-6520-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6520-1 Vulnerability to Enhance System Security",
    summary_en: "The Debian project has released a security advisory to patch a vulnerability related to DSA-6520-1. This patch aims to enhance the overall system security, particularly addressing potential risks within core components. Although the original advisory does not provide specific CVSS scores or affected version ranges, the announcement is classified as a Debian Security Advisory (DSA), indicating a system-level security issue that system administrators should pay attention to. All users running Debian systems are advised to immediately refer to the official advisory and perform a system update to ensure all known security vulnerabilities are patched, thereby mitigating potential attack risks. The recommended patch method is through standard system update mechanisms (such as apt update/upgrade).",
    tags_en: ["Debian", "DSA-6520-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00433.html", lang: "EN" }
    ]
  },
  {
    id: "20260927-13660",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發更新：prepatch 7.3-rc5 版本內容分析",
    summary: "本文為對 Linux 核心開發進度的觀察與分析，討論了 prepatch 7.3-rc5 版本。文章指出，儘管差異統計（diffstat）顯示了大量的程式碼變動，但作者認為這些變動並未呈現出明顯的、令人擔憂的模式。整體而言，作者認為這些更新屬於「老生常談」的性質，沒有特別令人警惕的重大安全或架構變革。對於開發者和資安人員而言，應持續關注核心的穩定性與功能增強，但目前從這次的變動來看，風險評估屬於低度警示。",
    tags: ["Linux 核心", "prepatch", "Linux Kernel", "核心開發", "安全公告"],
    title_en: "Linux Kernel Development Update: Analysis of prepatch 7.3-rc5 Version Contents",
    summary_en: "This article provides an observation and analysis of the Linux kernel development progress, focusing on the prepatch 7.3-rc5 version. The article notes that although the diffstat shows a large volume of code changes, the author believes these changes do not exhibit any obvious or concerning patterns. Overall, the author views these updates as being of a 'routine' nature, lacking any major security or architectural changes that warrant special attention. For developers and cybersecurity professionals, continuous attention should be paid to the kernel's stability and functional enhancements, but based on these changes, the risk assessment is currently low.",
    tags_en: ["Linux Kernel", "prepatch", "Linux Kernel", "Kernel Development", "Security Advisory"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1096959", lang: "EN" }
    ]
  },
  {
    id: "20260927-13683",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc5 測試版本發布：核心持續修補排程、硬體支援與網路功能",
    summary: "本次發布的是 Linux 7.3-rc5 測試候選版本，旨在為預計於 10 月 18 日發布的穩定版 Linux 7.3 核心做準備。Linux 核心開發持續快速，主要驅動力來自 AI/LLM 代理對近 4100 萬行程式碼庫的持續掃描，以及新硬體和設備的不斷湧入。本次修補內容涵蓋了更多快取感知排程（Cache Aware Scheduling）的修復、對新型滑鼠及其他 HID 設備的支援，並包含多項核心圖形驅動程式的修復。Linus Torvalds 指出，本次版本包含大量架構修復（特別是與 kvm 相關）、核心排程器、eBPF 以及網路相關的修補。開發者應持續進行測試，以確保系統穩定性，特別是針對排程器、核心檔案系統（vfs）和網路堆疊的改動。Linux 7.3 預計將為 Ubuntu 26.10 等秋季發布的 Linux 發行版提供支援。",
    tags: ["Linux 7.3", "Linux 核心", "Cache Aware Scheduling", "kvm", "eBPF", "Ubuntu 26.10"],
    title_en: "Linux 7.3-rc5 Test Release Issued: Core Scheduling, Hardware Support, and Networking Features",
    summary_en: "This release is the Linux 7.3-rc5 test candidate, designed to prepare for the stable Linux 7.3 kernel scheduled for release on October 18. Linux kernel development continues at a rapid pace, driven primarily by AI/LLM agents continuously scanning a codebase of nearly 41 million lines, and the constant influx of new hardware and devices. This patch includes fixes for more Cache Aware Scheduling, support for new mice and other HID devices, and multiple fixes for core graphics drivers. Linus Torvalds noted that this version contains numerous architectural fixes (especially related to kvm), core scheduler, eBPF, and networking-related patches. Developers should continue testing to ensure system stability, particularly regarding changes to the scheduler, virtual file system (vfs), and network stack. Linux 7.3 is expected to provide support for autumn releases of Linux distributions, such as Ubuntu 26.10.",
    tags_en: ["Linux 7.3", "Linux Kernel", "Cache Aware Scheduling", "kvm", "eBPF", "Ubuntu 26.10"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc5-Released", lang: "EN" }
    ]
  },
  {
    id: "20260927-13684",
    trackers: ["os"],
    category: "Linux",
    title: "Budgie 桌面環境 10.10.3 版本發布：新增「最愛」功能與 Labwc 整合改善",
    summary: "開源桌面環境 Budgie 發布了 10.10.3 版本。本次點版本的主要更新是為 Budgie Menu 增加了「最愛」（Favorites）區域，使用戶能夠將應用程式加入此區域，提升啟動效率。此外，10.10.3 版本大幅改善了與 Labwc Wayland compositor 的橋接介面（Labwc bridge），提升了鍵盤快捷鍵、多媒體/啟動器按鍵處理和整體穩定性。其他重要功能包括新增了指定主螢幕的能力，並允許使用者在桌面任何位置放置桌面圖示。該版本也加入了對 oo7 Secret Service 的支援。使用者可從 GitHub 下載此版本，更多詳情請參考 BUddiesofBudgieorg。",
    tags: ["Budgie", "10.10.3", "Linux", "Wayland", "Labwc", "桌面環境"],
    title_en: "Budgie Desktop Environment 10.10.3 Released: Adds 'Favorites' Feature and Improves Labwc Integration",
    summary_en: "The open-source desktop environment Budgie has released version 10.10.3. The main update in this point release is the addition of a 'Favorites' area to the Budgie Menu, allowing users to add applications to this area to improve launch efficiency. Furthermore, version 10.10.3 significantly improves the bridge interface with the Labwc Wayland compositor, enhancing keyboard shortcut handling, media/launcher button processing, and overall stability. Other notable features include the ability to specify a primary screen and allowing users to place desktop icons anywhere on the desktop. This version also adds support for oo7 Secret Service. Users can download this version from GitHub, and more details can be found at BUddiesofBudgieorg.",
    tags_en: ["Budgie", "10.10.3", "Linux", "Wayland", "Labwc", "Desktop Environment"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Budgie-10.10.3-Released", lang: "EN" }
    ]
  },
  {
    id: "20260927-13685",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：LZ4 壓縮程式碼進行重同步，大幅提升效能與穩定性",
    summary: "本次更新針對 Linux 核心內建的 LZ4 壓縮程式碼進行全面重構與同步。目前核心中的 LZ4 程式碼版本已是自 2017~2018 年的獨立分支（fork），未能跟上上游的最新進展。透過這組修補程式，開發者能夠將最新的 LZ4 上游原始碼直接、未經修改地整合到 Linux 核心樹中，確保程式碼的正確維護（vendored）。實務測試顯示，這次的清理與同步帶來的效能提升非常顯著。例如，使用 LZ4 的 EROFS 只讀檔案系統，在 4K 叢集下可提升約 11% 的吞吐量，在 64K 叢集下甚至可提升高達 14% 的讀取吞吐量。其他核心 LZ4 基準測試亦顯示最高可達 21% 的性能增益，大幅改善了系統的壓縮與解壓縮效率。",
    tags: ["Linux 核心", "LZ4", "壓縮", "性能優化", "EROFs", "Michal Wilczynski"],
    title_en: "Linux Kernel Update: Resyncing LZ4 Compression Code for Significant Performance and Stability Boost",
    summary_en: "This update involves a comprehensive refactoring and synchronization of the LZ4 compression code built into the Linux kernel. The current LZ4 code within the kernel is based on an independent branch (fork) from 2017-2018, failing to keep pace with the latest upstream developments. With this set of patches, developers can directly and unmodified integrate the latest LZ4 upstream source code into the Linux kernel tree, ensuring proper code maintenance (vendored). Practical tests show that the performance gains from this cleanup and synchronization are very significant. For example, using the LZ4-enabled EROFS read-only file system, throughput can increase by approximately 11% at a 4K cluster size and up to 14% read throughput at a 64K cluster size. Other core LZ4 benchmarks also show performance gains of up to 21%, significantly improving the system's compression and decompression efficiency.",
    tags_en: ["Linux Kernel", "LZ4", "Compression", "Performance Optimization", "EROFs", "Michal Wilczynski"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-LZ4-Clean-Resync", lang: "EN" }
    ]
  },
  {
    id: "20260927-13686",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 預計推出記憶體熱插拔優化：大幅提升虛擬機與 CXL 擴充效率",
    summary: "Intel 宣布針對 Linux 核心的記憶體熱插拔（memory hotplugging）進行重大效能優化。此優化特別適用於需要擴充虛擬機（VM）記憶體或在 CXL（Compute Express Link）環境中增加系統記憶體的場景。優化工作由 Intel 的 Yuan Liu 領導，核心改動著重於優化「區域連續性檢查」（zone contiguous checks），避免對整個區域進行逐頁區塊掃描。這些補丁已加入 mm/core.git 的 \"for-next\" 分支，預計將在十月的 Linux 7.4 合併窗口提交。測試結果顯示，記憶體熱插拔對於虛擬機的耗時可減少高達 81%，而記憶體熱拔除（hot unplugging）的耗時可減少高達 75%。此外，Samsung 的測試也發現了透過 CXL 熱插拔記憶體時的顯著效能提升，預計這些優化將為處理記憶體熱（去）插拔的系統帶來顯著加速。",
    tags: ["Linux 7.4", "記憶體熱插拔", "Hotplugging", "CXL", "Intel", "Linux 核心"],
    title_en: "Linux 7.4 Expected to Launch Memory Hotplug Optimization: Significant Boost to VM and CXL Expansion Efficiency",
    summary_en: "Intel has announced major performance optimizations for memory hotplugging in the Linux kernel. This optimization is particularly relevant for scenarios requiring the expansion of Virtual Machine (VM) memory or the addition of system memory in a CXL (Compute Express Link) environment. The optimization effort, led by Intel's Yuan Liu, focuses on refining 'zone contiguous checks' to avoid scanning entire zones page by page. These patches have been added to the mm/core.git \"for-next\" branch and are expected to be submitted during the Linux 7.4 merge window in October. Testing results show that memory hotplugging time for VMs can be reduced by up to 81%, and memory hot unplugging time can be reduced by up to 75%. Furthermore, Samsung's testing revealed significant performance improvements when hotplugging memory via CXL, suggesting these optimizations will bring substantial acceleration to systems handling memory hot (un)plugging.",
    tags_en: ["Linux 7.4", "Memory Hotplugging", "Hotplugging", "CXL", "Intel", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-Faster-RAM-Hotplug", lang: "EN" }
    ]
  },
  {
    id: "20260927-13687",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心更新：支援 Lenovo ThinkPad X1 Carbon Gen 14 的第二 MIPI IR 攝影機",
    summary: "本文介紹了針對 Lenovo ThinkPad X1 Carbon Gen 14（搭載 Intel Core Ultra Series 3",
    tags: ["Linux", "ThinkPad X1 Carbon Gen 14", "MIPI IR", "Kernel", "Fedora"],
    title_en: "Linux Kernel Update: Support for Second MIPI IR Camera on Lenovo ThinkPad X1 Carbon Gen 14",
    summary_en: "This article introduces support for the second MIPI IR camera on the Lenovo ThinkPad X1 Carbon Gen 14 (equipped with Intel Core Ultra Series 3)",
    tags_en: ["Linux", "ThinkPad X1 Carbon Gen 14", "MIPI IR", "Kernel", "Fedora"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-X1-Carbon-G14-MIPI-Cam", lang: "EN" }
    ]
  },
  {
    id: "20260927-13688",
    trackers: ["os"],
    category: "Linux",
    title: "LINBIT 提交新修補程式系列，推動 DRBD 9 功能支援進入 Linux 核心主線",
    summary: "Distributed Replicated Block Device (DRBD) 是一種透過核心驅動程式和使用者空間軟體，在多個主機系統間鏡像區塊設備的功能。它廣泛應用於雲端運算和高可用性叢集等場景。LINBIT 近期持續改進其獨立於核心的 DRBD 核心驅動程式，而上游程式碼進展緩慢。本週提交的修補程式系列是為準備將現有的針對 DRBD 8.4 的核心程式碼，更新至 DRBD 9 的狀態。這些準備性變更主要涉及程式碼重構，以更好地與獨立於核心的程式碼組織對齊，並提高各種限制以匹配 DRBD 9 的值。DRBD 9 相較於 DRBD 8，增加了多達 32 個節點的複製支援、網路負載平衡、更快的 I/O 效能、內建法定人數（quorum）管理等重大增強。這些準備修補程式已提交至 LKML 進行審查，預計將加速 DRBD 9 功能進入 Linux 核心主線。",
    tags: ["LINBIT", "DRBD", "Linux 核心", "高可用性", "叢集", "LKML"],
    title_en: "LINBIT Submits New Patch Series, Accelerating DRBD 9 Feature Support into Linux Kernel Mainline",
    summary_en: "Distributed Replicated Block Device (DRBD) is a feature that mirrors block devices across multiple host systems using a kernel driver and user-space software. It is widely used in scenarios such as cloud computing and high-availability clusters. LINBIT has recently been continuously improving its out-of-kernel DRBD core driver, while upstream code progress has been slow. The patch series submitted this week is designed to prepare the existing kernel code for DRBD 8.4 to be updated to the state of DRBD 9. These preparatory changes primarily involve code refactoring to better align with the out-of-kernel code organization, and increasing various limits to match the values of DRBD 9. Compared to DRBD 8, DRBD 9 includes major enhancements such as replication support for up to 32 nodes, network load balancing, faster I/O performance, and built-in quorum management. These preparatory patches have been submitted to LKML for review, which is expected to accelerate the integration of DRBD 9 features into the Linux kernel mainline.",
    tags_en: ["LINBIT", "DRBD", "Linux Kernel", "High Availability", "Clustering", "LKML"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Patches-Toward-DRBD-9", lang: "EN" }
    ]
  },
  {
    id: "20260927-13689",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 預計加入 V3D GPU 改善重置支援，提升 Raspberry Pi 穩定性",
    summary: "本次更新針對 Broadcom V3D GPU 核心硬體區塊，透過優化 GPU 重置機制，為 Raspberry Pi 板卡及其他相關 Broadcom 硬體提供更可靠的 GPU 崩潰恢復體驗。原先的 GPU 崩潰恢復需要進行整個電源循環（power-cycling），流程複雜且依賴私有參考計數器（private refcount）。本次修補將使 V3D 能夠在不進行電源循環的情況下完成重置。具體技術改動包括讓 `vc4` 驅動程式使用 BCM2835 PM 區塊新增的重置線（reset line），取代原有的複雜參考計數機制。此功能預計將在 Linux 7.4 的合併窗口（merge window）中納入，目標是在今年底前發布穩定版本。這對於依賴 GPU 的嵌入式系統和開發者至關重要，能大幅提升系統的穩定性和恢復能力。",
    tags: ["Linux 7.4", "Raspberry Pi", "Broadcom", "V3D", "GPU", "vc4"],
    title_en: "Linux 7.4 Expected to Include V3D GPU Improvements for Reset Support, Enhancing Raspberry Pi Stability",
    summary_en: "This update targets the Broadcom V3D GPU core hardware block. By optimizing the GPU reset mechanism, it provides a more reliable GPU crash recovery experience for Raspberry Pi boards and other related Broadcom hardware. Previously, GPU crash recovery required a full power cycle, a complex process dependent on a private reference counter. This patch will allow V3D to complete a reset without requiring a power cycle. Specific technical changes include enabling the `vc4` driver to utilize a new reset line added to the BCM2835 PM block, replacing the original complex reference counting mechanism. This feature is expected to be included in the Linux 7.4 merge window, with a stable release targeted before the end of this year. This is crucial for embedded systems and developers relying on the GPU, as it significantly improves system stability and recovery capability.",
    tags_en: ["Linux 7.4", "Raspberry Pi", "Broadcom", "V3D", "GPU", "vc4"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-Better-RPI-GPU-Reset", lang: "EN" }
    ]
  },
  {
    id: "20260927-13756",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 即將推出：微軟採用相同核心進行年度更新，降低升級風險",
    summary: "微軟預計將在近期推出 Windows 11 26H2 年度功能更新。此版本基於與 24H2 和 25H2 相同的核心平台，代號為 “Germanium”，因此升級過程風險較低，且可快速完成。對於 IT 管理員而言，微軟已向企業釋出 26H2 的評估 ISO，讓企業能提前測試應用程式和驅動程式的相容性。此舉顯示正式發布即將到來。文章指出，微軟採取這種「相同服務分支」的策略，可以在不進行重大平台升級的情況下，加入新功能，從而降低了過去版本（如 23H2 到 24H2）帶來的兼容性問題。使用者從 24H2 或 25H2 升級到 26H2，只需幾分鐘，且底層平台保持一致。建議使用者留意微軟的正式公告，並準備好進行系統升級，以確保系統能順利獲得最新的功能和修補。",
    tags: ["Windows 11", "26H2", "Microsoft", "年度更新", "平台核心", "eKB"],
    title_en: "Windows 11 26H2 Upcoming Release: Microsoft Adopts Same Core for Annual Update, Lowering Upgrade Risk",
    summary_en: "Microsoft is expected to release the Windows 11 26H2 annual feature update soon. Since this version is based on the same core platform as 24H2 and 25H2, codenamed “Germanium,” the upgrade process is expected to carry lower risk and be quick. For IT administrators, Microsoft has already released the 26H2 evaluation ISO to enterprises, allowing them to test application and driver compatibility in advance. This indicates that the official release is imminent. The article points out that by adopting this \"same service branch\" strategy, Microsoft can incorporate new features without requiring a major platform upgrade, thereby mitigating the compatibility issues seen in previous versions (such as 23H2 to 24H2). Users upgrading from 24H2 or 25H2 to 26H2 will only need minutes, and the underlying platform remains consistent. Users are advised to monitor official Microsoft announcements and prepare for the system upgrade to ensure they can smoothly access the latest features and patches.",
    tags_en: ["Windows 11", "26H2", "Microsoft", "Annual Update", "Platform Core", "eKB"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/28/windows-11-26h2-releases-any-day-now-and-heres-who-gets-it-and-when", lang: "EN" }
    ]
  },
  {
    id: "20260927-13757",
    trackers: ["os"],
    category: "Windows",
    title: "Discord 依賴 Electron 框架導致 RAM 佔用過高，Game Mode 僅能解決 CPU/GPU 資源問題",
    summary: "本文分析了 Discord Windows 客戶端在資源佔用上的問題，指出其基於 Electron 框架（Chromium-based runtime）的架構是主要的記憶體（RAM）消耗來源。雖然 Discord 推出 Game Mode 旨在降低遊戲時的 CPU 和 GPU 使用率，但該模式並未解決其巨大的 RAM 佔用問題。文章提到，Discord 曾承認其應用程式的記憶體使用量可能超過 4GB，且在 2026 年的更新中，記憶體使用量反而增加了約 4%。此外，其他使用 WebView2 或 Web Wrapper 的應用程式（如 Microsoft Teams、WhatsApp）也存在類似的資源問題。作者建議，鑑於記憶體價格的上升，Discord 應考慮轉向使用 WinUI 3 等原生技術，而非僅依賴 Electron 框架，以大幅降低其在 Windows 11 上的記憶體足跡。修補建議是從架構層面進行重構，而非僅透過功能性調整。",
    tags: ["Discord", "Electron", "Chromium", "Windows 11", "RAM", "WinUI 3"],
    title_en: "Discord's Reliance on Electron Framework Leads to High RAM Consumption; Game Mode Only Addresses CPU/GPU Issues",
    summary_en: "This article analyzes resource consumption issues with the Discord Windows client, pointing out that its architecture, which is based on the Electron framework (Chromium-based runtime), is the primary source of high memory (RAM) usage. Although Discord introduced Game Mode to reduce CPU and GPU usage during gaming, this mode does not solve the massive RAM consumption problem. The article notes that Discord has acknowledged its application's memory usage can exceed 4GB, and that memory usage actually increased by about 4% in the 2026 update. Furthermore, other applications using WebView2 or Web Wrappers (such as Microsoft Teams and WhatsApp) exhibit similar resource issues. The author suggests that, given the rising cost of memory, Discord should consider transitioning to native technologies like WinUI 3 rather than solely relying on the Electron framework, in order to significantly reduce its memory footprint on Windows 11. The suggested fix is a structural refactoring, rather than merely functional adjustments.",
    tags_en: ["Discord", "Electron", "Chromium", "Windows 11", "RAM", "WinUI 3"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/27/electron-is-one-of-windows-11s-biggest-ram-offenders-and-discords-game-mode-doesnt-fix-it", lang: "EN" }
    ]
  },
  {
    id: "20260927-13272",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA警告：多個零日漏洞影響Citrix NetScaler ADC/Gateway，已列入已知被利用漏洞清單",
    summary: "美國網路安全局（CISA）發出警報，警告Citrix NetScaler ADC和Citrix NetScaler Gateway產品面臨多個新的漏洞風險。此次警報涵蓋了共八個漏洞，包括CVE-2026-88771至CVE-2026-88778。其中，CVE-2026-88771和CVE-2026-88772被列入CISA的已知被利用漏洞（Known Exploited Vulnerabilities, KEV）目錄，且均為關鍵級零日漏洞，可獨立實現遠端程式碼執行（RCE）。CISA指出，已收到報告和合作夥伴情報，確認惡意行為者正在全球積極利用這些漏洞。由於更新Citrix NetScaler部署可能複雜且需要停機，CISA建議組織應評估自身暴露風險，並在修補前檢查是否有入侵跡象（IOC）。若懷疑系統已被入侵，應先保留鑑識證據，以防更新過程導致證據遺失。",
    tags: ["CISA", "Citrix", "NetScaler ADC", "NetScaler Gateway", "CVE-2026-88771", "CVE-2026-88772", "KEV"],
    title_en: "CISA Warns: Multiple Zero-Day Vulnerabilities Affect Citrix NetScaler ADC/Gateway, Listed in Known Exploited Vulnerabilities",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) has issued an alert warning of multiple new vulnerability risks affecting Citrix NetScaler ADC and Citrix NetScaler Gateway products. This alert covers a total of eight vulnerabilities, including CVE-2026-88771 through CVE-2026-88778. Notably, CVE-2026-88771 and CVE-2026-88772 have been listed in CISA's Known Exploited Vulnerabilities (KEV) catalog and are both critical zero-day vulnerabilities capable of achieving Remote Code Execution (RCE) independently. CISA points out that it has received reports and partner intelligence confirming that malicious actors are actively exploiting these vulnerabilities globally. Given that updating Citrix NetScaler deployments can be complex and require downtime, CISA advises organizations to assess their exposure risk and check for Indicators of Compromise (IOC) before patching. If the system is suspected to be compromised, forensic evidence should be preserved first to prevent loss of evidence during the update process.",
    tags_en: ["CISA", "Citrix", "NetScaler ADC", "NetScaler Gateway", "CVE-2026-88771", "CVE-2026-88772", "KEV"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/27/critical-zero-day-vulnerabilities-exploited-citrix-netscaler-adc-gateway", lang: "EN" }
    ]
  },
  {
    id: "20260927-13273",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增兩項已知被利用漏洞：Citrix NetScaler的兩大漏洞已列入KEV目錄",
    summary: "美國網路安全局（CISA）宣布，根據積極的利用證據，已將兩項新的漏洞納入其「已知被利用漏洞目錄」（Known Exploited Vulnerabilities, KEV Catalog）。這兩項漏洞分別是：CVE-2026-88771（Citrix NetScaler Improper Input Validation Vulnerability）和 CVE-2026-88772（Citrix NetScaler Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability）。CISA警告，此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業機構構成重大風險。此外，CISA的《具約束力的操作指令》（Binding Operational Directive, BOD 26-04）要求聯邦民事行政部門（FCEB）必須根據風險優先修補高風險漏洞，特別是列入KEV目錄的漏洞。CISA鼓勵所有組織應採行基於風險的漏洞管理，並將修補KEV目錄中的漏洞列為優先事項。若組織發現未列入目錄但已被利用的漏洞，可透過提交提名表向CISA報告。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-88771", "CVE-2026-88772", "Citrix NetScaler", "漏洞管理"],
    title_en: "CISA Adds Two Known Exploited Vulnerabilities: Two Citrix NetScaler Flaws Listed in KEV Catalog",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that, based on evidence of active exploitation, it has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog. These two vulnerabilities are: CVE-2026-88771 (Citrix NetScaler Improper Input Validation Vulnerability) and CVE-2026-88772 (Citrix NetScaler Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability). CISA warns that such vulnerabilities are common attack vectors used by malicious actors and pose a significant risk to federal government agencies. Furthermore, CISA's Binding Operational Directive (BOD 26-04) requires Federal Civilian Executive Branch (FCEB) departments to prioritize patching high-risk vulnerabilities, especially those listed in the KEV Catalog. CISA encourages all organizations to adopt risk-based vulnerability management and to treat patching KEV Catalog vulnerabilities as a top priority. Organizations that discover vulnerabilities that have been exploited but are not listed in the catalog can report them to CISA by submitting a nomination form.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-88771", "CVE-2026-88772", "Citrix NetScaler", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/09/27/cisa-adds-two-known-exploited-vulnerabilities-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260927-13363",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Citrix NetScaler 遭外洩漏洞攻擊：兩處 RCE 漏洞已在野外被利用",
    summary: "資安公司 Citrix 確認，其 NetScaler ADC 和 NetScaler Gateway 產品存在兩處關鍵漏洞（CVE-2026-88771 與 CVE-2026-88772），已在野外被攻擊者利用。這兩漏洞的 CVSS v4 分數皆為 9.5，嚴重性極高。CVE-2026-88771 屬於輸入驗證不當的缺陷，允許未經身份驗證的攻擊者執行任意指令；而 CVE-2026-88772 則是記憶體溢位漏洞，可能導致遠端程式碼執行或服務拒絕（DoS），特別影響啟用 DTLS 的設備。由於這些漏洞在修補程式公開前已被利用，攻擊者可能已取得存取權。Citrix 已發布修補程式，建議所有受影響的 NetScaler ADC 和 NetScaler Gateway 設備應立即升級至 14.1-73.37 或 13.1-64.23 及更高版本。此外，文章也列出了其他六個高風險漏洞，包括 HTTP 請求竊取等，建議客戶應立即採取修補措施，並遵循資安建議，隔離設備、更改所有服務帳號密碼，並將管理介面排除在公共網際網路之外。",
    tags: ["Citrix", "NetScaler", "CVE-2026-88771", "CVE-2026-88772", "RCE", "資安漏洞"],
    title_en: "Citrix NetScaler Targeted by Vulnerability Exploits: Two RCE Flaws Already Exploited in the Wild",
    summary_en: "Cybersecurity firm Citrix confirmed that its NetScaler ADC and NetScaler Gateway products contain two critical vulnerabilities (CVE-2026-88771 and CVE-2026-88772), which have been exploited by attackers in the wild. Both vulnerabilities have a CVSS v4 score of 9.5, indicating extreme severity. CVE-2026-88771 is an input validation flaw that allows unauthenticated attackers to execute arbitrary commands; while CVE-2026-88772 is a memory overflow vulnerability that could lead to remote code execution or denial of service (DoS), particularly affecting devices with DTLS enabled. Since these vulnerabilities were exploited before patches were released, attackers may have already gained access. Citrix has released patches and advises that all affected NetScaler ADC and NetScaler Gateway devices should immediately upgrade to version 14.1-73.37 or 13.1-64.23 or higher. Furthermore, the article lists six other high-risk vulnerabilities, including HTTP request hijacking, and advises customers to implement patching immediately, follow cybersecurity recommendations, isolate devices, change all service account passwords, and exclude management interfaces from the public internet.",
    tags_en: ["Citrix", "NetScaler", "CVE-2026-88771", "CVE-2026-88772", "RCE", "Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/warning-two-unpatched-citrix-netscaler.html", lang: "EN" }
    ]
  },
  {
    id: "20260927-13404",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Citrix 確認 NetScaler 兩處零日漏洞遭利用，緊急修補 CVE-2026-88771 與 CVE-2026-88772",
    summary: "資安廠商 Citrix 確認其 NetScaler 設備存在兩處關鍵的遠端程式碼執行（RCE）零日漏洞，分別為 CVE-2026-88771 和 CVE-2026-88772。這兩漏洞已被證實遭在野外攻擊利用，嚴重性評分皆為 9.5。CVE-2026-88771 是因輸入驗證不當導致的 RCE，允許未經身份驗證的攻擊者執行任意指令；而 CVE-2026-88772 則是記憶體溢出漏洞，可能導致 RCE 或服務拒絕。由於 NetScaler 設備常作為提供遠端存取和應用程式交付的邊緣設備，一旦被攻陷，攻擊者可從網路邊界取得立足點，進而威脅內部系統。Citrix 已發布安全公告，並提供修補程式，建議受影響的 NetScaler ADC 和 NetScaler Gateway 設備（包括 14.1 版本前 14.1-73.37 及 13.1 版本前 13.1-64.23）應立即升級至指定版本，以修補這些漏洞。",
    tags: ["Citrix", "NetScaler", "CVE-2026-88771", "CVE-2026-88772", "RCE", "零日漏洞"],
    title_en: "Citrix Confirms Exploitation of Two NetScaler Zero-Day Vulnerabilities, Patches CVE-2026-88771 and CVE-2026-88772",
    summary_en: "Security vendor Citrix has confirmed two critical Remote Code Execution (RCE) zero-day vulnerabilities in its NetScaler devices: CVE-2026-88771 and CVE-2026-88772. Both vulnerabilities have been confirmed exploited in the wild, with a severity score of 9.5. CVE-2026-88771 is an RCE vulnerability caused by improper input validation, allowing unauthenticated attackers to execute arbitrary commands; while CVE-2026-88772 is a memory overflow vulnerability that could lead to RCE or denial of service. Since NetScaler devices often serve as edge devices providing remote access and application delivery, compromise could give attackers a foothold at the network boundary, subsequently threatening internal systems. Citrix has issued a security advisory and provided patches, recommending that affected NetScaler ADC and NetScaler Gateway devices (including versions prior to 14.1-73.37 and 13.1-64.23) immediately upgrade to the specified versions to patch these vulnerabilities.",
    tags_en: ["Citrix", "NetScaler", "CVE-2026-88771", "CVE-2026-88772", "RCE", "Zero-Day Vulnerability"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/citrix-admins-warned-to-shut-down-netscalers-over-2-exploited-zero-days", lang: "EN" }
    ]
  },
  {
    id: "20260927-13406",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Cloudflare修復容器跨租戶資料洩漏漏洞：殘留資料可能洩露客戶檔案與密碼",
    summary: "Cloudflare修復了其Workers Paid方案下的Containers服務中的一個漏洞。該漏洞允許帳戶持有者在同一實體主機上的其他客戶容器中，恢復殘留的客戶資料。攻擊者若成功利用，可能讀取到其他客戶的檔案，包括目錄列表、SQLite資料庫、Chromium設定檔、.env檔案和憑證檔案。根據Cloudflare的說明，問題出在一個共享儲存池的配置，該配置跳過了對重複使用的64 KiB區塊進行零化處理。研究人員發現，由於缺乏零化操作，新容器的寫入操作僅覆蓋了部分區塊，導致剩餘的區塊可能仍包含前一個客戶的資料。Cloudflare已移除導致跳過區塊零化的設定，並修復了相關基礎設施，修復工作已於2026年9月19日完成。Cloudflare表示，透過檢查日誌、遙測和歷史資料，未發現客戶資料曾透過此方法洩露的證據，且已自動修補，客戶無需採取任何行動。",
    tags: ["Cloudflare", "Containers", "Workers Paid", "跨租戶漏洞", "資料洩漏", "儲存池"],
    title_en: "Cloudflare Patches Container Cross-Tenant Data Leakage Vulnerability: Residual Data May Expose Customer Files and Passwords",
    summary_en: "Cloudflare has patched a vulnerability in its Workers Paid Containers service. This vulnerability allowed account holders to recover residual customer data from other customer containers on the same physical host. If successfully exploited, an attacker could read other customers' files, including directory listings, SQLite databases, Chromium configuration files, .env files, and credential files. According to Cloudflare, the issue stemmed from a configuration in a shared storage pool that bypassed zeroing out reused 64 KiB blocks. Researchers found that due to the lack of zeroing, write operations for new containers only covered partial blocks, meaning remaining blocks might still contain data from the previous customer. Cloudflare has removed the setting that caused the block zeroing to be skipped and has fixed the related infrastructure. The remediation was completed on September 19, 2026. Cloudflare stated that through checking logs, telemetry, and historical data, no evidence was found that customer data was leaked via this method, and the issue has been automatically patched, requiring no action from customers.",
    tags_en: ["Cloudflare", "Containers", "Workers Paid", "Cross-Tenant Vulnerability", "Data Leakage", "Storage Pool"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/cloudflare-fixes-containers-cross-tenant-flaw-exposing-customer-data", lang: "EN" }
    ]
  },
  {
    id: "20260927-13539",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重設計 Apple Pay 結帳流程，提升用戶切換支付卡與查看資訊的便利性",
    summary: "Apple 在 iOS 27 版本中更新了 Apple Pay 的結帳流程，旨在改善用戶體驗，特別是讓用戶能更順暢地在不同支付卡之間切換，並一目瞭然地查看卡片資訊。新設計允許用戶直接在主介面左右滑動（swipe）來切換支付卡，或點擊卡片進入網格式介面，集中查看所有可用的 Apple Pay 卡片。Apple 說明，此更新讓用戶在網頁和 App 結帳時，能更方便地查看如回饋金、餘額、分期付款選項等重要資訊，從而做出更明智的支付決策。相較於 iOS 26 版本，新介面解決了用戶在切換卡片時容易誤點導致進入地址編輯介面的問題，大幅簡化了操作流程。開發者和商家仍可根據訂單所需資訊，控制 Apple Pay 支付介面上顯示的內容。",
    tags: ["Apple Pay", "iOS 27", "Apple Wallet", "結帳流程", "支付介面"],
    title_en: "iOS 27 redesigns Apple Pay checkout flow to improve user convenience for switching cards and viewing information",
    summary_en: "Apple has updated the Apple Pay checkout flow in iOS 27 to improve user experience, particularly by allowing users to more smoothly switch between different payment cards and view card information at a glance. The new design allows users to swipe left or right directly on the main interface to switch payment cards, or tap a card to enter a web-formatted interface to view all available Apple Pay cards in one place. Apple stated that this update enables users to more easily view important information such as rewards, balances, and installment options when checking out on websites and in apps, thereby making more informed payment decisions. Compared to the iOS 26 version, the new interface resolves the issue of users accidentally tapping into the address editing screen when switching cards, significantly simplifying the operation process. Developers and merchants can still control the content displayed on the Apple Pay payment interface based on the information required for the order.",
    tags_en: ["Apple Pay", "iOS 27", "Apple Wallet", "checkout flow", "payment interface"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/27/ios-27-makes-it-easier-to-switch-between-apple-pay-cards", lang: "EN" }
    ]
  },
  {
    id: "20260927-13541",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果下一代 iPad mini 預期升級：硬體規格與用戶功能需求分析",
    summary: "本文根據網路洩漏資訊，預測下一代 iPad mini 將搭載 A20 Pro 晶片，並具備更窄邊框、OLED 螢幕和防水設計等重大硬體升級。除了這些硬體提升外，文章更著重提出用戶對軟體層面的核心需求。雖然原文未提供具體的軟體功能細節，但其主旨是強調在硬體升級的基礎上，軟體介面和功能性必須進行重大改進，以提升整體使用體驗。目前尚未有公開的軟體漏洞或安全資訊，修補建議應關注系統穩定性與功能完善度。",
    tags: ["iPad mini", "A20 Pro", "Apple", "OLED", "macOS"],
    title_en: "Expected Upgrades for Next-Generation iPad mini: Analysis of Hardware Specifications and User Feature Needs",
    summary_en: "Based on leaked information, this article predicts that the next-generation iPad mini will feature the A20 Pro chip, along with major hardware upgrades such as narrower bezels, an OLED screen, and waterproofing. Beyond these hardware enhancements, the article also focuses on core user needs at the software level. Although the original text does not provide specific software feature details, its main point is to emphasize that significant improvements must be made to the software interface and functionality, built upon the hardware upgrades, to enhance the overall user experience. As there are currently no public software vulnerabilities or security advisories, patch recommendations should focus on system stability and functional completeness.",
    tags_en: ["iPad mini", "A20 Pro", "Apple", "OLED", "macOS"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/27/apple-next-ipad-mini-feature-request", lang: "EN" }
    ]
  },
  {
    id: "20260927-13542",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 正在開發新款輕量化 Vision Pro 版本，旨在解決初代機型笨重問題",
    summary: "自 Vision Pro 發布以來，市場對一款更輕、更不笨重的後續機型需求甚高。此前代號為 Vision Air 的專案曾一度擱置，但根據 Bloomberg 的報導，Apple 正在進行一個具有類似目標的新專案。這款新設備的開發目標，是解決初代 Vision Pro 在佩戴舒適度上的限制，提供更輕便、更具穿戴感的體驗。文章指出，雖然這是一個產品開發的動態消息，但其核心關注點仍是提升用戶的佩戴體驗，使其更接近消費者的期待。目前文章未提供具體的技術細節、CVE 資訊或發布時間表，僅為產品路線圖的更新。",
    tags: ["Apple", "Vision Pro", "Apple Vision", "消費電子", "穿戴設備"],
    title_en: "Apple developing new, lightweight Vision Pro version to address bulkiness issues",
    summary_en: "Since the release of the Vision Pro, there has been significant market demand for a successor model that is lighter and less bulky. A previous project, codenamed Vision Air, was once shelved, but according to Bloomberg, Apple is now working on a new project with similar goals. The development objective of this new device is to solve the limitations of the first-generation Vision Pro regarding wearing comfort, providing a lighter and more wearable experience. The article notes that while this is a dynamic product development update, its core focus remains on enhancing the user wearing experience to better meet consumer expectations. Currently, the article does not provide specific technical details, CVE information, or a release timeline; it is merely an update to the product roadmap.",
    tags_en: ["Apple", "Vision Pro", "Apple Vision", "Consumer Electronics", "Wearable Devices"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/27/apple-working-on-new-lighter-vision-pro-version", lang: "EN" }
    ]
  },
  {
    id: "20260927-13728",
    trackers: ["os"],
    category: "Apple",
    title: "透過瀏覽器重現 Apple 廢棄的 Copland 系統，回顧 Mac OS 歷史發展軌跡",
    summary: "本文介紹了 Apple 早期一個名為 Copland 的開發者作業系統，該系統最初旨在取代 System 7，採用微核心、保護記憶體和搶佔式多工處理等現代架構。雖然 Copland 曾於 1995 年在 WWDC 上展示，但由於穩定性不足，最終未能發布。現在，一位開發者透過修改 DingusPPC Power Mac 模擬器，讓使用者可以在瀏覽器中運行 Copland 的最終開發版本 D11E4，無需安裝任何東西。該模擬器運行的是 1996 年的 D11E4 版本，系統仍處於未完成狀態，運行時若遇到斷言（assertion）會進入除錯器。文章回顧了 Copland 雖然失敗，但其許多成熟組件（如 Platinum 介面、PowerPC 原生多執行緒 Finder）最終被 Apple 整合到後續的 Mac OS 8、Mac OS 8.1 和 Mac OS 8.5 等版本中，為 Apple 最終轉向 NeXTSTEP 及其後繼者 Mac OS X 奠定了基礎。這展示了 Apple 產品演進的複雜歷史，以及早期技術的影響力。",
    tags: ["Copland", "Apple", "Mac OS", "NeXTSTEP", "PowerPC", "作業系統歷史"],
    title_en: "Recreating Apple's Abandoned Copland System in a Browser, Reviewing the Historical Trajectory of Mac OS",
    summary_en: "This article introduces an early developer operating system from Apple called Copland, which was initially designed to replace System 7 and adopted modern architectures such as microkernels, protected memory, and preemptive multitasking. Although Copland was showcased at WWDC in 1995, it was ultimately shelved due to stability issues. Currently, a developer has modified the DingusPPC Power Mac emulator, allowing users to run the final development version, D11E4, of Copland directly in a browser without any installation. The emulator runs the 1996 D11E4 version, and since the system is still incomplete, encountering an assertion will trigger the debugger. The article reviews how, despite its failure, many mature components of Copland (such as the Platinum interface and PowerPC native multithreaded Finder) were eventually integrated by Apple into subsequent versions like Mac OS 8, Mac OS 8.1, and Mac OS 8.5, laying the groundwork for Apple's eventual shift to NeXTSTEP and its successor, Mac OS X. This demonstrates the complex history of Apple's product evolution and the influence of early technologies.",
    tags_en: ["Copland", "Apple", "Mac OS", "NeXTSTEP", "PowerPC", "Operating System History"],
    sources: [
      { name: "The Register", url: "https://theregister.com/os-platforms/2026/09/27/apple-buried-copland-30-years-ago-now-the-failed-os-boots-in-a-browser/5299201", lang: "EN" }
    ]
  },
  {
    id: "20260927-13804",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Fleet 服務前 4.87.0 版本，允許未經授權攻擊者下載內部 iOS 應用程式二進位檔",
    summary: "本漏洞影響 Fleet 服務版本 4.87.0 之前的版本。該漏洞存在於用於服務內部 iOS 應用程式套件和 Manifest 的兩個端點（僅限企業級方案）。由於 Apple 的 InstallEnterpriseApplication MDM 指令要求這些 URL 必須在沒有 Fleet session 的情況下可達，因此無法依賴基於 session 的身份驗證。這導致缺少了預期的隨機、時間限制的 URL token。因此，擁有網路存取權限的未經授權攻擊者，僅需猜測連續的標題識別符號，即可從 Fleet 伺服器下載內部 IPA 二進位檔及其元數據（包括 Bundle Identifier、版本和名稱）。此漏洞的影響僅限於讀取權限的資訊洩露，不涉及權限提升或寫入存取。此外，免費方案（free tier）不受影響，因為它會返回 `fleet.ErrMissingLicense`。",
    tags: ["Fleet", "CVE-2026-101047", "iOS", "MDM", "IPA", "資訊洩露"],
    title_en: "Fleet Service Versions Before 4.87.0 Allow Unauthorized Download of Internal iOS Application Binaries",
    summary_en: "This vulnerability affects versions of the Fleet service prior to 4.87.0. The vulnerability exists in two endpoints used for servicing internal iOS application packages and Manifests (enterprise-only). Because Apple's InstallEnterpriseApplication MDM directive requires these URLs to be accessible without an active Fleet session, session-based authentication cannot be relied upon. This results in the absence of the expected random, time-limited URL token. Consequently, an unauthorized attacker with network access can download internal IPA binaries and their metadata (including Bundle Identifier, version, and name) simply by guessing consecutive identifiers from the Fleet server. The impact of this vulnerability is limited to information disclosure and does not involve privilege escalation or write access. Furthermore, the free tier is unaffected, as it returns `fleet.ErrMissingLicense`.",
    tags_en: ["Fleet", "CVE-2026-101047", "iOS", "MDM", "IPA", "Information Disclosure"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-101047", lang: "EN" }
    ]
  },
  {
    id: "20260927-13326",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Logicalis推出MMS for M365代管服務：協助企業應對雲端複雜的資安治理與組態漂移",
    summary: "隨著企業採用Microsoft 365等雲端服務規模擴大，其身分、安全與生產力等工作負載的複雜度也隨之增加。Logicalis（網達先進科技）推出Managed Microsoft Services for Microsoft 365 (MMS for M365) 治理服務，旨在解決企業在管理、治理與安全設定上的難題。該服務的核心是CoreView平臺，提供三大服務類型：資安韌性託管、維運自動化、完整治理，分別針對高合規性、人員流動性及跨國大型機構的需求。服務功能包括每日設定備份、全天候監控組態漂移、帳號開通/回收自動化、閒置授權盤點，以及跨租戶設定版本控制。透過治理中心、優化中心和稽核中心三大主控臺，企業可即時掌握整體治理狀態、識別資源浪費，並追溯Exchange、SharePoint、OneDrive、Teams等多工作負載的完整活動軌跡，從事後處理轉為事前掌握，有效應對雲端環境的複雜性與管理盲點。",
    tags: ["Logicalis", "Microsoft 365", "CoreView", "雲端治理", "資安韌性", "組態漂移"],
    title_en: "Logicalis Launches MMS for M365 Managed Service: Helping Enterprises Address Complex Cloud Security Governance and Configuration Drift",
    summary_en: "As enterprises expand their adoption of cloud services like Microsoft 365, the complexity of workloads—including identity, security, and productivity—has increased. Logicalis (Wanda Advanced Technology) has launched Managed Microsoft Services for Microsoft 365 (MMS for M365) governance services, designed to solve the challenges enterprises face in management, governance, and security configuration. The core of this service is the CoreView platform, which offers three types of services: Security Resilience Hosting, Operations Automation, and Comprehensive Governance. These services target the needs of highly compliant organizations, organizations with high personnel turnover, and large multinational corporations. Service functionalities include daily configuration backups, 24/7 monitoring for configuration drift, automated account provisioning/deprovisioning, and idle license inventory. Furthermore, it provides cross-tenant configuration version control. Through three main control panels—the Governance Center, Optimization Center, and Audit Center—enterprises can instantly grasp the overall governance status, identify resource waste, and trace the complete activity history of multiple workloads like Exchange, SharePoint, OneDrive, and Teams. This shifts management from post-facto remediation to proactive control, effectively addressing the complexity and management blind spots of cloud environments.",
    tags_en: ["Logicalis", "Microsoft 365", "CoreView", "Cloud Governance", "Security Resilience", "Configuration Drift"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/review/179236", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260927-13470",
    trackers: ["os"],
    category: "Android",
    title: "Google Messages for Android 推出多項新功能：支援 iOS 27 RCS、聊天主題自訂與進階訊息編輯",
    summary: "Google Messages for Android 持續進行 A/B 測試，為用戶帶來多項穩定與 Beta 階段的新功能。主要更新包括：Messages for web 將要求使用 Google Account 登入，取代原有的 QR Code 配對方式；讀取回執（Read receipts）的介面設計進行了調整，現在可透過左右滑動查看時間戳記和回覆；用戶現在可以透過在聊天室任意位置左滑來查看時間戳記和 RCS 加密鎖，右滑則用於回覆訊息。此外，系統新增了長按功能，可彈出浮動選單，讓用戶精準複製聊天內容的特定部分。在穩定功能方面，Google 宣布 iOS 27 將支援 Android-iPhone 之間的 RCS 聊天，增加內嵌引述的回覆和照片反應。另有 Google Keep 整合，允許用戶直接在聊天室內創建和分享筆記。此外，用戶可透過「聊天主題」（Chat theme）功能，自訂訊息氣泡顏色和聊天背景，提供更高度的個人化體驗。這些更新顯著提升了用戶的互動性和聊天體驗，建議用戶留意 Google 官方的更新通知以獲取最新功能。",
    tags: ["Google Messages", "Android", "RCS", "iOS 27", "Google Keep", "聊天主題"],
    title_en: "Google Messages for Android Launches Multiple New Features: Supports iOS 27 RCS, Chat Theme Customization, and Advanced Message Editing",
    summary_en: "Google Messages for Android continues to roll out multiple stable and Beta features through A/B testing. Key updates include: Messages for web will now require Google Account login, replacing the previous QR Code pairing method; the interface design for read receipts has been adjusted, allowing users to view timestamps and replies by swiping left or right. Users can now swipe left anywhere in a chat room to view timestamps and RCS encryption locks, and swipe right to reply to messages. Additionally, the system introduces a long-press function that pops up a floating menu, allowing users to precisely copy specific sections of chat content. In stable features, Google announced that iOS 27 will support RCS chat between Android and iPhone, adding embedded quote replies and photo reactions. There is also Google Keep integration, allowing users to create and share notes directly within the chat room. Furthermore, users can customize the message bubble color and chat background using the \"Chat theme\" feature, providing a more highly personalized experience. These updates significantly enhance user interactivity and the overall chat experience, and users are advised to monitor official Google update notifications for the latest features.",
    tags_en: ["Google Messages", "Android", "RCS", "iOS 27", "Google Keep", "Chat theme"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/27/new-google-messages-features", lang: "EN" }
    ]
  },
  {
    id: "20260927-13471",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Pixel手機生態系更新：分析Qualcomm Snapdragon與Tensor晶片趨勢",
    summary: "本文內容主要為科技產業觀察與趨勢分析，而非特定安全漏洞或修補公告。文章提到Qualcomm最新發布的Snapdragon晶片，並觀察到Google Pixel手機在處理器選擇上，經常面臨市場關注的焦點。作者指出，除了Pixel手機與Tensor晶片相關的討論外，Qualcomm活動中展示的更多規格，才是Pixel手機更應該採用的方向。這類分析屬於產品生態系和硬體規格的比較，對於資安人員而言，應關注晶片供應鏈的穩定性、新架構的效能與潛在的韌體安全設計，而非僅關注單一的處理器品牌。",
    tags: ["Google Pixel", "Qualcomm", "Snapdragon", "Tensor", "晶片供應鏈", "Android"],
    title_en: "Google Pixel Ecosystem Update: Analyzing Trends in Qualcomm Snapdragon and Tensor Chips",
    summary_en: "This article focuses on technology industry observation and trend analysis, rather than specific security vulnerabilities or patch announcements. It mentions Qualcomm's latest Snapdragon chips and observes that Google Pixel phones frequently become a focus of market attention regarding processor selection. The author points out that rather than focusing solely on the discussion surrounding Pixel phones and Tensor chips, the specifications showcased at Qualcomm events represent the direction Pixel phones should adopt. This type of analysis involves comparing product ecosystems and hardware specifications; for cybersecurity professionals, the focus should be on the stability of the chip supply chain, the performance of new architectures, and potential firmware security design, rather than merely focusing on a single processor brand.",
    tags_en: ["Google Pixel", "Qualcomm", "Snapdragon", "Tensor", "Chip Supply Chain", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/27/google-pixel-tensor-snapdragon-mediatek-newsletter", lang: "EN" }
    ]
  },
  {
    id: "20260927-13543",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Taptic Engine 遭判侵犯專利，須支付 57 億美元賠償金",
    summary: "美國陪審團裁定 Apple 侵犯了 Taction Technology 持有的專利，相關專利涉及用於皮膚的「振動牽引模組」。Taction Technology 於 2021 年提起訴訟，指控 Apple 的 Taptic Engine 侵犯了其專利，並利用了其創新成果。Apple 的 Taptic Engine 最初於 2014 年作為 Apple Watch 的一部分推出，隨後取代了舊的震動馬達。Apple 發言人對判決表示強烈不同意，聲稱 Taptic Engine 與 Taction 的技術本質不同，並表示將會上訴。Taction Technology 方面則表示，陪審團的裁決證實了其專利權。本案屬於專利侵權訴訟，實務影響為 Apple 需支付高額賠償金。建議關注後續的法律上訴進展。",
    tags: ["Apple", "Taction Technology", "Taptic Engine", "專利侵權", "美國法律"],
    title_en: "Apple Found to Infringe Patent, Ordered to Pay $5.7 Billion in Damages",
    summary_en: "A U.S. jury ruled that Apple infringed on patents held by Taction Technology, with the patents relating to a 'vibration induction module' for skin use. Taction Technology filed the lawsuit in 2021, alleging that Apple's Taptic Engine infringed its patents and utilized its innovative technology. Apple's Taptic Engine was initially introduced in 2014 as part of the Apple Watch, replacing older vibration motors. An Apple spokesperson expressed strong disagreement with the verdict, stating that the Taptic Engine is fundamentally different from Taction's technology, and announced plans to appeal. Taction Technology, meanwhile, stated that the jury's verdict affirmed its patent rights. This case is a patent infringement lawsuit, with practical implications that Apple must pay substantial damages. Further monitoring of the legal appeal process is advised.",
    tags_en: ["Apple", "Taction Technology", "Taptic Engine", "Patent Infringement", "U.S. Law"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/27/apple-hit-with-5-7-billion-verdict-over-taptic-engine-patent-infringement", lang: "EN" }
    ]
  },
  {
    id: "20260927-14417",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Confidential Computing 漏洞：Contrast 早期版本存在 AML 注入攻擊，可能導致任意程式碼執行",
    summary: "本漏洞影響 Contrast 平台在 1.18.0 版本之前的版本。該漏洞屬於「BadAML」類型的攻擊，涉及在 Confidential Computing 環境中，從不受信任的主機（QEMU）傳遞給客戶端韌體（OVMF）和 Linux 核心的 ACPI 表格。攻擊者若能控制主機，可以構造包含惡意、圖靈完備 AML 字節碼的表格。當客戶端核心解析這些字節碼時，由於其具有存取完整客戶端記憶體（包括私有頁面）的權限，可能導致任意程式碼執行，進而洩露或修改機密的客戶端資料。此問題不僅限於 Contrast，而是通用於任何將 ACPI 介面暴露給主機的機密計算環境。AMD SEV-SNP 平台（Metal-QEMU-SNP 和 Metal-QEMU-SNP-GPU）受影響，但 Intel TDX 平台（Metal-QEMU-TDX）因 OVMF 會將 ACPI 表格內容測量到 RTMR 0 而不受影響。升級至 v1.18.0 版本已透過沙盒化核心 AML 解譯器來緩解此攻擊，使其無法讀寫私有記憶體頁面。",
    tags: ["Confidential Computing", "Contrast", "CVE-2026-100839", "ACPI", "AML", "QEMU", "AMD SEV-SNP"],
    title_en: "Confidential Computing Vulnerability: Contrast Early Versions Susceptible to AML Injection Attack Leading to Arbitrary Code Execution",
    summary_en: "This vulnerability affects Contrast platform versions prior to 1.18.0. The flaw is classified as a \"BadAML\" type attack, involving the ACPI tables passed from an untrusted host (QEMU) to the client firmware (OVMF) and Linux kernel within a Confidential Computing environment. If an attacker can control the host, they can construct tables containing malicious, Turing-complete AML bytecode. When the client kernel parses this bytecode, due to its privilege to access the client's entire memory (including private pages), it could lead to arbitrary code execution, potentially leaking or modifying sensitive client data. This issue is not limited to Contrast but is general to any confidential computing environment that exposes the ACPI interface to the host. AMD SEV-SNP platforms (Metal-QEMU-SNP and Metal-QEMU-SNP-GPU) are affected, but Intel TDX platforms (Metal-QEMU-TDX) are unaffected because OVMF measures the ACPI table content into RTMR 0. Upgrading to v1.18.0 mitigates this attack by using a sandboxed core AML interpreter, preventing it from reading or writing private memory pages.",
    tags_en: ["Confidential Computing", "Contrast", "CVE-2026-100839", "ACPI", "AML", "QEMU", "AMD SEV-SNP"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-100839", lang: "EN" }
    ]
  },
  {
    id: "20260927-13436",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "AI轉型時代內部網路安全挑戰：한드림넷 SubGATE實現邊緣層級的深度防禦",
    summary: "隨著AI應用加速推動「AI轉型（AX）」時代，企業內部網路的East-West流量呈指數級暴增，且攻擊面擴大，內部資訊竊取風險極高。傳統的集中式邊界安全無法應對這種複雜的內部威脅。本文指出，為實現高效且強大的安全防禦，必須採用「多層式防禦」（Defense in Depth）的互補性方法。核心建議是將安全功能內建於最接近用戶的L2/L3「安全交換器」層級。한드림넷推出的「SubGATE」網路安全交換器，無需安裝額外Agent，可在接入層（Access Level）自動偵測並阻擋來自內部網路的惡意流量，如DoS、DDoS、ARP Spoofing等。其獨有的MDS安全引擎能實時分析流量行為，並透過微隔離（Micro-segmentation）技術，即使有設備被感染，也能在交換器層面物理阻斷惡意流量的擴散。此外，透過VIPM等管理工具，可實現Agent-less的網路可視化和遠端管理，協助企業在不改變網路架構的前提下，建立零信任（Zero Trust）的邊緣防禦體系。",
    tags: ["한드림넷", "SubGATE", "AI轉型", "邊緣安全", "零信任", "East-West流量"],
    title_en: "Internal Network Security Challenges in the AI Transformation Era: HandreamNet's SubGATE Achieves Deep Defense at the Edge Layer",
    summary_en: "As AI applications accelerate the 'AI Transformation (AX)' era, East-West traffic within corporate internal networks is increasing exponentially, and the attack surface is expanding, leading to extremely high risks of internal information theft. Traditional centralized perimeter security cannot cope with these complex internal threats. This article argues that to achieve efficient and robust security defense, a complementary approach using 'Defense in Depth' is essential. The core recommendation is to embed security functions at the L2/L3 'secure switch' layer, which is closest to the user. HandreamNet's 'SubGATE' network security switch can automatically detect and block malicious traffic originating from the internal network—such as DoS, DDoS, and ARP Spoofing—at the Access Level, without requiring the installation of extra agents. Its unique MDS security engine analyzes traffic behavior in real-time and, through Micro-segmentation technology, can physically block the spread of malicious traffic at the switch layer, even if a device becomes infected. Furthermore, management tools like VIPM enable agent-less network visibility and remote management, helping enterprises establish a Zero Trust edge defense system without altering their network architecture.",
    tags_en: ["HandreamNet", "SubGATE", "AI Transformation", "Edge Security", "Zero Trust", "East-West Traffic"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146028", lang: "EN" }
    ]
  }
];
