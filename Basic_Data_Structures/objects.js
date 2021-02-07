/* At their most basic, objects are just collections of key-value pairs. 
In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 
Take a look at an example:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

The above code defines a Tekken video game character object called tekkenCharacter. 
It has three properties, each of which map to a specific value. 
If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

tekkenCharacter.origin = 'South Korea';

This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. 
Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange';

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. 
Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is.
Here's an example with a variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

After adding all the examples, the object will look like this:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

*/

//A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  
  console.log(foods);

/* Now let's take a look at a slightly more complex object. 
Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects.

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

nestedObject has three properties: id (value is a number), date (value is a string), and data (value is an object with its nested structure). 
While structures can quickly become complex, we can still use the same notations to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:

nestedObject.data.onlineStatus.busy = 10;
*/

//Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45;
  
  console.log(userActivity);

/*In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. 

For instance, imagine that our foods object is being used in a program for a supermarket cash register. 
We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. 
This might look like:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, or undefined if it is not present. 
Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.*/

/*We've defined a function, checkInventory, which receives a scanned item as an argument. 
Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));

  /* Now you know what objects are and their basic features and advantages. 
  In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. 
  In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

  Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:
  delete foods.apples; */

  //Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  
  console.log(foods);

/*Now we can add, modify, and remove keys from objects. 
But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this.
One uses the hasOwnProperty() method and the other uses the in keyword. 
If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
*/

/*We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. 
Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.*/

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    if (users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff') && users.hasOwnProperty('Sarah') && users.hasOwnProperty('Ryan')){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isEveryoneHere(users));

/* Sometimes you may need to iterate through all the keys within an object. 
This requires a specific syntax in JavaScript called a for...in statement. 
For our users object, this could look like:

for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan

In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, 
resulting in each user's name being printed to the console. 
NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.*/

/*We've defined a function countOnline which accepts one argument (a users object).
 Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. */

 function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
  }

  /*We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument.
  this will return an array with strings representing each property in the object. 
  Again, there will be no specific order to the entries in the array.*/

  //Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
   return Object.keys(obj);
  
  }
  
  console.log(getArrayOfUsers(users));

  /*Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. 
  Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!
  */

  /* Take a look at the object we've provided in the code editor. The user object contains three keys. 
  The data key contains five keys, one of which contains an array of friends. 
  From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. 
  Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
  */

 let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, "Pete"));


