//require packages
let express = require('express')
let path = require('path')

//declare variables
let app = express();
let PORT = 8080;

//Make Express use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require my routes
// require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)
//requiring the friends array
require('./app/data/friends.js')


//Hey! Listen!
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});