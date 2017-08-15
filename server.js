
// DEPENDENCIES
// let get npm packages that is used to give our server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Static directory to be served
app.use(express.static("app/public"));
// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.urlencoded({ extended: true }));
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))
// routes that will point ourserver to a series of files.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
//lets start our server.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});// Express server code here