/* --------------------------------------------------
                        Functions
-----------------------------------------------------*/
// In JavaScript, FUNCTIONS are OBJECTS

// Function declaration:
function walk() {
    console.log('walk')
}

// Named Function expression:
let run = function run() {
    console.log('run, forrest, run');
};

run(); // returns 'run, forrest, run'

// Anonymous Function expression:
let run1 = function() {
    console.log('run1')
};

run1() // returns 'run1'

// 'move' and 'run' refer to the same object in memory.
let move = run;
move();

/* The MAIN DIFFERENCE between Function declaration and Function Expressions is that ONLY with function declaration can we call the function BEFORE it is defined in the code. Ex:

walk();

function walk() {
    console.log('walk');
}

In functions defined using expressions, this DOES NOT WORK. We will have to put the function call AFTER the function expression NOT before.
*/

// Hoisting: 
// Moving function declarations to the TOP of the file. This is done AUTOMATICALLY by the JS engine when the code is interpreted.

// Since FUNCTIONS are OBJECTS, they have properties. 
// One of their properties, which we can access is 'arguments'
function sum(){
    let total = 0;
    console.log(arguments)
    for (const arg of arguments){
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// The Rest Operator
// ...args is called rest operator
// When we apply the rest operator to a parameter of a function, we can pass a varying number of arguments to this function. The Rest operator will take all the arguments and put them in an array

// To rewrite the previous function, we can use the reduce() function on the returned array
function sum1(...args) {
    console.log(args) // returns an array of all the arguments passed to the function
    return args.reduce((a,b) => a + b);
}

console.log(sum1(1,2,3,4,5,10)) // returns [1, 2, 3, 4, 5, 10]

// Using the REST OPERATOR with other parameters
// Let's say we want to write a function that calculates total price of a shopping cart and adds a discount. The function should take the discount as one parameter, and all the prices as the second parameter
function cartSum(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * ( 1 - discount);
}

console.log(cartSum(0.1, 20, 30))

// The Rest parameter must be the LAST parameter
/* 
    INCORRECT code:
    function cartSum(discount, ...prices, someValue) {
       // some code
    }

    CORRECT code: 
    function cartSum(discount, someValue, ...prices) {
        // some code
    }
*/

// Passing DEFAULT VALUES to function parameters:
/* Let's say we are setting the default values for function parameters.
We can do this like so:
Below, we write a function that calculates the interest for any given loan by taking a principal amount, a rate, and the term of the loan in years */
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * (rate / 100) * years;
}

console.log(interest(10000)) // returns 1750

// A better way to do this is to set the defaults in the parameters themselves, HOWEVER, if we set one default value for a parameter, we must set the default values for ALL the parameters AFTER that one.
function loanInterest(principal, rate = 3.5, years = 5) {
    return principal * (rate / 100) * years;
}

console.log(loanInterest(10000)) // also returns 1750


// Getters & Setters:
// Getters and setters are functions we define using the get and set keywords inside of objects to make them mutatable (so we can update and query them)

const person = {
    firstName: 'John',
    lastName: 'Smith', 
    // getter method
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    // setter method
    set fullName(fullName) {
        const parts = fullName.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName) // returns John Smith
person.fullName = 'John Doe'
console.log(person.fullName) // returns John Doe

// Error Handling:
// We should do error handling at the beginning of a function so we can check if the input is in the correct form (ex. if we need a string, are we getting a string input?) before we execute the handling portion of the function (which does something to / with the data inputs)

// person.fullName = true;
// console.log(person) // returns Uncaught TypeError because we cannot perform .split() on non-strings

const person1 = {
    firstName: 'John',
    lastName: 'Smith', 
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(fullName){
        if (typeof fullName !== 'string')
            // THROWING an exception:
            throw new Error('Input is not a string');

        const parts = fullName.split(" ");

        if (parts.length !== 2)
            throw new Error('Please enter a first and last name');
        
        if (parts[0] == '' || parts[1] == '') {
            throw new Error('Please enter a first and last name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// Use try() catch() to try setting the input and to be able to catch any errors that may occur. This is BEST PRACTICE.

// BAD PRACTICE:
// person1.fullName = true;
// console.log(person1);

// BEST PRACTICE:
try {
    person1.fullName = 'Frank Castle';
    console.log(person1);
}
catch(error) {
    console.error(error);
}


// Unless we absolutely HAVE to, we avoid declaring global variables, and declare local block-level variables instead
// An exception is declaring a variable for an element on the page. This variable needs to be GLOBAL.

// The 'this' keyword
// 'this' references the OBJECT that is executing the current function

// When we are inside a method which is inside an object, 'this' refers to the object itself, but NOT inside of callback functions

// When we are inside a regular function, 'this' refers to the global object (window in Browser, or 'global' in Node)

// Summary:
// method -> obj
// regular or callback function -> global (window, global)


const video = {
    title: 'Frasier',
    play() {
        console.log(this);
    }
};

video.play(); // 'this' refers to the video object, so video object is returned

video.stop = function () {
    console.log(this);
}

video.stop(); // .stop() is a new method defined inside the video object, so 'this' refers to the video object, so video object is returned

function playVideo() {
    console.log(this);
}

playVideo(); // playVideo() is a regular function, not defined as a method within an object, so 'this' refers to the GLOBAL OBJECT

// 'this' keyword and Constructor functions:
// Instead of the GLOBAL object, 'this' now refers to the Video object created when the 'new' keyword is used to instantiate a new instance of the Video object.
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('The Mentalist');

// 'this' keyword inside Callback Functions
// When we use the 'this' keyword inside callback functions inside a method inside an object, 'this' no longer refers to the object itself, but to the GLOBAL object, because Callback functions are like regular functions
const video2 = {
    title: 'The Matrix',
    tags: ['Sci-Fi', 'Documentary', 'Thriller'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title + ' is a ' + tag + ' movie.') // returns 'undefined' unless we pass the 'this' keyword as the other parameter for the forEach() function
        }, this);
    },
}

video2.showTags();

// Changing the value of 'this':
// There are 3 methods to achieve this result, with LAST one being the BEST PRACTICE.

// Method 1: Using the 'self' or 'that' variable
const video3 = {
    title: 'Rainman',
    tags: ['Comedy', 'Drama'],
    showTags() {
        const self = this; // 'this' here refers to the video3 object
        this.tags.forEach(function(tag){
            console.log(self.title + ' is a ' + tag + ' movie.') // returns 'undefined' unless we pass the 'this' keyword as the other parameter for the forEach() function
        });
    },
}

video3.showTags();

// Method 2: Using the .bind() method which is available to all objects, and functions in JS are objects
const video4 = {
    title: 'Gone in 60 Seconds',
    tags: ['Thriller', 'Drama'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title + ' is a ' + tag.toLowerCase() + ' movie.') 
        }.bind(this));
    },
};

video4.showTags();

// BEST PRACTICE:
// Method 3: Using the ARROW Function notation within the method
// The 'this' keyword now refers to the object itself, and not the global object because 'this' is passed through the function using the arrow notation.
const video5 = {
    title: 'How High',
    tags: ['Stoner', 'Comedy'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title + ' is a ' + tag.toLowerCase() + ' movie.') 
        });
    },
};

video5.showTags();
