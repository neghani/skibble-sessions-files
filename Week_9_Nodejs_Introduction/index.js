// import {getTodoFromServer,numberOfTodos} from './get-todos'

var Regex = require("regex");
var regex = new Regex(/^([A-Za-z]|[0-9])+$/);

console.log(regex.test("gane@sdfg.com"));

// const todos = require("./get-todos");
// const fs = require("fs");

// fs.readFile('index.html',function (err,data){
//     if(err){
//         console.log('there is error with file');
//         return;
//     }

//     console.log(data.toString())

// })

// try {

//   const buf = fs.readFileSync("index.html");
//   console.log(buf.toString());
// } catch (error) {
//   console.log(error);
// }
// const os = require('os');
// console.log(os.)

// const file = fs.writeFileSync('note.txt',"hey this is from nodejs");
// console.log(file);
