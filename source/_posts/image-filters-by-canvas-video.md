---
title: 用canvas实现图片滤镜效果详解之视频效果
tags:
  - html5
  - javascript
  - 图像滤镜
  - 滤镜
  - 视频滤镜
id: 652
categories:
  - 前端设计
date: 2013-11-04 23:24:54
---

这是一个很有意思的特效，模拟摄像机拍摄电视屏幕画面时出现点状颗粒的效果。颗粒的大小通过变换矩阵实现，可以任意调节，有兴趣研究的朋友可以尝试更多的效果，代码没有经过优化，只是一个粗糙的Demo，大家可以自行改进。

### 1.获取图像数据

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>img.src = ’http:</span><span class="comment">//bloglaotou.duapp.com/wp-content/themes/frontopen2/tools/filter/image2.jpg’;</span><span>  </span></span>
2.  <span>canvas.width = img.width;  </span>
3.  <span>canvas.height = img.height;  </span>
4.  <span>var context = canvas.getContext(“2d”);  </span>
5.  <span>context.drawImage(img, <span class="number">0</span><span>, </span><span class="number">0</span><span>);  </span></span>
6.  <span>var canvasData = context.getImageData(<span class="number">0</span><span>, </span><span class="number">0</span><span>, canvas.width, canvas.height);  </span></span>
</div>

### 2.设置过滤矩阵

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>        var m_VideoType=</span><span class="number">0</span><span>;  </span></span>
2.  <span>        var pattern=<span class="keyword">new</span><span> Array();  </span></span>
3.  <span>        <span class="keyword">switch</span><span> (m_VideoType)  </span></span>
4.  <span>        {  </span>
5.  <span>            <span class="keyword">case</span><span class="number">0</span><span>:</span><span class="comment">//VIDEO_TYPE.VIDEO_STAGGERED:</span><span>  </span></span>
6.  <span>            {  </span>
7.  <span>                pattern = [  </span>
8.  <span>                    <span class="number">0</span><span>, </span><span class="number">1</span><span>,  </span></span>
9.  <span>                    <span class="number">0</span><span>, </span><span class="number">2</span><span>,  </span></span>
10.  <span>                    <span class="number">1</span><span>, </span><span class="number">2</span><span>,  </span></span>
11.  <span>                    <span class="number">1</span><span>, </span><span class="number">0</span><span>,  </span></span>
12.  <span>                    <span class="number">2</span><span>, </span><span class="number">0</span><span>,  </span></span>
13.  <span>                    <span class="number">2</span><span>, </span><span class="number">1</span><span>,  </span></span>
14.  <span>                ];  </span>
15.  <span>                <span class="keyword">break</span><span>;  </span></span>
16.  <span>            }  </span>
17.  <span>            <span class="keyword">case</span><span class="number">1</span><span>:</span><span class="comment">//VIDEO_TYPE.VIDEO_TRIPED:</span><span>  </span></span>
18.  <span>            {  </span>
19.  <span>                pattern = [     </span>
20.  <span>                    <span class="number">0</span><span>,  </span></span>
21.  <span>                    <span class="number">1</span><span>,  </span></span>
22.  <span>                    <span class="number">2</span><span>,  </span></span>
23.  <span>                ];  </span>
24.  <span>                <span class="keyword">break</span><span>;  </span></span>
25.  <span>            }  </span>
26.  <span>            <span class="keyword">case</span><span class="number">2</span><span>:</span><span class="comment">//VIDEO_TYPE.VIDEO_3X3:</span><span>  </span></span>
27.  <span>            {  </span>
28.  <span>                pattern =   </span>
29.  <span>                [  </span>
30.  <span>                    <span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>,  </span></span>
31.  <span>                    <span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>,  </span></span>
32.  <span>                    <span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>,  </span></span>
33.  <span>                ];  </span>
34.  <span>                <span class="keyword">break</span><span>;  </span></span>
35.  <span>            }  </span>
36.  <span>            <span class="keyword">default</span><span>:  </span></span>
37.  <span>            {  </span>
38.  <span>                pattern =   </span>
39.  <span>                [  </span>
40.  <span>                    <span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>,  </span></span>
41.  <span>                    <span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>,  </span></span>
42.  <span>                    <span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>,  </span></span>
43.  <span>                    <span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>,  </span></span>
44.  <span>                    <span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>,  </span></span>
45.  <span>                    <span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>,  </span></span>
46.  <span>                    <span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>,  </span></span>
47.  <span>                    <span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>,  </span></span>
48.  <span>                    <span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>,  </span></span>
49.  <span>                    <span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>,  </span></span>
50.  <span>                    <span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>, </span><span class="number">1</span><span>,  </span></span>
51.  <span>                    <span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>,  </span></span>
52.  <span>                    <span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>,  </span></span>
53.  <span>                    <span class="number">1</span><span>, </span><span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>, </span><span class="number">1</span><span>,  </span></span>
54.  <span>                    <span class="number">1</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">2</span><span>, </span><span class="number">0</span><span>,  </span></span>
55.  <span>                ];  </span>
56.  <span>                <span class="keyword">break</span><span>;  </span></span>
57.  <span>            }  </span>
58.  <span>        }  </span>
59.  <span>        var pattern_width = [ <span class="number">2</span><span>, </span><span class="number">1</span><span>, </span><span class="number">3</span><span>, </span><span class="number">5</span><span> ];  </span></span>
60.  <span>        var pattern_height = [<span class="number">6</span><span>, </span><span class="number">3</span><span>, </span><span class="number">3</span><span>, </span><span class="number">15</span><span> ];  </span></span>
</div>

