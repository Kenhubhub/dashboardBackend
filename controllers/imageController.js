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
    const images = await Image.find({userid: req.params.id});
    res.json(images);
})
//post image to cloudinary /images/
const uploadImage = asyncHandler(async(req,res)=>{
    try {
        const fileStr = req.body.image;
        
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'aqdbx0vp',
        });
      
       res.json(uploadResponse.url);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
})
//post image to gallery
const uploadGallery = asyncHandler(async(req,res)=>{
    try {
        const fileStr = req.body.image;
        const userid = req.body.id;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'aqdbx0vp',
        });
        
        const imageResponse = await Image.create({
            URL: uploadResponse.url,
            userid
        })
        console.log("sucesss", imageResponse);
       res.json(imageResponse);
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
    uploadGallery,
    deleteImage
}

