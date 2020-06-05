/**
 * 
2. Function Names and Variables
  - A function name is just a variable
  - Can create more names
  - Can call a function by any name

 */

 function foo() {
     return 5;
 }

 const bar = function() {
     return 10;
 };

 const anotherNameOfFoo = foo;
 const result = foo();


 /**
  * 3. Passing function as argument to another function
  - btn.addEventListener('click', showMessage);
  - Write a function that takes another function (applyTwice)
  */

  function applyTwice(f, x) {
      return f(f(x));
  }

  function twice(x) {
      return x * 2;
  }

  applyTwice(twice, 10);

  /**
   * 
4. Saving a function in an array
  - Create nthice array of functions
   */

   const nthice = [];
   for (let i=0; i < 10; i++) {
       nthice[i] = function(x) {
            return x * i;
       }
   }

/**
 * 
5. Saving a function in an object
  - The this special argument
 * */   

 const me = {
     name: 'ynon',
     hello() {
         console.log(`Hi! I am ${this.name}`);
     },
 };


 /**
  * 6. Using functions as objects
  - The length and name properties
  - Creating new properties

  */

  