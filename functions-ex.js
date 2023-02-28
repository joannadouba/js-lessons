/* --------------------------------------------------
               Functions Exercises
-----------------------------------------------------*/

// Exercise 1: 
// Create a function called sum() that takes a varying number of arguments and returns their sum
// Challenge: Modify the function to be able to take an array and still return the sum of its elements

// My Solution:
function sum(...values) {    
    let args = values;
    if (Array.isArray(values[0])) { 
        args = values[0]
    } 

    return args.reduce((a,b) => a + b);
}

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));

// Mosh's Solution: 
function moshSum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    
    return items.reduce((a,b) => a + b);
}

console.log(moshSum(1, 2, 3, 4));
console.log(moshSum([1, 2, 3, 4]));


// Exercise 2:
// Create a circle object which has a radius property that we can read and write to 
// My Solution
const circle = {
    _radius: 2,
    _area: 12.57,
    get radius() {
        return this._radius;
    },
    set radius(value) {
        if (typeof value !== 'number')
            throw new Error('Input is not a number');
        
        this._radius = value;
    },
    get area() {
        return this._area;
    }
}

circle.radius = 2;
circle.area = 5;
console.log(circle.area)

// Mosh's Solution:
const circle1 = {
    radius: 2,
    get area() {
        return Math.PI * (this.radius**2);
    }
}

console.log(circle1.area)

// Exercise 3: Error Handling
// Add error handling to the below function to handle other types of inputs and throw appropriate exceptions

const numbers = [1, 2, 3, 4];

// My solution:
try {
    const count = countOccurrences(true, 1);
    console.log(count);
}
catch(error) {
    console.log(error.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('The first argument should be an array');

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, occurrence);
        return accumulator + occurrence;
    }, 0);
}
