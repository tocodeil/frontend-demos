// JavaScript Arrays

// 1. Defining Arrays
const colors = ['red', 'blue', 'white'];
const arr = [10, 20, 'three', [10, 20, 30], null];


// 2. Access arrays items and length
console.log(arr[0]);
arr[0] = 99;

console.log(arr);


// 3. Array Methods
///   push, unshift, pop, shift, splice
arr.push(40);
arr.unshift(0);
arr.pop();
arr.shift();


// 4. Arrays and Loops
for (let clr of colors) {
    console.log(clr);
}

for (let i=0; i < colors.length; i++) {
    const clr = colors[i];
    console.log(`Colors[${i}] === ${clr}`);
}

// 5. Array and const
