var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); 
require('./app/routes')(app);
const port = 3000;
app.listen(port); 