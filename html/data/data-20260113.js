// data-20260113.js — 2026-01-13
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-01-13"] = [
  {
    id: "20260113-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 HFSPlus 漏洞 (CVE-2025-68767)：修復 inode 模式驗證問題",
    summary: "本漏洞 CVE-2025-68767 存在於 Linux 核心的 HFSPlus 檔案系統處理元件中。問題點在於當從磁碟載入檔案時，如果 16 位元的「模式」（mode）欄位中的 S_IFMT 位元遭到破壞，可能導致 inode->i_mode 的 S_IFMT 位元變得不正確（bogus）。這可能影響系統對檔案類型和權限的正確判斷。此漏洞已在 Linux 核心中得到修復，修補內容強調了在處理模式欄位時，必須嚴格驗證 inode 模式的完整性，特別是針對 Mac OS 8/9 時代留下的保留欄位邏輯。建議系統管理員應升級至包含此修補的最新 Linux 核心版本，以確保檔案系統操作的安全性與資料完整性。",
    tags: ["Linux 核心", "HFSPlus", "CVE-2025-68767", "inode", "檔案系統", "Linux 安全"],
    title_en: "Linux Kernel HFSPlus Vulnerability (CVE-2025-68767): Fixing Inode Mode Validation Issue",
    summary_en: "This vulnerability, CVE-2025-68767, resides in the HFSPlus file system handling component of the Linux kernel. The issue arises when loading files from disk; if the S_IFMT bit in the 16-bit 'mode' field is corrupted, it may cause the S_IFMT bit in inode->i_mode to become incorrect (bogus). This could affect the system's accurate determination of file type and permissions. This vulnerability has been fixed in the Linux kernel, with the patch emphasizing that the integrity of the inode mode must be strictly validated when processing the mode field, especially concerning the reserved field logic left over from the Mac OS 8/9 era. System administrators are advised to upgrade to the latest Linux kernel version containing this patch to ensure the security and data integrity of file system operations.",
    tags_en: ["Linux Kernel", "HFSPlus", "CVE-2025-68767", "inode", "File System", "Linux Security"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68767", lang: "EN" }
    ]
  },
  {
    id: "20260113-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 fqdir_pre_exit() 處理封包碎片時可能發生的死鎖問題",
    summary: "本修補針對 Linux 核心中的一個網路堆疊（networking stack）問題，特別是在處理封包碎片（fragmentation）時可能導致的死鎖（deadlock）狀況。問題發生於網路介面（如 modprobe 載入驅動程式）退出時，`conntrack` 模組在清理網路列表時，可能會與處理碎片佇列（fragment queue）的流程發生衝突。當 `nf_defrag_ipv6` 載入時，其網路命名空間（netns）退出鉤子會在 `conntrack` 的退出鉤子之後執行，導致資源鎖定順序錯誤。修補方案要求在 `fqdir_pre_exit()` 函數中，強制清空所有待處理的封包碎片（skbs），以釋放與 `conntrack` 相關的引用，確保在 `conntrack` 清理之前完成碎片佇列的處理。此外，還增加了在計時器到期處理程序中，當發現碎片佇列已標記為失效時，也執行清空操作，以防止在執行預退出清理時有封包意外進入。此修補旨在提高系統在網路資源釋放過程中的穩定性。",
    tags: ["Linux 核心", "conntrack", "封包碎片", "死鎖", "networking stack", "fqdir_pre_exit"],
    title_en: "Linux Kernel Patch: Fixes Potential Deadlock When Handling Packet Fragments in fqdir_pre_exit()",
    summary_en: "This patch addresses a networking stack issue within the Linux kernel, specifically a potential deadlock condition that can occur when handling packet fragmentation. The issue arises when a network interface (such as one loading a driver via modprobe) exits; the `conntrack` module, while cleaning up network lists, can conflict with the process handling the fragment queue. When `nf_defrag_ipv6` is loaded, its network namespace exit hook executes after the `conntrack` exit hook, leading to an incorrect resource locking order. The fix requires forcefully clearing all pending packet fragments (skbs) within the `fqdir_pre_exit()` function. This action releases references related to `conntrack`, ensuring that fragment queue processing is completed before `conntrack` cleanup. Additionally, the patch adds a clearing operation to the timer expiration handler, which executes when the fragment queue is found to be invalid, preventing packets from unexpectedly entering during pre-exit cleanup. This patch aims to enhance system stability during the process of releasing network resources.",
    tags_en: ["Linux Kernel", "conntrack", "packet fragmentation", "deadlock", "networking stack", "fqdir_pre_exit"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68768", lang: "EN" }
    ]
  },
  {
    id: "20260113-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統漏洞：未處理恢復同步資料錯誤導致核心崩潰 (CVE-2025-68769)",
    summary: "本漏洞存在於 Linux 核心的 f2fs 文件系統驅動程式中，具體為 `f2fs_recover_fsync_data()` 函數的錯誤處理不足。當使用者嘗試以只讀 (ro) 模式，並使用 `norecovery` 或 `disable_roll_forward` 掛載選項掛載包含受損狀態的 f2fs 映像檔時，如果 `f2fs_recover_fsync_data()` 返回錯誤代碼，核心未能正確捕獲此錯誤，導致在 `vfs_get_tree()` 函數中返回了錯誤的陽性錯誤號碼。這最終會觸發核心層級的 `BUG` 或 `Oops`，導致系統崩潰（Kernel Panic）。修補建議是更新 Linux 核心，確保在處理 f2fs 恢復同步資料時，能正確處理所有可能的錯誤返回值，避免將錯誤代碼誤傳給 VFS 層級。",
    tags: ["Linux 核心", "f2fs", "CVE-2025-68769", "Kernel Panic", "vfs_get_tree", "文件系統"],
    title_en: "Linux f2fs Filesystem Vulnerability: Improper Handling of Recovery Sync Data Error Causes Kernel Crash (CVE-2025-68769)",
    summary_en: "This vulnerability resides in the f2fs filesystem driver within the Linux kernel, specifically due to insufficient error handling in the `f2fs_recover_fsync_data()` function. When a user attempts to mount an f2fs image containing a damaged state using read-only (ro) mode along with the `norecovery` or `disable_roll_forward` mount options, if `f2fs_recover_fsync_data()` returns an error code, the kernel fails to correctly capture this error. This results in an incorrect positive error number being returned in the `vfs_get_tree()` function. This ultimately triggers a kernel-level `BUG` or `Oops`, leading to a system crash (Kernel Panic). The recommended fix is to update the Linux kernel to ensure that all possible error return values are correctly handled when recovering sync data for f2fs, preventing the error code from being mistakenly passed to the VFS layer.",
    tags_en: ["Linux Kernel", "f2fs", "CVE-2025-68769", "Kernel Panic", "vfs_get_tree", "Filesystem"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68769", lang: "EN" }
    ]
  },
  {
    id: "20260113-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：bnxt_en 驅動程式修復 XDP_TX 路徑的事件旗標處理錯誤",
    summary: "本漏洞涉及 Linux 核心中的 bnxt_en 網路介面卡驅動程式。問題出在 XDP_TX 動作的事件旗標清除邏輯有誤。在 `__bnxt_poll_work()` -> `bnxt_rx_pkt()` -> `bnxt_rx_xdp()` 流程中，如果 `BNXT_TX_EVENT` 旗標在早期迭代被設定，但由於 TX 環緩衝區空間不足，導致後續的 `__bnxt_xmit_xdp()` 呼叫未能重新設定該旗標，將造成 TX 生產端誤判，而驅動程式卻沒有正確觸發 TX 門鈴（TX doorbell）。最終症狀是與 TX XDP 環緩衝區相關的 RX 環緩衝區會逐漸變空，導致所有傳入的資料封包（packets）被丟棄。修復建議是，只有在成功呼叫 `__bnxt_xmit_xdp()` 後，才應清除 `BNXT_RX_EVENT` 旗標。",
    tags: ["Linux 核心", "bnxt_en", "XDP", "網路驅動程式", "Linux 核心元件"],
    title_en: "Linux Kernel: bnxt_en Driver Fixes Event Flag Handling Error in XDP_TX Path",
    summary_en: "This vulnerability involves the bnxt_en network interface card driver within the Linux kernel. The issue lies in an incorrect event flag clearing logic for the XDP_TX operation. In the `__bnxt_poll_work()` -> `bnxt_rx_pkt()` -> `bnxt_rx_xdp()` flow, if the `BNXT_TX_EVENT` flag is set in an early iteration, but subsequent calls to `__bnxt_xmit_xdp()` fail due to insufficient TX ring buffer space, the TX producer makes an incorrect judgment, and the driver fails to correctly trigger the TX doorbell. The final symptom is that the RX ring buffer associated with the TX XDP ring gradually empties, causing all incoming data packets to be dropped. The suggested fix is that the `BNXT_RX_EVENT` flag should only be cleared after a successful call to `__bnxt_xmit_xdp()`.",
    tags_en: ["Linux Kernel", "bnxt_en", "XDP", "Network Driver", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68770", lang: "EN" }
    ]
  },
  {
    id: "20260113-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 ocfs2 模組 BUG：防止因分配鏈列表錯誤導致核心崩潰",
    summary: "本漏洞報告指出 Linux 核心的 ocfs2 檔案系統模組存在一個核心 BUG。當呼叫 `ocfs2_find_victim_chain()` 函式時，如果分配鏈列表（allocation chain list）的 `cl_next_free_rec` 欄位為 0，會觸發 `BUG_ON(!cl->cl_next_free_rec)` 條件，導致核心發生崩潰（panic）。此問題的根本原因在於在執行 `ocfs2_find_victim_chain()` 之前，缺乏對分配鏈列表狀態的充分檢查。修復措施是在 `ocfs2_claim_suballoc_bits()` 函式中加入條件判斷，確保當 `cl_next_free_rec` 等於 0 或大於鏈總數 `cl_count` 時，系統不會繼續執行，而是改用 `ocfs2_error()` 輸出錯誤日誌，從而避免核心崩潰。此修補屬於核心層級的穩定性改進，建議使用已修補的 Linux 核心版本。",
    tags: ["Linux 核心", "ocfs2", "BUG", "核心崩潰", "Linux 檔案系統"],
    title_en: "Linux Kernel Fixes ocfs2 Module BUG: Prevents Kernel Crash Due to Allocation Chain List Error",
    summary_en: "This vulnerability report points out a core BUG in the Linux kernel's ocfs2 file system module. When calling the `ocfs2_find_victim_chain()` function, if the `cl_next_free_rec` field of the allocation chain list is 0, it triggers the `BUG_ON(!cl->cl_next_free_rec)` condition, causing a kernel panic. The root cause of this issue is the lack of sufficient checks on the allocation chain list status before executing `ocfs2_find_victim_chain()`. The fix involves adding conditional checks within the `ocfs2_claim_suballoc_bits()` function. This ensures that if `cl_next_free_rec` is equal to 0 or greater than the total chain count `cl_count`, the system will not proceed, but instead will use `ocfs2_error()` to output an error log, thereby preventing a kernel crash. This patch is a core-level stability improvement and the use of the patched Linux kernel version is recommended.",
    tags_en: ["Linux Kernel", "ocfs2", "BUG", "Kernel Panic", "Linux File System"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68771", lang: "EN" }
    ]
  },
  {
    id: "20260113-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統漏洞修復：避免寫回時更新壓縮上下文的競態條件問題",
    summary: "本篇公告報告了 Linux 核心 f2fs 文件系統的一個漏洞，該漏洞涉及在資料寫回（writeback）過程中，由於多個執行緒同時操作導致的競態條件（race condition）。具體而言，當系統執行 `fsync`、`setattr` 或 `ioctl` 等操作時，如果 inode 狀態不一致，可能導致在計算壓縮上下文（compression context）時發生除零錯誤（divide by zero）。此問題的根本原因是缺乏對 `f2fs_write_cache_pages` 呼叫次數的同步追蹤。修復建議是在 `f2fs_inode_info` 結構中引入一個原子型變數 `.writeback` 來追蹤呼叫此函式的執行緒數量，並使用互斥鎖（`.i_sem`）保護相關更新，同時在設定壓縮上下文時增加檢查，以避免與 `writepages` 過程發生競態。建議系統維護者應升級至修復了此問題的 Linux 核心版本，以確保文件系統操作的穩定性和資料完整性。",
    tags: ["Linux 核心", "f2fs", "CVE-2025-68772", "文件系統", "競態條件", "writeback"],
    title_en: "Linux f2fs Filesystem Vulnerability Fix: Addressing Race Condition in Compression Context Update During Writeback",
    summary_en: "This announcement reports a vulnerability in the Linux kernel's f2fs filesystem. The vulnerability involves a race condition caused by multiple threads simultaneously operating during the data writeback process. Specifically, when the system executes operations such as `fsync`, `setattr`, or `ioctl`, an inconsistent inode state can lead to a divide-by-zero error during the calculation of the compression context. The root cause of this issue is the lack of synchronized tracking for the number of calls to `f2fs_write_cache_pages`. The proposed fix involves introducing an atomic variable, `.writeback`, within the `f2fs_inode_info` structure to track the number of threads calling this function, and using a mutex lock (`.i_sem`) to protect related updates. Additionally, a check must be added when setting the compression context to prevent races with the `writepages` process. System maintainers are advised to upgrade to a Linux kernel version that has patched this issue to ensure the stability of filesystem operations and data integrity.",
    tags_en: ["Linux kernel", "f2fs", "CVE-2025-68772", "filesystem", "race condition", "writeback"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68772", lang: "EN" }
    ]
  },
  {
    id: "20260113-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞 CVE-2025-68773：fsl-cpm 驅動程式在 SPI 傳輸中存在緩衝區溢出風險",
    summary: "本漏洞 CVE-2025-68773 存在於 Linux 核心的 `spi: fsl-cpm` 驅動程式中。問題源於核心提交 `8ad6249c51d0` 引入了動態分配的 bounce buffer，其大小與傳輸大小一致。當傳輸的長度為奇數時，原有的程式碼未能進行長度奇偶性檢查，導致在切換到 16 位元模式時發生緩衝區溢出（buffer overrun）。此漏洞的修復要求在切換到 16 位元模式前，增加缺失的長度奇偶性驗證，並在長度為偶數時維持在 8 位元模式。此類核心層級的漏洞，可能影響使用特定 SPI 設備的 Linux 系統，建議系統管理員應關注 kernel.org 的安全更新，並升級到已修補的核心版本以防止潛在的記憶體安全風險。",
    tags: ["Linux 核心", "CVE-2025-68773", "spi", "fsl-cpm", "緩衝區溢出", "kernel.org"],
    title_en: "Linux Kernel Vulnerability CVE-2025-68773: Buffer Overflow Risk in fsl-cpm Driver during SPI Transfer",
    summary_en: "The vulnerability CVE-2025-68773 resides in the `spi: fsl-cpm` driver within the Linux kernel. The issue stems from a dynamic bounce buffer introduced by kernel commit `8ad6249c51d0`, which allocates a size matching the transfer size. When the transfer length is an odd number, the original code failed to perform an odd/even length check, leading to a buffer overrun when switching to 16-bit mode. The fix for this vulnerability requires adding the missing odd/even length validation before switching to 16-bit mode, and maintaining 8-bit mode when the length is even. This type of kernel-level vulnerability may affect Linux systems utilizing specific SPI devices. System administrators are advised to monitor kernel.org for security updates and upgrade to the patched kernel version to prevent potential memory safety risks.",
    tags_en: ["Linux Kernel", "CVE-2025-68773", "spi", "fsl-cpm", "buffer overflow", "kernel.org"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68773", lang: "EN" }
    ]
  },
  {
    id: "20260113-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux hfsplus 核心漏洞修復：修復 hfs_bnode_find() 競態條件導致的參考計數錯誤",
    summary: "本漏洞存在於 Linux 核心的 hfsplus 檔案系統元件中，涉及 `hfs_bnode_find()` 函數在多執行緒環境下（特別是 `sync()` 與 `link()` 同時呼叫時）的競態條件。當兩個執行緒（Thread A 和 Thread B）同時嘗試查找或創建同一個 bnode 時，如果沒有正確地取得參考計數（reference count），可能導致一個執行緒創建了 bnode 並設置了 `refcnt=1`，而另一個執行緒在處理時沒有正確地更新或取得參考。這最終會導致系統在釋放節點時觸發 `BUG_ON(!atomic_read(&node->refcnt))` 錯誤。修復方法是在重用由其他執行緒新創建的 bnode 時，必須呼叫 `hfs_bnode_get()` 來確保參考計數正確更新。此問題已在過去的 HFS 版本中修復，但在 HFS+ 中持續存在，本次修補旨在解決此核心元件的穩定性問題。",
    tags: ["Linux 核心", "hfsplus", "hfs_bnode_find", "競態條件", "參考計數", "CVE-2025-68774"],
    title_en: "Linux hfsplus Core Vulnerability Fix: Addressing Reference Count Errors Caused by hfs_bnode_find() Race Condition",
    summary_en: "This vulnerability resides in the hfsplus file system component of the Linux kernel, involving a race condition within the `hfs_bnode_find()` function in a multi-threaded environment (specifically when `sync()` and `link()` are called concurrently). When two threads (Thread A and Thread B) simultaneously attempt to find or create the same bnode, if the reference count is not correctly acquired, it may result in one thread creating the bnode and setting `refcnt=1`, while the other thread fails to correctly update or acquire the reference during processing. This ultimately causes the system to trigger a `BUG_ON(!atomic_read(&node->refcnt))` error when releasing the node. The fix requires calling `hfs_bnode_get()` when reusing a bnode created by another thread, ensuring the reference count is correctly updated. This issue has been fixed in previous HFS versions but persists in HFS+, and this patch aims to resolve this core component's stability issue.",
    tags_en: ["Linux Kernel", "hfsplus", "hfs_bnode_find", "Race Condition", "Reference Count", "CVE-2025-68774"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68774", lang: "EN" }
    ]
  },
  {
    id: "20260113-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心發現 Handshake 處理漏洞：重複取消請求導致 Socket 參考計數器溢出",
    summary: "本漏洞存在於 Linux 核心的網路握手（handshake）處理機制中。當一個握手請求被取消後，雖然它會從 `handshake_net->hn_requests` 清除，但仍會保留在 `handshake_rhashtbl` 中。如果針對同一握手請求發出第二次取消（cancellation）請求，且該請求未設定 `HANDSHAKE_F_REQ_COMPLETED` 標誌，系統將會繼續處理，並在過程中對 socket 進行額外的參考計數（reference count），最終導致參考計數器溢出（refcount underflow）。此問題可能發生在握手逾時的場景，例如 SUNRPC 客戶端發送 AUTH_TLS 探測後，因 `tlshd` 問題未跟進 ClientHello，導致伺服器和客戶端分別觸發 FIN 或取消請求。修補建議是在處理待定取消路徑（pending cancel path）中加入 `test_and_set_bit(HANDSHAKE_F_REQ_COMPLETED)`，以確保重複的取消請求能夠被正確偵測和處理。",
    tags: ["Linux 核心", "CVE-2025-68775", "Socket", "參考計數器", "網路握手", "Linux Kernel"],
    title_en: "Linux Kernel discovers Handshake handling vulnerability: Duplicate cancellation request causes Socket reference counter overflow",
    summary_en: "This vulnerability exists in the network handshake handling mechanism of the Linux kernel. When a handshake request is canceled, although it is cleared from `handshake_net->hn_requests`, it remains in `handshake_rhashtbl`. If a second cancellation request is issued for the same handshake request, and this request does not set the `HANDSHAKE_F_REQ_COMPLETED` flag, the system continues processing and increments the socket's reference count additionally during the process, ultimately leading to a reference counter underflow. This issue may occur in scenarios of handshake timeouts, such as when a SUNRPC client sends an AUTH_TLS probe, but due to a `tlshd` issue, fails to follow up with a ClientHello, causing the server and client to separately trigger FIN or cancellation requests. The suggested fix is to add `test_and_set_bit(HANDSHAKE_F_REQ_COMPLETED)` in the pending cancel path to ensure that duplicate cancellation requests can be correctly detected and handled.",
    tags_en: ["Linux Kernel", "CVE-2025-68775", "Socket", "Reference Counter", "Network Handshake", "Linux Kernel"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68775", lang: "EN" }
    ]
  },
  {
    id: "20260113-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞修復：net/hsr 模組修復 NULL 指標解引用，防止系統崩潰",
    summary: "本漏洞位於 Linux 核心的網路處理模組 net/hsr 中。問題出在 `prp_get_untagged_frame()` 函式，該函式呼叫 `__pskb_copy()` 建立 `frame->skb_std`，但未檢查該記憶體分配是否失敗。若 `__pskb_copy()` 返回 NULL，後續會呼叫 `skb_clone()` 時傳入 NULL 指標，導致系統發生一般保護例外（General Protection Fault），造成系統崩潰。修復建議是在 `__pskb_copy()` 之後立即加入 NULL 指標檢查，以確保記憶體分配失敗時能優雅地處理，避免核心崩潰。此類漏洞屬於核心層級的記憶體管理錯誤，影響範圍為使用相關網路功能（如 hsr）的 Linux 系統。",
    tags: ["Linux 核心", "net/hsr", "NULL 指標", "記憶體管理", "CVE-2025-68776"],
    title_en: "Linux Kernel Vulnerability Fix: net/hsr Module Fixes NULL Pointer Dereference, Preventing System Crash",
    summary_en: "This vulnerability resides in the Linux kernel's network processing module, net/hsr. The issue is located in the `prp_get_untagged_frame()` function, which calls `__pskb_copy()` to create `frame->skb_std` but fails to check if the memory allocation succeeded. If `__pskb_copy()` returns NULL, subsequent calls to `skb_clone()` will pass a NULL pointer, leading to a General Protection Fault and causing system crashes. The recommended fix is to immediately add a NULL pointer check after `__pskb_copy()` to ensure graceful handling if memory allocation fails, thereby preventing kernel crashes. This type of vulnerability is a kernel-level memory management error, affecting Linux systems that utilize related network functionalities (such as hsr).",
    tags_en: ["Linux Kernel", "net/hsr", "NULL Pointer", "Memory Management", "CVE-2025-68776"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68776", lang: "EN" }
    ]
  },
  {
    id: "20260113-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 ti_am335x_tsc 模組的越界存取漏洞 (CVE-2025-68777)",
    summary: "本漏洞 CVE-2025-68777 存在於 Linux 核心的 ti_am335x_tsc 模組中，屬於典型的越界存取（Out-of-bounds access）錯誤。問題出在原始的驗證邏輯 'wire_order[i] > ARRAY_SIZE(config_pins)'，該條件允許索引值等於陣列大小，導致當將其用作 'config_pins' 的索引時發生越界存取。由於 config_pins 陣列只有 4 個元素（有效索引為 0-3），正確的驗證範圍應為小於等於陣列大小減一。此修復透過將驗證條件從 '>' 改為 '>=' 來修正此邏輯錯誤。由於原文未提供 CVSS 分數或具體影響範圍，實務影響為核心模組的穩定性與安全性問題。建議系統管理員應升級至已修復的 Linux 核心版本，以避免潛在的記憶體操作錯誤。",
    tags: ["Linux 核心", "CVE-2025-68777", "ti_am335x_tsc", "越界存取", "Linux 核心修復"],
    title_en: "Linux Kernel Fixes Out-of-bounds Access Vulnerability in ti_am335x_tsc Module (CVE-2025-68777)",
    summary_en: "The vulnerability CVE-2025-68777 exists in the ti_am335x_tsc module of the Linux kernel and is a typical Out-of-bounds access error. The issue lies in the original validation logic 'wire_order[i] > ARRAY_SIZE(config_pins)', which allows the index value to equal the array size. This leads to an out-of-bounds access when used as an index for 'config_pins'. Since the config_pins array only has 4 elements (valid indices 0-3), the correct validation range should be less than array size minus one. This fix corrects the logical error by changing the validation condition from '>' to '>='. As the original text did not provide a CVSS score or specific impact scope, the practical impact is related to the stability and security of the kernel module. System administrators are advised to upgrade to the patched Linux kernel version to prevent potential memory manipulation errors.",
    tags_en: ["Linux Kernel", "CVE-2025-68777", "ti_am335x_tsc", "Out-of-bounds access", "Linux Kernel Fix"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68777", lang: "EN" }
    ]
  },
  {
    id: "20260113-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux btrfs 文件系統漏洞：交易日誌重放時可能導致目錄硬連結計數錯誤，造成系統掛載失敗",
    summary: "本漏洞存在於 Linux 核心的 btrfs 文件系統中。當用戶在一個交易（transaction）中，執行了移動目錄、創建新文件，並在多次 fsync 操作後發生斷電等意外情況時，btrfs 在進行日誌重放（log replay）時，可能無法正確處理目錄的硬連結（hard link）計數。具體來說，系統會為目錄的舊父目錄和新父目錄都建立 INODE_REF，導致目錄的硬連結計數超過預期（例如，計數為 2 而非 1）。當系統嘗試寫回子卷樹的區段緩衝區時，文件系統檢查會偵測到此不一致性，進而導致整個文件系統掛載失敗（mount failure）。修補建議是升級到已修復的 Linux 核心版本，以確保 btrfs 能夠正確處理跨交易的目錄移動和文件操作。",
    tags: ["btrfs", "Linux 核心", "文件系統", "硬連結", "CVE-2025-68778"],
    title_en: "Linux btrfs Filesystem Vulnerability: Directory Hardlink Count Error During Transaction Log Replay May Cause System Mount Failure",
    summary_en: "This vulnerability exists in the btrfs filesystem within the Linux kernel. When a user performs operations such as moving directories and creating new files within a single transaction, and an unexpected event like a power outage occurs after multiple fsync operations, btrfs may fail to correctly process the hardlink count of directories during log replay. Specifically, the system establishes INODE_REF for both the old parent directory and the new parent directory, causing the directory's hardlink count to exceed the expected value (for example, counting as 2 instead of 1). When the system attempts to write back the segment buffer of the subvolume tree, the filesystem check detects this inconsistency, leading to the entire filesystem mount failure. The recommended fix is to upgrade to a patched Linux kernel version to ensure btrfs can correctly handle directory moves and file operations across transactions.",
    tags_en: ["btrfs", "Linux Kernel", "Filesystem", "Hardlink", "CVE-2025-68778"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68778", lang: "EN" }
    ]
  },
  {
    id: "20260113-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心：mlx5e 驅動程式面臨 PSP 雙重註銷導致的參考計數器溢出漏洞 (CVE-2025-68779)",
    summary: "本漏洞存在於 Linux 核心的 `net/mlx5e` 驅動程式中，具體為 PSP (Profile State Processor) 資源的處理邏輯缺陷。當系統在特定條件下執行設備移除流程時，會導致 `mlx5e_psp_unregister` 函數被重複呼叫，造成參考計數器（refcount）發生「underflow」（計數器溢出）。這類錯誤會引發使用後釋放（use-after-free）的記憶體安全問題。此問題主要影響使用 `mlx5e` 驅動程式的系統，攻擊者可能透過觸發設備移除流程來執行任意程式碼或導致系統崩潰。開發者應避免在 `_mlx5e_remove` 路徑中直接移除 PSP，因為 PSP 的清理工作應在完整的 Profile 清理流程中完成。建議系統管理員應升級至修補了此缺陷的 Linux 核心版本以修復此漏洞。",
    tags: ["Linux 核心", "mlx5e", "PSP", "refcount underflow", "use-after-free", "CVE-2025-68779"],
    title_en: "Linux Kernel: mlx5e Driver Faces Reference Counter Overflow Vulnerability Due to PSP Double Unregistration (CVE-2025-68779)",
    summary_en: "This vulnerability exists in the `net/mlx5e` driver within the Linux kernel, specifically due to a flaw in the handling logic of Profile State Processor (PSP) resources. When the system executes the device removal process under specific conditions, it causes the `mlx5e_psp_unregister` function to be called redundantly, leading to a reference counter (refcount) 'underflow' (counter overflow). This type of error results in a use-after-free memory safety issue. The problem primarily affects systems utilizing the `mlx5e` driver. An attacker may exploit this by triggering the device removal process to execute arbitrary code or cause a system crash. Developers should avoid directly removing the PSP within the `_mlx5e_remove` path, as PSP cleanup should be completed during the full Profile cleanup process. System administrators are advised to upgrade to a Linux kernel version that patches this defect to mitigate this vulnerability.",
    tags_en: ["Linux Kernel", "mlx5e", "PSP", "refcount underflow", "use-after-free", "CVE-2025-68779"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68779", lang: "EN" }
    ]
  },
  {
    id: "20260113-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：Deadline 佇列在離線狀態下錯誤設定 CPU 可用狀態，可能導致任務無法執行",
    summary: "本漏洞存在於 Linux 核心的排程（scheduling）機制，特別是與 Deadline 佇列（runqueue）相關的 CPU 資源管理。當 Deadline 佇列處於離線（offline）狀態時，`cpudl_clear` 函數可能錯誤地設定 CPU 的 `free_cpus` 位元。如果此錯誤狀態發生在 CPU 連接到預設根域（default root domain）時，即使 CPU 已被拔除，該標誌仍可能保留錯誤狀態。後續，當其他 CPU 經過預設根域時，如果 `cpudl_find` 檢測到該 CPU 的 `free_cpus` 位元被設定，它可能會將 Deadline 任務推送到這個已關機的 CPU 上，導致任務無法執行。修補措施是修改 `cpudl_clear` 函數，使其能夠感知 Deadline 佇列的線上狀態，確保 `free_cpus` 遮罩能得到適當更新。同時，為了簡化和提高安全性，相關的 `cpudl_set/clear_freecpu` 函數已被移除，並調整了使用非原子性的 `__cpumask` 函數。",
    tags: ["Linux 核心", "Deadline 佇列", "CPU 資源管理", "sched/deadline", "free_cpus", "CVE-2025-68780"],
    title_en: "Linux Kernel Vulnerability: Deadline Runqueue Incorrectly Sets CPU Availability Status When Offline, Potentially Causing Task Failure",
    summary_en: "This vulnerability resides in the Linux kernel's scheduling mechanism, specifically related to CPU resource management involving the Deadline runqueue. When the Deadline runqueue is in an offline state, the `cpudl_clear` function may incorrectly set the CPU's `free_cpus` bit. If this erroneous state occurs when a CPU connects to the default root domain, the flag may retain the incorrect state even if the CPU has been removed. Subsequently, when other CPUs pass through the default root domain, if `cpudl_find` detects that the CPU's `free_cpus` bit is set, it may push a Deadline task onto this powered-down CPU, causing the task to fail. The patch involves modifying the `cpudl_clear` function to make it aware of the Deadline runqueue's online status, ensuring that the `free_cpus` mask is properly updated. Furthermore, for simplification and enhanced security, the related `cpudl_set/clear_freecpu` functions have been removed, and the usage of the non-atomic `__cpumask` function has been adjusted.",
    tags_en: ["Linux Kernel", "Deadline Runqueue", "CPU Resource Management", "sched/deadline", "free_cpus", "CVE-2025-68780"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-68780", lang: "EN" }
    ]
  },
  {
    id: "20260113-015",
    trackers: ["os", "security"],
    category: "Windows",
    title: "警告：Windows Secure Boot 憑證即將過期，需更新 KEK/DB 以維持系統安全與啟動功能",
    summary: "本公告提醒使用者，Windows Secure Boot 儲存的 Microsoft 憑證（包括 KEK 和 DB）即將接近過期。這些原始憑證（如 Microsoft Corporation KEK CA 2011、UEFI CA 2011 等）的過期，若未及時更新，將可能導致 Secure Boot 功能失效，進而使系統無法維持必要的安全修復，甚至可能影響 Windows 啟動管理器或 Secure Boot 本身的安全性。系統的憑證更新保護機制依賴韌體組件，若這些組件存在缺陷，可能導致憑證信任更新失敗或行為不可預測。因此，建議系統管理者必須仔細驗證並部署最新的憑證更新，以確保 Secure Boot 信任鏈的完整性，維持作業系統的預期安全保障。",
    tags: ["Windows Secure Boot", "KEK", "DB", "UEFI", "Microsoft", "憑證過期"],
    title_en: "Warning: Windows Secure Boot Certificates Are Expiring, KEK/DB Must Be Updated to Maintain System Security and Boot Functionality",
    summary_en: "This announcement reminds users that Microsoft certificates stored in Windows Secure Boot (including KEK and DB) are nearing expiration. The expiration of these original certificates (such as Microsoft Corporation KEK CA 2011, UEFI CA 2011, etc.), if not updated in a timely manner, could lead to the failure of the Secure Boot function. This, in turn, may prevent the system from maintaining necessary security patches and could even impact the security of the Windows Boot Manager or Secure Boot itself. The system's certificate update protection mechanism relies on firmware components; if these components contain flaws, it may lead to failed certificate trust updates or unpredictable behavior. Therefore, system administrators are advised to carefully validate and deploy the latest certificate updates to ensure the integrity of the Secure Boot trust chain and maintain the operating system's expected security guarantees.",
    tags_en: ["Windows Secure Boot", "KEK", "DB", "UEFI", "Microsoft", "Certificate Expiration"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-21265", lang: "EN" }
    ]
  }
];
