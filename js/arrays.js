/* --------------------------------------------------
                        Arrays
-----------------------------------------------------*/
// Adding Elements to an array
const numbers = [3, 4];

// Add to the END of the array:
nums.push(5, 6);

// Add elements to the BEGINNING of the array:
nums.unshift(1,2);
console.log(nums);

// Add elements to the MIDDLE of the array:
nums.splice(2, 0,'a','b');
console.log(nums);

// Finding PRIMITIVES inside of an array:
console.log(nums.indexOf(3))
// OR 
console.log(nums.includes(4)) // returns true

// Finding OBJECTS inside of an array:
// We CANNOT use .includes()
const courses = [
    { id: 1, name:'Course A' },
    { id: 2, name:'Course B' },
]

console.log(courses.includes({ id: 1, name:'Course A' })) // returns false because Objects are Reference Type NOT Value type

// Correct way is to use .find()
// const course = courses.find(function(course){
//                     return course.name === 'Course A' // Returns the first element that matches the criteria
// })

// console.log(course)

// We can also use .findIndex(), which returns the index of the element if found, if not , it returns -1
// const course = courses.findIndex(function(course) {
//     return course.name === 'Course XYZ'
// })

const course = courses.findIndex(course => course.name === 'Course XYZ')

console.log(course)


// Removing Elements from an array
const numbersArray = [ 1,2,3,4 ];

// Remove the last element from an array and return it:
const last = numbersArray.pop();
console.log(numbersArray);
console.log(last);

// Remove the first element from an array and return it:
const first = numbersArray.shift();
console.log(numbersArray);
console.log(first);

// Remove an element (or more) from an array:
const middle = numbersArray.splice(2, 2);
console.log(numbersArray);

// Emptying an array
let numbersArr = [ 1, 2, 3, 4 ];
let another = numbersArr;

// Solution 1: Does not work if there is another reference to the array in the code like in the case of the 'another' variable above
// numbersArr = [];
// console.log(numbersArr); // returns []
// console.log(another); // returns [ 1, 2, 3, 4 ]

// Solution 2: Uses .length property -- best solution
// numbersArr.length = 0;
// console.log(numbersArr); // returns []
// console.log(another); // returns []

// Solution 3: Uses .splice() method -- also a good solution
// numbersArr.splice(0, numbers.length);
// console.log(numbersArr);
// console.log(another);

// Solution 4: Uses while loop -- NOT recommended because it is the most cpu intensive since it will keep repeating array.length times, so the bigger the array, the more taxing this method is. STAY AWAY
while (numbersArr.length > 0 ) {
    numbersArr.pop();
}
console.log(numbersArr);
console.log(another);

// Combining and Slicing Arrays
// Combining arrays: using the .concat() method
const firstArr = [ 1, 2, 3 ];
const secondArr = [ 4, 5, 6 ];

const combined = firstArr.concat(secondArr);
console.log(combined); // returns [1, 2, 3, 3, 4, 5]

const slice = combined.slice(2, 4) // When given 2 arguments (start index, end index)
console.log(slice) // returns [ 3, 4 ]

// const slice = combined.slice(2) // returns a new array with all the elements after the starting index argument
// console.log(slice) // returns [ 3, 4, 5, 6 ]
// console.log(combined) // returns [ 1, 2, 3, 4, 5, 6 ]

// const slice = combined.slice() // returns the entire array and in this case copies the entire array into the new variable
// console.log(slice) // returns [ 1, 2, 3, 4, 5, 6 ]

// A better way to combine arrays is using the ... spread operator:
const combinedArr = [...firstArr, ...secondArr];
console.log(combinedArr);

// Another way to copy an array using the ... spread operator:
const copyArr = [ ...combinedArr ];
console.log(copyArr); 


// Iterating an Array
const nums = [ 1, 2, 3 ]

// Method 1: Using for...of loop
for (let number of nums ) {
    console.log(number);
}

// Method 2: Using forEach() method
nums.forEach(function(number) {
    console.log(number)
})

// forEach(function()) can be written as an arrow function:
// And it can take another argument 'index' which pulls in the index of the element from the array
nums.forEach((number, index) => console.log(`${index}: ${number}`))


// Joining Arrays
// We can join arrays using the .join() method, which takes 1 parameter (separator), and this parameter should be a String

// nums = [ 1, 2, 3 ]
const joined = nums.join(',');
console.log(joined)

