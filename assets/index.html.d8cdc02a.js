const n=JSON.parse('{"key":"v-10e04ba5","path":"/zh/guide/markdown/","title":"Markdown","lang":"zh-CN","frontmatter":{"title":"Markdown","icon":"markdown","categories":["Markdown"],"tags":["Markdown"],"head":[["meta",{"name":"og:url","content":"/zh/guide/markdown/"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"Markdown"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-10-01T07:50:13.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:tag","content":"Markdown"}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-10-01T07:50:13.000Z"}]]},"excerpt":"<h1 id=\\"markdown\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown\\" aria-hidden=\\"true\\">#</a> Markdown</h1>\\n<p>如果你还不了解 Markdown ，请先学习一些 <a href=\\"https://commonmark.org/help/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Markdown 教程<ExternalLinkIcon/></a>。</p>\\n","headers":[{"level":2,"title":"markdown-it","slug":"markdown-it","link":"#markdown-it","children":[{"level":3,"title":"markdown-it 内置","slug":"markdown-it-内置","link":"#markdown-it-内置","children":[]}]},{"level":2,"title":"Vuepress","slug":"vuepress","link":"#vuepress","children":[{"level":3,"title":"Vuepress 内置","slug":"vuepress-内置","link":"#vuepress-内置","children":[]}]},{"level":2,"title":"Vuepress Star","slug":"vuepress-star","link":"#vuepress-star","children":[{"level":3,"title":"Vuepress Star 扩展","slug":"vuepress-star-扩展","link":"#vuepress-star-扩展","children":[]},{"level":3,"title":"Markdown Spec","slug":"markdown-spec","link":"#markdown-spec","children":[]}]}],"git":{"createdTime":1664110816000,"updatedTime":1664610613000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":2}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/markdown/README.md","content":"---\\ntitle: Markdown\\nicon: markdown\\ncategories:\\n  - Markdown\\ntags:\\n  - Markdown\\n---\\n# Markdown\\n如果你还不了解 Markdown ，请先学习一些 [Markdown 教程](https://commonmark.org/help/)。\\n\\n<!-- more -->\\n\\n## markdown-it\\nVuePress 内置 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容。\\n\\n### markdown-it 内置\\n\\n由 markdown-it 内置支持：\\n\\n- [表格](https://help.github.com/articles/organizing-information-with-tables/) (GFM)\\n- [删除线](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)\\n\\n\\n## Vuepress\\nVuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。\\n\\nVuePress 内置支持的 [Markdown 语法扩展](https://vuepress.github.io/zh/guide/markdown.html)\\n\\n### Vuepress 内置\\n由 Vuepress 内置支持：\\n- [标题锚点](https://vuepress.github.io/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9)\\n- [目录](https://vuepress.github.io/zh/guide/markdown.html#%E7%9B%AE%E5%BD%95)\\n- [代码块](https://vuepress.github.io/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)\\n- [导入代码块](https://vuepress.github.io/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97)\\n\\n## Vuepress Star\\nVuePress Star 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 及其 markdown-it插件 和 [@mdit-vue](https://github.com/mdit-vue/mdit-vue) ，在 Markdown 中启用了更多的语法与新功能。\\n\\n### Vuepress Star 扩展\\n#### [基础语法](./basic/)\\n- [x] [HTML 标签](./basic/html-tags.md)\\n  - [x] \\\\<abbr\\\\>\\n  - [x] ++\\\\<ins\\\\>++\\n  - [x] ==\\\\<mark\\\\>==\\n  - [x] ^\\\\<sub\\\\>^\\n  - [x] ~\\\\<sup\\\\>~\\n\\n*[abbr]: Abbreviation\\n\\n- [x] [样式化文本](./basic/styling-text.md)\\n  - [x] **粗体**\\n  - [x] *斜体*\\n  - [x] ~~删除线~~\\n  - [x] ==标记==\\n  - [x] 下~标~\\n  - [x] 上^标^\\n- [x] [引用](./basic/quote.md)\\n- [x] [颜色](./basic/color-model.md)\\n- [x] [脚注](./basic/footnote.md)\\n- [x] [定义列表](./basic/deflist.md)\\n- [x] [任务列表](./basic/task-list.md)\\n- [x] [emoji 表情](https://github.com/markdown-it/markdown-it-emoji)\\n\\n#### [高级语法](./advanced/)\\n- [x] [自定义容器](./advanced/container.md)\\n- [x] [自定义对齐](./advanced/align.md)\\n\\n- [x] [Chart](./advanced/chart.md)\\n- [x] [ECharts](./advanced/echarts.md)\\n- [x] [Mermaid](./advanced/markmap.md)\\n- [x] [flowchart](./advanced/flowchart.md)\\n- [x] [Markmap](./advanced/markmap.md)\\n- [ ] tex\\n  - [x] katex\\n  - [x] mathjax\\n- [x] reveal\\n- [ ] code demo\\n\\n### Markdown Spec\\n- [CommonMark Spec](https://spec.commonmark.org/)\\n- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)\\n\\n::: tip\\n\\n并不需要担心你的网站大小，最终代码不会包含未启用功能的代码。\\n\\n:::\\n","icon":"markdown","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":480,"words":480,"readingTime":1.6}');export{n as data};