"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7794],{60174:(e,s,n)=>{n.r(s),n.d(s,{data:()=>o});const o=JSON.parse('{"key":"v-a78217ca","path":"/vuepress-next/guide/configuration.html","title":"Configuration","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Config File","slug":"config-file","link":"#config-file","children":[]},{"level":2,"title":"Config Scopes","slug":"config-scopes","link":"#config-scopes","children":[{"level":3,"title":"Site Config","slug":"site-config","link":"#site-config","children":[]},{"level":3,"title":"Theme Config","slug":"theme-config","link":"#theme-config","children":[]}]}],"git":{"createdTime":1635758933000,"updatedTime":1639839959000,"contributors":[{"name":"Starzkg","email":"1600337300@qq.com","commits":1},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/guide/configuration.md","content":"# Configuration\\n\\n## Config File\\n\\nWithout any configuration, the VuePress site is pretty minimal. To customize your site, let’s first create a `.vuepress` directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:\\n\\n```\\n├─ docs\\n│  ├─ .vuepress\\n│  │  └─ config.js\\n│  └─ README.md\\n├─ .gitignore\\n└─ package.json\\n```\\n\\nThe essential file for configuring a VuePress site is `.vuepress/config.js`, which should export a JavaScript object. If you are using TypeScript, you can use `.vuepress/config.ts` instead to get better types hint for VuePress Config.\\n\\n<CodeGroup>\\n  <CodeGroupItem title=\\"JS\\" active>\\n\\n```js\\nmodule.exports = {\\n  // site config\\n  lang: \'en-US\',\\n  title: \'Hello, VuePress!\',\\n  description: \'This is my first VuePress site\',\\n\\n  // theme and its config\\n  theme: \'@vuepress/theme-default\',\\n  themeConfig: {\\n    logo: \'https://vuejs.org/images/logo.png\',\\n  },\\n}\\n```\\n\\n  </CodeGroupItem>\\n\\n  <CodeGroupItem title=\\"TS\\">\\n\\n```ts\\nimport { defineUserConfig } from \'vuepress\'\\nimport type { DefaultThemeOptions } from \'vuepress\'\\n\\nexport default defineUserConfig<DefaultThemeOptions>({\\n  // site config\\n  lang: \'en-US\',\\n  title: \'Hello VuePress\',\\n  description: \'Just playing around\',\\n\\n  // theme and its config\\n  theme: \'@vuepress/theme-default\',\\n  themeConfig: {\\n    logo: \'https://vuejs.org/images/logo.png\',\\n  },\\n})\\n```\\n\\n  </CodeGroupItem>\\n</CodeGroup>\\n\\n::: tip\\nCheck out the [Config Reference](../reference/config.md) for a full list of VuePress config.\\n:::\\n\\n## Config Scopes\\n\\nYou may have noticed that there is a `themeConfig` option in VuePress config.\\n\\nOptions outside `themeConfig` are **Site Config**, while options inside `themeConfig` are **Theme Config**.\\n\\n### Site Config\\n\\nSite config means that, no matter what theme you are using, these configurations are always valid.\\n\\nAs we know, every site should have its own `lang`, `title`, `description`, etc. Thus, VuePress has built-in support for those options.\\n\\n### Theme Config\\n\\nTheme config will be processed by VuePress theme, so it depends on the theme you are using.\\n\\nIf you don\'t specify the `theme` option of VuePress config, the default theme will be used.\\n\\n::: tip\\nCheck out the [Default Theme > Config Reference](../reference/default-theme/config.md) for theme config of default theme.\\n:::\\n","author":[{"name":"Starzkg","email":"1600337300@qq.com"},{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":325,"words":325,"readingTime":1.08}')},78367:(e,s,n)=>{n.r(s),n.d(s,{default:()=>C});var o=n(1863);const l=(0,o._)("h1",{id:"configuration",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,o.Uk)(" Configuration")],-1),i=(0,o._)("h2",{id:"config-file",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#config-file","aria-hidden":"true"},"#"),(0,o.Uk)(" Config File")],-1),t=(0,o._)("p",null,[(0,o.Uk)("Without any configuration, the VuePress site is pretty minimal. To customize your site, let’s first create a "),(0,o._)("code",null,".vuepress"),(0,o.Uk)(" directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:")],-1),a={class:"code-enhance"},r=(0,o.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">├─ docs</span></span>\n<span class="line"><span style="color:#D4D4D4;">│  ├─ .vuepress</span></span>\n<span class="line"><span style="color:#D4D4D4;">│  │  └─ config.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">│  └─ README.md</span></span>\n<span class="line"><span style="color:#D4D4D4;">├─ .gitignore</span></span>\n<span class="line"><span style="color:#D4D4D4;">└─ package.json</span></span>\n<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),c=(0,o._)("p",null,[(0,o.Uk)("The essential file for configuring a VuePress site is "),(0,o._)("code",null,".vuepress/config.js"),(0,o.Uk)(", which should export a JavaScript object. If you are using TypeScript, you can use "),(0,o._)("code",null,".vuepress/config.ts"),(0,o.Uk)(" instead to get better types hint for VuePress Config.")],-1),p={class:"code-enhance"},u=(0,o._)("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[(0,o._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,o._)("code",null,[(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#4EC9B0"}},"module"),(0,o._)("span",{style:{color:"#D4D4D4"}},"."),(0,o._)("span",{style:{color:"#4EC9B0"}},"exports"),(0,o._)("span",{style:{color:"#D4D4D4"}}," = {")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#6A9955"}},"// site config")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"lang:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'en-US'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"title:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'Hello, VuePress!'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"description:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'This is my first VuePress site'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"}),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#6A9955"}},"// theme and its config")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"theme:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"themeConfig:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"    "),(0,o._)("span",{style:{color:"#9CDCFE"}},"logo:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'https://vuejs.org/images/logo.png'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"}")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"})])]),(0,o._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"})])],-1),d={class:"code-enhance"},D=(0,o._)("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[(0,o._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,o._)("code",null,[(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#C586C0"}},"import"),(0,o._)("span",{style:{color:"#D4D4D4"}}," { "),(0,o._)("span",{style:{color:"#9CDCFE"}},"defineUserConfig"),(0,o._)("span",{style:{color:"#D4D4D4"}}," } "),(0,o._)("span",{style:{color:"#C586C0"}},"from"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'vuepress'")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#C586C0"}},"import"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#C586C0"}},"type"),(0,o._)("span",{style:{color:"#D4D4D4"}}," { "),(0,o._)("span",{style:{color:"#9CDCFE"}},"DefaultThemeOptions"),(0,o._)("span",{style:{color:"#D4D4D4"}}," } "),(0,o._)("span",{style:{color:"#C586C0"}},"from"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'vuepress'")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"}),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#C586C0"}},"export"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#C586C0"}},"default"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#DCDCAA"}},"defineUserConfig"),(0,o._)("span",{style:{color:"#D4D4D4"}},"<"),(0,o._)("span",{style:{color:"#4EC9B0"}},"DefaultThemeOptions"),(0,o._)("span",{style:{color:"#D4D4D4"}},">({")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#6A9955"}},"// site config")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"lang:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'en-US'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"title:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'Hello VuePress'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"description:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'Just playing around'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"}),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#6A9955"}},"// theme and its config")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"theme:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  "),(0,o._)("span",{style:{color:"#9CDCFE"}},"themeConfig:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"    "),(0,o._)("span",{style:{color:"#9CDCFE"}},"logo:"),(0,o._)("span",{style:{color:"#D4D4D4"}}," "),(0,o._)("span",{style:{color:"#CE9178"}},"'https://vuejs.org/images/logo.png'"),(0,o._)("span",{style:{color:"#D4D4D4"}},",")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"},[(0,o._)("span",{style:{color:"#D4D4D4"}},"})")]),(0,o.Uk)("\n"),(0,o._)("span",{class:"line"})])]),(0,o._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"}),(0,o._)("div",{class:"line-number"})])],-1),f={class:"custom-container tip"},_=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),h=(0,o.uE)('<h2 id="config-scopes" tabindex="-1"><a class="header-anchor" href="#config-scopes" aria-hidden="true">#</a> Config Scopes</h2><p>You may have noticed that there is a <code>themeConfig</code> option in VuePress config.</p><p>Options outside <code>themeConfig</code> are <strong>Site Config</strong>, while options inside <code>themeConfig</code> are <strong>Theme Config</strong>.</p><h3 id="site-config" tabindex="-1"><a class="header-anchor" href="#site-config" aria-hidden="true">#</a> Site Config</h3><p>Site config means that, no matter what theme you are using, these configurations are always valid.</p><p>As we know, every site should have its own <code>lang</code>, <code>title</code>, <code>description</code>, etc. Thus, VuePress has built-in support for those options.</p><h3 id="theme-config" tabindex="-1"><a class="header-anchor" href="#theme-config" aria-hidden="true">#</a> Theme Config</h3><p>Theme config will be processed by VuePress theme, so it depends on the theme you are using.</p><p>If you don’t specify the <code>theme</code> option of VuePress config, the default theme will be used.</p>',9),g={class:"custom-container tip"},m=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),y={},C=(0,n(94598).Z)(y,[["render",function(e,s){const n=(0,o.up)("CodeCopyButton"),y=(0,o.up)("CodeGroupItem"),C=(0,o.up)("CodeGroup"),v=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[l,i,t,(0,o._)("div",a,[r,(0,o.Wm)(n)]),c,(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{title:"JS",active:""},{default:(0,o.w5)((()=>[(0,o._)("div",p,[u,(0,o.Wm)(n)])])),_:1}),(0,o.Wm)(y,{title:"TS"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[D,(0,o.Wm)(n)])])),_:1})])),_:1}),(0,o._)("div",f,[_,(0,o._)("p",null,[(0,o.Uk)("Check out the "),(0,o.Wm)(v,{to:"/vuepress-next/reference/config.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Config Reference")])),_:1}),(0,o.Uk)(" for a full list of VuePress config.")])]),h,(0,o._)("div",g,[m,(0,o._)("p",null,[(0,o.Uk)("Check out the "),(0,o.Wm)(v,{to:"/vuepress-next/reference/default-theme/config.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Default Theme > Config Reference")])),_:1}),(0,o.Uk)(" for theme config of default theme.")])])])}]])}}]);