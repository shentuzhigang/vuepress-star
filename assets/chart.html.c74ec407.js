import{_ as p,r as t,o as c,c as r,a as s,b as a,d as n,e as u,f as e}from"./app.07530a6c.js";const d={},D=s("h1",{id:"chart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chart","aria-hidden":"true"},"#"),a(" Chart")],-1),v=s("p",null,"让你 VuePress 站点中的 Markdown 文件支持 Chart 图表。",-1),q={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),a(" 文档")],-1),m={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},y=s("h2",{id:"visual-studio-code-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#visual-studio-code-plugin","aria-hidden":"true"},"#"),a(" Visual Studio Code Plugin")],-1),A={href:"https://marketplace.visualstudio.com/items?itemName=FlomoN.chartjs-markdown-preview",target:"_blank",rel:"noopener noreferrer"},C=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),a(" 语法")],-1),h={class:"code-enhance"},E=e('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```chart:json 标题</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  // 此处为图表配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),B=s("p",null,[a("我们也支持 "),s("code",null,"js"),a(" 和 "),s("code",null,"javascript"),a(" 的代码块，你应当将导出对象赋值给 "),s("code",null,"module.exports"),a("。")],-1),g=s("h2",{id:"案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),a(" 案例")],-1),_=s("h3",{id:"块状图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#块状图","aria-hidden":"true"},"#"),a(" 块状图")],-1),k={class:"code-enhance"},f=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;红色&quot;, &quot;蓝色&quot;, &quot;黄色&quot;, &quot;绿色&quot;, &quot;紫色&quot;, &quot;橙色&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;投票数&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [12, 19, 3, 5, 2, 3],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 99, 132, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(54, 162, 235, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 206, 86, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(75, 192, 192, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(153, 102, 255, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 159, 64, 0.2)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 99, 132, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(54, 162, 235, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 206, 86, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(75, 192, 192, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(153, 102, 255, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 159, 64, 1)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderWidth&quot;: 1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;scales&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;y&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;beginAtZero&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={class:"custom-container details"},j=s("summary",null,"对应代码",-1),w={class:"code-enhance"},H=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json 一个块状图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;红色&quot;, &quot;蓝色&quot;, &quot;黄色&quot;, &quot;绿色&quot;, &quot;紫色&quot;, &quot;橙色&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;投票数&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [12, 19, 3, 5, 2, 3],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 99, 132, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(54, 162, 235, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 206, 86, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(75, 192, 192, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(153, 102, 255, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 159, 64, 0.2)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 99, 132, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(54, 162, 235, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 206, 86, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(75, 192, 192, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(153, 102, 255, 1)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgba(255, 159, 64, 1)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderWidth&quot;: 1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;scales&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;y&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;beginAtZero&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=s("h3",{id:"气泡图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#气泡图","aria-hidden":"true"},"#"),a(" 气泡图")],-1),N={class:"code-enhance"},V=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;bubble&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 20, &quot;y&quot;: 30, &quot;r&quot;: 15 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 40, &quot;y&quot;: 10, &quot;r&quot;: 10 }</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W={class:"custom-container details"},M=s("summary",null,"对应代码",-1),P={class:"code-enhance"},Z=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json 一个气泡图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;bubble&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 20, &quot;y&quot;: 30, &quot;r&quot;: 15 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 40, &quot;y&quot;: 10, &quot;r&quot;: 10 }</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=s("h3",{id:"线状图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#线状图","aria-hidden":"true"},"#"),a(" 线状图")],-1),L={class:"code-enhance"},S=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;line&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;一月&quot;, &quot;二月&quot;, &quot;三月&quot;, &quot;四月&quot;, &quot;五月&quot;, &quot;六月&quot;, &quot;七月&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [65, 59, 80, 81, 56, 55, 40],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: false,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(75, 192, 192)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;tension&quot;: 0.1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T={class:"custom-container details"},z=s("summary",null,"代码",-1),G={class:"code-enhance"},J=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json 一个线状图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;line&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;一月&quot;, &quot;二月&quot;, &quot;三月&quot;, &quot;四月&quot;, &quot;五月&quot;, &quot;六月&quot;, &quot;七月&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [65, 59, 80, 81, 56, 55, 40],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: false,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(75, 192, 192)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;tension&quot;: 0.1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K=s("h3",{id:"玫瑰图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#玫瑰图","aria-hidden":"true"},"#"),a(" 玫瑰图")],-1),O={class:"code-enhance"},Q=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;polarArea&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;红色&quot;, &quot;绿色&quot;, &quot;黄色&quot;, &quot;灰色&quot;, &quot;蓝色&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;My First Dataset&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [11, 16, 7, 3, 14],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(75, 192, 192)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(255, 205, 86)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(201, 203, 207)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(54, 162, 235)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ]</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={class:"custom-container details"},U=s("summary",null,"代码",-1),X={class:"code-enhance"},Y=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json 一个玫瑰图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;polarArea&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;红色&quot;, &quot;绿色&quot;, &quot;黄色&quot;, &quot;灰色&quot;, &quot;蓝色&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;My First Dataset&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [11, 16, 7, 3, 14],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(75, 192, 192)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(255, 205, 86)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(201, 203, 207)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;rgb(54, 162, 235)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        ]</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$=s("h3",{id:"雷达图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#雷达图","aria-hidden":"true"},"#"),a(" 雷达图")],-1),ss={class:"code-enhance"},ns=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;radar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;吃饭&quot;, &quot;喝水&quot;, &quot;睡觉&quot;, &quot;设计&quot;, &quot;编程&quot;, &quot;骑车&quot;, &quot;跑步&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [65, 59, 90, 81, 56, 55, 40],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgba(255, 99, 132, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBackgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBorderColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBorderColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第二个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [28, 48, 40, 19, 96, 27, 100],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgba(54, 162, 235, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(54, 162, 235)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBackgroundColor&quot;: &quot;rgb(54, 162, 235)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBorderColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBorderColor&quot;: &quot;rgb(54, 162, 235)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;elements&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;line&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderWidth&quot;: 3</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),as={class:"custom-container details"},ls=s("summary",null,"代码",-1),es={class:"code-enhance"},os=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json  一个雷达图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;radar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;labels&quot;: [&quot;吃饭&quot;, &quot;喝水&quot;, &quot;睡觉&quot;, &quot;设计&quot;, &quot;编程&quot;, &quot;骑车&quot;, &quot;跑步&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第一个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [65, 59, 90, 81, 56, 55, 40],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgba(255, 99, 132, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBackgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBorderColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBorderColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;我的第二个数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [28, 48, 40, 19, 96, 27, 100],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;fill&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgba(54, 162, 235, 0.2)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderColor&quot;: &quot;rgb(54, 162, 235)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBackgroundColor&quot;: &quot;rgb(54, 162, 235)&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointBorderColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;pointHoverBorderColor&quot;: &quot;rgb(54, 162, 235)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;elements&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;line&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderWidth&quot;: 3</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),is=s("h3",{id:"散点图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#散点图","aria-hidden":"true"},"#"),a(" 散点图")],-1),ts={class:"code-enhance"},ps=e(`<div class="language-chart line-numbers-mode" data-ext="chart"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;scatter&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;散点数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: -10, &quot;y&quot;: 0 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 0, &quot;y&quot;: 10 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 10, &quot;y&quot;: 5 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;scales&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;x&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;type&quot;: &quot;linear&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;position&quot;: &quot;bottom&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),cs={class:"custom-container details"},rs=s("summary",null,"代码",-1),us={class:"code-enhance"},ds=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`chart:json 一个散点图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;type&quot;: &quot;scatter&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;datasets&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;label&quot;: &quot;散点数据集&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: -10, &quot;y&quot;: 0 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 0, &quot;y&quot;: 10 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 10, &quot;y&quot;: 5 },</span></span>
<span class="line"><span style="color:#D4D4D4;">          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;options&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;scales&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;x&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;type&quot;: &quot;linear&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;position&quot;: &quot;bottom&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function Ds(vs,qs){const i=t("ExternalLinkIcon"),l=t("CodeCopyButton"),o=t("Chart");return c(),r("div",null,[D,v,s("p",null,[a("使用 "),s("a",q,[a("chart.js"),n(i)]),a(" 提供相应功能。")]),u(" more "),b,s("p",null,[a("相关详情，详见 "),s("a",m,[a("Chart.js 文档"),n(i)]),a(".")]),y,s("ul",null,[s("li",null,[s("a",A,[a("Chart.js Markdown Preview"),n(i)])])]),C,s("div",h,[E,n(l)]),B,g,_,s("div",k,[n(o,{id:"chart-382ee18c",language:"json",title:"%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E7%BA%A2%E8%89%B2%22%2C%20%22%E8%93%9D%E8%89%B2%22%2C%20%22%E9%BB%84%E8%89%B2%22%2C%20%22%E7%BB%BF%E8%89%B2%22%2C%20%22%E7%B4%AB%E8%89%B2%22%2C%20%22%E6%A9%99%E8%89%B2%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%8A%95%E7%A5%A8%E6%95%B0%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"}),f,n(l)]),s("details",x,[j,s("div",w,[H,n(l)])]),F,s("div",N,[n(o,{id:"chart-382ee1a8",language:"json",title:"%E4%B8%80%E4%B8%AA%E6%B0%94%E6%B3%A1%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22bubble%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2020%2C%20%22y%22%3A%2030%2C%20%22r%22%3A%2015%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2040%2C%20%22y%22%3A%2010%2C%20%22r%22%3A%2010%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A"}),V,n(l)]),s("details",W,[M,s("div",P,[Z,n(l)])]),I,s("div",L,[n(o,{id:"chart-382ee1c4",language:"json",title:"%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22line%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E4%B8%80%E6%9C%88%22%2C%20%22%E4%BA%8C%E6%9C%88%22%2C%20%22%E4%B8%89%E6%9C%88%22%2C%20%22%E5%9B%9B%E6%9C%88%22%2C%20%22%E4%BA%94%E6%9C%88%22%2C%20%22%E5%85%AD%E6%9C%88%22%2C%20%22%E4%B8%83%E6%9C%88%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B65%2C%2059%2C%2080%2C%2081%2C%2056%2C%2055%2C%2040%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20false%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(75%2C%20192%2C%20192)%22%2C%0A%20%20%20%20%20%20%20%20%22tension%22%3A%200.1%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A"}),S,n(l)]),s("details",T,[z,s("div",G,[J,n(l)])]),K,s("div",O,[n(o,{id:"chart-382ee1e0",language:"json",title:"%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22polarArea%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E7%BA%A2%E8%89%B2%22%2C%20%22%E7%BB%BF%E8%89%B2%22%2C%20%22%E9%BB%84%E8%89%B2%22%2C%20%22%E7%81%B0%E8%89%B2%22%2C%20%22%E8%93%9D%E8%89%B2%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22My%20First%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B11%2C%2016%2C%207%2C%203%2C%2014%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(75%2C%20192%2C%20192)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%20205%2C%2086)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(201%2C%20203%2C%20207)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(54%2C%20162%2C%20235)%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D%0A"}),Q,n(l)]),s("details",R,[U,s("div",X,[Y,n(l)])]),$,s("div",ss,[n(o,{id:"chart-382ee1e7",language:"json",title:"%E4%B8%80%E4%B8%AA%E9%9B%B7%E8%BE%BE%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22radar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22%E5%90%83%E9%A5%AD%22%2C%20%22%E5%96%9D%E6%B0%B4%22%2C%20%22%E7%9D%A1%E8%A7%89%22%2C%20%22%E8%AE%BE%E8%AE%A1%22%2C%20%22%E7%BC%96%E7%A8%8B%22%2C%20%22%E9%AA%91%E8%BD%A6%22%2C%20%22%E8%B7%91%E6%AD%A5%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B65%2C%2059%2C%2090%2C%2081%2C%2056%2C%2055%2C%2040%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBackgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBorderColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBackgroundColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBorderColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%88%91%E7%9A%84%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B28%2C%2048%2C%2040%2C%2019%2C%2096%2C%2027%2C%20100%5D%2C%0A%20%20%20%20%20%20%20%20%22fill%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBackgroundColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%2C%0A%20%20%20%20%20%20%20%20%22pointBorderColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBackgroundColor%22%3A%20%22%23fff%22%2C%0A%20%20%20%20%20%20%20%20%22pointHoverBorderColor%22%3A%20%22rgb(54%2C%20162%2C%20235)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22elements%22%3A%20%7B%0A%20%20%20%20%20%20%22line%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%203%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"}),ns,n(l)]),s("details",as,[ls,s("div",es,[os,n(l)])]),is,s("div",ts,[n(o,{id:"chart-382ee203",language:"json",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%E6%95%A3%E7%82%B9%E6%95%B0%E6%8D%AE%E9%9B%86%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"}),ps,n(l)]),s("details",cs,[rs,s("div",us,[ds,n(l)])])])}const ms=p(d,[["render",Ds],["__file","chart.html.vue"]]);export{ms as default};
