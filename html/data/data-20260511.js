// data-20260511.js — 2026-05-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-11"] = [
  {
    id: "20260511-001",
    trackers: ["eu_cra"],
    category: "調和標準",
    title: "歐盟數位身份錢包（EUDIW）標準化研討會：探討電子身份、認證與跨國數位基礎設施的未來",
    summary: "本文介紹了在 ETSI 舉辦的關於歐盟數位身份錢包（EUDIW）的研討會。EUDIW 是基於修正後的《電子身份認證和簽署法規》（eIDAS 2，法規編號：(EU) 2024/1183），旨在建立一個跨歐洲的數位身份識別框架。該框架將大幅改變歐洲數位基礎設施的安全性，支持跨境交易，並提供高可問責性的金融、政府和商業服務存取。目前，各國正進行 EUDIW 的實施和測試，預計至 2026 年底投入使用，已在政府服務、銀行、車輛註冊和旅行等領域進行試點。CEN 和 ETSI 正在與歐盟委員會合作，持續完善和擴展相關標準，確保所有國家級 EUDIW 實施方案之間具有互操作性。本次研討會涵蓋了遠端身份驗證、PID/EAA 上線流程、信任服務提供者註冊、信任模型等核心技術主題，對於監管機構、行動身份解決方案提供商、安全元件製造商和應用程式開發商具有重要參考價值。",
    tags: ["EUDIW", "eIDAS 2", "歐盟數位身份", "CEN", "ETSI", "數位基礎設施"],
    title_en: "EU Digital Identity Wallet (EUDIW) Standardization Workshop: Exploring the Future of Electronic Identity, Authentication, and Cross-Border Digital Infrastructure",
    summary_en: "This article reports on a workshop held by ETSI concerning the EU Digital Identity Wallet (EUDIW). EUDIW is based on the revised eIDAS Regulation (eIDAS 2, Regulation No.: (EU) 2024/1183) and aims to establish a cross-European digital identity framework. This framework will significantly change the security of Europe's digital infrastructure, support cross-border transactions, and provide high-accountability access to financial, governmental, and commercial services. Currently, various countries are implementing and testing EUDIW, which is expected to be operational by the end of 2026. Pilot programs are underway in areas such as government services, banking, vehicle registration, and travel. CEN and ETSI are collaborating with the European Commission to continuously refine and expand related standards, ensuring interoperability among all national EUDIW implementation schemes. The workshop covered core technical topics including remote identity verification, PID/EAA onboarding processes, Trust Service Provider registration, and trust models, making it highly valuable for regulatory bodies, mobile identity solution providers, secure element manufacturers, and application developers.",
    tags_en: ["EUDIW", "eIDAS 2", "EU Digital Identity", "CEN", "ETSI", "Digital Infrastructure"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/events/etsi-cen-workshop-on-eu-digital-framework-centring-on-the-eu-identity-wallet", lang: "EN" }
    ]
  },
  {
    id: "20260511-002",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple發布iOS 26.5與iPadOS 26.5安全更新，修補多項核心元件漏洞",
    summary: "蘋果公司於2026年5月11日發布iOS 26.5和iPadOS 26.5安全更新，旨在修補多個系統層級的漏洞。本次更新涵蓋了從Accelerate、APFS、App Intents到ImageIO等多個核心框架。主要的漏洞包括：Accelerate的越界讀取（CVE-2026-28991），可能導致服務拒絕；APFS的緩衝區溢出（CVE-2026-28959），可能導致系統意外終止；App Intents的邏輯問題（CVE-2026-28995），可能讓惡意應用程式逃逸沙盒；ImageIO的緩衝區溢出（CVE-2026-43661），可能導致程序記憶體損壞。這些修補皆透過改善邊界檢查、輸入驗證和記憶體處理來實施。受影響設備為iPhone 11及更新機型，以及多代iPad Pro/Air/mini。使用者應儘快更新至最新版本以確保系統安全。",
    tags: ["Apple", "iOS 26.5", "iPadOS 26.5", "CVE-2026-28991", "沙盒逃逸", "核心元件", "安全更新"],
    title_en: "Apple releases iOS 26.5 and iPadOS 26.5 security updates to patch multiple core component vulnerabilities",
    summary_en: "Apple released iOS 26.5 and iPadOS 26.5 security updates on May 11, 2026, aimed at patching multiple system-level vulnerabilities. This update covers several core frameworks, including Accelerate, APFS, App Intents, and ImageIO. Key vulnerabilities include: an out-of-bounds read in Accelerate (CVE-2026-28991), which could lead to denial of service; a buffer overflow in APFS (CVE-2026-28959), which could cause unexpected system termination; a logic flaw in App Intents (CVE-2026-28995), which could allow malicious applications to escape the sandbox; and a buffer overflow in ImageIO (CVE-2026-43661), which could lead to program memory corruption. These patches are implemented by improving boundary checks, input validation, and memory handling. Affected devices include iPhone 11 and newer models, as well as multiple generations of iPad Pro/Air/mini. Users should update to the latest version promptly to ensure system security.",
    tags_en: ["Apple", "iOS 26.5", "iPadOS 26.5", "CVE-2026-28991", "Sandbox Escape", "Core Component", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127110", lang: "EN" }
    ]
  },
  {
    id: "20260511-003",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 18.7.9 與 iPadOS 18.7.9 安全更新，修補多項核心與應用層漏洞",
    summary: "蘋果於 2026 年 5 月 11 日發布 iOS 18.7.9 和 iPadOS 18.7.9 安全更新，旨在修補多個系統層級的漏洞。本次更新涵蓋了從帳戶管理、APFS、App Intents 到核心 Kernel 等多個關鍵元件。修補內容包括修復了多個邏輯錯誤、緩衝區溢出（如 CVE-2026-28959）、資源耗盡、以及多個核心層級的權限提升（如 CVE-2026-28952，修復了應用程式可能獲得 root 權限的問題）。此外，還修補了多個 IOHIDFamily 和 Kernel 的記憶體相關漏洞，包括使用後釋放（use after free）和記憶體洩漏等問題。用戶應透過更新至最新版本來修補這些潛在的系統安全風險，以防止惡意應用程式或遠端攻擊者利用這些漏洞造成系統終止、資料洩露或權限提升。",
    tags: ["Apple", "iOS 18.7.9", "iPadOS 18.7.9", "CVE-2026-28952", "Kernel", "安全更新"],
    title_en: "Apple Releases iOS 18.7.9 and iPadOS 18.7.9 Security Updates to Patch Multiple Core and Application Layer Vulnerabilities",
    summary_en: "Apple released iOS 18.7.9 and iPadOS 18.7.9 security updates on May 11, 2026, aimed at patching multiple system-level vulnerabilities. This update covers several critical components, ranging from account management, APFS, and App Intents to the core Kernel. Patches include fixes for multiple logic errors, buffer overflows (such as CVE-2026-28959), resource exhaustion, and multiple core-level privilege escalations (such as CVE-2026-28952, which fixes an issue where applications could potentially gain root privileges). Furthermore, it addresses multiple memory-related vulnerabilities in IOHIDFamily and the Kernel, including use after free and memory leakage issues. Users should update to the latest version to patch these potential system security risks, preventing malicious applications or remote attackers from exploiting these vulnerabilities to cause system termination, data leakage, or privilege escalation.",
    tags_en: ["Apple", "iOS 18.7.9", "iPadOS 18.7.9", "CVE-2026-28952", "Kernel", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127111", lang: "EN" }
    ]
  },
  {
    id: "20260511-004",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iPadOS 17.7.11 安全更新，修復通知服務的資料保留與日誌記錄漏洞",
    summary: "Apple 於 2026 年 5 月 11 日發布 iPadOS 17.7.11 安全更新，旨在保護用戶設備。本次更新主要修復了「通知服務」（Notification Services）的一個日誌記錄問題。該漏洞可能導致原本標記為刪除的通知資料，在設備上意外地被保留下來。Apple 透過改善資料遮蔽（data redaction）機制來解決此問題，並為此漏洞分配了 CVE-2026-28950 編號。此更新適用於 iPad Pro 12.9-inch 2nd generation、iPad Pro 10.5-inch，以及 iPad 6th generation 等設備。用戶應儘快透過系統更新至 iPadOS 17.7.11 版本，以確保設備的資料隱私與安全性。",
    tags: ["Apple", "iPadOS", "iPadOS 17.7.11", "CVE-2026-28950", "通知服務", "資料隱私"],
    title_en: "Apple releases iPadOS 17.7.11 security update to fix data retention and logging vulnerability in Notification Services",
    summary_en: "Apple released iPadOS 17.7.11 on May 11, 2026, to protect user devices. This update primarily addresses a logging issue within 'Notification Services.' The vulnerability could potentially cause notification data, which was originally marked for deletion, to be unintentionally retained on the device. Apple resolved this issue by improving the data redaction mechanism and assigned it the identifier CVE-2026-28950. This update applies to devices such as the iPad Pro 12.9-inch 2nd generation, iPad Pro 10.5-inch, and iPad 6th generation. Users should update to iPadOS 17.7.11 as soon as possible to ensure the data privacy and security of their devices.",
    tags_en: ["Apple", "iPadOS", "iPadOS 17.7.11", "CVE-2026-28950", "Notification Services", "Data Privacy"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127112", lang: "EN" }
    ]
  },
  {
    id: "20260511-005",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 16.7.1.6 與 iPadOS 16.7.1.6 安全更新，修補通知服務的記錄錯誤",
    summary: "蘋果於 2026 年 5 月 11 日發布了針對 iOS 16.7.1.6 和 iPadOS 16.7.1.6 的安全更新，旨在保護用戶設備。本次更新主要修補了「通知服務」（Notification Services）的一個記錄錯誤。該漏洞描述指出，在某些情況下，標記為刪除的通知內容可能會意外地保留在設備上。蘋果透過改善資料遮蔽（data redaction）機制來解決此問題。本次更新適用於支援的設備型號包括 iPhone 8、iPhone 8 Plus、iPhone X 等。用戶應儘快透過系統更新機制，將作業系統升級至最新版本，以確保設備的資料隱私與安全性。",
    tags: ["Apple", "iOS", "iPadOS", "CVE-2026-28950", "通知服務", "安全更新"],
    title_en: "Apple Releases iOS 16.7.1.6 and iPadOS 16.7.1.6 Security Updates to Patch Notification Service Logging Error",
    summary_en: "On May 11, 2026, Apple released security updates for iOS 16.7.1.6 and iPadOS 16.7.1.6 to protect user devices. This update primarily addresses a logging error within 'Notification Services.' The vulnerability description indicates that, under certain circumstances, notification content marked for deletion might be unintentionally retained on the device. Apple resolves this issue by improving the data redaction mechanism. Supported device models include the iPhone 8, iPhone 8 Plus, and iPhone X. Users are advised to upgrade their operating system to the latest version via the system update mechanism promptly to ensure the data privacy and security of their devices.",
    tags_en: ["Apple", "iOS", "iPadOS", "CVE-2026-28950", "Notification Services", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127113", lang: "EN" }
    ]
  },
  {
    id: "20260511-006",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 15.8.8 與 iPadOS 15.8.8 安全更新，修補通知服務的日誌記錄漏洞",
    summary: "蘋果於 2026 年 5 月 11 日發布了針對 iOS 15.8.8 和 iPadOS 15.8.8 的安全更新。本次更新主要修補了通知服務（Notification Services）的一個日誌記錄問題，該漏洞可能導致標記為刪除的通知內容意外地保留在設備上。此安全問題已分配了 CVE-2026-28950 編號。蘋果提醒用戶，本次更新適用於多款舊型號設備，包括 iPhone 6s、iPhone 7、iPad Air 2 等。用戶應儘快透過系統更新，確保設備能獲得最新的安全補丁，以防止資料洩漏或不必要的資訊保留。",
    tags: ["Apple", "iOS 15.8.8", "iPadOS 15.8.8", "CVE-2026-28950", "通知服務", "安全更新"],
    title_en: "Apple Releases iOS 15.8.8 and iPadOS 15.8.8 Security Update to Patch Notification Services Logging Vulnerability",
    summary_en: "Apple released a security update for iOS 15.8.8 and iPadOS 15.8.8 on May 11, 2026. This update primarily addresses a logging issue within Notification Services, a vulnerability that could cause notification content marked as deleted to be unintentionally retained on the device. This security issue has been assigned the identifier CVE-2026-28950. Apple advises users that this update applies to multiple older models, including iPhone 6s, iPhone 7, and iPad Air 2. Users should update their systems promptly to ensure their devices receive the latest security patch, thereby preventing data leakage or unnecessary information retention.",
    tags_en: ["Apple", "iOS 15.8.8", "iPadOS 15.8.8", "CVE-2026-28950", "Notification Services", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127114", lang: "EN" }
    ]
  },
  {
    id: "20260511-007",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple發布macOS Tahoe 26.5安全更新：修補多個核心元件與應用層漏洞，包含權限提升與記憶體相關風險",
    summary: "Apple於2026年5月11日發布macOS Tahoe 26.5安全更新，修補了多個系統核心與應用程式層面的漏洞。本次更新涵蓋了從加速器（Accelerate）到核心（Kernel）等關鍵元件，修補了包括緩衝區溢出（Buffer Overflow）、越界讀取（Out-of-bounds read）、競態條件（Race condition）和使用後釋放（Use after free）等多種記憶體相關漏洞。\n\n受影響的元件包括APFS、ImageIO、CoreMedia、CUPS等。其中，CUPS元件的漏洞（CVE-2026-28915）修補了路徑處理的解析問題，可能導致應用程式獲得root權限；HFS和ImageIO等元件修補了緩衝區溢出，防止惡意檔案導致系統終止或記憶體損壞。\n\n此外，本次更新也修補了多個可能導致應用程式突破沙盒限制（Sandbox）的邏輯問題，並針對GPU Drivers、Kernel等核心層面，修補了可能洩露核心記憶體或造成系統不穩定性的風險。修補建議為所有macOS Tahoe用戶立即更新至26.5版本。",
    tags: ["macOS Tahoe", "Apple", "CVE-2026-28915", "CVE-2026-28925", "核心漏洞", "緩衝區溢出", "沙盒逃逸"],
    title_en: "Apple Releases macOS Tahoe 26.5 Security Update: Patching Multiple Core Component and Application-Layer Vulnerabilities, Including Privilege Escalation and Memory Risks",
    summary_en: "Apple released the macOS Tahoe 26.5 security update on May 11, 2026, patching multiple vulnerabilities at the system core and application layers. This update covers critical components ranging from Accelerate to the Kernel, addressing various memory-related flaws including Buffer Overflow, Out-of-bounds read, Race condition, and Use after free. Affected components include APFS, ImageIO, and CoreMedia, among others. Specifically, a vulnerability in the CUPS component (CVE-2026-28915) patched a path handling parsing issue that could potentially allow an application to gain root privileges; while HFS and ImageIO components patched buffer overflows to prevent malicious files from causing system termination or memory corruption. Furthermore, this update addresses multiple logical issues that could allow applications to bypass Sandbox restrictions, and patches risks at the core level, such as those affecting GPU Drivers and the Kernel, which could potentially leak core memory or cause system instability. All macOS Tahoe users are advised to update immediately to version 26.5.",
    tags_en: ["macOS Tahoe", "Apple", "CVE-2026-28915", "CVE-2026-28925", "Core Vulnerability", "Buffer Overflow", "Sandbox Escape"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127115", lang: "EN" }
    ]
  },
  {
    id: "20260511-008",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 macOS Sequoia 15.7.7 安全更新，修補多項核心元件漏洞，包含提升沙盒與權限控制",
    summary: "Apple 發布 macOS Sequoia 15.7.7 版本，針對多個系統核心元件及框架修補了多項安全漏洞。本次更新涵蓋 APFS、AppleJPEG、CoreMedia、CUPS、HFS、ImageIO、IOKit 等多個模組，修復了緩衝區溢出（Buffer Overflow）、記憶體損壞（Memory Corruption）、競爭條件（Race Condition）等問題。特別值得關注的是 Kernel 層級的修補，修復了多個 CVE，例如 CVE-2026-28954 和 CVE-2026-28908，這些漏洞可能導致應用程式意外終止、讀取或寫入核心記憶體，甚至可能讓應用程式獲得 root 權限。此外，GPU Drivers 和 Icons 等元件也修補了潛在的沙盒逃逸（Sandbox Escape）和權限提升風險。用戶應儘快更新至 macOS Sequoia 15.7.7 版本，以確保系統的穩定性和安全性。",
    tags: ["macOS Sequoia", "Apple", "CVE-2026-28954", "Kernel", "沙盒機制", "安全更新"],
    title_en: "Apple Releases macOS Sequoia 15.7.7 Security Update, Patching Multiple Core Component Vulnerabilities Including Enhanced Sandboxing and Privilege Control",
    summary_en: "Apple has released macOS Sequoia 15.7.7, addressing multiple security vulnerabilities in various system core components and frameworks. This update covers numerous modules, including APFS, AppleJPEG, CoreMedia, CUPS, HFS, ImageIO, and IOKit, fixing issues such as Buffer Overflow, Memory Corruption, and Race Condition. Of particular note are the Kernel-level patches, which fix multiple CVEs, such as CVE-2026-28954 and CVE-2026-28908. These vulnerabilities could potentially lead to application crashes, reading or writing core memory, or even granting applications root privileges. Furthermore, components like GPU Drivers and Icons have been patched for potential Sandbox Escape and privilege escalation risks. Users are advised to update to macOS Sequoia 15.7.7 as soon as possible to ensure system stability and security.",
    tags_en: ["macOS Sequoia", "Apple", "CVE-2026-28954", "Kernel", "Sandboxing", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127116", lang: "EN" }
    ]
  },
  {
    id: "20260511-009",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 macOS Sonoma 14.8.7 安全更新，修補多項核心漏洞，包含提升權限與記憶體寫入風險",
    summary: "Apple 發布 macOS Sonoma 14.8.7 安全更新，修補了多個系統核心與應用程式層面的漏洞。本次更新涵蓋 APFS、AppleJPEG、CoreMedia、CUPS、HFS、ImageIO 等多個元件，修補了包括緩衝區溢出（Buffer Overflow）、記憶體損壞（Memory Corruption）、競爭條件（Race Condition）等問題。其中，在核心層面（Kernel）修補了多個高風險漏洞，包括可能導致應用程式提升 Root 權限、寫入核心記憶體、或繞過 Gatekeeper 檢查的風險。例如，針對 CUPS 的路徑解析問題（CVE-2026-28915）和 HFS 的緩衝區溢出（CVE-2026-28925），皆透過改善輸入驗證和邊界檢查進行修補。使用者應儘快更新至 macOS Sonoma 14.8.7 版本，以修補這些潛在的系統安全風險。",
    tags: ["macOS Sonoma", "Apple", "CVE-2026-28915", "CVE-2026-28925", "Kernel", "安全更新"],
    title_en: "Apple Releases macOS Sonoma 14.8.7 Security Update, Patching Multiple Core Vulnerabilities Including Privilege Escalation and Memory Write Risks",
    summary_en: "Apple has released macOS Sonoma 14.8.7 security update, patching multiple vulnerabilities at both the system core and application levels. This update covers various components including APFS, AppleJPEG, CoreMedia, CUPS, HFS, and ImageIO, fixing issues such as Buffer Overflow, Memory Corruption, and Race Condition. Notably, multiple high-risk vulnerabilities were patched at the Kernel level, including risks that could lead to application Root privilege escalation, core memory writing, or bypassing Gatekeeper checks. For instance, a path resolution issue in CUPS (CVE-2026-28915) and a buffer overflow in HFS (CVE-2026-28925) were patched by improving input validation and boundary checks. Users should update to macOS Sonoma 14.8.7 as soon as possible to mitigate these potential system security risks.",
    tags_en: ["macOS Sonoma", "Apple", "CVE-2026-28915", "CVE-2026-28925", "Kernel", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127117", lang: "EN" }
    ]
  },
  {
    id: "20260511-010",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 tvOS 26.5 安全更新，修補多個核心元件與應用層漏洞，包含記憶體溢出與權限提升風險",
    summary: "Apple 發布 tvOS 26.5 安全更新，適用於所有 Apple TV HD 和 Apple TV 4K 型號。本次更新修補了多個關鍵系統元件的漏洞，涵蓋應用程式層、核心（Kernel）層、以及多媒體處理相關的風險。主要修補內容包括：Accelerate 的 Out-of-bounds read、APFS 的 Buffer overflow、App Intents 的沙盒逃逸邏輯問題，以及 ImageIO、AppleJPEG 等元件處理惡意檔案時可能導致的記憶體損壞或服務拒絕（DoS）風險。在核心層面，修補了多個 CVE，例如涉及 Kernel 的 Out-of-bounds write、Use after free、以及多個可能導致洩露核心記憶體或造成系統崩潰的漏洞。修補建議是所有使用者應立即更新至 tvOS 26.5 版本，以確保設備的安全性。本次更新涵蓋的漏洞類型廣泛，從單純的記憶體處理錯誤到可能影響系統核心的嚴重漏洞，建議使用者留意 Apple 的安全公告。",
    tags: ["Apple", "tvOS", "CVE-2026-28991", "CVE-2026-28959", "Kernel", "ImageIO"],
    title_en: "Apple Releases tvOS 26.5 Security Update to Patch Multiple Core Component and Application Layer Vulnerabilities, Including Memory Overflow and Privilege Escalation Risks",
    summary_en: "Apple has released tvOS 26.5 security updates applicable to all Apple TV HD and Apple TV 4K models. This update patches multiple vulnerabilities in critical system components, covering risks at the application layer, the Kernel layer, and multimedia processing. Key fixes include: Out-of-bounds read in Accelerate, Buffer overflow in APFS, a sandbox escape logic flaw in App Intents, and memory corruption or Denial of Service (DoS) risks that could occur when components like ImageIO and AppleJPEG process malicious files. At the Kernel level, multiple CVEs were patched, such as Out-of-bounds write and Use after free vulnerabilities affecting the Kernel, as well as several vulnerabilities that could lead to core memory leakage or system crashes. The recommendation is that all users immediately update to tvOS 26.5 to ensure device security. The types of vulnerabilities covered in this update are extensive, ranging from simple memory handling errors to severe vulnerabilities that could impact the system core. Users are advised to pay attention to Apple's security announcements.",
    tags_en: ["Apple", "tvOS", "CVE-2026-28991", "CVE-2026-28959", "Kernel", "ImageIO"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127118", lang: "EN" }
    ]
  },
  {
    id: "20260511-011",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 watchOS 26.5 安全更新，修補多項核心與應用層漏洞，包含 Kernel、ImageIO 及 IOHIDFamily 等",
    summary: "Apple 發布 watchOS 26.5 安全更新，旨在保護 Apple Watch Series 6 及更新機型。本次更新修補了多個關鍵漏洞，涵蓋應用層、框架層和作業系統核心（Kernel）層面。受影響的元件包括 Accelerate、APFS、ImageIO、IOHIDFamily 等。漏洞類型包括緩衝區溢出（Buffer Overflow）、越界讀寫（Out-of-bounds Read/Write）、使用後釋放（Use After Free）以及邏輯缺陷等。例如，在 Kernel 層面修補了多個漏洞，修復了應用程式可能洩露核心記憶體或造成系統終止的風險。此外，ImageIO 和 AppleJPEG 也修補了處理惡意圖片或媒體文件時的記憶體相關問題。Apple 強調，為保護用戶，安全問題會在修補或發布補丁後才會公開討論。用戶應儘快更新至 watchOS 26.5 版本以修補這些安全風險。",
    tags: ["Apple Watch", "watchOS", "CVE-2026-xxxx", "Kernel", "ImageIO", "安全更新"],
    title_en: "Apple Releases watchOS 26.5 Security Update to Patch Multiple Core and Application Layer Vulnerabilities, Including Kernel, ImageIO, and IOHIDFamily",
    summary_en: "Apple has released watchOS 26.5 security updates to protect Apple Watch Series 6 and later models. This update patches multiple critical vulnerabilities spanning the application layer, framework layer, and operating system core (Kernel) layer. Affected components include Accelerate, APFS, ImageIO, and IOHIDFamily. Vulnerability types include Buffer Overflow, Out-of-bounds Read/Write, Use After Free, and logic flaws. For instance, multiple Kernel-level vulnerabilities were patched, mitigating risks where applications could leak core memory or cause system crashes. Additionally, ImageIO and AppleJPEG addressed memory-related issues when processing malicious images or media files. Apple emphasized that security issues are discussed publicly only after patches are fixed or released, in order to protect users. Users are advised to update to watchOS 26.5 as soon as possible to mitigate these security risks.",
    tags_en: ["Apple Watch", "watchOS", "CVE-2026-xxxx", "Kernel", "ImageIO", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127119", lang: "EN" }
    ]
  },
  {
    id: "20260511-012",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 visionOS 26.5 安全更新：修補多項核心與應用層級漏洞，包含 Kernel、ImageIO 及服務層面風險",
    summary: "Apple 發布 visionOS 26.5 版本，針對 Apple Vision Pro 的多個核心元件與框架修補了多項安全漏洞。本次更新涵蓋了從應用程式層到作業系統核心（Kernel）的廣泛修補。主要修補內容包括：Kernel 層的緩衝區溢出（CVE-2026-28897）和記憶體讀寫問題（CVE-2026-43654, CVE-2026-28972），這些漏洞可能導致系統終止或核心記憶體洩露。此外，ImageIO 和 AppleJPEG 處理惡意檔案時的記憶體相關問題（如 CVE-2026-28956, CVE-2026-28977）也已修復。其他修補包括 App Intents 的邏輯問題（CVE-2026-28995）、FileProvider 的競態條件（CVE-2026-43659）以及 mDNSResponder 的使用後釋放（CVE-2026-43668）。實務影響上，這些漏洞可能導致服務拒絕（DoS）、應用程式崩潰，甚至在某些情況下允許攻擊者執行惡意操作。建議所有 Apple Vision Pro 用戶應立即更新至 visionOS 26.5 版本以確保系統安全。",
    tags: ["Apple Vision Pro", "visionOS 26.5", "CVE-2026-28897", "Kernel", "ImageIO", "記憶體安全"],
    title_en: "Apple Releases visionOS 26.5 Security Update: Patching Multiple Core and Application-Level Vulnerabilities, Including Kernel, ImageIO, and Service Layer Risks",
    summary_en: "Apple has released visionOS 26.5, which patches multiple security vulnerabilities in various core components and frameworks for the Apple Vision Pro. This update covers extensive patches ranging from the application layer to the operating system kernel (Kernel). Key patches include a kernel-level buffer overflow (CVE-2026-28897) and memory read/write issues (CVE-2026-43654, CVE-2026-28972). These vulnerabilities could potentially lead to system termination or core memory leakage. Furthermore, memory-related issues when ImageIO and AppleJPEG process malicious files (such as CVE-2026-28956, CVE-2026-28977) have also been fixed. Other patches include a logic flaw in App Intents (CVE-2026-28995), a race condition in FileProvider (CVE-2026-43659), and a use-after-free vulnerability in mDNSResponder (CVE-2026-43668). In practical terms, these vulnerabilities could lead to Denial of Service (DoS), application crashes, or, in some cases, allow attackers to execute malicious operations. All Apple Vision Pro users are advised to update immediately to visionOS 26.5 to ensure system security.",
    tags_en: ["Apple Vision Pro", "visionOS 26.5", "CVE-2026-28897", "Kernel", "ImageIO", "Memory Security"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127120", lang: "EN" }
    ]
  },
  {
    id: "20260511-013",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 18.7.7 與 iPadOS 18.7.7 安全更新，修補多個核心元件漏洞",
    summary: "蘋果於 2026 年 3 月 24 日發布 iOS 18.7.7 和 iPadOS 18.7.7 安全更新，修補了多個系統核心元件的漏洞。本次更新涵蓋了 802.1X、AppleKeyStore、Audio、Clipboard、CoreMedia、CoreUtils 和 Crash Reporter 等關鍵系統功能。修補的漏洞包括 CVE-2026-28865（身份驗證問題）、CVE-2026-20637（使用後釋放問題）、CVE-2026-28879（使用後釋放問題）、CVE-2026-20690（越界存取問題）等。實務影響範圍涵蓋網路流量攔截、應用程式意外終止、資料存取、以及服務阻斷等。建議所有用戶應透過自動更新機制，儘快升級至最新版本以獲得保護。此外，文章提醒用戶，若開啟自動更新，可自動修補 DarkSword 相關的網路攻擊漏洞。",
    tags: ["Apple", "iOS 18.7.7", "iPadOS 18.7.7", "CVE-2026-28865", "核心漏洞", "安全更新"],
    title_en: "Apple Releases iOS 18.7.7 and iPadOS 18.7.7 Security Updates to Patch Multiple Core Component Vulnerabilities",
    summary_en: "Apple released iOS 18.7.7 and iPadOS 18.7.7 security updates on March 24, 2026, patching multiple vulnerabilities in core system components. This update covers critical system functions including 802.1X, AppleKeyStore, Audio, Clipboard, CoreMedia, CoreUtils, and Crash Reporter. Patched vulnerabilities include CVE-2026-28865 (authentication issue), CVE-2026-20637 (use-after-release issue), CVE-2026-28879 (use-after-release issue), and CVE-2026-20690 (out-of-bounds access issue). Practical impacts range from network traffic interception, application unexpected termination, data access, and service disruption. All users are advised to upgrade to the latest version via the automatic update mechanism as soon as possible to ensure protection. Furthermore, the article reminds users that enabling automatic updates can automatically patch network attack vulnerabilities related to DarkSword.",
    tags_en: ["Apple", "iOS 18.7.7", "iPadOS 18.7.7", "CVE-2026-28865", "Core Vulnerability", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126793", lang: "EN" }
    ]
  },
  {
    id: "20260511-014",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 26.4 與 iPadOS 26.4 安全更新，修補多項核心漏洞",
    summary: "蘋果於 2026 年 3 月 24 日發布 iOS 26.4 和 iPadOS 26.4 版本，修補了多個系統層級的安全性漏洞。本次更新涵蓋了 802.1X 認證、帳戶管理、App 保護、音訊、基帶、日曆、剪貼簿、核心媒體等多個核心元件。主要的漏洞類型包括授權問題、使用後釋放 (Use-after-free)、型別混淆 (Type confusion)、緩衝區溢出 (Buffer overflow) 和資源耗盡 (Resource exhaustion) 等。例如，CVE-2026-28879 針對音訊元件的型別混淆，可能導致應用程式意外終止；CVE-2026-28875 針對基帶元件的緩衝區溢出，可能造成拒絕服務 (DoS)。用戶應儘快更新至最新版本，以修補這些潛在的遠端攻擊或本地權限提升風險。",
    tags: ["Apple", "iOS 26.4", "iPadOS 26.4", "CVE-2026-28865", "CVE-2026-28879", "核心漏洞"],
    title_en: "Apple Releases iOS 26.4 and iPadOS 26.4 Security Updates, Patching Multiple Core Vulnerabilities",
    summary_en: "Apple released iOS 26.4 and iPadOS 26.4 on March 24, 2026, patching multiple system-level security vulnerabilities. This update covers numerous core components, including 802.1X authentication, account management, App Protection, audio, baseband, calendar, clipboard, and core media. Major vulnerability types include authorization issues, Use-after-free, Type confusion, Buffer overflow, and Resource exhaustion. For example, CVE-2026-28879 addresses a Type confusion vulnerability in the audio component, which could potentially cause unexpected application termination; and CVE-2026-28875 addresses a Buffer overflow in the baseband component, which could lead to Denial of Service (DoS). Users should update to the latest version promptly to mitigate these potential remote attack or local privilege escalation risks.",
    tags_en: ["Apple", "iOS 26.4", "iPadOS 26.4", "CVE-2026-28865", "CVE-2026-28879", "Core Vulnerabilities"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126792", lang: "EN" }
    ]
  },
  {
    id: "20260511-015",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple發布macOS Tahoe 26.4安全更新：修補多個核心元件與應用程式漏洞",
    summary: "Apple於2026年3月24日發布macOS Tahoe 26.4安全更新，修補了多個系統層級與應用程式的漏洞。本次更新涵蓋了802.1X、Accounts、Admin Framework、AppleMobileFileIntegrity、Audio、CoreServices、CUPS等核心元件，修復了包括認證、授權、路徑處理、記憶體管理等問題。具體修補的漏洞包括CVE-2026-28865（認證問題）、CVE-2026-28877（授權問題）、CVE-2026-28823（路徑處理問題）以及多個與AppleMobileFileIntegrity相關的漏洞。實務影響範圍廣泛，從允許應用程式存取敏感用戶資料，到可能導致系統檔案被刪除，甚至在某些情況下可能導致權限提升或服務拒絕。建議所有macOS Tahoe用戶應立即更新至最新版本，以修補這些已知的安全風險。",
    tags: ["Apple", "macOS", "macOS Tahoe", "CVE-2026-28865", "CVE-2026-28877", "CoreServices", "安全更新"],
    title_en: "Apple Releases macOS Tahoe 26.4 Security Update: Patching Multiple Core Component and Application Vulnerabilities",
    summary_en: "Apple released the macOS Tahoe 26.4 security update on March 24, 2026, patching multiple system-level and application vulnerabilities. This update covers core components such as 802.1X, Accounts, Admin Framework, AppleMobileFileIntegrity, Audio, CoreServices, and CUPS, fixing issues related to authentication, authorization, path handling, memory management, and more. Specific vulnerabilities patched include CVE-2026-28865 (authentication issue), CVE-2026-28877 (authorization issue), CVE-2026-28823 (path handling issue), and multiple vulnerabilities related to AppleMobileFileIntegrity. The practical impact is wide-ranging, from allowing applications to access sensitive user data, to potentially causing system files to be deleted, and even leading to privilege escalation or denial of service in certain scenarios. All macOS Tahoe users are advised to update immediately to the latest version to patch these known security risks.",
    tags_en: ["Apple", "macOS", "macOS Tahoe", "CVE-2026-28865", "CVE-2026-28877", "CoreServices", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126794", lang: "EN" }
    ]
  },
  {
    id: "20260511-016",
    trackers: ["os", "security"],
    category: "Apple",
    title: "macOS Sequoia 15.7.5 安全更新發布：修補多項核心元件與應用層漏洞",
    summary: "蘋果公司於 2026 年 3 月 24 日發布 macOS Sequoia 15.7.5 安全更新，修補了多個系統核心與應用程式層面的漏洞。本次更新涵蓋了 802.1X 認證、帳戶管理、Apache、AppleKeyStore、Audio、Calling Framework、CFNetwork 等多個關鍵元件。主要的漏洞類型包括使用後釋放 (Use After Free)、授權問題 (Authorization Issue)、路徑處理錯誤 (Path Handling Issue)、整數溢位 (Integer Overflow) 等。例如，針對 AppleKeyStore 的 CVE-2026-20637，修補了使用後釋放問題，以防止應用程式意外終止系統。此外，CoreServices 針對權限驗證和沙盒機制也進行了強化，修補了可能導致應用程式提升權限或逃逸沙盒的漏洞。修補建議是所有 macOS Sequoia 使用者應立即更新至 15.7.5 版本，以確保系統安全。由於原文未提供 CVSS 分數或具體影響台數，修補建議為立即更新。",
    tags: ["macOS Sequoia", "Apple", "CVE-2026-28865", "Use After Free", "CoreServices", "安全更新"],
    title_en: "macOS Sequoia 15.7.5 Security Update Released: Patching Multiple Core Component and Application Layer Vulnerabilities",
    summary_en: "Apple released macOS Sequoia 15.7.5 on March 24, 2026, patching multiple vulnerabilities at the system core and application layers. This update covers several critical components, including 802.1X authentication, account management, Apache, AppleKeyStore, Audio, Calling Framework, and CFNetwork. Major vulnerability types include Use After Free, Authorization Issue, Path Handling Issue, and Integer Overflow. For example, CVE-2026-20637, targeting AppleKeyStore, patched a Use After Free issue to prevent applications from unexpectedly terminating the system. Furthermore, CoreServices was strengthened regarding permission validation and sandbox mechanisms, patching vulnerabilities that could allow applications to elevate privileges or escape the sandbox. The patch recommendation is that all macOS Sequoia users should immediately update to version 15.7.5 to ensure system security. Since the original text did not provide CVSS scores or specific impact numbers, the patch recommendation is immediate update.",
    tags_en: ["macOS Sequoia", "Apple", "CVE-2026-28865", "Use After Free", "CoreServices", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126795", lang: "EN" }
    ]
  },
  {
    id: "20260511-017",
    trackers: ["os", "security"],
    category: "Apple",
    title: "macOS Sonoma 14.8.5 安全更新發布：修補多項核心元件與應用程式漏洞",
    summary: "蘋果公司於 2026 年 3 月 24 日發布 macOS Sonoma 14.8.5 安全更新，修補了多個系統層級與應用程式的漏洞。本次更新涵蓋了 802.1X 認證、帳號管理、Apache、AppleKeyStore、Audio、CoreServices、CUPS 等多個核心元件。主要的漏洞類型包括授權問題（Authorization Issue）、使用後釋放（Use After Free）、整數溢位（Integer Overflow）、以及權限提升（Privilege Escalation）等。例如，CoreServices 存在一個允許應用程式獲得提升權限的驗證問題，以及 CUPS 存在一個可能導致應用程式獲得 root 權限的競態條件（Race Condition）。修補建議所有 macOS Sonoma 使用者應立即升級至 14.8.5 版本，以確保系統安全，避免遭受未公開的攻擊。本次更新亦修補了多個第三方開源元件（如 Apache 和 curl）的漏洞，提醒開發者和資安人員關注系統供應鏈的安全性。",
    tags: ["macOS Sonoma", "Apple", "CVE-2026-28865", "CoreServices", "CUPS", "Use After Free", "安全更新"],
    title_en: "macOS Sonoma 14.8.5 Security Update Released: Patching Multiple Core Component and Application Vulnerabilities",
    summary_en: "Apple released macOS Sonoma 14.8.5 security update on March 24, 2026, patching multiple vulnerabilities in system-level and application components. This update covers several core components, including 802.1X authentication, account management, Apache, AppleKeyStore, Audio, CoreServices, and CUPS. Major vulnerability types include Authorization Issues, Use After Free, Integer Overflow, and Privilege Escalation. For instance, CoreServices contains an authentication issue that allows applications to gain elevated privileges, and CUPS has a race condition that could allow an application to gain root privileges. The patch advises all macOS Sonoma users to immediately upgrade to version 14.8.5 to ensure system security and prevent exposure to undisclosed attacks. This update also patches multiple vulnerabilities in third-party open-source components (such as Apache and curl), reminding developers and security personnel to pay attention to system supply chain security.",
    tags_en: ["macOS Sonoma", "Apple", "CVE-2026-28865", "CoreServices", "CUPS", "Use After Free", "Security Update"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126796", lang: "EN" }
    ]
  },
  {
    id: "20260511-018",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 tvOS 26.4 安全更新：修補多項核心漏洞，涵蓋 WebKit、Kernel 及授權服務",
    summary: "Apple 發布 tvOS 26.4 安全更新，旨在修補多個關鍵的作業系統漏洞，適用於所有 Apple TV HD 和 Apple TV 4K 型號。本次更新涵蓋了從網路認證（802.1X）到核心層級（Kernel）的廣泛修補。主要的漏洞包括：在 WebKit 中修復了惡意網頁內容可能繞過內容安全策略（CSP）的問題（CVE-2026-20665），以及在 Kernel 層級修復了多個記憶體處理問題，例如使用後釋放（Use-after-free）和記憶體寫入（CVE-2026-20698, CVE-2026-28867）。此外，還修補了 CoreUtils 中的空指標解引用（Null pointer dereference）導致的 DoS 漏洞（CVE-2026-28886），以及 GeoServices 的資訊洩漏問題（CVE-2026-28870）。用戶應立即透過系統更新至 tvOS 26.4 版本，以確保設備的安全性。",
    tags: ["tvOS", "Apple TV", "CVE-2026-20665", "Kernel", "WebKit", "安全更新", "資訊洩漏"],
    title_en: "Apple Releases tvOS 26.4 Security Update: Patching Multiple Core Vulnerabilities in WebKit, Kernel, and Licensed Services",
    summary_en: "Apple has released a tvOS 26.4 security update designed to patch multiple critical operating system vulnerabilities, applicable to all Apple TV HD and Apple TV 4K models. This update includes extensive patches ranging from network authentication (802.1X) to the core Kernel layer. Key vulnerabilities addressed include: a fix in WebKit for potential malicious web content bypassing Content Security Policy (CSP) (CVE-2026-20665), and multiple memory handling issues in the Kernel layer, such as Use-after-free and memory write vulnerabilities (CVE-2026-20698, CVE-2026-28867). Additionally, it patches a Denial-of-Service (DoS) vulnerability in CoreUtils caused by Null pointer dereference (CVE-2026-28886), and an information leakage issue in GeoServices (CVE-2026-28870). Users should immediately update to tvOS 26.4 via system updates to ensure device security.",
    tags_en: ["tvOS", "Apple TV", "CVE-2026-20665", "Kernel", "WebKit", "Security Update", "Information Leakage"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126797", lang: "EN" }
    ]
  },
  {
    id: "20260511-019",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 watchOS 26.4 安全更新，修補多項核心與應用層面漏洞，包含 Kernel、Audio 及 Keychain 相關風險",
    summary: "Apple 發布 watchOS 26.4 安全更新，旨在修補多個系統核心與應用程式層面的安全漏洞。本次更新涵蓋了從 802.1X 認證問題、Audio 處理惡意內容的 Use-after-free 漏洞，到 Kernel 層級的記憶體洩漏、權限提升及系統終止風險。具體修補的漏洞包括 CVE-2026-28868（Kernel 記憶體洩漏）、CVE-2026-20698（Kernel Use-after-free）以及涉及 Keychain 存取和修改的漏洞（CVE-2026-28864）。這些漏洞的攻擊向量範圍廣，從需要特權網路位置的攻擊者，到本地物理存取攻擊者，實務影響包括敏感資料洩露、系統崩潰或服務拒絕。Apple 建議所有使用 Apple Watch Series 6 及更新機型的用戶，應立即透過系統更新至 watchOS 26.4 或更高版本，以確保設備安全。",
    tags: ["Apple", "watchOS", "CVE-2026-28868", "Kernel", "安全更新", "Keychain"],
    title_en: "Apple Releases watchOS 26.4 Security Update to Patch Multiple Core and Application-Level Vulnerabilities, Including Risks in Kernel, Audio, and Keychain",
    summary_en: "Apple has released watchOS 26.4 security updates aimed at patching multiple security vulnerabilities at both the system core and application levels. This update addresses issues ranging from 802.1X authentication problems and Use-after-free vulnerabilities in Audio content processing, to memory leaks, privilege escalation, and system termination risks at the Kernel level. Specific patched vulnerabilities include CVE-2026-28868 (Kernel memory leak), CVE-2026-20698 (Kernel Use-after-free), and vulnerabilities involving Keychain access and modification (CVE-2026-28864). The attack vectors for these vulnerabilities are broad, ranging from attackers requiring privileged network positions to local physical attackers. Practical impacts include sensitive data leakage, system crashes, or denial of service. Apple recommends that all users of Apple Watch Series 6 and later models immediately update to watchOS 26.4 or higher to ensure device security.",
    tags_en: ["Apple", "watchOS", "CVE-2026-28868", "Kernel", "Security Update", "Keychain"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/126798", lang: "EN" }
    ]
  },
  {
    id: "20260511-020",
    trackers: ["os", "security"],
    category: "Android",
    title: "Meari IoT SDK 內嵌硬編碼密鑰：CVE-2026-33362 揭露多個安全關鍵密鑰",
    summary: "本漏洞（CVE-2026-33362）指出 Meari IoT SDK 在多個嵌入式設備和應用程式中存在硬編碼密鑰的嚴重安全缺陷。受影響範圍包括 CloudEdge 5.5.0 (build 220)、Arenti 1.8.1 (build 220)，以及所有版本小於等於 1.8.x 的白牌 Android 應用程式。攻擊者可透過此漏洞獲取多個安全關鍵密鑰，包括 API 簽名材料、密碼傳輸金鑰和服務存取金鑰。該漏洞的技術根源是「使用硬編碼加密金鑰」（CWE-321），屬於高機密性（C:H）的缺陷。由於這些密鑰是硬編碼且共享的，攻擊者在未經授權的情況下，可能對系統進行高權限的存取和操作。修補建議是開發商必須立即審查並移除所有硬編碼的密鑰，改採安全的金鑰管理機制，並更新受影響的 SDK 和應用程式版本。",
    tags: ["CVE-2026-33362", "Meari IoT SDK", "硬編碼密鑰", "Android", "CloudEdge", "Arenti"],
    title_en: "Meari IoT SDK Embedded Hardcoded Keys: CVE-2026-33362 Exposes Multiple Security Critical Keys",
    summary_en: "This vulnerability (CVE-2026-33362) points to a severe security flaw involving hardcoded keys within the Meari IoT SDK across multiple embedded devices and applications. The affected scope includes CloudEdge 5.5.0 (build 220), Arenti 1.8.1 (build 220), and all white-label Android applications with versions less than or equal to 1.8.x. Attackers can exploit this vulnerability to obtain multiple security critical keys, including API signing materials, password transmission keys, and service access keys. The technical root cause of this vulnerability is \"Using Hardcoded Cryptographic Keys\" (CWE-321), classified as High Confidentiality (C:H) defect. Because these keys are hardcoded and shared, attackers may gain high-privilege access and perform unauthorized operations on the system. The recommended remediation is that developers must immediately review and remove all hardcoded keys, adopting a secure key management mechanism, and updating the affected SDK and application versions.",
    tags_en: ["CVE-2026-33362", "Meari IoT SDK", "Hardcoded Keys", "Android", "CloudEdge", "Arenti"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-33362", lang: "EN" }
    ]
  }
];
