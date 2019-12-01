// Based on video: https://www.youtube.com/watch?v=vIZs5tH-HGQ
// 5:43

function printHello(){
    console.log('Hello')
}

console.log('Instant print check')

setTimeout(printHello, 2000)
//setTimeout(printHello(), 2000)

// https://www.youtube.com/watch?time_continue=15&v=8aGhZQkoFbQ&feature=emb_logo
// 12: 13 JavaScript can do only 1 thing at a time.
// It can't do ajax requests while you running other code.. The reason we can do things concurrently is that the browser
// is more than just a runtime

// 15: 16 finally got it! setTimeout(printTwo, 0) not working immediately, because event loop can't push this function
// from task queue to stack. Because stack is not empty... Genius..  Brilliant! :p

//20: 01

setTimeout(printHello, 1000);
setTimeout(printHello, 1000);
setTimeout(printHello, 1000);
setTimeout(printHello, 1000);

[1, 2, 3, 4].forEach(function (i) {
    console.log(i)
})