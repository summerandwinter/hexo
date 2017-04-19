define(function (require, exports, module) {
    var selfModuleName = 'guest';
    var moduleCommon = require('common');
    exports.init = function () {
        $('body').on('active', function () {
            $('#guest').on('click', 'ul li', function () {
                showGuest($(this));
            });
            $('#guest #guestDetail a.closeBtn').click(function () {
                $('#guestDetail').css('opacity', 0).hide();
                $("#guestList").show();
            });
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#guest').show();
                getScreenGuest();
            } else {
                $('#guest').hide();
            }
        });
    };

    var getScreenGuest = function () {
        moduleCommon.loading("数据正在准备中，请稍后");
        $.extendGetJSON(moduleCommon.httpURL + $('#GetGuest').val(), {}, function (data) {
            moduleCommon.loaded();
            $('#guest ul').empty();
            if (data && data.length > 0) {
                $.each(data, function (index, element) {
                    $('#guest ul').append('<li data-name="' + element.Name + '" data-pic="' + element.Pic + '" data-summary="' + (element.Summary) + '"><img src="' + element.Pic + '" alt="" /><span></span><label>' + element.Name + '</label></li>');
                });
            }
        }, function () {
            moduleCommon.loaded();
            moduleCommon.showInfo("网络繁忙，请稍后重试");
        });
    }

    //显示嘉宾介绍
    var showGuest = function (obj) {
        $('#guest').append('<img class="guestBigImg" style="left:' + $(obj).offset().left + 'px; top:'+$(obj).offset().top+'px" src="' + $(obj).find('img').attr('src') + '">');
        $('.guestBigImg').animate({'left':$('#guestList ul li:eq(0)').offset().left-1+'px','top':$('#guestList ul li:eq(0)').offset().top+'px','width':'196px','height':'196px'},200,function(){
            $('.guestBigImg').remove();
        });
        var str = '<img src="' + obj.data('pic') + '" /><span>' + obj.data('name') + '</span>' + obj.data('summary');
         $('#guest #guestInfo').html(str);
         $('#guest #guestDetail').show().animate({ 'opacity': 1 },500);
         $('#guest #guestList').hide();
    }
});