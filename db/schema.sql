DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

USE burgers_db;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL DEFAULT 0,
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
