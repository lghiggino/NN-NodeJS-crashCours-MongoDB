const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use( (req, res) => {
    if (req.method === "GET"){
        switch(req.url){
            case("/"):
                // res.sendFile("./lesson 01/index.html", {root: __dirname});
                res.render("review-index", {title: "Home"});
                break;
            case("/about"):
                res.render("review-about", {title: "about"});
                break;
            case("/blogs/create"):
                res.render("review-create", {title: "create"});
                break;
            default:
                res.status(404).render("review-404", {title: "404"});
        }
    }
})
