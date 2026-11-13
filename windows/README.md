# NewsTracker：Windows 獨立版（不需要 WSL）

同一份程式碼。在 Windows 上，所有寫入的資料都放在一個資料夾裡，所以搬到另一台電腦只要搬那個資料夾，或用匯出／匯入。

## 可攜版（建議：免安裝 Python）

分成兩個 zip：

| 檔案 | 內容 | 多久換一次 |
|---|---|---|
| `NewsTracker-runtime-<代號>.zip` | 內附的 Python 與所有套件（約 79 MB） | 只有 Python 版本或套件清單變動時 |
| `NewsTracker-app-<版本>.zip` | 程式本身（不到 1 MB） | 每次更新 |

1. 兩個 zip 都解壓到同一個位置，例如 `D:\`，會得到 `D:\NewsTracker\`（路徑可含中文或空白）。
2. 執行 `D:\NewsTracker\NewsTracker.cmd`。

程式更新時只要把新的 app zip 解壓覆蓋即可。若新版需要不同的執行環境，`NewsTracker.cmd` 會直接告訴你要哪一個 runtime zip。

不需要安裝 Python、不用跑安裝腳本，也不會改 PATH 或登錄檔。要建捷徑就自己對 `NewsTracker.cmd` 建一個。資料放在 `%LOCALAPPDATA%\NewsTracker`（或 `NEWSTRACKER_HOME`），換版不受影響；第一次執行會自動建立新聞來源清單。

平常用 `tracker portable` 產生目前 commit 的版本（不升版、不打包，app 檔名為 `<版本>-<commit>`；runtime 已存在就不重做）；`tracker pack` 發行時也會一併產生。兩者都放在專案資料夾的 `release\`（可用 `--release-dir` 改；需要建置機上有 Windows Python 3.11+ 與網路），也可以單獨建置：

```bat
powershell -ExecutionPolicy Bypass -File windows\build-portable.ps1 -SourceZip Tracker-2.31.zip
```

以下「需要什麼」與「安裝」是用 Python 自行安裝的方式；用可攜版可以跳過 Python 那一列和安裝步驟。

## 需要什麼

| 項目 | 用途 | 必要？ |
|---|---|---|
| Python 3.11 以上 | 執行程式（安裝腳本找不到時會提議用 winget 安裝）；可攜版不需要 | 必要 |
| Google Chrome（或 Edge） | 需要 JavaScript 的來源與 Gemini 後端（控制台用預設瀏覽器開啟） | 建議 |
| 區網內的 ollama 主機（`gemma4:e4b`） | 摘要、翻譯 | 必要 |
| Node.js ＋ firebase-tools | 發布到 Firebase Hosting | 選用 |

本機**不需要** GPU，也不需要安裝 ollama。WSL 版另外有 embed／rerank 兩個本機服務，Windows 版沒有；這兩個服務不在時，程式會自動放行，不影響更新。

## 安裝

1. 把發行 zip 解壓到任意資料夾，例如 `D:\NewsTracker`。
2. 在該資料夾執行：

   ```bat
   powershell -ExecutionPolicy Bypass -File windows\install.ps1
   ```

   可加的參數：
   - `-ImportData D:\newstracker-data.zip`：同時匯入舊電腦的資料，並重新產生網站。
   - `-WithFirebase`：用 winget 安裝 Node.js LTS 與 firebase-tools。
   - `-NoShortcuts`：不建立桌面與開始功能表捷徑。
3. 開啟桌面的 **NewsTracker Console**，或直接執行 `NewsTracker.cmd`。

## 從舊電腦搬資料

在舊電腦（WSL 版也可以）執行：

```bash
tracker export-data /mnt/d/newstracker-data.zip      # WSL
NewsTracker.cmd export-data D:\newstracker-data.zip  # Windows
```

zip 裡有資料庫、ollama 端點清單，以及 Windows 版的 settings.json。在新電腦執行：

```bat
NewsTracker.cmd import-data D:\newstracker-data.zip
NewsTracker.cmd render-all
```

匯入時，舊電腦上的路徑設定（輸出資料夾、頁面範本、Chrome 路徑）會清成預設值，定期更新會先停用，需要在控制台重新啟用。

## 控制台

`NewsTracker.cmd` 不加參數時，會用你的預設瀏覽器開啟控制台（`http://127.0.0.1:<埠>`）。標題旁顯示目前的版本（例如 `v2.31-d360ab4`）。

