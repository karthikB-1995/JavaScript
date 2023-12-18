// Empty object
let emptyObject = {};

// Object with properties
let person = {
  name: "karthik",
  age: 28,
  isStudent: true,
  sayHello: function () {
    console.log("Hello!");
  },
};
person.sayHello();

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  features: ["air conditioning", "power windows"],
  owner: {
    name: "Alice",
    age: 30,
  },
};

console.log(person.name); // Output: karthik
console.log(car["make"]); // Output: Toyota
