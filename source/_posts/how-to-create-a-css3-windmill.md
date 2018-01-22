---
title: 如何用CSS3实现风车效果
tags:
  - CSS3
  - 动画
  - 风车
id: 358
categories:
  - CSS3
date: 2013-09-20 18:23:30
permalink: how-to-create-a-css3-windmill
---

前面讲过css3可以替代很多js实现的效果，其实很多时候纯css3甚至可以替代图片，直接用css3就可以画出一些简单的图片。虽然css3画出来的图片效果可能不如直接用图片的好，实现起来也比较复杂，最麻烦的是兼容性问题，不如图片来得直接实用。但是换一种思路去思考问题的解决办法往往能激发我们的灵感，也有助于我们学习css3。
<!--more-->


下面简单介绍一下我是如何用纯css3实现一个风车的动画效果的，
效果图
![css3实现风车效果图](http://sanyecao.qiniudn.com/assets/images/lab/css3-windmill.jpg)

# 画出风车的柱子

我们可以看到风车的柱子是一个等边的梯形，通过width,height属性配合border我们可以实现很多几何图形，如三角形，梯形等等，大家可以参照下面梯形的实现方法自己试试其他图形的实现。
```css
	display: block;   
	height: 0;   
	width: 4px;   
	border-width: 0 4px 80px 4px;   
	border-style: none solid solid;   
	border-color: transparent transparent white;  
```

# 画风车的轴

这一步比较简单，用border-radius圆角属性可以轻松实现。
```css
width:4px;   
height:4px;   
border:3px #fff solid;   
background:#a5cad6;   
border-radius:5px;  
```

# 画风车的叶子

风车叶子的实现与柱子的实现原理相同，只不过是吧梯形倒过来了。
```css
height: 0;   
width: 2px;   
border-width: 50px 2px 0px 2px;   
border-style: solid solid none;   
border-color: white transparent transparent ;  
```
# 定位风车页

这里使用css3中transform的rotate（旋转）来实现，有一点要注意的是，使用rotate时先要用origin定位旋转的圆心，默认是元素的中心，这里我们要定位在元素的顶部。
```css
-webkit-transform-origin:0px 0px;   
-webkit-transform:rotate(60deg);  
```

用上面的办法依次画出三个风车扇面，并且定位好角度。


# 实现扇页的动态效果

静态的风车画好了，接下来我们要做的就是让它动起来。

前面我们可以把扇页定位在轴心元素的子元素，这样我们只要实现轴心的转动效果就可以让扇页也跟着动起来了。

下面是动画的实现
```css
@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}  
```
把实现好的动画方法rotate放到我们的轴心元素中，扇页就可以动起来啦。
```css
-webkit-animation: rotate 4s linear infinite;  
```

# 完善效果并实现兼容性

至此我们的风车已经基本上完成啦，前面的代码都是兼容webkit核心浏览器（chrome,safari）,接下来实现对其他浏览器的兼容，并且加上一个鼠标悬浮加快转动的效果我们的风车就算完成啦。

css3的表现在各个浏览器下的表现不尽相同，chrome浏览器下效果最佳，safari下风车的柱子会有像素失真的问题（同是webkit核心，不知道为什么表现那么不一样），后续会尝试解决这个问题。
[查看示例][demo]
[demo]:   https://summerandwinter.github.io/lab/css3-windmill/index.html
