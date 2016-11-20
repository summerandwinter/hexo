---
title: 一些MySQL代码片段
description: 记录一些实用的mysql代码片段
tags:
  - mysql
  - 代码片段
  - 字段合并
id: 659
categories:
  - mysql
date: 2013-11-14 16:27:49
permalink: some-mysql-code
---

# 获取表结构
```mysql
SELECT   
cols.TABLE_SCHEMA,                    //数据库名  
cols.TABLE_NAME,                        //表名  
cols.COLUMN_NAME,                    //列名  
cols.ORDINAL_POSITION,             //列明排序  
cols.COLUMN_DEFAULT,               //默认值  
cols.IS_NULLABLE,                       //是否允许控制   
cols.DATA_TYPE,                           //数据类型  
cols.CHARACTER_MAXIMUM_LENGTH,     //最大长度（字符为单位）  
cols.CHARACTER_OCTET_LENGTH,       //最大长度（字节为单位）  
cols.NUMERIC_PRECISION,            //精度  
cols.NUMERIC_SCALE,                //小数位数  
cols.COLUMN_KEY,                   //主键  
cols.COLUMN_COMMENT                //备注  
FROM                                 
information_schema.`COLUMNS` AS cols   
WHERE cols.TABLE_SCHEMA = ’databasename’   
AND cols.TABLE_NAME = ’tablename’;  
```

其他字段

| 列名	                       |   数据类型	    | 描述                                                                                                                | 
| :---	                       |   :---	    |  :---                                                                                                               |    
| TABLE_CATALOG	               | nvarchar(128)	| 表限定符。                                                                                                          | 
| TABLE_SCHEMA	               | nvarchar(128)	| 表所有者。                                                                                                          | 
| TABLE_NAME	               | nvarchar(128)	| 表名。                                                                                                              | 
| COLUMN_NAME	               | nvarchar(128)	| 列名。                                                                                                              | 
| ORDINAL_POSITION	           | smallint	    | 列标识号。                                                                                                          | 
| COLUMN_DEFAULT	           | nvarchar(4000)	| 列的默认值。                                                                                                        | 
| IS_NULLABLE	               | varchar(3)	    | 列的为空性。如果列允许 NULL，那么该列返回 YES。否则，返回 NO。                                                      | 
| DATA_TYPE	                   | nvarchar(128)	| 系统提供的数据类型。                                                                                                | 
| CHARACTER_MAXIMUM_LENGTH	   | smallint	    | 以字符为单位的最大长度，适于二进制数据、字符数据，或者文本和图像数据。否则，返回 NULL。                             | 
| CHARACTER_OCTET_LENGTH	   | smallint	    | 以字节为单位的最大长度，适于二进制数据、字符数据，或者文本和图像数据。否则，返回 NULL。                             | 
| NUMERIC_PRECISION	           | tinyint	    | 近似数字数据、精确数字数据、整型数据或货币数据的精度。否则，返回 NULL。                                             | 
| NUMERIC_PRECISION_RADIX	   | smallint	    | 近似数字数据、精确数字数据、整型数据或货币数据的精度基数。否则，返回 NULL。                                         | 
| NUMERIC_SCALE	               | tinyint	    | 近似数字数据、精确数字数据、整数数据或货币数据的小数位数。否则，返回 NULL。                                         | 
| DATETIME_PRECISION	       | smallint	    | datetime 及 SQL-92 interval 数据类型的子类型代码。对于其它数据类型，返回 NULL。                                     | 
| CHARACTER_SET_CATALOG	       | varchar(6)	    | 如果列是字符数据或 text 数据类型，那么返回 master，指明字符集所在的数据库。否则，返回 NULL。                        | 
| CHARACTER_SET_SCHEMA	       | varchar(3)	    | 如果列是字符数据或 text 数据类型，那么返回 DBO，指明字符集的所有者名称。否则，返回 NULL。                           | 
| CHARACTER_SET_NAME	       | nvarchar(128)	| 如果该列是字符数据或 text 数据类型，那么为字符集返回唯一的名称。否则，返回 NULL。                                   | 
| COLLATION_CATALOG	           | varchar(6)	    | 如果列是字符数据或 text 数据类型，那么返回 master，指明在其中定义排序次序的数据库。否则此列为 NULL。                | 
| COLLATION_SCHEMA	           | varchar(3)	    | 返回 DBO，为字符数据或 text 数据类型指明排序次序的所有者。否则，返回 NULL。                                         | 
| COLLATION_NAME	           | nvarchar(128)	| 如果列是字符数据或 text 数据类型，那么为排序次序返回唯一的名称。否则，返回 NULL。                                   | 
| DOMAIN_CATALOG	           | nvarchar(128)	| 如果列是一种用户定义数据类型，那么该列是某个数据库名称，在该数据库名中创建了这种用户定义数据类型。否则，返回 NULL。 | 
| DOMAIN_SCHEMA	               | nvarchar(128)	| 如果列是一种用户定义数据类型，那么该列是这种用户定义数据类型的创建者。否则，返回 NULL。                             | 
| DOMAIN_NAME	               | nvarchar(128)	| 如果列是一种用户定义数据类型，那么该列是这种用户定义数据类型的名称。否则，返回 NULL。                               | 


# 合并字段

```mysql
SELECT GROUP_CONCAT(col_name order by order_col_name asc SEPARATOR ”) AS   
screen_name FROM table_name  
WHERE …  
```
# 合并字段后插入同一张表

```mysql
INSERT INTO tablename(  
clos,…,something  
      ) VALUES (  
vals,…,  
      (SELECT temp.screen_name FROM (  
      SELECT CONCAT(GROUP_CONCAT(col_name order by order_col_name asc SEPARATOR ”),’add_str’ )  
      AS screen_name   
      FROM tablename  
      WHERE…  
)temp  
      )  
      )   
```      
# 随机查询
**1.最简单的方法 在ORDER BY条件中使用 RAND()方法(资源消耗大，速度慢)**
```mysql
SELECT * FROM table ORDER BY RAND() LIMIT 1  
```
**2.询max(id) * rand()来随机获取数据**
```mysql
SELECT *  
FROM `table`  
WHERE id >= (SELECT FLOOR( MAX(id) * RAND()) FROM `table` )  
ORDER BY id LIMIT 1;  
```
**3.或者使用JOIN方法（比用WHERE效率高）**

```mysql
SELECT *  
FROM `table` AS t1 JOIN (SELECT ROUND(RAND() * (SELECT MAX(id) FROM `table`)) AS id) AS t2  
WHERE t1.id >= t2.id  
ORDER BY t1.id ASC LIMIT 1;  
```
**4.优化后**

```mysql
SELECT * FROM `table`  
WHERE id >= (SELECT floor(RAND() * (SELECT MAX(id) FROM `table`)))  
ORDER BY id LIMIT 1; 
``` 
**5.加上MIN(id)的判断**

```mysql
SELECT * FROM `table`  
WHERE id >= (SELECT floor( RAND() * ((SELECT MAX(id) FROM `table`)-(SELECT MIN(id) FROM `table`)) + (SELECT MIN(id) FROM `table`)))  
ORDER BY id LIMIT 1;  
  
SELECT *  
FROM `table` AS t1 JOIN (SELECT ROUND(RAND() * ((SELECT MAX(id) FROM `table`)-(SELECT MIN(id) FROM `table`))+(SELECT MIN(id) FROM `table`)) AS id) AS t2  
WHERE t1.id >= t2.id  
ORDER BY t1.id LIMIT 1;  
```