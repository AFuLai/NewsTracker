// data-20260813.js — 2026-08-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-13"] = [
  {
    id: "20260813-001",
    trackers: ["security"],
    category: "重大事件",
    title: "AI自主攻擊框架入侵臺灣政府系統：破解帳密、竊取2,564筆人員資料",
    summary: "以色列資安新創 Dream Security 公布一宗重大資安事件，揭露中國駭客利用名為 Hermes 和 OpenClaw 的 AI 自主攻擊框架，對臺灣政府系統進行了為期數週的攻擊。該框架代表 AI 驅動的網路攻擊已進化至能自主規劃、執行、驗證和修正錯誤的程度。攻擊從政府入口網站開始，首先透過反編譯 JavaScript 套件，成功繪製出完整的國家單一登入（SSO）架構，包括多個 OIDC 端點和 RSA 簽章金鑰。攻擊者隨後利用未經驗證的 API 端點，以及透過多次密碼潑灑（Password Spraying）破解了 85 個員工帳號。最終，攻擊者成功存取了多個內部系統，並竊取了至少 2,564 筆人員記錄，資料涵蓋員工姓名、部門、SSO 帳號，以及法律專業人士等敏感資訊。事件顯示，攻擊者不僅鎖定政府部門，甚至將目標延伸至政府 IT 供應商、核能安全機構及能源產業公司，凸顯了 AI 攻擊的極高威脅性。",
    tags: ["AI攻擊", "自主攻擊框架", "臺灣政府", "SSO", "資安事件", "Dream Security"],
    title_en: "AI Autonomous Attack Framework Infiltrates Taiwan Government Systems: Cracking Credentials and Stealing 2,564 Personnel Records",
    summary_en: "Israeli cybersecurity startup Dream Security disclosed a major security incident, revealing that Chinese hackers utilized AI autonomous attack frameworks named Hermes and OpenClaw to conduct a multi-week attack on Taiwan government systems. This framework demonstrates that AI-driven cyberattacks have evolved to the point of autonomously planning, executing, validating, and correcting errors. The attack began on government portals, first successfully mapping the complete National Single Sign-On (SSO) architecture by reverse-engineering JavaScript packages, including multiple OIDC endpoints and RSA signing keys. The attackers subsequently exploited unvalidated API endpoints and cracked 85 employee accounts through multiple password spraying attempts. Finally, the attackers successfully accessed multiple internal systems and stole at least 2,564 personnel records, containing sensitive information such as employee names, departments, SSO accounts, and legal professional details. The incident shows that the attackers did not limit their focus to government departments but extended their targets to government IT suppliers, nuclear safety organizations, and energy industry companies, highlighting the extremely high threat level of AI attacks.",
    tags_en: ["AI Attacks", "Autonomous Attack Framework", "Taiwan Government", "SSO", "Cybersecurity Incident", "Dream Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178112", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-002",
    trackers: ["security"],
    category: "重大事件",
    title: "以色列資安新創揭露：中國駭客利用AI自主攻擊框架鎖定臺灣政府機關",
    summary: "以色列AI資安新創Dream Security揭露，有中國駭客利用名為Hermes和OpenClaw的AI攻擊框架，對臺灣政府機關發動自主攻擊行動。該框架能夠同時部署多達8個AI代理，分工進行目標搜尋、資安漏洞挖掘，並具備戰術調整能力。根據Dream Security的調查，該攻擊在七月初的四天內，探查了21個政府系統，入侵了至少85個使用者帳號，並竊取了超過2,500筆人事資料。攻擊範圍隨後擴大，目標包括核能安全委員會及至少7家能源公司。駭客為了規避安全防護，甚至偽裝成合法的系統漏洞測試活動。此外，若初始攻擊失敗，AI框架還能自動上網收集資料，從而擬定新的攻擊方法。數位發展部資通安全署已於七月察覺異常攻擊並完成調查，受影響單位也已陸續處理。此事件凸顯AI技術在資安領域的雙面性，對關鍵基礎設施構成重大威脅。",
    tags: ["Dream Security", "AI攻擊", "中國駭客", "臺灣政府", "Hermes", "OpenClaw", "關鍵基礎設施"],
    title_en: "Israeli Cybersecurity Startup Reveals: Chinese Hackers Use AI Autonomous Attack Framework to Target Taiwanese Government Agencies",
    summary_en: "Israeli AI cybersecurity startup Dream Security revealed that Chinese hackers utilized AI attack frameworks named Hermes and OpenClaw to launch autonomous attacks against Taiwanese government agencies. This framework is capable of simultaneously deploying up to eight AI agents to perform specialized tasks such as target searching and cybersecurity vulnerability mining, and possesses tactical adjustment capabilities. According to Dream Security's investigation, the attack spanned four days in early July, probing 21 government systems and compromising at least 85 user accounts, resulting in the theft of over 2,500 personnel records. The attack scope subsequently expanded to include the National Energy Safety Committee and at least seven energy companies. To evade security defenses, the hackers even disguised their activities as legitimate system vulnerability testing. Furthermore, if the initial attack failed, the AI framework could automatically gather data from the internet to formulate new attack methods. The Digital Development Ministry's Communications Security Administration detected the abnormal attack in July and completed the investigation, and the affected units have since taken remedial action. This incident highlights the dual nature of AI technology in the cybersecurity domain, posing a significant threat to critical infrastructure.",
    tags_en: ["Dream Security", "AI Attack", "Chinese Hackers", "Taiwanese Government", "Hermes", "OpenClaw", "Critical Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178104", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-003",
    trackers: ["security"],
    category: "重大事件",
    title: "白宮發布備忘錄：建立聯邦控制下的私人公司網路行動計畫，對抗外國網路犯罪集團",
    summary: "美國白宮發布總統備忘錄，擴大聯邦政府對外國網路犯罪的應對能力。此計畫允許經過嚴格審核的美國私營公司，在聯邦控制下執行「網路監控行動」和「網路效應行動」。這些行動旨在針對外國網路犯罪跨國組織（TCOs）。參與的公司必須與司法部（DOJ）或國土安全部（DHS）簽訂正式合約，並需提供至少 100 萬美元的保證金。行動範圍明確劃分：監控行動側重於秘密存取系統以收集情報；效應行動則涵蓋破壞、降低或摧毀敵方資訊系統和基礎設施。然而，該計畫明確禁止導致「關鍵結果」的行動，即可能造成生命損失、嚴重傷害或構成使用武力或武裝攻擊的行為。所有行動都必須經過多機構協調和執行主任的書面批准，並嚴格限制於非國家犯罪團體，同時對國內目標和美國公民設置了嚴格的保護措施。",
    tags: ["白宮", "網路犯罪", "聯邦政府", "美國安全", "網路行動"],
    title_en: "White House Issues Memorandum: Establishing Federal-Controlled Private Sector Cyber Operations Plan to Counter Foreign Cybercrime Groups",
    summary_en: "The U.S. White House issued a Presidential Memorandum expanding the federal government's capacity to respond to foreign cybercrime. This plan permits rigorously vetted American private companies to execute 'cyber surveillance operations' and 'cyber effect operations' under federal control. These operations are aimed at targeting transnational cybercrime organizations (TCOs). Participating companies must sign formal contracts with the Department of Justice (DOJ) or the Department of Homeland Security (DHS) and must provide a minimum $1 million bond. The scope of operations is clearly delineated: surveillance operations focus on secretly accessing systems to gather intelligence; effect operations cover disrupting, degrading, or destroying enemy information systems and infrastructure. However, the plan explicitly prohibits actions that would lead to 'critical outcomes,' meaning actions that could cause loss of life, serious injury, or constitute the use of force or armed attack. All actions must undergo multi-agency coordination and require the written approval of the executive director, and are strictly limited to non-state criminal groups, while maintaining strict protections for domestic targets and U.S. citizens.",
    tags_en: ["White House", "Cybercrime", "Federal Government", "U.S. Security", "Cyber Operations"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/white-house-mobilizes-security-firms-for-operations-against-foreign-cybercrime-gangs", lang: "EN" }
    ]
  },
  {
    id: "20260813-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSH 服務中的潛在資訊洩漏漏洞",
    summary: "Debian 針對 OpenSSH 服務發布了安全更新，修補了一個潛在的資訊洩漏漏洞。此漏洞的識別碼為 DSA-6438-1。該漏洞可能允許攻擊者在特定條件下，透過 OpenSSH 服務的運作，竊取系統的敏感資訊。雖然原文未提供具體的 CVSS 分數或影響範圍，但這類資訊洩漏漏洞通常被視為高風險，可能導致系統配置或用戶憑證的洩露。Debian 建議所有使用 OpenSSH 服務的用戶，應立即升級到包含此修補的最新版本，以防止遭受未經授權的資訊竊取。建議用戶應遵循 Debian 官方的安全公告指引，執行系統更新，確保 OpenSSH 服務處於安全狀態。",
    tags: ["Debian", "OpenSSH", "DSA-6438-1", "資訊洩漏", "Linux 核心"],
    title_en: "Debian Releases Security Advisory: Patching Potential Information Leak Vulnerability in OpenSSH Service",
    summary_en: "Debian has released a security update for the OpenSSH service, patching a potential information leak vulnerability. This vulnerability is identified as DSA-6438-1. The flaw could potentially allow an attacker, under specific conditions, to steal sensitive system information through the operation of the OpenSSH service. Although the original advisory does not provide a specific CVSS score or impact scope, such information leak vulnerabilities are typically considered high risk, potentially leading to the exposure of system configurations or user credentials. Debian advises all users of the OpenSSH service to immediately upgrade to the latest version containing this patch to prevent unauthorized information theft. Users are recommended to follow the official Debian security advisory guidelines and perform system updates to ensure the OpenSSH service is in a secure state.",
    tags_en: ["Debian", "OpenSSH", "DSA-6438-1", "Information Leak", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00349.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 glibc 函式庫中的記憶體讀寫漏洞",
    summary: "Debian 發布安全公告 DSA-6437-1，修補了 GNU C Library (glibc) 中一個嚴重的記憶體讀寫漏洞。此漏洞可能允許遠端攻擊者在未經授權的情況下執行程式碼，造成系統層面的安全風險。受影響的系統為使用 glibc 函式庫的 Debian 系統。修補建議是立即更新系統到包含修補程式的 Debian 安全更新版本。此類核心元件的漏洞修補對於維持系統的穩定性和安全性至關重要，建議系統管理員應遵循 Debian 的安全更新流程，確保所有核心函式庫都保持最新狀態，以防範被利用。由於原文未提供具體的 CVSS 分數或受影響版本範圍，建議用戶參考 Debian 官方公告進行版本檢查與升級。",
    tags: ["Debian", "glibc", "DSA-6437-1", "記憶體漏洞", "Linux 核心"],
    title_en: "Debian Issues Security Advisory: Patching Memory Read/Write Vulnerability in glibc Library",
    summary_en: "Debian has released security advisory DSA-6437-1, patching a critical memory read/write vulnerability in the GNU C Library (glibc). This vulnerability could potentially allow a remote attacker to execute unauthorized code, posing a system-level security risk. The affected systems are Debian distributions utilizing the glibc library. The recommended remediation is to immediately update the system to the Debian security update version containing the patch. Patching vulnerabilities in core components is crucial for maintaining system stability and security. System administrators are advised to follow Debian's security update procedures and ensure all core libraries are kept up-to-date to prevent exploitation. As the original text did not provide specific CVSS scores or affected version ranges, users are advised to refer to the official Debian announcement for version checking and upgrading.",
    tags_en: ["Debian", "glibc", "DSA-6437-1", "Memory Vulnerability", "Linux Kernel"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00348.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSH 處理特定密鑰格式時的潛在資訊洩漏漏洞",
    summary: "Debian 發布安全公告 DSA-6436-1，修補 OpenSSH 處理特定密鑰格式時可能存在的資訊洩漏漏洞。此漏洞存在於 OpenSSH 處理密鑰檔案的特定流程中，攻擊者若能利用此漏洞，可能導致敏感資訊被洩露。修補後，用戶應立即更新其系統的 OpenSSH 套件，以確保安全。本漏洞的修補是針對 OpenSSH 核心元件的，建議所有使用 Debian 系統的用戶，特別是那些依賴 OpenSSH 進行遠端連線的用戶，應儘速執行系統更新。由於原文未提供 CVSS 分數或具體影響範圍，建議用戶參考 Debian 官方公告，並遵循標準的系統更新流程。",
    tags: ["Debian", "OpenSSH", "DSA-6436-1", "資訊洩漏", "Linux 核心元件"],
    title_en: "Debian Issues Security Advisory: Patching Potential Information Leak in OpenSSH Handling of Specific Key Formats",
    summary_en: "Debian has released security advisory DSA-6436-1, patching a potential information leak vulnerability found in OpenSSH when processing specific key formats. This vulnerability exists within a specific process of OpenSSH handling key files. If exploited, an attacker could potentially leak sensitive information. Users are advised to immediately update their OpenSSH package to ensure security. This patch targets the core OpenSSH component, and all users of Debian systems, especially those relying on OpenSSH for remote connections, are strongly advised to perform a system update promptly. As the original text does not provide a CVSS score or specific impact scope, users are recommended to refer to the official Debian announcement and follow standard system update procedures.",
    tags_en: ["Debian", "OpenSSH", "DSA-6436-1", "Information Leak", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00347.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-007",
    trackers: ["os"],
    category: "Linux",
    title: "多個主流 Linux 發行版發布安全更新：涵蓋核心、應用程式與雲端環境修補",
    summary: "本文列舉了包括 AlmaLinux、Debian、Fedora、Gentoo、Oracle、Red Hat、SUSE 和 Ubuntu 在內，多個主流 Linux 發行版發布了廣泛的安全性更新。這些更新涵蓋了從作業系統核心（kernel）到各種應用層元件的修補。受影響的元件包括但不限於：核心組件（如 kernel、libarchive、udev）、網路服務（如 dhcpcd、openvpn、bind）、開發工具（如 python3、nodejs）以及雲端相關的專用映像檔（如 linux-aws、linux-gcp、linux-azure）。發行版針對不同領域的漏洞進行了修補，確保系統的穩定性與安全性。實務上，系統管理員應根據發行版官方公告，及時更新所有核心元件和關鍵應用程式，特別是涉及網路通訊和身份驗證的服務，以避免潛在的資安風險。建議檢查發行版官方的更新管道，確保所有相關套件都已升級至最新版本。",
    tags: ["AlmaLinux", "Debian", "Fedora", "Ubuntu", "Linux 核心", "安全更新", "CVE", "系統管理"],
    title_en: "Multiple Major Linux Distributions Release Security Updates: Patching Core, Applications, and Cloud Environments",
    summary_en: "This article lists multiple major Linux distributions, including AlmaLinux, Debian, Fedora, Gentoo, Oracle, Red Hat, SUSE, and Ubuntu, that have released extensive security updates. These updates cover patches ranging from the operating system kernel to various application-layer components. Affected components include, but are not limited to: core components (such as kernel, libarchive, udev), network services (such as dhcpcd, openvpn, bind), development tools (such as python3, nodejs), and cloud-specific images (such as linux-aws, linux-gcp, linux-azure). The distributions have patched vulnerabilities across different domains to ensure system stability and security. In practice, system administrators should promptly update all core components and critical applications according to the official distribution announcements, especially services involved in network communication and identity authentication, to prevent potential security risks. It is recommended to check the official distribution update channels to ensure all relevant packages are upgraded to the latest version.",
    tags_en: ["AlmaLinux", "Debian", "Fedora", "Ubuntu", "Linux Kernel", "Security Update", "CVE", "System Administration"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088715", lang: "EN" }
    ]
  },
  {
    id: "20260813-008",
    trackers: ["os"],
    category: "Linux",
    title: "LWN.net 每週精選：涵蓋 BPF、CrossPoint 韌體、KVM 平面與儲存程式碼新功能更新",
    summary: "本文是 LWN.net 的每週精選摘要，涵蓋了多個系統層級的技術進展與開發者更新。主要內容包括：BPF（Berkeley Packet Filter）的進階應用與形式化驗證；CrossPoint 的 ebook 韌體更新；KVM（Kernel-based Virtual Machine）的平面（planes）架構；以及 shadow-utils 和新的儲存程式碼測試功能。這些更新顯示了 Linux 核心在虛擬化、網路監控、以及系統安全層面持續的深化與優化。雖然文章未提供特定的 CVE 或 CVSS 分數，但這些技術進展對於系統管理員和資安開發者具有高度的實務參考價值，建議關注這些核心元件的最新版本與安全公告，以確保系統的穩定性與安全性。",
    tags: ["LWN.net", "BPF", "KVM", "Linux 核心", "CrossPoint", "shadow-utils"],
    title_en: "LWN.net Weekly Roundup: Covering BPF, CrossPoint Firmware, KVM Planes, and Storage Code Updates",
    summary_en: "This article is a weekly roundup from LWN.net, covering technical advancements and developer updates across multiple system layers. Key topics include: advanced applications and formal verification for BPF (Berkeley Packet Filter); firmware updates for CrossPoint e-books; the planes architecture for KVM (Kernel-based Virtual Machine); and new testing features for shadow-utils and storage code. These updates demonstrate the continuous deepening and optimization of the Linux kernel in the areas of virtualization, network monitoring, and system security. Although the article does not provide specific CVE or CVSS scores, these technical advancements hold high practical value for system administrators and security developers. It is recommended to monitor the latest versions and security advisories for these core components to ensure system stability and security.",
    tags_en: ["LWN.net", "BPF", "KVM", "Linux Kernel", "CrossPoint", "shadow-utils"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1087432", lang: "EN" }
    ]
  },
  {
    id: "20260813-009",
    trackers: ["os"],
    category: "Linux",
    title: "KDE 軟體發起「防彈級」計畫：Kubuntu Focus 承諾三年維護 Plasma 6.6 LTS",
    summary: "KDE e.V.、Kubuntu Focus 與 KDE 合作夥伴 Techpaladin Software 宣布啟動「防彈級 KDE 軟體計畫」。此計畫旨在為 KDE Plasma 6.6 LTS 及其相關軟體提供至少三年的錯誤修復與安全更新。Kubuntu Focus 承諾在未來三年內向 Techpaladin Software 提供 10 萬美元的款項，專用於維護 Plasma 6.6 LTS 的「防彈級」KDE 堆疊。維護範圍涵蓋 Plasma 6.6 LTS 本身、KDE Frameworks 函式庫，以及相關的 KDE Gear 應用程式。此外，Kubuntu Focus 也贊助 KDE e.V. 在為期三年的期間內，為 Kubuntu 26.04 LTS 上的軟體提供三個額外的 CI 測試節點。目前，這套「防彈級 KDE 軟體套件」已透過 Kubuntu 26.04 LTS 發佈。此舉顯示了社群對核心桌面環境長期維護與安全性的高度重視。",
    tags: ["KDE e.V.", "Kubuntu Focus", "KDE Plasma 6.6 LTS", "Linux", "Techpaladin Software", "Kubuntu 26.04 LTS"],
    title_en: "KDE Initiates 'Bulletproof' Project for Software: Kubuntu Focus Commits Three Years of Maintenance for Plasma 6.6 LTS",
    summary_en: "KDE e.V., Kubuntu Focus, and KDE partner Techpaladin Software have announced the launch of the 'Bulletproof KDE Software Project.' This initiative aims to provide at least three years of bug fixes and security updates for KDE Plasma 6.6 LTS and its related software. Kubuntu Focus has committed $100,000 to Techpaladin Software over the next three years, specifically for maintaining the 'bulletproof' KDE stack for Plasma 6.6 LTS. The scope of maintenance covers Plasma 6.6 LTS itself, the KDE Frameworks library, and related KDE Gear applications. Furthermore, Kubuntu Focus will sponsor KDE e.V. by providing three additional CI testing nodes for software on Kubuntu 26.04 LTS over the three-year period. This 'bulletproof KDE software package' has currently been released via Kubuntu 26.04 LTS. This move highlights the community's high emphasis on the long-term maintenance and security of the core desktop environment.",
    tags_en: ["KDE e.V.", "Kubuntu Focus", "KDE Plasma 6.6 LTS", "Linux", "Techpaladin Software", "Kubuntu 26.04 LTS"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/KDE-Bullet-Proof-Software", lang: "EN" }
    ]
  },
  {
    id: "20260813-010",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 7.2 核心功能亮點：引入快取感知排程、支援 AMD Zen 6 與 USB4STREAM 協定",
    summary: "Linux 7.2 核心預計將為 Ubuntu 26.10 及其他發行版帶來多項重大更新。本次版本最引人注目的是「快取感知排程」（Cache Aware Scheduling），這對於運行在具備多個最高層快取（LLC）域的現代系統極具效能提升。在硬體支援方面，Linux 7.2 強化了對 AMD Zen 6 處理器的準備工作，並為 AMDGPU 驅動程式增加了 HDMI 2.1 FRL 的初步支援，同時整合了 DC 電源模組。Intel 方面，新增了對 Panther Lake SoC、Diamond Rapids 和 Nova Lake H 的初步支援，並加入了 USB4STREAM 協定，用於高速傳輸資料包。此外，該核心也提供了 Apple M3 設備的基礎支援，儘管完整的 M3 Pro/Max/Ultra 支援需等到 Linux 7.3。性能優化也包括 MGLRU 改善，提升 MongoDB 效能，並加速了對 /proc/filesystems 的讀取。開發者應關注這些新的硬體支援和效能優化，以提升系統的穩定性和效能。",
    tags: ["Linux 7.2", "Cache Aware Scheduling", "AMD Zen 6", "USB4STREAM", "Linux 核心", "AMDGPU"],
    title_en: "Linux 7.2 Kernel Highlights: Introducing Cache Aware Scheduling, Supporting AMD Zen 6, and USB4STREAM Protocol",
    summary_en: "The Linux 7.2 kernel is expected to bring several major updates to Ubuntu 26.10 and other distributions. The most notable feature of this version is \"Cache Aware Scheduling,\" which offers significant performance improvements for modern systems with multiple Last-Level Cache (LLC) domains. In terms of hardware support, Linux 7.2 strengthens preparation for AMD Zen 6 processors and adds preliminary support for HDMI 2.1 FRL to the AMDGPU driver, while also integrating DC power modules. For Intel, it introduces preliminary support for Panther Lake SoC, Diamond Rapids, and Nova Lake H, along with the USB4STREAM protocol for high-speed data packet transmission. Furthermore, the kernel provides foundational support for Apple M3 devices, although full M3 Pro/Max/Ultra support is anticipated in Linux 7.3. Performance optimizations include MGLRU improvements, enhancing MongoDB performance, and accelerating reads to /proc/filesystems. Developers should pay attention to these new hardware supports and performance optimizations to improve system stability and efficiency.",
    tags_en: ["Linux 7.2", "Cache Aware Scheduling", "AMD Zen 6", "USB4STREAM", "Linux Kernel", "AMDGPU"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.2-Best-Features", lang: "EN" }
    ]
  },
  {
    id: "20260813-011",
    trackers: ["os"],
    category: "Linux",
    title: "3mdeb 更新 Dasharo 韌體：提供 MSI PRO Z690-A 與 Z790-P 主機板的開源支援與超頻功能",
    summary: "韌體諮詢公司 3mdeb 發布了更新的 Dasharo 開源韌體，支援 MSI PRO Z690-A 和 MSI PRO Z790-P 這兩款 Intel Core 桌上型主機板。Dasharo 是基於 Coreboot 的韌體，旨在提供更開放的硬體控制權。本次更新的 Dasharo firmware v1.17 (Z690-A) 和 v0.9.5 (Z790-P) 主要新增了初始 SMI Transfer Mode (STM) 支援。此外，使用者還能透過新的平台設定選單和實驗性的 CPU/超頻選項進行更深入的硬體調整。對於 DDR4 主機板，也增加了實驗性的 RAM 電壓配置支援。除了這些核心功能外，更新的韌體還加入了 EZ Debug LED 支援，並改善了透過 CMOS 電池重置、XMP 設定檔和電壓驗證/爬升等流程的預設值恢復機制。這類開源韌體更新，讓使用者能更深入地客製化和測試主機板的硬體極限，但超頻功能具有實驗性，使用時需注意可能對硬體造成的潛在風險。",
    tags: ["3mdeb", "Dasharo", "Coreboot", "MSI PRO Z690-A", "MSI PRO Z790-P", "開源韌體"],
    title_en: "3mdeb Updates Dasharo Firmware: Providing Open Source Support and Overclocking Features for MSI PRO Z690-A and Z790-P Motherboards",
    summary_en: "Firmware consultancy 3mdeb has released an updated Dasharo open-source firmware supporting the MSI PRO Z690-A and MSI PRO Z790-P Intel Core desktop motherboards. Dasharo is a Coreboot-based firmware designed to provide more open hardware control. This update to the Dasharo firmware (v1.17 for Z690-A and v0.9.5 for Z790-P) primarily adds support for Initial SMI Transfer Mode (STM). Furthermore, users can perform deeper hardware adjustments through new platform settings menus and experimental CPU/overclocking options. For DDR4 motherboards, experimental RAM voltage configuration support has also been added. Beyond these core features, the updated firmware includes EZ Debug LED support and improves the default value restoration mechanism for processes such as CMOS battery resets, XMP profile loading, and voltage validation/ramping. These open-source firmware updates allow users to customize and test the hardware limits of their motherboards in greater depth, though the overclocking features are experimental and users should be aware of potential risks to the hardware when using them.",
    tags_en: ["3mdeb", "Dasharo", "Coreboot", "MSI PRO Z690-A", "MSI PRO Z790-P", "Open-Source Firmware"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/New-Dasharo-2026-MSI-Intel-Z", lang: "EN" }
    ]
  },
  {
    id: "20260813-012",
    trackers: ["os"],
    category: "Linux",
    title: "Framework Laptop 13 Pro 搭載 Core Ultra X9 處理器：升級 Linux 核心至 7.1 或 7.2 可顯著提升效能",
    summary: "本文針對搭載 Intel Core Ultra X9 處理器的 Framework Laptop 13 Pro 進行效能基準測試，比較了在 Ubuntu 26.04 LTS 環境下，使用 Linux 7.0、Linux 7.1 和預計發布的 Linux 7.2 核心的差異。測試結果顯示，雖然所有版本都能正常運作，但升級到 Linux 7.1 或最新的 Linux 7.2 核心，能為系統帶來更佳的整體效能提升。作者指出，由於測試是在 Framework Laptop 13 Pro 上進行的，因此核心升級帶來的效能改善，預計也能應用到其他搭載 Intel Panther Lake 處理器的筆記型電腦上。這對於使用者和開發者評估 Linux 核心更新對硬體效能的影響提供了實用參考。",
    tags: ["Framework Laptop 13 Pro", "Linux 7.1", "Linux 7.2", "Core Ultra X9", "Ubuntu 26.04", "Linux 核心"],
    title_en: "Framework Laptop 13 Pro with Core Ultra X9 Processor: Upgrading the Linux Kernel to 7.1 or 7.2 Significantly Boosts Performance",
    summary_en: "This article conducts performance benchmarks on the Framework Laptop 13 Pro, which is equipped with the Intel Core Ultra X9 processor. It compares the differences between using Linux 7.0, Linux 7.1, and the upcoming Linux 7.2 kernel within an Ubuntu 26.04 LTS environment. The test results show that while all versions function correctly, upgrading to the Linux 7.1 or the latest Linux 7.2 kernel provides better overall system performance. The author notes that because the testing was conducted on the Framework Laptop 13 Pro, the performance improvements gained from the kernel upgrade are expected to apply to other laptops equipped with the Intel Panther Lake processor. This provides a practical reference for users and developers evaluating the impact of Linux kernel updates on hardware performance.",
    tags_en: ["Framework Laptop 13 Pro", "Linux 7.1", "Linux 7.2", "Core Ultra X9", "Ubuntu 26.04", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/review/framework-13-pro-linux-71-72", lang: "EN" }
    ]
  },
  {
    id: "20260813-013",
    trackers: ["os"],
    category: "Linux",
    title: "NVIDIA GeForce NOW Linux 原生應用程式正式發布，支援 Ubuntu 24.04 及後續版本",
    summary: "NVIDIA 宣布其雲端遊戲解決方案 GeForce NOW 在 Linux 平台上的原生應用程式已正式從 Beta 階段轉為正式版。此更新旨在提升效能與穩定性，為使用者提供更完善的遊戲體驗。該應用程式目前正式支援 Ubuntu 24.04 及更高版本，由於採用 Flatpak 封裝格式，預計也能在多數其他 Linux 發行版上順利運行。NVIDIA 也已建立專用的 Flatpak 儲存庫，方便使用者接收 GeForce NOW Linux 應用程式的後續更新。這項發布讓 Linux 用戶能更穩定地享受雲端遊戲服務，特別是在開學季前夕。",
    tags: ["NVIDIA", "GeForce NOW", "Linux", "Flatpak", "Ubuntu 24.04", "雲端遊戲"],
    title_en: "NVIDIA GeForce NOW Native Linux Application Officially Released, Supporting Ubuntu 24.04 and Later Versions",
    summary_en: "NVIDIA has announced that its cloud gaming solution, GeForce NOW, native application for the Linux platform has officially transitioned from Beta to General Availability. This update aims to enhance performance and stability, providing users with a more comprehensive gaming experience. The application currently officially supports Ubuntu 24.04 and higher versions. Due to its packaging in the Flatpak format, it is also expected to run smoothly on most other Linux distributions. NVIDIA has also established a dedicated Flatpak repository to facilitate future updates for the GeForce NOW Linux application. This release allows Linux users to enjoy cloud gaming services with greater stability, particularly ahead of the academic season.",
    tags_en: ["NVIDIA", "GeForce NOW", "Linux", "Flatpak", "Ubuntu 24.04", "Cloud Gaming"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GeForce-NOW-Linux-Exits-Beta", lang: "EN" }
    ]
  },
  {
    id: "20260813-014",
    trackers: ["os"],
    category: "Linux",
    title: "MSI Claw 手柄驅動程式將整合至 Linux 7.3 核心，支援 RGB 照明與按鍵重新映射",
    summary: "MSI Claw 手柄的驅動程式（hid-msi）預計將被合併到即將推出的 Linux 7.3 核心版本。此驅動程式由 Derek Clark 及其與 Valve 等相關人員開發，並已排入 HID 子系統的 \"for-next\" Git 分支。該驅動旨在為 MSI Claw 系列手持遊戲機控制器提供配置介面，使用戶能夠重新映射不同按鈕、設定各種 RGB 照明效果等。使用者空間可透過 sysfs 來操作這些選項。該驅動程式遵循 GPLv2 授權，並預計在 Linux 7.3 的合併窗口期前完成整合。此更新對於手持遊戲設備的 Linux 支援和功能擴展具有實質意義。",
    tags: ["MSI Claw", "Linux 7.3", "hid-msi", "Linux 核心", "手持遊戲機", "GPLv2"],
    title_en: "MSI Claw Controller Driver to be Integrated into Linux 7.3 Kernel, Supporting RGB Lighting and Key Remapping",
    summary_en: "The driver for the MSI Claw controller (hid-msi) is expected to be merged into the upcoming Linux 7.3 kernel version. Developed by Derek Clark and collaborators, including those associated with Valve, the driver has been placed in the 'for-next' branch of the HID subsystem. This driver aims to provide a configuration interface for the MSI Claw series handheld gaming controllers, allowing users to remap various buttons and set various RGB lighting effects. These options can be manipulated in user space via sysfs. The driver adheres to the GPLv2 license and is anticipated to be integrated before the Linux 7.3 merge window. This update is significant for the Linux support and functional expansion of handheld gaming devices.",
    tags_en: ["MSI Claw", "Linux 7.3", "hid-msi", "Linux Kernel", "Handheld Gaming Console", "GPLv2"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/MSI-Claw-Gamepad-Linux-7.3", lang: "EN" }
    ]
  },
  {
    id: "20260813-015",
    trackers: ["os"],
    category: "Linux",
    title: "Microsoft Azure Linux 3.0.20260809 發布，包含超過 233 個 CVE 修補程式",
    summary: "Microsoft 發布了 Azure Linux 3.0.20260809 版本，這是一個針對 AI 時代的穩定生產系列更新。雖然 Microsoft 正在開發基於 Fedora 的 Azure Linux 4.0，但 3.0 版本仍是目前穩定的使用版本。本次更新包含超過 233 個安全修補程式，涵蓋了多個開源套件的近期 CVE。該版本預設仍使用 Linux 6.6 LTS 核心，並新增了如啟用 FSCRYPT 等變更。受修補的套件包括 BusyBox、Curl、Docker、Kubernetes、Perl、Python、Prometheus、Rust、PHP、Valkey、XWayland 等眾多開源組件。使用者應透過 GitHub 查閱完整的修補程式清單，以確保系統安全。建議所有使用 Azure Linux 3.0 的環境，應立即升級至 3.0.20260809 版本，以修補多個關鍵的安全性漏洞。",
    tags: ["Azure Linux", "Microsoft", "CVE", "Linux 6.6 LTS", "安全更新", "開源套件"],
    title_en: "Microsoft Azure Linux 3.0.20260809 Released, Including Over 233 CVE Patches",
    summary_en: "Microsoft has released Azure Linux 3.0.20260809, a stable production series update designed for the AI era. Although Microsoft is developing Azure Linux 4.0 based on Fedora, the 3.0 version remains the current stable release. This update includes over 233 security patches, covering recent CVEs across multiple open-source packages. The version continues to default to the Linux 6.6 LTS kernel and introduces changes such as enabling FSCRYPT. Patched packages include numerous open-source components such as BusyBox, Curl, Docker, Kubernetes, Perl, Python, Prometheus, Rust, PHP, Valkey, and XWayland. Users should consult the complete patch list on GitHub to ensure system security. All environments using Azure Linux 3.0 are advised to upgrade immediately to the 3.0.20260809 version to patch multiple critical security vulnerabilities.",
    tags_en: ["Azure Linux", "Microsoft", "CVE", "Linux 6.6 LTS", "Security Update", "Open-Source Packages"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Azure-Linux-3.0.20260809", lang: "EN" }
    ]
  },
  {
    id: "20260813-016",
    trackers: ["os"],
    category: "Linux",
    title: "Intel XPU Manager 2.1 發布，強化 Arc Pro 顯示卡監控與管理功能",
    summary: "Intel 發布了 XPU Manager 2.1 版本，這是一個用於 Linux 和 Windows 系統的開源工具，主要用於監控和管理 Intel Arc Pro 顯示卡。該工具透過 xpu-smi 指令及相關元件，協助使用者掌握設備利用率及其他關鍵指標。本次 2.1 版本主要包含多項 Bug 修復，但新增了重要的 xpu-smi topology --p2p 子指令。此功能能夠輸出一個 NxN 矩陣，詳細顯示每一對 GPU 是否支援 peer read、peer write、MDF fabric、atomics 或 PCIe 存取等功能。此外，其他子指令也進行了小幅優化。開發者可透過 GitHub 獲取完整的變更清單，並可取得針對 Windows 和 Ubuntu Linux 的預編譯二進位檔。",
    tags: ["Intel", "XPU Manager", "Arc Pro", "xpu-smi", "Linux", "Windows"],
    title_en: "Intel XPU Manager 2.1 Released, Enhancing Arc Pro GPU Monitoring and Management Features",
    summary_en: "Intel has released XPU Manager 2.1, an open-source tool designed for Linux and Windows systems, primarily used for monitoring and managing Intel Arc Pro graphics cards. The tool utilizes the xpu-smi command and related components to help users track device utilization and other key metrics. While this 2.1 version includes multiple bug fixes, it introduces the important xpu-smi topology --p2p subcommand. This feature can output an NxN matrix, detailing whether every pair of GPUs supports functions such as peer read, peer write, MDF fabric, atomics, or PCIe access. Additionally, other subcommands have received minor optimizations. Developers can obtain the full changelog via GitHub, and pre-compiled binaries are available for Windows and Ubuntu Linux.",
    tags_en: ["Intel", "XPU Manager", "Arc Pro", "xpu-smi", "Linux", "Windows"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Intel-XPU-Manager-2.1", lang: "EN" }
    ]
  },
  {
    id: "20260813-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Rsync 3.5 重磅發布，修補 33 個安全漏洞，強化路徑處理與守護程序協定",
    summary: "廣泛使用的開源遠端同步軟體 Rsync 發布了 3.5 版本，包含 33 個重要的安全修補。根據 Rsync 的官方公告，這次更新被描述為「非凡的發布」，主要修補範圍集中在路徑處理（path handling）和守護程序協定（daemon protocol）相關程式碼。這些安全漏洞包括透過符號連結（symlinked）操作員提供的輸入檔案，導致任意檔案讀取或傳輸塑形（transfer-shaping）；以及透過符號連結操作員提供的輸出路徑，可能導致任意檔案寫入或權限提升（privilege escalation）。由於修補了大量高風險的 CVE，資安人員應立即升級至 Rsync 3.5 版本，以確保系統的資料完整性與權限安全。自行編譯的用戶可透過 Samba.org 取得最新原始碼。",
    tags: ["Rsync", "Rsync 3.5", "安全漏洞", "路徑處理", "Linux", "CVE"],
    title_en: "Rsync 3.5 Major Release Patches 33 Security Vulnerabilities, Enhances Path Handling and Daemon Protocol",
    summary_en: "Rsync, a widely used open-source remote synchronization utility, has released version 3.5, which includes 33 critical security patches. According to the official Rsync announcement, this update is described as an \"extraordinary release,\" with the patches primarily focused on path handling and daemon protocol related code. These security vulnerabilities include arbitrary file read or transfer-shaping caused by input files provided by symlink operations, and potential arbitrary file write or privilege escalation resulting from output paths provided by symlink operations. Due to the patching of numerous high-risk CVEs, security personnel are advised to immediately upgrade to Rsync 3.5 to ensure system data integrity and permission security. Users compiling from source can obtain the latest source code from Samba.org.",
    tags_en: ["Rsync", "Rsync 3.5", "Vulnerability", "Path Handling", "Linux", "CVE"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088759", lang: "EN" },
      { name: "Phoronix", url: "https://phoronix.com/news/Rsync-3.5", lang: "EN" }
    ]
  },
  {
    id: "20260813-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "研究發現 Loongson 處理器存在 L1 快取洩漏漏洞 LoongLeak 攻擊可竊取敏感資料",
    summary: "德國 Helmholtz 中心研究人員發現中國 Loongson 晶片組的處理器存在「快取洩漏」（leaky caches）的硬體漏洞，命名為 LoongLeak。該漏洞源於 LoongArch 指令集架構（ISA）中某個指令在特定情況下會將記憶體暫存器 32 位元的資料置於「不確定」狀態，而這部分資料可能來自無法隔離的 L1 資料快取。攻擊者可以利用此特性，在不特權使用者空間、容器或虛擬機環境下，洩漏其他應用程式或作業系統的敏感資料。\n研究人員展示了利用此漏洞的案例，包括從核心層恢復全盤 AES 金鑰、從使用者空間取得部分 root 密碼雜湊，甚至繞過 ASLR 和堆疊金絲雀等傳統軟體防禦機制。更嚴重的是，LoongLeak 甚至可以跨越虛擬機邊界，從 VM 內部洩漏主機資料。\n雖然該漏洞的洩漏是「架構性」的，且無法透過軟體修補，但 Loongson 已在更新的 3A6000 型號處理器中修復了此缺陷。修補措施的性能影響在最差情況下僅為 1.4%。然而，由於 Loongson 晶片目前主要用於中國市場，且政府大力推動使用本地晶片，此漏洞的潛在影響範圍仍值得高度關注。",
    tags: ["Loongson", "LoongArch", "L1 快取", "LoongLeak", "硬體漏洞", "晶片安全"],
    title_en: "Research Discovers L1 Cache Leak Vulnerability in Loongson Processors: LoongLeak Attack Can Steal Sensitive Data",
    summary_en: "Researchers at the German Helmholtz Centre discovered a hardware vulnerability, named LoongLeak, in processors from China's Loongson chipset. This vulnerability stems from a specific instruction within the LoongArch Instruction Set Architecture (ISA) that, under certain conditions, places 32 bits of memory register data into an 'indeterminate' state. This data may originate from the L1 data cache, which cannot be isolated. Attackers can exploit this characteristic to leak sensitive data from other applications or operating systems, even when operating in unprivileged user space, containers, or virtual machine environments. The researchers demonstrated exploitation cases, including recovering full disk AES keys from the kernel layer, obtaining partial root password hashes from user space, and even bypassing traditional software defenses like ASLR and stack canaries. More critically, LoongLeak can even cross virtual machine boundaries, leaking host data from within a VM. Although the vulnerability is 'architectural' and cannot be fixed by software patches, Loongson has addressed this flaw in its updated 3A6000 model processor. The performance impact of the fix is only 1.4% in the worst-case scenario. However, given that Loongson chipsets are currently primarily used in the Chinese market and the government is strongly promoting the use of local chips, the potential impact of this vulnerability remains a matter of high concern.",
    tags_en: ["Loongson", "LoongArch", "L1 Cache", "LoongLeak", "Hardware Vulnerability", "Chip Security"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/13/chinese-loongson-processors-have-leaky-caches-researchers-find/5287137", lang: "EN" }
    ]
  },
  {
    id: "20260813-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Palo Alto Networks Prisma Access Agent 存在 Linux 檔案路徑解析漏洞 (CVE-2026-0291)",
    summary: "Palo Alto Networks 的 Prisma Access Agent 在 Linux 平台上存在一個不當的連結解析（improper link resolution）漏洞，該漏洞允許低權限的本地使用者執行攻擊。攻擊者利用此漏洞可以在有限的範圍內刪除系統檔案，並禁用 Prisma Access Agent 的功能。值得注意的是，此漏洞僅限於 Linux 平台，而針對 macOS、Windows、iOS、Android 和 Chrome OS 的 Prisma Access Agent 版本並未受影響。雖然文章提供了 CVSS 4.0 的評估向量，但 NVD 尚未提供完整的評估資訊。建議受影響的 Linux 平台使用者應留意 Palo Alto Networks 的官方安全公告，並儘快進行修補或升級 Agent 版本，以防止系統檔案被惡意刪除或服務被禁用。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0291", "Linux", "不當連結解析"],
    title_en: "Palo Alto Networks Prisma Access Agent Vulnerability in Linux File Path Resolution (CVE-2026-0291)",
    summary_en: "The Prisma Access Agent from Palo Alto Networks contains an improper link resolution vulnerability on the Linux platform. This vulnerability allows low-privilege local users to execute an attack. By exploiting this flaw, an attacker can delete system files within a limited scope and disable the functionality of the Prisma Access Agent. Notably, this vulnerability is limited to the Linux platform, and Prisma Access Agent versions for macOS, Windows, iOS, Android, and Chrome OS are not affected. Although the article provides a CVSS 4.0 assessment vector, NVD has not yet provided complete assessment information. Affected Linux platform users are advised to monitor official Palo Alto Networks security advisories and apply patches or upgrade the Agent version promptly to prevent malicious deletion of system files or service disruption.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0291", "Linux", "Improper Link Resolution"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0291", lang: "EN" }
    ]
  },
  {
    id: "20260813-020",
    trackers: ["security"],
    category: "重大事件",
    title: "駭客利用 Safe Mode 關閉 EDR 進行資料竊取：Akira 勒索軟體攻擊事件分析",
    summary: "本事件報告揭露了 Akira 勒索軟體相關的攻擊手法，駭客透過未啟用多因素驗證（MFA）的 SonicWall VPN 設備取得初始存取權。攻擊者隨後利用 RDP 存取網域控制器，進行 Active Directory 偵察，並竊取了憑證及檔案。在攻擊過程中，駭客使用 AnyDesk 強制將受害主機進入「安全模式（Safe Mode with Networking）」，成功關閉了 Huntress EDR 代理和 Microsoft Defender 的即時保護功能。在安全模式下，攻擊者雖然無法成功執行主勒索軟體 payload (akira.exe)，但仍能進行資料竊取，並將資料上傳至外部 S3 儲存桶。儘管攻擊者在安全模式下成功地將 AnyDesk 加入了系統登錄檔，但最終在攻擊者重啟系統至正常模式後，Defender 才能恢復即時保護並隔離惡意檔案。安全專家建議，除了強制為所有 VPN 帳戶啟用 MFA 外，還應監控 Safe Mode 的啟動配置變更，並注意遠端存取工具是否被加入安全模式的服務登錄檔。",
    tags: ["Akira", "EDR", "Safe Mode", "SonicWall VPN", "MFA", "勒索軟體"],
    title_en: "Hackers Exploit Safe Mode to Disable EDR for Data Exfiltration: Analysis of Akira Ransomware Attack",
    summary_en: "This incident report reveals the attack methodology associated with Akira ransomware. The attackers gained initial access through a SonicWall VPN device that did not enforce multi-factor authentication (MFA). The attackers subsequently used RDP to access the domain controller, performing Active Directory reconnaissance and exfiltrating credentials and files. During the attack, the hackers used AnyDesk to force the victim machine into 'Safe Mode with Networking,' successfully disabling the Huntress EDR agent and Microsoft Defender's real-time protection. While in Safe Mode, the attackers were unable to execute the main ransomware payload (akira.exe), but they were still able to exfiltrate data and upload it to an external S3 bucket. Although the attackers successfully added AnyDesk to the system registry in Safe Mode, Defender was able to restore real-time protection and quarantine the malicious file after the attacker rebooted the system to normal mode. Security experts recommend, in addition to mandating MFA for all VPN accounts, monitoring for Safe Mode startup configuration changes and paying attention to whether remote access tools are added to the Safe Mode service registry.",
    tags_en: ["Akira", "EDR", "Safe Mode", "SonicWall VPN", "MFA", "Ransomware"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/akira-hackers-disable-edr-with-safe-mode-steal-data-but-fail-to-encrypt", lang: "EN" }
    ]
  },
  {
    id: "20260813-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全公告：s390/zcrypt 驗證 CCA ECC 私鑰時長度檢查漏洞修復",
    summary: "本公告揭露了一個影響 Linux 核心的 s390/zcrypt 模組漏洞。該漏洞存在於 `cca_ecc2protkey()` 函式中，當從 key token 的長度欄位直接推導出 CPRB 參數區塊的副本長度時，若未進行充分的長度驗證，可能導致安全問題。修復措施要求在 key token 的長度超過參數區塊可用空間時，應及早拒絕該請求。此漏洞的修復已包含在 Linux 核心的特定版本更新中。建議所有使用 Linux 核心的系統管理員，應立即升級至修補後的版本，以確保系統的加密操作安全性和完整性。由於此為核心層面的漏洞，修補建議應透過系統的標準更新機制進行。",
    tags: ["Linux 核心", "s390", "zcrypt", "CCA ECC", "NVD", "核心漏洞"],
    title_en: "Linux Kernel Security Advisory: Fix for Length Check Vulnerability in s390/zcrypt Validation of CCA ECC Private Keys",
    summary_en: "This advisory reveals a vulnerability in the s390/zcrypt module affecting the Linux kernel. The vulnerability resides in the `cca_ecc2protkey()` function. If the length of the CPRB parameter block is derived directly from the key token's length field without sufficient length validation, it could lead to a security issue. The fix requires that the request be rejected early if the key token's length exceeds the available space in the parameter block. This vulnerability fix has been included in specific updates to the Linux kernel. System administrators using the Linux kernel are advised to immediately upgrade to the patched version to ensure the security and integrity of the system's cryptographic operations. Since this is a kernel-level vulnerability, the recommended patch should be applied through the system's standard update mechanism.",
    tags_en: ["Linux Kernel", "s390", "zcrypt", "CCA ECC", "NVD", "Kernel Vulnerability"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68451", lang: "EN" }
    ]
  },
  {
    id: "20260813-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心安全漏洞：s390/zcrypt 驗證 AES 加密金鑰長度，防止資訊洩漏",
    summary: "本漏洞涉及 Linux 核心的 s390/zcrypt 模組，具體為 `cca_cipher2protkey()` 函式。該函式在推導 CPRB 參數區塊時，直接從金鑰 token 的長度欄位獲取副本長度，若未進行適當的長度驗證，可能導致安全問題。攻擊者可能利用此漏洞，在金鑰 token 長度超過參數區塊可用空間時，無法及早拒絕請求，從而可能導致資訊洩漏或系統不穩定。此漏洞的修補已在 Linux 核心中完成，建議使用者應將核心版本更新至修補後的版本，以確保 `drivers/s390/crypto/zcrypt_ccamisc.c` 檔案的安全性。修補建議是更新到包含修復程式碼的 Linux 核心版本。",
    tags: ["Linux 核心", "s390", "zcrypt", "CVE-2026-68452", "Linux 核心更新"],
    title_en: "Linux Kernel Security Vulnerability: s390/zcrypt Validation of AES Key Length Prevents Information Leakage",
    summary_en: "This vulnerability affects the s390/zcrypt module within the Linux kernel, specifically within the `cca_cipher2protkey()` function. This function retrieves the copy length directly from the key token's length field when deriving the CPRB parameter block. If proper length validation is not performed, it could lead to a security issue. An attacker might exploit this vulnerability by causing the system to fail to reject the request early when the key token length exceeds the available space in the parameter block, potentially leading to information leakage or system instability. The fix for this vulnerability has been implemented in the Linux kernel. Users are advised to update their kernel version to the patched version to ensure the security of the `drivers/s390/crypto/zcrypt_ccamisc.c` file. The recommended patch is to update to a Linux kernel version containing the corrected code.",
    tags_en: ["Linux Kernel", "s390", "zcrypt", "CVE-2026-68452", "Linux Kernel Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68452", lang: "EN" }
    ]
  },
  {
    id: "20260813-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 s390/zcrypt 修正緩衝區過度讀取漏洞，強化 CCA Token 驗證機制",
    summary: "本漏洞存在於 Linux 核心的 s390/zcrypt 組件中，涉及 cca_cipher2protkey 函數。攻擊者若能控制 CCA Token 結構中的 `len` 欄位，可能將其設定為超過實際緩衝區大小，導致在操作過程中發生緩衝區過度讀取（buffer over-read）。這可能導致核心崩潰（kernel crash），或透過向加密卡發送請求時，洩露核心記憶體內容。此外，攻擊者若利用極小的 `len` 值，也可能觸發緩衝區不足（buffer under-run）的狀況，產生類似的影響。修補措施要求在所有 `cca_check_sec*token()` 函數中，增加對實際金鑰緩衝區大小和 Token 長度的驗證。同時，在 `cca_gencipherkey()` 函數中，也增加了對返回金鑰大小的檢查，確保金鑰緩衝區長度至少等於 Token 結構體大小，並且 Token 內的 `key len` 欄位必須符合合理的範圍。",
    tags: ["Linux 核心", "s390/zcrypt", "CCA Token", "緩衝區過度讀取", "核心安全"],
    title_en: "Linux Kernel s390/zcrypt Fixes Buffer Over-read Vulnerability, Strengthens CCA Token Validation Mechanism",
    summary_en: "This vulnerability exists in the s390/zcrypt component of the Linux kernel, specifically involving the cca_cipher2protkey function. If an attacker can control the `len` field within the CCA Token structure, they might set it to exceed the actual buffer size, leading to a buffer over-read during operation. This could potentially cause a kernel crash or leak kernel memory contents when sending requests to the cryptographic card. Furthermore, if an attacker utilizes an extremely small `len` value, it might trigger a buffer under-run condition, resulting in similar impacts. The patch requires adding validation checks for both the actual key buffer size and the Token length in all `cca_check_sec*token()` functions. Additionally, checks have been added to the `cca_gencipherkey()` function to ensure the returned key size is at least equal to the Token structure size, and that the `key len` field within the Token remains within a reasonable range.",
    tags_en: ["Linux Kernel", "s390/zcrypt", "CCA Token", "Buffer Over-read", "Kernel Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68453", lang: "EN" }
    ]
  },
  {
    id: "20260813-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 KVM 漏洞修復：s390 架構處理 AIF 啟用時的 IRQ 註冊問題",
    summary: "本漏洞涉及 Linux 核心的 KVM 虛擬化元件，特別是針對 s390 架構的 PCI 處理邏輯。當虛擬機（guest）嘗試註冊 IRQ（中斷請求）時，若未指定摘要位元（summary bit），可能導致相關的 GAITE 錯誤地儲存了 `virt_to_phys(page_address(NULL))`，而非正確的 0 值，這可能造成系統不穩或安全風險。此問題已在 Linux 核心中得到修復。修補建議是將核心版本更新至包含修復程式的最新版本，以確保 KVM 虛擬化環境的安全性與穩定性。由於原文未提供 CVSS 分數或具體影響範圍，建議系統管理員應參考官方發布的修補指南進行升級。",
    tags: ["Linux 核心", "KVM", "s390", "PCI", "IRQ", "CVE"],
    title_en: "Linux Kernel KVM Vulnerability Fix: Addressing IRQ Registration Issues in s390 Architecture with AIF Enabled",
    summary_en: "This vulnerability affects the KVM virtualization component of the Linux kernel, specifically concerning PCI handling logic for the s390 architecture. When a virtual machine (guest) attempts to register an IRQ (Interrupt Request) without specifying a summary bit, it may cause the relevant GAITE to incorrectly store `virt_to_phys(page_address(NULL))` instead of the correct zero value. This could potentially lead to system instability or security risks. This issue has been addressed in the Linux kernel. The recommended patch is to update the kernel version to the latest release containing the fix, ensuring the security and stability of the KVM virtualization environment. As the original text does not provide a CVSS score or specific impact scope, system administrators are advised to refer to official patch guides for upgrading.",
    tags_en: ["Linux Kernel", "KVM", "s390", "PCI", "IRQ", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-68454", lang: "EN" }
    ]
  },
  {
    id: "20260813-025",
    trackers: ["security"],
    category: "法規與標準",
    title: "Google Cloud 宣布在臺灣啟用 SecOps 本地執行個體，強化資安數據主權與合規性",
    summary: "為應對各國日益增長的數位主權（Digital Sovereignty）需求，Google Cloud 宣布在臺灣雲端區域（asia-east1）正式啟用 Google 資安維運平臺（Google Security Operations，SecOps）的本地執行個體。此舉讓用戶可以將安全遙測資料儲存和處理於臺灣本地，特別有助於關注資安合規性或監管要求的組織。Google SecOps 接收來自各類資安設備與控制系統的安全遙測資料，提供統一的資安管理視野。Google Cloud 台灣技術總經理林書平指出，此舉是因應臺灣企業對於資料落地（Local data residency）嚴格要求的市場趨勢。用戶無論是新設定資料，都會儲存在臺灣雲端區域；若為既有內部環境部署 SOC 系統的用戶，則可透過 Google Cloud 專線網路將資料上傳至臺灣 SecOps，實現資料整併，且不會中斷現有服務。此舉展現了 Google 對臺灣市場的重視與長期承諾。",
    tags: ["Google Cloud", "SecOps", "數位主權", "資料落地", "asia-east1", "資安合規性"],
    title_en: "Google Cloud Activates Local SecOps Instance in Taiwan to Enhance Data Sovereignty and Compliance",
    summary_en: "To address the growing global demand for Digital Sovereignty, Google Cloud has announced the official activation of the Google Security Operations (SecOps) local instance in the Taiwan cloud region (asia-east1). This allows users to store and process security telemetry data locally within Taiwan, which is particularly beneficial for organizations concerned with security compliance or regulatory requirements. Google SecOps receives security telemetry data from various security devices and control systems, providing a unified security management view. Lin Shu-ping, Google Cloud Taiwan Technical General Manager, noted that this move responds to the market trend of strict data residency requirements from Taiwanese enterprises. Whether setting up new data or for users who have existing on-premises SOC systems, data can be stored in the Taiwan cloud region. Furthermore, users can upload data to Taiwan SecOps via Google Cloud dedicated networking to achieve data consolidation without interrupting existing services. This move demonstrates Google's commitment and focus on the Taiwan market.",
    tags_en: ["Google Cloud", "SecOps", "Digital Sovereignty", "Data Residency", "asia-east1", "Security Compliance"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178109", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-026",
    trackers: ["security"],
    category: "法規與標準",
    title: "美國OMB發布新版日誌成熟度模型：指導聯邦機構及企業強化資安日誌管理",
    summary: "美國行政管理和預算局（OMB）發布M-26-14備忘錄，提出一套新的日誌成熟度模型，用於評估聯邦機構資訊系統的日誌管理水平。AWS解析此模型後，建議企業資安團隊可參考此框架，規劃日誌的蒐集、保存與運用策略。該模型包含五項評估項目：資產清冊可視性（Inventory Visibility）、日誌蒐集涵蓋率（Collection Coverage）、日誌蒐集作業（Collection Operations）、資料保存（Data Retention）及日誌管理（Log Management）。值得注意的是，整體成熟度由五項評估項目中最低的等級決定。OMB亦訂定最低日誌基準，要求聯邦機構必須蒐集支援身分識別、網路連線追蹤、資源存取與權限變更追蹤、IT／OT／IoT設備異動監控及異常活動偵測等關鍵資安日誌。文章強調，日誌管理的重點已從單純的日誌數量，轉向日誌能否實際支援資安監控、異常活動偵測及事件調查。",
    tags: ["OMB", "M-26-14", "日誌管理", "資安成熟度", "IT/OT/IoT", "資安監控"],
    title_en: "U.S. OMB Releases New Log Maturity Model: Guiding Federal Agencies and Enterprises to Strengthen Security Log Management",
    summary_en: "The U.S. Office of Management and Budget (OMB) released M-26-14, a memorandum proposing a new log maturity model to assess the log management level of federal agency information systems. After analyzing this model, AWS suggests that enterprise security teams can reference this framework to plan strategies for log collection, retention, and utilization. The model includes five assessment criteria: Inventory Visibility, Collection Coverage, Collection Operations, Data Retention, and Log Management. Notably, the overall maturity level is determined by the lowest grade among the five assessment criteria. The OMB also established minimum log standards, requiring federal agencies to collect critical security logs supporting identity, network connection tracking, resource access and privilege change tracking, IT/OT/IoT device change monitoring, and anomaly detection. The article emphasizes that the focus of log management has shifted from merely the volume of logs to whether the logs can actually support security monitoring, anomaly detection, and incident investigation.",
    tags_en: ["OMB", "M-26-14", "Log Management", "Security Maturity", "IT/OT/IoT", "Security Monitoring"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178096", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-027",
    trackers: ["security"],
    category: "法規與標準",
    title: "FCC提案限制外國軍用級無人機零組件進口：影響DJI等品牌產品銷售",
    summary: "美國聯邦通訊委員會（FCC）透過公共安全與國土安全局（PSHSB）及工程與技術辦公室（OET）提出提案，旨在限制特定外國製軍用級無人機系統及關鍵零組件持續進口及銷售。提案將納入「Covered List」的產品，被認定對美國國家安全構成風險，將無法取得FCC設備授權。根據提案，軍用零組件定義包含重量超過55磅（25公斤）、具備熱成像、光達（LiDAR）、整合武器或集群控制系統等功能。雖然FCC強調民間和一般商用用戶不受影響，但此禁令可能導致如DJI Air 3S和Mini 5 Pro等外國品牌熱門消費機型無法在美國銷售，並可能使現有使用者未來難以取得原廠零組件。此提案公開徵求意見至9月2日，一旦通過將在公告後180日施行。",
    tags: ["FCC", "無人機", "LIDAR", "軍用級", "國家安全", "DJI"],
    title_en: "FCC Proposes Restrictions on Importing Foreign Military-Grade Drone Components: Impact on Sales of Brands like DJI",
    summary_en: "The Federal Communications Commission (FCC), through the Public Safety and Homeland Security Bureau (PSHSB) and the Office of Engineering and Technology (OET), has proposed regulations aimed at restricting the continuous import and sale of certain foreign military-grade drone systems and critical components. Products included in the 'Covered List' and deemed to pose a risk to U.S. national security will be unable to obtain FCC equipment authorization. According to the proposal, military components are defined as those exceeding 55 pounds (25 kg) in weight, or possessing features such as thermal imaging, LiDAR, integrated weaponry, or swarm control systems. Although the FCC emphasizes that civilian and general commercial users will not be affected, this ban could prevent popular foreign consumer models, such as the DJI Air 3S and Mini 5 Pro, from being sold in the U.S., and may also make it difficult for current users to obtain original manufacturer components in the future. Public comments on this proposal are requested until September 2nd, and if passed, it will take effect 180 days after announcement.",
    tags_en: ["FCC", "Drone", "LiDAR", "Military-Grade", "National Security", "DJI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178093", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-028",
    trackers: ["eu_cra", "security"],
    category: "調和標準",
    title: "ETSI 發布 17 項草案標準，協助製造商符合歐盟《網路韌性法案》要求",
    summary: "為應對歐盟《網路韌性法案》（Cyber Resilience Act, CRA）的實施，ETSI 宣布開放 17 項垂直領域的最終草案標準，目前正在進行公開諮詢。這些標準旨在成為「協調標準」（Harmonised Standards），為製造商提供一套被認可的、證明其產品符合該法規的途徑，即「符合性推定」（presumption of conformity）。這些標準涵蓋了包括密碼管理器、防毒軟體、智慧家庭助理、連網玩具和穿戴式裝置等所有帶有數位元件的連網產品。ETSI 強調，雖然 CRA 規定了市場和製造商必須達成的目標，但標準化組織的角色是詳細說明如何透過技術標準來實現合規。ETSI 提醒，所有帶有數位元件的產品，包括製造商、進口商、經銷商和服務提供者，都必須在 2027 年底前符合 CRA 的要求。ETSI 透過這些標準，協助企業將法規要求轉化為實務指引，確保整個歐盟範圍內的標準化實施。",
    tags: ["ETSI", "Cyber Resilience Act", "CRA", "協調標準", "EN 304 xxx", "歐盟法規"],
    title_en: "ETSI Releases 17 Draft Standards to Help Manufacturers Comply with EU Cyber Resilience Act",
    summary_en: "To address the implementation of the EU Cyber Resilience Act (CRA), ETSI has announced 17 final draft standards across various domains for public consultation. These standards are designed to serve as 'Harmonised Standards,' providing manufacturers with a recognized pathway to demonstrate that their products comply with the regulation, thereby establishing a 'presumption of conformity.' These standards cover all connected products containing digital components, including password managers, antivirus software, smart home assistants, connected toys, and wearable devices. ETSI emphasizes that while the CRA sets the goals that market players and manufacturers must achieve, the role of standardization bodies is to detail how compliance can be achieved through technical standards. ETSI reminds that all products containing digital components—including manufacturers, importers, distributors, and service providers—must comply with the CRA requirements by the end of 2027. Through these standards, ETSI helps businesses translate regulatory requirements into practical guidelines, ensuring standardized implementation across the entire EU.",
    tags_en: ["ETSI", "Cyber Resilience Act", "CRA", "Harmonised Standards", "EN 304 xxx", "EU Regulations"],
    sources: [
      { name: "ETSI 資安技術", url: "https://etsi.org/newsroom/press-releases/etsi-launches-approval-process-for-17-european-standards-supporting-the-cyber-resilience-act", lang: "EN" }
    ]
  },
  {
    id: "20260813-029",
    trackers: ["os"],
    category: "Windows",
    title: "Windows Phone Link 應用程式出現記憶體錯誤，疑似因堆疊溢位或軟體衝突",
    summary: "本文報導了一起在公共顯示器上觀察到的 Windows Phone Link 應用程式錯誤。該錯誤通常與運行 Windows 的軟體在堆疊記憶體處理上出現失誤有關，可能導致堆疊溢位（stack overflow）、軟體衝突或記憶體不足。Phone Link 旨在將 Windows PC 與 Android 或 iPhone 連接，讓用戶可以在桌面端管理通知、發送和接收訊息，甚至處理通話。雖然該服務通常資源消耗不高，但這次的故障顯示其運行環境出現了異常。一般修復方法是重新啟動設備；對於技術人員，則可以嘗試診斷並修復，但文章暗示，如果系統最初設置得當，此類問題應能避免。建議用戶遇到此類應用程式異常時，應嘗試重新啟動系統以解決問題。",
    tags: ["Windows Phone Link", "Windows", "堆疊溢位", "記憶體錯誤", "軟體衝突"],
    title_en: "Windows Phone Link App Exhibits Memory Error, Suspected Due to Stack Overflow or Software Conflict",
    summary_en: "This article reports an error observed in the Windows Phone Link application on public displays. This error is typically related to mismanaged stack memory processing by software running on Windows, potentially leading to a stack overflow, software conflict, or memory shortage. Phone Link is designed to connect a Windows PC with an Android or iPhone, allowing users to manage notifications, send and receive messages, and even handle calls from the desktop. Although this service usually has low resource consumption, this failure indicates an anomaly in its operating environment. The general fix is to restart the device; for technical personnel, diagnosis and repair can be attempted, but the article suggests that such issues should be preventable if the system is initially set up correctly. Users are advised to attempt a system restart when encountering such application anomalies to resolve the issue.",
    tags_en: ["Windows Phone Link", "Windows", "Stack Overflow", "Memory Error", "Software Conflict"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/13/everything-is-better-with-pickles-except-windows/5284978", lang: "EN" }
    ]
  },
  {
    id: "20260813-030",
    trackers: ["os"],
    category: "Windows",
    title: "Microsoft 宣布 Copilot 整合與新 Logo 規劃，並提供 Windows 11 鍵盤重新映射與停用選項",
    summary: "本文討論了 Microsoft 推出 Copilot 專用鍵（Copilot key）後的發展與後續更新。Microsoft 已正式確認將 Copilot 與 Microsoft 365 Copilot 進行整合，讓使用者只需使用單一的 Copilot Super app。更重要的是，Microsoft 正在逐步推行 Copilot 的新 Logo，該設計將會出現在新的應用程式和未來的 PC 硬體上。雖然 Copilot 專用鍵最初旨在提升 AI 體驗，但它曾取代部分裝置上的 Right Ctrl 或 Context Menu 鍵，導致部分使用輔助技術（如螢幕閱讀器）的用戶工作流程受影響。為了解決此問題，Microsoft 宣布，未來的 Windows 11 更新將會在「設定 > Bluetooth & devices > Keyboard」中新增開關，允許用戶將 Copilot 鍵重新映射為 Ctrl 或 Context Menu 鍵，甚至提供「Do nothing for Copilot key」的選項，讓用戶可以完全停用此實體按鍵。",
    tags: ["Microsoft", "Copilot", "Windows 11", "Copilot key", "Windows Update", "Context Menu"],
    title_en: "Microsoft Announces Copilot Integration and New Logo Design, Offering Windows 11 Keyboard Remapping and Disabling Options",
    summary_en: "This article discusses the evolution and subsequent updates following the introduction of the Copilot dedicated key. Microsoft has officially confirmed the integration of Copilot with Microsoft 365 Copilot, allowing users to utilize a single Copilot Super app. More importantly, Microsoft is gradually rolling out a new Copilot logo design, which will appear on new applications and future PC hardware. Although the Copilot dedicated key was initially designed to enhance the AI experience, it replaced the Right Ctrl or Context Menu key on some devices, disrupting the workflow for users who rely on assistive technologies (such as screen readers). To address this issue, Microsoft announced that future Windows 11 updates will add a toggle under 'Settings > Bluetooth & devices > Keyboard,' allowing users to remap the Copilot key to Ctrl or Context Menu, and even providing a 'Do nothing for Copilot key' option, enabling users to completely disable this physical key.",
    tags_en: ["Microsoft", "Copilot", "Windows 11", "Copilot key", "Windows Update", "Context Menu"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/13/slapping-windows-11-pcs-with-a-copilot-key-was-a-terrible-idea-and-its-already-outdated-as-microsoft-just-released-a-new-icon", lang: "EN" }
    ]
  },
  {
    id: "20260813-031",
    trackers: ["os", "security"],
    category: "Windows",
    title: "微軟警告：因 AI 釣魚威脅，建議淘汰 SMS/語音驗證，並將逐步在 Entra ID 禁用",
    summary: "微軟透過電子郵件警告 IT 管理員，由於 AI 輔助的釣魚攻擊和日益增加的安全威脅，應停止使用基於 SMS 或語音的身份驗證方式。微軟已確認，該公司將從 2027 年 2 月 1 日起，開始為 Entra ID 的使用者禁用這些驗證方法。此外，擁有個人 Microsoft 帳戶的普通使用者也將受到影響。這項變動旨在提升帳號安全層級，推動使用者轉向更安全的 Passkeys 驗證方式，以應對現代複雜的網路攻擊。",
    tags: ["Microsoft", "Entra ID", "Passkeys", "SMS 驗證", "AI 釣魚", "身份驗證"],
    title_en: "Microsoft Warns: Due to AI Phishing Threats, Recommends Phasing Out SMS/Voice Authentication and Will Gradually Disable It in Entra ID",
    summary_en: "Microsoft has warned IT administrators via email that due to AI-assisted phishing attacks and increasing security threats, they should cease using SMS or voice-based identity verification methods. Microsoft has confirmed that starting February 1, 2027, the company will begin disabling these authentication methods for Entra ID users. Furthermore, general users with personal Microsoft accounts will also be affected. This change aims to elevate account security levels and encourage users to transition to the more secure Passkeys authentication method to counter modern, complex cyberattacks.",
    tags_en: ["Microsoft", "Entra ID", "Passkeys", "SMS Authentication", "AI Phishing", "Authentication"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/13/microsoft-warns-you-to-stop-using-sms-based-passwords-because-of-ai-phishing-and-itll-block-you-starting-with-entra-id", lang: "EN" }
    ]
  },
  {
    id: "20260813-032",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Palo Alto Networks Prisma Access Agent Windows 版存在認證繞過漏洞 (CVE-2026-0292)",
    summary: "本漏洞 CVE-2026-0292 影響 Palo Alto Networks 的 Prisma® Access Agent 在 Windows 作業系統上的網路驅動程式。攻擊者若為本地管理員，可利用此漏洞繞過系統的安全檢測機制，進而能夠注入並攔截任意的網路流量。此漏洞的攻擊向量為本地 (Local)，且無需任何權限提升 (Privilege Escalation)。值得注意的是，Prisma Access Agent 在 Linux、macOS、iOS、Android 和 Chrome OS 等其他作業系統版本並未受到此漏洞的影響。建議受影響的 Windows 用戶和系統管理員應立即關注 Palo Alto Networks 官方的安全公告，並儘速進行產品更新或修補，以避免遭受未經授權的網路監聽或資料竊取。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0292", "Windows", "網路驅動程式", "認證繞過"],
    title_en: "Palo Alto Networks Prisma Access Agent Windows Edition Has Authentication Bypass Vulnerability (CVE-2026-0292)",
    summary_en: "The vulnerability CVE-2026-0292 affects the network driver for Palo Alto Networks' Prisma® Access Agent on Windows operating systems. If an attacker has local administrator privileges, they can exploit this vulnerability to bypass the system's security detection mechanisms, thereby enabling the injection and interception of arbitrary network traffic. The attack vector for this vulnerability is Local, and it does not require Privilege Escalation. Notably, the Prisma Access Agent is not affected by this vulnerability on other operating systems such as Linux, macOS, iOS, Android, and Chrome OS. Affected Windows users and system administrators are advised to immediately monitor official Palo Alto Networks security advisories and promptly update or patch the product to prevent unauthorized network monitoring or data theft.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0292", "Windows", "Network Driver", "Authentication Bypass"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0292", lang: "EN" }
    ]
  },
  {
    id: "20260813-033",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Palo Alto Networks Prisma Access Agent 於 Windows 版存在漏洞，允許本地管理員繞過防篡改保護",
    summary: "CVE-2026-0293 揭露 Palo Alto Networks 的 Prisma® Access Agent 在 Windows 作業系統版本中存在一項安全漏洞。此漏洞允許具有管理員權限的本地攻擊者，繞過應用程式的防篡改（anti-tamper）保護機制。一旦成功利用，攻擊者可以對受保護的系統程序和檔案進行未經授權的存取。值得注意的是，該漏洞僅限於 Windows 平台，而 Prisma Access Agent 在 Linux、macOS、iOS、Android 和 Chrome OS 等其他作業系統版本上並未受到影響。建議受影響的組織應密切關注 Palo Alto Networks 官方的安全公告，並儘速進行修補或升級至修復版本，以降低被利用的風險。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0293", "Windows", "防篡改保護", "本地攻擊"],
    title_en: "Vulnerability in Palo Alto Networks Prisma Access Agent on Windows Allows Local Administrator to Bypass Anti-Tamper Protection",
    summary_en: "CVE-2026-0293 reveals a security vulnerability in Palo Alto Networks' Prisma® Access Agent on Windows operating system versions. This vulnerability allows a local attacker with administrator privileges to bypass the application's anti-tamper protection mechanism. If successfully exploited, the attacker can gain unauthorized access to protected system processes and files. Notably, the vulnerability is limited to the Windows platform and does not affect Prisma Access Agent on other operating systems such as Linux, macOS, iOS, Android, and Chrome OS. Affected organizations are advised to closely monitor official Palo Alto Networks security advisories and promptly apply patches or upgrade to the fixed version to mitigate the risk of exploitation.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0293", "Windows", "Anti-Tamper Protection", "Local Attack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0293", lang: "EN" }
    ]
  },
  {
    id: "20260813-034",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Palo Alto Networks Prisma Access Agent 存在提升權限漏洞，Windows與macOS用戶需注意",
    summary: "Palo Alto Networks 的 Prisma® Access Agent 應用程式，在 Windows 和 macOS 平台上存在一個提升權限（Privilege Escalation, PE）的漏洞。此漏洞允許本地使用者執行具有提升權限的程式碼。然而，文章明確指出，該 Agent 在 Linux、iOS、Android 和 ChromeOS 平台並未受到影響。雖然 NVD 提供了 CVSS 4.0 的評估向量（CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:U/AU:N/R:A/V:C/RE:M/U:Amber），但具體的 CVSS 分數和修補建議尚未公開。因此，建議受影響的 Windows 和 macOS 用戶及系統管理員應密切關注 Palo Alto Networks 官方發布的修補程式或安全公告，並儘速進行系統更新，以修復此潛在的權限提升風險。",
    tags: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0294", "Windows", "macOS", "提升權限"],
    title_en: "Palo Alto Networks Prisma Access Agent has Privilege Escalation Vulnerability; Windows and macOS Users Should Be Aware",
    summary_en: "The Prisma® Access Agent application from Palo Alto Networks contains a Privilege Escalation (PE) vulnerability on Windows and macOS platforms. This vulnerability allows a local user to execute code with elevated privileges. However, the article explicitly states that the Agent is not affected on Linux, iOS, Android, or ChromeOS platforms. Although NVD provided a CVSS 4.0 assessment vector (CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N/E:U/AU:N/R:A/V:C/RE:M/U:Amber), the specific CVSS score and patch recommendations have not been publicly released. Therefore, affected Windows and macOS users and system administrators are advised to closely monitor official announcements or patches released by Palo Alto Networks and to update their systems promptly to mitigate this potential privilege escalation risk.",
    tags_en: ["Palo Alto Networks", "Prisma Access Agent", "CVE-2026-0294", "Windows", "macOS", "Privilege Escalation"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0294", lang: "EN" }
    ]
  },
  {
    id: "20260813-035",
    trackers: ["os", "security"],
    category: "Windows",
    title: "Palo Alto Networks GlobalProtect 存在 Windows 預登入存取提供者漏洞，可能遭 MitM 攻擊執行 SYSTEM 權限任意程式碼",
    summary: "Palo Alto Networks 的 GlobalProtect™ 應用程式在 Windows 平台上，其 Pre-Logon Access Provider (PLAP) 組件存在不當輸入驗證（improper input validation）的漏洞，編號為 CVE-2026-0298。此漏洞允許中間人（Man-in-the-Middle, MitM）攻擊者在受影響的 Windows 客戶端上，以 SYSTEM 權限執行任意程式碼。攻擊向量為本地攻擊（AV:A），且無需使用者互動（UI:N）。值得注意的是，GlobalProtect 應用程式在 Linux、macOS、iOS、Android 和 Chrome OS 等其他作業系統上並未受此漏洞影響。建議使用者應密切關注 Palo Alto Networks 官方的安全公告，並儘快進行產品修補，以降低系統被惡意利用的風險。",
    tags: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0298", "Windows", "PLAP", "SYSTEM"],
    title_en: "Palo Alto Networks GlobalProtect has Windows Pre-Logon Access Provider vulnerability, potentially allowing SYSTEM-level arbitrary code execution via MitM attack",
    summary_en: "The GlobalProtect™ application from Palo Alto Networks contains an improper input validation vulnerability in its Pre-Logon Access Provider (PLAP) component on the Windows platform, identified as CVE-2026-0298. This vulnerability allows a Man-in-the-Middle (MitM) attacker to execute arbitrary code with SYSTEM privileges on affected Windows clients. The attack vector is local (AV:A), and no user interaction is required (UI:N). Notably, the GlobalProtect application is not affected by this vulnerability on other operating systems such as Linux, macOS, iOS, Android, and Chrome OS. Users are advised to closely monitor official security announcements from Palo Alto Networks and apply product patches promptly to mitigate the risk of malicious exploitation.",
    tags_en: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0298", "Windows", "PLAP", "SYSTEM"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0298", lang: "EN" }
    ]
  },
  {
    id: "20260813-036",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "全球威脅活動鎖定 VMware vCenter 漏洞 CVE-2026–59310，修補後仍需防範後門持久化",
    summary: "德國事件回應公司 QUIRSO 報告指出，一個全球性的威脅活動正在大規模利用 VMware vCenter 的關鍵漏洞 CVE-2026–59310。此漏洞是一個 CVSS 評分為 9.8 的關鍵目錄遍歷缺陷，允許攻擊者透過網路存取遠端執行任意程式碼。該漏洞於 7 月 29 日公開，但攻擊者已在公開資訊後極短時間內開始大規模利用，活動範圍橫跨 47 個國家，影響了 361 個 IP 位址。\n\nQUIRSO 警告，僅僅修補此漏洞不足以完全消除威脅。攻擊者已經建立了透過 `reverse_ssh` 的後門持久化機制。因此，即使系統已更新到修復版本，攻擊者的存取權限仍可能持續存在。專家建議，組織必須對潛在受影響的系統進行鑑識調查，以排除現有的入侵。\n\n此外，由於 vCenter 產品的普遍性，攻擊的「爆發半徑」極大。專家強調，組織的防禦策略應將「網路隔離」作為主要防線，將 vCenter 等控制平面視為不可信任區域，並強制實施嚴格的網路微區隔（micro-segmentation），限制所有出站連線，以防止建立持久的命令與控制（C2）通道。",
    tags: ["VMware vCenter", "CVE-2026–59310", "目錄遍歷", "後門持久化", "reverse_ssh", "網路微區隔"],
    title_en: "Global Threat Activity Targets VMware vCenter Vulnerability CVE-2026–59310; Post-Patch Defense Against Backdoor Persistence Required",
    summary_en: "A report from German incident response firm QUIRSO indicates that a global threat campaign is actively exploiting the critical VMware vCenter vulnerability CVE-2026–59310. This flaw is a critical directory traversal defect with a CVSS score of 9.8, allowing attackers to achieve remote code execution via network access. Although the vulnerability was disclosed on July 29, attackers began large-scale exploitation in a very short time, spanning 47 countries and affecting 361 IP addresses.\n\nQUIRSO warns that merely patching the vulnerability is insufficient to fully eliminate the threat. Attackers have established backdoor persistence mechanisms using `reverse_ssh`. Therefore, even if the system is updated to the patched version, the attackers' access may persist. Experts recommend that organizations conduct forensic investigations on potentially affected systems to rule out existing intrusions.\n\nFurthermore, due to the ubiquity of vCenter products, the 'blast radius' of the attack is immense. Experts emphasize that an organization's defense strategy must prioritize 'network isolation,' treating control planes like vCenter as untrusted zones, and enforcing strict network micro-segmentation to limit all outbound connections, thereby preventing the establishment of persistent command and control (C2) channels.",
    tags_en: ["VMware vCenter", "CVE-2026–59310", "Directory Traversal", "Backdoor Persistence", "reverse_ssh", "Network Micro-segmentation"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/vulnerabilities-threats/global-threat-campaign-critical-vmware-vcenter-flaw", lang: "EN" }
    ]
  },
  {
    id: "20260813-037",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 APT 駭客組織 Jewelbug：同時進行國家級間諜活動與加密貨幣盜竊",
    summary: "研究人員發現一個名為 Jewelbug 的資安駭客組織，它是一個為外聘的 APT 團體，能夠同時執行國際級的網路間諜活動和金融性質的加密貨幣盜竊。該組織利用一套自定義的 C2（Command-and-Control）面板 XG-Web 來管理其所有活動。其工具集包括 Windows 後門 Antino 和 Linux 後門 ClientKing，以及一個名為「PDF Viewer」的瀏覽器擴充功能。這個擴充功能不僅能竊取受害者的一切資訊（如 Cookie、會話 Token、歷史記錄等），還能逃離瀏覽器沙箱，注入 JavaScript，甚至在交易過程中替換受害者加密貨幣地址。在間諜活動方面，Jewelbug 曾入侵中東政府的網站，透過植入腳本竊取政府員工的登入 Cookie，並偽裝成 Adobe Flash 更新提示來植入後門。在金融盜竊方面，他們利用 AI 生成大量釣魚網站，並透過機器人提升搜尋排名。Symantec 分析指出，該團體規模龐大，其活動模式顯示出高度的專業性，且其目標涵蓋了政府、軍方和電信等關鍵機構，高度懷疑與國家級行為相關。",
    tags: ["Jewelbug", "APT", "Symantec", "XG-Web", "瀏覽器擴充功能", "網路間諜活動", "加密貨幣盜竊"],
    title_en: "Research Uncovers APT Threat Group Jewelbug: Conducting Both State-Level Espionage and Cryptocurrency Theft",
    summary_en: "Security researchers have discovered a threat actor group named Jewelbug, which is an outsourced APT group capable of simultaneously executing international-level cyber espionage and financially motivated cryptocurrency theft. The group utilizes a custom C2 (Command-and-Control) panel called XG-Web to manage all its activities. Its toolset includes the Windows backdoor Antino and the Linux backdoor ClientKing, along with a browser extension named 'PDF Viewer.' This extension not only steals all victim information (such as Cookies, session Tokens, and history) but can also escape the browser sandbox, inject JavaScript, and even swap the victim's cryptocurrency address during transactions. In terms of espionage, Jewelbug has infiltrated Middle Eastern government websites, stealing government employees' login Cookies by injecting scripts, and implanting backdoors disguised as Adobe Flash update prompts. For financial theft, they generate a large volume of phishing websites using AI and boost search rankings via bots. Symantec analysis indicates that the group is large in scale, exhibiting highly professional operational patterns, and its targets include critical sectors such as government, military, and telecommunications, raising high suspicion of state-level involvement.",
    tags_en: ["Jewelbug", "APT", "Symantec", "XG-Web", "Browser Extension", "Cyber Espionage", "Cryptocurrency Theft"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/threat-intelligence/jewelbug-apt-state-espionage-cryptocurrency-theft", lang: "EN" }
    ]
  },
  {
    id: "20260813-038",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "比利時eID認證系統漏洞曝光：Connective擴充功能允許遠端程式碼執行（RCE）",
    summary: "比利時的電子身份識別（eID）系統核心擴充功能 Connective，因嚴重漏洞遭到研究人員揭露，可能讓駭客輕易竊取公民身份資料、支付卡資訊，甚至在受害者本地設備上執行遠端程式碼（RCE）。該系統本應透過實體智能卡、讀卡機、主機軟體和瀏覽器擴充功能組成多層防護，確保只有持有實體身份卡的公民才能登入敏感帳戶。然而，研究人員發現，Connective 擴充功能缺乏正確的網站驗證機制，僅使用通用「激活」Token，使得攻擊者可以從任何網站竊取該 Token 並重放，從而完全操控 eID 認證流程。此外，攻擊者還能竊取 PIN 密碼，並透過模擬網站偽造登入彈窗。更嚴重的是，攻擊者甚至可能利用這些漏洞重設受害者在手機上的 itsme 帳戶，從而持續取得對受害者所有連線政府、銀行和商業帳戶的存取權。供應商 Nitro 聲稱目前版本已修復，且未發現野外利用證據，但安全專家仍警告瀏覽器擴充功能本身具有內在風險。",
    tags: ["比利時", "eID", "Connective", "RCE", "瀏覽器擴充功能", "身份認證", "Nitro Software"],
    title_en: "Vulnerability Exposed in Belgian eID Authentication System: Connective Extension Allows Remote Code Execution (RCE)",
    summary_en: "A critical vulnerability was exposed in Connective, a core extension for Belgium's electronic identity (eID) system. This flaw could potentially allow attackers to easily steal citizen identity data, payment card information, or even execute remote code (RCE) on the victim's local device. The system is designed with multiple layers of defense, requiring a physical smart card, reader, host software, and browser extension, ensuring that only citizens possessing the physical identity card can log into sensitive accounts. However, researchers found that the Connective extension lacks proper website validation mechanisms, relying only on a generic 'activation' token. This allows attackers to steal and replay the token from any website, thereby completely manipulating the eID authentication process. Furthermore, attackers can steal PIN codes and simulate websites to fake login pop-ups. More critically, attackers might even exploit these vulnerabilities to reset the victim's itsme account on their mobile phone, thereby maintaining continuous access to the victim's connected government, banking, and commercial accounts. The vendor, Nitro, claims that the current version has been patched and that no evidence of wild use has been found, but security experts still warn that browser extensions inherently carry risks.",
    tags_en: ["Belgium", "eID", "Connective", "RCE", "Browser Extension", "Identity Authentication", "Nitro Software"],
    sources: [
      { name: "Dark Reading", url: "https://darkreading.com/application-security/belgium-eid-authentication-citizen-accounts-rce", lang: "EN" }
    ]
  },
  {
    id: "20260813-039",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "DEF CON 34公開Plug and Pwn：透過偽造USB裝置，可於Windows PnP流程取得SYSTEM權限",
    summary: "資安研究人員在DEF CON 34上展示了Plug and Pwn漏洞研究，揭示了一種利用Windows隨插即用（Plug and Play, PnP）安裝流程的攻擊鏈。攻擊者無需系統管理員權限，甚至在無使用者登入的情況下，透過實體USB裝置偽造硬體身分，誘騙Windows自動取得並安裝有弱點的廠商驅動程式。攻擊鏈的關鍵在於偽造VID/PID等裝置資訊，讓Windows在SYSTEM權限下處理有問題的元件。研究團隊展示了多階段攻擊，包括利用Sierra Wireless和Sony FeliCa裝置的安裝流程弱點，達到修改系統DNS和寫入任意檔案的目的。此外，該攻擊鏈甚至可以延伸至RDP遠端桌面環境，透過USB重新導向功能，利用Intel RealSense驅動套件的DLL載入問題，將RDP使用者的權限提升至SYSTEM。此漏洞利用了Windows內建的PnP機制，使得攻擊者能藉由合法簽章的廠商元件，取得高權限的執行能力。",
    tags: ["Plug and Pwn", "Windows PnP", "USB 裝置", "SYSTEM 權限", "DEF CON 34", "驅動程式漏洞"],
    title_en: "DEF CON 34 Unveils Plug and Pwn: Achieving SYSTEM Privileges via Spoofed USB Devices",
    summary_en: "Cybersecurity researchers presented a study on the Plug and Pwn vulnerability at DEF CON 34, revealing an attack chain that exploits the Windows Plug and Play (PnP) installation process. The attack allows an attacker to acquire SYSTEM privileges without needing system administrator rights, even when no user is logged in. By physically spoofing hardware identities via a USB device, the attacker tricks Windows into automatically acquiring and installing vulnerable vendor drivers. The core of the attack chain lies in spoofing device information such as VID/PID, causing Windows to process flawed components under SYSTEM privileges. The research team demonstrated a multi-stage attack, including exploiting installation weaknesses in Sierra Wireless and Sony FeliCa devices, achieving the goal of modifying system DNS and writing arbitrary files. Furthermore, this attack chain can extend to the RDP remote desktop environment, elevating the RDP user's privileges to SYSTEM by exploiting a DLL loading issue in the Intel RealSense driver suite via USB redirection. This vulnerability leverages Windows' built-in PnP mechanism, allowing attackers to gain high-privilege execution capability using legitimately signed vendor components.",
    tags_en: ["Plug and Pwn", "Windows PnP", "USB Device", "SYSTEM Privileges", "DEF CON 34", "Driver Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178117", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-040",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "以色列資安新創 Dream Security 揭露假冒民防警報App間諜軟體 BH Alert 散播",
    summary: "以色列資安新創 Dream Security 近期揭露了一款名為 BH Alert 的 Android 間諜軟體。該惡意軟體在巴林及波斯灣地區散播，目標鎖定需要接收民防警報的民眾。攻擊者透過架設仿冒 Google Play 頁面，冒充民防及政府機關，並利用假評論和下載數增加可信度來誘騙使用者下載。BH Alert 採用多階段感染鏈，最終目的是在受害者手機上部署遠端存取木馬 OctagonPanel。該木馬具備多種 C2 通道，功能包括攔截簡訊、收集聯絡人資訊、截取螢幕截圖、竊取憑證、進行銀行 App 釣魚 Overlay，以及遠端操控。它透過要求受害者授予 Accessibility Service 權限等方式，建立長期存取能力。Dream Security 指出，戰事衝突增加了公共安全 App 的安裝需求，同時也降低了民眾警覺，這為惡意軟體的大規模散播提供了窗口，建議將此類威脅視為國家攻擊面的一部分。",
    tags: ["Dream Security", "BH Alert", "OctagonPanel", "Android", "間諜軟體", "國家攻擊面"],
    title_en: "Israeli Cybersecurity Startup Dream Security Exposes Spyware BH Alert Spreading via Fake Civil Defense Alert App",
    summary_en: "Israeli cybersecurity startup Dream Security recently exposed an Android spyware named BH Alert. This malware is spreading in the Bahrain and Persian Gulf regions, targeting the general public who need to receive civil defense alerts. Attackers are deceiving users into downloading the malware by setting up fake Google Play pages that impersonate civil defense and government agencies, using fake reviews and download numbers to increase credibility. BH Alert utilizes a multi-stage infection chain, with the ultimate goal of deploying the remote access Trojan (RAT) OctagonPanel on the victim's phone. This Trojan possesses multiple C2 channels and functions including intercepting SMS messages, collecting contact information, capturing screenshots, stealing credentials, performing banking app fishing overlays, and remote control. It establishes long-term access by requiring the victim to grant permissions such as Accessibility Service. Dream Security points out that the increased need for public safety apps due to conflict has lowered public vigilance, creating an opportunity for large-scale malware dissemination, and advises that such threats should be viewed as part of the national attack surface.",
    tags_en: ["Dream Security", "BH Alert", "OctagonPanel", "Android", "Spyware", "National Attack Surface"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178119", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-041",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "疑似中國駭客利用AI代理框架攻擊臺灣政府與能源關鍵基礎設施",
    summary: "資安新創Dream Security透過報告披露，一組疑似來自中國的駭客組織，已利用Hermes與OpenClaw等開源AI代理框架，組建出高度自動化的「自主網攻軍團」，對臺灣政府機關及能源關鍵基礎設施發動攻擊。該AI攻擊框架具備雙層機率決策機制，能在單一漏洞和整體攻擊鏈層級進行動態評估。在單一漏洞層面，系統採用貝氏後驗機率（Bayesian prioritization）根據證據更新漏洞的機率，當後驗機率P>0.95時，系統認定漏洞可利用；在攻擊鏈層面，則使用P_success = P_chain × (1 - P_blocker)公式判斷成功率，成功率達到95%以上時，代表所有關鍵步驟均已確認可直接發動利用。此事件警示，攻擊者已成功結合AI代理與機率模型，使得攻擊行動高度自動化、戰術決策能力極強。Dream Security建議，政府與企業應加速轉型至具備動態推理能力的AI原生資安架構，以應對未來更強的威脅。",
    tags: ["AI代理", "自主攻擊框架", "Hermes", "OpenClaw", "貝氏機率", "臺灣政府", "關鍵基礎設施"],
    title_en: "Suspected Chinese Hackers Use AI Agent Frameworks to Attack Taiwan's Government and Energy Critical Infrastructure",
    summary_en: "Security startup Dream Security disclosed in a report that a group of suspected Chinese hacker organizations has utilized open-source AI agent frameworks, such as Hermes and OpenClaw, to build a highly automated 'autonomous cyber assault force.' This AI attack framework features a dual-layer probabilistic decision mechanism, enabling dynamic assessment at both the single vulnerability and overall attack chain levels. At the single vulnerability level, the system uses Bayesian prioritization to update the probability of a vulnerability based on evidence, and the system considers a vulnerability exploitable when the posterior probability P > 0.95. At the attack chain level, it uses the formula P_success = P_chain × (1 - P_blocker) to determine the success rate, indicating that all critical steps are confirmed to be directly exploitable when the success rate reaches 95% or higher. This incident warns that attackers have successfully combined AI agents with probabilistic models, making attack actions highly automated and tactical decision-making extremely strong. Dream Security advises that governments and enterprises should accelerate the transition to AI-native security architectures with dynamic reasoning capabilities to cope with future, stronger threats.",
    tags_en: ["AI Agents", "Autonomous Attack Framework", "Hermes", "OpenClaw", "Bayesian Probability", "Taiwan Government", "Critical Infrastructure"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178113", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-042",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "中國駭客疑似利用AI代理攻擊臺灣政府機關，資安署發布警訊",
    summary: "以色列資安新創 Dream Security 揭露，疑似中國駭客利用名為 Hermes 與 OpenClaw 的 AI 攻擊框架，對臺灣政府機關發動自主攻擊。數位發展部資通安全署（資安署）發布新聞稿說明，自 7 月已察覺此類異常攻擊，並啟動調查與應變。資安署指出，此次攻擊模式結合了人類操作與 AI 混合執行，除了駭客操作的跡象外，也觀察到結合 OpenClaw 與其他 AI 代理輔助的現象。此外，美國聯邦機構（FBI、CISA）也聯合警告，勒索軟體 Gunra 以 RaaS 形式攻擊政府機關及關鍵基礎設施，呼籲企業應優先修補 VPN 與 RDP 等網路設備漏洞，並實作網段分割與離線備份。整體而言，本次事件凸顯 AI 攻擊代理的威脅性，要求政府及企業提升資安監控與防禦能力。",
    tags: ["AI 攻擊", "中國駭客", "臺灣政府機關", "資通安全署", "OpenClaw", "RaaS"],
    title_en: "Chinese Hackers Suspected of Using AI Agents to Attack Taiwanese Government Agencies; Cybersecurity Agency Issues Warning",
    summary_en: "Israeli cybersecurity startup Dream Security revealed that suspected Chinese hackers launched autonomous attacks against Taiwanese government agencies using AI frameworks named Hermes and OpenClaw. The Digital Development Ministry's Cybersecurity Agency (CSA) issued a press release stating that it has detected this type of anomalous attack since July and has initiated an investigation and response. The CSA pointed out that this attack pattern combines human operation with AI hybrid execution. In addition to signs of hacker operation, the phenomenon of combining OpenClaw with other AI agents was observed. Furthermore, US federal agencies (FBI, CISA) jointly warned that the ransomware Gunra is attacking government agencies and critical infrastructure in a Ransomware-as-a-Service (RaaS) format, urging enterprises to prioritize patching vulnerabilities in network equipment such as VPN and RDP, and to implement network segmentation and offline backups. Overall, this incident highlights the threat posed by AI attack agents, requiring both governments and enterprises to enhance cybersecurity monitoring and defense capabilities.",
    tags_en: ["AI Attack", "Chinese Hackers", "Taiwanese Government Agencies", "Cybersecurity Agency", "OpenClaw", "RaaS"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178108", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-043",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "RISC-V處理器面臨Spectre類推測執行風險：德國CISPA研究證實多款商用晶片受影響",
    summary: "德國CISPA與KU Leuven團隊在USENIX Security 2026發表研究，實測多款商用RISC-V處理器，包括SiFive P550、T-Head玄鐵C910及C920，確認這些晶片也會受到Spectre類推測執行攻擊的影響。Spectre攻擊利用處理器為提高效能而進行的預測執行機制，即使猜錯後會撤銷結果，但部分資料仍可能在快取等硬體資源留下痕跡，可供攻擊者推測原本無權讀取的資料。\n研究團隊測試了13種攻擊情境，證明在P550與C910/C920兩種設計上，多數Spectre攻擊方式均能成功。此外，研究還發現RISC-V的軟體防護機制存在缺陷：例如Linux核心的barrier_nospec()推測執行屏障在RISC-V上會編譯成no-op，導致預期防護失效。更甚者，RISC-V指令集本身缺乏明確的停止推測執行的專用指令，使得作業系統難以建立通用防護。\n攻擊的前提是攻擊者已能在目標機器執行程式，研究人員利用Linux核心的BPF功能，在C910上成功建立任意核心記憶體讀取能力，中位洩漏速度達每秒338位元組。為了解決這些問題，研究團隊已為Linux核心提出修補，其中使用者空間記憶體存取指標遮罩、系統呼叫表索引及KVM索引遮罩等三項已併入Linux主線。",
    tags: ["RISC-V", "Spectre", "推測執行", "CISPA", "USENIX Security 2026", "硬體漏洞"],
    title_en: "RISC-V Processors Face Spectre-like Speculative Execution Risks: German CISPA Research Confirms Multiple Commercial Chips Are Affected",
    summary_en: "German CISPA and KU Leuven researchers presented findings at USENIX Security 2026, testing multiple commercial RISC-V processors, including the SiFive P550, T-Head XuanTie C910, and C920. They confirmed that these chips are also susceptible to Spectre-like speculative execution attacks. Spectre attacks exploit the processor's speculative execution mechanism, which is used to improve performance. Although results are rolled back if the speculation is incorrect, some data may leave traces in hardware resources like the cache, allowing attackers to infer data they should not have authorized access to.\n\nThe research team tested 13 attack scenarios, demonstrating that most Spectre attack methods were successful on both the P550 and C910/C920 designs. Furthermore, the study found flaws in RISC-V's software mitigation mechanisms: for instance, the Linux kernel's `barrier_nospec()` speculative execution barrier compiles to a no-op on RISC-V, causing the expected protection to fail. Even more critically, the RISC-V instruction set lacks a dedicated instruction to explicitly stop speculative execution, making it difficult for the operating system to establish general protection.\n\nFor the attack to succeed, the attacker must already be able to execute code on the target machine. The researchers utilized the Linux kernel's BPF functionality to successfully establish arbitrary kernel memory read capabilities on the C910, achieving an average leak rate of 338 bytes per second. To address these issues, the research team has proposed patches for the Linux kernel, including user-space memory access index masking, system call table index, and KVM index masking, which have been merged into the Linux mainline.",
    tags_en: ["RISC-V", "Spectre", "Speculative Execution", "CISPA", "USENIX Security 2026", "Hardware Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178107", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-044",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安署警示：境外駭客利用AI代理進行自主攻擊，目標疑似台灣政府機關",
    summary: "數位發展部資通安全署（資安署）發布警訊，揭露台灣政府機關疑似遭受境外駭客的攻擊。此次攻擊模式具有高度複雜性，結合了人類操作與AI輔助的混合執行特徵。資安署調查指出，攻擊者利用AI代理（如結合OpenClaw等工具）來快速串聯多種攻擊手法。攻擊者可利用備援或測試平臺等次要系統作為跳板，使得攻擊活動具備速度快、成本低、規模大的特性。資安署已於7月察覺此事件，並自7月20日發布警訊，啟動調查與應變機制。政府單位將根據本次事故掌握的特徵，強化整體防禦能力，並持續監控潛在的攻擊路徑，以應對日益複雜的AI驅動威脅。",
    tags: ["資安署", "AI攻擊", "OpenClaw", "政府資安", "APT", "資安警訊"],
    title_en: "Cybersecurity Agency Warns: Foreign Hackers Use AI Agents for Autonomous Attacks, Targeting Suspected Taiwanese Government Agencies",
    summary_en: "The Digital Development Ministry's Cybersecurity Agency (CSA) issued an alert, revealing that Taiwanese government agencies are suspected of being targeted by foreign hackers. This attack pattern exhibits high complexity, combining human operation with AI-assisted execution. The CSA's investigation points out that attackers are utilizing AI agents (such as those combined with tools like OpenClaw) to rapidly chain multiple attack methods. Attackers can use secondary systems, such as backup or testing platforms, as jump points, giving the attack activity characteristics of high speed, low cost, and large scale. The CSA detected this incident in July and issued the alert on July 20th, initiating investigation and response mechanisms. Government units will strengthen overall defense capabilities based on the characteristics learned from this incident and continuously monitor potential attack vectors to address increasingly complex, AI-driven threats.",
    tags_en: ["CSA", "AI Attacks", "OpenClaw", "Government Cybersecurity", "APT", "Cybersecurity Alert"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178105", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-045",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "微軟8月修補Patch Tuesday：修補7個Exchange Server漏洞，包含高風險RCE與權限提升問題",
    summary: "微軟在例行性更新（Patch Tuesday）中，修補了多達421個自身產品的漏洞。其中，針對Exchange Server系列產品（包括2016、2019及訂閱版SE）修補了7個相關漏洞。這些漏洞的潛在風險包括權限提升、服務阻斷、偽冒（spoofing）以及遠端執行程式碼（RCE）等。其中，最嚴重的漏洞為CVE-2026-62913，評分達8.8分，屬於可能導致RCE的堆積緩衝區溢位問題；另一個高風險漏洞為CVE-2026-62911，評分達8.0分，涉及權限提升問題。此外，微軟也提醒用戶，在安裝8月更新後，將會停用Outlook網頁輕量版（OWA Light）。為避免安全風險，用戶應儘速執行最新的安全更新。",
    tags: ["Microsoft", "Exchange Server", "Patch Tuesday", "CVE-2026-62913", "CVE-2026-62911", "RCE"],
    title_en: "Microsoft's August Patch Tuesday: Patches 7 Exchange Server Vulnerabilities, Including High-Risk RCE and Privilege Escalation Issues",
    summary_en: "In its routine update (Patch Tuesday), Microsoft patched a total of 421 vulnerabilities across its own products. Specifically, seven vulnerabilities were addressed in the Exchange Server product line (including 2016, 2019, and subscription SE). The potential risks associated with these vulnerabilities include privilege escalation, service disruption, spoofing, and Remote Code Execution (RCE). The most critical vulnerability is CVE-2026-62913, which scores 8.8 and is a stack buffer overflow issue potentially leading to RCE; another high-risk vulnerability is CVE-2026-62911, scoring 8.0, which involves a privilege escalation issue. Furthermore, Microsoft warned users that after installing the August update, the Outlook Web App Light (OWA Light) will be decommissioned. To avoid security risks, users are advised to promptly apply the latest security updates.",
    tags_en: ["Microsoft", "Exchange Server", "Patch Tuesday", "CVE-2026-62913", "CVE-2026-62911", "RCE"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178103", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-046",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究人員發布影響 Microsoft Defender 的零時差漏洞 ShieldBreak，可從任何帳號取得 SYSTEM 權限",
    summary: "研究人員 Nightmare Eclipse 發布了名為 ShieldBreak 的零時差漏洞，該漏洞影響 Microsoft Defender，可讓攻擊者從任何帳號取得 Windows 桌機及伺服器的 SYSTEM 權限。此漏洞與先前影響 Defender 的 Rogue Planet (CVE-2026-50656) 屬於權限升級漏洞，可讓攻擊者以 SYSTEM 權限執行 Shell 並在 Windows 機器上執行任意程式碼。\n\n專家指出，Rogue Planet 屬於檔案系統競態條件（race condition）漏洞，透過操弄虛擬磁碟誘發隔離程序覆寫系統檔案；而 ShieldBreak 則利用 User-mode Callback Hook，在 Defender 執行 Cloud-hydration scan 期間變更檔案內容。這意味著 ShieldBreak 是在 API callback 時機點置換了 Defender 掃描的內容。\n\n雖然微軟已於 7 月修補了 Rogue Planet，但研究人員指出，PoC 仍可在經過修補的機器上運作。此外，受 ShieldBreak 影響的除了最新版 Windows 11 25H2 和 Windows Server 2025 外，未更新保護的 Windows 10 及相關伺服器版本也存在風險。微軟尚未對 ShieldBreak 發表正式評論。",
    tags: ["Microsoft Defender", "ShieldBreak", "CVE-2026-50656", "權限升級", "Windows", "零時差漏洞"],
    title_en: "Researchers Release Zero-Day Vulnerability ShieldBreak Affecting Microsoft Defender, Allowing SYSTEM Privileges from Any Account",
    summary_en: "Researcher Nightmare Eclipse has released a zero-day vulnerability named ShieldBreak, which affects Microsoft Defender and allows an attacker to gain SYSTEM privileges on Windows desktops and servers from any account. Like the previous Defender vulnerability, Rogue Planet (CVE-2026-50656), this is a privilege escalation vulnerability that allows an attacker to execute a shell with SYSTEM privileges and run arbitrary code on a Windows machine. Experts point out that Rogue Planet is a file system race condition vulnerability, which manipulates virtual disks to induce the isolation process to overwrite system files; whereas ShieldBreak exploits a User-mode Callback Hook, altering file contents while Defender is performing a Cloud-hydration scan. This means ShieldBreak substitutes the content being scanned by Defender at the time of the API callback. Although Microsoft patched Rogue Planet in July, researchers note that the PoC can still operate on patched machines. Furthermore, besides the latest versions of Windows 11 25H2 and Windows Server 2025 affected by ShieldBreak, unpatched Windows 10 and related server versions are also at risk. Microsoft has not yet issued an official comment regarding ShieldBreak.",
    tags_en: ["Microsoft Defender", "ShieldBreak", "CVE-2026-50656", "Privilege Escalation", "Windows", "Zero-Day Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178101", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-047",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Apple 緊急修補 macOS Screen Sharing 漏洞 CVE-2026-65400，警惕未經憑證的遠端程式碼執行風險",
    summary: "Apple 近期於 8 月 6 日發布非例行更新，修補了 macOS 系統中的 Screen Sharing 功能漏洞 CVE-2026-65400。此漏洞的 CVSS 嚴重性評分為 7.1 分，允許攻擊者在未經有效憑證的情況下，透過 Screen Sharing 驗證機制進行攻擊。資安廠商 Huntress 分析指出，問題根源在於 Screen Sharing 服務的 Secure Remote Password (SRP) 驗證機制存在狀態管理錯誤。攻擊者可利用此缺陷在預先驗證階段繞過身分驗證，進而執行遠端程式碼，且由於該服務以 root 權限執行，可能導致系統層級的嚴重影響。雖然目前尚未有實際利用證據，但資安研究人員已公開 PoC，建議所有用戶應立即更新系統至最新版本，以降低被利用的風險。",
    tags: ["Apple", "macOS", "CVE-2026-65400", "Screen Sharing", "遠端程式碼執行", "SRP"],
    title_en: "Apple Issues Emergency Patch for macOS Screen Sharing Vulnerability CVE-2026-65400; Beware of Unauthenticated Remote Code Execution Risk",
    summary_en: "Apple released an out-of-cycle update on August 6th to patch a vulnerability, CVE-2026-65400, in the macOS Screen Sharing feature. This vulnerability has a CVSS severity score of 7.1 and allows attackers to exploit the Screen Sharing authentication mechanism without valid credentials. Security firm Huntress analyzed that the root cause is a state management error in the Secure Remote Password (SRP) authentication mechanism of the Screen Sharing service. Attackers can leverage this flaw to bypass authentication during the pre-authentication phase, potentially executing remote code. Since the service runs with root privileges, this could lead to severe, system-level impact. Although no active exploitation evidence has been reported yet, security researchers have publicly released a PoC, advising all users to immediately update their systems to the latest version to mitigate the risk of exploitation.",
    tags_en: ["Apple", "macOS", "CVE-2026-65400", "Screen Sharing", "Remote Code Execution", "SRP"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178095", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-048",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Adobe Commerce 漏洞遭駭客立即鎖定：CVE-2026-71362 允許未經身份驗證的權限提升",
    summary: "網路安全公司 Sansec 報告，一個針對 Adobe Commerce 的嚴重漏洞 CVE-2026-71362，在公開披露後立即遭到駭客鎖定。此漏洞被描述為一個不正確的授權問題，允許未經身份驗證的攻擊者提升權限。該漏洞的 CVSS 分數為 9.1。Adobe 已在 2026 年 8 月的 Patch Tuesday 修復了此缺陷，並表示目前無野外利用證據，但警告攻擊者曾多次鎖定 Commerce 系統。Sansec 進一步指出，該漏洞可讓遠端未經身份驗證的攻擊者劫持客戶會話，從而存取受害者帳戶及私密客戶資料。Adobe 透過修改 Commerce 和 Magento 處理客戶身份的方式來修復此根本問題。受影響範圍涵蓋所有 Commerce、Commerce B2B 和 Magento Open Source 版本，直到包含 2026 年 7 月修補程式的版本。Adobe 已推出獨立修補程式，建議商家盡快應用最新安全更新，以防止可能導致任意程式碼執行和權限提升的風險。",
    tags: ["Adobe Commerce", "CVE-2026-71362", "Magento", "權限提升", "未經身份驗證", "Adobe"],
    title_en: "Adobe Commerce Vulnerability Immediately Targeted by Hackers: CVE-2026-71362 Allows Unauthenticated Privilege Escalation",
    summary_en: "Security firm Sansec reported that a critical vulnerability in Adobe Commerce, CVE-2026-71362, was immediately targeted by hackers upon public disclosure. The flaw is described as an improper authorization issue that allows unauthenticated attackers to escalate privileges. The vulnerability carries a CVSS score of 9.1. Adobe patched this defect during the August 2026 Patch Tuesday and stated there is currently no evidence of wild exploitation, but warned that attackers have repeatedly targeted Commerce systems. Sansec further pointed out that the vulnerability allows remote unauthenticated attackers to hijack customer sessions, thereby accessing victim accounts and private customer data. Adobe addressed this fundamental issue by modifying how Commerce and Magento handle customer identity. The affected scope includes all Commerce, Commerce B2B, and Magento Open Source versions up to and including the version containing the July 2026 patch. Adobe has released an independent patch and recommends that merchants apply the latest security update promptly to prevent the risk of potential arbitrary code execution and privilege escalation.",
    tags_en: ["Adobe Commerce", "CVE-2026-71362", "Magento", "Privilege Escalation", "Unauthenticated", "Adobe"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/adobe-commerce-bug-targeted-immediately-after-disclosure", lang: "EN" }
    ]
  },
  {
    id: "20260813-049",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Fortinet修補多項漏洞：FortiWeb與FortiManager存在高風險認證缺陷",
    summary: "資安廠商Fortinet於本週三宣布修補多個產品的漏洞，其中包含FortiWeb和FortiManager的認證缺陷。針對FortiWeb，CVE-2026-26035允許遠端未經身份驗證的攻擊者，透過隨機的用戶名和密碼登入GUI/CLI介面。此漏洞與管理員帳戶的萬用字元（wildcard）設定有關，若啟用此設定，系統會匹配遠端伺服器上具有特定群組名稱的用戶。修補版本包括FortiWeb 8.0.3、7.6.7、7.4.12和7.2.13，建議將萬用字元設定停用。此外，FortiManager的CVE-2026-70468是一個認證繞過問題，允許遠端攻擊者冒充任何由FortiManager管理的FortiGate設備。另有高風險緩衝區溢位漏洞（CVE-2026-70465）修補於FortiClient for Windows，可能讓未經身份驗證的攻擊者執行任意程式碼。Fortinet同時修補了FortiWeb WAF、FortiOS和FortiSIEM的中低風險缺陷，並發布了關於影響Apache HTTP Server的CVE-2026-49975的公告。",
    tags: ["Fortinet", "CVE-2026-26035", "CVE-2026-70468", "CVE-2026-70465", "FortiWeb", "FortiManager"],
    title_en: "Fortinet Patches Multiple Vulnerabilities: High-Risk Authentication Flaws in FortiWeb and FortiManager",
    summary_en: "Cybersecurity vendor Fortinet announced the patching of multiple product vulnerabilities this Wednesday, including authentication flaws in FortiWeb and FortiManager. For FortiWeb, CVE-2026-26035 allows unauthenticated remote attackers to log into the GUI/CLI interface using random usernames and passwords. This vulnerability is related to the administrator account's wildcard setting; if enabled, the system will match users on the remote server with a specific group name. The patched versions include FortiWeb 8.0.3, 7.6.7, 7.4.12, and 7.2.13, and it is recommended that the wildcard setting be disabled. Additionally, FortiManager's CVE-2026-70468 is an authentication bypass issue that allows remote attackers to impersonate any FortiGate device managed by FortiManager. Another high-risk buffer overflow vulnerability (CVE-2026-70465) was patched in FortiClient for Windows, potentially allowing unauthenticated attackers to execute arbitrary code. Fortinet also patched medium-to-low risk flaws in FortiWeb WAF, FortiOS, and FortiSIEM, and issued an advisory regarding CVE-2026-49975 affecting Apache HTTP Server.",
    tags_en: ["Fortinet", "CVE-2026-26035", "CVE-2026-70468", "CVE-2026-70465", "FortiWeb", "FortiManager"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/fortinet-patches-authentication-flaws-in-fortiweb-and-fortimanager", lang: "EN" }
    ]
  },
  {
    id: "20260813-050",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "資安警報：攻擊者利用 VMware vCenter 的 CVE-2026-59310 漏洞進行遠端程式碼執行",
    summary: "資安公司 Quirso 報告，惡意行為者已開始利用 VMware vCenter 的一項關鍵漏洞 CVE-2026-59310。此漏洞於 7 月 29 日被 Broadcom 修補，屬於 Syslog 伺服器中的目錄遍歷（directory traversal）問題，可導致遠端程式碼執行（RCE）。攻擊者若能透過網路存取 vCenter，可利用此漏洞執行任意程式碼。Quirso 追蹤到超過 360 個受害 IP 位址，橫跨 47 個國家。攻擊者在初始入侵後，會部署 open source 的 SSH 反向 Shell 框架（reverse_ssh）來維持持續的外部控制連線，繞過傳統的入站連線安全控制。建議擁有公開存取 vCenter 系統的組織，應使用 YARA rule 進行檢測，並結合檢查是否有未授權的安裝或異常的外部連線與執行行為，以進行驗證。",
    tags: ["VMware vCenter", "CVE-2026-59310", "遠端程式碼執行", "目錄遍歷", "Broadcom", "APT"],
    title_en: "Security Alert: Attackers Exploiting CVE-2026-59310 Vulnerability in VMware vCenter for Remote Code Execution",
    summary_en: "Security firm Quirso reports that malicious actors have begun exploiting a critical vulnerability, CVE-2026-59310, in VMware vCenter. This vulnerability, patched by Broadcom on July 29, is a directory traversal issue within the Syslog server, which can lead to Remote Code Execution (RCE). If attackers can access vCenter over the network, they can exploit this flaw to execute arbitrary code. Quirso has tracked over 360 affected IP addresses across 47 countries. After initial compromise, attackers deploy an open-source SSH reverse shell framework (reverse_ssh) to maintain persistent external control connections, bypassing traditional inbound connection security controls. Organizations with publicly accessible vCenter systems are advised to use YARA rules for detection, and to correlate this with checking for unauthorized installations or abnormal external connections and execution behavior for verification.",
    tags_en: ["VMware vCenter", "CVE-2026-59310", "Remote Code Execution", "Directory Traversal", "Broadcom", "APT"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/critical-vmware-vcenter-vulnerability-in-attackers-crosshairs", lang: "EN" }
    ]
  },
  {
    id: "20260813-051",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "研究員 Nightmare Eclipse 釋出 Windows 零日漏洞 ShieldBreak，可繞過 Defender 取得系統權限",
    summary: "資安研究員 Nightmare Eclipse（又名 Chaotic Eclipse）釋出了一個名為 ShieldBreak 的 Windows 零日漏洞 PoC。此漏洞針對 Microsoft Defender，允許任何使用者在 Defender 進行雲端資料同步掃描時，透過修改檔案內容，最終取得 SYSTEM 系統權限。該漏洞被追蹤為 CVE-2026-50656。攻擊流程涉及設定一個臨時目錄作為 Cloud Sync provider，植入 EICAR 檔案，並利用 Windows 的 CLFS 機制，將身份檔案和資料寫入 System32 中的『phoneinfo.dll』檔案，最終透過執行 QueueReporting 排程任務來啟動 conhost.exe，從而提升權限。雖然 Nightmare Eclipse 聲稱這是 RoguePlanet 漏洞的繞過方式，但資安專家 Kevin Beaumont 指出，ShieldBreak 透過 user-mode callback hook 改變檔案內容，與 RoguePlanet 的檔案系統競態條件漏洞機制不同。專家建議，此漏洞似乎需要 Defender 處於啟用狀態才能運作。",
    tags: ["Windows", "CVE-2026-50656", "Microsoft Defender", "零日漏洞", "權限提升", "PoC"],
    title_en: "Researcher Nightmare Eclipse Releases Windows Zero-Day Vulnerability ShieldBreak, Bypassing Defender to Gain System Privileges",
    summary_en: "Security researcher Nightmare Eclipse (also known as Chaotic Eclipse) released a Proof-of-Concept (PoC) for a Windows zero-day vulnerability named ShieldBreak. This vulnerability targets Microsoft Defender, allowing any user to gain SYSTEM privileges by modifying file contents during Defender's cloud data synchronization scan. The vulnerability is tracked as CVE-2026-50656. The attack process involves setting up a temporary directory as a Cloud Sync provider, implanting an EICAR file, and utilizing Windows' CLFS mechanism to write identity files and data into the 'phoneinfo.dll' file within System32. Privilege escalation is then achieved by executing a scheduled task called QueueReporting, which starts conhost.exe. Although Nightmare Eclipse claims this is a bypass for the RoguePlanet vulnerability, security expert Kevin Beaumont points out that ShieldBreak's method of altering file contents via a user-mode callback hook differs from the file system race condition mechanism used by RoguePlanet. Experts suggest that this vulnerability appears to require Defender to be active in order to function.",
    tags_en: ["Windows", "CVE-2026-50656", "Microsoft Defender", "Zero-Day Vulnerability", "Privilege Escalation", "PoC"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/nightmare-eclipse-drops-windows-zero-day-exploit-shieldbreak", lang: "EN" }
    ]
  },
  {
    id: "20260813-052",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "攻擊者利用 PoC 程式碼，積極攻擊 Microsoft SharePoint 的 CVE-2026-55040 漏洞",
    summary: "資安威脅行為者已開始利用一個新披露的 Microsoft SharePoint 漏洞 CVE-2026-55040。此漏洞的 CVSS 分數為 9.1，屬於關鍵級別的安全性功能繞過，源於弱驗證機制。Microsoft 已在 2026 年 7 月的 Patch Tuesday 更新中修補了此缺陷。\n\n根據 Rapid7 釋出的 PoC 程式碼，攻擊者可以利用此漏洞，透過鏈接四個不同的弱點，為未經身份驗證的遠端攻擊者偽造有效的 JWT Token，從而冒充任何 SharePoint 網站使用者或管理員。此漏洞的根本原因在於 Bearer 服務到服務 (S2S) Token 的解析和驗證邏輯中存在多個問題。\n\n成功利用此漏洞，攻擊者可以繞過身份驗證，執行任意操作，包括揭露檔案和修改資料。雖然攻擊者無法影響系統的可用性，但其資料竊取和篡改的風險極高。建議 SharePoint 使用者務必保持其實例的最新狀態，以確保最佳保護。",
    tags: ["Microsoft SharePoint", "CVE-2026-55040", "JWT Token", "PoC", "弱驗證", "資安漏洞"],
    title_en: "Attackers Exploiting PoC Code to Target Microsoft SharePoint Vulnerability CVE-2026-55040",
    summary_en: "Cyber threat actors have begun exploiting a newly disclosed Microsoft SharePoint vulnerability, CVE-2026-55040. This vulnerability, which has a CVSS score of 9.1, is classified as a critical-level security feature bypass stemming from weak authentication mechanisms. Microsoft patched this flaw in the July 2026 Patch Tuesday update.\n\nAccording to PoC code released by Rapid7, attackers can exploit this vulnerability by chaining four different weaknesses to forge valid JWT Tokens for unauthenticated remote attackers, thereby impersonating any SharePoint site user or administrator. The root cause of this vulnerability lies in multiple issues within the parsing and validation logic of the Bearer service-to-service (S2S) Token. \n\nSuccessful exploitation allows attackers to bypass authentication and execute arbitrary actions, including file disclosure and data modification. Although attackers cannot impact system availability, the risk of data theft and tampering is extremely high. SharePoint users are strongly advised to keep their instances updated to ensure optimal protection.",
    tags_en: ["Microsoft SharePoint", "CVE-2026-55040", "JWT Token", "PoC", "Weak Authentication", "Security Vulnerability"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178118", lang: "ZH-TW" },
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/attackers-exploit-sharepoint.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-053",
    trackers: ["os"],
    category: "Apple",
    title: "OpenAI 為 ChatGPT Mac 版推出「電腦歷史記錄」功能，可記錄跨應用程式活動，取代 Chronicle",
    summary: "OpenAI 在 ChatGPT 桌面應用程式（macOS）中推出了「電腦歷史記錄」（Computer History）功能，這是一個可選的、增強版的記憶功能，旨在讓 ChatGPT 和 Codex 能夠了解用戶在 Mac 上跨應用程式和網站的活動模式。此功能取代了先前基於螢幕截圖的 Chronicle 研究預覽。Computer History 不再依賴截圖，而是透過 macOS 的輔助功能（accessibility features）記錄互動事件，包括點擊、輸入文字、鍵盤快捷鍵和應用程式切換等。用戶必須主動開啟此功能，並可選擇哪些應用程式和網站參與記錄，同時保留了高度的隱私控制權。該功能僅限 ChatGPT Pro、Business 和 Enterprise 用戶，且管理員需為 Business 和 Enterprise 工作區明確授權。OpenAI 強調，該功能不會擷取螢幕截圖、錄音或私密瀏覽活動，記錄的互動事件僅暫時儲存於 Mac 本地，並在伺服器處理後不會保留或用於訓練。然而，OpenAI 也警告，此功能可能會增加來自惡意內容的提示注入（prompt-injection）風險，建議用戶在與他人通訊時暫停收集。",
    tags: ["OpenAI", "ChatGPT", "macOS", "Computer History", "Codex", "Apple"],
    title_en: "OpenAI Launches 'Computer History' Feature for ChatGPT Mac App, Tracking Cross-Application Activity to Replace Chronicle",
    summary_en: "OpenAI has introduced a 'Computer History' feature within the ChatGPT desktop application (macOS). This optional, enhanced memory function aims to allow ChatGPT and Codex to understand the user's activity patterns across various applications and websites on their Mac. This feature replaces the previous Chronicle research preview, which relied on screenshots. Computer History no longer depends on screenshots; instead, it records interaction events using macOS accessibility features, including clicks, text input, keyboard shortcuts, and application switching. Users must actively enable this feature and can select which applications and websites participate in the recording, maintaining a high degree of privacy control. The feature is only available to ChatGPT Pro, Business, and Enterprise users, and administrators must explicitly authorize it for Business and Enterprise workspaces. OpenAI emphasizes that the feature does not capture screenshots, audio recordings, or private browsing activity. The recorded interaction events are temporarily stored locally on the Mac and are not retained or used for training after server processing. However, OpenAI also warns that this feature may increase the risk of prompt-injection from malicious content, advising users to pause collection when communicating with others.",
    tags_en: ["OpenAI", "ChatGPT", "macOS", "Computer History", "Codex", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/chatgpt-for-mac-adds-opt-in-computer-history-feature-replacing-chronicle", lang: "EN" }
    ]
  },
  {
    id: "20260813-054",
    trackers: ["os"],
    category: "Apple",
    title: "Apple HomePod mini 2 傳聞升級：預計搭載新晶片與 Siri AI 支援，提升智慧家庭體驗",
    summary: "本文報導了關於 Apple HomePod mini 第二代（HomePod mini 2）的傳聞資訊。雖然 Apple 尚未確認發布日期，但市場預計新機型將在今年秋季推出。HomePod mini 2 預計將取代現有機型的 S5 晶片，搭載更先進的處理器，以支援更強大的 Siri AI 功能。Siri AI 升級包含更廣泛的世界知識、個人化情境理解和更複雜的應用程式操作。除了晶片升級，新機型也預期將具備改善的音質、更新的無線晶片（如 N1 晶片），以及更精準的 Ultra Wideband 晶片。此外，Apple 還計畫推出具備 HomeKit 控制、FaceTime 和新作業系統的七吋智慧顯示器，作為更全面的智慧家庭生態系統。雖然目前 HomePod mini 的價格為 $129，但由於新機型預計帶來顯著的晶片、音質和 AI 體驗升級，建議消費者等待新產品上市。",
    tags: ["Apple", "HomePod mini 2", "Siri AI", "晶片升級", "智慧家庭", "Apple Intelligence"],
    title_en: "Rumored Apple HomePod mini 2 Upgrade: Expected to Feature New Chip and Siri AI Support, Enhancing Smart Home Experience",
    summary_en: "This article reports on rumored information regarding the Apple HomePod mini second generation (HomePod mini 2). Although Apple has not confirmed a release date, the market anticipates the new model will launch this autumn. The HomePod mini 2 is expected to replace the current model's S5 chip with a more advanced processor to support enhanced Siri AI capabilities. The Siri AI upgrade includes broader world knowledge, personalized contextual understanding, and more complex application operations. In addition to the chip upgrade, the new model is also expected to feature improved sound quality, updated wireless chips (such as the N1 chip), and a more precise Ultra Wideband chip. Furthermore, Apple plans to introduce a seven-inch smart display with HomeKit control, FaceTime, and a new operating system, forming a more comprehensive smart home ecosystem. Although the current HomePod mini price is $129, consumers are advised to wait for the new product launch due to the anticipated significant upgrades in chip, sound quality, and AI experience.",
    tags_en: ["Apple", "HomePod mini 2", "Siri AI", "Chip Upgrade", "Smart Home", "Apple Intelligence"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/homepod-mini-2-release-date-features-price-rumors", lang: "EN" }
    ]
  },
  {
    id: "20260813-055",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 將 iPhone X 與 2018 款 15 吋 MacBook Pro 列為淘汰產品",
    summary: "Apple 近日更新了其產品的「古董（vintage）」與「淘汰（obsolete）」產品清單。根據更新，iPhone X 和 15 吋 2018 款 MacBook Pro 已從古董清單轉移至淘汰清單。一旦產品被列為淘汰，Apple 將停止提供所有硬體服務，且服務供應商將無法再為其訂購零件。Apple 的古董清單適用於停止銷售超過五至七年但零件仍可用的產品；而淘汰清單則代表服務支援已全面終止。值得注意的是，雖然 Apple 曾為 iPhone X 支援到 iOS 16，以及為 2018 款 MacBook Pro 支援到 macOS Sequoia，但產品被列為淘汰後，將無法獲得後續的硬體維修與零件支援。",
    tags: ["Apple", "iPhone X", "MacBook Pro", "macOS", "iOS", "產品生命週期"],
    title_en: "Apple Classifies iPhone X and 2018 15-inch MacBook Pro as Obsolete Products",
    summary_en: "Apple recently updated its lists of 'vintage' and 'obsolete' products. According to the update, the iPhone X and the 2018 15-inch MacBook Pro have been moved from the vintage list to the obsolete list. Once a product is classified as obsolete, Apple will cease providing all hardware services, and service providers will no longer be able to order parts for it. Apple's vintage list applies to products whose sales stopped more than five to seven years ago but for which parts are still available; the obsolete list signifies a complete termination of service support. Notably, although Apple previously supported the iPhone X up to iOS 16, and the 2018 MacBook Pro up to macOS Sequoia, once the product is listed as obsolete, it will no longer receive subsequent hardware repairs or parts support.",
    tags_en: ["Apple", "iPhone X", "MacBook Pro", "macOS", "iOS", "Product Lifecycle"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/apple-adds-iphone-x-and-2018-macbook-pro-to-obsolete-products-list", lang: "EN" }
    ]
  },
  {
    id: "20260813-056",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 錢包應用程式升級：新增「探索」功能，提升用戶使用多樣化功能的便利性",
    summary: "Apple 在 iOS 27 版本中為「錢包」（Wallet）應用程式進行了多項升級，其中最引人注目的是新增了「探索」（Discover）功能。這個新功能旨在幫助用戶更全面地了解和使用錢包內豐富的各種功能。錢包本身是一個多用途的應用程式，可儲存信用卡（包括 Apple Card）、交通卡、機票、身份證件、車鑰匙、酒店鑰匙、Apple Pay 等多種數位憑證。\n\n透過「探索」區，用戶可以找到關於 Apple Pay、Apple Card、Apple Cash、交通卡、機票、身份證件等各功能的教育指南和操作流程。這些指南不僅提供關鍵資訊，還提供快速捷徑，讓用戶只需輕點一下即可開始使用特定功能，例如新增 Apple Pay 卡片或申請 Apple Card。\n\n此外，iOS 27 的錢包應用程式還將增加輕鬆與朋友分攤帳單的功能，並能匯入實體證件。文章指出，錢包未來也可能儲存 Apple 的折舊報價。這些更新提升了用戶體驗，讓複雜的數位憑證管理變得更加直觀和易用。",
    tags: ["iOS 27", "Apple Wallet", "Discover", "Apple Pay", "Apple Card", "Apple Cash"],
    title_en: "iOS 27 Wallet App Upgrade: New 'Discover' Feature Enhances User Access to Diverse Functionalities",
    summary_en: "Apple has rolled out several upgrades to the 'Wallet' application in iOS 27, with the most notable addition being the 'Discover' feature. This new function aims to help users better understand and utilize the rich variety of features within the Wallet. The Wallet itself is a multi-purpose application capable of storing various digital credentials, including credit cards (such as Apple Card), transit cards, tickets, identification, car keys, hotel keys, and Apple Pay.\n\nThrough the 'Discover' section, users can find educational guides and operational procedures for various functions, such as Apple Pay, Apple Card, Apple Cash, transit cards, tickets, and identification. These guides not only provide key information but also offer quick shortcuts, allowing users to start using specific functions with just a tap, such as adding an Apple Pay card or applying for an Apple Card.\n\nFurthermore, the Wallet app in iOS 27 will introduce the ability to easily split bills with friends and will also support the import of physical identification. The article notes that the Wallet may also store Apple depreciation quotes in the future. These updates enhance the user experience, making the management of complex digital credentials more intuitive and user-friendly.",
    tags_en: ["iOS 27", "Apple Wallet", "Discover", "Apple Pay", "Apple Card", "Apple Cash"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/apple-wallet-in-ios-27-adds-clever-new-way-to-use-its-many-features", lang: "EN" }
    ]
  },
  {
    id: "20260813-057",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 討論 iOS 27 Beta 5 更新，內容涵蓋健身穿戴裝置、iPhone 20 外觀及 Vision Pro 內容",
    summary: "本文為一場關於 Apple 最新產品與系統更新的討論，重點聚焦於 iOS 27 beta 5 的變動。討論內容包括 Apple 對健身穿戴裝置的重新審視，以及關於 iPhone 20 外觀的細節。此外，內容也涵蓋了 Vision Pro 上的「Friday Night Baseball」等娛樂應用，並提及 Apple TV 在體育內容（如高爾夫）方面的權益擴展。文章未提供具體的技術漏洞或安全資訊，主要為產品和生態系統的趨勢討論。",
    tags: ["Apple", "iOS 27", "iPhone 20", "Vision Pro", "Apple TV"],
    title_en: "Apple Discusses iOS 27 Beta 5 Update, Covering Fitness Wearables, iPhone 20 Design, and Vision Pro Content",
    summary_en: "This article discusses Apple's latest product and system updates, focusing on changes in iOS 27 beta 5. The discussion covers Apple's re-evaluation of fitness wearables, details regarding the iPhone 20 design, and entertainment applications on Vision Pro, such as 'Friday Night Baseball.' It also mentions the expansion of Apple TV's rights in sports content (such as golf). The article does not provide specific technical vulnerabilities or security information, but rather discusses product and ecosystem trends.",
    tags_en: ["Apple", "iOS 27", "iPhone 20", "Vision Pro", "Apple TV"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/happy-hour-603", lang: "EN" }
    ]
  },
  {
    id: "20260813-058",
    trackers: ["os"],
    category: "Apple",
    title: "MacBook Neo 2 傳聞升級：預計搭載 A19 Pro 晶片與 12GB 記憶體",
    summary: "根據傳聞，MacBook Neo 的後繼機型 MacBook Neo 2 將在明年推出，並預計會進行關鍵升級，特別是記憶體容量。目前 MacBook Neo 配備 A18 Pro 晶片和 8GB 記憶體，但傳聞指出 MacBook Neo 2 將升級至搭載 A19 Pro 晶片，並將記憶體從 8GB 提升至 12GB。增加 50% 的記憶體容量，預計能顯著改善用戶在執行重度任務時的體驗，例如運行本地 AI 模型、編寫程式碼或處理大量瀏覽器分頁。此外，更高的記憶體配置也將讓 MacBook Neo 2 更能應對 macOS 27 即將推出的新 AI 功能，這些功能部分可能需要 12GB 的記憶體。這項升級預計能讓 MacBook Neo 2 的性能更強大，滿足更多用戶的需求。",
    tags: ["MacBook Neo 2", "A19 Pro", "A18 Pro", "macOS 27", "Apple"],
    title_en: "Rumored MacBook Neo 2 Upgrade: Expected to Feature A19 Pro Chip and 12GB Memory",
    summary_en: "According to rumors, the successor to the MacBook Neo, the MacBook Neo 2, is expected to launch next year and will undergo key upgrades, particularly concerning memory capacity. The current MacBook Neo is equipped with the A18 Pro chip and 8GB of memory, but rumors suggest the MacBook Neo 2 will upgrade to feature the A19 Pro chip and increase memory from 8GB to 12GB. This 50% increase in memory capacity is expected to significantly improve the user experience when performing heavy tasks, such as running local AI models, writing code, or handling numerous browser tabs. Furthermore, the higher memory configuration will better enable the MacBook Neo 2 to handle new AI features coming with macOS 27, some of which may require 12GB of memory. This upgrade is anticipated to make the MacBook Neo 2 more powerful, meeting the demands of a wider range of users.",
    tags_en: ["MacBook Neo 2", "A19 Pro", "A18 Pro", "macOS 27", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/macbook-neo-2-will-get-the-big-upgrade-it-needs-most-per-rumors", lang: "EN" }
    ]
  },
  {
    id: "20260813-059",
    trackers: ["os"],
    category: "Apple",
    title: "蘋果預計九月發表三款新 iPhone：iPhone 18 Pro、Pro Max 與全新折疊機型 iPhone Ultra",
    summary: "根據傳聞，蘋果公司（Apple）預計在九月大型活動上推出三款新的 iPhone 型號：iPhone 18 Pro、iPhone 18 Pro Max，以及全新的折疊式手機 iPhone Ultra。iPhone 18 Pro 和 Pro Max 將繼承 17 Pro 系列，預計搭載 A20 Pro 晶片，並升級主鏡頭具備可變光圈、改進相機控制功能，並配備 Apple 自研的 C2 蜂巢式基地台（modem）。此外，新機型還將加入 5G 衛星功能，並預計擁有更長的電池續航力。而 iPhone Ultra 則被傳為蘋果首款折疊螢幕手機，具備 5.4 吋外螢幕和 7.8 吋內螢幕，預計採用鈦金屬邊框，並使用 Touch ID 進行驗證。軟體方面，iOS 27 將支援側邊並排的應用程式多工處理和自適應的景觀佈局。值得注意的是，傳聞指出今年將不會推出基礎款 iPhone 18 和 iPhone Air 2，而是將它們延至 2027 年初發布，使得今年的產品線將完全聚焦於高端市場。",
    tags: ["Apple", "iPhone 18 Pro", "iPhone Ultra", "A20 Pro", "iOS 27", "折疊手機"],
    title_en: "Apple Expected to Unveil Three New iPhones in September: iPhone 18 Pro, Pro Max, and New Foldable iPhone Ultra",
    summary_en: "According to rumors, Apple is expected to launch three new iPhone models at a major event in September: the iPhone 18 Pro, iPhone 18 Pro Max, and the brand-new foldable phone, iPhone Ultra. The iPhone 18 Pro and Pro Max are expected to succeed the 17 Pro series, featuring the A20 Pro chip, an upgraded main camera with a variable aperture, improved camera controls, and Apple's self-developed C2 honeycomb modem. Furthermore, the new models are rumored to include 5G satellite functionality and are expected to boast longer battery life. The iPhone Ultra, meanwhile, is rumored to be Apple's first foldable screen phone, featuring a 5.4-inch outer display and a 7.8-inch inner display. It is expected to utilize a titanium frame and incorporate Touch ID for authentication. On the software front, iOS 27 will support side-by-side application multitasking and adaptive landscape layouts. Notably, rumors suggest that the basic iPhone 18 and iPhone Air 2 will not be released this year, but rather delayed until early 2027, meaning this year's product line will focus entirely on the high-end market.",
    tags_en: ["Apple", "iPhone 18 Pro", "iPhone Ultra", "A20 Pro", "iOS 27", "Foldable Phone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/three-new-iphones-launch-next-month-heres-whats-coming", lang: "EN" }
    ]
  },
  {
    id: "20260813-060",
    trackers: ["os", "security"],
    category: "Apple",
    title: "iPhone Ultra能否避免三星折疊機面臨的螢幕灰塵侵入問題？",
    summary: "本文討論了早期 Samsung Galaxy Fold 在螢幕設計上存在嚴重的灰塵和異物侵入漏洞，甚至導致該產品曾取消預購。儘管時間已跨越多代產品，但該問題似乎仍未徹底解決。文章指出，Apple 在推出其折疊手機 iPhone Ultra 前，可能曾將避免此類螢幕脆弱性作為重要的考量因素。這篇文章預告了對 Apple 解決此類硬體缺陷的關注，並預期在未來幾個月內，隨著 iPhone Ultra 的發布，將能觀察到 Apple 在此方面的技術進展與改進。",
    tags: ["iPhone Ultra", "Samsung Galaxy Fold", "螢幕漏洞", "硬體設計", "Apple"],
    title_en: "Can the iPhone Ultra prevent the screen dust ingress issues faced by Samsung foldable phones?",
    summary_en: "This article discusses the serious dust and foreign object ingress vulnerability present in the early Samsung Galaxy Fold's screen design, which even led to the product's pre-order cancellation. Although multiple generations of products have passed, this issue does not appear to be completely resolved. The article points out that Apple may have considered avoiding such screen vulnerabilities as a critical factor when launching its foldable phone, the iPhone Ultra. This piece anticipates attention on Apple's resolution of such hardware defects and expects to observe Apple's technical progress and improvements in this area with the release of the iPhone Ultra in the coming months.",
    tags_en: ["iPhone Ultra", "Samsung Galaxy Fold", "Screen Vulnerability", "Hardware Design", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/will-the-iphone-ultra-avoid-the-issue-that-can-still-kill-samsung-foldables", lang: "EN" }
    ]
  },
  {
    id: "20260813-061",
    trackers: ["os"],
    category: "Apple",
    title: "iPhone 17 Pro配件推薦：Mothca霧面保護貼與Spigen Thin Fit保護殼實用評測",
    summary: "本文為個人使用心得分享，推薦了兩款適用於 iPhone 17 Pro 的配件：Mothca霧面玻璃螢幕保護貼和Spigen Thin Fit保護殼。螢幕保護貼旨在提供霧面（matte）效果，以減少螢幕反光，雖然作者認為其不如原生設備的霧面質感，但指出其價格親民，可有效防止深層刮痕。保護殼方面，作者推薦 Spigen Thin Fit，這款保護殼具備MagSafe功能，並能覆蓋相機模組的邊緣，提升耐用性。相較於許多廉價保護殼，Spigen Thin Fit的優點在於其設計能提供更完整的保護，同時兼顧美觀，避免了裸機時邊框的視覺瑕疵。這兩款配件對於追求實用性與美觀的用戶，提供了具成本效益的選擇。",
    tags: ["iPhone 17 Pro", "Mothca", "Spigen", "保護貼", "保護殼", "MagSafe"],
    title_en: "iPhone 17 Pro Accessory Recommendations: Mothca Matte Screen Protector and Spigen Thin Fit Case Review",
    summary_en: "This article shares personal usage experiences, recommending two accessories for the iPhone 17 Pro: the Mothca matte glass screen protector and the Spigen Thin Fit case. The screen protector aims to provide a matte effect to reduce screen glare. Although the author feels its matte texture is inferior to the device's original finish, they point out that it is affordable and effectively prevents deep scratches. Regarding the case, the author recommends the Spigen Thin Fit. This case features MagSafe functionality and covers the edges of the camera module, enhancing durability. Compared to many inexpensive cases, the Spigen Thin Fit's advantage lies in its design, which offers more comprehensive protection while maintaining aesthetics, thus avoiding the visual flaws of the frame when the phone is bare. These two accessories offer a cost-effective choice for users who prioritize both practicality and appearance.",
    tags_en: ["iPhone 17 Pro", "Mothca", "Spigen", "Screen Protector", "Case", "MagSafe"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/two-affordable-iphone-17-pro-accessories-worth-trying", lang: "EN" }
    ]
  },
  {
    id: "20260813-062",
    trackers: ["os"],
    category: "Apple",
    title: "預測 Apple TV 4K 升級：搭載 A17 Pro 晶片與 Apple Intelligence，預計支援 Wi-Fi 7 與新 Siri",
    summary: "業界預測 Apple TV 4K 將在今年秋季推出硬體升級版，取代目前 2022 年發布的第三代機型。主要的升級亮點包括晶片從 A15 Bionic 升級至 A17 Pro，這不僅能提升 tvOS 運行速度，更是支援 Apple Intelligence 運算能力的核心。A17 Pro 晶片還具備更強的 GPU，可提升 Apple Arcade 等遊戲體驗。此外，新機型預計採用 N1 無線網路晶片，支援 Wi-Fi 7、Bluetooth 6 和 Thread，將使其成為更強大的智慧家庭中樞。雖然 Apple 尚未公布正式發布日期、價格或具體功能，但市場普遍預期新機將整合更先進的 Siri 功能。建議消費者關注官方公告，若現有設備仍能滿足需求，可考慮等待新一代產品發布。",
    tags: ["Apple TV 4K", "A17 Pro", "Apple Intelligence", "tvOS", "Wi-Fi 7", "N1 晶片"],
    title_en: "Predicting Apple TV 4K Upgrade: Featuring A17 Pro Chip and Apple Intelligence, Expected to Support Wi-Fi 7 and New Siri",
    summary_en: "Industry speculation suggests that Apple TV 4K will undergo a hardware upgrade this autumn, replacing the current third-generation model released in 2022. Key upgrades include the chip upgrading from A15 Bionic to A17 Pro. This not only boosts tvOS performance but also provides the core computing power necessary to support Apple Intelligence. The A17 Pro chip also features a more powerful GPU, enhancing gaming experiences in titles like Apple Arcade. Furthermore, the new model is expected to adopt the N1 wireless chip, supporting Wi-Fi 7, Bluetooth 6, and Thread, positioning it as a more powerful smart home hub. Although Apple has not announced official release dates, pricing, or specific features, the market generally anticipates that the new device will integrate more advanced Siri capabilities. Consumers are advised to monitor official announcements, and if their current equipment still meets their needs, they may consider waiting for the next generation product release.",
    tags_en: ["Apple TV 4K", "A17 Pro", "Apple Intelligence", "tvOS", "Wi-Fi 7", "N1 chip"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/new-apple-tv-4k-2026-release-date-features-price", lang: "EN" }
    ]
  },
  {
    id: "20260813-063",
    trackers: ["os"],
    category: "Apple",
    title: "iOS 27 重磅升級相簿功能：新增專業幻燈片製作與升級 iCloud 共用相簿",
    summary: "本文介紹 iOS 27 作業系統為 Apple 相簿（Photos）應用程式帶來兩項長期期待的功能升級。首先，相簿功能大幅強化了幻燈片製作工具，使用者現在可以為任何照片或影片集創建專業級的幻燈片，並可自訂過渡風格、持續時間和背景音樂，甚至可將成品儲存為影片檔案。其次，iCloud 共用相簿（Shared Albums）也進行了重大升級。升級後，使用者可以分享全解析度的照片和影片，並可使用任何表情符號進行反應（react）。此外，共用相簿的參與者權限設置更加精細，並且最大的變動是，現在 Android 和 Windows 使用者也能夠將照片新增到共用相簿中，極大地擴展了分享的便利性。",
    tags: ["iOS 27", "Apple Photos", "iCloud Shared Albums", "幻燈片", "Apple 作業系統"],
    title_en: "iOS 27 Major Photos App Upgrade: Introducing Professional Slideshow Creation and Enhanced iCloud Shared Albums",
    summary_en: "This article introduces two highly anticipated feature upgrades for the Apple Photos application within the iOS 27 operating system. First, the Photos app significantly enhances its slideshow creation tools. Users can now create professional-grade slideshows from any collection of photos or videos, allowing customization of transition styles, duration, background music, and even saving the final output as a video file. Second, iCloud Shared Albums have undergone a major upgrade. After the upgrade, users can share full-resolution photos and videos and react using any emoji. Furthermore, the participant permission settings for Shared Albums are more granular. The biggest change is that Android and Windows users can now also add photos to Shared Albums, greatly expanding sharing convenience.",
    tags_en: ["iOS 27", "Apple Photos", "iCloud Shared Albums", "Slideshow", "Apple Operating System"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/ios-27-gives-apple-photos-two-features-weve-waited-a-long-time-for", lang: "EN" }
    ]
  },
  {
    id: "20260813-064",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 傳「iPhone Ultra」首發可能限於美國，面臨供應鏈與測試挑戰",
    summary: "根據報導，Apple 即將發表首款摺疊式 iPhone 型號「iPhone Ultra」，預計在美國舉行發表會。然而，該設備的初期市場發布可能極度受限，甚至僅限於美國地區。一位主要的中國組件供應商透露，Apple 目前正與供應、定價以及產品測試等多重問題作鬥爭，導致產品延遲上市。據稱，澳洲和中國市場可能需要數月時間才能看到該產品。雖然報導提及了具體的發布日期和市場限制，但文章也指出，這些資訊可能存在過度推測成分。整體而言，Apple 預計會採取逐步擴大市場發布的策略，先在美國發布，再逐步擴展至其他關鍵市場。",
    tags: ["Apple", "iPhone Ultra", "摺疊手機", "供應鏈", "美國市場"],
    title_en: "Apple reportedly plans 'iPhone Ultra' debut limited to the US, facing supply chain and testing challenges",
    summary_en: "According to reports, Apple is set to launch its first foldable iPhone model, the 'iPhone Ultra,' with a debut event expected in the United States. However, the initial market rollout of the device may be severely restricted, potentially limited only to the US. A major Chinese component supplier revealed that Apple is currently grappling with multiple issues concerning supply, pricing, and product testing, leading to product delays. It is reported that the Australian and Chinese markets may not see the product for several months. While the report mentions specific launch dates and market restrictions, the article also cautions that this information may contain speculative elements. Overall, Apple is expected to adopt a phased market rollout strategy, launching in the US first, and then gradually expanding to other key markets.",
    tags_en: ["Apple", "iPhone Ultra", "Foldable Phone", "Supply Chain", "US Market"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/iphone-ultra-could-launch-in-us-only-at-first-per-report", lang: "EN" }
    ]
  },
  {
    id: "20260813-065",
    trackers: ["os"],
    category: "Apple",
    title: "開發者指出 App Store 評分造假問題：Apple 難以偵測明顯的評分詐欺行為",
    summary: "開發者 Jeff Johnson，其作品為 StopTheMadness Safari extension，公開指出 App Store 的評分造假現象，即使 Apple 聲稱會審核應用程式列表，仍難以偵測到明顯的詐欺行為。Johnson 表示，雖然他並不會主動尋找此類詐欺，但仍經常遇到相關案例，顯示 App Store 的評分系統在防範惡意操作方面存在漏洞。此問題的實務影響是，用戶可能無法依賴 App Store 提供的評分數據來判斷應用程式的真實品質和用戶口碑，可能導致用戶下載到虛假或誤導的應用程式。目前原文未提供具體的修補建議或技術細節，但暗示了 Apple 需要加強其評分系統的監控與審核機制，以維護平台生態的信任度。",
    tags: ["App Store", "Apple", "評分造假", "Jeff Johnson", "Safari extension"],
    title_en: "Developer Points Out App Store Rating Manipulation Issue: Apple Struggles to Detect Obvious Rating Fraud",
    summary_en: "Developer Jeff Johnson, whose work includes the StopTheMadness Safari extension, has publicly highlighted the issue of rating manipulation on the App Store. He noted that even though Apple claims to review the application listings, it remains difficult to detect obvious fraudulent activity. Johnson stated that while he does not actively seek out such fraud, he frequently encounters related cases, indicating that the App Store's rating system has vulnerabilities in preventing malicious operations. The practical implication of this issue is that users may be unable to rely on the rating data provided by the App Store to judge an application's true quality or user reputation, potentially leading users to download fake or misleading applications. While the original text does not provide specific remediation suggestions or technical details, it suggests that Apple needs to strengthen its rating system monitoring and review mechanisms to maintain the trust within the platform ecosystem.",
    tags_en: ["App Store", "Apple", "Rating Manipulation", "Jeff Johnson", "Safari extension"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/obvious-app-store-ratings-fraud-going-undetected-by-apple-says-stopthemadness-developer", lang: "EN" }
    ]
  },
  {
    id: "20260813-066",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Palo Alto Networks GlobalProtect™ 客戶端 macOS 版本存在權限提升漏洞 CVE-2026-0295",
    summary: "Palo Alto Networks 的 GlobalProtect™ 客戶端在 macOS 平台上存在一個競態條件（race condition）漏洞，編號為 CVE-2026-0295。此漏洞允許本地已認證的低權限攻擊者，透過利用該競態條件，將自身的權限提升至 root 層級。值得注意的是，文章明確指出 GlobalProtect 應用程式在 Linux、Windows、iOS、Android 和 Chrome OS 等其他作業系統平台上並未受到此漏洞的影響。由於此漏洞的利用向量為本地（Local），且攻擊者需先取得低權限的本地認證，實務上對 macOS 系統的安全性構成重大威脅。建議使用者應密切關注 Palo Alto Networks 官方發布的修補程式或安全公告，以確保系統及應用程式的安全性。",
    tags: ["Palo Alto Networks", "GlobalProtect", "macOS", "CVE-2026-0295", "權限提升", "競態條件"],
    title_en: "Palo Alto Networks GlobalProtect™ Client for macOS Contains Privilege Escalation Vulnerability CVE-2026-0295",
    summary_en: "The GlobalProtect™ client from Palo Alto Networks contains a race condition vulnerability, identified as CVE-2026-0295, on the macOS platform. This vulnerability allows a locally authenticated, low-privilege attacker to escalate their privileges to root level by exploiting the race condition. Notably, the article explicitly states that the GlobalProtect application is not affected by this vulnerability on other operating systems, such as Linux, Windows, iOS, Android, and Chrome OS. Since the exploitation vector is local, and the attacker must first obtain local authentication with low privileges, this poses a significant threat to the security of macOS systems. Users are advised to closely monitor official patches or security advisories released by Palo Alto Networks to ensure system and application security.",
    tags_en: ["Palo Alto Networks", "GlobalProtect", "macOS", "CVE-2026-0295", "Privilege Escalation", "Race Condition"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0295", lang: "EN" }
    ]
  },
  {
    id: "20260813-067",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apple發布「威脅通知」警示用戶可能遭「傭兵間諜軟體」攻擊",
    summary: "Apple近期向全球多國的目標用戶發布了「威脅通知」，警示其設備可能遭到「傭兵間諜軟體」（mercenary spyware）攻擊。Apple指出，這類攻擊成本極高、高度複雜，且目標通常是記者、活動家、政治人物和外交官等特定群體。雖然Apple未透露個別警報背後的具體間諜軟體名稱，但過去的調查已確認曾發現與Pegasus相關的感染案例。Apple強調這些通知是基於其內部威脅情報和調查結果得出的「高信心警報」，用戶應將其視為高度真實的警示。為保護用戶，Apple建議用戶啟用Lockdown Mode、保持設備系統更新，並警惕任何要求點擊連結或提供密碼的假警報郵件。若懷疑受影響，應諮詢資安專家。",
    tags: ["Apple", "mercenary spyware", "Pegasus", "威脅通知", "Lockdown Mode", "資安警報"],
    title_en: "Apple Issues 'Threat Notifications' Warning Users of Potential 'Mercenary Spyware' Attacks",
    summary_en: "Apple has recently issued 'Threat Notifications' to targeted users in multiple countries globally, warning that their devices may be under attack by 'mercenary spyware.' Apple notes that such attacks are extremely costly, highly complex, and typically target specific groups such as journalists, activists, political figures, and diplomats. Although Apple has not disclosed the specific names of the spyware behind individual alerts, past investigations have confirmed infection cases related to Pegasus. Apple emphasizes that these notifications are 'high-confidence alerts' derived from its internal threat intelligence and investigation results, and users should treat them as highly credible warnings. To protect users, Apple recommends enabling Lockdown Mode, keeping device systems updated, and being vigilant against fake alert emails that request clicking links or providing passwords. If users suspect they are affected, they should consult a cybersecurity expert.",
    tags_en: ["Apple", "mercenary spyware", "Pegasus", "Threat Notification", "Lockdown Mode", "Cybersecurity Alert"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/apple/apple-sends-new-threat-notification-alerts-over-mercenary-spyware-attacks", lang: "EN" }
    ]
  },
  {
    id: "20260813-068",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "關鍵漏洞曝光：VMware vCenter Syslog Server 遭利用，攻擊者部署反向 SSH 建立持久存取",
    summary: "資安研究公司 QUIRSO 揭露，一個名為 CVE-2026-59310 的關鍵漏洞正在被積極利用。此漏洞存在於 VMware vCenter Syslog Server，被描述為一個允許未經身份驗證的攻擊者透過網路存取執行任意程式碼的目錄遍歷漏洞。攻擊者利用此漏洞後，主要目的是部署 open-source 的 reverse_ssh 框架，建立持久的遠端存取和命令與控制（C2）通道，以繞過防火牆等安全措施。\n\n根據 QUIRSO 的調查，受影響的系統已擴散至全球多國，共識別出 361 個 IP 位址。攻擊活動在 Broadcom 公布漏洞及緊急補丁後的五天內迅速擴大。由於此漏洞的嚴重性，供應商尚未提供任何臨時規避或緩解措施，強烈建議系統管理員立即應用緊急修補程式。\n\n修補建議包括升級至 vCenter 9.1 的 9.1.0.0300、vCenter 9.0 的 9.0.2.0100，或 vCenter 8.0 的 8.0 U3k 或 8.0 U2f 版本。由於 vCenter 負責管理整個虛擬基礎設施，一旦被攻陷，可能導致資料竊取和營運中斷，因此應高度警惕。",
    tags: ["VMware vCenter", "CVE-2026-59310", "目錄遍歷", "反向 SSH", "C2", "虛擬基礎設施"],
    title_en: "Critical Vulnerability Exposed: VMware vCenter Syslog Server Exploited to Deploy Reverse SSH for Persistent Access",
    summary_en: "Security research firm QUIRSO has revealed that a critical vulnerability, CVE-2026-59310, is being actively exploited. This vulnerability resides in the VMware vCenter Syslog Server and is described as a directory traversal flaw that allows an unauthenticated attacker to execute arbitrary code remotely over the network. After exploiting this vulnerability, attackers primarily aim to deploy the open-source reverse_ssh framework to establish persistent remote access and command and control (C2) channels, thereby bypassing security measures such as firewalls.\n\nAccording to QUIRSO's investigation, affected systems have spread across multiple countries globally, with 361 IP addresses identified. The attack activity rapidly escalated within five days of Broadcom's public disclosure of the vulnerability and emergency patch. Due to the severity of this flaw, vendors have not yet provided any temporary workarounds or mitigations, and system administrators are strongly advised to apply the emergency patch immediately.\n\nRecommended patches include upgrading to vCenter 9.1's 9.1.0.0300, vCenter 9.0's 9.0.2.0100, or vCenter 8.0's 8.0 U3k or 8.0 U2f versions. Given that vCenter manages the entire virtual infrastructure, a compromise could lead to data theft and operational disruption, necessitating high vigilance.",
    tags_en: ["VMware vCenter", "CVE-2026-59310", "Directory Traversal", "Reverse SSH", "C2", "Virtual Infrastructure"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/critical-vmware-vcenter-rce-flaw-exploited-for-reverse-ssh-access", lang: "EN" }
    ]
  },
  {
    id: "20260813-069",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "GeoServer 發現嚴重 SQL Injection 漏洞：PostGIS 數據庫層面可導致 RCE，已發布修補版本",
    summary: "GeoServer 平台發現一個嚴重的 SQL injection 漏洞，該漏洞存在於使用 PostGIS DataStore 實作的 OGC Filters 執行過程中，特別是 `jsonArrayContains` 函數。此漏洞允許攻擊者在沒有適當轉義的情況下，將攻擊者控制的值直接插入到生成的 SQL 語句中。若攻擊者能利用 Web Feature Service (WFS) 1.0，並結合高權限的 PostgreSQL 帳號（如 superuser 或具備 pg_execute_server_program 權限），則可進一步提升至作業系統命令執行 (RCE)。該漏洞影響 Maven 套件 `org.geotools:gt-jdbc-postgis` 的多個版本，包括 35.0、>=34.0 和 >=33.1 等。開發團隊已發布修補版本，包括 GeoServer 3.0.1、2.28.5 和 2.27.6，修復此問題的識別碼為 GHSA-mqjf-5f49-2fjh，CVSS 分數為 9.8/10.0。建議所有使用 GeoServer 的組織應立即升級至修補版本，並審查其資料庫權限配置，以降低潛在的攻擊風險。",
    tags: ["GeoServer", "SQL injection", "PostGIS", "RCE", "CVE-2023-25158", "GHSA-mqjf-5f49-2fjh"],
    title_en: "GeoServer Discovers Critical SQL Injection Vulnerability: PostGIS Database Layer Can Lead to RCE, Patch Released",
    summary_en: "A critical SQL injection vulnerability has been discovered in the GeoServer platform. This vulnerability exists during the execution of OGC Filters implemented using the PostGIS DataStore, specifically within the `jsonArrayContains` function. This flaw allows an attacker to directly inject attacker-controlled values into the generated SQL statement without proper escaping. If an attacker can exploit the Web Feature Service (WFS) 1.0 and combine it with a high-privilege PostgreSQL account (such as a superuser or one with `pg_execute_server_program` permissions), they can escalate the attack to Operating System Command Execution (RCE). The vulnerability affects multiple versions of the Maven package `org.geotools:gt-jdbc-postgis`, including 35.0, >=34.0, and >=33.1. The development team has released patched versions, including GeoServer 3.0.1, 2.28.5, and 2.27.6. The identifier for this fix is GHSA-mqjf-5f49-2fjh, and the CVSS score is 9.8/10.0. All organizations using GeoServer are advised to immediately upgrade to the patched versions and review their database permission configurations to mitigate potential attack risks.",
    tags_en: ["GeoServer", "SQL injection", "PostGIS", "RCE", "CVE-2023-25158", "GHSA-mqjf-5f49-2fjh"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/unpatched-geoserver-zero-day-targeted.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-070",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "APT36 針對南亞關鍵基礎設施發動新戰役：發現 PATCHCORD 與 SHEETCORD 兩重後門",
    summary: "資安公司 Acronis 揭露，一個隸屬於巴基斯坦的威脅行為者 APT36（另名 Transparent Tribe）正在南亞地區持續進行大規模攻擊。攻擊目標包括阿富汗電信供應商和南亞關鍵基礎設施組織。本次戰役發現了兩個未公開的後門：PATCHCORD 和 SHEETCORD。PATCHCORD 透過偽造的 VPN 安裝程式，利用阿富汗電信公司（AFTEL）的內部系統 TMS 進行植入。該後門具備高度持久性，能透過劫持 Google Chrome、Microsoft Edge 和 Mozilla Firefox 等瀏覽器的捷徑來維持存活，並能執行任意指令、解密並執行記憶體中的 shellcode。SHEETCORD 則利用 Google Sheets 作為 C2 通訊，並透過偽造印度國家資訊中心（NIC）的網域進行傳播。攻擊者利用這些後門，針對印度政府 IT 網路和能源部門，展現了持續的戰術演進。修復建議包括監控異常的瀏覽器捷徑修改、檢查 Windows Registry 中的持久化鍵，並對來自可疑來源的電信管理工具和 Google Sheets API 進行嚴格的網路流量監控。",
    tags: ["APT36", "PATCHCORD", "SHEETCORD", "南亞", "關鍵基礎設施", "C2", "後門"],
    title_en: "APT36 Launches New Campaign Targeting South Asian Critical Infrastructure: Discovery of PATCHCORD and SHEETCORD Backdoors",
    summary_en: "Security firm Acronis has revealed that an Advanced Persistent Threat (APT) group, APT36 (also known as Transparent Tribe), affiliated with Pakistan, is conducting large-scale attacks across the South Asian region. Targets include Afghan telecommunications providers and critical infrastructure organizations in South Asia. This campaign uncovered two previously unknown backdoors: PATCHCORD and SHEETCORD. PATCHCORD was implanted into the internal system TMS of Afghan Telecommunication Company (AFTEL) using a spoofed VPN installer. This backdoor exhibits high persistence, maintaining survival by hijacking shortcuts for browsers such as Google Chrome, Microsoft Edge, and Mozilla Firefox, and is capable of executing arbitrary commands and decrypting and executing shellcode in memory. SHEETCORD, meanwhile, utilizes Google Sheets for Command and Control (C2) communication and spreads through spoofed domains belonging to the Indian National Informatics Centre (NIC). The attackers leveraged these backdoors against Indian government IT networks and the energy sector, demonstrating continuous tactical evolution. Remediation recommendations include monitoring for anomalous browser shortcut modifications, checking for persistence keys in the Windows Registry, and strictly monitoring network traffic for telecommunication management tools and Google Sheets APIs originating from suspicious sources.",
    tags_en: ["APT36", "PATCHCORD", "SHEETCORD", "South Asia", "Critical Infrastructure", "C2", "Backdoor"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/new-patchcord-backdoor-targets-afghan.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-071",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 macOS 資訊竊取工具 AmnesiaStealer 劫持 Chromium 瀏覽器，竊取密碼與會話資料",
    summary: "資安研究人員揭露了一款名為 AmnesiaStealer 的 macOS 資訊竊取工具，該工具以 Rust 為基礎，能夠劫持 Chromium 瀏覽器，竊取用戶的會話資料。攻擊鏈透過偽造的 GitHub 下載頁面散播，並使用 ClickFix 誘餌，引誘用戶將 Base64 編碼的指令貼入 macOS Terminal。該工具分三階段執行：第一階段下載並啟動負載；第二階段竊取 Keychain、瀏覽器資料、Apple Notes 和 Telegram 等資訊；第三階段透過 `stream_module` 取得操作員對受害者瀏覽器的隱藏互動控制權。該工具能針對 16 種 Chromium 家族瀏覽器（包含 Google Chrome、Brave、Arc、Microsoft Edge 等）竊取 Cookie、登入資料、歷史記錄等。更嚴重的是，它能利用 TCC bypass flaw (CVE-2020-9771) 針對運行 Catalina 的 macOS 進行 Safari Cookie 竊取。此外，它還能建立根級 LaunchDaemon 持久化機制，並透過 WebSocket 建立遠端中繼通道，讓攻擊者能實時操作瀏覽器，進行按鍵、滑鼠點擊和導航等行為，達到遠端控制的極高層級存取。修補建議是保持系統更新，並警惕來源不明的軟體下載和執行指令。",
    tags: ["AmnesiaStealer", "macOS", "Chromium", "Rust", "CVE-2020-9771", "資訊竊取", "macOS 惡意軟體"],
    title_en: "New macOS Info-Stealer Tool AmnesiaStealer Hijacks Chromium Browsers to Steal Passwords and Session Data",
    summary_en: "Cybersecurity researchers have exposed an info-stealer tool named AmnesiaStealer. Built using Rust, the tool is capable of hijacking Chromium browsers to steal user session data. The attack chain is disseminated through fake GitHub download pages and uses a ClickFix lure, tricking users into pasting Base64 encoded commands into the macOS Terminal. The tool executes in three stages: the first stage downloads and launches the payload; the second stage steals information from sources such as Keychain, browser data, Apple Notes, and Telegram; and the third stage uses `stream_module` to gain hidden interactive control over the victim's browser for the operator. The tool can target 16 different Chromium-family browsers (including Google Chrome, Brave, Arc, and Microsoft Edge) to steal cookies, login credentials, and browsing history. More critically, it can exploit the TCC bypass flaw (CVE-2020-9771) to steal Safari cookies on macOS running Catalina. Furthermore, it establishes a root-level LaunchDaemon persistence mechanism and creates a remote relay channel via WebSocket, allowing attackers to operate the browser in real-time, performing keystrokes, mouse clicks, and navigation, achieving an extremely high level of remote control. The recommended mitigation is to keep the system updated and to be vigilant against downloading and executing commands from unknown sources.",
    tags_en: ["AmnesiaStealer", "macOS", "Chromium", "Rust", "CVE-2020-9771", "Info-stealer", "macOS Malware"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/amnesiastealer-hijacks-chromium.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-072",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "新型 WindRelay Android NFC 中繼惡意軟體結合 RAT 進行非接觸式支付詐騙",
    summary: "研究人員發現一種名為 WindRelay 的新型 Android NFC 中繼惡意軟體家族，它與已知的遠端存取木馬（RAT）SpyNote 結合，用於執行非接觸式支付詐騙。該惡意軟體旨在透過 NFC 擷取實時卡片資料，並將其即時傳輸給詐騙者。攻擊流程通常透過網路釣魚、簡訊或語音釣魚誘騙目標，使其安裝惡意應用程式。一旦植入，攻擊者利用 SpyNote 的遠端存取權限，在沒有進一步使用者互動的情況下，安裝 NFC 中繼惡意軟體。該系統包含兩個核心組件：一個安裝在受害者設備上的讀取器，用於透過 NFC 與實體卡片介接；以及一個安裝在攻擊者設備上的模擬器，用於在支付終端機模擬卡片。這兩個組件透過 WebSocket 共享的 C2 基礎設施互動，實時中繼 EMV APDU 指令與回應。詐騙者利用這種「Ghost Tap」技術，將受害者設備變成支付代理，在受害者不知情的情況下，實時讀取卡片訊號，並將其傳輸給遠端設備，從而實現大規模的現金提領或支付詐騙。此案例顯示，現代詐騙結合了社交工程、遠端控制和物理卡片竊取等多種能力。",
    tags: ["WindRelay", "SpyNote", "NFC", "Android", "RAT", "非接觸式支付"],
    title_en: "New WindRelay Android NFC Relay Malware Combined with RAT for Contactless Payment Fraud",
    summary_en: "Researchers have discovered a new family of Android NFC relay malware called WindRelay, which combines with the known Remote Access Trojan (RAT) SpyNote to execute contactless payment fraud. This malware is designed to capture real-time card data via NFC and transmit it instantly to fraudsters. The attack process typically involves tricking the target into installing the malicious application through phishing, SMS, or vishing. Once implanted, the attacker utilizes SpyNote's remote access privileges to install the NFC relay malware without further user interaction. The system consists of two core components: a reader installed on the victim's device, which interfaces with the physical card via NFC; and a simulator installed on the attacker's device, which simulates the card at the payment terminal. These two components interact via a WebSocket-shared C2 infrastructure, relaying EMV APDU commands and responses in real-time. Fraudsters use this \"Ghost Tap\" technique to turn the victim's device into a payment proxy, reading card signals in real-time without the victim's knowledge and transmitting them to a remote device, thereby enabling large-scale cash withdrawal or payment fraud. This case demonstrates that modern fraud combines multiple capabilities, including social engineering, remote control, and physical card theft.",
    tags_en: ["WindRelay", "SpyNote", "NFC", "Android", "RAT", "Contactless Payment"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/windrelay-android-malware-turns-victims.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-073",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "北韓遠端工作人員潛入企業系統：資安專家揭示招募流程中的多重警訊",
    summary: "本報告揭露了北韓IT工作人員潛入企業系統的風險，指出攻擊者已不再是外部入侵者，而是透過合法招募流程進入內部。研究人員透過模擬招募流程，觀察到這些潛在威脅使用了偽造身份、遠端存取工具、AI輔助工作流，以及特定的VPN和VPS基礎設施。資安主管（CISO）應將重點放在招募過程中的多重警訊，而非單一證據。這些警訊包括：身份資料不一致（如地址、銀行資訊）、文件操縱跡象（如異常元數據或AI修改痕跡）、面試行為異常（如頻繁偷看或過度依賴翻譯工具），以及網路活動與宣稱居住地的地點不匹配。建議企業應實施多層次驗證，包括：使用多個獨立訊號驗證個人身份；在安全沙箱環境（如 ANY.RUN）中觀察可疑活動；以及將調查發現的IP地址、域名等指標，與現有的EDR、DNS日誌進行交叉比對，以進行持續的威脅偵測。",
    tags: ["北韓", "Lazarus Group", "遠端工作人員", "身份驗證", "ANY.RUN", "供應鏈安全"],
    title_en: "North Korea's Remote Workers Infiltrating Corporate Systems: Cybersecurity Experts Reveal Multiple Red Flags in Recruitment Processes",
    summary_en: "This report reveals the risk of North Korean IT personnel infiltrating corporate systems, pointing out that attackers are no longer external intruders but are entering internally through legitimate recruitment processes. Researchers simulated the recruitment process and observed that these potential threats utilized fabricated identities, remote access tools, AI-assisted workflows, and specific VPN and VPS infrastructure. CISOs should focus on multiple red flags during the recruitment process, rather than single pieces of evidence. These red flags include: inconsistent personal data (such as addresses or bank information), signs of document manipulation (such as abnormal metadata or AI modification traces), abnormal interview behavior (such as frequent glancing or over-reliance on translation tools), and network activity that does not match the declared place of residence. Companies are advised to implement multi-layered verification, including: using multiple independent signals to verify personal identity; observing suspicious activities in a secure sandbox environment (such as ANY.RUN); and cross-referencing indicators found during investigations, such as IP addresses and domains, with existing EDR and DNS logs for continuous threat detection.",
    tags_en: ["North Korea", "Lazarus Group", "Remote Worker", "Identity Verification", "ANY.RUN", "Supply Chain Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/north-korean-remote-workers-are.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-074",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Go 語言發布 1.26.6 與 1.25.13 版本，修補 10 個安全漏洞",
    summary: "Go 語言發布了 minor point release 版本 1.26.6 和 1.25.13，修補了共 10 個安全漏洞。這些漏洞涵蓋了從模組管理、網路通訊到字串處理等多個層面。其中，CVE-2026-56865 修正了 x/mod/sumdb/tlog 模組的透明度日誌驗證繞過問題，防止惡意 GOPROXY 偽造 sumdb tiles，導致模組內容無法被檢測。另有 CVE-2026-56864 修正了 x/mod/sumdb 模組允許忽略未經認證的雜湊值，防止惡意 GOSUMDB 服務未包含在透明度日誌中的模組內容。此外，版本也修復了 encoding/xml 了解碼時的遞迴深度保護機制（CVE-2026-56859），以及 net/url 處理路徑時的二次時間複雜度問題（CVE-2026-56860）。開發者建議使用者執行 `rm -r go.sum go.work.sum vendor/ && go mod tidy` 來檢查是否受影響。建議所有使用 Go 語言的開發者應升級至最新版本以確保安全性。",
    tags: ["Go 語言", "CVE-2026-56865", "CVE-2026-56864", "CVE-2026-56859", "x/mod/sumdb", "軟體漏洞"],
    title_en: "Go Releases 1.26.6 and 1.25.13 Versions, Patching 10 Security Vulnerabilities",
    summary_en: "Go has released minor point release versions 1.26.6 and 1.25.13, patching a total of 10 security vulnerabilities. These vulnerabilities cover multiple areas, including module management, network communication, and string processing. Notably, CVE-2026-56865 fixes a transparency log validation bypass issue in the x/mod/sumdb/tlog module, preventing malicious GOPROXY from forging sumdb tiles and thus obscuring module content from detection. Additionally, CVE-2026-56864 corrects the x/mod/sumdb module's allowance of ignoring unauthenticated hashes, preventing malicious GOSUMDB services from containing module content not included in the transparency log. Furthermore, the versions also fix a recursive depth protection mechanism during encoding/xml decoding (CVE-2026-56859), and a quadratic time complexity issue when processing paths in net/url (CVE-2026-56860). Developers recommend users run `rm -r go.sum go.work.sum vendor/ && go mod tidy` to check for affected installations. All developers using Go are advised to upgrade to the latest version to ensure security.",
    tags_en: ["Go", "CVE-2026-56865", "CVE-2026-56864", "CVE-2026-56859", "x/mod/sumdb", "Software Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/13", lang: "EN" }
    ]
  },
  {
    id: "20260813-075",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "OpenStack Octavia 服務發現漏洞：未經授權可刪除 QoS 策略鎖 (OSSA-2026-035)",
    summary: "本公告揭露了 OpenStack Octavia 服務中的一個權限不足漏洞 (Unauthorized QoS policy deletion lock)，編號為 OSSA-2026-035。該漏洞允許經過身份驗證的使用者，透過將另一個專案的 QoS 策略與 amphora 關聯，阻止該策略的刪除。這可能導致服務配置被惡意鎖定，影響所有 Octavia 部署。受影響的版本包括 Octavia <16.0.2、==17.0.0 和 ==18.0.0。此漏洞已由來自中國科學院計算技術研究所的 Chen YuXiang 報告。修復建議是採用 OpenStack 提供的修補程式，例如針對 2025.1/epoxy、2025.2/flamingo 等版本的修復。由於 CVE 編號尚未分配，相關資訊將在後續的 errata 版本中更新。",
    tags: ["OpenStack", "Octavia", "QoS", "OSSA-2026-035", "權限不足", "CVE"],
    title_en: "OpenStack Octavia Service Discovery Vulnerability: Unauthorized Deletion Lock on QoS Policy (OSSA-2026-035)",
    summary_en: "This advisory discloses an insufficient privilege vulnerability (Unauthorized QoS policy deletion lock) in OpenStack Octavia, identified as OSSA-2026-035. The vulnerability allows an authenticated user to prevent the deletion of a QoS policy by associating it with an amphora belonging to another project. This could lead to service configurations being maliciously locked, impacting all Octavia deployments. Affected versions include Octavia <16.0.2, ==17.0.0, and ==18.0.0. This vulnerability was reported by Chen YuXiang from the Institute of Computing Technology, Chinese Academy of Sciences. The recommended fix is to apply the patch provided by OpenStack, such as the patches for versions 2025.1/epoxy and 2025.2/flamingo. As a CVE ID has not yet been assigned, related information will be updated in a subsequent errata release.",
    tags_en: ["OpenStack", "Octavia", "QoS", "OSSA-2026-035", "Insufficient Privilege", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/12", lang: "EN" }
    ]
  },
  {
    id: "20260813-076",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl Form-Processor 函式庫曝 CVE-2026-13051 漏洞，可透過 HTML::Tidy 觸發方法調用與資源耗盡",
    summary: "Perl 語言的 Form::Processor::Field::HtmlArea 模組，版本範圍從 0.06 至 1.162360，存在一個嚴重的安全漏洞 CVE-2026-13051。該漏洞允許攻擊者透過提交惡意編寫的 Markup 內容，利用 HTML::Tidy 診斷功能，將輸入值傳遞給 add_error 函式作為 Locale::Maketext 模板的訊息鍵。由於預設的語言處理器（language handle）會將非詞典條目編譯為方括號標記的模板，攻擊者可以利用 Tidy 診斷輸出的方括號結構，在模板位置觸發一個攻擊者選擇的方法調用（selected method dispatch），或導致任意記憶體分配，進而造成資源耗盡。若應用程式的語言處理器子類別定義了具有副作用的公共方法，這些方法將可被攻擊者以選擇的參數調用。由於該函式庫自 2016 年後未更新，目前尚未有修補版本。建議部署的系統應避免使用 HtmlArea 欄位類型，或應應用提供的補丁進行修復。",
    tags: ["CVE-2026-13051", "Perl", "Form-Processor", "HTML::Tidy", "LPE", "CWE-470"],
    title_en: "Perl Form-Processor Library Exposed to CVE-2026-13051 Vulnerability, Triggerable via HTML::Tidy Method Dispatch and Resource Exhaustion",
    summary_en: "The Perl module Form::Processor::Field::HtmlArea, with versions ranging from 0.06 to 1.162360, contains a critical security vulnerability, CVE-2026-13051. This vulnerability allows an attacker to submit maliciously crafted Markup content, utilizing the HTML::Tidy diagnostic function to pass the input value to the add_error function as a message key for Locale::Maketext. Because the default language handler compiles non-dictionary entries into bracket-marked templates, an attacker can exploit the bracket structure of the Tidy diagnostic output to trigger a selected method dispatch at a template location, or cause arbitrary memory allocation, leading to resource exhaustion. If the application's language handler subclass defines public methods with side effects, these methods can be called by the attacker with selected parameters. Since this library has not been updated since 2016, no patch version is currently available. Systems deploying this library are advised to avoid using the HtmlArea field type, or to apply the provided patch for remediation.",
    tags_en: ["CVE-2026-13051", "Perl", "Form-Processor", "HTML::Tidy", "LPE", "CWE-470"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/11", lang: "EN" }
    ]
  },
  {
    id: "20260813-077",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl Data::MuForm::Localizer 存在 CVE-2026-13048 漏洞，可透過訊息目錄執行程式碼",
    summary: "Data::MuForm::Localizer 函式庫在版本 0.05 及以下存在一個嚴重的程式碼執行漏洞 (CVE-2026-13048)。此漏洞的根本原因在於 `load_lexicon` 函式在建構訊息目錄路徑時，未檢查語言屬性是否為純粹的區域設定標籤 (bare locale tag)，允許攻擊者透過包含 `../` 路徑片段的語言屬性，執行路徑穿越 (Path Traversal)，最終載入任意具有 `.po` 副檔名的檔案。更致命的是，在解析該目錄的標頭訊息時，`extract_header_msgstr` 會將 `Plural-Forms:` 標頭內容傳遞給一個會被立即評估的字串，使得攻擊者可以透過惡意設定的標頭，執行任意系統命令。若應用程式的語言屬性來自請求資料或 `Accept-Language` 標頭，且攻擊者能放置惡意 `.po` 檔案，則可達成應用程式使用者權限的程式碼執行。修補建議是必須應用提供修補的版本，或在無法修補時，不應從請求資料獲取語言屬性，並應透過固定支援標籤表來映射所有請求的區域設定。此漏洞屬於 CWE-95 (Eval Injection) 和 CWE-22 (Path Traversal)。",
    tags: ["CVE-2026-13048", "Data::MuForm::Localizer", "Perl", "Path Traversal", "程式碼執行", "CVE"],
    title_en: "Perl Data::MuForm::Localizer has CVE-2026-13048 vulnerability, allowing code execution via message directory",
    summary_en: "The Data::MuForm::Localizer library contains a critical code execution vulnerability (CVE-2026-13048) in versions 0.05 and earlier. The root cause lies in the `load_lexicon` function, which fails to validate whether a language attribute is a bare locale tag when constructing the message directory path. This allows an attacker to perform Path Traversal by including `../` path segments in the language attribute, ultimately leading to the loading of an arbitrary file with a `.po` extension. More critically, when parsing the header messages of this directory, `extract_header_msgstr` passes the content of the `Plural-Forms:` header to a string that is immediately evaluated, enabling an attacker to execute arbitrary system commands via a maliciously configured header. If the application's language attribute originates from request data or the `Accept-Language` header, and an attacker can place a malicious `.po` file, then code execution at the application user's privilege level can be achieved. The recommended remediation is to apply the patched version or, if patching is not possible, avoid obtaining the language attribute from request data and instead map all requested locales using a fixed list of supported tags. This vulnerability is classified as CWE-95 (Eval Injection) and CWE-22 (Path Traversal).",
    tags_en: ["CVE-2026-13048", "Data::MuForm::Localizer", "Perl", "Path Traversal", "Code Execution", "CVE"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/10", lang: "EN" }
    ]
  },
  {
    id: "20260813-078",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl 模組 HTML::FormHandler 存在 CVE-2022-4993 漏洞，可導致方法調用與資源耗盡",
    summary: "HTML::FormHandler 模組的 0.40068 及更早版本，因其處理請求資料時使用錯誤訊息文字作為 `Locale::Maketext` 括號標記法模板，存在安全漏洞 CVE-2022-4993。此漏洞允許攻擊者執行選定的方法調用（Selected Method Dispatch）和資源耗盡攻擊。攻擊向量主要來自於應用程式在處理不可信的表單資料時，若使用該模組的 `add_error` 或 `_apply_actions` 函數，且這些資料被用於生成錯誤訊息模板。攻擊者可透過惡意輸入觸發未處理的例外（unhandled exception），或在單次請求中分配任意大量記憶體，甚至可調用具有副作用的公共方法。開發者應立即升級至修補版本，或實施修補程式，確保所有來自不可信欄位的值在作為模板使用前，能正確地轉義括號標記法元字元（bracket notation metacharacters）。",
    tags: ["CVE-2022-4993", "HTML::FormHandler", "Perl", "資源耗盡", "模板注入"],
    title_en: "Perl Module HTML::FormHandler Contains CVE-2022-4993 Vulnerability, Allowing Method Dispatch and Resource Exhaustion",
    summary_en: "Versions 0.40068 and earlier of the HTML::FormHandler module contain a security vulnerability, CVE-2022-4993. This vulnerability arises because the module uses error message text as a `Locale::Maketext` bracket notation template when processing request data. This flaw allows an attacker to execute selected method dispatch and resource exhaustion attacks. The attack vector primarily originates when an application processes untrusted form data using the module's `add_error` or `_apply_actions` functions, and this data is subsequently used to generate error message templates. An attacker can trigger an unhandled exception via malicious input, or allocate an arbitrary amount of memory in a single request, and even call public methods with side effects. Developers should immediately upgrade to a patched version or implement a patch, ensuring that all values from untrusted fields are correctly escaped before being used as template bracket notation metacharacters.",
    tags_en: ["CVE-2022-4993", "HTML::FormHandler", "Perl", "Resource Exhaustion", "Template Injection"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/9", lang: "EN" }
    ]
  },
  {
    id: "20260813-079",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Perl 語言發布 CVE-2026-19487：舊版本在 Aho-Corasick 預掃描時可能產生錯誤的正規表達式匹配結果",
    summary: "Perl 語言的開發團隊發布了 CVE-2026-19487，指出從 5.9.4 到 5.41.9 的版本在處理正規表達式時存在缺陷。此漏洞發生在 Aho-Corasick 預掃描（prescan）階段，當一個過時的失敗標誌（stale failure flag）過早終止預掃描時，會導致正規表達式匹配結果不正確。具體來說，當引擎在失敗過渡（failing transition）時設定了失敗標誌，但後續成功的過渡沒有清除該標誌，預掃描就會誤判為失敗並提前停止，從而錯過本應匹配的候選結果。這可能導致應用程式的存取或過濾決策錯誤。建議使用者應升級至 Perl 5.42.0 或更高版本，或應用上游提供的修補程式，以修復此控制流實現錯誤。",
    tags: ["Perl", "CVE-2026-19487", "正規表達式", "Aho-Corasick", "軟體漏洞"],
    title_en: "Perl Releases CVE-2026-19487: Older Versions May Produce Incorrect Regex Matching Results During Aho-Corasick Prescan",
    summary_en: "The Perl development team has released CVE-2026-19487, pointing out a flaw in versions ranging from 5.9.4 to 5.41.9 when handling regular expressions. This vulnerability occurs during the Aho-Corasick prescan stage. When a stale failure flag prematurely terminates the prescan, it can lead to incorrect regular expression matching results. Specifically, if the engine sets a failure flag during a failing transition, but a subsequent successful transition fails to clear this flag, the prescan may incorrectly determine failure and stop prematurely, thereby missing potential matching results. This could lead to incorrect access or filtering decisions in applications. Users are advised to upgrade to Perl 5.42.0 or later, or apply the patch provided by the upstream source, to fix this control flow implementation error.",
    tags_en: ["Perl", "CVE-2026-19487", "Regular Expression", "Aho-Corasick", "Software Vulnerability"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/8", lang: "EN" }
    ]
  },
  {
    id: "20260813-080",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Apache Shindig 曝出 CVE-2026-66256：透過 XStream 反序列化實現遠端程式碼執行",
    summary: "Apache Shindig 專案存在一項「不受信任資料反序列化」的漏洞，編號為 CVE-2026-66256。此漏洞影響 Apache Shindig Common (org.apache.shindig:shindig-common) 和 Apache Shindig Social-Api (org.apache.shindig:shindig-social-api) 的所有版本。攻擊者若能存取 Shindig REST API，可透過傳送特製的請求，觸發伺服器上的任意程式碼執行（Remote Code Execution）。由於該專案已退役（retired），維護者表示不會發布修復此漏洞的版本。因此，建議使用者應尋找替代方案，或嚴格限制對該 Shindig 實例的存取權限，僅限於信任的使用者。",
    tags: ["Apache Shindig", "CVE-2026-66256", "XStream", "反序列化漏洞", "RCE", "OpenSocial"],
    title_en: "Apache Shindig Exposed to CVE-2026-66256: Remote Code Execution via XStream Deserialization",
    summary_en: "The Apache Shindig project contains an 'untrusted data deserialization' vulnerability, identified as CVE-2026-66256. This vulnerability affects all versions of Apache Shindig Common (org.apache.shindig:shindig-common) and Apache Shindig Social-Api (org.apache.shindig:shindig-social-api). An attacker who can access the Shindig REST API can trigger arbitrary code execution (Remote Code Execution) by sending a specially crafted request. Since the project is retired, maintainers have stated they will not release a patched version. Therefore, users are advised to seek alternative solutions or strictly limit access to the Shindig instance, restricting it only to trusted users.",
    tags_en: ["Apache Shindig", "CVE-2026-66256", "XStream", "Deserialization Vulnerability", "RCE", "OpenSocial"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/7", lang: "EN" }
    ]
  },
  {
    id: "20260813-081",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "2026年7月資安產業併購綜覽：大型企業積極收購身份驗證、AI安全與網路可觀測性技術",
    summary: "2026年7月宣布了多筆資安相關的併購（M&A）交易。這些交易顯示了市場對身份管理、AI安全、以及網路可觀測性（Observability）的強勁需求。主要交易包括：Barracuda Networks收購Evo Security，旨在透過整合多租戶身份、IAM和PAM功能擴展BarracudaONE平台；Cyera以約10億美元收購Oasis Security，目標是將資料安全平台與非人類身份治理結合，保護企業AI代理和服務帳戶；Okta則簽約收購Permiso Security，以增強其身份威脅偵測（ITDR）能力，保護人類、機器和自主AI身份；此外，Palo Alto Networks收購Embrace，用於整合行動可觀測性和用戶遙測數據；Qualcomm收購SAM Seamless Network，將其網路安全軟體嵌入晶片組和閘道器，保護通訊網路。這些併購趨勢反映了企業在面對複雜的混合雲環境、AI應用擴展以及身份邊界模糊化時，對更全面、更深入的資安保護解決方案的追求。",
    tags: ["M&A", "Barracuda Networks", "Cyera", "Okta", "Palo Alto Networks", "身份管理", "AI安全", "網路可觀測性"],
    title_en: "July 2026 Cybersecurity M&A Review: Large Enterprises Actively Acquire Identity, AI Security, and Network Observability Technologies",
    summary_en: "July 2026 saw the announcement of multiple cybersecurity-related Mergers and Acquisitions (M&A) deals. These transactions highlight strong market demand for identity management, AI security, and network observability. Key deals include: Barracuda Networks acquiring Evo Security, aiming to expand the BarracudaONE platform by integrating multi-tenant identity, IAM, and PAM functionalities; Cyera acquiring Oasis Security for approximately $1 billion, with the goal of combining data security platforms with non-human identity governance to protect enterprise AI agents and service accounts; and Okta signing the acquisition of Permiso Security to enhance its Identity Threat Detection and Response (ITDR) capabilities, protecting human, machine, and autonomous AI identities. Furthermore, Palo Alto Networks acquired Embrace to integrate mobile observability and user telemetry data; and Qualcomm acquired SAM Seamless Network to embed its network security software into chipsets and gateways, securing communication networks. These M&A trends reflect enterprises' pursuit of more comprehensive and deep cybersecurity protection solutions as they face complex hybrid cloud environments, expanding AI applications, and blurring identity boundaries.",
    tags_en: ["M&A", "Barracuda Networks", "Cyera", "Okta", "Palo Alto Networks", "Identity Management", "AI Security", "Network Observability"],
    sources: [
      { name: "SecurityWeek", url: "https://securityweek.com/cybersecurity-ma-roundup-21-deals-announced-in-july-2026", lang: "EN" }
    ]
  },
  {
    id: "20260813-082",
    trackers: ["os"],
    category: "Android",
    title: "Google Gboard 推出 Rambler 功能：結合 Gemini 智慧提升文字轉錄與文本編輯體驗",
    summary: "Google 在 Gboard 輸入法中推出了名為 Rambler 的新功能，預計將是 Pixel 11 系列的旗艦 Gemini 智慧功能。使用者需透過 Gboard 右上角的麥克風圖示啟動，該功能會佔用整個建議區，並以波形狀顯示。與傳統即時轉錄不同，Rambler 需使用者完成語音輸入後，點擊確認圖示才能進行轉錄，這使其更像是一個與 Gemini 應用程式的對話或提示。此功能能夠捕捉使用者的語意，並自動過濾掉語氣詞或冗餘的句子。此外，使用者還可以要求 Gboard 改變文本風格、擴展內容或添加表情符號。若需修改或補充內容，可再次點擊麥克風圖示。Google 也提供了一個設定，允許 Rambler 使用個人詞典中的相關術語來提升輸出品質。雖然 Google 仍保留了傳統的「Standard」語音轉寫系統供選擇，但 Rambler 的設計目標是讓使用者能「專注於思緒，並用自己的話語進行修改」。",
    tags: ["Google", "Gboard", "Gemini", "Pixel 11", "Rambler", "語音轉寫"],
    title_en: "Google Gboard Launches Rambler Feature: Enhancing Transcription and Text Editing with Gemini Intelligence",
    summary_en: "Google has introduced a new feature in Gboard called Rambler, which is expected to be a flagship Gemini intelligence feature for the Pixel 11 series. Users activate the feature by tapping the microphone icon in the upper right corner of Gboard. This feature occupies the entire suggestion area and is displayed with a waveform. Unlike traditional real-time transcription, Rambler requires the user to complete the voice input and then tap a confirmation icon to initiate transcription, making it feel more like a dialogue or prompt within the Gemini application. This function is capable of capturing the user's intent and automatically filtering out filler words or redundant sentences. Furthermore, users can prompt Gboard to change the text style, expand content, or add emojis. If modifications or additions are needed, the user can tap the microphone icon again. Google also provides a setting that allows Rambler to utilize relevant terminology from the personal dictionary to improve output quality. Although Google retains the traditional 'Standard' voice transcription system as an option, Rambler is designed to allow users to 'focus on their thoughts and edit using their own words.'",
    tags_en: ["Google", "Gboard", "Gemini", "Pixel 11", "Rambler", "Voice Transcription"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/gboard-rambler-prompt", lang: "EN" }
    ]
  },
  {
    id: "20260813-083",
    trackers: ["os"],
    category: "Android",
    title: "三星 Galaxy S27 系列取消變焦光圈鏡頭：高成本與設計考量影響產品策略",
    summary: "據報導，三星決定取消在 Galaxy S27 系列手機上重新引入「可變光圈」攝影功能。此功能最早可追溯至 2018 年的 Galaxy S9+，允許硬體物理改變進入感光元件的光量，提供更靈活的拍攝效果。此前，三星曾考慮在 Galaxy S27 Ultra 上復興此功能，部分原因可能是回應市場對可變光圈技術的關注。然而，由於「更高的製造成本」以及「會導致鏡頭模組更厚重」等因素，三星最終決定放棄此設計變革。這顯示了在開發下一代智慧型手機時，除了應對 RAMageddon 等內部挑戰外，高昂的硬體成本和實際的影像輸出提升幅度，是影響產品策略的關鍵考量。Galaxy S27 系列預計於明年年初發布。",
    tags: ["Samsung", "Galaxy S27", "可變光圈", "Android", "硬體成本"],
    title_en: "Samsung Cancels Variable Aperture Lens on Galaxy S27 Series: High Costs and Design Constraints Influence Product Strategy",
    summary_en: "Reports indicate that Samsung has decided to discontinue the reintroduction of 'variable aperture' camera functionality on the Galaxy S27 series. This feature was first introduced in the Galaxy S9+ in 2018, allowing the physical aperture to change the amount of light entering the sensor, providing more flexible shooting effects. Previously, Samsung had considered reviving this feature on the Galaxy S27 Ultra, partly in response to market interest in variable aperture technology. However, due to factors such as 'higher manufacturing costs' and the potential for 'making the lens module bulkier,' Samsung ultimately decided to abandon the design change. This highlights that when developing next-generation smartphones, key considerations influencing product strategy are not only internal challenges like 'RAMageddon' but also high hardware costs and the actual improvement in image output. The Galaxy S27 series is expected to be released early next year.",
    tags_en: ["Samsung", "Galaxy S27", "Variable Aperture", "Android", "Hardware Cost"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/samsung-galaxy-s27-variable-aperture-camera-report", lang: "EN" }
    ]
  },
  {
    id: "20260813-084",
    trackers: ["os"],
    category: "Android",
    title: "歐盟測試揭露 Pixel 11 Pro 機型耐用性下降，較小尺寸版本表現尤其落後",
    summary: "根據歐洲產品註冊能源標籤（EPREL）的測試結果，Google Pixel 11 系列手機雖然整體獲得「B」級評級，但各機型的耐用性表現存在差異。特別是尺寸較小的 Pixel 11 Pro，在「重複自由墜落可靠性測試」中表現明顯落後。根據測試數據，Pixel 11 Pro 僅能承受 180 次墜落，獲得「B」級評級；相比之下，Pixel 11 和 Pixel 11 Pro XL 均能達到 270 次墜落，獲得「A」級評級。這與去年 Pixel 10 Pro 達到相同高標準（270 次墜落，A 級）的表現形成對比，引發了業界對 Pixel 11 Pro 耐用性是否出現實際變動的關注。文章指出，這可能源於測試錯誤，但也可能暗示 Pixel 11 Pro 本身在設計或材料上發生了影響，導致耐用性下降。",
    tags: ["Google", "Pixel 11 Pro", "EPREL", "耐用性", "手機硬體", "Android"],
    title_en: "EU Testing Reveals Pixel 11 Pro Model's Decline in Durability, Especially in Smaller Form Factor",
    summary_en: "According to testing results from the European Product Environmental Label (EPREL), while the Google Pixel 11 series generally received an 'B' rating, there are noticeable differences in durability performance across the various models. Specifically, the smaller Pixel 11 Pro performed significantly worse in the 'repeated free-fall reliability test.' According to the test data, the Pixel 11 Pro could only withstand 180 drops, earning a 'B' rating; in comparison, the Pixel 11 and Pixel 11 Pro XL both achieved 270 drops, earning an 'A' rating. This contrasts with the Pixel 10 Pro, which achieved the same high standard (270 drops, A rating) last year, raising industry concern about whether the Pixel 11 Pro's durability has actually declined. The article notes that this could be due to testing errors, but it might also suggest that the Pixel 11 Pro itself has undergone changes in design or materials, leading to reduced durability.",
    tags_en: ["Google", "Pixel 11 Pro", "EPREL", "Durability", "Mobile Hardware", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/google-pixel-11-pro-durability-drop-test", lang: "EN" }
    ]
  },
  {
    id: "20260813-085",
    trackers: ["os"],
    category: "Android",
    title: "Pixel 11 HiLight 通知燈功能評析：Google 應擴展其動態視覺通知應用範圍",
    summary: "本文針對 Pixel 11 系列手機的 HiLight 後置通知燈功能進行深度評析。HiLight 旨在作為視覺提示，用於顯示來電通知或與 Gemini 互動的狀態，例如可根據聯絡人設定的顏色發光。然而，作者認為其應用範圍過於受限，目前僅限於通話通知，未能充分發揮其動態視覺潛力。\n作者建議 Google 應擴展 HiLight 的功能，使其能支援更多應用程式的通知識別，例如能根據 Instagram 或 Reddit 等 App 的品牌顏色發光，或在偵測到垃圾電話或進行通話篩選時，透過特定顏色警示用戶。目前，Google 雖然已確認 Messages 將很快利用 HiLight，但仍未明確說明是否會開放給更多第三方應用程式使用。這項功能目前被鎖定在通話和 AI 助理功能中，限制了其作為通用通知中心的潛力。",
    tags: ["Pixel 11", "HiLight", "Google", "Android", "通知系統", "Gemini"],
    title_en: "Analysis of Pixel 11 HiLight Notification Light Feature: Google Should Expand Dynamic Visual Notification Applications",
    summary_en: "This article provides an in-depth analysis of the HiLight rear notification light feature on the Pixel 11 series phones. HiLight is designed to serve as a visual indicator for incoming calls or the status of interactions with Gemini, such as glowing with a color set by the contact. However, the author argues that its current application scope is too limited, currently restricted only to call notifications and failing to fully utilize its dynamic visual potential. The author suggests that Google should expand HiLight's functionality to support notification identification for more applications. For instance, it could glow with the brand colors of apps like Instagram or Reddit, or use specific colors to alert users when spam calls are detected or call screening is performed. Although Google has confirmed that Messages will soon utilize HiLight, it has not clearly stated whether it will be opened up to more third-party applications. Currently, this feature is locked into call and AI assistant functions, limiting its potential as a general notification center.",
    tags_en: ["Pixel 11", "HiLight", "Google", "Android", "Notification System", "Gemini"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/pixel-11-hilight-missed-opportunity-to-be-a-perfect-notification-light", lang: "EN" }
    ]
  },
  {
    id: "20260813-086",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列充電方案降價，PixelSnap 充電器與底座組合現價 $35",
    summary: "本文報導 Google 官方為 Pixel 11 系列手機推出的 PixelSnap 充電器與充電底座組合，目前在 Amazon 上大幅降價至 $35。此充電方案支援所有 Pixel 11 型號，提供 25W 無線充電能力，並具備完整的 Qi2 磁吸相容性。這使得原本僅適用於 Pixel 10 Pro XL 的快充功能，現在可以惠及整個 Pixel 11 系列陣容。雖然單獨購買充電充電盤（puck）的價格為 $40，但搭配底座的組合包價格更低，且該充電底座本身設計精良，能將 Google 的設計美學延伸至居家環境。此降價優惠讓使用者能以更經濟的方式為 Pixel 11 系列手機配備充電設備，建議購買者可利用此機會為新購的 Pixel 11、Pixel 11 Pro 或 Pixel 11 Pro XL 等型號添購配件。",
    tags: ["Google", "Pixel 11", "PixelSnap", "Qi2", "Android"],
    title_en: "Google Pixel 11 Series Charging Solution Discounted: PixelSnap Charger and Base Combo Now $35",
    summary_en: "This article reports on the PixelSnap charger and charging base combo, officially launched by Google for the Pixel 11 series of phones, which is currently heavily discounted to $35 on Amazon. This charging solution supports all Pixel 11 models, offering 25W wireless charging capability and featuring full Qi2 magnetic compatibility. This means that the fast charging function, which was originally only applicable to the Pixel 10 Pro XL, is now available to the entire Pixel 11 series lineup. Although the standalone charging puck costs $40, the combo package with the base is cheaper, and the charging base itself is well-designed, extending Google's design aesthetic into the home environment. This discount allows users to equip their Pixel 11 series phones with charging equipment in a more economical way. Purchasers are advised to take advantage of this opportunity to purchase accessories for newly acquired models such as the Pixel 11, Pixel 11 Pro, or Pixel 11 Pro XL.",
    tags_en: ["Google", "Pixel 11", "PixelSnap", "Qi2", "Android"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/official-pixel-11-pixelsnap-charger-and-stand-drops-to-35", lang: "EN" }
    ]
  },
  {
    id: "20260813-087",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 晶片搭載 Tensor G6，採用 TSMC 3nm 製程，並升級 Titan M3 安全晶片",
    summary: "Google 預計在 Pixel 11 系列手機中推出 Tensor G6 晶片。該晶片並非如傳聞所言成為首款採用 TSMC 2nm 製程的智慧型手機晶片，而是採用了 TSMC 的 3nm 製程。儘管如此，Tensor G6 仍具備多項升級，包括升級的 CPU，宣稱能提供「快 25% 的網頁瀏覽」和「快 15% 的應用程式啟動」；TPU 運算能力提升 50%；支援新的 Gemini Nano 裝置端 AI 模型；升級的 Image Signal Processor，以加速夜視和數位變焦；以及升級的 Titan M3 安全晶片。雖然業界曾預期 2nm 製程能帶來效率提升，但 Tensor G6 仍將在 AI 運算、影像處理和安全功能上進行強化。Pixel 11 此外還將將 NFC 天線移至手機頂部，以利支付功能。",
    tags: ["Google", "Pixel 11", "Tensor G6", "TSMC", "3nm", "Gemini Nano", "Titan M3"],
    title_en: "Google Pixel 11 Features Tensor G6 Chip Using TSMC 3nm Process and Upgraded Titan M3 Security Chip",
    summary_en: "Google plans to launch the Tensor G6 chip in the Pixel 11 series. Contrary to rumors that it will be the first smartphone chip using TSMC 2nm process, the chip utilizes TSMC's 3nm process. Nevertheless, the Tensor G6 includes several upgrades, including an upgraded CPU, which is claimed to provide '25% faster web browsing' and '15% faster application startup'; a 50% boost in TPU computing power; support for the new Gemini Nano on-device AI model; an upgraded Image Signal Processor to accelerate night vision and digital zoom; and an upgraded Titan M3 security chip. Although the industry had anticipated efficiency gains from the 2nm process, the Tensor G6 will still focus on enhancements in AI computing, image processing, and security features. Additionally, the Pixel 11 will move the NFC antenna to the top of the phone to facilitate payment functions.",
    tags_en: ["Google", "Pixel 11", "Tensor G6", "TSMC", "3nm", "Gemini Nano", "Titan M3"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/google-pixel-11-tensor-g6-chip-report", lang: "EN" }
    ]
  },
  {
    id: "20260813-088",
    trackers: ["os"],
    category: "Android",
    title: "Google Pixel 11 系列改善 NFC 天線位置，提升行動支付與「Tap to Share」便利性",
    summary: "Google 在 Pixel 11 系列手機上進行了人機介面優化，將 NFC 天線重新定位至設備頂部。此舉旨在讓使用者在進行行動支付（如透過 Square 等應用程式）或使用新的「Tap to Share」功能時，操作更直觀、更便利。雖然 NFC 天線的具體位置通常不影響功能，但將其移至頂部更符合使用者預期，並與 iPhone 等主流手機的設計邏輯一致。Pixel 11 系列除了更新 NFC 標籤外，還整合了「Tap to Share」功能，讓使用者能透過快速輕觸，輕鬆交換聯絡人卡片或分享大型檔案給附近的 Android 設備。Pixel 11 系列目前已開放預購，預計於 8 月 20 日發貨。",
    tags: ["Google Pixel 11", "NFC", "Android", "行動支付", "Tap to Share"],
    title_en: "Google Pixel 11 Series Improves NFC Antenna Placement to Enhance Mobile Payments and 'Tap to Share' Convenience",
    summary_en: "Google has optimized the user interface on the Pixel 11 series phones by relocating the NFC antenna to the top of the device. This change aims to make the operation more intuitive and convenient for users when performing mobile payments (such as through applications like Square) or utilizing the new 'Tap to Share' feature. Although the specific location of the NFC antenna typically does not affect functionality, moving it to the top aligns better with user expectations and matches the design logic of mainstream phones like the iPhone. In addition to updating the NFC tag, the Pixel 11 series integrates 'Tap to Share,' allowing users to easily exchange contact cards or share large files with nearby Android devices through a quick tap. The Pixel 11 series is currently available for pre-order and is scheduled to ship on August 20.",
    tags_en: ["Google Pixel 11", "NFC", "Android", "Mobile Payments", "Tap to Share"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/google-pixel-11-nfc-improvement", lang: "EN" }
    ]
  },
  {
    id: "20260813-089",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安業者揭露Chrome VPN/代理擴充套件詐騙潮：737款套件竊取用戶流量至SOCKS5代理",
    summary: "資安業者 Socket 追蹤到大規模的 Chrome 擴充套件活動，共發現 737 款，其中 274 款冒充 66 個知名 VPN 或隱私服務品牌。研究人員分析發現，絕大多數擴充套件都會將用戶的瀏覽器流量導向同一套 SOCKS5 代理基礎設施。這類擴充套件能讓代理伺服器掌握用戶的來源 IP、連線網站，甚至在未加密的 HTTP 連線時直接看到傳送內容。受騙品牌包括 Proton VPN、NordVPN、ExpressVPN 等。這些惡意套件主要鎖定俄語使用者，宣稱可協助存取被封鎖的服務。研究指出，部分惡意套件甚至會利用 Cloudflare 或 Google 的加密 DNS 服務來查詢代理伺服器位址，以規避明文 DNS 查詢。雖然 Google 已移除部分套件，但仍有大量類似結構的惡意套件持續上架，威脅用戶隱私。",
    tags: ["Chrome Web Store", "擴充套件", "SOCKS5 代理", "VPN 詐騙", "用戶隱私", "資安分析"],
    title_en: "Cybersecurity Firm Uncovers Chrome VPN/Proxy Extension Scam: 737 Extensions Steal User Traffic to SOCKS5 Proxy",
    summary_en: "The cybersecurity firm Socket tracked large-scale Chrome extension activity, discovering a total of 737 extensions, 274 of which impersonated 66 well-known VPN or privacy service brands. Researchers found that the vast majority of these extensions redirect user browser traffic to the same SOCKS5 proxy infrastructure. These extensions allow the proxy server to capture the user's source IP, connected websites, and even view transmitted content directly during unencrypted HTTP connections. Brands targeted by the scams include Proton VPN, NordVPN, and ExpressVPN. These malicious extensions primarily target Russian users, claiming to help access blocked services. The research indicates that some malicious extensions even utilize Cloudflare or Google's encrypted DNS services to query proxy server addresses, thereby evading plaintext DNS lookups. Although Google has removed some extensions, a large number of similarly structured malicious extensions continue to be listed, posing a threat to user privacy.",
    tags_en: ["Chrome Web Store", "Extension", "SOCKS5 Proxy", "VPN Scam", "User Privacy", "Cybersecurity Analysis"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178120", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-090",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Ironic Python Agent 容器管理功能存在安全模型實作缺陷，建議修補以防範未授權容器執行",
    summary: "Ironic Python Agent 的 ContainerHardwareManager 外掛程式（HWM）在 2025.2 版本中引入，允許操作員在 Ironic 清理、維護或部署流程中，透過 Podman 或 Docker 執行容器。然而，該初始實作存在多項安全缺陷，包括忽略了 `[container]/allow_arbitrary_containers` 安全機制的值。受影響的軟體版本為 `ironic-python-agent: >=11.0.0, <12.0.1`。為修復這些問題，開發者已推出更新版本，並提供了修補程式。若使用 OpenStack 提供的 ramdisk，則不受影響。若使用安裝了 Docker 或 Podman 的 ramdisk，且不需使用 Container HWM 功能，建議將 `deploy.container_clean_step` 和 `deploy.generic_container_step` 加入到 `[api]/disallow_service_steps`、`[api]/disallow_clean_steps` 和 `[api]/disallow_deploy_steps` 中以禁用不安全的程式碼。若確實需要使用此功能，操作員應將修補程式回溯到目前使用的分支，並根據最新文件評估其使用場景。",
    tags: ["Ironic Python Agent", "ContainerHardwareManager", "OpenStack", "安全模型缺陷", "CVE", "Podman", "Docker"],
    title_en: "Security Model Implementation Flaw in Ironic Python Agent Container Management Functionality; Patch Recommended to Prevent Unauthorized Container Execution",
    summary_en: "The ContainerHardwareManager (HWM) add-on in the Ironic Python Agent, introduced in version 2025.2, allows operators to execute containers using Podman or Docker during Ironic cleanup, maintenance, or deployment processes. However, this initial implementation contains multiple security flaws, including the failure to respect the value of the `[container]/allow_arbitrary_containers` security mechanism. The affected software versions are `ironic-python-agent: >=11.0.0, <12.0.1`. To fix these issues, developers have released an updated version and provided a patch. Systems using OpenStack-provided ramdisks are unaffected. If using a ramdisk with Docker or Podman installed, and the Container HWM functionality is not required, it is recommended to add `deploy.container_clean_step` and `deploy.generic_container_step` to `[api]/disallow_service_steps`, `[api]/disallow_clean_steps`, and `[api]/disallow_deploy_steps` to disable the insecure code. If this functionality is strictly required, operators should roll back the patch to the currently used branch and evaluate its use case based on the latest documentation.",
    tags_en: ["Ironic Python Agent", "ContainerHardwareManager", "OpenStack", "Security Model Flaw", "CVE", "Podman", "Docker"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/13/14", lang: "EN" }
    ]
  },
  {
    id: "20260813-091",
    trackers: ["security"],
    category: "前瞻技術",
    title: "駭客利用AI自主攻擊框架攻擊政府系統：具備多任務協同與自我修正能力",
    summary: "以色列資安新創 Dream Security 揭露，駭客架設的 AI 自主攻擊框架已達到高度複雜化，不僅能執行單一任務，更具備同時協調多個 AI 代理（最多可達 8 個）從事多種攻擊行為。攻擊行為包括自主破解政府員工憑證、從未認證的 API 端點竊取人員記錄，以及利用政府身分認證服務的簽章驗證漏洞植入後門。此框架的重大進展在於其具備「雙層機率決策機制」，能採用貝氏後驗機率排序（Bayesian prioritization）動態調整多條平行攻擊鏈的優先順序。此外，該框架還展現出自我修正能力，能在挖掘漏洞的過程中主動識別並排除誤報，例如將伺服器延遲誤判為 SQL 注入，後經重新驗證確認為 SMTP 寄信逾時。這代表 AI 攻擊已從單一條件決策，進化至具備複雜判斷與多任務協同的階段。",
    tags: ["AI 攻擊", "自主攻擊框架", "Dream Security", "政府系統", "貝氏後驗機率", "多代理攻擊"],
    title_en: "Hackers Use AI Autonomous Attack Framework to Target Government Systems: Featuring Multi-Task Coordination and Self-Correction Capabilities",
    summary_en: "Israeli cybersecurity startup Dream Security revealed that AI autonomous attack frameworks deployed by hackers have reached a high level of complexity. They can no longer execute single tasks but are equipped to simultaneously coordinate multiple AI agents (up to 8) to perform various attack behaviors. These attacks include autonomously cracking government employee credentials, exfiltrating personnel records from unauthenticated API endpoints, and implanting backdoors by exploiting signature validation vulnerabilities in government identity authentication services. The significant advancement of this framework is its 'dual-layer probabilistic decision mechanism,' which can dynamically adjust the priority of multiple parallel attack chains using Bayesian prioritization. Furthermore, the framework exhibits self-correction capabilities, actively identifying and discarding false positives during vulnerability discovery—for instance, misinterpreting server latency as SQL injection, only to confirm upon re-validation that it was an SMTP timeout. This indicates that AI attacks have evolved from single-condition decision-making to a stage featuring complex judgment and multi-task coordination.",
    tags_en: ["AI Attacks", "Autonomous Attack Framework", "Dream Security", "Government Systems", "Bayesian Prioritization", "Multi-Agent Attack"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178116", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-092",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Signal推出自動金鑰驗證功能，導入金鑰透明度機制強化通訊安全",
    summary: "Signal應用程式為提升端對端加密通訊的安全性，宣布推出自動金鑰驗證功能，並導入金鑰透明度（Key Transparency）機制。此功能旨在協助使用者自動確認聯絡人的公開金鑰是否被意外或惡意替換，從而降低攻擊者介入加密通訊的風險。傳統上，Signal訊息建立通訊需透過中央目錄取得對方公開金鑰，若該目錄遭入侵或惡意修改，攻擊者理論上可能將目標的公開金鑰替換為自己的金鑰，使訊息在雙方不知情時經過第三方。自動金鑰驗證透過持續記錄電話號碼、使用者名稱與公開金鑰之間的變更紀錄，並讓應用程式檢查當前金鑰是否與歷史紀錄一致。此機制由Cloudflare和資安公司Trail of Bits擔任獨立稽核方，確保紀錄的準確性。雖然此功能能確認帳號識別資訊與公開金鑰的對應紀錄是否一致，但仍無法證明帳號的實際控制權，建議使用者在聯繫對方時，仍應留意並使用原有安全號碼進行人工確認。",
    tags: ["Signal", "金鑰透明度", "端對端加密", "公開金鑰", "資安驗證", "加密通訊"],
    title_en: "Signal Launches Automatic Key Verification Feature, Introducing Key Transparency Mechanism to Enhance Communication Security",
    summary_en: "To enhance the security of its end-to-end encrypted communication, Signal has announced the launch of an automatic key verification feature and the introduction of a Key Transparency mechanism. This feature aims to help users automatically confirm whether a contact's public key has been accidentally or maliciously replaced, thereby reducing the risk of attackers intercepting encrypted communications. Traditionally, Signal messages require obtaining a recipient's public key through a central directory. If this directory is compromised or maliciously altered, an attacker could theoretically replace the target's public key with their own, allowing messages to pass through a third party without the users' knowledge. Automatic key verification continuously records changes to the association between phone numbers, usernames, and public keys, allowing the application to check if the current key matches the historical record. This mechanism is audited by independent auditors Cloudflare and the cybersecurity company Trail of Bits, ensuring the accuracy of the records. Although this feature can confirm whether the association between account identifiers and public keys is consistent, it cannot prove actual account control. Signal recommends that users remain vigilant and use existing security numbers for manual verification when contacting others.",
    tags_en: ["Signal", "Key Transparency", "End-to-End Encryption", "Public Key", "Security Verification", "Encrypted Communication"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178102", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-093",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Mozilla報告指出AI代理權限控管關鍵轉向「寫入操作」標準化",
    summary: "Mozilla發布《The State of Open Source AI》報告，指出AI產業的競爭焦點正從模型本身轉移至上層的「AI代理執行框架（agentic harness）」。隨著開放權重模型與封閉式模型的差距縮小，AI代理的行為模式和權限控制成為核心議題。報告強調，AI代理的執行流程、工具調用、記憶管理及權限控制，已成為決定其能力的主要環節。目前雖然已出現LangGraph、CrewAI等工作流程工具，以及MCP和Agent2Agent（A2A）等互通協定，但業界缺乏一套共通的權限模型來規範AI代理的行為。特別是「寫入操作」（如傳送訊息、修改資料或執行交易），可能造成難以逆轉的影響，因此Mozilla主張必須建立一套跨框架、統一的寫入權限標準，以防止使用者因「同意疲勞」而盲目授權。這套機制對於企業掌握AI代理的自主執行能力至關重要。",
    tags: ["Mozilla", "AI代理", "Agentic Harness", "權限控管", "MCP", "A2A", "開源AI"],
    title_en: "Mozilla Report Highlights Critical Shift in AI Agent Authorization Towards Standardization of 'Write Operations'",
    summary_en: "Mozilla released the report, *The State of Open Source AI*, pointing out that the competitive focus in the AI industry is shifting from the models themselves to the higher-level 'agentic harness.' As the gap between open-weight and closed-source models narrows, the behavior patterns and authorization control of AI agents have become core issues. The report emphasizes that the execution flow, tool calling, memory management, and authorization control of AI agents are now the primary determinants of their capability. Although workflow tools like LangGraph and CrewAI, and interoperability protocols such as MCP and Agent2Agent (A2A), have emerged, the industry lacks a common authorization model to govern AI agent behavior. Specifically, 'write operations' (such as sending messages, modifying data, or executing transactions) can cause irreversible impact. Therefore, Mozilla argues that a cross-framework, unified write authorization standard must be established to prevent users from granting permissions blindly due to 'consent fatigue.' This mechanism is crucial for enterprises to maintain control over the autonomous execution capabilities of AI agents.",
    tags_en: ["Mozilla", "AI Agents", "Agentic Harness", "Authorization Control", "MCP", "A2A", "Open-Source AI"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178100", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-094",
    trackers: ["security"],
    category: "前瞻技術",
    title: "Oligo Security 募資成功，推出執行階段安全平臺，強化 AI 應用程式漏洞防護",
    summary: "執行階段安全業者 Oligo Security 近期成功募資 6,000 萬美元，使公司累計募資達 1.4 億美元。Oligo 提出，隨著 Frontier AI 模型加速漏洞發現與利用，傳統靜態掃描已不足夠，必須結合應用程式執行期間的資訊進行判斷。Oligo 的執行階段安全平臺能夠監控應用程式與雲端工作負載的執行情況，特別延伸支援 AI 系統的執行階段安全。該平臺能取得函式呼叫及作業系統層級的系統呼叫等資訊，判斷程式庫與函式是否實際載入或執行，從而評估漏洞的實際利用可能性，並協助企業排定修補優先順序。此外，Oligo 推出 Runtime Exploit Blocking 功能，能將函式呼叫與系統呼叫關聯，辨識漏洞利用模式，並在核心層阻擋相關系統呼叫，無需關閉整個容器或程序，提供修補前的即時防護能力。Oligo 亦是 AWS Security Hub Extended 的合作夥伴，能監控 AWS 環境中的 AI 工作負載，掌握模型行為及供應鏈風險。",
    tags: ["Oligo Security", "執行階段安全", "AI 安全", "Runtime Exploit Blocking", "AWS Security Hub Extended", "雲端安全"],
    title_en: "Oligo Security Completes Funding Round, Launches Runtime Security Platform to Enhance AI Application Vulnerability Protection",
    summary_en: "Runtime security provider Oligo Security recently closed a $60 million funding round, bringing the company's total funding to $140 million. Oligo argues that as Frontier AI models accelerate vulnerability discovery and exploitation, traditional static scanning is insufficient, necessitating the integration of information gathered during application runtime. Oligo's runtime security platform monitors the execution of applications and cloud workloads, with a specific focus on runtime security for AI systems. The platform collects information such as function calls and operating system-level system calls to determine whether libraries and functions are actually loaded or executed. This allows it to assess the actual exploitability of vulnerabilities and assist enterprises in prioritizing patching efforts. Furthermore, Oligo introduced Runtime Exploit Blocking, which correlates function calls and system calls to identify exploit patterns and blocks related system calls at the kernel level, without requiring the shutdown of the entire container or process, thus providing immediate protection before patching. Oligo is also a partner of AWS Security Hub Extended, enabling it to monitor AI workloads within AWS environments, track model behavior, and manage supply chain risks.",
    tags_en: ["Oligo Security", "Runtime Security", "AI Security", "Runtime Exploit Blocking", "AWS Security Hub Extended", "Cloud Security"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/178098", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260813-095",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Meet「為我記錄」功能擴展至實體會議，透過 Gemini AI 支援會議筆記與摘要",
    summary: "Google Meet 宣布其「為我記錄」（Take Notes for me）功能已擴展，使其不僅能用於線上會議，現在也支援實體（in-person）會議。此功能由 Gemini 驅動，使用者在 Android 和 iOS 裝置上，可以在「新通話」按鈕旁看到新的「記錄筆記」圖示，網頁版 meet.google.com 也已更新。使用者只需點擊「開始記錄筆記」，並設定裝置在場，即可啟動功能。會議結束後，Google Meet 會自動生成完整的文字稿、會議摘要，以及行動項目清單，並儲存至 Google Drive 的 Google 文件中，同時也會透過電子郵件提供連結。目前此功能僅支援單一語言，且建議會議長度為 15 分鐘。此功能對消費者而言，需要訂閱 Google AI Pro 或 AI Ultra；對於 Workspace 企業版，則會逐步開放給 Business Standard/Plus、Enterprise Standard/Plus，以及 Frontline Plus 等版本。Google Meet for Android 將率先推出，iOS 支援預計在八月底開始滾動發布。",
    tags: ["Google Meet", "Gemini", "AI", "Google Workspace", "Android", "iOS"],
    title_en: "Google Meet's 'Take Notes for me' Feature Expands to In-Person Meetings, Powered by Gemini AI for Meeting Notes and Summaries",
    summary_en: "Google Meet has announced that its 'Take Notes for me' feature has expanded, allowing it to function not only for online meetings but also for in-person meetings. Powered by Gemini, users on Android and iOS devices will see a new 'Take Notes' icon next to the 'New Call' button, and the web version at meet.google.com has also been updated. Users simply need to click 'Start Taking Notes' and set the device to be present to activate the function. After the meeting concludes, Google Meet will automatically generate a complete transcript, meeting summary, and action item list, saving them to Google Docs in Google Drive, and also providing a link via email. Currently, this feature only supports a single language, and a meeting length of 15 minutes is recommended. For consumers, this feature requires a subscription to Google AI Pro or AI Ultra; for Workspace enterprise editions, it will be gradually rolled out to versions such as Business Standard/Plus, Enterprise Standard/Plus, and Frontline Plus. Google Meet for Android will launch first, with iOS support expected to begin rolling out by the end of August.",
    tags_en: ["Google Meet", "Gemini", "AI", "Google Workspace", "Android", "iOS"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/google-meet-take-notes-in-person", lang: "EN" }
    ]
  },
  {
    id: "20260813-096",
    trackers: ["os"],
    category: "重點關注",
    title: "NVIDIA GeForce NOW 雲端遊戲服務，讓使用者在任何設備上享受高階 PC 遊戲體驗",
    summary: "隨著 PC 組裝與硬體元件價格上漲，許多玩家在升級老舊遊戲機時面臨挑戰。NVIDIA 的雲端遊戲服務 GeForce NOW 提供了一種解決方案，讓使用者無需購買全新高階硬體，即可在各種設備（如 Chromebook、老舊 Mac、手機、平板等）上串流 RTX 級遊戲。該服務透過原生應用程式或網頁瀏覽器提供遊戲體驗，甚至可以在手機或平板上以 Ultra 設定運行如 Cyberpunk 2077 等大型遊戲。\nGeForce NOW 的優勢包括：可直接連動 Steam、Epic Games Store、Xbox PC Game Pass 等現有遊戲庫，無需重新購買遊戲；遊戲內容儲存在雲端，避免佔用本地硬碟空間，且無需等待大型遊戲補丁下載；此外，它不受單一設備限制，具備高度的普及性。\n服務提供多個等級：免費方案提供 1080p/60fps；Performance 方案提供 1440p/60fps RTX 遊戲；Ultimate 方案則可提供最高達 RTX 5080 GPU 的串流，支援 5K 120fps、DLSS 4 和全光線追蹤，性能相當於 PS5 Pro 以上的頂級主機體驗。這讓玩家能以更經濟、更便捷的方式，享受高畫質 PC 遊戲。",
    tags: ["NVIDIA", "GeForce NOW", "雲端遊戲", "PC 遊戲", "RTX", "Steam"],
    title_en: "NVIDIA GeForce NOW Cloud Gaming Service Delivers High-End PC Gaming Experience on Any Device",
    summary_en: "As the prices of PC components and hardware continue to rise, many gamers face challenges when upgrading older gaming machines. NVIDIA's cloud gaming service, GeForce NOW, offers a solution, allowing users to stream RTX-level games on various devices (such as Chromebooks, older Macs, phones, and tablets) without needing to purchase new high-end hardware. The service provides the gaming experience through native applications or web browsers, enabling the running of large-scale games like Cyberpunk 2077 even on mobile phones or tablets with Ultra settings. GeForce NOW's advantages include: direct integration with existing game libraries such as Steam, Epic Games Store, and Xbox PC Game Pass, eliminating the need to repurchase games; game content is stored in the cloud, preventing local hard drive space usage and eliminating wait times for large game patch downloads; furthermore, it is not limited by a single device, offering high accessibility. The service offers multiple tiers: the Free plan provides 1080p/60fps; the Performance plan offers 1440p/60fps RTX gaming; and the Ultimate plan can stream up to RTX 5080 GPU, supporting 5K 120fps, DLSS 4, and full ray tracing, providing performance equivalent to top-tier consoles like the PS5 Pro or better. This allows players to enjoy high-definition PC gaming in a more economical and convenient manner.",
    tags_en: ["NVIDIA", "GeForce NOW", "Cloud Gaming", "PC Gaming", "RTX", "Steam"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/nvidia-geforce-now-high-end-gaming-everywhere-without-headache-video", lang: "EN" }
    ]
  },
  {
    id: "20260813-097",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Pixel Tag 追蹤器預計十一月上市，搭載 UWB 技術，打造 Android Find Hub 生態系",
    summary: "Google 宣布推出首款自有品牌 Find Hub 追蹤器 Pixel Tag，預計於今年十一月上市，售價為單個 $29，四個組合包 $99。Pixel Tag 支援 UWB（超寬頻）技術，可透過附近設備連接，協助用戶追蹤遺失的物品或行李。相較於市場上的競爭產品，Pixel Tag 最大的特色是新增了「Left Behind」（遺留物）功能。雖然 Google 推出自有的硬體追蹤器，但在市場上，AirTag 等產品已建立起龐大的生態系統。Pixel Tag 的外觀極為微小，雖然這使其具有易於隱藏的優點，但也可能導致其在配件兼容性上面臨挑戰，需要 Google 建立完整的配件生態系統。本產品的推出，是 Google 積極佈局自有硬體生態的策略，旨在鞏固 Android Find Hub 的地位。",
    tags: ["Google", "Pixel Tag", "Find Hub", "UWB", "Android", "硬體生態系"],
    title_en: "Google Pixel Tag Tracker Expected to Launch in November, Featuring UWB Technology to Build the Android Find Hub Ecosystem",
    summary_en: "Google announced the launch of its first proprietary Find Hub tracker, the Pixel Tag, which is expected to go on sale this November. It is priced at $29 for a single unit and $99 for a four-pack. The Pixel Tag supports UWB (Ultra-Wideband) technology, allowing it to connect with nearby devices to help users track lost items or luggage. Compared to competing products on the market, the Pixel Tag's biggest feature is the addition of a 'Left Behind' function. Although Google is launching its own hardware tracker, the market already has a large ecosystem established by products like AirTag. The Pixel Tag is extremely small, which gives it the advantage of being easily concealable, but it may also pose challenges regarding accessory compatibility, requiring Google to build a complete accessory ecosystem. The launch of this product is part of Google's strategy to establish its own hardware ecosystem, aiming to solidify the position of the Android Find Hub.",
    tags_en: ["Google", "Pixel Tag", "Find Hub", "UWB", "Android", "Hardware Ecosystem"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/google-pixel-tag-airtag-moto-tag", lang: "EN" }
    ]
  },
  {
    id: "20260813-098",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 發布 Gemini 3.7 Flash：強調開發者回饋與多領域效能提升",
    summary: "Google 在推出 Gemini 3.7 Flash 後，持續加速其 AI 模型迭代週期。此新模型聲稱在軟體工程、網頁開發和知識工作等領域有顯著提升。在程式碼方面，相較於 3.6 Flash，其在 DeepSWE v1.1 基準測試上的表現從 49.0% 提升至 65.3%，在 FrontierCode 1.1 Main 上亦有提升。對於網頁開發，其生成功能完整的佈局和應用程式的能力更強，在 WebDev Arena 的 Elo 分數達到 1588。在知識密集型領域，如金融和法律，模型在推理和準確性方面表現優異，例如在 GDP.pdf 基準測試上，其表現顯著優於 3.6 Flash。開發者指出，3.7 Flash 在應對障礙、釐清意圖和遵循指令方面更為精準，能更有效地進行多步驟規劃和工具呼叫。此外，Google 也更新了針對化學、生物、放射和核能（CBRN）以及網路犯罪領域的濫用安全保護措施。目前，Gemini 3.7 Flash 已以 $0.75/1M 輸入和 $3.75/1M 輸出的入門價格提供，並在 Gemini app、AI Studio、Android Studio 等多個平台可用。",
    tags: ["Google", "Gemini 3.7 Flash", "AI 模型", "軟體工程", "知識工作"],
    title_en: "Google Releases Gemini 3.7 Flash: Highlighting Developer Feedback and Multi-Domain Performance Improvements",
    summary_en: "Following the launch of Gemini 3.7 Flash, Google continues to accelerate its AI model iteration cycle. This new model reportedly shows significant improvements in areas such as software engineering, web development, and knowledge work. In terms of coding, its performance on the DeepSWE v1.1 benchmark increased from 49.0% to 65.3% compared to 3.6 Flash, and it also shows improvements on FrontierCode 1.1 Main. For web development, its ability to generate complete layouts and applications is stronger, achieving an Elo score of 1588 on the WebDev Arena. In knowledge-intensive domains, such as finance and law, the model demonstrates excellent reasoning and accuracy, notably outperforming 3.6 Flash on the GDP.pdf benchmark. Developers note that 3.7 Flash is more precise in handling constraints, clarifying intent, and following instructions, enabling more efficient multi-step planning and tool calling. Furthermore, Google has updated its abuse safety protections for the fields of Chemical, Biological, Radiological, and Nuclear (CBRN) and cybercrime. Gemini 3.7 Flash is currently available at an introductory price of $0.75/1M input and $3.75/1M output, and can be accessed across multiple platforms, including the Gemini app, AI Studio, and Android Studio.",
    tags_en: ["Google", "Gemini 3.7 Flash", "AI Model", "Software Engineering", "Knowledge Work"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/gemini-3-7-flash-launch", lang: "EN" }
    ]
  },
  {
    id: "20260813-099",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Gemini 擴大生態系整合，新增超過十個連動應用程式，強化數位生活連結性",
    summary: "Google 的 AI 助理 Gemini 正在積極擴展其生態系統整合能力，旨在讓使用者能更深入地將 Gemini 連接到日常數位生活各個面向。Google 宣布，一系列「全新」的連動應用程式將在未來數週內逐步推出。這些新整合涵蓋生產力、娛樂、在地服務、音樂和各種生活服務等類別。新增的應用程式包括 Granola、Otter.ai、Wix、Fever、GetYourGuide、Localiza、OpenTable (UK)、Ticketmaster、iHeartRadio、Pandora、Angi 和 Zocdoc 等。這些整合將加入 Gemini 已經支援的眾多應用程式，例如 Canva、GitHub、Google Home 和 Instacart 等。值得注意的是，雖然 OpenTable 的整合對美國用戶已開放，但這次的更新特別增加了對英國用戶的支援。這顯示 Google 正在透過擴大外部 API 連結，提升 Gemini 的實用性和市場覆蓋範圍，使其成為一個更全面的個人數位助理。",
    tags: ["Google Gemini", "AI 助理", "應用程式整合", "生態系統", "數位生活", "OpenTable"],
    title_en: "Google Gemini expands ecosystem integration with over ten new connected applications, strengthening digital life connectivity",
    summary_en: "Google's AI assistant, Gemini, is actively expanding its ecosystem integration capabilities, aiming to allow users to connect Gemini more deeply to various aspects of their daily digital lives. Google announced that a series of 'new' connected applications will be rolled out gradually over the coming weeks. These new integrations cover categories such as productivity, entertainment, local services, music, and various lifestyle services. The newly added applications include Granola, Otter.ai, Wix, Fever, GetYourGuide, Localiza, OpenTable (UK), Ticketmaster, iHeartRadio, Pandora, Angi, and Zocdoc. These integrations will join the many applications Gemini already supports, such as Canva, GitHub, Google Home, and Instacart. Notably, while the OpenTable integration is already available to US users, this update specifically adds support for UK users. This demonstrates Google's strategy of enhancing Gemini's utility and market coverage by expanding external API connections, positioning it as a more comprehensive personal digital assistant.",
    tags_en: ["Google Gemini", "AI Assistant", "Application Integration", "Ecosystem", "Digital Life", "OpenTable"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/gemini-is-getting-over-a-dozen-new-connected-apps-heres-the-list", lang: "EN" }
    ]
  },
  {
    id: "20260813-100",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 硬件活動與 AI 趨勢匯報：涵蓋最新科技動態與市場觀察",
    summary: "本文為一則科技新聞快訊，回顧了近期多項重大科技事件。內容涵蓋了 Google 舉辦的硬體活動，以及市場上出現的強大且具成本效益的 AI 模型。文章也提及了其他文化和科技事件，例如日食和音樂產業動態。整體而言，這是一份綜合性的科技資訊彙報，旨在讓讀者快速掌握最新的科技發展趨勢，特別是 AI 領域的競爭與進展。",
    tags: ["Google", "AI 模型", "硬體活動", "科技趨勢", "市場觀察"],
    title_en: "Google Hardware Events and AI Trends Report: Covering Latest Tech Developments and Market Insights",
    summary_en: "This article is a tech news brief reviewing several major recent technological events. The content covers Google's hardware activities, as well as the emergence of powerful and cost-effective AI models in the market. It also mentions other cultural and technological events, such as solar eclipses and music industry dynamics. Overall, this is a comprehensive tech information roundup designed to help readers quickly grasp the latest technological development trends, especially the competition and progress in the AI domain.",
    tags_en: ["Google", "AI Models", "Hardware Events", "Tech Trends", "Market Insights"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/13/inbox-newsletter-10", lang: "EN" }
    ]
  },
  {
    id: "20260813-101",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果公司提交外App Store購買佣金提案：標準應用程式費率為15%",
    summary: "在與Epic Games的法律訴訟中，蘋果公司提交了其關於App Store以外購買的佣金提案。此前，法院曾要求蘋果公司允許開發者將用戶引導至替代的購買方式。蘋果提交的提案結構為：標準應用程式收取15%的佣金；Video Partner Program (VPP)、News Partner Program (NPP)、Mini Apps Partner Program (MPP) 和訂閱續約收取10%；以及Small Business Program應用程式收取5%。蘋果主張，這些費率能讓美國開發者群體在App Store以外進行盈利連結，並能為蘋果的智慧財產權工具和服務恢復部分價值。蘋果同時將其提案與Google Play Store、Samsung Galaxy Store和Amazon Android App Marketplace等競爭對手的佣金進行比較。儘管蘋果提交了提案，但公司仍表示希望相關費率決定程序能暫停，等待最高法院的審理結果。Epic Games將有機會回應蘋果的提案。",
    tags: ["Apple", "Epic Games", "App Store", "佣金", "法律訴訟", "Apple IAP"],
    title_en: "Apple Submits Off-App Store Purchase Commission Proposal: Standard App Rate at 15%",
    summary_en: "In the legal dispute with Epic Games, Apple has submitted its commission proposal for purchases made outside the App Store. Previously, the court had mandated that Apple allow developers to direct users to alternative purchasing methods. Apple's proposed structure is as follows: a standard application commission of 15%; 10% for Video Partner Program (VPP), News Partner Program (NPP), Mini Apps Partner Program (MPP), and subscription renewals; and 5% for Small Business Program applications. Apple argues that these rates will allow the US developer community to monetize links outside the App Store and help recover some value for Apple's intellectual property tools and services. Apple also compares its proposal to the commissions charged by competitors such as Google Play Store, Samsung Galaxy Store, and Amazon Android App Marketplace. Although Apple has submitted the proposal, the company stated that it still hopes for a suspension of the relevant fee rate determination process, pending the Supreme Court's ruling. Epic Games will have the opportunity to respond to Apple's proposal.",
    tags_en: ["Apple", "Epic Games", "App Store", "Commission", "Legal Litigation", "Apple IAP"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/apple-proposes-commissions-of-up-to-15-for-off-app-store-purchases-in-the-us", lang: "EN" }
    ]
  },
  {
    id: "20260813-102",
    trackers: ["os"],
    category: "重點關注",
    title: "Chase Sapphire Preferred 卡片新增福利：提供免費 Apple TV 或 Apple One 折扣",
    summary: "金融機構 Chase 近期為其人氣的 Sapphire Preferred 信用卡增添了新的會員福利。該福利包括提供一年免費 Apple TV，或為現有的 Apple One 訂閱者提供每月 $7.50 的折扣額度。Apple TV 過去是 Chase Sapphire Reserve 卡持有者的福利，但由於 Reserve 卡的年費較高（$795），此次福利擴展至年費更實惠的 Sapphire Preferred 卡片，使其更具吸引力。持卡人需在 2026 年 12 月 31 日前透過 Chase 的 App 或網站上的福利入口，將其 Apple 帳號連結至 Chase 帳戶以啟用優惠。此外，即使持有較高年費的 Sapphire Reserve 卡，現在也能獲得每月 $15 的 Apple One 折扣，因為該卡片已包含免費 Apple TV 和 Apple Music。此優惠適用於新舊持卡人，旨在讓更多用戶能享受 Apple 生態系的便利性。",
    tags: ["Chase Sapphire Preferred", "Apple TV", "Apple One", "信用卡福利", "金融服務"],
    title_en: "Chase Sapphire Preferred Card Adds New Benefits: Offering Free Apple TV or Apple One Discount",
    summary_en: "Financial institution Chase recently added new membership benefits to its popular Sapphire Preferred credit card. These benefits include one year of free Apple TV, or a monthly discount of $7.50 for existing Apple One subscribers. Apple TV was previously a benefit for Chase Sapphire Reserve cardholders, but the benefit has now been extended to the more affordable Sapphire Preferred card, making it more attractive. Cardholders must link their Apple account to their Chase account via the benefits portal on the Chase App or website before December 31, 2026, to activate the offer. Furthermore, even holders of the higher-annual-fee Sapphire Reserve card can now receive a $15 monthly Apple One discount, as that card already includes free Apple TV and Apple Music. This offer applies to both new and existing cardholders, aiming to allow more users to enjoy the convenience of the Apple ecosystem.",
    tags_en: ["Chase Sapphire Preferred", "Apple TV", "Apple One", "Credit Card Benefits", "Financial Services"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/chase-adds-free-apple-tv-discounted-apple-one-benefit-to-popular-credit-card", lang: "EN" }
    ]
  },
  {
    id: "20260813-103",
    trackers: ["os"],
    category: "重點關注",
    title: "WhatsApp 預計推出動畫桌布聊天主題，提升 iOS 和 Android 聊天介面體驗",
    summary: "根據 WABetaInfo 的報導，WhatsApp 的最新測試版（beta）已加入聊天介面客製化選項，包括動畫桌布。這些新主題分為「Featured」、「Doodle」和「Minimal」三類。其中，「Featured」主題將提供帶有微妙動態的動畫桌布，旨在讓背景感覺動態，但不會分散用戶閱讀訊息的注意力。WhatsApp 甚至會根據桌布自動調整聊天氣泡的顏色，而非讓用戶自行客製化。這項功能目前仍處於開發階段，尚未對測試人員開放，但預計將在 iOS 和 Android 平台同步推出，提升用戶的聊天介面美觀度和互動性。",
    tags: ["WhatsApp", "iOS", "Android", "聊天主題", "動畫桌布", "介面更新"],
    title_en: "WhatsApp to Roll Out Animated Wallpaper Chat Themes, Enhancing iOS and Android Chat Interface Experience",
    summary_en: "According to WABetaInfo, WhatsApp's latest beta version has introduced chat interface customization options, including animated wallpapers. These new themes are categorized into 'Featured,' 'Doodle,' and 'Minimal.' The 'Featured' theme will offer animated wallpapers with subtle dynamics, designed to make the background feel lively without distracting the user from reading messages. Furthermore, WhatsApp will automatically adjust the chat bubble colors based on the wallpaper, rather than requiring manual user customization. While this feature is currently in development and not yet available to testers, it is expected to be rolled out simultaneously on both iOS and Android platforms, enhancing the aesthetic appeal and interactivity of the user's chat interface.",
    tags_en: ["WhatsApp", "iOS", "Android", "Chat Themes", "Animated Wallpaper", "Interface Update"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/whatsapp-is-working-on-chat-themes-with-animated-wallpapers", lang: "EN" }
    ]
  },
  {
    id: "20260813-104",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple 在德州休斯頓開設先進製造中心，推動美國本土製造業與 AI 伺服器生產",
    summary: "Apple 近日宣布在德州休斯頓開設了先進製造中心（Advanced Manufacturing Center, AMC）。該中心不僅是其建置和出貨先進 AI 伺服器的設施所在地，更提供免費的培訓和教育課程，旨在讓中小企業直接接觸最先進的設備、互動實驗室和工具，加速創新。Apple 執行長 Tim Cook 表示，公司投入數億美元於此設施，目標是推動美國製造業的未來。AMC 面積達 20,000 平方英尺，將分享其在智慧製造、機器學習驅動的品質控制和先進自動化等方面的知識。此外，Apple 也計劃在今年晚些時候開始 Mac mini 的生產。此舉顯示 Apple 積極回歸美國本土，強化其供應鏈和製造能力。",
    tags: ["Apple", "Advanced Manufacturing Center", "Houston", "AI 伺服器", "Mac mini", "美國製造業"],
    title_en: "Apple Opens Advanced Manufacturing Center in Houston, Texas, to Boost U.S. Domestic Manufacturing and AI Server Production",
    summary_en: "Apple recently announced the establishment of an Advanced Manufacturing Center (AMC) in Houston, Texas. This center will not only serve as the facility for building and shipping advanced AI servers but will also offer free training and educational courses. These resources aim to allow small and medium-sized enterprises (SMEs) direct access to cutting-edge equipment, interactive labs, and tools, thereby accelerating innovation. Apple CEO Tim Cook stated that the company is investing hundreds of millions of dollars in the facility, with the goal of driving the future of American manufacturing. The AMC spans 20,000 square feet and will share its expertise in smart manufacturing, machine learning-driven quality control, and advanced automation. Furthermore, Apple plans to begin Mac mini production at the facility later this year. This move demonstrates Apple's commitment to returning to the U.S. domestic market, strengthening its supply chain and manufacturing capabilities.",
    tags_en: ["Apple", "Advanced Manufacturing Center", "Houston", "AI Servers", "Mac mini", "U.S. Manufacturing"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/apples-new-advanced-manufacturing-center-opens-in-texas", lang: "EN" }
    ]
  },
  {
    id: "20260813-105",
    trackers: ["os"],
    category: "重點關注",
    title: "Matic 推出 Matic Cues：智慧吸塵器支援語音與手勢控制，操作更直覺",
    summary: "吸塵器品牌 Matic 發布軟體更新 Matic Cues，大幅提升其智慧吸塵器和拖地機的功能。透過此更新，用戶可以直接使用語音指令與機器人互動，例如只需說出「Hey Matic, vacuum the kitchen」，機器人即可開始清潔，無需透過手機解鎖、開啟應用程式或任何智慧家庭中介。此外，Matic Cues 還支援超過 70 種口語語言，並加入了手勢控制功能。此功能將透過空中下載（over-the-air）的方式滾動部署給所有現有的 Matic 機型，並將納入所有新機型。這項更新旨在讓使用者能更直覺、更便捷地控制清潔設備，提升智慧家居的易用性。",
    tags: ["Matic", "Matic Cues", "語音控制", "智慧家居", "IoT", "吸塵器"],
    title_en: "Matic Launches Matic Cues: Smart Vacuum Cleaners Support Voice and Gesture Control for Intuitive Operation",
    summary_en: "Vacuum brand Matic has released a software update called Matic Cues, significantly enhancing the functionality of its smart vacuum cleaners and mops. With this update, users can interact with the robots directly using voice commands. For example, simply saying, \"Hey Matic, vacuum the kitchen,\" will initiate cleaning without needing to unlock a phone, open an application, or use any smart home intermediary. Furthermore, Matic Cues supports over 70 spoken languages and introduces gesture control. This feature will be rolled out over-the-air (OTA) to all existing Matic models and will be included in all new models. This update aims to allow users to control cleaning devices more intuitively and conveniently, thereby improving the usability of smart homes.",
    tags_en: ["Matic", "Matic Cues", "Voice Control", "Smart Home", "IoT", "Vacuum Cleaner"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/13/matic-cues-lets-you-just-talk-to-your-robot-vacuum-or-point-at-a-mess-to-clean", lang: "EN" }
    ]
  },
  {
    id: "20260813-106",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "美國政府計畫招募私營資安公司，授權對外國網路犯罪組織進行網路攻擊",
    summary: "美國政府透過一份國家安全總統備忘錄，指示國家協調中心（NCC）開發一個專案，旨在對抗外國跨國犯罪組織（TCOs）。此計畫首次授權私營公司參與主動網路行動，對外國駭客進行網路攻擊。受影響的目標包括對美國個人、組織或政府實體進行網路犯罪的跨國犯罪組織。備忘錄列舉的目標活動包括勒索軟體、色情勒索、網路釣魚、金融詐騙和冒名欺騙等。參與的私營公司將被授權執行「網路監控行動」和「網路效應行動」，甚至可能使用間諜軟體或發動旨在破壞目標資料或系統的攻擊，包括使用加密鎖定目標網路或進行分散式阻斷服務（DDoS）攻擊。此舉代表美國聯邦政府首次允許私營部門在未經法院授權的情況下執行此類攻擊性網路行動，極大改變了傳統的網路安全規範。",
    tags: ["美國政府", "網路戰", "私營資安", "跨國犯罪", "Cyber Operations", "DDoS"],
    title_en: "US Government Plans to Engage Private Cybersecurity Firms for Cyberattacks Against Foreign Cybercrime Organizations",
    summary_en: "Through a National Security Presidential Memorandum, the US government has directed the National Cyber Coordination Center (NCC) to develop a project aimed at countering Transnational Cybercrime Organizations (TCOs). This plan marks the first time private companies will be authorized to participate in proactive cyber operations, conducting cyberattacks against foreign hackers. Targeted organizations include transnational criminal groups that commit cybercrimes against US individuals, organizations, or government entities. The memorandum lists target activities such as ransomware, sextortion, phishing, financial fraud, and impersonation fraud. Participating private companies will be authorized to conduct \"cyber surveillance operations\" and \"cyber effect operations,\" potentially using spyware or launching attacks designed to disrupt target data or systems, including encrypting target networks or executing Distributed Denial of Service (DDoS) attacks. This move represents the first time the US federal government has permitted the private sector to conduct such aggressive cyber actions without a court warrant, significantly altering traditional cybersecurity norms.",
    tags_en: ["US Government", "Cyber Warfare", "Private Cybersecurity", "Transnational Crime", "Cyber Operations", "DDoS"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/security/2026/08/white-house-recruits-security-firms-to-hack-overseas-cybercriminals", lang: "EN" }
    ]
  },
  {
    id: "20260813-107",
    trackers: ["os"],
    category: "重點關注",
    title: "烏克蘭無人機在演習中摧毀美軍戰車與裝甲車隊，凸顯現代戰場威脅",
    summary: "這篇報導描述了美軍參與的「Combined Resolve」聯合軍事演習，該演習旨在讓美軍親身體驗現代無人機戰場的威脅。在演習中，烏克蘭無人機操作人員展示了極高的戰術能力，能夠輕鬆地偵測並摧毀美軍的裝甲車輛。美軍參與的部隊包括來自第 1 騎兵師第 3 裝甲旅戰鬥營，主要使用 M1A2 戰車和 Bradley 步兵戰鬥車等裝甲車輛。雖然演習中美軍的裝甲車輛被快速摧毀，但這也讓美軍士兵得以不斷「重置」和學習，從而提升了分散和躲避無人機攻擊的能力，並學習運用電子戰等對策。此外，烏克蘭無人機還參與了瑞典主導的 NATO 演習「Aurora 26」，在模擬的機械化攻擊中，烏克蘭無人機也成功擊落了多輛攻擊裝甲車輛。這顯示了現代戰場中，無人機戰力已成為一個極具威脅且難以預測的要素。",
    tags: ["無人機戰場", "Combined Resolve", "Aurora 26", "美軍", "烏克蘭", "裝甲車輛", "電子戰"],
    title_en: "Ukrainian Drones Destroy US Tanks and APCs During Exercise, Highlighting Modern Battlefield Threats",
    summary_en: "This report describes the US military's participation in the 'Combined Resolve' joint military exercise, which aims for US forces to experience the threats of modern drone warfare firsthand. During the exercise, Ukrainian drone operators demonstrated extremely high tactical capabilities, easily detecting and destroying US armored vehicles. US units involved included the 3rd Armored Brigade Combat Battalion of the 1st Cavalry Division, utilizing armored vehicles such as M1A2 tanks and Bradley Combat Vehicles. Although US armored vehicles were quickly destroyed during the exercise, this allowed US soldiers to continuously 'reset' and learn, thereby improving their ability to disperse and evade drone attacks, and to learn countermeasures such as electronic warfare. Furthermore, Ukrainian drones participated in the Swedish-led NATO exercise 'Aurora 26,' where they successfully downed multiple attacking armored vehicles during a simulated mechanized assault. This demonstrates that in modern battlefields, drone capability has become an extremely threatening and unpredictable element.",
    tags_en: ["Drone Warfare", "Combined Resolve", "Aurora 26", "US Military", "Ukraine", "Armored Vehicles", "Electronic Warfare"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/08/ukrainian-drones-wipe-out-entire-us-tank-brigade-in-live-war-game", lang: "EN" }
    ]
  },
  {
    id: "20260813-108",
    trackers: ["os"],
    category: "重點關注",
    title: "Flock 宣布強制使用安全工具，旨在防止警用車牌讀取系統被濫用進行跟蹤",
    summary: "Flock 公司宣布，未來所有能夠存取車牌讀取器資料的機構，都將被要求使用一款安全工具。此工具能夠自動偵測異常活動，並在使用者濫用權限進行私人跟蹤行為時，自動鎖定警員的存取權限。該工具的運作機制是當使用者活動「符合定義的異常行為標準」時，系統會暫停存取權限，必須經過管理員審核才能恢復。雖然該技術自四月起已作為可選免費功能提供，但初期僅有三分之一的機構選擇啟用。然而，在喬治亞州（Georgia）一名警長辦公室使用該工具後，成功逮捕了三名濫用Flock攝影機跟蹤熟人的警員，促使Flock 執行長 Garrett Langley 承認公司初期策略有誤，並決定將此功能改為強制要求。然而，專家和 ACLU 警告，目前缺乏獨立數據證明此工具在偵測惡意登入或惡意活動方面的可靠性，並指出目前沒有證據證明其能持續有效解決警用攝影機被用於跟蹤的日益增加的模式。",
    tags: ["Flock", "車牌讀取器", "數據濫用", "安全工具", "警用技術", "隱私權"],
    title_en: "Flock Mandates Use of Security Tool to Prevent Misuse of Police License Plate Readers",
    summary_en: "Flock announced that all organizations accessing license plate reader data will soon be required to use a specific security tool. This tool automatically detects anomalous activity and automatically locks law enforcement officers' access when they misuse their privileges for private tracking. The mechanism operates by suspending access when user activity 'meets defined abnormal behavior standards,' requiring administrator review for restoration. Although the technology has been available as an optional free feature since April, only one-third of organizations initially opted to enable it. However, after a police chief's office in Georgia used the tool to successfully arrest three officers who misused Flock cameras to track acquaintances, Flock CEO Garrett Langley admitted that the company's initial strategy was flawed and decided to make the feature mandatory. Nevertheless, experts and the ACLU warn that there is currently a lack of independent data proving the tool's reliability in detecting malicious logins or activities, and point out that there is no evidence that it can sustainably solve the increasing pattern of police cameras being used for tracking.",
    tags_en: ["Flock", "License Plate Reader", "Data Misuse", "Security Tool", "Police Technology", "Privacy"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/flock-cant-tech-its-way-out-of-the-stalker-cop-problem-experts-say", lang: "EN" }
    ]
  },
  {
    id: "20260813-109",
    trackers: ["os"],
    category: "重點關注",
    title: "智能寵物餵食器 Petlibro 遭遇服務中斷，凸顯智慧設備依賴的風險",
    summary: "寵物餵食器品牌 Petlibro 的智能設備系統於某日發生服務中斷。該設備透過 Wi-Fi 連接，並使用 Petlibro 的行動應用程式進行設定和控制。根據 Petlibro 執行長 York Wu 的說明，這次的服務中斷與應用程式透過線上伺服器與設備進行通訊的方式有關。Petlibro 於當日早上 5 點 PT 首次承認問題，指出部分用戶無法存取應用程式或遠端控制設備。隨後，公司確認了影響應用程式存取和響應性的服務問題，並開始進行恢復工作。Petlibro 聲稱至隔日傍晚已完全恢復服務，但警告用戶，在服務中斷期間產生的部分活動資料可能無法恢復，包括設備操作歷史、餵食或貓砂盆記錄、通知、雲端儲存影片等。此外，需要應用程式連線才能運作的功能，例如「立即餵食」按鈕，仍可能受到影響。此事件提醒用戶，高度依賴智能設備的寵物照護系統，其服務中斷可能導致設備無法正常運作，影響寵物日常照護。",
    tags: ["Petlibro", "智能設備", "服務中斷", "IoT", "寵物照護", "雲端服務"],
    title_en: "Petlibro Smart Pet Feeder Experiences Service Outage, Highlighting Risks of Smart Device Dependency",
    summary_en: "The smart device system from pet feeder brand Petlibro experienced a service outage on a specific date. The device connects via Wi-Fi and uses the Petlibro mobile application for setup and control. According to Petlibro CEO York Wu, the service disruption was related to how the application communicates with the device via an online server. Petlibro first acknowledged the issue at 5:00 AM PT that day, noting that some users were unable to access the application or remotely control the device. Subsequently, the company confirmed a service issue affecting application access and responsiveness, and began recovery efforts. Petlibro stated that services were fully restored by the evening of the following day, but warned users that some activity data generated during the outage period might be unrecoverable. This includes device operation history, feeding or litter box records, notifications, and cloud-stored videos. Furthermore, functions that require application connectivity to operate, such as the 'Feed Now' button, might still be affected. This incident serves as a reminder that pet care systems highly dependent on smart devices may experience operational failures during service disruptions, potentially impacting the pet's daily care.",
    tags_en: ["Petlibro", "Smart Devices", "Service Outage", "IoT", "Pet Care", "Cloud Services"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/gadgets/2026/08/pet-owners-say-smart-pet-feeder-outage-led-to-furry-ones-going-unfed", lang: "EN" }
    ]
  },
  {
    id: "20260813-110",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 發布 Gemini 3.7 Flash，強調提升程式碼與代理人能力，接續快速 AI 模型迭代趨勢",
    summary: "Google 今日宣布推出新的 Gemini 模型 Gemini 3.7 Flash，取代先前僅三週前發布的 3.6 Flash。該模型被定位為一款「主力」模型，據稱透過核心優化和開發者回饋進行提升，特別在程式碼編寫和代理人（agentic）性能方面有所改善。根據資料，Gemini 3.7 Flash 在 FrontierCode 1.1 Main 測試中得分從 34.4% 提升至 43.6%，DeepSWE v1.1 從 49% 提升至 65.3%。此外，其 WebDev Arena 分數也從 1,538 提升至 1,588。在處理複雜文件（GDP.pdf）和執行商業工作流程（AutomationBench）方面，性能也顯著提升。Google 推出此版本，部分目的可能是為了應對競爭對手在成本上的優勢，並維持其 AI 產品不斷進步的形象。然而，文章指出，此發布發生在 Google 曾承諾於 2026 年 6 月發布旗艦 Gemini 3.5 Pro，但尚未實現的背景下。",
    tags: ["Google", "Gemini 3.7 Flash", "AI 模型", "LLM", "程式碼生成", "代理人系統"],
    title_en: "Google Releases Gemini 3.7 Flash, Highlighting Enhanced Coding and Agentic Capabilities, Continuing Rapid AI Model Iteration Trend",
    summary_en: "Google today announced the launch of a new Gemini model, Gemini 3.7 Flash, succeeding the 3.6 Flash model released just three weeks ago. This model is positioned as a 'mainstream' offering, reportedly enhanced through core optimizations and developer feedback, with particular improvements in code generation and agentic performance. According to data, Gemini 3.7 Flash improved its score in the FrontierCode 1.1 Main test from 34.4% to 43.6%, and in DeepSWE v1.1 from 49% to 65.3%. Furthermore, its WebDev Arena score increased from 1,538 to 1,588. Performance also showed significant improvements when handling complex documents (GDP.pdf) and executing business workflows (AutomationBench). Google's release of this version may partly aim to counter competitive cost advantages and maintain the image of continuous progress in its AI products. However, the article notes that this release occurs against the backdrop of Google having previously promised the flagship Gemini 3.5 Pro in June 2026, a promise that has not yet been fulfilled.",
    tags_en: ["Google", "Gemini 3.7 Flash", "AI Model", "LLM", "Code Generation", "Agentic System"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/ai/2026/08/google-announces-gemini-3-7-flash-just-three-weeks-after-previous-release", lang: "EN" }
    ]
  },
  {
    id: "20260813-111",
    trackers: ["os"],
    category: "重點關注",
    title: "Rivian 宣布 R1 車系升級：為 2027 車型調整配置，增加第二排行政座椅",
    summary: "電動車新創公司 Rivian 宣布針對其 R1 車系進行升級，以應對從 2026 年至 2027 年車型的過渡。這次的調整重點是將 R2 SUV 上採用的設計元素，應用到更大型、更昂貴的 R1 車型。主要的改動包括為 R1 車型增加第二排的行政座椅（captain’s chairs），這項功能是 Rivian R1S 客戶最常要求的配置。這種六座內裝設計取代了傳統的中央長椅，且座椅設計考究，甚至隱藏了杯架，並為第三排乘客或放置運動器材（如滑雪板、衝浪板）留出空間。此外，Rivian 也調整了車型命名，使其與新發布的 R2 系列保持一致，將原有的 Dual、Tri、R1s 級別改為 Premium 和 Performance，而 Quad 級別維持不變。然而，R1T 和 R1S 的基礎起價仍維持不變。",
    tags: ["Rivian", "R1", "R2", "電動車", "車型升級", "汽車產業"],
    title_en: "Rivian Announces R1 Series Upgrade: Adjusting Configuration for 2027 Models with Added Second-Row Executive Seating",
    summary_en: "Electric vehicle startup Rivian announced an upgrade to its R1 series to address the transition to 2026 and 2027 models. The focus of this adjustment is applying design elements used in the R2 SUV to the larger and more premium R1 model. Key changes include adding executive captain's chairs to the second row of the R1, a feature frequently requested by Rivian R1S customers. This six-seat interior design replaces the traditional bench seat and features sophisticated seating, including hidden cup holders, and leaves space for third-row passengers or sports equipment (such as skis or surfboards). Furthermore, Rivian has adjusted the model naming convention to align with the newly released R2 series, changing the original Dual, Tri, and R1s trims to Premium and Performance, while the Quad trim remains unchanged. However, the base starting prices for the R1T and R1S remain the same.",
    tags_en: ["Rivian", "R1", "R2", "Electric Vehicle", "Model Upgrade", "Automotive Industry"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/cars/2026/08/rivian-tweaks-its-r1-range-for-model-year-2027", lang: "EN" }
    ]
  },
  {
    id: "20260813-112",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "研究揭露 AMD 記憶體控制器 Bank Swizzle 模式的潛在安全漏洞，可繞過記憶體保護機制",
    summary: "研究人員 Christopher Domas 發布了概念驗證（PoC），展示了如何利用 AMD 記憶體控制器（memory controllers）的 Bank Swizzle 模式，繞過記憶體保護機制，從而讀取或寫入任意資料。此漏洞的影響範圍極廣，不僅允許程式碼直接操作處理器指令的意義，甚至可能繞過記憶體加密和虛擬機隔離等安全措施。攻擊者甚至可以利用此方法，重寫電腦韌體中本應不變的區塊，而不會導致主機系統崩潰。雖然此功能在 AMD 的手冊中有記載，但其可被用於存取任意記憶體並修改韌體，被認為是設計上的非預期副作用。由於啟用 Bank Swizzle 模式需要核心級別的權限，因此目前對大多數軟體而言並非即時的威脅。然而，資安專家警告，此技術最終極有可能被用於惡意目的。",
    tags: ["AMD", "記憶體控制器", "Bank Swizzle", "記憶體保護", "韌體安全", "PoC"],
    title_en: "Research Reveals Potential Security Vulnerability in AMD Memory Controller Bank Swizzle Mode, Allowing Bypass of Memory Protection Mechanisms",
    summary_en: "Researcher Christopher Domas released a Proof-of-Concept (PoC) demonstrating how to exploit the Bank Swizzle mode of AMD memory controllers to bypass memory protection mechanisms, thereby allowing the reading or writing of arbitrary data. The scope of this vulnerability is extremely broad, not only allowing code to directly manipulate processor instructions but potentially bypassing security measures such as memory encryption and virtual machine isolation. Attackers can even use this method to rewrite immutable blocks within computer firmware without causing a host system crash. Although this functionality is documented in AMD manuals, its ability to access arbitrary memory and modify firmware is considered an unintended design side effect. Because enabling Bank Swizzle mode requires core-level privileges, it does not pose an immediate threat to most software. However, cybersecurity experts warn that this technology could ultimately be used for malicious purposes.",
    tags_en: ["AMD", "Memory Controller", "Bank Swizzle", "Memory Protection", "Firmware Security", "PoC"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088778", lang: "EN" }
    ]
  },
  {
    id: "20260813-113",
    trackers: ["os"],
    category: "重點關注",
    title: "Arm 架構新增支援 128 位元頁表項 (PTE)，擴大物理記憶體存取極限",
    summary: "本文討論處理器頁表項 (Page-Table Entries, PTE) 的大小如何限制其可存取的物理記憶體量。傳統 32 位元架構的限制為 4GB，而 64 位元架構的擴展已大幅提升此極限，例如某些 Arm 系統可支援高達 72PB 的記憶體存取。Anshuman Khandual 提交的補丁集為 Arm 架構新增了對 128 位元 PTE 的支援。雖然此功能顯著擴大了理論上的記憶體地址空間，但文章指出，此項能力最終能惠及哪些應用場景，目前尚不完全明確。",
    tags: ["Arm 架構", "128-bit PTE", "頁表", "物理記憶體", "記憶體地址空間"],
    title_en: "Arm Architecture Adds Support for 128-bit Page Table Entries (PTE), Expanding Physical Memory Address Limits",
    summary_en: "This article discusses how the size of processor Page-Table Entries (PTEs) limits the amount of physical memory that can be addressed. Traditional 32-bit architectures are limited to 4GB, while 64-bit architectures have significantly raised this limit; for example, some Arm systems can support up to 72PB of memory access. A patch set submitted by Anshuman Khandual adds support for 128-bit PTEs to the Arm architecture. Although this feature significantly expands the theoretical memory address space, the article notes that the specific application scenarios that will ultimately benefit from this capability are not yet fully clear.",
    tags_en: ["Arm Architecture", "128-bit PTE", "Page Table", "Physical Memory", "Memory Address Space"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1088125", lang: "EN" }
    ]
  },
  {
    id: "20260813-114",
    trackers: ["os"],
    category: "重點關注",
    title: "Linux 核心開發者為 Apple M4 晶片提供 NVMe 支援補丁",
    summary: "本篇報導指出，雖然 Apple M4 晶片尚未在主線 Linux 核心中獲得支援，且 M3 系列硬體也尚未全面上市，但開源開發者已開始為 Apple M4 晶片提供相關支援。開發者 Yureka Lilian 本週提交了用於啟用 Apple M4 (T8132) SoC 的 ANS2 NVMe 固態硬碟支援補丁。此補丁系列新增了針對 ANS2 NVMe 在 Apple t8132 (M4) SoC 上的設備樹綁定（dt-bindings）和驅動支援。相較於 M1-M3 晶片上的 ANS2 NVMe 變體，M4 的變體使用了獨立的 MMIO base，因此需要透過額外的 MMIO 寫入來註冊 I/O 佇列。開發者指出，這次 M4 啟用僅需修改 Apple NVMe 驅動程式不到 100 行程式碼。然而，文章強調，Apple M4 硬體要達到日常使用，更不用說在 Linux 核心中獲得完全上游支援，可能還需要一段時間。",
    tags: ["Apple M4", "Linux 核心", "NVMe", "ANS2", "T8132", "開源開發"],
    title_en: "Linux Kernel Developer Provides NVMe Support Patch for Apple M4 Chip",
    summary_en: "This report indicates that although the Apple M4 chip is not yet supported in the mainline Linux kernel, and the M3 series hardware has not been fully released, open-source developers have begun providing related support for the Apple M4 chip. Developer Yureka Lilian submitted a patch this week to enable ANS2 NVMe solid-state drive support for the Apple M4 (T8132) SoC. This patch series adds device tree bindings (dt-bindings) and driver support for ANS2 NVMe on the Apple t8132 (M4) SoC. Compared to the ANS2 NVMe variants on M1-M3 chips, the M4 variant uses an independent MMIO base, thus requiring additional MMIO writes to register the I/O queue. The developer pointed out that enabling M4 only required modifying less than 100 lines of code in the Apple NVMe driver. However, the article emphasizes that for Apple M4 hardware to be ready for daily use, let alone achieve full upstream support in the Linux kernel, it may still require some time.",
    tags_en: ["Apple M4", "Linux Kernel", "NVMe", "ANS2", "T8132", "Open Source Development"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-Apple-M4-NVMe-Patches", lang: "EN" }
    ]
  },
  {
    id: "20260813-115",
    trackers: ["os"],
    category: "重點關注",
    title: "Comma.ai發布PCIe Gen4 x4至USB4擴充塢，搭載開源韌體，提升車載AI運算能力",
    summary: "Comma.ai發布了Tiny Chestnut eGPU Dock和Chestnut Dock，這款擴充塢主要用於提升其先進駕駛輔助系統（ADAS）的運算能力。傳統上，ADAS的運算功耗可能受限於10瓦的功耗範圍，但透過Chestnut Dock，功耗可擴展至100瓦，並可搭配如AMD Radeon RX 9060等顯示卡處理更大、更複雜的AI模型。該設備不僅可供Comma.ai的OpenPilot系統使用（目前已推出1B參數的驅動模型，並預計在OpenPilot 0.11.2中發布），也可作為一般PC的USB4擴充塢使用，並兼容Tinygrad等應用。其最大的特色是運行於開源韌體，該韌體為ASM2464PD USB4/Thunderbolt到NVMe橋接控制器設計，並已在GitHub上公開。這款設備的推出，顯示了車載AI運算和邊緣運算設備朝向更高功耗、更強大運算單元的趨勢。",
    tags: ["Comma.ai", "eGPU Dock", "PCIe Gen4", "USB4", "OpenPilot", "AI運算"],
    title_en: "Comma.ai Releases PCIe Gen4 x4 to USB4 Dock with Open-Source Firmware to Boost Automotive AI Computing Power",
    summary_en: "Comma.ai has released the Tiny Chestnut eGPU Dock and the Chestnut Dock. This dock is primarily designed to enhance the computational capabilities of its Advanced Driver-Assistance Systems (ADAS). Traditionally, ADAS computing power consumption might be limited to a 10W range, but with the Chestnut Dock, the power consumption can be expanded up to 100W, allowing it to process larger and more complex AI models using graphics cards such as the AMD Radeon RX 9060. The device can not only be used with Comma.ai's OpenPilot system (which currently features a 1B parameter driving model and is scheduled for release in OpenPilot 0.11.2) but can also function as a general-purpose USB4 dock for PCs, compatible with applications like Tinygrad. Its most notable feature is its operation on open-source firmware. This firmware is designed for the ASM2464PD USB4/Thunderbolt to NVMe bridge controller and has been publicly released on GitHub. The launch of this device highlights the industry trend toward higher power consumption and more powerful computing units in automotive AI and edge computing devices.",
    tags_en: ["Comma.ai", "eGPU Dock", "PCIe Gen4", "USB4", "OpenPilot", "AI Computing"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Comma.ai-PCIe-Gen4-USB4-Dock", lang: "EN" }
    ]
  },
  {
    id: "20260813-116",
    trackers: ["os"],
    category: "重點關注",
    title: "川普政府計畫授權私人資安公司進行「網路反擊」：定義、限制與法律爭議",
    summary: "美國政府正考慮透過合同，讓私人資安公司參與對抗網路犯罪組織（CE-TCOs）的行動。總統簽署的備忘錄確認了此策略，允許這些公司進行網路監控和技術干擾等「網路效應行動」（Cyber Effects Operations）。此類行動涵蓋了對資訊系統、網路、實體或虛擬基礎設施的操縱、中斷、拒絕、降級或破壞。雖然監控旨在秘密收集情報，但其過程本身也可能涉及系統的干擾。備忘錄強調，目標是美國政府、美國公民或美國利益，並明確排除與外國政府直接相關的實體。參與的公司需經過嚴格審查，並需具備技術能力，且禁止執行可能導致生命損失或被視為武裝攻擊的行動。然而，法律專家指出，美國現行的《電腦欺詐與濫用法》（CFAA）可能不足以提供法律保護，若要大規模且合法地讓私人部門參與攻擊性網路行動，可能需要進一步的立法和監管修訂。",
    tags: ["美國政府", "私人資安公司", "Cyber Effects Operations", "CE-TCOs", "CFAA", "網路安全法規"],
    title_en: "Trump Administration Plans to Authorize Private Cybersecurity Firms for 'Cyber Counterattacks': Definitions, Limitations, and Legal Disputes",
    summary_en: "The U.S. government is considering contracting private cybersecurity firms to participate in actions against cybercrime organizations (CE-TCOs). A presidential memorandum confirming this strategy allows these companies to conduct 'Cyber Effects Operations,' including network monitoring and technical interference. Such operations encompass the manipulation, disruption, denial, degradation, or destruction of information systems, networks, physical, or virtual infrastructure. While monitoring aims to secretly gather intelligence, the process itself may involve system interference. The memorandum emphasizes that the targets must be the U.S. government, U.S. citizens, or U.S. interests, and explicitly excludes entities directly related to foreign governments. Participating companies must undergo rigorous vetting, possess technical capabilities, and are prohibited from actions that could result in loss of life or be considered armed attacks. However, legal experts point out that the current U.S. Computer Fraud and Abuse Act (CFAA) may be insufficient to provide legal protection. Large-scale and legal participation of the private sector in offensive cyber operations may require further legislative and regulatory amendments.",
    tags_en: ["U.S. Government", "Private Cybersecurity Firms", "Cyber Effects Operations", "CE-TCOs", "CFAA", "Cybersecurity Regulations"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/13/trump-wants-to-grant-private-cyber-firms-a-license-to-hack-back/5287420", lang: "EN" }
    ]
  },
  {
    id: "20260813-117",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "神秘攻擊者「City-Forum」長期盤查 Salesforce 與 ServiceNow 門戶，揭示配置風險而非平台漏洞",
    summary: "資安研究機構 Reco 發現一個代號「City-Forum」的神秘攻擊活動，該攻擊者在超過一年時間內，持續盤查全球的 Salesforce 和 ServiceNow 門戶網站。攻擊者主要針對電信、金融服務、企業軟體供應商和公共部門等機構的門戶網站，收集組織因過度開放配置而意外洩露的資料。攻擊者利用 UI API 的 GraphQL 層和 Service Portal 的原生搜尋端點，進行大量資料枚舉（enumeration），收集了大量可供「訪客使用者」（guest users）存取的資訊。研究人員指出，這類行為並非平台漏洞，而是源於組織過度寬鬆的權限設定、分享規則或搜尋來源配置。攻擊者甚至會檢查網站是否允許匿名註冊，以尋找從匿名訪客存取到具有更多權限的外部帳戶的途徑。Reco 警告，如果「訪客」可以讀取記錄，那麼網際網路上的任何人理論上都能存取，強調風險點在於配置管理，而非系統本身。ServiceNow 和 Salesforce 均已對此類報告表示關注，但尚未確認有系統性漏洞。",
    tags: ["Salesforce", "ServiceNow", "City-Forum", "GraphQL", "訪客使用者", "配置風險"],
    title_en: "Mystery Attacker 'City-Forum' Scans Salesforce and ServiceNow Portals, Exposing Configuration Risks, Not Platform Vulnerabilities",
    summary_en: "Security research firm Reco discovered a mysterious attack campaign, codenamed 'City-Forum,' which has continuously scanned global Salesforce and ServiceNow portals for over a year. The attacker primarily targeted portals belonging to sectors such as telecommunications, financial services, enterprise software vendors, and public sectors, collecting data accidentally exposed by organizations due to overly permissive configurations. The attacker utilized the GraphQL layer of the UI API and the native search endpoints of the Service Portal to perform extensive data enumeration, gathering large amounts of information accessible to 'guest users.' Researchers point out that this behavior is not a platform vulnerability, but rather stems from overly loose permission settings, sharing rules, or search source configurations within the organizations. The attacker even checks if the website allows anonymous registration, looking for paths from anonymous guest access to external accounts with higher privileges. Reco warns that if 'guests' can read records, then theoretically anyone on the internet can access them, emphasizing that the risk lies in configuration management, not the system itself. Both ServiceNow and Salesforce have expressed concern regarding this type of report, but have not confirmed any systemic vulnerabilities.",
    tags_en: ["Salesforce", "ServiceNow", "City-Forum", "Guest Users", "Configuration Risk"],
    sources: [
      { name: "The Register", url: "https://theregister.com/cyber-crime/2026/08/13/mystery-attacker-spent-a-year-raiding-salesforce-and-servicenow-portals/5287368", lang: "EN" }
    ]
  },
  {
    id: "20260813-118",
    trackers: ["os"],
    category: "重點關注",
    title: "瑞安航空（Ryanair）簽署五年合約，採用 Google Cloud 打造雙雲架構，強化 AI 與營運韌性",
    summary: "低成本航空公司瑞安航空宣布與 Google Cloud 簽署為期五年的協議，涵蓋 AI、生產力工具和多雲基礎設施。此舉發生在該公司不久前也與競爭對手 AWS 續簽了為期五年的合約。瑞安航空計劃將 Google Workspace 和 Google Cloud 服務部署到其 35,000 名員工，以支持其到 2034 年達到每年 3 億乘客的目標。雙雲策略的核心是建立「雙雲韌性」，確保當任一雲端服務提供商發生中斷時，關鍵系統仍能切換至另一方，維持飛航和客戶服務的正常運作。在技術應用上，瑞安航空將利用 Google 的 Gemini Enterprise agentic AI 平台來自動化決策制定、優化機組人員後勤，並提升員工生產力。此外，它還會使用 Google DeepMind 的 AlphaEvolve 進行演算法優化，以及 WeatherNext 進行預測和維護規劃。這項策略與其持續使用 AWS 的服務（如 Amazon Quick、Amazon Bedrock 等）共同構建了其基礎設施骨幹。",
    tags: ["Ryanair", "Google Cloud", "AWS", "Gemini Enterprise", "多雲架構", "AI 轉型"],
    title_en: "Ryanair Signs Five-Year Contract with Google Cloud to Build Hybrid Cloud Architecture, Strengthening AI and Operational Resilience",
    summary_en: "Low-cost carrier Ryanair announced a five-year agreement with Google Cloud, covering AI, productivity tools, and multi-cloud infrastructure. This move follows the company's recent renewal of a five-year contract with competitor AWS. Ryanair plans to deploy Google Workspace and Google Cloud services to its 35,000 employees to support its goal of reaching 300 million annual passengers by 2034. The core of the dual-cloud strategy is establishing 'dual-cloud resilience,' ensuring that critical systems can switch to another provider if one cloud service provider experiences an outage, thereby maintaining normal flight and customer service operations. In terms of technical applications, Ryanair will utilize Google's Gemini Enterprise agentic AI platform to automate decision-making, optimize crew logistics, and boost employee productivity. Furthermore, it will use Google DeepMind's AlphaEvolve for algorithmic optimization and WeatherNext for predictive and maintenance planning. This strategy, combined with its continued use of AWS services (such as Amazon Quick and Amazon Bedrock), forms its foundational infrastructure backbone.",
    tags_en: ["Ryanair", "Google Cloud", "AWS", "Gemini Enterprise", "Multi-Cloud Architecture", "AI Transformation"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/08/13/ryanair-adds-google-to-its-dual-cloud-flight-plan/5287336", lang: "EN" }
    ]
  },
  {
    id: "20260813-119",
    trackers: ["os"],
    category: "重點關注",
    title: "慈善機構CRM系統Beacon遭駭：AWS金鑰外洩疑為數據洩漏主因",
    summary: "慈善機構CRM服務提供商Beacon近日更新了其在七月發生的數據洩漏事件。Beacon指出，一個「潛在暴露於公共JavaScript建置產物中的AWS存取金鑰」是本次攻擊的主要嫌疑。公司首席技術官David Simpson確認，攻擊者已製作了包含所有客戶數據和附件的資料庫副本，並很可能以可讀格式下載。根據AWS成本與使用報告的分析，在2026年7月27日至28日期間，數據傳輸量顯著增加，時間點與惡意活動吻合，支持了大量數據下載的評估。儘管Beacon的日誌無法揭示具體哪些記錄外洩，但公司已建議客戶根據其在CRM實例中儲存的資料，自行評估潛在的數據暴露風險。受影響的慈善機構數據主要涉及個人資訊和捐款細節。Beacon警告，由於事件的複雜性，無法提供所有細節，並建議客戶立即根據自身處理和儲存的數據，進行後續通知的風險評估。",
    tags: ["Beacon", "AWS", "JavaScript", "AWS Access Key", "數據洩漏", "慈善機構", "CRM"],
    title_en: "Charity Organization CRM System Beacon Hacked: AWS Key Leak Suspected as Cause of Data Breach",
    summary_en: "Charity organization CRM provider Beacon recently updated its report on the data breach that occurred in July. Beacon indicated that an \"AWS access key potentially exposed in public JavaScript build artifacts\" was the primary suspect in the attack. CTO David Simpson confirmed that attackers created a database copy containing all client data and attachments, which was likely downloaded in a readable format. Analysis of AWS cost and usage reports showed a significant increase in data transfer volume between July 27 and 28, 2026, aligning with the malicious activity and supporting the assessment of large-scale data download. Although Beacon's logs cannot reveal exactly which records were leaked, the company advised clients to assess their own potential data exposure risks based on the data stored in their CRM instances. The affected charity data primarily involves personal information and donation details. Beacon warned that due to the complexity of the incident, all details cannot be provided, and advised clients to immediately conduct a follow-up risk assessment regarding notification based on the data they process and store.",
    tags_en: ["Beacon", "AWS", "JavaScript", "AWS Access Key", "Data Leak", "Charity Organization", "CRM"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/13/aws-key-exposed-in-javascript-may-have-lit-way-to-beacons-charity-data/5287303", lang: "EN" }
    ]
  },
  {
    id: "20260813-120",
    trackers: ["os"],
    category: "重點關注",
    title: "Twitch 允許創作者關閉內容用於 Amazon 生成式 AI 訓練，但預設開啟引發爭議",
    summary: "串流平台 Twitch（隸屬於 Amazon）新增了「用於生成式 AI 訓練」的頻道設定，允許創作者選擇退出讓其內容用於未來生成式 AI 模型的改進。當此設定啟用時，包括直播內容、點播影片、剪輯、文字、圖像和聊天訊息等頻道內容，都可能被用於訓練 Amazon 的生成式 AI 模型。Twitch 表示，由此產生的模型不僅限於 Twitch 平台，還可能在 Amazon 生態系統的其他領域使用，例如利用直播音訊來優化跨平台的語音轉文字模型。儘管 Twitch 提供了退出機制，但該功能預設是開啟的。Twitch 產品長官 Mike Minton 解釋稱，這是因為「如果它是可選擇加入的，沒有人會選擇加入」。創作者若想阻止其內容用於 Amazon 的 AI 雄心，必須主動操作。此外，該設定僅針對「未來」的 AI 模型改進，無法保證已經進入模型中的內容會被移除。這項變動讓創作者終於有了一種方式，可以將其內容從 Amazon 的生成式 AI 訓練範圍排除。",
    tags: ["Twitch", "Amazon", "生成式 AI", "內容版權", "AI 訓練", "平台政策"],
    title_en: "Twitch allows creators to opt out of content used for Amazon generative AI training, but default setting is enabled, causing controversy",
    summary_en: "Streaming platform Twitch (an Amazon subsidiary) has introduced a channel setting for 'Use for Generative AI Training,' allowing creators to opt out of having their content used to improve future generative AI models. When this setting is enabled, channel content—including live streams, VODs, clips, text, images, and chat messages—may be used to train Amazon's generative AI models. Twitch stated that the resulting models are not limited to the Twitch platform but may also be used in other areas of the Amazon ecosystem, such as utilizing live audio to optimize cross-platform speech-to-text models. Although Twitch provides an opt-out mechanism, the feature is enabled by default. Twitch Product Manager Mike Minton explained that this is because 'if it were opt-in, no one would opt in.' Creators must take action to prevent their content from being used for Amazon's AI ambitions. Furthermore, the setting only applies to 'future' AI model improvements and cannot guarantee that content already incorporated into models will be removed. This change finally gives creators a way to exclude their content from Amazon's generative AI training scope.",
    tags_en: ["Twitch", "Amazon", "Generative AI", "Content Copyright", "AI Training", "Platform Policy"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/13/twitch-feeds-your-streams-to-amazons-ai-unless-you-tell-it-to-stop/5287258", lang: "EN" }
    ]
  },
  {
    id: "20260813-121",
    trackers: ["os"],
    category: "重點關注",
    title: "開發人員將公司預設憑證儲存於公開 Google 文件，遭 Google 搜尋索引曝光",
    summary: "本案揭露了一起嚴重的資安失誤：一家公司聘請的外部開發人員，為了方便管理，將用於測試環境（staging environment）的帳號密碼，儲存於一個設定為「任何人可查看」的 Google 文件中。由於該文件是公開的，Google 搜尋引擎意外地將其內容進行了索引，甚至在搜尋建議中顯示了包含憑證字串的連結，導致公司內部員工偶然發現了這些敏感資訊。事件凸顯了即使是測試環境的憑證，一旦洩露，其價值極高。公司在發現問題後，立即切斷了該承包商的存取權限，並輪換了所有暴露的憑證。同時，公司也制定了新政策，嚴禁在 Google Docs、Slack 或 Notion 等協作工具中儲存密碼。這兩個事件的共同教訓是，必須嚴格控制存取權限，特別是針對離職或終止合約的員工和外部承包商，必須立即撤銷所有權限，並避免將敏感資料當作私人金庫儲存在共享文件服務中。",
    tags: ["Google Docs", "憑證洩露", "存取控制", "外部承包商", "資安衛生"],
    title_en: "Developer Stored Company Default Credentials in Public Google Document, Exposed by Google Search Indexing",
    summary_en: "This incident revealed a serious security lapse: an external developer hired by a company stored account credentials for a staging environment in a Google document set to 'anyone can view.' Because the file was public, the Google search engine inadvertently indexed its contents, even displaying links containing credential strings in search suggestions. This led to the accidental discovery of sensitive information by internal company employees. The incident highlights that even credentials for a testing environment hold extremely high value if leaked. After discovering the issue, the company immediately revoked the contractor's access and rotated all exposed credentials. Furthermore, the company established a new policy strictly prohibiting the storage of passwords in collaborative tools such as Google Docs, Slack, or Notion. The common lesson from these two events is the necessity of strictly controlling access rights, especially for departing employees and external contractors. All access must be immediately revoked, and sensitive data must not be stored in shared file services as if they were private vaults.",
    tags_en: ["Google Docs", "Credential Leakage", "Access Control", "External Contractor", "Security Hygiene"],
    sources: [
      { name: "The Register", url: "https://theregister.com/security/2026/08/13/passwords-stored-in-public-google-doc-then-showed-up-in-search-results/5287028", lang: "EN" }
    ]
  },
  {
    id: "20260813-122",
    trackers: ["os"],
    category: "重點關注",
    title: "騰訊（Tencent）宣布AI戰略：不急於出租算力，轉而投入自研模型，打造長期經濟價值",
    summary: "在第二季財報電話會議上，科技巨頭騰訊（Tencent）闡述了其資本支出戰略。公司此前斥資530億美元進行了大量資本支出，原本可透過出租其AI基礎設施來迅速收回折舊成本，公司策略長官James Mitchell曾表示，需求強勁，可「幾乎立即」收回成本。然而，公司總裁Martin Lau指出，騰訊正在執行一個「不同層面的遊戲」，將大量新算力用於自研AI模型，目標是將模型提升至最先進（state-of-the-art）的狀態，並將自研的AI應用推向市場領導地位。Lau強調，透過提供「卓越的智慧」和市場領先的AI應用，騰訊能夠實現更長期的經濟回報。公司最新發布的2950億參數的Hunyuan-3模型，預計未來會推出更強大的Hunyuan-4版本，並將產品設計與之深度整合，以確保產品性能優於依賴外部模型的情況。此外，騰訊的第二季營收達到303億美元，淨利潤增長9%，顯示其業務穩健。",
    tags: ["Tencent", "AI模型", "Hunyuan-3", "資本支出", "雲端運算", "科技戰略"],
    title_en: "Tencent Announces AI Strategy: Prioritizing Self-Developed Models Over Immediate Compute Rental for Long-Term Economic Value",
    summary_en: "During its Q2 earnings call, tech giant Tencent outlined its capital expenditure strategy. The company previously invested $53 billion in significant capital expenditures, which could have been quickly recouped by renting out its AI infrastructure, with company strategy officer James Mitchell having stated that demand was strong enough to recover costs 'almost immediately.' However, Tencent President Martin Lau indicated that the company is playing a 'different level of game,' dedicating the massive new compute capacity to developing proprietary AI models. The goal is to elevate these models to a state-of-the-art level and establish market leadership for self-developed AI applications. Lau emphasized that by providing 'superior intelligence' and market-leading AI applications, Tencent can achieve more long-term economic returns. The company's newly released Hunyuan-3 model, with 295 billion parameters, is expected to be followed by an even more powerful Hunyuan-4 version, which will be deeply integrated into product design to ensure superior product performance compared to relying on external models. Furthermore, Tencent's Q2 revenue reached $30.3 billion, and net profit increased by 9%, demonstrating the stability of its operations.",
    tags_en: ["Tencent", "AI Models", "Capital Expenditure", "Cloud Computing", "Technology Strategy"],
    sources: [
      { name: "The Register", url: "https://theregister.com/off-prem/2026/08/13/tencent-says-it-could-make-instant-profits-on-53b-hardware-splurge-by-renting-it-for-ai-workloads/5287181", lang: "EN" }
    ]
  },
  {
    id: "20260813-123",
    trackers: ["os"],
    category: "重點關注",
    title: "OpenAI 廣告服務爭議：用戶關閉活動後仍持續投放廣告並收取費用",
    summary: "本案揭露 OpenAI 的 ChatGPT 廣告服務在廣告活動（campaigns）被用戶暫停後，仍可能持續投放廣告並向用戶收取費用。根據用戶 Excel4Business 的回報，即使已將廣告活動停用，系統仍有持續運行的情況。OpenAI 客服最初承認了此「廣告投放延遲」的缺陷，並承諾進行修復。然而，後續的溝通中，OpenAI 援引其《廣告條款》第 11.1 節，聲稱廣告活動取消或變更後，廣告仍可能運行長達一個營業日（up to one business day），用戶仍需為此期間的廣告費用負責。儘管 OpenAI 聲稱這是行業標準，但用戶指出實際的廣告投放延遲時間可能遠超一個營業日，甚至超過 10 小時。此事件凸顯了數位廣告服務在「停用」與「計費準確性」上的潛在重大缺陷，影響了廣告買家對預算控制的信任。",
    tags: ["OpenAI", "ChatGPT Ads", "廣告服務", "計費爭議", "數位廣告", "服務可靠性"],
    title_en: "OpenAI Advertising Service Controversy: Ads Continue and Charges Applied After User Deactivation",
    summary_en: "This case reveals that OpenAI's ChatGPT advertising service may continue to run ads and charge users even after the advertising campaigns have been paused by the user. According to a report from the user Excel4Business, the system continues to operate even after the campaign was deactivated. OpenAI customer service initially acknowledged this 'ad delivery delay' flaw and promised a fix. However, in subsequent communications, OpenAI cited Section 11.1 of its Advertising Terms, stating that ads may continue to run for up to one business day after a campaign is canceled or modified, and that the user remains responsible for the ad costs during this period. Although OpenAI claims this is industry standard, users point out that the actual ad delivery delay time may far exceed one business day, potentially exceeding 10 hours. This incident highlights potential significant flaws in digital advertising services regarding 'deactivation' and 'billing accuracy,' affecting the advertiser's trust in budget control.",
    tags_en: ["OpenAI", "ChatGPT Ads", "Advertising Service", "Billing Dispute", "Digital Advertising", "Service Reliability"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/13/openai-ad-service-can-bill-customers-for-up-to-one-day-after-they-pause-campaigns/5287110", lang: "EN" }
    ]
  },
  {
    id: "20260813-124",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Palo Alto Networks GlobalProtect 存在憑證驗證漏洞，可遭未經身份驗證攻擊者攔截通訊",
    summary: "CVE-2026-0296 揭露 Palo Alto Networks 的 GlobalProtect™ 應用程式存在憑證驗證不當的漏洞。此漏洞允許具有中間人攻擊（Man-in-the-Middle, MitM）存取權的未經身份驗證攻擊者，攔截並修改應用程式的通訊內容。攻擊者無需任何身份驗證即可利用此漏洞。值得注意的是，此漏洞僅影響應用程式層的通訊，VPN 隧道流量本身並不受影響。文章明確指出，GlobalProtect 應用程式在 iOS、Android 和 Chrome OS 平台版本上並未受到此漏洞的影響。修補建議為用戶應留意 Palo Alto Networks 的官方安全公告，並儘快更新應用程式以修補此憑證驗證缺陷。",
    tags: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0296", "憑證驗證", "MitM", "VPN"],
    title_en: "Palo Alto Networks GlobalProtect has Certificate Validation Vulnerability, Potentially Allowing Interception by Unauthenticated Attackers",
    summary_en: "CVE-2026-0296 reveals an improper certificate validation vulnerability in Palo Alto Networks' GlobalProtect™ application. This flaw allows unauthenticated attackers with Man-in-the-Middle (MitM) access to intercept and modify the application's communication content. Attackers can exploit this vulnerability without requiring any authentication. Notably, this vulnerability only affects the application layer communication, and the VPN tunnel traffic itself remains unaffected. The article explicitly states that the GlobalProtect application on iOS, Android, and Chrome OS platforms are not affected by this vulnerability. The remediation advice is for users to monitor official Palo Alto Networks security advisories and update the application promptly to patch this certificate validation defect.",
    tags_en: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0296", "Certificate Validation", "MitM", "VPN"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0296", lang: "EN" }
    ]
  },
  {
    id: "20260813-125",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Palo Alto Networks GlobalProtect™ 應用程式存在本地權限提升漏洞 CVE-2026-0299",
    summary: "Palo Alto Networks 的 GlobalProtect™ 應用程式存在本地權限提升漏洞 CVE-2026-0299。此漏洞允許在 Windows 系統上將本地使用者權限提升至 NT AUTHORITY\\SYSTEM，在 macOS 和 Linux 系統上提升至 root 權限。這使得非管理員使用者能夠執行具有管理員權限的任意指令，構成嚴重的安全風險。\n\n值得注意的是，GlobalProtect 應用程式在 iOS、Android 和 Chrome OS 平台上的版本並未受到此漏洞的影響。建議使用者應立即檢查並更新所有受影響的作業系統版本，以修補此本地權限提升的漏洞，防止未經授權的系統控制。",
    tags: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0299", "本地權限提升", "Windows", "macOS", "Linux"],
    title_en: "Local Privilege Escalation Vulnerability in Palo Alto Networks GlobalProtect™ Application (CVE-2026-0299)",
    summary_en: "A local privilege escalation vulnerability, CVE-2026-0299, has been found in the Palo Alto Networks GlobalProtect™ application. This vulnerability allows a local user's privileges to be escalated to NT AUTHORITY\\SYSTEM on Windows systems, and to root privileges on macOS and Linux systems. This poses a severe security risk, enabling non-administrator users to execute arbitrary commands with elevated administrative privileges.\n\nIt is worth noting that versions of the GlobalProtect application on iOS, Android, and Chrome OS platforms are not affected by this vulnerability. Users are advised to immediately check and update all affected operating system versions to patch this local privilege escalation flaw and prevent unauthorized system control.",
    tags_en: ["Palo Alto Networks", "GlobalProtect", "CVE-2026-0299", "Local Privilege Escalation", "Windows", "macOS", "Linux"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-0299", lang: "EN" }
    ]
  },
  {
    id: "20260813-126",
    trackers: ["os"],
    category: "重點關注",
    title: "開發者分享自建搜尋引擎 Marlin：打造個人化、專注於興趣內容的開源索引系統",
    summary: "本篇文章介紹了軟體開發者 Alex Morley-Finch 所建立的開源專案 Marlin。該系統旨在解決現有大型搜尋引擎（如 Google）內容過載、難以聚焦個人興趣內容的問題。Marlin 的設計核心是建立一個個人化的搜尋索引，專門收錄開發者關心的特定內容，例如個人作品集、Zines 或小規模軟體專案。系統架構包含四個主要流程：一個抓取器（fetcher）用於獲取網域，一個工作者（worker）呼叫小型、兼容 OpenAI 的語言模型進行內容摘要、分類和標籤生成，一個監管者（steward）用於過濾不良頁面，以及一個帶有篩選器的 API 介面。Morley-Finch 提到，初期測試的結果顯示，系統傾向抓取廣泛的網路內容，而非目標範圍。他透過建立權重系統來引導爬取，並成功將索引範圍控制在約 56 萬個頁面。然而，他指出最大的挑戰在於語言模型自動生成的分類和標籤，導致系統產生了大量重複或單用次的分類和標籤，使得該設計難以大規模擴展，更適合作為興趣愛好者的小型專案。該專案的程式碼已開源，鼓勵使用者自行嘗試和客製化。",
    tags: ["Marlin", "開源專案", "搜尋引擎", "AI 內容索引", "語言模型", "網頁爬蟲"],
    title_en: "Developer Shares Self-Built Search Engine Marlin: An Open-Source Indexing System for Personalized, Interest-Focused Content",
    summary_en: "This article introduces Marlin, an open-source project created by software developer Alex Morley-Finch. The system aims to solve the problem of existing large search engines (such as Google) having content overload and making it difficult to focus on personal interests. The core design of Marlin is to build a personalized search index that specifically collects content relevant to a developer's interests, such as personal portfolios, Zines, or small-scale software projects. The system architecture includes four main processes: a fetcher for acquiring domains, a worker that calls small, OpenAI-compatible language models for content summarization, classification, and tag generation, a steward used for filtering poor pages, and an API interface with filters. Morley-Finch mentioned that initial testing showed the system tended to crawl broad web content rather than the target scope. He addressed this by establishing a weighting system to guide the crawling, successfully limiting the index scope to approximately 560,000 pages. However, he pointed out that the biggest challenge lies in the classification and tags automatically generated by the language model, which resulted in a large amount of duplicate or single-use classifications and tags, making the design difficult to scale up and better suited as a small project for hobbyists. The project's code has been open-sourced, encouraging users to try and customize it themselves.",
    tags_en: ["Marlin", "Open-Source Project", "Search Engine", "AI Content Indexing", "Language Model", "Web Crawler"],
    sources: [
      { name: "The Register", url: "https://theregister.com/software/2026/08/13/give-google-the-boot-by-building-your-own-search-engine/5287535", lang: "EN" }
    ]
  },
  {
    id: "20260813-127",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft整合Copilot應用程式：消費者與M365 Copilot將統一為單一超應用程式",
    summary: "Microsoft宣布將整合其獨立的消費者版Copilot應用程式與Microsoft 365 Copilot，推出一個統一的Copilot超應用程式。此舉旨在簡化應用生態系統，並為消費者和企業用戶提供更一致的Copilot體驗。新應用程式將讓用戶可以在一個介面中，與Microsoft 365套件、文件等內容並存，使用LLM進行聊天、生成圖片等。對於未付費訂閱的用戶，仍可免費使用基礎功能，但高限制和複雜任務仍建議升級至Microsoft 365訂閱。然而，此次整合也伴隨著功能調整與淘汰：消費者版Copilot將移除Podcast和群組聊天功能，而Deep Research功能將被替換為Microsoft 365 Premium訂閱用戶可使用的Researcher功能。用戶應注意，舊的Podcast內容和群組聊天內容將無法自動保存，建議用戶提前下載或備份重要資料，以避免資料遺失。新應用程式將分階段推出，初期將涵蓋行動裝置和網頁，之後會擴展至Windows和Mac。",
    tags: ["Microsoft", "Copilot", "Microsoft 365", "AI", "超應用程式", "LLM"],
    title_en: "Microsoft to Integrate Copilot Applications: Consumer and M365 Copilot to Unify into Single Super App",
    summary_en: "Microsoft announced the integration of its standalone consumer Copilot application with Microsoft 365 Copilot, launching a unified Copilot super app. This move aims to simplify the application ecosystem and provide a more consistent Copilot experience for both consumer and enterprise users. The new application will allow users to interact with Microsoft 365 suite content and documents within a single interface, using an LLM for tasks such as chatting and image generation. Users without a paid subscription can still access basic features for free, but for higher limits and complex tasks, upgrading to a Microsoft 365 subscription is recommended. However, this integration also involves feature adjustments and deprecations: the consumer Copilot will remove Podcast and group chat functionalities, while the Deep Research feature will be replaced by the Researcher function available to Microsoft 365 Premium subscribers. Users should note that old Podcast and group chat content cannot be automatically saved, and they are advised to download or back up important data in advance to prevent data loss. The new application will be rolled out in phases, initially covering mobile devices and web, before expanding to Windows and Mac.",
    tags_en: ["Microsoft", "Copilot", "Microsoft 365", "AI", "Super App", "LLM"],
    sources: [
      { name: "The Register", url: "https://theregister.com/ai-and-ml/2026/08/13/microsofts-dueling-copilot-apps-have-combined-into-a-single-entity/5287512", lang: "EN" }
    ]
  },
  {
    id: "20260813-128",
    trackers: ["security"],
    category: "前瞻技術",
    title: "GhostJacking：AI代理遭劫持新攻擊手法，利用數據陷阱執行任意程式碼",
    summary: "本週資安情報指出一種名為 GhostJacking 的新攻擊手法，它擴展了 Agentjacking 的概念，旨在欺騙 AI 代理（AI agents）在開發人員的機器上執行任意程式碼。攻擊者可以利用看似無害的數據，例如被污染的日誌或警報，引誘 AI 代理執行惡意行為。這種攻擊的嚴重性在於，它不違反任何既有規則，而是利用了代理本來被允許的合法存取權限和提升的權限，從而達到攻擊目的。攻擊鏈可以包括利用已修補的沙盒逃逸漏洞（例如 Anthropic 的 Claude Desktop），竊取數據，並在代理配置中植入後門以維持持久性。資安專家強調，企業必須為 AI 代理建立嚴格的「護欄」（guardrails），以防範利用其合法存取權限進行劫持攻擊，保護整個 AI 供應鏈的安全性。",
    tags: ["AI Agent", "GhostJacking", "Agentjacking", "Anthropic", "沙盒逃逸", "AI 供應鏈"],
    title_en: "GhostJacking: New Attack Method Hijacks AI Agents Using Data Traps to Execute Arbitrary Code",
    summary_en: "This week's cybersecurity intelligence points to a new attack method called GhostJacking, which expands on the concept of Agentjacking. It aims to deceive AI agents into executing arbitrary code on a developer's machine. Attackers can utilize seemingly harmless data, such as corrupted logs or alerts, to trick the AI agent into malicious behavior. The severity of this attack lies in the fact that it does not violate any existing rules; rather, it exploits the agent's legitimate, allowed access and elevated privileges to achieve its malicious goal. The attack chain can include exploiting a patched sandbox escape vulnerability (such as Anthropic's Claude Desktop), stealing data, and implanting a backdoor in the agent's configuration to maintain persistence. Cybersecurity experts emphasize that enterprises must establish strict 'guardrails' for AI agents to prevent hijacking attacks that utilize their legitimate access rights, thereby protecting the security of the entire AI supply chain.",
    tags_en: ["AI Agent", "GhostJacking", "Agentjacking", "Anthropic", "Sandbox Escape", "AI Supply Chain"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/threatsday-ghostjacking-ai-attacks.html", lang: "EN" }
    ]
  },
  {
    id: "20260813-129",
    trackers: ["eu_cra"],
    category: "產業動態",
    title: "Truen憑藉高性能AI攝影機與軟體成功搶攻全球市場",
    summary: "Truen第二季的營收達到166.7億韓元，較去年同期增長13.9%，實現了兩位數的成長。特別是整體出口營收暴增176.5%，其主打的IP攝影機海外營收更是成長了270.5%，進一步鞏固了其在全球市場的地位。實現此成長的主要動力來自於搭載高性能AI功能的「TA系列」、「TX-8系列」等高端On-device AI攝影機產品線，以及用於整合管理與分析AI攝影機事件數據的軟體「TAEM」(Truen AI Event Manager)的供應擴大。Truen正透過鎖定美國、德國等歐洲主要國家和印度市場，搶攻取代中國產品的需求，擴展其業務領域。公司預計下半年將以取得世界第三大影像安全市場印度市場的STQC認證為目標，進一步擴大供應。",
    tags: ["Truen", "IP攝影機", "AI攝影機", "TAEM", "全球市場", "影像安全"],
    title_en: "Truen Captures Global Market with High-Performance AI Cameras and Software",
    summary_en: "Truen's second-quarter revenue reached KRW 16.67 billion, marking a 13.9% increase year-over-year, achieving double-digit growth. Notably, overall export revenue surged by 176.5%, and its flagship IP cameras' overseas revenue grew by 270.5%, further solidifying its global market position. This growth was primarily driven by high-end on-device AI camera product lines, such as the 'TA series' and 'TX-8 series' equipped with high-performance AI features, and the expanded supply of the software 'TAEM' (Truen AI Event Manager), which is used for integrating, managing, and analyzing AI camera event data. Truen is expanding its business by targeting the US, Germany, and other major European countries, as well as the Indian market, to capitalize on the demand for alternatives to Chinese products. The company plans to further expand its supply by aiming to obtain the STQC certification for the Indian market, positioning itself as the world's third largest imaging security market, in the second half of the year.",
    tags_en: ["Truen", "IP Camera", "AI Camera", "TAEM", "Global Market", "Imaging Security"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145146&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260813-130",
    trackers: ["os", "security"],
    category: "產業動態",
    title: "拉扎魯斯利用 Windows 零日漏洞 CVE-2026-68820 傳播 FudModule Rootkit",
    summary: "資安公司 Checkpoint Research 揭露，與北韓相關的駭客組織 Lazarus 曾試圖利用 Windows 核心零日漏洞 CVE-2026-68820，來傳播名為 FudModule 的升級版 Rootkit。攻擊者在「Operation Dream Job」行動中，以冒充招募人員的社會工程手法，鎖定國防、航空航太及航空產業。他們透過 DLL Sideloading 和偽裝的 PDF 檢視器進行滲透，並利用 SEO 技術建立假網站規避安全偵測。最終，攻擊者利用 MISTPEN 下載器，惡用 Microsoft Graph API 和 OneDrive 導入惡意模組，並透過漏洞取得最高權限。FudModule v3.1 Rootkit 能夠癱瘓超過 90 個 Windows Event Tracking Providers (ETW Providers) 和 Smart App Control 功能。Checkpoint 建議使用 Windows 11 的機構應立即應用 8 月份的定期安全補丁，並加強對流出至外部網銀郵件伺服器 (Outbound Traffic) 的網路通訊監控。",
    tags: ["Lazarus", "CVE-2026-68820", "FudModule", "Windows Kernel", "DLL Sideloading", "Microsoft Graph API"],
    title_en: "Lazarus Exploits Windows Zero-Day CVE-2026-68820 to Propagate FudModule Rootkit",
    summary_en: "Security firm Checkpoint Research revealed that the North Korea-linked hacking group Lazarus attempted to exploit the Windows kernel zero-day vulnerability CVE-2026-68820 to propagate an upgraded Rootkit called FudModule. During an operation dubbed “Operation Dream Job,” the attackers targeted the defense, aerospace, and aviation industries using social engineering tactics that impersonated recruiters. They penetrated systems using DLL Sideloading and disguised PDF viewers, and established fake websites using SEO techniques to evade security detection. Finally, the attackers utilized the MISTPEN downloader to abuse the Microsoft Graph API and OneDrive to introduce malicious modules, gaining maximum privileges through the vulnerability. The FudModule v3.1 Rootkit is capable of crippling over 90 Windows Event Tracking Providers (ETW Providers) and the Smart App Control feature. Checkpoint recommends that organizations using Windows 11 immediately apply the August regular security patches and strengthen network monitoring for outbound traffic destined for external banking email servers.",
    tags_en: ["Lazarus", "CVE-2026-68820", "FudModule", "Windows Kernel", "DLL Sideloading", "Microsoft Graph API"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145147&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260813-131",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "韓國影像資訊研究組合舉辦物理安全領域知識課程 130人參與，涵蓋政策法規至AI監控實務",
    summary: "韓國影像資訊研究組合（KIIA）於8月11日至12日在首爾COEX舉辦了「物理安全領域知識課程」，成功結業，吸引了包括產業現職人員、相關產業從業人員及學生等共計130名學員參與。本次課程內容涵蓋了物理與融合安全產業的培育政策、AI時代的個人資訊保護政策變遷、個人影像資訊管理實務、國內外物理安全技術趨勢，以及AI智慧影像監控的運營現況與未來策略。課程內容廣泛，從政策法規、硬體/軟體技術，到公共及私人設施的監控運營與事件應對案例，全面傳達了物理安全產業的知識。KIIA指出，物理安全產業是一個結合了ICT、影像處理、GIS、AI等複雜技術，並整合了國際標準與國內外政策法規（如資訊安全、個人資訊保護）的綜合性領域，未來將持續提供相關教育訓練。",
    tags: ["物理安全", "物理保安", "KIIA", "AI", "個人資訊保護", "影像資訊"],
    title_en: "Korea Image Information Association Hosts Physical Security Knowledge Course with 130 Participants, Covering Topics from Policy Regulations to AI Surveillance Practices",
    summary_en: "The Korea Image Information Association (KIIA) successfully concluded its 'Physical Security Knowledge Course' held at COEX in Seoul from August 11th to 12th. The course attracted a total of 130 participants, including industry professionals, related sector employees, and students. The curriculum covered the nurturing policies for the physical and integrated security industries, changes in personal information protection policies in the AI era, practical personal image information management, domestic and international physical security technology trends, and the operational status and future strategies of AI smart video surveillance. The content was comprehensive, spanning from policy regulations and hardware/software technology to surveillance operations and incident response case studies for both public and private facilities, thereby conveying comprehensive knowledge of the physical security industry. KIIA noted that the physical security industry is a complex domain that integrates various technologies such as ICT, image processing, GIS, and AI, while also incorporating international standards and domestic and foreign policies and regulations (such as information security and personal information protection). KIIA stated that it will continue to provide relevant education and training in the future.",
    tags_en: ["Physical Security", "Physical Security", "KIIA", "AI", "Personal Information Protection", "Image Information"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145148&kind=&sub_kind=", lang: "EN" }
    ]
  },
  {
    id: "20260813-132",
    trackers: ["eu_cra"],
    category: "研討活動",
    title: "卡斯柏奇參與WSIS與國際論壇：強調中小企業資安韌性及AI時代的全球治理合作",
    summary: "全球資安企業卡斯柏奇（Kaspersky）於2026年7月在瑞士日內瓦舉行的WSIS論壇及多個國際論壇上，分享了全球資安合作與責任技術治理的洞察。在WSIS論壇上，卡斯柏奇特別針對中小企業（SMEs）舉辦了專場，討論了SMEs面臨的資安挑戰、應對策略，以及在持續發展中如何提升資安韌性。此外，卡斯柏奇也參與了UN全球AI治理對話、ITU Kaleidoscope學術會議和AI for Good Global Summit等活動。在這些場合，重點討論了AI時代的資安課題，強調了建立國際協作體系的重要性，特別是針對「代理式AI」（Agentic AI）的信任管理，指出跨國界事故應對協作是建立信任的基礎。卡斯柏奇持續透過參與國際組織，推動全球資安合作，並分享研究成果，以建立安全可靠的數位環境。",
    tags: ["Kaspersky", "WSIS Forum 2026", "AI治理", "中小企業", "資安韌性", "UN Global Dialogue on AI Governance"],
    title_en: "Kaspersky Participates in WSIS and International Forums: Emphasizing SME Cybersecurity Resilience and Global Governance in the AI Era",
    summary_en: "Global cybersecurity company Kaspersky shared insights on global cybersecurity cooperation and responsible technology governance at the WSIS Forum and various international forums in Geneva, Switzerland, in July 2026. At the WSIS Forum, Kaspersky held a dedicated session focused on Small and Medium-sized Enterprises (SMEs), discussing the cybersecurity challenges and response strategies facing SMEs, and how to enhance cybersecurity resilience during continuous development. Furthermore, Kaspersky participated in events such as the UN Global AI Governance Dialogue, the ITU Kaleidoscope academic conference, and the AI for Good Global Summit. At these venues, key topics included cybersecurity challenges in the AI era, emphasizing the importance of establishing international cooperation systems, particularly concerning trust management for 'Agentic AI,' and pointing out that cross-border incident response cooperation is fundamental to building trust. Kaspersky continues to promote global cybersecurity cooperation and share research findings by participating in international organizations, aiming to establish a secure and reliable digital environment.",
    tags_en: ["Kaspersky", "WSIS Forum 2026", "AI Governance", "SMEs", "Cybersecurity Resilience", "UN Global Dialogue on AI Governance"],
    sources: [
      { name: "Boannews 韓國", url: "http://boannews.com/media/view.asp?idx=145144&kind=&sub_kind=", lang: "EN" }
    ]
  }
];
