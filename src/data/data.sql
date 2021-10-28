LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Tomas','Kaufmann','tomaskaufmann13@gmail.com','$2a$10$kd1yJcWeFayHBWypImcjoeOw6OTur7LyBCVlOd0jpR.ytL3u1fSZm','userPicture-1632794845730.jpeg'),
(2,'Nicolas','Blasutig','nicoblasutig@gmail.com','','userPicture-image0.jpeg'),
(3,'Fabian','Alderete','fabialderete@gmail.com','','userPicture-image1.jpeg'),
(4,'Brian','Catrini','briancatrini87@gmail.com','','userPicture-image2.jpeg');
UNLOCK TABLES;

LOCK TABLES `categories` WRITE;
INSERT INTO `categories` VALUES (1,'Indumentaria'),(2,'Suplementos'),(3,'Equipamiento'), (4, 'Musculacion');
UNLOCK TABLES;

LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,'Banco Plano','Banco plano con imagen',890.50,'Techno Gym','product-1632004612392.jpg',1,4),
(2,'Mancuerna Hexagonal','Mancuerna Hexagonal de 25kg',650,'Techno Gym','product-1632005064113.jpg',1,4),
(3,'Soga Para Saltar','Soga Para Saltar Naranja Entrenamiento Gym Fitness',399,'Techno Gym','product-1632693718371.jpg',1,2),
(4,'Life Pro Whey','Life Pro Whey Protein 2kg New',5822.73,'Techno Gym','product-image5.jpg',1,2),
(5,'Remera Training FILA','Remera Training Negra FILA Basic Sport Hombre',2592,'Techno Gym','product-image6.jpg',1,2);
UNLOCK TABLES;


LOCK TABLES `carts` WRITE;
INSERT INTO `carts` VALUES (1,1,'2021-02-25',890.50),(2,2,'2021-03-10',650.50),
(3,3,'2021-05-02',399.00),(4,1,'21-10-04',5822.73),(5,1,'2021-10-18',2592.00);
UNLOCK TABLES;


LOCK TABLES `product_carts` WRITE;
INSERT INTO `product_carts` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
UNLOCK TABLES;