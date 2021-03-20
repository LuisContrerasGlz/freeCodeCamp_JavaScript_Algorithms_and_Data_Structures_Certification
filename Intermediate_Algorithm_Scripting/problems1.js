/*We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
    let minimunNumber = Math.min(arr[0], arr[1]);
    let maximummunNumber = Math.max(arr[0], arr[1]);
    var result = 0;

    for (var i = minimunNumber; i <= maximummunNumber; i++){
        result += i;
    }

    return result;
  }
  
  sumAll([1, 4]);

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object. */

function destroyer(arr) {
    let survivingElements = [];
    let battleField = Object.values(arguments)[0];
    let elementsToDestroy = Object.values(arguments).splice(1);

    battleField.forEach(positionToRecon => {
        if (elementsToDestroy.indexOf(positionToRecon) === -1){
            survivingElements.push(positionToRecon);
        }
    });
    return survivingElements;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. */

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }
  
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );