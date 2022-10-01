const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler")
const User = require("../schemas/userSchema")
//Use to register a user
const registerUser = asyncHandler(async(req,res) =>{
    const {email, username, password} = req.body;
    const createdUser = await User.create({
        username,
        email,
        password
    })
    res.json(createdUser)
})
//Use to login user
const loginUser = asyncHandler(async(req,res)=>{
    const {email, username, password} = req.body;
    const user= await User.findOne({email: email});
    if(user && user.password === password){
        res.json(user);
        console.log(user._id)
    }else{
        res.status(400);
        throw new Error("Invalid email or password");
    }
})

module.exports = {
    registerUser,
    loginUser
}