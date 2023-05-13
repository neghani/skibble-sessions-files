var express = require("express");
var connect = require("./db");
var bodyParser = require("body-parser");

var app = express();
var Todo = require("./todo-model");
connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", async function (req, res) {
  var data = await Todo.find({});
  console.log(data);
  res.send(data);
});
app.post("/todo", async function (req, res) {
  console.log(req.body);
  var newTodo = new Todo(req.body);
  var data = await newTodo.save();
  res.send(data);
});
app.listen(3000, () => {
  console.log("connected");
});

// var schema = mongoose.Schema;

// var todoSchema = schema({
//   text: String,
//   done: Boolean,
// });

// Todo = mongoose.model("Todo", todoSchema);

// var newTodo = new Todo({ text: "This is from node", done: false });
// newTodo.save(function (err, data) {
//   if (!err) {
//     console.log(data);
//   }
// });

// Todo.find(function (err, data) {
//   console.log(data);
// });
