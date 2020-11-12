const express = require("express");

//express app
const app = express();

//register the view engine
app.set("view engine", "ejs");
app.set("views", "views");

//listen for requests
app.listen(3000);

//responding the get requests - vanilla express here
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
            const blogs = [
                {title: "Yoshi finds eggs", snippet: "Right at the begining, mario must jump on yoshi..."},
                {title: "Mario finds stars", snippet: "First of all, start your console..."},
                {title: "How to defeat Bowser", snippet: "get to the castle, find your way thru..."}
            ];
            res.render("index", {title: "Home", time: new Date, blogs});
            break;
        case("/about"):
            res.render("about", {title: "About"});
            break;
        // case("aboutme"):
        //     res.redirect("about")
        //     break;
        case("/blogs/create"):
            res.render("create", {title: "Create a new Blog"})
        default:
            res.status(404).render("404", {title: "404"});
    }
})

    //res.status(404).sendFile("./views/404.html", {root: __dirname});

