// data-20260526.js — 2026-05-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-26"] = [
  {
    id: "20260526-001",
    trackers: ["security"],
    category: "重大事件",
    title: "回顧 Dark Reading 創辦人 Tim Wilson 傳奇：資安媒體如何從報導轉型為產業領導者",
    summary: "本文非技術新聞，而是回顧資安媒體 Dark Reading 創辦人 Tim Wilson 的生平與貢獻。Wilson 自 2006 年起，以其深刻且具洞察力的寫作風格，確立了資安新聞報導的標準。他不僅是優秀的記者，更是一位媒體企業家，將資安報導從單純的事件追蹤，提升到產業趨勢和深度分析的層次。Wilson 創建了 INsecurity 這樣的產業會議，旨在讓 CISO 和資安高階主管在無廠商影響的環境下，分享實戰經驗與制定防禦策略。文章強調，資安的本質是與人相關的，持續演進，這份精神和對讀者的服務精神，至今仍是 Dark Reading 團隊持續發展的動力。目前 Dark Reading 透過多媒體內容、AI 知識代理人等新形式，延續著 Wilson 的精神，致力於提供更全面的資安資訊。",
    tags: ["Dark Reading", "Tim Wilson", "資安媒體", "資安產業趨勢", "CISO", "內容行銷"],
    title_en: "A Retrospective on Dark Reading Founder Tim Wilson's Legacy: How Cybersecurity Media Transformed from Reporting to Industry Leadership",
    summary_en: "This article is not a technical news piece, but a look back at the life and contributions of Dark Reading founder, Tim Wilson. Since 2006, Wilson established the standard for cybersecurity news reporting with his deep and insightful writing style. He was not only an excellent journalist but also a media entrepreneur, elevating cybersecurity reporting from mere event tracking to the level of industry trends and deep analysis. Wilson created industry conferences like INsecurity, aiming to allow CISOs and cybersecurity executives to share practical experiences and formulate defense strategies in an environment free from vendor influence. The article emphasizes that the nature of cybersecurity is human-related, constantly evolving. This spirit and dedication to serving readers remain the driving force for the Dark Reading team today. Currently, Dark Reading continues Wilson's spirit by adopting new formats, such as multimedia content and AI knowledge agents, striving to provide more comprehensive cybersecurity information.",
    tags_en: ["Dark Reading", "Tim Wilson", "Cybersecurity Media", "Cybersecurity Industry Trends", "CISO", "Content Marketing"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cybersecurity-operations/remembering-tim-wilson-legacy-dark-reading", lang: "EN" }
    ]
  },
  {
    id: "20260526-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復藍牙 L2CAP 零指針解引用漏洞 (CVE-2026-45834)",
    summary: "本漏洞CVE-2026-45834存在於Linux核心的藍牙（Bluetooth）L2CAP元件中。該問題屬於零指針解引用（null-ptr-deref）類型，具體發生在`l2cap_sock_state_change_cb()`函數中。修補內容是新增一個空值保護機制（NULL guard），使其與已存在於`l2cap_sock_resume_cb()`和`l2cap_sock_ready_cb()`中的保護機制保持一致性。由於這是一個核心元件的修復，建議所有使用Linux核心的系統管理員應立即更新至包含此修補的最新核心版本，以避免潛在的藍牙服務層級漏洞。由於原文未提供CVSS分數或具體攻擊向量，修補建議為升級Linux核心。",
    tags: ["Linux 核心", "Bluetooth", "L2CAP", "CVE-2026-45834", "零指針解引用", "kernel.org"],
    title_en: "Linux Kernel Fixes Bluetooth L2CAP Null Pointer Dereference Vulnerability (CVE-2026-45834)",
    summary_en: "This vulnerability, CVE-2026-45834, resides in the Bluetooth L2CAP component of the Linux kernel. The issue is a null-ptr-dereference type, specifically occurring in the `l2cap_sock_state_change_cb()` function. The fix involves adding a NULL guard mechanism to ensure consistency with the protections already implemented in `l2cap_sock_resume_cb()` and `l2cap_sock_ready_cb()`. Since this is a fix for a core component, system administrators using Linux kernels are advised to immediately update to the latest kernel version containing this patch to prevent a potential Bluetooth service-level vulnerability. As the original text did not provide a CVSS score or specific attack vector, the patch recommendation is to upgrade the Linux kernel.",
    tags_en: ["Linux Kernel", "Bluetooth", "L2CAP", "CVE-2026-45834", "Null Pointer Dereference", "kernel.org"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-45834", lang: "EN" }
    ]
  },
  {
    id: "20260526-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復藍牙 L2CAP 模組的空指針解引用漏洞 (CVE-2026-45835)",
    summary: "本漏洞（CVE-2026-45835）存在於 Linux 核心的藍牙 L2CAP 模組中。該問題屬於空指針解引用（null-ptr-deref）類型的安全缺陷，具體發生在 `l2cap_sock_new_connection_cb()` 函數中。修補措施是新增空指針檢查機制（NULL guard），使其與已存在於 `l2cap_sock_resume_cb()` 和 `l2cap_sock_ready_cb()` 函數中的保護機制保持一致。由於這是一個核心層級的修補，所有使用受影響 Linux 核心版本的系統都可能受到影響。建議系統管理員應立即升級到包含此修補的 Linux 核心版本，以防止潛在的利用風險。由於原文未提供 CVSS 分數或具體攻擊向量，修補建議應以核心更新為主要重點。",
    tags: ["Linux 核心", "CVE-2026-45835", "藍牙", "L2CAP", "空指針解引用", "kernel.org"],
    title_en: "Linux Kernel Patch: Fixes Null Pointer Dereference Vulnerability in Bluetooth L2CAP Module (CVE-2026-45835)",
    summary_en: "This vulnerability (CVE-2026-45835) resides in the Bluetooth L2CAP module of the Linux kernel. The issue is a null-pointer-dereference type security flaw, specifically occurring within the `l2cap_sock_new_connection_cb()` function. The fix involves adding a NULL guard mechanism, ensuring consistency with the protection mechanisms already present in the `l2cap_sock_resume_cb()` and `l2cap_sock_ready_cb()` functions. Since this is a core-level patch, all systems running the affected Linux kernel version may be impacted. System administrators are advised to immediately upgrade to the Linux kernel version containing this patch to prevent potential exploitation risks. As the original text did not provide a CVSS score or specific attack vector, the patch recommendation should focus primarily on kernel updates.",
    tags_en: ["Linux Kernel", "CVE-2026-45835", "Bluetooth", "L2CAP", "Null Pointer Dereference", "kernel.org"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-45835", lang: "EN" }
    ]
  },
  {
    id: "20260526-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復藍牙 L2CAP 模組的空指針解引用漏洞 (CVE-2026-45836)",
    summary: "本漏洞 CVE-2026-45836 存在於 Linux 核心的藍牙 (Bluetooth) L2CAP 模組中。該問題屬於空指針解引用 (null-ptr-deref) 類型，具體發生在 `l2cap_sock_get_sndtimeo_cb()` 函數中。修補措施是新增空指針檢查機制 (NULL guard)，使其與已存在於 `l2cap_sock_resume_cb()` 和 `l2cap_sock_ready_cb()` 中的檢查邏輯一致，以防止惡意輸入或特定操作導致的崩潰或安全問題。由於原文未提供 CVSS 分數或具體攻擊向量，實務影響為藍牙相關服務的穩定性與安全性。建議系統管理員應立即升級至包含此修補的 Linux 核心版本，以確保藍牙堆疊的完整性與安全性。",
    tags: ["Linux 核心", "CVE-2026-45836", "藍牙", "L2CAP", "空指針解引用", "kernel.org"],
    title_en: "Linux Kernel Patch: Fixes Null Pointer Dereference Vulnerability in Bluetooth L2CAP Module (CVE-2026-45836)",
    summary_en: "The vulnerability CVE-2026-45836 exists in the Bluetooth L2CAP module of the Linux kernel. This issue is a null-ptr-dereference type, specifically occurring in the `l2cap_sock_get_sndtimeo_cb()` function. The fix involves adding a NULL guard mechanism, ensuring consistency with the existing check logic in `l2cap_sock_resume_cb()` and `l2cap_sock_ready_cb()`. This prevents crashes or security issues caused by malicious input or specific operations. Since the original text did not provide a CVSS score or specific attack vector, the practical impact relates to the stability and security of Bluetooth-related services. System administrators are advised to immediately upgrade to the Linux kernel version containing this patch to ensure the integrity and security of the Bluetooth stack.",
    tags_en: ["Linux Kernel", "CVE-2026-45836", "Bluetooth", "L2CAP", "null-ptr-dereference", "kernel.org"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-45836", lang: "EN" }
    ]
  },
  {
    id: "20260526-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "NVIDIA顯示驅動程式曝核心漏洞 CVE-2025-33221，可能導致資料篡改與服務拒絕",
    summary: "NVIDIA 的顯示驅動程式（適用於 Windows 與 Linux）內建了核心驅動層的漏洞 CVE-2025-33221。此漏洞允許使用者透過特定的操作，導致系統對關鍵資源的權限分配錯誤。若成功利用，攻擊者可能造成資料篡改（data tampering）或導致服務拒絕（denial of service）。此漏洞的根本原因為不當的輸入驗證（CWE-20）。根據 CVSS 3.1 評分，攻擊向量（AV）為本地（L），複雜度（AC）為本地（L），權限（PR）為高（H），使用者互動（UI）為無（N），範圍（S）為無（U），機密性（C）為無（N），完整性（I）為無（N），可用性（A）為高（H）。修補建議是更新受影響的 NVIDIA 顯示驅動程式版本，特別是針對 Linux 系統的 595 至 595.71.05、535 至 535.309.01，以及 580 至 580.159.03 等版本，以及 Windows 系統的相應版本。",
    tags: ["NVIDIA", "CVE-2025-33221", "顯示驅動程式", "Linux", "Windows", "核心漏洞"],
    title_en: "NVIDIA Display Driver Exposed to Core Vulnerability CVE-2025-33221, Potentially Leading to Data Tampering and Denial of Service",
    summary_en: "A vulnerability, CVE-2025-33221, has been found in NVIDIA's display drivers (for Windows and Linux), residing within the core driver layer. This vulnerability allows a user, through specific operations, to cause incorrect permission assignment for critical system resources. If successfully exploited, an attacker could cause data tampering or lead to a denial of service. The root cause of this vulnerability is improper input validation (CWE-20). According to the CVSS 3.1 scoring, the Attack Vector (AV) is Local (L), Attack Complexity (AC) is Low (L), Privileges Required (PR) is High (H), User Interaction (UI) is None (N), Scope (S) is Unchanged (U), Confidentiality (C) is None (N), Integrity (I) is None (N), and Availability (A) is High (H). The recommended remediation is to update the affected NVIDIA display driver versions, specifically for Linux systems versions 595 to 595.71.05, 535 to 535.309.01, and 580 to 580.159.03, as well as corresponding versions for Windows systems.",
    tags_en: ["NVIDIA", "CVE-2025-33221", "Display Driver", "Linux", "Windows", "Core Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-33221", lang: "EN" }
    ]
  },
  {
    id: "20260526-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "NVIDIA Linux顯示驅動程式曝「權限處理不當」漏洞，可能導致權限提升與程式碼執行",
    summary: "NVIDIA 顯示驅動程式的 Linux 版本，在核心模式的層級處理器（kernel mode layer handler）中存在一個安全漏洞，編號為 CVE-2026-24194。此漏洞源於權限處理不當（Improper Preservation of Permissions，CWE-281）。攻擊者若成功利用此漏洞，可能導致系統服務拒絕（Denial of Service）、權限提升（Escalation of privileges）、資訊洩露、資料篡改，甚至執行惡意程式碼。該漏洞的攻擊向量（AV）為本地（L），複雜度（AC）為本地（L），權限要求（PR）為本地（L），且無需使用者互動（UI:N）。根據 CVSS v3.1 評分，其機密性（C）、完整性（I）、可用性（A）皆為高（H）。受影響的產品為 NVIDIA GPU 顯示驅動程式，影響範圍涵蓋多個版本，包括 595 up to 595.71.05 等。建議使用者應立即更新至修補後的驅動程式版本，以避免遭受攻擊。",
    tags: ["NVIDIA", "CVE-2026-24194", "Linux", "顯示驅動程式", "權限提升", "核心漏洞"],
    title_en: "NVIDIA Linux Display Driver Exposed to 'Improper Permission Handling' Vulnerability, Potentially Leading to Privilege Escalation and Code Execution",
    summary_en: "A security vulnerability, designated CVE-2026-24194, exists in the kernel mode layer handler of the NVIDIA display driver for Linux. This vulnerability stems from improper preservation of permissions (CWE-281). If successfully exploited, an attacker could potentially cause Denial of Service, privilege escalation, information leakage, data tampering, or even execute malicious code. The vulnerability has a local attack vector (AV:L), local complexity (AC:L), and local privilege requirement (PR:L), and requires no user interaction (UI:N). According to the CVSS v3.1 scoring, the Confidentiality (C), Integrity (I), and Availability (A) are all rated High (H). The affected product is the NVIDIA GPU display driver, impacting multiple versions, including 595 up to 595.71.05. Users are advised to immediately update to the patched driver version to prevent exploitation.",
    tags_en: ["NVIDIA", "CVE-2026-24194", "Linux", "Display Driver", "Privilege Escalation", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24194", lang: "EN" }
    ]
  },
  {
    id: "20260526-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "NVIDIA Linux顯示驅動程式曝出競態條件漏洞 (CVE-2026-24199)，可能導致服務拒絕",
    summary: "NVIDIA 的 Linux 顯示驅動程式內嵌於核心模組中，存在一個名為 CVE-2026-24199 的漏洞。此漏洞允許使用者透過重新排序編譯器或處理器記憶體指令，誘發一個競態條件 (Race Condition)。若成功利用，攻擊者可能導致系統發生服務拒絕 (Denial of Service, DoS)。此漏洞的影響範圍涵蓋多個版本的 NVIDIA 顯示驅動程式，包括但不限於 595 up to 595.71.05、535 up to 535.309.01，以及 580 up to 580.159.03 等。由於此漏洞屬於核心模組層面，建議使用者應立即更新至修補後的驅動程式版本，以避免潛在的系統不穩定性或服務中斷。建議系統管理員應參考 NVIDIA 官方公告，進行全面的版本盤點與升級。",
    tags: ["NVIDIA", "CVE-2026-24199", "Linux", "顯示驅動程式", "核心模組", "競態條件"],
    title_en: "NVIDIA Linux Display Driver Exposed to Race Condition Vulnerability (CVE-2026-24199), Potentially Leading to Denial of Service",
    summary_en: "The NVIDIA Linux display driver, which is embedded within the kernel module, contains a vulnerability identified as CVE-2026-24199. This vulnerability allows a user to trigger a Race Condition by reordering compiler or processor memory instructions. Successful exploitation could lead to a Denial of Service (DoS) condition on the system. The scope of this vulnerability affects multiple versions of the NVIDIA display driver, including but not limited to 595 up to 595.71.05, 535 up to 535.309.01, and 580 up to 580.159.03. Since this vulnerability resides at the kernel module level, users are advised to immediately update to a patched driver version to prevent potential system instability or service interruption. System administrators are recommended to refer to the official NVIDIA announcement for a comprehensive version inventory and upgrade.",
    tags_en: ["NVIDIA", "CVE-2026-24199", "Linux", "Display Driver", "Kernel Module", "Race Condition"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24199", lang: "EN" }
    ]
  },
  {
    id: "20260526-008",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "印度 CERT-In 發布新指引：要求修補關鍵漏洞，應對 AI 輔助的網路威脅",
    summary: "印度電腦緊急應變小組 (CERT-In) 發布新指引，要求組織必須在發現關鍵安全漏洞後，若可行，應於 12 小時內修補所有暴露於網際網路的系統。此舉旨在應對威脅行為者利用人工智慧 (AI) 工具和大型語言模型 (LLMs) 自動化漏洞發現和攻擊的威脅。CERT-In 指出，AI 輔助的網路攻擊能大幅縮短攻擊準備時間，使攻擊變得自主化，並可能攻擊 AI 系統本身（如透過 Prompt Injection 或模型操縱）。為應對此趨勢，指引建議採取零信任架構 (Zero Trust)、深度防禦、實施 SBOM 驗證來降低供應鏈風險，並強調必須持續進行風險評估和漏洞管理。具體修補時限包括：外部暴露的關鍵漏洞需在 1 天內，而外部暴露的關鍵漏洞需在 12 小時內修補。",
    tags: ["CERT-In", "AI 威脅", "漏洞修補", "零信任", "網路安全法規", "LLMs"],
    title_en: "India's CERT-In Issues New Guidelines: Mandating Critical Vulnerability Patching to Counter AI-Assisted Cyber Threats",
    summary_en: "India's Computer Emergency Response Team (CERT-In) has issued new guidelines requiring organizations to patch all internet-exposed systems within 12 hours, if feasible, after discovering critical security vulnerabilities. This measure aims to counter threats posed by threat actors utilizing Artificial Intelligence (AI) tools and Large Language Models (LLMs) to automate vulnerability discovery and attacks. CERT-In points out that AI-assisted cyber attacks can significantly reduce attack preparation time, making attacks autonomous, and may even target AI systems themselves (e.g., through Prompt Injection or model manipulation). To address this trend, the guidelines recommend adopting Zero Trust architecture, deep defense, and implementing SBOM verification to mitigate supply chain risks, while emphasizing continuous risk assessment and vulnerability management. Specific patching timelines include: critical vulnerabilities exposed externally must be patched within 1 day, and critical vulnerabilities exposed externally must be patched within 12 hours.",
    tags_en: ["CERT-In", "AI Threats", "Vulnerability Patching", "Zero Trust", "Cybersecurity Regulations", "LLMs"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/cert-in-mandates-12-hour-patching-for.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "伊朗駭客群 MuddyWater 透過 DLL Side-loading 攻擊多國組織，目標涵蓋關鍵基礎設施與金融服務",
    summary: "資安研究指出，伊朗駭客群 MuddyWater 在 2026 年第一季發動了大規模的網路間諜活動，已鎖定橫跨四個大洲、九個國家的至少九個組織。受害目標涵蓋工業製造、教育、金融服務及專業服務等關鍵領域，包括一家大型韓國電子製造商、中東國際機場和拉丁美洲金融服務提供商。攻擊者主要利用 DLL side-loading 技術，透過合法簽署的 Fortemedia (fmapp.exe) 和 SentinelOne (sentinelmemoryscanner.exe) 二進位檔，執行惡意 DLL。這些 DLL 內嵌了 ChromElevator 工具，能繞過 App-Bound Encryption (ABE) 保護，竊取來自 Chromium 瀏覽器的密碼、Cookie 和支付卡資料。此外，攻擊鏈使用 Node.js 腳本啟動 PowerShell，進行偵察、截圖、SAM hive 竊取、權限提升和 SOCKS5 反向代理隧道建立。攻擊模式顯示出高度的規律性和專業性，屬於成熟的植入式活動。修補建議應包含監控合法應用程式的行為異常，特別是涉及 DLL 載入和權限提升的行為。",
    tags: ["MuddyWater", "DLL side-loading", "Fortemedia", "SentinelOne", "PowerShell", "ChromElevator", "伊朗駭客", "關鍵基礎設施"],
    title_en: "Iranian Hacker Group MuddyWater Attacks Multi-National Organizations Using DLL Side-loading, Targeting Critical Infrastructure and Financial Services",
    summary_en: "Cybersecurity research indicates that the Iranian hacker group MuddyWater launched a large-scale cyber espionage campaign in Q1 2026, targeting at least nine organizations across four continents and nine countries. Affected targets spanned critical sectors including industrial manufacturing, education, finance, and professional services, including a major South Korean electronics manufacturer, a Middle Eastern international airport, and a Latin American financial service provider. The attackers primarily utilized DLL side-loading techniques, executing malicious DLLs through legitimately signed binaries from Fortemedia (fmapp.exe) and SentinelOne (sentinelmemoryscanner.exe). These DLLs embedded the ChromElevator tool, which can bypass App-Bound Encryption (ABE) protection to steal passwords, cookies, and payment card data from Chromium browsers. Furthermore, the attack chain used Node.js scripts to initiate PowerShell, performing reconnaissance, screen capturing, SAM hive theft, privilege escalation, and establishing SOCKS5 reverse proxy tunnels. The attack pattern demonstrates a high degree of regularity and professionalism, indicative of a mature implant activity. Remediation recommendations should include monitoring for behavioral anomalies in legitimate applications, especially those involving DLL loading and privilege escalation.",
    tags_en: ["MuddyWater", "DLL side-loading", "Fortemedia", "SentinelOne", "PowerShell", "ChromElevator", "Iranian Hackers", "Critical Infrastructure"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/muddywater-uses-dll-side-loading-in.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "警惕 MFA 提示轟炸攻擊：分析 Cisco 案例，強調推播型 MFA 的實質風險",
    summary: "多因素驗證（MFA）本應是身份安全的關鍵防線，但攻擊者已發現無需竊取第二因素，只需誘騙使用者授權。此「MFA 提示轟炸」（Prompt Bombing）攻擊，利用攻擊者已獲取的有效帳密，透過重複觸發推播 MFA 提示，搭配社交工程（如冒充 IT 部門的語音詐騙），耗盡或迷惑受害者，最終使其誤判並授權登入。Cisco 2022 年的事件即為典型範例：攻擊者透過竊取員工帳密，持續觸發 MFA 提示，最終成功誘騙員工授權，取得 VPN 存取權，並竊取了大量資料。文章指出，推播型 MFA 缺乏來源地、設備和行為的明確指示，容易被攻擊者利用。為防範此類攻擊，建議組織應轉向使用抗釣魚的 MFA 因子（如 FIDO2 安全金鑰或密碼匹配），並實施條件式存取策略，在登入時加入地理位置、設備狀態等風險訊號，同時應持續掃描 Active Directory 以移除已洩露的帳密。",
    tags: ["MFA", "Prompt Bombing", "推播型 MFA", "FIDO2", "社交工程", "Cisco", "身份安全"],
    title_en: "Beware of MFA Prompt Bombing Attacks: Analyzing the Cisco Case and Highlighting the Real Risks of Push-Based MFA",
    summary_en: "Multi-Factor Authentication (MFA) should be a critical defense for identity security, but attackers have found ways to trick users into authorizing access without needing to steal the second factor. This 'MFA Prompt Bombing' attack utilizes valid credentials obtained by attackers to repeatedly trigger push MFA prompts, combined with social engineering (such as vishing impersonating the IT department), to exhaust or confuse the victim, ultimately leading them to mistakenly authorize the login. The 2022 Cisco incident is a typical example: attackers stole employee credentials and continuously triggered MFA prompts, eventually successfully tricking an employee into authorizing access, gaining VPN access, and exfiltrating a large amount of data. The article points out that push-based MFA lacks clear indicators of source, device, and behavior, making it easily exploitable by attackers. To prevent such attacks, organizations are advised to transition to phishing-resistant MFA factors (such as FIDO2 security keys or password matching) and implement Conditional Access policies, adding risk signals like geographical location and device status during login. Furthermore, organizations should continuously scan Active Directory to remove compromised credentials.",
    tags_en: ["MFA", "Prompt Bombing", "Push-Based MFA", "FIDO2", "Social Engineering", "Cisco", "Identity Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/mfa-prompt-bombing-why-your-second.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "伊朗國家支持駭客 Nimbus Manticore 部署 MiniFast 後門，利用 AI 輔助技術與 SEO 投毒進行擴大滲透",
    summary: "資安廠商 Check Point 分析指出，隸屬於伊朗革命衛隊的國家支持駭客 Nimbus Manticore（亦稱 Screening Serpens/UNC1549）在美、歐及中東地區發動了新的活動。該活動利用了名為 MiniFast（或 MiniUpdate）的新後門，據懷疑是利用人工智慧（AI）輔助開發的。該駭客組織擅長利用職涯主題的網路釣魚誘餌，目標產業包括國防、航空和電信。近期攻擊鏈的特點包括：先利用 AppDomain hijacking 部署 MiniJunk，隨後部署 MiniFast，並首次採用 SEO 投毒技術，偽造 SQL Developer 下載頁面來傳遞 MiniFast。MiniFast 是一個功能齊全的後門，支持遠端命令執行、檔案操作、進程列舉、DLL 載入、建立排程任務以實現持久化，並能透過 HTTP 請求與遠端伺服器通訊。攻擊者透過註冊大量網域，將流量導向偽造的下載頁面，以提高可見度。這顯示該駭客組織的攻擊活動在區域衝突後加速，並展現了利用 AI 提升惡意軟體開發速度的趨勢。",
    tags: ["Nimbus Manticore", "MiniFast", "AppDomain hijacking", "SEO poisoning", "伊朗", "國家支持駭客"],
    title_en: "Iran State-Sponsored Hackers Nimbus Manticore Deploy MiniFast Backdoor, Utilizing AI-Assisted Techniques and SEO Poisoning for Expanded Penetration",
    summary_en: "Security vendor Check Point analyzed that the state-sponsored hackers Nimbus Manticore, affiliated with the Islamic Revolutionary Guard Corps of Iran (also known as Screening Serpens/UNC1549), have launched new activities in the US, Europe, and the Middle East. This activity utilizes a new backdoor named MiniFast (or MiniUpdate), which is suspected to be developed using artificial intelligence (AI) assistance. This hacking group specializes in using career-themed phishing lures, targeting industries including defense, aerospace, and telecommunications. Recent attack chain characteristics include: first deploying MiniJunk using AppDomain hijacking, followed by the deployment of MiniFast, and for the first time, employing SEO poisoning techniques by fabricating SQL Developer download pages to transmit MiniFast. MiniFast is a fully functional backdoor that supports remote command execution, file manipulation, process enumeration, DLL loading, and creating scheduled tasks for persistence, and can communicate with remote servers via HTTP requests. The attackers register a large number of domains to redirect traffic to fake download pages, thereby increasing visibility. This indicates that the hacking group's attack activities are accelerating following regional conflicts, and demonstrating the trend of utilizing AI to enhance malware development speed.",
    tags_en: ["Nimbus Manticore", "MiniFast", "AppDomain hijacking", "SEO poisoning", "Iran", "State-Sponsored Hackers"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/iranian-hackers-deploy-minifast-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "高嚴重性漏洞曝光：KnowledgeDeliver LMS遭零日攻擊，透過ASP.NET ViewState反序列化植入Cobalt Strike",
    summary: "日本流行的學習管理系統（LMS）KnowledgeDeliver，因一個高嚴重性的漏洞（CVE-2026-5426，CVSS 7.5），遭到零日攻擊。此漏洞源於其使用硬編碼的ASP.NET機器金鑰（machine keys），導致可透過未經身份驗證的ViewState反序列化攻擊執行遠端程式碼。攻擊者可利用從單一部署獲取的金鑰，進而危害其他網路公開的KnowledgeDeliver實例。攻擊鏈中，駭客植入了Godzilla Web Shell，並透過篡改應用程式腳本，誘騙使用者下載假安全插件，最終成功感染目標系統，部署了Cobalt Strike Beacon。Google Mandiant指出，此事件凸顯了使用共享密鑰的嚴重風險。修補建議是實施唯一的密鑰管理，並加強端點監控，以防禦此類反序列化攻擊。",
    tags: ["KnowledgeDeliver", "CVE-2026-5426", "ASP.NET", "ViewState反序列化", "Cobalt Strike", "LMS"],
    title_en: "High Severity Vulnerability Exposed: KnowledgeDeliver LMS Targeted by Zero-Day Attack, Implanting Cobalt Strike via ASP.NET ViewState Deserialization",
    summary_en: "KnowledgeDeliver, a popular Learning Management System (LMS) in Japan, was subjected to a zero-day attack due to a high-severity vulnerability (CVE-2026-5426, CVSS 7.5). This vulnerability stems from its use of hardcoded ASP.NET machine keys, allowing an unauthenticated ViewState deserialization attack to execute remote code. Attackers can utilize keys obtained from a single deployment to compromise other publicly exposed KnowledgeDeliver instances. In the attack chain, hackers implanted a Godzilla Web Shell and, by tampering with application scripts, tricked users into downloading a fake security plugin, ultimately successfully infecting the target system and deploying Cobalt Strike Beacon. Google Mandiant pointed out that this incident highlights the severe risk associated with using shared keys. The remediation advice is to implement unique key management and strengthen endpoint monitoring to defend against such deserialization attacks.",
    tags_en: ["KnowledgeDeliver", "CVE-2026-5426", "ASP.NET", "ViewState Deserialization", "Cobalt Strike", "LMS"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/knowledgedeliver-lms-flaw-exploited-to.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "州政府呼籲國會恢復資安經費：應對 AI 帶動的網路威脅與供應鏈風險",
    summary: "美國各州政府和資安高層在國會聽證會上指出，由於聯邦政府削減資安補助和資訊共享資源，導致州級和地方政府在應對複雜網路威脅時面臨資源短缺。他們呼籲國會恢復對 CISA（網路安全與基礎設施安全局）和 MS-ISAC（多州資訊共享與分析中心）等關鍵資安機構的資金支持，特別是恢復州和地方資安補助計畫（SLCGP）。目前，攻擊者利用 AI 提升攻擊規模與速度，並大量依賴供應鏈漏洞和身份系統的漏洞進行攻擊。此外，勒索軟體攻擊和國家級駭客行動的威脅持續增強。專家建議，在資源有限的情況下，地方政府應加強資安意識訓練、修補外部連線設備的漏洞，並考慮利用提供整合服務（如 SOC）的資源，以同時解決資安監測、漏洞評估和資安情報共享等多重需求。",
    tags: ["CISA", "MS-ISAC", "資安經費", "供應鏈風險", "AI 攻擊", "資安意識"],
    title_en: "State Governments Urge Congress to Restore Cybersecurity Funding: Addressing AI-Driven Cyber Threats and Supply Chain Risks",
    summary_en: "State governments and cybersecurity leaders in the United States pointed out at a Congressional hearing that state and local governments face resource shortages when responding to complex cyber threats due to federal government cuts in cybersecurity grants and information sharing resources. They called on Congress to restore funding for key cybersecurity organizations such as CISA (Cybersecurity and Infrastructure Security Agency) and MS-ISAC (Multi-State Information Sharing and Analysis Center), particularly restoring the State and Local Cybersecurity Grant Program (SLCGP). Currently, attackers are utilizing AI to increase the scale and speed of attacks, heavily relying on supply chain vulnerabilities and identity system flaws. Furthermore, the threat from ransomware attacks and nation-state hacking activities continues to escalate. Experts recommend that, given limited resources, local governments should strengthen cybersecurity awareness training, patch vulnerabilities in externally connected equipment, and consider utilizing resources that provide integrated services (such as SOC) to simultaneously address multiple needs including cybersecurity monitoring, vulnerability assessment, and threat intelligence sharing.",
    tags_en: ["CISA", "MS-ISAC", "Cybersecurity Funding", "Supply Chain Risk", "AI Attack", "Cybersecurity Awareness"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/state-leaders-beg-congress-resume-cyber-funding", lang: "EN" }
    ]
  },
  {
    id: "20260526-014",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "微軟緊急修補 SharePoint 遠端代碼執行漏洞 CVE-2026-45659，警惕內部認證攻擊",
    summary: "微軟針對 SharePoint Server 推出緊急修補程式，修補了一個遠端代碼執行漏洞（CVE-2026-45659）。此漏洞涉及 SharePoint 對不受信任資料的序列化處理，允許已通過身份驗證的攻擊者，即使僅擁有最低的 Site Member 權限，也能透過惡意資料，在網路攻擊中遠端執行程式碼，可能導致伺服器被完全控制。微軟評估此漏洞的 CVSS 嚴重性為 8.8，攻擊複雜度低，且無需使用者互動。雖然目前未發現公開的利用程式碼或野外活動跡象，但由於 SharePoint 作為企業核心協作平台，常被駭客和國家級行為者鎖定，組織應立即部署修補程式。建議所有使用 SharePoint 的組織，特別是內部部署環境，應儘快修補，並審查權限配置，防止攻擊者利用此漏洞進行橫向移動。",
    tags: ["Microsoft", "SharePoint", "CVE-2026-45659", "遠端代碼執行", "CVSS", "內部認證攻擊"],
    title_en: "Microsoft issues emergency patch for SharePoint Remote Code Execution vulnerability CVE-2026-45659; beware of internal credential attacks",
    summary_en: "Microsoft has released an emergency patch for SharePoint Server to address a Remote Code Execution (RCE) vulnerability (CVE-2026-45659). This vulnerability involves how SharePoint processes serialized untrusted data, allowing an authenticated attacker, even one with only minimum Site Member privileges, to remotely execute code via malicious data during a network attack, potentially leading to full server compromise. Microsoft assessed the CVSS severity of this vulnerability as 8.8, noting low attack complexity and no user interaction required. Although no public exploit code or wild activity has been detected, due to SharePoint's role as a core enterprise collaboration platform, it is frequently targeted by hackers and nation-state actors. Organizations should deploy the patch immediately. All organizations using SharePoint, especially those in on-premises environments, are advised to patch promptly and review their permission configurations to prevent attackers from using this vulnerability for lateral movement.",
    tags_en: ["Microsoft", "SharePoint", "CVE-2026-45659", "Remote Code Execution", "CVSS", "Internal Credential Attack"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/microsoft-patches-sharepoint-rce-flaw.html", lang: "EN" },
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/microsoft-issues-sharepoint-patch", lang: "EN" }
    ]
  },
  {
    id: "20260526-015",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Eppendorf BioFlo 320 生物反應器遭硬編碼密碼漏洞攻擊，CVSS 9.8 評級",
    summary: "生物醫療設備製造商 Eppendorf 的 BioFlo 320 生物反應器，因 VNC 伺服器使用硬編碼密碼（CVE-2026-7251）存在嚴重漏洞。若攻擊者知曉設備的網路位址且遠端存取功能啟用，可利用此密碼取得完整控制權，導致設備功能和資料完全洩露。此漏洞的 CVSS 3.1 分數為 9.8（嚴重），攻擊向量為網路（AV:N），修復建議是立即下載並套用 Eppendorf 提供的軟體更新，該更新將永久移除 VNC 存取功能。此外，用戶應確保 VNC 預設停用，並實施網路隔離、使用 VPN 等更安全的遠端存取方式，以降低風險。",
    tags: ["Eppendorf", "BioFlo 320", "CVE-2026-7251", "VNC", "硬編碼密碼", "OT/ICS", "醫療設備"],
    title_en: "Eppendorf BioFlo 320 Bioreactor Targeted by Hardcoded Password Vulnerability, CVSS 9.8 Rated",
    summary_en: "The BioFlo 320 bioreactor from medical device manufacturer Eppendorf contains a critical vulnerability due to the use of a hardcoded password in its VNC server (CVE-2026-7251). If an attacker knows the device's network address and the remote access function is enabled, they can exploit this password to gain full control, leading to complete loss of device functionality and data leakage. This vulnerability has a CVSS 3.1 score of 9.8 (Critical), with an Attack Vector of Network (AV:N). The recommended fix is to immediately download and apply the software update provided by Eppendorf, which permanently removes the VNC access function. Furthermore, users should ensure VNC is disabled by default and implement more secure remote access methods, such as network isolation or using a VPN, to mitigate risk.",
    tags_en: ["Eppendorf", "BioFlo 320", "CVE-2026-7251", "VNC", "Hardcoded Password", "OT/ICS", "Medical Device"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-medical-advisories/icsma-26-146-01", lang: "EN" }
    ]
  },
  {
    id: "20260526-016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB Ability Camera Connect 曝 VLC 播放器漏洞：CVE-2024-46461 允許堆溢出，建議立即更新至 1.5.0.15",
    summary: "ABB 針對其 Ability Camera Connect 系列產品發出安全警示，指出該產品在整合的第三方 VLC media player 2.2.4 版本中存在多項漏洞。其中，CVE-2024-46461 是一個由整數溢出（Integer Overflow）導致的堆基緩衝區溢出（Heap-based Buffer Overflow）漏洞。若攻擊者成功利用此漏洞，可能導致系統崩潰或以目標用戶權限執行任意程式碼。受影響的產品版本為 Ability Camera Connect 1.5.0.14 及更低版本。該漏洞的 CVSS 3.1 分數為 8（高風險）。ABB 建議客戶應儘快將 Ability Camera Connect 更新至 1.5.0.15 或更新 VLC Media Player 組件。此外，文章強調，由於 Camera Connect 部署於完全隔離（Air-gapped）且無網路連線的環境，實務上極大地降低了攻擊面和風險。",
    tags: ["ABB", "Ability Camera Connect", "CVE-2024-46461", "VLC media player", "堆溢出", "OT/ICS"],
    title_en: "ABB Ability Camera Connect Exposed to VLC Player Vulnerability: CVE-2024-46461 Allows Heap Overflow; Immediate Update to 1.5.0.15 Recommended",
    summary_en: "ABB has issued a security advisory for its Ability Camera Connect series products, pointing out multiple vulnerabilities in the integrated third-party VLC media player version 2.2.4. Among these, CVE-2024-46461 is a Heap-based Buffer Overflow vulnerability caused by Integer Overflow. If an attacker successfully exploits this vulnerability, it could lead to system crash or arbitrary code execution with the target user's privileges. Affected product versions are Ability Camera Connect 1.5.0.14 and earlier. The CVSS 3.1 score for this vulnerability is 8 (High Risk). ABB advises customers to promptly update Ability Camera Connect to 1.5.0.15 or update the VLC Media Player component. Furthermore, the article emphasizes that because Camera Connect is deployed in air-gapped environments with no network connection, the attack surface and risk are significantly reduced in practice.",
    tags_en: ["ABB", "Ability Camera Connect", "CVE-2024-46461", "VLC media player", "Heap Overflow", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-05", lang: "EN" }
    ]
  },
  {
    id: "20260526-017",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "B&R Automation Runtime 存在資源鎖定漏洞：CVSS 10 分，可導致系統停機",
    summary: "B&R 宣布其 Automation Runtime 產品線存在一項嚴重漏洞，編號為 CVE-2025-3450。此漏洞屬於「不當資源鎖定」（Improper Resource Locking），影響範圍涵蓋 Automation Runtime 版本低於 6.3 和低於 Q4.93 的產品。攻擊者若能利用此漏洞，可透過網路進行未經身份驗證的攻擊，刪除資料，進而導致產品停機（Denial of Service）。該漏洞的 CVSS 評分為 10 分，屬於極高風險（CRITICAL）。\n\n為修復此問題，B&R 已在 Automation Runtime 6.3 和 Q4.93 版本中進行了修補。除了更新版本外，B&R 建議客戶應將 System Diagnostic Manager (SDM) 預設停用，且不應在缺乏適當物理和邏輯存取控制的生產環境中使用。此外，建議將 HTTP 協定改為 TLS (HTTPS)，並考慮在 Automation Studio 中配置雙向 TLS (mTLS) 來限制網頁伺服器的存取權限，以降低被攻擊的風險。",
    tags: ["B&R", "Automation Runtime", "CVE-2025-3450", "DoS", "OT/ICS", "資源鎖定"],
    title_en: "B&R Automation Runtime has Resource Locking Vulnerability: CVSS 10, Can Cause System Downtime",
    summary_en: "B&R has announced a critical vulnerability, designated CVE-2025-3450, affecting its Automation Runtime product line. This vulnerability is classified as \"Improper Resource Locking\" and impacts Automation Runtime versions lower than 6.3 and lower than Q4.93. If exploited, an attacker can perform unauthenticated network attacks to delete data, leading to a Denial of Service (DoS) for the product. The vulnerability has a CVSS score of 10, classifying it as CRITICAL. To remediate this issue, B&R has released patches in Automation Runtime versions 6.3 and Q4.93. In addition to updating the version, B&R advises customers to disable the System Diagnostic Manager (SDM) by default and not to use it in production environments lacking proper physical and logical access controls. Furthermore, it is recommended to change the HTTP protocol to TLS (HTTPS) and consider configuring mutual TLS (mTLS) within Automation Studio to restrict web server access, thereby reducing the risk of attack.",
    tags_en: ["B&R", "Automation Runtime", "CVE-2025-3450", "DoS", "OT/ICS", "Resource Locking"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-04", lang: "EN" }
    ]
  },
  {
    id: "20260526-018",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB LVS MConfig 存在記憶體明文儲存漏洞，CVE-2025-9970 影響關鍵基礎設施",
    summary: "ABB 宣布其 MConfig 產品存在一項內部發現的漏洞（CVE-2025-9970）。此漏洞屬於記憶體明文儲存敏感資訊（CWE-316），允許攻擊者在 MConfig 軟體運行時，透過存取本地網路，將記憶體傾印（memory dump）檔案導出。若密碼等敏感資訊以明文形式儲存在記憶體中，攻擊者便可能透過處理這些傾印檔案來竊取密碼。受影響產品為 ABB LVS MConfig，版本為 1.4.9.21 及以下。此漏洞的 CVSS 3.1 分數為 7.4（高風險）。ABB 強烈建議所有客戶立即將 MConfig 軟體升級至 1.4.9.22 或更高版本，以修復此安全缺陷。此外，建議客戶參考產品手冊中的「緩解因素」進行額外防禦措施。",
    tags: ["ABB", "MConfig", "CVE-2025-9970", "OT/ICS", "記憶體漏洞", "關鍵基礎設施"],
    title_en: "ABB LVS MConfig has memory plaintext storage vulnerability, CVE-2025-9970 affects critical infrastructure",
    summary_en: "ABB announced an internally discovered vulnerability in its MConfig product (CVE-2025-9970). This vulnerability is a memory plaintext storage of sensitive information (CWE-316), which allows an attacker to export a memory dump file by accessing the local network while the MConfig software is running. If sensitive information, such as passwords, is stored in memory in plaintext form, an attacker may steal the passwords by processing these dump files. The affected product is ABB LVS MConfig, with versions 1.4.9.21 and earlier. This vulnerability has a CVSS 3.1 score of 7.4 (High Risk). ABB strongly recommends that all customers immediately upgrade the MConfig software to version 1.4.9.22 or later to fix this security flaw. Furthermore, customers are advised to implement additional defensive measures by referring to the 'Mitigation Factors' in the product manual.",
    tags_en: ["ABB", "MConfig", "CVE-2025-9970", "OT/ICS", "Memory Vulnerability", "Critical Infrastructure"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-06", lang: "EN" }
    ]
  },
  {
    id: "20260526-019",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA新增CVE-2026-48172：LiteSpeed cPanel外掛權限提升漏洞，警告企業用戶應優先修補",
    summary: "美國網路安全局（CISA）宣布將一個新的已知已利用漏洞（KEV）加入其「已知已利用漏洞目錄」（Known Exploited Vulnerabilities Catalog）。本次新增的漏洞為CVE-2026-48172，屬於LiteSpeed cPanel外掛的權限提升漏洞。CISA指出，此類漏洞是惡意網路行為者常用的攻擊途徑，對聯邦企業網路構成重大風險。雖然相關的《強制執行指令》（BOD 22-01）主要針對聯邦民事行政部門，但CISA強烈敦促所有組織將修補KEV目錄中的漏洞納入資安管理優先事項，以降低整體網路暴露風險。組織應立即評估並修補所有已知的、屬於此類高風險的漏洞，以保護系統的完整性與機密性。",
    tags: ["CISA", "CVE-2026-48172", "LiteSpeed", "cPanel", "權限提升", "KEV Catalog"],
    title_en: "CISA Adds CVE-2026-48172: LiteSpeed cPanel Plugin Privilege Escalation Vulnerability, Advising Enterprise Users to Prioritize Patching",
    summary_en: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has announced the addition of a new Known Exploited Vulnerability (KEV) to its Known Exploited Vulnerabilities Catalog. This newly added vulnerability is CVE-2026-48172, a privilege escalation flaw in the LiteSpeed cPanel plugin. CISA points out that such vulnerabilities are commonly used attack vectors by malicious actors, posing a significant risk to federal enterprise networks. Although the related Enforcement Directive (BOD 22-01) primarily targets federal civil administrative departments, CISA strongly urges all organizations to include patching vulnerabilities listed in the KEV Catalog as a top security management priority to reduce overall network exposure risk. Organizations should immediately assess and patch all known, high-risk vulnerabilities of this type to protect system integrity and confidentiality.",
    tags_en: ["CISA", "CVE-2026-48172", "LiteSpeed", "cPanel", "Privilege Escalation", "KEV Catalog"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/alerts/2026/05/26/cisa-adds-one-known-exploited-vulnerability-catalog", lang: "EN" }
    ]
  },
  {
    id: "20260526-020",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB AC500 V2 設備存在緩衝區讀取漏洞，攻擊者可竊取歷史 Modbus 訊息片段",
    summary: "資安機構 CISA 發布警示，指出 ABB 的 AC500 V2 設備存在一個緩衝區讀取（Buffer Over-read）漏洞（CVE-2025-7745）。此漏洞的 CVSS 3.1 分數為 5.8（中等），攻擊向量為網路（AV:N），無需權限（PR:N），且無需使用者互動（UI:N）。若攻擊者向 AC500 V2 的 Modbus 伺服器發送不受支援的功能碼，可能導致設備回傳包含先前 Modbus telegrams 片段的錯誤回應。此漏洞影響 AC500 V2 版本小於等於 2.5.2 的設備。ABB 已在 AC500 V2 韌體版本 2.5.3 及之後版本修復了此問題。建議用戶應限制網路暴露，將控制系統網路與業務網路隔離，並僅使用支援的 Modbus 功能碼，避免傳輸敏感資料，以降低被利用風險。",
    tags: ["ABB", "AC500 V2", "CVE-2025-7745", "Modbus", "緩衝區讀取", "OT/ICS"],
    title_en: "ABB AC500 V2 Device Has Buffer Over-read Vulnerability, Allowing Attackers to Steal Historical Modbus Message Fragments",
    summary_en: "Cybersecurity agency CISA has issued an alert regarding a Buffer Over-read vulnerability (CVE-2025-7745) found in ABB's AC500 V2 device. This vulnerability has a CVSS 3.1 score of 5.8 (Medium), with an Attack Vector (AV:N), requiring no privileges (PR:N), and no user interaction (UI:N). If an attacker sends unsupported function codes to the AC500 V2's Modbus server, it may cause the device to return an error response containing fragments of previous Modbus telegrams. This vulnerability affects AC500 V2 devices with versions less than or equal to 2.5.2. ABB has patched this issue in AC500 V2 firmware version 2.5.3 and later. Users are advised to restrict network exposure, isolate the control system network from the business network, and only use supported Modbus function codes, avoiding the transmission of sensitive data, to mitigate the risk of exploitation.",
    tags_en: ["ABB", "AC500 V2", "CVE-2025-7745", "Modbus", "Buffer Over-read", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-02", lang: "EN" }
    ]
  },
  {
    id: "20260526-021",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB Terra AC 充電樁面臨堆疊溢位風險：CVE-2025-5517 允許遠端惡意控制韌體",
    summary: "ABB 宣布其 Terra AC 充電樁系列產品存在堆疊緩衝區溢位（Heap-based Buffer Overflow）漏洞，編號為 CVE-2025-5517。此漏洞的 CVSS 3.1 分數為 6.8（中等），攻擊向量為網路（AV:N），可遠端利用（R:N）。攻擊者若能發送特製的 OCPP 訊息，可能污染堆疊記憶體，進而遠端接管產品控制權，並寫入快閃記憶體（flash memory）以改變韌體行為。受影響的產品包括 Terra AC wallbox (UL40/80A) 等多個型號，版本號低於或等於 1.8.32 或 1.8.2。ABB 已提供修復版本，建議客戶儘速升級至 1.8.33、1.8.34 等修復版本。此外，文章強烈建議用戶必須使用 HTTPS (TLS) 進行充電樁與 OCPP 後端之間的通訊，避免使用不安全的 HTTP 模式，以防範惡意攔截或攻擊。",
    tags: ["ABB", "Terra AC", "CVE-2025-5517", "堆疊緩衝區溢位", "OT/ICS", "OCPP"],
    title_en: "ABB Terra AC Charging Station Faces Stack Overflow Risk: CVE-2025-5517 Allows Remote Malicious Firmware Control",
    summary_en: "ABB announced a Heap-based Buffer Overflow vulnerability, designated CVE-2025-5517, affecting its Terra AC charging station product line. This vulnerability has a CVSS 3.1 score of 6.8 (Medium), with a Network attack vector (AV:N) and is remotely exploitable (R:N). An attacker who can send specially crafted OCPP messages may pollute the stack memory, thereby remotely taking control of the product and writing to the flash memory to alter the firmware behavior. Affected products include multiple models such as the Terra AC wallbox (UL40/80A), with firmware versions less than or equal to 1.8.32 or 1.8.2. ABB has provided patched versions and recommends that customers upgrade promptly to patched versions such as 1.8.33 and 1.8.34. Furthermore, the article strongly advises users to use HTTPS (TLS) for communication between the charging station and the OCPP backend, avoiding the insecure HTTP mode to prevent malicious interception or attacks.",
    tags_en: ["ABB", "Terra AC", "CVE-2025-5517", "Heap Buffer Overflow", "OT/ICS", "OCPP"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-01", lang: "EN" }
    ]
  },
  {
    id: "20260526-022",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "ABB Ability Zenon 平台面臨遠端未經授權重啟風險：CVE-2025-8754 漏洞分析",
    summary: "ABB Ability Zenon 平台存在一項名為 CVE-2025-8754 的安全漏洞，影響版本為 7.50 到 14。此漏洞屬於「關鍵功能缺乏身份驗證」（Missing Authentication for Critical Function），允許攻擊者在未經授權的情況下，透過遠端傳輸服務（Remote Transport Service）觸發系統重啟。雖然此漏洞的遠端利用性需要攻擊者已先進入受影響系統所在的網路環境，且目前無證據顯示漏洞正在野外被積極利用，但其潛在風險仍高。\n\n修補建議包括：第一，嚴格限制對安裝了 ABB Zenon 軟體平台的系統的網路存取權限；第二，評估是否仍需要使用遠端傳輸功能；若功能未被使用，應停止或終止 zensyssrv.exe 服務，以有效修補此漏洞。",
    tags: ["ABB", "CVE-2025-8754", "ABB Ability Zenon", "遠端服務", "系統重啟", "OT/ICS"],
    title_en: "ABB Ability Zenon Platform Faces Risk of Unauthorized Remote Reboot: Analysis of CVE-2025-8754 Vulnerability",
    summary_en: "The ABB Ability Zenon platform contains a security vulnerability, CVE-2025-8754, affecting versions 7.50 through 14. This vulnerability is classified as 'Missing Authentication for Critical Function,' which allows an attacker to trigger a system reboot via the Remote Transport Service without authorization. Although the remote exploitability of this vulnerability requires the attacker to already be within the network environment of the affected system, and there is currently no evidence of active exploitation in the wild, the potential risk remains high.\n\nRemediation recommendations include: First, strictly limiting network access to systems running the ABB Zenon software platform; and second, evaluating whether the Remote Transport function is still necessary. If the function is not used, the zensyssrv.exe service should be stopped or terminated to effectively mitigate this vulnerability.",
    tags_en: ["ABB", "CVE-2025-8754", "ABB Ability Zenon", "Remote Service", "System Reboot", "OT/ICS"],
    sources: [
      { name: "CISA Advisories", url: "https://cisa.gov/news-events/ics-advisories/icsa-26-146-03", lang: "EN" }
    ]
  },
  {
    id: "20260526-023",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AI 聊天機器人與搜尋引擎被毒化：駭客利用系統工具偽裝進行 GPU 挖礦與遠端存取",
    summary: "微軟防禦專家發現一場活躍的加密貨幣挖礦活動，攻擊者透過毒化搜尋結果和 AI 聊天機器人互動，將惡意下載網站呈現給目標用戶。該活動偽裝成 CrystalDiskInfo、HWMonitor 等知名的系統工具，目標鎖定擁有高性能 GPU 的 PC 愛好者，以最大化挖礦收益。攻擊鏈首先透過 SEO 毒化和 LLM 互動，引導用戶下載包含惡意 DLL 的 ZIP 壓縮檔。當用戶執行偽裝工具時，惡意 DLL 利用 DLL sideloading 技術，靜默安裝 ScreenConnect 遠端存取工具。最終，攻擊者透過 ScreenConnect 建立持久的遠端存取通道，並進一步植入 SimpleRunPE.exe 等惡意二進位檔，可進一步用於資料竊取或勒索軟體攻擊。微軟建議組織啟用雲端傳遞保護、以阻斷模式運行 EDR，並啟用攻擊面縮減規則以降低風險。",
    tags: ["加密貨幣挖礦", "ScreenConnect", "DLL sideloading", "SEO 毒化", "AI 聊天機器人", "GPU 挖礦"],
    title_en: "AI Chatbots and Search Engines Poisoned: Hackers Use System Tools for GPU Mining and Remote Access",
    summary_en: "Microsoft defense experts discovered an active cryptocurrency mining campaign where attackers poisoned search results and AI chatbot interactions to present malicious download sites to target users. The campaign disguised itself as well-known system tools like CrystalDiskInfo and HWMonitor, targeting PC enthusiasts with high-performance GPUs to maximize mining profits. The attack chain first utilized SEO poisoning and LLM interactions to guide users into downloading a ZIP archive containing a malicious DLL. When the user executed the disguised tool, the malicious DLL leveraged DLL sideloading techniques to silently install the ScreenConnect remote access tool. Finally, the attackers established a persistent remote access channel using ScreenConnect and further implanted malicious binaries such as SimpleRunPE.exe, which can be used for data theft or ransomware attacks. Microsoft recommends that organizations enable cloud delivery protection, utilize detection mode for EDR, and activate attack surface reduction rules to mitigate risks.",
    tags_en: ["Cryptocurrency Mining", "ScreenConnect", "DLL sideloading", "SEO Poisoning", "AI Chatbots", "GPU Mining"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/05/26/poisoned-search-results-gpu-mining-cryptojacking-campaign-abusing-screenconnect-microsoft-net-utilities", lang: "EN" }
    ]
  },
  {
    id: "20260526-024",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "AiTM 釣魚服務平台 Tycoon 2FA 繞過 MFA，竊取 Microsoft 365 與 Google 帳號會話權杖",
    summary: "Tycoon 2FA 是目前最活躍的 Phishing-as-a-Service (PhaaS) 平台之一，專門提供攻擊者在中間人（AiTM）的釣魚能力。該平台可繞過多因素驗證（MFA），從 Microsoft 365 和 Google Workspace 帳號竊取已驗證的會話權杖。攻擊流程透過偽造的登入頁面，實時代理（proxy）受害者與合法身份提供者之間的通訊。它不僅要求受害者輸入帳密，還會代理真實的 MFA 挑戰，讓受害者完成驗證後，攔截發出的會話權杖。Tycoon 2FA 採用了多層次的規避技術，包括 IP 範圍檢查、檢測開發者工具、以及使用自定義加密和假 CAPTCHA，使其難以被靜態分析。攻擊者還利用了 WebSocket 和 OAuth Device Code 等兩種結構變體進行攻擊。修補建議是提升對會話權杖的保護，並強化對身份提供者端點的監控，以偵測異常的會話建立行為。",
    tags: ["Tycoon 2FA", "AiTM", "Phishing-as-a-Service", "MFA 繞過", "Microsoft 365", "Google Workspace", "會話權杖"],
    title_en: "AiTM Phishing Service Platform Tycoon 2FA Bypasses MFA to Steal Microsoft 365 and Google Account Session Tokens",
    summary_en: "Tycoon 2FA is one of the most active Phishing-as-a-Service (PhaaS) platforms, specializing in providing attackers with Man-in-the-Middle (AiTM) phishing capabilities. The platform can bypass Multi-Factor Authentication (MFA) to steal authenticated session tokens from Microsoft 365 and Google Workspace accounts. The attack process involves a spoofed login page that proxies the communication between the victim and the legitimate identity provider. It not only requires the victim to enter their credentials but also proxies the real MFA challenge, intercepting the issued session token after the victim completes the verification. Tycoon 2FA employs multi-layered evasion techniques, including IP range checks, detection of developer tools, and the use of custom encryption and fake CAPTCHAs, making it difficult to analyze statically. Attackers also utilize two structural variants for attacks: WebSocket and OAuth Device Code. Remediation suggestions include enhancing session token protection and strengthening monitoring of identity provider endpoints to detect anomalous session establishment behavior.",
    tags_en: ["Tycoon 2FA", "AiTM", "Phishing-as-a-Service", "MFA Bypass", "Microsoft 365", "Google Workspace", "Session Token"],
    sources: [
      { name: "Elastic Security Labs", url: "https://elastic.co/security-labs/tycoon-2fa-aitm-detection-engineering", lang: "EN" }
    ]
  },
  {
    id: "20260526-025",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "「Megalodon」惡意程式碼感染數千 GitHub 儲存庫，竊取 CI/CD 密鑰與開發者憑證",
    summary: "資安公司 SafeDep 揭露一波代號「Megalodon」的惡意程式碼活動，該活動在短短六小時內，向超過 5,500 個 GitHub 儲存庫推送了數千個惡意提交（commits）。攻擊者利用虛擬帳號和偽造作者身份，注入惡意的 GitHub Actions 工作流程，旨在竊取 CI/CD 密鑰、雲端憑證、SSH 金鑰、OpenID Connect token 以及原始碼密鑰，並將其傳輸至命令與控制（C2）伺服器。惡意程式碼包含一個名為「SysDiag」的 YAML 檔案，會在每次推送或拉取請求時觸發新的工作流程。更具隱蔽性的是，攻擊者還會用「workflow-dispatch」觸發器取代現有工作流程，形成一種休眠的後門，可透過 GitHub API 遠端激活，從而規避偵測。SafeDep 最初在一個 npm 套件（@tiledesk/）中發現了此類惡意行為，該套件屬於開源聊天機器人平台 Tiledesk，顯示了供應鏈的風險。受影響的組織應立即審核其 GitHub 儲存庫，尋找惡意的 YAML 檔案和 GitHub Actions 設定，並徹底撤銷和輪換所有 API 金鑰、SSH 金鑰和相關密鑰，以防止後門被利用。",
    tags: ["Megalodon", "GitHub Actions", "CI/CD", "供應鏈安全", "惡意程式碼", "YAML", "憑證竊取"],
    title_en: "Malicious Code 'Megalodon' Infects Thousands of GitHub Repositories, Stealing CI/CD Keys and Developer Credentials",
    summary_en: "Security firm SafeDep revealed a malicious code campaign, codenamed 'Megalodon,' which pushed thousands of malicious commits to over 5,500 GitHub repositories within just six hours. The attackers utilized virtual accounts and spoofed identities to inject malicious GitHub Actions workflows, aiming to steal CI/CD secrets, cloud credentials, SSH keys, OpenID Connect tokens, and source code keys, transmitting them to a command and control (C2) server. The malicious code included a YAML file named 'SysDiag,' which triggered new workflows upon every push or pull request. More stealthily, the attackers replaced existing workflows with the 'workflow-dispatch' trigger, creating a dormant backdoor that could be remotely activated via the GitHub API, thus evading detection. SafeDep initially discovered this malicious activity in an npm package (@tiledesk/), belonging to the open-source chatbot platform Tiledesk, highlighting supply chain risks. Affected organizations should immediately audit their GitHub repositories for malicious YAML files and GitHub Actions configurations, and thoroughly revoke and rotate all API keys, SSH keys, and related secrets to prevent backdoor exploitation.",
    tags_en: ["Megalodon", "GitHub Actions", "CI/CD", "Supply Chain Security", "Malicious Code", "YAML", "Credential Theft"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/megalodon-malware-infects-thousands-github-repos", lang: "EN" }
    ]
  },
  {
    id: "20260526-026",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "TeamPCP 駭客團體攻擊開源生態系：透過毒化套件與開發者工具鏈竊取程式碼",
    summary: "TeamPCP 是一個與 Shai-Hulud 蠕蟲相關的網路犯罪團體，其活動已對開源軟體生態系統造成重大損害。該團體在 2025 年末正式浮現，最初利用 React2Shell 漏洞，並鎖定配置錯誤的 Docker API 和 Next.js 等目標。其攻擊模式著重於軟體供應鏈的妥協，例如毒化 npm 開源套件，使惡意程式碼能感染開發者貢獻的任何元件。最近，TeamPCP 甚至宣稱攻擊 GitHub，透過員工下載的毒化 VS Code 擴充套件，竊取了約 4,000 個私有程式碼儲存庫。專家指出，攻擊者不再需要零日漏洞，而是能透過攻擊開發者信任的工具、開源套件和工作流程，結合社工技術和 AI 輔助偵察來實現高效的攻擊。這提醒開發者，自身已成為軟體供應鏈攻擊的「永久目標」，建議開發者應加強對開源元件的審核，並關注供應鏈的完整性。",
    tags: ["TeamPCP", "Shai-Hulud", "開源生態系", "npm", "供應鏈攻擊", "VS Code 擴充套件"],
    title_en: "TeamPCP Hacker Group Attacks Open Source Ecosystem: Stealing Code via Poisoned Packages and Developer Toolchains",
    summary_en: "TeamPCP is a cybercrime group associated with the Shai-Hulud worm, whose activities have caused significant damage to the open-source software ecosystem. The group officially emerged in late 2025, initially exploiting the React2Shell vulnerability and targeting misconfigured services like Docker API and Next.js. Their attack pattern focuses on compromising the software supply chain, such as poisoning npm open-source packages, allowing malicious code to infect any component contributed by developers. Recently, TeamPCP even claimed to attack GitHub, stealing approximately 4,000 private code repositories through poisoned VS Code extensions downloaded by employees. Experts point out that attackers no longer need zero-day vulnerabilities; instead, they can achieve efficient attacks by targeting developer-trusted tools, open-source packages, and workflows, combining social engineering techniques with AI-assisted reconnaissance. This serves as a reminder to developers that they themselves have become a 'permanent target' for software supply chain attacks, and it is recommended that developers strengthen their review of open-source components and pay attention to supply chain integrity.",
    tags_en: ["TeamPCP", "Shai-Hulud", "Open Source Ecosystem", "npm", "Supply Chain Attack", "VS Code Extension"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/shai-hulud-hackers-teampcp-lucky-skilled", lang: "EN" }
    ]
  },
  {
    id: "20260526-027",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android OS升級為智慧系統：Google推出AppFunctions與Gemini Nano 4，強化裝置端AI能力",
    summary: "Google在I/O 2026上宣布，Android作業系統正從傳統作業系統轉型為「智慧系統」。此重大轉變旨在將AI能力深度整合至應用層級，讓應用程式能更原生、更智慧地運作。核心技術亮點包括AppFunctions（Android MCP），這是一個新的平台API和Jetpack函式庫，允許應用程式作為裝置端的模型上下文協定（MCP）伺服器，能將其工具、服務和資料無縫分享給系統和AI代理（Agents）。開發者可利用新的`skill`工具和測試代理來開發和除錯AppFunctions。此外，Google也展示了下一代Gemini Nano (Nano 4) 模型，透過AIcore開發者預覽，提升了裝置端AI的可靠性和效能。開發者可透過更新的ML Kit GenAI APIs，更順暢地將原型轉化為生產級應用。這代表未來Android開發將更側重於AI驅動的任務自動化和智慧互動。",
    tags: ["Android", "Google I/O 2026", "Gemini Nano 4", "AppFunctions", "AIcore", "智慧系統"],
    title_en: "Android OS Upgrades to Smart System: Google Launches AppFunctions and Gemini Nano 4 to Enhance On-Device AI Capabilities",
    summary_en: "At I/O 2026, Google announced that the Android operating system is transitioning from a traditional OS to a \"smart system.\" This major shift aims to deeply integrate AI capabilities into the application layer, allowing apps to function more natively and intelligently. Key technological highlights include AppFunctions (Android MCP), a new platform API and Jetpack library that allows applications to act as on-device Model Context Protocol (MCP) servers, seamlessly sharing their tools, services, and data with the system and AI agents. Developers can utilize the new `skill` tool and testing agents to develop and debug AppFunctions. Furthermore, Google showcased the next-generation Gemini Nano (Nano 4) model, through the AIcore developer preview, enhancing the reliability and performance of on-device AI. Developers can now more smoothly transition prototypes into production-grade applications using updated ML Kit GenAI APIs. This indicates that future Android development will focus more on AI-driven task automation and intelligent interaction.",
    tags_en: ["Android", "Google I/O 2026", "Gemini Nano 4", "AppFunctions", "AIcore", "Smart System"],
    sources: [
      { name: "Android Developers Blog", url: "https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-028",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android AppLock 存在跨站腳本攻擊漏洞：透過 VIEW Intent 觸發任意 JavaScript 執行",
    summary: "本漏洞（CVE-2025-68709）影響 SailingLab AppLock (com.alpha.applock) 的 4.3.8 版本，是一個 Android 應用程式的本地攻擊漏洞。攻擊者可以利用 VIEW intents 傳遞包含 `javascript:` URI 的方式，觸發應用程式內部 `BrowserMainActivity` 的任意 JavaScript 執行。由於此不安全的導航路徑，可能導致使用者介面偽造（UI spoofing）或權限提升。該漏洞的 CVSS 3.1 評分為：攻擊向量（AV）為本地（A），攻擊複雜度（AC）為低（L），權限要求（PR）為無（N），使用者互動（UI）為要求（R），範圍（S）為組件（C）。修補建議是開發者應修復 `BrowserMainActivity` 處理 VIEW intents 時，對 `javascript:` URI 進行嚴格的輸入驗證與淨化，以防止惡意腳本執行。",
    tags: ["Android", "CVE-2025-68709", "SailingLab AppLock", "JavaScript", "XSS", "VIEW intents"],
    title_en: "Android AppLock has Cross-Site Scripting Vulnerability: Arbitrary JavaScript Execution via VIEW Intent",
    summary_en: "This vulnerability (CVE-2025-68709) affects version 4.3.8 of SailingLab AppLock (com.alpha.applock), which is a local attack vulnerability in an Android application. An attacker can exploit this by passing a VIEW intent containing a `javascript:` URI, triggering arbitrary JavaScript execution within the application's internal `BrowserMainActivity`. Due to this insecure navigation path, it may lead to UI spoofing or privilege escalation. The vulnerability has a CVSS 3.1 score of: Attack Vector (AV) is Local (L), Attack Complexity (AC) is Low (L), Privileges Required (PR) is None (N), User Interaction (UI) is Required (R), and Scope (S) is Component (C). The patch recommendation is that developers should implement strict input validation and sanitization of `javascript:` URIs when `BrowserMainActivity` handles VIEW intents, to prevent malicious script execution.",
    tags_en: ["Android", "CVE-2025-68709", "SailingLab AppLock", "JavaScript", "XSS", "VIEW intents"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68709", lang: "EN" }
    ]
  },
  {
    id: "20260526-029",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android應用程式鎖機制缺陷：本地攻擊者可透過介面流動繞過PIN密碼鎖",
    summary: "本漏洞（CVE-2025-68710）影響 Easyelife App lock (locker.app.safe.applocker) 1.9.2 版本，該應用程式鎖機制用於 Android 平台。攻擊者若具備實體存取權，可利用應用程式鎖的缺陷繞過PIN密碼鎖。核心問題在於，該鎖機制僅作為疊層（overlay）實作，而非使用 Android 提供的安全認證 API。攻擊者可透過導航層級的介面流程（cascading interface flows）——例如透過廣告或瀏覽器意圖（intents）——進行不安全的導航，從而達到應用程式控制規避（app control evasion）。這使得攻擊者能夠繞過鎖屏驗證，存取受保護的應用程式（如 Chrome），最終導致資訊洩露和權限提升。修補建議是開發者應改用 Android 系統提供的安全認證 API，而非自建疊層機制來實現應用程式鎖功能。",
    tags: ["Android", "CVE-2025-68710", "Easyelife App lock", "PIN 鎖", "資訊洩露", "權限提升"],
    title_en: "Android Application Lock Mechanism Flaw: Local Attacker Can Bypass PIN Lock via Interface Flow",
    summary_en: "This vulnerability (CVE-2025-68710) affects Easyelife App lock (locker.app.safe.applocker) version 1.9.2, an application lock mechanism used on the Android platform. If an attacker has physical access, they can exploit a flaw in the app lock to bypass the PIN lock. The core issue is that the lock mechanism is implemented only as an overlay, rather than utilizing the secure authentication APIs provided by Android. An attacker can perform unsafe navigation through cascading interface flows—such as via advertisements or browser intents—to achieve app control evasion. This allows the attacker to bypass the screen lock verification and access protected applications (such as Chrome), ultimately leading to information leakage and privilege escalation. The recommended fix is for developers to switch to using the secure authentication APIs provided by the Android system, instead of building a custom overlay mechanism for app locking functionality.",
    tags_en: ["Android", "CVE-2025-68710", "Easyelife App lock", "PIN Lock", "Information Leakage", "Privilege Escalation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68710", lang: "EN" }
    ]
  },
  {
    id: "20260526-030",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android AppLock 存在繞過 PIN 鎖機制漏洞：透過介面流程漏洞可導致資訊洩露與權限提升",
    summary: "SailingLab AppLock (com.alpha.applock) 的版本 4.3.8，在 Android 平台上存在一個本地攻擊者可利用的漏洞 (CVE-2025-68708)。此漏洞的本質在於該 AppLock 應用程式的鎖機制僅使用 Overlay 方式實作，而非利用 Android 提供的安全認證 API。攻擊者可以透過導航應用程式的層級介面流程（cascading interface flows）——例如透過廣告或瀏覽器意圖（intents）——進行不安全的導航，從而規避鎖畫面驗證。這使得攻擊者能夠繞過 PIN 鎖，存取受保護的應用程式（如 Chrome），最終導致資訊洩露和權限提升。此漏洞的 CVSS 3.1 評分向量為 AV:P/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N。修補建議是開發者應改用 Android 內建的安全認證 API，並加強對應用程式介面流程的輸入驗證，以確保鎖機制的安全完整性。",
    tags: ["Android", "SailingLab AppLock", "CVE-2025-68708", "PIN 鎖", "資訊洩露", "權限提升"],
    title_en: "Android AppLock has vulnerability allowing bypass of PIN lock mechanism: Information leakage and privilege escalation via interface flow flaw",
    summary_en: "SailingLab AppLock (com.alpha.applock), version 4.3.8, contains a local attacker exploitable vulnerability on the Android platform (CVE-2025-68708). The core issue is that the AppLock application's lock mechanism only uses an Overlay method, rather than utilizing Android's provided secure authentication APIs. An attacker can perform unsafe navigation through the application's cascading interface flows—for example, via advertisements or browser intents—thereby bypassing the lock screen verification. This allows the attacker to bypass the PIN lock and access protected applications (such as Chrome), ultimately leading to information leakage and privilege escalation. The CVSS 3.1 score vector for this vulnerability is AV:P/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N. The recommended fix is for developers to switch to Android's built-in secure authentication APIs and strengthen input validation for application interface flows, ensuring the security integrity of the locking mechanism.",
    tags_en: ["Android", "SailingLab AppLock", "CVE-2025-68708", "PIN Lock", "Information Leakage", "Privilege Escalation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68708", lang: "EN" }
    ]
  },
  {
    id: "20260526-031",
    trackers: ["os", "security"],
    category: "Android",
    title: "Android AppLockZ 應用程式存在繞過 PIN 鎖的漏洞，本地攻擊者可透過介面流程漏洞竊取資料",
    summary: "本漏洞（CVE-2025-68711）影響 Android 應用程式 AppLockZ App Lock and Fingerprint Lock (applock.passwordfingerprint.applockz) 版本 4.2.11。該應用程式的鎖機制僅作為疊層（overlay）實作，而非使用 Android 提供的安全認證 API。攻擊者若能取得實體存取權，可利用應用程式在處理層級介面流程（cascading interface flows）時的非安全導航路徑，透過廣告或瀏覽器意圖（intents）等方式，規避鎖屏驗證，達到應用程式控制規避（app control evasion）。這可能導致資訊洩露和權限提升，使攻擊者能存取受保護的應用程式，例如 Chrome。修補建議是開發者應改用 Android 系統提供的安全認證機制，並加強對應用程式介面流程的輸入驗證，避免暴露的路由路徑被惡意利用。",
    tags: ["Android", "AppLockZ", "CVE-2025-68711", "資訊洩露", "權限提升", "本地攻擊"],
    title_en: "Vulnerability in Android AppLockZ allows local attackers to bypass PIN lock via interface flow flaw",
    summary_en: "This vulnerability (CVE-2025-68711) affects the Android application AppLockZ App Lock and Fingerprint Lock (applock.passwordfingerprint.applockz) version 4.2.11. The application's locking mechanism is implemented merely as an overlay, rather than utilizing Android's provided secure authentication APIs. If an attacker gains physical access, they can exploit the application's non-secure navigation paths during cascading interface flows. By using methods such as advertisements or browser intents, the attacker can bypass the screen lock verification, achieving app control evasion. This could lead to information leakage and privilege escalation, allowing the attacker to access protected applications, such as Chrome. The recommended fix is for developers to switch to Android system-provided secure authentication mechanisms and strengthen input validation for application interface flows, preventing exposed routes from being maliciously exploited.",
    tags_en: ["Android", "AppLockZ", "CVE-2025-68711", "Information Leakage", "Privilege Escalation", "Local Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68711", lang: "EN" }
    ]
  },
  {
    id: "20260526-032",
    trackers: ["eu_cra", "security"],
    category: "前瞻技術",
    title: "AI輔助攻擊威脅升級：駭客利用人工智慧發動更智慧的DDoS攻擊",
    summary: "文章警告，駭客已不再單獨行動，而是開始利用強大的人工智慧（AI）工具來發動攻擊。這些AI輔助的攻擊能夠快速、強大且難以防禦，能尋找系統的弱點，並發動大規模的DDoS攻擊，可能在數秒內使企業網站癱瘓。傳統的防火牆和軟體更新等舊式防禦手段已無法應對這種具有思考和適應能力的AI攻擊。AI攻擊不僅攻擊前門，還能尋找隱藏的入口點、智慧API，以及雲端配置中的微小錯誤。文章強調，企業必須快速修補漏洞，並利用自動化工具來預測和防禦威脅，建議關注相關的線上網路研討會，學習如何建立智能防禦體系，以保護數位資產。",
    tags: ["AI攻擊", "DDoS攻擊", "雲端安全", "網路韌性", "資安威脅", "自動化防禦"],
    title_en: "AI-Assisted Attack Threats Escalating: Hackers Using Artificial Intelligence to Launch Smarter DDoS Attacks",
    summary_en: "The article warns that hackers are no longer acting independently but are beginning to utilize powerful Artificial Intelligence (AI) tools to launch attacks. These AI-assisted attacks are fast, powerful, and difficult to defend against. They can search for system vulnerabilities and launch large-scale DDoS attacks, potentially paralyzing corporate websites within seconds. Traditional defense methods, such as firewalls and software updates, are no longer sufficient to counter these AI attacks, which possess thinking and adaptive capabilities. AI attacks do not just target the front door; they can also find hidden entry points, smart APIs, and minor misconfigurations in cloud environments. The article emphasizes that enterprises must rapidly patch vulnerabilities and utilize automated tools to predict and defend against threats, recommending attention to relevant online webinars to learn how to build intelligent defense systems to protect digital assets.",
    tags_en: ["AI Attacks", "DDoS Attacks", "Cloud Security", "Cyber Resilience", "Cybersecurity Threats", "Automated Defense"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/new-ai-ddos-attacks-are-smarter-learn.html", lang: "EN" }
    ]
  },
  {
    id: "20260526-033",
    trackers: ["security"],
    category: "前瞻技術",
    title: "企業級AI代理人安全挑戰：OpenClaw漏洞與Nvidia NemoClaw的治理解決方案",
    summary: "隨著代理式AI（Agentic AI）的快速發展，企業級應用需求激增，但其安全與穩定性成為最大的挑戰。OpenClaw等開源框架因其高權限、快速運作的特性，被比喻為「沒有煞車的F1賽車」，容易造成未受控的風險。研究指出，OpenClaw框架存在大量漏洞，且缺乏內建的治理機制。為了解決此問題，Nvidia在GTC 2026發表了NemoClaw，這是一個專為企業級AI代理人設計的解決方案。NemoClaw結合了OpenShell進行核心隔離、使用大型語言模型進行政策評估，並引入了治理和政策引擎。該引擎使用Rego語言和OpenShell Policy Prover (OPP)，確保政策的執行是「宣告式」而非「機率式」，從基礎設施層面強制執行，從根本上提升了AI代理人的可控性和安全性。",
    tags: ["Agentic AI", "OpenClaw", "NemoClaw", "Nvidia", "OpenShell", "治理", "AI安全"],
    title_en: "Enterprise-Grade AI Agent Security Challenges: OpenClaw Vulnerabilities and Nvidia NemoClaw's Governance Solution",
    summary_en: "With the rapid development of Agentic AI, enterprise applications are experiencing surging demand, but their security and stability pose the greatest challenge. OpenClaw and other open-source frameworks, due to their high privileges and rapid operation, are likened to \"F1 race cars without brakes,\" easily causing uncontrolled risks. Research indicates that the OpenClaw framework contains numerous vulnerabilities and lacks built-in governance mechanisms. To address this issue, Nvidia unveiled NemoClaw at GTC 2026, a solution specifically designed for enterprise-grade AI agents. NemoClaw combines OpenShell for core isolation, utilizes large language models for policy evaluation, and introduces a governance and policy engine. This engine uses Rego language and OpenShell Policy Prover (OPP) to ensure that policy enforcement is \"declarative\" rather than \"probabilistic,\" enforcing control at the infrastructure level and fundamentally enhancing the controllability and security of AI agents.",
    tags_en: ["Agentic AI", "OpenClaw", "NemoClaw", "Nvidia", "OpenShell", "Governance", "AI Security"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/enterprises-agentic-ai-security-biggest-challenge", lang: "EN" }
    ]
  },
  {
    id: "20260526-034",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "NVIDIA顯示驅動程式曝出核心層漏洞：可導致權限提升與程式碼執行",
    summary: "NVIDIA的顯示驅動程式（適用於 Windows 和 Linux）在核心模式層（kernel mode layer）存在一個安全漏洞，編號為 CVE-2026-24190。此漏洞允許使用者透過引起不當的 GPU 資源存取，可能導致系統服務拒絕（Denial of Service）、權限提升（escalation of privileges）、資訊洩露、資料篡改，甚至執行惡意程式碼。該漏洞的 CVSS 3.1 評分向量為 AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H，表示攻擊難度低、無需使用者互動，且影響極為嚴重。受影響的產品涵蓋多個版本的 NVIDIA 顯示驅動程式，包括 Linux 和 Windows 平台。建議使用者應立即檢查並更新到 NVIDIA 官方提供的修補版本，以修復此核心層的重大安全缺陷。",
    tags: ["NVIDIA", "CVE-2026-24190", "顯示驅動程式", "核心層", "權限提升", "Windows", "Linux"],
    title_en: "NVIDIA Display Driver Exposed Core-Level Vulnerability: Potential for Privilege Escalation and Code Execution",
    summary_en: "A security vulnerability, identified as CVE-2026-24190, exists in NVIDIA's display drivers (for Windows and Linux) at the kernel mode layer. This vulnerability allows an attacker to potentially cause system Denial of Service, escalation of privileges, information leakage, data tampering, or even execute malicious code by triggering improper GPU resource access. The CVSS 3.1 score vector for this vulnerability is AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H, indicating low attack difficulty, no user interaction required, and extremely severe impact. Affected products include multiple versions of NVIDIA display drivers across both Linux and Windows platforms. Users are advised to immediately check and update to the official patched version provided by NVIDIA to fix this critical core-level security flaw.",
    tags_en: ["NVIDIA", "CVE-2026-24190", "Display Driver", "Kernel", "Privilege Escalation", "Windows", "Linux"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24190", lang: "EN" }
    ]
  },
  {
    id: "20260526-035",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "ETSI 宣布 2026 量子安全密碼學會議將於加拿大渥太華舉行，聚焦後量子時代的基礎設施轉型",
    summary: "本次會議旨在應對量子電腦發展帶來的密碼學風險，提供一個知識交流平台，協助企業、政府和研究機構了解如何將數位基礎設施轉型至量子安全技術。會議內容涵蓋了從高層次的執行長（CEO, CISO）到技術專家等多個層面。在「執行層」的議程中，將討論在量子安全世界中的身份驗證、零信任架構、地緣政治對網路韌性的影響，以及關鍵基礎設施的遷移挑戰。而「技術層」則深入探討後量子密碼（PQC）和量子金鑰分發（QKD）等新技術的開發細節、全球標準化進展、實務部署經驗，以及如何實現加密敏捷性。這場活動強調了主動參與和知識交換的重要性，為參與者提供了制定下一步行動計畫、了解最新研究並建立人脈網絡的機會。",
    tags: ["ETSI", "量子密碼學", "PQC", "QKD", "後量子時代", "網路安全"],
    title_en: "ETSI Announces 2026 Quantum Security Cryptography Conference in Ottawa, Canada, Focusing on Infrastructure Transformation in the Post-Quantum Era",
    summary_en: "This conference aims to address the cryptographic risks posed by the development of quantum computers, providing a platform for knowledge exchange to help enterprises, governments, and research institutions understand how to transition their digital infrastructure to quantum-safe technologies. The conference content covers multiple levels, from high-level executives (CEO, CISO) to technical experts. The 'Executive Level' agenda will discuss identity verification, zero trust architecture, the impact of geopolitics on cyber resilience, and the transition challenges for critical infrastructure in a quantum-safe world. Meanwhile, the 'Technical Level' will delve into the development details, global standardization progress, practical deployment experiences, and achieving cryptographic agility for new technologies such as Post-Quantum Cryptography (PQC) and Quantum Key Distribution (QKD). This event emphasizes the importance of proactive participation and knowledge exchange, offering attendees opportunities to formulate next steps, understand the latest research, and build professional networks.",
    tags_en: ["ETSI", "Quantum Cryptography", "PQC", "QKD", "Post-Quantum Era", "Cybersecurity"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/events/2592-etsi-iqc-qsc-conference-2026", lang: "EN" }
    ]
  }
];
