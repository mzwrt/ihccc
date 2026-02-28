# 📖 如何添加新的教程仓库

如果你想向教程仓库页面添加新的安全合规教程仓库，请按照以下步骤操作：

## 第一步：确定分类

找到你的教程应该归属的分类区域（操作系统、云平台、容器、数据库、Web服务、网络设备），或在需要时新增一个分类区域。

## 第二步：准备图标

为你的程序准备一个 SVG 图标。你可以从 [Simple Icons](https://simpleicons.org/) 或 [Devicon](https://devicon.dev/) 获取常见程序的 SVG 图标。

## 第三步：复制下方模板代码

在对应分类的 `<div class="repo-grid">` 内，添加以下卡片代码：

```html
<a href="https://github.com/你的用户名/仓库名"
   target="_blank" rel="noopener noreferrer"
   class="repo-card"
   data-keywords="搜索关键词1 关键词2 关键词3">
    <div class="repo-card-icon" style="background:#图标背景色;">
        <!-- 在这里粘贴你的 SVG 图标，建议宽高 28x28 -->
        <svg width="28" height="28" ...>...</svg>
    </div>
    <div class="repo-card-info">
        <h3>程序名称 安全加固
            <svg class="github-mark" viewBox="0 0 24 24"
                 fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12
                0 5.302 3.438 9.8 8.207 11.387.599.111
                .793-.261.793-.577v-2.234c-3.338.726-4.033
                -1.416-4.033-1.416-.546-1.387-1.333-1.756
                -1.333-1.756-1.089-.745.083-.729.083-.729
                1.205.084 1.839 1.237 1.839 1.237 1.07
                1.834 2.807 1.304 3.492.997.107-.775.418
                -1.305.762-1.604-2.665-.305-5.467-1.334
                -5.467-5.931 0-1.311.469-2.381 1.236
                -3.221-.124-.303-.535-1.524.117-3.176 0
                0 1.008-.322 3.301 1.23.957-.266 1.983
                -.399 3.003-.404 1.02.005 2.047.138
                3.006.404 2.291-1.552 3.297-1.23 3.297
                -1.23.653 1.653.242 2.874.118 3.176.77
                .84 1.235 1.911 1.235 3.221 0 4.609
                -2.807 5.624-5.479 5.921.43.372.823
                1.102.823 2.222v3.293c0 .319.192.694
                .801.576 4.765-1.589 8.199-6.086 8.199
                -11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </h3>
        <p>简短描述你的教程内容。</p>
        <div class="repo-tags">
            <span class="repo-tag os">标签1</span>
            <span class="repo-tag security">标签2</span>
        </div>
    </div>
</a>
```

## 第四步：修改关键信息

1. 将 `href` 改为你的 GitHub 仓库地址
2. 将 `data-keywords` 填写与该教程相关的搜索关键词（中英文均可，空格分隔）
3. 替换图标 SVG 为你的程序图标，设置合适的 `background` 背景色
4. 修改 `<h3>` 中的标题名称
5. 修改 `<p>` 中的描述文字
6. 修改 `<span class="repo-tag ...">` 中的标签，可用的标签样式类有：
   - `os`（蓝色）
   - `cloud`（绿色）
   - `db`（黄色）
   - `web`（粉色）
   - `container`（紫色）
   - `network`（浅蓝）
   - `security`（红色）
   - `lang`（浅绿）

## 第五步：新增分类（可选）

如需新增一个分类区域，请复制以下结构并放置在 `<div id="repoContainer">` 内：

```html
<div class="category-section" data-category="自定义分类名">
    <div class="category-header">
        <div class="category-icon" style="background:#背景色;">
            图标emoji
        </div>
        <h2>分类标题</h2>
    </div>
    <div class="repo-grid">
        <!-- 在这里添加该分类下的 repo-card -->
    </div>
</div>
```

## 第六步：提交 Pull Request

1. Fork 本仓库：[https://github.com/mzwrt/ihccc](https://github.com/mzwrt/ihccc)
2. 编辑 `pages/tutorials.html` 文件，按上述模板添加你的教程卡片
3. 提交 Pull Request 并说明添加了什么内容
4. 审核通过后即可合并上线
