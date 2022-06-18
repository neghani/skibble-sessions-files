var mongoose = require("mongoose");
var mongoAtlasUri =
  "mongodb+srv://admin:teEnkW5UG9U9pZgH@cluster0.o5chzwu.mongodb.net/notesdb?retryWrites=true&w=majority";

function connect() {
  mongoose.connect(
    mongoAtlasUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("db ready")
  );
}
module.exports = connect;
