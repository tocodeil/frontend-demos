function Person1(name) {
  const person = {
    name: name,
    hello() {
      console.log(`Hi! ${this.name}`);
    },
  }
  return person;  
}
