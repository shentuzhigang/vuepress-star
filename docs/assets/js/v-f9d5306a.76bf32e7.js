"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2797],{75693:(e,n,l)=>{l.r(n),l.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-f9d5306a","path":"/zh/vuepress-next/reference/components.html","title":"内置组件","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"zh/vuepress-next/reference/components.md","content":"# 内置组件\\n\\n<NpmBadge package=\\"@vuepress/client\\" />\\n\\n## ClientOnly\\n\\n- 使用：\\n\\n```md\\n<ClientOnly>\\n  <NonSsrFriendlyComponent />\\n</ClientOnly>\\n```\\n\\n- 详情：\\n\\n  该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。\\n\\n  如果一个组件在 `setup()` 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：\\n\\n  - 修改这个组件，只在  `onBeforeMount()` 或 `onMounted()` Hook 中使用 浏览器 / DOM API 。\\n  - 使用 `<ClientOnly>` 包裹这个组件。\\n\\n## Content\\n\\n- Props:\\n  - pageKey\\n    - 类型： `string`\\n    - 是否必须： `false`\\n\\n- 使用：\\n\\n```md\\n<Content page-key=\\"v-xxxxxx\\" />\\n```\\n\\n- 详情：\\n\\n  该组件会渲染页面的 Markdown 内容。\\n\\n  页面 Key 是页面路由的 [name](https://next.router.vuejs.org/zh/api/#name-2) 。如果没有传入 `pageKey` Prop ，它会渲染当前路由下的页面。\\n\\n  该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。\\n\\n- 参考：\\n  - [Node API > Page 属性 > key](./node-api.md#key)\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":254,"words":254,"readingTime":0.85}')},72974:(e,n,l)=>{l.r(n),l.d(n,{default:()=>x});var a=l(1863);const t=(0,a._)("h1",{id:"内置组件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#内置组件","aria-hidden":"true"},"#"),(0,a.Uk)(" 内置组件")],-1),i=(0,a._)("h2",{id:"clientonly",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#clientonly","aria-hidden":"true"},"#"),(0,a.Uk)(" ClientOnly")],-1),s=(0,a._)("ul",null,[(0,a._)("li",null,"使用：")],-1),o={class:"code-enhance"},r=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;ClientOnly&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  &lt;NonSsrFriendlyComponent /&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/ClientOnly&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),d=(0,a.uE)('<ul><li><p>详情：</p><p>该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。</p><p>如果一个组件在 <code>setup()</code> 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：</p><ul><li>修改这个组件，只在 <code>onBeforeMount()</code> 或 <code>onMounted()</code> Hook 中使用 浏览器 / DOM API 。</li><li>使用 <code>&lt;ClientOnly&gt;</code> 包裹这个组件。</li></ul></li></ul><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><ul><li><p>Props:</p><ul><li>pageKey <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li></ul></li></ul></li><li><p>使用：</p></li></ul>',3),c={class:"code-enhance"},u=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;Content page-key=&quot;v-xxxxxx&quot; /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),p=(0,a._)("p",null,"详情：",-1),m=(0,a._)("p",null,"该组件会渲染页面的 Markdown 内容。",-1),h={href:"https://next.router.vuejs.org/zh/api/#name-2",target:"_blank",rel:"noopener noreferrer"},g=(0,a._)("code",null,"pageKey",-1),k=(0,a._)("p",null,"该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。",-1),y=(0,a._)("p",null,"参考：",-1),v={},x=(0,l(94598).Z)(v,[["render",function(e,n){const l=(0,a.up)("NpmBadge"),v=(0,a.up)("CodeCopyButton"),x=(0,a.up)("ExternalLinkIcon"),_=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a.Wm)(l,{package:"@vuepress/client"}),i,s,(0,a._)("div",o,[r,(0,a.Wm)(v)]),d,(0,a._)("div",c,[u,(0,a.Wm)(v)]),(0,a._)("ul",null,[(0,a._)("li",null,[p,m,(0,a._)("p",null,[(0,a.Uk)("页面 Key 是页面路由的 "),(0,a._)("a",h,[(0,a.Uk)("name"),(0,a.Wm)(x)]),(0,a.Uk)(" 。如果没有传入 "),g,(0,a.Uk)(" Prop ，它会渲染当前路由下的页面。")]),k]),(0,a._)("li",null,[y,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(_,{to:"/zh/vuepress-next/reference/node-api.html#key"},{default:(0,a.w5)((()=>[(0,a.Uk)("Node API > Page 属性 > key")])),_:1})])])])])])}]])}}]);