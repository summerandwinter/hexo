---
title: 学习Git
date: 2016-12-12 13:43:36
categories:
  - Git
tags:
  - Git
description: 介绍一些Git学习过程中入门的基本知识
---

# 基本概念
首先介绍一些关于Git的基本概念，方便后面的学习。
Git中有三种状态：
1. 已提交（commited）表示数据已安全的保存在本地数据库中。
2. 已修改（modified）表示修改了文件，还没保存到本地数据库中。
3. 已暂存（staged）表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

由此可以把一个Git项目看作由三部分组成

1. `工作目录`（Working Directory） 
顾名思义这里就是我们的工作区域，可以这样理解，在这里我们不用分心去考虑版本控制的事，只用专心完成自己工作，因为这里的内容只是整个项目的某一个版本，我们可以放心的修改而不用担心对其他版本产生影响。
2. `暂存区`（Staging Area） 
实际上它只是一个文件，通常情况下这个文件在仓库目录中，它的作用是告诉Git在下次执行`commit`时需要放入仓库的内容。我们可以把它理解为我们在工作目录对文件所做改动的一个索引。
3. `仓库`（Repository）
 Git 用来保存项目的元数据和对象数据库的地方，通过这种方式来永久保存项目中不同版本的内容。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。

Git的工作流程大致是：
1. 在工作目录中修改文件。

2. 暂存文件，将文件的快照放入暂存区域。

3. 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库。

