//////////////////////////////////////////////////////////////////////
// Note : Express is only used on Heroku
//////////////////////////////////////////////////////////////////////

var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 9999;

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/user', function(req, res) {
	res.send("Endpoint working !!");
  console.log(req.body);
});

app.listen(port, function() {
  console.log('GotPop is running on http://localhost:' + port);
});
