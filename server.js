//require packages
const express = require('express')
const path = require('path')

//declare variables
let app = express();
let PORT = process.env.PORT || 8080;

//Make Express use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require my routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)
//requiring the friends array


//Hey! Listen!
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});