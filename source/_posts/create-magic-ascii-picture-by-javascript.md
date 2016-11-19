---
title: 通过javascript把图片转化为字符画
description: 利用html5中的canvas技术和计算机图形学的原理实现把图片转化为字符画
tags:
  - javascript
  - 图像转化
  - 字符画，canvas
id: 546
categories:
  - 前端设计
date: 2013-10-23 23:56:01
---



# 获取上传图片对象数据


Javascript无法直接获取本地上传的图片的数据，html5可以解决这一问题 。html5里面的[FileReader interface](http://dev.w3.org/2006/webapi/FileAPI/#FileReader-interface)可以把图片对象的数据读到内存，然后通过接口的进度事件（Progress Events）访问这些数据。

浏览器支持：

代码片段：
```javascript
var reader = new FileReader();                        //建立一个FileReader接口  
reader.readAsDataURL(fileBtn.files[0]);        //fileBtn为文件上传控件对象  
reader.onload = function () {                             //在onload事件中访问图像数据  
    img.src = reader.result; 
     }
```
# 获取图像对象像素点


图像对象的`getImageData` 方法返回一个对象，每个像素点的 `rgba` 值都保存在其 `data` 属性下面，这是一个一位数组， 也就是说，`rgba` 分别对应一个值，然后接着就是一下像素点的 `rgba`，假设 `getImageData.data` 的值为 `[1,2,3,4,5,6,7,8]`， 那么 `getImageData` 对象范围就包含了 2 个像素点，第一个像素点的 `rgba` 值分别是 `1,2,3,4`，第二个像素点的就是 `4,5,6,7,8`。 因此，我们在取每个像素点的 `rgba` 值的时候其`index` 应该在像素点的索引值上乘以 `4`，然后通过 `getGray()` 计算灰度。
```javascript
var imgData = c.getImageData(0, 0, img.width, img.height);  
var imgDataArr = imgData.data;  
var imgDataWidth = imgData.width;  
var imgDataHeight = imgData.height;  
for (h = 0; h < imgDataHeight; h += 12) {  
    for (w = 0; w < imgDataWidth; w += 6) {  
        var index = (w + imgDataWidth  h)  4;  
        var r = imgDataArr[index + 0];  
        var g = imgDataArr[index + 1];  
        var b = imgDataArr[index + 2];  
    }  
}  
```
# 根据rgb值计算灰度


不同的RGB空间，[灰阶的计算公式](http://www.haogongju.net/art/1770844 "灰阶的计算公式")有所不同，常见的几种RGB空间的计算灰阶的公式如下：

## 简化 sRGB IEC61966-2.1 [gamma=2.20]

<pre>Gray = (R^2.2 * 0.2126  + G^2.2  * 0.7152  + B^2.2  * 0.0722)^(1/2.2)</pre>

## Adobe RGB (1998) [gamma=2.20]

<pre>Gray = (R^2.2 * 0.2973  + G^2.2  * 0.6274  + B^2.2  * 0.0753)^(1/2.2)</pre>

## Apple RGB [gamma=1.80]

<pre>Gray = (R^1.8 * 0.2446  + G^1.8  * 0.6720  + B^1.8  * 0.0833)^(1/1.8)</pre>

## ColorMatch RGB [gamma=1.8]

<pre>Gray = (R^1.8 * 0.2750  + G^1.8  * 0.6581  + B^1.8  * 0.0670)^(1/1.8)</pre>

## 简化 KODAK DC Series Digital Camera [gamma=2.2]

```javascript
// 根据rgb值计算灰度  
function getGray(r, g, b) {  
    return 0.299  r + 0.578  g + 0.114 * b;  
} 
```

# 根据灰度生成相应字符


把不同的灰度替换成相应的字符，原则上灰度越深的像素应该用越复杂的字符，具体什么字符可以自由替换，这只是一个测试版本。
代码片段：
```javascript
// 根据灰度生成相应字符  
function toText(g) {  
    if (g <= 30) {  
        return '8';  
    } else if (g > 30 && g <= 60) {  
        return '&';  
    } else if (g > 60 && g <= 120) {  
        return '$';  
    }  else if (g > 120 && g <= 150) {  
        return '*';  
    } else if (g > 150 && g <= 180) {  
        return 'o';  
    } else if (g > 180 && g <= 210) {  
        return '!';  
    } else if (g > 210 && g <= 240) {  
        return ';';  
    }  else {  
        return '.';  
    }  
}  
```
到这次我们的工作就完成得差不多啦,上面只给出了一些代码的片段，把原理疏通了一下，具体怎么实现大家可以自由发挥，下面给出一个示例，把源码也贴出来跟大家分享。
[灵感](http://www.cssha.com/img2txt-canvas)