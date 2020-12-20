/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. 
Statements are executed from the first matched case value until a break is encountered.*/

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta" 
*/

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
          answer = "alpha"
          break;
        case 2:
          answer = "beta"
          break;
        case 3:
            answer = "gamma"
            break;
        case 4:
                answer = "delta"
                break;
      }
      
    return answer;
  }
  
  console.log(caseInSwitch(1));

  /* In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. 
  Think of it like the final else statement in an if/else chain.*/

  /* Write a switch statement to set answer for the following conditions:
  "a" - "apple"
  "b" - "bird"
  "c" - "cat"
  default - "stuff" */

  function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
          answer = "apple"
          break;
        case "b":
          answer = "bird"
          break;
        case "c":
            answer = "cat"
            break;
        default:
                answer = "stuff"
                break;
      }
      
    return answer;
  }
  
  switchOfStuff(1);

  /* If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.
   If you have multiple inputs with the same output, you can represent them in a switch statement*/

   /* 
   Write a switch statement to set answer for the following ranges:
   1-3 - "Low"
   4-6 - "Mid"
   7-9 - "High"
   */

  function sequentialSizes(val) {
    var answer = "";
   
    switch(val) {
        case 1:
        case 2:
        case 3:
          answer = "Low"
          break;
        case 4:
        case 5:
        case 6:
          answer = "Mid"
          break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
      }
      
    return answer;
  }
  
  sequentialSizes(1);

  /*If you have many options to choose from, 
  a switch statement can be easier to write than many chained if/else if statements*/
  