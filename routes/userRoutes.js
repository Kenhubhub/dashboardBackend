const router = require("express").Router();
const {getUser,registerUser,loginUser} = require("../controllers/userController")

//POST
router.post("/register", registerUser);
router.post("/login",loginUser);
module.exports = router;