// Function expression, fn declaration 

console.log(sum(1,2));


function sum(a, b) {
    return a + b;
}

(function() {
    console.log('Code runs!')
})();

// The main difference between a function expression and a function declaration is the function name, which can 
// be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE 
// (Immediately Invoked Function Expression) which runs as soon as it is defined.