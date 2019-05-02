---
title: ImageMagick学习
tags:
  - ImageMagick
id: 577
categories:
  - ImageMagick
date: 2018-01-05 10:06:33
permalink: imagemagick-learning
description: 记录一些在学习magick过程中用到的使用的技巧留作备忘
---

# convert

## 图片拼接

```bash
magick img.jpg img2.jpg -background '#ffffff' -gravity Center +append dest.jpg
```

把图片`img.jpg` 和`img2.jpg` 按从左到右的顺序拼接在一起
如果图片高度不一致，高度低的图片用`-background`填充至与高度最高的图片对齐，已`-gravity`方式对齐。
`-background` 的写法 `white`, `#ffffff`, `rgb(255, 255, 255)`
`-gravity` 可选的参数有 `NorthWest`, `North`, `NorthEast`, `West`, `Center`, `East`, `SouthWest`, `South`, `SouthEast`

>PS:这篇文章的示例图片就是用这种方法拼出来的

## 反色
形成底片效果

```bash
magick source.jpeg -negate negate.png
```
![反色效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/negate.jpg?v4)

## 加边框

```bash
magick source.jpeg -mattecolor "#000000" -frame 60x60 mattecolor.jpg
```

`#000000`边框颜色 `60x60` 边框宽度

![加边框](https://summerandwinter.github.io/assets/images/articles/imagemagick/mattecolor.jpg?v4)

下面是加边框的另外方式实现方式

```bash
magick source.jpeg -border 60x60 -bordercolor "#000000" border.jpg
```

![加边框](https://summerandwinter.github.io/assets/images/articles/imagemagick/border.jpg?v4)


## 单色

```bash
magick  source.jpeg -monochrome monochrome.png
```

![单色](https://summerandwinter.github.io/assets/images/articles/imagemagick/monochrome.jpg?v4)


## 噪点
添加噪点

```bash
magick source.jpeg +noise Gaussian noise.png
```
可选的参数如下
```
Gaussian
Impulse
Laplacian
Multiplicative
Poisson
Random
Uniform
```
去除噪点
```bash
magick source.jpeg -statistic Nonpeak 10  noiseless.jpg
```

![噪点](https://summerandwinter.github.io/assets/images/articles/imagemagick/noise.jpg?v4)


## 旋转

```bash
magick source.jpeg -rotate 30 rotate.jpg
```

![旋转](https://summerandwinter.github.io/assets/images/articles/imagemagick/rotate.jpg?v4)

## 翻转

上下翻转

```bash
magick source.jpeg -flip flip.jpg
```

![上下翻转](https://summerandwinter.github.io/assets/images/articles/imagemagick/flip.jpg?v4)

左右翻转

```bash
magick source.jpeg -flop flop.jpg
```

![左右翻转](https://summerandwinter.github.io/assets/images/articles/imagemagick/flop.jpg?v4)

## 油画效果

```bash
magick source.jpeg -paint 4 paint.jpg
```

数字越大色块越大

![油画效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/paint.jpg?v4)


## 炭笔效果

```bash
magick source.jpeg -charcoal 2 charcoal.jpg
```

数字越大笔触越大
![炭笔效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/charcoal.jpg?v4)


## 散射
毛玻璃效果

```bash
magick source.jpeg -spread 30 spread.jpg
```

数字越大越模糊
![毛玻璃效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/spread.jpg?v4)


## 漩涡

```bash
magick source.jpeg -swirl 67 swril.jpg
```
数字越大扭曲得越严重
![漩涡效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/swril.jpg?v4)


## 凸起效果

```bash
magick source.jpeg -raise 5x5 raise.jpg
```
执行后，你会看到，照片的四周会一个5x5的边，如果你要一个凹下去的边，把-raise改为+raise就可以了。其实凸边和凹边看起来区别并不是很大。

![凸起效果](https://summerandwinter.github.io/assets/images/articles/imagemagick/raise.jpg?v4)

