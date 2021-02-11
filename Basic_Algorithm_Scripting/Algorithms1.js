/* The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius*9/5)+32;
    return fahrenheit;
  }
  
  convertToF(30);

/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    return str
    //he split() function will turn our string into an array of characters
      .split("")
    //takes our array of characters and reverses them.
      .reverse()
    //join('') to put our characters back together into a string. 
      .join("");
  }

/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);

  /*Return the length of the longest word in the provided sentence.

    Your response should be a number.*/

    function findLongestWordLength(str) {
        var words = str.split(' ');
        var maxLength = 0;
      
        for (var i = 0; i < words.length; i++) {
          if (words[i].length > maxLength) {
            maxLength = words[i].length;
          }
        }
      
        return maxLength;
      }

    /* Explanation:

    Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

    Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.
*/

/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
  }

  /* Explanation: 
  The string is indexed into using the variable i, whilst i is less than the length of the string. The index of each space is found within the string, and this is used as the length of each word.
  */

  /* Check if a string (first argument, str) ends with the given target string (second argument, target).

  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/

  function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");

  //Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
  function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }

