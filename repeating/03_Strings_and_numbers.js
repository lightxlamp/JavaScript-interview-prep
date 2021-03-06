console.log('1' + 2);
console.log('' + 1 + 0);
console.log('' - 1 + 0);
console.log(parseInt(''));
console.log(NaN - 1); // Hmmmm
console.log('3' * '8'); // multiplication operator is not defined for strings.. So this strings will be casted to numbers
console.log(4 + 10 + 'px'); // Order is important
console.log('px' + 4 + 10); // Order is important
console.log('42' - 40);
console.log('42px' - 40); // casting 42px to number gives NaN. NaM - 40 = NaN
console.log(parseInt('42'));
console.log(parseInt('42px')); // ... 42 =) Seems like other casting used in 42px - 40
console.log(null + 2); // 2... 
console.log(parseInt(null));
console.log(undefined + 42); // NaN