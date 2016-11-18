---
title: 根据中国气象局提供的API接口实现天气查询
tags:
  - api
  - 中国气象局
  - 天气查询
id: 270
categories:
  - PHP
date: 2013-09-08 20:33:09
---

**中国气象局提供了三个天气查询的API接口：**

【1】http://www.weather.com.cn/data/sk/**101190101**.html

【2】http://www.weather.com.cn/data/cityinfo/**101190101**.html

【3】http://m.weather.com.cn/data/**101190101**.html

以json格式返回数据，第一和第二个接口返回当天实时的天气数据，第三个返回未来五天天气情况。

其中地址里的加粗显示的数字表示城市的代码：101190101 代表南京（获取城市代码的方法下面会说明）

第三个接口的返回数据示例及说明如下：

<!--more-->
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>{   </span></span>
2.  <span>weatherinfo: {   </span>
3.  <span>city: </span><span class="string">"南京"</span><span>,   </span>
4.  <span>city_en: </span><span class="string">"nanjing"</span><span>,   </span>
5.  <span>date_y: </span><span class="string">"2013年9月8日"</span><span>,   </span>
6.  <span class="func">date</span><span>: </span><span class="string">""</span><span>,   </span>
7.  <span>week: </span><span class="string">"星期日"</span><span>,   </span>
8.  <span>fchh: </span><span class="string">"18"</span><span>,   </span>
9.  <span>cityid: </span><span class="string">"101190101"</span><span>,                     </span><span class="comment">//城市代码 </span><span>  </span>
10.  <span>temp1: </span><span class="string">"22℃~30℃"</span><span>,                     </span><span class="comment">//第一天（当天）最高喝最低温度（摄氏温度） </span><span>  </span>
11.  <span>temp2: </span><span class="string">"23℃~29℃"</span><span>,                     </span><span class="comment">//第二天最高喝最低温度（摄氏温度） </span><span>  </span>
12.  <span>temp3: </span><span class="string">"22℃~28℃"</span><span>,                     </span><span class="comment">//第三天最高喝最低温度（摄氏温度） </span><span>  </span>
13.  <span>temp4: </span><span class="string">"23℃~30℃"</span><span>,                     </span><span class="comment">//第四天最高喝最低温度（摄氏温度） </span><span>  </span>
14.  <span>temp5: </span><span class="string">"24℃~28℃"</span><span>,                     </span><span class="comment">//第五天最高喝最低温度（摄氏温度） </span><span>  </span>
15.  <span>temp6: </span><span class="string">"23℃~28℃"</span><span>,                     </span><span class="comment">//第六天最高喝最低温度（摄氏温度） </span><span>  </span>
16.  <span>tempF1: </span><span class="string">"71.6℉~86℉"</span><span>,                </span><span class="comment">//第一天（当天）最高喝最低温度（华氏温度） </span><span>  </span>
17.  <span>tempF2: </span><span class="string">"73.4℉~84.2℉"</span><span>,             </span><span class="comment">//第二天最高喝最低温度（华氏温度） </span><span>  </span>
18.  <span>tempF3: </span><span class="string">"71.6℉~82.4℉"</span><span>,             </span><span class="comment">//第三天最高喝最低温度（华氏温度） </span><span>  </span>
19.  <span>tempF4: </span><span class="string">"73.4℉~86℉"</span><span>,                </span><span class="comment">//第四天最高喝最低温度（华氏温度） </span><span>  </span>
20.  <span>tempF5: </span><span class="string">"75.2℉~82.4℉"</span><span>,             </span><span class="comment">//第五天最高喝最低温度（华氏温度） </span><span>  </span>
21.  <span>tempF6: </span><span class="string">"73.4℉~82.4℉"</span><span>,             </span><span class="comment">//第六天最高喝最低温度（华氏温度） </span><span>  </span>
22.  <span>weather1: </span><span class="string">"多云转阴"</span><span>,                    </span><span class="comment">//第一天（当天）天气 </span><span>  </span>
23.  <span>weather2: </span><span class="string">"小雨"</span><span>,                          </span><span class="comment">//第二天天气 </span><span>  </span>
24.  <span>weather3: </span><span class="string">"小雨"</span><span>,   </span>
25.  <span>weather4: </span><span class="string">"阴"</span><span>,   </span>
26.  <span>weather5: </span><span class="string">"小雨转中雨"</span><span>,   </span>
27.  <span>weather6: </span><span class="string">"中雨转阴"</span><span>,   </span>
28.  <span>img1: </span><span class="string">"1"</span><span>,                            </span><span class="comment">//第一天的天气图片代码1 </span><span>  </span>
29.  <span>img2: </span><span class="string">"2"</span><span>,                            </span><span class="comment">//第一天的天气图片代码2 </span><span>  </span>
30.  <span>img3: </span><span class="string">"7"</span><span>,                           </span><span class="comment">//第二天的天气图片代码1 </span><span>  </span>
31.  <span>img4: </span><span class="string">"99"</span><span>,                          </span><span class="comment">//第二天的天气图片代码2 </span><span>  </span>
32.  <span>img5: </span><span class="string">"7"</span><span>,   </span>
33.  <span>img6: </span><span class="string">"99"</span><span>,   </span>
34.  <span>img7: </span><span class="string">"2"</span><span>,   </span>
35.  <span>img8: </span><span class="string">"99"</span><span>,   </span>
36.  <span>img9: </span><span class="string">"7"</span><span>,   </span>
37.  <span>img10: </span><span class="string">"8"</span><span>,   </span>
38.  <span>img11: </span><span class="string">"8"</span><span>,   </span>
39.  <span>img12: </span><span class="string">"2"</span><span>,   </span>
40.  <span>img_single: </span><span class="string">"2"</span><span>  </span>
41.  <span>img_title1: </span><span class="string">"多云"</span><span>,                    </span><span class="comment">//第一天的天气图片1的标题 </span><span>  </span>
42.  <span>img_title2: </span><span class="string">"阴"</span><span>,                       </span><span class="comment">//第一天的天气图片2的标题 </span><span>  </span>
43.  <span>img_title3: </span><span class="string">"小雨"</span><span>,                    </span><span class="comment">//第二天的天气图片1的标题 </span><span>  </span>
44.  <span>img_title4: </span><span class="string">"小雨"</span><span>,                    </span><span class="comment">//第二天的天气图片2的标题 </span><span>  </span>
45.  <span>img_title5: </span><span class="string">"小雨"</span><span>,   </span>
46.  <span>img_title6: </span><span class="string">"小雨"</span><span>,   </span>
47.  <span>img_title7: </span><span class="string">"阴"</span><span>,   </span>
48.  <span>img_title8: </span><span class="string">"阴"</span><span>,   </span>
49.  <span>img_title9: </span><span class="string">"小雨"</span><span>,   </span>
50.  <span>img_title10: </span><span class="string">"中雨"</span><span>,   </span>
51.  <span>img_title11: </span><span class="string">"中雨"</span><span>,   </span>
52.  <span>img_title12: </span><span class="string">"阴"</span><span>,   </span>
53.  <span>img_title_single: </span><span class="string">"阴"</span><span>,   </span>
54.  <span>wind1: </span><span class="string">"东风3-4级"</span><span>,                      </span><span class="comment">//第一天风向范围 </span><span>  </span>
55.  <span>wind2: </span><span class="string">"东风3-4级"</span><span>,                      </span><span class="comment">//第二天风向范围 </span><span>  </span>
56.  <span>wind3: </span><span class="string">"北风转东北风3-4级"</span><span>,   </span>
57.  <span>wind4: </span><span class="string">"东北风3-4级"</span><span>,   </span>
58.  <span>wind5: </span><span class="string">"东北风转西风3-4级"</span><span>,   </span>
59.  <span>wind6: </span><span class="string">"西南风转西风3-4级"</span><span>,   </span>
60.  <span>fx1: </span><span class="string">"东风"</span><span>,   </span>
61.  <span>fx2: </span><span class="string">"东风"</span><span>,   </span>
62.  <span>fl1: </span><span class="string">"3-4级"</span><span>,                                     </span><span class="comment">//第一天风级范围                      </span><span>  </span>
63.  <span>fl2: </span><span class="string">"3-4级"</span><span>,   </span>
64.  <span>fl3: </span><span class="string">"3-4级"</span><span>,   </span>
65.  <span>fl4: </span><span class="string">"3-4级"</span><span>,   </span>
66.  <span>fl5: </span><span class="string">"3-4级"</span><span>,   </span>
67.  <span>fl6: </span><span class="string">"3-4级"</span><span>,   </span>
68.  <span>index: </span><span class="string">"热"</span><span>,                                                                                </span><span class="comment">//二十四小时穿衣指数 </span><span>  </span>
69.  <span>index_d: </span><span class="string">"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。"</span><span>,  </span><span class="comment">//建议 </span><span>  </span>
70.  <span>index48: </span><span class="string">"热"</span><span>,                                                                           </span><span class="comment">//四十八小时穿衣指数 </span><span>  </span>
71.  <span>index48_d: </span><span class="string">"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。"</span><span>, </span><span class="comment">//建议 </span><span>  </span>
72.  <span>index_uv: </span><span class="string">"弱"</span><span>,                              </span><span class="comment">//二十四小时紫外线 </span><span>  </span>
73.  <span>index48_uv: </span><span class="string">"弱"</span><span>,                          </span><span class="comment">//四十八小时紫外线 </span><span>  </span>
74.  <span>index_xc: </span><span class="string">"不宜"</span><span>,                           </span><span class="comment">//洗车 </span><span>  </span>
75.  <span>index_tr: </span><span class="string">"适宜"</span><span>,                           </span><span class="comment">//旅游 </span><span>  </span>
76.  <span>index_co: </span><span class="string">"较舒适"</span><span>,                       </span><span class="comment">//舒适度 </span><span>  </span>
77.  <span>st1: </span><span class="string">"30"</span><span>,   </span>
78.  <span>st2: </span><span class="string">"20"</span><span>,   </span>
79.  <span>st3: </span><span class="string">"27"</span><span>,   </span>
80.  <span>st4: </span><span class="string">"19"</span><span>,   </span>
81.  <span>st5: </span><span class="string">"26"</span><span>,   </span>
82.  <span>st6: </span><span class="string">"18"</span><span>,   </span>
83.  <span>index_cl: </span><span class="string">"较适宜"</span><span>,                        </span><span class="comment">//晨练 </span><span>  </span>
84.  <span>index_ls: </span><span class="string">"不太适宜"</span><span>,                     </span><span class="comment">//晾晒 </span><span>  </span>
85.  <span>index_ag: </span><span class="string">"极易发"</span><span>                        </span><span class="comment">//过敏 </span><span>  </span>
86.  <span>}   </span>
87.  <span>}  </span>
</div>
&nbsp;

