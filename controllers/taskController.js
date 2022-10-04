const asyncHandler = require("express-async-handler")
const Task = require("../schemas/taskSchema");
//GET   /tasks/:id
const getTasks = asyncHandler(async(req,res)=>{
    const userId = req.params.id;
    const tasks = await Task.find({userid:userId});
    res.json(tasks)
})
//POST  /tasks/
const createTask = asyncHandler(async(req,res) =>{
    const {userId,task,status} = req.body;
    const usertask = await Task.create({
        task,
        status,
        userid: userId
    })
    res.json(usertask);
})
//PUT /tasks/:id
const updateTask = asyncHandler(async(req,res)=>{
    const task = await Task.findById(req.params.id);
    if(task){
        if(task.status === "incomplete"){
            
           const taskResponse = await Task.findByIdAndUpdate(req.params.id,{status: "complete"})
            res.json(taskResponse)
        }else{
           
            const taskResponse = await Task.findByIdAndUpdate(req.params.id,{status: "incomplete"})
            res.json(taskResponse);
        }
    }else{
        res.status(400);
        throw new Error("Invalid task");
    }
    
})
module.exports = {
    getTasks,
    createTask,
    updateTask
}