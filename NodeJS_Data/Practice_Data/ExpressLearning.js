const express = require('express')
//returned (module.exports as function)

//seting express app
var app = express();

app.get('/',function(req,res){
	res.send("This is home page");
});

app.get('/second',function(req,res){
	res.send("This is Secong page");
});

app.listen(3000);
//listening on port

console.log("Listening on port 3000");