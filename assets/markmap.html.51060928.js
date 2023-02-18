import{_ as r,r as l,o,c as t,a as s,b as n,d as a,e as d,f as p}from"./app.07530a6c.js";const m={},D=s("h1",{id:"markmap",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markmap","aria-hidden":"true"},"#"),n(" Markmap")],-1),v={href:"https://markmap.js.org/docs/markmap",target:"_blank",rel:"noopener noreferrer"},b={href:"https://markmap.js.org/docs/markmap",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),n(" 文档")],-1),y={href:"https://markmap.js.org/docs/markmap",target:"_blank",rel:"noopener noreferrer"},h=s("h2",{id:"示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),n(" 示例")],-1),k={class:"code-enhance"},g=p(`<div class="language-markmap line-numbers-mode" data-ext="markmap"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">markmap:</span></span>
<span class="line"><span style="color:#D4D4D4;">  colorFreezeLevel: 2</span></span>
<span class="line"><span style="color:#D4D4D4;">  extraJs:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - katex/dist/contrib/mhchem.min.js</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"># markmap</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## Links</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">- &lt;https://markmap.js.org/&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">- [GitHub](https://github.com/gera2ld/markmap)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## Related Projects</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">- [coc-markmap](https://github.com/gera2ld/coc-markmap)</span></span>
<span class="line"><span style="color:#D4D4D4;">- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">## Features</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">- links</span></span>
<span class="line"><span style="color:#D4D4D4;">- **strong** ~~del~~ *italic* ==highlight==</span></span>
<span class="line"><span style="color:#D4D4D4;">- multiline</span></span>
<span class="line"><span style="color:#D4D4D4;">  text</span></span>
<span class="line"><span style="color:#D4D4D4;">- \`inline code\`</span></span>
<span class="line"><span style="color:#D4D4D4;">-</span></span>
<span class="line"><span style="color:#D4D4D4;">    \`\`\`js</span></span>
<span class="line"><span style="color:#D4D4D4;">    console.log(&#39;code block&#39;);</span></span>
<span class="line"><span style="color:#D4D4D4;">    \`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">- Katex</span></span>
<span class="line"><span style="color:#D4D4D4;">  - $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)</span></span>
<span class="line"><span style="color:#D4D4D4;">- Now we can wrap very very very very long text based on \`maxWidth\` option</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={class:"custom-container details"},A=s("summary",null,"Code",-1),x={class:"code-enhance"},F=p(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`markmap Markmap Demo</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">markmap:</span></span>
<span class="line"><span style="color:#D4D4D4;">  colorFreezeLevel: 2</span></span>
<span class="line"><span style="color:#D4D4D4;">  extraJs:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - katex/dist/contrib/mhchem.min.js</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;"># markmap</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## Links</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- &lt;https://markmap.js.org/&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">- [GitHub](https://github.com/gera2ld/markmap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## Related Projects</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- [coc-markmap](https://github.com/gera2ld/coc-markmap)</span></span>
<span class="line"><span style="color:#D4D4D4;">- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## Features</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- links</span></span>
<span class="line"><span style="color:#D4D4D4;">- **strong** ~~del~~ *italic* ==highlight==</span></span>
<span class="line"><span style="color:#D4D4D4;">- multiline</span></span>
<span class="line"><span style="color:#D4D4D4;">  text</span></span>
<span class="line"><span style="color:#D4D4D4;">- \`inline code\`</span></span>
<span class="line"><span style="color:#D4D4D4;">-</span></span>
<span class="line"><span style="color:#D4D4D4;">    \`\`\`js</span></span>
<span class="line"><span style="color:#D4D4D4;">    console.log(&#39;code block&#39;);</span></span>
<span class="line"><span style="color:#D4D4D4;">    \`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">- Katex</span></span>
<span class="line"><span style="color:#D4D4D4;">  - $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)</span></span>
<span class="line"><span style="color:#D4D4D4;">- Now we can wrap very very very very long text based on \`maxWidth\` option</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(j,E){const e=l("ExternalLinkIcon"),c=l("Markmap"),i=l("CodeCopyButton");return o(),t("div",null,[D,s("p",null,[n("让你的 VuePress 站点中的 Markdown 文件支持 "),s("a",v,[n("Markmap 文档"),a(e)]),n("。")]),s("p",null,[n("使用 "),s("a",b,[n("Markmap 文档"),a(e)]),n(" 提供相应功能。")]),d(" more "),u,s("p",null,[n("相关详情，详见 "),s("a",y,[n("Markmap 文档"),a(e)]),n(".")]),h,s("div",k,[a(c,{id:"markmap-382ee14e",title:"Markmap%20Demo",code:"---%0Amarkmap%3A%0A%20%20colorFreezeLevel%3A%202%0A%20%20extraJs%3A%0A%20%20%20%20-%20katex%2Fdist%2Fcontrib%2Fmhchem.min.js%0A---%0A%0A%23%20markmap%0A%0A%23%23%20Links%0A%0A-%20%3Chttps%3A%2F%2Fmarkmap.js.org%2F%3E%0A-%20%5BGitHub%5D(https%3A%2F%2Fgithub.com%2Fgera2ld%2Fmarkmap)%0A%0A%23%23%20Related%20Projects%0A%0A-%20%5Bcoc-markmap%5D(https%3A%2F%2Fgithub.com%2Fgera2ld%2Fcoc-markmap)%0A-%20%5Bgatsby-remark-markmap%5D(https%3A%2F%2Fgithub.com%2Fgera2ld%2Fgatsby-remark-markmap)%0A%0A%23%23%20Features%0A%0A-%20links%0A-%20**strong**%20~~del~~%20*italic*%20%3D%3Dhighlight%3D%3D%0A-%20multiline%0A%20%20text%0A-%20%60inline%20code%60%0A-%0A%20%20%20%20%60%60%60js%0A%20%20%20%20console.log('code%20block')%3B%0A%20%20%20%20%60%60%60%0A-%20Katex%0A%20%20-%20%24x%20%3D%20%7B-b%20%5Cpm%20%5Csqrt%7Bb%5E2-4ac%7D%20%5Cover%202a%7D%24%0A%20%20-%20%5BMore%20Katex%20Examples%5D(%23%3Fd%3Dgist%3Aaf76a4c245b302206b16aec503dbe07b%3Akatex.md)%0A-%20Now%20we%20can%20wrap%20very%20very%20very%20very%20long%20text%20based%20on%20%60maxWidth%60%20option%0A"}),g,a(i)]),s("details",_,[A,s("div",x,[F,a(i)])])])}const M=r(m,[["render",f],["__file","markmap.html.vue"]]);export{M as default};
