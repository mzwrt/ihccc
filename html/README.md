# IHCCC 网站部署文件

此目录包含 IHCCC 网站的完整部署文件，可直接上传至您的 Web 服务器根目录使用。

## 目录结构

```
html/（上传至网站根目录）
├── index.html          # 网站首页
├── about.html          # 关于我们
├── cis.html            # CIS 安全基准
├── dora.html           # DORA 数字运营韧性法案
├── gdpr.html           # GDPR 通用数据保护条例
├── ihccc-bl.html       # IHCCC-BL 安全基线
├── ihccc-cs.html       # IHCCC-CS 网络安全标准
├── ihccc-sb.html       # IHCCC-SB 信息安全基线标准
├── iso27001.html       # ISO 27001 信息安全管理体系
├── laws.html           # 中国网络安全法规
├── nis2.html           # NIS2 网络与信息安全指令
├── nist-csf.html       # NIST CSF 网络安全框架
├── pci-dss.html        # PCI-DSS 支付安全标准
├── resources.html      # 资源中心
├── scripts.html        # 安全加固脚本库
├── soc2.html           # SOC 2 审计标准
├── tools.html          # 合规实用工具
├── tutorials.html      # 合规仓库
├── robots.txt          # 搜索引擎爬虫规则
├── sitemap.xml         # 网站地图
├── css/                # 样式文件
│   ├── style.css
│   └── fonts.css
├── js/                 # JavaScript 文件
│   └── main.js
├── fonts/              # 字体文件（Noto Sans SC）
└── images/             # 图片资源
    ├── favicon.svg
    └── logos/
```

## 部署说明

1. 将 `html/` 目录下的**所有文件和子目录**直接上传至您的 Web 服务器根目录（如 `/var/www/html/` 或 `public_html/`），所有 `.html` 文件均位于根目录，**无需** `pages/` 子目录
2. 确保服务器支持静态 HTML 文件（Apache、Nginx 等均可）
3. 如需修改域名相关配置，请搜索并替换文件中的 `ihccc.com` 为您的实际域名
4. `robots.txt` 和 `sitemap.xml` 中的域名也需要同步修改

## 注意事项

- 本网站为纯静态网站，无需服务器端脚本支持
- 字体文件较大（约 5MB），建议启用 Gzip 压缩
- 建议使用 CDN 加速静态资源加载

---
© 2026 IHCCC 中国互联网安全合规中心 | CC BY-NC-SA 4.0
