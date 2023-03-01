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
