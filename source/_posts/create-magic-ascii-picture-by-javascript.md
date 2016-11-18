---
title: 通过javascript把图片转化为字符画
tags:
  - javascript
  - 图像转化
  - 字符画，canvas
id: 546
categories:
  - 前端设计
date: 2013-10-23 23:56:01
---

[caption id="attachment_550" align="alignnone" width="600"][![通过javascript把图片转化为字符画](http://bcs.duapp.com/xiaopihai/2013/10/img2txt21-600x309.jpg)](http://bcs.duapp.com/xiaopihai/2013/10/img2txt21.jpg) 通过javascript把图片转化为字符画[/caption]

### 1.获取上传图片对象数据

&nbsp;

Javascript无法直接获取本地上传的图片的数据，html5可以解决这一问题 。html5里面的[FileReader interface](http://dev.w3.org/2006/webapi/FileAPI/#FileReader-interface)可以把图片对象的数据读到内存，然后通过接口的进度事件（Progress Events）访问这些数据。

浏览器支持：

代码片段：
<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span class="keyword">var</span><span> reader = </span><span class="keyword">new</span><span> FileReader();                        </span><span class="comment">//建立一个FileReader接口</span><span>  </span></span>
2.  <span>reader.readAsDataURL(fileBtn.files[0]);        <span class="comment">//fileBtn为文件上传控件对象</span><span>  </span></span>
3.  <span>reader.onload = <span class="keyword">function</span><span> () {                             </span><span class="comment">//在onload事件中访问图像数据</span><span>  </span></span>
4.  <span>    img.src = reader.result;  </span>}
</div>
&nbsp;

### 2.获取图像对象像素点

&nbsp;

图像对象的`getImageData` 方法返回一个对象，每个像素点的 `rgba` 值都保存在其 `data` 属性下面，这是一个一位数组， 也就是说，`rgba` 分别对应一个值，然后接着就是一下像素点的 `rgba`，假设 `getImageData.data` 的值为 `[1,2,3,4,5,6,7,8]`， 那么 `getImageData` 对象范围就包含了 2 个像素点，第一个像素点的 `rgba` 值分别是 `1,2,3,4`，第二个像素点的就是 `4,5,6,7,8`。 因此，我们在取每个像素点的 `rgba` 值的时候其`index` 应该在像素点的索引值上乘以 `4`，然后通过 `getGray()` 计算灰度。
<div class="dp-highlighter">

1.  <span><span class="keyword">var</span><span> imgData = c.getImageData(0, 0, img.width, img.height);  </span></span>
2.  <span><span class="keyword">var</span><span> imgDataArr = imgData.data;  </span></span>
3.  <span><span class="keyword">var</span><span> imgDataWidth = imgData.width;  </span></span>
4.  <span><span class="keyword">var</span><span> imgDataHeight = imgData.height;  </span></span>
5.  <span><span class="keyword">for</span><span> (h = 0; h &lt; imgDataHeight; h += 12) {  </span></span>
6.  <span>    <span class="keyword">for</span><span> (w = 0; w &lt; imgDataWidth; w += 6) {  </span></span>
7.  <span>        <span class="keyword">var</span><span> index = (w + imgDataWidth * h) * 4;  </span></span>
8.  <span>        <span class="keyword">var</span><span> r = imgDataArr[index + 0];  </span></span>
9.  <span>        <span class="keyword">var</span><span> g = imgDataArr[index + 1];  </span></span>
10.  <span>        <span class="keyword">var</span><span> b = imgDataArr[index + 2];  </span></span>
11.  <span>    }  </span>
12.  <span>}  </span>
</div>
&nbsp;

### 3.根据rgb值计算灰度

&nbsp;

不同的RGB空间，[灰阶的计算公式](http://www.haogongju.net/art/1770844 "灰阶的计算公式")有所不同，常见的几种RGB空间的计算灰阶的公式如下：

##### 1、简化 sRGB IEC61966-2.1 [gamma=2.20]

<pre>Gray = (R^2.2 * 0.2126  + G^2.2  * 0.7152  + B^2.2  * 0.0722)^(1/2.2)</pre>

##### 2、 Adobe RGB (1998) [gamma=2.20]

<pre>Gray = (R^2.2 * 0.2973  + G^2.2  * 0.6274  + B^2.2  * 0.0753)^(1/2.2)</pre>

##### 3、Apple RGB [gamma=1.80]

<pre>Gray = (R^1.8 * 0.2446  + G^1.8  * 0.6720  + B^1.8  * 0.0833)^(1/1.8)</pre>

##### 4、ColorMatch RGB [gamma=1.8]

<pre>Gray = (R^1.8 * 0.2750  + G^1.8  * 0.6581  + B^1.8  * 0.0670)^(1/1.8)</pre>

##### 5、简化 KODAK DC Series Digital Camera [gamma=2.2]

<pre>Gray = (R^2.2 * 0.2229  + G^2.2  * 0.7175  + B^2.2  * 0.0595)^(1/2.2)</pre>
<div class="dp-highlighter">
<div class="bar"></div>
<div class="bar"></div>

1.  <span><span class="comment">// 根据rgb值计算灰度</span><span>  </span></span>
2.  <span><span class="keyword">function</span><span> getGray(r, g, b) {  </span></span>
3.  <span>    <span class="keyword">return</span><span> 0.299 * r + 0.578 * g + 0.114 * b;  </span></span>
4.  <span>}  </span>
</div>
&nbsp;

### 4.根据灰度生成相应字符

&nbsp;

把不同的灰度替换成相应的字符，原则上灰度越深的像素应该用越复杂的字符，具体什么字符可以自由替换，这只是一个测试版本。
代码片段：
<div class="dp-highlighter">

1.  <span><span class="comment">// 根据灰度生成相应字符</span><span>  </span></span>
2.  <span><span class="keyword">function</span><span> toText(g) {  </span></span>
3.  <span>    <span class="keyword">if</span><span> (g &lt;= 30) {  </span></span>
4.  <span>        <span class="keyword">return</span><span> '8';  </span></span>
5.  <span>    } <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 30 &amp;&amp; g &lt;= 60) {  </span></span>
6.  <span>        <span class="keyword">return</span><span> '&amp;';  </span></span>
7.  <span>    } <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 60 &amp;&amp; g &lt;= 120) {  </span></span>
8.  <span>        <span class="keyword">return</span><span> '$';  </span></span>
9.  <span>    }  <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 120 &amp;&amp; g &lt;= 150) {  </span></span>
10.  <span>        <span class="keyword">return</span><span> '*';  </span></span>
11.  <span>    } <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 150 &amp;&amp; g &lt;= 180) {  </span></span>
12.  <span>        <span class="keyword">return</span><span> 'o';  </span></span>
13.  <span>    } <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 180 &amp;&amp; g &lt;= 210) {  </span></span>
14.  <span>        <span class="keyword">return</span><span> '!';  </span></span>
15.  <span>    } <span class="keyword">else</span><span> </span><span class="keyword">if</span><span> (g &gt; 210 &amp;&amp; g &lt;= 240) {  </span></span>
16.  <span>        <span class="keyword">return</span><span> ';';  </span></span>
17.  <span>    }  <span class="keyword">else</span><span> {  </span></span>
18.  <span>        <span class="keyword">return</span><span> </span><span class="string">'.'</span><span>;  </span></span>
19.  <span>    }  </span>
20.  <span>}  </span>
</div>
到这次我们的工作就完成得差不多啦,上面只给出了一些代码的片段，把原理疏通了一下，具体怎么实现大家可以自由发挥，下面给出一个示例，把源码也贴出来跟大家分享。

[查看示例](http://tutorial.duapp.com/lab/img2txt/index.htm "通过javascript把图片转化为字符画")

PS:已经把这个demo整合到我博客的小工具里了（通过模板实现）[去看看？](http://bloglaotou.duapp.com/webtools_img2txt "简易图片字符转换工具")

[download id="14"]

[灵感](http://www.cssha.com/img2txt-canvas)