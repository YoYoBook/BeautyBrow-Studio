#!/bin/bash

echo "=== Git 認證設定 ==="
echo ""
read -p "請輸入你的 GitHub 用戶名: " GITHUB_USERNAME
read -sp "請輸入你的 Personal Access Token: " GITHUB_TOKEN
echo ""

# 設定 credential
echo "正在設定認證資訊..."
echo "protocol=https
host=github.com
username=$GITHUB_USERNAME
password=$GITHUB_TOKEN" | git credential approve

echo ""
echo "✅ 認證資訊已設定完成！"
echo ""
echo "現在你可以嘗試 push 了："
echo "  git push BeautyBrow-Studio main"

