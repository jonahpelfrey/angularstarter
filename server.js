var path = require('path');
var http = require('http');
var express = require('express');


var app = express();
app.use(express.static(__dirname + '/public'));

var server = http.Server(app);

server.listen(8000, function() {
	console.log('Server running on port: 8000');
});




