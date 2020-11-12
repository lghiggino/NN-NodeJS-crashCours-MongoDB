const express = require("express");

//express app
const app = express();

//register the view engine
app.set("view engine", "ejs");
app.set("views", "views");

//listen for requests
app.listen(3000);

//responding the get requests
// app.get("/", (req, res) => {
//     //express response send method - auto setHeader and statusCode
//     res.sendFile("./views/index.html", {root: __dirname});
// })

// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", {root: __dirname});
// })
//     //sending directhtml - res.send("<p> home page </p> <a href='/about'>about</a>")
    
// //redirects
// app.get("aboutme", (req, res) => {
//     res.redirect("about")
// })

//404 page
app.use( (req, res) => {
    switch(req.url){
        case("/"):
            res.render("index");
            break;
        case("/about"):
            res.render("about");
            break;
        case("aboutme"):
            res.redirect("about")
            break;
        default:
            res.status(404).sendFile("./views/404.html", {root: __dirname});
    }
})

    //res.status(404).sendFile("./views/404.html", {root: __dirname});

