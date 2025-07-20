//  Function
// function greet(){
//     console.log("Good Afternoon")
// }
// greet()


//IIFE => Immediately Invoked Function Expression
// (function greet(){
//     console.log("Good Afternoon")
// })()

// function add(a,b){
//     console.log(a+b)
// }
// add(4,5)

// function add(a,b){
//     return a+b
// }
// const result = add(3,4)
// console.log(result)
// console.log(add(4,5))

// function add(){
//     console.log(arguments)
// }
// add(5,4)

function add(){
    console.log(arguments[0])
}
add(5,4)