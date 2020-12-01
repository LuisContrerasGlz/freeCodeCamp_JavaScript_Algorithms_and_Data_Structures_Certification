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