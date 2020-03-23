

function callprintVaule(fun){
	console.log("Inside Function callprintVaule()");
	fun();
	
}
var printVaule = function(name){
	console.log("Inside Function printVaule()");
	console.log("This Function Prints name "+ name);
}

callprintVaule(printVaule);
