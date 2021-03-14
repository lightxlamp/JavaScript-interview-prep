function foo () {
    return 1
}

console.log(foo());

async function asyncFoo () {
    return 1
}

console.log(asyncFoo()); // returns promise  
asyncFoo().then((value) => console.log(value)) // like we did in promises lesson. Yeah =) Because promise has been returned




