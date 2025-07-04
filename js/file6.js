//  Arrow function
// greet()     //  hoisting
// function greet(){
//     console.log("Hello")
// }

//  hoisting in variable  (always use var )
// x = 10;
// console.log(x)
// var x

// const greet = 10;
// console.log(greet)


//  Hoisting does not work with arrow function
// const greet = () => { console.log("Hello")};
// greet()


// const add = (a,b) => {
//         console.log(a+b)
//     }
// add(4,5);

// const add = (a,b) => {
//         return a+b
//     }
// console.log(add(4,5));

// const add = (...a) => {
//         console.log(a);
//     }
// console.log(add(4,5,6,7,8));

// const add = (...args) => {
//         console.log(args);
//     }
// add(4,5,6,7,8);

const add = (...args) => {
        console.log(args[0]);
    }
add(4,5,6,7,8);