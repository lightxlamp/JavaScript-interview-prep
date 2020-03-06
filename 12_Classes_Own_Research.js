class User {
    constructor(name){
        this.name = name;
    }

    welcome(){
        console.log('Welcome new user')
    }

    welcomeByName(){
        console.log('Welcome,', this.name)
    }
}

let stas = new User('Stanislav')
stas.welcome()
stas.welcomeByName()


// class declared above is almost equal to this one:
function Userr(name) {
    this.name = name;
}

Userr.prototype.sayHi = function() {
    console.log(this.name);
};

let misha = new Userr('Michail')
misha.sayHi();
new Userr('Natalia').sayHi()

let House = class {
    printHouseNumber(){
        console.log('Hello this is house')
    }
}

class ComputerGame {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    launch(){
        console.log('... Checking your system requirements. Is is possible to launch me on your computer?')
    }
}

class MMO extends ComputerGame{
    launch() {
        super.launch();
        console.log('... Checking your Internet connection. Because I am also online game')
    }
}

let wow = new MMO('WoW Classic')
wow.launch()
console.log(wow) // constructor inherited automatically

console.log( MMO.prototype.__proto__ == ComputerGame.prototype ); // true