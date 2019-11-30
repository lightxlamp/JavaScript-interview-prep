// Замыкание это функция у которой есть доступ к своей внешней функции по области видимости, даже после того,
// как внешняя функция прекратилась. Это говорит о том, что замыкание может запоминать и получать доступ к переменным,
// и аргументам своей внешней функции, даже после того, как та прекратит выполнение.

function sayHelloTo(name){
    const message = "Hello, " + name

    return function(){
        console.log(message)
    }
}

const helloToStas = sayHelloTo('Stas')
console.log(helloToStas)
helloToStas()

/// Practical usage

function createFrameWorkManager(){
    let frameworks = ['Vue', 'Angular']

    return {
        print: function(){
            console.log(frameworks.join(' '))
        },
        add: function (newFramework){
            frameworks.push(newFramework)
        }
    }
}

const manager = createFrameWorkManager();
console.log("Result of createFrameWorkManager() work: ", manager)
manager.print()
manager.add('React')
manager.print()

// Interesting example from another article
function getCounter()
{
    let counter = 0;

    return function()
    {
        return counter++;
    }
}

let counter = getCounter();

console.log(counter) // before changing values
console.log(counter());  // 0
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
console.log(counter());  // 4
console.log(counter) // after changing values

// Another example

const nameByLetters = ['S', 'T', 'A', 'N', 'I', 'S', 'L', 'A', 'V']

// for(let i = 0; i < nameByLetters.length; i++){
//     setTimeout(() =>{
//        console.log(nameByLetters[i])
//     }, 500)
// }

for(var i = 0; i < nameByLetters.length; i++){
    (function(j) {
        setTimeout(() =>{
            console.log(`nameByLetters[${j}] = ${nameByLetters[j]}`)
        }, 500)
    })(i)
}

// Жесть.... последнюю не понял (( Но часто спрашивают на собесах типо. Если на практике будет пригождаться
// или встречу - то вернусь