### 3.获取过滤数据

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span class="keyword">for</span><span> ( var x = </span><span class="number">0</span><span>; x &lt; canvasData.width; x++) {    </span></span>
2.  <span>         <span class="keyword">for</span><span> ( var y = </span><span class="number">0</span><span>; y &lt; canvasData.height; y++) {    </span></span>
3.  <span>        </span>
4.  <span>           <span class="comment">// Index of the pixel in the array  </span><span>  </span></span>
5.  <span>           var idx = (x + y * canvasData.width) * <span class="number">4</span><span>;    </span></span>
6.  <span>           var r = canvasData.data[idx + <span class="number">0</span><span>];    </span></span>
7.  <span>           var g = canvasData.data[idx + <span class="number">1</span><span>];    </span></span>
8.  <span>           var b = canvasData.data[idx + <span class="number">2</span><span>];    </span></span>
9.  <span>              var nWidth = pattern_width[m_VideoType];  </span>
10.  <span>              var nHeight = pattern_height[m_VideoType];  </span>
11.  <span>              var index = nWidth * (y % nHeight) + (x % nWidth);  </span>
12.  <span>  </span>
13.  <span>              index = pattern[index];  </span>
14.  <span>              <span class="keyword">if</span><span> (index == </span><span class="number">0</span><span>)  </span></span>
15.  <span>               var   r = fclamp0255(<span class="number">2</span><span> * r);  </span></span>
16.  <span>              <span class="keyword">if</span><span> (index == </span><span class="number">1</span><span>)  </span></span>
17.  <span>               var   g = fclamp0255(<span class="number">2</span><span> * g);  </span></span>
18.  <span>              <span class="keyword">if</span><span> (index == </span><span class="number">2</span><span>)  </span></span>
19.  <span>               var   b = fclamp0255(<span class="number">2</span><span> * b);  </span></span>
20.  <span>                    </span>
21.  <span>            <span class="comment">// assign gray scale value  </span><span>  </span></span>
22.  <span>            canvasData.data[idx + <span class="number">0</span><span>] = r; </span><span class="comment">// Red channel  </span><span>  </span></span>
23.  <span>            canvasData.data[idx + <span class="number">1</span><span>] = g; </span><span class="comment">// Green channel  </span><span>  </span></span>
24.  <span>            canvasData.data[idx + <span class="number">2</span><span>] = b; </span><span class="comment">// Blue channel  </span><span>  </span></span>
25.  <span>            canvasData.data[idx + <span class="number">3</span><span>] = </span><span class="number">255</span><span>; </span><span class="comment">// Alpha channel  </span><span>  </span></span>
26.  <span>            <span class="comment">// 加上黑色的边框  </span><span>  </span></span>
27.  <span>            <span class="keyword">if</span><span>(x &lt; </span><span class="number">8</span><span> || y &lt; </span><span class="number">8</span><span> || x &gt; (canvasData.width - </span><span class="number">8</span><span>) || y &gt; (canvasData.height - </span><span class="number">8</span><span>))     </span></span>
28.  <span>            {    </span>
29.  <span>              canvasData.data[idx + <span class="number">0</span><span>] = </span><span class="number">0</span><span>;    </span></span>
30.  <span>              canvasData.data[idx + <span class="number">1</span><span>] = </span><span class="number">0</span><span>;    </span></span>
31.  <span>              canvasData.data[idx + <span class="number">2</span><span>] = </span><span class="number">0</span><span>;    </span></span>
32.  <span>            }    </span>
33.  <span>         }    </span>
34.  <span>    }   </span>
</div>

