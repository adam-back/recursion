// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { 
    var targeted = className;
    var output = [];
     var children = document.body.childNodes;
     for(var i = 0; i < children.length; i++) {
        if(children[i].className == targeted) {
            output.push(children[i]);
        }
     }

     return output;
     
   };
//Go into document.
//Find the body.
//Search each element for className
//	if element has className