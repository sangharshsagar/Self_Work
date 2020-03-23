const express = require('express');
var app = express();

app.get('/page/:id',function(req,res){
	res.send("Requested Id is :"+ req.params.id);
});

app.listen(3000);