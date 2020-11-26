const http = require("http")
const fs = require("fs")

const server = http.createServer( (req, res) => {
    console.log(req.method, req.url)

    switch (req.url){
        case("/"):
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            fs.readFile("./lesson 01/index.html", (error, data) => {
                if (error) {
                    console.log(error);
                    res.end();
                }else {
                    res.write(data);
                    res.end()
                }
            });
            break;
        case("/blog"):
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            fs.readFile("./lesson 01/blog.html", (error, data) => {
                if (error) {
                    console.log(error);
                    res.end();
                }else {
                    res.write(data);
                    res.end()
                }
            });
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-type", "text/html");
            fs.readFile("./lesson 01/404.html", (error, data) => {
                if (error) {
                    console.log(error);
                    res.end();
                }else {
                    res.write(data);
                    res.end()
                }
            });
    }
})

server.listen(3003, "localhost" , () => {
    console.log("the server is listening");
})