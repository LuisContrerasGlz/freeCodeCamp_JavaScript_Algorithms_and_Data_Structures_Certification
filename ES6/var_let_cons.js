/* One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'

As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. 
In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. 
Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let camper = 'James';
let camper = 'David'; // throws an error

This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. 
Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

"use strict";
x = 3.14; // throws an error because x is not declared
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/* When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

*/

/* Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. 
Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. 
When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.*/

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  /* The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

  const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
  They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

  trying to reassign a variable declared with const will throw an error. 
  You should always name variables you don't want to reassign using the const keyword. 
  This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

  Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). */

  /* Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. 
  Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.*/

  function printManyTimes(str) {

  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  

  }
  printManyTimes("freeCodeCamp");

  