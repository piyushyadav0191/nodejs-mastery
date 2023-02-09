const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath)); //localhost:3000/about.html or localhost:3000/home.html

app.listen(3000);

// what we covered
// make html files and load html files
