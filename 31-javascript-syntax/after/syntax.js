/**
 * Comments JavaScripts
 * 
 */

// Line comments also work

/**
 * 1. Variables
 */

// const / let / var
var x = 10;
x = 20;
x = 30;

let y = 20;
y = 30;
y = "hello world";

const z = 30;
// This will throw an error: z = 40;

/**
 * Inside a variable: 
 * number, string, object, array, null, undefined, true, false
 */


 /**
  * Conditions
  */

  if (y.length > 3) {
      console.log("It's a long string");
  } else {
      console.log("Not that long");
  }

  for (let i=0; i < 10; i++) {
      console.log(i);
  }

  let num = 9123;
  while (num > 0) {
      console.log(num);
      num = Math.floor(num / 10);
  }

  countUntil(10);

  function countUntil(count) {
      for (let i=0; i < count; i++) {
          console.log(i);
      }
  }

  countUntil(10);