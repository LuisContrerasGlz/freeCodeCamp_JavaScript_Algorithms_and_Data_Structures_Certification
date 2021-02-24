/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
    let result = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i += 1) {
        let word = words[i];

        for (let j = 0; j < word.length; j += 1){
            if (j === 0) {
                result += word[j].toUpperCase();
            }
            else{
                result += word[j].toLowerCase();
            }
        }
       result += " "; 
    }
    return result.slice(0, result.length -1);
  }
  
  titleCase("I'm a little tea pot");

  /*You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
    let result = [];

    result.push(...arr2.slice(0, n));
    result.push(...arr1);
    result.push(...arr2.slice(n, arr2.length));

    return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  /*Remove all falsy values from an array.

   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

   Hint: Try converting each value to a Boolean.*/

   function bouncer(arr) {
    return arr;
   }
  
   bouncer([7, "ate", "", false, 9]);

    /*Remove all falsy values from an array.

    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    Hint: Try converting each value to a Boolean.

     */

    function bouncer(arr) {
        let newArray = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) newArray.push(arr[i]);
        }
        return newArray;
      }

    /* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

    function getIndexToIns(arr, num) {
        arr.sort(function(a, b) {
          return a - b;
        });
      
        for (var a = 0; a < arr.length; a++) {
          if (arr[a] >= num) return a;
        }
      
        return arr.length;
      }

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".*/

function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  for (let i = 0; i < secondElement.length; i ++){
    let letter = secondElement[i].toLowerCase();
    if (firstElement.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
