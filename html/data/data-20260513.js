// data-20260513.js — 2026-05-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-13"] = [
  {
    id: "20260513-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 USB xHCI 控制器在 Android 設備上因 HCE 導致的中斷風暴問題",
    summary: "本修補針對 Linux 核心中的 USB xHCI 控制器（xhci）所發現的漏洞。當 xHCI 控制器在 Android 設備的 UAS 儲存設備插拔情境中報告主機控制器錯誤（HCE）時，原有的驅動程式僅記錄警告，並誤以為 xHC 活動已停止。然而，實際上在某些主機上，即使報告了 HCE，中斷風暴（interrupt storm）仍會持續發生，導致嚴重的系統級故障。此修補透過在檢查 STS_HCE 狀態時，呼叫 `xhci_halt()` 函數，來模擬處理 STS_FATAL 錯誤時的錯誤處理模式，確保在檢測到 HCE 後能正確停止控制器，從而防止中斷風暴的持續發生。此修補僅解決中斷風暴問題，若要達到完整的 HCE 恢復，仍需重置並重新初始化 xHC。",
    tags: ["Linux 核心", "USB xHCI", "Android", "HCE", "中斷風暴", "驅動程式"],
    title_en: "Linux Kernel Patch: Fixing Interrupt Storm Issue in USB xHCI Controller on Android Devices Caused by HCE",
    summary_en: "This patch addresses a vulnerability found in the USB xHCI controller (xhci) within the Linux kernel. When the xHCI controller reports a Host Controller Error (HCE) during the hot-plugging or unplugging of a UAS storage device on an Android device, the original driver merely logged a warning and incorrectly assumed that xHC activity had ceased. However, in certain hosts, an interrupt storm continues even after an HCE is reported, leading to severe system-level failure. This patch simulates the error handling mode used when processing STS_FATAL errors by calling the `xhci_halt()` function when checking the STS_HCE status. This ensures that the controller is correctly stopped after detecting HCE, thereby preventing the continuation of the interrupt storm. This patch only resolves the interrupt storm issue; achieving full HCE recovery still requires resetting and reinitializing xHC.",
    tags_en: ["Linux Kernel", "USB xHCI", "Android", "HCE", "Interrupt Storm", "Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43488", lang: "EN" }
    ]
  },
  {
    id: "20260513-002",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 Safari 26.5 安全更新：修補多個 WebKit 核心漏洞，強化記憶體管理與資料保護",
    summary: "Apple 發布 Safari 26.5 版本，針對 WebKit 核心元件修補了多個安全漏洞，涵蓋 macOS Sonoma 與 macOS Sequoia 系統。本次更新修復了多個 CVE，包括 CVE-2026-43660、CVE-2026-28907 等，主要問題點包括：處理惡意網頁內容時可能導致內容安全政策（CSP）無法執行、敏感使用者資訊洩露、以及多個意外程序崩潰（Crash）。技術細節上，修補內容著重於增強輸入驗證、改善記憶體處理（如修復 Use-After-Free 漏洞）和提升資料保護機制。實務上，用戶應確保系統及瀏覽器更新至 Safari 26.5 或更高版本，以避免因惡意網頁內容導致的系統不穩定或資料外洩風險。Apple 強調，所有修補皆為預防性更新，建議用戶立即更新。",
    tags: ["Apple", "Safari 26.5", "WebKit", "macOS Sonoma", "CVE-2026-28907", "記憶體管理"],
    title_en: "Apple Releases Safari 26.5 Security Update: Patching Multiple WebKit Core Vulnerabilities, Strengthening Memory Management and Data Protection",
    summary_en: "Apple has released Safari 26.5, which patches multiple security vulnerabilities in the WebKit core component, covering macOS Sonoma and macOS Sequoia systems. This update fixes several CVEs, including CVE-2026-43660 and CVE-2026-28907. Key issues addressed include potential failures in Content Security Policy (CSP) enforcement when handling malicious web content, sensitive user information leakage, and multiple unexpected program crashes. Technically, the patches focus on enhancing input validation, improving memory handling (such as fixing Use-After-Free vulnerabilities), and boosting data protection mechanisms. Practically, users should ensure their system and browser are updated to Safari 26.5 or later to avoid risks of system instability or data leakage caused by malicious web content. Apple emphasizes that all patches are preventative updates and advises users to update immediately.",
    tags_en: ["Apple", "Safari 26.5", "WebKit", "macOS Sonoma", "CVE-2026-28907", "Memory Management"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127121", lang: "EN" }
    ]
  },
  {
    id: "20260513-003",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Palo Alto Networks Prisma Browser 於 macOS 上的程式碼注入漏洞 (CVE-2026-0236)",
    summary: "本漏洞 CVE-2026-0236 存在於 Palo Alto Networks 的 Prisma® Browser 產品，影響 macOS 作業系統。此漏洞屬於程式碼注入（Code Injection）類型，其本質是 Prisma Browser 未能正確限制其 AppleScript 介面（Apple Event handler）的存取權限。這使得本地已驗證的非管理員使用者，可以利用這個暴露的 Apple Event handler，向瀏覽器發送未經授權的指令，從而執行惡意操作。攻擊向量為本地（Local），無需管理員權限，且無需使用者互動。實務上，這代表攻擊者只需在受影響的 macOS 設備上取得普通用戶權限，即可對瀏覽器進行控制。修補建議應由 Palo Alto Networks 官方發布的補丁或安全更新來解決，建議用戶密切關注官方公告。",
    tags: ["Palo Alto Networks", "Prisma Browser", "macOS", "CVE-2026-0236", "程式碼注入", "AppleScript"],
    title_en: "Palo Alto Networks Prisma Browser Code Injection Vulnerability on macOS (CVE-2026-0236)",
    summary_en: "Vulnerability CVE-2026-0236 exists in Palo Alto Networks' Prisma® Browser product and affects the macOS operating system. This vulnerability is classified as Code Injection, stemming from Prisma Browser's failure to properly restrict access to its AppleScript interface (Apple Event handler). This allows a locally authenticated non-administrator user to exploit the exposed Apple Event handler to send unauthorized commands to the browser, thereby executing malicious actions. The attack vector is Local, requiring no administrator privileges and no user interaction. Practically, this means an attacker only needs standard user privileges on the affected macOS device to control the browser. Remediation should be addressed by patches or security updates officially released by Palo Alto Networks. Users are advised to closely monitor official announcements.",
    tags_en: ["Palo Alto Networks", "Prisma Browser", "macOS", "CVE-2026-0236", "Code Injection", "AppleScript"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0236", lang: "EN" }
    ]
  },
  {
    id: "20260513-004",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Red Hat與Anchore合作，透過最小化基礎映像檔與SBOM，降低容器化環境的CVE疲勞與攻擊面",
    summary: "本文章探討現代容器化軟體開發面臨的「CVE疲勞」問題，即掃描工具產生的海量漏洞報告導致團隊難以判斷哪些風險需要優先修復。為了解決此問題，Red Hat與供應鏈安全領導者Anchore合作，提出一套風險導向的解決方案。核心策略是從源頭減少「噪音」，採用「Red Hat Hardened Images」等最小化、精簡的基礎容器映像檔，確保只包含生產環境真正需要的元件。此外，透過生成和管理軟體物料清單（SBOM），開發團隊可以清楚掌握其軟體組成，將SBOM作為「可防禦的藍圖」。Anchore的政策引擎則在CI/CD流程中提供連續的漏洞分析和合規性檢查，確保只有符合NIST、FedRAMP等標準的映像檔才能部署。此流程不僅能自動化漏洞匹配，還能將修補的重點聚焦於實際可控的風險，大幅提升修補效率並滿足日益嚴格的法規要求。",
    tags: ["Red Hat", "Anchore", "SBOM", "容器安全", "CVE疲勞", "CI/CD"],
    title_en: "Red Hat and Anchore Collaborate to Reduce CVE Fatigue and Attack Surface in Containerized Environments Using Minimal Base Images and SBOMs",
    summary_en: "This article explores the issue of \"CVE fatigue\" faced by modern containerized software development, where the massive volume of vulnerability reports generated by scanning tools makes it difficult for teams to determine which risks require priority remediation. To address this, Red Hat and supply chain security leader Anchore have collaborated to propose a risk-oriented solution. The core strategy is to reduce \"noise\" at the source by adopting minimal, streamlined base container images, such as \"Red Hat Hardened Images,\" ensuring that only components truly required for the production environment are included. Furthermore, by generating and managing a Software Bill of Materials (SBOM), development teams can clearly understand their software composition, treating the SBOM as a \"defensible blueprint.\" Anchore's policy engine provides continuous vulnerability analysis and compliance checks within the CI/CD pipeline, ensuring that only images compliant with standards like NIST and FedRAMP can be deployed. This process not only automates vulnerability matching but also focuses remediation efforts on genuinely controllable risks, significantly improving patching efficiency and meeting increasingly stringent regulatory requirements.",
    tags_en: ["Red Hat", "Anchore", "SBOM", "Container Security", "CVE Fatigue", "CI/CD"],
    sources: [
      { name: "Red Hat Security Blog", url: "https://redhat.com/en/blog/reducing-cve-fatigue-red-hat-hardened-images-and-anchore", lang: "EN" }
    ]
  },
  {
    id: "20260513-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "三星Android平台漏洞：CVE-2026-21020 允許本地攻擊者觸發特權功能",
    summary: "本漏洞（CVE-2026-21020）存在於OmaCP的Android應用程式元件匯出機制中，影響範圍為在SMR May-2026 Release 1版本之前的系統。該漏洞允許本地攻擊者透過不當的元件匯出行為，觸發系統的特權功能。根據CVSS v3.1評分，攻擊向量（AV）為本地（L），複雜度（AC）為本地（L），權限要求（PR）為本地（L），攻擊成功率（UI）為無（N），安全等級（S）為使用者（U），機密性（C）為高（H），完整性（I）為高（H），可用性（A）為高（H）。實務上，這類漏洞通常可能導致設備的資料洩漏、系統功能被惡意修改，甚至造成系統崩潰。修補建議是升級至SMR May-2026 Release 1或之後的修補版本，建議用戶及設備製造商應立即檢查並更新系統韌體，以修復此元件匯出缺陷，避免遭受本地攻擊。相關資訊可參考三星官方安全公告。",
    tags: ["CVE-2026-21020", "Android", "三星", "OmaCP", "本地攻擊", "系統韌體"],
    title_en: "Samsung Android Platform Vulnerability: CVE-2026-21020 Allows Local Attacker to Trigger Privileged Functionality",
    summary_en: "This vulnerability (CVE-2026-21020) exists in the component export mechanism of OmaCP's Android application component, affecting systems prior to the SMR May-2026 Release 1 version. The vulnerability allows a local attacker to trigger the system's privileged functionality through improper component export behavior. According to the CVSS v3.1 scoring, the Attack Vector (AV) is Local (L), Attack Complexity (AC) is Low (L), Privileges Required (PR) is Low (L), User Interaction (UI) is None (N), Scope (S) is Unchanged (U), Confidentiality (C) is High (H), Integrity (I) is High (H), and Availability (A) is High (H). In practice, such vulnerabilities can typically lead to device data leakage, malicious modification of system functions, or even system crashes. The recommended fix is to upgrade to the SMR May-2026 Release 1 or later patched version. Users and device manufacturers are advised to immediately check and update the system firmware to patch this component export flaw and prevent local attacks. For more information, please refer to the official Samsung security announcement.",
    tags_en: ["CVE-2026-21020", "Android", "Samsung", "OmaCP", "Local Attack", "System Firmware"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-21020", lang: "EN" }
    ]
  },
  {
    id: "20260513-006",
    trackers: ["os", "security"],
    category: "Android",
    title: "警告：Prisma Access Agent 存在憑證驗證缺陷，Android 與 Chrome OS 可遭 MitM 竊取 VPN 流量",
    summary: "本篇報告揭露 CVE-2026-0248，指出 Palo Alto Networks 的 Prisma Access Agent 在 Android 和 Chrome OS 平台上存在不當憑證驗證（Improper Certificate Validation）的漏洞。攻擊者可利用此缺陷執行中間人攻擊（Man-in-the-Middle, MitM），透過呈現任何由受信任憑證授權機構（CA）頒發的憑證，攔截並竊取設備的敏感 VPN 流量資訊。此漏洞的技術根源為 CWE-295。然而，報告明確指出，Prisma Access Agent 在 macOS、Windows、Linux 和 iOS 平台則不受此漏洞影響。實務上，使用者應立即關注 Android 和 Chrome OS 設備的安全性，並儘快更新 Prisma Access Agent 至修復版本。由於 NVD 尚未提供完整的 CVSS 評分，建議用戶參考 Palo Alto Networks 官方公告，並採取網路隔離或升級 Agent 的措施以降低風險。",
    tags: ["CVE-2026-0248", "Palo Alto Networks", "Prisma Access Agent", "Android", "Chrome OS", "MitM", "憑證驗證"],
    title_en: "Warning: Prisma Access Agent has Certificate Validation Flaw, Android and Chrome OS Vulnerable to MitM VPN Traffic Theft",
    summary_en: "This report reveals CVE-2026-0248, pointing out an Improper Certificate Validation vulnerability in Palo Alto Networks' Prisma Access Agent on Android and Chrome OS platforms. Attackers can exploit this flaw to perform a Man-in-the-Middle (MitM) attack, intercepting and stealing sensitive VPN traffic data by presenting any certificate issued by a trusted Certificate Authority (CA). The technical root cause of this vulnerability is CWE-295. However, the report explicitly states that the Prisma Access Agent is unaffected by this vulnerability on macOS, Windows, Linux, and iOS platforms. Practically, users should immediately pay attention to the security of Android and Chrome OS devices and update the Prisma Access Agent to a patched version as soon as possible. Since NVD has not yet provided a complete CVSS score, users are advised to refer to the official Palo Alto Networks announcement and take measures such as network isolation or upgrading the Agent to mitigate risk.",
    tags_en: ["CVE-2026-0248", "Palo Alto Networks", "Prisma Access Agent", "Android", "Chrome OS", "MitM", "Certificate Validation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0248", lang: "EN" }
    ]
  },
  {
    id: "20260513-007",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Palo Alto Networks Prisma Access Agent 存在資訊洩露漏洞，本地使用者可存取敏感憑證",
    summary: "本漏洞（CVE-2026-0245）是 Palo Alto Networks 的 Prisma Access Agent 存在的多個資訊洩露漏洞。該漏洞允許本地使用者（local user）在未經授權的情況下，存取系統的敏感配置資料和憑證。雖然 NVD 尚未提供完整的 CVSS 評分，但其向量分析顯示，攻擊向量為本地（AV:L），攻擊複雜度為低（AC:L），且無需使用者互動（UI:N）。實務上，這類漏洞可能導致攻擊者竊取系統的關鍵憑證，進而進行橫向移動或身份冒用。建議用戶立即查閱 Palo Alto Networks 官方公告，並根據其提供的修補或升級指南，儘速修補受影響的 Prisma Access Agent 版本，以降低被本地攻擊者利用的風險。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0245", "資訊洩露", "本地攻擊", "憑證竊取"],
    title_en: "Palo Alto Networks Prisma Access Agent has information disclosure vulnerability, allowing local users to access sensitive credentials",
    summary_en: "This vulnerability (CVE-2026-0245) is an information disclosure flaw present in Palo Alto Networks' Prisma Access Agent. The vulnerability allows a local user to access the system's sensitive configuration data and credentials without authorization. Although NVD has not yet provided a full CVSS score, its vector analysis indicates an Attack Vector of Local (AV:L), Low Attack Complexity (AC:L), and no User Interaction required (UI:N). In practice, such vulnerabilities could allow an attacker to steal critical system credentials, facilitating lateral movement or identity impersonation. Users are advised to immediately consult the official Palo Alto Networks announcement and promptly patch the affected Prisma Access Agent version according to the provided remediation or upgrade guidelines to mitigate the risk of exploitation by local attackers.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0245", "Information Disclosure", "Local Attack", "Credential Theft"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0245", lang: "EN" }
    ]
  },
  {
    id: "20260513-008",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Palo Alto Networks Prisma Access Agent 存在權限提升漏洞 (CVE-2026-0246)，影響 macOS/Linux/Windows",
    summary: "Palo Alto Networks 的 Prisma Access Agent 內建的權限管理機制存在一個嚴重漏洞 (CVE-2026-0246)。此漏洞允許本地已認證的非管理員使用者，在 macOS、Linux 或 Windows 系統上，將其權限提升至 root 或 NT AUTHORITY\\SYSTEM 等最高權限。攻擊者利用此漏洞可執行任意程式碼，並讀取原本只有特權帳號才能存取的敏感資訊。值得注意的是，Prisma Access Agent 在 iOS、Android 和 Chrome OS 平台並未受到影響。建議受影響的用戶應儘快參考 Palo Alto Networks 官方公告，進行必要的修補或升級，以防止權限被未經授權的攻擊者利用。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0246", "權限提升", "macOS", "Linux", "Windows"],
    title_en: "Palo Alto Networks Prisma Access Agent has Privilege Escalation Vulnerability (CVE-2026-0246), Affecting macOS/Linux/Windows",
    summary_en: "A critical vulnerability (CVE-2026-0246) exists in the built-in privilege management mechanism of Palo Alto Networks' Prisma Access Agent. This vulnerability allows a locally authenticated non-administrator user to escalate their privileges to high levels, such as root or NT AUTHORITY\\SYSTEM, on macOS, Linux, or Windows systems. By exploiting this vulnerability, an attacker can execute arbitrary code and read sensitive information that was previously only accessible to privileged accounts. Notably, the Prisma Access Agent is not affected on iOS, Android, or Chrome OS platforms. Affected users are advised to promptly refer to the official Palo Alto Networks announcement and apply necessary patches or upgrades to prevent unauthorized exploitation by attackers.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0246", "Privilege Escalation", "macOS", "Linux", "Windows"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0246", lang: "EN" }
    ]
  },
  {
    id: "20260513-009",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Palo Alto Networks GlobalProtect 應用程式存在多重本地權限提升漏洞 (CVE-2026-0251)",
    summary: "Palo Alto Networks 的 GlobalProtect 應用程式，在 Windows、macOS 和 Linux 平台上存在多個本地權限提升漏洞（CVE-2026-0251）。這些漏洞允許未具備管理員權限的本地使用者，透過攻擊向量執行任意指令，並將其權限提升至系統最高權限（Windows 的 NT AUTHORITY\\SYSTEM，macOS/Linux 的 root）。攻擊的條件為本地使用者，且無需任何初始權限。值得注意的是，iOS、Android、Chrome OS 平台以及 GlobalProtect UWP 應用程式並未受影響。建議使用者應密切關注 Palo Alto Networks 官方公告，並儘速修補受影響的 GlobalProtect 應用程式版本，以防止未經授權的系統層級存取。",
    tags: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0251", "本地權限提升", "Windows", "macOS", "Linux"],
    title_en: "Multiple Local Privilege Escalation Vulnerabilities Found in Palo Alto Networks GlobalProtect Application (CVE-2026-0251)",
    summary_en: "Multiple local privilege escalation vulnerabilities (CVE-2026-0251) have been found in Palo Alto Networks' GlobalProtect application across Windows, macOS, and Linux platforms. These vulnerabilities allow a local user without administrator privileges to execute arbitrary commands and escalate their privileges to the highest system level (NT AUTHORITY\\SYSTEM on Windows, root on macOS/Linux) via an attack vector. The condition for exploitation is a local user, requiring no initial privileges. Notably, the iOS, Android, Chrome OS platforms, and the GlobalProtect UWP application are not affected. Users are advised to closely monitor official Palo Alto Networks announcements and promptly patch the affected GlobalProtect application versions to prevent unauthorized system-level access.",
    tags_en: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0251", "Local Privilege Escalation", "Windows", "macOS", "Linux"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0251", lang: "EN" }
    ]
  }
];
