// data-20260422.js — 2026-04-22
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-04-22"] = [
  {
    id: "20260422-001",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 26.4.2 與 iPadOS 26.4.2 安全更新，修補通知服務的資料記錄問題",
    summary: "蘋果公司於 2026 年 4 月 22 日發布了 iOS 26.4.2 和 iPadOS 26.4.2 的安全更新，旨在保護用戶設備。本次更新主要修補了「通知服務」（Notification Services）的一個日誌記錄問題。該問題可能導致標記為刪除的通知資料意外地保留在設備上。蘋果透過改善資料遮蔽（data redaction）機制來解決此漏洞，並為受影響的設備列出了支援範圍，包括 iPhone 11 及更新機型，以及多款 iPad Pro、iPad Air 等。用戶應儘快更新至最新版本，以確保設備的資料隱私與安全性。",
    tags: ["Apple", "iOS 26.4.2", "iPadOS 26.4.2", "CVE-2026-28950", "通知服務", "資料隱私"],
    title_en: "Apple Releases iOS 26.4.2 and iPadOS 26.4.2 Security Update to Patch Notification Service Data Logging Issue",
    summary_en: "Apple released security updates for iOS 26.4.2 and iPadOS 26.4.2 on April 22, 2026, aimed at protecting user devices. This update primarily addresses a logging issue within 'Notification Services.' The vulnerability could potentially cause notification data marked for deletion to be unintentionally retained on the device. Apple resolved this vulnerability by improving the data redaction mechanism and listed supported devices, including iPhone 11 and newer models, as well as various iPad Pro and iPad Air models. Users are advised to update to the latest version promptly to ensure the data privacy and security of their devices.",
    tags_en: ["Apple", "iOS 26.4.2", "iPadOS 26.4.2", "CVE-2026-28950", "Notification Services", "Data Privacy"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127002", lang: "EN" }
    ]
  },
  {
    id: "20260422-002",
    trackers: ["os", "security"],
    category: "Apple",
    title: "Apple 發布 iOS 18.7.8 與 iPadOS 18.7.8 安全更新，修復通知服務的資料記錄錯誤",
    summary: "蘋果公司於 2026 年 4 月 22 日發布了 iOS 18.7.8 和 iPadOS 18.7.8 的安全更新。本次更新主要針對「通知服務」（Notification Services）中的一個日誌記錄問題進行修復。該漏洞（CVE-2026-28950）導致標記為刪除的通知內容可能意外地保留在設備上，影響範圍涵蓋多款 iPhone 和 iPad 型號，包括 iPhone 15、iPhone 16 系列以及多代 iPad Pro/Air 等。蘋果透過改善資料遮蔽（data redaction）機制來解決此問題，旨在提升用戶隱私和資料管理的安全性和準確性。用戶應儘快更新至最新版本以修補此安全漏洞。",
    tags: ["Apple", "iOS 18.7.8", "iPadOS 18.7.8", "CVE-2026-28950", "通知服務", "資料遮蔽"],
    title_en: "Apple releases iOS 18.7.8 and iPadOS 18.7.8 security update to fix notification service data logging error",
    summary_en: "Apple released security updates for iOS 18.7.8 and iPadOS 18.7.8 on April 22, 2026. This update primarily addresses a logging issue within 'Notification Services.' The vulnerability (CVE-2026-28950) could cause notification content marked for deletion to be unintentionally retained on the device, affecting multiple iPhone and iPad models, including iPhone 15, iPhone 16 series, and various generations of iPad Pro/Air. Apple resolved this issue by improving the data redaction mechanism, aiming to enhance user privacy and the security and accuracy of data management. Users are advised to update to the latest version promptly to patch this security vulnerability.",
    tags_en: ["Apple", "iOS 18.7.8", "iPadOS 18.7.8", "CVE-2026-28950", "Notification Services", "Data Redaction"],
    sources: [
      { name: "Apple Security Releases", url: "https://support.apple.com/en-us/127003", lang: "EN" }
    ]
  }
];
