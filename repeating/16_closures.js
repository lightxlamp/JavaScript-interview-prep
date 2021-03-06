// Closures by memory. 
// Let's think for while
function c() {
    var a = 0;

    function b() {
        a++;
        console.log(a);
    }
    b();
}

var ci = c();
ci()
ci()
ci()