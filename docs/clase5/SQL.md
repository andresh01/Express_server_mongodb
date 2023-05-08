**Schema (MySQL v5.7)**

    CREATE TABLE products (
    	id serial PRIMARY KEY,
        name varchar(30) NOT NULL,
        description text,
        availableUnits int not null,
        price decimal(10,2) not null,
        category varchar(50)    
    );
    
    INSERT INTO products (name, description, availableUnits, price, category) 
    VALUES	("iphoneX", "256GB",3,800,"tecnologia"),
    		("tv samsung", "smart tv",6,200,"tecnologia"),
    		("mesa noche", "madera",2,10,"hogar"),
            ("taladro", "bosh",7,60,"herramientas");
    

---

**Query #1**

    SELECT * FROM products;

| id  | name       | description | availableUnits | price  | category     |
| --- | ---------- | ----------- | -------------- | ------ | ------------ |
| 1   | iphoneX    | 256GB       | 3              | 800.00 | tecnologia   |
| 2   | tv samsung | smart tv    | 6              | 200.00 | tecnologia   |
| 3   | mesa noche | madera      | 2              | 10.00  | hogar        |
| 4   | taladro    | bosh        | 7              | 60.00  | herramientas |

---
**Query #2**

    SELECT * FROM products WHERE name = "tv samsung";

| id  | name       | description | availableUnits | price  | category   |
| --- | ---------- | ----------- | -------------- | ------ | ---------- |
| 2   | tv samsung | smart tv    | 6              | 200.00 | tecnologia |

---
**Query #3**

    UPDATE products SET category="home" WHERE name= "tv samsung";

There are no results to be displayed.

---
**Query #4**

    SELECT category FROM products WHERE name = "tv samsung";

| category |
| -------- |
| home     |

---
**Query #5**

    DELETE FROM products WHERE name="taladro";

There are no results to be displayed.

---
**Query #6**

    SELECT * FROM products;

| id  | name       | description | availableUnits | price  | category   |
| --- | ---------- | ----------- | -------------- | ------ | ---------- |
| 1   | iphoneX    | 256GB       | 3              | 800.00 | tecnologia |
| 2   | tv samsung | smart tv    | 6              | 200.00 | home       |
| 3   | mesa noche | madera      | 2              | 10.00  | hogar      |

---
**Query #7**

    SELECT * FROM products WHERE price BETWEEN 100 AND 1000;

| id  | name       | description | availableUnits | price  | category   |
| --- | ---------- | ----------- | -------------- | ------ | ---------- |
| 1   | iphoneX    | 256GB       | 3              | 800.00 | tecnologia |
| 2   | tv samsung | smart tv    | 6              | 200.00 | tecnologia |

---
**Query #8**

    UPDATE products 
    SET availableUnits = 0;

There are no results to be displayed.

---
**Query #9**

    SELECT * FROM products;

| id  | name       | description | availableUnits | price  | category     |
| --- | ---------- | ----------- | -------------- | ------ | ------------ |
| 1   | iphoneX    | 256GB       | 0              | 800.00 | tecnologia   |
| 2   | tv samsung | smart tv    | 0              | 200.00 | tecnologia   |
| 3   | mesa noche | madera      | 0              | 10.00  | hogar        |
| 4   | taladro    | bosh        | 0              | 60.00  | herramientas |

---
**Query #10**
-- BUSCAR EN CATEGORIA EL CONTENIDO QUE TENGA LAS PALABRAS og SIN IMPORTAR QUE TIENE ADELANTE O ATRAS DE LA PALABRA
    SELECT * FROM products WHERE category like"%og%";

| id  | name       | description | availableUnits | price  | category   |
| --- | ---------- | ----------- | -------------- | ------ | ---------- |
| 1   | iphoneX    | 256GB       | 0              | 800.00 | tecnologia |
| 2   | tv samsung | smart tv    | 0              | 200.00 | tecnologia |
| 3   | mesa noche | madera      | 0              | 10.00  | hogar      |

---


