// data-20260515.js — 2026-05-15
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-15"] = [
  {
    id: "20260515-001",
    trackers: ["os", "security"],
    category: "重點關注",
    title: "Microsoft APM 包含 Windows 檔案提取邊界錯誤，可能導致路徑遍歷漏洞",
    summary: "本漏洞 CVE-2026-46383 存在於 Microsoft APM，這是一個用於 AI 代理的開源依賴管理工具。在版本 0.13.0 之前，當使用 `apm install` 命令處理未識別為插件格式的本地 `.tar.gz` 檔案時，APM 會執行一個遺留的 bundle 探測。若運行環境是 Python 3.10 或 3.11，且版本早於 3.12，該探測機制會使用 `raw tar.extractall()` 提取不受信任的 tar 成員，但未能拒絕 Windows 的絕對成員名稱（例如 `D:/....`）。這導致了 Windows 專屬的檔案提取邊界失敗，屬於路徑遍歷（Path Traversal）和外部控制檔案路徑的風險。修補建議是升級 Microsoft APM 至 0.13.0 或更高版本。此漏洞的 CVSS 3.1 評分向量為 AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N。",
    tags: ["Microsoft APM", "CVE-2026-46383", "Windows", "Python", "路徑遍歷", "AI 代理"],
    title_en: "Microsoft APM Contains Windows File Extraction Boundary Error, Potentially Leading to Path Traversal Vulnerability",
    summary_en: "This vulnerability, CVE-2026-46383, exists in Microsoft APM, an open-source dependency management tool used for AI agents. Before version 0.13.0, when processing local `.tar.gz` files that are not identified as plugin formats using the `apm install` command, APM executes a legacy bundle detection. If the operating environment is Python 3.10 or 3.11, and the version is earlier than 3.12, this detection mechanism uses `raw tar.extractall()` to extract untrusted tar members but fails to reject Windows absolute member names (e.g., `D:/....`). This results in a Windows-specific file extraction boundary failure, constituting a Path Traversal and external controlled file path risk. The recommended fix is to upgrade Microsoft APM to version 0.13.0 or higher. The CVSS 3.1 score vector for this vulnerability is AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N.",
    tags_en: ["Microsoft APM", "CVE-2026-46383", "Windows", "Python", "Path Traversal", "AI Agents"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-46383", lang: "EN" }
    ]
  }
];
