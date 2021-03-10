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
