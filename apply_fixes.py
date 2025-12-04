#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
完整修復腳本：修復 BB.html 並創建 newbb.html
"""
import sys
import re

def fix_html(content):
    """應用所有修復到 HTML 內容"""
    
    # 修復1: 移除 SDK 引用
    content = re.sub(r'\s*<script src="/_sdk/element_sdk\.js"></script>\s*\n', '\n', content)
    content = re.sub(r'\s*<script src="/_sdk/data_sdk\.js"[^>]*></script>\s*\n', '\n', content)
    
    # 修復2: 修復引號錯誤
    content = content.replace("'無修復期'", '"無修復期"')
    content = content.replace("'享9折優惠", '"享9折優惠"')
    content = content.replace("'超過三個月，依照價目表收費'", '"超過三個月，依照價目表收費"')
    content = content.replace('brand_tagline: "專業半永久霧眉 · 自然韓系風格",', 'brand_tagline: "專業半永久霧眉 · 自然韓系風格",')
    
    # 修復3: 修復 renderEyebrowDesign 函數的標題結構混亂
    old_eyebrow = '''<h2 class="mb-8 text-center" style="font-size: ${baseFont * 2.2}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            
         <div class="card p-8 rounded-3xl text-center" style="background: linear-gradient(135deg, #E8D5C8 0%, #FFFFFF 100%); box-shadow: 0 4px 20px rgba(199, 162, 144, 0.15);">
            <h3 class="mb-4" style="font-size: 24px; font-family: Noto Sans TC, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #5C4A42; font-weight: 500;">
              💡 眉型設計理念
            </h3>
            <p style="font-size: 16.8px; font-family: Noto Sans TC, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #5C4A42; line-height: 2; opacity: 0.85; max-width: 800px; margin: 0 auto;">
              每個人的臉型、五官比例都不相同，我們會根據您的特質，<br>
              設計最適合您的眉型，打造自然協調的完美眉毛 ✨
            </p>
          </div>
    
            眉型設計展示
          </h2>'''
    
    new_eyebrow = '''<h2 class="mb-8 text-center" style="font-size: ${baseFont * 2.2}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            眉型設計展示
          </h2>
          
          <div class="card p-8 rounded-3xl text-center mb-8" style="background: linear-gradient(135deg, #E8D5C8 0%, #FFFFFF 100%); box-shadow: 0 4px 20px rgba(199, 162, 144, 0.15);">
            <h3 class="mb-4" style="font-size: 24px; font-family: Noto Sans TC, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #5C4A42; font-weight: 500;">
              💡 眉型設計理念
            </h3>
            <p style="font-size: 16.8px; font-family: Noto Sans TC, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #5C4A42; line-height: 2; opacity: 0.85; max-width: 800px; margin: 0 auto;">
              每個人的臉型、五官比例都不相同，我們會根據您的特質，<br>
              設計最適合您的眉型，打造自然協調的完美眉毛 ✨
            </p>
          </div>'''
    
    content = content.replace(old_eyebrow, new_eyebrow)
    
    # 修復4: 修改 switchTab 函數，使其不依賴 SDK
    old_switch = '''    window.switchTab = function(tabId) {
      currentTab = tabId;
      if (window.elementSdk && window.elementSdk.config) {
        onConfigChange(window.elementSdk.config);
      }
    };'''
    
    new_switch = '''    window.switchTab = function(tabId) {
      currentTab = tabId;
      const config = window.currentConfig || defaultConfig;
      onConfigChange(config);
    };'''
    
    content = content.replace(old_switch, new_switch)
    
    # 修復5: 替換 SDK 初始化邏輯為直接使用 defaultConfig
    old_init = '''    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.card_background || defaultConfig.card_background,
              set: (value) => {
                config.card_background = value;
                window.elementSdk.setConfig({ card_background: value });
              }
            },
            {
              get: () => config.primary_text || defaultConfig.primary_text,
              set: (value) => {
                config.primary_text = value;
                window.elementSdk.setConfig({ primary_text: value });
              }
            },
            {
              get: () => config.primary_action || defaultConfig.primary_action,
              set: (value) => {
                config.primary_action = value;
                window.elementSdk.setConfig({ primary_action: value });
              }
            },
            {
              get: () => config.secondary_action || defaultConfig.secondary_action,
              set: (value) => {
                config.secondary_action = value;
                window.elementSdk.setConfig({ secondary_action: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["brand_name", config.brand_name || defaultConfig.brand_name],
          ["brand_tagline", config.brand_tagline || defaultConfig.brand_tagline],
          ["instagram_handle", config.instagram_handle || defaultConfig.instagram_handle],
          ["line_id", config.line_id || defaultConfig.line_id]
        ])
      });
    }'''
    
    new_init = '''    // 使用 defaultConfig 初始化頁面
    window.currentConfig = { ...defaultConfig };
    
    // 頁面載入完成後自動初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        onConfigChange(window.currentConfig);
      });
    } else {
      onConfigChange(window.currentConfig);
    }'''
    
    content = content.replace(old_init, new_init)
    
    return content

if __name__ == '__main__':
    # 從標準輸入讀取內容
    content = sys.stdin.read()
    if not content or len(content) < 100:
        print("Error: No valid content provided", file=sys.stderr)
        sys.exit(1)
    
    # 應用修復
    fixed_content = fix_html(content)
    
    # 輸出修復後的內容
    sys.stdout.write(fixed_content)

