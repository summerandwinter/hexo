define(function (require, exports, module) {
    var selfModuleName = 'shake';
    var moduleCommon = require('common');
    var fireWork = require('firework');
    var getReadyCount = 100;
    var shakeId = 0;
    var maxCount = 0;
    var getShakeReady;
    var startShakeTimer;
    var showFire = false;

    exports.init = function () {
        $('body').on('active', function () {
            $('#shake #readyShake').on('click', function () {
                pushShake();
            });
            $('#shake #beginShake').on('click', function () {
                beginShake();
            });
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#shake').show();
            } else {
                $('#shake').hide();
            }
        });
    };

    var pushShake = function () {
        $('#shake #readyShake').off('click');
        var now = new Date();
        showFire = false;
        moduleCommon.loading('数据正在准备中，请稍后');
        $.extendPost(moduleCommon.httpURL + $('#PushShake').val(), {}, 'json', function (data) {
            moduleCommon.loaded();
            $('#shake .shakebg').hide();
            $('#shake #readyShake').on('click', function () {
                pushShake();
            });
            if (data.ResultType != 1) {
                moduleCommon.showInfo(data.Message);
                return;
            }
            $('#shake .yyyTip').hide();
            $('#shake #beginShake').show();
            $('#shake #shakeReadyNumber').show();
            $('#shake #readyList').show();

            shakeId = data.AppendData.Id;
            maxCount = data.AppendData.MaxCount;
            var shakeReadyNumber = 0;
            getShakeReady = setInterval(function () {
                $.extendGetJSON(moduleCommon.httpURL + $('#GetShakeJoinFans').val(), { 'shakeId': shakeId, 'count': getReadyCount }, function (data) {
                    $(data).each(function (index, element) {
                        if ($('#shake #readyList li[data-id="' + element.Id + '"]').size() < 1) {
                            $('#shake #readyList').append('<li data-id="' + element.Id + '"><img src="' + element.Head + '"><span>' + element.NickName + '</span></li>');
                            shakeReadyNumber++;
                            $('#shake #shakeReadyNumber').html('已有' + shakeReadyNumber + '人准备');
                        }
                    });
                });
            }, 2000);
        }, function () {
            moduleCommon.loaded();

            $('#shake #readyShake').on('click', function () {
                pushShake();
            });
            moduleCommon.showInfo('网络繁忙，请稍后重试');
        });
    };

    var beginShake = function () {
        $('#shake #beginShake').off('click');
        var now = new Date();
        console.log('开始摇一摇：' + now.getFullYear().toString() + '-' + (now.getMonth() + 1).toString() + '-' + now.getDate().toString() + ' ' + now.getHours().toString() + ':' + now.getMinutes().toString() + ':' + now.getSeconds().toString() + ',' + now.getMilliseconds().toString());
        $('#shake #shakeReadyNumber').hide().html('已有0人准备');
        $('#shake #readyList').hide().empty();
        $('#shake #beginShake').hide();
        clearInterval(getShakeReady);
        var i = 4;
        var shakeTimes = $('#shake #shakeTimes');
        shakeTimes.show().text(5).animate({ 'opacity': 0 }, 'slow');
        startShakeTimer = setInterval(function () {
            if (i > 0) {
                shakeTimes.text(i).css('opacity', 1).animate({ 'opacity': 0 }, 'slow');
            }
            else {
                clearInterval(startShakeTimer);

                $('#shake #beginShake').on('click', function () {
                    beginShake();
                });

                shakeTimes.text('GO').css('opacity', 1).animate({ 'opacity': 0 }, 1000, function () {
                    $.extendPost(moduleCommon.httpURL + $('#OpenShake').val(), { 'shakeId': shakeId }, 'json', function (data) {
                        if (data.ResultType != 1) {
                            moduleCommon.showInfo(data.Message);
                            return;
                        }

                        $('#shake #shakeList').show().css('opacity', 1);
                        var now = new Date();
                        console.log('开始获取摇一摇：' + now.getFullYear().toString() + '-' + (now.getMonth() + 1).toString() + '-' + now.getDate().toString() + ' ' + now.getHours().toString() + ':' + now.getMinutes().toString() + ':' + now.getSeconds().toString() + ',' + now.getMilliseconds().toString());
                        getShake();
                    }, function () {
                        moduleCommon.showInfo('网络繁忙，请稍后重试');
                    });

                    shakeTimes.hide();
                });
            }
            i--;
        }, 1000);
    };

    var getShake = function () {
        var now = new Date();
        $.extendGetJSON(moduleCommon.httpURL + $('#GetShakeStatistics').val(), { 'shakeId': shakeId, '_r': Math.random() }, function (data) {
            if (data.Shakes.length < 1) {
                if (!data.IsOver)
                    setTimeout(function () { getShake(); }, 2000);
                return;
            }

            $('#shake #shakeList li[data-rank!=0]').attr('data-rank', 0);
            $.each(data.Shakes, function (index, ele) {
                if (ele.Count * 1 >= maxCount * 0.25 && !showFire) {
                    $("#shakefire").css('top',0).fadeIn();
                    showFire = true;
                    var i = 0;
                    var iShake = setInterval(function () {
                        if (i % 2 == 0) $('html').css('margin-left', '10px');
                        else $('html').css('margin-left', '-10px');
                        if (++i >= 20) {
                            clearInterval(iShake);
                            $('html').removeAttr('style');
                        }
                    }, 30);
                    setTimeout(function () {
                        $('#shakefire').fadeOut();
                    }, 4000);
                }
                if ($('#shake #shakeList li[data-userid=' + ele.FansId + ']').size() < 1) {
                    $('#shake #shakeList').append('<li data-userid="' + ele.FansId + '" data-header="' + ele.Head + '" data-nickname="' + ele.NickName + '" style="bottom:0px;display:none;"><div class="shakebox"><img onerror="imgError(this);" src="' + ele.Head + '" /><div><span>0</span></div></div><span>' + ele.NickName + '</span></li>');
                }
                $('#shake #shakeList li[data-userid=' + ele.FansId + ']>div>div').html(ele.Count).animate({ 'width': Math.max(0, Math.ceil(ele.Count * (790 / maxCount) + 25)) });
                $('#shake #shakeList li[data-userid=' + ele.FansId + '] img:not(.static)').animate({ 'left': Math.ceil(ele.Count * (790 / maxCount)) });
                $('#shake #shakeList li[data-userid=' + ele.FansId + ']').attr('data-rank', index + 1).animate({ 'top': index * 68 + 'px' });
            });
            $('#shake #shakeList li[data-rank!=0]').show();
            $('#shake #shakeList li[data-rank=0]').animate({ 'top': 8 * 68 + 'px' }, function () { $(this).hide(); });

            if (data.IsOver && data.Shakes.length > 0) {
                moduleCommon.showInfo('游戏结束，不用再摇啦');
                var shakeStr = '';
                var shakeStrLast = '';
                var maxLength = data.Shakes.length > 10 ? 10 : data.Shakes.length;
                for (i = 0; i < maxLength; i++) {
                    var liFans = $('#shake #shakeList li[data-userid=' + data.Shakes[i].FansId + ']');
                    if (i >= 3) {
                        shakeStrLast = shakeStrLast + '<li class="shakeUser' + i + '"><img onerror="imgError(this);" src="' + liFans.data('header') + '" /><span>' + liFans.data('nickname') + '</span></li>';
                    } else {
                        shakeStr = shakeStr + '<div class="shakeUser shakeUser' + i + '"><img onerror="imgError(this);" src="' + liFans.data('header') + '" /><span>' + liFans.data('nickname') + '</span></div>';
                    }
                }
                fireWork.show();
                $('body').append('<a class="clickBtn submitShake">确认名次</a><img src="' + $('#config>#FileWebHost').val() + '/ScreenTheme/default/images/top3.png" id="top3">' + shakeStr);
                $('.submitShake').on('click', function () {
                    submitShake();
                });
                $('body').append('<ul class="shakeUserLast">' + shakeStrLast + '</ul>');
                $('#top3').animate({ 'top': '280px' }, 'fast');
                setTimeout(function () {
                    $('.shakeUser2').animate({ 'margin-left': '120px', 'opacity': 1 });
                }, 500);
                setTimeout(function () {
                    $('.shakeUser1').animate({ 'margin-left': '-280px', 'opacity': 1 });
                }, 1000);
                setTimeout(function () {
                    $('.shakeUser0').animate({ 'top': '165px', 'opacity': 1 });
                }, 1500);
                setTimeout(function () {
                    $('.shakeUserLast').animate({ 'opacity': 1 });
                }, 2000);
                return false;
            }
            setTimeout(function () { getShake(); }, 2000);
        }, function () {
            setTimeout(function () { getShake(); }, 5000);
        });
    };

    var submitShake = function () {
        fireWork.hide();
        $('.submitShake').remove();
        $('.shakeUser').remove();
        $('.shakeUserLast').remove();
        $('#top3').remove();
        $('#shake .shakebg').show();
        $('#shake #shakeList').hide().empty();
        $('#shake .yyyTip').show();
    };
});