---
title: 纯css做的安卓开机动画
tags:
  - css3
  - 动画
  - 安卓
  - 开机动画
id: 336
categories:
  - CSS3
date: 2013-09-16 23:22:09
permalink: a-pure-css3-android-animate

---

随着css3的发展，越来越多的负责绚丽的效果可以由纯css来完成了。用css3实现的动画效果丝毫不必js实现的逊色，而且浏览器对css渲染的速度远比js快，大多数时候css的体积也不js小。其中css3中的动画效果可以实现流畅而强大的动画效果，下面我们来看看css3的能量吧。

<!--more-->

下面介绍一个博主完成的纯css3实现的仿安卓开机动画，可爱的安卓机器人。

效果图：

![css3-android-animate](http://sanyecao.qiniudn.com/assets/images/lab/css3-android-animate.jpg)


（**新版示例，已兼容safari。**）
[查看示例][demo]
[demo]:   http://sanyecao.me/lab/css3-android-robot/index.html "css3实现的仿安卓开机动画示例"

经过测试，safari没有动画效果的原因是不支持伪元素after,before的动画效果。用DIV替换掉伪元素后safari下运行正常。

**特别声明此demo为博主原创，可以下载免费使用。**

下面是源码

**html:**
```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv=“Content-Type” content=“text/html; charset=UTF-8”>
<title>android robot</title>
<link type=“text/css” rel=“stylesheet” href=“css.css”/>
</head>
<body>
<div class=“android”>
<div class=“eye”></div>
<div class=“ear”></div>
<div class=“hand”></div>
<div class=“foot”></div>
</div>
</body>
</html>
```
**css:**
```css
.android {
	position: relative;
	width: 200px;
	height: 290px;
	margin: 80px auto;
	background: #A5C63B;
	border-radius: 200px 200px 50px 50px;
	transition: all .25s ease-out;
	-webkit-transition: all .25s ease-out;
	-moz-transition: all .25s ease-out;
	-o-transition: all .25s ease-out;
	-ms-transition: all .25s ease-out;
}

.android:hover {
	filter: blur(3px);
	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-o-filter: blur(3px);
	-ms-filter: blur(3px);
	transform: scale(1.2) rotate(3deg);
	-webkit-transform: scale(1.2) rotate(3deg);
	-moz-transform: scale(1.2) rotate(3deg);
	-o-transform: scale(1.2) rotate(3deg);
	-ms-transform: scale(1.2) rotate(3deg);
}

.android:after {
	content: ‘’;
	position: absolute;
	display: block;
	width: 200px;
	height: 8px;
	top: 95px;
	background: #fff;
}

.android .eye:after,
.android .eye:before {
	content: ‘’;
	position: absolute;
	display: block;
	width: 18px;
	height: 18px;
	top: 35px;
	left: 50px;
	background: #fff;
	border-radius: 15px;
}

.android .eye:after {
	left: auto;
	rightright: 50px;
	animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-o-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
}

.android .eye:before {
	animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-o-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-eye-rightright 5s ease 1s infinite alternate;
}

@keyframes animated-robot-eye-rightright {
	0% {
	}

	25% {
		transform: translate(-102px,0px);
	}

	50% {
	}

	100% {
	}
}

@-webkit-keyframes animated-robot-eye-rightright {
	0% {
	}

	25% {
		-webkit-transform: translate(-102px,0px);
	}

	50% {
	}

	100% {
	}
}

@-moz-keyframes animated-robot-eye-rightright {
	0% {
	}

	25% {
		-moz-transform: translate(-102px,0px);
	}

	50% {
	}

	100% {
	}
}

@-o-keyframes animated-robot-eye-rightright {
	0% {
	}

	25% {
		-o-transform: translate(-102px,0px);
	}

	50% {
	}

	100% {
	}
}

@-ms-keyframes animated-robot-eye-rightright {
	0% {
	}

	25% {
		-ms-transform: translate(-102px,0px);
	}

	50% {
	}

	100% {
	}
}

@keyframes animated-robot-eye-left {
	0% {
	}

	25% {
		transform: translate(-82px,0px);
	}

	50% {
	}

	100% {
	}
}

@-webkit-keyframes animated-robot-eye-left {
	0% {
	}

	25% {
		-webkit-transform: translate(-82px,0px);
	}

	50% {
	}

	100% {
	}
}

@-moz-keyframes animated-robot-eye-left {
	0% {
	}

	25% {
		-moz-transform: translate(-82px,0px);
	}

	50% {
	}

	100% {
	}
}

@-o-keyframes animated-robot-eye-left {
	0% {
	}

	25% {
		-o-transform: translate(-82px,0px);
	}

	50% {
	}

	100% {
	}
}

@-ms-keyframes animated-robot-eye-left {
	0% {
	}

	25% {
		-ms-transform: translate(-82px,0px);
	}

	50% {
	}

	100% {
	}
}

.android:hover .eye:after,
.android:hover .eye:before {
	height: 3px;
	top: 43px;
}

.android .ear:after,
.android .ear:before {
	content: ‘’;
	position: absolute;
	display: block;
	width: 6px;
	height: 40px;
	top: -25px;
	left: 50px;
	background: #A5C63B;
	border-radius: 5px;
	transform: rotate(-25deg);
	-webkit-transform: rotate(-25deg);
	-moz-transform: rotate(-25deg);
	-o-transform: rotate(-25deg);
	-ms-transform: rotate(-25deg);
}

.android .ear:after {
	left: auto;
	rightright: 50px;
	transform: rotate(25deg);
	-webkit-transform: rotate(25deg);
	-moz-transform: rotate(25deg);
	-o-transform: rotate(25deg);
	-ms-transform: rotate(25deg);
}

.android .ear:before {
	animation: animated-robot-ear-rightright 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-ear-rightright 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-ear-rightright 5s ease 1s infinite alternate;
	-o-animation: animated-robot-ear-rightright 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-ear-rightright 5s ease 1s infinite alternate;
}

@keyframes animated-robot-ear-rightright {
	0% {
	}

	25% {
		transform: translate(90px,6px) rotate(25deg);
	}

	50% {
	}

	100% {
	}
}

@-webkit-keyframes animated-robot-ear-rightright {
	0% {
	}

	25% {
		-webkit-transform: translate(90px,6px) rotate(25deg);
	}

	50% {
	}

	100% {
	}
}

@-moz-keyframes animated-robot-ear-rightright {
	0% {
	}

	25% {
		-moz-transform: translate(90px,6px) rotate(25deg);
	}

	50% {
	}

	100% {
	}
}

@-o-keyframes animated-robot-ear-rightright {
	0% {
	}

	25% {
		-o-transform: translate(90px,6px) rotate(25deg);
	}

	50% {
	}

	100% {
	}
}

@-ms-keyframes animated-robot-ear-rightright {
	0% {
	}

	25% {
		-ms-transform: translate(90px,6px) rotate(25deg);
	}

	50% {
	}

	100% {
	}
}

@keyframes animated-robot-ear-left {
	0% {
		transform: translate(-42px,0px);
	}

	25% {
	}

	50% {
	}

	100% {
	}
}

@-webkit-keyframes animated-robot-ear-left {
	0% {
		-webkit-transform: translate(-42px,0px);
	}

	25% {
	}

	50% {
	}

	100% {
	}
}

@-moz-keyframes animated-robot-ear-left {
	0% {
		-moz-transform: translate(-42px,0px);
	}

	25% {
	}

	50% {
	}

	100% {
	}
}

@-o-keyframes animated-robot-ear-left {
	0% {
		-o-transform: translate(-42px,0px);
	}

	25% {
	}

	50% {
	}

	100% {
	}
}

@-ms-keyframes animated-robot-ear-left {
	0% {
		-ms-transform: translate(-42px,0px);
	}

	25% {
	}

	50% {
	}

	100% {
	}
}

.android .hand:after,
.android .hand:before {
	content: ‘’;
	position: absolute;
	display: block;
	width: 44px;
	height: 150px;
	top: 96px;
	left: -52px;
	background: #A5C63B;
	border-radius: 44px;
}

.android .hand:after {
	left: auto;
	rightright: -52px;
}

.android .hand:after {
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
	-moz-transform-origin: 0 0;
	-o-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	animation: animated-robot-hand-rightright 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-hand-rightright 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-hand-rightright 5s ease 1s infinite alternate;
	-o-animation: animated-robot-hand-rightright 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-hand-rightright 5s ease 1s infinite alternate;
}

.android .hand:before {
	transform-origin: 44px 0;
	-webkit-transform-origin: 44px 0;
	-moz-transform-origin: 44px 0;
	-o-transform-origin: 44px 0;
	-ms-transform-origin: 44px 0;
	animation: animated-robot-hand-left 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-hand-left 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-hand-left 5s ease 1s infinite alternate;
	-o-animation: animated-robot-hand-left 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-hand-left 5s ease 1s infinite alternate;
}

@keyframes animated-robot-hand-rightright {
	0% {
		transform: translate(-52px,0px);
	}

	25% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
	}

	100% {
		transform: translate(-10px,120px) rotate(-180deg);
	}
}

@-webkit-keyframes animated-robot-hand-rightright {
	0% {
		-webkit-transform: translate(-52px,0px);
	}

	25% {
		-webkit-transform: rotate(0deg);
	}

	50% {
		-webkit-transform: rotate(-180deg);
	}

	100% {
		-webkit-transform: translate(-10px,120px) rotate(-180deg);
	}
}

@-moz-keyframes animated-robot-hand-rightright {
	0% {
		-moz-transform: translate(-52px,0px);
	}

	25% {
		-moz-transform: rotate(0deg);
	}

	50% {
		-moz-transform: rotate(-180deg);
	}

	100% {
		-moz-transform: translate(-10px,120px) rotate(-180deg);
	}
}

@-o-keyframes animated-robot-hand-rightright {
	0% {
		-o-transform: translate(-52px,0px);
	}

	25% {
		-o-transform: rotate(0deg);
	}

	50% {
		-o-transform: rotate(-180deg);
	}

	100% {
		-o-transform: translate(-10px,120px) rotate(-180deg);
	}
}

@-ms-keyframes animated-robot-hand-rightright {
	0% {
		-ms-transform: translate(-52px,0px);
	}

	25% {
		-ms-transform: rotate(0deg);
	}

	50% {
		-ms-transform: rotate(180deg);
	}

	100% {
		-ms-transform: translate(-10px,120px) rotate(180deg);
	}
}

@keyframes animated-robot-hand-left {
	0% {
		transform: translate(52px,0px);
	}

	25% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
	}

	100% {
		transform: translate(10px,120px) rotate(180deg);
	}
}

@-webkit-keyframes animated-robot-hand-left {
	0% {
		-webkit-transform: translate(52px,0px);
	}

	25% {
		-webkit-transform: rotate(0deg);
	}

	50% {
		-webkit-transform: rotate(180deg);
	}

	100% {
		-webkit-transform: translate(10px,120px) rotate(180deg);
	}
}

@-moz-keyframes animated-robot-hand-left {
	0% {
		-moz-transform: translate(52px,0px);
	}

	25% {
		-moz-transform: rotate(0deg);
	}

	50% {
		-moz-transform: rotate(180deg);
	}

	100% {
		-moz-transform: translate(10px,120px) rotate(180deg);
	}
}

@-o-keyframes animated-robot-hand-left {
	0% {
		-o-transform: translate(52px,0px);
	}

	25% {
		-o-transform: rotate(0deg);
	}

	50% {
		-o-transform: rotate(180deg);
	}

	100% {
		-o-transform: translate(10px,120px) rotate(180deg);
	}
}

@-ms-keyframes animated-robot-hand-left {
	0% {
		-ms-transform: translate(52px,0px);
	}

	25% {
		-ms-transform: rotate(0deg);
	}

	50% {
		-ms-transform: rotate(-180deg);
	}

	100% {
		-ms-transform: translate(10px,120px) rotate(-180deg);
	}
}

.android .foot:after,
.android .foot:before {
	content: ‘’;
	position: absolute;
	display: block;
	width: 44px;
	height: 110px;
	bottombottom: -90px;
	left: 40px;
	background: #A5C63B;
	border-radius: 44px;
}

.android .foot:after {
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
	-moz-transform-origin: 0 0;
	-o-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	animation: animated-robot-foot-rightright 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-foot-rightright 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-foot-rightright 5s ease 1s infinite alternate;
	-o-animation: animated-robot-foot-rightright 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-foot-rightright 5s ease 1s infinite alternate;
}

.android .foot:before {
	transform-origin: 44px 0;
	-webkit-transform-origin: 44px 0;
	-moz-transform-origin: 44px 0;
	-o-transform-origin: 44px 0;
	-ms-transform-origin: 44px 0;
	animation: animated-robot-foot-left 5s ease 1s infinite alternate;
	-webkit-animation: animated-robot-foot-left 5s ease 1s infinite alternate;
	-moz-animation: animated-robot-foot-left 5s ease 1s infinite alternate;
	-o-animation: animated-robot-foot-left 5s ease 1s infinite alternate;
	-ms-animation: animated-robot-foot-left 5s ease 1s infinite alternate;
}

@keyframes animated-robot-foot-rightright {
	0% {
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		transform: rotate(-90deg);
	}

	100% {
		transform: translate(-50px,-120px);
	}
}

@-webkit-keyframes animated-robot-foot-rightright {
	0% {
		-webkit-transform: rotate(0deg);
	}

	25% {
		-webkit-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-webkit-transform: rotate(-90deg);
	}

	100% {
		-webkit-transform: translate(-50px,-120px);
	}
}

@-moz-keyframes animated-robot-foot-rightright {
	0% {
		-moz-transform: rotate(0deg);
	}

	25% {
		-moz-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-moz-transform: rotate(-90deg);
	}

	100% {
		-moz-transform: translate(-50px,-120px);
	}
}

@-o-keyframes animated-robot-foot-rightright {
	0% {
		-o-transform: rotate(0deg);
	}

	25% {
		-o-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-o-transform: rotate(-90deg);
	}

	100% {
		-o-transform: translate(-50px,-120px);
	}
}

@-ms-keyframes animated-robot-foot-rightright {
	0% {
		-ms-transform: rotate(0deg);
	}

	25% {
		-ms-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-ms-transform: rotate(-90deg);
	}

	100% {
		-ms-transform: translate(-50px,-120px);
	}
}

@keyframes animated-robot-foot-left {
	0% {
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		transform: rotate(90deg);
	}

	100% {
		transform: translate(50px,-120px);
	}
}

@-webkit-keyframes animated-robot-foot-left {
	0% {
		-webkit-transform: rotate(0deg);
	}

	25% {
		-webkit-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-webkit-transform: rotate(90deg);
	}

	100% {
		-webkit-transform: translate(50px,-120px);
	}
}

@-o-keyframes animated-robot-foot-left {
	0% {
		-o-transform: rotate(0deg);
	}

	25% {
		-o-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-o-transform: rotate(90deg);
	}

	100% {
		-o-transform: translate(50px,-120px);
	}
}

@-moz-keyframes animated-robot-foot-left {
	0% {
		-moz-transform: rotate(0deg);
	}

	25% {
		-moz-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-moz-transform: rotate(90deg);
	}

	100% {
		-moz-transform: translate(50px,-120px);
	}
}

@-ms-keyframes animated-robot-foot-left {
	0% {
		-ms-transform: rotate(0deg);
	}

	25% {
		-ms-transform: rotate(0deg);
		bottombottom: -120px;
	}

	50% {
		-ms-transform: rotate(90deg);
	}

	100% {
		-ms-transform: translate(50px,-120px);
	}
}

.android .foot:after {
	left: auto;
	rightright: 40px;
} 
```