//  cmd line argument

import express from 'express'

// const stName = "John"
// console.log(stName)

// const stName = process.argv[2];
// console.log(`Hello ${stName}`)

// const stName1 = process.argv[2] || "John"

// const stName1 = process.argv[2]
// const stName2 = process.argv[3]

// console.log(`Hello ${stName1} and ${stName2}`)

const app = express();

const Port = process.argv[2] || 8080

app.listen(Port, ()=>{
    console.log(`Server started at ${Port}`)
})

