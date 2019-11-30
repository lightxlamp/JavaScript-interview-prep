// Let. ES 6. Var - variable
let a = 'Variable a'
let b = 'Variable b'

// block scope. Since ES 6
{
    a = 'New Variable A'
    let b = 'Local Variable B'
    console.log('Scope A:', a )
    console.log('Scope B:', b )
}

console.log('A:', a )
console.log('B:', b, ' - B left the same')

// Const
console.log('=================================')
const myArray = ['I', 'knew', 'about', 'const', 'behavior', 'with', 'objects', 'and', 'arrays']
myArray.push('!')
myArray[0] = '_I_'
console.log(myArray)

const stasObj = {}
stasObj.age = 30
stasObj.name = 'Stas'
stasObj.currentLocation = 'Kyrgyzstan'
console.log('Stas obj', stasObj)