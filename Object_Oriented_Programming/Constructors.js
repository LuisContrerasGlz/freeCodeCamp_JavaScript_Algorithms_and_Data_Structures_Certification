/* Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 
Constructors follow a few conventions:

- Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
- Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might. */

//Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

/*Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();

NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. 
This tells JavaScript to create a new instance of Bird called blueBird. 
Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. 
Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; */

//Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

let hound = new Dog;