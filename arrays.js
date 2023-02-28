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
