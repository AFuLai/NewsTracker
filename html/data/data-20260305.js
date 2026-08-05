// data-20260305.js — 2026-03-05
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-03-05"] = [
  {
    id: "20260305-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "深入探討變異語法模糊測試（Mutational Grammar Fuzzing）的缺陷與優化技巧",
    summary: "本文介紹了一種進階的模糊測試技術——變異語法模糊測試（Mutational Grammar Fuzzing）。此技術利用預定義的語法結構來生成樣本，確保即使經過變異（mutation），樣本的結構仍能符合語法規則。在覆蓋率引導的語法模糊測試中，如果變異後的樣本觸發了新的程式碼覆蓋範圍，該樣本會被儲存並用於後續變異。雖然此方法已被證明能發現複雜的漏洞，例如 XSLT 實作和 JIT 引擎的錯誤，但作者指出，對於一般使用者而言，此進階模糊測試方法存在一些不顯而易見的缺陷。文章隨後將詳細闡述這些缺陷，並提出了一種簡單但有效的技巧來對抗這些潛在的不足。",
    tags: ["模糊測試", "Fuzzing", "變異語法", "Mutational Grammar", "程式安全", "漏洞發現"],
    title_en: "In-Depth Exploration of Defects and Optimization Techniques in Mutational Grammar Fuzzing",
    summary_en: "This article introduces an advanced fuzz testing technique: Mutational Grammar Fuzzing. This technique utilizes predefined grammatical structures to generate samples, ensuring that even after mutation, the samples' structure adheres to grammatical rules. In coverage-guided grammar fuzzing, if a mutated sample triggers new code coverage, that sample is stored and used for subsequent mutations. Although this method has been proven to discover complex vulnerabilities, such as those in XSLT implementations and JIT engines, the author points out that this advanced fuzz testing method has several subtle defects for general users. The article subsequently elaborates on these defects and proposes a simple yet effective technique to counteract these potential shortcomings.",
    tags_en: ["Fuzzing", "Mutational Grammar", "Code Security", "Vulnerability Discovery"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/03/mutational-grammar-fuzzing.html", lang: "EN" }
    ]
  },
  {
    id: "20260305-002",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端面臨 CVE-2026-30791 漏洞：透過不安全的加密演算法洩露敏感資料",
    summary: "RustDesk 客戶端（適用於 Windows、macOS、Linux、iOS、Android 及 WebClient）存在一個名為 CVE-2026-30791 的漏洞。此漏洞屬於「使用有缺陷或高風險的加密演算法」（CWE-327），允許攻擊者透過不安全的處理機制，從程式碼中的特定檔案（如 flutter/lib/common.Dart）或功能（如配置匯入、URI 處理）中，擷取嵌入的敏感資料。該漏洞影響所有版本低於或等於 1.4.5 的 RustDesk 客戶端。根據 CVSS 3.1 評分，此漏洞的權限要求為低（PR:N），複雜度為低（AC:L），嚴重性評估為高（C:H）。實務上，用戶應立即升級至 1.4.5 以上版本，以修補此加密處理上的缺陷，避免敏感資料外洩。開發者應特別注意處理配置匯入和 URI 處理時的加密安全機制。",
    tags: ["RustDesk", "CVE-2026-30791", "加密演算法", "敏感資料洩露", "跨平台", "CWE-327"],
    title_en: "RustDesk Client Faces CVE-2026-30791 Vulnerability: Sensitive Data Leakage via Insecure Cryptographic Algorithm",
    summary_en: "The RustDesk client (available for Windows, macOS, Linux, iOS, Android, and WebClient) contains a vulnerability identified as CVE-2026-30791. This vulnerability falls under 'Using a Broken or Risky Cryptographic Algorithm' (CWE-327), allowing attackers to extract embedded sensitive data from specific files (such as flutter/lib/common.Dart) or functionalities (such as configuration import or URI processing) through insecure handling mechanisms. The vulnerability affects all versions of the RustDesk client lower than or equal to 1.4.5. Based on the CVSS 3.1 scoring, the vulnerability requires low privileges (PR:N), has low complexity (AC:L), and is assessed as high severity (C:H). Practically, users should immediately upgrade to version 1.4.5 or higher to patch this cryptographic handling flaw and prevent sensitive data leakage. Developers should pay special attention to the cryptographic security mechanisms when handling configuration imports and URI processing.",
    tags_en: ["RustDesk", "CVE-2026-30791", "Cryptographic Algorithm", "Sensitive Data Leakage", "Cross-platform", "CWE-327"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30791", lang: "EN" }
    ]
  },
  {
    id: "20260305-003",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端存在權限濫用漏洞 (CVE-2026-30783)，影響多平台版本 1.4.5 及以下",
    summary: "本漏洞CVE-2026-30783存在於RustDesk Client的客戶端程式碼中，影響範圍涵蓋 Windows、macOS、Linux、iOS、Android、WebClient 等多個平台版本，特別是版本 1.4.5 及以下。該漏洞屬於權限濫用（Privilege Abuse）類型，與客戶端的訊號傳遞、API 同步迴圈和配置管理模組相關。根據CVSS v3.1評估，攻擊向量為網路（AV:N），權限要求為無（PR:N），但機密性、完整性與可用性均為高風險（C:H/I:H/A:H）。由於其影響範圍廣泛且攻擊門檻低，使用者應立即升級至最新版本，以修補此嚴重漏洞。建議開發者應特別關注客戶端配置處理和API同步邏輯的安全性加固。",
    tags: ["RustDesk", "CVE-2026-30783", "權限濫用", "多平台", "客戶端", "資安漏洞"],
    title_en: "RustDesk Client Contains Privilege Abuse Vulnerability (CVE-2026-30783), Affecting Multi-Platform Versions 1.4.5 and Below",
    summary_en: "This vulnerability, CVE-2026-30783, exists in the client-side code of RustDesk Client. The affected scope covers multiple platforms, including Windows, macOS, Linux, iOS, Android, and WebClient, specifically versions 1.4.5 and below. This vulnerability is classified as Privilege Abuse and relates to the client's signal transmission, API synchronization loop, and configuration management modules. According to the CVSS v3.1 assessment, the attack vector is Network (AV:N) and the required privileges are None (PR:N), but the impact on Confidentiality, Integrity, and Availability is all High (C:H/I:H/A:H). Due to its wide impact scope and low attack barrier, users should immediately upgrade to the latest version to patch this critical vulnerability. Developers are advised to pay special attention to strengthening the security of client configuration handling and API synchronization logic.",
    tags_en: ["RustDesk", "CVE-2026-30783", "Privilege Abuse", "Multi-Platform", "Client", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30783", lang: "EN" }
    ]
  },
  {
    id: "20260305-004",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端面臨 CVE-2026-30789 漏洞：透過會話重放與密碼雜湊弱點進行身份驗證繞過",
    summary: "RustDesk 客戶端（適用於 Windows、macOS、Linux、iOS、Android）存在一項名為 CVE-2026-30789 的嚴重漏洞。此漏洞允許攻擊者利用會話重放（Session Replay）和密碼雜湊計算強度不足的問題，在客戶端登入和對等身份驗證模組中進行身份驗證繞過。具體而言，漏洞與程式檔案 src/client.Rs 以及 hash_password() 函式和登入證明建構流程相關。受影響的版本為 RustDesk Client 1.4.5 及更早版本。此漏洞的 CVSS 3.1 分數為 9.8，攻擊向量為網路（AV:N），攻擊複雜度為低（AC:L），且可導致高機密性（C:H）、高完整性（I:H）和高可用性（A:H）的影響。建議使用者應立即升級至修復此漏洞的最新版本，以防止未經授權的會話重放攻擊。",
    tags: ["RustDesk", "CVE-2026-30789", "身份驗證繞過", "會話重放", "密碼雜湊", "跨平台"],
    title_en: "RustDesk Client Faces CVE-2026-30789 Vulnerability: Authentication Bypass via Session Replay and Weak Password Hashing",
    summary_en: "The RustDesk Client (available for Windows, macOS, Linux, iOS, and Android) contains a critical vulnerability designated as CVE-2026-30789. This vulnerability allows attackers to bypass authentication in the client login and peer authentication modules by exploiting session replay and insufficient password hashing strength. Specifically, the vulnerability relates to the file src/client.rs, and the hash_password() function and login credential construction process. Affected versions include RustDesk Client 1.4.5 and earlier. This vulnerability has a CVSS 3.1 score of 9.8, with an Attack Vector (AV) of Network (N), Attack Complexity (AC) of Low (L), and can lead to High Confidentiality (C:H), High Integrity (I:H), and High Availability (A:H) impact. Users are advised to immediately upgrade to the latest version that patches this vulnerability to prevent unauthorized session replay attacks.",
    tags_en: ["RustDesk", "CVE-2026-30789", "Authentication Bypass", "Session Replay", "Password Hashing", "Cross-platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30789", lang: "EN" }
    ]
  },
  {
    id: "20260305-005",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端面臨 CVE-2026-30792 漏洞：Man-in-the-Middle 攻擊可操縱應用程式 API 訊息",
    summary: "RustDesk 客戶端在多個平台（Windows、macOS、Linux、iOS、Android、WebClient）上存在 CVE-2026-30792 漏洞。此漏洞允許攻擊者透過 Man-in-the-Middle (MITM) 攻擊，操縱應用程式 API 訊息。漏洞涉及程式檔案 `src/hbbs_http/sync.Rs` 和 `hbb_common/src/config.Rs`，特別是 `Strategy merge loop` 和 `Config::set_options()` 等程序。受影響版本為 RustDesk Client 1.4.5 及更早版本。根據 CVSS 3.1 評分，此漏洞的攻擊向量為網路（AV:N），攻擊複雜度為高（AC:H），但權限要求為低（PR:N），可導致高機密性（C:H）、高完整性（I:H）和高可用性（A:H）的影響。建議使用者立即升級到修復此漏洞的最新版本，以防止資料被竊取或系統被惡意控制。",
    tags: ["RustDesk", "CVE-2026-30792", "Man-in-the-Middle", "應用程式API", "跨平台", "資安漏洞"],
    title_en: "RustDesk Client Affected by CVE-2026-30792 Vulnerability: Man-in-the-Middle Attack Can Manipulate Application API Messages",
    summary_en: "The RustDesk Client has a vulnerability, CVE-2026-30792, across multiple platforms (Windows, macOS, Linux, iOS, Android, WebClient). This vulnerability allows an attacker to manipulate application API messages via a Man-in-the-Middle (MITM) attack. The vulnerability affects the code files `src/hbbs_http/sync.Rs` and `hbb_common/src/config.Rs`, specifically involving procedures such as `Strategy merge loop` and `Config::set_options()`. Affected versions include RustDesk Client 1.4.5 and earlier. According to the CVSS 3.1 scoring, the attack vector is Network (AV:N), the attack complexity is High (AC:H), but the required privileges are None (PR:N), potentially leading to High Confidentiality (C:H), High Integrity (I:H), and High Availability (A:H) impact. Users are advised to immediately upgrade to the latest version that fixes this vulnerability to prevent data theft or malicious system control.",
    tags_en: ["RustDesk", "CVE-2026-30792", "Man-in-the-Middle", "Application API", "Cross-platform", "Security Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30792", lang: "EN" }
    ]
  },
  {
    id: "20260305-006",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端面臨 CSRF 漏洞：跨平台版本可導致權限提升",
    summary: "RustDesk 客戶端（rustdesk-client）存在一項 CVE-2026-30793 漏洞，屬於跨站請求偽造（CSRF）類型。此漏洞影響範圍廣泛，涵蓋 Windows、macOS、Linux、iOS 和 Android 等多個平台，且涉及 Flutter URI 方案處理器和 FFI 橋接模組。攻擊者可利用此漏洞達成權限提升（Privilege Escalation）。該漏洞與程式檔案 `flutter/lib/common.Dart`、`src/flutter_ffi.Rs` 以及處理 `rustdesk://password/` 協定和 `bind.MainSetPermanentPassword()` 相關的程序流程有關。受影響版本為 RustDesk Client 1.4.5 及更早版本。建議使用者應立即更新至修復此漏洞的最新版本，以避免遭受未經授權的權限提升攻擊。CVSS 3.1 評分顯示，攻擊向量為網路（AV:N），權限要求為無（PR:N），使用者互動為無（UI:N），嚴重性為高（High）。",
    tags: ["RustDesk", "CVE-2026-30793", "CSRF", "權限提升", "Flutter", "跨平台"],
    title_en: "RustDesk Client Faces CSRF Vulnerability: Cross-Platform Versions May Lead to Privilege Escalation",
    summary_en: "The RustDesk Client (rustdesk-client) contains a CVE-2026-30793 vulnerability, classified as Cross-Site Request Forgery (CSRF). This vulnerability affects multiple platforms, including Windows, macOS, Linux, iOS, and Android, and involves the Flutter URI scheme handler and FFI bridging module. Attackers can exploit this vulnerability to achieve Privilege Escalation. The flaw is related to the program flow involving the files `flutter/lib/common.Dart`, `src/flutter_ffi.Rs`, and the handling of the `rustdesk://password/` protocol and the `bind.MainSetPermanentPassword()` function. Affected versions are RustDesk Client 1.4.5 and earlier. Users are advised to immediately update to the latest version that patches this vulnerability to prevent unauthorized privilege escalation attacks. The CVSS 3.1 score indicates that the attack vector is Network (AV:N), the required privileges are None (PR:N), user interaction is None (UI:N), and the severity is High.",
    tags_en: ["RustDesk", "CVE-2026-30793", "CSRF", "Privilege Escalation", "Flutter", "Cross-Platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30793", lang: "EN" }
    ]
  },
  {
    id: "20260305-007",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk 客戶端存在憑證驗證不當漏洞 (CVE-2026-30794)，可能遭中間人攻擊",
    summary: "RustDesk 客戶端在處理 HTTP API 和 TLS 傳輸模組時，存在憑證驗證不當（Improper Certificate Validation）的漏洞，編號為 CVE-2026-30794。此漏洞允許攻擊者執行中間人攻擊（AiTM）。受影響的版本範圍為 RustDesk Client 1.4.5 及以下版本，影響平台涵蓋 Windows、macOS、Linux、iOS 和 Android 等多個作業系統。技術細節指出，漏洞與程式檔案 `src/hbbs_http/http_client.rs` 和 TLS 重試機制中的 `danger_accept_invalid_certs(true)` 相關。由於此漏洞的攻擊向量為網路（AV:N），且可能導致高機密性（C:H）、高完整性（I:H）和高可用性（A:H）的影響，實務上極具風險。建議使用者應立即升級至 RustDesk Client 1.4.5 以上版本，以修補此安全缺陷。",
    tags: ["RustDesk", "CVE-2026-30794", "憑證驗證", "中間人攻擊", "TLS", "多平台"],
    title_en: "RustDesk Client has Improper Certificate Validation Vulnerability (CVE-2026-30794), Potentially Susceptible to Man-in-the-Middle Attacks",
    summary_en: "The RustDesk Client contains an Improper Certificate Validation vulnerability when handling HTTP API and TLS transmission modules, identified as CVE-2026-30794. This vulnerability allows attackers to execute a Man-in-the-Middle (AiTM) attack. The affected version range is RustDesk Client 1.4.5 and earlier, impacting multiple operating systems including Windows, macOS, Linux, iOS, and Android. Technical details indicate that the vulnerability is related to the file `src/hbbs_http/http_client.rs` and the `danger_accept_invalid_certs(true)` function within the TLS retry mechanism. Given that the attack vector is network (AV:N), and it can potentially lead to high confidentiality (C:H), high integrity (I:H), and high availability (A:H) impact, this flaw poses extreme risk in practice. Users are advised to immediately upgrade to RustDesk Client 1.4.5 or later versions to patch this security defect.",
    tags_en: ["RustDesk", "CVE-2026-30794", "Certificate Validation", "Man-in-the-Middle Attack", "TLS", "Multi-platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30794", lang: "EN" }
    ]
  },
  {
    id: "20260305-008",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk Client 存在明文傳輸敏感資訊漏洞，可能遭竊取密碼與聯絡人資料",
    summary: "RustDesk Client 在處理心跳同步循環模組（Heartbeat sync loop modules）時，存在 CVE-2026-30795 漏洞。此漏洞屬於「明文傳輸敏感資訊」（Cleartext Transmission of Sensitive Information），允許攻擊者透過嗅探攻擊（Sniffing Attacks）竊取用戶的敏感資料。受影響版本為 RustDesk Client 1.4.5 及以下版本，且漏洞與程式檔案 `src/hbbs_http/sync.Rs` 以及心跳 JSON 負載建構（包含預設聯絡人帳冊密碼）有關。此漏洞的 CVSS 3.1 分數為高風險（High），攻擊向量為網路（AV:N），控制難度低（AC:L），且無需用戶互動（UI:N）。建議使用者應立即升級至修復此漏洞的 RustDesk Client 版本，以防止敏感資料被竊取。",
    tags: ["RustDesk", "CVE-2026-30795", "明文傳輸", "嗅探攻擊", "資訊安全", "客戶端"],
    title_en: "RustDesk Client has cleartext transmission vulnerability, potentially allowing theft of passwords and contact data",
    summary_en: "The RustDesk Client contains a vulnerability, CVE-2026-30795, within its Heartbeat sync loop modules. This vulnerability is classified as 'Cleartext Transmission of Sensitive Information,' allowing attackers to steal sensitive user data through Sniffing Attacks. Affected versions include RustDesk Client 1.4.5 and earlier. The vulnerability is associated with the file `src/hbbs_http/sync.Rs` and the heartbeat JSON payload construction (which includes default contact book passwords). This vulnerability has a CVSS 3.1 score of High, with an Attack Vector of Network (AV:N), Low Attack Complexity (AC:L), and no User Interaction required (UI:N). Users are advised to immediately upgrade to the patched RustDesk Client version to prevent sensitive data theft.",
    tags_en: ["RustDesk", "CVE-2026-30795", "Cleartext Transmission", "Sniffing Attacks", "Information Security", "Client"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30795", lang: "EN" }
    ]
  },
  {
    id: "20260305-009",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "RustDesk Client 存在缺失授權漏洞 (CVE-2026-30797)，允許透過中間人攻擊操縱應用程式 API 訊息",
    summary: "RustDesk Client 在其跨平台版本（Windows、macOS、Linux、iOS、Android）中存在一個「缺失授權」（Missing Authorization）的漏洞，編號為 CVE-2026-30797。此漏洞主要影響透過 Flutter URI scheme handler 和 `importConfig()` 程式例程匯入的配置模組。攻擊者可利用此漏洞進行中間人攻擊（Man-in-the-Middle），從而操縱應用程式的 API 訊息。受影響的版本為 RustDesk Client 1.4.5 及更早版本。此漏洞的技術細節與程式碼文件 `flutter/lib/common.Dart` 相關。修補建議是立即升級至 RustDesk Client 1.4.5 以上版本，以修復此缺失授權的風險。",
    tags: ["RustDesk", "CVE-2026-30797", "缺失授權", "中間人攻擊", "Flutter", "跨平台"],
    title_en: "RustDesk Client has Missing Authorization Vulnerability (CVE-2026-30797), Allowing API Message Manipulation via Man-in-the-Middle Attack",
    summary_en: "The RustDesk Client, across its cross-platform versions (Windows, macOS, Linux, iOS, Android), contains a 'Missing Authorization' vulnerability, designated as CVE-2026-30797. This vulnerability primarily affects configuration modules imported via the Flutter URI scheme handler and the `importConfig()` procedure. An attacker can exploit this vulnerability to perform a Man-in-the-Middle attack, thereby manipulating the application's API messages. Affected versions include RustDesk Client 1.4.5 and earlier. The technical details of this vulnerability are related to the code file `flutter/lib/common.Dart`. The recommended fix is to immediately upgrade to RustDesk Client 1.4.5 or later to mitigate this Missing Authorization risk.",
    tags_en: ["RustDesk", "CVE-2026-30797", "Missing Authorization", "Man-in-the-Middle Attack", "Flutter", "Cross-platform"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30797", lang: "EN" }
    ]
  }
];
