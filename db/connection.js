const mongoose = require("mongoose");

const dbname = process.env.DATABASE;
mongoose
  .connect(dbname, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => console.log("connection error: ", error));
