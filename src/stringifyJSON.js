// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var output = "";

  if(typeof obj === "number") {
  	output += "" + obj + "";
  	return output;
  }else if(obj === null) {
  	output += "" + obj + "";
  	return output;
  }else if(typeof obj === "boolean") {
  	output += "" + obj + "";
  	return output;
  }

};
