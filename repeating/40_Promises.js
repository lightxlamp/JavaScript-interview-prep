function requestToServer() {
    setTimeout(function() {
        console.log('Response from server');
    }, 3500)
}

function sayHi(name) {
    console.log(`Hey ${name}!`);
} 


sayHi('Stas')
sayHi('Tilek')
requestToServer()
sayHi('Viktor')
