var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');




// var cors = require('cors')



// Router
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var companyRouter = require("./routes/company");
const staffRouter = require("./routes/staff");
const shopRouter = require("./routes/shop");


var app = express();

//MiddleWare
const errorHandler = require("./middleware/errorHandler");

// connect server 
const config = require('./config/index')
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true})



// setting 
app.use(logger("dev"));
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')) 



// app.use(cors())


// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/company", companyRouter);
app.use("/staff", staffRouter);
app.use("/shop", shopRouter);


//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.send("404 not found!!!").status(404);
});

app.use(errorHandler);

module.exports = app;
