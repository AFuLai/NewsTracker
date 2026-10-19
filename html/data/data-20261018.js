// data-20261018.js — 2026-10-18
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-10-18"] = [
  {
    id: "20261018-16215",
    trackers: ["security"],
    category: "重大事件",
    title: "ConnectWise 宣布停用多個應用程式身份，調查遭惡意取得權限入侵 Microsoft 365 環境",
    summary: "IT 管理軟體供應商 ConnectWise 於 2026 年 10 月 17 日宣布，因調查未知威脅行為者取得其應用程式身份的未經授權存取權，並從而入侵客戶的 Microsoft 365 租戶，已暫停了包括 Cloud Backup、Cloud Management 等七個應用程式身份的連線。此次事件的風險在於，攻擊者可利用這些被盜的應用程式憑證，在未竊取客戶個別密碼的情況下，透過應用程式本身進行身份驗證，從而存取客戶的 Microsoft 365 資源，包括電子郵件、SharePoint 文件和 Teams 訊息。ConnectWise 提醒，雖然已停用連線，但先前發出的存取權杖可能仍有使用期限；同時，公司已暫時關閉了 SaaS 安全和雲端管理服務，以完成事件審查。專家指出，攻擊者可能透過新增憑證或將應用程式提升至 Global Administrator 角色來維持存取權，建議客戶應立即審查所有應用程式的權限，並特別關注是否有新增的應用程式或不尋常的存取活動。",
    tags: ["ConnectWise", "Microsoft 365", "應用程式身份", "雲端備份", "Microsoft Entra ID", "安全漏洞"],
    title_en: "ConnectWise Disables Multiple Application Identities After Investigation of Unauthorized Access to Microsoft 365 Environment",
    summary_en: "IT management software vendor ConnectWise announced on October 17, 2026, that it has suspended connections for seven application identities, including Cloud Backup and Cloud Management. This action was taken after an investigation revealed unauthorized access to its application identities by unknown threat actors, which subsequently allowed them to infiltrate client Microsoft 365 tenants. The risk posed by this incident is that attackers could utilize these stolen application credentials to authenticate and access client Microsoft 365 resources—including email, SharePoint files, and Teams messages—through the application itself, without needing to steal individual client passwords. ConnectWise warned that even though the connections have been disabled, previously issued access tokens may still have an expiration period. Furthermore, the company temporarily shut down its SaaS Security and Cloud Management services to complete the incident review. Experts pointed out that attackers may maintain access by adding credentials or elevating applications to the Global Administrator role, advising clients to immediately review all application permissions and pay special attention to any newly added applications or unusual access activity.",
    tags_en: ["ConnectWise", "Microsoft 365", "Application Identity", "Cloud Backup", "Microsoft Entra ID", "Security Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/10/connectwise-suspends-cloud-backup-after.html", lang: "EN" }
    ]
  },
  {
    id: "20261018-16336",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6571-1：修補 OpenSSH 服務中的潛在漏洞",
    summary: "Debian 官方透過安全公告 DSA-6571-1，修補了 OpenSSH 服務中發現的潛在安全漏洞。此漏洞可能影響使用特定版本的 OpenSSH 服務的系統。雖然原文未提供詳細的技術細節或CVSS評分，但此類修補通常針對遠端執行或提升權限的風險。建議所有使用 Debian 系統並依賴 OpenSSH 服務的用戶，應立即更新系統至包含修補程式的最新版本，以確保系統的安全性。用戶應遵循 Debian 官方的更新流程，例如執行 `apt update` 和 `apt upgrade`，以及時修補此類核心元件的漏洞。本公告屬於核心系統元件的維護，旨在保護用戶的遠端存取和系統完整性。",
    tags: ["Debian", "OpenSSH", "DSA-6571-1", "Linux", "安全更新"],
    title_en: "Debian Issues Security Advisory DSA-6571-1: Patching Potential Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6571-1, patching a potential vulnerability discovered in the OpenSSH service. This vulnerability may affect systems running specific versions of the OpenSSH service. Although the original text does not provide detailed technical specifics or a CVSS score, such patches typically address risks related to remote execution or privilege escalation. All users running Debian systems and relying on the OpenSSH service are advised to immediately update their systems to the latest version containing the patch to ensure system security. Users should follow the official Debian update process, such as running `apt update` and `apt upgrade`, to patch such core component vulnerabilities in a timely manner. This advisory pertains to the maintenance of core system components, aiming to protect user remote access and system integrity.",
    tags_en: ["Debian", "OpenSSH", "DSA-6571-1", "Linux", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00486.html", lang: "EN" }
    ]
  },
  {
    id: "20261018-16337",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6570-1 相關漏洞，強化系統安全性",
    summary: "Debian 安全團隊發布了安全公告，修補了一個與 DSA-6570-1 相關的漏洞。雖然原文僅提供了一個安全追蹤連結，但根據 Debian 安全公告的慣例，此類更新通常針對核心系統元件或常用應用程式進行修補，以應對潛在的系統漏洞。受影響的用戶應立即參考 Debian 官方的修補說明，並執行系統更新，確保系統達到最新的安全版本。本修補旨在提升系統的整體安全性，防止攻擊者利用已知漏洞進行未授權的存取或執行惡意代碼。用戶應特別注意檢查系統是否有待處理的更新，以避免安全風險。修補建議是透過標準的系統更新機制（如 `apt update` 和 `apt upgrade`）來完成。",
    tags: ["Debian", "DSA-6570-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Releases Security Advisory: Patching DSA-6570-1 Vulnerability to Enhance System Security",
    summary_en: "The Debian security team has issued a security advisory patching a vulnerability related to DSA-6570-1. Although the original text only provided a security tracking link, based on Debian's standard advisory practice, such updates typically address core system components or commonly used applications to mitigate potential system vulnerabilities. Affected users should immediately refer to the official Debian patch instructions and perform a system update to ensure the system reaches the latest secure version. This patch aims to enhance overall system security, preventing attackers from exploiting known vulnerabilities for unauthorized access or executing malicious code. Users should pay special attention to checking for pending system updates to avoid security risks. The recommended patch method is through standard system update mechanisms (such as `apt update` and `apt upgrade`).",
    tags_en: ["Debian", "DSA-6570-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00485.html", lang: "EN" }
    ]
  },
  {
    id: "20261018-16338",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6567：修補 OpenSSH 遠端執行漏洞",
    summary: "Debian 發布安全公告 DSA-6567，修補 OpenSSH 服務中的一個遠端執行漏洞。此漏洞可能允許未經授權的攻擊者在遠端執行程式碼。雖然原文未提供具體受影響版本或 CVSS 分數，但此類漏洞通常代表嚴重的安全風險，可能導致系統被完全控制。建議所有使用 Debian 系統並運行 OpenSSH 服務的用戶，應立即升級至包含修補程式的 OpenSSH 版本，以防止遭受遠端攻擊。修補措施的實施是透過 Debian 的標準安全更新機制（如 apt update/upgrade）完成的。",
    tags: ["Debian", "OpenSSH", "DSA-6567", "遠端執行", "Linux 核心"],
    title_en: "Debian Issues Security Advisory DSA-6567: Patching OpenSSH Remote Code Execution Vulnerability",
    summary_en: "Debian has released security advisory DSA-6567, addressing a remote code execution vulnerability in the OpenSSH service. This vulnerability could potentially allow unauthorized attackers to execute code remotely. Although the original advisory does not specify affected versions or a CVSS score, such vulnerabilities typically represent a severe security risk, potentially leading to complete system compromise. All users running Debian systems and utilizing the OpenSSH service are advised to immediately upgrade to the patched OpenSSH version to prevent remote attacks. The patch can be applied using Debian's standard security update mechanism (such as apt update/upgrade).",
    tags_en: ["Debian", "OpenSSH", "DSA-6567", "Remote Code Execution", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00484.html", lang: "EN" }
    ]
  },
  {
    id: "20261018-16346",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心 7.3 版本發布：包含 failfs、group-scheduling 等多項重大功能更新",
    summary: "Linux 核心開發者 Linus Torvalds 正式發布了 7.3 版本。本次發布在開發史上創下紀錄，匯集了來自 3,021 位開發者提交的 18,765 個非合併提交。本次版本包含了多項重大功能改進，包括全新的 failfs 文件系統、旨在提升大型系統效能的 group-scheduling 工作、用於虛擬機的 working-set tracking，以及對 ntfs3 文件系統的替代資料流支援等。此外，還進行了 fchroot() 系統呼叫的改進，以及 SMB 伺服器等多個核心元件的優化。這些更新代表了 Linux 核心持續的穩定性和功能擴展，為系統管理和虛擬化提供了更強大的基礎設施。開發者應關注這些核心元件的變動，以確保系統能充分利用新版本帶來的效能和穩定性提升。",
    tags: ["Linux 核心", "7.3", "failfs", "group-scheduling", "Linus Torvalds", "kernel"],
    title_en: "Linux Kernel 7.3 Released: Featuring Major Updates Including failfs and Group Scheduling",
    summary_en: "Linux kernel developer Linus Torvalds has officially released version 7.3. This release sets a development record, incorporating 18,765 non-merged submissions from 3,021 developers. This version includes multiple major feature enhancements, including the brand-new failfs file system, group-scheduling work designed to improve large system performance, working-set tracking for virtual machines, and alternative data stream support for the ntfs3 file system. Furthermore, improvements were made to the fchroot() system call, along with optimizations to several core components, such as the SMB server. These updates represent the continuous stability and functional expansion of the Linux kernel, providing a more robust infrastructure for system administration and virtualization. Developers should pay attention to these core component changes to ensure their systems can fully utilize the performance and stability improvements brought by the new version.",
    tags_en: ["Linux Kernel", "7.3", "failfs", "group-scheduling", "Linus Torvalds", "kernel"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1101143", lang: "EN" }
    ]
  },
  {
    id: "20261018-16352",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 核心版本發布：提升 I/O 效能、支援 AMD Zen 6 並修復系統穩定性問題",
    summary: "Linux 核心版本 7.3 已按時發布，為下一穩定版本。本次更新包含多項重大改進，特別是針對現代系統的 I/O 性能提升，以及對 AMD Zen 6 平台的準備工作。此外，還加入了 Steam Controller 2026 核心驅動支援，並改善了對舊款 AMD GPU 的支援，以及有限顯示記憶體（vRAM）的管理。在穩定性方面，本次版本修復了自 2024 年以來偶發的 SMP 啟動掛起（boot hangs）問題，並提供了針對部分韌體版本誤報能力的 Samsung 990 PRO 和 990 EVO Plus SSD 的解決方案。開發者可從 kernel.org 下載 Linux 7.3。未來開發者應關注 Linux 7.4 的發展，該版本有望在今年底前發布，並可能成為今年的長期支援（LTS）版本。",
    tags: ["Linux 7.3", "Linux 核心", "AMD Zen 6", "I/O 效能", "SMP", "kernel.org"],
    title_en: "Linux 7.3 Kernel Release: Enhancing I/O Performance, Supporting AMD Zen 6, and Fixing System Stability Issues",
    summary_en: "Linux Kernel version 7.3 has been released on schedule, serving as the next stable version. This update includes multiple major improvements, particularly enhancing I/O performance for modern systems and preparing support for the AMD Zen 6 platform. Additionally, it incorporates support for the Steam Controller 2026 core driver, improves support for older AMD GPUs, and refines limited video RAM (vRAM) management. Regarding stability, this version fixes intermittent SMP boot hang issues observed since 2024 and provides solutions for false reporting capabilities in certain firmware versions of the Samsung 990 PRO and 990 EVO Plus SSDs. Developers can download Linux 7.3 from kernel.org. Developers should look forward to the development of Linux 7.4, which is expected to be released before the end of this year and may become this year's Long Term Support (LTS) version.",
    tags_en: ["Linux 7.3", "Linux Kernel", "AMD Zen 6", "I/O Performance", "SMP", "kernel.org"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-Released", lang: "EN" }
    ]
  },
  {
    id: "20261018-16353",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心修補：移除 Intel TDX 虛擬機不必要的快取刷新，提升效能",
    summary: "Intel Trust Domain Extensions (TDX) 用於機密運算虛擬機（VM），過去在記憶體轉換 KeyIDs 時，曾被假設需要進行額外的快取刷新（cache flushing）。然而，根據 Linux 核心工程師 Rick Edgecombe 的說明，現今的 Intel Xeon 硬體已能自行處理這些問題，無需軟體層的輔助。因此，Linux 核心正在透過一系列修補程式（patches）移除這些不必要的軟體驅動快取刷新程式碼。此變動旨在簡化核心程式碼，並預期能提升 Intel TDX VM 的整體效能。雖然 Intel 官方文件尚未完全更新，但已確認所有最終版本的 TDX 硬體都不需要額外的快取刷新。Intel TDX 最初出現在 select Xeon Sapphire Rapids 處理器，但自 Emerald Rapids 以來已支援所有 Xeon 處理器。",
    tags: ["Intel TDX", "Linux 核心", "Xeon", "快取刷新", "虛擬機", "機密運算"],
    title_en: "Linux Kernel Patch: Removing Unnecessary Cache Flushing for Intel TDX Virtual Machines to Boost Performance",
    summary_en: "Intel Trust Domain Extensions (TDX) are used for confidential computing virtual machines (VMs). Previously, it was assumed that additional cache flushing was required when handling memory translation KeyIDs. However, according to Linux kernel engineer Rick Edgecombe, modern Intel Xeon hardware can handle these issues autonomously, eliminating the need for software-level assistance. Consequently, the Linux kernel is removing this unnecessary software-driven cache flushing code through a series of patches. This change aims to simplify the core code and is expected to improve the overall performance of Intel TDX VMs. Although Intel's official documentation has not been fully updated, it is confirmed that all final versions of TDX hardware do not require additional cache flushing. Intel TDX initially appeared in select Xeon Sapphire Rapids processors, but has since been supported by all Xeon processors starting with Emerald Rapids.",
    tags_en: ["Intel TDX", "Linux Kernel", "Xeon", "Cache Flushing", "Virtual Machine", "Confidential Computing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-TDX-Less-Cache-Flushing", lang: "EN" }
    ]
  },
  {
    id: "20261018-16354",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 核心預覽：強化 AMD HDMI 2.1、AMD PerfOpt 支援及 Apple M4/M3 裝置樹支援",
    summary: "Linux 7.4 核心預計將帶來多項重大硬體支援與效能提升。在圖形驅動方面，AMDGPU 驅動程式預計將預設啟用 HDMI 2.1 支援，並整合 VRR 和 ALLM 功能，為現代 Radeon 顯示卡提供優化體驗。此外，AMD iGPU 將透過預設啟用的 AMD PerfOpt IOMMU 功能，大幅提升 AI/LLM 運算效能，涵蓋包括前一代硬體。針對 CPU 方面，Linux 7.4 強化了對 AMD Zen 6 的支援，包含新的 BTB CTX 隔離功能、AMD RMPOPT 優化和 P-State 驅動程式改進，並新增了對 Ryzen AI Max 400 系列 NPU (Gorgon Halo) 的支援。其他重點包括 Intel 準備支援 Rugged Panther Lake 和 Intel BFF 驅動；Apple 平台預計加入 Apple M4 和 A18 Pro 的初始 Device Trees，儘管目前仍需更多啟用工作；同時，系統層面也提升了 EXT4 的 I/O 效能，並為虛擬化增加了 Intel Instruction Timeout 功能，以應對 Denial of Service 攻擊。",
    tags: ["Linux 7.4", "AMDGPU", "AMD PerfOpt", "Apple M4", "Zen 6", "核心更新"],
    title_en: "Linux 7.4 Kernel Preview: Enhanced AMD HDMI 2.1, AMD PerfOpt Support, and Apple M4/M3 Device Tree Support",
    summary_en: "The Linux 7.4 kernel is expected to deliver several major hardware support and performance enhancements. In graphics drivers, the AMDGPU driver is anticipated to enable HDMI 2.1 support by default, integrating VRR and ALLM features to provide an optimized experience for modern Radeon graphics cards. Furthermore, AMD iGPU will significantly boost AI/LLM computing performance through the default-enabled AMD PerfOpt IOMMU feature, covering even previous generation hardware. Regarding CPUs, Linux 7.4 strengthens support for AMD Zen 6, including new BTB CTX isolation features, AMD RMPOPT optimizations, and P-State driver improvements, while also adding support for the Ryzen AI Max 400 series NPU (Gorgon Halo). Other key additions include Intel's preparation for Rugged Panther Lake support and Intel BFF drivers; Apple platforms are expected to incorporate initial Device Trees for the Apple M4 and A18 Pro, although further enablement work is still required. System-level improvements include enhanced EXT4 I/O performance and the addition of Intel Instruction Timeout functionality for virtualization, aimed at mitigating Denial of Service attacks.",
    tags_en: ["Linux 7.4", "AMDGPU", "AMD PerfOpt", "Apple M4", "Zen 6", "Kernel Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-Features-Preview", lang: "EN" }
    ]
  },
  {
    id: "20261018-16355",
    trackers: ["os"],
    category: "Linux",
    title: "Omarchy 4.0.5 更新：優化預設瀏覽器啟動，將速度從 72ms 提升至 10ms",
    summary: "Omarchy 4.0.5 版本作為基於 Arch Linux 的發行版，針對使用者經常啟動網頁瀏覽器的痛點，進行了微秒級別的優化。原先使用 `xdg-settings get default-web-browser` 尋找預設瀏覽器時，由於 POSIX shell 腳本的複雜性，耗時約 72 毫秒。本次更新引入了新的輔助工具 `omarchy-cmd-default-browser`，該工具透過讀取 `config-dir mimeapps.list` 檔案，大幅將啟動時間優化至約 10 毫秒。此外，Omarchy 還針對其 Shell 的介面效能進行了獨立優化，將在多螢幕（六螢幕）和多小工具配置下的啟動時間從約 20 秒降低至約 15 秒。這些改進提升了系統的整體響應速度和使用者體驗，適用於追求極致效能的 Linux 用戶。",
    tags: ["Omarchy", "Arch Linux", "Linux 核心", "xdg-settings", "Hyprland", "Linux 發行版"],
    title_en: "Omarchy 4.0.5 Update: Optimizing Default Browser Startup, Improving Speed from 72ms to 10ms",
    summary_en: "Omarchy 4.0.5, a distribution based on Arch Linux, has implemented microsecond-level optimizations to address the common pain point of launching web browsers. Previously, querying the default browser using `xdg-settings get default-web-browser` took approximately 72 milliseconds due to the complexity of the POSIX shell script. This update introduces a new helper tool, `omarchy-cmd-default-browser`, which reads the `config-dir mimeapps.list` file, significantly optimizing the startup time to approximately 10 milliseconds. Furthermore, Omarchy has independently optimized its Shell's interface performance, reducing the startup time from approximately 20 seconds to approximately 15 seconds when configured with multiple monitors (six monitors) and multiple widgets. These improvements enhance the system's overall responsiveness and user experience, making it ideal for Linux users who demand peak performance.",
    tags_en: ["Omarchy", "Arch Linux", "Linux Kernel", "xdg-settings", "Hyprland", "Linux Distribution"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Omarchy-Faster-Web-Browser", lang: "EN" }
    ]
  },
  {
    id: "20261018-16404",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 仍沿用 MS-DOS 8.3 命名規則，專家解釋其深層的相容性考量",
    summary: "本文探討 Windows 11 26H2 等新版本作業系統中，核心系統檔案（如 kernel32.dll, user32.dll, ntoskrnl.exe）仍沿用 MS-DOS 的 8.3 命名規則。這種規則限制檔名最多為 8 個字符和 3 個擴展名，且只能使用 ASCII 字符。資深 Windows 開發者 Raymond Chen 指出，這主要是為了確保系統的極致相容性。由於數十年來大量的應用程式和系統元件是根據這些舊檔名硬編碼或依賴的，若貿然更改這些核心檔案名稱，將會導致廣泛的系統崩潰和應用程式無法運行。此外，即使是現代的 NTFS 檔案系統也保留了短檔名別名（如 PROGRA~1），以維持與舊系統的兼容性。因此，儘管長檔名（支援 255 個字符）是現代標準，但為了避免觸發更複雜的相容性問題，微軟目前選擇維持這種「已知缺陷」的舊有命名習慣。",
    tags: ["Windows 11", "MS-DOS", "8.3 命名規則", "System32", "Raymond Chen", "相容性"],
    title_en: "Windows 11 Retains MS-DOS 8.3 Naming Convention, Experts Explain Deep Compatibility Considerations",
    summary_en: "This article explores how core system files in newer operating systems like Windows 11 26H2 still adhere to the MS-DOS 8.3 naming convention. This rule limits file names to a maximum of 8 characters and 3 extensions, and restricts the use of only ASCII characters. Senior Windows developer Raymond Chen points out that this is primarily to ensure extreme system compatibility. Because countless applications and system components have been hardcoded or depend on these old file names over decades, abruptly changing these core file names would cause widespread system crashes and application failures. Furthermore, even modern NTFS file systems retain short file name aliases (such as PROGRA~1) to maintain compatibility with older systems. Therefore, although long file names (supporting 255 characters) are the modern standard, Microsoft currently chooses to maintain this 'known defect' legacy naming practice to avoid triggering more complex compatibility issues.",
    tags_en: ["Windows 11", "MS-DOS", "8.3 Naming Convention", "System32", "Raymond Chen", "Compatibility"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/18/microsoft-explains-why-windows-11-still-uses-ms-dos-file-names-and-why-it-cant-change-them", lang: "EN" }
    ]
  },
  {
    id: "20261018-16405",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 將預設阻擋 ReFS 格式的 USB 隨身碟，實施時間為 2027 年 1 月",
    summary: "微軟宣布，從 2027 年 1 月的安全性更新開始，Windows 11 將預設阻擋 ReFS (Resilient File System) 格式的外部可移除媒體（如 USB 隨身碟）。雖然 ReFS 在效能、安全性及資料完整性等方面被認為優於傳統的 NTFS，甚至被微軟用於 Dev Drive 等開發工作負載，但微軟官方指出，ReFS 在可移除媒體上仍屬於「不受支援」的配置。目前，Windows 11 已在 2026 年 10 月的更新中開始發出警告，但尚未自動阻擋。在 2027 年 1 月的第二階段更新中，系統將預設啟用審核和阻擋功能，若未手動修改設定，將無法存取 ReFS 外部磁碟上的資料。若使用者仍需使用 ReFS 格式的外部裝置，必須透過群組原則 (Group Policy) 或 Windows 登錄檔 (Registry) 手動覆寫此預設限制。微軟強調，阻擋僅影響存取權限，不會刪除磁碟上的檔案。",
    tags: ["Windows 11", "ReFS", "NTFS", "USB 隨身碟", "微軟", "Group Policy", "2027 年 1 月"],
    title_en: "Windows 11 will block ReFS formatted USB drives by default starting January 2027",
    summary_en: "Microsoft has announced that starting with a January 2027 security update, Windows 11 will block external removable media formatted with ReFS (Resilient File System) by default (such as USB flash drives). Although ReFS is considered superior to traditional NTFS in terms of performance, security, and data integrity—and is even used by Microsoft for development workloads like Dev Drive—Microsoft officially states that ReFS on removable media remains an 'unsupported' configuration. Currently, Windows 11 has begun issuing warnings since the October 2026 update, but it has not yet blocked access. In the second phase of the January 2027 update, the system will enable auditing and blocking functionality by default. If settings are not manually changed, users will be unable to access data on ReFS external drives. Users who still require the use of ReFS formatted external devices must manually override this default restriction using Group Policy or the Windows Registry. Microsoft emphasizes that the block only affects access permissions and will not delete files on the drive.",
    tags_en: ["Windows 11", "ReFS", "NTFS", "USB flash drive", "Microsoft", "Group Policy", "January 2027"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/18/windows-11-will-block-refs-on-usb-drives-even-as-microsoft-bets-big-on-its-ntfs-alternative", lang: "EN" }
    ]
  },
  {
    id: "20261018-16230",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "SiteGuard WAF遭利用OS指令注入漏洞（CVE-2026-106931），攻擊者可取得系統Root權限",
    summary: "資安廠商SiteGuard發出警報，指出其Server Edition Web Application Firewall (WAF) 存在一項OS指令注入漏洞（CVE-2026-106931）。此漏洞影響WAF主機型別的統計功能，且該功能預設為啟用狀態。該漏洞被評定為高風險，且目前已確認在野外被攻擊者利用。攻擊者若成功利用，可於受影響系統上以Root或SYSTEM權限執行任意指令。受影響版本包括SiteGuard Server Edition for Apache httpd, Nginx, and IIS (不含FreeBSD) 的 2.20 及以上，但低於 8.00 Update 5；以及 SiteGuard Server Edition for Apache httpd 和 Nginx on FreeBSD 的 2.20 及以上，但低於 7.00 Update 6。若統計功能啟用，上述版本皆可被成功利用。廠商建議用戶應立即修補，並提醒管理員在修復前，應先從網頁管理介面下載並保留「Diagnostic information」作為證據。廠商已於 9 月 29 日通知有直接支援聯繫的客戶。",
    tags: ["SiteGuard", "CVE-2026-106931", "WAF", "OS指令注入", "Web Application Firewall"],
    title_en: "SiteGuard WAF Exploited via OS Command Injection Vulnerability (CVE-2026-106931), Allowing Attacker to Obtain System Root Privileges",
    summary_en: "Security vendor SiteGuard has issued an alert regarding an OS command injection vulnerability (CVE-2026-106931) found in its Server Edition Web Application Firewall (WAF). This vulnerability affects the WAF's host-type statistics function, which is enabled by default. The vulnerability is rated as high risk and has been confirmed to be exploited in the wild. If successfully exploited, an attacker can execute arbitrary commands on the affected system with Root or SYSTEM privileges. Affected versions include SiteGuard Server Edition for Apache httpd, Nginx, and IIS (excluding FreeBSD) versions 2.20 and above, but lower than 8.00 Update 5; and SiteGuard Server Edition for Apache httpd and Nginx on FreeBSD versions 2.20 and above, but lower than 7.00 Update 6. All listed versions are exploitable if the statistics function is enabled. The vendor advises users to patch immediately and reminds administrators to download and retain the \"Diagnostic information\" from the web management interface as evidence before remediation. The vendor notified directly supported customers on September 29.",
    tags_en: ["SiteGuard", "CVE-2026-106931", "WAF", "OS Command Injection", "Web Application Firewall"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-exploit-siteguard-waf-flaw-to-run-commands-as-system-root", lang: "EN" }
    ]
  },
  {
    id: "20261018-16237",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "JQ-Lite 曝 CVE-2026-78497：正規表達式可執行任意 Perl 程式碼",
    summary: "JQ::Lite 函式庫在版本 2.51 之前存在一個嚴重的安全漏洞 CVE-2026-78497。此漏洞屬於「評估注入」（Eval Injection）類型，允許攻擊者透過提供惡意的查詢字串，或讓應用程式將惡意字串插入到正規表達式模式中，執行任意 Perl 程式碼。漏洞的機制是當 `test()`、`match()` 或 `select()` 的模式被編譯為源文本時，如果模式中包含 `(?{ ... })` 程式碼區塊，該程式碼將在呼叫進程中執行，即使沒有使用 `use re 'eval'` 指令。攻擊者可以利用此機制在呼叫進程中執行任意程式碼，造成極高的風險。修復建議是立即將 JQ-Lite 升級至 2.51 或更高版本。",
    tags: ["CVE-2026-78497", "JQ-Lite", "Perl", "Eval Injection", "正規表達式"],
    title_en: "JQ-Lite Exposed to CVE-2026-78497: Regular Expression Allows Arbitrary Perl Code Execution",
    summary_en: "The JQ::Lite library contains a critical vulnerability, CVE-2026-78497, in versions prior to 2.51. This vulnerability is classified as 'Eval Injection,' which allows an attacker to execute arbitrary Perl code by providing a malicious query string, or by causing the application to insert a malicious string into a regular expression pattern. The mechanism of the vulnerability is that when the patterns for `test()`, `match()`, or `select()` are compiled into source text, if the pattern contains a `(?{ ... })` code block, that code will execute in the calling process, even without using the `use re 'eval'` directive. An attacker can exploit this mechanism to execute arbitrary code in the calling process, posing an extremely high risk. The recommended fix is to immediately upgrade JQ-Lite to version 2.51 or higher.",
    tags_en: ["CVE-2026-78497", "JQ-Lite", "Perl", "Eval Injection", "Regular Expression"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/18/3", lang: "EN" }
    ]
  },
  {
    id: "20261018-16238",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Camel 釋出 38 個安全修補程式，修復多項高風險路徑穿越與 RCE 漏洞",
    summary: "Apache Camel PMC 在 2026 年 10 月 15 日發布了 38 個安全公告，修復了多個高風險漏洞。這些漏洞涵蓋了路徑穿越（Path Traversal）、遠端程式碼執行（RCE）、伺服器端請求偽造（SSRF）和身份驗證繞過等類型。受影響的組件包括 Camel-Hazelcast、Camel-Docling、Camel-Spring-Redis、Camel-FTP、Camel-Mina-SFTP、Camel-SMB、Camel-Azure-Files、Camel-OAuth 等。例如，CVE-2026-78165 允許透過 Java 反序列化在 Redis 載荷中實現 RCE；CVE-2026-79983 等多個組件存在路徑穿越風險，可能導致攻擊者讀取、刪除或重新命名超出預期目錄的檔案。修補版本為 4.18.5、4.22.1 和 4.23.0。使用者應立即升級至這些版本。文章特別提醒，舊版本 4.14.x 已達到生命週期終止（End of Life），建議升級至支援版本以獲得修補。",
    tags: ["Apache Camel", "CVE-2026-78165", "RCE", "Path Traversal", "SSRF", "Java Deserialization"],
    title_en: "Apache Camel Releases 38 Security Patches to Fix Multiple High-Risk Path Traversal and RCE Vulnerabilities",
    summary_en: "The Apache Camel PMC released 38 security advisories on October 15, 2026, addressing multiple high-risk vulnerabilities. These vulnerabilities cover types including Path Traversal, Remote Code Execution (RCE), Server-Side Request Forgery (SSRF), and authentication bypass. Affected components include Camel-Hazelcast, Camel-Docling, Camel-Spring-Redis, Camel-FTP, Camel-Mina-SFTP, Camel-SMB, Camel-Azure-Files, and Camel-OAuth. For instance, CVE-2026-78165 allows RCE via Java deserialization in Redis payloads; while multiple components, such as those affected by CVE-2026-79983, contain path traversal risks that could allow attackers to read, delete, or rename files outside of expected directories. The patched versions are 4.18.5, 4.22.1, and 4.23.0. Users are advised to upgrade immediately to these versions. The article specifically warns that the older version 4.14.x has reached End of Life (EOL), and users are recommended to upgrade to a supported version to receive patches.",
    tags_en: ["Apache Camel", "CVE-2026-78165", "RCE", "Path Traversal", "SSRF", "Java Deserialization"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/10/18/2", lang: "EN" }
    ]
  },
  {
    id: "20261018-16281",
    trackers: ["os"],
    category: "Apple",
    title: "Apple持續升級Phone App：iOS 27將帶來更多功能與改善",
    summary: "本文介紹Apple的Phone App持續不斷的進化，指出該應用程式不僅功能越來越強大，且持續為用戶帶來新的使用體驗。文章列舉了目前可使用的功能，並預告了在即將推出的iOS 27版本中將新增更多功能。這些更新旨在提升用戶在日常通訊和通話管理方面的便利性與效率。由於原文為產品介紹性質，未提供具體漏洞或安全細節，故無法提供CVSS分數或修補建議。建議用戶留意Apple官方發布的iOS 27更新，以掌握最新的功能與使用方式。",
    tags: ["Apple", "iOS 27", "Phone App", "Apple iPhone"],
    title_en: "Apple Continues to Upgrade Phone App: iOS 27 to Bring More Features and Improvements",
    summary_en: "This article introduces the continuous evolution of Apple's Phone App, noting that the application is not only becoming more powerful but also constantly providing users with new experiences. It lists currently available features and previews additional functionalities that will be added in the upcoming iOS 27 version. These updates aim to enhance the convenience and efficiency of users in daily communication and call management. Since the original text is promotional in nature and does not provide specific vulnerabilities or security details, CVSS scores or patch recommendations cannot be provided. Users are advised to monitor official Apple releases regarding the iOS 27 update to stay informed about the latest features and usage methods.",
    tags_en: ["Apple", "iOS 27", "Phone App", "Apple iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/18/apple-keeps-making-the-phone-app-better-heres-how", lang: "EN" }
    ]
  },
  {
    id: "20261018-16282",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 新版健康 App 介面優化，但用戶建議增加以睡眠為基準的活動日計算功能",
    summary: "本文針對 Apple 新設計的健康 App 進行個人使用心得分享。該 App 介面易於閱讀，並整合了 Readiness 和 Health Age 等新功能，讓用戶能更深入地關注日常健康數據，包括 Vitals 和 Sleep 等現有功能。雖然該 App 尚未正式發布，但曾於 iOS 27.2 測試版出現，預計將在今年稍晚的 iOS 27.3 Beta 版中回歸，並於今年底前正式發布。作者提出一個個人建議：希望 Apple 能參考 WHOOP 的模式，將活動日期的計算基準從固定的 24 小時時鐘，改為以用戶的睡眠時間為基準。這樣能更準確地追蹤運動目標，特別是在跨越午夜或深夜進行活動時，能讓活動計數更符合生理時間的連續性。此為個人使用體驗分享，無重大漏洞或修補建議。",
    tags: ["Apple Watch", "Health app", "iOS 27.3", "Apple Health", "WHOOP"],
    title_en: "Apple's Redesigned Health App Interface Optimized, But Users Suggest Basing Activity Day Calculation on Sleep",
    summary_en: "This article shares personal usage experiences with Apple's newly designed Health App. The app interface is easy to read and integrates new features like Readiness and Health Age, allowing users to monitor their daily health data more deeply, including existing functions like Vitals and Sleep. Although the app has not been officially released, it appeared in the iOS 27.2 beta and is expected to return in the iOS 27.3 Beta, with a formal release anticipated by the end of this year. The author proposes a personal suggestion: Apple should consider adopting a model similar to WHOOP, changing the basis for calculating activity days from a fixed 24-hour clock to a basis centered on the user's sleep time. This would allow for more accurate tracking of fitness goals, especially when exercising across midnight or late at night, ensuring the activity count aligns better with physiological continuity. This is a personal usage experience share and does not contain any major vulnerabilities or patch recommendations.",
    tags_en: ["Apple Watch", "Health app", "iOS 27.3", "Apple Health", "WHOOP"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/18/apple-redesigned-health-app-one-suggestion-series-12", lang: "EN" }
    ]
  },
  {
    id: "20261018-16283",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果傳將推出第一款觸控螢幕MacBook Pro，搭載Tandem OLED與M5晶片",
    summary: "根據市場傳聞，蘋果（Apple）預計將在 11 月 6 日推出首款具備觸控螢幕的 MacBook Pro。這款改版機型將採用 Tandem OLED 顯示面板，具備卓越的色彩表現、高對比度和亮度，類似於 iPad Pro 的顯示效果。此外，機型預計配備 Dynamic Island，但不會支援 Face ID。在軟體層面，macOS 27 將針對觸控操作進行優化，例如在用戶點擊按鈕或控制項時，會彈出周圍的相關選項選單，以提升觸控操作的相關性。晶片方面，雖然最初預計搭載 M6 Pro/Max，但蘋果現階段將延遲發布，改用現有的 M5 Pro 和 M5 Max 晶片。傳聞指出，未來可能會推出搭載 M7 晶片的基礎型號。整體設計上，新機型預計會更輕薄，但需確保散熱性能不受影響。建議關注蘋果官方在產品發布時的正式公告。",
    tags: ["Apple", "MacBook Pro", "Tandem OLED", "Dynamic Island", "M5 Pro", "M5 Max", "macOS 27"],
    title_en: "Apple rumored to launch first touchscreen MacBook Pro featuring Tandem OLED and M5 chip",
    summary_en: "According to market rumors, Apple is expected to launch the first touchscreen MacBook Pro on November 6. This redesigned model will feature a Tandem OLED display panel, offering excellent color reproduction, high contrast, and brightness, similar to the iPad Pro's display performance. Furthermore, the model is expected to include Dynamic Island but will not support Face ID. On the software side, macOS 27 will be optimized for touch operations; for instance, when users click a button or control, a relevant options menu will pop up around it, enhancing the relevance of touch interactions. Regarding the chip, although initially expected to feature the M6 Pro/Max, Apple is currently delaying the release, opting instead for the existing M5 Pro and M5 Max chips. Rumors suggest that future models might feature an M7 chip in base configurations. Overall, the new model is expected to be lighter and thinner, while ensuring that cooling performance is not compromised. Users are advised to wait for the official announcement from Apple upon product launch.",
    tags_en: ["Apple", "MacBook Pro", "Tandem OLED", "Dynamic Island", "M5 Pro", "M5 Max", "macOS 27"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/18/new-macbook-pro-with-touchscreen-and-oled-november-6-release", lang: "EN" }
    ]
  },
  {
    id: "20261018-16284",
    trackers: ["os"],
    category: "Apple",
    title: "Apple HomeView 智能家居顯示器發布，傳聞未來可能配備機械手臂解決互動場景問題",
    summary: "Apple 正式發表了其期待已久的智能家居顯示器 HomeView，定價為 $299。該產品的開發歷程經歷了多次延遲，主要原因在於 Apple 正在開發更智慧的 Siri 功能。儘管 HomeView 已經上市，但市場上出現了用戶對於產品在多人共用桌面上使用時，需要移動設備才能確保所有人都可互動的疑慮。根據 Power On 的報導，Apple 可能很快會推出解決此問題的方案，甚至傳聞未來 HomeView 可能會配備機械手臂，以提升多用戶環境下的使用體驗。",
    tags: ["Apple", "HomeView", "智能家居", "Siri", "macOS", "產品發表"],
    title_en: "Apple unveils HomeView smart home display, rumored to feature robotic arm to solve interaction challenges",
    summary_en: "Apple officially launched its highly anticipated smart home display, HomeView, priced at $299. The product's development has faced multiple delays, primarily because Apple was developing more advanced Siri functionalities. Although HomeView is now available, concerns have emerged in the market regarding the need to physically move the device to ensure all users can interact when sharing a multi-person surface. According to Power On, Apple may soon introduce a solution to this issue, and rumors even suggest that future HomeView models might be equipped with a robotic arm to enhance the user experience in multi-user environments.",
    tags_en: ["Apple", "HomeView", "Smart Home", "Siri", "macOS", "Product Launch"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/10/18/apples-next-homeview-could-debut-as-soon-as-next-year-with-a-robotic-arm-report", lang: "EN" }
    ]
  },
  {
    id: "20261018-16206",
    trackers: ["security"],
    category: "前瞻技術",
    title: "CyberSN報告揭示美國資安職缺市場趨勢：AI安全工程師需求暴增，但整體職位數下降",
    summary: "CyberSN的《網路安全職位報告》分析了美國資安職位市場的趨勢，指出整體職位發布數量已降至四年低點，2026年一至九月總計為235,786個，較2025年同期下降26.4%。儘管總體職缺減少，但特定領域的需求卻呈現顯著增長。其中，AI安全工程師（AI Security Engineer）的需求暴增了268.3%，而網路安全資料科學家（Cyber Data Scientist）的需求也增長了203.5%。報告顯示，AI相關知識需求依然高，目前約有15%的職位發布提及AI，且在2026年9月達到高峰，高達20.0%。在職能分析上，研究（Research）和攻擊（Offense）等領域對AI的理解需求增幅最明顯。然而，報告也指出多個傳統資安職位，如網路內部威脅分析師（Cyber Insider Threat Analyst）和滲透測試人員（Penetration Tester）等，職位需求出現大幅下降。這顯示市場需求正在從傳統角色轉向具備AI和數據分析能力的專業人才，建議專業人士應關注AI相關技能的提升，並留意市場結構性變化。",
    tags: ["CyberSN", "AI Security Engineer", "網路安全職位", "資安市場", "數據科學", "CVE"],
    title_en: "CyberSN Report Reveals US Cybersecurity Job Market Trends: Surging Demand for AI Security Engineers, But Overall Job Count Declines",
    summary_en: "CyberSN's 'Cybersecurity Job Report' analyzed trends in the US cybersecurity job market, noting that the total number of job postings has fallen to a four-year low, totaling 235,786 from January to September 2026, a 26.4% decrease compared to the same period in 2025. Despite the overall reduction in job openings, specific areas show significant growth. Notably, the demand for AI Security Engineers surged by 268.3%, and the demand for Cyber Data Scientists increased by 203.5%. The report indicates that the need for AI-related knowledge remains high, with approximately 15% of job postings mentioning AI, peaking in September 2026 at 20.0%. In terms of functional analysis, Research and Offense roles showed the most significant increase in demand for AI understanding. However, the report also points to a sharp decline in demand for several traditional cybersecurity roles, such as Cyber Insider Threat Analyst and Penetration Tester. This suggests that market demand is shifting from traditional roles toward professionals equipped with AI and data analysis capabilities, advising professionals to focus on enhancing AI-related skills and paying attention to structural market changes.",
    tags_en: ["CyberSN", "AI Security Engineer", "Cybersecurity Job", "Cybersecurity Market", "Data Science", "CVE"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/us-cybersecurity-job-postings-fall-26-as-ai-security-engineer-demand-soars", lang: "EN" }
    ]
  },
  {
    id: "20261018-16356",
    trackers: ["os"],
    category: "重點關注",
    title: "Rust 開源瀏覽器引擎 Servo 0.6 更新：新增 CSS Grid 支援與 Threadboost 效能提升",
    summary: "Servo 瀏覽器引擎發布了 0.6 版本，這是一個基於 Rust 語言的開源專案。本次更新的主要亮點包括全面支援 CSS Grid，這使得更多網站內容能在 Servo 上正確渲染。此外，Servo 也加入了 CSS color-scheme、animation-composition 等多項新功能，並新增了多個 DOM API。在 JavaScript 方面，Servo 整合了 SpiderMonkey 153 版本，以修復安全和崩潰相關的漏洞。性能方面，Servo 引入了實驗性的「Threadboost」功能，據報告可將 Speedometer 基準測試分數提升 50%。此外，引擎還增加了可選的磁碟支援 HTTP 快取，並持續在無障礙功能和 AudioWorklet 等領域進行開發。這些更新顯示了 Servo 在功能完善和效能優化上的重大進展。",
    tags: ["Servo", "Rust", "CSS Grid", "SpiderMonkey", "開源瀏覽器", "Web 標準"],
    title_en: "Servo Browser Engine 0.6 Update: Adds CSS Grid Support and Threadboost Performance Boost",
    summary_en: "The Servo browser engine has released version 0.6, an open-source project built using the Rust language. Key highlights of this update include comprehensive support for CSS Grid, enabling more accurate rendering of website content in Servo. Furthermore, Servo has incorporated several new features such as CSS color-scheme and animation-composition, and added multiple new DOM APIs. On the JavaScript front, Servo integrated SpiderMonkey version 153 to fix security and crash-related vulnerabilities. In terms of performance, Servo introduced the experimental \"Threadboost\" feature, which reportedly boosts Speedometer benchmark scores by 50%. Additionally, the engine added optional disk-backed HTTP caching and continues development in areas such as accessibility and AudioWorklet. These updates demonstrate Servo's significant progress in both feature completeness and performance optimization.",
    tags_en: ["Servo", "Rust", "CSS Grid", "SpiderMonkey", "Open-source Browser", "Web Standard"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Servo-0.6-Changes", lang: "EN" }
    ]
  },
  {
    id: "20261018-16357",
    trackers: ["os"],
    category: "重點關注",
    title: "VirtIO-FS 導入同步佇列（Synchronous Queues）大幅提升效能，優化虛擬機資料傳輸",
    summary: "VirtIO-FS 作為虛擬機（guest VMs）與主機伺服器之間共享檔案系統，其資料傳輸效能正透過加入同步佇列（Synchronous Queues）功能得到顯著提升。傳統 VirtIO 依賴非同步（asynchronous）行為，但在許多 I/O 傳輸場景中，系統需要等待操作完成。為了解決此問題，開發者 Sergio López 實作了 VirtIO-FS 的實驗性同步佇列支援。測試結果顯示，使用同步佇列可大幅提升效能，例如以建置 libkrunfw 的時間為例，從 7 分 43 秒降至 5 分 34 秒。此外，同步佇列還顯著改善了隨機 I/O 效能和檔案刪除延遲。此功能目前已透過 libkrun 的實驗性 Pull Request 進行開發，為虛擬化環境的檔案系統操作帶來極具潛力的優化。",
    tags: ["VirtIO-FS", "同步佇列", "Synchronous Queues", "虛擬化", "libkrun", "I/O 效能"],
    title_en: "VirtIO-FS Introduces Synchronous Queues to Significantly Boost Performance and Optimize Virtual Machine Data Transfer",
    summary_en: "VirtIO-FS serves as a shared file system between guest VMs and the host server. Its data transfer performance is now significantly enhanced through the addition of Synchronous Queues. Traditional VirtIO relies on asynchronous behavior, but in many I/O transfer scenarios, the system must wait for operations to complete. To address this issue, developer Sergio López implemented experimental synchronous queue support for VirtIO-FS. Test results show that using synchronous queues significantly boosts performance; for example, the time taken to build libkrunfw dropped from 7 minutes 43 seconds to 5 minutes 34 seconds. Furthermore, synchronous queues notably improve random I/O performance and file deletion latency. This feature is currently under development via an experimental Pull Request in libkrun, bringing highly promising optimizations to file system operations in virtualized environments.",
    tags_en: ["VirtIO-FS", "Synchronous Queues", "Virtualization", "libkrun", "I/O Performance"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Synchronous-VirtIO-FS", lang: "EN" }
    ]
  },
  {
    id: "20261018-16380",
    trackers: ["os"],
    category: "重點關注",
    title: "OOHPod 郵箱機意外顯示 Windows 命令提示字元，凸顯嵌入式系統的介面安全風險",
    summary: "本文描述了一起在愛爾蘭 OOHPod 郵箱機發生的事件。該服務允許用戶掃描身份證件或在觸控螢幕上輸入資訊來取遞包裹。在一次嘗試取件的過程中，用戶發現郵箱機的螢幕上意外出現了類似最小化命令列視窗的命令提示字元（cmd.exe）。這類嵌入式設備若後端系統未能妥善控制介面輸出，可能導致非預期或敏感的系統介面暴露給公眾。雖然這次事件沒有造成實際的危害，但它突顯了在公共觸控設備或嵌入式系統中，對操作系統介面（如命令提示字元）的嚴格控制和隔離的重要性，以防止惡意或意外的指令輸入。修補建議應著重於在前端應用層和作業系統層面，確保在非預期狀態下，系統介面只能呈現預設的、安全的用戶界面，並嚴格限制對底層操作系統命令的訪問。",
    tags: ["OOHPod", "Windows", "cmd.exe", "嵌入式系統", "介面安全", "資訊安全"],
    title_en: "OOHPod Mailbox Machine Accidentally Displays Windows Command Prompt, Highlighting Interface Security Risks in Embedded Systems",
    summary_en: "This article describes an incident that occurred at an OOHPod mailbox machine in Ireland. The service allows users to scan identification documents or enter information on a touchscreen to collect packages. During one retrieval attempt, a user noticed that the mailbox machine's screen unexpectedly displayed a command prompt (cmd.exe), resembling a minimized command-line window. If the backend system of such an embedded device fails to properly control interface output, it could expose unexpected or sensitive system interfaces to the public. Although this incident caused no actual harm, it highlights the importance of strict control and isolation of the operating system interface (such as the command prompt) in public touch devices or embedded systems, to prevent malicious or accidental command input. Remediation suggestions should focus on ensuring that, at the frontend application and operating system levels, the system interface can only display the default, secure user interface in unexpected states, and strictly limit access to underlying operating system commands.",
    tags_en: ["OOHPod", "Windows", "cmd.exe", "Embedded Systems", "Interface Security", "Information Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/10/18/oh-no-what-happened-to-my-oohpod-windows-command-prompt-puts-in-a-surprise-appearance/5303109", lang: "EN" }
    ]
  },
  {
    id: "20261018-16402",
    trackers: ["os"],
    category: "重點關注",
    title: "Google在Google.com上透過Edge瀏覽器推送「選擇Chrome」彈窗，引發反競爭爭議",
    summary: "本文分析了Google在Google.com網頁上，當用戶使用Microsoft Edge瀏覽器時，會彈出「Choose Chrome, the browser built by Google」的訊息。此彈窗不僅有文字提示，還包含一個可立即下載Chrome瀏覽器安裝程式（ChromeSetup.exe）的按鈕。雖然此行為在美國或歐洲可能不具備法律上的違規性，但它仍引發了關於反競爭、自我偏好（self-preferencing）的合理擔憂。文章指出，這是一種科技巨頭間的「貓捉老鼠」遊戲：Google試圖透過搜尋頁面引導Edge用戶轉用Chrome，而Microsoft Edge則會主動彈出橫幅，強調其與Chrome使用相同Chromium技術，並宣傳其獨特功能。這場競爭的本質是爭奪用戶習慣和市場份額，特別是針對不熟悉技術的普通用戶。這類行為的目的是提高用戶的「黏著度」（stickiness），減少用戶跳轉率（bounce rate），讓用戶在某個生態系統內停留更久。",
    tags: ["Google", "Microsoft Edge", "Chrome", "反競爭", "Chromium", "Windows 11", "用戶行為"],
    title_en: "Google's 'Choose Chrome' Pop-up on Google.com via Edge Browser Sparks Anti-Competitive Concerns",
    summary_en: "This article analyzes a situation where Google displays a 'Choose Chrome, the browser built by Google' message on Google.com when users access the site using the Microsoft Edge browser. This pop-up not only contains text prompts but also includes a button for immediate download of the Chrome browser installer (ChromeSetup.exe). Although this behavior may not constitute a legal violation in the US or Europe, it has raised legitimate concerns regarding anti-competitive practices and self-preferencing. The article points out that this is a 'cat-and-mouse' game between tech giants: Google attempts to guide Edge users to switch to Chrome via the search page, while Microsoft Edge proactively displays a banner emphasizing its use of the same Chromium technology as Chrome and promoting its unique features. The core of this competition is the struggle for user habits and market share, particularly among general users unfamiliar with technology. The goal of such actions is to increase user 'stickiness' and reduce the bounce rate, keeping users within a specific ecosystem for longer.",
    tags_en: ["Google", "Microsoft Edge", "Chrome", "Anti-competitive", "Chromium", "Windows 11", "User Behavior"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/18/google-now-wants-windows-11-users-to-ditch-edge-for-chrome-and-gets-away-with-what-microsoft-is-slammed-for", lang: "EN" }
    ]
  },
  {
    id: "20261018-16403",
    trackers: ["os"],
    category: "重點關注",
    title: "資安工程師考慮轉用 Windows 11：NVIDIA CUDA 生態系對 Apple 生態系的挑戰",
    summary: "一位在 Apple 生態系工作超過 12 年的資安工程師 Ray Fernando，正首次認真考慮轉用 Windows 筆電，其主要驅動力是 NVIDIA 的 CUDA 平台。CUDA 是目前大多數 AI 工具運行在 GPU 上的核心平台，為 AI 開發提供了強大的軟體堆疊。過去，NVIDIA 在 2019 年已將 CUDA 限制為 macOS 的最後版本，Apple 則使用 Metal 和 MLX 等原生框架。Fernando 評測的 Surface Laptop Ultra 搭載 Windows 11 Pro，具備 20-core CPU、6,144-core GPU 和 128GB 統一記憶體，預計可處理超過 1200 億參數的 AI 模型。雖然他對筆電的設計和性能表示讚賞，但最終是否轉用仍待觀察。資深科技人士 Steven Sinofsky 將此趨勢比作歷史上的圖形 API 戰爭（如 OpenGL vs Direct3D），指出開發者傾向於使用現有的工具鏈。這顯示 NVIDIA 的 CUDA 生態系正成為吸引開發者和市場的關鍵要素，對 Apple 的 Metal 框架構成挑戰。",
    tags: ["NVIDIA", "CUDA", "Windows 11", "Apple", "AI 應用", "Surface Laptop Ultra", "Metal"],
    title_en: "Cybersecurity Engineer Considers Switching to Windows 11: NVIDIA CUDA Ecosystem Challenges Apple's Ecosystem",
    summary_en: "Ray Fernando, a cybersecurity engineer with over 12 years of experience in the Apple ecosystem, is seriously considering switching to a Windows laptop, primarily driven by NVIDIA's CUDA platform. CUDA is the core platform for most AI tools running on GPUs, providing a powerful software stack for AI development. Previously, NVIDIA restricted CUDA to the last version of macOS in 2019, while Apple utilized native frameworks such as Metal and MLX. Fernando evaluated the Surface Laptop Ultra running Windows 11 Pro, which features a 20-core CPU, 6,144-core GPU, and 128GB unified memory, estimated to handle AI models exceeding 120 billion parameters. While he praised the laptop's design and performance, whether he ultimately switches remains to be seen. Veteran tech insider Steven Sinofsky compared this trend to historical graphics API wars (such as OpenGL vs Direct3D), noting that developers tend to favor existing toolchains. This suggests that NVIDIA's CUDA ecosystem is becoming a critical factor in attracting developers and the market, posing a challenge to Apple's Metal framework.",
    tags_en: ["NVIDIA", "CUDA", "Windows 11", "Apple", "AI Applications", "Surface Laptop Ultra", "Metal"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/10/18/ex-apple-engineer-of-12-years-may-ditch-his-mac-for-windows-11-says-on-paper-its-a-yes", lang: "EN" }
    ]
  }
];
