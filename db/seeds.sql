
-- A few entries to populate the new table created using schema.sql
INSERT INTO burgers (name,consumed) VALUES ('in and out ',false);
INSERT INTO burgers (name,consumed) VALUES ('mcdonalds',false);
INSERT INTO burgers (name,consumed) VALUES ('western',false);


### Schema

-- CREATE DATABASE burger_db;
-- USE burger_db;

-- CREATE TABLE burgers (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	consumed BOOLEAN NOT NULL DEFAULT false,
-- 	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
-- );
