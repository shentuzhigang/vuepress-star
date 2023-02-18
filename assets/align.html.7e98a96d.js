const e=JSON.parse('{"key":"v-8ad0b588","path":"/zh/guide/markdown/advanced/align.html","title":"自定义对齐","lang":"zh-CN","frontmatter":{"title":"自定义对齐","icon":"align-center","head":[["meta",{"name":"og:url","content":"/zh/guide/markdown/advanced/align.html"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"自定义对齐"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-10-22T08:40:46.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-10-22T08:40:46.000Z"}]]},"excerpt":"<h1 id=\\"自定义对齐\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#自定义对齐\\" aria-hidden=\\"true\\">#</a> 自定义对齐</h1>\\n<p>让你的 VuePress 站点中的 Markdown 文件支持自定义对齐。</p>\\n<p>通过对 <code v-pre>vuepress-plugin-container</code> 进行额外的配置注入，你可以使用自定义容器语法实现自定义对齐。</p>\\n","headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1664110816000,"updatedTime":1666428046000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":4}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/markdown/advanced/align.md","content":"---\\ntitle: 自定义对齐\\nicon: align-center\\n---\\n# 自定义对齐\\n让你的 VuePress 站点中的 Markdown 文件支持自定义对齐。\\n\\n通过对 `vuepress-plugin-container` 进行额外的配置注入，你可以使用自定义容器语法实现自定义对齐。\\n\\n<!-- more -->\\n\\n## 语法\\n```md\\n::: center\\nParagraph to center\\n:::\\n\\n::: right\\nRight paragraph\\n:::\\n```\\n\\n进行段落对齐的自定义\\n\\n<!-- more -->\\n\\n## 示例\\n\\n**输入**\\n```md\\n:::: danger\\nvuepress-theme-star v2 is still in W.I.P, the API may have\\n\\n::: center\\nSignificant changes.\\n:::\\n\\nIf you meet a bug during usage, you can\\n\\n::: right\\n[Mention an issue](https://github.com/vuepress-theme-star/vuepress-theme-star/issues).\\n:::\\n::::\\n```\\n**输出**\\n:::: danger vuepress-theme-star v2 is still in W.I.P, the API may have\\n\\n::: center \\nSignificant changes.\\n:::\\n\\nIf you meet a bug during usage, you can\\n\\n::: right\\n[Mention an issue](https://github.com/vuepress-theme-star/vuepress-theme-star/issues).\\n:::\\n::::\\n\\n## 参考\\n- [vuepress-plugin-container](https://vuepress.github.io/zh/reference/plugin/container.html)\\n","icon":"align-center","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":184,"words":184,"readingTime":0.61}');export{e as data};