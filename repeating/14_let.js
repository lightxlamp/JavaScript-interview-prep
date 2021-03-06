let a = 'a'
let b = 'b'

// ES6 Scope 
{
    a = 'reassigned a';
    let b = 'local b';
    console.log('Scope a:', a);
    console.log('Scope b:', b);
}

console.log('A:', a);
console.log('B:', b);

