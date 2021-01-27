/*Prior challenges showed that regular expressions can be used to look for a number of matches. 
They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
*/

//Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

/* In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. 
There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
*/

//Use the anchor character ($) to match the string "caboose" at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

/* Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

These shortcut character classes are also known as shorthand character classes.
*/

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

/*You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. 
A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. 
This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

*/

//Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

/* You've learned shortcuts for common string patterns like alphanumerics. 
Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. 
This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
*/

//Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

/* The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
*/

//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

/*Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. 
Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

/*The challenges so far have covered matching letters of the alphabet and numbers. 
You can also match the whitespace or spaces between letters.
You can search for whitespace using \s, which is a lowercase s. 
This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]

*/

//Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);

/* You learned about searching for whitespace using \s, with a lowercase s. 
You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. 
This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

*/

//Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/* Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. 
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). 
You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

*/

// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);

/*You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.
 Sometimes you only want to specify the lower number of patterns with no upper limit.

 To only specify the lower number of patterns, keep the first number followed by a comma.

 For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

 let A4 = "haaaah";
 let A2 = "haah";
 let A100 = "h" + "a".repeat(100) + "h";
 let multipleA = /ha{3,}h/;
 multipleA.test(A4); // Returns true
 multipleA.test(A2); // Returns false
 multipleA.test(A100); // Returns true
 */

 //Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

 let haStr = "Hazzzzah";
 let haRegex = /Haz{4,}ah/; 
 let result = haRegex.test(haStr); 

 /* You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
 Sometimes you only want a specific number of matches.

 To specify a certain number of patterns, just have that one number between the curly brackets.

 For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

 let A4 = "haaaah";
 let A3 = "haaah";
 let A100 = "h" + "a".repeat(100) + "h";
 let multipleHA = /ha{3}h/;
 multipleHA.test(A4); // Returns false
 multipleHA.test(A3); // Returns true
 multipleHA.test(A100); // Returns false

 */

 //Change the regex timRegex to match the word "Timber" only when it has four letter m's.

 let timStr = "Timmmmber";
 let timRegex = /Tim{4}ber/; 
 let result = timRegex.test(timStr);

 /*Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
 However, it may be important to check for them nonetheless.

 You can specify the possible existence of an element with a question mark, ?. 
 This checks for zero or one of the preceding element. 
 You can think of this symbol as saying the previous element is optional.
*/

//Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

/* Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

A more practical use of lookaheads is to check two or more patterns in one string. 
Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

*/

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

let sampleWord = "astronaut";
var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

/* Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
*/

/*Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

/* Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. 
There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. 
This number starts at 1 and increases with each additional capture group you use.
An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "reg

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

*/

//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

/*Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
You can search and replace text in a string using .replace() on a string. 
The inputs for .replace() is first the regex pattern you want to search for.
The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

*/

/*Write a regex fixRegex using three capture groups that will search for each word in the string "one two three". 
Then update the replaceText variable to replace "one two three" with the string "three two one" and assign the result to the result variable.
 Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

/* Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");




 


