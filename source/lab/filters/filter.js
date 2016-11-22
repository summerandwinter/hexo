//灰度效果
//计算公式 .299 * r + .587 * g + .114 * b;
//calculate gray scale value
function gray(canvasData)
{
 for ( var x = 0; x < canvasData.width; x++) {
     for ( var y = 0; y < canvasData.height; y++) {

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
        // add black border
/*        if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
        {
          canvasData.data[idx + 0] = 0;
          canvasData.data[idx + 1] = 0;
          canvasData.data[idx + 2] = 0;
        }*/
     }
 }
 return canvasData;
}    
//2.怀旧效果   
function old(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];

   var dr=.393*r+.769*g+.189*b;
   var dg=.349*r+.686*g+.168*b;
   var db=.272*r+.534*g+.131*b;
   var scale=Math.random()*0.5 + 0.5;
   var fr=scale*dr+(1-scale)*r;
   scale=Math.random()*0.5 + 0.5;
   var fg=scale*dg+(1-scale)*g;
   scale=Math.random()*0.5 + 0.5;
   var fb=scale*db+(1-scale)*b;
   
   canvasData.data[idx + 0] = fr;
   canvasData.data[idx + 1] = fg; 
   canvasData.data[idx + 2] = fb; 
   canvasData.data[idx + 3] = 255;  
/*   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }*/
 }
}
return canvasData;
}



//3 底片效果
//算法原理：将当前像素点的RGB值分别与255之差后的值作为当前点的RGB值，即
//R = 255 – R；G = 255 – G；B = 255 – B；
function negatives(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   var fr=255-r;
   var fg=255-g;
   var fb=255-b;
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel 
   // add black border
/*   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }*/
 }
}
return canvasData;
}

 
  
//黑白效果
//求RGB平均值Avg ＝ (R + G + B) / 3，如果Avg >= 100，则新的颜色值为R＝G＝B＝255；
//如果Avg < 100，则新的颜色值为R＝G＝B＝0；255就是白色，0就是黑色；
//至于为什么用100作比较，这是一个经验值吧，设置为128也可以，可以根据效果来调整。
function black(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   if((r+g+b)>=300)
   {
   	fr=fg=fb=255;
   }
   else
   {
   	fr=fg=fb=0;
   }
   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
   
/*   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }*/
 }
}
return canvasData;
}

 

//浮雕效果
//用相邻点的RGB值减去当前点的RGB值并加上128作为新的RGB值。
//由于图片中相邻点的颜色值是比较接近的，因此这样的算法处理之后，只有颜色的边沿区域，
//也就是相邻颜色差异较大的部分的结果才会比较明显，而其他平滑区域则值都接近128左右，
//也就是灰色，这样就具有了浮雕效果。
//在实际的效果中，这样处理后，有些区域可能还是会有”彩色”的一些点或者条状痕迹，所以最好再对新的RGB值做一个灰度处理。
 
function cameo(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];
   var idx2 = (x + (y+1) * canvasData.width) * 4;
   var r2 = canvasData.data[idx2 + 0];
   var g2 = canvasData.data[idx2 + 1];
   var b2 = canvasData.data[idx2 + 2];
   var fr=r2-r+128;
   var fg=g2-g+128;
   var fb=b2-b+128;
   var gray = .299 * fr + .587 * fg + .114 * fb;
   canvasData.data[idx + 0] = gray; // Red channel
   canvasData.data[idx + 1] = gray; // Green channel
   canvasData.data[idx + 2] = gray; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
   // add black border
/*   if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
   {
     canvasData.data[idx + 0] = 0;
     canvasData.data[idx + 1] = 0;
     canvasData.data[idx + 2] = 0;
   }*/
 }
}
return canvasData;
}

 
 
 
 
