var mongoose = require("mongoose");
var schema = mongoose.Schema;

var todoSchema = schema({
  text: String,
  done: Boolean,
});

module.exports = todoSchema;
