define(function (require, exports, module) {
    var selfModuleName = 'program';
    var moduleCommon = require('common');
    var isGetStatistics = false;
    var leftSpace = 0;
    var moduleWidth = 980;
    var programeLi = 150;
    var canRated = 0;
    var liHeight = 330;
    exports.init = function () {
        $('body').on('active', function () {
            $('#program #programList').on('click', 'li a.itemName', function () {
                showProgram(this);
            });

            $('#program #programDetail a.closeBtn').on('click', function () {
                $('#program #programDetail').hide();
                $('#program #programListBox').show();
            });
            $('#program #programScoreBox a.closeBtn').on('click', function () {
                isGetStatistics = false;
                $('#program #programScoreBox').hide();
                $('#program #programListBox').show();
            });

            $('#program #showProgramScore').on('click', function () {
                showProgramScore();
            });
            $('#program .pushProgram').on('click', function () {
                pushProgram();
            });
            $('#program .endProgram').on('click', function () {
                closeProgram();
            });
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#program').show();
                getScreenProgram();
            } else {
                $('#program').hide();
            }
        });
    };

    // 获取大屏幕节目
    var getScreenProgram = function () {
        moduleCommon.loading('数据正在准备中，请稍后');
        $.extendGetJSON(moduleCommon.httpURL + $('#GetProgram').val(), {}, function (data) {
            moduleCommon.loaded();
            $('#program #programList').empty();
            if (data && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].CanRated) {
                        canRated++;
                    }
                }
                var li = '';
                var scoreLi = '';
                leftSpace = Math.max(0, (moduleWidth - programeLi * canRated) / 2);
                $('#programScore').width(Math.max(moduleWidth, canRated * programeLi));
                var _i = 0;
                $.each(data, function (i, e) {
                    li += '<li><span class="order">' + (i + 1) + '</span>';
                    li += '<a href="javascript:void(0);" class="itemName" data-id="' + e.Id + '" data-mediapath="' + e.MediaPath + '" data-desc="' + e.Summary + '" data-isvideo="' + e.IsVideo + '">' + e.Name + '</a>';
                    li += '<span class="programGourp">' + e.Actor + '</span></li>';
                    if (e.CanRated) {
                        if ($('#program [data-programid="' + e.Id + '"]').size() == 0) {
                            var _left = _i++ * programeLi + leftSpace;
                            scoreLi += '<li data-programid="' + e.Id + '" data-useexpertscore="' + e.UseExpertScore + '" style="left:' + _left + 'px;"><span>' + e.Name + '</span>';
                            if (e.UseExpertScore) {
                                scoreLi += '<div class="all"><div style="height:0;"></div><span style="bottom:10px;">0</span></div>';
                            } else {
                                scoreLi += '<div class="all onediv"><div style="height:0;"></div><span style="bottom:10px;">0</span></div>';
                            }
                            if (e.UseExpertScore)
                                scoreLi += '<div class="pro"><div style="height:0;"></div><span style="bottom:10px;">0</span></div>';
                            scoreLi += '<div class="allScore" style="bottom:50px;">0</div></li>';
                        }
                        else {
                            if (e.UseExpertScore) {
                                if ($('#program [data-programid="' + e.Id + '"]>.pro').size() == 0)
                                    $('#program [data-programid="' + e.Id + '"]').append('<div class="pro"><div style="height:0;"></div><span style="bottom:10px;">0</span></div>');
                            }
                            else
                                $('#program [data-programid="' + e.Id + '"]>.pro').remove();

                        }
                    }
                    else {
                        $('#program [data-programid="' + e.Id + '"]').remove();
                    }
                });

                $('#program #programList').append(li);
                $('#program #programScore').append(scoreLi);
            }
        }, function () {
            moduleCommon.loaded();
            moduleCommon.showInfo('网络繁忙，请稍后重试');
        });
    };

    //显示节目详情
    var showProgram = function (v) {
        $('#program #programListBox').hide();
        $('#program #programName').text($(v).text());
        if ($(v).data('isvideo') == 'true') {
            $('#program #programImg').html('<video src="' + $(v).data("mediapath") + '" style="width:400px;" controls></video>');
        }
        else {
            $('#program #programImg').html('<img src="' + $(v).data("mediapath") + '" alt="" />');
        }
        $('#program #programMsg').html($(v).data('desc'));
        $('#program #programDetail').show();
    };

    //显示节目分数页面
    var showProgramScore = function () {
        $('#program #programListBox').hide();
        $('#program #programScoreBox').show();
        isGetStatistics = true;
        getProgramStatistics();
    };

    //开始打分
    var pushProgram = function () {
        moduleCommon.loading('数据正在准备中，请稍后');
        $.extendPost(moduleCommon.httpURL + $('#PushProgram').val(), {}, 'text', function (data) {
            $('#programScoreBox .pushProgram').hide();
            $('#programScoreBox .endProgram').show();
            moduleCommon.loaded();
            if (data != "") {
                moduleCommon.showInfo(data);
                return false;
            } else {
                moduleCommon.showInfo('已推送', 1);
                showProgramScore();
            }
        }, function () {
            moduleCommon.loaded();
            moduleCommon.showInfo('网络繁忙，请稍后重试');
        });
    };

    //更新打分结果
    var getProgramStatistics = function () {
        if (!isGetStatistics)
            return;
        $.extendGetJSON(moduleCommon.httpURL + $('#GetProgramStatistics').val(), {}, function (data) {
            if (data.length > 0) {
                canRated = 0;
                var maxNum = 0;
                for (var i = 0; i < data.length; i++) {
                    canRated++;
                    if (data[i].Common > maxNum) {
                        maxNum = data[i].Common;
                    }
                    if (data[i].Expert > maxNum) {
                        maxNum = data[i].Expert;
                    }
                }
                leftSpace = Math.max(0, (moduleWidth - programeLi * canRated) / 2);
                $('#programScore').width(Math.max(moduleWidth, canRated * programeLi));
                var _i = 0;
                $(data).each(function (i, ele) {
                    var $li = $('#program [data-programid="' + ele.ProgramId + '"]');
                    if ($li.size() > 0) {
                        $li.animate({'left': parseInt(_i++ * programeLi) + parseInt(leftSpace)});
                        var commonMax = 0, expertMax = 0;
                        if (maxNum > 0) {
                            commonMax = ele.Common / maxNum;
                            expertMax = ele.Expert / maxNum;
                        }

                        if (ele.Common > ele.Expert)
                            $('#program [data-programid="' + ele.ProgramId + '"]>.allScore').html(ele.All);
                        else
                            $('#program [data-programid="' + ele.ProgramId + '"]>.allScore').html(ele.All);

                        $('#program [data-programid="' + ele.ProgramId + '"]>.all>span').html(ele.Common).animate({'bottom': commonMax * liHeight + 10});
                        $('#program [data-programid="' + ele.ProgramId + '"]>.all>div').animate({'height': commonMax * liHeight});

                        if ($li.data('useexpertscore')) {
                            $('#program [data-programid="' + ele.ProgramId + '"]>.pro>span').html(ele.Expert).animate({'bottom': expertMax * liHeight + 10});
                            $('#program [data-programid="' + ele.ProgramId + '"]>.pro>div').animate({'height': expertMax * liHeight});
                        }
                    }
                });
            }

            setTimeout(function () {
                getProgramStatistics();
            }, 2000);
        }, function () {
            setTimeout(function () {
                getProgramStatistics();
            }, 5000);
        });
    };
    //关闭评分
    var closeProgram = function () {
        $.extendPost(moduleCommon.httpURL + $('#CloseProgram').val(),{}, 'json', function (msg) {
            moduleCommon.loaded();
            if (msg.ResultType != 1) {
                moduleCommon.showInfo(msg.Message);
                return false;
            } else {
                moduleCommon.showInfo('已关闭评分', 1);
                $('.endProgram').hide();
                $('#programScoreBox .pushProgram').show();
            }
        }, function () {
            moduleCommon.loaded();
            moduleCommon.showInfo('网络繁忙，请稍后重试');
        });
    }
});