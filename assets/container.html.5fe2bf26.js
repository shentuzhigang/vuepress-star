import{_ as o,r as i,o as p,c as t,e as r,a as s,d as l,b as n,f as a}from"./app.07530a6c.js";const d={},D=s("h1",{id:"自定义容器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义容器","aria-hidden":"true"},"#"),n(" 自定义容器")],-1),v=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持自定义容器。",-1),u=s("p",null,"主题可以为你添加提示、注释、信息、注意、警告和详情自定义容器的支持。",-1),m=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),n(" 语法")],-1),y={class:"code-enhance"},b=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: &lt;type&gt; [</span><span style="color:#CE9178;">info</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=a('<ul><li><code>type</code> 是必需的，应通过 <a href="#type">type</a> 配置项来指定。</li><li><code>info</code> 是可选的，其默认值可以通过 <a href="#locales">locales</a> 的 <code>defaultInfo</code> 配置项来指定。</li><li><code>content</code> 可是任何合法的 Markdown 内容。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>该插件可以被多次使用，以便支持不同类型的容器。</p></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><strong>输入</strong></p>',4),_={class:"code-enhance"},C=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: info</span></span>
<span class="line"><span style="color:#D4D4D4;">信息容器。</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: note</span></span>
<span class="line"><span style="color:#D4D4D4;">注释容器。</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: tip</span></span>
<span class="line"><span style="color:#D4D4D4;">提示容器</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning</span></span>
<span class="line"><span style="color:#D4D4D4;">警告容器</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger</span></span>
<span class="line"><span style="color:#D4D4D4;">危险容器</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details</span></span>
<span class="line"><span style="color:#D4D4D4;">详情容器</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: info 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的信息容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: note 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的注释容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: tip 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的提示容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的警告容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的危险容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details 自定义标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">一个有 </span><span style="color:#CE9178;">\`代码\`</span><span style="color:#D4D4D4;"> 和 [</span><span style="color:#CE9178;">链接</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;font-weight:bold;">#markdown</span><span style="color:#D4D4D4;">) 的详情容器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`js</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: info 自定义信息</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: note 自定义注释</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: tip 自定义提示</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning 自定义警告</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger 自定义危险</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=a('<p><strong>输出</strong></p><div class="custom-container info"><p class="custom-container-title">INFO</p><p>信息容器。</p></div><div class="custom-container note"><p class="custom-container-title">NOTE</p><p>注释容器。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>提示容器</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>警告容器</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>危险容器</p></div><details class="custom-container details"><summary>Details</summary><p>详情容器</p></details>',7),g={class:"custom-container info"},f=s("p",{class:"custom-container-title"},"自定义标题",-1),k=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的信息容器。")],-1),F={class:"code-enhance"},w=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),j={class:"custom-container note"},x=s("p",{class:"custom-container-title"},"自定义标题",-1),B=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的注释容器。")],-1),A={class:"code-enhance"},N=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),I={class:"custom-container tip"},V=s("p",{class:"custom-container-title"},"自定义标题",-1),T=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的提示容器。")],-1),P={class:"code-enhance"},G=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),L={class:"custom-container warning"},M=s("p",{class:"custom-container-title"},"自定义标题",-1),O=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的警告容器。")],-1),R={class:"code-enhance"},z=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),S={class:"custom-container danger"},W=s("p",{class:"custom-container-title"},"自定义标题",-1),q=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的危险容器。")],-1),H={class:"code-enhance"},J=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),K={class:"custom-container details"},Q=s("summary",null,"自定义标题",-1),U=s("p",null,[n("一个有 "),s("code",null,"代码"),n(" 和 "),s("a",{href:"#markdown"},"链接"),n(" 的详情容器。")],-1),X={class:"code-enhance"},Y=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">a</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),Z=a('<div class="custom-container info"><p class="custom-container-title">自定义信息</p></div><div class="custom-container note"><p class="custom-container-title">自定义注释</p></div><div class="custom-container tip"><p class="custom-container-title">自定义提示</p></div><div class="custom-container warning"><p class="custom-container-title">自定义警告</p></div><div class="custom-container danger"><p class="custom-container-title">自定义危险</p></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',6),$={href:"https://vuepress.github.io/zh/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"};function ss(ns,as){const e=i("CodeCopyButton"),c=i("ExternalLinkIcon");return p(),t("div",null,[D,v,u,r(" more "),m,s("div",y,[b,l(e)]),h,s("div",_,[C,l(e)]),E,s("div",g,[f,k,s("div",F,[w,l(e)])]),s("div",j,[x,B,s("div",A,[N,l(e)])]),s("div",I,[V,T,s("div",P,[G,l(e)])]),s("div",L,[M,O,s("div",R,[z,l(e)])]),s("div",S,[W,q,s("div",H,[J,l(e)])]),s("details",K,[Q,U,s("div",X,[Y,l(e)])]),Z,s("ul",null,[s("li",null,[s("a",$,[n("vuepress-plugin-container"),l(c)])])])])}const es=o(d,[["render",ss],["__file","container.html.vue"]]);export{es as default};
