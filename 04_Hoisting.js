// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope
// before code execution. Inevitably, this means that no matter where functions and variables are declared, they are
// moved to the top of their scope regardless of whether their scope is global or local
console.log('Calling sum() BEFORE its declaration')
console.log('99 + 1 = ', sum(99, 1))

function sum(a, b){
    return a + b
}

console.log('Calling sum() AFTER its declaration')
console.log('99 + 1 = ', sum(99, 1))
console.log('===================================')

console.log("+ But we can't access variable before their initialization")
console.log("+ The code below leads to error, please see it")
console.log("+ If you change Var to Let/Const")
console.log(i)
var i = 17
console.log(i)
console.log('===================================')

var i2
console.log(i2)

// Const and let are not affected by hoisting, that's why code from prev. example did not worked for me
// I've declared "i" with let keyword at the beginning...

// Function Expression & Function Declaration

console.log(square(20))

function square(num){ // function declaration
    return num ** 2
}

console.log('We can\'t use function expression function. Before they were declared')
console.log("+ The code below leads to error, please see it")
// console.log(double(10)) // leads to error

let double = function (num) {
    return num ** 2
}

