console.log('Hello world')

// Declare a variable type which follows these rules:
// If a customer has more than 100 points,
// They are a 'gold' customer
// Otherwise, they are a 'silver' customer

// Ternary operator, basically a shortened version of an if...else statement
let points = 110
let customerType = points > 100 ? 'gold' : 'silver'
console.log(customerType)

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true) // returns true
console.log(true && false) // returns false

// Real world scenario: Loan approval application
// If applicant has high income AND a good credit score, 
// they are eligible for a loan.
let highIncome = false
let goodCreditScore = true

let eligibleForLoan = highIncome && goodCreditScore
console.log(eligibleForLoan) // returns false

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// Real world scenario: Change rules such that if the applicant
// has high income OR a good credit score, they are elible for a loan
eligibleForLoan = highIncome || goodCreditScore
console.log('Eligible ', eligibleForLoan) // returns true

// NOT (!) Operator
// Real world scenario: If the applicant is NOT eligible for a loan, refuse their application
let applicationRefused = !eligibleForLoan
console.log('Application Refused', applicationRefused) // returns false

// Logical Operators with Non-booleans
// To compare booleans to non-booleans or non-booleans to non-booleans, we must check if each operand is truthy or falsy.
// Falsy operands are:
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// ALL other operands are truthy regardless of whether they are numbers, strings, etc.. meaning anything that is not falsy is truthy

console.log( false || true )  // returns true

console.log( false || 'Mosh') // returns 'Mosh', since it is the first truthy operand

console.log(false || 1)    // returns 1, since it is the first truthy operand

console.log(false || 1 || 2) // returns 1, since it is the first truthy operand (will stop and not continue to the next operaiton) -- this is called SHORT-CIRCUITING

// Real world scenario: We are building a shop, and the user has to pick the color of the shirt they are buying. The color should default to blue unless the user selects another color

let userColor = undefined
let defaultColor = 'blue'

let selection = userColor || defaultColor
console.log('color selected: ', selection)


// Exercise 1
let a = 'red'
let b = 'blue'

let c
c = a // returns red
a = b // returns blue
b = c // returns red


console.log(a)
console.log(b)

// If...else statements
// Hour
// If the time is between 6am and 12pm: say "Good morning!"
// If it is between 12pm and 6pm: say "Good afternoon!"
// otherwise: say "Good evening!"

let hour = 15

if (hour >= 6 && hour < 12) {
    console.log('Good morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
} else {
    console.log('Good evening')
}

// Switch..case statements
// Let's suppose we are building a back-end admin application
// Based on the role of a user, we will display that role on the page

let role = 'guest'

switch (role) {
    case 'guest':
        console.log('Guest User')
        break
    
    case 'moderator':
        console.log('Moderator')
        break
    
    default:
        console.log('Unknown User')
}

// For loop
// Exercise: Get all odd numbers bettwen 1 and 10

for(let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
} 

// We can reverse the order of the for loop like this:
for(let i = 5; i >= 1; i--){
    if (i%2 !== 0) console.log(i)
}

// While loop
// Initialize i outside the loop instead of inside like the for loop

// let i = 0

// while(condition) {
//     // Do something
// }

let i = 0

while (i<=5) {  // This condition is evaluated first 
    if (i%2 !== 0) {console.log(i)}
    i++
}

// Do..while loop
// Will most likely NOT be used a lot practically.
let ii = 0

do {    // This code is executed at least once before evaluating for the condition
    if (ii%2 !==0) {
        console.log(ii)
    }
    ii++
} while ( ii <= 5)

// For..in loop
// To loop over objects
const person = {
    name: 'Joanna',
    age: '35'
}

for (let key in person){
    console.log(key + ': '+ person[key])
}

const colors = ['red', 'blue', 'green']

for (let color of colors) {
    console.log(color)
}


// Exercise: Write a function that compares 2 numbers and logs which one is higher.
let number1 = 100
let number2 = 100

function findMaxNum(number1, number2) {
    switch (true){
        case number1 > number2:
            console.log('The numbers are: ' + number1 + ' & ' + number2)
            console.log(number1 + ' is the greater number')
            break;
        case number1 < number2:
            console.log('The numbers are: ' + number1 + ' & ' + number2)
            console.log(number2 + ' is the greater number')
            break;
       case number1 === number2:
            console.log('The numbers are: ' + number1 + ' & ' + number2)
            console.log(number1 + ' & ' + number2 + ' are equal')
            break
        
    }

}

// findMaxNum(number1, number2)


// Exercise: write a function isLandscape that checks if an image is landscape or portrait by comparing its width and height

function isLandscape(width, height) {
    if (width > height) {
        console.log('This image is landscape')
    } else if (width < height) {
        console.log('This image is portrait')
    } else {
        console.log('This image is square')
    }
}

let width = 1024
let height = 1024

// isLandscape(width, height)

// A simpler way of achieving the same result:
function isLandscape_(width, height){
    return (width > height)
} 

// If number is divisible by 3 => console log FIZZ
// If number is divisible by 5 => console log BUZZ
// If number is divisible by both 3 AND 5 => console log FIZZBUZZ
// If number is NOT divisible by 3 OR 5 => console log input
// If number is NOT a number => console log Not a number
const output = fizzBuzz(7)
// console.log(output)

function fizzBuzz(input) {
    switch(true) {
        case (typeof input !== 'number'):
            console.log(NaN)
            break

        case (input % 3 === 0 && input % 5 === 0):
            console.log('FizzBuzz')
            break;
        
        case (input % 3 === 0):
            console.log('Fizz')
            break;
        
        case (input % 5 === 0):
            console.log('Buzz')
            break;
        
        default:
            console.log(input)
            break
    }
}
// Explanation of why we use switch(true) not switch(input):
// "Switch matches the x in switch(x){ to the result of evaluating the case expressions. since all your cases will result in true /false there is no match and hence default is executed always."
// When using switch(true) we are checking if each case is true, thus it works.
// https://stackoverflow.com/questions/26019823/javascript-fizzbuzz-switch-statement

// Exercise 4: Demerit Points
// Write a script that calculates demerit points based on how fast a car is driving
// Assumptions:
// Speed limit = 70
// Every 5km/hr above speed limit earns the driver 1 demerit pt
// Use Math.floor() to round decimals up or down
// If the driver gets 12 demerit pts or more, license suspended


function checkSpeed(speed) {
    const speedLimit = 70;
    let roundedSpeed = Math.floor(speed);
    let speedDiff = roundedSpeed - speedLimit
    let demeritPts = 0;
    const kmPerPount = 5;

    if ( speed <= (speedLimit + kmPerPount))
        console.log('OK');
    else {
        demeritPts = Math.floor(speedDiff / kmPerPount)
        
        if (demeritPts >= 12) {
            console.log('License Suspended')

        } 
        else {
            console.log('Demerit Pts: ' +demeritPts)
        }
    }
}

// checkSpeed(73)

// Exercise 5: Write a function to count numbers between 0 and a limit, and mention whether they are even or odd

function showNumbers(limit) {

    for (let i = 0; i <= limit; i++) {
        // This method is correct:

        // if (i % 2 === 0) {
        //     console.log(i, 'Even')
        // } else {
        //     console.log(i, 'Odd')
        // }

        // A cleaner way of doing the same thing:
        const message = (i % 2 === 0) ? 'Even' : 'Odd'
        console.log(i, message)
    }
}

// showNumbers(10)


// Exercise 6: Write a function to count the number of Truthy elements in an array

const array = [ 0, null, undefined, '', 2];

// console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;

    for(const key of array) {
       if (key) {
            count++
       }
    }

    return count
}

