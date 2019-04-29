---
title: Findbugs整理:Malicious Code Vulnerrability
date: 2018-07-23 21:41:17
categories:
  - Findbugs
tags:
  - Findbugs
description: 整理一些 Findbugs 的 Malicious Code Vulnerrability 校验点知识
---

> 如果代码公开，可能受到恶意攻击的代码

# EI_EXPOSE_REP2
> May expose internal representation by incorporating reference to mutable object
> 引用可变对象可能会暴露内部的实现


This code stores a reference to an externally mutable object into the internal representation of the object.  If instances are accessed by untrusted code, and unchecked changes to the mutable object would compromise security or other important properties, you will need to do something different. Storing a copy of the object is better approach in many situations.

代码中对象中包含一个可变的引用类型属性，如果实例是由不受信任的代码访问，或者对可变对象做出未经检查的修改可能会导致安全问题。因此代码要做出一些修改比如：通常情况下引用这个对象的副本更好。

案例

```java
public class Pen {

  private Date createTime;

  public Date getCreateTime() {
    return this.createTime;
  }

  public void setCreateTime(Date createTime) {
    this.createTime = createTime;
  }

  public static void main(String[] args) {
    Date date = new Date(1538323200000L); // Mon Oct 01 00:00:00 CST 2018
    System.out.println(date);
    Pen pen = new Pen();
    pen.setCreateTime(date);
    date.setTime(1506787200000L); // Sun Oct 01 00:00:00 CST 2017
    System.out.println(date);
    System.out.println(pen.getCreateTime());
  }
}
```

输出

```
Mon Oct 01 00:00:00 CST 2018
Sun Oct 01 00:00:00 CST 2017
Sun Oct 01 00:00:00 CST 2017
```

由此能发现 `date` 改变时 `pen` 中的 `createTime` 也跟着变了，因为 Java 中非基本类型都是通过引用传递


改进方案

```java
public Date getCreateTime() {
    if (createTime != null) {
      return new Date(this.createTime.getTime());
      //or
      //return (Date)this.createTime.clone()
    } else {
      return null;
    }
  }

  public void setCreateTime(Date createTime) {
    if (createTime != null) {
      this.createTime = new Date(createTime.getTime());
      // or
      // this.createTime = (Date)createTime.clone();
    } else {
      this.createTime = null;
    }
  }
```

`setCreateTime` 时不直接赋值，而是传入对象的一个副本。
# MS_PKGPROTECT
> Field should be package protected
> 静态字段要用 protected 修饰


A mutable static field could be changed by malicious code or by accident. The field could be made package protected to avoid this vulnerability.

`static` 修饰的字段如果时可变的容易被恶意代码或者自己无意的修改，为了避免这种风险这个字段需要用 `protected` 修饰

案例

```java
public static final char DIGIT[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
```

改进方案

```java
protected static final char DIGIT[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
```
