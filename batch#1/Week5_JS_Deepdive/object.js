// let ganesh = [ 100, "10feet", "8KG"];

var globalVar = "This is in top most layer";
console.log(this);
function globalFun() {
  console.log(this);
}
globalFun();



// let ganesh = {
//   name: "Ganesh",
//   firstName: "Pilli",
//   age: 100,
//   height: "10feet",
//   weight: "8KG",
//   tellName: function () {
//     return globalVar;
//   },
//   whatYouDo: function () {
//     return "I work as Lead Software engineer";
//   },
// };

// console.log(
//   ` My names is ${ganesh.name} , my age is ${ganesh.age} , my height is ${ganesh.height} and my wight is ${ganesh.weight}`
// );
// console.log(ganesh.tellName());
