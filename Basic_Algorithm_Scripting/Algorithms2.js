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