// data-20260506.js — 2026-05-06
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-06"] = [
  {
    id: "20260506-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "伊朗 APT 組織 MuddyWater 偽裝為勒索軟體攻擊，實施間諜活動竊取資料",
    summary: "根據 Rapid7 的報告，與伊朗相關的 APT 行動者 MuddyWater 進行了一次入侵，但其行為模式並非實際的檔案加密勒索軟體攻擊。攻擊者最初透過社交工程（Social Engineering）進入目標組織，利用 Microsoft Teams 進行螢幕分享，竊取員工憑證並操縱 MFA 保護。隨後，他們透過 RDP 和 DWAgent 等遠端存取工具建立持久性存取權，進行橫向移動，並竊取和外洩了大量資訊。雖然攻擊者在最後階段發送了勒索信件，並將受害者引導至 Chaos 勒索軟體的洩露網站，但他們從未在受感染的機器上部署檔案加密的勒索軟體。分析指出，使用勒索軟體相關的元素可能是為了分散防禦方的注意力，掩蓋其真正的國家級間諜活動目的。攻擊者還部署了名為 Darkcomp 的自定義 RAT，該後門使用與 MuddyWater 過去活動相關的憑證和 C&C 網域，這進一步證實了其國家級的背景。修補建議應著重於強化員工的社交工程防禦訓練，並嚴密監控遠端存取工具（如 AnyDesk、DWAgent）的異常使用。",
    tags: ["MuddyWater", "伊朗", "APT", "社交工程", "RDP", "DWAgent", "Darkcomp"],
    title_en: "Iranian APT Group MuddyWater Masquerades as Ransomware Attack to Conduct Espionage and Steal Data",
    summary_en: "According to a Rapid7 report, an intrusion was carried out by the Iran-linked APT actor MuddyWater, but its behavior pattern was not a genuine file-encrypting ransomware attack. The attackers initially gained access to the target organization through social engineering, utilizing Microsoft Teams for screen sharing to steal employee credentials and manipulate MFA protection. Subsequently, they established persistent access and performed lateral movement using remote access tools such as RDP and DWAgent, stealing and exfiltrating large amounts of information. Although the attackers sent ransom notes in the final stage and directed the victims to a Chaos ransomware leak site, they never deployed file-encrypting ransomware on the infected machines. Analysis suggests that the use of ransomware-related elements might have been intended to distract the defenders, masking its true national-level espionage objective. The attackers also deployed a custom RAT named Darkcomp, a backdoor that used credentials and C&C domains related to MuddyWater's past activities, further confirming its state-sponsored background. Remediation recommendations should focus on strengthening employee social engineering defense training and strictly monitoring the anomalous use of remote access tools (such as AnyDesk and DWAgent).",
    tags_en: ["MuddyWater", "Iran", "APT", "Social Engineering", "RDP", "DWAgent", "Darkcomp"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/iranian-apt-intrusion-masquerades-as-chaos-ransomware-attack", lang: "EN" }
    ]
  },
  {
    id: "20260506-002",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 存在 Use-after-free 漏洞，遠端攻擊者可透過 HTML 頁面執行沙盒逃逸",
    summary: "Google Chrome 在全螢幕模式（Fullscreen）中存在 CVE-2026-7908 漏洞。此漏洞屬於 Use-after-free 類型，允許遠端攻擊者（Remote attacker）透過精心構造的 HTML 頁面，潛在地執行沙盒逃逸（sandbox escape）。該漏洞的嚴重性被評定為高（High）。受影響的產品版本為 148.0.7778.96 之前的版本。攻擊向量為網路（AV:N），無需使用者互動（UI:R），且影響機密性、完整性、可用性均為高。修補建議是升級至 Google Chrome 148.0.7778.96 或更高版本，以修補此底層的記憶體管理缺陷，防止惡意程式碼執行。",
    tags: ["Google Chrome", "CVE-2026-7908", "Use-after-free", "沙盒逃逸", "Chromium", "Web瀏覽器"],
    title_en: "Google Chrome has Use-after-free vulnerability, allowing remote attackers to achieve sandbox escape via HTML page",
    summary_en: "A vulnerability, CVE-2026-7908, exists in Google Chrome when running in Fullscreen mode. This vulnerability is of the Use-after-free type, which allows a remote attacker to potentially achieve sandbox escape using a specially crafted HTML page. The severity of this vulnerability is rated as High. Affected product versions are those prior to 148.0.7778.96. The attack vector is Network (AV:N), requiring no user interaction (UI:R), and impacts Confidentiality, Integrity, and Availability all at a High level. The recommended fix is to upgrade to Google Chrome 148.0.7778.96 or later to patch this underlying memory management defect and prevent malicious code execution.",
    tags_en: ["Google Chrome", "CVE-2026-7908", "Use-after-free", "sandbox escape", "Chromium", "Web browser"],
    sources: [
      { name: "NVD (NIST)", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7908", lang: "EN" }
    ]
  },
  {
    id: "20260506-003",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞：CVE-2026-7905 允許遠端攻擊者執行沙盒逃逸",
    summary: "Google Chrome 在 Android 平台上的 Media 模組存在安全漏洞 CVE-2026-7905。此漏洞源於對不受信任輸入（untrusted input）驗證不足，若攻擊者能先透過某方式取得渲染器程序（renderer process）的控制權，便可利用此缺陷，透過精心構造的 HTML 頁面執行沙盒逃逸（sandbox escape）。該漏洞的攻擊向量為網路（AV:N），攻擊複雜度為高（AC:H），且無需登入權限（PR:N）。實務上，這類漏洞可能導致攻擊者在用戶設備上執行高權限的惡意代碼。修補建議是升級到修復此漏洞的 Chrome 版本，避免使用受影響的 Android 系統。由於原文未提供具體修補版本，建議用戶應留意 Google 官方發布的最新安全更新。",
    tags: ["Google Chrome", "Android", "CVE-2026-7905", "Chromium", "沙盒逃逸", "Media"],
    title_en: "Google Chrome Android Vulnerability: CVE-2026-7905 Allows Remote Sandbox Escape",
    summary_en: "A security vulnerability, CVE-2026-7905, exists in the Media module of Google Chrome on the Android platform. This vulnerability stems from insufficient validation of untrusted input. If an attacker can first gain control of the renderer process through some means, they can exploit this flaw to achieve a sandbox escape using a specially crafted HTML page. The attack vector is network (AV:N), the attack complexity is high (AC:H), and no privileges are required (PR:N). In practice, such vulnerabilities could allow an attacker to execute high-privilege malicious code on the user's device. The recommended mitigation is to upgrade to a Chrome version that fixes this vulnerability and avoid using affected Android systems. Since the original text did not provide a specific patched version, users are advised to monitor official Google security updates.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7905", "Chromium", "Sandbox Escape", "Media"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7905", lang: "EN" }
    ]
  },
  {
    id: "20260506-004",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞警示：CVE-2026-7912 允許透過渲染器流程執行任意讀寫",
    summary: "Google Chrome 在 Android 平台上的版本，在 148.0.7778.96 之前，存在一個名為 CVE-2026-7912 的安全漏洞。此漏洞源於 GPU 處理器中的整數溢位（Integer overflow），允許遠端攻擊者在已取得渲染器流程（renderer process）控制權的情況下，透過精心構造的 HTML 頁面，執行任意讀取（arbitrary read）和任意寫入（arbitrary write）操作。該漏洞的嚴重性被評定為高風險（High）。攻擊向量為網路（AV:N），無需使用者互動（UI:R），且影響範圍為單一使用者（S:U）。修補建議是升級至 148.0.7778.96 或更高版本的 Google Chrome 瀏覽器，以修復此 GPU 相關的整數溢位問題。",
    tags: ["Google Chrome", "Android", "CVE-2026-7912", "GPU", "整數溢位", "渲染器流程"],
    title_en: "Google Chrome Android Vulnerability Alert: CVE-2026-7912 Allows Arbitrary Read/Write via Renderer Process",
    summary_en: "Google Chrome versions on the Android platform, prior to 148.0.7778.96, contain a security vulnerability named CVE-2026-7912. This vulnerability originates from an integer overflow in the GPU processor, allowing a remote attacker, who has already gained control of the renderer process, to execute arbitrary read and arbitrary write operations through a specially crafted HTML page. The vulnerability is rated as High risk. The attack vector is Network (AV:N), no user interaction is required (UI:R), and the scope is limited to a single user (S:U). The recommended fix is to upgrade to Google Chrome browser version 148.0.7778.96 or later, to patch this GPU-related integer overflow issue.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7912", "GPU", "Integer Overflow", "Renderer Process"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7912", lang: "EN" }
    ]
  },
  {
    id: "20260506-005",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞警示：CVE-2026-7913 允許本地攻擊者進行權限提升",
    summary: "Google Chrome 在 Android 平台上的 DevTools 功能存在安全缺陷，編號為 CVE-2026-7913。該漏洞源於 DevTools 缺乏足夠的策略強制執行（Insufficient policy enforcement），允許本地攻擊者透過惡意檔案執行權限提升（Privilege Escalation）。根據 CVSS 3.1 評分，此漏洞的攻擊向量（AV）為本地（L），攻擊複雜度（AC）為低（L），權限要求（PR）為無（N），使用者互動（UI）為遠端（R），範圍（S）為本地（U），機密性（C）和完整性（I）為高（H），可用性（A）為高（H）。受影響版本為 Android 平台上的 Chrome 於 148.0.7778.96 之前。修補建議是升級至修復此漏洞的 Chrome 版本。開發者應特別注意 DevTools 相關功能，確保在處理本地檔案時，能實施嚴格的策略控制，以防止權限提升攻擊。",
    tags: ["Google Chrome", "Android", "CVE-2026-7913", "DevTools", "權限提升", "Chromium"],
    title_en: "Google Chrome Android Vulnerability Alert: CVE-2026-7913 Allows Local Privilege Escalation",
    summary_en: "A security flaw has been found in the DevTools feature of Google Chrome on the Android platform, identified as CVE-2026-7913. The vulnerability stems from insufficient policy enforcement within DevTools, allowing a local attacker to perform Privilege Escalation by executing malicious files. According to the CVSS 3.1 scoring, the attack vector (AV) is Local (L), attack complexity (AC) is Low (L), privileges required (PR) is None (N), user interaction (UI) is Remote (R), scope (S) is Unchanged (U), and confidentiality (C) and integrity (I) are High (H), while availability (A) is High (H). Affected versions are Chrome on the Android platform prior to 148.0.7778.96. The recommended fix is to upgrade to a Chrome version that patches this vulnerability. Developers should pay special attention to DevTools-related functionalities, ensuring strict policy control when handling local files to prevent privilege escalation attacks.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7913", "DevTools", "Privilege Escalation", "Chromium"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7913", lang: "EN" }
    ]
  },
  {
    id: "20260506-006",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 漏洞曝光：DevTools 數據驗證不足，可遠端繞過導航限制",
    summary: "Google Chrome 在 Android 平台上的 DevTools 功能存在安全漏洞 CVE-2026-7915。此漏洞源於 DevTools 缺乏足夠的數據驗證機制，允許遠端攻擊者透過精心構造的 HTML 頁面，繞過應用程式的導航限制。該漏洞的影響範圍涵蓋所有版本早於 148.0.7778.96 的 Chrome 瀏覽器。攻擊向量為遠端（AV:N），無需登入（PR:N），且需用戶互動（UI:R）。修補建議是升級至 148.0.7778.96 或更高版本的 Google Chrome 瀏覽器。開發者應特別注意 DevTools 等開發工具組的輸入驗證機制，以防止類似的邏輯繞過攻擊。",
    tags: ["Google Chrome", "Android", "CVE-2026-7915", "DevTools", "Chromium", "輸入驗證"],
    title_en: "Google Chrome Android Vulnerability Exposed: Insufficient DevTools Data Validation Allows Remote Bypass of Navigation Restrictions",
    summary_en: "A security vulnerability, CVE-2026-7915, was found in the DevTools feature of Google Chrome on the Android platform. This vulnerability stems from DevTools lacking sufficient data validation mechanisms, which allows remote attackers to bypass an application's navigation restrictions using a specially crafted HTML page. The vulnerability affects all versions of Chrome browser prior to 148.0.7778.96. The attack vector is remote (AV:N), requires no authentication (PR:N), and requires user interaction (UI:R). The recommended fix is to upgrade to Google Chrome browser version 148.0.7778.96 or higher. Developers should pay special attention to input validation mechanisms in development toolkits like DevTools to prevent similar logic bypass attacks.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7915", "DevTools", "Chromium", "Input Validation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7915", lang: "EN" }
    ]
  },
  {
    id: "20260506-007",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在 UXSS 漏洞：透過惡意擴充功能注入腳本",
    summary: "Google Chrome 在 Android 系統上，版本早於 148.0.7778.96，存在一個名為 CVE-2026-7941 的安全漏洞。此漏洞的本質是應用程式未能充分驗證來自不受信任的輸入，允許本地攻擊者透過精心構造的 Chrome 擴充功能，注入任意腳本或 HTML 內容，造成跨站腳本攻擊（UXSS）。此漏洞的嚴重性被評定為中等（Medium）。攻擊向量為本地（Local），無需使用者互動（UI:R），且攻擊範圍為單一使用者（S:U）。實務上，這類漏洞可能導致瀏覽器內容被惡意腳本劫持，影響用戶瀏覽的網頁內容或執行未經授權的行為。修補建議是使用者應立即將 Google Chrome 瀏覽器更新至 148.0.7778.96 或更高版本，以修補此安全缺陷。",
    tags: ["Google Chrome", "Android", "CVE-2026-7941", "UXSS", "Chromium", "擴充功能"],
    title_en: "Google Chrome Android has UXSS vulnerability: Script injection via malicious extension",
    summary_en: "Google Chrome on Android systems, versions prior to 148.0.7778.96, contains a security vulnerability identified as CVE-2026-7941. The vulnerability stems from the application's failure to adequately validate untrusted input, allowing a local attacker to inject arbitrary scripts or HTML content through a carefully crafted Chrome extension, leading to a Cross-Site Scripting (UXSS) attack. The severity of this vulnerability is rated as Medium. The attack vector is Local, requiring no user interaction (UI:R), and the scope is single user (S:U). Practically, this type of vulnerability could allow malicious scripts to hijack browser content, affecting the web page content viewed by the user or executing unauthorized actions. The recommended fix is for users to immediately update the Google Chrome browser to version 148.0.7778.96 or later to patch this security flaw.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7941", "UXSS", "Chromium", "Extension"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7941", lang: "EN" }
    ]
  },
  {
    id: "20260506-008",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在 CVE-2026-7993 漏洞：渲染器流程被攻破可偽造 Omnibox 內容",
    summary: "Google Chrome 在 Android 平台上的特定版本（早於 148.0.7778.96）存在一個安全漏洞 CVE-2026-7993。此漏洞源於對不受信任輸入缺乏足夠的驗證，允許遠端攻擊者在已攻破渲染器流程（renderer process）的條件下，透過精心構造的 HTML 頁面，偽造瀏覽器網址列（Omnibox）的內容。該漏洞的攻擊向量為網路（AV:N），無需登入（PR:N），且需要使用者互動（UI:R）。雖然漏洞的嚴重性被評定為中等（Medium），但它仍可能導致資訊洩漏（C:L）。修補建議是升級至 148.0.7778.96 或更高版本的 Google Chrome 瀏覽器。",
    tags: ["Google Chrome", "Android", "CVE-2026-7993", "Chromium", "Omnibox", "渲染器流程"],
    title_en: "CVE-2026-7993 Vulnerability in Google Chrome Android: Compromising the Renderer Process Allows Omnibox Content Forgery",
    summary_en: "A security vulnerability, CVE-2026-7993, exists in specific versions of Google Chrome on the Android platform (prior to 148.0.7778.96). This vulnerability stems from insufficient validation of untrusted input, allowing a remote attacker, under the condition of having compromised the renderer process, to forge the content of the browser's address bar (Omnibox) using a specially crafted HTML page. The attack vector is network (AV:N), no privileges are required (PR:N), and user interaction is needed (UI:R). Although the vulnerability is rated as Medium severity, it may still lead to information leakage (C:L). The recommended fix is to upgrade to Google Chrome browser version 148.0.7778.96 or later.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-7993", "Chromium", "Omnibox", "renderer process"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-7993", lang: "EN" }
    ]
  },
  {
    id: "20260506-009",
    trackers: ["os", "security"],
    category: "Android",
    title: "Google Chrome Android 存在 CVE-2026-8020 漏洞：渲染器流程被攻破後可竊取記憶體資訊",
    summary: "Google Chrome 在 Android 平台上存在一個名為 CVE-2026-8020 的安全漏洞。此漏洞屬於「未初始化使用 GPU 資源」（Uninitialized Use in GPU），影響範圍為版本早於 148.0.7778.96 的 Chrome 瀏覽器。攻擊者若能先透過其他方式攻破渲染器流程（renderer process），便可利用此漏洞，透過精心設計的 HTML 網頁，從程序記憶體中竊取潛在的敏感資訊。該漏洞的嚴重性被 Chromium 評定為「低」（Low）。修補建議是升級至 148.0.7778.96 或更高版本的 Chrome 瀏覽器。由於此漏洞的利用前提是攻擊者已取得渲染器流程的控制權，實務上可能需要多階段攻擊鏈才能達成目標。",
    tags: ["Google Chrome", "Android", "CVE-2026-8020", "Chromium", "GPU", "記憶體洩漏"],
    title_en: "CVE-2026-8020 Vulnerability in Google Chrome Android: Memory Information Theft Possible After Renderer Process Compromise",
    summary_en: "A security vulnerability, CVE-2026-8020, exists in Google Chrome on the Android platform. This vulnerability is classified as \"Uninitialized Use in GPU\" and affects Chrome browser versions earlier than 148.0.7778.96. If an attacker can first compromise the renderer process through other means, they can exploit this vulnerability using a specially crafted HTML webpage to steal sensitive information from the program's memory. Chromium has rated the severity of this vulnerability as \"Low.\" The recommended fix is to upgrade to Chrome browser version 148.0.7778.96 or later. Since the exploitation of this vulnerability requires the attacker to already have control over the renderer process, achieving the goal in practice may require a multi-stage attack chain.",
    tags_en: ["Google Chrome", "Android", "CVE-2026-8020", "Chromium", "GPU", "Memory Leak"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-8020", lang: "EN" }
    ]
  },
  {
    id: "20260506-010",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AI輔助駭客攻擊水務設施：敵方利用商用AI工具偵測並嘗試突破OT邊界",
    summary: "本報告揭露一個真實世界的攻擊案例，敵方在入侵墨西哥一家市政水務和排水設施時，利用商用AI模型（如Anthropic的Claude和OpenAI的GPT）進行核心入侵活動。攻擊者利用AI工具進行偵察、橫向移動和滲透，甚至在沒有事前OT目標的情況下，獨立識別出OT環境的相關性，並將其評估為關鍵資產。AI模型（特別是Claude）負責執行技術操作，包括分析vNode工業閘道器和SCADA/IIoT管理平台，並識別出單密碼驗證介面。攻擊者隨後利用AI生成憑證清單，並執行了自動化的密碼噴灑攻擊，試圖突破IT-OT邊界。這顯示AI工具已成為攻擊輔助，能讓OT環境對敵方更為可見。防禦方除了基礎控制（如分割、修補）外，更需提升OT網路可視性、偵測和回應能力，以應對AI輔助的攻擊。原文未公開具體漏洞或CVSS分數。",
    tags: ["AI攻擊", "OT安全", "ICS", "水務設施", "Claude", "GPT", "IT-OT邊界"],
    title_en: "AI-Assisted Hacking of Water Facilities: Adversaries Use Commercial AI Tools to Detect and Attempt to Breach OT Boundaries",
    summary_en: "This report reveals a real-world attack case where adversaries utilized commercial AI models (such as Anthropic's Claude and OpenAI's GPT) during a core intrusion activity targeting a municipal water and drainage facility in Mexico. The attackers used AI tools for reconnaissance, lateral movement, and penetration, even independently identifying the relevance of the OT environment and assessing it as a critical asset, even without prior OT targets. The AI models (especially Claude) were responsible for executing technical operations, including analyzing vNode industrial gateways and SCADA/IIoT management platforms, and identifying single-credential authentication interfaces. The attackers subsequently used AI to generate credential lists and executed automated password spraying attacks, attempting to breach the IT-OT boundary. This demonstrates that AI tools have become an attack enabler, making the OT environment more visible to adversaries. Beyond basic controls (such as segmentation and patching), defenders must enhance OT network visibility, detection, and response capabilities to counter AI-assisted attacks. The original text did not disclose specific vulnerabilities or CVSS scores.",
    tags_en: ["AI Attacks", "OT Security", "ICS", "Water Facilities", "Claude", "GPT", "IT-OT Boundary"],
    sources: [
      { name: "Dragos Blog", url: "https://dragos.com/blog/ai-assisted-ics-attack-water-utility", lang: "EN" }
    ]
  }
];
