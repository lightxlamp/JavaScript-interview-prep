// 1. There are 7 types of data in JS
// None, Undefined, String, Bool, Symbol, Object, Null, Number
// Lol, not "None" but Null
console.log('-------------------------------------------------------------------------');
console.log('------------------------------typeof()-----------------------------------');
console.log('-------------------------------------------------------------------------');
console.log('- Type of "0" is - ' + typeof(0));
console.log('- Type of "Stas" is - ' + typeof('Stas'));
console.log('- Type of "false" is - '+ typeof(false));
console.log('- Type of "{name: "Stas", age: 30}" is - ' + typeof({name: 'Stas', age: 30}));
console.log('- Type of "undefined" is - ' + typeof(undefined));
console.log('- Type of "null" is - ' + typeof(null));
// 2. All of these data types are primitive except Obj

// 3. typeof also can be written without ()
console.log('-------------------------------------------------------------------------');
console.log('---------------typeof() also can be called without ()--------------------');
console.log('-------------------------------------------------------------------------');
console.log('- Type of "0" - ' + typeof 0);

// 4. There are 3 types of Quotation marks: "", '', ``. The latest one called literals
// Literals can accept dynamic values as I already know from Vue course

console.log("- " + `<div>valueForLiteral</div>`); // TODO write a good example here later

console.log('- Type of - Date is - ' + typeof Date);
console.log('- Type of - Math is - ' + typeof Math);
console.log('- Type of - Symbol(\'V\') is - ' + typeof Symbol('V'));

console.log('-------------------------------------------------------------------------');
console.log('----------------------Uncertainties of typeof----------------------------');
console.log('-------------------------------------------------------------------------');
console.log('+ Type of "null" is - an ' + typeof(null) + ' this result is uncertainty of "typeof" function');
console.log('+ Type of "function() {}" is - ' + typeof(function() {}) + ' - this is uncertainty of "typeof" function.' +
    ' There is no such a data type');
console.log('- Type of - NaN - ' + typeof NaN); //not-a-number. undefined * 1

console.log('-----------------------------Undefined-----------------------------------');
console.log('- Undefined is a "var x" with no value');
console.log('- Functions with no return. Returns "undefined" ✓ Checked: function x () { }');

console.log('--------------------------------Null-------------------------------------');
console.log('- Variable was declared correctly and had value. But then value was rewritten with null');

console.log('---------------------------Type Conversion-------------------------------');
let car = 'Toyota Prius II';
if (car) {
    console.log('- My favourite car is:', car);
}
console.log('- "String" was automatically converted to "Boolean" in "IF" operator');
console.log('- Falsy Values. A falsy value is something which evaluates to FALSE');
console.log('- There are only six falsey values in JavaScript: undefined, null, NaN, ' +
    '0, "" (empty string), and false of course.');
console.log('+ Four IFs below does not work. Please see code');
let falsyA = undefined;
let falsyB = "";
let falsyC = 0;
let falsyD = NaN;
if(falsyA) console.log('works with falsyA');
if(falsyB) console.log('works with falsyB');
if(falsyC) console.log('works with falsyC');
if(falsyD) console.log('works with falsyD');

console.log('- Boolean of "" is - ' + Boolean(""));
console.log('- Boolean of NaN is - ' + Boolean(NaN));
console.log('- Boolean of undefined is - ' + Boolean(undefined));
console.log('- Boolean of 0 is - ' + Boolean(0));

console.log('- Boolean of "0" is - ' + Boolean('0'));
console.log('- Boolean of [] empty array is - ' + Boolean([]));
console.log('- Boolean of {} empty object is - ' + Boolean([]));
console.log('- Boolean of a function x() {}  is - ' + Boolean(function x() {}));

console.log('-------------------------------------------------------------------------');
console.log('-------------------------Strings and Numbers-----------------------------');
console.log('-------------------------------------------------------------------------');

console.log('= 1 + "2" equals: ', 1 + "2");
console.log('= "" + 1 + 0 equals: ', "" + 1 + 0);
console.log('= "" - 1 + 0 equals: ', "" - 1 + 0, 'Explanation: Minus operator is not defined for Strings, so ' +
    'this case was calculated as a number. "Nothing" minus (-1) equals (-1) + 0 = (-1)');
console.log('= "3" * "8" equals: ', "3" * "8");
console.log('= 4 + 10 + "px" equals: ', 4 + 10 + "px" + ' . So as you might noticed order of arguments is vital');
console.log('= "px" + 4 + 10 equals: ', "px" + 4 + 10 + ". See? :P");
console.log('= 65 - "a" equals: ', 65 - "a" + ". But I thought it would be 0. Or smth like this. Like in C++ / ASCII");
console.log('= "42" - 40 equals: ', "42" - 40);
console.log('= "42px" - 2 equals: ', "42px" - 2 + " Because casting(42px) to number results to NaN");
console.log('= Proof. Number("12") equals: ', Number("12"));
console.log('= Proof. Number("12px") equals: ', Number("12px"));
console.log('= null + 2 equals -', null + 2);
console.log('= Proof: Number(null) equals: ', Number(null));
console.log('= undefined + 2 equals -', undefined + 2);
console.log('= Proof: Number(undefined) equals: ', Number(undefined));

console.log('-------------------------------------------------------------------------');
console.log('-------------------Double Equals vs. Triple Equals-----------------------');
console.log('-------------------------------------------------------------------------');
console.log('- Triple equals ( === ) will do the same comparison as double equals (including the special handling for '
    + 'NaN , -0 , and +0 ) but without type conversion; \n- if the types differ, false is returned.');
console.log('- 2 == "2" results to:', 2 == "2");
console.log('- 2 === "2" results to:', 2 === "2");
console.log('- undefined == null results to:', undefined == null);
console.log('- undefined === null results to:', undefined === null);
console.log('+ It is highly recommended to use === preferably  to avoid errors');
console.log('- "0" == false results to:', "0" == false, ". Just remember it :P");
console.log('- Just kidding. It seems like "false" was converted to 0 and compared == with "0"');

console.log('-------------------------------------------------------------------------');
console.log('-------------------Tricky Comparisons on Interview-----------------------');
console.log('-------------------------------------------------------------------------');

console.log('- false == "" results to:', false == "");
console.log('- Boolean of [] equals:', Boolean([]));
console.log('- false == [] results to:', false == []);
console.log('- Boolean of {} equals:', Boolean({}));
console.log('- false == {} results to:', false == {});

console.log('- "" == 0 results to:', "" == 0);
console.log('- "" == [] results to:', "" == []);
console.log('- "" == {} results to:', "" == {});

console.log('- 0 == [] results to:', 0 == []);
console.log('- 0 == {} results to:', 0 == {});
console.log('- 0 == null results to:', 0 == null);


