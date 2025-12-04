#!/bin/bash

echo "=== 設定 Git 認證資訊 ==="
echo ""
echo "請輸入你的 GitHub 資訊："
echo ""

read -p "GitHub 用戶名: " GITHUB_USERNAME
read -sp "Personal Access Token: " GITHUB_TOKEN
echo ""
echo ""

echo "正在設定認證資訊..."
echo "protocol=https
host=github.com
username=$GITHUB_USERNAME
password=$GITHUB_TOKEN" | git credential approve

echo ""
echo "✅ 認證資訊已設定完成！"
echo ""
echo "現在可以執行 push："
echo "  git push -u BeautyBrow-Studio main"

