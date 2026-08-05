// data-20260414.js — 2026-04-14
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-14"] = [
  {
    id: "20260414-001",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟發布 CVE-2026-32181：Windows 權限管理缺陷導致本地服務拒絕攻擊",
    summary: "本漏洞（CVE-2026-32181）是微軟 Windows 作業系統中的一個權限管理缺陷（CWE-269）。該漏洞允許已授權的攻擊者在本地環境執行服務拒絕（Denial of Service, DoS）攻擊。根據 CVSS v3.1 評分，該漏洞的攻擊向量（AV）為本地（L），攻擊複雜度（AC）為低（L），權限要求（PR）為低（L），使用者互動（UI）為無（N），範圍（S）為本地（U），機密性（C）、完整性（I）和可用性（A）影響皆為無（N/N/H）。這意味著攻擊者只需在本地，且無需高權限，即可利用此缺陷造成服務中斷。受影響的產品涵蓋多個版本的 Windows 10、Windows 11 以及 Windows Server 2022 等。微軟已提供修補指南，建議使用者應立即透過官方修補程式更新系統，以防止本地未經授權的服務中斷。",
    tags: ["Microsoft Corporation", "CVE-2026-32181", "Windows", "服務拒絕", "權限管理", "CWE-269"],
    title_en: "Microsoft Releases CVE-2026-32181: Windows Privilege Management Flaw Leads to Local Denial of Service Attack",
    summary_en: "This vulnerability (CVE-2026-32181) is a privilege management flaw (CWE-269) in the Microsoft Windows operating system. The flaw allows an authorized attacker to execute a Denial of Service (DoS) attack in a local environment. According to the CVSS v3.1 scoring, the vulnerability has a Local Attack Vector (AV) of Local (L), Attack Complexity (AC) of Low (L), Privileges Required (PR) of Low (L), User Interaction (UI) of None (N), Scope (S) of Unchanged (U), and impacts on Confidentiality (C), Integrity (I), and Availability (A) are all None (N/N/H). This means an attacker only needs to be local and does not require high privileges to exploit this flaw and cause service disruption. Affected products include multiple versions of Windows 10, Windows 11, and Windows Server 2022. Microsoft has provided remediation guidelines, advising users to immediately update their systems using official patches to prevent unauthorized local service disruption.",
    tags_en: ["Microsoft Corporation", "CVE-2026-32181", "Windows", "Denial of Service", "Privilege Management", "CWE-269"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-32181", lang: "EN" }
    ]
  },
  {
    id: "20260414-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟發布史上最大規模補丁：修復 167 個漏洞，包含 SharePoint 零日及 Windows Defender 提升權限漏洞",
    summary: "微軟（Microsoft）在本次補丁週（Patch Tuesday）發布了針對 Windows 作業系統及相關軟體的 167 個安全漏洞修補程式，其中包括一個 SharePoint Server 的零日漏洞，以及一個名為「BlueHammer」的 Windows Defender 權限提升漏洞。安全專家警告，攻擊者已開始鎖定 SharePoint 的 CVE-2026-32201，該漏洞允許攻擊者在信任的 SharePoint 環境中偽造內容或介面，可能用於進行網路釣魚或社會工程攻擊。此外，Google Chrome 也修復了其 2026 年的第四個零日漏洞，而 Adobe Reader 的緊急更新則修復了另一個被積極利用的遠端程式碼執行漏洞（CVE-2026-34621）。文章指出，漏洞修補的數量激增，可能反映了人工智慧（AI）能力擴展帶來的更多漏洞發現。用戶應確保定期關閉並重啟瀏覽器，以確保所有更新能夠成功安裝。",
    tags: ["Microsoft", "CVE-2026-32201", "CVE-2026-33825", "Patch Tuesday", "SharePoint Server", "零日漏洞"],
    title_en: "Microsoft Releases Largest Patch Ever: Fixing 167 Vulnerabilities, Including SharePoint Zero-Day and Windows Defender Privilege Escalation Flaw",
    summary_en: "Microsoft released 167 security vulnerability patches for Windows operating systems and related software during this Patch Tuesday, including a zero-day vulnerability in SharePoint Server and a privilege escalation flaw in Windows Defender named \"BlueHammer.\" Security experts warn that attackers have begun targeting CVE-2026-32201 in SharePoint, a vulnerability that allows attackers to forge content or interfaces within a trusted SharePoint environment, potentially used for phishing or social engineering attacks. Furthermore, Google Chrome patched its fourth zero-day vulnerability of 2026, while an emergency update for Adobe Reader fixed another actively exploited remote code execution vulnerability (CVE-2026-34621). The article notes that the surge in patched vulnerabilities may reflect the increased number of discovered flaws due to the expansion of Artificial Intelligence (AI) capabilities. Users should ensure they regularly close and restart their browsers to guarantee that all updates are successfully installed.",
    tags_en: ["Microsoft", "CVE-2026-32201", "CVE-2026-33825", "Patch Tuesday", "SharePoint Server", "Zero-Day Vulnerability"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/04/patch-tuesday-april-2026-edition", lang: "EN" }
    ]
  },
  {
    id: "20260414-003",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安警示：駭客利用 Obsidian 插件生態系統進行跨平台社會工程攻擊，部署 AI 輔助後門 PHANTOMPULSE",
    summary: "Elastic Security Labs 發現一項新型的社會工程攻擊活動（代號 REF6598），目標為金融和加密貨幣領域的專業人士。攻擊者透過 LinkedIn 和 Telegram 建立信任，誘騙受害者使用 Obsidian 筆記應用程式的雲端同步功能，並利用其社區插件生態系統（特別是 Shell Commands 和 Hider 插件）來執行惡意程式碼。\n\n攻擊鏈是跨平台的，Windows 系統上，攻擊者使用一個名為 PHANTOMPULSE 的後門，這是一個高度 AI 生成的 Windows RAT，具備區塊鏈基礎的 C2 解析和進階的模組覆寫注入技術。macOS 系統則使用混淆的 AppleScript dropper，並以 Telegram 作為備用 C2 通訊機制。\n\n攻擊的初始存取點是 Obsidian 的雲端同步功能，攻擊者透過預先配置的插件，在受害者開啟共享虛擬金庫時，觸發惡意指令執行。這顯示了即使是合法應用程式的插件功能，若被惡意利用，也可能成為執行指令的關鍵向量。修補建議包括提高對應用程式插件權限的審核，並警惕透過雲端同步機制傳播的配置或插件。",
    tags: ["Obsidian", "Shell Commands", "PHANTOMPULSE", "社會工程", "跨平台攻擊", "插件生態系統", "RAT"],
    title_en: "Cybersecurity Alert: Hackers Use Obsidian Plugin Ecosystem for Cross-Platform Social Engineering Attack, Deploying AI-Assisted Backdoor PHANTOMPULSE",
    summary_en: "Elastic Security Labs discovered a novel social engineering campaign (codename REF6598) targeting professionals in the finance and cryptocurrency sectors. Attackers build trust via LinkedIn and Telegram, luring victims into using the cloud synchronization features of the Obsidian note-taking application, and exploiting its community plugin ecosystem (specifically Shell Commands and Hider plugins) to execute malicious code.\n\nThe attack chain is cross-platform. On Windows systems, attackers utilize a backdoor named PHANTOMPULSE, which is a highly AI-generated Windows RAT featuring blockchain-based C2 resolution and advanced module overwrite injection techniques. On macOS systems, the attack uses a obfuscated AppleScript dropper, with Telegram serving as a fallback C2 communication mechanism.\n\nThe initial point of access is Obsidian's cloud synchronization feature. Attackers trigger malicious command execution when the victim opens a shared virtual vault using pre-configured plugins. This demonstrates that even legitimate application plugin functionalities can become critical vectors for command execution if maliciously exploited. Remediation recommendations include enhancing the auditing of application plugin permissions and remaining vigilant against configurations or plugins propagated through cloud synchronization mechanisms.",
    tags_en: ["Obsidian", "Shell Commands", "PHANTOMPULSE", "Social Engineering", "Cross-Platform Attack", "Plugin Ecosystem", "RAT"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/phantom-in-the-vault", lang: "EN" }
    ]
  }
];
