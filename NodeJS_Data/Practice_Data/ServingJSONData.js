var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'application/json'});
	
	//it is an object
	var jsonObj = {
		'name' : 'sangharsh',
		'tutorial' : 'nodejs',
	};
	//we need to convert it to string to send to server
	//JSON.stringify(jsonObj) converts Json object to string;
	res.end(JSON.stringify(jsonObj));
});


server.listen(3000,'127.0.0.1');