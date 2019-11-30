// Primitive data types passes their values
// Computed data types: objects, arrays, functions passes link during variable creation

let a = 39
let b = a
b++
console.log('a: ' + a + ' b: ' + b)

console.log('----------------------');
let arrayA = [1, 2, 3]
let arrayB = arrayA
arrayB.push(4)

console.log('ArrayA: ', arrayA);
console.log('ArrayB: ', arrayB);
console.log('ArrayA: == ArrayB', arrayB == arrayA);
console.log("We've changed arrayB only, but arrayA was automatically changed as well");
console.log("ArrayB = ArrayA operation assigned not to values of ArrayA but reference of ArrayA to array for ArrayB");
console.log('Easy. Knew it. Just move on');

let arrayA1 = [1, 2, 3]
let arrayB1 = arrayA1.concat()
arrayB1.push(4)
console.log('ArrayA1: ', arrayA1)
console.log('ArrayB1: ', arrayB1)
console.log("We've returned a clone of array. To avoid mutations by calling concat()")

let arrayC1 = [1, 2, 3, 4]
console.log('ArrayB1: ', arrayB1)
console.log('ArrayC1: ', arrayC1)
console.log('ArrayB1: == ArrayC1', arrayB1 == arrayC1)
console.log('ArrayB1: === ArrayC1', arrayB1 === arrayC1)