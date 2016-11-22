---
title: 用Canvas实现图片滤镜效果详解之灰度效果
description: 利用用canvas技术和计算机图形原理实现图片灰度滤镜效果
tags:
  - canvas
  - html5
  - 图像滤镜
  - 滤镜
  - 灰度滤镜
id: 650
categories:
  - 前端设计
date: 2013-11-03 23:43:33
permalink: image-filters-by-canvas-gray
---

前面展示了一些canvas实现图片滤镜效果的展示，并且给出了相应的算法，下面来介绍一下具体的实现方法。

前面介绍的特效中灰度效果最简单，就从这里开始介绍吧。

### 1.获取图像数据

```js
img.src = ‘original.jpg’;
canvas.width = img.width;
canvas.height = img.height;
var context = canvas.getContext(“2d”);
context.drawImage(img, 0, 0);
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);
```

### 2.通过灰度算法处理图像数据

```js
// 1.灰度效果
//计算公式 .299 r + .587 g + .114 * b;
// calculate gray scale value
for ( var x = 0; x < canvasData.width; x++) {
for ( var y = 0; y < canvasData.height; y++) {
// Index of the pixel in the array
var idx = (x + y canvasData.width) 4;
var r = canvasData.data[idx + 0];
var g = canvasData.data[idx + 1];
var b = canvasData.data[idx + 2];
var gray = .299 r + .587 g + .114 * b;
// assign gray scale value
canvasData.data[idx + 0] = gray; // Red channel
canvasData.data[idx + 1] = gray; // Green channel
canvasData.data[idx + 2] = gray; // Blue channel
canvasData.data[idx + 3] = 255; // Alpha channel
// 加上黑色的边框
if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8))
{
canvasData.data[idx + 0] = 0;
canvasData.data[idx + 1] = 0;
canvasData.data[idx + 2] = 0;
}
}
} 
```

### 3.把新的图像数据写入canvas

```js
context.putImageData(canvasData, 0, 0); 
```
### 4.效果预览

**原图**

![原图](http://sanyecao.qiniudn.com/assets/images/filter/original.jpg)

**效果图**

![效果图](http://sanyecao.qiniudn.com/assets/images/filter/imagefilter-gray.jpg)

查看**[示例][demo]**

[demo]:  /lab/filters/gray/index.html