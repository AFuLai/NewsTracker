// data-20260214.js — 2026-02-14
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-02-14"] = [
  {
    id: "20260214-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：arm64 系統在休眠恢復時的 CFI 檢查問題",
    summary: "本漏洞影響 Linux 核心的休眠（hibernation）恢復機制，特別是在 arm64 架構上。問題出在 `swsusp_arch_resume()` 函數嘗試驗證 CFI (Control Flow Integrity) hash 時，呼叫的 `swsusp_arch_suspend_exit()` 缺乏必要的 CFI 標記。這可能導致在 Android 基礎系統上從休眠恢復時發生 DABT (Data Abort) 錯誤，造成系統崩潰或不穩定。開發者指出，由於進入點的限制，無法直接修改標記方式。目前最簡單的修復方法是將 `swsusp_arch_resume()` 函數標記為 `__nocfi`，以禁用該 CFI 檢查，從而解決此種運行時的資料中止異常。建議系統維護者應升級到已修補的 Linux 核心版本，以確保系統的穩定性與安全性。",
    tags: ["Linux 核心", "arm64", "CFI", "休眠", "swsusp", "DABT"],
    title_en: "Linux Kernel Vulnerability: CFI Check Issue on arm64 Systems During Hibernation Resume",
    summary_en: "This vulnerability affects the Linux kernel's hibernation resume mechanism, particularly on the arm64 architecture. The issue arises because the `swsusp_arch_resume()` function, when attempting to validate the CFI (Control Flow Integrity) hash, calls `swsusp_arch_suspend_exit()` which lacks the necessary CFI annotation. This may lead to a DABT (Data Abort) error when resuming from hibernation on Android-based systems, causing system crashes or instability. Developers noted that due to entry point restrictions, the annotation method cannot be directly modified. The simplest current fix is to annotate the `swsusp_arch_resume()` function as `__nocfi`, thereby disabling the CFI check and resolving this type of runtime data abort exception. System maintainers are advised to upgrade to a patched Linux kernel version to ensure system stability and security.",
    tags_en: ["Linux Kernel", "arm64", "CFI", "Hibernation", "swsusp", "DABT"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-23128", lang: "EN" }
    ]
  }
];
