// data-20260508.js — 2026-05-08
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-08"] = [
  {
    id: "20260508-001",
    trackers: ["security"],
    category: "重大事件",
    title: "教育平台 Canvas 遭 ShinyHunters 勒索攻擊，資料外洩威脅衝擊數千學術機構",
    summary: "廣泛使用的教育科技平台 Canvas（隸屬於 Instructure）近日遭受數據勒索攻擊，駭客組織 ShinyHunters 透過篡改登入頁面，威脅公開數億名學生和教職員的個人資料。此次事件導致 Instructure 被迫停用平台服務，嚴重影響了美國數千所學校和大學的課程管理與日常運作。Instructure 曾承認早期發生數據外洩，內容包括用戶名稱、電子郵件和學號，但未發現密碼、生日或政府識別碼等敏感資訊。然而，攻擊者多次利用 Canvas 系統進行攻擊，甚至在過去的事件中，Instructure 曾被指控作為數據外洩的「機制」。攻擊者通常透過語音釣魚和社交工程手段取得存取權限。專家指出，這系列事件顯示了 Instructure 系統的安全性存在持續的漏洞，並警告用戶應警惕數據勒索的威脅。",
    tags: ["Canvas", "Instructure", "ShinyHunters", "數據勒索", "教育科技", "資料外洩"],
    title_en: "Educational Platform Canvas Hit by ShinyHunters Ransomware Attack, Data Leak Threat Impacts Thousands of Academic Institutions",
    summary_en: "The widely used educational technology platform Canvas (belonging to Instructure) recently suffered a data ransomware attack. The hacker group ShinyHunters compromised the login page, threatening to expose the personal data of hundreds of millions of students and faculty. This incident forced Instructure to suspend platform services, severely impacting course management and daily operations for thousands of schools and universities in the United States. Instructure previously acknowledged an early data leak, which included usernames, email addresses, and student IDs, but no sensitive information such as passwords, birthdays, or government identification numbers were found. However, attackers have repeatedly exploited the Canvas system, and in past incidents, Instructure has been accused of being a 'mechanism' for data leaks. Attackers typically gain access through vishing (voice phishing) and social engineering methods. Experts point out that this series of events reveals persistent security vulnerabilities in the Instructure system and warn users to be vigilant against the threat of data ransomware.",
    tags_en: ["Canvas", "Instructure", "ShinyHunters", "Data Ransomware", "EdTech", "Data Leak"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/05/canvas-breach-disrupts-schools-colleges-nationwide", lang: "EN" }
    ]
  },
  {
    id: "20260508-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 cgroup 任務遷移與迭代的競態條件漏洞",
    summary: "本文描述了 Linux 核心中一個與 cgroup 任務管理相關的競態條件（Race Condition）漏洞。當一個任務從 cset 遷移到 mg_tasks 時，如果一個正在進行的 css_task_iter 迭代器（iterator）的指針指向該任務，而任務已經被移動，迭代器會錯誤地在 mg_tasks 列表中推進，導致原本在 cset->tasks 列表中的任務，以及已排隊到 cset->mg_tasks 的任務，可能會被迭代器跳過（skip）。此漏洞的修復方法是在 cgroup_migrate_add_task() 函數中，於從 cset->tasks 移除任務之前，呼叫 css_set_skip_task_iters()。這能確保所有活躍的迭代器都能正確推進到 cset->tasks 列表中的下一個任務。雖然此競態條件在實際操作中難以觸發，但透過人工延遲 cgroup_procs_show() 等操作可以重現。此修復著重於提高系統的正確性，對效能影響極小。建議系統管理員應更新至修復了此競態條件的 Linux 核心版本。",
    tags: ["Linux 核心", "cgroup", "競態條件", "Task Migration", "CVE-2026-43439"],
    title_en: "Linux Kernel Fixes Race Condition Vulnerability in cgroup Task Transition and Iteration",
    summary_en: "This article describes a Race Condition vulnerability in the Linux kernel related to cgroup task management. When a task transitions from cset to mg_tasks, if a running css_task_iter iterator's pointer points to that task, and the task has already been moved, the iterator incorrectly advances within the mg_tasks list. This can cause tasks originally in the cset->tasks list, as well as tasks queued to cset->mg_tasks, to be skipped by the iterator. The fix involves calling css_set_skip_task_iters() within the cgroup_migrate_add_task() function, before removing the task from cset->tasks. This ensures that all active iterators correctly advance to the next task in the cset->tasks list. Although this race condition is difficult to trigger in actual operation, it can be reproduced by artificially delaying operations like cgroup_procs_show(). This fix focuses on improving system correctness and has minimal performance impact. System administrators are advised to update to the Linux kernel version that patches this race condition.",
    tags_en: ["Linux Kernel", "cgroup", "Race Condition", "Task Migration", "CVE-2026-43439"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43439", lang: "EN" }
    ]
  }
];
