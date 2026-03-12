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

delete from user
where age = 15;

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

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.in",400, 145),
(6, 16, "fra", "fra@yahoo.in", 10200, 1200);

INSERT INTO instauser
(id, name, email, following)
VALUES
(8,"la", "la@yahoo.in",145);
    
SELECT name, age, followers
FROM user
-- WHERE followers >= 200
-- LIMIT 2;
-- ORDER BY followers ASC;
ORDER BY followers DESC;
-- WHERE age < 16;
-- WHERE age + 1 = 16;
-- WHERE age > 15 AND followers > 200;
-- WHERE age > 15 OR followers > 200;
-- WHERE age BETWEEN 15 AND 17;
-- WHERE age  IN (14, 16);
-- WHERE age NOT IN (14, 16);
-- WHERE email IN ("juno@yahoo.in","maam@yahoo.in","bob@yahoo.in");

-- SELECT max(followers)
-- FROM user;  
-- SELECT count(age)
-- FROM user
-- where age = 14;   
SELECT SUM(age)
FROM user;   

-- SELECT age, count(id)
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers)
ORDER BY age DESC;

UPDATE user
SET followers = 600
WHERE age = 15;

SET SQL_SAFE_UPDATES=0;

-- SELECT name, age, max(followers) --it gives error bcs jisko humne group by use kiya hain wahi chal sakte hain
-- FROM user
-- GROUP BY age;
 
CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) references user(id)   -- learning foreign key
);

-- ADD Column kain liye 
ALTER TABLE user
ADD column city VARCHAR(25) DEFAULT "Delhi";
SELECT id, name, age FROM user; -- for slective output knliye

-- Drop kai liye 
ALTER TABLE user
DROP COLUMN age; 

-- Rename table name
ALTER TABLE user
RENAME TO instauser;

-- column rename
ALTER TABLE instauser
CHANGE COLUMN followers subs INT default 0;

-- Modify column
ALTER TABLE instauser
modify subs INT default 5;

SELECT * FROM instauser; -- for showing full table

TRUNCATE TABLE instauser;
DROP TABLE post;

SELECT DISTINCT age from user;







```