const Image = require("../schemas/imageSchema");
const asyncHandler = require("express-async-handler");
const cloudinary = require("cloudinary").v2;
//get images belonging to id    /images/:id
const getImages = asyncHandler(async (req,res)=>{

})
//post image to cloudinary /images/
const uploadImage = asyncHandler(async(req,res)=>{

})

//delete image 
const deleteImage = asyncHandler(async(req,res)=>{

})

module.exports = {
    getImages,
    uploadImage,
    deleteImage
}

