/* If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. 
These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. 
When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}

*/

/* Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true 
and return "No, that was false" otherwise.*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
   if (wasThatTrue === true) {
       return "Yes, that was true";
    }
    return "No, that was false";
  
  
    // Only change code above this line
  
  }
  
  trueOrFalse(true)
  trueOrFalse(false)


/* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. 
The equality operator compares two values and returns true if they're equivalent or false if they are not. 
Note that equality is different from assignment (=), 
which assigns the value on the right of the operator to a variable on the left.*/

//Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.
  
function testEqual(val) {
  if (val==12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/* 
Strict equality (===) is the counterpart to the equality operator (==). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, 
and the strict equality operator will return false. */

// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Setup
function testStrict(val) {
  if (val===7) { //
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3   // returns 'number'
typeof '3' // returns 'string'

/* The inequality operator (!=) is the opposite of the equality operator. 
It means "Not Equal" and returns false where equality would return true and vice versa. 
Like the equality operator, the inequality operator will convert data types of values while comparing.*/

//Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
  if (val!=99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/* The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 
Strict inequality will not convert data types.*/

// Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
  if (val!== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/* The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, it returns true. 
Otherwise, it returns false.
Like the equality operator, greater than operator will convert data types of values while comparing.*/

// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/* The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. 
Otherwise, it returns false.
Like the equality operator, greater than or equal to operator will convert data types while comparing.*/

// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/* The less than operator (<) compares the values of two numbers. 
If the number to the left is less than the number to the right, it returns true. 
Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.*/

//Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

/*The less than or equal to operator (<=) compares the values of two numbers. 
If the number to the left is less than or equal to the number to the right, it returns true. 
If the number on the left is greater than the number on the right, it returns false. 
Like the equality operator, less than or equal to converts data types.*/

function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/* Sometimes you will need to test more than one thing at a time. 
The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.*/

/* Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 
and greater than or equal to 25. Otherwise, will return "No".*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <=50 && val >=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/* The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.*/

/* Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val<10 || val >20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? expression-if-true : expression-if-false;

The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

*/

// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

function checkEqual(a, b) {
   return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/* In the previous challenge, you used a single conditional operator. 
You can also chain them together to check for multiple conditions.

It is considered best practice to format multiple conditional operators such that each condition is on a separate line

*/

/*In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. 
The function should return "positive", "negative" or "zero".

*/

function checkSign(num) {
  return num > 0 ? "positive" 
  : num < 0 ? "negative" : "zero"
}

checkSign(10);



