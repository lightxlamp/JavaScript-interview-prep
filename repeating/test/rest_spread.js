// By memory 
let colleaguesAkforta = ['Malika', 'Isa', 'Alex', 'Nursultan'] 
let colleaguesIncentient = ['Tilek', 'Kairat', 'Dima', 'Bob', 'Kapar', 'Erbol', 'Chingiz', 'Chyngyz']

const [Malika, Isa] = colleaguesAkforta;
console.log(Malika, Isa);

const allColleagues = [...colleaguesAkforta, ...colleaguesIncentient];
console.log(allColleagues);

const nums = [1, 2, 3, 4, 5, 6]

function sum(a, b, ...rest) {
    return a + b + rest.reduce((accumulator, currentValue) => accumulator + currentValue)
    // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
}

console.log(sum(0, -10, ...nums)); // correct. Nice

const person = {
    name: 'Stas',
    age: 31, 
    city: 'Bishkek',
    country: 'Kyrgyzstan'
}

const {name, age, ...location} = person;
console.log(name, age, location);

// Not by memory 
const allColleagues2 = [...colleaguesAkforta, 'Nadya', ...colleaguesIncentient];
console.log(allColleagues2);

// By memory 
const car = {
    model : 'Prius II',
    year: 2006,
    name: 'Toyota' // named this way just to see overrdining 
}

const meAndMyCarObject = {...person, ...car} // I thought name 'Stas' will be displayed, instead of Toyota in this case
console.log(meAndMyCarObject); // Nice to learn this. 

const {model} = car;
console.log('Model', model);