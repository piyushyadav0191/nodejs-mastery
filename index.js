// console.log(process.argv[2]); // node index.js helloPiyush
const fs = require("fs");

const input = process.argv;

if (input[2] === "add") {
  fs.writeFileSync(input[3], input[4]); // de index.js add testing1.txt 'This is our test 1 for adding'
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]); // node index.js add testing1.txt 'This is our test 1 for adding'
} else console.log("Invalid input");

// why 2 3 right?
// because , node index.js hello
// [
//  0  '/usr/bin/node',
//  1  '/home/piyush/Desktop/nodejs-tutorial/index.js',
//  2 'hello'
// ]
// so our file write at 2nd index so file name then content in file

// What we covered in this
// set input from command line, create file with input, delete file with input
