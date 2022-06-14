const express = require("express");

const app = express();

var cors = require("cors");

const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getTodos", (req, res) => {
  var todos = [
    { id: 1, text: "my todo 1", done: false },

  ];
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
