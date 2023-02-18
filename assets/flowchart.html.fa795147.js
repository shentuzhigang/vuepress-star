const n=JSON.parse('{"key":"v-75727fb1","path":"/zh/guide/markdown/advanced/flowchart.html","title":"FlowChart","lang":"zh-CN","frontmatter":{"title":"FlowChart","icon":"trend-charts","head":[["meta",{"name":"og:url","content":"/zh/guide/markdown/advanced/flowchart.html"}],["meta",{"name":"og:site_name","content":"vuepress-theme-star"}],["meta",{"name":"og:title","content":"FlowChart"}],["meta",{"name":"og:description","content":""}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:image","content":""}],["meta",{"name":"og:updated_time","content":"2022-10-22T08:40:46.000Z"}],["meta",{"name":"og:locale","content":"zh-CN"}],["meta",{"name":"og:locale:alternate","content":"en-US"}],["meta",{"name":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vuepress-theme-star"}],["meta",{"name":"article:author","content":""}],["meta",{"name":"article:published_time","content":""}],["meta",{"name":"article:modified_time","content":"2022-10-22T08:40:46.000Z"}]]},"excerpt":"<h1 id=\\"flowchart\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#flowchart\\" aria-hidden=\\"true\\">#</a> FlowChart</h1>\\n<p>让你 VuePress 站点中的 Markdown 文件支持 FlowChart 图表。</p>\\n<p>使用 <a href=\\"https://github.com/adrai/flowchart.js\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">flowchart.js<ExternalLinkIcon/></a> 提供相应功能。</p>\\n","headers":[{"level":2,"title":"文档","slug":"文档","link":"#文档","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"演示","slug":"演示","link":"#演示","children":[]},{"level":2,"title":"流程图介绍","slug":"流程图介绍","link":"#流程图介绍","children":[{"level":3,"title":"节点类型","slug":"节点类型","link":"#节点类型","children":[]},{"level":3,"title":"链接","slug":"链接","link":"#链接","children":[]},{"level":3,"title":"方向","slug":"方向","link":"#方向","children":[]},{"level":3,"title":"节点特定说明符","slug":"节点特定说明符","link":"#节点特定说明符","children":[]},{"level":3,"title":"网址","slug":"网址","link":"#网址","children":[]},{"level":3,"title":"建议","slug":"建议","link":"#建议","children":[]}]}],"git":{"createdTime":1664110816000,"updatedTime":1666428046000,"contributors":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com","commits":6}]},"copyright":"Copyright © 2021-present Starzkg","filePathRelative":"zh/guide/markdown/advanced/flowchart.md","content":"---\\ntitle: FlowChart\\nicon: trend-charts\\n---\\n\\n# FlowChart\\n让你 VuePress 站点中的 Markdown 文件支持 FlowChart 图表。\\n\\n使用 [flowchart.js](https://github.com/adrai/flowchart.js) 提供相应功能。\\n\\n<!-- more -->\\n\\n## 文档\\n\\n相关详情，详见 [flowchart 文档](http://flowchart.js.org/).\\n\\n## 语法\\n\\n````md\\n<!-- ↓ :preset 是可选的 -->\\n\\n```flow:preset\\n\\n<!-- 放置你的流程图代码 -->\\n\\n```\\n````\\n\\n目前可用的预设:\\n\\n- `vue` (默认)\\n- `ant`\\n- `pie`\\n\\n## 演示\\n\\n```flow\\nst=>start: 开始|past:>http://www.google.com[blank]\\ne=>end: 结束|future:>http://www.google.com\\nop1=>operation: 操作1|past\\nop2=>operation: 操作2|current\\nsub1=>subroutine: 子程序|invalid\\ncond=>condition: 是/否?|approved:>http://www.google.com\\nc2=>condition: 判断2|rejected\\nio=>inputoutput: 进行反思...|future\\n\\nst->op1(right)->cond\\ncond(yes, right)->c2\\ncond(no)->sub1(left)->op1\\nc2(yes)->io->e\\nc2(no)->op2->e\\n```\\n\\n```flow:ant\\nst=>start: 开始|past:>http://www.google.com[blank]\\ne=>end: 结束|future:>http://www.google.com\\nop1=>operation: 操作1|past\\nop2=>operation: 操作2|current\\nsub1=>subroutine: 子程序|invalid\\ncond=>condition: 是/否?|approved:>http://www.google.com\\nc2=>condition: 判断2|rejected\\nio=>inputoutput: 进行反思...|future\\n\\nst->op1(right)->cond\\ncond(yes, right)->c2\\ncond(no)->sub1(left)->op1\\nc2(yes)->io->e\\nc2(no)->op2->e\\n```\\n\\n```flow:pie\\nst=>start: 开始|past:>http://www.google.com[blank]\\ne=>end: 结束|future:>http://www.google.com\\nop1=>operation: 操作1|past\\nop2=>operation: 操作2|current\\nsub1=>subroutine: 子程序|invalid\\ncond=>condition: 是/否?|approved:>http://www.google.com\\nc2=>condition: 判断2|rejected\\nio=>inputoutput: 进行反思...|future\\n\\nst->op1(right)->cond\\ncond(yes, right)->c2\\ncond(no)->sub1(left)->op1\\nc2(yes)->io->e\\nc2(no)->op2->e\\n```\\n\\n````md\\n```flow\\nst=>start: 开始|past:>http://www.google.com[blank]\\ne=>end: 结束|future:>http://www.google.com\\nop1=>operation: 操作1|past\\nop2=>operation: 操作2|current\\nsub1=>subroutine: 子程序|invalid\\ncond=>condition: 是/否?|approved:>http://www.google.com\\nc2=>condition: 判断2|rejected\\nio=>inputoutput: 进行反思...|future\\n\\nst->op1(right)->cond\\ncond(yes, right)->c2\\ncond(no)->sub1(left)->op1\\nc2(yes)->io->e\\nc2(no)->op2->e\\n```\\n````\\n\\n## 流程图介绍\\n\\n### 节点类型\\n\\n定义了结点形状\\n\\n#### 开始 & 结束\\n\\n被用于流程开始的第一个节点。\\n默认文字为 `Start`.\\n\\n- `[Variable]->start: [Text]`\\n\\n被用于流程结束的最后一个节点。\\n默认文字为 `End`.\\n\\n- `[Variable]->end: [Text]`\\n\\n````md\\n```flow\\nst=>start: 开始\\ne=>end: 结束\\n\\nst->e\\n```\\n````\\n\\n```flow\\nst=>start: 开始\\ne=>end: 结束\\n\\nst->e\\n```\\n\\n#### 操作\\n\\n- `[Variable]->operation: [Text]`\\n\\n````md\\n```flow\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\nprocess->e\\n```\\n````\\n\\n```flow\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\nprocess->e\\n```\\n\\n#### 输入输出\\n\\n- `[Variable]->inputoutput: [Text]`\\n\\n````md\\n```flow\\nprocess=>inputoutput: 输入输出\\ne=>end: 结束\\n\\nprocess->e\\n```\\n````\\n\\n```flow\\nprocess=>inputoutput: 输入输出\\ne=>end: 结束\\n\\nprocess->e\\n```\\n\\n#### 子程序\\n\\n- `[Variable]->subroutine: [Text]`\\n\\n````md\\n```flow\\nprocess=>subroutine: 子程序\\ne=>end: 结束\\n\\nprocess->e\\n```\\n````\\n\\n```flow\\nprocess=>subroutine: 子程序\\ne=>end: 结束\\n\\nprocess->e\\n```\\n\\n#### 条件\\n\\n- `[Variable]->condition: [Text]`\\n\\n- `[Variable]([yesText])->[Position]`\\n- `[Variable]([noText])->[Position]`\\n\\n````md\\n```flow\\ncond=>condition: 是否执行操作?\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\ncond(yes)->process->e\\ncond(no)->e\\n```\\n````\\n\\n```flow\\ncond=>condition: 是否执行操作?\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\ncond(yes)->process->e\\ncond(no)->e\\n```\\n\\n#### 平行\\n\\n定义同时开始的多个程序。\\n\\n- `[Variable]->parallel: [Text]`\\n- `[Variable](path1, direction)->[Position]`\\n- `[Variable](path1, direction)->[Position]`\\n\\n````md\\n```flow\\npara=>parallel: 平行任务\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\npara(path1, bottom)->process->e\\npara(path2)->e\\n```\\n````\\n\\n```flow\\npara=>parallel: 平行任务\\nprocess=>operation: 操作\\ne=>end: 结束\\n\\npara(path1, bottom)->process->e\\npara(path2)->e\\n```\\n\\n### 链接\\n\\n连接方式在流程图中节点定义后描述，使用 `->` 指定一个节点之间的链接，例如 `nodeVar1->nodeVar2->nodeVar3`\\n\\n流程可以被分开:\\n\\n```md\\nnodeVar1->nodeVar2\\nnodeVar2->nodeVar3\\n```\\n\\n连接格式定义如下:\\n\\n`<node variable name>[(<specificaion1>[, <specification2])]-><node variable name>[[(<specificaion1>[, <specification2])]-><node variable name>]`\\n\\n在 `[]` 中的项是可选的。\\n\\n### 方向\\n\\n以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。`<direction>` 的可选值为:\\n\\n- `left`\\n- `right`\\n- `top`\\n- `bottom`\\n\\n### 节点特定说明符\\n\\n每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 `()` 中的变量名后添加说明符，并用`,` 分隔，例如 `nodeVar (spec1，spec2)`。\\n\\n- **start**\\n  **operation**\\n  **inputoutput**\\n  **subroutine**\\n\\n  可选方向\\n\\n  `startVar(<direction>)->nextNode`\\n\\n  `operationVar(<direction>)->nextNode`\\n\\n  `inputoutputVar(<direction>)->nextNode`\\n\\n  `subroutineVar(<direction>)->nextNode`\\n\\n- **condition**\\n\\n  必需指定 `yes` or `no`\\n\\n  可选方向\\n\\n  ```md\\n  conditionalVar(yes, <direction>)->nextNode1\\n  conditionalVar(no, <direction>)->nextNode2\\n  ```\\n\\n- **parallel**\\n\\n  必需指定路径方向 `path1`, `path2`, 或 `path3`\\n\\n  可选方向\\n\\n  ```md\\n  parallelVar(path1, <direction>)->nextNode1\\n  parallelVar(path2, <direction>)->nextNode2\\n  parallelVar(path3, <direction>)->nextNode3\\n  ```\\n\\n### 网址\\n\\n可以使用 `:>` 运算符将外部链接添加到节点。\\n\\n`[blank]` 指定打开新的页面\\n\\n```md\\nst=>start: Start:>http://www.google.com[blank]\\ne=>end: End:>http://www.yahoo.com\\n```\\n\\n### 建议\\n\\n文本中可能不应该使用的符号: `=>`、`->`、 `:>`、`|`、`@>` 和 `:$`\\n\\n如果要在流程图中强调特定路径，则可以另外定义它，如下所示:\\n\\n```md\\nst@>op1({\\"stroke\\":\\"Red\\"})@>cond({\\"stroke\\":\\"Red\\",\\"stroke-width\\":6,\\"arrow-end\\":\\"classic-wide-long\\"})@>c2({\\"stroke\\":\\"Red\\"})@>op2({\\"stroke\\":\\"Red\\"})@>e({\\"stroke\\":\\"Red\\"})\\n```\\n","icon":"trend-charts","author":[{"name":"shentuzhigang","email":"shentuzhigang01@weidian.com"}],"top":false,"length":1103,"words":1103,"readingTime":3.68}');export{n as data};