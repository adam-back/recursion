// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //set an output variable with all of the elements which have the classname
  var output = [];

  //set a subroutine (recursion) which takes a node as the input
  var traverseDOM = function(node) {
    checkClassName(className, node);
    var children = node.children;

    //if node has children, search them recursively
    if(children.length > 0) {
      for(var child = 0; child < node.children.length; child++) {
        traverseDOM(children[child]);
      }
    }
  };

  var checkClassName = function(targetClass, node) {
    var classes = node.classList;
    if(classes === undefined) {
      return false;
    }
    //loop through entire list of classes
    for(var i = 0; i < classes.length; i++) {
      if(classes[i] === targetClass) {
        output.push(node);
        return true;
      }
    }
    //class not found on this node
    return false;
  }

  //kick off recursion
  traverseDOM(document.body);
  console.log(output);
  return output;
};

//high level
//search through the DOM for every element with the target className
