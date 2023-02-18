import{_ as t,r as l,o,c,e as i,a as e,d as n,b as d,f as s}from"./app.07530a6c.js";const r={},p=e("h1",{id:"任务列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),d(" 任务列表")],-1),h=e("p",null,"让你的 VuePress 站点中的 Markdown 文件支持任务列表。",-1),m=s('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>- [ ] 一些文字</code> 渲染一个未勾选的任务项</li><li>使用 <code>- [x] 一些文字</code> 渲染一个勾选了的任务项 (也支持大写的 <code>X</code>)</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><strong>输入</strong></p>',4),k={class:"code-enhance"},b=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">x</span><span style="color:#D4D4D4;">] #739</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">X</span><span style="color:#D4D4D4;">] https://github.com/octo-org/octo-repo/issues/740</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> [ ] Add delight to the experience when all tasks are complete :tada:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u=s('<p><strong>输出</strong></p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> #739</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> https://github.com/octo-org/octo-repo/issues/740</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> Add delight to the experience when all tasks are complete 🎉</label></li></ul>',2);function _(x,y){const a=l("CodeCopyButton");return o(),c("div",null,[p,h,i(" more "),m,e("div",k,[b,n(a)]),u])}const f=t(r,[["render",_],["__file","task-list.html.vue"]]);export{f as default};