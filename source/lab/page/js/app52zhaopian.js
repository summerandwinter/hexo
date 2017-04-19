
 
function dealphotowall(aa,obj){
	console.log('dealphotowall' ,aa,obj);
	 var uploads_str = '<div class="c-photowall" style="position: absolute; border-color: rgba(225, 225, 225, 0); border-radius: 0px; border-width: 0px; height: 86px; -webkit-transform: rotate(0deg); transform: rotate(0deg); left: 120px; top: 110px; width: 86px; z-index: 2600;"><div class="c-photowall" id="k8dwwpoh8xquayviCom'+obj.id +'" background-type="1" background-layout="center" style="border-width: 0px; border-color: rgba(225, 225, 225, 0); border-radius: 0px;  opacity: 1; background-image: url(http://img.liveapp.cn/group2/M00/3D/5A/CoQ8n1ZBq_SAJ1MEAAAVJiLIpz0536.png);background-size:86px 86px; background-color: rgba(225, 225, 225, 0);">   <!-- <input type="file" class="file" accept="image/*">--></div></div>';
	 if(!mobilecheck() || !isWeixin()){
	   //uploads_str = '';	 
	 }
	 app52GetZhaopian(aa,  obj);
	   var html='<div class="photo-wall wall1 endWall" ><div class="img photo1" page="0" index="0" style="width: 100px; height: 80px; top: 29px; left: 100px; animation: fadein 1s ease-out 0s backwards; background-image: url(http://img.liveapp.cn/group3/eng/14/c5/42be6988bb09a69e574d23521442_14521798862245_568e8_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 100px 92.857142857143px; background-position: 0px -6.42857142857144px;"></div><div class="img photo2" page="0" index="1" style="width: 100px; height: 120px; top: 205px; left: 169px; animation: fadein 1s ease-out 0.3s backwards; background-image: url(http://img.liveapp.cn/group3/eng/94/99/bff3015e6c16a012a9014a0153a9_14521798702195_568e8_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 100px 126.687898089172px; background-position: 2e-14px -28.343949044586px;"></div><div class="img photo3" page="0" index="2" style="width: 100px; height: 110px; top: 0px; left: 199px; animation: fadein 1s ease-out 0.6s backwards; background-image: url(http://img.liveapp.cn/group3/eng/23/21/b05926b374ff92349e9b5c64c891_14521797906363_568e8_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 110px 110px; background-position: 0px -5px;"></div><div class="img photo4" page="0" index="3" style="width: 80px; height: 90px; top: 86px; left: 39px; animation: fadein 1s ease-out 0.9s backwards; background-image: url(http://img.liveapp.cn/group2/M00/D9/66/CoQ8n1ZuPECEbYuLAAAAAI66byY30_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 90.666666666667px 100px; background-position: -2.3333333333333px 0px;"></div><div class="img photo5" page="0" index="4" style="width: 80px; height: 80px; top: 122px; left: 215px; animation: fadein 1s ease-out 1.2s backwards; background-image: url(http://img.liveapp.cn/group2/M00/D9/63/CoQ8n1ZuO_6ES6XKAAAAABeEpgg70_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 180px 241.148325358852px; background-position: 0px -40.5741626794258px;"></div><div class="img photo6" page="0" index="5" style="width: 80px; height: 100px; top: 10px; left: 10px; animation: fadein 1s ease-out 1.5s backwards; background-image: url(http://img.liveapp.cn/group2/M00/C5/B9/CoQ8n1ZoLhSEOb1mAAAAACFtBi008_thumb.jpeg); background-color: rgb(0, 0, 0); background-size: 100.749103942652px 120px; background-position: -4.87455197132615px 0px;"></div><div class="img photo7" page="0" index="6" style="width: 180px; height: 180px; top: 103px; left: 449px; display: none; background-color: rgb(0, 0, 0);"></div><div class="img photo8" page="0" index="7" style="width: 120px; height: 180px; top: 134px; left: 132px; display: none; background-color: rgb(0, 0, 0);"></div><div class="img photo9" page="0" index="8" style="width: 140px; height: 180px; top: 460px; left: 400px; display: none; background-color: rgb(0, 0, 0);"></div><div class="img photo10" page="0" index="9" style="width: 200px; height: 200px; top: 436px; left: 3px; display: none; background-color: rgb(0, 0, 0);"></div>'+
	   uploads_str +
	   '</div>'; 
	   //var html= '';
	   	 $('<div class="video_mask page_effect c-photo-wall" id="mask_' + obj.id +'"></div>').appendTo($(aa).closest(".m-img"))
	    $(' <input id="close_' + obj.id + '" style="z-index: 1000; border-radius: 80px; border: none; color: rgb(102, 102, 102); position: absolute; width: 44px; height: 44px;  bottom:1px; right: 6px;" value="关闭" type="button" >').appendTo($(aa).closest(".m-img")),	
	   $(html).appendTo($("#mask_" + obj.id)).attr("width", "100%");
       $('.photo-wall .img').click(function(){
	       var img= $(this).css("backgroundImage");
		   console.log('backgroundImage：',img);
		   app52OpenImg(aa,obj);
	   });
	   $("#close_" + obj.id).bind("click", function() {
                    $(aa).show(), $("#mask_" + obj.id).remove(), $("#close_" + obj.id).remove(); 
                });
	  $('#k8dwwpoh8xquayviCom' + obj.id).bind("click", function() {
                   app52zhaoclick(obj.aa);
        })			
}
function app52OpenImg(aa,obj,thisobj){
  var html='<div class="singleImgShow" page="0" index="5" style="width: 100%; height: 100%;left: 0px; top: 0px;" width="100%"><div class="singleImgBack" style="background-color: #000; opacity: 0.6;width: 100%; height: 100%; 	"></div><div class="f-fix" style="height: 260px;width:100%;position: absolute;top:120px;left:0px;"><div class="frontPage" style="background: center center no-repeat url(/tpl/components/image/photowall/front/img/front.png);float:left;height: 100%;width: 60px"></div><div class="imgShow a-fadein" style="background-size:contain;float:left;position: relative;border: 2px solid white;box-sizing: border-box;;width: 205px;height: 100%;background-repeat: no-repeat;background-position: center;background-color: rgba(0,0,0,1);background-image: '+$(thisobj).css("backgroundImage")+'"><div class="f-fix" style="position: absolute;bottom: 0px;/* display: block; */width: 100%;"><div class="nickName" style="max-width: 188px;padding: 0px 10px;text-overflow: ellipsis;   white-space: nowrap;overflow: hidden;height: 30px;line-height: 20px;border-radius: 10px;background-color: rgba(0, 0, 0, 0.6);float: left;/* margin: 20px; */color: white;font-size: 20px;"><!--A001༄Ap吾爱婚礼请柬࿐--></div></div></div><div class="nextPage" style="background: center center no-repeat url(/tpl/components/image/photowall/front/img/next.png);float:left;height: 100%;width: 60px"></div></div></div>';	
 $('<div class="video_mask page_effect app52OpenImg " id="mask2_' + obj.id +'"></div>').appendTo($(aa).closest(".m-img"))
	   $(html).appendTo($("#mask2_" + obj.id)).attr("width", "100%");
	   $('#mask2_'+obj.id).find('.singleImgBack').click(function(){
		    $('#mask2_'+obj.id).remove();
	   });
}


