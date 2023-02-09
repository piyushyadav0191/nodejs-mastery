const express = require("express");

const app = express();

const requestAge = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You are underage  ");
  } else res.send("Hello world!");
  next();
};

app.use(requestAge);

app.listen(3000);

// what we covered
// apply get method, remove extension from url, make 404 page, apply 404 page
