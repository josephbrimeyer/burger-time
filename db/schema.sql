CREATE DATABASE burgertime_db;
USE burgertime_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	name VARCHAR
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);
