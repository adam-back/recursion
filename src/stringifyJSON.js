// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var output = "";

  if(typeof obj === "number") {
  	return output += "" + obj + "";
  }else if(obj === null) { 
  	return output += "" + obj + "";
  }else if(typeof obj === "boolean") {
  	return output += "" + obj + "";
  }else if(typeof obj === "string") {
  	return output = "\"" + obj + "\"";
  }

};
