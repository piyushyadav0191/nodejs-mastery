const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

fs.writeFileSync(filePath, "This is a simple Text");
fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

fs.appendFile(filePath, "add file name in apple.txt", (err) => {
  if (!err) console.log("file is updated");
});
fs.appendFile(filePath, "add file again name in apple.txt", (err) => {
  if (!err) console.log("file is updated");
});

fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) console.log("File is renamed");
});

fs.unlinkSync(`${dirPath}/fruit.txt`);
// what we covered
// make file, read file, rename, delete
