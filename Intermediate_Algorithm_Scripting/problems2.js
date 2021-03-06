/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {
    if (num <= 1) {
        return "Numbers lower than 0 don`t work here";
    }

    let counter = 2;
    let sum = 0;

    while (counter <= num) {
        if (isPrime(counter)) {
            sum += counter;
        }
     counter += 1;
    }

    return sum;
  }
  
function isPrime(singleNumber) {
    let counter = 2;
    while (counter < singleNumber) {
        if (singleNumber % counter === 0) {
            return false;
        }
        counter += 1;
    }
  return true;
}

  sumPrimes(10);

/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1, 5]);

/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i], func(arr[i]), arr.slice(i));
       if (func(arr[i])) {
           return arr.slice(i);
       } 
    }

    return result;
  }
  
dropElements([1, 2, 3], function(n) {return n < 3; });

//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  return arr.flat().flat().flat();
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(arr) {
    while( arr.some(dataPoint => {
        return Array.isArray(dataPoint);
    })) {
        arr = arr.flat();
    }
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

function binaryAgent(str) {
    let decipheredMessage = "";

    str.split(" ").forEach(binaryDataPoint => {
        let characterCode = parseInt(binaryDataPoint, 2);
        let decipheredLetter = String.fromCharCode(characterCode);
        decipheredMessage += decipheredLetter;
    });


    return decipheredMessage;
  }
  
  let binaryData = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
  let result = binaryAgent(binaryData);
  console.log(result);

/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
    return collection.every(function(element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  
  // test here
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );