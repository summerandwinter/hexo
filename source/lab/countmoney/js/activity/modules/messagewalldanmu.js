define(function (require, exports, module) {
    var selfModuleName = 'messagewalldanmu';
    var moduleCommon = require('common');
    var moduleId = $('[data-modulename=' + selfModuleName + ']').data('moduleid');
    var chatId = 0;
    var countNumber = 100;  //每次拉取条数
    var getNullCount = 0;
    var oldDanmuData = [];
    var option = { 'font': '宋体', 'bold': false, 'size': 30, 'colors': ['#fff'], 'opacity': 1, 'speed': 8 };

    exports.init = function () {
        $('body').on('active', function (e, moduleName) {
            $('#btn_change>li[data-name="messagewalldanmu"]').on('click', function () {
                var $this = $(this);
                if ($this.data('ishide')) {
                    $this.data('ishide', false);
                    $('#btn_change>li[data-name="messagewalldanmu"] i').html('&#xe62f;');
                    $('body>span.danmaku').css('display', 'block');
                }
                else {
                    $this.data('ishide', true);
                    $('#btn_change>li[data-name="messagewalldanmu"] i').html('&#xe630;');
                    $('body>span.danmaku').css('display', 'none');
                }
            });

            $.extendGetJSON(moduleCommon.httpURL + $('#url>#GetConfig').val(), { 'moduleId': moduleId }, function (data) {
                if (data.KXD_BulletScreen_Font)
                    option.font = data.KXD_BulletScreen_Font;
                if (data.KXD_BulletScreen_Bold && data.KXD_BulletScreen_Bold == '1')
                    option.bold = true;
                if (data.KXD_BulletScreen_Size)
                    option.size = parseInt(data.KXD_BulletScreen_Size);
                if (data.KXD_BulletScreen_Color)
                    option.colors = data.KXD_BulletScreen_Color.split(',');
                if (data.KXD_BulletScreen_Transparency)
                    option.opacity = parseFloat(data.KXD_BulletScreen_Transparency);
                if (data.KXD_BulletScreen_Speed)
                    option.speed = parseFloat(data.KXD_BulletScreen_Speed) / 1000;

                //$('[data-modulename=' + selfModuleName + '] #danmu').appendTo('body');

                //$('#danmu').css({ width: window.screen.width, height: window.screen.height, position: 'fixed', left: 0, top: 0 });
                $('#danmu').data('rowcount', Math.floor(window.screen.height / (option.size + 50)));
                $('#danmu').data('rowindex', 0);
                $('#danmu').data('width', window.screen.width);

                getBarrager();
            }, function () {
                moduleCommon.showInfo('获取弹幕配置失败', 0);
            });
        });
    };

    imgError = function (v) {
        $(v).attr('src', $('#config>#FileWebHost').val() + '/FansAvatar/noheader.jpg');
    };

    var getBarrager = function () {
        $.extendGetJSON(moduleCommon.httpURL + $('#GetBarragerMessages').val(), { 'barragerId': chatId, 'count': countNumber }, function (data) {
            if (data.length > 0) {
                getNullCount = 0;
                chatId = data[data.length - 1].Id;
                var danmuData = [];
                $.each(data, function (i, msg) {
                    if (msg.Type == 1) {
                        var danmuTmp = {};
                        danmuTmp.info = msg.FansNickName + '：' + msg.Content;
                        danmuTmp.font = option.font;
                        danmuTmp.bold = option.bold;
                        danmuTmp.size = option.size;
                        danmuTmp.color = option.colors[Math.floor(Math.random() * option.colors.length)];
                        danmuTmp.opacity = option.opacity;
                        danmuTmp.speed = Math.ceil(Math.random() * 3) / 2 + option.speed;
                        danmuData.push(danmuTmp);
                    }
                });

                oldDanmuData = oldDanmuData.concat(danmuData);
                if (oldDanmuData.length > 100)
                    oldDanmuData = oldDanmuData.slice(oldDanmuData.length - 100);

                playDanmu(danmuData);
            }
            else {
                getNullCount++;
                if (getNullCount == 24) {
                    getNullCount = 0;
                    playDanmu(oldDanmuData);
                }
                else {
                    setTimeout(function () {
                        getBarrager();
                    }, 5000);
                }
            }
        }, function () {
            setTimeout(function () {
                getBarrager();
            }, 10000);
        });
    };

    var playDanmu = function (data) {
        var _i = 0;
        var timer = setInterval(function () {
            if (_i == data.length) {
                clearInterval(timer);
                getBarrager();
                return;
            }
            $('#danmu').barrager(data[_i++]);
        }, 1000);
    };
});