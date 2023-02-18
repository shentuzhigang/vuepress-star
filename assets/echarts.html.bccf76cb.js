import{_ as c,r as o,o as t,c as D,a as s,b as n,d as a,e as r,f as e}from"./app.07530a6c.js";const d={},u=s("h1",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),n(" ECharts")],-1),v=s("p",null,"让你 VuePress 站点中的 Markdown 文件支持 ECharts 图表。",-1),q={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},m=s("h2",{id:"文档",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),n(" 文档")],-1),y={href:"https://echarts.apache.org/handbook/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),n(" 语法")],-1),A={class:"code-enhance"},h=e('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```echarts:json 标题</span></span>\n<span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  // 此处为 ECharts 图表配置</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),C=s("p",null,[n("我们也支持 "),s("code",null,"js"),n(" 和 "),s("code",null,"javascript"),n(" 的代码块，你应当将导出对象赋值给 "),s("code",null,"module.exports"),n("。")],-1),B=s("h2",{id:"案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),n(" 案例")],-1),_=s("h3",{id:"折线图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#折线图","aria-hidden":"true"},"#"),n(" 折线图")],-1),E={class:"code-enhance"},g=e(`<div class="language-echarts line-numbers-mode" data-ext="echarts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;value&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [150, 230, 224, 218, 135, 147, 260],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;line&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={class:"custom-container details"},k=s("summary",null,"代码",-1),w={class:"code-enhance"},f=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`echarts:json 一个折线图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;value&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [150, 230, 224, 218, 135, 147, 260],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;line&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=s("h3",{id:"柱状图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#柱状图","aria-hidden":"true"},"#"),n(" 柱状图")],-1),T={class:"code-enhance"},j=e(`<div class="language-echarts line-numbers-mode" data-ext="echarts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;value&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;showBackground&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;backgroundStyle&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;color&quot;: &quot;rgba(180, 180, 180, 0.2)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F={class:"custom-container details"},V=s("summary",null,"代码",-1),N={class:"code-enhance"},M=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`echarts:json 一个柱状图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;category&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;data&quot;: [&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;, &quot;Thu&quot;, &quot;Fri&quot;, &quot;Sat&quot;, &quot;Sun&quot;]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;type&quot;: &quot;value&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [120, 200, 150, 80, 70, 110, 130],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;bar&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;showBackground&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;backgroundStyle&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;color&quot;: &quot;rgba(180, 180, 180, 0.2)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W=s("h3",{id:"饼图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#饼图","aria-hidden":"true"},"#"),n(" 饼图")],-1),z={class:"code-enhance"},I=e(`<div class="language-echarts line-numbers-mode" data-ext="echarts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;legend&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;top&quot;: &quot;bottom&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;toolbox&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;show&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;feature&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;mark&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;dataView&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;readOnly&quot;: false</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;restore&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;saveAsImage&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;name&quot;: &quot;Nightingale Chart&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;pie&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;radius&quot;: [20, 100],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;center&quot;: [&quot;50%&quot;, &quot;50%&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;roseType&quot;: &quot;area&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;itemStyle&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderRadius&quot;: 8</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 40,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 1&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 38,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 2&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 32,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 3&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 30,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 4&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 28,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 5&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 26,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 6&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 22,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 7&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 18,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 8&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      ]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O={class:"custom-container details"},R=s("summary",null,"代码",-1),L={class:"code-enhance"},P=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`echarts:json 一个基础南丁格尔玫瑰图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;legend&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;top&quot;: &quot;bottom&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;toolbox&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;show&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">    &quot;feature&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;mark&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;dataView&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true,</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;readOnly&quot;: false</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;restore&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;saveAsImage&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;show&quot;: true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;name&quot;: &quot;Nightingale Chart&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;pie&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;radius&quot;: [20, 100],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;center&quot;: [&quot;50%&quot;, &quot;50%&quot;],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;roseType&quot;: &quot;area&quot;,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;itemStyle&quot;: {</span></span>
<span class="line"><span style="color:#D4D4D4;">        &quot;borderRadius&quot;: 8</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 40,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 1&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 38,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 2&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 32,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 3&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 30,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 4&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 28,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 5&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 26,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 6&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 22,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 7&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;value&quot;: 18,</span></span>
<span class="line"><span style="color:#D4D4D4;">          &quot;name&quot;: &quot;rose 8&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      ]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G=s("h3",{id:"散点图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#散点图","aria-hidden":"true"},"#"),n(" 散点图")],-1),H={class:"code-enhance"},J=e(`<div class="language-echarts line-numbers-mode" data-ext="echarts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;symbolSize&quot;: 20,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        [10.0, 8.04],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [8.07, 6.95],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [13.0, 7.58],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [9.05, 8.81],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [11.0, 8.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [14.0, 7.66],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [13.4, 6.81],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [10.0, 6.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [14.0, 8.96],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.5, 6.82],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [9.15, 7.2],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [11.5, 7.2],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [3.03, 4.23],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.2, 7.83],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [2.02, 4.47],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [1.05, 3.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [4.05, 4.96],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [6.03, 7.24],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.0, 6.26],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.0, 8.84],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [7.08, 5.82],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [5.02, 5.68]</span></span>
<span class="line"><span style="color:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;scatter&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K={class:"custom-container details"},Q=s("summary",null,"代码",-1),U={class:"code-enhance"},X=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">\`\`\`echarts:json 一个散点图案例</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;xAxis&quot;: {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;yAxis&quot;: {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  &quot;series&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;symbolSize&quot;: 20,</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        [10.0, 8.04],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [8.07, 6.95],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [13.0, 7.58],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [9.05, 8.81],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [11.0, 8.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [14.0, 7.66],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [13.4, 6.81],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [10.0, 6.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [14.0, 8.96],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.5, 6.82],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [9.15, 7.2],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [11.5, 7.2],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [3.03, 4.23],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.2, 7.83],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [2.02, 4.47],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [1.05, 3.33],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [4.05, 4.96],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [6.03, 7.24],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.0, 6.26],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [12.0, 8.84],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [7.08, 5.82],</span></span>
<span class="line"><span style="color:#D4D4D4;">        [5.02, 5.68]</span></span>
<span class="line"><span style="color:#D4D4D4;">      ],</span></span>
<span class="line"><span style="color:#D4D4D4;">      &quot;type&quot;: &quot;scatter&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function Y(Z,$){const p=o("ExternalLinkIcon"),l=o("CodeCopyButton"),i=o("ECharts");return t(),D("div",null,[u,v,s("p",null,[n("使用 "),s("a",q,[n("ECharts"),a(p)]),n(" 提供相应功能。")]),r(" more "),m,s("p",null,[n("相关详情，详见 "),s("a",y,[n("ECharts 文档"),a(p)]),n(".")]),b,s("div",A,[h,a(l)]),C,B,_,s("div",E,[a(i,{id:"echarts-382ee16d",language:"json",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"}),g,a(l)]),s("details",x,[k,s("div",w,[f,a(l)])]),S,s("div",T,[a(i,{id:"echarts-382ee189",language:"json",title:"%E4%B8%80%E4%B8%AA%E6%9F%B1%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B120%2C%20200%2C%20150%2C%2080%2C%2070%2C%20110%2C%20130%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22showBackground%22%3A%20true%2C%0A%20%20%20%20%20%20%22backgroundStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22rgba(180%2C%20180%2C%20180%2C%200.2)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"}),j,a(l)]),s("details",F,[V,s("div",N,[M,a(l)])]),W,s("div",z,[a(i,{id:"echarts-382ee1a5",language:"json",title:"%E4%B8%80%E4%B8%AA%E5%9F%BA%E7%A1%80%E5%8D%97%E4%B8%81%E6%A0%BC%E5%B0%94%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22legend%22%3A%20%7B%0A%20%20%20%20%22top%22%3A%20%22bottom%22%0A%20%20%7D%2C%0A%20%20%22toolbox%22%3A%20%7B%0A%20%20%20%20%22show%22%3A%20true%2C%0A%20%20%20%20%22feature%22%3A%20%7B%0A%20%20%20%20%20%20%22mark%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22dataView%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22readOnly%22%3A%20false%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22restore%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22saveAsImage%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22show%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Nightingale%20Chart%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%22radius%22%3A%20%5B20%2C%20100%5D%2C%0A%20%20%20%20%20%20%22center%22%3A%20%5B%2250%25%22%2C%20%2250%25%22%5D%2C%0A%20%20%20%20%20%20%22roseType%22%3A%20%22area%22%2C%0A%20%20%20%20%20%20%22itemStyle%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22borderRadius%22%3A%208%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%201%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2038%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%202%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2032%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%203%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%204%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2028%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%205%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2026%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%206%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2022%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%207%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2018%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22rose%208%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"}),I,a(l)]),s("details",O,[R,s("div",L,[P,a(l)])]),G,s("div",H,[a(i,{id:"echarts-382ee1c1",language:"json",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",code:"%7B%0A%20%20%22xAxis%22%3A%20%7B%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22symbolSize%22%3A%2020%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B10.0%2C%208.04%5D%2C%0A%20%20%20%20%20%20%20%20%5B8.07%2C%206.95%5D%2C%0A%20%20%20%20%20%20%20%20%5B13.0%2C%207.58%5D%2C%0A%20%20%20%20%20%20%20%20%5B9.05%2C%208.81%5D%2C%0A%20%20%20%20%20%20%20%20%5B11.0%2C%208.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B14.0%2C%207.66%5D%2C%0A%20%20%20%20%20%20%20%20%5B13.4%2C%206.81%5D%2C%0A%20%20%20%20%20%20%20%20%5B10.0%2C%206.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B14.0%2C%208.96%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.5%2C%206.82%5D%2C%0A%20%20%20%20%20%20%20%20%5B9.15%2C%207.2%5D%2C%0A%20%20%20%20%20%20%20%20%5B11.5%2C%207.2%5D%2C%0A%20%20%20%20%20%20%20%20%5B3.03%2C%204.23%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.2%2C%207.83%5D%2C%0A%20%20%20%20%20%20%20%20%5B2.02%2C%204.47%5D%2C%0A%20%20%20%20%20%20%20%20%5B1.05%2C%203.33%5D%2C%0A%20%20%20%20%20%20%20%20%5B4.05%2C%204.96%5D%2C%0A%20%20%20%20%20%20%20%20%5B6.03%2C%207.24%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.0%2C%206.26%5D%2C%0A%20%20%20%20%20%20%20%20%5B12.0%2C%208.84%5D%2C%0A%20%20%20%20%20%20%20%20%5B7.08%2C%205.82%5D%2C%0A%20%20%20%20%20%20%20%20%5B5.02%2C%205.68%5D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22scatter%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A"}),J,a(l)]),s("details",K,[Q,s("div",U,[X,a(l)])])])}const ns=c(d,[["render",Y],["__file","echarts.html.vue"]]);export{ns as default};
