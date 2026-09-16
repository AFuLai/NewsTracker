// data-20260916.js — 2026-09-16
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-09-16"] = [
  {
    id: "20260916-12008",
    trackers: ["security"],
    category: "重大事件",
    title: "VPN服務商 Surfshark 測試伺服器遭外洩，公司確認未影響用戶資料與服務",
    summary: "資安服務商 Surfshark 於 9 月 9 日揭露，其內部用於工程測試的伺服器因配置錯誤意外暴露於網際網路，遭到攻擊者存取。Surfshark 隨即從監控系統於 8 月 31 日發現可疑活動，並於 9 月 2 日確認入侵並完成隔離。公司調查指出，攻擊者存取了部分系統二進位檔、服務內部配置，以及一台作為代理伺服器的隔離 VPS。雖然公司發現部分內部建置相關憑證曾被提交到程式碼歷史紀錄中，但 Surfshark 強調，該測試伺服器與提供 VPN 服務的正式環境是分離的，且未儲存或處理任何用戶資料，因此用戶的 VPN 服務、流量或瀏覽活動資訊並未受到影響。為加強安全，Surfshark 已全面輪替或撤銷相關憑證，並強化了測試環境的存取控制、監控及防護，同時將進行獨立安全稽核。",
    tags: ["Surfshark", "測試伺服器", "配置錯誤", "資安事件", "憑證輪替", "VPN"],
    title_en: "VPN Provider Surfshark's Test Server Exposed, Company Confirms No Impact on User Data or Services",
    summary_en: "Cybersecurity service provider Surfshark disclosed on September 9 that an internal server used for engineering testing was accidentally exposed to the internet due to a misconfiguration, allowing unauthorized access by attackers. Surfshark detected suspicious activity via its monitoring system on August 31 and confirmed the intrusion and completed isolation on September 2. The company's investigation found that attackers accessed partial system binaries, internal service configurations, and an isolated VPS used as a proxy server. Although the company found that some internal setup credentials had been committed to the code history, Surfshark emphasized that the test server is separate from the official VPN service environment and does not store or process any user data. Therefore, users' VPN services, traffic, or browsing activity information were not affected. To enhance security, Surfshark has fully rotated or revoked the relevant credentials and strengthened access control, monitoring, and protection for the test environment, while also undergoing an independent security audit.",
    tags_en: ["Surfshark", "Test Server", "Misconfiguration", "Cybersecurity Incident", "Credential Rotation", "VPN"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178978", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12009",
    trackers: ["os", "security"],
    category: "重大事件",
    title: "HBO Max Reddit帳號遭挾持：資安公司揭露ClickFix社交工程攻擊，散播跨平台惡意軟體",
    summary: "資安公司Hudson Rock與Adam Networks聯手調查，發現一起利用ClickFix社交工程手法的大規模攻擊活動。攻擊者挾持HBO Max在Reddit的社群帳號，在短時間內投放大量惡意廣告，其目標並非僅限於HBO Max用戶。該活動疑似屬於更廣泛的跨平台攻擊PasteSwitch，會根據受害者作業系統和誘餌內容提供不同的惡意酬載。針對macOS用戶，攻擊者散播了MacSync、AMOS helper等竊資軟體；而針對Windows用戶，則利用PowerShell與HTA檔發動InstallFix變形攻擊，植入竊資軟體Amatera並在記憶體中執行。這類攻擊利用社群媒體帳號進行誘餌，實質威脅包含竊取資料、執行惡意程式，建議用戶提高警覺，並對來自社群媒體的應用程式下載保持高度懷疑。",
    tags: ["HBO Max", "Reddit", "ClickFix", "社交工程", "跨平台攻擊", "竊資軟體", "Windows", "macOS"],
    title_en: "HBO Max Reddit Account Hijacked: Cybersecurity Firms Uncover ClickFix Social Engineering Attack Spreading Cross-Platform Malware",
    summary_en: "Cybersecurity firms Hudson Rock and Adam Networks collaborated to investigate a large-scale attack campaign utilizing the ClickFix social engineering technique. The attackers hijacked the HBO Max community account on Reddit, rapidly deploying a high volume of malicious advertisements. The target was not limited solely to HBO Max users. This activity is suspected to be part of a broader cross-platform attack named PasteSwitch, which delivers different malicious payloads based on the victim's operating system and the bait content. For macOS users, the attackers distributed spyware such as MacSync and AMOS helper; while for Windows users, they launched an InstallFix polymorphic attack using PowerShell and HTA files, implanting the spyware Amatera and executing it in memory. These types of attacks use social media accounts as bait, posing real threats including data theft and malicious program execution. Users are advised to increase their vigilance and maintain a high degree of suspicion regarding application downloads originating from social media.",
    tags_en: ["HBO Max", "Reddit", "ClickFix", "Social Engineering", "Cross-Platform Attack", "Spyware", "Windows", "macOS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178977", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12014",
    trackers: ["security"],
    category: "重大事件",
    title: "長榮集團旗下兩公司遭入侵：長榮航空與長榮航太啟動資安應變",
    summary: "長榮集團旗下的長榮航空與長榮航太於9月15日晚間，透過股市公開資訊觀測站發布資安重訊，宣布其內部網路環境遭到不明人士入侵。長榮航空指出，入侵行為來自惡意IP位址，導致公司取得員工姓名與公務聯絡資訊，但評估後認為對所有業務營運並無影響。而長榮航太則偵測到部分內部資訊系統遭到攻擊，已立即對受影響設備進行隔離，並確認核心資訊系統及營運業務運作正常，且未發現客戶或第三方敏感個資外洩。兩公司均已啟動資安應變機制，並持續監控，以應對此次資安事件。",
    tags: ["長榮航空", "長榮航太", "資安事件", "內部網路入侵", "資安應變"],
    title_en: "Two Evergreen Group Companies Compromised: Evergreen Airlines and Evergreen Aerospace Initiate Security Incident Response",
    summary_en: "On the evening of September 15, Evergreen Airlines and Evergreen Aerospace, both subsidiaries of the Evergreen Group, issued a security alert via the stock exchange's public information observation station, announcing that their internal network environments had been compromised by unknown individuals. Evergreen Airlines stated that the intrusion originated from malicious IP addresses, resulting in the acquisition of employee names and official contact information, but assessed that this poses no impact on all business operations. Evergreen Aerospace detected an attack on some internal information systems, immediately isolated the affected equipment, and confirmed that core information systems and operational business functions remain normal, with no discovery of leaked customer or third-party sensitive personal data. Both companies have activated their security incident response mechanisms and are continuing to monitor the situation to address the security event.",
    tags_en: ["Evergreen Airlines", "Evergreen Aerospace", "Security Incident", "Internal Network Intrusion", "Security Incident Response"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178969", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12254",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.4 核心預計整合 AVX-512 優化的 xor_gen()，大幅提升軟體 RAID 效能",
    summary: "Linux 核心社群正在為 Linux 軟體 RAID (Software RAID) 程式碼整合一項重大效能提升。此更新主要針對 xor_gen() 函式，透過利用 AVX-512 指令集進行優化。該功能用於生成和驗證奇偶校驗區塊（例如 RAID5 和 RAID6），預計將為使用 AMD Zen 4 或更新、或具備 AVX-512 的 Intel 伺服器 CPU 的系統帶來顯著的效能增益。Google 的 Eric Biggers 領導了此項工作，持續為 Linux 密碼學程式碼帶來性能提升。相關補丁已透過 TIP 的 x86/fpu Git 分支排隊，預計將在十月下半期的 Linux 7.4 合併窗口中推出。此更新屬於核心元件的性能優化，對於伺服器和需要處理大量 RAID 數據的環境具有實務意義。",
    tags: ["Linux 7.4", "AVX-512", "xor_gen()", "軟體 RAID", "Linux 核心", "AMD Zen 4"],
    title_en: "Linux 7.4 Kernel Expected to Integrate AVX-512 Optimized xor_gen() for Significant Software RAID Performance Boost",
    summary_en: "The Linux kernel community is integrating a major performance enhancement into the Software RAID code. This update primarily targets the xor_gen() function by utilizing the AVX-512 instruction set for optimization. This function is used for generating and validating parity blocks (such as for RAID5 and RAID6), and is expected to bring significant performance gains to systems running on AMD Zen 4 or newer, or Intel server CPUs equipped with AVX-512. Google's Eric Biggers led this effort, continuing to bring performance improvements to Linux cryptographic code. The relevant patch has been queued through the TIP's x86/fpu Git branch and is expected to be released in the Linux 7.4 merge window in the second half of October. This update represents a performance optimization of a core component, holding practical significance for servers and environments that handle large volumes of RAID data.",
    tags_en: ["Linux 7.4", "AVX-512", "xor_gen()", "Software RAID", "Linux Kernel", "AMD Zen 4"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.4-Land-AVX-512-xor-gen", lang: "EN" }
    ]
  },
  {
    id: "20260916-12019",
    trackers: ["eu_cra", "security"],
    category: "法規與標準",
    title: "歐盟網路韌性法案（CRA）生效：製造商需在 24 小時內通報產品漏洞",
    summary: "歐盟網路韌性法案（Cyber Resilience Act, CRA）針對產品製造商的漏洞與資安事件通報義務已於 9 月 11 日生效。根據法案規定，製造商若發現產品存在遭積極利用的漏洞，必須在 24 小時內提出初步預警，並在 72 小時內提交進一步通報。若漏洞涉及第三方開源元件，製造商也需聯繫相關專案釐清影響。OpenSSF 指出，一般開源專案維護者與 CRA 定義的開源軟體管理者（open-source software steward）角色不同，後者的通報義務規定自 2027 年 12 月 11 日起適用。為應對此法規，OpenSSF 建議開源專案應建立或更新 SECURITY.md 檔案，並維持有效的資安聯絡資訊。然而，調查顯示，許多製造商在建立軟體物料清單（SBOM）和定期評估開源元件安全管理實務方面仍有不足，這將影響其在發現漏洞後快速掌握上游元件並應對通報義務。",
    tags: ["Cyber Resilience Act", "CRA", "OpenSSF", "SBOM", "開源元件", "資安通報"],
    title_en: "EU Cyber Resilience Act (CRA) Takes Effect: Manufacturers Must Report Product Vulnerabilities Within 24 Hours",
    summary_en: "The EU Cyber Resilience Act (CRA) reporting obligations for product manufacturers regarding vulnerabilities and security incidents took effect on September 11. According to the Act, if a manufacturer discovers a vulnerability in a product that is actively being exploited, they must issue a preliminary alert within 24 hours and submit a detailed report within 72 hours. If the vulnerability involves third-party open-source components, the manufacturer must also contact the relevant project to clarify the impact. OpenSSF points out that general open-source project maintainers differ from the role of open-source software steward defined by the CRA; the reporting obligations for the latter apply starting December 11, 2027. To comply with this regulation, OpenSSF recommends that open-source projects establish or update a SECURITY.md file and maintain valid security contact information. However, investigations show that many manufacturers still lack sufficient practices in creating Software Bill of Materials (SBOM) and regularly assessing open-source component security management, which will affect their ability to quickly grasp upstream components and meet reporting obligations after discovering a vulnerability.",
    tags_en: ["Cyber Resilience Act", "CRA", "OpenSSF", "SBOM", "open-source components", "security reporting"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178925", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12326",
    trackers: ["os"],
    category: "Windows",
    title: "微軟設計主管證實 Windows 11 性能升級，預計秋季推出更多優化",
    summary: "微軟設計與研究主管 Marcus Ash 向使用者發信，指出 Windows 11 在早期測試版（Insider builds）中已顯著提升了響應速度和整體性能。雖然微軟尚未公開具體的基準測試數據（benchmarks）或性能提升數字，但他們強調作業系統正在變得更快、更好。具體優化包括 File Explorer 加載速度加快、右鍵選單（context menu）更簡潔，以及可移動的任務欄和可調整大小的開始選單等功能已開始逐步推出。微軟表示，他們將持續透過更輕量化的分享會，收集早期測試者的回饋，並預計在今年秋季推出更多系統優化和設計概念。這些改動主要對 Windows Insiders 適用，但微軟正逐步將這些改善推廣至更廣泛的使用者群體。",
    tags: ["Windows 11", "File Explorer", "Marcus Ash", "Insider builds", "系統優化", "Windows 11"],
    title_en: "Microsoft Design Lead Confirms Windows 11 Performance Upgrades, More Optimizations Expected This Autumn",
    summary_en: "Microsoft Design and Research Lead Marcus Ash informed users that Windows 11 has shown significant improvements in responsiveness and overall performance in early testing builds (Insider builds). Although Microsoft has not yet released specific benchmark data or performance metrics, they emphasized that the operating system is becoming faster and better. Specific optimizations include faster File Explorer loading, a more streamlined context menu, and features like movable taskbars and resizable Start menus, which are beginning to roll out gradually. Microsoft stated that they will continue to gather feedback from early testers through more lightweight feedback sessions and anticipate rolling out further system optimizations and design concepts this autumn. While these changes are primarily for Windows Insiders, Microsoft is gradually extending these improvements to a broader user base.",
    tags_en: ["Windows 11", "File Explorer", "Marcus Ash", "Insider builds", "System Optimization", "Windows 11"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/16/microsofts-design-lead-says-users-can-feel-windows-11-speeding-up-confirms-major-improvements-this-fall", lang: "EN" }
    ]
  },
  {
    id: "20260916-11999",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "分析指出北韓APT組織利用Linux工具組滲透南韓媒體與汽車產業，目標竊取關鍵資訊",
    summary: "資安公司 Rapid7 分析指出，一個疑似來自北韓的進階持續性威脅（APT）組織，已利用一個未公開的 Linux 滲透工具組（代號「TED」），對南韓的媒體和汽車產業進行了長期間諜活動。攻擊者透過滲透流行的開源負載平衡器軟體 HAProxy，在設備中植入難以偵測的工具組，從而獲取了設備的完整通訊存取權。攻擊者利用此位置的優勢，能夠直接存取已解密的明文通訊，並進行憑證收集、資料竊取、以及修改日誌檔案以掩蓋蹤跡。研究團隊指出，這種攻擊模式代表了北韓APT組織的進化趨勢，即從使用原生工具轉向將惡意功能嵌入合法軟體或生產基礎設施的運行時，實現更深層次的持久化。受影響的目標包括媒體（可能竊取未公開報導和記者通訊）和汽車產業（可能竊取製造業智慧財產）。Rapid7 警告，企業應對負載平衡器和網路設備進行嚴格的完整性檢查，包括程式庫和編譯二進位檔的稽核，並比對設備和外部的日誌記錄。",
    tags: ["North Korean APT", "HAProxy", "Linux", "TED", "南韓", "負載平衡器", "間諜活動"],
    title_en: "Analysis Reveals North Korean APT Group Used Linux Toolkit to Infiltrate South Korean Media and Automotive Industries to Steal Critical Information",
    summary_en: "Security firm Rapid7 analyzed that a suspected North Korean Advanced Persistent Threat (APT) group has been conducting long-term espionage against South Korea's media and automotive sectors using an undisclosed Linux penetration toolkit (codenamed \"TED\"). The attackers infiltrated the popular open-source load balancer software HAProxy, implanting a difficult-to-detect toolkit within the devices, thereby gaining complete communication access to the equipment. Leveraging this position, the attackers can directly access decrypted plaintext communications, perform credential harvesting, data theft, and modify log files to cover their tracks. The research team noted that this attack pattern represents an evolution in North Korean APT tactics: shifting from using native tools to embedding malicious functionality within legitimate software or production infrastructure at runtime, achieving deeper persistence. Affected targets include media (potentially stealing unpublished reports and journalistic communiques) and the automotive industry (potentially stealing manufacturing intellectual property). Rapid7 warns that enterprises must conduct rigorous integrity checks on load balancers and network equipment, including auditing libraries and compiled binaries, and cross-referencing device and external log records.",
    tags_en: ["North Korean APT", "HAProxy", "Linux", "TED", "South Korea", "Load Balancer", "Espionage"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/cyberattacks-data-breaches/cyber-south-korean-media-automotive", lang: "EN" }
    ]
  },
  {
    id: "20260916-12011",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Mozilla Firefox 156 版修補 73 個漏洞，高風險漏洞集中於圖形與記憶體管理",
    summary: "Mozilla於9月15日發布Firefox瀏覽器156版，修補了共計73個安全漏洞，其中包含29個高風險漏洞。本次修補的漏洞類型主要集中在圖形相關元件，如Graphics與Graphics: CanvasWebGL，共涉及15個漏洞。此外，記憶體管理問題是主要漏洞類型，包括邊界條件錯誤（Incorrect boundary conditions）和記憶體已釋放卻仍被使用（UAF）問題，分別佔據了最多的漏洞數量。Mozilla指出，他們已調整漏洞發布機制，不再將多個記憶體安全漏洞合併為單一CVE，而是針對每個個別問題進行獨立發布。使用者應儘快更新至Firefox 156版，以修補這些潛在的記憶體安全和圖形渲染相關的漏洞。",
    tags: ["Mozilla", "Firefox", "CVE", "記憶體安全", "UAF", "瀏覽器漏洞"],
    title_en: "Mozilla Firefox 156 Patches 73 Vulnerabilities, High-Risk Flaws Concentrated in Graphics and Memory Management",
    summary_en: "Mozilla released Firefox browser version 156 on September 15, patching a total of 73 security vulnerabilities, including 29 high-risk flaws. The types of vulnerabilities patched this time primarily focus on graphics-related components, such as Graphics and Graphics: CanvasWebGL, involving 15 vulnerabilities. Furthermore, memory management issues constitute the main vulnerability type, including incorrect boundary conditions and Use-After-Free (UAF) issues, which account for the largest number of vulnerabilities, respectively. Mozilla noted that they have adjusted their vulnerability disclosure mechanism, no longer combining multiple memory safety vulnerabilities into a single CVE, but rather issuing independent reports for each individual issue. Users are advised to update to Firefox 156 as soon as possible to patch these potential memory safety and graphics rendering vulnerabilities.",
    tags_en: ["Mozilla", "Firefox", "CVE", "Memory Safety", "UAF", "Browser Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178975", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12012",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "WooCommerce外掛Wholesale Lead Capture漏洞CVE-2026-27540遭積極利用，Wordfence呼籲緊急升級修補",
    summary: "資安廠商Wordfence警告，專為電商平臺WooCommerce設計的付費外掛程式Wholesale Lead Capture，存在重大漏洞CVE-2026-27540。此漏洞屬於任意檔案上傳類型，CVSS嚴重性評分為9.8分，允許未經身分驗證的攻擊者上傳PHP後門程式，進而達到遠端程式碼執行（RCE）的目的。攻擊者可透過向AJAX活動提出請求，攜帶偽造參數和惡意檔案，上傳Webshell，使攻擊者能回報主機資訊並在受害網站寫入更多惡意檔案。Wordfence指出，自漏洞公開後，已擋下超過10萬次利用嘗試，攻擊活動自6月初開始，並在8月底達到高峰，當時攻擊者一天內嘗試利用該弱點超過4萬次。Wordfence建議網站管理者應立即將Wholesale Lead Capture升級至2.0.3.2以上版本以進行保護。",
    tags: ["WooCommerce", "Wholesale Lead Capture", "CVE-2026-27540", "RCE", "PHP", "電商平臺"],
    title_en: "WooCommerce Plugin Wholesale Lead Capture Vulnerability CVE-2026-27540 Actively Exploited; Wordfence Urges Immediate Update",
    summary_en: "Security vendor Wordfence warns that the paid plugin Wholesale Lead Capture, designed for the e-commerce platform WooCommerce, contains a critical vulnerability, CVE-2026-27540. This vulnerability is an arbitrary file upload type, rated 9.8 on the CVSS severity scale. It allows unauthenticated attackers to upload a PHP backdoor, achieving Remote Code Execution (RCE). Attackers can submit requests to an AJAX action, carrying forged parameters and malicious files, to upload a Webshell, enabling them to exfiltrate host information and write more malicious files to the compromised website. Wordfence noted that since the vulnerability was disclosed, they have blocked over 100,000 exploitation attempts. Attack activity began in early June and peaked at the end of August, when attackers attempted to exploit the weakness over 40,000 times in a single day. Wordfence advises site administrators to immediately upgrade Wholesale Lead Capture to version 2.0.3.2 or higher for protection.",
    tags_en: ["WooCommerce", "Wholesale Lead Capture", "CVE-2026-27540", "RCE", "PHP", "e-commerce platform"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178972", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12013",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Google Chrome 瀏覽器更新修補 42 個資安漏洞，包含多個記憶體安全與競爭條件問題",
    summary: "Google於9月15日發布 Chrome 瀏覽器新版本，包含 Windows、Linux、Mac 及 Android 等多個平臺的穩定版更新。本次更新共修補了 42 個資安漏洞，其中包括三個重大漏洞與 28 個高風險等級漏洞。從漏洞類型來看，修補內容主要集中在記憶體安全問題，例如已釋放卻仍被使用（UAF）問題佔了 12 個漏洞，加上其他越界讀寫、整數溢位及未初始化資源等記憶體相關問題，合計佔了超過 40% 的漏洞。此外，條件競爭（Race condition）問題也共修補了 6 個漏洞。這些漏洞修補涵蓋了 Core、Extensions、Skia、ServiceWorker、Input、V8、Compositing 與 ANGLE 等多個核心元件，提醒使用者應及時更新瀏覽器以防範潛在的資安風險。",
    tags: ["Google Chrome", "資安漏洞", "記憶體安全", "UAF", "條件競爭", "瀏覽器"],
    title_en: "Google Chrome Browser Update Patches 42 Security Vulnerabilities, Including Multiple Memory Safety and Race Condition Issues",
    summary_en: "Google released a new version of the Chrome browser on September 15, including stable updates for multiple platforms such as Windows, Linux, Mac, and Android. This update patches a total of 42 security vulnerabilities, including three critical vulnerabilities and 28 high-risk vulnerabilities. In terms of vulnerability types, the patches primarily focus on memory safety issues. For example, Use-After-Free (UAF) issues account for 12 vulnerabilities, and combined with other memory-related problems such as out-of-bounds read/write, integer overflow, and uninitialized resources, they account for over 40% of the total vulnerabilities. Additionally, six vulnerabilities related to race conditions were patched. These vulnerability patches cover multiple core components, including Core, Extensions, Skia, ServiceWorker, Input, V8, Compositing, and ANGLE, reminding users to update their browser promptly to prevent potential security risks.",
    tags_en: ["Google Chrome", "Security Vulnerability", "Memory Safety", "UAF", "Race Condition", "Browser"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178971", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12016",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "LiteSpeed Web Server Enterprise 存在權限提升漏洞，共享主機低權限使用者恐取得 Root 權限",
    summary: "網頁伺服器系統開發商 LiteSpeed 的 LiteSpeed Web Server Enterprise 存在一項重大權限提升漏洞。此漏洞主要影響 6.3.7 版本之前的舊版系統。根據安全公告，在共享主機環境中，低權限的網站使用者可能利用此漏洞繞過帳號隔離機制（包括 CageFS），進而取得伺服器 root 權限。一旦成功，攻擊者可以存取或竄改同一實體伺服器上其他網站的資料，甚至控制伺服器本身。網站與伺服器管理平臺業者 cPanel 已發布安全公告，呼籲所有使用者應立即升級至 6.3.7 或更高版本以修補此漏洞。LiteSpeed 在 9 月 11 日發布 6.3.7 版本，雖然修補了多項安全問題，但官方尚未明確指出哪一項修補與 cPanel 所揭露的權限提升漏洞相關，因此建議用戶應遵循 cPanel 的升級指引。",
    tags: ["LiteSpeed Web Server Enterprise", "權限提升漏洞", "共享主機", "cPanel", "root 權限", "CVE"],
    title_en: "LiteSpeed Web Server Enterprise has Privilege Escalation Vulnerability, Allowing Low-Privilege Shared Host Users to Obtain Root Access",
    summary_en: "LiteSpeed, a web server system developer, has found a critical privilege escalation vulnerability in its LiteSpeed Web Server Enterprise. This vulnerability primarily affects older systems running versions prior to 6.3.7. According to the security advisory, in a shared hosting environment, low-privilege website users may exploit this vulnerability to bypass account isolation mechanisms (including CageFS), thereby obtaining root server privileges. If successful, an attacker could access or modify data belonging to other websites on the same physical server, or even gain control of the server itself. The website and server management platform provider, cPanel, has issued a security advisory, urging all users to immediately upgrade to version 6.3.7 or higher to patch the vulnerability. LiteSpeed released version 6.3.7 on September 11th. Although this version patched multiple security issues, the official documentation has not explicitly stated which patch relates to the privilege escalation vulnerability disclosed by cPanel. Therefore, users are advised to follow cPanel's upgrade guidelines.",
    tags_en: ["LiteSpeed Web Server Enterprise", "Privilege Escalation Vulnerability", "Shared Hosting", "cPanel", "root access", "CVE"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178968", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12018",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟9月安全更新致遠端桌面服務異常：多版本Windows用戶需安裝臨時修補程式",
    summary: "微軟於9月發布的Windows安全性更新，導致遠端桌面服務（Remote Desktop Services, RDS）出現異常，可能使部分Windows裝置無法成功連線或登入。微軟已於9月14日發布臨時更新（Out-of-band update, OOB）進行修復。受影響範圍廣泛，涵蓋Windows 11、Windows 10以及多個Windows Server版本，包括Windows 11 26H1、25H2、24H2、23H2，以及Windows 10 22H2、21H2等。此外，該更新也可能影響使用Host Compute Service（HCS）管理虛擬機器，或透過Plan9共用Windows主機資料夾的應用程式，例如WSL及Claude Cowork。未安裝修補的Hyper-V虛擬機器則不受影響。IT管理人員應根據所使用的Windows版本，確認並安裝對應的帶外更新。",
    tags: ["微軟", "Windows", "Remote Desktop Services", "RDS", "Out-of-band update", "Windows Server"],
    title_en: "Microsoft September Security Update Causes Remote Desktop Services Anomaly: Multiple Windows Users Must Install Temporary Patch",
    summary_en: "A Windows security update released by Microsoft in September caused anomalies in Remote Desktop Services (RDS), potentially preventing some Windows devices from connecting or logging in successfully. Microsoft subsequently released an out-of-band update (OOB) on September 14th to fix the issue. The affected scope is wide, covering Windows 11, Windows 10, and multiple Windows Server versions, including Windows 11 26H1, 25H2, 24H2, 23H2, and Windows 10 22H2, 21H2. Furthermore, the update may impact applications that use Host Compute Service (HCS) to manage virtual machines, or applications that share Windows host folders via Plan9, such as WSL and Claude Cowork. Hyper-V virtual machines that have not installed the patch are unaffected. IT administrators should confirm and install the corresponding out-of-band update based on their specific Windows version.",
    tags_en: ["Microsoft", "Windows", "Remote Desktop Services", "RDS", "Out-of-band update", "Windows Server"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178965", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12076",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "gpgsm 程式碼潛在漏洞分析：RCE 討論與編譯器警告的實務應用",
    summary: "本郵件討論了 gpgsm 程式在特定使用情境下可能存在的遠端程式碼執行（RCE）漏洞。討論指出，當使用 `gpgsm --debug all --import bad.cert` 且 `bad.cert` 檔案內容不當時，理論上可能導致問題。然而，發文者指出，僅使用標準的 Git 儲存庫憑證無法重現超過 segv（Segmentation Fault）的錯誤，這暗示了漏洞的複雜性或需要特定環境（如客製化編譯）才能觸發。技術層面，討論聚焦於 `libgcrypt` 的一個修復點，涉及將 `log_debug` 替換為 `log_printhex`，以避免因使用 DER 格式資料作為 `printf` 格式字串而產生的安全問題。文章也延伸討論了編譯器警告（如 `-Wformat-nonliteral`）在軟體開發中的重要性，並建議發行版不應盲目使用 `-Werror`，應針對特定安全問題進行例外處理，以確保軟體品質與安全性。",
    tags: ["gpgsm", "RCE", "libgcrypt", "CVE", "編譯器警告", "OpenSSL"],
    title_en: "Analysis of Potential Vulnerabilities in gpgsm Code: RCE Discussion and Practical Application of Compiler Warnings",
    summary_en: "This email discusses a potential Remote Code Execution (RCE) vulnerability in the gpgsm program under specific usage scenarios. The discussion points out that using `gpgsm --debug all --import bad.cert` with improperly formatted content in the `bad.cert` file could theoretically lead to issues. However, the author notes that merely using standard Git repository credentials could not reproduce an error exceeding a segv (Segmentation Fault), suggesting the vulnerability's complexity or the need for a specific environment (such as custom compilation) to trigger it. On a technical level, the discussion focuses on a patch point in `libgcrypt`, involving replacing `log_debug` with `log_printhex` to prevent security issues arising from using DER formatted data as a `printf` format string. The article also extends the discussion to the importance of compiler warnings (such as `-Wformat-nonliteral`) in software development, advising that distributions should not blindly use `-Werror`, but rather handle exceptions for specific security issues to ensure both software quality and security.",
    tags_en: ["gpgsm", "RCE", "libgcrypt", "CVE", "Compiler Warnings", "OpenSSL"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/16/2", lang: "EN" }
    ]
  },
  {
    id: "20260916-12077",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GnuPG 相關函式庫存在兩處高風險漏洞：一為 RCE 零日注入，另一為 RSASSA-PSS 驗證的緩衝區溢出",
    summary: "本文回顧了 GnuPG 相關函式庫（特別是 gpgsm 和 libgcrypt）所面臨的兩項重大安全漏洞。第一個漏洞是 gpgsm 在處理惡意憑證文件時，存在一個經典的 printf 注入（printf injection）導致的遠端程式碼執行（RCE）零日漏洞。攻擊者可利用此漏洞，透過在 PEM 文件中插入 Shebang 和 Bash 指令來執行任意程式碼。第二個漏洞發生在 libgcrypt 的 RSASSA-PSS 驗證流程中，屬於整數下溢後接緩衝區溢出（integer underflow followed by a buffer overflow）。該漏洞已被修復，但其攻擊原理涉及控制輸入的雜湊輸出（OOB write），並可能利用 SHA-1 進行攻擊。研究人員建議，鑑於此類漏洞的嚴重性，應為其分配 CVE 編號，以便追蹤修復和修補。用戶應謹慎處理來自不可信來源的憑證文件，並關注相關函式庫的更新。",
    tags: ["GnuPG", "gpgsm", "libgcrypt", "RCE", "printf injection", "RSASSA-PSS", "漏洞"],
    title_en: "Two High-Risk Vulnerabilities Found in GnuPG Libraries: One is an RCE Zero-Day Injection, the Other is an RSASSA-PSS Validation Buffer Overflow",
    summary_en: "This article reviews two major security vulnerabilities affecting GnuPG-related libraries (specifically gpgsm and libgcrypt). The first vulnerability is a classic printf injection leading to Remote Code Execution (RCE) zero-day flaw in gpgsm when processing malicious certificate files. An attacker can exploit this flaw by inserting Shebang and Bash commands into a PEM file to execute arbitrary code. The second vulnerability occurs in libgcrypt's RSASSA-PSS validation process, classified as an integer underflow followed by a buffer overflow. Although this flaw has been patched, its attack principle involves controlling the hash output (OOB write) and could potentially be exploited using SHA-1. Researchers recommend that, given the severity of these vulnerabilities, CVE IDs should be assigned for tracking remediation and patching. Users should handle certificate files from untrusted sources with caution and monitor updates for the relevant libraries.",
    tags_en: ["GnuPG", "gpgsm", "libgcrypt", "RCE", "printf injection", "RSASSA-PSS", "vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/09/16/1", lang: "EN" }
    ]
  },
  {
    id: "20260916-12084",
    trackers: ["eu_cra"],
    category: "合規指引",
    title: "이지서티發：生成式AI防火牆EZRO-AI FIREWALL，實現敏感資訊非識別化與業務流程保護",
    summary: "隨著生成式AI（Generative AI）在各個組織業務領域的擴散，特別是隨著《人工智慧及資料基礎行政活化法》（공공AI法）的實施，公部門對AI利用過程中的個人資料保護和透明度負上了最終責任。當前最大的風險點是員工在將包含個人資料或機密資訊的業務資料輸入AI或附加文件時，這些敏感資訊可能透過Prompt傳輸到外部AI，或混入AI的回應結果中。傳統的模式匹配難以處理非固定格式的自然語言和分散的敏感資訊。이지서티發佈了四項專利，涵蓋了生成式AI輸入（Prompt）和輸出（Response）兩端的敏感資訊偵測、替代轉換（Masking）以及最終復原的完整流程。與傳統的「阻擋」機制不同，本技術採用「非識別化後利用」的模式，在保護敏感資訊的同時，能維持原始資料的業務上下文（Context），讓使用者無需額外後處理即可直接應用結果。EZRO-AI FIREWALL可安裝於使用者端設備，能同時檢測內部建置的LLM與外部AI服務（如ChatGPT、Claude、Gemini），且能偵測到未經授權的「Shadow AI」使用。此外，它還能針對RAG（檢索增強生成）系統，偵測並阻斷偽裝成正常查詢的Prompt Injection攻擊，並支援多模態（文字、文件、圖像）的敏感資訊檢測。",
    tags: ["이지서티", "EZRO-AI FIREWALL", "生成式AI", "敏感資訊", "Prompt Injection", "公眾AI法"],
    title_en: "EasyCert announces EZRO-AI FIREWALL, a Generative AI Firewall that achieves sensitive information de-identification and business process protection",
    summary_en: "As Generative AI expands across various organizational domains, especially with the implementation of the 'AI and Data Infrastructure Act' (공공AI法), public sector entities bear ultimate responsibility for protecting personal data and ensuring transparency during AI utilization. The biggest current risk point is that when employees input business data containing personal or confidential information into AI or attached documents, this sensitive information may be transmitted to external AI via the prompt, or mixed into the AI's response results. Traditional pattern matching struggles to handle non-fixed format natural language and dispersed sensitive information. EasyCert has published four patents covering the complete process of sensitive information detection, masking, and final restoration for both the input (Prompt) and output (Response) sides of Generative AI. Unlike traditional 'blocking' mechanisms, this technology adopts a 'de-identified utilization' model, which maintains the original data's business context while protecting sensitive information, allowing users to apply the results directly without additional post-processing. EZRO-AI FIREWALL can be installed on user-end devices, simultaneously detecting both internally built LLMs and external AI services (such as ChatGPT, Claude, and Gemini), and can detect unauthorized 'Shadow AI' usage. Furthermore, it can detect and block Prompt Injection attacks—which disguise themselves as normal queries—for RAG (Retrieval-Augmented Generation) systems, and supports multi-modal sensitive information detection (text, documents, images).",
    tags_en: ["EasyCert", "EZRO-AI FIREWALL", "Generative AI", "Sensitive Information", "Prompt Injection", "Public AI Act"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145890", lang: "EN" }
    ]
  },
  {
    id: "20260916-12155",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 宣布 iPhone 18 Pro 的 Reference Image 模式：打造量子安全、可驗證的數位攝影新標準",
    summary: "Apple 在其安全研究部落格發布文章，詳細介紹了 iPhone 18 Pro 新增的 Reference Image 相機模式。此系統旨在應對數位影像合成與竄改日益嚴重的問題，提供一個高度私密且安全的影像來源證明（provenance）系統。該系統的核心是建立一個「安全數位底片」，它不僅包含原始像素，還結合了簽署的元數據和時間戳。整個驗證流程在 Apple 的 Private Cloud Compute 結構內進行，並採用了結合傳統與後量子密碼學的簽署方式，確保即使面對未來的量子攻擊也能維持影像的可驗證性。系統的信任鏈從手機製造過程開始建立，包括在硬體層級對相機感測器進行簽名，並使用 Secure Enclave 簽署外部元數據。此外，Apple 透過獲取安全的時間戳區間（時間下界和上界）來驗證照片拍攝的時間。此框架設計確保了在證明影像真實性的同時，能保護拍攝者的匿名性。這代表了 Apple 在數位攝影真實性驗證方面，提出了一套極具保密性和高安全性的新標準。",
    tags: ["Apple", "iPhone 18 Pro", "Reference Image", "Private Cloud Compute", "後量子密碼學", "數位攝影"],
    title_en: "Apple Unveils Reference Image Mode for iPhone 18 Pro: Setting a New Standard for Quantum-Secure, Verifiable Digital Photography",
    summary_en: "Apple published an article on its security research blog detailing the new Reference Image camera mode for the iPhone 18 Pro. This system is designed to address the growing problem of digital image synthesis and tampering, providing a highly private and secure system for image provenance. The core of the system is the creation of a 'secure digital negative,' which includes not only the raw pixels but also signed metadata and timestamps. The entire verification process occurs within Apple's Private Cloud Compute structure and utilizes a signing method that combines traditional and post-quantum cryptography, ensuring the image's verifiability even against future quantum attacks. The system's chain of trust is established starting from the phone's manufacturing process, including signing the camera sensor at the hardware level and using the Secure Enclave to sign external metadata. Furthermore, Apple verifies the photo capture time by acquiring a secure timestamp interval (a time lower bound and upper bound). This framework is designed to ensure the authenticity of the image while protecting the anonymity of the photographer. This represents Apple proposing a new, highly confidential and secure standard for verifying the authenticity of digital photography.",
    tags_en: ["Apple", "iPhone 18 Pro", "Reference Image", "Private Cloud Compute", "Post-Quantum Cryptography", "Digital Photography"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/09/15/apple-explains-how-the-iphone-18-pros-new-reference-image-camera-mode-works", lang: "EN" }
    ]
  },
  {
    id: "20260916-12015",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "WordPress.org強化外掛安全審查機制，新增高風險版本自動阻擋功能",
    summary: "WordPress.org外掛團隊為應對潛在的資安威脅，已強化其自動化安全審查機制。目前，所有外掛程式在透過WordPress.org更新API散布前，都會經過系統分析程式碼變更，檢查是否存在資安問題。若版本被評為高風險，系統將會自動阻止其散播。\n\n此機制今年6月開始實施，外掛與佈景主題的新版本需經過一段等待期（目前為6小時），期間會由多個AI模型與Jetpack Scan進行自動化安全審查。\n\n過去曾發生過一宗外掛新版本植入後門的事件，雖然當時的審查機制能偵測到高風險，但仍需人工介入才能阻止散播。這起事件促使WordPress進一步升級了審查流程，使其能夠根據高風險判定自動執行阻擋，大幅提升了生態系統的安全性。",
    tags: ["WordPress.org", "外掛", "安全審查", "自動化", "供應鏈安全"],
    title_en: "WordPress.org Strengthens Plugin Security Review Mechanism with Automatic Blocking for High-Risk Versions",
    summary_en: "To address potential cybersecurity threats, the WordPress.org plugin team has enhanced its automated security review mechanism. Currently, all plugins must undergo system code analysis for changes before being distributed via the WordPress.org update API, checking for potential security issues. If a version is assessed as high-risk, the system will automatically block its distribution.\n\nThis mechanism was implemented in June of this year. New versions of plugins and themes must pass a waiting period (currently 6 hours), during which they undergo automated security reviews by multiple AI models and Jetpack Scan.\n\nFollowing a past incident where a plugin's new version was found to inject a backdoor, although the existing review mechanism could detect high risk, manual intervention was still required to prevent distribution. This incident prompted WordPress to further upgrade the review process, enabling automatic blocking based on high-risk determinations, significantly enhancing the security of the entire ecosystem.",
    tags_en: ["WordPress.org", "Plugin", "Security Review", "Automation", "Supply Chain Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178939", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12088",
    trackers: ["eu_cra"],
    category: "開源影響",
    title: "Scripters發布DynaPath：透過動態難讀化與行為分析，強化網站防禦AI爬蟲與自動化攻擊",
    summary: "本文介紹資安專業公司Scripters及其核心產品DynaPath，旨在解決傳統網站防禦機制（如CAPTCHA、固定URL）在面對AI爬蟲和高度自動化的攻擊時的局限性。DynaPath的運作原理包含三個層次：第一，動態難讀化（Dynamic Obfuscation），將預測性URL和參數轉換為動態值，阻擋基礎自動化工具；第二，瀏覽器自動化判別，透過環境驗證（如檢測Headless Browser）、行為驗證（如分析滑鼠軌跡、鍵盤輸入模式）和追蹤要素綜合判斷；第三，針對AI爬蟲和AI Agent Browser的行為分析，重點識別高度擬人化的自動化痕跡。文章指出，除了技術層面，法律和制度層面的變化也至關重要，特別是個人資料保護法規對爬取行為提出「事前協商」要求，為數據流動建立了制度基礎。Scripters的優勢在於其專注於爬蟲與自動化防禦的專業性，以及對韓文和國內UX環境的深度理解，能提供精準的授權（Authorization）和流量管理，而非單純的阻擋。修補建議方面，建議採用DynaPath等能提供「可解釋性」（Explainability）的平台，不僅能阻擋攻擊，還能提供判斷依據，協助企業建立更完善的數據治理體系。",
    tags: ["Scripters", "DynaPath", "爬蟲防禦", "自動化攻擊", "AI爬蟲", "動態難讀化"],
    title_en: "Scripters Releases DynaPath: Enhancing Website Defense Against AI Crawlers and Automated Attacks via Dynamic Obfuscation and Behavioral Analysis",
    summary_en: "This article introduces the cybersecurity firm Scripters and its core product, DynaPath, which aims to address the limitations of traditional website defense mechanisms (such as CAPTCHA and static URLs) when facing AI crawlers and highly automated attacks. DynaPath operates on three levels: First, Dynamic Obfuscation, which converts predictable URLs and parameters into dynamic values, blocking basic automation tools; second, browser automation detection, which uses a combination of environment verification (such as detecting headless browsers), behavioral verification (such as analyzing mouse trajectories and keystroke patterns), and element tracking; and third, behavioral analysis specifically targeting AI crawlers and AI Agent Browsers, focusing on identifying highly humanized automated traces. The article notes that besides technical layers, changes in legal and institutional frameworks are also crucial, particularly the requirement for 'prior negotiation' regarding scraping activities under personal data protection laws, which establishes an institutional basis for data flow. Scripters' advantage lies in its specialization in crawler and automation defense, coupled with a deep understanding of the Korean language and domestic UX environments, allowing it to provide precise authorization and traffic management, rather than mere blocking. Regarding remediation suggestions, it is recommended to adopt platforms like DynaPath, which offer 'Explainability,' not only to block attacks but also to provide the basis for judgment, helping enterprises build a more comprehensive data governance system.",
    tags_en: ["Scripters", "DynaPath", "Crawler Defense", "Automated Attacks", "AI Crawlers", "Dynamic Obfuscation"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145868", lang: "EN" }
    ]
  },
  {
    id: "20260916-12121",
    trackers: ["os"],
    category: "Android",
    title: "Boox發表三款搭載Android 16的電子墨水設備，提升平板與閱讀體驗",
    summary: "電子閱讀器市場持續成長，Boox宣布推出三款搭載Android 16作業系統的電子墨水設備，包括Boox Note Air6 C、Boox Note Mini C和Boox Palma 3。其中，Boox Note Air6 C已可立即購買，定位為主力機型，具備新的內部處理器和3,700mAh電池，並支援雙文件分屏註釋等功能。大型平板型號具備彩色顯示器和AI功能，並提升了刷新率以改善電子墨水顯示的性能。Boox Note Mini C是一款更注重便攜性的8.52吋平板，配備Kaleido 3彩色電子墨水顯示器和八核心處理器。Boox Palma 3則是在原有緊湊型閱讀器上的升級，螢幕尺寸為6.13吋，外殼改用陽極氧化鋁框架，電池容量為3,950mAh。這些設備都預計運行Android 16，為用戶提供更現代化的應用生態系統，但Note Mini C和Palma 3的上市日期尚未公布。",
    tags: ["Boox", "Android 16", "電子墨水", "平板電腦", "Note Air6 C", "Palma 3"],
    title_en: "Boox Launches Three Android 16-Powered E-Ink Devices to Enhance Tablet and Reading Experience",
    summary_en: "The e-reader market continues to grow. Boox announced the launch of three e-ink devices running the Android 16 operating system: the Boox Note Air6 C, Boox Note Mini C, and Boox Palma 3. The Boox Note Air6 C is available for immediate purchase and is positioned as the flagship model, featuring a new internal processor and a 3,700mAh battery, along with functions like dual-document split-screen annotation. The large tablet model includes a color display and AI features, and has improved refresh rates to enhance the performance of the e-ink display. The Boox Note Mini C is a more portable 8.52-inch tablet equipped with a Kaleido 3 color e-ink display and an octa-core processor. The Boox Palma 3 is an upgrade to the original compact reader, featuring a 6.13-inch screen and an anodized aluminum frame, with a 3,950mAh battery capacity. All these devices are expected to run Android 16, providing users with a more modernized application ecosystem, although the release dates for the Note Mini C and Palma 3 have not yet been announced.",
    tags_en: ["Boox", "Android 16", "E-Ink", "Tablet", "Note Air6 C", "Palma 3"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/09/15/boox-announced-android-16-tablets", lang: "EN" }
    ]
  },
  {
    id: "20260916-12010",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Meta CEO 祖克柏談AI安全：強調業界應自行採取措施，而非協調放慢模型發展",
    summary: "Meta執行長祖克柏（Mark Zuckerberg）於9月15日透過X平台發文，針對AI模型的安全發展議題發表看法。他指出，各AI實驗室應自行承擔確保模型安全的責任與誘因，並採取必要的安全措施。此番言論回應了業界內部關於是否應放慢前沿AI發展的討論，包括Anthropic執行長Dario Amodei和OpenAI執行長Sam Altman均曾提出應適度放緩AI能力進展的觀點。\n祖克柏認為，使用者會傾向使用行為符合自身意圖的AI代理人，這將促使業者必須重視模型對齊（Alignment）與信任，使其成為重要的市場競爭力。此外，若AI模型造成傷害，業者亦可能面臨重大法律責任，同樣是確保模型安全的誘因。他支持建立獨立評估機構及顧問，並強調AI業者應將大部分運算資源投入服務使用者，而非專注於遞迴式自我改進。Meta已承諾採取此類做法，鼓勵其他AI實驗室效仿。",
    tags: ["AI安全", "Meta", "Mark Zuckerberg", "AI模型對齊", "AI代理人", "遞迴式自我改進"],
    title_en: "Meta CEO Mark Zuckerberg on AI Safety: Stresses Industry Self-Regulation Over Coordinated Slowdown of Model Development",
    summary_en: "Meta CEO Mark Zuckerberg shared his views on the safe development of AI models via a post on X on September 15. He argued that individual AI labs should bear the responsibility and incentive to ensure model safety and take necessary precautions. His comments responded to industry discussions regarding whether the advanced development of AI should be slowed down, a view previously expressed by Anthropic CEO Dario Amodei and OpenAI CEO Sam Altman. Zuckerberg believes that users will naturally gravitate toward AI agents whose behavior aligns with their own intentions, compelling developers to prioritize model alignment and trustworthiness, making them crucial market differentiators. Furthermore, developers may face significant legal liability if their AI models cause harm, providing another incentive to ensure model safety. He supports the establishment of independent assessment bodies and consultants, emphasizing that AI companies should dedicate most of their computational resources to serving users rather than focusing on recursive self-improvement. Meta has committed to this approach and encourages other AI labs to follow suit.",
    tags_en: ["AI Safety", "Meta", "Mark Zuckerberg", "AI Model Alignment", "AI Agents", "Recursive Self-Improvement"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178976", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12017",
    trackers: ["security"],
    category: "前瞻技術",
    title: "AWS公布AI漏洞判斷基準Deception Benchmark：通用AI模型判斷漏洞仍有明顯限制",
    summary: "雲端服務業者AWS發布了AI漏洞判斷基準Deception Benchmark，用於評測多個頂尖通用AI模型在漏洞識別的能力。該基準採用「直接判斷」與「Proof-of-Exploit (PoE)」兩種提示方式，不僅檢測模型能否辨識漏洞特徵，還評估其判斷漏洞是否真的可被利用。測試結果顯示，若以誤報率和漏報率都低於10%作為最低門檻，目前任何受測模型組態都無法同時達標。在PoE模式下，雖然誤報率有顯著降低，但漏報率仍高達7%至44%。整體準確率方面，Claude Opus 5採用PoE方式表現最佳，準確率為79.3%，誤報率24.9%、漏報率16.8%；其次為GPT-5.4，準確率77.7%，誤報率10.1%、漏報率33.6%。AWS指出，現有通用AI模型雖能輔助找出漏洞線索，但要判斷漏洞在實際部署環境中的可利用性，仍存在明顯限制，建議未來需整合多步驟驗證或專用系統。",
    tags: ["AWS", "AI漏洞判斷", "Deception Benchmark", "Claude Opus 5", "GPT-5.4", "通用AI模型"],
    title_en: "AWS Releases AI Vulnerability Judgment Benchmark (Deception Benchmark): General AI Models Still Show Clear Limitations in Vulnerability Judgment",
    summary_en: "Cloud service provider AWS has released the AI Vulnerability Judgment Benchmark (Deception Benchmark) to evaluate multiple top general AI models' capabilities in vulnerability identification. The benchmark utilizes two prompting methods: 'Direct Judgment' and 'Proof-of-Exploit (PoE)'. It not only tests whether the models can recognize vulnerability characteristics but also assesses whether their judgment of a vulnerability is genuinely exploitable. The test results show that if the minimum threshold is set for both false positive rate and false negative rate to be below 10%, no currently tested model configuration can meet both criteria simultaneously. In the PoE mode, while the false positive rate significantly decreased, the false negative rate remained high, ranging from 7% to 44%. Regarding overall accuracy, Claude Opus 5 performed best using the PoE method, achieving an accuracy of 79.3%, a false positive rate of 24.9%, and a false negative rate of 16.8%; followed by GPT-5.4, with an accuracy of 77.7%, a false positive rate of 10.1%, and a false negative rate of 33.6%. AWS points out that while current general AI models can assist in finding vulnerability clues, they still have clear limitations in determining the exploitability of a vulnerability in an actual deployment environment, suggesting that future integration of multi-step verification or dedicated systems is necessary.",
    tags_en: ["AWS", "AI Vulnerability Judgment", "Deception Benchmark", "Claude Opus 5", "GPT-5.4", "General AI Models"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178918", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260916-12090",
    trackers: ["eu_cra"],
    category: "亞太對應",
    title: "수산아이앤티強化 eWalker DLP，支援公部門 N2SF 轉型，實現數據級別的資訊外洩防護",
    summary: "수산아이앤티宣布升級其資訊外洩防護（DLP）解決方案 eWalker DLP，以配合公部門國家網路安全體系（N2SF）的轉型需求。eWalker DLP 是一款網路型 DLP 解決方案，能夠即時分析透過網路傳輸的個人及重要企業資訊，並依據安全管理員設定的政策進行偵測與阻斷。本次升級的重點在於新增了「數據級別連動功能」，讓解決方案能直接識別並利用 N2SF 的 CSO（機密・敏感・公開）等級。例如，若外部系統將文件分類為「機密（C）」等級，當該文件透過電子郵件或網頁傳輸時，eWalker DLP 可即時識別此等級，並依預設政策立即阻斷或發出警告。此外，該解決方案還內建 AI DLP 功能，能分析傳送至 ChatGPT、Gemini 或 Claude 等生成式 AI 服務的提示詞和附件，以控制重要機密外洩。同時，透過 OCR 技術，能精準偵測並阻斷包含在一般圖片、掃描文件或螢幕截圖中的敏感資訊。這項升級旨在協助公部門從單純的網路隔離，轉向以數據重要性為核心的安全體系。",
    tags: ["수산아이앤티", "eWalker DLP", "DLP", "N2SF", "CSO", "資訊外洩防護", "公部門"],
    title_en: "Susan I&T Enhances eWalker DLP to Support Public Sector N2SF Transformation and Achieve Data-Level Information Leakage Protection",
    summary_en: "Susan I&T announced an upgrade to its Data Loss Prevention (DLP) solution, eWalker DLP, to meet the evolving requirements of the public sector's National Network Security Framework (N2SF). eWalker DLP is a network-based DLP solution capable of analyzing personal and critical corporate information transmitted over the network in real-time, detecting, and blocking based on policies set by security administrators. The key focus of this upgrade is the addition of 'data-level linkage functionality,' allowing the solution to directly identify and utilize the CSO (Confidential, Sensitive, Public) classification level of N2SF. For instance, if an external system classifies a document as 'Confidential (C),' eWalker DLP can instantly recognize this level when the document is transmitted via email or web page, and immediately block or issue a warning according to predefined policies. Furthermore, the solution incorporates AI DLP functionality, which analyzes prompts and attachments sent to generative AI services such as ChatGPT, Gemini, or Claude to control the leakage of critical secrets. Concurrently, through OCR technology, it can accurately detect and block sensitive information contained within general images, scanned documents, or screenshots. This upgrade aims to assist the public sector in transitioning from simple network isolation to a security system centered on data criticality.",
    tags_en: ["Susan I&T", "eWalker DLP", "DLP", "N2SF", "CSO", "Information Leakage Prevention", "Public Sector"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145876", lang: "EN" }
    ]
  },
  {
    id: "20260916-12325",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟預計於 2026 年 10 月舉辦 Windows 活動，聚焦搭載 NVIDIA RTX Spark 的本地 AI PC 生態系",
    summary: "微軟宣布將於 2026 年 10 月 7 日在舊金山舉辦 Windows 與 Surface 大型活動，這是自 2024 年 5 月以來首次重大 Windows 活動。本次活動的核心主題是「本地 AI 如何塑造 PC 的下一章節」。活動將匯集微軟 CEO Satya Nadella、NVIDIA CEO Jensen Huang 以及 Windows 與 Surface 負責人 Pavan Davuluri 等重量級人物。重點產品包括 Surface Laptop Ultra，它搭載 NVIDIA Blackwell RTX GPU，並具備高達 128GB 的統一記憶體和完整的 CUDA 支援，可本地運行參數高達 1200 億的 AI 模型。微軟與 NVIDIA 計劃「為個人 AI 時代重新發明 Windows PC」。此外，微軟也展示了 Surface RTX Spark Dev Box，為開發者提供本地 AI 模型的開發平台。文章強調，本次活動將展示針對 RTX Spark 硬體優化的 Windows 11 功能，包括新的 Workload Profile Scheduling 系統和針對 Arm 上的 x86 應用程式的 Prism 模擬層。然而，文章明確指出，本次活動不會推出 Windows 12 的新作業系統版本，而是著重於硬體與本地 AI 應用層面的革新。",
    tags: ["Microsoft", "NVIDIA", "Windows 11", "Surface Laptop Ultra", "RTX Spark", "本地 AI", "Blackwell RTX"],
    title_en: "Microsoft Plans Windows Event in October 2026, Focusing on Local AI PC Ecosystem Powered by NVIDIA RTX Spark",
    summary_en: "Microsoft announced a major Windows and Surface event scheduled for October 7, 2026, in San Francisco. This marks the first major Windows event since May 2024. The core theme of the event is how \"local AI will shape the next chapter of the PC.\" The event is set to gather industry leaders including Microsoft CEO Satya Nadella, NVIDIA CEO Jensen Huang, and Windows and Surface lead Pavan Davuluri. Key products include the Surface Laptop Ultra, which features the NVIDIA Blackwell RTX GPU, up to 128GB of unified memory, and full CUDA support, enabling the local execution of AI models with parameters up to 120 billion. Microsoft and NVIDIA plan to \"reinvent the Windows PC for the era of personal AI.\" Furthermore, Microsoft showcased the Surface RTX Spark Dev Box, providing a development platform for local AI models. The article emphasizes that the event will demonstrate Windows 11 features optimized for RTX Spark hardware, including a new Workload Profile Scheduling system and a Prism emulation layer for x86 applications on Arm. However, the article explicitly states that no new Windows 12 operating system version will be launched; instead, the focus will be on hardware and local AI application layer innovations.",
    tags_en: ["Microsoft", "NVIDIA", "Windows 11", "Surface Laptop Ultra", "RTX Spark", "Local AI", "Blackwell RTX"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/09/16/microsoft-confirms-first-major-windows-event-in-two-years-but-dont-hold-your-breath-for-windows-12", lang: "EN" }
    ]
  },
  {
    id: "20260916-12085",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Stellion 為印尼電信業者 Telkomsel 導入行動安全解決方案 AppSuit",
    summary: "Stellion 已成功為印尼最大的移動電信營運商 Telkomsel 供應行動應用程式安全解決方案 AppSuit。此解決方案是在 Telkomsel 評估以滿足高度安全需求時，透過全球安全產品參與的技術驗證（PoC）流程，證明其安全性後最終選定的。應用於 Telkomsel 通訊網路的主要產品包括用於應對行動威脅，如應用程式篡改與逆向工程的「AppSuit Premium」，以及整合監控已偵測到威脅資訊的「AppSuit Radar」。Stellion 強調這些解決方案是從攻擊者視角設計，以最大化實戰防禦能力。此次簽約意義重大，不僅擴展了 Stellion 過去在金融（Adira Finance）和移動服務（Bluebird）領域的客戶參考案例，更拓展至印尼大型通訊基礎設施等主要核心產業全域。",
    tags: ["Stellion", "Telkomsel", "AppSuit", "行動安全", "印尼", "PoC"],
    title_en: "Stellion Implements Mobile Security Solution AppSuit for Indonesian Telco Telkomsel",
    summary_en: "Stellion has successfully supplied the mobile application security solution AppSuit to Telkomsel, Indonesia's largest mobile telecommunications operator. This solution was selected after passing a Proof of Concept (PoC) process involving global security product participants, following Telkomsel's evaluation to meet high security requirements. The main products applied to Telkomsel's communication network include \"AppSuit Premium,\" designed to counter mobile threats such as application tampering and reverse engineering, and \"AppSuit Radar,\" which integrates monitoring of detected threat intelligence. Stellion emphasizes that these solutions are designed from an attacker's perspective to maximize practical defense capabilities. This contract is highly significant, not only expanding Stellion's previous client reference cases in the financial (Adira Finance) and mobile services (Bluebird) sectors but also extending its reach into the core sector of large Indonesian telecommunications infrastructure.",
    tags_en: ["Stellion", "Telkomsel", "AppSuit", "Mobile Security", "Indonesia", "PoC"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145888", lang: "EN" }
    ]
  },
  {
    id: "20260916-12086",
    trackers: ["eu_cra", "security"],
    category: "產業動態",
    title: "思科警告 Secure Email Gateway 漏洞：可透過惡意郵件遠端執行最高權限指令",
    summary: "思科（Cisco）建議修補其 Secure Email Gateway 設備的漏洞，該漏洞允許攻擊者在未經身份驗證的情況下，透過惡意郵件遠端執行設備的最高權限指令。受影響的漏洞為 CVE-2026-76461，目標設備包括 Secure Email Gateway 及運行 AsyncOS 軟體的設備。此漏洞的原理是設備在解析傳入郵件時，未能充分驗證內容，攻擊者只需發送包含惡意 SQL 資料庫指令的郵件，該指令便會直接在設備作業系統上執行，進而取得 Root 權限。由於設備處於郵件處理的關鍵節點，攻擊者僅需向目標組織發送一封郵件即可發動攻擊，無需額外帳號或用戶點擊。影響範圍廣泛，無論是虛擬或實體設備，且與設備的具體配置無關。美國 CISA 已將此漏洞列入正在被利用的漏洞（KEV）清單，並要求聯邦機構在 17 日前完成修補。思科同時也修補了其他四個漏洞：CVE-2026-76440、CVE-2026-76441、CVE-2026-20353、CVE-2026-76443。管理員應檢查郵件日誌，尋找可疑的資料庫指令，並對比網路和防火牆日誌，確認是否有與外部惡意 IP 位址或檔案的通訊痕跡。由於攻擊者可能清除入侵痕跡，建議進行全面檢查。",
    tags: ["Cisco", "Secure Email Gateway", "CVE-2026-76461", "AsyncOS", "SQL Injection", "資安漏洞"],
    title_en: "Cisco Warns of Secure Email Gateway Vulnerability: Remote Execution of High-Privilege Commands via Malicious Email",
    summary_en: "Cisco recommends patching a vulnerability in its Secure Email Gateway devices. This flaw allows attackers to remotely execute high-privilege commands on the device without requiring authentication. The affected vulnerability is CVE-2026-76461, and targeted devices include Secure Email Gateways and devices running AsyncOS software. The vulnerability stems from the device's failure to adequately validate content while parsing incoming emails. An attacker only needs to send an email containing malicious SQL database commands, which will then execute directly on the device's operating system, thereby obtaining Root privileges. Given that the device is a critical point in the email processing chain, an attacker can launch an attack simply by sending one email to the target organization, without needing additional accounts or user clicks. The scope of impact is wide, affecting both virtual and physical devices, and is independent of the device's specific configuration. The U.S. CISA has listed this vulnerability as a Known Exploited Vulnerability (KEV) and has mandated federal agencies to complete patching by the 17th. Cisco also patched four other vulnerabilities: CVE-2026-76440, CVE-2026-76441, CVE-2026-20353, and CVE-2026-76443. Administrators should check email logs for suspicious database commands and cross-reference network and firewall logs to confirm any communication traces with external malicious IP addresses or files. Due to the possibility of attackers clearing intrusion evidence, a comprehensive check is recommended.",
    tags_en: ["Cisco", "Secure Email Gateway", "CVE-2026-76461", "AsyncOS", "SQL Injection", "Cybersecurity Vulnerability"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145883", lang: "EN" }
    ]
  },
  {
    id: "20260916-12087",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "SK텔레콤與F5達成戰略合作，強化AI雲端安全與多雲API保護能力",
    summary: "SK텔레콤（SKT）宣布與全球資安企業F5建立戰略合作夥伴關係。本次合作旨在推動雙方在F5解決方案的價值再銷售商（VAR）和管理服務提供商（MSP）雙重角色上展開。SKT被選為F5服務型軟體（SaaS）安全平台「F5分散雲」（Distributed Cloud）的MSP合作夥伴，這證明了SKT在雲端及AI轉型業務方面的能力。F5是一家提供多雲API安全解決方案的全球企業，特別關注AI驅動的「Agentic AI」市場，預計該市場將持續高速增長。透過此次合作，SKT將整合F5分散雲的技術，涵蓋Web應用程式防火牆（WAF）、API安全、DDoS防禦和機器人攻擊防禦等雲端安全技術。SKT將這些技術與其現有的AI雲端基礎設施運營經驗結合，提供從基礎設施建置到運營與安全的全方位「整合管理服務」，以滿足大型企業客戶日益複雜的安全需求。",
    tags: ["SK텔레콤", "F5", "F5分散雲", "AI雲端", "API安全", "WAF"],
    title_en: "SK Telecom and F5 Establish Strategic Partnership to Enhance AI Cloud Security and Multi-Cloud API Protection",
    summary_en: "SK Telecom (SKT) announced a strategic partnership with global cybersecurity firm F5. This collaboration aims to drive both parties' efforts in the dual roles of Value-Added Reseller (VAR) and Managed Service Provider (MSP) for F5 solutions. SKT has been selected as an MSP partner for F5's Software-as-a-Service (SaaS) security platform, 'F5 Distributed Cloud,' demonstrating SKT's capabilities in cloud and AI transformation services. F5 is a global enterprise providing multi-cloud API security solutions, with a particular focus on the rapidly growing 'Agentic AI' market. Through this partnership, SKT will integrate F5 Distributed Cloud technology, covering cloud security technologies such as Web Application Firewall (WAF), API security, DDoS defense, and bot attack defense. SKT will combine these technologies with its existing AI cloud infrastructure operation experience to provide comprehensive 'integrated management services,' spanning from infrastructure build-out to operation and security, meeting the increasingly complex security demands of large enterprise clients.",
    tags_en: ["SKT", "F5", "F5 Distributed Cloud", "AI Cloud", "API Security", "WAF"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145881", lang: "EN" }
    ]
  },
  {
    id: "20260916-12089",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Sitech Technology 推出 AI 隱私保護系統，自動模糊化 CCTV 影像中的個人資訊",
    summary: "영상보안 솔루션 기업 사이테크놀로지스（Sitech Technology）正式發布了名為「사이 CCTV AI 개인정보지우개」的系統。此系統旨在自動處理儲存在 CCTV 影像中的個人資訊，例如人臉和車牌號碼。系統透過連接移動儲存裝置（如 USB）來運行，利用人工智慧（AI）精準識別影像中的個人資料，並將其自動進行遮罩（모자이크）處理，實現非識別化。使用者可以選擇保留需要公開的特定物件，而其他所有個人資訊則會自動模糊化。該設備具備高處理速度（100 TOPS），且提供直觀的手動編輯功能，以應對 AI 未偵測到的個人資料洩露。此外，為了強化安全性，該系統設計為離線獨立型（Air-Gapped）設備，不連接外部網路，從根本上杜絕了駭客攻擊或雲端資料外洩的風險。Sitech Technology 表示，這款產品是解決大型伺服器建置成本和外部雲端資料外洩風險的實用替代方案，預計將以合理價格提供給公部門、地方政府和教育機構等需要處理錄影資料的單位。",
    tags: ["Sitech Technology", "CCTV", "AI", "個人資訊", "非識別化", "Air-Gapped"],
    title_en: "Sitech Technology Launches AI Privacy Protection System to Automatically Blur Personal Information in CCTV Footage",
    summary_en: "Video surveillance solution provider Sitech Technology has officially released a system called the \"Sai CCTV AI Personal Information Eraser.\" This system is designed to automatically process personal information, such as faces and license plates, stored in CCTV footage. The system operates by connecting to a portable storage device (such as a USB drive), utilizing Artificial Intelligence (AI) to accurately identify personal data within the footage and automatically apply masking (mosaic) treatment to achieve de-identification. Users can choose to retain specific objects that need to be publicly visible, while all other personal information is automatically blurred. The device boasts high processing speed (100 TOPS) and provides intuitive manual editing functions to address personal data leakage that the AI might miss. Furthermore, to enhance security, the system is designed as an Air-Gapped device, meaning it does not connect to external networks, fundamentally eliminating the risk of hacker attacks or cloud data leakage. Sitech Technology stated that this product is a practical alternative to solving the high cost of large server deployments and the risk of external cloud data leakage, and it is expected to be offered at a reasonable price to organizations such as public sectors, local governments, and educational institutions that require processing recorded video data.",
    tags_en: ["Sitech Technology", "CCTV", "AI", "Personal Information", "De-identification", "Air-Gapped"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145874", lang: "EN" }
    ]
  },
  {
    id: "20260916-12091",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "安랩宣告轉型為 AI-Native 安全平台，打造「AI-powered Security」新世代防禦體系",
    summary: "安랩宣布轉型為「AI-Native 安全平台企業」，目標是將其累積超過 30 年的威脅情報（TI）和安全營運經驗，以 AI 為核心進行重構。隨著 AI 成為新的網路攻擊行為者，攻擊的速度、規模和自動化程度大幅提升，傳統的資安防禦體系難以跟上。為了解決「AI 速度」與「人工營運速度」之間的落差，安랩推出了整合品牌「AhnLab AI PLUS」，代表其 AI-Native 安全戰略。\n\n安랩將其安全能力從單純在產品上加載 AI 功能的「AI-powered Security」，升級為從產品、數據、安全營運全方位由 AI 重新設計的「AI-Native Security」。核心架構是基於多個 AI Agent 協作的架構，能夠將分散的數據連接成單一的「安全脈絡」（Security Context）。\n\n具體產品戰略包括：1. **AhnLab AI PLUS Endpoint**：將 EPP 和 EDR 整合為 SaaS 基礎的保護平台，保護範圍擴展至 PC、伺服器、虛擬環境、容器和行動裝置。2. **AhnLab AI PLUS SecOps**：作為 AI 驅動的安全營運平台，整合 XDR、MDR 和 AI SOC，能連動來自多個產品和第三方解決方案的安全信號，分析攻擊的脈絡和優先級，使預防、偵測、調查和應對流程化。\n\n安랩強調，其目標是建立一個「AI-Native 安全生命週期」（AI-native Security Lifecycle），讓 AI 能夠感知、推論並執行必要的行動，並透過「受控自主性」（Controlled Autonomy）原則來確保安全與可靠性。公司計劃在未來三年投入大量資源，將業務模式從單次建置銷售轉向持續訂閱的 SaaS 模式，並將全球市場佔比提升至 30% 以上。",
    tags: ["安랩", "AhnLab AI PLUS", "AI-Native Security", "SaaS", "XDR", "AI SOC", "安全平台"],
    title_en: "AhnLab Declares Transformation into AI-Native Security Platform, Building a New Generation of 'AI-powered Security' Defense System",
    summary_en: "AhnLab announced its transformation into an \"AI-Native Security Platform Enterprise,\" aiming to restructure its accumulated over 30 years of Threat Intelligence (TI) and security operations experience using AI as its core. As AI becomes a new attacker, the speed, scale, and automation of attacks have significantly increased, making traditional security defense systems difficult to keep up with. To bridge the gap between \"AI speed\" and \"manual operational speed,\" AhnLab launched the integrated brand \"AhnLab AI PLUS,\" representing its AI-Native security strategy.\n\nAhnLab is elevating its security capabilities from \"AI-powered Security\"—where AI features are simply added to products—to \"AI-Native Security,\" which involves redesigning products, data, and security operations holistically using AI. The core architecture is based on a framework of multiple collaborating AI Agents, capable of connecting disparate data points into a single \"Security Context.\" \n\nSpecific product strategies include: 1. **AhnLab AI PLUS Endpoint**: Integrating EPP and EDR into a SaaS-based protection platform, expanding coverage to PCs, servers, virtual environments, containers, and mobile devices. 2. **AhnLab AI PLUS SecOps**: Serving as an AI-driven security operations platform, integrating XDR, MDR, and AI SOC. It connects security signals from multiple products and third-party solutions to analyze attack context and priority, thereby streamlining the processes of prevention, detection, investigation, and response.\n\nAhnLab emphasized that its goal is to establish an \"AI-Native Security Lifecycle,\" allowing AI to perceive, infer, and execute necessary actions, while ensuring security and reliability through the principle of \"Controlled Autonomy.\" The company plans to invest heavily over the next three years, shifting its business model from one-time deployment sales to a continuous subscription SaaS model, aiming to increase its global market share to over 30%.",
    tags_en: ["AhnLab", "AhnLab AI PLUS", "AI-Native Security", "SaaS", "XDR", "AI SOC", "Security Platform"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145875", lang: "EN" }
    ]
  },
  {
    id: "20260916-12092",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "지니언스發表 AI 驅動整合安全平台『Nexus Framework』，打造 K-資安全球戰略前哨",
    summary: "지니언스宣布開發出 AI 驅動的 K-Cybersecurity 整合管理平台「Nexus Framework」。該平台是在科學技術資訊部支持的國家級專案成果，並首次在杜拜 GISEC 展會上公開。Nexus Framework 是一個基於 AI 原生、開放式的下一代平台，能夠將原本獨立運行的多種安全解決方案整合到單一平台進行管理。具體而言，它結合了網路存取控制（NAC）、零信任網路存取（ZTNA）和整合終端安全平台（Insights E），實現了系統化的零信任架構（ZTA）。此外，平台還加入了資料湖倉（Data Lakehouse）和 AI 助理功能，讓 AI 能夠自主分析和處理收集的大量事件，從而推動安全營運中心（SOC）的自動化，並縮短了威脅應對時間。面對中東地區每日平均湧入 80 萬次的智慧網路攻擊，以及國際局勢帶來的數據主權需求，지니언스計劃提供符合各國法規的在地化主權安全體系，加速搶佔中東市場。",
    tags: ["지니언스", "Nexus Framework", "AI", "零信任架構", "ZTA", "NAC", "SOC"],
    title_en: "Genianse Unveils AI-Powered Integrated Security Platform 'Nexus Framework' to Build K-Cybersecurity Strategic Outpost",
    summary_en: "Genianse announced the development of 'Nexus Framework,' an AI-driven, integrated management platform for K-Cybersecurity. This platform is the result of a national-level project supported by the Ministry of Science and ICT and was unveiled for the first time at the Dubai GISEC exhibition. Nexus Framework is a next-generation, AI-native, and open platform designed to integrate various previously standalone security solutions into a single management platform. Specifically, it combines Network Access Control (NAC), Zero Trust Network Access (ZTNA), and the Insights E integrated endpoint security platform to realize a systematic Zero Trust Architecture (ZTA). Furthermore, the platform incorporates a Data Lakehouse and AI assistant functionality, enabling AI to autonomously analyze and process the large volume of collected events. This drives the automation of the Security Operations Center (SOC) and significantly reduces threat response time. Facing an average of 800,000 smart network attacks daily in the Middle East, coupled with data sovereignty requirements stemming from the international situation, Genianse plans to provide localized, sovereign security systems compliant with various national regulations, accelerating its capture of the Middle Eastern market.",
    tags_en: ["Genianse", "Nexus Framework", "AI", "Zero Trust Architecture", "ZTA", "NAC", "SOC"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145873", lang: "EN" }
    ]
  },
  {
    id: "20260916-12093",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "시큐아이(SECUi)舉辦「SECUi MAX SUMMIT」：探討AI時代下的下一代安全技術與戰略",
    summary: "本屆「SECUi MAX SUMMIT」以「AI改變安全，重新定義未來」為主題，旨在分享企業建立安全AI環境的技術方向與實戰策略。活動將涵蓋AI高度發展後，網路安全解決方案的角色轉變，以及革新安全營運的技術。現場將展示多種先進安全策略，包括SamsungSDS針對量子時代的抗量子加密(PQC)及前沿AI模型開發安全；NeoI&E的後Mitos身份安全；以及TrendMicro利用AI的雲原生應用保護平台(CNAPP)策略。此外，本次活動還將公開高性能下一代防火牆『BLUEMAX NGF PRO』、AI基礎威脅應對平台『TARP』，以及威脅分析平台『STIC』。透過這些解決方案展示，參與者可親眼了解AI基礎的真假警報偵測、分析結果視覺化、AI分析摘要和暗網監控等先進技術能力。",
    tags: ["시큐아이", "SECUi MAX SUMMIT", "AI安全", "PQC", "CNAPP", "防火牆"],
    title_en: "SECUi Hosts 'SECUi MAX SUMMIT': Exploring Next-Generation Security Technologies and Strategies in the AI Era",
    summary_en: "This edition of the 'SECUi MAX SUMMIT' is themed 'AI Changes Security, Redefining the Future,' aiming to share technical directions and practical strategies for enterprises building secure AI environments. The event will cover the changing role of cybersecurity solutions in the highly developed AI era, as well as technologies for revolutionizing security operations. Various advanced security strategies will be showcased on site, including SamsungSDS's anti-quantum cryptography (PQC) for the quantum era and secure development of advanced AI models; NeoI&E's post-Mitos identity security; and TrendMicro's Cloud-Native Application Protection Platform (CNAPP) strategies utilizing AI. Furthermore, the event will unveil the high-performance next-generation firewall, 'BLUEMAX NGF PRO,' the AI-powered threat response platform, 'TARP,' and the threat analysis platform, 'STIC.' Through these solution demonstrations, participants can witness advanced capabilities such as AI-based false positive detection, visualization of analysis results, AI analysis summaries, and dark web monitoring.",
    tags_en: ["SECUi", "SECUi MAX SUMMIT", "AI Security", "PQC", "CNAPP", "Firewall"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145871", lang: "EN" }
    ]
  }
];
