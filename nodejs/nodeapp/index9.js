// npm i jsonwebtokken

import express from 'express'
import jwt from 'jsonwebtoken'
import bcrpyt from 'bcrypt'

const app = express();
const SECRET = "sometext";

app.listen(8080, ()=>{
    console.log("Server started")
})

const users = [
    {
        name: "John",
        email: "john@email.com",
        password: "1234",
        role: "user"
    },
    {
        name: "Cathy",
        email: "cathy@email.com",
        password: "1234",
        role: "admin"
    }
];

app.use(express.json());

const authenticate = (req, res, next)=>{
    try{
        let token = req.headers.authorization;
        token = token.split(" ")[1];
        const user = jwt.verify(token, SECRET);
        req.role = user.role
        next();
    }
    catch(err){
        return req.json({message: "Access Denied"});
    }

    // res.json({message: "Access Denied"});
    // next();
};

const authorize = (role) =>{
    return (req, res, next) =>{
        if(req.role === role){
            next()
        }
        else{
            return res.json({message: "Access Denied"})
        }
    };
}

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    const found = users.find(
        (user)=>user.email === email && user.password === password
    );
    if(found){
        const token = jwt.sign(found, SECRET, {expiresIn: "1h"});
        res.status(200).json({user: found, token});
    }
    else{
        res.status(400).json({message: "Access Denied"})
    }
})


app.get("/users", authenticate, authorize("admin"),(req, res)=>{
    res.json(users);
})

// give register user and encrypt password make admin and user

app.post("/register", (req, res)=>{
    const {name, email, password, role} = req.body;
    

})


// const authorize = (role) =>{
//     return (req, res, next) =>{
//         if(req.role === role){
//             next()
//         }
//         else{
//             return res.json({message: "Access Denied"})
//         }
//     };
// }

// app.get("/users", authenticate, authorize("admin"),(req, res)=>{
//     res.json(users);
// })