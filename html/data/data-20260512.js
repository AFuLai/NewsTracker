// data-20260512.js — 2026-05-12
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-12"] = [
  {
    id: "20260512-001",
    trackers: ["security"],
    category: "重大事件",
    title: "BWH Hotels 遭駭客入侵，超過六個月的預訂資料外洩，影響包含姓名與聯絡資訊",
    summary: "全球酒店集團 BWH Hotels（旗下包含 WorldHotels、Best Western Hotels & Resorts 等品牌）宣布發生資料外洩事件。根據公司發出的通知，駭客從 2025 年 10 月 14 日開始入侵，直到 4 月 22 日才被發現。攻擊者透過一個儲存部分房客預訂資料的網路應用程式取得存取權。受影響的資料包含姓名、電子郵件地址、電話號碼及預訂細節。BWH Hotels 強調，由於支付及其他財務資訊並未儲存在受影響系統，因此未被存取。公司在發現入侵後立即將該應用程式離線，並委請外部資安專家進行調查。BWH Hotels 對此事件深感憂慮，擔心竊取的資料可能被用於詐騙或網路釣魚攻擊。目前尚不清楚受影響的個人數量，且沒有已知的網路犯罪組織聲稱發動此次攻擊。",
    tags: ["BWH Hotels", "資料外洩", "預訂資料", "網路釣魚", "Best Western", "資訊安全"],
    title_en: "BWH Hotels Suffers Hacker Breach, Over Six Months of Reservation Data Exposed, Including Names and Contact Information",
    summary_en: "Global hotel group BWH Hotels (which includes brands such as WorldHotels and Best Western Hotels & Resorts) has announced a data breach incident. According to a company notice, hackers gained access starting on October 14, 2025, and were discovered on April 22. The attackers gained access through a web application that stored some guest reservation data. The affected data includes names, email addresses, phone numbers, and reservation details. BWH Hotels emphasized that payment and other financial information were not stored in the affected system and were therefore not accessed. After discovering the intrusion, the company immediately took the application offline and commissioned external cybersecurity experts to conduct an investigation. BWH Hotels expressed deep concern over the incident, fearing that the stolen data could be used for fraud or phishing attacks. The number of affected individuals is currently unknown, and no known cybercrime organization has claimed responsibility for the attack.",
    tags_en: ["BWH Hotels", "Data Breach", "Reservation Data", "Phishing", "Best Western", "Information Security"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/bwh-hotels-says-hackers-had-access-to-reservation-data-for-6-months", lang: "EN" }
    ]
  },
  {
    id: "20260512-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "五月修補日：微軟修復 118 個漏洞，包含 Netlogon 堆緩溢出及繞過 Entra ID 的重大漏洞",
    summary: "本月修補日（Patch Tuesday）期間，多家科技巨頭加速修補安全漏洞。微軟發布了針對其 Windows 作業系統及產品的更新，修復了至少 118 個安全漏洞。其中，有 16 個被標記為「關鍵」級別，可讓攻擊者在無需用戶互動的情況下，遠端接管受影響的 Windows 設備。特別值得關注的漏洞包括：CVE-2026-41089，這是 Windows Netlogon 的關鍵堆疊緩衝溢出，可讓攻擊者在網域控制器上取得 SYSTEM 權限；CVE-2026-41103，這是一個提升權限的漏洞，允許未經授權的攻擊者透過偽造憑證繞過 Entra ID。此外，蘋果、Mozilla 和 Google 等公司也同步發布了大量更新，修復了數十個至上百個漏洞。這些修補動作顯示了產業對安全漏洞修補速度的提升，特別是受益於 AI 輔助工具的輔助。",
    tags: ["Patch Tuesday", "Microsoft", "CVE-2026-41089", "Netlogon", "Entra ID", "Windows", "RCE"],
    title_en: "May Patch Day: Microsoft fixes 118 vulnerabilities, including critical Netlogon stack overflow and Entra ID bypass flaws",
    summary_en: "During this month's Patch Tuesday, multiple tech giants accelerated their efforts to patch security vulnerabilities. Microsoft released updates for its Windows operating system and products, fixing at least 118 security flaws. Of these, 16 were marked as 'Critical,' allowing attackers to remotely compromise affected Windows devices without user interaction. Of particular note are the vulnerabilities: CVE-2026-41089, a critical stack buffer overflow in Windows Netlogon, which could allow an attacker to gain SYSTEM privileges on a domain controller; and CVE-2026-41103, an elevation of privilege vulnerability that allows unauthorized attackers to bypass Entra ID using forged credentials. Furthermore, companies like Apple, Mozilla, and Google also released numerous updates, patching dozens to hundreds of vulnerabilities. These patching efforts demonstrate the industry's increased speed in addressing security flaws, particularly benefiting from AI-assisted tools.",
    tags_en: ["Patch Tuesday", "Microsoft", "CVE-2026-41089", "Netlogon", "Entra ID", "Windows", "RCE"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/05/patch-tuesday-may-2026-edition", lang: "EN" }
    ]
  },
  {
    id: "20260512-003",
    trackers: ["os", "security"],
    category: "Android",
    title: "Fortinet FortiTokenAndroid 遭 Improper Export 漏洞攻擊：CVE-2026-44279 影響多版本",
    summary: "本漏洞 CVE-2026-44279 屬於 Android 應用元件的 Improper Export 缺陷（CWE-926）。它影響 Fortinet FortiTokenAndroid 的多個版本，包括 6.2、6.1 和 5.2 等。攻擊者可能透過此缺陷，在未經適當控制的情況下，取得對應用程式的越權存取權限。根據 CVSS v3.1 評分，此漏洞的攻擊向量（AV）為本地（L），權限（PR）為低（L），複雜度（AC）為低（L），且無需使用者互動（UI:N）。由於機密性（C）為高（H），代表攻擊者可竊取大量敏感資料，實務上可能導致身份驗證或安全憑證被竊取。建議 Fortinet 相關使用者應立即參考官方公告，並升級至修補後的版本以修復此元件的權限控制問題。",
    tags: ["Fortinet", "FortiTokenAndroid", "CVE-2026-44279", "Android", "Improper Export", "CWE-926"],
    title_en: "Fortinet FortiTokenAndroid Affected by Improper Export Vulnerability: CVE-2026-44279 Impacts Multiple Versions",
    summary_en: "This vulnerability, CVE-2026-44279, is an Improper Export flaw in an Android application component (CWE-926). It affects multiple versions of Fortinet FortiTokenAndroid, including 6.2, 6.1, and 5.2. Through this flaw, an attacker may gain unauthorized access to the application without proper control. According to the CVSS v3.1 scoring, the attack vector (AV) is Local (L), the privileges required (PR) is Low (L), the attack complexity (AC) is Low (L), and no user interaction is required (UI:N). Since the confidentiality (C) is High (H), it means an attacker can steal a large amount of sensitive data, which could practically lead to the theft of identity verification or security credentials. Fortinet users are advised to immediately refer to the official announcement and upgrade to a patched version to fix this component's permission control issue.",
    tags_en: ["Fortinet", "FortiTokenAndroid", "CVE-2026-44279", "Android", "Improper Export", "CWE-926"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-44279", lang: "EN" }
    ]
  }
];
