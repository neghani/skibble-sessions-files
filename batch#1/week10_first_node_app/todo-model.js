var mongoose = require("mongoose");
var TodoSchema = require('./todo-schema')

Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
