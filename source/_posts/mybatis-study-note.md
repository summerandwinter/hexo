---
title: mybatis学习笔记
id: 666
categories:
  - Java
date: 2013-12-17 15:30:59
tags:
---

在ibatis配置文件写SQL语句的时候对于一些比如“&lt;”,"&gt;","&lt;&gt;","&amp;"," ' "," " "是不能够识别的，并且会抛异常。

一般可以如下改写：`&amp;lt; &lt; `    `&amp;gt;  &gt; `       `&amp;lt;&amp;gt; &lt;&gt; `     ` &amp;amp; &amp;` `&amp;apos;  '`     `&amp;quot; "`

或者使用 &lt;![CDATA[”+“]]&gt;