获取城市代码的方法：

**<span style="color: #339966;">1.首先获取省份列表</span>**

http://www.weather.com.cn/data/city3jdata/china.html

这个链接以json格式返回一个包含省份代码和省份名称的数组
<div class="dp-highlighter">

1.  <span><span>{   </span></span>
2.  <span class="number">10101</span><span>: </span><span class="string">"北京"</span><span>,   </span>
3.  <span class="number">10102</span><span>: </span><span class="string">"上海"</span><span>,   </span>
4.  <span>....   ,</span>
5.  10119: "江苏",
6.  <span>}  </span>
</div>
<span style="color: #339966;">**2.通过上面获得的省份代码获取城市列表：**</span>

如江苏的城市代码为：10119，通过下面的链接可以获得江苏省的城市列表

http://www.weather.com.cn/data/city3jdata/provshi/10119.html
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>{   </span></span>
2.  <span class="number">10</span><span>: </span><span class="string">"连云港"</span><span>,   </span>
3.  <span class="number">11</span><span>: </span><span class="string">"常州"</span><span>,   </span>
4.  <span>...   </span>
5.  01: "南京",
6.  <span>}  </span>
</div>
**<span style="color: #339966;">3.获取城市下的区域信息</span>**

通过上一步可获取城市代码 如：南京为 01

