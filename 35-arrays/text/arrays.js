// JavaScript Arrays

// 1. Defining Arrays
const colors = ['red', 'blue', 'green', 'yellow'];
const names = ['Bob', 'James'];

const mix = ['foo', 10, [2, 3], 'bar'];

// 2. Access arrays items and length
colors[0] = 'pink';
console.log(names[1]);
mix[99] = 7;

// length: 4
console.log(colors.length);

// drop last two elements
colors.length = 2;
console.log(colors);

// add 8 'undefined' elements to the array
colors.length = 10;

// 3. Array Methods
const names = ['Bob', 'James'];

// add Mike to the end of names
names.push('Mike');

// add Jane to the start of names
names.unshift('Jane');

// print: Jane, Bob, James, Mike
console.log(names);

// remove Mike from the end
names.pop();

// remove Jane from the start
names.shift();

// print: Bob, James
console.log(names);

names.push('one', 'two', 'three');
// numbers == ["Bob", "James", "one", "two", "three"];
names.splice(1, 2);
// numbers == ["Bob", "two", "three"];



// 4. Arrays and Loops
let numbers = [10, 12, 17, 5, 9];

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

function printSingleItem(val, index) {
  console.log(`Index = ${index}; Value = ${val}`);
}

const total = numbers.reduce(sum);
console.log('sum of all items = ' + total);

const squares = numbers.map(square);
console.log('squares = ', squares);

const sumSquares = numbers.map(square).reduce(sum);
console.log('sum of squares = ' + sumSquares);

numbers.forEach(printSingleItem);

// 5. Array and const
const data = [10, 20, 30];

// this works:
data[0] = 99;

// this would fail:
// data = [99];
