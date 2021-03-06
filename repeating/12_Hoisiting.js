// Function expression, fn declaration 

 console.log(sum(1,2));
 console.log(square(5));

 function sum(a, b) {
     return a + b;
 }

 var square = function(a) {
    return a ** a;
 }

 // The main difference between a function expression and a function declaration is the function name, which can 
 // be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE 
 // (Immediately Invoked Function Expression) which runs as soon as it is defined.