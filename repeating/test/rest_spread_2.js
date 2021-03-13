// practical example 

const myBoxes = document.querySelectorAll('.my-box');
console.log('NodeList:', myBoxes); // has foreach only
console.log('Array:', ...myBoxes); // has map() now
[...myBoxes].map(function(box) {
    console.log(box.innerHTML);
})