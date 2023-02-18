"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3810],{32460:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-7bd025e2","path":"/guide/markdown/tasklist.html","title":"Task list","lang":"en-US","frontmatter":{"title":"Task list","icon":"check"},"excerpt":"<p>Let the Markdown file in your VuePress site support task list.</p>\\n","headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1635925377000,"updatedTime":1635925377000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn","commits":1}]},"copyright":"","filePathRelative":"guide/markdown/tasklist.md","content":"---\\ntitle: Task list\\nicon: check\\n---\\n\\nLet the Markdown file in your VuePress site support task list.\\n\\n\x3c!-- more --\x3e\\n\\n## Configuration\\n\\n```js {7}\\nmodule.exports = {\\n  plugins: [\\n    [\\n      \\"markdown-enhance\\",\\n      {\\n        // Enable Task List\\n        tasklist: true,\\n      },\\n    ],\\n  ],\\n};\\n```\\n\\n## Syntax\\n\\n- Use `- [ ] some text` to render a unchecked task item.\\n- Use `- [x] some text` to render a checked task item. (Capital `X` is also supported)\\n\\n## Demo\\n\\n- [ ] Plan A\\n- [x] Plan B\\n\\n```md\\n- [ ] Plan A\\n- [x] Plan B\\n```\\n","icon":"check","author":[{"name":"shentuzhigang","email":"shentuzhigang@moresec.cn"}],"top":false,"length":70,"words":70,"readingTime":0.23}')},42711:(s,n,e)=>{e.r(n),e.d(n,{default:()=>u});var a=e(1863);const l=(0,a._)("p",null,"Let the Markdown file in your VuePress site support task list.",-1),i=(0,a._)("h2",{id:"configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Configuration")],-1),t={class:"code-enhance"},o=(0,a.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;markdown-enhance&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// Enable Task List</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">tasklist:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),c=(0,a.uE)('<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>- [ ] some text</code> to render a unchecked task item.</li><li>Use <code>- [x] some text</code> to render a checked task item. (Capital <code>X</code> is also supported)</li></ul><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul>',4),r={class:"code-enhance"},d=(0,a.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> [ ] Plan A</span></span>\n<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">x</span><span style="color:#D4D4D4;">] Plan B</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',1),p={},u=(0,e(94598).Z)(p,[["render",function(s,n){const e=(0,a.up)("CodeCopyButton");return(0,a.wg)(),(0,a.iD)("div",null,[l,i,(0,a._)("div",t,[o,(0,a.Wm)(e)]),c,(0,a._)("div",r,[d,(0,a.Wm)(e)])])}]])}}]);