---
title: CSS3模拟的iphone键盘
tags:
  - css3
  - iphone
  - 键盘
id: 11
categories:
  - CSS3
date: 2013-09-03 15:09:54
---

最终的效果图（仅支持FF 3.6、Chrome 4、Safari 4）：

[![css3-iphone-keyboard12](http://bcs.duapp.com/xiaopihai/2013/09/css3-iphone-keyboard12-240x150.jpg)<!--more-->](http://bcs.duapp.com/xiaopihai/2013/09/css3-iphone-keyboard12.jpg)
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>&lt;!DOCTYPE html PUBLIC </span><span class="string">"-//W3C//DTD XHTML 1.0 Transitional//EN"</span><span> </span><span class="string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"</span><span>&gt;   </span></span>
2.  <span>&lt;html xmlns=</span><span class="string">"http://www.w3.org/1999/xhtml"</span><span>&gt;   </span>
3.  <span> &lt;head&gt;   </span>
4.  <span>  &lt;title&gt;使用CSS3模拟的iphone键盘&lt;/title&gt;   </span>
5.  <span>  &lt;meta name=</span><span class="string">"generator"</span><span> content=</span><span class="string">"editplus"</span><span> /&gt;   </span>
6.  <span>  &lt;meta name=</span><span class="string">"author"</span><span> content=</span><span class="string">""</span><span> /&gt;   </span>
7.  <span>  &lt;meta name=</span><span class="string">"keywords"</span><span> content=</span><span class="string">""</span><span> /&gt;   </span>
8.  <span>  &lt;meta name=</span><span class="string">"description"</span><span> content=</span><span class="string">""</span><span> /&gt;   </span>
9.  <span>  &lt;meta http-equiv=</span><span class="string">"content-type"</span><span> content=</span><span class="string">"text/html;charset=utf-8"</span><span>&gt;   </span>
10.  <span>  </span>
11.  <span>&lt;style type=</span><span class="string">"text/css"</span><span>&gt;   </span>
12.  <span>@font-face {   </span>
13.  <span>    font-family: 'iPhone keyboard';   </span>
14.  <span>    src: url(http:</span><span class="comment">//cahty.googlecode.com/svn/trunk/css/iphone-keyboard.ttf); </span><span>  </span>
15.  <span>}   </span>
16.  <span>  </span>
17.  <span>body {   </span>
18.  <span>    margin:0;   </span>
19.  <span>    color:gray;   </span>
20.  <span>    font-family:Helvetica, Arial, sans-serif;   </span>
21.  <span>}   </span>
22.  <span>  </span>
23.  <span>#iphone-keyboard {   </span>
24.  <span>    max-width:480px;   </span>
25.  <span>    margin:10px auto;   </span>
26.  <span>    padding:0;   </span>
27.  <span>    overflow:hidden;   </span>
28.  <span>    border-top:1px solid #3A3D42;   </span>
29.  <span>  </span>
30.  <span>    background:#757D8A;   </span>
31.  <span>    background-image:-moz-linear-gradient(#9098A3, #454f5d);   </span>
32.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#9098A3), to(#454f5d));   </span>
33.  <span>  </span>
34.  <span>    box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   </span>
35.  <span>    -moz-box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   </span>
36.  <span>    -webkit-box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   </span>
37.  <span>}   </span>
38.  <span>  </span>
39.  <span>#iphone-keyboard li {   </span>
40.  <span>    text-align:center;   </span>
41.  <span>    margin:.5em .1em .25em;   </span>
42.  <span>    list-style:none;   </span>
43.  <span>}   </span>
44.  <span>  </span>
45.  <span>#iphone-keyboard li:first-child {   </span>
46.  <span>    margin-top:.3em;   </span>
47.  <span>}   </span>
48.  <span>  </span>
49.  <span>#iphone-keyboard button,   </span>
50.  <span>#iphone-keyboard button.specialkey:active {   </span>
51.  <span>    color:#3A3D42;   </span>
52.  <span>  </span>
53.  <span>    text-decoration:none;   </span>
54.  <span>    text-align:center;   </span>
55.  <span>    text-shadow:0 1px 1px white;   </span>
56.  <span>    font-weight:bold;   </span>
57.  <span>  </span>
58.  <span>    border:0;   </span>
59.  <span>    border-top:1px solid rgba(255,255,255,.45);           </span>
60.  <span>  </span>
61.  <span>    background:#ECEDEF;   </span>
62.  <span>    background-image:-moz-linear-gradient(#f8f8f9, #dddfe1);   </span>
63.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#f8f8f9), to(#dddfe1));   </span>
64.  <span>  </span>
65.  <span>    border-radius:4px;   </span>
66.  <span>    -moz-border-radius:4px;   </span>
67.  <span>    -webkit-border-radius:4px;   </span>
68.  <span>  </span>
69.  <span>    box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   </span>
70.  <span>    -moz-box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   </span>
71.  <span>    -webkit-box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   </span>
72.  <span>}   </span>
73.  <span>  </span>
74.  <span>#iphone-keyboard button {   </span>
75.  <span>    display:inline-block;   </span>
76.  <span>    width:8.6%;   </span>
77.  <span>    margin:0 .25%;   </span>
78.  <span>    padding:.02em 0 .03em;   </span>
79.  <span>  </span>
80.  <span>    color:black;   </span>
81.  <span>  </span>
82.  <span>    font-size:1.35em;   </span>
83.  <span>    font-family:Helvetica, Arial, sans-serif;   </span>
84.  <span>}   </span>
85.  <span>  </span>
86.  <span>#iphone-keyboard button:active,   </span>
87.  <span>#iphone-keyboard button.space:active {   </span>
88.  <span>    background-image:-moz-linear-gradient(#E2E3E4, #AAADB4);   </span>
89.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#E2E3E4), to(#AAADB4));   </span>
90.  <span>}   </span>
91.  <span>  </span>
92.  <span>#iphone-keyboard button.specialkey {   </span>
93.  <span>    background:#757D8A;   </span>
94.  <span>    background-image:-moz-linear-gradient(#7f8792, #535b68);   </span>
95.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#7f8792), to(#535b68));   </span>
96.  <span>  </span>
97.  <span>    color:white;   </span>
98.  <span>    text-shadow:0 -1px 1px rgba(0,0,0,.5);   </span>
99.  <span>}   </span>
100.  <span>  </span>
101.  <span>#iphone-keyboard button.space,   </span>
102.  <span>#iphone-keyboard button.</span><span class="keyword">return</span><span>,   </span>
103.  <span>#iphone-keyboard button.numbers,   </span>
104.  <span>#iphone-keyboard button.international {   </span>
105.  <span>    font-size:1.04em;   </span>
106.  <span>    padding:.25em 0;   </span>
107.  <span>}   </span>
108.  <span>  </span>
109.  <span>#iphone-keyboard button.shift,   </span>
110.  <span>#iphone-keyboard button.international,   </span>
111.  <span>#iphone-keyboard button.backspace {   </span>
112.  <span>    font-family:'iPhone keyboard', Helvetica, sans-serif;   </span>
113.  <span>}   </span>
114.  <span>  </span>
115.  <span>#iphone-keyboard button.shift,   </span>
116.  <span>#iphone-keyboard button.backspace {   </span>
117.  <span>    background-image:-moz-linear-gradient(#939ba6, #687180);   </span>
118.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#939ba6), to(#687180));   </span>
119.  <span>}   </span>
120.  <span>  </span>
121.  <span>#iphone-keyboard button.shift {   </span>
122.  <span>    width:12%;   </span>
123.  <span>    float:left;   </span>
124.  <span>}   </span>
125.  <span>  </span>
126.  <span>#iphone-keyboard button.backspace {   </span>
127.  <span>    width:12%;   </span>
128.  <span>    float:right;   </span>
129.  <span>}   </span>
130.  <span>  </span>
131.  <span>#iphone-keyboard button.numbers {   </span>
132.  <span>    width:8.4%;   </span>
133.  <span>    margin-right:1.4%;   </span>
134.  <span>    float:left;   </span>
135.  <span>}   </span>
136.  <span>  </span>
137.  <span>#iphone-keyboard button.international {   </span>
138.  <span>    width:8.2%;   </span>
139.  <span>    float:left;   </span>
140.  <span>}   </span>
141.  <span>  </span>
142.  <span>#iphone-keyboard button.space {   </span>
143.  <span>    width:59%;   </span>
144.  <span>    color:#525c69;   </span>
145.  <span>  </span>
146.  <span>    background-image:-moz-linear-gradient(#dddfe2, #b4b8bf);   </span>
147.  <span>    background-image:-webkit-gradient(linear, left top, left bottom, from(#dddfe2), to(#b4b8bf));   </span>
148.  <span>}   </span>
149.  <span>  </span>
150.  <span>#iphone-keyboard button.</span><span class="keyword">return</span><span> {   </span>
151.  <span>    float:right;   </span>
152.  <span>    width:18.9%;   </span>
153.  <span>}   </span>
154.  <span>  </span>
155.  <span>&lt;/style&gt;   </span>
156.  <span>  </span>
157.  <span> &lt;/head&gt;   </span>
158.  <span>  </span>
159.  <span> &lt;body&gt;   </span>
160.  <span>  </span>
161.  <span>&lt;ul id=</span><span class="string">"iphone-keyboard"</span><span>&gt;    </span>
162.  <span>    &lt;li&gt;    </span>
163.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;Q&lt;/button&gt;    </span>
164.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;W&lt;/button&gt;    </span>
165.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;E&lt;/button&gt;    </span>
166.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;R&lt;/button&gt;    </span>
167.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;T&lt;/button&gt;    </span>
168.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;Y&lt;/button&gt;    </span>
169.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;U&lt;/button&gt;    </span>
170.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;I&lt;/button&gt;    </span>
171.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;O&lt;/button&gt;    </span>
172.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;P&lt;/button&gt;    </span>
173.  <span>    &lt;/li&gt;    </span>
174.  <span>    &lt;li&gt;    </span>
175.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;A&lt;/button&gt;    </span>
176.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;S&lt;/button&gt;    </span>
177.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;D&lt;/button&gt;    </span>
178.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;F&lt;/button&gt;    </span>
179.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;G&lt;/button&gt;    </span>
180.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;H&lt;/button&gt;    </span>
181.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;J&lt;/button&gt;    </span>
182.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;K&lt;/button&gt;    </span>
183.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;L&lt;/button&gt;    </span>
184.  <span>    &lt;/li&gt;    </span>
185.  <span>    &lt;li&gt;    </span>
186.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"specialkey shift"</span><span>&gt;S&lt;/button&gt;    </span>
187.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;Z&lt;/button&gt;    </span>
188.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;X&lt;/button&gt;    </span>
189.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;C&lt;/button&gt;    </span>
190.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;V&lt;/button&gt;    </span>
191.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;B&lt;/button&gt;    </span>
192.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;N&lt;/button&gt;    </span>
193.  <span>        &lt;button type=</span><span class="string">"button"</span><span>&gt;M&lt;/button&gt;    </span>
194.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"specialkey backspace"</span><span>&gt;B&lt;/button&gt;    </span>
195.  <span>    &lt;/li&gt;    </span>
196.  <span>    &lt;li&gt;    </span>
197.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"specialkey numbers"</span><span>&gt;123&lt;/button&gt;    </span>
198.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"specialkey international"</span><span>&gt;I&lt;/button&gt;    </span>
199.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"space"</span><span>&gt;space&lt;/button&gt;    </span>
200.  <span>        &lt;button type=</span><span class="string">"button"</span><span> </span><span class="keyword">class</span><span>=</span><span class="string">"specialkey return"</span><span>&gt;</span><span class="keyword">return</span><span>&lt;/button&gt;    </span>
201.  <span>    &lt;/li&gt;    </span>
202.  <span>&lt;/ul&gt;    </span>
203.  <span>  </span>
204.  <span> &lt;/body&gt;   </span>
205.  <span>&lt;/html&gt;  </span>
</div>