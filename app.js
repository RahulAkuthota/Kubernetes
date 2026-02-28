const express = require("express");
const add = require("./math");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My Kubernetes App!");
});

app.get("/add", (req, res) => {
  res.json({ sum: add(2, 3) });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
