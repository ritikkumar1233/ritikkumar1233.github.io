import express from 'express'

const Router = express.Router();

Router.get('/show', (req, res)=>{
    res.send('Show users')
});

Router.post('/register', (req, res)=>{
    res.json({message: "User registerd"})
});

Router.post('/login', (req, res)=>{
    res.json({message: "User Login"})
});

export default Router