[View on DB Fiddle](https://www.db-fiddle.com/)


**Schema (PostgreSQL v9.4)**

    CREATE TABLE products (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        price DECIMAL(10, 2),
        description TEXT,
        category VARCHAR(50)
    );
    
    -- Insert sample data into the 'products' table
    INSERT INTO products (id, name, price, description, category)
    VALUES
        (1, 'iPhone X', 999.99, 'Apple iPhone X with 64GB storage', 'Electronics'),
        (2, 'Samsung Galaxy S20', 799.99, 'Samsung Galaxy S20 with 128GB storage', 'Electronics'),
        (3, 'Sony PlayStation 5', 499.99, 'Sony PlayStation 5 gaming console', 'Gaming'),
        (4, 'Sike Air Max', 129.99, 'Nike Air Max running shoes', 'Sports'),
        (5, 'Dell XPS 13', 1299.99, 'Dell XPS 13 laptop with Intel Core i7 processor', 'Electronics');
    

---

**Query #1**

    SELECT * FROM products 
    ORDER BY price ASC;

| id  | name               | price   | description                                     | category    |
| --- | ------------------ | ------- | ----------------------------------------------- | ----------- |
| 4   | Sike Air Max       | 129.99  | Nike Air Max running shoes                      | Sports      |
| 3   | Sony PlayStation 5 | 499.99  | Sony PlayStation 5 gaming console               | Gaming      |
| 2   | Samsung Galaxy S20 | 799.99  | Samsung Galaxy S20 with 128GB storage           | Electronics |
| 1   | iPhone X           | 999.99  | Apple iPhone X with 64GB storage                | Electronics |
| 5   | Dell XPS 13        | 1299.99 | Dell XPS 13 laptop with Intel Core i7 processor | Electronics |

---
**Query #2**

    SELECT * FROM products 
    ORDER BY price,id ASC;

| id  | name               | price   | description                                     | category    |
| --- | ------------------ | ------- | ----------------------------------------------- | ----------- |
| 4   | Sike Air Max       | 129.99  | Nike Air Max running shoes                      | Sports      |
| 3   | Sony PlayStation 5 | 499.99  | Sony PlayStation 5 gaming console               | Gaming      |
| 2   | Samsung Galaxy S20 | 799.99  | Samsung Galaxy S20 with 128GB storage           | Electronics |
| 1   | iPhone X           | 999.99  | Apple iPhone X with 64GB storage                | Electronics |
| 5   | Dell XPS 13        | 1299.99 | Dell XPS 13 laptop with Intel Core i7 processor | Electronics |

---
**Query #3**

    SELECT * FROM products 
    ORDER BY id,price ASC;

| id  | name               | price   | description                                     | category    |
| --- | ------------------ | ------- | ----------------------------------------------- | ----------- |
| 1   | iPhone X           | 999.99  | Apple iPhone X with 64GB storage                | Electronics |
| 2   | Samsung Galaxy S20 | 799.99  | Samsung Galaxy S20 with 128GB storage           | Electronics |
| 3   | Sony PlayStation 5 | 499.99  | Sony PlayStation 5 gaming console               | Gaming      |
| 4   | Sike Air Max       | 129.99  | Nike Air Max running shoes                      | Sports      |
| 5   | Dell XPS 13        | 1299.99 | Dell XPS 13 laptop with Intel Core i7 processor | Electronics |

---
**Query #4**

    SELECT * FROM products 
    ORDER BY price,name ASC;

| id  | name               | price   | description                                     | category    |
| --- | ------------------ | ------- | ----------------------------------------------- | ----------- |
| 4   | Sike Air Max       | 129.99  | Nike Air Max running shoes                      | Sports      |
| 3   | Sony PlayStation 5 | 499.99  | Sony PlayStation 5 gaming console               | Gaming      |
| 2   | Samsung Galaxy S20 | 799.99  | Samsung Galaxy S20 with 128GB storage           | Electronics |
| 1   | iPhone X           | 999.99  | Apple iPhone X with 64GB storage                | Electronics |
| 5   | Dell XPS 13        | 1299.99 | Dell XPS 13 laptop with Intel Core i7 processor | Electronics |

---
**Query #5**

    SELECT * FROM products 
    LIMIT 2;

| id  | name               | price  | description                           | category    |
| --- | ------------------ | ------ | ------------------------------------- | ----------- |
| 1   | iPhone X           | 999.99 | Apple iPhone X with 64GB storage      | Electronics |
| 2   | Samsung Galaxy S20 | 799.99 | Samsung Galaxy S20 with 128GB storage | Electronics |

---
**Query #6**

    SELECT * FROM products 
    	WHERE price > 0
    	ORDER BY price ASC
        OFFSET 2
    	LIMIT 2;

| id  | name               | price  | description                           | category    |
| --- | ------------------ | ------ | ------------------------------------- | ----------- |
| 2   | Samsung Galaxy S20 | 799.99 | Samsung Galaxy S20 with 128GB storage | Electronics |
| 1   | iPhone X           | 999.99 | Apple iPhone X with 64GB storage      | Electronics |

---
**Query #7**

    SELECT * FROM products 
    	WHERE price > 0
    	ORDER BY price DESC
        OFFSET 2
    	LIMIT 2;

| id  | name               | price  | description                           | category    |
| --- | ------------------ | ------ | ------------------------------------- | ----------- |
| 2   | Samsung Galaxy S20 | 799.99 | Samsung Galaxy S20 with 128GB storage | Electronics |
| 3   | Sony PlayStation 5 | 499.99 | Sony PlayStation 5 gaming console     | Gaming      |

---
**Query #8**

    SELECT * FROM products 
    	WHERE price > 0 AND name LIKE 'S%'
    	ORDER BY price DESC
    	LIMIT 2;

| id  | name               | price  | description                           | category    |
| --- | ------------------ | ------ | ------------------------------------- | ----------- |
| 2   | Samsung Galaxy S20 | 799.99 | Samsung Galaxy S20 with 128GB storage | Electronics |
| 3   | Sony PlayStation 5 | 499.99 | Sony PlayStation 5 gaming console     | Gaming      |

---

[View on DB Fiddle](https://www.db-fiddle.com/)