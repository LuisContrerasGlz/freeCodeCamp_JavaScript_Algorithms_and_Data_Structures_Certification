/*Another data type is the Boolean. Booleans may only be one of two values: true or false. 
They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

Note: Boolean values are never written with quotes. 
The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
*/

//Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {

    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

  /* You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
  Sometimes people use an if/else statement to do a comparison
  But there's a better way to do this. Since === returns true or false, 
  we can return the result of the comparison
  */


 function isLess(a, b) {
  // Only change code below this line
  return a < b 
  // Only change code above this line
}

isLess(10, 15);

