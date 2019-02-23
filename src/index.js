// commonJS
const logger = require("./logger");
// ES6
import Person from "./person";
// React
import StatelessComp from "./reactfile";

console.log("Hello World!");

// Using commonJS pattern
logger.info("Using commonJS pattern!");

// Using Class, Import and Export of ES6 (EcmaScript2015)
const person = new Person("ES6 / EcmaScript2015");
console.log(person.showName());

const product = {
  name: "JBL Charge 3",
  price: 119.9,
  discount: 9.9
};

console.log("product", product);

// Using spread operator
function cloneObj(object) {
  return { ...object };
}

const newProduct = cloneObj(product);
newProduct.name = "JBL Charge 4";

console.log("newProduct", newProduct);

StatelessComp();
