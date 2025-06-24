//  Arrays and Methods
// const score = [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore = [...score,7,8,9]
// console.log(newScore)

// const cart = {
//     1: 5,
//     5: 3
// };
// const newCart = ({...cart, 2: 9})
// console.log(newCart)

// let cart = {};
// const products = [
//   {
//     id: 1,
//     name: "p1",
//     price: 25,
//   },
//   {
//     id: 2,
//     name: "p2",
//     price: 50,
//   },
//   {
//     id: 3,
//     name: "p3",
//     price: 75,
//   },
// ];
// const newProducts = [...products, { id: 4, name: "p4", price: 100 }];
// console.log(newProducts);
// function addToCart(id) {
//   cart = { ...cart, [id]: 1 };
// }
// addToCart(4);
// addToCart(5);
// console.log(cart)

// function incQuantity(id) {
//   cart[id] = cart[id]+1;
// }
// incQuantity(4)
// console.log(cart)


const score = [2, 1, 7, 5, 3];
// score.forEach((value,i,arr)=>{
//   console.log(i+" => "+value);
//   // console.log(arr[i]);
// })

// const newScore = score.map((value)=>{            // Same features like forEach(value, index, arr)
  // return value
  // return value+5;
  // return 5
//   return value > 2;
// })
 // We can modify value by making new array but we can also modify existing array
// console.log(newScore)

// const newScore = score.filter((value)=>{       // Same features like forEach(value, index, arr)
//   return value > 2;
// });
// console.log(newScore)

// const newScore = score.find((value)=>{           // Same features like forEach(value, index, arr)
//   return value === 2;                            // Give only one output that match first
// });
// console.log(newScore)

const newScore = score.reduce((sum,value)=>{
  return sum + value
},0);
console.log(newScore)