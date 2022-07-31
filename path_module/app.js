const path = require("path");

console.log(path.sep);
console.log(path.extname("index.js"));
console.log(path.isAbsolute("./"));
const filepath = path.join("/content/", "subfolder", "test.txt");
console.log(filepath);
console.log("dirname", __dirname);
console.log("file name", __filename);
console.log(path.isAbsolute(__dirname));
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
