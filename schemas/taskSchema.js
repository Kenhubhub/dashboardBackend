const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    status: String,
    userid: {
        type: String,
        required: true
    }

},{
    timestamp: true
})

module.exports = mongoose.model("task",taskSchema);