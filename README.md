# IHCCC - 中国互联网安全合规中心

IHCCC（Internet & Host CIS Compliance Center）是一个非营利组织，致力于推广 CIS 安全基准和 PCI-DSS 支付安全标准的中文化资源，为中国企业和安全从业者提供权威、免费的安全合规指导。

## 🌐 访问网站

本仓库通过 **GitHub Pages** 自动部署为静态网站。

**访问地址：** <https://mzwrt.github.io/ihccc/>

> 合并到 `main` 分支后，GitHub Actions 会自动将网站部署到 GitHub Pages。

### 首次启用 GitHub Pages

如果网站尚未生效，需要在仓库设置中启用 GitHub Pages：

1. 进入仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存后，下次推送到 `main` 分支时会自动部署

### 绑定自定义域名（可选）

如果你拥有 `ihccc.com` 域名，可以将其绑定到 GitHub Pages：

1. 在域名 DNS 管理面板中添加 CNAME 记录：`ihccc.com` → `mzwrt.github.io`
2. 进入仓库 → **Settings** → **Pages** → **Custom domain** 填入 `ihccc.com`
3. 勾选 **Enforce HTTPS**

绑定后即可通过 <https://ihccc.com> 访问

## 📋 主要内容

- **CIS 安全基准** - 全球公认的安全配置最佳实践标准中文版
- **PCI-DSS 支付安全标准** - 支付卡行业数据安全标准中文解读
- **资源中心** - 免费的中文安全合规技术文档、培训和工具推荐

## 🏗️ 项目结构

```
ihccc/
├── index.html          # 主页
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # 交互脚本
├── pages/
│   ├── cis.html        # CIS 安全基准页面
│   ├── pci-dss.html    # PCI-DSS 标准页面
│   └── resources.html  # 资源中心页面
└── images/             # 图片资源
```

## 🤝 参与贡献

我们欢迎安全领域的专业人士参与贡献，包括但不限于：

- 翻译 CIS Benchmark 文档
- 翻译 PCI-DSS 标准文档
- 撰写安全合规技术文章
- 改进网站功能和内容

## 📄 许可协议

所有内容遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议