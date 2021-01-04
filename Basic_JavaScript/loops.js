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