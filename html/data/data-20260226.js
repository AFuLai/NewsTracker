// data-20260226.js — 2026-02-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-26"] = [
  {
    id: "20260226-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "深入分析 GetProcessHandleFromHwnd API：揭示 UAC 繞過與進程句柄竊取機制",
    summary: "本文深入探討了 Windows API 中的 GetProcessHandleFromHwnd 函數。作者指出，此 API 的存在與其功能，可能被用於繞過使用者帳戶控制（UAC）機制。根據 API 文件描述，如果呼叫者擁有 UIAccess 權限，理論上可以透過 Windows hook 將程式碼注入目標進程，並從目標進程將句柄回傳給呼叫者。GetProcessHandleFromHwnd 本身是一個便利函數，用於取得擁有指定 HWND 的進程句柄。然而，其文件註記特別強調，此功能僅在呼叫者和目標進程以相同使用者身份運行時才成功。這類 API 的分析，對於理解系統底層的權限提升和進程間通訊機制至關重要，提醒開發者和資安研究人員必須警惕看似無害的系統函數可能被用於惡意目的。建議開發者應嚴格實施最小權限原則，並對所有涉及進程句柄操作的 API 呼叫進行安全審核。",
    tags: ["GetProcessHandleFromHwnd", "UAC 繞過", "Windows API", "進程句柄", "權限提升"],
    title_en: "In-Depth Analysis of GetProcessHandleFromHwnd API: Revealing UAC Bypass and Process Handle Theft Mechanisms",
    summary_en: "This article deeply explores the GetProcessHandleFromHwnd function within the Windows API. The author points out that the existence and functionality of this API may be exploited to bypass User Account Control (UAC) mechanisms. According to the API documentation, if the caller possesses UIAccess permissions, it is theoretically possible to inject code into a target process via a Windows hook and return the handle from the target process to the caller. GetProcessHandleFromHwnd itself is a convenience function used to obtain a process handle that owns a specified HWND. However, its documentation specifically emphasizes that this functionality only succeeds when the caller and the target process are running under the same user identity. Analyzing such APIs is crucial for understanding system-level privilege escalation and inter-process communication mechanisms, reminding developers and security researchers to be vigilant that seemingly innocuous system functions can be used for malicious purposes. It is recommended that developers strictly implement the principle of least privilege and conduct security reviews for all API calls involving process handle manipulation.",
    tags_en: ["GetProcessHandleFromHwnd", "UAC Bypass", "Windows API", "Process Handle", "Privilege Escalation"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/02/gphfh-deep-dive.html", lang: "EN" }
    ]
  },
  {
    id: "20260226-002",
    trackers: ["os", "security"],
    category: "Android",
    title: "Fleet 設備管理軟體：Android MDM Pub/Sub 處理漏洞，可能導致設備未經授權解除註冊",
    summary: "開源設備管理軟體 Fleet 在版本 4.80.1 之前的版本中，其 Android MDM Pub/Sub 處理機制存在一項漏洞。若啟用 Android MDM 功能，攻擊者可透過發送偽造的請求至 Android Pub/Sub 端點，在未經身份驗證的情況下，觸發目標 Android 設備的解除註冊事件。此漏洞的影響範圍僅限於中斷受影響設備在 Fleet 管理系統中的管理狀態，無法讓攻擊者取得 Fleet 系統的存取權限、執行命令，或查看設備資料。為修復此問題，建議用戶立即升級至版本 4.80.1 或更高版本。若無法立即升級，受影響的 Fleet 用戶應暫時停用 Android MDM 功能以降低風險。",
    tags: ["Fleet", "Android MDM", "Pub/Sub", "CVE-2026-24004", "設備管理", "未經授權"],
    title_en: "Fleet Device Management Software: Android MDM Pub/Sub Processing Vulnerability Could Lead to Unauthorized Device Deregistration",
    summary_en: "The open-source device management software Fleet, in versions prior to 4.80.1, contains a vulnerability in its Android MDM Pub/Sub processing mechanism. If the Android MDM feature is enabled, an attacker can send a forged request to the Android Pub/Sub endpoint, triggering a device deregistration event on a target Android device without authentication. This vulnerability only affects the managed status of the affected device within the Fleet management system, and does not allow the attacker to gain access to the Fleet system, execute commands, or view device data. To remediate this issue, users are advised to immediately upgrade to version 4.80.1 or later. If immediate upgrading is not possible, affected Fleet users should temporarily disable the Android MDM feature to mitigate the risk.",
    tags_en: ["Fleet", "Android MDM", "Pub/Sub", "CVE-2026-24004", "Device Management", "Unauthorized"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24004", lang: "EN" }
    ]
  },
  {
    id: "20260226-003",
    trackers: ["os", "security"],
    category: "Android",
    title: "VLC for Android 存在路徑穿越漏洞：未修補版本可遭認證攻擊者利用",
    summary: "VideoLAN VLC for Android 在 3.7.0 版本之前的版本，其遠端存取伺服器（Remote Access Server）的 GET /download 端點，存在路徑穿越（Path Traversal）漏洞。此漏洞發生在檔案查詢參數被拼接到檔案系統路徑時，缺乏標準化（canonicalization）或目錄限制檢查。這允許已取得網路可達性並經過認證的攻擊者，請求超出預期下載目錄的檔案。雖然漏洞的影響範圍受限於 Android 應用程式的沙盒和儲存限制，但仍可能導致資料洩露。建議使用者應立即升級至 VLC for Android 3.7.0 或更高版本以修補此安全風險。",
    tags: ["VLC for Android", "CVE-2026-26228", "路徑穿越", "Path Traversal", "Android", "VideoLAN"],
    title_en: "VLC for Android has Path Traversal vulnerability: Unpatched versions can be exploited by authenticated attackers",
    summary_en: "VideoLAN VLC for Android versions prior to 3.7.0 contain a Path Traversal vulnerability in the GET /download endpoint of its Remote Access Server. This vulnerability occurs because the file query parameter is concatenated into the file system path without proper canonicalization or directory restriction checks. This allows an attacker who has achieved network accessibility and is authenticated to request files outside the expected download directory. Although the vulnerability's impact is limited by the Android application's sandbox and storage restrictions, it could still lead to data leakage. Users are advised to immediately upgrade to VLC for Android 3.7.0 or later versions to patch this security risk.",
    tags_en: ["VLC for Android", "CVE-2026-26228", "Path Traversal", "Path Traversal", "Android", "VideoLAN"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-26228", lang: "EN" }
    ]
  },
  {
    id: "20260226-004",
    trackers: ["os", "security"],
    category: "Android",
    title: "VLC for Android 遠端存取伺服器存在認證繞過漏洞，可透過暴力破解 OTP 取得未授權存取權",
    summary: "VideoLAN VLC for Android 在 3.7.0 版本之前，其「遠端存取伺服器」（Remote Access Server）功能存在一個認證繞過漏洞。此漏洞的根本原因在於 OTP（一次性密碼）驗證機制缺乏足夠的速率限制（rate limiting）或有效鎖定機制。攻擊者若能達到網路可達性（network reachability），便可持續不斷地嘗試 OTP 驗證，直到成功取得有效的 user_session cookie。成功利用此漏洞，攻擊者可未經授權存取遠端存取介面，但其權限範圍僅限於由 VLC for Android 用戶明確分享的媒體檔案。修補建議是升級至 VLC for Android 3.7.0 或更高版本。",
    tags: ["VLC for Android", "CVE-2026-26227", "OTP 驗證", "認證繞過", "Android"],
    title_en: "VLC for Android Remote Access Server has Authentication Bypass Vulnerability, Allowing Unauthorized Access via OTP Brute-Forcing",
    summary_en: "In versions prior to 3.7.0, VideoLAN VLC for Android's \"Remote Access Server\" feature contained an authentication bypass vulnerability. The root cause of this vulnerability is the lack of sufficient rate limiting or effective locking mechanism in the OTP (One-Time Password) verification process. If an attacker achieves network reachability, they can continuously attempt OTP verification until a valid user_session cookie is obtained. Successful exploitation of this vulnerability allows unauthorized access to the remote access interface, though the attacker's scope of privilege is limited only to media files explicitly shared by the VLC for Android user. The recommended fix is to upgrade to VLC for Android 3.7.0 or later.",
    tags_en: ["VLC for Android", "CVE-2026-26227", "OTP verification", "Authentication Bypass", "Android"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-26227", lang: "EN" }
    ]
  },
  {
    id: "20260226-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "Unitree Go2 韌體及 Android App 存在 RCE 漏洞：本地設備可注入惡意 Python 代碼",
    summary: "Unitree Go2 的韌體版本 1.1.7 至 1.1.11，若搭配 Android 應用程式 (com.unitree.doggo2) 使用，存在遠端程式碼執行 (RCE) 漏洞。此漏洞的根本原因在於系統缺乏對使用者自定義程式的完整性保護和內容驗證。攻擊者若能取得本地設備存取權限，可竄改儲存在 SQLite 資料庫 (unitree_go2.db, dog_programme 表) 的程式記錄，注入任意 Python 代碼。當使用者透過控制器鍵綁定觸發此惡意程式時，代碼將執行。由於該惡意綁定會持續存在，即使設備重啟亦然。此外，若惡意程式透過應用程式的社群市集分享，任何匯入並執行的機器人都可能遭受任意程式碼執行。修補建議為更新韌體及應用程式，並應加強對使用者輸入程式碼的完整性檢查與沙箱機制。",
    tags: ["Unitree Go2", "CVE-2026-27510", "Android", "RCE", "韌體", "Python"],
    title_en: "Unitree Go2 Firmware and Android App Contain RCE Vulnerability: Local Device Can Inject Malicious Python Code",
    summary_en: "Unitree Go2 firmware versions 1.1.7 through 1.1.11, when used with the Android application (com.unitree.doggo2), contain a Remote Code Execution (RCE) vulnerability. The root cause of this vulnerability is the system's lack of integrity protection and content validation for user-defined programs. If an attacker gains local device access, they can tamper with the program records stored in the SQLite database (unitree_go2.db, dog_programme table) and inject arbitrary Python code. When the user triggers this malicious program via controller key binding, the code will execute. Because this malicious binding persists, it remains even after the device reboots. Furthermore, if the malicious program is shared through the application's community marketplace, any robot that imports and executes it may suffer from arbitrary code execution. The recommended fix is to update the firmware and application, and to strengthen integrity checks and sandbox mechanisms for user-input code.",
    tags_en: ["Unitree Go2", "CVE-2026-27510", "Android", "RCE", "Firmware", "Python"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-27510", lang: "EN" }
    ]
  }
];