需要瀏覽器的來源和 Gemini 後端另外使用程式自己的 Chrome：只在這些來源要抓取時才啟動，使用獨立的設定檔（資料夾裡的 `chrome\`）並開除錯埠（預設 9333），不會動到你平常用的瀏覽器。

- **重新設定並開始新的更新**：一次更新完成後，按這個鈕會帶回上次的參數（結束日自動移到今天、天數不變），改好再按「開始新的更新」，不必關掉控制台重開。
- **更新紀錄**：最近 50 次更新的時間、來源（定期／手動）、新聞區間、結果、新文章數、摘要數與耗時；可只看定期、手動或失敗的，點有錯誤的列可展開錯誤訊息。

除了原本的執行控制、LLM 端點和發布，Windows 版多一張「本機設定」卡片：

- **網站輸出**：產生的靜態網站放在哪裡，可以設成網站根目錄或網路磁碟。
- **頁面範本**：用自訂的 index.html 取代安裝目錄的 `ui\index.html`。
- **Chrome**：指定 chrome.exe 的位置。空白時會自動尋找 Chrome，找不到再用 Edge。
- **定期更新**：由程式自己執行，不使用 Windows 工作排程器。可以設每天固定時間或每 N 小時、每次更新最近幾天、完成後要不要發布；儲存後立即生效。控制台開著時就會依時間在背景更新（不必按「開始執行」），關掉控制台就停止；程式關閉期間錯過的時間不會補跑。不想開著控制台時，可改執行 `NewsTracker.cmd scheduler` 常駐（Ctrl+C 結束）。若有更新正在執行，該次排程會略過。每次的輸出在 `<home>\logs\schedule-*.log`。
- **Firebase**：啟用發布、填專案 ID、「登入 Firebase」（會開一個視窗跑 `firebase login`，每台電腦只要做一次）、「檢查登入」。

改了網站輸出或頁面範本的路徑後，要重新開啟控制台才會生效，接著再執行一次 `NewsTracker.cmd render-all`。

## 新聞網站

- **我的版面（分頁）**：頁面上方的分頁就是你自己的版面，每個分頁各自記住時間範圍、篩選條件、呈現方式與每頁篇數（存在這台電腦的瀏覽器裡）。「＋ 新增版面」可以從範本建立：主管晨報、漏洞分析、已遭利用漏洞、法規遵循、供應鏈安全、類型看板、未讀待看。右邊「⋯」可重新命名、複製、調整順序、刪除，以及匯出／匯入版面設定（JSON 檔，可給同事或搬到另一台電腦）。
- **呈現方式**：卡片、標題、精簡、雜誌、表格、看板（依新聞類型分欄）。
- **分頁**：每頁 20／50／100 篇，或連續捲動；排序可選最新、最舊、依來源、依類型。
- **進階篩選**：多選新聞類型與來源；標籤可包含或排除，並選「符合任一／全部符合」；關鍵字分「必須包含／包含任一／排除」，可只比對標題；也能只看未讀或關注命中。目前的條件顯示成小標籤，點 ✕ 移除。日期用上方的「時間」選。
- **操作導覽**：第一次開啟時會詢問要不要看導覽；之後隨時按右上角的「?」再看一次。
- 網址會記住目前的版面與條件，可以直接分享；收到的連結如果不屬於自己的版面，會以「連結檢視」開啟，按「存成新版面」即可保留。

## 資料放在哪裡

預設是 `%LOCALAPPDATA%\NewsTracker`。可以用環境變數 `NEWSTRACKER_HOME` 改到別處，例如隨身碟或 D 槽：

```
settings.json      本機設定（控制台會寫入）
endpoints.json     ollama 端點清單與已選的 LLM 後端
db\articles.sqlite 資料庫（每次更新成功後，backups\ 保留最近 7 份快照）
logs\  status.json 執行紀錄與最近一次的結果
site\firebase.json 第一次發布時自動產生
chrome\            程式用的 Chrome 設定檔
```

產生的網站預設放在**程式資料夾**下的 `html\`（`NewsTracker.cmd` 旁邊），可在設定中改到別處。換新版程式資料夾時記得帶走 `html\`，或執行一次 `NewsTracker.cmd render-all` 從資料庫重新產生。

## 常用指令

```bat
NewsTracker.cmd                          開控制台（最近 3 天）
NewsTracker.cmd daily --days 3 --deploy  無人值守更新一次，定期更新就是跑這個
NewsTracker.cmd scheduler                不開控制台，常駐依設定定期更新
NewsTracker.cmd deploy                   只發布
NewsTracker.cmd render-all               重新產生整個網站
NewsTracker.cmd export-data <zip>        匯出
NewsTracker.cmd import-data <zip> [--force]
```

## 與 WSL 版的差異

- WSL 版的路徑、排程和發布規則完全不變：只有 afu-delta 會發布到 afu-news。
- Windows 版的發布由設定決定，不受機器名稱限制。
- 如果同一台電腦上已經有其他程式佔用除錯埠 9333，在 `settings.json` 把 `cdp_port` 改成別的號碼即可。
