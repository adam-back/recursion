// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var output = "";

  switch(typeof obj) {
    case 'string':
      obj.toString();
      console.log(obj);
      output += '"'+ obj + '"';
      break;
    case 'number':
      output += "" + obj + "";
      break;
    case 'boolean':
      output += "" + obj + "";
      break;
    case 'object': 
      if(obj === null) {
        output += "" + obj + "";
        break;
      } else if(obj === [] || obj === {}) {
        //recurse
        output += "" + obj + "";
        break;
      } else {
        break;
      }
  }

  return output;
};