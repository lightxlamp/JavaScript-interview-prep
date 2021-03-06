console.log(typeof(1));
console.log(typeof(Math));
console.log(typeof('Stas'));
console.log(typeof(false));
console.log(typeof(undefined));
console.log(typeof(Symbol('JS')));

console.log(typeof(null)); // returns object. Uncertainty of 'typeof' operator
console.log(typeof(function(){})) // the second "uncertainty"
console.log(typeof(NaN)); // outputs number =)
console.log(typeof(1 / 0));
console.log(typeof(undefined * 1));

var myVar;
console.log(myVar); // undefined written in gray color... Not like in line 5 - console.log(typeof(undefined)); // update got it :) why..
console.log(typeof(function x () { }));
// const und_1; // Missing initializer in const declaration. Self experimented =)
// console.log(und_1); // und_1 is not defined
console.log(typeof(und_1)); 
let und_2;
console.log(und_2);

// In JavaScript, undefined is a type, whereas null an object.
// undefined
// It means a variable declared, but no value has been assigned a value. (or variable is undefined :) addition from Stas/Vladilen)
// Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

function myFunc () {
    console.log('myFunc working');
}

let myFuncOutput = myFunc()
console.log('myFuncOutput', myFuncOutput); // Functions with no return value returns 'undefined' by default. Got it now


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// Update I should say here about biging as well... Author missing this type in a video