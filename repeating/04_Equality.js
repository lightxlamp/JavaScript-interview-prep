// == comparison with converting types
// === comparison without types converting. Just values

console.log('undefined == null', undefined == null);
console.log('undefined === null', undefined === null);
console.log('0' == false); // true, but why js converts '0' to num?
// https://stackoverflow.com/questions/5659085/how-do-i-compare-string-and-boolean-in-javascript
// If one of the operands is Boolean, the Boolean operand is converted to 1 if it is true and +0 if it is false. (from MDN Comparison Operators page)
/* 
    true == "true"; //false
    true == "1"; //true
    false == "false"; //false
    false == ""; //true
    false == "0"; //true
*/

console.log(undefined == undefined);
console.log(undefined === undefined);
console.log(null == null);
console.log(null === null);

// ambiguous comparisons (might be on interview =) ) Let's see..
console.log('ambiguous comparisons');
console.log(false == '');
console.log(false == []);
console.log(false == {});
console.log('.');
console.log('' == 0);
console.log('' == []);
console.log('' == {});
console.log('...');
console.log(0 == null);
console.log(0 == []);
console.log(0 == {});
// TODO return to latest part later...