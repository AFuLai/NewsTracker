// data-20260621.js — 2026-06-21
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-06-21"] = [
  {
    id: "20260621-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6360-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 安全公告 DSA-6360-1 針對 OpenSSH 服務發布了安全修補。此漏洞允許攻擊者在特定條件下繞過正常的認證機制，可能導致未經授權的遠端存取。該漏洞的修補旨在強化 OpenSSH 的認證流程，防止攻擊者利用其弱點進行越權操作。受影響的系統為運行 Debian 作業系統並使用 OpenSSH 服務的用戶。建議所有 Debian 用戶立即更新系統至包含此修補的最新版本，以確保 SSH 連線的安全性。本次修補屬於核心元件層面的安全強化，對於維護系統的遠端存取安全至關重要。",
    tags: ["Debian", "OpenSSH", "DSA-6360-1", "SSH", "認證繞過", "Linux 核心元件"],
    title_en: "Debian Releases DSA-6360-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6360-1 has released a security patch for the OpenSSH service. This vulnerability allows attackers, under specific conditions, to bypass normal authentication mechanisms, potentially leading to unauthorized remote access. The patch aims to strengthen OpenSSH's authentication process, preventing attackers from exploiting weaknesses for privilege escalation. Affected systems are users running the Debian operating system and utilizing the OpenSSH service. All Debian users are advised to immediately update their systems to the latest version containing this patch to ensure the security of SSH connections. This patch constitutes a core component-level security enhancement, which is crucial for maintaining the security of remote access to the system.",
    tags_en: ["Debian", "OpenSSH", "DSA-6360-1", "SSH", "Authentication Bypass", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00271.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6359-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 安全公告 DSA-6359-1 針對 OpenSSH 服務發布了安全修補。此漏洞可能允許攻擊者在特定條件下繞過正常的認證機制，從而獲得未經授權的存取權限。修補內容主要集中在 OpenSSH 的認證流程，旨在加強其安全性。受影響的系統為使用 Debian 發行版並運行 OpenSSH 服務的用戶。建議所有使用 Debian 系統的用戶，應立即透過系統更新機制（如 `apt update` 和 `apt upgrade`）更新 OpenSSH 套件至修補版本，以防止潛在的認證繞過攻擊。由於原文未提供具體的 CVSS 分數、受影響版本範圍或外洩數據數量，請以 Debian 官方公告為準，並將修補作為高優先級的資安任務執行。",
    tags: ["Debian", "OpenSSH", "DSA-6359-1", "認證繞過", "Linux 核心元件", "資安公告"],
    title_en: "Debian Releases DSA-6359-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6359-1 has released a security patch for the OpenSSH service. This vulnerability could potentially allow an attacker to bypass normal authentication mechanisms under specific conditions, thereby gaining unauthorized access. The patch primarily focuses on the OpenSSH authentication process, aiming to enhance its security. Affected systems are users running the OpenSSH service on Debian distributions. All users of Debian systems are advised to immediately update the OpenSSH package to the patched version using the system update mechanism (such as `apt update` and `apt upgrade`) to prevent potential authentication bypass attacks. Since the original text did not provide specific CVSS scores, affected version ranges, or data leakage quantities, users should refer to the official Debian announcement and treat the patch as a high-priority security task.",
    tags_en: ["Debian", "OpenSSH", "DSA-6359-1", "Authentication Bypass", "Linux Kernel Component", "Security Advisory"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00270.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6358：修補 OpenSSH 服務中的認證繞過漏洞",
    summary: "Debian 發布了安全公告 DSA-6358，修補了 OpenSSH 服務中的一個認證繞過（Authentication Bypass）漏洞。此漏洞可能允許攻擊者在未經授權的情況下，透過特定的方式繞過正常的認證機制，進而存取受影響的系統。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但這類核心服務的漏洞具有極高的實務風險，可能導致系統的機密性與完整性受損。建議所有使用 Debian 系統並運行 OpenSSH 服務的用戶，應立即透過系統的更新機制（如 `apt update` 和 `apt upgrade`）安裝最新的安全修補程式，以確保服務的安全性。本修補旨在強化 OpenSSH 的認證流程，防止未經授權的遠端存取。",
    tags: ["Debian", "OpenSSH", "DSA-6358", "認證繞過", "Linux 核心", "安全更新"],
    title_en: "Debian Releases DSA-6358: Patching Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6358, patching an Authentication Bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to bypass normal authentication mechanisms through specific methods, thereby accessing the affected system without authorization. Although the original text does not provide specific CVSS scores or affected version ranges, vulnerabilities in core services carry extremely high practical risk, potentially compromising the confidentiality and integrity of the system. All users running Debian systems and utilizing the OpenSSH service are advised to immediately install the latest security patch via the system's update mechanism (such as `apt update` and `apt upgrade`) to ensure service security. This patch aims to strengthen OpenSSH's authentication process and prevent unauthorized remote access.",
    tags_en: ["Debian", "OpenSSH", "DSA-6358", "Authentication Bypass", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00269.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6357：修補 OpenSSH 服務中的憑證驗證漏洞",
    summary: "Debian 安全公告 DSA-6357 修補了 OpenSSH 服務中的一個憑證驗證漏洞。此漏洞可能允許攻擊者在特定條件下，透過偽造或劫持憑證，執行未經授權的遠端命令執行（RCE）。該漏洞的影響範圍主要集中在使用受影響 OpenSSH 版本的系統。修補建議是立即升級 OpenSSH 服務至 Debian 提供的安全版本。由於原文未提供 CVSS 分數或具體影響台數，建議使用者應將此安全更新視為高優先級的修補，以防止潛在的遠端系統控制風險。",
    tags: ["Debian", "OpenSSH", "DSA-6357", "憑證驗證", "RCE", "Linux 核心"],
    title_en: "Debian Releases DSA-6357: Patching Certificate Authentication Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6357 patches a certificate authentication vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to execute unauthorized Remote Code Execution (RCE) by forging or hijacking certificates. The impact of this vulnerability is primarily limited to systems running the affected OpenSSH versions. The recommended fix is to immediately upgrade the OpenSSH service to the secure version provided by Debian. Since the original text did not provide a CVSS score or specific impact count, users are advised to treat this security update as a high-priority patch to prevent potential remote system control risks.",
    tags_en: ["Debian", "OpenSSH", "DSA-6357", "Certificate Authentication", "RCE", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00268.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6356：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 透過 DSA-6356 發布安全公告，修補了 OpenSSH 服務中一個潛在的認證繞過漏洞。此漏洞可能允許攻擊者在特定條件下，無需正確憑證即可執行遠端命令。受影響的元件為 OpenSSH，主要影響使用 Debian 系統的用戶。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但此類漏洞通常屬於高風險，可能導致系統被未授權控制。修補建議是立即升級 OpenSSH 服務至 Debian 提供的修補版本。用戶應確保系統及 OpenSSH 服務保持最新狀態，以防範遠端未經授權的存取和執行惡意指令。",
    tags: ["Debian", "OpenSSH", "DSA-6356", "認證繞過", "Linux 核心", "安全公告"],
    title_en: "Debian Releases DSA-6356: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued a security advisory via DSA-6356, patching a potential authentication bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote commands without proper credentials under specific conditions. The affected component is OpenSSH, primarily impacting users of Debian systems. Although the original text does not provide specific CVSS scores or affected version ranges, such vulnerabilities are typically considered high risk, potentially leading to unauthorized system control. The recommended remediation is to immediately upgrade the OpenSSH service to the patched version provided by Debian. Users should ensure their systems and OpenSSH services are kept up-to-date to prevent unauthorized remote access and the execution of malicious commands.",
    tags_en: ["Debian", "OpenSSH", "DSA-6356", "Authentication Bypass", "Linux Kernel", "Security Advisory"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00267.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6355-1：修補 OpenSSH 服務中的潛在認證繞過漏洞",
    summary: "Debian 發布了安全公告 DSA-6355-1，修補了 OpenSSH 服務中一個潛在的認證繞過（Authentication Bypass）漏洞。此漏洞可能允許攻擊者在特定條件下，無需正確憑證即可執行遠端命令或建立會話。受影響的產品為使用 OpenSSH 服務的 Debian 系統。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類漏洞通常屬於高風險，可能導致系統被未經授權的遠端存取。修補建議是立即更新系統至包含 DSA-6355-1 修補的 Debian 版本。建議所有系統管理員應定期檢查 OpenSSH 的版本與安全更新，以確保系統的遠端存取服務是安全的。",
    tags: ["Debian", "OpenSSH", "DSA-6355-1", "認證繞過", "Linux 核心", "安全更新"],
    title_en: "Debian Releases DSA-6355-1: Patching Potential Authentication Bypass Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6355-1, patching a potential Authentication Bypass vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to execute remote commands or establish a session without proper credentials. The affected product is Debian systems utilizing the OpenSSH service. Although the original text does not provide a specific CVSS score or impact scope, such vulnerabilities are typically considered high risk, potentially leading to unauthorized remote access to the system. The recommended remediation is to immediately update the system to a Debian version containing the DSA-6355-1 patch. System administrators are advised to regularly check the OpenSSH version and security updates to ensure the system's remote access services are secure.",
    tags_en: ["Debian", "OpenSSH", "DSA-6355-1", "Authentication Bypass", "Linux Kernel", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00266.html", lang: "EN" }
    ]
  },
  {
    id: "20260621-007",
    trackers: ["os"],
    category: "Linux",
    title: "ASUS ROG Strix G16 筆電啟動延遲問題：Linux 核心修補程式與韌體修復討論",
    summary: "本篇報導指出，在現代 ASUS ROG Strix G16 G614 筆電上，用戶遇到了異常的啟動延遲問題，導致開機時間超過 30 秒。最初的分析認為問題源於 ASUS 韌體在開機時使觸控板的某個 GPIO 線路保持低電位（ActiveBoth GPIO line asserted），導致 Linux 核心在處理初始狀態時發生同步阻塞（synchronous call blocks），造成啟動停滯。雖然初期修補程式（DMI quirk patch）的討論曾將問題歸因於觸控板，但後續的 ACPI 傾印分析顯示，真正的根源可能與圖形晶片（graphics）觸發的 GPIO 問題有關。目前，一個 DMI quirk 補丁已在核心郵件清單上待審，旨在繞過此韌體行為，讓 Linux 核心的啟動時間恢復正常。然而，文章強調，最終解決方案仍需 ASUS 或 AMD 提供正確的韌體修復，而此核心補丁預計會上游化，以供未更新 BIOS 的用戶使用。",
    tags: ["ASUS", "ROG Strix G16", "Linux 核心", "DMI quirk", "GPIO", "韌體"],
    title_en: "ASUS ROG Strix G16 Laptop Boot Delay Issue: Discussion on Linux Kernel Patch and Firmware Fix",
    summary_en: "This report points out that users of the modern ASUS ROG Strix G16 G614 laptop are encountering an abnormal boot delay issue, causing the startup time to exceed 30 seconds. Initial analysis suggested the problem stemmed from the ASUS firmware keeping a specific GPIO line of the touchpad at a low potential (ActiveBoth GPIO line asserted) during boot, which caused the Linux kernel to experience synchronous call blocks while processing the initial state, leading to boot stagnation. Although initial patch discussions (DMI quirk patch) attributed the issue to the touchpad, subsequent ACPI dump analysis suggests the true root cause may be related to a GPIO issue triggered by the graphics chip. Currently, a DMI quirk patch is pending review on the kernel mailing list, aiming to bypass this firmware behavior and restore normal Linux kernel boot times. However, the article emphasizes that the final solution still requires a proper firmware fix from ASUS or AMD, and this kernel patch is expected to be upstreamed for use by users who have not updated their BIOS.",
    tags_en: ["ASUS", "ROG Strix G16", "Linux Kernel", "DMI quirk", "GPIO", "Firmware"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Gemini-ASUS-Laptop-Boot-Time", lang: "EN" }
    ]
  },
  {
    id: "20260621-008",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA 在 Linux 7.2 核心中為「Blackwell-Next」GPU 準備 CXL 支援",
    summary: "本篇報導指出 NVIDIA 在 Linux 7.2 核心的 VFIO 子系統補丁中，首次提及了對「Blackwell-Next」GPU 的支援準備。具體而言，該補丁更新了 NVGrace-GPU VFIO 驅動程式，用於處理 Compute Express Link (CXL) 的變化。由於 Blackwell-Next 與現有的 NVIDIA Blackwell GPU 存在差異，該補丁特別針對 CXL 路徑周圍的 Designated Vendor Specific Extended Capability (DVSEC) 進行了準備。雖然 NVIDIA 已宣布 Rubin GPU 將取代 Blackwell 系列，但文章指出「Blackwell-Next」的確切指代（是否為 Blackwell Ultra 或 Rubin）尚不確定。這顯示 NVIDIA 正在積極確保其下一代硬體產品在 Linux 系統上的良好支援，且相關工作已從 Linux 7.2 版本開始進行。",
    tags: ["NVIDIA", "Blackwell-Next", "Linux 7.2", "VFIO", "CXL", "GPU"],
    title_en: "NVIDIA Prepares CXL Support for 'Blackwell-Next' GPU in Linux 7.2 Kernel",
    summary_en: "This report points out that NVIDIA has first mentioned support preparation for 'Blackwell-Next' GPUs within the VFIO subsystem patch of the Linux 7.2 kernel. Specifically, the patch updates the NVGrace-GPU VFIO driver to handle changes related to Compute Express Link (CXL). Because Blackwell-Next differs from the existing NVIDIA Blackwell GPU, the patch specifically prepares for Designated Vendor Specific Extended Capability (DVSEC) around the CXL path. Although NVIDIA has announced that the Rubin GPU will replace the Blackwell series, the article notes that the exact designation of 'Blackwell-Next' (whether it is Blackwell Ultra or Rubin) remains uncertain. This demonstrates that NVIDIA is actively ensuring good support for its next-generation hardware products on Linux systems, with related work commencing as early as the Linux 7.2 version.",
    tags_en: ["NVIDIA", "Blackwell-Next", "Linux 7.2", "VFIO", "CXL", "GPU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/NVIDIA-Blackwell-Next-VFIO", lang: "EN" }
    ]
  },
  {
    id: "20260621-009",
    trackers: ["os"],
    category: "Linux",
    title: "Linux KUnit 測試框架支援 JUnit 輸出，提升 CI/CD 系統的互通性",
    summary: "Linux 核心的 KUnit 是一個用於核心單元測試的框架，其設計靈感部分來自於 Java 的 JUnit。本次更新的重點是 KUnit 終於在 Linux 7.2 核心版本中加入了對 JUnit XML 格式的輸出支援。此功能透過使用 `--junit` 參數啟用，作為 JSON 等現有輸出格式的替代方案。此改進的主要目的是為了提高 KUnit 與 Jenkins 等依賴標準化格式的持續整合 (CI) 系統之間的互操作性。雖然 KUnit 概念提出已近十年，但直到 Linux 7.2 版本才實現了此功能，為開發者提供了更標準化的測試報告格式，有助於自動化測試流程的整合與維護。",
    tags: ["Linux 核心", "KUnit", "JUnit", "CI/CD", "單元測試", "Linux 7.2"],
    title_en: "Linux KUnit Testing Framework Supports JUnit Output, Enhancing CI/CD System Interoperability",
    summary_en: "KUnit, a framework for kernel unit testing within the Linux kernel, draws some design inspiration from Java's JUnit. The focus of this update is that KUnit has finally added support for JUnit XML format output in the Linux 7.2 kernel version. This feature is enabled using the `--junit` parameter, serving as an alternative to existing output formats like JSON. The primary goal of this improvement is to enhance the interoperability between KUnit and Continuous Integration (CI) systems, such as Jenkins, which rely on standardized formats. Although the concept of KUnit has been around for nearly ten years, this functionality was only realized in the Linux 7.2 version, providing developers with a more standardized test report format that aids in the integration and maintenance of automated testing workflows.",
    tags_en: ["Linux Kernel", "KUnit", "JUnit", "CI/CD", "Unit Testing", "Linux 7.2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-KUnit-JUnit", lang: "EN" }
    ]
  },
  {
    id: "20260621-010",
    trackers: ["os"],
    category: "Linux",
    title: "Broadcom 為 VMware 虛擬化開發零拷區塊共享驅動，提升 Linux 虛擬機效能",
    summary: "Broadcom 工程師 Rishi Chhibber 在 Linux 核心郵件清單上提交了 `vmw_zerocopy_driver` 補丁。此驅動旨在實現虛擬機（VM）的用戶空間應用程式與 VMware hypervisor 之間的零拷區塊記憶體緩衝區共享。透過使用 VMCI datagram 介面，該機制可以避免在訪客 VM 和 hypervisor 之間進行中間資料複製，預期能顯著提升系統的效率和效能。雖然目前關於此零拷共享的詳細規劃仍不完整，但開發者應留意，過去 Linux 核心中其他零拷共享功能也曾引發過多種安全問題。目前可透過啟用 `VMW_ZC` Kconfig 選項來查看此驅動的補丁。",
    tags: ["Broadcom", "VMware", "Linux 核心", "vmw_zerocopy_driver", "零拷", "虛擬化"],
    title_en: "Broadcom Develops Zero-Copy Block Sharing Driver for VMware Virtualization, Enhancing Linux VM Performance",
    summary_en: "Broadcom engineer Rishi Chhibber submitted the `vmw_zerocopy_driver` patch to the Linux kernel mailing list. This driver aims to achieve zero-copy block memory buffer sharing between user-space applications in a virtual machine (VM) and the VMware hypervisor. By utilizing the VMCI datagram interface, this mechanism can avoid intermediate data copying between the guest VM and the hypervisor, which is expected to significantly improve system efficiency and performance. Although the detailed planning for this zero-copy sharing is currently incomplete, developers should note that other zero-copy sharing features in the Linux kernel have previously triggered various security issues. This driver's patch can currently be viewed by enabling the `VMW_ZC` Kconfig option.",
    tags_en: ["Broadcom", "VMware", "Linux Kernel", "vmw_zerocopy_driver", "Zero-Copy", "Virtualization"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/VMware-Zero-Copy-Sharing-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260621-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：ksmbd 緩慢路徑綁定會話查找邏輯修正，強化連線安全性",
    summary: "本修補針對 Linux 核心中的 ksmbd 服務，修正了其在處理緩慢路徑（slowpath）時，對綁定會話（bound sessions）的查找邏輯。原設計中，當 `SESSION_SETUP` 設置 `conn->binding = true` 後，該標誌會持續保持，導致全局會話查找函數 `ksmbd_session_lookup_all()` 能夠找到未正確加入 `conn->sessions` 的會話。修補後的邏輯要求，透過檢查返回的會話是否在當前連線的通道陣列（`sess->ksmbd_chann_list`）中註冊，確保只有確實綁定到該會話的連線才能透過全局表查找。此改動嚴格限制了全局查找的範圍，防止未綁定連線誤觸或存取到不應可達的會話。修補旨在維持非綁定連線的快速路徑行為，同時大幅提升會話查找的嚴謹性和安全性。建議系統管理員應更新至修補後的 Linux 核心版本以修復此潛在的邏輯漏洞。",
    tags: ["Linux 核心", "ksmbd", "會話管理", "安全修補", "CVE-2026-52911"],
    title_en: "Linux Kernel Patch: ksmbd Slowpath Binding Session Lookup Logic Fixed, Enhancing Connection Security",
    summary_en: "This patch addresses the ksmbd service within the Linux kernel, correcting its logic for looking up bound sessions when handling slowpaths. In the original design, once the `SESSION_SETUP` set `conn->binding = true`, this flag remained active, allowing the global session lookup function `ksmbd_session_lookup_all()` to find sessions that were not correctly added to `conn->sessions`. The patched logic now requires checking if the returned session is registered in the current connection's channel array (`sess->ksmbd_chann_list`), ensuring that only connections genuinely bound to that session can be found via global lookup. This change strictly limits the scope of global lookups, preventing unbound connections from mistakenly triggering or accessing inaccessible sessions. The patch aims to maintain the fastpath behavior for non-bound connections while significantly enhancing the rigor and security of session lookups. System administrators are advised to update to the patched Linux kernel version to fix this potential logic vulnerability.",
    tags_en: ["Linux Kernel", "ksmbd", "Session Management", "Security Patch", "CVE-2026-52911"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-52911", lang: "EN" }
    ]
  },
  {
    id: "20260621-012",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布強制自動安裝 Copilot：Microsoft 365 業務版用戶需留意新 AI 功能推廣",
    summary: "微軟（Microsoft）確認將在 2026 年 6 月起，對符合資格的 Windows PC，自動為安裝了 Microsoft 365 桌面應用程式的設備推送 Microsoft 365 Copilot 應用程式。該功能預計在 6 月中旬至 7 月中旬間滾動部署，且預設為啟用狀態，使用者無需手動操作。這項變更旨在簡化 Copilot 的使用，確保用戶能輕鬆接觸生產力增強功能。受影響的設備為具備 Microsoft 365 桌面應用程式的 Windows PC。雖然微軟提供多種管理控制項（如 M365 Apps 管理中心、Office 隱私設定），但文章指出，若要完全移除 Copilot，僅透過登錄檔修改或簡單的選項關閉可能不足。建議用戶若不希望使用此功能，應透過管理員控制台或檢查應用程式的「選項」進行個別關閉，或考慮回歸不含 Copilot 的經典訂閱方案。",
    tags: ["Microsoft 365", "Copilot", "Windows 11", "Microsoft 365 Apps", "AI 應用", "自動安裝"],
    title_en: "Microsoft Announces Mandatory Copilot Auto-Installation: Microsoft 365 Business Users Should Note New AI Feature Rollout",
    summary_en: "Microsoft has confirmed that starting in June 2026, eligible Windows PCs running the Microsoft 365 desktop application will automatically receive the Microsoft 365 Copilot application. This feature is expected to roll out between mid-June and mid-July and will be enabled by default, requiring no manual user action. This change aims to simplify Copilot usage and ensure users have easy access to productivity enhancements. Affected devices are Windows PCs equipped with the Microsoft 365 desktop application. Although Microsoft provides various management controls (such as the M365 Apps admin center and Office privacy settings), the article notes that simply modifying the registry or using simple option toggles may be insufficient to completely remove Copilot. Users who do not wish to use this feature are advised to disable it individually through the administrator control panel or by checking the application's 'Options,' or to consider reverting to a classic subscription plan that does not include Copilot.",
    tags_en: ["Microsoft 365", "Copilot", "Windows 11", "Microsoft 365 Apps", "AI Application", "Automatic Installation"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/22/microsoft-says-itll-force-install-microsoft-365-copilot-on-windows-11-with-ms-365-business-in-the-next-30-days", lang: "EN" }
    ]
  },
  {
    id: "20260621-013",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 測試版新增隱藏功能：可完全移除網頁搜尋結果，提升本地搜尋速度",
    summary: "本報導深入探討了 Windows 11 Insider Experimental build 26300.8697（搭載 26H2 版本）中一個重要的隱藏功能：使用者可以獨立關閉「網頁搜尋結果」和「Microsoft Store 建議」的選項。此功能允許 Windows Search 專注於本地檔案和系統設定的索引，大幅提升搜尋速度與純淨度。在啟用此功能後，搜尋「PDF」等本地檔案時，系統會直接顯示最佳匹配的本地文件資訊，而非以 Bing 網頁結果作為主要亮點。此改動的實務影響是讓 Windows Search 的體驗更貼近傳統的本地檔案查找，減少了依賴網路連線和第三方服務的延遲。雖然此功能目前仍處於實驗階段，但其優化顯示了微軟在提升系統核心元件效能的趨勢，建議使用者關注未來穩定版是否會全面採用此類「去 Bloat」的設計。",
    tags: ["Windows 11", "Windows Search", "26H2", "Insider Build", "本地搜尋", "Microsoft Store"],
    title_en: "Windows 11 26H2 Beta Adds Hidden Feature: Ability to Completely Remove Web Search Results for Faster Local Search",
    summary_en: "This report delves into a significant hidden feature within the Windows 11 Insider Experimental build 26300.8697 (featuring the 26H2 version): users can independently disable the options for 'web search results' and 'Microsoft Store suggestions.' This feature allows Windows Search to focus solely on indexing local files and system settings, significantly improving search speed and purity. When this feature is enabled, searching for local files like 'PDF' will directly display the best matching local file information, rather than featuring Bing web results as the primary highlight. The practical impact of this change is that the Windows Search experience becomes closer to traditional local file lookup, reducing latency dependent on network connections and third-party services. Although this feature is currently in experimental stages, its optimization demonstrates Microsoft's trend toward enhancing the efficiency of core system components, suggesting that users should monitor whether future stable releases will fully adopt this kind of 'de-bloat' design.",
    tags_en: ["Windows 11", "Windows Search", "26H2", "Insider Build", "Local Search", "Microsoft Store"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/21/tested-microsoft-just-debloated-windows-11-search-without-bing-and-its-crazy-fast", lang: "EN" }
    ]
  },
  {
    id: "20260621-014",
    trackers: ["os"],
    category: "Windows",
    title: "微軟Edge瀏覽器移除Drop、Sidebar與Collections功能，全面轉型聚焦Copilot AI生態系",
    summary: "微軟宣布將從Edge瀏覽器中移除多項核心功能，包括文件分享的Drop、Sidebar和Collections。這些功能曾是Edge的獨特賣點，例如Drop功能允許使用者透過拖放方式，利用OneDrive儲存空間在PC、Android和iOS等多設備間安全分享文件和文字。然而，為配合Edge全面轉型，微軟決定將資源集中於Copilot AI的整合。移除Drop後，使用者需特別注意，透過Drop分享的文字筆記將會被刪除，建議使用者務必手動下載備份。微軟指出，所有分享的文件仍會安全儲存在OneDrive中。此舉顯示微軟正在將Edge重新設計為一個更貼近Copilot應用程式的AI時代瀏覽器，旨在統一其設計系統與AI產品線。",
    tags: ["Microsoft Edge", "Copilot", "Drop", "OneDrive", "AI", "瀏覽器", "Windows"],
    title_en: "Microsoft Edge Browser Removes Drop, Sidebar, and Collections Features, Pivoting to Focus on Copilot AI Ecosystem",
    summary_en: "Microsoft announced the removal of several core features from the Edge browser, including Drop, Sidebar, and Collections. These features were once unique selling points of Edge; for example, the Drop function allowed users to securely share files and text across multiple devices—including PC, Android, and iOS—using OneDrive storage. However, to align with Edge's comprehensive transformation, Microsoft has decided to concentrate its resources on Copilot AI integration. Users must note that after the removal of Drop, text notes shared via Drop will be deleted, and users are advised to manually download backups. Microsoft stated that all shared files will remain safely stored in OneDrive. This move indicates that Microsoft is redesigning Edge to be an AI-era browser more closely aligned with the Copilot application, aiming to unify its design system with its AI product line.",
    tags_en: ["Microsoft Edge", "Copilot", "Drop", "OneDrive", "AI", "Browser", "Windows"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/06/21/microsoft-is-killing-edges-drop-file-sharing-after-collections-and-sidebar-all-for-copilot-ai-takeover", lang: "EN" }
    ]
  },
  {
    id: "20260621-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "新型 AryStinger 殭屍網路攻擊 D-Link 舊款路由器，將設備轉化為惡意流量代理伺服器",
    summary: "資安研究團隊發現名為 AryStinger 的殭屍網路，鎖定 D-Link DIR-850L 與 DIR-818LW 等已停止維護的路由器進行入侵。該惡意軟體利用包含 CVE-2013-3307、CVE-2016-5681 及 CVE-2025-11837 在內的多項已知漏洞，將受感染設備作為遠端執行器，藉此進行網路掃描、指令執行與流量中繼。此外，該程式還具備竄改 DNS 設定以劫持瀏覽流量及竊取網路封包的能力。研究人員同時發現針對 NAS 系統的進階變體，具備內網偵察與程式碼執行功能。由於受影響設備多已達生命週期終點（EoL），建議用戶儘速更換為受原廠支援的設備，並落實更改預設管理員密碼、停用遠端管理功能及更新韌體等防護措施。",
    tags: ["AryStinger", "殭屍網路", "D-Link", "CVE-2013-3307", "CVE-2016-5681", "CVE-2025-11837", "IoT安全", "路由安全"],
    title_en: "New AryStinger Botnet Attacks D-Link Legacy Routers, Converting Devices into Malicious Traffic Proxies",
    summary_en: "A cybersecurity research team discovered a botnet named AryStinger that targets unmaintained routers, such as the D-Link DIR-850L and DIR-818LW. The malware exploits multiple known vulnerabilities, including CVE-2013-3307, CVE-2016-5681, and CVE-2025-11837, to turn infected devices into remote executors. These devices are then used for network scanning, command execution, and traffic relaying. Furthermore, the malware possesses the capability to tamper with DNS settings to hijack browsing traffic and steal network packets. Researchers also found an advanced variant targeting NAS systems, which includes internal network reconnaissance and code execution functions. Since the affected devices have reached their End-of-Life (EoL), users are advised to promptly replace them with manufacturer-supported equipment and implement protective measures such as changing default administrator passwords, disabling remote management, and updating firmware.",
    tags_en: ["AryStinger", "Botnet", "D-Link", "CVE-2013-3307", "CVE-2016-5681", "CVE-2025-11837", "IoT Security", "Router Security"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/arystinger-botnet-infected-thousands-of-d-link-routers-worldwide", lang: "EN" }
    ]
  },
  {
    id: "20260621-016",
    trackers: ["os"],
    category: "Apple",
    title: "分析指出：Apple 新任 CEO John Ternus 可能將重塑設計團隊在公司產品規劃中的核心地位",
    summary: "根據彭博社記者 Mark Gurman 的分析，Apple 在過去十年中，設計團隊在公司高層決策中的影響力逐漸減弱，尤其是在 Tim Cook 時代，這部分權力逐漸被財務和營運部門取代。然而，Gurman 預測新任執行長 John Ternus 的到任，可能會重新確立設計部門對於 Apple 未來產品藍圖的重要性。這項分析著重於公司內部權力結構的轉變，而非特定的技術漏洞或產品更新。實務上，這預示著 Apple 未來產品（如 2027 年的 iPhone）的設計方向，可能會重新重視美學和用戶體驗，恢復設計團隊的主導地位。建議關注 Apple 未來高層管理層的決策動向，以預測其產品設計哲學的變化。",
    tags: ["Apple", "John Ternus", "設計團隊", "公司治理", "產品策略", "iPhone"],
    title_en: "Analysis suggests: Apple's new CEO John Ternus may restore the core status of the design team in company product planning",
    summary_en: "According to analysis by Bloomberg reporter Mark Gurman, the influence of the design team in Apple's high-level decision-making has gradually diminished over the past decade, particularly during the Tim Cook era, where this power has been increasingly replaced by finance and operations departments. However, Gurman predicts that the arrival of new CEO John Ternus may re-establish the importance of the design department for Apple's future product roadmap. This analysis focuses on the shift in the company's internal power structure, rather than specific technical vulnerabilities or product updates. Practically, this suggests that the design direction for Apple's future products (such as the 2027 iPhone) may re-emphasize aesthetics and user experience, restoring the design team's leading role. It is recommended to monitor the decision-making trends of Apple's future senior management to predict changes in its product design philosophy.",
    tags_en: ["Apple", "John Ternus", "Design Team", "Corporate Governance", "Product Strategy", "iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/06/21/john-ternus-apple-design-team-influence", lang: "EN" }
    ]
  },
  {
    id: "20260621-017",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 宣布推出新一代智慧音箱，終止 Nest Mini 系列產品線",
    summary: "Google 宣布其智慧音箱產品線迎來重大變革，正式發布了新一代的 Google Home 喇叭，同時也宣告了長期熱銷的 Nest Mini 產品線終止。這項產品更換對市場而言，並非簡單的替換關係，可能無法滿足所有用戶的期待。文章主要報導了 Google 的產品線調整與市場策略變動，而非技術漏洞或資安事件。用戶應關注 Google 未來產品的生態系統整合與功能升級，以評估其是否能滿足個人智慧家居的需求。",
    tags: ["Google", "Google Home", "Nest Mini", "智慧音箱", "產品更新", "Google 生態系"],
    title_en: "Google Announces New Generation Smart Speaker, Discontinuing Nest Mini Product Line",
    summary_en: "Google announced a major transformation in its smart speaker product line, officially launching a new generation of Google Home speakers while simultaneously announcing the discontinuation of the long-selling Nest Mini product line. This product replacement is not merely a simple substitution for the market and may not meet all user expectations. The article primarily reports on Google's product line adjustments and market strategy changes, rather than technical vulnerabilities or security incidents. Users should pay attention to Google's future product ecosystem integration and feature upgrades to assess whether they can meet personal smart home needs.",
    tags_en: ["Google", "Google Home", "Nest Mini", "Smart Speaker", "Product Update", "Google Ecosystem"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/06/21/nest-mini-google-home-speaker-replacement-new-era", lang: "EN" }
    ]
  },
  {
    id: "20260621-018",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法生成新聞標題：原文為娛樂評論，無資安事件資訊",
    summary: "本文為一部名為《Widow's Bay》的喜劇恐怖劇集影評，內容描述了主角在一個奇特海邊小鎮的經歷，並提及了神秘的霧氣和超自然事件。文章未包含任何關於電腦系統、軟體漏洞、資安事件或技術技術細節的資訊。因此無法撰寫資安新聞摘要。",
    tags: ["娛樂評論", "Widow's Bay", "Apple TV", "非資安內容"],
    title_en: "Cannot Generate News Headline: Original Content is Entertainment Review, Lacks Cybersecurity Incident Information",
    summary_en: "This article is a film review of a comedy-horror series titled \"Widow's Bay.\" The content describes the protagonist's experiences in a peculiar seaside town, mentioning mysterious fog and supernatural events. The article contains no information regarding computer systems, software vulnerabilities, cybersecurity incidents, or technical details. Therefore, a cybersecurity news summary cannot be written.",
    tags_en: ["Entertainment Review", "Widow's Bay", "Apple TV", "Non-Cybersecurity Content"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/culture/2026/06/review-widows-bay-is-a-boldly-original-take-on-comedic-horror", lang: "EN" }
    ]
  },
  {
    id: "20260621-019",
    trackers: ["os"],
    category: "重點關注",
    title: "zlib-rs 0.6.4 發布，修復 Intel Raptor Lake 穩定性問題及 AArch64 Adler32 錯誤",
    summary: "zlib-rs 釋出 0.6.4 版本，這是該 Rust 實作的最新穩定版。本次更新主要修復了過去一年來困擾 zlib-rs 的 Intel Raptor Lake 穩定性問題，該錯誤源於特定的 MOVB 模式可能導致記憶體損壞。0.6.4 版本已提供解決方案，同時較新的 LLVM Clang 編譯器代碼也提供了修復。此外，本次更新還修復了 AArch64 平台上的 Adler32 實作中的一個越界錯誤（off-by-one error），該錯誤導致計算的校驗和不正確，僅影響 AArch64 NEON 代碼路徑。新版本也針對標準 AVX-512 採用了 VNNI ILP 技巧，提升了與 AMD Zen 5 處理器上的效能。開發者應關注此版本，以確保在 Raptor Lake 架構和 AArch64 平台上的穩定性與正確性。",
    tags: ["zlib-rs", "0.6.4", "Rust", "Intel Raptor Lake", "AArch64", "LLVM", "編譯器"],
    title_en: "zlib-rs 0.6.4 Released, Fixing Intel Raptor Lake Stability Issue and AArch64 Adler32 Bug",
    summary_en: "zlib-rs has released version 0.6.4, the latest stable version of this Rust implementation. This update primarily addresses the Intel Raptor Lake stability issue that has plagued zlib-rs over the past year, an error stemming from a specific MOVB mode that could lead to memory corruption. Version 0.6.4 provides a solution, which is also offered by newer LLVM Clang compiler code. Furthermore, this update fixes an off-by-one error in the Adler32 implementation on the AArch64 platform, an error that caused incorrect checksum calculations and only affects the AArch64 NEON code path. The new version also adopts VNNI ILP techniques for standard AVX-512, improving performance on AMD Zen 5 processors. Developers should pay attention to this version to ensure stability and correctness on Raptor Lake architecture and AArch64 platform.",
    tags_en: ["zlib-rs", "0.6.4", "Rust", "Intel Raptor Lake", "AArch64", "LLVM", "Compiler"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/zlib-rs-0.6.4", lang: "EN" }
    ]
  },
  {
    id: "20260621-020",
    trackers: ["os"],
    category: "重點關注",
    title: "高通為 HP EliteBook X G2q 晶片組發布 Linux 補丁，加速 Snapdragon X2 筆電的 Linux 支援",
    summary: "高通（Qualcomm）工程師已為搭載 Snapdragon X2 Elite SoC 的 HP EliteBook X G2q 筆電，發布了一批新的 Linux 補丁。這些補丁是在實際硬體上測試的，成功啟用多數核心功能，包括 Adreno 顯示卡、HDMI 輸出、USB Type-C、內建 eDP 螢幕、NVMe SD、Wi-Fi、鍵盤和觸控板等。目前尚待支援的功能包括內建網路攝影機。此項工作顯示 Snapdragon X2 晶片組在 Linux 筆電生態系統的支援進度正在加快。該補丁系列仍依賴其他尚未合併的 Linux 核心補丁，預計可能在今年晚些時候整合到 Linux v7.3 核心中。這項進展被指出比 Apple Silicon 晶片組的 Linux 支援進度更為迅速，儘管 Apple M3 已經能成功啟動 Linux，但仍缺乏完整的 GPU 和其他終端用戶功能。",
    tags: ["Qualcomm", "Linux", "Snapdragon X2", "HP EliteBook X G2q", "Linux 核心", "嵌入式系統"],
    title_en: "Qualcomm Releases Linux Patches for HP EliteBook X G2q Chipset, Accelerating Linux Support for Snapdragon X2 Laptops",
    summary_en: "Qualcomm engineers have released a set of new Linux patches for the HP EliteBook X G2q laptop, which is equipped with the Snapdragon X2 Elite SoC. These patches were tested on actual hardware and successfully enabled most core functionalities, including the Adreno GPU, HDMI output, USB Type-C, built-in eDP screen, NVMe SD, Wi-Fi, keyboard, and touchpad. The only feature currently awaiting support is the built-in webcam. This work demonstrates that the support progress for the Snapdragon X2 chipset in the Linux laptop ecosystem is accelerating. This patch series still relies on other unmerged Linux kernel patches and is expected to be integrated into the Linux v7.3 kernel later this year. This progress is noted to be faster than the Linux support progress for Apple Silicon chipsets, although the Apple M3 can successfully boot Linux, it still lacks full GPU and other end-user functionalities.",
    tags_en: ["Qualcomm", "Linux", "Snapdragon X2", "HP EliteBook X G2q", "Linux Kernel", "Embedded Systems"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/HP-EliteBook-X-G2q-Linux", lang: "EN" }
    ]
  },
  {
    id: "20260621-021",
    trackers: ["os"],
    category: "重點關注",
    title: "Mesa 26.2 整合 Vulkan 呈現時機支援，改善 X11/XWayland 遊戲卡頓與輸入延遲",
    summary: "Mesa Vulkan 窗口系統整合（WSI）程式碼現已支援「VK_EXT_present_timing」的呈現時機支援，並適用於 X11 和 XWayland 環境。此功能對於減少遊戲卡頓（stuttering）、改善渲染幀顯示排程，以及提供先前呈現時間回饋至關重要，有助於降低輸入延遲和優化幀間節奏（frame pacing）。雖然 Mesa 在 Wayland 下的呈現時機支援已完成，但此前尚未將其整合至 X11/XWayland。此功能由 Valve Linux 團隊成員 Hans-Kristian Arntzen 開發，經過數月程式碼審查後已合併。使用者可在 Mesa 26.2 版本（預計於八月發布）中獲得此支援，特別有助於在 X11/XWayland 上進行 Steam Play 或 Linux 遊戲的玩家。",
    tags: ["Mesa", "Vulkan", "X11", "XWayland", "VK_EXT_present_timing", "Linux 遊戲"],
    title_en: "Mesa 26.2 Integrates Vulkan Presentation Timing Support, Improving X11/XWayland Gaming Stuttering and Input Latency",
    summary_en: "Mesa's Vulkan Window System Integration (WSI) code now supports presentation timing via \"VK_EXT_present_timing,\" applicable in both X11 and XWayland environments. This feature is crucial for reducing gaming stuttering, improving rendering frame scheduling, and providing prior presentation timing feedback, which helps lower input latency and optimize frame pacing. Although Mesa already supports presentation timing under Wayland, it had not previously been integrated into X11/XWayland. This functionality was developed by Hans-Kristian Arntzen of the Valve Linux team and has been merged following several months of code review. Users can access this support in Mesa 26.2 (expected release in August), which is particularly beneficial for players running Steam Play or Linux games on X11/XWayland.",
    tags_en: ["Mesa", "Vulkan", "X11", "XWayland", "VK_EXT_present_timing", "Linux 遊戲"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mesa-26.2-X11-Present-Timing", lang: "EN" }
    ]
  },
  {
    id: "20260621-022",
    trackers: ["os"],
    category: "重點關注",
    title: "美國政府援引國家安全，實施出口管制限制 Anthropic 的 Mythos 與 Fable 5 模型",
    summary: "Anthropic 公司最新開發的 Mythos 和 Fable 5 模型，因美國政府援引國家安全考量，被實施了出口管制。根據報導，美國政府發函要求 Anthropic 限制這些模型的使用範圍，禁止任何外國公民（包括美國境內外）使用，甚至連 Anthropic 員工也受到限制。Anthropic 隨即為確保合規性，決定全面停用這兩個模型。此事件的背景涉及第三方安全評估，據悉 Amazon 研究人員曾讓 Fable 5、Mythos 5 和 Claude Opus 模型處理包含已知 CVE 的開源程式碼，並要求模型「審查安全問題」或「修復程式碼」。安全專家 Katie Moussouris 認為，模型在處理這些任務時展現出的能力，被政府誤判為潛在的國家安全威脅，導致了這次嚴厲的限制。這顯示了先進 AI 模型在處理敏感技術時，可能面臨的嚴格監管與政策風險。",
    tags: ["Anthropic", "Mythos", "Fable 5", "出口管制", "國家安全", "AI 模型", "CVE"],
    title_en: "US Government Imposes Export Controls on Anthropic's Mythos and Fable 5 Models Citing National Security",
    summary_en: "Anthropic's newly developed Mythos and Fable 5 models have been subjected to export controls due to U.S. government concerns regarding national security. Reports indicate that the U.S. government issued a directive requiring Anthropic to restrict the use of these models, prohibiting their use by any foreign national (including those within the U.S.) and even restricting Anthropic employees. Anthropic subsequently decided to completely decommission both models to ensure compliance. The background of this incident involves third-party security evaluations. It was reported that Amazon researchers had used the Fable 5, Mythos 5, and Claude Opus models to process open-source code containing known CVEs, and requested the models to 'review security issues' or 'fix the code.' Security expert Katie Moussouris believes that the capabilities demonstrated by the models while performing these tasks were misinterpreted by the government as a potential national security threat, leading to these severe restrictions. This highlights the strict regulatory and policy risks advanced AI models may face when handling sensitive technology.",
    tags_en: ["Anthropic", "Mythos", "Fable 5", "Export Control", "National Security", "AI Model", "CVE"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/06/22/anthropics-mythos-mess-just-keeps-getting-more-complicated/5258577", lang: "EN" }
    ]
  }
];
