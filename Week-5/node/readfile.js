const fs = require("fs");

const fileContent = fs.readFileSync("./content1.txt", { encoding: "utf8" });
let contentArray = fileContent.split("\n");
console.log(contentArray,'read Sync ');


const readAsync = fs.readFile("./content1.txt", { encoding: "utf8" })
let readAsyncArray = readAsync.split("\n");
console.log(readAsyncArray,"read Async")


// fs.readFile("./content1.txt", { encoding: "utf8" })
// .then((data) => {
//   console.log("Promise version");
// })
// .catch((err) => {
//   console.error(`Error ${err}`);
// });