/* The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);

This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);

This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
Therefore, it is encouraged to provide a callback function to specify how to sort the array items. 
When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b.
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged. */ 

// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
      });
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/*A side effect of the sort method is that it changes the order of the elements in the original array.
In other words, it mutates the array in place.
One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method. */

//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
 
}
nonMutatingSort(globalArray);

/*The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.
For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);

bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"].

Since strings are immutable, the split method makes it easier to work with them. */

/*Use the split method inside the splitify function to split str into an array of words. 
The function should return the array. 
Note that the words are not always separated by spaces, and the array should not contain punctuation. */

function splitify(str) {
    return str.split(/\W/);
  }
splitify("Hello World,I-am code");