import{_ as i,r as l,o as d,c as o,e as c,a as n,d as t,b as s,f as e}from"./app.07530a6c.js";const p={},r=n("h1",{id:"定义列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义列表","aria-hidden":"true"},"#"),s(" 定义列表")],-1),m=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持定义列表。",-1),D=n("h2",{id:"语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),s(" 语法")],-1),v=n("h2",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),s(" 示例")],-1),u=n("p",null,[n("strong",null,"输入")],-1),h={class:"code-enhance"},_=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Term 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:   Definition 1</span></span>
<span class="line"><span style="color:#D4D4D4;">with lazy continuation.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Term 2 with </span><span style="color:#D4D4D4;">*inline markup*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:   Definition 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">        { some code, part of Definition 2 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    Third paragraph of definition 2.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">_Compact style:_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Term 1</span></span>
<span class="line"><span style="color:#D4D4D4;">~ Definition 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Term 2</span></span>
<span class="line"><span style="color:#D4D4D4;">~ Definition 2a</span></span>
<span class="line"><span style="color:#D4D4D4;">~ Definition 2b</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=e(`<p><strong>输出</strong></p><dl><dt>Term 1</dt><dd><p>Definition 1 with lazy continuation.</p></dd><dt>Term 2 with <em>inline markup</em></dt><dd><p>Definition 2</p><pre><code>  { some code, part of Definition 2 }
</code></pre><p>Third paragraph of definition 2.</p></dd></dl><p><em>Compact style:</em></p><dl><dt>Term 1</dt><dd>Definition 1</dd><dt>Term 2</dt><dd>Definition 2a</dd><dd>Definition 2b</dd></dl>`,4);function b(y,T){const a=l("CodeCopyButton");return d(),o("div",null,[r,m,c(" more "),D,v,u,n("div",h,[_,t(a)]),f])}const k=i(p,[["render",b],["__file","deflist.html.vue"]]);export{k as default};
