const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
const httpServer = require("http").createServer();



app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

dotenv.config({ path: "./config.env" });
require("./db/connection");
var connection = mongoose.connection;

app.use(express.json());
app.use(cors());




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Employee Management System </h1>");
});

//Users API
app.use("/api/emp", require("./routes/emp"));


const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on Port ${PORT}`);
});
