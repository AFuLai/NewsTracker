// data-20260711.js — 2026-07-11
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-07-11"] = [
  {
    id: "20260711-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布 DSA-6387：修補 OpenSSH 服務中的密碼傳輸漏洞",
    summary: "Debian 發布了安全公告 DSA-6387，修補了 OpenSSH 服務中一個密碼傳輸相關的漏洞。該漏洞可能允許攻擊者在特定條件下，竊取或攔截用戶的密碼資訊。此類漏洞屬於核心元件的傳輸安全問題，實務上可能導致用戶帳號被未經授權的第三方取得。Debian 建議所有使用 Debian 系統的用戶，應立即更新 OpenSSH 套件至修補版本，以確保連線的密碼傳輸安全。由於原文未提供具體的 CVSS 分數或影響範圍，用戶應以 Debian 官方公告為準，並將此更新視為提升系統基礎安全性的必要步驟。",
    tags: ["Debian", "OpenSSH", "DSA-6387", "密碼傳輸", "Linux 核心元件", "安全更新"],
    title_en: "Debian Releases DSA-6387: Patching Password Transmission Vulnerability in OpenSSH Service",
    summary_en: "Debian has issued security advisory DSA-6387, patching a password transmission-related vulnerability in the OpenSSH service. This vulnerability could potentially allow an attacker, under specific conditions, to steal or intercept user password information. This type of vulnerability relates to the transmission security of core components and could practically lead to unauthorized third-party access to user accounts. Debian recommends that all users of Debian systems immediately update the OpenSSH package to the patched version to ensure the security of password transmission during connections. Since the original text did not provide specific CVSS scores or impact scope, users should refer to the official Debian announcement and treat this update as a necessary step to enhance fundamental system security.",
    tags_en: ["Debian", "OpenSSH", "DSA-6387", "Password Transmission", "Linux Core Component", "Security Update"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00298.html", lang: "EN" }
    ]
  },
  {
    id: "20260711-002",
    trackers: ["os"],
    category: "Linux",
    title: "Debian 13.6 最新版本發布：包含核心安全修補、Nginx/Redis 等多個套件更新，並回溯 GeoIP 資料庫",
    summary: "Debian 官方發布了 13.6 版本，這是 Debian Trixie 的最新點版本。此版本包含最新批次的安全性修補，涵蓋了 Linux 核心以及 Nginx、Redis、FFmpeg、Thunderbird、Chromium 和 PHP 等眾多套件的安全公告。除了修補漏洞外，Debian 13.6 也進行了兩個重要變更：首先，它將 geoip-database 套件回溯至 2019 年 12 月的版本狀態，原因是較新的 GeoLite 版本被判定與 Debian 的自由軟體指南不相容；其次，它引入了 fwupd 2.0.20，此更新增加了更新 Secure Boot CA、KEK 和 DBX 資料庫的能力，以應對目前大多數 PC 預設使用的 UEFI Secure Boot CA 即將過期。使用者應透過 Debian.org 下載並更新至此版本，以確保系統的安全性與相容性。",
    tags: ["Debian", "Debian 13.6", "Linux 核心", "安全修補", "Nginx", "Secure Boot"],
    title_en: "Debian 13.6 Latest Version Released: Includes Core Security Patches, Updates for Nginx/Redis, and GeoIP Database Rollback",
    summary_en: "Debian has released version 13.6, the latest point release for Debian Trixie. This version includes the latest batch of security patches, covering the Linux kernel as well as numerous packages including Nginx, Redis, FFmpeg, Thunderbird, Chromium, and PHP. In addition to patching vulnerabilities, Debian 13.6 also implements two significant changes: First, the geoip-database package is rolled back to the version state of December 2019, because newer GeoLite versions were deemed incompatible with Debian's free software guidelines; second, it introduces fwupd 2.0.20. This update enhances the ability to update the Secure Boot CA, KEK, and DBX databases, addressing the impending expiration of the UEFI Secure Boot CA currently used by most PCs. Users should download and update to this version from Debian.org to ensure system security and compatibility.",
    tags_en: ["Debian", "Debian 13.6", "Linux Kernel", "Security Patch", "Nginx", "Secure Boot"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Debian-13.6-Released", lang: "EN" }
    ]
  },
  {
    id: "20260711-003",
    trackers: ["os"],
    category: "Linux",
    title: "Linux 核心修復多顯示卡系統的 VGA 顯示回退邏輯，改善啟動時主顯示設備選擇",
    summary: "本次 Linux 7.2-rc3 的 x86 核心修復中，重點修復了在多顯示卡系統啟動過程中的 VGA 顯示回退邏輯。此問題源於某些系統可能存在 VGA 相容設備，但該設備並非實際用於顯示，若因設備列舉順序，該設備先被偵測到，可能導致多個設備都帶有 `boot_display` 屬性，造成使用者空間的混淆。修復後的邏輯確保只有當沒有建立 framebuffer 時，才會回退到預設的 VGA 設備，從而保證最多只有一個主要的圖形設備（最好是帶有 framebuffer 的設備）被報告。此修復最初由 Canonical 工程師 Aaron Ma 提出，並由 AMD 工程師 Mario Limonciello 優化。由於此修復是針對自 Linux 6.18 以來存在的 FBCON 代碼變更，預計未來會被回溯應用到近期穩定的 Linux 核心版本。",
    tags: ["Linux 核心", "x86", "VGA", "多顯示卡", "Linux 7.2-rc3", "Framebuffer"],
    title_en: "Linux Kernel Fixes VGA Display Fallback Logic in Multi-GPU Systems, Improving Primary Display Selection at Boot",
    summary_en: "This fix in the Linux 7.2-rc3 x86 kernel addresses the VGA display fallback logic during the startup process of multi-GPU systems. The issue stemmed from certain systems potentially having VGA compatible devices that are not actually used for display. If, due to device enumeration order, such a device was detected first, it could cause multiple devices to carry the `boot_display` attribute, leading to user-space confusion. The corrected logic ensures that fallback to the default VGA device only occurs when a framebuffer has not been established, thereby guaranteeing that at most one primary graphics device (preferably one with a framebuffer) is reported. This fix was initially proposed by Canonical engineer Aaron Ma and optimized by AMD engineer Mario Limonciello. Because this fix targets FBCON code changes present since Linux 6.18, it is expected to be backported to recent stable Linux kernel versions.",
    tags_en: ["Linux Kernel", "x86", "VGA", "Multi-GPU", "Linux 7.2-rc3", "Framebuffer"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-rc3-Multi-GPU-Fix", lang: "EN" }
    ]
  },
  {
    id: "20260711-004",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 桌面環境更新：Spectacle 支援螢幕錄影音訊、系統監控新增 vRAM 監測",
    summary: "KDE 開發團隊持續為即將推出的 Plasma 6.8 桌面環境增添新功能。本次更新重點包括：Spectacle 螢幕錄影工具現已支援錄製系統音訊和/或麥克風音訊，且開發者已移除對 OpenCV 函式庫的依賴，改用其他方式實現模糊效果。此外，KDE 系統監控器現在可測量 vRAM 使用率佔總顯存的百分比，與系統記憶體報告方式一致。另有兩項優化：KDE Plasma 登入管理器在較舊版本的 systemd 系統上支援自動登入，以及外部顯示器亮度調整的反映速度得到提升。這些更新旨在提升 Plasma 桌面環境的穩定性與功能性，建議使用者關注 KDE 官方公告以獲取完整的修補與功能細節。",
    tags: ["KDE Plasma", "Plasma 6.8", "Spectacle", "systemd", "Linux 桌面環境", "vRAM"],
    title_en: "KDE Plasma 6.8 Desktop Environment Update: Spectacle Adds Screen Recording Audio Support, System Monitor Adds vRAM Monitoring",
    summary_en: "The KDE development team continues to add new features to the upcoming Plasma 6.8 desktop environment. Key highlights of this update include: Spectacle, the screen recording tool, now supports recording system audio and/or microphone audio. Furthermore, developers have removed the dependency on the OpenCV library for the blur effect, utilizing alternative methods instead. Additionally, the KDE System Monitor can now measure the percentage of vRAM usage relative to total GPU memory, aligning with the system memory reporting method. Two other optimizations were implemented: support for automatic login in the KDE Plasma login manager on older versions of systemd, and improved responsiveness for external display brightness adjustments. These updates aim to enhance the stability and functionality of the Plasma desktop environment. Users are advised to monitor official KDE announcements for complete patch and feature details.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "Spectacle", "systemd", "Linux Desktop Environment", "vRAM"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Plasma-6.8-Spectacle-Audio", lang: "EN" }
    ]
  },
  {
    id: "20260711-005",
    trackers: ["os"],
    category: "Linux",
    title: "System76 Pop!_OS 24.04 推出「磨砂玻璃」桌面風格，提升使用者介面美觀度",
    summary: "System76 為其 Pop!_OS Linux 發行版，在 COSMIC 桌面環境中推出了「磨砂玻璃」（Frosted Glass）風格。此功能旨在提升作業系統的視覺美觀度，讓使用者介面更具現代感。目前該功能已對 Pop!_OS 24.04 的使用者開放，使用者可透過「設定」>「桌面」>「外觀」找到並啟用此風格。COSMIC 開發團隊預計在下週標記下一個版本，屆時此「磨砂玻璃」功能將會擴散至其他使用 COSMIC 套件的 Linux 發行版。此更新屬於系統介面（UI/UX）的視覺優化，而非核心安全修補，主要目標是為 Pop!_OS 社群提供更豐富的客製化外觀選擇。",
    tags: ["Pop!_OS", "System76", "COSMIC", "Linux", "桌面環境", "UI/UX"],
    title_en: "System76 Pop!_OS 24.04 introduces 'Frosted Glass' desktop style to enhance UI aesthetics",
    summary_en: "System76 has introduced a 'Frosted Glass' style within the COSMIC desktop environment for its Pop!_OS Linux distribution. This feature aims to enhance the visual aesthetics of the operating system, giving the user interface a more modern look. This feature is currently available to users of Pop!_OS 24.04 and can be enabled via 'Settings' > 'Desktop' > 'Appearance'. The COSMIC development team plans to roll out this 'Frosted Glass' feature to other Linux distributions using the COSMIC stack in the next version release. This update is a visual optimization of the system interface (UI/UX), rather than a core security patch, and its main goal is to provide the Pop!_OS community with more rich customization options for appearance.",
    tags_en: ["Pop!_OS", "System76", "COSMIC", "Linux", "Desktop Environment", "UI/UX"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/COSMIC-Frosted-Glass-Arrives", lang: "EN" }
    ]
  },
  {
    id: "20260711-006",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA更新KEV清單：Joomla! iCagenda與Balbooa Forms兩外掛漏洞遭積極利用，恐致遠端程式碼執行",
    summary: "美國網路與基礎設施安全局（CISA）更新已遭利用漏洞清單（KEV），警告開放原始碼內容管理系統Joomla!的兩款外掛套件：iCagenda（CVE-2026-48939）和Balbooa Forms（CVE-2026-56291）存在高風險漏洞。這兩個漏洞皆源於使用者可透過檔案附件功能上傳未經限制的檔案，進而導致遠端程式碼執行（RCE）攻擊。iCagenda允許上傳並執行PHP程式碼，而Balbooa Forms允許上傳可執行檔案。由於這些漏洞已被積極利用，聯邦機構需在三日內修補。修補建議是將iCagenda更新至4.0.8版，並檢查Joomla 6網站的附加檔案資料夾；對於Balbooa Forms，用戶應檢查上傳資料夾、可疑的系統管理員帳號，並尋找網站上的已修改或陌生檔案，即使更新版本也無法保證安全，需假設網站已遭攻擊。",
    tags: ["CISA", "KEV", "Joomla!", "CVE-2026-48939", "CVE-2026-56291", "RCE", "外掛套件"],
    title_en: "CISA Updates KEV List: Joomla! iCagenda and Balbooa Forms Plugins Vulnerable to Active Exploitation, Risking Remote Code Execution",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) has updated its Known Exploited Vulnerabilities (KEV) catalog, warning that two plugins for the open-source content management system Joomla!—iCagenda (CVE-2026-48939) and Balbooa Forms (CVE-2026-56291)—contain high-risk vulnerabilities. Both vulnerabilities stem from the ability for users to upload unrestricted files via the file attachment function, potentially leading to Remote Code Execution (RCE) attacks. iCagenda allows the upload and execution of PHP code, while Balbooa Forms permits the upload of executable files. Because these vulnerabilities have been actively exploited, federal agencies must patch within three days. The recommended remediation is to update iCagenda to version 4.0.8 and check the Joomla 6 site's attachments folder; for Balbooa Forms, users should check the upload directory, suspicious administrator accounts, and look for modified or unfamiliar files on the site, assuming the site has been compromised even after updating, as no guarantee of safety can be made.",
    tags_en: ["CISA", "KEV", "Joomla!", "CVE-2026-48939", "CVE-2026-56291", "RCE", "Plugins"],
    sources: [
      { name: "iThome", url: "https://ithome.com.tw/news/177238", lang: "ZH-TW" }
    ]
  },
  {
    id: "20260711-007",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露中國與印度資助的網路間諜活動：巴洛奇斯坦警方系統遭植入惡意程式",
    summary: "資安研究人員報告指出，自 2024 年 2 月至 2026 年 4 月間，巴基斯坦多家執法機構，包括巴洛奇斯坦警方、開伯爾普什圖警察等，遭受持續的網路間諜活動。攻擊者利用多種惡意程式，如 PlugX、ShadowPad、Cobalt Strike 和 Remcos RAT，竊取包含犯罪記錄、生物識別資料、租客登記和人員檔案等敏感資訊。其中，針對巴洛奇斯坦警方的攻擊特別值得關注，攻擊者透過植入惡意程式「cms_plugin.exe」到「Complaint Management System」（CMS）網站，將本應服務公眾的平訴系統，轉化為惡意程式傳遞機制。研究指出，PlugX 和 ShadowPad 的活動模式，以及 Cobalt Strike 的受害者群體，與中國國家級駭客群體高度一致，而 Remcos RAT 的活動則與印度相關的駭客群體有重疊。此次事件顯示，目標機構掌握國家內部安全資訊，成為多方地緣政治競爭的焦點。",
    tags: ["巴洛奇斯坦警方", "網路間諜活動", "PlugX", "ShadowPad", "Cobalt Strike", "Remcos RAT", "APT"],
    title_en: "Research Reveals China and India-Sponsored Cyber Espionage: Balochistan Police System Infected with Malware",
    summary_en: "Cybersecurity researchers reported that between February 2024 and April 2026, multiple law enforcement agencies in Pakistan, including the Balochistan Police and Khyber Pakhtunkhwa Police, were subjected to continuous cyber espionage. Attackers utilized various pieces of malware, such as PlugX, ShadowPad, Cobalt Strike, and Remcos RAT, to steal sensitive information including criminal records, biometric data, tenant registries, and personnel files. Of particular concern is the attack targeting the Balochistan Police, where attackers implanted the malware 'cms_plugin.exe' into the 'Complaint Management System' (CMS) website, transforming a public service complaint system into a malware delivery mechanism. The research indicates that the activity patterns of PlugX and ShadowPad, as well as the victim groups for Cobalt Strike, are highly consistent with China's state-level hacking groups, while the activity of Remcos RAT overlaps with India-related hacking groups. This incident demonstrates that the target organizations' grasp of national internal security information has become a focus of multi-party geopolitical competition.",
    tags_en: ["Balochistan Police", "Cyber Espionage", "PlugX", "ShadowPad", "Cobalt Strike", "Remcos RAT", "APT"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/hackers-weaponize-balochistan-police.html", lang: "EN" }
    ]
  },
  {
    id: "20260711-008",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Zimbra 警告：經典網頁客戶端存在嚴重儲存型 XSS 漏洞，可能導致任意程式碼執行",
    summary: "Zimbra 呼籲客戶立即更新，以修補影響其經典網頁客戶端（Classic Web Client）的嚴重資安漏洞。此漏洞被描述為一種儲存型跨站腳本（Stored XSS），允許攻擊者透過精心製作的電子郵件，在用戶會話中執行惡意腳本。若被利用，攻擊者可能竊取信箱資訊、會話資料或帳戶設定。XSS 漏洞發生於應用程式未對不受信任的資料進行適當驗證或轉義，導致攻擊者能注入並執行惡意 JavaScript，造成會話劫持、憑證竊取及帳戶受損。雖然原文未提及此漏洞是否已被實地利用，但 Zimbra 建議用戶升級至 Zimbra Collaboration Suite 版本 10.1.19 以獲得最佳保護。過去 Zimbra 的 XSS 漏洞曾是駭客的攻擊目標，且過去曾有其他相關漏洞如 CVE-2025-27915、CVE-2023-37580 和 CVE-2024-27443 等。建議用戶務必更新。",
    tags: ["Zimbra", "Classic Web Client", "Stored XSS", "CVE-2025-27915", "任意程式碼執行", "電子郵件安全"],
    title_en: "Zimbra Warning: Classic Web Client Contains Critical Stored XSS Vulnerability Leading to Potential Arbitrary Code Execution",
    summary_en: "Zimbra urges customers to update immediately to patch a critical security vulnerability affecting its Classic Web Client. This vulnerability is described as a Stored Cross-Site Scripting (XSS), which allows an attacker to execute malicious scripts during a user's session by sending a specially crafted email. If exploited, the attacker could steal mailbox information, session data, or account settings. The XSS vulnerability occurs because the application fails to properly validate or encode untrusted data, allowing an attacker to inject and execute malicious JavaScript, leading to session hijacking, credential theft, and account damage. Although the original text does not mention if this vulnerability has been actively exploited, Zimbra recommends users upgrade to Zimbra Collaboration Suite version 10.1.19 for optimal protection. In the past, Zimbra's XSS vulnerabilities have been targets for hackers, and there have been other related vulnerabilities such as CVE-2025-27915, CVE-2023-37580, and CVE-2024-27443. Users are strongly advised to update.",
    tags_en: ["Zimbra", "Classic Web Client", "Stored XSS", "CVE-2025-27915", "Arbitrary Code Execution", "Email Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/critical-zimbra-flaw-could-let-crafted_0483473395.html", lang: "EN" }
    ]
  },
  {
    id: "20260711-009",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "Linux 核心 LPE 漏洞 Januscape (CVE-2026-53359) 曝光，影響 KVM 虛擬化環境",
    summary: "一個名為 Januscape 的本地權限提升 (LPE) 漏洞，CVE-2026-53359，於 2026 年 7 月 6 日公開，影響所有 Ubuntu 版本。此漏洞專門針對 KVM 系統中的巢狀虛擬化 (nested virtualization)，適用於 Intel 和 AMD x86_64 架構。攻擊者可利用此漏洞，從虛擬機 (guest) 崩潰主機 (hypervisor) 或攻擊同一主機上的其他租戶。若您的雲服務提供商使用基於 Linux KVM 的超監控，且允許巢狀虛擬化，您的虛擬機或主機可能面臨風險。若您自行運行超監控，攻擊面來自於根權限的虛擬機。修補建議是安裝包含修補的 Linux 核心套件。在修補程式發布前，可透過禁用巢狀虛擬化來緩解風險，但這可能會影響正常運作。此外，應檢查 `/dev/kvm` 的權限，確保只有特權用戶可寫入。",
    tags: ["CVE-2026-53359", "Januscape", "Linux 核心", "LPE", "KVM", "虛擬化"],
    title_en: "Linux Kernel LPE Vulnerability Januscape (CVE-2026-53359) Exposed, Affecting KVM Virtualization Environments",
    summary_en: "A local privilege escalation (LPE) vulnerability, named Januscape (CVE-2026-53359), was disclosed on July 6, 2026, affecting all Ubuntu versions. This vulnerability specifically targets nested virtualization within KVM systems, applicable to Intel and AMD x86_64 architectures. An attacker can exploit this vulnerability to crash the hypervisor from a guest virtual machine or attack other tenants on the same host. If your cloud service provider uses a Linux KVM-based hypervisor and allows nested virtualization, your virtual machine or host may be at risk. If you run the hypervisor yourself, the attack surface comes from a root-privileged virtual machine. The recommended fix is to install a Linux kernel package containing the patch. Before the patch is released, the risk can be mitigated by disabling nested virtualization, though this may impact normal operation. Furthermore, the permissions of `/dev/kvm` should be checked to ensure that only privileged users can write to it.",
    tags_en: ["CVE-2026-53359", "Januscape", "Linux Kernel", "LPE", "KVM", "Virtualization"],
    sources: [
      { name: "Ubuntu Security Notices", url: "https://ubuntu.com//blog/januscape-linux-vulnerability-mitigations-available", lang: "EN" }
    ]
  },
  {
    id: "20260711-010",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "澳洲資安中心警告：全球CMS平台面臨大規模漏洞利用，多個插件與主題遭鎖定",
    summary: "澳洲資安中心（ACSC）發出警報，警告全球正發生大規模的漏洞利用活動，目標是多種內容管理系統（CMS）及其相關插件。攻擊者透過利用CMS和插件中的多個漏洞，在受害網站上部署後門（webshells），以維持持久性存取權，從而竊取憑證、植入惡意軟體，並深入網路內部。受影響的平台包括 WordPress、Craft CMS、MaxSite CMS、MetInfo CMS 和 Joomla JCE 等。本次活動利用的漏洞數量龐大，涵蓋了包括 Simple File List、WavePlayer、Ninja Forms、Gravity Forms 等眾多插件的特定 CVE 編號。ACSC指出，此類攻擊活動可能受到AI技術的輔助，加速攻擊和擴大漏洞利用的規模。為修復風險，網站管理員應立即為CMS、主題和插件應用最新的安全更新；同時建議移除不使用的元件，並盡可能啟用自動更新。此外，應實施網路層級的防禦，例如將網頁目錄設為唯讀，監控未授權檔案創建，並限制對敏感目錄的存取權。",
    tags: ["ACSC", "CMS", "WordPress", "webshells", "CVE", "漏洞利用"],
    title_en: "ACSC Warning: Global CMS Platforms Face Large-Scale Vulnerability Exploitation, Multiple Plugins and Themes Targeted",
    summary_en: "The Australian Cyber Security Centre (ACSC) has issued an alert warning of large-scale vulnerability exploitation activity globally, targeting various Content Management Systems (CMS) and their associated plugins. Attackers are exploiting multiple vulnerabilities within CMS and plugins to deploy webshells on compromised websites, maintaining persistent access. This allows them to steal credentials, implant malware, and penetrate deep into the network. Affected platforms include WordPress, Craft CMS, MaxSite CMS, MetInfo CMS, and Joomla JCE. The number of vulnerabilities exploited in this campaign is vast, covering specific CVE IDs in numerous plugins such as Simple File List, WavePlayer, Ninja Forms, and Gravity Forms. ACSC points out that such attack activities may be augmented by AI technology, accelerating attacks and expanding the scale of exploitation. To mitigate risks, website administrators must immediately apply the latest security updates to CMS, themes, and plugins; they are also advised to remove unused components and enable automatic updates where possible. Furthermore, network-level defenses should be implemented, such as setting web directories to read-only, monitoring for unauthorized file creation, and restricting access to sensitive directories.",
    tags_en: ["ACSC", "CMS", "WordPress", "webshells", "CVE", "Exploitation"],
    sources: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com/news/security/australia-warns-of-global-campaign-targeting-vulnerable-cms-platforms", lang: "EN" }
    ]
  },
  {
    id: "20260711-011",
    trackers: ["os"],
    category: "Apple",
    title: "iPadOS 27 介面更新：用戶回顧指出多工處理功能仍缺乏簡潔性",
    summary: "本文為用戶觀點分析，討論了 Apple 在 iPadOS 27 的多工處理（multitasking）體驗。自 iPadOS 26 引入窗口化（windowing）功能後，原有的 Split View 和 Slide Over 等簡潔多工模式曾一度移除，雖然後來有所恢復，但仍需透過新的窗口化系統操作。然而，文章指出，儘管期待 iPadOS 27 能改善此體驗，但實際的更新仍未能達到更簡潔、更流暢的目標，顯示用戶對於多工處理的易用性仍有更高的期待。",
    tags: ["iPadOS 27", "多工處理", "multitasking", "Split View", "Slide Over", "Apple"],
    title_en: "iPadOS 27 Interface Update: User Reviews Point Out Lack of Simplicity in Multitasking Functionality",
    summary_en: "This article provides a user perspective analysis, discussing the multitasking experience in iPadOS 27. Since the introduction of windowing functionality in iPadOS 26, simpler multitasking modes like Split View and Slide Over were temporarily removed. Although some have since been restored, they still require operation through the new windowing system. However, the article points out that despite expectations for iPadOS 27 to improve this experience, the actual update has not yet achieved the goal of being more simple or fluid, indicating that users still have higher expectations for the ease of use of multitasking.",
    tags_en: ["iPadOS 27", "Multitasking", "multitasking", "Split View", "Slide Over", "Apple"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/11/ipad-pro-needs-simpler-multitasking-with-ipados-27", lang: "EN" }
    ]
  },
  {
    id: "20260711-012",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "jscrambler npm 套件遭入侵：8.14.0 版本植入資訊竊取程式，目標鎖定開發者機密",
    summary: "資安研究指出，jscrambler 的 npm 套件在 2026 年 7 月 11 日發布的 8.14.0 版本遭到惡意植入。該版本利用 preinstall hook，在安裝過程中會下載並執行一個針對 Windows、macOS 和 Linux 的原生二進位檔。該程式是一個 Rust 撰寫的資訊竊取器（infostealer），旨在掃描開發者工作站，竊取雲端憑證（AWS、Azure、Google Cloud）、加密貨幣錢包密碼、密碼管理器（如 Bitwarden）的資料，以及 AI 程式開發工具（如 Claude Desktop）的 API 金鑰。在 Linux 系統上，該程式甚至能載入 eBPF 程式到核心層，形成更高權限的立足點。攻擊者利用了合法維護者帳號，繞過正常發布流程。修復建議是立即將 jscrambler 版本升級至 8.15.0，或回退至 8.13.0，並徹底清除所有 lockfile 和快取中的 8.14.0 版本。若已受感染，必須輪換所有雲端金鑰、npm/GitHub token、AI 工具 API 金鑰，並檢查系統的排程任務和 LaunchAgent。",
    tags: ["jscrambler", "npm", "8.14.0", "資訊竊取器", "開發環境", "供應鏈攻擊", "preinstall hook"],
    title_en: "jscrambler npm package compromised: Version 8.14.0 implanted with info-stealing code, targeting developer secrets",
    summary_en: "Security research indicates that the jscrambler npm package, specifically version 8.14.0, was maliciously implanted. This version utilizes a preinstall hook, which downloads and executes a native binary targeting Windows, macOS, and Linux during the installation process. This program is an info-stealer, written in Rust, designed to scan developer workstations to steal cloud credentials (AWS, Azure, Google Cloud), cryptocurrency wallet passwords, data from password managers (such as Bitwarden), and API keys for AI development tools (such as Claude Desktop). On Linux systems, the program can even load eBPF programs into the kernel layer, establishing a higher-privilege foothold. The attackers exploited a legitimate maintainer account, bypassing the normal release process. Remediation advice is to immediately upgrade the jscrambler version to 8.15.0, or downgrade to 8.13.0, and thoroughly clear all 8.14.0 versions from lockfiles and caches. If already compromised, all cloud keys, npm/GitHub tokens, and AI tool API keys must be rotated, and system scheduled tasks and LaunchAgents must be checked.",
    tags_en: ["jscrambler", "npm", "8.14.0", "info-stealer", "development environment", "supply chain attack", "preinstall hook"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html", lang: "EN" }
    ]
  },
  {
    id: "20260711-013",
    trackers: ["os"],
    category: "重點關注",
    title: "【App推薦】Route 25：結合社交功能的全方位寶可夢集卡收藏應用程式",
    summary: "本文介紹了一款名為 Route 25 的獨立開發應用程式，主要用於寶可夢集卡（Pokémon TCG）收藏家。與單純的卡片追蹤工具不同，Route 25 整合了社交功能，讓用戶可以在應用程式內與其他收藏家交流，討論卡片、抽到的稀有卡（pulls）等相關話題。這款應用程式旨在提供一個一站式的平台，不僅能幫助用戶管理和追蹤他們的寶可夢卡片收藏，更能建立一個社群交流的空間。本文屬於應用程式推薦類內容，不涉及任何資安漏洞或技術風險分析，僅為產品介紹。",
    tags: ["Route 25", "Pokémon TCG", "App推薦", "社交應用", "收藏管理"],
    title_en: "[App Recommendation] Route 25: A Comprehensive Pokémon Card Collection App with Social Features",
    summary_en: "This article introduces an independent application called Route 25, primarily designed for Pokémon Trading Card Game (TCG) collectors. Unlike simple card tracking tools, Route 25 integrates social features, allowing users to interact with other collectors within the app to discuss cards, rare pulls, and related topics. The application aims to provide a one-stop platform that not only helps users manage and track their Pokémon card collections but also establishes a space for community interaction. This article is categorized as an application recommendation and does not involve any cybersecurity vulnerability or technical risk analysis; it is purely a product introduction.",
    tags_en: ["Route 25", "Pokémon TCG", "App Recommendation", "Social App", "Collection Management"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/11/indie-app-spotlight-route-25-is-an-all-in-one-social-app-for-pokemon-collectors", lang: "EN" }
    ]
  },
  {
    id: "20260711-014",
    trackers: ["os"],
    category: "重點關注",
    title: "M1 MacBook Air 改變蘋果筆電生命週期觀念，延長使用壽命的蘋果設備",
    summary: "本文非資安新聞，主要討論 M1 MacBook Air 在設備生命週期管理上的優勢。作者指出，傳統上，蘋果筆電在使用四年後會被視為過時且無法使用，需要回收。然而，M1 MacBook Air 改變了這一觀念，使其具有更長的可用使用壽命。這對於在設備價格不斷上漲的市場中，特別是企業採購和設備部署的組織，具有實務意義。文章未提供任何技術細節、CVE 或修補建議，僅從產品的耐用性和經濟效益角度進行討論。",
    tags: ["M1 MacBook Air", "蘋果設備", "設備生命週期", "Apple 平台", "硬體耐用性"],
    title_en: "M1 MacBook Air Changes Apple Laptop Lifecycle Perception, Extending Device Usability",
    summary_en: "This article is not a cybersecurity news item; it primarily discusses the advantages of the M1 MacBook Air in device lifecycle management. The author points out that traditionally, Apple laptops were considered obsolete and unusable after four years, requiring disposal. However, the M1 MacBook Air has changed this perception, giving it a longer usable lifespan. This holds practical significance for organizations, especially those involved in enterprise procurement and device deployment, within a market where device prices are constantly rising. The article does not provide technical details, CVEs, or patching recommendations; it discusses the product's durability and economic efficiency from a general perspective.",
    tags_en: ["M1 MacBook Air", "Apple Devices", "Device Lifecycle", "Apple Platform", "Hardware Durability"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/11/the-m1-macbook-air-has-the-longest-usable-lifespan-of-any-apple-laptop-in-history", lang: "EN" }
    ]
  },
  {
    id: "20260711-015",
    trackers: ["os"],
    category: "重點關注",
    title: "蘋果與英特爾潛在合作：揭秘蘋果去年免除半導體關稅的關鍵交易",
    summary: "根據《華爾街日報》報導，蘋果公司（Apple）去年成功免除對半導體進口的關稅，可能與其承諾的重大投資，以及與晶片製造商英特爾（Intel）的潛在合作有關。報導指出，在與美國政府的談判中，蘋果曾面臨美國政府（特別是前川普政府）實施高額關稅的壓力。最終，蘋果在承諾大量投資美國後，獲得了關稅豁免。此外，報導還提及蘋果計劃讓英特爾為部分 Mac 筆電和 iPhone 製作晶片，這項合作關係此前並未公開。這顯示了蘋果在供應鏈和地緣政治壓力下，積極尋求本土化供應鏈，確保產品成本穩定，避免因貿易壁壘導致的價格上漲。",
    tags: ["Apple", "Intel", "半導體", "關稅", "供應鏈", "MacBook", "iPhone"],
    title_en: "Apple and Intel Potential Collaboration: Unveiling the Key Deal Behind Apple's Waived Semiconductor Tariffs Last Year",
    summary_en: "According to a report by the Wall Street Journal, Apple's successful waiver of tariffs on semiconductor imports last year may be linked to its commitment to significant investments and a potential collaboration with chip manufacturer Intel. The report indicates that during negotiations with the US government, Apple faced pressure from the US government (particularly the former Trump administration) to implement high tariffs. Ultimately, Apple secured the tariff exemption after committing to substantial investments in the United States. Furthermore, the report mentioned Apple's plan to have Intel manufacture chips for certain Mac laptops and iPhones, a collaboration that had not been publicly disclosed before. This suggests that Apple is actively seeking to localize its supply chain and ensure stable product costs under supply chain and geopolitical pressure, thereby avoiding price increases caused by trade barriers.",
    tags_en: ["Apple", "Intel", "Semiconductors", "Tariffs", "Supply Chain", "MacBook", "iPhone"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/07/10/wsj-apple-avoided-semiconductor-tariffs-last-year-thanks-to-intel-chip-deal", lang: "EN" }
    ]
  },
  {
    id: "20260711-016",
    trackers: ["os"],
    category: "重點關注",
    title: "LLVM 整合 x86 LFI 目標：提升編譯器級別的程序內沙盒安全機制",
    summary: "本篇報導介紹了 LLVM 整合「輕量級故障隔離」（Lightweight Fault Isolation, LFI）編譯器目標，旨在為 C/C++/Assembly 等語言提供高效能的程序內沙盒（in-process sandboxing）機制。LFI 是一個編譯器層級的解決方案，目標是在提供記憶體安全性的同時，盡可能保持與現有程式碼的相容性，並維持極低的效能開銷。此機制源於斯坦福大學的研究，並獲得 Google 等機構的關注。目前，除了先前已上游化的 AArch64 LFI 目標外，x86/x86_64 LFI 目標也已成功合併至 LLVM 23。LFI 的優勢在於其沙盒上下文切換僅需數個時脈週期，比基於進程的沙盒快得多，且相較於現有的 WebAssembly (Wasm) 工具鏈，其沙盒開銷更低。這項開發對於提升現有大型程式碼庫的記憶體安全性和可靠性具有重大意義，但其最終的採用程度和魯棒性仍有待觀察。",
    tags: ["LLVM", "LFI", "x86_64", "編譯器安全", "程序內沙盒", "記憶體安全"],
    title_en: "LLVM Integrates x86 LFI Target: Enhancing Compiler-Level In-Process Sandboxing Security",
    summary_en: "This report introduces the Lightweight Fault Isolation (LFI) compiler target integrated into LLVM. It aims to provide an efficient in-process sandboxing mechanism for languages such as C, C++, and Assembly. LFI is a compiler-level solution designed to maintain memory safety while preserving compatibility with existing code and keeping performance overhead extremely low. This mechanism originated from research at Stanford University and has garnered interest from organizations like Google. Currently, in addition to the previously upstreamed AArch64 LFI target, the x86/x86_64 LFI target has also been successfully merged into LLVM 23. The advantage of LFI lies in its sandbox context switching, which requires only a few clock cycles, making it much faster than process-based sandboxing. Furthermore, its sandboxing overhead is lower compared to existing WebAssembly (Wasm) toolchains. This development is highly significant for improving the memory safety and reliability of large existing codebases, though its ultimate adoption rate and robustness remain to be seen.",
    tags_en: ["LLVM", "LFI", "x86_64", "Compiler Security", "In-Process Sandboxing", "Memory Safety"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/LLVM-x86-LFI-Merged", lang: "EN" }
    ]
  },
  {
    id: "20260711-017",
    trackers: ["os"],
    category: "重點關注",
    title: "Mesa 核心更新：Panfrost 驅動程式現預設支援 Rusticl，優化 Arm Mali 繪圖硬體 OpenCL 體驗",
    summary: "Mesa 繪圖核心透過上游更新，已將 Panfrost Gallium3D 驅動程式與 Rusticl OpenCL Rust 驅動程式的支援預設化。此項改動由 Arm 工程師 Ahmed Hesham 實施，旨在為使用 Arm Mali 繪圖硬體的用戶提供更便利的開箱體驗。過去，雖然 Panfrost 驅動程式已能與 Rusticl 協作，但用戶仍需手動設定 `RUSTICL_ENABLE=panfrost` 環境變數才能啟用支援。透過 Mesa 26.2 的最新代碼，該支援現已預設開啟，無需額外覆寫。這對於希望使用現代、開源 OpenCL 於 Arm Mali 繪圖硬體的開發者和資安人員極為重要。Mesa 26.2 穩定版本預計於八月發布。",
    tags: ["Mesa", "Panfrost", "Rusticl", "OpenCL", "Arm Mali", "Linux"],
    title_en: "Mesa Core Update: Panfrost Driver Now Defaults to Support Rusticl, Optimizing Arm Mali Graphics Hardware OpenCL Experience",
    summary_en: "The Mesa graphics core, through an upstream update, has made support for the Panfrost Gallium3D driver and the Rusticl OpenCL Rust driver default. This change was implemented by Arm engineer Ahmed Hesham, aiming to provide a more convenient out-of-the-box experience for users with Arm Mali graphics hardware. Previously, although the Panfrost driver could cooperate with Rusticl, users had to manually set the `RUSTICL_ENABLE=panfrost` environment variable to enable support. With the latest code in Mesa 26.2, this support is now enabled by default, requiring no additional override. This is crucial for developers and security professionals who wish to use modern, open-source OpenCL on Arm Mali graphics hardware. The Mesa 26.2 stable version is expected to be released in August.",
    tags_en: ["Mesa", "Panfrost", "Rusticl", "OpenCL", "Arm Mali", "Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Mesa-Rusticl-Panfrost-Default", lang: "EN" }
    ]
  },
  {
    id: "20260711-018",
    trackers: ["os"],
    category: "重點關注",
    title: "Wine 11.13 新版本發布：強化輸入指標支援與 X11 鍵盤掃描碼映射",
    summary: "Wine 11.13 是這款開源軟體最新的雙週開發版本，旨在讓使用者能在 Linux 環境下運行 Windows 應用程式和遊戲。本次更新主要著重於提升使用者輸入體驗，特別是強化了輸入指標（input pointers）的支援，並改善了對 X.Org/X11 的支援，提升了鍵盤掃描碼的映射準確性。此外，對於使用 Wine 在 ARM 架構上的用戶，其多媒體程式碼已啟用 FFmpeg 優化，支援 ARM64EC。本次版本修復了 22 個已知錯誤，涵蓋範圍從遊戲如《俠盜獵車手：資深生活》到應用程式如 Adobe Acrobat Pro 7 和 Sony Acid Pro 7.0。使用者可從 WineHQ.org 下載，這是一個邁向 Wine 12.0 的重要里程碑。",
    tags: ["Wine", "Wine 11.13", "Linux", "Windows 應用程式相容性", "X11", "ARM64EC"],
    title_en: "Wine 11.13 New Version Released: Enhanced Input Pointer Support and X11 Keyboard Scancode Mapping",
    summary_en: "Wine 11.13 is the latest bi-weekly development version of the open-source software, designed to allow users to run Windows applications and games in a Linux environment. This update primarily focuses on improving the user input experience, specifically by enhancing support for input pointers and improving X.Org/X11 support to increase the accuracy of keyboard scancode mapping. Furthermore, for users running Wine on the ARM architecture, the multimedia code has been optimized with FFmpeg, supporting ARM64EC. This version fixes 22 known bugs, covering a range from games like Grand Theft Auto: San Andreas to applications like Adobe Acrobat Pro 7 and Sony Acid Pro 7.0. Users can download it from WineHQ.org, marking an important milestone toward Wine 12.0.",
    tags_en: ["Wine", "Wine 11.13", "Linux", "Windows Application Compatibility", "X11", "ARM64EC"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Wine-11.13-Released", lang: "EN" }
    ]
  },
  {
    id: "20260711-019",
    trackers: ["os"],
    category: "重點關注",
    title: "StatCounter數據修正：Windows市場佔有率未跌破60%，釐清市場數據誤傳與「未知」設備分類問題",
    summary: "本文分析了StatCounter在2026年發布的桌面作業系統市場佔有率數據，指出早期報告Windows市場佔有率從約79%驟降至56.55%的數據存在重大錯誤。StatCounter隨後已修正數據，顯示Windows市場佔有率仍維持在72%左右，預計將回升至78%附近。數據失準的主要原因，是大量原本屬於Windows的流量被誤分類為「未知」（Unknown）設備。作者提醒讀者，StatCounter作為網路分析平台，其數據是基於匿名指標和用戶代理（user agent）的估算，容易受到機器人（bots）、AI爬蟲或用戶代理修改等因素的干擾，因此不應盲目信任其數字。文章強調，Windows的實際市場地位穩固，且微軟已確認該作業系統安裝於16億台設備以上。",
    tags: ["Windows", "StatCounter", "市場佔有率", "數據分析", "作業系統", "數據誤傳"],
    title_en: "StatCounter Data Correction: Windows Market Share Has Not Dropped Below 60%, Clarifying Data Misreporting and 'Unknown' Device Classification Issues",
    summary_en: "This article analyzes StatCounter's desktop operating system market share data released in 2026, pointing out significant errors in early reports that showed Windows market share dropping sharply from approximately 79% to 56.55%. StatCounter subsequently corrected the data, showing that Windows market share remains around 72%, and is expected to recover to near 78%. The main reason for the data discrepancy is that a large volume of traffic originally belonging to Windows was misclassified as 'Unknown' devices. The author reminds readers that StatCounter, as a web analytics platform, bases its data on anonymous metrics and user agents, making it susceptible to interference from factors such as bots, AI crawlers, or user agent modification, and therefore should not be blindly trusted. The article emphasizes that Windows' actual market position is stable, and Microsoft has confirmed that the operating system is installed on over 1.6 billion devices.",
    tags_en: ["Windows", "StatCounter", "Market Share", "Data Analysis", "Operating System", "Data Misreporting"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/12/no-windows-did-not-fall-below-60-market-share-or-lose-15-points-to-linux", lang: "EN" }
    ]
  },
  {
    id: "20260711-020",
    trackers: ["os"],
    category: "重點關注",
    title: "Microsoft Edge與Chrome比較面板引發爭議：用戶質疑微軟推廣自家瀏覽器的動機",
    summary: "本文分析了微軟在Bing搜尋結果中，將Edge瀏覽器在多個功能（如獎勵、內建VPN、AI個性化等）上標記為「推薦」，而將Chrome標記為「不推薦」的現象。用戶和網路社群對此表示高度質疑，認為微軟缺乏推廣自家產品的合理理由。文章指出，Edge的「內建VPN」實際上僅為在Cloudflare基礎設施上的HTTP CONNECT代理，無法實現真正的系統級路由；此外，AI個性化和「推薦」的說服力，最終都取決於用戶對微軟的信任度。作者提醒，雖然Edge基於Chromium引擎，但微軟的行銷策略應更著重於如AI分頁整理器等實際優勢，而非單純的比較面板。",
    tags: ["Microsoft Edge", "Chrome", "Bing", "Chromium", "AI個性化", "用戶信任", "瀏覽器安全"],
    title_en: "Controversy over Microsoft Edge vs. Chrome Comparison Panel: Users Question Microsoft's Motivation for Promoting Its Own Browser",
    summary_en: "This article analyzes the phenomenon where Microsoft marks Edge as \"recommended\" across multiple features (such as rewards, built-in VPN, AI personalization, etc.) in Bing search results, while marking Chrome as \"not recommended.\" Users and online communities have expressed high skepticism, suggesting that Microsoft lacks a rational reason for promoting its own product. The article points out that Edge's \"built-in VPN\" is actually merely an HTTP CONNECT proxy running on Cloudflare infrastructure and cannot achieve true system-level routing. Furthermore, the persuasiveness of AI personalization and \"recommendations\" ultimately depends on the user's trust in Microsoft. The author reminds readers that while Edge is based on the Chromium engine, Microsoft's marketing strategy should focus more on tangible advantages, such as AI tab organizers, rather than simply comparison panels.",
    tags_en: ["Microsoft Edge", "Chrome", "Bing", "Chromium", "AI Personalization", "User Trust", "Browser Security"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/07/11/microsoft-has-run-out-of-reasons-to-push-edge-over-chrome-so-one-of-the-four-is-just-microsoft-recommended", lang: "EN" }
    ]
  }
];
