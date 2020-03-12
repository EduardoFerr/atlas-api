const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://admin:admin12345@atlasteste-fmbud.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Mongodb conectado!");
    },
    err => {
      console.error("Erro de conexão no database", err);
    }
  );
mongoose.Promise = global.Promise;

module.exports = mongoose;

