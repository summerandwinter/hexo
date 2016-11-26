---
title: 整理一些js中常见的问题
tags:
  - Array
  - Checkbox
  - JavaScript
  - Select
  - String
id: 495
categories:
  - JavaScript
date: 2013-10-21 08:21:54
permalink: some-javascript-problems
---

做项目的时候，我们常常会用到一些常用的JS来处理数组，字符串，还有表单元素，如（checkbox,select等）。对于没有系统学习过JS的人来说，这些知识点既熟悉又陌生。记得自己以前用过，可是又记不清楚到底怎么用的，或者会混淆。这里整理一些自己经常会用到的一些知识点，不完善，以后慢慢再加，也不是晦涩的技术难题，只是mark一下，希望能对大家有帮助。
<!--more-->

# js获取select标签选中的值

原生js

```javascript
var obj = document.getElementByIdx_x(”testSelect”); //定位id   
var index = obj.selectedIndex; // 选中索引   
var text = obj.options[index].text; // 选中文本   
var value = obj.options[index].value; // 选中值  
```
jQuery

## 第一种方式

```javascript
$('#testSelect option:selected').text();//选中的文本   
$('#testSelect option:selected') .val();//选中的值   
$("#testSelect ").get(0).selectedIndex;//索引  
```
第二种方式

```javascript
$("#tesetSelect").find("option:selected").text();//选中的文本   
…….val();   
…….get(0).selectedIndex;  
```
# Aarry常用操作

```javascript
var arr = new Array();   
arr[0] = "aaa";   
arr[1] = "bbb";   
arr[2] = "ccc";   
//alert(arr.length);//3   
arr.pop();   
//alert(arr.length);//2   
//alert(arr[arr.length-1]);//bbb   
arr.pop();   
//alert(arr[arr.length-1]);//aaa   
//alert(arr.length);//1   
  
var arr2 = new Array();   
//alert(arr2.length);//0   
arr2[0] = "aaa";   
arr2[1] = "bbb";   
//alert(arr2.length);//2   
arr2.pop();   
//alert(arr2.length);//1   
arr2 = arr2.slice(0,arr2.length-1);   
//alert(arr2.length);//0   
arr2[0] = "aaa";   
arr2[1] = "bbb";   
arr2[2] = "ccc";   
arr2 = arr2.slice(0,1);   
alert(arr2.length);//1   
alert(arr2[0]);//aaa   
alert(arr2[1]);//undefined  
```
shift：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined


```javascript
var a = [1,2,3,4,5];   
var b = a.shift(); //a：[2,3,4,5]   b：1  
unshift：将参数添加到原数组开头，并返回数组的长度
```
注：在IE6.0下测试返回值总为undefined，FF2.0下测试返回值为7，所以这个方法的返回值不可靠，需要用返回值时可用splice代替本方法来使用。


```javascript
var a = [1,2,3,4,5];   
var b = a.unshift(-2,-1); //a：[-2,-1,1,2,3,4,5]   b：7  
```
pop：删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined


```javascript
var a = [1,2,3,4,5];   
var b = a.pop(); //a：[1,2,3,4]   b：5//不用返回的话直接调用就可以了  
push：将参数添加到原数组末尾，并返回数组的长度
var a = [1,2,3,4,5];
var b = a.push(6,7); //a：[1,2,3,4,5,6,7]   b：7
```
concat：返回一个新数组，是将参数添加到原数组中构成的


```javascript
var a = [1,2,3,4,5];   
var b = a.concat(6,7); //a：[1,2,3,4,5]   b：[1,2,3,4,5,6,7]  
splice(start,deleteCount,val1,val2,...)：从start位置开始删除deleteCount项，并从该位置起插入val1,val2,...
```
在清空数组时，只需传递startIndex。

如果不删除所有元素，再传递deleteCount参数。

splice还具有先删除后添加的功能，即先删除几个元素，然后在删除的位置再添加若干元素，删除与添加的元素的个数没有必须相等，这时侯deleteCount也是要用到的。


```javascript
var a = [1,2,3,4,5];   
var b = a.splice(2,2,7,8,9); //a：[1,2,7,8,9,5]   b：[3,4]   
var b = a.splice(0,1); //同shift   
a.splice(0,0,-2,-1); var b = a.length;//同unshift   
var b = a.splice(a.length-1,1);//同pop   
a.splice(a.length,0,6,7); var b = a.length; //同push  
```
reverse：将数组反序


```javascript
var a = [1,2,3,4,5];   
var b = a.reverse(); //a：[5,4,3,2,1]   b：[5,4,3,2,1]  
```
sort(orderfunction)：按指定的参数对数组进行排序


```javascript
var a = [1,2,3,4,5];   
var b = a.sort(); //a：[1,2,3,4,5]   b：[1,2,3,4,5]  
```
slice(start,end)：返回从原数组中指定开始下标到结束下标之间的项组成的新数组


```javascript
var a = [1,2,3,4,5];   
var b = a.slice(2,5); //a：[1,2,3,4,5]   b：[3,4,5]  
```
JS中split用法

```javascript
function spli(){     
         datastr="2,2,3,5,6,6";        
  var str= new Array();     
    
  str=datastr.split(",");        
    for (i=0;i<str.length ;i++ )     
    {     
        document.write(str[i]+"<br/>");     
    }     
}     
spli();     
```   
join(separator)：将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符

```javascript
var a = [1,2,3,4,5];   
var b = a.join("|"); //a：[1,2,3,4,5]   b："1|2|3|4|5"  
```
再给个利用数组模拟javaStringBuffer处理字符串的方法：

```javascript
/**  
* 字符串处理函数  
*/  
function StringBuffer() {   
var arr = new Array;   
this.append = function(str) {   
arr[arr.length] = str;   
};   
  
this.toString = function() {   
return arr.join("");//把append进来的数组ping成一个字符串   
};   
}  
```
今天在应用中突然发现join是一种把数组转换成字符串的好方法，故封装成对象使用了：


```javascript
/**  
*把数组转换成特定符号分割的字符串  
*/  
function arrayToString(arr,separator) {   
if(!separator) separator = "";//separator为null则默认为空   
return arr.join(separator);   
}  
```

```javascript
/**  
* 查找数组包含的字符串  
*/  
function arrayFindString(arr,string) {   
var str = arr.join("");   
return str.indexOf(string);   
} 
``` 
# checkbox操作

```javascript
function exportExcel()   
{   
   var para = ""  
   var ids=document.getElementsByName("ids");   
   for (var i=0;i<ids.length;i++ ){   
    if(ids[i].checked){ //判断复选框是否选中   
           para=para+ids[i].value+",";   
         }   
  }   
   url = '/detect/export_excel/?ids='+para   
   window.open(url)   
}   
``` 
# js处理表单

```javascript
document.getElementById('form').action=path;  
document.getElementById.submit();  
```