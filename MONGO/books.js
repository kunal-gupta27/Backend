const mongoose = require('mongoose');

// let url = "https://localhost:8080/users";

main().then(()=>{
    console.log("connection sucessful");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const bookSchema = new mongoose.Schema({
//     title:String,
//     author:String,
//     price:Number,
// }) 

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price :{
        type : Number,
        min:[1, "Price is to low for amazon selling"],
    },
    discount:{
        type:Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
})

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69b66a787a658e96b21ca811", {price:-500},{runValidators:true}).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})

// let book1 = new Book({
//     title: "How to kill a MockingBird",
//     author: "Haroer lee",
//     price: "299",
// });

let book1 = new Book({
    title: "Marvel Comics V2",
    // author: "Haroer lee",
    price: "600",
    category:"fiction",
    genre:["comics", "Superheros", "fiction"]
});

book1.save().then((res) => {
    console.log(res); 
}).catch((err) => {
    console.log(err.errors.price.properties.message); 
});