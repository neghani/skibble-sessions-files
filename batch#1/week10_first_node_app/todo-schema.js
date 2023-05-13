var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TodoSchema = Schema({
  text: String,
  done: Boolean,
});

module.exports = TodoSchema;
