const p1 = {
    name: 'John',
    hello() {
        console.log(`Hi! ${this.name}`);
    },
}

p1.hello();