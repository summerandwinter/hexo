define(function (require, exports, module) {
    var selfModuleName = 'grabbonus';
    var moduleCommon = require('common');
    var fireWork = require('firework');
    var moduleId = $('[data-modulename=' + selfModuleName + ']').data('moduleid');
    var scrollIndex = 0;
    var showBonusTimer, downRedBagTimer, downRedBagTimer_1;
    var getWinnerArray;
    var nowModuleShow = false;
    var prizeCountArray = [];
    var lastRecordId = 0;
    var getBounusState = false; //是否正在获取红包信息
    var showAnimate = true;
    var moduleWidth = 980;
    exports.init = function () {
        $('body').on('active', function () {
            getBonusBatchs();
            $('#weixinredbag .arrow_left').on('click', function () {
                scrollIndex = Math.max(0, scrollIndex - 1);
                $('#weixinredbag #weixinBagList .scrollList').stop().animate({'margin-left': Math.min(0, -moduleWidth * scrollIndex)});
            });
            $('#weixinredbag .arrow_right').on('click', function () {
                scrollIndex = Math.min($('#weixinredbag #weixinBagList .scrollList div').length - 1, scrollIndex + 1);
                $('#weixinredbag #weixinBagList .scrollList').stop().animate({'margin-left': Math.max(-($('#weixinredbag #weixinBagList .scrollList div').length - 1) * moduleWidth, -moduleWidth * scrollIndex)});
            });
            $('body').on('click', '.endBonusAnimate', function () {
                $(this).remove();
                showAnimate = false;
                clearInterval(showBonusTimer);
            });
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#weixinredbag').show();
                downRedBag();
                downRedBag_1();
                nowModuleShow = true;
            } else {
                $('#weixinredbag').hide();
                nowModuleShow = false;
                stopRedBag();
                stopRedBag_1();
            }
        });
    };
    //掉红包
    var downRedBag_1 = function () {
        clearInterval(downRedBagTimer_1);
        downRedBagTimer_1 = setInterval(function () {
            var _left = Math.random() * $(window).width() + 200;
            var _zoom = Math.max(0.5, Math.random() * 1);
            var _class = Math.max(1, parseInt(Math.random() * 3 + 1));
            $('body').prepend('<div style="left:' + _left + 'px;zoom:' + _zoom + '" class="downAnimate downAnimate_' + _class + '" /></div>');
            $('.downAnimate').each(function (index, element) {
                $(this).bind("webkitAnimationEnd", function () { //动画结束时事件
                    $(this).remove();
                });
            });
        }, 600);
    };

    //停止掉红包
    var stopRedBag_1 = function () {
        clearInterval(downRedBagTimer_1);
        $('.downAnimate').remove();
    };

    //飞红包
    var downRedBag = function () {
        clearInterval(downRedBagTimer);
        downRedBagTimer = setInterval(function () {
            var _left;
            var _top = Math.random() * 600;
            if (_top < 160) {
                _top = -160;
                _left = 'left:' + Math.random() * 100 + '%';
            } else {
                Math.random() > 0.5 ? _left = 'left:-10%' : _left = 'left:110%';
            }
            var _class = Math.max(1, parseInt(Math.random() * 3 + 1));
            $('#weixinredbag').prepend('<div style="' + _left + ';top:' + _top + 'px" class="downAnimate1 downAnimate1_' + _class + '"/></div>');
            $('.downAnimate1').each(function (index, element) {
                $(this).bind("webkitAnimationEnd", function () { //动画结束时事件
                    $(this).remove();
                });
            });
        }, 600);
    };

    //停止飞红包
    var stopRedBag = function () {
        clearInterval(downRedBagTimer);
        $('.downAnimate1').remove();
    };

    //获取红包批次
    var getBonusBatchs = function () {
        $.extendGetJSON(moduleCommon.httpURL + $('#GetBonusBatchs').val(), {'batchType': 1}, function (data) {
            if (data.length > 0) {
                $('#weixinredbag #weixinBagList .scrollList').css('width', data.length * moduleWidth + 'px');
                $(data).each(function (index, element) {
                    var winner = '';
                    var readyButton = '';
                    var isover = 0;
                    if (element.Winners && element.Winners.length > 0) {
                        $(element.Winners).each(function (i, ele) {
                            var prizeName;
                            if (ele.Type == 3) {
                                prizeName = ele.Prize;
                            } else {
                                prizeName = ele.Money + '元现金红包';
                            }
                            winner += '<li><img src="' + ele.Head + '"><span>' + ele.NickName + '</span>' + prizeName + '</li>';
                        });
                    }
                    if (element.State == 1) {
                        readyButton = '<a href="javascript:void(0);" class="startTime" data-id="' + element.Id + '">计时开始</a>';
                    } else {
                        isover = 1;
                    }

                    var count = 0;
                    for (var i = 0; i < element.Items.length; i++) {
                        count += element.Items[i].Count;
                    }
                    prizeCountArray.push({'batchId': element.Id, 'count': count});
                    $('#weixinredbag #weixinBagList .scrollList').append('<div data-isover="' + isover + '" data-batchid="' + element.Id + '"><h1>' + element.ActivityName + '</h1><span class="getNumber"></span><ul>' + winner + '</ul>' + readyButton + '</div>');
                });

                $('#weixinredbag #weixinBagList a.startTime').on('click', function () {
                    if (!$(this).hasClass('pushed')) {
                        getBounusState = true;
                        $(this).parent().attr('data-isover', 0);
                        $('#weixinredbag #weixinBagList a.startTime').hide();
                        $(this).show().addClass('pushed').text('结束发放');
                        pushBonus($(this).data('id')); //开始推送
                    } else {
                        getBounusState = false;
                        $(this).parent().attr('data-isover', 1);
                        $('#weixinredbag #weixinBagList a.startTime').show();
                        $(this).remove();
                        finishBonusBatch($(this).data('id'));
                    }
                });
            }
        });
    };

    var getBonusCount = function (batchId) {
        $.extendPost(moduleCommon.httpURL + $('#GetBonusCount').val(), {'batchId': batchId}, 'json', function (data) {
            $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + '] span.getNumber').data('count', data.TotalCount).html('已发 ' + data.ReceiveCount + ' 个红包');
            setTimeout(function () {
                if (getBounusState) {
                    getBonusCount(batchId);
                }
            }, 2000);
        });
    }

    var pushBonus = function (batchId) {
        moduleCommon.loading('数据正在准备中，请稍后');
        getBonusCount(batchId);
        $.extendPost(moduleCommon.httpURL + $('#PushBonus').val(), {
            'batchId': batchId,
            'moduleId': $('#weixinredbag').data('moduleid')
        }, 'json', function (msg) {
            moduleCommon.loaded();
            showAnimate = true;
            if (msg.ResultType == 1) {
                var startShakeTimer;
                var i = 4;
                var shakeTimes = $('#weixinredbag #weixinRedBagTimer');
                shakeTimes.show().text(5).animate({'opacity': 0}, 'slow');
                startShakeTimer = setInterval(function () {
                    if (i > 0) {
                        shakeTimes.text(i);
                        shakeTimes.css('opacity', 1);
                        shakeTimes.animate({'opacity': 0}, 'slow');
                    }
                    else {
                        clearInterval(startShakeTimer);
                        shakeTimes.text('GO');
                        shakeTimes.css('opacity', 1);
                        shakeTimes.animate({'opacity': 0}, 1000, function () {
                            getBonusWinner(batchId);
                            shakeTimes.hide();
                        });
                    }
                    i--;
                }, 1000);
            } else {
                moduleCommon.showInfo(msg.Message);
            }
        }, function () {
            moduleCommon.loaded();
            moduleCommon.showInfo('网络繁忙，请稍后重试');
        });
    };

    var finishBonusBatch = function (batchId) {
        $.extendGetJSON(moduleCommon.httpURL + $('#FinishBonusBatch').val(), {'batchId': batchId}, function (data) {
        });
    };

    var getBonusWinner = function (batchId) {

        var prizeCount; //红包数量，大于一定数量就用快速显示
        for (var j = 0; j < prizeCountArray.length; j++) {
            if (prizeCountArray[j].batchId == batchId) {
                prizeCount = prizeCountArray[j].count;
                break;
            }
        }
        $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + '] ul li:gt(99)').remove();
        getWinnerArray = []; //清空队列
        $.extendGetJSON(moduleCommon.httpURL + $('#GetBonusWinners').val(), {
            'batchId': batchId,
            'count': 100,
            'recordId': lastRecordId
        }, function (data) {
            if (data.IsOver) {
                $('#weixinredbag div[data-batchid=' + batchId + ']').data('isover', 1);
                getBounusState = false;
            }
            if (data.Winners.length > 0) {
                var dataLength = data.Winners.length;
                $(data.Winners).each(function (index, element) {
                    if (!showAnimate) {
                        $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + '] ul').prepend('<li><img src="' + element.NickName + '"><span>' + element.NickName + '</span>' + element.Prize + '</li>');
                        if (index == dataLength - 1) {
                            setTimeout(function () {
                                getBonusWinner(element.RecordId);
                            }, 5000);
                        }
                    } else {
                        getWinnerArray.push({
                            'NickName': element.NickName,
                            'Head': element.Head,
                            'Type': element.Type,
                            'Money': element.Money,
                            'Prize': element.Prize,
                            'RecordId': element.RecordId
                        });
                        if (index == dataLength - 1) {
                            prizeCount < 100 ? showBonusWinner(batchId) : showBonusWinners(batchId);
                        }
                    }
                });
            } else if ($('#weixinredbag div[data-batchid=' + batchId + ']').data('isover') == 0) {
                setTimeout(function () {
                    getBonusWinner(batchId);
                }, 5000);
            }
        }, function () {
            if ($('#weixinredbag div[data-batchid=' + batchId + ']').data('isover') == 0) {
                setTimeout(function () {
                    getBonusWinner(batchId);
                }, 10000);
            }
        });
    };

    //显示单条
    var showBonusWinner = function (batchId) {
        var winnerList = 0;
        clearInterval(showBonusTimer);
        showBonusTimer = setInterval(function () {
            if (winnerList < getWinnerArray.length) {
                var head = getWinnerArray[winnerList].Head;
                var type = getWinnerArray[winnerList].Type;
                var nickName = getWinnerArray[winnerList].NickName;
                var money = getWinnerArray[winnerList].Money;
                var prize = getWinnerArray[winnerList].Prize;
                var prizeName;
                if (type == 3) {
                    prizeName = prize;
                } else {
                    prizeName = money + '元现金红包';
                }
                if (nowModuleShow && $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + ']').index() == scrollIndex) {
                    showLuckAnimate(head, prizeName, nickName);
                }
                $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + '] ul').prepend('<li><img src="' + head + '"><span>' + nickName + '</span>' + prizeName + '</li>');
                winnerList++;
            } else {
                if ($('#weixinredbag div[data-batchid=' + batchId + ']').data('isover') == 0) {
                    lastRecordId = getWinnerArray[winnerList - 1].RecordId;
                    getBonusWinner(batchId);
                    clearInterval(showBonusTimer);
                }
            }
        }, 3000);
    }

    //显示多条
    var showBonusWinners = function (batchId) {

        var winnerList = 0;
        var showWinnerNumber = 5;
        clearInterval(showBonusTimer);
        showBonusTimer = setInterval(function () {
            var winnerStr = '';
            if (winnerList < getWinnerArray.length) {
                for (var i = 1; i <= showWinnerNumber; i++) {
                    var head = getWinnerArray[winnerList].Head;
                    var type = getWinnerArray[winnerList].Type;
                    var nickName = getWinnerArray[winnerList].NickName;
                    var money = getWinnerArray[winnerList].Money;
                    var prize = getWinnerArray[winnerList].Prize;
                    var prizeName;
                    if (type == 3) {
                        prizeName = prize;
                    } else {
                        prizeName = money + '元现金红包';
                    }
                    winnerStr += '<li><img src="' + head + '"><span>' + nickName + '</span>' + prizeName + '</li>';
                    winnerList++;
                    if (winnerList == getWinnerArray.length) {
                        break;
                    }
                }
                $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + '] ul').prepend(winnerStr);
                if (nowModuleShow && $('#weixinredbag #weixinBagList div[data-batchid=' + batchId + ']').index() == scrollIndex) {
                    showLuckAnimates(winnerStr);
                }
            } else {
                if ($('#weixinredbag div[data-batchid=' + batchId + ']').data('isover') == 0) {
                    lastRecordId = getWinnerArray[winnerList - 1].RecordId;
                    getBonusWinner(batchId);
                    clearInterval(showBonusTimer);
                }
            }
        }, 3500);
    }

    //显示动画
    var showLuckAnimate = function (head, prizeName, userName, batchId) {
        fireWork.show();
        $('body').append('<div class="animate-bg"><div class="light"></div><img class="luckbg" src="' + $('#config>#FileWebHost').val() + '/ScreenTheme/default/images/luckbg.png" /><img src="' + head + '" class="luckUserHead"><span class="luckUserName">' + userName + '</span><div class="showLuckLevel"><span>' + prizeName + '</span></div><a class="btn endBonusAnimate">关闭动画</a></div>');
        $('.luckbg').animate({
            'width': '800px',
            'height': '518px',
            'margin-top': '-330px',
            'margin-left': '-400px',
            'opacity': '1'
        }, 'fast');
        $('.luckUserHead').animate({'margin-top': '-275px'});
        $('.luckUserName').animate({'margin-top': '-35px'});
        $('.showLuckLevel').animate({'margin-top': '40px'});
        setTimeout(function () {
            $('.animate-bg').animate({'opacity': '0'}, 'slow', function () {
                $(this).remove();
            });
            fireWork.hide();
        }, 2000);
    }

    //显示多条动画
    var showLuckAnimates = function (winnerStr) {
        fireWork.show();
        $('body').append('<div class="animate-bg"><div class="light"></div><ul class="showWinners">' + winnerStr + '</ul><a class="btn endBonusAnimate">关闭动画</a></div>');
        $('.showWinners').animate({'top': '300px'});
        setTimeout(function () {
            $('.animate-bg').animate({'opacity': '0'}, 'slow', function () {
                $(this).remove();
            });
            fireWork.hide();
        }, 2000);
    }
});