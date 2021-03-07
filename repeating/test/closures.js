function formAddress(address) {
    const domain = '.com';
    const protocol = 'https://www.';

    return function() {
        console.log(protocol + address + domain);
    }
}

formAddress('facebook')()
console.log(formAddress('facebook'));