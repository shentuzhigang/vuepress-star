import{_ as r,r as i,o as t,c as v,a as s,b as n,d as e,e as D,w as p,f as l}from"./app.07530a6c.js";const u={},m=s("h1",{id:"reveal",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reveal","aria-hidden":"true"},"#"),n(" Reveal")],-1),h=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持Reveal。",-1),b={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),n(" 文档")],-1),y={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},E=l('<p>你也可以传入一个对象以进行更详细的配置。</p><p><code>reveal.plugins</code> 接收一个字符串数组，可以自由配置是否启用一些预设的插件。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可接受的插件有:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><!-- - `&quot;anything&quot;`\n- `&quot;audio&quot;`\n- `&quot;chalkboard&quot;` --></div><p>你还可以使用 <code>reveal.revealConfig</code> 来配置全局传递给 Reveal.js 的配置选项。</p>',4),A={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/vuepress-star/vuepress-theme-star/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),n(" 语法")],-1),B=s("ul",null,[s("li",null,[n("使用 "),s("code",null,"---"),n(" 分割幻灯片")]),s("li",null,[n("使用 "),s("code",null,"--"),n(" 对幻灯片进行二次分割(垂直显示)")])],-1),k={class:"code-enhance"},q=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`reveal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- slide1 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- slide2 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- slide3 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=l("<p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>",2),j=s("h2",{id:"演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),C={class:"code-enhance"},w=l(`<div class="language-reveal line-numbers-mode" data-ext="reveal"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 1</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">一个有文字和 [链接](https://mrhope.site) 的段落</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 2</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">- 项目 1</span></span>
<span class="line"><span style="color:#D4D4D4;">- 项目 2</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 3.1</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#D4D4D4;">const a = 1;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">--</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 3.2</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">$$</span></span>
<span class="line"><span style="color:#D4D4D4;">J(\\theta_0,\\theta_1) = \\sum_{i=0}</span></span>
<span class="line"><span style="color:#D4D4D4;">$$</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={class:"code-enhance"},F=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`reveal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有文字和 [链接](https://mrhope.site) 的段落</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- 项目 1</span></span>
<span class="line"><span style="color:#D4D4D4;">- 项目 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## 幻灯片 3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#D4D4D4;">const a = 1;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;font-style:italic;">## 幻灯片 3.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">$$</span></span>
<span class="line"><span style="color:#D4D4D4;">J(\\theta_0,\\theta_1) = \\sum_{i=0}</span></span>
<span class="line"><span style="color:#D4D4D4;">$$</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$={class:"custom-container tip"},V=s("p",{class:"custom-container-title"},"TIP",-1),N=s("h2",{id:"选项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),n(" 选项")],-1),z=s("p",null,[n("你可以在 Frontmatter 设置 "),s("code",null,"reveal"),n(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),s("code",null,"reveal"),n(" 以全局设置 reveal.js。")],-1),I={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function P(T,H){const a=i("ExternalLinkIcon"),c=i("CodeCopyButton"),o=i("RouterLink"),d=i("Reveal");return t(),v("div",null,[m,h,s("p",null,[n("使用 "),s("a",b,[n("reveal.js"),e(a)]),n(" 来支持这一功能。")]),D(" more "),_,s("p",null,[n("相关详情，详见 "),s("a",y,[n("reveal.js"),e(a)]),n(" .")]),E,s("p",null,[n("Reveal.js 还提供了"),s("a",A,[n("更多的插件"),e(a)]),n("。如果你需要某个特定的插件，请在 GitHub 上提出 "),s("a",f,[n("Feature Request"),e(a)])]),g,B,s("div",k,[q,e(c)]),x,s("p",null,[n("主题演示，请详见 "),e(o,{to:"/zh/guide/markdown/advanced/reveal/themes.html"},{default:p(()=>[n("幻灯片主题")]),_:1})]),j,s("div",C,[e(d,{id:"reveal-64a56fe2",code:"%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%201%0A%0A%E4%B8%80%E4%B8%AA%E6%9C%89%E6%96%87%E5%AD%97%E5%92%8C%20%5B%E9%93%BE%E6%8E%A5%5D(https%3A%2F%2Fmrhope.site)%20%E7%9A%84%E6%AE%B5%E8%90%BD%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%202%0A%0A-%20%E9%A1%B9%E7%9B%AE%201%0A-%20%E9%A1%B9%E7%9B%AE%202%0A%0A---%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20%E5%B9%BB%E7%81%AF%E7%89%87%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A%0A",theme:"auto"}),w,e(c)]),s("div",R,[F,e(c)]),s("div",$,[V,s("p",null,[n("详细与完整的演示详见 "),e(o,{to:"/zh/guide/markdown/advanced/reveal/demo.html"},{default:p(()=>[n("幻灯片演示")]),_:1}),n("。")])]),N,z,s("p",null,[n("更多选项，请参见 "),s("a",I,[n("reveal.js config"),e(a)])]),s("p",null,[n("更多用法，请参阅 "),s("a",L,[n("reveal.js 文档"),e(a)]),n("。")])])}const M=r(u,[["render",P],["__file","index.html.vue"]]);export{M as default};
