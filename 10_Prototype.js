function Cat(name, color){
    this.name = name
    this.color = color
}

Cat.prototype.sayMeow = function () {
    console.log(this.name + ' says "Meow"!')
}

let myCat = new Cat('Dasha', 'grey')

console.log('Cat.prototype', Cat.prototype)
console.log('myCat', myCat)
console.log('myCat.__proto__', myCat.__proto__)
console.log("myCat.__proto__ === Cat.prototype",  myCat.__proto__ === Cat.prototype)
console.log("myCat.constructor - ", myCat.constructor)
myCat.sayMeow()

console.log('--------------------------------')

function Person() {}

Person.prototype.skinColor = 'black'
Person.prototype.legs = 2

let BarakObama = new Person()
BarakObama.name = 'Barak Obama';

console.log('BarakObama ', BarakObama)
console.log('BarakObama.legs ', BarakObama.legs)
console.log('BarakObama.skinColor -', BarakObama.skinColor)
console.log('BarakObama.name - ', BarakObama.name)
console.log("'skinColor' in Person - ", 'skinColor' in Person) // new feature for me. "In"
console.log("'skinColor' in BarakObama - ", 'skinColor' in BarakObama)

console.log(BarakObama.hasOwnProperty('name'))
console.log(BarakObama.hasOwnProperty('skinColor'))

// Object create
let myProto = {year: 2019}
let myYear = Object.create(myProto)

console.log('myYear.year:', myYear.year)

myProto.year = 2020

console.log('myYear.year:', myYear.year)

myProto = {year: 1999}

console.log('myYear.year:', myYear.year)
