---
title: 用Canvas实现图片滤镜效果
description: 介绍一些利用Canvas实现图片滤镜效果的算法原理
tags:
  - Canvas
  - JavaScript
  - HTML5
  - 图片
  - 滤镜
id: 577
categories:
  - 前端设计
date: 2013-10-30 11:33:43
permalink: image-filters-by-canvas
---

# 灰度效果


![图片过滤效果之灰度效果](http://sanyecao.qiniudn.com/assets/images/filter/gray.jpg) 

 算法及原理：
```js
 .299 * r + .587 * g + .114 * b;
 ```

# 视频效果	


![图片过滤效果之视频效果](http://sanyecao.qiniudn.com/assets/images/filter/video.jpg) 


# 扩散效果（毛玻璃）

>原理：用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。

![图片过滤效果之视频效果](http://sanyecao.qiniudn.com/assets/images/filter/spread.jpg)

# 连环画效果


![图片滤镜效果之连环画效果](http://sanyecao.qiniudn.com/assets/images/filter/comic.jpg)
  
  原理：
 
> 连环画的效果与图像灰度化后的效果相似,它们都是灰度图,但连环画增大了图像的对比度,使整体明暗效果更强.
 
  算法:

```js
 R = |g – b + g + r| * r / 256 
 G = |b – g + b + r| * r / 256;
 B = |b – g + b + r | * g / 256;
 ```

# 怀旧效果

![图片滤镜效果之怀旧效果](http://sanyecao.qiniudn.com/assets/images/filter/nostalgia.jpg) 
 首先对图像重新计算RGB值,计算公式如下：
 
```js 
 var dr=.393*r+.769*g+.189*b; 
 var dg=.349*r+.686*g+.168*b;
 var db=.272*r+.534*g+.131*b;
```

对图像计算出来的新的RGB值根据随机权重与旧值混合，权重值公式如下：

```js
var scale=Math.random()*0.5 + 0.5;
```
 混合公式如下：
 
```js 
var fr=scale*dr+(1-scale)*r;
```

# 底片效果


![图片滤镜效果之底片效果](http://sanyecao.qiniudn.com/assets/images/filter/negative.jpg) 
 算法原理：将当前像素点的RGB值分别与255之差后的值作为当前点的RGB值，即

```js 
R = 255 – R；G = 255 – G；B = 255 – B；
```

# 黑白效果


![图片过滤效果之黑白效果](http://sanyecao.qiniudn.com/assets/images/filter/black.jpg) 
 算法及原理：

> 求RGB平均值Avg ＝ (R + G + B) / 3，如果Avg &gt;= 100，则新的颜色值为R＝G＝B＝255；
> 如果Avg &lt; 100，则新的颜色值为R＝G＝B＝0；255就是白色，0就是黑色；
> 至于为什么用100作比较，这是一个经验值吧，设置为128也可以，可以根据效果来调整。

# 浮雕效果

![图片过滤效果之浮雕效果](http://sanyecao.qiniudn.com/assets/images/filter/cameo.jpg) 

 算法及原理：
 
> 用相邻点的RGB值减去当前点的RGB值并加上128作为新的RGB值。
> 由于图片中相邻点的颜色值是比较接近的，因此这样的算法处理之后，只有颜色的边沿区域，
> 也就是相邻颜色差异较大的部分的结果才会比较明显，而其他平滑区域则值都接近128左右，
> 也就是灰色，这样就具有了浮雕效果。
> 在实际的效果中，这样处理后，有些区域可能还是会有”彩色”的一些点或者条状痕迹，所以最好再对新的RGB值做一个灰度处理。

# 熔铸效果

![图片滤镜效果之熔铸效果](http://sanyecao.qiniudn.com/assets/images/filter/casting.jpg) 

 算法及原理：

```js 
r = r*128/(g+b +1);
g = g*128/(r+b +1); 
b = b*128/(g+r +1);
```

# 高斯模糊

![玻璃水滴效果](http://sanyecao.qiniudn.com/assets/images/filter/gausian.jpg)

# 玻璃水滴效果

![玻璃水滴效果](http://sanyecao.qiniudn.com/assets/images/filter/cleanglass.jpg)

[查看示例][cleanglass]


# 聚焦效果

![聚焦效果](http://sanyecao.qiniudn.com/assets/images/filter/focus.jpg)

[查看示例][focus]

# 亮白

![高亮柔白](http://sanyecao.qiniudn.com/assets/images/filter/bright.jpg)



# 高亮柔白

![高亮柔白](http://sanyecao.qiniudn.com/assets/images/filter/softblow.jpg)

[查看示例][softblow]

# 雾化效果

![雾化效果](http://sanyecao.qiniudn.com/assets/images/filter/mist.jpg)

[查看示例][mist]

# 油画效果

![油画效果](http://sanyecao.qiniudn.com/assets/images/filter/oilpainting.jpg)

 算法及原理： 

> 用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。

[查看示例][oilpainting]

# 素描

![素描效果](http://sanyecao.qiniudn.com/assets/images/filter/sketch.jpg)


# 锐化

![锐化效果](http://sanyecao.qiniudn.com/assets/images/filter/sharp.jpg)

[查看示例][sharp]

# 3D栅格效果

![3D栅格效果](http://sanyecao.qiniudn.com/assets/images/filter/threedgrid.jpg)

[查看示例][threedgrid]


# 冰冻效果

![冰冻效果](http://sanyecao.qiniudn.com/assets/images/filter/frozen.jpg)
算法及原理：

```js
r = (r-g-b)*3/2;
g = (g-r-b)*3/2; 
b = (b-g-r)*3/2;
```

# 查看示例



已经集成到博客的小工具里了，点[这里][webtool]查看效果。



# 参考文档

[灰度、黑白、底片、浮雕][reference]

[老照片特效][reference2]

[cleanglass]:   https://summerandwinter.github.io/lab/filters/cleanglass.hml "玻璃水滴效果示例"
[focus]:   https://summerandwinter.github.io/lab/filters/focus.hml "聚焦效果示例"
[softblow]:   https://summerandwinter.github.io/lab/filters/softblow.hml "高亮柔白效果示例"
[mist]:   https://summerandwinter.github.io/lab/filters/mist.hml "雾化效果示例"
[oilpainting]:   https://summerandwinter.github.io/lab/filters/oilpainting.hml "油画效果示例"
[sharp]:   https://summerandwinter.github.io/lab/filters/sharp.hml "锐化效果示例"
[threedgrid]:   https://summerandwinter.github.io/lab/filters/threedgrid.hml "3D栅格效果示例"

[webtool]:  https://summerandwinter.github.io/lab/filters/index.html "简易图片过滤效果工具"
[reference]:   http://www.icodelogic.com/?p=575 "灰度、黑白、底片、浮雕"
[reference2]:   http://blog.csdn.net/jia20003/article/details/9142111 "老照片特效"