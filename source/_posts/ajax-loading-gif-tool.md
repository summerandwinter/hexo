---
title: Ajaxload动态加载动画生成工具的实现（ajaxload的本地移植）
tags:
  - ajax
  - load
  - 动态加载
  - 工具
  - 本地移植
id: 655
categories:
  - 前端设计
date: 2013-11-06 16:11:30
permalink: ajax-loading-gif-tool
---

# 前言

前段时间看到一个[国外的网站][website]，在线生成ajax loading动画。觉得很实用，于是动起了移植到自己网站的念头（一直以来的习惯，看到好的工具总想着移植到本地好好研究）。根据以往移植的经验最终把这个工具移植到自己网站上了，生成图片的核心还是用了原来网站的接口，所以这个功能的实现完全依赖于原网站，生成和下载图片的速度取决于网速，由于是国外的网站，功能并不稳定。下面介绍下我移植的过程已经遇到的问题。
<!--more-->
[website]:   http://www.ajaxload.info/ "ajaxinfo"

# 把原网站的代码本地化

这一步比较简单，不过有点麻烦，相关的图片，css,js，html文件保存在本地。

# 实现生成图片的功能

这里遇到了第一个问题，网站生成的图片保存在根据颜色值生成的途径上，而这些图片有防盗链设置，不 允许外来网站引用。尝试过写程序把网站上的所有图片按原目录下载到本地，但是图片太多，放弃了这个思路。

最后采取的办法是通过伪造来源访问原网站的图片，获取图片数据，并直接输出在页面。

下面是实现的代码

```php
$file=$_REQUEST[‘file’];
$url = ‘http://www.ajaxload.info/‘.$file;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_REFERER, “http://www.ajaxload.info“);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$chData = curl_exec($ch);
if (curl_errno($ch)) {
echo ‘Curl error: ‘ . curl_error($ch);
}
curl_close($ch);
header(“Content-type:image/gif”);
echo $chData; 
```
>注：本人的网站基于BAE建设，与其他服务器的伪造来源有些区别

其他服务器需把

```php
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
```
替换成

```php
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0); 
```

把上述代码保存为ajaxload.php文件**用下面的代码**

```php
var url = ‘http://bloglaotou.duapp.com/ajaxloader.php?file=cache/‘+c1+’/‘+c2+’/‘+c3+’/‘+c4+’/‘+c5+’/‘+c6+’/‘+$$(‘type’).value+’-‘+trans+’.gif’;
```

> 注：`http://bloglaotou.duapp.com` 替换成你自己的ajaxloader.php文件的地址。

替换原网站script.js文件中的

```php
var url = ‘cache/‘+c1+’/‘+c2+’/‘+c3+’/‘+c4+’/‘+c5+’/‘+c6+’/‘+$(‘type’).value+’-‘+trans+’.gif’; 
```

# 实现图片下载

同样的原因，原网站的下载功能移植到本地后也不能用了，实现的方法与生成图片的方法类似

代码如下

```php
if(isset($_GET[url])){
$file=$_GET[url];//获取参数
header(“Content-Type: application/force-download”);
header(“Content-Disposition: attachment; filename=ajax-loading.gif”);//$downname是下载后的文件名
$file=$_REQUEST[‘url’];
$url = ‘http://www.ajaxload.info/‘.$file;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt ($ch, CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_REFERER, “http://www.ajaxload.info“);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$chData = curl_exec($ch);
if (curl_errno($ch)) {
echo ‘Curl error: ‘ . curl_error($ch);
}
curl_close($ch);
echo $chData;
exit;//结束程序
} 
```
>注：`http://bloglaotou.duapp.com` 替换成你自己的ajaxloader.php文件的地址。
