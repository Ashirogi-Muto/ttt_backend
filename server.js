const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
require('./routes/routes')(app);
const port = 3000;
app.listen(port, '0.0.0.0', () => {
	console.log('server started on port ' + port);
});