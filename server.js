var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/toGetPricesModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
 mongoose.Promise = global.Promise;
var uri = 'mongodb://localhost:27017/test';
mongoose.connect(uri);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/toGetPricesRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('To get Prices RESTful API server started on: ' + port);
