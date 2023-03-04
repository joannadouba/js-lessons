/*-----------------------------------------
       JS Advanced Topics: Objects
------------------------------------------ */
// Abstraction inside Constructor Functions
// Getters and Setters
// When we write constructor functions, we must be aware of the properties that are being displayed to the outside, since there are things we might not want to be exposed to the end user. So, we can define them as variables inside the constructor function instead to protect them. Example below:

function Circle1(radius) {
    this.radius = radius;

    //instead of:
    // this.defaultLocation = { x:0, y:0 };
    // this.computeOptimumLocation = function(factor) {
    //     console.log('optimum location', factor);
    // }
    let defaultLocation = { x:0, y:0 };
    // To access this variable (defaultLocation) from the outside of the object, we must do the following:
    Object.defineProperty(this, 'defaultLocation', 
        {
            get: function() {
                return defaultLocation;
            },
            set: function(value) {
                if(!value.x || !value.y)
                    throw new Error('Invalid location')
                defaultLocation = value;
            }
        }
    )

    let computeOptimumLocation = function(factor) { 
        console.log('optimum location', factor);
    }
    
    this.draw = function(){
        computeOptimumLocation(1);
        console.log('draw');
    }
}

const circle3 = new Circle1(10);
// circle3.computeOptimumLocation();
// circle3.draw();
console.log(circle3)
circle3.defaultLocation = {x: 1, y: 1};
console.log(circle3)

/*-----------------------------------------
       JS Advanced Topics: Prototypes
------------------------------------------ */

// Inheritance:
// Allows an object to take on methods and props from another object

// Classical Inheritance:
// If we have 2 classes Circle and Square, which have a common method (ex. computeOptimumLocation() ) which has the exact same code implementation inside of it. We don't want to repeat the code twice because if we have to change it, we have to change it in 2 places. Now let's imagine we have 100's or 1000's of these objects, maintaining the code becomes completely unmanageable.
// Instead of doing that, we can define a new class called Shape and include the computeOptimumLocation() method there, then have Circle and Square *inherit* the methods and properties of the Shape class.
// Shape Class (there are no classes in JS, but this is the explanation of Classical Inhertiance)
// Base / Super / Parent Class: Shape
// Derived / Sub / Child Class: Circle, Square
// Inheritance relationship: IS-A relationship (is a)
// -> Circle IS-A Shape

// In JS there are no classes, so it's Prototypical Inheritance
// Prototypical Inheritance:
// A prototype for an object is a *parent* object
// Every object in JS except for 1 object (to be discussed later) has a prototype, or parent and it *inherits* all the members found in the prototype.

let x = {};
// We will have a property in Dev Tools called "__proto__"
// Every object has a "constructor" property that was used to construct or create that object
// One method that is passed down by prototypical inheritance to the object "x" is the method .toString()

// We should NOT use the __proto__ in our code because it is a DEPRECATED PROPERTY
console.log(x.toString()); // returns [object Object]

let y = {};
// To get the Prototype of an object:
// Object.getPrototypeOf(object);
console.log(Object.getPrototypeOf(x));

if (Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) {
    console.log(true);
} else {
    console.log(false);
}

// When we typed 'x.toString()', the JS engine looked through the 'x' object first, didn't find the method, so it looked through the methods available to the Object Prototype which the 'x' object inherits from.

// Multi-level Inheritance
// When we create an Array, we are actually creating an object, because an Array is really an object, there is no typeOf Array 
let myArray = [];
console.log(typeof myArray); // returns object

// So, myArray has a prototype of Array, which has a prototype of Object
/*
                      ----> objectBase
                      |
                      |
            ----> arrayBase            
            |
            |
        myArray
*/

// objectBase, the prototype for Objects, is the *only* Object without a prototype.

// All objects created by the same 'constructor function' have the same prototype:
function Circle(radius) {
    this.radius = radius;
    
    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);
const circle2 = new Circle(5);

const circlePrototype = Object.getPrototypeOf(circle);
const circle2Prototype = Object.getPrototypeOf(circle2);

