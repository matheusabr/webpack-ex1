const logger = require("./logger");
import Person from "./person";

console.log("Hello World!");

// Using commonJS pattern
logger.info("Using commonJS pattern!");

// Using Class, Import and Export of ES6 (EcmaScript2015)
const person = new Person("ES6 / EcmaScript2015");
console.log(person.showName());