function app52zhaoclick(obj, ele){
	//debugger;
	//app52GetZhaopian(ele, obj);
	
    wx.chooseImage({
		count: 1, // 默认9
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success: function (res) {
			var app52localIds = res.localIds;

			//var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
			 //alert('上传图片' +app52localIds[0]);
			setTimeout(function(){
			    wx.uploadImage({
				localId:  app52localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
				isShowProgressTips: 1, // 默认为1，显示进度提示
				success: function (res2) {
					var serverId = res2.serverId; // 返回图片的服务器端ID
					$.ajax({
						cache: !1,
						type: "GET",
						url: "/index.php?c=liuyan&a=saveUploadPic",
						data: $.param({
							mediaid: serverId,
							app52_sceneID: obj.sceneId,											
							pageid:  obj.pageId 
						}),
						dataType: "json",
						timeout: 6e4,
						success: function(b) {
							if(b.success){
							   alert('上传成功!');
							   app52GetZhaopian(ele, obj);
							  
							}else{
							   
							 }
						 
						},
						error: function(b) {
							 alert('返回的mediaid：'+localIds);
							 
						}
					})

				},
				 fail: function (res) {
                        alert(JSON.stringify(res));
                        }
			 });	
			},100)  
		}
	});
}

 
function app52GetZhaopian(a, obj){
	var number = obj.number;
	if(typeof(number) == 'undefined'){
	   number = 10 ;
	} 
	 var uploads_str = '<div class="c-photowall" style="position: absolute; border-color: rgba(225, 225, 225, 0); border-radius: 0px; border-width: 0px; height: 80px; -webkit-transform: rotate(0deg); transform: rotate(0deg); left: 120px; top: 110px; width: 80px; z-index: 2600;"><div class="c-photowall" id="k8dwwpoh8xquayviCom'+obj.id +'" background-type="1" background-layout="center" style="border-width: 0px; border-color: rgba(225, 225, 225, 0); border-radius: 0px;  opacity: 1; background-image: url(/assets/images/app52/app52photo.png);background-size:80px 80px; background-color: rgba(225, 225, 225, 0);">   <!-- <input type="file" class="file" accept="image/*">--></div></div>';
   $.ajax({
			type: "GET",
			url:PREFIX_HOST + "?c=liuyan&a=app52msg&flag=wximage"+ "&time=" + (new Date).getTime(),
			dataType: "json",
			data: {
				sceneid:  obj.sceneId,
			  	num:  number, 
				pageid:   obj.pageId
			},
			success: function(app52re) {
			  console.log('app52re' , app52re);
			  if(!mobilecheck() || !isWeixin()){
				   //uploads_str = '';	 
				 }
			  $('<div class="video_mask page_effect c-photo-wall" id="mask_' + obj.id +'"></div>').appendTo($(a).closest(".m-img"));
				 var d = $('<div class="photo-wall wall1 endWall"></div>');
				// $("#mask_" + obj.id).append(d).attr("width", "100%");
				 d.appendTo($("#mask_" + obj.id)).attr("width", "100%");
				  	for (var e = 0; e < app52re.data.length; e++) {
					    var i = e + 1;				 
						d.append('<div class="img photo'+i+'" page="0" index="'+e+'" style="width: ' + app52re.data[e].app52width + '; height: ' + app52re.data[e].app52height + '; top: ' + app52re.data[e].app52top + '; left: ' + app52re.data[e].app52left + '; animation: fadein 1s ease-out 0s backwards; background-image: url(' + app52re.data[e].app52localurl + '); background-color: rgb(0, 0, 0); background-size: ' + app52re.data[e].app52bgsize + '; background-position: ' + app52re.data[e].bgposition + '">	</div>');
				   }
				   d.append(uploads_str);
				  $(' <input id="close_' + obj.id + '" style="z-index: 1000; border-radius: 80px; border: none; color: rgb(102, 102, 102); position: absolute; width: 44px; height: 44px;  bottom:1px; right: 6px;" value="关闭" type="button" >').appendTo($(a).closest(".m-img")),	
				   $('.photo-wall .img').click(function(){
					   var img= $(this).css("backgroundImage");
					   console.log('backgroundImage：',img);
					   app52OpenImg(a,obj,this);
				   });
				   $("#close_" + obj.id).bind("click", function() {
								$(a).show(), $("#mask_" + obj.id).remove(), $("#close_" + obj.id).remove(); 
							});
				   $('#k8dwwpoh8xquayviCom' + obj.id).bind("click", function() {
							   app52zhaoclick(obj,a);
					})		 
				 
			},
			error: function() {}
		})
}
 