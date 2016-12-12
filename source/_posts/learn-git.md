---
title: 学习Git
date: 2016-12-12 13:43:36
categories:
  - Git
tags:
  - Git
---

# 工作流程
我们可以把一个Git项目看作由三部分组成
1. `工作目录`（Working Directory）: 这里完成对项目的所有工作：新建、修改、删除等
2. `暂存区`（Staging Area）: 这里记录所有你在 `工作目录` 中所做的改动
3. `仓库`（Repository）: 这里Git把改动永久的保存为不同版本的项目

Git的工作流程大致是，在工作目录操作文件，把文件见添加（add）到暂存区，把修改提交（commit）到仓库。
![Git工作流程](http://sanyecao.qiniudn.com/assets/images/articles/git_workflow.svg)

* `git init` 初始化，创建一个新的Git仓库

在你的工作目录下创建一个名为 `learngit` 的目录，并切换到该目录

```bash
mkdir learngit
cd learngit
```
执行
```bash
git init
```
到这一步初始化的工作就完成了
在工作目录中新建一个文件
```bash
nano readme.txt
```
添加一行文字
```
This is demo for git learning
```

* `git status` 检查工作区和暂存区的内容

现在工作目录有一个新的文件`readme.txt`但是还没有提交到暂存区

执行 `git status`

```bash
git status
On branch master
Untracked files:
	(use "git add <file>..." to include in what will be committed)

		readme.txt
nothing added to commit but untracked files present (use "git add" to track)
```
从上面终端中打印的信息可以注意到`Untracked files:`下面的`readme.txt`,`Untracked` 表示Git已经看到这个文件，但是还没有开始跟踪这个文件的变化。 
* `git add` 把文件从工作区添加到暂存区

把`readme.txt`加入暂存区
```bash
git add readme.txt
```
我们再来查看状态

```bash
git status
On branch master
Changes to be committed:
	(use "git reset HEAD <file>..." to unstage)   

 		new file:   readme.txt  
```	
从`new file:   readme.txt` 可以看出 `readme.txt` 已经加入暂存区了
* `git diff` 比较工作区和暂存区的差异
在 `readme.txt` 文件中加入另外一行文字

```bash
This is another line
```

执行`git diff`命令

```bash
git diff
diff --git a/readme.txt b/readme.txt                        
index c53d934..d46b9ce 100644                               
--- a/readme.txt                                            
+++ b/readme.txt                                            
@@ -1,2 +1,3 @@                                             
 This is a demo for git learning                               
+This is another line  
```
从打印信息可以看出，文件的改动用 `+` 标记了。
> PS: 键盘上的 `q` 可以退出 diff 模式

* `git commit` 把暂存区文件的改动提交到仓库

`commit` 是这里说的Git工作流的最后一步，该命令会把暂存区文件的改动永久的保存到仓库。

```bash
git commit -m "Complete my first commit"
```
需要注意的是 `commit` 需要配合 `-m`选项一起使用来备注每一次提交。通常我们会约定备注信息要满足下列几个条件
* 必须用引号引起来
* 用现代时书写备注
* 简明扼要（不超过50个字符）

* `git log` 列出所有的提交历时

执行 `git log` 命令

```bash
git log
commit 12385fd24ad0cadb2ca6ed4488caae153e3d23b9
Author: winter <summerandwiner@gmail.com>
Date:   Fri Dec 9 02:55:43 2016 -0500  

	Complete first line of dialogue  
```
从终端打印的文本我们可以看到下面的信息：
* 一段40个字符的字符串（12385fd24ad0cadb2ca6ed4488caae153e3d23b9），我们把它称之为 `SHA`, Git用它来标识每一次提交的唯一性。
* 提交的用户
* 提交的日期和时间
* 提交的备注信息

# 追踪
在使用Git时，我们经常会遇到一些情况需要撤销我们所做的一些修改，Git提供了一些这样的特性。
Git把 `HEAD` 提交 作为我们正在进行的提交，大部分情况下最新的提交就是 `HEAD` 提交。
使用下面的命令查看 `HEAD` 提交
```bash
git show HEAD
```
假设我们对工作目录中的 `readme.txt` 做了一些改动，但是现在我们想要放弃这些改动恢复到改动之前的样子，但是我们已经忘记了改动之前是什么样子了，下面的命令可以使工作目录中的 `readme.txt` 文件恢复到你最近一次提交时的样子

```bash
git checkout HEAD readme.txt
```
另一种情况，如果我们把上面对 `readme.txt` 的改动添加到了暂存区，但是现在我们想让缓存区中的内容恢复到添加改动之前，下面的命令可以实现我们的需求

```bash
git reset HEAD readme.txt
```
上面的命令把把暂存区的 `readme.txt` 文件重置到与 `HEAD` 提交中的相同，它只会重置暂存区的文件，不会影响工作目录中的文件。
类似的，如果我们想要把暂存区的 `readme.txt` 文件重置到其他版本的提交也可以通过 `git reset SHA` 来实现。这个命令是用之前任意一次提交的 `SHA` 前7位来定位，如：我们第一次提交的 `SHA` 为 `12385fd24ad0cadb2ca6ed4488caae153e3d23b9` 那么我们使用的命令为：
```bash
git reset 12385fd readme.txt
```
为了更好的理解 `git reset commit_SHA` 我们来看一下下面的图表，每一个圆点代表一次提交。
![Git HEAD切换](http://sanyecao.qiniudn.com/assets/images/articles/git-diagram-3.svg)
Before reset:
* HEAD 是最近一次提交

After resetting:
* HEAD 变成了你选择的之前的一次提交
* 灰色的提交不再是你项目的一部分
* 从本质上改变了项目的历史

# 分支

# 团队协作
