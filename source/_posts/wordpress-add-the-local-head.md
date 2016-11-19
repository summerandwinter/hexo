---
title: wordpress添加自定义默认本地头像
tags:
  - wordpress
  - 本地头像
id: 234
categories:
  - wordpress
date: 2013-09-04 23:58:20
---

因为本博客的文章分类比较复杂，所以有不少没有网站的网友搜到此地，留言的时候就没有gravatar头像，系统自带的头像又太难看，所以就打算自定义gravatar头像，因为比较喜欢QQ的头像，所以就用QQ头像作为默认头像，那如何实现了？
<!--more-->

找到主题的functions.php文件，添加如下代码：

```php
	add_filter( 'avatar_defaults', 'default_avatar' );
	function default_avatar ( $avatar_defaults) {    
	$myavatar= get_bloginfo('template_url'). '/images/default-avatar.jpg'; //默认图片路径  
	$avatar_defaults$myavatar= "默认头像"//后台显示名称  
	
```