DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
USE fitness_db; 

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `users_email_unique` (`email`)
);


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
`product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`user_product_id` int(50) NOT NULL,
`product_name` varchar(100) NOT NULL,
`description` text DEFAULT NULL,
`price` DECIMAL(4, 1) NOT NULL,
`shipment_type` varchar(100) DEFAULT NULL,
`product_img` varchar(200) DEFAULT NULL,
PRIMARY KEY (`product_id`),
KEY `products_user_product_id_foreign` (`user_product_id`),
CONSTRAINT `products_user_product_id_foreign` FOREIGN KEY (`user_product_id`) REFERENCES `users`(`user_id`)
);


DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
`categories_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`category_name` varchar(100) NOT NULL,
PRIMARY KEY (`caregories_id`)
);


DROP TABLE IF EXISTS `products_categories`;
CREATE TABLE `products_categories` (
`products_categories_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`products_table_id` int(10) NOT NULL,
`categories_table_id` tinyint(10) NOT NULL,
PRIMARY KEY (`products_categories_id`),
KEY `products_categories_products_table_id_foreign` (`products_table_id`),
KEY `products_categories_categories_table_id_foreign` (`categories_table_id`),
CONSTRAINT `products_categories_products_table_id_foreign` FOREIGN KEY (`products_table_id`) REFERENCES `products`(`product_id`),
CONSTRAINT `products_categories_categories_table_id_foreign` FOREIGN KEY (`categories_table_id`) REFERENCES `categories`(`categories_id`)
);


DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
`brands_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`brand_name` varchar(100) NOT NULL,
PRIMARY KEY (`brands_id`)
);


DROP TABLE IF EXISTS `products_brands`;
CREATE TABLE `products_brands` (
`products_brands_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`brands_chart_id` int(10) NOT NULL,
`products_chart_id` int(10) NOT NULL,
PRIMARY KEY (`products_brands_id`),
KEY `products_brands_brands_chart_id_foreign` (`brands_chart_id`),
KEY `products_brands_products_chart_id_foreign` (`products_chart_id`),
CONSTRAINT `products_brands_brands_chart_id_foreign` FOREIGN KEY (`brands_chart_id`) REFERENCES `brands`(`brands_id`),
CONSTRAINT `products_brands_products_chart_id_foreign` FOREIGN KEY (`products_chart_id`) REFERENCES `products`(`product_id`)
);


DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
`cart_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`buyer_name` varchar(100) NOT NULL,
`buy_date` date DEFAULT NULL,
`total` DECIMAL(4, 1) NOT NULL,
PRIMARY KEY (`cart_id`)
);


DROP TABLE IF EXISTS `product_cart`;
CREATE TABLE `product_cart` (
`product_cart_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`id_cart` int(10) NOT NULL,
`id_product` int(10) NOT NULL,
PRIMARY KEY (`items_cart_id`),
KEY `product_cart_id_cart_foreign` (`id_cart`),
KEY `product_cart_id_product_foreign` (`id_product`),
CONSTRAINT `product_cart_id_cart_foreign` FOREIGN KEY (`id_cart`) REFERENCES `cart`(`cart_id`),
CONSTRAINT `product_cart_id_product_foreign` FOREIGN KEY (`id_product`) REFERENCES `products`(`product_id`)
);


