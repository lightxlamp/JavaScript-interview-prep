function sum(x, y, z) {
    return x + y + z;
}

function sum2(x, y, z = 0) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];

console.log(sum(...numbers));

const nums = [1, 2];

console.log(sum(...nums));
console.log(sum2(...nums));

console.log('....');

function sum3(x, y, ...z) {
    console.log(x, y, z);
}
const num3 = [1, 2, 3, 4, 5, 6, 7];
sum3(...num3)
sum3(1,2,3,4,5,6,7,8)
