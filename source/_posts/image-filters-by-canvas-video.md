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
<!--more-->

# 获取图像数据

```javascript
img.src = ’http://bloglaotou.duapp.com/wp-content/themes/frontopen2/tools/filter/image2.jpg’;  
canvas.width = img.width;  
canvas.height = img.height;  
var context = canvas.getContext(“2d”);  
context.drawImage(img, 0, 0);  
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);  
```

# 设置过滤矩阵

```javascript
var m_VideoType=0;  
       var pattern=new Array();  
       switch (m_VideoType)  
       {  
           case0://VIDEOTYPE.VIDEOSTAGGERED:  
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
           case1://VIDEOTYPE.VIDEOTRIPED:  
           {  
               pattern = [    
                   0,  
                   1,  
                   2,  
               ];  
               break;  
           }  
           case2://VIDEOTYPE.VIDEO3X3:  
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
```       
# 获取过滤数据

```javascript
for ( var x = 0; x < canvasData.width; x++) {    
         for ( var y = 0; y < canvasData.height; y++) {    
        
           // Index of the pixel in the array    
           var idx = (x + y  canvasData.width)  4;    
           var r = canvasData.data[idx + 0];    
           var g = canvasData.data[idx + 1];    
           var b = canvasData.data[idx + 2];    
              var nWidth = patternwidth[mVideoType];  
              var nHeight = patternheight[mVideoType];  
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
            if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8))     
            {    
              canvasData.data[idx + 0] = 0;    
              canvasData.data[idx + 1] = 0;    
              canvasData.data[idx + 2] = 0;    
            }    
         }    
    }  
```

# 写入过滤后的数据

```javascript
context.putImageData(canvasData, 0, 0);  
```

# 效果预览

```javascript
<html>
<head>
<script>
fclamp0255=function(value)
{
    if(value>255)
    {
        return 255;
    }else if(value<0)
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

         for ( var x = 0; x < canvasData.width; x++) {  
             for ( var y = 0; y < canvasData.height; y++) {  

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
                if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8))   
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

</script>
</head>
<body>
  <canvas id="myCanvas" >Gray Filter</canvas>
  <canvas id="cv" >Gray Filter</canvas>
</body>
</html>
```

# 参考资料

[代震军ImageFilter开源项目](https://github.com/daizhenjun/ImageFilterForAndroid)