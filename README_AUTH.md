# Git 認證設定說明

## 方式 1：使用腳本（推薦）

在你的終端中執行：

```bash
cd /Users/yoyo/Downloads/BB
python3 setup_git_auth.py
```

然後按照提示輸入：
- GitHub 用戶名
- Personal Access Token

## 方式 2：使用環境變數

```bash
export GITHUB_USERNAME='你的用戶名'
export GITHUB_TOKEN='你的token'
python3 setup_git_auth.py
```

## 方式 3：直接使用 git credential

```bash
echo "protocol=https
host=github.com
username=你的用戶名
password=你的token" | git credential approve
```

## 方式 4：首次 push 時輸入

直接執行 push，系統會提示輸入：
- Username: 你的 GitHub 用戶名
- Password: 你的 Personal Access Token

macOS 會自動將認證資訊儲存到鑰匙串中。

