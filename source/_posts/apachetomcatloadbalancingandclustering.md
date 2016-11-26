---
title: Apache与Tomcat实现负载均衡和集群
id: 690
categories:
  - Apache
date: 2016-02-19 14:49:01
tags:
  - Apache
  - Tomcat
  - 负载均衡
  - 集群
permalink: apachetomcatloadbalancingandclustering
---


参照网上的教程实现了Apache与Tomcat实现负载均衡和集群，中间走了一些弯路，最终还是配置成功了。不过只是配置成功了，中间很多的参数和实现的原理都不是很明白，留到以后继续深挖，这里做个记录备忘。
<!--more-->
# 前期准备

我用了两台机器，机器A和机器B

Win7 32位   Java 版本 "1.8.0_20"

机器A的IP为：192.168.1.72 部署 apache和两个tomat(tomcat1,tomcat2)

机器B的IP为：192.168.1.105 部署一个tomcat（tomcat3）

**软件版本和下载地址**

[httpd-2.2.31-x86-r2](http://www.apachehaus.com/downloads/httpd-2.2.31-x86-r2.zip)

[apache-tomcat-7.0.68](http://mirrors.cnnic.cn/apache/tomcat/tomcat-7/v7.0.68/bin/apache-tomcat-7.0.68.zip)

[mod_jk-1.2.30-httpd-2.2.3.so](http://archive.apache.org/dist/tomcat/tomcat-connectors/jk/binaries/win32/jk-1.2.30/mod_jk-1.2.30-httpd-2.2.3.so)

**调试Apache和Tomcat**

首先要在两台机器上成功启动apache和tomcat

**部署Apache**

在机器A上解压httpd-2.2.31-x86-r2.zip，把apache22文件夹拷贝到硬盘根目录，最好是根目录，默认的配置都是配的跟目录，在windows环境下要修改很多配置文件才能启动成功，如果是根目录能直接启动成功。

**部署Tomcat**

在机器A上拷贝两个tomcat分别命名为tomcat1,tomcat2,在机器B拷贝一个tomcat,命名为tomcat3。

由于在机器A上有两个tomcat，为避免端口冲突tomcat1保持默认配置，修改tomcat2端口。

![](http://sanyecao.qiniudn.com/assets/images/articles/tomcat-config-port.jpg "修改Tomcat端口。")

如果Apache和3个Tomcat能成功启动这里步就算完成了。

为能在页面上直观的感受到负载均衡的效果需要对tomcat中的首页做一点小的改动
```html
<%@ page contentType=”text/html; charset=utf-8” %>
<html><head><title>Cluster Test</title></head>
<body>
tomcat1
</body>
</html>
```
用上面的代码替换tomcat 下`webapps\ROOT`目录中的`index.jsp`文件，并把tomcat1替换当前所在tomcat的名称。

# 负载均衡

**给apache安装mod_jk链接模块**

把`mod_jk-1.2.30-httpd-2.2.3.so`重名名为`mod_jk.so`（重命名不是必须的，也可以不重命名，这里为了名称的简洁，个人习惯）拷贝到apache22下的`modules`文件夹。

在config目录下新建两个文件`mod_jk.conf`和`workers.properties`

下面是我的配置文件

mod_jk.conf
```
 #加载mod_jk Module
 LoadModule jk_module modules/mod_jk.so
 #指定 workers.properties文件路径
 JkWorkersFile conf/workers.properties
 #指定那些请求交给tomcat处理,"controller"为在workers.propertise里指定的负载分配控制器
 JkMount /* controller
```
workers.properties
```
 worker.list = controller,tomcat1,tomcat2,tomcat3 #server 列表
 #========tomcat1========
 worker.tomcat1.port=8009          #ajp13 端口号，在tomcat下server.xml配置,默认8009
 worker.tomcat1.host=192.168.1.72  #tomcat1（机器A）的主机地址，如不为本机，请填写ip地址
 worker.tomcat1.type=ajp13
 worker.tomcat1.lbfactor = 1       #server的加权比重，值越高，分得的请求越多
 #========tomcat2========
 worker.tomcat2.port=8109 
 worker.tomcat2.host=192.168.1.72   #机器A
 worker.tomcat2.type=ajp13
 worker.tomcat2.lbfactor = 1 
 #========tomcat3========
 worker.tomcat3.port=8009 
 worker.tomcat3.host=192.168.1.105   #机器B
 worker.tomcat3.type=ajp13
 worker.tomcat3.lbfactor = 1 
 #========controller,负载均衡控制器========
 worker.controller.type=lb
 worker.controller.balanced_workers=tomcat1,tomcat2,tomcat3   #指定分担请求的tomcat
 worker.controller.sticky_session=1
 ```
在`httpd.conf`最后加上：
``` # JK module settings
 Include conf/mod_jk.conf
 ```
重启apache服务访问 http://192.168.1.72 ,不断刷新页面，如果页面上随机轮换出现tomcat1,tomcat2,tomcat3字样则说明配置成功。

到这里apache和tomcat的负载均衡就配置好了，apache会按照权重值转发请求到三个tomcat中的一个，但是现在每个tomcat之间还没有实现session复制（也就是集群），每次转发到不同的tomcat时session都会不一样，接下来我们要做的就是配置tomcat的集群。

# 集群

修改tomcat1,tomcat2,tomcat3配置文件`server.xml`中的：
```xml
<Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"/>
```

这个版本的tomcat中默认为被注释状态，取消注释，并修改为下面这样

![](http://sanyecao.qiniudn.com/assets/images/articles/tomcat-config-xml.jpg "修改Tomcat配置")

下面为文字版
```xml
<Cluster className=”org.apache.catalina.ha.tcp.SimpleTcpCluster” channelSendOptions=”6”>
 <Manager className=”org.apache.catalina.ha.session.BackupManager”
 expireSessionsOnShutdown=”false”
 notifyListenersOnReplication=”true”
 mapSendOptions=”6”/>
 <Manager className=”org.apache.catalina.ha.session.DeltaManager”
 expireSessionsOnShutdown=”false”
 notifyListenersOnReplication=”true”/>
 <Channel className=”org.apache.catalina.tribes.group.GroupChannel”>
 <Membership className=”org.apache.catalina.tribes.membership.McastService”
 bind=”192.168.1.72”
 address=”228.0.0.4”
 port=”45564”
 frequency=”500”
 dropTime=”3000”/>
 <Receiver className=”org.apache.catalina.tribes.transport.nio.NioReceiver”
 address=”192.168.1.72”
 port=”4001”
 selectorTimeout=”100”
 maxThreads=”6”/>
 <Sender className=”org.apache.catalina.tribes.transport.ReplicationTransmitter”>
 <Transport className=”org.apache.catalina.tribes.transport.nio.PooledParallelSender”/>
 </Sender>
 <Interceptor className=”org.apache.catalina.tribes.group.interceptors.TcpFailureDetector”/>
 <Interceptor className=”org.apache.catalina.tribes.group.interceptors.MessageDispatch15Interceptor”/>
 <Interceptor className=”org.apache.catalina.tribes.group.interceptors.ThroughputInterceptor”/>
 </Channel>
 <Valve className=”org.apache.catalina.ha.tcp.ReplicationValve”
 filter=”..gif;..js;..jpg;..png;..htm;..html;..css;..txt;”/>
 <ClusterListener className=”org.apache.catalina.ha.session.ClusterSessionListener”/>
 </Cluster>
```
依次重启tomcat1,tomcat2,tomcat3,如果控制台打印出下面这样的字样说明集群配置成功

![](http://sanyecao.qiniudn.com/assets/images/articles/cmd-output.jpg "控制台打印结果")
接下来我们来验证下集群配置是否成功

1.修改每个tomcat下`webapps\ROOT\WEB-INF`目录下的`web.xml`文件中加入
```xml
<distrbutable/>
```
配合实现session共享

2.修改每个tomcat 下`webapps\ROOT`目录中的`index.jsp`

```jsp
<%@ page contentType=”text/html; charset=utf-8” %>
<%@ page import=”java.util.*” %>
<html><head><title>Cluster App Test</title></head>
<body>
<%
System.out.println(“SessionID:” + session.getId());
%>
Server Info:
<%
out.println(request.getServerName() + “ : “ + request.getServerPort()+”<br>”);%>
<%
out.println(“<br> ID “ + session.getId()+”<br>”);

%>
</body>
</html>
```

3.重启tomcat,访问 http://192.168.1.72 观察每个tomcat控制台打印的信息，如果每个tomcat打印的sessionid都一样说明集群配置成功了。