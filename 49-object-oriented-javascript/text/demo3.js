/*
function Person(name) {
    this.name = name;
}

Person.prototype.hello = function() {
    console.log(`Hi! ${this.name}`);
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

const p1 = new Person('one');
const p2 = new Person('two');