---
title: Windows环境安装Hexo并基于GitHub Pages搭建博客
description: 介绍在Windows环境下安装Hexo静态博客系统，并且用户GitHub Page 搭建免费的个人博客
date: 2016-11-17 15:26:39
tags:
- Blog
- Hexo
- GitHub
- GitHub Pages
---

# 前言
本文中
Hexo安装目录为 D:\blog
GitHub的账号名为 summer

# 安装依赖
Node.js
Git
安装最新版的Node.js和Git

# 安装hexo
在任意位置点击鼠标右键选择Git bash
利用npm命令安装
```bash
npm install -g hexo-cli --save
```

# 创建hexo文件夹
Hexo安装目录内点击鼠标右键，选择Git bash
执行下面的命令即会自动在目标文件夹建立网站所需要的所有文件。
``` bash
hexo init 
hexo install(安装依赖包)
```

# 启动
```bash
hexo generate
hexo server
```
在浏览器中输入地址：[http://localhost:4000](http://localhost:4000) 查看是否启用成功

# 创建GitHub repository
在GitHub中创建一个新的repository，如我的账号是summer,应该创建的名字是summer.github.io

# 修改配置
编辑Hexo安装目录下的_config.yml文件

>deploy:
  type: git
  repo: https://github.com/summer/summer.github.io.git
  branch: master
 

# 安装deploy依赖
```bash
 npm install hexo-deployer-git --save  
```

# 部署到github
```bash
hexo generate
hexo deploy
```
**PS：每次修改本地文件后，需要hexo generate才能保存。每次使用命令时，都要在Hexo安装目录下。** 