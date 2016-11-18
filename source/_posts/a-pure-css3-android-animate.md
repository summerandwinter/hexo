---
title: 纯css做的安卓开机动画
tags:
  - css3
  - 动画
  - 安卓，安卓机器人
  - 开机动画
id: 336
categories:
  - CSS3
date: 2013-09-16 23:22:09
---

随着css3的发展，越来越多的负责绚丽的效果可以由纯css来完成了。用css3实现的动画效果丝毫不必js实现的逊色，而且浏览器对css渲染的速度远比js快，大多数时候css的体积也不js小。其中css3中的动画效果可以实现流畅而强大的动画效果，下面我们来看看css3的能量吧。

<!--more-->

下面介绍一个博主完成的纯css3实现的仿安卓开机动画，可爱的安卓机器人。

效果图：

[![css3-android-animate](http://bcs.duapp.com/xiaopihai/2013/09/css3-android-animate-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/css3-android-animate.jpg)

&nbsp;

下面给大家提供一个demo可下载地址，先睹为快吧。
<div id="demo">[查看示例](http://tutorial.duapp.com/lab/css3-android-robot-v2/index.htm "新版本示例")</div>
（<span style="color: #339966;">**新版示例，已兼容safari。**</span>）

<span style="color: #339966;">经过测试，safari没有动画效果的原因是不支持伪元素after,before的动画效果。用DIV替换掉伪元素后safari下运行正常。</span>

<span style="color: #339966;">老版本的示例和下载地址还保留着，大家可以对比效果。新版本的源码就不贴出来啦，需要学习的直接下载新版源码。</span>

[download id="6"]
<del>   [查看示例](http://tutorial.duapp.com/lab/css3-android-robot/index.htm "查看示例") <span style="color: #339966;">**（请用chrome或firefox浏览，chrome下效果最佳，目前safari下没有效果，正在测试中...）**</span></del>
<del>[download id="5"]</del>

<span style="color: #ff0000;">**特别声明此demo为博主原创，可以下载免费使用。**</span>

下面是源码

<span style="color: #339966;">**html:**</span>
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>&lt;!DOCTYPE html&gt;   </span></span>
2.  <span>&lt;html&gt;   </span>
3.  <span>    &lt;head&gt;   </span>
4.  <span>        &lt;meta http-equiv=</span><span class="string">"Content-Type"</span><span> content=</span><span class="string">"text/html; charset=UTF-8"</span><span>&gt;   </span>
5.  <span>        &lt;title&gt;android robot&lt;/title&gt;   </span>
6.  <span>        &lt;link type=</span><span class="string">"text/css"</span><span> rel=</span><span class="string">"stylesheet"</span><span> href=</span><span class="string">"css.css"</span><span>/&gt;   </span>
7.  <span>    &lt;/head&gt;   </span>
8.  <span>&lt;body&gt;   </span>
9.  <span>&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"android"</span><span>&gt;   </span>
10.  <span>  &lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"eye"</span><span>&gt;&lt;/div&gt;   </span>
11.  <span>  &lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"ear"</span><span>&gt;&lt;/div&gt;   </span>
12.  <span>  &lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"hand"</span><span>&gt;&lt;/div&gt;   </span>
13.  <span>  &lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"foot"</span><span>&gt;&lt;/div&gt;   </span>
14.  <span>&lt;/div&gt;   </span>
15.  <span>&lt;/body&gt;   </span>
16.  <span>&lt;/html&gt;  </span>
</div>
<span style="color: #339966;">**css:**</span>
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>.android{   </span></span>
2.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">relative</span><span>;   </span>
3.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">200px</span><span>;   </span>
4.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">290px</span><span>;   </span>
5.  <span>  </span><span class="keyword">margin</span><span>:</span><span class="string">80px</span><span> </span><span class="string">auto</span><span>;   </span>
6.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#A5C63B</span><span>;   </span>
7.  <span>  </span><span class="keyword">border</span><span>-radius:</span><span class="string">200px</span><span> </span><span class="string">200px</span><span> </span><span class="string">50px</span><span> </span><span class="string">50px</span><span>;   </span>
8.  <span>  transition: </span><span class="string">all</span><span> .25s ease-out;   </span>
9.  <span>  -webkit-transition: </span><span class="string">all</span><span> .25s ease-out;   </span>
10.  <span>  -moz-transition: </span><span class="string">all</span><span> .25s ease-out;   </span>
11.  <span>  -o-transition: </span><span class="string">all</span><span> .25s ease-out;   </span>
12.  <span>  -ms-transition: </span><span class="string">all</span><span> .25s ease-out;   </span>
13.  <span>}   </span>
14.  <span>.android:hover{   </span>
15.  <span>  filter: blur(</span><span class="string">3px</span><span>);   </span>
16.  <span>  -webkit-filter: blur(</span><span class="string">3px</span><span>);   </span>
17.  <span>  -moz-filter: blur(</span><span class="string">3px</span><span>);   </span>
18.  <span>  -o-filter: blur(</span><span class="string">3px</span><span>);   </span>
19.  <span>  -ms-filter: blur(</span><span class="string">3px</span><span>);   </span>
20.  <span>  transform: scale(1.2) rotate(3deg);   </span>
21.  <span>  -webkit-transform: scale(1.2) rotate(3deg);   </span>
22.  <span>  -moz-transform: scale(1.2) rotate(3deg);   </span>
23.  <span>  -o-transform: scale(1.2) rotate(3deg);   </span>
24.  <span>  -ms-transform: scale(1.2) rotate(3deg);   </span>
25.  <span>}   </span>
26.  <span>.android:after{   </span>
27.  <span>  </span><span class="keyword">content</span><span>:</span><span class="string">''</span><span>;   </span>
28.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
29.  <span>  </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
30.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">200px</span><span>;   </span>
31.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">8px</span><span>;   </span>
32.  <span>  </span><span class="string">top</span><span>:</span><span class="string">95px</span><span>;   </span>
33.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#fff</span><span>;   </span>
34.  <span>}   </span>
35.  <span>.android .eye:after,   </span>
36.  <span>.android .eye:before{   </span>
37.  <span>  </span><span class="keyword">content</span><span>:</span><span class="string">''</span><span>;   </span>
38.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
39.  <span>  </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
40.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">18px</span><span>;   </span>
41.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">18px</span><span>;   </span>
42.  <span>  </span><span class="string">top</span><span>:</span><span class="string">35px</span><span>;   </span>
43.  <span>  </span><span class="string">left</span><span>:</span><span class="string">50px</span><span>;   </span>
44.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#fff</span><span>;   </span>
45.  <span>  </span><span class="keyword">border</span><span>-radius:</span><span class="string">15px</span><span>;   </span>
46.  <span>}   </span>
47.  <span>.android .eye:after{   </span>
48.  <span>  </span><span class="string">left</span><span>:</span><span class="string">auto</span><span>;   </span>
49.  <span>  </span><span class="keyword">right</span><span class="string">right</span><span>:</span><span class="string">50px</span><span>;   </span>
50.  <span>  animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
51.  <span>  -webkit-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
52.  <span>  -moz-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
53.  <span>  -o-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
54.  <span>  -ms-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
55.  <span>}   </span>
56.  <span>.android .eye:before{   </span>
57.  <span>  animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
58.  <span>  -webkit-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
59.  <span>  -moz-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
60.  <span>  -o-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
61.  <span>  -ms-animation:animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
62.  <span>}   </span>
63.  <span>@keyframes animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
64.  <span>    {   </span>
65.  <span>    0%      {}   </span>
66.  <span>    25%     {transform: translate(-</span><span class="string">102px</span><span>,</span><span class="string">0px</span><span>);}   </span>
67.  <span>    50%     {}   </span>
68.  <span>    100%    {}   </span>
69.  <span>    }   </span>
70.  <span>@-webkit-keyframes animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
71.  <span>    {   </span>
72.  <span>    0%      {}   </span>
73.  <span>    25%     {-webkit-transform: translate(-</span><span class="string">102px</span><span>,</span><span class="string">0px</span><span>);}   </span>
74.  <span>    50%     {}   </span>
75.  <span>    100%    {}   </span>
76.  <span>    }   </span>
77.  <span>@-moz-keyframes animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
78.  <span>    {   </span>
79.  <span>    0%      {}   </span>
80.  <span>    25%     {-moz-transform: translate(-</span><span class="string">102px</span><span>,</span><span class="string">0px</span><span>);}   </span>
81.  <span>    50%     {}   </span>
82.  <span>    100%    {}   </span>
83.  <span>    }   </span>
84.  <span>@-o-keyframes animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
85.  <span>    {   </span>
86.  <span>    0%      {}   </span>
87.  <span>    25%     {-o-transform: translate(-</span><span class="string">102px</span><span>,</span><span class="string">0px</span><span>);}   </span>
88.  <span>    50%     {}   </span>
89.  <span>    100%    {}   </span>
90.  <span>    }   </span>
91.  <span>@-ms-keyframes animated-robot-eye-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
92.  <span>    {   </span>
93.  <span>    0%      {}   </span>
94.  <span>    25%     {-ms-transform: translate(-</span><span class="string">102px</span><span>,</span><span class="string">0px</span><span>);}   </span>
95.  <span>    50%     {}   </span>
96.  <span>    100%    {}   </span>
97.  <span>    }   </span>
98.  <span>@keyframes animated-robot-eye-</span><span class="string">left</span><span>  </span>
99.  <span>    {   </span>
100.  <span>    0%      {}   </span>
101.  <span>    25%     {transform: translate(-</span><span class="string">82px</span><span>,</span><span class="string">0px</span><span>);}   </span>
102.  <span>    50%     {}   </span>
103.  <span>    100%    {}   </span>
104.  <span>    }   </span>
105.  <span>@-webkit-keyframes animated-robot-eye-</span><span class="string">left</span><span>  </span>
106.  <span>    {   </span>
107.  <span>    0%      {}   </span>
108.  <span>    25%     {-webkit-transform: translate(-</span><span class="string">82px</span><span>,</span><span class="string">0px</span><span>);}   </span>
109.  <span>    50%     {}   </span>
110.  <span>    100%    {}   </span>
111.  <span>    }   </span>
112.  <span>@-moz-keyframes animated-robot-eye-</span><span class="string">left</span><span>  </span>
113.  <span>    {   </span>
114.  <span>    0%      {}   </span>
115.  <span>    25%     {-moz-transform: translate(-</span><span class="string">82px</span><span>,</span><span class="string">0px</span><span>);}   </span>
116.  <span>    50%     {}   </span>
117.  <span>    100%    {}   </span>
118.  <span>    }   </span>
119.  <span>@-o-keyframes animated-robot-eye-</span><span class="string">left</span><span>  </span>
120.  <span>    {   </span>
121.  <span>    0%      {}   </span>
122.  <span>    25%     {-o-transform: translate(-</span><span class="string">82px</span><span>,</span><span class="string">0px</span><span>);}   </span>
123.  <span>    50%     {}   </span>
124.  <span>    100%    {}   </span>
125.  <span>    }   </span>
126.  <span>@-ms-keyframes animated-robot-eye-</span><span class="string">left</span><span>  </span>
127.  <span>    {   </span>
128.  <span>    0%      {}   </span>
129.  <span>    25%     {-ms-transform: translate(-</span><span class="string">82px</span><span>,</span><span class="string">0px</span><span>);}   </span>
130.  <span>    50%     {}   </span>
131.  <span>    100%    {}   </span>
132.  <span>    }                  </span>
133.  <span>.android:hover .eye:after,   </span>
134.  <span>.android:hover .eye:before{   </span>
135.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">3px</span><span>;   </span>
136.  <span>  </span><span class="string">top</span><span>:</span><span class="string">43px</span><span>;   </span>
137.  <span>}   </span>
138.  <span>.android .ear:after,   </span>
139.  <span>.android .ear:before{   </span>
140.  <span>  </span><span class="keyword">content</span><span>:</span><span class="string">''</span><span>;   </span>
141.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
142.  <span>  </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
143.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">6px</span><span>;   </span>
144.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">40px</span><span>;   </span>
145.  <span>  </span><span class="string">top</span><span>:-</span><span class="string">25px</span><span>;   </span>
146.  <span>  </span><span class="string">left</span><span>:</span><span class="string">50px</span><span>;   </span>
147.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#A5C63B</span><span>;   </span>
148.  <span>  </span><span class="keyword">border</span><span>-radius:</span><span class="string">5px</span><span>;   </span>
149.  <span>  transform:rotate(-25deg);   </span>
150.  <span>  -webkit-transform:rotate(-25deg);   </span>
151.  <span>  -moz-transform:rotate(-25deg);   </span>
152.  <span>  -o-transform:rotate(-25deg);   </span>
153.  <span>  -ms-transform:rotate(-25deg);   </span>
154.  <span>}   </span>
155.  <span>.android .ear:after{   </span>
156.  <span>  </span><span class="string">left</span><span>:</span><span class="string">auto</span><span>;   </span>
157.  <span>  </span><span class="keyword">right</span><span class="string">right</span><span>:</span><span class="string">50px</span><span>;   </span>
158.  <span>  transform:rotate(25deg);   </span>
159.  <span>  -webkit-transform:rotate(25deg);   </span>
160.  <span>  -moz-transform:rotate(25deg);   </span>
161.  <span>  -o-transform:rotate(25deg);   </span>
162.  <span>  -ms-transform:rotate(25deg);   </span>
163.  <span>}   </span>
164.  <span>.android .ear:before{   </span>
165.  <span>animation:animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
166.  <span>-webkit-animation:animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
167.  <span>-moz-animation:animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
168.  <span>-o-animation:animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
169.  <span>-ms-animation:animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
170.  <span>  </span>
171.  <span>}   </span>
172.  <span>@keyframes animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
173.  <span>    {   </span>
174.  <span>    0%      {}   </span>
175.  <span>    25%     {transform:translate(</span><span class="string">90px</span><span>,</span><span class="string">6px</span><span>) rotate(25deg);}   </span>
176.  <span>    50%     {}   </span>
177.  <span>    100%    {}   </span>
178.  <span>    }   </span>
179.  <span>  </span>
180.  <span>@-webkit-keyframes animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
181.  <span>    {   </span>
182.  <span>    0%      {}   </span>
183.  <span>    25%     {-webkit-transform:translate(</span><span class="string">90px</span><span>,</span><span class="string">6px</span><span>) rotate(25deg);}   </span>
184.  <span>    50%     {}   </span>
185.  <span>    100%    {}   </span>
186.  <span>    }   </span>
187.  <span>  </span>
188.  <span>@-moz-keyframes animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
189.  <span>    {   </span>
190.  <span>    0%      {}   </span>
191.  <span>    25%     {-moz-transform:translate(</span><span class="string">90px</span><span>,</span><span class="string">6px</span><span>) rotate(25deg);}   </span>
192.  <span>    50%     {}   </span>
193.  <span>    100%    {}   </span>
194.  <span>    }   </span>
195.  <span>@-o-keyframes animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
196.  <span>    {   </span>
197.  <span>    0%      {}   </span>
198.  <span>    25%     {-o-transform:translate(</span><span class="string">90px</span><span>,</span><span class="string">6px</span><span>) rotate(25deg);}   </span>
199.  <span>    50%     {}   </span>
200.  <span>    100%    {}   </span>
201.  <span>    }   </span>
202.  <span>@-ms-keyframes animated-robot-ear-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
203.  <span>    {   </span>
204.  <span>    0%      {}   </span>
205.  <span>    25%     {-ms-transform:translate(</span><span class="string">90px</span><span>,</span><span class="string">6px</span><span>) rotate(25deg);}   </span>
206.  <span>    50%     {}   </span>
207.  <span>    100%    {}   </span>
208.  <span>    }                  </span>
209.  <span>@keyframes animated-robot-ear-</span><span class="string">left</span><span>  </span>
210.  <span>    {   </span>
211.  <span>    0%      {transform: translate(-</span><span class="string">42px</span><span>,</span><span class="string">0px</span><span>);}   </span>
212.  <span>    25%     {}   </span>
213.  <span>    50%     {}   </span>
214.  <span>    100%    {}   </span>
215.  <span>    }   </span>
216.  <span>@-webkit-keyframes animated-robot-ear-</span><span class="string">left</span><span>  </span>
217.  <span>    {   </span>
218.  <span>    0%      {-webkit-transform: translate(-</span><span class="string">42px</span><span>,</span><span class="string">0px</span><span>);}   </span>
219.  <span>    25%     {}   </span>
220.  <span>    50%     {}   </span>
221.  <span>    100%    {}   </span>
222.  <span>    }   </span>
223.  <span>@-moz-keyframes animated-robot-ear-</span><span class="string">left</span><span>  </span>
224.  <span>    {   </span>
225.  <span>    0%      {-moz-transform: translate(-</span><span class="string">42px</span><span>,</span><span class="string">0px</span><span>);}   </span>
226.  <span>    25%     {}   </span>
227.  <span>    50%     {}   </span>
228.  <span>    100%    {}   </span>
229.  <span>    }   </span>
230.  <span>@-o-keyframes animated-robot-ear-</span><span class="string">left</span><span>  </span>
231.  <span>    {   </span>
232.  <span>    0%      {-o-transform: translate(-</span><span class="string">42px</span><span>,</span><span class="string">0px</span><span>);}   </span>
233.  <span>    25%     {}   </span>
234.  <span>    50%     {}   </span>
235.  <span>    100%    {}   </span>
236.  <span>    }   </span>
237.  <span>@-ms-keyframes animated-robot-ear-</span><span class="string">left</span><span>  </span>
238.  <span>    {   </span>
239.  <span>    0%      {-ms-transform: translate(-</span><span class="string">42px</span><span>,</span><span class="string">0px</span><span>);}   </span>
240.  <span>    25%     {}   </span>
241.  <span>    50%     {}   </span>
242.  <span>    100%    {}   </span>
243.  <span>    }                  </span>
244.  <span>.android .hand:after,   </span>
245.  <span>.android .hand:before{   </span>
246.  <span>  </span><span class="keyword">content</span><span>:</span><span class="string">''</span><span>;   </span>
247.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
248.  <span>  </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
249.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">44px</span><span>;   </span>
250.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">150px</span><span>;   </span>
251.  <span>  </span><span class="string">top</span><span>:</span><span class="string">96px</span><span>;   </span>
252.  <span>  </span><span class="string">left</span><span>:-</span><span class="string">52px</span><span>;   </span>
253.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#A5C63B</span><span>;   </span>
254.  <span>  </span><span class="keyword">border</span><span>-radius:</span><span class="string">44px</span><span>;   </span>
255.  <span>  </span>
256.  <span>}   </span>
257.  <span>.android .hand:after{   </span>
258.  <span>  </span><span class="string">left</span><span>:</span><span class="string">auto</span><span>;   </span>
259.  <span>  </span><span class="keyword">right</span><span class="string">right</span><span>:-</span><span class="string">52px</span><span>;   </span>
260.  <span>}   </span>
261.  <span>  </span>
262.  <span>.android .hand:after   </span>
263.  <span>{   </span>
264.  <span>  transform-origin:0 0;   </span>
265.  <span>  -webkit-transform-origin:0 0;   </span>
266.  <span>  -moz-transform-origin:0 0;   </span>
267.  <span>  -o-transform-origin:0 0;   </span>
268.  <span>  -ms-transform-origin:0 0;   </span>
269.  <span>  animation:animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
270.  <span>  -webkit-animation:animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
271.  <span>  -moz-animation:animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
272.  <span>  -o-animation:animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
273.  <span>  -ms-animation:animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
274.  <span>}   </span>
275.  <span>.android .hand:before   </span>
276.  <span>{   </span>
277.  <span>  transform-origin:</span><span class="string">44px</span><span> 0;   </span>
278.  <span>  -webkit-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
279.  <span>  -moz-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
280.  <span>  -o-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
281.  <span>  -ms-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
282.  <span>  animation:animated-robot-hand-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
283.  <span>  -webkit-animation:animated-robot-hand-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
284.  <span>  -moz-animation:animated-robot-hand-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
285.  <span>  -o-animation:animated-robot-hand-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
286.  <span>  -ms-animation:animated-robot-hand-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
287.  <span>}   </span>
288.  <span>  </span>
289.  <span>  </span>
290.  <span>@keyframes animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
291.  <span>    {   </span>
292.  <span>    0%      {transform: translate(-</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
293.  <span>    25%     {transform: rotate(0deg);}   </span>
294.  <span>    50%     {transform: rotate(-180deg);}   </span>
295.  <span>    100%    {transform: translate(-</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(-180deg);}   </span>
296.  <span>    }   </span>
297.  <span>@-webkit-keyframes animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
298.  <span>    {   </span>
299.  <span>    0%      {-webkit-transform: translate(-</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
300.  <span>    25%     {-webkit-transform: rotate(0deg);}   </span>
301.  <span>    50%     {-webkit-transform: rotate(-180deg);}   </span>
302.  <span>    100%    {-webkit-transform: translate(-</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(-180deg);}   </span>
303.  <span>    }   </span>
304.  <span>@-moz-keyframes animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
305.  <span>    {   </span>
306.  <span>    0%      {-moz-transform: translate(-</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
307.  <span>    25%     {-moz-transform: rotate(0deg);}   </span>
308.  <span>    50%     {-moz-transform: rotate(-180deg);}   </span>
309.  <span>    100%    {-moz-transform: translate(-</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(-180deg);}   </span>
310.  <span>    }   </span>
311.  <span>@-o-keyframes animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
312.  <span>    {   </span>
313.  <span>    0%      {-o-transform: translate(-</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
314.  <span>    25%     {-o-transform: rotate(0deg);}   </span>
315.  <span>    50%     {-o-transform: rotate(-180deg);}   </span>
316.  <span>    100%    {-o-transform: translate(-</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(-180deg);}   </span>
317.  <span>    }      </span>
318.  <span>@-ms-keyframes animated-robot-hand-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
319.  <span>    {   </span>
320.  <span>    0%      {-ms-transform: translate(-</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
321.  <span>    25%     {-ms-transform: rotate(0deg);}   </span>
322.  <span>    50%     {-ms-transform: rotate(180deg);}   </span>
323.  <span>    100%    {-ms-transform: translate(-</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(180deg);}   </span>
324.  <span>    }                  </span>
325.  <span>@keyframes animated-robot-hand-</span><span class="string">left</span><span>  </span>
326.  <span>    {   </span>
327.  <span>    0%      {transform: translate(</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
328.  <span>    25%     {transform: rotate(0deg);}   </span>
329.  <span>    50%     {transform: rotate(180deg);}   </span>
330.  <span>    100%    {transform: translate(</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(180deg);}   </span>
331.  <span>    }   </span>
332.  <span>@-webkit-keyframes animated-robot-hand-</span><span class="string">left</span><span>  </span>
333.  <span>    {   </span>
334.  <span>    0%      {-webkit-transform: translate(</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
335.  <span>    25%     {-webkit-transform: rotate(0deg);}   </span>
336.  <span>    50%     {-webkit-transform: rotate(180deg);}   </span>
337.  <span>    100%    {-webkit-transform: translate(</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(180deg);}   </span>
338.  <span>    }   </span>
339.  <span>@-moz-keyframes animated-robot-hand-</span><span class="string">left</span><span>  </span>
340.  <span>    {   </span>
341.  <span>    0%      {-moz-transform: translate(</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
342.  <span>    25%     {-moz-transform: rotate(0deg);}   </span>
343.  <span>    50%     {-moz-transform: rotate(180deg);}   </span>
344.  <span>    100%    {-moz-transform: translate(</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(180deg);}   </span>
345.  <span>    }   </span>
346.  <span>@-o-keyframes animated-robot-hand-</span><span class="string">left</span><span>  </span>
347.  <span>    {   </span>
348.  <span>    0%      {-o-transform: translate(</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
349.  <span>    25%     {-o-transform: rotate(0deg);}   </span>
350.  <span>    50%     {-o-transform: rotate(180deg);}   </span>
351.  <span>    100%    {-o-transform: translate(</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(180deg);}   </span>
352.  <span>    }   </span>
353.  <span>@-ms-keyframes animated-robot-hand-</span><span class="string">left</span><span>  </span>
354.  <span>    {   </span>
355.  <span>    0%      {-ms-transform: translate(</span><span class="string">52px</span><span>,</span><span class="string">0px</span><span>);}   </span>
356.  <span>    25%     {-ms-transform: rotate(0deg);}   </span>
357.  <span>    50%     {-ms-transform: rotate(-180deg);}   </span>
358.  <span>    100%    {-ms-transform: translate(</span><span class="string">10px</span><span>,</span><span class="string">120px</span><span>) rotate(-180deg);}   </span>
359.  <span>    }                  </span>
360.  <span>  </span>
361.  <span>  </span>
362.  <span>.android .foot:after,   </span>
363.  <span>.android .foot:before{   </span>
364.  <span>  </span><span class="keyword">content</span><span>:</span><span class="string">''</span><span>;   </span>
365.  <span>  </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
366.  <span>  </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
367.  <span>  </span><span class="keyword">width</span><span>:</span><span class="string">44px</span><span>;   </span>
368.  <span>  </span><span class="keyword">height</span><span>:</span><span class="string">110px</span><span>;   </span>
369.  <span>  </span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">90px</span><span>;   </span>
370.  <span>  </span><span class="string">left</span><span>:</span><span class="string">40px</span><span>;   </span>
371.  <span>  </span><span class="keyword">background</span><span>: </span><span class="colors">#A5C63B</span><span>;   </span>
372.  <span>  </span><span class="keyword">border</span><span>-radius:</span><span class="string">44px</span><span>;   </span>
373.  <span>}   </span>
374.  <span>  </span>
375.  <span>.android .foot:after   </span>
376.  <span>{   </span>
377.  <span>  transform-origin:0 0;   </span>
378.  <span>  -webkit-transform-origin:0 0;   </span>
379.  <span>  -moz-transform-origin:0 0;   </span>
380.  <span>  -o-transform-origin:0 0;   </span>
381.  <span>  -ms-transform-origin:0 0;   </span>
382.  <span>  animation:animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
383.  <span>  -webkit-animation:animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
384.  <span>  -moz-animation:animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
385.  <span>  -o-animation:animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
386.  <span>  -ms-animation:animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span> 5s ease 1s infinite alternate;   </span>
387.  <span>}   </span>
388.  <span>.android .foot:before   </span>
389.  <span>{   </span>
390.  <span>  transform-origin:</span><span class="string">44px</span><span> 0;   </span>
391.  <span>  -webkit-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
392.  <span>  -moz-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
393.  <span>  -o-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
394.  <span>  -ms-transform-origin:</span><span class="string">44px</span><span> 0;   </span>
395.  <span>  animation:animated-robot-foot-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
396.  <span>  -webkit-animation:animated-robot-foot-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
397.  <span>  -moz-animation:animated-robot-foot-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
398.  <span>  -o-animation:animated-robot-foot-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
399.  <span>  -ms-animation:animated-robot-foot-</span><span class="string">left</span><span> 5s ease 1s infinite alternate;   </span>
400.  <span>}   </span>
401.  <span>  </span>
402.  <span>@keyframes animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
403.  <span>    {   </span>
404.  <span>    0%      {transform: rotate(0deg);}   </span>
405.  <span>    25%     {transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
406.  <span>    50%     {transform: rotate(-90deg);}   </span>
407.  <span>    100%    {transform: translate(-</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
408.  <span>    }   </span>
409.  <span>@-webkit-keyframes animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
410.  <span>    {   </span>
411.  <span>    0%      {-webkit-transform: rotate(0deg);}   </span>
412.  <span>    25%     {-webkit-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
413.  <span>    50%     {-webkit-transform: rotate(-90deg);}   </span>
414.  <span>    100%    {-webkit-transform: translate(-</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
415.  <span>    }   </span>
416.  <span>@-moz-keyframes animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
417.  <span>    {   </span>
418.  <span>    0%      {-moz-transform: rotate(0deg);}   </span>
419.  <span>    25%     {-moz-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
420.  <span>    50%     {-moz-transform: rotate(-90deg);}   </span>
421.  <span>    100%    {-moz-transform: translate(-</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
422.  <span>    }   </span>
423.  <span>@-o-keyframes animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
424.  <span>    {   </span>
425.  <span>    0%      {-o-transform: rotate(0deg);}   </span>
426.  <span>    25%     {-o-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
427.  <span>    50%     {-o-transform: rotate(-90deg);}   </span>
428.  <span>    100%    {-o-transform: translate(-</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
429.  <span>    }   </span>
430.  <span>@-ms-keyframes animated-robot-foot-</span><span class="keyword">right</span><span class="string">right</span><span>  </span>
431.  <span>    {   </span>
432.  <span>    0%      {-ms-transform: rotate(0deg);}   </span>
433.  <span>    25%     {-ms-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
434.  <span>    50%     {-ms-transform: rotate(-90deg);}   </span>
435.  <span>    100%    {-ms-transform: translate(-</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
436.  <span>    }                  </span>
437.  <span>@keyframes animated-robot-foot-</span><span class="string">left</span><span>  </span>
438.  <span>    {   </span>
439.  <span>    0%      {transform: rotate(0deg);}   </span>
440.  <span>    25%     {transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
441.  <span>    50%     {transform: rotate(90deg);}   </span>
442.  <span>    100%    {transform: translate(</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
443.  <span>    }   </span>
444.  <span>@-webkit-keyframes animated-robot-foot-</span><span class="string">left</span><span>  </span>
445.  <span>    {   </span>
446.  <span>    0%      {-webkit-transform: rotate(0deg);}   </span>
447.  <span>    25%     {-webkit-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
448.  <span>    50%     {-webkit-transform: rotate(90deg);}   </span>
449.  <span>    100%    {-webkit-transform: translate(</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
450.  <span>    }   </span>
451.  <span>  </span>
452.  <span>@-o-keyframes animated-robot-foot-</span><span class="string">left</span><span>  </span>
453.  <span>    {   </span>
454.  <span>    0%      {-o-transform: rotate(0deg);}   </span>
455.  <span>    25%     {-o-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
456.  <span>    50%     {-o-transform: rotate(90deg);}   </span>
457.  <span>    100%    {-o-transform: translate(</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
458.  <span>    }   </span>
459.  <span>@-moz-keyframes animated-robot-foot-</span><span class="string">left</span><span>  </span>
460.  <span>    {   </span>
461.  <span>    0%      {-moz-transform: rotate(0deg);}   </span>
462.  <span>    25%     {-moz-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
463.  <span>    50%     {-moz-transform: rotate(90deg);}   </span>
464.  <span>    100%    {-moz-transform: translate(</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
465.  <span>    }   </span>
466.  <span>@-ms-keyframes animated-robot-foot-</span><span class="string">left</span><span>  </span>
467.  <span>    {   </span>
468.  <span>    0%      {-ms-transform: rotate(0deg);}   </span>
469.  <span>    25%     {-ms-transform: rotate(0deg);</span><span class="keyword">bottom</span><span class="string">bottom</span><span>:-</span><span class="string">120px</span><span>;}   </span>
470.  <span>    50%     {-ms-transform: rotate(90deg);}   </span>
471.  <span>    100%    {-ms-transform: translate(</span><span class="string">50px</span><span>,-</span><span class="string">120px</span><span>);}   </span>
472.  <span>    }                  </span>
473.  <span>.android .foot:after{   </span>
474.  <span>  </span><span class="string">left</span><span>:</span><span class="string">auto</span><span>;   </span>
475.  <span>  </span><span class="keyword">right</span><span class="string">right</span><span>:</span><span class="string">40px</span><span>;   </span>
476.  <span>}  </span>
</div>
&nbsp;

**作者原创文章，转载请注明出处: <span style="color: #0000ff;">[<span style="color: #0000ff;">纯css做的安卓开机动画 | 三叶草</span>](http://bloglaotou.duapp.com/a-pure-css3-android-animate.html "本文固定链接 http://bloglaotou.duapp.com/a-pure-css3-android-animate.html")[<span style="color: #0000ff;"> </span>](http://bloglaotou.duapp.com/a-pure-css3-android-animate.html#)</span>**