### 4.写入过滤后的数据

<div class="dp-highlighter">
<div class="bar"></div>

1.  <span><span>context.putImageData(canvasData, </span><span class="number">0</span><span>, </span><span class="number">0</span><span>);  </span></span>
</div>

### 5.效果预览

<div class="code_contain">
<pre class="runcode">&lt;html&gt;
&lt;head&gt;
&lt;script&gt;
fclamp0255=function(value)
{
	if(value&gt;255)
	{
		return 255;
	}else if(value&lt;0)
	{
		return 0;
	}else
	{
		return value;
	}
}
  window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var img = new Image();
    img.src = 'http://bloglaotou.duapp.com/wp-content/themes/frontopen2/tools/filter/image2.jpg';  
    img.onload=function(){

        canvas.width  = img.width;  
    	canvas.height = img.height;   

    	context.drawImage(img, 0, 0);  
    	var canvasData = context.getImageData(0, 0, canvas.width, canvas.height); 
    	var m_VideoType=0;
    	var pattern=new Array();
    	switch (m_VideoType)
        {
            case 0://VIDEO_TYPE.VIDEO_STAGGERED:
            {
                pattern = [
                    0, 1,
                    0, 2,
                    1, 2,
                    1, 0,
                    2, 0,
                    2, 1,
                ];
                break;
            }
            case 1://VIDEO_TYPE.VIDEO_TRIPED:
            {
                pattern = [   
                    0,
                    1,
                    2,
                ];
                break;
            }
            case 2://VIDEO_TYPE.VIDEO_3X3:
            {
                pattern = 
                [
                    0, 1, 2,
                    2, 0, 1,
                    1, 2, 0,
                ];
                break;
            }
            default:
            {
                pattern = 
                [
                    0, 1, 2, 0, 0,
                    1, 1, 1, 2, 0,
                    0, 1, 2, 2, 2,
                    0, 0, 1, 2, 0,
                    0, 1, 1, 1, 2,
                    2, 0, 1, 2, 2,
                    0, 0, 0, 1, 2,
                    2, 0, 1, 1, 1,
                    2, 2, 0, 1, 2,
                    2, 0, 0, 0, 1,
                    1, 2, 0, 1, 1,
                    2, 2, 2, 0, 1,
                    1, 2, 0, 0, 0,
                    1, 1, 2, 0, 1,
                    1, 2, 2, 2, 0,
                ];
                break;
            }
        }
    	var pattern_width = [ 2, 1, 3, 5 ];
        var pattern_height = [6, 3, 3, 15 ];
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
               var nWidth = pattern_width[m_VideoType];
               var nHeight = pattern_height[m_VideoType];
               var index = nWidth * (y % nHeight) + (x % nWidth);

               index = pattern[index];
               if (index == 0)
                var   r = fclamp0255(2 * r);
               if (index == 1)
                var   g = fclamp0255(2 * g);
               if (index == 2)
                var   b = fclamp0255(2 * b);

    	        // assign gray scale value  
    	        canvasData.data[idx + 0] = r; // Red channel  
    	        canvasData.data[idx + 1] = g; // Green channel  
    	        canvasData.data[idx + 2] = b; // Blue channel  
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

### 5.参考资料

[代震军ImageFilter开源项目](https://github.com/daizhenjun/ImageFilterForAndroid)