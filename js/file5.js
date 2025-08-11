//  Object

const student = {
    name : "ritik",
    age : 21,
};

console.log(student);
console.log(student.name);
console.log(student["name"]);
student.city = "patna";
console.log(student)
// delete student.age
// console.log(student)

const key = Object.keys(student);
console.log(key)

const value = Object.values(student)
console.log(value)

const cart = {
    copy : 4,
    pen : 2,
    eraser : 3,
}

console.log(cart)

cart["copy"] = cart["copy"]+1
console.log(cart);
cart["pen"] = cart["pen"]-1;
console.log(cart)