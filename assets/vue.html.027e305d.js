import{_ as p,r as t,o as l,c as r,a as e,b as n,d as s,F as _,g as h,t as d,f as c}from"./app.07530a6c.js";const m={},v=e("h1",{id:"在-markdown-中使用-vue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-markdown-中使用-vue","aria-hidden":"true"},"#"),n(" 在 Markdown 中使用 Vue")],-1),g=e("p",null,"这一章节会介绍 Vue 在 Markdown 中一些基本用法。",-1),k={href:"https://vuepress.github.io/zh/advanced/cookbook/markdown-and-vue-sfc.md",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"模板语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#"),n(" 模板语法")],-1),b=e("p",null,"我们知道：",-1),x=e("ul",null,[e("li",null,"Markdown 中允许使用 HTML。"),e("li",null,"Vue 模板语法是和 HTML 兼容的。")],-1),D={href:"https://v3.vuejs.org/guide/template-syntax.html",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[e("strong",null,"输入")],-1),y={class:"code-enhance"},V=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">一加一等于： {{ 1 + 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;span v-for=&quot;i in 3&quot;&gt; span: {{ i }} &lt;/span&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B=e("p",null,[e("strong",null,"输出")],-1),E=e("p",null,"一加一等于： "+d(1+1),-1),C=e("h2",{id:"组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#组件","aria-hidden":"true"},"#"),n(" 组件")],-1),M=e("p",null,"你可以在 Markdown 中直接使用 Vue 组件。",-1),L=e("p",null,[e("strong",null,"输入")],-1),q={class:"code-enhance"},N=c('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">这是默认主题内置的 </span><span style="color:#CE9178;">`&lt;Badge /&gt;`</span><span style="color:#D4D4D4;"> 组件 &lt;Badge text=&quot;演示&quot; /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',1),T=e("p",null,[e("strong",null,"输出")],-1),z=e("code",null,"<Badge />",-1),F={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1),S={href:"https://vuepress.github.io/zh/reference/components.md",target:"_blank",rel:"noopener noreferrer"},H={href:"https://vuepress.github.io/zh/reference/default-theme/components.md",target:"_blank",rel:"noopener noreferrer"};function j(P,A){const o=t("ExternalLinkIcon"),a=t("CodeCopyButton"),i=t("Badge");return l(),r("div",null,[v,g,e("p",null,[n("可以前往 Vuepress "),e("a",k,[n("Cookbook > Markdown 和 Vue SFC"),s(o)]),n(" 来了解更多内容。")]),f,b,x,e("p",null,[n("这意味着， Markdown 中允许直接使用 "),e("a",D,[n("Vue 模板语法"),s(o)]),n("。")]),w,e("div",y,[V,s(a)]),B,E,e("p",null,[(l(),r(_,null,h(3,u=>e("span",null," span: "+d(u),1)),64))]),C,M,L,e("div",q,[N,s(a)]),T,e("p",null,[n("这是默认主题内置的 "),z,n(" 组件 "),s(i,{text:"演示"})]),e("div",F,[I,e("p",null,[n("前往 "),e("a",S,[n("内置组件"),s(o)]),n(" 查看所有内置组件。")]),e("p",null,[n("前往 "),e("a",H,[n("默认主题 > 内置组件"),s(o)]),n(" 查看默认主题中的所有内置组件。")])])])}const J=p(m,[["render",j],["__file","vue.html.vue"]]);export{J as default};