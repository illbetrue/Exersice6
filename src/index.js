/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * write function that will do sum for two numbers
 * @example
 * console.log(sum(1, 3)) //4
 * console.log(sum(-1, 1)) //0
 */
function sum(a, b) {
    return a + b;
}

/**
 * write function that returns firstName and lastName of a given object that contains firstName and lastName
 * @example
 * const person = {
 *    firstName: "John",
 *    lastName: "Dou"
 * }
 * console.log(getFullName(person)) // John Dou
 */
function getFullName(person) {
    return person.firstName + ' ' + person.lastName;
}

const person = {
    firstName: "John",
    lastName: "Dou"
};

console.log(getFullName(person));

/**
 * write function that checks if number is odd
 * true if odd, false if even
 * @example
 * console.log(isOdd(2)) // false
 * console.log(isOdd(3)) // true
 * hint: try using Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder operator
 */
function isOdd(n) {
    return n % 2 !== 0;
}

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "three", "four"])) // one
 */
function getShortest(wordArray) {
    if (wordArray.length === 0) {
        return undefined;
    }

    let shortestWord = wordArray[0];

    for (let i = 1; i < wordArray.length; i++) {
        const currentWord = wordArray[i];
        if (currentWord.length < shortestWord.length) {
            shortestWord = currentWord;
        }
    }

    return shortestWord;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {
    return 'g' + 'o'.repeat(n) + 'gle';
}

/**
 * write function that returns object based on the given information
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John",
 *    lastName: "Dou",
 *    age: 42
 * }
 */

function getUser(firstName, lastName, age) {
    return {
        firstName: "John",
        lastName: "Dou",
        age: 42
    };
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 * @example
 * const travel = [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}];
 * console.log(getTotalPath(travel)) //2969
 */

function getTotalPath(path) {
    let totalDistance = 0;
    for (let i = 0; i < path.length; i++) {
        totalDistance += path[i].distance;
    }
    return totalDistance;
}

/**
 * write a function that calculates a final price considering the Amount
 * reduced by discount percentage(hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
    return function (amount) {
        return amount - (amount * (percentage / 100));
    };
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe, and I am 25 years old. My best friend is Daniel'
 * referring to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    friends: ['Mike', 'Alan', 'Daniel'],
    keys() {
        for (let key in this) {
            console.log(key);
        }
    },
    call() {
        const bestFriend = this.friends[this.friends.length - 1];
        return `My name is ${this.name} ${this.lastName}, and I am ${this.age} years old. My best friend is ${bestFriend}`;
    },
};

myObject.keys();
console.log(myObject.call());


module.exports = {
    sum,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject,
};
