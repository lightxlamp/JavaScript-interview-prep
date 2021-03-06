// So in a previous example var i could increment up to the end to 8, before timeout finished 

const fib = [1, 2, 3, 5, 8, 13, 21, 34]

for(var i = 0; i < fib.length; i++) {
    console.log(i);
    setTimeout(function() {
        console.log(i);
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500)
} 

// Nice 
// More clear with my debugging ... You should demonstrate it Vladilen =) 