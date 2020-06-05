# JavaScript Functions

1. Let's Use Proper Names
  - Function Declaration
  function foo() {

  }
  - Function Expression
  const foo = function() {

  };
  addEventListener('click', function() {

  });
  (function() {

  }());
  - Arrow Function Expression
  const bar = () => { return 7; }

  const twice = (x) => x * 2;
  twice(10); => 20

2. Function Names and Variables
  - A function name is just a variable
  - Can create more names
  - Can call a function by any name

3. Passing function as argument to another function
  - btn.addEventListener('click', showMessage);
  - Write a function that takes another function (applyTwice)

4. Saving a function in an array
  - Create nthice array of functions

5. Saving a function in an object
  - The this special argument

6. Using functions as objects
  - The length and name properties
  - Creating new properties

