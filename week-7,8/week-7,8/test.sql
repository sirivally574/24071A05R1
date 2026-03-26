CREATE DATABASE eshop;
USE eshop;
CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50),
password VARCHAR(50)
);
CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
price DOUBLE
);
CREATE TABLE transactions(
id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT,
product_name VARCHAR(100),
amount DOUBLE,
WAD Week - 7,8 16
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
USE eshop;
INSERT INTO products(name, price) VALUES ('Shoes', 999);
INSERT INTO products(name, price) VALUES ('Bag', 499);
INSERT INTO products(name, price) VALUES ('Watch', 1299);
INSERT INTO products(name, price) VALUES ('T-Shirt', 299);
INSERT INTO products(name, price) VALUES ('Sunglasses', 699);
INSERT INTO products(name, price) VALUES ('Headphones', 899);
INSERT INTO products(name, price) VALUES ('Water Bottle', 199);
INSERT INTO products(name, price) VALUES ('Wallet', 399);
SELECT * FROM products;
SHOW DATABASES;
SELECT DATABASE();
USE eshop;
SELECT * FROM products;