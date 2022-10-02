const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler")
const User = require("../schemas/userSchema")
//Use to register a user
const registerUser = asyncHandler(async(req,res) =>{
    const {email, username, password,profilePicture} = req.body;
    const createdUser = await User.create({
        username,
        email,
        password,
        profilePicture
    })
    console.log(createdUser.profilePicture)
    res.json(createdUser)
})
//Use to login user
const loginUser = asyncHandler(async(req,res)=>{
    const {username, password} = req.body;
    const user= await User.findOne({username: username});
    if(user && user.password === password){
        res.json(user);
    }else{
        res.send(null);
    }
})

module.exports = {
    registerUser,
    loginUser
}