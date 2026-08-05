// data-20260719.js — 2026-07-19
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-19"] = [
  {
    id: "20260719-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6392：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布了安全公告 DSA-6392，修補了 OpenSSH 服務中一個潛在的認證繞過漏洞。該漏洞可能允許攻擊者在特定條件下，無需正確憑證即可執行遠端命令。此漏洞的修補旨在加強 SSH 服務的認證機制，防止未經授權的遠端存取。受影響的系統為使用 Debian 基礎發行版、並運行 OpenSSH 服務的設備。建議所有系統管理員應立即更新 OpenSSH 服務至修補版本，以消除此安全風險。此修補屬於核心元件的安全性加強，對於維護系統的遠端存取安全至關重要。",
    tags: ["Debian", "OpenSSH", "DSA-6392", "認證繞過", "SSH", "Linux"],
    title_en: "Debian Releases DSA-6392: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6392, patching a potential authentication bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote commands without proper credentials under specific conditions. The patch aims to strengthen the SSH service's authentication mechanism, preventing unauthorized remote access. Affected systems are devices running the OpenSSH service on a Debian-based distribution. All system administrators are advised to immediately update the OpenSSH service to the patched version to eliminate this security risk. This patch is crucial for enhancing the security of core components and maintaining the safety of system remote access.",
    tags_en: ["Debian", "OpenSSH", "DSA-6392", "Authentication Bypass", "SSH", "Linux"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00303.html", lang: "EN" }
    ]
  },
  {
    id: "20260719-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6391-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布安全公告 DSA-6391-1，修補 OpenSSH 服務中一個潛在的認證繞過（Authentication Bypass）漏洞。此漏洞可能允許攻擊者在特定條件下，繞過正常的身份驗證機制，從而獲取未經授權的存取權限。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但此類漏洞對伺服器安全構成重大威脅。建議所有使用 Debian 系統並依賴 OpenSSH 服務的用戶，應立即透過系統更新機制（如 `apt update && apt upgrade`）修補至最新的安全版本，以確保 SSH 連線的安全性。修補建議是將 OpenSSH 升級至包含此安全修補的最新穩定版本。",
    tags: ["Debian", "OpenSSH", "DSA-6391-1", "認證繞過", "SSH", "Linux 核心"],
    title_en: "Debian Releases DSA-6391-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6391-1, patching a potential Authentication Bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to bypass normal authentication mechanisms, thereby gaining unauthorized access. Although the original text does not provide specific CVSS scores or affected version ranges, this type of vulnerability poses a significant threat to server security. All users running Debian systems and relying on the OpenSSH service are advised to immediately patch to the latest secure version using the system update mechanism (e.g., `apt update && apt upgrade`) to ensure the security of their SSH connections. The recommended fix is to upgrade OpenSSH to the latest stable version containing this security patch.",
    tags_en: ["Debian", "OpenSSH", "DSA-6391-1", "Authentication Bypass", "SSH", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00302.html", lang: "EN" }
    ]
  },
  {
    id: "20260719-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心開發進度：Kernel 7.2-rc4 穩定更新，持續關注核心元件安全修補",
    summary: "本文為 Linux 核心開發進度更新，提及了 Kernel 7.2-rc4 的編譯與測試狀態。文章主要提供核心開發的日常觀察，並強調了核心元件的持續穩定性與正常迭代。對於資安人員而言，這代表了核心底層的修補與功能增進是持續進行的，使用者應關注發行版（如 Ubuntu, RHEL 等）是否已將最新的穩定核心版本整合進系統，以確保修補最新的安全漏洞。由於原文未提及具體的 CVE 編號、CVSS 分數或受影響產品，實務建議是保持系統更新，並關注主流發行版發布的 Kernel 安全公告。",
    tags: ["Linux 核心", "Kernel 7.2", "核心開發", "安全更新", "發行版"],
    title_en: "Linux Kernel Development Progress: Kernel 7.2-rc4 Stable Update, Continuous Attention to Core Component Security Patches",
    summary_en: "This article provides an update on Linux kernel development progress, mentioning the compilation and testing status of Kernel 7.2-rc4. The article primarily offers daily observations on core development, emphasizing the continuous stability and normal iteration of core components. For cybersecurity personnel, this indicates that patching and functional enhancements at the core level are ongoing. Users should monitor whether their distribution (such as Ubuntu, RHEL, etc.) has integrated the latest stable kernel version into the system to ensure the patching of the newest security vulnerabilities. Since the original text did not mention specific CVE IDs, CVSS scores, or affected products, the practical recommendation is to keep the system updated and monitor kernel security announcements released by major distributions.",
    tags_en: ["Linux Kernel", "Kernel 7.2", "Core Development", "Security Update", "Distribution"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1083543", lang: "EN" }
    ]
  },
  {
    id: "20260719-004",
    trackers: ["os"],
    category: "Linux",
    title: "聯想 Legion Y700 Gen4 平板電腦獲得 Linux 核心補丁支援，邁向主線版整合",
    summary: "聯想 Legion Y700 Gen4 是一款搭載高通 Snapdragon 8 Elite 晶片的 Android 平板電腦。近期，開源貢獻者 Pengyu Luo 已發布初始補丁，為該設備建立 Device Tree (DT) 支援。目前已能實現按鈕、USB、幀緩衝顯示等基本功能。若能透過下游補丁，未來有望讓 GPU 和觸控螢幕等功能運作。然而，文章指出目前仍缺少 Wi-Fi、藍牙、相機支援，以及麥克風、感應器和震動器等重要功能，這些都需要進一步的下游程式碼支援。這款設備目前距離能在主線 Linux 核心上完美運作還有距離，但相關補丁已在核心郵件清單上公開，顯示其在 Linux 社群中的開發進度。",
    tags: ["Lenovo", "Legion Y700 Gen4", "Linux 核心", "Snapdragon 8 Elite", "Device Tree", "開源貢獻"],
    title_en: "Lenovo Legion Y700 Gen4 Tablet Receives Linux Kernel Patch Support, Moving Towards Mainline Integration",
    summary_en: "The Lenovo Legion Y700 Gen4 is an Android tablet powered by the Qualcomm Snapdragon 8 Elite chip. Recently, open-source contributor Pengyu Luo released an initial patch to establish Device Tree (DT) support for the device. Basic functionalities such as buttons, USB, and frame buffer display are currently achievable. If downstream patches are available, features like the GPU and touchscreen are expected to function in the future. However, the article notes that critical functions such as Wi-Fi, Bluetooth, camera support, and components like microphones, sensors, and vibrators are still missing, all requiring further downstream code support. While the device is still some way from perfect operation on the mainline Linux kernel, the related patches have been published on the kernel mailing list, indicating its development progress within the Linux community.",
    tags_en: ["Lenovo", "Legion Y700 Gen4", "Linux Kernel", "Snapdragon 8 Elite", "Device Tree", "Open-source Contribution"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Lenovo-Y700-Gen4-Linux-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260719-005",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.3 週期：ASUS 主機板支援 HWMON 驅動，擴大感測器監控範圍",
    summary: "本次更新主要針對 ASUS 桌面主機板，透過開源社群的努力，擴展了 Linux 核心的感測器監控能力。核心元件為 ASUS EC Sensors 的 HWMON 驅動，用於監測主機板的溫度、功耗和風扇等硬體資訊。新加入的支援包括 ProArt Z690-CREATOR WIFI、ROG STRIX X870E-E GAMING WIFI7 R2 等型號。這些支援的增加，通常需要開發者根據 DMI 資訊驗證主機板名稱，並確認可用的感測器類型，屬於小規模的驅動修補。目前這些新增的支援已進入 hwmon-next，預計將在下個月的 Linux 7.3 合併窗口中完成整合。這對於 Linux 用戶和系統管理員來說，能更精確地掌握硬體運行狀態，有助於系統維護與效能調校。",
    tags: ["Linux 7.3", "ASUS", "HWMON", "ASUS-EC-Sensors", "Linux 核心", "主機板支援"],
    title_en: "Linux 7.3 Cycle: ASUS Motherboards Support HWMON Driver, Expanding Sensor Monitoring Scope",
    summary_en: "This update primarily targets ASUS desktop motherboards, expanding the Linux kernel's sensor monitoring capabilities through open-source community efforts. The core component is the HWMON driver for ASUS EC Sensors, which is used to monitor hardware information such as motherboard temperature, power consumption, and fan status. Newly added support includes models like the ProArt Z690-CREATOR WIFI and ROG STRIX X870E-E GAMING WIFI7 R2. The addition of this support typically requires developers to validate motherboard names using DMI information and confirm available sensor types, constituting a minor driver patch. This newly added support is currently in hwmon-next and is expected to be integrated during the Linux 7.3 merge window next month. For Linux users and system administrators, this allows for more precise monitoring of hardware operational status, aiding in system maintenance and performance tuning.",
    tags_en: ["Linux 7.3", "ASUS", "HWMON", "ASUS-EC-Sensors", "Linux Kernel", "Motherboard Support"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-More-ASUS-Sensors", lang: "EN" }
    ]
  },
  {
    id: "20260719-006",
    trackers: ["os"],
    category: "Linux",
    title: "GNU Hurd Q2-2026進度報告：持續推進 AArch64 支援與使用 Rust 語言開發翻譯器",
    summary: "GNU Hurd 專案發布了 Q2-2026 進度報告，展示了其持續的開發進展。本季度的重點工作包括：推進 AArch64 架構的支援，並將相關工作上游整合至核心。此外，開發人員在 Rust 語言中實現了 TRIVFS 實作，證明了使用 Rust 編寫 Hurd 翻譯器的可行性。其他技術進展包括開發 9P 翻譯器，用於檔案瀏覽和虛擬機間的目錄樹共享（結合 virtio-9p），以及進行 msync 驗證以符合 POSIX 規範。專案也持續進行 Neovim 移植、OpenBSD OpenNTPD 移植，以及 Glibc 的增強等工作。雖然開發速度不如主流系統，但這些進展顯示了 Hurd 專案在多平台和現代語言生態系統上的持續投入。",
    tags: ["GNU Hurd", "AArch64", "Rust", "9P translator", "POSIX", "Linux 核心"],
    title_en: "GNU Hurd Q2-2026 Progress Report: Continuing AArch64 Support and Developing Translator with Rust",
    summary_en: "The GNU Hurd project released its Q2-2026 progress report, showcasing its continued development progress. Key focus areas this quarter included advancing AArch64 architecture support and integrating related work upstream into the core. Furthermore, developers implemented a TRIVFS implementation in Rust, demonstrating the feasibility of writing a Hurd translator using Rust. Other technical advancements included developing a 9P translator for file browsing and directory tree sharing between virtual machines (combined with virtio-9p), and conducting msync validation to comply with POSIX standards. The project also continued work on Neovim porting, OpenBSD OpenNTPD porting, and Glibc enhancements. Although the development pace is slower than mainstream systems, these advancements demonstrate the Hurd project's sustained commitment to multi-platform support and modern language ecosystems.",
    tags_en: ["GNU Hurd", "AArch64", "Rust", "9P translator", "POSIX", "Linux 核心"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNU-Hurd-Q2-2026", lang: "EN" }
    ]
  },
  {
    id: "20260719-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 SELinux 權限檢查漏洞：過時快取導致部分權限檢查未被稽核",
    summary: "本漏洞涉及 Linux 核心的 SELinux 模組，問題點在於 per-task 的 avdcache 機制。該機制錯誤地儲存和重複使用由 avc_audit_required() 計算的稽核向量，而非根據當前請求的權限重新計算。這導致某些權限檢查（例如在先前進行了目錄搜尋檢查後，後續的目錄寫入檢查）未能被正確地稽核記錄。若未修補，可能導致安全監控的盲點。修補建議是升級 Linux 核心到已修復的版本，特別是針對 `security/selinux/hooks.c` 和 `security/selinux/include/objsec.h` 相關檔案的更新。建議開發者和系統管理員關注核心安全更新，以確保所有權限操作都能被完整稽核。",
    tags: ["Linux 核心", "SELinux", "CVE-2026-53367", "avdcache", "權限檢查", "稽核"],
    title_en: "Linux Kernel SELinux Permission Check Vulnerability: Stale Cache Causes Partial Permission Checks to Go Unaudited",
    summary_en: "This vulnerability affects the SELinux module in the Linux kernel, specifically concerning the per-task `avdcache` mechanism. This mechanism incorrectly stores and reuses audit vectors calculated by `avc_audit_required()`, rather than recalculating them based on the current request's permissions. This failure can result in certain permission checks (for example, subsequent directory write checks after a directory search check) not being correctly audited. If unpatched, this could lead to blind spots in security monitoring. The recommended fix is to upgrade the Linux kernel to a patched version, particularly addressing updates to files related to `security/selinux/hooks.c` and `security/selinux/include/objsec.h`. Developers and system administrators are advised to monitor kernel security updates to ensure all permission operations are fully audited.",
    tags_en: ["Linux Kernel", "SELinux", "CVE-2026-53367", "avdcache", "Permission Check", "Audit"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53367", lang: "EN" }
    ]
  },
  {
    id: "20260719-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 檔案系統修復：修正 fsck 檢查不一致性，防止 inode 區塊標記錯誤",
    summary: "本修補程式針對 Linux 核心中的 f2fs 檔案系統（filesystem）提出修復，解決了因不正確使用 `nat_entry` 標誌所導致的檔案系統檢查（fsck）不一致性問題。問題出在 `f2fs_need_dentry_mark()` 函式在讀取 `nat_entry` 標誌時，缺乏互斥鎖保護，可能導致 inode 區塊標記狀態錯誤。當系統執行寫入、同步（fsync）和檢查點（checkpoint）流程時，如果狀態觀察點不同步，可能導致 `fsck --dry-run` 檢測到已完成檢查點但仍帶有 DENT_BIT_SHIFT 標誌的 inode。根本原因在於 `IS_CHECKPOINTED` 和 `HAS_FSYNCED_INODE` 的語義只在檢查點寫入完全完成後才保證。修補方案將 `set_dentry_mark()` 函式移動到 `__write_node_folio()` 中，並使用 `sbi->node_write` 鎖進行保護，確保資料一致性。",
    tags: ["Linux 核心", "f2fs", "fsck", "inode", "nat_entry", "檔案系統"],
    title_en: "Linux f2fs Filesystem Repair: Fixes fsck Inconsistency Check, Prevents Inode Block Marking Errors",
    summary_en: "This patch addresses a filesystem issue in the Linux kernel's f2fs filesystem, resolving filesystem check (fsck) inconsistencies caused by the incorrect use of the `nat_entry` flag. The problem resides in the `f2fs_need_dentry_mark()` function, which lacks mutual exclusion lock protection when reading the `nat_entry` flag, potentially leading to incorrect inode block marking status. When the system executes write, sync (fsync), and checkpoint processes, if the state observation points are unsynchronized, it may cause `fsck --dry-run` to detect inodes that have completed checkpointing but still carry the DENT_BIT_SHIFT flag. The root cause is that the semantics of `IS_CHECKPOINTED` and `HAS_FSYNCED_INODE` are only guaranteed after the checkpoint write is fully completed. The fix moves the `set_dentry_mark()` function into `__write_node_folio()` and uses the `sbi->node_write` lock for protection, ensuring data consistency.",
    tags_en: ["Linux Kernel", "f2fs", "fsck", "inode", "nat_entry", "Filesystem"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53368", lang: "EN" }
    ]
  },
  {
    id: "20260719-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 UDF 格式處理漏洞：透過超大 CRC 長度繞過驗證",
    summary: "本漏洞存在於 Linux 核心的 UDF（Universal Disk Format）檔案系統處理模組中。具體來說，`udf_read_tagged()` 函數在處理描述符時，若 `descCRCLength + sizeof(struct tag)` 超過區塊大小，會跳過 CRC 驗證。攻擊者可以利用此缺陷，透過精心構造的 UDF 映像檔，將 `descCRCLength` 設定為超大值，從而完全繞過 CRC 驗證機制。系統會僅根據易於重新計算的 8 位元標籤校驗和來接受描述符，導致潛在的資訊安全風險。修補建議是應修改相關程式碼，在遇到描述符的 CRC 長度超過區塊大小時，應明確拒絕該描述符，而非靜默接受。建議系統管理員應升級到修補此漏洞的 Linux 核心版本。",
    tags: ["Linux 核心", "UDF", "CVE-2026-53369", "CRC 驗證", "Linux 核心元件"],
    title_en: "Linux Kernel UDF Format Handling Vulnerability: Bypassing Validation via Oversized CRC Length",
    summary_en: "This vulnerability exists in the UDF (Universal Disk Format) file system handling module within the Linux kernel. Specifically, the `udf_read_tagged()` function, when processing descriptors, will skip CRC validation if `descCRCLength + sizeof(struct tag)` exceeds the block size. An attacker can exploit this flaw by crafting a malicious UDF image and setting `descCRCLength` to an oversized value, thereby completely bypassing the CRC validation mechanism. The system will only accept the descriptor based on an easily recalculable 8-bit tag checksum, leading to potential information security risks. The suggested fix is to modify the relevant code to explicitly reject the descriptor when the CRC length exceeds the block size, rather than silently accepting it. System administrators are advised to upgrade to a Linux kernel version that patches this vulnerability.",
    tags_en: ["Linux Kernel", "UDF", "CVE-2026-53369", "CRC Validation", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53369", lang: "EN" }
    ]
  },
  {
    id: "20260719-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：強化 ACR Mask 驗證，修復用戶空間與硬體配置漏洞",
    summary: "本修補針對 Linux 核心的 `perf/x86/intel` 模組，解決了用戶空間和硬體層級的 ACR (Advanced Counter Register) Mask 驗證與配置缺陷。原先的缺陷包括：用戶空間 ACR Mask 驗證不完整，可能包含不屬於同一事件組的索引；在遇到無效 Mask 時，系統會提前退出，導致後續所有 ACR 組配置被跳過；以及硬體 ACR Mask 在設定新值前，未能清除舊的殘留值（stale hardware ACR mask）。本次更新透過精確識別 ACR 組的事件索引群組，確保用戶空間 Mask 只包含有效位元；改為丟棄無效位元而非提前退出，以維持完整的配置流程；並在每次寫入新配置前，明確清除殘留的硬體 ACR Mask。這些修補旨在提高系統在處理性能監控事件時的穩定性與正確性，防止配置錯誤導致的系統行為異常。",
    tags: ["Linux 核心", "perf", "x86", "ACR Mask", "性能監控", "CVE"],
    title_en: "Linux Kernel Patch: Strengthens ACR Mask Validation to Fix User Space and Hardware Configuration Vulnerabilities",
    summary_en: "This patch addresses the `perf/x86/intel` module in the Linux kernel, resolving defects in Advanced Counter Register (ACR) Mask validation and configuration at both the user space and hardware levels. The original defects included: incomplete user space ACR Mask validation, which could potentially include indices not belonging to the same event group; premature system exit when encountering an invalid Mask, causing subsequent ACR group configurations to be skipped; and failure to clear stale hardware ACR masks before setting new values. This update ensures that user space Masks only contain valid bit groups by accurately identifying ACR group event index groups; it changes the behavior to discard invalid bits instead of exiting prematurely, thereby maintaining a complete configuration process; and it explicitly clears residual hardware ACR Masks before every new configuration write. These patches aim to enhance the stability and correctness of the system when handling performance monitoring events, preventing abnormal system behavior caused by configuration errors.",
    tags_en: ["Linux Kernel", "perf", "x86", "ACR Mask", "Performance Monitoring", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53370", lang: "EN" }
    ]
  },
  {
    id: "20260719-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：RDMA/ionic 處理 node_desc sysfs 讀取時，因缺乏 NUL 終止符導致資訊洩漏漏洞 (CVE-2026-53371)",
    summary: "本漏洞存在於 Linux 核心的 RDMA/ionic 驅動程式中，具體發生在處理 `node_desc` sysfs 讀取時。問題出在 `struct ib_device` 中的 `node_desc[64]` 欄位，由於 `node_desc_store()` 函數執行的是原始的 `memcpy`，會將最多 `IB_DEVICE_NODE_DESC_MAX` 位元組的資料寫入，但不會保證 NUL 終止符。當使用者空間透過 `node_desc` sysfs 檔案寫入恰好 64 位元組的資料時，該陣列將缺乏 NUL 終止符。隨後，`ionic` 的 `hca_type_show()` 處理程序使用了無界限的 `'%s'` 格式化字串，這會導致讀取超過 `node_desc` 範圍，進而洩漏 `struct ib_device` 結構體中相鄰欄位的敏感資訊。由於 `ionic` 支援 `IB_DEVICE_MODIFY_NODE_DESC`，此漏洞可由使用者空間觸發。修補建議是修改核心處理程序，將格式化字串限定為有界限的格式指定符，以防止過度讀取。",
    tags: ["Linux 核心", "RDMA", "ionic", "sysfs", "資訊洩漏", "CVE-2026-53371"],
    title_en: "Linux Kernel: Information Leak Vulnerability in RDMA/ionic Handling of node_desc sysfs Read Due to Missing NUL Terminator (CVE-2026-53371)",
    summary_en: "This vulnerability exists in the RDMA/ionic driver within the Linux kernel, specifically when processing `node_desc` sysfs reads. The issue lies in the `node_desc[64]` field within `struct ib_device`. Because the `node_desc_store()` function executes a raw `memcpy`, it writes up to `IB_DEVICE_NODE_DESC_MAX` bytes of data but does not guarantee a NUL terminator. When user space writes exactly 64 bytes of data through the `node_desc` sysfs file, the array lacks a NUL terminator. Subsequently, the `ionic`'s `hca_type_show()` procedure uses an unbounded `'%s'` format specifier, which causes the read to exceed the `node_desc` range, thereby leaking sensitive information from adjacent fields within the `struct ib_device` structure. Since `ionic` supports `IB_DEVICE_MODIFY_NODE_DESC`, this vulnerability can be triggered from user space. The suggested fix is to modify the kernel processing procedure to limit the format string to a bounded format specifier, preventing over-reading.",
    tags_en: ["Linux Kernel", "RDMA", "ionic", "sysfs", "Information Leak", "CVE-2026-53371"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53371", lang: "EN" }
    ]
  },
  {
    id: "20260719-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 iommu/vt-d 漏洞：PASID 附加至嵌套域時的資料追蹤缺陷",
    summary: "本漏洞位於 Linux 核心的 iommu/vt-d 驅動程式中，涉及在將 PASID（Process Address Space Identifier）附加到嵌套虛擬化域（nested domain）時的資料追蹤（dirty tracking）缺陷。當核心缺乏對嵌套域的 dirty tracking 支援時，如果父域配置了 dirty tracking，則在附加過程中可能會導致頁面資料丟失。此問題已在 Linux 核心中被修復，修補程式的引入要求使用者更新到最新的核心版本。建議系統管理員應立即檢查並升級到修復了此漏洞的 Linux 核心版本，以確保虛擬化環境的資料完整性與系統的安全性。由於原文未提供 CVSS 分數或具體影響台數，建議使用者參考官方發布的修補資訊。",
    tags: ["Linux 核心", "iommu/vt-d", "PASID", "虛擬化", "嵌套域", "CVE-2026-53372"],
    title_en: "Linux Kernel iommu/vt-d Vulnerability: Data Tracking Flaw When Attaching PASID to Nested Domains",
    summary_en: "This vulnerability resides in the Linux kernel's iommu/vt-d driver, involving a data tracking (dirty tracking) flaw when attaching a PASID (Process Address Space Identifier) to a nested domain. When the kernel lacks dirty tracking support for nested domains, if the parent domain has dirty tracking configured, the attachment process may result in page data loss. This issue has been fixed in the Linux kernel, and the introduction of the patch requires users to update to the latest kernel version. System administrators are advised to immediately check and upgrade to the patched Linux kernel version to ensure data integrity and system security in virtualized environments. Since the original text did not provide a CVSS score or specific impact count, users are advised to refer to official patch information.",
    tags_en: ["Linux Kernel", "iommu/vt-d", "PASID", "Virtualization", "Nested Domain", "CVE-2026-53372"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53372", lang: "EN" }
    ]
  },
  {
    id: "20260719-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 mmap 鉤子在處理 VMA 卸載時的邏輯錯誤",
    summary: "本修補針對 Linux 核心中的記憶體映射 (mmap) 相關漏洞，特別是當 mmap_prepare 鉤子從已堆疊 (stacked) 驅動程式的 mmap 鉤子中被呼叫時，處理 VMA (Virtual Memory Area) 卸載的邏輯問題。原設計在發生錯誤時會嘗試卸載 VMA，但由於 mmap 鉤子傳入的 VMA 指標尚未完全建立或已分離 (detached)，導致嘗試卸載時會產生警告或錯誤。此修補透過傳播 mmap 動作是否透過相容層或直接執行，來判斷是否需要執行 VMA 清理。若為相容層呼叫，則不執行 VMA 清理；若為直接呼叫，則執行。此修補亦更新了使用者空間的 VMA 測試，確保核心邏輯的正確性，避免不必要的警告和潛在的記憶體管理問題。",
    tags: ["Linux 核心", "mmap", "VMA", "mmap_prepare", "核心漏洞", "記憶體管理"],
    title_en: "Linux Kernel Patch: Fixing Logical Error in mmap Hook During VMA Unmapping",
    summary_en: "This patch addresses a memory mapping (mmap) related vulnerability in the Linux kernel, specifically concerning the logic for handling Virtual Memory Area (VMA) unmapping when the mmap_prepare hook is called from a stacked driver's mmap hook. The original design attempted to unmap the VMA upon error, but because the VMA pointer passed by the mmap hook was not fully established or was detached, this attempt could generate warnings or errors. This patch determines whether VMA cleanup is necessary by propagating whether the mmap operation was called through a compatibility layer or directly executed. If the call originated from a compatibility layer, VMA cleanup is skipped; otherwise, it is performed. The patch also updates user-space VMA tests to ensure the correctness of the kernel logic, preventing unnecessary warnings and potential memory management issues.",
    tags_en: ["Linux Kernel", "mmap", "VMA", "mmap_prepare", "Kernel Vulnerability", "Memory Management"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53373", lang: "EN" }
    ]
  },
  {
    id: "20260719-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 AMDGPU 漏洞修復：GART 表格未初始化導致 TLB 資訊洩漏風險",
    summary: "本漏洞存在於 Linux 核心的 `drm/amdgpu` 驅動程式中，涉及 GART (Graphics Address Remapping Table) 的管理。問題點在於 GART TLB 在執行 unmapping 操作後會被清除，但在 mapping 操作後卻沒有被正確處理。由於 `amdgpu_bo_create_kernel()` 函式在分配時並未將 GART 表格進行零初始化，當寫入單一 PTE (Page Table Entry) 時，TLB 可能會預期載入來自同一快取行（cacheline）的其他未初始化資料。這些「垃圾」條目可能被誤認為有效，進而導致後續寫入同一快取行中的其他 PTE 時，GPU 可能會使用到這些過時的、無效的 TLB 資訊，造成潛在的資訊洩漏或執行異常。修復方法是在分配 GART 表格後，立即呼叫 `memset_io()` 進行零初始化，確保 GART 表格的完整性。此修復來自核心提交 `d9af8263b82b6eaa60c5718e0c6631c5037e4b24`，建議使用者更新至修復版本以避免風險。",
    tags: ["Linux 核心", "AMDGPU", "GART", "TLB", "drm", "資訊洩漏"],
    title_en: "Linux Kernel AMDGPU Vulnerability Fix: GART Table Uninitialized Leads to TLB Information Leak Risk",
    summary_en: "This vulnerability resides in the `drm/amdgpu` driver within the Linux kernel, concerning the management of the Graphics Address Remapping Table (GART). The issue is that while the GART TLB is cleared after an unmapping operation, it is not correctly handled after a mapping operation. Because the `amdgpu_bo_create_kernel()` function does not zero-initialize the GART table during allocation, when a single PTE (Page Table Entry) is written, the TLB might expect to load other uninitialized data from the same cacheline. These 'garbage' entries might be mistaken for valid data, potentially causing the GPU to use stale, invalid TLB information when subsequently writing other PTEs in the same cacheline, leading to potential information leakage or execution anomalies. The fix involves immediately calling `memset_io()` to zero-initialize the GART table after its allocation, ensuring the integrity of the GART table. This fix originates from kernel commit `d9af8263b82b6eaa60c5718e0c6631c5037e4b24`, and users are advised to update to the patched version to mitigate the risk.",
    tags_en: ["Linux Kernel", "AMDGPU", "GART", "TLB", "drm", "Information Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53374", lang: "EN" }
    ]
  },
  {
    id: "20260719-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全漏洞：amdgpu/vce 驅動程式可因部分地址修補導致寫入錯誤",
    summary: "本漏洞存在於 Linux 核心的 `drm/amdgpu/vce` 驅動程式中，其問題點是當僅有一個 lo/hi 地址有效時，進行地址修補（patching）可能會導致將錯誤的地址寫入到韌體（FW）中。此漏洞影響範圍廣泛，涉及多個 Linux 核心版本。修補建議是升級到已修復的版本，例如至少達到 6.1.175、6.6.140、6.12.90、6.18.32 或 7.0.9 及更高版本。使用者應立即檢查並更新其作業系統的 Linux 核心版本，以避免潛在的地址寫入錯誤，確保系統的穩定性和安全性。",
    tags: ["Linux 核心", "amdgpu", "drm", "vce", "CVE-2026-53375", "Linux 驅動程式"],
    title_en: "Linux Kernel Security Vulnerability: amdgpu/vce Driver May Cause Write Errors Due to Partial Address Patching",
    summary_en: "This vulnerability resides in the `drm/amdgpu/vce` driver within the Linux kernel. The issue arises when address patching is performed with only one of the lo/hi addresses valid, which may result in writing incorrect addresses into the firmware (FW). This vulnerability affects a wide range of Linux kernel versions. The recommended fix is to upgrade to a patched version, such as at least 6.1.175, 6.6.140, 6.12.90, 6.18.32, or 7.0.9 and higher. Users should immediately check and update their operating system's Linux kernel version to prevent potential address write errors, ensuring system stability and security.",
    tags_en: ["Linux Kernel", "amdgpu", "drm", "vce", "CVE-2026-53375", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53375", lang: "EN" }
    ]
  },
  {
    id: "20260719-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全更新：修補 AMD kfd 驅動程式的數值邊界檢查漏洞",
    summary: "本漏洞涉及 Linux 核心的 DRM/AMD kfd 驅動程式，具體位於 `kfd_ioctl_get_process_apertures_new` 函數中。該問題屬於數值邊界檢查不足，可能導致系統不安全。修補措施為在處理節點數量（num_of_nodes）時增加上界檢查。受影響的系統版本範圍廣泛，但核心開發者已在多個提交（commit）中修補此問題。建議使用者應升級至最新的 Linux 核心版本，特別是針對 6.6.140、6.12.90、6.18.32 及 7.0.9 等版本，以確保獲得完整的安全修補。由於原文未提供 CVSS 分數或具體攻擊向量，使用者應留意官方的系統更新公告。",
    tags: ["Linux 核心", "CVE-2026-53376", "AMD", "kfd", "DRM", "數值邊界檢查"],
    title_en: "Linux Kernel Security Update: Patching Numerical Boundary Check Vulnerability in AMD kfd Driver",
    summary_en: "This vulnerability affects the DRM/AMD kfd driver within the Linux kernel, specifically located in the `kfd_ioctl_get_process_apertures_new` function. The issue is due to insufficient numerical boundary checking, which could potentially lead to system insecurity. The patch involves adding an upper bound check when handling the number of nodes (num_of_nodes). The affected system versions are widespread, but core developers have patched this issue in multiple commits. Users are advised to upgrade to the latest Linux kernel version, especially for versions such as 6.6.140, 6.12.90, 6.18.32, and 7.0.9, to ensure complete security remediation. Since the original text did not provide a CVSS score or specific attack vector, users should monitor official system update announcements.",
    tags_en: ["Linux Kernel", "CVE-2026-53376", "AMD", "kfd", "DRM", "Numerical Boundary Check"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53376", lang: "EN" }
    ]
  },
  {
    id: "20260719-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 GPU 驅動程式漏洞：drm/msm 提升穩定性，修復 GPU 恢復機制",
    summary: "本漏洞影響 Linux 核心的 `drm/msm` 驅動程式，涉及 GPU 資源管理和恢復機制。原先的設計在工作任務空閒時，GPU 的恢復工作流程存在缺陷，可能會導致系統依賴 GPU 進入睡眠再喚醒，若 GPU 處於掛起（hung）狀態，可能無法正確恢復，甚至可能觸發重複的超時（timeout）機制。修補後的版本改為強制執行 GPU 恢復，確保系統穩定性。受影響的程式檔案為 `drivers/gpu/drm/msm/msm_gpu.c`。建議使用者應升級到修復版本，例如版本號小於 6.18.32 或 7.0.9 的版本，應升級至修復後的版本，以避免系統在空閒或掛起狀態下出現不穩定的 GPU 恢復問題。",
    tags: ["Linux 核心", "drm/msm", "GPU 驅動", "CVE", "msm_gpu.c"],
    title_en: "Linux Kernel GPU Driver Vulnerability: drm/msm Improves Stability and Fixes GPU Recovery Mechanism",
    summary_en: "This vulnerability affects the `drm/msm` driver in the Linux kernel, concerning GPU resource management and recovery mechanisms. Previously, the GPU recovery workflow had flaws when the GPU was idle during work tasks. This could lead to system dependency on GPU sleep and wake cycles; if the GPU was in a hung state, it might fail to recover correctly, potentially triggering repeated timeout mechanisms. The patched version now enforces GPU recovery, ensuring system stability. The affected source file is `drivers/gpu/drm/msm/msm_gpu.c`. Users are advised to upgrade to the patched version. Specifically, versions less than 6.18.32 or 7.0.9 should be upgraded to the fixed version to prevent unstable GPU recovery issues when the system is idle or hung.",
    tags_en: ["Linux Kernel", "drm/msm", "GPU Driver", "CVE", "msm_gpu.c"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53377", lang: "EN" }
    ]
  },
  {
    id: "20260719-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 drm/colorop 狀態管理中的記憶體洩漏漏洞",
    summary: "本修補針對 Linux 核心的 `drm/colorop` 模組，解決了在狀態複製、銷毀和重置操作過程中發生的記憶體洩漏問題。原始實作未能遵循 `drm_crtc` 模組已建立的標準模式，導致狀態記憶體釋放時，未能正確釋放相關的 blob 參考計數，造成資源洩漏。修補內容主要新增了 `__drm_atomic_helper_colorop_destroy_state()` 輔助函數，確保在釋放狀態記憶體前，能正確釋放 blob 參考。此外，`drm_colorop_reset()` 和 `drm_colorop_cleanup()` 也已更新，改用標準的銷毀路徑進行清理，確保了整個狀態生命週期中的參考計數正確性。此修補旨在強化核心元件的資源管理，防止因不當的狀態處理導致的系統穩定性問題。",
    tags: ["Linux 核心", "drm/colorop", "記憶體洩漏", "Linux 核心", "狀態管理"],
    title_en: "Linux Kernel Patch: Fixes Memory Leak in drm/colorop State Management",
    summary_en: "This patch addresses a memory leak in the Linux kernel's `drm/colorop` module, which occurred during state copy, destruction, and reset operations. The original implementation failed to follow the standard pattern established by the `drm_crtc` module, resulting in resource leakage because related blob references were not correctly released when state memory was freed. The fix primarily introduces the `__drm_atomic_helper_colorop_destroy_state()` helper function, ensuring that blob references are correctly released before the state memory is freed. Additionally, `drm_colorop_reset()` and `drm_colorop_cleanup()` have been updated to use the standard destruction path for cleanup, ensuring the accuracy of reference counting throughout the entire state lifecycle. This patch aims to strengthen resource management within core components, preventing system stability issues caused by improper state handling.",
    tags_en: ["Linux Kernel", "drm/colorop", "Memory Leak", "Linux Kernel", "State Management"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53378", lang: "EN" }
    ]
  },
  {
    id: "20260719-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：i2c/ov8856 驅動程式控制處理器釋放錯誤，建議更新核心版本",
    summary: "本漏洞存在於 Linux 核心的 `media: i2c: ov8856` 驅動程式中，具體為 `ov8856_init_controls()` 函數在添加控制項失敗時，未能正確釋放控制處理器（control handler）。這可能導致資源洩漏或潛在的穩定性問題。此問題已在 Linux 核心中被修復，開發者應升級到最新的核心版本以修補。修補建議是更新到包含修復程式碼的 Linux 核心版本，避免使用過舊的、受影響的核心版本。由於原文未提供 CVSS 分數或具體影響範圍，建議系統管理員應立即檢查並更新系統核心。",
    tags: ["Linux 核心", "i2c", "ov8856", "資源洩漏", "CVE-2026-53379"],
    title_en: "Linux Kernel Vulnerability: i2c/ov8856 Driver Control Handler Release Error, Update Kernel Version Recommended",
    summary_en: "This vulnerability exists in the `media: i2c: ov8856` driver within the Linux kernel. Specifically, the `ov8856_init_controls()` function fails to correctly release the control handler when adding controls fails. This may lead to resource leakage or potential stability issues. This issue has been fixed in the Linux kernel, and developers should upgrade to the latest kernel version to patch it. The patch recommendation is to update to a Linux kernel version containing the fix, and avoid using older, affected kernel versions. Since the original text did not provide a CVSS score or specific impact scope, system administrators are advised to immediately check and update their system kernel.",
    tags_en: ["Linux Kernel", "i2c", "ov8856", "Resource Leakage", "CVE-2026-53379"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53379", lang: "EN" }
    ]
  },
  {
    id: "20260719-020",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全漏洞：virtiofs 處理子掛載卸載時可能發生 UAF 崩潰",
    summary: "本漏洞涉及 Linux 核心的 virtiofs 模組，具體為在處理子掛載（submount）的 `umount` 過程中，如果超級區塊（super block）已被銷毀，可能會導致使用 Use-After-Free (UAF) 漏洞，進而引起系統崩潰（Oops）。此問題的根本原因在於，當進行超級區塊關機時，系統會等待所有等待計數器（num_waiting）歸零，但此等待機制僅適用於最後一個子掛載實例，而無法適用於所有子掛載連接。修補建議是將 auto_submounts 的情況改為使用同步釋放請求（synchronous release requests），此修補僅限於 virtiofs 模組。受影響的系統版本範圍廣泛，建議所有使用 virtiofs 的 Linux 系統應升級至最新的核心版本以修復此安全問題。",
    tags: ["Linux 核心", "virtiofs", "UAF", "Linux Kernel", "CVE-2026-53381", "系統崩潰"],
    title_en: "Linux Kernel Security Vulnerability: UAF Crash Possible in virtiofs During Submount Unmount",
    summary_en: "This vulnerability affects the virtiofs module in the Linux kernel. Specifically, during the `umount` process for a submount, if the super block has been destroyed, it may lead to a Use-After-Free (UAF) vulnerability, potentially causing a system crash (Oops). The root cause is that when the super block is shut down, the system waits for the `num_waiting` counter to reach zero. However, this waiting mechanism only applies to the last submount instance and cannot be applied to all submount connections. The suggested fix is to change the handling of `auto_submounts` to use synchronous release requests. This patch is limited to the virtiofs module. Since the affected system versions are widespread, all Linux systems using virtiofs are advised to upgrade to the latest kernel version to remediate this security issue.",
    tags_en: ["Linux Kernel", "virtiofs", "UAF", "Linux Kernel", "CVE-2026-53381", "System Crash"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53381", lang: "EN" }
    ]
  },
  {
    id: "20260719-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 vidtv 驅動程式的空指標解引用漏洞，防止一般保護故障",
    summary: "本漏洞位於 Linux 核心的媒體處理相關驅動程式 `vidtv` 中，涉及 `vidtv_mux_push_si` 函式。問題根源在於 `vidtv_mux_pid_ctx_init` 函式在處理 PMT 區段 PID 時，未能檢查 `vidtv_mux_create_pid_ctx_once()` 的回傳值。若記憶體分配失敗，PID 上下文將無法建立，但初始化函式仍會回傳成功。後續的 `vidtv_mux_push_si` 呼叫會從 `vidtv_mux_get_pid_ctx()` 取得 NULL 值，但未進行空值檢查，導致嘗試存取近 NULL 位址，進而引發一般保護故障（General Protection Fault）。修復措施包括在 `vidtv_mux_pid_ctx_init` 中增加錯誤檢查，以及在 `vidtv_mux_push_si` 等所有相關呼叫點加入防禦性 NULL 檢查，確保在存取指標前進行有效驗證。",
    tags: ["Linux 核心", "vidtv", "空指標解引用", "General Protection Fault", "media 驅動程式"],
    title_en: "Linux Kernel Fixes Null Pointer Dereference Vulnerability in vidtv Driver, Preventing General Protection Fault",
    summary_en: "This vulnerability resides in the Linux kernel's media processing driver, `vidtv`, specifically involving the `vidtv_mux_push_si` function. The root cause is that the `vidtv_mux_pid_ctx_init` function fails to check the return value of `vidtv_mux_create_pid_ctx_once()()` when processing PMT segment PIDs. If memory allocation fails, the PID context cannot be established, but the initialization function still returns success. Subsequent calls to `vidtv_mux_push_si` retrieve a NULL value from `vidtv_mux_get_pid_ctx()` but fail to perform a null check, leading to an attempt to access a near-NULL address, which subsequently triggers a General Protection Fault. The remediation involves adding error checking within `vidtv_mux_pid_ctx_init` and implementing defensive NULL checks at all relevant call points, such as `vidtv_mux_push_si`, to ensure proper validation before accessing the pointer.",
    tags_en: ["Linux Kernel", "vidtv", "Null Pointer Dereference", "General Protection Fault", "media driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53382", lang: "EN" }
    ]
  },
  {
    id: "20260719-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 核心漏洞：非首次複合請求可導致遠端 NULL 指標解引用，影響服務穩定性",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，涉及 SMBv2 協定處理。當 ksmbd 處理複合（COMPOUND）請求時，若該請求的非首次操作（Operation 2, 3...）所依賴的會話（session）狀態不是 SMB2_SESSION_VALID，系統會繞過完整的狀態驗證流程。攻擊者可以利用一個帶有 NTLM Type-1 資訊的 SESSION_SETUP 請求，作為複合請求的第一個操作，建立一個狀態為 IN_PROGRESS 但使用者欄位（sess->user）為 NULL 的會話。隨後，透過第二個操作（如 TREE_CONNECT），強制在該 NULL 使用者欄位上進行解引用操作，導致遠端 NULL 指標解引用（remote NULL-pointer dereference），最終觸發核心 Oops，使 ksmbd worker 服務卡死，影響所有客戶端連線。修補建議是實作檢查，確保所有非首次複合操作所使用的會話狀態必須是 SMB2_SESSION_VALID，以符合獨立查找路徑的嚴格驗證標準。",
    tags: ["Linux 核心", "ksmbd", "SMBv2", "NULL 指標解引用", "CVE-2026-53383", "核心漏洞"],
    title_en: "Linux ksmbd Core Vulnerability: Non-initial compound requests can lead to remote NULL pointer dereference, affecting service stability",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, involving SMBv2 protocol handling. When ksmbd processes a COMPOUND request, if the session state relied upon by a non-initial operation (Operation 2, 3...) is not SMB2_SESSION_VALID, the system bypasses the complete state validation process. An attacker can exploit this by using a SESSION_SETUP request containing NTLM Type-1 information as the first operation in a compound request, establishing a session with an IN_PROGRESS state but a NULL user field (sess->user). Subsequently, by performing a second operation (such as TREE_CONNECT), the attacker forces a dereference operation on this NULL user field, leading to a remote NULL-pointer dereference, which ultimately triggers a kernel Oops, causing the ksmbd worker service to freeze and affecting all client connections. The suggested fix is to implement a check ensuring that the session state used by all non-initial compound operations must be SMB2_SESSION_VALID, adhering to the strict validation standards of the independent lookup path.",
    tags_en: ["Linux Kernel", "ksmbd", "SMBv2", "NULL Pointer Dereference", "CVE-2026-53383", "Core Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53383", lang: "EN" }
    ]
  },
  {
    id: "20260719-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：8250 序列埠驅動程式存在資源洩漏，若時鐘通知器註冊失敗，可能導致 Use-After-Free",
    summary: "本漏洞存在於 Linux 核心的 8250 序列埠驅動程式（dw8250）。當驅動程式嘗試註冊時鐘通知器（clk_notifier）時，如果 `clk_notifier_register()` 呼叫失敗，系統會返回錯誤，但卻沒有執行必要的資源清理。這導致 8250 埠位址仍然被佔用，且驅動程式的開發者資料（devm-allocated driver data）被釋放，但埠位址仍透過儲存的私有資料和 I/O 回呼函數（serial_in/serial_out callbacks）進行引用。因此，在系統重新綁定或重啟之前，任何對該埠位址的存取都可能觸發 Use-After-Free 漏洞。修補建議是必須在 `clk_notifier_register()` 失敗的錯誤路徑上，明確地執行序列埠埠位址的解除註冊（unregister the port）。",
    tags: ["Linux 核心", "8250 序列埠", "Use-After-Free", "驅動程式", "資源洩漏", "CVE-2026-53384"],
    title_en: "Linux Kernel: 8250 Serial Port Driver Has Resource Leak, Potential Use-After-Free if Clock Notifier Registration Fails",
    summary_en: "This vulnerability exists in the 8250 serial port driver (dw8250) within the Linux kernel. When the driver attempts to register a clock notifier (clk_notifier), if the `clk_notifier_register()` call fails, the system returns an error but fails to perform necessary resource cleanup. This results in the 8250 port address remaining occupied, and although the driver's developer data (devm-allocated driver data) is freed, the port address is still referenced via stored private data and I/O callbacks (serial_in/serial_out callbacks). Consequently, any access to this port address before the system rebinds or reboots could trigger a Use-After-Free vulnerability. The suggested fix is to explicitly unregister the serial port address in the error path of `clk_notifier_register()` failure.",
    tags_en: ["Linux Kernel", "8250 Serial Port", "Use-After-Free", "Driver", "Resource Leak", "CVE-2026-53384"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53384", lang: "EN" }
    ]
  },
  {
    id: "20260719-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復：vcs_notifier() 處理競態條件導致的空指標解引用漏洞",
    summary: "本漏洞存在於 Linux 核心的顯示控制元件（virtual console, vc）處理邏輯中。問題點出在 `vcs_write()` 函數內，當系統在用戶空間複製資料時，會暫時釋放 `console_lock`。此時，從 `vcs_vc()` 取得的 `vc_data` 指標可能過時（stale）。雖然程式碼設計了重新獲取鎖定並重新驗證指標的機制，但若在鎖定釋放期間，該虛擬控制台（vc）已被釋放，後續的 `vcs_scr_updated(vc)` 仍會使用這個已為 NULL 的 `vc` 指標，導致在通知鏈（notifier chain）中發生空指標解引用（null pointer dereference）。修復方法是在呼叫 `vcs_scr_updated()` 之前，增加對 `vc` 指標的 NULL 檢查，確保指標有效性，從而解決此一競態條件導致的記憶體安全問題。",
    tags: ["Linux 核心", "vcs_notifier", "空指標解引用", "競態條件", "Linux 核心元件"],
    title_en: "Linux Kernel Fix: Null Pointer Dereference Vulnerability in vcs_notifier() Handling Race Condition",
    summary_en: "This vulnerability resides in the display control component (virtual console, vc) handling logic of the Linux kernel. The issue is located within the `vcs_write()` function. When the system copies data in user space, it temporarily releases the `console_lock`. During this time, the `vc_data` pointer obtained from `vcs_vc()` may become stale. Although the code includes a mechanism to reacquire the lock and revalidate the pointer, if the virtual console (vc) is released during the lock release period, the subsequent call to `vcs_scr_updated(vc)` may still use this already NULL `vc` pointer, leading to a null pointer dereference in the notifier chain. The fix involves adding a NULL check for the `vc` pointer before calling `vcs_scr_updated()`, ensuring pointer validity and thus resolving this race condition-induced memory safety issue.",
    tags_en: ["Linux Kernel", "vcs_notifier", "Null Pointer Dereference", "Race Condition", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53385", lang: "EN" }
    ]
  },
  {
    id: "20260719-025",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 iio:adc:ti-ads1298 邊界檢查漏洞 (CVE-2026-53386) 修復公告",
    summary: "本漏洞存在於 Linux 核心的 iio:adc:ti-ads1298 驅動程式中。該問題允許攻擊者在處理 ADS1298 設備的 PGA 設定索引時，若索引值大於 7，將導致陣列越界存取 (out-of-bounds array access)。這可能導致系統崩潰或被惡意利用。修復建議是為 `ads1298_pga_settings` 索引增加邊界檢查，並在索引超出範圍時返回 `-EINVAL`。受影響的系統版本包括所有小於 6.12.95、6.18.37、7.0.14 或 7.1.2 的 Linux 核心版本。使用者應立即升級至修復後的版本，以避免安全風險。",
    tags: ["Linux 核心", "iio:adc", "ti-ads1298", "CVE-2026-53386", "陣列越界", "Linux 驅動程式"],
    title_en: "Linux Kernel iio:adc:ti-ads1298 Boundary Check Vulnerability (CVE-2026-53386) Fix Announcement",
    summary_en: "This vulnerability exists in the iio:adc:ti-ads1298 driver within the Linux kernel. The issue allows an attacker, when processing the PGA setting index for the ADS1298 device, to cause an out-of-bounds array access if the index value exceeds 7. This could potentially lead to system crashes or malicious exploitation. The recommended fix is to add boundary checks to the `ads1298_pga_settings` index and return `-EINVAL` when the index is out of range. Affected system versions include all Linux kernel versions prior to 6.12.95, 6.18.37, 7.0.14, or 7.1.2. Users should immediately upgrade to the patched version to mitigate security risks.",
    tags_en: ["Linux Kernel", "iio:adc", "ti-ads1298", "CVE-2026-53386", "Array Out-of-Bounds", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53386", lang: "EN" }
    ]
  },
  {
    id: "20260719-026",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 iio: light: veml6075 驅動程式存在越界存取漏洞，需更新核心版本修補",
    summary: "本漏洞位於 Linux 核心的 iio: light: veml6075 驅動程式中，存在越界陣列存取（out-of-bounds array access）問題。該問題出現在 veml6075_it_ms 索引的處理上，該索引雖然定義有 5 個元素，但 VEML6075_CONF_IT 卻可能回傳值高於 7，若回傳值大於等於 5，將導致越界存取。此漏洞的修補旨在強化對故障設備、錯誤編程或匯流排損壞的防護。修補措施為在索引處增加邊界檢查，並在索引超出範圍時回傳 -EINVAL。受影響的系統應升級到核心版本 6.12.95、6.18.37、7.0.14 或 7.1.2 或更高版本，以修補此安全缺陷。",
    tags: ["Linux 核心", "iio: light", "veml6075", "越界存取", "CVE-2026-53387"],
    title_en: "Linux Kernel iio: light: veml6075 Driver Has Out-of-Bounds Access Vulnerability, Requires Kernel Update for Patch",
    summary_en: "This vulnerability resides in the iio: light: veml6075 driver within the Linux kernel, involving an out-of-bounds array access issue. The problem occurs during the handling of the veml6075_it_ms index. Although this index is defined with 5 elements, VEML6075_CONF_IT may return a value greater than 7. If the returned value is greater than or equal to 5, it will cause an out-of-bounds access. The patch aims to strengthen protection against faulty devices, incorrect programming, or bus corruption. The mitigation involves adding boundary checks at the index and returning -EINVAL when the index is out of range. Affected systems should upgrade to kernel versions 6.12.95, 6.18.37, 7.0.14, or 7.1.2 or higher to patch this security flaw.",
    tags_en: ["Linux Kernel", "iio: light", "veml6075", "Out-of-bounds Access", "CVE-2026-53387"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53387", lang: "EN" }
    ]
  },
  {
    id: "20260719-027",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：修復 FUSE 頁面快取操作中的 Use-After-Free 漏洞",
    summary: "本漏洞存在於 Linux 核心的 FUSE (Filesystem in Userspace) 模組中。問題出在 `fuse_try_move_folio()` 函數，該函數在進入時會釋放（unlock）請求，但在成功執行路徑（success path）上並未重新鎖定（re-lock）該請求。這導致當呼叫 `fuse_chan_abort()` 結束請求並釋放 `fuse_io_args` 時，後續的頁面複製鏈邏輯（copy chain logic）仍會存取這些已釋放的參數，造成典型的 Use-After-Free (UAF) 記憶體安全問題。修復方法是在執行 `replace_page_cache_folio()` 之前，明確呼叫 `lock_request()`，確保在成功路徑上請求始終處於鎖定狀態。這能有效防止 `fuse_io_args` 在後續複製邏輯運行時被意外釋放，並保證相關的頁面映射（mapping）不會為空。此修補屬於核心元件層面的安全強化，建議系統管理員應更新至修復版本以修復此記憶體安全漏洞。",
    tags: ["Linux 核心", "FUSE", "Use-After-Free", "CVE-2026-53388", "記憶體安全"],
    title_en: "Linux Kernel: Fixes Use-After-Free Vulnerability in FUSE Page Cache Operation",
    summary_en: "This vulnerability exists in the FUSE (Filesystem in Userspace) module of the Linux kernel. The issue resides in the `fuse_try_move_folio()` function, which unlocks the request upon entry but fails to re-lock it along the success path. This causes the subsequent page copy chain logic to still access these released parameters when `fuse_chan_abort()` finishes the request and releases `fuse_io_args`, leading to a typical Use-After-Free (UAF) memory safety issue. The fix involves explicitly calling `lock_request()` before executing `replace_page_cache_folio()`, ensuring the request remains locked throughout the success path. This effectively prevents `fuse_io_args` from being unexpectedly released during subsequent copy logic execution and guarantees that related page mappings are not null. This patch represents a core component level security enhancement, and system administrators are advised to update to the patched version to remediate this memory safety vulnerability.",
    tags_en: ["Linux Kernel", "FUSE", "Use-After-Free", "CVE-2026-53388", "Memory Safety"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53388", lang: "EN" }
    ]
  },
  {
    id: "20260719-028",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 net/tcp-ao 模組中 del_async 路徑的 Use-After-Free 漏洞",
    summary: "本漏洞存在於 Linux 核心的網路協定相關模組 net/tcp-ao 中。問題出現在使用 `del_async` 刪除鍵（key）時，該路徑會跳過同步路徑（synchronous path）中對 `current_key` 和 `rnext_key` 的有效性檢查，誤假設在 LISTEN 狀態的 socket 上這些指標總是 NULL。然而，如果鍵是在 socket 處於 CLOSE 狀態時，並使用 `set_current=1`/`set_rnext=1` 加入，當 socket 進入 LISTEN 狀態後，`current_key` 和 `rnext_key` 仍可能非 NULL。當使用 `del_async=1` 刪除此類鍵時，`hlist_del_rcu()` 和 `call_rcu()` 會釋放鍵，但沒有清除懸空指標（dangling pointers）。在 RCU 寬限期（grace period）結束後，呼叫 `getsockopt(TCP_AO_INFO)` 時，會嘗試解引用這些已從已釋放的 slab 記憶體中取得的指標，從而導致 Use-After-Free 漏洞。修補建議是在 `del_async` 路徑中，當 `current_key` 和 `rnext_key` 指向正在被刪除的鍵時，必須明確清除這些指標。",
    tags: ["Linux 核心", "net/tcp-ao", "Use-After-Free", "CVE-2026-53389", "Linux Kernel"],
    title_en: "Linux Kernel Patch: Fixes Use-After-Free Vulnerability in the net/tcp-ao Module's del_async Path",
    summary_en: "This vulnerability exists in the Linux kernel's network protocol module, net/tcp-ao. The issue occurs when deleting a key using `del_async`. This path bypasses the validity checks for `current_key` and `rnext_key` found in the synchronous path, incorrectly assuming that these pointers are always NULL on sockets in the LISTEN state. However, if a key is added while the socket is in the CLOSE state, using `set_current=1`/`set_rnext=1`, `current_key` and `rnext_key` may still be non-NULL after the socket enters the LISTEN state. When such a key is deleted using `del_async=1`, `hlist_del_rcu()` and `call_rcu()` release the key but fail to clear the dangling pointers. After the RCU grace period ends, calling `getsockopt(TCP_AO_INFO)` attempts to dereference these pointers, which have been retrieved from already freed slab memory, leading to a Use-After-Free vulnerability. The patch suggests that in the `del_async` path, when `current_key` and `rnext_key` point to the key being deleted, these pointers must be explicitly cleared.",
    tags_en: ["Linux Kernel", "net/tcp-ao", "Use-After-Free", "CVE-2026-53389", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53389", lang: "EN" }
    ]
  },
  {
    id: "20260719-029",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 服務修復：防止透過惡意 ACE 導致堆記憶體越界讀取 (CVE-2026-53390)",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，具體位於 `smb_check_perm_dacl()` 函數的權限檢查流程。該函數在處理 ACE (Access Control Entry) 時，雖然驗證了 ACE 標頭大小，但未能檢查 `ace->size` 是否足夠容納 `num_subauth` 個子授權單位 (sub-authorities)。攻擊者可以透過構造一個惡意的 ACE，將其放置在安全描述符的尾部，並利用 SMB2_SET_INFO 寫入，使得在後續的 SMB2_CREATE 存取檢查時，導致堆記憶體越界讀取 (heap out-of-bounds read)。此漏洞的實務影響是，任何在使用 ACL xattrs 的共享上，由已驗證的客戶端觸發，可能導致系統資訊洩露。修補建議是為 `smb_check_perm_dacl()` 增加缺失的 `num_subauth` 與 `ace_size` 檢查，以確保子授權單位的讀取範圍在分配的緩衝區內。",
    tags: ["Linux 核心", "ksmbd", "CVE-2026-53390", "SMB", "堆記憶體越界讀取", "ACL"],
    title_en: "Linux ksmbd Service Fix: Preventing Heap Out-of-Bounds Read via Malicious ACE (CVE-2026-53390)",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, specifically within the permission checking process of the `smb_check_perm_dacl()` function. While this function validates the ACE (Access Control Entry) header size when processing ACEs, it fails to check if `ace->size` is sufficient to accommodate `num_subauth` sub-authorities. An attacker can construct a malicious ACE, place it at the end of the security descriptor, and exploit it using SMB2_SET_INFO writes. This leads to a heap out-of-bounds read during subsequent SMB2_CREATE access checks. The practical impact of this vulnerability is that it could lead to system information leakage when triggered by a validated client on a share that uses ACL xattrs. The recommended fix is to add the missing checks for `num_subauth` and `ace_size` within `smb_check_perm_dacl()` to ensure that the reading range for sub-authorities remains within the allocated buffer.",
    tags_en: ["Linux Kernel", "ksmbd", "CVE-2026-53390", "SMB", "Heap Out-of-Bounds Read", "ACL"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53390", lang: "EN" }
    ]
  },
  {
    id: "20260719-030",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 pNFS 漏洞：零長度 r_addr 導致空指針解引用，可能讓客戶端崩潰",
    summary: "本漏洞存在於 Linux 核心的 NFSv4/pNFS 協定處理中，具體位於 `nfs4_decode_mp_ds_addr()` 函式。該函式負責解碼 GETDEVICEINFO 多路徑-DS 體中的 `r_netid` 和 `r_addr` 難解資料。當傳入的 on-wire opaque 資料長度為零時，`xdr_stream_decode_string_dup()` 會返回 NULL 指標，但現有程式碼僅檢查返回值是否小於零，未能捕捉到此情況。這導致後續的 `strrchr(NULL, '.')` 執行時發生核心空指針解引用（NULL pointer dereference），攻擊者可透過惡意或受損的元數據伺服器，攻擊任何掛載了 pNFS-flexfile 的客戶端，導致客戶端崩潰。修補建議應明確拒絕零長度輸入案例，使解碼器以 `-EBADMSG` 失敗，而非讓客戶端崩潰。",
    tags: ["Linux 核心", "NFSv4", "pNFS", "空指針解引用", "GETDEVICEINFO", "CVE-2026-53391"],
    title_en: "Linux Kernel pNFS Vulnerability: Zero-Length r_addr Causes Null Pointer Dereference, Potentially Crashing Clients",
    summary_en: "This vulnerability exists in the NFSv4/pNFS protocol handling within the Linux kernel, specifically located in the `nfs4_decode_mp_ds_addr()` function. This function is responsible for decoding the `r_netid` and `r_addr` opaque data within the GETDEVICEINFO multi-path-DS body. When the on-wire opaque data length passed is zero, `xdr_stream_decode_string_dup()` returns a NULL pointer, but the existing code only checks if the return value is less than zero, failing to capture this scenario. This leads to a core null pointer dereference when `strrchr(NULL, '.')` is executed. An attacker can exploit this by using a malicious or corrupted metadata server to attack any client mounting pNFS-flexfile, causing the client to crash. The recommended patch should explicitly reject zero-length input cases, causing the decoder to fail with `-EBADMSG` rather than allowing the client to crash.",
    tags_en: ["Linux Kernel", "NFSv4", "pNFS", "Null Pointer Dereference", "GETDEVICEINFO", "CVE-2026-53391"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53391", lang: "EN" }
    ]
  },
  {
    id: "20260719-031",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 NFSv4/flexfiles 漏洞修復：防止零檔案句柄版本計數導致的記憶體讀取錯誤",
    summary: "本漏洞位於 Linux 核心的 NFSv4/flexfiles 處理機制中。問題出在 `ff_layout_alloc_lseg()` 函數，該函數從 flexfiles 佈局體中解碼檔案句柄版本陣列的計數。原始程式碼僅檢查輸入是否為 NULL，但當計數為零時，會產生 `ZERO_SIZE_PTR`，並將其儲存到 `dss_info->fh_versions`。然而，後續的 flexfiles 路徑處理邏輯卻假設至少存在一個檔案句柄版本，導致潛在的記憶體讀取錯誤（null-ptr-deref）。修補措施是在分配記憶體之前，就拒絕 `fh_count` 等於零的惡意佈局。此修復與現有的 flexfiles GETDEVICEINFO 解析器中的零版本計數驗證邏輯保持一致。此漏洞的修復能有效防止因惡意或格式錯誤的 flexfiles 佈局導致的系統崩潰或資訊洩露。",
    tags: ["Linux 核心", "NFSv4", "flexfiles", "CVE-2026-53392", "記憶體安全", "Kernel"],
    title_en: "Linux Kernel NFSv4/flexfiles Vulnerability Fix: Preventing Memory Read Errors Caused by Zero File Handle Version Count",
    summary_en: "This vulnerability resides in the NFSv4/flexfiles handling mechanism within the Linux kernel. The issue is located in the `ff_layout_alloc_lseg()` function, which decodes the file handle version array count from the flexfiles layout. The original code only checks if the input is NULL, but when the count is zero, it generates a `ZERO_SIZE_PTR` and stores it in `dss_info->fh_versions`. However, the subsequent flexfiles path processing logic assumes that at least one file handle version exists, leading to a potential memory read error (null-ptr-deref). The patch rejects malicious layouts where `fh_count` equals zero before memory allocation. This fix is consistent with the existing zero version count validation logic in the flexfiles GETDEVICEINFO parser. This vulnerability fix effectively prevents system crashes or information leakage caused by malicious or malformed flexfiles layouts.",
    tags_en: ["Linux Kernel", "NFSv4", "flexfiles", "CVE-2026-53392", "Memory Safety", "Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53392", lang: "EN" }
    ]
  },
  {
    id: "20260719-032",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux NFSd 核心漏洞：寫回錯誤處理不當，可能導致客戶端誤判資料持久性",
    summary: "本漏洞存在於 Linux 核心的 NFSd 服務中，涉及 `nfsd_vfs_write()` 和 `nfsd_commit()` 函式。當 NFSd 偵測到延遲寫回（deferred writeback）錯誤時，兩處函式都呼叫了 `filemap_check_wb_err()` 進行檢查，但它們並未執行伺服器寫入驗證器（write verifier, `nn->writeverf`）的輪轉操作。這導致客戶端在持有 UNSTABLE 寫入資料時，即使資料寫回失敗，仍會收到未變動的驗證器，誤判資料已成功持久化（durable）。這直接違反了 UNSTABLE+COMMIT 的資料持久性合約（RFC 1813 §3.3.7, RFC 8881 §18.32）。修補建議是在 `filemap_check_wb_err()` 的所有錯誤發生點，加入呼叫 `commit_reset_write_verifier()`，以確保寫入驗證器在錯誤處理路徑中得到正確重置。",
    tags: ["Linux 核心", "NFSd", "寫回錯誤", "資料持久性", "UNSTABLE", "write verifier"],
    title_en: "Linux NFSd Core Vulnerability: Improper Writeback Error Handling May Cause Clients to Misjudge Data Durability",
    summary_en: "This vulnerability exists in the NFSd service within the Linux kernel, affecting the `nfsd_vfs_write()` and `nfsd_commit()` functions. When NFSd detects a deferred writeback error, both functions call `filemap_check_wb_err()` for checking, but they fail to perform the rotation of the server write verifier (`nn->writeverf`). This causes the client, while holding UNSTABLE write data, to receive an unchanged verifier even if the writeback fails, leading it to incorrectly assume the data has been successfully persisted (durable). This directly violates the data durability contract of UNSTABLE+COMMIT (RFC 1813 §3.3.7, RFC 8881 §18.32). The suggested fix is to add a call to `commit_reset_write_verifier()` at all error points within `filemap_check_wb_err()` to ensure the write verifier is correctly reset along the error handling path.",
    tags_en: ["Linux Kernel", "NFSd", "Writeback Error", "Data Durability", "UNSTABLE", "write verifier"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53393", lang: "EN" }
    ]
  },
  {
    id: "20260719-033",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 NFSv4.0 漏洞：避免在重試競態條件下洩漏預分配的 openowner",
    summary: "本漏洞存在於 Linux 核心的 NFSv4.0 服務中，屬於一個在處理未確認所有者（unconfirmed owner）時的競態條件（race condition）。當 `find_or_alloc_open_stateowner()` 函數遇到未確認所有者並呼叫 `release_openowner()` 將所有者設為 NULL 後，程式流程會跳過原本的保護檢查，直接執行 `alloc_stateowner(...)`。如果此時 `new` 已經在先前迭代中分配，其指標會被靜默覆寫，導致先前分配的資源（包括 slab object 和所有者名稱緩衝區）被洩漏。此漏洞需要兩個具有相同所有者字串的 NFSv4.0 OPEN 執行緒，並在重試迭代之間，由一個併發執行緒插入新的未確認所有者，才能觸發。修補建議是透過在 `oo = NULL` 之後加入 `goto retry` 指令，確保已分配的 `new` 資源在下一次迭代中被重複使用，而非被覆寫。",
    tags: ["Linux 核心", "NFSv4.0", "CVE-2026-53394", "競態條件", "資源洩漏", "Linux 核心"],
    title_en: "Linux Kernel NFSv4.0 Vulnerability: Potential Leakage of Pre-allocated openowner in Retry Race Condition",
    summary_en: "This vulnerability exists in the NFSv4.0 service within the Linux kernel and is a race condition that occurs when handling unconfirmed owners. When the `find_or_alloc_open_stateowner()` function encounters an unconfirmed owner and calls `release_openowner()` to set the owner to NULL, the program flow skips the original protective checks and directly executes `alloc_stateowner(...)`. If `new` was already allocated in a previous iteration, its pointer is silently overwritten, leading to the leakage of previously allocated resources (including slab objects and owner name buffers). Exploitation requires two NFSv4.0 OPEN threads with the same owner string, and a concurrent thread must insert a new unconfirmed owner between retry iterations to trigger the vulnerability. The suggested fix is to add a `goto retry` instruction after `oo = NULL` to ensure that the allocated `new` resource is reused in the next iteration rather than being overwritten.",
    tags_en: ["Linux Kernel", "NFSv4.0", "CVE-2026-53394", "Race Condition", "Resource Leakage", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53394", lang: "EN" }
    ]
  },
  {
    id: "20260719-034",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux NFSd 核心修補：修復 ACL 衝突保護機制，防止資源洩漏導致 Slab 耗盡",
    summary: "本修補針對 Linux 核心中的 NFSd 服務，解決了一個名為「dead ACL conflict guard」的漏洞。該漏洞發生在 `nfsd4_create()` 函數中，當客戶端在單一 CREATE fattr bitmap 中同時編碼了 FATTR4_WORD0_ACL 和 FATTR4_WORD2_POSIX_{DEFAULT,ACCESS}_ACL 時，`nfsd4_acl_to_attr()` 函數會覆寫 `attrs.na_pacl/na_dpacl`，但卻沒有釋放原始的 ACL 資源。這導致每次請求都會洩漏兩個 posix_acl 的 slab 物件。如果重複發送此類請求，將會造成無界限的 Slab 資源耗盡，影響系統穩定性。修補建議是修改衝突保護的檢查邏輯，使其檢查已竊取的 `attrs.na_dpacl/na_pacl` 值，而非檢查已被置為 NULL 的原始 `create->cr_dpacl/cr_pacl` 欄位，以恢復正確的資源管理。",
    tags: ["Linux 核心", "NFSd", "ACL", "Slab 耗盡", "CVE-2026-53395"],
    title_en: "Linux NFSd Core Patch: Fixes ACL Conflict Guard Mechanism to Prevent Resource Leakage and Slab Exhaustion",
    summary_en: "This patch addresses a vulnerability in the NFSd service within the Linux kernel, known as a \"dead ACL conflict guard.\" The vulnerability occurs in the `nfsd4_create()` function. When a client simultaneously encodes both `FATTR4_WORD0_ACL` and `FATTR4_WORD2_POSIX_{DEFAULT,ACCESS}_ACL` in a single CREATE fattr bitmap, the `nfsd4_acl_to_attr()` function overwrites `attrs.na_pacl/na_dpacl` but fails to release the original ACL resources. This causes two posix_acl slab objects to leak with every request. Repeatedly sending such requests can lead to unbounded Slab resource exhaustion, impacting system stability. The suggested fix is to modify the conflict protection check logic to check the stolen `attrs.na_dpacl/na_pacl` values, rather than checking the original `create->cr_dpacl/cr_pacl` fields which have been set to NULL, thereby restoring proper resource management.",
    tags_en: ["Linux Kernel", "NFSd", "ACL", "Slab Exhaustion", "CVE-2026-53395"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53395", lang: "EN" }
    ]
  },
  {
    id: "20260719-035",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux NFSd 核心修復：修補 ACL 處理的資訊洩漏與資源釋放漏洞",
    summary: "本修補針對 Linux 核心中的 NFSd 服務，解決了兩個與 POSIX 存取控制列表（ACL）處理相關的漏洞。第一個問題是 `nfsd4_acl_to_attr()` 函式回傳值被靜默忽略：當 NFSv4 到 POSIX ACL 轉換失敗時（例如遇到不受支援的 ACE 類型），伺服器會錯誤地創建檔案並回傳成功（NFS4_OK），這違反了 RFC 7530/8881 規範，要求伺服器應拒絕不受支援的屬性。第二個漏洞是資源洩漏（Resource Leak）：當 `start_creating()` 失敗後，程式會跳轉到 `out_write`，跳過了必要的 `nfsd_attrs_free()` 釋放函式，導致 POSIX ACL 記憶體分配無法釋放。攻擊者可透過重複觸發 `OPEN(CREATE)` 呼叫並使用無效檔名來持續觸發此記憶體洩漏。修補建議是捕獲 `nfsd4_acl_to_attr()` 的回傳值，並修改早期錯誤路徑，確保在發生錯誤時能正確執行資源釋放流程。",
    tags: ["Linux 核心", "NFSd", "ACL", "POSIX", "資源洩漏", "NFSv4"],
    title_en: "Linux NFSd Core Fix: Patching Information Leak and Resource Release Vulnerabilities in ACL Handling",
    summary_en: "This patch addresses two vulnerabilities in the NFSd service within the Linux kernel, both related to POSIX Access Control List (ACL) handling. The first issue involves the silent ignoring of return values from the `nfsd4_acl_to_attr()` function: when the conversion from NFSv4 to POSIX ACL fails (for example, encountering an unsupported ACE type), the server incorrectly creates a file and returns success (NFS4_OK). This violates RFC 7530/8881 specifications, which require the server to reject unsupported attributes. The second vulnerability is a Resource Leak: when `start_creating()` fails, the program jumps to `out_write`, skipping the necessary `nfsd_attrs_free()` release function. This results in unreleased POSIX ACL memory allocations. An attacker can continuously trigger this memory leak by repeatedly calling `OPEN(CREATE)` with invalid filenames. The suggested fix is to capture the return value of `nfsd4_acl_to_attr()` and modify the early error path to ensure that the resource release process is correctly executed upon error.",
    tags_en: ["Linux Kernel", "NFSd", "ACL", "POSIX", "Resource Leak", "NFSv4"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-53396", lang: "EN" }
    ]
  },
  {
    id: "20260719-036",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 File Explorer 搜尋功能將大幅升速，追平 Windows Search 體驗",
    summary: "本文討論了 Microsoft 針對 Windows 11 File Explorer 搜尋功能進行的重大性能升級。目前，File Explorer 的搜尋功能在「本機電腦」（This PC）範圍內，相較於 Windows Search，速度明顯較慢，甚至可能耗時數分鐘。Microsoft 確認，File Explorer 的檔案搜尋性能和相關性將會大幅提升，追平 Windows Search 的水準。Windows Search 本身已在 Insiders 頻道推出，並大幅改進了功能，例如取代了 MSN 等內容，改為顯示近期活動；並提升了搜尋的準確性，例如支援兩字搜尋和子字串匹配。File Explorer 的升級將繼承這些優化，預計將改善搜尋速度和相關性。此外，Microsoft 也持續修補 File Explorer 的其他性能問題，包括 Home 頁面、地址欄的可靠性，以及重建舊版屬性對話框等。這些功能預計將逐步透過 Insider Build 釋出，但具體時間點尚未公布。",
    tags: ["Windows 11", "File Explorer", "Windows Search", "性能優化", "Microsoft", "This PC"],
    title_en: "Windows 11 File Explorer Search Functionality to See Significant Speed Boost, Matching Windows Search Experience",
    summary_en: "This article discusses major performance upgrades Microsoft is implementing for the Windows 11 File Explorer search function. Currently, the search functionality within File Explorer, particularly when searching within \"This PC,\" is noticeably slower compared to Windows Search, sometimes taking several minutes. Microsoft has confirmed that the file search performance and relevance of File Explorer will be significantly enhanced to match the level of Windows Search. Windows Search itself has already been released on the Insiders channel and has undergone major functional improvements, such as replacing content like MSN with recent activity; and improving search accuracy, for example, by supporting two-character searches and substring matching. The File Explorer upgrade will inherit these optimizations, which are expected to improve both search speed and relevance. Furthermore, Microsoft is continuously patching other performance issues in File Explorer, including the Home page, address bar reliability, and rebuilding the old properties dialog box. These features are expected to be released gradually through Insider Builds, but a specific timeline has not been announced.",
    tags_en: ["Windows 11", "File Explorer", "Windows Search", "Performance Optimization", "Microsoft", "This PC"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/19/windows-11s-slowest-feature-is-about-to-get-dramatic-speed-improvements-and-its-file-explorer-search", lang: "EN" }
    ]
  },
  {
    id: "20260719-037",
    trackers: ["os"],
    category: "Windows",
    title: "微軟強制在 Outlook Classic 啟用 Copilot 功能，推動用戶轉向 AI 輔助寫作體驗",
    summary: "微軟透過管理員入口網站公告，宣布將在所有版本的 Outlook，包括 Outlook Classic、網頁版、行動版和 New Outlook，預設啟用基於 Copilot 的「撰寫電子郵件」功能。這項功能將在今年底開始於 Outlook Classic 推出，並預計讓用戶能夠直接在撰寫介面使用 Copilot 來精修、重寫或擴展電子郵件內容。雖然用戶可以手動選擇退出或停用此功能，但微軟的策略傾向於將 Copilot 打造為新的標準體驗。\n\n此外，微軟正積極推動 New Outlook 的採用，預計到 2026 年底，政府環境（如 GCC High 和 DoD）將開始收到此版本。雖然微軟目前不會強制取代 Outlook Classic，但新版 Outlook 預設仍為關閉狀態，需透過政策控制。文章指出，微軟正在將 Meeting Insights 替換為 Copilot 驅動的摘要和洞察功能，並修復了 New Outlook 在 Windows 11 上開啟郵件時的性能問題，使其速度接近 Outlook Classic。",
    tags: ["Microsoft 365", "Outlook", "Copilot", "New Outlook", "AI 輔助寫作", "Windows 11"],
    title_en: "Microsoft Mandates Copilot Feature in Outlook Classic, Driving Users Towards AI-Assisted Writing Experience",
    summary_en: "Microsoft announced via the administrator portal that it will enable Copilot-based \"Compose Email\" functionality by default across all versions of Outlook, including Outlook Classic, the web version, the mobile version, and New Outlook. This feature is scheduled to roll out in Outlook Classic by the end of this year, allowing users to use Copilot directly within the composition interface to refine, rewrite, or expand email content. Although users can manually opt out or disable this feature, Microsoft's strategy leans toward establishing Copilot as the new standard experience.\n\nFurthermore, Microsoft is actively promoting the adoption of New Outlook, which is expected to reach government environments (such as GCC High and DoD) by the end of 2026. While Microsoft is not currently forcing the replacement of Outlook Classic, the new Outlook remains disabled by default and requires policy control. The article notes that Microsoft is replacing Meeting Insights with Copilot-driven summary and insights functionality, and has fixed performance issues in New Outlook when opening emails on Windows 11, bringing its speed close to that of Outlook Classic.",
    tags_en: ["Microsoft 365", "Outlook", "Copilot", "New Outlook", "AI-Assisted Writing", "Windows 11"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/19/microsoft-to-force-enable-copilot-in-outlook-classic-even-though-it-wants-you-on-new-outlook", lang: "EN" }
    ]
  },
  {
    id: "20260719-038",
    trackers: ["os"],
    category: "Windows",
    title: "微軟發布 Windows 11 KB5121767 緊急更新，修復部分 Dell PC 關機、過熱與效能問題",
    summary: "微軟（Microsoft）發布了 Windows 11 KB5121767 緊急補丁，取代了原先的 2026 年 7 月累積更新 KB5101650。此更新旨在修復部分受影響的 Dell PC 在安裝 KB5101650 後所面臨的意外關機、效能不佳、過熱及電池耗盡等重大問題。問題根源在於 KB5101650 破壞了依賴 Intel 驅動程式的電源管理功能，特別是「Intel Innovation Platform Framework Processor Participant」驅動程式的整合。微軟官方建議此補丁僅適用於特定受影響的 Dell 機型（如 Dell Pro Max、Precision 系列等）。然而，文章指出，若用戶開啟 Windows Update 的「盡快取得最新更新」開關，即使未受影響的 PC 也可能自動下載並安裝此補丁。建議用戶若不確定是否需要此緊急補丁，應關閉該開關，並透過手動方式進行更新，以保持系統控制權。",
    tags: ["Windows 11", "KB5121767", "Dell", "Microsoft", "Windows Update", "Intel 驅動程式"],
    title_en: "Microsoft Releases Windows 11 KB5121767 Emergency Update to Fix Shutdown, Overheating, and Performance Issues on Some Dell PCs",
    summary_en: "Microsoft has released the Windows 11 KB5121767 emergency patch, replacing the previous July 2026 cumulative update KB5101650. This update aims to fix significant issues such as unexpected shutdowns, poor performance, overheating, and battery drain experienced on certain affected Dell PCs after installing KB5101650. The root cause is that KB5101650 broke the power management functionality that relies on Intel drivers, specifically the integration of the \"Intel Innovation Platform Framework Processor Participant\" driver. Microsoft officially recommends that this patch only applies to specific affected Dell models (such as Dell Pro Max, Precision series, etc.). However, the article points out that if users enable the \"Get the latest updates as soon as available\" switch in Windows Update, even unaffected PCs may automatically download and install this patch. Users are advised to disable this switch and perform manual updates if they are unsure whether this emergency patch is necessary, in order to maintain system control.",
    tags_en: ["Windows 11", "KB5121767", "Dell", "Microsoft", "Windows Update", "Intel 驅動程式"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/19/windows-11-kb5121767-released-to-fix-shutdowns-overheating-but-you-dont-need-it-unless-you-own-these-pcs", lang: "EN" }
    ]
  },
  {
    id: "20260719-039",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "關鍵 NGINX 堆緩衝區溢位漏洞 (CVE-2026-42533) 曝光，遠超 DoS 影響，建議立即升級",
    summary: "本漏洞 CVE-2026-42533 存在於 NGINX 的腳本引擎，允許遠端未經身份驗證的攻擊者透過精心構造的 HTTP 請求，觸發工作進程的堆緩衝區溢位。該漏洞的觸發條件是特定的配置模式：即使用基於正規表達式的 map，且其輸出變數在字串表達式中引用了先前正規表達式匹配的捕獲組。當此模式存在時，引擎的兩階段評估機制會被破壞，導致寫入階段使用攻擊者控制的尺寸，超過了測量階段分配的緩衝區，造成溢位。雖然 F5 評分顯示其可能導致服務拒絕 (DoS)，但研究人員指出，若 ASLR 被禁用或可繞過，該漏洞可能允許遠端程式碼執行。受影響版本範圍廣泛，從 0.9.6 到 1.31.2。修補建議是立即升級至 NGINX 1.30.4 或 1.31.3，或 NGINX Plus 37.0.3.1。若無法立即修補，可考慮將受影響的正規表達式 map 切換為命名捕獲，但研究人員警告此處仍可能存在第二個攻擊路徑。",
    tags: ["CVE-2026-42533", "NGINX", "堆緩衝區溢位", "遠端程式碼執行", "DoS", "正規表達式"],
    title_en: "Critical NGINX Stack Buffer Overflow Vulnerability (CVE-2026-42533) Exposed, Impact Exceeds DoS, Immediate Upgrade Recommended",
    summary_en: "This vulnerability, CVE-2026-42533, exists in the NGINX scripting engine and allows unauthenticated remote attackers to trigger a stack buffer overflow in the worker process via a specially crafted HTTP request. The vulnerability is triggered by a specific configuration pattern: using a regex-based map where the output variable references a previously matched capture group in a string expression. When this pattern exists, the engine's two-stage evaluation mechanism is broken, causing the write stage to use an attacker-controlled size that exceeds the buffer allocated during the measurement stage, leading to an overflow. Although F5 scoring indicates it may cause Denial of Service (DoS), researchers point out that if ASLR is disabled or bypassable, this vulnerability could allow for Remote Code Execution. The affected versions are widespread, ranging from 0.9.6 to 1.31.2. The recommended patch is to immediately upgrade to NGINX 1.30.4 or 1.31.3, or NGINX Plus 37.0.3.1. If immediate patching is not possible, consider switching the affected regex map to use named captures, but researchers warn that a second attack path may still exist here.",
    tags_en: ["CVE-2026-42533", "NGINX", "Stack Buffer Overflow", "Remote Code Execution", "DoS", "Regular Expression"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/critical-nginx-vulnerability-can-crash.html", lang: "EN" }
    ]
  },
  {
    id: "20260719-040",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "俄國國家資助駭客利用 ClickFix 假 CAPTCHA 誘騙目標執行惡意 PowerShell 指令",
    summary: "根據烏克蘭電腦緊急應變小組（CERT-UA）的警報，俄羅斯國家資助的駭客組織 UAC-0145（隸屬於 GRU 的 Sandworm 分支）正在進行一場大規模的網路攻擊。攻擊者利用「ClickFix」策略，在受感染的網站上設置虛假的 CAPTCHA 驗證機制，誘騙目標用戶在終端機執行惡意的 PowerShell 指令。這些指令可能用於下載並執行如 GHETTOVIBE 等惡意 VBS 檔案，或執行 SCOUTCURL 等腳本進行基本偵察。攻擊者還使用 SMARTAXE 等自定義工具，結合 EtherHiding 技術，動態修改網頁內容並注入 CAPTCHA。除了網頁攻擊外，駭客還透過偽裝成安全工具的 APK 檔案，經由通訊軟體發佈，植入名為 COWARDDUCK 的後門惡意軟體，可竊取聯絡人、指定擴充功能檔案、即時地理位置等資訊，並利用 Dropbox API 上傳資料。CERT-UA 指出，這種利用 ClickFix 的行為，標誌著攻擊手法從過去的惡意安裝程式或偽造防毒軟體分享，轉向更具社會工程學性質的攻擊。",
    tags: ["UAC-0145", "Sandworm", "ClickFix", "PowerShell", "CAPTCHA", "COWARDDUCK", "GRU"],
    title_en: "Russian State-Sponsored Hackers Use ClickFix Fake CAPTCHA to Trick Targets into Running Malicious PowerShell Commands",
    summary_en: "According to an alert from the Ukrainian Computer Emergency Response Team (CERT-UA), a Russian state-sponsored hacking group, UAC-0145 (a branch of GRU's Sandworm), is conducting a large-scale cyber attack. The attackers are utilizing the \"ClickFix\" strategy, setting up fake CAPTCHA verification mechanisms on compromised websites to trick target users into executing malicious PowerShell commands on their terminals. These commands may be used to download and execute malicious VBS files, such as GHETTOVIBE, or run scripts like SCOUTCURL for basic reconnaissance. The attackers also use custom tools like SMARTAXE, combined with EtherHiding technology, to dynamically modify webpage content and inject CAPTCHA. In addition to web page attacks, the hackers are distributing APK files disguised as security tools via communication software, implanting a backdoor malware named COWARDDUCK. This malware can steal contacts, specified extension files, real-time geographical location, and upload data using the Dropbox API. CERT-UA points out that this behavior, utilizing ClickFix, marks a shift in attack methodology from past malicious installers or fake antivirus sharing, towards a more social engineering-based attack.",
    tags_en: ["UAC-0145", "Sandworm", "ClickFix", "PowerShell", "CAPTCHA", "COWARDDUCK", "GRU"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/uac-0145-uses-clickfix-captchas-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260719-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安研究揭露：駭客利用 SonicWall SMA VPN 零日漏洞達成遠端任意指令執行",
    summary: "資安公司 Volexity 追蹤到一個代號 UTA0533 的威脅行為者，利用 SonicWall Secure Mobile Access (SMA) 1000 系列 VPN 設備的零日漏洞進行攻擊。攻擊者利用了 CVE-2026-15409 和 CVE-2026-15410 兩個漏洞，成功達成任意指令執行並接管設備。CVE-2026-15409 是一個預認證的 /wsproxy 繞過漏洞，允許未經身份驗證的外部請求建立到本機服務的 WebSocket 隧道。攻擊者進一步利用此路徑，透過 CouchDB 用戶權限讀取本機硬體識別資訊，最終達到對 SMA 控制服務的深度存取。攻擊鏈的 PoC 顯示，攻擊者可以透過 WebSocket 隧道，對本機服務發送 RPC 呼叫，實現檔案讀寫和任意程式碼執行。SonicWall 已針對這些漏洞發布了修補程式，建議所有用戶立即更新設備韌體，並特別注意限制外部對 VPN 服務的存取。",
    tags: ["SonicWall", "SMA VPN", "CVE-2026-15409", "CVE-2026-15410", "零日漏洞", "VPN", "遠端指令執行"],
    title_en: "Cybersecurity Research Reveals: Hackers Exploit SonicWall SMA VPN Zero-Day Vulnerability for Remote Arbitrary Command Execution",
    summary_en: "Cybersecurity firm Volexity tracked a threat actor, codenamed UTA0533, exploiting a zero-day vulnerability in SonicWall Secure Mobile Access (SMA) 1000 series VPN devices. The attackers utilized two vulnerabilities, CVE-2026-15409 and CVE-2026-15410, successfully achieving arbitrary command execution and device takeover. CVE-2026-15409 is a pre-authenticated /wsproxy bypass vulnerability, allowing unauthenticated external requests to establish a WebSocket tunnel to local services. The attackers further leveraged this path to read local hardware identification information using CouchDB user privileges, ultimately achieving deep access to the SMA control service. The attack chain PoC demonstrates that attackers can send RPC calls to local services via the WebSocket tunnel, enabling file read/write and arbitrary code execution. SonicWall has released patches for these vulnerabilities and advises all users to immediately update device firmware, paying special attention to restricting external access to VPN services.",
    tags_en: ["SonicWall", "SMA VPN", "CVE-2026-15409", "CVE-2026-15410", "Zero-day Vulnerability", "VPN", "Remote Command Execution"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/sonicwall-sma-zero-days-exploited.html", lang: "EN" }
    ]
  },
  {
    id: "20260719-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "駭客利用 ViPNet 更新機制攻擊俄羅斯政府機構：HelloNet 惡意活動分析",
    summary: "資安研究機構卡巴斯基（Kaspersky）揭露一場代號 HelloNet 的進階威脅活動，攻擊者利用俄羅斯資訊安全產品 ViPNet 的更新機制，針對包括政府、能源、交通、教育和物流等關鍵產業的俄羅斯組織。攻擊者將惡意 DLL 檔案（名為 HelloInjector）植入本地 ViPNet 更新系統目錄，透過合法的 itcsrvup64.exe 執行檔在系統啟動時進行側載（sideloading）。HelloInjector 作為第一階段載入器，會注入到 svchost.exe 進程，在 Windows 上取得高權限和持久性。隨後，惡意程式 HelloProxy 會在記憶體中運行，與 C2 伺服器通訊，下載後續模組，包括用於執行命令的後門 HelloExecutor、用於清除 ViPNet 日誌的 HelloCleaner，以及一個基於 Rust 的植入物 HelloBackdoor。研究機構建議，應對運行 ViPNet 軟體的系統進行徹底監控，特別關注通過 5003、5060（HelloProxy）和 443（HelloBackdoor）埠的流量。",
    tags: ["ViPNet", "HelloNet", "DLL Injection", "側載攻擊", "俄羅斯政府", "APT", "C2 通訊"],
    title_en: "Hackers Exploit ViPNet Update Mechanism to Attack Russian Government Agencies: HelloNet Malicious Activity Analysis",
    summary_en: "Cybersecurity research firm Kaspersky revealed an advanced threat campaign, codenamed HelloNet, in which attackers exploited the update mechanism of ViPNet, a Russian information security product. The campaign targeted Russian organizations across critical sectors including government, energy, transportation, education, and logistics. The attackers implanted a malicious DLL file (named HelloInjector) into the local ViPNet update system directory, performing sideloading via the legitimate itcsrvup64.exe executable during system startup. HelloInjector acts as a first-stage loader, injecting into the svchost.exe process to gain high privileges and persistence on Windows. Subsequently, the malicious program HelloProxy runs in memory, communicating with a C2 server to download subsequent modules, including the command execution backdoor HelloExecutor, the ViPNet log clearing tool HelloCleaner, and a Rust-based implant HelloBackdoor. The research firm recommends thoroughly monitoring systems running ViPNet software, paying special attention to traffic through ports 5003, 5060 (HelloProxy), and 443 (HelloBackdoor).",
    tags_en: ["ViPNet", "HelloNet", "DLL Injection", "Sideloading Attack", "Russian Government", "APT", "C2 Communication"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/hackers-abuse-vipnet-software-to-target-russian-govt-agencies", lang: "EN" }
    ]
  },
  {
    id: "20260719-043",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 公開測試版發布，Apple宣稱多達 30 個功能優化，大幅提升 iPhone 性能",
    summary: "Apple 已發布 iOS 27 公開測試版，宣稱透過多項系統優化，大幅提升 iPhone 的整體速度和可靠性。這些優化涵蓋了從相簿（Photos）的載入速度提升高達 70%，到 Safari 瀏覽器和郵件（Mail）的內容加載加速。此外，iOS 27 還提升了 AirDrop 傳輸速度（高達 80%）、應用程式啟動速度（高達 30%），以及 HomeKit 智慧家庭配件的配對與更新效率。這些性能提升的測試數據主要基於 iPhone 11 系列進行比較。文章指出，這些優化對於使用較舊型號的 iPhone 用戶尤其顯著。iOS 27 預計將於今年秋季正式發布。",
    tags: ["iOS 27", "Apple", "iPhone", "性能優化", "公開測試版", "AirDrop"],
    title_en: "iOS 27 Public Beta Released: Apple Claims Up to 30 Features Optimized, Significantly Boosting iPhone Performance",
    summary_en: "Apple has released the iOS 27 public beta, claiming that multiple system optimizations significantly enhance the overall speed and reliability of iPhones. These optimizations cover improvements ranging from up to 70% faster loading speeds in Photos, to accelerated content loading in Safari and Mail. Furthermore, iOS 27 boosts AirDrop transfer speeds (up to 80%), application launch speeds (up to 30%), and the pairing and update efficiency of HomeKit smart home accessories. The performance improvement test data is primarily based on comparisons using the iPhone 11 series. The article notes that these optimizations are particularly noticeable for users with older iPhone models. iOS 27 is expected to be officially released this autumn.",
    tags_en: ["iOS 27", "Apple", "iPhone", "Performance Optimization", "Public Beta", "AirDrop"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/19/ios-27-makes-your-iphone-faster-in-30-ways-heres-the-full-list", lang: "EN" }
    ]
  },
  {
    id: "20260719-044",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果取消 Mac Pro 系列：內部規劃曾包含搭載 Intel 晶片的機型",
    summary: "根據彭博社的報導，蘋果公司（Apple）已宣布停產 Mac Pro 系列，並確認未來不會推出該產品線。報導指出，蘋果最初的規劃是推出定位於「Ultra」晶片以上的「Extreme」晶片。在開發階段，蘋果曾規劃兩款代號為 J170 和 J190 的 Mac Pro 機型，其中一款令人意外的是搭載了 Intel 晶片，旨在應對特定使用場景。另一款則是預計搭載 M3 Ultra 的版本，原定於 2025 年初發布。儘管蘋果已將 Mac Pro 從網站移除，並引導購買者轉向 Mac Studio，但這顯示了蘋果在自研晶片時代，仍曾考慮搭載 Intel 晶片來滿足特定市場需求。目前，蘋果正將重點放在 Mac Studio 等產品線，並預計將推出搭載 M5 Ultra 晶片的更新機型。",
    tags: ["Apple", "Mac Pro", "Intel", "M3 Ultra", "Mac Studio", "Apple Silicon"],
    title_en: "Apple Discontinues Mac Pro Series: Internal Plans Included Models with Intel Chips",
    summary_en: "According to a report by Bloomberg, Apple has announced the discontinuation of the Mac Pro series and confirmed that it will not launch this product line in the future. The report indicates that Apple's initial plan was to introduce an 'Extreme' chip positioned above the 'Ultra' chip. During the development phase, Apple planned two Mac Pro models, codenamed J170 and J190. Surprisingly, one of these models was planned to feature an Intel chip, aimed at addressing specific use cases. The other model was expected to feature the M3 Ultra and was originally scheduled for release in early 2025. Although Apple has removed the Mac Pro from its website and directed buyers to Mac Studio, this suggests that even in the era of self-developed chips, Apple considered incorporating Intel chips to meet specific market demands. Currently, Apple is focusing on product lines like Mac Studio and is expected to release updated models featuring the M5 Ultra chip.",
    tags_en: ["Apple", "Mac Pro", "Intel", "M3 Ultra", "Mac Studio", "Apple Silicon"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/19/apples-scrapped-mac-pro-plans-reportedly-included-an-intel-model", lang: "EN" }
    ]
  },
  {
    id: "20260719-045",
    trackers: ["os"],
    category: "Android",
    title: "Android Auto 終於開始推出實時車速表功能，提升駕駛資訊顯示",
    summary: "Google 透過 Android Auto 正在逐步為 Google Maps 整合實時車速表功能。此功能讓駕駛者可以在車載介面上即時查看當前車速。雖然 Google Maps 早已支援了限速顯示，但車速表功能的推出時間較長。目前觀察到部分參與 Beta 測試的 Android Auto 用戶（例如一位位於加拿大的用戶，使用版本 26.29.02.946673643）已在 Reddit 上回報看到此功能。然而，此功能尚未廣泛發布，且文章指出這類 Android Auto 的新功能通常需要很長時間才能全面推送。這項更新旨在改善車載導航的實用性與資訊完整度，提升用戶的駕駛體驗。",
    tags: ["Android Auto", "Google Maps", "車速表", "Android 平台", "Google"],
    title_en: "Android Auto finally rolling out real-time speedometer feature to enhance driving information display",
    summary_en: "Google is gradually integrating a real-time speedometer function into Google Maps via Android Auto. This feature allows drivers to view their current speed directly on the in-car interface. Although Google Maps has long supported speed limit displays, the rollout of the speedometer function has been slow. Currently, some Android Auto users participating in Beta testing (for example, a user in Canada using version 26.29.02.946673643) have reported seeing this feature on Reddit. However, this feature has not been widely released, and the article notes that such new Android Auto features typically take a long time to be fully rolled out. This update aims to improve the practicality and completeness of in-car navigation, thereby enhancing the user's driving experience.",
    tags_en: ["Android Auto", "Google Maps", "Speedometer", "Android Platform", "Google"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/19/android-auto-finally-starts-rolling-out-a-speedometer-in-google-maps", lang: "EN" }
    ]
  },
  {
    id: "20260719-046",
    trackers: ["os"],
    category: "重點關注",
    title: "三星 Galaxy Z Fold 8 實機外洩：展示更窄、更小巧的全新外觀設計",
    summary: "本文根據社群媒體上分享的影片，展示了三星 Galaxy Z Fold 8 的實機樣貌。該設備採用了全新的、更寬的機身外形，並以紫色呈現。雖然影片未能展示設備展開後的完整狀態，但從外觀看來，其外螢幕尺寸據傳僅為 5.5 吋，體積看起來比許多現代智慧型手機更小巧。三星預計將於 7 月 22 日正式發表 Galaxy Z Fold 8，屆時還會同步推出「Ultra」版本和 Flip 8，以及新的智慧手錶。本次外洩的實機照片和規格，讓市場對其改進的摺疊手機外觀設計充滿期待。",
    tags: ["Samsung", "Galaxy Z Fold 8", "摺疊手機", "產品外洩", "新機發表"],
    title_en: "Samsung Galaxy Z Fold 8 physical unit leaked: Showcasing a new, narrower, and more compact design",
    summary_en: "Based on videos shared on social media, this article showcases the physical appearance of the Samsung Galaxy Z Fold 8. The device features a brand new, wider body shape and is presented in purple. Although the video did not show the device in its fully unfolded state, the exterior screen size is rumored to be only 5.5 inches, making it appear more compact than many modern smartphones. Samsung is scheduled to officially launch the Galaxy Z Fold 8 on July 22, at which time it will also launch the 'Ultra' version, the Flip 8, and a new smartwatch. The leaked photos and specifications have generated high anticipation in the market for its improved foldable phone design.",
    tags_en: ["Samsung", "Galaxy Z Fold 8", "Foldable Phone", "Product Leak", "New Product Launch"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/19/samsung-galaxy-z-fold-8-real-life-bts-leak", lang: "EN" }
    ]
  },
  {
    id: "20260719-047",
    trackers: ["os"],
    category: "重點關注",
    title: "無法撰寫資安新聞標題：原文內容為產品促銷資訊",
    summary: "本文為關於 Google Pixel Watch 官方錶帶的促銷資訊，內容主要列出在 Amazon 和 Best Buy 等零售商處，不同款式（如 Active Band、Sport Band、Gradient Stretch 等）的錶帶目前的折扣價格。文章沒有提及任何資安漏洞、產品更新、安全風險或技術細節，因此無法撰寫資安新聞摘要。建議讀者關注零售商的促銷活動，而非資安議題。",
    tags: ["Google Pixel Watch", "促銷活動", "電子產品", "零售資訊"],
    title_en: "Cannot Write Cybersecurity News Headline: Original Content is Product Promotional Information",
    summary_en: "This article contains promotional information for official Google Pixel Watch straps. The content primarily lists the current discounted prices for various styles (such as Active Band, Sport Band, Gradient Stretch, etc.) at retailers like Amazon and Best Buy. Since the article does not mention any security vulnerabilities, product updates, security risks, or technical details, it cannot be written as a cybersecurity news summary. Readers are advised to focus on retail promotions rather than cybersecurity issues.",
    tags_en: ["Google Pixel Watch", "Promotional Activity", "Consumer Electronics", "Retail Information"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/19/google-pixel-watch-bands-discounts-july-2026", lang: "EN" }
    ]
  },
  {
    id: "20260719-048",
    trackers: ["os"],
    category: "重點關注",
    title: "無資安資訊：文章內容為個人感懷，無可歸納為資安新聞",
    summary: "本文為一篇個人觀點分享，內容主要回顧了 OnePlus 品牌的歷史和個人使用經驗，表達了對該品牌衰落的感傷情緒。文章未提及任何資安漏洞、產品更新、安全風險或技術細節。因此，無法根據資安新聞的標準格式進行摘要和分類。",
    tags: ["OnePlus", "品牌衰退", "個人評論", "無資安資訊"],
    title_en: "Non-Cybersecurity Information: Article Content is Personal Reflection, Not Classifiable as Cybersecurity News",
    summary_en: "This article is a personal opinion piece, primarily reviewing the history and personal usage experience of the OnePlus brand, expressing sentimental feelings about the brand's decline. The article does not mention any security vulnerabilities, product updates, security risks, or technical details. Therefore, it cannot be summarized and categorized according to standard cybersecurity news formats.",
    tags_en: ["OnePlus", "Brand Decline", "Personal Review", "Non-Cybersecurity Information"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/19/oneplus-died-with-a-whimper-not-a-bang", lang: "EN" }
    ]
  },
  {
    id: "20260719-049",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果測試「Live Notes」AI系統：利用人工智慧記錄與轉錄Genius Bar服務對話",
    summary: "據報導，蘋果正在部分零售店試點一個名為「Live Notes」的新系統。該系統利用人工智慧工具來記錄和轉錄顧客在 Genius Bar 的諮詢對話，並將轉錄稿和摘要儲存到蘋果的內部 Genius Bar 系統。此舉的目標是讓員工能更專注於顧客服務，而非手動做筆記。Live Notes 系統要求員工和顧客雙方必須「選擇加入」（opt-in）才能記錄。然而，此測試引發了員工的擔憂，他們擔心這些記錄最終可能會被用於員工指導或績效考核。蘋果方面表示，記錄本身不會被儲存，且經理人不會收到轉錄稿，員工也可以在儲存前編輯轉錄稿和摘要。目前該系統仍為自願性計畫，蘋果尚未明確宣布是否會擴大應用或強制使用。",
    tags: ["Apple", "Live Notes", "AI", "Genius Bar", "隱私權", "工作流程"],
    title_en: "Apple Tests 'Live Notes' AI System: Using Artificial Intelligence to Record and Transcribe Genius Bar Conversations",
    summary_en: "According to reports, Apple is piloting a new system called 'Live Notes' in select retail stores. This system utilizes AI tools to record and transcribe customer consultations at the Genius Bar, storing the transcripts and summaries in Apple's internal Genius Bar system. The goal is to allow employees to focus more on customer service rather than taking manual notes. The Live Notes system requires both employees and customers to 'opt-in' for recording. However, this test has raised employee concerns that these records might eventually be used for employee coaching or performance evaluation. Apple stated that the recordings themselves will not be stored, and managers will not receive the transcripts, and employees can edit the transcripts and summaries before storage. Currently, the system remains a voluntary program, and Apple has not clearly announced whether it will expand or mandate its use.",
    tags_en: ["Apple", "Live Notes", "AI", "Genius Bar", "Privacy", "Workflow"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/19/apple-testing-live-notes-ai-system-to-record-genius-bar-sessions-report", lang: "EN" }
    ]
  },
  {
    id: "20260719-050",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple產品線全面漲價：從MacBook到Apple One服務，成本上漲影響用戶支出",
    summary: "本文報導Apple近期在多個產品線和服務上進行了價格上調，顯示出公司整體成本壓力增加。硬體方面，MacBook Neo、MacBook Air、iPad等產品均大幅漲價，Apple歸因於記憶體和儲存元件成本的激增，特別是AI資料中心對高頻寬記憶體需求的拉高。此外，iPhone在日本市場也出現了漲價。服務方面，AppleCare+的年費增加了，Apple Music和Apple One的捆綁服務也提高了費用，Apple方面解釋漲價原因包括升高的授權成本和匯率壓力。這些漲價現象表明，從硬體購買、延長保固到訂閱服務，Apple生態系統的整體成本正在持續攀升，對消費者支出構成壓力。",
    tags: ["Apple", "價格上漲", "AppleCare+", "Apple One", "硬體成本", "服務訂閱"],
    title_en: "Apple Raises Prices Across Product Lines: Rising Costs Impact User Spending",
    summary_en: "This article reports that Apple has recently increased prices across multiple product lines and services, indicating increasing overall corporate cost pressure. On the hardware side, products such as the MacBook Neo, MacBook Air, and iPad have seen significant price hikes. Apple attributes this to the surge in costs for memory and storage components, particularly driven by the demand for high-bandwidth memory from AI data centers. Furthermore, iPhones in the Japanese market have also seen price increases. On the service side, the annual fee for AppleCare+ has increased, and the bundled services of Apple Music and Apple One have also raised their costs. Apple explains the reasons for these increases to include higher licensing costs and foreign exchange pressure. These price increases suggest that the overall cost within the Apple ecosystem—from hardware purchases and extended warranties to subscription services—is continuously climbing, putting pressure on consumer spending.",
    tags_en: ["Apple", "Price Hike", "AppleCare+", "Apple One", "Hardware Costs", "Service Subscriptions"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/18/here-are-all-the-ways-apple-is-raising-prices-and-why", lang: "EN" }
    ]
  },
  {
    id: "20260719-051",
    trackers: ["os"],
    category: "重點關注",
    title: "MPEG-4 視覺專利權利終結：巴西最後一項專利 BRPI0109962B1 今日到期",
    summary: "MPEG-4 視覺編解碼標準的最後一項專利已於今日（2026年7月19日）到期。此專利為巴西的 BRPI0109962B1，涵蓋「從連續影像中儲存和處理影像資訊的過程」。這標誌著 MPEG-4 Part 2 相關的專利權利已全面終結。雖然美國和歐盟地區的專利已在近年到期，但巴西的這項專利是最後一塊拼圖。專利權的到期對使用 MPEG-4 格式的產業具有重大意義，預計將降低相關技術的授權成本，加速內容的開發與普及。目前原文未提供任何技術漏洞或修補建議，僅為專利狀態的公告。",
    tags: ["MPEG-4", "專利權", "BRPI0109962B1", "編解碼", "內容標準"],
    title_en: "MPEG-4 Visual Patent Expiration: Brazil's Final Patent BRPI0109962B1 Expires Today",
    summary_en: "The final patent for the MPEG-4 visual encoding/decoding standard expired today (July 19, 2026). This patent, BRPI0109962B1, covers the process of 'storing and processing image information from continuous images.' This marks the complete expiration of patents related to MPEG-4 Part 2. Although patents in the US and EU regions expired in recent years, this Brazilian patent was the last piece of the puzzle. The expiration of patent rights is highly significant for industries using the MPEG-4 format, and is expected to lower licensing costs for the related technology, accelerating content development and adoption. The original text does not provide any technical vulnerabilities or patch recommendations; it is merely an announcement regarding the patent status.",
    tags_en: ["MPEG-4", "Patent Rights", "BRPI0109962B1", "Encoding/Decoding", "Content Standard"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Last-MPEG-4-Patent-Expired", lang: "EN" }
    ]
  },
  {
    id: "20260719-052",
    trackers: ["os"],
    category: "重點關注",
    title: "FFmpeg 升級優化 AVX-512 指令，提升像素格式轉換速度 1.372 倍",
    summary: "多媒體函式庫 FFmpeg 的開發者 Niklas Haas 透過優化 libswscale 模組，利用 AVX-512 的 Vector Permute Byte (VPERMB) 指令，大幅提升了影片縮放與像素格式轉換的效率。此優化特別針對非通道對齊（non-lane-aligned）的場景，實現了完整的跨通道位元組排列（cross-lane byte permutation）。實務測試顯示，在支援 AVX-512 的處理器（如 AMD Zen 4 或 Intel Xeon 等）上，從 RGBA24 到 RGBA 的 1920x1080 轉換速度提升了 1.372 倍。這項更新主要為使用 FFmpeg 進行高效率影音處理的終端用戶帶來性能提升，是針對現代 Intel/AMD 處理器架構的效能優化。",
    tags: ["FFmpeg", "AVX-512", "libswscale", "VPERMB", "影音處理", "性能優化"],
    title_en: "FFmpeg Upgrade Optimizes AVX-512 Instructions, Boosting Pixel Format Conversion Speed by 1.372x",
    summary_en: "FFmpeg developer Niklas Haas significantly improved the efficiency of video scaling and pixel format conversion by optimizing the libswscale module, utilizing the Vector Permute Byte (VPERMB) instruction from AVX-512. This optimization specifically targets non-lane-aligned scenarios, achieving complete cross-lane byte permutation. Practical tests show that on processors supporting AVX-512 (such as AMD Zen 4 or Intel Xeon), the conversion speed from RGBA24 to RGBA for a 1920x1080 image increased by 1.372 times. This update primarily delivers performance enhancements to end-users utilizing FFmpeg for high-efficiency multimedia processing, representing a performance optimization tailored for modern Intel/AMD processor architectures.",
    tags_en: ["FFmpeg", "AVX-512", "libswscale", "VPERMB", "Multimedia Processing", "Performance Optimization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FFmpeg-AVX-512-1.372x", lang: "EN" }
    ]
  },
  {
    id: "20260719-053",
    trackers: ["os"],
    category: "重點關注",
    title: "AI 代理與外部服務連接風險分析：擴大攻擊面與潛在安全威脅",
    summary: "隨著人工智慧（AI）和機器學習（ML）技術的發展，AI 代理（agents）越來越常被連接到外部服務和系統。這雖然極大地擴展了 AI 的應用範圍，但也「爆炸性地擴大了風險半徑」（explodes the risk radius）。文章指出，當 AI 代理能夠與外部服務互動時，其潛在的攻擊面和風險範圍會急劇增加。這類連接點成為了新的攻擊向量，使得原本獨立的 AI 模型和應用程式，在與外部環境交互時，更容易遭受未預期的行為或惡意控制。實務上，開發者和資安人員必須高度關注 AI 代理的權限管理、輸入驗證，以及其與外部 API 的安全隔離機制，以防止攻擊者利用這些連接點執行惡意操作或洩露敏感資料。目前缺乏統一的標準和最佳實踐來管理這種複雜的系統互動，這對系統架構設計和安全審計提出了嚴峻挑戰。",
    tags: ["AI", "AI 代理", "機器學習", "安全風險", "攻擊面", "系統整合"],
    title_en: "AI Agents and External Service Connection Risks: Expanding Attack Surface and Potential Security Threats",
    summary_en: "With the advancement of Artificial Intelligence (AI) and Machine Learning (ML) technologies, AI agents are increasingly connected to external services and systems. While this greatly expands the application scope of AI, it also 'explodes the risk radius.' The article points out that when AI agents can interact with external services, their potential attack surface and risk scope increase dramatically. These connection points become new attack vectors, making it easier for originally independent AI models and applications to suffer from unexpected behavior or malicious control when interacting with external environments. In practice, developers and cybersecurity professionals must pay close attention to AI agent permission management, input validation, and secure isolation mechanisms for external APIs, to prevent attackers from executing malicious operations or leaking sensitive data through these connection points. Currently, there is a lack of unified standards and best practices for managing this complex system interaction, posing severe challenges to system architecture design and security auditing.",
    tags_en: ["AI", "AI Agents", "Machine Learning", "Security Risks", "Attack Surface", "System Integration"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/19/connecting-ai-agents-to-outside-services-explodes-the-risk-radius/5274640", lang: "EN" }
    ]
  },
  {
    id: "20260719-054",
    trackers: ["os"],
    category: "重點關注",
    title: "AI技術影響人認知：研究發現使用人工智慧會降低人們承認自己知識不足的可能性",
    summary: "本研究指出，當人們使用人工智慧（AI）工具時，即使其準確性有所下降，人們的自信心反而會提高。這代表AI的輔助使用可能導致使用者產生過度的信心，進而降低他們承認自己知識盲點或不了解某事物的意願。這是一個重要的社會心理學現象，對於依賴AI決策輔助的專業領域（如醫療、金融、工程）具有實務影響。建議使用者必須保持批判性思維，並將AI的輸出視為參考資料，而非絕對的真理，以避免「AI過度信任」帶來的決策風險。",
    tags: ["AI", "人工智慧", "認知偏差", "使用者心理學", "決策輔助"],
    title_en: "AI Technology Affects Human Cognition: Study Finds Using Artificial Intelligence Lowers the Likelihood of Admitting Knowledge Gaps",
    summary_en: "This study points out that when people use Artificial Intelligence (AI) tools, their confidence actually increases, even if the tool's accuracy decreases. This suggests that the auxiliary use of AI may lead users to develop excessive confidence, thereby reducing their willingness to admit knowledge gaps or lack of understanding. This is a significant social psychological phenomenon with practical implications for professional fields that rely on AI decision support (such as medicine, finance, and engineering). It is recommended that users maintain critical thinking and treat AI output as reference material, rather than absolute truth, to avoid decision risks stemming from 'AI over-reliance.'",
    tags_en: ["AI", "Artificial Intelligence", "Cognitive Bias", "User Psychology", "Decision Support"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/07/19/using-ai-makes-people-less-likely-to-admit-they-dont-know-something/5274567", lang: "EN" }
    ]
  },
  {
    id: "20260719-055",
    trackers: ["os"],
    category: "重點關注",
    title: "Windows 11 Secure Boot 2023 部署困境：多 OEM 設備面臨韌體與憑證更新的兼容性問題",
    summary: "本次事件聚焦於 Windows 11 導入 Secure Boot 2023 憑證的產業級部署挑戰。多位系統管理員在 Microsoft 舉辦的 OEM 研討會上，回報了大量無法解釋的憑證錯誤和修復失敗案例。受影響的設備涵蓋多個品牌（如 HP、ASUS、ASRock 等）的 PC 設備，核心問題包括：BitLocker 在強制安裝憑證後進入恢復循環（Recovery Loop）；部分設備無法成功更新 KEK（Key Exchange Key）；以及設備的 Secure Boot 狀態報告為 Unknown。例如，在 HP EliteBook 640 G10 上，即使使用最新 BIOS，強制透過註冊表鍵值安裝憑證也會觸發 BitLocker 恢復模式，且回滾 BIOS 雖可解決，但實務操作困難。此外，部分 OEM 甚至悄悄移除支援舊型號的設備清單，導致許多 IT 團隊在硬體和韌體層面面臨巨大的兼容性困境。這顯示 Secure Boot 憑證的部署，已從單純的軟體更新，演變為跨越硬體、韌體、加密機制（如 BitLocker）的複雜產業標準問題，建議 IT 團隊應密切關注各 OEM 的後續 BIOS 與韌體修補，並做好設備批次更新的風險評估。",
    tags: ["Windows 11", "Secure Boot", "OEM", "BitLocker", "韌體", "KEK", "憑證"],
    title_en: "Windows 11 Secure Boot 2023 Deployment Challenges: Compatibility Issues with Firmware and Certificates Across Multiple OEM Devices",
    summary_en: "This incident focuses on the industry-level deployment challenges of integrating the Windows 11 Secure Boot 2023 certificate. Multiple system administrators reported numerous unexplained certificate errors and repair failures during a Microsoft-hosted OEM seminar. Affected devices cover PC equipment from various brands (such as HP, ASUS, ASRock, etc.). The core issues include: BitLocker entering a recovery loop after forced certificate installation; some devices failing to successfully update the KEK (Key Exchange Key); and the device's Secure Boot status reporting as Unknown. For example, on the HP EliteBook 640 G10, even with the latest BIOS, forcing certificate installation via registry keys triggers BitLocker recovery mode, and while rolling back the BIOS resolves the issue, this is practically difficult. Furthermore, some OEMs have quietly removed support for older model lists, causing many IT teams to face significant compatibility difficulties at both the hardware and firmware levels. This demonstrates that the deployment of Secure Boot certificates has evolved from a simple software update into a complex industry standard issue spanning hardware, firmware, and encryption mechanisms (such as BitLocker). It is recommended that IT teams closely monitor subsequent BIOS and firmware patches from various OEMs and conduct risk assessments for batch device updates.",
    tags_en: ["Windows 11", "Secure Boot", "OEM", "BitLocker", "Firmware", "KEK", "Certificate"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/19/windows-11-secure-boot-is-a-messy-ride-on-older-pcs-and-even-microsoft-cant-fix-it", lang: "EN" }
    ]
  }
];
