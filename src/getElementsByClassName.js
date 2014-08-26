// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var recursion = function(element) {
    if(element.classList) {
      for(var i = 0; i < element.classList.length; i++) {
        if(element.classList[i] === className) {
          output.push(element);
        }
      }
    }

    if(element.childNodes.length > 0) {
      for(var a = 0; a < element.childNodes.length; a++) {
        recursion(element.childNodes[a]);
      }
    }
  };

  recursion(document.body);

  return output;
};
//Go into document.
//Find the body.
//Search bpdy for className
//
//Search each element for className
//	if element has className