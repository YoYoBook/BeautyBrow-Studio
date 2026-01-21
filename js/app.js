    const icons = {
      alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
      clipboardList: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
      home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
      clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
      sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,
      calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
      refreshCw: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
      check: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg>`,
      lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
      heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
      mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
      train: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/></svg>`,
      flower: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/></svg>`,
      ban: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
      userCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16,11 18,13 22,9"/></svg>`
    };

    // 輔助函數：獲取帶顏色的圖示
    function getIcon(name, color = 'currentColor', size = 24) {
      const icon = icons[name] || '';
      return icon.replace(/width="24"/g, `width="${size}"`).replace(/height="24"/g, `height="${size}"`).replace(/stroke="currentColor"/g, `stroke="${color}"`);
    }

    const defaultConfig = {
      brand_name: "美眉 ｜ 美學",
      brand_tagline: "專業半永久霧眉 ·原生感風格",
      instagram_handle: "beautybrow_studio",
      line_id: "@816winfr",
      background_color: "#FAF7F4",
      card_background: "#FFFFFF",
      primary_text: "#2D2D2D",
      primary_action: "#9D7E5F",
      secondary_action: "#E0D4C5",
      accent_color: "#B89977",
      light_gray: "#F0EBE6",
      border_color: "#DED8D0",
      font_family: "Noto Sans TC",
      heading_font_family: "Noto Serif TC",
      font_size: 14
    };

    // 目前 tab（可由網址 hash 指定，例如：index.html#pricing）
    let currentTab = 'home';

    function isValidTabId(tabId) {
      return tabs.some(t => t.id === tabId);
    }

    function getTabFromUrl() {
      // 支援兩種格式：
      // 1) #pricing
      // 2) #tab=pricing
      const raw = (window.location.hash || '').replace(/^#/, '').trim();
      if (!raw) return null;
      if (raw.startsWith('tab=')) return raw.slice(4) || null;
      return raw;
    }

    function setUrlTab(tabId, { replace = false } = {}) {
      const url = new URL(window.location.href);
      url.hash = `#${tabId}`;
      if (replace) {
        window.history.replaceState(null, '', url.toString());
      } else {
        window.history.pushState(null, '', url.toString());
      }
    }

    const tabs = [
      { id: 'home', name: '首頁', icon: '' },
      { id: 'brow-guide', name: '眉型設計指南', icon: '' },
      { id: 'pricing', name: '價目表', icon: '' },
      { id: 'booking', name: '預約須知', icon: '' },
      { id: 'preparation', name: '施作前準備', icon: '' },
      { id: 'aftercare', name: '照護須知', icon: '' },
      { id: 'location', name: '服務地點', icon: '' },
      { id: 'faq-brow', name: '霧眉Q&A', icon: '' },
      { id: 'faq-removal', name: '淡色Q&A', icon: '' }
    ];

    function copyAddress(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } finally {
        document.body.removeChild(textarea);
      }
    }

    function renderHome(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      return `
        <div class="text-center mb-6 fade-in" style="margin-top: -1rem;">
          <div class="flex justify-center" style="margin-bottom: -2rem;">
            <img src="sources/logo.png" alt="${config.brand_name || defaultConfig.brand_name}" style="max-width: 200px; height: auto; object-fit: contain; background: transparent;">
          </div>
          <h1 class="mb-3" style="font-size: ${baseFont * 3}px; font-family: '可畫書寫行楷-繁', '標楷體', 'BiauKai', 'STKaiti', 'KaiTi', '楷體', 'Noto Serif TC', serif; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 300; letter-spacing: 4px;">
            ${config.brand_name || defaultConfig.brand_name}
          </h1>
          <p style="font-size: ${baseFont * 1.2}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.8; letter-spacing: 1px;">
            ${config.brand_tagline || defaultConfig.brand_tagline}
          </p>
        </div>

        <!-- 眉型設計理念 -->
        <div class="mb-8 fade-in">
          <div class="card p-8 rounded-3xl text-center" style="background: linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%); box-shadow: 0 4px 20px rgba(157, 126, 95, 0.18);">
            <p style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.85; max-width: 740px; margin: 0 auto; font-weight: 300;">
              我的眉型設計不是追求流行<br>是「客製化美學」<br><br>
              我深信最完美的眉毛是與五官、臉型、眉骨結構、日常妝感與個人風格完全和諧的存在<br><br>
              量身打造最自然、最協調的眉，不追求誇張濃度，只呈現剛剛好的精緻與柔和<br>
              讓眉毛不只是妝容的一部分，而是提升氣質的細節<br><br>
              希望透過細緻的設計與溫柔的霧感，讓你每天照鏡子都更喜歡自己 ✨
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-7 mb-10">
          <div class="card p-8 rounded-3xl fade-in" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 20px rgba(157, 126, 95, 0.15);">
            <div class="text-center mb-1">
              <span style="font-size: ${baseFont * 3}px;"></span>
            </div>
            <h2 class="text-center mb-2" style="font-size: ${baseFont * 1.8}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
              霧眉服務
            </h2>
            <p class="mb-6" style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.85; text-align: center;">
              採用最新技術，打造自然柔霧妝感<br>讓眉型更加立體有神
            </p>
            <div class="grid grid-cols-2 gap-3">
              ${['精緻霧感', '持久穩定', '專業設計', '客製眉形'].map(feature => `
                <div class="p-4 rounded-2xl text-center" style="background: ${config.background_color || defaultConfig.background_color};">
                  <span style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; display: inline-flex; align-items: center; gap: 6px;">${getIcon('check', config.primary_action || defaultConfig.primary_action, 16)} ${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card p-8 rounded-3xl fade-in" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 20px rgba(157, 126, 95, 0.15);">
            <div class="text-center mb-1">
              <span style="font-size: ${baseFont * 3}px;"></span>
            </div>
            <h2 class="text-center mb-2" style="font-size: ${baseFont * 1.8}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
              淡色服務
            </h2>
            <p class="mb-6" style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.85; text-align: center;">
              溫和有效的淡色技術<br>重新打造理想眉型
            </p>
            <div class="grid grid-cols-2 gap-3">
              ${['溫和淡色', '無修復期', '漸進淡化', '低敏無負擔'].map(feature => `
                <div class="p-4 rounded-2xl text-center" style="background: ${config.background_color || defaultConfig.background_color};">
                  <span style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; display: inline-flex; align-items: center; gap: 6px;">${getIcon('check', config.primary_action || defaultConfig.primary_action, 16)} ${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="card p-8 rounded-3xl text-center fade-in mb-8" style="background: linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%); box-shadow: 0 4px 20px rgba(157, 126, 95, 0.18);">
          <h3 class="mb-4" style="font-size: ${baseFont * 1.6}px; font-family: ${headingFontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon('alertTriangle', config.primary_action || defaultConfig.primary_action, 28)}</span> 霧眉預約前｜須知請詳閱
          </h3>
          <div class="max-w-3xl mx-auto" style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.9; opacity: 0.85;">
            <p class="mb-5">若有以下任一狀況，暫不建議施作霧眉：</p>
            <p style="line-height:2;">
              蟹足腫、糖尿病、高血壓、心血管疾病、愛滋病、B型肝炎、免疫力失調、服用抗凝血藥物、精神疾病、傳染性疾病、嚴重異位性皮膚炎、嚴重過敏性膚況
            </p>
            <div class="mt-6 pt-6" style="border-top: 1px solid rgba(157, 126, 95, 0.28);">
              <p style="font-size: ${baseFont * 1.0}px; opacity: 0.75; text-align: center; line-height: 1.8;">
                每個人顴骨高低、眉型長短都不同，兩邊眉毛不會「完全對稱」是自然現象<br>
                若您是追求極致完美的眉型控，建議再三考慮後預約唷
              </p>
            </div>
          </div>
        </div>
      `;
    }

    function renderBrowGuide(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      return `
        <!-- 眉型設計指南 -->
        <div class="mb-8 fade-in">
          <h3 class="mb-6 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; letter-spacing: 1px;">
            ✨ 眉型設計指南
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            ${[
          {
            img: 'sources/鵝蛋臉.jpg',
            name: '鵝蛋臉',
            color: '#D4C4B0',
            description: '這是最標準的完美臉型！<br>擁有令人稱羨的 1:1.5 黃金長寬比例額頭與下巴的比例恰到好處，線條圓潤流暢，沒有明顯的稜角，整體輪廓流暢給人溫柔舒服的感覺',
            features: '標準眉、微挑眉 (幾乎適合所有眉型)',
            eyebrowStyle: '鵝蛋臉本身已具備完美的平衡感，設計的核心在於「襯托氣質」<br><br>▫️眉峰： 微上揚一點，讓精神看起來更好<br>▫️眉尾： 順順地往下，順延眼型弧度',
            tips: '鵝蛋臉不需要靠眉毛來「修飾」臉型（不用特地拉長或變短），最適合順著眼睛的弧度，做出一對柔和自然的眉毛。<br><br>太刻意強調角度反而會破壞妳原本溫柔的氣質喔！讓我為你保留這份天生的精緻感吧'
          },
          {
            img: 'sources/心型臉.jpg',
            name: '心形臉',
            color: '#9D7E5F',
            description: '心形臉的特色是額頭較寬、下巴尖細，呈現出優雅的倒三角形',
            features: '彎月眉、圓弧眉',
            eyebrowStyle: '縮短額寬視覺 ➕ 柔化尖下巴 <br> ▫️ 眉峰： 圓潤且位置適中。眉峰不宜過高，需用圓滑的線條來平衡下巴的尖銳感<br> ▫️ 眉型： 強調柔霧感與弧度，眉毛長度要適中（不可太短），有助於在視覺上收窄寬闊的額頭<br> <br> ❌ NG 眉型：<br> ▫️歐美眉： 銳利的眉峰會讓原本就寬的額頭看起來更寬，也會讓下巴看起來更尖銳，整張臉會顯得比例失衡',
            tips: '對於心型臉來說，眉毛是「平衡劑」<br> 拒絕任何生硬的稜角，而是用一條完美的拋物線，去中和臉部的銳利線條<br> <br> 這種設計能把天生的「精緻感」轉化為「甜美感」，讓眼神看起來更溫柔水靈'
          },
          {
            img: 'sources/長型臉.jpg',
            name: '長型臉',
            color: '#D4C4B0',
            description: '臉型長度明顯大於寬度，中庭較長<br>給人氣質的印象，但也容易顯得較為成熟',
            features: '微平眉',
            eyebrowStyle: '橫向延伸 ➕ 縮短中庭 <br>▫️眉型： 採用一字平眉或微平眉，利用水平線條來中和臉部的垂直感。<br>▫️眉寬： 建議保留一點粗度，稍微加粗的眉型可以縮短額頭的視覺高度<br><br>❌ NG 眉型：<br>▫️歐美高挑眉、大彎眉： 拱起的眉型會再次拉長臉部比例，讓臉看起來無止盡延伸<br>▫️眉尾下垂過多： 會讓臉部線條看起來往下垮，顯得沒精神',
            tips: '別讓眉毛「拉長」了妳的臉！ <br>長型臉最適合平直的線條，能起到「橫向擴張」的作用，讓原本窄長的臉型看起來豐潤一些<br> <br>這種設計能有效「縮短臉長」，讓你從成熟姊姊感，瞬間變身溫柔鄰家女孩'
          },
          {
            img: 'sources/圓型臉.jpg',
            name: '圓型臉',
            color: '#B89977',
            description: '最強逆齡的「童顏」臉型！<br>臉部輪廓圓潤、沒有稜角，給人可愛的甜美印象',
            features: '標準微挑眉',
            eyebrowStyle: '圓臉的設計核心在於「破除圓潤感，增加立體度」<br><br>▫️眉型：帶點弧度，避免太過生硬的直線<br>▫️眉峰：微上挑，讓圓潤的臉蛋增加稜角與立體感<br>▫️眉尾：眉尾適度拉長，達到收縮臉型的效果<br><br>❌ NG 眉型<br>▫️一字平眉： 會像把臉「壓扁」了，讓五官看起來更分散、臉顯得更圓<br>▫️短眉： 眉尾太短會讓太陽穴留白過多，視覺上臉會變寬',
            tips: '目標是在視覺上將臉部「垂直拉伸」利用略為上揚的眉型，引導視線向上延伸，打破圓臉的圓潤感<br><br>這不僅能保留妳的可愛，還能幫妳加一點立體輪廓，讓臉看起來更小、更精緻！'
          },
          {
            img: 'sources/方型臉.jpg',
            name: '方形臉',
            color: '#B89977',
            description: '下顎骨骼感較強，臉部線條稜角分明<br>雖然看起來很有個性，但有時會擔心缺乏柔和感，給人比較嚴肅的印象',
            features: '彎月眉、圓弧眉',
            eyebrowStyle: '柔化臉部稜角 ➕ 縮窄下顎視覺<br>▫️ 眉峰： 圓潤無稜角。像月亮般的圓弧線條，能視覺上削弱下巴的方形感<br>▫️ 眉寬： 建議保留一定粗度，太細的眉毛會壓不住方臉的份量感<br><br>❌ NG 眉型<br>▫️平眉： 方臉畫平眉是大忌！會讓臉看起來更短、更寬、更方<br>▫️劍眉/銳利眉： 三角形的眉峰會加重臉部的「剛硬感」',
            tips: '這是標準的「以柔克剛」魔法！<br> 不與臉型對抗，而是利用眉毛的圓弧曲線，去包容並修飾臉部的方正線條<br><br>這種設計能讓妳的臉型看起來更加順暢柔和，瞬間從「嚴肅主管」變身「氣質女神」'
          },
          {
            img: 'sources/菱形臉.jpg',
            name: '菱形臉',
            color: '#9D7E5F',
            description: '自帶氣場的「鑽石級」骨相！<br>顴骨較寬且明顯，額頭與下巴較窄，太陽穴容易有凹陷感。輪廓分明且個性十足，但有時會顯得比較銳利',
            features: '柔和小彎眉',
            eyebrowStyle: '弱化強勢顴骨 ➕ 填補太陽穴凹陷<br><br>▫️眉峰： 靠前、圓滑，將視覺重心內移，不讓視線停留在顴骨最寬處<br>▫️眉尾： 拉長，在視覺上修飾凹陷的太陽穴，讓臉型線條更順暢<br><br>❌ NG 眉型<br>▫️平眉： 會顯得呆板，且對比之下會讓顴骨看起來更寬<br>▫️短眉、歐美高挑眉： 眉尾太短會暴露太陽穴缺點；太銳利的眉峰會讓臉看起來更兇',
            tips: '利用眉毛的弧度來進行「視覺微整」<br>重點在於拉長眉尾來平衡顴骨的寬度，並用圓潤的眉峰去柔化臉部的稜角<br><br>這樣設計後的眉毛，能讓原本銳利的鑽石臉，瞬間變得流暢又精緻，散發出獨特的知性美'
          }
        ].map(face => `
              <div class="card rounded-3xl overflow-hidden" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 20px rgba(157, 126, 95, 0.16); transition: all 0.3s ease; cursor: pointer;" onclick="openFaceModal('${face.name}', '${face.img}', '${face.description}', '${face.features}', '${face.eyebrowStyle}', '${face.tips}')">
                <div style="position: relative; overflow: hidden; aspect-ratio: 4/5;">
                  <img src="${face.img}" alt="${face.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 20px 16px 12px;">
                    <p style="font-size: ${baseFont * 1.1}px; font-family: ${fontStack}; color: white; font-weight: 500; text-align: center; margin: 0;">
                      ${face.name}
                    </p>
                  </div>
                  <div class="face-card-overlay">
                    <div class="face-card-hint">點擊查看詳情</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <p class="mt-6 text-center" style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.7; line-height: 1.8;">
            點擊圖片了解更多 · 每種臉型都有最適合的眉型設計，會根據您的臉型、五官比例與個人風格，量身打造專屬於您的完美眉型
          </p>
        </div>

        <!-- 臉型浮層 -->
        <div id="faceModal" class="face-modal" onclick="if(event.target.id === 'faceModal') closeFaceModal()">
          <button class="face-modal-close" onclick="closeFaceModal()">×</button>
          <div class="face-modal-content">
            <div id="faceModalBody"></div>
          </div>
        </div>
      `;
    }

    function renderPricing(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      // 霧眉價格列表
      const browPrices = [
        { title: '新客霧眉', price: '活動價 $6,800', originalPrice: '原價 $7,500', note: '含 3 個月內免費補色乙次', highlight: true, special: true },
        { title: '6個月內｜單次補色', price: '$2,000-$3,000', note: '', special: true },
        { title: '6–12個月內｜單次補色', price: '$5,000', note: '', special: true },
        { title: '12–14個月內｜單次補色', price: '$5,500', note: '', special: true },
        { title: '14個月以上｜視為新作', price: '$6,375', note: "享原價 85 折優惠", special: true },
        { title: '兩人同行優惠', price: '$5,800', note: '現折 $1,000｜須預約不同時段', special: true },
        { title: '男士霧眉', price: '以上費用 +$1,000', note: '', special: true }
      ];

      // 淡色價格列表
      const removalPrices = [
        { title: '淡色單堂', price: '活動價 $1,499', originalPrice: '原價 $1,799', note: '', special: true },
        { title: '淡色包堂3次', price: '活動價 $4,199', originalPrice: '原價 $4,999', note: '平均 $1,400／堂', special: true },
        { title: '淡色包堂5次', price: '活動價 $6,499', originalPrice: '原價 $7,999', note: '平均 $1,300／堂', special: true }
      ];

      const renderPriceItem = (item) => {
        return `
                <div class="card p-6 rounded-2xl" style="background: ${item.highlight ? `linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%)` : config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(199, 162, 144, ${item.highlight ? '0.2' : '0.1'}); ${item.special ? `border: 2px solid ${config.primary_action || defaultConfig.primary_action};` : ''}; display: flex; align-items: center;">
                  <div style="flex: 1;">
                    <div class="mb-2">
                      <h3 style="font-size: ${baseFont * 1.1}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500; white-space: nowrap;">
                        ${item.male ? ' ' : ''}${item.title}
                      </h3>
                    </div>
                    ${item.note ? `
                      <p style="font-size: ${baseFont * 0.85}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.7;">
                        ${item.note}
                      </p>
                    ` : ''}
                  </div>
                  <div class="px-4 py-2 rounded-xl flex-shrink-0 ${item.highlight ? '' : `bg-opacity-50`}" style="background: ${item.highlight ? config.primary_action || defaultConfig.primary_action : config.background_color || defaultConfig.background_color};">
                    <div style="display: flex; flex-direction: column; align-items: flex-end;">
                      ${item.originalPrice ? `
                        <span style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${item.highlight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(45, 45, 45, 0.5)'}; margin-bottom: 2px;">
                          ${item.originalPrice}
                        </span>
                      ` : ''}
                      <span style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${item.highlight ? '#FFFFFF' : config.primary_action || defaultConfig.primary_action}; font-weight: 600; white-space: nowrap;">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              `;
      };

      return `
        <div class="mb-8 fade-in">
          <!-- 切換按鈕 -->
          <div class="flex justify-center gap-4 mb-8">
            <button id="pricing-btn-brow" onclick="switchPricingType('brow')" 
                    class="px-8 py-3 rounded-full transition-all"
                    style="background: ${config.primary_action || defaultConfig.primary_action}; color: white; font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(157, 126, 95, 0.35);">
              霧眉
            </button>
            <button id="pricing-btn-removal" onclick="switchPricingType('removal')" 
                    class="px-8 py-3 rounded-full transition-all"
                    style="background: ${config.secondary_action || defaultConfig.secondary_action}; color: ${config.primary_text || defaultConfig.primary_text}; font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 3px 12px rgba(157, 126, 95, 0.28);">
              淡色
            </button>
          </div>

          <!-- 霧眉價格內容 -->
          <div id="pricing-content-brow">
            <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
              原生感｜輕透霧眉
            </h2>
            <div class="space-y-4">
              ${browPrices.map(item => renderPriceItem(item)).join('')}
            </div>
          </div>

          <!-- 淡色價格內容 -->
          <div id="pricing-content-removal" style="display: none;">
            <h2 class="mb-4 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 1px;">
              無創｜淡色
            </h2>
            <div class="mb-4 text-center">
              <p class="px-4 py-2 rounded-xl inline-block mx-auto" style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500; letter-spacing: 0.5px; background: ${config.secondary_action || defaultConfig.secondary_action};">
                依照實際情況 專業評估給予堂數建議
              </p>
            </div>
            <div class="space-y-4">
              ${removalPrices.map(item => renderPriceItem(item)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderBooking(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      const sections = [
        {
          title: '預約資訊',
          iconName: 'clipboardList',
          items: [
            '預約時，請提供姓名、手機號碼、三個理想時段，以利快速安排',
            '需支付定金 $1,500 以保留時段，定金將於施作當日折抵消費，若臨時取消恕不退還',
            '為確保服務品質與美感達成共識，若現場設計階段雙方未達成一致，將不進行後續施作。<strong>原定金 $1,500 元將轉為當日之「專業眉型設計」與「技術諮詢服務費」，恕不退還</strong>，敬請見諒。'
          ]
        },
        {
          title: '到店須知',
          iconName: 'home',
          items: [
            '為不影響下位客人權益，<strong>請準時赴約</strong>（遲到10分鐘可能需改期）',
            '素顏、帶妝皆可，現場會清潔眉部',
            '個人工作室，如需攜伴請於公共大廳等候'
          ]
        },
        {
          title: '施作前提醒',
          iconName: 'clock',
          items: [
            '<strong>前三週請勿自行修眉</strong>，以利設計眉型參考',
            '施作前 2–3 天請避免飲酒、熬夜，否則痛感會較為明顯',
            '為維持乾淨舒適的服務品質，請您務必清潔頭髮'
          ]
        },
        {
          title: '改期與取消',
          iconName: 'refreshCw',
          items: [
            '預約如需改期，務必於兩星期前告知，為維護其他預約客人的權益，更改時間<strong>僅限一次</strong>',
            '<strong>當日臨時取消或未到者，定金不退還</strong>'
          ]
        },
        {
          title: '三個月內免費補色',
          iconName: 'sparkles',
          items: [
            '補色為『<strong>主動預約制</strong>』不會另行通知，請記得提早預約時間唷 ♡ 希望下次見面，能讓你的眉毛更完美',
            '為維護您的權益，請勿在期限將近時才預約，如因此無法在期限內完成，將視同『<strong>自願放棄免費補色權利，不得要求退費</strong>』',
            '超過三個月，會依照價目表收費'
          ]
        }
      ];

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            預約須知
          </h2>
          <div class="space-y-4">
            ${sections.map(section => `
              <div class="card p-7 rounded-3xl" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(157, 126, 95, 0.14);">
                <div class="flex items-center gap-3 mb-4">
                  <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon(section.iconName, config.primary_action || defaultConfig.primary_action, 24)}</span>
                  <h3 style="font-size: ${baseFont * 1.4}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
                    ${section.title}
                  </h3>
                </div>
                <ul class="space-y-3">
                  ${section.items.map(item => `
                    <li class="flex items-start gap-3 p-3 rounded-xl" style="background: ${config.background_color || defaultConfig.background_color};">
                      <span style="color: ${config.primary_action || defaultConfig.primary_action}; font-size: ${baseFont}px; flex-shrink: 0; margin-top: 2px;">•</span>
                      <span style="font-size: ${baseFont}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.8; opacity: 0.9;">
                        ${item}
                      </span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function renderAftercare(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      // 霧眉護理內容
      const browSections = [
        {
          title: '施作後 前四天',
          period: 'Day 1-4',
          items: [
            '48 小時內避免接觸水，眉毛區域保持乾燥不要揉搓',
            '早 + 晚使用生理食鹽水濕敷十五分鐘',
            '眉毛乾燥後，使用修復霜薄薄的塗在眉毛上，一粒米大小薄擦雙眉即可'
          ],
          alert: true
        },
        {
          title: '施作後 1-2週內',
          period: 'Week 1-2',
          items: [
            '避開任何保養品、化妝品、臉部醫美雷射',
            '避免陽光曝曬與水療活動，以免影響色素穩定性'
          ],
          alert: true
        },
        {
          title: '正常修復過程',
          period: '修復期',
          items: [
            '操作完有刺痛、泛紅為正常現象，過一陣子會消失',
            '結痂和脫皮是正常的現象，請勿用手撕拉、搓揉眉毛，可能會影響顏色不均勻'
          ]
        },
        {
          title: '留意肌膚狀況',
          period: '注意事項',
          items: [
            '如果眉毛區域有紅腫、瘙癢、過敏或其他不適症狀，請立即找專業醫師，以確保最佳修復效果'
          ]
        },
        {
          title: '如何提高留色率？',
          period: '保養秘訣',
          items: [
            '所有底妝產品、防曬、美白酸類保養品，盡可能避開眉毛',
            '敷面膜可在眉毛上先塗凡士林、保鮮膜、棉片隔離',
            '最佳補色期：一個月後、三個月內（超時會按價目表收費用）',
            '霧眉屬於侵入式，一年內不適宜捐血'
          ]
        }
      ];

      // 淡色護理內容
      const removalSections = [
        {
          title: '施作完 當日',
          period: 'Ｄay1',
          items: [
            '可以多冰敷，每次 15 分鐘，幫助舒緩肌膚',
            '可以正常碰水（水溫勿過熱）'
          ],
          alert: true
        },
        {
          title: '正常修復期',
          period: 'Ｄay 1-3',
          items: [
            '如有紅腫或微小結痂通常於 1-3 天消退'
          ]
        },
        {
          title: '施作後禁忌',
          period: 'Week 1-2',
          items: [
            '禁止高溫接觸 (汗蒸、桑拿烤箱、蒸臉、曬太陽、游泳、大量流汗)',
            '嚴禁大力揉搓或使用顆粒去角質',
            '需加強防曬',
            '禁止使用美白或酸類護膚品',
            '如有結痂，須自然脫落，嚴禁手摳，以免留疤'
          ],
          alert: true
        }
      ];

      const renderSections = (sections) => {
        return sections.map(section => `
              <div class="card p-7 rounded-3xl ${section.alert ? 'border-2' : ''}" style="background: ${section.alert ? `linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%)` : config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(157, 126, 95, 0.15); ${section.alert ? `border-color: ${config.primary_action || defaultConfig.primary_action};` : ''}">
                <div class="flex items-center justify-between mb-5 flex-wrap gap-3">
                  <h3 style="font-size: ${baseFont * 1.4}px; font-family: ${headingFontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
                    ${section.title}
                  </h3>
                  <span class="px-4 py-2 rounded-full" style="background: ${config.secondary_action || defaultConfig.secondary_action}; font-size: ${baseFont * 0.85}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500;">
                    ${section.period}
                  </span>
                </div>
                <ul class="space-y-3">
                  ${section.items.map(item => `
                    <li class="flex items-start gap-3 p-4 rounded-xl" style="background: ${config.background_color || defaultConfig.background_color};">
                      <span style="color: ${config.primary_action || defaultConfig.primary_action}; flex-shrink: 0;">${getIcon('check', config.primary_action || defaultConfig.primary_action, 18)}</span>
                      <span style="font-size: ${baseFont}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.8; opacity: 0.9;">
                        ${item}
                      </span>
                    </li>
                  `).join('')}
                </ul>
              </div>
        `).join('');
      };

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-6 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            施作後照護｜注意事項
          </h2>
          
          <!-- 切換按鈕 -->
          <div class="flex justify-center gap-4 mb-8">
            <button id="aftercare-btn-brow" onclick="switchAftercareType('brow')" 
                    class="px-8 py-3 rounded-full transition-all"
                    style="background: ${config.primary_action || defaultConfig.primary_action}; color: white; font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(157, 126, 95, 0.35);">
              霧眉
            </button>
            <button id="aftercare-btn-removal" onclick="switchAftercareType('removal')" 
                    class="px-8 py-3 rounded-full transition-all"
                    style="background: ${config.secondary_action || defaultConfig.secondary_action}; color: ${config.primary_text || defaultConfig.primary_text}; font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; font-weight: 500; border: none; cursor: pointer; box-shadow: 0 3px 12px rgba(157, 126, 95, 0.28);">
              淡色
            </button>
          </div>

          <!-- 霧眉護理內容 -->
          <div id="aftercare-content-brow" class="space-y-5">
            ${renderSections(browSections)}
          </div>

          <!-- 淡色護理內容 -->
          <div id="aftercare-content-removal" class="space-y-5" style="display: none;">
            ${renderSections(removalSections)}
          </div>
        </div>
      `;
    }

    function renderPreparation(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      const sections = [
        {
          title: '霧眉前三週',
          iconName: 'calendar',
          items: [
            '避免做任何拔毛、修眉，以免影響眉型設計與著色效果',
            '避免進行果酸換膚、雷射、煥膚等醫美療程',
            '避免日曬、過度曝曬，以免皮膚受損影響上色'
          ]
        },
        {
          title: '霧眉前 24 小時內',
          iconName: 'clock',
          items: [
            '乾性肌膚者→可用保濕產品加強肌膚保水度；油性肌膚者→可去角質減少油脂分泌',
            '避免飲酒、咖啡、濃茶、辛辣食物，減少血液循環加速，影響色乳吸收',
            '停止服用阿斯匹靈、維他命E、魚油等抗凝血藥物（如有長期服用，請先諮詢醫師）',
            '確保充足睡眠，避免熬夜影響皮膚狀況，否則痛感會較為明顯',
            '若眉毛有傷口、濕疹、皮膚炎、痘痘等情況，請提前告知，等皮膚穩定後再預約'
          ]
        },
        {
          title: '霧眉當日',
          iconName: 'sparkles',
          items: [
            '為了服務時的品質，請務必清潔頭髮、避免吃重口味食物',
            '儘量不要攜伴或寵物同行，以確保施作環境無干擾，讓你享受最完美的霧眉體驗'
          ]
        }
      ];

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            施作前準備與禁忌
          </h2>
          <div class="space-y-5">
            ${sections.map(section => `
              <div class="card p-7 rounded-3xl" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(157, 126, 95, 0.14);">
                <div class="flex items-center gap-3 mb-5">
                  <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon(section.iconName, config.primary_action || defaultConfig.primary_action, 24)}</span>
                  <h3 style="font-size: ${baseFont * 1.4}px; font-family: ${headingFontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
                    ${section.title}
                  </h3>
                </div>
                <ul class="space-y-3">
                  ${section.items.map(item => `
                    <li class="flex items-start gap-3 p-4 rounded-xl" style="background: ${config.background_color || defaultConfig.background_color};">
                      <span style="color: ${config.primary_action || defaultConfig.primary_action}; flex-shrink: 0;">${getIcon('check', config.primary_action || defaultConfig.primary_action, 18)}</span>
                      <span style="font-size: ${baseFont}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.8; opacity: 0.9;">
                        ${item}
                      </span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function renderLocation(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      const locations = [
        {
          name: '台北｜大安店',
          address: '台北市大安區復興南路二段 11-1 號 12 樓',
          transport: '捷運大安站 4 號出口 散步30秒',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%E5%BE%A9%E8%88%88%E5%8D%97%E8%B7%AF%E4%BA%8C%E6%AE%B5%2011-1%20%E8%99%9F%2012%20%E6%A8%93'
        },
        {
          name: '板橋｜新埔店',
          address: '新北市板橋區莊敬路 140 巷 10 號 1 樓',
          transport: '捷運新埔 4 號出口 散步4分鐘',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8C%97%E5%B8%82%E6%9D%BF%E6%A9%8B%E5%8D%80%E8%8E%8A%E6%95%AC%E8%B7%AF%20140%20%E5%B7%B7%2010%20%E8%99%9F%201%20%E6%A8%93'
        }
      ];

      const locationImages = {
        '台北｜大安店': {
          src: 'sources/studio_env.png',
          alt: '台北大安店工作室地圖'
        },
        '板橋｜新埔店': {
          src: 'sources/新埔店.png',
          alt: '板橋新埔店工作室地圖'
        }
      };

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${locations.map(loc => `
              <div class="card rounded-3xl overflow-hidden" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 20px rgba(157, 126, 95, 0.15);">
                <div class="p-6" style="background: ${config.background_color || defaultConfig.background_color}; border-bottom: 1px solid rgba(0,0,0,0.04);">
                  <h3 class="mb-4" style="font-size: ${baseFont * 1.3}px; font-family: ${headingFontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500;">
                    ${loc.name}
                  </h3>
                  <div class="space-y-3">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="color: ${config.primary_action || defaultConfig.primary_action}; flex-shrink: 0;">${getIcon('mapPin', config.primary_action || defaultConfig.primary_action, 18)}</span>
                      <p style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.8; opacity: 0.85; margin: 0;">
                        ${loc.address}
                      </p>
                      <a href="${loc.mapLink}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer;">
                        <img src="sources/copy-icon.png" alt="查看地圖" style="width: ${baseFont * 1.6}px; height: ${baseFont * 1.6}px; object-fit: contain;">
                      </a>
                    </div>
                    <div class="rounded-xl" style="background: ${config.card_background || defaultConfig.card_background}; padding: 12px 12px 12px 6px; margin-left: -6px; display: flex; align-items: center; gap: 8px;">
                      <span style="color: ${config.primary_action || defaultConfig.primary_action}; flex-shrink: 0;">${getIcon('train', config.primary_action || defaultConfig.primary_action, 18)}</span>
                      <p style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; line-height: 1.8; margin: 0; font-weight: 500;">
                        ${loc.transport}
                      </p>
                    </div>
                  </div>
                </div>
                <div style="min-height: 280px; background: transparent;">
                  <div style="text-align: center; z-index: 1; padding: ${locationImages[loc.name] ? '0' : '20px'}; height: 100%; display: flex; align-items: center; justify-content: center; background: transparent;">
                    ${locationImages[loc.name]
          ? `
                        <img src="${locationImages[loc.name].src}" alt="${locationImages[loc.name].alt}" style="width: 100%; height: 100%; object-fit: cover; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);" />
                      `
          : `
                        <div style="font-size: ${baseFont * 3}px; margin-bottom: 12px;">${loc.mapIcon}</div>
                        <p style="font-size: ${baseFont * 1.3}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.8; font-weight: 500;">
                          ${loc.name}
                        </p>
                        <p style="font-size: ${baseFont * 0.85}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.5; margin-top: 8px;">
                          地圖展示區域
                        </p>
                      `}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="card p-8 rounded-3xl text-center mt-6" style="background: linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%); box-shadow: 0 4px 20px rgba(157, 126, 95, 0.18);">
            <h3 class="mb-3" style="font-size: ${baseFont * 1.4}px; font-family: ${headingFontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 10px;">
              <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon('home', config.primary_action || defaultConfig.primary_action, 24)}</span> 個人工作室，環境舒適安靜
            </h3>
            <p style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.85;">
              提供私密舒適的服務空間，讓您放鬆享受美麗時光，<strong>如攜伴請於公共大廳等候</strong>，感謝配合
              
            </p>
          </div>
        </div>
      `;
    }

    function renderFAQBrow(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      const faqs = [
        {
          q: '霧眉跟飄眉的差別是什麼？',
          a: `<strong>｜霧眉（粉霧感）</strong><br>
          ・俐落的眉型，像眉粉掃過的柔霧妝感<br>
          ・濃淡可調：自然 ➜ 韓系 ➜ 妝感<br><br>
          <strong>✐ 技術方式：</strong><br>
          ・細針點點堆疊，呈現「噴霧效果」<br>
          ・顏色均勻、持色度高<br><br>
          <strong>✓ 適合族群：</strong><br>
          ・眉毛稀疏、想補眉型/眉色<br>
          ・平時有化妝，想起床就自帶眉妝的人<br>
          ・油肌、混合肌超適合<br><br>
          <strong>｜飄眉（線條感）</strong><br>
          ・一根一根仿真毛流，超自然像天生眉<br><br>
          <strong>✐ 技術方式：</strong><br>
          ・手工刀片 or 機器刻畫線條<br><br>
          <strong>✓ 適合族群：</strong><br>
          ・想自然、無妝感眉毛的人<br>
          ・乾肌、中性肌更持久（油肌線條易糊）`
        },
        {
          q: '霧眉需要多久？',
          a: `霧眉施作時間平均約 3～3.5 小時，依個人眉型、膚況與溝通時間會有些差異<br><br>
          <strong>流程大致如下：</strong><br>
          ① 諮詢 / 溝通眉型（10–20 分鐘）<br>
          ② 畫眉設計確認（40–60 分鐘）<br>
          ③ 敷舒緩膏時間（20–30 分鐘）<br>
          ④ 正式施作霧眉（90–120 分鐘）<br>
          ⑤ 施作後照護與說明（10分鐘）<br><br>
          建議預留4小時操作時間，讓有足夠時間打造理想眉型，也讓你可以輕鬆自在`
        },
        {
          q: '為什麼會變橘紅眉？',
          a: `<strong>① 色料氧化變色</strong><br>
          早期或品質較差的色乳，多含鐵氧化物或偏紅調的顏料。時間久了，這些成分會慢慢浮出表面，因此眉毛就容易出現橘紅色調<br><br>
          <strong>② 使用偏暖色調的色乳</strong><br>
          多數咖啡色色乳是由 紅、黃、黑、白 調和而成：<br>
          ・紅、黃分子大 → 不易代謝<br>
          ・黑、白分子小 → 代謝最快<br><br>
          隨著時間推移，黑白色素先被皮膚吸收，剩下紅黃色素，眉毛就會變得偏紅或橘紅`
        },
        {
          q: '霧眉可以維持多久？',
          a: `霧眉不是一做就永久，會自然淡化，維持約 1～2 年，屬於可隨著流行與臉型變化重新調整的半永久性妝感<br><br>
          ▴ 實際持久度會依每位客人的膚質、代謝速度、生活習慣（頻繁去角質、強烈日曬、醫美雷射、飲酒）而有所不同`
        },
        {
          q: '霧眉會痛嗎？',
          a: `敷舒緩膏後還是會有微微刺感，疼痛感會依個人膚況、月經週期、敏感程度略有不同，但普遍都在可接受範圍內<br><br>
          <strong>霧眉師真誠建議：特別怕痛的客人！</strong><br>
          請避開生理期、施作前保持充足睡眠與穩定作息、眉區肌膚加強保濕！！`
        },
        {
          q: '他店霧眉過，可以來這邊補色嗎？',
          a: `不同店家使用的色乳、手法與產品都有差異，所以只要不是在本店做的眉毛，都視為「重新操作」<br><br>
          若原本有底色，請先提供照片讓我評估是否能直接重作或需先淡色，避免白跑一趟唷`
        },
        {
          q: '一定要進行三個月內的補色嗎？',
          a: `<strong>告訴你三個補色的優點：</strong><br><br>
          <strong>① 眉色均勻飽滿</strong><br>
          初次施作時，眉毛的色料會因皮膚代謝、膚質差異而吸收不同，補色能讓顏色更均勻飽滿<br><br>
          <strong>② 持久度更佳</strong><br>
          補色後眉色更穩定、更自然，能延長維持時間，避免退色不均<br><br>
          <strong>③ 眉型更完美</strong><br>
          第一次施作主要確認眉型，補色時可以微調細節，讓整體效果更精緻`
        },
        {
          q: '霧眉可以變對稱嗎？',
          a: `首先，每個人的眉毛與五官天生就存在些微不對稱。眉型設計並非追求「左右完全複製」，而是根據 五官比例、眉骨高度與肌肉動態 去調整，打造視覺上最和諧、最適合你的對稱感<br><br>
          <strong>✔ 結論</strong><br>
          霧眉的重點不是追求「機械式對稱」，而是打造與你臉部協調、日常看起來自然平衡的眉型<br><br>
          <strong>↓ 最終效果會是 ↓</strong><br>
          看起來對稱、不僵硬、完全貼合你的五官比例`
        },
        {
          q: '過一陣子要辦婚禮or拍婚紗，適合霧眉嗎？',
          a: `第一次霧眉會以素顏感、自然系為主，等習慣之後，補色時再依照喜好慢慢調整濃淡與妝感風格<br><br>
          若近期有拍婚紗或婚禮行程，也建議提前與新秘討論，讓整體妝容更一致唷`
        },
        {
          q: '手工霧眉跟機器霧眉的差別在哪裡？',
          a: `<strong>手工霧眉特色在於：</strong><br>
          ・上色方式：手工一點一點上色<br>
          ・效果：自然輕霧、偏素顏感<br>
          ・適合膚質：乾肌、正常混合肌<br>
          ・特色：柔和、輕透、第一眼非常自然`
        }
      ];

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            霧眉常見 Q&A
          </h2>
          <div class="space-y-5">
            ${faqs.map((faq, index) => `
              <div class="card p-7 rounded-3xl" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(157, 126, 95, 0.14);">
                <div class="flex items-start gap-4 mb-4">
                  <span class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${config.primary_action || defaultConfig.primary_action}; color: white; font-size: ${baseFont * 0.9}px; font-family: ${fontStack}; font-weight: 600;">
                    ${index + 1}
                  </span>
                  <h3 style="font-size: ${baseFont * 1.3}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; padding-top: 2px;">
                    ${faq.q}
                  </h3>
                </div>
                <div class="p-5 rounded-2xl" style="background: ${config.background_color || defaultConfig.background_color};">
                  <p style="font-size: ${baseFont * 0.98}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.9;">
                    ${faq.a}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function renderFAQRemoval(config) {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const headingFont = config.heading_font_family || defaultConfig.heading_font_family;
      const fontStack = `${customFont}, '思源黑體', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      const headingFontStack = `${headingFont}, '思源宋體', serif`;

      const faqs = [
        {
          q: '什麼是無創淡色？',
          a: `無創淡色採用光熱解技術將頑固色素擊碎分解<br>淺層色素可由毛孔當場導出<br>深層色素則會浮出表皮，透過人體淋巴系統逐漸代謝，達到溫和除色的效果<br><br>
          ✔ 不破皮、不流血<br>
          ✔ 不會造成原生眉毛掉光<br>
          ✔ 沒有恢復期，當天正常生活<br>
          ✔ 適合想淡掉 紅眉、橘眉、灰眉、暗沉眉色<br>
          ✔ 過程溫和、安全、效果自然`
        },
        {
          q: '紅眉、橘紅眉、深藍眉該怎麼解決？',
          a: `最安全且最有效的方式↓<br>
          先做「無創淡色」讓眉毛回到最自然、乾淨的狀態<br>
          接著，再根據你的臉型重新設計眉型<br>
          進行全新的霧眉施作，才能擁有真正精緻又完美的眉毛`
        },
        {
          q: '無創淡色跟醫美雷射差別在哪？',
          a: `
          <div style="overflow-x: auto; margin: 16px 0;">
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
              <thead>
                <tr style="background: linear-gradient(135deg, #9D7E5F 0%, #B89977 100%);">
                  <th style="padding: 16px 12px; text-align: left; color: white; font-weight: 500; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.2);">比較項目</th>
                  <th style="padding: 16px 12px; text-align: center; color: white; font-weight: 500; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.2);">無創淡色<br><span style="font-size: 12px; opacity: 0.9;"></span></th>
                  <th style="padding: 16px 12px; text-align: center; color: white; font-weight: 500; font-size: 14px;">醫美雷射<br><span style="font-size: 12px; opacity: 0.9;">(洗眉雷射/皮秒)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #FAF8F6;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px;">施作原理</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">溫和光熱解，將色素震碎成粉末狀</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">高能量瞬間爆破色素顆粒</td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px;">傷口狀況</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6; color: #2D7A3E; font-weight: 500;">✓ 不破皮、不流血</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">常有細微傷口、易出血或出水泡</td>
                </tr>
                <tr style="background: #FAF8F6;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px;">結痂與恢復</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6; color: #2D7A3E; font-weight: 500;">✓ 無結痂、無恢復期，當天可洗臉</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">會結痂，需 7-10 天掉痂，期間不能碰水</td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px;">原生毛髮</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6; color: #2D7A3E; font-weight: 500;">✓ 保護毛囊，原生眉毛不脫落、不變白</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">能量過強可能導致眉毛變白或暫時脫落</td>
                </tr>
                <tr style="background: #FAF8F6;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px;">反黑風險</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6; color: #2D7A3E; font-weight: 500;">✓ 極低，過程溫和、不傷真皮層</td>
                  <td style="padding: 14px 12px; border-bottom: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">較高，術後需嚴格防曬否則易反黑</td>
                </tr>
                <tr style="background: white;">
                  <td style="padding: 14px 12px; font-weight: 500; color: #9D7E5F; border-right: 1px solid #D4C4B0; font-size: 13px;">適合對象</td>
                  <td style="padding: 14px 12px; border-right: 1px solid #D4C4B0; font-size: 13px; line-height: 1.6;">紅/橘/灰眉、想淡化後重作、怕痛者</td>
                  <td style="padding: 14px 12px; font-size: 13px; line-height: 1.6;">黑色素極深、陳年老式紋眉、想徹底清空者</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="text-align: center; margin-top: 16px; font-size: 13px; color: #9D7E5F; font-weight: 500;">
            ✨ 本工作室採用溫和無創淡色技術，讓您安心、舒適地改善眉色
          </p>
          `
        },
        {
          q: '淡色過程及需要的次數？',
          a: `每個人的眉毛狀況不同，所需次數會依之前「原色料重金屬含量、入針深度、堆疊層數」而有所差異<br><br><br>
          ▶ 建議間隔：4 – 6 週做一次淡色<br>
          ▶ 大部分客人的實際狀況（參考）<br>
          ・淺咖啡變橘紅眉 → 通常 3 – 4 次<br>
          ・深褐、偏黑 → 3 – 5 次<br>
          ・舊式眉、10年以上深色眉 → 5 次以上<br><br>
          <strong>注意：淡色後，做霧眉前要等至少 1 個月</strong><br>
          讓皮膚休息好，後續上色更穩定`
        },
        {
          q: '淡色完有修復期嗎？',
          a: `不破皮、不結痂、不影響上班生活<br><br>
          <strong>操作完「短暫」反應</strong><br>
          輕微泛紅（通常 數小時～1天內退）<br>
          微溫感、乾燥感<br>
          顏色變深、霧霧<br>
          少數人卡色太深的地方會微出痧<br><br>
          <strong>✦ 正常修復過程</strong><br>
          <span style="color: #9D7E5F;">▸ 施作後 → 前三天</span><br>
          顏色較深，因為深層的色素被提取到表層<br><br>
          <span style="color: #9D7E5F;">▸ 施作後 → 一週後</span><br>
          提取出的色素開始代謝，顏色會逐漸變淺`
        },
        {
          q: '淡色完可以上妝嗎？',
          a: `可以，但建議「隔一天再化」最理想<br>
          當天不建議上妝，讓皮膚休息、降低刺激<br>
          隔天起可正常化妝<br>
          建議使用 低刺激、無酒精、無酸類 底妝<br>
          如果一定要當天化妝，至少間隔 6–8 小時<br>
          <strong>輕薄上妝、不摩擦眉部</strong>`
        },
        {
          q: '淡色需要間隔多久？',
          a: `建議每次間隔 4～6 週<br><br>
          ✔ 讓皮膚完全代謝、穩定<br>
          ✔ 顏色自然慢慢淡化<br>
          ✔ 降低刺激、效果更好<br><br>
          太密集反而會影響皮膚修復<br>
          顏色也不會退比較快喔！`
        },
        {
          q: '為什麼通常不建議直接改眉呢？',
          a: `透過無創淡色，可以將原有眉色慢慢淡化<br>
          這是再次紋繡前非常重要的準備步驟<br>
          就像黑板已經畫滿，不先擦乾淨就畫新的<br>
          只會讓顏色堆積、畫面變髒<br>
          眉毛也是一樣，若舊眉顏色太深直接再做<br>
          容易厚重、不自然、沒漸層<br><br>
          ✨先淡色 → 再設計 才能打造出<br>
          ✔ 漸層乾淨<br>
          ✔ 線條柔和<br>
          ✔ 真正貼合五官的理想眉型`
        },
        {
          q: '無創淡色為什麼不能一次完成？',
          a: `眉毛中的色素分布於皮膚的不同層次<br>
          無創淡色的原理是將色素分解成較小的分子<br>
          再交由身體進行自然代謝，因此需要時間<br><br>
          在淡色過程中，必須先淡化較淺層的色素<br>
          待皮膚穩定後，才能逐步處理更深層的色素<br><br>
          這樣循序進行，才能在不傷皮膚的前提下<br>
          讓顏色均勻、自然地退淡，並為後續霧眉保留健康、乾淨的基底`
        }
      ];

      return `
        <div class="mb-8 fade-in">
          <h2 class="mb-8 text-center" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 400; letter-spacing: 2px;">
            淡色常見 Q&A
          </h2>
          <div class="space-y-5">
            ${faqs.map((faq, index) => `
              <div class="card p-7 rounded-3xl" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 3px 15px rgba(157, 126, 95, 0.14);">
                <div class="flex items-start gap-4 mb-4">
                  <span class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style="background: ${config.primary_action || defaultConfig.primary_action}; color: white; font-size: ${baseFont * 0.9}px; font-family: ${fontStack}; font-weight: 600;">
                    ${index + 1}
                  </span>
                  <h3 style="font-size: ${baseFont * 1.3}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; padding-top: 2px;">
                    ${faq.q}
                  </h3>
                </div>
                <div class="p-5 rounded-2xl" style="background: ${config.background_color || defaultConfig.background_color};">
                  <p style="font-size: ${baseFont * 0.98}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.9;">
                    ${faq.a}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="card p-8 rounded-3xl text-center mt-6" style="background: linear-gradient(135deg, ${config.secondary_action || defaultConfig.secondary_action} 0%, ${config.card_background || defaultConfig.card_background} 100%); box-shadow: 0 4px 20px rgba(157, 126, 95, 0.18);">
            <h3 class="mb-4" style="font-size: ${baseFont * 1.5}px; font-family: ${headingFontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 10px;">
              <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon('lightbulb', config.primary_action || defaultConfig.primary_action, 24)}</span> 淡色前建議
            </h3>
            <p style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 2; opacity: 0.85; max-width: 800px; margin: 0 auto;">
              建議提供現在眉毛的清晰照片，讓我評估最適合的淡色方案<br>
              每個人的情況不同，專業評估能確保最佳效果
            </p>
          </div>
        </div>
      `;
    }

    function renderContact(config, currentTab = 'home') {
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      const instagram = config.instagram_handle || defaultConfig.instagram_handle;
      const lineId = config.line_id || defaultConfig.line_id;

      return `
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://www.instagram.com/beautybrow__studio" target="_blank" rel="noopener noreferrer" 
             class="card px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105"
             style="background: ${config.primary_action || defaultConfig.primary_action} !important; text-decoration: none; box-shadow: 0 4px 15px rgba(157, 126, 95, 0.35); border-radius: 9999px !important;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
            </svg>
            <span style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: white; font-weight: 500;">
              beautybrow_studio
            </span>
          </a>
          <a href="https://lin.ee/p4qbS4j" target="_blank" rel="noopener noreferrer"
             onclick="navigator.clipboard.writeText('${lineId}').then(() => { 
               const btn = event.target.closest('a');
               const originalHTML = btn.innerHTML;
               btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.345 0 .63.285.63.63 0 .349-.285.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
               </svg><span style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: white; font-weight: 500;\\'>已複製 LINE ID</span>';
               setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
             })"
             class="card px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105"
             style="background: ${config.primary_action || defaultConfig.primary_action} !important; text-decoration: none; box-shadow: 0 4px 15px rgba(157, 126, 95, 0.35); border-radius: 9999px !important;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.345 0 .63.285.63.63 0 .349-.285.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
            </svg>
            <span style="font-size: ${baseFont * 1.05}px; font-family: ${fontStack}; color: white; font-weight: 500;">
              LINE: ${lineId}
            </span>
          </a>
          ${currentTab !== 'home' ? `
            <button onclick="switchTab('home')" 
                    class="px-10 py-4 rounded-full transition-all hover:scale-105"
                    style="background: ${config.secondary_action || defaultConfig.secondary_action}; 
                           color: ${config.primary_text || defaultConfig.primary_text}; 
                           font-size: ${baseFont * 1.05}px; 
                           font-family: ${fontStack}; 
                           font-weight: 500; 
                           border: none; 
                           cursor: pointer;
                           box-shadow: 0 3px 12px rgba(157, 126, 95, 0.28);
                           border-radius: 9999px !important;">
              🏠 返回首頁
            </button>
          ` : ''}
        </div>
      `;
    }

    async function onConfigChange(config) {
      const app = document.getElementById('app');
      const baseFont = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const fontStack = `${customFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      // 保存當前的 scroll 位置，避免重新渲染時重置
      const savedScrollPosition = window.savedTabScrollPosition || 0;

      document.body.style.background = config.background_color || defaultConfig.background_color;

      let tabContent = '';
      switch (currentTab) {
        case 'home': tabContent = renderHome(config); break;
        case 'brow-guide': tabContent = renderBrowGuide(config); break;
        case 'pricing': tabContent = renderPricing(config); break;
        case 'booking': tabContent = renderBooking(config); break;
        case 'aftercare': tabContent = renderAftercare(config); break;
        case 'preparation': tabContent = renderPreparation(config); break;
        case 'location': tabContent = renderLocation(config); break;
        case 'faq-brow': tabContent = renderFAQBrow(config); break;
        case 'faq-removal': tabContent = renderFAQRemoval(config); break;
      }

      app.innerHTML = `
        <!-- 頂部品牌橫幅 -->
        <div class="top-brand-bar" style="position: fixed; top: 0; left: 0; right: 0; background: linear-gradient(135deg, ${config.card_background || defaultConfig.card_background} 0%, ${config.secondary_action || defaultConfig.secondary_action} 100%); color: ${config.primary_action || defaultConfig.primary_action}; padding: 14px 20px; text-align: center; z-index: 9999; box-shadow: 0 2px 16px rgba(157, 126, 95, 0.15); border-bottom: 2px solid ${config.primary_action || defaultConfig.primary_action};">
          <div style="font-size: ${baseFont * 1.15}px; font-family: ${config.heading_font_family || defaultConfig.heading_font_family}, ${fontStack}; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
            BeautyBrow Studio
          </div>
        </div>
        
        <!-- 促銷訊息橫幅 -->
        <div class="promo-bar" style="position: fixed; top: 54px; left: 0; right: 0; background: ${config.primary_action || defaultConfig.primary_action}; color: white; padding: 10px 20px; text-align: center; z-index: 9998; box-shadow: 0 2px 8px rgba(157, 126, 95, 0.2);">
          <a href="https://line.me/R/ti/p/@816winfr?oat_content=url&ts=04170245" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: white; display: block; transition: opacity 0.3s ease; cursor: pointer;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
            <div style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; font-weight: 500; letter-spacing: 0.5px;">
              預約請加入官方LINE 領取隱藏折扣
            </div>
          </a>
        </div>
        
        <div class="w-full min-h-screen main-content-wrapper">
          <div class="max-w-6xl mx-auto">
            <div class="mb-6 relative" style="--fade-color: ${config.card_background || defaultConfig.card_background};">
              <div class="scroll-fade-left hidden" id="scroll-fade-left"></div>
              <div class="scroll-fade-right" id="scroll-fade-right"></div>
              <div class="p-3 rounded-3xl scroll-container overflow-x-auto" id="tabs-scroll-container" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 24px rgba(157, 126, 95, 0.22);" onscroll="updateScrollFade(this)">
                <div class="flex gap-2 justify-start md:justify-center min-w-max md:min-w-0" id="tabs-container">
                ${tabs.map(tab => `
                  <button onclick="switchTab('${tab.id}')" 
                          id="tab-btn-${tab.id}"
                          class="tab-button px-5 py-3 rounded-2xl transition-all flex-shrink-0"
                          style="background: ${currentTab === tab.id ? (config.primary_action || defaultConfig.primary_action) : 'transparent'}; 
                                 color: ${currentTab === tab.id ? 'white' : (config.primary_text || defaultConfig.primary_text)}; 
                                 font-size: ${baseFont * 0.9}px; 
                                 font-family: ${fontStack}; 
                                 font-weight: 500; 
                                 border: none; 
                                 cursor: pointer;
                                 white-space: nowrap;">
                    <span style="margin-right: 6px;">${tab.icon}</span>${tab.name}
                  </button>
                `).join('')}
                </div>
              </div>
            </div>

            <div class="mb-8">
              ${tabContent}
            </div>

            <div class="card p-8 rounded-3xl text-center" style="background: ${config.card_background || defaultConfig.card_background}; box-shadow: 0 4px 20px rgba(157, 126, 95, 0.18);">
              <h3 class="mb-6" style="font-size: ${baseFont * 1.6}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; font-weight: 400; letter-spacing: 1px;">
                聯繫我
              </h3>
              ${renderContact(config, currentTab)}
            </div>
          </div>
        </div>
      `;

      // 恢復 scroll 位置並初始化遮罩狀態
      // 使用 requestAnimationFrame 確保 DOM 已完全渲染
      requestAnimationFrame(() => {
        const tabsContainer = document.getElementById('tabs-scroll-container');
        if (tabsContainer) {
          // 先恢復之前保存的 scroll 位置（如果有的話）
          if (savedScrollPosition !== undefined && savedScrollPosition !== null) {
            tabsContainer.scrollLeft = savedScrollPosition;
          }
          // 更新遮罩狀態
          updateScrollFade(tabsContainer);
        }

        // 如果是施作後照護頁面，初始化按鈕狀態
        if (currentTab === 'aftercare') {
          const hash = getTabFromUrl() || '';
          if (hash.startsWith('aftercare-')) {
            const subType = hash.replace('aftercare-', '');
            if (subType === 'brow' || subType === 'removal') {
              window.switchAftercareType(subType);
            } else {
              window.switchAftercareType('brow');
            }
          } else {
            window.switchAftercareType('brow');
          }
        }

        // 如果是價目表頁面，初始化按鈕狀態
        if (currentTab === 'pricing') {
          const hash = getTabFromUrl() || '';
          if (hash.startsWith('pricing-')) {
            const subType = hash.replace('pricing-', '');
            if (subType === 'brow' || subType === 'removal') {
              window.switchPricingType(subType);
            } else {
              window.switchPricingType('brow');
            }
          } else {
            window.switchPricingType('brow');
          }
        }
      });
    }

    // 更新滾動遮罩顯示狀態
    window.updateScrollFade = function (container) {
      const fadeLeft = document.getElementById('scroll-fade-left');
      const fadeRight = document.getElementById('scroll-fade-right');
      if (!fadeLeft || !fadeRight || !container) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const isScrollable = scrollWidth > clientWidth;
      const isAtStart = scrollLeft <= 1;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      // 如果可滾動，顯示對應的遮罩
      if (isScrollable) {
        fadeLeft.classList.toggle('hidden', isAtStart);
        fadeRight.classList.toggle('hidden', isAtEnd);
      } else {
        // 如果不可滾動，隱藏所有遮罩
        fadeLeft.classList.add('hidden');
        fadeRight.classList.add('hidden');
      }
    };

    window.switchTab = function (tabId) {
      if (!isValidTabId(tabId)) tabId = 'home';
      // 在重新渲染前保存當前的 scroll 位置
      const tabsContainer = document.getElementById('tabs-scroll-container');
      if (tabsContainer) {
        window.savedTabScrollPosition = tabsContainer.scrollLeft;
      }

      currentTab = tabId;
      // 更新網址，讓分享連結可直接指定 tab
      setUrlTab(tabId);
      const config = window.currentConfig || defaultConfig;
      onConfigChange(config);

      // 恢復 scroll 位置後，檢查按鈕是否需要滾動（只在完全不可見時）
      // 使用雙重 requestAnimationFrame 確保 scroll 位置已恢復
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const tabButton = document.getElementById(`tab-btn-${tabId}`);
          const tabsContainer = document.getElementById('tabs-scroll-container');
          if (tabButton && tabsContainer) {
            const containerRect = tabsContainer.getBoundingClientRect();
            const buttonRect = tabButton.getBoundingClientRect();

            // 檢查按鈕是否完全在可見區域內
            const buttonLeft = buttonRect.left;
            const buttonRight = buttonRect.right;
            const containerLeft = containerRect.left;
            const containerRight = containerRect.right;
            const padding = 12; // 考慮一些邊距

            // 只有當按鈕完全不可見時才滾動
            const isCompletelyHidden = buttonRight < containerLeft + padding || buttonLeft > containerRight - padding;

            if (isCompletelyHidden) {
              // 計算需要滾動的位置（讓按鈕居中顯示）
              const buttonOffsetLeft = tabButton.offsetLeft;
              const buttonWidth = buttonRect.width;
              const containerWidth = tabsContainer.clientWidth;
              const targetScroll = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);

              // 確保滾動位置在有效範圍內
              const maxScroll = tabsContainer.scrollWidth - containerWidth;
              const finalScroll = Math.max(0, Math.min(targetScroll, maxScroll));

              // 直接設置 scrollLeft，避免動畫跳動
              tabsContainer.scrollLeft = finalScroll;
              // 更新保存的位置
              window.savedTabScrollPosition = finalScroll;
            }

            // 更新遮罩狀態
            updateScrollFade(tabsContainer);
          }
        });
      });
    };

    window.switchAftercareType = function (type) {
      const config = window.currentConfig || defaultConfig;
      const baseFont = config.font_size || defaultConfig.font_size;
      const fontStack = `${config.font_family || defaultConfig.font_family}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      const browBtn = document.getElementById('aftercare-btn-brow');
      const removalBtn = document.getElementById('aftercare-btn-removal');
      const browContent = document.getElementById('aftercare-content-brow');
      const removalContent = document.getElementById('aftercare-content-removal');

      if (type === 'brow') {
        // 切換到霧眉
        if (browBtn) {
          browBtn.style.background = config.primary_action || defaultConfig.primary_action;
          browBtn.style.color = 'white';
          browBtn.style.boxShadow = '0 4px 15px rgba(157, 126, 95, 0.35)';
        }
        if (removalBtn) {
          removalBtn.style.background = config.secondary_action || defaultConfig.secondary_action;
          removalBtn.style.color = config.primary_text || defaultConfig.primary_text;
          removalBtn.style.boxShadow = '0 3px 12px rgba(157, 126, 95, 0.28)';
        }
        if (browContent) browContent.style.display = 'block';
        if (removalContent) removalContent.style.display = 'none';
      } else if (type === 'removal') {
        // 切換到淡色
        if (browBtn) {
          browBtn.style.background = config.secondary_action || defaultConfig.secondary_action;
          browBtn.style.color = config.primary_text || defaultConfig.primary_text;
          browBtn.style.boxShadow = '0 3px 12px rgba(157, 126, 95, 0.28)';
        }
        if (removalBtn) {
          removalBtn.style.background = config.primary_action || defaultConfig.primary_action;
          removalBtn.style.color = 'white';
          removalBtn.style.boxShadow = '0 4px 15px rgba(157, 126, 95, 0.35)';
        }
        if (browContent) browContent.style.display = 'none';
        if (removalContent) removalContent.style.display = 'block';
      }
      // 更新網址 hash
      setUrlTab(`aftercare-${type}`);
    };

    window.switchPricingType = function (type) {
      const config = window.currentConfig || defaultConfig;
      const baseFont = config.font_size || defaultConfig.font_size;
      const fontStack = `${config.font_family || defaultConfig.font_family}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      const browBtn = document.getElementById('pricing-btn-brow');
      const removalBtn = document.getElementById('pricing-btn-removal');
      const browContent = document.getElementById('pricing-content-brow');
      const removalContent = document.getElementById('pricing-content-removal');

      if (type === 'brow') {
        // 切換到霧眉
        if (browBtn) {
          browBtn.style.background = config.primary_action || defaultConfig.primary_action;
          browBtn.style.color = 'white';
          browBtn.style.boxShadow = '0 4px 15px rgba(157, 126, 95, 0.35)';
        }
        if (removalBtn) {
          removalBtn.style.background = config.secondary_action || defaultConfig.secondary_action;
          removalBtn.style.color = config.primary_text || defaultConfig.primary_text;
          removalBtn.style.boxShadow = '0 3px 12px rgba(157, 126, 95, 0.28)';
        }
        if (browContent) browContent.style.display = 'block';
        if (removalContent) removalContent.style.display = 'none';
      } else if (type === 'removal') {
        // 切換到淡色
        if (browBtn) {
          browBtn.style.background = config.secondary_action || defaultConfig.secondary_action;
          browBtn.style.color = config.primary_text || defaultConfig.primary_text;
          browBtn.style.boxShadow = '0 3px 12px rgba(157, 126, 95, 0.28)';
        }
        if (removalBtn) {
          removalBtn.style.background = config.primary_action || defaultConfig.primary_action;
          removalBtn.style.color = 'white';
          removalBtn.style.boxShadow = '0 4px 15px rgba(157, 126, 95, 0.35)';
        }
        if (browContent) browContent.style.display = 'none';
        if (removalContent) removalContent.style.display = 'block';
      }
      // 更新網址 hash
      setUrlTab(`pricing-${type}`);
    };

    // 使用 defaultConfig 初始化頁面
    window.currentConfig = { ...defaultConfig };

    // 頁面載入完成後自動初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        // 讀取網址 hash，支援分享指定 tab（含子 tab）
        const initialHash = getTabFromUrl();
        // 解析基本 tab（例如 pricing-brow -> pricing）
        let baseTab = initialHash || '';
        if (initialHash && initialHash.includes('-')) {
          baseTab = initialHash.split('-')[0];
        }
        if (baseTab && isValidTabId(baseTab)) {
          currentTab = baseTab;
        } else {
          // 沒帶 hash 或不合法時，固定成 home（並把網址整理成 #home）
          currentTab = 'home';
          setUrlTab('home', { replace: true });
        }
        onConfigChange(window.currentConfig);
        // 監聽視窗大小改變，更新遮罩狀態
        window.addEventListener('resize', () => {
          const tabsContainer = document.getElementById('tabs-scroll-container');
          if (tabsContainer) {
            updateScrollFade(tabsContainer);
          }
        });
      });
    } else {
      // 讀取網址 hash，支援分享指定 tab（含子 tab）
      const initialHash = getTabFromUrl();
      // 解析基本 tab（例如 pricing-brow -> pricing）
      let baseTab = initialHash || '';
      if (initialHash && initialHash.includes('-')) {
        baseTab = initialHash.split('-')[0];
      }
      if (baseTab && isValidTabId(baseTab)) {
        currentTab = baseTab;
      } else {
        currentTab = 'home';
        setUrlTab('home', { replace: true });
      }
      onConfigChange(window.currentConfig);
      // 監聽視窗大小改變，更新遮罩狀態
      window.addEventListener('resize', () => {
        const tabsContainer = document.getElementById('tabs-scroll-container');
        if (tabsContainer) {
          updateScrollFade(tabsContainer);
        }
      });
    }

    // 支援瀏覽器上一頁/下一頁，以及手動修改 hash（同步 tab 和子 tab）
    function syncTabFromUrl() {
      const hashFromUrl = getTabFromUrl();
      // 解析基本 tab（例如 pricing-brow -> pricing）
      let baseTab = hashFromUrl || '';
      let subType = null;
      if (hashFromUrl && hashFromUrl.includes('-')) {
        const parts = hashFromUrl.split('-');
        baseTab = parts[0];
        subType = parts[1];
      }
      const nextTab = (baseTab && isValidTabId(baseTab)) ? baseTab : 'home';
      if (nextTab !== currentTab) {
        currentTab = nextTab;
        onConfigChange(window.currentConfig || defaultConfig);
      } else if (subType) {
        // 如果基本 tab 沒變，但子 tab 變了，直接切換子 tab
        if (baseTab === 'pricing' && (subType === 'brow' || subType === 'removal')) {
          window.switchPricingType(subType);
        } else if (baseTab === 'aftercare' && (subType === 'brow' || subType === 'removal')) {
          window.switchAftercareType(subType);
        }
      }
    }

    window.addEventListener('popstate', syncTabFromUrl);
    window.addEventListener('hashchange', syncTabFromUrl);

    // 臉型浮層控制函數
    window.openFaceModal = function (name, img, description, features, eyebrowStyle, tips) {
      const config = window.currentConfig || defaultConfig;
      const baseFont = config.font_size || defaultConfig.font_size;
      const fontStack = `${config.font_family || defaultConfig.font_family}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

      const modal = document.getElementById('faceModal');
      const modalBody = document.getElementById('faceModalBody');

      modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr; gap: 0;">
          <div style="position: relative; width: 100%; aspect-ratio: 4/5; overflow: hidden; border-radius: 24px 24px 0 0;">
            <img src="${img}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 30px 24px 20px;">
              <h2 style="font-size: ${baseFont * 2}px; font-family: ${fontStack}; color: white; font-weight: 500; margin: 0; text-align: center;">
                ${name}
              </h2>
            </div>
          </div>
          <div class="modal-body-content" style="padding: 32px 28px;">
            <div style="margin-bottom: 24px;">
              <p style="font-size: ${baseFont * 1.1}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.9; opacity: 0.85; text-align: center;">
                ${description}
              </p>
            </div>
            
            <div class="info-section" style="background: ${config.background_color || defaultConfig.background_color}; padding: 20px; border-radius: 16px; margin-bottom: 20px; border-left: 4px solid ${config.primary_action || defaultConfig.primary_action};">
              <h4 style="font-size: ${baseFont * 1.2}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; margin: 0 0 12px 0; display: flex; align-items: center; gap: 8px;">
                <span>✨</span> 推薦眉型
              </h4>
              <p style="font-size: ${baseFont * 1.0}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.8; margin: 0; opacity: 0.85;">
                ${features}
              </p>
            </div>

            <div class="info-section" style="background: ${config.background_color || defaultConfig.background_color}; padding: 20px; border-radius: 16px; margin-bottom: 20px; border-left: 4px solid ${config.primary_action || defaultConfig.primary_action};">
              <h4 style="font-size: ${baseFont * 1.2}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; margin: 0 0 12px 0; display: flex; align-items: center; gap: 8px;">
                <span>📝</span> 設計美學
              </h4>
              <p style="font-size: ${baseFont * 1.0}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.9; margin: 0; opacity: 0.9;">
                ${eyebrowStyle}
              </p>
            </div>

            <div class="info-section" style="background: ${config.background_color || defaultConfig.background_color}; padding: 20px; border-radius: 16px; border-left: 4px solid ${config.primary_action || defaultConfig.primary_action};">
              <h4 style="font-size: ${baseFont * 1.2}px; font-family: ${fontStack}; color: ${config.primary_action || defaultConfig.primary_action}; font-weight: 500; margin: 0 0 12px 0; display: flex; align-items: center; gap: 8px;">
                <span style="color: ${config.primary_action || defaultConfig.primary_action};">${getIcon('lightbulb', config.primary_action || defaultConfig.primary_action, 20)}</span> 設計小巧思
              </h4>
              <p style="font-size: ${baseFont * 1.0}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; line-height: 1.9; margin: 0; opacity: 0.85;">
                ${tips}
              </p>
            </div>

            <div style="margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(157, 126, 95, 0.3); text-align: center;">
              <p style="font-size: ${baseFont * 0.95}px; font-family: ${fontStack}; color: ${config.primary_text || defaultConfig.primary_text}; opacity: 0.7; line-height: 1.8; margin: 0;">
                以上為一般建議，實際眉型設計會依照您的五官比例、眉骨結構與個人風格進行客製化調整
              </p>
            </div>
          </div>
        </div>
      `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closeFaceModal = function () {
      const modal = document.getElementById('faceModal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    // ESC 鍵關閉浮層
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeFaceModal();
      }
    });
