const router = require("express").Router();
const {getTasks,createTask,updateTask} = require("../controllers/taskController")
//GET   retrieve all tasks for particular user
router.get("/:id",getTasks)
//POST to create a task - requires body param of userId,status,task
router.post("/",createTask)
//PUT   update status of a task
router.put("/:id",updateTask)

module.exports = router;