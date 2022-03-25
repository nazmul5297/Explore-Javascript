const prompt = require("prompt-sync")({ sigint: true });

const ArrayAtDemonstation = () => {
  console.log(" Demonstration Of Array At ");
  let arrLength = prompt("Enter the length Of the Array");
  while (arrLength > 10 || arrLength < 1) {
    console.log("Length Must Be in 1-10");
    arrLength = prompt("Enter the length Of the Array");
  }
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    const arrValue = prompt(`Enter The value of Index ${i}:`);
    arr.push(arrValue);
  }
  console.log("\n");
  const arrayIndex = prompt(`Enter Index number which value you want to show:`);
  console.log("\n");
  console.log(
    `The Value of index number ${arrayIndex} is :${arr.at(arrayIndex)}`
  );
};

module.exports = ArrayAtDemonstation;
