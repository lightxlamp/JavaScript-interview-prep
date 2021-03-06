// if we can't use ES6 in a previous example  
// Closures will help us =) 
// ...

const fib = [1, 2, 3, 5, 8, 13, 21, 34]

for(var i = 0; i < fib.length; i++) {
    (function(j) {
        console.log(j);
        setTimeout(function() {
            console.log(j);
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500)
    })(i)
} 

// Revised. Got it... <3 
// Agree now. 2 useful applications
