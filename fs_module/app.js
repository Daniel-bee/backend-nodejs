const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/subfolder/first.txt", "utf8");

writeFileSync("./content/subfolder/first.txt", "\n new line added here", {
  flag: "a",
});
console.log(first);

// Async file system
const { readFile, writeFile } = require("fs");
readFile("./content/subfolder/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  writeFile(
    "./content/subfolder/first.txt",
    "new line added\n",
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  console.log(data);
});
