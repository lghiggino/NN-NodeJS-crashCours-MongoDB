const http = require("http");

const page = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>new File from node</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!--<link rel='stylesheet' type='text/css' media='screen' href='./css/main.css'>-->
    <!--<script src='main.js'></script> -->
</head>
<body>
    <section>
        <h1> This is the response from the server</h1>
    </section>
    
</body>
</html>

`

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader("Content-type", "text/html");
    //sending the data back to the browser
    res.write(page);
    //end the response
    res.end();

});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})

