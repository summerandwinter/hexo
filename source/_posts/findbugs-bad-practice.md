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

## CN_IMPLEMENTS_CLONE_BUT_NOT_CLONEABLE
> Class defines clone() but doesn't implement Cloneable
> 类定义了clone()方法，但是没有声明实现Cloneable接口

This class defines a clone() method but the class doesn't implement Cloneable. There are some situations in which this is OK (e.g., you want to control how subclasses can clone themselves), but just make sure that this is what you intended.

这个不是个什麽大问题，只是确认一下是不是漏了声明。
