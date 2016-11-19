---
title: Ajaxload动态加载动画生成工具的实现（ajaxload的本地移植）
description: 前段时间看到一个国外的网站，在线生成ajax loading动画。觉得很实用，于是动起了移植到自己网站的念头（一直以来的习惯，看到好的工具总想着移植到本地好好研究）。根据以往移植的经验最终把这个工具移植到自己网站上了，生成图片的核心还是用了原来网站的接口，所以这个功能的实现完全依赖于原网站，生成和下载图片的速度取决于网速，由于是国外的网站，功能并不稳定。下面介绍下我移植的过程已经遇到的问题。
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
---

### 前言

前段时间看到一个国外的网站，在线生成ajax loading动画。觉得很实用，于是动起了移植到自己网站的念头（一直以来的习惯，看到好的工具总想着移植到本地好好研究）。根据以往移植的经验最终把这个工具移植到自己网站上了，生成图片的核心还是用了原来网站的接口，所以这个功能的实现完全依赖于原网站，生成和下载图片的速度取决于网速，由于是国外的网站，功能并不稳定。下面介绍下我移植的过程已经遇到的问题。

### 1.把原网站的代码本地化

这一步比较简单，不过有点麻烦，相关的图片，css,js，html文件保存在本地。

### 2.实现生成图片的功能

这里遇到了第一个问题，网站生成的图片保存在根据颜色值生成的途径上，而这些图片有防盗链设置，不 允许外来网站引用。尝试过写程序把网站上的所有图片按原目录下载到本地，但是图片太多，放弃了这个思路。

最后采取的办法是通过伪造来源访问原网站的图片，获取图片数据，并直接输出在页面。

下面是实现的代码
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span class="vars">$file</span><span>=</span><span class="vars">$_REQUEST</span><span>['file'];  </span></span>
2.  <span><span class="vars">$url</span><span> = 'http:</span><span class="comment">//www.ajaxload.info/'.$file;</span><span>  </span></span>
3.  <span><span class="vars">$ch</span><span> = curl_init();  </span></span>
4.  <span>curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_URL, </span><span class="vars">$url</span><span>);  </span></span>
5.  <span>curl_setopt (<span class="vars">$ch</span><span>, CURLOPT_HEADER,0);  </span></span>
6.  <span>curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_RETURNTRANSFER, 1);  </span></span>
7.  <span>curl_setopt (<span class="vars">$ch</span><span>, CURLOPT_REFERER, </span><span class="string">"http://www.ajaxload.info"</span><span>);  </span></span>
8.  <span>curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_FOLLOWLOCATION, 1);  </span></span>
9.  <span>   </span>
10.  <span><span class="vars">$chData</span><span> = curl_exec(</span><span class="vars">$ch</span><span>);  </span></span>
11.  <span><span class="keyword">if</span><span> (curl_errno(</span><span class="vars">$ch</span><span>)) {  </span></span>
12.  <span>    <span class="func">echo</span><span> 'Curl error: ' . curl_error(</span><span class="vars">$ch</span><span>);  </span></span>
13.  <span>}  </span>
14.  <span>   </span>
15.  <span>curl_close(<span class="vars">$ch</span><span>);  </span></span>
16.  <span>header(<span class="string">"Content-type:image/gif"</span><span>);  </span></span>
17.  <span><span class="func">echo</span><span> </span><span class="vars">$chData</span><span>;  </span></span>
</div>
<span style="color: #339966;">注：本人的网站基于BAE建设，与其他服务器的伪造来源有些区别</span>

其他服务器需把
<div class="dp-highlighter">

1.  <span><span>curl_setopt(</span><span class="vars">$ch</span><span>, CURLOPT_FOLLOWLOCATION, 1);  </span></span>
</div>
替换成
<div class="dp-highlighter">

1.  <span><span>curl_setopt(</span><span class="vars">$ch</span><span>, CURLOPT_FOLLOWLOCATION, 0);  </span></span>
</div>
把上述代码保存为ajaxload.php文件<span style="font-size: 16px;">用下面的代码</span>
<div class="dp-highlighter">

1.  <span><span class="keyword">var</span><span> url = 'http:</span><span class="comment">//bloglaotou.duapp.com/ajaxloader.php?file=cache/'+c1+'/'+c2+'/'+c3+'/'+c4+'/'+c5+'/'+c6+'/'+$$('type').value+'-'+trans+'.gif';</span><span>  </span></span>
</div>
<span style="color: #339966;">注：http://bloglaotou.duapp.com替换成你自己的ajaxloader.php文件的地址。</span>

