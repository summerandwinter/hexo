---
title: Mac 环境下部署gerrit并与gitlab集成
date: 2018-12-20 10:19:58
categories:
   - gerrit
tags:
   - Mac
   - gerrit
   - gitlab

---
# 环境
系统 macOS Mojave 版本 10.14.1

jdk

```bash
java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```



nginx

```bash
nginx -v
nginx version: nginx/1.15.6
```



git

```bash
git version
git version 2.17.2 (Apple Git-113)
```



# 安装

从[官网](https://www.gerritcodereview.com/)上下载 war 包，本章节使用的是 2.16.1版本。

存放目录： /Users/summer/

安装目录：/Users/summer/review_site

进入存放目录执行

```bash
java -jar gerrit.war init --batch -d review_site
[2018-12-21 15:27:41,819] [main] INFO  com.google.gerrit.server.config.GerritServerConfigProvider : No /Users/summer/env/gerrit/review_site/etc/gerrit.config; assuming defaults
Generating SSH host key ... rsa... ed25519... ecdsa 256... ecdsa 384... ecdsa 521... done
Initialized /Users/summer/env/gerrit/review_site
Reindexing projects:    100% (2/2)
Reindexed 2 documents in projects index in 0.0s (44.4/s)
Executing /Users/summer/env/gerrit/review_site/bin/gerrit.sh start
Starting Gerrit Code Review: FAILED
error: cannot start Gerrit: exit status 1
```

进入 /Users/summer/review_site/etc 目录，配置 gerrit.config

```bash
[gerrit]
	basePath = git
	serverId = fa24d954-f249-4626-a0a8-3da22d50ab85
	canonicalWebUrl = http://gerrit.bmsoft.com
[database]
	type = h2
	database = /Users/summer/env/gerrit/review_site/db/ReviewDB
[container]
	javaOptions = "-Dflogger.backend_factory=com.google.common.flogger.backend.log4j.Log4jBackendFactory#getInstance"
	javaOptions = "-Dflogger.logging_context=com.google.gerrit.server.logging.LoggingContext#getInstance"
	user = summer
	javaHome = /Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/jre
[index]
	type = LUCENE
[auth]
	type = HTTP 
[receive]
	enableSignedPush = false
[sendemail]
	smtpServer = localhost
[sshd]
	listenAddress = *:29418
[httpd]
	listenUrl = http://*:8081/
[cache]
	directory = cache
[plugins]
	allowRemoteAdmin = true
```



启动 gerrit 服务

```bash
sh ~/review_site/bin/gerrit.sh start
```

启动成功后访问 http://localhost:8081

![](/Users/summer/dev/hexo/source/assets/images/articles/gerrit_configuration_error.jpg)

## 修改认证方式和反向代理

进入 /Users/summer/review_site/etc 目录，新建 passwd 文件

```bash
touch passwd
```

添加账号密码

```bash
htpasswd -b passwd admin admin
```

修改 nginx 配置文件

```bash
server {
      listen 80;
      server_name gerrit.summer.com;

      location ^~ / {
            auth_basic "Restricted";
            auth_basic_user_file  /Users/summer/review_site/etc/passwd;
        	proxy_pass        http://127.0.0.1:8099;
        	proxy_set_header  X-Forwarded-For $remote_addr;
        	proxy_set_header  Host $host;
      }
    }
```

刷新 nginx 配置文件 

```bash
nginx -s reload
```

访问 http://gerrit.bmsoft.com 输入账号密码登录，到这里 gerrit 的安装就完成了。

# 安装插件

进入 /Users/summer/ 解压 gerrit.war包

```bash
unzip gerrit.war -d gerrit
```

在 /Users/summer/gerrit/WEB-INF/plugins 目录下有7个 jar 文件

## Gerrit 配置 SSH-KEY

生成 rsa 公钥私钥对

```bash
ssh-keygen -t rsa
```

公钥私钥默认存放在 ~/.ssh 目录 id_rsa id_rsa.pub， 拷贝公钥， 添加到 gerrit 中

```bash
pbcopy ~/ssh/id_rsa.pub
```



## 安装

进入  /Users/summer/gerrit/WEB-INF/plugins 目录

```bash
cd ~/gerrit/WEB-INF/plugins
```

安装插件

```bash
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n replication.jar $(pwd)/replication.jar
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n hooks.jar $(pwd)/hooks.jar
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n commit-message-length-validator.jar $(pwd)/commit-message-length-validator.jar
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n download-commands.jar $(pwd)/download-commands.jar
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n reviewnotes.jar $(pwd)/reviewnotes.jar
ssh -p 29418 admin@127.0.0.1 gerrit plugin install -n singleusergroup.jar $(pwd)/singleusergroup.jar
```

查看插件列表

```bash
ssh -p 29418 admin@127.0.0.1 gerrit plugin ls
Name                           Version    Status   File
-------------------------------------------------------------------------------
commit-message-length-validator v2.16.1    ENABLED  commit-message-length-validator.jar
download-commands               v2.16.1    ENABLED  download-commands.jar
hooks                          	v2.16.1    ENABLED  hooks.jar
replication                    	v2.16.1    ENABLED  replication.jar
reviewnotes                    	v2.16.1    ENABLED  reviewnotes.jar
singleusergroup                	v2.16.1    ENABLED  singleusergroup.jar
```



刷新 plugins

```bash
ssh -p 29418 admin@127.0.0.1 gerrit plugin reload
```

或者重启服务

```bash
./gerrit.sh restart
```



## 配置 replication 

进入 /Users/summer/review_site/etc 目录，新增 replication.config 文件

```bash
touch replication.config
```

配置如下

```bash
[remote "gitlab"]
    #这里的git@gitlab.com:summerandwinter 就是官网gitlab ssh 地址
    url = git@gitlab.com:summerandwinter/${name}.git
    push = +refs/heads/*:refs/heads/*
    push = +refs/tags/*:refs/tags/*
    push = +refs/changes/*:refs/changes/*
    timtout = 30
    threads = 3     
```

进入 ~/.ssh 目录，新增 config 文件

```bash
touch config
```



# 同步 Gitlab

## gerrit上新建项目

Gerrit 上新建项目 nodejs-express

### 同步Giblab 上同名项目结构

进入 /Users/summer/env/gerrit/review_site/git

删除 nodejs-express.git 文件夹

```bash
rm -rf nodejs-express.git
```

克隆裸仓库

```bash
git clone --bare git@gitlab.com:summerandwinter/nodejs-express.git
```

刷新页面会发现 gitlab中的分支信息已经同步到gerrit上了

## 将gitlab项目同步至本地

```
git clone git@gitlab.com:summerandwinter/nodejs-express.git
```

## 将远程仓库路径改为Gerrit项目仓库路径

```bash
git remote set-url origin ssh://admin@gerrit.bmsoft.com:29418/nodejs-express
```

## 检出所有分支

### 列出所有分支

```bash
git branch -r
  origin/HEAD -> origin/master
  origin/master
```

### 依次检出到本地

```bash
git checkout HEAD
```

```BASH
git checkout master
```



### 推送所有分支和标签到Gerrit上

```bash
git push --all
```

```bash
git push --tags
```

现在Gitlab上的项目已经成功同步到 gerrit 上了，现在从 gerrit 上 clone 代码

```bash
git clone ssh://admin@gerrit.bmsoft.com:29418/nodejs-express && scp -p -P 29418 admin@gerrit.bmsoft.com:hooks/commit-msg nodejs-express/.git/hooks/
Cloning into 'nodejs-express'...
remote: Counting objects: 26, done
remote: Finding sources: 100% (26/26)
remote: Total 26 (delta 3), reused 26 (delta 3)
Receiving objects: 100% (26/26), 4.79 KiB | 2.40 MiB/s, done.
Resolving deltas: 100% (3/3), done.
commit-msg                                    100% 1392     2.2MB/s   00:00
```

修改项目中的一些文件，然后提交，这里提交的步骤跟正常的步骤没有不同

```
git add *
git commit -m 'Make some change'
```

推送到 gerrit

```bash
git push origin master:refs/for/master
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 342 bytes | 342.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2)
remote: Processing changes: refs: 1, new: 1, done
remote:
remote: SUCCESS
remote:
remote: New Changes:
remote:   http://gerrit.bmsoft.com/c/nodejs-express/+/1 一些改动
To ssh://gerrit.bmsoft.com:29418/nodejs-express
 * [new branch]      master -> refs/for/master
```

这里需要提交到 refs/for/master 分支

刷新 gerrit 首页会看到我们刚刚的提交出现在了 Outgoing reviews 列表看到刚刚提交的修改