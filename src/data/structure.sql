DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
USE fitness_db; 

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_img` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`name` varchar(100) NOT NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
`id` int(10) UNSIGNED NOT NULL auto_increment,
`product_name` varchar(100) NOT NULL,
`description` text DEFAULT NULL,
`price` DECIMAL(6, 2) NOT NULL,
`brand_name` varchar(100) NOT NULL,
`product_img` varchar(200) DEFAULT NULL,
`user_id` int(10) UNSIGNED NOT NULL,
`category_id` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)
);

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`user_id` int(10) UNSIGNED NOT NULL,
`buy_date` date DEFAULT NULL,
`total` DECIMAL(6, 2) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);


DROP TABLE IF EXISTS `product_carts`;
CREATE TABLE `product_carts` (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`cart_id` int(10) UNSIGNED NOT NULL,
`product_id` int(10) UNSIGNED NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`),
FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);