console.log(circlePrototype);
console.log(circle2Prototype);

if (circlePrototype === circle2Prototype) {
    console.log('circle and circle2 have the same prototype, which is ' + circlePrototype);
}

// The methods and properties that come from the baseObject (the Object prototype) are NOT enumerated. So, if we use a *for* loop to loop through the object, we will not see the toString() method, for example, but it stays available to the object. This method has an attribute of 'enumerable: false'
let person = { name: 'Michael'};

for (const key in person)
    console.log(key) // returns 'name', but no toString() or any other methods or props that are availabe to the 'person' object.

let objectBase = Object.getPrototypeOf(person); 
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor); /* returns { writable: true, 
                                      enumerable: false, 
                                      configurable: true, 
                                      value: ƒ
                                    } */
// configurable: means we can delete the method(or prop) if we want to
// enumerable: decides whether or not we see the method (or prop) when we enumerate an object (loop through it)
// writable: decides whether or not we can overwrite the method
// value: default value for a key or implementation of a method
 
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
})

person.name = 'John';
console.log(person); // returns { name: 'Michael' } because we switched 'writable' to false on the 'name' property in the 'person' object
console.log(Object.keys(person)); // returns an emtpy array because we turned enumeration on the name property to false

delete person.name;
console.log(person); // returns { name: 'Michael' } because we set 'configurable' to false

// Constructor functions also have a __proto__ property

let obj = {};
let objProto = obj.__proto__;
let baseObject1 = Object.prototype;
console.log(objProto);
console.log(baseObject1);

// obj.__proto__ and Object.prototype are exactly the same
// Bad practice to use .__proto__ in our code, but we can confirm equality like this:
if (objProto === baseObject1)
    console.log(true); // returns true because they are the same

// Same goes for arrays:
let array = [];

if (array.__proto__ === Array.prototype){
    console.log(true); // returns true because they are the same
}


// Prototype vs Instance Members (properties or methods):

// Below, we are instantiating only 2 instances of the Circle2 object using the contructor method. And in each one there is a draw method, so the draw method will be computed twice. Now let's imagine we have 1000's of instances of the Circle2 object, we would be holding a lot more information in memeory than we need to. So, we add the draw() method to the Circle prototype. This way, it is stored in memory only ONCE.

function Circle2(radius) {
    // Instance Members
    this.radius = radius;
    // this.draw = function() {
    //     console.log('draw');
    // }
}

// Prototype Members:
Circle2.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle2(1);
const c2 = new Circle2(1);

console.log(c1, c2); // the draw() method is under the __proto__ property of each circle.

// We can overwrite the default implementations for prototype methods that are writable (for ex. toString())
console.log(c1.toString()) // returns [object Object] due to default implementation
Circle2.prototype.toString = function() {
    return 'Circle2 with radius ' + this.radius;
}
console.log(c1.toString()); // returns 'Circle2 with radius 1'

// Instance members and prototype members can reference each other:
function Circle3(radius) {
    // Instance Members
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

// Prototype Members:
Circle3.prototype.draw = function() {
    console.log('draw');
    this.move();
}

const c3 = new Circle3(1);
const c4 = new Circle3(1);

Circle3.prototype.toString = function() {
    return 'Circle3 with radius ' + this.radius;
}
c3.draw(); // returns 'draw' then 'move'
// We can also do the reverse, and reference a prototype member inside an instance member

// When we are dealing with Object references (like adding a draw method to the prototype of the Circle object), it doesn't matter if we instantiate the new Circles before or after the definition of the draw function on the prototype because we are dealing with Object references.

// Object.keys() only returns *instance members* and NOT *prototype members*
console.log('c3 keys: ' + Object.keys(c3)); // returns c3 keys: radius,move
// for loop returns both *instance members* AND *prototype members*
for (const key in c3) console.log('c3 key ' + key); /* returns c3 key radius
c3 key move
c3 key draw
c3 key toString */
