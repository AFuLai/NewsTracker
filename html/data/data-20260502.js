// data-20260502.js — 2026-05-02
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-02"] = [
  {
    id: "20260502-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "WordPress App Builder 插件存在越權修改用戶頭像的 Insecure Direct Object Reference 漏洞",
    summary: "WordPress 的 App Builder – Create Native Android & iOS Apps On The Flight 插件，在所有版本（至 5.6.0）中存在安全漏洞。此漏洞屬於 Insecure Direct Object Reference (IDOR)，根源於 `upload_avatar()` 函數缺乏權限驗證。該函數接受來自 POST 請求體中的攻擊者控制的 `user_id` 參數，並使用此參數更新用戶元數據，但未驗證請求者是否擁有修改目標帳戶的權限。這使得擁有「訂閱者」級別及以上權限的認證攻擊者，只需在請求體中提供任意目標 `user_id`，即可透過 `/wp-json/app-builder/v1/upload-avatar` 端點覆寫網站上任何用戶（包括管理員）的個人頭像。修補建議是開發者必須在處理此類 API 請求時，嚴格實施權限檢查，確保操作的目標資源與當前登入用戶的權限範圍一致。此漏洞的 CVSS 評分為未公開。",
    tags: ["WordPress", "App Builder", "CVE-2026-7638", "IDOR", "WordPress 插件", "Web 應用程式"],
    title_en: "WordPress App Builder Plugin Contains Insecure Direct Object Reference Vulnerability Allowing Unauthorized User Avatar Modification",
    summary_en: "The WordPress App Builder – Create Native Android & iOS Apps On The Flight plugin contains a security vulnerability in all versions (up to 5.6.0). This vulnerability is an Insecure Direct Object Reference (IDOR), stemming from the `upload_avatar()` function's lack of permission validation. This function accepts an attacker-controlled `user_id` parameter from the POST request body and uses it to update user metadata, but fails to validate whether the requester has the authority to modify the target account. This allows an authenticated attacker with 'Subscriber' level privileges or higher to overwrite the personal avatar of any user (including administrators) on the site, simply by providing an arbitrary target `user_id` in the request body via the `/wp-json/app-builder/v1/upload-avatar` endpoint. The recommended fix is that developers must strictly implement permission checks when handling such API requests, ensuring that the target resource for the operation aligns with the current logged-in user's authorized scope. The CVSS score for this vulnerability is undisclosed.",
    tags_en: ["WordPress", "App Builder", "CVE-2026-7638", "IDOR", "WordPress Plugin", "Web Application"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7638", lang: "EN" }
    ]
  }
];
