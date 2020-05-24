// Prototype

// Object -> Prototype -> Prototype -> Prototype -> ... Object

// person -> PersonPrototype
//          /
// person  /

/*
Person.prototype = {
    hello() {
        console.log(`Hi! ${this.name}`);
    },
}

function Person(name) {
    // "this" is the new object
    this.name = name;
}
*/


class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hi! ${this.name}`);
    }
}
  
// Use new when calling the function
const p1 = new Person("ynon");
const p2 = new Person("bob");
