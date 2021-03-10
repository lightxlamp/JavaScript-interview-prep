console.log(x(12));

function x(n) {
    return n * n;
}

// y(); // error - Cannot access 'y' before initialization

const y = function () {
    console.log('Y');
}

// let bmw = new Car('E34', 2001) // error - Cannot access 'Car' before initialization
// class declarations - hoisting

class Car  {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

let myCar = new Car('Prius', 2006)
console.dir(myCar)




