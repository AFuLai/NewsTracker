// data-20260705.js — 2026-07-05
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-05"] = [
  {
    id: "20260705-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6381-1：修補 OpenSSH 服務中的憑證驗證漏洞",
    summary: "Debian 安全公告 DSA-6381-1 宣布修補 OpenSSH 服務中的一個憑證驗證漏洞。此漏洞可能允許攻擊者在特定條件下，透過偽造或劫持憑證流程，達到未經授權的遠端存取或執行指令。雖然原文未提供具體的 CVSS 分數或影響範圍，但這類憑證相關的漏洞通常被視為高風險，可能影響使用 OpenSSH 服務的伺服器安全。修補建議是立即升級到包含此修補的 Debian 核心版本。使用者應檢查其 OpenSSH 服務的配置，確保所有憑證驗證機制都遵循最佳實踐，並考慮實施更嚴格的身份驗證措施，例如結合密碼密碼或多因素驗證，以降低被利用的風險。",
    tags: ["Debian", "OpenSSH", "DSA-6381-1", "憑證驗證", "Linux 核心", "遠端存取"],
    title_en: "Debian Releases DSA-6381-1: Patching Certificate Authentication Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6381-1 announces a patch for a certificate authentication vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to achieve unauthorized remote access or command execution by forging or hijacking the certificate process. Although the original text does not provide specific CVSS scores or impact scope, certificate-related vulnerabilities of this nature are typically considered high risk and may affect the security of servers utilizing the OpenSSH service. The patch recommends immediately upgrading to the Debian core version containing this fix. Users should check their OpenSSH service configurations, ensuring all certificate authentication mechanisms adhere to best practices, and consider implementing stricter identity verification measures, such as combining password authentication or multi-factor authentication, to mitigate the risk of exploitation.",
    tags_en: ["Debian", "OpenSSH", "DSA-6381-1", "Certificate Authentication", "Linux Kernel", "Remote Access"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00292.html", lang: "EN" }
    ]
  },
  {
    id: "20260705-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6380-1：修補 OpenSSH 服務中的潛在遠端執行漏洞",
    summary: "Debian 安全公告 DSA-6380-1 針對 OpenSSH 服務發布了安全修補。此漏洞允許攻擊者在特定條件下，透過 OpenSSH 服務執行遠端程式碼。雖然原文未提供具體 CVE 編號或 CVSS 分數，但其本質是修補 OpenSSH 服務中的一個潛在遠端執行漏洞。受影響的產品為使用 Debian 系統並運行 OpenSSH 服務的設備。實務影響包括攻擊者可能在未經授權的情況下遠端執行程式碼，造成系統安全風險。建議所有使用 Debian 系統的用戶，應立即更新 OpenSSH 服務至修補後的版本，以防止被惡意利用。建議用戶透過 Debian 的標準更新機制（如 apt）進行系統升級。",
    tags: ["Debian", "OpenSSH", "DSA-6380-1", "遠端執行漏洞", "Linux 核心元件", "安全修補"],
    title_en: "Debian Releases DSA-6380-1: Patching Potential Remote Code Execution Vulnerability in OpenSSH Service",
    summary_en: "Debian Security Advisory DSA-6380-1 has released a security patch for the OpenSSH service. This vulnerability allows an attacker, under specific conditions, to execute remote code via the OpenSSH service. Although the original text did not provide a specific CVE ID or CVSS score, the core issue is a patch for a potential remote execution vulnerability within the OpenSSH service. Affected products include devices running Debian systems and utilizing the OpenSSH service. The practical impact is that an attacker could remotely execute code without authorization, posing a system security risk. All users of Debian systems are advised to immediately update the OpenSSH service to the patched version to prevent malicious exploitation. Users are recommended to perform the system upgrade through Debian's standard update mechanism (such as apt).",
    tags_en: ["Debian", "OpenSSH", "DSA-6380-1", "Remote Code Execution Vulnerability", "Linux Kernel Component", "Security Patch"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00291.html", lang: "EN" }
    ]
  },
  {
    id: "20260705-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6379-1：修補 OpenSSH 服務中的資訊洩漏漏洞",
    summary: "Debian 發布了安全公告 DSA-6379-1，修補了 OpenSSH 服務中的一個資訊洩漏漏洞。此漏洞可能允許攻擊者在特定條件下，透過觀察服務的行為，竊取敏感的系統資訊。雖然原文未提供具體的 CVSS 分數或影響範圍，但此類資訊洩漏漏洞通常被視為提升攻擊鏈的輔助工具。修補建議是立即更新 Debian 系統至包含此安全修補的最新版本。開發者和系統管理員應特別注意所有使用 OpenSSH 服務的環境，確保其修補狀態，以防止資訊被未經授權的第三方獲取。",
    tags: ["Debian", "OpenSSH", "DSA-6379-1", "資訊洩漏", "Linux 核心元件"],
    title_en: "Debian Releases DSA-6379-1: Patching Information Leak Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6379-1, patching an information leak vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to steal sensitive system information by observing the service's behavior. Although the original text does not provide specific CVSS scores or impact scope, such information leak vulnerabilities are generally considered auxiliary tools that enhance an attack chain. The recommended fix is to immediately update Debian systems to the latest version containing this security patch. Developers and system administrators should pay special attention to all environments using the OpenSSH service, ensuring its patched status to prevent unauthorized third-party access to information.",
    tags_en: ["Debian", "OpenSSH", "DSA-6379-1", "Information Leak", "Linux Kernel Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00290.html", lang: "EN" }
    ]
  },
  {
    id: "20260705-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6378-1：修補 OpenSSH 服務的潛在遠端執行漏洞",
    summary: "Debian 發布了安全公告 DSA-6378-1，修補了 OpenSSH 服務中一個潛在的遠端執行漏洞。該漏洞可能允許攻擊者在未經授權的情況下執行遠端代碼。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但這類漏洞通常代表著嚴重的安全風險，可能導致系統被完全接管。修補建議是立即更新 Debian 系統上的 OpenSSH 套件至修補版本。由於 OpenSSH 是許多伺服器和開發環境的關鍵元件，所有使用 OpenSSH 服務的系統管理者應將此更新列為高優先級的修補作業，以防止被遠端攻擊者利用。建議同時檢查系統配置，確保 OpenSSH 服務的存取權限已最小化，並考慮使用更安全的認證機制，例如基於密鑰的驗證，而非僅依賴密碼。",
    tags: ["Debian", "OpenSSH", "DSA-6378-1", "遠端執行漏洞", "Linux 核心元件", "安全更新"],
    title_en: "Debian Releases DSA-6378-1: Patching Potential Remote Execution Vulnerability in OpenSSH Service",
    summary_en: "Debian has released security advisory DSA-6378-1, patching a potential remote execution vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker to execute remote code without authorization. Although the original text did not provide specific CVSS scores or affected version ranges, such vulnerabilities typically represent a severe security risk, potentially leading to complete system compromise. The patch recommends immediately updating the OpenSSH package on Debian systems to the patched version. Since OpenSSH is a critical component for many servers and development environments, all system administrators using the OpenSSH service should prioritize this update to prevent exploitation by remote attackers. It is also recommended to check system configurations to ensure that OpenSSH service access permissions are minimized, and to consider using more secure authentication mechanisms, such as key-based authentication, rather than relying solely on passwords.",
    tags_en: ["Debian", "OpenSSH", "DSA-6378-1", "Remote Execution Vulnerability", "Linux Core Component", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00289.html", lang: "EN" }
    ]
  },
  {
    id: "20260705-005",
    trackers: ["os"],
    category: "Linux",
    title: "AMD為Linux 7.3提交圖形驅動程式更新：強化RDNA 3/4硬體支援與程式碼安全",
    summary: "AMD已開始為Linux 7.3核心版本提交圖形與運算驅動程式的更新。這些更新主要針對AMDGPU和AMDKFD驅動程式，旨在提升對新硬體的支援和系統的穩定性。技術細節包括實作運算管線重置支援，以解決GFX11 (RDNA3) 和 GFX12 (RDNA4) 硬體在遇到問題時的重置問題。此外，還包含UserQ更新、RAS更新、DisplayID解析能力、DCN 4.2 IP更新，以及針對RDNA \"4m\" GPU的GFX 11.7更新，並修復了8K顯示面板和背光等問題。在安全方面，驅動程式增加了多項程式碼強化措施，例如改善vBIOS解析的邊界檢查，以及AMDKFD驅動程式的CRIU邊界檢查。這些更新也包含提升早期Radeon GCN GPU軟重置和GPU恢復能力的改進。這些變更預計將在未來數週內持續提交至DRM-Next，為Linux 7.3提供更全面的圖形支援。",
    tags: ["AMD", "AMDGPU", "AMDKFD", "Linux 7.3", "RDNA3", "RDNA4", "Linux 核心"],
    title_en: "AMD Submits Graphics Driver Update for Linux 7.3: Enhancing RDNA 3/4 Hardware Support and Code Security",
    summary_en: "AMD has begun submitting updates for graphics and compute drivers for the Linux 7.3 kernel version. These updates primarily target the AMDGPU and AMDKFD drivers, aiming to improve support for new hardware and enhance system stability. Technical details include implementing compute pipeline reset support to address reset issues encountered by GFX11 (RDNA3) and GFX12 (RDNA4) hardware. Additionally, the updates include UserQ updates, RAS updates, DisplayID parsing capabilities, DCN 4.2 IP updates, and a GFX 11.7 update for RDNA \"4m\" GPUs, along with fixes for issues related to 8K displays and backlighting. On the security front, the drivers incorporate multiple code hardening measures, such as improved boundary checks for vBIOS parsing and boundary checks within the AMDKFD driver's CRIU implementation. These updates also include improvements to early Radeon GCN GPU soft reset and GPU recovery capabilities. These changes are expected to be submitted continuously to DRM-Next over the coming weeks, providing more comprehensive graphics support for Linux 7.3.",
    tags_en: ["AMD", "AMDGPU", "AMDKFD", "Linux 7.3", "RDNA3", "RDNA4", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/AMDGPU-AMDKFD-Start-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260705-006",
    trackers: ["os"],
    category: "Linux",
    title: "Intel Nova Lake 筆電預計搭載 IPU8 影像處理單元，Linux 核心正在進行支援整合",
    summary: "Intel 正在為下一代高階 Nova Lake 筆電準備 IPU8 影像處理單元（Image Processing Unit）的支援。相較於現有的 Panther Lake 搭載 IPU 7.5 的機型，Nova Lake 將升級至 IPU8。IPU 自 Alder Lake 時代以來，一直是 Linux 支援的挑戰點，主要因為其在使用者空間仍依賴二進位區塊（binary blobs）。最新的核心補丁顯示，IPU8 將為 Nova Lake 帶來相機視覺感應支援，這些補丁正逐步進入主線核心，預計在 Linux v7.3 週期內完成。雖然文章未詳述 IPU8 的具體提升，但有觀察指出其可能整合更多 AI 影像處理功能，但目前仍面臨在使用者空間使用二進位區塊的限制，這對 Linux 系統的整合仍是開發重點。",
    tags: ["Intel", "Nova Lake", "IPU8", "Linux 核心", "Panther Lake", "AI 影像處理"],
    title_en: "Intel Nova Lake Laptops Expected to Feature IPU8 Image Processing Unit; Linux Kernel Integration Underway",
    summary_en: "Intel is preparing support for the IPU8 Image Processing Unit in its next-generation high-end Nova Lake laptops. Compared to current models featuring the IPU 7.5 in Panther Lake, Nova Lake will upgrade to IPU8. Since the Alder Lake era, the IPU has been a point of challenge for Linux support, primarily because it still relies on binary blobs in user space. The latest kernel patches indicate that IPU8 will bring camera vision sensing support to Nova Lake, and these patches are gradually entering the mainline kernel, expected to be completed within the Linux v7.3 cycle. Although the article does not detail the specific enhancements of IPU8, observations suggest it may integrate more AI image processing capabilities, but it currently still faces the limitation of using binary blobs in user space, which remains a key development focus for Linux system integration.",
    tags_en: ["Intel", "Nova Lake", "IPU8", "Linux Kernel", "Panther Lake", "AI Image Processing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-IPU8-With-Nova-Lake", lang: "EN" }
    ]
  },
  {
    id: "20260705-007",
    trackers: ["os"],
    category: "Linux",
    title: "OpenRazer 3.12.4 更新：修復與 Linux 7.2 核心兼容性問題，取代 strncpy API",
    summary: "本篇更新介紹 OpenRazer 驅動程式的最新版本 3.12.4。OpenRazer 是用於 Linux 環境下支援 Razer 遊戲周邊設備的非官方驅動程式。本次更新的主要目的，是確保與最新的 Linux 7.2 Git 核心狀態具備兼容性。由於 Linux 7.2 核心已移除 strncpy API，OpenRazer 必須進行程式碼調整。因此，3.12.4 版本已將程式碼中依賴 strncpy() 的部分，替換為 strscpy()，以確保在 Linux 7.2 及更高版本上的穩定運行。此更新對於希望在 Linux 上使用 Razer 設備的用戶至關重要，可從 GitHub 下載。本版本主要著重於核心兼容性修復，並無新增功能。",
    tags: ["OpenRazer", "Linux 7.2", "Linux 核心", "stdcpy", "Razer", "驅動程式"],
    title_en: "OpenRazer 3.12.4 Update: Fixes Linux 7.2 Kernel Compatibility Issues and Replaces strncpy API",
    summary_en: "This update introduces the latest version, 3.12.4, of the OpenRazer driver. OpenRazer is an unofficial driver used to support Razer gaming peripherals in Linux environments. The primary goal of this update is to ensure compatibility with the latest Linux 7.2 Git kernel state. Since the Linux 7.2 kernel has removed the strncpy API, OpenRazer had to adjust its code. Therefore, version 3.12.4 replaces the parts of the code that relied on strncpy() with strscpy(), ensuring stable operation on Linux 7.2 and higher versions. This update is crucial for users who wish to use Razer devices on Linux and can be downloaded from GitHub. This version focuses primarily on core compatibility fixes and introduces no new features.",
    tags_en: ["OpenRazer", "Linux 7.2", "Linux Kernel", "stdcpy", "Razer", "Driver"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/OpenRazer-3.12.4", lang: "EN" }
    ]
  },
  {
    id: "20260705-008",
    trackers: ["os"],
    category: "Windows",
    title: "微軟宣布 M365 訂閱方案漲價：AI 功能與安全強化成為主要推動成本",
    summary: "本文報導微軟（Microsoft）於 2026 年 7 月 1 日實施的「封裝與定價更新」，導致多個 Microsoft 365 訂閱方案價格上漲。漲價的理由是為了涵蓋 AI、安全與 IT 管理等領域的持續創新投入。受影響的產品線包括 Business Basic、Business Standard、Office 365 E3 等，漲幅從 8% 到 43% 不等，其中 Frontline 員工的方案漲幅尤其顯著。微軟透過漲價，將多項先前需額外購買的企業級安全功能（如 Defender for Office 365 Plan 1、Intune Advanced Analytics）和 AI 協作工具（如 Copilot）整合到各套件中。雖然消費者和教育版價格未變動，但企業用戶需注意，漲價主要歸因於 AI 相關的升級與安全能力的強化。用戶應查閱微軟官方授權頁面了解完整的定價表。",
    tags: ["Microsoft 365", "Copilot", "訂閱費用", "企業安全", "Office 365", "AI"],
    title_en: "Microsoft Announces M365 Subscription Price Hike: AI Features and Security Enhancements Drive Cost Increases",
    summary_en: "This article reports on the 'Packaging and Pricing Update' implemented by Microsoft on July 1, 2026, which has resulted in price increases across multiple Microsoft 365 subscription plans. The reason for the price hike is to cover continuous investment in areas such as AI, security, and IT management. Affected product lines include Business Basic, Business Standard, and Office 365 E3, with increases ranging from 8% to 43%. The increase is particularly noticeable for plans used by frontline employees. Through this price adjustment, Microsoft is integrating various enterprise-grade security features (such as Defender for Office 365 Plan 1 and Intune Advanced Analytics) and AI collaboration tools (such as Copilot) into the packages. While consumer and education plan prices remain unchanged, enterprise users should note that the price increase is primarily attributed to AI-related upgrades and enhanced security capabilities. Users should consult the official Microsoft authorized page for the complete pricing table.",
    tags_en: ["Microsoft 365", "Copilot", "Subscription Cost", "Enterprise Security", "Office 365", "AI"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/05/microsoft-365-just-got-a-price-hike-over-continuous-innovation-but-copilot-is-the-ai-tax-on-businesses", lang: "EN" }
    ]
  },
  {
    id: "20260705-009",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux核心發現Bad Epoll LPE漏洞：競態條件導致無特權提升至Root權限",
    summary: "資安研究人員發現Linux核心epoll子系統存在本機權限漏洞（LPE），命名為Bad Epoll，正式編號為CVE-2026-46242。此漏洞源於競態條件（race-condition）導致的記憶體釋放後再存取利用（Use-After-Free，UAF）。攻擊者可利用此漏洞將無特權的處理程序提升為具有root權限的狀態。Bad Epoll影響範圍廣泛，包括Linux桌面系統、伺服器及Android平臺。建議用戶應檢查其Linux發行版的核心安全更新，確認是否已將修補機制回溯移植。受影響的Linux核心版本為6.4及以上，而6.1版本則不受影響。由於epoll是處理大量連線的關鍵I/O機制，無法停用，唯一的補救措施是套用官方修補程式。",
    tags: ["Linux核心", "CVE-2026-46242", "Bad Epoll", "LPE", "競態條件", "Use-After-Free"],
    title_en: "Bad Epoll LPE Vulnerability Found in Linux Kernel: Race Condition Leads to Privilege Escalation to Root",
    summary_en: "Security researchers have discovered a Local Privilege Escalation (LPE) vulnerability in the Linux kernel's epoll subsystem, named Bad Epoll, and assigned the identifier CVE-2026-46242. This vulnerability stems from a Use-After-Free (UAF) condition caused by a race-condition. An attacker can exploit this vulnerability to elevate an unprivileged process to root privileges. Bad Epoll affects a wide range of systems, including Linux desktop systems, servers, and Android platforms. Users are advised to check their Linux distribution kernel for security updates and confirm that the patch has been backported. Affected Linux kernel versions are 6.4 and above, while version 6.1 remains unaffected. Since epoll is a critical I/O mechanism for handling a large number of connections and cannot be disabled, the only mitigation is to apply the official patch.",
    tags_en: ["Linux Kernel", "CVE-2026-46242", "Bad Epoll", "LPE", "Race Condition", "Use-After-Free"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177088", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260705-010",
    trackers: ["os"],
    category: "Apple",
    title: "分析師預測Apple摺疊機iPhone Ultra發布後供貨極度緊張，可能延遲上市",
    summary: "根據供應鏈分析師Ming-Chi Kuo的報告，Apple預計在九月發布的摺疊式iPhone（傳聞名為iPhone Ultra）將面臨極度有限的供貨量。該機型預計具備5.5吋外螢幕和7.8吋內螢幕，厚度小於5mm，預計售價介於$2300至$2500之間。Kuo指出，2026年下半年預計的摺疊機出貨量為700萬至800萬台，而第三季的預計出貨量僅佔總量的10%左右。相比之下，同期iPhone 18 Pro/Pro Max的預計出貨量則為2000萬至2200萬台，已足夠滿足官方發布的庫存需求。由於第三季的供應量極低，Kuo預測九月發布的可能性不高，若發售，消費者可能需要等待4至6週甚至更久，甚至可能需要等到十二月才能購買到。他甚至預測，該機型在上市初期可能會被炒作，溢價達其零售價的50%至100%。",
    tags: ["Apple", "iPhone Ultra", "摺疊手機", "供應鏈分析", "供貨限制", "iPhone 18 Pro"],
    title_en: "Analyst Predicts Extreme Supply Shortage for Apple's Foldable iPhone Ultra, Potential Launch Delay",
    summary_en: "According to supply chain analyst Ming-Chi Kuo's report, Apple's foldable iPhone, expected to be released in September (rumored name: iPhone Ultra), will face extremely limited supply. The device is anticipated to feature a 5.5-inch outer screen and a 7.8-inch inner screen, with a thickness of less than 5mm, and an estimated retail price between $2300 and $2500. Kuo pointed out that the projected shipment volume for the foldable device in the second half of 2026 is 7 to 8 million units, while the projected shipment volume for the third quarter accounts for only about 10% of the total. In comparison, the projected shipment volume for the iPhone 18 Pro/Pro Max during the same period is 20 to 22 million units, which is sufficient to meet the official launch inventory demand. Due to the extremely low supply in the third quarter, Kuo predicts that a September launch is unlikely. If it does launch, consumers may have to wait 4 to 6 weeks or even longer, potentially having to wait until December to purchase it. He even predicted that the device might be subject to hype upon launch, with premiums reaching 50% to 100% of its retail price.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Phone", "Supply Chain Analysis", "Supply Shortage", "iPhone 18 Pro"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/05/iphone-fold-low-supply-at-launch-delayed-release", lang: "EN" }
    ]
  },
  {
    id: "20260705-011",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 預告下一代智慧家庭顯示器概念，預計將延續 Google Home Speaker 生態系",
    summary: "本文為 9to5Google 的文章，探討 Google 未來智慧家庭產品的發展趨勢。文章指出，繼 Google Home Speaker 之後，市場預計會推出「Google Home Display」的下一代產品。雖然原文未提供具體的技術細節、CVE 編號或安全漏洞資訊，但從內容來看，這是一個關於 Google 智慧家居產品線的產品概念預告。該產品將延續 Google Home 生態系統的發展，預計會整合更多顯示介面與智慧功能，為用戶提供更全面的智慧生活體驗。由於原文僅為概念性報導，目前無法提供修補建議或實務安全影響評估。",
    tags: ["Google", "智慧家庭", "Google Home", "產品概念", "IoT"],
    title_en: "Google previews next-generation smart home display concept, expected to continue the Google Home Speaker ecosystem",
    summary_en: "This article is based on a 9to5Google report, exploring the future development trends of Google's smart home products. The article points out that following the Google Home Speaker, the market is expected to launch the next generation of 'Google Home Display' products. Although the original text does not provide specific technical details, CVE IDs, or security vulnerability information, the content indicates that this is a product concept preview regarding Google's smart home product line. The product will continue the development of the Google Home ecosystem, expected to integrate more display interfaces and smart functions, providing users with a more comprehensive smart living experience. Since the original text is only a conceptual report, no patch recommendations or practical security impact assessments can be provided at this time.",
    tags_en: ["Google", "Smart Home", "Google Home", "Product Concept", "IoT"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/07/05/google-home-display-ideas", lang: "EN" }
    ]
  },
  {
    id: "20260705-012",
    trackers: ["os"],
    category: "重點關注",
    title: "美國250週年紀念時間膠囊內容：預測iPhone 17 Pro Max在2276年是否仍能運作",
    summary: "本文為一篇非資安相關的趣味文章，描述美國為紀念250週年而埋設一個時間膠囊。其中包含了一部Cosmic Orange版本的iPhone 17 Pro Max。該時間膠囊預計在2276年（美國建國500週年）開啟。文章討論了這部手機在跨越兩百五十年的時間後，其電池和技術是否還能正常運作的可能性。雖然無法提供技術細節或修補建議，但從資安角度來看，這類跨時代的電子設備，其硬體元件（如電池）和軟體系統（如作業系統）在極長時間後維持功能性，面臨的挑戰極大，遠超現代技術預測範圍。",
    tags: ["iPhone 17 Pro Max", "時間膠囊", "Apple", "未來科技", "跨平台趨勢"],
    title_en: "Contents of the US 250th Anniversary Time Capsule: Predicting if the iPhone 17 Pro Max Will Still Work in 2276",
    summary_en: "This article is a non-cybersecurity related piece of fun content describing the US burying a time capsule to commemorate its 250th anniversary. It contains a Cosmic Orange version of the iPhone 17 Pro Max. The time capsule is scheduled to open in 2276 (the 500th anniversary of US independence). The article discusses the possibility of this phone's battery and technology still functioning after crossing two hundred and fifty years. While it cannot provide technical details or patching suggestions, from a cybersecurity perspective, the challenges faced by such cross-era electronic devices—specifically maintaining the functionality of hardware components (like batteries) and software systems (like operating systems) over extremely long periods—are immense, far exceeding the scope of modern technological prediction.",
    tags_en: ["iPhone 17 Pro Max", "Time Capsule", "Apple", "Future Technology", "Cross-platform Trends"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/04/iphone-17-pro-max-included-in-america-250-time-capsule", lang: "EN" }
    ]
  },
  {
    id: "20260705-013",
    trackers: ["os"],
    category: "重點關注",
    title: "DXVK 3.0.1 發布：修復 Direct3D 渲染錯誤與穩定性問題，提升 Linux 遊戲兼容性",
    summary: "DXVK 3.0.1 版本已發布，作為 Valve Steam Play (Proton) 的重要組件，用於在 Linux 環境下運行 Direct3D Windows 遊戲。本次更新主要著重於修復遊戲兼容性與穩定性問題。技術上，新版本在所有桌上型 GPU 上禁用了次級命令緩衝區（secondary command buffer）的使用，以解決先前導致難以偵錯的渲染問題和 GPU 懸掛現象，儘管這可能會對部分遊戲的效能產生輕微影響。此外，DXVK 3.0.1 修復了多款 Direct3D 9 遊戲的渲染回歸（rendering regression），並改善了 GPU 輸出流（stream output）周圍的同步，同時修復了多個可能的崩潰和 Windows 特有的處理問題。本次更新包含針對《Empire Earth 2》、《Fallout 3》等多款遊戲的特定修復。使用者應透過 GitHub 下載最新版本以獲得最佳的遊戲體驗與系統穩定性。",
    tags: ["DXVK", "Proton", "Linux", "Direct3D", "遊戲兼容性", "Valve", "Steam"],
    title_en: "DXVK 3.0.1 Released: Fixes Direct3D Rendering Errors and Stability Issues, Enhancing Linux Gaming Compatibility",
    summary_en: "DXVK 3.0.1 has been released, a critical component of Valve Steam Play (Proton) used to run Direct3D Windows games in Linux environments. This update primarily focuses on fixing game compatibility and stability issues. Technically, the new version disables the use of secondary command buffers across all desktop GPUs to resolve previously difficult-to-debug rendering issues and GPU hang phenomena, although this may cause a slight performance impact on some games. Furthermore, DXVK 3.0.1 fixes rendering regressions in multiple Direct3D 9 games and improves synchronization around stream output, while also resolving several potential crashes and Windows-specific handling issues. This update includes specific fixes for games such as *Empire Earth 2* and *Fallout 3*. Users should download the latest version from GitHub to achieve the best gaming experience and system stability.",
    tags_en: ["DXVK", "Proton", "Linux", "Direct3D", "Game Compatibility", "Valve", "Steam"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/DXVK-3.0.1-Released", lang: "EN" }
    ]
  },
  {
    id: "20260705-014",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS「開源Windows」平台成功運行《半衰期2》，邁向現代Windows系統相容性",
    summary: "ReactOS是一個旨在實現開源Windows操作系統的專案。該平台透過實現Windows軟體、遊戲和驅動程式的二進位相容性，持續展示其兼容性能力。近期，ReactOS的夜間建置版本成功運行了Valve的《半衰期2》（Half-Life 2）遊戲，證明了其在運行較新遊戲方面的進展。測試過程使用了GeForce GTX 960顯示卡，並安裝了NVIDIA 368.61等舊版Windows驅動程式，同時也整合了Creative Sound Blaster Audigy的Windows驅動。此外，ReactOS本週還引入了第一個Windows NT6系統呼叫，這被視為其邁向支援Windows Vista及更新系統相容性的重要一步。這顯示了ReactOS在持續提升與現代Windows生態系統兼容性方面的開發進度。",
    tags: ["ReactOS", "開源Windows", "Half-Life 2", "Windows NT6", "二進位相容性", "操作系統"],
    title_en: "ReactOS 'Open-Source Windows' Platform Successfully Runs Half-Life 2, Advancing Towards Modern Windows System Compatibility",
    summary_en: "ReactOS is a project aimed at creating an open-source Windows operating system. The platform continuously demonstrates its compatibility capabilities by achieving binary compatibility with Windows software, games, and drivers. Recently, a nightly build of ReactOS successfully ran Valve's Half-Life 2 game, proving its progress in running newer games. The test utilized a GeForce GTX 960 graphics card and installed older Windows drivers, such as NVIDIA 368.61, while also integrating Windows drivers for the Creative Sound Blaster Audigy. Furthermore, ReactOS introduced its first Windows NT6 system call this week, which is considered a significant step toward supporting Windows Vista and newer system compatibility. This demonstrates ReactOS' ongoing development progress in enhancing compatibility with the modern Windows ecosystem.",
    tags_en: ["ReactOS", "Open-Source Windows", "Half-Life 2", "Windows NT6", "Binary Compatibility", "Operating System"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Half-Life-2-ReactOS", lang: "EN" }
    ]
  },
  {
    id: "20260705-015",
    trackers: ["os"],
    category: "重點關注",
    title: "Link to Windows Android App 新增「移除 PC」功能，改善用戶體驗與資料清理",
    summary: "本文介紹 Link to Windows Android 應用程式在 Beta 版本中新增了「移除 PC」功能，讓用戶可以直接在手機端刪除已連結的電腦設備。過去，即使透過刪除虛擬機或從 Microsoft 帳號移除設備，該 PC 的名稱仍可能殘留在「已連結 PC」清單中，造成用戶困擾。此新功能允許用戶在設定頁面找到該設備，點擊「移除 PC」即可永久刪除該設備的紀錄，且此操作會同步更新到 Microsoft 帳號的設備清單。此功能預計會逐步推廣至穩定版，大幅提升跨裝置連動體驗的用戶便利性。修補建議是 Beta 測試用戶留意更新，等待功能穩定版發布。",
    tags: ["Link to Windows", "Android", "Microsoft Account", "Phone Link", "跨平台", "用戶體驗"],
    title_en: "Link to Windows Android App Adds 'Remove PC' Function to Improve User Experience and Data Cleanup",
    summary_en: "This article introduces a new 'Remove PC' function in the Link to Windows Android application's Beta version, allowing users to directly delete connected computer devices from their mobile device. Previously, even after deleting a virtual machine or removing the device from the Microsoft account, the PC's name might remain in the 'Connected PCs' list, causing user inconvenience. This new function allows users to find the device in the settings page and click 'Remove PC' to permanently delete the device record. Furthermore, this action will synchronize the update to the device list within the Microsoft account. This feature is expected to be gradually rolled out to the stable version, significantly enhancing the user convenience of cross-device connectivity. The patch recommendation is for Beta test users to monitor for updates and await the stable version release.",
    tags_en: ["Link to Windows", "Android", "Microsoft Account", "Phone Link", "Cross-platform", "User Experience"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/06/microsofts-link-to-windows-removes-ghost-pcs-from-your-android-phone-ahead-of-its-next-big-update", lang: "EN" }
    ]
  }
];