// A useful technique is to use a combination of the .join() and .split() methods to remove spaces and replace them with - . This is useful for creating URL slugs out of titles in a blog for example.
let message = 'The difference between TypeScript and JavaScript';

message = message.toLowerCase(message);
console.log(message)

const parts = message.split(' ');
console.log(parts);

const url = parts.join('-');
console.log(url);


// Sorting Arrays
// We can sort arrays depending on what's inside them. 
// If the array contains primitives, we can use the .sort() method:
const numbers_arr = [ 2, 3, 1 ];
numbers_arr.sort();
console.log(numbers_arr);

const namesArray = ['Joanna', 'Abed Ali', 'Nour', 'Jad'];
namesArray.sort();
console.log(namesArray); // returns ['Abed Ali', 'Jad', 'Joanna', 'Nour']

// If the array contains words starting with both upper and lowercase, then it is an IMPORTANT NOTE: Strings are converted to numbers using the ASCII chart, and Uppercase letters have a higher value than lowercase letters, so the sorting will not be correct. See example:
const names = [ 'joanna', 'abed ali', 'Nour', 'Jad'];
names.sort();
console.log(names); // returns [ 'Jad', 'Nour', 'abed ali', 'joanna' ]

// If the array contains an object, we have to use another way:

const lmsCourses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javascript'},
];

lmsCourses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    //.toLowerCase() can also be used, but it must be used in both cases.

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(lmsCourses);

// Testing the elements of an Array
// .every() method allows us to check if every item in the array satisfies a certain condition set in the callback function argument

 // nums = [ 1, 2, 3 ]
const allPositive = nums.every(value => value >= 0);
console.log(allPositive);

// .some() method allows us to check if at least one item in the array satisfies a certain condition set in the callback function argument

nums.push(-1);
console.log(nums); // returns [1, 2, 3, -1]

const atLeastOnePositive = nums.some(value => value >= 0);
console.log(atLeastOnePositive);

const atLeastOneNegative = nums.some(value => value < 0);
console.log(atLeastOneNegative);


// Filtering an Array
// We can filter an array based on specific conditions using the .filter() method and its callback function

// Get the numbers in the array that are positive:
// nums = [1, 2, 3, -1]
const filtered = nums.filter(value => value >= 0);
console.log(filtered); // returns [1, 2, 3]

 // Mapping an Array
 // We can map the items in the array to many things including a string of HTML markup, like below:
const items = filtered.map( value => `<li>${value}</li>`);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html)

// We can also map an array to an object
const elements = filtered.map(value => ({value}))

// The above is equivalent to:
// const elements = filtered.map(function(value) {
//     return { value: value }
// })
console.log(JSON.stringify(elements)) 

// We can CHAIN .filter() and .map() like so:
const numeros = [ 1, -1, 2, 3 ];
const itemz = numeros.filter( value => value >=0 ) // returns [ 1, 2, 3 ]
                     .map(value => ({value})) // returns [{"value":1},{"value":2},{"value":3}]
                     .filter(obj => obj.value > 1) // returns [{"value":2},{"value":3}] 
                     .map(obj => obj.value); // returns [ 2, 3 ];
console.log(itemz);

// Reducing an Array: 
// Add all the numbers in an array which contains numbers using the .reduce() method
const sum = numeros.reduce(
    (accumolator, currentValue) => accumolator + currentValue, 0);
console.log(sum)

/* --------------------------------------------------
                        Exercises
-----------------------------------------------------*/

// Exercise 1: Array from Range
// Write a function that takes a range (min, max) and returns an array with all the numbers from min to max

const numberz = arrayFromRange( -10, -4 );
console.log(numberz);

// My solution:
function arrayFromRange(min, max) {
    let array = [];

    for (let i = min; i <= max; i++) {
        array.push(i);
    }

    return array;
}

// Exercise 2: Includes
// Write a function .includes(array, searchElement), which searches for the searchElement in the array and returns true if it finds this element

const numbers1 = [ 1, 2, 3, 4 ];

console.log(numbers1.includes(3))

// My solution:
function includes(array, searchElement) {
    return array.some(searchElement)
}

// Mosh's solution:
// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//             return true;
//         return false;
// }

// Exercise 3: Except
// Write a function .except() that takes an array and returns another array with
// numbers1 = [ 1, 2, 3, 4 ]
numbers1.push(1);
console.log(`numbers1 Array: ${numbers1}`)
const output = except(numbers1, [1]);

console.log(output);

