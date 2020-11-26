const express = require("express");
const app = express();

app.set("View engine", "ejs");
app.set("views, views/");

app.listen(3000);

app.use( (req, res) => {
    if (req.method === "GET"){
        switch(req.url){
            case("/"):
                res.sendFile("./lesson 01/index.html", {root: __dirname});
                break;
            case("/blog"):
                res.sendFile("./lesson 01/blog.html", {root: __dirname});
                break;
            case("/blogs"):
                res.redirect("/blog");
                break;
            default:
                res.status(404).sendFile("./lesson 01/404.html", {root: __dirname});
        }
    }
})
