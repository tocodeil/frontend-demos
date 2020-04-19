// Define an array
const nthice = [];
for (let i=0; i < 10; i++) {
    // Fill the array with "functions"
    nthice[i] = (x) => x * i;
}

// prints 6 - not a big surprise
console.log(nthice[2](3));