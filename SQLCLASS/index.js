const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app=express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

const connection =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'KartiK'
});

let  getRandomUser  = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
];
};



// let q = "SHOW TABLES";

//inserting new data
// let q = "INSERT INTO user(id, username, email, password) VALUE ?";

// let data = [];
// for(let i=1;i<=100;i++){
//    data.push(getRandomUser());
// }

// let users = [
//   ["123b","123_newuserb","abc@gmail.comb","abcb"],
//   ["123c","123_newuserc","abc@gmail.comc","abcc"]
// ];

// fake user ka data inserrt ho rgha bhain 100

 
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


// let  getRandomUser  = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.image.avatar(),
//     faker.internet.password(),
// ];
// };

// console.log(getRandomUser());


app.get("/",(req, res)=> {
  let q = `SELECT count(*) FROM user`;
  try{
  connection.query(q, (err, result) => {
    if(err) throw err;
    let count =  result[0]["count(*)"];
    res.render("home.ejs", {count});     

});
} catch(err){
    console.log(err);
    res.send("some error in db")
}
});

// show routes

app.get("/user",(req, res)=>{
    let q = `SELECT * FROM user`;
    try{
  connection.query(q, (err, users) => {
    if(err) throw err;
    // console.log(result);  
    res.render("showusers.ejs", {users});
});
} catch(err){
    console.log(err);
    res.send("some error in db")
}
  
});

//EDIT ROUTE

app.get("/user/:id/edit", (req, res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];  
      res.render("edit.ejs", {user});
  });
  } catch(err){
      console.log(err);
      res.send("some error in db")
  }
});

//update (db) route

app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass,username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];  
      if(formPass != user.password){
        res.send("Wrong password");    // authentication
      }else{
        let q2 = `UPDATE user SET username= '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result)=>{
            if(err) throw err;
            res.redirect("/user");
        });
      
      }
  });
  } catch(err){
      console.log(err);
      res.send("some error in db")
  }
});

app.listen("8080", ()=>{
   console.log("server is listening to port 8080");
   
})


// try{
// connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);   
//     // console.log(result.length);   
//     // console.log(result[0]);   
//     // console.log(result[1]);   
// });
// } catch(err){
//     console.log(err);
// }

// connection.end();