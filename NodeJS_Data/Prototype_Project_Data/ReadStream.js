var http = require('http');
var fs = require('fs');

var Readstreamdata = fs.createReadStream(__dirname + '/ReadMeFile.txt','utf8');

Readstreamdata.on('data',function(chunk){
	
	console.log("New Chunk Received");
	console.log(chunk);
});