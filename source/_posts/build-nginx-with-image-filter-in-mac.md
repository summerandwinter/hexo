---
title: Mac环境nginx实现图片裁剪和缓存
tags:
  - Mac
  - nginx
  - image-filter
id: 577
categories:
  - nginx
date: 2018-01-06 22:29:09
permalink: build-nginx-with-image-filter-in-mac
description: 介绍在Mac环境下通过nginx搭建图片服务器的整个过程，并通过nginx的image-filter模块实现对图片简单裁剪和图片缓存
---

# 安装tap
```bash
brew tap homebrew/nginx
```
# 安装gd
```bash
brew install gd
```
# 安装nginx和image-filter模块
```bash
brew install nginx-full --with-gd --with-image-filter
```
# 配置nginx
```
http {
    server {
        listen       8088;
        server_name  localhost;
        # 匹配 /img/image.jpg@500-500形式的链接
        location ~ "^/img/(?<image>.+)@(?<width>\d+)-(?<height>\d+)$" {
        	# 定位到 /img/image.jpg
            alias /usr/local/var/www/img/$image;
            # 裁剪
            image_filter crop $width $height;
            image_filter_jpeg_quality 75;
            image_filter_buffer 8M;
            error_page   415 = /empty;
        }

        location = /empty {
            empty_gif;
        }

    }

    # 定义缓存目录
    proxy_cache_path /usr/local/var/www/nginx-images-cache/ levels=1:2 keys_zone=images:10m inactive=24h max_size=100m;

    server {
        # Public-facing cache server.
        listen       8888;
        server_name  localhost;

        # Only serve widths of 768 or 1920 so we can cache effectively.
        location ~ "^/img/(?<image>.+)@(?<width>\d+)-(?<height>\d+)$" {
            # Proxy to internal image resizing server.
            proxy_pass http://localhost:8088/img/$image@$width-$height;
            proxy_cache images;
            proxy_cache_valid 200 24h;
        }

        location /img {
            # Nginx needs you to manually define DNS resolution when using
            # variables in proxy_pass. Creating this dummy location avoids that.
            # The error is: "no resolver defined to resolve localhost".
            proxy_pass http://localhost:8088/;
        }
    }
}

```

启动nginx

访问[http://localhost:8088/img/1.jpg@500-500](http://localhost:8088/img/1.jpg@500-500)查看裁剪过的图片
访问[http://localhost:8888/img/1.jpg@500-500](http://localhost:8888/img/1.jpg@500-500)查看缓存效果
