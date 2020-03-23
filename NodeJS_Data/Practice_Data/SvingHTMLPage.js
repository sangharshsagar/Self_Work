const http = require('http');
const fs = require('fs');

console.log("inside if");

var server = http.createServer(function(req,res){
		res.writeHead(200,{'Content-Type': 'text/html'});
		var Readstreamdata = fs.createReadStream(__dirname + '/MainPage.html','utf8');
		Readstreamdata.pipe(res);
});

console.log("else");
server.listen(3000,'127.0.0.1');
//3000 -port number
//127.0.0.1 - localhost/home ip
console.log("listening on port 3000");