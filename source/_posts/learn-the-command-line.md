---
title: 学习Mac命令行
date: 2016-12-10 11:23:55
categories:
  - 命令行
tags:
  - cmd
description: 介绍一些Mac命令行学习过程中入门的基本知识
---
# 文件系统导航

* `ls` 列出当前工作目录下所有的文件和文件夹
* `ls -a` 列出所有文件，包括隐藏的文件和文件夹
* `ls -l` 列出完整信息（long format）
* `ls -t` 根据最后修改时间排序
* `pwd` 打印当前工作目录(print working directory)
* `cd` 切换当前目录(change directory)
* `cd ..` 返回上一级目录


# 文件系统操作

* `mkdir`代表创建目录(make directory)
* `touch` 创建文件

```bash
touch file.txt
```
* `cp` 拷贝文件或文件夹

拷贝文件到文件
```bash
cp source.txt target.txt
```

拷贝文件到文件夹
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

* `mv` 移动文件或文件夹

移动文件到文件夹
```bash
mv file.txt target/
```
移动多个文件到文件夹
```bash
mv file1.txt file2.txt target/
```
移动文件到文件
```bash
mv source.txt target.txt
```
* `rm` 删除文件

删除单个文件
```bash
rm file.txt
```
* `rm -r` 删除文件夹

`r` 表示迭代（recursive）

```bash
rm -r directory
```
> `rm`会把文件和文件夹彻底删除，系统没有没有恢复文件的命令，请谨慎使用该命令。

# 输入输出重定向
标准输入（standard input），缩写形式为`stdin`，是指通过键盘或其他输入设备输入到终端的信息。
标准输出（standard output），缩写形式为`stdout`，是指程序运行后输出的信息。
标准错误（standard error），缩写形式为`stderr`，是指程序运行失败时输出的错误信息。

* `>` 重定向标准输出到文件（覆盖）

```bash
echo "Hello"
```
`echo`命令接收字符串"Hello"作为标准输入，把接收到的字符串作为标准输出打印到终端。
```bash
echo "Hello" > hello.txt
```
`>`把`echo`命令本应打印到终端的输出重定向到hello.txt文件

执行下面的命令
```bash
cat hello.txt
```
`cat` 把文件的内容输出到终端
可以看到已经把字符串"Hello"输出到hello.txt文件

```bash
cat source.txt > target.txt
```
`>`把`cat`命令本应打印到终端的输出重定向到 target.txt 文件

* `>>` 重定向标准输出到文件（追加）

`>>`命令的用法与`>`相同，区别在于`>`会覆盖原有的内容，而`>>`是在原有内容的末尾追加内容

* `<` 重定向标准输入到命令

```bash
cat < file.txt
```
`<` 把右边的文件作为标准输入输入给左边的程序。这里`lakes.txt` 作为 `cat`命令的标准输入。

* `|` 重定向标准输出到命令

```bash
cat volcanoes.txt | wc
```
可以把 `|` 理解为一个管道，把左边命令的标准输出作为右边命令的标准输入传递给右边的命令，可以理解为命令都命令的重定向。这里`cat volcanoes.txt`的标准输出是`wc`的标准输入
`wc` 命令的作用是分别列出内容种的行数，字数和字符数

多个`|`和`>`可以组合使用
```bash
cat file1.txt | wc | cat > file2.txt
```
这里 `cat file1.txt` 的标准输出通过管道传递给 `wc` 命令, `wc` 的标准输出传递给 `cat` ,最后 `cat` 的标准输出重定向到 `file2.txt`

* `sort` 按每行的字母排序

```bash
sort file.txt
```
`sort` 接收标准输入并为标准输出按字母排序

```bash
cat file.txt | sort > sorted-file.txt
```
从 `file.txt` 中接收标准输入通过管道传递到 `sort` ，重定向 `sort` 的标准输出到 `sorted-file.txt`文件

* `uniq` 过滤相邻的重复行

```bash
uniq file.txt
```
`uniq` 代表 "unique"，过滤文件中相邻的重复行
```bash
sort file.txt | uniq
```
由于 `uniq` 只过滤相邻的重复行，要实现过来所有的重复行可以先用 `sort` 命令按字母排序。
```bash
sort file.txt | uniq > uniq-file.txt
```
上面的命令实现过滤 `file.txt` 文件中所有的重复行，并输出到 `uniq-file.txt` 文件。

* `grep` 根据表达式搜索文本

`grep` 是global regular expression print的首字母缩写，搜索文件中与表达式匹配的行，并返回结果。
```bash
grep Keyword file.txt
```
这里搜索file.txt文件中包含'Keyword'关键字的行
```bash
grep -i Keyword file.txt
```
`grep -i` 允许搜索时大小写不敏感，默认是大小写敏感的。
```bash
grep -R Keyword /home/cuser/workspace/commandline
```
`grep -R` 搜索目录下所有文件，输出包含匹配关键字的文件的文件名和匹配的行，`-R`代表迭代（recursive）。
```bash
grep -Rl Keyword /home/cuser/workspace/commandline
```
`grep -Rl` 搜索目录下所有文件，只输出包含匹配关键字的文件的文件名
* `sed` 根据表达式搜索修改文本并输出

`sed` 代表 "stream editor"，接收标准输入并在显示前根据表达式修改内容，类似于我们熟知的“查找替换”。
```bash
sed 's/wordtofind/replacement/' file.txt
```
* `s`: 代表 "substitution"。使用 `sed` 命令的必选参数。
* `wordtofind`: 需要被替换的字符串
* `replacement`: 用来替换的字符串

```bash
sed 's/wordtofind/replacement/g' file.txt
```
上面的命令用到了`g`表达式，代表"global",文件种所有的wordtofind都会被替换成replacement。
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




