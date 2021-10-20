LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Kaufmann','Tomas','tomaskaufmann13@gmail.com','$2a$10$kd1yJcWeFayHBWypImcjoeOw6OTur7LyBCVlOd0jpR.ytL3u1fSZm','userPicture-1632794845730.jpeg');
UNLOCK TABLES;

LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,1,'Banco Plano','Banco plano con imagen',890.50,'product-1632004612392.jpg');
UNLOCK TABLES;

LOCK TABLES `categories` WRITE;
INSERT INTO `categories` VALUES (1,'Indumentaria'),(2,'Suplementos'),(3,'Equipo de entrenamiento');
UNLOCK TABLES;

LOCK TABLES `products_categories` WRITE;
INSERT INTO `products_categories` VALUES ();
UNLOCK TABLES;

LOCK TABLES `brands` WRITE;
INSERT INTO `brands` VALUES ();
UNLOCK TABLES;

LOCK TABLES `products_brands` WRITE;
INSERT INTO `products_brands` VALUES ();
UNLOCK TABLES;

LOCK TABLES `cart` WRITE;
INSERT INTO `cart` VALUES ();
UNLOCK TABLES;

LOCK TABLES `items_cart` WRITE;
INSERT INTO `items_cart` VALUES ();
UNLOCK TABLES;