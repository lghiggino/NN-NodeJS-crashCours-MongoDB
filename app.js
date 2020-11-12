const express = require("express");

//express app
const app = express();

//listen for requests
app.listen(3000);

//responding the get requests
app.get( "/", (req, res) => {
    console.log(req.url);
     //express response send method - auto setHeader and statusCode
    //res.send("<p> home page </p> <a href='/about'>about</a>")
    res.sendFile("./views/index.html", {root: __dirname})
})
   
app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root: __dirname});
})  

//redirects
app.get("aboutme", (req, res) => {
    res.redirect("/about")
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname});
})
