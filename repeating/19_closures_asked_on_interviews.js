const fib = [1, 2, 3, 5, 8, 13, 21, 34]

for(let i = 0; i < fib.length; i++) {
    setTimeout(function() {
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500)
} 

// Lol, I've "hacked" lesson, one more time
// Just used let instead of var in loop and got correct numbers 
/* 
fib[0] = 1
fib[1] = 2
fib[2] = 3
fib[3] = 5
fib[4] = 8
fib[5] = 13
fib[6] = 21
fib[7] = 34

instead of 

fib[8] = undefined
fib[8] = undefined
fib[8] = undefined
fib[8] = undefined
fib[8] = undefined
fib[8] = undefined
fib[8] = undefined
fib[8] = undefined

*/