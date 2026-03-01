const express = require("express");
const add = require("./math");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My Kubernetes App!");
});

app.get("/add", (req, res) => {
  const result = add(2, 3);
  res.send("Sum is: " + result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
