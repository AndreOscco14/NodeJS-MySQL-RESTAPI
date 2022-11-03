CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

-- INSEETAR DATOS EN UNA TABLES
 INSERT INTO employee VALUES
  (1,'André',1000),
  (2,'Elian',2000), 
  (3,'Héctor',3000),
  (4,'Ama',4000);