import{_ as e,r as p,o,c,a as s,d as l,b as i,f as n}from"./app.07530a6c.js";const t={},r=s("h2",{id:"syntax",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),i(" Syntax")],-1),D={class:"code-enhance"},d=n(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">vue</span><span style="color:#D4D4D4;">] Optional title text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`vue</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- ↑ You can also use \`html\` --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;!-- vue template --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">export default {</span></span>
<span class="line"><span style="color:#D4D4D4;">  // vue component</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">/* css code */</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`json</span></span>
<span class="line"><span style="color:#6A9955;">// Config (Optional)</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=n('<div class="custom-container warning"><p class="custom-container-title">Attention</p><ul><li>We only support Vue2</li><li>You must export your component through <code>export default</code></li><li>We use “ShadowDOM” to make style isolation, and we already replace <code>document</code> with <code>shadowRoot</code>. If you want to access the page document, please visit <code>window.document</code>.</li></ul></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>::: demo [vue] A Vue Demo</p>',3),y={class:"code-enhance"},u=n(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;box&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    Mr.Hope is </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">span</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">handler</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;"> }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">span</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">data</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({ </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;very handsome&quot;</span><span style="color:#D4D4D4;"> }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">methods:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">handler</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">alert</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">span</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=s("p",null,":::",-1),b={class:"custom-container details"},C=s("summary",null,"Code",-1),h={class:"code-enhance"},g=n(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: demo [</span><span style="color:#CE9178;">vue</span><span style="color:#D4D4D4;">] A Vue Demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`vue</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    Mr.Hope is &lt;span @click=&quot;handler&quot;&gt;{{ message }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">export default {</span></span>
<span class="line"><span style="color:#D4D4D4;">  data: () =&gt; ({ message: &quot;very handsome&quot; }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  methods: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    handler() {</span></span>
<span class="line"><span style="color:#D4D4D4;">      alert(this.message);</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">.box span {</span></span>
<span class="line"><span style="color:#D4D4D4;">  color: red;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(E,x){const a=p("CodeCopyButton");return o(),c("div",null,[r,s("div",D,[d,l(a)]),v,s("div",y,[u,l(a)]),m,s("details",b,[C,s("div",h,[g,l(a)])])])}const k=e(t,[["render",_],["__file","vue.html.vue"]]);export{k as default};
