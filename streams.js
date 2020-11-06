const fs = require("fs");

/* ===== CREATE A READ STREAM - createReadStream("pathToFile/file.txt", {option object and parameters} )===== */
const readStream = fs.createReadStream("./docs/blog3.txt", {encoding: "utf-8"})

/* ====== CREATE A WRITE STREAM  - createWriteStream===== */
const writeStream = fs.createWriteStream("./docs/blog4.txt")

readStream.on("data", (chunk) => {
    console.log("---- NEW CHUNK ----");
    console.log(chunk);
    writeStream.write("\nNEW CHUNK\n");
    writeStream.write(chunk);
})


