/* You can run the same code multiple times by using a loop.
The first type of loop is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true.*/

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Setup
var myArray = [];
var i = 5;
while(i>=0){
    myArray.push(i);
    i--;
}

/* You can run the same code multiple times by using a loop.
The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. 
It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. 
This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

*/

//Use a for loop to work to push the values 1 through 5 onto myArray.

// Setup
var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}

// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
  }

/* A for loop can also count backwards, so long as we can define the right conditions.
In order to count backwards, we'll need to change our initialization, condition, and final-expression.*/

//Push the odd numbers from 9 through 1 to myArray using a for loop.

var myArray = [];
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

/* A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. 
This code will output each element of the array arr to the console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. 
Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. 
when i becomes equal to arr.length and outputs 6 to the console.

*/

//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    console.log(arr[i]);
    total += myArr[i];
 }

 //If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    var product = 1;
    
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

  /* The next type of loop you will learn is called a do...while loop. 
  It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
  */

/* Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, 
and i will be equal to 11 when your code has finished running.*/

// Setup
var myArray = [];
var i = 10;

do {
    myArray.push(i);
  i++;
}
while (i < 11) 

/* Recursion is the concept that a function can be expressed in terms of itself. 
Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.*/

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