![Git工作流程](http://sanyecao.qiniudn.com/assets/images/articles/git_workflow.svg)

# 基础命令

## Git配置
Git 自带一个 `git config` 的工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置：

1. `/etc/gitconfig` 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 `--system` 选项的 `git config`时，它会从此文件读写配置变量。

2. `~/.gitconfig` 或 `~/.config/git/config` 文件：只针对当前用户。 可以传递 --global 选项让 Git 读写此文件。

3. 当前使用仓库的 Git 目录中的 `config` 文件（就是 .git/config）：针对该仓库。
每一个级别覆盖上一级别的配置，所以 .git/config 的配置变量会覆盖 /etc/gitconfig 中的配置变量。

> 在 Windows 系统中，Git 会查找 $HOME 目录下（一般情况下是 C:\Users\$USER）的 .gitconfig 文件。 Git 同样也会寻找 /etc/gitconfig 文件，但只限于 MSys 的根目录下，即安装 Git 时所选的目标位置。

配置用户信息
```bash
git config --global user.name "winter"
git config --global user.email winter@example.com
```
配置文本编辑器
```bash
git config --global core.editor emacs
```
检查配置信息
```bash
git config --list
```
或者只检查某一项
```bash
git config user.name
```
## 忽略文件

Git通过 `.gitignore` 文件来管理需要忽略的文件模式，我们通过一些规则来告诉Git哪些文件不需要列入追踪列表。
文件 `.gitignore` 的格式规范如下：
* 所有空行或者以 `#` 开头的行都会被 `Git` 忽略。
* 可以使用标准的 `glob` 模式匹配。
* 匹配模式可以以（`/`）开头防止递归。
* 匹配模式可以以（`/`）结尾指定目录。
* 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反。

所谓的 `glob` 模式是指 `shell` 所使用的简化了的正则表达式。 
* `*`星号匹配零个或多个任意字符；
* `[abc]` 匹配任何一个方括号中的字符（要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；
* `?` 问号只匹配一个任意字符；
* `[0-9]` 如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）。 
* `**` 使用两个星号表示匹配任意中间目录，比如a/**/z 可以匹配 a/z, a/b/z 或 a/b/c/z等。

下面我们看一个 `.gitignore` 文件的例子加深理解：
```bash
# 忽略 .a 后缀的文件
*.a

# 尽管上面忽略的 .a 后缀的文件，但是要追踪 lib.a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，子目录下的 TODO 文件继续追踪
/TODO

# 忽略 build/ 目录下的所有文件
build/

# 忽略 doc 目录下的 .txt 文件，但是不忽略子目录下的 .txt 文件 如：忽略 doc/notes.txt, 但是不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc 目录下所有的 .pdf 文件，包括子目录下的 .pdf 文件
doc/**/*.pdf
```
> GitHub 有一个十分详细的针对数十种项目及语言的 `.gitignore` 文件列表，你可以在 https://github.com/github/gitignore 找到它.

## 获取帮助
有三种方法可以找到 Git 命令的使用手册：
```bash
git help <verb>
git <verb> --help
man git-<verb>
```
例如，要想获得 config 命令的手册，执行
```bash
git help config
```
## 获取 Git 仓库
* 在现有目录中初始化仓库

使用 `git init` 初始化，创建一个新的Git仓库

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

* 克隆现有的仓库

克隆仓库的命令格式是 `git clone [url]` 。 比如，要克隆 Git 的可链接库 libgit2，可以用下面的命令：
```bash
$ git clone https://github.com/libgit2/libgit2
```
这会在当前目录下创建一个名为 “libgit2” 的目录，并在这个目录下初始化一个 .git 文件夹，从远程仓库拉取下所有数据放入 .git 文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的 libgit2 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。 如果你想在克隆远程仓库的时候，自定义本地仓库的名字，你可以使用如下命令：
```bash
$ git clone https://github.com/libgit2/libgit2 mylibgit
```
这将执行与上一个命令相同的操作，不过在本地创建的仓库名字变为 mylibgit。

Git 支持多种数据传输协议。 上面的例子使用的是 `https://` 协议，不过你也可以使用 `git://` 协议或者使用 `SSH `传输协议，比如 `user@server:path/to/repo.git` 。

# 工作流程

在工作目录中新建一个文件
```bash
nano readme.txt
```
添加一行文字
```
This is demo for git learning
```
## 检查状态

使用 `git status` 检查工作区和暂存区的内容（文件状态）

现在工作目录有一个新的文件 `readme.txt` 但是还没有提交到暂存区

执行 `git status`

```bash
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        readme.txt

nothing added to commit but untracked files present (use "git add" to track)
```
从上面终端中打印的信息可以注意到`Untracked files:`下面的`readme.txt`,`Untracked` （未跟踪）表示Git已经看到这个文件，但是还没有开始跟踪这个文件的变化。 

`git status` 命令的输出十分详细，但其用语有些繁琐。 如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种更为紧凑的格式输出。 

运行 `git status -s` ，状态报告输出如下：
```
git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```
`??` 新添加的未跟踪文件
`A ` 新添加到暂存区中的文件，
`M` 修改过的文件 
> `M` 有两个可以出现的位置，出现在右边的 `M` 表示该文件被修改了但是还没放入暂存区，出现在靠左边的 `M` 表示该文件被修改了并放入了暂存区。 例如，上面的状态报告显示： `README` 文件在工作区被修改了但是还没有将修改后的文件放入暂存区,`lib/simplegit.rb` 文件被修改了并将修改后的文件放入了暂存区。 而 `Rakefile` 在工作区被修改并提交到暂存区后又在工作区中被修改了，所以在暂存区和工作区都有该文件被修改了的记录。

## 跟踪新文件
使用命令 `git add` 开始跟踪一个文件。
执行
```bash
git add readme.txt
```
我们再来查看状态

```bash
git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   readme.txt

 
```

从`new file:   readme.txt` 可以看出 `readme.txt` 已经加入暂存区了，现在文件已处于 `tracked` （已跟踪）状态，从现在开始Git将跟踪它的每一次改动。
* `git diff` 比较工作区和暂存区的差异


## 暂存已修改文件

在 `readme.txt` 文件中加入另外一行文字
```bash
This is another line
```

执行`git diff`命令

```bash
git diff
diff --git a/readme.txt b/readme.txt
index b35e311..60520a0 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1 +1,2 @@
-This is demo for git learning
\ No newline at end of file
+This is demo for git learning
+This is another line
\ No newline at end of file

```
使用 `git diff` 命令可以检查文件在工作目录和暂存区中的差别。
从打印信息可以看出，工作目录中 `readme.txt` 的内容（ `+` 标记）比暂存区（ `-` 标记）的内容多出了我们刚添加的一行。

> PS: 按键盘上的 `q` 可以退出 diff 模式

现在我们来修改这个已被跟踪的文件
执行
```bash
git add readme.txt
```
要暂存这次更新，需要运行 git add 命令。 这是个多功能命令：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。

## 提交更新
* `git commit` 把暂存区文件的改动提交到仓库

`commit` 是这里说的Git工作流程的最后一步，该命令会把已跟踪的文件的改动永久的保存到仓库。

```bash
git commit -m "Complete my first commit"
```
需要注意的是 `commit` 需要配合 `-m`选项一起使用来备注每一次提交。通常我们会约定备注信息要满足下列几个条件
* 必须用引号引起来
* 用现代时书写备注
* 简明扼要（不超过50个字符）

尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁琐。 Git 提供了一个跳过使用暂存区域的方式， 只要在提交的时候，给 `git commit` 加上 `-a` 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤：
```bash
git commit -a -m 'added new benchmarks'
```

## 查看提交历史

* `git log` 列出所有的提交历时

执行 `git log` 命令

```bash
git log
commit 12385fd24ad0cadb2ca6ed4488caae153e3d23b9
Author: winter <summerandwiner@gmail.com>
Date:   Fri Dec 9 02:55:43 2016 -0500  

	Complete first line of commit  
```
从终端打印的文本我们可以看到下面的信息：
* 一段40个字符的字符串（12385fd24ad0cadb2ca6ed4488caae153e3d23b9），我们把它称之为 `SHA`, Git用它来标识每一次提交的唯一性。
* 提交的用户
* 提交的日期和时间
* 提交的备注信息

## 移除文件
要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除），然后提交。 可以用 `git rm` 命令完成此项工作，并连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。

如果只是简单地从工作目录中手工删除文件，运行 `git status` 时就会在 “Changes not staged for commit” 部分（也就是 未暂存清单）看到：
```bash
$ rm PROJECTS.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    PROJECTS.md

no changes added to commit (use "git add" and/or "git commit -a")
```
然后再运行 `git rm` 记录此次移除文件的操作：
```bash
$ git rm PROJECTS.md
rm 'PROJECTS.md'
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    deleted:    PROJECTS.md
```
下一次提交时，该文件就不再纳入版本管理了。 如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 `-f`（译注：即 force 的首字母）。 这是一种安全特性，用于防止误删还没有添加到快照的数据，这样的数据不能被 Git 恢复。

另外一种情况是，我们想把文件从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中。 换句话说，你想让文件保留在磁盘，但是并不想让 `Git` 继续跟踪。 当你忘记添加 `.gitignore `文件，不小心把一个很大的日志文件或一堆 `.a` 这样的编译生成文件添加到暂存区时，这一做法尤其有用。 为达到这一目的，使用 `--cached` 选项：
```bash
git rm --cached README
```
`git rm` 命令后面可以列出文件或者目录的名字，也可以使用 `glob` 模式。 比方说：
```bash
git rm log/\*.log
```
注意到星号 `*` 之前的反斜杠 `\`， 因为 `Git `有它自己的文件模式扩展匹配方式，所以我们不用 `shell` 来帮忙展开。 此命令删除 log/ 目录下扩展名为 `.log` 的所有文件。 类似的比如：
```bash
git rm \*~
```
该命令为删除以 `~` 结尾的所有文件。

## 移动文件
不像其它的 VCS 系统，Git 并不显式跟踪文件移动操作。 如果在 Git 中重命名了某个文件，仓库中存储的元数据并不会体现出这是一次改名操作。 不过 Git 非常聪明，它会推断出究竟发生了什么，至于具体是如何做到的，我们稍后再谈。

既然如此，当你看到 Git 的 `mv` 命令时一定会困惑不已。 要在 Git 中对文件改名，可以这么做：
```bash
git mv file_from file_to
```
它会恰如预期般正常工作。 实际上，即便此时查看状态信息，也会明白无误地看到关于重命名操作的说明：
```bash
git mv README.md README
git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
```    
其实，运行 `git mv` 就相当于运行了下面三条命令：
```bash
mv README.md README
git rm README.md
git add README
```
如此分开操作，Git 也会意识到这是一次改名，所以不管何种方式结果都一样。 两者唯一的区别是，`mv` 是一条命令而另一种方式需要三条命令，直接用 `git mv` 轻便得多。 不过有时候用其他工具批处理改名的话，要记得在提交前删除老的文件名，再添加新的文件名。

# 追踪
在使用Git时，我们经常会遇到一些情况需要撤销我们所做的一些修改，Git提供了一些这样的特性。
Git把 `HEAD` 提交作为我们正在进行的提交，大部分情况下最新的提交就是 `HEAD` 提交。
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

`git branch` 检查当前所在的分支

```bash
git branch
* maseter
```
`*` 标记当前所在分支

为了更好的理解Git分支我们看下下面的图表

![Git分支](assets/images/articles/git-diagram-1.svg)
* 图中的圆点代表提交，所有的提交组成了Git项目的提交历史
* 新的分支是不同版本的Git项目，它包含Master的提交，也包含Master所没有的提交

到目前为止，我们所有的操作都是在单个分支 `master` 上进行的。
下面我们新建一个分支

```bash
git branch new_branch
```
这里 `new_branch` 是新分支的名称，名称尽量简短且表明分支的作用，名称中不能含空格。  

现在我们成功的创建了一个新的分支，现在新分支包含了master分支的所有提交历史，接下来我们把当前分支切换到新建的分支
```bash
git checkout new_branch
```
分支切换成功后接下来所有的提交都会提交到新分支 `new_branch` 而 `master` 分支不受影响。

当我们在 `new_branch` 分支上提交了一些修改后，希望把新分支上的提交同步到 `master` 中可以通过合并来完成


首先把当前分支切换到 `master`
```bash
git checkout master
```
把新分支合并到 `master` 分支
```bash
git merge new_branch
```
当我们使用分支时常常会出现一个问题，我们在两个分支上都做了一些修改，而且这些修改在同一个地方，这种情况下进行合并时，Git无法帮我们决定保留哪个修改，于是Git以冲突的形成告诉我们两个版本的修改中我们重复修改了哪些地方，让我们自己来决定该保留哪个版本的修改。
在发生冲突的文件中Git用一些特殊的标记来标识`HEAD`(master)版本的内容和`new_branch` 版本的内容,类似下面的方式：
```
<<<<<<< HEAD
master version of line
=======
new_branch version of line
>>>>>>> new_branch
```
选择好需要保留的版本，删除不需要的版本，需要注意的是那些特殊标记如：`>>>>>>>` 和 `=======` 也要删除，不然冲突依然存在。

通常情况下新建分支的目的是完成项目的一个新特性，当这些特性完成后这个分支的作用也就达到了，当我们把这个分支合并当 `master` 后，这个分支就可以删除了。
```bash
git branch -d new_branch
```
上面的命令实现对 `new_branch` 分支的删除


# 团队协作

* `git clone` 从远程仓库拷贝项目到本地

```bash
git clone remote_location clone_name
```
* `remote_location` 告诉Git哪里可以找到远程仓库，通常是一个网址，也可以是一个路径
* `clone_name` 告诉Git本地仓库放哪里

* `git remote -v` 列出Git项目的远程仓库
* `git fetch` 从远程仓库获取到本地拷贝
这个命令不会把远程仓库的修改合并到本地仓库，它会把远程的修改同步到远程分支（remote branch）,此时远程修改还只同步到了（origin/master),本地的master分支还没有更新。

* `git merge origin/master` 合并 `origin/master`到本地分支
* `git push` 提交本地分支到远程仓库

```bash
git push origin your_branch_name
```