//6.连环画效果
//连环画的效果与图像灰度化后的效果相似,它们都是灰度图,但连环画增大了图像的对比度,使整体明暗效果更强.
//算法:
//R = |g – b + g + r| * r / 256
//G = |b – g + b + r| * r / 256;
//B = |b – g + b + r| * g / 256;
function comic(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
 for ( var y = 0; y < canvasData.height; y++) {

   // Index of the pixel in the array
   var idx = (x + y * canvasData.width) * 4;
   var r = canvasData.data[idx + 0];
   var g = canvasData.data[idx + 1];
   var b = canvasData.data[idx + 2];

    var fr=Math.abs((g-r+g+b))*r/256;
    var fg=Math.abs((b-r+g+b))*r/256;
    var fb=Math.abs((b-r+g+b))*g/256; 

   canvasData.data[idx + 0] = fr; // Red channel
   canvasData.data[idx + 1] = fg; // Green channel
   canvasData.data[idx + 2] = fb; // Blue channel
   canvasData.data[idx + 3] = 255; // Alpha channel
            // add black border
/* if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
 {
   canvasData.data[idx + 0] = 0;
   canvasData.data[idx + 1] = 0;
   canvasData.data[idx + 2] = 0;
 }
*/
 }
}
return canvasData;
}
//熔铸效果
//熔铸算法
//r = r*128/(g+b +1);
//g = g*128/(r+b +1);
//b = b*128/(g+r +1);
function casting(canvasData)
{
for ( var x = 0; x < canvasData.width; x++) {
     for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];
   
            var fr= r*128/(g+b +1);
            var fg=g*128/(r+b +1);
            var fb=b*128/(g+r +1); 
       
           //assign gray scale value
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel */
           
           // add black border
/*           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }*/
         }
     }
     return canvasData;
 }   

//冰冻效果
//冰冻算法
//r = (r-g-b)*3/2;
//g = (g-r-b)*3/2;
//b = (b-g-r)*3/2;         
   
function frozen(canvasData)
 {
     for ( var x = 0; x < canvasData.width; x++) {
         for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];

            var fr=(r-g-b)*3/2;
            var fg=(g-r-b)*3/2;
            var fb=(b-g-r)*3/2;
       
           //assign gray scale value
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel 
           // add black border
/*           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }*/
   
         }
     }
     return canvasData;
 }  

