// data-20260127.js — 2026-01-27
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-27"] = [
  {
    id: "20260127-001",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "歐盟啟動 SECURE 專案，提供資金支持中小企業提升產品符合《網路韌性法案》要求",
    summary: "歐盟為協助微型、小型及中型企業（MSMEs）應對《網路韌性法案》（CRA）的強制性網路安全要求，啟動了 SECURE 專案的資金支持措施。該法案要求產品製造商必須涵蓋產品的規劃、設計、開發和維護等全生命週期，以確保其網路安全。本次資金支持提供最高達 30,000 歐元的共同資助，用於協助企業提升其硬體和軟體產品的網路安全能力，以達到符合 CRA 的標準。企業可於 2026 年 1 月 28 日至 3 月 29 日提交申請。此專案由意大利國家網路安全協調中心協調，並獲得數位歐洲計畫（DEP）的歐盟資金支持，旨在協助中小企業順利過渡至新的合規標準。",
    tags: ["歐盟", "CRA", "網路韌性法案", "MSMEs", "網路安全", "SECURE 專案"],
    title_en: "EU Launches SECURE Project to Fund SMEs in Meeting Product Requirements under Cyber Resilience Act",
    summary_en: "The EU has launched the SECURE project funding initiative to assist micro, small, and medium-sized enterprises (MSMEs) in meeting the mandatory cybersecurity requirements of the Cyber Resilience Act (CRA). The Act mandates that product manufacturers must cover the entire product lifecycle—including planning, design, development, and maintenance—to ensure its cybersecurity. This funding support offers up to €30,000 in co-funding to help companies enhance the cybersecurity capabilities of their hardware and software products to meet CRA standards. Companies can submit applications from January 28 to March 29, 2026. The project is coordinated by the Italian National Cybersecurity Coordination Center and is supported by EU funding from the Digital Europe Programme (DEP), aiming to help MSMEs smoothly transition to the new compliance standards.",
    tags_en: ["EU", "CRA", "Cyber Resilience Act", "MSMEs", "Cybersecurity", "SECURE Project"],
    sources: [
      { name: "EC CRA 實施頁面（News）", url: "https://digital-strategy.ec.europa.eu/en/news/financial-support-small-businesses-improve-cybersecurity-products", lang: "EN" }
    ]
  },
  {
    id: "20260127-002",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "MobSF 報告生成器存在儲存型 XSS 漏洞，攻擊者可透過惡意 APK 劫持會話",
    summary: "資安工具 MobSF（Mobile Security Framework）在分析 Android Manifest 時，於版本 4.4.5 之前存在一儲存型跨站腳本攻擊（Stored XSS）漏洞（CVE-2026-24490）。此漏洞源於 MobSF 在生成 HTML 報告時，未對 `<data android:scheme=\"android_secret_code\">` 元素中的 `android:host` 屬性進行適當的清理（sanitization）。攻擊者可透過上傳惡意 APK，使該屬性內容被渲染到報告中，從而執行任意 JavaScript，導致受害者瀏覽器會話被劫持，進而可能造成帳號接管。此漏洞的修復版本為 4.4.5。建議使用者應立即升級 MobSF 至 4.4.5 或更高版本，以防範資料洩露與帳號被盜用。",
    tags: ["MobSF", "CVE-2026-24490", "XSS", "Android", "資安工具", "資訊安全"],
    title_en: "MobSF Report Generator Contains Stored XSS Vulnerability, Allowing Attackers to Hijack Sessions via Malicious APK",
    summary_en: "The security tool MobSF (Mobile Security Framework) contained a Stored Cross-Site Scripting (XSS) vulnerability (CVE-2026-24490) in versions prior to 4.4.5 when analyzing Android Manifests. This vulnerability stems from MobSF failing to properly sanitize the `android:host` attribute within the `<data android:scheme=\"android_secret_code\">` element when generating HTML reports. An attacker can upload a malicious APK, causing the content of this attribute to be rendered in the report, thereby executing arbitrary JavaScript. This can lead to the hijacking of the victim's browser session and potentially account takeover. The fixed version for this vulnerability is 4.4.5. Users are advised to immediately upgrade MobSF to version 4.4.5 or higher to prevent data leakage and account theft.",
    tags_en: ["MobSF", "CVE-2026-24490", "XSS", "Android", "Security Tool", "Information Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24490", lang: "EN" }
    ]
  }
];