把01接到第一步获得的省份代码后 获得 **1011901** 代表江苏省南京市

通过下面的链接可获取江苏省南京市的区域信息，加粗部分为刚刚生成的代码

http://www.weather.com.cn/data/city3jdata/station/**1011901**.html
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>{   </span></span>
2.  <span class="number">01</span><span>: </span><span class="string">"南京"</span><span>,   </span>
3.  <span class="number">02</span><span>: </span><span class="string">"溧水"</span><span>,   </span>
4.  <span class="number">03</span><span>: </span><span class="string">"高淳"</span><span>,   </span>
5.  <span class="number">04</span><span>: </span><span class="string">"江宁"</span><span>,   </span>
6.  <span class="number">05</span><span>: </span><span class="string">"六合"</span><span>,   </span>
7.  <span class="number">06</span><span>: </span><span class="string">"江浦"</span><span>,   </span>
8.  <span class="number">07</span><span>: </span><span class="string">"浦口"</span><span>  </span>
9.  <span>}  </span>
</div>
<span style="color: #339966;">**4.获取区域代码**</span>

把上面获得的区域代码如：**01**（代表南京市区） 接到第三步获得的江苏省南京市的代码 **1011901**

得到 **101190101 **代表江苏省南京市南京市区的代码。

这串代码就是我们需要的。

http://m.weather.com.cn/data/**101190101**.html

放到这个链接里我们就能获得江苏省南京市南京市区的天气信息啦！

下面提供一个我写好的天气查询工具的演示地址和城市代码对照表的sql文件下载地址。

[download id="1"]
<div id="demo">[查看示例](http://xiaopihai.duapp.com "查看Demo")</div>
<div></div>
<div><span style="color: #ff0000;">**<span style="line-height: 24px;">作者原创文章，转载请注明出处: </span><span style="color: #0000ff;">[<span style="color: #0000ff;">根据中国气象局提供的API接口实现天气查询 | 三叶草</span>](http://bloglaotou.duapp.com/how-to-write-a-weather-api.html "本文固定链接 http://bloglaotou.duapp.com/how-to-write-a-weather-api.html")[<span style="color: #0000ff;"> </span>](http://bloglaotou.duapp.com/how-to-write-a-weather-api.html#)</span>**</span></div>