//扩散（毛玻璃）
//原理：用当前点四周一定范围内任意一点的颜色来替代当前点颜色，最常用的是随机的采用相邻点进行替代。
function spread(canvasData)
 {
     for ( var x = 0; x < canvasData.width; x++) {
         for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = canvasData.data[idx + 0];
           var g = canvasData.data[idx + 1];
           var b = canvasData.data[idx + 2];

           var rand=Math.floor(Math.random()*10)%3;
           var idx2 = (x+rand + (y+rand) * canvasData.width) * 4;
           var r2 = canvasData.data[idx2 + 0];
           var g2 = canvasData.data[idx2 + 1];
           var b2 = canvasData.data[idx2 + 2];
           var fr=r2;
           var fg=g2;
           var fb=b2;
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel  
           // add black border
/*           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }*/
           
   
         }
     }
     return canvasData;
 } 

 


    /**
     * 把图像变成黑白色
     * Y = 0.299R + 0.587G + 0.114B
     * @param  {Array} pixes pix array
     * @return {Array}
     * @link {http://www.61ic.com/Article/DaVinci/DM64X/200804/19645.html}
     */
    function discolor(pixes) {
        var grayscale;
        for (var i = 0, len = pixes.length; i < len; i += 4) {
            grayscale = pixes[i] * 0.299 + pixes[i + 1] * 0.587 + pixes[i + 2] * 0.114;
            pixes[i] = pixes[i + 1] = pixes[i + 2] = grayscale;
        }
        return pixes;
    }

    /**
     * 把图片反相, 即将某个颜色换成它的补色
     * @param  {Array} pixes pix array
     * @return {Array}
     */
    function invert(pixes) {
        for (var i = 0, len = pixes.length; i < len; i += 4) {
            pixes[i] = 255 - pixes[i]; //r
            pixes[i + 1] = 255 - pixes[i + 1]; //g
            pixes[i + 2] = 255 - pixes[i + 2]; //b
        }
        return pixes;
    }
    /**
     * 颜色减淡,
     * 结果色 = 基色 + (混合色 * 基色) / (255 - 混合色)
     * @param  {Array} basePixes 基色
     * @param  {Array} mixPixes  混合色
     * @return {Array}
     */
    function dodgeColor(basePixes, mixPixes) {
        for (var i = 0, len = basePixes.length; i < len; i += 4) {
            basePixes[i] = basePixes[i] + (basePixes[i] * mixPixes[i]) / (255 - mixPixes[i]);
            basePixes[i + 1] = basePixes[i + 1] + (basePixes[i + 1] * mixPixes[i + 1]) / (255 - mixPixes[i + 1]);
            basePixes[i + 2] = basePixes[i + 2] + (basePixes[i + 2] * mixPixes[i + 2]) / (255 - mixPixes[i + 2]);
        }
        return basePixes;
    }
    /**
     * 高斯模糊
     * @param  {Array} pixes  pix array
     * @param  {Number} width 图片的宽度
     * @param  {Number} height 图片的高度
     * @param  {Number} radius 取样区域半径, 正数, 可选, 默认为 3.0
     * @param  {Number} sigma 标准方差, 可选, 默认取值为 radius / 3
     * @return {Array}
     */
    function gaussBlur(pixes, width, height, radius, sigma) {
        var gaussMatrix = [],
            gaussSum = 0,
            x, y,
            r, g, b, a,
            i, j, k, len;

        radius = Math.floor(radius) || 3;
        sigma = sigma || radius / 3;
        
        a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
        b = -1 / (2 * sigma * sigma);
        //生成高斯矩阵
        for (i = 0, x = -radius; x <= radius; x++, i++){
            g = a * Math.exp(b * x * x);
            gaussMatrix[i] = g;
            gaussSum += g;
        
        }
        //归一化, 保证高斯矩阵的值在[0,1]之间
        for (i = 0, len = gaussMatrix.length; i < len; i++) {
            gaussMatrix[i] /= gaussSum;
        }
        //x 方向一维高斯运算
        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                r = g = b = a = 0;
                gaussSum = 0;
                for(j = -radius; j <= radius; j++){
                    k = x + j;
                    if(k >= 0 && k < width){//确保 k 没超出 x 的范围
                        //r,g,b,a 四个一组
                        i = (y * width + k) * 4;
                        r += pixes[i] * gaussMatrix[j + radius];
                        g += pixes[i + 1] * gaussMatrix[j + radius];
                        b += pixes[i + 2] * gaussMatrix[j + radius];
                        // a += pixes[i + 3] * gaussMatrix[j];
                        gaussSum += gaussMatrix[j + radius];
                    }
                }
                i = (y * width + x) * 4;
                // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
                // console.log(gaussSum)
                pixes[i] = r / gaussSum;
                pixes[i + 1] = g / gaussSum;
                pixes[i + 2] = b / gaussSum;
                // pixes[i + 3] = a ;
            }
        }
        //y 方向一维高斯运算
        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                r = g = b = a = 0;
                gaussSum = 0;
                for(j = -radius; j <= radius; j++){
                    k = y + j;
                    if(k >= 0 && k < height){//确保 k 没超出 y 的范围
                        i = (k * width + x) * 4;
                        r += pixes[i] * gaussMatrix[j + radius];
                        g += pixes[i + 1] * gaussMatrix[j + radius];
                        b += pixes[i + 2] * gaussMatrix[j + radius];
                        // a += pixes[i + 3] * gaussMatrix[j];
                        gaussSum += gaussMatrix[j + radius];
                    }
                }
                i = (y * width + x) * 4;
                pixes[i] = r / gaussSum;
                pixes[i + 1] = g / gaussSum;
                pixes[i + 2] = b / gaussSum;

            }
        }
        //end
        return pixes;
    }
     
     /**
      * 素描
      * @param  {Object} imgData  
      * @param  {Number} radius 取样区域半径, 正数, 可选, 默认为 3.0
      * @param  {Number} sigma 标准方差, 可选, 默认取值为 radius / 3
      * @return {Array}
      */
     function sketch(imgData, radius, sigma){
    	    var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

         var pixes = imgData.data,
             width = imgData.width, 
             height = imgData.height,
             copyPixes;

         discolor(pixes);//去色
         canvas.width = width, canvas.height = height;
         //复制一份
         ctx.clearRect(0, 0, width, height);
         ctx.putImageData(imgData, 0, 0);
         copyPixes = ctx.getImageData(0, 0, width, height).data;
        
         invert(copyPixes);//反相
         gaussBlur(copyPixes, width, height, radius, sigma);//高斯模糊
         dodgeColor(pixes, copyPixes);//颜色减淡
         imgData.data=pixes;
         return imgData;
     }
     //高亮
      function bright(canvasData)
      {
    	    var BrightnessFactor=.25;
    	    var ContrastFactor=0;
    	    // Convert to integer factors
    	    var bfi = BrightnessFactor * 255;
    	    var cf = 1 + ContrastFactor;
    	    cf *= cf;
    	    var cfi =  (cf * 32768) + 1;


    	    for ( var x = 0; x < canvasData.width; x++) {
    	      for ( var y = 0; y < canvasData.height; y++) {
    	    	  


    	          // Index of the pixel in the array
    	          var idx = (x + y * canvasData.width) * 4;
    	           var r = canvasData.data[idx + 0];
    	          var g = canvasData.data[idx + 1];
    	          var b = canvasData.data[idx + 2];
    	          if (bfi != 0) {
    	              // Add brightness
    	              var ri = r + bfi;
    	              var gi = g + bfi;
    	              var bi = b + bfi;
    	              // Clamp to byte boundaries
    	              r = ri > 255 ? 255 : (ri < 0 ? 0 : ri);
    	              g = gi > 255 ? 255 : (gi < 0 ? 0 : gi);
    	              b = bi > 255 ? 255 : (bi < 0 ? 0 : bi);
    	      }
    	      // Modifiy contrast (multiplication)
    	      if (cfi != 32769) {
    	              // Transform to range [-128, 127]
    	              var ri = r - 128;
    	              var gi = g - 128;
    	              var bi = b - 128;

    	              // Multiply contrast factor
    	              ri = (ri * cfi) >> 15;
    	              gi = (gi * cfi) >> 15;
    	              bi = (bi * cfi) >> 15;

    	              // Transform back to range [0, 255]
    	              ri = ri + 128;
    	              gi = gi + 128;
    	              bi = bi + 128;

    	              // Clamp to byte boundaries
    	              r = ri > 255 ? 255 : (ri < 0 ? 0 : ri);
    	              g = gi > 255 ? 255 : (gi < 0 ? 0 : gi);
    	              b = bi > 255 ? 255 : (bi < 0 ? 0 : bi);
    	      }
    	    
    	        
    	        // assign gray scale value
    	        canvasData.data[idx + 0] = r; // Red channel
    	        canvasData.data[idx + 1] = g; // Green channel
    	        canvasData.data[idx + 2] = b; // Blue channel
    	        canvasData.data[idx + 3] = 255; // Alpha channel 
    	        

    	        // add black border
/*    	        if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
    	        {
    	          canvasData.data[idx + 0] = 0;
    	          canvasData.data[idx + 1] = 0;
    	          canvasData.data[idx + 2] = 0;
    	        }*/
    	      }
    	    }
    	    return canvasData;
      }
      //高亮柔白
      function softglow(canvasData)
      {


         var pixes = canvasData.data,
         width = canvasData.width, 
         height = canvasData.height;
         
    	  gaussBlur(pixes, width, height);
         canvasData.data=pixes;
         canvasData=bright(canvasData);
         
	     for ( var x = 0; x < canvasData.width; x++) {
	         for ( var y = 0; y < canvasData.height; y++) {

	           // Index of the pixel in the array
	           var idx = (x + y * canvasData.width) * 4;
	           var r = canvasData.data[idx + 0];
	           var g = canvasData.data[idx + 1];
	           var b = canvasData.data[idx + 2];
               var fr = 255 - (255 - r) * (255 - r) / 255;
               var fg = 255 - (255 - g) * (255 - g) / 255;
               var fb = 255 - (255 - b) * (255 - b) / 255;
    	        // assign gray scale value
   	        canvasData.data[idx + 0] = r; // Red channel
   	        canvasData.data[idx + 1] = g; // Green channel
   	        canvasData.data[idx + 2] = b; // Blue channel
   	        canvasData.data[idx + 3] = 255; // Alpha channel 
/*   	       if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
	        {
	          canvasData.data[idx + 0] = 0;
	          canvasData.data[idx + 1] = 0;
	          canvasData.data[idx + 2] = 0;
	        }*/
	         }
	     }
         return canvasData;
      }
      //透明度
      function opacity(canvasData)
      {
    	  var data=gaussBlur(canvasData.data,canvasData.width,canvasData.height);
          var opa=200;
    	     for ( var x = 0; x < canvasData.width; x++) {
    	         for ( var y = 0; y < canvasData.height; y++) {

    	           // Index of the pixel in the array
    	           var idx = (x + y * canvasData.width) * 4;
    	           var r = canvasData.data[idx + 0];
    	           var g = canvasData.data[idx + 1];
    	           var b = canvasData.data[idx + 2];
    	           var r2 = data[idx + 0];
    	           var g2 = data[idx + 1];
    	           var b2 = data[idx + 2];

    	           var n=200;
    	           var fr=((256-n)*r+n*r2)>>8;
    	           var fg=((256-n)*g+n*g2)>>8;
    	           var fb=((256-n)*b+n*b2)>>8;
    	           canvasData.data[idx + 0] = fr; // Red channel
    	           canvasData.data[idx + 1] = fg; // Green channel
    	           canvasData.data[idx + 2] = fb; // Blue channel
    	           canvasData.data[idx + 3] = 255; // Alpha channel  
    	           // add black border
/*    	           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
    	           {
    	             canvasData.data[idx + 0] = 0;
    	             canvasData.data[idx + 1] = 0;
    	             canvasData.data[idx + 2] = 0;
    	           }*/
    	         }
    	     }
    	     return canvasData;
      }
     
