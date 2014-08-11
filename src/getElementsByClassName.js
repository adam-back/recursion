// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
  var output = [];
  var currentElement = document.body;
  if(currentElement.classList.contains(className)) {
    output.push(currentElement); 
  }
   return output;
};
//Go into document.
//Find the body.
//Search each element for className
//	if element has className