const logger = require("./logger");

console.log("Hello World!");

// Using commonJS pattern
logger.info("Using commonJS pattern!");

class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return `Person name: ${this.name}`;
  }
}

const person = new Person("Matheus Abreu");
console.log(person.showName());
