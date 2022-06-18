var mongoose = require("mongoose");
var mongoUri =
  "mongodb+srv://admin:7pjNDWBlMSICbZih@cluster0.czblx5a.mongodb.net/notesdb?retryWrites=true&w=majority";
mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is ready");
  }
);

module.exports = mongoose;
