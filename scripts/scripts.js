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

/* if you declare a variable with let, you can't change its value
ourClassNum = "C128";
trying to change a const variable will give you an error, and stop the code */

/*const and let cannot be redeclared or recreated, it will also give you an error
let numStudents = 25; */

/**********************
      js datatypes
 **********************/
//storing a value of true or false is called a booleam
let doorClosed = true;
console.log(doorClosed);

//you can create an empty variable, which will return undefined
let whiteBoardContent;
console.log(whiteBoardContent);

//you can use the keyword "null" (which means nothing)
let classKids = null;

// difference between == and ===
const numLights = 12; //this variable is storing a number
const numChairs = "12"; //this variable is storing a piece of text

console.log(numLights == numChairs);
console.log(numLights === numChairs);
//== checks if they are the same value
//=== checks if they are the same value and same datatype

/****************************
example using the form field
****************************/

document.getElementById("answer").addEventListener("blur", function(){
    const userAnswer = this.value;
    // console.log(userAnswer);

    if(userAnswer == "document"){
        document.getElementById("feedback").textContent = "You're right!";
    }else{
        
    }
})