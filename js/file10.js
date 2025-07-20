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
const newProducts = [...products, { id: 4, name: "p4", price: 100 }];
// console.log(newProducts);
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
addToCart(1);
addToCart(2);
console.log(cart)

function incQuantity(id) {
  cart[id] = cart[id]+1;
}
function decQuantity(id){
    cart[id] = cart[id]-1;
}
incQuantity(1)
incQuantity(2)
console.log(cart)
decQuantity(1)
console.log(cart)