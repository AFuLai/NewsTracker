// data-20260514.js — 2026-05-14
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-14"] = [
  {
    id: "20260514-001",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在 Use-after-free 漏洞，可能導致沙盒逃逸，需升級至 148.0.7778.168 以上",
    summary: "Google Chrome 在 Android 平台上的版本，在 148.0.7778.168 以下，存在一個名為 CVE-2026-8513 的 Use-after-free 漏洞。此漏洞的影響路徑是遠端攻擊者（remote attacker），前提是攻擊者已成功取得渲染器程序（renderer process）的控制權。透過精心構造的 HTML 頁面，攻擊者可能利用此漏洞執行沙盒逃逸（sandbox escape），造成嚴重的安全風險。\n\n此漏洞的技術細節為 Use After Free (CWE-416)，屬於 Chromium 核心元件的缺陷。由於其潛在的沙盒逃逸能力，被評定為「Critical」級別。修補建議是立即將 Google Chrome 瀏覽器升級至 148.0.7778.168 或更高版本，以修補此核心漏洞，避免遭受遠端攻擊。",
    tags: ["Google Chrome", "Android", "CVE-2026-8513", "Use After Free", "Chromium", "沙盒逃逸"],
    title_en: "Use-after-free vulnerability found in Google Chrome Android, potentially allowing sandbox escape; upgrade to 148.0.7778.168 or higher",
    summary_en: "Versions of Google Chrome on the Android platform below 148.0.7778.168 contain a Use-after-free vulnerability, identified as CVE-2026-8513. The vulnerability is exploitable by a remote attacker, provided the attacker has successfully gained control of the renderer process. By utilizing a specially crafted HTML page, the attacker could exploit this vulnerability to achieve sandbox escape, posing a severe security risk.\n\nThe technical detail of this vulnerability is Use After Free (CWE-416), residing within a core Chromium component. Due to its potential for sandbox escape, it has been rated as 'Critical'. The recommended fix is to immediately upgrade the Google Chrome browser to version 148.0.7778.168 or higher to patch this core vulnerability and prevent remote attacks.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8513", "Use After Free", "Chromium", "Sandbox Escape"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8513", lang: "EN" }
    ]
  },
  {
    id: "20260514-002",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞：CVE-2026-8539 允許遠端透過網頁注入惡意腳本 (UXSS)",
    summary: "本漏洞 CVE-2026-8539 存在於 Google Chrome 瀏覽器在 Android 平台上的 SanitizerAPI 組件中。若使用者使用的版本早於 148.0.7778.168，遠端攻擊者可透過精心設計的 HTML 網頁，利用腳本注入（Script injection）的漏洞，執行任意腳本或 HTML 內容，造成跨站腳本攻擊（UXSS）。此漏洞的嚴重性被 Chromium 評定為「高」。攻擊向量為遠端（AV:N），無需使用者互動（UI:R），且無需登入權限（PR:N）。修補建議是立即將 Google Chrome 瀏覽器更新至 148.0.7778.168 或更高版本，以修復 SanitizerAPI 的安全缺陷。",
    tags: ["Google Chrome", "Android", "CVE-2026-8539", "Script Injection", "UXSS", "Chromium"],
    title_en: "Google Chrome Android Vulnerability: CVE-2026-8539 Allows Remote Execution via Web Page Script Injection (UXSS)",
    summary_en: "The vulnerability CVE-2026-8539 exists in the SanitizerAPI component of the Google Chrome browser on the Android platform. If the user's version is earlier than 148.0.7778.168, a remote attacker can exploit a script injection vulnerability using a specially crafted HTML web page to execute arbitrary scripts or HTML content, causing a Universal Cross-Site Scripting (UXSS) attack. Chromium has rated the severity of this vulnerability as 'High'. The attack vector is Remote (AV:N), requires no user interaction (UI:R), and requires no privileges (PR:N). The recommended fix is to immediately update the Google Chrome browser to version 148.0.7778.168 or later, to patch the security flaw in SanitizerAPI.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8539", "Script Injection", "UXSS", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8539", lang: "EN" }
    ]
  },
  {
    id: "20260514-003",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞：GPU 堆緩衝區溢出，遠端攻擊可執行記憶體寫入",
    summary: "本漏洞為 CVE-2026-8552，存在於 Google Chrome 於 Android 平台上的 GPU 核心元件中。該漏洞屬於堆緩衝區溢出（Heap buffer overflow），允許遠端攻擊者透過精心構造的 HTML 頁面，執行越界記憶體寫入（out of bounds memory write）。根據 Chromium 安全性評級，此漏洞的嚴重性為高（High）。受影響版本為 Android 平台，且版本號早於 148.0.7778.168。攻擊向量為遠端（Remote），無需使用者互動（UI:R），且無需權限（PR:N）。修補建議是升級至 Chrome 148.0.7778.168 或更高版本。建議使用者及企業應立即更新瀏覽器以防範此類遠端攻擊。",
    tags: ["Google Chrome", "Android", "CVE-2026-8552", "堆緩衝區溢出", "GPU", "Chromium"],
    title_en: "Google Chrome Android Vulnerability: GPU Heap Buffer Overflow Allows Remote Memory Write",
    summary_en: "This vulnerability, CVE-2026-8552, exists in the GPU core component of Google Chrome on the Android platform. The flaw is a Heap buffer overflow, which allows a remote attacker to perform an out of bounds memory write using a specially crafted HTML page. According to Chromium security rating, the severity of this vulnerability is High. The affected platform is Android, and versions earlier than 148.0.7778.168 are vulnerable. The attack vector is Remote, requires no user interaction (UI:R), and requires no privileges (PR:N). The recommended fix is to upgrade to Chrome 148.0.7778.168 or later. Users and enterprises are advised to update their browsers immediately to prevent this type of remote attack.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8552", "Heap buffer overflow", "GPU", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8552", lang: "EN" }
    ]
  },
  {
    id: "20260514-004",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞揭露：CVE-2026-8566 允許遠端攻擊者繞過存取控制",
    summary: "本漏洞 CVE-2026-8566 影響 Google Chrome 在 Android 平台上的版本，具體指在 148.0.7778.168 版本之前的版本。漏洞本質是「支付功能（Payments）」的策略執行不足（Insufficient policy enforcement），允許遠端攻擊者透過精心構造的 HTML 頁面，繞過作業系統的判斷存取控制（discretionary access control）。這是一個中等安全等級的漏洞（Chromium security severity: Medium）。攻擊向量為遠端（Remote），無需使用者互動（UI:R），且攻擊者無需任何權限（PR:N）。修補建議是使用者應立即升級 Google Chrome 到 148.0.7778.168 或更高版本，以修復此存取控制缺陷，避免遭受惡意攻擊。",
    tags: ["Google Chrome", "Android", "CVE-2026-8566", "Chromium", "存取控制", "Payments"],
    title_en: "Google Chrome Android Vulnerability Disclosed: CVE-2026-8566 Allows Remote Attacker to Bypass Access Control",
    summary_en: "This vulnerability, CVE-2026-8566, affects Google Chrome versions on the Android platform, specifically versions prior to 148.0.7778.168. The vulnerability is fundamentally an Insufficient policy enforcement in the 'Payments' feature, which allows a remote attacker to bypass the operating system's discretionary access control via a specially crafted HTML page. This is a Medium security severity vulnerability (Chromium security severity: Medium). The attack vector is Remote, requires no user interaction (UI:R), and requires no privileges (PR:N). The recommended remediation is for users to immediately upgrade Google Chrome to version 148.0.7778.168 or later to fix this access control flaw and prevent malicious attacks.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8566", "Chromium", "Access Control", "Payments"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8566", lang: "EN" }
    ]
  },
  {
    id: "20260514-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在沙盒逃逸漏洞：CVE-2026-8571，需修補 GPU 政策強制性不足",
    summary: "Google Chrome 在 Android 平台上的舊版本（低於 148.0.7778.168）存在一個嚴重的安全漏洞 CVE-2026-8571。此漏洞源於 GPU 繪圖元件的政策強制性不足（Insufficient policy enforcement in GPU）。攻擊者若能先透過其他方式取得渲染器程序（renderer process）的控制權，可利用此漏洞透過精心設計的 HTML 頁面，潛在地執行沙盒逃逸（sandbox escape）。這類漏洞的實務影響極大，可能允許攻擊者從應用程式的受限環境逃逸到更高權限的系統層級。修補建議是立即將 Google Chrome 瀏覽器更新至 148.0.7778.168 或更高版本，以修復 GPU 相關的政策控制缺陷。",
    tags: ["Google Chrome", "Android", "CVE-2026-8571", "GPU", "沙盒逃逸", "Chromium"],
    title_en: "Google Chrome Android Sandbox Escape Vulnerability: CVE-2026-8571 Requires GPU Policy Enforcement Fix",
    summary_en: "Older versions of Google Chrome on the Android platform (below 148.0.7778.168) contain a critical security vulnerability, CVE-2026-8571. This vulnerability stems from insufficient policy enforcement in the GPU component. If an attacker can first gain control of the renderer process through other means, they can exploit this flaw using a specially crafted HTML page to potentially achieve a sandbox escape. Such vulnerabilities have significant practical impact, potentially allowing an attacker to escape from the application's restricted environment to a higher-privilege system level. The recommended fix is to immediately update the Google Chrome browser to version 148.0.7778.168 or later, to patch the GPU-related policy control defect.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8571", "GPU", "Sandbox Escape", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8571", lang: "EN" }
    ]
  },
  {
    id: "20260514-006",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞 CVE-2026-8572：渲染器流程被攻破後可洩漏跨來源資料",
    summary: "本漏洞 CVE-2026-8572 存在於 Google Chrome 瀏覽器在 Android 平台上的特定版本（低於 148.0.7778.168）。該漏洞的本質是網路層面（Network）的策略執行不足，允許攻擊者在已成功攻破渲染器流程（renderer process）的條件下，透過精心設計的 HTML 頁面，洩漏跨來源（cross-origin）的敏感資料。此漏洞的攻擊向量為遠端（Remote），且攻擊者無需用戶互動（UI:R）。雖然原始描述指出 Chromium 安全嚴重性為中等（Medium），但實務上，一旦渲染器流程被攻破，資料洩漏的風險極高。Google 已在版本 148.0.7778.168 之後修補此問題。建議所有 Android 平台用戶應立即更新至最新版本的 Chrome 瀏覽器，以避免資料外洩風險。",
    tags: ["Google Chrome", "Android", "CVE-2026-8572", "Chromium", "資料洩漏", "渲染器流程"],
    title_en: "Google Chrome Android Vulnerability CVE-2026-8572: Cross-Origin Data Leakage Possible After Renderer Process Compromise",
    summary_en: "The vulnerability CVE-2026-8572 exists in specific versions of the Google Chrome browser on the Android platform (below 148.0.7778.168). The core of this vulnerability is a network-level policy enforcement deficiency, which allows an attacker, after successfully compromising the renderer process, to leak cross-origin sensitive data via a carefully crafted HTML page. The attack vector is Remote, and no user interaction (UI:R) is required. Although the original description rates the Chromium severity as Medium, in practice, the risk of data leakage is extremely high once the renderer process is compromised. Google has patched this issue in version 148.0.7778.168 and later. All Android platform users are advised to immediately update to the latest version of the Chrome browser to prevent data leakage risks.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8572", "Chromium", "Data Leakage", "Renderer Process"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8572", lang: "EN" }
    ]
  },
  {
    id: "20260514-007",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android WebXR 漏洞 (CVE-2026-8583)：遠端攻擊者可從進程記憶體竊取敏感資訊",
    summary: "本漏洞（CVE-2026-8583）存在於 Google Chrome 瀏覽器在 Android 平台上的 WebXR 功能中，影響版本為 148.0.7778.168 之前。攻擊者若能先透過某方式取得渲染器進程（renderer process）的控制權，可利用此漏洞，透過精心設計的 HTML 頁面，從進程記憶體中竊取潛在的敏感資訊。此漏洞的嚴重性被評定為中等（Chromium security severity: Medium）。修補建議是升級至 Chrome 148.0.7778.168 或更高版本。由於漏洞的利用前提是攻擊者已成功入侵渲染器進程，實務上可能需要結合其他漏洞才能發動，但仍建議使用者及開發者立即更新瀏覽器以降低風險。",
    tags: ["Google Chrome", "Android", "WebXR", "CVE-2026-8583", "Chromium", "記憶體洩漏"],
    title_en: "Google Chrome Android WebXR Vulnerability (CVE-2026-8583): Remote Attacker Can Steal Sensitive Information from Process Memory",
    summary_en: "This vulnerability (CVE-2026-8583) exists in the WebXR functionality of the Google Chrome browser on the Android platform, affecting versions prior to 148.0.7778.168. If an attacker can first gain control of the renderer process, they can exploit this vulnerability using a specially crafted HTML page to steal potentially sensitive information from the process memory. The severity of this vulnerability is rated as Medium (Chromium security severity: Medium). The recommended fix is to upgrade to Chrome 148.0.7778.168 or later. Since the exploitation of this vulnerability requires the attacker to have already successfully compromised the renderer process, it may practically require combining it with other vulnerabilities, but users and developers are still advised to update the browser immediately to reduce risk.",
    tags_en: ["Google Chrome", "Android", "WebXR", "CVE-2026-8583", "Chromium", "Memory Leak"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8583", lang: "EN" }
    ]
  },
  {
    id: "20260514-008",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Fleet MDM 軟體存在身份驗證漏洞：未檢查 JWT 宣告導致任意 Azure AD 租戶可登入",
    summary: "開源設備管理軟體 Fleet 在其 Windows MDM 註冊流程中，存在一個嚴重的身份驗證漏洞。在版本 4.82.0 之前，該漏洞允許攻擊者利用來自任何 Azure AD 租戶的認證令牌。由於 Fleet 雖然使用 Microsoft 的多租戶 JWKS 端點驗證 JWT 簽名，但卻沒有強制檢查 `aud` (受眾) 或 `iss` (發行者) 宣告，因此任何包含預期範圍的 Microsoft 簽署 Azure AD 存取令牌都可以用於向 Fleet 的 MDM 端點進行身份驗證。若啟用了 Windows MDM 功能，攻擊者只需取得任何 Azure AD 租戶的令牌，即可註冊未授權設備，並透過 Fleet 的 MDM 管理 API 進行互動。這可能導致敏感的設備註冊密鑰外洩，進一步造成未授權的存取。修補建議是立即升級至版本 4.82.0 或更高版本；若無法立即升級，受影響的 Fleet 用戶應暫時停用 Windows MDM 功能。",
    tags: ["Fleet", "CVE-2026-24899", "MDM", "Azure AD", "JWT", "Windows"],
    title_en: "Vulnerability in Fleet MDM Software Allows Login to Arbitrary Azure AD Tenant Due to Unchecked JWT Claims",
    summary_en: "The open-source device management software Fleet contains a critical authentication vulnerability in its Windows MDM registration process. Prior to version 4.82.0, this vulnerability allowed an attacker to utilize authentication tokens originating from any Azure AD tenant. Although Fleet uses Microsoft's multi-tenant JWKS endpoint to validate JWT signatures, it fails to enforce checks on the `aud` (audience) or `iss` (issuer) claims. Consequently, any Microsoft-signed Azure AD access token containing the expected scope can be used to authenticate to the Fleet MDM endpoint. If Windows MDM functionality is enabled, an attacker only needs to obtain a token from any Azure AD tenant to register an unauthorized device and interact via the Fleet MDM management API. This could lead to the leakage of sensitive device registration keys, resulting in further unauthorized access. The recommended fix is to immediately upgrade to version 4.82.0 or later; if immediate upgrading is not possible, affected Fleet users should temporarily disable the Windows MDM feature.",
    tags_en: ["Fleet", "CVE-2026-24899", "MDM", "Azure AD", "JWT", "Windows"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24899", lang: "EN" }
    ]
  },
  {
    id: "20260514-009",
    trackers: ["security"],
    category: "uncategorized",
    title: "無法生成新聞內容：提供的文章內容為 NVD 頁面重定向警告，無可分析的資安事件資訊。",
    summary: "無法生成摘要。提供的文章內容僅為 NVD（國家漏洞資料庫）的頁面重定向警告，內容僅包含官方網站的識別資訊（如 .gov 網域、HTTPS 安全連線提示），不包含任何關於特定漏洞、受影響產品、技術細節或修補建議的資安事件資訊。因此，無法撰寫符合要求的資安新聞報導。",
    tags: ["NVD", "CVE-2026-41281", "資訊缺失", "安全警告"],
    title_en: "Cannot Generate News Content: Provided Article Content is an NVD Page Redirect Warning, Lacking Analyzable Security Incident Information.",
    summary_en: "Unable to generate summary. The provided article content is merely an NVD (National Vulnerability Database) page redirect warning, containing only official website identification information (such as .gov domain or HTTPS secure connection prompts), and no security incident information regarding specific vulnerabilities, affected products, technical details, or remediation recommendations. Therefore, it is impossible to write a compliant cybersecurity news report.",
    tags_en: ["NVD", "CVE-2026-41281", "Information Missing", "Security Warning"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-41281", lang: "EN" }
    ]
  }
];
