var http = require('http');
var fs = require('fs');

var Readstreamdata = fs.createReadStream(__dirname + '/ReadMeFile.txt','utf8');
var writestreamdata = fs.createWriteStream(__dirname + '/writeMeStreamFile.txt');


Readstreamdata.pipe(writestreamdata);