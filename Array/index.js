const prompt = require("prompt-sync")({ sigint: true });
const ArrayAtDemonstation = require("./arrayAt.js");

console.log("Hi Here We Expore JavaScript Array and different Method");
const methodObject = [
  {
    name_of_method: "EXIT",
    press: 0,
  },
  {
    name_of_method: "array.at()",
    press: 1,
  },
  {
    name_of_method: "array.concat()",
    press: 2,
  },
  {
    name_of_method: "array.copyWithin()",
    press: 3,
  },
  {
    name_of_method: "array.entries()",
    press: 4,
  },
  {
    name_of_method: "array.every()",
    press: 5,
  },
  {
    name_of_method: "array.fill()",
    press: 6,
  },
  {
    name_of_method: "array.filter()",
    press: 7,
  },
  {
    name_of_method: "array.find()",
    press: 8,
  },
  {
    name_of_method: "array.findIndex()",
    press: 9,
  },
  {
    name_of_method: "array.flat()",
    press: 10,
  },
  {
    name_of_method: "array.flatMap()",
    press: 11,
  },

  {
    name_of_method: "array.forEach()",
    press: 12,
  },
  {
    name_of_method: "array.groupBy()",
    press: 13,
  },
  {
    name_of_method: "array.groupByToMap()",
    press: 14,
  },
  {
    name_of_method: "array.includes()",
    press: 15,
  },
  {
    name_of_method: "array.indexOf()",
    press: 16,
  },
  {
    name_of_method: "array.join()",
    press: 17,
  },
  {
    name_of_method: "array.keys()",
    press: 18,
  },
  {
    name_of_method: "array.map()",
    press: 19,
  },
  {
    name_of_method: "array.push()",
    press: 20,
  },
  {
    name_of_method: "array.pop()",
    press: 21,
  },
  {
    name_of_method: "array.lastIndexOf())",
    press: 22,
  },
  {
    name_of_method: "array.reduce()",
    press: 23,
  },
  {
    name_of_method: "array.reduceRigth()",
    press: 24,
  },
  {
    name_of_method: "array.shift()",
    press: 25,
  },
  {
    name_of_method: "array.unshift()",
    press: 26,
  },
  {
    name_of_method: "array.reverse()",
    press: 27,
  },
  {
    name_of_method: "array.sort()",
    press: 28,
  },
  {
    name_of_method: "array.slice()",
    press: 29,
  },

  {
    name_of_method: "array.splice()",
    press: 30,
  },
  {
    name_of_method: "array.toString()",
    press: 31,
  },
  {
    name_of_method: "array.values()",
    press: 32,
  },
  {
    name_of_method: "array.toLocalString()",
    press: 33,
  },
];

console.table(methodObject);
let number = parseInt(prompt("enter a number:"));

while (number != 0) {
  switch (number) {
    case 1:
      ArrayAtDemonstation();
      break;
  }

  number = parseInt(prompt("Press 0 to terminate Or enter a number:"));
}
