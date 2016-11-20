---
title: Hexo优化方案 hexo插件静态资源压缩
date: 2016-11-20 23:05:49
tags:
 - hexo
 - hexo优化
 - hexo压缩
categories:
 - Hexo
---

前面介绍了一种压缩hexo页面的方法，通过gulp配合它的插件来实现，我们还可以通过hexo插件（Hexo-all-minifier）来实现。
<!--more-->
# 安装

```bash
npm install hexo-all-minifier --save
```

Mac用户还需要执行下面的命令

```bash
brew install libtool automake autoconf nasm
```

# 配置

在hexo的配置文件`_config.yml`中加入下面的配置参数：

```yml
html_minifier:
  enable: true
  exclude: 
 ```
  
enable -开始插件，默认为true
exclude: 设置不需要压缩的文件

```yml
css_minifier:
  enable: true
  exclude: 
    - '*.min.css'
```
enable -开始插件，默认为true
exclude: 设置不需要压缩的文件

```yml
js_minifier:
  enable: true
  mangle: true
  output:
  compress:
  exclude: 
    - '*.min.js
```    
enable -开始插件，默认为true
exclude: 设置不需要压缩的文件
mangle: 破坏文件名称
output: 输出选项
compress: 压缩选项
exclude: 设置不需要压缩的文件

```yml
image_minifier:
  enable: true
  interlaced: false
  multipass: false
  optimizationLevel: 2
  pngquant: false
  progressive: false
```  
enable -开启插件，默认为true
interlaced - 默认为 false。
multipass - 多次优化svg图片直至其完全优化 默认 false。
optimizationLevel - 选择 0 到 7 的优化级别。 默认为 2。
pngquant - 开启 `imagemin-pngquant` 插件。 默认为 false。
progressive - 以低失真模式压缩。 默认为 false。

>实际测试用图片压缩报错，暂时关闭图片压缩功能。