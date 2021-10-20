LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Tomas','Kaufmann','tomaskaufmann13@gmail.com','$2a$10$kd1yJcWeFayHBWypImcjoeOw6OTur7LyBCVlOd0jpR.ytL3u1fSZm','userPicture-1632794845730.jpeg'),
(2,'Nicolas','Blasutig','nicoblasutig@gmail.com','','userPicture-image0.jpeg'),
(3,'Fabian','Alderete','fabialderete@gmail.com','','userPicture-image1.jpeg'),
(4,'Brian','Catrini','briancatrini87@gmail.com','','userPicture-image2.jpeg');
UNLOCK TABLES;


LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,1,'Banco Plano','Banco plano con imagen',890.50,'Gratis','product-1632004612392.jpg'),
(2,4,'Mancuerna Hexagonal','Mancuerna Hexagonal de 25kg',650,'Gratis','product-1632005064113.jpg'),
(3,2,'Soga Para Saltar','Soga Para Saltar Naranja Entrenamiento Gym Fitness',399,'Gratis','product-1632693718371.jpg'),
(4,3,'Life Pro Whey','Life Pro Whey Protein 2kg New',5822.73,'Gratis','product-image5.jpeg'),
(5,4,'Remera Training FILA','Remera Training Negra FILA Basic Sport Hombre',2592,'Gratis','product-image6.jpeg');
UNLOCK TABLES;


LOCK TABLES `categories` WRITE;
INSERT INTO `categories` VALUES (1,'Indumentaria'),(2,'Suplementos'),(3,'Equipamiento');
UNLOCK TABLES;


LOCK TABLES `products_categories` WRITE;
INSERT INTO `products_categories` VALUES (1,1,3),(2,2,3),(3,3,3),(4,4,2),(5,5,1);
UNLOCK TABLES;


LOCK TABLES `brands` WRITE;
INSERT INTO `brands` VALUES (1,'NutriMarket'),(2,'Life Pro'),(3,'Mir Fitness'),(4,'Assault Fitness'),(5,'FILA'),(6,'Under Armour');
UNLOCK TABLES;


LOCK TABLES `products_brands` WRITE;
INSERT INTO `products_brands` VALUES (1,3,3),(2,4,1),(3,4,2),(4,2,4),(5,3,5);
UNLOCK TABLES;


LOCK TABLES `cart` WRITE;
INSERT INTO `cart` VALUES (1,'Tomas Kaufmann','2021-02-25',890.50),(2,'Brian Catrini','2021-03-10',650),
(3,'Nicolas Blasutig','2021-05-02',399),(4,'Fabian Alderete','21-10-04',5822.73),(5,'Brian Catrini','2021-10-18',2592);
UNLOCK TABLES;


LOCK TABLES `product_cart` WRITE;
INSERT INTO `product_cart` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
UNLOCK TABLES;