/*-----------------------------------------
              Objects Exercises
------------------------------------------ */

// Exercise 1: Address Object
// Create an object that has 3 keys: street, city and zipCode
// Write a function showAddress that console logs the key and value pairs from the Address Object

const address = {
    street: '1725 Frobisher Lane',
    city: 'Ottawa',
    zipCode: 'K1G0E6'
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);

// Exercise 2:
// - Write a factory function that initializes that address object from the prev. exercise
// - Write a contructor function that initializes the address object from the prev. exercise

// factory function:
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

let addressOne = createAddress('3142 County Rd 15', 'Fournier', 'k0b1g0');
console.log(addressOne);

// constructor function:
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let addressTwo = new Address('3485 Baycrest Rd', 'Ottawa', 'k1g3e6')
console.log(addressTwo)


// Exercise 3: 
// - Create a function which checks if 2 objects contain equal values for their keys
// - Create a function which checks if 2 variables are pointing to the same reference object

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
console.log(address1.toString())

function areEqual(address1, address2) {

    // My solution:
    // My solution is good because it tackles any number of properties in the Address object whereas Mosh's solution is more elegant but more specific to the individual keys.

    // let address1String = '';
    // for (let key in address1) {
    //     address1String += address1[key];
    //     address1String += ' ';
    // }
    // console.log(address1String);

    // let address2String = '';
    // for (let key in address2) {
    //     address2String += address2[key];
    //     address2String += ' ';
    // }

    // console.log(address2String);

    // if (address1String === address2String) {
    //     return true
    // }

    // return false

    // A more elegant solution:
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

console.log(areEqual(address1, address2));



function areSame(address1, address2) {
    // My Solution:
    // if (address1 === address2) {
    //     console.log('same');
    //     return true;
    // }

    // return false

    // A more elegant solution is:
    return address1 === address2
}

console.log(areSame(address1, address2));

let address3 = address1;
console.log(areSame(address1, address3));


// Exercise 4:
// Create an object literal with the following properties:
    // title
    // body
    // author
    // views
    // comments
    //      (author, body)
    // isLive

let blogPost = {
    title: 'The differences between JavaScript and TypeScript',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Joanna Douba',
    views: 10275,
    comments: [
        {
            author: 'AJ Jabak',
            body: 'One of the best articles about this topic ever.'
        },
        {
            author: 'Joanna Douba',
            body: 'Thanks boo!'
        }
    ],
    isLive: true,
}

console.log(JSON.stringify(blogPost))


// Exercise 5:
// Write a constructor function to make the post above

function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

const newPost = new Post('Hello World', 'Lorem ipsum', 'Joanna Douba')

console.log(JSON.stringify(newPost))

const priceRanges = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10,
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20,
    },
    {
        label: '$$$',
        tooltip: 'Pricey',
        minPerPerson: 21,
        maxPerPerson: 40,
    },
]

