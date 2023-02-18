"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2664],{7529:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-7de3cd45","path":"/vuepress-next/advanced/cookbook/usage-of-client-app-enhance.html","title":"Usage of Client App Enhance","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Register Vue Components","slug":"register-vue-components","link":"#register-vue-components","children":[]},{"level":2,"title":"Use Non-SSR-Friendly Features","slug":"use-non-ssr-friendly-features","link":"#use-non-ssr-friendly-features","children":[]},{"level":2,"title":"Use Router Methods","slug":"use-router-methods","link":"#use-router-methods","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/advanced/cookbook/usage-of-client-app-enhance.md","content":"# Usage of Client App Enhance\\n\\nThe [clientAppEnhanceFiles](../../reference/plugin-api.md#clientappenhancefiles) hook of Plugin API allows you to set the path to the client app enhance files. You can use it in your plugin or theme:\\n\\n```ts\\nimport { path } from \'@vuepress/utils\'\\n\\nconst pluginOrTheme = {\\n  clientAppEnhanceFiles: path.resolve(__dirname, \'./path/to/clientAppEnhance.ts\'),\\n}\\n```\\n\\nThen create a `clientAppEnhance.ts` file. You can make use of the [defineClientAppEnhance](../../reference/client-api.md#defineclientappenhance) helper to get the types hint. Notice that the function can be either synchronous or asynchronous.\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\n\\nexport default defineClientAppEnhance(({ app, router, siteData }) => {\\n  // ...\\n})\\n```\\n\\n- The `app` is the Vue application instance that created by [createApp](https://v3.vuejs.org/api/application-api.html).\\n- The `router` is the Vue Router instance that created by [createRouter](https://next.router.vuejs.org/api/#createrouter).\\n- The `siteData` is an object that generated from user config, including [base](../../reference/config.md#base), [lang](../../reference/config.md#lang), [title](../../reference/config.md#title), [description](../../reference/config.md#description), [head](../../reference/config.md#head) and [locales](../../reference/config.md#locales).\\n\\nThe client app enhance will be invoked after the client app is created. It\'s possible to implement any enhancements to the Vue application.\\n\\n::: tip\\nFor ease of use in user config, the `.vuepress/clientAppEnhance.{js,ts}` file will be used as the client app enhance file implicitly, unless you set `clientAppEnhanceFiles` explicitly in the config file.\\n:::\\n\\n## Register Vue Components\\n\\nYou can register global Vue components via the [component](https://v3.vuejs.org/api/application-api.html#component) method:\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\nimport MyComponent from \'./MyComponent.vue\'\\n\\nexport default defineClientAppEnhance(({ app, router, siteData }) => {\\n  app.component(\'MyComponent\', MyComponent)\\n})\\n```\\n\\n## Use Non-SSR-Friendly Features\\n\\nVuePress will generate a SSR application to pre-render pages during build. Generally speaking, if a code snippet is using Browser / DOM APIs before client app is mounted, we call it non-SSR-friendly.\\n\\nWe already provides a [ClientOnly](../../reference/components.md#clientonly) component to wrap non-SSR-friendly content.\\n\\nIn client app enhance files, you can make use of the [`__VUEPRESS_SSR__`](../../reference/client-api.md#ssr) flag for that purpose.\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\n\\nexport default defineClientAppEnhance(async ({ app, router, siteData }) => {\\n  if (!__VUEPRESS_SSR__) {\\n    const nonSsrFriendlyModule = await import(\'non-ssr-friendly-module\')\\n    // ...\\n  }\\n})\\n```\\n\\n## Use Router Methods\\n\\nYou can make use of the [Router Methods](https://next.router.vuejs.org/api/#router-methods) that provided by vue-router. For example, add navigation guard:\\n\\n```ts\\nimport { defineClientAppEnhance } from \'@vuepress/client\'\\n\\nexport default defineClientAppEnhance(({ app, router, siteData }) => {\\n  router.beforeEach((to) => {\\n    console.log(\'before navigation\')\\n  })\\n\\n  router.afterEach((to) => {\\n    console.log(\'after navigation\')\\n  })\\n})\\n```\\n\\n::: warning\\nIt\'s not recommended to use `addRoute` method to add dynamic routes here, because those routes will **NOT** be pre-rendered in build mode.\\n\\nBut you can still do that if you understand the drawback.\\n:::\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":469,"words":469,"readingTime":1.56}')},36264:(e,n,s)=>{s.r(n),s.d(n,{default:()=>W});var a=s(1863);const l=(0,a._)("h1",{id:"usage-of-client-app-enhance",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#usage-of-client-app-enhance","aria-hidden":"true"},"#"),(0,a.Uk)(" Usage of Client App Enhance")],-1),o={class:"code-enhance"},t=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">pluginOrTheme</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">clientAppEnhanceFiles:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/clientAppEnhance.ts&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),p=(0,a._)("code",null,"clientAppEnhance.ts",-1),r={class:"code-enhance"},c=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),i=(0,a._)("code",null,"app",-1),D={href:"https://v3.vuejs.org/api/application-api.html",target:"_blank",rel:"noopener noreferrer"},d=(0,a._)("code",null,"router",-1),u={href:"https://next.router.vuejs.org/api/#createrouter",target:"_blank",rel:"noopener noreferrer"},y=(0,a._)("code",null,"siteData",-1),h=(0,a._)("p",null,"The client app enhance will be invoked after the client app is created. It’s possible to implement any enhancements to the Vue application.",-1),m=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("For ease of use in user config, the "),(0,a._)("code",null,".vuepress/clientAppEnhance.{js,ts}"),(0,a.Uk)(" file will be used as the client app enhance file implicitly, unless you set "),(0,a._)("code",null,"clientAppEnhanceFiles"),(0,a.Uk)(" explicitly in the config file.")])],-1),C=(0,a._)("h2",{id:"register-vue-components",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#register-vue-components","aria-hidden":"true"},"#"),(0,a.Uk)(" Register Vue Components")],-1),f={href:"https://v3.vuejs.org/api/application-api.html#component",target:"_blank",rel:"noopener noreferrer"},v={class:"code-enhance"},g=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./MyComponent.vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;MyComponent&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),E=(0,a._)("h2",{id:"use-non-ssr-friendly-features",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#use-non-ssr-friendly-features","aria-hidden":"true"},"#"),(0,a.Uk)(" Use Non-SSR-Friendly Features")],-1),b=(0,a._)("p",null,"VuePress will generate a SSR application to pre-render pages during build. Generally speaking, if a code snippet is using Browser / DOM APIs before client app is mounted, we call it non-SSR-friendly.",-1),k=(0,a._)("code",null,"__VUEPRESS_SSR__",-1),_={class:"code-enhance"},U=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> ({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">__VUEPRESS_SSR__</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">nonSsrFriendlyModule</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;non-ssr-friendly-module&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),A=(0,a._)("h2",{id:"use-router-methods",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#use-router-methods","aria-hidden":"true"},"#"),(0,a.Uk)(" Use Router Methods")],-1),F={href:"https://next.router.vuejs.org/api/#router-methods",target:"_blank",rel:"noopener noreferrer"},x={class:"code-enhance"},S=(0,a.uE)('<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientAppEnhance</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientAppEnhance</span><span style="color:#D4D4D4;">(({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">beforeEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;before navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">afterEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;after navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  })</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),w=(0,a._)("div",{class:"custom-container warning"},[(0,a._)("p",{class:"custom-container-title"},"WARNING"),(0,a._)("p",null,[(0,a.Uk)("It’s not recommended to use "),(0,a._)("code",null,"addRoute"),(0,a.Uk)(" method to add dynamic routes here, because those routes will "),(0,a._)("strong",null,"NOT"),(0,a.Uk)(" be pre-rendered in build mode.")]),(0,a._)("p",null,"But you can still do that if you understand the drawback.")],-1),R={},W=(0,s(94598).Z)(R,[["render",function(e,n){const s=(0,a.up)("RouterLink"),R=(0,a.up)("CodeCopyButton"),W=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a._)("p",null,[(0,a.Uk)("The "),(0,a.Wm)(s,{to:"/vuepress-next/reference/plugin-api.html#clientappenhancefiles"},{default:(0,a.w5)((()=>[(0,a.Uk)("clientAppEnhanceFiles")])),_:1}),(0,a.Uk)(" hook of Plugin API allows you to set the path to the client app enhance files. You can use it in your plugin or theme:")]),(0,a._)("div",o,[t,(0,a.Wm)(R)]),(0,a._)("p",null,[(0,a.Uk)("Then create a "),p,(0,a.Uk)(" file. You can make use of the "),(0,a.Wm)(s,{to:"/vuepress-next/reference/client-api.html#defineclientappenhance"},{default:(0,a.w5)((()=>[(0,a.Uk)("defineClientAppEnhance")])),_:1}),(0,a.Uk)(" helper to get the types hint. Notice that the function can be either synchronous or asynchronous.")]),(0,a._)("div",r,[c,(0,a.Wm)(R)]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("The "),i,(0,a.Uk)(" is the Vue application instance that created by "),(0,a._)("a",D,[(0,a.Uk)("createApp"),(0,a.Wm)(W)]),(0,a.Uk)(".")]),(0,a._)("li",null,[(0,a.Uk)("The "),d,(0,a.Uk)(" is the Vue Router instance that created by "),(0,a._)("a",u,[(0,a.Uk)("createRouter"),(0,a.Wm)(W)]),(0,a.Uk)(".")]),(0,a._)("li",null,[(0,a.Uk)("The "),y,(0,a.Uk)(" is an object that generated from user config, including "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#base"},{default:(0,a.w5)((()=>[(0,a.Uk)("base")])),_:1}),(0,a.Uk)(", "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#lang"},{default:(0,a.w5)((()=>[(0,a.Uk)("lang")])),_:1}),(0,a.Uk)(", "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#title"},{default:(0,a.w5)((()=>[(0,a.Uk)("title")])),_:1}),(0,a.Uk)(", "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#description"},{default:(0,a.w5)((()=>[(0,a.Uk)("description")])),_:1}),(0,a.Uk)(", "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#head"},{default:(0,a.w5)((()=>[(0,a.Uk)("head")])),_:1}),(0,a.Uk)(" and "),(0,a.Wm)(s,{to:"/vuepress-next/reference/config.html#locales"},{default:(0,a.w5)((()=>[(0,a.Uk)("locales")])),_:1}),(0,a.Uk)(".")])]),h,m,C,(0,a._)("p",null,[(0,a.Uk)("You can register global Vue components via the "),(0,a._)("a",f,[(0,a.Uk)("component"),(0,a.Wm)(W)]),(0,a.Uk)(" method:")]),(0,a._)("div",v,[g,(0,a.Wm)(R)]),E,b,(0,a._)("p",null,[(0,a.Uk)("We already provides a "),(0,a.Wm)(s,{to:"/vuepress-next/reference/components.html#clientonly"},{default:(0,a.w5)((()=>[(0,a.Uk)("ClientOnly")])),_:1}),(0,a.Uk)(" component to wrap non-SSR-friendly content.")]),(0,a._)("p",null,[(0,a.Uk)("In client app enhance files, you can make use of the "),(0,a.Wm)(s,{to:"/vuepress-next/reference/client-api.html#ssr"},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Uk)(" flag for that purpose.")]),(0,a._)("div",_,[U,(0,a.Wm)(R)]),A,(0,a._)("p",null,[(0,a.Uk)("You can make use of the "),(0,a._)("a",F,[(0,a.Uk)("Router Methods"),(0,a.Wm)(W)]),(0,a.Uk)(" that provided by vue-router. For example, add navigation guard:")]),(0,a._)("div",x,[S,(0,a.Wm)(R)]),w])}]])}}]);