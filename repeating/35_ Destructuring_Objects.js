const person = {
    name: 'Stas',
    age: 31, 
    address: {
        city: 'Bishkek',
        country: 'Kyrgyzstan'
    }
}

const {address} = person;
console.log(address);

const {address: stasAddress} = person;
console.log(stasAddress);

const {address : {city: stasCity, country: stasCountry}} = person;
console.log(stasCity, stasCountry); // nice

// practical case 
function logPerson(per) {
    console.log(`Person name is ${per.name}. His/Her age is ${per.age}`);
}
logPerson(person)
// per, per, per - duplicated. We can improve this


function logPersonV2({name, age}) {
    console.log(`Person name is ${name}. His/Her age is ${age}`);
}
logPersonV2(person)
// looks prettier now


function logPersonV3({name: firstName, age: personAge, eyeColor = 'green'}) {
    console.log(`Person name is ${firstName}. His/Her age is ${personAge}. And his/her eyecolor is ${eyeColor}`);
}

logPersonV3(person)