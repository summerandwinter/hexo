---
title: Findbugs整理:Bad Practice
date: 2018-07-23 17:10:57
categories:
  - Findbugs
tags:
  - Findbugs
description: 整理一些 Findbugs 的 Bad practice 校验点知识
---
---
# Bad practice
# 不好的习惯
## Equals method should not assume anything about the type of its argument
## 实现类的equals方法时，不应该对参数有任何的预先设定
BC_EQUALS_METHOD_SHOULD_WORK_FOR_ALL_OBJECTS
The equals(Object o) method shouldn't make any assumptions about the type of o. It should simply return false if o is not the same type as this.

实现类的 `equals(Object o)` 方法时，不应该对参数有任何的预先设定,如果 `o` 的类型不是当前类的类型时应该直接返回 `false`。

案例

```java
public class Foo {
   // some code
   public void equals(Object o) {
     Foo other = (Foo) o;
    // the real equals code
  }
}
```

改进方案

```java
public class Foo {
   // some code
   public void equals(Object o) {
     if (o instanceof Foo ){
       // the real equals code
     } else {
       return false;
     }
  }
}
```

如果直接设定参数o肯定是Foo类的一个对象，在函数调用时，如果参数 `o` 不是一个 `Foo` 类或其子类，就会导致代码会抛出一个 `ClassCastException` 。因此在实现 `equals` 方法，应该加一个判断，如果参数 `o` 不是一个 `Foo` 类对象，则返回 `false`。

## Check for sign of bitwise operation
## 检查位操作符运行是否合理

BIT_SIGNED_CHECK

案例
```java
((event.detail & SWT.SELECTED) > 0)
```
上面的案例判断语句中使用了位操作，并且进行了 `>0`  的比较。这个语句的本意应该是两个数字进行与操作后是否还有非0的位数，但是如果与操作后的结果为负数时就会变成一个 BUG , 最好用 `!=0` 替换  `>0`。

## Class implements Cloneable but does not define or use clone method
## 类实现了 `Cloneable` 接口但是没有声明或使用到 `clone` 方法

CN_IDIOM

按照惯例，实现此接口的类应该使用公共方法重写 Object.clone（它是受保护的），以获得有关重写此方法的详细信息。因为 `clone` 方法是 `Object` 类的方法，所以当前类不去声明这个方法，不会编译不通过。但是，`clone` 是需要逐个字段去复制的，所以没有声明`clone` 方法是不对的。

## clone method does not call super.clone()
## clone 方法中没有调用 super.clone() 方法

CN_IDIOM_NO_SUPER_CALL

This non-final class defines a clone() method that does not call super.clone(). If this class ("A") is extended by a subclass ("B"), and the subclass B calls super.clone(), then it is likely that B's clone() method will return an object of type A, which violates the standard contract for clone().

If all clone() methods call super.clone(), then they are guaranteed to use Object.clone(), which always returns an object of the correct type.

非final的类，定义了clone()方法，却在方法中没有调用super.clone()。
看上去，不应该调用super.clone()。如果A是B的父类，那么B调用super.clone()，则B的clone方法返回的是A的实例，看上去是错的。
但是，如果所有的clone()方法都调用了super.clone()，则最终调用的是Object.clone()，那就能返回正确的类型。

## Class defines clone() but doesn't implement Cloneable
## 类定义了clone()方法，但是没有声明实现Cloneable接口

CN_IMPLEMENTS_CLONE_BUT_NOT_CLONEABLE

This class defines a clone() method but the class doesn't implement Cloneable. There are some situations in which this is OK (e.g., you want to control how subclasses can clone themselves), but just make sure that this is what you intended.

这个不是个什麽大问题，只是确认一下是不是漏了声明。




# Malicious code vulnerability
# 可能受到恶意攻击的代码

> 如果代码公开，可能受到恶意攻击的代码

### May expose internal representation by incorporating reference to mutable object
### 引用可变对象可能会暴露内部的实现
EI_EXPOSE_REP2

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

## Field should be package protected
## 静态字段要用 protected 修饰
MS_PKGPROTECT

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
