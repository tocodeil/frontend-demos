// JavaScript Arrays

// 1. Defining Arrays
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'black']
// document.body.style.backgroundColor = colors[0]
const numbers = [10, 20, 30, 40];
const mixed = [10, true, 'wow', [10, 20], false];

// 2. Access arrays items and length
console.log(colors[0]);
console.log(numbers.length);

// reset array
// numbers.length = 0;

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
for (let clr of colors) {
  console.log(clr);
}

for (let i=0; i < colors.length; i++) {
  const clr = colors[i];
  console.log(`colors[${i}] = ${clr}`);
}

// 5. Array and const
