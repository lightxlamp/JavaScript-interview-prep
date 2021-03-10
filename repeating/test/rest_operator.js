// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
// providing a way to represent variadic functions in JavaScript.

function hey(a, b, ...others) {
    console.log(a);
    console.log(b);
    console.log(others);
    others.forEach(other => {
        console.log(other);
    })
}

hey('Stas', 'Tilek', 'Maria', 'Kairat', 'JSON', 'Igor', 'Alex')

// A function definition's last parameter can be prefixed with "..."
// Hmmm...
// Let's rewrite to test =) smth 

console.log('**********************************');

function heyV2(a, ...others, b) { // Error - SyntaxError: Rest parameter must be last formal parameter. Nice
    console.log(a);
    console.log(b);
    console.log(others);
    others.forEach(other => {
        console.log(other);
    })
}

heyV2('Stas', 'Tilek', 'Maria', 'Kairat', 'JSON', 'Igor', 'Alex')