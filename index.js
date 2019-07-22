const express = require("express");
const brain = require("brain.js");
const app = express();
const mybrain = require("./mybrain");
const mynewbrain = require("./mynewbrain");
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(bodyparser.urlencoded());
app.use(express.static("./public"));
app.use(bodyparser.json());



app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  console.log(req.body);
  var network = mybrain(req.body.journal);
  res.status(200).json(network);
});
app.post("/auto", (req, res) => {
  console.log(req.body);
  var autonetwork = mynewbrain(req.body.query);
  res.status(200).json(autonetwork);
});

app.listen(PORT, () => {
  console.log(`Server Started at: ${PORT}`);
});
