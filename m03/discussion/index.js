//console.log('hello')
//[function]
/*
    Function in JS are line/block of codes that tell our device/application
    to perform a certain tasked when called/invoked

    Functions are reusable pieces of code with instruction which are 
    used over and over again just as long we can cal/invoke them

    syntax:
        function functonName() {
            code block. the block of code will be executed once the
            function has been run/called/invoked
        }
*/

function printName() {
    console.log('My name is Suga. I am a bts member.');
};

//invoke function - functionName()
printName();
printName();
printName();
printName();
printName();

function showSum(){
    console.log(8+2);
};

showSum();
showSum();
showSum();

// Note: Do not create functions with the same name
/*
    Function with parameters and arguments

    A parameter acts a named variable/container that exist ONLY 
    inside of the function. This is used to store information or to
    act as a stand-in or the contain value passed into the function
    a an argument

*/
function displayName(name){
    console.log(`My name is ${name}`)
};

// You cannot get the vlue of a parameter outside of its functions
// console.log(name)


// when a function is involved and data is passed, we call the data 'argument'
/* 
In this invocation 'Jungkook' is an argument passed into our displayName
and is represented by the 'name' parameter within our functon
*/
// data passed into the function: argument
// representation of the within the function: parameter
displayName('Jungkook')
displayName('Jimin')

function displayNumber(number) {
    console.log(number);
  }

displayNumber(5400);
displayNumber(5400);
displayNumber(5400);
displayNumber(5400);
displayNumber(5400);

function showMessage(message) {
    console.log(message);
}

showMessage('JavaScript is fun! I love DLSUD.');

//multiple parameters and arguments
/*
a function can not only receie a single argument but it can also
receive multiple arguments as ong as it matches the number of
parameters in function
*/
function displayFullName(firstName, lastName, age){
    console.log(`My name is ${firstName} ${lastName}. I am ${age} years old.`)
};

displayFullName('Jungkook', 'Jeon', 25);

function createFullName(firstName, middleInitial, lastName) {
    return `${firstName} ${middleInitial} ${lastName}`
    console.log("I will no longer run because the function's value or result has been returned.")
}

// result of this function can be save into variable
// the result of a function without a return keyword will not be save
let fullName1 = createFullName('Thonie', 'R', 'Fernandez');
console.log(fullName1);

let fullName2 = createFullName('Jeffrey', 'Z', 'Smith')
console.log(fullName2);

