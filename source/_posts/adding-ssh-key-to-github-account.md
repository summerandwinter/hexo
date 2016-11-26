---
layout: post
title: 添加一个新的SSH key到GitHub账号
date: 2016-11-20 09:23:06
update: 2016-11-20 14:00:00ß
comment: true
tags:
  - GitHub
  - SSH key
categories:
  - GitHub
permalink: adding-ssh-key-to-github-account
---
在使用Git的过程中我们常常要与中央仓库进行同步，Git提供两种同步方式https和ssh方式。两种方式各有优劣，https方式使用简单，但是每次都需要输入密码，而且速度会比较慢，所以我们更多的是使用ssh方式同步，这种方式安全性更好，不需要每次都输入密码，更重要的是比https方式速度要快，GitHub在国内的访问不稳定的国情下这点尤为重要，下面介绍了通过ssh方式同步需要做的一些前期工作。
<!--more-->
# 检查是否存在SSH keys

生产SSH key之前先检查是否存在SSH keys
打开终端输入`ls -al ~/.ssh`命令查看是否存在SSH keys

```bash
ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```
默认的公共key的文件名如下

```
id_dsa.pub
id_ecdsa.pub
id_ed25519.pub
id_rsa.pub
```
如果不存在key可以通过下面的方法**生成一个新的SSH key**,如果已经存在了忽略下面的方法直接看**添加SSH key到ssh-agent**

# 生成一个新的SSH key

打开终端
输入下面的命令把邮箱地址替换成你自己的GitHub邮箱

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
这条命令已你指定的邮箱作为标签生成一条新的ssh key

```
Generating public/private rsa key pair.
```
终端会提示你 "Enter a file in which to save the key," 直接敲回车把key保存在指定的默认位置。

```bash
Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```
接下来会提示我们输入密码，如果不想设置密码直接留空。

```bash
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
# 添加SSH key到ssh-agent

在后台打开ssh-agent，确保它在可以状态：

```bash
# start the ssh-agent in the background
eval "$(ssh-agent -s)"
Agent pid 59566
```
添加你的 SSH key 到 ssh-agent. 如果不使用刚新生成的key而是使用已经存在的key在命令行中把 id_rsa 替换为已经存在的key的文件名.

```bash
$ ssh-add ~/.ssh/id_rsa
```

# 添加SSH key到GitHub账号

复制SHH key到粘贴板

```bash
pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```
>PS:如果`pbcopy`命令无效可以直接定位到你`.ssh`文件夹（这个文件夹是隐藏的），打开文件直接复制。

登录GitHub在任意页面，点击右上角的头像，在弹出的菜单中点击**Settings**选项

![用户设置](https://help.github.com/assets/images/help/settings/userbar-account-settings.png)

在左边栏中点击 **SSH and GPG keys**

![设置shh keys](https://help.github.com/assets/images/help/settings/settings-sidebar-ssh-keys.png)

点击**New SSH key** 或者 **Add SSH key**

![新建ssh key](https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png)

在"Title" 文本框中填入你的描述性文字如: "Personal MacBook Pro"

粘贴你的key到 "Key" 文本域

![粘贴ssh key](https://help.github.com/assets/images/help/settings/ssh-key-paste.png)

点击 **Add SSH key**

![生成ssh key](https://help.github.com/assets/images/help/settings/ssh-add-key.png)

在弹出的提示框中输入你的 GitHub 密码

![提示输入密码](https://help.github.com/assets/images/help/settings/sudo_mode_popup.png)

整理自[官方文档][githubhelp]
[githubhelp]:   https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/ "GitHub官方文档"

