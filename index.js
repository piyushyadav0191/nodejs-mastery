const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("data send by browser is", req.query.name); // http:localhost:5000?name=piyush
  res.send(`Hello ${req.query.name}`);
});
app.get("/about", (req, res) => {
  res.send("From about Page!");
});

app.listen(5000, () => {
  console.log("Server is running");
});

// what we covered
// make file, read file, rename, delete
