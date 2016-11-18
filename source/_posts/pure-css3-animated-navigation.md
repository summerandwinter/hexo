---
title: 纯CSS3带动画效果导航菜单
tags:
  - css
  - 二级菜单
  - 动画
  - 导航
  - 质感
id: 323
categories:
  - CSS3
date: 2013-09-14 14:11:02
---

随着互联网的发展，网页能表现的东西越来越多。由最开始单纯的文字和链接构成的网页，到后来的表格布局，再到div+css模式，现在发展到了html+css3。网页能表达的东西越来越多，css3兴起已经很多年了，不多由于国内网站要求对IE的兼容，html5+css3的发展很缓慢。<!--more-->

html5+css3的出现给前端开发者提供了更多的可能性，以前很多只能通过JS实现的效果用纯粹的css3就能实现了。

下面介绍一个博主在css3学习过程中写的一个纯css3实现的带动画效果的导航菜单。

下面是效果图：

[![pure-css3-animated-navigation](http://bcs.duapp.com/xiaopihai/2013/09/pure-css3-animated-navigation-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/pure-css3-animated-navigation.jpg)

&nbsp;

[查看示例](http://tutorial.duapp.com/lab/navigation/index.htm)（**<span style="color: #339966;">请在支持css3的浏览器中查看效果，最新版的chrome浏览器下效果最佳。</span>**）

[download id="4"]

<span style="color: #ff0000;">**特别声明此demo为博主原创，可以下载免费使用。**</span>

<span style="text-indent: 2em;">话不多说，直接贴源码：</span>

<span style="color: #339966;">**css:**</span>
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>*{   </span></span>
2.  <span>    </span><span class="keyword">margin</span><span>:0;   </span>
3.  <span>    </span><span class="keyword">padding</span><span>:0;   </span>
4.  <span>}   </span>
5.  <span>  </span>
6.  <span>html{   </span>
7.  <span>    </span><span class="keyword">background</span><span>:</span><span> </span><span class="colors">#333d43</span><span>;   </span>
8.  <span>       </span>
9.  <span>}   </span>
10.  <span>footer a{   </span>
11.  <span>    </span><span class="keyword">color</span><span>:</span><span class="colors">#fff</span><span>;   </span>
12.  <span>    </span><span class="keyword">text-decoration</span><span>:</span><span class="string">none</span><span>;   </span>
13.  <span>}   </span>
14.  <span>footer a:hover{   </span>
15.  <span>    </span><span class="keyword">text-decoration</span><span>:</span><span class="string">underline</span><span>;   </span>
16.  <span>    }   </span>
17.  <span>body{   </span>
18.  <span>    </span><span class="keyword">min-height</span><span>:</span><span class="string">500px</span><span>;   </span>
19.  <span>    </span><span class="keyword">font</span><span>:</span><span class="string">14px</span><span>/1.3 'Microsoft YaHei';   </span>
20.  <span>    </span><span class="keyword">color</span><span>:</span><span class="colors">#888</span><span>;   </span>
21.  <span>    </span><span class="keyword">padding</span><span>:</span><span class="string">10px</span><span>;   </span>
22.  <span>}   </span>
23.  <span>nav{   </span>
24.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">relative</span><span>;   </span>
25.  <span>    </span><span class="keyword">border</span><span>-radius:</span><span class="string">5px</span><span>;   </span>
26.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
27.  <span>    </span><span class="keyword">margin</span><span>: </span><span class="string">30px</span><span> </span><span class="string">auto</span><span> 0;   </span>
28.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">800px</span><span>;   </span>
29.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#fff</span><span>;   </span>
30.  <span>    </span><span class="keyword">border</span><span>-radius:</span><span class="string">5px</span><span>;   </span>
31.  <span>    box-shadow: </span><span class="string">1px</span><span> </span><span class="string">1px</span><span> </span><span class="string">33px</span><span> </span><span class="colors">#fff</span><span>;   </span>
32.  <span>    }   </span>
33.  <span>.homeIcon{   </span>
34.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">relative</span><span>;   </span>
35.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
36.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">50px</span><span>;   </span>
37.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">40px</span><span>;   </span>
38.  <span>    }   </span>
39.  <span class="colors">#home</span><span>:hover &gt; a .home-</span><span class="string">top</span><span>{   </span>
40.  <span>    </span><span class="keyword">border-bottom</span><span>:</span><span class="string">10px</span><span> </span><span class="colors">#fff</span><span> </span><span class="string">solid</span><span>;   </span>
41.  <span>    }      </span>
42.  <span class="colors">#home</span><span>:hover &gt; a .home-</span><span class="string">top</span><span>-r{   </span>
43.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#fff</span><span>;   </span>
44.  <span>    }   </span>
45.  <span class="colors">#home</span><span>:hover &gt; a .home-door-l{   </span>
46.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#fff</span><span>;   </span>
47.  <span>    }   </span>
48.  <span class="colors">#home</span><span>:hover &gt; a .home-door-r{   </span>
49.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#fff</span><span>;   </span>
50.  <span>    }              </span>
51.  <span>.home-</span><span class="string">top</span><span>{   </span>
52.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
53.  <span>    </span><span class="string">left</span><span>:</span><span class="string">15px</span><span>;   </span>
54.  <span>    </span><span class="string">top</span><span>:</span><span class="string">0px</span><span>;   </span>
55.  <span>    </span><span class="keyword">border-left</span><span>:</span><span class="string">10px</span><span> </span><span class="string">transparent</span><span> </span><span class="string">solid</span><span>;   </span>
56.  <span>    </span><span class="keyword">border-right</span><span>:</span><span class="string">10px</span><span> </span><span class="string">transparent</span><span> </span><span class="string">solid</span><span>;   </span>
57.  <span>    </span><span class="keyword">border-top</span><span>:</span><span class="string">10px</span><span> </span><span class="string">transparent</span><span> </span><span class="string">solid</span><span>;   </span>
58.  <span>    </span><span class="keyword">border-bottom</span><span>:</span><span class="string">10px</span><span> </span><span class="colors">#C2C2C2</span><span> </span><span class="string">solid</span><span>;   </span>
59.  <span>    box-shadow: </span><span class="string">0px</span><span> </span><span class="string">1px</span><span> </span><span class="string">0px</span><span> </span><span class="colors">#000</span><span>;   </span>
60.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">0px</span><span>;   </span>
61.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">0px</span><span>;    </span>
62.  <span>    }      </span>
63.  <span>.home-</span><span class="string">top</span><span>-r{   </span>
64.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
65.  <span>    </span><span class="string">left</span><span>:</span><span class="string">27px</span><span>;   </span>
66.  <span>    </span><span class="string">top</span><span>:</span><span class="string">13px</span><span>;   </span>
67.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">4px</span><span>;   </span>
68.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">6px</span><span>;   </span>
69.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#C2C2C2</span><span>;   </span>
70.  <span>    }   </span>
71.  <span>.home-door-l{   </span>
72.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
73.  <span>    </span><span class="string">left</span><span>:</span><span class="string">18px</span><span>;   </span>
74.  <span>    </span><span class="string">top</span><span>:</span><span class="string">20px</span><span>;   </span>
75.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">5px</span><span>;   </span>
76.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">6px</span><span>;   </span>
77.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#C2C2C2</span><span>;   </span>
78.  <span>    }   </span>
79.  <span>.home-door-r{   </span>
80.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
81.  <span>    </span><span class="string">left</span><span>:</span><span class="string">27px</span><span>;   </span>
82.  <span>    </span><span class="string">top</span><span>:</span><span class="string">20px</span><span>;   </span>
83.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">5px</span><span>;   </span>
84.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">6px</span><span>;   </span>
85.  <span>    </span><span class="keyword">background</span><span>:</span><span class="colors">#C2C2C2</span><span>;   </span>
86.  <span>    }              </span>
87.  <span>.fancyNav{   </span>
88.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
89.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">relative</span><span>;   </span>
90.  <span>    </span><span class="keyword">border</span><span>-radius:</span><span class="string">5px</span><span>;   </span>
91.  <span>    </span><span class="keyword">background-image</span><span>: linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);   </span>
92.  <span>    </span><span class="keyword">background-image</span><span>: -webkit-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);   </span>
93.  <span>    </span><span class="keyword">background-image</span><span>: -moz-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);   </span>
94.  <span>    </span><span class="keyword">background-image</span><span>: -o-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);   </span>
95.  <span>    </span><span class="keyword">background-image</span><span>: -ms-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);   }   </span>
96.  <span>.fancyNav li{   </span>
97.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">relative</span><span>;   </span>
98.  <span>  </span>
99.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">40px</span><span>;   </span>
100.  <span>    </span><span class="keyword">line-height</span><span>:</span><span class="string">40px</span><span>;   </span>
101.  <span>    </span><span class="keyword">padding</span><span>:</span><span class="string">0px</span><span> </span><span class="string">20px</span><span>;   </span>
102.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
103.  <span>    </span><span class="keyword">float</span><span>:</span><span class="string">left</span><span>;   </span>
104.  <span>    </span><span class="keyword">border-right</span><span>:</span><span class="string">1px</span><span> </span><span class="colors">#000</span><span> </span><span class="string">solid</span><span>;   </span>
105.  <span>    }   </span>
106.  <span>.fancyNav li:hover{   </span>
107.  <span>    </span><span class="keyword">background</span><span>:rgba(10, 5, 5, 0.2);   </span>
108.  <span>        }      </span>
109.  <span>.fancyNav li ul{   </span>
110.  <span>    </span><span class="keyword">position</span><span>:</span><span class="string">absolute</span><span>;   </span>
111.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">none</span><span>;   </span>
112.  <span>    </span><span class="string">left</span><span>:</span><span class="string">0px</span><span>;   </span>
113.  <span>    </span><span class="keyword">overflow</span><span>:</span><span class="string">hidden</span><span>;   </span>
114.  <span>    }   </span>
115.  <span>.fancyNav li:hover&gt;ul{   </span>
116.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
117.  <span>    animation:animated .5s ease 0s 1 alternate;   </span>
118.  <span>    -webkit-animation:animated .5s ease 0s 1 alternate;   </span>
119.  <span>    -moz-animation:animated .5s ease 0s 1 alternate;   </span>
120.  <span>    -ms-animation:animated .5s ease 0s 1 alternate;    </span>
121.  <span>    -o-animation:animated .5s ease 0s 1 alternate;}   </span>
122.  <span>@keyframes animated   </span>
123.  <span>    {   </span>
124.  <span>    0%      {transform: rotate(0deg);opacity:0;}   </span>
125.  <span>    100%    {transform: rotate(-360deg);opacity:1;}   </span>
126.  <span>    }   </span>
127.  <span>@-webkit-keyframes animated   </span>
128.  <span>    {   </span>
129.  <span>    0%      {-webkit-transform: rotate(0deg);opacity:0;}   </span>
130.  <span>    100%    {-webkit-transform: rotate(-360deg);opacity:1;}   </span>
131.  <span>    }   </span>
132.  <span>@-moz-keyframes animated   </span>
133.  <span>    {   </span>
134.  <span>    0%      {-moz-transform: rotate(0deg);opacity:0;}   </span>
135.  <span>    100%    {-moz-transform: rotate(-360deg);opacity:1;}   </span>
136.  <span>    }   </span>
137.  <span>@-o-keyframes animated   </span>
138.  <span>    {   </span>
139.  <span>    0%      {-o-transform: rotate(0deg);opacity:0;}   </span>
140.  <span>    100%    {-o-transform: rotate(-360deg);opacity:1;}   </span>
141.  <span>    }   </span>
142.  <span>@-ms-keyframes animated   </span>
143.  <span>    {   </span>
144.  <span>    0%      {-ms-transform: rotate(0deg);opacity:0;}   </span>
145.  <span>    100%    {-ms-transform: rotate(-360deg);opacity:1;}   </span>
146.  <span>    }   </span>
147.  <span>.fancyNav li ul li   </span>
148.  <span>{   </span>
149.  <span>    </span><span class="keyword">display</span><span>:</span><span class="string">block</span><span>;   </span>
150.  <span>    </span><span class="keyword">margin</span><span>:</span><span class="string">0px</span><span>;   </span>
151.  <span>    </span><span class="keyword">border-top</span><span>: </span><span class="string">1px</span><span> </span><span class="string">solid</span><span> </span><span class="colors">#989898</span><span>;   </span>
152.  <span>    </span><span class="keyword">border-bottom</span><span>: </span><span class="string">1px</span><span> </span><span class="string">solid</span><span> </span><span class="colors">#343434</span><span>;   </span>
153.  <span>    </span><span class="keyword">background</span><span>:rgba(10, 5, 5, 0.45);   </span>
154.  <span>    </span><span class="keyword">height</span><span>:</span><span class="string">30px</span><span>;   </span>
155.  <span>    </span><span class="keyword">line-height</span><span>:</span><span class="string">30px</span><span>;   </span>
156.  <span>    </span><span class="keyword">width</span><span>:</span><span class="string">60px</span><span>;   </span>
157.  <span>}      </span>
158.  <span>.fancyNav li ul li:hover{   </span>
159.  <span>    </span><span class="keyword">background</span><span>:rgba(10, 5, 5, 0.9);   </span>
160.  <span>    }   </span>
161.  <span>li a{   </span>
162.  <span>    </span><span class="keyword">color</span><span>:</span><span class="colors">#fff</span><span>;   </span>
163.  <span>    </span><span class="keyword">text-decoration</span><span>:</span><span class="string">none</span><span>;   </span>
164.  <span>    </span><span class="keyword">text-shadow</span><span>: </span><span class="string">0px</span><span> </span><span class="string">1px</span><span> </span><span class="string">0px</span><span> </span><span class="colors">#000</span><span>  </span>
165.  <span>    }   </span>
166.  <span>input[type=search] {   </span>
167.  <span>-webkit-appearance: </span><span class="string">none</span><span>;   </span>
168.  <span class="keyword">outline</span><span>: </span><span class="string">none</span><span>;   </span>
169.  <span>}   </span>
170.  <span class="colors">#search</span><span>form {   </span>
171.  <span class="keyword">position</span><span>: </span><span class="string">absolute</span><span>;   </span>
172.  <span class="keyword">right</span><span class="string">right</span><span>: </span><span class="string">10px</span><span>;   </span>
173.  <span class="keyword">bottom</span><span class="string">bottom</span><span>: </span><span class="string">6px</span><span>;   </span>
174.  <span class="keyword">z-index</span><span>: 100;   </span>
175.  <span class="keyword">width</span><span>: </span><span class="string">160px</span><span>;   </span>
176.  <span>}   </span>
177.  <span class="colors">#search</span><span>form #s {   </span>
178.  <span class="keyword">outline</span><span>:</span><span class="string">none</span><span>;              </span>
179.  <span class="keyword">width</span><span>: </span><span class="string">80px</span><span>;   </span>
180.  <span class="keyword">float</span><span>: </span><span class="keyword">right</span><span class="string">right</span><span>;   </span>
181.  <span class="keyword">background</span><span>: </span><span class="colors">#fff</span><span>;   </span>
182.  <span class="keyword">border</span><span>: </span><span class="string">none</span><span>;   </span>
183.  <span class="keyword">padding</span><span>: </span><span class="string">6px</span><span> </span><span class="string">10px</span><span>;   </span>
184.  <span>-webkit-</span><span class="keyword">border</span><span>-radius: </span><span class="string">5px</span><span>;   </span>
185.  <span>-moz-</span><span class="keyword">border</span><span>-radius: </span><span class="string">5px</span><span>;   </span>
186.  <span class="keyword">border</span><span>-radius: </span><span class="string">5px</span><span>;   </span>
187.  <span>-webkit-box-shadow: </span><span class="string">inset</span><span> 0 </span><span class="string">1px</span><span> </span><span class="string">2px</span><span> rgba(0,0,0,.2);   </span>
188.  <span>-moz-box-shadow: </span><span class="string">inset</span><span> 0 </span><span class="string">1px</span><span> </span><span class="string">2px</span><span> rgba(0,0,0,.2);   </span>
189.  <span>box-shadow: </span><span class="string">inset</span><span> 0 </span><span class="string">1px</span><span> </span><span class="string">2px</span><span> rgba(0,0,0,.2);   </span>
190.  <span>-webkit-transition: </span><span class="keyword">width</span><span> .7s;   </span>
191.  <span>-moz-transition: </span><span class="keyword">width</span><span> .7s;   </span>
192.  <span>transition: </span><span class="keyword">width</span><span> .7s;   </span>
193.  <span>}   </span>
194.  <span class="colors">#search</span><span>form #s:focus {   </span>
195.  <span class="keyword">width</span><span>: </span><span class="string">150px</span><span>;   </span>
196.  <span>}   </span>
197.  <span>footer {   </span>
198.  <span class="keyword">margin-top</span><span>:</span><span class="string">400px</span><span>;      </span>
199.  <span class="keyword">color</span><span>: </span><span class="colors">#BBBBBB</span><span>;   </span>
200.  <span class="keyword">font-size</span><span>: </span><span class="string">15px</span><span>;   </span>
201.  <span class="keyword">line-height</span><span>: 1.6;   </span>
202.  <span class="keyword">padding</span><span>: </span><span class="string">60px</span><span> </span><span class="string">20px</span><span> 0;   </span>
203.  <span class="keyword">text-align</span><span>: </span><span class="string">center</span><span>;   </span>
204.  <span class="keyword">display</span><span>: </span><span class="string">block</span><span>;   </span>
205.  <span>}  </span>
</div>
**<span style="color: #339966;">html:</span>**
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>&lt;!DOCTYPE html&gt;   </span></span>
2.  <span>&lt;html&gt;   </span>
3.  <span>    &lt;head&gt;   </span>
4.  <span>        &lt;meta charset=</span><span class="string">"utf-8"</span><span> /&gt;   </span>
5.  <span>           </span>
6.  <span>        &lt;title&gt;CSS3 Animated Navigation Menu | Tutorialzine Demo&lt;/title&gt;   </span>
7.  <span>           </span>
8.  <span>        &lt;!-- Our CSS stylesheet file --&gt;   </span>
9.  <span>        &lt;link rel=</span><span class="string">"stylesheet"</span><span> href=</span><span class="string">"assets/css/styles.css"</span><span> /&gt;   </span>
10.  <span>           </span>
11.  <span>        &lt;!-- Including the Lobster font from Google's Font Directory --&gt;   </span>
12.  <span>        &lt;link rel=</span><span class="string">"stylesheet"</span><span> href=</span><span class="string">"http://fonts.googleapis.com/css?family=Lobster"</span><span> /&gt;   </span>
13.  <span>           </span>
14.  <span>        &lt;!-- Enabling HTML5 support </span><span class="keyword">for</span><span> Internet Explorer --&gt;   </span>
15.  <span>        &lt;!--[</span><span class="keyword">if</span><span> lt IE 9]&gt;   </span>
16.  <span>          &lt;script src=</span><span class="string">"http://html5shiv.googlecode.com/svn/trunk/html5.js"</span><span>&gt;&lt;/script&gt;   </span>
17.  <span>        &lt;![</span><span class="keyword">endif</span><span>]--&gt;   </span>
18.  <span>    &lt;/head&gt;   </span>
19.  <span>       </span>
20.  <span>    &lt;body&gt;   </span>
21.  <span>           &lt;form id=</span><span class="string">"searchform"</span><span>&gt;   </span>
22.  <span>            &lt;input type=</span><span class="string">"search"</span><span> id=</span><span class="string">"s"</span><span> placeholder=</span><span class="string">"Search"</span><span>&gt;   </span>
23.  <span>            &lt;/form&gt;   </span>
24.  <span>        &lt;nav&gt;   </span>
25.  <span>            &lt;ul </span><span class="keyword">class</span><span>=</span><span class="string">"fancyNav"</span><span>&gt;   </span>
26.  <span>                &lt;li id=</span><span class="string">"home"</span><span>&gt;&lt;a href=</span><span class="string">"#home"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"homeIcon"</span><span>&gt;&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"home-top"</span><span>&gt;&lt;/div&gt;&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"home-top-r"</span><span>&gt;&lt;/div&gt;&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"home-door-l"</span><span>&gt;&lt;/div&gt;&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"home-door-r"</span><span>&gt;&lt;/div&gt;&lt;/a&gt;&lt;/li&gt;   </span>
27.  <span>                &lt;li id=</span><span class="string">"news"</span><span>&gt;&lt;a href=</span><span class="string">"#news"</span><span>&gt;前端设计&lt;/a&gt;   </span>
28.  <span>                &lt;ul&gt;   </span>
29.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;HTML5&lt;/a&gt;&lt;/li&gt;   </span>
30.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;CSS3&lt;/a&gt;&lt;/li&gt;   </span>
31.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;JQUERY&lt;/a&gt;&lt;/li&gt;   </span>
32.  <span>                &lt;/ul&gt;   </span>
33.  <span>                &lt;/li&gt;   </span>
34.  <span>                &lt;li id=</span><span class="string">"about"</span><span>&gt;&lt;a href=</span><span class="string">"#about"</span><span>&gt;编程语言&lt;/a&gt;   </span>
35.  <span>                                &lt;ul&gt;   </span>
36.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;PHP&lt;/a&gt;&lt;/li&gt;   </span>
37.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;JAVA&lt;/a&gt;&lt;/li&gt;   </span>
38.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;wordpress&lt;/a&gt;&lt;/li&gt;   </span>
39.  <span>                &lt;li&gt;&lt;a href=</span><span class="string">""</span><span>&gt;CodeIgniter&lt;/a&gt;&lt;/li&gt;   </span>
40.  <span>                &lt;/ul&gt;   </span>
41.  <span>  </span>
42.  <span>                &lt;/li&gt;   </span>
43.  <span>                &lt;li id=</span><span class="string">"services"</span><span>&gt;&lt;a href=</span><span class="string">"#services"</span><span>&gt;生活&lt;/a&gt;   </span>
44.  <span>           </span>
45.  <span>  </span>
46.  <span>                &lt;/li&gt;   </span>
47.  <span>                &lt;li id=</span><span class="string">"contact"</span><span>&gt;&lt;a href=</span><span class="string">"#contact"</span><span>&gt;留言板&lt;/a&gt;   </span>
48.  <span>  </span>
49.  <span>                &lt;/li&gt;   </span>
50.  <span>            &lt;form id=</span><span class="string">"searchform"</span><span>&gt;   </span>
51.  <span>            &lt;input type=</span><span class="string">"search"</span><span> id=</span><span class="string">"s"</span><span> placeholder=</span><span class="string">"Search"</span><span>&gt;   </span>
52.  <span>            &lt;/form&gt;   </span>
53.  <span>            &lt;div style=</span><span class="string">"display:block;clear:both;"</span><span>&gt;&lt;/div&gt;   </span>
54.  <span>            &lt;/ul&gt;   </span>
55.  <span>        &lt;/nav&gt;   </span>
56.  <span>  </span>
57.  <span>       &lt;footer&gt;Tutorial by &amp;nbsp;&amp;nbsp;&lt;a href=</span><span class="string">"http://bloglaotou.duapp.com"</span><span> target=</span><span class="string">"_blank"</span><span>&gt;sanyecao&lt;/a&gt;&amp;nbsp;&amp;nbsp;©2013&lt;/footer&gt;        </span>
58.  <span>    &lt;/body&gt;   </span>
59.  <span>&lt;/html&gt;   </span>
</div>
&nbsp;

**<span style="color: #ff0000;"><span style="line-height: 24px;">作者原创文章，转载请注明出处: </span><span style="color: #0000ff;">[<span style="color: #0000ff;">纯CSS3带动画效果导航菜单 | 三叶草</span>](http://bloglaotou.duapp.com/pure-css3-animated-navigation.html "本文固定链接 http://bloglaotou.duapp.com/pure-css3-animated-navigation.html")[<span style="color: #0000ff;"> </span>](http://bloglaotou.duapp.com/pure-css3-animated-navigation.html#)</span></span>**

&nbsp;
<div id="demo"></div>