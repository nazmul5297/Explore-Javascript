console.log("create a object with literals");

const obj = {};
obj.name = "Naimul";
obj.fatherName = "Rahaman";
obj.motherName = "Rahiman";

console.log("This is a simple onject which is created Literals");
console.log(obj);
console.log("\n");
console.log("Create Object with 'NEW' KeyWord");
const objWithNewKeyword = new Object();
objWithNewKeyword.name = "Naimul";
objWithNewKeyword.fatherName = "Rahaman";
objWithNewKeyword.motherName = "Rahiman";

console.log("This is a simple onject which is created with New Keyword");
console.log(objWithNewKeyword);

console.log("\n");
console.log("JavaScript Objects are Mutable");
const x = { ...objWithNewKeyword };
console.log(x);
x.motherName = "Sakina";
console.log(objWithNewKeyword);
