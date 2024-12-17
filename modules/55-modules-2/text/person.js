export default class Person {
  constructor() {
    console.log(`I'm a person`);
  }
}

export function createPerson() {
  return new Person();
}