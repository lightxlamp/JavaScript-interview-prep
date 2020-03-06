// JS works in a single thread
// So.. don't speak about async
// Async is possible due to Event loop concept. And Call Stack realization
// JS do not know how to work with TimeOuts. So it uses API of browser. (window.setTimout)

const printOne = () => {console.log('1');}
const printTwo = () => {console.log('2');}
const printThree = () => {console.log('3');}

printOne();
printTwo();
printThree();

console.log('--------------------------')

printOne();
setTimeout(printTwo, 0)
printThree();

console.log('That all?? =((((. Need to do another async lesson. \n' +
    'Wow! Look. Second function executes even after my console.log')