// Exercise 7: Create a movie object with the following properties:
// title, releaseYear, rating, and director
// Write a function showProperties() that console logs only the string properties of that object

const movie = {
    title: 'Saving Private Immak',
    releaseYear: 2022,
    rating: 4.5,
    director: 'Immak w Bayyak'
}

// showProperties(movie)

function showProperties(object) {
    for (const key in object) {
        // console.log(typeof object[key])
        if(typeof object[key] === 'string') {
            console.log(key, object[key])
        }
    }
}

// Exercise 8: Create a function that calculates the sum of the multiples of 3 and 5 of all the numbers up until a limit number

// console.log(sum(10))

// My attempt, achieves the desired result but not clean:
// function sum(limit) {
//     const additionNums = []
    
//     for(let i = 0; i <= limit; i++) {
//         if ( (i % 3 === 0) || ( i % 5 === 0)) {
//             additionNums.push(i)
//         }

//     }
//     console.log(additionNums)
//     let prevSum = 0
//     let currentSum
//     for (const key of additionNums) {
//         currentSum = prevSum + key
//         prevSum = currentSum
//     }
//     console.log(currentSum)
// }

// A cleaner way of doing it:
function sum(limit) {
    let sum = 0

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i
    }

    return sum
}

// Exercise 9: Marks Average
// Write a function that calculates the average of a given array of marks
// and returns a letter grade for the calculated average.
const marks = [ 80, 80, 90 ]

// Calculate average

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

// console.log(calculatedMarks(marks))

function calculatedMarks(marks) {
    let sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }

    let average = sum / marks.length

    switch(true) {
        case(average >= 60 && average <= 69):
            return 'D'
            break
        
        case(average >= 70 && average <= 79):
            return 'C'
            break

        case(average >= 80 && average <= 89):
            return 'B'
            break
        
        case(average >= 90 && average <= 100):
            return 'A'
            break
        
        default:
            return 'F'
            break
    }
}


// Exercise 10: Stars
// Write a function that takes an input number and displays
// (n) number of rows containing stars 
// (ex. row 1 contains 1 star, row 2 contains 2 and so on)

// showStars(5)

function showStars(rows) {

    let stars = '*'

    for (let i = 1; i <= rows; i++) {
        console.log(stars)
        stars += '*'
    }
}

// Exercise 11: Prime Numbers
// Write a function that takes a limit and shows all prime numbers
// up to this limit

// A prime number is a number divisible only by itself.
// number 14 / 7 = 2
showPrimes(20)

function showPrimes(limit) {

    for(let number = 2; number <= limit; number++) {
        
        let isPrime = true;

        for (let factor = 2; factor < number; factor++) {

            if ( number % factor === 0) {
                isPrime = false
                break
            } 
        }

        if(isPrime) console.log(number)
        
    }

}

// When we have nested loops, we can extract the inner loop into a function and call it from the main function. Check example below:

showPrimeNumbers(10)

function showPrimeNumbers(limit) {
    for(let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number)
        }
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {

        if ( number % factor === 0) {
            return false
        }

    return true

    }
}