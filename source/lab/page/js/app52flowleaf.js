/** 技术支持  2016*/
jQuery.fn.flowLeaf = function(imgs,data){
	if(data){
		var nos = data.nos;
		var time = data.time;
		var timeD = data.timeD;
		var U3D = data.U3D;
		var notroll = data.notroll;
		var downup = data.downup;
	}
	if(!nos)nos = 15;
	if(!time)time = 10;
	if(!timeD)timeD = 1;
	if(timeD>=time)timeD = time;
	if(!notroll)notroll = false;
	if(!U3D)U3D = false;
	if(notroll)U3D = false;
	if(!downup)downup = false;
	
	var imgLength = imgs.length;
	var imgIndex = 0;
	var domBiLiWidth = 50;
	var screenWidthReal = 980;
	var realSheBeiWidth = $(".nr").width();
	var realBili = realSheBeiWidth/screenWidthReal;
	domBiLiWidth = Math.round(domBiLiWidth*realBili);
	var nosIndex = 0;
	var container = this;
	if(U3D){
		$(container).css("-webkit-perspective","500");
	}
	var intervalID = 
		setInterval(function(){
			if(imgIndex==imgLength){imgIndex=0;}
			var leftRandom = Math.round(Math.random()*screenWidth);
			if(screenWidth-leftRandom<domBiLiWidth){
				leftRandom = leftRandom - domBiLiWidth;
			}
			var leftRandom2 = Math.round(Math.random()*screenWidth);
			if(screenWidth-leftRandom2<domBiLiWidth){
				leftRandom2 = leftRandom2 - domBiLiWidth;
			}
			var randomTime = Math.random()*(time-timeD)+timeD;
			
			var rotateBigin = "";
			var rotateStop = "";
			if(!notroll){
				rotateBigin = " rotate(0deg)";
				rotateStop = " rotate(720deg)";
			}
			if(U3D){
				rotateBigin = rotateBigin + " rotateX(0deg) rotateY(0deg)";
				rotateStop = rotateStop + " rotateX(720deg) rotateY(720deg)";
			}
			
			var topBegin = "-"+domBiLiWidth*2+"px";
			var topStop = (screenHeight-domBiLiWidth)+"px";
			if(downup){
				topBegin = screenHeight+domBiLiWidth+"px";
				topStop = "-"+domBiLiWidth+"px";
			}
			
			var conID = $(container).attr("id");
			$("head").append("<style type=\"text/css\">@-webkit-keyframes myflowUpDownK"+nosIndex+conID+imgs[imgIndex].replace(app52flowspath,'').replace('.png','')+"{"+
					"0%{-webkit-transform:translate("+leftRandom+"px,"+topBegin+")"+rotateBigin+";}"+
					"100%{-webkit-transform:translate("+leftRandom2+"px,"+topStop+")"+rotateStop+";}"+
					"} "+
					".myflowUpDown"+nosIndex+conID+imgs[imgIndex].replace(app52flowspath,'').replace('.png','')+"{"+
						"-webkit-animation: myflowUpDownK"+nosIndex+conID+imgs[imgIndex].replace(app52flowspath,'').replace('.png','')+" "+randomTime+"s infinite;-webkit-animation-timing-function:linear;-webkit-animation-fill-mode:backwards;-webkit-animation-delay:"+(nosIndex*0.3)+"s;"+
					"}"+
				"</style>");
			var img = $("<img class=\"myflowUpDown"+nosIndex+conID+imgs[imgIndex].replace(app52flowspath,'').replace('.png','')+"\" src=\""
						+imgs[imgIndex]+"\" style=\"z-index:2147483642;position:absolute;" +
						"-webkit-transform:translate("+leftRandom+"px,"+topBegin+");top:0;left:0;width:"+(domBiLiWidth+8)+"px;\">").prependTo(container);
			imgIndex++;
			nosIndex++;
			if(nosIndex==nos){
				clearInterval(intervalID);
			}
		},800);
};