var PrintValue = function(message){
	console.log("Message is "+message);
};

var addVaules = function(a,b){
	console.log("Addition of Numbers is $"+(a+b));
};

var subVaules = function(a,b){
	console.log("Subtraction of Numbers is "+(a-b));
};


module.exports.PrintValue = PrintValue;
module.exports.addValues = addValues;
module.exports.subVaules = subVaules;