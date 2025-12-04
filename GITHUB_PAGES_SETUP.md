# GitHub Pages 設置指南

## 📋 快速設置步驟

### 方法 1：通過 GitHub 網頁界面（最簡單）

1. **前往你的 GitHub 倉庫**
   - 訪問：https://github.com/YoYoBook/BeautyBrow-Studio

2. **進入 Settings（設置）**
   - 點擊倉庫頁面右上角的 "Settings" 按鈕

3. **找到 Pages 設置**
   - 在左側菜單中找到 "Pages" 選項
   - 或者直接訪問：https://github.com/YoYoBook/BeautyBrow-Studio/settings/pages

4. **配置源**
   - 在 "Source" 部分，選擇：
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - 點擊 "Save" 保存

5. **等待部署**
   - GitHub 會自動構建和部署你的網站
   - 通常需要 1-2 分鐘
   - 部署完成後，你會看到一個網址，格式為：
     ```
     https://yoyobook.github.io/BeautyBrow-Studio/
     ```

### 方法 2：使用 GitHub Actions（自動化）

如果你想要更自動化的部署，可以創建一個 GitHub Actions workflow。

## 🌐 訪問你的網站

設置完成後，你的網站將在以下網址可用：

```
https://yoyobook.github.io/BeautyBrow-Studio/
```

## 📝 注意事項

1. **index.html 文件**
   - 我已經將 `newbb.html` 複製為 `index.html`
   - GitHub Pages 會自動使用 `index.html` 作為首頁

2. **自定義域名（可選）**
   - 如果你想使用自己的域名，可以在 Pages 設置中添加
   - 例如：`www.beautybrow-studio.com`

3. **更新內容**
   - 每次你 push 新的更改到 `main` 分支
   - GitHub Pages 會自動重新部署網站

4. **HTTPS**
   - GitHub Pages 自動提供 HTTPS 加密
   - 無需額外配置

## 🔧 故障排除

### 如果網站無法訪問

1. **檢查部署狀態**
   - 在倉庫的 "Actions" 標籤頁查看部署狀態
   - 如果有錯誤，會在那裡顯示

2. **檢查文件路徑**
   - 確保 `index.html` 在根目錄
   - 確保文件名正確（大小寫敏感）

3. **清除瀏覽器緩存**
   - 有時需要清除緩存才能看到更新

## 📚 更多資源

- [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- [自定義域名設置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

