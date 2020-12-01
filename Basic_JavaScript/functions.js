// In JavaScript, we can divide up our code into reusable parts called functions.

/* 
1. Create a function called reusableFunction which prints "Hi World" to the dev console.
2. Call the function. */

function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();

  /* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
  When a function is defined, it is typically defined along with one or more parameters. 
  The actual values that are input (or "passed") into a function when it is called are known as argument*/

  /* 
1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
2. Call the function with two numbers as arguments.*/

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
  }

  functionWithArgs(10,5);

  /* In JavaScript, scope refers to the visibility of variables. 
  Variables which are defined outside of a function block have Global scope. 
  This means, they can be seen everywhere in your JavaScript code.

  Variables which are used without the var keyword are automatically created in the global scope.
  This can create unintended consequences elsewhere in your code or when running a function again.
  You should always declare your variables with var. */

  /* 
  1. Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
  2. Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
  */

  // Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

/*It is possible to have both local and global variables with the same name. When you do this, 
the local variable takes precedence over the global variable.*/

//Add a local variable to myOutfit function to override the value of outerWear with "sweater".
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();

/*We can pass values into a function with arguments. 
You can use a return statement to send a value back out of a function.*/

//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
    return num * 5;
  }
  var answer = timesFive(5);

  