// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
  var output = [];
  var elements = document.getElementsByTagName('*');
  //all elements
  for(var i = 0; i < elements.length; i++) {
    if(elements[i].classList.contains(className)) {
      output.push(elements[i]);
    }
  };
  
  var children = elements.childNodes;
  console.log();
  return output;
};
//Go into document.
//Find the body.
//Search each element for className
//	if element has className