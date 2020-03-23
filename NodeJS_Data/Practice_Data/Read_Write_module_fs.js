var fs = require('fs');

//arguments are(path,encoding)
//var filedata = fs.readFileSync('ReadMeFile.txt','utf8');

//synch method blocks flow of code and rest part of code can be executed only after
//executing readFileSync() completely

//console.log("filedata " +filedata);

//fs.writeFileSync('writeMe.txt',filedata);
//console.log("data written in file successfully " );
 

//synchronoyus read and write.
//No blocking or waiting to finish execution
fs.readFile('ReadMeFile.txt','utf8',function(err,data){
	console.log("data "+data );
	fs.writeFile('writeMe.txt',data);
});
console.log("All tasks executed  successfully " );