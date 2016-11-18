---
title: 纯css写的仿真图书翻页效果
tags:
  - css3
  - 仿真
  - 图书翻页
id: 350
categories:
  - CSS3
date: 2013-09-18 22:12:40
---

对css3研究越深入，越觉得惊艳。css3说不上是万能的，但是它能实现的效果也超出了我的想象。它的高效率和动画效果的流畅性很多情况下能替代js的作用。个人习惯css3能实现的效果就不会用js,虽然在国内貌似没有css3的用武之地，这一点完成不能阻挡我对css3的热情。博主是一个地道的开源支持者，在学习css3的过程中写的一些demo会贴出来跟大家分享，都是一些想法最简单的实现，当然会有很多问题，希望大家指正，一起学习，一起进步。<!--more-->

下面贴一个纯css3实现的仿真图书翻页效果，只是一个很粗糙的雏形，后续会慢慢完善。欢迎大家提供宝贵的意见。

效果图

[![a-pure-css3-book](http://bcs.duapp.com/xiaopihai/2013/09/a-pure-css3-book-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/a-pure-css3-book.jpg)

<span style="text-indent: 2em;">老规矩先上demo跟下载地址</span>
<div id="demo">       [查看示例](http://tutorial.duapp.com/lab/css3-book/index.htm "查看示例")</div>
<div></div>
[download id="7"]

**<span style="color: #339966;">下面是源码：</span>**
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>&lt;!DOCTYPE&gt;   </span></span>
2.  <span>&lt;html&gt;   </span>
3.  <span>&lt;head&gt;   </span>
4.  <span>&lt;meta http-equiv=</span><span class="string">"Content-Type"</span><span> content=</span><span class="string">"text/html; charset=UTF-8"</span><span>&gt;   </span>
5.  <span>&lt;title&gt;css3-book&lt;/title&gt;   </span>
6.  <span>&lt;style&gt;    </span>
7.  <span>  </span>
8.  <span>footer {   </span>
9.  <span>font:14px/1.3 'Microsoft YaHei';   </span>
10.  <span>margin-top:150px;      </span>
11.  <span>color: #000;   </span>
12.  <span>font-size: 15px;   </span>
13.  <span>line-height: 1.6;   </span>
14.  <span>padding: 60px 20px 0;   </span>
15.  <span>text-align: center;   </span>
16.  <span>display: block;   </span>
17.  <span>}   </span>
18.  <span>footer a{   </span>
19.  <span>    color:#000;   </span>
20.  <span>    text-decoration:none;   </span>
21.  <span>}   </span>
22.  <span>footer a:hover{   </span>
23.  <span>    text-decoration:underline;   </span>
24.  <span>    }   </span>
25.  <span>@keyframes book   </span>
26.  <span>    {   </span>
27.  <span>    0%      {transform: rotate(0deg);left:0px;}   </span>
28.  <span>    25%     {transform: rotate(20deg);left:0px;}   </span>
29.  <span>    50%     {transform: rotate(0deg);left:500px;}   </span>
30.  <span>    55%     {transform: rotate(0deg);left:500px;}   </span>
31.  <span>    70%     {transform: rotate(0deg);left:500px;background:#1ec7e6;}   </span>
32.  <span>    100%    {transform: rotate(-360deg);left:0px;}   </span>
33.  <span>    }   </span>
34.  <span>  </span>
35.  <span>@-webkit-keyframes book   </span>
36.  <span>    {   </span>
37.  <span>    0%      {-webkit-transform: rotate(0deg);left:0px;}   </span>
38.  <span>    25%     {-webkit-transform: rotate(20deg);left:0px;}   </span>
39.  <span>    50%     {-webkit-transform: rotate(0deg);left:500px;}   </span>
40.  <span>    55%     {-webkit-transform: rotate(0deg);left:500px;}   </span>
41.  <span>    70%     {-webkit-transform: rotate(0deg);left:500px;background:#1ec7e6;}   </span>
42.  <span>    100%    {-webkit-transform: rotate(-360deg);left:0px;}   </span>
43.  <span>  </span>
44.  <span>    }   </span>
45.  <span>  </span>
46.  <span>@-moz-keyframes book   </span>
47.  <span>    {   </span>
48.  <span>    0%   {-moz-transform: rotate(0deg);left:0px;}   </span>
49.  <span>    25%  {-moz-transform: rotate(20deg);left:0px;}   </span>
50.  <span>    50%  {-moz-transform: rotate(0deg);left:500px;}   </span>
51.  <span>    55%  {-moz-transform: rotate(0deg);left:500px;}   </span>
52.  <span>    70%  {-moz-transform: rotate(0deg);left:500px;background:#1ec7e6;}   </span>
53.  <span>    100% {-moz-transform: rotate(-360deg);left:0px;}   </span>
54.  <span>    }   </span>
55.  <span>  </span>
56.  <span>@-o-keyframes book   </span>
57.  <span>    {   </span>
58.  <span>    0%   {transform: rotate(0deg);left:0px;}   </span>
59.  <span>    25%  {transform: rotate(20deg);left:0px;}   </span>
60.  <span>    50%  {transform: rotate(0deg);left:500px;}   </span>
61.  <span>    55%  {transform: rotate(0deg);left:500px;}   </span>
62.  <span>    70%  {transform: rotate(0deg);left:500px;background:#1ec7e6;}   </span>
63.  <span>    100% {transform: rotate(-360deg);left:0px;}   </span>
64.  <span>    }   </span>
65.  <span>    .container{   </span>
66.  <span>    position:relative;   </span>
67.  <span>    height:155px;   </span>
68.  <span>    width:236px;   </span>
69.  <span>    margin:40px auto;   </span>
70.  <span>    -webkit-transform-style: preserve-3d;   </span>
71.  <span>    -moz-transform-style: preserve-3d;   </span>
72.  <span>    -o-transform-style: preserve-3d;   </span>
73.  <span>     transform-style:preserve-3d;   </span>
74.  <span>    }   </span>
75.  <span>    .page2{   </span>
76.  <span>       </span>
77.  <span>    width:236px;   </span>
78.  <span>    height:155px;   </span>
79.  <span>    overflow:hidden;   </span>
80.  <span>    -webkit-animation:page 5s ease 1s infinite alternate;   </span>
81.  <span>    -moz-animation:page 5s ease 1s infinite alternate;   </span>
82.  <span>    -o-animation:page 5s ease 1s infinite alternate;   </span>
83.  <span>    animation:page 5s ease 1s infinite alternate;   </span>
84.  <span>    }   </span>
85.  <span>    #page1   </span>
86.  <span>    {   </span>
87.  <span>     position:absolute;   </span>
88.  <span>     left:0px;   </span>
89.  <span>     width:236px;   </span>
90.  <span>     height:155px;   </span>
91.  <span>     overflow:hidden;   </span>
92.  <span>    }   </span>
93.  <span>    #page2   </span>
94.  <span>    {   </span>
95.  <span>     position:absolute;   </span>
96.  <span>     left:236px;   </span>
97.  <span>     width:0px;   </span>
98.  <span>     height:155px;   </span>
99.  <span>     overflow:hidden;   </span>
100.  <span>     -webkit-animation:page2 2s ease 1s infinite alternate;   </span>
101.  <span>     -moz-animation:page2 2s ease 1s infinite alternate;   </span>
102.  <span>     -o-animation:page2 2s ease 1s infinite alternate;   </span>
103.  <span>     animation:page2 2s ease 1s infinite alternate;   </span>
104.  <span>    }   </span>
105.  <span>    #page3   </span>
106.  <span>    {   </span>
107.  <span>     position:absolute;   </span>
108.  <span>     left:236px;   </span>
109.  <span>     width:0px;   </span>
110.  <span>     height:155px;   </span>
111.  <span>     overflow:hidden;   </span>
112.  <span>     -webkit-animation:page3 2s ease 1s infinite alternate;   </span>
113.  <span>     -moz-animation:page3 2s ease 1s infinite alternate;   </span>
114.  <span>     -o-animation:page3 2s ease 1s infinite alternate;   </span>
115.  <span>     animation:page3 2s ease 1s infinite alternate;   </span>
116.  <span>    }   </span>
117.  <span>    #page3 img{   </span>
118.  <span>    margin-left:-128px;   </span>
119.  <span>    -webkit-animation:pagei3 2s ease 1s infinite alternate;   </span>
120.  <span>    -moz-animation:pagei3 2s ease 1s infinite alternate;   </span>
121.  <span>    -o-animation:pagei3 2s ease 1s infinite alternate;   </span>
122.  <span>    animation:pagei3 2s ease 1s infinite alternate;   </span>
123.  <span>    }   </span>
124.  <span>    @-webkit-keyframes page2   </span>
125.  <span>    {   </span>
126.  <span>    from {width: 0px;left:236px}   </span>
127.  <span>    to {width: 128px;left:0px}   </span>
128.  <span>    }   </span>
129.  <span>    @-moz-keyframes page2   </span>
130.  <span>    {   </span>
131.  <span>    from {width: 0px;left:236px}   </span>
132.  <span>    to {width: 128px;left:0px}   </span>
133.  <span>    }   </span>
134.  <span>    @-o-keyframes page2   </span>
135.  <span>    {   </span>
136.  <span>    from {width: 0px;left:236px}   </span>
137.  <span>    to {width: 128px;left:0px}   </span>
138.  <span>    }   </span>
139.  <span>    @keyframes page2   </span>
140.  <span>    {   </span>
141.  <span>    from {width: 0px;left:236px}   </span>
142.  <span>    to {width: 128px;left:0px}   </span>
143.  <span>    }   </span>
144.  <span>    @-webkit-keyframes page3   </span>
145.  <span>    {   </span>
146.  <span>    from {width: 0px;left:236px}   </span>
147.  <span>    to {width: 128px;left:128px}   </span>
148.  <span>    }   </span>
149.  <span>    @-moz-keyframes page3   </span>
150.  <span>    {   </span>
151.  <span>    from {width: 0px;left:236px}   </span>
152.  <span>    to {width: 128px;left:128px}   </span>
153.  <span>    }   </span>
154.  <span>    @-o-keyframes page3   </span>
155.  <span>    {   </span>
156.  <span>    from {width: 0px;left:236px}   </span>
157.  <span>    to {width: 128px;left:128px}   </span>
158.  <span>    }   </span>
159.  <span>    @keyframes page3   </span>
160.  <span>    {   </span>
161.  <span>    from {width: 0px;left:236px}   </span>
162.  <span>    to {width: 128px;left:128px}   </span>
163.  <span>    }   </span>
164.  <span>    @-webkit-keyframes pagei3   </span>
165.  <span>    {   </span>
166.  <span>    from {margin-left:-236px}   </span>
167.  <span>    to {margin-left:-128px}   </span>
168.  <span>    }   </span>
169.  <span>    @-moz-keyframes pagei3   </span>
170.  <span>    {   </span>
171.  <span>    from {margin-left:-236px}   </span>
172.  <span>    to {margin-left:-128px}   </span>
173.  <span>    }   </span>
174.  <span>    @-o-keyframes pagei3   </span>
175.  <span>    {   </span>
176.  <span>    from {margin-left:-236px}   </span>
177.  <span>    to {margin-left:-128px}   </span>
178.  <span>    }   </span>
179.  <span>    @keyframes pagei3   </span>
180.  <span>    {   </span>
181.  <span>    from {margin-left:-236px}   </span>
182.  <span>    to {margin-left:-128px}   </span>
183.  <span>    }   </span>
184.  <span>&lt;/style&gt;   </span>
185.  <span>&lt;/head&gt;   </span>
186.  <span>&lt;body&gt;   </span>
187.  <span>&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"container"</span><span>&gt;   </span>
188.  <span>&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"page"</span><span> id=</span><span class="string">"page1"</span><span>&gt;   </span>
189.  <span>&lt;img src=</span><span class="string">"1.jpg"</span><span>/&gt;   </span>
190.  <span>&lt;/div&gt;   </span>
191.  <span>&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"page"</span><span> id=</span><span class="string">"page2"</span><span>&gt;   </span>
192.  <span>&lt;img src=</span><span class="string">"2.jpg"</span><span>/&gt;   </span>
193.  <span>&lt;/div&gt;   </span>
194.  <span>&lt;div </span><span class="keyword">class</span><span>=</span><span class="string">"page"</span><span> id=</span><span class="string">"page3"</span><span>&gt;   </span>
195.  <span>&lt;img src=</span><span class="string">"2.jpg"</span><span>/&gt;   </span>
196.  <span>&lt;/div&gt;   </span>
197.  <span>&lt;/div&gt;   </span>
198.  <span>&lt;footer&gt;Tutorial by &amp;nbsp;&amp;nbsp;&lt;a href=</span><span class="string">"http://bloglaotou.duapp.com"</span><span> target=</span><span class="string">"_blank"</span><span>&gt;sanyecao&lt;/a&gt;&amp;nbsp;&amp;nbsp;©2013&amp;nbsp;&amp;nbsp;&lt;/footer&gt;   </span>
199.  <span>&lt;/body&gt;   </span>
200.  <span>&lt;/html&gt;  </span>
</div>
<span style="color: #ff0000;">**<span style="line-height: 24px;">作者原创文章，转载请注明出处: </span><span style="color: #0000ff;">[<span style="color: #0000ff;">纯css写的仿真图书翻页效果 | 三叶草</span>](http://bloglaotou.duapp.com/a-pure-css3-book.html "本文固定链接 http://bloglaotou.duapp.com/a-pure-css3-book.html")[<span style="color: #0000ff;"> +复制链接</span>](http://bloglaotou.duapp.com/a-pure-css3-book.html#)</span>**</span>