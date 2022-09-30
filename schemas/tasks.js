const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    status: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }

})

module.exports = mongoose.model("task",taskSchema);