/*const xyz = require("./people");

xyz.people.forEach(_p => {
    console.log(_p)
}) */

// destructuring assingments on the import
const {cities, people, ages} = require("./people");
console.log(cities)

cities.forEach(city => {
    console.log(city)
})

console.log(people)
console.log(ages)


// One of node built in modules
const os = require("os")
console.log(os.platform(), os.homedir())