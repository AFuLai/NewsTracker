TITLE: 作業系統追蹤

## ENTRY

> 說明：`search:` 為可選欄位（附加於「說明」欄以 ` | search:路徑` 格式）。
> `method:API` 的來源走 NVD CVE 2.0 API，關鍵字取自下方 ## KEY 的前幾條。
> 其餘來源的抓取方式（FEED/LISTING/SEARCH/ARCHIVE/BROWSER）由 auto-probe 自動判定。

| 名稱 | URL | 說明 |
|------|-----|------|
| NVD CVE API | https://nvd.nist.gov/ | NVD CVE 2.0 API，依關鍵字抓各 OS 漏洞 method:API |
| Linux Kernel | https://www.kernel.org/ | 核心版本發布與 changelog |
| LWN.net | https://lwn.net/ | Linux 核心與發行版深度報導 |
| Phoronix | https://www.phoronix.com/ | Linux 硬體、核心、效能與發行版新聞 |
| Ubuntu Security Notices | https://ubuntu.com/security/notices | Ubuntu 安全公告（USN） |
| Debian Security | https://www.debian.org/security/ | Debian 安全通報（DSA） |
| Microsoft MSRC | https://msrc.microsoft.com/blog/ | 微軟資安回應中心，Patch Tuesday |
| Windows Blogs | https://blogs.windows.com/ | Windows 官方開發與版本動態 |
| Windows Latest | https://www.windowslatest.com/ | Windows 更新與功能新聞 |
| Apple Security Releases | https://support.apple.com/en-us/100100 | Apple 各平台安全更新列表 |
| 9to5Mac | https://9to5mac.com/ | iOS / macOS 開發與安全報導 |
| Android Security Bulletins | https://source.android.com/docs/security/bulletin | Android 每月安全公告 |
| Android Developers Blog | https://android-developers.googleblog.com/ | Android 開發進度與 API 變更 |
| 9to5Google | https://9to5google.com/ | Android / Pixel 新聞 |
| Ars Technica | https://arstechnica.com/ | 跨平台技術與資安深度報導 |
| The Register | https://www.theregister.com/ | 跨平台 OS、企業 IT 新聞 |
| The Hacker News | https://thehackernews.com/ | OS 漏洞與修補新聞 \| search:/?s= |

---

## CATEGORY

| category 值 | 適用內容說明 |
|------------|------------|
| Linux | Linux 核心（kernel）版本、發行版（Ubuntu/Debian/RHEL/Arch 等）更新、USN/DSA 安全公告、glibc/systemd/OpenSSH 等核心元件、Linux 專屬 CVE 與開發進度 |
| Windows | Windows 用戶端與伺服器版本、Patch Tuesday、MSRC 公告、Win32/NTLM/核心漏洞、Windows 功能更新與開發者變更 |
| Apple | iOS、iPadOS、macOS、watchOS、tvOS 版本與安全更新、Apple 平台 CVE、WebKit、Xcode/Swift 開發者動態 |
| Android | Android 平台版本、每月安全公告、AOSP、Pixel、Play 系統更新、Android 開發者 API 變更與棄用 |
| 重點關注 | 跨平台趨勢與值得開發者／資安人員注意的重點：橫跨多 OS 的重大漏洞、供應鏈、編譯器與工具鏈（LLVM/GCC/Rust）、棄用與遷移建議、效能與架構走向 |

---

## KEY

### 漏洞（NVD 關鍵字優先，前 5 條供 NVD API 查詢）
1. `Linux kernel`
2. `Microsoft Windows`
3. `Android`
4. `Apple macOS`
5. `Apple iOS`

### Linux
6. `Linux kernel release version 2026`
7. `Ubuntu Debian security update USN DSA 2026`
8. `Linux kernel vulnerability privilege escalation CVE`
9. `systemd glibc OpenSSH Linux security advisory`

### Windows
10. `Windows Patch Tuesday security update CVE 2026`
11. `Microsoft Windows 11 release feature update`
12. `Windows zero-day elevation of privilege exploited`

### Apple
13. `Apple iOS iPadOS security update CVE 2026`
14. `macOS security update vulnerability patch`
15. `Apple security release WebKit zero-day`

### Android
16. `Android security bulletin monthly patch CVE 2026`
17. `Android release developer preview feature`
18. `Pixel update AOSP security`

### 重點關注 / 跨平台與開發
19. `operating system developer deprecation migration 2026`
20. `cross-platform vulnerability Linux Windows macOS`
21. `compiler toolchain LLVM GCC Rust kernel 2026`
22. `作業系統 漏洞 更新 開發 重點`
