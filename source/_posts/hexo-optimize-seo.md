---
title: Hexo优化方案 搜索引擎优化
date: 2016-11-25 11:25:46
tags:
 - Hexo
 - Hexo优化
 - SEO
categories:
 - Hexo

---

前面介绍了优化博客本身的页面优化（压缩页面减少请求大小），这里介绍下博客的SEO(搜索引擎优化)。
<!--more-->
# 关键字

找到主题模板文件的head部分,在`title`标签中加上自定义的关键字。

我的在`post/head.ejs`目录

```
 <title><% if (title){ %><%= title %> | <% } %><%= config.title %></title>
```
改成

```
 <title><% if (title){ %><%= title %> | <% } %><%= config.title %> <% if (theme.description){ %>-<%= theme.description %> <% } %> </title>

```
然后在主题配置文件`_config.yml`中加入
``` yml
description: "你的关键词"
```
# 外部链接
## 介绍
nofollow是HTML元标签(meta)的content属性和链接标签(a)的rel属性的一个值，告诉机器(爬虫)无需追踪目标页，为了对抗blogspam(博客垃圾留言信息)，Google推荐使用nofollow，告诉搜索引擎爬虫无需抓取目标页，同时告诉搜索引擎无需将的当前页的Pagerank传递到目标页。但是如果你是通过sitemap直接提交该页面，爬虫还是会爬取，这里的nofollow只是当前页对目标页的一种态度，并不代表其他页对目标页的态度。

## 作用
1.防止不可信的内容，最常见的是博客上的垃圾留言与评论中为了获取外链的垃圾链接，为了防止页面指向一些拉圾页面和站点。
2.付费链接：为了防止付费链接影响Google的搜索结果排名，Google建议使用nofollow属性。
3.引导爬虫抓取有效的页面：避免爬虫抓取一些无意义的页面，影响爬虫抓取的效率。

## 方法
* 给所有外部链接加上`rel="external nofollow"`属性
* 外部链接target="_blank"在新窗口种打开外部链接

## 实现

**安装插件**
```bash
npm install hexo-autonofollow --save
```
**配置**
编辑站点目录下的`_config.yml`，添加
``` yml
nofollow:
    enable: true
    exclude:
    - sanyecao.me
```
* enable - 开启插件，默认为false
* exclude - 豁免域名（不加nofollow标签的域名）

# 标准链接

## 介绍
canonical 是 Google、雅虎、微软等搜索引擎一起推出的一个标签，它的主要作用是用来解决由于网址形式不同内容相同而造成的内容重复问题。这个标签对搜索引擎作用非常大，简单的说它可以让搜索引擎只抓取你想要强调的内容。

## 实现
在主题目录种找到关于head的模板在`<head>`之间加入
```
 <% 
    var base_url = config.url;
    if (config.url.charAt(config.url.length - 1) !== '/') base_url += '/';
    var canonical_url = base_url + page.canonical_path.replace('index.html', '');
 %>
 <link rel="canonical" href="<%= canonical_url %>">
```
> PS:这里给出的代码是ejs方式，其他方式需要修改表达式，有[插件][canonical-plugin]的可以实现这个功能，但是个人觉得太麻烦，所以直接参考插件在主题里实现了。

[canonical-plugin]:   https://github.com/HyunSeob/hexo-auto-canonical "hexo-auto-canonical"

# 网络爬虫

robots.txt是一种存放于网站根目录下的ASCII编码的文本文件，它的作用是告诉搜索引擎此网站中哪些内容是可以被爬取的，哪些是禁止爬取的。robots.txt应该放在站点目录下的source文件中，网站生成后在网站的根目录(站点目录/public/)下。

我的robots.txt文件内容如下
```
User-agent: *
Allow: /
Allow: /archives/
Allow: /categories/
Allow: /about/
Allow: /lab/

Disallow: /js/
Disallow: /css/
```

# 站点地图

Sitemap即网站地图，它的作用在于便于搜索引擎更加智能地抓取网站。最简单和常见的sitemap形式，是XML文件，在其中列出网站中的网址以及关于每个网址的其他元数据（上次更新时间、更新的频率及相对其他网址重要程度等）。

## 插件
```bash
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```
## 配置

编辑站点目录下的_config.yml，添加
```yml
# sitemap网站地图
sitemap:
path: sitemap.xml
# baidu stimap
baidusitemap:
path: baidusitemap.xml
```
在robots.txt文件中添加
```
Sitemap: http://sanyecao.me/sitemap.xml
Sitemap: http://sanyecao.me/baidusitemap.xml
```

# 提交链接
由于Github禁止百度爬虫访问博客，导致博客无法被百度收录。对于把Hexo部署在GitHub Pages上的用户来说，上面的sitemap和robots.txt都是无效的，只能通过主动提交链接的方式来实现。

首先，在Hexo根目录下，安装插件：
```bash
npm install hexo-baidu-url-submit --save
```
然后，同样在根目录下，把以下内容配置到_config.yml文件中:
```yml
baidu_url_submit:
  count: 3 ## 比如3，代表提交最新的三个链接
  host: sanyecao.me ## 在百度站长平台中注册的域名
  token: your_token ## 请注意这是您的秘钥， 请不要发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里
```
其次，记得查看_config.ym文件中url的值， 必须包含是百度站长平台注册的域名（一般有www）， 比如:
```yml
# URL
url: http://sanyecao.me
root: /
permalink: :title.html
```
最后，加入新的deployer:
```yml
deploy:
- type: baidu_url_submitter
```
执行hexo deploy的时候，新的连接就会被推送了。

实现原理

推送功能的实现，分为两部分：
新链接的产生， hexo generate 会产生一个文本文件，里面包含最新的链接
新链接的提交， hexo deploy 会从上述文件中读取链接，提交至百度搜索引擎
[参考链接][reference]
[reference]:  http://hui-wang.info/2016/10/23/Hexo%E6%8F%92%E4%BB%B6%E4%B9%8B%E7%99%BE%E5%BA%A6%E4%B8%BB%E5%8A%A8%E6%8F%90%E4%BA%A4%E9%93%BE%E6%8E%A5/ "Hexo插件之百度主动提交链接"
