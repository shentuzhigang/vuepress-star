import{_ as t,r as o,o as c,c as r,a as s,b as a,d as n,e as D,f as e}from"./app.07530a6c.js";const d={},u=s("h1",{id:"plantuml",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plantuml","aria-hidden":"true"},"#"),a(" PlantUML")],-1),v=s("p",null,"让你 VuePress 站点中的 Markdown 文件支持 PlantUML 图表。",-1),m={href:"https://www.plantuml.com/",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),a(" 语法")],-1),y={class:"code-enhance"},q=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&lt;!-- ↓ :preset 是可选的 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`puml:preset</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">&lt;!-- 放置你的流程图代码 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=s("p",null,"目前可用的预设:",-1),E=s("ul",null,[s("li",null,[s("code",null,"png"),a(" (默认)")]),s("li",null,[s("code",null,"svg")]),s("li",null,[s("code",null,"txt")])],-1),L=s("h2",{id:"示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),a(" 示例")],-1),A={class:"code-enhance"},g=e('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">```plantuml</span></span>\n<span class="line"><span style="color:#D4D4D4;">@startuml</span></span>\n<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>\n<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"><span style="color:#D4D4D4;">```plantuml:svg</span></span>\n<span class="line"><span style="color:#D4D4D4;">@startuml</span></span>\n<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>\n<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"><span style="color:#D4D4D4;">```plantuml:txt</span></span>\n<span class="line"><span style="color:#D4D4D4;">@startuml</span></span>\n<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>\n<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>\n<span class="line"><span style="color:#D4D4D4;">```</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),S={class:"code-enhance"},f=e(`<div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">@startuml</span></span>
<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>
<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={class:"code-enhance"},C=e(`<div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">@startuml</span></span>
<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>
<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={class:"code-enhance"},T=e(`<div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">@startuml</span></span>
<span class="line"><span style="color:#D4D4D4;">Bob -&gt; Alice : hello</span></span>
<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),M={class:"code-enhance"},P=e(`<div class="language-puml line-numbers-mode" data-ext="puml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">@startuml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Icons</span></span>
<span class="line"><span style="color:#D4D4D4;">!define FA_5_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/font-awesome-5</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/cloud.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/youtube.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/server.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define MATERIAL_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/material</span></span>
<span class="line"><span style="color:#D4D4D4;">!include MATERIAL_URL/zoom_in.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define osaPuml https://raw.githubusercontent.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons/master</span></span>
<span class="line"><span style="color:#D4D4D4;">!include osaPuml/Common.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include osaPuml/User/all.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/database_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/file_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/application_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Concepts/service_application&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Concepts/firewall&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define AWS_PUML https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">!include AWS_PUML/AWSCommon.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include AWS_PUML/Robotics/RoboMaker.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Common Styling</span></span>
<span class="line"><span style="color:#D4D4D4;">skinparam wrapWidth 250</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">UpdateElementStyle(&quot;System&quot;, $bgColor=&quot;#ffffff&quot;, $fontColor=&quot;#000000&quot;, $shadowing=&quot;true&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">UpdateElementStyle(&quot;Person&quot;, $bgColor=&quot;#e0f1fb&quot;, $fontColor=&quot;#000000&quot;, $shape=RoundedBoxShape())</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;clickableText&quot;, $fontColor=&quot;purple&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;button&quot;, $bgColor=&quot;#444444&quot;, $fontColor=&quot;#ffffff&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;primary&quot;, $bgColor=&quot;#ffdb58&quot;, $fontColor=&quot;#000000&quot;, $shadowing=&quot;false&quot;, $borderColor=&quot;Gray&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;highlightBoundary&quot;, $bgColor=&quot;#fce8ee&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39; Tables</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $TYPE_X_SAMPLE_POOL_TABLE = &quot;type_x_sample_pool&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $TYPE_Y_SAMPLE_POOL_TABLE = &quot;type_y_sample_pool&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!unquoted procedure $SAMPLE_POOL_TABLE_DESC()</span></span>
<span class="line"><span style="color:#D4D4D4;">A subquery from which to query samples, should be joined to any</span></span>
<span class="line"><span style="color:#D4D4D4;">columns that you want to include in the $DAILY_COLLECTED_SAMPLES_TABLE table</span></span>
<span class="line"><span style="color:#D4D4D4;">!endprocedure</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_TABLE = &quot;some_other_label_db&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_ID = &quot;sampleLabelsDb&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_CONTAINER_DESC = $LABELED_DATASOURCE_DESC</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_COMPONENT_DESC = &quot;Stores all samples which have been labeled.\\n&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_TYPE = &quot;BigTable&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_SCHEMA = &quot;https://docs.google.com/spreadsheets&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_TABLE = &quot;type_y_samples_{date}&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_ID = &quot;dailySamplesDb&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_DESC = &quot;A days worth of samples collected during single run of the pipeline.\\n&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_TYPE = &quot;BigQueryDailyTable&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_ID = &quot;labeledDatasource&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_NAME = &quot;labeled_datasource_bucket&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_TYPE = &quot;GCS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_DESC = &quot;Where the labelers write their labeling results&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Columns</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SEND_FOR_LABELING_COLUMN = &quot;send_for_labeling&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $CONTENT_ID_COLUMN = &quot;some_id&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SYSTEM_NAME = &quot;My Project Name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">left header</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=22 color=black&gt;$SYSTEM_NAME - System View&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=14 color=#484848&gt;The goals of my project are described here&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">end header</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">System(sysName, &quot;Labeling System\\n&quot;, &quot;&quot;, $sprite=&quot;cloud&quot;, $tags=&quot;primary&quot;, $link=&quot;https://tinyurl.com/yblre3m4&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">Boundary(labelers, &#39; \\n&lt;font color=black size=16&gt;Labelers&lt;/font&gt;&#39;, &#39;Human Resources&#39;) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    Person(labelerB, &quot;Labelers B&quot;, &quot;Labeler Type 2\\n&quot;, $tags=&quot;a&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">    Person(labelerA, &quot;Labelers A&quot;, &quot;Labeler Type 2\\n&quot;, $tags=&quot;a&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_U(sysName, labelerB,&quot;  Trigger samples for labeling&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(labelerB, sysName,&quot; Store labeling results        &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">System(videoSamples, &quot;Videos&quot;, &quot;Users and internal customers&quot;, $sprite=&quot;youtube&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(videoSamples, labelerA, &quot; Send samples to labelers&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">System(modelTrainingInference, &quot;Model Training + Inference\\n\\n&lt;font color=#e0575e&gt;&lt;$RoboMaker&gt;&lt;/font&gt;\\n&quot;, &quot;&quot;, $tags=&quot;secondary&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(labelerA, modelTrainingInference,&quot; Send labels&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_R(modelTrainingInference, sysName, &quot;Send model scores&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L(sysName, modelTrainingInference, &quot;Send labels&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">HIDE_STEREOTYPE()</span></span>
<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={class:"code-enhance"},I=e(`<div class="language-puml line-numbers-mode" data-ext="puml"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">@startuml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Icons</span></span>
<span class="line"><span style="color:#D4D4D4;">!define FA_5_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/font-awesome-5</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/cloud.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/youtube.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include FA_5_URL/server.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define MATERIAL_URL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/e53fd61259c0f2449edfe304cad83f51d0fbb5c1/material</span></span>
<span class="line"><span style="color:#D4D4D4;">!include MATERIAL_URL/zoom_in.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define osaPuml https://raw.githubusercontent.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons/master</span></span>
<span class="line"><span style="color:#D4D4D4;">!include osaPuml/Common.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include osaPuml/User/all.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/database_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/file_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Servers/application_server&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Concepts/service_application&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">!include &lt;office/Concepts/firewall&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!define AWS_PUML https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">!include AWS_PUML/AWSCommon.puml</span></span>
<span class="line"><span style="color:#D4D4D4;">!include AWS_PUML/Robotics/RoboMaker.puml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Common Styling</span></span>
<span class="line"><span style="color:#D4D4D4;">skinparam wrapWidth 250</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">UpdateElementStyle(&quot;System&quot;, $bgColor=&quot;#ffffff&quot;, $fontColor=&quot;#000000&quot;, $shadowing=&quot;true&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">UpdateElementStyle(&quot;Person&quot;, $bgColor=&quot;#e0f1fb&quot;, $fontColor=&quot;#000000&quot;, $shape=RoundedBoxShape())</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;clickableText&quot;, $fontColor=&quot;purple&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;button&quot;, $bgColor=&quot;#444444&quot;, $fontColor=&quot;#ffffff&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;primary&quot;, $bgColor=&quot;#ffdb58&quot;, $fontColor=&quot;#000000&quot;, $shadowing=&quot;false&quot;, $borderColor=&quot;Gray&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">AddElementTag(&quot;highlightBoundary&quot;, $bgColor=&quot;#fce8ee&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39; Tables</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $TYPE_X_SAMPLE_POOL_TABLE = &quot;type_x_sample_pool&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $TYPE_Y_SAMPLE_POOL_TABLE = &quot;type_y_sample_pool&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!unquoted procedure $SAMPLE_POOL_TABLE_DESC()</span></span>
<span class="line"><span style="color:#D4D4D4;">A subquery from which to query samples, should be joined to any</span></span>
<span class="line"><span style="color:#D4D4D4;">columns that you want to include in the $DAILY_COLLECTED_SAMPLES_TABLE table</span></span>
<span class="line"><span style="color:#D4D4D4;">!endprocedure</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_TABLE = &quot;some_other_label_db&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_ID = &quot;sampleLabelsDb&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_CONTAINER_DESC = $LABELED_DATASOURCE_DESC</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_COMPONENT_DESC = &quot;Stores all samples which have been labeled.\\n&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_TYPE = &quot;BigTable&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SAMPLE_LABELS_SCHEMA = &quot;https://docs.google.com/spreadsheets&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_TABLE = &quot;type_y_samples_{date}&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_ID = &quot;dailySamplesDb&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_DESC = &quot;A days worth of samples collected during single run of the pipeline.\\n&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $DAILY_COLLECTED_SAMPLES_TYPE = &quot;BigQueryDailyTable&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_ID = &quot;labeledDatasource&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_NAME = &quot;labeled_datasource_bucket&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_TYPE = &quot;GCS&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $LABELED_DATASOURCE_DESC = &quot;Where the labelers write their labeling results&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">&#39;Columns</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SEND_FOR_LABELING_COLUMN = &quot;send_for_labeling&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">!global $CONTENT_ID_COLUMN = &quot;some_id&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">!global $SYSTEM_NAME = &quot;My Project Name&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">left header</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=22 color=black&gt;$SYSTEM_NAME - Container View&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=14 color=black&gt;&lt;U+25CF&gt;  Goal 1&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=14 color=black&gt;&lt;U+25CF&gt;  Goal 2&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=14 color=black&gt;&lt;U+25CF&gt;  Goal 3&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">\\t&lt;font size=14 color=black&gt;&lt;U+25CF&gt;  Goal 4&lt;/font&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">end header</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">Person(labelerA, &quot;Labeler A&quot;, &quot;\\t     Labeler-A Description     \\t\\n&quot;, $tags=&quot;a&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">ContainerDb(bigQueryLabelDB, &quot;LabelADb&quot;, &quot;BigQuery&quot;, &quot;A database where type A labels are stored&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">ContainerDb(modelScoreDb, &quot;ModelScoreDB&quot;, &quot;BigQuery&quot;, &quot;A database where model scores are stored&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Person(labelerB, &quot;Labeler B&quot;, &quot;\\t     Labeler-B Description     \\t\\n&quot;, $tags=&quot;a&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">ContainerDb($LABELED_DATASOURCE_ID, &quot;$LABELED_DATASOURCE_NAME&quot;, &quot;$LABELED_DATASOURCE_TYPE&quot;, $LABELED_DATASOURCE_DESC)</span></span>
<span class="line"><span style="color:#D4D4D4;">System_Boundary(sysName, &#39; \\n&lt;font color=black size=16&gt;Label System FooBarBaz&lt;/font&gt;&#39;) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    Container(samplingPipeline, &quot;Pipeline&quot;, &quot;some-etl-framework&quot;, &quot;ETL job for sampling / labeling&quot;, $tags=&quot;primary&quot;, $link=&quot;https://tinyurl.com/y9j7twkz&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">    Container(labelRetrievalJob, &quot;LabelRetrievalJob&quot;, &quot;some-etl-framework&quot;, &quot;DAG for retrieving and storing label data from labelers.&quot;, $tags=&quot;primary&quot;, $link=&quot;https://tinyurl.com/y8egw3wt&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">    ContainerDb($SAMPLE_LABELS_ID, $SAMPLE_LABELS_TABLE, $SAMPLE_LABELS_TYPE, $SAMPLE_LABELS_COMPONENT_DESC)</span></span>
<span class="line"><span style="color:#D4D4D4;">    ContainerDb($DAILY_COLLECTED_SAMPLES_ID, $DAILY_COLLECTED_SAMPLES_TABLE, $DAILY_COLLECTED_SAMPLES_TYPE, $DAILY_COLLECTED_SAMPLES_DESC)</span></span>
<span class="line"><span style="color:#D4D4D4;">    ContainerQueue(sampleQueue, &quot;SampleQueueFoo&quot;, &quot;SQS&quot;, &quot;Samples which should be double reviewed&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">    Container(labelerBApi, &quot;ReviewQueueAPI&quot;, &quot;NodeJS&quot;, &quot;API for pulling samples for review&quot;, $sprite=&quot;server&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">    Container(btBqSnapshotJob, &quot;ExportBigQuerySnapshot&quot;, &quot;some-etl-framework&quot;, &quot;A job to take daily BQ snapshots\\nof //$SAMPLE_LABELS_TABLE//&quot;, $tags=&quot;primary&quot;, $link=&quot;https://tinyurl.com/yz9bm37c&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">System(modelTrainingInference, &quot;Model Training + Inference\\n\\n&lt;font color=#e0575e&gt;&lt;$RoboMaker&gt;&lt;/font&gt;\\n&quot;, &quot;&quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_R(samplingPipeline, $DAILY_COLLECTED_SAMPLES_ID, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(samplingPipeline, sampleQueue, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">BiRel_D($SAMPLE_LABELS_ID, samplingPipeline, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L(labelRetrievalJob, $SAMPLE_LABELS_ID, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L($LABELED_DATASOURCE_ID, labelRetrievalJob, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_R(sampleQueue, labelerBApi, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_R(labelerBApi, labelerB, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_R(labelerB, $LABELED_DATASOURCE_ID, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L(modelScoreDb, samplingPipeline, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(modelTrainingInference, modelScoreDb, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D(bigQueryLabelDB, modelTrainingInference, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L(labelerA, bigQueryLabelDB, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_L($SAMPLE_LABELS_ID, modelTrainingInference, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;">Rel_D($SAMPLE_LABELS_ID, btBqSnapshotJob, &quot; &quot;)</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">HIDE_STEREOTYPE()</span></span>
<span class="line"><span style="color:#D4D4D4;">@enduml</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function R(U,O){const p=o("ExternalLinkIcon"),l=o("CodeCopyButton"),i=o("PlantUML");return c(),r("div",null,[u,v,s("p",null,[a("使用 "),s("a",m,[a("plantuml"),n(p)]),a(" 提供相应功能。")]),D(" more "),b,s("div",y,[q,n(l)]),_,E,L,s("div",A,[g,n(l)]),s("div",S,[n(i,{id:"plantuml-382ee18b",code:"SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IG80",preset:"png"}),f,n(l)]),s("div",h,[n(i,{id:"plantuml-382ee18c",code:"SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IG80",preset:"svg"}),C,n(l)]),s("div",B,[n(i,{id:"plantuml-382ee1a2",code:"SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IG80",preset:"txt"}),T,n(l)]),s("div",M,[n(i,{id:"plantuml-382ee1a3",code:"nLTjKziu4FxkNw6wp01pW7bBZzuqcJE9ssOc2RaujCSCCnxPaXCLsN8bkTJjzB_VoY-92OJoxSm0iRIxUlRPHolbRwMnr7d2hLSiZNXEA5fgdQc_74VY-wC5qyiyp1MLaKWrJVLH918dupWrFeTA4yv2ftz-E3L3r-EHas2bgOIXe6yylkkZp4IthDqXX53MAq9ZbbBqtWqwmVLiz8BbT9vX8i_MopAOFOp1ub1baccg7DevYycRazFEs-WuFZq_Vqj9JC-EpoDCBixYpWavZiEm4vqufHU-fqeazB2pJhg1uqHSvAJ2_7Yo4BdEGxfj6d1_ex9Ek4bqxCwzsT0T_G_99XXAmN0BQXkCyqE8963f1bwXy1G6NW2rBx5QKfAmb3XD_Gz5HbD5enoW5bX6Iq0SwLpIqp8HLUjZZQXUpkcB917f1hFDv3Mix63E6wZD_3iHnooYZbyIhno2DGwnea5LYTvsovZn5rZXBECimfg9TBinw3oYcLPb-M4WQ7azPnupIUyXgTwQU_Up7qo1nHUGZ-yLnw4o_ojcGIFoi54DqCnIXp2brm2Qu0vyU9BjbS5CX4ApI9KVnlXkfUdToW_vkk0iNLZgZgKPbZX1zn9ddndHItJQERQiwmnAGJrE4y1hhEcUxHTG-SG-G3lXeY-ua5txTLm-Pimel1azBXypgfQOY7jOgcjhcLDx_yd8KwYLI1z6fiVnIHm-6pcZtPd8KqB9fVZkc_Uz_NtBSWcfmy_nOi-Ee9PtEEHq3iri8rwMoumRL1i-OQxr9g3pyja4L1FmA09izGJBOfCj4dOkNiHMZBcYfRUGXChQzeF4nUErbconvF2hBmqRZrUDw0KrIPfd5yqD5z375ro4cAET-StK2_uDV7Sy7Nd1zEfg5CpTov67kiZMHKQ3xu722T0KP49mUyFnvXd7OiCnJx_cGbE2CYaYIg2fe9r7ti70y_jxa2DIUVWrfx90iHGWq2MBbaWBL8rLaTK1KakHSu92Yhu8s8B4cE2qi2B1yoHLI2-nHj3tqJtiB3FPx1QMmXmW6BZ3qKtGlngDlFxS6zJv-7Kksh1blQ8fMO6srXJKw4VkfJVorzcRmoaG45q6iCSf3qXeRtCQ3agFCfsHCLQ3xSRzgydS7KwyMSaIEEwK4u1wuCvT_-fwrgy8t1vWFBsQU9Dv4y3sjP1K8UXZ3QSrrKlyZGAjD4Lb3fGStQPRWHajc6YNR57gQwkXt__eZLrZshH88Y9rj11YmMdP6E6Kf9Z0mKIribjSFr-dJSsfuAVfCx_itmUeAa0muuLV-Jwem3QtXa0N4Lm0QK92ynJnYaKG88UZ4nG9ee4zZHJyuHJ9F3LcHdiPooZqOVgGsQs9hZd-n-o1WK5SixtsVa8GLO9r5GTmn2gHowXTeoUS9kxOQxa5PEKNX7bqH_NpxWtO3tt_USE6ni-mMsZ9IhMY14hDTSaCCLaD6XP1h3albG67MRd5MrBp9eFW_TMi4jjmyi6mU3sUb3iCjd00HspGH6h1CjlAx8dXeErWDZ4ZRMxz6t_kZLVKZ0iqbU8B51bDS6AgO5cSnXejGS1mHx9kzJlJwA7oFsZtzDH80Zfoo75qrtiGx11LXolwnEZzk_AIszjmFpcltL-VNvYVtXoeMWWu9eoQai8qrH8A1Xe9LP5a8MZFiBeA20-mi89dLOlkgK8P_0V87ZKiLpEtvWYqovEflBfsxV9sRGOqNgXk-vG3jxlkQbDhbXQvvEM6Ba8kwLboRawWveJQQufyW7RHRLhbsQAdplbDRrJRrJdiWlt7FC4fcj5AZMft7_sq43pLBQA9VDcaOvHqQQ_Vq1pw13ejSwlJm03jSGIt7S7zVOHVrWnQ_VMQpXKI6w6vP8i5k3RT0PIuqZJu6iz12teJmqPbVtuaVrG_XjEwYjyOeS9lZaNxatbL1hMvV4E3Xy8pk7xA59GSvKg3lALgrxR-ShH2yp1WYnJa6nKrcS2HsXIpXIOHXFAvX5iie1wcCSWGhitWF3OJg9b1Vw3Lv6twK0Xm1UpysQ6zTpkhQsolbi5Qc1Nzy8L5L3UV3Ie1xXOaTHQbdQhTPbjXhxT8wLMQ8HMPexFs7QthlZNtXojQ7uS3Bu0cCFEkJBk4Iy_VO60kwly1",preset:"png"}),P,n(l)]),s("div",w,[n(i,{id:"plantuml-382ee1a4",code:"nLXhRzku4ltkNy7g1aY2jQEyl6qNIR2ofMQzi1tNShQtG0214YbRZIog95NNMUn_lqDAybDoq_ro1RHHo9dXyCoPX_Axa9ZBR1uttaH946U4efcKgVZDD3bUd4qZESlyJ50Ui4JIH9u5R6wcCKwKJaj84aU-sRrkZTJIuw1lph6GbCEIrmKD72MKdwNAVgDnt0CZel66q12MqGVBQtkFu_uh3fHPYWc_MXySmMuh18cMI7aagJ1f-oealrvSjjy7v-7bzVLxIa9wTNuTOFBkAcnVaFFGzzl1XQcry88ADgUjzlhQfJjc4BECv3xlRovP9ZEVrcs3tzzM5oulEh0cphXdzVyFbvrZ24Q4DrpTTCPyOMpkHScElqpW4IoymjKkns96oJnAY5aoeCLIcWWQPE3g4lDW1Xu7CkFqKbz450nPUrGSPtRPVCwI7MJBpKSusSHnNBfQxj-mC8m2QheQU64IBB6F1VNoIDpLIuPH_0efdAPn560PiQHU69WUq5GA7NvOy3Qq3ec74QSBkDJT6dlha-kD0CLNW8yN8iQ-K3zpP84Zl5Mo1c2E4fD4GguTA8sRy5A9zafWp7mceq3ebm5-Nd7wEDT3hbp6KJ9jYESeIJ77SxJWEFqK4Jb3b-tpHkCnXL1G9wPpy5T9qnF3NKBavqOJ7VdJBeiPlpN-4-f7hIc6bwld-b6hOeO9My1HjuRa6JLEAosF85OisRPCpyEBq3zeEQMtOvObX98E--wgtqzEJniDYv32_0HFJum0OlcC_PXEw7UvOo_DU1ehhtPq_4pANOUkzRFhK070dWL8zJdcorsqYDz-zogqGXmBghKP9vGNilSSB_VFcaNJMGp_P4UXiNzgGDzHTKdr7AE9mWBg-3HcFexHqUJpoF7-wxdMODHtlD73Gz-RM9s-WswH8PSfzRvx0iy19YzbB3Ps53yVK5pkA6R9run9Ib3AMK0951LqjAVjsOxRFO4x8f7vNpFAboZa30WwYu8PaWpbQxbbqKHYnhAO89-YBmnIa2WHd2mR0OkpUIAGd669eEwZ1MIMsYop9KfW3pomhLx_izTzwFUTxiInY_kunLsaGglnXYPavNHZ3K7XVT_gE7rtVNlLd3m6rha7EKvZZ_X6dLBFrXhwEdqbBEnwuUx3S6BrXivOemIAHte3lBQjYUK-F8wxEO3r1WQZXw4pd9G635SoJWM2EbPYMa0zmzyem4eJfEz0oTbJKkkOueAorecccb-rWcxt3sTWAT6oH18MYBCfOzEOwi88NP9Y0es9Ic5iO7quJhkS4zxVgixyO_pOG1u1WgDuwUQwMn6eKoi1j131Im2DSIYUB5oX20ICeNK28u4qaDD8m7ynHJnBb9ZYNXgb5EemtKQszg9hZ3-g7B2LnmNQQ-qAGkGNBA9eGuiLBEF1Pemgb8RMmDbGyyXAp_Epu9dAm-gbi_TTzx1W2UCdo1QgKSbFv02f6fVKKiJpHOKYa3MBDJEWcUaKtw2QCxIz3m_Zd6ozuRr2yN4mr1a6AUn1Y_LAInjkgRHIET6pDnLK4aTa4rltipjn1Yje1aiqukmB11aDyLn50PwOXXBDWC4m93MUv8sgz13w5tfxUQau0INPZt7mVBTbhOLMypRwAwAB6ptetkrOkBZUid3p-Cjbk_lX3g5x1kvTb4e_eNFvBtIk_eNEzUf2we5Gh21gvCt_f8YwrKH6Ftz55lGnuqaYzHHhBGlPL0GyIjLqfdUUv9Fkr19FnQs1eS-jeBJz4xz85grlTqhhbgr6YrKggNULn_dq2GLGSn7g2R9ova61X1MXQYNPEM7E28tT07Pi7ymCrhzsVdY4raKYo4lmvWdRg7GsKEbKeDBvILIggmJOhQi4HisUIdDrJ4rYdpRoeT4h9vCJiHGgLvhe63qbENqsQ5DGwTSxVJ6KAwCFZ7Kmx-2NWaJ7f-ZlXhhawaedkkX2Ke-AYWhkbg_ATVsrI6NS2c7MfL2gdzMgC-d3qE0Zg0geD83CLQbPmxSnpC76y-sgTyaeMMOyrdrh-VxBMxbuVW6ejttJziPKyeX-m_6Vp2-3kRbMxwLjtMiFUIwjVCIGFuefwbrRrxpAvwIoUfxzhFllw7HnjP2xxYksx4uipSh9frar53GFJo0LXzMtwUOFXe3cuTxPFDpBTro1fCrepYkgto4KxletuAGAZllHDLORvUIq7aa9otpLyY5iTA7pke8QaDvM6e6LiHRJvgrHJzaTGdtuKvy02ve5QHPhcfPJHiuCfQS_8FHV66wD_5jtxpXVThww2Kx1GPdpqFcUmjnIrgXohvwCbauOcA8bV5KYFJEXpaSa2aNnbC1eOvfLz33DdsNaotj_VlKsW6lyKzIHlDXEE5m7GEWb8HHH-1eloougTz0lQBNvb6mN6lYoRBzjqxkRezNNyLrHM7J9DDINqXY6zd55LJd8JWE1gjAqApItcQGaEr4kMv5U5UMijDslgYSL9ZOKwgfzLM4gjSRRrDycwbfeQtsZMUrBD55jqrbxkjrB3w1Wrp9Xfnsl5VOcWLekxK2jXvBzEM83tttqVsYxCkpx-Qd46t_qRCU3MN7iFAWw1X_7lyC4fVwWypy0",preset:"png"}),I,n(l)])])}const $=t(d,[["render",R],["__file","plantuml.html.vue"]]);export{$ as default};
