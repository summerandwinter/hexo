---
title: 用canvas实现图片滤镜效果
tags:
  - canvas
  - html5
  - 图片
  - 滤镜
id: 577
categories:
  - 前端设计
date: 2013-10-30 11:33:43
---

### 1.灰度效果

[caption id="attachment_634" align="alignnone" width="600"][![图片过滤效果之灰度效果](http://bcs.duapp.com/xiaopihai/image_filter-600x442.jpg)](http://bcs.duapp.com/xiaopihai/image_filter.jpg) 图片过滤效果之灰度效果[/caption]
> 算法及原理：> 
> 
> .299 * r + .587 * g + .114 * b;
&nbsp;

### 2.油画效果

### [![图片滤镜效果之油画效果](http://bcs.duapp.com/xiaopihai/imagefilter-spread-600x445.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-spread.jpg)

> 算法及原理：> 
> 
> 用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。

### 3.连环画效果

[caption id="attachment_638" align="alignnone" width="600"][![图片滤镜效果之连环画效果](http://bcs.duapp.com/xiaopihai/imagefilter-comic-600x443.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-comic.jpg) 图片滤镜效果之连环画效果[/caption]
> 算法及原理：> 
> 连环画的效果与图像灰度化后的效果相似,它们都是灰度图,但连环画增大了图像的对比度,使整体明暗效果更强.> 
> 算法:> 
> R = |g – b + g + r| * r / 256> 
> G = |b – g + b + r| * r / 256;> 
> B = |b – g + b + r | * g / 256;

### 4.怀旧效果

[caption id="attachment_641" align="alignnone" width="600"][![图片滤镜效果之怀旧效果](http://bcs.duapp.com/xiaopihai/imagefilter-old-600x444.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-old.jpg) 图片滤镜效果之怀旧效果[/caption]
> 首先对图像重新计算RGB值,计算公式如下：> 
> 
> var dr=.393*r+.769*g+.189*b;> 
> var dg=.349*r+.686*g+.168*b;> 
> var db=.272*r+.534*g+.131*b;> 
> 
> 对图像计算出来的新的RGB值根据随机权重与旧值混合，权重值公式如下：> 
> 
> var scale=Math.random()*0.5 + 0.5;> 
> 
> 混合公式如下：> 
> 
> var fr=scale*dr+(1-scale)*r;

### 5.底片效果

[caption id="attachment_639" align="alignnone" width="600"][![图片滤镜效果之底片效果](http://bcs.duapp.com/xiaopihai/imagefilter-dipian-600x445.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-dipian.jpg) 图片滤镜效果之底片效果[/caption]
> 算法原理：将当前像素点的RGB值分别与255之差后的值作为当前点的RGB值，即> 
> R = 255 – R；G = 255 – G；B = 255 – B；
&nbsp;

### 6.黑白效果

[caption id="attachment_635" align="alignnone" width="600"][![图片过滤效果之黑白效果](http://bcs.duapp.com/xiaopihai/imagefilter-black-600x443.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-black.jpg) 图片过滤效果之黑白效果[/caption]
> 算法及原理：> 
> 求RGB平均值Avg ＝ (R + G + B) / 3，如果Avg &gt;= 100，则新的颜色值为R＝G＝B＝255；> 
> 如果Avg &lt; 100，则新的颜色值为R＝G＝B＝0；255就是白色，0就是黑色；> 
> 至于为什么用100作比较，这是一个经验值吧，设置为128也可以，可以根据效果来调整。

### 7.浮雕效果

[caption id="attachment_636" align="alignnone" width="600"][![图片过滤效果之浮雕效果](http://bcs.duapp.com/xiaopihai/imagefilter-cameo-600x443.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-cameo.jpg) 图片过滤效果之浮雕效果[/caption]
> 算法及原理：> 
> 用相邻点的RGB值减去当前点的RGB值并加上128作为新的RGB值。> 
> 由于图片中相邻点的颜色值是比较接近的，因此这样的算法处理之后，只有颜色的边沿区域，> 
> 也就是相邻颜色差异较大的部分的结果才会比较明显，而其他平滑区域则值都接近128左右，> 
> 也就是灰色，这样就具有了浮雕效果。> 
> 在实际的效果中，这样处理后，有些区域可能还是会有”彩色”的一些点或者条状痕迹，所以最好再对新的RGB值做一个灰度处理。

### 8.熔铸效果

[caption id="attachment_637" align="alignnone" width="600"][![图片滤镜效果之熔铸效果](http://bcs.duapp.com/xiaopihai/imagefilter-casting-600x444.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-casting.jpg) 图片滤镜效果之熔铸效果[/caption]
> 算法及原理：> 
> r = r*128/(g+b +1);> 
> g = g*128/(r+b +1);> 
> b = b*128/(g+r +1);

### 9.冰冻效果

[caption id="attachment_640" align="alignnone" width="600"][![图片滤镜效果之冰冻效果](http://bcs.duapp.com/xiaopihai/imagefilter-frozen-600x443.jpg)](http://bcs.duapp.com/xiaopihai/imagefilter-frozen.jpg) 图片滤镜效果之冰冻效果[/caption]
> 算法及原理：> 
> r = (r-g-b)*3/2;> 
> g = (g-r-b)*3/2;> 
> b = (b-g-r)*3/2;

### 查看示例：

已经集成到博客的小工具里了，点[这里](http://bloglaotou.duapp.com/webtools_imagefilter "简易图片过滤效果工具")查看效果。

### 下载地址：

[download id="15"]

### 参考文档：

[灰度、黑白、底片、浮雕](http://www.icodelogic.com/?p=575)

[老照片特效](http://blog.csdn.net/jia20003/article/details/9142111)