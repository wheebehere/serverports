var http = require('http');
var PORT = 8081;

var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var body = '<u><b>Barry Allen</b></u>';

	res.end(body);
});

server.listen(PORT, function() {
	console.log('Server Listening on %d', PORT);
});