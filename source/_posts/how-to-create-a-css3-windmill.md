---
title: 如何用css3实现风车效果
tags:
  - css3
  - 动画
  - 风车
id: 358
categories:
  - CSS3
date: 2013-09-20 18:23:30
---

前面讲过css3可以替代很多js实现的效果，其实很多时候纯css3甚至可以替代图片，直接用css3就可以画出一些简单的图片。虽然css3画出来的图片效果可能不如直接用图片的好，实现起来也比较复杂，最麻烦的是兼容性问题，不如图片来得直接实用。但是换一种思路去思考问题的解决办法往往能激发我们的灵感，也有助于我们学习css3。<!--more-->

下面给出的demo里会有用图片和纯css3实现的风车效果的对比。

先看看静态的效果图：

[caption id="attachment_362" align="alignnone" width="240"][![纯css3实现的风车动画效果图](http://bcs.duapp.com/xiaopihai/2013/09/a-pure-css3-windmill-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/a-pure-css3-windmill.jpg) 纯css3实现的风车动画效果图[/caption]

下面简单介绍一下我是如何用纯css3实现一个风车的动画效果的，

### 1.画出风车的柱子

我们可以看到风车的柱子是一个等边的梯形，通过width,height属性配合border我们可以实现很多几何图形，如三角形，梯形等等，大家可以参照下面梯形的实现方法自己试试其他图形的实现。
<div class="dp-highlighter">

1.  <span><span class="keyword">display</span><span>: </span><span class="string">block</span><span>;   </span></span>
2.  <span class="keyword">height</span><span>: 0;   </span>
3.  <span class="keyword">width</span><span>: </span><span class="string">4px</span><span>;   </span>
4.  <span class="keyword">border-width</span><span>: 0 </span><span class="string">4px</span><span> </span><span class="string">80px</span><span> </span><span class="string">4px</span><span>;   </span>
5.  <span class="keyword">border-style</span><span>: </span><span class="string">none</span><span> </span><span class="string">solid</span><span> </span><span class="string">solid</span><span>;   </span>
6.  <span class="keyword">border-color</span><span>: </span><span class="string">transparent</span><span> </span><span class="string">transparent</span><span> </span><span class="string">white</span><span>;  </span>
</div>
<span style="color: #339966;">效果图</span>

[caption id="attachment_374" align="alignnone" width="240"][![风车车柱实现效果](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-pillar-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-pillar.jpg) 风车车柱实现效果[/caption]

### 2.画风车的轴

这一步比较简单，用border-radius圆角属性可以轻松实现。
<div class="dp-highlighter">

1.  <span><span class="keyword">width</span><span>:</span><span class="string">4px</span><span>;   </span></span>
2.  <span class="keyword">height</span><span>:</span><span class="string">4px</span><span>;   </span>
3.  <span class="keyword">border</span><span>:</span><span class="string">3px</span><span> </span><span class="colors">#fff</span><span> </span><span class="string">solid</span><span>;   </span>
4.  <span class="keyword">background</span><span>:</span><span class="colors">#a5cad6</span><span>;   </span>
5.  <span class="keyword">border</span><span>-radius:</span><span class="string">5px</span><span>;  </span>
</div>
<span style="color: #339966;">效果图</span>

[caption id="attachment_369" align="alignnone" width="240"][![风车轴心实现效果](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-axis-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-axis.jpg) 风车轴心实现效果[/caption]

### 3.画风车的叶子

风车叶子的实现与柱子的实现原理相同，只不过是吧梯形倒过来了。
<div class="dp-highlighter">

1.  <span><span class="keyword">height</span><span>: 0;   </span></span>
2.  <span class="keyword">width</span><span>: </span><span class="string">2px</span><span>;   </span>
3.  <span class="keyword">border-width</span><span>: </span><span class="string">50px</span><span> </span><span class="string">2px</span><span> </span><span class="string">0px</span><span> </span><span class="string">2px</span><span>;   </span>
4.  <span class="keyword">border-style</span><span>: </span><span class="string">solid</span><span> </span><span class="string">solid</span><span> </span><span class="string">none</span><span>;   </span>
5.  <span class="keyword">border-color</span><span>: </span><span class="string">white</span><span> </span><span class="string">transparent</span><span> </span><span class="string">transparent</span><span> ;  </span>
</div>

### 4.定位风车页

这里使用css3中transform的rotate（旋转）来实现，有一点要注意的是，使用rotate时先要用origin定位旋转的圆心，默认是元素的中心，这里我们要定位在元素的顶部。
<div class="dp-highlighter">

1.  <span><span>-webkit-transform-origin:</span><span class="string">0px</span><span> </span><span class="string">0px</span><span>;   </span></span>
2.  <span>-webkit-transform:rotate(60deg);  </span>
</div>
<span style="color: #339966;">效果图</span>

[caption id="attachment_366" align="alignnone" width="240"][![风车扇页实现效果](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-swing-240x150.jpg)](http://bcs.duapp.com/xiaopihai/2013/09/css3-windmill-swing.jpg) 风车扇页实现效果[/caption]

用上面的办法依次画出三个风车扇面，并且定位好角度。

&nbsp;

### 5.实现扇页的动态效果

静态的风车画好了，接下来我们要做的就是让它动起来。

前面我们可以把扇页定位在轴心元素的子元素，这样我们只要实现轴心的转动效果就可以让扇页也跟着动起来了。

下面是动画的实现
<div class="dp-highlighter">

1.  <span><span>@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}  </span></span>
</div>
把实现好的动画方法rotate放到我们的轴心元素中，扇页就可以动起来啦。
<div class="dp-highlighter">

1.  <span><span>-webkit-animation: rotate 4s linear infinite;  </span></span>
</div>

### 6.完善效果并实现兼容性

至此我们的风车已经基本上完成啦，前面的代码都是兼容webkit核心浏览器（chrome,safari）,接下来实现对其他浏览器的兼容，并且加上一个鼠标悬浮加快转动的效果我们的风车就算完成啦。

css3的表现在各个浏览器下的表现不尽相同，chrome浏览器下效果最佳，safari下风车的柱子会有像素失真的问题（同是webkit核心，不知道为什么表现那么不一样），后续会尝试解决这个问题。

下面提供demo和下载地址
<div id="demo">       [查看示例](http://tutorial.duapp.com/lab/css3-windmill/index.htm "css3实现的风车示例")</div>
<div></div>
[download id="8"]

**<span style="color: #ff0000;"><span style="text-indent: 2em;">作者原创文章，转载请注明出处: </span><span style="color: #0000ff;">[<span style="color: #0000ff;">如何用css3实现风车效果 | 三叶草</span>](http://bloglaotou.duapp.com/how-to-create-a-css3-windmill.html "本文固定链接 http://bloglaotou.duapp.com/how-to-create-a-css3-windmill.html")</span></span>**[
](http://bloglaotou.duapp.com/how-to-create-a-css3-windmill.html#)