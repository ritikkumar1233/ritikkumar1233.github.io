//  Array and Methods

// let arr = [1,2,3,4,5];
// console.log(arr)
// console.log(arr.length);
// arr.push(6)
// console.log(arr)

//  Spread Operator

// let newarr = [...arr,7,8,9]
// console.log(newarr)

// let sum = (a,b,c)=>{
//     return a+b+c;
// }
// let num = [1,2,3]
// console.log(sum(...num));

// let a = [1,2,3];
// console.log(...a);

// let b = (...arr)=>{
//     console.log(arr);
// }
// b(1,2,4)


//  Spread Operator in object

// let cart = {
//     "a" : 1,
//     "b" : 2,
// }
// console.log(cart)

// let newCart = {...cart, "c":3};
// console.log(newCart)


// let cart = {};
// let addToCart = (id, value)=>{
//     cart = {...cart, [id] : value};
//     console.log(cart);
// }
// addToCart("a", 3);
// addToCart("b", 5);

// let incQuantity = (id) =>{
//     cart[id] = cart[id]+1;
//     console.log(cart);
// }
// incQuantity("a");

// let decQuantity = (id) =>{
//     cart[id] = cart[id]-1;
//     console.log(cart)
// }
// decQuantity("b");


//  forEach
let arr = [1,2,3,4,5];
// arr.forEach((value, i, arr)=>{
//     console.log(i+" => "+value);
//     // console.log(arr)
// })

//  map
// const newarr = arr.map((value, i)=>{
//     // return value;
//     // return value+1;
//     // return 5;
//     // return value > 2;
//     // console.log(i +" => "+ value);
//     console.log(i +" => "+ (value+1));
// })
// newarr


//  find
// let newarr = arr.find((value)=>{
//     return value > 2;
// })
// console.log(newarr)


//  filter
// let newarr = arr.filter((value)=>{
//     return value > 2;
// })
// console.log(newarr)


//  reduce
// let newarr = arr.reduce((sum, value)=>{
//     return sum + value;
// })
// console.log(newarr)

let newarr = arr.reduce((max, value)=>{
    return value > max ? value : max;
})
console.log(newarr)

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = fruits.reduce((i, fruit)=>{
    i[fruit] = (i[fruit] || 0)+1;
    return i
}, {});
console.log(count);