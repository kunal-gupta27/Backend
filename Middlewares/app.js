const express = require("express");
const app = express();

//*******************Random Middleware -> response send****************

// app.use((req, res, next)=>{
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("Hi, I am 1st middleware");
//     // res.send("middleware finished");
//     next();  
//     // console.log("this is after next"); // it will be execute
//     // return next();  
//     // console.log("this is after next"); // it will not be execute
// });

// app.use((req, res, next)=>{
//     console.log("Hi, I am 2nd middleware");
//     next();
// })

// //Logger  -  morgan
// app.use((req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time); //it will give you the output-> GET
//     next();
// })

// app.use((req, res, next) =>{
//     console.log("I am only for random");
//     next();
// })

// app.use("/api",(req, res, next)=>{
//     let {token} = req.query;
//     if(token ==="giveaccess"){        //Normal tarika to tokenize the query String
//         next();
//     }
//     res.send("Access Denied");
// })

// app.use ko use naa krke hum function ko variable main store karakr 
//get request main kai sath likhte hain 
const checkToken=(req, res, next)=>{
    let {token} = req.query;
    if(token ==="giveaccess"){        //Normal tarika to tokenize the query String
        next();
    }
    // res.send("Access Denied");
    throw new Error("Access Denied");
};

app.get("/api",checkToken, (req, res)=>{
    res.send("data");
    
})

// app.get("/wrong", (req, res) =>{
//     abcd = abcd;
// })

// these are response to the server
app.get("/",(req, res)=>{
    res.send("Hi, I am root");
})

app.get("/random",(req, res)=>{
    res.send("this is a random page");
})

//404
app.use((rq, res) =>{
    res.send("page not found");
})
app.listen("8080",()=>{
    console.log("server listening to port 8080");
})