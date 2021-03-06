// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// I thought IIFE stays for Immediately Invoked Function Execution =) 

// Functions that will be automatically invoked 
// Commonly used for creating some local scope 

const result = []

for(var i = 0; i < 5; i++) {
    result.push(function() {
        console.log(i);
    })
}

result[0]()
result[3]()

// So again......
// All problems from 'var'. Everything works great with let
// So let's just use let and do not write workarounds 😠😡😡😡😂
