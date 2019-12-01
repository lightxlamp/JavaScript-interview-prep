const Sheveliukhin = {
    surname: 'Sheveliukhin',

    tellAboutYourself: function(name, age){
        console.log(`My name is ${name}. My surname is ${this.surname}. And I am ${age}`)
    }
}

const Hilary = {surname: 'Duff'}

Sheveliukhin.tellAboutYourself('Stas', 30)

Sheveliukhin.tellAboutYourself.call(Hilary, 'Hilary', 32)
Sheveliukhin.tellAboutYourself.apply(Hilary, ['Hilary', 32])
const bound = Sheveliukhin.tellAboutYourself.bind(Hilary, 'Hilary', 32)
bound()
Sheveliukhin.tellAboutYourself.call(Hilary, ...['Hilary', 32]) //... called "Spread" operator

// ES 5
// Explicit context binding
function logThis(){
    console.log(this)
}

const myObj = {name: 'John', age: 32}

logThis()
logThis.apply(myObj)
logThis.bind(myObj)()

// Implicit context binding

const animal = {
    paws: 4,
    logThis: function () {
        console.log(this)
    }
}

animal.logThis()

// Array function do not create its own content
function cat(color) {
    this.color = color
    console.log(this);
    (()=> {
        console.log('Context of "this" from array function: ', this)
    })()
}

new cat('black')