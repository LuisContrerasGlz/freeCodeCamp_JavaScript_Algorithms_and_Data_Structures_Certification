/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

*/

/* Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".
You can set these object properties to whatever values you want, as long as "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.*/

var myDog = {
    "name": "Chu",
    "legs": 4,
    "tails": 1,
    "friends": []
};

/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.*/

//Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  
  var hatValue = testObj.hat;
  var shirtValue = testObj.shirt;

  /* The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
  However, you can still use bracket notation on object properties without spaces.*/

  //Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

  // Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];
  var drinkValue = testObj["the drink"]; 

/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.*/

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber = 16;     
  var player = testObj[playerNumber]; 

  /* After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. 
  You can use either dot or bracket notation to update.

  For example, let's look at ourDog:

  var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

Since he's a particularly happy dog, let's change his name to "Happy Camper". 
Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".
*/

//Update the myDog object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

myDog.name = "Happy Coder";

/* You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow". 
*/

//Add a "bark" property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  myDog.bark = "woof";

/* We can also delete properties from objects like this:
delete ourDog.bark; */

//Delete the "tails" property from myDog. You may use either dot or bracket notation.

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };

delete myDog.tails;

/* Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain.
This is most useful when you know that your input data is limited to a certain range.
*/

//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",

    }
    
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("charlie"));

  /* Sometimes it is useful to check if the property of a given object exists or not. 
  We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
  */

 //Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

 function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp]
    } else {
        return "Not Found";
    }
    // Only change code above this line
  }

  //Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
  //Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "Drake bell",
        "title": "it`s only time",
        "release_year": 2006,
        "formats": [
            "CD",
            "Digital"
          ]
    }
  ];

//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; 