// Function Declaration
function twice(x) {
    return x * 2;
}

// Function Expression
const thrice = function(x) { return x * 3; };

// Arrow Function Expression
const fourTimes = (x) => x * 4;

// Save a function in a variable
const anotherNameForTwice = twice;

console.log(twice(10));
console.log(thrice(10));
console.log(fourTimes(10));
console.log(anotherNameForTwice(10));

// Take function as argument
function applyTwice(f, arg) {
    return f(f(arg));
}

// What do we get here?
console.log(applyTwice(twice, 10));






