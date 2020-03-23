const http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{ 'Content-Type': 'text/plain' });
	res.end("ending response");
});

server.listen(3000,'127.0.0.1');
//3000 -port number
//127.0.0.1 - localhost/home ip
console.log("listening on port 3000");