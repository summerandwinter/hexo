---
title: 一个基于WebGL的仿真3D水池有逼真的水波纹效果
tags:
  - 3D
  - WebGL
  - 仿真
  - 水波纹
id: 427
categories:
  - 前端设计
date: 2013-10-14 22:15:49
permalink: webgl-water
---

最近在研究WebGL，看到国外很多高手做的很多超炫的3D效果，无比羡慕。忍不住把效果趴下来研究，下面介绍一个逼真的游泳池中浮动小球的效果。效果非常绚丽，功能强大。示例可切换观察水池的视角，不同视角考虑到了光线从不同角度折射和反射的影响，所以波纹效果极其逼真。
<!--more-->

先介绍下WebGL

WebGL是一种3D绘图标准，这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，通过增加OpenGL ES 2.0的一个JavaScript绑定，WebGL可以为HTML5 Canvas提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型了，还能创建复杂的导航和数据视觉化。显然，WebGL技术标准免去了开发网页专用渲染插件的麻烦，可被用于创建具有复杂3D结构的网站页面，甚至可以用来设计3D网页游戏等等。

啰嗦这这么多先给张效果图

![webgl-water](https://summerandwinter.github.io/assets/images/lab/webgl-water.jpg)

**下面是整理好的一个示例，在chrome,firefox浏览器下查看，不支持IE和safari。chrome下效果最佳，另外对显卡和驱动也有要求。**

[查看示例](https://summerandwinter.github.io/lab/webgl-water/index.html "webgl-water")

**下面是示例的下载地址，不过由于WebGl不能跨域加载图片本地查看不到效果，上传到服务器中或者本地的本地搭建的服务器环境也可以。**
