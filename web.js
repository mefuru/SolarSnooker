var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var data = fs.readFileSync('particle.html').toString();
	response.send(data); // data is a string that contains the HTML data for index.html
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
