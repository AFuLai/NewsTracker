// data-20260830.js — 2026-08-30
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-30"] = [
  {
    id: "20260830-10149",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSH 服務中的潛在資訊洩漏漏洞",
    summary: "Debian 針對 OpenSSH 服務發布了安全更新，修補了一個潛在的資訊洩漏漏洞。此漏洞可能允許攻擊者在特定條件下，透過 OpenSSH 的某些功能，竊取敏感的系統資訊。雖然文章未提供具體的 CVSS 分數或影響範圍，但這類資訊洩漏漏洞通常被視為高風險，可能導致攻擊者進行進一步的橫向移動或權限提升。建議所有使用 Debian 系統並依賴 OpenSSH 服務的用戶，應立即透過系統更新機制（如 `apt update` 和 `apt upgrade`）修補到最新的安全版本。使用者應確保系統和 OpenSSH 客戶端/伺服器都已更新，以避免遭受此類未經修補的攻擊。本更新屬於核心元件的修補，對系統穩定性影響極小，但修補的時效性至關重要。",
    tags: ["Debian", "OpenSSH", "資訊洩漏", "DSA-6479-1", "Linux 核心"],
    title_en: "Debian Issues Security Advisory: Patching Potential Information Leak Vulnerability in OpenSSH Service",
    summary_en: "Debian has released a security update for the OpenSSH service, patching a potential information leak vulnerability. This vulnerability could potentially allow an attacker, under specific conditions, to steal sensitive system information through certain OpenSSH functionalities. Although the article does not provide a specific CVSS score or impact scope, such information leak vulnerabilities are generally considered high risk, potentially enabling an attacker to perform further lateral movement or privilege escalation. All users running Debian systems and relying on the OpenSSH service are advised to immediately patch to the latest secure version using the system update mechanism (such as `apt update` and `apt upgrade`). Users must ensure that both the system and the OpenSSH client/server are updated to prevent exploitation of this unpatched vulnerability. This update addresses a core component and has minimal impact on system stability, but the timeliness of the patch is critical.",
    tags_en: ["Debian", "OpenSSH", "Information Leak", "DSA-6479-1", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00390.html", lang: "EN" }
    ]
  },
  {
    id: "20260830-10150",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布安全公告 DSA-6478-1，修補了 OpenSSH 服務中一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在特定條件下，無需有效憑證即可執行遠端命令。該漏洞的修補已包含在 Debian 的安全更新中。建議所有使用 Debian 系統的用戶和系統管理員，應立即更新到最新的安全版本，以防止遭受未經授權的遠端存取或執行惡意代碼。本漏洞的具體 CVSS 分數及影響範圍未在公告中詳細說明，但由於涉及核心服務的認證機制，建議用戶高度警惕並儘快修補。修補措施為升級 OpenSSH 相關套件。",
    tags: ["Debian", "OpenSSH", "DSA-6478-1", "認證繞過", "Linux 核心"],
    title_en: "Debian Issues Security Advisory: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6478-1, patching a potential authentication bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote commands without valid credentials under specific conditions. The patch is included in Debian's security updates. All users and system administrators running Debian systems are advised to immediately update to the latest secure version to prevent unauthorized remote access or the execution of malicious code. While the advisory does not detail the specific CVSS score or scope of impact, due to its involvement with the core service's authentication mechanism, users are advised to exercise high vigilance and patch promptly. The remediation involves upgrading the OpenSSH related packages.",
    tags_en: ["Debian", "OpenSSH", "DSA-6478-1", "Authentication Bypass", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00389.html", lang: "EN" }
    ]
  },
  {
    id: "20260830-10156",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.3-rc1 發布，包含大量提交，持續追蹤核心開發進度",
    summary: "Linux 核心開發者 Linus Torvalds 已發布 7.3-rc1 版本，並關閉了本次版本的合併窗口。雖然開發者指出本次版本沒有特別引人注目的重大功能或漏洞，但其提交量非常龐大。在本次合併窗口期間，該版本累積了 15,267 個提交，使其成為有史以來第二繁忙的發布版本，僅次於 6.7 版本。這顯示 Linux 核心的開發活動極為活躍，持續進行大量功能和修復的整合。資安人員應持續關注核心的開發進度與穩定性，以預測未來可能包含的修補與安全改進。",
    tags: ["Linux 核心", "7.3-rc1", "Linus Torvalds", "核心開發"],
    title_en: "Linux Kernel 7.3-rc1 Released with Massive Commits, Tracking Kernel Development Progress",
    summary_en: "Linux kernel developer Linus Torvalds has released the 7.3-rc1 version and has closed the merge window for this release. Although the developer noted that this version does not contain any particularly noticeable major features or vulnerabilities, the sheer volume of commits is massive. During this merge window, the version accumulated 15,267 commits, making it the second busiest release version in history, trailing only the 6.7 version. This indicates that Linux kernel development activity is extremely active, continuously integrating a large amount of features and fixes. Security professionals should continue to monitor the kernel's development progress and stability to anticipate potential future patches and security improvements.",
    tags_en: ["Linux Kernel", "7.3-rc1", "Linus Torvalds", "Kernel Development"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1091421", lang: "EN" }
    ]
  },
  {
    id: "20260830-10177",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3-rc1 核心釋出：支援 AMD Zen 6、Intel Xe3P 及 Btrfs 效能提升",
    summary: "Linux 核心版本 7.3-rc1 已釋出供測試，涵蓋了大量新的硬體支援、檔案系統增強、安全改進等。本次版本的主要亮點包括對 Intel 混合 CPU 的優化、對即將到來的 AMD Zen 6 平台的更多支援，以及提升 Btrfs 的效能。此外，它還支援 Nouveau 對 NVK Vulkan Video 的支援、2026 Valve Steam Controller 的核心驅動，並首次支援 M3 Ultra / Pro / Max 等硬體。在圖形方面，Intel Starfire 和搭載 Nova Lake 的 Intel Xe3P 顯示卡已開箱即用。開發者也關注到 FailFS 的上游化，以及 USB4STREAM 的低延遲模式。本次釋出也包含 Valve 針對極低 vRAM 系統的遊戲體驗改進，同時持續移除過時的硬體驅動。由於本次版本包含了大量的 AMD GPU 暫存器定義（AMD DCN6 register headers），導致本次修補程式的體積較大，但整體而言，核心功能更新豐富，為未來硬體生態系統奠定基礎。",
    tags: ["Linux 7.3", "AMD Zen 6", "Btrfs", "Intel Xe3P", "Linux 核心", "Nouveau"],
    title_en: "Linux 7.3-rc1 Kernel Release: Support for AMD Zen 6, Intel Xe3P, and Btrfs Performance Enhancements",
    summary_en: "Linux kernel version 7.3-rc1 has been released for testing, incorporating numerous new hardware supports, file system enhancements, and security improvements. Key highlights of this version include optimizations for Intel hybrid CPUs, expanded support for the upcoming AMD Zen 6 platform, and Btrfs performance improvements. Additionally, it supports Nouveau's support for NVK Vulkan Video, core drivers for the 2026 Valve Steam Controller, and first support for hardware such as M3 Ultra / Pro / Max. Graphically, Intel Starfire and Intel Xe3P graphics cards equipped with Nova Lake are out-of-the-box ready. Developers are also focusing on the upstreaming of FailFS and the low-latency mode for USB4STREAM. This release also includes Valve's improvements for gaming experiences on low vRAM systems, while simultaneously removing outdated hardware drivers. Due to the inclusion of extensive AMD GPU register definitions (AMD DCN6 register headers), this patch has a larger size, but overall, the core functionality updates are rich, laying a foundation for the future hardware ecosystem.",
    tags_en: ["Linux 7.3", "AMD Zen 6", "Btrfs", "Intel Xe3P", "Linux Kernel", "Nouveau"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc1-Released", lang: "EN" }
    ]
  },
  {
    id: "20260830-10179",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：大幅改善多款筆電與外接音訊設備的相容性與穩定性",
    summary: "本次 Linux 7.3 的音訊子系統更新，著重於修復多個硬體相容性問題（quirks），旨在提升各種筆電和外接音訊設備在 Linux 上的支援度。更新涵蓋了多個具體場景的修復，例如：修復 Logitech PRO X Wireless 耳機在麥克風熱插拔時的混亂問題，並改善了靜音的最低音量級別處理。針對特定筆電型號，如 MSI Thin A15 B7UC，增加了內部麥克風支援的特殊處理。此外，針對 2018 年的 Intel Hades Canyon NUC，新增了 ALC700 聲卡編解碼器（codec）的修復，確保設備在從 Windows 重啟到 Linux 後仍能正常初始化。其他修復包括 Creative Sound Blaster Play! 3 的靜音值處理、SMSL USB DAC 的啟動和暫停恢復時的爆音（pop sound）避免，以及讓 M-Audio Venom USB 合成器透過 USB 介面運作。這些更新顯著提升了 Linux 系統在處理複雜音訊硬體和多作業系統切換場景的穩定性與使用者體驗。",
    tags: ["Linux 7.3", "音訊子系統", "硬體相容性", "ALC700", "Logitech PRO X", "Audio Fixes"],
    title_en: "Linux 7.3 Kernel Update: Significantly Improves Compatibility and Stability for Multiple Laptops and External Audio Devices",
    summary_en: "This Linux 7.3 audio subsystem update focuses on fixing multiple hardware compatibility issues (quirks), aiming to enhance support for various laptops and external audio devices running Linux. The update covers fixes for several specific scenarios, such as resolving erratic behavior when hot-plugging the microphone on Logitech PRO X Wireless headphones, and improving the handling of minimum volume levels for mute functions. Specific fixes were added for certain laptop models, such as MSI Thin A15 B7UC, which now includes specialized support for internal microphones. Furthermore, a fix for the ALC700 sound card codec was added for the 2018 Intel Hades Canyon NUC, ensuring the device initializes correctly even after resuming from Windows to Linux. Other fixes include handling mute values for the Creative Sound Blaster Play! 3, preventing pop sounds during startup and pause recovery for the SMSL USB DAC, and enabling the M-Audio Venom USB synthesizer to operate via USB. These updates significantly improve the stability and user experience of the Linux system when handling complex audio hardware and multi-OS transition scenarios.",
    tags_en: ["Linux 7.3", "Audio Subsystem", "Hardware Compatibility", "ALC700", "Logitech PRO X", "Audio Fixes"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-More-Sound", lang: "EN" }
    ]
  },
  {
    id: "20260830-10180",
    trackers: ["os"],
    category: "Linux",
    title: "AMD ROCm 運算堆棧移植至 FreeBSD：學生開發者進行核心整合與優化",
    summary: "本篇報導概述了 FreeBSD Foundation 透過實習生 Sourojeet Adhikari 的努力，將 AMD 開源 ROCm 運算堆棧從 Linux 移植到 FreeBSD 的進度。儘管 FreeBSD 已具備從 Linux DRM 移植的 AMDGPU 驅動程式，並有 LinuxKPI 相容性層來翻譯 Linux 核心介面，但將 ROCm 完整運作於 FreeBSD 仍是一項重大挑戰。本次工作不僅限於核心層面的變更，還包括修補 AMD 使用的下游 LLVM 程式碼、調整 ROCm GPU 運行時，以及修改 drm-kmod 模組。開發者在 FreeBSD 的 LinuxKPI 相容性介面中也發現了多處錯誤與差異。目前專案已接近一個重要里程碑，能夠運行簡單的向量加法工作負載，但使用者空間仍有待解決問題。未來計畫將著重探索 FreeBSD 的記憶體管理系統，特別是支援異質記憶體管理（HMM）所需的作業。目前 ROCm 在 FreeBSD 上尚未達到可供終端使用者使用的狀態，但其發展趨勢值得關注。",
    tags: ["AMD", "ROCm", "FreeBSD", "LLVM", "LinuxKPI", "GPU 運算"],
    title_en: "Porting the AMD ROCm Compute Stack to FreeBSD: Core Integration and Optimization by Student Developer",
    summary_en: "This report outlines the progress made by the FreeBSD Foundation, through intern Sourojeet Adhikari, in porting the open-source AMD ROCm compute stack from Linux to FreeBSD. Although FreeBSD already possesses the AMDGPU driver ported from Linux DRM, and a LinuxKPI compatibility layer to translate Linux kernel interfaces, running the complete ROCm stack on FreeBSD remains a significant challenge. This effort involves not only kernel-level changes but also patching downstream LLVM code used by AMD, adjusting the ROCm GPU runtime, and modifying the drm-kmod module. The developer also found multiple errors and discrepancies within FreeBSD's LinuxKPI compatibility interface. The project has reached an important milestone, successfully running a simple vector addition workload, but user-space issues remain. Future plans will focus on exploring FreeBSD's memory management system, particularly concerning the operations required to support Heterogeneous Memory Management (HMM). While ROCm on FreeBSD is not yet ready for end-user deployment, its development trajectory is noteworthy.",
    tags_en: ["AMD", "ROCm", "FreeBSD", "LLVM", "LinuxKPI", "GPU Computing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMD-ROCm-FreeBSD-Intern-Report", lang: "EN" }
    ]
  },
  {
    id: "20260830-10181",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心更新：支援 AMD Zen 6、Ryzen AI Halo 及多款筆電新硬體驅動",
    summary: "本次 Linux 7.3 核心版本更新，大幅擴充了 x86 平台驅動支援，涵蓋了多款新世代硬體與功能。主要更新包括：為 AMD Zen 6 系列處理器新增了 HSMP 和 PMF 平台驅動支援，並透過新的 ioctl 介面暴露設備指標。此外，Ryzen AI Halo mini PC 支援了 LED 和 RGB 控制，讓主線核心可管理設備的燈光配置。在筆電支援方面，HP WMI 驅動新增了 GPU MUX 切換支援，並擴展了對多款 OMEN 和 MEN Transcend 型號的支援。Lenovo ThinkPad APCI 驅動也加入了 USB-C Security (USCS) 功能，允許充電但阻擋資料傳輸。其他品牌如 ASUS、LG、Samsung 等也分別增加了對新機型（如 LG Gram 16T90SP、Samsung Galaxy Book6 Pro）的特定功能支援，包括鍵盤背光、電源管理等。這些更新提升了 Linux 系統對最新硬體的相容性與功能性。",
    tags: ["Linux 7.3", "x86 平台驅動", "AMD Zen 6", "Ryzen AI Halo", "WMI", "ThinkPad"],
    title_en: "Linux 7.3 Kernel Update: Support for AMD Zen 6, Ryzen AI Halo, and Multiple New Laptop Hardware Devices",
    summary_en: "This Linux 7.3 kernel version update significantly expands x86 platform driver support, covering multiple new generations of hardware and features. Key updates include: adding HSMP and PMF platform driver support for the AMD Zen 6 series processors, and exposing device metrics through a new ioctl interface. Furthermore, Ryzen AI Halo mini PC support now includes LED and RGB control, allowing the main core to manage device lighting configurations. Regarding laptop support, the HP WMI driver adds GPU MUX switching support and expands support for multiple OMEN and MEN Transcend models. The Lenovo ThinkPad APCI driver also incorporates USB-C Security (USCS) functionality, which allows charging while blocking data transfer. Other brands, such as ASUS, LG, and Samsung, have also added specific feature support for new models (e.g., LG Gram 16T90SP, Samsung Galaxy Book6 Pro), including keyboard backlighting and power management. These updates enhance the compatibility and functionality of the Linux system with the latest hardware.",
    tags_en: ["Linux 7.3", "x86 platform driver", "AMD Zen 6", "Ryzen AI Halo", "WMI", "ThinkPad"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-x86-Platform-Drivers", lang: "EN" }
    ]
  },
  {
    id: "20260830-10183",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 7.3 KVM 核心更新：修復資料結構、強化 AMD SEV-SNP 與 Intel VPID 虛擬化漏洞",
    summary: "Linux 7.3 版本針對 KVM (Kernel-based Virtual Machine) 核心進行了大量修復與代碼清理，而非新增使用者可見的功能。本次更新的重點包括：首先，對核心資料結構進行了拆分和清理，特別是 `kvm_mmu` 代碼，以更好地支援現代 KVM 使用情境。其次，針對 AMD 平台，更新修復了 SEV/SEV-ES 加密/解密操作的資料損壞問題，確保與 AMD SEV-SNP 規範一致，並強化了相關 ioctl 的輸入驗證。對於 Intel 平台，修復了在嵌套 VM-Enter 失敗時的本地 TLB flush 處理，避免了因相同 L2 VPID 導致的 TLB 遺漏，同時也修復了 KVM 在 VPID 虛擬化中無法清除硬體 TLB 的錯誤。此外，RISC-V 平台增加了對 Svadu/Zicfiss/Zicfilp FWFT 的支援，並優化了 SMP 訪客的 HFENCE 請求處理。這些修復旨在提升虛擬化環境的穩定性與安全性。",
    tags: ["Linux 7.3", "KVM", "AMD SEV-SNP", "Intel VPID", "虛擬化", "核心更新"],
    title_en: "Linux 7.3 KVM Kernel Update: Fixing Data Structures and Strengthening AMD SEV-SNP and Intel VPID Virtualization Vulnerabilities",
    summary_en: "The Linux 7.3 version includes extensive fixes and code cleanup for the KVM (Kernel-based Virtual Machine) kernel, rather than adding user-visible features. Key focus areas of this update include: First, core data structures were split and cleaned, particularly the `kvm_mmu` code, to better support modern KVM use cases. Second, for AMD platforms, updates fixed data corruption issues during SEV/SEV-ES encryption/decryption operations, ensuring compliance with the AMD SEV-SNP specification, and strengthened input validation for related ioctls. For Intel platforms, the update fixed the local TLB flush handling when nested VM-Enter fails, preventing TLB leakage caused by identical L2 VPIDs. It also corrected an error where KVM could not clear the hardware TLB during VPID virtualization. Furthermore, the RISC-V platform added support for Svadu/Zicfiss/Zicfilp FWFT and optimized the handling of HFENCE requests for SMP guests. These fixes aim to enhance the stability and security of virtualization environments.",
    tags_en: ["Linux 7.3", "KVM", "AMD SEV-SNP", "Intel VPID", "Virtualization", "Kernel Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-KVM", lang: "EN" }
    ]
  },
  {
    id: "20260830-10184",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 更新：新增 8250_mxpcie 驅動支援 Moxa 序列埠，並移除 IPWireless 驅動",
    summary: "Linux 7.3 版本更新包含 TTY/Serial 相關的重大變動。本次更新主要新增了 8250_mxpcie 驅動程式，用於專門支援 Moxa 的 PCIe 多埠序列埠主機板。此新驅動將現有 8250_pci 驅動的功能拆分出來，並擴展以支援新一代 MUEx50 專屬的 UART 功能，例如 FIFO 觸發電平、自動硬體與軟體流量控制等。另一方面，本次更新也移除了 IPWireless 驅動程式。該驅動原用於支援美國和歐洲地區的 IPWireless 品牌 3G UMTS PCMCIA 卡，但由於自約 2011 年以來未見到活躍使用跡象，開發者判斷其維護成本過高，故將其移除。此外，TTY 程式碼也為 vt_setactive 函式增加了 VT 模式驗證，以防止使用者傳入無效模式導致未定義的虛擬終端機行為。",
    tags: ["Linux 7.3", "TTY/Serial", "8250_mxpcie", "Moxa", "IPWireless", "Linux 核心"],
    title_en: "Linux 7.3 Update: Adds 8250_mxpcie Driver Support for Moxa Serial Ports and Removes IPWireless Driver",
    summary_en: "The Linux 7.3 version update includes significant changes related to TTY/Serial. This update primarily adds the 8250_mxpcie driver, which is designed to specifically support Moxa's PCIe multi-port serial port motherboards. This new driver splits functionality from the existing 8250_pci driver and expands support to include new-generation MUEx50 dedicated UART features, such as FIFO trigger levels, automatic hardware and software flow control, and more. Conversely, this update also removes the IPWireless driver. This driver was originally used to support the IPWireless brand 3G UMTS PCMCIA cards for the US and European regions, but because no active usage has been observed since approximately 2011, developers determined that the maintenance cost was too high, leading to its removal. Furthermore, the TTY code has added VT mode validation to the vt_setactive function to prevent undefined virtual terminal behavior caused by users inputting invalid modes.",
    tags_en: ["Linux 7.3", "TTY/Serial", "8250_mxpcie", "Moxa", "IPWireless", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Serial", lang: "EN" }
    ]
  },
  {
    id: "20260830-10185",
    trackers: ["os"],
    category: "Linux",
    title: "RTL8723BS 驅動程式持續主導 Linux 7.3 階段性更新，進行程式碼重構與優化",
    summary: "本次 Linux 7.3 的階段性驅動程式更新（staging driver updates）已合併，但根據 Greg Kroah-Hartman 的評論，內容並無重大變動。在所有階段性變更中，Realtek 的 RTL8723BS WiFi 驅動程式再次佔據主導地位。RTL8723BS 是一款基於 802.11 b/g/n SDIO 的 WiFi 與藍牙驅動程式，曾廣泛用於各種低成本單板電腦及早期 Intel Compute Stick 設備。該驅動程式被描述為複雜且龐大（",
    tags: ["Linux 7.3", "RTL8723BS", "Realtek", "WiFi 驅動程式", "Linux 核心"],
    title_en: "RTL8723BS Driver Continues to Dominate Linux 7.3 Staging Updates with Refactoring and Optimization",
    summary_en: "The staged driver updates for Linux 7.3 have been merged, but according to Greg Kroah-Hartman's comments, there are no major changes. Among all the staged changes, Realtek's RTL8723BS WiFi driver once again dominates. RTL8723BS is a WiFi and Bluetooth driver based on 802.11 b/g/n SDIO, previously widely used in various low-cost single-board computers and early Intel Compute Stick devices. The driver is described as complex and large.",
    tags_en: ["Linux 7.3", "RTL8723BS", "Realtek", "WiFi Driver", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Staging", lang: "EN" }
    ]
  },
  {
    id: "20260830-10208",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 社區投票決定允許貢獻者使用生成式 AI 輔助編碼，但強調人工審核責任",
    summary: "Debian 專案社群最近投票通過了一項政策，允許貢獻者在開發、維護或撰寫 Debian 專案相關的軟體、套件和文件時使用生成式 AI 工具。這項政策的核心精神是「負責任地使用生成式 AI」，主張這類工具能大幅提高貢獻者的生產力，讓志願者能將有限的時間投入到需要技術專業知識、判斷和協作的工作上。然而，政策同時明確強調，無論貢獻內容是何種方式產生的，所有提交給 Debian 的貢獻都必須符合既定的品質、正確性、可維護性和法律合規標準。政策警告，單純盲目接受或上傳 AI 生成的內容，缺乏適當的人工審核，與 Debian 的既有開發實踐不符。此外，社群鼓勵貢獻者揭露是否使用了 AI 輔助，但並未強制要求。此舉反映了 FOSS 社群在擁抱 AI 輔助開發工具的趨勢，但仍將最終的責任和審核權交給人類開發者。",
    tags: ["Debian", "Generative AI", "AI 輔助編碼", "Linux 核心", "FOSS"],
    title_en: "Debian Community Votes to Allow Contributors to Use Generative AI for Coding, but Stresses Human Review Responsibility",
    summary_en: "The Debian project community recently passed a policy allowing contributors to use generative AI tools when developing, maintaining, or writing software, packages, and documentation related to the Debian project. The core principle of this policy is the 'responsible use of generative AI,' arguing that such tools can significantly boost contributor productivity, allowing volunteers to dedicate their limited time to tasks requiring technical expertise, judgment, and collaboration. However, the policy explicitly emphasizes that all contributions submitted to Debian must meet established standards for quality, accuracy, maintainability, and legal compliance, regardless of how the content was generated. The policy warns that blindly accepting or uploading AI-generated content without proper human review contradicts Debian's existing development practices. Furthermore, the community encourages contributors to disclose if they used AI assistance, but does not mandate it. This move reflects the FOSS community's trend toward adopting AI-assisted development tools, while still placing the ultimate responsibility and review authority with human developers.",
    tags_en: ["Debian", "Generative AI", "AI-Assisted Coding", "Linux Kernel", "FOSS"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/30/debian-votes-to-let-contributors-code-with-ai/5293421", lang: "EN" }
    ]
  },
  {
    id: "20260830-10236",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 宣布 WinUI 3 重寫 Windows Run 對話框，性能提升 8.7%，實現現代化與效能兼顧",
    summary: "本文深入探討 Microsoft 在 Windows 11 系統中，使用 WinUI 3 框架重寫傳統的 Run 對話框（Win+R）的成果。Run 對話框是 Windows 系統中一個歷史悠久、功能穩定的核心元件。Microsoft 透過現代化的 C#/WinUI 3 實作，不僅讓 Run 對話框獲得了深色模式和現代化介面，更在性能上取得了顯著提升。根據 Microsoft 內部基準測試，新版 Run 對話框的平均顯示時間為 94ms，相較於使用 Win32 構建的舊版（103ms），提升了約 9ms，提升幅度約為 8.7%。這證明了 WinUI 現代化設計不必然導致性能衰退，特別是結合了 .NET AOT（Ahead-of-Time compilation）等技術優化後，可以實現「原生級速度」的現代化體驗。雖然文章指出，WinUI 應用程式的現代化過程仍需持續優化，但 Run 對話框的成功案例，為 Microsoft 證明了其可以在不犧牲性能的前提下，持續現代化整個 Windows 11 系統。",
    tags: ["Microsoft", "Windows 11", "WinUI 3", "Run 對話框", "Win32", ".NET AOT"],
    title_en: "Microsoft Overhauls Windows Run Dialog with WinUI 3, Achieving 8.7% Performance Boost While Modernizing",
    summary_en: "This article delves into Microsoft's efforts to rewrite the traditional Run dialog box (Win+R) in Windows 11 using the WinUI 3 framework. The Run dialog box is a core, historically stable component of the Windows operating system. By implementing the Run dialog box using modern C#/WinUI 3, Microsoft has not only given it a modernized interface and dark mode support but has also achieved significant performance improvements. According to internal Microsoft benchmarks, the new Run dialog box has an average display time of 94ms, representing an improvement of approximately 9ms compared to the old Win32-built version (103ms), an increase of about 8.7%. This demonstrates that modernizing design with WinUI does not necessarily lead to performance degradation, especially when combined with technical optimizations like .NET AOT (Ahead-of-Time compilation), allowing for a modernized experience with 'native-level speed.' While the article notes that the modernization process for WinUI applications still requires continuous optimization, the successful case of the Run dialog box proves to Microsoft that it can continuously modernize the entire Windows 11 system without sacrificing performance.",
    tags_en: ["Microsoft", "Windows 11", "WinUI 3", "Run Dialog Box", "Win32", ".NET AOT"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/31/microsoft-proves-windows-11s-modern-ui-can-beat-legacy-win32-if-it-works-hard-enough", lang: "EN" }
    ]
  },
  {
    id: "20260830-10238",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 改善用戶體驗：移除 OneDrive 備份促銷的「暗黑模式」，提供明確「退出備份」選項",
    summary: "微軟針對 Windows 11 的用戶體驗進行重大改進，終於移除了一個長期以來備受詬病的「暗黑模式」（dark pattern）。過去，用戶在遇到 OneDrive 備份提醒時，無法永久拒絕，只能選擇「提醒我三天後」或「繼續」，導致備份提示不斷彈出，極具困擾。新版本在用戶端和首次設置時，都增加了明確的「Opt out of backup」（退出備份）按鈕。這項改動讓用戶可以明確且永久地告知系統不希望使用 OneDrive 進行備份。雖然微軟仍推薦使用 OneDrive 雲端儲存來保護檔案，並強調其同步設定等優點，但這次的改進極大地提升了用戶的選擇權和控制感。這對於追求系統透明度和用戶自主權的用戶來說，是重大的正面變革。",
    tags: ["Windows 11", "OneDrive", "暗黑模式", "用戶體驗", "Microsoft"],
    title_en: "Windows 11 Improves User Experience: Removes OneDrive Backup 'Dark Pattern' Promotion, Provides Clear 'Opt Out of Backup' Option",
    summary_en: "Microsoft has made significant improvements to the user experience of Windows 11, finally removing a long-criticized 'dark pattern.' Previously, when users encountered OneDrive backup prompts, they could not permanently decline the feature, only choosing options like 'Remind me in three days' or 'Continue.' This resulted in persistent, bothersome backup prompts. The new version has added a clear 'Opt out of backup' button both in the user interface and during initial setup. This change allows users to explicitly and permanently inform the system that they do not wish to use OneDrive for backup. Although Microsoft still recommends using OneDrive cloud storage for file protection and emphasizes its synchronization benefits, this improvement greatly enhances user choice and control. For users who prioritize system transparency and user autonomy, this represents a major positive change.",
    tags_en: ["Windows 11", "OneDrive", "Dark Pattern", "User Experience", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/30/windows-11-is-dropping-its-worst-onedrive-dark-pattern-after-years-of-complaints-microsoft-will-let-you-fully-opt-out", lang: "EN" }
    ]
  },
  {
    id: "20260830-10239",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11「文字與圖像生成」設定功能解析：澄清系統背景運行AI的誤解",
    summary: "近期一則關於 Windows 11「文字與圖像生成」（Text and image generation）設定的截圖在網路上流傳，引起用戶誤解，認為 Windows 系統正在背景運行AI，消耗系統資源。然而，該功能僅是微軟新增的追蹤頁面，用於顯示哪些應用程式（如 Notepad、Photos、Outlook 等）有權限使用裝置端的生成式AI模型，讓用戶可以控制權限。官方文件指出，此頁面僅列出「最近使用」的應用程式，若「最近活動」顯示為零請求，則代表AI模型並未運行，無法消耗系統資源。此外，Windows 描述的AI運行是「裝置端」（on-device），主要在 Copilot+ PC 的 NPU 上執行，不透過 CPU、GPU 或一般 RAM。文章提醒用戶，該設定的誤導性在於其名稱和預設開啟，建議用戶若不使用，可至「設定」>「隱私權與安全性」>「文字與圖像生成」關閉主開關。",
    tags: ["Windows 11", "Text and image generation", "AI", "NPU", "Copilot+", "系統資源"],
    title_en: "Analysis of Windows 11's 'Text and Image Generation' Setting: Clarifying Misunderstandings about Background AI Operation",
    summary_en: "Recently, a screenshot regarding the Windows 11 'Text and image generation' setting circulated online, causing users to misunderstand that the Windows system was running AI in the background and consuming system resources. However, this feature is merely a tracking page added by Microsoft to show which applications (such as Notepad, Photos, Outlook, etc.) have permission to use on-device generative AI models, allowing users to control permissions. Official documentation states that this page only lists 'recently used' applications, and if 'recent activity' shows zero requests, it means the AI model is not running and cannot consume system resources. Furthermore, Windows describes AI operation as 'on-device,' primarily executing on the NPU of Copilot+ PCs, rather than through the CPU, GPU, or general RAM. The article cautions users that the misleading aspect of this setting lies in its name and default activation, advising users who do not intend to use it to disable the main switch under 'Settings' > 'Privacy & security' > 'Text and image generation.'",
    tags_en: ["Windows 11", "Text and image generation", "AI", "NPU", "Copilot+", "System resources"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/30/windows-11-is-accused-of-using-ai-to-slow-your-pc-but-its-not-what-you-think", lang: "EN" }
    ]
  },
  {
    id: "20260830-10240",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 誤報警示：系統通知誤報「關閉病毒保護」，微軟確認問題但尚未修復",
    summary: "近期用戶發現 Windows 11 系統的「Windows Security」應用程式會隨機發出「請開啟病毒保護」的彈出式警報，即使 Microsoft Defender Antivirus 實際運作正常且所有設定顯示為啟用狀態。微軟已發布聲明確認此誤報現象，但尚未提供修復方案。此警報會持續出現，且影響範圍廣泛，包括 Windows 10、23H2、24H2、25H2 等多個版本，因為問題與 Defender 的更新有關。文章提醒用戶，此警報不會影響實際的系統保護狀態，但由於惡意軟體也可能使用虛假安全警告來誘騙用戶，因此建議用戶不要僅憑警報判斷，應透過「Windows Security」或執行 `powershell -command \"Get-MpComputerStatus | Select-Object AntivirusEnabled,RealTimeProtectionEnabled,AMServiceEnabled\"` 等指令，確認 Real-time protection 和 AntivirusEnabled 狀態是否為 True，以確保系統的防護功能確實正常。",
    tags: ["Windows 11", "Microsoft Defender Antivirus", "Windows Security", "系統誤報", "Windows 10", "23H2", "24H2"],
    title_en: "Windows 11 False Alarm: System Notification Incorrectly Reports 'Turn On Virus Protection'; Microsoft Confirms Issue but No Fix Yet",
    summary_en: "Recently, users have noticed that the 'Windows Security' application on Windows 11 randomly issues a pop-up alert stating, 'Please turn on virus protection,' even when Microsoft Defender Antivirus is actually functioning normally and all settings show as enabled. Microsoft has issued a statement confirming this false alarm phenomenon but has not yet provided a fix. This alert persists and affects a wide range of versions, including Windows 10, 23H2, 24H2, and 25H2, because the issue is related to Defender updates. The article reminds users that this alert does not affect the actual system protection status. However, since malicious software can also use fake security warnings to deceive users, it is recommended that users do not rely solely on the alert. Instead, they should use 'Windows Security' or execute the command `powershell -command \"Get-MpComputerStatus | Select-Object AntivirusEnabled,RealTimeProtectionEnabled,AMServiceEnabled\"` to confirm that the Real-time protection and AntivirusEnabled statuses are True, ensuring the system's defense functions are genuinely normal.",
    tags_en: ["Windows 11", "Microsoft Defender Antivirus", "Windows Security", "System False Alarm", "Windows 10", "23H2", "24H2"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/30/windows-11-is-warning-virus-protection-is-off-but-microsoft-confirms-its-false", lang: "EN" }
    ]
  },
  {
    id: "20260830-9929",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Next.js釋出修補版本，修復兩項重大RCE漏洞：包含Windows檔案路徑與AVIF影像處理",
    summary: "開發框架Next.js發布版本15.5.24與16.3.3，修補了兩項高風險的未經身分驗證遠端程式碼執行（RCE）漏洞。第一項漏洞（CVE-2026-75604）CVSS評分為9.0分，影響Next.js 13.4以上至15.5.24以前，以及16.0以上至16.3.3以前版本。此漏洞源於Windows檔案系統，且僅影響使用Pages Router與App Router、未啟用Cache Components的特定應用程式，攻擊者可利用檔案路徑處理問題執行任意程式碼。第二項漏洞CVSS評分為9.5分，發生在Next.js處理AVIF影像最佳化功能時。此問題的根本源頭是底層影像處理函式庫libheif的記憶體溢位漏洞（CVSS評分達9.8分）。當Next.js使用sharp處理特製AVIF圖片時，可能觸發此漏洞。建議所有符合條件的Next.js使用者，應立即升級至修補版本，並特別注意Windows部署和使用AVIF影像最佳化的網站。",
    tags: ["Next.js", "RCE", "CVE-2026-75604", "libheif", "AVIF", "Windows"],
    title_en: "Next.js Releases Patch Versions to Fix Two Critical RCE Vulnerabilities: Including Windows File Path and AVIF Image Processing",
    summary_en: "The development framework Next.js has released versions 15.5.24 and 16.3.3, patching two high-risk unauthenticated Remote Code Execution (RCE) vulnerabilities. The first vulnerability (CVE-2026-75604) has a CVSS score of 9.0 and affects Next.js versions from 13.4 up to 15.5.24, and from 16.0 up to 16.3.3. This vulnerability originates from the Windows file system and only affects specific applications using Pages Router and App Router without enabling Cache Components. An attacker can exploit a file path handling issue to execute arbitrary code. The second vulnerability, with a CVSS score of 9.5, occurs when Next.js processes the AVIF image optimization feature. The root cause of this issue is a buffer overflow vulnerability in the underlying image processing library, libheif (which has a CVSS score of 9.8). This vulnerability may be triggered when Next.js uses sharp to process specialized AVIF images. All affected Next.js users are advised to immediately upgrade to the patched versions, paying special attention to Windows deployments and websites utilizing AVIF image optimization.",
    tags_en: ["Next.js", "RCE", "CVE-2026-75604", "libheif", "AVIF", "Windows"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178520", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260830-9950",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Microsoft揭露新型惡意攻擊「TerminalFix」：利用假Cloudflare誘騙執行PowerShell指令",
    summary: "Microsoft安全研究人員揭露了一種名為 TerminalFix 的新型惡意攻擊變種。此攻擊與傳統的 ClickFix 戰役不同，它不引導受害者至 Windows Run 對話框，而是將其引導至 Windows Terminal 或 PowerShell，從而提高複雜多行腳本成功執行的機率。攻擊鏈的起點是利用受感染網站，偽造 Cloudflare CAPTCHA 驗證，誘騙訪客複製並執行惡意 PowerShell 指令。該攻擊為一個複雜的多階段流程，涉及 DLL sideloading、利用 PNG 圖像中的隱寫術載荷、廣泛的 Active Directory 偵察，以及一個自訂的逆向隧道植入物。具體而言，PowerShell 指令旨在下載包含合法二進位檔和惡意 DLL 的 ZIP 壓縮檔，從而啟動 DLL sideloading 攻擊。植入的 DLL 負責從外部網域（如 bestsocialmedianewspapper[.]com）檢索下一階段載荷，建立持久性，並部署基於 Python 的逆向隧道 C2 指令與控制植入物。該後門可透過加密 WebSocket 通道將任意 TCP 流量回傳至攻擊者控制的基礎設施，並使 C2 伺服器能夠到達受害者網路中任何可見的主機。Microsoft警告，此類入侵極具危險性，可讓攻擊者透過逆向隧道直接存取組織內部網路，進而升級權限、繞過安全控制、竊取敏感資料，甚至部署勒索軟體。為緩解此威脅，建議透過 AppLocker、Application Control 或 Group Policy 限制標準使用者對 PowerShell 和 Run 對話框的執行，並啟用 PowerShell script block logging。",
    tags: ["Microsoft", "TerminalFix", "ClickFix", "PowerShell", "DLL sideloading", "Active Directory", "逆向隧道"],
    title_en: "Microsoft Uncovers New Malicious Attack 'TerminalFix': Exploiting Fake Cloudflare to Trick Execution of PowerShell Commands",
    summary_en: "Microsoft security researchers have disclosed a new malicious attack variant named TerminalFix. Unlike traditional ClickFix campaigns, this attack does not guide victims to the Windows Run dialog box; instead, it directs them to Windows Terminal or PowerShell, thereby increasing the probability of successfully executing complex multi-line scripts. The attack chain begins by leveraging compromised websites to fake Cloudflare CAPTCHA verification, tricking visitors into copying and executing malicious PowerShell commands. This attack constitutes a complex, multi-stage process involving DLL sideloading, utilizing steganography payloads within PNG images, extensive Active Directory reconnaissance, and a custom reverse tunnel implant. Specifically, the PowerShell command aims to download a ZIP archive containing legitimate binaries and malicious DLLs, thereby initiating a DLL sideloading attack. The implanted DLL is responsible for retrieving the next-stage payload from an external domain (such as bestsocialmedianewspapper[.]com), establishing persistence, and deploying a Python-based reverse tunnel Command and Control (C2) implant. This backdoor can relay arbitrary TCP traffic via an encrypted WebSocket channel back to the attacker's controlled infrastructure, allowing the C2 server to reach any visible host within the victim's network. Microsoft warns that such intrusions are extremely dangerous, as they allow attackers to directly access an organization's internal network via a reverse tunnel, subsequently escalating privileges, bypassing security controls, stealing sensitive data, or even deploying ransomware. To mitigate this threat, it is recommended to use AppLocker, Application Control, or Group Policy to restrict standard user execution of PowerShell and the Run dialog box, and to enable PowerShell script block logging.",
    tags_en: ["Microsoft", "TerminalFix", "ClickFix", "PowerShell", "DLL sideloading", "Active Directory", "Reverse Tunnel"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/terminalfix-uses-fake-cloudflare.html", lang: "EN" }
    ]
  },
  {
    id: "20260830-9993",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Wicket 存在 CVE-2026-71378 漏洞：跨站請求偽造（CSRF）保護機制繞過",
    summary: "Apache Wicket 框架的 `ResourceIsolationRequestCycleListener` 組件存在一個嚴重的跨站請求偽造（CSRF）保護繞過漏洞，編號為 CVE-2026-71378。此漏洞源於其預設的 `FetchMetadataResourceIsolationPolicy` 策略，該策略在設計時為保護靜態資源而建立，導致其在處理頁面操作（如組件監聽器、表單提交）時，允許了不安全的跨站導航和同站域（same-site）請求。攻擊者可以利用此漏洞，透過控制的頁面導航，引導受害者瀏覽器在受害者已驗證的會話中執行惡意監聽器 URL，即使瀏覽器會發送 SameSite=Lax cookie，攻擊者仍能成功竊取會話 Cookie。受影響的版本包括 Apache Wicket 9.1.0 至 9.23.0，以及 10.0.0 至 10.10.0。開發者建議用戶升級至版本 9.24.0 或 10.11.0 以修復此問題。對於 8.x 系列版本，由於缺乏相關的 `ResourceIsolationRequestCycleListener`，因此不受此漏洞影響。",
    tags: ["Apache Wicket", "CVE-2026-71378", "CSRF", "跨站請求偽造", "Web 應用程式安全"],
    title_en: "Apache Wicket Vulnerability (CVE-2026-71378): Cross-Site Request Forgery (CSRF) Protection Bypass",
    summary_en: "A critical Cross-Site Request Forgery (CSRF) protection bypass vulnerability, designated CVE-2026-71378, exists within the `ResourceIsolationRequestCycleListener` component of the Apache Wicket framework. This vulnerability stems from its default `FetchMetadataResourceIsolationPolicy` strategy, which was designed to protect static resources. Consequently, it allows unsafe cross-site navigation and same-site requests when processing page operations (such as component listeners or form submissions). An attacker can exploit this vulnerability by controlling page navigation to force the victim's browser to execute a malicious listener URL within the victim's authenticated session. Even if the browser sends SameSite=Lax cookies, the attacker can successfully steal the session cookie. Affected versions include Apache Wicket 9.1.0 through 9.23.0, and 10.0.0 through 10.10.0. Developers recommend upgrading to version 9.24.0 or 10.11.0 to remediate this issue. Versions in the 8.x series are not affected by this vulnerability due to the absence of the relevant `ResourceIsolationRequestCycleListener`.",
    tags_en: ["Apache Wicket", "CVE-2026-71378", "CSRF", "Cross-Site Request Forgery", "Web Application Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/30/5", lang: "EN" }
    ]
  },
  {
    id: "20260830-9994",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Wicket 存在 CVE-2026-71257 漏洞：部分請求解析後，檔案上傳限制無法強制執行",
    summary: "Apache Wicket 框架在處理 multipart 請求時，若請求體已由其他元件（如使用 @MultipartConfig 的 Servlet 或 Filter）解析，Wicket 會回退至使用 `HttpServletRequest#getParts()` 讀取上傳資料。此時，原本設定的單檔大小限制（如 `Form#setFileMaxSize`）和檔案數量限制（如 `Form#setFileCountMax`）將無法生效，導致遠端攻擊者可以上傳超出應用程式允許限制的檔案，或提交數量過多的檔案。雖然總上傳大小限制（`Form#setMaxSize`）不受影響，但攻擊者仍可利用此漏洞上傳超限檔案。受影響版本包括 Apache Wicket 8.0.0 至 8.18.0、9.0.0 至 9.23.0，以及 10.0.0 至 10.10.0。建議使用者升級至修復版本：8.19.0、9.24.0 或 10.11.0。作為臨時解決方案，建議在解析請求的元件（如 Spring Boot 或 web.xml）中配置等效的限制。",
    tags: ["Apache Wicket", "CVE-2026-71257", "檔案上傳", "multipart 請求", "Web 應用程式安全"],
    title_en: "Apache Wicket Vulnerability CVE-2026-71257: File Upload Limits Bypass After Partial Request Parsing",
    summary_en: "When the Apache Wicket framework processes multipart requests, if the request body has already been parsed by another component (such as a Servlet or Filter using @MultipartConfig), Wicket falls back to using `HttpServletRequest#getParts()` to read the uploaded data. Under this condition, the originally configured single file size limit (e.g., `Form#setFileMaxSize`) and file count limit (e.g., `Form#setFileCountMax`) will become ineffective. This allows a remote attacker to upload files exceeding the application's allowed limits, or submit an excessive number of files. Although the total upload size limit (`Form#setMaxSize`) remains unaffected, attackers can still exploit this vulnerability to upload oversized files. Affected versions include Apache Wicket 8.0.0 to 8.18.0, 9.0.0 to 9.23.0, and 10.0.0 to 10.10.0. Users are advised to upgrade to the patched versions: 8.19.0, 9.24.0, or 10.11.0. As a temporary workaround, it is recommended to configure equivalent limits in the component that parses the request (such as Spring Boot or web.xml).",
    tags_en: ["Apache Wicket", "CVE-2026-71257", "File Upload", "multipart request", "Web Application Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/30/4", lang: "EN" }
    ]
  },
  {
    id: "20260830-9995",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Wicket 存在路徑遍歷漏洞 (CVE-2026-70449)，可讀取 WEB-INF 內檔案",
    summary: "Apache Wicket 框架在處理資源 URL 屬性時，因驗證不足，允許未經身份驗證的遠端攻擊者讀取網頁應用程式中的檔案，包括原本伺服器容器不會提供服務的 WEB-INF 資料夾內的檔案。此漏洞的根本原因是在組合資源查找路徑時，未檢查 locale、style 和 variation 屬性，導致攻擊者可利用路徑分隔符號逃逸預期的套件目錄。雖然預設的 SecurePackageResourceGuard 限制了可讀取檔案的副檔名，但如果應用程式配置了額外的模式或使用了基於黑名單的 PackageResourceGuard，則可能洩露如 web.xml 等配置檔案。此外，在執行 Guard 之前進行的查找行為本身，也構成了一個任意路徑存在性查詢（existence oracle）。受影響的版本包括 Apache Wicket 8.0.0 至 8.18.0、9.0.0 至 9.23.0，以及 10.0.0 至 10.10.0。建議使用者立即升級至修復版本：8.19.0、9.24.0 或 10.11.0。對於已停止支援的 7.x 或更早版本，應升級至支援的版本。",
    tags: ["Apache Wicket", "CVE-2026-70449", "路徑遍歷", "Web 應用程式", "WEB-INF"],
    title_en: "Apache Wicket Path Traversal Vulnerability (CVE-2026-70449) Allows Reading WEB-INF Files",
    summary_en: "The Apache Wicket framework, due to insufficient validation when processing resource URL attributes, allows unauthenticated remote attackers to read files within the web application, including files in the WEB-INF directory that the server container would not normally serve. The root cause of this vulnerability is the failure to validate the locale, style, and variation attributes when constructing the resource lookup path, allowing attackers to escape the expected package directory using path separators. Although the default SecurePackageResourceGuard restricts the readable file extensions, if the application is configured with additional patterns or uses a blacklist-based PackageResourceGuard, it may leak configuration files such as web.xml. Furthermore, the mere act of performing the lookup before executing the Guard constitutes an arbitrary path existence query (existence oracle). Affected versions include Apache Wicket 8.0.0 through 8.18.0, 9.0.0 through 9.23.0, and 10.0.0 through 10.10.0. Users are advised to immediately upgrade to the patched versions: 8.19.0, 9.24.0, or 10.11.0. For unsupported 7.x or earlier versions, users should upgrade to a supported version.",
    tags_en: ["Apache Wicket", "CVE-2026-70449", "Path Traversal", "Web Application", "WEB-INF"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/30/3", lang: "EN" }
    ]
  },
  {
    id: "20260830-9996",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Shiro 曝 CVE-2026-58301 漏洞：低權限用戶可透過 POST 請求劫持連線至惡意主機",
    summary: "Apache Shiro 框架在使用 Jakarta EE 整合模組時，存在一個低權限用戶可利用的漏洞，編號為 CVE-2026-58301。此漏洞允許攻擊者透過精心設計的 HTTP POST 請求，迫使伺服器主動建立連線至攻擊者控制的 URL，並傳輸惡意控制的資料。受影響版本為 Apache Shiro 2.x 至 3.0.0，且僅限於使用 Jakarta EE 整合模組的部署環境。為修復此問題，建議升級至 3.0.1 或更高版本。此外，也可以透過設定系統屬性 `org.apache.shiro.form-resubmit-host` 和 `org.apache.shiro.form-resubmit-port` 來限制 Shiro 在重新提交表單時可連線的主機和埠號，以進行緩解。",
    tags: ["Apache Shiro", "CVE-2026-58301", "Jakarta EE", "Web應用程式", "POST 請求"],
    title_en: "Apache Shiro Exposed CVE-2026-58301 Vulnerability: Low-Privilege User Can Hijack Connections via POST Request",
    summary_en: "A vulnerability, designated CVE-2026-58301, exists in the Apache Shiro framework when utilizing the Jakarta EE integration module. This vulnerability allows an attacker to force the server to proactively establish a connection to an attacker-controlled URL, and transmit malicious controlled data, using a specially crafted HTTP POST request. The affected versions are Apache Shiro 2.x through 3.0.0, and this is limited to deployment environments using the Jakarta EE integration module. To remediate this issue, it is recommended to upgrade to version 3.0.1 or higher. Additionally, the system properties `org.apache.shiro.form-resubmit-host` and `org.apache.shiro.form-resubmit-port` can be configured to restrict the hosts and ports that Shiro can connect to when resubmitting forms, serving as a mitigation.",
    tags_en: ["Apache Shiro", "CVE-2026-58301", "Jakarta EE", "Web Application", "POST Request"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/30/2", lang: "EN" }
    ]
  },
  {
    id: "20260830-9997",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Exiv2 釋出 0.28.9 版本，修復多項漏洞，包含一個中等風險的 OOB 寫入漏洞",
    summary: "圖像元數據處理工具 Exiv2 發布了 0.28.9 版本，修復了 1 個中等風險和 6 個低風險的漏洞。本次修補的漏洞包括 CVE-2026-68546，這是一個在 `RemoteIo::Impl::populateBlocks()` 函數中的越界寫入（Out-of-bounds write）問題。該漏洞僅在使用 Exiv2 處理 URL 來源的圖片時觸發，攻擊者需透過指定惡意網址來觸發。此外，文章指出，未來 0.29.0 版本將會修復一個更普遍的「深度巢狀檔案導致堆疊耗盡」的漏洞，該問題是因 Exiv2 使用遞迴解析圖像檔案所致，預計將加入遞迴深度限制。使用者應儘快升級至最新版本以修補這些安全隱患。",
    tags: ["Exiv2", "CVE-2026-68546", "越界寫入", "Out-of-bounds", "圖像處理", "OSS 安全"],
    title_en: "Exiv2 Releases 0.28.9 Version, Patching Multiple Vulnerabilities Including a Medium-Risk OOB Write",
    summary_en: "The image metadata processing tool Exiv2 has released version 0.28.9, which patches one medium-risk and six low-risk vulnerabilities. The patched vulnerabilities include CVE-2026-68546, an Out-of-bounds write issue found in the `RemoteIo::Impl::populateBlocks()` function. This vulnerability can only be triggered when Exiv2 processes images from a URL source, requiring an attacker to specify a malicious address. Furthermore, the article notes that the upcoming 0.29.0 version will fix a more general 'stack exhaustion due to deep nesting' vulnerability. This issue stems from Exiv2's use of recursive parsing for image files, and the fix is expected to include a recursion depth limit. Users are advised to upgrade to the latest version promptly to patch these security flaws.",
    tags_en: ["Exiv2", "CVE-2026-68546", "Out-of-bounds", "Image Processing", "OSS Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/30/1", lang: "EN" }
    ]
  },
  {
    id: "20260830-10096",
    trackers: ["os"],
    category: "Apple",
    title: "The Weather Channel Storm Radar App 推出 CarPlay 版本，強化車載導航與天氣資訊整合",
    summary: "The Weather Channel 的 Storm Radar App 現已支援 CarPlay 系統，為用戶提供更完整的車載天氣體驗。該更新不僅提供地圖介面，還包含雷達、雲層和降水等數據層，並將天氣資訊與導航功能深度整合。用戶可以在 CarPlay 介面同時查看當前天氣狀況以及預計到達目的地時的氣候條件。此外，系統支援「自動重新規劃路線」和「沿途天氣警報」，這些資訊會隨著駕駛過程即時更新。本次更新版本為 4.0.19，除了 CarPlay 支援外，還同步更新了主畫面小工具和 Apple Watch App，顯著提升了用戶在多設備上的使用便利性。",
    tags: ["Apple CarPlay", "The Weather Channel", "Storm Radar", "Apple Watch", "iOS", "車載系統"],
    title_en: "The Weather Channel Storm Radar App Launches CarPlay Version, Enhancing In-Car Navigation and Weather Integration",
    summary_en: "The Weather Channel's Storm Radar App now supports CarPlay, offering users a more comprehensive in-car weather experience. This update not only provides a map interface but also includes data layers for radar, cloud cover, and precipitation, deeply integrating weather information with navigation functions. Users can simultaneously view current weather conditions and expected climate at their destination within the CarPlay interface. Furthermore, the system supports 'automatic route recalculation' and 'en-route weather alerts,' which update in real-time during the drive. This update version is 4.0.19, and in addition to CarPlay support, it also updates the main screen widget and the Apple Watch App, significantly improving user convenience across multiple devices.",
    tags_en: ["Apple CarPlay", "The Weather Channel", "Storm Radar", "Apple Watch", "iOS", "In-Car Systems"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/30/apple-carplay-just-added-a-major-weather-app", lang: "EN" }
    ]
  },
  {
    id: "20260830-10097",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 即將推出新一代 iPad mini：預計具備 OLED 螢幕與 A19/A20 Pro 晶片",
    summary: "根據 Mark Gurman 的報導，新一代 iPad mini 預計將於十月下旬上市，這將是該產品自 2024 年十月以來首次重大更新。新機型預計將搭載 OLED 螢幕，並升級至 A19 Pro 或 A20 Pro 晶片，提供更強勁的性能。此外，它還將具備重新設計的機身，提升防水性，並新增振動式揚聲器系統。雖然 Apple 尚未正式宣布，但市場預期這款 iPad mini 將在十月透過新聞稿或獨立活動發布，而非在大型新品發表會上亮相。目前 iPad mini 的價格為 $599，具體新機型的定價仍待觀察。",
    tags: ["Apple", "iPad mini", "OLED 螢幕", "A19 Pro", "A20 Pro"],
    title_en: "Apple to Launch Next-Generation iPad mini: Expected to Feature OLED Display and A19/A20 Pro Chip",
    summary_en: "According to Mark Gurman's reports, the next-generation iPad mini is expected to launch in late October, marking its first major update since October 2024. The new model is anticipated to feature an OLED display and upgrade to either the A19 Pro or A20 Pro chip, providing enhanced performance. Furthermore, it is expected to have a redesigned chassis with improved water resistance and an added haptic speaker system. Although Apple has not officially announced it, the market anticipates that this iPad mini will be released in October via a press release or an independent event, rather than a major product keynote. The current price of the iPad mini is $599, and the specific pricing for the new model remains to be seen.",
    tags_en: ["Apple", "iPad mini", "OLED Display", "A19 Pro", "A20 Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/30/apples-next-ipad-mini-is-almost-here-heres-what-to-expect", lang: "EN" }
    ]
  },
  {
    id: "20260830-10098",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳開發「iPhone Ultra」將支援 Apple Pencil，但市場發布可能性存疑",
    summary: "據報導，蘋果在開發其首款可折疊的 iPhone Ultra 時，曾考慮推出支援 Apple Pencil 的新配件。這項功能旨在擴展用戶的創作和生產力體驗。然而，文章指出，儘管蘋果在開發階段進行了相關的評估，但該 Apple Pencil 產品很可能不會正式進入市場。這顯示了蘋果在整合新硬體（如可折疊螢幕）與傳統配件（如 Apple Pencil）時，需要進行複雜的技術考量與市場定位評估。對於關注蘋果生態系統發展的開發者和資安人員而言，這代表了蘋果持續在提升設備功能性與生態整合度的趨勢，但同時也提醒我們，新產品的市場化過程充滿變數。",
    tags: ["Apple", "iPhone Ultra", "Apple Pencil", "可折疊手機", "產品開發"],
    title_en: "Apple reportedly developing 'iPhone Ultra' to support Apple Pencil, but market release remains questionable",
    summary_en: "Reports indicate that Apple, while developing its first foldable iPhone Ultra, considered introducing a new accessory that supports the Apple Pencil. This feature aims to expand the user's creative and productivity experience. However, the article points out that despite Apple conducting relevant evaluations during the development phase, the Apple Pencil product is unlikely to officially enter the market. This highlights the complex technical considerations and market positioning assessments Apple must undertake when integrating new hardware (such as foldable screens) with traditional accessories (like the Apple Pencil). For developers and cybersecurity professionals tracking the Apple ecosystem, this signifies Apple's continuous trend toward enhancing device functionality and ecosystem integration, but it also serves as a reminder that the path to market for new products is full of variables.",
    tags_en: ["Apple", "iPhone Ultra", "Apple Pencil", "Foldable Phone", "Product Development"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/30/iphone-ultra-apple-pencil-support-tested", lang: "EN" }
    ]
  },
  {
    id: "20260830-10141",
    trackers: ["os"],
    category: "重點關注",
    title: "Steam2 服務器資料洩露：曝光 2003 至 2013 年大量未公開 PC 遊戲開發內容",
    summary: "近期有超過 12TB 的內容資料洩露，內容涵蓋了 Steam 在 2003 年至 2013 年間的遊戲資料，據稱是 Steam 早期「Steam2」伺服器架構的完整內容備份。這批資料包括數千個「depots」，代表了當時上傳到 Steam2 伺服器的幾乎所有遊戲版本。洩露的內容不僅包含公開發行版本，更重要的是涵蓋了許多此前未曾公開的預發行、原型和測試版本。資料洩露的截止點為 2013 年，因為這時 Valve 將內容發佈系統從「Steam2」升級到目前的 SteamPipe 系統。這項升級將內容分發格式從專有格式轉為標準 HTTP 文件樹，簡化了更新和補丁下載。資料分析師指出，這些早期版本曾被認為是失落的內容，但實際上是透過公開可存取的 API 端點獲取的，顯示出內容的公開性。這起事件讓玩家和資安社群重新關注了早期遊戲開發資料的存取權與公開性。",
    tags: ["Steam", "Steam2", "Valve", "遊戲開發", "資料洩露", "SteamPipe"],
    title_en: "Steam2 Server Data Leak: Exposure of Massive Unreleased PC Game Development Content from 2003 to 2013",
    summary_en: "A data leak of over 12TB of content has recently surfaced, encompassing game data from Steam spanning the years 2003 to 2013. This data is reportedly a complete backup of the early \"Steam2\" server architecture. The leaked data includes thousands of \"depots,\" representing nearly all game versions uploaded to the Steam2 server at the time. Crucially, the leaked content does not only include publicly released versions but also covers numerous pre-release, prototype, and test builds that were never publicly disclosed. The data leak cutoff point is 2013, as this is when Valve upgraded the content distribution system from \"Steam2\" to the current SteamPipe system. This upgrade transitioned the content distribution format from a proprietary format to a standard HTTP file tree, simplifying update and patch downloads. Data analysts point out that these early versions were previously considered lost content, but in fact, were accessible through publicly available API endpoints, highlighting the public nature of the content. This incident has prompted players and the cybersecurity community to re-examine the accessibility and public status of early game development data.",
    tags_en: ["Steam", "Steam2", "Valve", "Game Development", "Data Leak", "SteamPipe"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gaming/2026/08/a-12tb-steam-teraleak-spills-more-than-a-decade-of-lost-pc-gaming-history", lang: "EN" }
    ]
  },
  {
    id: "20260830-10142",
    trackers: ["os"],
    category: "重點關注",
    title: "前總統川普罕見參與NASA新聞發布會，公開表揚羅曼太空望遠鏡任務",
    summary: "本文報導了美國國家航空暨太空總署（NASA）在佛羅里達州肯尼迪太空中心舉行關於Nancy Grace Roman Space Telescope發射任務的記者會。在例行流程之外，NASA行政主任Jared Isaacman接通了電話，讓美國前總統川普（Trump）透過電話發言。川普藉此機會公開感謝所有參與任務的人員，並稱讚羅曼太空望遠鏡的發射過程「在電視上看起來很美」。文章分析指出，總統過去很少在太空任務的後續新聞發布會上現身，這顯示了太空領域的重要性正在改變，特別是從軍事角度來看。川普近期多次參與太空相關活動，包括在休斯頓頒發獎項和宣布建立美國太空學院，顯示出其對太空領域的關注度正在提升。",
    tags: ["NASA", "Nancy Grace Roman Space Telescope", "川普", "太空任務", "美國太空總署"],
    title_en: "Former President Trump Makes Rare Appearance at NASA Press Conference, Praising Roman Space Telescope Mission",
    summary_en: "This article reports on a press conference held by the National Aeronautics and Space Administration (NASA) at the Kennedy Space Center in Florida regarding the Nancy Grace Roman Space Telescope launch mission. In an unusual development, NASA Administrator Jared Isaacman connected a call, allowing former President Trump to speak. Trump used the opportunity to publicly thank all personnel involved in the mission and praised the Roman Space Telescope launch process, calling it 'beautiful on television.' The article analyzes that the President rarely attends post-mission press conferences in the space sector, suggesting a shift in the perceived importance of space, particularly from a military perspective. Trump's recent increased involvement in space-related activities, including presenting awards in Houston and announcing the establishment of the U.S. Space Academy, indicates a growing focus on the space domain.",
    tags_en: ["NASA", "Nancy Grace Roman Space Telescope", "Trump", "Space Mission", "National Aeronautics and Space Administration"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/space/2026/08/why-it-matters-that-president-trump-just-dialed-into-a-nasa-news-conference", lang: "EN" }
    ]
  },
  {
    id: "20260830-10143",
    trackers: ["os"],
    category: "重點關注",
    title: "Meta 導入機器人自動化數據中心維護，目標降低人力成本與提升效率",
    summary: "根據多位熟悉該專案的前任及現任員工透露，Meta正在其數據中心內部測試一系列機器人系統，用於執行傳統上需要人工操作的維護任務。這些機器人系統整合了來自 Watney Robotics、Kinova 和 ABB 等多家供應商的硬體設備。測試內容包括使用 Kinova Gen3 機械手臂進行伺服器電源循環（power cycling）或切斷電力，以及更換網路線纜等。有員工估計，如果這些自動化工作成功，機器人可能取代部分人工工作量的多達 80%。此外，Meta還部署了簡單的機器人，用於遠端按壓 Mac Mini 等設備的電源按鈕進行重啟。此舉的潛在影響是，隨著 AI 基礎設施的支出激增，Meta希望透過高度自動化來維持營運成本，減少對人力資源的依賴。儘管有員工表達了對工作崗位被取代的擔憂，Meta官方發言人則強調，公司正在大力投資培訓和招聘，以應對美國自二戰以來最大的基礎設施建設熱潮所帶來的熟練勞工短缺。",
    tags: ["Meta", "數據中心", "機器人自動化", "Kinova", "ABB", "AI 基礎設施"],
    title_en: "Meta Introduces Robotic Automation for Data Center Maintenance, Aiming to Lower Labor Costs and Boost Efficiency",
    summary_en: "According to multiple former and current employees familiar with the project, Meta is testing a series of robotic systems within its data centers to perform maintenance tasks that traditionally required manual labor. These robotic systems integrate hardware equipment from multiple suppliers, including Watney Robotics, Kinova, and ABB. The testing includes using the Kinova Gen3 robotic arm to perform server power cycling or power disconnection, as well as replacing network cables. Some employees estimate that if this automation proves successful, the robots could replace up to 80% of the manual workload. Furthermore, Meta has deployed simple robots to press the power buttons on devices like Mac Minis for remote restarts. The potential implication is that, as spending on AI infrastructure surges, Meta aims to maintain operational costs through high levels of automation, reducing reliance on human resources. Although some employees have expressed concern about job displacement, Meta official spokespersons emphasized that the company is heavily investing in training and hiring to address the skilled labor shortage brought on by the largest infrastructure boom since WWII in the United States.",
    tags_en: ["Meta", "Data Center", "Robotic Automation", "Kinova", "ABB", "AI Infrastructure"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/08/inside-metas-push-to-put-robots-to-work-in-data-centers", lang: "EN" }
    ]
  },
  {
    id: "20260830-10178",
    trackers: ["os"],
    category: "重點關注",
    title: "開源影片編輯器 OpenShot 4.0 發布，全面升級至 Qt6 工具套件",
    summary: "開源非線性影片編輯應用程式 OpenShot 發布了 4.0 版本。本次升級的主要亮點是將使用者介面（UI）工具套件從 Qt5 遷移至最新的 Qt6 版本，這涉及大量的程式碼變更。除了技術框架的升級外，OpenShot 4.0 也帶來了多項實用功能增強，包括新增了錄影檢視區和音訊錄製工作區，並支援即時的多資源錄製時間軸預覽。此外，使用者還可利用新的 ComfyUI 模板進行音訊降噪、清理、修復和語音增強；新增了陰影和發光效果、分析檢視區（Analysis View）、電影顆粒預設，並整合了 YOLOv5 設置和物件偵測濾鏡的 YOLO 模型選擇器。Windows 版本的套件也進行了改進。欲試用 OpenShot 4.0.0 的使用者，可前往 GitHub 獲取原始碼和各種發行二進位檔案。",
    tags: ["OpenShot", "Qt6", "開源軟體", "影片編輯", "UI升級", "ComfyUI", "YOLOv5"],
    title_en: "OpenShot 4.0 Open-Source Video Editor Released, Fully Upgraded to Qt6 Toolkit",
    summary_en: "OpenShot, an open-source non-linear video editing application, has released version 4.0. The main highlight of this upgrade is the migration of the User Interface (UI) toolkit from Qt5 to the latest Qt6 version, which involved extensive code changes. In addition to the technical framework upgrade, OpenShot 4.0 also brings several practical feature enhancements, including the addition of a recording preview area and an audio recording workspace, and support for real-time multi-source recording timeline preview. Furthermore, users can utilize new ComfyUI templates for audio denoising, cleaning, repair, and voice enhancement; new shadow and glow effects, an Analysis View, and film grain presets have been added, along with the integration of a YOLOv5 setup and a YOLO model selector for object detection filters. The Windows version of the suite has also been improved. Users wishing to try OpenShot 4.0.0 can obtain the source code and various release binaries from GitHub.",
    tags_en: ["OpenShot", "Qt6", "Open-Source Software", "Video Editing", "UI Upgrade", "ComfyUI", "YOLOv5"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenShot-4.0", lang: "EN" }
    ]
  },
  {
    id: "20260830-10182",
    trackers: ["os"],
    category: "重點關注",
    title: "FFmpeg整合NVIDIA Vulkan FRUC功能，支援利用光流技術提升影片幀率",
    summary: "FFmpeg多媒體驅動程式近期整合了對「幀率升級轉換」（Frame Rate Up-Conversion, FRUC）的支援。此功能利用NVIDIA的Vulkan光學流（Optical Flow）擴充功能，能夠透過插入插值幀，將低幀率的影片內容轉換為更高幀率的影片，從而改善視覺品質。此支援的實作依賴於底層Vulkan API驅動程式支援 `VK_NV_optical_flow` 擴充功能。此外，文章提及曾有將NVIDIA RTX影片濾鏡分支合併至FFmpeg的嘗試，該分支原本包含使用CUDA的DeepDVC、DLPP超解析度、NGX Image Super Resolution、Smooth Motion幀生成、TrueHDR和RTX Video Super Resolution等多種高級濾鏡，但截至目前已從FFmpeg的最新Git活動中移除。",
    tags: ["FFmpeg", "NVIDIA", "Vulkan", "FRUC", "光學流", "影片處理"],
    title_en: "FFmpeg Integrates NVIDIA Vulkan FRUC Feature to Support Optical Flow Technology for Enhanced Video Frame Rates",
    summary_en: "The FFmpeg multimedia library recently integrated support for Frame Rate Up-Conversion (FRUC). This feature utilizes NVIDIA's Vulkan Optical Flow extension to convert low frame rate video content into higher frame rate video by inserting interpolated frames, thereby improving visual quality. The implementation of this support relies on the underlying Vulkan API driver supporting the `VK_NV_optical_flow` extension. Additionally, the article mentions a previous attempt to merge an NVIDIA RTX video filter branch into FFmpeg. This branch originally contained various advanced filters such as DeepDVC, DLPP Super Resolution, NGX Image Super Resolution, Smooth Motion frame generation, TrueHDR, and RTX Video Super Resolution, which utilized CUDA. However, this branch has since been removed from the latest FFmpeg Git activity.",
    tags_en: ["FFmpeg", "NVIDIA", "Vulkan", "FRUC", "Optical Flow", "Video Processing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FFmpeg-NVIDIA-RTX-FRUC", lang: "EN" }
    ]
  },
  {
    id: "20260830-10209",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "英國民眾對政府監控加密訊息持反對態度：支持隱私權與加密安全",
    summary: "根據 Center for Democracy & Technology (CDT) 的最新民意調查，英國民眾普遍認為擁有私人線上對話的權利至關重要。調查顯示，93% 的英國成年人相信他們有權利進行私人對話，且 89% 的人認為沒有人應能在沒有法院命令的情況下存取其個人訊息。民眾對政府或未來政府擁有強制存取加密訊息的權力普遍缺乏信任，無論政黨背景如何。受訪者普遍擔憂，允許政府秘密要求公司提供用戶資訊的機制，不僅可能被濫用，還會為駭客和犯罪分子引入新的安全漏洞。專家指出，政府持續推動的監控權力，與科技產業強調加密安全（encryption）的最佳實踐相衝突，這使得英國的數位隱私權爭議持續升溫。",
    tags: ["英國", "加密通訊", "隱私權", "CDT", "政府監控", "安全漏洞"],
    title_en: "British Public Opposes Government Surveillance of Encrypted Messages: Supports Privacy and Encryption Security",
    summary_en: "According to a recent survey by the Center for Democracy & Technology (CDT), the British public widely considers the right to private online conversations to be crucial. The survey found that 93% of British adults believe they have the right to private conversations, and 89% believe that no one should be able to access their personal messages without a court order. The public generally lacks trust in the government's or future government's right to mandate access to encrypted messages, regardless of political affiliation. Respondents are generally concerned that mechanisms allowing the government to secretly require companies to provide user information could not only be abused but also introduce new security vulnerabilities for hackers and criminals. Experts point out that the government's continued push for surveillance powers conflicts with the best practices of encryption security emphasized by the technology industry, keeping the debate over digital privacy in the UK escalating.",
    tags_en: ["UK", "Encrypted Communication", "Privacy", "CDT", "Government Surveillance", "Security Vulnerability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/30/turns-out-brits-would-quite-like-their-private-messages-to-stay-private/5292994", lang: "EN" }
    ]
  },
  {
    id: "20260830-10237",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟改變 Windows 遊戲整合模式：從系統內建功能轉向應用程式商店分發",
    summary: "本文回顧了 Windows 作業系統自 1985 年以來，遊戲（如 Solitaire、Minesweeper、FreeCell 等）的整合歷史變遷。早期版本（如 Windows 3.0、Vista、Windows 7）將遊戲視為系統體驗的一部分，深度內建於作業系統核心，讓使用者無需額外安裝。然而，從 Windows 8 開始，微軟開始將這些經典遊戲從系統內建功能中移除，轉而推動使用者透過 Windows Store 或 Steam 等獨立平台獲取。這種轉變標誌著遊戲與作業系統的關係從「內建功能」轉變為「獨立應用程式」。文章指出，遊戲一旦成為作業系統的一部分，微軟必須承擔長期的維護、相容性及工程成本，這使得微軟選擇將其外包給專業的應用程式商店生態系，以降低維護風險，並將 Windows 定位為一個純粹的平台。這代表遊戲不再是作業系統的「附贈品」，而是獨立的服務。",
    tags: ["Windows", "Microsoft Store", "Solitaire", "Minesweeper", "Windows 8", "作業系統設計"],
    title_en: "Microsoft Changes Windows Game Integration Model: Shifting from System Built-in Features to App Store Distribution",
    summary_en: "This article reviews the historical evolution of game integration within the Windows operating system since 1985, citing examples such as Solitaire, Minesweeper, and FreeCell. Early versions (such as Windows 3.0, Vista, and Windows 7) treated these games as integral parts of the system experience, deeply built into the OS core, requiring no additional user installation. However, starting with Windows 8, Microsoft began removing these classic games from system built-in features, instead encouraging users to obtain them through independent platforms like the Windows Store or Steam. This shift marks the relationship between games and the operating system changing from 'built-in features' to 'standalone applications.' The article notes that once a game becomes part of the operating system, Microsoft must bear the long-term maintenance, compatibility, and engineering costs. This led Microsoft to choose outsourcing them to professional app store ecosystems to mitigate maintenance risks and position Windows as a pure platform. This signifies that games are no longer 'free extras' of the OS, but independent services.",
    tags_en: ["Windows", "Microsoft Store", "Solitaire", "Minesweeper", "Windows 8", "Operating System Design"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/31/why-windows-stopped-including-fun-games-like-minesweeper-solitaire-and-pinball", lang: "EN" }
    ]
  },
  {
    id: "20260830-10025",
    trackers: ["security"],
    category: "產業動態",
    title: "線上時尚平台 29CM遭外部異常存取，超過15萬客戶個人資料外洩",
    summary: "線上時尚生活編輯店 29CM確認發生個人資料外洩事件。該平台是國內大型時尚平台 Musinsa 的子公司，主要服務2030年齡層的消費者。29CM透過其官方公告指出，事件發生於8月27日，源於用於查詢訂單資訊的聯動功能（API）遭遇外部異常存取。本次外洩的個人資訊項目共計159,852筆，主要包含姓名（138,841人）以及部分客戶的姓名、電子郵件地址、手機號碼和配送資訊（21,011人）。然而，29CM強調，敏感的帳號資訊，如支付資訊、帳號和密碼，並未包含在本次外洩項目中，並已得到安全保護。事件發生後，公司已立即阻斷了異常存取路徑，並主動向韓國資訊安全機構 KISA 報告。為防止二次傷害，公司已要求受影響客戶留意釣魚和Smishing詐騙，並建議所有使用與其他網站相同密碼的用戶立即修改密碼。",
    tags: ["29CM", "個人資料外洩", "API", "KISA", "網路安全"],
    title_en: "Online Fashion Platform 29CM Suffers External Unauthorized Access, Exposing Personal Data of Over 150,000 Customers",
    summary_en: "Online fashion lifestyle editor store 29CM has confirmed a personal data leakage incident. The platform is a subsidiary of the major domestic fashion platform Musinsa, primarily serving consumers in their 20s and 30s. 29CM announced via an official notice that the incident occurred on August 27th, stemming from external unauthorized access to a linked function (API) used for querying order information. The leaked personal information includes a total of 159,852 records, primarily comprising names (138,841 individuals) and, for 21,011 individuals, names, email addresses, mobile phone numbers, and shipping information. However, 29CM emphasized that sensitive account information, such as payment details, account credentials, and passwords, were not included in this leakage and remain securely protected. Following the incident, the company immediately blocked the unauthorized access path and proactively reported the event to the Korea Internet & Security Agency (KISA). To prevent secondary damage, the company advised affected customers to be vigilant against phishing and Smishing scams, and recommended that all users who use the same password across other websites change their passwords immediately.",
    tags_en: ["29CM", "Personal Data Leakage", "API", "KISA", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145537", lang: "EN" }
    ]
  }
];
