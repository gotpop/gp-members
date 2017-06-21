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

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/step1', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/step2', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/step3', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/summary', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/user', function(req, res) {
  console.log('endpoint time', req.body);
  console.log('endpoint time', res.body);
  console.dir(req.body);
	res.send("Endpoint working !!");
});

app.listen(port, function() {
  console.log('GotPop is running on http://localhost:' + port);
});
