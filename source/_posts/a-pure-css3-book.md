---
title: 纯CSS3写的仿真图书翻页效果
tags:
  - CSS3
  - 仿真
  - 图书翻页
id: 350
categories:
  - CSS3
date: 2013-09-18 22:12:40
permalink: a-pure-css3-book
---

对css3研究越深入，越觉得惊艳。css3说不上是万能的，但是它能实现的效果也超出了我的想象。它的高效率和动画效果的流畅性很多情况下能替代js的作用。个人习惯css3能实现的效果就不会用js,虽然在国内貌似没有css3的用武之地，这一点完成不能阻挡我对css3的热情。博主是一个地道的开源支持者，在学习css3的过程中写的一些demo会贴出来跟大家分享，都是一些想法最简单的实现，当然会有很多问题，希望大家指正，一起学习，一起进步。
<!--more-->

下面贴一个纯css3实现的仿真图书翻页效果，只是一个很粗糙的雏形，后续会慢慢完善。欢迎大家提供宝贵的意见。
![](/assets/images/lab/css3-book.jpg)

**<span style="color: #339966;">下面是源码：</span>**

```html
<!DOCTYPE>   
<html>   
<head>   
<meta http-equiv=“Content-Type” content=“text/html; charset=UTF-8″>   
<title>css3-book</title>   
<style>    
  
footer {   
font:14px/1.3 ’Microsoft YaHei’;   
margin-top:150px;      
color: #000;   
font-size: 15px;   
line-height: 1.6;   
padding: 60px 20px 0;   
text-align: center;   
display: block;   
}   
footer a{   
    color:#000;   
    text-decoration:none;   
}   
footer a:hover{   
    text-decoration:underline;   
    }   
@keyframes book   
    {   
    0%      {transform: rotate(0deg);left:0px;}   
    25%     {transform: rotate(20deg);left:0px;}   
    50%     {transform: rotate(0deg);left:500px;}   
    55%     {transform: rotate(0deg);left:500px;}   
    70%     {transform: rotate(0deg);left:500px;background:#1ec7e6;}   
    100%    {transform: rotate(-360deg);left:0px;}   
    }   
  
@-webkit-keyframes book   
    {   
    0%      {-webkit-transform: rotate(0deg);left:0px;}   
    25%     {-webkit-transform: rotate(20deg);left:0px;}   
    50%     {-webkit-transform: rotate(0deg);left:500px;}   
    55%     {-webkit-transform: rotate(0deg);left:500px;}   
    70%     {-webkit-transform: rotate(0deg);left:500px;background:#1ec7e6;}   
    100%    {-webkit-transform: rotate(-360deg);left:0px;}   
  
    }   
  
@-moz-keyframes book   
    {   
    0%   {-moz-transform: rotate(0deg);left:0px;}   
    25%  {-moz-transform: rotate(20deg);left:0px;}   
    50%  {-moz-transform: rotate(0deg);left:500px;}   
    55%  {-moz-transform: rotate(0deg);left:500px;}   
    70%  {-moz-transform: rotate(0deg);left:500px;background:#1ec7e6;}   
    100% {-moz-transform: rotate(-360deg);left:0px;}   
    }   
  
@-o-keyframes book   
    {   
    0%   {transform: rotate(0deg);left:0px;}   
    25%  {transform: rotate(20deg);left:0px;}   
    50%  {transform: rotate(0deg);left:500px;}   
    55%  {transform: rotate(0deg);left:500px;}   
    70%  {transform: rotate(0deg);left:500px;background:#1ec7e6;}   
    100% {transform: rotate(-360deg);left:0px;}   
    }   
    .container{   
    position:relative;   
    height:155px;   
    width:236px;   
    margin:40px auto;   
    -webkit-transform-style: preserve-3d;   
    -moz-transform-style: preserve-3d;   
    -o-transform-style: preserve-3d;   
     transform-style:preserve-3d;   
    }   
    .page2{   
       
    width:236px;   
    height:155px;   
    overflow:hidden;   
    -webkit-animation:page 5s ease 1s infinite alternate;   
    -moz-animation:page 5s ease 1s infinite alternate;   
    -o-animation:page 5s ease 1s infinite alternate;   
    animation:page 5s ease 1s infinite alternate;   
    }   
    #page1   
    {   
     position:absolute;   
     left:0px;   
     width:236px;   
     height:155px;   
     overflow:hidden;   
    }   
    #page2   
    {   
     position:absolute;   
     left:236px;   
     width:0px;   
     height:155px;   
     overflow:hidden;   
     -webkit-animation:page2 2s ease 1s infinite alternate;   
     -moz-animation:page2 2s ease 1s infinite alternate;   
     -o-animation:page2 2s ease 1s infinite alternate;   
     animation:page2 2s ease 1s infinite alternate;   
    }   
    #page3   
    {   
     position:absolute;   
     left:236px;   
     width:0px;   
     height:155px;   
     overflow:hidden;   
     -webkit-animation:page3 2s ease 1s infinite alternate;   
     -moz-animation:page3 2s ease 1s infinite alternate;   
     -o-animation:page3 2s ease 1s infinite alternate;   
     animation:page3 2s ease 1s infinite alternate;   
    }   
    #page3 img{   
    margin-left:-128px;   
    -webkit-animation:pagei3 2s ease 1s infinite alternate;   
    -moz-animation:pagei3 2s ease 1s infinite alternate;   
    -o-animation:pagei3 2s ease 1s infinite alternate;   
    animation:pagei3 2s ease 1s infinite alternate;   
    }   
    @-webkit-keyframes page2   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:0px}   
    }   
    @-moz-keyframes page2   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:0px}   
    }   
    @-o-keyframes page2   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:0px}   
    }   
    @keyframes page2   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:0px}   
    }   
    @-webkit-keyframes page3   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:128px}   
    }   
    @-moz-keyframes page3   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:128px}   
    }   
    @-o-keyframes page3   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:128px}   
    }   
    @keyframes page3   
    {   
    from {width: 0px;left:236px}   
    to {width: 128px;left:128px}   
    }   
    @-webkit-keyframes pagei3   
    {   
    from {margin-left:-236px}   
    to {margin-left:-128px}   
    }   
    @-moz-keyframes pagei3   
    {   
    from {margin-left:-236px}   
    to {margin-left:-128px}   
    }   
    @-o-keyframes pagei3   
    {   
    from {margin-left:-236px}   
    to {margin-left:-128px}   
    }   
    @keyframes pagei3   
    {   
    from {margin-left:-236px}   
    to {margin-left:-128px}   
    }   
</style>   
</head>   
<body>   
<div class=“container”>   
<div class=“page” id=“page1″>   
<img src=“1.jpg”/>   
</div>   
<div class=“page” id=“page2″>   
<img src=“2.jpg”/>   
</div>   
<div class=“page” id=“page3″>   
<img src=“2.jpg”/>   
</div>   
</div>   
<footer>Tutorial by &nbsp;&nbsp;<a href=“https://summerandwinter.github.io” target=“_blank”>sanyecao</a>&nbsp;&nbsp;©2013&nbsp;&nbsp;</footer>   
</body>   
</html> 
```

[查看示例][demo]

[demo]:   https://summerandwinter.github.io/lab/css3-book/index.html "纯css3仿真图书翻页效果"