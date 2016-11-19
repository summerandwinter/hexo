---
title: 用canvas实现图片滤镜效果详解之灰度效果
description: 利用用canvas技术和计算机图形原理实现图片灰度滤镜效果
tags:
  - canvas
  - html5
  - 图像滤镜
  - 滤镜
  - 灰度滤镜
id: 650
categories:
  - 前端设计
date: 2013-11-03 23:43:33
---

前面展示了一些canvas实现图片滤镜效果的展示，并且给出了相应的算法，下面来介绍一下具体的实现方法。

前面介绍的特效中灰度效果最简单，就从这里开始介绍吧。

### 1.获取图像数据

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>img.src = 'http:</span><span class="comment">//bloglaotou.duapp.com/wp-content/themes/frontopen2/tools/filter/image2.jpg';</span><span>  </span></span>
2.  <span>canvas.width  = img.width;  </span>
3.  <span>canvas.height = img.height;   </span>
4.  <span>var context = canvas.getContext(<span class="string">"2d"</span><span>);  </span></span>
5.  <span>context.drawImage(img, <span class="number">0</span><span>, </span><span class="number">0</span><span>);  </span></span>
6.  <span>var canvasData = context.getImageData(<span class="number">0</span><span>, </span><span class="number">0</span><span>, canvas.width, canvas.height);    </span></span>
</div>

### 2.通过灰度算法处理图像数据

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span class="comment">//  1.灰度效果</span><span>  </span></span>
2.  <span><span class="comment">//计算公式 .299 * r + .587 * g + .114 * b;</span><span>  </span></span>
3.  <span><span class="comment">// calculate gray scale value</span><span>  </span></span>
4.  <span> </span>
5.  <span> <span class="keyword">for</span><span> ( var x = </span><span class="number">0</span><span>; x &lt; canvasData.width; x++) {  </span></span>
6.  <span>     <span class="keyword">for</span><span> ( var y = </span><span class="number">0</span><span>; y &lt; canvasData.height; y++) {  </span></span>
7.  <span>  </span>
8.  <span>       <span class="comment">// Index of the pixel in the array</span><span>  </span></span>
9.  <span>       var idx = (x + y * canvasData.width) * <span class="number">4</span><span>;  </span></span>
10.  <span>       var r = canvasData.data[idx + <span class="number">0</span><span>];  </span></span>
11.  <span>       var g = canvasData.data[idx + <span class="number">1</span><span>];  </span></span>
12.  <span>       var b = canvasData.data[idx + <span class="number">2</span><span>];  </span></span>
13.  <span>       var gray = .<span class="number">299</span><span> * r + .</span><span class="number">587</span><span> * g + .</span><span class="number">114</span><span> * b;  </span></span>
14.  <span>              </span>
15.  <span>        <span class="comment">// assign gray scale value</span><span>  </span></span>
16.  <span>        canvasData.data[idx + <span class="number">0</span><span>] = gray; </span><span class="comment">// Red channel</span><span>  </span></span>
17.  <span>        canvasData.data[idx + <span class="number">1</span><span>] = gray; </span><span class="comment">// Green channel</span><span>  </span></span>
18.  <span>        canvasData.data[idx + <span class="number">2</span><span>] = gray; </span><span class="comment">// Blue channel</span><span>  </span></span>
19.  <span>        canvasData.data[idx + <span class="number">3</span><span>] = </span><span class="number">255</span><span>; </span><span class="comment">// Alpha channel</span><span>  </span></span>
20.  <span>        <span class="comment">// 加上黑色的边框</span><span>  </span></span>
21.  <span>        <span class="keyword">if</span><span>(x &lt; </span><span class="number">8</span><span> || y &lt; </span><span class="number">8</span><span> || x &gt; (canvasData.width - </span><span class="number">8</span><span>) || y &gt; (canvasData.height - </span><span class="number">8</span><span>))   </span></span>
22.  <span>        {  </span>
23.  <span>          canvasData.data[idx + <span class="number">0</span><span>] = </span><span class="number">0</span><span>;  </span></span>
24.  <span>          canvasData.data[idx + <span class="number">1</span><span>] = </span><span class="number">0</span><span>;  </span></span>
25.  <span>          canvasData.data[idx + <span class="number">2</span><span>] = </span><span class="number">0</span><span>;  </span></span>
26.  <span>        }  </span>
27.  <span>     }  </span>
28.  <span>}  </span>
</div>

### 3.把新的图像数据写入canvas

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>context.putImageData(canvasData, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>);  </span></span>
</div>

### 4.效果预览

<div class="code_contain">
<pre class="runcode">&lt;html&gt;
&lt;head&gt;
&lt;script&gt;
  window.onload = function() {
    var cv = document.getElementById('cv');
    var c = cv.getContext('2d');
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img = new Image();
    img.src = 'http://bloglaotou.duapp.com/wp-content/themes/frontopen2/tools/filter/image2.jpg';  
    img.onload=function(){

        canvas.width  = img.width;  
    	canvas.height = img.height;   

    	context.drawImage(img, 0, 0);  
    	var canvasData = context.getImageData(0, 0, canvas.width, canvas.height); 
        //  1.灰度效果  
    	//计算公式 .299 * r + .587 * g + .114 * b;  
    	// calculate gray scale value  

    	 for ( var x = 0; x &lt; canvasData.width; x++) {  
    	     for ( var y = 0; y &lt; canvasData.height; y++) {  

    	       // Index of the pixel in the array  
    	       var idx = (x + y * canvasData.width) * 4;  
    	       var r = canvasData.data[idx + 0];  
    	       var g = canvasData.data[idx + 1];  
    	       var b = canvasData.data[idx + 2];  
    	       var gray = .299 * r + .587 * g + .114 * b;  

    	        // assign gray scale value  
    	        canvasData.data[idx + 0] = gray; // Red channel  
    	        canvasData.data[idx + 1] = gray; // Green channel  
    	        canvasData.data[idx + 2] = gray; // Blue channel  
    	        canvasData.data[idx + 3] = 255; // Alpha channel  
    	        // 加上黑色的边框  
    	        if(x &lt; 8 || y &lt; 8 || x &gt; (canvasData.width - 8) || y &gt; (canvasData.height - 8))   
    	        {  
    	          canvasData.data[idx + 0] = 0;  
    	          canvasData.data[idx + 1] = 0;  
    	          canvasData.data[idx + 2] = 0;  
    	        }  
    	     }  
    	}  
    	 context.putImageData(canvasData, 0, 0);  
    }
  }

&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="myCanvas" &gt;Gray Filter&lt;/canvas&gt;
  &lt;canvas id="cv" &gt;Gray Filter&lt;/canvas&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
[运行代码](javascript:void(0))[复制代码](javascript:void(0))[另存代码](javascript:void(0))<span class="code_notice">(提示：可以编辑后运行)</span>

</div>