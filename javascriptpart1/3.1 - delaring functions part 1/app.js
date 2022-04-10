/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const  welcome1 = function () {
    return 'Welcome to Appleseeds Bootcamp!';
}

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
const  power1 = function (a) {
    result = Math.pow(myNumber, 2);
    return result;
}

function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
const add1 = function ()

// From function expressions to function declarations
const hello = () => "Hello!";
function hello1 () {
    return "Hello"
};

const squareRoot = a => Math.sqrt(a);
function squareRoot1 (a) { 
    return  Math.sqrt(a);
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers1 (a, b) {
    return  Math.random() * (a - b) + b ;
};




/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
// answer 
(function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
})();

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
// my answer 

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
//  my answer 
(function squareRoot2 (a) {
    return Math.sqrt(a);
} ) ();

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// my answer 
(function randomNumbers2 (a, b) {
    Math.random() * (a - b) + b;
}) () ;

