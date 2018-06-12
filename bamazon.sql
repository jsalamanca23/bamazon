DROP DATABASE IF EXISTS bamazon;
CREATE    database bamazon;

USE bamazon;

CREATE TABLE product(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
   PRIMARY KEY (id),
   product_name VARCHAR(50) NOT NULL,
   department_name VARCHAR(50) NOT NULL,
   price INTEGER,
   stock_quantity INTEGER
);

INSERT INTO product (id, product_name, department_name, price, stock_quantity) VALUES ("Iphone X", "Phones", 1200, 50);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("A/C", "Appliances", 50, 10);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("Macbook", "Computers", 3000, 250);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("windows surface", "Computers", 800, 100);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("chicken noodle soup", "Food", 5, 500);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("Supreme shirt", "Clothes", 300, 10);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("Mac and Cheese", "Food", 5, 150);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("supreme broom", "Appliances", 160, 9);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("samsung galaxy", "Phones", 900, 50);
INSERT INTO product (product_name, department_name, price, stock_quantity) VALUES ("Vlone shirt", "Clothes", 600, 2);

   SELECT * FROM product