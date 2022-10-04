const router = require("express").Router();
const {getImages,uploadImage,deleteImage,uploadGallery} = require("../controllers/imageController")
//get all images belonging to user
router.get("/:id",getImages);
//post create a profile image
router.post("/upload",uploadImage)
//post
router.post("/uploadgallery",uploadGallery)
//delete specific image
router.delete("/:id",deleteImage)

module.exports = router;