替换原网站script.js文件中的
<div class="dp-highlighter">

1.  <span><span class="keyword">var</span><span> url = 'cache/'+c1+'/'+c2+'/'+c3+'/'+c4+'/'+c5+'/'+c6+'/'+$('type').value+'-'+trans+'.gif';  </span></span>
</div>

### 3.下载图片的实现

同样的原因，原网站的下载功能移植到本地后也不能用了，实现的方法与生成图片的方法类似

代码如下
<div class="dp-highlighter">

1.  <span><span class="keyword">if</span><span>(isset(</span><span class="vars">$_GET</span><span>[url])){  </span></span>
2.  <span>  </span>
3.  <span>    <span class="vars">$file</span><span>=</span><span class="vars">$_GET</span><span>[url];</span><span class="comment">//获取参数</span><span>  </span></span>
4.  <span>    header(<span class="string">"Content-Type: application/force-download"</span><span>);  </span></span>
5.  <span>    header(<span class="string">"Content-Disposition: attachment; filename=ajax-loading.gif"</span><span>);</span><span class="comment">//$downname是下载后的文件名</span><span>  </span></span>
6.  <span>    <span class="vars">$file</span><span>=</span><span class="vars">$_REQUEST</span><span>['url'];  </span></span>
7.  <span>    <span class="vars">$url</span><span> = 'http:</span><span class="comment">//www.ajaxload.info/'.$file;</span><span>  </span></span>
8.  <span>    <span class="vars">$ch</span><span> = curl_init();  </span></span>
9.  <span>    curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_URL, </span><span class="vars">$url</span><span>);  </span></span>
10.  <span>    curl_setopt (<span class="vars">$ch</span><span>, CURLOPT_HEADER,0);  </span></span>
11.  <span>    curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_RETURNTRANSFER, 1);  </span></span>
12.  <span>    curl_setopt (<span class="vars">$ch</span><span>, CURLOPT_REFERER, </span><span class="string">"http://www.ajaxload.info"</span><span>);  </span></span>
13.  <span>    curl_setopt(<span class="vars">$ch</span><span>, CURLOPT_FOLLOWLOCATION, 1);  </span></span>
14.  <span>      </span>
15.  <span>    <span class="vars">$chData</span><span> = curl_exec(</span><span class="vars">$ch</span><span>);  </span></span>
16.  <span>    <span class="keyword">if</span><span> (curl_errno(</span><span class="vars">$ch</span><span>)) {  </span></span>
17.  <span>        <span class="func">echo</span><span> 'Curl error: ' . curl_error(</span><span class="vars">$ch</span><span>);  </span></span>
18.  <span>    }  </span>
19.  <span>      </span>
20.  <span>    curl_close(<span class="vars">$ch</span><span>);  </span></span>
21.  <span>    <span class="func">echo</span><span> </span><span class="vars">$chData</span><span>;  </span></span>
22.  <span>    <span class="func">exit</span><span>;</span><span class="comment">//结束程序</span><span>  </span></span>
23.  <span>}  </span>
</div>
把上面的代码保存为download.php<span style="font-size: 16px;">并把原网站script.js文件中的</span>
<div class="dp-highlighter">

1.  <span><span class="keyword">if</span><span>(!$('downloadit')) domEl('a','Download it',[['id','downloadit'],['href','download.php?img='+url]],$('previewinner'));  </span></span>
</div>
替换为
<div class="dp-highlighter">

1.  <span><span class="keyword">if</span><span>(!$('downloadit')) domEl('a','下载',[['id','downloadit'],['href','http:</span><span class="comment">//bloglaotou.duapp.com/download.php?url='+path]],$('previewinner'));</span><span>  </span></span>
</div>
<span style="color: #339966;">注：http://bloglaotou.duapp.com替换成你自己的ajaxloader.php文件的地址。</span>

### 效果预览

[查看示例](http://tutorial.duapp.com/lab/ajax/index.htm "Ajaxload动态加载动画生成工具的实现（ajaxload的本地移植）")

该功能已经集成到网站的小工具里，点这里[查看](http://bloglaotou.duapp.com/webtools_ajaxloader "在线Ajax加载gif制作")

[download id="16"]