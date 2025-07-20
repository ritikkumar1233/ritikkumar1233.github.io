//  json

//  From server it comes in string format then we have to convert in object and send back to server again we have to convert in string format

const student = '{"name":"ritik", "age":21}' 
const obj = JSON.parse(student)
console.log(obj.name)
console.log(obj)
console.log(JSON.stringify(obj))
