// data-20260223.js — 2026-02-23
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-23"] = [
  {
    id: "20260223-001",
    trackers: ["os", "security"],
    category: "Android",
    title: "AliasVault 應用程式曝露備份檔案風險：本地攻擊可竊取未加密的 API Session Token",
    summary: "AliasVault 應用程式版本 0.25.3 及更早版本存在一項安全漏洞。此漏洞影響「Backup Handler」組件中 `shared_prefs/aliasvault.xml` 檔案的未知程式碼。攻擊者透過操縱 `accessToken`/`refreshToken`/`metadata`/`key_derivation_params`/`auth_methods` 等參數，可能導致備份檔案資料外洩給未經授權的控制範圍。此攻擊需在本地環境執行，且被評估為具有高複雜度，目前已公開可用的利用程式。開發者建議升級至版本 0.26.0 以修復此問題。開發者指出，由於 AliasVault 採用零知識加密設計，`aliasvault.xml` 中儲存的 Token 僅為 API Session Token，本身無法解密金庫內容，仍需主密碼。然而，為避免不必要的風險，建議用戶不應將這些 Token 包含在備份檔案中。",
    tags: ["AliasVault", "Android", "API Session Token", "備份檔案", "本地攻擊"],
    title_en: "AliasVault Application Exposed Backup File Risk: Local Attack Can Steal Unencrypted API Session Token",
    summary_en: "A security vulnerability exists in AliasVault application versions 0.25.3 and earlier. This vulnerability affects unknown code within the `shared_prefs/aliasvault.xml` file in the \"Backup Handler\" component. By manipulating parameters such as `accessToken`, `refreshToken`, `metadata`, `key_derivation_params`, and `auth_methods`, an attacker may cause backup file data to leak to unauthorized control. This attack requires local execution and is assessed to have high complexity, with publicly available exploit code. Developers recommend upgrading to version 0.26.0 to fix this issue. Developers note that because AliasVault uses a zero-knowledge encryption design, the Token stored in `aliasvault.xml` is only an API Session Token and cannot decrypt the vault content itself, which still requires the master password. However, to avoid unnecessary risk, users are advised not to include these Tokens in backup files.",
    tags_en: ["AliasVault", "Android", "API Session Token", "Backup File", "Local Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-2974", lang: "EN" }
    ]
  }
];
