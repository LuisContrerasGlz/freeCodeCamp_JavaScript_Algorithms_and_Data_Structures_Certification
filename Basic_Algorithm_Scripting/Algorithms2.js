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