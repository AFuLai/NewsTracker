// data-20260530.js — 2026-05-30
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-30"] = [
  {
    id: "20260530-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Palo Alto Networks PAN-OS 遭利用 CVE-2026-0257 進行認證繞過，CISA 已列入 KEV 清單",
    summary: "Palo Alto Networks 發出警告，其 PAN-OS 和 Prisma Access 存在一項中等嚴重性漏洞 CVE-2026-0257，該漏洞允許攻擊者進行認證繞過，從而建立未經授權的 VPN 連線。此問題特別影響在啟用認證覆寫 Cookie 且具備特定憑證配置的 GlobalProtect 門戶或閘道設備。Rapid7 揭露，該漏洞已在野外被成功利用，最早可追溯至 2026 年 5 月 17 日，並有第二波利用活動。由於此類邊緣設備的認證繞過具有重大影響，資安廠商強烈建議受影響組織應緊急升級至供應商提供的修補程式。臨時緩解措施包括停用認證覆寫功能，或為該功能生成新的專用憑證。此外，美國 CISA 已將此漏洞納入已知被利用漏洞 (KEV) 目錄，要求聯邦民用行政部門在 2026 年 6 月 1 日前進行緩解。",
    tags: ["Palo Alto Networks", "PAN-OS", "CVE-2026-0257", "GlobalProtect", "認證繞過", "CISA", "KEV"],
    title_en: "Palo Alto Networks PAN-OS Exploited via CVE-2026-0257 for Authentication Bypass; CISA Lists in KEV",
    summary_en: "Palo Alto Networks has issued a warning regarding a medium-severity vulnerability, CVE-2026-0257, affecting its PAN-OS and Prisma Access. This vulnerability allows attackers to perform authentication bypass, thereby establishing unauthorized VPN connections. The issue specifically impacts GlobalProtect portals or gateway devices that have authentication overwrite cookies enabled and possess specific credential configurations. Rapid7 disclosed that the vulnerability has been successfully exploited in the wild, with the earliest exploitation traced back to May 17, 2026, and a second wave of exploitation activity observed. Due to the significant impact of such an edge device authentication bypass, cybersecurity vendors strongly recommend that affected organizations urgently upgrade to the patch provided by the vendor. Temporary mitigation measures include disabling the authentication overwrite function or generating new dedicated credentials for this function. Furthermore, the U.S. CISA has included this vulnerability in its Known Exploited Vulnerabilities (KEV) catalog, requiring federal civilian executive departments to remediate by June 1, 2026.",
    tags_en: ["Palo Alto Networks", "PAN-OS", "CVE-2026-0257", "GlobalProtect", "Authentication Bypass", "CISA", "KEV"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/pan-os-globalprotect-authentication.html", lang: "EN" }
    ]
  },
  {
    id: "20260530-002",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "npm套件供應鏈攻擊：駭客利用依賴混淆（Dependency Confusion）植入偵察惡意程式",
    summary: "微軟資安團隊揭露一場複雜的供應鏈攻擊，攻擊者利用惡意的 npm 套件，透過「依賴混淆」（Dependency Confusion）技術，在開發人員環境中部署了混淆的偵察載荷。攻擊者在 2026 年 5 月 28 日和 29 日，在九個模擬內部企業命名空間的範圍內，發布了多個惡意套件。這些套件透過 `postinstall` 腳本在執行 `npm install` 時自動執行，無需受害者程式碼呼叫。載荷是一個約 17 KB 的 JavaScript 滴落程式，用於環境指紋識別和憑證偵察，它會收集系統資訊、主機名稱和環境變數。攻擊鏈包含命名空間竊取（Namespace Squatting）和偽造企業元數據，旨在規避人工審查。攻擊的複雜性包括使用高版本號欺騙 npm 伺服器解析，以及採用多層混淆和 CI/CD 環境偵測繞過技術。微軟已將相關儲存庫和用戶下線。",
    tags: ["npm", "依賴混淆", "供應鏈攻擊", "後安裝鉤子", "偵察載荷", "開源安全"],
    title_en: "npm Package Supply Chain Attack: Hackers Use Dependency Confusion to Implant Reconnaissance Malware",
    summary_en: "Microsoft security teams revealed a complex supply chain attack where attackers utilized malicious npm packages and the 'Dependency Confusion' technique to deploy obfuscated reconnaissance payloads within developer environments. On May 28 and 29, 2026, the attackers published multiple malicious packages within the scope of nine simulated internal corporate namespaces. These packages automatically executed via `postinstall` scripts when `npm install` was run, without requiring calls from victim code. The payload is a JavaScript dropper, approximately 17 KB, designed for environment fingerprinting and credential reconnaissance. It collects system information, hostname, and environment variables. The attack chain included Namespace Squatting and forged corporate metadata, aiming to evade manual review. The complexity of the attack involved using high version numbers to deceive npm server resolution, as well as employing multi-layered obfuscation and CI/CD environment detection evasion techniques. Microsoft has taken the relevant repositories and user accounts offline.",
    tags_en: ["npm", "Dependency Confusion", "Supply Chain Attack", "postinstall hook", "reconnaissance payload", "open-source security"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/05/29/33-malicious-npm-packages-abuse-dependency-confusion-profile-developer-environments", lang: "EN" }
    ]
  }
];
