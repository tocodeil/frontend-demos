function Person(name) {
    const person = {
        name: name,
        hello() {
            console.log(`Hi! ${this.name}`);
        },
    }
    return person;
}

const p1 = Person('one');
const p2 = Person('two');