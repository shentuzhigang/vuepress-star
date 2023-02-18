"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2361],{14343:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-d82b6c02","path":"/zh/vuepress-next/guide/plugin.html","title":"插件","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"社区插件","slug":"社区插件","link":"#社区插件","children":[]},{"level":2,"title":"本地插件","slug":"本地插件","link":"#本地插件","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/guide/plugin.md","content":"# 插件\\n\\n借助于 [插件 API](../reference/plugin-api.md) ， VuePress 插件可以为你提供各种不同的功能。\\n\\n## 社区插件\\n\\n社区用户创建了很多插件，并将它们发布到了 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin) 上。 VuePress 团队也在 [@vuepress](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin) Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。\\n\\n一般而言，你需要在 [plugins](../reference/config.md#plugins) 配置项中设置你要使用的插件名称：\\n\\n```js\\nmodule.exports = {\\n  plugins: [\\n    \'foo\',\\n    [\'bar\', { /* 配置项 */ }]\\n  ],\\n}\\n```\\n\\n你可以使用插件名称或者它的简称：\\n\\n|          插件名称          |         简称         |\\n|---------------------------|---------------------|\\n| `vuepress-plugin-foo`     | `foo`               |\\n| `@org/vuepress-plugin-bar`| `@org/bar`          |\\n| `@vuepress/plugin-foobar` | `@vuepress/foobar`  |\\n\\n::: tip\\n大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。\\n\\n然而，部分插件是可以被多次使用的（例如 [@vuepress/plugin-container](../reference/plugin/container.md)），你应该查看插件本身的文档来获取详细指引。\\n:::\\n\\n## 本地插件\\n\\n如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。\\n\\n推荐你直接将 [配置文件](./configuration.md#配置文件) 作为插件使用，因为 [几乎所有的插件 API 都可以在配置文件中使用](../reference/config.md#插件-api)，这在绝大多数场景下都更为方便。\\n\\n但是如果你在配置文件中要做的事情太多了，最好还是将它们提取到单独的插件中，然后通过设置绝对路径或者通过 require 来使用它们：\\n\\n```js\\nmodule.exports = {\\n  plugins: [\\n    path.resolve(__dirname, \'./path/to/your-plugin.js\'),\\n    require(\'./another-plugin\'),\\n  ],\\n}\\n```\\n\\n前往 [深入 > 开发插件](../advanced/plugin.md) 学习如何开发你自己的插件。\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":449,"words":449,"readingTime":1.5}')},69674:(n,e,s)=>{s.r(e),s.d(e,{default:()=>f});var a=s(1863);const l=(0,a._)("h1",{id:"插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 插件")],-1),r=(0,a._)("h2",{id:"社区插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 社区插件")],-1),p={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},t={class:"code-enhance"},i=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#6A9955;">/* 配置项 */</span><span style="color:#D4D4D4;"> }]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),c=(0,a.uE)("<p>你可以使用插件名称或者它的简称：</p><table><thead><tr><th>插件名称</th><th>简称</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>",2),d={class:"custom-container tip"},u=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),D=(0,a._)("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),h=(0,a._)("h2",{id:"本地插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 本地插件")],-1),m=(0,a._)("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),g=(0,a._)("p",null,"但是如果你在配置文件中要做的事情太多了，最好还是将它们提取到单独的插件中，然后通过设置绝对路径或者通过 require 来使用它们：",-1),v={class:"code-enhance"},y=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/your-plugin.js&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./another-plugin&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),k={},f=(0,s(94598).Z)(k,[["render",function(n,e){const s=(0,a.up)("RouterLink"),k=(0,a.up)("ExternalLinkIcon"),f=(0,a.up)("CodeCopyButton");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a._)("p",null,[(0,a.Uk)("借助于 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/reference/plugin-api.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("插件 API")])),_:1}),(0,a.Uk)(" ， VuePress 插件可以为你提供各种不同的功能。")]),r,(0,a._)("p",null,[(0,a.Uk)("社区用户创建了很多插件，并将它们发布到了 "),(0,a._)("a",p,[(0,a.Uk)("NPM"),(0,a.Wm)(k)]),(0,a.Uk)(" 上。 VuePress 团队也在 "),(0,a._)("a",o,[(0,a.Uk)("@vuepress"),(0,a.Wm)(k)]),(0,a.Uk)(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。")]),(0,a._)("p",null,[(0,a.Uk)("一般而言，你需要在 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/reference/config.html#plugins"},{default:(0,a.w5)((()=>[(0,a.Uk)("plugins")])),_:1}),(0,a.Uk)(" 配置项中设置你要使用的插件名称：")]),(0,a._)("div",t,[i,(0,a.Wm)(f)]),c,(0,a._)("div",d,[u,D,(0,a._)("p",null,[(0,a.Uk)("然而，部分插件是可以被多次使用的（例如 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/reference/plugin/container.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("@vuepress/plugin-container")])),_:1}),(0,a.Uk)("），你应该查看插件本身的文档来获取详细指引。")])]),h,m,(0,a._)("p",null,[(0,a.Uk)("推荐你直接将 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:(0,a.w5)((()=>[(0,a.Uk)("配置文件")])),_:1}),(0,a.Uk)(" 作为插件使用，因为 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/reference/config.html#%E6%8F%92%E4%BB%B6-api"},{default:(0,a.w5)((()=>[(0,a.Uk)("几乎所有的插件 API 都可以在配置文件中使用")])),_:1}),(0,a.Uk)("，这在绝大多数场景下都更为方便。")]),g,(0,a._)("div",v,[y,(0,a.Wm)(f)]),(0,a._)("p",null,[(0,a.Uk)("前往 "),(0,a.Wm)(s,{to:"/zh/vuepress-next/advanced/plugin.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("深入 > 开发插件")])),_:1}),(0,a.Uk)(" 学习如何开发你自己的插件。")])])}]])}}]);