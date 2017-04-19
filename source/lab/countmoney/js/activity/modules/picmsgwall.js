define(function (require, exports, module) {
    var selfModuleName = 'picmsgwall';
    var moduleCommon = require('common');
    var moduleId = 100100;
    var moduleConfig;
    var messageJson = []; //消息列表
    var chatId = 0;
    var countNumber = 66;  //每次拉取条数
    var originaList = 0;
    var original = []; //原始数组 
    var messageShowTime = 4000; //显示速度
    var oneMessageTimer = 0;
    var $wallLi = $('#messagewall ul:eq(1) li');
    var threeEndLeft = 300;
    var messageFontSize1 = 70;
    var messageFontSize2 = 90;
    var messageBgStyle;
    var messageStyle = {
        'class': 'animate_default',     //默认:animate_default, 旋转：animate_rotate, 缩放:animate_scale
        'fontColor': '000',             //文字颜色
        'fontOpacity': 1,               //文字透明度
        'borderColor': 'cecece',        //背景边框
        'bgColor': 'fff',               //背景颜色
        'bgOpacity': 1                  //背景透明度
    };
    //转换RGBA
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    String.prototype.colorRgb = function () {
        var sColor = this.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return 'rgba(' + sColorChange.join(',') + ',' + messageStyle.bgOpacity + ')';
        } else {
            return sColor;
        }
    };
    exports.init = function () {
        getConfig();
        $('body').on('active', function (e, moduleName) {
            $wallLi.each(function (index, element) {
                if ($(this).css('display') == 'block') {
                    original[index] = index;
                }
            });
            original.sort(function () {
                return 0.5 - Math.random();
            });
            getMessages();
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#messagewall').show();
            } else {
                $('#messagewall').hide();
            }
        });
    };

    var getConfig = function () {
        $.extendGetJSON(moduleCommon.httpURL + $('#GetConfig').val(), {'moduleId': moduleId}, function (data) {
            if (data) {
                moduleConfig = data;
                if (moduleConfig.KXD_MessageWall_FontColor) {
                    messageStyle.class = moduleConfig.KXD_MessageWall_ShowWay;
                    messageStyle.fontColor = moduleConfig.KXD_MessageWall_FontColor;
                    messageStyle.fontOpacity = moduleConfig.KXD_MessageWall_FontOpacity;
                    messageStyle.borderColor = moduleConfig.KXD_MessageWall_BorderColor;
                    messageStyle.bgColor = moduleConfig.KXD_MessageWall_BackgroudColor;
                    messageStyle.bgOpacity = moduleConfig.KXD_MessageWall_BackgroudOpacity;
                    messageStyle.bgColor = '#' + messageStyle.bgColor;
                    messageBgStyle = messageStyle.bgColor.colorRgb();
                }
            }
            setTimeout(function () {
                getConfig();
            }, 60000);
        }, function () {
            setTimeout(function () {
                getConfig();
            }, 60000);
        });
    };

    imgError = function (v) {
        $(v).attr('src', $('#config>#FileWebHost').val() + '/FansAvatar/noheader.jpg');
    };

    var getMessages = function () {
        messageJson = [];
        $.extendGetJSON(moduleCommon.httpURL + $('#GetChatMessages').val(), {
            'chatId': chatId,
            'count': countNumber,
            'isDemo': $('#IsDemo').val()
        }, function (data) {
            if (data.length > 0) {
                chatId = data[data.length - 1].Id;
                messageJson = data;
                if (moduleConfig && moduleConfig.KXD_MessageWall_IsFastDisplay == '1')
                    showThreeMessages(0);
                else
                    showOneMessages();
            }
            else {
                setTimeout(function () {
                    getMessages();
                }, 5000);
            }
        }, function () {
            setTimeout(function () {
                getMessages();
            }, 10000);
        });
    };

    var showOneMessages = function () {
        clearInterval(oneMessageTimer);
        var infoList = 0;
        var messageShowTime = 4000;
        if (moduleConfig && moduleConfig.KXD_MessageWall_DisplayDuration)
            messageShowTime = parseInt(moduleConfig.KXD_MessageWall_DisplayDuration);
        oneMessageTimer = setInterval(function () {
            if (originaList == original.length) {
                originaList = 0;
            }
            var box;
            if (infoList < messageJson.length) {
                var contentType = messageJson[infoList].Type;
                switch (contentType) {
                    case 1:
                        content = messageJson[infoList].Content;
                        break;
                    case 2:
                        content = '<img class="imgType" src="' + messageJson[infoList].Content + '" />';
                        break;
                    case 5:
                        content = $.parseJSON(messageJson[infoList].Content);
                        break;
                }
                var nickName = messageJson[infoList].FansNickName;
                var header = messageJson[infoList].FansHead;
                var $li = $wallLi.eq(original[originaList]);
                var _width = $li.width();
                var _height = $li.height();
                if (contentType == 5) {
                    $('body').append('<img src="' + content.faceUrl + '" class="myface"/><div class="myname">' + nickName + '</div>');
                    $('.myface').animate({
                        'width': '400px',
                        'height': '400px',
                        'margin-left': '-200px',
                        'top': '120px'
                    }, 'slow');
                    $('.myname').animate({
                        'width': '500px',
                        'margin-left': '-250px',
                        'top': '520px'
                    }, 'slow', function () {
                        var i = 0;
                        var iShake = setInterval(function () {
                            if (i % 2 == 0) $('html').css('margin-left', '10px');
                            else $('html').css('margin-left', '-10px');
                            if (++i >= 20) {
                                clearInterval(iShake);
                                $('html').removeAttr('style');
                            }
                        }, 30);
                    });
                    setTimeout(function () {
                        $('.myface').animate({'opacity': 0}, function () {
                            $(".myface").remove();
                        });
                        $('.myname').animate({'opacity': 0}, function () {
                            $(".myname").remove();
                        });
                        $li.html('<img onerror="imgError(this);" style="width:' + _width + 'px;' + 'height:' + _height + 'px;" src="' + header + '">');
                        originaList++;
                    }, messageShowTime - 1000);
                } else {

                    $('#userMessage').remove();
                    $('#messagewall ul').append('<div id="userMessage" class="' + messageStyle.class + '"><img class="userhead" src=' + header + ' onerror="imgError(this);"/><div class="username">' + nickName + '</div><div class="userMessage" style="border-color:#' + messageStyle.borderColor + ';background:' + messageBgStyle + '"><div class="userMessageContent" style="color:#' + messageStyle.fontColor + ';opacity:' + messageStyle.fontOpacity + '">' + content + '</div></div></div>');
                    if (content.length > 24) {
                        $('.userMessage').css({'font-size': messageFontSize1 + 'px'});
                    } else {
                        $('.userMessage').css({'font-size': messageFontSize2 + 'px'});
                    }
                    setTimeout(function () {
                        $('.username').remove();
                        $('.userhead').animate({
                            'left': $wallLi.eq(original[originaList]).position().left,
                            'top': $wallLi.eq(original[originaList]).position().top,
                            'width': _width,
                            'height': _height,
                            'margin-left': '0px',
                            'opacity': 0
                        }, function () {
                            $li.html('<img onerror="imgError(this);" style="width:' + _width + 'px;' + 'height:' + _height + 'px;" src="' + header + '">');
                            originaList++;
                            $('#userMessage').remove();
                        });
                    }, messageShowTime - 1000);
                }
                infoList++;
            } else {
                clearInterval(oneMessageTimer);
                getMessages();
            }
        }, messageShowTime);
    };

    // 显示多条消息
    var showThreeMessages = function (infoList) {
        $('#threeMessageBox').remove();
        $('#messagewall ul').append('<div id="threeMessageBox" class="' + messageStyle.class + '"></div>');
        if (originaList >= original.length) {
            originaList = 0;
        }
        if (infoList < messageJson.length) {
            addInfo(infoList, 0);
        }
        else {
            getMessages();
        }
    };

    var addInfo = function (infoList, times) {
        if (infoList < messageJson.length && times < 3) {
            var contentType = messageJson[infoList].Type;
            switch (contentType) {
                case 1:
                    content = messageJson[infoList].Content;
                    break;
                case 2:
                    content = '<img width="250" src="' + messageJson[infoList].Content + '" >';
                    break;
                case 5:
                    content = $.parseJSON(messageJson[infoList].Content).faceContent;
                    break;
            }

            var nickName = messageJson[infoList].FansNickName;
            var header = messageJson[infoList].FansHead;
            $('#threeMessageBox').append('<div class="threeUsers"><img onerror="imgError(this);" class="threeUser threeUser' + times + '" src="' + header + '" /><span class="threeUser threeUser' + times + '">' + nickName + '</span><div class="threeUser threeUser' + times + '" style="border-color:#' + messageStyle.borderColor + ';background:' + messageBgStyle + '"><div class="threeUserMessage" style="color:#' + messageStyle.fontColor + ';opacity:' + messageStyle.fontOpacity + '">' + content + '</div></div></div>');
            addInfo(infoList + 1, times + 1);
        }
        else {
            setTimeout(function () {
                for (i = 0; i < $('.threeUser').length / 3; i++) {
                    var $li = $wallLi.eq(original[originaList]);
                    var _width = $li.width();
                    var _height = $li.height();
                    var _left = $li.position().left;
                    var _top = $li.position().top;
                    $('#messagewall ul div.threeUser').animate({
                        'opacity': 0,
                        'left': threeEndLeft
                    });
                    $('img.threeUser' + i).animate({
                        'left': _left,
                        'top': _top,
                        'width': _width,
                        'height': _height,
                        'margin-left': '0px',
                        'opacity': 0
                    });
                    $('span.threeUser' + i).animate({
                        'left': _left,
                        'top': _top,
                        'width': _width,
                        'height': _height,
                        'margin-left': '0px',
                        'opacity': 0
                    });
                    $li.html('<img onerror="imgError(this);" class="showUserHead" style="width:' + _width + 'px;' + 'height:' + _height + 'px;" src="' + $('img.threeUser' + i).attr('src') + '">');
                    originaList++;
                }
            }, messageShowTime);

            setTimeout(function () {
                showThreeMessages(infoList);
            }, messageShowTime + 1000);
        }
    };
});