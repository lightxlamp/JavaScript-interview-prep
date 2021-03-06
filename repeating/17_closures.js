
function sayHelloTo(name) {
    const message = `Hello ${name}`;

    return function() {
        console.log(message);
    }
}

const helloToStas = sayHelloTo('Stas')
const helloToJanet = sayHelloTo('Janet')
console.log(helloToStas)
console.log(helloToStas())
helloToJanet()

// Function that return nothing intentionally -> returns 'undefined'. That's why we have 3rd output