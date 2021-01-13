/* In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
Instead, we create inline functions. 
We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. 
Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";

This code will still return the string value by default.

*/

/* Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. 
Also, make sure nothing is defined using the keyword var.*/

var magic = function() {
    return new Date();
  };

const magic = () => new Date();

/* Just like a regular function, you can pass arguments into an arrow function.

// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

// the same function, without the parameter parentheses
const doubler = item => item * 2;

It is possible to pass more than one argument into an arrow function.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8
*/

//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));

//Result
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* In order to help us create more flexible functions, ES6 introduces default parameters for functions.

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

The default parameter kicks in when the argument is not specified (it is undefined). 
As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. 
You can add default values for as many parameters as you want.
*/

//Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line

//Result
const increment = (number, value=1) => number + value;

/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
*/

//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
//Result
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6

  /* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
  The ES5 code below uses apply() to compute the maximum value in an array:

  var arr = [6, 89, 3, 45];
  var maximus = Math.max.apply(null, arr); // returns 89

  We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. 
  The spread operator makes this syntax much better to read and maintain.

  const arr = [6, 89, 3, 45];
  const maximus = Math.max(...arr); // returns 89

  ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
  The following code will not work:

  const spreaded = ...arr; // will throw a syntax error
  */

  //Copy all contents of arr1 into another array arr2 using the spread operator.

  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;

  arr2 = [];  // Change this line

  console.log(arr2);

  //Result
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2 

  arr2 = [...arr1];  // Change this line

  console.log(arr2);