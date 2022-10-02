const router = require("express").Router();
const {getImages,uploadImage,deleteImage} = require("../controllers/imageController")
//get all images belonging to user
router.get("/:id",getImages);
//post create an image
router.post("/upload",uploadImage)

//delete specific image
router.delete("/:id",deleteImage)

module.exports = router;