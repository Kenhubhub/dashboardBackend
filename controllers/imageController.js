const Image = require("../schemas/imageSchema");
const asyncHandler = require("express-async-handler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.cloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret 
});
//get images belonging to id    /images/:id
const getImages = asyncHandler(async (req,res)=>{

})
//post image to cloudinary /images/
const uploadImage = asyncHandler(async(req,res)=>{
    try {
        const fileStr = req.body.image;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'aqdbx0vp',
        });
        console.log(typeof uploadResponse.url,uploadResponse.url)
       res.json(uploadResponse.url);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

//delete image 
const deleteImage = asyncHandler(async(req,res)=>{

})

module.exports = {
    getImages,
    uploadImage,
    deleteImage
}

