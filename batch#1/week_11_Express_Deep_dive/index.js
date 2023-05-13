const express = require("express");
const path = require("path");
var engine = require("express-handlebars");

const port = 3000;
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.get("/home", (req, res) => {
  var data = [
    { task: "HTML I", done: true },
    { task: "CSS", done: true },
    { task: "Responsive design", done: true },
    { task: "Git", done: true },
    { task: "JavaScript I", done: true },
    { task: "JavaScript II", done: false },
  ];
  res.render("home", {
    data
  });
});

app.listen(port, () => {
  console.log("Server started");
});
