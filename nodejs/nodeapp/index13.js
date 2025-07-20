//  C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg
//  npm i mongoose

import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express()
const SECRET = "something"

mongoose.connect("mongodb://localhost:27017/lpu").then(()=>{
    app.listen(8080, ()=>{
        console.log("Server Started");
    });
});

const userSchema = mongoose.Schema(
    {
    userName:{type: String},
    email:{type: String, unique: true},
    password:{type: String},
    role:{type: String, default: "user"}
    },
    {timestamps: true}
);
const userModel = mongoose.model("user", userSchema)
app.use(express.json());
app.post('/register', async (req, res)=>{
    try{
        const {userName, email, password} = req.body
        const hashepwd = await bcrypt.hash(password, 10);
        const user = {
            userName,
            email,
            password: hashepwd
        };
        const result =await userModel.create(user)
        res.status(201).json(result);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "something went wrong"});
    }
})

app.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if(isMatch){
                const userObj = {
                    userName:existingUser.userName, 
                    email:existingUser.email, 
                    role:existingUser.role
                }
                const token = jwt.sign(userObj, SECRET, {expiresIn: "1h"});
                res.status(200).json({user: userObj, token});
            }
            else{
                res.status(400).json({message: "Invalid Password"});
            }
        }
        else{
            res.status(400).json({message: "User not found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "something went wrong"})
    }
})

app.post('/update/:email', (req, res)=>{
    try{
        const id = req.params.email;
        const update = userModel.updateOne({email: id},{$set:{role: "admin"}});
        res.json({message: update})


    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"})
    }
})