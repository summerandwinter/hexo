---
title: CSS3模拟的iPhone键盘
description: 用CSS3和图形字体实现的iPhone手机键盘效果
tags:
  - CSS3
  - iPhone
  - 键盘
id: 11
categories:
  - CSS3
date: 2013-09-03 15:09:54
permalink: css3-iphone-keyboard
---

最终的效果图（仅支持FF 3.6、Chrome 4、Safari 4）：

![css3-iphone4s-keyboard](/assets/images/lab/css3-iphone4s-keyboard.jpg)

<!--more-->

```html
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>   
<html xmlns=“http://www.w3.org/1999/xhtml”>   
 <head>   
  <title>使用CSS3模拟的iphone键盘</title>   
  <meta name=“generator” content=“editplus” />   
  <meta name=“author” content=“” />   
  <meta name=“keywords” content=“” />   
  <meta name=“description” content=“” />   
  <meta http-equiv=“content-type” content=“text/html;charset=utf-8″>   
  
<style type=“text/css”>   
@font-face {   
    font-family: ’iPhone keyboard’;   
    src: url(https://github.com/fiznool/Alinea-iPad-Demo/blob/master/public/css/fonts/iphone-keyboard.ttf);   
}   
  
body {   
    margin:0;   
    color:gray;   
    font-family:Helvetica, Arial, sans-serif;   
}   
  
#iphone-keyboard {   
    max-width:480px;   
    margin:10px auto;   
    padding:0;   
    overflow:hidden;   
    border-top:1px solid #3A3D42;   
  
    background:#757D8A;   
    background-image:-moz-linear-gradient(#9098A3, #454f5d);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#9098A3), to(#454f5d));   
  
    box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   
    -moz-box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   
    -webkit-box-shadow:0 1px 0 rgba(255,255,255,.3) inset;   
}   
  
#iphone-keyboard li {   
    text-align:center;   
    margin:.5em .1em .25em;   
    list-style:none;   
}   
  
#iphone-keyboard li:first-child {   
    margin-top:.3em;   
}   
  
#iphone-keyboard button,   
#iphone-keyboard button.specialkey:active {   
    color:#3A3D42;   
  
    text-decoration:none;   
    text-align:center;   
    text-shadow:0 1px 1px white;   
    font-weight:bold;   
  
    border:0;   
    border-top:1px solid rgba(255,255,255,.45);           
  
    background:#ECEDEF;   
    background-image:-moz-linear-gradient(#f8f8f9, #dddfe1);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#f8f8f9), to(#dddfe1));   
  
    border-radius:4px;   
    -moz-border-radius:4px;   
    -webkit-border-radius:4px;   
  
    box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   
    -moz-box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   
    -webkit-box-shadow:0 1px 3px rgba(0,0,0,.7), 0 1px 0 rgba(0,0,0,.3);   
}   
  
#iphone-keyboard button {   
    display:inline-block;   
    width:8.6%;   
    margin:0 .25%;   
    padding:.02em 0 .03em;   
  
    color:black;   
  
    font-size:1.35em;   
    font-family:Helvetica, Arial, sans-serif;   
}   
  
#iphone-keyboard button:active,   
#iphone-keyboard button.space:active {   
    background-image:-moz-linear-gradient(#E2E3E4, #AAADB4);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#E2E3E4), to(#AAADB4));   
}   
  
#iphone-keyboard button.specialkey {   
    background:#757D8A;   
    background-image:-moz-linear-gradient(#7f8792, #535b68);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#7f8792), to(#535b68));   
  
    color:white;   
    text-shadow:0 -1px 1px rgba(0,0,0,.5);   
}   
  
#iphone-keyboard button.space,   
#iphone-keyboard button.return,   
#iphone-keyboard button.numbers,   
#iphone-keyboard button.international {   
    font-size:1.04em;   
    padding:.25em 0;   
}   
  
#iphone-keyboard button.shift,   
#iphone-keyboard button.international,   
#iphone-keyboard button.backspace {   
    font-family:’iPhone keyboard’, Helvetica, sans-serif;   
}   
  
#iphone-keyboard button.shift,   
#iphone-keyboard button.backspace {   
    background-image:-moz-linear-gradient(#939ba6, #687180);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#939ba6), to(#687180));   
}   
  
#iphone-keyboard button.shift {   
    width:12%;   
    float:left;   
}   
  
#iphone-keyboard button.backspace {   
    width:12%;   
    float:right;   
}   
  
#iphone-keyboard button.numbers {   
    width:8.4%;   
    margin-right:1.4%;   
    float:left;   
}   
  
#iphone-keyboard button.international {   
    width:8.2%;   
    float:left;   
}   
  
#iphone-keyboard button.space {   
    width:59%;   
    color:#525c69;   
  
    background-image:-moz-linear-gradient(#dddfe2, #b4b8bf);   
    background-image:-webkit-gradient(linear, left top, left bottom, from(#dddfe2), to(#b4b8bf));   
}   
  
#iphone-keyboard button.return {   
    float:right;   
    width:18.9%;   
}   
  
</style>   
  
 </head>   
  
 <body>   
  
<ul id=“iphone-keyboard”>    
    <li>    
        <button type=“button”>Q</button>    
        <button type=“button”>W</button>    
        <button type=“button”>E</button>    
        <button type=“button”>R</button>    
        <button type=“button”>T</button>    
        <button type=“button”>Y</button>    
        <button type=“button”>U</button>    
        <button type=“button”>I</button>    
        <button type=“button”>O</button>    
        <button type=“button”>P</button>    
    </li>    
    <li>    
        <button type=“button”>A</button>    
        <button type=“button”>S</button>    
        <button type=“button”>D</button>    
        <button type=“button”>F</button>    
        <button type=“button”>G</button>    
        <button type=“button”>H</button>    
        <button type=“button”>J</button>    
        <button type=“button”>K</button>    
        <button type=“button”>L</button>    
    </li>    
    <li>    
        <button type=“button” class=“specialkey shift”>S</button>    
        <button type=“button”>Z</button>    
        <button type=“button”>X</button>    
        <button type=“button”>C</button>    
        <button type=“button”>V</button>    
        <button type=“button”>B</button>    
        <button type=“button”>N</button>    
        <button type=“button”>M</button>    
        <button type=“button” class=“specialkey backspace”>B</button>    
    </li>    
    <li>    
        <button type=“button” class=“specialkey numbers”>123</button>    
        <button type=“button” class=“specialkey international”>I</button>    
        <button type=“button” class=“space”>space</button>    
        <button type=“button” class=“specialkey return”>return</button>    
    </li>    
</ul>    
  
 </body>   
</html>  
```