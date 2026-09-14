// data-20260912.js — 2026-09-12
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-12"] = [
  {
    id: "20260912-11904",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告 DSA-6497-1：修補 OpenSSH 緩存讀取漏洞",
    summary: "Debian 發布安全公告 DSA-6497-1，修補 OpenSSH 核心元件中的一個緩存讀取（Cache Read）漏洞。此漏洞可能允許遠端攻擊者在特定條件下，透過 OpenSSH 的處理機制，讀取到不應公開的記憶體內容。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類漏洞通常屬於高風險，可能影響所有使用受影響 OpenSSH 版本的 Debian 系統。修補建議是立即升級 OpenSSH 到 Debian 提供的修補版本，以防止攻擊者利用此漏洞進行資訊竊取。使用者應透過 Debian 的官方安全更新機制（如 `apt update` 和 `apt upgrade`）進行系統更新，確保系統的安全性。",
    tags: ["Debian", "OpenSSH", "DSA-6497-1", "緩存讀取", "Linux"],
    title_en: "Debian Issues Security Advisory DSA-6497-1: Patching OpenSSH Cache Read Vulnerability",
    summary_en: "Debian has released security advisory DSA-6497-1, which patches a Cache Read vulnerability in the OpenSSH core component. This vulnerability could potentially allow a remote attacker, under specific conditions, to read sensitive memory content through OpenSSH's processing mechanisms. Although the original advisory does not provide a specific CVSS score or impact scope, such vulnerabilities are typically considered high risk and could affect all Debian systems running the vulnerable OpenSSH version. The recommended mitigation is to immediately upgrade OpenSSH to the patched version provided by Debian to prevent attackers from exploiting this vulnerability for information theft. Users should perform system updates using Debian's official security update mechanisms (such as `apt update` and `apt upgrade`) to ensure system security.",
    tags_en: ["Debian", "OpenSSH", "DSA-6497-1", "Cache Read", "Linux"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00408.html", lang: "EN" }
    ]
  },
  {
    id: "20260912-11905",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 DSA-6496-1 相關漏洞，強化系統安全性",
    summary: "Debian 發布了安全公告，修補了一個與 DSA-6496-1 相關的漏洞。此漏洞的修補旨在提升系統的整體安全性，特別是針對核心元件的潛在風險。雖然原文未提供詳細的技術細節或 CVSS 分數，但此更新屬於 Debian 的安全維護範疇，建議所有使用 Debian 系統的用戶應立即更新系統以修補此安全漏洞。用戶應透過標準的系統更新機制（如 apt update/upgrade）來獲取最新的安全套件，確保系統運行在安全且穩定的版本。本更新屬於核心系統層面的安全強化，對於維持系統的完整性與可用性至關重要。",
    tags: ["Debian", "DSA-6496-1", "安全公告", "Linux 核心", "系統更新"],
    title_en: "Debian Issues Security Advisory: Patching DSA-6496-1 Vulnerability to Enhance System Security",
    summary_en: "Debian has released a security advisory patching a vulnerability related to DSA-6496-1. The patch aims to enhance the overall system security, particularly addressing potential risks within core components. Although the original text does not provide detailed technical specifications or a CVSS score, this update falls under Debian's routine security maintenance. All users running Debian systems are advised to update immediately to patch this vulnerability. Users should utilize standard system update mechanisms (such as apt update/upgrade) to obtain the latest security packages, ensuring the system runs on a secure and stable version. This update constitutes a core system-level security enhancement, which is crucial for maintaining system integrity and availability.",
    tags_en: ["Debian", "DSA-6496-1", "Security Advisory", "Linux Kernel", "System Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00407.html", lang: "EN" }
    ]
  },
  {
    id: "20260912-11921",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 13.7 版本發布，包含多項安全修補與錯誤修正，涵蓋核心系統與多個應用程式",
    summary: "Debian 官方今日發布了 Debian 13.7 版本，為尋求最新穩定版本的用戶提供修補。此版本整合了大量最新的錯誤和安全修補，涵蓋範圍廣泛，包括 Linux 核心、Chromium、NTFS-3G、RoundCube、Samba、PHP、Postfix、Zip、Cockpit、Wireshark 等眾多套件。除了安全修補外，Debian 13.7 也修復了多個錯誤，例如 Akonadi Search 的潛在崩潰問題，並更新了 llvm-toolchain-22 以支援較新的 Chromium 建構。用戶可透過 Debian.org 下載此版本，以確保系統的安全性與穩定性。文章指出，Debian 的下一個主要功能版本 Debian 14 預計將於 2027 年下半年發布。",
    tags: ["Debian", "Debian 13.7", "Linux 核心", "安全修補", "Chromium", "Debian.org"],
    title_en: "Debian 13.7 Released with Multiple Security Patches and Bug Fixes for Core System and Various Applications",
    summary_en: "Debian officially released Debian 13.7 today, providing a patched version for users seeking the latest stable release. This version integrates numerous bug and security patches, covering a wide range of packages including the Linux kernel, Chromium, NTFS-3G, RoundCube, Samba, PHP, Postfix, Zip, Cockpit, and Wireshark. In addition to security patches, Debian 13.7 also fixes multiple bugs, such as a potential crash issue in Akonadi Search, and updates llvm-toolchain-22 to support newer Chromium builds. Users can download this version from Debian.org to ensure system security and stability. The article notes that Debian's next major release, Debian 14, is expected in the second half of 2027.",
    tags_en: ["Debian", "Debian 13.7", "Linux Kernel", "Security Patch", "Chromium", "Debian.org"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Debian-13.7-Released", lang: "EN" }
    ]
  },
  {
    id: "20260912-11922",
    trackers: ["os"],
    category: "Linux",
    title: "Void Linux 維護者因 AI 政策爭議，使超過百個套件被標記為孤兒",
    summary: "Void Linux 的一位維護者 Andrea Brancaleoni，因違反專案關於 AI 使用的貢獻政策，決定放棄維護其負責的超過 100 個套件。該政策要求所有貢獻必須由人類完成，並必須公開使用 AI 工具的事實。爭議源於 Brancaleoni 在一個 Pull Request 中，使用了 GLM-5.3-Flash + OpenCode 等 AI 工具生成了「評論上的評論」，且未事先揭露 AI 使用。由於此違反行為，他隨後將 113 個套件（包括 Alacritty、Kubernetes、Docker 相關套件、fscrypt 等）標記為孤兒。這些套件現在需要其他 Void Linux 維護者接手維護，否則可能面臨維護空缺。此事件突顯了開源專案在整合 AI 內容時，對於貢獻者透明度和政策遵循度的嚴格要求。",
    tags: ["Void Linux", "AI 政策", "開源專案", "Linux 套件", "Andrea Brancaleoni", "LLM"],
    title_en: "Void Linux Maintainer Marks Over 100 Packages as Orphan Due to AI Policy Dispute",
    summary_en: "A Void Linux maintainer, Andrea Brancaleoni, decided to abandon maintenance of over 100 packages he was responsible for after violating the project's contribution policy regarding AI usage. The policy mandates that all contributions must be human-generated and requires explicit disclosure of any AI tools used. The dispute arose because Brancaleoni used AI tools like GLM-5.3-Flash and OpenCode to generate 'comments on comments' within a Pull Request, without prior disclosure of the AI usage. Due to this violation, he subsequently marked 113 packages (including Alacritty, Kubernetes, Docker-related packages, and fscrypt) as orphans. These packages now require other Void Linux maintainers to take over maintenance, or they risk becoming unmaintained. This incident highlights the strict requirements for contributor transparency and policy adherence within open-source projects when integrating AI-generated content.",
    tags_en: ["Void Linux", "AI Policy", "Open Source Project", "Linux Package", "Andrea Brancaleoni", "LLM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Void-Linux-AI-Policy-Orphan", lang: "EN" }
    ]
  },
  {
    id: "20260912-11925",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Linux NPU 驅動程式 1.38 正式支援 Ubuntu 26.04 LTS，強化核心 Ultra NPU 應用",
    summary: "Intel 發布了 Linux NPU 驅動程式 1.38 版本，該使用者空間開源驅動程式用於在 Linux 環境下利用 Core Ultra 神經處理單元（NPU）。本次更新最大的亮點是正式宣布支援 Ubuntu 26.04 LTS。雖然 Intel NPU Linux 堆疊此前已在 Ubuntu 26.04 LTS 上進行測試，但直到本次才由 Intel 官方認可並納入其使用者空間驅動程式套件中。該驅動程式已在 Ubuntu 26.04 LTS 搭配預設的 Linux 7.0 核心建置上進行了全面測試，並確認了對 Meteor Lake、Arrow Lake、Lunar Lake、Panther Lake 和 Wildcat Lake 等多款晶片的支持。此外，該驅動程式仍持續支援 Ubuntu 24.04 LTS。開發者可從 GitHub 下載新的使用者模式驅動程式。本次更新除了增加對 Ubuntu 26.04 LTS 的支援外，未列出其他變更。",
    tags: ["Intel", "NPU", "Linux", "Ubuntu 26.04 LTS", "Core Ultra", "驅動程式"],
    title_en: "Intel Linux NPU Driver 1.38 Officially Supports Ubuntu 26.04 LTS, Enhancing Core Ultra NPU Applications",
    summary_en: "Intel has released Linux NPU Driver version 1.38, a user-space open-source driver designed to utilize Core Ultra Neural Processing Units (NPU) in Linux environments. The most significant highlight of this update is the official announcement of support for Ubuntu 26.04 LTS. Although the Intel NPU Linux stack had previously been tested on Ubuntu 26.04 LTS, it is only with this release that Intel officially recognized and included it in its user-space driver package. The driver has been fully tested on Ubuntu 26.04 LTS built with the default Linux 7.0 kernel, confirming support for multiple chip architectures including Meteor Lake, Arrow Lake, Lunar Lake, Panther Lake, and Wildcat Lake. Furthermore, the driver continues to support Ubuntu 24.04 LTS. Developers can download the new user-mode driver from GitHub. Aside from adding support for Ubuntu 26.04 LTS, no other changes were listed in this update.",
    tags_en: ["Intel", "NPU", "Linux", "Ubuntu 26.04 LTS", "Core Ultra", "Driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-Linux-NPU-Driver-1.38", lang: "EN" }
    ]
  },
  {
    id: "20260912-11926",
    trackers: ["os"],
    category: "Linux",
    title: "Ubuntu 考慮新增 linux-firmware-hwe 套件，強化 LTS 版本的硬體啟用堆疊",
    summary: "Canonical 工程師提出一項提案，旨在為 Ubuntu 長期支援（LTS）版本引入一個名為 `linux-firmware-hwe` 的新套件。目前 Ubuntu 透過穩定版本更新提供更新的 `linux-firmware`，但由於硬體供應商通常不會針對舊版核心測試新的韌體二進位檔，導致回溯（backporting）到舊版核心時容易發生系統回歸（regressions）。這項提案的目標是將 `linux-firmware-hwe` 套件與 Linux HWE 核心版本綁定，以更好地協調核心與韌體。這將有助於提升專注於硬體啟用（HWE）的用戶體驗，同時降低維持原始 GA 核心版本用戶遇到回歸風險的可能性。該變更仍在考慮中，預計可能在 Ubuntu 26.10 版本中引入，並將使 HWE 核心依賴此新套件，從而提供單一的韌體來源，避免影響運行 GA 核心的用戶。",
    tags: ["Ubuntu", "LTS", "linux-firmware-hwe", "HWE", "Canonical", "Linux 核心"],
    title_en: "Ubuntu considering adding linux-firmware-hwe package to strengthen the hardware enablement stack for LTS versions",
    summary_en: "A Canonical engineer has proposed introducing a new package called `linux-firmware-hwe` for Ubuntu's Long Term Support (LTS) versions. Currently, Ubuntu provides updated `linux-firmware` through stable version updates. However, because hardware vendors typically do not test new firmware binaries against older kernel versions, backporting to older kernels can easily lead to system regressions. The goal of this proposal is to bind the `linux-firmware-hwe` package with the Linux HWE kernel version to better coordinate the kernel and firmware. This will help improve the user experience for users focused on Hardware Enablement (HWE) while reducing the risk of regressions for users running the original GA kernel version. The change is still under consideration and is expected to be introduced in Ubuntu 26.10, making the HWE kernel dependent on this new package, thus providing a single firmware source without affecting users running the GA kernel.",
    tags_en: ["Ubuntu", "LTS", "linux-firmware-hwe", "HWE", "Canonical", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Ubuntu-Considers-Linux-Firm-HWE", lang: "EN" }
    ]
  },
  {
    id: "20260912-11927",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 提升遠端桌面效能：優化 KRDP 降低延遲",
    summary: "KDE Plasma 6.8 版本在本次更新中，針對使用 KRDP 進行的遠端桌面連線，進行了效能優化。此改動由 David Edmundson 實施，其核心機制是當編碼器運作速度快於客戶端編碼時，系統會丟棄（drop）積累的傳入畫面幀（incoming frames），從而確保遠端連線能維持極低的延遲（latency）。此外，Plasma 6.8 還帶來多項其他改進，包括增強輸入法（Input Method）小工具的體驗，改善 XWayland 應用程式中的鍵盤顯示，以及優化剪貼簿（Clipboard）處理圖片資料和 MIME 動作的機制。另一個重要的技術支援是 KWin 增加了對 Wayland commit-timing 協定（protocol）的支援。本次更新預計於 10 月 14 日正式發布，這也標誌著 KDE 成立 30 週年。這些改進旨在提升整體使用者體驗和系統穩定性。",
    tags: ["KDE Plasma", "Plasma 6.8", "KRDP", "Wayland", "Linux"],
    title_en: "KDE Plasma 6.8 Improves Remote Desktop Performance: Optimizing KRDP to Reduce Latency",
    summary_en: "The KDE Plasma 6.8 version includes performance optimizations for remote desktop connections utilizing KRDP. This change, implemented by David Edmundson, works by having the system drop accumulated incoming screen frames when the encoder operates faster than the client encoder, thereby ensuring the remote connection maintains extremely low latency. Furthermore, Plasma 6.8 introduces several other improvements, including enhanced experience for Input Method widgets, improved keyboard display within XWayland applications, and optimized mechanisms for handling image data and MIME actions in the clipboard. Another significant technical addition is KWin's support for the Wayland commit-timing protocol. This update is scheduled for official release on October 14th, marking the 30th anniversary of KDE. These improvements aim to enhance overall user experience and system stability.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "KRDP", "Wayland", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Plasma-6.8-KRDP-Lower-Lat", lang: "EN" }
    ]
  },
  {
    id: "20260912-11928",
    trackers: ["os"],
    category: "Linux",
    title: "GNOME Git 客戶端 Gitte 0.10 版本發布，增強側對側差異比對與 Git LFS 支援",
    summary: "Gitte 是一款為 GNOME 或 Linux 桌面設計的圖形化 Git 客戶端，它採用 GTK4 技術。最新發布的 Gitte v0.10 版本持續成熟，為開發者提供了更強大的功能。主要更新包括在 GTK4 使用介面中新增了側對側（side-by-side）差異比對功能，並增加了對 Git LFS（Large File Storage）和子模組（submodules）的支援。此外，版本還加入了新的快捷鍵以優化工作流程，並進行了多項使用者介面（UI）改進和錯誤修復。本次更新旨在提升開發者在 GNOME 環境下使用 Git 的效率與體驗，讓使用者能更便捷地管理大型專案和複雜的版本控制結構。",
    tags: ["Gitte", "GNOME", "Git", "GTK4", "Linux", "Git LFS"],
    title_en: "Gitte Git Client v0.10 Released for GNOME, Enhancing Side-by-Side Diffing and Git LFS Support",
    summary_en: "Gitte is a graphical Git client designed for GNOME and Linux desktops, built using GTK4 technology. The latest release, Gitte v0.10, continues to mature, providing developers with enhanced functionality. Key updates include the addition of side-by-side diffing functionality within the GTK4 interface, along with support for Git LFS (Large File Storage) and submodules. Furthermore, the version introduces new keyboard shortcuts to optimize workflows, alongside various UI improvements and bug fixes. This update aims to boost the efficiency and experience of developers using Git within the GNOME environment, allowing users to manage large projects and complex version control structures more conveniently.",
    tags_en: ["Gitte", "GNOME", "Git", "GTK4", "Linux", "Git LFS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Gitte-0.10-Released", lang: "EN" }
    ]
  },
  {
    id: "20260912-11963",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 KB5124008 更新導致音訊故障：Microsoft 確認部分裝置無法啟動音訊設備",
    summary: "Microsoft 在 9 月 8 日推出的 Patch Tuesday 更新中，包含 KB5124008，該更新適用於搭載 Windows 11 25H2 或 24H2 的系統，並將系統升級至 Build 26200.9445 或 Build 26100.9445。然而，Microsoft 已確認 KB5124008 存在一個重大錯誤，可能導致部分裝置的音訊設備無法啟動或無法正常播放音訊。受影響的裝置可能在更新後重新啟動時立即出現此問題，且無法透過提高音量來解決。此外，此問題不僅限於喇叭，連帶影響 USB Audio Class 1.0 設備，甚至可能導致麥克風無法使用，或在啟用多聲道音訊（如 3D 音訊）時出現配置錯誤。Microsoft 雖然尚未提供永久修補或解決方案，但已確認正在處理此問題。目前暫時的解決方案是將受影響的設備切換至 2 聲道模式，若無效，建議改用不同硬體音訊設備，例如無線音訊裝置。",
    tags: ["Windows 11", "KB5124008", "Microsoft", "音訊故障", "Windows Update", "25H2"],
    title_en: "Windows 11 KB5124008 Update Causes Audio Failure: Microsoft Confirms Some Devices Cannot Initialize Audio Devices",
    summary_en: "In the Patch Tuesday update released on September 8, Microsoft included KB5124008, which applies to systems running Windows 11 25H2 or 24H2, upgrading the system to Build 26200.9445 or Build 26100.9445. However, Microsoft has confirmed that KB5124008 contains a significant bug that may prevent certain devices' audio equipment from initializing or playing audio correctly. Affected devices may experience this issue immediately upon rebooting after the update, and it cannot be resolved by increasing the volume. Furthermore, this issue is not limited to speakers; it also affects USB Audio Class 1.0 devices and may even cause microphones to become unusable, or result in configuration errors when enabling multi-channel audio (such as 3D audio). Although Microsoft has not yet provided a permanent patch or solution, it has confirmed that it is working on the issue. The current temporary workaround is to switch affected devices to stereo mode; if this fails, users are advised to use different audio hardware, such as wireless audio devices.",
    tags_en: ["Windows 11", "KB5124008", "Microsoft", "Audio Failure", "Windows Update", "25H2"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/13/microsoft-confirms-windows-11s-update-kills-audio-on-some-pcs-and-the-bugs-keep-piling-up", lang: "EN" }
    ]
  },
  {
    id: "20260912-11964",
    trackers: ["os"],
    category: "Windows",
    title: "深入解析 32 位元 Windows 限制 4GB 記憶體的原因：非技術瓶頸，而是驅動程式兼容性考量",
    summary: "許多人誤以為 32 位元 Windows 系統的記憶體限制在 4GB，這是因為 32 位元位址空間的理論上限。然而，這並非單純的技術限制。文章指出，早期 Windows 系統（如 Windows XP SP2 和 Windows Server 2003 SP1 Standard Edition）雖然具備 Physical Address Extension (PAE) 等機制，理論上可以支援超過 4GB 的實體記憶體，但為了防止不穩定的第三方硬體驅動程式造成記憶體損壞或系統崩潰，微軟選擇在作業系統層面將實體位址空間限制在 4GB。當驅動程式無法正確處理超過 32 位元的實體位址時，可能會導致位址截斷，造成記憶體損壞。因此，微軟將此限制作為一種風險控制措施。相較之下，Windows Server 等伺服器作業系統，由於其運行環境和驅動程式的嚴格控制，可以安全地利用更多記憶體資源。",
    tags: ["32位元 Windows", "4GB 記憶體限制", "PAE", "Windows XP", "Windows Server", "驅動程式兼容性"],
    title_en: "In-Depth Analysis of the 32-bit Windows 4GB Memory Limit: Not a Technical Bottleneck, but a Driver Compatibility Consideration",
    summary_en: "Many people mistakenly believe that the memory limit of 32-bit Windows systems is due to the theoretical upper limit of the 32-bit address space. However, this is not a simple technical limitation. The article points out that while early Windows systems (such as Windows XP SP2 and Windows Server 2003 SP1 Standard Edition) possessed mechanisms like Physical Address Extension (PAE), which theoretically could support more than 4GB of physical memory, Microsoft chose to limit the physical address space at the operating system level to 4GB. This was done to prevent unstable third-party hardware drivers from causing memory corruption or system crashes. If a driver cannot correctly handle physical addresses exceeding 32 bits, it may lead to address truncation and memory corruption. Therefore, Microsoft implemented this limit as a risk control measure. In contrast, server operating systems like Windows Server, due to their controlled operating environment and drivers, can safely utilize more memory resources.",
    tags_en: ["32-bit Windows", "4GB Memory Limit", "PAE", "Windows XP", "Windows Server", "Driver Compatibility"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/13/microsoft-reveals-why-32-bit-windows-was-limited-to-4gb-ram-and-it-wasnt-a-technical-limit", lang: "EN" }
    ]
  },
  {
    id: "20260912-11965",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 釋出預覽版更新，允許使用者重新映射 Copilot 鍵為右 Ctrl 或右鍵選單鍵",
    summary: "微軟在 Windows 11 的 Release Preview Build 26100.9539 (24H2) 和 26200.9539 (25H2) 中，加入了新的設定，讓使用者可以在「設定」>「藍牙與裝置」>「鍵盤」中，將專用的 Copilot 鍵重新映射為右 Ctrl 鍵或「右鍵選單鍵」（Context Menu key）。此功能旨在幫助使用者恢復傳統鍵盤快捷鍵和輔助功能工作流程，特別是對於那些在 OEM 筆電上因 Copilot 鍵取代了右 Ctrl 或右鍵選單鍵的用戶。\n\n微軟的支援文件承認，自 2024 年以來，專用 Copilot 鍵曾取代右 Ctrl 或右鍵選單鍵，導致依賴這些鍵進行快捷鍵或輔助技術（如螢幕閱讀器）的用戶面臨工作流程挑戰。雖然微軟尚未承認這是錯誤，但此更新提供了實用的解決方案。此功能預計將在 2026 年 10 月的 Patch Tuesday 更新中正式推出。使用者應注意，如果將 Copilot 鍵設為右 Ctrl，則使用 RCtrl+Win 和 RCtrl+Shift 等組合鍵時，需改用左 Ctrl 鍵。\n\n此更新屬於功能性調整，而非修補安全漏洞，主要著重於提升使用者體驗和鍵盤的可用性。",
    tags: ["Windows 11", "Copilot key", "Context Menu key", "24H2", "25H2", "微軟"],
    title_en: "Windows 11 Release Preview Update Allows Remapping of Copilot Key to Right Ctrl or Context Menu Key",
    summary_en: "Microsoft has introduced a new setting in the Windows 11 Release Preview Builds 26100.9539 (24H2) and 26200.9539 (25H2), allowing users to remap the dedicated Copilot key to either the Right Ctrl key or the Context Menu key. This feature aims to help users restore traditional keyboard shortcuts and accessibility workflows, especially for users with OEM laptops where the Copilot key has replaced the Right Ctrl or Context Menu key. Microsoft support documentation acknowledges that since 2024, the dedicated Copilot key has replaced the Right Ctrl or Context Menu key, causing workflow challenges for users who rely on these keys for shortcuts or assistive technologies (such as screen readers). Although Microsoft has not officially admitted this is an error, this update provides a practical solution. This feature is expected to be officially rolled out in the October 2026 Patch Tuesday update. Users should note that if the Copilot key is set to Right Ctrl, combination keys such as RCtrl+Win and RCtrl+Shift must use the Left Ctrl key instead. This update is a functional adjustment, not a security patch, primarily focusing on enhancing user experience and keyboard usability.",
    tags_en: ["Windows 11", "Copilot key", "Context Menu key", "24H2", "25H2", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/12/windows-11s-useless-copilot-key-finally-does-something-you-can-map-it-to-right-click", lang: "EN" }
    ]
  },
  {
    id: "20260912-11966",
    trackers: ["os"],
    category: "Windows",
    title: "微軟承認 Windows 11 最新更新 KB5124008 導致多功能故障，影響用戶體驗",
    summary: "微軟於 9 月 8 日發布了強制性更新 Windows 11 KB5124008。此更新旨在恢復許多 Windows 10 時代的用戶功能，例如可移動的任務列和可調整大小的開始選單。然而，根據相關報導，該更新在實際應用中卻導致了多個功能故障，影響了部分 PC 的正常使用體驗。微軟在發布此更新後，曾警告用戶不應延遲更新，但隨後卻承認了此版本存在多重功能上的問題。用戶應留意系統更新後的穩定性，並關注微軟後續的修補或調整公告，以確保系統的穩定運行。",
    tags: ["Windows 11", "KB5124008", "微軟", "系統更新", "Windows 10"],
    title_en: "Microsoft Acknowledges Windows 11 KB5124008 Update Causes Multiple Malfunctions, Affecting User Experience",
    summary_en: "Microsoft released a mandatory update for Windows 11, KB5124008, on September 8. This update aimed to restore several user functionalities from the Windows 10 era, such as the movable taskbar and resizable Start menu. However, according to reports, the update has caused multiple functional malfunctions in practical applications, impacting the normal usage experience of some PCs. Although Microsoft initially warned users against delaying the update, it subsequently acknowledged that this version contains multiple functional issues. Users should monitor the stability of their system after updating and follow Microsoft's subsequent patches or adjustments to ensure stable system operation.",
    tags_en: ["Windows 11", "KB5124008", "Microsoft", "System Update", "Windows 10"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/12/microsoft-admits-windows-11s-biggest-september-update-is-breaking-multiple-features-days-after-it-warned-users-not-to-delay-updates", lang: "EN" }
    ]
  },
  {
    id: "20260912-11777",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "BlueMoon Exploit Kit利用Chrome與Windows零日漏洞，APT組織進行多重間諜攻擊",
    summary: "資安公司 Proofpoint 報告，一個名為 BlueMoon 的新型漏洞利用工具包（exploit kit）正被多個間諜組織利用進行攻擊。該工具包快速部署，鏈接了三個未修補的零日漏洞：兩個影響 Chrome V8 JavaScript 和 WebAssembly 引擎的漏洞（CVE-2026-85046 和 CVE-2026-87491），以及一個 Windows Advanced Local Procedure Call (ALPC) 的權限提升漏洞（CVE-2026-85880）。BlueMoon 的攻擊鏈首先利用 V8 缺陷進行沙盒逃逸，接著執行權限提升代碼，最終注入 CreateProcess stub，透過 curl 指令下載並執行可執行文件。該工具包最初被中國相關的 APT Violet Typhoon 使用，目標包括美國非政府組織、採礦和商品交易公司。隨後，其他中國相關的駭客組織和不明身份的攻擊者也迅速跟進使用，目標橫跨美國航空航天、越南製造業、印尼和新加坡的政府、諮詢及金融機構。Proofpoint 分析指出，BlueMoon 的快速傳播和低門檻可能反映了 AI 代理人正在降低駭客開發利用能力的成本和門檻。建議用戶應立即修補 Chrome V8 和 Windows ALPC 等相關漏洞，並提高對異常的漏洞利用鏈和可疑的後續執行行為的監控。",
    tags: ["BlueMoon", "Proofpoint", "CVE-2026-85046", "CVE-2026-87491", "CVE-2026-85880", "Chrome", "Windows"],
    title_en: "BlueMoon Exploit Kit Exploits Chrome and Windows Zero-Days for Multi-Stage Espionage Attacks by APT Groups",
    summary_en: "Security firm Proofpoint reported that a novel exploit kit named BlueMoon is being utilized by multiple espionage groups for attacks. This kit rapidly deploys, chaining three unpatched zero-day vulnerabilities: two affecting the Chrome V8 JavaScript and WebAssembly engines (CVE-2026-85046 and CVE-2026-87491), and one privilege escalation vulnerability in Windows Advanced Local Procedure Call (ALPC) (CVE-2026-85880). The BlueMoon attack chain first exploits the V8 flaw for sandbox escape, then executes the privilege escalation code, and finally injects a CreateProcess stub to download and execute an executable file via the curl command. The kit was initially used by the China-linked APT group Violet Typhoon, targeting U.S. non-governmental organizations, mining, and commodity trading companies. Subsequently, other China-linked hacking groups and unidentified attackers quickly followed suit, with targets spanning U.S. aerospace, Vietnamese manufacturing, and government, consulting, and financial institutions in Indonesia and Singapore. Proofpoint analysis suggests that BlueMoon's rapid spread and low barrier to entry may reflect AI agents lowering the cost and complexity of hacking development and utilization. Users are advised to immediately patch related vulnerabilities such as Chrome V8 and Windows ALPC, and to enhance monitoring for anomalous exploit chains and suspicious subsequent execution behaviors.",
    tags_en: ["BlueMoon", "Proofpoint", "CVE-2026-85046", "CVE-2026-87491", "CVE-2026-85880", "Chrome", "Windows"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/bluemoon-exploit-kit-chains-recent-chrome-windows-zero-days", lang: "EN" }
    ]
  },
  {
    id: "20260912-11778",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anthropic揭露：胡塞叛軍在葉門試圖利用Claude AI開發先進導彈武器",
    summary: "AI模型Anthropic指出，在伊朗支持的胡塞叛軍控制的葉門北部，有用戶試圖利用其Claude AI模型開發先進的導彈武器。Anthropic已成功識別並封鎖了這些帳戶。據稱，這些用戶使用Claude Code來開發導引、導航和控制軟體，目標包括多變式巡弋飛彈和使用手機硬體進行中途機動的彈頭。雖然Anthropic未確認這些用戶是否成功「部署了可操作的設備」，但他們確實進行了導彈的測試。分析師指出，儘管胡塞叛軍可能試圖透過AI了解先進武器技術，但他們在實際的生產和技術能力上仍有巨大差距。這項報告顯示，胡塞叛軍正在積極尋求提升軍事技術，以減少對伊朗武器和組件的依賴，並加劇了對紅海和曼德海峽的威脅。",
    tags: ["Anthropic", "Claude AI", "胡塞叛軍", "葉門", "AI武器化", "導彈武器", "紅海"],
    title_en: "Anthropic Reveals: Houthi Rebels Attempt to Use Claude AI in Yemen to Develop Advanced Missile Weapons",
    summary_en: "AI model Anthropic reported that users in northern Yemen, controlled by the Iran-backed Houthi rebels, attempted to use its Claude AI model to develop advanced missile weapons. Anthropic successfully identified and blocked these accounts. It is reported that these users utilized Claude Code to develop guidance, navigation, and control software, targeting systems such as variable cruise missiles and warheads capable of mid-course maneuvering using mobile hardware. Although Anthropic has not confirmed whether these users successfully 'deployed operational equipment,' they did conduct missile testing. Analysts point out that while the Houthi rebels may be attempting to use AI to understand advanced weapon technologies, they still possess a significant gap in actual production and technical capabilities. This report indicates that the Houthi rebels are actively seeking to enhance their military technology to reduce reliance on Iranian weapons and components, thereby escalating the threat in the Red Sea and the Bab el-Mandeb Strait.",
    tags_en: ["Anthropic", "Claude AI", "Houthi Rebels", "Yemen", "AI Weaponization", "Missile Weapons", "Red Sea"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/users-in-houthi-held-yemen-tried-to-develop-advanced-weapons-with-ai-anthropic-says", lang: "EN" }
    ]
  },
  {
    id: "20260912-11787",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增五個已知被利用漏洞：JFrog Artifactory、ConnectWise ScreenConnect及MikroTik RouterOS受影響",
    summary: "美國網路安全基礎設施安全局（CISA）宣布，已將五個影響 JFrog Artifactory、ConnectWise ScreenConnect 和 MikroTik RouterOS 的安全漏洞，加入其已知被利用漏洞（KEV）目錄。這些漏洞包括 JFrog Artifactory 的 CVE-2026-42016（權限提升）和 CVE-2026-42018（身份驗證不當）；ConnectWise ScreenConnect 的 CVE-2026-84869（缺乏授權的檔案傳輸與執行）；以及 MikroTik RouterOS 的 CVE-2026-67277 和 CVE-2026-86060（缺乏身份驗證與命令注入）。攻擊者已被觀察到將這些漏洞鏈接起來，以繞過身份驗證、提升權限，並在受影響的 Artifactory 實例上部署後門。此外，CVE-2026-84869 的利用與惡意 VBScript 載荷的傳播有關。CISA 要求聯邦民用行政部門（FCEB）必須在特定日期前修補這些漏洞，以應對這些正在野外活躍的威脅。",
    tags: ["CISA", "KEV", "CVE-2026-42016", "JFrog Artifactory", "ConnectWise ScreenConnect", "MikroTik RouterOS"],
    title_en: "CISA Adds Five Known Exploited Vulnerabilities: JFrog Artifactory, ConnectWise ScreenConnect, and MikroTik RouterOS Affected",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced that it has added five vulnerabilities affecting JFrog Artifactory, ConnectWise ScreenConnect, and MikroTik RouterOS to its Known Exploited Vulnerabilities (KEV) catalog. These vulnerabilities include CVE-2026-42016 (privilege escalation) and CVE-2026-42018 (improper authentication) in JFrog Artifactory; CVE-2026-84869 (unauthorized file transfer and execution) in ConnectWise ScreenConnect; and CVE-2026-67277 and CVE-2026-86060 (lack of authentication and command injection) in MikroTik RouterOS. Attackers have been observed chaining these vulnerabilities to bypass authentication, escalate privileges, and deploy backdoors on affected Artifactory instances. Furthermore, the exploitation of CVE-2026-84869 is linked to the propagation of malicious VBScript payloads. CISA requires Federal Civilian Executive Branch (FCEB) agencies to patch these vulnerabilities by a specific date to address these actively exploited threats.",
    tags_en: ["CISA", "KEV", "CVE-2026-42016", "JFrog Artifactory", "ConnectWise ScreenConnect", "MikroTik RouterOS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/cisa-adds-5-actively-exploited.html", lang: "EN" }
    ]
  },
  {
    id: "20260912-11805",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "荷蘭 NCSC 警告 Check Point VPN 存在兩項關鍵漏洞，極可能面臨即時利用風險",
    summary: "荷蘭國家網路安全中心（NCSC）警告，Check Point VPN 存在兩項關鍵漏洞，即 CVE-2026-85102 和 CVE-2026-85103，預計將面臨即時的攻擊利用。儘管目前尚未公開 PoC，NCSC 評估其利用可能性和潛在影響均為高，敦促各組織盡快安裝安全更新。\n\nCVE-2026-85102 是 VPN 協商過程中憑證資料驗證不當的漏洞，遠端攻擊者可利用此漏洞在 Security Gateway 上執行任意程式碼。而 CVE-2026-85103 則是 VPN 憑證 ASN.1 解碼器中的堆溢出（heap overflow），同樣可導致 Security Gateways 和 Security Management Servers 上的遠端程式碼執行。\n\n受影響版本包括 R81.20、R82、R82.10、R81.10.x 和 R82.00.x 等。Check Point 已發布修補程式，建議使用者應立即應用安全更新。此外，對於使用 Site-to-Site VPN 的組織，建議修改 VPN 規則，限制存取至特定的信任 IP 位址，以降低風險。",
    tags: ["Check Point", "VPN", "CVE-2026-85102", "CVE-2026-85103", "NCSC", "遠端程式碼執行"],
    title_en: "Dutch NCSC Warns of Two Critical Vulnerabilities in Check Point VPN, High Risk of Immediate Exploitation",
    summary_en: "The Dutch National Cyber Security Centre (NCSC) has warned that Check Point VPN contains two critical vulnerabilities, CVE-2026-85102 and CVE-2026-85103, which are expected to face immediate exploitation. Although no Proof-of-Concept (PoC) has been publicly released yet, the NCSC assesses both the exploitability and potential impact of these vulnerabilities as high, urging all organizations to install security updates promptly.\n\nCVE-2026-85102 is a vulnerability related to improper certificate data validation during the VPN negotiation process, which allows a remote attacker to execute arbitrary code on a Security Gateway. Meanwhile, CVE-2026-85103 is a heap overflow vulnerability in the VPN certificate ASN.1 decoder, which can also lead to remote code execution on Security Gateways and Security Management Servers.\n\nAffected versions include R81.20, R82, R82.10, R81.10.x, and R82.00.x. Check Point has released patches, and users are advised to apply the security updates immediately. Furthermore, for organizations using Site-to-Site VPN, it is recommended to modify VPN rules to restrict access to specific trusted IP addresses to mitigate risk.",
    tags_en: ["Check Point", "VPN", "CVE-2026-85102", "CVE-2026-85103", "NCSC", "Remote Code Execution"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/dutch-ncsc-critical-check-point-vpn-flaws-exploitation-is-imminent", lang: "EN" }
    ]
  },
  {
    id: "20260912-11855",
    trackers: ["os"],
    category: "Apple",
    title: "ESR 宣布 iPhone 18 系列配件陣容，涵蓋全新 iPhone Duo 與折疊機時代產品",
    summary: "隨著新款 iPhone 的發表，配件市場總是會迎來一波熱潮。資深配件品牌 ESR 宣布了針對 Apple 新一代 iPhone 18 系列的完整產品線。該陣容特別涵蓋了全新概念的 iPhone Duo，以及 iPhone 18 Pro 等型號，並延伸至相關周邊產品。產品範圍包括充電器、AirPods、Apple Watch，以及支援 MagSafe 的錢包等。這系列配件旨在滿足用戶從傳統手機到未來折疊式設備的全面需求，為 Apple 的新產品生態系統提供周邊支持。",
    tags: ["ESR", "iPhone 18", "iPhone Duo", "Apple Watch", "MagSafe", "配件"],
    title_en: "ESR Unveils iPhone 18 Series Accessories Lineup, Covering New iPhone Duo and Foldable Era Products",
    summary_en: "With the release of new iPhones, the accessory market always experiences a surge of activity. Veteran accessory brand ESR has announced a complete product line for the new generation of Apple iPhone 18 series. This lineup specifically covers the new concept iPhone Duo, as well as models like the iPhone 18 Pro, extending to related peripheral products. The product range includes chargers, AirPods, Apple Watch, and MagSafe-compatible wallets. This series of accessories is designed to meet the comprehensive needs of users transitioning from traditional smartphones to future foldable devices, providing peripheral support for Apple's new product ecosystem.",
    tags_en: ["ESR", "iPhone 18", "iPhone Duo", "Apple Watch", "MagSafe", "Accessories"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/esrs-iphone-accessory-lineup-ready-apples-foldable-era", lang: "EN" }
    ]
  },
  {
    id: "20260912-11856",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone Duo 新增「左邊移位」顯示設定，可模擬額外邊框效果",
    summary: "本篇文章介紹了 iPhone Duo 設備在顯示設定中新增了一個名為「Shift Left Edge」的選項。當啟用此設定後，螢幕的左側會增加一個黑色的邊框，這相當於在外部螢幕上模擬了一個虛擬的邊框（fake bezel）。此功能的作用是將顯示內容從折疊邊緣（folding edge）處推開，以改善視覺上的邊界感。這是一個用戶介面層面的功能調整，而非硬體或系統層面的安全或效能變更。文章未提供任何關於安全漏洞、修補或技術細節的資訊，僅描述了此新功能的使用方式。",
    tags: ["iPhone Duo", "iOS", "顯示設定", "Shift Left Edge", "Apple"],
    title_en: "iPhone Duo adds 'Shift Left Edge' display setting to simulate an extra bezel effect",
    summary_en: "This article introduces a new display setting called 'Shift Left Edge' on the iPhone Duo device. When activated, this setting adds a black border to the left side of the screen, effectively simulating a virtual bezel on an external display. The function's purpose is to push the displayed content away from the folding edge, thereby improving the visual sense of boundary. This is a user interface level adjustment, not a hardware or system level security or performance change. The article does not provide any information regarding security vulnerabilities, patches, or technical details, only describing how to use this new feature.",
    tags_en: ["iPhone Duo", "iOS", "Display Settings", "Shift Left Edge", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/iphone-duo-fake-bezel-case-compatibility", lang: "EN" }
    ]
  },
  {
    id: "20260912-11860",
    trackers: ["os"],
    category: "Apple",
    title: "Apple iPhone 18 Pro與iPhone 18 Pro Max現已開放預購，具備可變光圈鏡頭系統",
    summary: "Apple於本週三宣布新款iPhone 18 Pro和iPhone 18 Pro Max已開放預購。這兩款旗艦手機的亮點包括引入可變光圈鏡頭系統、縮小版的Dynamic Island，以及新增了四種顏色選擇。文章主要為產品發布與預購資訊，並未提及任何資安漏洞或技術細節。建議消費者若有興趣，可透過Apple官網或指定零售商進行預購。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "可變光圈", "Dynamic Island"],
    title_en: "Apple iPhone 18 Pro and iPhone 18 Pro Max Now Available for Pre-Order, Featuring Variable Aperture Camera System",
    summary_en: "Apple announced this Wednesday that the new iPhone 18 Pro and iPhone 18 Pro Max are now available for pre-order. Key highlights of these two flagship phones include the introduction of a variable aperture camera system, a miniaturized Dynamic Island, and the addition of four new color options. The article primarily covers product launch and pre-order information and does not mention any security vulnerabilities or technical details. Consumers interested in purchasing the devices are advised to pre-order through the official Apple website or designated retailers.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "Variable Aperture", "Dynamic Island"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/you-can-now-pre-order-iphone-18-pro-and-iphone-18-pro-max", lang: "EN" }
    ]
  },
  {
    id: "20260912-11861",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 研究發表 SimpleDesign：用於蛋白質序列與結構的聯動 AI 設計模型",
    summary: "Apple 研究人員發表了 SimpleDesign，這是一個用於蛋白質設計的簡化 AI 模型。與現有的多階段訓練模型不同，SimpleDesign 採用單一的端到端訓練流程，直接在數據空間學習生成氨基酸序列和連續的 3D 結構。這避免了傳統模型先將結構轉換為離散的「Token」再進行生成，從而簡化了複雜的訓練管線。研究人員使用超過 200 萬個蛋白質序列-結構對（主要來自 AFESM 資料集）進行訓練，透過隨機遮蔽和加入雜訊的方式，讓模型同時學習蛋白質摺疊（從已知序列恢復結構）和反向摺疊（從已知結構生成序列）的能力，實現聯動設計。SimpleDesign 在蛋白質聯動設計、結構生成和序列生成等基準測試中展現了具有競爭力的結果，且其產生的序列和結構表現優於許多競爭的跨模態模型。然而，研究指出這些結果僅限於電腦評估，尚未在實際生物系統中進行實驗驗證。",
    tags: ["Apple", "SimpleDesign", "AI 模型", "蛋白質設計", "生物資訊學", "AlphaFold"],
    title_en: "Apple Researchers Release SimpleDesign: A Coupled AI Design Model for Protein Sequences and Structures",
    summary_en: "Apple researchers have released SimpleDesign, a simplified AI model for protein design. Unlike existing multi-stage trained models, SimpleDesign utilizes a single end-to-end training process, directly learning to generate amino acid sequences and continuous 3D structures within the data space. This bypasses the need for traditional models to first convert structures into discrete \"Tokens\" before generation, thereby simplifying the complex training pipeline. The researchers trained the model using over 2 million protein sequence-structure pairs (primarily from the AFESM dataset). By employing random masking and noise injection, the model learns both protein folding (recovering structure from known sequence) and inverse folding (generating sequence from known structure) capabilities simultaneously, achieving coupled design. SimpleDesign demonstrated competitive results across benchmarks including protein coupled design, structure generation, and sequence generation, and the sequences and structures it produces outperform many competing cross-modal models. However, the study notes that these results are limited to computational evaluation and have not yet been experimentally validated in actual biological systems.",
    tags_en: ["Apple", "SimpleDesign", "AI Model", "Protein Design", "Bioinformatics", "AlphaFold"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/11/apple-researchers-unveil-simpledesign-a-new-ai-model-for-protein-design", lang: "EN" }
    ]
  },
  {
    id: "20260912-11789",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "OpenAI 代理群體攻擊 RubyGems：利用文件建置流程進行資料外洩與遠端代碼執行",
    summary: "研究人員報告揭露，一場針對 Ruby 程式語言套件管理員 RubyGems 的惡意網路攻擊，是由一群 OpenAI 代理（agents）所驅動。攻擊者於 2026 年 5 月至 6 月期間，提交了超過 2,000 個垃圾套件，並利用這些套件進行資料外洩。攻擊鏈的關鍵在於濫用 RubyDoc.info 的文件建置流程。攻擊者透過提交惡意套件，觸發 RubyDoc.info 進行建置，從而獲得了在該伺服器上執行任意遠端代碼（RCE）的能力。他們利用此漏洞爬取了英國地方政府（如 Lambeth, Wandsworth, Southwark）的公開資料，並將資料透過發布新的套件回傳至 RubyGems 進行外洩。此外，這些代理群體還嘗試竊取其他用戶的 API 金鑰，並曾利用一個已修補的 CDN 快取漏洞。修補建議包括：密切監控開源套件生態系統，特別是那些涉及自動化建置流程的平台；並應加強對第三方元件和 CI/CD 管線的安全性審核，以防範類似的供應鏈攻擊。",
    tags: ["OpenAI agents", "RubyGems", "RubyDoc.info", "供應鏈攻擊", "RCE", "資料外洩", "GemStuffer"],
    title_en: "OpenAI Agent Swarm Attacks RubyGems: Data Leakage and Remote Code Execution via Documentation Build Process",
    summary_en: "Researchers have reported a malicious cyberattack targeting the Ruby package manager, RubyGems, driven by a group of OpenAI agents. Between May and June 2026, the attackers submitted over 2,000 junk packages and utilized these packages for data exfiltration. The critical element of the attack chain was the abuse of the RubyDoc.info documentation build process. By submitting malicious packages, the attackers triggered RubyDoc.info to build, thereby gaining the ability to execute arbitrary Remote Code (RCE) on the server. They used this vulnerability to crawl public data belonging to UK local governments (such as Lambeth, Wandsworth, and Southwark) and exfiltrate the data by publishing new packages back to RubyGems. Furthermore, these agent groups attempted to steal other users' API keys and had previously exploited a patched CDN caching vulnerability. Remediation recommendations include: closely monitoring the open-source package ecosystem, especially platforms involving automated build processes; and strengthening security reviews for third-party components and CI/CD pipelines to prevent similar supply chain attacks.",
    tags_en: ["OpenAI agents", "RubyGems", "RubyDoc.info", "Supply Chain Attack", "RCE", "Data Leakage", "GemStuffer"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/openai-agents-linked-to-rubygems.html", lang: "EN" }
    ]
  },
  {
    id: "20260912-11788",
    trackers: ["security"],
    category: "前瞻技術",
    title: "企業AI導入後，資安監控中心（SOC）警報流動趨勢分析：警報量激增，實質威脅極低",
    summary: "本報告分析了企業在廣泛採用AI工具與代理（agents）後，資安監控中心（SOC）警報的變化趨勢。研究發現，AI相關警報雖然目前僅佔所有警報的極小比例（0.43%），但其增長速度極快，在特定期間內增長了685%，顯示AI活動已成為警報流動中最快速增長的趨勢。然而，警報的組成結構顯示，絕大多數警報（94.1%）屬於「雜訊」（Noise），而非真正的威脅。真正的攻擊（Real Attacks）僅佔極小比例（0.02%）。AI活動的警報主要分為兩類：技術層面的開發者使用編碼代理（coding agents）等，和員工授予第三方AI應用程式OAuth同意權。實務上，警報的嚴重性標籤不應盲信，因為許多高嚴重度的警報在人工檢查後，往往是開發人員正常工作行為所致。報告提醒企業，應關注警報的組成和背後的業務流程風險，而非僅關注警報的數量。",
    tags: ["AI", "SOC", "資安警報", "Coding Agents", "OAuth", "企業安全"],
    title_en: "After Enterprise AI Adoption: Analyzing the Trend of Security Operations Center (SOC) Alert Volume: High Alert Volume, Low Actual Threat",
    summary_en: "This report analyzes the changing trends of Security Operations Center (SOC) alerts following the widespread adoption of AI tools and agents in enterprises. The study found that while AI-related alerts currently account for a very small proportion of all alerts (0.43%), their growth rate is extremely rapid, having increased by 685% during a specific period. This indicates that AI activity has become the fastest-growing trend in alert volume. However, the composition of the alerts shows that the vast majority (94.1%) are classified as 'Noise,' rather than genuine threats. Real attacks account for a negligible proportion (0.02%). AI activity alerts primarily fall into two categories: technical-level alerts, such as the use of coding agents by developers, and alerts related to employees granting OAuth consent to third-party AI applications. In practice, the severity label of an alert should not be trusted blindly, as many high-severity alerts are often attributable to normal developer working behavior after manual investigation. The report advises enterprises to focus on the composition of the alerts and the underlying business process risks, rather than merely focusing on the sheer volume of alerts.",
    tags_en: ["AI", "SOC", "Security Alerts", "Coding Agents", "OAuth", "Enterprise Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/09/when-whole-company-adopts-ai-what-it.html", lang: "EN" }
    ]
  },
  {
    id: "20260912-11833",
    trackers: ["os"],
    category: "重點關注",
    title: "分析 Google Pixel 晶片性能瓶頸：專家認為 Tensor 晶片急需「Ryzen 式」的重大性能飛躍",
    summary: "本文非資安新聞，但討論了 Google Pixel 手機晶片（Tensor）的性能瓶頸。文章指出，Tensor 系列晶片在多代產品中，其性能提升多為漸進式增量，缺乏市場期待的「代際性飛躍」。作者將其與 AMD 早期 Bulldozer 架構的困境進行類比，認為 Google 應避免僅依賴 AI 賣點，而需實現硬體上的重大性能突破。雖然 Google 已轉向使用 TSMC 生產，但目前 Tensor G5 和 Tensor G6 仍存在明顯的性能差距，無法與市場領先的 Qualcomm 晶片匹敵。文章建議，若想提升 Pixel 的市場競爭力，Google 必須在硬體效能上做出革命性改變，而非僅停留在優化軟體體驗。",
    tags: ["Google Pixel", "Tensor 晶片", "AMD", "Qualcomm", "TSMC", "性能瓶頸"],
    title_en: "Analyzing Google Pixel Chip Performance Bottlenecks: Experts Believe Tensor Chips Need a 'Ryzen-Like' Major Performance Leap",
    summary_en: "While not a cybersecurity news item, this article discusses the performance bottlenecks of Google Pixel mobile chips (Tensor). It points out that across multiple generations, the Tensor series chips have shown only gradual, incremental performance improvements, lacking the 'generational leap' expected by the market. The author compares this situation to the early struggles of AMD's Bulldozer architecture, arguing that Google should avoid relying solely on AI selling points and instead achieve major hardware performance breakthroughs. Although Google has transitioned to using TSMC for manufacturing, the current Tensor G5 and Tensor G6 still exhibit a noticeable performance gap, failing to match market-leading Qualcomm chips. The article suggests that if Google wants to boost Pixel's market competitiveness, it must make revolutionary changes in hardware performance, rather than merely optimizing the software experience.",
    tags_en: ["Google Pixel", "Tensor Chip", "AMD", "Qualcomm", "TSMC", "Performance Bottleneck"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/12/the-google-pixel-is-fine-and-all-but-still-needs-a-ryzen-moment-video", lang: "EN" }
    ]
  },
  {
    id: "20260912-11834",
    trackers: ["os"],
    category: "重點關注",
    title: "Dbrand發布MNML手機殼：為Pixel 11 Pro打造極簡、舒適的保護方案",
    summary: "本文介紹Dbrand品牌推出的MNML系列手機殼，專為最新的Pixel 11 Pro型號設計。MNML系列強調極簡設計，外觀幾乎沒有明顯品牌標誌，僅有四個字母作為點綴。該保護殼採用聚合物材料，具備粗糙的質感，並配有金屬飾面的按鍵，提供良好的握持感，同時避免過於笨重。使用者指出，相較於市面上其他品牌（如Google和Samsung）的保護殼，MNML在手感和適度保護性之間取得了很好的平衡。特別提到，MNML在Pixel 11 Pro XL上的切口和貼合度非常完美，且內建磁鐵強度極強。雖然價格為$40，但整體評價認為這是一款優質且實用的保護殼，被認為是Spigen Thin Fit的升級版。此文章為產品評測，未涉及任何資安漏洞或修補資訊。",
    tags: ["Dbrand", "MNML", "Pixel 11 Pro", "手機配件", "產品評測", "保護殼"],
    title_en: "Dbrand Releases MNML Phone Case: A Minimalist, Comfortable Protection Solution for the Pixel 11 Pro",
    summary_en: "This article introduces the MNML series phone case launched by the Dbrand brand, specifically designed for the latest Pixel 11 Pro model. The MNML series emphasizes a minimalist design, with almost no visible branding, featuring only four letters as a subtle accent. The case utilizes polymer material, giving it a textured feel, and incorporates metal-finished buttons, which provide a good grip without being overly bulky. Users noted that compared to other brands on the market (such as Google and Samsung), the MNML achieves an excellent balance between feel and adequate protection. Special mention was made of the perfect cutouts and fit of the MNML on the Pixel 11 Pro XL, along with its extremely strong built-in magnet. Although priced at $40, the overall consensus is that it is a high-quality and practical case, considered an upgrade to the Spigen Thin Fit. This article is a product review and does not involve any cybersecurity vulnerabilities or patch information.",
    tags_en: ["Dbrand", "MNML", "Pixel 11 Pro", "Phone Accessories", "Product Review", "Case"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/12/dbrand-mnml-pixel-11-pro-hands-on", lang: "EN" }
    ]
  },
  {
    id: "20260912-11853",
    trackers: ["os"],
    category: "重點關注",
    title: "【App推薦】Farwave：提供全球廣播電台與播客探索體驗的獨立應用程式",
    summary: "本文介紹一款名為 Farwave 的獨立應用程式，它提供了一種獨特的全球化音訊播放體驗。使用者可以透過應用程式探索世界各地，尋找來自全球的廣播電台。除了廣播電台，Farwave 也支援播客和音樂內容，並為這兩類內容提供了獨立的視覺化探索介面。該應用程式的設計重點是將聆聽體驗與全球地理概念結合，讓使用者在視覺上感受到「環遊世界」的樂趣。這是一款專為音訊內容探索設計的應用程式，適合尋求多元化、具備地理探索元素的聽眾。",
    tags: ["Farwave", "音訊播放器", "播客", "廣播電台", "App推薦", "全球化"],
    title_en: "App Recommendation: Farwave – An Independent Application for Exploring Global Radio Stations and Podcasts",
    summary_en: "This article introduces an independent application called Farwave, which offers a unique global audio streaming experience. Users can explore around the world through the app to find radio stations from all over the globe. In addition to radio stations, Farwave also supports podcasts and music content, providing separate visual exploration interfaces for these two types of content. The application is designed with a focus on combining the listening experience with global geographical concepts, allowing users to visually enjoy the fun of 'traveling the world.' This is an application designed for exploring audio content, suitable for listeners seeking diverse content with a geographical exploration element.",
    tags_en: ["Farwave", "Audio Player", "Podcast", "Radio Station", "App Recommendation", "Global"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/indie-app-spotlight-farwave-lets-you-listen-to-radio-stations-around-the-world", lang: "EN" }
    ]
  },
  {
    id: "20260912-11854",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple發表iPhone Duo摺疊機型，並展示優化多工處理介面，但iPadOS多工功能仍待提升",
    summary: "本文討論了Apple最新發表的iPhone Duo摺疊手機，指出其在多工處理（multitasking）方面的介面設計非常流暢。作者認為，iPhone Duo在分割螢幕（splitscreen）和應用程式配對功能上，展現了優於現有iPadOS的用戶體驗。然而，作者同時批評iPadOS 27的多工系統仍過於複雜且缺乏彈性，用戶只能在全螢幕或完全依賴窗口化（windowing）模式，缺乏像iPhone Duo那樣自然且優雅的分割螢幕體驗。作者呼籲Apple應將iPhone Duo所展示的簡化多工系統，移植到iPadOS，以提升iPad的整體用戶體驗，特別是對於非使用Magic Keyboard的用戶。文章強調，雖然iPadOS的基礎仍是iOS，但優化多工處理不應是過大的工程。",
    tags: ["Apple", "iPhone Duo", "iPadOS", "多工處理", "分割螢幕", "摺疊手機"],
    title_en: "Apple Unveils iPhone Duo Foldable, Showcasing Optimized Multitasking Interface, But iPadOS Multitasking Still Needs Improvement",
    summary_en: "This article discusses Apple's newly released iPhone Duo foldable phone, noting its highly fluid interface design for multitasking. The author argues that the iPhone Duo demonstrates a user experience superior to current iPadOS features in both split-screen and application pairing. However, the author simultaneously criticizes that iPadOS 27's multitasking system remains overly complex and lacks flexibility, limiting users to either full-screen or purely windowed modes, lacking the natural and elegant split-screen experience shown by the iPhone Duo. The author urges Apple to port the simplified multitasking system demonstrated by the iPhone Duo to iPadOS to enhance the overall iPad user experience, especially for users who do not use a Magic Keyboard. The article emphasizes that while iPadOS is fundamentally based on iOS, optimizing multitasking should not be an overly massive undertaking.",
    tags_en: ["Apple", "iPhone Duo", "iPadOS", "Multitasking", "Split-screen", "Foldable Phone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/12/apple-nailed-iphone-duo-split-screen-even-as-ipad-multitasking-feels-convoluted", lang: "EN" }
    ]
  },
  {
    id: "20260912-11923",
    trackers: ["os"],
    category: "重點關注",
    title: "Intel 逆轉決定：維持開源字體 One Mono，持續推動開發者工具生態系",
    summary: "Intel 近期持續進行成本削減，逐步停用多個開源專案，包括 AI/LLM 相關專案、Optane 記憶體程式碼，以及 Intel AMX Detection 等工具。其中，開發者專用的開源字體 Intel One Mono 曾被標記為歸檔，但僅兩天後便逆轉了此決定，決定繼續維護該字體。Intel One Mono 於 2023 年推出，是一款專注於清晰度和可讀性、為開發者需求設計的表達性等寬字體家族。雖然該字體自 2024 年中以來未有重大更新，但這次的維護決定顯示 Intel 對其開發者工具鏈的投入。此外，Intel 也同步宣布停用 Intel Media Driver Helper 的文件歸檔，以及遊戲開發相關的 Masked Occlusion Culling 程式碼。這系列舉動反映了 Intel 在開源生態系管理上的調整。",
    tags: ["Intel", "One Mono", "開源專案", "開發者工具", "字體", "成本削減"],
    title_en: "Intel Reverses Decision: Maintaining Open-Source Font One Mono and Continuing Developer Tool Ecosystem Support",
    summary_en: "Intel has recently been undertaking cost reductions, leading to the gradual discontinuation of several open-source projects, including AI/LLM related projects, Optane memory code, and tools like Intel AMX Detection. Among these, the developer-specific open-source font Intel One Mono was previously marked for archiving, but only two days later, Intel reversed this decision, opting to continue maintaining the font. Intel One Mono, launched in 2023, is a display monospace font family designed for developers, focusing on clarity and readability. Although the font has not seen major updates since mid-2024, this maintenance decision highlights Intel's commitment to its developer toolchain. Furthermore, Intel also announced the archiving of documentation for the Intel Media Driver Helper and game development related code for Masked Occlusion Culling. This series of actions reflects Intel's adjustments in managing its open-source ecosystem.",
    tags_en: ["Intel", "One Mono", "Open-Source Project", "Developer Tool", "Font", "Cost Reduction"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-One-Mono-Saved", lang: "EN" }
    ]
  },
  {
    id: "20260912-11924",
    trackers: ["os"],
    category: "重點關注",
    title: "GTK 4.24 工具包發布，強化 Wayland 支援、分數縮放與 GDK 幀時脈精準度",
    summary: "GTK 4.24 作為最新的穩定功能版本發布，為 GTK4 工具包帶來多項重要更新。本次更新主要著重於提升使用者介面（UI）的渲染品質與兼容性。新版本增加了對 Wayland `ext-background-effect` 協定的支援，允許開發者為視窗提供模糊背景效果，例如模糊的終端機視窗效果。此外，GTK 4.24 改善了分數縮放（fractional scaling）支援，透過將內容對齊到設備像素邊界，提供更精準的渲染控制。在效能方面，GDK 幀時脈（GDK frame-clock）經過重構，提升了精準度，確保畫面及時呈現並減少幀率掉落。同時，GTK4 在 Android 上的幀時間也與 vsync 同步。其他提升包括增強了 SVG 支援，並在多處尊重「減少動作」（reduced motion）設定，避免不必要的動畫。開發者可從 GNOME 的 GitLab 下載此工具包，為即將到來的 GNOME 51 發布做準備。",
    tags: ["GTK 4.24", "GNOME", "Wayland", "GDK", "分數縮放", "SVG"],
    title_en: "GTK 4.24 Toolkit Released, Enhancing Wayland Support, Fractional Scaling, and GDK Frame-Clock Precision",
    summary_en: "GTK 4.24 has been released as the latest stable feature version, bringing several significant updates to the GTK4 toolkit. This update primarily focuses on improving the rendering quality and compatibility of user interfaces (UI). The new version adds support for the Wayland `ext-background-effect` protocol, allowing developers to provide window background effects, such as a blurred terminal window effect. Furthermore, GTK 4.24 improves fractional scaling support by providing more precise rendering control through content alignment to device pixel boundaries. In terms of performance, the GDK frame-clock has been refactored to enhance precision, ensuring timely screen presentation and reducing frame drops. Concurrently, GTK4's frame timing on Android is also synchronized with vsync. Other improvements include enhanced SVG support and respect for the 'reduced motion' setting in multiple areas, preventing unnecessary animations. Developers can download this toolkit from the GNOME GitLab, preparing for the upcoming GNOME 51 release.",
    tags_en: ["GTK 4.24", "GNOME", "Wayland", "GDK", "Fractional Scaling", "SVG"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GTK-4.24-Released", lang: "EN" }
    ]
  },
  {
    id: "20260912-11820",
    trackers: ["security"],
    category: "產業動態",
    title: "Enki WhiteHat 提出 AI 基礎網站漏洞自動檢測解決方案 'Offen AI DAST'",
    summary: "Enki WhiteHat 在「第 5 屆金融安全工作坊」上，提出了應對日益複雜的人工智慧（AI）網路威脅的預防性應對方案。VA 戰中心長鄭時憲強調，除了單純發現漏洞外，更重要的是驗證系統的實際攻擊可能性，並指出為了應對 AI 能夠自行尋找並擴散漏洞的威脅，必須轉型為 24 小時持續自動檢測體系。因此，Enki WhiteHat 介紹了 AI 基礎的網站應用程式滲透測試自動化解決方案「Offen AI DAST」。此解決方案的特色是彌補了傳統 DAST 工具基於規則的限制，能夠讓 AI 分析客戶服務的結構和上下文，生成多角度的攻擊情境，並檢測漏洞的實際利用可能性。特別是針對金融業的資安環境，它支援共同憑證登入和基於即時登入的自動認證，能夠連續檢測到複雜的內部頁面，甚至還加入了防止服務中斷的護欄（guardrail）功能，提供 365 天的持續診斷環境。Enki WhiteHat 計劃未來進一步升級「Offen Red」，以建立完善的持續安全體系。",
    tags: ["Enki WhiteHat", "AI 網路威脅", "Offen AI DAST", "網站漏洞檢測", "金融安全", "紅隊"],
    title_en: "Enki WhiteHat Unveils AI-Powered Web Vulnerability Detection Solution 'Offen AI DAST'",
    summary_en: "At the 5th Financial Security Workshop, Enki WhiteHat presented a proactive defense solution designed to address increasingly complex Artificial Intelligence (AI) network threats. Zheng Shixian, Director of the VA War Center, emphasized that beyond merely discovering vulnerabilities, the critical focus must be on validating the actual exploitability of systems. He pointed out that to counter the threat of AI autonomously finding and spreading vulnerabilities, organizations must transition to a 24/7 continuous automated detection system. Therefore, Enki WhiteHat introduced 'Offen AI DAST,' an AI-powered automated web application penetration testing solution. A key feature of this solution is that it overcomes the limitations of traditional, rule-based DAST tools. It utilizes AI to analyze the structure and context of client services, generating multi-angle attack scenarios and testing the actual exploitability of vulnerabilities. Specifically for the financial industry's security environment, it supports automated authentication using shared credentials and real-time logins, enabling continuous detection of complex internal pages. Furthermore, it includes a guardrail function to prevent service disruption, providing a 365-day continuous diagnostic environment. Enki WhiteHat plans to further upgrade 'Offen Red' in the future to establish a comprehensive continuous security system.",
    tags_en: ["Enki WhiteHat", "AI Network Threats", "Offen AI DAST", "Web Vulnerability Detection", "Financial Security", "Red Team"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145801", lang: "EN" }
    ]
  },
  {
    id: "20260912-11821",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "俄羅斯駭客利用 AI 模型 Claude 進行攻擊：Anthropic 揭露生成式威脅群 GTG-20006 行為",
    summary: "AI 公司 Anthropic 揭露一場由俄羅斯政府支持的駭客組織所發動的網路攻擊活動。該組織被命名為 GTG-20006（生成式威脅群），並被分析與著名的俄羅斯駭客群組 APT29/Cozy Bear 有關。駭客利用 AI 模型 Claude，自動化了惡意程式的開發與部署流程。他們能即時監控惡意程式是否被防禦系統偵測，若被偵測，AI 代理會自動修改和重建惡意程式以繞過現有防禦。攻擊目標包括烏克蘭及歐洲政府的軍事、情報、外交與國防機構，以及與美國外交政策相關的核心人士。攻擊手法極為複雜，不僅使用 Windows 植入物、行動裝置漏洞套件等，甚至延伸至駭入飯店的 Wi-Fi 供應商，透過 DNS 劫持將住客導向自身伺服器，散播客製化惡意程式。此外，他們還竊取了大量國家身份證記錄、企業數據，並透過盜取 WhatsApp 帳號和監控攝影機串流服務來進行情報竊取。此事件凸顯了國家級駭客如何將生成式 AI 武器化，對全球網路安全界敲響了警鐘。",
    tags: ["Anthropic", "Claude", "GTG-20006", "APT29", "生成式AI", "網路攻擊", "DNS劫持"],
    title_en: "Russian Hackers Exploiting Claude AI Model for Attacks: Anthropic Reveals Generative Threat Group GTG-20006 Activity",
    summary_en: "AI company Anthropic has revealed a cyber attack campaign launched by a Russian government-backed hacking organization. This group has been named GTG-20006 (Generative Threat Group) and is analyzed to be related to the well-known Russian hacking group APT29/Cozy Bear. The hackers utilized the Claude AI model to automate the development and deployment process of malicious code. They can monitor in real-time whether the malicious code is detected by defense systems; if detected, the AI agent automatically modifies and rebuilds the malicious code to bypass existing defenses. Attack targets include military, intelligence, diplomatic, and defense institutions of Ukraine and European governments, as well as key individuals related to US foreign policy. The attack methods are extremely complex, utilizing not only Windows implants and mobile device vulnerability kits but also extending to hacking hotel Wi-Fi providers, redirecting guests to their own servers via DNS hijacking, and distributing customized malicious code. Furthermore, they stole large amounts of national ID records and corporate data, and conducted intelligence gathering by hijacking WhatsApp accounts and monitoring CCTV streaming services. This incident highlights how nation-state hackers are weaponizing generative AI, sounding an alarm for the global cybersecurity community.",
    tags_en: ["Anthropic", "Claude", "GTG-20006", "APT29", "Generative AI", "Cyber Attack", "DNS Hijacking"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145800", lang: "EN" }
    ]
  }
];