// My Solution:
function except1(array, excluded) {
    // Loop through the 'excluded' array
        // For each element in the 'excluded' array, check if the array has an item matching the 'element', if it does, then the .indexOf() method will return any other number than -1
            // if the 'element' in the 'excluded' array is contained in 'array', then filter the 'array'.
            // Set the 'array' to be equal to the filtered array
    
    // Return 'array'

    for (const element of excluded) {
        let index = array.indexOf(element);
        if (index !== -1) {
            console.log('found a deletable element with index: ' + index);
            array = array.filter(value => value !== element);
            // console.log(array)   
        }
    }
    return array;
}

// Mosh's solution: 
function except(array, excluded) {
    const output = [];

    for (let element of array){
        if(!(excluded.includes(element)))
            output.push(element);
    }
}

// Exercise 4: Moving an element
// Write a function .move() which moves an item inside an array. 
// The function should take the array, an index for the element to be moved, and an offset (how much we want it to move within the array)
const numbers2 = [ 1, 2, 3, 4 ];
// const numbers = [];

const output2 = move(numbers2, 0, 4);
console.log(output2)

// My Solution
function move(array, index, offset) {
    
    if (array.length === 0) 
        return 'Error: Your starting array does not contain any elements';
 
    const newIndex = index + offset;
    
    if (newIndex < 0 || newIndex >= array.length) {
        console.error('Invalid offset.')
    }
    
    // Mosh suggests copying the array into a new variable so we are not messing up the original array
    // const output = [...array];
    const movingElement = array[index];
    array.splice(index, 1);
    array.splice(newIndex, 0, movingElement);

    return array;
}

// Mosh's Solution:
// function move(array, index, offset){
//     const position = index + offset;

//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0]
//     output.splice(position, 0, element);
//     return output;
// }

// Exercise 5: 
// Write a function .countOccurrences() that takes an array and a searchElement and counts the number of occurrences of the searchElement inside the array.
const numbers3 = [ 1, 2, 3, 4, 1, 1, 2 ];

const count3 = countOccurrences(numbers, 2);

console.log(count3);

// My Solution:
function countOccurrences1(array, searchElement) {
    
    // First Solution:
    let count = 0;
    
    for (const item of array) {
        if (item === searchElement){
            count++;
        }
    }
    return count;

    // Second Solution: Using the .reduce() method:
    // let reduced = array.reduce((accumulator, currentValue) => { 
    //     if(currentValue === searchElement){
    //         accumulator++;
    //     }
    //     return accumulator;
    // }, 0)
    // return reduced;
}

// Mosh's Solution:
// First Solution is the same! :D 
// Second solution (using .reduce())
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, occurrence);
        return accumulator + occurrence;
    }, 0);
}

// Exercise 6: Get Max
// Write a function .getMax() which takes an array and returns the maximum number in that array.
const numbers4 = [ 1, 352, 3, 7, 10452 ];
const max = getMax(numbers4);
console.log(max);

function getMax(array) {
    // My Solution 1:
    if (array.length === 0)
        return undefined;
    // let max = null;
    // for (const item of array) {
    //     if (item > max) {
    //         max = item;
    //     }
    // }
    // return max;

    // My Solution 2: Using .reduce()
    // return array.reduce((accumulator, currentValue) => {
    //     if (currentValue > accumulator) 
    //         accumulator = currentValue;
    //     return accumulator;
    // })

    // Mosh's Solution 1:
    // let max = array[0];
    // for(let i = 1; i < array.length; i++) {
    //     if (array[i] > max)
    //         max = array[i];
    // }
    // return max

    // Mosh's Solution 2
    return array.reduce((a, c) =>  ( a > c) ? a : c);
}

// Exercise 7: Movies
// Get all movies in 2018 with rating > 4
// Sort them by their rating in descending order
// Display title property on the console
const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
    { title: 'e', year: 2017, rating: 4.1},

]

getMovies(movies);

// My Solution:
function getMovies(array) {
    let filtered = array
                    .filter(value => value.year === 2018 && value.rating > 4)
                    .sort((a,b) => {
                        if (a.rating < b.rating) return 1;
                        if (a.rating > b.rating) return -1;
                        return 0; })
                    .map(value => value.title);
    
    for(let i= 0; i < filtered.length; i++){
        console.log(filtered[i]);
    }
}

//Mosh's Solution
const titles = movies
                    .filter( movie => movie.year === 2018 && movie.rating > 4)
                    .sort ((a,b) => a.rating - b.rating)
                    .reverse()
                    .map( movie => movie.title);

console.log(titles);                    