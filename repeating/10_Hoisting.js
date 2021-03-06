// hoisting - подъем. 
// Very important topic in JS. Shows how interpreter works

console.log(sum(1, 2));

function sum (a, b) {
    return a + b;
}

// ReferenceError: Cannot access 'sum' before initialization
// My initiative, I've decided to create function with new ES6 syntax and found this issue =) Nice