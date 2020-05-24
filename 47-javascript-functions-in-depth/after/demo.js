// Part - Function Naming Patterns

twice(10);

// Function Declaration
// Function Hoisting
function twice(x) {
    return x * 2;
}

twice(10);

const f = function(x) { return x * x };
f(10);

// IIFE
!function() {
    let x = 10;
    console.log(x);
}();

// Arrow Functions
const g = (x) => {
    let y = x * x;
    return y;
};

const h = (x) => x * x ;

function applyTwice(f, x) {
    return f(f(x));
}

const arr = [];
for (let i=0; i < 10; i++) {
    arr.push(x => x * i);
}

const j = {
    name: 'John',
    hello() {
        // If a function is INSIDE an object
        // AND it is invoked using the object
        // A special argument called "this"
        // is passed automatically to the function
        console.log(`Hi! I'm ${this.name}`);
    },
}

