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