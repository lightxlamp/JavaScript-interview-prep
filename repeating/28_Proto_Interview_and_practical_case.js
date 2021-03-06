const array = [1, 2, 3, 4, 5]

function multArrayBy(arr, multiplier) {
    return arr.map(i => i * multiplier)
}

console.log(multArrayBy(array, 5));

// function needs to be imported..
// how we can add this func to array? By proto

Array.prototype.multBy = function (multiplier) {
    console.log('this', this);
    return this.map(i => i * multiplier)
}

console.log(array.multBy(5))
console.log(array.multBy(2))