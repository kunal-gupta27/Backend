 CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email varchar(50) unique not null,
    password varchar(50) not null
 );