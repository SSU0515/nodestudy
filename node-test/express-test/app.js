const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("hello ssu world");
// });
// app.get("/about", (req, res) => {
//   res.send("this is all about");
// });

const token = "123";

const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    console.log("you don't have token");
  }
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
