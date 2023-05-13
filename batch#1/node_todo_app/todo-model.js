var mongoose = require("mongoose");
var todoSchema = require("./todo-schema");

Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
