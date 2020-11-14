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
// //404
// //res.status(404).sendFile("./views/404.html", {root: __dirname});
/* RES.RENDER usando app.get

app.get("/", (req, res) => {
    const data = [
        {title: "blablablabla", snippet:"lorem20", blogContent:"lorem100"},
        {title: "fasfasfasfas", snippet:"lorem20", blogContent:"lorem100"},
        {title: "gjhghjghjghj", snippet:"lorem20", blogContent:"lorem100"},
    ];
    res.render("index", {data, moreData: "this is more separate data"})
})*/

//APP.USE + SWITCH TO CONTROL THE REQUESTS/RESPONSES
// app.use( (req, res) => {
//     switch(req.url){
//         case("/"):
//             //passing variables into to be rendered (additional title and others)
//             const blogs = [
//                 {title: "Yoshi finds eggs", snippet: "Right at the begining, mario must jump on yoshi..."},
//                 {title: "Mario finds stars", snippet: "First of all, start your console..."},
//                 {title: "How to defeat Bowser", snippet: "get to the castle, find your way thru..."}
//             ];
//             //calling the render function with aditional variables
//             res.render("index", {title: "Home", blogs})
//             break;
//         case("/about"):
//             res.render("about" , {title: "About"})
//             break;
//         case("/blogs/create"):
//             res.render("create", {title: "Create e a New blogpost"});
//             break;
//         default:
//             res.status(404).render("404", {title: "404"})
//     }
// })

//CREATE Custom Middleware
app.use( (req, res, next) => {
    console.log("new request made");
    console.log(`host: ${req.hostname}`);
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
});

//using app.get to render files from EXpress+EJS
app.get("/", (req, res) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Right at the begining, mario must jump on yoshi..."},
        {title: "Mario finds stars", snippet: "First of all, start your console..."},
        {title: "How to defeat Bowser", snippet: "get to the castle, find your way thru..."}
    ];
    res.render("index", {title: "Home", blogs})
})

app.get("/about", (req, res) => {
    res.render("about" , {title: "About"})
})

app.get("/blogs/create", (req, res) => {
    res.render("create", {title: "Create e a New blogpost"});
})

app.use((req, res) => {
    res.status(404).render("404", {title: "404"})
})



