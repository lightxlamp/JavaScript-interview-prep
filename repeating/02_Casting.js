// Casting

let car = 'Toyota Prius II'; 
if (car) { // auto-casting string to bool
    console.log('- My favorite car is:', car);
}

// falsy values - '', 0, null, undefined
// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
if('') {
    console.log('falsy value "" ');
}

if(0) {
    console.log('falsy value 0 ');
}

if(null) {
    console.log('falsy value null ');
}

if(undefined) {
    console.log('falsy value 0 ');
}

if(1) {
    console.log('truly value 1 ');
}

if({name: "Stas"}) {
    console.log('truly value {name: "Stas"}');
}

if(!null) {
    console.log('truly value !null'); // lol. My experiment =) 
}
if(!undefined) {
    console.log('truly value !undefined'); // My experiment =) 
}

// Other way... How to check it like in lesson
console.log('Boolean(\'\')', Boolean(''));
console.log('Boolean(\'0\')', Boolean('0'));
console.log('Boolean(0)', Boolean(0));

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log('Boolean(NaN)', Boolean(NaN));

console.log('Boolean([]])', Boolean([]));

console.log('Boolean([]])', Boolean({}));

console.log('typeof([])', typeof([]));
console.log('typeof({})', typeof({}));