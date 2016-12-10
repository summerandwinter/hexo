---
title: 学习Mac命令行
date: 2016-12-10 11:23:55
tags:
  - cmd
---
# 文件系统导航

`ls` 列出当前工作目录下所有的文件和文件夹
`ls -a` 列出所有文件，包括隐藏的文件和文件夹
`ls -l` 列出完整信息（long format）
`ls -t` 根据最后修改时间排序
`pwd` 打印当前工作目录(print working directory)
`cd` 修改目录(change directory)
`cd ..` 返回上一级目录


# 文件系统查看和修改

`mkdir`代表创建目录(make directory)
`touch` 创建文件
`cp` 拷贝文件或文件夹

```bash
cp frida.txt lincoln.txt
```

```bash
cp source/file.txt target/
```

拷贝多个文件
```bash
cp source/file.txt source/file2.txt target/
```

拷贝所有文件
```bash
cp * target/
```

拷贝以所有m开头的.txt文件
```bash
cp m*.txt target/
```

`mv` 移动文件或文件夹
```bash
mv superman.txt superhero/
```

```bash
mv wonderwoman.txt batman.txt superhero/
```
```bash
mv batman.txt spiderman.txt
```
`rm` 删除文件
```bash
rm waterboy.txt
```
`rm -r` 删除文件夹
`r` 表示迭代（recursive）
```bash
rm -r slapstick
```
> PS:`rm`会把文件和文件夹彻底删除，系统没有没有恢复文件的命令，请谨慎使用该命令。

# 输入输出重定向

`>` 重定向标准输出到文件（覆盖）
`>>` 重定向标准输出到文件（追加）
`<` 重定向标准输入到命令
`|` 重定向标准输出到命令

`sort` 按每行的字母排序
`uniq` 过滤相邻的重复行(unique)
`grep` 根据表达式搜索文本(global regular expression print)
`sed` 根据表达式搜索修改文本并输出(stream editor)

# 环境配置

命令行会自动识别home目录下的`.bash_profile`文件作为bash描述文件

在终端种执行下面的命令编辑描述文件
```bash
nano ~/.bash_profile
```
下面解释下每个命令的作用：
* `nano` 用nano编辑器编辑文件
* `~` 表示home目录
* `.` 表示隐藏的文件
* `~/.bash_profile` 代表命令行的描述文件

在`~/.bash_profile`文件中加入下面的代码

```bash
echo "Welcome, Winter"
alias pd="pwd"
export USER="Winter"
export PS1=">>"
```
　
然后执行下面的命令使修改在当前会话中立即生效

```bash
source ~/.bash_profile
```
　
下面是对代码的解释
* `echo`　在终端输出文字
* `alias` 设置命令的别名，这里用`pd`作为`pwd`的别名，修改生效后输入`pd`能达到跟`pwd`命令相同的效果
* `export`　使设置的变量在当前会话发起的子会话中可访问

可以用`env`命令查看当前会话的环境变量
```bash
env
```

查看名称或值中含`PATH`的环境变量

```bash
env | grep PATH
```
　
下面是一些常用的环境变量
* `USER` 当前用户的用户名
* `PS1` 命令提示符
* `HOME` home目录，通常情况下无需自定义
* `PATH` 可执行脚本的存放路径，多个路径以冒号隔开，




