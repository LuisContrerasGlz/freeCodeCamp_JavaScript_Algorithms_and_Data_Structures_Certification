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
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! 
This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

In order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
}; */

//Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
For example, here the Bird constructor creates the duck object:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

duck inherits its prototype from the Bird constructor function. 
You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
This would return true. */

//Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

/* All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

Because a prototype is an object, a prototype can have its own prototype! 
In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. 
This is an example of the prototype chain. 
In this prototype chain, Bird is the supertype for duck, while duck is the subtype. 
Object is a supertype for both Bird and duck. 
Object is a supertype for all objects in JavaScript. 
Therefore, any object can use the hasOwnProperty method. */

//Modify the code to show the correct prototype chain.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

