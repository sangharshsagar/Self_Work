
//Require Values keep as const and not var
//So values cant be changed later.


//if File in same directory
const log_PrintValue = require('./logger');

//if File in SubFolder of  directory
const addValues = require('./AddFile/add.js')

//if File in Parent directory
const subValues = require('../sub.js')

var message = 'sangharsh';

var a = 10;
var b = 20;

log_PrintValue(message);
addValues(a,b);
subValues(a,b);


const fs = require('fs');

fs.readFile('./MainPage.html',function(error,data){
	if(error){
		console.log('File not Found');
	}else{
		console.log('File  Found');
	}
	
});


