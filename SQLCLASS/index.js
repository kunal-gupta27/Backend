const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'KartiK'
});

let q = "SHOW TABLES";

try{
connection.query(q, (err, result) => {
    if(err) throw err;
    console.log(result);   
    console.log(result.length);   
    console.log(result[0]);   
    console.log(result[1]);   
});
} catch(err){
    console.log(err);
}

connection.end();
 
// let  createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// console.log(createRandomUser());


let  getRandomUser  = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());
