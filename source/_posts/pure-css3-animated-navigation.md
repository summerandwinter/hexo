---
title: 纯CSS3带动画效果导航菜单
tags:
  - CSS3
  - 二级菜单
  - 动画
  - 导航
  - 质感
id: 323
categories:
  - CSS3
date: 2013-09-14 14:11:02
permalink: pure-css3-animated-navigation
---

随着互联网的发展，网页能表现的东西越来越多。由最开始单纯的文字和链接构成的网页，到后来的表格布局，再到div+css模式，现在发展到了html+css3。网页能表达的东西越来越多，css3兴起已经很多年了，不多由于国内网站要求对IE的兼容，html5+css3的发展很缓慢。<!--more-->

html5+css3的出现给前端开发者提供了更多的可能性，以前很多只能通过JS实现的效果用纯粹的css3就能实现了。

下面介绍一个博主在css3学习过程中写的一个纯css3实现的带动画效果的导航菜单。

下面是效果图：

![pure-css3-animated-navigation](https://summerandwinter.github.io/assets/images/lab/pure-css3-animated-navigation.jpg)



[查看示例](https://summerandwinter.github.io/lab/navigation/index.html)（**请在支持css3的浏览器中查看效果，最新版的chrome浏览器下效果最佳。**）


**特别声明此demo为博主原创，可以下载免费使用。**
话不多说，直接贴源码：
**css:**
```css
*{
margin:0;
padding:0;
}
html{
background: #333d43;
}
footer a{
color:#fff;
text-decoration:none;
}
footer a:hover{
text-decoration:underline;
}
body{
min-height:500px;
font:14px/1.3 ‘Microsoft YaHei’;
color:#888;
padding:10px;
}
nav{
position:relative;
border-radius:5px;
display:block;
margin: 30px auto 0;
width:800px;
background:#fff;
border-radius:5px;
box-shadow: 1px 1px 33px #fff;
}
.homeIcon{
position:relative;
display:block;
width:50px;
height:40px;
}
#home:hover > a .home-top{
border-bottom:10px #fff solid;
}
#home:hover > a .home-top-r{
background:#fff;
}
#home:hover > a .home-door-l{
background:#fff;
}
#home:hover > a .home-door-r{
background:#fff;
}
.home-top{
position:absolute;
left:15px;
top:0px;
border-left:10px transparent solid;
border-right:10px transparent solid;
border-top:10px transparent solid;
border-bottom:10px #C2C2C2 solid;
box-shadow: 0px 1px 0px #000;
width:0px;
height:0px;
}
.home-top-r{
position:absolute;
left:27px;
top:13px;
width:4px;
height:6px;
background:#C2C2C2;
}
.home-door-l{
position:absolute;
left:18px;
top:20px;
width:5px;
height:6px;
background:#C2C2C2;
}
.home-door-r{
position:absolute;
left:27px;
top:20px;
width:5px;
height:6px;
background:#C2C2C2;
}
.fancyNav{
display:block;
position:relative;
border-radius:5px;
background-image: linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);
background-image: -webkit-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);
background-image: -moz-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);
background-image: -o-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%);
background-image: -ms-linear-gradient(rgba(41, 41, 41, 0.75) 0%, rgba(54, 54, 54, 0.72) 50%, rgba(24, 23, 23, 0.94) 51%); }
.fancyNav li{
position:relative;
height:40px;
line-height:40px;
padding:0px 20px;
display:block;
float:left;
border-right:1px #000 solid;
}
.fancyNav li:hover{
background:rgba(10, 5, 5, 0.2);
}
.fancyNav li ul{
position:absolute;
display:none;
left:0px;
overflow:hidden;
}
.fancyNav li:hover>ul{
display:block;
animation:animated .5s ease 0s 1 alternate;
-webkit-animation:animated .5s ease 0s 1 alternate;
-moz-animation:animated .5s ease 0s 1 alternate;
-ms-animation:animated .5s ease 0s 1 alternate;
-o-animation:animated .5s ease 0s 1 alternate;}
@keyframes animated
{
0% {transform: rotate(0deg);opacity:0;}
100% {transform: rotate(-360deg);opacity:1;}
}
@-webkit-keyframes animated
{
0% {-webkit-transform: rotate(0deg);opacity:0;}
100% {-webkit-transform: rotate(-360deg);opacity:1;}
}
@-moz-keyframes animated
{
0% {-moz-transform: rotate(0deg);opacity:0;}
100% {-moz-transform: rotate(-360deg);opacity:1;}
}
@-o-keyframes animated
{
0% {-o-transform: rotate(0deg);opacity:0;}
100% {-o-transform: rotate(-360deg);opacity:1;}
}
@-ms-keyframes animated
{
0% {-ms-transform: rotate(0deg);opacity:0;}
100% {-ms-transform: rotate(-360deg);opacity:1;}
}
.fancyNav li ul li
{
display:block;
margin:0px;
border-top: 1px solid #989898;
border-bottom: 1px solid #343434;
background:rgba(10, 5, 5, 0.45);
height:30px;
line-height:30px;
width:60px;
}
.fancyNav li ul li:hover{
background:rgba(10, 5, 5, 0.9);
}
li a{
color:#fff;
text-decoration:none;
text-shadow: 0px 1px 0px #000
}
input[type=search] {
-webkit-appearance: none;
outline: none;
}
#searchform {
position: absolute;
rightright: 10px;
bottombottom: 6px;
z-index: 100;
width: 160px;
}
#searchform #s {
outline:none;
width: 80px;
float: rightright;
background: #fff;
border: none;
padding: 6px 10px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.2);
-moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.2);
box-shadow: inset 0 1px 2px rgba(0,0,0,.2);
-webkit-transition: width .7s;
-moz-transition: width .7s;
transition: width .7s;
}
#searchform #s:focus {
width: 150px;
}
footer {
margin-top:400px;
color: #BBBBBB;
font-size: 15px;
line-height: 1.6;
padding: 60px 20px 0;
text-align: center;
display: block;
} 
```
**<span style="color: #339966;">html:</span>**
```html
<!DOCTYPE html>

<html>
<head>
<meta charset="utf-8" />
<title>CSS3 Animated Navigation Menu | Tutorialzine Demo</title>
<!– Our CSS stylesheet file –>
<link rel="stylesheet" href="assets/css/styles.css" />
<!– Including the Lobster font from Google’s Font Directory –>
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lobster" />
<!– Enabling HTML5 support for Internet Explorer –>
<!–[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]–>
</head>
<body>
<form id="searchform">
<input type="search" id="s" placeholder="Search">
</form>
<nav>
<ul class="fancyNav">
<li id="home"><a href="#home" class="homeIcon"><div class="home-top"></div><div class="home-top-r"></div><div class="home-door-l"></div><div class="home-door-r"></div></a></li>
<li id="news"><a href="#news">前端设计</a>
<ul>
<li><a href="">HTML5</a></li>
<li><a href="">CSS3</a></li>
<li><a href="">JQUERY</a></li>
</ul>
</li>
<li id="about"><a href="#about">编程语言</a>
<ul>
<li><a href="">PHP</a></li>
<li><a href="">JAVA</a></li>
<li><a href="">wordpress</a></li>
<li><a href="">CodeIgniter</a></li>
</ul>
</li>
<li id="services"><a href="#services">生活</a>
</li>
<li id="contact"><a href="#contact">留言板</a>
</li>
<form id="searchform">
<input type="search" id="s" placeholder="Search">
</form>
<div style="display:block;clear:both;"></div>
</ul>
</nav>
<footer>Tutorial by &nbsp;&nbsp;<a href="https://summerandwinter.github.io" target="_blank">sanyecao</a>&nbsp;&nbsp;©2013</footer>
</body>
</html> 
```