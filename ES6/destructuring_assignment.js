/* Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
// name = 'John Doe', age = 34

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
You can extract as many or few values from the object as you want.
*/

//Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line

  /* Destructuring allows you to assign a new variable name when extracting values. 
  You can do this by putting the new name after a colon when assigning the value.

  Using the same object from the last example:

  const user = { name: 'John Doe', age: 34 };

  Here's how you can give new variable names in the assignment:

  const { name: userName, age: userAge } = user;
  // userName = 'John Doe', userAge = 34

  You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.
  */

  //Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line

  /* 
  You can use the same principles from the previous two lessons to destructure values from nested objects.

  Using an object similar to previous examples:

   const user = {
   johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
   }
   };
  Here's how to extract the values of object properties and assign them to variables with the same name:

 const { johnDoe: { age, email }} = user;
 And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
*/

/* 
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
*/

//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
[a, b] = [b, a];


