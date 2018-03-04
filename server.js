// require npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up Express server
var app = express();
var PORT = process.env.PORT || 3000;

// use body parser to return strings as objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// begin listening on server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  