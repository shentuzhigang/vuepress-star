"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6935],{32093:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-b2bc88ce","path":"/zh/vuepress-next/advanced/cookbook/adding-extra-pages.html","title":"添加额外页面","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"添加默认的主页","slug":"添加默认的主页","link":"#添加默认的主页","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/advanced/cookbook/adding-extra-pages.md","content":"# 添加额外页面\\n\\n有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。\\n\\n我们可以借助于 [插件 API](../../reference/plugin-api.md) 和 [Node API](../../reference/node-api.md) 来轻松实现。\\n\\n## 添加默认的主页\\n\\n作为一个主题作者，你可能不想要求用户必须创建一个 `/README.md` 文件来作为主页，但是你希望提供一个默认的主页：\\n\\n```ts\\nimport { createPage } from \'@vuepress/core\';\\n\\nexport default {\\n  // 初始化之后，所有的页面已经加载完毕\\n  async onInitialized(app) {\\n    // 如果主页不存在\\n    if (app.pages.every((page) => page.path !== \'/\')) {\\n      // 创建一个主页\\n      const homepage = await createPage(app, {\\n        path: \'/\',\\n        // 设置 frontmatter\\n        frontmatter: {\\n          layout: \'Layout\',\\n        },\\n        // 设置 markdown 内容\\n        content: `\\\\\\n# 欢迎来到 ${app.options.title}\\n\\n这是默认主页\\n`,\\n      })\\n      // 把它添加到 `app.pages`\\n      app.pages.push(homepage)\\n    }\\n  }\\n};\\n```\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":198,"words":198,"readingTime":0.66}')},34281:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});var l=a(1863);const e=(0,l._)("h1",{id:"添加额外页面",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#添加额外页面","aria-hidden":"true"},"#"),(0,l.Uk)(" 添加额外页面")],-1),p=(0,l._)("p",null,"有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。",-1),o=(0,l._)("h2",{id:"添加默认的主页",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#添加默认的主页","aria-hidden":"true"},"#"),(0,l.Uk)(" 添加默认的主页")],-1),c=(0,l._)("p",null,[(0,l.Uk)("作为一个主题作者，你可能不想要求用户必须创建一个 "),(0,l._)("code",null,"/README.md"),(0,l.Uk)(" 文件来作为主页，但是你希望提供一个默认的主页：")],-1),r={class:"code-enhance"},t=(0,l.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createPage</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/core&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 初始化之后，所有的页面已经加载完毕</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onInitialized</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 如果主页不存在</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">every</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">)) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 创建一个主页</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">homepage</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">createPage</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">path:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// 设置 frontmatter</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">frontmatter:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">layout:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Layout&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        },</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// 设置 markdown 内容</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">`</span><span style="color:#D7BA7D;">\\</span></span>\n<span class="line"><span style="color:#CE9178;"># 欢迎来到 </span><span style="color:#569CD6;">${</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#569CD6;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CE9178;">这是默认主页</span></span>\n<span class="line"><span style="color:#CE9178;">`</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      })</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 把它添加到 `app.pages`</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">homepage</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    }</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),D={},i=(0,a(94598).Z)(D,[["render",function(s,n){const a=(0,l.up)("RouterLink"),D=(0,l.up)("CodeCopyButton");return(0,l.wg)(),(0,l.iD)("div",null,[e,p,(0,l._)("p",null,[(0,l.Uk)("我们可以借助于 "),(0,l.Wm)(a,{to:"/zh/vuepress-next/reference/plugin-api.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("插件 API")])),_:1}),(0,l.Uk)(" 和 "),(0,l.Wm)(a,{to:"/zh/vuepress-next/reference/node-api.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Node API")])),_:1}),(0,l.Uk)(" 来轻松实现。")]),o,c,(0,l._)("div",r,[t,(0,l.Wm)(D)])])}]])}}]);