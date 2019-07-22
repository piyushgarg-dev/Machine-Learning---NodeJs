const express = require("express");
const brain = require("brain.js");
const app = express();
const mybrain = require("./mybrain");
const bodyparser = require('body-parser');
const PORT = 3030;
app.use(express.json());
app.use(bodyparser.urlencoded())

app.post("/", (req, res) => {
  console.log(req.body);
  var network = mybrain(req.body.string);
  res.send(`<h2>${network}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server Started at: ${PORT}`);
});
