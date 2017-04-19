define(function (require, exports, module) {
    var moduleCommon = require('common');
    var fireWork = require('firework');
    var selfModuleName = 'lottery';
    var beginTimer; //开始抽奖
    var stopTimer; //停止抽奖
    var luckTimer;
    var scrollRange = 190;
    var luckState = true; //抽奖状态
    var isLuck = ""; //中奖号
    var luckNumber; //抽奖次数
    var luckNumberList = 1;
    var luckLevel; //等级ID
    var showLevel; //等级名称
    var autoLuck = false; //自动抽奖
    var selectNumber = 1; //保存上一次抽奖人的数量,
    var luckScrollTime = 30;
    var stopLuckTime; //强制停止抽奖
    var luckUl = $("#luck_user ul");
    var deleteLuckUser = '';

    exports.init = function () {
        $('body').on('active', function () {
            $('.showNumber a').click(function () {
                selectLotteryNumber($(this));
            });
            $('#beginLuck').click(function () {
                isAuto();
            });
            $('#stopLuck').click(function () {
                stopLuck();
            });
            $('#removeLottery').click(function () {
                removeLottery();
            });
            $('#submitLottery').click(function () {
                SubmitLotteryFans();
            });
            $('#luckUl').on('click', 'a', function () {
                deleteThis($(this), $(this).parent().data('level'));
            });
            getLotteryAward();
        });
        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#lottery').show();
                getLottery();
            } else {
                $('#lottery').hide();
            }
        });
    };

    //获取奖品信息和对应中奖用户
    var getLotteryAward = function () {
        $.extendGetJSON(moduleCommon.httpURL + $("#GetLotteryAward").val(), {}, function (data) {
            if (data.length > 0) {
                $('.prize').empty();
                $("#luckUl").empty();
                $(data).each(function (index, element) {
                    $('.prize').append('<a data-prizeid="' + element.Id + '" data-prizeimg="' + element.PrizeImg + '" data-prizename="' + element.Name + '" data-amount="' + element.Count + '"><div>' + element.Name + '</div> <span>剩<label>' + element.Count + '</label>名</span></a>');
                    if (element.Fans.length > 0) {
                        if ($("#luckUl").find("#level_" + element.Id).length < 1) {
                            $("#luckUl").append("<div id=level_" + element.Id + " class='level'><label>" + element.Name + ":<a></a></label><ul></ul></div>");
                        }
                        $(element.Fans).each(function (i, ele) {
                            $("#level_" + element.Id).find("ul").prepend('<li data-hasluck="1" data-level="' + element.Id + '"><span></span><img onerror="imgError(this);" src="' + ele.Head + '"><font>' + ele.NickName + '</font><i class="hasSubmit">已提交</i></li>');
                        });
                        var _length = $('#level_' + element.Id + ' li').length;
                        $('#level_' + element.Id + ' li').each(function (index, element) {
                            $(this).find("span").html(_length - $(this).index());
                        });
                        $('#level_' + element.Id + ' label a').text(_length);
                        $('#luckNumber').html($('#luckUl li').length);
                    }
                });
            }

            $('.prize a').click(function () {
                selectPrize($(this));
            });
        }, function () {
            moduleCommon.showInfo("加载失败,请重试!");
            moduleCommon.loaded();
        });
    };

    //获取用户
    var getLottery = function () {
        moduleCommon.loading('数据加载中,请稍后');
        luckUl.html('');
        isLuck = '';
        $.extendGetJSON(moduleCommon.httpURL + $("#GetLotteryFans").val(), {'isGetAll': 'False'}, function (data) {
            if (data.length > 0) {
                if (data.length > 50) {
                    luckScrollTime = 1;
                }
                $("#luck .active_num span").html(data.length);
                $(data).each(function (index, element) {
                    if ($("#lottery [data-isluck=" + element.Id + "]").size() == 0) {
                        var str = '<li data-headpath="' + element.HeadPath + '" data-userid="' + element.Id + '"><img src="' + element.Head + '"><br><span>' + element.NickName + '</span></li>';
                        luckUl.append(str);
                    }
                });
                luckUserList();
            }
            moduleCommon.loaded();
        }, function () {
            luckUl.html("");
            moduleCommon.showInfo("加载失败,请重试!");
            moduleCommon.loaded();
        });
    }
    ///////////////////////////////////////////////////////////////////////////////抽奖
    //复制用户列表(滚动)
    var luckUserList = function () {
        luckUl.css("width", $("#luck_user").find("li").length * 190 * 2);
        luckUl.append(luckUl.html());
    }
    //移除重复标签，用于增加新的用户
    var removeUserList = function () {
        luckUl.find("li").each(function (index, element) {
            if ($(this).index() + 1 > luckUl.find("li").length / 2) {
                $(this).remove();
            }
        });
    }

    var isAuto = function () {
        $('#showPrize').hide();  //2015-03-27
        if ($("#showNumber").find("a").text() > 1) {
            autoLuck = true;
            luckNumberList = $("#showNumber").find("a").text();
            selectNumber = $("#showNumber").find("a").text();
        } else {
            autoLuck = false;
            selectNumber = 1;
            luckNumberList = 1;
        }
        luckLevel = $("#showLevel").find("a").attr("data-prizeid");
        levelMaxNum = $("#showLevel").find("a").attr("data-amount") * 1;
        luckNumber = $("#showNumber").find("a").text() * 1;
        showLevel = $("#showLevel").find("a").html();
        if (isLuck != "") {
            luckUl.find('li[data-userid=' + isLuck + ']').remove();
            luckUl.width(luckUl.width() - 380); //移除已中奖人后重新设置宽度
            isLuck = "";
        }
        //判断是否有需要回到奖池的用户
        if (deleteLuckUser != '') {
            removeUserList();
            luckUl.append(deleteLuckUser);
            luckUserList();
            deleteLuckUser = '';
        }
        if ($('#luck_user li').length < 0) {
            moduleCommon.showInfo('当前还没有人参加活动');
            return false;
        }
        if ($("#luck_user li").length == 2) {
            $("#luck_user ul li:last").remove();
            luckUl.width(190);
            luckUl.css("left", "170px");
        }
        if (luckLevel == 0) {
            moduleCommon.showInfo("请选择抽奖等级");
            return false;
        }
        $('#test').val(luckNumberList);
        if (luckNumberList * 1 > levelMaxNum) {
            moduleCommon.showInfo("亲，奖品没那么多!");
            return false;
        }

        if (isLuck != "" && luckNumber > Math.max(1, $("#luck_user li").length / 2 - 1)) {
            moduleCommon.showInfo("抽奖人数不够!");
            return false;
        } else if (luckNumber > Math.max(1, $("#luck_user li").length / 2)) {
            moduleCommon.showInfo("抽奖人数不够!");
            return false;
        }
        beginLuck();
        $('#lottery .condition').addClass('disabled');
    }
    var beginLuck = function () {  //key 0:只抽一个人奖 1:自动抽奖
        stopLuckTime = 0;
        if (autoLuck == true) {
            $("#luckIng").show();
            $("#luckIng span").text(luckNumberList);
            setTimeout(function () {
                stopLuck(luckNumberList);
            }, 3000);
        }
        if (luckState) {
            $("#stopLuck").show();
            $("#beginLuck").hide();
            if (isLuck != '') {
                luckUl.find('li[data-userid=' + isLuck + ']').remove();
                luckUl.width(luckUl.width() - 380); //移除已中奖人后重新设置宽度
            }
            //判断奖池是否已经没人了
            if ($("#luck_user li").length == 0) {
                moduleCommon.showInfo("已经没有人了!");
                $("#stopLuck").hide();
                $("#beginLuck").show();
                return false;
            }

            if ($("#luck_user li").length == 1) {
                luckUl.width(190);
                luckUl.css("left", "170px");
            }
            if ($("#luck_user li").length == 2) {
                $("#luck_user li:last").remove();
                luckUl.width(190);
                luckUl.css("left", "170px");
            }
            if ($("#luck_user li").length > 2) {
                beginTimer = setInterval(function () {

                    luckUl.css({left: -scrollRange});
                    scrollRange = scrollRange + 60;
                    if (scrollRange > luckUl.width() / 2 + 45) {
                        luckUl.css("left", -20);
                        scrollRange = 190;
                    }
                    stopLuckTime = stopLuckTime + 50;
                    if (autoLuck == true && stopLuckTime > 150000) {
                        clearInterval(beginTimer);
                        stopLuck(luckNumberList);
                    }
                }, luckScrollTime);
            }
        } else {
            moduleCommon.showInfo("抽奖进行中...");
        }

    }

    //停止抽奖
    var stopLuck = function () {
        clearInterval(beginTimer);
        clearInterval(stopTimer);
        luckState = false;
        $("[data-prizeid=" + luckLevel + "]").find("label").html($("[data-prizeid=" + luckLevel + "]").find("label").html() * 1 - 1);
        // 邓辉 2016-06-17 22:39
        $("[data-prizeid=" + luckLevel + "]").attr('data-amount', $("[data-prizeid=" + luckLevel + "]").find("label").html() * 1);
        // 邓辉 2016-06-17 22:39
        $("#beginLuck").show();
        $("#stopLuck").hide();
        var i = 10; //速度递减
        var j = 2; //时间控制
        if ($("#luck_user li").length > 1) {
            stopTimer = setInterval(function () {
                luckUl.css({left: -scrollRange});
                scrollRange = scrollRange + i;
                j++;
                if (j % 2 == 0) {
                    i--;
                }
                if (scrollRange >= parseInt(luckUl.width() / 2) + 45) {
                    luckUl.css("left", -20);
                    scrollRange = 20;
                }
                if (i <= 1) {
                    clearInterval(stopTimer);
                    var stopRange = Math.ceil(scrollRange / 190) * 190 + 20;
                    luckTimer = setInterval(function () {
                        scrollRange = scrollRange + 1;
                        luckUl.css({left: -scrollRange});
                        if (scrollRange >= parseInt(luckUl.width() / 2) + 45) {
                            luckUl.css("left", -20);
                            scrollRange = 20;
                            stopRange = stopRange - luckUl.width() / 2;
                        }

                        if (scrollRange == stopRange) {
                            clearInterval(luckTimer);
                            luckState = true;
                            $("#submitLottery").removeClass("gray");
                            $("#removeLottery").removeClass("gray");
                            /////////////中奖
                            var luckLi = $('#luck_user li:eq(' + Math.ceil(scrollRange / 190) + ')');
                            isLuck = luckLi.data("userid"); //获取中奖data,也就是中奖人的ID啦
                            var imgUl = luckLi.find("img").attr("src");
                            var userName = luckLi.find("span").html();
                            var headPath = luckLi.data("headpath");
                            if ($("#luckUl").find("#level_" + luckLevel).length < 1) {
                                $("#luckUl").prepend("<div id=level_" + luckLevel + " class='level'><label>" + showLevel + ":<a></a></label><ul></ul></div>");
                            }
                            $("#level_" + luckLevel).find("ul").prepend('<li data-hasluck="0" data-headpath="' + headPath + '" data-isluck="' + isLuck + '" data-level="' + luckLevel + '"><span></span><a href="javascript:void(0)">x</a><img src="' + imgUl + '"><font>' + userName + '</font></li>');

                            $("#level_" + luckLevel + " li").each(function (index, element) {
                                $(this).find("span").html($("#level_" + luckLevel + " li").length - $(this).index());
                            });
                            $("#level_" + luckLevel + " label a").text($("#level_" + luckLevel + " li").length);
                            $("#luckNumber").html($("#luckUl li").length);
                            if (luckNumberList > 1) {
                                luckNumberList--;
                                setTimeout(function () {
                                    beginLuck();
                                }, 0);  //重新抽奖
                            } else {
                                $("#luck_number").val(selectNumber); //重新赋值给抽奖人数
                                $("#luckIng").css("display", "none");
                                $('#lottery .condition').removeClass('disabled');
                            }
                            showLuckAnimate(imgUl, showLevel, userName);
                        }
                    }, 10);
                }
            }, 30);
        } else {
            setTimeout(function () {
                luckState = true;
                $('#lottery .condition').removeClass('disabled');
                $("#submitLottery").removeClass("gray");
                $("#removeLottery").removeClass("gray");
                isLuck = $("#luck_user li").data("userid");
                var imgUl = $("#luck_user li").find("img").attr("src");
                var userName = $("#luck_user li").find("span").html();
                var headPath = $("#luck_user li").data("headpath");
                if ($("#luckUl").find("#level_" + luckLevel).length < 1) {
                    $("#luckUl").prepend("<div id=level_" + luckLevel + " class='level'><label>" + showLevel + ":<a></a></label><ul></ul></div>");
                }
                $("#level_" + luckLevel).find("ul").prepend('<li data-hasluck="0" data-headpath="' + headPath + '" data-isluck="' + isLuck + '" data-level="' + luckLevel + '"><span></span><a href="javascript:void(0)">x</a><img src="' + imgUl + '"><font>' + userName + '</font></li>');

                $("#level_" + luckLevel + " li").each(function (index, element) {
                    $(this).find("span").html($("#level_" + luckLevel + " li").length - $(this).index());
                });
                $("#level_" + luckLevel + " label a").text($("#level_" + luckLevel + " li").length);
                $("#luckNumber").html($("#luckUl li").length);
                $("#luck_number").val(selectNumber); //重新赋值给抽奖人数
                $("#luckIng").css("display", "none");
                showLuckAnimate(imgUl, showLevel, userName);
            }, 1000);
        }
    }
    //删除中奖
    var deleteThis = function (v, luckLevel) {
        var li = v.parent();
        if (li.data("hasluck") != 1) {
            deleteLuckUser = deleteLuckUser + '<li data-userid="' + li.attr("data-isluck") + '"><img src="' + li.find("img").attr("src") + '"><br><span>' + li.find("font").html() + '</span></li>';
            $("[data-prizeid=" + luckLevel + "]").find("label").html($("[data-prizeid=" + luckLevel + "]").find("label").html() * 1 + 1);
            // 邓辉 2016-06-17 22:39
            $("[data-prizeid=" + luckLevel + "]").attr('data-amount', $("[data-prizeid=" + luckLevel + "]").find("label").html() * 1);
            // 邓辉 2016-06-17 22:39
            //添加到需要回到奖池的数组
            _parents = $(v).parents(".level");
            li.remove();
            _parents.find("li").each(function (index, element) {  //前面数字排序
                $(element).find("span").html(_parents.find("li").size() - $(element).index());
            });
            if (_parents.find("li").length == 0) { //如果本奖项下没人就清除标题
                _parents.remove();
            }
            _parents.find("label a").text(_parents.find("li").length); //更新人数
            $("#luckNumber").html($("#luckUl li").length);
        }
    }

    //重新抽奖
    var removeLottery = function () {
        if (!$("#removeLottery").hasClass("gray")) {
            $("#removeLottery").addClass("gray");
            $("#submitLottery").addClass("gray");
            $("#luckUl li").each(function (index, element) {
                if ($(element).data("hasluck") != 1) {
                    deleteLuckUser = deleteLuckUser + '<li data-userid="' + $(element).attr("data-isluck") + '"><img src="' + $(element).find("img").attr("src") + '"><br><span>' + $(element).find("font").html() + '</span></li>';
                    $("[data-prizeid=" + $(element).data("level") + "]").find("label").html($("[data-prizeid=" + $(element).data("level") + "]").find("label").html() * 1 + 1);
                    // 邓辉 2016-06-17 22:39
                    $("[data-prizeid=" + $(element).data("level") + "]").attr('data-amount', $("[data-prizeid=" + $(element).data("level") + "]").find("label").html() * 1);
                    // 邓辉 2016-06-17 22:39
                    //添加到需要回到奖池的数组
                    var _parents = $(element).parents(".level");
                    $(element).remove();
                    _parents.find("li").each(function (i, ele) {  //前面数字排序
                        $(ele).find("span").html(_parents.find("li").size() - $(ele).index());
                    });
                    if (_parents.find("li").length == 0) { //如果本奖项下没人就清除标题
                        _parents.remove();
                    }
                    _parents.find("label a").text(_parents.find("li").length); //更新人数
                    $("#luckNumber").html($("#luckUl li").length);
                }
            });
        }
    }

    //显示抽奖动画
    var showLuckAnimate = function (imgUl, showLevel, userName) {
        fireWork.show();
        $('body').append('<div class="animate-bg"><div class="light"></div><img class="luckbg" src="' + $('#config>#FileWebHost').val() + '/ScreenTheme/default/images/luckbg.png" /><img src="' + imgUl + '" class="luckUserHead" /><div class="showLuckUserName">' + userName + '</div><div class="showLuckLevel">恭喜获得<span>' + showLevel + '</span></div></div>');
        $(".luckbg").animate({
            "width": "800px",
            "height": "518px",
            "margin-top": "-330px",
            "margin-left": "-400px",
            "opacity": "1"
        }, "fast");
        $(".luckUserHead").animate({"margin-top": "-275px"});
        $(".showLuckLevel").animate({"margin-top": "40px"});
        $(".showLuckUserName").animate({"opacity": "1"});
        setTimeout(function () {
            fireWork.hide();
            $(".animate-bg").animate({"opacity": "0"}, "slow", function () {
                $(".animate-bg").remove();
            });
            $("#bgsound").remove();
        }, 3000);
    }
    //提交中奖名单
    var SubmitLotteryFans = function (v) {
        var submitCount = $("#luckUl li[data-hasluck!=1]").size();
        if (!$("#removeLottery").hasClass("gray") && submitCount > 0) {
            moduleCommon.loading("正在提交，请稍后");
            var submitForm = $('<form/>');
            $("#luckUl li[data-hasluck!=1]").each(function (index, element) {
                submitForm.append('<input name="[' + index + '].AwardId" type="hidden" value="' + $(element).data('level') + '" />');
                submitForm.append('<input name="[' + index + '].FansId" type="hidden" value="' + $(element).data('isluck') + '" />');
                submitForm.append('<input name="[' + index + '].FansNickName" type="hidden" value="' + $(element).find('font').text() + '" />');
                submitForm.append('<input name="[' + index + '].FansHead" type="hidden" value="' + $(element).data('headpath') + '" />');
            });

            $.extendPost(moduleCommon.httpURL + $("#SubmitLotteryFans").val(), submitForm.serializeArray(), "json", function (data) {
                moduleCommon.loaded();
                if (data.ResultType == 1) {
                    moduleCommon.showInfo("提交成功", 1);
                    $("#removeLottery").addClass("gray");
                    $("#submitLottery").addClass("gray");
                    $("#luckUl li[data-hasluck!=1]").attr('data-hasluck', 1).append('<i class="hasSubmit">已提交</i>').find('a').remove();
                } else {
                    moduleCommon.showInfo(data.Message);
                }
            });
        }
    }
    //模拟select效果
    var selectPrize = function (v) {
        $('#showPrize').hide();
        $(v).parent().prev().find("a").html($(v).find("div").html());
        $(v).parent().prev().find("a").attr({
            "data-prizeid": $(v).data("prizeid"),
            "data-amount": $(v).data("amount")
        });
        $(v).parent().siblings(".select_option").find(".newNumber").remove();
        var _num = $(v).find("label").html();
        $(v).parent().next(".select").find("a").attr("data-number", _num).html(_num);
        if (_num > 5) {
            $(v).parent().siblings(".select_option").append('<a class="newNumber"><div>' + _num + '</div></a>');
            $(".newNumber").click(function () {
                $(v).parent().prev(".select").find("a").html($(v).html());
            })
        }
        $(v).parent().siblings(".select_option").find("a").each(function (index, element) {
            if ($(this).data("number") > _num) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        if ($('#showPrize').css('display') == 'block') {
            showPrize();
        }
    }
    var selectLotteryNumber = function (v) {
        $(v).parent().prev().find("a").html($(v).find("div").html());
        $(v).parent().prev().find("a").attr({"data-number": $(v).data("number")});
    }

});