// Calculate factorial
// fact(4) = 1 * 2 * 3 * 4 = 24
function fact(n) {
  let result = 1;
  for (let i=1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(fact(4));

let i = 99;

while ( i > 0 ) {
  console.log(`${i} bottles of beer on the wall`);
  i--;
}
