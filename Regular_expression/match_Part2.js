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
