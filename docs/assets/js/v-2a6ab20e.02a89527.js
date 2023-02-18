"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7181],{998:(e,n,s)=>{s.r(n),s.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-2a6ab20e","path":"/vuepress-next/guide/plugin.html","title":"Plugin","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Community Plugin","slug":"community-plugin","link":"#community-plugin","children":[]},{"level":2,"title":"Local Plugin","slug":"local-plugin","link":"#local-plugin","children":[]}],"git":{"createdTime":1635758933000,"updatedTime":1635758933000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"vuepress-next/guide/plugin.md","content":"# Plugin\\n\\nWith the help of [Plugin API](../reference/plugin-api.md), VuePress plugin can provide different features for you.\\n\\n## Community Plugin\\n\\nCommunity users have created lots of plugins and published them to [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin). VuePress team also maintains some official plugins under the [@vuepress](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin) scope. You should check the plugin\'s own documentation for detailed guide.\\n\\nIn general, you need to specify the name of the plugin to use in [plugins](../reference/config.md#plugins) option:\\n\\n```js\\nmodule.exports = {\\n  plugins: [\\n    \'foo\',\\n    [\'bar\', { /* options */ }]\\n  ],\\n}\\n```\\n\\nYou can use either plugin name or its shorthand:\\n\\n|        Plugin Name        |      Shorthand      |\\n|---------------------------|---------------------|\\n| `vuepress-plugin-foo`     | `foo`               |\\n| `@org/vuepress-plugin-bar`| `@org/bar`          |\\n| `@vuepress/plugin-foobar` | `@vuepress/foobar`  |\\n\\n::: tip\\nMost plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.\\n\\nHowever, some plugins can be used multiple times (e.g. [@vuepress/plugin-container](../reference/plugin/container.md)), and you should check the documentation of the plugin itself for detailed guide.\\n:::\\n\\n## Local Plugin\\n\\nIf you want to use your own plugin but don\'t want to publish it, you can create a local plugin.\\n\\nIt is recommended to use the [Config File](./configuration.md#config-file) directly as a plugin, because [almost all of the Plugin APIs are available](../reference/config.md#plugin-api), which would be more convenient in most cases.\\n\\nBut if you have too many things to do in your config file, it\'s better to extract them into separate plugins, and use them by setting the absolute path to them or requiring them:\\n\\n```js\\nmodule.exports = {\\n  plugins: [\\n    path.resolve(__dirname, \'./path/to/your-plugin.js\'),\\n    require(\'./another-plugin\'),\\n  ],\\n}\\n```\\n\\nYou can refer to [Advanced > Writing a Plugin](../advanced/plugin.md) for how to write your own plugin.\\n","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":312,"words":312,"readingTime":1.04}')},23630:(e,n,s)=>{s.r(n),s.d(n,{default:()=>b});var l=s(1863);const a=(0,l._)("h1",{id:"plugin",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#"),(0,l.Uk)(" Plugin")],-1),o=(0,l._)("h2",{id:"community-plugin",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#community-plugin","aria-hidden":"true"},"#"),(0,l.Uk)(" Community Plugin")],-1),t={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},i={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},r={class:"code-enhance"},u=(0,l.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#6A9955;">/* options */</span><span style="color:#D4D4D4;"> }]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),p=(0,l.uE)("<p>You can use either plugin name or its shorthand:</p><table><thead><tr><th>Plugin Name</th><th>Shorthand</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>",2),c={class:"custom-container tip"},d=(0,l._)("p",{class:"custom-container-title"},"TIP",-1),g=(0,l._)("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),h=(0,l._)("h2",{id:"local-plugin",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#local-plugin","aria-hidden":"true"},"#"),(0,l.Uk)(" Local Plugin")],-1),m=(0,l._)("p",null,"If you want to use your own plugin but don’t want to publish it, you can create a local plugin.",-1),f=(0,l._)("p",null,"But if you have too many things to do in your config file, it’s better to extract them into separate plugins, and use them by setting the absolute path to them or requiring them:",-1),y={class:"code-enhance"},v=(0,l.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/your-plugin.js&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./another-plugin&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),D={},b=(0,s(94598).Z)(D,[["render",function(e,n){const s=(0,l.up)("RouterLink"),D=(0,l.up)("ExternalLinkIcon"),b=(0,l.up)("CodeCopyButton");return(0,l.wg)(),(0,l.iD)("div",null,[a,(0,l._)("p",null,[(0,l.Uk)("With the help of "),(0,l.Wm)(s,{to:"/vuepress-next/reference/plugin-api.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Plugin API")])),_:1}),(0,l.Uk)(", VuePress plugin can provide different features for you.")]),o,(0,l._)("p",null,[(0,l.Uk)("Community users have created lots of plugins and published them to "),(0,l._)("a",t,[(0,l.Uk)("NPM"),(0,l.Wm)(D)]),(0,l.Uk)(". VuePress team also maintains some official plugins under the "),(0,l._)("a",i,[(0,l.Uk)("@vuepress"),(0,l.Wm)(D)]),(0,l.Uk)(" scope. You should check the plugin’s own documentation for detailed guide.")]),(0,l._)("p",null,[(0,l.Uk)("In general, you need to specify the name of the plugin to use in "),(0,l.Wm)(s,{to:"/vuepress-next/reference/config.html#plugins"},{default:(0,l.w5)((()=>[(0,l.Uk)("plugins")])),_:1}),(0,l.Uk)(" option:")]),(0,l._)("div",r,[u,(0,l.Wm)(b)]),p,(0,l._)("div",c,[d,g,(0,l._)("p",null,[(0,l.Uk)("However, some plugins can be used multiple times (e.g. "),(0,l.Wm)(s,{to:"/vuepress-next/reference/plugin/container.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("@vuepress/plugin-container")])),_:1}),(0,l.Uk)("), and you should check the documentation of the plugin itself for detailed guide.")])]),h,m,(0,l._)("p",null,[(0,l.Uk)("It is recommended to use the "),(0,l.Wm)(s,{to:"/vuepress-next/guide/configuration.html#config-file"},{default:(0,l.w5)((()=>[(0,l.Uk)("Config File")])),_:1}),(0,l.Uk)(" directly as a plugin, because "),(0,l.Wm)(s,{to:"/vuepress-next/reference/config.html#plugin-api"},{default:(0,l.w5)((()=>[(0,l.Uk)("almost all of the Plugin APIs are available")])),_:1}),(0,l.Uk)(", which would be more convenient in most cases.")]),f,(0,l._)("div",y,[v,(0,l.Wm)(b)]),(0,l._)("p",null,[(0,l.Uk)("You can refer to "),(0,l.Wm)(s,{to:"/vuepress-next/advanced/plugin.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Advanced > Writing a Plugin")])),_:1}),(0,l.Uk)(" for how to write your own plugin.")])])}]])}}]);