const person = {
    name: 'Stas',
    age: 31, 
    address: {
        city: 'Bishkek',
        country: 'Kyrgyzstan'
    }
}

const {name, age, sex, eyeColor = 'brown'} = person; 
console.log(name, age, sex, eyeColor);

const {name: firstName, age: stasAge, eyeColor: stasEyeColor = 'green'} = person; // niiiiice. Did not knew. Or forgot that. Useful...
console.log(firstName, stasAge, stasEyeColor);