function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

console.log(calcValues(100, 73));

const [sum, sub] = calcValues(100, 73)
console.log(sub);

const [sum1, , , div1] = calcValues(10, 2); // Forgot this... Good to remember 
console.log(sum1, div1);

const [sum2, , mul2, ...rest2] = calcValues(15, 3);
console.log(sum2, mul2, rest2); // Pay attention =) That rest2 is still single size array, not number 

function calcValuesV2(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

const [sum3, sub3, mul3] = calcValuesV2(10, 10);
console.log(sum3, sub3, mul3);

const [sum4, sub4 = 'not yet implemented', mul4] = calcValuesV2(100, 10);
console.log(sum4, sub4, mul4);
