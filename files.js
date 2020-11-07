/* ============== NODE CRUD Operations on the file system ============== */
const fs = require("fs");

/* ===== READING FILES - readFile("relativePathToFile", callback(error, data) ===== */
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
    <section>
        <h1>This is a brand new fucking world</h1>
        <p> this is a paragraph created using node and javascript </p>
        <span> cool, cool! </span>
    </section>
    
</body>
</html>
`
fs.writeFile("./docs/banana.html", htmlContent, () => {
    console.log("new html file created")
})

/* ===== MAKING DIRECTORY - mkdir("pathToNewDirectory", callback(error))  ===== 
Will throw error if creates anexisting directory                                */

// if (!fs.existsSync("./assets")){
//     fs.mkdir("./assets", (err) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log("new directory was created")
//         }
//     })
// } else {  /* ===== REMOVING DIRECTORY - rmdir("pathToDirectory", callback(error)) ===== */
//     fs.rmdir("./assets", (err) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("folder deleted");
//         }
//     })
// }

/* ===== DELETE FILE - unlink("pathToFile/fileName.html", callback(error)) ===== */
// if (fs.existsSync("./docs/deleteme.txt")){
//     fs.unlink("./docs/deleteme.txt", (error) => {
//         if(error){console.log(error)}
//         else {console.log("File was deleted")}
//     })
// }


// fs.readFile("./docs/readme.txt", (error, data) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

module.exports = htmlContent;

