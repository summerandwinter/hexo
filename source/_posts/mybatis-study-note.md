---
title: MyBatis学习笔记
description: 记录一些MyBatis学习过程中经常用到的知识点，很简单常用到但是又记不住，做个记录后面慢慢补充
id: 666
categories:
  - Java
date: 2013-12-17 15:30:59
tags:
  - MyBatis
permalink: mybatis-study-note
---

在ibatis配置文件写SQL语句的时候对于一些比如“&lt;”,"&gt;","&lt;&gt;","&amp;"," ' "," " "是不能够识别的，并且会抛异常。

一般可以如下改写：`&amp;lt; &lt; `    `&amp;gt;  &gt; `       `&amp;lt;&amp;gt; &lt;&gt; `     ` &amp;amp; &amp;` `&amp;apos;  '`     `&amp;quot; "`

或者使用 &lt;![CDATA[”+“]]&gt;