// primitive data types passes by value
// computed data types (objects, arrays, functions) passed by link so mutations can occur 

let a = 17
let b = a
b++ 
console.log('a:', a);
console.log('b:', b); // so a's value was just copied to b


let arr = [1, 2, 3]
let arr2 = arr;
arr2.push(4);

console.log('arr', arr);
console.log('arr2', arr2);

// To avoid unneeded mutation we can return copy like this 
let arr3 = [1, 2, 3]
let arr4 = arr3.concat(); 
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array3 = array1.concat(array2);
arr4.push(4);

console.log('arr3', arr3);
console.log('arr4', arr4);

// There are 2 types of array cloning: shallow & deep. Shallow copies only cover the 1st level of the array and 
// the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone. 
// For deep clones, go with the JSON way OR better yet use Lodash 👍
// https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
// Niiiiiiice, already learned these two options yesterday from interview video: https://youtu.be/b4fx8Zu4IU4

let arr5 = [1, 2, 3]
let arr6 = JSON.parse(JSON.stringify(arr5));
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array3 = array1.concat(array2);
arr6.push(4);
console.log('arr5', arr5);
console.log('arr6', arr6);

// Nice. Works... 

// from the lesson... Short & nice 
let array = [1,2,3];
let arrayCopy = [...array]; // create TRUE copy
console.log(arrayCopy); // [1,2,3];
// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]
// ✅ Original NOT affected 
console.log(array); // [ 1, 2, 3 ]

// When I used spread ... to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, 
// it won't work. Let's take a look: /c/


