//  Arrays
const score = [2, 1, 7, 5, 3];
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

let cart = {};
const products = [
  {
    id: 1,
    name: "p1",
    price: 25,
  },
  {
    id: 2,
    name: "p2",
    price: 50,
  },
  {
    id: 3,
    name: "p3",
    price: 75,
  },
];
// const newProducts = [...products, { id: 4, name: "p4", price: 100 }];
// console.log(newProducts);
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
addToCart(4);
addToCart(5);
console.log(cart)

function incQuantity(id) {
  cart[id] = cart[id]+1;
}
incQuantity(4)
console.log(cart)