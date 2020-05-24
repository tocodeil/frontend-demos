// A double slash is a line comment

/*
A slash star is a block comment
x 1. Comments
x 2. Variables
x 3. Conditions
x 4. For loops
x 5. While loops
x 6. Functions
*/

// Define variables with: var, const, let

const name = 'ynon';
// Possible values: string, number, object, array, null, boolean, undefined

let x = 10;
x = 'ten';

x = 99;
x += 10;
x = x * 5;
console.log(x);

if ( x < 800 ) {
    console.log('unbelivable');
}

if ( 'one' == 'one' ) {
    console.log('true');
}


for (let i=0 ;i < 10; i++) {
    console.log(`This is line ${i}`);
}

i = 99;
while (i > 0) {
    console.log(`${i} bottles of beer on the wall`);
    i--;
}

console.log(twice(10));


function twice(x) {
    let privateVariable = 10;
    return x * 2;
}

console.log(twice(10));









