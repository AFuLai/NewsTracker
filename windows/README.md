# NewsTracker：Windows 獨立版（不需要 WSL）

同一份程式碼。在 Windows 上，所有寫入的資料都放在一個資料夾裡，所以搬到另一台電腦只要搬那個資料夾，或用匯出／匯入。

## 可攜版（建議：免安裝 Python）

`NewsTracker-portable-<版本>.zip` 內附 Python 和所有套件。

1. 解壓到任意資料夾，例如 `D:\NewsTracker`（路徑可含中文或空白）。
2. 執行裡面的 `NewsTracker.cmd`。

不需要安裝 Python、不用跑安裝腳本，也不會改 PATH 或登錄檔。要建捷徑就自己對 `NewsTracker.cmd` 建一個。資料一樣放在 `%LOCALAPPDATA%\NewsTracker`（或 `NEWSTRACKER_HOME`）。升級時解壓新版覆蓋或換資料夾即可，資料不受影響。

平常用 `tracker portable` 產生目前 commit 的可攜版（不升版、不打包，檔名為 `<版本>-<commit>`）；`tracker pack` 發行時也會一併產生。兩者都放在專案資料夾的 `release\`（可用 `--release-dir` 改；需要建置機上有 Windows Python 3.11+ 與網路），也可以單獨建置：

```bat
powershell -ExecutionPolicy Bypass -File windows\build-portable.ps1 -SourceZip Tracker-2.31.zip
```

以下「需要什麼」與「安裝」是用 Python 自行安裝的方式；用可攜版可以跳過 Python 那一列和安裝步驟。

## 需要什麼

| 項目 | 用途 | 必要？ |
|---|---|---|
| Python 3.11 以上 | 執行程式（安裝腳本找不到時會提議用 winget 安裝）；可攜版不需要 | 必要 |
| Google Chrome（或 Edge） | 控制台頁面，以及需要 JavaScript 的來源 | 建議 |
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

`NewsTracker.cmd` 不加參數時，會用程式自己的 Chrome 開啟控制台：

- 這個 Chrome 使用獨立的設定檔（資料夾裡的 `chrome\`），不會動到你平常用的 Chrome。
- 它同時開著除錯埠（預設 9999），需要瀏覽器的來源和 Gemini 後端都透過它運作。

除了原本的執行控制、LLM 端點和發布，Windows 版多一張「本機設定」卡片：

- **網站輸出**：產生的靜態網站放在哪裡，可以設成網站根目錄或網路磁碟。
- **頁面範本**：用自訂的 index.html 取代安裝目錄的 `ui\index.html`。
- **Chrome**：指定 chrome.exe 的位置。空白時會自動尋找 Chrome，找不到再用 Edge。
- **定期更新**：由程式自己執行，不使用 Windows 工作排程器。可以設每天固定時間或每 N 小時、每次更新最近幾天、完成後要不要發布；儲存後立即生效。控制台開著時就會依時間在背景更新（不必按「開始執行」），關掉控制台就停止；程式關閉期間錯過的時間不會補跑。不想開著控制台時，可改執行 `NewsTracker.cmd scheduler` 常駐（Ctrl+C 結束）。若有更新正在執行，該次排程會略過。每次的輸出在 `<home>\logs\schedule-*.log`。
- **Firebase**：啟用發布、填專案 ID、「登入 Firebase」（會開一個視窗跑 `firebase login`，每台電腦只要做一次）、「檢查登入」。

改了網站輸出或頁面範本的路徑後，要重新開啟控制台才會生效，接著再執行一次 `NewsTracker.cmd render-all`。

## 資料放在哪裡

預設是 `%LOCALAPPDATA%\NewsTracker`。可以用環境變數 `NEWSTRACKER_HOME` 改到別處，例如隨身碟或 D 槽：

```
settings.json      本機設定（控制台會寫入）
endpoints.json     ollama 端點清單與已選的 LLM 後端
db\articles.sqlite 資料庫（每次更新成功後，backups\ 保留最近 7 份快照）
logs\  status.json 執行紀錄與最近一次的結果
site\public\       產生的網站（可在設定中更改）
site\firebase.json 第一次發布時自動產生
chrome\            程式用的 Chrome 設定檔
```

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
- 如果同一台電腦上已經有其他 Chrome 佔用除錯埠 9999，在 `settings.json` 把 `cdp_port` 改成別的號碼即可。
