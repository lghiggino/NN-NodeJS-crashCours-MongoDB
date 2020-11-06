/* ============== NODE CRUD Operations on the file system ============== */
const fs = require("fs");

/* ===== READING files - readFile("relativePathToFile", callback(error, data) ===== */
// fs.readFile("./docs/readme.txt", (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     // console.log(data) //will return a buffer that must be rewriten toString
//     console.log(data.toString());
// })

/* ===== WRITING FILES - writeFile("relativePathToCreateFile", "the text content of the file", callback()) ===== 
This will also edit an existing file on the same file path                                                       */

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

/* ===== MAKING DIRECTORY - mkdir("pathToNewDirectory", callback(error))  ===== 
Will throw error if creates anexisting directory                                */

fs.mkdir("./assests", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("new directory was created")
    }
})
