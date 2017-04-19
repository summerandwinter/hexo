define(function (require, exports, module) {
    var moduleCommon = require('common');
    var showAdTime = 60;

    //获取屏幕配置信息
    var getScreenSetting = function () {
        $.extendGetJSON(moduleCommon.httpURL + $('#url>#GetConfig').val(), {
            'moduleId': 100100,
            'isGetScreenState': 'True'
        }, function (data) {
            $('#screenfinished').remove();
            if (data.State != 5) {
                $('body').append('<div id="screenfinished"><span>活动已结束</span></div>');
            }
            $('body').data('screenConfig', data.Configs);
            setTimeout(function () {
                getScreenSetting();
            }, 30000);
        }, function () {
            setTimeout(function () {
                getScreenSetting();
            }, 30000);
        });
    };

    //获取广告
    var getScreenAds = function () {
        if ($('#main>#materiel').size() < 1)
            $('#main').append('<div id="materiel"></div>');
        $('#main>#materiel').html('');
        $.extendGetJSON(moduleCommon.httpURL + $('#url>#GetAd').val(), {'moduleId': $('#config>#KXDPMModuleId').val()}, function (data) {
            if (data && data.length > 0) {
                $(data).each(function (index, ad) {
                    if (ad.type == 2) {
                        switch (ad.showType) {
                            case 1:
                                $('#main>#materiel').append('<img data-id="' + ad.id + '" class="materiel-left" src="' + $('#config>#FileWebHost').val() + ad.imgUrl + '" />');
                                break;
                            case 3:
                                $('#main>#materiel').append('<img data-id="' + ad.id + '" class="materiel-top" src="' + $('#config>#FileWebHost').val() + ad.imgUrl + '" />');
                                break;
                            case 5:
                                $('#main>#materiel').append('<img data-id="' + ad.id + '" class="materiel-right" src="' + $('#config>#FileWebHost').val() + ad.imgUrl + '" />');
                                break;
                        }
                    }
                });
            }
            setTimeout(function () {
                getScreenAds();
            }, 60000);
        }, function () {
            setTimeout(function () {
                getScreenAds();
            }, 60000);
        });
    };

    //提交广告展示时长
    var submitAdAccessLog = function () {
        $('#main>#materiel img[data-id]').each(function (index, ele) {
            $.extendPost(moduleCommon.httpURL + $('#url>#SubmitAdAccessLog').val(), {
                'id': $(ele).data('id'),
                'operationType': 3,
                'showTimeLength': showAdTime
            }, 'text', function () {
            });
        });
        setTimeout(function () {
            submitAdAccessLog();
        }, showAdTime * 1000);
    };

    //提交网络中断恢复日志
    var submitNetworkInterruptAndRecoveryLog = function (time) {
        $.extendPost(moduleCommon.httpURL + $('#url>#SubmitNetworkInterruptAndRecoveryLog').val(), {'time': time}, 'text', function () {
        }, function () {
            setTimeout(function () {
                submitNetworkInterruptAndRecoveryLog(time);
            }, 60000);
        });
    };

    //背景图显示大小
    var setBackgroundSize = function () {
        var scale = $(window).width() / $(window).height();
        if (scale < 1.7777) {
            $('body').css('background-size', 'auto 100%');
        } else {
            $('body').css('background-size', '100% auto');
        }
    };

    //初始化
    exports.init = function () {
        if ($('#wall_zz').size() < 1) {  //如果是拼图背景就不根据窗口大小设置背景图大小
            setBackgroundSize();
            $(window).resize(function () {
                setBackgroundSize();
            });
        }

        var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
        if (!isChrome) {
            $("body").prepend('<div id="nohtml5"><div>由于您正在使用非chrome浏览器,大屏幕的体验处于不佳状态,建议您立刻更换浏览器,以获得更好的大屏幕产品用户体验。<br/>下载浏览器:<a href="http://www.chromeliulanqi.com/" target="blank"><img src=" ' + $('#config>#FileWebHost').val() + '/ScreenTheme/default/images/chrome.jpg"> chrome浏览器</a></div></div>');
        }
        //模拟select	
        $(".select").click(function (event) {
            event.stopPropagation();
            if (!$(this).parent().hasClass('disabled')) {
                $(".select_option").slideUp();
                if ($(this).next(".select_option").css("display") == "none") {
                    $(this).next(".select_option").css({
                        left: $(this).position().left,
                        top: $(this).position().top + 35
                    });
                    $(this).next(".select_option").slideDown("fast");
                }
                else {
                    $(this).next(".select_option").slideUp();
                }
            }
            $(document).bind("click", function () {
                $(".select_option").slideUp();
            });
        });

        //获取屏幕配置
        getScreenSetting();

        //绑定开启活动按钮的点击事件
        $('#index>#code>a.clickBtn').on('click', function () {
            //移除活动准备开始界面
            $("#index").remove();

            //获取广告
            getScreenAds();
            //提交广告展示时长
            submitAdAccessLog();

            //成操作按钮
            $('.moduleBtn').each(function (i, e) {
                $('#btn_change').append($(e).html());
            });
            $('.moduleBtn').remove();
            //追加二维码操作按钮
            $('#btn_change').append('<li class="btn_qrcode" data-name="qrcode" data-description="二维码"><i class="iconfont">&#xe621;</i></li>');

            //绑定模块操作按钮点击事件
            $('#btn_change>li:not([data-name="messagewalldanmu"])').on('click', function () {
                var $this = $(this);
                //触发当前激活模块变化事件
                $('body').triggerHandler('modulechange', [$this.data('name')]);
            });
            //追加全屏操作按钮  2016-02-29新增网络状态
            $('#btn_change').append('<li class="btn_NetworkStatus" data-description="网络状态" id="NetworkStatus"><i class="iconfont">&#xe625;</i></li><li class="btn_fullscreen" data-description="全屏 F11" id="fullscreen"><i class="iconfont">&#xe603;</i></li><li class="btn_hidden" data-description="隐藏/显示" id="hideBtn"><i class="iconfont">&#xe62d;</i></li>');            //监测网络状态
            setInterval(function () {
                var $img = $('<img />');
                $img.attr({
                    'src': 'http://www.baidu.com/img/bdlogo.gif?_r=' + Math.random(),
                    'id': 'testConnectionStatus'
                }).css('display', 'none');
                $img.on('load', function () {
                    $('#NetworkStatus i').html('&#xe625;');
                    var time = localStorage.getItem('networkInterruptTime');
                    if (time) {
                        submitNetworkInterruptAndRecoveryLog(time);
                        localStorage.removeItem('networkInterruptTime');
                    }
                }).on('error', function () {
                    $('#NetworkStatus i').html('&#xe626;');
                    var time = localStorage.getItem('networkInterruptTime');
                    if (!time) {
                        var now = new Date();
                        localStorage.setItem('networkInterruptTime', now.getFullYear() + '-' + moduleCommon.fillZero(now.getMonth() + 1, 2) + '-' + moduleCommon.fillZero(now.getDate(), 2) + ' ' + moduleCommon.fillZero(now.getHours(), 2) + ':' + moduleCommon.fillZero(now.getMinutes(), 2) + ':' + moduleCommon.fillZero(now.getSeconds(), 2));
                    }
                });
            }, 5000);
            //隐藏按钮
            $('#hideBtn').click(function () {
                if ($(this).hasClass('btn_hidden')) {
                    $(this).find('i').html('&#xe62c;');
                    $('#btn_change').animate({'left': -$('#btn_change').width() + 46});
                    $(this).removeClass('btn_hidden');
                } else {
                    $('#btn_change').animate({'left': 0});
                    $(this).addClass('btn_hidden');
                    $(this).find('i').html('&#xe62d;');
                }
            })
            //绑定全屏按钮点击事件
            var fullscreen = false;
            $('#btn_change>li.btn_fullscreen').on('click', function () {
                if (!fullscreen) {
                    var docElm = document.documentElement;
                    if (docElm.requestFullscreen) {
                        docElm.requestFullscreen();
                    }
                    else if (docElm.msRequestFullscreen) {
                        docElm.msRequestFullscreen();
                    }
                    else if (docElm.mozRequestFullScreen) {
                        docElm.mozRequestFullScreen();
                    }
                    else if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen();
                    }
                    fullscreen = true;
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                    fullscreen = false;
                }
            });

            //点击二维码小图
            $('#activityCode>#top_code').on('click', function () {
                //触发当前激活模块变化事件
                $('body').triggerHandler('modulechange', ['qrcode']);
            });
            //关闭二维码显示
            $('#activityCode>#showCode>a.closeBtn').on('click', function () {
                //触发当前激活模块变化事件
                $('body').triggerHandler('modulechange', [$('#btn_change>li:not(.btn_fullscreen):eq(0)').data('name')]);
            });

            //绑定所有操作按钮鼠标滑过事件
            $('#btn_change>li').hover(function () {
                moduleCommon.showTips(this);
            }, function () {
                moduleCommon.removeTips();
            });

            //显示操作按钮
            $('#btn_change').show();

            //在body上触发active事件
            $('body').triggerHandler('active');
            //在body上触发active事件
            $('body').triggerHandler('modulechange', [$('#btn_change>li:not(.btn_fullscreen):eq(0)').data('name')]);

        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName != 'qrcode') {
                //隐藏二维码大图
                $('#activityCode>#showCode').hide();
            }
            else {
                //显示二维码大图
                $('#activityCode>#showCode').show();
            }
        });
    };
});