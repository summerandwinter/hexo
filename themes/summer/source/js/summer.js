
String.prototype.removal = function() {
    var reg = /(.)(?=.*\1)/g; // 预搜索方式（有的叫断言）  
    // 去空   
    var text = this.replace(/\s*/g,""); 
    // 去重
    text = text.replace(reg, "");    
    // 提取数字
    var numbers = text.replace(/[^\d]/g,'')
    // 提取中文
    var chinese = text.replace(/[^\u4E00-\u9FA5]/g,'')
    // 提取字母
    var letters = text.replace(/[^a-zA-Z]/g,'')
    // 其他特殊字符
    var others = text.replace(/[\u4e00-\u9fa5a-zA-Z\d]+/g, '');
    var result = chinese + letters + numbers + others;
   return result;
}

function getCustomFont(text, fontName) {
    var url = window.location.protocol + "//weread.qq.com/wrpage/getfont?text=" + encodeURIComponent(text) + "&font=" + fontName;
    var element = document.createElement("link");
    element.href = url;
    element.rel = "stylesheet";
    document.head.appendChild(element);
}

function getTextByTagName(tagName) {
    var tags = document.getElementsByTagName(tagName);
    var text = "";
    for(var i in tags) {
        text += tags[i].innerText;
    }
    return text;
}

function renderTitle() {
    var h1 = getTextByTagName("h1");
    var h2 = getTextByTagName("h2");
    var h3 = getTextByTagName("h3");
    var h4 = getTextByTagName("h4");
    var h5 = getTextByTagName("h5");
    var h6 = getTextByTagName("h6");
    var text = h1 + h2 + h3 + h4 + h5 + h6;
    var removal = text.removal();
    getCustomFont(removal, "SourceHanSerifCN-Bold.ttf");

}

renderTitle()
