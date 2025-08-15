# WebNav Hub

一站式导航与工具集 - 现代化的网页导航主页

## 🌟 项目简介

WebNav Hub 是一个现代化的网页导航工具集，集成了各种常用的在线服务和工具。通过精心设计的界面和流畅的用户体验，帮助用户快速访问 AI 平台、社交媒体、实用工具、科技资讯、云存储和电子邮件等各类网络服务。

## ✨ 主要特性

- **主题切换** - 支持深色/浅色主题，按 `T` 键快速切换
- **分类导航** - 六大类别：AI搜索、社交媒体、实用工具、科技资讯、云存储、电子邮箱
- **平滑滚动** - 点击导航项时平滑滚动到对应区域
- **响应式设计** - 完美适配桌面、平板和移动设备
- **现代化UI** - 玻璃态效果、渐变色彩和精致动画
- **无障碍访问** - 遵循无障碍设计标准，支持键盘导航
- **本地存储** - 主题偏好自动保存

## 🛠 技术栈

- **HTML5** - 语义化标签和现代网页结构
- **CSS3** - 渐变、动画、弹性布局、网格布局
- **JavaScript** - 原生JavaScript实现交互功能
- **Font Awesome** - 丰富的图标库
- **Google Fonts** - Poppins 字体提供优雅的排版
- **现代CSS特性** - 变量、玻璃态效果、响应式设计

## 🚀 快速开始

### 本地使用

1. 克隆或下载项目文件
2. 直接在浏览器中打开 `index.html` 文件
3. 开始使用！

### 在线部署

将所有文件上传到您的网站服务器或静态托管服务（如 GitHub Pages、Vercel、Netlify 等）即可使用。

## 📁 项目结构

```
webnav-hub/
├── index.html     # 主页面文件
├── style.css      # 样式文件
├── main.js        # JavaScript 功能文件
└── README.md      # 项目说明文件
```

## 🎨 设计特色

### 玻璃态设计
采用现代玻璃态效果，营造轻盈透明的视觉体验。

### 渐变色彩
精心调配的橙色渐变主题，既现代又不失温暖。

### 响应式布局
- 桌面端：多列网格布局
- 平板端：自适应列数
- 移动端：单列布局，优化触控体验

### 交互动画
- 卡片悬停效果
- 平滑滚动导航
- 主题切换动画
- 按钮反馈动画

## 🔧 使用说明

### 导航使用
- 点击顶部导航栏中的分类链接，页面会平滑滚动到对应区域
- 当前激活的导航项会高亮显示

### 主题切换
- 点击右上角的主题切换按钮
- 或按键盘 `T` 键快速切换主题
- 主题偏好会自动保存在本地存储中

### 快捷操作
- 支持键盘导航
- 所有链接在新标签页中打开，不影响当前页面

## 🎯 分类介绍

### 🤖 AI搜索
集成主流AI平台：ChatGPT、通义千问、文心一言、Claude、Gemini等

### 🔗 社交媒体
主流社交平台及实用工具：Twitter、Facebook、Instagram、GitHub等

### 🛠 实用工具
各类在线工具：翻译、短链、网速测试、临时邮箱、IP查询等

### 📰 科技资讯
知名科技媒体：36氪、极客公园、IT之家、少数派、TechCrunch等

### ☁️ 云存储
主流云存储服务：Google Drive、OneDrive、百度网盘、阿里云盘等

### 📧 电子邮箱
常用邮箱服务：Gmail、Outlook、QQ邮箱、Proton Mail等

## 🎨 自定义指南

### 添加新分类

在 `index.html` 中添加新的分类标题和内容区域：

```html
<h2 class="category-title" id="new-category">
  <i class="fa-solid fa-icon-name"></i> 新分类名称
</h2>
<section class="link-grid">
  <!-- 添加链接卡片 -->
</section>
```

同时在导航栏中添加对应链接：

```html
<nav>
  <ul>
    <!-- 其他链接 -->
    <li><a href="#new-category">新分类</a></li>
  </ul>
</nav>
```

### 添加新链接

在对应的分类区域内添加链接卡片：

```html
<div class="link-card">
  <a href="https://example.com" target="_blank"></a>
  <i class="fa-brands fa-example"></i>
  <h3>网站名称</h3>
</div>
```

### 修改样式

在 `style.css` 中修改相应的CSS变量来自定义主题颜色：

```css
:root {
  --primary-color: #ff8a00;    /* 主色调 */
  --primary-2: #ff5a00;        /* 渐变辅助色 */
  --bg-start: #07070a;         /* 背景渐变起始色 */
  --bg-end: #0f1113;           /* 背景渐变结束色 */
}
```

## 🌐 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 开发建议

1. 保持代码简洁和语义化
2. 遵循现有的代码风格
3. 添加新功能时考虑响应式设计
4. 确保无障碍访问兼容性

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体服务
- 所有集成服务的提供商

## 📞 联系方式

如有问题或建议，请提交 Issue 或联系项目维护者。

---

🎉 感谢使用 WebNav Hub！让网络导航变得更简单、更美观！
