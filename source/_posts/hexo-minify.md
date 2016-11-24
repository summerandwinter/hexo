---
title: Hexo优化方案 gulp插件静态资源压缩
date: 2016-11-20 19:52:19
tags:
 - hexo
 - hexo优化
 - hexo压缩
categories:
 - Hexo
---
通过压缩html,css,js等静态资源，可以减少请求的数据量从而达到优化hexo访问速度的目的，这里主要用到gulp和一些相关的插件来实现。
<!--more-->
gulp是一个基于Node.js的自动化构建工具，我们可以通过一些gulp插件实现对html,css,js等静态资源的高效压缩。

# 安装gulp

首先在hexo安装目录下安装`gulp`，假定hexo安装目录为 `Documents/hexo`

输入下面的命令进入hexo安装目录

```bash
cd ~/Documents/hexo
```
>PS:后面的操作都是在该目录下进行

在hexo目录下安装`gulp`

```bash
npm install gulp -g
```

# 安装gulp插件

这里需要用到的插件有：

`gulp-minify-css`  压缩css
`gulp-uglify`      混淆js
`gulp-htmlmin`     压缩html
`gulp-htmlclean`   清理html
`gulp-imagemin`    压缩图片


```bash
npm install gulp-minify-css --save
npm install gulp-uglify --save
npm install gulp-htmlmin --save
npm install gulp-htmlclean --save
npm install gulp-imagemin --save
```

# 配置gulp

在hexo根目录添加`gulpfile.js`文件，文件内容如下

```
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩css文件
gulp.task('minify-css', function() {
  return gulp.src('./public/**/*.css')
  .pipe(minifycss())
  .pipe(gulp.dest('./public'));
});
// 压缩html文件
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
  .pipe(htmlclean())
  .pipe(htmlmin({
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  }))
  .pipe(gulp.dest('./public'))
});
// 压缩js文件
gulp.task('minify-js', function() {
  return gulp.src('./public/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public'));
});
// 压缩 public/demo 目录内图片
gulp.task('minify-images', function() {
    gulp.src('./public/demo/**/*.*')
        .pipe(imagemin({
           optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
           progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
           interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
           multipass: false, //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('./public/uploads'));
});

// 默认任务
gulp.task('default', [
  'minify-html','minify-css','minify-js','minify-images'
]);
```
到这里对`gulp`的配置就完成了，只需要每次在执行generate命令后执行gulp就可以实现对静态资源的压缩，压缩完成后执行deploy命令同步到服务器

```bash
hexo generate
gulp
hexo deploy
```