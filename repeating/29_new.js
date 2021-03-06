function Car(model, year) {
    this.model = model;
    this.year = year;
}

const prius = new Car('Prius II', 2006)
console.log(prius);

const camry = new Car('Camry 3.5', 2007)
console.log(camry);

// how 'new' works?
// we can create our own 'new'

function myNew(constructor, ...args) {
    // skip this part...
    // it explains how 'new' is written in ES5
}

const bmw = Car();
console.log(bmw); // Car function returns nothing so we will receive 'undefined' as we already know