// Create a nested array called myArray. This is also called a multi-dimensional array.

var myArray = [["DC", "Superman"], ["Marvel", "Spiderman"]];

//Access Array Data with Indexes
/* We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, 
except that instead of specifying a character, they are specifying an entry in the array. 
Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.*/

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

var myArray = [50,60,70];
var myData = myArray[0];

//Unlike strings, the entries of arrays are mutable and can be changed freely.
// Modify the data stored at index 0 of myArray to a value of 45.

var myArray = [18,64,99];
myArray[0] = 45;

/*One way to think of a multi-dimensional array, is as an array of arrays. 
When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, 
and each additional pair of brackets refers to the next level of entries inside.*/

//Using bracket notation select an element from myArray such that myData is equal to 8.

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

/*An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.*/

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

/*Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.*/

//Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

/* pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.*/

//Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

/*Not only can you shift elements off of the beginning of an array, 
you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
unshift() adds the element at the beginning of the array.*/

//Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

/*Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. 
The second element should be a number representing the quantity. There should be at least 5 sub-arrays in the list.*/

var myList = [];

myList = [["Milk", 23], ["Protein", 10], ["Eggs", 50], ["Chicken", 2],
["water", 23]];
