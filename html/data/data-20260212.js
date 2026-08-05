// data-20260212.js — 2026-02-12
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-12"] = [
  {
    id: "20260212-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "深入解析 Windows 管理員保護機制：揭示 UI 存取權限的歷史漏洞與修復路徑",
    summary: "本文深入探討 Windows 系統中「管理員保護」（Administrator Protection）功能的底層機制，特別聚焦於其核心問題——UI 存取權限（UI Access）。作者指出，在 Windows Vista 之前，任何在使用者桌面運行的程序都能控制其他窗口，這使得特權使用者（如 SYSTEM）在顯示使用者介面時，容易被低權限使用者控制，形成「Shatter Attack」的風險。這類漏洞本質上是 UAC（使用者帳戶控制）機制長期以來未被充分關注的缺陷。作者提到，在研究過程中，他發現了多個繞過該新功能的漏洞，但這些問題現已全部修復。文章重點闡述了 UI 存取權限的根本缺陷，並說明了系統如何透過修復這些底層問題來強化作業系統的安全性。",
    tags: ["Windows", "UAC", "管理員保護", "UI Access", "Shatter Attack", "Windows Vista"],
    title_en: "In-Depth Analysis of Windows Administrator Protection Mechanism: Revealing Historical Vulnerabilities and Remediation Paths for UI Access",
    summary_en: "This article deeply explores the underlying mechanisms of the 'Administrator Protection' feature within Windows systems, focusing particularly on its core issue: UI Access. The author points out that prior to Windows Vista, any program running on the user's desktop could control other windows, making it easy for low-privilege users to control the display of the user interface, even when running with elevated privileges (such as SYSTEM). This created a risk known as the 'Shatter Attack.' Such vulnerabilities are fundamentally flaws in the UAC (User Account Control) mechanism that have historically been insufficiently addressed. The author mentions discovering multiple vulnerabilities that bypassed this feature during research, but notes that these issues have since been fully patched. The article emphasizes the fundamental flaws in UI Access and explains how the operating system strengthens its security by fixing these underlying problems.",
    tags_en: ["Windows", "UAC", "Administrator Protection", "UI Access", "Shatter Attack", "Windows Vista"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/02/windows-administrator-protection.html", lang: "EN" }
    ]
  },
  {
    id: "20260212-002",
    trackers: ["os", "security"],
    category: "Android",
    title: "Galaxy FDS Android SDK 存在 TLS 主機名稱驗證繞過漏洞，遭中間人攻擊竊取憑證與資料",
    summary: "小米（Xiaomi）的 Galaxy FDS Android SDK (XiaoMi/galaxy-fds-sdk-android) 版本 3.0.8 及更早版本，在預設啟用 HTTPS 的情況下，存在 TLS 主機名稱驗證（hostname verification）被禁用之漏洞。此漏洞發生在 SDK 內部 `GalaxyFDSClientImpl.createHttpClient()` 函式中，該函式使用 `SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER` 配置 Apache HttpClient，允許接受任何有效的 TLS 憑證，即使憑證的主機名稱與實際服務端不匹配。由於 HTTPS 預設啟用，所有使用此 SDK 且未修改預設配置的應用程式都可能受到影響。攻擊者可利用此漏洞進行中間人攻擊（Man-in-the-Middle, MiTM），攔截並修改 SDK 與小米 FDS 雲端儲存端點之間的通訊，從而可能洩露身份驗證憑證、檔案內容和 API 回應等敏感資料。由於該開源專案已達到生命週期終止（end-of-life），建議開發者應立即升級或遷移至支援安全 TLS 配置的替代 SDK 版本，或採用更安全的通訊協議。",
    tags: ["Android", "Galaxy FDS SDK", "TLS", "中間人攻擊", "CVE-2026-26214", "Xiaomi"],
    title_en: "Galaxy FDS Android SDK has TLS hostname verification bypass vulnerability, susceptible to Man-in-the-Middle attacks to steal credentials and data",
    summary_en: "Xiaomi's Galaxy FDS Android SDK (XiaoMi/galaxy-fds-sdk-android) versions 3.0.8 and earlier contain a vulnerability where TLS hostname verification is disabled, even when HTTPS is enabled by default. This vulnerability resides in the SDK's internal `GalaxyFDSClientImpl.createHttpClient()` function, which configures Apache HttpClient using `SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER`. This allows the acceptance of any valid TLS certificate, even if the certificate's hostname does not match the actual service endpoint. Since HTTPS is enabled by default, all applications using this SDK without modifying the default configuration may be affected. An attacker can exploit this vulnerability to perform a Man-in-the-Middle (MiTM) attack, intercepting and modifying communication between the SDK and the Xiaomi FDS cloud storage endpoint. This could potentially leak sensitive data such as identity credentials, file contents, and API responses. Given that this open-source project has reached end-of-life, developers are advised to immediately upgrade or migrate to an alternative SDK version that supports secure TLS configurations, or adopt a more secure communication protocol.",
    tags_en: ["Android", "Galaxy FDS SDK", "TLS", "Man-in-the-Middle attack", "CVE-2026-26214", "Xiaomi"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-26214", lang: "EN" }
    ]
  }
];
