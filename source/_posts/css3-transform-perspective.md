---
title: CSS3 Transform的perspective属性
tags:
  - CSS3
  - perspective
  - Transform
id: 305
categories:
  - CSS3
date: 2013-09-10 23:05:51
permalink: css3-transform-perspective
---

CCS3中的Transform是设置界面样式和动画的一大利器。而且在Chrome和FF中还支持3D变换。IE9不支持，IE10支持。

只要是3D场景都会涉及视角问题和透视的问题。在Transform中的设置方法比较简单：<!--more-->

1.  只能选择透视方式，也就是近大远小的显示方式。
2.  镜头方向只能是平行Z轴向屏幕内，也就是从屏幕正前方向里看。
3.  可以调整镜头与平面位置：

*   a) perspective属性设置镜头到元素平面的距离。所有元素都是放置在z=0的平面上。比如perspective(300px)表示，镜头距离元素表面的位置是300像素。
*   b) perspective-origin属性规定了镜头在平面上的位置。默认是放在元素的中心。
下面用一个正方体（或者说骰子）向大家演示视角不同视角（perspective 以及 ）的差别。

镜头距离z=0平面的不同距离的效果。

![perspective](/assets/images/articles/perspective.jpg)

镜头在z坐标固定时，x和y坐标（perspective-origin）变化时的差别。

![perspective-origin](/assets/images/articles/perspective-origin.jpg)

在FireFox中也是这种情况。

在mozilla的文档上也没有说明这个情况。现在还不确定是设计如此还是Bug。总之大家用的时候就将prespective放在前面好了。

