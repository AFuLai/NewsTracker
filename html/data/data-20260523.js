// data-20260523.js — 2026-05-23
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-23"] = [
  {
    id: "20260523-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：skbuff 處理器未正確傳播共享分片標記，可能導致權限提升",
    summary: "本漏洞存在於 Linux 核心的網路分片處理機制中，具體影響多個處理分片（frag-transfer）的輔助函數，包括 __pskb_copy_fclone()、skb_shift()、skb_gro_receive()、skb_gro_receive_list()、tcp_clone_payload() 和 skb_segment() 等。問題核心在於這些函數在移動或複製分片描述符時，未能正確地將 `SKBFL_SHARED_FRAG` 標記（marker）傳遞到目的地 SKB 的 `skb_shinfo()->flags` 中。當標記丟失時，下游的網路處理程式（如使用 `skb_has_shared_frag()` 的 in-place writer，例如 ESP 輸入處理）會誤判資料是否為共享頁面，導致其錯誤地執行寫入操作。攻擊者可以利用此缺陷，透過特定的網路流量（例如 nft 'dup to <local>' 規則或 nf_dup_ipv4() / xt_TEE 呼叫）將一個帶有標記丟失的 SKB 傳遞給 ESP 輸入處理，進而讓未授權使用者（unprivileged user）寫入到根目錄（root-owned）的唯讀檔案的頁面快取中，造成權限提升的風險。修補建議是，在所有移動分片描述符的函數中，必須在目的地 SKB 建立時，明確地設置 `SKBFL_SHARED_FRAG` 標記。",
    tags: ["Linux 核心", "CVE-2026-43503", "skbuff", "權限提升", "網路堆疊", "Linux Kernel"],
    title_en: "Linux Kernel Vulnerability: skbuff Processor Fails to Propagate Shared Fragment Marker, Potentially Leading to Privilege Escalation",
    summary_en: "This vulnerability resides in the network fragment processing mechanism of the Linux kernel, specifically affecting multiple functions that handle fragment transfers, including __pskb_copy_fclone(), skb_shift(), skb_gro_receive(), skb_gro_receive_list(), tcp_clone_payload(), and skb_segment(). The core issue is that these functions fail to correctly propagate the `SKBFL_SHARED_FRAG` marker when moving or copying fragment descriptors to the destination SKB's `skb_shinfo()->flags`. When the marker is lost, downstream network processing programs (such as in-place writers using `skb_has_shared_frag()`, for example, ESP input processing) incorrectly determine whether the data is a shared page, leading them to execute write operations erroneously. An attacker can exploit this flaw by passing an SKB with a lost marker via specific network traffic (e.g., nft 'dup to <local>' rules or nf_dup_ipv4() / xt_TEE calls) to the ESP input processing, thereby allowing an unprivileged user to write to the page cache of a read-only, root-owned file, causing a privilege escalation risk. The recommended fix is that all functions moving fragment descriptors must explicitly set the `SKBFL_SHARED_FRAG` marker when creating the destination SKB.",
    tags_en: ["Linux Kernel", "CVE-2026-43503", "skbuff", "Privilege Escalation", "Network Stack", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43503", lang: "EN" }
    ]
  },
  {
    id: "20260523-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 CVE-2026-46300：修復 skbuff 封包合併時遺失共享片段標記的漏洞",
    summary: "本漏洞位於 Linux 核心的網路堆疊（net: skbuff）中，涉及封包（skb）合併（coalescing）的邏輯。當使用 `skb_try_coalesce()` 函數合併來自不同來源的頁面片段（paged frags）時，如果原始封包（@from）設定了 `SKBFL_SHARED_FRAG` 標記，但合併後的目標封包（@to）會遺失此共享片段標記。此不變性（invariant）的破壞會影響後續依賴此標記的網路協定檢查。特別是，ESP（Encapsulating Security Payload）輸入檢查在判斷是否可以跳過 `skb_cow_data()` 進行原地解密時，會依賴 `skb_has_shared_frag()` 函數。如果 TCP 接收合併將共享片段移動到未標記的 skb，ESP 可能會誤判 `skb_has_shared_frag()` 為假，導致其在頁面快取支援的片段上執行原地解密，可能造成安全或功能異常。修補措施是確保在 `skb_try_coalesce()` 傳輸頁面片段時，正確傳播 `SKBFL_SHARED_FRAG` 標記。此修補屬於核心元件層面的安全強化，建議所有使用 Linux 核心的系統應更新至修補版本。",
    tags: ["Linux 核心", "skbuff", "CVE-2026-46300", "網路堆疊", "ESP", "封包合併"],
    title_en: "Linux Kernel Patch CVE-2026-46300: Fixes Vulnerability in skbuff Packet Coalescing Loss of Shared Fragment Flag",
    summary_en: "This vulnerability resides in the Linux kernel's network stack (net: skbuff) and involves the logic for packet (skb) coalescing. When using the `skb_try_coalesce()` function to merge paged fragments from different sources, if the original packet (@from) sets the `SKBFL_SHARED_FRAG` flag, but the resulting target packet (@to) loses this shared fragment flag. This breakage of an invariant affects subsequent network protocol checks that rely on this flag. Specifically, the ESP (Encapsulating Security Payload) input check relies on the `skb_has_shared_frag()` function when determining if it can skip `skb_cow_data()` for in-place decryption. If TCP reception coalescing moves shared fragments to an unmarked skb, ESP might incorrectly evaluate `skb_has_shared_frag()` as false, potentially causing in-place decryption on fragments supported by page cache, leading to security or functional anomalies. The fix ensures that the `SKBFL_SHARED_FRAG` flag is correctly propagated when transferring paged fragments via `skb_try_coalesce()`. This patch constitutes a security enhancement at the core component level, and all systems using the Linux kernel are advised to update to the patched version.",
    tags_en: ["Linux Kernel", "skbuff", "CVE-2026-46300", "Network Stack", "ESP", "Packet Coalescing"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-46300", lang: "EN" }
    ]
  },
  {
    id: "20260523-003",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Anthropic Project Glasswing 揭露超過 1 萬個高風險漏洞，包含 WolfSSL 關鍵缺陷",
    summary: "AI 公司 Anthropic 透過其防禦性計畫 Project Glasswing，自上月啟用以來，已協助發現全球許多關鍵軟體基礎設施中超過 10,000 個高或關鍵嚴重性漏洞。其中，有 6,202 個漏洞影響超過 1,000 個開源專案，並確認了 1,726 個有效漏洞候選。具體案例包括在 WolfSSL 中發現一個關鍵缺陷（CVE-2026-5194，CVSS 分數：9.1），該漏洞可能允許攻擊者偽造憑證，冒充合法服務。Anthropic 指出，雖然發現漏洞相對容易，但修復的難度是重大挑戰。公司呼籲軟體開發商縮短修補週期，並建議網路防禦者應加強網路預設配置、強制實施多因素驗證，並保留完整日誌。此外，Anthropic 也推出了 Cyber Verification Program，讓專業人士可進行漏洞研究和紅隊演練。",
    tags: ["Anthropic", "Project Glasswing", "AI 漏洞發現", "WolfSSL", "CVE-2026-5194", "開源安全"],
    title_en: "Anthropic's Project Glasswing Uncovers Over 10,000 High-Risk Vulnerabilities, Including Critical Flaw in WolfSSL",
    summary_en: "AI company Anthropic, through its defensive initiative Project Glasswing, has helped discover over 10,000 high or critical severity vulnerabilities in numerous global critical software infrastructures since its launch last month. Of these, 6,202 vulnerabilities affect over 1,000 open-source projects, and 1,726 effective vulnerability candidates have been confirmed. A specific case includes a critical flaw found in WolfSSL (CVE-2026-5194, CVSS Score: 9.1), which could potentially allow attackers to forge certificates and impersonate legitimate services. Anthropic points out that while discovering vulnerabilities is relatively easy, remediation presents a significant challenge. The company urges software developers to shorten patching cycles and advises network defenders to strengthen network default configurations, enforce multi-factor authentication, and retain comprehensive logging. Furthermore, Anthropic has launched the Cyber Verification Program, allowing professionals to conduct vulnerability research and red team exercises.",
    tags_en: ["Anthropic", "Project Glasswing", "AI Vulnerability Discovery", "WolfSSL", "CVE-2026-5194", "Open Source Security"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/claude-mythos-ai-finds-10000-high.html", lang: "EN" }
    ]
  },
  {
    id: "20260523-004",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "高危險性漏洞 CVE-2026-48172 曝於 LiteSpeed cPanel 外掛，可提升權限執行任意指令",
    summary: "LiteSpeed 的 User-End cPanel Plugin 存在一嚴重安全漏洞 CVE-2026-48172，CVSS 分數為 10.0。此漏洞源於權限分配不當，攻擊者可利用 lsws.redisAble 函數，在任何 cPanel 使用者帳號下，以 root 權限執行任意指令。此漏洞影響所有版本介於 2.3 到 2.4.4 的外掛。由於該漏洞已被證實正在野外積極利用，美國 CISA 已將其列入已知被利用漏洞清單（KEV），要求聯邦民事行政分支機構必須在特定日期前修補。LiteSpeed 已在版本 2.4.5 修復此問題，並隨後發布了更新版本 2.4.7，同時修補了其他潛在攻擊路徑。建議使用者立即升級至 LiteSpeed WHM Plugin 版本 5.3.1.0，或若無法立即修補，應執行指令移除該用戶端外掛。",
    tags: ["LiteSpeed", "cPanel", "CVE-2026-48172", "CVSS 10.0", "root 權限", "cPanel Plugin"],
    title_en: "Critical Vulnerability CVE-2026-48172 Exposed in LiteSpeed cPanel Plugin, Allows Arbitrary Command Execution with Elevated Privileges",
    summary_en: "The LiteSpeed User-End cPanel Plugin contains a severe security vulnerability, CVE-2026-48172, with a CVSS score of 10.0. This vulnerability stems from improper permission assignment, allowing an attacker to utilize the lsws.redisAble function to execute arbitrary commands with root privileges under any cPanel user account. The vulnerability affects all plugin versions between 2.3 and 2.4.4. Since this vulnerability has been confirmed to be actively exploited in the wild, CISA has listed it in its Known Exploited Vulnerabilities (KEV) catalog, requiring federal civilian executive agencies to patch by a specific date. LiteSpeed has fixed this issue in version 2.4.5 and subsequently released updated version 2.4.7, which also patched other potential attack vectors. Users are advised to immediately upgrade to LiteSpeed WHM Plugin version 5.3.1.0, or if immediate patching is not possible, to execute the command to remove the client plugin.",
    tags_en: ["LiteSpeed", "cPanel", "CVE-2026-48172", "CVSS 10.0", "root privileges", "cPanel Plugin"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/litespeed-cpanel-plugin-cve-2026-48172.html", lang: "EN" }
    ]
  },
  {
    id: "20260523-005",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "CISA將Drupal Core的SQL注入漏洞CVE-2026-9082列入KEV目錄，警告積極利用",
    summary: "美國網路安全與基礎設施安全局（CISA）已將一個影響Drupal Core的關鍵安全漏洞CVE-2026-9082，列入其已知已利用漏洞（KEV）目錄，原因是發現了積極的利用證據。此漏洞是一個SQL注入缺陷，影響所有支援的Drupal Core版本，可能允許攻擊者透過特殊建構的請求，利用資料庫抽象API達成權限提升和遠端程式碼執行。儘管Drupal已於此漏洞發布修補程式，但攻擊嘗試仍在野外被偵測到，特別是針對遊戲和金融服務網站。修補建議包括升級至Drupal 11.3.10、11.2.12、11.1.10，或升級Drupal 10.6.9、10.5.10、10.4.10，以及手動修補Drupal 9.5和8.9版本。聯邦民用行政部門機構建議在2026年5月27日前完成修補。",
    tags: ["Drupal Core", "CVE-2026-9082", "SQL注入", "CISA", "KEV", "遠端程式碼執行"],
    title_en: "CISA lists Drupal Core SQL Injection vulnerability CVE-2026-9082 in KEV catalog, warns of active exploitation",
    summary_en: "The US Cybersecurity and Infrastructure Security Agency (CISA) has listed a critical vulnerability, CVE-2026-9082, affecting Drupal Core in its Known Exploited Vulnerabilities (KEV) catalog, due to evidence of active exploitation. This vulnerability is an SQL injection flaw that affects all supported Drupal Core versions and could potentially allow an attacker to achieve privilege escalation and Remote Code Execution (RCE) by utilizing specially crafted requests through the database abstraction API. Although Drupal has released patches for this vulnerability, attack attempts are still being detected in the wild, particularly targeting gaming and financial service websites. Recommended patches include upgrading to Drupal 11.3.10, 11.2.12, 11.1.10, or upgrading Drupal 10.6.9, 10.5.10, 10.4.10, as well as manually patching Drupal 9.5 and 8.9. Federal civilian executive department agencies are advised to complete patching by May 27, 2026.",
    tags_en: ["Drupal Core", "CVE-2026-9082", "SQL Injection", "CISA", "KEV", "Remote Code Execution"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/drupal-core-sql-injection-bug-actively.html", lang: "EN" }
    ]
  },
  {
    id: "20260523-006",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "GitHub 推出 npm 階段性發布機制，強化開源套件供應鏈安全",
    summary: "為應對日益猖獗的軟體供應鏈攻擊，GitHub 已在 npm 上推出「階段性發布」（Staged Publishing）功能。此機制要求維護者必須通過雙因素驗證（2FA）才能明確批准一個套件版本，使其公開可供安裝。套件預建 tarball 會先上傳至一個暫存佇列，直到維護者手動批准後才能正式發布。此舉確保了每一次發布都有「存在證明」，即使來自非互動式 CI/CD 工作流程或使用 OpenID Connect (OIDC) 認證的信任發布。此外，npm 也新增了三個安裝來源旗標（--allow-file、--allow-remote、--allow-directory），讓開發者能對所有非註冊表安裝來源實施明確的白名單控制。這些更新旨在大幅提升開源生態系統的安全性。",
    tags: ["GitHub", "npm", "供應鏈安全", "Staged Publishing", "2FA", "開源生態系"],
    title_en: "GitHub Launches Staged Publishing Mechanism for npm, Strengthening Open-Source Package Supply Chain Security",
    summary_en: "To counter increasingly rampant software supply chain attacks, GitHub has introduced 'Staged Publishing' on npm. This mechanism requires maintainers to pass through Two-Factor Authentication (2FA) to explicitly approve a package version before it can be made publicly available for installation. The package's pre-built tarball is first uploaded to a temporary queue and can only be officially published after manual approval by the maintainer. This ensures that every release has a 'proof of existence,' even when originating from non-interactive CI/CD workflows or using OpenID Connect (OIDC) credentials for trusted publishing. Furthermore, npm has added three installation source flags (--allow-file, --allow-remote, --allow-directory), allowing developers to enforce explicit whitelisting control over all non-registry installation sources. These updates aim to significantly enhance the security of the open-source ecosystem.",
    tags_en: ["GitHub", "npm", "Supply Chain Security", "Staged Publishing", "2FA", "Open-Source Ecosystem"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/npm-adds-2fa-gated-publishing-and.html", lang: "EN" }
    ]
  },
  {
    id: "20260523-007",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "資安警示：Packagist 供應鏈攻擊感染 8 個 PHP 套件，透過 postinstall 腳本植入 Linux 後門",
    summary: "資安公司 Socket 揭露一場「協調式」的供應鏈攻擊，已感染 Packagist 上的八個 PHP 套件。攻擊者未將惡意程式碼直接寫入 Composer 相關的 metadata，而是巧妙地植入到 package.json 的 postinstall 腳本中，目標是那些同時使用 JavaScript build tooling 和 PHP 程式碼的專案，這使得傳統僅掃描 PHP 依賴的資安工具容易忽略此類風險。\n\n惡意腳本的運作機制是：在安裝或建構流程中，嘗試下載一個名為 `gvfsd-network` 的 Linux 二進位檔，該二進位檔來自一個 GitHub Releases URL。它會將檔案儲存至 `/tmp/.sshd`，並使用 `chmod` 命令賦予所有使用者執行權限後在背景執行。此類攻擊提供了在安裝或建構工作流期間的遠端程式碼執行能力（RCE），並透過禁用 TLS 驗證、抑制錯誤等方式來隱藏其活動。\n\n受影響的套件包括 silverstripe-cms-theme、crosierlib-base、wave、genesis 等。由於攻擊者在 GitHub 上的行為模式複雜，建議開發者和安全團隊應特別注意檢查所有依賴套件的 `package.json` 檔案中的 postinstall 腳本，並實施嚴格的 CI/CD 管線安全檢查，以防範跨生態系統的惡意植入。",
    tags: ["Packagist", "供應鏈攻擊", "PHP", "postinstall script", "RCE", "CI/CD"],
    title_en: "Security Alert: Packagist Supply Chain Attack Infects 8 PHP Packages via postinstall Script Implanting Linux Backdoor",
    summary_en: "Security firm Socket has revealed a 'coordinated' supply chain attack that has infected eight PHP packages on Packagist. The attackers did not directly write malicious code into the Composer metadata; instead, they cleverly implanted it into the `postinstall` script within the `package.json` file. This targets projects that utilize both JavaScript build tooling and PHP code, making it easy for traditional security tools that only scan PHP dependencies to overlook this risk.\n\nThe malicious script operates by attempting to download a Linux binary named `gvfsd-network` from a GitHub Releases URL during the installation or build process. It saves the file to `/tmp/.sshd` and then executes it in the background after using the `chmod` command to grant execution permissions to all users. This type of attack provides Remote Code Execution (RCE) during the installation or build workflow and attempts to conceal its activity by disabling TLS verification and suppressing errors.\n\nAffected packages include silverstripe-cms-theme, crosierlib-base, wave, and genesis. Due to the complex behavior pattern of the attackers on GitHub, developers and security teams are advised to pay special attention to checking the `postinstall` scripts in the `package.json` file of all dependency packages, and to implement strict CI/CD pipeline security checks to prevent cross-ecosystem malicious implants.",
    tags_en: ["Packagist", "Supply Chain Attack", "PHP", "postinstall script", "RCE", "CI/CD"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/packagist-supply-chain-attack-infects-8.html", lang: "EN" }
    ]
  },
  {
    id: "20260523-008",
    trackers: ["security"],
    category: "供應鏈與開源安全",
    title: "Laravel-Lang PHP套件遭供應鏈攻擊：惡意標籤植入自動竊取多種雲端與加密貨幣憑證",
    summary: "資安研究人員發現一場針對Laravel-Lang旗下多個PHP套件（包括lang、http-statuses、attributes、actions）的供應鏈攻擊。攻擊者未修改原始程式碼，而是透過重寫每個儲存庫的Git標籤，將其指向一個惡意的提交。這些惡意標籤植入了名為`src/helpers.php`的後門檔案。由於該檔案被註冊在`composer.json`的`autoload.files`中，當任何應用程式啟動時，該後門會自動執行，無需任何特殊觸發。該後門會生成一個獨特的主機標記，並聯繫外部伺服器，下載一個跨平台的PHP憑證竊取器。該竊取器極具威力，能夠收集包括雲端金鑰（如IAM角色、Azure/GCP/AWS憑證）、各種服務帳號令牌、加密貨幣錢包的種子短語、瀏覽器密碼、SSH私鑰、以及多種應用程式的會話令牌等海量敏感資訊，並透過AES-256加密後傳輸至外部伺服器。開發者應立即檢查所有使用這些套件的專案，並確保所有套件的標籤和版本來源是可信的。",
    tags: ["Laravel-Lang", "PHP", "供應鏈攻擊", "Composer", "憑證竊取", "Git標籤"],
    title_en: "Laravel-Lang PHP Packages Targeted in Supply Chain Attack: Malicious Tags Implant Automatic Theft of Various Cloud and Cryptocurrency Credentials",
    summary_en: "Security researchers discovered a supply chain attack targeting multiple PHP packages under Laravel-Lang (including lang, http-statuses, attributes, and actions). The attackers did not modify the original code but instead rewrote the Git tags for each repository, pointing them to a malicious commit. These malicious tags implanted a backdoor file named `src/helpers.php`. Because this file was registered in the `autoload.files` section of `composer.json`, the backdoor executes automatically when any application starts, requiring no special trigger. This backdoor generates a unique host token and contacts an external server to download a cross-platform PHP credential stealer. This stealer is highly potent, capable of collecting massive amounts of sensitive information, including cloud keys (such as IAM roles, Azure/GCP/AWS credentials), various service account tokens, cryptocurrency wallet seed phrases, browser passwords, SSH private keys, and session tokens for multiple applications, before transmitting them to an external server after AES-256 encryption. Developers should immediately audit all projects using these packages and ensure that the tags and versions of all packages are from trusted sources.",
    tags_en: ["Laravel-Lang", "PHP", "Supply Chain Attack", "Composer", "Credential Theft", "Git Tag"],
    sources: [
      { name: "The Hacker News", url: "https://thehackernews.com/2026/05/laravel-lang-php-packages-compromised.html", lang: "EN" }
    ]
  }
];
