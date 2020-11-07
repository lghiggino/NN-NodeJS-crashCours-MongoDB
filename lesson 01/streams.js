const fs = require("fs");
// const htmlContent = require("./files")

// /* ===== CREATE A READ STREAM - createReadStream("pathToFile/file.txt", {option object and parameters} )===== */
// const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"})

// /* ====== CREATE A WRITE STREAM  - createWriteStream===== */
// const writeStream = fs.createWriteStream("./docs/banana2.html")

// readStream.on("data", (chunk) => {
//     console.log("---- NEW CHUNK ----");
//     //console.log(chunk);
//     // writeStream.write("\nNEW CHUNK\n");
//     // writeStream.write(chunk);
// })


// // writeStream.write("Banana Boat, baybay")

// fs.unlink("./docs/blog5.txt", (err) => {
//     if(err) console.log(err)
// })

//writeStream.write(htmlContent)


//create a readStream
//create a writeStream

const newReadStream = fs.createReadStream("index.html", {encoding:"utf-8"})

newReadStream.on("data", (chunk) => {
    console.log(chunk)
})

let html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>new File from node</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script> -->
</head>
<body>
    <section>
        <h1>This is a brand new fucking world</h1>
        <p> this is a paragraph created using node and javascript </p>
        <span> cool, cool! </span>
        <p> new p here </p>
    </section>
    
</body>
</html>
`

const newWriteStream = fs.createWriteStream("index.html")

newWriteStream.write(html)

//piping

