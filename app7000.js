var http = require('http');
var PORTA = 7000;

var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var body = '<u><b>Great job! Looks like you will be a programmer in no time!</b></u>';

	res.end(body);
});

server.listen(PORTA, function() {
	console.log('Server Listening on %d', PORTA);
});

var PORTB = 7500;

var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var body = '<u><b>You call yourself a programmer!?! No way!!</b></u>';

	res.end(body);
});

server.listen(PORTB, function() {
	console.log('Server Listening on %d', PORTB);
});