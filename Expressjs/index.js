const express = require("express");
const app = express();

console.log(app);

let port = 3001;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);  
})


//**********************handling the request***************** */

app.use((req, res) => {
    // console.log(req);
    console.log("request received");
    //  
    // res.send({
    //     name: "apple",
    //     color: "red",
    // })
    let code = "<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>"
    res.send(code);
    
});


//***********learning get routing************************ */
app.get("/",(req, res) => {
    res.send("hello i am  root part");
})

app.get("/apple",(req, res) => {
    res.send("you connected apple part");
})

app.get("/orange",(req, res) => {
    res.send("you connected orange part");
})

// app.get("*",(req, res) => {
//     res.send("this path does not exist");
// })

//*******************learning post********************  */
app.post("/",(req, res) => {
    res.send("you send a post request for root path to post");
})


//***************learning path parameter (req.paramas) ******************/


app.get("/:username/:id",(req, res) => {
    // console.log(req.params);
    let {username, id} = req.params;
    console.log(`welcome to the page of @${username}. ${id}`);
    
    
})


//**************learning query string******************** */

app.get("/search",(req, res)=>{
    let {q} = req.query; 
    if(!q){
        res.send(`<h1>nothing search</h1>`)
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
    
})

