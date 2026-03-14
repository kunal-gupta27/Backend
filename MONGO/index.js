const mongoose = require('mongoose');

// let url = "https://localhost:8080/users";

main().then(()=>{
    console.log("connection sucessful");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//create a schema

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

//datbase collection main create kr rahe h
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name:"adam", 
//     email:"adam@gmail.com", 
//     age: 48,
// });
// const user2 = new User({
//     name: "bob",
//     email: "bob@gmail.com",
//     age: 48
// });

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// user1.save();  //asynchronous function or method 
// user2.save();


// insert Multiple

// User.insertMany([
//     {name:"tony", email:"tony@gmail.com", age:50},
//     {name:"bruce", email:"bruce@gmail.com", age:30},
//     {name:"peter", email:"peter@gmail.com", age:40},
// ]).then((res)=>{
//     console.log(res);
    
// })


//find method

// User.find({age:{$gte:30}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// User.findOne({age:{$gte:30}}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// User.findOne({_id:"69b4fd5a3119d2ec150a9b17"}).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

User.findById("69b4fd5a3119d2ec150a9b17").then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})