var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("./db");
var Todo = require("./todo-model");
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/todo", async (req, res) => {
    console.log(req.body);
  var newTodo = new Todo(req.body);
  var data = await newTodo.save();
  res.send(data);
});

app.get("/todo", async (req, res) => {
    console.log("request is here");
  var allTodo = await Todo.find();

  res.send(allTodo);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("server is ready accept request");
});