/* function sketch(canvasData)
{
	
	grayData=gray(canvasData); 
	negativeData=negatives(grayData);
//	gausianData=gausian(negativeData);
  	     var data=gaussBlur(negativeData.data,canvasData.width,canvasData.height);
	     for ( var x = 0; x < canvasData.width; x++) {
         for ( var y = 0; y < canvasData.height; y++) {

           // Index of the pixel in the array
           var idx = (x + y * canvasData.width) * 4;
           var r = grayData.data[idx + 0];
           var g = grayData.data[idx + 1];
           var b = grayData.data[idx + 2];

           var r2 = data[idx + 0];
           var g2 = data[idx + 1];
           var b2 = data[idx + 2];
           var rf=r+r*r2/(256-r2);
           var gf=g+g*g2/(256-g2);
           var bf=b+b*b2/(256-b2);
           var fr=rf>255?255:rf;
           var fg=gf>255?255:gf;
           var fb=bf>255?255:bf;
           canvasData.data[idx + 0] = fr; // Red channel
           canvasData.data[idx + 1] = fg; // Green channel
           canvasData.data[idx + 2] = fb; // Blue channel
           canvasData.data[idx + 3] = 255; // Alpha channel  
           // add black border
           if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
           {
             canvasData.data[idx + 0] = 0;
             canvasData.data[idx + 1] = 0;
             canvasData.data[idx + 2] = 0;
           }
           
   
         }
     }
	return grayData;
} */
      function gausian(canvasData)
      {
     	 for ( var x = 0; x < canvasData.width; x++) {
              for ( var y = 0; y < canvasData.height; y++) {

                // Index of the pixel in the array
                var idx = (x-1 + (y-1) * canvasData.width) * 4;
                var r = canvasData.data[idx + 0];
                var g = canvasData.data[idx + 1];
                var b = canvasData.data[idx + 2];
                var idx2 = (x-1 +y * canvasData.width) * 4;
                var r2 = canvasData.data[idx2 + 0];
                var g2 = canvasData.data[idx2 + 1];
                var b2 = canvasData.data[idx2 + 2];
                var idx3 = (x-1 + (y+1) * canvasData.width) * 4;
                var r3 = canvasData.data[idx3 + 0];
                var g3 = canvasData.data[idx3 + 1];
                var b3 = canvasData.data[idx3 + 2];
                var idx4 = (x + (y-1) * canvasData.width) * 4;
                var r4 = canvasData.data[idx4 + 0];
                var g4 = canvasData.data[idx4 + 1];
                var b4 = canvasData.data[idx4 + 2];
                var idx5 = (x + y * canvasData.width) * 4;
                var r5 = canvasData.data[idx5 + 0];
                var g5 = canvasData.data[idx5 + 1];
                var b5 = canvasData.data[idx5 + 2];
                var idx6 = (x + (y+1) * canvasData.width) * 4;
                var r6 = canvasData.data[idx6 + 0];
                var g6 = canvasData.data[idx6 + 1];
                var b6 = canvasData.data[idx6 + 2];
                var idx7 = (x+1 + (y-1) * canvasData.width) * 4;
                var r7 = canvasData.data[idx7 + 0];
                var g7 = canvasData.data[idx7 + 1];
                var b7 = canvasData.data[idx7 + 2];
                var idx8 = (x+1 + y * canvasData.width) * 4;
                var r8 = canvasData.data[idx8 + 0];
                var g8 = canvasData.data[idx8 + 1];
                var b8 = canvasData.data[idx8 + 2]; 
                var idx9 = (x+1 + (y+1) * canvasData.width) * 4;
                var r9 = canvasData.data[idx9 + 0];
                var g9 = canvasData.data[idx9 + 1];
                var b9 = canvasData.data[idx9 + 2]; 
                var fr=(r+r2*2+r3+r3*2+r5*4+r6*2+r7+r8*2+r9)/16;
                var fg=(g+g2*2+g3+g3*2+g5*4+g6*2+g7+g8*2+g9)/16;
                var fb=(b+b2*2+b3+b3*2+b5*4+b6*2+b7+b8*2+b9)/16; 
     /*            var n=1;
                var ar=new Array();
                var ag=new Array();
                var ab=new Array();
                for(var i=0;i<n*2+1;i++)
             	   {
             	   for(var j=0;j<n*2+1;j++)
             		   {
                         var idx = (x+(i-n) + (y+j-n) * canvasData.width) * 4;
                         ar.push(canvasData.data[idx + 0]);
                         ag.push(canvasData.data[idx + 1]);
                         ab.push(canvasData.data[idx + 2]);        		   
             		   }
             	   }
                var fr=0;
                var fb=0;
                var fg=0;
                var len=ar.length;
        
                for(var z=0;z<len;z++)
             	   {
             	   fr+=ar[z];
             	   fg+=ag[z];
             	   fb+=ab[z];
             	   }
                var fr=(fr)/len;
                var fg=(fg)/len;
                var fb=(fb)/len;  */
                canvasData.data[idx + 0] = fr; // Red channel
                canvasData.data[idx + 1] = fg; // Green channel
                canvasData.data[idx + 2] = fb; // Blue channel
                canvasData.data[idx + 3] = 255; // Alpha channel  
                // add black border
/*                if(x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) 
                {
                  canvasData.data[idx + 0] = 0;
                  canvasData.data[idx + 1] = 0;
                  canvasData.data[idx + 2] = 0;
                }*/
                
        
              }
          }
          return canvasData;
      }