## SQL PRACTISE

```


CREATE DATABASE college;

-- USE college; 
-- CREATE TABLE student(
-- 	roll_no INT,
--     name VARCHAR(30),
--     age INT
-- );

-- INSERT INTO student
-- VALUES
-- (101, "adam", 12),
-- (102, "bob", 14);

-- SELECT * FROM student;

CREATE DATABASE college;  -- --it gives me error

CREATE DATABASE IF NOT EXISTS college;   -- it gives me warning that i have db with this name
CREATE DATABASE IF NOT EXISTS instagram;  -- it create the db new

-- db ko delete krnai k liye

DROP DATABASE college;
-- DROP DATABASE IF EXISTS college;   -- yai tab delete krega tab db hoga

-- db kitne h humara pass uske liye cmd

SHOW DATABASES;

USE instagram;

SHOW TABLES;   -- kisi bhi table ko dekhne kai liye pahle usko use kaeinge and then show tables

-- creation of table

CREATE TABLE user (
	id INT,
	-- id 	INT PRIMARY KEY,  -- primary key ko do tarike sai likh sakte h
    age INT,
    name VARCHAR(30) NOT NULL,  -- we define a constraint
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age>=13),  -- check constraint use kiya h
    PRIMARY KEY (id)
);


INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob@yahoo.in", 120, 120),
(3, 16, "mam", "maam@yahoo.in", 300, 306),
(4, 17, "juno", "juno@yahoo.in", 200, 145);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) references user(id)  --  learning foreign key
);

SELECT id, name, age FROM user; -- for slective output knliye

SELECT * FROM user; -- for showing full table

SELECT DISTINCT age from user;





```