/*There's a principle in programming called Don't Repeat Yourself (DRY). 
The reason repeated code is a problem is because any change requires fixing code in multiple places. 
This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

The describe method is repeated in two places. 
The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
}; */

//The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

  /* In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

   function Animal() { }
     Animal.prototype.eat = function() {
     console.log("nom nom nom");
   };

   This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. 
   It uses a technique called inheritance. 
   This challenge covers the first step: make an instance of the supertype (or parent). 
   You already know one way to create an instance of Animal using the new operator:

   let animal = new Animal();

   There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. 
   Instead, here's an alternative approach without those disadvantages:

   let animal = Object.create(Animal.prototype);

   Object.create(obj) creates a new object, and sets obj as the new object's prototype.
   Recall that the prototype is like the "recipe" for creating an object. 
   By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

   animal.eat();

   animal instanceof Animal;
   The instanceof method here would return true. */

   //Use Object.create to make two instances of Animal named duck and beagle.

   function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
    };


    let duck = Object.create(Animal.prototype);;
    let beagle = Object.create(Animal.prototype);; 

/* In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.
This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);

Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
let duck = new Bird("Donald");
duck.eat();

duck inherits all of Animal's properties, including the eat method. */

//Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();

/*When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor */

//Fix the code so duck.constructor and beagle.constructor return their respective constructors.

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

/*A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. 
Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat();
duck.fly();

duck.eat() would display the string nom nom nom in the console, and duck.fly() would display the string I'm flying!. */

/*Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. 
Then add a bark() method to the Dog object so that beagle can both eat() and bark(). 
The bark() method should print Woof! to the console.*/

function Animal() { }
Animal.prototype.eat = function() { 
    console.log("nom nom nom"); 
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle = new Dog();
beagle.eat;
beagle.bark;

/*In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);

Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};

It's possible to override an inherited method. 
It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. 
Here's an example of Bird overriding the eat() method inherited from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

- duck => Is eat() defined here? No.
- Bird => Is eat() defined here? => Yes. Execute it and stop searching.
- Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
- Object => JavaScript stopped searching before reaching this level. */

//Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());