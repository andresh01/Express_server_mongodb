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