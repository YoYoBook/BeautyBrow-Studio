<!-- df919d86-992b-4082-b678-df8e7a410524 d4a9429c-d49f-4f54-bcfd-b8e25206039d -->
# 修復 BB.html 外部依賴並遷移到 newbb.html

## 問題分析

BB.html 無法單獨開啟的主要原因：

1. **外部 SDK 依賴**：依賴 `/_sdk/element_sdk.js` 和 `/_sdk/data_sdk.js`（第9行和第97行）
2. **初始化邏輯問題**：頁面渲染完全依賴 `window.elementSdk` 對象，如果 SDK 未載入，頁面不會初始化

## 修復方案

創建完全獨立的版本，移除 SDK 依賴，直接使用 `defaultConfig` 自動初始化。

## 實施步驟

### 步驟 1：移除外部 SDK 腳本引用

- 刪除第9行：`<script src="/_sdk/element_sdk.js"></script>`
- 刪除第97行：`<script src="/_sdk/data_sdk.js" type="text/javascript"></script>`

### 步驟 2：修改初始化邏輯

- 將 `if (window.elementSdk)` 條件改為無條件執行
- 在頁面載入時自動使用 `defaultConfig` 初始化
- 修改 `switchTab` 函數，使其在沒有 SDK 時也能正常工作

### 步驟 3：添加自動初始化代碼

- 在頁面載入完成後（DOMContentLoaded），自動調用 `onConfigChange(defaultConfig)`
- 確保頁面在沒有 SDK 的情況下也能正常渲染

### 步驟 4：修復代碼中的小問題

- 修復第104行：`brand_tagline` 字串的引號問題（結尾引號錯誤）
- 修復第177行和第219行：字串中的引號問題
- 修復第429-441行：`renderEyebrowDesign` 函數中標題結構混亂的問題

### 步驟 5：遷移到 newbb.html

- 將修復後的完整 HTML 內容寫入 `newbb.html`
- 確保所有功能正常運作

## 具體修改內容

### 文件：newbb.html

**修改 1：移除 SDK 引用（第9行和第97行）**

- 刪除兩個 `<script src="/_sdk/...">` 標籤

**修改 2：修復字串引號錯誤**

- 第104行：修正結尾引號
- 第177行：修正引號
- 第219行：修正引號

**修改 3：修復 renderEyebrowDesign 函數（第429-441行）**

- 修正標題結構，移除重複的內容

**修改 4：修改初始化邏輯（第1047-1112行）**

- 將 SDK 初始化邏輯改為直接使用 defaultConfig
- 添加頁面載入完成後的自動初始化

**修改 5：修改 switchTab 函數（第1040-1045行）**

- 讓其在沒有 SDK 時也能正常工作，直接使用 defaultConfig

## 預期結果

修復後的 `newbb.html` 將：

- ✅ 完全獨立運行，無需任何外部文件
- ✅ 自動使用 defaultConfig 初始化頁面
- ✅ 所有功能正常運作（標籤切換、內容顯示等）
- ✅ 可直接在瀏覽器中打開預覽
- ✅ 保留所有原始功能和樣式

### To-dos

- [ ] 移除 BB.html 中的兩個外部 SDK 腳本引用（element_sdk.js 和 data_sdk.js）
- [ ] 修復代碼中的字串引號錯誤（第104、177、219行）
- [ ] 修復 renderEyebrowDesign 函數中的標題結構問題（第429-441行）
- [ ] 修改初始化邏輯，移除對 window.elementSdk 的依賴，直接使用 defaultConfig
- [ ] 添加頁面載入完成後的自動初始化代碼（DOMContentLoaded 事件）
- [ ] 修改 switchTab 函數，使其在沒有 SDK 時也能正常工作
- [ ] 將修復後的完整內容寫入 newbb.html 文件