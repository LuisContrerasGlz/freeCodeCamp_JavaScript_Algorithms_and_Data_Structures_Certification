/* Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among ALL instances of Bird. 

Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);

Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. 
Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.*/

//Add a numLegs property to the prototype of Dog

function Dog(name) {
    this.name = name;
    Dog.prototype.numLegs = 2;
  }

  let beagle = new Dog("Snoopy");

/* You have now seen two kinds of properties: own properties and prototype properties. 
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"]. */

//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line
  for (let property in beagle) {
    if (Dog.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

  /* There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

  let duck = new Bird();
  let beagle = new Dog();

  console.log(duck.constructor === Bird); 
  console.log(beagle.constructor === Dog);

  Both of these console.log calls would display true in the console.

  Note that the constructor property is a reference to the constructor function that created the instance. 
  The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. 

  Here's an example of how this could be used:

  function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
     return false;
    }
  }

  Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object. */

  //Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

  /* Up until now you have been adding properties to the prototype individually:

  Bird.prototype.numLegs = 2;

  This becomes tedious after more than a few properties.

  Bird.prototype.eat = function() {
  console.log("nom nom nom");
  }

  Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
  }

  A more efficient way is to set the prototype to a new object that already contains the properties. 
  This way, the properties are added all at once:

  Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
    }
 }; */

 //Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

 function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
