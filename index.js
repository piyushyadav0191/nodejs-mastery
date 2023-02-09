const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello world!</h1>, <a href="/about">go to about page </a> `);
});
app.get("/about", (req, res) => {
  res.send(`<input type="text" placeholder="enter your name" />`);
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Piyush",
      email: "piyush123@gmail.com",
    },
    {
      name: "sam",
      email: "sam@gmail.com",
    },
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

// what we covered
// how html tags, json data, link pages
