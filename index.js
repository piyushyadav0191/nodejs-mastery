const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
// console.log(dirPath); /home/piyush/Desktop/nodejs-tutorial/files

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/hello${i}.txt`, "Aweosme file created ");
}

fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log(`file name is ${item}`);
  });
});
// what we covered
//make file in folder,use path module , get files name and print
