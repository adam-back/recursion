// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var output = "";

  if(typeof obj === "number"){
      output += "" + obj + "";
  }else if(obj === null){ 
  	output += "" + obj + "";
  }else if(typeof obj === "boolean"){
  	output += "" + obj + "";
  }else if(typeof obj === "string"){
  	output = "\"" + obj + "\"";
  }else if(Array.isArray(obj)){
  	output = "[";
  	if(obj.length > 0){
			var i = 0;
			while(i < obj.length){
    		i === (obj.length - 1) ? output += stringifyJSON(obj[i]) : output += stringifyJSON(obj[i]) + "," ;
    		i++;
			}
		}
		output += "]";	
	}else{
  	output = "{";
  	for(var key in obj) {
  		output += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
  	}
  	if(output.length > 1){
  		output = output.slice(0, output.length - 1);
  	}
		output += "}"; 
  }

return output;
};