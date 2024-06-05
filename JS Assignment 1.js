// What is the output of this snippet of code?

function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );

// output 'string'.









// What is the output of this snippet of code?

function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() );

// output 'function'






// What is the output of this snippet of code?

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );

// output 1