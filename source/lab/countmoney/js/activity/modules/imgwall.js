define(function (require, exports, module) {
    var selfModuleName = 'imgwall';
    var moduleCommon = require('common');
    var imgWallPlay = false;
    var imgWallAutoPlay;
    var imgWallScroll = 1;
    var isScroll = false;

    //初始化
    exports.init = function () {
        $('body').on('active', function () {
            getPictureList();

            //图片库鼠标移动
            $('#imgwall').hover(function () {
                clearInterval(imgWallAutoPlay);
            }, function () {
                imgWallPlay = false;
                getImgWall();
            });

            //图片库鼠标点击
            $('#imgwall .img_left').on('click', function () {
                imgWallLeft();
            });
            $('#imgwall .img_right').on('click', function () {
                imgWallRight();
            });
        });

        $('body').on('modulechange', function (e, moduleName) {
            if (moduleName == selfModuleName) {
                $('#imgwall').show();
                getImgWall();
            } else {
                $('#imgwall').hide();
                clearInterval(imgWallAutoPlay);
                imgWallPlay = false;
            }
        });
    };

    //照片墙
    function getPictureList() {
        var num = '0';
        if ($('#GetPictureList').data('imgid'))
            num = $('#GetPictureList').data('imgid');
        var imgRequest = $.extendGetJSON(moduleCommon.httpURL + $('#GetPictureList').val(), { 'pictureId': num, 'count': 10 }, function (data) {
            if (data.length > 0) {
                $('#GetPictureList').data('imgid', data[data.length - 1].Num);
                $.each(data, function (i, data) {
                    var str = '<img src="" class="middle"><img src=' + data.PicPath + ' />';
                    str = str + '<span><i>上传者:</i>' + data.FansNickName + '</span>';
                    $('#imgwall ul').append('<li>' + str + '</li>');
                    if ($('#imgwall ul li').length == 1) {
                        $('#imgwall ul li:first').addClass('nowBig');
                        $('#imgwall ul').css('left', '200');
                    }
                    $('#imgwall ul').width($('#imgwall ul li').length * 200 + 500);
                });
            }
            setTimeout(function () {
                getPictureList();
            }, 10000);
        }, function () {
            try {
                imgRequest.abort();
            }
            catch (e) { }
            setTimeout(function () {
                getPictureList();
            }, 20000);
        });
    }

    function getImgWall() {
        if (!imgWallPlay) {
            imgWallPlay = true;
            clearInterval(imgWallAutoPlay);
            $('#imgwall ul').width($('#imgwall ul li').length * 200 + 500);
            imgWallAutoPlay = setInterval(function () {
                imgWallRight();
            }, 3000);
        }
    }

    function imgWallRight() {
        if (!isScroll && $('#imgwall .nowBig').next('li').length > 0) {
            isScroll = true;
            $('#imgwall ul').animate({ 'left': $('#imgwall ul').position().left - 200 }, 800);
            $('#imgwall .nowBig span').animate({ 'opacity': '0' }, 800);
            $('#imgwall .nowBig').animate({ 'width': '190px', 'height': '190px', 'top': '165px', 'opacity': '0.5' }, 800, function () {
                $('#imgwall .nowBig').removeAttr('class').next().addClass('nowBig');
                isScroll = false;
            });
            $('#imgwall .nowBig').next('li').animate({ 'width': '540px', 'height': '540px', 'top': '-5px', 'opacity': '1' }, 800);
            $('#imgwall .nowBig').next('li').find('span').animate({ 'opacity': '1' }, 800);
            imgWallScroll++;
        } else if ($('#imgwall .nowBig').next('li').length == 0 && $('#imgwall ul li').length > 1) {
            $('#imgwall .nowBig').animate({ 'width': '190px', 'height': '190px', 'top': '165px', 'opacity': '0.5' }).removeAttr('class');
            $('#imgwall .nowBig span').animate({ 'opacity': '0' }, 800);
            $('#imgwall ul li:first').animate({ 'width': '540px', 'height': '540px', 'top': '5px', 'opacity': '1' }, 1000).addClass('nowBig');
            $('#imgwall ul li:first span').animate({ 'opacity': '1' });
            $('#imgwall ul li:last span').animate({ 'opacity': '0' });
            $('#imgwall ul').animate({ 'left': 200 }, 800);
        }
    }

    function imgWallLeft() {
        if (!isScroll && $('#imgwall .nowBig').prev('li').length > 0) {
            isScroll = true;
            $('#imgwall ul').animate({ 'left': $('#imgwall ul').position().left + 200 }, 800);
            $('#imgwall .nowBig span').animate({ 'opacity': '0' }, 800);
            $('#imgwall .nowBig').animate({ 'width': '190px', 'height': '190px', 'top': '165px', 'opacity': '0.5' }, 800, function () {
                $('#imgwall .nowBig').removeAttr('class').prev().addClass('nowBig');
                isScroll = false;
            });
            $('#imgwall .nowBig').prev('li').animate({ 'width': '540px', 'height': '540px', 'top': '-5px', 'opacity': '1' }, 800);
            $('#imgwall .nowBig').prev('li').find('span').animate({ 'opacity': '1' }, 800);
        }
    }
});