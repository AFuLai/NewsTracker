// data-20261004.js — 2026-10-04
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-04"] = [
  {
    id: "20261004-14592",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6542-1 相關漏洞，強化系統安全性",
    summary: "Debian 發布安全公告，修補一個與 DSA-6542-1 相關的漏洞。此漏洞的修補旨在提升系統的整體安全性，特別是針對核心元件的潛在風險。雖然原文未提供詳細的技術細節、CVSS 分數或受影響的具體產品版本，但根據 Debian 安全追蹤器的公告，此修補屬於核心安全更新，建議所有使用 Debian 系統的用戶應立即更新系統以避免潛在的攻擊風險。用戶應透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）來應用這些安全補丁，確保系統運行在最新的安全版本。此類安全更新對於維護系統的穩定性和安全性至關重要，建議系統管理員應定期檢查並應用所有安全補丁。",
    tags: ["Debian", "DSA-6542-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patches DSA-6542-1 Vulnerability to Enhance System Security",
    summary_en: "Debian has issued a security advisory to patch a vulnerability related to DSA-6542-1. This patch aims to enhance the overall system security, particularly addressing potential risks in core components. Although the original text does not provide detailed technical specifics, CVSS scores, or affected product versions, the Debian Security Tracker announcement indicates that this patch is a critical security update. All users running Debian systems are advised to update their systems immediately to prevent potential attack risks. Users should apply these security patches through standard system update mechanisms (such as `apt update` and `apt upgrade`) to ensure the system runs on the latest secure version. Such security updates are crucial for maintaining system stability and security, and system administrators are advised to regularly check for and apply all security patches.",
    tags_en: ["Debian", "DSA-6542-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00456.html", lang: "EN" }
    ]
  },
  {
    id: "20261004-14593",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6541-1：修補核心元件，防止潛在安全風險",
    summary: "本安全公告（DSA-6541-1）由 Debian 發布，旨在修補某個核心元件的潛在安全漏洞。雖然原文未提供詳細的技術細節或特定的 CVE 編號，但這屬於 Debian 系統的關鍵安全更新。資安專業人員應關注此類核心元件的修補，以確保系統的穩定性和安全性。修補建議是立即更新 Debian 系統至包含此安全修補的最新版本。由於原文僅提供安全追蹤連結，未公開具體的 CVSS 分數、受影響版本或修補方式，使用者應以 Debian 官方公告為準，並及時執行系統更新。",
    tags: ["Debian", "DSA-6541-1", "安全公告", "核心元件", "Linux"],
    title_en: "Debian Issues Security Advisory DSA-6541-1: Patching Core Component to Prevent Potential Security Risks",
    summary_en: "This security advisory (DSA-6541-1) has been issued by Debian to patch a potential vulnerability in a core component. Although the original text does not provide detailed technical specifications or a specific CVE ID, this constitutes a critical security update for the Debian system. Cybersecurity professionals should pay attention to such core component patches to ensure system stability and security. The recommended action is to immediately update the Debian system to the latest version containing this security patch. Since the original text only provides a security tracking link and does not disclose specific CVSS scores, affected versions, or patching methods, users should rely on the official Debian announcement and perform the system update promptly.",
    tags_en: ["Debian", "DSA-6541-1", "Security Advisory", "Core Component", "Linux"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00455.html", lang: "EN" }
    ]
  },
  {
    id: "20261004-14607",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc6 預覽版發布：核心持續修復驅動程式與網路功能",
    summary: "Linux 核心開發團隊發布了 Linux 7.3-rc6 預覽版，持續朝向穩定版發布邁進。本次開發週期主要集中在修復錯誤和回歸問題，特別是受到 AI/LLM 相關報告和補丁的影響，導致核心樹和郵件列表出現大量變動。本次版本值得關注的修復內容包括新增對 Turtle Beach VelocityOne Race 轉向輪與踏板系統的支援，以及由於用戶報告過多錯誤，撤銷了對 Logitech Bolt 接收器 HID++ 的支援。此外，核心進行了廣泛的網路修復，以及其他多方面的修復。開發者指出，本次核心的變動趨勢已恢復正常，主要集中在 GPU、網路、USB、tty、iio、音訊等驅動程式層面，並包含架構更新、核心網路、檔案系統（特別是 smb client）和 bpf 等關鍵元件的修復。建議使用者關注官方的 Linux 7.3 功能概述，以了解本次核心版本帶來的全面更新。",
    tags: ["Linux 7.3", "Linux 核心", "Linux 驅動程式", "Linux 網路", "Linux 開發"],
    title_en: "Linux 7.3-rc6 Preview Release: Core Continues Fixing Drivers and Networking Features",
    summary_en: "The Linux kernel development team has released the Linux 7.3-rc6 preview, continuing its progress toward a stable release. This development cycle primarily focused on fixing bugs and regression issues, particularly due to changes in the kernel tree and mailing lists resulting from AI/LLM-related reports and patches. Notable fixes in this version include adding support for Turtle Beach VelocityOne Race steering wheel and pedal systems, and removing support for Logitech Bolt receiver HID++ due to numerous user-reported errors. Furthermore, the kernel implemented extensive networking fixes and various other improvements. Developers noted that the kernel's change trend has returned to normal, focusing mainly on driver layers such as GPU, networking, USB, tty, iio, and audio, and including fixes for key components like architecture updates, core networking, file systems (especially the smb client), and bpf. Users are advised to check the official Linux 7.3 feature overview for a comprehensive understanding of the updates brought by this kernel version.",
    tags_en: ["Linux 7.3", "Linux Kernel", "Linux Drivers", "Linux Networking", "Linux Development"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc6-Released", lang: "EN" }
    ]
  },
  {
    id: "20261004-14608",
    trackers: ["os"],
    category: "Linux",
    title: "OpenRadioss 專案停擺後，Rocky Linux 社群發起 OpenCourant 繼承其開發",
    summary: "原先由 Altair Engineering 開發的 OpenRadioss 有限元求解器專案，因 Siemens 決定關閉該開源專案，並移除其 GitHub 儲存庫，導致開發中斷。為此，Rocky Linux 的創始人兼副總裁 Brian Clemens 及其社群成員，發起了一個名為 OpenCourant 的社群分支（community fork）。OpenCourant 旨在作為 OpenRadioss 的持續發展，專注於用於碰撞、衝擊和高度非線性動態模擬的開源有限元求解器。該專案沿用 OpenRadioss 的 GNI AGPLv3 授權，並將作為 Rocky Enterprise Software Foundation (RESF) 的一部分運行。雖然 OpenCourant 成功繼承了 OpenRadioss 的程式碼庫，但社群目前面臨一個挑戰，即部分 OpenRadioss 依賴於二進位依賴（binary dependencies），且無法取得 Siemens 移除儲存庫前最新的版本。OpenCourant 的啟動，為該領域的開源開發帶來了新的希望，預計將持續在社群的支持下發展。",
    tags: ["OpenRadioss", "OpenCourant", "Rocky Linux", "有限元求解器", "RESF", "開源專案"],
    title_en: "Following the Halt of OpenRadioss Project, Rocky Linux Community Initiates OpenCourant Development",
    summary_en: "The OpenRadioss finite element solver project, originally developed by Altair Engineering, faced development disruption after Siemens decided to close the open-source project and remove its GitHub repository. To address this, Brian Clemens, the founder and Vice President of Rocky Linux, along with community members, initiated a community fork named OpenCourant. OpenCourant aims to serve as the continuous development successor to OpenRadioss, focusing on an open-source finite element solver for collision, impact, and highly non-linear dynamic simulations. The project maintains OpenRadioss's GNI AGPLv3 license and will operate as part of the Rocky Enterprise Software Foundation (RESF). Although OpenCourant successfully inherited OpenRadioss's codebase, the community currently faces a challenge: some OpenRadioss components rely on binary dependencies for which the latest version is unavailable since Siemens removed the repository. The launch of OpenCourant brings new hope for open-source development in this domain and is expected to continue developing with community support.",
    tags_en: ["OpenRadioss", "OpenCourant", "Rocky Linux", "Finite Element Solver", "RESF", "Open-Source Project"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenRadioss-OpenCourant", lang: "EN" }
    ]
  },
  {
    id: "20261004-14609",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 MGLRU-FG 補丁提升記憶體管理效率，效能提升高達 40%",
    summary: "本篇介紹 Linux 核心開發者 Kairui Song 發布的 MGLRU-FG 補丁，旨在進一步優化 Linux 系統的記憶體管理機制。MGLRU-FG 代表「頻率引導的 MGLRU 提升」，它在 MGLRU 原有的淘汰時間（eviction-time）和 PID 保護機制上，增加了基於存取時間（access-time）的頻率引導提升。該補丁透過引入更精確的位元定義（如 LRU_REFS_WORKINGSET 等）和統一的輔助函數，使系統能夠更主動地提升熱點工作集（hotter workingset）的記憶體頁面，而非僅等待 PID 控制器觸發。實測結果顯示，在不同工作負載下，系統效能有顯著提升，例如 Linux 核心建構測試速度提升，MongoDB 效能提升 13.5%，使用 zRAM 的 Chromium 和 Node.js 測試甚至看到高達 76% 的改善，FIO 吞吐量也提升了高達 11%。這些改進顯示了 MGLRU-FG 在提升系統整體效能和降低頁面錯誤（refault）方面的巨大潛力，特別是在記憶體壓力較大的環境下。開發者建議此功能目前已非常穩定可用，但由於其對 LRU 機制的重大變更，仍建議以 RFC 方式推進。",
    tags: ["Linux 核心", "MGLRU-FG", "記憶體管理", "LRU", "Kairui Song", "性能優化"],
    title_en: "Linux Kernel MGLRU-FG Patch Boosts Memory Management Efficiency, Improving Performance by Up to 40%",
    summary_en: "This article introduces the MGLRU-FG patch released by Linux kernel developer Kairui Song, which aims to further optimize the memory management mechanism of the Linux system. MGLRU-FG stands for \"Frequency-Guided MGLRU Enhancement.\" It enhances the existing MGLRU's eviction-time and PID protection mechanisms by adding frequency-guided improvements based on access-time. The patch introduces more precise bit definitions (such as LRU_REFS_WORKINGSET) and unified helper functions, allowing the system to proactively boost memory pages for hotter workingsets, rather than solely waiting for a PID controller trigger. Empirical results show significant system performance improvements under various workloads. For instance, the Linux kernel build test speed improved, MongoDB performance increased by 13.5%, and tests using zRAM with Chromium and Node.js even saw improvements of up to 76%, while FIO throughput increased by up to 11%. These improvements demonstrate MGLRU-FG's immense potential in boosting overall system efficiency and reducing page faults, especially in environments with high memory pressure. The developer suggests that this feature is currently very stable and available, but due to its major changes to the LRU mechanism, it is still recommended to proceed via RFC.",
    tags_en: ["Linux Kernel", "MGLRU-FG", "Memory Management", "LRU", "Kairui Song", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-MGLRU-FG-Patches", lang: "EN" }
    ]
  },
  {
    id: "20261004-14610",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 測試報告：Wayland 與 X.Org 延遲表現接近，VRR 顯著提升響應性",
    summary: "NVIDIA 在 XDC 2026 大會上發表了關於 X.Org 與 Wayland 延遲的科學測試結果。這兩個議題一直是 Linux 桌機愛好者熱議的焦點，爭論點在於哪種顯示協定能提供最低的延遲。NVIDIA 工程師 Kamil Łysik 進行了從按鍵輸入到螢幕呈現的端到端延遲比較，使用了微控制器和光感測器進行精準測量。\n\n測試使用了 NVIDIA GeForce RTX 5070 顯示卡，搭配 R610 驅動分支，分別在 KDE KWin 6.7.4、GNOME Mutter 49.7 以及 X.Org Server v1.21.1.24 環境下進行。測試結果顯示，X.Org 和 Wayland 之間的延遲表現非常接近，難以判定明確的勝者。然而，報告指出幾個重要發現：首先，XWayland 已不再像過去那樣引入額外的畫面延遲；其次，變動刷新率（Variable Refresh Rate, VRR）被測量出能「大幅改善」響應性，並在 X.Org 和 Wayland 兩種會話中都提供了大致相同的低延遲體驗。這顯示了現代顯示技術在提升使用者體驗上的進展。",
    tags: ["NVIDIA", "Wayland", "X.Org", "Linux", "KDE KWin", "GNOME Mutter", "VRR"],
    title_en: "NVIDIA Test Report: Wayland and X.Org Latency Performance Are Comparable, VRR Significantly Improves Responsiveness",
    summary_en: "At the XDC 2026 conference, NVIDIA presented scientific test results comparing the latency of X.Org and Wayland. These two topics have long been points of intense discussion among Linux desktop enthusiasts, particularly regarding which display protocol can provide the lowest latency. NVIDIA engineer Kamil Łysik conducted an end-to-end latency comparison, measuring the time from key input to screen display using microcontrollers and optical sensors. The tests were conducted using the NVIDIA GeForce RTX 5070 graphics card, paired with the R610 driver branch, across environments including KDE KWin 6.7.4, GNOME Mutter 49.7, and X.Org Server v1.21.1.24. The results showed that the latency performance between X.Org and Wayland is very close, making it difficult to declare a clear winner. However, the report highlighted several key findings: First, XWayland no longer introduces the additional screen delay it once did; second, Variable Refresh Rate (VRR) was measured to 'significantly improve' responsiveness, providing a similarly low-latency experience in both X.Org and Wayland sessions. This demonstrates the progress of modern display technologies in enhancing user experience.",
    tags_en: ["NVIDIA", "Wayland", "X.Org", "Linux", "KDE KWin", "GNOME Mutter", "VRR"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Wayland-Xorg-Latency", lang: "EN" }
    ]
  },
  {
    id: "20261004-14611",
    trackers: ["os"],
    category: "Linux",
    title: "富士通 MONAKA CPU 支援：Linux 核心發布多項修補程式，解決 TLBI、PMU 溢位與核心掛起等硬體 Bug",
    summary: "富士通（Fujitsu）宣布其 MONAKA 晶片為一款專為 AI 基礎設施設計的 144 核心 Arm 架構伺服器處理器。隨著 MONAKA 晶片正式亮相，Linux 核心社群開始針對其硬體 Bug 推出多項修補程式。這些修補程式透過更新 Linux 核心的 CPU 類型偵測機制來支援 MONAKA。主要的修補內容包括：第一，針對範圍式 TLBI（Translation Lookaside Buffer Invalidations）操作可能無法完全清除 TLB 條目，需額外發出 TLBI 指令；第二，修復了 PMU（Performance Monitoring Unit）溢位可能被錯誤偵測，進而導致系統發生中斷風暴（interrupt storm）；第三，解決了在特定時序條件下（如與高優先級中斷競爭）可能導致 CPU 核心掛起（CPU core hang）的問題。文章建議使用 64K 核心的 Linux 支援，以優化性能。這些修補程式對於確保 MONAKA 在 Linux 環境下的穩定性和性能至關重要。",
    tags: ["Fujitsu", "MONAKA", "Linux 核心", "Arm64", "TLBI", "PMU", "伺服器"],
    title_en: "Fujitsu MONAKA CPU Support: Linux Kernel Releases Multiple Patches Addressing Hardware Bugs like TLBI, PMU Overflow, and Core Hangs",
    summary_en: "Fujitsu announced that its MONAKA chip is a 144-core Arm architecture server processor designed specifically for AI infrastructure. With the official debut of the MONAKA chip, the Linux kernel community has begun releasing multiple patches to support its hardware. These patches update the Linux kernel's CPU type detection mechanism to support MONAKA. The main fixes include: First, addressing the need for an additional TLBI instruction because range-based Translation Lookaside Buffer Invalidations may not fully clear TLB entries; second, fixing potential incorrect detection of PMU (Performance Monitoring Unit) overflow, which could lead to an interrupt storm; and third, resolving an issue that could cause CPU core hangs under specific timing conditions (such as contention with high-priority interrupts). The article recommends using Linux support for 64K cores to optimize performance. These patches are crucial for ensuring the stability and performance of MONAKA in a Linux environment.",
    tags_en: ["Fujitsu", "MONAKA", "Linux Kernel", "Arm64", "TLBI", "PMU", "Server"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-MONAKA-CPU-Workarounds", lang: "EN" }
    ]
  },
  {
    id: "20261004-14612",
    trackers: ["os"],
    category: "Linux",
    title: "AMD為Linux 7.4發布GPU驅動更新：支援VPE 3.0等新硬體IP，並修復多項核心錯誤",
    summary: "AMD針對Linux 7.4核心週期，透過AMDGPU驅動程式發布了新的功能和修復。本次更新主要包含多個新硬體IP區塊的支援，例如Video Processing Engine (VPE) 3.0，這代表了該影像處理引擎的重大版本提升。此外，還新增了Display Core Next (DCN) 6.0、AMD GFX 12.1、SMU 15等新IP區塊的支援，並更新了HDMI 2.1功能和運行時電源管理。驅動程式也修復了多個核心錯誤，包括HDMI RGB範圍限制、eDP ASSR、GPUVM等。除了Linux平台，舊版Radeon核心驅動程式甚至為在Sun/Oracle SPARC64舊硬體上運行提供了修復。這些更新對於使用最新AMD GPU硬體和追求最佳能效的開發者和系統管理員至關重要。",
    tags: ["AMD", "AMDGPU", "Linux 7.4", "VPE 3.0", "GPU驅動", "DRM"],
    title_en: "AMD Releases GPU Driver Update for Linux 7.4: Supports New Hardware IPs like VPE 3.0 and Fixes Multiple Kernel Bugs",
    summary_en: "AMD has released new features and fixes via the AMDGPU driver targeting the Linux 7.4 kernel cycle. This update primarily includes support for multiple new hardware IP blocks, such as Video Processing Engine (VPE) 3.0, which represents a major version upgrade for the image processing engine. Additionally, it adds support for new IP blocks like Display Core Next (DCN) 6.0, AMD GFX 12.1, and SMU 15, while updating HDMI 2.1 functionality and runtime power management. The driver also fixes several kernel bugs, including those related to HDMI RGB range limitations, eDP ASSR, and GPUVM. Beyond the Linux platform, the older Radeon kernel driver also provides fixes for running on legacy Sun/Oracle SPARC64 hardware. These updates are crucial for developers and system administrators utilizing the latest AMD GPU hardware and aiming for optimal power efficiency.",
    tags_en: ["AMD", "AMDGPU", "Linux 7.4", "VPE 3.0", "GPU Driver", "DRM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/More-AMDGPU-Linux-7.4", lang: "EN" }
    ]
  },
  {
    id: "20261004-14613",
    trackers: ["os"],
    category: "Linux",
    title: "openSUSE 整合 ZUPT 支援後量子加密備份，強化系統資料長期安全性",
    summary: "openSUSE 開發者宣布將 ZUPT 這款開源工具整合至其 Linux 發行版，作為提供後量子備份的解決方案。ZUPT 是一個整合了備份建立、壓縮、完整性驗證和加密的單一工具。該工具提供基於 AES-256 的加密，並採用了結合 ML-KEM-768 + X25519 的混合加密方案。此舉旨在確保 ZUPT 備份能夠抵抗未來潛在的密碼學威脅。ZUPT 利用 CPU 多執行緒來加速備份、壓縮和加密過程。openSUSE 已將 ZUPT 納入 openSUSE Factory，使其成為 openSUSE 生態系統中系統備份生命週期（從壓縮到加密保護）的官方整合解決方案。使用者可透過 openSUSE 官方網站或 ZUPT 的 GitHub 獲取更多資訊。",
    tags: ["openSUSE", "ZUPT", "後量子加密", "Linux 備份", "AES-256", "ML-KEM-768"],
    title_en: "openSUSE Integrates ZUPT for Post-Quantum Encrypted Backup, Enhancing Long-Term System Data Security",
    summary_en: "openSUSE developers announced the integration of ZUPT, an open-source tool, into their Linux distribution to provide a post-quantum backup solution. ZUPT is a single tool that integrates backup creation, compression, integrity verification, and encryption. The tool offers AES-256 encryption and utilizes a hybrid encryption scheme combining ML-KEM-768 + X25519. This initiative aims to ensure that ZUPT backups can withstand potential future cryptographic threats. ZUPT leverages CPU multi-threading to accelerate the backup, compression, and encryption processes. openSUSE has incorporated ZUPT into openSUSE Factory, making it the official integrated solution for system backup lifecycle (from compression to encrypted protection) within the openSUSE ecosystem. Users can find more information on the official openSUSE website or ZUPT's GitHub.",
    tags_en: ["openSUSE", "ZUPT", "Post-Quantum Cryptography", "Linux Backup", "AES-256", "ML-KEM-768"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/openSUSE-ZUPT-Backups", lang: "EN" }
    ]
  },
  {
    id: "20261004-14614",
    trackers: ["os"],
    category: "Linux",
    title: "Arm 正在開發 TLBID 功能，旨在提升 Linux 核心在多核心系統上的效能",
    summary: "Arm 公司正在為 Linux 核心開發支援 TLBID（Translation Lookaside Buffer Invalidation Domains）功能。TLBID 是一種新的 Arm 架構能力，旨在提高高核心數系統的效能。傳統的 TLB 無效化（invalidation）需要系統級操作，而 TLBID 允許僅對 CPU 核心的子集執行 TLB 無效化，而非整個系統。這項優化將透過 Linux 核心的底層整合，確保 TLBI 指令僅發送到特定程序運行的 CPU，從而避免為整個系統清除 TLB 所產生的額外開銷。這對於高核心數的 Arm 伺服器處理器尤其有益。目前該功能尚未納入 Arm 架構參考手冊，且未公布具體效能數據，但其支援的開發工具鏈包括 LLVM 23 及更新版本，或 GNU Binutils 2.46 及更新版本。",
    tags: ["Arm", "Linux 核心", "TLBID", "ARM64", "LLVM", "伺服器"],
    title_en: "Arm Developing TLBID Feature to Enhance Linux Kernel Performance on Multi-Core Systems",
    summary_en: "Arm is developing support for TLBID (Translation Lookaside Buffer Invalidation Domains) within the Linux kernel. TLBID is a new Arm architecture capability designed to boost the performance of high-core count systems. Traditional TLB invalidation requires system-level operations, while TLBID allows invalidation to be executed only on a subset of CPU cores, rather than the entire system. This optimization will be integrated into the Linux kernel's low-level components, ensuring that the TLBI instruction is sent only to the CPU running the specific process, thereby avoiding the overhead of clearing the TLB across the entire system. This is particularly beneficial for high-core count Arm server processors. While this feature has not yet been included in the Arm architecture reference manual, nor are specific performance metrics available, the supporting development toolchain includes LLVM 23 and newer versions, or GNU Binutils 2.46 and newer versions.",
    tags_en: ["Arm", "Linux Kernel", "TLBID", "ARM64", "LLVM", "Server"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ARM64-Linux-TLBI-Domains", lang: "EN" }
    ]
  },
  {
    id: "20261004-14659",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 重現 Aero Shake 功能：教您如何啟用「標題列視窗晃動」快速聚焦工作窗口",
    summary: "本文介紹了 Windows 11 系統中復活的「Title bar window shake」（標題列視窗晃動）功能，這是源自 Windows 7 的 Aero 特性。此功能允許使用者透過抓住目標視窗的標題列，並快速左右晃動滑鼠，即可將所有其他開啟的應用程式視窗最小化，從而幫助使用者快速聚焦於當前工作窗口。該功能目前預設是關閉的，使用者可以在「設定」>「系統」>「多工處理」中手動啟用。作者強調，相較於傳統的 Win+D 或顯示桌面按鈕，Aero Shake 更具針對性，能確保工作窗口保持活躍，達到更佳的專注效果。這項功能雖然名稱和機制有所改變，但體現了 Microsoft 在系統介面設計上對提升使用者工作效率的持續關注。",
    tags: ["Windows 11", "Aero Shake", "Title bar window shake", "多工處理", "使用者介面", "Windows 7"],
    title_en: "Recreating the Aero Shake Feature in Windows 11: How to Enable 'Title Bar Window Shake' for Quick Focus",
    summary_en: "This article introduces the revived 'Title bar window shake' feature in Windows 11, an ability originally sourced from the Aero features of Windows 7. This function allows users to grab the title bar of a target window and quickly shake the mouse left and right. This action minimizes all other open application windows, helping the user quickly focus on the current working window. The feature is currently disabled by default and can be manually enabled in 'Settings' > 'System' > 'Multitasking'. The author emphasizes that compared to traditional methods like Win+D or the Show Desktop button, Aero Shake is more targeted, ensuring the working window remains active and achieving better focus. Although the name and mechanism have changed, this feature demonstrates Microsoft's ongoing focus on improving user workflow efficiency through system interface design.",
    tags_en: ["Windows 11", "Aero Shake", "Title bar window shake", "Multitasking", "User Interface", "Windows 7"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/05/windows-7s-aero-shake-never-disappeared-from-windows-11-how-to-enable-it-right-now", lang: "EN" }
    ]
  },
  {
    id: "20261004-14660",
    trackers: ["os"],
    category: "Windows",
    title: "記憶體成本上升促使 Windows 11 進行優化，Microsoft 規劃提升記憶體管理效率",
    summary: "由於電腦記憶體（RAM）成本持續上漲，Microsoft 宣布將「記憶體優化，針對 8GB 及以上配置」列為 Windows 11 的核心開發重點。Microsoft 透過更新記憶體管理器、記憶體壓縮技術，以及優化 WinUI 3 和 WebView2 等核心元件，目標是讓作業系統和應用程式都能更有效率地使用 RAM。\n\nMicrosoft 的策略是讓基礎作業系統保持輕量化，而讓可選功能（如 AI 功能）只在實際使用時才消耗記憶體。此外，WebView2 引擎也已更新，採用更高效的記憶體分配器來減少應用程式和元件的開銷。這些優化旨在應對市場上越來越多採用 8GB 記憶體的 PC 設備，確保 Windows 11 在資源受限的環境下仍能提供良好的效能。\n\n整體而言，這次的優化是應對 AI 帶動的記憶體需求激增，迫使作業系統從過去「多買 RAM」的解決方案，轉向系統層面的效率提升。",
    tags: ["Windows 11", "Microsoft", "記憶體優化", "WinUI 3", "WebView2", "RAM"],
    title_en: "Rising Memory Costs Drive Windows 11 Optimization, Microsoft Plans Enhanced Memory Management Efficiency",
    summary_en: "Due to the continuous increase in computer memory (RAM) costs, Microsoft has announced that \"memory optimization, targeting 8GB and above configurations\" will be a core development focus for Windows 11. Microsoft aims to enable both the operating system and applications to use RAM more efficiently by updating the memory manager, memory compression technology, and optimizing core components like WinUI 3 and WebView2. Microsoft's strategy is to keep the foundational operating system lightweight, allowing optional features (such as AI functionalities) to consume memory only when actively used. Furthermore, the WebView2 engine has been updated to use a more efficient memory allocator, reducing the overhead of applications and components. These optimizations are designed to address the increasing number of PC devices in the market equipped with 8GB of memory, ensuring Windows 11 maintains good performance even in resource-constrained environments. Overall, this optimization effort responds to the surge in memory demands driven by AI, forcing the operating system to shift from a past solution of \"buying more RAM\" to system-level efficiency improvements.",
    tags_en: ["Windows 11", "Microsoft", "Memory Optimization", "WinUI 3", "WebView2", "RAM"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/04/rising-cost-of-memory-microsoft-explains-why-windows-11-will-use-less-ram", lang: "EN" }
    ]
  },
  {
    id: "20261004-14451",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-88779至已知利用漏洞目錄，警告Citrix NetScaler記憶體緩衝區風險",
    summary: "美國網路安全局（CISA）根據積極利用證據，將一項新的漏洞CVE-2026-88779加入其已知利用漏洞（Known Exploited Vulnerabilities, KEV）目錄。該漏洞影響Citrix NetScaler，屬於記憶體緩衝區操作限制不足的類型，被指出是惡意網路行為者常用的攻擊途徑，對聯邦企業構成重大風險。\n\n文章提及的《具約束力的操作指令》（Binding Operational Directive, BOD）26-04，為聯邦民事行政部門（FCEB）機構設立了漏洞管理要求。該指令強調必須優先修補KEV目錄中列出的高風險漏洞，特別是那些在公開資產上、且在利用後可獲得完全控制權的漏洞，並要求機構需檢查在修補前系統是否已被駭客入侵。\n\n雖然BOD 26-04僅適用於FCEB機構，但CISA鼓勵所有組織應採取基於風險的漏洞管理方法，並優先修補KEV目錄中的漏洞。若組織發現未列入KEV目錄但已被利用的漏洞，可透過CISA的提名表單提交審核。",
    tags: ["CISA", "KEV Catalog", "CVE-2026-88779", "Citrix NetScaler", "記憶體緩衝區", "漏洞管理"],
    title_en: "CISA Adds CVE-2026-88779 to Known Exploited Vulnerabilities Catalog, Warning of Citrix NetScaler Memory Buffer Risk",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added a new vulnerability, CVE-2026-88779, to its Known Exploited Vulnerabilities (KEV) catalog based on active exploitation evidence. This vulnerability affects Citrix NetScaler and is classified as an insufficient memory buffer operation restriction, which has been identified as a common attack vector used by malicious threat actors, posing a significant risk to federal enterprises.\n\nThe article mentions Binding Operational Directive (BOD) 26-04, which establishes vulnerability management requirements for Federal Civilian Executive Branch (FCEB) agencies. This directive emphasizes the necessity of prioritizing the patching of high-risk vulnerabilities listed in the KEV catalog, especially those found in public assets that grant full control upon exploitation, and requires agencies to check if their systems have been compromised before patching.\n\nAlthough BOD 26-04 only applies to FCEB agencies, CISA encourages all organizations to adopt a risk-based vulnerability management approach and prioritize patching vulnerabilities listed in the KEV catalog. If an organization discovers a vulnerability that has been exploited but is not listed in the KEV catalog, it can submit it for review via CISA's nomination form.",
    tags_en: ["CISA", "KEV Catalog", "CVE-2026-88779", "Citrix NetScaler", "Memory Buffer", "Vulnerability Management"],
    sources: [
      { name: "CISA KEV Catalog", url: "https://cisa.gov/news-events/alerts/2026/10/04/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" },
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/citrix-patches-netscaler-saml-zero-day-exploited-in-attacks", lang: "EN" }
    ]
  },
  {
    id: "20261004-14477",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "疑似 ShinyHunters 成員 Rey 在約旦被捕，協助 FBI 進行網路犯罪調查",
    summary: "網路安全調查指出，一位自稱「Rey」的嫌疑人，被懷疑是數位勒索集團 ShinyHunters 的成員，已於約旦被當局逮捕。此人真名為 Saif al-Din Khader，據稱已於 2026 年 9 月 29 日被拘留，並正與美國聯邦調查局（FBI）和執法部門合作，協助追查該犯罪集團的其他成員。Rey 此前曾被獨立記者 Brian Krebs 標記為 Scattered LAPSUS$ Hunters (SLH 或 SLSH) 的三名管理員之一，該集團被評估為 Scattered Spider、LAPSUS$ 和 ShinyHunters 的結合體。此外，他過去也曾擔任 Hellcat 勒索軟體集團的資料外洩網站管理員，以及 BreachForums 的管理員。FBI 方面表示，他們正積極與合作夥伴合作，根據此次逮捕取得更多線索，並持續進行調查。這起事件凸顯了網路犯罪集團的持續性與複雜性，顯示其業務模式已發展成一個模組化的系統，從社會工程學獲取初始存取權，到透過共享品牌進行變現。",
    tags: ["ShinyHunters", "Rey", "Saif al-Din Khader", "FBI", "Scattered LAPSUS$", "勒索軟體", "網路犯罪"],
    title_en: "Suspected ShinyHunters Member 'Rey' Arrested in Jordan, Assisting FBI in Cybercrime Investigation",
    summary_en: "Cybersecurity investigations report that a suspect calling himself 'Rey,' suspected to be a member of the digital ransomware group ShinyHunters, has been arrested by local authorities in Jordan. The individual's real name is Saif al-Din Khader. He was reportedly detained on September 29, 2026, and is currently cooperating with the U.S. Federal Bureau of Investigation (FBI) and law enforcement agencies to help track down other members of the criminal group. Rey was previously identified by independent journalist Brian Krebs as one of three administrators of Scattered LAPSUS$ Hunters (SLH or SLSH), a group assessed to be a combination of Scattered Spider, LAPSUS$, and ShinyHunters. Furthermore, he previously served as an administrator for the data leak site of the Hellcat ransomware group, as well as an administrator for BreachForums. The FBI stated that they are actively collaborating with partners to gain more intelligence from this arrest and continue the investigation. This incident highlights the persistence and complexity of cybercrime groups, showing that their business model has evolved into a modular system, ranging from social engineering to gaining initial access, to monetization through shared brands.",
    tags_en: ["ShinyHunters", "Rey", "Saif al-Din Khader", "FBI", "Scattered LAPSUS$", "Ransomware", "Cybercrime"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/shinyhunters-suspect-rey-reportedly.html", lang: "EN" }
    ]
  },
  {
    id: "20261004-14478",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國資安威脅群 TA419 針對美國 AI 專家進行憑證釣魚攻擊",
    summary: "Proofpoint 分析指出，一個被歸類為與中國相關的間諜威脅行為者 TA419，近期正針對美國智庫、大學和法律機構的 AI 專家，執行多輪憑證釣魚活動。攻擊者透過冒充知名經濟學家、AI 政策制定者，甚至模仿 Anthropic 員工，發送如「Request for Feedback on Military Integration of Claude」等主題的釣魚郵件。攻擊流程初期以無害的邀請建立信任，隨後引導目標點擊短網址，進入一個多階段重定向鏈。最終目標是誘騙受害者在完成 Cloudflare Turnstile 驗證後，進入一個 OneDrive 惡意中間人（AitM）釣魚頁面。該頁面利用 Frameless BitB 技術，透過注入腳本和 HTML/CSS/JS 技巧，在不使用 iframe 的情況下偽造一個看似可信的登入介面。TA419 透過客製化的遙測和自動化模組，監控目標的 Microsoft 登入流程，並利用 AitM 代理捕獲憑證資訊，同時將資料轉發至真實的 Microsoft 基礎設施，使得受害者無法察覺異常。為防範此類威脅，建議組織啟用抗釣魚的身份驗證方法，如 Passkey，並提醒目標人員對未經徵詢的主題性聯繫保持高度警惕，並驗證其真實性。",
    tags: ["TA419", "憑證釣魚", "AI 政策", "AitM", "Passkey", "Proofpoint"],
    title_en: "China Cyber Threat Group TA419 Targets US AI Experts with Credential Phishing Attacks",
    summary_en: "Proofpoint analysis indicates that a spy threat actor classified as being associated with China, TA419, has recently been conducting multi-round credential phishing campaigns targeting AI experts at US think tanks, universities, and legal institutions. The attackers send phishing emails with subjects such as \"Request for Feedback on Military Integration of Claude,\" impersonating renowned economists, AI policymakers, and even Anthropic employees. The attack process initially establishes trust using harmless invitations, subsequently guiding the target to click a short URL, which leads to a multi-stage redirection chain. The ultimate goal is to trick the victim into entering a malicious Man-in-the-Middle (AitM) phishing page after completing Cloudflare Turnstile verification. This page utilizes Frameless BitB technology, employing script injection and HTML/CSS/JS techniques to fake a seemingly trustworthy login interface without using an iframe. TA419 monitors the target's Microsoft login process using customized telemetry and automation modules, capturing credential information via the AitM proxy while simultaneously forwarding the data to the genuine Microsoft infrastructure, making the anomaly undetectable to the victim. To guard against such threats, organizations are advised to enable anti-phishing authentication methods, such as Passkey, and to remind personnel to remain highly vigilant regarding unsolicited thematic communications, verifying their authenticity.",
    tags_en: ["TA419", "Credential Phishing", "AI Policy", "AitM", "Passkey", "Proofpoint"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/china-aligned-ta419-targets-us-ai.html", lang: "EN" }
    ]
  },
  {
    id: "20261004-14498",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Thrift 0.25.0 修復 61 個重大漏洞：涵蓋記憶體安全、協議解析與跨語言風險",
    summary: "Apache Thrift 發布了版本 0.25.0，修復了多達 61 個安全漏洞。這些漏洞影響所有早於 0.25.0 的版本，涵蓋了從 Java、Go、C++、PHP 到 Python 等多種語言綁定。漏洞類型極為廣泛，包括但不限於：未經身份驗證的單包資料崩潰（CVE-2026-63772）、協議解析時的緩衝區溢出（如 CVE-2026-66054）、以及多種語言環境下的資源限制檢查不足（如 CVE-2026-82458）。其中，多個高嚴重性（CVSS 4.0 分數高）的漏洞允許遠端攻擊者進行拒絕服務（DoS）或執行未經身份驗證的攻擊。開發者應立即升級至 Apache Thrift 0.25.0，以修補這些廣泛且嚴重的安全缺陷，特別是涉及網路傳輸和協議處理的模組。",
    tags: ["Apache Thrift", "CVE-2026-61373", "CVE-2026-83632", "協議解析", "資安修補", "跨語言安全"],
    title_en: "Apache Thrift 0.25.0 Patches 61 Critical Vulnerabilities: Covering Memory Safety, Protocol Parsing, and Cross-Language Risks",
    summary_en: "Apache Thrift has released version 0.25.0, which patches up to 61 security vulnerabilities. These vulnerabilities affect all versions prior to 0.25.0 and cover multiple language bindings, including Java, Go, C++, PHP, and Python. The vulnerability types are extremely diverse, including but not limited to: unauthenticated single-package data crashes (CVE-2026-63772), buffer overflows during protocol parsing (such as CVE-2026-66054), and insufficient resource limit checks across various language environments (such as CVE-2026-82458). Among these, multiple high-severity vulnerabilities (with high CVSS 4.0 scores) allow remote attackers to perform Denial of Service (DoS) or execute unauthenticated attacks. Developers should immediately upgrade to Apache Thrift 0.25.0 to patch these widespread and severe security flaws, especially those involving network transmission and protocol handling modules.",
    tags_en: ["Apache Thrift", "CVE-2026-61373", "CVE-2026-83632", "Protocol Parsing", "Security Patch", "Cross-Language Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/04/1", lang: "EN" }
    ]
  },
  {
    id: "20261004-14539",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Duo 概念展示：重新定義智慧型手機介面，強調拇指操作的未來趨勢",
    summary: "本文介紹了 Apple 概念機 iPhone Duo 的設計理念，特別關注其外螢幕的應用。該設計重新思考了傳統智慧型手機的介面佈局，旨在讓所有主要的導航元素都能方便地透過拇指觸及。作者認為，iPhone Duo 的外螢幕設計挑戰了傳統將重要功能放置在螢幕頂部的慣例，預示了未來智慧型手機可能朝向更符合人體工學、操作更直覺的方向發展。這代表了人機介面設計的重大變革，強調了用戶操作的便利性與舒適度。",
    tags: ["iPhone Duo", "Apple", "人機介面", "智慧型手機", "UX/UI", "可折疊螢幕"],
    title_en: "iPhone Duo Concept Showcase: Redefining Smartphone Interfaces with a Focus on Thumb-Operable Future Trends",
    summary_en: "This article introduces the design philosophy of the Apple concept device, iPhone Duo, with a particular focus on its external display. The design rethinks the traditional smartphone interface layout, aiming to make all major navigation elements easily accessible via thumb interaction. The author suggests that the iPhone Duo's external display challenges the conventional practice of placing critical functions at the top of the screen, foreshadowing a future direction for smartphones toward more ergonomic and intuitive operation. This represents a significant transformation in Human-Computer Interface (HCI) design, emphasizing user convenience and comfort.",
    tags_en: ["iPhone Duo", "Apple", "Human-Computer Interface", "Smartphone", "UX/UI", "Foldable Display"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/04/iphone-duo-shows-what-the-future-of-smartphones-could-look-like", lang: "EN" }
    ]
  },
  {
    id: "20261004-14542",
    trackers: ["os"],
    category: "Apple",
    title: "Apple CEO John Ternus 深度參與設計團隊，接任 Jony Ive 之後填補設計領導空缺",
    summary: "自 Jony Ive 於 2019 年離開 Apple 之後，公司在設計領導層面曾出現空缺。此前，前營運長 Jeff Williams 曾負責設計工作，但去年也已離職。根據 Bloomberg 的 Mark Gurman 報導指出，現任執行長 John Ternus 近期對 Apple 的兩個設計團隊——工業設計和人機介面，展現出高度的關注與參與。這顯示 Apple 的高層管理層正在更直接地介入產品設計流程，以確保產品設計的連貫性和品質。這項變動對於了解 Apple 未來產品方向和設計哲學的業界人士具有重要參考價值。",
    tags: ["Apple", "John Ternus", "Jony Ive", "工業設計", "人機介面", "Apple 生態系"],
    title_en: "Apple CEO John Ternus Deeply Involved in Design Teams, Filling Design Leadership Void After Jony Ive",
    summary_en: "Since Jony Ive left Apple in 2019, the company has experienced a void in its design leadership. Previously, former COO Jeff Williams handled design responsibilities, but he also departed last year. According to Bloomberg's Mark Gurman, current CEO John Ternus has recently shown high interest and involvement in two Apple design teams: industrial design and user interface (UI). This suggests that Apple's senior management is becoming more directly involved in the product design process to ensure consistency and quality in product design. This change is highly valuable for industry insiders looking to understand Apple's future product direction and design philosophy.",
    tags_en: ["Apple", "John Ternus", "Jony Ive", "Industrial Design", "User Interface", "Apple Ecosystem"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/04/john-ternus-is-taking-a-more-hands-on-role-in-apples-design-teams-as-ceo-report", lang: "EN" }
    ]
  },
  {
    id: "20261004-14543",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果MacBook Pro傳將進行重大重新設計，預計搭載觸控螢幕與Tandem OLED，並大幅減輕重量",
    summary: "根據報導，蘋果下一代MacBook Pro預計將進行一次重大的全面升級，並可能在不久後推出。這款新機型預計將是蘋果首款搭載觸控螢幕的MacBook，同時也將採用Tandem OLED顯示技術。除了這些技術革新外，報導指出新MacBook Pro的設計重點之一是「顯著」減輕機身重量，使其比前代產品更輕巧。這項資訊來自Power On的最新電子報，預示著蘋果在筆電設計和顯示技術上將迎來重大變革。目前文章僅為傳聞報導，未提供具體的技術細節、CVE 或修補建議，因此無法提供實務修補指引。",
    tags: ["Apple", "MacBook Pro", "Tandem OLED", "觸控螢幕", "MacBook"],
    title_en: "Apple MacBook Pro rumored for major redesign, expected to feature touchscreen and Tandem OLED, with significant weight reduction",
    summary_en: "According to reports, Apple's next-generation MacBook Pro is anticipated to undergo a major overhaul and may be released soon. This new model is expected to be Apple's first MacBook equipped with a touchscreen and utilizing Tandem OLED display technology. In addition to these technological innovations, reports indicate that a key design focus for the new MacBook Pro is a 'significant' reduction in body weight, making it lighter than its predecessor. This information comes from the latest Power On newsletter, suggesting major changes in Apple's laptop design and display technology. As this article is currently only a rumor report and does not provide specific technical details, CVEs, or patch recommendations, practical remediation guidance cannot be offered.",
    tags_en: ["Apple", "MacBook Pro", "Tandem OLED", "Touchscreen", "MacBook"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/04/apple-macbook-pro-redesign-to-be-much-lighter-report", lang: "EN" }
    ]
  },
  {
    id: "20261004-14505",
    trackers: ["security"],
    category: "開源影響",
    title: "티오리（Tiori）透過「Project Canopy」推動AI時代開源供應鏈安全，推動協調式漏洞揭露（CVD）標準化",
    summary: "本文報導了티오리（Tiori）代表박세준，針對AI時代快速升級的網路威脅，呼籲業界必須迅速轉型安全體系。他透過「Project Canopy」這個私營AI安全研討會，專注於檢測廣泛使用的開源專案，旨在建立一個保護所有使用這些開源資源的組織的生態系統。Project Canopy已成功使用AI自動分析工具，對韓國電子政府標準框架識別並修補了大量漏洞。此外，티오리也利用其AI程式碼分析解決方案「Xint Code」發現了Linux漏洞「CopyFail」，並成功在Apple OS發現漏洞並促成修補。這些實例展示了透過「協調式漏洞揭露」（CVD）來標準化安全活動的價值。CVD是一種跨國界、合作性的安全活動，指在發現漏洞後，先進行修復和應對，再公開技術細節，讓其他防禦者參考。文章強調，面對AI自動化和普及化的攻擊，業界必須建立一個合作的生態系統，並從「預防」轉向「快速偵測與最小化擴散」的縱深防禦體系。",
    tags: ["Tiori", "Project Canopy", "AI", "CVD", "開源專案", "供應鏈安全", "漏洞揭露"],
    title_en: "Tiori Drives Open-Source Supply Chain Security and Coordinated Vulnerability Disclosure (CVD) Standardization in the AI Era via 'Project Canopy'",
    summary_en: "This article reports that Tiori's representative, Park Se-jun, called for the industry to rapidly transform its security systems in response to rapidly escalating cyber threats in the AI era. Through a private AI security seminar called 'Project Canopy,' he focused on detecting vulnerabilities in widely used open-source projects, aiming to establish an ecosystem that protects all organizations utilizing these open-source resources. Project Canopy successfully used AI automated analysis tools to identify and patch numerous vulnerabilities in the Korean electronic government standard framework. Furthermore, Tiori utilized its AI code analysis solution, 'Xint Code,' to discover the Linux vulnerability 'CopyFail,' and successfully found and prompted the patching of a vulnerability in Apple OS. These examples demonstrate the value of standardizing security activities through 'Coordinated Vulnerability Disclosure' (CVD). CVD is a cooperative, cross-border security activity that involves patching and responding to a vulnerability before publicly disclosing technical details, allowing other defenders to reference the information. The article emphasizes that facing AI-driven and pervasive attacks, the industry must build a collaborative ecosystem and transition from a focus on 'prevention' to a deep defense system centered on 'rapid detection and minimizing spread.'",
    tags_en: ["Tiori", "Project Canopy", "AI", "CVD", "Open-Source Projects", "Supply Chain Security", "Vulnerability Disclosure"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146126", lang: "EN" }
    ]
  },
  {
    id: "20261004-14508",
    trackers: ["security"],
    category: "開源影響",
    title: "金融業面臨連環駭客攻擊：KISA建議企業應強化API與內部系統防護",
    summary: "近期韓國金融業持續遭受駭客攻擊，從新韓銀行（洩露約 2.5 萬名客戶資訊）到 KB國民銀行、韓亞銀行、釜山銀行等多家金融機構接連發生資訊外洩事件。這顯示了整個金融產業正處於擴散的威脅之中。為應對此危機，韓國資訊安全機構 KISA 發布了「近期網路攻擊防範企業安全強化建議」。KISA建議企業應優先檢查 Web 與 API 漏洞，以及身份驗證資訊的洩露情況。具體措施包括：確保 Web/API 服務能獨立驗證每個請求的執行權限，防止透過變造 ID 或文件編號查詢其他用戶資訊；對管理員和遠端存取帳號全面實施多因素驗證（MFA）；並要求立即廢棄或更換儲存在程式碼庫或設定檔中的 API Key 和驗證 Token，同時對外部合作帳號實施最小權限原則。此外，應限制服務帳號權限，並持續監控內部網路的異常活動，例如非正常命令執行、內部系統偵測、以及大量資料的異常傳輸或日誌刪除。",
    tags: ["KISA", "金融業", "API 漏洞", "MFA", "資訊安全", "網路攻擊"],
    title_en: "Financial Sector Faces Chain Cyber Attacks: KISA Recommends Strengthening API and Internal System Defenses",
    summary_en: "The Korean financial sector has recently been subjected to continuous cyberattacks, with multiple financial institutions—including Shinhan Bank (which leaked information for approximately 25,000 customers), KB Kookmin Bank, Hana Bank, and Busan Bank—experiencing successive data leakage incidents. This indicates that the entire financial industry is facing widespread threats. To address this crisis, the Korea Internet & Security Agency (KISA) issued 'Recommendations for Corporate Security Enhancement Against Recent Cyber Attacks.' KISA advises companies to prioritize checking Web and API vulnerabilities, as well as the leakage status of identity authentication information. Specific measures include: ensuring that Web/API services independently validate the execution authority for every request to prevent querying other users' information through manipulated IDs or document numbers; implementing multi-factor authentication (MFA) across all administrator and remote access accounts; and requiring the immediate disposal or replacement of API Keys and authentication Tokens stored in code repositories or configuration files, while also applying the principle of least privilege to external partner accounts. Furthermore, service account permissions should be restricted, and continuous monitoring of internal network activity is necessary, such as abnormal command execution, internal system detection, and unusual data transmission or log deletion.",
    tags_en: ["KISA", "Financial Sector", "API Vulnerability", "MFA", "Information Security", "Cyberattack"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146189", lang: "EN" }
    ]
  },
  {
    id: "20261004-14519",
    trackers: ["os"],
    category: "Android",
    title: "回顧十年 Pixel 歷程：從 HTC 合作到 AI 拍照主導，Google 探索行動裝置的演進",
    summary: "本文回顧了 Google Pixel 系列手機十年的發展歷程，探討了其從早期與 HTC 合作的 Pixel (2016) 到後續的迭代過程。早期 Pixel 的核心差異化優勢在於其內建的 Google Assistant 整合和 HDR+ 影像處理流程。Pixel 2 系列引入了 Pixel Visual Core，並首次實現了單鏡頭人像模式。Pixel 3 系列則確立了 AI 拍照的領先地位，特別是透過軟體更新帶來的 Night Sight 功能，徹底改變了低光攝影。然而，Pixel 4 系列的設計和規格（如 Project Soli 雷達）被認為過於激進，導致市場接受度不佳。隨後，Google 透過 Pixel 4a 和 Pixel 5 系列進行了調整，Pixel 5 雖然未採用頂級晶片，但成功恢復了可靠的電池續航和更均衡的設計。整體而言，Pixel 的發展軌跡顯示，其核心競爭力始終圍繞在軟體、AI 增強功能和攝影體驗的創新。",
    tags: ["Google Pixel", "Android", "AI 攝影", "Pixel Visual Core", "Night Sight", "行動裝置"],
    title_en: "A Decade in Review: The Pixel Journey – From HTC Collaboration to AI Photography Leadership, Google Explores Mobile Device Evolution",
    summary_en: "This article reviews the ten-year development history of the Google Pixel series, exploring its journey from the early Pixel (2016), which collaborated with HTC, through subsequent iterations. The core differentiating advantage of early Pixels lay in their integrated Google Assistant and HDR+ image processing pipeline. The Pixel 2 series introduced the Pixel Visual Core and pioneered single-lens portrait mode. The Pixel 3 series established a leadership position in AI photography, particularly with the Night Sight feature delivered via software updates, which fundamentally changed low-light photography. However, the design and specifications of the Pixel 4 series (such as the Project Soli radar) were considered too radical, leading to poor market acceptance. Subsequently, Google adjusted its approach with the Pixel 4a and Pixel 5 series. Although the Pixel 5 did not utilize a flagship chip, it successfully restored reliable battery life and a more balanced design. Overall, the Pixel's development trajectory shows that its core competitive strength has always revolved around software, AI-enhanced features, and innovative camera experiences.",
    tags_en: ["Google Pixel", "Android", "AI Photography", "Pixel Visual Core", "Night Sight", "Mobile Devices"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/04/google-pixel-at-10-successes-failures-and-fun-along-the-way-video", lang: "EN" }
    ]
  },
  {
    id: "20261004-14520",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 紀念十週年：回顧其發展歷程與持續的產品影響力",
    summary: "本文為一篇紀念 Google Pixel 首次發布十週年的文章，回顧了 Pixel 智慧型手機的發展歷程。文章內容主要著重於產品的歷史回顧與品牌影響力，並未提及任何特定的資安漏洞、技術細節（如 CVE 或 CVSS 分數）或修補建議。因此，本摘要僅能概述其紀念性質，指出 Pixel 產品線自推出以來持續受到關注，顯示其在行動裝置市場的持續發展與重要性。讀者應關注 Google 官方發布的最新安全更新與產品資訊。",
    tags: ["Google Pixel", "Android", "Google", "產品更新", "行動裝置"],
    title_en: "Google Pixel Marks Decade Anniversary: Reviewing its Development Journey and Continued Product Impact",
    summary_en: "This article commemorates the tenth anniversary of the initial release of the Google Pixel, reviewing the development history of the Pixel smartphone. The content primarily focuses on product historical review and brand influence, and does not mention any specific security vulnerabilities, technical details (such as CVE or CVSS scores), or patching recommendations. Therefore, this summary can only outline its commemorative nature, pointing out that the Pixel product line has continuously garnered attention since its launch, demonstrating its ongoing development and importance in the mobile device market. Readers should monitor official Google announcements for the latest security updates and product information.",
    tags_en: ["Google Pixel", "Android", "Google", "Product Updates", "Mobile Devices"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/04/google-pixel-10-years-old", lang: "EN" }
    ]
  },
  {
    id: "20261004-14467",
    trackers: ["security"],
    category: "前瞻技術",
    title: "川普任命 Jay Clayton 領導新聯邦 AI 任務小組，旨在推動美國「超級智慧」領先全球",
    summary: "前總統川普宣布，他已任命國家情報總監 Jay Clayton 領導一個新的政府人工智慧（AI）任務小組，並將其稱為「超級智慧力量」（Super Intelligence Force）。此舉發生在川普近期召集多家 AI 公司高層於白宮，並宣稱他們簽署了自願協定，旨在自我規範技術發展。該任務小組的目標是協調聯邦層面的努力，確保美國在「超級智慧」領域保持全球領先地位，並保護美國公民的利益。根據川普的說法，該小組將與消費者、公眾利益團體、宗教組織、關鍵基礎設施提供者以及 AI 公司進行溝通。任務小組成員還包括聯邦貿易委員會主席 Andrew Ferguson、五角大樓首席技術官 Emil Michael，以及人力資源管理辦公室主任 Scott Kupor。該小組將直接向川普和他的幕僚長 Susie Wiles 報告。",
    tags: ["Jay Clayton", "人工智慧", "AI", "聯邦政府", "超級智慧", "美國政策"],
    title_en: "Trump Appoints Jay Clayton to Lead New Federal AI Task Force to Advance US 'Super Intelligence' Leadership",
    summary_en: "Former President Trump announced that he has appointed National Intelligence Director Jay Clayton to lead a new government artificial intelligence (AI) task force, which he has named the 'Super Intelligence Force.' This move follows Trump's recent gathering of high-level executives from multiple AI companies at the White House, where he claimed they signed a voluntary agreement aimed at self-regulating technological development. The task force's goal is to coordinate federal efforts to ensure the United States maintains global leadership in the 'super intelligence' domain and protects the interests of American citizens. According to Trump, the task force will engage with consumers, public interest groups, religious organizations, critical infrastructure providers, and AI companies. Task force members also include Federal Trade Commission Chairman Andrew Ferguson, Pentagon Chief Technology Officer Emil Michael, and Director of Human Resources Management Office Scott Kupor. The group will report directly to Trump and his Chief of Staff, Susie Wiles.",
    tags_en: ["Jay Clayton", "AI", "Federal Government", "Super Intelligence", "US Policy"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/trump-names-national-intelligence-director-jay-clayton-to-lead-a-new-federal-ai-task-force", lang: "EN" }
    ]
  },
  {
    id: "20261004-14494",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Anthropic 要求 Claude 用戶自願分享語音數據，用於提升 AI 模型訓練能力",
    summary: "AI 巨頭 Anthropic 近期在 Claude 的語音功能中，開始要求用戶自願分享其語音對話數據，以用於訓練和改進其 AI 模型。當用戶使用語音功能時，系統會彈出提示，明確詢問是否允許 Anthropic 使用語音數據進行 AI 訓練，並說明這有助於模型更好地理解和回應語音內容。值得注意的是，這項數據分享是完全可選的，用戶可以在設定中選擇「允許」或「不允許」，甚至可以透過專門的開關來控制。此外，語音數據的訓練選項與 Anthropic 既有的聊天記錄和程式碼會話數據訓練選項是分開的，這賦予了用戶高度的控制權。目前該設定預設為關閉狀態，用戶隨時可以更改或刪除已分享的語音數據。",
    tags: ["Anthropic", "Claude", "語音數據", "AI 模型訓練", "隱私權", "前瞻技術"],
    title_en: "Anthropic Requests Claude Users to Voluntarily Share Voice Data for AI Model Training",
    summary_en: "AI giant Anthropic has recently begun requesting users to voluntarily share their voice conversation data from Claude's voice functionality, for the purpose of training and improving its AI models. When users utilize the voice feature, a prompt appears, explicitly asking if they allow Anthropic to use the voice data for AI training, and explaining that this helps the model better understand and respond to voice content. Notably, this data sharing is completely optional; users can choose to 'Allow' or 'Do Not Allow' in the settings, and can even control it through a dedicated toggle. Furthermore, the voice data training option is separate from Anthropic's existing options for training on chat history and code conversation data, granting users high levels of control. Currently, this setting is defaulted to 'Off,' and users can change it or delete previously shared voice data at any time.",
    tags_en: ["Anthropic", "Claude", "Voice Data", "AI Model Training", "Privacy", "Emerging Technology"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/artificial-intelligence/anthropic-asks-claude-users-to-share-voice-data-for-ai-model-training", lang: "EN" }
    ]
  },
  {
    id: "20261004-14506",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "韓國網信院（KISA）啟動緊急應對機制，加強金融領域駭客攻擊防禦與資訊共享",
    summary: "針對近期發生的金融領域駭客攻擊事件，韓國科學技術情報通信部（과기정통부）宣布與韓國資訊安全院（KISA）啟動緊急應對體系。由於金融領域的駭客攻擊主要由金融委員會、金融監督院和金融安全院等機構負責，過기정통部和KISA的重點是防止攻擊擴散至民間領域，並預防額外損失。KISA透過強化其網路入侵應對中心（KISC）的應對體系，加強了對主要企業網站的監控，並增強了事件應對人力。此外，他們透過「保護國家」和網路威脅情報分析與共享體系（C-TAS）等平台，提供「近期網路攻擊防範企業安全強化建議」等網路威脅資訊，並向約2.8萬家已申報資訊安全長官（CISO）的公司發送了安全檢查建議郵件。對於金融安全院確認的海外攻擊來源IP位址，也已向雲端服務提供商提供威脅資訊，並要求採取惡意行為阻斷等措施。過기정통部和KISA承諾將持續與金融委員會等相關機構共享資訊，並準備隨時支援現場調查。",
    tags: ["KISA", "과기정통부", "金融駭客攻擊", "網路安全", "KISC", "C-TAS"],
    title_en: "Korea's KISA Activates Emergency Response Mechanism to Enhance Defense and Information Sharing Against Financial Sector Cyber Attacks",
    summary_en: "In response to recent cyber attacks targeting the financial sector, the Ministry of Science and ICT (MSIT) announced the activation of an emergency response system with the Korea Internet & Security Agency (KISA). Given that the financial sector is primarily managed by institutions such as the Financial Services Commission (FSC), the Financial Supervisory Service (FSS), and the Korea Financial Security Institute (KFSI), the focus of MSIT and KISA is to prevent attacks from spreading into the private sector and to prevent additional losses. KISA has strengthened its monitoring of major corporate websites by enhancing its Korea Incident Cyber Defense Center (KISC) response system and augmenting its incident response personnel. Furthermore, through platforms such as the 'Protecting the Nation' initiative and the Cyber Threat Analysis and Sharing System (C-TAS), they provided cyber threat intelligence, including 'Recommendations for Strengthening Corporate Security Against Recent Cyber Attacks,' and sent security check recommendation emails to approximately 28,000 companies with registered Chief Information Security Officers (CISOs). For overseas attack source IP addresses confirmed by the Korea Financial Security Institute, threat information was also provided to cloud service providers, requiring measures such as malicious activity blocking. MSIT and KISA committed to continuously sharing information with relevant organizations, such as the Financial Services Commission, and standing by to support on-site investigations.",
    tags_en: ["KISA", "MSIT", "Financial Cyber Attacks", "Cybersecurity", "KISC", "C-TAS"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146192", lang: "EN" }
    ]
  },
  {
    id: "20261004-14518",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布推出 Fitbit Edge 穿戴裝置：結合 Pixel Watch 介面與 Fitbit 傳統設計",
    summary: "根據零售資產的洩露資訊，Google 正在開發一款名為「Fitbit Edge」的新型穿戴式裝置。這款裝置的螢幕設計與 Pixel Watch 的介面風格相似，但形狀經過調整，用於顯示時間、日期，並結合心率、步數等複雜資訊。其背部配備了類似 Fitbit Air 的感測器堆疊，且兩側設有金屬條，推測用於 ECG 讀數。Fitbit Edge 的規格顯示支援藍牙連接，但未包含 Wi-Fi，並具備通知功能。它支援 Android 和 iOS 系統，電池續航力可達 7 天。該產品的應用程式預計包含 Google 地圖、媒體控制和尋找手機等功能。此資訊主要來自市場洩露，尚未公開正式發布。",
    tags: ["Google", "Fitbit", "Fitbit Edge", "穿戴裝置", "Pixel Watch", "Android", "iOS"],
    title_en: "Google Announces Fitbit Edge Wearable Device: Combining Pixel Watch Interface with Traditional Fitbit Design",
    summary_en: "According to leaked retail assets, Google is developing a new wearable device named \"Fitbit Edge.\" This device features a screen design and interface style similar to the Pixel Watch, but with an adjusted shape for displaying time and date, along with complex information such as heart rate and step count. Its back features a sensor stack similar to the Fitbit Air, and metal strips on both sides are presumed to be for ECG readings. The specifications for the Fitbit Edge indicate support for Bluetooth connectivity but no Wi-Fi, and it includes notification functionality. It supports both Android and iOS operating systems, with a battery life of up to 7 days. The product's applications are expected to include Google Maps, media controls, and phone finding features. This information is primarily based on market leaks and has not been officially released.",
    tags_en: ["Google", "Fitbit", "Fitbit Edge", "Wearable Device", "Pixel Watch", "Android", "iOS"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/10/04/google-fitbit-edge-leak", lang: "EN" }
    ]
  },
  {
    id: "20261004-14507",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "金融委警告金融業：AI駭客攻擊風險高，要求全面升級至零信任安全體系",
    summary: "鑑於近期多家金融機構接連發生資訊洩露事件，金融委員會委員長（이억원）召開緊急檢閱會議，警告金融業面臨利用AI技術進行駭客攻擊的風險。他指出，攻擊目標已不再局限於核心系統，而是包括用於業務的外部網站或伺服器等相對不被關注的「安全盲區」。委員長強調，即使擁有穩固的資安體系，任何未經管理的漏洞都可能成為整體弱點。因此，他要求金融業立即進行全面、徹底的資安檢閱，重點檢查外部暴露的IT資產、服務、身分驗證與存取控制，以及入侵活動偵測系統，並確認必要的安全修補和應對措施是否到位。此外，他特別要求金融機構應積極轉型，建立基於AI的資安體系，並將零信任（Zero Trust）原則納入安全架構的升級中。同時，也要求徹底審查所有外部接觸點和存取路徑，原則上切斷非必要的外部訪問，以預防二次傷害。",
    tags: ["金融委員會", "AI駭客攻擊", "零信任", "資安體系", "金融業", "資訊洩露"],
    title_en: "Financial Commission Warns Financial Sector: High Risk of AI Hacking Attacks, Mandates Full Upgrade to Zero Trust Security Architecture",
    summary_en: "Given the recent spate of information leakage incidents across multiple financial institutions, the Chairman of the Financial Commission (Lee Eok-won) convened an emergency review meeting, warning the financial sector about the risks posed by AI-powered hacking attacks. He pointed out that attack targets are no longer limited to core systems but now include seemingly less critical 'security blind spots,' such as external websites or servers used for business operations. The Chairman emphasized that even with robust cybersecurity systems, any unmanaged vulnerability can become a systemic weakness. Therefore, he mandated that the financial sector immediately conduct a comprehensive and thorough security review, focusing on externally exposed IT assets, services, identity verification and access controls, and intrusion detection systems, and confirming that necessary security patches and response measures are in place. Furthermore, he specifically required financial institutions to proactively transition and establish AI-based security systems, integrating Zero Trust principles into the security architecture upgrade. Concurrently, he demanded a thorough review of all external touchpoints and access paths, mandating the principle of disconnecting unnecessary external access to prevent secondary damage.",
    tags_en: ["Financial Commission", "AI Hacking Attacks", "Zero Trust", "Cybersecurity System", "Financial Sector", "Information Leakage"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146190", lang: "EN" }
    ]
  },
  {
    id: "20261004-14509",
    trackers: ["os", "security"],
    category: "研討活動",
    title: "歐洲執法機構「Operation KillSwitch」成功瓦解駭客組織 KillSec，掌握核心伺服器與數據",
    summary: "歐洲刑警組織（Europol）宣布，透過國際合作調查「Operation KillSwitch」，成功掌握了駭客組織 KillSec 的洩露網站和核心伺服器。該組織據信自 2024 年左右開始活動，主要透過攻擊軟體漏洞、管理不善的存取點，特別是雲端儲存空間，竊取敏感數據，並以勒索方式威脅受害者。根據調查，KillSec 曾與約 1000 起疑似攻擊事件相關，成功攻擊案例約有 500 起，洩露網站上曾列有約 450 個受害者。執法部門已成功接管了 KillSec 的暗網洩露網站，阻止了至少 110TB 數據的進一步存取，並控制了 5 台核心伺服器。此次行動涉及德國、希臘、羅馬尼亞、西班牙、英國等國的警方，並有安全公司支援。當局目前正分析所有沒收的設備和數據，追蹤犯罪所得，並持續追查其他組織成員和受害者。",
    tags: ["Europol", "KillSec", "Operation KillSwitch", "勒索軟體", "數據洩露", "國際刑警"],
    title_en: "European Law Enforcement Agency's 'Operation KillSwitch' Successfully Dismantles Hacker Group KillSec, Seizing Core Servers and Data",
    summary_en: "Europol announced that through an international investigation named 'Operation KillSwitch,' it successfully seized the leaked website and core servers of the hacker group KillSec. The group is believed to have been active since around 2024, primarily stealing sensitive data by exploiting software vulnerabilities and poorly managed access points, particularly cloud storage. They then threatened victims using ransomware. According to the investigation, KillSec was linked to approximately 1,000 suspected attack incidents, with about 500 confirmed successful attacks, and the leaked website listed around 450 victims. Law enforcement successfully seized KillSec's dark web leak site, preventing further access to at least 110TB of data, and took control of 5 core servers. The operation involved police forces from countries including Germany, Greece, Romania, Spain, and the UK, with support from private security companies. Authorities are currently analyzing all seized equipment and data, tracking illicit proceeds, and continuing to pursue other organizational members and victims.",
    tags_en: ["Europol", "KillSec", "Operation KillSwitch", "Ransomware", "Data Leakage", "Interpol"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=146165", lang: "EN" }
    ]
  }
];
