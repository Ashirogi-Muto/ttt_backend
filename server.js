var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/routes')(app);
const port = 3000;
app.listen(port);
console.log('server started on port ' + port);