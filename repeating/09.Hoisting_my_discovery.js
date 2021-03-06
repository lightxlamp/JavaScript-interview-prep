// hoisting - подъем. 
// Very important topic in JS. Shows how interpreter works

console.log(sum(1, 2));

const sum = (a, b) => {
    return a + b;
}

// ReferenceError: Cannot access 'sum' before initialization
// My initiative, I've decided to create function with new ES6 syntax and found this issue =) Nice


// Googled 
// An arrow function expression is an anonymous function expression written with the “fat arrow” syntax ( => ).
// Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. 
// They are also always anonymous—there is no way to name an arrow function. Jul 31, 2020

// Nicuuu =) 