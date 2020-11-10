const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    //set header content type
    res.setHeader("Content-type", "text/html")

    //figure out the path to the file we will respond with
    let path = "./views/"
    //create a switch to respond
    switch(req.url){
        case("/"):
            path += "index.html";
            //set a statusCode
            res.statusCode = 200;
            break;
        case ("/about"):
            path += "about.html"
            res.statusCode = 200;
            break;
        case ("/aboutme"):
            //create a redirect
            res.setHeader("Location", "about")
            res.statusCode = 301;
            res.end()
            break;
        default:
            path += "404.html"
            res.statusCode = 404;
            break;
    }
    //read the file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end()
        }else {
            //sending the data back to the browser
            res.write(data);
            res.end()
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})