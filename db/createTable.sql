-- create quotes table and db
DROP DATABASE near;
CREATE DATABASE near;

USE near;

CREATE TABLE IF NOT EXISTS quotes (
    id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    quote VARCHAR(200),
    author VARCHAR(100)
);
