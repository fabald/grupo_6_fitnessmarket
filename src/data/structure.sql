DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
USE fitness_db; 

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
 );


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
`product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`user_id` int(10) UNSIGNED NOT NULL,
`product_name` varchar(100) NOT NULL,
`description` text DEFAULT NULL,
`price` DECIMAL(4, 1) NOT NULL,
`shipment_type` varchar(100) DEFAULT NULL,
`product_img` varchar(200) DEFAULT NULL,
PRIMARY KEY (`product_id`),
FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);


DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
`category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`category_name` varchar(100) NOT NULL,
PRIMARY KEY (`category_id`)
);


DROP TABLE IF EXISTS `products_categories`;
CREATE TABLE `products_categories` (
`products_category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`product_id` int(10) UNSIGNED NOT NULL,
`category_id` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`products_category_id`),
FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`),
FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`)
);


DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
`brand_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`brand_name` varchar(100) NOT NULL,
PRIMARY KEY (`brand_id`)
);


DROP TABLE IF EXISTS `products_brands`;
CREATE TABLE `products_brands` (
`products_brand_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`brand_id` int(10) UNSIGNED NOT NULL,
`product_id` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`products_brand_id`),
FOREIGN KEY (`brand_id`) REFERENCES `brands`(`brand_id`),
FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
);


DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
`cart_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`buyer_name` varchar(100) NOT NULL,
`buy_date` date DEFAULT NULL,
`total` DECIMAL(4, 1) NOT NULL,
PRIMARY KEY (`cart_id`)
);


DROP TABLE IF EXISTS `product_carts`;
CREATE TABLE `product_carts` (
`product_cart_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`cart_id` int(10) UNSIGNED NOT NULL,
`product_id` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`product_cart_id`),
FOREIGN KEY (`cart_id`) REFERENCES `carts`(`cart_id`),
FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
);
