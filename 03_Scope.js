// global scope, local scope
// document, window objects of browser have global scope. Available everywhere

function funcA()
{
    let a = 1;
    function funcB()
    {
        let b = 2;
        function funcC()
        {
            let c = 3;
            console.log('func C: ', a, b, c);
        }

        funcC();
        console.log('func B: ', a, b);
    }

    funcB();
    console.log('func A: ', a);
}

funcA();

//////////////////////////////////////////////////
// Found later. Example with better names for vars
console.log('-----------------------------------')

let a = 'global';
function outer()
{
    let b = 'outer';

    function inner() {
        let c = 'inner'
        console.log(c);   // выдаст 'inner'
        console.log(b);   // выдаст 'outer'
        console.log(a);   // выдаст 'global'
    }
    console.log(a);     // выдаст 'global'
    console.log(b);     // выдаст 'outer'
    inner();
}
outer();
console.log(a);         // выдаст 'global'