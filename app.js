var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var companyRouter = require("./routes/company");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/company", companyRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.send("404 not found!!!").status(404);
});

module.exports = app;
