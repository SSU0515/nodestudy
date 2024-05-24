const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log("mong", MONGODB_URI_PROD);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("server on 8080");
});
