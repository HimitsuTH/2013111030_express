var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');


// var cors = require('cors')


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var companyRouter = require("./routes/company");
const staffRouter = require("./routes/staff");
const shopRouter = require("./routes/shop");


var app = express();

mongoose.connect('mongodb+srv://chinnawich:A123456@2013111030-chin.howw4sj.mongodb.net/restfulapi?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static('public')) 


// app.use(cors())


// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/company", companyRouter);
app.use("/staff", staffRouter);
app.use("/shop", shopRouter);


//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.send("404 not found!!!").status(404);
});

module.exports = app;
