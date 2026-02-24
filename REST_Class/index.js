const express = require("express")
const app = express();
const port = 8080;
const path = require("path");
const  {v4: uuidv4} = require('uuid');



app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "kunal gupta",
        content: "hard work is important for successfull carrer"
    },
    {
        id: uuidv4(),
        username: "priyanshu kumar",
        content: "i love gaming"
    },
]


app.get("/posts", (req,res) => {
    let {username, content} = req.body;

    posts.push({
        id: uuidv4(),
        username,
        content
    })
    res.render("/posts");
})

app.get("/posts/new", (req, res)=> {
    res.render("new.ejs");
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    res.send("patch req working");
    
})

app.post("/posts",(req,res) => {
    let {username, content} = req.body;
    posts.push({username, content})
    res.redirect("/posts")   
})

app.get("/posts/:id", (req, res)=> {
    let {id} = req.params;
    let post = posts.find((p) =>(id === p.id))
    console.log(id);
    // res.send("request working");
    res.render("show.ejs", {post})
    
})

app.listen(port, () => {
    console.log("listening to port : 8080");
    
})