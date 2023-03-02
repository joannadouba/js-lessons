// Object-oriented Programming (OOP)

const circle = {
    radius: 1,  // values can be numbers
    location: { // or objects
        x: 1,
        y: 1
    },
    isVisible: true, // or booleans
    draw: function() {
        console.log('draw')
    }
}

// circle.draw()

// Factory Functions
// We can create a function that returns an object so we don't duplicate code
function createCircle(radius) {
    return {
        radius, // a diff notation for radius: radius
        draw() {
            console.log('draw circle')
        }
    }
}

const circle1 = createCircle(1)
console.log(circle1)

// Constructor functions

function Circle(radius) { // We are using Pascal Case (capitalizing each first letter ) because that's the convention for this type of function
    this.radius = radius
    this.draw = function() {
        console.log('drawing circle')
    }
}

const circle2 = new Circle(2)
console.log(circle2)

// Objects are dynamic
// We can add or remove properties to and from objects 

// Referring to the above circle object from line 1:
circle.color = 'yellow'; // adding a new property
console.log(circle);

delete circle.color;
console.log(circle);

for (let key in circle) {
    console.log(key, circle[key]);
}

// for...of loops don't work with Arrays
// Object.keys(obj) method returns an array, so it can be used with for..of
for (let key of Object.keys(circle)) {
    console.log(key);
}

// Object.entries(obj) method returns an array which contains both the key and the value of each key in the object
for (let entry of Object.entries(circle))
    console.log(entry);

// 'in' allows us to check if a certain string is in the object keys
('location' in circle) ? console.log('yes') : console.log('no')

// Cloning an object:
const another = {};

// Old method for cloning an object:
for (let key in circle) {
    another[key] = circle[key];
}

console.log(another)

// New method for cloning an object:
// first argument in assign() allows you to add properties to the object being cloned
const anotherCircle = Object.assign({}, circle);
console.log(anotherCircle)

// Newest and easiest method for cloning an object:
// Using the 'spread' operator or ...
const aThirdCircle = { ...circle };
console.log(aThirdCircle);


// Object-oriented Programming (OOP)

const circle = {
    radius: 1,  // values can be numbers
    location: { // or objects
        x: 1,
        y: 1
    },
    isVisible: true, // or booleans
    draw: function() {
        console.log('draw')
    }
}

// circle.draw()

// Factory Functions
// We can create a function that returns an object so we don't duplicate code
function createCircle(radius) {
    return {
        radius, // a diff notation for radius: radius
        draw() {
            console.log('draw circle')
        }
    }
}

const circle11 = createCircle(1)
console.log(circle11)

// Constructor functions
function Circle(radius) { // We are using Pascal Case (capitalizing each first letter ) because that's the convention for this type of function
    this.radius = radius
    this.draw = function() {
        console.log('drawing circle')
    }
}

const circle22 = new Circle(2)
console.log(circle22)

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

// Objects are dynamic
// We can add or remove properties to and from objects 

// Referring to the above circle object from line 1:
circle.color = 'yellow'; // adding a new property
console.log(circle);

delete circle.color;
console.log(circle);

for (let key in circle) {
    console.log(key, circle[key]);
}

// for...of loops don't work with Arrays
// Object.keys(obj) method returns an array, so it can be used with for..of
for (let key of Object.keys(circle)) {
    console.log(key);
}

// Object.entries(obj) method returns an array which contains both the key and the value of each key in the object
for (let entry of Object.entries(circle))
    console.log(entry);

// 'in' allows us to check if a certain string is in the object keys
('location' in circle) ? console.log('yes') : console.log('no')

// Cloning an object:
const another1 = {};

// Old method for cloning an object:
for (let key in circle) {
    another1[key] = circle[key];
}

console.log(another1)

// New method for cloning an object:
// first argument in assign() allows you to add properties to the object being cloned
const aSecondCircle = Object.assign({}, circle);
console.log(aSecondCircle)

// Newest and easiest method for cloning an object:
// Using the 'spread' operator or ...
const a3rdCircle = { ...circle };
console.log(a3rdCircle);