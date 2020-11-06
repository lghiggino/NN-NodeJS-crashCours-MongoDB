/* ============== NODE CRUD Operations on the file system ============== */
const fs = require("fs");

/* ===== reading files - readFile("relativePathToFile", asyncFunction()) ===== */
// fs.readFile("./docs/readme.txt", (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     // console.log(data) //will return a buffer that must be rewriten toString
//     console.log(data.toString());
// })

/* ===== writing files - writeFIle("relativePathToCreateFile", "the text content of the file", asyncFunction()) ===== */
// fs.writeFile("./docs/newFile.txt", "hello, world!", () => {
//     console.log("new file was written");
// });

let htmlContent = `
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
    <h1>This is a brand new fucking world</h1>
</body>
</html>
`
fs.writeFile("./docs/banana.html", htmlContent, () => {
    console.log("new html file created")
})

