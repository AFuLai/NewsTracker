// data-20260826.js — 2026-08-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-26"] = [
  {
    id: "20260826-001",
    trackers: ["os", "security"],
    category: "Windows",
    title: "揭秘傳說中的 Windows XP 盜版金鑰：非駭客破解，而是企業授權漏洞所致",
    summary: "本文回顧了 Windows XP 上一個著名的「盜版金鑰」FCKGW-RHQQ2-YXRKT-8TG6W-2B7Q8 的傳說。許多人誤以為這是一個駭客破解或繞過 Microsoft 反盜版系統的密碼，但事實上，它只是一個合法的企業批量授權金鑰（Volume License Key, VLK）。\n在 Windows XP 早期，Microsoft 推出了產品激活技術 (Product Activation)，透過生成硬體 ID 並與產品金鑰進行比對來提高防盜能力。此外，為了方便大型企業管理數千台電腦，Microsoft 設計了 Volume License Keys (VLKs)。由於 FCKGW-RHQQ2-YXRKT-8TG6W-2B7Q8 是一個合法的 VLK，它在 XP 的激活邏輯中被「白名單」化，系統會跳過正常的激活提示。\n這導致盜版者可以利用這個漏洞製作出無需正常激活的 ISO 映像檔。雖然該金鑰和相關服務多年已停用或黑名單化，但此事件揭示了早期作業系統在企業級授權與消費者產品之間存在的安全盲點。",
    tags: ["Windows XP", "Volume License Key (VLK)", "Product Activation", "Microsoft", "資安漏洞", "盜版金鑰"],
    title_en: "Unveiling the Legendary Windows XP 'Pirate Key': Not a Hacker Crack, but an Enterprise Licensing Flaw",
    summary_en: "This article reviews the legendary 'pirate key' FCKGW-RHQQ2-YXRKT-8TG6W-2B7Q8 for Windows XP. Many people mistakenly believe this was a crack or a bypass code designed to circumvent Microsoft's anti-piracy systems, but in reality, it was merely a legitimate Enterprise Volume License Key (VLK).\nIn the early days of Windows XP, Microsoft introduced Product Activation, which enhanced anti-piracy by generating a hardware ID and comparing it against a product key. Furthermore, to facilitate the management of thousands of computers in large corporations, Microsoft designed Volume License Keys (VLKs). Because FCKGW-RHQQ2-YXRKT-8TG6W-2B7Q8 was a legitimate VLK, it was 'whitelisted' within the XP activation logic, causing the system to skip normal activation prompts.\nThis allowed pirates to create ISO images that did not require proper activation. Although this key and related services have been decommissioned or blacklisted for years, this incident exposed a security blind spot in early operating systems regarding the distinction between enterprise-level licensing and consumer products.",
    tags_en: ["Windows XP", "Volume License Key (VLK)", "Product Activation", "Microsoft", "Security Vulnerability", "Pirate Key"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/26/windows-xps-most-famous-pirated-key-wasnt-a-hack-and-a-microsoft-engineer-explains-why", lang: "EN" }
    ]
  },
  {
    id: "20260826-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CVE-2026-73180：Apache Tomcat 存在未正確終止 WebSocket Session 的漏洞",
    summary: "本漏洞（CVE-2026-73180）屬於 Apache Tomcat 中的「不當會話過期」問題，影響已通過身份驗證的 HTTP 會話。若在透過該認證 HTTP 會話建立 WebSocket 連線後，該 HTTP 會話的 Session ID 發生變更，則 WebSokcet session 將不會如 Jakarta WebSocket 規範要求般被正確關閉。\n受影響的版本範圍廣泛，包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.0.M1 至 9.0.120。此外，舊版如 8.5.x 和 7.0.x 也被指出可能受影響。\n建議使用者應升級至修復版本：Apache Tomcat 11.0.25、10.1.58 或 9.0.121，以確保 WebSocket 連線能與 HTTP 會話的生命週期正確同步。由於此漏洞涉及會話管理和連線狀態維護，建議所有使用 Apache Tomcat 並實施 WebSocket 功能的應用程式應立即進行修補。",
    tags: ["Apache Tomcat", "CVE-2026-73180", "WebSocket", "Session Management", "Jakarta WebSocket"],
    title_en: "CVE-2026-73180: Apache Tomcat Vulnerability in Improper WebSocket Session Termination",
    summary_en: "This vulnerability (CVE-2026-73180) is an 'improper session expiration' issue within Apache Tomcat, affecting authenticated HTTP sessions. If a WebSocket connection is established using an authenticated HTTP session, and the session ID of that HTTP session subsequently changes, the WebSocket session will not be properly closed as required by the Jakarta WebSocket specification. The affected versions are extensive, including Apache Tomcat 11.0.0-M1 to 11.0.24, 10.1.0-M1 to 10.1.57, and 9.0.0.M1 to 9.0.120. Additionally, older versions such as 8.5.x and 7.0.x are noted as potentially affected. Users are advised to upgrade to the patched versions: Apache Tomcat 11.0.25, 10.1.58, or 9.0.121, to ensure that WebSocket connections correctly synchronize with the HTTP session lifecycle. Because this vulnerability involves session management and connection state maintenance, all applications using Apache Tomcat and implementing WebSocket functionality are advised to patch immediately.",
    tags_en: ["Apache Tomcat", "CVE-2026-73180", "WebSocket", "Session Management", "Jakarta WebSocket"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/10", lang: "EN" }
    ]
  },
  {
    id: "20260826-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-68763 漏洞：HTTP/2 回傳追蹤中的資源分配洩漏導致服務拒絕",
    summary: "本公告揭露了 Apache Tomcat 的一個未受控資源消耗漏洞，編號為 CVE-2026-68763。此漏洞源於 HTTP/2 後端佇列（backlog tracking）在串流重置（stream is reset）時的資源分配洩漏（allocation leak）。若攻擊者能利用此缺陷，可能導致服務崩潰或無法正常運作，造成服務拒絕（DoS）的風險。\n\n受影響的版本範圍包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.39 至 9.0.120。此外，舊版如 8.5.59 至 8.5.100 也已知受影響。\n\n開發團隊已建議使用者應升級至修復此問題的版本：Apache Tomcat 11.0.25、10.1.58 或 9.0.121。用戶應立即檢查其部署的 Tomcat 版本，並採取適當的補丁措施以防範服務中斷。",
    tags: ["Apache Tomcat", "CVE-2026-68763", "HTTP/2", "DoS", "資源分配洩漏"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-68763: Resource Allocation Leak in HTTP/2 Response Tracing Causes Denial of Service",
    summary_en: "This advisory discloses an unauthenticated resource consumption vulnerability in Apache Tomcat, identified as CVE-2026-68763. The flaw stems from a resource allocation leak within the HTTP/2 backlog tracking mechanism when a stream is reset. If exploited, this vulnerability could potentially cause service crashes or operational failure, leading to a Denial of Service (DoS) risk.\n\nThe affected version ranges include Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.39 through 9.0.120. Additionally, older versions such as 8.5.59 through 8.5.100 are also known to be affected.\n\nThe development team recommends that users upgrade to the patched versions: Apache Tomcat 11.0.25, 10.1.58, or 9.0.121. Users should immediately check their deployed Tomcat version and implement appropriate patching measures to prevent service disruption.",
    tags_en: ["Apache Tomcat", "CVE-2026-68763", "HTTP/2", "DoS", "Resource Allocation Leak"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/9", lang: "EN" }
    ]
  },
  {
    id: "20260826-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 Principal lookup 認證失敗漏洞 (CVE-2026-68569)，可能導致未經授權登入",
    summary: "本公告揭露了 Apache Tomcat 的一項「不當驗證」（Improper Authentication）漏洞，編號為 CVE-2026-68569。此漏洞影響特定配置（例如 CLIENT-CERT, SPNEGO）下的使用者認證機制。在某些情況下，攻擊者即使無法找到資料來源實體 (DataSourceRealm) 中存在的用戶帳號，系統仍可能錯誤地將其視為已成功驗證的狀態。\n\n受影響的版本範圍包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.0.M1 至 9.0.120。此外，舊版如 8.5.x 和 7.x 系列也已知受影響。\n\n開發團隊已提供修補版本：建議升級至 Apache Tomcat 11.0.25、10.1.58 或 9.0.121 以解決此安全問題。使用者應立即檢查其應用程式是否使用上述版本的 Tomcat，並儘快進行版本更新。",
    tags: ["Apache Tomcat", "CVE-2026-68569", "不當驗證", "Principal lookup", "Tomcat"],
    title_en: "Apache Tomcat Principal Lookup Authentication Failure Vulnerability (CVE-2026-68569) May Lead to Unauthorized Login",
    summary_en: "This announcement reveals an \"Improper Authentication\" vulnerability in Apache Tomcat, designated as CVE-2026-68569. This vulnerability affects the user authentication mechanism under specific configurations (e.g., CLIENT-CERT, SPNEGO). In certain scenarios, an attacker may cause the system to incorrectly treat the state as successfully authenticated, even if the user account does not exist in the DataSourceRealm. The affected version ranges include Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.0.M1 through 9.0.120. Additionally, older versions such as the 8.5.x and 7.x series are also known to be affected. The development team has provided patched versions: it is recommended to upgrade to Apache Tomcat 11.0.25, 10.1.58, or 9.0.121 to resolve this security issue. Users should immediately check if their applications use the aforementioned Tomcat versions and update them as soon as possible.",
    tags_en: ["Apache Tomcat", "CVE-2026-68569", "Improper Authentication", "Principal lookup", "Tomcat"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/8", lang: "EN" }
    ]
  },
  {
    id: "20260826-005",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-68525 漏洞：表單認證後重定向可能繞過方法限制",
    summary: "資安研究人員發現 Apache Tomcat 的 FORM 身份驗證流程中存在一項「不正確授權」（Incorrect Authorization）漏洞，編號為 CVE-2026-68525。此漏洞允許攻擊者在透過表單認證後進行重定向時，繞過原本限制使用者只能對特定資源執行 POST 但不能執行 GET 的安全約束。\n受影響的版本範圍包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.0.M1 至 9.0.120。此外，舊版如 8.5.x 和 7.0.x 也被指出可能受影響。\n為修復此問題，建議使用者升級至版本 11.0.25、10.1.58 或 9.0.121。由於這屬於授權控制缺陷，組織應立即更新所有使用 Tomcat FORM 認證的應用程式，以防止未經授權的資源存取。",
    tags: ["Apache Tomcat", "CVE-2026-68525", "FORM authentication", "Web 應用程式安全", "授權控制缺陷"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-68525: Form Authentication Redirect May Bypass Method Restrictions",
    summary_en: "Security researchers have discovered an \"Incorrect Authorization\" vulnerability, designated CVE-2026-68525, within the FORM authentication process of Apache Tomcat. This vulnerability allows an attacker to bypass security constraints that originally limited users to performing POST requests on specific resources while preventing GET requests. Affected versions include Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.0.M1 through 9.0.120. Older versions, such as 8.5.x and 7.0.x, are also noted as potentially affected. To remediate this issue, users are advised to upgrade to versions 11.0.25, 10.1.58, or 9.0.121. As this is a flaw in authorization control, organizations should immediately update all applications using Tomcat FORM authentication to prevent unauthorized resource access.",
    tags_en: ["Apache Tomcat", "CVE-2026-68525", "FORM authentication", "Web Application Security", "Authorization Control Flaw"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/7", lang: "EN" }
    ]
  },
  {
    id: "20260826-006",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-66422 漏洞：Servlet 角色引用可繞過宣告式權限限制",
    summary: "資安研究人員發布關於 Apache Tomcat 的安全公告，指出其在處理 Servlet 角色參考時存在「不當授權」（Improper Authorization）的漏洞，編號為 CVE-2026-66422。此漏洞源於 `security-role-ref` 定義被錯誤地用作 Realm 中的角色別名，而非僅用於搭配標準的 `Request.isUserInRole()` 檢查。\n\n受影響的版本範圍廣泛，包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.25 至 9.0.120。雖然文章提及了舊版本（如 8.5.x 和 7.0.x）也可能受影響，但建議用戶應升級至修復此問題的版本：Tomcat 11.0.25、10.1.58 或 9.0.121。開發者應立即執行版本更新，以防止攻擊者利用此漏洞繞過應用程式的宣告式角色限制，從而可能導致未授權的資料存取或功能操作。",
    tags: ["Apache Tomcat", "CVE-2026-66422", "Servlet", "不當授權", "Web應用程式安全"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-66422: Servlet Role Reference Bypass of Declarative Authorization",
    summary_en: "Security researchers have issued a security advisory regarding Apache Tomcat, pointing out an \"Improper Authorization\" vulnerability, designated CVE-2026-66422, when processing Servlet role references. This vulnerability stems from the `security-role-ref` definition being incorrectly used as a role alias within a Realm, rather than being used solely for conjunction with the standard `Request.isUserInRole()` check.\n\nThe affected versions are widespread, including Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.25 through 9.0.120. Although the article mentions that older versions (such as 8.5.x and 7.0.x) might also be affected, users are advised to upgrade to the patched versions: Tomcat 11.0.25, 10.1.58, or 9.0.121. Developers should immediately perform a version update to prevent attackers from exploiting this vulnerability to bypass the application's declarative role restrictions, which could potentially lead to unauthorized data access or functionality operation.",
    tags_en: ["Apache Tomcat", "CVE-2026-66422", "Servlet", "Improper Authorization", "Web Application Security"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/6", lang: "EN" }
    ]
  },
  {
    id: "20260826-007",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-65927 漏洞：RewriteValve 重啟機制可能繞過存取控制",
    summary: "本篇報告揭露了 Apache Tomcat 的 RewriteValve 機制中存在一個 Off-by-one Error 漏洞，編號為 CVE-2026-65927。此漏洞導致重寫處理流程在執行到第二個規則時意外重新啟動，而非從第一個規則開始，進而可能讓攻擊者繞過原本設定的存取控制機制。受影響的版本範圍包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.0.M1 至 9.0.120。雖然版本 8.5.0 至 8.5.100 在漏洞發布時已達到 End-of-Life (EOL)，但仍已知受影響。建議使用者應立即升級至修復此問題的版本：Apache Tomcat 11.0.25、10.1.58 或 9.0.121，以確保應用程式的安全性。",
    tags: ["CVE-2026-65927", "Apache Tomcat", "RewriteValve", "Off-by-one Error", "存取控制"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-65927: RewriteValve Restart Mechanism May Bypass Access Control",
    summary_en: "This report reveals an Off-by-one Error vulnerability, designated CVE-2026-65927, within the Apache Tomcat RewriteValve mechanism. This vulnerability causes the rewrite processing flow to unexpectedly restart when executing the second rule, instead of starting from the first rule. This could potentially allow an attacker to bypass configured access control mechanisms. Affected versions include Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.0.M1 through 9.0.120. Although versions 8.5.0 through 8.5.100 reached End-of-Life (EOL) when the vulnerability was disclosed, they are still known to be affected. Users are strongly advised to immediately upgrade to the patched versions: Apache Tomcat 11.0.25, 10.1.58, or 9.0.121, to ensure application security.",
    tags_en: ["CVE-2026-65927", "Apache Tomcat", "RewriteValve", "Off-by-one Error", "Access Control"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/5", lang: "EN" }
    ]
  },
  {
    id: "20260826-008",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-65905：DIGEST 認證機制可被有限次重放攻擊",
    summary: "本漏洞報告指出 Apache Tomcat 的 DIGEST 認證器存在一項「捕獲-重放」（Capture-replay）的驗證繞過問題，編號為 CVE-2026-65905。若在預設的 `windowSize` 請求窗口內，攻擊者能發送一個具有極限 `nonceCount` 的 DIGEST 認證請求，則該請求可以在相關的重放窗口內被單次重放利用。受影響的版本包括 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57，以及 9.0.0.M1 至 9.0.120。此外，舊版如 8.5.0 至 8.5.100 和 7.0.30 至 7.0.109 也被知悉受影響。為修復此問題，用戶應升級至版本 11.0.25、10.1.58 或 9.0.121。建議所有使用 Tomcat DIGEST 認證的應用程式立即進行版本更新。",
    tags: ["Apache Tomcat", "CVE-2026-65905", "DIGEST authentication", "重放攻擊", "Tomcat"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-65905: DIGEST Authentication Mechanism Susceptible to Limited Replay Attack",
    summary_en: "This vulnerability report highlights a 'Capture-replay' validation bypass issue in the Apache Tomcat DIGEST authenticator, designated as CVE-2026-65905. If an attacker sends a DIGEST authentication request with an extreme `nonceCount` within the default `windowSize` request window, that request can be utilized via a single replay within the relevant replay window. Affected versions include Apache Tomcat 11.0.0-M1 through 11.0.24, 10.1.0-M1 through 10.1.57, and 9.0.0.M1 through 9.0.120. Additionally, older versions such as 8.5.0 through 8.5.100 and 7.0.30 through 7.0.109 are also known to be affected. To remediate this issue, users should upgrade to versions 11.0.25, 10.1.58, or 9.0.121. It is recommended that all applications using Tomcat DIGEST authentication update their versions immediately.",
    tags_en: ["Apache Tomcat", "CVE-2026-65905", "DIGEST authentication", "Replay Attack", "Tomcat"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/4", lang: "EN" }
    ]
  },
  {
    id: "20260826-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-65637：HTTP/2 SNI 驗證不嚴格導致的繞過漏洞",
    summary: "本公告揭露了 Apache Tomcat 的一個輸入驗證缺陷，該漏洞是先前修復 CVE-2026-32990 時修補措施不完整所致。受影響的版本包括：Apache Tomcat 11.0.20 至 11.0.24、10.1.53 至 10.1.57，以及 9.0.115 至 9.0.120。\n此漏洞屬於 HTTP/2 的 no-authority bypass 問題，利用不嚴格的 SNI (Server Name Indication) 驗證機制。建議使用者立即升級至修復版本：Apache Tomcat 11.0.25、10.1.58 或 9.0.121，以防止潛在的攻擊。\n本漏洞被評定為中等（moderate）嚴重性。",
    tags: ["Apache Tomcat", "CVE-2026-65637", "HTTP/2", "SNI 驗證", "輸入驗證缺陷"],
    title_en: "Apache Tomcat has CVE-2026-65637: Bypass Vulnerability Due to Loose HTTP/2 SNI Validation",
    summary_en: "This announcement reveals an input validation flaw in Apache Tomcat, which stems from incomplete patching during the remediation of CVE-2026-32990. Affected versions include: Apache Tomcat 11.0.20 to 11.0.24, 10.1.53 to 10.1.57, and 9.0.115 to 9.0.120. This vulnerability is an HTTP/2 no-authority bypass issue, exploiting insufficient SNI (Server Name Indication) validation. Users are advised to immediately upgrade to the patched versions: Apache Tomcat 11.0.25, 10.1.58, or 9.0.121, to prevent potential attacks. This vulnerability is rated as moderate severity.",
    tags_en: ["Apache Tomcat", "CVE-2026-65637", "HTTP/2", "SNI Validation", "Input Validation Flaw"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/3", lang: "EN" }
    ]
  },
  {
    id: "20260826-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 TOCTOU 競態條件漏洞 (CVE-2026-65183)，允許本地未授權使用者存取 Unix Domain Socket",
    summary: "本篇公告揭露了 Apache Tomcat 的一個 Time-of-check Time-of-use (TOCTOU) 競態條件漏洞，編號為 CVE-2026-65183。此漏洞發生在 Tomcat 創建 Unix Domain Sockets 並設定特定權限的過程中。攻擊者若為本地未授權使用者，可利用此缺陷存取該 Unix Domain Socket，可能導致系統安全問題。\n\n受影響的版本範圍包括：Apache Tomcat 11.0.0-M1 至 11.0.24；Apache Tomcat 10.1.0-M1 至 10.1.57；以及 Apache Tomcat 9.0.42 至 9.0.120。\n\n為修復此問題，建議使用者立即升級至以下版本：11.0.25、10.1.58 或 9.0.121。對於較舊的版本（如 Tomcat 8.5.0 及更早），目前未受影響。\n\n開發者強烈建議所有使用上述版本的用戶，應儘速進行版本升級，以避免遭受本地權限提升或資料洩露的風險。",
    tags: ["Apache Tomcat", "CVE-2026-65183", "TOCTOU", "Unix Domain Socket", "競態條件"],
    title_en: "Apache Tomcat Contains TOCTOU Race Condition Vulnerability (CVE-2026-65183), Allowing Local Unauthorized User Access to Unix Domain Socket",
    summary_en: "This announcement reveals a Time-of-check Time-of-use (TOCTOU) race condition vulnerability in Apache Tomcat, designated as CVE-2026-65183. This vulnerability occurs during the process of Tomcat creating Unix Domain Sockets and setting specific permissions. An attacker, if a local unauthorized user, can exploit this flaw to access the Unix Domain Socket, potentially leading to system security issues.\n\nThe affected version ranges include: Apache Tomcat 11.0.0-M1 to 11.0.24; Apache Tomcat 10.1.0-M1 to 10.1.57; and Apache Tomcat 9.0.42 to 9.0.120.\n\nTo remediate this issue, users are advised to immediately upgrade to the following versions: 11.0.25, 10.1.58, or 9.0.121. Older versions (such as Tomcat 8.5.0 and earlier) are currently unaffected.\n\nDevelopers strongly recommend that all users running the aforementioned versions upgrade promptly to avoid the risk of local privilege escalation or data leakage.",
    tags_en: ["Apache Tomcat", "CVE-2026-65183", "TOCTOU", "Unix Domain Socket", "Race Condition"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/2", lang: "EN" }
    ]
  },
  {
    id: "20260826-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Tomcat 存在 CVE-2026-65182：長前綴安全限制繞過漏洞，建議立即升級",
    summary: "資安研究人員發現 Apache Tomcat 存在一項「不當存取控制/錯誤授權」的漏洞（CVE-2026-65182）。此漏洞允許攻擊者透過指定長路徑的安全限制前置於更具約束力的短子路徑限制，從而繞過原本設定的安全性檢查。受影響的版本範圍廣泛，包括但不限於 Apache Tomcat 11.0.0-M1 至 11.0.24、10.1.0-M1 至 10.1.57 等多個主要版本。\n\n為修復此問題，開發者建議用戶應升級至以下版本：Apache Tomcat 11.0.25、10.1.58 和 9.0.121。由於這屬於典型的配置和授權控制缺陷，建議所有使用 Apache Tomcat 的應用程式都應立即執行安全更新，並審查其路徑限制的設定邏輯，以防止類似的繞過攻擊。",
    tags: ["Apache Tomcat", "CVE-2026-65182", "不當存取控制", "安全限制繞過", "Tomcat"],
    title_en: "Apache Tomcat Vulnerable to CVE-2026-65182: Long Prefix Security Restriction Bypass Flaw, Immediate Upgrade Recommended",
    summary_en: "Security researchers have discovered an 'Improper Access Control/Broken Authorization' vulnerability (CVE-2026-65182) in Apache Tomcat. This flaw allows an attacker to bypass configured security checks by placing a long path prefix before a more restrictive short subdirectory path, thereby circumventing the intended security restrictions. The affected versions are widespread, including but not limited to Apache Tomcat 11.0.0-M1 through 11.0.24, and 10.1.0-M1 through 10.1.57, among multiple major versions. To remediate this issue, developers recommend upgrading to the following versions: Apache Tomcat 11.0.25, 10.1.58, and 9.0.121. Since this is a typical configuration and authorization control defect, all applications using Apache Tomcat are advised to perform immediate security updates and review their path restriction configuration logic to prevent similar bypass attacks.",
    tags_en: ["Apache Tomcat", "CVE-2026-65182", "Improper Access Control", "Security Restriction Bypass", "Tomcat"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/26/1", lang: "EN" }
    ]
  },
  {
    id: "20260826-012",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "提升個人資安意識：從日常習慣建立防範網路詐騙與資訊洩漏的實用指南",
    summary: "本文旨在強調資安事件常源於「疏忽」而非技術漏洞，提醒讀者應將安全意識融入日常生活習慣。文章指出，由於線上、金融及戀愛等領域的詐騙手法日益精巧，人們容易產生「不會發生在我身上」的安全盲區（安全不感症）。為維持警覺心，建議在日常行為中養成規律檢查安全規範的習慣，特別是面對可疑聯絡（如要求緊急匯款、冒充機構或提供假連結）時，應立即停止並拒絕接受任何進一步指示。若懷疑發生金融詐騙，需了解「黃金時間」的重要性，一旦察覺異常，應即刻採取行動：首先暫停相關帳戶交易；接著向銀行/金融應用程式的客服中心說明情況；最後，同步進行警方報案及金融監管機構等官方程序，並系統性地保存所有對話與轉帳紀錄作為證據。",
    tags: ["資安意識", "網路詐騙", "個人安全", "防範指南", "金流安全"],
    title_en: "Boosting Personal Cybersecurity Awareness: A Practical Guide to Preventing Online Scams and Information Leakage",
    summary_en: "This article aims to emphasize that cybersecurity incidents often stem from 'negligence' rather than technical vulnerabilities, reminding readers to integrate safety awareness into their daily lives. It points out that due to the increasing sophistication of scams in areas like online transactions, finance, and dating, people often develop a security blind spot, believing 'it won't happen to me.' To maintain vigilance, it recommends developing a habit of regularly checking security protocols in daily behavior. Specifically, when faced with suspicious communications (such as requests for urgent fund transfers, impersonation of institutions, or provision of fake links), one should immediately stop and refuse any further instructions. If financial fraud is suspected, it is crucial to understand the importance of the 'golden hour.' Upon detecting anything unusual, immediate action must be taken: first, temporarily suspend related account transactions; second, explain the situation to the bank/financial application's customer service center; and finally, simultaneously file a police report and follow official procedures with financial regulatory bodies, systematically saving all conversation and transfer records as evidence.",
    tags_en: ["Cybersecurity Awareness", "Online Scams", "Personal Safety", "Prevention Guide", "Financial Security"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=144244", lang: "EN" }
    ]
  },
  {
    id: "20260826-013",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 實驗性導入 Flatpak 套件支援，強化 Chromium 在 Linux 上的沙盒分發能力",
    summary: "負責 Chrome/Chromium 瀏覽器的 Google 工程師目前正在測試將其應用程式打包成 Flatpak 格式。這項開發旨在為 Chromium 提供一種更乾淨、更標準化的 Linux 應用程式沙盒化與分發體驗，特別有助於在非 RPM 或 Debian 等傳統發行版基礎的系統上提供支援。\n\n該實驗性功能已透過測試代碼合併，具體包含新增 `chrome/installer/linux/flatpak` 目錄、添加 `enable_flatpak` GN build argument，並更新安裝器配置以處理 Flatpak 的打包腳本和元數據。此舉讓 Chromium 可以更好地支援沙盒化配置，並擴展現有的 XDG portal 支援。\n\n雖然 Google 目前尚未正式承諾全面支持 Flatpak 套件，但這項測試代碼的合併顯示了其對提升跨發行版兼容性的積極探索。若能成功驗證，未來可能將使 Chrome/Chromium 在 Linux 生態系統中擁有更穩健、更易於部署的沙盒化分發模式。",
    tags: ["Google", "Chrome", "Chromium", "Flatpak", "Linux", "應用程式打包", "沙盒技術"],
    title_en: "Google Experimentally Adopts Flatpak Support for Packages, Enhancing Chromium's Sandboxed Distribution on Linux",
    summary_en: "Google engineers responsible for the Chrome/Chromium browser are currently testing the packaging of the application into the Flatpak format. This development aims to provide Chromium with a cleaner, more standardized Linux application sandboxing and distribution experience, which is particularly helpful for supporting systems that do not rely on traditional distributions like RPM or Debian. The experimental feature has been merged via test code, specifically including the addition of the `chrome/installer/linux/flatpak` directory, the addition of the `enable_flatpak` GN build argument, and updates to the installer configuration to handle Flatpak packaging scripts and metadata. This move allows Chromium to better support sandboxing configurations and expands existing XDG portal support. Although Google has not yet formally committed to full Flatpak support, the merging of this test code demonstrates its proactive exploration of improving cross-distribution compatibility. If successfully validated, this could potentially give Chrome/Chromium a more robust and easier-to-deploy sandboxed distribution model within the Linux ecosystem.",
    tags_en: ["Google", "Chrome", "Chromium", "Flatpak", "Linux", "Application Packaging", "Sandboxing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Chrome-Chromium-Flatpak", lang: "EN" }
    ]
  },
  {
    id: "20260826-014",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "Group-IB將「攻擊者中心威脅情報」正式上架AWS Marketplace，協助企業從被動防禦轉向預警式安全",
    summary: "資安公司Group-IB於26日宣布，其專注於「攻擊者中心威脅情報」（Attacker-centric Threat Intelligence）的解決方案已在Amazon Web Services (AWS) Marketplace正式上架。該解決方案旨在協助企業克服傳統防禦體系在事後應對上的局限性，實現預先偵測潛在威脅。Group-IB利用其龐大的網路安全資料湖和暗網監控能力，涵蓋了從竊取憑證、新型犯罪集團活動到進階持續性威脅（APT）等全方位的威脅範圍。\n\n核心產品為AI驅動的整合情報平台「Prevyn AI」。該系統能自動化複雜的調查流程，並提供結構化的分析結果，讓安全分析師無需耗費大量時間彙整資料，即可快速掌握攻擊跡象。此次上架AWS Marketplace後，企業安全團隊導入門檻大幅降低；AWS客戶可以直接在帳戶內購買威脅情報，實現單一帳單化和預算整合，從而能更迅速地加強資安防線。\n\nGroup-IB CEO Dmitri Volkov指出，隨著攻擊者利用AI加速偵察與改變攻擊基礎設施，企業必須將防禦模式從事後應對轉向主動預警。此舉讓更多團隊能夠輕鬆取得必要的情報資源。",
    tags: ["Group-IB", "AWS Marketplace", "威脅情報", "Prevyn AI", "APT", "資安"],
    title_en: "Group-IB Lists 'Attacker-centric Threat Intelligence' on AWS Marketplace, Helping Enterprises Shift from Passive Defense to Predictive Security",
    summary_en: "Cybersecurity firm Group-IB announced on the 26th that its solution focused on 'Attacker-centric Threat Intelligence' is now officially listed on the Amazon Web Services (AWS) Marketplace. This solution aims to help enterprises overcome the limitations of traditional defensive systems in post-incident response, enabling them to proactively detect potential threats. Group-IB leverages its vast cybersecurity data lake and dark web monitoring capabilities, covering a comprehensive range of threats from credential theft and new criminal group activities to Advanced Persistent Threats (APT). The core product is the AI-driven intelligence platform, 'Prevyn AI.' This system automates complex investigation workflows and provides structured analysis results, allowing security analysts to quickly grasp attack indicators without spending excessive time compiling data. Listing on the AWS Marketplace significantly lowers the barrier to entry for enterprise security teams; AWS customers can now purchase threat intelligence directly within their accounts, enabling single billing and budget integration, thereby allowing them to strengthen their cybersecurity defenses more rapidly. Dmitri Volkov, CEO of Group-IB, noted that as attackers utilize AI to accelerate reconnaissance and change attack infrastructure, enterprises must shift their defense model from reactive response to proactive warning. This move makes necessary intelligence resources easily accessible to more teams.",
    tags_en: ["Group-IB", "AWS Marketplace", "Threat Intelligence", "Prevyn AI", "APT", "Cybersecurity"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145437", lang: "EN" }
    ]
  },
  {
    id: "20260826-015",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Cartis結合物理與網路安全平台，打造國家重要設施的無中斷邊界防護系統",
    summary: "空間感知安全平台專業企業Cartis（카티스）提供融合實體安全與網路安全的綜合解決方案。該公司專為國家重要設施如原發電廠、仁川機場和大型資料中心設計了「無中斷架構」的邊界防護(PIDS)平台，確保在任何情況下都能維持監控功能。\n\n其核心技術包括AxiLog、AxiCos等產品線，並具備從硬體到軟體的自主研發能力。為應對國家級加密標準轉型趨勢，公司已推出整合量子抗性密碼(PQC)的AxiQuant，目標是將物理安全設備納入未來加密系統。\n\n目前重點發展方向是提升邊界防護平台的智能化和自動化，結合搭載AI模型的IHS-Alpha與移動式機器人，以降低誤報率。公司強調，在國家重要設施市場，安全性不應被視為成本，而應被視為不可或缺的資產。這類系統需要建立統一標準和認證體系來彌合物理與網路安全之間的鴻溝。",
    tags: ["Cartis", "PIDS", "實體安全", "網路安全", "量子抗性密碼(PQC)", "國家重要設施"],
    title_en: "Cartis Integrates Physical and Network Security Platforms to Build Uninterrupted Perimeter Defense Systems for Critical National Infrastructure",
    summary_en: "Cartis, a professional enterprise specializing in spatial perception security platforms, offers comprehensive solutions that integrate physical and network security. The company has designed a \"uninterrupted architecture\" Perimeter Intrusion Detection System (PIDS) platform specifically for critical national infrastructure, such as nuclear power plants, Incheon Airport, and large data centers, ensuring continuous monitoring functionality under all circumstances.\n\nIts core technologies include product lines such as AxiLog and AxiCos, and the company possesses independent R&D capabilities spanning from hardware to software. To address the trend of national-level cryptographic standard transitions, the company has launched AxiQuant, which integrates Post-Quantum Cryptography (PQC), aiming to incorporate physical security equipment into future cryptographic systems.\n\nCurrently, the focus of development is enhancing the intelligence and automation of the perimeter defense platform by combining it with AI-model-equipped IHS-Alpha and mobile robots, thereby reducing false alarm rates. The company emphasizes that, in the critical national infrastructure market, security should not be viewed as a cost, but as an indispensable asset. Such systems require the establishment of unified standards and certification systems to bridge the gap between physical and network security.",
    tags_en: ["Cartis", "PIDS", "Physical Security", "Network Security", "Post-Quantum Cryptography (PQC)", "Critical National Infrastructure"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145436", lang: "EN" }
    ]
  },
  {
    id: "20260826-016",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "國家情報院舉辦「國際網路安全峰會韓國」（CSK 2026），聚焦AI駭客威脅與全球協作",
    summary: "為應對快速變化的網路環境，國家情報院（NIS）宣布將於9月16日至18日在首爾COEX舉辦第三屆「國際網路安全峰會韓國」（Cyber Summit Korea, CSK 2026）。本次盛會以「連網世界，共建安全」為主題，旨在促進國際社會共同應對網路威脅。活動內容豐富多元，包括國際情報交流會議、專業論壇、國際網路模擬演練（APEX）等。\n\n特別值得關注的是，隨著高效能AI的出現，自主型AI駭客已成為現實威脅。本次峰會將重點檢驗在國家信息院主導下，結合公私軍部門建立的「AI防禦小組」，以應對實時網路攻擊的能力。此外，活動還涵蓋了國際戰略、新技術安全與信任等主題，邀請包括阿根廷聯邦網路情報廳長等外國情報機構首長進行主旨演講。\n\nNIS院長強調，CSK 2026將是一個交流平台，目標是在快速變化的網路環境中保護國民日常生活並推動企業創新。參與者可透過官方網站免費報名參加。",
    tags: ["國家情報院", "Cyber Summit Korea", "CSK 2026", "AI駭客", "國際網路安全", "網路威脅"],
    title_en: "National Intelligence Agency Hosts 'Cyber Summit Korea' (CSK 2026), Focusing on AI Hacking Threats and Global Cooperation",
    summary_en: "To address the rapidly changing cyber environment, the National Intelligence Agency (NIS) announced the third edition of the 'Cyber Summit Korea' (CSK 2026), to be held from September 16th to 18th at COEX in Seoul. With the theme 'Connected World, Shared Security,' the summit aims to promote international cooperation in addressing cyber threats. The event features diverse content, including international intelligence exchange meetings, professional forums, and international cyber simulation exercises (APEX).\n\nOf particular note is the emergence of autonomous AI hackers with the advent of high-performance AI, which has become a real threat. This year's summit will focus on testing the capacity of the 'AI Defense Group'—established under the leadership of the National Intelligence Agency and involving public, private, and military sectors—to respond to real-time cyber attacks. Furthermore, the event covers topics such as international strategy, new technology security, and trust, inviting foreign intelligence agency heads, such as the Director of the Argentine Federal Cyber Intelligence Agency, to deliver keynote speeches.\n\nThe NIS Director emphasized that CSK 2026 will serve as an exchange platform, aiming to protect the daily lives of citizens and promote corporate innovation within the rapidly evolving cyber environment. Participants can register for free via the official website.",
    tags_en: ["National Intelligence Agency", "Cyber Summit Korea", "CSK 2026", "AI Hacking", "International Cybersecurity", "Cyber Threats"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145440", lang: "EN" }
    ]
  }
];
