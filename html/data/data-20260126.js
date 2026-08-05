// data-20260126.js — 2026-01-26
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-26"] = [
  {
    id: "20260126-001",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "研究揭露 Windows 11 新增「管理員保護」功能漏洞：可繞過機制竊取全權管理員權限",
    summary: "本文介紹了 Windows 11 25H2 版本中引入的「管理員保護」（Administrator Protection）功能，旨在取代傳統的使用者帳戶控制（UAC），提供更安全、更精細的權限管理，讓本地使用者僅在必要時才能取得管理員權限。作者詳細描述了該功能的工作原理，並分享了在內部預覽版本（insider preview builds）期間進行的安全研究。研究發現了多個漏洞，其中一個漏洞允許攻擊者繞過「管理員保護」機制，靜默地取得完整的管理員權限。作者指出，所有發現的問題均已向微軟報告並修復，修補已包含在官方發布的更新（如 KB5067036）或後續的安全公告中。目前（截至 2025 年 12 月 1 日），微軟已暫時禁用此功能，以處理應用程式相容性問題。",
    tags: ["Windows 11", "Administrator Protection", "UAC", "權限提升", "Windows 25H2", "漏洞"],
    title_en: "Research Reveals Vulnerability in Windows 11's New 'Administrator Protection' Feature: Mechanism Bypass Allows Theft of Full Administrator Privileges",
    summary_en: "This article introduces the 'Administrator Protection' feature, introduced in Windows 11 version 25H2. This feature is designed to replace traditional User Account Control (UAC), offering more secure and granular permission management, ensuring that local users only acquire administrator privileges when strictly necessary. The author details the function's operational principles and shares findings from security research conducted during internal preview builds. The research uncovered multiple vulnerabilities, one of which allows an attacker to bypass the 'Administrator Protection' mechanism and silently acquire full administrator privileges. The author notes that all discovered issues have been reported to Microsoft and patched, with the fix included in official releases (such as KB5067036) or subsequent security advisories. As of December 1, 2025, Microsoft has temporarily disabled this feature to address application compatibility issues.",
    tags_en: ["Windows 11", "Administrator Protection", "UAC", "Privilege Escalation", "Windows 25H2", "Vulnerability"],
    sources: [
      { name: "Google Project Zero", url: "https://projectzero.google/2026/26/windows-administrator-protection.html", lang: "EN" }
    ]
  }
];
