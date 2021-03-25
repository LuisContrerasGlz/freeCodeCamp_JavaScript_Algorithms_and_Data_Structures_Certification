/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
    // Function to check if a number is actually a number
    function checkNum(num) {
      return (typeof num === "number");
    };
  
    if (arguments.length === 2) {
      // Check if we have two arguments and if they are numbers
      // Return the sum if they are both numbers
      let first = arguments[0];
      let second = arguments[1];
      if (checkNum(first) && checkNum(second)) {
        return first + second;
      } else {
        return undefined;
      }
    } else if (arguments.length === 1) {
      // If only one argument was found, return a new function
      let first = arguments[0];
      if (checkNum(first)) {
        // Return function that expect a second argument.
        function addSecond(second) {
          // Check if the new argument is a number
          if (checkNum(second)) {
            return first + second;
          } else {
            return undefined;
          }
        };
        return addSecond;
      } else {
        return undefined;
      }
    } else {
      // Incorrect number of arguments found
      return undefined;
    }
  }
  
  // test here
  addTogether(2, 3);

/*Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object. */

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  var bob = new Person("Bob Ross");
  bob.getFullName();

/*Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
  
    var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
