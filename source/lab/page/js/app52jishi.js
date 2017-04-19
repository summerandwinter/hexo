/** 技术支持 QQ:11062498  2016*/
 function removejscssfile(filename, filetype){ 
//判断文件类型 
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; 
	//判断文件名 
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; 
	var allsuspects=document.getElementsByTagName(targetelement); 
	//遍历元素， 并删除匹配的元素 
	for (var i=allsuspects.length; i>=0; i--){ 
	if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1) 
	allsuspects[i].parentNode.removeChild(allsuspects[i]); 
	} 
} 
 function loadjscssfile(filename, filetype) {
	//如果文件类型为 .js ,则创建 script 标签，并设置相应属性 
	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	}
	//如果文件类型为 .css ,则创建 script 标签，并设置相应属性 
	else if (filetype == "css") {
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") document.getElementsByTagName("head")[0].appendChild(fileref);
}
 function showCountDown(year,month,day,hour,minite){ 
	var now = new Date(); 
	var endDate = new Date(year,month-1,day,hour,minite); 
	var leftTime=endDate.getTime()-now.getTime(); 
	if(leftTime<0){
		return{dayleft:0,hourleft:0,miniteleft:0,secondleft:0};
	}
	var leftsecond = parseInt(leftTime/1000); 
	var dayleft=Math.floor(leftsecond/(60*60*24)); 
	var hourleft=Math.floor((leftsecond-dayleft*24*60*60)/3600); 
	var miniteleft=Math.floor((leftsecond-dayleft*24*60*60-hourleft*3600)/60); 
	var secondleft=Math.floor(leftsecond-dayleft*24*60*60-hourleft*3600-miniteleft*60); 
	return {dayleft:dayleft,hourleft:hourleft,miniteleft:miniteleft,secondleft:secondleft}
}
function autoCountDown(year,month,day,hour,minite,callback){
	window.setInterval(
	function(){
		  callback(showCountDown(year,month,day,hour,minite));
    }, 1000);
}
function app52countDown(time,callback){
	if(time&&time!=''){
		var timePro1 = time.split(" ");
		if(timePro1.length==2){
			var timePro2 = timePro1[0].split("-");
			var timePro3 = timePro1[1].split(":");
			try {
				autoCountDown(timePro2[0],timePro2[1],timePro2[2],timePro3[0],timePro3[1],callback);
			} catch (e) {
				alert('时间格式错误！');
			}
		}
	}
}

function app52countDown2(time){
	if(time&&time!=''){
		var timePro1 = time.split(" ");
		if(timePro1.length==2){
			var timePro2 = timePro1[0].split("-");
			var timePro3 = timePro1[1].split(":");
			try {
				
				var ttt= showCountDown(timePro2[0],timePro2[1],timePro2[2],timePro3[0],timePro3[1]);
				 
				 return ttt;
			} catch (e) {
				alert('时间格式错误！');
			}
		}
	}
}
  
function app52yyfeven(a) {
		$(a).parents(".m-img").on("touchstart click", ".danmu", function(a) {
			a.preventDefault(), $(".audio_success").hide();
			if($("#audio_btn").hasClass("rotate")){
				 $("#audio_btn").trigger("click")
			}
			 $(".danmu").find(".voiceicon").removeClass("voiceicon_play"), $(".danmu").find("audio").each(function() {
					this.pause()
			 }), $(this).find(".voiceicon").addClass("voiceicon_play");
		    var b = $(this).find("audio"),
				c = b[0];
			c.play(), $(".danmu").find("audio").bind("ended", function() {
				$(this).parents("li").find(".voiceicon").removeClass("voiceicon_play")
			})
		})
	}
 
function app52GetYYmsg(a, sceneId,pageId,number) {
	  if(typeof(number) == 'undefined'){
		  number = 20;
	  }
	  console.log('app52GetYYmsg :',a,sceneId,pageId,number);
		$.ajax({
			type: "GET",
			url:PREFIX_HOST + "?c=liuyan&a=app52msg&flag=voice"+ "&time=" + (new Date).getTime(),
			dataType: "json",
			data: {
				sceneid:  sceneId,
			  	num:  number, 
				pageid:  pageId
			},
			success: function(c) {
				if ($(a).parents(".m-img").find(".danmu-anim").remove(), 1==2) {  //"vertical" == b.properties.message.type
					var d = $('<ul class="danmu-top danmu-anim" style="width: 320px; top:100%;"></ul>');
					$(a).parents(".m-img").append(d);
					for (var e = 0; e < c.data.length; e++) {
						var f = Math.floor(10 * Math.random()),
							g = 10 * f + 50 + "px",
							h = f + 20,
							i = f,
							j = 100 + 5 * c.data[e].TapeTime + "px";
						c.data[e].TapeTime > 10 && (j = "150px"), d.append('<li class="danmu danmu-tmee" style="width:' + j + ";left:" + g + ";-webkit-animation: walltop_anim " + h + "s linear " + i + 's infinite"><div class="header_img" style="background-image: url(' + c.data[e].WeixinImg + ')"></div><div class="voiceicon"></div><div class="aduio_time">' + c.data[e].TapeTime + '"</div><audio src="' +  c.data[e].app52Url + '"></audio></li>')
					}
				} else if (1==1) { //"transverse" == b.properties.message.type
					var d = $('<ul class="danmu-wapper danmu-anim" style="width: 100%; left: 320px;"></ul>');
					$(a).parents(".m-img").append(d);
					for (var e = 0; e < c.data.length; e++) {
						var f = Math.floor(10 * Math.random()),
							k = 10 * f + 50 + "px",
							h = f + 6,
							i = f,
							j = 100 + 5 * c.data[e].TapeTime + "px";
						c.data[e].TapeTime > 10 && (j = "150px"), d.append('<li class="danmu danmu-tmee" style="width:' + j + ";top:" + k + ";-webkit-animation: wall_anim " + h + "s linear " + i + 's infinite"><div class="header_img" style="background-image: url(' + c.data[e].WeixinImg + ')"></div><div class="voiceicon"></div><div class="aduio_time">' + c.data[e].TapeTime + '"</div><audio src="' +  c.data[e].app52Url + '"></audio></li>')
					}
				}
			},
			error: function() {}
		})
	}
