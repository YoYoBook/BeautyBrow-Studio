#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import subprocess
import sys
import os

print("=== Git 認證設定 ===")
print("")

# 檢查是否有環境變數
username = os.environ.get('GITHUB_USERNAME')
token = os.environ.get('GITHUB_TOKEN')

if not username:
    username = input("請輸入你的 GitHub 用戶名: ").strip()

if not token:
    import getpass
    token = getpass.getpass("請輸入你的 Personal Access Token: ").strip()

if not username or not token:
    print("❌ 錯誤：用戶名和 token 不能為空！")
    print("")
    print("提示：你也可以使用環境變數：")
    print("  export GITHUB_USERNAME='你的用戶名'")
    print("  export GITHUB_TOKEN='你的token'")
    print("  python3 setup_git_auth.py")
    sys.exit(1)

# 構建 credential 資訊
credential_input = f"""protocol=https
host=github.com
username={username}
password={token}
"""

# 使用 git credential approve 設定
try:
    process = subprocess.Popen(
        ['git', 'credential', 'approve'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    stdout, stderr = process.communicate(input=credential_input)
    
    if process.returncode == 0:
        print("")
        print("✅ 認證資訊已成功設定到 macOS 鑰匙串！")
        print("")
        print("現在你可以嘗試 push 了：")
        print("  git push BeautyBrow-Studio main")
    else:
        print(f"❌ 設定失敗：{stderr}")
        sys.exit(1)
        
except Exception as e:
    print(f"❌ 發生錯誤：{e}")
    sys.exit(1)
