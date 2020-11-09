const http = require("http");
const fs = require("fs");
const { endianness } = require("os");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader("Content-type", "text/html")

    //figure out the path the user visited from
    let path = "./views/";
    //create a switch to respond
    switch(req.url){
        case("/"): 
            path += "index.html"
            break;
        case("/about"):
            path += "about.html"
            break;
        default:
            path += "404.html"
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

