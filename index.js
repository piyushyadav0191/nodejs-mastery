const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "public");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/home.html`); // /
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`); // localhost:3000/about
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/notfound.html`); // localhost:3000/about
});

app.listen(3000);

// what we covered
// apply get method, remove extension from url, make 404 page, apply 404 page
