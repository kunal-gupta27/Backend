const mongoose = require('mongoose');
const {Schema} = mongoose;
main()
    .then(()=> console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id:false,
            location:String,
            city:String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username: "sherlockhomes",
        addresses:[{
            location:"221B Baker Street",
            city:"London",
        }]
    });
    user1.addresses.push({location: "P32 wallStreet", city: "London"});
    let result = await user1.save();
    console.log(result);
    
}

addUsers();