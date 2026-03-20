const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const { log } = require("console");
const ExpressError = require("./ExpressError.js");


main().then(()=>{
    console.log("connection successful");  
})
.catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
     await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// let Chat1 = new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheets",
//     created_at: new Date()
// });

// Chat1.save().then((res)=>{
//     console.log(res); 
// })


//ishi route ko kyu use kiya bcz yai route async nhi hain
//New Route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404, "Page Not Found");
    res.render("new.ejs");
});

function asynWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch(err => next(err)); 
    }
}

//New for fake watsaap -> Show route
app.get("/chats/:id", async (req, res, next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    // if(!chat){
    //    next(new ExpressError(500, "chat Not Found"));
    // }
    res.render("edit.ejs", {chat});
});

// Index Routes

app.get("/chats", async (req, res)=>{
    try{
        let chats = await Chat.find();
        console.log(chats);
        res.render("index.ejs", {chats});
    }catch(err){
        next(err);
    }
});

// //ishi route ko kyu use kiya bcz yai route async nhi hain
// //New Route
// app.get("/chats/new",(req,res)=>{
//     throw new ExpressError(404, "Page Not Found");
//     res.render("new.ejs");
// });

//Create Route
app.post("/chats",(req, res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    // console.log(newChat);
    newChat.save().then((res)=>{
        console.log("chat was saved");
        
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats")
    
});

// Edit routes
app.get("/chats/:id/edit", async (req, res)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

//update route
app.put("/chats/:id", async (req,res)=>{
    let {id}= req.params;
    let {msg: newMsg} = req.body;
    // console.log(newMsg);
    
    let updatedChat =await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new : true});
    console.log(updatedChat);
    res.redirect("/chats");
    
})

//Destroy Route
app.delete("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.get("/",(req, res)=>{
    res.send("root is working")
})

// app.use((err, req, res, next)=>{
//     console.log(err.name);
//     next(err);
// })


//Error Handling Middleware
app.use((err, req, res, next)=>{
    let{status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
});


app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
    
})