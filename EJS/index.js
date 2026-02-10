const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

// app.get("/",(req, res) => {
//     res.send("this is home");
    
// })

//***********************learning EJS ************ */
app.get("/",(req, res) => {
    res.render("home.ejs");
})

app.get("/hello",(req, res) => {
    res.send("i am enjoying.");
})

//************* Passing data to EJS**************/

app.get("/rolldice",(req, res) => {
    let diceVal = Math.floor(Math.random() * 6 ) +1;
    res.render("rolldice.ejs", {num: diceVal});
})


//******************instagram ejs****************** */
// app.get("/ig/:username",(req, res) => {
//     const followers = ["adam", "bob", "steve","abc"]
//     let {username} = req.params;
//     // console.log(username);
//     res.render("instagram.ejs", {username, followers})
    
// })

//************instagram ejs********* */

app.get("/ig/:username",(req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username]
    if(data){
    res.render("instagram.ejs",{data})
    }else{
        res.render("error.ejs");
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);  
})