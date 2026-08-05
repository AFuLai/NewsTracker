// data-20260501.js — 2026-05-01
window.TRACKER_DAYS = window.TRACKER_DAYS || {};
window.TRACKER_DAYS["2026-05-01"] = [
  {
    id: "20260501-001",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 FUSE 漏洞 (CVE-2026-31694)：惡意 dirent 導致頁緩存溢位",
    summary: "本漏洞 CVE-2026-31694 存在於 Linux 核心的 FUSE (Filesystem in Userspace) 模組。攻擊者可利用惡意 FUSE 伺服器，回傳包含 oversized dirent 的資料，透過操縱 namelen 欄位，導致核心在將 dirent 複製到頁緩存 (page cache) 時發生記憶體溢位 (memcpy overflow)。具體而言，在 4 KiB 頁面系統上，這會導致緩存頁溢出 24 位元組，侵入到後續的核心頁面。此漏洞的修復措施是增加檢查，確保 dirent 本身不能超過單個頁面大小，再將其複製到 readdir 緩存。建議使用者應升級至已修補的 Linux 核心版本，以避免遭受此類核心層級的資訊安全攻擊。",
    tags: ["Linux 核心", "FUSE", "CVE-2026-31694", "記憶體溢位", "kernel", "dirent"],
    title_en: "Linux Kernel FUSE Vulnerability (CVE-2026-31694): Malicious dirent Causes Page Cache Overflow",
    summary_en: "This vulnerability, CVE-2026-31694, exists in the FUSE (Filesystem in Userspace) module of the Linux kernel. An attacker can utilize a malicious FUSE server that returns data containing oversized dirents. By manipulating the namelen field, this causes a memory overflow (memcpy overflow) when the kernel copies the dirent to the page cache. Specifically, on a 4 KiB page system, this results in the cache page overflowing by 24 bytes, thereby invading subsequent kernel pages. The remediation for this vulnerability is to add checks to ensure that the dirent itself does not exceed the size of a single page before copying it to the readdir cache. Users are advised to upgrade to a patched Linux kernel version to prevent suffering from this type of kernel-level information security attack.",
    tags_en: ["Linux Kernel", "FUSE", "CVE-2026-31694", "Memory Overflow", "kernel", "dirent"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31694", lang: "EN" }
    ]
  },
  {
    id: "20260501-002",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 virt_wifi 設備的 Use-After-Free 漏洞，避免網路設備註銷時的記憶體操作錯誤",
    summary: "本修補針對 Linux 核心中的 `wifi: virt_wifi` 網路設備，解決了一個潛在的 Use-After-Free (UAF) 漏洞。當系統在執行 `netdev_run_todo()` 流程註銷 `virt_wifi` 設備時，如果與 `SET_NETDEV_DEV()` 相關的操作同時發生，可能會導致問題。具體來說，在對正在註銷的 `virt_wifi` 設備執行 `ethtool` 操作時，系統會嘗試存取已被釋放的記憶體。這發生是因為 `ethnl_ops_begin()` 呼叫了 `pm_runtime_get_sync(dev->dev.parent)`，而 `dev.parent` 可能指向已釋放的記憶體。修補方案是移除 `virt_wifi` 對 `SET_NETDEV_DEV()` 的使用，從根本上避免了在設備註銷和網路操作流程中發生記憶體存取錯誤。此類漏洞屬於核心元件層面的安全問題，建議所有使用 Linux 核心的系統應更新至包含此修補的最新版本，以確保網路設備的穩定性和安全性。",
    tags: ["Linux 核心", "virt_wifi", "Use-After-Free", "ethtool", "netdev", "Linux 核心元件"],
    title_en: "Linux Kernel Fixes virt_wifi Device Use-After-Free Vulnerability, Preventing Memory Operation Errors During Network Device Unregistration",
    summary_en: "This patch addresses a potential Use-After-Free (UAF) vulnerability in the `wifi: virt_wifi` network device within the Linux kernel. A problem can occur when the system unregisters the `virt_wifi` device during the `netdev_run_todo()` process, especially if it coincides with operations related to `SET_NETDEV_DEV()`. Specifically, when an `ethtool` operation is performed on the device being unregistered, the system attempts to access already freed memory. This happens because `ethnl_ops_begin()` calls `pm_runtime_get_sync(dev->dev.parent)`, and `dev.parent` might point to freed memory. The fix involves removing `virt_wifi`'s reliance on `SET_NETDEV_DEV()`, fundamentally preventing memory access errors during device unregistration and network operations. Since this type of vulnerability is a core component security issue, all systems using the Linux kernel are advised to update to the latest version containing this patch to ensure network device stability and security.",
    tags_en: ["Linux Kernel", "virt_wifi", "Use-After-Free", "ethtool", "netdev", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31695", lang: "EN" }
    ]
  },
  {
    id: "20260501-003",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：rxrpc 鍵解析路徑的票證長度驗證缺失，防止未授權用戶利用。",
    summary: "本漏洞存在於 Linux 核心的 `rxrpc` 模組中，具體為 `rxrpc_preparse()` 函數的非 XDR 鍵載荷解析路徑。該路徑在處理小尺寸（<= 28 bytes）的鍵載荷時，未能像 XDR 路徑那樣，對票證長度進行充分驗證。這使得未授權用戶可以提供過大的票證長度。當系統隨後透過 `rxrpc_read()` 讀取此鍵時，總令牌大小（toksize）的計算結果會超出預設的最大限制（AFSTOKEN_LENGTH_MAX），進而觸發系統警告（WARN_ON()）。修補建議是在 `rxrpc_preparse()` 的非 XDR 解析路徑中，增加檢查機制，確保票證長度不超過 `AFSTOKEN_RK_TIX_MAX`，使其與 XDR 解析邏輯保持一致性，以消除此潛在的資訊洩漏或服務不穩定的風險。",
    tags: ["Linux 核心", "rxrpc", "鍵解析", "票證長度", "CVE-2026-31696"],
    title_en: "Linux Kernel Patch: Missing Ticket Length Validation in rxrpc Key Parsing Path Prevents Unauthorized User Exploitation",
    summary_en: "This vulnerability exists in the `rxrpc` module of the Linux kernel, specifically within the non-XDR key payload parsing path of the `rxrpc_preparse()` function. This path fails to adequately validate the ticket length for small-sized (<= 28 bytes) key payloads, unlike the XDR path. This allows unauthorized users to provide excessively large ticket lengths. When the system subsequently reads this key via `rxrpc_read()`, the calculated total token size (`toksize`) exceeds the predefined maximum limit (`AFSTOKEN_LENGTH_MAX`), triggering a system warning (`WARN_ON()`). The recommended patch is to add a checking mechanism in the non-XDR parsing path of `rxrpc_preparse()` to ensure the ticket length does not exceed `AFSTOKEN_RK_TIX_MAX`, thereby maintaining consistency with the XDR parsing logic and eliminating the potential risk of information leakage or service instability.",
    tags_en: ["Linux Kernel", "rxrpc", "Key Parsing", "Ticket Length", "CVE-2026-31696"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31696", lang: "EN" }
    ]
  },
  {
    id: "20260501-004",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：crypto: ccp 驅動程式在處理 CPU ID 資訊時存在緩衝區溢出與資料洩漏風險",
    summary: "本漏洞位於 Linux 核心的 `crypto: ccp` 驅動程式中，涉及在嘗試從韌體（firmware）獲取 CPU ID 時的處理邏輯。當韌體命令執行失敗，特別是失敗原因與用戶空間緩衝區大小不匹配時，程式碼會嘗試將所需的 ID 資料寫入用戶空間。若未正確檢查，將導致緩衝區溢出（buffer overflow），進而洩漏核心內部的資料給用戶空間。此問題被識別為 KASAN 報告的 `slab-out-of-bounds` 錯誤。修補建議是增加對韌體錯誤碼的檢查，確保當驅動程式報告命令成功，但韌體錯誤碼卻指示失敗時，應採取更嚴格的錯誤處理機制，避免不必要的資料複製操作。",
    tags: ["Linux 核心", "crypto: ccp", "CVE-2026-31697", "緩衝區溢出", "資料洩漏", "KASAN"],
    title_en: "Linux Kernel Vulnerability: crypto: ccp Driver Has Buffer Overflow and Data Leakage Risk When Handling CPU ID Information",
    summary_en: "This vulnerability resides in the `crypto: ccp` driver within the Linux kernel, concerning the handling logic when attempting to retrieve CPU ID from the firmware. When the firmware command execution fails, especially when the failure reason does not match the size of the user-space buffer, the code attempts to write the required ID data into user space. If not properly checked, this leads to a buffer overflow, subsequently leaking internal kernel data to user space. This issue was identified as a `slab-out-of-bounds` error reported by KASAN. The suggested fix is to enhance the checking of firmware error codes, ensuring that a stricter error handling mechanism is adopted when the driver reports a successful command but the firmware error code indicates failure, thereby preventing unnecessary data copy operations.",
    tags_en: ["Linux Kernel", "crypto: ccp", "CVE-2026-31697", "Buffer Overflow", "Data Leakage", "KASAN"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31697", lang: "EN" }
    ]
  },
  {
    id: "20260501-005",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞揭露：CCP 驅動程式在處理 PDH 憑證時可能發生緩衝區溢出與資料洩露",
    summary: "本漏洞位於 Linux 核心的加密相關元件 `crypto: ccp`，具體涉及處理 PDH 憑證（PDH cert）的流程。當系統嘗試從韌體（firmware）獲取 PDH 憑證時，若韌體命令執行失敗，但程式仍嘗試將憑證資料塊（blobs）複製到使用者空間（userspace），且失敗原因為使用者空間緩衝區長度不足，將會導致核心分配的緩衝區發生溢出（overflow）。這不僅會造成核心層的崩潰，更會導致敏感資料洩露到使用者空間。修補建議是增加檢查機制，確保在韌體命令失敗時，不應嘗試將憑證資料複製到使用者空間。此外，系統應警告開發者，若驅動程式報告命令成功，但韌體錯誤碼顯示失敗，應以韌體錯誤碼為準，因為 `__sev_do_cmd_locked()` 預期在任何韌體錯誤時都應返回 `-EIO`。",
    tags: ["Linux 核心", "CVE-2026-31698", "crypto: ccp", "PDH cert", "緩衝區溢出", "資料洩露"],
    title_en: "Linux Kernel Vulnerability Revealed: CCP Driver May Experience Buffer Overflow and Data Leakage When Processing PDH Certificates",
    summary_en: "This vulnerability resides in the `crypto: ccp` component of the Linux kernel, specifically involving the process of handling PDH certificates (PDH certs). When the system attempts to retrieve a PDH certificate from the firmware, if the firmware command execution fails, but the program still attempts to copy the certificate data blobs to userspace, and the failure reason is insufficient userspace buffer length, it will cause an overflow in the kernel-allocated buffer. This not only causes a kernel-level crash but also leads to sensitive data leakage into userspace. The suggested fix is to implement an additional check mechanism to ensure that the certificate data should not be attempted to be copied to userspace if the firmware command fails. Furthermore, the system should warn developers that if the driver reports command success, but the firmware error code indicates failure, the firmware error code should be trusted, because `__sev_do_cmd_locked()` is expected to return `-EIO` upon any firmware error.",
    tags_en: ["Linux Kernel", "CVE-2026-31698", "crypto: ccp", "PDH cert", "Buffer Overflow", "Data Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31698", lang: "EN" }
    ]
  },
  {
    id: "20260501-006",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心漏洞：ccp 驅動程式在處理 PEK CSR 時可能導致緩衝區溢出與資料洩漏",
    summary: "本漏洞存在於 Linux 核心的 `crypto: ccp` 相關驅動程式中。當系統嘗試檢索 PEK CSR（Provisioning Encryption Key Certificate Signing Request）時，如果底層的韌體命令執行失敗，但驅動程式仍嘗試將資料塊（blob）複製到使用者空間，且失敗原因為使用者空間緩衝區大小不足，會導致核心分配的緩衝區溢出。這不僅會造成系統崩潰，更可能導致敏感資料洩漏到使用者空間。修補建議是修改相關邏輯，確保在韌體命令失敗時，不應嘗試將資料塊複製到使用者空間。開發者應升級至修復此問題的 Linux 核心版本，以防止資料洩漏和系統不穩定性。",
    tags: ["Linux 核心", "CVE-2026-31699", "ccp", "PEK CSR", "緩衝區溢出", "資料洩漏"],
    title_en: "Linux Kernel Vulnerability: ccp Driver May Cause Buffer Overflow and Data Leakage When Handling PEK CSR",
    summary_en: "This vulnerability resides in the `crypto: ccp` driver within the Linux kernel. When the system attempts to retrieve a PEK CSR (Provisioning Encryption Key Certificate Signing Request), if the underlying firmware command execution fails, but the driver still attempts to copy the data blob to user space, and the failure reason is insufficient user space buffer size, it can lead to a kernel-allocated buffer overflow. This not only causes system crashes but may also lead to sensitive data leakage into user space. The recommended fix is to modify the relevant logic to ensure that the data blob is not attempted to be copied to user space when the firmware command fails. Developers should upgrade to the Linux kernel version that fixes this issue to prevent data leakage and system instability.",
    tags_en: ["Linux Kernel", "CVE-2026-31699", "ccp", "PEK CSR", "Buffer Overflow", "Data Leakage"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31699", lang: "EN" }
    ]
  },
  {
    id: "20260501-007",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 TOCTOU 競態條件：tpacket_snd() 處理 mmap 共享記憶體時的 vnet_hdr 漏洞",
    summary: "本漏洞存在於 Linux 核心的網路封包處理路徑 `tpacket_snd()` 中。當啟用 `PACKET_VNET_HDR` 時，vnet_hdr 指標會直接指向與使用者空間共享的 mmap TX 環緩衝區。雖然核心在 `__packet_snd_vnet_parse()` 階段進行了標頭驗證，但後續在 `virtio_net_hdr_to_skb()` 函數中會再次讀取所有欄位。攻擊者若能利用一個並發的使用者空間執行緒，可以在驗證與實際使用之間修改 vnet_hdr 欄位，從而繞過所有安全檢查。修補建議是將 vnet_hdr 從 mmap 的環緩衝區複製到堆疊本地變數，使其處理方式與 `packet_snd()` 以及核心中的其他相關呼叫一致，確保資料在驗證和使用階段的完整性。",
    tags: ["Linux 核心", "tpacket_snd()", "TOCTOU", "mmap", "vnet_hdr", "CVE-2026-31700"],
    title_en: "Linux Kernel Fixes TOCTOU Race Condition: vnet_hdr Vulnerability during tpacket_snd() mmap Shared Memory Processing",
    summary_en: "This vulnerability exists in the Linux kernel's network packet processing path, `tpacket_snd()`. When `PACKET_VNET_HDR` is enabled, the vnet_hdr pointer directly points to an mmap TX ring buffer shared with user space. Although the kernel performs header validation during the `__packet_snd_vnet_parse()` stage, all fields are subsequently read again in the `virtio_net_hdr_to_skb()` function. An attacker can exploit a concurrent user-space thread to modify the vnet_hdr fields between validation and actual usage, thereby bypassing all security checks. The suggested fix is to copy vnet_hdr from the mmap ring buffer to a stack local variable. This ensures that its handling is consistent with `packet_snd()` and other related kernel calls, guaranteeing data integrity during both validation and usage stages.",
    tags_en: ["Linux Kernel", "tpacket_snd()", "TOCTOU", "mmap", "vnet_hdr", "CVE-2026-31700"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31700", lang: "EN" }
    ]
  },
  {
    id: "20260501-008",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 ALSA 驅動程式：caiaq 處理 USB 設備參考計數錯誤，可能導致使用已釋放的設備指標",
    summary: "本漏洞存在於 Linux 核心的 ALSA 驅動程式 caiaq 中。問題點在於 caiaq 驅動程式在 `create_card()` 函式中儲存了指向父 USB 設備的指標，但未正確進行參考計數（reference counting）。當設備在背景執行緒中（透過 `snd_card_free_when_closed()`）被釋放時，如果程式碼嘗試存取 `cdev->chip.dev`，可能會解引用一個已被釋放的 `usb_device` 指標，造成記憶體安全問題。此外，在釋放回呼叫（free callback）中呼叫 `usb_reset_device()` 也是不當的，因為設備已處於關閉和清理階段，此操作會導致競爭條件。修補建議是，在 `create_card()` 中使用 `usb_get_dev()` 取得設備參考，並在釋放回呼叫中使用 `usb_put_dev()` 釋放參考，同時移除不必要的 `usb_reset_device()` 呼叫。",
    tags: ["Linux 核心", "ALSA", "caiaq", "USB 設備", "參考計數", "CVE-2026-31701"],
    title_en: "Linux Kernel ALSA Driver: caiaq Handles USB Device Reference Count Error, Potentially Leading to Use-After-Free",
    summary_en: "This vulnerability exists in the caiaq ALSA driver within the Linux kernel. The issue is that the caiaq driver stores a pointer to the parent USB device in the `create_card()` function but fails to perform proper reference counting. When the device is released in a background thread (via `snd_card_free_when_closed()`), if the code attempts to access `cdev->chip.dev`, it may dereference an already freed `usb_device` pointer, causing a memory safety issue. Furthermore, calling `usb_reset_device()` in the free callback is improper because the device is already in the closed and cleanup phase, and this operation can lead to a race condition. The suggested fix is to use `usb_get_dev()` in `create_card()` to acquire the device reference and use `usb_put_dev()` in the free callback to release the reference, while also removing the unnecessary `usb_reset_device()` call.",
    tags_en: ["Linux Kernel", "ALSA", "caiaq", "USB Device", "Reference Counting", "CVE-2026-31701"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31701", lang: "EN" }
    ]
  },
  {
    id: "20260501-009",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統修復 Use-After-Free 漏洞：修復 f2fs_compress_write_end_io() 競態條件",
    summary: "本漏洞為 Linux 核心 f2fs 文件系統中的 Use-After-Free 類型安全問題。當系統在執行併發卸載（concurrent unmount）時，如果透過 f2fs_compress_write_end_io() 函式路徑，可能導致 f2fs_put_super() 呼叫時，在一個 CPU 上執行卸載流程，而另一個 CPU 上的 I/O 完成回呼（bio completion callback）仍在執行。這會導致 I/O 回呼試圖存取已被銷毀的結構體（sbi->page_array_slab），造成 Use-After-Free。此問題與先前修復的 CVE-2026-23234 屬於同一類型的競態條件錯誤，但發生在未被涵蓋的壓縮寫回完成路徑。修復建議是將頁面計數器減（dec_page_count()）的呼叫，延遲到頁面陣列釋放（page_array_free()）之後，確保所有對 sbi 的存取在計數器減之前完成，以避免資源提前釋放。",
    tags: ["Linux 核心", "f2fs", "Use-After-Free", "CVE-2026-31702", "文件系統", "kmem_cache"],
    title_en: "Linux f2fs Filesystem Fixes Use-After-Free Vulnerability: Race Condition in f2fs_compress_write_end_io()",
    summary_en: "This vulnerability is a Use-After-Free type security issue in the Linux kernel's f2fs filesystem. When the system performs a concurrent unmount, if the path through the f2fs_compress_write_end_io() function is taken, it may lead to a Use-After-Free condition when f2fs_put_super() is called. This occurs because the unmount process executes on one CPU, while the I/O completion callback on another CPU is still running. This causes the I/O callback to attempt accessing a structure (sbi->page_array_slab) that has already been destroyed. This issue is a race condition error of the same type as the previously patched CVE-2026-23234, but it occurs in an unaddressed compressed write completion path. The suggested fix is to delay the call to dec_page_count() until after page_array_free() is called, ensuring that all accesses to sbi are completed before the page count is decremented, thereby preventing premature resource release.",
    tags_en: ["Linux Kernel", "f2fs", "Use-After-Free", "CVE-2026-31702", "Filesystem", "kmem_cache"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31702", lang: "EN" }
    ]
  },
  {
    id: "20260501-010",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 Use-After-Free 漏洞：inode_switch_wbs_work_fn() 處理邏輯修正",
    summary: "本漏洞存在於 Linux 核心的寫回（writeback）機制中，具體影響於 `inode_switch_wbs_work_fn()` 函式。該函式在處理 `isw` 項目時，如果 `wb->switch_wbs_ctxs` 列表為空，但相關工作（work）仍處於待處理狀態，可能導致核心資源 `wb` 被釋放（free），而工作處理程序仍在執行，進而引發 Use-After-Free (UAF) 問題。修復方案是移除 `inode_switch_wbs_work_fn()` 中的循環邏輯。透過此修正，確保當工作被排程時，相關的上下文結構（`wb->switch_wbs_ctxs`）已被正確初始化，避免在工作執行期間，核心資源被過早釋放，從而提升系統的穩定性和安全性。此類核心層面的修復，建議系統管理員應透過更新 Linux 核心版本來修補。",
    tags: ["Linux 核心", "Use-After-Free", "inode_switch_wbs_work_fn", "writeback", "CVE-2026-31703"],
    title_en: "Linux Kernel Fixes Use-After-Free Vulnerability: Correction in inode_switch_wbs_work_fn() Handling Logic",
    summary_en: "This vulnerability resides in the writeback mechanism of the Linux kernel, specifically affecting the `inode_switch_wbs_work_fn()` function. When processing `isw` items, if the `wb->switch_wbs_ctxs` list is empty, but the related work is still pending processing, it can lead to the core resource `wb` being freed while the work processing routine is still executing, thereby triggering a Use-After-Free (UAF) issue. The fix involves removing the loop logic within `inode_switch_wbs_work_fn()`. This correction ensures that when work is scheduled, the relevant context structure (`wb->switch_wbs_ctxs`) has been correctly initialized, preventing the premature release of core resources during work execution, thus enhancing system stability and security. System administrators are advised to patch this by updating the Linux kernel version, as this is a core-level fix.",
    tags_en: ["Linux Kernel", "Use-After-Free", "inode_switch_wbs_work_fn", "writeback", "CVE-2026-31703"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31703", lang: "EN" }
    ]
  },
  {
    id: "20260501-011",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 ksmbd 漏洞 (CVE-2026-31704)：防止 POSIX/NTACL 權限列表大小溢位導致的緩衝區覆寫",
    summary: "本漏洞 CVE-2026-31704 存在於 Linux 核心的 ksmbd 元件中。當檔案具有大量 POSIX 或 NTACL 權限列表（ACL）條目時，`set_posix_acl_entries_dacl()` 和 `set_ntacl_dacl()` 在累計 ACE（Access Control Entry）大小時，會使用 u16 變數，導致累計大小超過 65535 的極限值發生環繞（wrap）。此溢位會造成指標算術錯誤，導致後續寫入操作覆寫了先前已寫入的 ACL 條目，並使 pndacl->size 變數得到截斷的錯誤值。修補建議是在每個累計點使用 `check_add_overflow()` 函數來檢測溢位，以防止緩衝區被破壞。受影響的系統版本範圍包含 5.15 至 6.18.25 之間的多個版本。建議系統升級至包含修補的 Linux 核心版本，以修復此記憶體處理漏洞。",
    tags: ["Linux 核心", "ksmbd", "CVE-2026-31704", "ACL", "u16 溢位", "Linux 核心元件"],
    title_en: "Linux Kernel ksmbd Vulnerability (CVE-2026-31704): Preventing Buffer Overwrite Caused by POSIX/NTACL Permission List Size Overflow",
    summary_en: "The vulnerability CVE-2026-31704 exists in the ksmbd component of the Linux kernel. When a file has a large number of POSIX or NTACL permission list (ACL) entries, the functions `set_posix_acl_entries_dacl()` and `set_ntacl_dacl()` use a u16 variable when accumulating the total size of Access Control Entries (ACE). This causes a wrap-around when the accumulated size exceeds the 65535 limit. This overflow leads to an integer arithmetic error, causing subsequent write operations to overwrite previously written ACL entries and resulting in the pndacl->size variable being assigned a truncated incorrect value. The suggested fix is to use the `check_add_overflow()` function at every accumulation point to detect overflow, thereby preventing buffer corruption. The affected system version range includes multiple versions between 5.15 and 6.18.25. It is recommended that systems upgrade to a Linux kernel version containing the patch to fix this memory handling vulnerability.",
    tags_en: ["Linux Kernel", "ksmbd", "CVE-2026-31704", "ACL", "u16 overflow", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31704", lang: "EN" }
    ]
  },
  {
    id: "20260501-012",
    trackers: ["os", "security"],
    category: "Linux",
    title: "ksmbd 服務修復：Linux 核心 smb2_get_ea() 函數的越界寫入漏洞",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，具體影響 smb2_get_ea() 函數。該函數在處理 SMBv2 複合請求時，即使在 EA 欄位值剛好填滿剩餘緩衝區時，其後續的對齊填充（alignment memset）操作仍會無條件執行，且未檢查剩餘空間。這導致對齊填充會寫入超過 `buf_free_len` 邊界，進而覆蓋相鄰的核心堆記憶體（kernel heap memory）。攻擊者可能利用此越界寫入（Out-of-bounds write）來達到核心層級的任意程式碼執行。修復建議是必須在執行對齊 memset 之前，增加對 `buf_free_len` 的邊界檢查，確保緩衝區有足夠空間容納填充字節。此修復模式與 ksmbd 處理複合請求時其他兩個已修復的 OOB 漏洞（get_file_all_info 和 QUERY_INFO）的修復方式一致。",
    tags: ["Linux 核心", "ksmbd", "smb2", "越界寫入", "Out-of-bounds", "SMBv2"],
    title_en: "ksmbd Service Fix: Out-of-bounds Write Vulnerability in Linux Kernel's smb2_get_ea() Function",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, specifically affecting the smb2_get_ea() function. When processing SMBv2 compound requests, this function unconditionally performs subsequent alignment memset operations, even when the EA field value exactly fills the remaining buffer space, and fails to check for remaining space. This causes the alignment padding to write beyond the `buf_free_len` boundary, thereby overwriting adjacent kernel heap memory. An attacker may exploit this Out-of-bounds write to achieve arbitrary code execution at the kernel level. The recommended fix is to add a boundary check on `buf_free_len` before executing the alignment memset, ensuring the buffer has sufficient space to accommodate the padding bytes. This remediation pattern is consistent with the fix methods for the other two OOB vulnerabilities (get_file_all_info and QUERY_INFO) handled by ksmbd when processing compound requests.",
    tags_en: ["Linux Kernel", "ksmbd", "smb2", "Out-of-bounds write", "Out-of-bounds", "SMBv2"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31705", lang: "EN" }
    ]
  },
  {
    id: "20260501-013",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 核心漏洞：透過偽造 NTACL 屬性觸發堆分配溢位與服務拒絕",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，影響透過 SMB 協定進行檔案操作的系統。攻擊者若能對目標父目錄的 `security.NTACL` 屬性進行篡改（例如透過離線修改 xattr），可將 `num_aces` 數值設定為極大值（如 65535）。由於 ksmbd 在執行 `smb_inherit_dacl()` 時，會信任此未經檢查的 `num_aces` 值來計算堆記憶體分配大小，導致系統嘗試進行過大的記憶體分配（約 8 MB），進而可能造成堆分配溢位或在 32 位元核心上觸發整數乘法溢位。此外，原始程式碼在處理 ACE 迴圈時，安全檢查過於寬鬆。修補措施要求在分配前，必須將 `num_aces` 與 `pdacl_size` 進行一致性驗證；並使用更安全的記憶體分配函數，取代原始的 `kmalloc`；同時收緊每個 ACE 的最小尺寸檢查，確保資料完整性。修補後，系統會在發現篡改值時，提前以 `-EINVAL` 拒絕操作，避免資源耗盡或崩潰。",
    tags: ["Linux 核心", "ksmbd", "CVE-2026-31706", "SMB", "NTACL", "堆分配溢位"],
    title_en: "Linux ksmbd Core Vulnerability: Heap Allocation Overflow and Denial of Service via Falsified NTACL Attribute",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, affecting systems that perform file operations via the SMB protocol. An attacker who can tamper with the `security.NTACL` attribute of a target parent directory (for example, by offline modification of xattr) can set the `num_aces` value to an extremely large number (such as 65535). Because ksmbd trusts this unchecked `num_aces` value when executing `smb_inherit_dacl()` to calculate the heap memory allocation size, the system attempts an excessively large memory allocation (approximately 8 MB), potentially causing a heap allocation overflow or triggering an integer multiplication overflow on 32-bit kernels. Furthermore, the original code has overly permissive safety checks when processing the ACE loop. The patch requires consistent validation of `num_aces` and `pdacl_size` before allocation; it also mandates the use of a safer memory allocation function, replacing the original `kmalloc`; and tightens the minimum size check for each ACE to ensure data integrity. After patching, the system will reject the operation with `-EINVAL` upon detecting tampered values, preventing resource exhaustion or crashes.",
    tags_en: ["Linux Kernel", "ksmbd", "CVE-2026-31706", "SMB", "NTACL", "Heap Allocation Overflow"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31706", lang: "EN" }
    ]
  },
  {
    id: "20260501-014",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 服務修復整數溢位漏洞：防止攻擊者控制的響應大小繞過訊息長度檢查",
    summary: "本漏洞位於 Linux 核心的 ksmbd 服務中，涉及 `ipc_validate_msg()` 函數，允許攻擊者透過控制的響應欄位，導致訊息大小計算發生整數溢位。當計算出的訊息大小（`msg_sz`）溢位後，其值可能偶然等於後續的尺寸檢查值，從而繞過安全檢查。下游的程式碼（如 `smb2pdu.c` 和 `ksmbd_alloc_user`）會信任這個未經驗證的長度，可能導致記憶體操作錯誤或資訊洩露。修補建議是在 RPC_REQUEST 和 SHARE_CONFIG_REQUEST 路徑使用 `check_add_overflow()` 檢測整數溢位；對於 LOGIN_REQUEST_EXT，應在早期階段拒絕超出簽名範圍的 `resp->ngroups`，確保後續的乘法和加法操作不會超過 `UINT_MAX`。此修補是針對 ksmbd 服務響應端整數溢位問題的強化。",
    tags: ["Linux 核心", "ksmbd", "CVE-2026-31707", "整數溢位", "SMB", "IPC"],
    title_en: "Linux ksmbd service fixes integer overflow vulnerability: Prevents attackers from bypassing message length checks by controlling response size",
    summary_en: "This vulnerability resides in the ksmbd service within the Linux kernel, involving the `ipc_validate_msg()` function. It allows an attacker to cause an integer overflow during message size calculation by controlling the response field. When the calculated message size (`msg_sz`) overflows, its value may coincidentally equal a subsequent size check value, thereby bypassing the security check. Downstream code (such as `smb2pdu.c` and `ksmbd_alloc_user`) trusts this unvalidated length, potentially leading to memory corruption or information leakage. The patch suggests using `check_add_overflow()` to detect integer overflow in the RPC_REQUEST and SHARE_CONFIG_REQUEST paths; for LOGIN_REQUEST_EXT, it mandates rejecting `resp->ngroups` that exceed the signature range at an early stage, ensuring that subsequent multiplication and addition operations do not exceed `UINT_MAX`. This fix strengthens the defense against integer overflow issues in the ksmbd service response handling.",
    tags_en: ["Linux Kernel", "ksmbd", "CVE-2026-31707", "Integer Overflow", "SMB", "IPC"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31707", lang: "EN" }
    ]
  },
  {
    id: "20260501-015",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 smb2_ioctl_query_info 存在 OOB 讀取漏洞，可能導致核心堆記憶體洩露",
    summary: "本漏洞位於 Linux 核心的 SMB 協定相關元件，具體影響 `smb2_ioctl_query_info()` 函式。當使用 `QUERY_INFO` 路徑時，該函式會根據伺服器回報的 `OutputBufferLength` 來限制輸入緩衝區長度，並將資料複製到使用者空間。然而，原始碼缺乏對實際可變陣列負載（flexible-array payload）是否能完全容納於 `rsp_iov[1].iov_len` 的驗證。惡意伺服器可以回傳一個大於實際 `QUERY_INFO` 回應的 `OutputBufferLength`，導致 `copy_to_user()` 函式在讀取時超出預期的回應緩衝區邊界，從而將鄰近的核心堆記憶體內容洩露給使用者空間。修補建議是在執行 `QUERY_INFO` 複製操作時，必須加入對實際 `Buffer` 負載的邊界檢查，以防止越界讀取。",
    tags: ["Linux 核心", "smb2", "OOB 讀取", "核心堆記憶體", "CVE-2026-31708"],
    title_en: "Linux Kernel smb2_ioctl_query_info has OOB Read Vulnerability, Potentially Leading to Kernel Heap Memory Leakage",
    summary_en: "This vulnerability resides in the SMB protocol component of the Linux kernel, specifically affecting the `smb2_ioctl_query_info()` function. When using the `QUERY_INFO` path, this function limits the input buffer length based on the `OutputBufferLength` reported by the server and copies the data to user space. However, the source code lacks validation to ensure that the actual flexible-array payload can be fully contained within `rsp_iov[1].iov_len`. A malicious server can return an `OutputBufferLength` greater than the actual `QUERY_INFO` response, causing the `copy_to_user()` function to read beyond the expected response buffer boundary, thereby leaking adjacent kernel heap memory content to user space. The suggested fix is to implement boundary checks on the actual `Buffer` payload during the `QUERY_INFO` copy operation to prevent out-of-bounds reads.",
    tags_en: ["Linux Kernel", "smb2", "OOB Read", "Kernel Heap Memory", "CVE-2026-31708"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31708", lang: "EN" }
    ]
  },
  {
    id: "20260501-016",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 SMB 客戶端在處理 DACL 時的結構性緩衝區溢出漏洞",
    summary: "本漏洞存在於 Linux 核心的 SMB 客戶端功能中，具體涉及 `smb: client: validate the whole DACL before rewriting it in cifsacl`。當系統使用 `build_sec_desc()` 和 `id_mode_to_cifs_acl()` 函數時，會從伺服器接收的 DACL（存取控制列表）指針來重建 chmod/chown 安全描述符。雖然原有的修補只檢查了 SMB ACL 標頭是否完整，但後續的重寫輔助函數在遍歷 ACEs（存取控制條目）時，缺乏對傳入 DACL 內容的結構性驗證。惡意伺服器可以回傳一個被截斷但仍包含標頭的 DACL，並聲稱包含多個 ACEs，從而導致 `replace_sids_and_copy_aces()` 或 `set_chmod_dacl()` 函數在比較或複製攻擊者控制的 ACEs 時，超出預期的邊界，造成緩衝區溢出。修補建議是將 DACL 的結構檢查整合到 `validate_dacl()` 函數中，並擴展驗證邏輯，確保每個 ACE 都符合 DACL 的邊界，從而讓讀取和寫入路徑使用一致的驗證器。",
    tags: ["Linux 核心", "SMB", "DACL", "cifsacl", "緩衝區溢出", "CVE-2026-31709"],
    title_en: "Linux Kernel Patch: Fixes Structural Buffer Overflow in SMB Client when Handling DACL",
    summary_en: "This vulnerability exists in the SMB client functionality of the Linux kernel, specifically involving `smb: client: validate the whole DACL before rewriting it in cifsacl`. When the system uses the `build_sec_desc()` and `id_mode_to_cifs_acl()` functions, it reconstructs chmod/chown security descriptors from the DACL (Discretionary Access Control List) pointer received from the server. Although the original patch only checked if the SMB ACL header was intact, the subsequent rewrite helper functions lacked structural validation of the incoming DACL content while iterating over the ACEs (Access Control Entries). A malicious server can return a truncated but still header-containing DACL, while claiming it contains multiple ACEs. This can cause the `replace_sids_and_copy_aces()` or `set_chmod_dacl()` functions to exceed expected boundaries when comparing or copying attacker-controlled ACEs, leading to a buffer overflow. The suggested fix is to integrate the DACL structure check into the `validate_dacl()` function and expand the validation logic to ensure every ACE conforms to the DACL boundaries, thereby allowing both the read and write paths to use a consistent validator.",
    tags_en: ["Linux Kernel", "SMB", "DACL", "cifsacl", "Buffer Overflow", "CVE-2026-31709"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31709", lang: "EN" }
    ]
  },
  {
    id: "20260501-017",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補 CVE-2026-31710：修復 SMB1 UNIX 掛載的目錄分隔符錯誤",
    summary: "本漏洞 CVE-2026-31710 存在於 Linux 核心的 SMB 客戶端功能中。當使用 SMB1 進行 UNIX 掛載時，在呼叫 `cifs_mount_get_tcon()` 函式時，如果未先呼叫 `reset_cifs_unix_caps()`，`@cifs_sb->mnt_cifs_flags` 結構體可能會遺失 `CIFS_MOUNT_POSIXACL` 和 `CIFS_MOUNT_POSIX_PATHS` 位元。這導致在路徑處理時使用錯誤的目錄分隔符，影響系統的檔案掛載穩定性與正確性。此問題已在 Linux 核心中修復。建議系統管理員應立即更新至修補版本，以確保 SMB1 掛載的安全性與功能完整性。CVSS 3.1 分數為 AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H。",
    tags: ["Linux 核心", "CVE-2026-31710", "SMB1", "cifs", "UNIX 掛載", "Linux 核心元件"],
    title_en: "Linux Kernel Patch CVE-2026-31710: Fixing Directory Separator Error in SMB1 UNIX Mount",
    summary_en: "The vulnerability CVE-2026-31710 exists in the SMB client functionality of the Linux kernel. When performing a UNIX mount using SMB1, if `reset_cifs_unix_caps()` is not called before calling `cifs_mount_get_tcon()`, the `@cifs_sb->mnt_cifs_flags` structure may lose the `CIFS_MOUNT_POSIXACL` and `CIFS_MOUNT_POSIX_PATHS` bits. This results in the use of an incorrect directory separator during path handling, affecting the stability and correctness of the system's file mounts. This issue has been fixed in the Linux kernel. System administrators are advised to update immediately to the patched version to ensure the security and functional integrity of SMB1 mounts. The CVSS 3.1 score is AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H.",
    tags_en: ["Linux Kernel", "CVE-2026-31710", "SMB1", "cifs", "UNIX Mount", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31710", lang: "EN" }
    ]
  },
  {
    id: "20260501-018",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux SMB 服務修復 active_num_conn 記憶體洩漏，防止遠端攻擊者耗盡連線資源",
    summary: "本漏洞修復針對 Linux 核心的 SMB 服務 (smb: server) 內，在傳輸資源分配失敗時，`active_num_conn` 計數器會發生記憶體洩漏。攻擊者可透過持續觸發資源分配失敗路徑，導致計數器無法正確遞減，最終使服務達到連線上限 (max_connections) 的閾值。一旦達到此閾值，即使是合法的新連線嘗試也會被系統拒絕。此漏洞可透過任何到 445 埠的 TCP 連線進行預認證攻擊。修補建議是確保在 `alloc_transport()` 失敗的路徑上，正確地遞減 `active_num_conn` 計數器，以防止資源耗盡。此修補已在核心提交 77ffbcac4e56 中解決。",
    tags: ["Linux 核心", "SMB", "smb: server", "CVE-2026-31711", "記憶體洩漏", "網路服務"],
    title_en: "Linux SMB Service Fixes active_num_conn Memory Leak, Preventing Remote Attackers from Exhausting Connection Resources",
    summary_en: "This vulnerability fix addresses a memory leak within the SMB service (smb: server) in the Linux kernel. When resource allocation fails during transmission, the `active_num_conn` counter leaks memory. An attacker can continuously trigger the resource allocation failure path, causing the counter to fail to decrement correctly, eventually leading the service to reach the connection limit (max_connections) threshold. Once this threshold is reached, even legitimate new connection attempts will be rejected by the system. This vulnerability can be exploited via any TCP connection to port 445. The recommended patch is to ensure that the `active_num_conn` counter is correctly decremented along the path where `alloc_transport()` fails, thereby preventing resource exhaustion. This fix was implemented in kernel commit 77ffbcac4e56.",
    tags_en: ["Linux Kernel", "SMB", "smb: server", "CVE-2026-31711", "Memory Leak", "Network Service"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31711", lang: "EN" }
    ]
  },
  {
    id: "20260501-019",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 核心漏洞 (CVE-2026-31712)：透過惡意 DACL 觸發越界讀取",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，影響 SMB 檔案共享的權限檢查機制 smb_check_perm_dacl()。攻擊者若能對自己擁有的檔案設定惡意的存取控制列表 (DACL)，可以利用此漏洞繞過原有的緩衝區檢查，導致核心在執行權限檢查時發生越界讀取 (Out-of-Bounds Read)。攻擊者需具備經過身份驗證的 SMB 客戶端權限，並能對目標檔案設定 ACL。當核心在後續操作（如 CREATE）時遍歷此惡意 DACL，將會觸發越界讀取。雖然此越界讀取不會直接回傳給攻擊者，但它可能導致核心狀態損壞，並可能被 KASAN 偵測到。修補建議是收緊 smb_check_perm_dacl() 的循環檢查條件，確保 ACE 結構的宣告大小與實際讀取欄位相符，並在處理 SID 時增加額外的驗證。",
    tags: ["Linux 核心", "ksmbd", "CVE-2026-31712", "SMB", "DACL", "越界讀取"],
    title_en: "Linux ksmbd Kernel Vulnerability (CVE-2026-31712): Out-of-Bounds Read Triggered via Malicious DACL",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, affecting the permission checking mechanism smb_check_perm_dacl() for SMB file sharing. An attacker who can set a malicious Discretionary Access Control List (DACL) on a file they own can exploit this vulnerability to bypass existing buffer checks, causing an Out-of-Bounds Read when the kernel performs permission checks. The attacker requires authenticated SMB client privileges and the ability to set ACLs on the target file. When the kernel iterates through this malicious DACL during subsequent operations (such as CREATE), the Out-of-Bounds Read is triggered. Although this Out-of-Bounds Read is not directly returned to the attacker, it may lead to kernel state corruption and could potentially be detected by KASAN. The suggested patch is to tighten the loop checking conditions in smb_check_perm_dacl() to ensure that the declared size of the ACE structure matches the actual read fields, and to add additional validation when processing SIDs.",
    tags_en: ["Linux Kernel", "ksmbd", "CVE-2026-31712", "SMB", "DACL", "Out-of-Bounds Read"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31712", lang: "EN" }
    ]
  },
  {
    id: "20260501-020",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 FUSE 漏洞 CVE-2026-31713：同步初始化期間服務器崩潰導致掛載掛起",
    summary: "本漏洞 CVE-2026-31713 存在於 Linux 核心的 FUSE (Filesystem in Userspace) 組件中。當系統使用同步初始化 (sync init) 模式，且在處理 FUSE_INIT 過程中，服務器因錯誤或崩潰而退出時，會導致文件系統創建過程掛起 (hang)。根本原因在於，雖然其他執行緒會正常退出，但負責掛載的執行緒（或進程）會持續保持對設備文件描述符 (device fd) 的開啟，從而阻止了系統執行中止 (abort) 機制。此問題被指出是相較於異步掛載 (async mount) 模式的退化 (regression) 案例。修補建議是更新 Linux 核心至包含修補的版本。由於原文未提供具體受影響版本範圍，建議使用者應參考 kernel.org 提供的最新修補資訊進行升級。",
    tags: ["Linux 核心", "FUSE", "CVE-2026-31713", "文件系統", "掛載點"],
    title_en: "Linux Kernel FUSE Vulnerability CVE-2026-31713: Service Crash During Synchronous Initialization Causes Mount Hang",
    summary_en: "The vulnerability CVE-2026-31713 exists in the FUSE (Filesystem in Userspace) component of the Linux kernel. When the system uses synchronous initialization (sync init) mode, and the service exits due to an error or crash during the FUSE_INIT process, it can cause the file system creation process to hang. The root cause is that although other threads exit normally, the thread (or process) responsible for mounting continues to keep the device file descriptor (device fd) open, thereby preventing the system from executing the abort mechanism. This issue is noted as a regression compared to the asynchronous mount (async mount) mode. The recommended fix is to update the Linux kernel to a patched version. Since the original text did not provide a specific affected version range, users are advised to refer to the latest patch information provided by kernel.org for upgrading.",
    tags_en: ["Linux Kernel", "FUSE", "CVE-2026-31713", "Filesystem", "Mount Point"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31713", lang: "EN" }
    ]
  },
  {
    id: "20260501-021",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統修復記憶體洩漏：修復 f2fs_rename() 函數中的資源釋放問題",
    summary: "本篇公告指出 Linux 核心的 f2fs 文件系統存在記憶體洩漏（Memory Leak）的漏洞。該問題發生在執行 `f2fs_rename()` 相關操作時，由於在呼叫 `f2fs_setup_filename()` 後，缺少了對應的 `f2fs_free_filename()` 資源釋放呼叫，導致系統無法正確釋放相關的內部結構體，造成記憶體洩漏。此漏洞的根源追溯至 commit 40b2d55e0452 的修改。修復的目的是確保在建立 SELinux label 過程中，資源管理流程完整，避免不必要的記憶體佔用。建議系統管理員應更新至修復此問題的 Linux 核心版本，以確保文件系統的穩定性和記憶體資源的有效管理。",
    tags: ["Linux 核心", "f2fs", "記憶體洩漏", "CVE-2026-31714", "f2fs_rename", "SELinux"],
    title_en: "Linux f2fs Filesystem Fixes Memory Leak: Resolves Resource Release Issue in f2fs_rename() Function",
    summary_en: "This announcement points out a memory leak vulnerability in the Linux kernel's f2fs filesystem. The issue occurs during operations related to `f2fs_rename()`. Specifically, after calling `f2fs_setup_filename()`, the lack of a corresponding `f2fs_free_filename()` resource release call prevents the system from correctly freeing related internal structures, leading to a memory leak. The root cause of this vulnerability is traced back to the commit 40b2d55e0452 modification. The fix aims to ensure that the resource management process is complete when creating SELinux labels, thereby preventing unnecessary memory consumption. System administrators are advised to update to the Linux kernel version that fixes this issue to ensure filesystem stability and effective memory resource management.",
    tags_en: ["Linux Kernel", "f2fs", "Memory Leak", "CVE-2026-31714", "f2fs_rename", "SELinux"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31714", lang: "EN" }
    ]
  },
  {
    id: "20260501-022",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux f2fs 文件系統修補 UAF 漏洞：修復寫入完成時的空指針解引用問題",
    summary: "本漏洞存在於 Linux 核心的 f2fs 文件系統中，屬於典型的使用後釋放（Use-After-Free, UAF）類型。當系統在進行寫入完成（F2FS_WB_CP_DATA）的背景下，並執行卸載（umount）操作時，如果多個操作發生交錯，可能觸發此問題。根本原因在於 `f2fs_put_super()` 函數在遞減頁面計數器 `sbi->nr_pages[F2FS_WB_CP_DATA]` 到零之後，會呼叫 `iput(sbi->node_inode)` 並將 `sbi->node_inode` 設為 NULL。隨後，`f2fs_in_warm_node_list()` 在檢查 folio 是否屬於節點 inode 時，可能在 `sbi->node_inode` 已經被釋放（NULL）的情況下進行解引用，導致系統崩潰（panic）。修補措施是調整函數呼叫順序，確保在遞減頁面計數器之前呼叫 `f2fs_in_warm_node_list()`，從而避免使用後釋放的條件。建議系統管理員應更新至修補此 UAF 漏洞的 Linux 核心版本。",
    tags: ["Linux 核心", "f2fs", "Use-After-Free", "UAF", "Linux 核心", "文件系統"],
    title_en: "Linux f2fs Filesystem Patch Fixes UAF Vulnerability: Resolving Null Pointer Dereference During Write Completion",
    summary_en: "This vulnerability exists in the f2fs filesystem within the Linux kernel and is a typical Use-After-Free (UAF) type. The issue can be triggered when multiple operations interleave while the system is performing write completion (F2FS_WB_CP_DATA) and executing an unmount operation. The root cause is that the `f2fs_put_super()` function calls `iput(sbi->node_inode)` and sets `sbi->node_inode` to NULL after decrementing the page counter `sbi->nr_pages[F2FS_WB_CP_DATA]` to zero. Subsequently, `f2fs_in_warm_node_list()` may attempt to dereference the folio when checking if it belongs to a node inode, even if `sbi->node_inode` has already been released (NULL), leading to a system panic. The fix involves adjusting the function call order to ensure that `f2fs_in_warm_node_list()` is called before decrementing the page counter, thereby avoiding the Use-After-Free condition. System administrators are advised to update to the Linux kernel version that patches this UAF vulnerability.",
    tags_en: ["Linux Kernel", "f2fs", "Use-After-Free", "UAF", "Linux Kernel", "Filesystem"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31715", lang: "EN" }
    ]
  },
  {
    id: "20260501-023",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux NTFS-3 文件系統核心漏洞 (CVE-2026-31716)：Journal 重放時的記憶體溢出風險",
    summary: "本漏洞存在於 Linux 核心的 NTFS-3 文件系統驅動程式中，具體為 `fs/ntfs3: validate rec->used in journal-replay file record check`。當系統執行日誌重放（journal-replay）時，`check_file_record()` 函數雖然會驗證記錄大小（`rec->total`），但卻未正確驗證 `rec->used` 欄位的值。攻擊者可以利用此缺陷，當 `rec->used` 值小於已驗證屬性的偏移量，或大於記錄大小時，導致記憶體計算發生下溢（underflow）。這使得攻擊者能夠在日誌重放過程中，將大量記憶體內容複製到一個固定大小的 4KB 緩衝區，造成嚴重的記憶體溢出（Out-of-bounds read/write）。雖然此漏洞需要一個已損壞的檔案系統作為前提，但修補此類明顯的越界檢查，對於維持核心的穩健性，特別是在日誌重放機制中，至關重要。建議系統維護者應立即更新到修補此缺陷的 Linux 核心版本，以確保文件系統的完整性與安全性。",
    tags: ["Linux 核心", "NTFS-3", "Journal Replay", "記憶體溢出", "CVE-2026-31716", "文件系統"],
    title_en: "Linux NTFS-3 Filesystem Core Vulnerability (CVE-2026-31716): Memory Overflow Risk During Journal Replay",
    summary_en: "This vulnerability resides in the NTFS-3 filesystem driver within the Linux kernel, specifically in `fs/ntfs3: validate rec->used in journal-replay file record check`. When the system performs journal replay, the `check_file_record()` function validates the record size (`rec->total`) but fails to correctly validate the value of the `rec->used` field. An attacker can exploit this flaw by setting the `rec->used` value to be less than the offset of the validated attribute, or greater than the record size, causing a memory calculation underflow. This allows the attacker to copy a large amount of memory content into a fixed-size 4KB buffer during the journal replay process, leading to a severe Out-of-bounds read/write memory overflow. Although this vulnerability requires a corrupted filesystem as a prerequisite, patching such an obvious boundary check is crucial for maintaining kernel robustness, especially within the journal replay mechanism. System maintainers are advised to immediately update to the Linux kernel version that patches this defect to ensure filesystem integrity and security.",
    tags_en: ["Linux Kernel", "NTFS-3", "Journal Replay", "Memory Overflow", "CVE-2026-31716", "Filesystem"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31716", lang: "EN" }
    ]
  },
  {
    id: "20260501-024",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 ksmbd 漏洞修復：未經授權用戶可劫持持久化句柄",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，涉及持久化句柄（durable handle）的驗證機制。原設計缺陷導致 ksmbd 在用戶嘗試重新連線至持久化句柄時，無法驗證該連線嘗試者是否為原始開啟該句柄的用戶。這使得任何已通過身份驗證的用戶，只要能預測或暴力破解持久化 ID，便可劫持（hijack）這個「孤立的」句柄。根據 MS-SMB2 規範，伺服器必須驗證重新連線請求的 SecurityContext，必須與現有開啟的句柄所關聯的 SecurityContext 相匹配。修復措施要求在 ksmbd_file 結構中新增 durable_owner 結構，以儲存原始開啟者（UID、GID、帳號名）的資訊，並在句柄孤立時捕獲此所有者資訊。同時，需實作 ksmbd_vfs_compare_durable_owner() 函數，在處理 SMB2_CREATE (DHnC) 過程中，驗證請求者的身份是否為合法所有者。建議系統管理員應升級 Linux 核心以修復此身份驗證缺陷。",
    tags: ["Linux 核心", "ksmbd", "SMB2", "持久化句柄", "身份驗證", "CVE"],
    title_en: "Linux Kernel ksmbd Vulnerability Fix: Unauthorized Users Can Hijack Durable Handles",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, concerning the validation mechanism for durable handles. The original design flaw allowed ksmbd to fail to verify whether a user attempting to reconnect to a durable handle was the original user who opened that handle. This enabled any authenticated user who could predict or brute-force the durable ID to hijack this 'isolated' handle. According to the MS-SMB2 specification, the server must validate the SecurityContext of the reconnection request, ensuring it matches the SecurityContext associated with the currently open handle. The fix requires adding a durable_owner structure to the ksmbd_file structure to store the original owner's information (UID, GID, account name), and capturing this owner information when the handle is isolated. Furthermore, the ksmbd_vfs_compare_durable_owner() function must be implemented to verify the requester's identity as the legitimate owner during the SMB2_CREATE (DHnC) process. System administrators are advised to upgrade the Linux kernel to fix this identity validation defect.",
    tags_en: ["Linux Kernel", "ksmbd", "SMB2", "Durable Handle", "Authentication", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31717", lang: "EN" }
    ]
  },
  {
    id: "20260501-025",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux ksmbd 核心修復：解決 durable scavenger 導致的 use-after-free 漏洞",
    summary: "本漏洞存在於 Linux 核心的 ksmbd 服務中，涉及 durable file handle 在會話斷開後（TCP close without SMB2_LOGOFF）的處理機制。當文件句柄存活時，`session_fd_check()` 會將 `fp->conn` 設為 NULL 以保留句柄供後續重連使用。然而，此時並未清理 `fp->lock_list` 上的位元組範圍鎖定（byte-range locks）。當後續的 durable scavenger 執行超時清理，並呼叫 `__ksmbd_close_fd(NULL, fp)` 時，鎖定清理迴圈會嘗試在 `fp->conn` 為 NULL 的情況下執行 `spin_lock`，導致了 Slab use-after-free 錯誤。根本原因在於清理流程的不對稱性：鎖定條目（`smb_lock->clist`）在 `fp->conn` 被設為 NULL 後，仍殘留在已釋放的 `conn->lock_list` 上。修復需要確保在三個路徑中安全處理 `smb_lock->clist` 的生命週期，包括在列表為空且 `fp->conn` 為 NULL 時跳過刪除，並在 `session_fd_check()` 和 `ksmbd_reopen_durable_fd()` 中正確移除和重新添加鎖定。修補建議是升級 Linux 核心到已修復的版本。",
    tags: ["Linux 核心", "ksmbd", "use-after-free", "SMB2", "durable scavenger", "CVE"],
    title_en: "Linux ksmbd Core Fix: Resolving Use-After-Free Vulnerability Caused by Durable Scavenger",
    summary_en: "This vulnerability exists in the ksmbd service within the Linux kernel, concerning the handling of durable file handles after a session disconnect (TCP close without SMB2_LOGOFF). When the file handle is alive, `session_fd_check()` sets `fp->conn` to NULL to retain the handle for subsequent reconnection. However, this process fails to clean up the byte-range locks stored in `fp->lock_list`. When a subsequent durable scavenger executes timed cleanup and calls `__ksmbd_close_fd(NULL, fp)`, the lock cleanup loop attempts to execute `spin_lock` even when `fp->conn` is NULL, leading to a Slab use-after-free error. The root cause is the asymmetry in the cleanup process: lock entries (`smb_lock->clist`) remain on the already released `conn->lock_list` even after `fp->conn` is set to NULL. The fix requires ensuring the safe handling of the `smb_lock->clist` lifecycle across three paths, including skipping deletion when the list is empty and `fp->conn` is NULL, and correctly removing and re-adding locks in `session_fd_check()` and `ksmbd_reopen_durable_fd()`. The patch recommends upgrading the Linux kernel to the fixed version.",
    tags_en: ["Linux Kernel", "ksmbd", "use-after-free", "SMB2", "durable scavenger", "CVE"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31718", lang: "EN" }
    ]
  },
  {
    id: "20260501-026",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 krb5enc 異步解密時跳過雜湊驗證的漏洞",
    summary: "本修補針對 Linux 核心中的 `crypto: krb5enc` 組件，解決了一個在異步解密過程中可能繞過完整性驗證（hash check）的漏洞。當 `krb5enc_dispatch_decrypt()` 設置的 skcipher 回調函數為呼叫方自身的完成處理程序時，如果 skcipher 異步完成，系統會向呼叫方發出「完成」訊號，但卻跳過了關鍵的 `krb5enc_dispatch_decrypt_hash()` 步驟，導致解密數據的完整性無法被正確驗證。修補方案是新增一個中間回調函數 `krb5enc_decrypt_done`，確保在異步 skcipher 完成時，能正確鏈接到雜湊計算步驟，使其行為與加密路徑保持一致。此外，修補還修正了整個路徑中的 `EBUSY/EINPROGRESS` 處理邏輯，改善了請求狀態的通知準確性，並移除了一個錯誤吞噬 `EINPROGRESS` 通知的功能。此修補旨在強化 Kerberos 相關加密服務的安全性，防止攻擊者利用異步操作的特性進行數據篡改或繞過安全檢查。",
    tags: ["Linux 核心", "krb5enc", "異步解密", "完整性驗證", "CVE-2026-31719"],
    title_en: "Linux Kernel Patch: Fixes Vulnerability in krb5enc Skipping Hash Validation During Asynchronous Decryption",
    summary_en: "This patch targets the `crypto: krb5enc` component within the Linux kernel, addressing a vulnerability that could allow an attacker to bypass integrity checks during the asynchronous decryption process. When the skcipher callback function set by `krb5enc_dispatch_decrypt()` is the completion handler of the caller itself, if the skcipher completes asynchronously, the system sends a 'done' signal to the caller but skips the critical `krb5enc_dispatch_decrypt_hash()` step. This failure prevents the proper validation of the decrypted data's integrity. The fix introduces an intermediate callback function, `krb5enc_decrypt_done`, ensuring that when the asynchronous skcipher completes, it correctly links to the hash calculation step, maintaining consistency with the encryption path. Furthermore, the patch corrects the `EBUSY/EINPROGRESS` handling logic throughout the path, improving the accuracy of request status notification, and removes a function that erroneously swallowed `EINPROGRESS` notifications. This patch aims to enhance the security of Kerberos-related cryptographic services, preventing attackers from manipulating data or bypassing security checks by exploiting the characteristics of asynchronous operations.",
    tags_en: ["Linux Kernel", "krb5enc", "Asynchronous Decryption", "Integrity Validation", "CVE-2026-31719"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31719", lang: "EN" }
    ]
  },
  {
    id: "20260501-027",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心 USB 設備漏洞 CVE-2026-31720：堆疊溢出寫入風險",
    summary: "本漏洞 CVE-2026-31720 存在於 Linux 核心的 USB 設備功能（`usb: gadget: f_uac1_legacy`）中。問題出在 `f_audio_complete()` 函數，該函數將從主機控制的 USB 請求路徑（`req->length`）獲取的位元組數，不當複製到一個固定大小的 4 位元堆疊變數中。如果攻擊者能控制這個長度，將導致堆疊越界寫入（stack out-of-bounds write）。修補建議是必須在複製數據前，驗證 `req->actual` 是否符合支援的控制選擇器預期負載大小，並只解碼預期的數據量，以避免使用主機影響的長度寫入固定大小的堆疊物件。此漏洞屬於 CWE-787 類型的堆疊越界寫入，影響範圍廣泛，建議所有使用 Linux 核心的系統應立即更新到修補版本。",
    tags: ["Linux 核心", "CVE-2026-31720", "USB", "堆疊溢出", "CWE-787", "Linux 核心元件"],
    title_en: "Linux Kernel USB Device Vulnerability CVE-2026-31720: Stack Overflow Write Risk",
    summary_en: "The vulnerability CVE-2026-31720 exists in the USB device functionality of the Linux kernel (`usb: gadget: f_uac1_legacy`). The issue lies within the `f_audio_complete()` function, which improperly copies the number of bytes obtained from the host-controlled USB request path (`req->length`) into a fixed-size 4-byte stack variable. If an attacker can control this length, it will lead to a stack out-of-bounds write. The suggested patch requires validating whether `req->actual` matches the expected load size for supported control selectors before copying, and only decoding the expected amount of data, thereby preventing the use of host-influenced length to write to a fixed-size stack object. This vulnerability is classified as CWE-787 stack out-of-bounds write, has a wide impact, and all systems using the Linux kernel are advised to update immediately to the patched version.",
    tags_en: ["Linux Kernel", "CVE-2026-31720", "USB", "Stack Overflow", "CWE-787", "Linux Kernel Component"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31720", lang: "EN" }
    ]
  },
  {
    id: "20260501-028",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修復 USB HID Gadget 漏洞：修正 `bind` 函數的資源初始化時機",
    summary: "本漏洞存在於 Linux 核心的 USB HID Gadget 驅動程式中。當系統執行特定的設備操作序列時，例如：設定並綁定 HID Gadget、開啟設備檔案、使用 `EPOLL_CTL_ADD` 監聽、解除綁定（unbind）再重新綁定（bind）設備，並再次使用檔案描述符（fd）時，若啟用了 `CONFIG_DEBUG_LIST`，可能會發生 `list_del` 結構損壞（corruption）。根本原因在於 `f_hid` 驅動程式在 `hidg_bind` 函數中初始化了等待佇列（wait queues），但這些佇列的生命週期過短，在設備解除綁定後重新綁定時，佇列內容仍存在，導致重複初始化時發生資料結構損壞。修復方案是將等待佇列的初始化操作，從 `hidg_bind` 遷移到 `hidg_alloc`，確保其生命週期與功能實例（function instance）的生命週期一致，從而解決資源初始化時機錯誤的問題。",
    tags: ["Linux 核心", "USB HID Gadget", "list_del corruption", "CONFIG_DEBUG_LIST", "hidg_bind", "Linux 驅動程式"],
    title_en: "Linux Kernel Fixes USB HID Gadget Vulnerability: Correcting Resource Initialization Timing in `bind` Function",
    summary_en: "This vulnerability resides in the USB HID Gadget driver within the Linux kernel. When the system executes a specific sequence of device operations—for example, setting and binding the HID Gadget, opening the device file, using `EPOLL_CTL_ADD` for monitoring, unbinding, and then re-binding the device, followed by further use of the file descriptor (fd)—and if `CONFIG_DEBUG_LIST` is enabled, it may lead to `list_del` structure corruption. The root cause is that the `f_hid` driver initializes wait queues within the `hidg_bind` function, but these queues have an overly short lifecycle. When the device is unbound and subsequently re-bound, the queue contents persist, leading to data structure corruption during repeated initialization. The fix involves migrating the wait queue initialization operation from `hidg_bind` to `hidg_alloc`, ensuring that its lifecycle matches that of the function instance, thereby resolving the resource initialization timing error.",
    tags_en: ["Linux Kernel", "USB HID Gadget", "list_del corruption", "CONFIG_DEBUG_LIST", "hidg_bind", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31721", lang: "EN" }
    ]
  },
  {
    id: "20260501-029",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 USB Gadget 設備網路介面生命週期管理漏洞",
    summary: "本修補針對 Linux 核心中的 USB Gadget 設備網路介面 (net_device) 生命週期管理問題。當網路功能實例化並綁定到 Gadget 設備時，如果未正確處理設備的解綁 (unbind) 流程，在父設備被銷毀後，網路設備本身仍會存在，導致系統的 sysfs 符號連結 (symlinks) 處於懸空狀態 (dangling)。此問題影響了設備樹和 sysfs 的拓撲結構完整性。修補方案引入了 `device_move()` 函數，用於在 Gadget 設備樹和 `/sys/devices/virtual` 之間重新定位 (reparent) `net_device`。在最終解綁時，呼叫 `device_move(NULL)` 可將網路設備移動到虛擬設備樹，確保在重新綁定時能正確恢復 sysfs 拓撲和電源管理順序。此外，修補也透過 `borrowed_net` 旗標，維持與傳統複合驅動程式的相容性。",
    tags: ["Linux 核心", "USB Gadget", "net_device", "sysfs", "device_move", "Linux 驅動程式"],
    title_en: "Linux Kernel Patch: Fixing USB Gadget Device Network Interface Lifecycle Management Vulnerability",
    summary_en: "This patch addresses a lifecycle management issue with the USB Gadget device network interface (net_device) within the Linux kernel. When a network function is instantiated and bound to a Gadget device, if the unbind process is not handled correctly, the network device itself may persist even after the parent device is destroyed. This results in dangling sysfs symbolic links within the system. This issue affects the integrity of the device tree and sysfs topology. The patch introduces the `device_move()` function to reposition (reparent) the `net_device` between the Gadget device tree and `/sys/devices/virtual`. During final unbinding, calling `device_move(NULL)` moves the network device to the virtual device tree, ensuring that the sysfs topology and power management order are correctly restored upon re-binding. Furthermore, the patch maintains compatibility with traditional composite drivers using the `borrowed_net` flag.",
    tags_en: ["Linux Kernel", "USB Gadget", "net_device", "sysfs", "device_move", "Linux Driver"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31722", lang: "EN" }
    ]
  },
  {
    id: "20260501-030",
    trackers: ["os", "security"],
    category: "Linux",
    title: "Linux 核心修補：修復 USB Gadget 設備網路介面生命週期管理漏洞",
    summary: "本修補針對 Linux 核心中的 USB Gadget 設備功能，解決了網路設備（net_device）在綁定（bind）與解綁（unbind）生命週期管理上的問題。當功能設備解綁時，父設備會被銷毀，但網路設備本身會存活，導致 sysfs 類別路徑上出現懸空（dangling）的符號連結。此問題影響了系統在設備重新綁定時，sysfs 拓撲結構和電源管理順序的正確性。修補建議使用 `device_move()` 函數來重新定位（reparent）網路設備，使其能在設備樹和 `/sys/devices/virtual` 之間正確移動。在最終解綁時，呼叫 `device_move(NULL)` 可將網路設備移動到虛擬設備樹，確保設備銷毀前結構的完整性。此外，修補也透過使用 `bound` 旗標，維持了與傳統複合驅動程式（如 multi.c）的相容性。",
    tags: ["Linux 核心", "USB Gadget", "net_device", "sysfs", "device_move", "核心修補"],
    title_en: "Linux Kernel Patch: Fixing USB Gadget Device Network Interface Lifecycle Management Vulnerability",
    summary_en: "This patch addresses the USB Gadget device functionality within the Linux kernel, resolving issues with the lifecycle management of network devices (net_device) during binding and unbinding. When a functional device is unbound, the parent device is destroyed, but the network device itself persists, leading to dangling symbolic links in the sysfs class path. This issue affects the correctness of the sysfs topology structure and power management order when the device is re-bound. The patch recommends using the `device_move()` function to re-parent the network device, allowing it to move correctly between the device tree and `/sys/devices/virtual`. Furthermore, calling `device_move(NULL)` during final unbinding moves the network device to the virtual device tree, ensuring structural integrity before device destruction. Additionally, the patch maintains compatibility with traditional composite drivers (such as multi.c) by utilizing the `bound` flag.",
    tags_en: ["Linux Kernel", "USB Gadget", "net_device", "sysfs", "device_move", "Kernel Patch"],
    sources: [
      { name: "NVD CVE API", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-31723", lang: "EN" }
    ]
  }
];
