//console .log will oytput a message in the developer console
//two slashes starts a single line comment

console.log ("it worked");

/*
this is a multi-line comment
*/

//to declare a variable, use let or const
const ourClassNum = "J207";
let numStudents = 9; //with a number, you don't need quotes

console.log(ourClassNum);

//if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents);

//if you declare a variable with let, you can't change its value
ourClassNum = "C128";
//trying to change a const variable will give you an error, and stop the code

console.log(ourClassNum);

//const and let cannot be redeclared or recreated, it will also give you an error
//let numStudents = 25;