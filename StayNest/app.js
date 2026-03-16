const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");


const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";

main().then(()=>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.get("/",(req, res)=>{
    res.send("woking Fine");
})

// app.get("/testListing",async (req, res) => {
//     let samplListing = new Listing({
//         title: "My New Villa",
//         description: "By the Beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await samplListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

//Create: New & Create Route
//GET -> /listings/new -> form ->submit->
//POST -> /listings

//New Route
app.get("/listings/new",(req, res)=>{
    res.render("listings/new.ejs");
})


//Read : Show Route
// GET -> /listings/:id -> data dikhayega
app.get("/listings/:id",async (req, res)=>{
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

//Create route
app.post("/listings",async (req, res) => {
    // let{title, description, image, price, location, country} = req.body;
    // let listing = req.body.listing;
    // new Listing
    // console.log(listing);
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    
})

//UPDATE: Edit & Update Route
//edit-> GET  -> /listings/:id/edit -> edit form -> submit
//PUT-> /listings/:id

//EDIT ROUTE
app.get("/listings/:id/edit",async (req, res) => {
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})

//update route

app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}) 

//DELETE Route -> /listinigs/:id

app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
