CREATE DATABASE  IF NOT EXISTS `aula1`;
use aula1;
DROP TABLE IF EXISTS `pessoa`;
CREATE TABLE `pessoa` (
  `id` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,'tere'),(2,'Marcelo'),(3,'Ana'),(4,'Marcos'),(5,'Marcos\'); drop database aula1; # '),(6,'Algum nome');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;