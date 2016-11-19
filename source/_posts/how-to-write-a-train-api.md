---
title: 火车查询API接口
description: 通过12306网站提供的接口实现火车票余票查询，现在官网已经把这个接口封了，这篇文章留在这里做个记录。
id: 296
categories:
  - PHP
date: 2013-09-09 13:37:27
tags:
---

1.获取火车余票信息：

使用铁路局官网提供的接口：

http://dynamic.12306.cn/otsquery/query/queryRemanentTicketAction.do?method=queryLeftTicket

&amp;orderRequest.train_date=**2013-09-10**

&amp;orderRequest.from_station_telecode=**ZZQ**

&amp;orderRequest.to_station_telecode=**NJH**

&amp;orderRequest.train_no=

&amp;trainPassType=QB

&amp;trainClass=QB%23D%23Z%23T%23K%23QT%23

&amp;includeStudent=00

&amp;seatTypeAndNum=

&amp;orderRequest.start_time_str=00%3A00--24%3A00