// Arrow Function

// greet();                 // hoisting
// function greet(){
//     console.log("Hello World");
// }


// hoisting in variable
// x = 10;
// console.log(x);
// var x;

// hoisting do not work in arrow function

// let greet = ()=>{console.log("Hello World")};
// greet();

// const add = (a,b) => {
//     return a+b;
// }
// add(4, 5);

// let add = (...a) => {
//     console.log(a);
//     console.log(typeof a)
// }
// add(4,5,6,7,8);

let add = (...args) => {
    console.log(args[3]);
}
add(4,5,6,7,8);