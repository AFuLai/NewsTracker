// data-20260829.js — 2026-08-29
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-08-29"] = [
  {
    id: "20260829-10151",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Debian 發布安全公告：修補 OpenSSH 潛在的認證繞過漏洞",
    summary: "Debian 發布安全公告 DSA-6477-1，修補了 OpenSSH 核心元件中的一個潛在漏洞。此漏洞可能允許攻擊者在特定配置下進行認證繞過攻擊。雖然原文未提供具體的 CVSS 分數或受影響版本範圍，但修補建議指出，使用者應立即升級至包含修補程式的 Debian 安全更新版本。此漏洞的修補屬於核心元件層面，建議所有使用 Debian 系統並依賴 OpenSSH 進行遠端連線的用戶，應儘快執行系統更新，以確保連線的安全性。本修補旨在強化 OpenSSH 的認證機制，防止未經授權的存取。",
    tags: ["Debian", "OpenSSH", "DSA-6477-1", "認證繞過", "Linux 核心元件"],
    title_en: "Debian Issues Security Advisory: Patching Potential OpenSSH Authentication Bypass Vulnerability",
    summary_en: "Debian has released security advisory DSA-6477-1, patching a potential vulnerability in the OpenSSH core component. This vulnerability could potentially allow an attacker to perform an authentication bypass attack under specific configurations. Although the original advisory did not provide specific CVSS scores or affected version ranges, the patch recommendation advises users to immediately upgrade to the Debian security update version containing the fix. Since this vulnerability patch affects a core component, all users running Debian systems and relying on OpenSSH for remote connections are advised to perform a system update promptly to ensure connection security. This patch aims to strengthen OpenSSH's authentication mechanisms, preventing unauthorized access.",
    tags_en: ["Debian", "OpenSSH", "DSA-6477-1", "Authentication Bypass", "Linux Core Component"],
    sources: [
      { name: "Debian Security", url: "https://lists.debian.org/debian-security-announce/2026/msg00388.html", lang: "EN" }
    ]
  },
  {
    id: "20260829-10158",
    trackers: ["os"],
    category: "Linux",
    title: "AI爬蟲對Linux核心儲存庫造成巨大負擔：開發者呼籲關注網路爬取行為",
    summary: "Linux核心開發者指出，git.kernel.org 每天接收約 600 萬次請求，其中絕大部分（估計高達 98%）並非來自真實開發者，而是來自自動化爬蟲（scrapers）的流量。這些爬蟲大量要求檢視隨機的舊提交紀錄（random old fork commits），造成極大的伺服器負擔。雖然系統已部署 Anubis 挑戰機制來過濾流量，但仍有大量流量成功通過驗證。開發者認為，這類非必要的爬取行為嚴重影響了核心儲存庫的運作效率，並呼籲相關機構關注並限制惡意的網路爬取行為，以保護核心開發資源的穩定性。",
    tags: ["Linux 核心", "git.kernel.org", "AI 爬蟲", "網路爬取", "開發者資源"],
    title_en: "AI Crawlers Place Significant Burden on Linux Kernel Repository: Developers Urge Attention to Web Scraping Behavior",
    summary_en: "Linux kernel developers point out that git.kernel.org receives approximately 6 million requests daily, the vast majority (estimated at up to 98%) of which do not originate from genuine developers but from automated scrapers. These scrapers repeatedly request random old fork commits, causing an immense server load. Although the system has deployed an Anubis challenge mechanism to filter traffic, a large volume of traffic still successfully bypasses the validation. Developers argue that this unnecessary scraping activity severely impacts the operational efficiency of the kernel repository and call on relevant organizations to monitor and restrict malicious web scraping behavior to protect the stability of core development resources.",
    tags_en: ["Linux Kernel", "git.kernel.org", "AI Crawlers", "Web Scraping", "Developer Resources"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1091203", lang: "EN" }
    ]
  },
  {
    id: "20260829-10186",
    trackers: ["os", "security"],
    category: "Linux",
    title: "FreeBSD 14.5-RC1 發布，修補多項核心漏洞，包含 POSIX 共享記憶體競態條件與 TTY ioctl 用後期間使用問題",
    summary: "FreeBSD 宣布發布 14.5-RC1 版本，作為穩定版 14.5-RELEASE 上線前的最終開發版本。本次更新主要集中在多項安全修補，旨在加強作業系統的安全性。修補內容包括：針對 POSIX 共享記憶體大頁面配置中的競態條件（race condition），此漏洞可能允許本機使用者提升權限；修復了透過 TTY ioctls 的核心用後期間使用（use-after-free）漏洞，同樣可能導致本機使用者提升權限；此外，還修補了與聲音 SNDCTL_DSP_SYNCSTART ioctl 相關的核心用後期間使用漏洞，以及 HWPMC 驅動程式在執行憑證轉換期間無法正確分離的問題。此外，FreeBSD 亦整合了最新的 OpenSSL 上游代碼，修補了該關鍵專案的多個安全漏洞。這些修補旨在防止未授權的本機使用者利用這些核心層面的缺陷來提升系統權限。建議使用者在 14.5-RELEASE 正式發布前，盡早升級至 14.5-RC1 版本進行測試與部署。",
    tags: ["FreeBSD", "FreeBSD 14.5", "POSIX", "TTY ioctl", "OpenSSL", "核心漏洞"],
    title_en: "FreeBSD 14.5-RC1 Released, Patching Multiple Kernel Vulnerabilities Including POSIX Shared Memory Race Condition and TTY ioctl Use-After-Free",
    summary_en: "FreeBSD announced the release of version 14.5-RC1, serving as the final development version before the stable 14.5-RELEASE. This update focuses primarily on multiple security patches aimed at strengthening the operating system's security. The patches include: addressing a race condition in POSIX shared memory large page allocation, which could potentially allow a local user to escalate privileges; fixing a kernel use-after-free vulnerability via TTY ioctls, which could also lead to local privilege escalation; additionally, a use-after-free vulnerability related to the SNDCTL_DSP_SYNCSTART ioctl was patched, along with an issue where the HWPMC driver failed to correctly separate during credential conversion. Furthermore, FreeBSD integrated the latest OpenSSL upstream code, patching multiple security vulnerabilities within this critical project. These patches are designed to prevent unauthorized local users from exploiting these kernel-level flaws to elevate system privileges. Users are advised to upgrade to 14.5-RC1 as soon as possible for testing and deployment before the official 14.5-RELEASE is published.",
    tags_en: ["FreeBSD", "FreeBSD 14.5", "POSIX", "TTY ioctl", "OpenSSL", "Kernel Vulnerability"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/FreeBSD-14.5-RC1", lang: "EN" }
    ]
  },
  {
    id: "20260829-10187",
    trackers: ["os"],
    category: "Linux",
    title: "非 Intel/AMD 企業實體在 Linux 核心中引入 WBINVD 指令新跳過提示",
    summary: "資安專家 Christian Ludloff 在 Linux 核心郵件清單上揭露，有一家非 Intel 或 AMD 的企業實體正在使用新的 x86 前綴和 WBINVD (Write Back and Invalidate Cache) 指令。這些新提示允許對 L0i/L1i、L0d/L1d 快取、無效化操作（invalidations）以及 LLC 快取進行跳過（skip）控制。具體而言，新的前綴包括 0x67 (跳過 L0i/L1i)、0x66 (跳過 L0d/L1d)、0xF3 (跳過無效化) 和 0xF2 (跳過 LLC 快取)。這些新功能讓操作可以針對程式碼、資料或串流儲存進行更精細的快取控制，甚至可結合六個實作特定的提示（如 0x26, 0x2E 等），使單一指令長度可達 12 位元組。雖然這些變化極具技術深度，但發布此類 x86 擴展的企業實體仍不明確。目前有消息指出初創公司 RosaicLabs 可能獲得了 Intel Atom 處理器設計的存取權，時間點讓外界推測其可能與此相關，但尚未得到證實。",
    tags: ["x86", "WBINVD", "Linux 核心", "Christian Ludloff", "快取控制", "RosaicLabs"],
    title_en: "Non-Intel/AMD Entity Introduces New Skip Hints for WBINVD Instruction in Linux Kernel",
    summary_en: "Security expert Christian Ludloff revealed on the Linux kernel mailing list that a non-Intel or non-AMD corporate entity is utilizing a new x86 prefix and the WBINVD (Write Back and Invalidate Cache) instruction. These new hints allow for skip control over L0i/L1i, L0d/L1d cache, invalidation operations, and LLC cache. Specifically, the new prefixes include 0x67 (skip L0i/L1i), 0x66 (skip L0d/L1d), 0xF3 (skip invalidation), and 0xF2 (skip LLC cache). These new capabilities allow for more granular cache control for code, data, or stream storage, and can even be combined with six implementation-specific hints (such as 0x26, 0x2E), allowing a single instruction length of up to 12 bytes. Although these changes are highly technical, the corporate entity releasing these x86 extensions remains unclear. Currently, there are reports suggesting that the startup RosaicLabs may have gained access to Intel Atom processor designs, a timing that leads some to speculate about a possible connection, though this has not been confirmed.",
    tags_en: ["x86", "WBINVD", "Linux Kernel", "Christian Ludloff", "Cache Control", "RosaicLabs"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/x86-WBINVD-Advisory", lang: "EN" }
    ]
  },
  {
    id: "20260829-10188",
    trackers: ["os"],
    category: "Linux",
    title: "KDE Plasma 6.8 更新：提升全螢幕內容效能、優化色彩處理與修復登出時崩潰問題",
    summary: "KDE Plasma 6.8 版本帶來多項效能與穩定性提升。在顯示效能方面，針對使用 Intel 或 NVIDIA GPU 搭配 HDR、ICC profile 或夜間模式的全螢幕內容，KWin 進行了改動，將單平面 OETF 卸載至 CRTC post-blend gamma LUT。此舉能讓更多場景實現直接掃描輸出（direct scan-out），而非依賴著色器合成（shader composition），從而減少色彩帶狀（color banding）並提升 DRM/KMS 硬體色彩管線的利用率。此外，KPipeWire 也優化了螢幕串流延遲，減少了一個畫面（frame）。在穩定性方面，Plasma 6.8 修復了登出時發生的第二常見崩潰問題，該問題源於 QConcatenateTablesProxyModel 的銷毀過程。其他優化包括讓垃圾桶小工具（Trash widget）資源消耗更低，並新增了內建 RDP 伺服器，可根據網路頻寬自動調整畫質。同時，Plasma 6.7.5 也針對使用 ICC 顯示設定檔的 HDR 內容進行了改善。",
    tags: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "HDR", "KPipeWire"],
    title_en: "KDE Plasma 6.8 Update: Enhanced Full-Screen Performance, Optimized Color Handling, and Fixed Logout Crash",
    summary_en: "The KDE Plasma 6.8 release introduces multiple performance and stability improvements. Regarding display performance, KWin has been modified to offload single-plane OETF to the CRTC post-blend gamma LUT when using Intel or NVIDIA GPUs with HDR, ICC profiles, or night mode full-screen content. This change enables more scenarios to achieve direct scan-out, rather than relying on shader composition, thereby reducing color banding and improving the utilization of the DRM/KMS hardware color pipeline. Additionally, KPipeWire has optimized screen streaming latency, reducing one frame. In terms of stability, Plasma 6.8 fixes the second most common crash that occurs during logout, which originated from the destruction process of QConcatenateTablesProxyModel. Other optimizations include lower resource consumption for the Trash widget and the addition of a built-in RDP server that automatically adjusts image quality based on network bandwidth. Furthermore, Plasma 6.7.5 also improves HDR content utilizing ICC display profiles.",
    tags_en: ["KDE Plasma", "Plasma 6.8", "KWin", "Linux", "HDR", "KPipeWire"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Plasma-6.8-Full-Screen-Perf", lang: "EN" }
    ]
  },
  {
    id: "20260829-10190",
    trackers: ["os"],
    category: "Linux",
    title: "F2FS 檔案系統在 Linux 7.3 中升級：實現多設備並行快閃與效能提升",
    summary: "本文介紹 Flash Friendly File-System (F2FS) 在 Linux 7.3 版本中的重大更新。主要改進包括實現多設備並行快閃（multi-device flushes）。過去，多設備的快閃操作是依序進行，現在 F2FS 驅動程式能讓所有設備的快閃操作並行執行，大幅縮短了等待時間，使快閃窗口的時間限制由系統中最慢的設備決定，而非所有設備快閃時間的總和。此外，Linux 7.3 的 F2FS 還優化了 inode 管理的記憶體開銷，新增了設備別名（device aliasing）的動態預留/釋放支援，並支援異步執行 f2fs_write_end_io()，顯著提升了 I/O 吞吐量。例如，在 Arm Cortex-A520 設備上，異步執行 f2fs_write_end_io() 將耗時從 10 毫秒降低到 150 微秒。這些改進旨在提升 F2FS 在多設備環境下的穩定性和效能。",
    tags: ["F2FS", "Linux 7.3", "檔案系統", "多設備快閃", "I/O 吞吐量", "Linux 核心"],
    title_en: "F2FS File System Upgrade in Linux 7.3: Implementing Multi-Device Parallel Flashing and Performance Enhancements",
    summary_en: "This article introduces major updates to the Flash Friendly File-System (F2FS) in Linux 7.3. Key improvements include the implementation of multi-device parallel flushes. Previously, flushing operations across multiple devices were performed sequentially; now, the F2FS driver can execute flushing operations on all devices in parallel, significantly reducing waiting time. The flush window is now determined by the slowest device, rather than the cumulative time of flushing all devices. Furthermore, F2FS in Linux 7.3 optimizes the memory overhead of inode management, adds support for dynamic reservation/release of device aliases, and supports asynchronous execution of f2fs_write_end_io(), significantly boosting I/O throughput. For example, on an Arm Cortex-A520 device, asynchronous execution of f2fs_write_end_io() reduced the time from 10 milliseconds to 150 microseconds. These enhancements aim to improve the stability and performance of F2FS in multi-device environments.",
    tags_en: ["F2FS", "Linux 7.3", "File System", "Multi-device Flashing", "I/O Throughput", "Linux Kernel"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/Linux-7.3-F2FS", lang: "EN" }
    ]
  },
  {
    id: "20260829-10192",
    trackers: ["os"],
    category: "Linux",
    title: "加州通過 AB-1856 法案，為開源平台提供豁免，減輕對 Linux 發行版等的要求",
    summary: "加州通過 AB-1856 法案，旨在修訂其《數位年齡保證法案》（Digital Age Assurance Act）的規定，為開源平台提供更明確的豁免權。該法案的關鍵修正點包括將「作業系統提供者」的定義擴大，明確排除那些根據允許接收者複製、再發行和修改軟體的開源授權條款發布作業系統或應用程式的實體。因此，Linux 發行版、BSD 等開源授權的系統將獲得豁免。此外，法案也豁免了應用層面關於套件管理器的要求。對於未受豁免的軟體，加州《數位年齡保證法案》仍將於 2027 年 1 月 1 日生效，要求在設備設定時收集年齡資訊，並要求應用程式提供年齡區間訊號。此法案的通過被視為對 Linux 和開源社群的重大利好。",
    tags: ["California", "AB-1856", "Linux", "開源軟體", "Digital Age Assurance Act"],
    title_en: "California passes AB-1856, providing exemptions for open-source platforms and easing requirements for Linux distributions",
    summary_en: "California passed AB-1856, which aims to amend its Digital Age Assurance Act to provide clearer exemptions for open-source platforms. Key amendments to the bill include expanding the definition of 'operating system provider' to explicitly exclude entities that distribute operating systems or applications under open-source licenses that allow recipients to copy, redistribute, and modify the software. Consequently, systems using open-source licenses like Linux and BSD will receive exemptions. Furthermore, the bill also exempts application-level requirements regarding package managers. For software that is not exempt, the California Digital Age Assurance Act will still take effect on January 1, 2027, requiring the collection of age information during device setup and mandating that applications provide age-gating signals. The passage of this bill is viewed as a major positive development for the Linux and open-source communities.",
    tags_en: ["California", "AB-1856", "Linux", "Open-Source Software", "Digital Age Assurance Act"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/California-AB-1856-Passes", lang: "EN" }
    ]
  },
  {
    id: "20260829-10193",
    trackers: ["os"],
    category: "Linux",
    title: "SteamOS 3.9 Preview 重大更新：升級至 Linux 7.2 核心與 KDE Plasma 6.7.3 桌面環境",
    summary: "Valve 為 Steam Deck、Steam Machine 等設備發布了 SteamOS 3.9 的預覽版。本次更新主要針對 Linux 核心和桌面環境進行了重大升級。首先，SteamOS Desktop Mode 的桌面環境已從舊版的 Plasma 6.4.3 升級至 KDE Plasma 6.7.3，這能修復多個錯誤並提升桌面使用體驗。其次，系統核心已升級至 Linux 7.2 穩定核心，相較於原有的 Linux 6.16 LTS，這能提供對新硬體的支援、提升效能，並帶來其他改善。此外，SteamOS 3.9 預覽版還改用 WPA_Supplicant 以改善 Wi-Fi 處理能力，並初步支援系統休眠功能（目前尚未在 Game Mode UI 介面顯示）。同時，它也提升了作為虛擬機（VM）運行 SteamOS 時，使用 VirtIO 顯示加速的支援度。開發者可透過 SteamPowered.com 獲取更多詳細資訊。",
    tags: ["SteamOS", "Valve", "Linux 7.2", "KDE Plasma 6.7.3", "Steam Deck", "Arch Linux"],
    title_en: "SteamOS 3.9 Preview Major Update: Upgrading to Linux 7.2 Kernel and KDE Plasma 6.7.3 Desktop Environment",
    summary_en: "Valve has released a preview version of SteamOS 3.9 for devices such as the Steam Deck and Steam Machine. This update focuses on major upgrades to the Linux kernel and the desktop environment. First, the desktop environment for SteamOS Desktop Mode has been upgraded from the older Plasma 6.4.3 to KDE Plasma 6.7.3, which fixes multiple bugs and enhances the overall desktop experience. Second, the system kernel has been upgraded to the stable Linux 7.2 kernel, replacing the previous Linux 6.16 LTS. This provides support for new hardware, improves performance, and brings other improvements. Additionally, the SteamOS 3.9 preview uses WPA_Supplicant to improve Wi-Fi handling and provides preliminary support for system suspend functionality (which is not yet displayed in the Game Mode UI). It also enhances support for VirtIO display acceleration when running SteamOS as a virtual machine (VM). Developers can obtain more detailed information via SteamPowered.com.",
    tags_en: ["SteamOS", "Valve", "Linux 7.2", "KDE Plasma 6.7.3", "Steam Deck", "Arch Linux"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/SteamOS-3.9-Preview", lang: "EN" }
    ]
  },
  {
    id: "20260829-10775",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：GRO 聚合機制允許非 IP 流量及越界寫入，影響舊版核心穩定性",
    summary: "本漏洞存在於 Linux 核心的網路聚合（GRO）機制中，特別是在處理 BIG TCP 聚合時。當 GRO 嘗試聚合超過 GRO_LEGACY_MAX_SIZE (64KB) 的封包時，原本應嚴格限制為純 IPv4 或純 IPv6 TCP 流量。然而，由於 commit b1a78b9b9886 的修改，導致 skb_gro_receive() 的檢查過於寬鬆，造成三個主要問題：首先，檢查空間時使用 skb_headroom(p) 而非實際 MAC header 空間，使得透過 AF_PACKET 等方式注入的惡意封包可以通過檢查，進而導致 ipv6_gro_complete() 執行時發生記憶體越界寫入（out-of-bounds write），並覆寫 skb->mac_header。其次，它允許非 IP 協定（如軟體 VLAN）超過 64KB 進行聚合。最後，它允許了複雜的封裝流量（如 SIT / IPv6-in-IPv4）超過 64KB 聚合。修復建議是嚴格限制聚合條件，確保流量為 IPPROTO_TCP，且非封裝，並在 IPv6 的情況下檢查 MAC header 空間是否足夠。此問題主要影響舊版穩定分支（如 6.18.y），而 mainline 核心（7.0+）已透過重寫子系統進行修復，因此風險較低。",
    tags: ["Linux 核心", "GRO", "BIG TCP", "skb_gro_receive", "CVE-2026-80725", "網路堆疊"],
    title_en: "Linux Kernel Vulnerability: GRO Aggregation Mechanism Allows Non-IP Traffic and Out-of-Bounds Write, Affecting Older Kernel Stability",
    summary_en: "This vulnerability resides in the Linux kernel's network aggregation (GRO) mechanism, specifically when handling BIG TCP aggregation. When GRO attempts to aggregate packets exceeding GRO_LEGACY_MAX_SIZE (64KB), the traffic should be strictly limited to pure IPv4 or pure IPv6 TCP traffic. However, due to modifications in commit b1a78b9b9886, the checks within skb_gro_receive() are overly permissive, leading to three main issues: First, the check uses skb_headroom(p) instead of the actual MAC header space, allowing malicious packets injected via methods like AF_PACKET to pass the check. This subsequently causes an out-of-bounds write during ipv6_gro_complete(), overwriting skb->mac_header. Second, it allows non-IP protocols (such as software VLANs) to aggregate beyond 64KB. Finally, it permits complex encapsulated traffic (such as SIT / IPv6-in-IPv4) to aggregate beyond 64KB. The suggested fix is to strictly limit aggregation conditions, ensuring the traffic is IPPROTO_TCP and non-encapsulated, and to check if sufficient MAC header space is available in the IPv6 case. This issue primarily affects older stable branches (such as 6.18.y), while the mainline kernel (7.0+) has addressed it by rewriting the subsystem, making the risk lower.",
    tags_en: ["Linux Kernel", "GRO", "BIG TCP", "skb_gro_receive", "CVE-2026-80725", "Network Stack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-80725", lang: "EN" }
    ]
  },
  {
    id: "20260829-9999",
    trackers: ["security"],
    category: "法規與標準",
    title: "graphql-go/graphql 存在二次方複雜度 DoS 漏洞，單一語法錯誤即可耗盡 CPU",
    summary: "安全研究員 William Carrier 報告了 `github.com/graphql-go/graphql` 函式庫存在一個演算法複雜度 Denial-of-Service (DoS) 漏洞。該漏洞影響所有版本，直到 v0.8.1 為止，目前尚無修復版本。攻擊無需身份驗證，僅需發送包含單一語法錯誤的查詢字串即可觸發。漏洞點位於 `gqlerrors.highlightSourceAtLocation` 函式中，當解析器報告語法錯誤時，程式碼透過迴圈附加空格來繪製 Caret 指標。由於 Go 語言字串拼接（`highlight +=",
    tags: ["graphql-go/graphql", "DoS", "CWE-407", "GraphQL"],
    title_en: "graphql-go/graphql has quadratic complexity DoS vulnerability, single syntax error can exhaust CPU",
    summary_en: "Security researcher William Carrier reported an algorithmic complexity Denial-of-Service (DoS) vulnerability in the `github.com/graphql-go/graphql` library. The vulnerability affects all versions up to v0.8.1, and no patch version is currently available. The attack is unauthenticated, requiring only the submission of a query string containing a single syntax error to trigger it. The vulnerability lies in the `gqlerrors.highlightSourceAtLocation` function, where the code draws a Caret indicator by appending spaces in a loop when the parser reports a syntax error. Due to Go language string concatenation (`highlight += ...`)",
    tags_en: ["graphql-go/graphql", "DoS", "CWE-407", "GraphQL"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/29/3", lang: "EN" }
    ]
  },
  {
    id: "20260829-10241",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 26H2 釋出預覽：僅為啟用包，功能上與 25H2 差異極小",
    summary: "本文深入檢視了 Windows 11 26H2 版本，該版本已進入 Release Preview Channel，預計將於 9 月底或 10 月初推出。26H2 本質上是一個「啟用包」（enablement package），這意味著它並未引入任何全新的核心功能，而是透過一個輕量級機制（eKB）來開啟用戶電腦上已存在但處於休眠狀態的功能。26H2、25H2 和 24H2 均共享同一服務分支，功能上高度一致。主要變動包括：系統建置號從 26200 變動至 26300；為延長作業系統生命週期，重設了支援週期；以及為商業和管理設備啟用了一些原本關閉的設定，例如 Windows 設定備份和檔案總管增強。對於一般消費者而言，26H2 缺乏顯著的新功能。建議使用者了解其本質為版本標籤和支援週期重設，若無特定需求，可考慮維持在 25H2 版本，因為兩者功能上幾乎相同。",
    tags: ["Windows 11", "26H2", "enablement package", "Windows Update", "25H2", "Microsoft"],
    title_en: "Windows 11 26H2 Release Preview: Minimal Functional Differences from 25H2, Primarily an Enablement Package",
    summary_en: "This article takes an in-depth look at Windows 11 26H2, which has entered the Release Preview Channel and is expected to launch in late September or early October. 26H2 is essentially an 'enablement package,' meaning it does not introduce any brand-new core features. Instead, it uses a lightweight mechanism (eKB) to activate features that already exist but are dormant on user computers. 26H2, 25H2, and 24H2 all share the same service branch and are highly functionally consistent. Key changes include: a system build number change from 26200 to 26300; a reset of the support lifecycle to extend the operating system's lifespan; and the activation of certain previously disabled settings for commercial and enterprise devices, such as Windows Settings Backup and File Explorer enhancements. For the average consumer, 26H2 lacks significant new features. Users are advised to understand that its nature is primarily a version label and support lifecycle reset. If there are no specific requirements, maintaining the 25H2 version is recommended, as the two are nearly identical in function.",
    tags_en: ["Windows 11", "26H2", "enablement package", "Windows Update", "25H2", "Microsoft"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/30/i-tested-windows-11-26h2-so-you-dont-have-to-heres-everything-i-found", lang: "EN" }
    ]
  },
  {
    id: "20260829-10242",
    trackers: ["os"],
    category: "Windows",
    title: "Windows 11 KB5120998 更新引發多項顯示異常：滑鼠游標、桌布與字體問題",
    summary: "Microsoft 發布了 Windows 11 的大型可選更新 KB5120998（將系統提升至 Build 26200.9278 或 Build 26100.9278），該更新帶來了可調整大小的開始選單、可移動的任務列和移除 Bing 的 Windows 搜尋等新功能。然而，用戶回報此更新導致了多項顯示異常，包括滑鼠游標設定被重置或變形（如尺寸、顏色），桌布設定無法保存並在每次重啟後變為黑色，以及部分系統出現字體模糊問題。Microsoft 已在更新的發布說明中確認了滑鼠游標個人化設定的變動或回歸標準設定，並表示正在調查。由於問題在安裝更新後立即出現，且移除 KB5120998 後問題自行解決，強烈懷疑此可選更新是主要原因。目前修復建議是手動解除安裝 Windows 11 KB5120998，因為原文未提供其他替代方案。用戶應注意，此可選更新不會影響本月 Patch Tuesday 的安全修補。",
    tags: ["Windows 11", "KB5120998", "Windows Update", "滑鼠游標", "桌布", "Windows 11"],
    title_en: "Windows 11 KB5120998 Update Causes Multiple Display Anomalies: Mouse Cursor, Wallpaper, and Font Issues",
    summary_en: "Microsoft released a major optional update for Windows 11, KB5120998 (upgrading the system to Build 26200.9278 or Build 26100.9278). This update introduces new features such as an adjustable Start menu, a movable taskbar, and the removal of Bing from Windows Search. However, users have reported that this update has caused multiple display anomalies, including the resetting or distortion of mouse cursor settings (such as size or color), the inability to save wallpaper settings resulting in a black screen after every reboot, and font blurring issues on some systems. Microsoft confirmed in the update release notes that changes or a reversion to standard settings for mouse cursor personalization are occurring, stating that they are investigating the issue. Since the problems appeared immediately after installing the update, and the issues resolved themselves upon removing KB5120998, it is strongly suspected that this optional update is the primary cause. The current recommended fix is to manually uninstall Windows 11 KB5120998, as the original source did not provide any alternatives. Users should note that this optional update does not affect the security patches released during this month's Patch Tuesday.",
    tags_en: ["Windows 11", "KB5120998", "Windows Update", "Mouse Cursor", "Wallpaper", "Windows 11"],
    sources: [
      { name: "Windows Latest", url: "https://windowslatest.com/2026/08/29/were-aware-microsoft-on-windows-11-kb5120998-breaking-the-mouse-cursor", lang: "EN" }
    ]
  },
  {
    id: "20260829-9930",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "TerminalFix 攻擊鏈詳解：利用偽 CAPTCHA 誘騙執行 PowerShell，建立反向隧道竊取內部網路資源",
    summary: "Microsoft 威脅情報觀察到一種名為 TerminalFix 的攻擊活動，它是 ClickFix 的變種，主要目標是多個產業的組織。攻擊鏈利用受感染網站顯示的偽 Cloudflare CAPTCHA 驗證介面，誘騙使用者將惡意 PowerShell 指令複製並執行。與傳統 ClickFix 傾向導向 Windows Run 對話框不同，TerminalFix 將使用者引導至 Windows Terminal 或 PowerShell，提高了複雜多行腳本成功執行的機率。\n\n該攻擊鏈為複雜的多階段攻擊，結合了 DLL sideloading、利用 PNG 圖像中的隱寫術（steganography）提取負載、深入的 Active Directory 偵察，最終部署一個自定義的 Python 反向隧道植入物。攻擊者透過此隧道，從受感染主機獲得持久的、網路層級的代理存取權。攻擊流程包括：使用者在偽 CAPTCHA 介面下複製指令 -> 執行 PowerShell 下載 ZIP 壓縮檔 -> 透過簽署的合法二進位檔 (LockScreenContentServer.exe) 載入惡意 DLL (dui70.dll) -> 提取隱寫術負載 -> 建立登錄檔 Run Key 和排程任務的持久性 -> 進行廣泛的網域偵察 -> 最終透過 Python 建立反向 WebSocket 隧道至攻擊者基礎設施。\n\n此類入侵極為危險，可讓攻擊者直接存取組織內部網路。組織應將受影響設備視為潛在的網路跳板點，並調查橫向移動和憑證洩露。建議修補和監控所有 PowerShell 執行行為，特別是涉及外部下載和執行多階段腳本的行為。",
    tags: ["TerminalFix", "ClickFix", "PowerShell", "DLL sideloading", "反向隧道", "Active Directory", "Cloudflare"],
    title_en: "TerminalFix Attack Chain Detailed Analysis: Using Fake CAPTCHA to Trick Execution of PowerShell and Establish Reverse Tunnel to Steal Internal Network Resources",
    summary_en: "Microsoft Threat Intelligence has observed an attack campaign named TerminalFix, which is a variant of ClickFix, primarily targeting organizations across multiple industries. The attack chain exploits a fake Cloudflare CAPTCHA verification interface displayed on compromised websites, tricking users into copying and executing malicious PowerShell commands. Unlike traditional ClickFix, which tends to guide users toward the Windows Run dialog box, TerminalFix directs users to Windows Terminal or PowerShell, increasing the likelihood of successful execution of complex multi-line scripts.\n\nThis attack chain is a complex, multi-stage attack, combining DLL sideloading, utilizing steganography extracted from PNG images to retrieve payloads, deep Active Directory reconnaissance, and ultimately deploying a custom Python reverse tunnel implant. Through this tunnel, attackers gain persistent, network-level proxy access from the compromised host. The attack process includes: user copying commands within the fake CAPTCHA interface -> executing PowerShell to download a ZIP archive -> loading a malicious DLL (dui70.dll) via a signed legitimate binary (LockScreenContentServer.exe) -> extracting the steganographic payload -> establishing persistence via a Registry Run Key and scheduled task -> conducting extensive domain reconnaissance -> and finally establishing a reverse WebSocket tunnel to the attacker's infrastructure using Python.\n\nSuch intrusions are extremely dangerous, allowing attackers direct access to an organization's internal network. Organizations should treat affected devices as potential network jump points and investigate lateral movement and credential leakage. It is recommended to patch and monitor all PowerShell execution behaviors, especially those involving external downloads and the execution of multi-stage scripts.",
    tags_en: ["TerminalFix", "ClickFix", "PowerShell", "DLL sideloading", "Reverse Tunnel", "Active Directory", "Cloudflare"],
    sources: [
      { name: "Microsoft Security Blog", url: "https://microsoft.com/en-us/security/blog/2026/08/28/terminalfix-campaign-deploys-reverse-tunnel-through-multistage-intrusion", lang: "EN" }
    ]
  },
  {
    id: "20260829-9951",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "五個關鍵 WordPress 外掛及主題曝出高危漏洞：從帳號接管到遠端代碼執行",
    summary: "多個關鍵的 WordPress 外掛和主題，包括 WPMU DEV Dashboard、Avada、TranslatePress、Pods 和 GiveWP，曝出多個嚴重安全漏洞。這些漏洞可能導致未經身份驗證的攻擊者執行任意代碼、接管網站或竊取敏感資訊。其中，CVE-2026-82222（CVSS 10.0）是 GiveWP 外掛的漏洞，允許攻擊者在特定配置的網站上執行任意伺服器指令。CVE-2026-76581 涉及 WPMU DEV Dashboard 的身份驗證繞過，若啟用 Hub SSO 且映射至管理員，可讓未驗證攻擊者取得管理員權限。CVE-2026-18431 則為 Avada 主題的任意檔案寫入漏洞，可導致遠端代碼執行。此外，TranslatePress 的漏洞（CVE-2026-19632）允許攻擊者提取原始管理員重設密碼 URL，而 Pods 的漏洞（CVE-2026-19598）可讓未經身份驗證的攻擊者提升權限或覆寫任何用戶密碼。開發者指出，這些漏洞的根本原因包括信任不完善的序列化消毒器、將開發專用函式庫部署到生產環境，以及在資料庫中未經充分驗證地反序列化資料。",
    tags: ["WordPress", "CVE-2026-76581", "CVE-2026-18431", "CVE-2026-19632", "CVE-2026-19598", "CVE-2026-82222", "外掛漏洞"],
    title_en: "Five Critical WordPress Plugins and Themes Exposed with High-Risk Vulnerabilities: From Account Takeover to Remote Code Execution",
    summary_en: "Multiple critical WordPress plugins and themes, including WPMU DEV Dashboard, Avada, TranslatePress, Pods, and GiveWP, have been exposed with several severe security vulnerabilities. These flaws could allow unauthenticated attackers to execute arbitrary code, take over websites, or steal sensitive information. Notably, CVE-2026-82222, a vulnerability in the GiveWP plugin (CVSS 10.0), allows attackers to execute arbitrary server commands on certain configurations of a site. CVE-2026-76581 involves an authentication bypass in the WPMU DEV Dashboard; if Hub SSO is enabled and mapped to administrators, it could allow unauthenticated attackers to gain administrative privileges. Furthermore, CVE-2026-18431 is an arbitrary file write vulnerability in the Avada theme, which could lead to remote code execution. Additionally, a vulnerability in TranslatePress (CVE-2026-19632) allows attackers to extract the original administrator password reset URL, while the Pods vulnerability (CVE-2026-19598) could allow unauthenticated attackers to escalate privileges or overwrite any user's password. Developers point out that the root causes of these vulnerabilities include insufficiently sanitized serialization, deploying development-only libraries to production environments, and deserializing data in the database without sufficient validation.",
    tags_en: ["WordPress", "CVE-2026-76581", "CVE-2026-18431", "CVE-2026-19632", "CVE-2026-19598", "CVE-2026-82222", "Plugin Vulnerability"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/08/five-critical-wordpress-plugin-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260829-9998",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "graphql-go/graphql 函式庫曝出二次方複雜度 DoS 漏洞，可透過查詢變數觸發資源耗盡",
    summary: "資安研究員 William Carrier 報告了 `github.com/graphql-go/graphql` 函式庫的一個演算法複雜度拒絕服務（DoS）缺陷，影響所有版本直到 v0.8.1。此漏洞為未經身份驗證、可透過網路觸發，僅需攻擊者控制的查詢文字即可發動。當查詢驗證遇到未知類型名稱時，系統會掃描整個 Schema 來生成「Did you mean」的建議列表。此過程呼叫 `lexicalDistance` 函數，該函數的計算複雜度為 $O(|a| \times |b|)$。當查詢包含大量未知類型名稱時，總體複雜度會達到 $O(\text{unknowns} \times \text{schema_types} \times \text{name_length})$，導致 CPU 資源消耗呈二次方增長。攻擊者只需發送一個包含大量未知類型名稱的查詢，即可耗盡伺服器 CPU，達到拒絕服務的目的。修復建議包括在輸入過長時跳過建議生成、限制候選數量，並在計算距離時加入短路機制。",
    tags: ["graphql-go/graphql", "DoS", "CWE-407", "二次方複雜度", "GraphQL"],
    title_en: "graphql-go/graphql Library Exposes Quadratic Complexity DoS Vulnerability via Query Variables",
    summary_en: "Security researcher William Carrier reported an algorithmic complexity Denial-of-Service (DoS) flaw in the `github.com/graphql-go/graphql` library, affecting all versions up to v0.8.1. This vulnerability is unauthenticated and remotely triggerable, requiring only a query string controlled by an attacker. When query validation encounters unknown type names, the system scans the entire Schema to generate a \"Did you mean\" suggestion list. This process calls the `lexicalDistance` function, which has a computational complexity of $O(|a| \\times |b|)$. If the query contains a large number of unknown type names, the overall complexity reaches $O(\\text{unknowns} \\times \\text{schema\\_types} \\times \\text{name\\_length})$, causing CPU resource consumption to grow quadratically. An attacker can simply send a query containing numerous unknown type names to exhaust the server's CPU, achieving a denial of service. Suggested mitigations include skipping suggestion generation when input is too long, limiting the number of candidates, and implementing a short-circuit mechanism during distance calculation.",
    tags_en: ["graphql-go/graphql", "DoS", "CWE-407", "Quadratic Complexity", "GraphQL"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/29/4", lang: "EN" }
    ]
  },
  {
    id: "20260829-10000",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "graphql-go/graphql 存在輸入驗證與堆疊溢出漏洞，可透過網路遠端觸發",
    summary: "資安研究人員指出 `graphql-go/graphql` 函式庫（影響版本至 v0.8.1）存在兩個網路可觸發的嚴重安全缺陷。第一個缺陷是輸入類型驗證不當（Type Confusion），允許攻擊者透過 JSON 格式傳遞錯誤類型的變數，繞過 GraphQL 規範的類型檢查。第二個缺陷是處理深度未受限的序列化資料時，可能導致應用程式崩潰（Process-terminating crash）。攻擊者可透過發送深度過深的 `msgpack` 格式資料，觸發 `fmt` 函式庫的遞迴呼叫，導致堆疊溢出（stack overflow），從而達到服務拒絕（DoS）目的。研究人員強調，這兩個漏洞皆可透過標準網路傳輸（HTTP + JSON 或 msgpack）遠端觸發，並提供了 PoC 驗證。由於此為函式庫缺陷，目前尚未有修補版本。建議開發者應立即評估並修復相關的輸入驗證邏輯，並考慮使用具有深度限制的序列化格式。",
    tags: ["graphql-go/graphql", "CVE-2026-80051", "Type Confusion", "堆疊溢出", "DoS", "GraphQL"],
    title_en: "graphql-go/graphql has Input Validation and Stack Overflow Vulnerabilities, Remotely Triggerable via Network",
    summary_en: "Security researchers have pointed out two critical, network-triggerable vulnerabilities in the `graphql-go/graphql` library (affecting versions up to v0.8.1). The first flaw is improper input type validation (Type Confusion), which allows an attacker to bypass GraphQL's type checking by transmitting variables of incorrect types via JSON format. The second flaw occurs when handling serialized data with unlimited depth, potentially causing the application to crash (Process-terminating crash). An attacker can trigger a stack overflow by sending excessively deep `msgpack` formatted data, which causes recursive calls in the `fmt` library, thereby achieving a Denial of Service (DoS). The researchers emphasized that both vulnerabilities can be remotely triggered via standard network transmission (HTTP + JSON or msgpack) and provided a PoC for verification. Since this is a library flaw, no patch version is currently available. Developers are advised to immediately evaluate and fix the relevant input validation logic, and to consider using serialization formats with depth limits.",
    tags_en: ["graphql-go/graphql", "CVE-2026-80051", "Type Confusion", "Stack Overflow", "DoS", "GraphQL"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/29/2", lang: "EN" }
    ]
  },
  {
    id: "20260829-10001",
    trackers: ["os", "security"],
    category: "漏洞與威脅情報",
    title: "rsyslog 核心功能遇堆緩衝溢出漏洞：CVE-2026-78002 影響日誌處理服務",
    summary: "rsyslog 核心的 RainerScript 語言中，`replace()` 函數存在堆緩衝溢出（Heap Buffer Overflow）漏洞，相關的 `wrap()` 三參數形式也受影響。此漏洞的觸發條件是：規則集（ruleset）將 `replace()` 或 `wrap()` 應用於來自發送方控制或不可信的資料，且搜尋字串與替換字串之間存在特定長度差異。攻擊者若能向受影響的規則集提交惡意訊息，可觸發堆損壞，導致 rsyslogd 服務終止，從而中斷日誌處理。此漏洞的影響為可用性（Availability）問題，未公開證明資料顯示未造成機密性或完整性損失。受影響版本為 rsyslog 8.6.0 至 8.2608.0。修復版本已在 2026-08-24 日期穩定建構版及後續版本中提供，建議使用者立即升級至修復後的穩定建構版，而非等待預定發布版本。操作層面可暫時限制受影響網路輸入僅接受可信發送方，或確保替換字串不長於搜尋字串。",
    tags: ["rsyslog", "CVE-2026-78002", "Heap Buffer Overflow", "RainerScript", "日誌系統"],
    title_en: "rsyslog Core Functionality Affected by Heap Buffer Overflow Vulnerability: CVE-2026-78002 Impacts Log Processing Service",
    summary_en: "A Heap Buffer Overflow vulnerability exists in the `replace()` function within rsyslog's core RainerScript language, and the related three-parameter `wrap()` function is also affected. The vulnerability is triggered when a ruleset applies `replace()` or `wrap()` to data originating from a sender that is controlled or untrusted, and there is a specific length difference between the search string and the replacement string. If an attacker can submit malicious messages to the affected ruleset, it can trigger heap corruption, causing the rsyslogd service to terminate and thereby interrupting log processing. The impact of this vulnerability is limited to Availability, and public proof indicates no loss of Confidentiality or Integrity. Affected versions are rsyslog 8.6.0 through 8.2608.0. The fix has been provided in the stable build and subsequent versions since 2026-08-24. Users are advised to immediately upgrade to the patched stable build rather than waiting for a scheduled release version. Operationally, users can temporarily restrict the affected network input to accept only trusted senders, or ensure that the replacement string does not exceed the length of the search string.",
    tags_en: ["rsyslog", "CVE-2026-78002", "Heap Buffer Overflow", "RainerScript", "Logging System"],
    sources: [
      { name: "Openwall oss-security", url: "https://openwall.com/lists/oss-security/2026/08/29/1", lang: "EN" }
    ]
  },
  {
    id: "20260829-10105",
    trackers: ["os"],
    category: "Apple",
    title: "Meta AI 應用程式現已支援 Apple CarPlay，搶先於 Siri AI 推出車載聊天機器人體驗",
    summary: "Apple 透過 iOS 26.4 版本開始支援車載系統上的對話型應用程式，這類應用程式包括 AI 聊天機器人。隨著 iOS 27 即將推出，Siri AI 也將加入 CarPlay 生態系。目前，Meta AI 已經成為第四個支援 CarPlay 的第三方 AI 聊天機器人應用程式，與 ChatGPT、Perplexity 和 Grok 並列。雖然 Meta AI 已經在 iPhone 應用程式中推出，但目前在 CarPlay 上使用時，可能仍會顯示「您的帳戶尚未支援 Meta AI 體驗」的訊息，顯示該功能可能處於有限測試階段。這證明了 CarPlay 整合現有 iPhone 應用程式的優勢，讓用戶在車內也能享受豐富的選擇，甚至在官方的 Siri AI 正式發布前，就迎來了多樣化的 AI 聊天體驗。",
    tags: ["Meta AI", "Apple CarPlay", "iOS 26.4", "Siri AI", "AI 聊天機器人", "ChatGPT"],
    title_en: "Meta AI App Now Supports Apple CarPlay, Offering In-Car Chatbot Experience Ahead of Siri AI",
    summary_en: "Apple is beginning to support conversational applications, including AI chatbots, on in-car systems starting with iOS 26.4. With iOS 27 approaching, Siri AI will also join the CarPlay ecosystem. Currently, Meta AI is the fourth third-party AI chatbot application to support CarPlay, joining ChatGPT, Perplexity, and Grok. Although Meta AI has been released in the iPhone app, users may still see a message stating, \"Your account does not yet support the Meta AI experience\" when using it on CarPlay, suggesting the feature might be in a limited testing phase. This demonstrates the advantage of integrating existing iPhone applications into CarPlay, allowing users to enjoy diverse choices while driving, even before the official launch of Siri AI.",
    tags_en: ["Meta AI", "Apple CarPlay", "iOS 26.4", "Siri AI", "AI Chatbot", "ChatGPT"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/29/apple-carplay-gaining-a-new-ai-chatbot-app-before-siri-ai-arrives", lang: "EN" }
    ]
  },
  {
    id: "20260829-10107",
    trackers: ["os"],
    category: "Apple",
    title: "Apple 預計推出第一代 AI 智慧眼鏡，整合 Siri 語音與視覺智能功能",
    summary: "根據市場預測，Apple 即將推出首款 AI 智慧眼鏡，該產品的設計重點是「AI 智慧」而非「擴增實境（AR）」。這款眼鏡將主要依賴語音和攝影機功能，讓 Siri 能夠觀察現實環境，從而回答問題、提供情境資訊，甚至翻譯招牌。此外，用戶還能要求 Siri 儲存圖像並設定提醒。\n\n在設計方面，Apple 據傳會自行設計，提供多種樣式，包括大型矩形、纖細矩形、橢圓或圓形等，材質預計為更耐用的高級醋酸纖維（acetate）。\n\n雖然文章未提供具體發布日期，但有報導指出 Apple 可能會在 WWDC 2027 發表，並於同年晚些時候發貨。未來版本甚至可能整合心率監測等健康追蹤功能，但這不會是首代產品的配置。此產品旨在將 AI 語音助理帶入現實生活，改變穿戴式裝置的互動模式。",
    tags: ["Apple", "AI 智慧眼鏡", "Siri", "穿戴式裝置", "WWDC 2027"],
    title_en: "Apple expected to launch first-generation AI smart glasses, integrating Siri voice and visual intelligence",
    summary_en: "According to market predictions, Apple is set to launch its first AI smart glasses, with the design focus being on 'AI intelligence' rather than 'Augmented Reality (AR)'. These glasses will primarily rely on voice and camera functions, allowing Siri to observe the real environment to answer questions, provide contextual information, and even translate signs. Furthermore, users will be able to ask Siri to save images and set reminders.\n\nIn terms of design, Apple is rumored to design them in-house, offering various styles, including large rectangular, slim rectangular, oval, or round shapes, with materials expected to be durable premium acetate. \n\nAlthough the article does not provide a specific release date, reports suggest Apple might unveil them at WWDC 2027, with shipping expected later that same year. Future versions may even integrate health tracking features like heart rate monitoring, but this will not be part of the first-generation configuration. This product aims to bring the AI voice assistant into real life, changing the interaction model of wearable devices.",
    tags_en: ["Apple", "AI Smart Glasses", "Siri", "Wearable Devices", "WWDC 2027"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/29/apple-first-ai-smart-glasses-feature-release-date-roundup", lang: "EN" }
    ]
  },
  {
    id: "20260829-10108",
    trackers: ["os"],
    category: "Apple",
    title: "Parallels Desktop 27 重磅升級：強化 Apple Silicon 支援與 Metal 圖形驅動",
    summary: "Parallels Desktop 27 為 macOS 虛擬化環境帶來重大升級，特別針對 Apple Silicon 架構進行了優化。本次更新的核心亮點包括引入新的 Metal 基礎圖形驅動，這能顯著提升虛擬機的圖形性能。此外，它也支援 OpenGL 4.3，讓在 Apple Silicon 上的 Windows 虛擬機具備更廣泛的圖形兼容性。除了提升虛擬化性能外，Parallels Desktop 27 還優化了本地 AI 工作負載的處理速度，並加入了多項企業級功能，旨在協助 IT 團隊更有效地管理和部署 Windows 系統於 macOS 環境中，提升企業級部署的便利性。",
    tags: ["Parallels Desktop 27", "Apple Silicon", "macOS", "虛擬化", "Metal", "Windows"],
    title_en: "Parallels Desktop 27 Major Upgrade: Enhanced Apple Silicon Support and Metal Graphics Drivers",
    summary_en: "Parallels Desktop 27 brings a major upgrade to the macOS virtualization environment, with special optimizations for the Apple Silicon architecture. Key highlights of this update include the introduction of a new Metal-based graphics driver, which significantly boosts the graphical performance of virtual machines. Furthermore, it supports OpenGL 4.3, providing broader graphics compatibility for Windows virtual machines running on Apple Silicon. Beyond improving virtualization performance, Parallels Desktop 27 also optimizes the processing speed for local AI workloads and adds multiple enterprise-grade features. These additions aim to help IT teams more effectively manage and deploy Windows systems within a macOS environment, enhancing the convenience of enterprise deployment.",
    tags_en: ["Parallels Desktop 27", "Apple Silicon", "macOS", "Virtualization", "Metal", "Windows"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/29/parallels-desktop-27", lang: "EN" }
    ]
  },
  {
    id: "20260829-10026",
    trackers: ["os"],
    category: "開源影響",
    title: "TeamPCP核心成員在澳洲被捕：揭露史上最長供應鏈攻擊手法與多數開源工具遭入侵",
    summary: "澳洲警方逮捕了兩名涉嫌為網路犯罪集團 TeamPCP 的核心成員。該集團透過製作惡性開源軟體，對全球企業進行了大規模的供應鏈攻擊。他們利用自傳播蠕蟲 'Shai-Hulud'，從 GitHub 或 NPM 等公開程式碼儲存庫竊取開發者憑證（credentials），並將惡意程式碼隱密植入開發者常用的開源工具鏈中。此攻擊手法被稱為「循環式漏洞利用」（Cyclical Exploitation），旨在透過感染開發者網路，使受害者設備持續感染，並呈指數級擴大 피해。TeamPCP 的攻擊目標包括雲端和 AI 基礎設施，例如曾感染連接約 100 個 LLM 的開源 AI 閘道 'LightLLM'，據稱導致超過 2500 個組織的雲端服務金鑰和重要機密外洩，並侵入至少 3800 個 GitHub 程式碼儲存庫。警方正對嫌犯進行深入調查，以釐清完整的犯罪規模和參與人員。",
    tags: ["TeamPCP", "Shai-Hulud", "開源軟體", "供應鏈攻擊", "GitHub", "NPM", "LLM"],
    title_en: "Core Members of TeamPCP Arrested in Australia: Unveiling the Longest Supply Chain Attack and Compromise of Numerous Open-Source Tools",
    summary_en: "Australian police have arrested two core members suspected of belonging to the cybercrime group TeamPCP. This group conducted large-scale supply chain attacks against global enterprises by creating malicious open-source software. They utilized a self-propagating worm named 'Shai-Hulud' to steal developer credentials from public code repositories like GitHub or NPM, and then secretly implanted malicious code into open-source tools commonly used by developers. This attack methodology is called \"Cyclical Exploitation,\" designed to continuously infect victim devices by compromising the developer network, leading to exponentially expanding damage. TeamPCP's targets included cloud and AI infrastructure, such as the open-source AI gateway 'LightLLM,' which reportedly connected to about 100 LLMs. This incident allegedly led to the leakage of cloud service keys and critical secrets from over 2,500 organizations, and compromised at least 3,800 GitHub code repositories. Police are conducting an in-depth investigation of the suspects to clarify the full scope of the crime and the number of participants.",
    tags_en: ["TeamPCP", "Shai-Hulud", "Open-Source Software", "Supply Chain Attack", "GitHub", "NPM", "LLM"],
    sources: [
      { name: "Boannews 韓國", url: "https://boannews.com/news/articleView.html?idxno=145536", lang: "EN" }
    ]
  },
  {
    id: "20260829-10053",
    trackers: ["os"],
    category: "重點關注",
    title: "Google Messages持續更新功能：從自定義聊天主題到RCS回覆與照片反應支援",
    summary: "Google Messages持續進行多項功能測試與更新，旨在提升用戶體驗與聊天功能。目前已在測試階段的功能包括：可自定義的附件網格、長按浮動選單（可複製聊天部分）、以及讀收據的重新設計（已進入廣泛測試）。在穩定功能方面，新增了「聊天主題」（Chat theme）功能，允許用戶高度自定義聊天介面，包括顏色和背景。此外，Messages for web已要求使用Google帳號登入，淘汰了QR Code配對方式。未來，當iOS 27發布後，Android與iPhone的RCS通訊將支援內嵌引述的回覆（inline replies）和照片反應（photo reactions）。這些更新顯示Google正在持續優化其核心通訊功能，提升跨平台的一致性與用戶的互動性。",
    tags: ["Google Messages", "RCS", "聊天主題", "Android", "iOS 27", "通訊功能"],
    title_en: "Google Messages Continues Feature Updates: From Custom Chat Themes to RCS Reply and Photo Reaction Support",
    summary_en: "Google Messages is continuously undergoing multiple feature tests and updates aimed at enhancing user experience and chat functionality. Features currently in the testing phase include: customizable attachment grids, long-press floating menus (allowing chat portion copying), and a redesigned read receipt system (now in extensive testing). For stable features, the 'Chat theme' function has been added, allowing users to highly customize the chat interface, including colors and backgrounds. Furthermore, Messages for web now requires a Google account login, phasing out the QR Code pairing method. In the future, once iOS 27 is released, Android and iPhone RCS communication will support inline replies and photo reactions. These updates demonstrate Google's ongoing optimization of its core communication features, enhancing cross-platform consistency and user interactivity.",
    tags_en: ["Google Messages", "RCS", "Chat theme", "Android", "iOS 27", "Communication features"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/29/new-google-messages-features", lang: "EN" }
    ]
  },
  {
    id: "20260829-10055",
    trackers: ["os"],
    category: "重點關注",
    title: "Google 推出新手機遊戲 Froggy’s World，讓用戶在搜尋天氣時體驗療癒系生活模擬",
    summary: "Google 近期悄悄發布了一款名為 Froggy’s World 的手機遊戲。玩家可以透過在 Google 搜尋中搜尋「weather」並點擊知識面板（Knowledge Panel）右上角的「play」圖示進入遊戲。這款遊戲專為行動裝置設計，無法在桌面上遊玩。遊戲內容圍繞著幫助 Google 的「天氣青蛙」（Weather Frog）裝修牠的新家——蘑菇。玩家需要進行除草、點擊收集不同天氣類型（日、夜、雨、雪）的代幣，並用這些代幣交換種子和裝飾品（如路燈、雕像）來美化環境。遊戲機制類似於《Animal Crossing》或《Stardew Valley》等療癒系生活模擬遊戲。玩家還可以與遊戲中的各種角色互動，並在設定中管理帳號、背景音樂和遊戲進度。遊戲的運營網址為 dailygames.discover.google.com。",
    tags: ["Google", "Froggy’s World", "手機遊戲", "生活模擬", "Google Search"],
    title_en: "Google launches new mobile game Froggy’s World, allowing users to experience a relaxing life simulation when searching for weather",
    summary_en: "Google recently quietly released a mobile game called Froggy’s World. Players can access the game by searching for \"weather\" in Google Search and clicking the \"play\" icon located on the top right of the Knowledge Panel. Designed specifically for mobile devices, the game cannot be played on a desktop. The game revolves around helping Google's \"Weather Frog\" decorate its new home—a mushroom. Players must weed, click to collect tokens representing different weather types (sun, night, rain, snow), and use these tokens to exchange for seeds and decorations (such as streetlights and statues) to beautify the environment. The game mechanics are similar to relaxing life simulation games like Animal Crossing or Stardew Valley. Players can also interact with various in-game characters and manage their account, background music, and game progress in the settings. The game's operational URL is dailygames.discover.google.com.",
    tags_en: ["Google", "Froggy’s World", "Mobile Game", "Life Simulation", "Google Search"],
    sources: [
      { name: "9to5Google", url: "https://9to5google.com/2026/08/29/google-froggys-world-game", lang: "EN" }
    ]
  },
  {
    id: "20260829-10101",
    trackers: ["os"],
    category: "重點關注",
    title: "Apple Card持續升級：iOS 27新增週期性交易功能，並宣布與Booking.com、Hertz深化合作",
    summary: "本文介紹了Apple Card近期的多項功能更新與合作夥伴關係，提升用戶體驗。在iOS 27版本中，Apple Card的Wallet應用程式新增了「週期性交易」（Recurring）功能，用戶可以在此查看預計的定期扣款日期和金額，並以月曆形式檢視，對於管理定期支出極為便利。此外，Apple Card與Booking.com合作推出「Genius Level 2」會員等級，用戶在完成一次住宿或租車後即可獲得，並享有所有Booking.com交易的3%現金回饋，同時提供折扣、免費早餐和升級等福利。Apple Card也維持與Hertz的合作，提供免費緊急道路救援、租車折扣以及3%現金回饋。另一個重要的改善是Apple Card儲蓄帳戶現已開放網頁瀏覽管理。值得注意的是，Apple Card未來將從高盛（Goldman Sachs）過渡至花旗銀行（Chase），預計轉換期約為24個月，具體細節將持續觀察。",
    tags: ["Apple Card", "iOS 27", "Wallet app", "Booking.com", "Hertz", "金融服務"],
    title_en: "Apple Card Continues Upgrades: iOS 27 Adds Recurring Transactions Feature and Deepens Partnerships with Booking.com and Hertz",
    summary_en: "This article introduces several recent feature updates and partnership enhancements for Apple Card, aimed at improving the user experience. In the iOS 27 version, the Apple Card Wallet app has added a 'Recurring' feature, allowing users to view anticipated regular deduction dates and amounts, which can be viewed in a calendar format, making it extremely convenient for managing recurring expenses. Furthermore, Apple Card has partnered with Booking.com to launch the 'Genius Level 2' membership tier. Users can earn this status after completing a stay or car rental booking and receive 3% cash back on all Booking.com transactions, along with benefits such as discounts, free breakfast, and upgrades. Apple Card also maintains its partnership with Hertz, offering free emergency roadside assistance, car rental discounts, and 3% cash back. Another significant improvement is that the Apple Card savings account is now available for web browser management. Notably, Apple Card is scheduled to transition from Goldman Sachs to Chase Bank, with the transition expected to take approximately 24 months. Specific details are expected to be monitored.",
    tags_en: ["Apple Card", "iOS 27", "Wallet app", "Booking.com", "Hertz", "Financial Services"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/29/apple-card-keeps-getting-better-heres-everything-new", lang: "EN" }
    ]
  },
  {
    id: "20260829-10109",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "無法生成資安新聞：原文為科技媒體播客內容，無漏洞或安全事件資訊",
    summary: "本文內容為 9to5Mac 網站的每日播客（Daily）節目介紹，主要提供當日科技新聞的重點回顧。內容包含收聽連結、贊助商廣告以及一個音訊播放器，不涉及任何軟體漏洞、安全事件、或資安技術細節。因此，無法根據原文生成資安新聞摘要。",
    tags: ["9to5Mac", "播客", "科技新聞", "資訊安全"],
    title_en: "Cannot Generate Cybersecurity News: Original Content is a Tech Media Podcast, Lacking Vulnerability or Security Incident Information",
    summary_en: "This article summarizes the daily podcast from the 9to5Mac website, which primarily provides a recap of key technology news for the day. The content includes listening links, sponsor advertisements, and an audio player, and does not involve any software vulnerabilities, security incidents, or cybersecurity technical details. Therefore, a cybersecurity news summary cannot be generated based on the original text.",
    tags_en: ["9to5Mac", "Podcast", "Tech News", "Information Security"],
    sources: [
      { name: "9to5Mac", url: "https://9to5mac.com/2026/08/28/9to5mac-daily-august-28-2026-foldable-iphone-expectations-more", lang: "EN" }
    ]
  },
  {
    id: "20260829-10144",
    trackers: ["os"],
    category: "重點關注",
    title: "個人資料權益行使調查：作者向百家公司提出資料存取請求，揭示隱私權法規的實務挑戰",
    summary: "本文描述作者依據《加州消費者隱私法案》（CCPA）的權利，向超過 100 家公司提出個人資料存取請求。CCPA 賦予消費者權利，包括選擇退出個人資訊銷售、刪除資料，以及要求公司提供個人資料副本。作者發現，雖然許多公司有規定的資料存取流程（如網站表單、電話或電子郵件），但實際執行過程極為耗時且複雜。更令人擔憂的是，部分公司在收到存取請求後，非但沒有提供資料，反而以「刪除資訊」的方式回應，或拒絕透過隱私權政策規定的方式處理請求。消費者倡議者指出，這反映了現行政策框架過度依賴企業的自律與誠信，未能建立有效的強制執行機制。",
    tags: ["CCPA", "個人資料權益", "隱私權法規", "數據存取權", "數據治理"],
    title_en: "Investigating Data Subject Rights: Author Submits Data Access Requests to Over 100 Companies, Revealing Practical Challenges in Privacy Regulations",
    summary_en: "This article describes the author's submission of personal data access requests to over 100 companies, exercising rights under the California Consumer Privacy Act (CCPA). CCPA grants consumers rights, including the right to opt-out of the sale of personal information, the right to delete data, and the right to request copies of their personal data. The author found that while many companies have established data access procedures (such as website forms, phone calls, or emails), the actual execution process is extremely time-consuming and complex. More concerningly, some companies, after receiving the access requests, not only failed to provide the data but instead responded with 'data deletion' notices, or outright refused to process the requests according to their privacy policies. Consumer advocates point out that this reflects the current policy framework's excessive reliance on corporate self-regulation and good faith, failing to establish effective enforcement mechanisms.",
    tags_en: ["CCPA", "Data Subject Rights", "Privacy Regulations", "Data Access Rights", "Data Governance"],
    sources: [
      { name: "Ars Technica", url: "https://arstechnica.com/tech-policy/2026/08/i-asked-100-companies-for-my-data-some-deleted-it-instead", lang: "EN" }
    ]
  },
  {
    id: "20260829-10157",
    trackers: ["os"],
    category: "重點關注",
    title: "Debian 專案投票決定：正式承認生成式 AI 工具的「負責任使用」，強調貢獻者仍需負全責",
    summary: "Debian 專案已公佈關於使用大型語言模型（LLM）的決議投票結果，最終通過了「負責任使用生成式 AI」（Responsible Use of Generative AI）的選項。該決議聲明，Debian 不支持也不禁止在軟體開發、維護、文件撰寫等流程中使用生成式 AI 工具。專案承認，若能負責任使用，這些工具能顯著提高貢獻者的生產力，讓志工能將時間集中於需要技術專業、判斷、審查與協作的工作。\n\n然而，Debian 專案強調，所有提交給 Debian 的貢獻，無論其產生方式或所用工具，都必須符合既有的品質、正確性、可維護性及法律合規標準。決議明確指出，使用生成式 AI 工具並不能減輕貢獻者對其提交工作的責任。貢獻者仍有責任理解、審查、測試，並在適當情況下修改 AI 輔助的輸出內容，才能納入 Debian 專案。",
    tags: ["Debian", "大型語言模型", "Generative AI", "軟體開發流程", "開源專案"],
    title_en: "Debian Project Vote Approves 'Responsible Use' of Generative AI Tools, Emphasizing Contributor Accountability",
    summary_en: "The Debian Project has published the results of a resolution vote regarding the use of Large Language Models (LLMs), ultimately passing the option for 'Responsible Use of Generative AI.' The resolution states that Debian neither supports nor prohibits the use of generative AI tools in processes such as software development, maintenance, or documentation writing. The project acknowledges that, when used responsibly, these tools can significantly boost contributor productivity, allowing volunteers to focus their time on tasks requiring technical expertise, judgment, review, and collaboration.\n\nHowever, the Debian Project emphasizes that all contributions submitted to Debian, regardless of their method of creation or the tools used, must adhere to existing standards of quality, accuracy, maintainability, and legal compliance. The resolution clearly states that using generative AI tools does not diminish a contributor's responsibility for their submitted work. Contributors remain responsible for understanding, reviewing, testing, and, where appropriate, modifying AI-assisted output before it can be accepted into the Debian Project.",
    tags_en: ["Debian", "Large Language Models", "Generative AI", "Software Development Workflow", "Open Source Project"],
    sources: [
      { name: "LWN.net", url: "https://lwn.net/Articles/1091231", lang: "EN" }
    ]
  },
  {
    id: "20260829-10189",
    trackers: ["os"],
    category: "重點關注",
    title: "ReactOS 0.4.16 發布：新增圖形安裝器與 Server Core 版本，提升開源 Windows 兼容性",
    summary: "ReactOS 釋出 0.4.16 版本，這是該開源作業系統的重大更新。ReactOS 旨在提供一個具備 Windows 驅動和應用程式兼容性的開源作業系統。本次更新對終端用戶最顯著的改動是引入了新的圖形化安裝器，該安裝器現在可同時在整合的開機 CD 和 Live CD 環境中使用，讓用戶能像使用 Linux Live 環境一樣，直接從單一映像檔進行測試與安裝。此外，0.4.16 版本還新增了類似 Windows Server Core 的 ReactOS Server Core 安裝類型，此模式會禁用圖形化的 Explorer shell，適合伺服器環境。其他基礎設施改進包括多螢幕支援、多種圖形驅動優化、音訊驅動支援、儲存和網路功能增強，以及第三方代碼的更新，整體提升了系統的穩定性和兼容性。用戶可透過 ReactOS.org 下載詳細資訊與版本。",
    tags: ["ReactOS", "開源作業系統", "Windows兼容性", "Server Core", "作業系統更新"],
    title_en: "ReactOS 0.4.16 Released: Adds Graphical Installer and Server Core Version, Enhancing Open-Source Windows Compatibility",
    summary_en: "ReactOS has released version 0.4.16, a major update for the open-source operating system. ReactOS aims to provide an open-source OS with compatibility for Windows drivers and applications. The most notable change for end-users in this update is the introduction of a new graphical installer. This installer can now be used in both the integrated boot CD and Live CD environments, allowing users to test and install directly from a single image, similar to using a Linux Live environment. Furthermore, version 0.4.16 adds a ReactOS Server Core installation type, similar to Windows Server Core. This mode disables the graphical Explorer shell, making it suitable for server environments. Other infrastructure improvements include multi-monitor support, optimization for various graphics drivers, audio driver support, enhanced storage and networking functionality, and updates to third-party code, collectively improving system stability and compatibility. Users can download detailed information and the version from ReactOS.org.",
    tags_en: ["ReactOS", "Open-Source Operating System", "Windows Compatibility", "Server Core", "Operating System Update"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/ReactOS-0.4.16-Released", lang: "EN" }
    ]
  },
  {
    id: "20260829-10191",
    trackers: ["os"],
    category: "重點關注",
    title: "GNOME 生態系統更新：GPU 重置恢復、Flatpak 資金挹注與新應用程式發布",
    summary: "本週 GNOME 生態系統持續發展，主要進展包括 GNOME Mutter 導入 GPU 重置恢復功能，此功能目前已完成大部分開發，並已開立合併請求進行程式碼審查。此外，Flatpak 獲得了來自 Sovereign Tech Agency 的五十萬歐元投資，顯示其在應用分發層面的重要性。應用層面，Test Center 已上架 Flathub，作為管理實驗性 Flatpak 應用程式和系統元件的新介面，類似於 Apple 的 Test Flight。另有 Bazaar 應用程式加入 GNOME Circle，專注於從 Flatpak remotes 發現和安裝應用。AI 助理 Newelle 發布 v1.5 版本，提升了終端機工具和文字生成動畫。此外，基於 Rust 的 Glycin 圖像載入函式庫發布了 2.2 Beta 版本，其中修復了 gtk-rs 程式碼中的記憶體洩漏問題。",
    tags: ["GNOME", "Flatpak", "GNOME Mutter", "Test Center", "Bazaar", "Newelle", "Glycin"],
    title_en: "GNOME Ecosystem Updates: GPU Reset Recovery, Flatpak Funding, and New Application Releases",
    summary_en: "The GNOME ecosystem continues to evolve this week, with key developments including the introduction of GPU reset recovery functionality in GNOME Mutter. This feature is largely developed and has had a merge request opened for code review. Furthermore, Flatpak secured €500,000 in investment from the Sovereign Tech Agency, underscoring its importance in the application distribution layer. At the application level, Test Center has been listed on Flathub, providing a new interface for managing experimental Flatpak applications and system components, similar to Apple's TestFlight. Additionally, the Bazaar application has joined GNOME Circle, focusing on discovering and installing applications from Flatpak remotes. The AI assistant Newelle released version v1.5, enhancing terminal tools and text generation animations. Moreover, the Rust-based Glycin image loading library released version 2.2 Beta, which fixed a memory leak issue in the gtk-rs code.",
    tags_en: ["GNOME", "Flatpak", "GNOME Mutter", "Test Center", "Bazaar", "Newelle", "Glycin"],
    sources: [
      { name: "Phoronix", url: "https://phoronix.com/news/GNOME-Very-Exciting-Week", lang: "EN" }
    ]
  },
  {
    id: "20260829-10210",
    trackers: ["os"],
    category: "重點關注",
    title: "AWS 數據中心網路架構革新：探討其成本效益與未來趨勢",
    summary: "本文深入探討了 AWS 在數據中心網路架構上的重大變革與成本優勢。AWS 採用了「單層、隨機模式」的網路佈線設計，這不僅能大幅提高網路的韌性，還能使營運成本降低多達 40%。作者指出，AWS 透過自主重建整個網路堆疊並採用這些高效能的設計，實現了顯著的成本節省。儘管有外界質疑這些成本節省是否轉嫁給客戶，但文章強調 AWS 至今仍未提高現有 SKU 的價格，使得客戶可以以接近 2020 年的價格運行相同規格的實例。此外，AWS 透過推出 AWS Interconnect 等服務，改變了數據傳輸的成本模式，提供免費的數據傳輸層級，並朝向「固定費率定價」轉型，以解決客戶難以預測的速率計費問題。這些趨勢顯示 AWS 正在持續優化基礎設施，為客戶提供更具成本效益的雲端運算環境。",
    tags: ["AWS", "數據中心", "網路架構", "雲端運算", "成本優化", "AWS Interconnect"],
    title_en: "AWS Data Center Network Architecture Innovation: Exploring Cost-Effectiveness and Future Trends",
    summary_en: "This article deeply explores AWS's major transformations and cost advantages in data center network architecture. AWS has adopted a \"single-layer, random mode\" network wiring design, which not only significantly enhances network resilience but also reduces operational costs by up to 40%. The author points out that AWS achieved significant cost savings by independently rebuilding the entire network stack and adopting these high-efficiency designs. Despite external doubts regarding whether these cost savings are passed on to customers, the article emphasizes that AWS has not yet raised the prices of existing SKUs, allowing customers to run instances of the same specifications at prices close to those of 2020. Furthermore, AWS has changed the cost model for data transmission by introducing services like AWS Interconnect, offering free data transfer tiers, and transitioning towards a \"fixed-rate pricing\" model to solve the problem of unpredictable rate billing for customers. These trends indicate that AWS is continuously optimizing its infrastructure, providing customers with a more cost-effective cloud computing environment.",
    tags_en: ["AWS", "Data Center", "Network Architecture", "Cloud Computing", "Cost Optimization", "AWS Interconnect"],
    sources: [
      { name: "The Register", url: "https://theregister.com/networks/2026/08/29/a-lot-of-datacenter-networks-are-run-by-absolute-clowns-not-amazons/5293379", lang: "EN" }
    ]
  },
  {
    id: "20260829-10211",
    trackers: ["os"],
    category: "重點關注",
    title: "防禦新創公司 Mara 募資 700 萬美元，開發可搭載背包式攔截無人機系統 Spike",
    summary: "防禦科技新創公司 Mara 宣布成功募資 700 萬美元，旨在將其 Spike 無人機防禦系統推向市場。該系統專門用於對抗 FPV（第一人稱視角）攻擊無人機群，這類無人機在烏克蘭戰場造成了大量傷亡。Spike 系統由 Spotter 感測器/目標鎖定單元和多個 Seeker 動能攔截器組成。Seeker 攔截器體積小（250g），速度快（200 kmph），可透過管狀發射，並具備自主導航能力。Mara 聲稱，該系統的部署規模極具彈性，從保護單個小隊的背包式套件，擴展到車載發射器，甚至可形成保護基地或戰場的數公里網狀屏障。Spotter 感測器結合了光電、聲學和低訊號雷達，提供全天候、全天時的保護。Mara 創辦人 Daniel Kofman 指出，小型無人機改變了戰場的成本與精準攻擊能力，而 Spike 則提供了一個分散式、低成本的節點網狀結構，能從多個方向進行目標鎖定和射擊。該系統已在美國陸軍演習中進行了測試，並與美國、英國、捷克和烏克蘭等多國軍方建立了合作關係。",
    tags: ["Mara", "Spike", "無人機防禦", "FPV 無人機", "國防科技", "戰場應用"],
    title_en: "Defense Startup Mara Raises $7 Million to Develop Backpack-Mounted Drone Interception System Spike",
    summary_en: "Defense technology startup Mara announced it successfully raised $7 million to bring its Spike drone defense system to market. This system is specifically designed to counter FPV (First-Person View) attack drone swarms, which have caused significant casualties on the battlefield in Ukraine. The Spike system consists of a Spotter sensor/target acquisition unit and multiple Seeker kinetic interceptors. The Seeker interceptors are small (250g), fast (200 kmph), can be launched via a tube, and possess autonomous navigation capabilities. Mara claims that the system's deployment scale is highly flexible, ranging from a backpack-mounted kit for protecting a single squad, to vehicle-mounted launchers, and even forming a multi-kilometer mesh barrier to protect a base or battlefield. The Spotter sensor combines photoelectric, acoustic, and low-signal radar, providing all-weather, all-time protection. Mara founder Daniel Kofman noted that small drones have changed the cost and precision of battlefield attacks, and Spike offers a decentralized, low-cost nodal mesh structure capable of target acquisition and firing from multiple directions. The system has been tested in US Army exercises and has established cooperative relationships with military forces from multiple countries, including the United States, the United Kingdom, the Czech Republic, and Ukraine.",
    tags_en: ["Mara", "Spike", "Drone Defense", "FPV Drone", "Defense Technology", "Battlefield Application"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/29/startup-bags-7m-to-build-drone-interceptor-in-a-backpack-systems/5293176", lang: "EN" }
    ]
  },
  {
    id: "20260829-10212",
    trackers: ["os"],
    category: "重點關注",
    title: "微軟Xbox與IKEA聯名推出YXSTABY系列，為遊戲玩家打造主題家具",
    summary: "本文報導了微軟Xbox與家具零售商IKEA的最新合作。IKEA推出了名為YXSTABY的九件組系列，專為Xbox的硬體玩家設計，涵蓋了從模擬控制器搖桿造型的凳子、D-pad造型抱枕，到其他遊戲主題的家具。該系列旨在讓玩家在等待遊戲機啟動的同時，也能享受遊戲氛圍。文章也提及了Xbox的市場策略，指出在競爭激烈的市場中，Xbox經歷了員工裁員等「重置」過程。此外，文章比較了Xbox Series S和Series X的價格，並指出遊戲硬體（如儲存和記憶體）的價格持續上漲，預計到2027年將再次翻倍，反映了當前科技產業的物價壓力。",
    tags: ["Xbox", "IKEA", "YXSTABY", "微軟", "遊戲周邊", "硬體價格"],
    title_en: "Microsoft Xbox and IKEA Collaborate on YXSTABY Series, Creating Themed Furniture for Gamers",
    summary_en: "This article reports on the latest collaboration between Microsoft Xbox and furniture retailer IKEA. IKEA has launched the YXSTABY nine-piece series, designed specifically for Xbox hardware players. The collection includes various gaming-themed furniture, ranging from stools shaped like controller joysticks and D-pad cushions, to other gaming-themed items. The series aims to allow players to immerse themselves in the gaming atmosphere while waiting for their consoles to boot up. The article also touches upon Xbox's market strategy, noting that Xbox has undergone a 'reset' process, including employee layoffs, in a highly competitive market. Furthermore, the article compares the pricing of the Xbox Series S and Series X, pointing out that the cost of gaming hardware (such as storage and memory) continues to rise, and is projected to double again by 2027, reflecting current inflationary pressures in the technology industry.",
    tags_en: ["Xbox", "IKEA", "YXSTABY", "Microsoft", "Gaming Accessories", "Hardware Prices"],
    sources: [
      { name: "The Register", url: "https://theregister.com/offbeat/2026/08/29/xbox-respawns-ikea-furniture-with-gaming-range/5292911", lang: "EN" }
    ]
  }
];
