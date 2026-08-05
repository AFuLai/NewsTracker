// data-20260521.js — 2026-05-21
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-21"] = [
  {
    id: "20260521-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 CVE-2026-43494：rds 訊息處理中 op_nents 清理不當導致的記憶體釋放錯誤",
    summary: "本漏洞CVE-2026-43494存在於Linux核心的網路服務層（net/rds）中。問題出現在`rds_message_zcopy_from_user()`函式呼叫`iov_iter_get_pages2()`失敗時，雖然已釋放了固定頁面（pinned pages）並清除`rm->data.op_mmp_znotifier`，但卻未能正確清除`rm->data.op_nents`。當後續呼叫`rds_message_purge()`時，清理迴圈會錯誤地迭代一個非零的`op_nents`數量，導致重複釋放（double free）這些資源。修補建議是必須在`rds_message_zcopy_from_user()`函式中，當發生失敗時，正確地重置`op_nents`。由於原文未提供CVSS分數或具體影響範圍，實務影響為核心層面的資源管理錯誤，可能導致系統崩潰或惡意利用。建議系統管理員應升級到包含此修補的Linux核心版本，以避免此類記憶體管理漏洞。",
    tags: ["Linux 核心", "CVE-2026-43494", "net/rds", "記憶體管理", "double free"],
    title_en: "Linux Kernel CVE-2026-43494: Memory Release Error Due to Improper Cleanup of op_nents during rds Message Processing",
    summary_en: "This vulnerability, CVE-2026-43494, exists in the network service layer (net/rds) of the Linux kernel. The issue occurs in the `rds_message_zcopy_from_user()` function when the call to `iov_iter_get_pages2()` fails. Although the fixed pages are released and `rm->data.op_mmp_znotifier` is cleared, `rm->data.op_nents` is not correctly cleared. When `rds_message_purge()` is subsequently called, the cleanup loop incorrectly iterates over a non-zero `op_nents` count, leading to a double free of these resources. The suggested fix is to correctly reset `op_nents` within the `rds_message_zcopy_from_user()` function when failure occurs. Since the original text did not provide a CVSS score or specific impact scope, the practical impact is a core-level resource management error, which could potentially lead to system crashes or malicious exploitation. System administrators are advised to upgrade to a Linux kernel version containing this patch to prevent this type of memory management vulnerability.",
    tags_en: ["Linux Kernel", "CVE-2026-43494", "net/rds", "Memory Management", "double free"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43494", lang: "EN" }
    ]
  },
  {
    id: "20260521-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：t7xx 模組的訊息處理函數存在越界讀取漏洞 (CVE-2026-43495)",
    summary: "本漏洞存在於 Linux 核心的 `net: wwan: t7xx` 模組中，具體影響 `t7xx_port_enum_msg_handler()` 函數。該函數在處理來自行動數據機（modem）的訊息時，會使用 `port_count` 欄位作為迴圈的邊界，但未檢查訊息緩衝區是否包含足夠的資料。攻擊者若能讓數據機傳送一個過大的 `port_count`（例如 65535），而實際緩衝區極小（例如 12 位元組），將會觸發一個 Slab Out-of-Bounds Read 漏洞，導致讀取超過 262140 位元組的記憶體區域。修補建議包括在存取 port 訊息標頭欄位前，增加對 `sizeof(*port_msg)` 的檢查；在提取 `port_count` 後，增加 `struct_size()` 檢查；並在 `t7xx_parse_host_rt_data()` 中，加入剩餘緩衝區檢查，以防止越界讀取和有符號整數溢位。建議系統更新到修補此漏洞的 Linux 核心版本。",
    tags: ["Linux 核心", "CVE-2026-43495", "t7xx", "wwan", "越界讀取", "Linux 核心修補"],
    title_en: "Linux Kernel Patch: Out-of-bounds Read Vulnerability in t7xx Module Message Handling (CVE-2026-43495)",
    summary_en: "This vulnerability exists in the `net: wwan: t7xx` module of the Linux kernel, specifically affecting the `t7xx_port_enum_msg_handler()` function. This function uses the `port_count` field as the loop boundary when processing messages from a modem, but fails to check if the message buffer contains sufficient data. An attacker who can make the modem send an excessively large `port_count` (e.g., 65535) while the actual buffer is very small (e.g., 12 bytes) can trigger a Slab Out-of-Bounds Read vulnerability, leading to the reading of a memory region exceeding 262140 bytes. Suggested patches include adding a check for `sizeof(*port_msg)` before accessing the port message header; adding a `struct_size()` check after extracting `port_count`; and adding remaining buffer checks in `t7xx_parse_host_rt_data()` to prevent out-of-bounds reads and signed integer overflow. It is recommended that systems update to the Linux kernel version that patches this vulnerability.",
    tags_en: ["Linux Kernel", "CVE-2026-43495", "t7xx", "wwan", "Out-of-bounds Read", "Linux Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43495", lang: "EN" }
    ]
  },
  {
    id: "20260521-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：修復 net/sched red qdisc 處理流程中的潛在 Kernel Panic 漏洞",
    summary: "本篇公告指出 Linux 核心在網路排程（net/sched）的 red qdisc 處理流程中，存在一個潛在導致 Kernel Panic 的問題。當 red qdisc 具有子 qdisc（例如 qfq）時，如果父級 qdisc（如 tbf）嘗試從子 qdisc 檢索 skb，流程會先執行 peek()，再執行 dequeue()。問題出在 dequeue() 階段，red qdisc 會呼叫子 qdisc 的 dequeue()，但此時的處理方式有缺陷，可能導致系統崩潰。修補方案是將原有的 dequeue() 呼叫，改為使用 qdisc_dequeue_peeked() 方法。此修補旨在確保在檢索 skb 時，能正確地從 gso_skb 佇列獲取封包，避免不必要的資源競爭或錯誤的狀態轉換，從而提高核心的穩定性。建議所有使用 Linux 核心的系統管理員應更新至包含此修補的最新核心版本，以防止系統在特定網路負載下發生崩潰。",
    tags: ["Linux 核心", "net/sched", "red qdisc", "qfq", "Kernel Panic", "qdisc_dequeue_peeked"],
    title_en: "Linux Kernel: Fix for Potential Kernel Panic Vulnerability in net/sched red qdisc Handling Flow",
    summary_en: "This announcement points out a potential issue in the Linux kernel's network scheduling (net/sched) red qdisc handling process that could lead to a Kernel Panic. When a red qdisc has a child qdisc (e.g., qfq), if the parent qdisc (such as tbf) attempts to retrieve an skb from the child qdisc, the process first executes peek() and then executes dequeue(). The problem lies in the dequeue() stage: the red qdisc calls the child qdisc's dequeue(), but the current handling method is flawed, potentially causing system crashes. The fix involves changing the original dequeue() call to use the qdisc_dequeue_peeked() method. This patch aims to ensure that when retrieving skbs, packets are correctly obtained from the gso_skb queue, preventing unnecessary resource contention or incorrect state transitions, thereby enhancing kernel stability. System administrators using Linux kernels are advised to update to the latest kernel version containing this fix to prevent system crashes under specific network loads.",
    tags_en: ["Linux Kernel", "net/sched", "red qdisc", "qfq", "Kernel Panic", "qdisc_dequeue_peeked"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43496", lang: "EN" }
    ]
  },
  {
    id: "20260521-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：fbdev/udlfb 漏洞修補，防止使用後釋放（UAF）的記憶體存取",
    summary: "本漏洞存在於 Linux 核心的 fbdev/udlfb 驅動程式中。當使用 `dlfb_realloc_framebuffer()` 替換後端緩衝區時，如果使用者空間的記憶體映射（mmap PTEs）尚未失效，且在 USB 斷開時執行 `dlfb_ops_destroy()`，會導致使用後釋放（Use-After-Free, UAF）的狀況。這使得攻擊者能夠在使用者空間保留對已釋放核心頁面（freed kernel pages）的讀寫存取權限，構成嚴重的記憶體安全風險。修補措施是在 `dlfb_ops_mmap` 中加入 `vm_operations_struct`，並在 `dlfb_realloc_framebuffer()` 執行前，檢查並維護一個原子計數器（mmap_count）。若發現緩衝區仍被映射，則回傳 `-EBUSY`，從而防止在使用者空間持有過時 PTEs 的情況下進行緩衝區替換。此修補旨在強化核心對記憶體映射的追蹤能力，提升系統的穩定性和安全性。",
    tags: ["Linux 核心", "fbdev", "udlfb", "Use-After-Free", "記憶體安全", "CVE-2026-43497"],
    title_en: "Linux Kernel: fbdev/udlfb Vulnerability Patch Prevents Use-After-Free Memory Access",
    summary_en: "This vulnerability resides in the fbdev/udlfb driver within the Linux kernel. When `dlfb_realloc_framebuffer()` replaces the backend buffer, if the user-space memory mapping (mmap PTEs) has not been invalidated, and `dlfb_ops_destroy()` is executed upon USB disconnection, it leads to a Use-After-Free (UAF) condition. This allows an attacker to retain read/write access to freed kernel pages in user space, posing a severe memory safety risk. The patch involves adding `vm_operations_struct` within `dlfb_ops_mmap` and checking and maintaining an atomic counter (mmap_count) before executing `dlfb_realloc_framebuffer()`. If the buffer is still mapped, it returns `-EBUSY`, thereby preventing buffer replacement when user space holds stale PTEs. This patch aims to strengthen the kernel's ability to track memory mappings, enhancing system stability and security.",
    tags_en: ["Linux Kernel", "fbdev", "udlfb", "Use-After-Free", "Memory Safety", "CVE-2026-43497"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43497", lang: "EN" }
    ]
  },
  {
    id: "20260521-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 CVE-2026-43498：防止 GEM 物件重傳導致的資料損壞",
    summary: "本漏洞 CVE-2026-43498 存在於 Linux 核心的 accel/ivpu 驅動程式中。其本質問題是允許重傳（re-exporting）匯入的 GEM 緩衝區（imported GEM buffers）。當發生此行為時，會導致緩衝區的旗標設定（buffer flags settings）丟失，進而造成不正確的設備存取和資料損壞。為修復此問題，核心開發者透過新增一個自訂的 prime_handle_to_fd 回呼函式（callback）來檢查物件是否為匯入物，若為此類物件則返回 -EOPNOTSUPP，從而阻止其重傳。此修補已在 kernel.org 上公開，建議使用最新的 Linux 核心版本進行更新，以確保系統的資料完整性與設備存取安全。",
    tags: ["Linux 核心", "CVE-2026-43498", "accel/ivpu", "GEM 緩衝區", "資料損壞", "Linux 核心更新"],
    title_en: "Linux Kernel Fixes CVE-2026-43498: Preventing Data Corruption Due to GEM Object Re-export",
    summary_en: "The vulnerability CVE-2026-43498 resides in the accel/ivpu driver within the Linux kernel. The core issue is that it allows the re-exporting of imported GEM buffers. When this behavior occurs, it leads to the loss of buffer flag settings, resulting in incorrect device access and data corruption. To fix this issue, kernel developers introduced a custom prime_handle_to_fd callback function to check if an object is imported. If it is such an object, the function returns -EOPNOTSUPP, thereby preventing its re-export. This patch has been published on kernel.org, and users are advised to update to the latest Linux kernel version to ensure system data integrity and device access security.",
    tags_en: ["Linux Kernel", "CVE-2026-43498", "accel/ivpu", "GEM buffer", "data corruption", "Linux Kernel Update"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43498", lang: "EN" }
    ]
  },
  {
    id: "20260521-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 rtmutex 漏洞：移除 wait_task 替代 current 參數，避免 UAF 與狀態混亂",
    summary: "本修補針對 Linux 核心中的 rtmutex 機制，修正了 `remove_waiter()` 函數在處理 slowlock 路徑和 `rt_mutex_start_proxy_lock()` 進行 proxy-lock rollback 時的邏輯錯誤。當從 `futex_requeue()` 呼叫時，`remove_waiter()` 應使用傳入的 `waiter::task` 而非當前執行緒的 `current`。原設計導致三個主要問題：首先，rbtree dequeue 操作未持有 `waiter::task::pi_lock`；其次，等待任務的 `pi_blocked_on` 狀態未能清除，可能導致使用後釋放 (UAF) 指標；最後，`rt_mutex_adjust_prio_chain()` 處理了錯誤的最高優先級等待任務。修復建議是在所有相關操作中，將 `remove_waiter()` 函數的參數從使用 `current` 改為使用 `waiter::task`，以確保系統的穩定性和記憶體安全。",
    tags: ["Linux 核心", "rtmutex", "UAF", "slowlock", "Linux Kernel"],
    title_en: "Linux Kernel Fixes rtmutex Vulnerability: Replaces current Parameter with wait_task to Avoid UAF and State Corruption",
    summary_en: "This patch addresses a logic error within the Linux kernel's rtmutex mechanism, specifically in the `remove_waiter()` function when handling the slowlock path and during proxy-lock rollback via `rt_mutex_start_proxy_lock()`. When calling from `futex_requeue()`, `remove_waiter()` should use the passed `waiter::task` instead of the current thread's `current`. The original design led to three main issues: first, the rbtree dequeue operation failed to hold the `waiter::task::pi_lock`; second, the waiting task's `pi_blocked_on` state was not cleared, potentially leading to a Use-After-Free (UAF) condition; and finally, `rt_mutex_adjust_prio_chain()` processed the incorrect highest-priority waiting task. The fix recommends changing the parameter used by the `remove_waiter()` function from `current` to `waiter::task` in all relevant operations, ensuring system stability and memory safety.",
    tags_en: ["Linux Kernel", "rtmutex", "UAF", "slowlock", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43499", lang: "EN" }
    ]
  },
  {
    id: "20260521-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 IPv6 處理漏洞：recompressed SRH 導致的緩衝區溢寫 (CVE-2026-43501)",
    summary: "本漏洞位於 Linux 核心的 IPv6 處理機制，具體影響 `ipv6_rpl_srh_rcv()` 函數，處理 RFC 6554 來源路由標頭 (Source Routing Header, SRH) 時，在重新壓縮標頭的過程中，若交換操作導致共前綴長度減少，可能會產生比原始標頭更大的數據。當 `pskb_expand_head()` 函數在 `segments_left == 0` 時被限制時，後續的 `skb_push()` 操作會消耗未經檢查的額外緩衝區空間。最終，`skb_mac_header_rebuild()` 呼叫的 `skb_set_mac_header()` 會將計算出的 MAC 標頭長度寫入 `u16 mac_header` 欄位，而後續的 `memmove()` 操作會將 MAC 長度所需的位元組寫入超出原始 `skb->head` 區域的記憶體，造成越界寫入 (OOB write)。攻擊者只需透過在本地環回介面 (lo) 上發送單一 AF_INET6/SOCK_RAW/IPV6_HDRINCL 封包，即可觸發此漏洞。修補建議是擴展頭部 (head) 的機制，確保當剩餘空間小於推送大小加上 MAC 長度時，能額外請求足夠的空間，以確保重建的 MAC 標頭能夠正確容納。",
    tags: ["Linux 核心", "IPv6", "CVE-2026-43501", "SRH", "緩衝區溢寫", "skb"],
    title_en: "Linux Kernel Fixes IPv6 Handling Vulnerability: Buffer Overwrite Caused by Recompressed SRH (CVE-2026-43501)",
    summary_en: "This vulnerability resides in the Linux kernel's IPv6 handling mechanism, specifically affecting the `ipv6_rpl_srh_rcv()` function. When processing RFC 6554 Source Routing Headers (SRH), if the header is recompressed and the exchange operation causes a reduction in the common prefix length, it may generate data larger than the original header. When the `pskb_expand_head()` function is constrained when `segments_left == 0`, subsequent `skb_push()` operations consume unverified additional buffer space. Finally, `skb_set_mac_header()` called by `skb_mac_header_rebuild()` writes the calculated MAC header length into the `u16 mac_header` field, and a subsequent `memmove()` operation writes the required bytes for the MAC length into memory outside the original `skb->head` area, causing an Out-of-Bounds (OOB) write. An attacker can trigger this vulnerability simply by sending a single AF_INET6/SOCK_RAW/IPV6_HDRINCL packet on the local loopback interface (lo). The suggested fix is to expand the head mechanism to ensure that when the remaining space is less than the push size plus the MAC length, sufficient additional space is requested, ensuring that the rebuilt MAC header can correctly accommodate the data.",
    tags_en: ["Linux Kernel", "IPv6", "CVE-2026-43501", "SRH", "Buffer Overwrite", "skb"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43501", lang: "EN" }
    ]
  },
  {
    id: "20260521-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 net/rds 模組的零拷貝（zerocopy）訊息清理邏輯漏洞",
    summary: "本修補針對 Linux 核心的 net/rds 模組，解決了一個與零拷貝（zerocopy）傳送失敗相關的訊息清理邏輯漏洞。當零拷貝傳送在用戶頁面被固定（pinned）但訊息尚未附加到發送 socket 之前失敗時，原有的清理路徑會錯誤地推斷零拷貝狀態。具體來說，清理機制依賴 `rm->m_rs`，導致未排隊的訊息會被清理，彷彿它擁有正常的負載頁面所有權。然而，零拷貝的真正所有權應由 `op_mmp_znotifier` 來決定，與訊息是否已到達 socket 排隊狀態無關。修補建議是在 `rds_message_purge()` 函數中提前捕獲 `op_mmp_znotifier`，並將其作為清理的判斷依據。如果訊息已與 socket 關聯，則維持現有的完成路徑；否則，直接丟棄頁面固定帳務並釋放通知器，再放入負載頁面，以確保早期傳送失敗的清理流程與零拷貝的生命週期規則一致，同時不改變正常的排隊完成路徑。",
    tags: ["Linux 核心", "net/rds", "zerocopy", "核心漏洞", "Linux 網路堆疊"],
    title_en: "Linux Kernel Patch: Fixing a Message Cleanup Logic Vulnerability in the net/rds Module",
    summary_en: "This patch addresses a message cleanup logic vulnerability in the Linux kernel's net/rds module, related to zero-copy transmission failures. When a zero-copy transmission fails in user space while the message is pinned but not yet attached to the sending socket, the existing cleanup path incorrectly deduces the zero-copy state. Specifically, the cleanup mechanism relies on `rm->m_rs`, causing unqueued messages to be cleaned up as if they possessed normal payload page ownership. However, the true ownership of zero-copy should be determined by `op_mmp_znotifier`, independent of whether the message has reached the socket queue state. The patch suggests preemptively capturing `op_mmp_znotifier` within the `rds_message_purge()` function and using it as the basis for cleanup determination. If the message is already associated with a socket, the existing completion path is maintained; otherwise, the page pinning accounting is directly dropped and the notifier is released, and the page is re-inserted, ensuring that the cleanup process for early transmission failures aligns with zero-copy lifecycle rules, without altering the normal queue completion path.",
    tags_en: ["Linux Kernel", "net/rds", "zerocopy", "Kernel Vulnerability", "Linux Network Stack"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-43502", lang: "EN" }
    ]
  },
  {
    id: "20260521-009",
    trackers: ["security"],
    category: "漏洞與威脅情報",
    title: "Kimwolf 殭屍網路營運者被捕：美國與加拿大指控其大規模發動 DDoS 攻擊",
    summary: "加拿大當局逮捕了一名涉嫌建立和營運 Kimwolf 殭屍網路的 23 歲男子 Jacob Butler（暱稱 Dort）。Kimwolf 是一個快速擴散的物聯網（IoT）殭屍網路，過去六個月曾奴役數百萬設備，用於發動多次大規模分散式阻斷服務（DDoS）攻擊。這些攻擊目標包括數位相框、網路攝影機等傳統上被「防火牆」保護的設備。政府指出，Kimwolf 曾發動的 DDoS 攻擊量達到近 30 Tbps 的紀錄，造成數百萬美元的財產損失，並發出了超過 25,000 個攻擊指令。美國國務院和國防部已介入調查，並與國際執法夥伴合作，在三月已查獲 Kimwolf 以及 Aisuru、JackSkid、Mossad 等其他三個大型 DDoS 殭屍網路的技術基礎設施。警方指控 Butler 透過 IP 位址、帳號資訊和交易記錄等方式，營運並利用這些設備進行網路犯罪。Butler 在加拿大和美國均面臨刑事駭客指控。",
    tags: ["Kimwolf", "DDoS", "殭屍網路", "IoT", "Jacob Butler", "網路攻擊"],
    title_en: "Kimwolf Botnet Operator Arrested: US and Canada Accuse Him of Launching Large-Scale DDoS Attacks",
    summary_en: "Canadian authorities arrested 23-year-old Jacob Butler (alias Dort), who is suspected of establishing and operating the Kimwolf botnet. Kimwolf is a rapidly spreading IoT botnet that has enslaved millions of devices over the past six months, used to launch multiple large-scale Distributed Denial of Service (DDoS) attacks. These attacks targeted devices traditionally protected by 'firewalls,' such as digital photo frames and network cameras. Government sources indicate that the DDoS attacks launched by Kimwolf reached a record volume of nearly 30 Tbps, causing millions of dollars in property damage and issuing over 25,000 attack commands. The US Department of State and Department of Defense have intervened in the investigation, collaborating with international law enforcement partners to seize the technical infrastructure of Kimwolf, along with three other major DDoS botnets—Aisuru, JackSkid, and Mossad—in March. Police accuse Butler of operating and exploiting these devices for cybercrime using methods such as IP addresses, account information, and transaction records. Butler faces criminal hacking charges in both Canada and the United States.",
    tags_en: ["Kimwolf", "DDoS", "Botnet", "IoT", "Jacob Butler", "Cyberattack"],
    sources: [
      { name: "Krebs on Security", url: "https://krebsonsecurity.com/2026/05/alleged-kimwolf-botmaster-dort-arrested-charged-in-u-s-and-canada", lang: "EN" }
    ]
  }
];
