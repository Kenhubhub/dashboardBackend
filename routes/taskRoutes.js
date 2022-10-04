const router = require("express").Router();
const {getTasks,createTask,updateTask,deleteTask} = require("../controllers/taskController")
//GET   retrieve all tasks for particular user
router.get("/:id",getTasks)
//POST to create a task - requires body param of userId,status,task
router.post("/",createTask)
//PUT   update status of a task
router.put("/:id",updateTask)
//DELETE
router.delete("/:id",deleteTask)

module.exports = router;