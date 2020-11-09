const http = require("http");
const fs = require("fs");
const _ = require("lodash");


const server = http.createServer((req, res) => {
    
    //lodash
    const num = _.random(0,20);
    console.log(num)

    const greet = _.once(() => {
        console.log("hello");
    });

    greet()
    greet()

    //set header content type
    res.setHeader("Content-type", "text/html")

    //figure out the path the user visited from
    let path = "./views/";
    //create a switch to respond
    switch(req.url){
        case("/"): 
            path += "index.html";
            //set a statusCode
            res.statusCode = 200;
            break;
        case("/about"):
            path += "about.html"
            res.statusCode = 200;
            break;
        //create a redirect
        case("/about-me"):
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html"
            res.statusCode = 404;
    }
    //read the file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
            //sending the data back to the browser
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})

