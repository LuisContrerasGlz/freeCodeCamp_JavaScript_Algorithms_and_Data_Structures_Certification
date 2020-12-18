/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.*/

//Combine the if statements into a single if/else statement.

function testElse(val) {
    var result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
    
  }
  
  testElseIf(7);

/* Order is important in if, else if statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.*/

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

  /* if/else statements can be chained together for complex logic. 
  Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny"
    } else if (num < 10) {
      return "Small"
    } else if (num < 15){
      return "Medium"
    } else if (num < 20) {
      return "Large"
    } else {
      return "Huge";
    }
  
  }
  
  testSize(7);

  