// Immediate Invoked Function Expression
let result = [];

for(var i = 0; i < 5; i++){ // I've wrote this with "let" first. So did not got error
    result.push(function(){
        console.log(i);
    })
}

console.log("result - ", result);
console.log("result[0] - ", result[0]);
result[0]();
result[1]();
result[2]();

console.log('=========================================================================')

let result2 = [];

for(var i = 0; i < 5; i++){
    (function () {
        var j = i
        result2.push(function(){
            console.log(j);
        })
    })()
}

console.log("result2 - ", result2);
console.log("result2[0] - ", result2[0]);
result2[0]();
result2[1]();
result2[2]();


