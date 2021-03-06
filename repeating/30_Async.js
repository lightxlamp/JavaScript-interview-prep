const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

first()
setTimeout(second, 0) // JS using side API for this
third()

// Will see a better / separate video about call stack in JS 
// https://youtu.be/8aGhZQkoFbQ